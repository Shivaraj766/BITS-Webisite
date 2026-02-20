"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 15, suffix: "+", label: "Years of Excellence", icon: "🏛️" },
  { value: 10, suffix: "+", label: "UG Programs", icon: "📚" },
  { value: 150, suffix: "+", label: "Expert Faculty", icon: "👨‍🏫" },
  { value: 3000, suffix: "+", label: "Students Enrolled", icon: "🎓" },
  { value: 5000, suffix: "+", label: "Alumni Worldwide", icon: "🌍" },
  { value: 95, suffix: "%", label: "Placement Rate", icon: "💼" },
  { value: 100, suffix: "+", label: "Industry Partners", icon: "🤝" },
  { value: 20, suffix: "+", label: "Research Projects", icon: "🔬" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1500;
          const steps = 60;
          const step = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += step;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-display font-bold text-[#0d1b4b]">
      {count.toLocaleString()}{suffix}
    </div>
  );
}

export default function Stats() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">BITS By Numbers</h2>
          <p className="section-subtitle">A legacy of excellence spanning over a decade</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-white border border-orange-100 hover:border-orange-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="text-3xl mb-3">{stat.icon}</div>
              <Counter value={stat.value} suffix={stat.suffix} />
              <div className="text-gray-600 text-sm mt-2 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
