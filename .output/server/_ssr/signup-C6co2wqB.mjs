import { n as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { f as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { n as api, s as saveSession, t as Button } from "./api-BrSPGXDs.mjs";
import { t as Input } from "./input-B2DL_XkA.mjs";
import { t as Label } from "./label-Bz2fWaly.mjs";
import { g as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { y as LoaderCircle } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Checkbox } from "./checkbox-B0qxxBcH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/signup-C6co2wqB.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SignupPage() {
	const navigate = useNavigate();
	const [values, setValues] = (0, import_react.useState)({
		name: "",
		studentId: "",
		email: "",
		phone: "",
		password: "",
		confirm: ""
	});
	const [agreed, setAgreed] = (0, import_react.useState)(false);
	const [errors, setErrors] = (0, import_react.useState)({});
	const [loading, setLoading] = (0, import_react.useState)(false);
	const submit = (event) => {
		event.preventDefault();
		const next = {};
		if (values.name.trim().length < 2) next["name"] = "Please enter your full name.";
		if (!values.studentId.trim()) next["studentId"] = "Student ID is required.";
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) next["email"] = "Enter a valid email address.";
		if (values.phone.replace(/\D/g, "").length < 7) next["phone"] = "Enter a valid phone number.";
		if (values.password.length < 8) next["password"] = "Use at least 8 characters.";
		if (values.confirm !== values.password) next["confirm"] = "Passwords do not match.";
		if (!agreed) next["agreed"] = "Please accept the community guidelines.";
		setErrors(next);
		if (Object.keys(next).length) return;
		setLoading(true);
		const { confirm, ...request } = values;
		api("/api/users/register", {
			method: "POST",
			body: JSON.stringify(request)
		}).then((user) => {
			saveSession({ user });
			toast.success("We sent a verification code to your email.");
			navigate({
				to: "/verify-email",
				search: { email: values.email }
			});
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
					children: "Create your account"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1.5 text-sm text-muted-foreground",
					children: "Verified students only — use your university email."
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
									htmlFor: "name",
									children: "Full name"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "name",
									value: values.name,
									onChange: (e) => setValues({
										...values,
										name: e.target.value
									}),
									placeholder: "Your full name",
									"aria-invalid": !!errors["name"]
								}),
								errors["name"] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-medium text-danger",
									children: errors["name"]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "studentId",
									children: "Student ID"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "studentId",
									value: values.studentId,
									onChange: (e) => setValues({
										...values,
										studentId: e.target.value
									}),
									placeholder: "e.g. 20230001",
									"aria-invalid": !!errors["studentId"]
								}),
								errors["studentId"] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-medium text-danger",
									children: errors["studentId"]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "email",
									children: "Email address"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "email",
									type: "email",
									value: values.email,
									onChange: (e) => setValues({
										...values,
										email: e.target.value
									}),
									placeholder: "you@university.edu",
									"aria-invalid": !!errors["email"]
								}),
								errors["email"] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-medium text-danger",
									children: errors["email"]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "phone",
									children: "Phone number"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "phone",
									value: values.phone,
									onChange: (e) => setValues({
										...values,
										phone: e.target.value
									}),
									placeholder: "+880 1XXXXXXXXX",
									"aria-invalid": !!errors["phone"]
								}),
								errors["phone"] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-medium text-danger",
									children: errors["phone"]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "password",
										children: "Password"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "password",
										type: "password",
										value: values.password,
										onChange: (e) => setValues({
											...values,
											password: e.target.value
										}),
										placeholder: "••••••••",
										"aria-invalid": !!errors["password"]
									}),
									errors["password"] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-medium text-danger",
										children: errors["password"]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "confirm",
										children: "Confirm password"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "confirm",
										type: "password",
										value: values.confirm,
										onChange: (e) => setValues({
											...values,
											confirm: e.target.value
										}),
										placeholder: "••••••••",
										"aria-invalid": !!errors["confirm"]
									}),
									errors["confirm"] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-medium text-danger",
										children: errors["confirm"]
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "flex items-start gap-2.5 text-sm text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
								checked: agreed,
								onCheckedChange: (v) => setAgreed(!!v),
								className: "mt-0.5"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "I agree to the Campus Crate community guidelines." })]
						}),
						errors["agreed"] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium text-danger",
							children: errors["agreed"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "submit",
							className: "w-full",
							disabled: loading,
							children: [loading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "animate-spin" }), "Create account"]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-6 text-center text-sm text-muted-foreground",
					children: ["Already have an account? ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/login",
						className: "font-semibold text-primary hover:underline",
						children: "Sign in"
					})]
				})
			]
		})
	});
}
//#endregion
export { SignupPage as component };
