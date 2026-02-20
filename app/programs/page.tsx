import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Academic Programs | BITS Adoni",
  description: "Explore B.Tech programs at BITS Adoni. AICTE approved, JNTU affiliated programs with industry-oriented curriculum.",
};

const ugPrograms = [
  {
    name: "B.Tech Computer Science & Engineering",
    code: "CSE",
    intake: 120,
    duration: "4 Years (8 Semesters)",
    desc: "Covering software engineering, algorithms, AI/ML, databases, networks, and more.",
    highlights: ["AI & Machine Learning", "Cloud Computing", "Full Stack Development", "Cyber Security"],
  },
  {
    name: "B.Tech Electronics & Communication Engineering",
    code: "ECE",
    intake: 60,
    duration: "4 Years (8 Semesters)",
    desc: "Signal processing, VLSI design, embedded systems, communications, and IoT.",
    highlights: ["VLSI Design", "IoT Systems", "RF & Microwave", "Signal Processing"],
  },
  {
    name: "B.Tech Electrical & Electronics Engineering",
    code: "EEE",
    intake: 60,
    duration: "4 Years (8 Semesters)",
    desc: "Power systems, drives, control systems, renewable energy, and smart grids.",
    highlights: ["Power Systems", "Electric Drives", "Control Systems", "Renewable Energy"],
  },
  {
    name: "B.Tech Mechanical Engineering",
    code: "MECH",
    intake: 60,
    duration: "4 Years (8 Semesters)",
    desc: "Manufacturing, thermodynamics, CAD/CAM, robotics, and material science.",
    highlights: ["CAD/CAM", "Robotics", "Manufacturing", "Thermodynamics"],
  },
  {
    name: "B.Tech Civil Engineering",
    code: "CIVIL",
    intake: 60,
    duration: "4 Years (8 Semesters)",
    desc: "Structural, transportation, geotechnical, environmental, and water resource engineering.",
    highlights: ["Structural Design", "Transportation", "GIS & Remote Sensing", "Environmental Engg."],
  },
  {
    name: "B.Tech Information Technology",
    code: "IT",
    intake: 60,
    duration: "4 Years (8 Semesters)",
    desc: "Software systems, networking, data science, enterprise computing, and security.",
    highlights: ["Data Science", "Enterprise Systems", "Network Security", "Web Technologies"],
  },
];


const faculty = [
  { name: "Dr. A. Suresh Kumar", dept: "CSE", qual: "Ph.D. IIT Bombay", exp: "18 yrs", pubs: "35" },
  { name: "Dr. B. Lakshmi Devi", dept: "ECE", qual: "Ph.D. NIT Warangal", exp: "15 yrs", pubs: "28" },
  { name: "Dr. C. Ravi Shankar", dept: "EEE", qual: "Ph.D. IIT Delhi", exp: "20 yrs", pubs: "42" },
  { name: "Dr. D. Padmavathi", dept: "MECH", qual: "Ph.D. JNTUA", exp: "16 yrs", pubs: "22" },
  { name: "Dr. E. Venkanna", dept: "CIVIL", qual: "Ph.D. SVNIT Surat", exp: "14 yrs", pubs: "19" },
  { name: "Dr. F. Sarada", dept: "CSE", qual: "Ph.D. IIIT Hyderabad", exp: "12 yrs", pubs: "31" },
];

export default function ProgramsPage() {
  return (
    <>
      <div className="bg-gradient-to-br from-[#0d1b4b] to-[#1e3a8a] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-sm text-gray-400 mb-2">
            <Link href="/" className="hover:text-white">Home</Link> / Academics
          </div>
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-4">Academic Programs</h1>
          <p className="text-gray-300 text-xl max-w-3xl">
            Industry-oriented programs designed by experts — providing theoretical knowledge 
            and practical skills for a successful career.
          </p>
        </div>
      </div>

      {/* UG Programs */}
      <section id="ug" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title">Undergraduate Programs (B.Tech)</h2>
          <p className="section-subtitle">
            4-Year programs affiliated to JNTU Anantapur, approved by AICTE
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ugPrograms.map((prog) => (
              <div key={prog.code} className="card group hover:-translate-y-1 transition-transform duration-300">
                <div className="bg-gradient-to-br from-[#0d1b4b] to-[#1e3a8a] text-white p-5">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-xs text-[#c9962a] font-bold tracking-wider mb-1">{prog.code}</div>
                      <h3 className="font-display font-bold text-base leading-snug">{prog.name}</h3>
                    </div>
                    <div className="bg-[#c9962a]/20 rounded-lg px-2 py-1 text-center ml-2">
                      <div className="text-[#c9962a] font-bold text-lg">{prog.intake}</div>
                      <div className="text-white/70 text-xs">seats</div>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <div className="text-xs text-gray-500 mb-3">
                    ⏱️ {prog.duration}
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{prog.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {prog.highlights.map((h) => (
                      <span key={h} className="text-xs bg-orange-50 text-orange-700 border border-orange-200 rounded-full px-2 py-0.5">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="px-5 pb-5">
                  <Link href="/admissions" className="block text-center bg-[#0d1b4b] hover:bg-orange-700 text-white text-sm font-semibold py-2 rounded-lg transition-colors">
                    Apply for {prog.code}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section id="curriculum" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title">Curriculum & Syllabus</h2>
          <p className="section-subtitle">Our curriculum blends theory with practice, aligned with JNTU guidelines</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Year 1-2: Foundation", items: ["Mathematics & Sciences", "Engineering basics", "Programming fundamentals", "Communication skills", "Environmental studies"], color: "border-blue-400" },
              { title: "Year 3: Core Specialization", items: ["Department core subjects", "Advanced programming/design", "Mini projects", "Industrial visits", "Elective courses"], color: "border-orange-400" },
              { title: "Year 4: Advanced & Project", items: ["Major project (2 semesters)", "Advanced electives", "Internship", "Industry certifications", "Placement preparation"], color: "border-green-400" },
            ].map((sem) => (
              <div key={sem.title} className={`bg-white rounded-xl p-6 border-t-4 ${sem.color} shadow-sm`}>
                <h3 className="font-display font-bold text-[#0d1b4b] text-lg mb-4">{sem.title}</h3>
                <ul className="space-y-2">
                  {sem.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="text-[#c9962a]">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="#" className="btn-primary mr-4">Download Syllabus (R20)</Link>
            <Link href="#" className="btn-outline">Academic Regulations</Link>
          </div>
        </div>
      </section>

      {/* Academic Calendar */}
      <section id="calendar" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title">Academic Calendar 2024-25</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                sem: "I Semester (July – Nov 2024)",
                events: [
                  { event: "Class commencement", date: "July 15, 2024" },
                  { event: "Mid-term Examinations I", date: "August 26-31, 2024" },
                  { event: "Mid-term Examinations II", date: "Oct 7-12, 2024" },
                  { event: "Last working day", date: "November 2, 2024" },
                  { event: "End Semester Exams", date: "November 4-20, 2024" },
                ],
              },
              {
                sem: "II Semester (Dec 2024 – April 2025)",
                events: [
                  { event: "Class commencement", date: "December 16, 2024" },
                  { event: "Mid-term Examinations I", date: "February 3-8, 2025" },
                  { event: "Mid-term Examinations II", date: "March 10-15, 2025" },
                  { event: "Last working day", date: "April 5, 2025" },
                  { event: "End Semester Exams", date: "April 7-25, 2025" },
                ],
              },
            ].map((cal) => (
              <div key={cal.sem} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="bg-[#0d1b4b] text-white px-6 py-4">
                  <h3 className="font-bold">{cal.sem}</h3>
                </div>
                <div className="p-4">
                  {cal.events.map((ev) => (
                    <div key={ev.event} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0 text-sm">
                      <span className="text-gray-700">{ev.event}</span>
                      <span className="text-[#c9962a] font-semibold text-xs">{ev.date}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section id="faculty" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title">Faculty Profiles</h2>
          <p className="section-subtitle">Meet some of our distinguished faculty members</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {faculty.map((f) => (
              <div key={f.name} className="card p-6 flex items-start gap-4 group hover:-translate-y-1 transition-transform">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#0d1b4b] to-[#1e3a8a] flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  {f.name.split(" ").pop()![0]}
                </div>
                <div>
                  <h3 className="font-semibold text-[#0d1b4b] group-hover:text-orange-700 transition-colors">{f.name}</h3>
                  <div className="text-xs text-orange-600 font-semibold mt-0.5">{f.dept} Department</div>
                  <div className="text-xs text-gray-500 mt-1">{f.qual}</div>
                  <div className="flex gap-3 mt-2 text-xs text-gray-400">
                    <span>👨‍🏫 {f.exp}</span>
                    <span>📄 {f.pubs} papers</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="#" className="btn-outline">View All Faculty →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
