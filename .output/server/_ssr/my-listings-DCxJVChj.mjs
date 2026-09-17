import { n as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { f as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { n as api, o as getSession, t as Button } from "./api-BrSPGXDs.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { S as LoaderCircle, g as PenLine, u as ShieldCheck } from "../_libs/lucide-react.mjs";
import { t as RequireAuth } from "./require-auth-Pt66nrhp.mjs";
import { n as AvatarFallback, r as AvatarImage, t as Avatar } from "./avatar-DjPBrCuR.mjs";
import { n as TabsList, r as TabsTrigger, t as Tabs } from "./tabs-BdFJSyS-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/my-listings-DCxJVChj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function MyListings() {
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
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-semibold",
							children: post.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-accent px-2 py-0.5 text-[10px] font-bold uppercase text-accent-foreground",
							children: post.status
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: post.detail
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
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
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RequireAuth, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MyListings, {}) });
//#endregion
export { SplitComponent as component };
