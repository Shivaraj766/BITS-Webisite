"use client";
import { useState } from "react";

const testimonials = [
  {
    name: "Priya Reddy",
    batch: "CSE 2022",
    company: "Microsoft, Hyderabad",
    role: "Software Engineer",
    quote:
      "BITS Adoni gave me not just a degree but the skills and confidence to crack interviews at top MNCs. The faculty's dedication and the placement cell's support were incredible.",
  },
  {
    name: "Ravi Kumar",
    batch: "ECE 2021",
    company: "Samsung R&D, Bangalore",
    role: "VLSI Design Engineer",
    quote:
      "The hands-on lab experience and industry-oriented curriculum at BITS Adoni prepared me perfectly for my role at Samsung. I'm proud to be a BITS alumnus.",
  },
  {
    name: "Anitha Swamy",
    batch: "CSE 2023",
    company: "TCS, Chennai",
    role: "Systems Engineer",
    quote:
      "From day one, BITS Adoni focused on making us industry-ready. The coding clubs, hackathons, and mock interviews made the difference in getting placed at TCS.",
  },
  {
    name: "Mohammed Farhan",
    batch: "Mech 2020",
    company: "L&T Construction",
    role: "Project Manager",
    quote:
      "The civil and mechanical engineering labs at BITS Adoni are world-class. The exposure to real projects during internships helped me land my dream job.",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="section-title">What Our Alumni Say</h2>
          <p className="section-subtitle">Real stories from real achievers</p>
        </div>

        <div className="bg-gradient-to-br from-[#0d1b4b] to-[#1a2f6e] rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
          {/* Quote mark */}
          <div className="absolute top-4 right-8 text-8xl text-white/10 font-serif leading-none">"</div>

          <div className="relative">
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed italic mb-8">
              "{t.quote}"
            </p>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-[#c9962a]/30 border-2 border-[#c9962a] flex items-center justify-center text-xl font-bold text-[#c9962a]">
                {t.name[0]}
              </div>
              <div>
                <div className="font-bold text-white text-lg">{t.name}</div>
                <div className="text-[#c9962a] text-sm font-semibold">{t.role}</div>
                <div className="text-gray-400 text-sm">{t.company} | Batch of {t.batch}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-3 mt-6">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              onClick={() => setActive(i)}
              className={`transition-all duration-200 rounded-full ${
                i === active
                  ? "w-8 h-3 bg-[#c2410c]"
                  : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* Names */}
        <div className="flex justify-center gap-4 mt-4 flex-wrap">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              onClick={() => setActive(i)}
              className={`text-sm font-medium px-3 py-1 rounded-full transition-all ${
                i === active
                  ? "bg-orange-100 text-orange-700"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {t.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
