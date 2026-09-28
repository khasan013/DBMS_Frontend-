import { useEffect, useRef, useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Camera, Pencil, Plus, Store, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { api, getSession } from "@/services/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Route = createFileRoute("/vendor")({
  component: VendorDashboardPage,
});
const empty = {
  name: "",
  description: "",
  price: "",
  imageUrl: "",
  available: true,
};
export function VendorDashboardPage() {
  const navigate = useNavigate(),
    fileInput = useRef(null);
  const [vendor, setVendor] = useState(null),
    [orders, setOrders] = useState([]),
    [form, setForm] = useState(empty),
    [editingId, setEditingId] = useState(null),
    [saving, setSaving] = useState(false),
    [uploading, setUploading] = useState(false);
  useEffect(() => {
    if (!getSession()) {
      navigate({ to: "/login" });
      return;
    }
    let active = true;
    let failed = false;
    const loadDashboard = () =>
      Promise.all([api("/api/vendors/me"), api("/api/vendors/me/orders")])
        .then(([vendorData, orderData]) => {
          if (!active) return;
          setVendor(vendorData);
          setOrders(orderData);
        })
        .catch((error) => {
          if (active && !failed) {
            failed = true;
            toast.error(error.message);
            navigate({ to: "/food" });
          }
        });
    loadDashboard();
    const timer = window.setInterval(loadDashboard, 2000);
    return () => {
      active = false;
      window.clearInterval(timer);
    };
  }, [navigate]);
  const upload = async (file) => {
    if (!file) return;
    setUploading(true);
    try {
      const body = new FormData();
      body.append("file", file);
      const data = await api("/api/uploads/images", { method: "POST", body });
      setForm((current) => ({ ...current, imageUrl: data.imageUrl }));
    } catch (error) {
      toast.error(error.message);
    } finally {
      setUploading(false);
    }
  };
  const create = async (event) => {
    event.preventDefault();
    setSaving(true);
    try {
      const payload = { ...form, price: Number(form.price) };
      const item = await api(
        editingId
          ? `/api/vendors/me/items/${editingId}`
          : "/api/vendors/me/items",
        { method: editingId ? "PUT" : "POST", body: JSON.stringify(payload) },
      );
      setVendor((current) => ({
        ...current,
        foodItems: editingId
          ? current.foodItems.map((entry) =>
              entry.foodItemId === editingId ? item : entry,
            )
          : [item, ...current.foodItems],
      }));
      setForm(empty);
      setEditingId(null);
      toast.success(editingId ? "Food item updated." : "Food item published.");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setSaving(false);
    }
  };
  const updateOrder = async (orderId, status) => {
    setSaving(`order-${orderId}`);
    try {
      await api(`/api/vendors/me/orders/${orderId}/status`, {
        method: "PUT",
        body: JSON.stringify({ status }),
      });
      setOrders((current) =>
        current.map((order) =>
          order.orderId === orderId ? { ...order, orderStatus: status } : order,
        ),
      );
      toast.success(
        `Order ${status.toLowerCase()}. The customer was notified.`,
      );
    } catch (error) {
      toast.error(error.message);
    } finally {
      setSaving(false);
    }
  };
  const updateStoreStatus = async (online) => {
    setSaving("store-status");
    try {
      const updated = await api("/api/vendors/me/store-status", { method: "PUT", body: JSON.stringify({ online }) });
      setVendor(updated);
      toast.success(online ? "Your store is now online and accepting orders." : "Your store is now offline. Customers cannot place new orders.");
    } catch (error) { toast.error(error.message); }
    finally { setSaving(false); }
  };
  const remove = async (item) => {
    if (!window.confirm(`Remove ${item.name}?`)) return;
    try {
      await api(`/api/vendors/me/items/${item.foodItemId}`, {
        method: "DELETE",
      });
      setVendor((current) => ({
        ...current,
        foodItems: current.foodItems.filter(
          (entry) => entry.foodItemId !== item.foodItemId,
        ),
      }));
      toast.success("Food item removed.");
    } catch (error) {
      toast.error(error.message);
    }
  };
  if (!vendor)
    return (
      <main className="container-shell py-16 text-center text-muted-foreground">
        Loading vendor dashboard…
      </main>
    );
  return (
    <main className="container-shell py-10">
      <section className="flex flex-col justify-between gap-4 border-b border-border pb-7 sm:flex-row sm:items-start">
        <div>
          <p className="eyebrow">VENDOR DASHBOARD</p>
          <h1 className="mt-2 font-display text-3xl font-bold">
            {vendor.name}
          </h1>
          <p className="mt-2 text-muted-foreground">
            {vendor.location} · Manage food items and photos.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3"><div className={`rounded-full px-3 py-1.5 text-sm font-semibold ${vendor.active ? "bg-success-soft text-success" : "bg-muted text-muted-foreground"}`}>{vendor.active ? "Store online" : "Store offline"}</div><Button size="sm" variant={vendor.active ? "outline" : "default"} disabled={saving === "store-status"} onClick={() => updateStoreStatus(!vendor.active)}>{saving === "store-status" ? "Updating…" : vendor.active ? "Go offline" : "Go online"}</Button><Store className="size-10 text-primary" /></div>
      </section>
      <div className="grid gap-8 py-8 lg:grid-cols-[380px_1fr]">
        <form
          onSubmit={create}
          className="h-fit space-y-4 rounded-xl border border-border bg-card p-5 shadow-soft"
        >
          <h2 className="font-display text-xl font-bold">
            {editingId ? "Update food item" : "Post food item"}
          </h2>
          <Input
            required
            placeholder="Food name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <textarea
            placeholder="Description"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            className="min-h-24 w-full rounded-md border border-input bg-background p-3 text-sm"
          />
          <Input
            required
            min="1"
            type="number"
            placeholder="Price (৳)"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
          />
          <input
            ref={fileInput}
            type="file"
            accept="image/jpeg,image/png,image/webp"
            className="hidden"
            onChange={(e) => upload(e.target.files?.[0])}
          />
          {form.imageUrl ? (
            <button
              type="button"
              className="block w-full"
              onClick={() => fileInput.current?.click()}
            >
              <img
                src={form.imageUrl}
                alt="Food preview"
                className="h-36 w-full rounded-lg object-cover"
              />
            </button>
          ) : (
            <Button
              type="button"
              variant="outline"
              className="w-full"
              onClick={() => fileInput.current?.click()}
              disabled={uploading}
            >
              <Camera />
              {uploading ? "Uploading…" : "Upload food photo"}
            </Button>
          )}
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={form.available}
              onChange={(e) =>
                setForm({ ...form, available: e.target.checked })
              }
            />{" "}
            Available now
          </label>
          <Button className="w-full" disabled={saving || uploading}>
            <Plus />
            {saving
              ? "Saving…"
              : editingId
                ? "Save changes"
                : "Publish food item"}
          </Button>
          {editingId && (
            <Button
              type="button"
              variant="outline"
              className="w-full"
              onClick={() => {
                setEditingId(null);
                setForm(empty);
              }}
            >
              Cancel edit
            </Button>
          )}
        </form>
        <section>
          <h2 className="font-display text-xl font-bold">Your food items</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {vendor.foodItems.map((item) => (
              <article
                key={item.foodItemId}
                className="overflow-hidden rounded-xl border border-border bg-card shadow-soft"
              >
                {item.imageUrl && (
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="h-36 w-full object-cover"
                  />
                )}
                <div className="p-4">
                  <div className="flex justify-between gap-3">
                    <div>
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        ৳{item.price} ·{" "}
                        {item.available ? "Available" : "Hidden"}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        size="icon"
                        variant="outline"
                        onClick={() => {
                          setEditingId(item.foodItemId);
                          setForm({
                            name: item.name,
                            description: item.description || "",
                            price: String(item.price),
                            imageUrl: item.imageUrl || "",
                            available: item.available,
                          });
                        }}
                        aria-label={`Edit ${item.name}`}
                      >
                        <Pencil />
                      </Button>
                      <Button
                        size="icon"
                        variant="destructive"
                        onClick={() => remove(item)}
                        aria-label={`Remove ${item.name}`}
                      >
                        <Trash2 />
                      </Button>
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
            {!vendor.foodItems.length && (
              <p className="rounded-xl border border-dashed border-border py-12 text-center text-muted-foreground sm:col-span-2">
                No food items posted yet.
              </p>
            )}
          </div>
        </section>
      </div>
      <section className="border-t border-border py-8">
        <h2 className="font-display text-2xl font-bold">Customer orders</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Accept or reject new orders; the customer is notified immediately.
        </p>
        <div className="mt-5 grid gap-4 lg:grid-cols-2">
          {orders.map((order) => (
            <article
              key={order.orderId}
              className="rounded-xl border border-border bg-card p-5 shadow-soft"
            >
              <div className="flex justify-between gap-4">
                <div>
                  <h3 className="font-semibold">
                    Order #{order.orderId} · {order.buyerName}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {order.buyerPhone}
                  </p>
                </div>
                <span className="h-fit rounded-full bg-primary-soft px-2 py-1 text-xs font-semibold text-primary">
                  {order.orderStatus}
                </span>
              </div>
              <div className="mt-4 rounded-lg bg-surface-subtle p-3 text-sm">
                <p className="font-medium">Deliver to</p>
                <p className="mt-1 whitespace-pre-line text-muted-foreground">
                  {order.deliveryLocation}
                </p>
              </div>
              <ul className="mt-4 space-y-1 text-sm">
                {order.items.map((item, index) => (
                  <li key={`${item.name}-${index}`}>
                    {item.quantity} × {item.name}{" "}
                    <span className="text-muted-foreground">
                      (৳{item.unitPrice})
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 border-t border-border pt-3 text-right font-semibold">
                Total: ৳{order.totalAmount}
              </p>
              {["PLACED", "CONFIRMED"].includes(order.orderStatus) && (
                <div className="mt-4 flex gap-2">
                  <Button
                    size="sm"
                    disabled={saving === `order-${order.orderId}`}
                    onClick={() => updateOrder(order.orderId, "ACCEPTED")}
                  >
                    Accept
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    disabled={saving === `order-${order.orderId}`}
                    onClick={() => updateOrder(order.orderId, "REJECTED")}
                  >
                    Reject
                  </Button>
                </div>
              )}
            </article>
          ))}
          {!orders.length && (
            <p className="rounded-xl border border-dashed border-border py-12 text-center text-muted-foreground lg:col-span-2">
              No customer orders yet.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
