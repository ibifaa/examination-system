import { FileText, Award, User } from "lucide-react";

export default function QuickActions({ setTab }) {
  const actions = [
    ["Take an Exam", FileText, "exams"],
    ["View Results", Award, "results"],
    ["Edit Profile", User, "profile"],
  ];

  return (
    <div
      className="bg-white rounded-2xl border border-[#E2E8F0] p-5"
      style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.06)" }}
    >
      <h2 className="text-sm font-bold text-[#0F172A] mb-4">
        Quick Actions
      </h2>

      <div className="grid grid-cols-1 gap-2">
        {actions.map(([label, Icon, tab]) => (
          <button
            key={label}
            onClick={() => setTab(tab)}
            className="flex items-center gap-3 p-3 rounded-xl border border-[#E2E8F0] hover:border-[#BFDBFE] hover:bg-[#F8FAFC] text-left transition-colors"
          >
            <Icon className="w-4 h-4 text-[#2563EB]" />
            <span className="text-xs font-semibold text-[#475569]">
              {label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
