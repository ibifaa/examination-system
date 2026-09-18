export default function SocialButton({ icon, label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center justify-center gap-2.5 px-4 py-2.5 border border-[#E2E8F0] rounded-xl text-sm font-medium text-[#475569] hover:bg-[#F8FAFC] hover:border-[#CBD5E1] active:scale-[0.98] transition-all duration-150"
    >
      {icon}
      {label}
    </button>
  );
}
