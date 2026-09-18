import { useState } from "react";
import Sidebar from "../components/dashboard/Sidebar";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import DashboardTab from "../components/dashboard/DashboardTab";
import MyExamsTab from "../components/dashboard/MyExamsTab";
import ResultsTab from "../components/dashboard/ResultsTab";
import ProfileTab from "../components/dashboard/ProfileTab";

export default function DashboardPage({ nav }) {
  const [tab, setTab] = useState("dashboard");
  const [mobileSidebar, setMobileSidebar] = useState(false);

  return (
    <div
      className="min-h-screen bg-[#F8FAFC] flex"
      style={{ fontFamily: "'Inter', 'Poppins', sans-serif" }}
    >
      <Sidebar
        tab={tab}
        setTab={setTab}
        nav={nav}
        mobileOpen={mobileSidebar}
        onClose={() => setMobileSidebar(false)}
      />

      <div className="flex-1 flex flex-col min-w-0">
        <DashboardHeader onMenuClick={() => setMobileSidebar(true)} />

        <main className="flex-1 p-5 lg:p-7 overflow-y-auto">
          {tab === "dashboard" && <DashboardTab setTab={setTab} />}
          {tab === "exams" && <MyExamsTab />}
          {tab === "results" && <ResultsTab />}
          {tab === "profile" && <ProfileTab nav={nav} />}
        </main>
      </div>
    </div>
  );
}
