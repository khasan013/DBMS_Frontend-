import { useEffect, useState } from "react";
import { Bus, Loader2, MapPin, RefreshCw, UserRound } from "lucide-react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";
import { api, getSession } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const routes = ["Kuril", "Notun Bazar", "Aftab-Nagor"];

export const Route = createFileRoute("/shuttle")({ component: ShuttlePage });

function ShuttlePage() {
  const navigate = useNavigate();
  const [route, setRoute] = useState(routes[0]);
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [coordinates, setCoordinates] = useState({ latitude: "23.7806", longitude: "90.4070" });
  const session = getSession();
  const userId = session?.user?.userId;

  const loadTrips = () => {
    setLoading(true);
    api(`/api/shuttle/trips?route=${encodeURIComponent(route)}&status=active`)
      .then(setTrips)
      .catch((error) => { setTrips([]); toast.error(error.message); })
      .finally(() => setLoading(false));
  };
  useEffect(loadTrips, [route]);

  const requestPickup = (trip) => {
    if (!userId) {
      toast.error("Please sign in before requesting a shuttle.");
      navigate({ to: "/login" });
      return;
    }
    api("/api/shuttle/wait-requests", { method: "POST", body: JSON.stringify({ tripId: trip.tripId, driverId: trip.driverId, userId, latitude: Number(coordinates.latitude), longitude: Number(coordinates.longitude) }) })
      .then(() => toast.success("Pickup request sent to the driver."))
      .catch((error) => toast.error(error.message));
  };

  return <main className="container-shell py-10">
    <section className="rounded-2xl bg-primary p-7 text-primary-foreground sm:p-10"><div className="max-w-2xl"><p className="eyebrow text-primary-foreground/75">CAMPUS TRANSPORT</p><h1 className="mt-2 flex items-center gap-3 font-display text-3xl font-bold sm:text-4xl"><Bus />Shuttle service</h1><p className="mt-3 text-primary-foreground/85">See active campus shuttles and send a pickup request with your current location.</p></div></section>
    <section className="mt-8 grid gap-6 lg:grid-cols-[1fr_320px]"><div><div className="mb-4 flex flex-wrap items-center justify-between gap-3"><div><h2 className="font-display text-xl font-bold">Active shuttles</h2><p className="text-sm text-muted-foreground">Choose a route to see live trips.</p></div><Button variant="outline" onClick={loadTrips}><RefreshCw />Refresh</Button></div><div className="mb-5 flex flex-wrap gap-2">{routes.map((value) => <Button key={value} variant={route === value ? "default" : "outline"} onClick={() => setRoute(value)}>{value}</Button>)}</div>{loading ? <div className="flex justify-center py-16"><Loader2 className="animate-spin" /></div> : trips.length ? <div className="grid gap-4">{trips.map((trip) => <article key={trip.tripId} className="rounded-xl border border-border bg-card p-5"><div className="flex flex-wrap items-start justify-between gap-3"><div><p className="text-xs font-semibold uppercase tracking-wide text-primary">{trip.status}</p><h3 className="mt-1 text-lg font-semibold">{trip.route} shuttle</h3><p className="mt-1 text-sm text-muted-foreground">Driver #{trip.driverId} · Last update {trip.lastLocationAt ? new Date(trip.lastLocationAt).toLocaleTimeString() : "not available"}</p></div><Button onClick={() => requestPickup(trip)}><MapPin />Request pickup</Button></div></article>)}</div> : <div className="rounded-xl border border-dashed border-border p-12 text-center text-muted-foreground">No active shuttles on this route right now.</div>}</div>
      <aside className="h-fit rounded-xl border border-border bg-card p-5"><h2 className="flex items-center gap-2 font-semibold"><MapPin className="size-4 text-primary" />Pickup location</h2><p className="mt-1 text-sm text-muted-foreground">Enter coordinates for the driver.</p><div className="mt-5 space-y-4"><div><Label htmlFor="lat">Latitude</Label><Input id="lat" value={coordinates.latitude} onChange={(e) => setCoordinates({ ...coordinates, latitude: e.target.value })} /></div><div><Label htmlFor="lng">Longitude</Label><Input id="lng" value={coordinates.longitude} onChange={(e) => setCoordinates({ ...coordinates, longitude: e.target.value })} /></div></div><div className="mt-6 border-t pt-5"><p className="text-sm font-semibold">Are you a driver?</p><p className="mt-1 text-sm text-muted-foreground">Apply to drive or manage your trips.</p><Button className="mt-3 w-full" variant="outline" asChild><Link to="/shuttle-driver"><UserRound />Driver portal</Link></Button></div></aside></section>
  </main>;
}
