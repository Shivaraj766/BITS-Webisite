import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About BITS Adoni | History, Vision, Leadership & Affiliations",
  description: "Learn about BITS Adoni's rich history since 2008, our vision for excellence, leadership team, and prestigious affiliations with JNTUA, AICTE, and NAAC.",
};

const leadership = [
  {
    name: "Dr. S. Ramachandra Reddy",
    role: "Chairman",
    qual: "Ph.D., IIT Madras",
    exp: "35+ years in education and industry",
    emoji: "👔",
  },
  {
    name: "Dr. K. Venkateswara Rao",
    role: "Principal",
    qual: "Ph.D. (ECE), NIT Warangal",
    exp: "28+ years in academia",
    emoji: "🎓",
  },
  {
    name: "Dr. L. Srinivas",
    role: "Vice Principal (Academics)",
    qual: "Ph.D. (CSE), JNTUA",
    exp: "22+ years in teaching & research",
    emoji: "📚",
  },
  {
    name: "Dr. P. Madhavi",
    role: "Dean (Research & Development)",
    qual: "Ph.D. (EEE), Osmania University",
    exp: "20+ years, 40+ research publications",
    emoji: "🔬",
  },
  {
    name: "Mr. R. Suresh Kumar",
    role: "Registrar",
    qual: "LLB",
    exp: "18+ years in administration",
    emoji: "📋",
  },
  {
    name: "Dr. N. Pushpa Latha",
    role: "Controller of Examinations",
    qual: "Ph.D. (Maths), SVU",
    exp: "20+ years in academic administration",
    emoji: "📝",
  },
];

const milestones = [
  { year: "2008", event: "BITS Adoni established with 4 B.Tech programs", type: "founding" },
  { year: "2010", event: "First batch graduates with 90%+ placement rate", type: "achievement" },
  { year: "2012", event: "NAAC accreditation received; new labs inaugurated", type: "milestone" },
  { year: "2014", event: "ISO 9001:2008 certification achieved", type: "achievement" },
  { year: "2016", event: "New Research & Development Center inaugurated", type: "milestone" },
  { year: "2018", event: "10th anniversary — 5000+ alumni celebrated", type: "celebration" },
  { year: "2019", event: "NBA accreditation for CSE & ECE departments", type: "achievement" },
  { year: "2021", event: "AI/ML center launched with IIT Hyderabad collaboration", type: "milestone" },
  { year: "2023", event: "NIRF ranking achieved; record 500+ placements", type: "achievement" },
  { year: "2024", event: "Best Engineering College Award; new MCA program launched", type: "achievement" },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <div className="bg-gradient-to-br from-[#0d1b4b] to-[#1e3a8a] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-sm text-gray-400 mb-2">
            <Link href="/" className="hover:text-white">Home</Link> / About
          </div>
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-4">About BITS Adoni</h1>
          <p className="text-gray-300 text-xl max-w-3xl">
            A premier engineering institution built on a foundation of excellence, integrity, and innovation — 
            shaping the future of technology since 2008.
          </p>
        </div>
      </div>

      {/* Overview */}
      <section id="overview" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">College Overview</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Bheema Institute of Technology & Science (BITS Adoni), established in 2008, is a premier 
                engineering institution located in Adoni, Kurnool District, Andhra Pradesh. Affiliated to 
                Jawaharlal Nehru Technological University, Anantapur (JNTUA) and approved by AICTE, New Delhi, 
                BITS Adoni has established itself as a beacon of technical excellence in the region.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Spread across a 20-acre lush green campus, BITS Adoni offers undergraduate 
                programs in engineering and technology. With state-of-the-art 
                infrastructure, experienced faculty, and a vibrant campus life, we provide students with 
                a holistic educational experience that prepares them for global careers.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Established", val: "2008" },
                  { label: "Campus Area", val: "20 Acres" },
                  { label: "Affiliation", val: "JNTUA" },
                  { label: "Approval", val: "AICTE" },
                  { label: "Accreditation", val: "NAAC" },
                  { label: "Programs", val: "12+" },
                ].map((item) => (
                  <div key={item.label} className="bg-gray-50 rounded-lg p-3">
                    <div className="text-xs text-gray-500">{item.label}</div>
                    <div className="font-bold text-[#0d1b4b]">{item.val}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#0d1b4b] to-[#1e3a8a] rounded-2xl p-8 text-white">
              <h3 className="font-display font-bold text-2xl text-[#c9962a] mb-6">Our Core Values</h3>
              {[
                { icon: "🎯", title: "Excellence", desc: "Striving for the highest academic and professional standards" },
                { icon: "🤝", title: "Integrity", desc: "Upholding ethical practices in all endeavors" },
                { icon: "💡", title: "Innovation", desc: "Fostering creative thinking and problem-solving" },
                { icon: "🌍", title: "Inclusion", desc: "Welcoming diversity and promoting equal opportunity" },
                { icon: "🌱", title: "Sustainability", desc: "Building for a better, greener future" },
              ].map((val) => (
                <div key={val.title} className="flex gap-3 mb-4 last:mb-0">
                  <span className="text-xl mt-0.5">{val.icon}</span>
                  <div>
                    <div className="font-semibold text-[#c9962a]">{val.title}</div>
                    <div className="text-gray-300 text-sm">{val.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border-l-4 border-[#c9962a]">
              <h2 className="font-display font-bold text-2xl text-[#0d1b4b] mb-4 flex items-center gap-2">
                <span>🔭</span> Our Vision
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg italic">
                "To be a globally recognized institution of excellence in technical education, research, 
                and innovation — nurturing globally competent engineers and responsible citizens who 
                contribute to the sustainable development of society."
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border-l-4 border-[#0d1b4b]">
              <h2 className="font-display font-bold text-2xl text-[#0d1b4b] mb-4 flex items-center gap-2">
                <span>🎯</span> Our Mission
              </h2>
              <ul className="space-y-3 text-gray-700">
                {[
                  "Provide quality technical education with emphasis on fundamental principles and practical application",
                  "Foster a culture of research, innovation, and entrepreneurship among students and faculty",
                  "Establish strong industry-academia partnerships for real-world learning experiences",
                  "Develop well-rounded personalities through sports, arts, and leadership activities",
                  "Promote social responsibility and contribute to community development",
                  "Embrace emerging technologies and prepare students for global challenges",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="text-[#c9962a] font-bold mt-0.5">{i + 1}.</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Leadership Team</h2>
            <p className="section-subtitle">
              Experienced leaders guiding BITS Adoni toward greater heights
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {leadership.map((leader) => (
              <div key={leader.name} className="card p-6 text-center group hover:-translate-y-1 transition-transform duration-300">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#0d1b4b] to-[#1e3a8a] flex items-center justify-center text-4xl mx-auto mb-4 group-hover:shadow-lg transition-shadow">
                  {leader.emoji}
                </div>
                <h3 className="font-display font-bold text-[#0d1b4b] text-lg">{leader.name}</h3>
                <div className="text-orange-600 font-semibold text-sm mt-1">{leader.role}</div>
                <div className="text-gray-500 text-xs mt-1">{leader.qual}</div>
                <div className="text-gray-400 text-xs mt-1">{leader.exp}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section id="history" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Journey</h2>
            <p className="section-subtitle">Key milestones in BITS Adoni's history</p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2 hidden md:block"></div>
            {milestones.map((m, i) => (
              <div key={m.year} className={`relative flex gap-4 md:gap-0 mb-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className={`md:w-1/2 ${i % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"}`}>
                  <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:border-orange-200 transition-colors">
                    <div className="text-[#c9962a] font-display font-bold text-xl mb-1">{m.year}</div>
                    <div className="text-gray-700 text-sm">{m.event}</div>
                  </div>
                </div>
                <div className="md:absolute md:left-1/2 md:-translate-x-1/2 flex-shrink-0 w-4 h-4 rounded-full bg-[#0d1b4b] border-2 border-[#c9962a] md:mt-4 mt-4 z-10"></div>
                <div className="md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliations */}
      <section id="affiliations" className="py-16 bg-[#0d1b4b] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl text-white mb-3">
              Affiliations & Accreditations
            </h2>
            <p className="text-gray-300">Recognized by India's premier educational and technical bodies</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "JNTU Anantapur", type: "Affiliating University", detail: "All programs affiliated to JNTUA, one of AP's premier technical universities, ensuring curriculum quality and examination standards.", icon: "🎓" },
              { name: "AICTE, New Delhi", type: "Regulatory Approval", detail: "Approved by All India Council for Technical Education, the statutory body overseeing technical education in India.", icon: "🏛️" },
              { name: "UGC", type: "University Grants Commission", detail: "Recognized by UGC for maintaining standards of higher education in India.", icon: "📜" },
              { name: "NAAC", type: "Accreditation Body", detail: "National Assessment and Accreditation Council accreditation ensuring quality in teaching, research, and governance.", icon: "⭐" },
              { name: "ISO 9001:2015", type: "Quality Certification", detail: "International quality management system certification reflecting our commitment to continuous improvement.", icon: "✅" },
              { name: "NBA", type: "National Board of Accreditation", detail: "NBA accreditation for CSE and ECE departments ensuring program-level quality assurance.", icon: "🏆" },
            ].map((aff) => (
              <div key={aff.name} className="bg-white/10 border border-white/20 hover:border-[#c9962a]/50 rounded-xl p-6 transition-all duration-200">
                <div className="text-3xl mb-3">{aff.icon}</div>
                <div className="font-bold text-[#c9962a] text-lg mb-0.5">{aff.name}</div>
                <div className="text-sm text-gray-300 mb-3 font-semibold">{aff.type}</div>
                <p className="text-gray-400 text-sm leading-relaxed">{aff.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
