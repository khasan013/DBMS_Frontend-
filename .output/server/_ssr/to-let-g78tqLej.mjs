import { n as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { f as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as Button } from "./button-C0l3U_YE.mjs";
import { t as Input } from "./input-Drd4JUO3.mjs";
import { t as Label } from "./label-BsPZHm4o.mjs";
import { r as getSession, t as api } from "./api-DJE8ICXP.mjs";
import { g as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { N as Building2, S as LoaderCircle, f as RefreshCw, p as Plus } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/to-let-g78tqLej.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
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
function ToLetPage() {
	const navigate = useNavigate();
	const userId = getSession()?.user?.userId;
	const [listings, setListings] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [filters, setFilters] = (0, import_react.useState)({
		search: "",
		area: "",
		maxRent: ""
	});
	const [showForm, setShowForm] = (0, import_react.useState)(false);
	const [form, setForm] = (0, import_react.useState)(emptyForm);
	const loadListings = () => {
		setLoading(true);
		const params = new URLSearchParams();
		if (filters.search) params.set("search", filters.search);
		if (filters.area) params.set("area", filters.area);
		if (filters.maxRent) params.set("maxRent", filters.maxRent);
		api(`/api/to-let/listings${params.size ? `?${params}` : ""}`).then(setListings).catch((error) => {
			setListings([]);
			toast.error(error.message);
		}).finally(() => setLoading(false));
	};
	(0, import_react.useEffect)(() => {
		loadListings();
	}, []);
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
				availableFrom: form.availableFrom || null
			})
		}).then(() => {
			toast.success("Your to-let listing is live.");
			setForm(emptyForm);
			setShowForm(false);
			loadListings();
		}).catch((error) => toast.error(error.message));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "container-shell py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "rounded-2xl bg-primary p-7 text-primary-foreground sm:p-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-primary-foreground/75",
							children: "STUDENT HOUSING"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-2 flex items-center gap-3 font-display text-3xl font-bold sm:text-4xl",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, {}), "To-let service"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-primary-foreground/85",
							children: "Browse rooms and apartments around campus, or share a place you have available."
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mt-8 rounded-xl border border-border bg-card p-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-end gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-48 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "search",
								children: "Search"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "search",
								placeholder: "Room, apartment, features...",
								value: filters.search,
								onChange: (event) => setFilters({
									...filters,
									search: event.target.value
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-40 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "area",
								children: "Area"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "area",
								placeholder: "e.g. Kuril",
								value: filters.area,
								onChange: (event) => setFilters({
									...filters,
									area: event.target.value
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "w-36",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "rent",
								children: "Max rent"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "rent",
								type: "number",
								min: "0",
								value: filters.maxRent,
								onChange: (event) => setFilters({
									...filters,
									maxRent: event.target.value
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							onClick: loadListings,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, {}), "Search"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							onClick: () => {
								if (!userId) {
									toast.error("Please sign in to post a rental listing.");
									navigate({ to: "/login" });
								} else setShowForm(!showForm);
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {}), "Post to-let"]
						})
					]
				})
			}),
			showForm && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: submit,
				className: "mt-6 grid gap-4 rounded-xl border border-border bg-card p-5 md:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "md:col-span-2 font-display text-xl font-bold",
						children: "Post a rental listing"
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
						required: !["availableFrom"].includes(key),
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
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl font-bold",
						children: "Available places"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "Contact the owner directly to arrange a visit."
					})]
				}), loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex justify-center py-16",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "animate-spin" })
				}) : listings.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-4 md:grid-cols-2",
					children: listings.map((listing) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-xl border border-border bg-card p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-semibold uppercase tracking-wide text-primary",
									children: listing.area
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-1 font-display text-xl font-bold",
									children: listing.title
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "shrink-0 text-lg font-bold text-primary",
									children: [
										"৳",
										Number(listing.monthlyRent).toLocaleString(),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-normal text-muted-foreground",
											children: "/mo"
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 whitespace-pre-wrap text-sm text-muted-foreground",
								children: listing.description
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 flex flex-wrap gap-x-4 gap-y-1 border-t pt-4 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
										listing.bedrooms,
										" bedroom",
										listing.bedrooms === 1 ? "" : "s"
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
										listing.bathrooms,
										" bathroom",
										listing.bathrooms === 1 ? "" : "s"
									] }),
									listing.availableFrom && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Available ", (/* @__PURE__ */ new Date(`${listing.availableFrom}T00:00:00`)).toLocaleDateString()] })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-3 text-sm font-medium",
								children: ["Contact: ", listing.contactPhone]
							})
						]
					}, listing.listingId))
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-xl border border-dashed border-border p-12 text-center text-muted-foreground",
					children: "No available rental listings match your search."
				})]
			})
		]
	});
}
//#endregion
export { ToLetPage as component };
