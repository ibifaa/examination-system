import { Award, ChevronRight } from "lucide-react";

export default function RecentResults({ results, ScoreBar }) {
  return (
    <div
      className="bg-white rounded-2xl border border-[#E2E8F0]"
      style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.06)" }}
    >
      <div className="flex items-center justify-between px-5 py-4 border-b border-[#F1F5F9]">
        <div>
          <h2 className="text-sm font-bold text-[#0F172A]">Recent Results</h2>
          <p className="text-[11px] text-[#94A3B8] mt-0.5">
            Your last {results.length} completed exams
          </p>
        </div>

        <button className="text-xs font-semibold text-[#2563EB] hover:underline flex items-center gap-1">
          View all <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="divide-y divide-[#F8FAFC]">
        {results.map((result) => (
          <div
            key={result.title}
            className="px-5 py-4 flex items-center gap-4 hover:bg-[#FAFBFF] transition-colors"
          >
            <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 bg-[#F1F5F9]">
              <Award className="w-4 h-4 text-[#94A3B8]" />
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-[#0F172A] truncate">
                {result.title}
              </p>
              <p className="text-[11px] text-[#94A3B8]">
                {result.course} · {result.date}
              </p>
            </div>

            <div className="hidden sm:block w-28 flex-shrink-0">
              <ScoreBar score={result.score} />
            </div>

            <span
              className="px-2.5 py-1 rounded-lg text-xs font-bold flex-shrink-0"
              style={{
                background: `${result.color}22`,
                color: result.color,
              }}
            >
              {result.grade}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
