import {
  ArrowRight,
  CheckCircle,
  Clock,
  LogIn,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import PrimaryButton from "../ui/PrimaryButton";
import OutlineButton from "../ui/OutlineButton";

export default function Hero({ nav }) {
  return (
    <section
      id="home"
      className="max-w-7xl mx-auto px-5 lg:px-8 pt-16 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mx-[10%]"
    >
      <div>
        <div className="inline-flex items-center gap-2 bg-[#DBEAFE] text-[#1D4ED8] text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          Now with AI-powered proctoring
        </div>

        <h1 className="text-4xl lg:text-5xl font-bold text-[#0F172A] leading-tight mb-5">
          Smart Computer-Based
          <br />
          <span className="text-[#2563EB]">Examination Platform</span>
        </h1>

        <p className="text-base text-[#475569] leading-relaxed mb-8 max-w-lg">
          Deliver secure online examinations with real-time results, deep
          performance analytics, a teacher question bank, and complete
          administrative control — all in one elegant platform.
        </p>

        <div className="flex flex-wrap gap-3 mb-10">
          <PrimaryButton onClick={() => nav("register")} className="text-base px-6 py-3">
            Get Started Free <ArrowRight className="w-4 h-4" />
          </PrimaryButton>

          <OutlineButton onClick={() => nav("login")} className="text-base px-6 py-3">
            <LogIn className="w-4 h-4" /> Login
          </OutlineButton>
        </div>

        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex -space-x-2">
            {["#2563EB", "#22C55E", "#F59E0B", "#8B5CF6"].map((color, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-white text-[10px] font-bold"
                style={{ background: color }}
              >
                {["JA", "AO", "FE", "CE"][i]}
              </div>
            ))}
          </div>

          <p className="text-xs text-[#475569]">
            <span className="font-bold text-[#0F172A]">12,400+</span>{" "}
            students already enrolled
          </p>
        </div>
      </div>

      <div className="relative hidden lg:block">
        <div className="absolute inset-0 bg-gradient-to-br from-[#DBEAFE] to-[#E0F2FE] rounded-3xl -rotate-2" />

        <div
          className="relative bg-white rounded-2xl p-6 shadow-xl"
          style={{ boxShadow: "0 20px 60px rgba(37,99,235,0.15)" }}
        >
          <div className="flex items-center gap-1.5 mb-4">
            <div className="w-3 h-3 rounded-full bg-[#EF4444]" />
            <div className="w-3 h-3 rounded-full bg-[#F59E0B]" />
            <div className="w-3 h-3 rounded-full bg-[#22C55E]" />
            <div className="flex-1 mx-2 h-6 bg-[#F8FAFC] rounded-md flex items-center px-2">
              <span className="text-[10px] text-[#94A3B8]">
                examboard.ng/dashboard
              </span>
            </div>
          </div>

          <div className="bg-[#F8FAFC] rounded-xl p-4 mb-3 border border-[#E2E8F0]">
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-xs font-bold text-[#0F172A]">
                  Mathematics — Final Term
                </p>
                <p className="text-[11px] text-[#94A3B8]">
                  Question 24 of 60
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-[#EF4444] text-xs font-bold bg-[#FEE2E2] px-2.5 py-1 rounded-full">
                <Clock className="w-3.5 h-3.5" /> 47:12
              </div>
            </div>

            <div className="h-1.5 bg-[#E2E8F0] rounded-full mb-3">
              <div className="h-full bg-[#2563EB] rounded-full" style={{ width: "40%" }} />
            </div>

            <p className="text-xs text-[#0F172A] font-medium mb-3">
              If f(x) = 3x² + 2x − 5, find f'(x).
            </p>

            <div className="grid grid-cols-2 gap-1.5">
              {["6x + 2", "3x + 2", "6x − 5", "3x² + 2"].map((answer, i) => (
                <div
                  key={answer}
                  className={`text-[11px] px-2.5 py-1.5 rounded-lg border text-center font-medium ${
                    i === 0
                      ? "border-[#2563EB] bg-[#DBEAFE] text-[#1D4ED8]"
                      : "border-[#E2E8F0] text-[#475569]"
                  }`}
                >
                  {answer}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {[
              { v: "78%", l: "Score", c: "#22C55E" },
              { v: "36", l: "Answered", c: "#2563EB" },
              { v: "4", l: "Flagged", c: "#F59E0B" },
            ].map((stat) => (
              <div
                key={stat.l}
                className="bg-white border border-[#E2E8F0] rounded-xl px-3 py-2 text-center"
              >
                <p className="text-sm font-bold" style={{ color: stat.c }}>
                  {stat.v}
                </p>
                <p className="text-[10px] text-[#94A3B8]">{stat.l}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute -top-4 -right-4 bg-[#DCFCE7] text-[#15803D] text-[11px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
          <CheckCircle className="w-3.5 h-3.5" /> Live Exam Active
        </div>

        <div className="absolute -bottom-4 -left-4 bg-white border border-[#E2E8F0] text-[11px] font-semibold px-3 py-2 rounded-xl shadow-sm flex items-center gap-2">
          <TrendingUp className="w-3.5 h-3.5 text-[#22C55E]" />
          <span className="text-[#0F172A]">
            Pass rate <span className="text-[#22C55E]">+8%</span> this term
          </span>
        </div>
      </div>
    </section>
  );
}
