import { User } from "lucide-react";

export default function ProfileTab({ nav }) {
  return (
    <div className="space-y-5 max-w-3xl">
      <div>
        <h1 className="text-xl font-bold text-[#0F172A]">Profile</h1>
        <p className="text-sm text-[#475569] mt-0.5">
          Manage your student profile.
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-full bg-[#2563EB] text-white text-lg font-bold flex items-center justify-center">
            JA
          </div>

          <div>
            <h2 className="text-base font-bold text-[#0F172A]">
              John Adewale
            </h2>
            <p className="text-xs text-[#94A3B8]">
              Student · FUTO · Computer Science
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {[
            ["Full Name", "John Adewale"],
            ["Username", "@johnadewale"],
            ["Email", "john@example.edu"],
            ["Institution", "Federal University of Technology Owerri"],
          ].map(([label, value]) => (
            <div key={label}>
              <p className="text-[11px] font-semibold text-[#94A3B8] mb-1">
                {label}
              </p>
              <div className="rounded-xl border border-[#E2E8F0] px-3 py-2.5 text-sm text-[#475569]">
                {value}
              </div>
            </div>
          ))}
        </div>

        <button className="mt-5 px-4 py-2 rounded-xl bg-[#DBEAFE] text-[#1D4ED8] text-xs font-semibold">
          Edit Profile
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-[#FCA5A5] p-5">
        <h2 className="text-sm font-bold text-[#EF4444] mb-1">
          Danger Zone
        </h2>
        <p className="text-xs text-[#475569] mb-4">
          These actions cannot be undone. Proceed with caution.
        </p>

        <div className="flex flex-wrap gap-2">
          <button className="px-4 py-2 rounded-xl text-xs font-semibold border border-[#FCA5A5] text-[#EF4444] hover:bg-[#FEE2E2]">
            Delete Account
          </button>

          <button
            onClick={() => nav("login")}
            className="px-4 py-2 rounded-xl text-xs font-semibold border border-[#E2E8F0] text-[#475569] hover:bg-[#F1F5F9]"
          >
            Sign Out Everywhere
          </button>
        </div>
      </div>
    </div>
  );
}
