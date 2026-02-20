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
    <section className="py-16 bg-[#0d1b4b] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
            Why Choose BITS?
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            We provide an environment where talent meets opportunity, creating professionals 
            who lead industries and drive innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#c9962a]/50 rounded-xl p-6 transition-all duration-300 group"
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-200">
                {f.icon}
              </div>
              <h3 className="font-semibold text-[#c9962a] text-lg mb-2">{f.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Vision & Mission boxes */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <div className="bg-[#c9962a]/20 border border-[#c9962a]/40 rounded-2xl p-8">
            <h3 className="font-display font-bold text-2xl text-[#c9962a] mb-4">Our Vision</h3>
            <p className="text-gray-200 leading-relaxed">
              To be a globally recognized institution of excellence that transforms aspiring students 
              into innovative engineers, responsible citizens, and industry leaders who contribute 
              meaningfully to society and technological advancement.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h3 className="font-display font-bold text-2xl text-white mb-4">Our Mission</h3>
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
          </div>
        </div>
      </div>
    </section>
  );
}
