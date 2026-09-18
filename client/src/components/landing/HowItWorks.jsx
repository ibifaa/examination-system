import { User, FileText, BarChart2 } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      icon: User,
      title: "Register",
      body: "Create your free account, select your role — student or teacher — and complete email verification in under 2 minutes.",
    },
    {
      step: "02",
      icon: FileText,
      title: "Take Your Exam",
      body: "Log in on exam day, enter your exam code, and complete your questions within the allotted time on any device.",
    },
    {
      step: "03",
      icon: BarChart2,
      title: "View Results",
      body: "Objective exams are graded instantly. Explore your score breakdown, percentile rank, and question-level feedback.",
    },
  ];

  return (
    <section className="py-20 max-w-7xl mx-auto px-5 lg:px-8">
      <div className="text-center mb-12">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#2563EB]">
          How It Works
        </span>
        <h2 className="text-3xl font-bold text-[#0F172A] mt-2">
          Up and running in three steps
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
        <div className="hidden md:block absolute top-10 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-0.5 bg-gradient-to-r from-[#DBEAFE] via-[#2563EB] to-[#DBEAFE]" />

        {steps.map((step) => {
          const Icon = step.icon;

          return (
            <div key={step.step} className="flex flex-col items-center text-center px-4">
              <div className="relative">
                <div className="w-20 h-20 rounded-2xl bg-[#DBEAFE] flex items-center justify-center text-[#2563EB] mb-5 relative z-10">
                  <Icon className="w-6 h-6" />
                </div>

                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#2563EB] text-white text-[10px] font-bold flex items-center justify-center z-20">
                  {step.step}
                </span>
              </div>

              <h3 className="text-base font-bold text-[#0F172A] mb-2">
                {step.title}
              </h3>

              <p className="text-sm text-[#475569] leading-relaxed">
                {step.body}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
