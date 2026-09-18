import { Star } from "lucide-react";
import { testimonials } from "../../data/landingData";

const shadowSm = { boxShadow: "0 1px 6px rgba(0,0,0,0.06)" };

export default function Testimonials() {
  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#2563EB]">
            Testimonials
          </span>
          <h2 className="text-3xl font-bold text-[#0F172A] mt-2">
            Trusted by students and educators
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white rounded-2xl p-6 border border-[#E2E8F0]"
              style={shadowSm}
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-[#F59E0B] fill-[#F59E0B]"
                  />
                ))}
              </div>

              <p className="text-sm text-[#475569] leading-relaxed mb-5">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full text-white text-sm font-bold flex items-center justify-center flex-shrink-0"
                  style={{ background: testimonial.color }}
                >
                  {testimonial.avatar}
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#0F172A]">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-[#94A3B8]">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
