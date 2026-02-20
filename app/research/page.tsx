import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Research & Innovation | BITS Adoni",
  description: "Explore research centers, ongoing projects, industry collaborations, and funded research at BITS Adoni.",
};

export default function ResearchPage() {
  return (
    <>
      <div className="bg-gradient-to-br from-[#064e3b] to-[#065f46] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-sm text-green-200 mb-2">
            <Link href="/" className="hover:text-white">Home</Link> / Research
          </div>
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-4">Research & Innovation</h1>
          <p className="text-green-100 text-xl max-w-3xl">
            Pushing boundaries of knowledge through cutting-edge research, industry partnerships, 
            and innovation that addresses real-world challenges.
          </p>
        </div>
      </div>

      {/* Research Centers */}
      <section id="centers" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title">Research Centers</h2>
          <p className="section-subtitle">State-of-the-art research facilities driving innovation</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Centre for AI & Machine Learning", icon: "🤖", established: "2021", area: "Deep Learning, NLP, Computer Vision, Robotics", collab: "IIT Hyderabad", head: "Dr. A. Suresh Kumar", pubs: 28 },
              { name: "Centre for VLSI & Embedded Systems", icon: "🔌", established: "2016", area: "IC Design, FPGA, IoT, Signal Processing", collab: "Texas Instruments", head: "Dr. B. Lakshmi Devi", pubs: 35 },
              { name: "Centre for Renewable Energy", icon: "⚡", established: "2018", area: "Solar, Wind, Smart Grids, Energy Storage", collab: "NREL India", head: "Dr. C. Ravi Shankar", pubs: 22 },
              { name: "Centre for Structural Engineering", icon: "🏗️", established: "2015", area: "Seismic Analysis, Smart Materials, FEM", collab: "CPWD", head: "Dr. E. Venkanna", pubs: 19 },
              { name: "Centre for Data Science & Analytics", icon: "📊", established: "2020", area: "Big Data, Cloud Computing, Cybersecurity", collab: "Amazon AWS", head: "Dr. F. Sarada", pubs: 31 },
              { name: "Centre for Manufacturing Technology", icon: "⚙️", established: "2017", area: "CNC, Additive Manufacturing, Industry 4.0", collab: "L&T Engineering", head: "Dr. D. Padmavathi", pubs: 15 },
            ].map((center) => (
              <div key={center.name} className="card p-6 group hover:-translate-y-1 transition-transform duration-300">
                <div className="text-4xl mb-3">{center.icon}</div>
                <h3 className="font-display font-bold text-[#0d1b4b] text-lg mb-2 leading-snug">{center.name}</h3>
                <div className="space-y-1.5 text-sm text-gray-600">
                  <div><span className="font-semibold">Est:</span> {center.established}</div>
                  <div><span className="font-semibold">Focus:</span> {center.area}</div>
                  <div><span className="font-semibold">Collaboration:</span> {center.collab}</div>
                  <div><span className="font-semibold">Head:</span> {center.head}</div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs bg-green-100 text-green-700 font-semibold px-2 py-1 rounded">
                    {center.pubs} Publications
                  </span>
                  <span className="text-orange-700 text-sm font-semibold group-hover:underline cursor-pointer">
                    Learn More →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ongoing Projects */}
      <section id="projects" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title">Ongoing Research Projects</h2>
          <p className="section-subtitle">Active projects making real-world impact</p>
          <div className="space-y-4">
            {[
              { title: "Smart Grid Management Using AI & IoT", dept: "EEE + CSE", pi: "Dr. C. Ravi Shankar", funding: "DST, New Delhi", amount: "₹45 Lakhs", duration: "2022-2025", status: "Active" },
              { title: "Automated Crop Disease Detection Using Deep Learning", dept: "CSE + ECE", pi: "Dr. A. Suresh Kumar", funding: "ICAR", amount: "₹30 Lakhs", duration: "2023-2026", status: "Active" },
              { title: "Low-Cost Affordable Housing Using Sustainable Materials", dept: "CIVIL", pi: "Dr. E. Venkanna", funding: "HUDCO", amount: "₹25 Lakhs", duration: "2023-2025", status: "Active" },
              { title: "Hybrid Electric Vehicle Battery Management System", dept: "EEE + MECH", pi: "Dr. D. Padmavathi", funding: "DRDO", amount: "₹60 Lakhs", duration: "2021-2024", status: "Ongoing" },
              { title: "Cybersecurity Framework for Rural Banking", dept: "CSE + IT", pi: "Dr. F. Sarada", funding: "NABARD", amount: "₹20 Lakhs", duration: "2023-2025", status: "Active" },
            ].map((proj) => (
              <div key={proj.title} className="bg-white rounded-xl p-6 border border-gray-100 hover:border-green-200 hover:shadow-md transition-all">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex gap-2 mb-2">
                      <span className="text-xs bg-blue-100 text-blue-700 font-semibold px-2 py-0.5 rounded">{proj.dept}</span>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded ${proj.status === "Active" ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"}`}>{proj.status}</span>
                    </div>
                    <h3 className="font-bold text-[#0d1b4b] text-base mb-1">{proj.title}</h3>
                    <div className="text-sm text-gray-500">PI: {proj.pi}</div>
                  </div>
                  <div className="md:text-right space-y-1 text-sm">
                    <div><span className="text-gray-500">Funding:</span> <span className="font-semibold text-[#0d1b4b]">{proj.funding}</span></div>
                    <div className="font-bold text-green-700">{proj.amount}</div>
                    <div className="text-gray-400 text-xs">{proj.duration}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Collaborations */}
      <section id="industry" className="py-16 bg-[#0d1b4b] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-display font-bold text-3xl text-white mb-3">Industry Collaborations</h2>
          <p className="text-gray-300 mb-10">Strategic partnerships driving practical innovation</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { company: "IIT Hyderabad", type: "Academic", collab: "Joint research in AI/ML, student exchange, and Ph.D. guidance." },
              { company: "Texas Instruments", type: "Industry", collab: "VLSI design lab setup, curriculum input, student projects, internships." },
              { company: "Amazon Web Services", type: "Industry", collab: "Cloud computing lab, AWS Academy partnership, certifications." },
              { company: "Tata Consultancy Services", type: "Industry", collab: "Industry-specific training, campus recruitment, capstone projects." },
              { company: "L&T Construction", type: "Industry", collab: "Civil engineering projects, field visits, expert guest lectures." },
              { company: "DRDO Hyderabad", type: "Government", collab: "Defense research collaboration, funded projects, internship for final year." },
            ].map((col) => (
              <div key={col.company} className="bg-white/10 border border-white/20 hover:border-[#c9962a]/50 rounded-xl p-6 transition-all">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-bold text-[#c9962a] text-lg">{col.company}</h3>
                  <span className="text-xs bg-white/10 rounded px-2 py-1">{col.type}</span>
                </div>
                <p className="text-gray-300 text-sm">{col.collab}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Funded Research */}
      <section id="funded" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title">Funded Research Summary</h2>
          <div className="grid md:grid-cols-4 gap-6 mb-10">
            {[
              { val: "₹2.8 Cr", label: "Total Funded Research", icon: "💰" },
              { val: "20+", label: "Active Projects", icon: "🔬" },
              { val: "8", label: "Funding Agencies", icon: "🏛️" },
              { val: "150+", label: "Research Publications", icon: "📄" },
            ].map((s) => (
              <div key={s.label} className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 shadow-sm">
                <div className="text-3xl mb-2">{s.icon}</div>
                <div className="font-display font-bold text-2xl text-[#0d1b4b]">{s.val}</div>
                <div className="text-sm text-gray-600 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="bg-gradient-to-br from-gray-50 to-orange-50 rounded-2xl p-8 border border-orange-100">
            <h3 className="font-display font-bold text-xl text-[#0d1b4b] mb-4">Funding Agencies</h3>
            <div className="flex flex-wrap gap-3">
              {["DST", "DRDO", "ICAR", "HUDCO", "NABARD", "DBT", "NSTEDB", "MoE"].map((agency) => (
                <span key={agency} className="bg-white border border-orange-200 text-[#0d1b4b] font-bold px-4 py-2 rounded-lg text-sm">
                  {agency}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
