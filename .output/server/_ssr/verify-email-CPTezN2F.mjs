import { n as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { f as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { n as api, t as Button } from "./api-BrSPGXDs.mjs";
import { g as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Input } from "./input-B2DL_XkA.mjs";
import { t as Label } from "./label-Bz2fWaly.mjs";
import { t as Route } from "./verify-email-5om6Ftci.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/verify-email-CPTezN2F.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var OTP_LIFETIME_SECONDS = 600;
var formatTime = (seconds) => `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;
function VerifyEmail() {
	const navigate = useNavigate();
	const { email: initialEmail } = Route.useSearch();
	const [email, setEmail] = (0, import_react.useState)(initialEmail);
	const [code, setCode] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [resendBusy, setResendBusy] = (0, import_react.useState)(false);
	const [remainingSeconds, setRemainingSeconds] = (0, import_react.useState)(OTP_LIFETIME_SECONDS);
	(0, import_react.useEffect)(() => {
		const timer = window.setInterval(() => setRemainingSeconds((seconds) => Math.max(0, seconds - 1)), 1e3);
		return () => window.clearInterval(timer);
	}, []);
	const verify = (event) => {
		event.preventDefault();
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
		}).catch((error) => toast.error(error.message)).finally(() => setBusy(false));
	};
	const resend = () => {
		if (resendBusy) return;
		setResendBusy(true);
		api("/api/users/resend-verification", {
			method: "POST",
			body: JSON.stringify({ email })
		}).then(() => {
			setRemainingSeconds(OTP_LIFETIME_SECONDS);
			setCode("");
			toast.success("A new code has been sent.");
		}).catch((error) => toast.error(error.message)).finally(() => setResendBusy(false));
	};
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
					children: "Enter the six-digit code sent to your email."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: `mt-3 text-sm font-semibold ${remainingSeconds === 0 ? "text-danger" : "text-primary"}`,
					children: remainingSeconds === 0 ? "Your code has expired. Request a new one." : `Code expires in ${formatTime(remainingSeconds)}`
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
						onChange: (event) => setEmail(event.target.value),
						required: true
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "code",
						children: "Verification code"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "code",
						inputMode: "numeric",
						maxLength: 6,
						value: code,
						onChange: (event) => setCode(event.target.value.replace(/\D/g, "")),
						required: true
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "mt-6 w-full",
					disabled: busy || remainingSeconds === 0,
					children: busy ? "Verifying…" : "Verify email"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: "link",
					className: "mt-2 w-full",
					disabled: resendBusy,
					onClick: resend,
					children: resendBusy ? "Sending…" : "Resend code"
				})
			]
		})
	});
}
//#endregion
export { VerifyEmail as component };
