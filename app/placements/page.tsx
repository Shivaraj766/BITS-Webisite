import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Placements & Careers | BITS Adoni",
  description: "Explore placement statistics, top recruiters, internship opportunities, career guidance, and inspiring alumni success stories at BITS Adoni.",
};

const alumni = [
  { name: "Kiran Kumar Reddy", batch: "CSE 2018", company: "Google, USA", role: "Senior Software Engineer", package: "$180K/year", story: "From a small town in AP to Silicon Valley — BITS gave me the foundation and confidence to dream big and achieve bigger." },
  { name: "Deepa Nair", batch: "ECE 2019", company: "Samsung Research Korea", role: "Principal VLSI Engineer", package: "₹28 LPA", story: "The VLSI lab at BITS was world-class. The hands-on experience I got there directly translated into my role at Samsung." },
  { name: "Sunita Sharma", batch: "CSE 2017", company: "Microsoft, Hyderabad", role: "Program Manager", package: "₹35 LPA", story: "The coding culture and competitive programming environment at BITS gave me the edge in Microsoft's rigorous selection process." },
];

export default function PlacementsPage() {
  return (
    <>
      <div className="bg-gradient-to-br from-[#1e3a1e] to-[#2d5a2d] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-sm text-green-200 mb-2">
            <Link href="/" className="hover:text-white">Home</Link> / Placements
          </div>
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-4">Placements & Careers</h1>
          <p className="text-green-100 text-xl max-w-3xl">
            We don't just educate — we ensure our students are employed at the best companies 
            in the country and globally.
          </p>
        </div>
      </div>

      {/* Career Guidance */}
      <section id="career" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title">Career Guidance & Development</h2>
          <p className="section-subtitle">Comprehensive career support from day one</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🎯", title: "Career Counseling", desc: "One-on-one career counseling sessions with experienced counselors to help students identify their strengths and career paths." },
              { icon: "💼", title: "Resume Building", desc: "Professional resume writing workshops and reviews by HR experts from top companies." },
              { icon: "🎤", title: "Interview Preparation", desc: "Mock interviews, group discussions, and aptitude training with regular practice sessions." },
              { icon: "💻", title: "Coding Bootcamps", desc: "Intensive coding bootcamps in Python, Java, DSA, and full-stack development for placement readiness." },
              { icon: "🌐", title: "Soft Skills Training", desc: "Communication, leadership, teamwork, and presentation skills workshops throughout the year." },
              { icon: "🏢", title: "Industry Interface", desc: "Regular industry expert talks, webinars, and site visits to top companies for real-world exposure." },
            ].map((c) => (
              <div key={c.title} className="card p-6 group hover:-translate-y-1 transition-transform duration-300">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">{c.icon}</div>
                <h3 className="font-bold text-[#0d1b4b] mb-2">{c.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internships */}
      <section id="internships" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title">Internship Opportunities</h2>
          <p className="section-subtitle">Real-world experience before graduation</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="font-bold text-[#0d1b4b] text-xl mb-4">Internship Program</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                BITS Adoni mandates a minimum 4-week industrial internship in the III year for all 
                B.Tech students. Our placement cell facilitates internships at 100+ companies.
              </p>
              <ul className="space-y-3">
                {[
                  "Internship credit in academic curriculum",
                  "₹5,000 – ₹25,000 monthly stipend at partner companies",
                  "PPO (Pre-Placement Offer) opportunities",
                  "NPTEL online courses integration",
                  "Government internships through NIC, DRDO, ISRO",
                  "Startup internship support through E-Cell",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="text-green-500">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#0d1b4b] rounded-2xl p-8 text-white">
              <h3 className="font-bold text-[#c9962a] text-xl mb-4">Internship Statistics 2023-24</h3>
              <div className="space-y-4">
                {[
                  { label: "Students who did internships", val: "480+", color: "text-green-400" },
                  { label: "Companies offering internships", val: "65+", color: "text-blue-400" },
                  { label: "Average stipend", val: "₹12,000/month", color: "text-yellow-400" },
                  { label: "Received PPO after internship", val: "45 students", color: "text-orange-400" },
                  { label: "International internship offers", val: "12 students", color: "text-pink-400" },
                ].map((stat) => (
                  <div key={stat.label} className="flex justify-between items-center border-b border-white/10 pb-3 last:border-0">
                    <span className="text-gray-300 text-sm">{stat.label}</span>
                    <span className={`font-bold ${stat.color}`}>{stat.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Placement Stats */}
      <section id="stats" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title">Placement Statistics</h2>
          <div className="grid md:grid-cols-4 gap-4 mb-10">
            {[
              { val: "₹18 LPA", label: "Highest Package", sub: "Amazon, 2024", color: "from-orange-400 to-red-500" },
              { val: "₹6.2 LPA", label: "Average Package", sub: "All branches", color: "from-blue-400 to-blue-600" },
              { val: "500+", label: "Total Offers", sub: "Academic year 2023-24", color: "from-green-400 to-green-600" },
              { val: "95%", label: "Placement Rate", sub: "Eligible students", color: "from-purple-400 to-purple-600" },
            ].map((s) => (
              <div key={s.label} className={`bg-gradient-to-br ${s.color} text-white rounded-2xl p-6 text-center shadow-lg`}>
                <div className="font-display font-bold text-3xl mb-1">{s.val}</div>
                <div className="font-semibold text-base mb-0.5">{s.label}</div>
                <div className="text-white/70 text-xs">{s.sub}</div>
              </div>
            ))}
          </div>

          {/* Year-wise table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#0d1b4b] text-white">
                  <th className="text-left p-4">Academic Year</th>
                  <th className="text-center p-4">Students Eligible</th>
                  <th className="text-center p-4">Students Placed</th>
                  <th className="text-center p-4">% Placed</th>
                  <th className="text-center p-4">Highest Pkg</th>
                  <th className="text-center p-4">Avg Pkg</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { year: "2023-24", eligible: 520, placed: 494, pct: "95%", high: "₹18 LPA", avg: "₹6.2 LPA" },
                  { year: "2022-23", eligible: 480, placed: 446, pct: "92%", high: "₹16 LPA", avg: "₹5.8 LPA" },
                  { year: "2021-22", eligible: 440, placed: 398, pct: "90%", high: "₹14 LPA", avg: "₹5.2 LPA" },
                  { year: "2020-21", eligible: 400, placed: 352, pct: "88%", high: "₹12 LPA", avg: "₹4.8 LPA" },
                  { year: "2019-20", eligible: 360, placed: 306, pct: "85%", high: "₹10 LPA", avg: "₹4.3 LPA" },
                ].map((row, i) => (
                  <tr key={row.year} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="p-4 font-semibold">{row.year}</td>
                    <td className="p-4 text-center">{row.eligible}</td>
                    <td className="p-4 text-center font-semibold text-green-700">{row.placed}</td>
                    <td className="p-4 text-center">
                      <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded font-bold text-xs">{row.pct}</span>
                    </td>
                    <td className="p-4 text-center font-bold text-orange-700">{row.high}</td>
                    <td className="p-4 text-center text-gray-700">{row.avg}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Alumni Stories */}
      <section id="alumni" className="py-16 bg-gradient-to-br from-[#0d1b4b] to-[#1e3a8a] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-display font-bold text-3xl text-white mb-3">Alumni Success Stories</h2>
          <p className="text-gray-300 mb-10">Our graduates are making waves globally</p>
          <div className="grid md:grid-cols-2 gap-6">
            {alumni.map((al) => (
              <div key={al.name} className="bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-colors">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-[#c9962a]/30 border-2 border-[#c9962a] flex items-center justify-center text-2xl font-bold text-[#c9962a] flex-shrink-0">
                    {al.name[0]}
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg">{al.name}</h3>
                    <div className="text-[#c9962a] text-sm font-semibold">{al.role}</div>
                    <div className="text-gray-300 text-xs">{al.company} | Batch: {al.batch}</div>
                    <div className="text-green-400 text-sm font-bold mt-1">{al.package}</div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm italic leading-relaxed">"{al.story}"</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="#" className="bg-[#c9962a] hover:bg-yellow-500 text-white font-bold px-8 py-4 rounded-lg transition-colors inline-block">
              Join Alumni Network
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
