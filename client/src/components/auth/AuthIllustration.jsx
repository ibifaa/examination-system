import { CheckCircle, Clock } from "lucide-react";
import Logo from "../ui/Logo";

export default function AuthIllustration({ tagline, sub }) {
  return (
    <div
      className="hidden lg:flex flex-col justify-between h-full p-10"
      style={{
        background:
          "linear-gradient(145deg, #1E3A8A 0%, #2563EB 55%, #3B82F6 100%)",
      }}
    >
      <Logo />

      <div>
        <div className="mb-8 relative">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-[#EF4444]" />
              <div className="w-2 h-2 rounded-full bg-[#F59E0B]" />
              <div className="w-2 h-2 rounded-full bg-[#22C55E]" />
              <div className="flex-1 h-1.5 rounded-full bg-white/20 ml-2" />
            </div>

            <div className="space-y-2">
              {[
                ["Mathematics — Final Term", "78%"],
                ["Physics — Midterm", "91%"],
                ["Chemistry — Quiz 3", "65%"],
              ].map(([name, score]) => (
                <div key={name} className="flex items-center gap-3">
                  <div className="flex-1 h-1.5 rounded-full bg-white/10 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-white/60"
                      style={{ width: score }}
                    />
                  </div>
                  <span className="text-white/70 text-[10px] w-8">{score}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute -top-3 -right-3 bg-[#22C55E] text-white text-[11px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5">
            <CheckCircle className="w-3 h-3" />
            Exam Passed
          </div>

          <div className="absolute -bottom-3 -left-3 bg-[#FEF3C7] text-[#92400E] text-[11px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5">
            <Clock className="w-3 h-3" />
            47 min left
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mb-3 leading-snug">
          {tagline}
        </h2>
        <p className="text-blue-100/80 text-sm leading-relaxed">{sub}</p>

        <div className="mt-6 flex gap-6">
          {[
            ["12,400+", "Students"],
            ["840+", "Exams"],
            ["94%", "Pass Rate"],
          ].map(([v, l]) => (
            <div key={l}>
              <p className="text-xl font-bold text-white">{v}</p>
              <p className="text-[11px] text-blue-100/70">{l}</p>
            </div>
          ))}
        </div>
      </div>

      <p className="text-blue-100/50 text-xs">
        © 2026 ExamBoard. All rights reserved.
      </p>
    </div>
  );
}
