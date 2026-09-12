import { useEffect, useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";
import { api } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
const OTP_LIFETIME_SECONDS = 10 * 60;

const formatTime = (seconds) => `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;

export const Route = createFileRoute("/verify-email")({
  validateSearch: (search) => ({ email: search.email ?? "" }),
  component: VerifyEmail,
});

function VerifyEmail() {
  const navigate = useNavigate();
  const { email: initialEmail } = Route.useSearch();
  const [email, setEmail] = useState(initialEmail);
  const [code, setCode] = useState("");
  const [busy, setBusy] = useState(false);
  const [resendBusy, setResendBusy] = useState(false);
  const [remainingSeconds, setRemainingSeconds] = useState(OTP_LIFETIME_SECONDS);

  useEffect(() => {
    const timer = window.setInterval(() => setRemainingSeconds((seconds) => Math.max(0, seconds - 1)), 1000);
    return () => window.clearInterval(timer);
  }, []);

  const verify = (event) => {
    event.preventDefault();
    setBusy(true);
    api("/api/users/verify-email", { method: "POST", body: JSON.stringify({ email, code }) })
      .then(() => { toast.success("Email verified. You can now sign in."); navigate({ to: "/login" }); })
      .catch((error) => toast.error(error.message))
      .finally(() => setBusy(false));
  };

  const resend = () => {
    if (resendBusy) return;
    setResendBusy(true);
    api("/api/users/resend-verification", { method: "POST", body: JSON.stringify({ email }) })
      .then(() => { setRemainingSeconds(OTP_LIFETIME_SECONDS); setCode(""); toast.success("A new code has been sent."); })
      .catch((error) => toast.error(error.message))
      .finally(() => setResendBusy(false));
  };

  return <main className="container-shell flex min-h-[calc(100vh-4rem)] items-center justify-center py-12">
    <form className="w-full max-w-md rounded-xl border bg-card p-7 shadow-soft" onSubmit={verify}>
      <h1 className="font-display text-2xl font-bold">Verify your email</h1>
      <p className="mt-2 text-sm text-muted-foreground">Enter the six-digit code sent to your email.</p>
      <p className={`mt-3 text-sm font-semibold ${remainingSeconds === 0 ? "text-danger" : "text-primary"}`}>{remainingSeconds === 0 ? "Your code has expired. Request a new one." : `Code expires in ${formatTime(remainingSeconds)}`}</p>
      <div className="mt-6 space-y-4"><div><Label htmlFor="email">Email</Label><Input id="email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} required /></div><div><Label htmlFor="code">Verification code</Label><Input id="code" inputMode="numeric" maxLength={6} value={code} onChange={(event) => setCode(event.target.value.replace(/\D/g, ""))} required /></div></div>
      <Button className="mt-6 w-full" disabled={busy || remainingSeconds === 0}>{busy ? "Verifying…" : "Verify email"}</Button>
      <Button type="button" variant="link" className="mt-2 w-full" disabled={resendBusy} onClick={resend}>{resendBusy ? "Sending…" : "Resend code"}</Button>
    </form>
  </main>;
}
