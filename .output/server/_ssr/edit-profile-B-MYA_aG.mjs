import { n as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { f as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { n as api, o as getSession, s as saveSession, t as Button } from "./api-BrSPGXDs.mjs";
import { g as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { F as ArrowLeft, S as LoaderCircle, j as Camera, u as ShieldCheck } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Input } from "./input-B2DL_XkA.mjs";
import { t as Label } from "./label-Bz2fWaly.mjs";
import { t as RequireAuth } from "./require-auth-Pt66nrhp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/edit-profile-B-MYA_aG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function EditProfilePage() {
	const navigate = useNavigate();
	const fileInput = (0, import_react.useRef)(null);
	const session = getSession();
	const userId = session?.user?.userId;
	const [profile, setProfile] = (0, import_react.useState)(session?.user ?? null);
	const [name, setName] = (0, import_react.useState)(session?.user?.name ?? "");
	const [phone, setPhone] = (0, import_react.useState)(session?.user?.phone ?? "");
	const [photoFile, setPhotoFile] = (0, import_react.useState)(null);
	const [photoPreview, setPhotoPreview] = (0, import_react.useState)(session?.user?.profileImgUrl ?? "");
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [saving, setSaving] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!userId) return;
		api(`/api/users/${userId}`).then((user) => {
			setProfile(user);
			setName(user.name);
			setPhone(user.phone);
			setPhotoPreview(user.profileImgUrl ?? "");
		}).catch((error) => toast.error(error.message)).finally(() => setLoading(false));
	}, [userId]);
	const selectPhoto = (event) => {
		const selected = event.target.files?.[0];
		if (!selected) return;
		setPhotoFile(selected);
		setPhotoPreview(URL.createObjectURL(selected));
	};
	const save = async (event) => {
		event.preventDefault();
		if (name.trim().length < 2 || phone.replace(/\D/g, "").length < 7) {
			toast.error("Enter your name and a valid phone number.");
			return;
		}
		setSaving(true);
		try {
			let profileImgUrl = profile?.profileImgUrl ?? null;
			if (photoFile) {
				const body = new FormData();
				body.append("file", photoFile);
				profileImgUrl = (await api("/api/uploads/images", {
					method: "POST",
					body
				})).imageUrl;
			}
			const updated = await api(`/api/users/${userId}`, {
				method: "PUT",
				body: JSON.stringify({
					name: name.trim(),
					phone: phone.trim(),
					profileImgUrl
				})
			});
			saveSession({
				...session,
				user: updated
			});
			toast.success("Profile updated.");
			navigate({ to: "/my-listings" });
		} catch (error) {
			toast.error(error.message);
		} finally {
			setSaving(false);
		}
	};
	const initials = (name || profile?.studentId || "?").split(/\s+/).map((part) => part[0]).join("").slice(0, 2).toUpperCase();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "container-shell max-w-3xl py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/my-listings",
				className: "inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), "Back to my listings"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-4 font-display text-3xl font-bold",
				children: "Edit profile"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1.5 text-muted-foreground",
				children: "Keep your account name, phone number, and photo current."
			}),
			loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex justify-center py-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "animate-spin" })
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "mt-8 space-y-8",
				onSubmit: save,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-5 rounded-xl border border-border bg-card p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex size-20 items-center justify-center overflow-hidden rounded-full bg-primary text-xl font-bold text-primary-foreground",
								children: photoPreview ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: photoPreview,
									alt: "Profile",
									className: "size-full object-cover"
								}) : initials
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "absolute -bottom-1 -right-1 flex size-8 cursor-pointer items-center justify-center rounded-full border border-border bg-background shadow-soft",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, { className: "size-4" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "sr-only",
										children: "Upload profile photo"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										ref: fileInput,
										type: "file",
										accept: "image/jpeg,image/png,image/webp,image/gif",
										className: "hidden",
										onChange: selectPhoto
									})
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "flex items-center gap-1.5 text-sm font-semibold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-4 text-success" }), profile?.emailVerified ? "Verified Student" : "Email verification pending"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: "JPEG, PNG, WebP, or GIF up to 10 MB."
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-5 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "name",
									children: "Full name"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "name",
									value: name,
									onChange: (event) => setName(event.target.value),
									required: true
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "email",
										children: "Email"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "email",
										value: profile?.email ?? "",
										readOnly: true,
										disabled: true
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: "Email is set when the account is created."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "phone",
									children: "Phone"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "phone",
									value: phone,
									onChange: (event) => setPhone(event.target.value),
									required: true
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "student-id",
									children: "Student ID"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "student-id",
									value: profile?.studentId ?? "",
									readOnly: true,
									disabled: true
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "submit",
							disabled: saving,
							children: [saving && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "animate-spin" }), "Save changes"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "outline",
							onClick: () => navigate({ to: "/my-listings" }),
							children: "Cancel"
						})]
					})
				]
			})
		]
	});
}
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RequireAuth, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditProfilePage, {}) });
//#endregion
export { SplitComponent as component };
