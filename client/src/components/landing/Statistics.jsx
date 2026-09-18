export default function Statistics() {
  const stats = [
    ["12,400+", "Students Registered"],
    ["840+", "Exams Conducted"],
    ["94%", "Pass Rate"],
    ["220+", "Teachers"],
    ["48", "Active Exams Today"],
  ];

  return (
    <section className="bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] py-16">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 text-center">
          {stats.map(([value, label]) => (
            <div key={label} className="text-center">
              <p className="text-3xl lg:text-4xl font-bold text-white">
                {value}
              </p>
              <p className="text-sm text-blue-100/70 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
