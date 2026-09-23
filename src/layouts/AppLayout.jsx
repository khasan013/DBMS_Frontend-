import { Outlet } from "@tanstack/react-router";
import { useEffect } from "react";
import { SiteHeader } from "@/components/site-header";
import { Toaster } from "@/components/ui/sonner";
import { api, clearSession, getSession } from "@/services/api";

export function AppLayout() {
  useEffect(() => {
    const validateSession = () => {
      if (!getSession()) return;
      api("/api/session").catch(() => {
        clearSession();
        window.location.assign("/");
      });
    };
    validateSession();
    const timer = window.setInterval(validateSession, 2000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <>
      <SiteHeader />
      <Outlet />
      <Toaster />
    </>
  );
}
