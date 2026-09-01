import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { ShieldCheck, Eye, EyeOff, Mail, Lock } from "lucide-react";

const Login = () => {
  const { login, loginWith2FA } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  
  // 2FA state
  const [twoFactorRequired, setTwoFactorRequired] = useState(false);
  const [tempToken, setTempToken] = useState("");
  const [code, setCode] = useState("");

  const from = location.state?.from?.pathname || "/";
  const wasSessionExpired = new URLSearchParams(location.search).get("expired") === "true";

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await login(email, password);
      if (res.twoFactorRequired) {
        setTwoFactorRequired(true);
        setTempToken(res.tempToken);
      } else {
        navigate(from, { replace: true });
      }
    } catch (err) {
      setError(err.response?.data?.message || err.response?.data?.error || "Login failed. Check credentials.");
    } finally {
      setLoading(false);
    }
  };

  const handle2FA = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await loginWith2FA(tempToken, code);
      navigate(from, { replace: true });
    } catch (err) {
      setError(err.response?.data?.message || err.response?.data?.error || "Invalid 2FA code.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-slate-950 px-4 py-12 text-slate-100">
      <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900/40 p-8 shadow-xl backdrop-blur-md">
        
        {/* Header */}
        <div className="mb-8 text-center">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 font-extrabold text-2xl text-white shadow-[0_0_20px_rgba(79,70,229,0.4)] mb-4">
            F
          </span>
          <h1 className="text-2xl font-bold tracking-tight text-white">
            {twoFactorRequired ? "Two-Factor Auth" : "Sign In to Focus"}
          </h1>
          <p className="mt-2 text-sm text-slate-400">
            {twoFactorRequired 
              ? "Enter the 6-digit code from your authenticator application" 
              : "Access your test portal"}
          </p>
        </div>

        {wasSessionExpired && !twoFactorRequired && (
          <div className="mb-6 rounded-lg bg-amber-900/25 border border-amber-800/60 p-3 text-sm text-amber-300 text-center">
            Your session has expired. Please log in again.
          </div>
        )}

        {error && (
          <div className="mb-6 rounded-lg bg-rose-900/25 border border-rose-800/60 p-3 text-sm text-rose-300 text-center">
            {error}
          </div>
        )}

        {/* Regular Login Form */}
        {!twoFactorRequired ? (
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-500">
                  <Mail className="h-5 w-5" />
                </span>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full rounded-lg border border-slate-700 bg-slate-900/60 py-2.5 pl-10 pr-4 text-slate-100 placeholder-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="password" className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Password
                </label>
                <Link to="/forgot-password" className="text-xs text-indigo-400 hover:text-indigo-300 transition">
                  Forgot Password?
                </Link>
              </div>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-500">
                  <Lock className="h-5 w-5" />
                </span>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-lg border border-slate-700 bg-slate-900/60 py-2.5 pl-10 pr-10 text-slate-100 placeholder-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-500 hover:text-slate-300"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-2 flex w-full justify-center rounded-lg bg-indigo-600 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-950 disabled:opacity-50"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>

            <p className="text-center text-sm text-slate-400 mt-6">
              New user?{" "}
              <Link to="/register" className="text-indigo-400 hover:text-indigo-300 transition font-medium">
                Create an account
              </Link>
            </p>
          </form>
        ) : (
          /* 2FA Form */
          <form onSubmit={handle2FA} className="space-y-6">
            <div>
              <label htmlFor="code" className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2 text-center">
                Authenticator Code
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-500">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <input
                  id="code"
                  type="text"
                  required
                  maxLength={6}
                  pattern="[0-9]*"
                  inputMode="numeric"
                  value={code}
                  onChange={(e) => setCode(e.target.value.replace(/\D/g, ""))}
                  placeholder="000000"
                  className="w-full rounded-lg border border-slate-700 bg-slate-900/60 py-3 pl-10 pr-4 text-center text-xl font-bold tracking-widest text-slate-100 placeholder-slate-600 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading || code.length !== 6}
              className="flex w-full justify-center rounded-lg bg-indigo-600 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-950 disabled:opacity-50"
            >
              {loading ? "Verifying..." : "Verify & Sign In"}
            </button>

            <button
              type="button"
              onClick={() => {
                setTwoFactorRequired(false);
                setError("");
                setCode("");
              }}
              className="w-full text-center text-sm text-indigo-400 hover:text-indigo-300 transition font-medium"
            >
              Back to Login
            </button>
          </form>
        )}

      </div>
    </div>
  );
};

export default Login;
