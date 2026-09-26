import { useEffect, useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import {
  ClipboardList,
  Loader2,
  ShieldCheck,
  UserCheck,
  UserX,
  Trash2,
  Users,
  Store,
} from "lucide-react";
import { toast } from "sonner";
import { api, getSession } from "@/services/api";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/admin")({ component: AdminPage });

const postModules = [
  {
    key: "lost",
    title: "Lost & Found",
    endpoint: "/api/admin/items",
    adminEndpoint: "/api/admin/items",
    id: "itemId",
    statuses: ["LOST", "FOUND", "RETURNED", "RESOLVED"],
  },
  {
    key: "market",
    title: "Marketplace",
    endpoint: "/api/admin/marketplace/posts",
    adminEndpoint: "/api/admin/marketplace/posts",
    id: "postId",
    statuses: ["ACTIVE", "SOLD", "CANCELLED"],
  },
  {
    key: "toLet",
    title: "To-let",
    endpoint: "/api/admin/to-let/listings",
    adminEndpoint: "/api/admin/to-let/listings",
    id: "listingId",
    statuses: ["AVAILABLE", "RENTED", "CLOSED"],
  },
];

export function AdminPage() {
  const navigate = useNavigate();
  const session = getSession();
  const admin = session?.user;
  const isAdmin = session?.role === "ADMIN" || Boolean(admin?.adminId);
  const [profile, setProfile] = useState(null);
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState({ lost: [], market: [], toLet: [] });
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState("");
  const [vendors, setVendors] = useState([]);
  const [vendorForm, setVendorForm] = useState({ loginId: "", name: "", email: "", password: "", phone: "", location: "", description: "" });

  useEffect(() => {
    if (!isAdmin || !admin?.adminId) {
      navigate({ to: "/", replace: true });
      return;
    }
    Promise.all([
      api(`/api/admin/${admin.adminId}`),
      api("/api/admin/users"),
      api("/api/admin/vendors"),
      ...postModules.map((module) => api(module.endpoint)),
    ])
      .then(([adminProfile, userList, vendorList, ...postLists]) => {
        setProfile(adminProfile);
        setUsers(userList);
        setVendors(vendorList);
        setPosts(
          Object.fromEntries(
            postModules.map((module, index) => [module.key, postLists[index]]),
          ),
        );
      })
      .catch((error) => toast.error(error.message))
      .finally(() => setLoading(false));
  }, [admin?.adminId, isAdmin, navigate]);

  const setSuspended = (user, suspended) => {
    setUpdating(`user-${user.userId}`);
    api(`/api/admin/users/${user.userId}/suspension`, {
      method: "PUT",
      body: JSON.stringify({ suspended }),
    })
      .then((updated) => {
        setUsers((current) =>
          current.map((item) =>
            item.userId === updated.userId ? updated : item,
          ),
        );
        toast.success(
          `${updated.name} has been ${suspended ? "suspended" : "reactivated"}.`,
        );
      })
      .catch((error) => toast.error(error.message))
      .finally(() => setUpdating(""));
  };
  const createVendor = (event) => { event.preventDefault(); setUpdating("vendor"); api("/api/admin/vendors", { method: "POST", body: JSON.stringify(vendorForm) }).then((vendor) => { setVendors((current) => [vendor, ...current]); setVendorForm({ loginId: "", name: "", email: "", password: "", phone: "", location: "", description: "" }); toast.success("Vendor account created."); }).catch((error) => toast.error(error.message)).finally(() => setUpdating("")); };
  const setStatus = (module, post, status) => {
    const postId = post[module.id];
    setUpdating(`${module.key}-${postId}`);
    api(`${module.adminEndpoint}/${postId}/status`, {
      method: "PUT",
      body: JSON.stringify({ status }),
    })
      .then((updated) => {
        setPosts((current) => ({
          ...current,
          [module.key]: current[module.key].map((item) =>
            item[module.id] === postId ? updated : item,
          ),
        }));
        toast.success(`${module.title} post marked ${status.toLowerCase()}.`);
      })
      .catch((error) => toast.error(error.message))
      .finally(() => setUpdating(""));
  };
  const deletePost = (module, post) => {
    const postId = post[module.id];
    if (!window.confirm(`Delete this ${module.title} post? This cannot be undone.`)) return;
    setUpdating(`${module.key}-${postId}`);
    api(`${module.adminEndpoint}/${postId}`, { method: "DELETE" })
      .then(() => {
        setPosts((current) => ({
          ...current,
          [module.key]: current[module.key].filter((item) => item[module.id] !== postId),
        }));
        toast.success(`${module.title} post deleted.`);
      })
      .catch((error) => toast.error(error.message))
      .finally(() => setUpdating(""));
  };
  const deleteUser = (user) => {
    if (!window.confirm(`Delete ${user.name}'s account and all of their posts? This cannot be undone.`)) return;
    setUpdating(`user-${user.userId}`);
    api(`/api/admin/users/${user.userId}`, { method: "DELETE" })
      .then(() => {
        setUsers((current) => current.filter((item) => item.userId !== user.userId));
        toast.success(`${user.name}'s account was deleted.`);
      })
      .catch((error) => toast.error(error.message))
      .finally(() => setUpdating(""));
  };

  if (!isAdmin) return null;
  return (
    <main className="container-shell py-10">
      <section className="flex flex-col justify-between gap-5 border-b border-border pb-8 sm:flex-row sm:items-end">
        <div>
          <p className="eyebrow">ADMINISTRATION</p>
          <h1 className="mt-2 font-display text-3xl font-bold">
            Admin dashboard
          </h1>
          <p className="mt-2 text-muted-foreground">
            Manage your profile, student accounts, and community posts.
          </p>
        </div>
        {profile && (
          <div className="rounded-xl border border-border bg-card px-4 py-3 text-sm shadow-soft">
            <p className="flex items-center gap-1.5 font-semibold">
              <ShieldCheck className="size-4 text-success" />
              {profile.name}
            </p>
            <p className="mt-1 text-muted-foreground">
              {profile.email} · {profile.phone}
            </p>
          </div>
        )}
      </section>
      {loading ? (
        <div className="flex justify-center py-20">
          <Loader2 className="animate-spin text-primary" />
        </div>
      ) : (
        <>
          <section className="py-8">
            <div className="mb-5 flex items-center gap-2">
              <Users className="text-primary" />
              <div>
                <h2 className="font-display text-xl font-semibold">
                  Student accounts
                </h2>
                <p className="text-sm text-muted-foreground">
                  Suspension immediately blocks sign-in and posting.
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-xl border border-border bg-card">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[720px] text-left text-sm">
                  <thead className="border-b border-border bg-surface-subtle text-muted-foreground">
                    <tr>
                      <th className="px-5 py-3 font-semibold">Student</th>
                      <th className="px-5 py-3 font-semibold">Email</th>
                      <th className="px-5 py-3 font-semibold">Phone</th>
                      <th className="px-5 py-3 font-semibold">Status</th>
                      <th className="px-5 py-3 text-right font-semibold">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <tr
                        key={user.userId}
                        className="border-b border-border last:border-0"
                      >
                        <td className="px-5 py-4">
                          <p className="font-semibold">{user.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {user.studentId}
                          </p>
                        </td>
                        <td className="px-5 py-4">{user.email}</td>
                        <td className="px-5 py-4">{user.phone}</td>
                        <td className="px-5 py-4">
                          <StatusBadge
                            status={
                              user.suspended
                                ? "SUSPENDED"
                                : user.emailVerified
                                  ? "ACTIVE"
                                  : "UNVERIFIED"
                            }
                          />
                        </td>
                        <td className="px-5 py-4 text-right">
                          <div className="flex justify-end gap-2">
                          <Button
                            size="sm"
                            variant={user.suspended ? "outline" : "destructive"}
                            disabled={updating === `user-${user.userId}`}
                            onClick={() => setSuspended(user, !user.suspended)}
                          >
                            {updating === `user-${user.userId}` ? (
                              <Loader2 className="animate-spin" />
                            ) : user.suspended ? (
                              <UserCheck />
                            ) : (
                              <UserX />
                            )}
                            {user.suspended ? "Reactivate" : "Suspend"}
                          </Button>
                          <Button
                            size="sm"
                            variant="destructive"
                            disabled={updating === `user-${user.userId}`}
                            onClick={() => deleteUser(user)}
                          >
                            <Trash2 />
                            Delete
                          </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                    {users.length === 0 && (
                      <tr>
                        <td
                          colSpan="5"
                          className="px-5 py-16 text-center text-muted-foreground"
                        >
                          No student accounts found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
          <section className="border-t border-border py-8">
            <div className="mb-5 flex items-center gap-2"><Store className="text-primary" /><div><h2 className="font-display text-xl font-semibold">Food vendors</h2><p className="text-sm text-muted-foreground">Create vendor accounts. Vendors use their login ID and password to manage menu items.</p></div></div>
            <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr]"><form onSubmit={createVendor} className="grid gap-3 rounded-xl border border-border bg-card p-5 sm:grid-cols-2"><input required placeholder="Vendor login ID" value={vendorForm.loginId} onChange={(e) => setVendorForm({ ...vendorForm, loginId: e.target.value })} className="h-10 rounded-md border border-input bg-background px-3 text-sm"/><input required placeholder="Vendor name" value={vendorForm.name} onChange={(e) => setVendorForm({ ...vendorForm, name: e.target.value })} className="h-10 rounded-md border border-input bg-background px-3 text-sm"/><input required type="email" placeholder="Email" value={vendorForm.email} onChange={(e) => setVendorForm({ ...vendorForm, email: e.target.value })} className="h-10 rounded-md border border-input bg-background px-3 text-sm"/><input required type="password" minLength="8" placeholder="Temporary password" value={vendorForm.password} onChange={(e) => setVendorForm({ ...vendorForm, password: e.target.value })} className="h-10 rounded-md border border-input bg-background px-3 text-sm"/><input required placeholder="Phone" value={vendorForm.phone} onChange={(e) => setVendorForm({ ...vendorForm, phone: e.target.value })} className="h-10 rounded-md border border-input bg-background px-3 text-sm"/><input required placeholder="Location" value={vendorForm.location} onChange={(e) => setVendorForm({ ...vendorForm, location: e.target.value })} className="h-10 rounded-md border border-input bg-background px-3 text-sm"/><textarea placeholder="Description (optional)" value={vendorForm.description} onChange={(e) => setVendorForm({ ...vendorForm, description: e.target.value })} className="min-h-20 rounded-md border border-input bg-background p-3 text-sm sm:col-span-2"/><Button className="sm:col-span-2" disabled={updating === "vendor"}>{updating === "vendor" ? "Creating vendor…" : "Create vendor"}</Button></form><div className="divide-y divide-border overflow-hidden rounded-xl border border-border bg-card">{vendors.map((vendor) => <div key={vendor.vendorId} className="p-4"><p className="font-semibold">{vendor.name}</p><p className="mt-1 text-sm text-muted-foreground">{vendor.location} · {vendor.phone}</p><p className="mt-1 text-xs text-muted-foreground">{vendor.foodItems?.length ?? 0} food item(s)</p></div>)}{!vendors.length && <p className="p-8 text-center text-sm text-muted-foreground">No vendors created yet.</p>}</div></div>
          </section>
          <section className="border-t border-border py-8">
            <div className="mb-5 flex items-center gap-2">
              <ClipboardList className="text-primary" />
              <div>
                <h2 className="font-display text-xl font-semibold">
                  Post management
                </h2>
                <p className="text-sm text-muted-foreground">
                  Update the status of any community post.
                </p>
              </div>
            </div>
            <div className="grid gap-6 xl:grid-cols-3">
              {postModules.map((module) => (
                <PostPanel
                  key={module.key}
                  module={module}
                  posts={posts[module.key]}
                  updating={updating}
                  onStatusChange={setStatus}
                  onDelete={deletePost}
                />
              ))}
            </div>
          </section>
        </>
      )}
    </main>
  );
}

function PostPanel({ module, posts, updating, onStatusChange, onDelete }) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card">
      <div className="border-b border-border bg-surface-subtle px-4 py-3">
        <h3 className="font-display font-semibold">{module.title}</h3>
        <p className="text-xs text-muted-foreground">
          {posts.length} post{posts.length === 1 ? "" : "s"}
        </p>
      </div>
      <div className="max-h-[440px] divide-y divide-border overflow-y-auto">
        {posts.map((post) => {
          const postId = post[module.id];
          return (
            <article key={postId} className="p-4">
              <p className="line-clamp-1 font-semibold">{post.title}</p>
              <p className="mt-1 text-xs text-muted-foreground">
                {module.key === "toLet"
                  ? post.area
                  : module.key === "market"
                    ? post.condition
                    : post.itemType}
              </p>
              <div className="mt-3 flex items-center gap-2">
                <StatusBadge status={post.status} />
                <select
                  value={post.status}
                  disabled={updating === `${module.key}-${postId}`}
                  onChange={(event) =>
                    onStatusChange(module, post, event.target.value)
                  }
                  className="h-8 flex-1 rounded-md border border-input bg-background px-2 text-xs"
                >
                  {module.statuses.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
                {updating === `${module.key}-${postId}` && (
                  <Loader2 className="size-4 animate-spin text-primary" />
                )}
                <Button
                  size="icon"
                  variant="destructive"
                  aria-label={`Delete ${module.title} post`}
                  disabled={updating === `${module.key}-${postId}`}
                  onClick={() => onDelete(module, post)}
                >
                  <Trash2 />
                </Button>
              </div>
            </article>
          );
        })}
        {posts.length === 0 && (
          <p className="p-8 text-center text-sm text-muted-foreground">
            No posts found.
          </p>
        )}
      </div>
    </div>
  );
}

function StatusBadge({ status }) {
  return (
    <span
      className={
        status === "SUSPENDED" || status === "CANCELLED"
          ? "rounded-full bg-danger-soft px-2 py-1 text-xs font-semibold text-danger"
          : status === "SOLD" ||
              status === "RETURNED" ||
              status === "RENTED" ||
              status === "RESOLVED"
            ? "rounded-full bg-success-soft px-2 py-1 text-xs font-semibold text-success"
            : "rounded-full bg-primary-soft px-2 py-1 text-xs font-semibold text-primary"
      }
    >
      {status}
    </span>
  );
}
