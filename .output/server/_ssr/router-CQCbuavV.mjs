import { n as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { f as require_jsx_runtime, n as AvatarFallback$1, r as AvatarImage$1, t as Avatar$1 } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { r as cn, t as Button } from "./button-C0l3U_YE.mjs";
import { t as Input } from "./input-Drd4JUO3.mjs";
import { t as Label } from "./label-BsPZHm4o.mjs";
import { t as Textarea } from "./textarea-BAjNaazS.mjs";
import { n as clearSession, r as getSession } from "./api-DJE8ICXP.mjs";
import { _ as useRouter, c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useNavigate, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as Check, C as ImagePlus, E as Circle, O as ChevronRight, P as Box, d as Search, g as Moon, k as ChevronLeft, n as UserRound, o as Sun, p as Plus, r as UserPlus, s as ShoppingBag, t as X, u as Settings, v as Menu, x as LogIn } from "../_libs/lucide-react.mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { t as Route$10 } from "./listing._id-C4LkicDa.mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { a as Label2, c as Root2, d as SubTrigger2, f as Trigger, i as ItemIndicator2, l as Separator2, n as Content2, o as Portal2, r as Item2, s as RadioItem2, t as CheckboxItem2, u as SubContent2 } from "../_libs/@radix-ui/react-dropdown-menu+[...].mjs";
import { t as Route$11 } from "./verify-email-Clh9XnjD.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CQCbuavV.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-BJaOP6UA.css";
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
var options = [{
	id: "lost",
	label: "Lost & Found",
	icon: Search,
	note: "Report something lost or found"
}, {
	id: "market",
	label: "Marketplace",
	icon: ShoppingBag,
	note: "Sell, exchange, or donate"
}];
function CreatePostDialog({ open, onOpenChange }) {
	const navigate = useNavigate();
	const [step, setStep] = (0, import_react.useState)(1);
	const [type, setType] = (0, import_react.useState)("lost");
	const [preview, setPreview] = (0, import_react.useState)();
	const inputRef = (0, import_react.useRef)(null);
	const finish = () => {
		setStep(1);
		setPreview(void 0);
		onOpenChange(false);
	};
	const openChanged = (nextOpen) => {
		if (nextOpen && !getSession()) {
			toast.error("Please sign in before creating a post.");
			navigate({ to: "/login" });
			return;
		}
		onOpenChange(nextOpen);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange: openChanged,
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
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: step === 1 ? "Choose where your post belongs." : step === 2 ? "Give students the useful details." : "Review your category and publish to Campus Crate." })
				] }),
				step === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-3 sm:grid-cols-2",
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
								htmlFor: "title",
								children: "Title"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "title",
								className: "mt-2",
								placeholder: type === "lost" ? "e.g. Lost black earbuds" : "e.g. Scientific calculator"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "amount",
							children: type === "market" ? "Price" : "Location"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "amount",
							className: "mt-2",
							placeholder: type === "lost" ? "Where was it lost or found?" : "৳ 0"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "category",
							children: type === "market" ? "Condition" : "Item category"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							id: "category",
							className: "mt-2 h-9 w-full rounded-md border border-input bg-background px-3 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Select an option" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Like new" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Used" })
							]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "sm:col-span-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "description",
								children: "Description"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								id: "description",
								className: "mt-2 min-h-24",
								placeholder: "Add helpful details for other students…"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "sm:col-span-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Photos" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									ref: inputRef,
									type: "file",
									accept: "image/*",
									className: "hidden",
									onChange: (event) => {
										const file = event.target.files?.[0];
										if (file) setPreview(URL.createObjectURL(file));
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
											children: "Drop photos here or browse"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-1 text-xs",
											children: "PNG or JPG, up to 10 MB"
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
							children: "Your post looks good"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mx-auto mt-2 max-w-sm text-sm text-muted-foreground",
							children: [
								"It will appear in ",
								options.find((o) => o.id === type)?.label,
								" and the latest campus highlights."
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 flex justify-between border-t border-border pt-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "ghost",
						onClick: () => step === 1 ? onOpenChange(false) : setStep(step - 1),
						children: [step === 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {}), step === 1 ? "Cancel" : "Back"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: () => step === 3 ? finish() : setStep(step + 1),
						children: [step === 3 ? "Publish post" : "Continue", step < 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {})]
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
		else if (section === "shuttle") navigate({ to: "/shuttle" });
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
			to: "/shuttle",
			label: "Shuttle Service"
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
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-brand",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, { className: "size-5" })
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
									value: "shuttle",
									children: "Shuttle"
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
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
									className: "size-8",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, { children: signedIn ? initials : "?" })
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
var Route$9 = createRootRouteWithContext()({
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
				href: "/campuscratelogo.svg",
				type: "image/svg+xml"
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
	const { queryClient } = Route$9.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {})
		]
	});
}
var $$splitComponentImporter$8 = () => import("./routes-Dvjxakbw.mjs");
var Route$8 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Campus Crate — Your Campus, Connected" },
		{
			name: "description",
			content: "Find lost items, student deals, and campus shuttles in one community."
		},
		{
			property: "og:title",
			content: "Campus Crate — Your Campus, Connected"
		},
		{
			property: "og:description",
			content: "Find lost items, student deals, and campus shuttles in one community."
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
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./edit-profile-B0rAhsJi.mjs");
var Route$7 = createFileRoute("/edit-profile")({
	head: () => ({ meta: [
		{ title: "Edit Profile — Campus Crate" },
		{
			name: "description",
			content: "Update your Campus Crate student profile, contact details, and campus address."
		},
		{
			property: "og:title",
			content: "Edit Profile — Campus Crate"
		},
		{
			property: "og:description",
			content: "Update your Campus Crate student profile, contact details, and campus address."
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
var $$splitComponentImporter$6 = () => import("./login-HyqDCVAz.mjs");
var Route$6 = createFileRoute("/login")({
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
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./lost-and-found-C9ia4MP9.mjs");
var Route$5 = createFileRoute("/lost-and-found")({
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
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./marketplace-Cr8TA0_p.mjs");
var Route$4 = createFileRoute("/marketplace")({
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
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./my-listings-DcAkx8hS.mjs");
var Route$3 = createFileRoute("/my-listings")({
	head: () => ({ meta: [
		{ title: "My Listings — Campus Crate" },
		{
			name: "description",
			content: "Manage your active Campus Crate community posts."
		},
		{
			property: "og:title",
			content: "My Listings — Campus Crate"
		},
		{
			property: "og:description",
			content: "Manage your active Campus Crate community posts."
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
var $$splitComponentImporter$2 = () => import("./shuttle-BSIzBB2n.mjs");
var Route$2 = createFileRoute("/shuttle")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./shuttle-driver-BxPs0Hbc.mjs");
var Route$1 = createFileRoute("/shuttle-driver")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./signup-BmTd-sIJ.mjs");
var Route = createFileRoute("/signup")({
	head: () => ({ meta: [
		{ title: "Create Account — Campus Crate" },
		{
			name: "description",
			content: "Join Campus Crate to post lost items, sell things, and use the campus shuttle service."
		},
		{
			property: "og:title",
			content: "Create Account — Campus Crate"
		},
		{
			property: "og:description",
			content: "Join Campus Crate to post lost items, sell things, and use the campus shuttle service."
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
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$8.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$9
	}),
	EditProfileRoute: Route$7.update({
		id: "/edit-profile",
		path: "/edit-profile",
		getParentRoute: () => Route$9
	}),
	LoginRoute: Route$6.update({
		id: "/login",
		path: "/login",
		getParentRoute: () => Route$9
	}),
	LostAndFoundRoute: Route$5.update({
		id: "/lost-and-found",
		path: "/lost-and-found",
		getParentRoute: () => Route$9
	}),
	MarketplaceRoute: Route$4.update({
		id: "/marketplace",
		path: "/marketplace",
		getParentRoute: () => Route$9
	}),
	MyListingsRoute: Route$3.update({
		id: "/my-listings",
		path: "/my-listings",
		getParentRoute: () => Route$9
	}),
	ShuttleRoute: Route$2.update({
		id: "/shuttle",
		path: "/shuttle",
		getParentRoute: () => Route$9
	}),
	ShuttleDriverRoute: Route$1.update({
		id: "/shuttle-driver",
		path: "/shuttle-driver",
		getParentRoute: () => Route$9
	}),
	SignupRoute: Route.update({
		id: "/signup",
		path: "/signup",
		getParentRoute: () => Route$9
	}),
	VerifyEmailRoute: Route$11.update({
		id: "/verify-email",
		path: "/verify-email",
		getParentRoute: () => Route$9
	}),
	ListingIdRoute: Route$10.update({
		id: "/listing/$id",
		path: "/listing/$id",
		getParentRoute: () => Route$9
	})
};
var routeTree = Route$9._addFileChildren(rootRouteChildren);
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
