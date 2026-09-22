import { useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { api } from "@/services/api";

export const Route = createFileRoute("/reset-password")({ component: ResetPasswordPage });

export function ResetPasswordPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState("request");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const requestCode = async (event) => {
    event.preventDefault();
    if (!email.trim()) return toast.error("Enter your account email address.");
    setLoading(true);
    try {
      await api("/api/users/password-reset", {
        method: "POST",
        body: JSON.stringify({ email: email.trim() }),
      });
      setStep("confirm");
      toast.success("If that email has an account, a reset OTP has been sent.");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const resetPassword = async (event) => {
    event.preventDefault();
    if (!/^\d{6}$/.test(code))
      return toast.error("Enter the six-digit OTP from your email.");
    if (password.length < 8)
      return toast.error("Your new password must be at least 8 characters.");
    if (password !== confirmPassword)
      return toast.error("The passwords do not match.");
    setLoading(true);
    try {
      await api("/api/users/password-reset/confirm", {
        method: "POST",
        body: JSON.stringify({ email: email.trim(), code, password }),
      });
      toast.success("Password updated. You can now sign in.");
      navigate({ to: "/login" });
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="container-shell flex min-h-[calc(100vh-4rem)] items-center justify-center py-12">
      <div className="w-full max-w-md rounded-xl border border-border bg-card p-7 shadow-soft">
        <img
          src="/campus-crate-logo.png"
          alt="Campus Crate"
          className="size-11 object-contain"
        />
        <h1 className="mt-5 font-display text-2xl font-bold">
          Reset your password
        </h1>
        <p className="mt-1.5 text-sm text-muted-foreground">
          {step === "request"
            ? "We will send a six-digit OTP to your registered email."
            : `Enter the OTP sent to ${email}.`}
        </p>
        {step === "request" ? (
          <form className="mt-6 space-y-4" onSubmit={requestCode} noValidate>
            <div className="space-y-2">
              <Label htmlFor="reset-email">Account email</Label>
              <Input
                id="reset-email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading && <Loader2 className="animate-spin" />}Send OTP
            </Button>
          </form>
        ) : (
          <form className="mt-6 space-y-4" onSubmit={resetPassword} noValidate>
            <div className="space-y-2">
              <Label htmlFor="reset-code">Email OTP</Label>
              <Input
                id="reset-code"
                inputMode="numeric"
                autoComplete="one-time-code"
                maxLength={6}
                placeholder="123456"
                value={code}
                onChange={(event) =>
                  setCode(event.target.value.replace(/\D/g, ""))
                }
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="new-password">New password</Label>
              <Input
                id="new-password"
                type="password"
                autoComplete="new-password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm new password</Label>
              <Input
                id="confirm-password"
                type="password"
                autoComplete="new-password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading && <Loader2 className="animate-spin" />}Update password
            </Button>
            <Button
              type="button"
              variant="ghost"
              className="w-full"
              disabled={loading}
              onClick={() => setStep("request")}
            >
              Use another email
            </Button>
          </form>
        )}
        <p className="mt-6 text-center text-sm text-muted-foreground">
          <Link
            to="/login"
            className="font-semibold text-primary hover:underline"
          >
            Back to sign in
          </Link>
        </p>
      </div>
    </main>
  );
}
