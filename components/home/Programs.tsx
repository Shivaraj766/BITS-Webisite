import Link from "next/link";

const programs = [
  {
    level: "B.Tech",
    color: "bg-blue-600",
    courses: [
      { name: "Computer Science & Engineering", seats: 120, duration: "4 Years" },
      { name: "Electronics & Comm. Engineering", seats: 60, duration: "4 Years" },
      { name: "Electrical & Electronics Eng.", seats: 60, duration: "4 Years" },
      { name: "Mechanical Engineering", seats: 60, duration: "4 Years" },
      { name: "Civil Engineering", seats: 60, duration: "4 Years" },
      { name: "Information Technology", seats: 60, duration: "4 Years" },
    ],
  },
];

export default function Programs() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Academic Programs</h2>
          <p className="section-subtitle">
            Industry-aligned programs designed for tomorrow's leaders
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {programs.map((pg) => (
            <div key={pg.level} className="card">
              <div className={`${pg.color} text-white px-6 py-4`}>
                <h3 className="font-display font-bold text-xl">{pg.level} Programs</h3>
                <p className="text-white/80 text-sm mt-0.5">AICTE Approved | JNTU Affiliated</p>
              </div>
              <div className="p-4">
                {pg.courses.map((course) => (
                  <div
                    key={course.name}
                    className="flex items-start justify-between py-3 border-b border-gray-100 last:border-0 group"
                  >
                    <div className="flex-1">
                      <div className="font-medium text-gray-800 text-sm group-hover:text-orange-700 transition-colors">
                        {course.name}
                      </div>
                      <div className="text-xs text-gray-500 mt-0.5">
                        Duration: {course.duration}
                      </div>
                    </div>
                    <div className="text-right ml-4">
                      <div className="text-xs bg-orange-100 text-orange-700 rounded px-2 py-0.5 font-semibold">
                        {course.seats} seats
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="px-4 pb-4">
                <Link
                  href="/programs"
                  className="block text-center bg-gray-50 hover:bg-orange-50 border border-gray-200 hover:border-orange-300 text-gray-700 hover:text-orange-700 font-semibold py-2 rounded-lg transition-all duration-200 text-sm"
                >
                  View Details →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/programs" className="btn-primary">
            View All Programs & Syllabus
          </Link>
        </div>
      </div>
    </section>
  );
}
