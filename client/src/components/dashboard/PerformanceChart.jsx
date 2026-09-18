export default function PerformanceChart({ results }) {
  const max = 100;

  return (
    <div
      className="bg-white rounded-2xl border border-[#E2E8F0] p-5"
      style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.06)" }}
    >
      <div className="mb-5">
        <h2 className="text-sm font-bold text-[#0F172A]">
          Performance Overview
        </h2>
        <p className="text-[11px] text-[#94A3B8] mt-0.5">
          Recent exam scores
        </p>
      </div>

      <div className="flex items-end gap-4 h-36">
        {results.map((result) => (
          <div
            key={result.title}
            className="flex-1 flex flex-col items-center gap-2"
          >
            <span className="text-[10px] font-bold text-[#475569]">
              {result.score}%
            </span>

            <div className="w-full h-24 bg-[#F8FAFC] rounded-lg flex items-end overflow-hidden">
              <div
                className="w-full rounded-t-lg bg-[#2563EB]"
                style={{ height: `${(result.score / max) * 100}%` }}
              />
            </div>

            <span className="text-[9px] text-[#94A3B8] truncate max-w-full">
              {result.course}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
