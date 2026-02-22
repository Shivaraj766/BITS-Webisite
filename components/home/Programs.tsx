"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const programs = [
  {
    level: "B.Tech",
    color: "from-blue-600 to-cyan-600",
    courses: [
      { name: "Computer Science & Engineering", seats: 120, duration: "4 Years" },
      { name: "Electronics & Comm. Engineering", seats: 60, duration: "4 Years" },
      { name: "Electrical & Electronics Eng.", seats: 60, duration: "4 Years" },
      { name: "Mechanical Engineering", seats: 60, duration: "4 Years" },
      { name: "Civil Engineering", seats: 60, duration: "4 Years" },
      { name: "Information Technology", seats: 60, duration: "4 Years" },
    ],
  },
  {
    level: "Diploma",
    color: "from-purple-600 to-pink-600",
    courses: [
      { name: "Computer Science & Engineering", seats: 60, duration: "3 Years" },
      { name: "Electronics & Comm. Engineering", seats: 60, duration: "3 Years" },
      { name: "Electrical & Electronics Eng.", seats: 60, duration: "3 Years" },
      { name: "Mechanical Engineering", seats: 60, duration: "3 Years" },
      { name: "Civil Engineering", seats: 60, duration: "3 Years" },
    ],
  },
  
];

export default function Programs() {
  return (
    <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-cyan-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(6,182,212,0.2),transparent_50%)]" />
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,rgba(6,182,212,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.15)_1px,transparent_1px)] [background-size:50px_50px]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-4xl md:text-5xl bg-gradient-to-r from-blue-700 to-cyan-700 bg-clip-text text-transparent mb-4 drop-shadow-sm">Academic Programs</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Industry-aligned programs designed for tomorrow's leaders
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {programs.map((pg, idx) => (
            <motion.div
              key={pg.level}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-blue-400"
            >
              <div className={`bg-gradient-to-r ${pg.color} text-white px-6 py-6`}>
                <h3 className="font-display font-bold text-2xl">{pg.level} Programs</h3>
                <p className="text-blue-100 text-sm mt-1 font-medium">AICTE Approved | JNTU Affiliated</p>
              </div>
              <div className="p-4">
                {pg.courses.map((course) => (
                  <div
                    key={course.name}
                    className="flex items-start justify-between py-3 border-b border-gray-100 last:border-0 group"
                  >
                    <div className="flex-1">
                      <div className="font-semibold text-gray-800 text-sm group-hover:text-blue-700 transition-colors">
                        {course.name}
                      </div>
                      <div className="text-xs text-gray-500 mt-1 font-medium">
                        Duration: {course.duration}
                      </div>
                    </div>
                    <div className="text-right ml-4">
                      <div className="text-xs bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 rounded-full px-3 py-1.5 font-bold shadow-sm">
                        {course.seats} seats
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="px-4 pb-5">
                <Link
                  href="/programs"
                  className="block text-center bg-gradient-to-r from-blue-50 to-cyan-50 hover:from-blue-100 hover:to-cyan-100 border-2 border-blue-200 hover:border-blue-400 text-blue-700 hover:text-blue-800 font-bold py-3 rounded-xl transition-all duration-300 text-sm shadow-md hover:shadow-lg"
                >
                  View Details →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            href="/programs"
            className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold px-10 py-4 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            View All Programs & Syllabus
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
