//#region node_modules/.nitro/vite/services/ssr/assets/api-DJE8ICXP.js
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
export { saveSession as i, clearSession as n, getSession as r, api as t };
