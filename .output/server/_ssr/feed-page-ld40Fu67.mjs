import { n as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { f as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { n as api, t as Button } from "./api-BrSPGXDs.mjs";
import { A as Check, T as Funnel, l as ShoppingBag, p as Search } from "../_libs/lucide-react.mjs";
import { t as Input } from "./input-B2DL_XkA.mjs";
import { t as ListingCard } from "./listing-card-xYhfDac9.mjs";
import { t as Checkbox } from "./checkbox-B0qxxBcH.mjs";
import { t as Slider } from "./slider-CrKkY8Mu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/feed-page-ld40Fu67.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var moduleLabel = {
	lost: "Lost & Found",
	market: "Marketplace",
	"to-let": "To-let"
};
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
		const endpoint = module === "lost" ? "/api/items" : "/api/marketplace/posts/active";
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
//#endregion
export { FeedPage as t };
