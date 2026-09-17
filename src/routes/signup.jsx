import { useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { api, saveSession } from "@/lib/api";

export const Route = createFileRoute("/signup")({
  head: () => ({
    meta: [
      { title: "Create Account — Campus Crate" },
      { name: "description", content: "Join Campus Crate to post lost items, sell things, and find student-friendly rentals." },
      { property: "og:title", content: "Create Account — Campus Crate" },
      { property: "og:description", content: "Join Campus Crate to post lost items, sell things, and find student-friendly rentals." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SignupPage,
});

function SignupPage() {
  const navigate = useNavigate();
  const [values, setValues] = useState({ name: "", studentId: "", email: "", phone: "", password: "", confirm: "" });
  const [agreed, setAgreed] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const submit = (event) => {
    event.preventDefault();
    const next = {};
    if (values.name.trim().length < 2) next["name"] = "Please enter your full name.";
    if (!values.studentId.trim()) next["studentId"] = "Student ID is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) next["email"] = "Enter a valid email address.";
    if (values.phone.replace(/\D/g, "").length < 7) next["phone"] = "Enter a valid phone number.";
    if (values.password.length < 8) next["password"] = "Use at least 8 characters.";
    if (values.confirm !== values.password) next["confirm"] = "Passwords do not match.";
    if (!agreed) next["agreed"] = "Please accept the community guidelines.";
    setErrors(next);
    if (Object.keys(next).length) return;
    setLoading(true);
    const { confirm, ...request } = values;
    api("/api/users/register", { method: "POST", body: JSON.stringify(request) })
      .then((user) => {
        saveSession({ user });
        toast.success("We sent a verification code to your email.");
        navigate({ to: "/verify-email", search: { email: values.email } });
      })
      .catch((error) => toast.error(error.message))
      .finally(() => setLoading(false));
  };

  return (
    <main className="container-shell flex min-h-[calc(100vh-4rem)] items-center justify-center py-12">
      <div className="w-full max-w-md rounded-xl border border-border bg-card p-7 shadow-soft">
        <img src="/campus-crate-logo.png" alt="Campus Crate" className="size-11 object-contain" />
        <h1 className="mt-5 font-display text-2xl font-bold">Create your account</h1>
        <p className="mt-1.5 text-sm text-muted-foreground">Verified students only — use your university email.</p>
        <form className="mt-6 space-y-4" onSubmit={submit} noValidate>
          <div className="space-y-2">
            <Label htmlFor="name">Full name</Label>
            <Input id="name" value={values.name} onChange={(e) => setValues({ ...values, name: e.target.value })} placeholder="Your full name" aria-invalid={!!errors["name"]} />
            {errors["name"] && <p className="text-xs font-medium text-danger">{errors["name"]}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="studentId">Student ID</Label>
            <Input id="studentId" value={values.studentId} onChange={(e) => setValues({ ...values, studentId: e.target.value })} placeholder="e.g. 20230001" aria-invalid={!!errors["studentId"]} />
            {errors["studentId"] && <p className="text-xs font-medium text-danger">{errors["studentId"]}</p>}
          </div>
          <div className="space-y-2"><Label htmlFor="email">Email address</Label><Input id="email" type="email" value={values.email} onChange={(e) => setValues({ ...values, email: e.target.value })} placeholder="you@university.edu" aria-invalid={!!errors["email"]} />{errors["email"] && <p className="text-xs font-medium text-danger">{errors["email"]}</p>}</div>
          <div className="space-y-2"><Label htmlFor="phone">Phone number</Label><Input id="phone" value={values.phone} onChange={(e) => setValues({ ...values, phone: e.target.value })} placeholder="+880 1XXXXXXXXX" aria-invalid={!!errors["phone"]} />{errors["phone"] && <p className="text-xs font-medium text-danger">{errors["phone"]}</p>}</div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" value={values.password} onChange={(e) => setValues({ ...values, password: e.target.value })} placeholder="••••••••" aria-invalid={!!errors["password"]} />
              {errors["password"] && <p className="text-xs font-medium text-danger">{errors["password"]}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm">Confirm password</Label>
              <Input id="confirm" type="password" value={values.confirm} onChange={(e) => setValues({ ...values, confirm: e.target.value })} placeholder="••••••••" aria-invalid={!!errors["confirm"]} />
              {errors["confirm"] && <p className="text-xs font-medium text-danger">{errors["confirm"]}</p>}
            </div>
          </div>
          <label className="flex items-start gap-2.5 text-sm text-muted-foreground">
            <Checkbox checked={agreed} onCheckedChange={(v) => setAgreed(!!v)} className="mt-0.5" />
            <span>I agree to the Campus Crate community guidelines.</span>
          </label>
          {errors["agreed"] && <p className="text-xs font-medium text-danger">{errors["agreed"]}</p>}
          <Button type="submit" className="w-full" disabled={loading}>{loading && <Loader2 className="animate-spin" />}Create account</Button>
        </form>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Already have an account? <Link to="/login" className="font-semibold text-primary hover:underline">Sign in</Link>
        </p>
      </div>
    </main>
  );
}
