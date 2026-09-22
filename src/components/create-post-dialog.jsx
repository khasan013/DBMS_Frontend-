import { useEffect, useRef, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import {
  Building2,
  Check,
  ChevronLeft,
  ChevronRight,
  ImagePlus,
  Loader2,
  Search,
  ShoppingBag,
  X,
} from "lucide-react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/utils/utils";
import { api, getSession } from "@/services/api";

const options = [
  {
    id: "lost",
    label: "Lost & Found",
    icon: Search,
    note: "Report something lost or found",
  },
  {
    id: "market",
    label: "Marketplace",
    icon: ShoppingBag,
    note: "Sell, exchange, or donate",
  },
  {
    id: "to-let",
    label: "To-let",
    icon: Building2,
    note: "Post an available room or apartment",
  },
];
const blankForm = {
  title: "",
  description: "",
  categoryId: "",
  locationId: "",
  itemType: "",
  status: "LOST",
  condition: "",
  price: "",
};

export function CreatePostDialog({ open, onOpenChange }) {
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const [step, setStep] = useState(1);
  const [type, setType] = useState("lost");
  const [form, setForm] = useState(blankForm);
  const [categories, setCategories] = useState([]);
  const [locations, setLocations] = useState([]);
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (!open) return;
    Promise.all([api("/api/categories"), api("/api/locations")])
      .then(([categoryData, locationData]) => {
        setCategories(categoryData);
        setLocations(locationData);
      })
      .catch((error) => toast.error(error.message));
  }, [open]);

  const finish = () => {
    setStep(1);
    setForm(blankForm);
    setFile(null);
    setPreview("");
    onOpenChange(false);
  };
  const change = (field) => (event) =>
    setForm((current) => ({ ...current, [field]: event.target.value }));
  const valid = () => {
    if (
      !form.title.trim() ||
      !form.description.trim() ||
      !form.categoryId ||
      !form.locationId
    ) {
      toast.error("Complete the title, description, category, and location.");
      return false;
    }
    if (type === "lost" && !form.itemType.trim()) {
      toast.error("Enter the item type.");
      return false;
    }
    if (
      type === "market" &&
      (!form.condition.trim() || !form.price || Number(form.price) <= 0)
    ) {
      toast.error("Enter the item condition and a valid price.");
      return false;
    }
    return true;
  };
  const uploadImage = async () => {
    if (!file) return null;
    const body = new FormData();
    body.append("file", file);
    return (await api("/api/uploads/images", { method: "POST", body }))
      .imageUrl;
  };
  const publish = async () => {
    const userId = getSession()?.user?.userId;
    if (!userId || !valid()) return;
    setBusy(true);
    try {
      const imageUrl = await uploadImage();
      if (type === "lost") {
        await api("/api/items", {
          method: "POST",
          body: JSON.stringify({
            title: form.title,
            description: form.description,
            itemType: form.itemType,
            imageUrl,
            status: form.status,
            reportedBy: userId,
            categoryId: Number(form.categoryId),
            locationId: Number(form.locationId),
          }),
        });
      } else {
        await api("/api/marketplace/posts", {
          method: "POST",
          body: JSON.stringify({
            sellerId: userId,
            categoryId: Number(form.categoryId),
            locationId: Number(form.locationId),
            title: form.title,
            description: form.description,
            condition: form.condition,
            sellingType: "FIXED_PRICE",
            fixedPrice: Number(form.price),
            startingPrice: null,
            auctionStart: null,
            auctionEnd: null,
          }),
        });
      }
      toast.success("Your post is live.");
      finish();
      navigate({ to: type === "lost" ? "/lost-and-found" : "/marketplace" });
    } catch (error) {
      toast.error(error.message);
    } finally {
      setBusy(false);
    }
  };
  const next = () => {
    if (step === 1 && type === "to-let") {
      sessionStorage.setItem("campus-crate-open-to-let-form", "true");
      finish();
      navigate({ to: "/to-let" });
      return;
    }
    if (step === 2 && !valid()) return;
    if (step === 3) {
      publish();
      return;
    }
    setStep((current) => current + 1);
  };
  const selected = options.find((option) => option.id === type);

  return (
    <Dialog
      open={open}
      onOpenChange={(nextOpen) => {
        if (nextOpen && !getSession()) {
          toast.error("Please sign in before creating a post.");
          navigate({ to: "/login" });
          return;
        }
        if (nextOpen) onOpenChange(true);
        else finish();
      }}
    >
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-2xl">
        <DialogHeader>
          <div className="mb-2 flex items-center justify-between pr-8 text-xs font-semibold text-muted-foreground">
            <span>CREATE A POST</span>
            <span>Step {step} of 3</span>
          </div>
          <div className="mb-4 grid grid-cols-3 gap-2">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className={cn(
                  "h-1.5 rounded-full",
                  item <= step ? "bg-primary" : "bg-muted",
                )}
              />
            ))}
          </div>
          <DialogTitle className="font-display text-2xl">
            {step === 1
              ? "What would you like to post?"
              : step === 2
                ? "Add the details"
                : "Ready to share"}
          </DialogTitle>
          <DialogDescription>
            {step === 1
              ? "Choose where your post belongs."
              : step === 2
                ? "These details will be published to the community."
                : `Review your ${selected?.label} post, then publish it.`}
          </DialogDescription>
        </DialogHeader>
        {step === 1 && (
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {options.map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => setType(option.id)}
                className={cn(
                  "rounded-xl border p-4 text-left transition",
                  type === option.id
                    ? "border-primary bg-primary-soft ring-2 ring-primary/15"
                    : "border-border bg-card hover:bg-accent",
                )}
              >
                <option.icon className="mb-5 size-6 text-primary" />
                <strong className="block text-sm">{option.label}</strong>
                <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">
                  {option.note}
                </span>
              </button>
            ))}
          </div>
        )}
        {step === 2 && (
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <Label htmlFor="post-title">Title</Label>
              <Input
                id="post-title"
                className="mt-2"
                value={form.title}
                onChange={change("title")}
              />
            </div>
            <div>
              <Label htmlFor="post-category">Category</Label>
              <select
                id="post-category"
                value={form.categoryId}
                onChange={change("categoryId")}
                className="mt-2 h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
              >
                <option value="">Select category</option>
                {categories.map((category) => (
                  <option key={category.categoryId} value={category.categoryId}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <Label htmlFor="post-location">Location</Label>
              <select
                id="post-location"
                value={form.locationId}
                onChange={change("locationId")}
                className="mt-2 h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
              >
                <option value="">Select location</option>
                {locations.map((location) => (
                  <option key={location.locationId} value={location.locationId}>
                    {location.name}
                  </option>
                ))}
              </select>
            </div>
            {type === "lost" ? (
              <>
                <div>
                  <Label htmlFor="post-status">Report type</Label>
                  <select
                    id="post-status"
                    value={form.status}
                    onChange={change("status")}
                    className="mt-2 h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
                  >
                    <option value="LOST">Lost</option>
                    <option value="FOUND">Found</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="post-item-type">Item type</Label>
                  <Input
                    id="post-item-type"
                    className="mt-2"
                    value={form.itemType}
                    onChange={change("itemType")}
                    placeholder="e.g. Electronics"
                  />
                </div>
              </>
            ) : (
              <>
                <div>
                  <Label htmlFor="post-condition">Condition</Label>
                  <Input
                    id="post-condition"
                    className="mt-2"
                    value={form.condition}
                    onChange={change("condition")}
                    placeholder="e.g. Like new"
                  />
                </div>
                <div>
                  <Label htmlFor="post-price">Price (৳)</Label>
                  <Input
                    id="post-price"
                    type="number"
                    min="1"
                    className="mt-2"
                    value={form.price}
                    onChange={change("price")}
                  />
                </div>
              </>
            )}
            <div className="sm:col-span-2">
              <Label htmlFor="post-description">Description</Label>
              <Textarea
                id="post-description"
                className="mt-2 min-h-24"
                value={form.description}
                onChange={change("description")}
              />
            </div>
            <div className="sm:col-span-2">
              <Label>Photo (optional)</Label>
              <input
                ref={inputRef}
                type="file"
                accept="image/jpeg,image/png,image/webp,image/gif"
                className="hidden"
                onChange={(event) => {
                  const selectedFile = event.target.files?.[0];
                  if (selectedFile) {
                    setFile(selectedFile);
                    setPreview(URL.createObjectURL(selectedFile));
                  }
                }}
              />
              <button
                type="button"
                onClick={() => inputRef.current?.click()}
                className="mt-2 flex h-36 w-full flex-col items-center justify-center overflow-hidden rounded-xl border border-dashed border-primary/35 bg-primary-soft text-center text-sm text-muted-foreground"
              >
                {preview ? (
                  <img
                    src={preview}
                    alt="Upload preview"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <>
                    <ImagePlus className="mb-2 size-7 text-primary" />
                    <strong className="text-foreground">Upload a photo</strong>
                    <span className="mt-1 text-xs">
                      JPEG, PNG, WebP, or GIF up to 10 MB
                    </span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}
        {step === 3 && (
          <div className="rounded-xl border border-success/25 bg-success-soft p-8 text-center">
            <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-success text-success-foreground">
              <Check />
            </span>
            <h3 className="mt-4 font-display text-xl font-semibold">
              Ready to publish
            </h3>
            <p className="mx-auto mt-2 max-w-sm text-sm text-muted-foreground">
              Your post will appear in {selected?.label} and the latest
              community highlights.
            </p>
          </div>
        )}
        <div className="mt-2 flex justify-between border-t border-border pt-4">
          <Button
            variant="ghost"
            disabled={busy}
            onClick={() =>
              step === 1 ? finish() : setStep((current) => current - 1)
            }
          >
            {step === 1 ? <X /> : <ChevronLeft />}
            {step === 1 ? "Cancel" : "Back"}
          </Button>
          <Button disabled={busy} onClick={next}>
            {busy ? (
              <Loader2 className="animate-spin" />
            ) : step === 1 && type === "to-let" ? (
              "Post to-let"
            ) : step === 3 ? (
              "Publish post"
            ) : (
              "Continue"
            )}
            {step < 3 && !busy && <ChevronRight />}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
