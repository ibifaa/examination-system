import { useState } from "react";
import { Lock, Eye, EyeOff, Check, ArrowLeft } from "lucide-react";
import Logo from "../components/ui/Logo";
import PrimaryButton from "../components/ui/PrimaryButton";
import InputField from "../components/ui/InputField";
import PasswordStrength from "../components/auth/PasswordStrength";

const shadow = {
  boxShadow:
    "0 4px 24px rgba(37,99,235,0.07), 0 1px 4px rgba(0,0,0,0.06)",
};

export default function ResetPasswordPage({ nav }) {
  const [pw, setPw] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const submit = () => {
    const e = {};

    if (pw.length < 8) e.pw = "Password must be at least 8 characters.";
    if (confirm !== pw) e.confirm = "Passwords do not match.";

    setErrors(e);

    if (Object.keys(e).length) return;

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      nav("success");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center px-5 py-12">
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-8">
          <Logo onClick={() => nav("landing")} />
        </div>

        <div className="bg-white rounded-2xl p-8" style={shadow}>
          <div className="w-12 h-12 rounded-2xl bg-[#DBEAFE] flex items-center justify-center mb-5">
            <Lock className="w-6 h-6 text-[#2563EB]" />
          </div>

          <h1 className="text-xl font-bold text-[#0F172A] mb-1">
            Set new password
          </h1>
          <p className="text-sm text-[#475569] mb-6">
            Your new password must be different from your previous one.
          </p>

          <div className="space-y-4">
            <div>
              <InputField
                label="New Password"
                type={showPw ? "text" : "password"}
                placeholder="Min. 8 characters"
                value={pw}
                onChange={setPw}
                icon={<Lock className="w-4 h-4" />}
                error={errors.pw}
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
              <PasswordStrength password={pw} />
            </div>

            <InputField
              label="Confirm New Password"
              type="password"
              placeholder="Repeat your new password"
              value={confirm}
              onChange={setConfirm}
              icon={<Lock className="w-4 h-4" />}
              error={errors.confirm}
            />
          </div>

          <PrimaryButton
            onClick={submit}
            loading={loading}
            className="w-full mt-5"
          >
            {!loading && (
              <>
                <Check className="w-4 h-4" /> Update Password
              </>
            )}
          </PrimaryButton>

          <button
            onClick={() => nav("login")}
            className="w-full mt-3 flex items-center justify-center gap-1.5 text-sm font-medium text-[#475569] hover:text-[#0F172A]"
          >
            <ArrowLeft className="w-4 h-4" /> Back to sign in
          </button>
        </div>
      </div>
    </div>
  );
}
