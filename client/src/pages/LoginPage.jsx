import { useState } from "react";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  Check,
  LogIn,
} from "lucide-react";
import Logo from "../components/ui/Logo";
import PrimaryButton from "../components/ui/PrimaryButton";
import InputField from "../components/ui/InputField";
import SocialButton from "../components/ui/SocialButton";
import Divider from "../components/ui/Divider";
import AuthLayout from "../components/auth/AuthLayout";
import AuthIllustration from "../components/auth/AuthIllustration";

const shadow = {
  boxShadow:
    "0 4px 24px rgba(37,99,235,0.07), 0 1px 4px rgba(0,0,0,0.06)",
};

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z" fill="#4285F4" />
      <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.909-2.259c-.806.54-1.837.86-3.047.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z" fill="#34A853" />
      <path d="M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05" />
      <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335" />
    </svg>
  );
}

export default function LoginPage({ nav }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};

    if (!email) e.email = "Email address is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      e.email = "Enter a valid email address.";
    }

    if (!password) e.password = "Password is required.";
    else if (password.length < 6) {
      e.password = "Password must be at least 6 characters.";
    }

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = () => {
    if (!validate()) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      nav("success");
    }, 1600);
  };

  return (
    <AuthLayout
      left={
        <AuthIllustration
          tagline="Secure access to your examination portal."
          sub="Log in to view your scheduled exams, results, and performance analytics — all in one place."
        />
      }
      right={
        <div className="w-full max-w-md">
          <div className="lg:hidden mb-8">
            <Logo onClick={() => nav("landing")} />
          </div>

          <div className="bg-white rounded-2xl p-8" style={shadow}>
            <h1 className="text-2xl font-bold text-[#0F172A] mb-1">
              Welcome back
            </h1>
            <p className="text-sm text-[#475569] mb-7">
              Sign in to your ExamBoard account.
            </p>

            <div className="space-y-4">
              <InputField
                label="Email Address"
                type="email"
                placeholder="you@institution.edu"
                value={email}
                onChange={setEmail}
                icon={<Mail className="w-4 h-4" />}
                error={errors.email}
              />

              <InputField
                label="Password"
                type={showPw ? "text" : "password"}
                placeholder="Your password"
                value={password}
                onChange={setPassword}
                icon={<Lock className="w-4 h-4" />}
                error={errors.password}
                rightEl={
                  <button
                    onClick={() => setShowPw(!showPw)}
                    className="text-[#94A3B8] hover:text-[#475569]"
                  >
                    {showPw ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                }
              />
            </div>

            <div className="flex items-center justify-between mt-3 mb-5">
              <label className="flex items-center gap-2 cursor-pointer">
                <div
                  onClick={() => setRemember(!remember)}
                  className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-colors ${
                    remember
                      ? "bg-[#2563EB] border-[#2563EB]"
                      : "border-[#CBD5E1]"
                  }`}
                  style={{ width: 16, height: 16 }}
                >
                  {remember && (
                    <Check
                      className="w-2.5 h-2.5 text-white"
                      strokeWidth={3}
                    />
                  )}
                </div>
                <span className="text-xs text-[#475569]">Remember me</span>
              </label>

              <button
                onClick={() => nav("forgot")}
                className="text-xs font-semibold text-[#2563EB] hover:underline"
              >
                Forgot password?
              </button>
            </div>

            <PrimaryButton
              onClick={submit}
              loading={loading}
              className="w-full"
            >
              {!loading && (
                <>
                  <LogIn className="w-4 h-4" /> Sign In
                </>
              )}
            </PrimaryButton>

            <Divider label="or continue with" />
            <SocialButton
              icon={<GoogleIcon />}
              label="Continue with Google"
            />

            <p className="text-center text-xs text-[#475569] mt-5">
              Don't have an account?{" "}
              <button
                onClick={() => nav("register")}
                className="font-semibold text-[#2563EB] hover:underline"
              >
                Register
              </button>
            </p>
          </div>

          <p className="text-center text-[11px] text-[#94A3B8] mt-4">
            Protected by ExamBoard security.{" "}
            <button
              onClick={() => nav("landing")}
              className="hover:underline"
            >
              ← Back to home
            </button>
          </p>
        </div>
      }
    />
  );
}
