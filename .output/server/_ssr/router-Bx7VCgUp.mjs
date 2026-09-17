import { n as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { f as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { a as cn, i as clearSession, n as api, o as getSession, t as Button } from "./api-BrSPGXDs.mjs";
import { t as Input } from "./input-B2DL_XkA.mjs";
import { t as Label } from "./label-Bz2fWaly.mjs";
import { _ as useRouter, c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useNavigate, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as Building2, C as Circle, D as Check, E as ChevronLeft, T as ChevronRight, a as Sun, b as ImagePlus, d as Plus, g as Menu, l as Settings, m as Moon, n as UserRound, o as ShoppingBag, r as UserPlus, t as X, u as Search, v as LogIn, y as LoaderCircle } from "../_libs/lucide-react.mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { a as DialogTitle, i as DialogHeader, n as DialogContent, o as Route$9, r as DialogDescription, t as Dialog } from "./listing._id-CzJYVf7w.mjs";
import { n as AvatarFallback, r as AvatarImage, t as Avatar } from "./avatar-DjPBrCuR.mjs";
import { a as Label2, c as Root2, d as SubTrigger2, f as Trigger, i as ItemIndicator2, l as Separator2, n as Content2, o as Portal2, r as Item2, s as RadioItem2, t as CheckboxItem2, u as SubContent2 } from "../_libs/@radix-ui/react-dropdown-menu+[...].mjs";
import { t as Route$10 } from "./verify-email-5om6Ftci.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-Bx7VCgUp.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-BsMQVgBM.css";
var DropdownMenu = Root2;
var DropdownMenuTrigger = Trigger;
var DropdownMenuSubTrigger = import_react.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SubTrigger2, {
	ref,
	className: cn("flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", inset && "pl-8", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "ml-auto" })]
}));
DropdownMenuSubTrigger.displayName = SubTrigger2.displayName;
var DropdownMenuSubContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SubContent2, {
	ref,
	className: cn("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)", className),
	...props
}));
DropdownMenuSubContent.displayName = SubContent2.displayName;
var DropdownMenuContent = import_react.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	sideOffset,
	className: cn("z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)", className),
	...props
}) }));
DropdownMenuContent.displayName = Content2.displayName;
var DropdownMenuItem = import_react.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item2, {
	ref,
	className: cn("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0", inset && "pl-8", className),
	...props
}));
DropdownMenuItem.displayName = Item2.displayName;
var DropdownMenuCheckboxItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CheckboxItem2, {
	ref,
	className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemIndicator2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }) })
	}), children]
}));
DropdownMenuCheckboxItem.displayName = CheckboxItem2.displayName;
var DropdownMenuRadioItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RadioItem2, {
	ref,
	className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemIndicator2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Circle, { className: "h-2 w-2 fill-current" }) })
	}), children]
}));
DropdownMenuRadioItem.displayName = RadioItem2.displayName;
var DropdownMenuLabel = import_react.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label2, {
	ref,
	className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className),
	...props
}));
DropdownMenuLabel.displayName = Label2.displayName;
var DropdownMenuSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator2, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-muted", className),
	...props
}));
DropdownMenuSeparator.displayName = Separator2.displayName;
var DropdownMenuShortcut = ({ className, ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("ml-auto text-xs tracking-widest opacity-60", className),
		...props
	});
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
var options = [
	{
		id: "lost",
		label: "Lost & Found",
		icon: Search,
		note: "Report something lost or found"
	},
	{
		id: "market",
		label: "Marketplace",
		icon: ShoppingBag,
		note: "Sell, exchange, or donate"
	},
	{
		id: "to-let",
		label: "To-let",
		icon: Building2,
		note: "Post an available room or apartment"
	}
];
var blankForm = {
	title: "",
	description: "",
	categoryId: "",
	locationId: "",
	itemType: "",
	status: "LOST",
	condition: "",
	price: ""
};
function CreatePostDialog({ open, onOpenChange }) {
	const navigate = useNavigate();
	const inputRef = (0, import_react.useRef)(null);
	const [step, setStep] = (0, import_react.useState)(1);
	const [type, setType] = (0, import_react.useState)("lost");
	const [form, setForm] = (0, import_react.useState)(blankForm);
	const [categories, setCategories] = (0, import_react.useState)([]);
	const [locations, setLocations] = (0, import_react.useState)([]);
	const [file, setFile] = (0, import_react.useState)(null);
	const [preview, setPreview] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		Promise.all([api("/api/categories"), api("/api/locations")]).then(([categoryData, locationData]) => {
			setCategories(categoryData);
			setLocations(locationData);
		}).catch((error) => toast.error(error.message));
	}, [open]);
	const finish = () => {
		setStep(1);
		setForm(blankForm);
		setFile(null);
		setPreview("");
		onOpenChange(false);
	};
	const change = (field) => (event) => setForm((current) => ({
		...current,
		[field]: event.target.value
	}));
	const valid = () => {
		if (!form.title.trim() || !form.description.trim() || !form.categoryId || !form.locationId) {
			toast.error("Complete the title, description, category, and location.");
			return false;
		}
		if (type === "lost" && !form.itemType.trim()) {
			toast.error("Enter the item type.");
			return false;
		}
		if (type === "market" && (!form.condition.trim() || !form.price || Number(form.price) <= 0)) {
			toast.error("Enter the item condition and a valid price.");
			return false;
		}
		return true;
	};
	const uploadImage = async () => {
		if (!file) return null;
		const body = new FormData();
		body.append("file", file);
		return (await api("/api/uploads/images", {
			method: "POST",
			body
		})).imageUrl;
	};
	const publish = async () => {
		const userId = getSession()?.user?.userId;
		if (!userId || !valid()) return;
		setBusy(true);
		try {
			const imageUrl = await uploadImage();
			if (type === "lost") await api("/api/items", {
				method: "POST",
				body: JSON.stringify({
					title: form.title,
					description: form.description,
					itemType: form.itemType,
					imageUrl,
					status: form.status,
					reportedBy: userId,
					categoryId: Number(form.categoryId),
					locationId: Number(form.locationId)
				})
			});
			else await api("/api/marketplace/posts", {
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
					auctionEnd: null
				})
			});
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange: (nextOpen) => {
			if (nextOpen && !getSession()) {
				toast.error("Please sign in before creating a post.");
				navigate({ to: "/login" });
				return;
			}
			if (nextOpen) onOpenChange(true);
			else finish();
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-h-[90vh] overflow-y-auto sm:max-w-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-2 flex items-center justify-between pr-8 text-xs font-semibold text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "CREATE A POST" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							"Step ",
							step,
							" of 3"
						] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-4 grid grid-cols-3 gap-2",
						children: [
							1,
							2,
							3
						].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: cn("h-1.5 rounded-full", item <= step ? "bg-primary" : "bg-muted") }, item))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
						className: "font-display text-2xl",
						children: step === 1 ? "What would you like to post?" : step === 2 ? "Add the details" : "Ready to share"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: step === 1 ? "Choose where your post belongs." : step === 2 ? "These details will be published to the community." : `Review your ${selected?.label} post, then publish it.` })
				] }),
				step === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
					children: options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setType(option.id),
						className: cn("rounded-xl border p-4 text-left transition", type === option.id ? "border-primary bg-primary-soft ring-2 ring-primary/15" : "border-border bg-card hover:bg-accent"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(option.icon, { className: "mb-5 size-6 text-primary" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "block text-sm",
								children: option.label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 block text-xs leading-relaxed text-muted-foreground",
								children: option.note
							})
						]
					}, option.id))
				}),
				step === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-5 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "sm:col-span-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "post-title",
								children: "Title"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "post-title",
								className: "mt-2",
								value: form.title,
								onChange: change("title")
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "post-category",
							children: "Category"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							id: "post-category",
							value: form.categoryId,
							onChange: change("categoryId"),
							className: "mt-2 h-10 w-full rounded-md border border-input bg-background px-3 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								children: "Select category"
							}), categories.map((category) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: category.categoryId,
								children: category.name
							}, category.categoryId))]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "post-location",
							children: "Location"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							id: "post-location",
							value: form.locationId,
							onChange: change("locationId"),
							className: "mt-2 h-10 w-full rounded-md border border-input bg-background px-3 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								children: "Select location"
							}), locations.map((location) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: location.locationId,
								children: location.name
							}, location.locationId))]
						})] }),
						type === "lost" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "post-status",
							children: "Report type"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							id: "post-status",
							value: form.status,
							onChange: change("status"),
							className: "mt-2 h-10 w-full rounded-md border border-input bg-background px-3 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "LOST",
								children: "Lost"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "FOUND",
								children: "Found"
							})]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "post-item-type",
							children: "Item type"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "post-item-type",
							className: "mt-2",
							value: form.itemType,
							onChange: change("itemType"),
							placeholder: "e.g. Electronics"
						})] })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "post-condition",
							children: "Condition"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "post-condition",
							className: "mt-2",
							value: form.condition,
							onChange: change("condition"),
							placeholder: "e.g. Like new"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "post-price",
							children: "Price (৳)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "post-price",
							type: "number",
							min: "1",
							className: "mt-2",
							value: form.price,
							onChange: change("price")
						})] })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "sm:col-span-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "post-description",
								children: "Description"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								id: "post-description",
								className: "mt-2 min-h-24",
								value: form.description,
								onChange: change("description")
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "sm:col-span-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Photo (optional)" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									ref: inputRef,
									type: "file",
									accept: "image/jpeg,image/png,image/webp,image/gif",
									className: "hidden",
									onChange: (event) => {
										const selectedFile = event.target.files?.[0];
										if (selectedFile) {
											setFile(selectedFile);
											setPreview(URL.createObjectURL(selectedFile));
										}
									}
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => inputRef.current?.click(),
									className: "mt-2 flex h-36 w-full flex-col items-center justify-center overflow-hidden rounded-xl border border-dashed border-primary/35 bg-primary-soft text-center text-sm text-muted-foreground",
									children: preview ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: preview,
										alt: "Upload preview",
										className: "h-full w-full object-cover"
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePlus, { className: "mb-2 size-7 text-primary" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											className: "text-foreground",
											children: "Upload a photo"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-1 text-xs",
											children: "JPEG, PNG, WebP, or GIF up to 10 MB"
										})
									] })
								})
							]
						})
					]
				}),
				step === 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-success/25 bg-success-soft p-8 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mx-auto flex size-12 items-center justify-center rounded-full bg-success text-success-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 font-display text-xl font-semibold",
							children: "Ready to publish"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mx-auto mt-2 max-w-sm text-sm text-muted-foreground",
							children: [
								"Your post will appear in ",
								selected?.label,
								" and the latest community highlights."
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 flex justify-between border-t border-border pt-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "ghost",
						disabled: busy,
						onClick: () => step === 1 ? finish() : setStep((current) => current - 1),
						children: [step === 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {}), step === 1 ? "Cancel" : "Back"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						disabled: busy,
						onClick: next,
						children: [busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "animate-spin" }) : step === 1 && type === "to-let" ? "Post to-let" : step === 3 ? "Publish post" : "Continue", step < 3 && !busy && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {})]
					})]
				})
			]
		})
	});
}
function SiteHeader() {
	const [createOpen, setCreateOpen] = (0, import_react.useState)(false);
	const [mobileOpen, setMobileOpen] = (0, import_react.useState)(false);
	const [dark, setDark] = (0, import_react.useState)(false);
	const [session, setSession] = (0, import_react.useState)(() => getSession());
	const navigate = useNavigate();
	(0, import_react.useEffect)(() => {
		const refreshSession = () => setSession(getSession());
		window.addEventListener("campus-crate-auth-change", refreshSession);
		window.addEventListener("storage", refreshSession);
		return () => {
			window.removeEventListener("campus-crate-auth-change", refreshSession);
			window.removeEventListener("storage", refreshSession);
		};
	}, []);
	const signedIn = Boolean(session?.token);
	const user = session?.user ?? {};
	const displayName = user.name || user.studentId || "Student";
	const initials = displayName.split(/\s+/).filter(Boolean).slice(0, 2).map((part) => part[0]).join("").toUpperCase() || "CC";
	const requireLogin = (action) => {
		if (signedIn) return action();
		navigate({ to: "/login" });
	};
	const signOut = () => {
		clearSession();
		setCreateOpen(false);
		navigate({ to: "/" });
	};
	const runSearch = (event) => {
		event.preventDefault();
		const form = new FormData(event.currentTarget);
		const section = String(form.get("section"));
		if (section === "lost") navigate({ to: "/lost-and-found" });
		else if (section === "market") navigate({ to: "/marketplace" });
		else if (section === "to-let") navigate({ to: "/to-let" });
	};
	const links = [
		{
			to: "/lost-and-found",
			label: "Lost & Found"
		},
		{
			to: "/marketplace",
			label: "Marketplace"
		},
		{
			to: "/to-let",
			label: "To-let"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 border-b border-border/80 bg-background/92 backdrop-blur-xl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-shell flex h-16 items-center gap-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex shrink-0 items-center gap-2.5",
					"aria-label": "Campus Crate home",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/campus-crate-logo.png",
						alt: "",
						className: "size-9 object-contain"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-lg font-bold",
						children: "Campus Crate"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-1 lg:flex",
					children: links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: link.to,
						className: "rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition hover:bg-accent hover:text-foreground",
						activeProps: { className: "bg-accent text-foreground" },
						children: link.label
					}, link.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: runSearch,
					className: "mx-auto hidden h-10 max-w-md flex-1 items-center rounded-xl border border-border bg-muted/60 md:flex",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							name: "section",
							"aria-label": "Search category",
							className: "h-full w-28 bg-transparent px-3 text-xs font-semibold text-foreground outline-none",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "all",
									children: "All"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "lost",
									children: "Lost & Found"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "market",
									children: "Marketplace"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "to-let",
									children: "To-let"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-5 w-px bg-border" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "mx-3 size-4 text-muted-foreground" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							name: "query",
							"aria-label": "Search Campus Crate",
							placeholder: "Search campus…",
							className: "min-w-0 flex-1 bg-transparent pr-3 text-sm outline-none placeholder:text-muted-foreground"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "ml-auto flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							className: "hidden sm:inline-flex",
							onClick: () => requireLogin(() => setCreateOpen(true)),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {}), "Create Post"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							className: "hidden sm:inline-flex",
							"aria-label": "Toggle theme",
							onClick: () => {
								document.documentElement.classList.toggle("dark");
								setDark(!dark);
							},
							children: dark ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								className: "rounded-full",
								"aria-label": "Account menu",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Avatar, {
									className: "size-8",
									children: [user.profileImgUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarImage, {
										src: user.profileImgUrl,
										alt: `${displayName}'s profile`
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, { children: signedIn ? initials : "?" })]
								})
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuContent, {
							align: "end",
							children: signedIn ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "px-2 py-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-semibold",
										children: displayName
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: user.email || "Signed-in student"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/my-listings",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, {}), "My listings"]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/edit-profile",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, {}), "Edit profile"]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
									onClick: () => setCreateOpen(true),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {}), "Create post"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
									onClick: signOut,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogIn, {}), "Sign out"]
								})
							] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/login",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogIn, {}), "Sign in"]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/signup",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserPlus, {}), "Create account"]
								})
							})] })
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							className: "lg:hidden",
							onClick: () => setMobileOpen(!mobileOpen),
							"aria-label": "Toggle menu",
							children: mobileOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
						})
					]
				})
			]
		}), mobileOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "container-shell grid gap-1 border-t border-border py-3 lg:hidden",
			children: [links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: link.to,
				onClick: () => setMobileOpen(false),
				className: "rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent",
				children: link.label
			}, link.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				className: "mt-2 sm:hidden",
				onClick: () => requireLogin(() => setCreateOpen(true)),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {}), "Create Post"]
			})]
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreatePostDialog, {
		open: createOpen,
		onOpenChange: setCreateOpen
	})] });
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$8 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Campus Crate" },
			{
				name: "description",
				content: "Your trusted university community portal."
			},
			{
				name: "author",
				content: "Campus Crate"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:site",
				content: "@Lovable"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@600;700;800&display=swap"
			},
			{
				rel: "icon",
				href: "/campus-crate-logo.png",
				type: "image/png"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$8.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {})
		]
	});
}
var $$splitComponentImporter$7 = () => import("./routes-ml1pX7ZL.mjs");
var Route$7 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Campus Crate — Your Campus, Connected" },
		{
			name: "description",
			content: "Find lost items, student deals, and student-friendly rentals in one community."
		},
		{
			property: "og:title",
			content: "Campus Crate — Your Campus, Connected"
		},
		{
			property: "og:description",
			content: "Find lost items, student deals, and student-friendly rentals in one community."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./edit-profile-B-MYA_aG.mjs");
var Route$6 = createFileRoute("/edit-profile")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./login-g3ZCCfSt.mjs");
var Route$5 = createFileRoute("/login")({
	head: () => ({ meta: [
		{ title: "Sign In — Campus Crate" },
		{
			name: "description",
			content: "Sign in to your Campus Crate student account to post and manage listings."
		},
		{
			property: "og:title",
			content: "Sign In — Campus Crate"
		},
		{
			property: "og:description",
			content: "Sign in to your Campus Crate student account to post and manage listings."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./lost-and-found-BpU0K88f.mjs");
var Route$4 = createFileRoute("/lost-and-found")({
	head: () => ({ meta: [
		{ title: "Lost & Found — Campus Crate" },
		{
			name: "description",
			content: "Report and recover lost items across your university community."
		},
		{
			property: "og:title",
			content: "Lost & Found — Campus Crate"
		},
		{
			property: "og:description",
			content: "Report and recover lost items across your university community."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./marketplace-DO8jKKr2.mjs");
var Route$3 = createFileRoute("/marketplace")({
	head: () => ({ meta: [
		{ title: "Marketplace — Campus Crate" },
		{
			name: "description",
			content: "Buy, sell, exchange, and donate useful items with fellow students."
		},
		{
			property: "og:title",
			content: "Marketplace — Campus Crate"
		},
		{
			property: "og:description",
			content: "Buy, sell, exchange, and donate useful items with fellow students."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./my-listings-DCxJVChj.mjs");
var Route$2 = createFileRoute("/my-listings")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./signup-gubm5raD.mjs");
var Route$1 = createFileRoute("/signup")({
	head: () => ({ meta: [
		{ title: "Create Account — Campus Crate" },
		{
			name: "description",
			content: "Join Campus Crate to post lost items, sell things, and find student-friendly rentals."
		},
		{
			property: "og:title",
			content: "Create Account — Campus Crate"
		},
		{
			property: "og:description",
			content: "Join Campus Crate to post lost items, sell things, and find student-friendly rentals."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./to-let-1H_xsedP.mjs");
var Route = createFileRoute("/to-let")({
	head: () => ({ meta: [{ title: "To-let — Campus Crate" }, {
		name: "description",
		content: "Find student-friendly rooms and apartments near campus."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$7.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$8
	}),
	EditProfileRoute: Route$6.update({
		id: "/edit-profile",
		path: "/edit-profile",
		getParentRoute: () => Route$8
	}),
	LoginRoute: Route$5.update({
		id: "/login",
		path: "/login",
		getParentRoute: () => Route$8
	}),
	LostAndFoundRoute: Route$4.update({
		id: "/lost-and-found",
		path: "/lost-and-found",
		getParentRoute: () => Route$8
	}),
	MarketplaceRoute: Route$3.update({
		id: "/marketplace",
		path: "/marketplace",
		getParentRoute: () => Route$8
	}),
	MyListingsRoute: Route$2.update({
		id: "/my-listings",
		path: "/my-listings",
		getParentRoute: () => Route$8
	}),
	SignupRoute: Route$1.update({
		id: "/signup",
		path: "/signup",
		getParentRoute: () => Route$8
	}),
	ToLetRoute: Route.update({
		id: "/to-let",
		path: "/to-let",
		getParentRoute: () => Route$8
	}),
	VerifyEmailRoute: Route$10.update({
		id: "/verify-email",
		path: "/verify-email",
		getParentRoute: () => Route$8
	}),
	ListingIdRoute: Route$9.update({
		id: "/listing/$id",
		path: "/listing/$id",
		getParentRoute: () => Route$8
	})
};
var routeTree = Route$8._addFileChildren(rootRouteChildren);
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
