import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { Bell, LogIn, Menu, Plus, Search, Settings, ShieldCheck, UserPlus, UserRound, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { CreatePostDialog } from "@/components/create-post-dialog";
import { api, clearSession, getSession } from "@/services/api";
import { toast } from "sonner";

export function SiteHeader() {
  const [createOpen, setCreateOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  // Start with the same state on the server and browser. Reading localStorage during
  // the first browser render causes React hydration error #418 for signed-in users.
  const [session, setSession] = useState(null);
  const [isVendor, setIsVendor] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const knownNotificationIds = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    const refreshSession = () => setSession(getSession());
    refreshSession();
    window.addEventListener("campus-crate-auth-change", refreshSession);
    window.addEventListener("storage", refreshSession);
    return () => {
      window.removeEventListener("campus-crate-auth-change", refreshSession);
      window.removeEventListener("storage", refreshSession);
    };
  }, []);
  useEffect(() => {
    if (!session?.token || session.role === "ADMIN") { setIsVendor(false); return; }
    api("/api/vendors/me").then(() => setIsVendor(true)).catch(() => setIsVendor(false));
  }, [session]);
  useEffect(() => {
    knownNotificationIds.current = null;
    if (!session?.token) { setNotifications([]); return; }
    const loadNotifications = () => api(session.role === "ADMIN" ? "/api/notifications/admin" : "/api/notifications/me").then((items) => {
      const previous = knownNotificationIds.current;
      if (previous && session.role === "ADMIN") {
        items.filter((item) => !previous.has(item.notificationId) && item.title.startsWith("New food order")).forEach((item) => toast.info(item.title, { description: item.message }));
      }
      knownNotificationIds.current = new Set(items.map((item) => item.notificationId));
      setNotifications(items);
    }).catch(() => setNotifications([]));
    loadNotifications();
    const timer = window.setInterval(loadNotifications, 2000);
    return () => window.clearInterval(timer);
  }, [session]);
  const signedIn = Boolean(session?.token);
  const user = session?.user ?? {};
  const isAdmin = session?.role === "ADMIN" || Boolean(user.adminId);
  const displayName = user.name || user.studentId || "Student";
  const initials = displayName.split(/\s+/).filter(Boolean).slice(0, 2).map((part) => part[0]).join("").toUpperCase() || "CC";
  const requireLogin = (action) => {
    if (signedIn) return action();
    navigate({ to: "/login" });
  };
  const signOut = () => {
    clearSession();
    setCreateOpen(false);
    navigate({ to: "/" });
  };
  const runSearch = (event) => { event.preventDefault(); const form = new FormData(event.currentTarget); const section = String(form.get("section")); const query = String(form.get("query") || "").trim(); const path = section === "lost" ? "/lost-and-found" : section === "market" ? "/marketplace" : section === "to-let" ? "/to-let" : section === "food" ? "/food" : "/search"; window.location.assign(`${path}${query ? `?q=${encodeURIComponent(query)}` : ""}`); };
  const links = [{ to: "/lost-and-found", label: "Lost & Found" }, { to: "/marketplace", label: "Marketplace" }, { to: "/to-let", label: "To-let" }, { to: "/food", label: "Food" }];
  return <>
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/92 backdrop-blur-xl">
      <div className="container-shell flex h-16 items-center gap-5">
        <Link to="/" className="flex shrink-0 items-center gap-2.5" aria-label="Campus Crate home"><img src="/campus-crate-logo.png" alt="" className="size-9 object-contain" /><span className="font-display text-lg font-bold">Campus Crate</span></Link>
        <nav className="hidden items-center gap-1 lg:flex">{links.map((link) => <Link key={link.to} to={link.to} className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition hover:bg-accent hover:text-foreground" activeProps={{ className: "bg-accent text-foreground" }}>{link.label}</Link>)}</nav>
        <form onSubmit={runSearch} className="mx-auto hidden h-10 max-w-md flex-1 items-center rounded-xl border border-border bg-muted/60 md:flex">
          <select name="section" aria-label="Search category" className="h-full w-28 bg-transparent px-3 text-xs font-semibold text-foreground outline-none"><option value="all">All</option><option value="lost">Lost & Found</option><option value="market">Marketplace</option><option value="to-let">To-let</option><option value="food">Food</option></select><span className="h-5 w-px bg-border"/><Search className="mx-3 size-4 text-muted-foreground"/><input name="query" aria-label="Search Campus Crate" placeholder="Search campus…" className="min-w-0 flex-1 bg-transparent pr-3 text-sm outline-none placeholder:text-muted-foreground" />
        </form>
        <div className="ml-auto flex items-center gap-2">{!isAdmin && !isVendor && <Button className="hidden sm:inline-flex" onClick={() => requireLogin(() => setCreateOpen(true))}><Plus />Create Post</Button>}
          {signedIn && <DropdownMenu><DropdownMenuTrigger asChild><Button variant="ghost" size="icon" className="relative rounded-full" aria-label="Notifications"><Bell/>{notifications.length > 0 && <span className="absolute right-0 top-0 size-2 rounded-full bg-primary"/>}</Button></DropdownMenuTrigger><DropdownMenuContent align="end" className="w-80"><div className="px-2 py-1.5 text-sm font-semibold">Notifications</div><DropdownMenuSeparator/>{notifications.slice(0, 6).map((note) => <div key={note.notificationId} className="px-2 py-2 text-sm"><p className="font-medium">{note.title}</p><p className="mt-0.5 text-xs text-muted-foreground">{note.message}</p></div>)}{!notifications.length && <p className="p-4 text-sm text-muted-foreground">No notifications yet.</p>}</DropdownMenuContent></DropdownMenu>}<DropdownMenu><DropdownMenuTrigger asChild><Button variant="ghost" size="icon" className="rounded-full" aria-label="Account menu"><Avatar className="size-8">{user.profileImgUrl && <AvatarImage src={user.profileImgUrl} alt={`${displayName}'s profile`} />}<AvatarFallback>{signedIn ? initials : "?"}</AvatarFallback></Avatar></Button></DropdownMenuTrigger><DropdownMenuContent align="end">{signedIn ? <><div className="px-2 py-1.5"><p className="text-sm font-semibold">{displayName}</p><p className="text-xs text-muted-foreground">{isAdmin ? "Administrator" : isVendor ? "Food vendor" : user.email || "Signed-in student"}</p></div><DropdownMenuSeparator/>{isAdmin ? <DropdownMenuItem asChild><Link to="/admin"><ShieldCheck/>Admin dashboard</Link></DropdownMenuItem> : isVendor ? <><DropdownMenuItem asChild><Link to="/vendor"><UserRound/>Vendor dashboard</Link></DropdownMenuItem><DropdownMenuItem asChild><Link to="/edit-profile"><Settings/>Edit profile</Link></DropdownMenuItem></> : <><DropdownMenuItem asChild><Link to="/my-listings"><UserRound/>My listings</Link></DropdownMenuItem><DropdownMenuItem asChild><Link to="/edit-profile"><Settings/>Edit profile</Link></DropdownMenuItem><DropdownMenuItem onClick={() => setCreateOpen(true)}><Plus/>Create post</DropdownMenuItem></>}<DropdownMenuSeparator/><DropdownMenuItem onClick={signOut}><LogIn/>Sign out</DropdownMenuItem></> : <><DropdownMenuItem asChild><Link to="/login"><LogIn/>Sign in</Link></DropdownMenuItem><DropdownMenuItem asChild><Link to="/signup"><UserPlus/>Create account</Link></DropdownMenuItem></>}</DropdownMenuContent></DropdownMenu>
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">{mobileOpen ? <X/> : <Menu/>}</Button>
        </div>
      </div>
      {mobileOpen && <nav className="container-shell grid gap-1 border-t border-border py-3 lg:hidden">{links.map((link) => <Link key={link.to} to={link.to} onClick={() => setMobileOpen(false)} className="rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent">{link.label}</Link>)}{!isAdmin && !isVendor && <Button className="mt-2 sm:hidden" onClick={() => requireLogin(() => setCreateOpen(true))}><Plus/>Create Post</Button>}</nav>}
    </header><CreatePostDialog open={createOpen} onOpenChange={setCreateOpen}/>
  </>;
}
