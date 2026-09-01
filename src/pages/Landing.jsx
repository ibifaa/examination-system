import React, { useState, useEffect } from "react";
import { 
  ArrowRight, Menu, X, Sparkles, LogIn, ChevronUp, ChevronDown, CheckCircle, 
  Clock, Shield, Zap, BarChart2, BookOpen, LayoutDashboard, Smartphone, Users,
  GraduationCap, Twitter, Linkedin, Github, Globe, Bell, Inbox, FileText
} from "lucide-react";
import { Logo, PrimaryBtn, OutlineBtn } from "../components/Shared";

const FEATURES_LIST = [
  { icon: <Shield className="w-5 h-5" />, title: "Secure Authentication", desc: "Multi-factor login, role-based access, and session management keep every exam session protected.", color: "#DBEAFE", ic: "#2563EB" },
  { icon: <Clock className="w-5 h-5" />, title: "Timed Examinations", desc: "Auto-submit on timeout with per-question timers and flexible scheduling windows.", color: "#FEF3C7", ic: "#D97706" },
  { icon: <Zap className="w-5 h-5" />, title: "Instant Results", desc: "Objective exams are graded in real time. Students see scores the moment they submit.", color: "#DCFCE7", ic: "#16A34A" },
  { icon: <BarChart2 className="w-5 h-5" />, title: "Performance Analytics", desc: "Track progress over time with visual charts, percentile rankings, and skill breakdowns.", color: "#EDE9FE", ic: "#7C3AED" },
  { icon: <BookOpen className="w-5 h-5" />, title: "Teacher Question Bank", desc: "Build, categorise, and reuse question banks. Set difficulty levels and mark schemes.", color: "#FEE2E2", ic: "#DC2626" },
  { icon: <LayoutDashboard className="w-5 h-5" />, title: "Admin Dashboard", desc: "System-wide oversight: user management, exam scheduling, audit logs, and reports.", color: "#E0F2FE", ic: "#0284C7" },
  { icon: <Smartphone className="w-5 h-5" />, title: "Responsive Design", desc: "Fully optimised for desktop, tablet, and mobile — exams work on any screen size.", color: "#F0FDF4", ic: "#15803D" },
  { icon: <Users className="w-5 h-5" />, title: "Role-Based Access", desc: "Separate portals for students, teachers, and administrators — each with tailored permissions.", color: "#FFF7ED", ic: "#C2410C" }
];

const TESTIMONIALS = [
  { name: "Amaka Okonkwo", role: "Computer Science Student", rating: 5, text: "ExamBoard made my finals so much easier. The interface is clean and the countdown timer kept me on track without panic.", avatar: "AO", color: "#2563EB" },
  { name: "Dr. Femi Adesanya", role: "Senior Lecturer, Mathematics", rating: 5, text: "Setting up exam papers used to take days. With the question bank, I can build and publish a full exam in under an hour.", avatar: "FA", color: "#22C55E" },
  { name: "Chidinma Eze", role: "Final Year Student", rating: 5, text: "I love seeing my results instantly. The analytics page shows exactly where I lost marks so I know what to revise.", avatar: "CE", color: "#8B5CF6" }
];

const FAQS = [
  { q: "Is ExamBoard free for students?", a: "Yes. Student accounts are completely free. Institutions pay for the platform, not individual students." },
  { q: "What devices can I use to take exams?", a: "ExamBoard works on desktop, laptop, tablet, and mobile — any modern browser without downloads required." },
  { q: "How is academic integrity maintained?", a: "We use randomised question orders, time-limited sessions, and optional webcam proctoring with AI monitoring." },
  { q: "Can teachers upload their own questions?", a: "Absolutely. Teachers can import questions via CSV, type them directly, or build them from the question bank with images, equations, and multiple choice or essay formats." },
  { q: "How quickly are results available?", a: "Objective exams (MCQ) are graded instantly on submission. Essay or theory answers are routed to the instructor for manual grading." },
  { q: "Is my data secure?", a: "All data is encrypted in transit and at rest. We comply with NDPR and GDPR guidelines. No exam data is ever shared with third parties." }
];

const Landing = ({ onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const shadowStyle = { boxShadow: "0 4px 24px rgba(37,99,235,0.07), 0 1px 4px rgba(0,0,0,0.06)" };
  const cardShadow = { boxShadow: "0 1px 6px rgba(0,0,0,0.06)" };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 antialiased selection:bg-blue-100">
      
      {/* Header / Navbar */}
      <header className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md transition-shadow duration-200 ${scrolled ? "shadow-sm border-b border-[#F1F5F9]" : "border-b border-transparent"}`}>
        <div className="max-w-7xl mx-auto px-5 lg:px-8 flex items-center justify-between h-16">
          <Logo onClick={() => onNavigate("landing")} />
          
          <nav className="hidden md:flex items-center gap-1">
            {["Home", "Features", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="px-4 py-2 text-sm font-medium text-[#475569] hover:text-[#0F172A] hover:bg-[#F8FAFC] rounded-lg transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <OutlineBtn onClick={() => onNavigate("login")}>Login</OutlineBtn>
            <PrimaryBtn onClick={() => onNavigate("register")} className="flex items-center gap-1">
              Register <ArrowRight className="w-4 h-4" />
            </PrimaryBtn>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-[#F1F5F9] text-[#475569] focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#F1F5F9] bg-white px-5 py-4 space-y-1">
            {["Home", "Features", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-[#475569] hover:text-[#0F172A] rounded-lg transition-colors"
              >
                {item}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-2 border-t border-slate-100 mt-2">
              <OutlineBtn onClick={() => { setMobileMenuOpen(false); onNavigate("login"); }} className="w-full">
                Login
              </OutlineBtn>
              <PrimaryBtn onClick={() => { setMobileMenuOpen(false); onNavigate("register"); }} className="w-full">
                Get Started
              </PrimaryBtn>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="max-w-7xl mx-auto px-5 lg:px-8 pt-16 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-left space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#DBEAFE] text-[#1D4ED8] text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Now with AI-powered proctoring</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-extrabold text-[#0F172A] leading-tight tracking-tight">
            Smart Computer-Based
            <br />
            <span className="text-[#2563EB]">Examination Platform</span>
          </h1>
          
          <p className="text-base text-[#475569] leading-relaxed max-w-lg">
            Deliver secure online examinations with real-time results, deep performance analytics, a teacher question bank, and complete administrative control — all in one elegant platform.
          </p>
          
          <div className="flex flex-wrap gap-3">
            <PrimaryBtn onClick={() => onNavigate("register")} className="text-base px-6 py-3 flex items-center gap-1.5 shadow-lg shadow-blue-500/20">
              Get Started Free <ArrowRight className="w-4 h-4" />
            </PrimaryBtn>
            <OutlineBtn onClick={() => onNavigate("login")} className="text-base px-6 py-3 flex items-center gap-1.5">
              <LogIn className="w-4 h-4" /> Login
            </OutlineBtn>
          </div>

          {/* Social Proof */}
          <div className="flex items-center gap-4 flex-wrap pt-2">
            <div className="flex -space-x-2">
              {["#2563EB", "#22C55E", "#F59E0B", "#8B5CF6"].map((color, idx) => (
                <div
                  key={idx}
                  className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-white text-[10px] font-bold shadow-sm"
                  style={{ background: color }}
                >
                  {["JA", "AO", "FE", "CE"][idx]}
                </div>
              ))}
            </div>
            <p className="text-xs text-[#475569]">
              <span className="font-bold text-[#0F172A]">12,400+</span> students already enrolled
            </p>
          </div>
        </div>

        {/* Interactive Visual Dashboard representation */}
        <div className="relative hidden lg:block select-none">
          <div className="absolute inset-0 bg-gradient-to-br from-[#DBEAFE] to-[#E0F2FE] rounded-3xl -rotate-2"></div>
          
          <div className="relative bg-white rounded-2xl p-6 shadow-xl border border-slate-100" style={{ boxShadow: "0 20px 60px rgba(37,99,235,0.12)" }}>
            {/* Header circles */}
            <div className="flex items-center gap-1.5 mb-4 border-b border-[#F1F5F9] pb-3">
              <div className="w-3 h-3 rounded-full bg-[#EF4444]"></div>
              <div className="w-3 h-3 rounded-full bg-[#F59E0B]"></div>
              <div className="w-3 h-3 rounded-full bg-[#22C55E]"></div>
              <div className="flex-1 mx-2 h-6 bg-[#F8FAFC] rounded-md flex items-center px-2 border border-slate-100">
                <span className="text-[10px] text-[#94A3B8]">examboard.ng/dashboard</span>
              </div>
            </div>

            {/* Exam card mockup */}
            <div className="bg-[#F8FAFC] rounded-xl p-4 mb-4 border border-[#E2E8F0] text-left">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="text-xs font-bold text-[#0F172A]">Mathematics — Final Term</p>
                  <p className="text-[11px] text-[#94A3B8]">Question 24 of 60</p>
                </div>
                <div className="flex items-center gap-1.5 text-[#EF4444] text-xs font-bold bg-[#FEE2E2] px-2.5 py-1 rounded-full border border-rose-100">
                  <Clock className="w-3.5 h-3.5" />
                  <span>47:12</span>
                </div>
              </div>
              
              <div className="h-1.5 bg-[#E2E8F0] rounded-full mb-3 overflow-hidden">
                <div className="h-full bg-[#2563EB] rounded-full" style={{ width: "40%" }}></div>
              </div>
              
              <p className="text-xs text-[#0F172A] font-medium mb-3">
                If f(x) = 3x² + 2x − 5, find f'(x).
              </p>
              
              <div className="grid grid-cols-2 gap-2">
                {["6x + 2", "3x + 2", "6x − 5", "3x² + 2"].map((ans, idx) => (
                  <div
                    key={ans}
                    className={`text-[11px] px-2.5 py-2 rounded-lg border text-center font-semibold transition-all ${
                      idx === 0
                        ? "border-[#2563EB] bg-[#DBEAFE] text-[#1D4ED8]"
                        : "border-[#E2E8F0] bg-white text-[#475569]"
                    }`}
                  >
                    {ans}
                  </div>
                ))}
              </div>
            </div>

            {/* Quick stats mini row */}
            <div className="grid grid-cols-3 gap-2">
              {[
                { v: "78%", l: "Score", c: "#22C55E" },
                { v: "36", l: "Answered", c: "#2563EB" },
                { v: "4", l: "Flagged", c: "#F59E0B" }
              ].map((stat) => (
                <div key={stat.l} className="bg-white border border-[#E2E8F0] rounded-xl px-3 py-2 text-center" style={cardShadow}>
                  <p className="text-sm font-bold" style={{ color: stat.c }}>{stat.v}</p>
                  <p className="text-[10px] text-[#94A3B8] font-medium">{stat.l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Floating Badges */}
          <div className="absolute -top-4 -right-4 bg-[#DCFCE7] border border-emerald-200 text-[#15803D] text-[11px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md transform rotate-2">
            <CheckCircle className="w-3.5 h-3.5 text-[#22C55E]" />
            <span>Live Exam Active</span>
          </div>

          <div className="absolute -bottom-4 -left-4 bg-white border border-[#E2E8F0] text-[11px] font-semibold px-3 py-2 rounded-xl shadow-lg flex items-center gap-2">
            <BarChart2 className="w-3.5 h-3.5 text-[#22C55E]" />
            <span className="text-[#0F172A]">
              Pass rate <span className="text-[#22C55E] font-bold">+8%</span> this term
            </span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-[#F8FAFC] py-20 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-12 space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#2563EB]">
              Platform Features
            </span>
            <h2 className="text-3xl font-extrabold text-[#0F172A] tracking-tight">
              Everything you need, nothing you don't
            </h2>
            <p className="text-[#475569] max-w-xl mx-auto text-sm">
              A complete examination ecosystem built for Nigerian universities, polytechnics, and colleges of education.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES_LIST.map((feat) => (
              <div
                key={feat.title}
                className="bg-white rounded-2xl p-6 border border-[#E2E8F0] hover:border-[#BFDBFE] hover:-translate-y-1 transition-all duration-200 cursor-default text-left"
                style={cardShadow}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 shadow-sm"
                  style={{ background: feat.color, color: feat.ic }}
                >
                  {feat.icon}
                </div>
                <h3 className="text-sm font-bold text-[#0F172A] mb-2">{feat.title}</h3>
                <p className="text-xs text-[#475569] leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="about" className="py-20 max-w-7xl mx-auto px-5 lg:px-8">
        <div className="text-center mb-16 space-y-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#2563EB]">
            How It Works
          </span>
          <h2 className="text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Up and running in three steps
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line for large screens */}
          <div className="hidden md:block absolute top-10 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-0.5 bg-gradient-to-r from-[#DBEAFE] via-[#2563EB] to-[#DBEAFE]"></div>

          {[
            { step: "01", icon: <Users className="w-6 h-6" />, title: "Register", body: "Create your free account, select your role — student or teacher — and complete email verification in under 2 minutes." },
            { step: "02", icon: <FileText className="w-6 h-6" />, title: "Take Your Exam", body: "Log in on exam day, enter your exam code, and complete your questions within the allotted time on any device." },
            { step: "03", icon: <BarChart2 className="w-6 h-6" />, title: "View Results", body: "Objective exams are graded instantly. Explore your score breakdown, percentile rank, and question-level feedback." }
          ].map((item) => (
            <div key={item.step} className="flex flex-col items-center text-center px-4 relative z-10">
              <div className="relative mb-5">
                <div className="w-20 h-20 rounded-2xl bg-[#DBEAFE] flex items-center justify-center text-[#2563EB] shadow-md border border-blue-100">
                  {item.icon}
                </div>
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#2563EB] text-white text-[10px] font-extrabold flex items-center justify-center shadow-md">
                  {item.step}
                </span>
              </div>
              <h3 className="text-base font-bold text-[#0F172A] mb-2">{item.title}</h3>
              <p className="text-sm text-[#475569] leading-relaxed max-w-xs">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Dynamic Statistics counter panel */}
      <section className="bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] py-16 text-white overflow-hidden relative">
        {/* Background blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 text-center">
            {[
              { target: "12,400+", label: "Students Registered" },
              { target: "840+", label: "Exams Conducted" },
              { target: "94%", label: "Pass Rate" },
              { target: "220+", label: "Teachers Joined" },
              { target: "48", label: "Active Exams Today" }
            ].map((stat) => (
              <div key={stat.label} className="text-center space-y-1">
                <p className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight">{stat.target}</p>
                <p className="text-xs text-blue-100/70 uppercase tracking-wider font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-12 space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#2563EB]">
              Testimonials
            </span>
            <h2 className="text-3xl font-extrabold text-[#0F172A] tracking-tight">
              Trusted by students and educators
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((tst) => (
              <div
                key={tst.name}
                className="bg-white rounded-2xl p-6 border border-[#E2E8F0] text-left flex flex-col justify-between"
                style={cardShadow}
              >
                <div className="space-y-4">
                  <div className="flex gap-0.5 text-[#F59E0B]">
                    {Array.from({ length: tst.rating }).map((_, rIdx) => (
                      <svg key={rIdx} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-[#475569] leading-relaxed italic">
                    "{tst.text}"
                  </p>
                </div>
                <div className="flex items-center gap-3 mt-6 border-t border-slate-100 pt-4">
                  <div
                    className="w-10 h-10 rounded-full text-white text-xs font-bold flex items-center justify-center flex-shrink-0"
                    style={{ background: tst.color }}
                  >
                    {tst.avatar}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#0F172A]">{tst.name}</p>
                    <p className="text-[10px] text-[#94A3B8]">{tst.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-20 max-w-3xl mx-auto px-5 lg:px-8">
        <div className="text-center mb-12 space-y-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#2563EB]">
            FAQ
          </span>
          <h2 className="text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Common questions
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden transition-all duration-200"
                style={cardShadow}
              >
                <button
                  className="w-full flex items-center justify-between px-6 py-4 text-left focus:outline-none"
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                >
                  <span className="text-sm font-bold text-[#0F172A]">{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-[#2563EB] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#94A3B8] flex-shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-left transition-all duration-300">
                    <div className="h-px bg-[#F1F5F9] mb-4"></div>
                    <p className="text-xs text-[#475569] leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA Block */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 pb-20">
        <div
          className="rounded-3xl overflow-hidden relative shadow-2xl border border-blue-700/20"
          style={{ background: "linear-gradient(135deg, #1E40AF 0%, #2563EB 60%, #3B82F6 100%)" }}
        >
          {/* Inner blobs */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
          
          <div className="px-8 lg:px-16 py-14 text-center relative z-10 space-y-6">
            <h2 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
              Ready to transform your examinations?
            </h2>
            <p className="text-blue-100/80 text-sm max-w-xl mx-auto leading-relaxed">
              Join over 12,000 students and 200 educators already using ExamBoard — free to get started, no credit card required.
            </p>
            <div className="flex flex-wrap gap-3 justify-center pt-2">
              <button
                onClick={() => onNavigate("register")}
                className="bg-white text-[#2563EB] hover:bg-[#F8FAFC] active:scale-95 text-sm font-bold px-6 py-3 rounded-xl flex items-center gap-1.5 transition-all shadow-lg"
              >
                <Sparkles className="w-4 h-4" /> Create Free Account
              </button>
              <button
                onClick={() => onNavigate("login")}
                className="border border-white/50 text-white hover:bg-white/10 active:scale-95 text-sm font-bold px-6 py-3 rounded-xl transition-all"
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Component Showcase Examples (Empty state previews) */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 pb-20 border-t border-slate-100 pt-16">
        <div className="text-center mb-8 space-y-1">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#94A3B8]">
            Mock Dashboard Element Previews
          </span>
          <h3 className="text-sm font-bold text-slate-400">Empty State Components</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: <Bell className="w-6 h-6" />, title: "No notifications", body: "You're all caught up. Notifications will appear here when there's something new.", color: "#DBEAFE", ic: "#2563EB" },
            { icon: <Inbox className="w-6 h-6" />, title: "No messages", body: "Your inbox is empty. Messages from your institution will appear here.", color: "#EDE9FE", ic: "#7C3AED" },
            { icon: <FileText className="w-6 h-6" />, title: "No recent exams", body: "You haven't taken any exams yet. Check back when your teacher schedules one.", color: "#DCFCE7", ic: "#16A34A" }
          ].map((item) => (
            <div key={item.title} className="bg-white border border-[#E2E8F0] rounded-2xl p-6 text-center" style={cardShadow}>
              <div
                className="w-12 h-12 rounded-2xl mx-auto mb-4 flex items-center justify-center border border-slate-100"
                style={{ background: item.color, color: item.ic }}
              >
                {item.icon}
              </div>
              <h4 className="text-xs font-bold text-[#0F172A] mb-1.5">{item.title}</h4>
              <p className="text-[11px] text-[#94A3B8] leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[#0F172A] text-white pt-16 pb-8 border-t border-slate-800 relative overflow-hidden">
        {/* Footer mesh glow */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-5 lg:px-8 space-y-12 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4 text-left">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-[#2563EB] flex items-center justify-center shadow-md">
                  <GraduationCap className="w-4 h-4 text-white" />
                </div>
                <span className="font-bold text-white text-lg">ExamBoard</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed max-w-xs">
                Nigeria's premier computer-based examination platform for universities, polytechnics, and colleges of education.
              </p>
              <div className="flex gap-2.5 pt-2">
                {[<Twitter className="w-4 h-4" />, <Linkedin className="w-4 h-4" />, <Github className="w-4 h-4" />, <Facebook className="w-4 h-4" />].map((ico, i) => (
                  <button
                    key={i}
                    className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-[#2563EB] hover:text-white transition-colors"
                  >
                    {ico}
                  </button>
                ))}
              </div>
            </div>

            {[
              { title: "Platform", links: ["Features", "How It Works", "Pricing", "Security", "API"] },
              { title: "Institution", links: ["For Students", "For Teachers", "For Admins", "Enterprise"] },
              { title: "Support", links: ["Help Centre", "Contact Us", "Privacy Policy", "Terms of Service", "Status"] }
            ].map((col) => (
              <div key={col.title} className="text-left space-y-4">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{col.title}</p>
                <div className="space-y-2">
                  {col.links.map((lnk) => (
                    <button key={lnk} className="block text-xs text-slate-400 hover:text-white transition-colors">
                      {lnk}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[11px] text-slate-500">
              © 2026 ExamBoard Technologies Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-1 text-[11px] text-slate-500">
              <Globe className="w-3.5 h-3.5" />
              <span>Nigeria · English</span>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Landing;
