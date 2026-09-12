import { useEffect, useState } from "react";
import { Building2, Loader2, Plus, RefreshCw } from "lucide-react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";
import { api, getSession } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/to-let")({
  head: () => ({ meta: [{ title: "To-let — Campus Crate" }, { name: "description", content: "Find student-friendly rooms and apartments near campus." }] }),
  component: ToLetPage,
});

const emptyForm = { title: "", description: "", area: "", monthlyRent: "", bedrooms: "1", bathrooms: "1", contactPhone: "", availableFrom: "" };

function ToLetPage() {
  const navigate = useNavigate();
  const session = getSession();
  const userId = session?.user?.userId;
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({ search: "", area: "", maxRent: "" });
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState(emptyForm);

  const loadListings = () => {
    setLoading(true);
    const params = new URLSearchParams();
    if (filters.search) params.set("search", filters.search);
    if (filters.area) params.set("area", filters.area);
    if (filters.maxRent) params.set("maxRent", filters.maxRent);
    api(`/api/to-let/listings${params.size ? `?${params}` : ""}`)
      .then(setListings)
      .catch((error) => { setListings([]); toast.error(error.message); })
      .finally(() => setLoading(false));
  };
  useEffect(() => { loadListings(); }, []);

  const submit = (event) => {
    event.preventDefault();
    if (!userId) { toast.error("Please sign in to post a rental listing."); navigate({ to: "/login" }); return; }
    api("/api/to-let/listings", { method: "POST", body: JSON.stringify({ ...form, ownerId: userId, monthlyRent: Number(form.monthlyRent), bedrooms: Number(form.bedrooms), bathrooms: Number(form.bathrooms), availableFrom: form.availableFrom || null }) })
      .then(() => { toast.success("Your to-let listing is live."); setForm(emptyForm); setShowForm(false); loadListings(); })
      .catch((error) => toast.error(error.message));
  };

  return <main className="container-shell py-10">
    <section className="rounded-2xl bg-primary p-7 text-primary-foreground sm:p-10"><div className="max-w-2xl"><p className="eyebrow text-primary-foreground/75">STUDENT HOUSING</p><h1 className="mt-2 flex items-center gap-3 font-display text-3xl font-bold sm:text-4xl"><Building2 />To-let service</h1><p className="mt-3 text-primary-foreground/85">Browse rooms and apartments around campus, or share a place you have available.</p></div></section>
    <section className="mt-8 rounded-xl border border-border bg-card p-5"><div className="flex flex-wrap items-end gap-3"><div className="min-w-48 flex-1"><Label htmlFor="search">Search</Label><Input id="search" placeholder="Room, apartment, features..." value={filters.search} onChange={(event) => setFilters({ ...filters, search: event.target.value })} /></div><div className="min-w-40 flex-1"><Label htmlFor="area">Area</Label><Input id="area" placeholder="e.g. Kuril" value={filters.area} onChange={(event) => setFilters({ ...filters, area: event.target.value })} /></div><div className="w-36"><Label htmlFor="rent">Max rent</Label><Input id="rent" type="number" min="0" value={filters.maxRent} onChange={(event) => setFilters({ ...filters, maxRent: event.target.value })} /></div><Button onClick={loadListings}><RefreshCw />Search</Button><Button variant="outline" onClick={() => { if (!userId) { toast.error("Please sign in to post a rental listing."); navigate({ to: "/login" }); } else setShowForm(!showForm); }}><Plus />Post to-let</Button></div></section>
    {showForm && <form onSubmit={submit} className="mt-6 grid gap-4 rounded-xl border border-border bg-card p-5 md:grid-cols-2"><h2 className="md:col-span-2 font-display text-xl font-bold">Post a rental listing</h2>{[["title", "Listing title"], ["area", "Area"], ["monthlyRent", "Monthly rent"], ["bedrooms", "Bedrooms"], ["bathrooms", "Bathrooms"], ["contactPhone", "Contact phone"], ["availableFrom", "Available from"]].map(([key, label]) => <div key={key}><Label htmlFor={key}>{label}</Label><Input id={key} required={!['availableFrom'].includes(key)} type={key === "monthlyRent" || key === "bedrooms" || key === "bathrooms" ? "number" : key === "availableFrom" ? "date" : "text"} min={key === "monthlyRent" ? "1" : key === "bedrooms" || key === "bathrooms" ? "0" : undefined} value={form[key]} onChange={(event) => setForm({ ...form, [key]: event.target.value })} /></div>)}<div className="md:col-span-2"><Label htmlFor="description">Description</Label><textarea id="description" required value={form.description} onChange={(event) => setForm({ ...form, description: event.target.value })} className="min-h-28 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none" placeholder="Include furnishing, utilities, preferred tenant, and other useful details." /></div><div className="md:col-span-2 flex gap-3"><Button type="submit">Publish listing</Button><Button type="button" variant="outline" onClick={() => setShowForm(false)}>Cancel</Button></div></form>}
    <section className="mt-8"><div className="mb-4"><h2 className="font-display text-xl font-bold">Available places</h2><p className="text-sm text-muted-foreground">Contact the owner directly to arrange a visit.</p></div>{loading ? <div className="flex justify-center py-16"><Loader2 className="animate-spin" /></div> : listings.length ? <div className="grid gap-4 md:grid-cols-2">{listings.map((listing) => <article key={listing.listingId} className="rounded-xl border border-border bg-card p-5"><div className="flex items-start justify-between gap-4"><div><p className="text-xs font-semibold uppercase tracking-wide text-primary">{listing.area}</p><h3 className="mt-1 font-display text-xl font-bold">{listing.title}</h3></div><p className="shrink-0 text-lg font-bold text-primary">৳{Number(listing.monthlyRent).toLocaleString()}<span className="text-xs font-normal text-muted-foreground">/mo</span></p></div><p className="mt-3 whitespace-pre-wrap text-sm text-muted-foreground">{listing.description}</p><div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 border-t pt-4 text-sm"><span>{listing.bedrooms} bedroom{listing.bedrooms === 1 ? "" : "s"}</span><span>{listing.bathrooms} bathroom{listing.bathrooms === 1 ? "" : "s"}</span>{listing.availableFrom && <span>Available {new Date(`${listing.availableFrom}T00:00:00`).toLocaleDateString()}</span>}</div><p className="mt-3 text-sm font-medium">Contact: {listing.contactPhone}</p></article>)}</div> : <div className="rounded-xl border border-dashed border-border p-12 text-center text-muted-foreground">No available rental listings match your search.</div>}</section>
  </main>;
}
