import { useEffect, useState } from "react";
import { CheckCircle, LayoutDashboard } from "lucide-react";
import PrimaryButton from "../components/ui/PrimaryButton";

const shadow = {
  boxShadow:
    "0 4px 24px rgba(37,99,235,0.07), 0 1px 4px rgba(0,0,0,0.06)",
};

export default function SuccessPage({ nav }) {
  const [count, setCount] = useState(3);

  useEffect(() => {
    if (count <= 0) {
      nav("dashboard");
      return;
    }

    const timer = setTimeout(() => {
      setCount((current) => current - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [count, nav]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center px-5 py-12">
      <div className="w-full max-w-md text-center">
        <div className="bg-white rounded-2xl p-10" style={shadow}>
          <div className="relative w-24 h-24 mx-auto mb-6">
            <div className="absolute inset-0 rounded-full bg-[#DCFCE7] animate-ping opacity-30" />
            <div className="relative w-24 h-24 rounded-full bg-[#DCFCE7] flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-[#22C55E]" />
            </div>
          </div>

          <h1 className="text-2xl font-bold text-[#0F172A] mb-2">
            Welcome back, John!
          </h1>

          <p className="text-sm text-[#475569] mb-6">
            You've successfully signed in to ExamBoard. Your dashboard is ready.
          </p>

          <div className="bg-[#F8FAFC] rounded-xl px-5 py-3 mb-6 flex items-center justify-between text-xs">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#2563EB] text-white text-xs font-bold flex items-center justify-center">
                JA
              </div>
              <div className="text-left">
                <p className="font-semibold text-[#0F172A]">John Adewale</p>
                <p className="text-[#94A3B8]">Student · FUTO</p>
              </div>
            </div>
            <span className="text-[#22C55E] font-semibold">Active</span>
          </div>

          <PrimaryButton
            onClick={() => nav("dashboard")}
            className="w-full mb-3"
          >
            <LayoutDashboard className="w-4 h-4" /> Continue to Dashboard
          </PrimaryButton>

          <p className="text-[11px] text-[#94A3B8]">
            Auto-redirecting in {count}s…
          </p>
        </div>
      </div>
    </div>
  );
}
