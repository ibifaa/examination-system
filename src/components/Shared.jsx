import React from "react";
import { GraduationCap, RefreshCw, AlertCircle, CheckCircle, Clock, Check, X, Shield, Mail, Lock, User, Eye, EyeOff } from "lucide-react";

// Logo Component
export const Logo = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2.5 select-none focus:outline-none text-left"
    >
      <div className="w-9 h-9 rounded-xl bg-[#2563EB] flex items-center justify-center flex-shrink-0 shadow-md">
        <GraduationCap className="w-5 h-5 text-white" />
      </div>
      <div className="text-left">
        <span className="text-sm font-bold text-[#0F172A] block leading-none">
          ExamBoard
        </span>
        <span className="text-[10px] text-[#94A3B8] leading-none">
          CBT Platform
        </span>
      </div>
    </button>
  );
};

// Primary Button Component
export const PrimaryBtn = ({ children, onClick, loading, className = "", type = "button", disabled }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={loading || disabled}
      className={`flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] active:scale-[0.98] transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed ${className}`}
    >
      {loading ? (
        <RefreshCw className="w-4 h-4 animate-spin" />
      ) : (
        children
      )}
    </button>
  );
};

// Outline Button Component
export const OutlineBtn = ({ children, onClick, className = "", type = "button", disabled }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-[#2563EB] border border-[#2563EB] hover:bg-[#DBEAFE] active:scale-[0.98] transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed ${className}`}
    >
      {children}
    </button>
  );
};

// Input Field Component
export const InputField = ({ label, type = "text", placeholder, value, onChange, icon, error, hint, rightEl }) => {
  return (
    <div className="text-left">
      <label className="block text-xs font-semibold text-[#0F172A] mb-1.5 uppercase tracking-wide">
        {label}
      </label>
      <div className="relative">
        {icon && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]">
            {icon}
          </span>
        )}
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`w-full ${icon ? "pl-9" : "pl-3"} ${rightEl ? "pr-10" : "pr-3"} py-2.5 text-sm border rounded-xl bg-white text-[#0F172A] placeholder-[#CBD5E1] outline-none transition-all duration-150
            ${error ? "border-[#EF4444] focus:border-[#EF4444] focus:ring-2 focus:ring-[#FEE2E2]" : "border-[#E2E8F0] focus:border-[#2563EB] focus:ring-2 focus:ring-[#DBEAFE]"}`}
        />
        {rightEl && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2">
            {rightEl}
          </span>
        )}
      </div>
      {error && (
        <p className="text-[11px] text-[#EF4444] mt-1.5 flex items-center gap-1">
          <AlertCircle className="w-3 h-3 flex-shrink-0" />
          {error}
        </p>
      )}
      {hint && !error && (
        <p className="text-[11px] text-[#94A3B8] mt-1.5">
          {hint}
        </p>
      )}
    </div>
  );
};

// Social Login Button Component
export const SocialBtn = ({ icon, label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center justify-center gap-2.5 px-4 py-2.5 border border-[#E2E8F0] rounded-xl text-sm font-medium text-[#475569] hover:bg-[#F8FAFC] hover:border-[#CBD5E1] active:scale-[0.98] transition-all duration-150"
    >
      {icon}
      {label}
    </button>
  );
};

// Divider Component
export const Divider = ({ label }) => {
  return (
    <div className="flex items-center gap-3 my-5">
      <div className="flex-1 h-px bg-[#E2E8F0]"></div>
      <span className="text-xs font-medium text-[#94A3B8]">{label}</span>
      <div className="flex-1 h-px bg-[#E2E8F0]"></div>
    </div>
  );
};

// Google Icon SVG Component
export const GoogleIcon = () => {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z" fill="#4285F4" />
      <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.909-2.259c-.806.54-1.837.86-3.047.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z" fill="#34A853" />
      <path d="M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05" />
      <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335" />
    </svg>
  );
};

// Auth Illustration (Left-Side Sidebar)
export const AuthIllustration = ({ tagline, sub }) => {
  return (
    <div
      className="hidden lg:flex flex-col justify-between h-full p-10 select-none text-white relative overflow-hidden"
      style={{ background: "linear-gradient(145deg, #1E3A8A 0%, #2563EB 55%, #3B82F6 100%)" }}
    >
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="relative z-10">
        <Logo onClick={() => {}} />
      </div>

      <div className="relative z-10 my-auto py-10 flex flex-col items-center">
        {/* Mock Exam UI Dashboard Component */}
        <div className="w-full max-w-[320px] mb-8 relative">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 shadow-2xl">
            <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#22C55E]"></div>
              </div>
              <div className="h-2 w-24 bg-white/20 rounded-full"></div>
            </div>
            
            <div className="space-y-3">
              {[
                { name: "Mathematics — CBT Final", score: "78%", width: "78%", color: "bg-emerald-400" },
                { name: "Physics — General Test", score: "91%", width: "91%", color: "bg-indigo-400" },
                { name: "Chemistry — Quiz 3", score: "65%", width: "65%", color: "bg-amber-400" }
              ].map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center justify-between text-[10px] text-white/80">
                    <span className="font-medium truncate max-w-[150px]">{item.name}</span>
                    <span className="font-bold">{item.score}</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full ${item.color}`} style={{ width: item.width }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Badges */}
          <div className="absolute -top-3 -right-3 bg-[#22C55E] text-white text-[10px] font-bold px-2.5 py-1.5 rounded-full flex items-center gap-1 shadow-lg transform rotate-3">
            <CheckCircle className="w-3 h-3" />
            <span>Passed</span>
          </div>

          <div className="absolute -bottom-3 -left-3 bg-[#FEF3C7] text-[#92400E] text-[10px] font-bold px-2.5 py-1.5 rounded-full flex items-center gap-1 shadow-lg transform -rotate-2">
            <Clock className="w-3 h-3" />
            <span>47m left</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mb-3 text-center leading-snug tracking-tight">
          {tagline}
        </h2>
        <p className="text-blue-100/80 text-sm text-center leading-relaxed max-w-sm">
          {sub}
        </p>
      </div>

      <div className="relative z-10 flex items-center justify-between border-t border-white/10 pt-4">
        <div className="flex gap-5 text-center">
          {[
            { v: "12.4k", l: "Students" },
            { v: "840+", l: "Exams" },
            { v: "94%", l: "Pass Rate" }
          ].map((stat, idx) => (
            <div key={idx} className="text-left">
              <p className="text-base font-bold text-white leading-tight">{stat.v}</p>
              <p className="text-[10px] text-blue-100/70">{stat.l}</p>
            </div>
          ))}
        </div>
        <p className="text-blue-100/50 text-[10px]">
          © 2026 ExamBoard.
        </p>
      </div>
    </div>
  );
};

// Auth Layout (Split View layout: Left Sidebar, Right Form Content)
export const AuthLayout = ({ left, right }) => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex font-sans antialiased text-slate-900">
      {/* Left panel (Illustration) */}
      <div className="hidden lg:block w-[42%] min-h-screen flex-shrink-0">
        {left}
      </div>
      {/* Right panel (Content Form) */}
      <div className="flex-1 flex items-center justify-center px-5 py-12 min-h-screen overflow-y-auto bg-slate-50/50">
        {right}
      </div>
    </div>
  );
};

// Password Strength Meter Component
export const PasswordStrength = ({ password }) => {
  const requirements = [
    { label: "8+ characters", ok: password.length >= 8 },
    { label: "Uppercase letter", ok: /[A-Z]/.test(password) },
    { label: "Number digit", ok: /[0-9]/.test(password) },
    { label: "Special symbol", ok: /[^A-Za-z0-9]/.test(password) }
  ];

  const strengthCount = requirements.filter((req) => req.ok).length;
  const strengthLabels = ["", "Weak", "Fair", "Good", "Strong"];
  const strengthColors = ["", "#EF4444", "#F59E0B", "#22C55E", "#22C55E"];

  if (!password) return null;

  return (
    <div className="mt-2 text-left">
      <div className="flex gap-1 mb-1.5">
        {[1, 2, 3, 4].map((level) => (
          <div
            key={level}
            className="h-1 flex-1 rounded-full transition-all duration-300"
            style={{
              background: level <= strengthCount ? strengthColors[strengthCount] : "#E2E8F0"
            }}
          ></div>
        ))}
      </div>
      <div className="flex items-center justify-between mb-2">
        <div className="flex gap-3 flex-wrap">
          {requirements.map((req, idx) => (
            <span
              key={idx}
              className={`text-[10px] flex items-center gap-0.5 ${
                req.ok ? "text-emerald-500 font-medium" : "text-slate-400"
              }`}
            >
              {req.ok ? <Check className="w-3 h-3" /> : <X className="w-3 h-3" />}
              {req.label}
            </span>
          ))}
        </div>
        <span
          className="text-[10px] font-bold uppercase tracking-wider"
          style={{ color: strengthColors[strengthCount] }}
        >
          {strengthLabels[strengthCount]}
        </span>
      </div>
    </div>
  );
};
