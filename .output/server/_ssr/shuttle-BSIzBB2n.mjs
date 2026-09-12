import { n as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { f as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as Button } from "./button-C0l3U_YE.mjs";
import { t as Input } from "./input-Drd4JUO3.mjs";
import { t as Label } from "./label-BsPZHm4o.mjs";
import { r as getSession, t as api } from "./api-DJE8ICXP.mjs";
import { g as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { N as Bus, S as LoaderCircle, f as RefreshCw, n as UserRound, y as MapPin } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shuttle-BSIzBB2n.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var routes = [
	"Kuril",
	"Notun Bazar",
	"Aftab-Nagor"
];
function ShuttlePage() {
	const navigate = useNavigate();
	const [route, setRoute] = (0, import_react.useState)(routes[0]);
	const [trips, setTrips] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [coordinates, setCoordinates] = (0, import_react.useState)({
		latitude: "23.7806",
		longitude: "90.4070"
	});
	const userId = getSession()?.user?.userId;
	const loadTrips = () => {
		setLoading(true);
		api(`/api/shuttle/trips?route=${encodeURIComponent(route)}&status=active`).then(setTrips).catch((error) => {
			setTrips([]);
			toast.error(error.message);
		}).finally(() => setLoading(false));
	};
	(0, import_react.useEffect)(loadTrips, [route]);
	const requestPickup = (trip) => {
		if (!userId) {
			toast.error("Please sign in before requesting a shuttle.");
			navigate({ to: "/login" });
			return;
		}
		api("/api/shuttle/wait-requests", {
			method: "POST",
			body: JSON.stringify({
				tripId: trip.tripId,
				driverId: trip.driverId,
				userId,
				latitude: Number(coordinates.latitude),
				longitude: Number(coordinates.longitude)
			})
		}).then(() => toast.success("Pickup request sent to the driver.")).catch((error) => toast.error(error.message));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "container-shell py-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "rounded-2xl bg-primary p-7 text-primary-foreground sm:p-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-primary-foreground/75",
						children: "CAMPUS TRANSPORT"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-2 flex items-center gap-3 font-display text-3xl font-bold sm:text-4xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bus, {}), "Shuttle service"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-primary-foreground/85",
						children: "See active campus shuttles and send a pickup request with your current location."
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-8 grid gap-6 lg:grid-cols-[1fr_320px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-4 flex flex-wrap items-center justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl font-bold",
						children: "Active shuttles"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "Choose a route to see live trips."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						onClick: loadTrips,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, {}), "Refresh"]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-5 flex flex-wrap gap-2",
					children: routes.map((value) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: route === value ? "default" : "outline",
						onClick: () => setRoute(value),
						children: value
					}, value))
				}),
				loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex justify-center py-16",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "animate-spin" })
				}) : trips.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-4",
					children: trips.map((trip) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
						className: "rounded-xl border border-border bg-card p-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-start justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-semibold uppercase tracking-wide text-primary",
									children: trip.status
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
									className: "mt-1 text-lg font-semibold",
									children: [trip.route, " shuttle"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: [
										"Driver #",
										trip.driverId,
										" · Last update ",
										trip.lastLocationAt ? new Date(trip.lastLocationAt).toLocaleTimeString() : "not available"
									]
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								onClick: () => requestPickup(trip),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {}), "Request pickup"]
							})]
						})
					}, trip.tripId))
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-xl border border-dashed border-border p-12 text-center text-muted-foreground",
					children: "No active shuttles on this route right now."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "h-fit rounded-xl border border-border bg-card p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "flex items-center gap-2 font-semibold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4 text-primary" }), "Pickup location"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: "Enter coordinates for the driver."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 space-y-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "lat",
							children: "Latitude"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "lat",
							value: coordinates.latitude,
							onChange: (e) => setCoordinates({
								...coordinates,
								latitude: e.target.value
							})
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "lng",
							children: "Longitude"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "lng",
							value: coordinates.longitude,
							onChange: (e) => setCoordinates({
								...coordinates,
								longitude: e.target.value
							})
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 border-t pt-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold",
								children: "Are you a driver?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: "Apply to drive or manage your trips."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								className: "mt-3 w-full",
								variant: "outline",
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/shuttle-driver",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, {}), "Driver portal"]
								})
							})
						]
					})
				]
			})]
		})]
	});
}
//#endregion
export { ShuttlePage as component };
