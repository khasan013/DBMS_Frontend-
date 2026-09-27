import { useEffect, useMemo, useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Edit3, Loader2, ShieldCheck, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { api, getSession } from "@/services/api";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getListingReference } from "@/data/campus-data";
import { RequireAuth } from "@/components/require-auth";
import { usePolling } from "@/utils/use-polling";

export const Route = createFileRoute("/my-listings")({ component: MyListingsRoute });
function MyListingsRoute() { return <RequireAuth><MyListingsPage /></RequireAuth>; }

export function MyListingsPage() {
  const navigate = useNavigate();
  const user = getSession()?.user;
  const [tab, setTab] = useState("all");
  const [posts, setPosts] = useState([]);
  const [foodOrders, setFoodOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [updatingId, setUpdatingId] = useState("");

  useEffect(() => {
    if (!user?.userId) return;
    api("/api/vendors/me").then(() => navigate({ to: "/vendor", replace: true })).catch(() => {});
  }, [navigate, user?.userId]);

  usePolling(async () => {
    if (!user?.userId) return;
    try {
      const [items, marketplacePosts, toLetListings, orders] = await Promise.all([
      api("/api/items"),
      api(`/api/marketplace/users/${user.userId}/posts`),
      api(`/api/to-let/listings/owners/${user.userId}`),
      api("/api/food/orders/me"),
      ]);
      setFoodOrders(orders);
      setPosts([
          ...items
            .filter((item) => item.reportedBy === user.userId)
            .map((item) => ({
              id: `lost-${item.itemId}`,
              module: "lost",
              title: item.title,
              detail: item.itemType,
              status: item.status,
              createdAt: item.createdAt,
            })),
          ...marketplacePosts.map((post) => ({
            id: `market-${post.postId}`,
            resourceId: post.postId,
            module: "market",
            title: post.title,
            detail: post.fixedPrice
              ? `৳${post.fixedPrice}`
              : `Starting ৳${post.startingPrice}`,
            status: post.status,
            createdAt: post.createdAt,
          })),
          ...toLetListings.map((listing) => ({
            id: `to-let-${listing.listingId}`,
            resourceId: listing.listingId,
            module: "to-let",
            title: listing.title,
            detail: `৳${listing.monthlyRent}/month · ${listing.area}`,
            status: listing.status,
            createdAt: listing.createdAt,
          })),
      ]);
      setError("");
    } catch (requestError) { setError(requestError.message); }
    finally { setLoading(false); }
  }, [user?.userId]);

  const visible = useMemo(
    () => posts.filter((post) => tab === "all" || post.module === tab),
    [posts, tab],
  );
  const initials = (user?.name || user?.studentId || "Student")
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  const removePost = async (post) => {
    if (!window.confirm(`Delete “${post.title}”?`)) return;
    setUpdatingId(post.id);
    try {
      const endpoint = post.module === "market" ? `/api/marketplace/posts/${post.resourceId}?sellerId=${user.userId}` : `/api/to-let/listings/${post.resourceId}?ownerId=${user.userId}`;
      await api(endpoint, { method: "DELETE" });
      setPosts((current) => current.filter((item) => item.id !== post.id));
      toast.success("Post deleted.");
    } catch (requestError) { toast.error(requestError.message); }
    finally { setUpdatingId(""); }
  };
  const markSold = async (post) => {
    setUpdatingId(post.id);
    try {
      const updated = await api(`/api/marketplace/posts/${post.resourceId}/sold?sellerId=${user.userId}`, { method: "PUT" });
      setPosts((current) => current.map((item) => item.id === post.id ? { ...item, status: updated.status } : item));
      toast.success("Post marked as sold.");
    } catch (requestError) { toast.error(requestError.message); }
    finally { setUpdatingId(""); }
  };

  return (
    <main className="container-shell py-10">
      <section className="flex flex-col justify-between gap-5 border-b border-border pb-8 sm:flex-row sm:items-center">
        <div className="flex items-center gap-4">
          <Avatar className="size-16 text-xl font-bold">
            <AvatarImage
              src={user?.profileImgUrl}
              alt={`${user?.name || "Your"} profile`}
            />
            <AvatarFallback className="bg-primary text-primary-foreground">
              {initials}
            </AvatarFallback>
          </Avatar>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="font-display text-2xl font-bold">
                {user?.name || "My profile"}
              </h1>
              <span className="flex items-center gap-1 rounded-full bg-success-soft px-2 py-1 text-xs font-semibold text-success">
                <ShieldCheck className="size-3.5" />
                Verified Student
              </span>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              Your live Campus Crate posts
            </p>
          </div>
        </div>
        <Button asChild>
          <Link to="/edit-profile">
            <Edit3 />
            Edit profile
          </Link>
        </Button>
      </section>
      <section className="py-8">
        <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-display text-xl font-semibold">My listings</h2>
            <p className="text-sm text-muted-foreground">
              Posts currently saved in your account.
            </p>
          </div>
          <Tabs value={tab} onValueChange={setTab}>
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="lost">Lost & Found</TabsTrigger>
              <TabsTrigger value="market">Marketplace</TabsTrigger>
              <TabsTrigger value="to-let">To-let</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        {loading ? (
          <div className="flex justify-center py-16">
            <Loader2 className="animate-spin" />
          </div>
        ) : error ? (
          <div className="rounded-xl border border-danger/30 bg-danger/5 p-5 text-danger">
            {error}
          </div>
        ) : (
          <div className="overflow-hidden rounded-xl border border-border bg-card">
            {visible.map((post) => (
              <article
                key={post.id}
                className="flex flex-wrap items-center justify-between gap-4 border-b border-border p-5 last:border-0"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold">{post.title}</h3>
                    <span className="rounded-full bg-accent px-2 py-0.5 text-[10px] font-bold uppercase text-accent-foreground">
                      {post.status}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {post.detail}
                  </p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Item ID: {getListingReference(post.id)}
                  </p>
                </div>
                <div className="flex items-center gap-2"><span className="text-xs font-semibold uppercase tracking-wide text-primary">
                  {post.module === "to-let"
                    ? "To-let"
                    : post.module === "market"
                      ? "Marketplace"
                      : "Lost & Found"}
                </span>{post.module === "market" && post.status === "ACTIVE" && <Button size="sm" variant="outline" disabled={updatingId === post.id} onClick={() => markSold(post)}>Mark sold</Button>}{(post.module === "market" || post.module === "to-let") && <Button size="icon" variant="destructive" disabled={updatingId === post.id} onClick={() => removePost(post)} aria-label={`Delete ${post.title}`}><Trash2 /></Button>}</div>
              </article>
            ))}
            {visible.length === 0 && (
              <p className="py-16 text-center text-muted-foreground">
                No real listings in this category yet.
              </p>
            )}
          </div>
        )}
      </section>
      <section className="border-t border-border py-8">
        <h2 className="font-display text-xl font-semibold">Food order history</h2>
        <p className="mt-1 text-sm text-muted-foreground">Your food orders and the vendor’s current decision.</p>
        <div className="mt-5 grid gap-4 lg:grid-cols-2">
          {foodOrders.map((order) => <article key={order.orderId} className="rounded-xl border border-border bg-card p-5 shadow-soft"><div className="flex items-start justify-between gap-3"><div><h3 className="font-semibold">Order #{order.orderId} · {order.vendorName}</h3><p className="mt-1 text-sm text-muted-foreground">{order.paymentMethod} · {order.paymentStatus}</p></div><span className="rounded-full bg-primary-soft px-2 py-1 text-xs font-semibold text-primary">{order.orderStatus}</span></div><ul className="mt-4 space-y-1 text-sm">{order.items.map((item, index) => <li key={`${item.name}-${index}`}>{item.quantity} × {item.name} <span className="text-muted-foreground">(৳{item.unitPrice})</span></li>)}</ul><p className="mt-4 border-t border-border pt-3 text-right font-semibold">Total: ৳{order.totalAmount}</p></article>)}
          {!foodOrders.length && <p className="rounded-xl border border-dashed border-border py-12 text-center text-muted-foreground lg:col-span-2">You have not placed any food orders yet.</p>}
        </div>
      </section>
    </main>
  );
}
