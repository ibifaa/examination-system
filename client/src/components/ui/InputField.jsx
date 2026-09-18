import { AlertCircle } from "lucide-react";

export default function InputField({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  icon,
  error,
  hint,
  rightEl,
}) {
  return (
    <div>
      <label className="block text-xs font-semibold text-[#0F172A] mb-1.5">
        {label}
      </label>

      <div className="relative">
        {icon && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]">
            {icon}
          </span>
        )}

        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`w-full ${icon ? "pl-9" : "pl-3"} ${
            rightEl ? "pr-10" : "pr-3"
          } py-2.5 text-sm border rounded-xl bg-white text-[#0F172A] placeholder-[#CBD5E1] outline-none transition-all duration-150
            ${
              error
                ? "border-[#EF4444] focus:border-[#EF4444] focus:ring-2 focus:ring-[#FEE2E2]"
                : "border-[#E2E8F0] focus:border-[#2563EB] focus:ring-2 focus:ring-[#DBEAFE]"
            }`}
        />

        {rightEl && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2">
            {rightEl}
          </span>
        )}
      </div>

      {error && (
        <p className="text-[11px] text-[#EF4444] mt-1.5 flex items-center gap-1">
          <AlertCircle className="w-3 h-3 flex-shrink-0" />
          {error}
        </p>
      )}

      {hint && !error && (
        <p className="text-[11px] text-[#94A3B8] mt-1.5">{hint}</p>
      )}
    </div>
  );
}
