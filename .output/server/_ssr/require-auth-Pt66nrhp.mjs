import { n as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { f as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { o as getSession } from "./api-BrSPGXDs.mjs";
import { g as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/require-auth-Pt66nrhp.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
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
//#endregion
export { RequireAuth as t };
