import { n as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { f as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { n as api, o as getSession, t as Button } from "./api-BrSPGXDs.mjs";
import { g as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { S as LoaderCircle, n as Users, o as UserCheck, r as UserX, u as ShieldCheck } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-BzdULhXK.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AdminPage() {
	const navigate = useNavigate();
	const session = getSession();
	const admin = session?.user;
	const isAdmin = session?.role === "ADMIN" || Boolean(admin?.adminId);
	const [profile, setProfile] = (0, import_react.useState)(null);
	const [users, setUsers] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [updatingUserId, setUpdatingUserId] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (!isAdmin || !admin?.adminId) {
			navigate({
				to: "/",
				replace: true
			});
			return;
		}
		Promise.all([api(`/api/admin/${admin.adminId}`), api("/api/admin/users")]).then(([adminProfile, userList]) => {
			setProfile(adminProfile);
			setUsers(userList);
		}).catch((error) => toast.error(error.message)).finally(() => setLoading(false));
	}, [
		admin?.adminId,
		isAdmin,
		navigate
	]);
	const setSuspended = (user, suspended) => {
		setUpdatingUserId(user.userId);
		api(`/api/admin/users/${user.userId}/suspension`, {
			method: "PUT",
			body: JSON.stringify({ suspended })
		}).then((updated) => {
			setUsers((current) => current.map((item) => item.userId === updated.userId ? updated : item));
			toast.success(`${updated.name} has been ${suspended ? "suspended" : "reactivated"}.`);
		}).catch((error) => toast.error(error.message)).finally(() => setUpdatingUserId(null));
	};
	if (!isAdmin) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "container-shell py-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "flex flex-col justify-between gap-5 border-b border-border pb-8 sm:flex-row sm:items-end",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "ADMINISTRATION"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 font-display text-3xl font-bold",
					children: "Admin dashboard"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-muted-foreground",
					children: "Manage your profile and student account access."
				})
			] }), profile && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl border border-border bg-card px-4 py-3 text-sm shadow-soft",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "flex items-center gap-1.5 font-semibold",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-4 text-success" }), profile.name]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-muted-foreground",
					children: [
						profile.email,
						" · ",
						profile.phone
					]
				})]
			})]
		}), loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex justify-center py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "animate-spin text-primary" })
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "py-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-5 flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl font-semibold",
					children: "Student accounts"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "Suspend accounts to immediately block sign-in and posting."
				})] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden rounded-xl border border-border bg-card",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-x-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full min-w-[720px] text-left text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
							className: "border-b border-border bg-surface-subtle text-muted-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-5 py-3 font-semibold",
									children: "Student"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-5 py-3 font-semibold",
									children: "Email"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-5 py-3 font-semibold",
									children: "Phone"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-5 py-3 font-semibold",
									children: "Status"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-5 py-3 text-right font-semibold",
									children: "Action"
								})
							] })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [users.map((user) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-b border-border last:border-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
									className: "px-5 py-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-semibold",
										children: user.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: user.studentId
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-5 py-4",
									children: user.email
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-5 py-4",
									children: user.phone
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-5 py-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: user.suspended ? "rounded-full bg-danger-soft px-2 py-1 text-xs font-semibold text-danger" : "rounded-full bg-success-soft px-2 py-1 text-xs font-semibold text-success",
										children: user.suspended ? "Suspended" : user.emailVerified ? "Active" : "Unverified"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-5 py-4 text-right",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										size: "sm",
										variant: user.suspended ? "outline" : "destructive",
										disabled: updatingUserId === user.userId,
										onClick: () => setSuspended(user, !user.suspended),
										children: [updatingUserId === user.userId ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "animate-spin" }) : user.suspended ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserCheck, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserX, {}), user.suspended ? "Reactivate" : "Suspend"]
									})
								})
							]
						}, user.userId)), users.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							colSpan: "5",
							className: "px-5 py-16 text-center text-muted-foreground",
							children: "No student accounts found."
						}) })] })]
					})
				})
			})]
		})]
	});
}
//#endregion
export { AdminPage as component };
