import { useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { api, saveSession } from "@/services/api";

export const Route = createFileRoute("/login")({ component: LoginPage });

export function LoginPage() {
  const navigate = useNavigate();
  const [values, setValues] = useState({ identifier: "", password: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const submit = (event) => {
    event.preventDefault();
    const next = {};
    if (!values.identifier.trim()) next.identifier = "Enter your student ID or admin email.";
    if (values.password.length < 8) next["password"] = "Password must be at least 8 characters.";
    setErrors(next);
    if (Object.keys(next).length) return;
    setLoading(true);
    const identifier = values.identifier.trim();
    const isAdminLogin = identifier.includes("@");
    const endpoint = isAdminLogin ? "/api/admin/login" : "/api/users/login";
    const request = isAdminLogin
      ? { email: identifier, password: values.password }
      : { studentId: identifier, password: values.password };
    api(endpoint, { method: "POST", body: JSON.stringify(request) })
      .then((result) => {
        const account = result.user ?? result;
        saveSession({ token: result.accessToken, role: isAdminLogin ? "ADMIN" : "USER", user: account });
        toast.success(isAdminLogin ? "Welcome back, administrator" : "Welcome back to Campus Crate");
        navigate({ to: isAdminLogin ? "/admin" : "/my-listings" });
      })
      .catch((error) => toast.error(error.message))
      .finally(() => setLoading(false));
  };

  return (
    <main className="container-shell flex min-h-[calc(100vh-4rem)] items-center justify-center py-12">
      <div className="w-full max-w-md rounded-xl border border-border bg-card p-7 shadow-soft">
        <img src="/campus-crate-logo.png" alt="Campus Crate" className="size-11 object-contain" />
        <h1 className="mt-5 font-display text-2xl font-bold">Welcome back</h1>
        <p className="mt-1.5 text-sm text-muted-foreground">Sign in to manage your campus listings.</p>
        <form className="mt-6 space-y-4" onSubmit={submit} noValidate>
          <div className="space-y-2">
            <Label htmlFor="identifier">Student ID or admin email</Label>
            <Input id="identifier" autoComplete="username" placeholder="e.g. 20230001 or admin@example.com" value={values.identifier} onChange={(e) => setValues({ ...values, identifier: e.target.value })} aria-invalid={!!errors.identifier} />
            {errors.identifier && <p className="text-xs font-medium text-danger">{errors.identifier}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" autoComplete="current-password" placeholder="••••••••" value={values.password} onChange={(e) => setValues({ ...values, password: e.target.value })} aria-invalid={!!errors["password"]} />
            {errors["password"] && <p className="text-xs font-medium text-danger">{errors["password"]}</p>}
          </div>
          <div className="text-right text-sm"><Link to="/reset-password" className="font-semibold text-primary hover:underline">Forgot password?</Link></div>
          <Button type="submit" className="w-full" disabled={loading}>{loading && <Loader2 className="animate-spin" />}Sign in</Button>
        </form>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          New to Campus Crate? <Link to="/signup" className="font-semibold text-primary hover:underline">Create an account</Link>
        </p>
      </div>
    </main>
  );
}
