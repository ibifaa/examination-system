import {
  Award,
  FileText,
  Home,
  LogOut,
  Settings,
  User,
  X,
} from "lucide-react";
import Logo from "../ui/Logo";

function SidebarLink({ icon, label, active, onClick, badge }) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 text-left ${
        active
          ? "bg-[#DBEAFE] text-[#1D4ED8]"
          : "text-[#475569] hover:bg-[#F1F5F9] hover:text-[#0F172A]"
      }`}
    >
      <span className={active ? "text-[#2563EB]" : "text-[#94A3B8]"}>
        {icon}
      </span>
      <span className="flex-1">{label}</span>

      {badge != null && badge > 0 && (
        <span className="w-5 h-5 rounded-full bg-[#2563EB] text-white text-[10px] font-bold flex items-center justify-center">
          {badge}
        </span>
      )}
    </button>
  );
}

export default function Sidebar({
  tab,
  setTab,
  nav,
  mobileOpen,
  onClose,
}) {
  const links = [
    {
      tab: "dashboard",
      icon: <Home className="w-4 h-4" />,
      label: "Dashboard",
    },
    {
      tab: "exams",
      icon: <FileText className="w-4 h-4" />,
      label: "My Exams",
      badge: 3,
    },
    {
      tab: "results",
      icon: <Award className="w-4 h-4" />,
      label: "Results",
    },
    {
      tab: "profile",
      icon: <User className="w-4 h-4" />,
      label: "Profile",
    },
  ];

  const inner = (
    <div className="flex flex-col h-full">
      <div className="px-4 py-5 flex items-center justify-between">
        <Logo onClick={() => nav("landing")} />
        <button
          onClick={onClose}
          className="lg:hidden p-1 rounded-lg hover:bg-[#F1F5F9] text-[#94A3B8]"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="px-3 flex-1 space-y-0.5 mt-2">
        {links.map((link) => (
          <SidebarLink
            key={link.tab}
            icon={link.icon}
            label={link.label}
            active={tab === link.tab}
            onClick={() => {
              setTab(link.tab);
              onClose();
            }}
            badge={link.badge}
          />
        ))}
      </div>

      <div className="px-3 pb-5 space-y-0.5 border-t border-[#F1F5F9] pt-4">
        <SidebarLink
          icon={<Settings className="w-4 h-4" />}
          label="Settings"
          onClick={() => {}}
        />

        <SidebarLink
          icon={<LogOut className="w-4 h-4" />}
          label="Log Out"
          onClick={() => nav("login")}
        />

        <div className="mt-3 flex items-center gap-3 px-3 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
          <div className="w-8 h-8 rounded-full bg-[#2563EB] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
            JA
          </div>

          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-[#0F172A] truncate">
              John Adewale
            </p>
            <p className="text-[10px] text-[#94A3B8] truncate">
              Student · FUTO
            </p>
          </div>

          <div className="w-2 h-2 rounded-full bg-[#22C55E] flex-shrink-0" />
        </div>
      </div>
    </div>
  );

  return (
    <>
      <aside
        className="hidden lg:flex flex-col w-60 flex-shrink-0 min-h-screen bg-white border-r border-[#E2E8F0]"
        style={{ boxShadow: "1px 0 0 0 #E2E8F0" }}
      >
        {inner}
      </aside>

      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div
            className="absolute inset-0 bg-black/30"
            onClick={onClose}
          />
          <aside className="relative w-64 bg-white h-full flex flex-col shadow-xl">
            {inner}
          </aside>
        </div>
      )}
    </>
  );
}
