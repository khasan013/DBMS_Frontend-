import { n as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { f as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { n as api, o as getSession, t as Button } from "./api-BrSPGXDs.mjs";
import { g as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as Check, N as Building2, S as LoaderCircle, T as Funnel, m as Plus, p as Search, t as X } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Input } from "./input-B2DL_XkA.mjs";
import { t as Label } from "./label-Bz2fWaly.mjs";
import { t as Checkbox } from "./checkbox-B0qxxBcH.mjs";
import { t as Slider } from "./slider-CrKkY8Mu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/to-let-1H_xsedP.js
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
var MAX_RENT = 1e5;
function ToLetPage() {
	const navigate = useNavigate();
	const userId = getSession()?.user?.userId;
	const [listings, setListings] = (0, import_react.useState)([]);
	const [query, setQuery] = (0, import_react.useState)("");
	const [area, setArea] = (0, import_react.useState)("");
	const [maxRent, setMaxRent] = (0, import_react.useState)(MAX_RENT);
	const [bedrooms, setBedrooms] = (0, import_react.useState)([]);
	const [showFilters, setShowFilters] = (0, import_react.useState)(false);
	const [showForm, setShowForm] = (0, import_react.useState)(false);
	const [form, setForm] = (0, import_react.useState)(emptyForm);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [loadError, setLoadError] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		api("/api/to-let/listings").then(setListings).catch((error) => {
			setListings([]);
			setLoadError(error.message);
		}).finally(() => setLoading(false));
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
		}).then((listing) => {
			setListings((current) => [listing, ...current]);
			setForm(emptyForm);
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
				children: loading ? "Loading places…" : `${filtered.length} available place${filtered.length === 1 ? "" : "s"}`
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
				children: filtered.map((listing) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-xl border border-border bg-card p-5 shadow-soft",
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
								className: "shrink-0 font-display text-lg font-bold text-primary",
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
							className: "mt-3 line-clamp-3 whitespace-pre-wrap text-sm text-muted-foreground",
							children: listing.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex flex-wrap gap-2 border-t border-border pt-4 text-xs font-medium text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "rounded-full bg-accent px-2 py-1",
									children: [listing.bedrooms, " bed"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "rounded-full bg-accent px-2 py-1",
									children: [listing.bathrooms, " bath"]
								}),
								listing.availableFrom && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "rounded-full bg-accent px-2 py-1",
									children: ["Available ", (/* @__PURE__ */ new Date(`${listing.availableFrom}T00:00:00`)).toLocaleDateString()]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 text-sm font-medium",
							children: ["Contact: ", listing.contactPhone]
						})
					]
				}, listing.listingId))
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-xl border border-dashed border-border py-20 text-center text-muted-foreground",
				children: "No available rental listings match your filters."
			})] })]
		})]
	})] });
}
//#endregion
export { ToLetPage as component };
