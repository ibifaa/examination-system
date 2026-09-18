import { Bell } from "lucide-react";

export default function Notifications() {
  return (
    <div
      className="bg-white rounded-2xl border border-[#E2E8F0] p-5"
      style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.06)" }}
    >
      <div className="flex items-center gap-2 mb-4">
        <Bell className="w-4 h-4 text-[#2563EB]" />
        <h2 className="text-sm font-bold text-[#0F172A]">
          Notifications
        </h2>
      </div>

      <div className="space-y-3">
        {[
          ["Database Systems exam is scheduled for Sep 20.", "2h ago"],
          ["Your Biology result has been published.", "1d ago"],
          ["Your profile information is up to date.", "3d ago"],
        ].map(([message, time]) => (
          <div
            key={message}
            className="flex gap-3 p-3 rounded-xl bg-[#F8FAFC]"
          >
            <div className="w-2 h-2 rounded-full bg-[#2563EB] mt-1.5 flex-shrink-0" />
            <div>
              <p className="text-xs text-[#475569] leading-relaxed">
                {message}
              </p>
              <p className="text-[10px] text-[#94A3B8] mt-1">{time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
