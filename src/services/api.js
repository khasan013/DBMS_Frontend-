const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ?? "http://localhost:8089";

export function getSession() {
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

export function saveSession(session) {
  localStorage.setItem("campus-crate-session", JSON.stringify(session));
  window.dispatchEvent(new Event("campus-crate-auth-change"));
}

export function clearSession() {
  if (typeof window === "undefined") return;
  localStorage.removeItem("campus-crate-session");
  window.dispatchEvent(new Event("campus-crate-auth-change"));
}

export async function api(path, options = {}) {
  const session = getSession();
  let response;
  try {
    response = await fetch(`${API_BASE_URL}${path}`, {
      ...options,
      headers: {
        ...(options.body instanceof FormData
          ? {}
          : { "Content-Type": "application/json" }),
        ...(session?.token ? { Authorization: `Bearer ${session.token}` } : {}),
        ...options.headers,
      },
    });
  } catch {
    throw new Error(
      "Cannot reach the server. Check that the backend is running and try again.",
    );
  }
  if (response.status === 204) return null;
  const data = await response.json().catch(() => null);
  if (!response.ok) {
    if (response.status === 401) {
      clearSession();
      throw new Error("Your session has expired. Please sign in again.");
    }
    if (response.status === 403)
      throw new Error(
        data?.message ?? "You do not have permission to do that.",
      );
    throw new Error(data?.message ?? "Request failed. Please try again.");
  }
  return data;
}

export const apiUrl = (path) => `${API_BASE_URL}${path}`;
