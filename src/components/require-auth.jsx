import { useEffect } from "react";
import { useNavigate } from "@tanstack/react-router";
import { getSession } from "@/lib/api";

/** Prevents protected page content from rendering for signed-out visitors. */
export function RequireAuth({ children }) {
  const navigate = useNavigate();
  const session = getSession();

  useEffect(() => {
    if (!session) navigate({ to: "/login", replace: true });
  }, [navigate, session]);

  if (!session) {
    return <main className="container-shell py-16 text-center text-muted-foreground">Redirecting to sign in…</main>;
  }

  return children;
}
