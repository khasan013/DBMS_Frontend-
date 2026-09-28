import { useEffect, useMemo, useRef, useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import {
  CookingPot,
  MapPin,
  Minus,
  Plus,
  Search,
  ShoppingBag,
  UtensilsCrossed,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { api, getSession } from "@/services/api";

export const Route = createFileRoute("/food")({ component: FoodPage });

export function FoodPage() {
  const navigate = useNavigate();
  const placingRef = useRef(false);
  const [vendors, setVendors] = useState([]),
    [selectedVendorId, setSelectedVendorId] = useState(null),
    [cart, setCart] = useState([]),
    [query, setQuery] = useState(""),
    [loading, setLoading] = useState(true),
    [checkoutOpen, setCheckoutOpen] = useState(false),
    [payment, setPayment] = useState("COD"),
    [deliveryLocation, setDeliveryLocation] = useState(""),
    [placing, setPlacing] = useState(false),
    [isVendor, setIsVendor] = useState(false);
  useEffect(() => {
    if (!getSession()) {
      setIsVendor(false);
      return;
    }
    let active = true;
    api("/api/vendors/me")
      .then(() => active && setIsVendor(true))
      .catch(() => active && setIsVendor(false));
    return () => { active = false; };
  }, []);
  useEffect(() => {
    let active = true;
    let reportedError = false;
    const loadVendors = () => {
      if (placingRef.current) return Promise.resolve();
      return api("/api/food/vendors")
        .then((data) => {
          if (!active) return;
          setVendors(data);
          setSelectedVendorId((current) =>
            data.some((item) => item.vendorId === current)
              ? current
              : (data[0]?.vendorId ?? null),
          );
        })
        .catch((error) => {
          if (active && !reportedError) {
            reportedError = true;
            toast.error(error.message);
          }
        })
        .finally(() => {
          if (active) setLoading(false);
        });
    };
    loadVendors();
    const timer = window.setInterval(loadVendors, 2000);
    return () => {
      active = false;
      window.clearInterval(timer);
    };
  }, []);
  useEffect(() => {
    setQuery(new URLSearchParams(window.location.search).get("q") || "");
  }, []);
  useEffect(() => {
    const payment = new URLSearchParams(window.location.search).get("payment");
    if (!payment) return;
    window.history.replaceState({}, "", "/food");
    if (payment === "success") {
      toast.success("Payment successful. Your food order is confirmed.");
      const timer = window.setTimeout(() => navigate({ to: "/" }), 1800);
      return () => window.clearTimeout(timer);
    }
    toast.error(
      payment === "cancelled"
        ? "Payment was cancelled."
        : "Payment could not be verified. No order was confirmed.",
    );
  }, [navigate]);
  const vendor =
    vendors.find((entry) => entry.vendorId === selectedVendorId) ?? null;
  const menu = useMemo(
    () =>
      (vendor?.foodItems ?? []).filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase()),
      ),
    [vendor, query],
  );
  const total = cart.reduce(
    (sum, item) => sum + Number(item.price) * item.quantity,
    0,
  );
  const add = (item) =>
    isVendor
      ? toast.error("Vendor accounts cannot place food orders.")
      :
    setCart((current) => {
      const found = current.find(
        (entry) => entry.foodItemId === item.foodItemId,
      );
      return found
        ? current.map((entry) =>
            entry.foodItemId === item.foodItemId
              ? { ...entry, quantity: entry.quantity + 1 }
              : entry,
          )
        : [...current, { ...item, quantity: 1 }];
    });
  const quantity = (id, next) =>
    setCart((current) =>
      next < 1
        ? current.filter((item) => item.foodItemId !== id)
        : current.map((item) =>
            item.foodItemId === id ? { ...item, quantity: next } : item,
          ),
    );
  const checkout = () => {
    if (!getSession()) {
      toast.error("Sign in to place a food order.");
      navigate({ to: "/login" });
      return;
    }
    if (isVendor) {
      toast.error("Vendor accounts cannot place food orders.");
      return;
    }
    setCheckoutOpen(true);
  };
  const placeOrder = async () => {
    if (placingRef.current) return;
    if (!vendor || !deliveryLocation.trim()) {
      toast.error("Enter the delivery location.");
      return;
    }
    placingRef.current = true;
    setPlacing(true);
    try {
      const order = await api("/api/food/orders", {
        method: "POST",
        body: JSON.stringify({
          vendorId: vendor.vendorId,
          paymentMethod: payment,
          deliveryLocation: deliveryLocation.trim(),
          items: cart.map((item) => ({
            foodItemId: item.foodItemId,
            quantity: item.quantity,
          })),
        }),
      });
      if (payment === "ONLINE" && order.gatewayUrl) {
        window.location.assign(order.gatewayUrl);
        return;
      }
      setCart([]);
      setDeliveryLocation("");
      setCheckoutOpen(false);
      toast.success(`COD order #${order.orderId} was placed.`);
    } catch (error) {
      toast.error(error.message);
    } finally {
      placingRef.current = false;
      setPlacing(false);
    }
  };
  return (
    <main>
      <section className="border-b border-border bg-primary-soft">
        <div className="container-shell py-8 sm:py-16">
          <p className="eyebrow">CAMPUS FOOD</p>
          <h1 className="mt-2 font-display text-3xl font-bold sm:text-5xl">
            Good food, right around campus.
          </h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Order directly from approved campus vendors.
          </p>
        </div>
      </section>
      <section className="container-shell grid gap-5 py-5 sm:gap-8 sm:py-8 lg:grid-cols-[1fr_340px]">
        <div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-display text-2xl font-bold">Food vendors</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Choose a vendor to view its current menu.
              </p>
            </div>
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-3 size-4 text-muted-foreground" />
              <Input
                className="pl-9"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search this menu"
              />
            </div>
          </div>
          {loading ? (
            <p className="py-16 text-center text-muted-foreground">
              Loading vendors…
            </p>
          ) : !vendors.length ? (
            <p className="mt-6 rounded-xl border border-dashed border-border py-16 text-center text-muted-foreground">
              No food vendors are available yet.
            </p>
          ) : (
            <>
              <div className="mt-6 flex gap-3 overflow-x-auto pb-2">
                {vendors.map((item) => (
                  <button
                    key={item.vendorId}
                    onClick={() => {
                      setSelectedVendorId(item.vendorId);
                      setCart([]);
                      setQuery("");
                    }}
                    className={`min-w-52 rounded-xl border p-4 text-left transition ${item.vendorId === selectedVendorId ? "border-primary bg-primary-soft shadow-soft" : "border-border bg-card hover:border-primary/50"}`}
                  >
                    <p className="font-semibold">{item.name}</p>
                    <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="size-3" />
                      {item.location}
                    </p>
                  </button>
                ))}
              </div>
              {vendor && (
                <>
                  <div className="mt-8 flex items-center gap-3">
                    <span className="flex size-11 items-center justify-center overflow-hidden rounded-xl bg-primary text-primary-foreground">
                      {vendor.imageUrl ? (
                        <img
                          src={vendor.imageUrl}
                          alt=""
                          className="size-full object-cover"
                        />
                      ) : (
                        <UtensilsCrossed />
                      )}
                    </span>
                    <div>
                      <h2 className="font-display text-2xl font-bold">
                        {vendor.name}
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        {vendor.location}
                      </p>
                    </div>
                  </div>
                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    {menu.map((item) => (
                      <article
                        key={item.foodItemId}
                        className="overflow-hidden rounded-xl border border-border bg-card shadow-soft"
                      >
                        {item.imageUrl && (
                          <div className="flex min-h-52 items-center justify-center bg-surface-subtle">
                            <img
                              src={item.imageUrl}
                              alt={item.name}
                              className="max-h-[28rem] w-full object-contain"
                              loading="lazy"
                            />
                          </div>
                        )}
                        <div className="p-4">
                          <h3 className="font-semibold">{item.name}</h3>
                          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                            {item.description || "Freshly prepared."}
                          </p>
                          <div className="mt-3 flex items-center justify-between">
                            <span className="font-display font-bold text-primary">
                              ৳{item.price}
                            </span>
                            <Button size="sm" onClick={() => add(item)} disabled={isVendor}>
                              <Plus />
                              {isVendor ? "Vendor only" : "Add"}
                            </Button>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                  {!menu.length && (
                    <p className="mt-6 rounded-xl border border-dashed border-border py-12 text-center text-muted-foreground">
                      No available food matches your search.
                    </p>
                  )}
                </>
              )}
            </>
          )}
        </div>
        <aside className="h-fit rounded-xl border border-border bg-card p-4 shadow-soft sm:p-5 lg:sticky lg:top-24">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-xl font-bold">Your order</h2>
            <ShoppingBag className="text-primary" />
          </div>
          {cart.length ? (
            <>
              <div className="mt-5 space-y-4">
                {cart.map((item) => (
                  <div
                    key={item.foodItemId}
                    className="flex items-center gap-3"
                  >
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold">
                        {item.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        ৳{item.price} each
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Button
                        variant="outline"
                        size="icon"
                        className="size-7"
                        onClick={() =>
                          quantity(item.foodItemId, item.quantity - 1)
                        }
                      >
                        <Minus className="size-3" />
                      </Button>
                      <span className="w-5 text-center text-sm">
                        {item.quantity}
                      </span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="size-7"
                        onClick={() =>
                          quantity(item.foodItemId, item.quantity + 1)
                        }
                      >
                        <Plus className="size-3" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5 border-t border-border pt-4">
                <div className="flex justify-between font-display text-lg font-bold">
                  <span>Total</span>
                  <span>৳{total.toFixed(2)}</span>
                </div>
                <Button className="mt-4 w-full" onClick={checkout}>
                  <CookingPot />
                  Checkout
                </Button>
              </div>
            </>
          ) : (
            <div className="py-10 text-center text-sm text-muted-foreground">
              Your food order is empty.
            </div>
          )}
        </aside>
      </section>
      <Dialog open={checkoutOpen} onOpenChange={setCheckoutOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Choose payment method</DialogTitle>
            <DialogDescription>
              Vendor: {vendor?.name} · Total ৳{total.toFixed(2)}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-3">
            <label className="block text-sm font-medium">
              Delivery location
              <textarea
                required
                value={deliveryLocation}
                onChange={(event) => setDeliveryLocation(event.target.value)}
                placeholder="Building, room number, gate or landmark"
                className="mt-2 min-h-20 w-full rounded-md border border-input bg-background p-3 text-sm"
              />
            </label>
            <label
              className={`flex cursor-pointer items-center gap-3 rounded-lg border p-4 ${payment === "COD" ? "border-primary bg-primary-soft" : "border-border"}`}
            >
              <input
                type="radio"
                checked={payment === "COD"}
                onChange={() => setPayment("COD")}
              />
              <div>
                <p className="font-semibold">Cash on delivery</p>
                <p className="text-xs text-muted-foreground">
                  Pay the vendor when your order arrives.
                </p>
              </div>
            </label>
            <label
              className={`flex cursor-pointer items-center gap-3 rounded-lg border p-4 ${payment === "ONLINE" ? "border-primary bg-primary-soft" : "border-border"}`}
            >
              <input
                type="radio"
                checked={payment === "ONLINE"}
                onChange={() => setPayment("ONLINE")}
              />
              <div>
                <p className="font-semibold">Online payment</p>
                <p className="text-xs text-muted-foreground">
                  Continue securely with SSLCommerz.
                </p>
              </div>
            </label>
            <Button className="w-full" onClick={placeOrder} disabled={placing}>
              {placing
                ? "Connecting securely to SSLCommerz…"
                : payment === "COD"
                  ? "Place COD order"
                  : "Pay with SSLCommerz"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </main>
  );
}
