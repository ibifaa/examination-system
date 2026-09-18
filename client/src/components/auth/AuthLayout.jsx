export default function AuthLayout({ left, right }) {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex">
      <div className="hidden lg:block w-[42%] min-h-screen flex-shrink-0">
        {left}
      </div>

      <div className="flex-1 flex items-center justify-center px-5 py-12 min-h-screen overflow-y-auto">
        {right}
      </div>
    </div>
  );
}
