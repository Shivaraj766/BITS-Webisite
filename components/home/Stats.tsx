"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { value: 15, suffix: "+", label: "Years of Excellence", icon: "🏛️", color: "from-amber-500 to-yellow-600" },
  { value: 10, suffix: "+", label: "UG Programs", icon: "📚", color: "from-blue-500 to-cyan-600" },
  { value: 150, suffix: "+", label: "Expert Faculty", icon: "👨‍🏫", color: "from-green-500 to-emerald-600" },
  { value: 3000, suffix: "+", label: "Students Enrolled", icon: "🎓", color: "from-purple-500 to-pink-600" },
  { value: 5000, suffix: "+", label: "Alumni Worldwide", icon: "🌍", color: "from-indigo-500 to-blue-600" },
  { value: 95, suffix: "%", label: "Placement Rate", icon: "💼", color: "from-rose-500 to-orange-600" },
  { value: 100, suffix: "+", label: "Industry Partners", icon: "🤝", color: "from-teal-500 to-cyan-600" },
  { value: 20, suffix: "+", label: "Research Projects", icon: "🔬", color: "from-violet-500 to-purple-600" },
];

function Counter({ value, suffix, color }: { value: number; suffix: string; color: string }) {
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
    <div ref={ref} className={`text-4xl md:text-5xl font-display font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent drop-shadow-lg`}>
      {count.toLocaleString()}{suffix}
    </div>
  );
}

export default function Stats() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_45%),radial-gradient(circle_at_70%_60%,rgba(168,85,247,0.15),transparent_45%)]" />
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(to_right,rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(168,85,247,0.1)_1px,transparent_1px)] [background-size:60px_60px]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-4xl md:text-5xl bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 bg-clip-text text-transparent mb-4 drop-shadow-sm">BITS By Numbers</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">A legacy of excellence spanning over a decade</p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="group text-center p-6 rounded-2xl bg-white/90 backdrop-blur-sm border-2 border-transparent hover:border-gradient shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              <div className="relative z-10">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-4xl mb-3"
                >{stat.icon}</motion.div>
                <Counter value={stat.value} suffix={stat.suffix} color={stat.color} />
                <div className="text-gray-600 text-sm mt-2 font-semibold">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
