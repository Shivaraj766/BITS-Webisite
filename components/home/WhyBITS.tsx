"use client";
import { motion } from "framer-motion";

const features = [
  {
    icon: "🎯",
    title: "NAAC Accredited",
    desc: "Recognized for quality in academics, infrastructure, and student development by India's premier accreditation body.",
  },
  {
    icon: "🏭",
    title: "Industry-Ready Curriculum",
    desc: "Curriculum co-designed with industry leaders ensuring graduates meet real-world demands from day one.",
  },
  {
    icon: "🔬",
    title: "Research & Innovation",
    desc: "State-of-the-art labs and research centers fostering innovation in AI, ML, IoT, and emerging technologies.",
  },
  {
    icon: "🌐",
    title: "Global Exposure",
    desc: "International collaborations, exchange programs, and global industry projects for worldwide perspective.",
  },
  {
    icon: "👨‍🏫",
    title: "Experienced Faculty",
    desc: "150+ highly qualified faculty with PhDs from premier institutions and rich industry experience.",
  },
  {
    icon: "💼",
    title: "Strong Placements",
    desc: "Dedicated placement cell with 100+ recruiting companies and consistent 95% placement record.",
  },
  {
    icon: "🏠",
    title: "Vibrant Campus",
    desc: "40-acre green campus with modern hostels, sports complex, recreation areas, and 24/7 security.",
  },
  {
    icon: "💰",
    title: "Scholarships Available",
    desc: "Merit and need-based scholarships supporting deserving students in pursuing their engineering dreams.",
  },
];

export default function WhyBITS() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.25),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(139,92,246,0.25),transparent_40%)]" />
      <div className="absolute inset-0 opacity-10 [background-image:linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:50px_50px]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-4xl md:text-5xl bg-gradient-to-r from-blue-200 via-cyan-200 to-purple-200 bg-clip-text text-transparent mb-4 drop-shadow-lg">
            Why Choose BITS?
          </h2>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto">
            We provide an environment where talent meets opportunity, creating professionals 
            who lead industries and drive innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, idx) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="group bg-white/10 hover:bg-white/15 backdrop-blur-md border-2 border-white/20 hover:border-blue-400/60 rounded-2xl p-6 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-blue-500/20"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-4xl mb-4"
              >
                {f.icon}
              </motion.div>
              <h3 className="font-bold bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent text-xl mb-2">{f.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Vision & Mission boxes */}
        <div className="grid md:grid-cols-2 gap-6 mt-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="group bg-gradient-to-br from-amber-500/25 to-yellow-600/25 backdrop-blur-md border-2 border-amber-400/50 hover:border-amber-300 rounded-3xl p-8 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-amber-500/20"
          >
            <h3 className="font-display font-bold text-3xl bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent mb-4">Our Vision</h3>
            <p className="text-gray-100 leading-relaxed text-lg">
              To be a globally recognized institution of excellence that transforms aspiring students 
              into innovative engineers, responsible citizens, and industry leaders who contribute 
              meaningfully to society and technological advancement.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-white/10 backdrop-blur-md border-2 border-white/20 hover:border-white/40 rounded-3xl p-8 transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            <h3 className="font-display font-bold text-3xl bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent mb-4">Our Mission</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              {[
                "Provide quality technical education with strong ethical values",
                "Foster research, innovation, and entrepreneurial mindset",
                "Build industry-academia partnerships for practical learning",
                "Develop holistic personalities through co-curricular activities",
                "Support marginalized communities through outreach programs",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-[#c9962a] mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
