export default function Divider({ label }) {
  return (
    <div className="flex items-center gap-3 my-5">
      <div className="flex-1 h-px bg-[#E2E8F0]" />
      <span className="text-xs font-medium text-[#94A3B8]">{label}</span>
      <div className="flex-1 h-px bg-[#E2E8F0]" />
    </div>
  );
}
