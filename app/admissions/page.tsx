import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Admissions 2024-25 | BITS Adoni",
  description: "Apply to BITS Adoni for B.Tech and M.Tech programs. Learn about eligibility criteria, fee structure, scholarships, and the admission process.",
};

export default function AdmissionsPage() {
  return (
    <>
      <div className="bg-gradient-to-br from-[#7c2d12] to-[#c2410c] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-sm text-orange-200 mb-2">
            <Link href="/" className="hover:text-white">Home</Link> / Admissions
          </div>
          <div className="flex items-center gap-4 mb-4">
            <h1 className="font-display font-bold text-4xl md:text-5xl">Admissions 2025-26</h1>
            <span className="bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-full animate-pulse">
              Open Now
            </span>
          </div>
          <p className="text-orange-100 text-xl max-w-3xl">
            Begin your engineering journey at BITS Adoni — applications are now open 
            for undergraduate and postgraduate programs.
          </p>
        </div>
      </div>

      {/* How to Apply */}
      <section id="apply" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title">How to Apply</h2>
          <p className="section-subtitle">A simple 5-step process to join BITS Adoni</p>
          <div className="grid md:grid-cols-5 gap-4">
            {[
              { step: 1, title: "Check Eligibility", desc: "Verify you meet the educational qualifications for your chosen program.", icon: "📋" },
              { step: 2, title: "Appear for Entrance", desc: "Appear in AP EAMCET / JEE (B.Tech) or GATE / AP PGECET (M.Tech).", icon: "✍️" },
              { step: 3, title: "Apply Online", desc: "Fill the BITS Adoni application form at the official portal with all details.", icon: "💻" },
              { step: 4, title: "Document Submission", desc: "Submit required documents including certificates, ID proof, and photographs.", icon: "📁" },
              { step: 5, title: "Pay Fees & Confirm", desc: "Pay the admission fee to confirm your seat. Get started immediately!", icon: "✅" },
            ].map((s, i) => (
              <div key={s.step} className="relative">
                <div className="text-center p-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0d1b4b] to-[#1e3a8a] text-white flex items-center justify-center text-2xl mx-auto mb-3 shadow-lg">
                    {s.icon}
                  </div>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-[#c9962a] text-white text-xs font-bold flex items-center justify-center">
                    {s.step}
                  </div>
                  <h3 className="font-bold text-[#0d1b4b] mb-2 text-sm">{s.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
                </div>
                {i < 4 && (
                  <div className="hidden md:block absolute top-8 left-[60%] right-0 h-0.5 bg-gray-200 z-0"></div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="#" className="btn-primary mr-4 text-lg py-4 px-10">
              Apply Online Now
            </Link>
            <Link href="/contact" className="btn-outline">
              Talk to Admissions
            </Link>
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section id="eligibility" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title">Eligibility Criteria</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                program: "B.Tech (All branches)",
                color: "border-blue-500",
                criteria: [
                  "10+2 / Intermediate with Physics, Chemistry, Mathematics",
                  "Minimum 45% marks (40% for SC/ST/OBC)",
                  "Valid AP EAMCET rank or JEE Main score",
                  "Age: Minimum 17 years as on December 31 of admission year",
                ],
              },
              {
                program: "M.Tech (All specializations)",
                color: "border-orange-500",
                criteria: [
                  "B.E./B.Tech in relevant discipline from recognized university",
                  "Minimum 50% aggregate marks (45% for reserved categories)",
                  "Valid GATE score or AP PGECET rank",
                  "Admission through counseling / management quota as per norms",
                ],
              },
            ].map((prog) => (
              <div key={prog.program} className={`bg-white rounded-xl p-6 border-t-4 ${prog.color} shadow-sm`}>
                <h3 className="font-display font-bold text-[#0d1b4b] text-lg mb-4">{prog.program}</h3>
                <ul className="space-y-2">
                  {prog.criteria.map((c) => (
                    <li key={c} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span> {c}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section id="fees" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title">Fee Structure 2024-25</h2>
          <p className="section-subtitle">Transparent, affordable fee structure as per APSCHE norms</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#0d1b4b] text-white">
                  <th className="text-left p-4 rounded-tl-lg">Program</th>
                  <th className="text-center p-4">Annual Tuition Fee</th>
                  <th className="text-center p-4">Hostel Fee</th>
                  <th className="text-center p-4">Total (Per Year)</th>
                  <th className="text-center p-4 rounded-tr-lg">Action</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { prog: "B.Tech CSE / IT", tuition: "₹1,10,000", hostel: "₹65,000", total: "₹1,75,000" },
                  { prog: "B.Tech ECE / EEE", tuition: "₹1,05,000", hostel: "₹65,000", total: "₹1,70,000" },
                  { prog: "B.Tech Mech. / Civil", tuition: "₹1,00,000", hostel: "₹65,000", total: "₹1,65,000" },
                  { prog: "M.Tech (All specializations)", tuition: "₹90,000", hostel: "₹65,000", total: "₹1,55,000" },
                ].map((row, i) => (
                  <tr key={row.prog} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="p-4 font-semibold text-[#0d1b4b]">{row.prog}</td>
                    <td className="p-4 text-center text-gray-700">{row.tuition}</td>
                    <td className="p-4 text-center text-gray-700">{row.hostel}</td>
                    <td className="p-4 text-center font-bold text-orange-700">{row.total}</td>
                    <td className="p-4 text-center">
                      <Link href="#" className="text-orange-700 hover:underline text-xs font-semibold">Apply</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-4">
            * Fee subject to APSCHE approval. SC/ST students eligible for fee reimbursement. 
            Additional development fee and exam fee applicable.
          </p>
        </div>
      </section>

      {/* Scholarships */}
      <section id="scholarships" className="py-16 bg-gradient-to-br from-[#0d1b4b] to-[#1e3a8a] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-display font-bold text-3xl text-white mb-3">Scholarships & Financial Aid</h2>
          <p className="text-gray-300 mb-10">No deserving student should be denied quality education due to financial constraints</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "AP Fee Reimbursement", type: "Government", desc: "Full tuition fee reimbursement for SC/ST/BC students meeting income criteria by Andhra Pradesh Government.", amount: "100% Tuition Fee" },
              { name: "Merit Scholarship", type: "Institutional", desc: "Top 5 rankers in each EAMCET category receive merit scholarship for the first year.", amount: "₹25,000/year" },
              { name: "Sports Scholarship", type: "Institutional", desc: "Students who represent state or national level in sports receive special scholarships.", amount: "₹15,000/year" },
              { name: "NRI Scholarship", type: "Special", desc: "Children of NRI parents studying at BITS Adoni receive special incentive discounts.", amount: "25% Discount" },
              { name: "Management Scholarship", type: "Institutional", desc: "Students from economically weaker sections (EWS) with EWS certificate.", amount: "₹20,000/year" },
              { name: "PG Merit Scholarship", type: "Institutional", desc: "Top-performing M.Tech entrants with valid GATE / PGECET score are eligible.", amount: "Up to ₹30,000/year" },
              { name: "Central Scholarship", type: "Government", desc: "Post-matric scholarship for SC/ST/OBC students from Central Government.", amount: "As per eligibility" },
            ].map((sch) => (
              <div key={sch.name} className="bg-white/10 border border-white/20 rounded-xl p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-[#c9962a] text-lg">{sch.name}</h3>
                  <span className="text-xs bg-white/10 rounded px-2 py-1">{sch.type}</span>
                </div>
                <p className="text-gray-300 text-sm mb-3">{sch.desc}</p>
                <div className="font-bold text-green-400">{sch.amount}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
