import { useState } from "react";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  Check,
  User,
  BookOpen,
  AlertCircle,
  Sparkles,
} from "lucide-react";
import Logo from "../components/ui/Logo";
import PrimaryButton from "../components/ui/PrimaryButton";
import InputField from "../components/ui/InputField";
import SocialButton from "../components/ui/SocialButton";
import Divider from "../components/ui/Divider";
import AuthLayout from "../components/auth/AuthLayout";
import AuthIllustration from "../components/auth/AuthIllustration";
import PasswordStrength from "../components/auth/PasswordStrength";

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

export default function RegisterPage({ nav }) {
  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirm: "",
    role: "student",
  });
  const [showPw, setShowPw] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const setField = (key) => (value) => {
    setForm((current) => ({ ...current, [key]: value }));
  };

  const validate = () => {
    const e = {};

    if (!form.name.trim()) e.name = "Full name is required.";

    if (!form.username.trim()) {
      e.username = "Username is required.";
    } else if (form.username.length < 3) {
      e.username = "Username must be at least 3 characters.";
    }

    if (!form.email) {
      e.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = "Enter a valid email.";
    }

    if (form.password.length < 8) {
      e.password = "Password must be at least 8 characters.";
    }

    if (form.confirm !== form.password) {
      e.confirm = "Passwords do not match.";
    }

    if (!agreed) {
      e.agreed = "You must accept the terms to continue.";
    }

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = () => {
    if (!validate()) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      nav("verify");
    }, 1800);
  };

  return (
    <AuthLayout
      left={
        <AuthIllustration
          tagline="Join thousands of students on ExamBoard."
          sub="Create your account to access scheduled exams, practice tests, and real-time performance tracking."
        />
      }
      right={
        <div className="w-full max-w-md">
          <div className="lg:hidden mb-8">
            <Logo onClick={() => nav("landing")} />
          </div>

          <div className="bg-white rounded-2xl p-8" style={shadow}>
            <h1 className="text-2xl font-bold text-[#0F172A] mb-1">
              Create account
            </h1>
            <p className="text-sm text-[#475569] mb-7">
              Get started — it's free. No credit card required.
            </p>

            <div className="mb-5">
              <p className="text-xs font-semibold text-[#0F172A] mb-2">
                I am a
              </p>

              <div className="grid grid-cols-2 gap-2">
                {[
                  {
                    value: "student",
                    label: "Student",
                    icon: <User className="w-4 h-4" />,
                  },
                  {
                    value: "teacher",
                    label: "Teacher",
                    icon: <BookOpen className="w-4 h-4" />,
                  },
                ].map((role) => (
                  <button
                    key={role.value}
                    onClick={() =>
                      setForm((current) => ({
                        ...current,
                        role: role.value,
                      }))
                    }
                    className={`flex items-center gap-2 px-4 py-3 rounded-xl border-2 text-sm font-semibold transition-all ${
                      form.role === role.value
                        ? "border-[#2563EB] bg-[#DBEAFE] text-[#1D4ED8]"
                        : "border-[#E2E8F0] text-[#475569] hover:border-[#CBD5E1]"
                    }`}
                  >
                    {role.icon}
                    {role.label}
                  </button>
                ))}
              </div>

              <p className="text-[11px] text-[#94A3B8] mt-1.5">
                Administrator accounts are not publicly registered.
              </p>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <InputField
                  label="Full Name"
                  placeholder="John Adewale"
                  value={form.name}
                  onChange={setField("name")}
                  icon={<User className="w-4 h-4" />}
                  error={errors.name}
                />

                <InputField
                  label="Username"
                  placeholder="johnadewale"
                  value={form.username}
                  onChange={setField("username")}
                  icon={
                    <span className="text-sm text-[#94A3B8] font-mono">
                      @
                    </span>
                  }
                  error={errors.username}
                />
              </div>

              <InputField
                label="Email Address"
                type="email"
                placeholder="you@institution.edu"
                value={form.email}
                onChange={setField("email")}
                icon={<Mail className="w-4 h-4" />}
                error={errors.email}
              />

              <div>
                <InputField
                  label="Password"
                  type={showPw ? "text" : "password"}
                  placeholder="Min. 8 characters"
                  value={form.password}
                  onChange={setField("password")}
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
                <PasswordStrength password={form.password} />
              </div>

              <InputField
                label="Confirm Password"
                type="password"
                placeholder="Repeat your password"
                value={form.confirm}
                onChange={setField("confirm")}
                icon={<Lock className="w-4 h-4" />}
                error={errors.confirm}
              />
            </div>

            <div className="mt-4 mb-5">
              <label className="flex items-start gap-2.5 cursor-pointer">
                <div
                  onClick={() => setAgreed(!agreed)}
                  className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-colors flex-shrink-0 mt-0.5 ${
                    agreed
                      ? "bg-[#2563EB] border-[#2563EB]"
                      : "border-[#CBD5E1]"
                  }`}
                  style={{ width: 16, height: 16 }}
                >
                  {agreed && (
                    <Check
                      className="w-2.5 h-2.5 text-white"
                      strokeWidth={3}
                    />
                  )}
                </div>

                <span className="text-xs text-[#475569]">
                  I agree to ExamBoard's{" "}
                  <button className="text-[#2563EB] font-semibold hover:underline">
                    Terms of Service
                  </button>{" "}
                  and{" "}
                  <button className="text-[#2563EB] font-semibold hover:underline">
                    Privacy Policy
                  </button>
                </span>
              </label>

              {errors.agreed && (
                <p className="text-[11px] text-[#EF4444] mt-1.5 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.agreed}
                </p>
              )}
            </div>

            <PrimaryButton
              onClick={submit}
              loading={loading}
              className="w-full"
            >
              {!loading && (
                <>
                  <Sparkles className="w-4 h-4" /> Create Account
                </>
              )}
            </PrimaryButton>

            <Divider label="or" />
            <SocialButton icon={<GoogleIcon />} label="Continue with Google" />

            <p className="text-center text-xs text-[#475569] mt-5">
              Already have an account?{" "}
              <button
                onClick={() => nav("login")}
                className="font-semibold text-[#2563EB] hover:underline"
              >
                Sign in
              </button>
            </p>
          </div>

          <p className="text-center text-[11px] text-[#94A3B8] mt-4">
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
