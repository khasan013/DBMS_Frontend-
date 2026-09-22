import { n as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { f as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { n as api, t as Button } from "./api-BrSPGXDs.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { F as ArrowLeft, M as CalendarDays, S as LoaderCircle, b as MapPin, d as Share2, h as Phone, s as Tag, u as ShieldCheck, v as MessageCircle } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { a as DialogTitle, i as DialogHeader, n as DialogContent, o as Route, r as DialogDescription, t as Dialog } from "./listing._id-CzJYVf7w.mjs";
import { n as ListingImage } from "./listing-card-xYhfDac9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/listing._id-Dyy8Zn71.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
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
		owner: `Student #${item.ownerId}`,
		phone: item.contactPhone,
		availableFrom: item.availableFrom
	};
}
function ListingDetails() {
	const { id } = Route.useParams();
	const listingKey = parseListingId(id);
	const [listing, setListing] = (0, import_react.useState)(null);
	const [error, setError] = (0, import_react.useState)("");
	const [contactOpen, setContactOpen] = (0, import_react.useState)(false);
	const [contact, setContact] = (0, import_react.useState)(null);
	const [contactError, setContactError] = (0, import_react.useState)("");
	const [contactLoading, setContactLoading] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!listingKey) {
			setError("This listing link is invalid.");
			return;
		}
		let active = true;
		api(endpointFor(listingKey)).then((item) => {
			if (active) setListing(normalizeListing(listingKey.module, item));
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
		setContactOpen(true);
		setContact(null);
		setContactError("");
		setContactLoading(true);
		api(`/api/users/${listing.ownerId}/contact`).then(setContact).catch((requestError) => setContactError(requestError.message)).finally(() => setContactLoading(false));
	};
	const backTo = listing.module === "lost" ? "/lost-and-found" : listing.module === "to-let" ? "/to-let" : "/marketplace";
	const moduleLabel = listing.module === "lost" ? "Lost & Found" : listing.module === "to-let" ? "To-let" : "Marketplace";
	const initial = listing.owner.replace("Student #", "S").slice(0, 2).toUpperCase();
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
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full bg-accent px-2.5 py-1 text-xs font-semibold text-accent-foreground",
						children: listing.tag
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full bg-primary-soft px-2.5 py-1 text-xs font-bold text-primary",
						children: listing.status
					})]
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
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { className: "size-4" }),
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
							children: listing.module === "market" ? "Seller" : "Posted by"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex size-12 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground",
								children: initial
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-semibold",
								children: listing.owner
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "flex items-center gap-1 text-xs text-success",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-3.5" }), "Campus community member"]
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
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {}), "Contact Admin"]
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
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Contact Admin" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Reach out directly about this listing." })] }), contactLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
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
//#endregion
export { ListingDetails as component };
