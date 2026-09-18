import { useMemo } from "react";
import { examData, recentResults } from "../../data/dashboardData";
import WelcomeBanner from "./WelcomeBanner";
import StatCards from "./StatCards";
import UpcomingExams from "./UpcomingExams";
import RecentResults from "./RecentResults";
import PerformanceChart from "./PerformanceChart";
import QuickActions from "./QuickActions";
import Notifications from "./Notifications";
import { Clock } from "lucide-react";

function getCountdown(date, status) {
  if (status === "completed") return "—";
  if (status === "in_progress") return "Live now";

  const diff = new Date(date).getTime() - Date.now();
  if (diff <= 0) return "Passed";

  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);

  if (days > 0) return `${days}d ${hours}h`;
  if (hours > 0) return `${hours}h ${minutes}m`;

  return `${minutes}m`;
}

function StatusBadge({ status }) {
  const map = {
    upcoming: {
      label: "Not Started",
      bg: "#DBEAFE",
      text: "#1D4ED8",
      dot: "#2563EB",
    },
    in_progress: {
      label: "In Progress",
      bg: "#FEF3C7",
      text: "#92400E",
      dot: "#F59E0B",
    },
    completed: {
      label: "Completed",
      bg: "#DCFCE7",
      text: "#14532D",
      dot: "#22C55E",
    },
  };

  const item = map[status] || map.upcoming;

  return (
    <span
      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold"
      style={{ background: item.bg, color: item.text }}
    >
      <span
        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
        style={{ background: item.dot }}
      />
      {item.label}
    </span>
  );
}

function ScoreBar({ score }) {
  const color =
    score >= 70 ? "#22C55E" : score >= 50 ? "#F59E0B" : "#EF4444";

  return (
    <div className="flex items-center gap-2 min-w-[80px]">
      <div className="flex-1 h-1.5 bg-[#F1F5F9] rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all"
          style={{ width: `${score}%`, background: color }}
        />
      </div>
      <span className="text-xs font-bold" style={{ color }}>
        {score}%
      </span>
    </div>
  );
}

export default function DashboardTab({ setTab }) {
  const upcomingCount = examData.filter(
    (exam) => exam.status === "upcoming"
  ).length;

  const completedCount = examData.filter(
    (exam) => exam.status === "completed"
  ).length;

  const avgScore = useMemo(() => {
    const total = recentResults.reduce((sum, result) => sum + result.score, 0);
    return Math.round(total / recentResults.length);
  }, []);

  const nextExam = examData
    .filter((exam) => exam.status === "upcoming")
    .sort(
      (a, b) =>
        new Date(a.date).getTime() - new Date(b.date).getTime()
    )[0];

  return (
    <div className="space-y-6">
      <WelcomeBanner
        nextExam={nextExam}
        countdown={nextExam ? getCountdown(nextExam.date, nextExam.status) : ""}
      />

      <StatCards
        completedCount={completedCount}
        avgScore={avgScore}
        upcomingCount={upcomingCount}
      />

      <UpcomingExams
        exams={examData}
        getCountdown={getCountdown}
        StatusBadge={StatusBadge}
      />

      <RecentResults results={recentResults} ScoreBar={ScoreBar} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2">
          <PerformanceChart results={recentResults} />
        </div>

        <div className="space-y-5">
          <QuickActions setTab={setTab} />
          <Notifications />
        </div>
      </div>
    </div>
  );
}
