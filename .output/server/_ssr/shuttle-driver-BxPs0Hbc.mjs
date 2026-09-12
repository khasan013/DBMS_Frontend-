import { n as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { f as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as Button } from "./button-C0l3U_YE.mjs";
import { t as Input } from "./input-Drd4JUO3.mjs";
import { t as Label } from "./label-BsPZHm4o.mjs";
import { r as getSession, t as api } from "./api-DJE8ICXP.mjs";
import { t as RequireAuth } from "./require-auth-LEI6g9SC.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shuttle-driver-BxPs0Hbc.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function DriverPage() {
	const userId = getSession()?.user?.userId;
	const [form, setForm] = (0, import_react.useState)({
		phone: "",
		vehicleName: "",
		vehicleNumber: "",
		profileInfo: ""
	});
	const [route, setRoute] = (0, import_react.useState)("Kuril");
	const apply = (e) => {
		e.preventDefault();
		if (!userId) return toast.error("Please sign in first.");
		api("/api/shuttle/drivers", {
			method: "POST",
			body: JSON.stringify({
				userId,
				...form
			})
		}).then(() => toast.success("Driver application submitted.")).catch((e) => toast.error(e.message));
	};
	const start = () => {
		if (!userId) return toast.error("Please sign in first.");
		api("/api/shuttle/trips", {
			method: "POST",
			body: JSON.stringify({
				driverId: userId,
				route,
				startNow: true
			})
		}).then(() => toast.success("Trip created.")).catch((e) => toast.error(e.message));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "container-shell max-w-3xl py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl font-bold",
				children: "Shuttle driver portal"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted-foreground",
				children: "Apply as a driver and start approved shuttle trips."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-6 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "space-y-4 rounded-xl border p-5",
					onSubmit: apply,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-semibold",
							children: "Driver application"
						}),
						Object.entries({
							phone: "Phone",
							vehicleName: "Vehicle name",
							vehicleNumber: "Vehicle number",
							profileInfo: "About you"
						}).map(([key, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: key,
							children: label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: key,
							value: form[key],
							onChange: (e) => setForm({
								...form,
								[key]: e.target.value
							})
						})] }, key)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							children: "Apply as driver"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "space-y-4 rounded-xl border p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-semibold",
							children: "Start a trip"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "route",
							children: "Route"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							id: "route",
							className: "h-10 w-full rounded-md border border-input bg-background px-3",
							value: route,
							onChange: (e) => setRoute(e.target.value),
							children: [
								"Kuril",
								"Notun Bazar",
								"Aftab-Nagor"
							].map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: r }, r))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							onClick: start,
							children: "Start active trip"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: "Only approved drivers can start trips."
						})
					]
				})]
			})
		]
	});
}
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RequireAuth, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DriverPage, {}) });
//#endregion
export { SplitComponent as component };
