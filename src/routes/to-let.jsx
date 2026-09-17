import { useEffect, useMemo, useState } from "react";
import {
  Building2,
  Check,
  Filter,
  Loader2,
  Plus,
  Search,
  X,
} from "lucide-react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";
import { api, getSession } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { ListingCard } from "@/components/listing-card";

export const Route = createFileRoute("/to-let")({
  head: () => ({
    meta: [
      { title: "To-let — Campus Crate" },
      {
        name: "description",
        content: "Find student-friendly rooms and apartments near campus.",
      },
    ],
  }),
  component: ToLetPage,
});

const emptyForm = {
  title: "",
  description: "",
  area: "",
  monthlyRent: "",
  bedrooms: "1",
  bathrooms: "1",
  contactPhone: "",
  availableFrom: "",
};
const MAX_RENT = 100000;

function ToLetPage() {
  const navigate = useNavigate();
  const userId = getSession()?.user?.userId;
  const [listings, setListings] = useState([]);
  const [query, setQuery] = useState("");
  const [area, setArea] = useState("");
  const [maxRent, setMaxRent] = useState(MAX_RENT);
  const [bedrooms, setBedrooms] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");

  useEffect(() => {
    api("/api/to-let/listings")
      .then(setListings)
      .catch((error) => {
        setListings([]);
        setLoadError(error.message);
      })
      .finally(() => setLoading(false));
  }, []);

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    const selectedBedrooms = bedrooms.map(Number);
    return listings.filter((listing) => {
      const matchesQuery =
        !needle ||
        [listing.title, listing.description, listing.area].some((value) =>
          value?.toLowerCase().includes(needle),
        );
      const matchesArea =
        !area.trim() ||
        listing.area?.toLowerCase().includes(area.trim().toLowerCase());
      const matchesBedroom =
        !selectedBedrooms.length ||
        selectedBedrooms.some((roomCount) =>
          roomCount === 3
            ? listing.bedrooms >= 3
            : listing.bedrooms === roomCount,
        );
      return (
        matchesQuery &&
        matchesArea &&
        Number(listing.monthlyRent) <= maxRent &&
        matchesBedroom
      );
    });
  }, [area, bedrooms, listings, maxRent, query]);

  const toggleBedroom = (value) =>
    setBedrooms((current) =>
      current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value],
    );
  const clearFilters = () => {
    setArea("");
    setMaxRent(MAX_RENT);
    setBedrooms([]);
  };
  const submit = (event) => {
    event.preventDefault();
    if (!userId) {
      toast.error("Please sign in to post a rental listing.");
      navigate({ to: "/login" });
      return;
    }
    api("/api/to-let/listings", {
      method: "POST",
      body: JSON.stringify({
        ...form,
        ownerId: userId,
        monthlyRent: Number(form.monthlyRent),
        bedrooms: Number(form.bedrooms),
        bathrooms: Number(form.bathrooms),
        availableFrom: form.availableFrom || null,
      }),
    })
      .then((listing) => {
        setListings((current) => [listing, ...current]);
        setForm(emptyForm);
        setShowForm(false);
        toast.success("Your to-let listing is live.");
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <main>
      <section className="border-b border-border bg-surface-subtle">
        <div className="container-shell py-10 sm:py-14">
          <div className="flex max-w-2xl items-start gap-4">
            <span className="mt-1 flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
              <Building2 />
            </span>
            <div>
              <p className="eyebrow">STUDENT HOUSING</p>
              <h1 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
                To-let Service
              </h1>
              <p className="mt-3 text-muted-foreground">
                Find student-friendly rooms and apartments near campus.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="container-shell py-8">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-xl font-semibold">
              Browse listings
            </h2>
            <p className="text-sm text-muted-foreground">
              {loading
                ? "Loading places…"
                : `${filtered.length} place${filtered.length === 1 ? "" : "s"}`}
            </p>
          </div>
          <div className="flex gap-2">
            <div className="relative flex-1 sm:w-72">
              <Search className="absolute left-3 top-2.5 size-4 text-muted-foreground" />
              <Input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search to-let…"
                className="pl-9"
              />
            </div>
            <Button
              variant="outline"
              className="lg:hidden"
              onClick={() => setShowFilters((visible) => !visible)}
            >
              <Filter />
              Filters
            </Button>
          </div>
        </div>
        <div className="grid gap-8 lg:grid-cols-[220px_1fr]">
          <aside className={`${showFilters ? "block" : "hidden"} lg:block`}>
            <div className="space-y-6 lg:sticky lg:top-24">
              <div>
                <div className="mb-3 flex justify-between text-sm font-semibold">
                  <span>Maximum rent</span>
                  <span className="text-primary">
                    {maxRent === MAX_RENT
                      ? "Any"
                      : `৳${maxRent.toLocaleString()}`}
                  </span>
                </div>
                <Slider
                  value={[maxRent]}
                  max={MAX_RENT}
                  step={1000}
                  onValueChange={([value]) => setMaxRent(value)}
                />
              </div>
              <div>
                <Label
                  htmlFor="to-let-area"
                  className="mb-3 block text-sm font-semibold"
                >
                  Area
                </Label>
                <Input
                  id="to-let-area"
                  value={area}
                  onChange={(event) => setArea(event.target.value)}
                  placeholder="e.g. Kuril"
                />
              </div>
              <fieldset>
                <legend className="mb-3 text-sm font-semibold">Bedrooms</legend>
                <div className="space-y-2.5">
                  {[
                    ["1", "1 bedroom"],
                    ["2", "2 bedrooms"],
                    ["3", "3+ bedrooms"],
                  ].map(([value, label]) => (
                    <label
                      key={value}
                      className="flex cursor-pointer items-center gap-2.5 text-sm text-muted-foreground"
                    >
                      <Checkbox
                        checked={bedrooms.includes(value)}
                        onCheckedChange={() => toggleBedroom(value)}
                      />
                      {label}
                    </label>
                  ))}
                </div>
              </fieldset>
              {(area || maxRent !== MAX_RENT || bedrooms.length > 0) && (
                <Button variant="ghost" size="sm" onClick={clearFilters}>
                  <Check />
                  Clear filters
                </Button>
              )}
              <Button
                className="w-full"
                variant="outline"
                onClick={() => {
                  if (!userId) {
                    toast.error("Please sign in to post a rental listing.");
                    navigate({ to: "/login" });
                  } else setShowForm((open) => !open);
                }}
              >
                <Plus />
                Post to-let
              </Button>
            </div>
          </aside>
          <div>
            {showForm && (
              <form
                onSubmit={submit}
                className="mb-6 grid gap-4 rounded-xl border border-border bg-card p-5 md:grid-cols-2"
              >
                <div className="flex items-center justify-between md:col-span-2">
                  <h2 className="font-display text-xl font-bold">
                    Post a rental listing
                  </h2>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => setShowForm(false)}
                    aria-label="Close form"
                  >
                    <X />
                  </Button>
                </div>
                {[
                  ["title", "Listing title"],
                  ["area", "Area"],
                  ["monthlyRent", "Monthly rent"],
                  ["bedrooms", "Bedrooms"],
                  ["bathrooms", "Bathrooms"],
                  ["contactPhone", "Contact phone"],
                  ["availableFrom", "Available from"],
                ].map(([key, label]) => (
                  <div key={key}>
                    <Label htmlFor={key}>{label}</Label>
                    <Input
                      id={key}
                      required={key !== "availableFrom"}
                      type={
                        key === "monthlyRent" ||
                        key === "bedrooms" ||
                        key === "bathrooms"
                          ? "number"
                          : key === "availableFrom"
                            ? "date"
                            : "text"
                      }
                      min={
                        key === "monthlyRent"
                          ? "1"
                          : key === "bedrooms" || key === "bathrooms"
                            ? "0"
                            : undefined
                      }
                      value={form[key]}
                      onChange={(event) =>
                        setForm({ ...form, [key]: event.target.value })
                      }
                    />
                  </div>
                ))}
                <div className="md:col-span-2">
                  <Label htmlFor="description">Description</Label>
                  <textarea
                    id="description"
                    required
                    value={form.description}
                    onChange={(event) =>
                      setForm({ ...form, description: event.target.value })
                    }
                    className="min-h-28 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none"
                    placeholder="Include furnishing, utilities, preferred tenant, and other useful details."
                  />
                </div>
                <div className="md:col-span-2 flex gap-3">
                  <Button type="submit">Publish listing</Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowForm(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            )}
            {loadError ? (
              <div className="rounded-xl border border-danger/30 bg-danger/5 p-5 text-sm text-danger">
                <p className="font-semibold">Listings could not be loaded.</p>
                <p className="mt-1">{loadError}</p>
              </div>
            ) : loading ? (
              <div className="flex justify-center py-16">
                <Loader2 className="animate-spin text-primary" />
              </div>
            ) : filtered.length ? (
              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {filtered.map((listing) => (
                  <ListingCard
                    key={listing.listingId}
                    listing={{
                      id: `to-let-${listing.listingId}`,
                      module: "to-let",
                      title: listing.title,
                      detail: `৳${Number(listing.monthlyRent).toLocaleString()}/mo`,
                      meta: listing.area,
                      tag: `${listing.bedrooms} bed · ${listing.bathrooms} bath`,
                      status: listing.status,
                      owner: `Student #${listing.ownerId}`,
                    }}
                  />
                ))}
              </div>
            ) : (
              <div className="rounded-xl border border-dashed border-border py-20 text-center text-muted-foreground">
                No rental listings match your filters.
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
