import { Outlet } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { Toaster } from "@/components/ui/sonner";

export function AppLayout() {
  return (
    <>
      <SiteHeader />
      <Outlet />
      <Toaster />
    </>
  );
}
