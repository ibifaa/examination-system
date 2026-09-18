import { Bell, Inbox, FileText } from "lucide-react";

const shadowSm = { boxShadow: "0 1px 6px rgba(0,0,0,0.06)" };

export default function EmptyStates() {
  const states = [
    {
      icon: Bell,
      title: "No notifications",
      body: "You're all caught up. Notifications will appear here when there's something new.",
      color: "#DBEAFE",
      ic: "#2563EB",
    },
    {
      icon: Inbox,
      title: "No messages",
      body: "Your inbox is empty. Messages from your institution will appear here.",
      color: "#EDE9FE",
      ic: "#7C3AED",
    },
    {
      icon: FileText,
      title: "No recent exams",
      body: "You haven't taken any exams yet. Check back when your teacher schedules one.",
      color: "#DCFCE7",
      ic: "#16A34A",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-5 lg:px-8 pb-20">
      <div className="text-center mb-8">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#94A3B8]">
          Empty State Examples
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {states.map((state) => {
          const Icon = state.icon;

          return (
            <div
              key={state.title}
              className="bg-white border border-[#E2E8F0] rounded-2xl p-8 text-center"
              style={shadowSm}
            >
              <div
                className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center"
                style={{
                  background: state.color,
                  color: state.ic,
                }}
              >
                <Icon className="w-8 h-8" />
              </div>

              <h3 className="text-sm font-bold text-[#0F172A] mb-2">
                {state.title}
              </h3>

              <p className="text-xs text-[#94A3B8] leading-relaxed">
                {state.body}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
