import { Check, X } from "lucide-react";

export default function PasswordStrength({ password }) {
  const checks = [
    { label: "8+ characters", ok: password.length >= 8 },
    { label: "Uppercase", ok: /[A-Z]/.test(password) },
    { label: "Number", ok: /[0-9]/.test(password) },
    { label: "Symbol", ok: /[^A-Za-z0-9]/.test(password) },
  ];

  const score = checks.filter((c) => c.ok).length;
  const levels = ["", "Weak", "Fair", "Good", "Strong"];
  const colors = ["", "#EF4444", "#F59E0B", "#22C55E", "#22C55E"];

  if (!password) return null;

  return (
    <div className="mt-2">
      <div className="flex gap-1 mb-1.5">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="h-1 flex-1 rounded-full transition-all duration-300"
            style={{
              background: i <= score ? colors[score] : "#E2E8F0",
            }}
          />
        ))}
      </div>

      <div className="flex items-center justify-between">
        <div className="flex gap-3 flex-wrap">
          {checks.map((c) => (
            <span
              key={c.label}
              className={`text-[11px] flex items-center gap-1 ${
                c.ok ? "text-[#22C55E]" : "text-[#94A3B8]"
              }`}
            >
              {c.ok ? (
                <Check className="w-3 h-3" />
              ) : (
                <X className="w-3 h-3" />
              )}
              {c.label}
            </span>
          ))}
        </div>

        {score > 0 && (
          <span
            className="text-[11px] font-semibold"
            style={{ color: colors[score] }}
          >
            {levels[score]}
          </span>
        )}
      </div>
    </div>
  );
}
