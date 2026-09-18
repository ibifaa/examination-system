import { CalendarDays, FileText, Target, Trophy, TrendingUp } from "lucide-react";

function StatCard({
  icon,
  label,
  value,
  sub,
  iconBg,
  iconColor,
  trend,
}) {
  return (
    <div
      className="bg-white rounded-2xl p-5 border border-[#E2E8F0]"
      style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.06)" }}
    >
      <div className="flex items-start justify-between mb-4">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ background: iconBg, color: iconColor }}
        >
          {icon}
        </div>

        {trend && (
          <span
            className={`text-xs font-semibold flex items-center gap-0.5 ${
              trend.dir === "up" ? "text-[#22C55E]" : "text-[#EF4444]"
            }`}
          >
            <TrendingUp
              className={`w-3 h-3 ${
                trend.dir === "down" ? "rotate-180" : ""
              }`}
            />
            {trend.val}
          </span>
        )}
      </div>

      <p className="text-2xl font-bold text-[#0F172A] mb-0.5">{value}</p>
      <p className="text-xs font-semibold text-[#0F172A] mb-0.5">{label}</p>
      <p className="text-[11px] text-[#94A3B8]">{sub}</p>
    </div>
  );
}

export default function StatCards({ completedCount, avgScore, upcomingCount }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard
        icon={<FileText className="w-5 h-5" />}
        label="Exams Taken"
        value={String(completedCount)}
        sub="Total completed"
        iconBg="#DBEAFE"
        iconColor="#2563EB"
        trend={{ dir: "up", val: "+2 this term" }}
      />

      <StatCard
        icon={<Target className="w-5 h-5" />}
        label="Average Score"
        value={`${avgScore}%`}
        sub="Across all exams"
        iconBg="#DCFCE7"
        iconColor="#16A34A"
        trend={{ dir: "up", val: "+4% vs last term" }}
      />

      <StatCard
        icon={<CalendarDays className="w-5 h-5" />}
        label="Upcoming Exams"
        value={String(upcomingCount)}
        sub="Scheduled this month"
        iconBg="#FEF3C7"
        iconColor="#D97706"
      />

      <StatCard
        icon={<Trophy className="w-5 h-5" />}
        label="Best Score"
        value="91%"
        sub="Biology — Midterm"
        iconBg="#EDE9FE"
        iconColor="#7C3AED"
      />
    </div>
  );
}
