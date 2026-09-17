import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, CalendarDays, Loader2, MapPin, MessageCircle, Phone, Share2, ShieldCheck, Tag } from "lucide-react";
import { toast } from "sonner";
import { api } from "@/lib/api";
import { ListingImage } from "@/components/listing-card";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/listing/$id")({
  component: ListingDetails,
});

function parseListingId(value) {
  const match = /^(lost|market|to-let)-(\d+)$/.exec(value);
  return match ? { module: match[1], id: match[2] } : null;
}

function endpointFor({ module, id }) {
  if (module === "lost") return `/api/items/${id}`;
  if (module === "market") return `/api/marketplace/posts/${id}`;
  return `/api/to-let/listings/${id}`;
}

function normalizeListing(module, item) {
  if (module === "lost") return { module, id: `lost-${item.itemId}`, title: item.title, description: item.description, detail: `Location #${item.locationId}`, meta: item.createdAt, tag: item.itemType, status: item.status, imageUrl: item.imageUrl, owner: `Student #${item.reportedBy}` };
  if (module === "market") return { module, id: `market-${item.postId}`, title: item.title, description: item.description, detail: item.fixedPrice ? `৳${Number(item.fixedPrice).toLocaleString()}` : `Starting ৳${Number(item.startingPrice).toLocaleString()}`, meta: item.condition, tag: item.sellingType, status: item.status, owner: `Student #${item.sellerId}` };
  return { module, id: `to-let-${item.listingId}`, title: item.title, description: item.description, detail: `৳${Number(item.monthlyRent).toLocaleString()}/month`, meta: item.area, tag: `${item.bedrooms} bed · ${item.bathrooms} bath`, status: item.status, owner: `Student #${item.ownerId}`, phone: item.contactPhone, availableFrom: item.availableFrom };
}

function ListingDetails() {
  const { id } = Route.useParams();
  const listingKey = parseListingId(id);
  const [listing, setListing] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!listingKey) { setError("This listing link is invalid."); return; }
    let active = true;
    api(endpointFor(listingKey))
      .then((item) => { if (active) setListing(normalizeListing(listingKey.module, item)); })
      .catch((requestError) => { if (active) setError(requestError.message); });
    return () => { active = false; };
  }, [id]);

  if (error) return <main className="container-shell py-16"><div className="mx-auto max-w-lg rounded-xl border border-danger/30 bg-danger/5 p-6 text-center"><h1 className="font-display text-2xl font-bold">Listing unavailable</h1><p className="mt-2 text-sm text-muted-foreground">{error}</p><Button className="mt-5" asChild><Link to="/marketplace">Browse listings</Link></Button></div></main>;
  if (!listing) return <main className="container-shell flex justify-center py-24"><Loader2 className="animate-spin text-primary" /></main>;

  const backTo = listing.module === "lost" ? "/lost-and-found" : listing.module === "to-let" ? "/to-let" : "/marketplace";
  const moduleLabel = listing.module === "lost" ? "Lost & Found" : listing.module === "to-let" ? "To-let" : "Marketplace";
  const initial = listing.owner.replace("Student #", "S").slice(0, 2).toUpperCase();

  return <main className="container-shell py-8"><Link to={backTo} className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"><ArrowLeft className="size-4" />Back to {moduleLabel}</Link><div className="mt-5 grid gap-8 lg:grid-cols-[1.6fr_1fr]"><div><div className="h-72 overflow-hidden rounded-xl border border-border sm:h-96"><ListingImage listing={listing} /></div><div className="mt-6 flex flex-wrap items-center gap-2"><span className="rounded-full bg-accent px-2.5 py-1 text-xs font-semibold text-accent-foreground">{listing.tag}</span><span className="rounded-full bg-primary-soft px-2.5 py-1 text-xs font-bold text-primary">{listing.status}</span></div><h1 className="mt-3 font-display text-3xl font-bold sm:text-4xl">{listing.title}</h1><p className="mt-2 font-display text-2xl font-bold text-primary">{listing.detail}</p><div className="mt-4 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2"><p className="flex items-center gap-2"><MapPin className="size-4 text-primary" />{listing.meta}</p><p className="flex items-center gap-2"><CalendarDays className="size-4" />{listing.availableFrom ? `Available ${new Date(`${listing.availableFrom}T00:00:00`).toLocaleDateString()}` : "Posted recently"}</p><p className="flex items-center gap-2"><Tag className="size-4" />{moduleLabel} · {listing.tag}</p></div><h2 className="mt-8 font-display text-lg font-semibold">Description</h2><p className="mt-2 max-w-2xl whitespace-pre-wrap leading-relaxed text-muted-foreground">{listing.description}</p></div><aside className="lg:sticky lg:top-24 lg:self-start"><div className="rounded-xl border border-border bg-card p-5 shadow-soft"><p className="text-sm font-semibold text-muted-foreground">{listing.module === "market" ? "Seller" : "Posted by"}</p><div className="mt-3 flex items-center gap-3"><div className="flex size-12 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">{initial}</div><div><p className="font-semibold">{listing.owner}</p><p className="flex items-center gap-1 text-xs text-success"><ShieldCheck className="size-3.5" />Campus community member</p></div></div>{listing.phone && <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground"><Phone className="size-4" />{listing.phone}</p>}<div className="mt-5 grid gap-2"><Button onClick={() => toast.success("Use the contact information in this listing to get in touch.")}><MessageCircle />Contact owner</Button><Button variant="outline" onClick={() => navigator.clipboard?.writeText(window.location.href).then(() => toast.success("Listing link copied"))}><Share2 />Share listing</Button></div><p className="mt-4 text-xs text-muted-foreground">Meet in public campus spaces and verify details before any payment.</p></div></aside></div></main>;
}
