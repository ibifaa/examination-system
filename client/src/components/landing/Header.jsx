import { useEffect, useState } from "react";
import { ArrowRight, Menu } from "lucide-react";
import Logo from "../ui/Logo";
import PrimaryButton from "../ui/PrimaryButton";
import OutlineButton from "../ui/OutlineButton";

export default function Header({ nav }) {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = ["Home", "Features", "About", "Contact"];

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-200 mx-[10%] ${
        scrolled
          ? "shadow-sm border-b border-[#F1F5F9]"
          : "border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8 flex items-center justify-between h-16">
        <Logo onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} />

        <nav className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="px-4 py-2 text-sm font-medium text-[#475569] hover:text-[#0F172A] hover:bg-[#F8FAFC] rounded-lg transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <OutlineButton onClick={() => nav("login")}>Login</OutlineButton>
          <PrimaryButton onClick={() => nav("register")}>
            Register <ArrowRight className="w-4 h-4" />
          </PrimaryButton>
        </div>

        <button
          className="md:hidden p-2 rounded-lg hover:bg-[#F1F5F9] text-[#475569]"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          <Menu className="w-5 h-5" />
        </button>
      </div>

      {mobileMenu && (
        <div className="md:hidden border-t border-[#F1F5F9] bg-white px-5 py-4 space-y-1">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMobileMenu(false)}
              className="block px-3 py-2 text-sm font-medium text-[#475569] hover:text-[#0F172A] rounded-lg"
            >
              {link}
            </a>
          ))}

          <div className="pt-2 flex flex-col gap-2">
            <OutlineButton onClick={() => nav("login")} className="w-full">
              Login
            </OutlineButton>
            <PrimaryButton onClick={() => nav("register")} className="w-full">
              Get Started
            </PrimaryButton>
          </div>
        </div>
      )}
    </header>
  );
}
