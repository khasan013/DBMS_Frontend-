import { n as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { f as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { n as api, s as saveSession, t as Button } from "./api-BrSPGXDs.mjs";
import { g as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { S as LoaderCircle } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Input } from "./input-B2DL_XkA.mjs";
import { t as Label } from "./label-Bz2fWaly.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-KjMJPnCA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function LoginPage() {
	const navigate = useNavigate();
	const [values, setValues] = (0, import_react.useState)({
		identifier: "",
		password: ""
	});
	const [errors, setErrors] = (0, import_react.useState)({});
	const [loading, setLoading] = (0, import_react.useState)(false);
	const submit = (event) => {
		event.preventDefault();
		const next = {};
		if (!values.identifier.trim()) next.identifier = "Enter your student ID or admin email.";
		if (values.password.length < 8) next["password"] = "Password must be at least 8 characters.";
		setErrors(next);
		if (Object.keys(next).length) return;
		setLoading(true);
		const identifier = values.identifier.trim();
		const isAdminLogin = identifier.includes("@");
		const endpoint = isAdminLogin ? "/api/admin/login" : "/api/users/login";
		const request = isAdminLogin ? {
			email: identifier,
			password: values.password
		} : {
			studentId: identifier,
			password: values.password
		};
		api(endpoint, {
			method: "POST",
			body: JSON.stringify(request)
		}).then((result) => {
			const account = result.user ?? result;
			saveSession({
				token: result.accessToken,
				role: isAdminLogin ? "ADMIN" : "USER",
				user: account
			});
			toast.success(isAdminLogin ? "Welcome back, administrator" : "Welcome back to Campus Crate");
			navigate({ to: isAdminLogin ? "/admin" : "/my-listings" });
		}).catch((error) => toast.error(error.message)).finally(() => setLoading(false));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "container-shell flex min-h-[calc(100vh-4rem)] items-center justify-center py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-md rounded-xl border border-border bg-card p-7 shadow-soft",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/campus-crate-logo.png",
					alt: "Campus Crate",
					className: "size-11 object-contain"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-5 font-display text-2xl font-bold",
					children: "Welcome back"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1.5 text-sm text-muted-foreground",
					children: "Sign in to manage your campus listings."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "mt-6 space-y-4",
					onSubmit: submit,
					noValidate: true,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "identifier",
									children: "Student ID or admin email"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "identifier",
									autoComplete: "username",
									placeholder: "e.g. 20230001 or admin@example.com",
									value: values.identifier,
									onChange: (e) => setValues({
										...values,
										identifier: e.target.value
									}),
									"aria-invalid": !!errors.identifier
								}),
								errors.identifier && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-medium text-danger",
									children: errors.identifier
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "password",
									children: "Password"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "password",
									type: "password",
									autoComplete: "current-password",
									placeholder: "••••••••",
									value: values.password,
									onChange: (e) => setValues({
										...values,
										password: e.target.value
									}),
									"aria-invalid": !!errors["password"]
								}),
								errors["password"] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-medium text-danger",
									children: errors["password"]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "submit",
							className: "w-full",
							disabled: loading,
							children: [loading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "animate-spin" }), "Sign in"]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-6 text-center text-sm text-muted-foreground",
					children: ["New to Campus Crate? ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/signup",
						className: "font-semibold text-primary hover:underline",
						children: "Create an account"
					})]
				})
			]
		})
	});
}
//#endregion
export { LoginPage as component };
