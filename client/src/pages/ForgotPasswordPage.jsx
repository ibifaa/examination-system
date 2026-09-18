import { useState } from "react";
import { Mail, KeyRound, Send, CheckCircle, ArrowLeft } from "lucide-react";
import Logo from "../components/ui/Logo";
import PrimaryButton from "../components/ui/PrimaryButton";
import InputField from "../components/ui/InputField";

const shadow = {
  boxShadow:
    "0 4px 24px rgba(37,99,235,0.07), 0 1px 4px rgba(0,0,0,0.06)",
};

export default function ForgotPasswordPage({ nav }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const submit = () => {
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Enter a valid email address.");
      return;
    }

    setError("");
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center px-5 py-12">
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-8">
          <Logo onClick={() => nav("landing")} />
        </div>

        <div className="bg-white rounded-2xl p-8" style={shadow}>
          {!sent ? (
            <>
              <div className="w-12 h-12 rounded-2xl bg-[#DBEAFE] flex items-center justify-center mb-5">
                <KeyRound className="w-6 h-6 text-[#2563EB]" />
              </div>

              <h1 className="text-xl font-bold text-[#0F172A] mb-1">
                Forgot password?
              </h1>
              <p className="text-sm text-[#475569] mb-6">
                No worries — enter your email and we'll send you a reset link.
              </p>

              <InputField
                label="Email Address"
                type="email"
                placeholder="you@institution.edu"
                value={email}
                onChange={setEmail}
                icon={<Mail className="w-4 h-4" />}
                error={error}
              />

              <PrimaryButton
                onClick={submit}
                loading={loading}
                className="w-full mt-5"
              >
                {!loading && (
                  <>
                    <Send className="w-4 h-4" /> Send Reset Link
                  </>
                )}
              </PrimaryButton>

              <button
                onClick={() => nav("login")}
                className="w-full mt-3 flex items-center justify-center gap-1.5 text-sm font-medium text-[#475569] hover:text-[#0F172A]"
              >
                <ArrowLeft className="w-4 h-4" /> Back to sign in
              </button>
            </>
          ) : (
            <div className="text-center py-4">
              <div className="w-16 h-16 rounded-full bg-[#DCFCE7] flex items-center justify-center mx-auto mb-5">
                <CheckCircle className="w-8 h-8 text-[#22C55E]" />
              </div>

              <h2 className="text-xl font-bold text-[#0F172A] mb-2">
                Check your inbox
              </h2>
              <p className="text-sm text-[#475569] mb-1">
                We've sent a password reset link to
              </p>
              <p className="text-sm font-semibold text-[#0F172A] mb-6">
                {email}
              </p>

              <div className="text-xs text-[#94A3B8] mb-5">
                Didn't receive it?{" "}
                <button
                  onClick={() => setSent(false)}
                  className="text-[#2563EB] font-semibold hover:underline"
                >
                  Resend email
                </button>
              </div>

              <button
                onClick={() => nav("login")}
                className="flex items-center justify-center gap-1.5 text-sm font-semibold text-[#475569] hover:text-[#0F172A] mx-auto"
              >
                <ArrowLeft className="w-4 h-4" /> Back to sign in
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
