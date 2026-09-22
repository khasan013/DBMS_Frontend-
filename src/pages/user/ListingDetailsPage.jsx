import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  CalendarDays,
  Loader2,
  MapPin,
  MessageCircle,
  Phone,
  Share2,
  ShieldCheck,
  Tag,
} from "lucide-react";
import { toast } from "sonner";
import { api } from "@/services/api";
import { getListingReference } from "@/data/campus-data";
import { ListingImage } from "@/components/listing-card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export const Route = createFileRoute("/listing/$id")({ component: ListingRoutePage });
function ListingRoutePage() { return <ListingDetailsPage id={Route.useParams().id} />; }

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
  if (module === "lost")
    return {
      module,
      id: `lost-${item.itemId}`,
      ownerId: item.reportedBy,
      title: item.title,
      description: item.description,
      detail: `Location #${item.locationId}`,
      meta: item.createdAt,
      tag: item.itemType,
      status: item.status,
      imageUrl: item.imageUrl,
      owner: `Student #${item.reportedBy}`,
    };
  if (module === "market")
    return {
      module,
      id: `market-${item.postId}`,
      ownerId: item.sellerId,
      title: item.title,
      description: item.description,
      detail: item.fixedPrice
        ? `৳${Number(item.fixedPrice).toLocaleString()}`
        : `Starting ৳${Number(item.startingPrice).toLocaleString()}`,
      meta: item.condition,
      tag: item.sellingType,
      status: item.status,
      owner: `Student #${item.sellerId}`,
    };
  return {
    module,
    id: `to-let-${item.listingId}`,
    ownerId: item.ownerId,
    title: item.title,
    description: item.description,
    detail: `৳${Number(item.monthlyRent).toLocaleString()}/month`,
    meta: item.area,
    tag: `${item.bedrooms} bed · ${item.bathrooms} bath`,
    status: item.status,
    imageUrl: item.photoUrls?.[0],
    owner: `Student #${item.ownerId}`,
    phone: item.contactPhone,
    availableFrom: item.availableFrom,
  };
}

export function ListingDetailsPage({ id }) {
  const [listing, setListing] = useState(null);
  const [error, setError] = useState("");
  const [contactOpen, setContactOpen] = useState(false);
  const [contact, setContact] = useState(null);
  const [contactError, setContactError] = useState("");
  const [contactLoading, setContactLoading] = useState(false);

  useEffect(() => {
    const listingKey = parseListingId(id);
    if (!listingKey) {
      setError("This listing link is invalid.");
      return;
    }
    let active = true;
    api(endpointFor(listingKey))
      .then(async (item) => {
        const normalized = normalizeListing(listingKey.module, item);
        if (!active) return;
        setListing(normalized);

        try {
          const owner = await api(`/api/users/${normalized.ownerId}/contact`);
          if (active) {
            setListing(
              (current) =>
                current && {
                  ...current,
                  owner: owner.name,
                  ownerImageUrl: owner.profileImgUrl,
                },
            );
          }
        } catch {
          // Keep the anonymous fallback if the owner's public profile is unavailable.
        }
      })
      .catch((requestError) => {
        if (active) setError(requestError.message);
      });
    return () => {
      active = false;
    };
  }, [id]);

  if (error)
    return (
      <main className="container-shell py-16">
        <div className="mx-auto max-w-lg rounded-xl border border-danger/30 bg-danger/5 p-6 text-center">
          <h1 className="font-display text-2xl font-bold">
            Listing unavailable
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">{error}</p>
          <Button className="mt-5" asChild>
            <Link to="/marketplace">Browse listings</Link>
          </Button>
        </div>
      </main>
    );
  if (!listing)
    return (
      <main className="container-shell flex justify-center py-24">
        <Loader2 className="animate-spin text-primary" />
      </main>
    );

  const openContact = () => {
    setContactOpen(true);
    setContact(null);
    setContactError("");
    setContactLoading(true);
    api(`/api/users/${listing.ownerId}/contact`)
      .then(setContact)
      .catch((requestError) => setContactError(requestError.message))
      .finally(() => setContactLoading(false));
  };

  const backTo =
    listing.module === "lost"
      ? "/lost-and-found"
      : listing.module === "to-let"
        ? "/to-let"
        : "/marketplace";
  const moduleLabel =
    listing.module === "lost"
      ? "Lost & Found"
      : listing.module === "to-let"
        ? "To-let"
        : "Marketplace";
  const initial = listing.owner
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  const referenceId = getListingReference(listing.id);

  return (
    <>
      <main className="container-shell py-8">
        <Link
          to={backTo}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          Back to {moduleLabel}
        </Link>
        <div className="mt-5 grid gap-8 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <div className="h-72 overflow-hidden rounded-xl border border-border sm:h-96">
              <ListingImage listing={listing} />
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-accent px-2.5 py-1 text-xs font-semibold text-accent-foreground">
                {listing.tag}
              </span>
              <span className="rounded-full bg-primary-soft px-2.5 py-1 text-xs font-bold text-primary">
                {listing.status}
              </span>
              <span className="rounded-full border border-border px-2.5 py-1 text-xs font-semibold text-muted-foreground">
                Item ID: {referenceId}
              </span>
            </div>
            <h1 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              {listing.title}
            </h1>
            <p className="mt-2 font-display text-2xl font-bold text-primary">
              {listing.detail}
            </p>
            <div className="mt-4 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
              <p className="flex items-center gap-2">
                <MapPin className="size-4 text-primary" />
                {listing.meta}
              </p>
              <p className="flex items-center gap-2">
                <CalendarDays className="size-4" />
                {listing.availableFrom
                  ? `Available ${new Date(`${listing.availableFrom}T00:00:00`).toLocaleDateString()}`
                  : "Posted recently"}
              </p>
              <p className="flex items-center gap-2">
                <Tag className="size-4 text-primary" />
                {moduleLabel} · {listing.tag}
              </p>
            </div>
            <h2 className="mt-8 font-display text-lg font-semibold">
              Description
            </h2>
            <p className="mt-2 max-w-2xl whitespace-pre-wrap leading-relaxed text-muted-foreground">
              {listing.description}
            </p>
          </div>
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-xl border border-border bg-card p-5 shadow-soft">
              <p className="text-sm font-semibold text-muted-foreground">
                {listing.module === "market" ? "Seller" : "Posted by"}
              </p>
              <div className="mt-3 flex items-center gap-3">
                <div className="flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {listing.ownerImageUrl ? (
                    <img
                      src={listing.ownerImageUrl}
                      alt={`${listing.owner}'s profile`}
                      className="size-full object-cover"
                    />
                  ) : (
                    initial
                  )}
                </div>
                <div>
                  <p className="font-semibold">{listing.owner}</p>
                  <p className="flex items-center gap-1 text-xs text-success">
                    <ShieldCheck className="size-3.5" />
                    Campus community member
                  </p>
                </div>
              </div>
              {listing.phone && (
                <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="size-4" />
                  {listing.phone}
                </p>
              )}
              <div className="mt-5 grid gap-2">
                <Button onClick={openContact}>
                  <MessageCircle />
                  Contact Admin
                </Button>
                <Button
                  variant="outline"
                  onClick={() =>
                    navigator.clipboard
                      ?.writeText(window.location.href)
                      .then(() => toast.success("Listing link copied"))
                  }
                >
                  <Share2 />
                  Share listing
                </Button>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                Meet in public campus spaces and verify details before any
                payment.
              </p>
            </div>
          </aside>
        </div>
      </main>
      <Dialog open={contactOpen} onOpenChange={setContactOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Contact Admin</DialogTitle>
            <DialogDescription>
              Reach out directly about this listing.
            </DialogDescription>
          </DialogHeader>
          {contactLoading ? (
            <div className="flex justify-center py-8">
              <Loader2 className="animate-spin text-primary" />
            </div>
          ) : contactError ? (
            <p className="rounded-lg bg-danger/5 p-4 text-sm text-danger">
              {contactError}
            </p>
          ) : (
            contact && (
              <div className="space-y-4 rounded-xl border border-border bg-card p-4">
                <p className="text-lg font-semibold">{contact.name}</p>
                <a
                  href={`tel:${contact.phone}`}
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  <Phone className="size-4" />
                  {contact.phone}
                </a>
                <Button className="w-full" asChild>
                  <a href={`tel:${contact.phone}`}>
                    <Phone />
                    Call {contact.name}
                  </a>
                </Button>
              </div>
            )
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
