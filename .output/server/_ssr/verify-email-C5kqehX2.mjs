import { n as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { f as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as Button } from "./button-C0l3U_YE.mjs";
import { t as Input } from "./input-Drd4JUO3.mjs";
import { t as Label } from "./label-BsPZHm4o.mjs";
import { t as api } from "./api-DJE8ICXP.mjs";
import { g as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Route } from "./verify-email-Clh9XnjD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/verify-email-C5kqehX2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function VerifyEmail() {
	const navigate = useNavigate();
	const { email: initialEmail } = Route.useSearch();
	const [email, setEmail] = (0, import_react.useState)(initialEmail);
	const [code, setCode] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const verify = (e) => {
		e.preventDefault();
		setBusy(true);
		api("/api/users/verify-email", {
			method: "POST",
			body: JSON.stringify({
				email,
				code
			})
		}).then(() => {
			toast.success("Email verified. You can now sign in.");
			navigate({ to: "/login" });
		}).catch((e) => toast.error(e.message)).finally(() => setBusy(false));
	};
	const resend = () => api("/api/users/resend-verification", {
		method: "POST",
		body: JSON.stringify({ email })
	}).then(() => toast.success("A new code has been sent.")).catch((e) => toast.error(e.message));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "container-shell flex min-h-[calc(100vh-4rem)] items-center justify-center py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "w-full max-w-md rounded-xl border bg-card p-7 shadow-soft",
			onSubmit: verify,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-2xl font-bold",
					children: "Verify your email"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Enter the six-digit code sent by Resend. It expires in 10 minutes."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "email",
						children: "Email"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "email",
						type: "email",
						value: email,
						onChange: (e) => setEmail(e.target.value),
						required: true
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "code",
						children: "Verification code"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "code",
						inputMode: "numeric",
						maxLength: 6,
						value: code,
						onChange: (e) => setCode(e.target.value.replace(/\D/g, "")),
						required: true
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "mt-6 w-full",
					disabled: busy,
					children: "Verify email"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: "link",
					className: "mt-2 w-full",
					onClick: resend,
					children: "Resend code"
				})
			]
		})
	});
}
//#endregion
export { VerifyEmail as component };
