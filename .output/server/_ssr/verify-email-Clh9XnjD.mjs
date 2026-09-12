import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/verify-email-Clh9XnjD.js
var $$splitComponentImporter = () => import("./verify-email-C5kqehX2.mjs");
var Route = createFileRoute("/verify-email")({
	validateSearch: (search) => ({ email: search.email ?? "" }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
