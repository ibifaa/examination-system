import { Award } from "lucide-react";
import { recentResults } from "../../data/dashboardData";

export default function ResultsTab() {
  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-xl font-bold text-[#0F172A]">Results</h1>
        <p className="text-sm text-[#475569] mt-0.5">
          Review your examination performance.
        </p>
      </div>

      <div className="grid gap-3">
        {recentResults.map((result) => (
          <div
            key={result.title}
            className="bg-white rounded-2xl border border-[#E2E8F0] p-5 flex items-center gap-4"
          >
            <div className="w-10 h-10 rounded-xl bg-[#F1F5F9] flex items-center justify-center">
              <Award className="w-5 h-5 text-[#94A3B8]" />
            </div>

            <div className="flex-1">
              <p className="text-sm font-semibold text-[#0F172A]">
                {result.title}
              </p>
              <p className="text-[11px] text-[#94A3B8]">
                {result.course} · {result.date}
              </p>
            </div>

            <div className="text-right">
              <p
                className="text-lg font-bold"
                style={{ color: result.color }}
              >
                {result.score}%
              </p>
              <p className="text-[11px] text-[#94A3B8]">{result.grade}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
