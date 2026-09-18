import { Sparkles } from "lucide-react";
import PrimaryButton from "../ui/PrimaryButton";
import OutlineButton from "../ui/OutlineButton";

export default function CTA({ nav }) {
  return (
    <section className="max-w-7xl mx-auto px-5 lg:px-8 pb-20">
      <div
        className="rounded-3xl overflow-hidden relative"
        style={{
          background:
            "linear-gradient(135deg, #1E40AF 0%, #2563EB 60%, #3B82F6 100%)",
        }}
      >
        <div className="px-8 lg:px-16 py-14 text-center relative z-10">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3">
            Ready to transform your examinations?
          </h2>

          <p className="text-blue-100/80 text-sm mb-8 max-w-xl mx-auto">
            Join over 12,000 students and 200 educators already using ExamBoard
            — free to get started, no credit card required.
          </p>

          <div className="flex flex-wrap gap-3 justify-center">
            <PrimaryButton
              onClick={() => nav("register")}
              className="bg-white !text-[#2563EB] hover:bg-[#F8FAFC] text-base px-6 py-3"
            >
              <Sparkles className="w-4 h-4" /> Create Free Account
            </PrimaryButton>

            <OutlineButton
              onClick={() => nav("login")}
              className="border-white/50 !text-white hover:bg-white/10 text-base px-6 py-3"
            >
              Sign In
            </OutlineButton>
          </div>
        </div>
      </div>
    </section>
  );
}
