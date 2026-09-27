import { Outlet } from "@tanstack/react-router";
import { useEffect } from "react";
import { SiteHeader } from "@/components/site-header";
import { Toaster } from "@/components/ui/sonner";
import { api, clearSession, getSession } from "@/services/api";

export function AppLayout() {
  useEffect(() => {
    let timer;
    let active = true;
    const validateSession = async () => {
      if (!getSession()) return;
      await api("/api/session").catch(() => {
        clearSession();
        window.location.assign("/");
      });
      if (active) timer = window.setTimeout(validateSession, 2000);
    };
    validateSession();
    return () => { active = false; window.clearTimeout(timer); };
  }, []);

  return (
    <>
      <SiteHeader />
      <Outlet />
      <Toaster />
    </>
  );
}
