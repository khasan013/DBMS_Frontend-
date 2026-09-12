import { useEffect, useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Edit3, Loader2, ShieldCheck } from "lucide-react";
import { api, getSession } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RequireAuth } from "@/components/require-auth";

export const Route = createFileRoute("/my-listings")({ component: () => <RequireAuth><MyListings /></RequireAuth> });

function MyListings() {
  const user = getSession()?.user;
  const [tab, setTab] = useState("all");
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!user?.userId) return;
    Promise.all([api("/api/items"), api(`/api/marketplace/users/${user.userId}/posts`), api(`/api/to-let/listings/owners/${user.userId}`)])
      .then(([items, marketplacePosts, toLetListings]) => setPosts([
        ...items.filter((item) => item.reportedBy === user.userId).map((item) => ({ id: `lost-${item.itemId}`, module: "lost", title: item.title, detail: item.itemType, status: item.status, createdAt: item.createdAt })),
        ...marketplacePosts.map((post) => ({ id: `market-${post.postId}`, module: "market", title: post.title, detail: post.fixedPrice ? `৳${post.fixedPrice}` : `Starting ৳${post.startingPrice}`, status: post.status, createdAt: post.createdAt })),
        ...toLetListings.map((listing) => ({ id: `to-let-${listing.listingId}`, module: "to-let", title: listing.title, detail: `৳${listing.monthlyRent}/month · ${listing.area}`, status: listing.status, createdAt: listing.createdAt })),
      ]))
      .catch((requestError) => setError(requestError.message))
      .finally(() => setLoading(false));
  }, [user?.userId]);

  const visible = useMemo(() => posts.filter((post) => tab === "all" || post.module === tab), [posts, tab]);
  const initials = (user?.name || user?.studentId || "Student").split(/\s+/).map((part) => part[0]).join("").slice(0, 2).toUpperCase();

  return <main className="container-shell py-10"><section className="flex flex-col justify-between gap-5 border-b border-border pb-8 sm:flex-row sm:items-center"><div className="flex items-center gap-4"><div className="flex size-16 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">{initials}</div><div><div className="flex flex-wrap items-center gap-2"><h1 className="font-display text-2xl font-bold">{user?.name || "My profile"}</h1><span className="flex items-center gap-1 rounded-full bg-success-soft px-2 py-1 text-xs font-semibold text-success"><ShieldCheck className="size-3.5" />Verified Student</span></div><p className="mt-1 text-sm text-muted-foreground">Your live Campus Crate posts</p></div></div><Button asChild><Link to="/edit-profile"><Edit3 />Edit profile</Link></Button></section>
    <section className="py-8"><div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center"><div><h2 className="font-display text-xl font-semibold">My listings</h2><p className="text-sm text-muted-foreground">Posts currently saved in your account.</p></div><Tabs value={tab} onValueChange={setTab}><TabsList><TabsTrigger value="all">All</TabsTrigger><TabsTrigger value="lost">Lost & Found</TabsTrigger><TabsTrigger value="market">Marketplace</TabsTrigger><TabsTrigger value="to-let">To-let</TabsTrigger></TabsList></Tabs></div>{loading ? <div className="flex justify-center py-16"><Loader2 className="animate-spin" /></div> : error ? <div className="rounded-xl border border-danger/30 bg-danger/5 p-5 text-danger">{error}</div> : <div className="overflow-hidden rounded-xl border border-border bg-card">{visible.map((post) => <article key={post.id} className="flex flex-wrap items-center justify-between gap-4 border-b border-border p-5 last:border-0"><div><div className="flex items-center gap-2"><h3 className="font-semibold">{post.title}</h3><span className="rounded-full bg-accent px-2 py-0.5 text-[10px] font-bold uppercase text-accent-foreground">{post.status}</span></div><p className="mt-1 text-sm text-muted-foreground">{post.detail}</p></div><span className="text-xs font-semibold uppercase tracking-wide text-primary">{post.module === "to-let" ? "To-let" : post.module === "market" ? "Marketplace" : "Lost & Found"}</span></article>)}{visible.length === 0 && <p className="py-16 text-center text-muted-foreground">No real listings in this category yet.</p>}</div>}</section>
  </main>;
}
