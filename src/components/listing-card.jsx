import { Link } from "@tanstack/react-router";
import {
  Building2,
  CalendarDays,
  ImageOff,
  MapPin,
  MessageCircle,
  ShoppingBag,
  UserRound,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { getListingReference } from "@/data/campus-data";
import { cn } from "@/utils/utils";

export function ListingImage({ listing }) {
  if (listing.imageUrl) {
    return (
      <img
        src={listing.imageUrl}
        alt={listing.title}
        className="h-full w-full object-cover"
        loading="lazy"
      />
    );
  }
  const Icon =
    listing.module === "to-let"
      ? Building2
      : listing.module === "market"
        ? ShoppingBag
        : ImageOff;
  return (
    <div className="flex h-full w-full items-center justify-center bg-surface-subtle text-primary">
      <Icon className="size-12" aria-label="No image provided" />
    </div>
  );
}

export function ListingCard({ listing, compact = false }) {
  const found = listing.status === "FOUND";
  const referenceId = getListingReference(listing.id);
  return (
    <Link
      to="/listing/$id"
      params={{ id: String(listing.id) }}
      className="group block overflow-hidden rounded-xl border border-border bg-card shadow-soft transition duration-300 hover:-translate-y-0.5 hover:shadow-card"
    >
      <div className="relative aspect-video">
        <ListingImage listing={listing} />
        <span
          className={cn(
            "absolute left-3 top-3 rounded-full px-2.5 py-1 text-[11px] font-bold tracking-wide",
            listing.module === "lost"
              ? found
                ? "bg-success-soft text-success"
                : "bg-danger-soft text-danger"
              : "bg-card/95 text-foreground shadow-sm",
          )}
        >
          {listing.status}
        </span>
      </div>
      <div className="p-4">
        <div className="mb-2 flex items-center gap-2">
          <span className="rounded-full bg-accent px-2 py-1 text-[11px] font-semibold text-accent-foreground">
            {listing.tag}
          </span>
          {(listing.module === "market" || listing.module === "to-let") && (
            <span className="text-xs text-muted-foreground">
              {listing.meta}
            </span>
          )}
        </div>
        <h3 className="line-clamp-1 font-display text-base font-semibold text-card-foreground">
          {listing.title}
        </h3>
        <p className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
          Item ID: {referenceId}
        </p>
        {listing.module === "market" || listing.module === "to-let" ? (
          <div className="mt-3 flex items-center justify-between">
            <p className="font-display text-lg font-bold text-primary">
              {listing.detail}
            </p>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <UserRound className="size-3.5" />
              {listing.owner}
            </span>
          </div>
        ) : (
          <div className="mt-2 space-y-1.5 text-sm text-muted-foreground">
            <p className="flex items-center gap-1.5">
              <MapPin className="size-4 text-primary" />
              {listing.detail}
            </p>
            <p className="flex items-center gap-1.5">
              <CalendarDays className="size-4" />
              {listing.meta}
            </p>
          </div>
        )}
        {!compact && (
          <span
            className={cn(
              buttonVariants({
                variant: listing.module === "lost" ? "outline" : "default",
              }),
              "mt-4 w-full",
            )}
          >
            {listing.module === "lost" && <MessageCircle />}
            {listing.module === "lost" ? "Contact" : "View details"}
          </span>
        )}
      </div>
    </Link>
  );
}
