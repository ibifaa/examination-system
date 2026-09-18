import { ChevronRight, FileText, Play } from "lucide-react";

export default function UpcomingExams({
  exams,
  getCountdown,
  StatusBadge,
}) {
  const visibleExams = exams.filter((exam) => exam.status !== "completed");

  return (
    <div
      className="bg-white rounded-2xl border border-[#E2E8F0]"
      style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.06)" }}
    >
      <div className="flex items-center justify-between px-5 py-4 border-b border-[#F1F5F9]">
        <div>
          <h2 className="text-sm font-bold text-[#0F172A]">Upcoming Exams</h2>
          <p className="text-[11px] text-[#94A3B8] mt-0.5">
            {visibleExams.filter((e) => e.status === "upcoming").length} scheduled
            — check deadlines carefully
          </p>
        </div>

        <button className="text-xs font-semibold text-[#2563EB] hover:underline flex items-center gap-1">
          View all <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="divide-y divide-[#F8FAFC]">
        {visibleExams.map((exam) => (
          <div
            key={exam.id}
            className="px-5 py-4 flex items-center gap-4 hover:bg-[#FAFBFF] transition-colors"
          >
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{
                background:
                  exam.status === "in_progress" ? "#FEF3C7" : "#DBEAFE",
                color:
                  exam.status === "in_progress" ? "#D97706" : "#2563EB",
              }}
            >
              {exam.status === "in_progress" ? (
                <Play className="w-4 h-4" />
              ) : (
                <FileText className="w-4 h-4" />
              )}
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-[#0F172A] truncate">
                {exam.title}
              </p>
              <p className="text-[11px] text-[#94A3B8]">
                {exam.course} · {exam.duration} min · {exam.totalQ} questions
              </p>
            </div>

            <div className="hidden sm:flex items-center gap-3 flex-shrink-0">
              <span className="text-xs font-semibold text-[#475569]">
                {getCountdown(exam.date, exam.status)}
              </span>
              <StatusBadge status={exam.status} />
            </div>

            <button
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors flex-shrink-0 ${
                exam.status === "in_progress"
                  ? "bg-[#F59E0B] text-white hover:bg-[#D97706]"
                  : "bg-[#DBEAFE] text-[#1D4ED8] hover:bg-[#BFDBFE]"
              }`}
            >
              {exam.status === "in_progress" ? "Continue" : "Details"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
