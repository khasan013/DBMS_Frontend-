import { n as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { f as require_jsx_runtime, l as Slot } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/api-BrSPGXDs.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var API_BASE_URL = "http://localhost:8089";
function getSession() {
	if (typeof window === "undefined") return null;
	const raw = localStorage.getItem("campus-crate-session");
	if (!raw) return null;
	try {
		const session = JSON.parse(raw);
		return session?.token ? session : null;
	} catch {
		localStorage.removeItem("campus-crate-session");
		return null;
	}
}
function saveSession(session) {
	localStorage.setItem("campus-crate-session", JSON.stringify(session));
	window.dispatchEvent(new Event("campus-crate-auth-change"));
}
function clearSession() {
	if (typeof window === "undefined") return;
	localStorage.removeItem("campus-crate-session");
	window.dispatchEvent(new Event("campus-crate-auth-change"));
}
async function api(path, options = {}) {
	const session = getSession();
	let response;
	try {
		response = await fetch(`${API_BASE_URL}${path}`, {
			...options,
			headers: {
				...options.body instanceof FormData ? {} : { "Content-Type": "application/json" },
				...session?.token ? { Authorization: `Bearer ${session.token}` } : {},
				...options.headers
			}
		});
	} catch {
		throw new Error("Cannot reach the server. Check that the backend is running and try again.");
	}
	if (response.status === 204) return null;
	const data = await response.json().catch(() => null);
	if (!response.ok) {
		if (response.status === 401) {
			clearSession();
			throw new Error("Your session has expired. Please sign in again.");
		}
		if (response.status === 403) throw new Error(data?.message ?? "You do not have permission to do that.");
		throw new Error(data?.message ?? "Request failed. Please try again.");
	}
	return data;
}
//#endregion
export { cn as a, clearSession as i, api as n, getSession as o, buttonVariants as r, saveSession as s, Button as t };
