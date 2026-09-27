import { useEffect, useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Search, UtensilsCrossed } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ListingCard } from "@/components/listing-card";
import { api } from "@/services/api";
import { usePolling } from "@/utils/use-polling";

export const Route = createFileRoute("/search")({ component: SearchPage });

const sections = ["all", "lost", "market", "to-let", "food"];
const labels = { all: "All", lost: "Lost & Found", market: "Marketplace", "to-let": "To-let", food: "Food" };

export function SearchPage() {
  const [query, setQuery] = useState("");
  const [section, setSection] = useState("all");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => setQuery(new URLSearchParams(window.location.search).get("q") || ""), []);
  usePolling(async () => {
    try {
      const [lost, market, toLet, vendors] = await Promise.all([api("/api/items"), api("/api/marketplace/posts"), api("/api/to-let/listings"), api("/api/food/vendors")]);
      setResults([
        ...lost.map((item) => ({ id: `lost-${item.itemId}`, module: "lost", title: item.title, description: item.description, detail: `Location #${item.locationId}`, meta: item.createdAt ?? "Recently", tag: item.itemType, status: item.status, imageUrl: item.imageUrl })),
        ...market.map((item) => ({ id: `market-${item.postId}`, module: "market", title: item.title, description: item.description, detail: item.fixedPrice ? `৳${item.fixedPrice}` : `Starting ৳${item.startingPrice}`, meta: item.condition, tag: item.sellingType, status: item.status, owner: `Student #${item.sellerId}` })),
        ...toLet.map((item) => ({ id: `to-let-${item.listingId}`, module: "to-let", title: item.title, description: item.description, detail: `৳${item.monthlyRent}/month`, meta: item.area, tag: `${item.bedrooms} bed · ${item.bathrooms} bath`, status: item.status, imageUrl: item.photoUrls?.[0], owner: `Student #${item.ownerId}` })),
        ...vendors.flatMap((vendor) => (vendor.foodItems ?? []).map((item) => ({ id: `food-${item.foodItemId}`, module: "food", title: item.name, description: item.description || "Freshly prepared.", detail: `৳${item.price}`, meta: vendor.name, tag: "Food", status: "AVAILABLE", imageUrl: item.imageUrl, vendorId: vendor.vendorId }))),
      ]);
      setError("");
    } catch (requestError) { setError(requestError.message); }
    finally { setLoading(false); }
  }, []);
  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return results.filter((item) => (section === "all" || item.module === section) && (!needle || `${item.title} ${item.description} ${item.detail} ${item.meta} ${item.tag}`.toLowerCase().includes(needle)));
  }, [query, results, section]);
  return <main className="container-shell py-8 sm:py-12"><section className="mx-auto max-w-4xl"><p className="eyebrow">CAMPUS SEARCH</p><h1 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Search results</h1><p className="mt-2 text-muted-foreground">Find related posts, rooms, and food menus in one place.</p><div className="relative mt-6"><Search className="absolute left-3 top-3 size-5 text-muted-foreground"/><Input autoFocus value={query} onChange={(event) => setQuery(event.target.value)} className="h-11 pl-10" placeholder="Search Campus Crate"/></div><div className="mt-4 flex flex-wrap gap-2">{sections.map((value) => <Button key={value} size="sm" variant={section === value ? "default" : "outline"} onClick={() => setSection(value)}>{labels[value]}</Button>)}</div></section><section className="mt-10"><p className="mb-4 text-sm text-muted-foreground">{filtered.length} related result{filtered.length === 1 ? "" : "s"}</p>{error ? <p className="rounded-xl border border-danger/30 bg-danger/5 p-5 text-danger">{error}</p> : loading ? <p className="py-14 text-center text-muted-foreground">Searching campus posts…</p> : filtered.length ? <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">{filtered.map((item) => item.module === "food" ? <Link key={item.id} to="/food" className="overflow-hidden rounded-xl border border-border bg-card shadow-soft transition hover:-translate-y-0.5"><div className="aspect-video">{item.imageUrl ? <img src={item.imageUrl} alt={item.title} className="h-full w-full object-cover"/> : <div className="flex h-full items-center justify-center bg-primary-soft text-primary"><UtensilsCrossed className="size-12"/></div>}</div><div className="p-4"><p className="text-xs font-semibold text-primary">{item.meta}</p><h2 className="mt-1 font-display font-semibold">{item.title}</h2><p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{item.description}</p><p className="mt-3 font-semibold text-primary">{item.detail}</p></div></Link> : <ListingCard key={item.id} listing={item}/>)}</div> : <p className="rounded-xl border border-dashed border-border py-16 text-center text-muted-foreground">No related items found. Try another word or filter.</p>}</section></main>;
}
