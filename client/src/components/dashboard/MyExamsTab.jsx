import { useState } from "react";
import { FileText } from "lucide-react";
import { examData } from "../../data/dashboardData";

export default function MyExamsTab() {
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all"
      ? examData
      : examData.filter((exam) => exam.status === filter);

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-xl font-bold text-[#0F172A]">My Exams</h1>
        <p className="text-sm text-[#475569] mt-0.5">
          View your scheduled and completed examinations.
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {["all", "upcoming", "in_progress", "completed"].map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold capitalize ${
              filter === item
                ? "bg-[#2563EB] text-white"
                : "bg-white border border-[#E2E8F0] text-[#475569]"
            }`}
          >
            {item.replace("_", " ")}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden">
        {filtered.map((exam) => (
          <div
            key={exam.id}
            className="px-5 py-4 border-b border-[#F1F5F9] flex items-center gap-4"
          >
            <div className="w-10 h-10 rounded-xl bg-[#DBEAFE] flex items-center justify-center">
              <FileText className="w-5 h-5 text-[#2563EB]" />
            </div>

            <div className="flex-1">
              <p className="text-sm font-semibold text-[#0F172A]">
                {exam.title}
              </p>
              <p className="text-[11px] text-[#94A3B8]">
                {exam.course} · {exam.duration} min · {exam.totalQ} questions
              </p>
            </div>

            <span className="text-xs font-semibold text-[#475569]">
              {exam.status.replace("_", " ")}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
