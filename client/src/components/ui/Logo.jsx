import { GraduationCap } from "lucide-react";

export default function Logo({ onClick }) {
  return (
    <button onClick={onClick} className="flex items-center gap-2.5 select-none">
      <div className="w-9 h-9 rounded-xl bg-[#2563EB] flex items-center justify-center flex-shrink-0">
        <GraduationCap className="w-5 h-5 text-white" />
      </div>
      <div className="text-left">
        <span className="text-sm font-bold text-[#0F172A] block leading-none">ExamBoard</span>
        <span className="text-[10px] text-[#94A3B8] leading-none">CBT Platform</span>
      </div>
    </button>
  );
}
