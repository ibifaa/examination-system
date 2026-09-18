import {
  Shield,
  Clock,
  Zap,
  BarChart2,
  BookOpen,
  LayoutDashboard,
  Smartphone,
  Users,
} from "lucide-react";
import { features } from "../../data/landingData";

const icons = [
  Shield,
  Clock,
  Zap,
  BarChart2,
  BookOpen,
  LayoutDashboard,
  Smartphone,
  Users,
];

const shadowSm = { boxShadow: "0 1px 6px rgba(0,0,0,0.06)" };

export default function Features() {
  return (
    <section id="features" className="bg-[#F8FAFC] py-20">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#2563EB]">
            Platform Features
          </span>
          <h2 className="text-3xl font-bold text-[#0F172A] mt-2 mb-3">
            Everything you need, nothing you don't
          </h2>
          <p className="text-[#475569] max-w-xl mx-auto text-sm">
            A complete examination ecosystem built for Nigerian universities,
            polytechnics, and colleges of education.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => {
            const Icon = icons[index];

            return (
              <div
                key={feature.title}
                className="bg-white rounded-2xl p-5 border border-[#E2E8F0] hover:border-[#BFDBFE] hover:-translate-y-1 transition-all duration-200"
                style={shadowSm}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background: feature.color,
                    color: feature.ic,
                  }}
                >
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="text-sm font-bold text-[#0F172A] mb-2">
                  {feature.title}
                </h3>

                <p className="text-xs text-[#475569] leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
