import { Clock } from "lucide-react";

export default function WelcomeBanner({ nextExam, countdown }) {
  return (
    <div className="flex items-start justify-between gap-4 flex-wrap">
      <div>
        <h1 className="text-xl font-bold text-[#0F172A]">
          Good morning, John 👋
        </h1>
        <p className="text-sm text-[#475569] mt-0.5">
          Thursday, 18 September 2026 · FUTO — CSC 300L
        </p>
      </div>

      {nextExam && (
        <div className="flex items-center gap-3 bg-[#FEF3C7] border border-[#FDE68A] rounded-xl px-4 py-2.5">
          <Clock className="w-4 h-4 text-[#D97706] flex-shrink-0" />
          <div>
            <p className="text-[11px] font-semibold text-[#92400E]">
              Next exam in
            </p>
            <p className="text-xs font-bold text-[#78350F]">
              {countdown || "Starting soon"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
