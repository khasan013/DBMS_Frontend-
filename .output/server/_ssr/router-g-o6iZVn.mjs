import { n as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { c as HeadContent, d as Outlet, f as createFileRoute, g as useRouter, h as useNavigate, m as Link, p as createRootRouteWithContext, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as require_jsx_runtime, l as Slot, n as AvatarFallback$1, r as AvatarImage$1, t as Avatar$1 } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { A as Check, C as ImageOff, D as CircleCheck, E as Circle, F as ArrowLeft, M as CalendarDays, N as Building2, O as ChevronRight, P as ArrowRight, S as ImagePlus, T as ClipboardList, _ as MessageCircle, a as UserPlus, b as LogIn, c as Tag, d as Share2, f as Settings, g as PenLine, h as Phone, i as UserRound, j as Camera, k as ChevronLeft, l as ShoppingBag, m as Plus, n as Users, o as UserCheck, p as Search, r as UserX, s as Trash2, t as X, u as ShieldCheck, v as Menu, w as Funnel, x as LoaderCircle, y as MapPin } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as CheckboxIndicator, t as Checkbox$1 } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { a as Label2, c as Root2, d as SubTrigger2, f as Trigger, i as ItemIndicator2, l as Separator2, n as Content2, o as Portal2, r as Item2, s as RadioItem2, t as CheckboxItem2, u as SubContent2 } from "../_libs/@radix-ui/react-dropdown-menu+[...].mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { t as Root } from "../_libs/radix-ui__react-label.mjs";
import { i as Trigger$1, n as List, r as Root2$1, t as Content } from "../_libs/radix-ui__react-tabs.mjs";
import { i as SliderTrack, n as SliderRange, r as SliderThumb, t as Slider$1 } from "../_libs/@radix-ui/react-slider+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-g-o6iZVn.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var globals_default = "/assets/globals-DlV2c2OK.css";
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var Avatar = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar$1, {
	ref,
	className: cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className),
	...props
}));
Avatar.displayName = Avatar$1.displayName;
var AvatarImage = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarImage$1, {
	ref,
	className: cn("aspect-square h-full w-full", className),
	...props
}));
AvatarImage.displayName = AvatarImage$1.displayName;
var AvatarFallback = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback$1, {
	ref,
	className: cn("flex h-full w-full items-center justify-center rounded-full bg-muted", className),
	...props
}));
AvatarFallback.displayName = AvatarFallback$1.displayName;
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
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn(labelVariants(), className),
	...props
}));
Label.displayName = Root.displayName;
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
var API_BASE_URL = "http://localhost:8089";
function getSession() {
	if (typeof window === "undefined") return null;
	const raw = localStorage.getItem("campus-crate-session");
	if (!raw) return null;
	try {
		const session = JSON.parse(raw);
		return session?.token ? session : null;
	} catch {
		localStorage.removeItem("campus-crate-session");
		return null;
	}
}
function saveSession(session) {
	localStorage.setItem("campus-crate-session", JSON.stringify(session));
	window.dispatchEvent(new Event("campus-crate-auth-change"));
}
function clearSession() {
	if (typeof window === "undefined") return;
	localStorage.removeItem("campus-crate-session");
	window.dispatchEvent(new Event("campus-crate-auth-change"));
}
async function api(path, options = {}) {
	const session = getSession();
	let response;
	try {
		response = await fetch(`${API_BASE_URL}${path}`, {
			...options,
			headers: {
				...options.body instanceof FormData ? {} : { "Content-Type": "application/json" },
				...session?.token ? { Authorization: `Bearer ${session.token}` } : {},
				...options.headers
			}
		});
	} catch {
		throw new Error("Cannot reach the server. Check that the backend is running and try again.");
	}
	if (response.status === 204) return null;
	const data = await response.json().catch(() => null);
	if (!response.ok) {
		if (response.status === 401) {
			clearSession();
			throw new Error("Your session has expired. Please sign in again.");
		}
		if (response.status === 403) throw new Error(data?.message ?? "You do not have permission to do that.");
		throw new Error(data?.message ?? "Request failed. Please try again.");
	}
	return data;
}
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
	const isAdmin = session?.role === "ADMIN" || Boolean(user.adminId);
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
						!isAdmin && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							className: "hidden sm:inline-flex",
							onClick: () => requireLogin(() => setCreateOpen(true)),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {}), "Create Post"]
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
										children: isAdmin ? "Administrator" : user.email || "Signed-in student"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
								isAdmin ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/admin",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {}), "Admin dashboard"]
									})
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
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
									})
								] }),
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
			}, link.to)), !isAdmin && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
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
function AppLayout() {
	(0, import_react.useEffect)(() => {
		const validateSession = () => {
			if (!getSession()) return;
			api("/api/session").catch(() => {
				clearSession();
				window.location.assign("/");
			});
		};
		validateSession();
		const timer = window.setInterval(validateSession, 2e3);
		return () => window.clearInterval(timer);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {})
	] });
}
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
var rootRoute = createRootRouteWithContext()({
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
				href: globals_default
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
	const { queryClient } = rootRoute.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppLayout, {})
	});
}
var moduleLabel = {
	lost: "Lost & Found",
	market: "Marketplace",
	"to-let": "To-let"
};
var listingPrefixes = {
	lost: "LF",
	market: "MP",
	"to-let": "TL"
};
function getListingReference(listingId) {
	const match = /^(lost|market|to-let)-(\d+)$/.exec(String(listingId));
	if (!match) return String(listingId);
	const [, module, numericId] = match;
	return `${listingPrefixes[module]}-${numericId.padStart(6, "0")}`;
}
function ListingImage({ listing }) {
	if (listing.imageUrl) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: listing.imageUrl,
		alt: listing.title,
		className: "h-full w-full object-cover",
		loading: "lazy"
	});
	const Icon = listing.module === "to-let" ? Building2 : listing.module === "market" ? ShoppingBag : ImageOff;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex h-full w-full items-center justify-center bg-surface-subtle text-primary",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
			className: "size-12",
			"aria-label": "No image provided"
		})
	});
}
function ListingCard({ listing, compact = false }) {
	const found = listing.status === "FOUND";
	const referenceId = getListingReference(listing.id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/listing/$id",
		params: { id: String(listing.id) },
		className: "group block overflow-hidden rounded-xl border border-border bg-card shadow-soft transition duration-300 hover:-translate-y-0.5 hover:shadow-card",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative aspect-video",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListingImage, { listing }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("absolute left-3 top-3 rounded-full px-2.5 py-1 text-[11px] font-bold tracking-wide", listing.module === "lost" ? found ? "bg-success-soft text-success" : "bg-danger-soft text-danger" : "bg-card/95 text-foreground shadow-sm"),
				children: listing.status
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-2 flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full bg-accent px-2 py-1 text-[11px] font-semibold text-accent-foreground",
						children: listing.tag
					}), (listing.module === "market" || listing.module === "to-let") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs text-muted-foreground",
						children: listing.meta
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "line-clamp-1 font-display text-base font-semibold text-card-foreground",
					children: listing.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground",
					children: ["Item ID: ", referenceId]
				}),
				listing.module === "market" || listing.module === "to-let" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-lg font-bold text-primary",
						children: listing.detail
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-1 text-xs text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, { className: "size-3.5" }), listing.owner]
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 space-y-1.5 text-sm text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4 text-primary" }), listing.detail]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "size-4" }), listing.meta]
					})]
				}),
				!compact && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: cn(buttonVariants({ variant: listing.module === "lost" ? "outline" : "default" }), "mt-4 w-full"),
					children: [listing.module === "lost" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {}), listing.module === "lost" ? "Contact" : "View details"]
				})
			]
		})]
	});
}
var Tabs = Root2$1;
var TabsList = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
	ref,
	className: cn("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground", className),
	...props
}));
TabsList.displayName = List.displayName;
var TabsTrigger = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trigger$1, {
	ref,
	className: cn("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow", className),
	...props
}));
TabsTrigger.displayName = Trigger$1.displayName;
var TabsContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {
	ref,
	className: cn("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className),
	...props
}));
TabsContent.displayName = Content.displayName;
var Route$23 = createFileRoute("/")({ component: HomePage });
var features = [
	{
		title: "Lost & Found",
		copy: "Lost something? Found something? Help it find its way home.",
		action: "Browse Lost & Found",
		to: "/lost-and-found",
		icon: Search,
		tone: "feature-white"
	},
	{
		title: "Campus Marketplace",
		copy: "Buy smart, sell easily, and give useful things a second life.",
		action: "Explore Marketplace",
		to: "/marketplace",
		icon: ShoppingBag,
		tone: "feature-white"
	},
	{
		title: "To-let Service",
		copy: "Find rooms and apartments near campus, or share an available place.",
		action: "Browse To-let",
		to: "/to-let",
		icon: Building2,
		tone: "feature-green"
	}
];
function HomePage() {
	const [tab, setTab] = (0, import_react.useState)("all");
	const [listings, setListings] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		let active = true;
		const loadHighlights = () => api("/api/highlights/recent?limit=12").then((highlights) => active && setListings(highlights.map((highlight) => ({
			id: highlight.highlightId,
			module: highlight.module,
			title: highlight.title,
			detail: highlight.module === "to-let" ? `৳${Number(highlight.price).toLocaleString()}/mo` : highlight.price ? `৳${Number(highlight.price).toLocaleString()}` : highlight.categoryOrArea,
			meta: highlight.createdAt ?? "Recently",
			tag: highlight.categoryOrArea,
			status: highlight.status,
			imageUrl: highlight.imageUrl
		})))).catch(() => active && setListings([])).finally(() => active && setLoading(false));
		loadHighlights();
		const timer = window.setInterval(loadHighlights, 2e3);
		return () => {
			active = false;
			window.clearInterval(timer);
		};
	}, []);
	const visible = listings.filter((item) => tab === "all" || item.module === tab).slice(0, 8);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "hero-grid border-b border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-shell grid min-h-[410px] items-center gap-10 py-14 lg:grid-cols-[1.2fr_.8fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-3xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-soft px-3 py-1.5 text-xs font-semibold text-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-3.5" }), "Built for students, By student"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "font-display1 text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "Everything your campus life needs," }),
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-primary",
									children: "in one place."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg",
							children: "Find what you've lost, get a great deal, or find a student-friendly place to live."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-7 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "lg",
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/marketplace",
									children: ["Explore Campus Crate", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "lg",
								variant: "outline",
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/to-let",
									children: "Find a place"
								})
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden lg:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto aspect-square max-w-[330px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-5 rotate-6 rounded-[2rem] border border-primary/15 bg-primary-soft" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-10 -rotate-3 rounded-[2rem] border border-border bg-card shadow-card",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex h-full flex-col items-center justify-center p-10 text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "flex size-20 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-brand",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-10" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-6 font-display text-2xl font-bold",
										children: "A safer campus circle"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm leading-relaxed text-muted-foreground",
										children: "Student-first listings from the people and places around you."
									})
								]
							})
						})]
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-shell py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "ONE COMMUNITY. THREE ESSENTIALS."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-3xl font-bold",
					children: "What do you need today?"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-5 md:grid-cols-3",
				children: features.map((feature) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: `rounded-xl border border-border p-6 shadow-soft ${feature.tone}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex size-11 items-center justify-center rounded-xl bg-card text-primary shadow-sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(feature.icon, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-8 font-display text-xl font-bold",
							children: feature.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 min-h-12 text-sm leading-relaxed text-muted-foreground dark:text-white/80",
							children: feature.copy
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "mt-6 w-full justify-between",
							variant: "outline",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: feature.to,
								children: [feature.action, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
							})
						})
					]
				}, feature.title))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-surface-subtle",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-shell py-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "FRESH FROM THE COMMUNITY"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-display text-3xl font-bold",
							children: "Recent highlights"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: "Live posts from the Campus Crate community."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tabs, {
						value: tab,
						onValueChange: setTab,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
								value: "all",
								children: "All"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
								value: "lost",
								children: "Lost & Found"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
								value: "market",
								children: "Marketplace"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
								value: "to-let",
								children: "To-let"
							})
						] })
					})]
				}), loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex justify-center py-16",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "animate-spin text-primary" })
				}) : visible.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
					children: visible.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListingCard, {
						listing: item,
						compact: true
					}, item.id))
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-xl border border-dashed border-border py-16 text-center text-muted-foreground",
					children: "No live posts yet."
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
			className: "container-shell flex flex-col gap-4 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 font-display font-bold text-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/campus-crate-logo.png",
					alt: "",
					className: "size-7 object-contain"
				}), "Campus Crate"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Made for campus life. Be kind, meet safely, and look out for each other." })]
		})
	] });
}
var Route$22 = Route$23;
var Route$21 = createFileRoute("/admin")({ component: AdminPage });
var postModules = [
	{
		key: "lost",
		title: "Lost & Found",
		endpoint: "/api/admin/items",
		adminEndpoint: "/api/admin/items",
		id: "itemId",
		statuses: [
			"LOST",
			"FOUND",
			"RETURNED",
			"RESOLVED"
		]
	},
	{
		key: "market",
		title: "Marketplace",
		endpoint: "/api/admin/marketplace/posts",
		adminEndpoint: "/api/admin/marketplace/posts",
		id: "postId",
		statuses: [
			"ACTIVE",
			"SOLD",
			"CANCELLED"
		]
	},
	{
		key: "toLet",
		title: "To-let",
		endpoint: "/api/admin/to-let/listings",
		adminEndpoint: "/api/admin/to-let/listings",
		id: "listingId",
		statuses: [
			"AVAILABLE",
			"RENTED",
			"CLOSED"
		]
	}
];
function AdminPage() {
	const navigate = useNavigate();
	const session = getSession();
	const admin = session?.user;
	const isAdmin = session?.role === "ADMIN" || Boolean(admin?.adminId);
	const [profile, setProfile] = (0, import_react.useState)(null);
	const [users, setUsers] = (0, import_react.useState)([]);
	const [posts, setPosts] = (0, import_react.useState)({
		lost: [],
		market: [],
		toLet: []
	});
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [updating, setUpdating] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		if (!isAdmin || !admin?.adminId) {
			navigate({
				to: "/",
				replace: true
			});
			return;
		}
		Promise.all([
			api(`/api/admin/${admin.adminId}`),
			api("/api/admin/users"),
			...postModules.map((module) => api(module.endpoint))
		]).then(([adminProfile, userList, ...postLists]) => {
			setProfile(adminProfile);
			setUsers(userList);
			setPosts(Object.fromEntries(postModules.map((module, index) => [module.key, postLists[index]])));
		}).catch((error) => toast.error(error.message)).finally(() => setLoading(false));
	}, [
		admin?.adminId,
		isAdmin,
		navigate
	]);
	const setSuspended = (user, suspended) => {
		setUpdating(`user-${user.userId}`);
		api(`/api/admin/users/${user.userId}/suspension`, {
			method: "PUT",
			body: JSON.stringify({ suspended })
		}).then((updated) => {
			setUsers((current) => current.map((item) => item.userId === updated.userId ? updated : item));
			toast.success(`${updated.name} has been ${suspended ? "suspended" : "reactivated"}.`);
		}).catch((error) => toast.error(error.message)).finally(() => setUpdating(""));
	};
	const setStatus = (module, post, status) => {
		const postId = post[module.id];
		setUpdating(`${module.key}-${postId}`);
		api(`${module.adminEndpoint}/${postId}/status`, {
			method: "PUT",
			body: JSON.stringify({ status })
		}).then((updated) => {
			setPosts((current) => ({
				...current,
				[module.key]: current[module.key].map((item) => item[module.id] === postId ? updated : item)
			}));
			toast.success(`${module.title} post marked ${status.toLowerCase()}.`);
		}).catch((error) => toast.error(error.message)).finally(() => setUpdating(""));
	};
	const deletePost = (module, post) => {
		const postId = post[module.id];
		if (!window.confirm(`Delete this ${module.title} post? This cannot be undone.`)) return;
		setUpdating(`${module.key}-${postId}`);
		api(`${module.adminEndpoint}/${postId}`, { method: "DELETE" }).then(() => {
			setPosts((current) => ({
				...current,
				[module.key]: current[module.key].filter((item) => item[module.id] !== postId)
			}));
			toast.success(`${module.title} post deleted.`);
		}).catch((error) => toast.error(error.message)).finally(() => setUpdating(""));
	};
	const deleteUser = (user) => {
		if (!window.confirm(`Delete ${user.name}'s account and all of their posts? This cannot be undone.`)) return;
		setUpdating(`user-${user.userId}`);
		api(`/api/admin/users/${user.userId}`, { method: "DELETE" }).then(() => {
			setUsers((current) => current.filter((item) => item.userId !== user.userId));
			toast.success(`${user.name}'s account was deleted.`);
		}).catch((error) => toast.error(error.message)).finally(() => setUpdating(""));
	};
	if (!isAdmin) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "container-shell py-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "flex flex-col justify-between gap-5 border-b border-border pb-8 sm:flex-row sm:items-end",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "ADMINISTRATION"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 font-display text-3xl font-bold",
					children: "Admin dashboard"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-muted-foreground",
					children: "Manage your profile, student accounts, and community posts."
				})
			] }), profile && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl border border-border bg-card px-4 py-3 text-sm shadow-soft",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "flex items-center gap-1.5 font-semibold",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-4 text-success" }), profile.name]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-muted-foreground",
					children: [
						profile.email,
						" · ",
						profile.phone
					]
				})]
			})]
		}), loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex justify-center py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "animate-spin text-primary" })
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "py-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-5 flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl font-semibold",
					children: "Student accounts"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "Suspension immediately blocks sign-in and posting."
				})] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden rounded-xl border border-border bg-card",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-x-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full min-w-[720px] text-left text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
							className: "border-b border-border bg-surface-subtle text-muted-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-5 py-3 font-semibold",
									children: "Student"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-5 py-3 font-semibold",
									children: "Email"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-5 py-3 font-semibold",
									children: "Phone"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-5 py-3 font-semibold",
									children: "Status"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-5 py-3 text-right font-semibold",
									children: "Action"
								})
							] })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [users.map((user) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-b border-border last:border-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
									className: "px-5 py-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-semibold",
										children: user.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: user.studentId
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-5 py-4",
									children: user.email
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-5 py-4",
									children: user.phone
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-5 py-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: user.suspended ? "SUSPENDED" : user.emailVerified ? "ACTIVE" : "UNVERIFIED" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-5 py-4 text-right",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-end gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											size: "sm",
											variant: user.suspended ? "outline" : "destructive",
											disabled: updating === `user-${user.userId}`,
											onClick: () => setSuspended(user, !user.suspended),
											children: [updating === `user-${user.userId}` ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "animate-spin" }) : user.suspended ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserCheck, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserX, {}), user.suspended ? "Reactivate" : "Suspend"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											size: "sm",
											variant: "destructive",
											disabled: updating === `user-${user.userId}`,
											onClick: () => deleteUser(user),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {}), "Delete"]
										})]
									})
								})
							]
						}, user.userId)), users.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							colSpan: "5",
							className: "px-5 py-16 text-center text-muted-foreground",
							children: "No student accounts found."
						}) })] })]
					})
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "border-t border-border py-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-5 flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClipboardList, { className: "text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl font-semibold",
					children: "Post management"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "Update the status of any community post."
				})] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 xl:grid-cols-3",
				children: postModules.map((module) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PostPanel, {
					module,
					posts: posts[module.key],
					updating,
					onStatusChange: setStatus,
					onDelete: deletePost
				}, module.key))
			})]
		})] })]
	});
}
function PostPanel({ module, posts, updating, onStatusChange, onDelete }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "overflow-hidden rounded-xl border border-border bg-card",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border-b border-border bg-surface-subtle px-4 py-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display font-semibold",
				children: module.title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs text-muted-foreground",
				children: [
					posts.length,
					" post",
					posts.length === 1 ? "" : "s"
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-h-[440px] divide-y divide-border overflow-y-auto",
			children: [posts.map((post) => {
				const postId = post[module.id];
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "line-clamp-1 font-semibold",
							children: post.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-muted-foreground",
							children: module.key === "toLet" ? post.area : module.key === "market" ? post.condition : post.itemType
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: post.status }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
									value: post.status,
									disabled: updating === `${module.key}-${postId}`,
									onChange: (event) => onStatusChange(module, post, event.target.value),
									className: "h-8 flex-1 rounded-md border border-input bg-background px-2 text-xs",
									children: module.statuses.map((status) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: status,
										children: status
									}, status))
								}),
								updating === `${module.key}-${postId}` && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin text-primary" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "icon",
									variant: "destructive",
									"aria-label": `Delete ${module.title} post`,
									disabled: updating === `${module.key}-${postId}`,
									onClick: () => onDelete(module, post),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {})
								})
							]
						})
					]
				}, postId);
			}), posts.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "p-8 text-center text-sm text-muted-foreground",
				children: "No posts found."
			})]
		})]
	});
}
function StatusBadge({ status }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: status === "SUSPENDED" || status === "CANCELLED" ? "rounded-full bg-danger-soft px-2 py-1 text-xs font-semibold text-danger" : status === "SOLD" || status === "RETURNED" || status === "RENTED" || status === "RESOLVED" ? "rounded-full bg-success-soft px-2 py-1 text-xs font-semibold text-success" : "rounded-full bg-primary-soft px-2 py-1 text-xs font-semibold text-primary",
		children: status
	});
}
var Route$20 = Route$21;
/** Prevents protected page content from rendering for signed-out visitors. */
function RequireAuth({ children }) {
	const navigate = useNavigate();
	const session = getSession();
	(0, import_react.useEffect)(() => {
		if (!session) navigate({
			to: "/login",
			replace: true
		});
	}, [navigate, session]);
	if (!session) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "container-shell py-16 text-center text-muted-foreground",
		children: "Redirecting to sign in…"
	});
	return children;
}
var Route$19 = createFileRoute("/edit-profile")({ component: EditProfileRoute });
function EditProfileRoute() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RequireAuth, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditProfilePage, {}) });
}
function EditProfilePage() {
	const navigate = useNavigate();
	const fileInput = (0, import_react.useRef)(null);
	const session = getSession();
	const userId = session?.user?.userId;
	const [profile, setProfile] = (0, import_react.useState)(session?.user ?? null);
	const [name, setName] = (0, import_react.useState)(session?.user?.name ?? "");
	const [phone, setPhone] = (0, import_react.useState)(session?.user?.phone ?? "");
	const [photoFile, setPhotoFile] = (0, import_react.useState)(null);
	const [photoPreview, setPhotoPreview] = (0, import_react.useState)(session?.user?.profileImgUrl ?? "");
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [saving, setSaving] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!userId) return;
		api(`/api/users/${userId}`).then((user) => {
			setProfile(user);
			setName(user.name);
			setPhone(user.phone);
			setPhotoPreview(user.profileImgUrl ?? "");
		}).catch((error) => toast.error(error.message)).finally(() => setLoading(false));
	}, [userId]);
	const selectPhoto = (event) => {
		const selected = event.target.files?.[0];
		if (!selected) return;
		setPhotoFile(selected);
		setPhotoPreview(URL.createObjectURL(selected));
	};
	const save = async (event) => {
		event.preventDefault();
		if (name.trim().length < 2 || phone.replace(/\D/g, "").length < 7) {
			toast.error("Enter your name and a valid phone number.");
			return;
		}
		setSaving(true);
		try {
			let profileImgUrl = profile?.profileImgUrl ?? null;
			if (photoFile) {
				const body = new FormData();
				body.append("file", photoFile);
				profileImgUrl = (await api("/api/uploads/images", {
					method: "POST",
					body
				})).imageUrl;
			}
			const updated = await api(`/api/users/${userId}`, {
				method: "PUT",
				body: JSON.stringify({
					name: name.trim(),
					phone: phone.trim(),
					profileImgUrl
				})
			});
			saveSession({
				...session,
				user: updated
			});
			toast.success("Profile updated.");
			navigate({ to: "/my-listings" });
		} catch (error) {
			toast.error(error.message);
		} finally {
			setSaving(false);
		}
	};
	const initials = (name || profile?.studentId || "?").split(/\s+/).map((part) => part[0]).join("").slice(0, 2).toUpperCase();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "container-shell max-w-3xl py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/my-listings",
				className: "inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), "Back to my listings"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-4 font-display text-3xl font-bold",
				children: "Edit profile"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1.5 text-muted-foreground",
				children: "Keep your account name, phone number, and photo current."
			}),
			loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex justify-center py-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "animate-spin" })
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "mt-8 space-y-8",
				onSubmit: save,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-5 rounded-xl border border-border bg-card p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex size-20 items-center justify-center overflow-hidden rounded-full bg-primary text-xl font-bold text-primary-foreground",
								children: photoPreview ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: photoPreview,
									alt: "Profile",
									className: "size-full object-cover"
								}) : initials
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "absolute -bottom-1 -right-1 flex size-8 cursor-pointer items-center justify-center rounded-full border border-border bg-background shadow-soft",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, { className: "size-4" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "sr-only",
										children: "Upload profile photo"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										ref: fileInput,
										type: "file",
										accept: "image/jpeg,image/png,image/webp,image/gif",
										className: "hidden",
										onChange: selectPhoto
									})
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "flex items-center gap-1.5 text-sm font-semibold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-4 text-success" }), profile?.emailVerified ? "Verified Student" : "Email verification pending"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: "JPEG, PNG, WebP, or GIF up to 10 MB."
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-5 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "name",
									children: "Full name"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "name",
									value: name,
									onChange: (event) => setName(event.target.value),
									required: true
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "email",
										children: "Email"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "email",
										value: profile?.email ?? "",
										readOnly: true,
										disabled: true
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: "Email is set when the account is created."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "phone",
									children: "Phone"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "phone",
									value: phone,
									onChange: (event) => setPhone(event.target.value),
									required: true
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "student-id",
									children: "Student ID"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "student-id",
									value: profile?.studentId ?? "",
									readOnly: true,
									disabled: true
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "submit",
							disabled: saving,
							children: [saving && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "animate-spin" }), "Save changes"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "outline",
							onClick: () => navigate({ to: "/my-listings" }),
							children: "Cancel"
						})]
					})
				]
			})
		]
	});
}
var Route$18 = Route$19;
var Route$17 = createFileRoute("/login")({ component: LoginPage });
function LoginPage() {
	const navigate = useNavigate();
	const [values, setValues] = (0, import_react.useState)({
		identifier: "",
		password: ""
	});
	const [errors, setErrors] = (0, import_react.useState)({});
	const [loading, setLoading] = (0, import_react.useState)(false);
	const submit = (event) => {
		event.preventDefault();
		const next = {};
		if (!values.identifier.trim()) next.identifier = "Enter your student ID or admin email.";
		if (values.password.length < 8) next["password"] = "Password must be at least 8 characters.";
		setErrors(next);
		if (Object.keys(next).length) return;
		setLoading(true);
		const identifier = values.identifier.trim();
		const isAdminLogin = identifier.includes("@");
		const endpoint = isAdminLogin ? "/api/admin/login" : "/api/users/login";
		const request = isAdminLogin ? {
			email: identifier,
			password: values.password
		} : {
			studentId: identifier,
			password: values.password
		};
		api(endpoint, {
			method: "POST",
			body: JSON.stringify(request)
		}).then((result) => {
			const account = result.user ?? result;
			saveSession({
				token: result.accessToken,
				role: isAdminLogin ? "ADMIN" : "USER",
				user: account
			});
			toast.success(isAdminLogin ? "Welcome back, administrator" : "Welcome back to Campus Crate");
			navigate({ to: isAdminLogin ? "/admin" : "/my-listings" });
		}).catch((error) => toast.error(error.message)).finally(() => setLoading(false));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "container-shell flex min-h-[calc(100vh-4rem)] items-center justify-center py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-md rounded-xl border border-border bg-card p-7 shadow-soft",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/campus-crate-logo.png",
					alt: "Campus Crate",
					className: "size-11 object-contain"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-5 font-display text-2xl font-bold",
					children: "Welcome back"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1.5 text-sm text-muted-foreground",
					children: "Sign in to manage your campus listings."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "mt-6 space-y-4",
					onSubmit: submit,
					noValidate: true,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "identifier",
									children: "Student ID or admin email"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "identifier",
									autoComplete: "username",
									placeholder: "e.g. 20230001 or admin@example.com",
									value: values.identifier,
									onChange: (e) => setValues({
										...values,
										identifier: e.target.value
									}),
									"aria-invalid": !!errors.identifier
								}),
								errors.identifier && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-medium text-danger",
									children: errors.identifier
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "password",
									children: "Password"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "password",
									type: "password",
									autoComplete: "current-password",
									placeholder: "••••••••",
									value: values.password,
									onChange: (e) => setValues({
										...values,
										password: e.target.value
									}),
									"aria-invalid": !!errors["password"]
								}),
								errors["password"] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-medium text-danger",
									children: errors["password"]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-right text-sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/reset-password",
								className: "font-semibold text-primary hover:underline",
								children: "Forgot password?"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "submit",
							className: "w-full",
							disabled: loading,
							children: [loading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "animate-spin" }), "Sign in"]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-6 text-center text-sm text-muted-foreground",
					children: ["New to Campus Crate? ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/signup",
						className: "font-semibold text-primary hover:underline",
						children: "Create an account"
					})]
				})
			]
		})
	});
}
var Route$16 = Route$17;
var Checkbox = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox$1, {
	ref,
	className: cn("grid place-content-center peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxIndicator, {
		className: cn("grid place-content-center text-current"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" })
	})
}));
Checkbox.displayName = Checkbox$1.displayName;
var Slider = import_react.forwardRef(({ className, value, defaultValue, ...props }, ref) => {
	const thumbCount = Array.isArray(value) ? value.length : Array.isArray(defaultValue) ? defaultValue.length : 1;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Slider$1, {
		ref,
		className: cn("relative flex w-full touch-none select-none items-center", className),
		value,
		defaultValue,
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderTrack, {
			className: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderRange, { className: "absolute h-full bg-primary" })
		}), Array.from({ length: thumbCount }, (_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderThumb, { className: "block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" }, index))]
	});
});
Slider.displayName = Slider$1.displayName;
var config = {
	lost: {
		eyebrow: "RECONNECT WITH WHAT MATTERS",
		title: "Lost & Found",
		copy: "A trusted space to report missing items and return what you've found.",
		icon: Search
	},
	market: {
		eyebrow: "BUY SMART. PASS IT ON.",
		title: "Campus Marketplace",
		copy: "Useful things from students you can trust, right around campus.",
		icon: ShoppingBag
	}
};
function FeedPage({ module }) {
	const [query, setQuery] = (0, import_react.useState)("");
	const [active, setActive] = (0, import_react.useState)([]);
	const [showFilters, setShowFilters] = (0, import_react.useState)(false);
	const [remoteListings, setRemoteListings] = (0, import_react.useState)([]);
	const [loadError, setLoadError] = (0, import_react.useState)("");
	const content = config[module];
	const Icon = content.icon;
	(0, import_react.useEffect)(() => {
		const endpoint = module === "lost" ? "/api/items" : "/api/marketplace/posts";
		setLoadError("");
		api(endpoint).then((data) => setRemoteListings(data.map((item) => module === "lost" ? {
			id: `lost-${item.itemId}`,
			module: "lost",
			title: item.title,
			detail: `Location #${item.locationId}`,
			meta: item.createdAt ?? "Recently",
			tag: item.itemType,
			status: item.status,
			imageUrl: item.imageUrl
		} : {
			id: `market-${item.postId}`,
			module: "market",
			title: item.title,
			detail: item.fixedPrice ? `৳${item.fixedPrice}` : `Starting ৳${item.startingPrice}`,
			meta: item.condition,
			tag: item.sellingType,
			status: item.status,
			owner: `Student #${item.sellerId}`
		}))).catch((error) => {
			setRemoteListings([]);
			setLoadError(error.message);
		});
	}, [module]);
	const base = remoteListings;
	const filtered = (0, import_react.useMemo)(() => base.filter((item) => item.title.toLowerCase().includes(query.toLowerCase()) && (!active.length || active.some((filter) => `${item.status} ${item.tag} ${item.meta}`.toLowerCase().includes(filter.toLowerCase())))), [
		active,
		base,
		query
	]);
	const groups = module === "lost" ? [
		{
			title: "Type",
			options: ["Lost", "Found"]
		},
		{
			title: "Category",
			options: [
				"Electronics",
				"Bags",
				"Keys",
				"Documents"
			]
		},
		{
			title: "Status",
			options: ["Active", "Resolved"]
		}
	] : [
		{
			title: "Category",
			options: [
				"Books",
				"Electronics",
				"Furniture",
				"Cycles"
			]
		},
		{
			title: "Condition",
			options: [
				"New",
				"Like new",
				"Used"
			]
		},
		{
			title: "Listing type",
			options: [
				"Sell",
				"Exchange",
				"Donate"
			]
		}
	];
	const toggle = (value) => setActive((old) => old.includes(value) ? old.filter((item) => item !== value) : [...old, value]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-b border-border bg-surface-subtle",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-shell py-10 sm:py-14",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex max-w-2xl items-start gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mt-1 flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: content.eyebrow
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 font-display text-3xl font-bold sm:text-4xl",
						children: content.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-muted-foreground",
						children: content.copy
					})
				] })]
			})
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-shell py-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-xl font-semibold",
				children: "Browse listings"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted-foreground",
				children: [filtered.length, " community posts"]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex-1 sm:w-72",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-2.5 size-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: query,
						onChange: (e) => setQuery(e.target.value),
						placeholder: `Search ${moduleLabel[module].toLowerCase()}…`,
						className: "pl-9"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					className: "lg:hidden",
					onClick: () => setShowFilters(!showFilters),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, {}), "Filters"]
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-8 lg:grid-cols-[220px_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
				className: `${showFilters ? "block" : "hidden"} lg:block`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-6 lg:sticky lg:top-24",
					children: [
						module !== "lost" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-3 flex justify-between text-sm font-semibold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Price range" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary",
								children: "Any"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
							defaultValue: [20, 80],
							max: 100,
							step: 1
						})] }),
						groups.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
							className: "mb-3 text-sm font-semibold",
							children: group.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-2.5",
							children: group.options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex cursor-pointer items-center gap-2.5 text-sm text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
									checked: active.includes(option),
									onCheckedChange: () => toggle(option)
								}), option]
							}, option))
						})] }, group.title)),
						active.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "ghost",
							size: "sm",
							onClick: () => setActive([]),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {}), "Clear filters"]
						})
					]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: loadError ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl border border-danger/30 bg-danger/5 p-5 text-sm text-danger",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-semibold",
					children: "Listings could not be loaded."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1",
					children: loadError
				})]
			}) : filtered.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-5 sm:grid-cols-2 xl:grid-cols-3",
				children: filtered.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListingCard, { listing: item }, item.id))
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-xl border border-dashed border-border py-20 text-center text-muted-foreground",
				children: "No matching listings found."
			}) })]
		})]
	})] });
}
var Route$15 = createFileRoute("/lost-and-found")({ component: LostAndFoundPage });
function LostAndFoundPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeedPage, { module: "lost" });
}
var Route$14 = Route$15;
var Route$13 = createFileRoute("/marketplace")({ component: MarketplacePage });
function MarketplacePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeedPage, { module: "market" });
}
var Route$12 = Route$13;
var Route$11 = createFileRoute("/my-listings")({ component: MyListingsRoute });
function MyListingsRoute() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RequireAuth, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MyListingsPage, {}) });
}
function MyListingsPage() {
	const user = getSession()?.user;
	const [tab, setTab] = (0, import_react.useState)("all");
	const [posts, setPosts] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [error, setError] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		if (!user?.userId) return;
		Promise.all([
			api("/api/items"),
			api(`/api/marketplace/users/${user.userId}/posts`),
			api(`/api/to-let/listings/owners/${user.userId}`)
		]).then(([items, marketplacePosts, toLetListings]) => setPosts([
			...items.filter((item) => item.reportedBy === user.userId).map((item) => ({
				id: `lost-${item.itemId}`,
				module: "lost",
				title: item.title,
				detail: item.itemType,
				status: item.status,
				createdAt: item.createdAt
			})),
			...marketplacePosts.map((post) => ({
				id: `market-${post.postId}`,
				module: "market",
				title: post.title,
				detail: post.fixedPrice ? `৳${post.fixedPrice}` : `Starting ৳${post.startingPrice}`,
				status: post.status,
				createdAt: post.createdAt
			})),
			...toLetListings.map((listing) => ({
				id: `to-let-${listing.listingId}`,
				module: "to-let",
				title: listing.title,
				detail: `৳${listing.monthlyRent}/month · ${listing.area}`,
				status: listing.status,
				createdAt: listing.createdAt
			}))
		])).catch((requestError) => setError(requestError.message)).finally(() => setLoading(false));
	}, [user?.userId]);
	const visible = (0, import_react.useMemo)(() => posts.filter((post) => tab === "all" || post.module === tab), [posts, tab]);
	const initials = (user?.name || user?.studentId || "Student").split(/\s+/).map((part) => part[0]).join("").slice(0, 2).toUpperCase();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "container-shell py-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "flex flex-col justify-between gap-5 border-b border-border pb-8 sm:flex-row sm:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Avatar, {
					className: "size-16 text-xl font-bold",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarImage, {
						src: user?.profileImgUrl,
						alt: `${user?.name || "Your"} profile`
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, {
						className: "bg-primary text-primary-foreground",
						children: initials
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-2xl font-bold",
						children: user?.name || "My profile"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-1 rounded-full bg-success-soft px-2 py-1 text-xs font-semibold text-success",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-3.5" }), "Verified Student"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted-foreground",
					children: "Your live Campus Crate posts"
				})] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/edit-profile",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PenLine, {}), "Edit profile"]
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "py-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl font-semibold",
					children: "My listings"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "Posts currently saved in your account."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tabs, {
					value: tab,
					onValueChange: setTab,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
							value: "all",
							children: "All"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
							value: "lost",
							children: "Lost & Found"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
							value: "market",
							children: "Marketplace"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
							value: "to-let",
							children: "To-let"
						})
					] })
				})]
			}), loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex justify-center py-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "animate-spin" })
			}) : error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-xl border border-danger/30 bg-danger/5 p-5 text-danger",
				children: error
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "overflow-hidden rounded-xl border border-border bg-card",
				children: [visible.map((post) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "flex flex-wrap items-center justify-between gap-4 border-b border-border p-5 last:border-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-semibold",
								children: post.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-accent px-2 py-0.5 text-[10px] font-bold uppercase text-accent-foreground",
								children: post.status
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: post.detail
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground",
							children: ["Item ID: ", getListingReference(post.id)]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-semibold uppercase tracking-wide text-primary",
						children: post.module === "to-let" ? "To-let" : post.module === "market" ? "Marketplace" : "Lost & Found"
					})]
				}, post.id)), visible.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "py-16 text-center text-muted-foreground",
					children: "No real listings in this category yet."
				})]
			})]
		})]
	});
}
var Route$10 = Route$11;
var Route$9 = createFileRoute("/reset-password")({ component: ResetPasswordPage });
function ResetPasswordPage() {
	const navigate = useNavigate();
	const [step, setStep] = (0, import_react.useState)("request");
	const [email, setEmail] = (0, import_react.useState)("");
	const [code, setCode] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [confirmPassword, setConfirmPassword] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const requestCode = async (event) => {
		event.preventDefault();
		if (!email.trim()) return toast.error("Enter your account email address.");
		setLoading(true);
		try {
			await api("/api/users/password-reset", {
				method: "POST",
				body: JSON.stringify({ email: email.trim() })
			});
			setStep("confirm");
			toast.success("If that email has an account, a reset OTP has been sent.");
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};
	const resetPassword = async (event) => {
		event.preventDefault();
		if (!/^\d{6}$/.test(code)) return toast.error("Enter the six-digit OTP from your email.");
		if (password.length < 8) return toast.error("Your new password must be at least 8 characters.");
		if (password !== confirmPassword) return toast.error("The passwords do not match.");
		setLoading(true);
		try {
			await api("/api/users/password-reset/confirm", {
				method: "POST",
				body: JSON.stringify({
					email: email.trim(),
					code,
					password
				})
			});
			toast.success("Password updated. You can now sign in.");
			navigate({ to: "/login" });
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "container-shell flex min-h-[calc(100vh-4rem)] items-center justify-center py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-md rounded-xl border border-border bg-card p-7 shadow-soft",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/campus-crate-logo.png",
					alt: "Campus Crate",
					className: "size-11 object-contain"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-5 font-display text-2xl font-bold",
					children: "Reset your password"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1.5 text-sm text-muted-foreground",
					children: step === "request" ? "We will send a six-digit OTP to your registered email." : `Enter the OTP sent to ${email}.`
				}),
				step === "request" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "mt-6 space-y-4",
					onSubmit: requestCode,
					noValidate: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "reset-email",
							children: "Account email"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "reset-email",
							type: "email",
							autoComplete: "email",
							placeholder: "you@example.com",
							value: email,
							onChange: (event) => setEmail(event.target.value),
							required: true
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						type: "submit",
						className: "w-full",
						disabled: loading,
						children: [loading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "animate-spin" }), "Send OTP"]
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "mt-6 space-y-4",
					onSubmit: resetPassword,
					noValidate: true,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "reset-code",
								children: "Email OTP"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "reset-code",
								inputMode: "numeric",
								autoComplete: "one-time-code",
								maxLength: 6,
								placeholder: "123456",
								value: code,
								onChange: (event) => setCode(event.target.value.replace(/\D/g, "")),
								required: true
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "new-password",
								children: "New password"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "new-password",
								type: "password",
								autoComplete: "new-password",
								value: password,
								onChange: (event) => setPassword(event.target.value),
								required: true
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "confirm-password",
								children: "Confirm new password"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "confirm-password",
								type: "password",
								autoComplete: "new-password",
								value: confirmPassword,
								onChange: (event) => setConfirmPassword(event.target.value),
								required: true
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "submit",
							className: "w-full",
							disabled: loading,
							children: [loading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "animate-spin" }), "Update password"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "ghost",
							className: "w-full",
							disabled: loading,
							onClick: () => setStep("request"),
							children: "Use another email"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-center text-sm text-muted-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/login",
						className: "font-semibold text-primary hover:underline",
						children: "Back to sign in"
					})
				})
			]
		})
	});
}
var Route$8 = Route$9;
var Route$7 = createFileRoute("/signup")({ component: SignupPage });
function SignupPage() {
	const navigate = useNavigate();
	const [values, setValues] = (0, import_react.useState)({
		name: "",
		studentId: "",
		email: "",
		phone: "",
		password: "",
		confirm: ""
	});
	const [agreed, setAgreed] = (0, import_react.useState)(false);
	const [errors, setErrors] = (0, import_react.useState)({});
	const [loading, setLoading] = (0, import_react.useState)(false);
	const submit = (event) => {
		event.preventDefault();
		const next = {};
		if (values.name.trim().length < 2) next["name"] = "Please enter your full name.";
		if (!values.studentId.trim()) next["studentId"] = "Student ID is required.";
		if (!/^[^\s@]+@[^\s@]+\.uiu\.ac\.bd$/i.test(values.email.trim())) next.email = "Use your UIU email ending in .uiu.ac.bd.";
		if (values.phone.replace(/\D/g, "").length < 7) next["phone"] = "Enter a valid phone number.";
		if (values.password.length < 8) next["password"] = "Use at least 8 characters.";
		if (values.confirm !== values.password) next["confirm"] = "Passwords do not match.";
		if (!agreed) next["agreed"] = "Please accept the community guidelines.";
		setErrors(next);
		if (Object.keys(next).length) return;
		setLoading(true);
		const { confirm, ...request } = values;
		api("/api/users/register", {
			method: "POST",
			body: JSON.stringify(request)
		}).then((user) => {
			saveSession({ user });
			toast.success("We sent a verification code to your email.");
			navigate({
				to: "/verify-email",
				search: { email: values.email }
			});
		}).catch((error) => toast.error(error.message)).finally(() => setLoading(false));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "container-shell flex min-h-[calc(100vh-4rem)] items-center justify-center py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-md rounded-xl border border-border bg-card p-7 shadow-soft",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/campus-crate-logo.png",
					alt: "Campus Crate",
					className: "size-11 object-contain"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-5 font-display text-2xl font-bold",
					children: "Create your account"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1.5 text-sm text-muted-foreground",
					children: "Verified UIU students only — use an email ending in .uiu.ac.bd."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "mt-6 space-y-4",
					onSubmit: submit,
					noValidate: true,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "name",
									children: "Full name"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "name",
									value: values.name,
									onChange: (e) => setValues({
										...values,
										name: e.target.value
									}),
									placeholder: "Your full name",
									"aria-invalid": !!errors["name"]
								}),
								errors["name"] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-medium text-danger",
									children: errors["name"]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "studentId",
									children: "Student ID"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "studentId",
									value: values.studentId,
									onChange: (e) => setValues({
										...values,
										studentId: e.target.value
									}),
									placeholder: "e.g. 20230001",
									"aria-invalid": !!errors["studentId"]
								}),
								errors["studentId"] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-medium text-danger",
									children: errors["studentId"]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "email",
									children: "UIU email address"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "email",
									type: "email",
									value: values.email,
									onChange: (e) => setValues({
										...values,
										email: e.target.value
									}),
									placeholder: "name@bscse.uiu.ac.bd",
									"aria-invalid": !!errors.email
								}),
								errors.email && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-medium text-danger",
									children: errors.email
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "phone",
									children: "Phone number"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "phone",
									value: values.phone,
									onChange: (e) => setValues({
										...values,
										phone: e.target.value
									}),
									placeholder: "+880 1XXXXXXXXX",
									"aria-invalid": !!errors["phone"]
								}),
								errors["phone"] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-medium text-danger",
									children: errors["phone"]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "password",
										children: "Password"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "password",
										type: "password",
										value: values.password,
										onChange: (e) => setValues({
											...values,
											password: e.target.value
										}),
										placeholder: "••••••••",
										"aria-invalid": !!errors["password"]
									}),
									errors["password"] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-medium text-danger",
										children: errors["password"]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "confirm",
										children: "Confirm password"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "confirm",
										type: "password",
										value: values.confirm,
										onChange: (e) => setValues({
											...values,
											confirm: e.target.value
										}),
										placeholder: "••••••••",
										"aria-invalid": !!errors["confirm"]
									}),
									errors["confirm"] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-medium text-danger",
										children: errors["confirm"]
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "flex items-start gap-2.5 text-sm text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
								checked: agreed,
								onCheckedChange: (v) => setAgreed(!!v),
								className: "mt-0.5"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "I agree to the Campus Crate community guidelines." })]
						}),
						errors["agreed"] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium text-danger",
							children: errors["agreed"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "submit",
							className: "w-full",
							disabled: loading,
							children: [loading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "animate-spin" }), "Create account"]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-6 text-center text-sm text-muted-foreground",
					children: ["Already have an account? ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/login",
						className: "font-semibold text-primary hover:underline",
						children: "Sign in"
					})]
				})
			]
		})
	});
}
var Route$6 = Route$7;
var Route$5 = createFileRoute("/to-let")({ component: ToLetPage });
var emptyForm = {
	title: "",
	description: "",
	area: "",
	monthlyRent: "",
	bedrooms: "1",
	bathrooms: "1",
	contactPhone: "",
	availableFrom: ""
};
var MAX_RENT = 1e5;
function ToLetPage() {
	const navigate = useNavigate();
	const photoInputRef = (0, import_react.useRef)(null);
	const userId = getSession()?.user?.userId;
	const [listings, setListings] = (0, import_react.useState)([]);
	const [query, setQuery] = (0, import_react.useState)("");
	const [area, setArea] = (0, import_react.useState)("");
	const [maxRent, setMaxRent] = (0, import_react.useState)(MAX_RENT);
	const [bedrooms, setBedrooms] = (0, import_react.useState)([]);
	const [showFilters, setShowFilters] = (0, import_react.useState)(false);
	const [showForm, setShowForm] = (0, import_react.useState)(false);
	const [form, setForm] = (0, import_react.useState)(emptyForm);
	const [photos, setPhotos] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [loadError, setLoadError] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		api("/api/to-let/listings").then(setListings).catch((error) => {
			setListings([]);
			setLoadError(error.message);
		}).finally(() => setLoading(false));
	}, []);
	(0, import_react.useEffect)(() => {
		if (sessionStorage.getItem("campus-crate-open-to-let-form") !== "true") return;
		sessionStorage.removeItem("campus-crate-open-to-let-form");
		setShowForm(true);
	}, []);
	const filtered = (0, import_react.useMemo)(() => {
		const needle = query.trim().toLowerCase();
		const selectedBedrooms = bedrooms.map(Number);
		return listings.filter((listing) => {
			const matchesQuery = !needle || [
				listing.title,
				listing.description,
				listing.area
			].some((value) => value?.toLowerCase().includes(needle));
			const matchesArea = !area.trim() || listing.area?.toLowerCase().includes(area.trim().toLowerCase());
			const matchesBedroom = !selectedBedrooms.length || selectedBedrooms.some((roomCount) => roomCount === 3 ? listing.bedrooms >= 3 : listing.bedrooms === roomCount);
			return matchesQuery && matchesArea && Number(listing.monthlyRent) <= maxRent && matchesBedroom;
		});
	}, [
		area,
		bedrooms,
		listings,
		maxRent,
		query
	]);
	const toggleBedroom = (value) => setBedrooms((current) => current.includes(value) ? current.filter((item) => item !== value) : [...current, value]);
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
		Promise.all(photos.map(async (photo) => {
			const body = new FormData();
			body.append("file", photo);
			return (await api("/api/uploads/images", {
				method: "POST",
				body
			})).imageUrl;
		})).then((photoUrls) => api("/api/to-let/listings", {
			method: "POST",
			body: JSON.stringify({
				...form,
				ownerId: userId,
				monthlyRent: Number(form.monthlyRent),
				bedrooms: Number(form.bedrooms),
				bathrooms: Number(form.bathrooms),
				availableFrom: form.availableFrom || null,
				photoUrls
			})
		})).then((listing) => {
			setListings((current) => [listing, ...current]);
			setForm(emptyForm);
			setPhotos([]);
			setShowForm(false);
			toast.success("Your to-let listing is live.");
		}).catch((error) => toast.error(error.message));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-b border-border bg-surface-subtle",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-shell py-10 sm:py-14",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex max-w-2xl items-start gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mt-1 flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, {})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "STUDENT HOUSING"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 font-display text-3xl font-bold sm:text-4xl",
						children: "To-let Service"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-muted-foreground",
						children: "Find student-friendly rooms and apartments near campus."
					})
				] })]
			})
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-shell py-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-xl font-semibold",
				children: "Browse listings"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: loading ? "Loading places…" : `${filtered.length} place${filtered.length === 1 ? "" : "s"}`
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex-1 sm:w-72",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-2.5 size-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: query,
						onChange: (event) => setQuery(event.target.value),
						placeholder: "Search to-let…",
						className: "pl-9"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					className: "lg:hidden",
					onClick: () => setShowFilters((visible) => !visible),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, {}), "Filters"]
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-8 lg:grid-cols-[220px_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
				className: `${showFilters ? "block" : "hidden"} lg:block`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-6 lg:sticky lg:top-24",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-3 flex justify-between text-sm font-semibold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Maximum rent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary",
								children: maxRent === MAX_RENT ? "Any" : `৳${maxRent.toLocaleString()}`
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
							value: [maxRent],
							max: MAX_RENT,
							step: 1e3,
							onValueChange: ([value]) => setMaxRent(value)
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "to-let-area",
							className: "mb-3 block text-sm font-semibold",
							children: "Area"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "to-let-area",
							value: area,
							onChange: (event) => setArea(event.target.value),
							placeholder: "e.g. Kuril"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
							className: "mb-3 text-sm font-semibold",
							children: "Bedrooms"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-2.5",
							children: [
								["1", "1 bedroom"],
								["2", "2 bedrooms"],
								["3", "3+ bedrooms"]
							].map(([value, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex cursor-pointer items-center gap-2.5 text-sm text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
									checked: bedrooms.includes(value),
									onCheckedChange: () => toggleBedroom(value)
								}), label]
							}, value))
						})] }),
						(area || maxRent !== MAX_RENT || bedrooms.length > 0) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "ghost",
							size: "sm",
							onClick: clearFilters,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {}), "Clear filters"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							className: "w-full",
							variant: "outline",
							onClick: () => {
								if (!userId) {
									toast.error("Please sign in to post a rental listing.");
									navigate({ to: "/login" });
								} else setShowForm((open) => !open);
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {}), "Post to-let"]
						})
					]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [showForm && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: submit,
				className: "mb-6 grid gap-4 rounded-xl border border-border bg-card p-5 md:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between md:col-span-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-xl font-bold",
							children: "Post a rental listing"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "ghost",
							size: "icon",
							onClick: () => setShowForm(false),
							"aria-label": "Close form",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {})
						})]
					}),
					[
						["title", "Listing title"],
						["area", "Area"],
						["monthlyRent", "Monthly rent"],
						["bedrooms", "Bedrooms"],
						["bathrooms", "Bathrooms"],
						["contactPhone", "Contact phone"],
						["availableFrom", "Available from"]
					].map(([key, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: key,
						children: label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: key,
						required: key !== "availableFrom",
						type: key === "monthlyRent" || key === "bedrooms" || key === "bathrooms" ? "number" : key === "availableFrom" ? "date" : "text",
						min: key === "monthlyRent" ? "1" : key === "bedrooms" || key === "bathrooms" ? "0" : void 0,
						value: form[key],
						onChange: (event) => setForm({
							...form,
							[key]: event.target.value
						})
					})] }, key)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "description",
							children: "Description"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							id: "description",
							required: true,
							value: form.description,
							onChange: (event) => setForm({
								...form,
								description: event.target.value
							}),
							className: "min-h-28 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none",
							placeholder: "Include furnishing, utilities, preferred tenant, and other useful details."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Photos (up to 3)" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								ref: photoInputRef,
								type: "file",
								accept: "image/jpeg,image/png,image/webp,image/gif",
								multiple: true,
								className: "hidden",
								onChange: (event) => {
									const selected = Array.from(event.target.files ?? []);
									if (selected.length + photos.length > 3) {
										toast.error("You can upload a maximum of 3 photos.");
										return;
									}
									setPhotos((current) => [...current, ...selected]);
									event.target.value = "";
								}
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-2 grid grid-cols-3 gap-3",
								children: [photos.map((photo, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative aspect-video overflow-hidden rounded-lg border border-border",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: URL.createObjectURL(photo),
										alt: `Selected photo ${index + 1}`,
										className: "size-full object-cover"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setPhotos((current) => current.filter((_, itemIndex) => itemIndex !== index)),
										className: "absolute right-1 top-1 rounded-full bg-background/90 p-1 text-foreground",
										"aria-label": `Remove photo ${index + 1}`,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3" })
									})]
								}, `${photo.name}-${index}`)), photos.length < 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => photoInputRef.current?.click(),
									className: "flex aspect-video flex-col items-center justify-center rounded-lg border border-dashed border-primary/35 bg-primary-soft text-xs text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePlus, { className: "mb-1 size-5 text-primary" }), "Add photo"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs text-muted-foreground",
								children: "JPEG, PNG, WebP, or GIF. Maximum 3 photos."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-2 flex gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							children: "Publish listing"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "outline",
							onClick: () => setShowForm(false),
							children: "Cancel"
						})]
					})
				]
			}), loadError ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl border border-danger/30 bg-danger/5 p-5 text-sm text-danger",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-semibold",
					children: "Listings could not be loaded."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1",
					children: loadError
				})]
			}) : loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex justify-center py-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "animate-spin text-primary" })
			}) : filtered.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-5 sm:grid-cols-2 xl:grid-cols-3",
				children: filtered.map((listing) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListingCard, { listing: {
					id: `to-let-${listing.listingId}`,
					module: "to-let",
					title: listing.title,
					detail: `৳${Number(listing.monthlyRent).toLocaleString()}/mo`,
					meta: listing.area,
					tag: `${listing.bedrooms} bed · ${listing.bathrooms} bath`,
					status: listing.status,
					owner: `Student #${listing.ownerId}`,
					imageUrl: listing.photoUrls?.[0]
				} }, listing.listingId))
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-xl border border-dashed border-border py-20 text-center text-muted-foreground",
				children: "No rental listings match your filters."
			})] })]
		})]
	})] });
}
var Route$4 = Route$5;
var OTP_LIFETIME_SECONDS = 600;
var Route$3 = createFileRoute("/verify-email")({
	validateSearch: (search) => ({ email: search.email ?? "" }),
	component: VerifyEmailRoutePage
});
function VerifyEmailRoutePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VerifyEmailPage, { initialEmail: Route$3.useSearch().email });
}
var formatTime = (seconds) => `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;
function VerifyEmailPage({ initialEmail = "" }) {
	const navigate = useNavigate();
	const [email, setEmail] = (0, import_react.useState)(initialEmail);
	const [code, setCode] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [resendBusy, setResendBusy] = (0, import_react.useState)(false);
	const [remainingSeconds, setRemainingSeconds] = (0, import_react.useState)(OTP_LIFETIME_SECONDS);
	(0, import_react.useEffect)(() => {
		const timer = window.setInterval(() => setRemainingSeconds((seconds) => Math.max(0, seconds - 1)), 1e3);
		return () => window.clearInterval(timer);
	}, []);
	const verify = (event) => {
		event.preventDefault();
		setBusy(true);
		api("/api/users/verify-email", {
			method: "POST",
			body: JSON.stringify({
				email,
				code
			})
		}).then(() => {
			toast.success("Email verified. You can now sign in.");
			navigate({ to: "/login" });
		}).catch((error) => toast.error(error.message)).finally(() => setBusy(false));
	};
	const resend = () => {
		if (resendBusy) return;
		setResendBusy(true);
		api("/api/users/resend-verification", {
			method: "POST",
			body: JSON.stringify({ email })
		}).then(() => {
			setRemainingSeconds(OTP_LIFETIME_SECONDS);
			setCode("");
			toast.success("A new code has been sent.");
		}).catch((error) => toast.error(error.message)).finally(() => setResendBusy(false));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "container-shell flex min-h-[calc(100vh-4rem)] items-center justify-center py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "w-full max-w-md rounded-xl border bg-card p-7 shadow-soft",
			onSubmit: verify,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-2xl font-bold",
					children: "Verify your email"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Enter the six-digit code sent to your email."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: `mt-3 text-sm font-semibold ${remainingSeconds === 0 ? "text-danger" : "text-primary"}`,
					children: remainingSeconds === 0 ? "Your code has expired. Request a new one." : `Code expires in ${formatTime(remainingSeconds)}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "email",
						children: "Email"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "email",
						type: "email",
						value: email,
						onChange: (event) => setEmail(event.target.value),
						required: true
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "code",
						children: "Verification code"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "code",
						inputMode: "numeric",
						maxLength: 6,
						value: code,
						onChange: (event) => setCode(event.target.value.replace(/\D/g, "")),
						required: true
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "mt-6 w-full",
					disabled: busy || remainingSeconds === 0,
					children: busy ? "Verifying…" : "Verify email"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: "link",
					className: "mt-2 w-full",
					disabled: resendBusy,
					onClick: resend,
					children: resendBusy ? "Sending…" : "Resend code"
				})
			]
		})
	});
}
var Route$2 = Route$3;
var Route$1 = createFileRoute("/listing/$id")({ component: ListingRoutePage });
function ListingRoutePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListingDetailsPage, { id: Route$1.useParams().id });
}
function parseListingId(value) {
	const match = /^(lost|market|to-let)-(\d+)$/.exec(value);
	return match ? {
		module: match[1],
		id: match[2]
	} : null;
}
function endpointFor({ module, id }) {
	if (module === "lost") return `/api/items/${id}`;
	if (module === "market") return `/api/marketplace/posts/${id}`;
	return `/api/to-let/listings/${id}`;
}
function contactEndpoint(listing) {
	return listing.module === "lost" ? "/api/admin/contact" : `/api/users/${listing.ownerId}/contact`;
}
function normalizeListing(module, item) {
	if (module === "lost") return {
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
		owner: `Student #${item.reportedBy}`
	};
	if (module === "market") return {
		module,
		id: `market-${item.postId}`,
		ownerId: item.sellerId,
		title: item.title,
		description: item.description,
		detail: item.fixedPrice ? `৳${Number(item.fixedPrice).toLocaleString()}` : `Starting ৳${Number(item.startingPrice).toLocaleString()}`,
		meta: item.condition,
		tag: item.sellingType,
		status: item.status,
		owner: `Student #${item.sellerId}`
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
		availableFrom: item.availableFrom
	};
}
function ListingDetailsPage({ id }) {
	const navigate = useNavigate();
	const [listing, setListing] = (0, import_react.useState)(null);
	const [error, setError] = (0, import_react.useState)("");
	const [contactOpen, setContactOpen] = (0, import_react.useState)(false);
	const [contact, setContact] = (0, import_react.useState)(null);
	const [contactError, setContactError] = (0, import_react.useState)("");
	const [contactLoading, setContactLoading] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const listingKey = parseListingId(id);
		if (!listingKey) {
			setError("This listing link is invalid.");
			return;
		}
		let active = true;
		api(endpointFor(listingKey)).then(async (item) => {
			const normalized = normalizeListing(listingKey.module, item);
			if (!active) return;
			setListing(normalized);
			if (!getSession()) return;
			try {
				const owner = await api(contactEndpoint(normalized));
				if (active) setListing((current) => current && {
					...current,
					owner: owner.name,
					ownerImageUrl: owner.profileImgUrl ?? owner.profileImageUrl,
					isAdminContact: normalized.module === "lost"
				});
			} catch {}
		}).catch((requestError) => {
			if (active) setError(requestError.message);
		});
		return () => {
			active = false;
		};
	}, [id]);
	if (error) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "container-shell py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-lg rounded-xl border border-danger/30 bg-danger/5 p-6 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-2xl font-bold",
					children: "Listing unavailable"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: error
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "mt-5",
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/marketplace",
						children: "Browse listings"
					})
				})
			]
		})
	});
	if (!listing) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "container-shell flex justify-center py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "animate-spin text-primary" })
	});
	const openContact = () => {
		if (!getSession()) {
			toast.error("Sign in to view contact details.");
			navigate({ to: "/login" });
			return;
		}
		setContactOpen(true);
		setContact(null);
		setContactError("");
		setContactLoading(true);
		api(contactEndpoint(listing)).then(setContact).catch((requestError) => setContactError(requestError.message)).finally(() => setContactLoading(false));
	};
	const backTo = listing.module === "lost" ? "/lost-and-found" : listing.module === "to-let" ? "/to-let" : "/marketplace";
	const moduleLabel = listing.module === "lost" ? "Lost & Found" : listing.module === "to-let" ? "To-let" : "Marketplace";
	const initial = listing.owner.split(" ").map((part) => part[0]).join("").slice(0, 2).toUpperCase();
	const referenceId = getListingReference(listing.id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "container-shell py-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: backTo,
			className: "inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }),
				"Back to ",
				moduleLabel
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-5 grid gap-8 lg:grid-cols-[1.6fr_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-72 overflow-hidden rounded-xl border border-border sm:h-96",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListingImage, { listing })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-accent px-2.5 py-1 text-xs font-semibold text-accent-foreground",
							children: listing.tag
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-primary-soft px-2.5 py-1 text-xs font-bold text-primary",
							children: listing.status
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "rounded-full border border-border px-2.5 py-1 text-xs font-semibold text-muted-foreground",
							children: ["Item ID: ", referenceId]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 font-display text-3xl font-bold sm:text-4xl",
					children: listing.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 font-display text-2xl font-bold text-primary",
					children: listing.detail
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4 text-primary" }), listing.meta]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "size-4" }), listing.availableFrom ? `Available ${(/* @__PURE__ */ new Date(`${listing.availableFrom}T00:00:00`)).toLocaleDateString()}` : "Posted recently"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { className: "size-4 text-primary" }),
								moduleLabel,
								" · ",
								listing.tag
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-8 font-display text-lg font-semibold",
					children: "Description"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-2xl whitespace-pre-wrap leading-relaxed text-muted-foreground",
					children: listing.description
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
				className: "lg:sticky lg:top-24 lg:self-start",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-border bg-card p-5 shadow-soft",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold text-muted-foreground",
							children: listing.module === "market" ? "Seller" : listing.module === "lost" ? "Campus administrator" : "Posted by"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-primary text-sm font-bold text-primary-foreground",
								children: listing.ownerImageUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: listing.ownerImageUrl,
									alt: `${listing.owner}'s profile`,
									className: "size-full object-cover"
								}) : initial
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-semibold",
								children: listing.owner
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "flex items-center gap-1 text-xs text-success",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-3.5" }), listing.isAdminContact ? "Campus administrator" : "Campus community member"]
							})] })]
						}),
						listing.phone && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 flex items-center gap-2 text-sm text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" }), listing.phone]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 grid gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								onClick: openContact,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {}), listing.module === "lost" ? "Contact admin" : "Contact user"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								onClick: () => navigator.clipboard?.writeText(window.location.href).then(() => toast.success("Listing link copied")),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, {}), "Share listing"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-xs text-muted-foreground",
							children: "Meet in public campus spaces and verify details before any payment."
						})
					]
				})
			})]
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: contactOpen,
		onOpenChange: setContactOpen,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "sm:max-w-md",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: listing.module === "lost" ? "Contact Admin" : "Contact User" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Reach out directly about this listing." })] }), contactLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex justify-center py-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "animate-spin text-primary" })
			}) : contactError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "rounded-lg bg-danger/5 p-4 text-sm text-danger",
				children: contactError
			}) : contact && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4 rounded-xl border border-border bg-card p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-lg font-semibold",
						children: contact.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `tel:${contact.phone}`,
						className: "flex items-center gap-2 text-primary hover:underline",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" }), contact.phone]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "w-full",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `tel:${contact.phone}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {}),
								"Call ",
								contact.name
							]
						})
					})
				]
			})]
		})
	})] });
}
var Route = Route$1;
var rootRouteChildren = {
	IndexRoute: Route$22.update({
		id: "/",
		path: "/",
		getParentRoute: () => rootRoute
	}),
	AdminRoute: Route$20.update({
		id: "/admin",
		path: "/admin",
		getParentRoute: () => rootRoute
	}),
	EditProfileRoute: Route$18.update({
		id: "/edit-profile",
		path: "/edit-profile",
		getParentRoute: () => rootRoute
	}),
	LoginRoute: Route$16.update({
		id: "/login",
		path: "/login",
		getParentRoute: () => rootRoute
	}),
	LostAndFoundRoute: Route$14.update({
		id: "/lost-and-found",
		path: "/lost-and-found",
		getParentRoute: () => rootRoute
	}),
	MarketplaceRoute: Route$12.update({
		id: "/marketplace",
		path: "/marketplace",
		getParentRoute: () => rootRoute
	}),
	MyListingsRoute: Route$10.update({
		id: "/my-listings",
		path: "/my-listings",
		getParentRoute: () => rootRoute
	}),
	ResetPasswordRoute: Route$8.update({
		id: "/reset-password",
		path: "/reset-password",
		getParentRoute: () => rootRoute
	}),
	SignupRoute: Route$6.update({
		id: "/signup",
		path: "/signup",
		getParentRoute: () => rootRoute
	}),
	ToLetRoute: Route$4.update({
		id: "/to-let",
		path: "/to-let",
		getParentRoute: () => rootRoute
	}),
	VerifyEmailRoute: Route$2.update({
		id: "/verify-email",
		path: "/verify-email",
		getParentRoute: () => rootRoute
	}),
	ListingIdRoute: Route.update({
		id: "/listing/$id",
		path: "/listing/$id",
		getParentRoute: () => rootRoute
	})
};
var routeTree = rootRoute._addFileChildren(rootRouteChildren);
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
