import { Globe, GraduationCap } from "lucide-react";

import {
  FacebookIcon,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
} from "../ui/SocialIcons";

export default function Footer() {
  const columns = [
    {
      title: "Platform",
      links: ["Features", "How It Works", "Pricing", "Security", "API"],
    },
    {
      title: "Institution",
      links: ["For Students", "For Teachers", "For Admins", "Enterprise"],
    },
    {
      title: "Support",
      links: [
        "Help Centre",
        "Contact Us",
        "Privacy Policy",
        "Terms of Service",
        "Status",
      ],
    },
  ];

  return (
    <footer id="contact" className="bg-[#0F172A] text-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-xl bg-[#2563EB] flex items-center justify-center">
                <GraduationCap className="w-4 h-4 text-white" />
              </div>

              <span className="font-bold text-white">
                ExamBoard
              </span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              Nigeria's premier computer-based examination platform for
              universities, polytechnics, and colleges of education.
            </p>

            {/* Social Media */}
            <div className="flex gap-3 mt-5">
              <button
                type="button"
                aria-label="X / Twitter"
                className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-slate-400 hover:bg-[#2563EB] hover:text-white transition-colors"
              >
                <TwitterIcon className="w-4 h-4" />
              </button>

              <button
                type="button"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-slate-400 hover:bg-[#2563EB] hover:text-white transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </button>

              <button
                type="button"
                aria-label="GitHub"
                className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-slate-400 hover:bg-[#2563EB] hover:text-white transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </button>

              <button
                type="button"
                aria-label="Facebook"
                className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-slate-400 hover:bg-[#2563EB] hover:text-white transition-colors"
              >
                <FacebookIcon className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Footer Columns */}
          {columns.map((column) => (
            <div key={column.title}>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
                {column.title}
              </p>

              <div className="space-y-2.5">
                {column.links.map((link) => (
                  <button
                    key={link}
                    type="button"
                    className="block text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            © 2026 ExamBoard Technologies Ltd. All rights reserved.
          </p>

          <div className="flex items-center gap-1.5 text-xs text-slate-500">
            <Globe className="w-3.5 h-3.5" />
            Nigeria · English
          </div>
        </div>
      </div>
    </footer>
  );
}