import { RefreshCw } from "lucide-react";

export default function PrimaryButton({
  children,
  onClick,
  loading,
  className = "",
  type = "button",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={loading}
      className={`flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] active:scale-[0.98] transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed ${className}`}
    >
      {loading ? <RefreshCw className="w-4 h-4 animate-spin" /> : children}
    </button>
  );
}
