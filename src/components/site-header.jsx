import { useEffect, useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { LogIn, Menu, Moon, Plus, Search, Settings, ShieldCheck, Sun, UserPlus, UserRound, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { CreatePostDialog } from "@/components/create-post-dialog";
import { clearSession, getSession } from "@/lib/api";

export function SiteHeader() {
  const [createOpen, setCreateOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [session, setSession] = useState(() => getSession());
  const navigate = useNavigate();
  useEffect(() => {
    const refreshSession = () => setSession(getSession());
    window.addEventListener("campus-crate-auth-change", refreshSession);
    window.addEventListener("storage", refreshSession);
    return () => {
      window.removeEventListener("campus-crate-auth-change", refreshSession);
      window.removeEventListener("storage", refreshSession);
    };
  }, []);
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
  const runSearch = (event) => { event.preventDefault(); const form = new FormData(event.currentTarget); const section = String(form.get("section")); if (section === "lost") navigate({ to: "/lost-and-found" }); else if (section === "market") navigate({ to: "/marketplace" }); else if (section === "to-let") navigate({ to: "/to-let" }); };
  const links = [{ to: "/lost-and-found", label: "Lost & Found" }, { to: "/marketplace", label: "Marketplace" }, { to: "/to-let", label: "To-let" }];
  return <>
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/92 backdrop-blur-xl">
      <div className="container-shell flex h-16 items-center gap-5">
        <Link to="/" className="flex shrink-0 items-center gap-2.5" aria-label="Campus Crate home"><img src="/campus-crate-logo.png" alt="" className="size-9 object-contain" /><span className="font-display text-lg font-bold">Campus Crate</span></Link>
        <nav className="hidden items-center gap-1 lg:flex">{links.map((link) => <Link key={link.to} to={link.to} className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition hover:bg-accent hover:text-foreground" activeProps={{ className: "bg-accent text-foreground" }}>{link.label}</Link>)}</nav>
        <form onSubmit={runSearch} className="mx-auto hidden h-10 max-w-md flex-1 items-center rounded-xl border border-border bg-muted/60 md:flex">
          <select name="section" aria-label="Search category" className="h-full w-28 bg-transparent px-3 text-xs font-semibold text-foreground outline-none"><option value="all">All</option><option value="lost">Lost & Found</option><option value="market">Marketplace</option><option value="to-let">To-let</option></select><span className="h-5 w-px bg-border"/><Search className="mx-3 size-4 text-muted-foreground"/><input name="query" aria-label="Search Campus Crate" placeholder="Search campus…" className="min-w-0 flex-1 bg-transparent pr-3 text-sm outline-none placeholder:text-muted-foreground" />
        </form>
        <div className="ml-auto flex items-center gap-2">{!isAdmin && <Button className="hidden sm:inline-flex" onClick={() => requireLogin(() => setCreateOpen(true))}><Plus />Create Post</Button>}<Button variant="ghost" size="icon" className="hidden sm:inline-flex" aria-label="Toggle theme" onClick={() => { document.documentElement.classList.toggle("dark"); setDark(!dark); }}>{dark ? <Sun /> : <Moon />}</Button>
          <DropdownMenu><DropdownMenuTrigger asChild><Button variant="ghost" size="icon" className="rounded-full" aria-label="Account menu"><Avatar className="size-8">{user.profileImgUrl && <AvatarImage src={user.profileImgUrl} alt={`${displayName}'s profile`} />}<AvatarFallback>{signedIn ? initials : "?"}</AvatarFallback></Avatar></Button></DropdownMenuTrigger><DropdownMenuContent align="end">{signedIn ? <><div className="px-2 py-1.5"><p className="text-sm font-semibold">{displayName}</p><p className="text-xs text-muted-foreground">{isAdmin ? "Administrator" : user.email || "Signed-in student"}</p></div><DropdownMenuSeparator/>{isAdmin ? <DropdownMenuItem asChild><Link to="/admin"><ShieldCheck/>Admin dashboard</Link></DropdownMenuItem> : <><DropdownMenuItem asChild><Link to="/my-listings"><UserRound/>My listings</Link></DropdownMenuItem><DropdownMenuItem asChild><Link to="/edit-profile"><Settings/>Edit profile</Link></DropdownMenuItem><DropdownMenuItem onClick={() => setCreateOpen(true)}><Plus/>Create post</DropdownMenuItem></>}<DropdownMenuSeparator/><DropdownMenuItem onClick={signOut}><LogIn/>Sign out</DropdownMenuItem></> : <><DropdownMenuItem asChild><Link to="/login"><LogIn/>Sign in</Link></DropdownMenuItem><DropdownMenuItem asChild><Link to="/signup"><UserPlus/>Create account</Link></DropdownMenuItem></>}</DropdownMenuContent></DropdownMenu>
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">{mobileOpen ? <X/> : <Menu/>}</Button>
        </div>
      </div>
      {mobileOpen && <nav className="container-shell grid gap-1 border-t border-border py-3 lg:hidden">{links.map((link) => <Link key={link.to} to={link.to} onClick={() => setMobileOpen(false)} className="rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent">{link.label}</Link>)}{!isAdmin && <Button className="mt-2 sm:hidden" onClick={() => requireLogin(() => setCreateOpen(true))}><Plus/>Create Post</Button>}</nav>}
    </header><CreatePostDialog open={createOpen} onOpenChange={setCreateOpen}/>
  </>;
}
