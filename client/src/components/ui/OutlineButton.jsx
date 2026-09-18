export default function OutlineButton({ children, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-[#2563EB] border border-[#2563EB] hover:bg-[#DBEAFE] active:scale-[0.98] transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2 ${className}`}
    >
      {children}
    </button>
  );
}
