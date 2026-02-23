"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const slides = [
  
  {
    headline: "Innovation Meets Excellence",
    subheadline: "State-of-the-art research facilities and industry partnerships",
    bg: "from-[#0d1b4b] via-[#1a2f6e] to-[#0d1b4b]",
    accent: "text-yellow-400",
    image: "/SECONDIMG.jpg",
  },
  {
    headline: "Your Future Starts Here",
    subheadline: "100% placement assistance with top recruiters across India",
    bg: "from-[#0d1b4b] via-[#1a2f6e] to-[#0d1b4b]",
    accent: "text-yellow-400",
    image: "/THIRDIMG.jpg",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setAnimating(false);
      }, 500);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section
      className={`relative isolate  text-white transition-all duration-700 overflow-hidden`}
      style={{ minHeight: "85vh" }}
    >
      <div className="absolute inset-0">
        {slides.map((item, i) => (
          <div
            key={item.headline}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ${
              i === current ? "opacity-90 scale-100" : "opacity-0 scale-105"
            }`}
            style={{ backgroundImage: `url(${item.image})` }}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/28 to-black/42" />
      <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:42px_42px]" />



      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 md:py-32 flex flex-col lg:flex-row items-center gap-12">
        {/* Left content */}
        <div
          className={`flex-1 transition-all duration-500 ${
            animating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
          }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Admissions Open 2026
          </div>

          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 drop-shadow-[0_3px_10px_rgba(0,0,0,0.65)]">
            {slide.headline}
          </h1>
          <p className={`text-xl md:text-2xl ${slide.accent} font-semibold mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]`}>
            {slide.subheadline}
          </p>
          <p className="text-gray-100 text-lg mb-8 max-w-lg drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
            BITS Adoni — AICTE approved, JNTU affiliated institution offering premier engineering 
            education since 2008. Shaping 3000+ students annually.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/admissions"
              className="bg-[#c9962a] hover:bg-yellow-500 text-white font-bold px-8 py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Apply Now →
            </Link>
            <Link
              href="/programs"
              className="border-2 border-white/50 hover:border-white text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 backdrop-blur-sm hover:bg-white/10"
            >
              Explore Programs
            </Link>
            <Link
              href="/about"
              className="border-2 border-white/30 hover:border-white/60 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 backdrop-blur-sm hover:bg-white/5"
            >
              Virtual Tour
            </Link>
          </div>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-8 mt-10 pt-8 border-t border-white/20">
            {[
              { num: "15+", label: "Years of Excellence" },
              { num: "3000+", label: "Students Enrolled" },
              { num: "150+", label: "Faculty Members" },
              { num: "95%", label: "Placement Rate" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className={`text-2xl font-bold ${slide.accent}`}>{stat.num}</div>
                <div className="text-xs text-gray-300 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Featured cards */}
        <div className="flex-shrink-0 w-full lg:w-80 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-white/90 bg-black/25 border border-white/20 rounded-full px-3 py-1.5 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-[#c9962a]" />
            Campus Highlights
          </div>

          {[
            {
              icon: "🏛️",
              title: "Rankings & Recognition",
              desc: "NAAC Accredited | NIRF 2025",
            },
            {
              icon: "🔬",
              title: "Research Excellence",
              desc: "5 Research Centers | 20+ Projects",
            },
            {
              icon: "🤝",
              title: "Industry Partners",
              desc: "TCS, Infosys, Wipro & 100+ more",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="group bg-black/25 backdrop-blur-md border border-white/25 rounded-2xl p-4 hover:bg-black/35 hover:border-white/40 transition-all duration-300 cursor-pointer shadow-[0_8px_24px_rgba(0,0,0,0.25)] hover:shadow-[0_14px_34px_rgba(0,0,0,0.35)] hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-3">
                <span className="grid place-items-center w-11 h-11 rounded-xl bg-white/15 border border-white/20 text-2xl group-hover:bg-white/20 transition-colors">
                  {card.icon}
                </span>
                <div className="min-w-0">
                  <div className="font-semibold text-sm text-white leading-tight">{card.title}</div>
                  <div className="text-xs text-slate-200/90 mt-1">{card.desc}</div>
                </div>
              </div>
            </div>
          ))}

          {/* NIRF Score card */}
          <div className="bg-gradient-to-r from-[#c9962a]/35 to-[#c9962a]/20 backdrop-blur-md border border-[#c9962a]/60 rounded-2xl p-5 shadow-[0_10px_28px_rgba(0,0,0,0.3)]">
            <div className="flex items-center justify-between mb-2">
              <div className="text-xs text-[#f7d99a] font-semibold tracking-wide uppercase">NIRF Score 2025</div>
              <span className="text-[10px] font-bold text-[#f7d99a] border border-[#f7d99a]/40 rounded-full px-2 py-0.5">Updated</span>
            </div>
            <div className="text-3xl font-extrabold text-white leading-none">68.45</div>
            <div className="text-xs text-slate-100/85 mt-1">Engineering Category</div>
            <div className="mt-3 h-2 bg-black/20 rounded-full overflow-hidden">
              <div className="h-full bg-[#f6c45d] rounded-full shadow-[0_0_10px_rgba(246,196,93,0.8)]" style={{ width: "68.45%" }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute z-10 bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-300 rounded-full ${
              i === current ? "w-8 h-2 bg-[#c9962a]" : "w-2 h-2 bg-white/40"
            }`}
          />
        ))}
      </div>

      {/* News ticker */}
      <div className="absolute z-10 bottom-0 left-0 right-0 bg-black/35 backdrop-blur-sm py-2 overflow-hidden">
        <div className="flex items-center">
          <div className="flex-shrink-0 bg-[#c9962a] text-white text-xs font-bold px-4 py-1 z-10">
            📢 LATEST
          </div>
          <div className="overflow-hidden ml-2 flex-1">
            <div className="ticker-animate whitespace-nowrap text-xs text-white/80">
              🎓 Results declared for B.Tech I Semester 2025-26 &nbsp;&nbsp;|&nbsp;&nbsp; 
              📝 Spot Admissions open for remaining seats &nbsp;&nbsp;|&nbsp;&nbsp; 
              🏆 BITS Adoni wins Best Engineering College Award 2025 &nbsp;&nbsp;|&nbsp;&nbsp; 
              💼 Campus placements at record high — 500+ students placed &nbsp;&nbsp;|&nbsp;&nbsp; 
              🔬 New Research Center inaugurated in AI & Machine Learning &nbsp;&nbsp;|&nbsp;&nbsp;
              🎉 Annual Tech Fest "COGNIZANCE 2025" coming soon
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
