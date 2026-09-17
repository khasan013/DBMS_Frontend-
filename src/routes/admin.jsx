import { useEffect, useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Loader2, ShieldCheck, UserCheck, UserX, Users } from "lucide-react";
import { toast } from "sonner";
import { api, getSession } from "@/lib/api";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/admin")({ component: AdminPage });

function AdminPage() {
  const navigate = useNavigate();
  const session = getSession();
  const admin = session?.user;
  const isAdmin = session?.role === "ADMIN" || Boolean(admin?.adminId);
  const [profile, setProfile] = useState(null);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updatingUserId, setUpdatingUserId] = useState(null);

  useEffect(() => {
    if (!isAdmin || !admin?.adminId) { navigate({ to: "/", replace: true }); return; }
    Promise.all([api(`/api/admin/${admin.adminId}`), api("/api/admin/users")])
      .then(([adminProfile, userList]) => { setProfile(adminProfile); setUsers(userList); })
      .catch((error) => toast.error(error.message))
      .finally(() => setLoading(false));
  }, [admin?.adminId, isAdmin, navigate]);

  const setSuspended = (user, suspended) => {
    setUpdatingUserId(user.userId);
    api(`/api/admin/users/${user.userId}/suspension`, { method: "PUT", body: JSON.stringify({ suspended }) })
      .then((updated) => { setUsers((current) => current.map((item) => item.userId === updated.userId ? updated : item)); toast.success(`${updated.name} has been ${suspended ? "suspended" : "reactivated"}.`); })
      .catch((error) => toast.error(error.message))
      .finally(() => setUpdatingUserId(null));
  };

  if (!isAdmin) return null;
  return <main className="container-shell py-10"><section className="flex flex-col justify-between gap-5 border-b border-border pb-8 sm:flex-row sm:items-end"><div><p className="eyebrow">ADMINISTRATION</p><h1 className="mt-2 font-display text-3xl font-bold">Admin dashboard</h1><p className="mt-2 text-muted-foreground">Manage your profile and student account access.</p></div>{profile && <div className="rounded-xl border border-border bg-card px-4 py-3 text-sm shadow-soft"><p className="flex items-center gap-1.5 font-semibold"><ShieldCheck className="size-4 text-success" />{profile.name}</p><p className="mt-1 text-muted-foreground">{profile.email} · {profile.phone}</p></div>}</section>{loading ? <div className="flex justify-center py-20"><Loader2 className="animate-spin text-primary" /></div> : <section className="py-8"><div className="mb-5 flex items-center gap-2"><Users className="text-primary" /><div><h2 className="font-display text-xl font-semibold">Student accounts</h2><p className="text-sm text-muted-foreground">Suspend accounts to immediately block sign-in and posting.</p></div></div><div className="overflow-hidden rounded-xl border border-border bg-card"><div className="overflow-x-auto"><table className="w-full min-w-[720px] text-left text-sm"><thead className="border-b border-border bg-surface-subtle text-muted-foreground"><tr><th className="px-5 py-3 font-semibold">Student</th><th className="px-5 py-3 font-semibold">Email</th><th className="px-5 py-3 font-semibold">Phone</th><th className="px-5 py-3 font-semibold">Status</th><th className="px-5 py-3 text-right font-semibold">Action</th></tr></thead><tbody>{users.map((user) => <tr key={user.userId} className="border-b border-border last:border-0"><td className="px-5 py-4"><p className="font-semibold">{user.name}</p><p className="text-xs text-muted-foreground">{user.studentId}</p></td><td className="px-5 py-4">{user.email}</td><td className="px-5 py-4">{user.phone}</td><td className="px-5 py-4"><span className={user.suspended ? "rounded-full bg-danger-soft px-2 py-1 text-xs font-semibold text-danger" : "rounded-full bg-success-soft px-2 py-1 text-xs font-semibold text-success"}>{user.suspended ? "Suspended" : user.emailVerified ? "Active" : "Unverified"}</span></td><td className="px-5 py-4 text-right"><Button size="sm" variant={user.suspended ? "outline" : "destructive"} disabled={updatingUserId === user.userId} onClick={() => setSuspended(user, !user.suspended)}>{updatingUserId === user.userId ? <Loader2 className="animate-spin" /> : user.suspended ? <UserCheck /> : <UserX />}{user.suspended ? "Reactivate" : "Suspend"}</Button></td></tr>)}{users.length === 0 && <tr><td colSpan="5" className="px-5 py-16 text-center text-muted-foreground">No student accounts found.</td></tr>}</tbody></table></div></div></section>}</main>;
}
