import { useState } from "react";
import { Mail, CheckCircle, ArrowLeft } from "lucide-react";
import Logo from "../components/ui/Logo";
import PrimaryButton from "../components/ui/PrimaryButton";
import OutlineButton from "../components/ui/OutlineButton";

const shadow = {
  boxShadow:
    "0 4px 24px rgba(37,99,235,0.07), 0 1px 4px rgba(0,0,0,0.06)",
};

export default function VerifyPage({ nav }) {
  const [resent, setResent] = useState(false);

  const resend = () => {
    setResent(true);
    setTimeout(() => setResent(false), 3000);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center px-5 py-12">
      <div className="w-full max-w-md text-center">
        <div className="flex justify-center mb-8">
          <Logo onClick={() => nav("landing")} />
        </div>

        <div className="bg-white rounded-2xl p-10" style={shadow}>
          <div className="w-20 h-20 rounded-full bg-[#DBEAFE] flex items-center justify-center mx-auto mb-6">
            <Mail className="w-10 h-10 text-[#2563EB]" />
          </div>

          <h1 className="text-xl font-bold text-[#0F172A] mb-2">
            Verify your email
          </h1>

          <p className="text-sm text-[#475569] mb-6 leading-relaxed">
            We've sent a verification link to your inbox. Click the link to
            activate your ExamBoard account.
          </p>

          <div className="bg-[#F8FAFC] rounded-xl px-5 py-3 mb-6 text-xs text-[#475569]">
            Didn't get the email? Check your spam folder or{" "}
            <button
              onClick={resend}
              className="text-[#2563EB] font-semibold hover:underline"
            >
              resend the email
            </button>
          </div>

          {resent && (
            <div className="flex items-center gap-2 justify-center text-xs font-medium text-[#22C55E] mb-4">
              <CheckCircle className="w-4 h-4" /> Email resent successfully!
            </div>
          )}

          <PrimaryButton onClick={() => nav("success")} className="w-full mb-3">
            <CheckCircle className="w-4 h-4" /> I've verified my email
          </PrimaryButton>

          <OutlineButton onClick={() => nav("login")} className="w-full">
            <ArrowLeft className="w-4 h-4" /> Back to Login
          </OutlineButton>
        </div>
      </div>
    </div>
  );
}
