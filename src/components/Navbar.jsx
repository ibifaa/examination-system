import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { LogOut, BookOpen, User as UserIcon } from "lucide-react";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2 text-xl font-bold tracking-tight text-white transition hover:opacity-90">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 font-extrabold text-white shadow-[0_0_15px_rgba(79,70,229,0.5)]">
                F
              </span>
              <span>
                Focus<span className="text-indigo-400 font-medium">Exam</span>
              </span>
            </Link>
          </div>

          {/* User Section */}
          {user && (
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 rounded-full bg-slate-900/60 px-3 py-1.5 border border-slate-800 text-sm text-slate-300">
                <UserIcon className="h-4 w-4 text-indigo-400" />
                <span className="font-medium max-w-[100px] truncate sm:max-w-none">
                  {user.username || user.email}
                </span>
                <span className="rounded bg-indigo-900/50 px-1.5 py-0.5 text-xxs font-semibold uppercase tracking-wider text-indigo-300">
                  {user.role}
                </span>
              </div>

              <button
                onClick={handleLogout}
                className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-slate-400 transition hover:bg-slate-900 hover:text-white"
                title="Log out"
              >
                <LogOut className="h-4 w-4" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
