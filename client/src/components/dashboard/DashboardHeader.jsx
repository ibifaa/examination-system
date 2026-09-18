import { Bell, Menu, Search } from "lucide-react";

export default function DashboardHeader({ onMenuClick }) {
  return (
    <header
      className="h-14 flex items-center justify-between px-5 bg-white border-b border-[#E2E8F0] sticky top-0 z-40"
      style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.06)" }}
    >
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="lg:hidden p-1.5 rounded-lg hover:bg-[#F1F5F9] text-[#94A3B8]"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="hidden sm:flex items-center gap-2 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-3 py-2 w-60">
          <Search className="w-4 h-4 text-[#94A3B8]" />
          <input
            className="bg-transparent text-sm outline-none placeholder-[#CBD5E1] flex-1"
            placeholder="Search exams…"
          />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button className="relative p-2 rounded-xl hover:bg-[#F1F5F9] text-[#94A3B8] transition-colors">
          <Bell className="w-[18px] h-[18px]" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#EF4444] border border-white" />
        </button>

        <div className="w-8 h-8 rounded-full bg-[#2563EB] text-white text-xs font-bold flex items-center justify-center">
          JA
        </div>
      </div>
    </header>
  );
}
