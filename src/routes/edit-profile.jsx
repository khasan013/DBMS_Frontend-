import { useEffect, useRef, useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowLeft, Camera, Loader2, ShieldCheck } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RequireAuth } from "@/components/require-auth";
import { api, getSession, saveSession } from "@/lib/api";

export const Route = createFileRoute("/edit-profile")({ component: () => <RequireAuth><EditProfilePage /></RequireAuth> });

function EditProfilePage() {
  const navigate = useNavigate();
  const fileInput = useRef(null);
  const session = getSession();
  const userId = session?.user?.userId;
  const [profile, setProfile] = useState(session?.user ?? null);
  const [name, setName] = useState(session?.user?.name ?? "");
  const [phone, setPhone] = useState(session?.user?.phone ?? "");
  const [photoFile, setPhotoFile] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(session?.user?.profileImgUrl ?? "");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!userId) return;
    api(`/api/users/${userId}`).then((user) => { setProfile(user); setName(user.name); setPhone(user.phone); setPhotoPreview(user.profileImgUrl ?? ""); }).catch((error) => toast.error(error.message)).finally(() => setLoading(false));
  }, [userId]);

  const selectPhoto = (event) => {
    const selected = event.target.files?.[0];
    if (!selected) return;
    setPhotoFile(selected); setPhotoPreview(URL.createObjectURL(selected));
  };
  const save = async (event) => {
    event.preventDefault();
    if (name.trim().length < 2 || phone.replace(/\D/g, "").length < 7) { toast.error("Enter your name and a valid phone number."); return; }
    setSaving(true);
    try {
      let profileImgUrl = profile?.profileImgUrl ?? null;
      if (photoFile) { const body = new FormData(); body.append("file", photoFile); profileImgUrl = (await api("/api/uploads/images", { method: "POST", body })).imageUrl; }
      const updated = await api(`/api/users/${userId}`, { method: "PUT", body: JSON.stringify({ name: name.trim(), phone: phone.trim(), profileImgUrl }) });
      saveSession({ ...session, user: updated });
      toast.success("Profile updated."); navigate({ to: "/my-listings" });
    } catch (error) { toast.error(error.message); } finally { setSaving(false); }
  };
  const initials = (name || profile?.studentId || "?").split(/\s+/).map((part) => part[0]).join("").slice(0, 2).toUpperCase();

  return <main className="container-shell max-w-3xl py-10"><Link to="/my-listings" className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"><ArrowLeft className="size-4" />Back to my listings</Link><h1 className="mt-4 font-display text-3xl font-bold">Edit profile</h1><p className="mt-1.5 text-muted-foreground">Keep your account name, phone number, and photo current.</p>
    {loading ? <div className="flex justify-center py-16"><Loader2 className="animate-spin" /></div> : <form className="mt-8 space-y-8" onSubmit={save}><div className="flex flex-wrap items-center gap-5 rounded-xl border border-border bg-card p-5"><div className="relative"><div className="flex size-20 items-center justify-center overflow-hidden rounded-full bg-primary text-xl font-bold text-primary-foreground">{photoPreview ? <img src={photoPreview} alt="Profile" className="size-full object-cover" /> : initials}</div><label className="absolute -bottom-1 -right-1 flex size-8 cursor-pointer items-center justify-center rounded-full border border-border bg-background shadow-soft"><Camera className="size-4" /><span className="sr-only">Upload profile photo</span><input ref={fileInput} type="file" accept="image/jpeg,image/png,image/webp,image/gif" className="hidden" onChange={selectPhoto} /></label></div><div><p className="flex items-center gap-1.5 text-sm font-semibold"><ShieldCheck className="size-4 text-success" />{profile?.emailVerified ? "Verified Student" : "Email verification pending"}</p><p className="mt-1 text-sm text-muted-foreground">JPEG, PNG, WebP, or GIF up to 10 MB.</p></div></div><div className="grid gap-5 sm:grid-cols-2"><div className="space-y-2"><Label htmlFor="name">Full name</Label><Input id="name" value={name} onChange={(event) => setName(event.target.value)} required /></div><div className="space-y-2"><Label htmlFor="email">Email</Label><Input id="email" value={profile?.email ?? ""} readOnly disabled /><p className="text-xs text-muted-foreground">Email is set when the account is created.</p></div><div className="space-y-2"><Label htmlFor="phone">Phone</Label><Input id="phone" value={phone} onChange={(event) => setPhone(event.target.value)} required /></div><div className="space-y-2"><Label htmlFor="student-id">Student ID</Label><Input id="student-id" value={profile?.studentId ?? ""} readOnly disabled /></div></div><div className="flex flex-wrap gap-3"><Button type="submit" disabled={saving}>{saving && <Loader2 className="animate-spin" />}Save changes</Button><Button type="button" variant="outline" onClick={() => navigate({ to: "/my-listings" })}>Cancel</Button></div></form>}
  </main>;
}
