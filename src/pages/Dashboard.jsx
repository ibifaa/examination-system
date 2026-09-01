import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import apiClient from "../api/apiClient";
import { Play, RotateCcw, Calendar, Clock, Award, BookOpen, ChevronRight } from "lucide-react";

const SUBJECTS_LIST = [
  { id: "english", name: "English Language" },
  { id: "mathematics", name: "Mathematics" },
  { id: "physics", name: "Physics" },
  { id: "chemistry", name: "Chemistry" },
  { id: "biology", name: "Biology" },
  { id: "economics", name: "Economics" },
  { id: "government", name: "Government" },
  { id: "literature", name: "Literature-in-English" }
];

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [sessions, setSessions] = useState([]);
  const [stats, setStats] = useState({ totalSessions: 0, averageScore: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Exam setup state
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [duration, setDuration] = useState(60); // minutes
  const [examType, setExamType] = useState("utme");
  const [creatingExam, setCreatingExam] = useState(false);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const response = await apiClient.get("/user/dashboard");
      setSessions(response.data.sessions || []);
      setStats(response.data.stats || { totalSessions: 0, averageScore: 0 });
    } catch (err) {
      setError("Failed to load dashboard data.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubjectToggle = (subjectId) => {
    if (selectedSubjects.includes(subjectId)) {
      setSelectedSubjects(selectedSubjects.filter(id => id !== subjectId));
    } else {
      if (selectedSubjects.length >= 4) {
        alert("You can select a maximum of 4 subjects.");
        return;
      }
      setSelectedSubjects([...selectedSubjects, subjectId]);
    }
  };

  const handleStartExam = async (e) => {
    e.preventDefault();
    if (selectedSubjects.length === 0) {
      alert("Please select at least one subject.");
      return;
    }
    setCreatingExam(true);
    setError("");

    try {
      const response = await apiClient.post("/exam/start-exam", {
        userId: user.id,
        selectedCourses: selectedSubjects,
        duration,
        examType,
      });

      if (response.data.success) {
        navigate(`/exam/${response.data.sessionId}`);
      }
    } catch (err) {
      setError(err.response?.data?.error || "Failed to start exam. Make sure you don't have another active session.");
      console.error(err);
    } finally {
      setCreatingExam(false);
    }
  };

  if (loading) {
    return (
      <div className="flex h-[calc(100vh-4rem)] items-center justify-center bg-slate-950 text-white">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-indigo-500 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-slate-950 px-4 py-8 text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-8">
        
        {/* Welcome Banner */}
        <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/30 p-8 shadow-lg backdrop-blur-md">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-indigo-500/10 blur-3xl"></div>
          <div className="relative z-10 space-y-2">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Welcome back, {user?.username || user?.email}!
            </h1>
            <p className="text-slate-400 max-w-2xl">
              Track your test history, analyze performance metrics, or configure a new mock examination session below.
            </p>
          </div>
        </div>

        {error && (
          <div className="rounded-lg bg-rose-900/25 border border-rose-800/60 p-4 text-sm text-rose-300">
            {error}
          </div>
        )}

        {/* Stats Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-900/40 p-6 backdrop-blur-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-950 border border-indigo-800 text-indigo-400">
              <BookOpen className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-400 uppercase tracking-wider">Sessions Attempted</p>
              <h3 className="text-2xl font-bold text-white mt-1">{stats.totalSessions}</h3>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-900/40 p-6 backdrop-blur-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-950 border border-emerald-800 text-emerald-400">
              <Award className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-400 uppercase tracking-wider">Average Score</p>
              <h3 className="text-2xl font-bold text-white mt-1">{stats.averageScore} <span className="text-xs font-normal text-slate-400">pts</span></h3>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-8 lg:grid-cols-12">
          
          {/* New Exam Config (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl border border-slate-800 bg-slate-900/40 p-6 shadow-xl backdrop-blur-md space-y-6">
            <div>
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Play className="h-5 w-5 text-indigo-400 fill-indigo-400" />
                Configure New Mock Session
              </h2>
              <p className="text-sm text-slate-400 mt-1">
                Select your subjects, configure limits, and load custom examination API questions.
              </p>
            </div>

            <form onSubmit={handleStartExam} className="space-y-6">
              
              {/* Subject Selection */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                  Select Subjects (Max 4, Current: {selectedSubjects.length})
                </label>
                <div className="grid gap-2 sm:grid-cols-2">
                  {SUBJECTS_LIST.map(subject => {
                    const selected = selectedSubjects.includes(subject.id);
                    return (
                      <button
                        type="button"
                        key={subject.id}
                        onClick={() => handleSubjectToggle(subject.id)}
                        className={`flex items-center justify-between rounded-lg border px-4 py-3 text-sm font-medium transition ${
                          selected
                            ? "border-indigo-500 bg-indigo-950/40 text-indigo-300 shadow-[0_0_15px_rgba(79,70,229,0.15)]"
                            : "border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                        }`}
                      >
                        <span>{subject.name}</span>
                        {selected && <div className="h-2 w-2 rounded-full bg-indigo-400 shadow-[0_0_8px_rgba(129,140,248,0.8)]"></div>}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Exam Parameters */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="duration" className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    Duration (Minutes)
                  </label>
                  <input
                    id="duration"
                    type="number"
                    min={10}
                    max={180}
                    value={duration}
                    onChange={(e) => setDuration(parseInt(e.target.value) || 60)}
                    className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-4 py-2 text-slate-100 focus:border-indigo-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="examType" className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    Exam Standard
                  </label>
                  <select
                    id="examType"
                    value={examType}
                    onChange={(e) => setExamType(e.target.value)}
                    className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-4 py-2 text-slate-100 focus:border-indigo-500 focus:outline-none"
                  >
                    <option value="utme">UTME / JAMB</option>
                    <option value="waec">WAEC</option>
                    <option value="neco">NECO</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                disabled={creatingExam || selectedSubjects.length === 0}
                className="w-full flex items-center justify-center gap-2 rounded-lg bg-indigo-600 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {creatingExam ? "Initializing Session..." : "Begin Mock Examination"}
                <ChevronRight className="h-4 w-4" />
              </button>
            </form>
          </div>

          {/* Past History (5 cols) */}
          <div className="lg:col-span-5 rounded-2xl border border-slate-800 bg-slate-900/40 p-6 shadow-xl backdrop-blur-md flex flex-col space-y-6">
            <div>
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <RotateCcw className="h-5 w-5 text-indigo-400" />
                Session History
              </h2>
              <p className="text-sm text-slate-400 mt-1">
                Your past and active examination progress.
              </p>
            </div>

            <div className="flex-1 overflow-y-auto space-y-3 max-h-[400px] pr-1">
              {sessions.length === 0 ? (
                <div className="text-center py-12 text-slate-500 border border-dashed border-slate-800 rounded-xl">
                  No mock history found.
                </div>
              ) : (
                sessions.map(session => (
                  <div
                    key={session.id}
                    className="rounded-xl border border-slate-800/80 bg-slate-900/20 p-4 transition hover:border-slate-700"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium tracking-wide ${
                        session.status === "ACTIVE"
                          ? "bg-indigo-900/30 text-indigo-300 border border-indigo-800/50"
                          : session.status === "SUBMITTED"
                          ? "bg-emerald-950/30 text-emerald-300 border border-emerald-800/50"
                          : "bg-slate-900 text-slate-400 border border-slate-800"
                      }`}>
                        {session.status}
                      </span>
                      <span className="text-xs text-slate-500 flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(session.startedAt).toLocaleDateString()}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="text-xs text-slate-400 flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          Duration: {session.duration}m
                        </p>
                        {session.status === "SUBMITTED" && (
                          <p className="text-sm font-bold text-white">
                            Total Score: <span className="text-indigo-400">{session.totalScore}</span> pts
                          </p>
                        )}
                      </div>

                      {session.status === "ACTIVE" ? (
                        <button
                          onClick={() => navigate(`/exam/${session.id}`)}
                          className="flex items-center gap-1 rounded bg-indigo-600 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-indigo-700"
                        >
                          Resume
                        </button>
                      ) : session.status === "SUBMITTED" ? (
                        <button
                          onClick={() => navigate(`/result/${session.id}`)}
                          className="flex items-center gap-1 rounded bg-slate-800 px-3 py-1.5 text-xs font-semibold text-slate-300 transition hover:bg-slate-700 hover:text-white"
                        >
                          Review
                        </button>
                      ) : null}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Dashboard;
