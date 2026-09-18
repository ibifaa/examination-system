import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { faqs } from "../../data/landingData";

const shadowSm = { boxShadow: "0 1px 6px rgba(0,0,0,0.06)" };

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <section className="py-20 max-w-3xl mx-auto px-5 lg:px-8">
      <div className="text-center mb-12">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#2563EB]">
          FAQ
        </span>
        <h2 className="text-3xl font-bold text-[#0F172A] mt-2">
          Common questions
        </h2>
      </div>

      <div className="space-y-2">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden"
            style={shadowSm}
          >
            <button
              className="w-full flex items-center justify-between px-6 py-4 text-left"
              onClick={() =>
                setOpenFaq(openFaq === index ? null : index)
              }
            >
              <span className="text-sm font-semibold text-[#0F172A]">
                {faq.q}
              </span>

              {openFaq === index ? (
                <ChevronUp className="w-4 h-4 text-[#2563EB] flex-shrink-0" />
              ) : (
                <ChevronDown className="w-4 h-4 text-[#94A3B8] flex-shrink-0" />
              )}
            </button>

            {openFaq === index && (
              <div className="px-6 pb-5">
                <div className="h-px bg-[#F1F5F9] mb-4" />
                <p className="text-sm text-[#475569] leading-relaxed">
                  {faq.a}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
