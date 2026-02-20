import Link from "next/link";

const recruiters = [
  "SIRIS APPS", "TCS", "Infosys", "Wipro", "HCL", "Tech Mahindra", "Cognizant",
  "Amazon", "Microsoft", "IBM", "Accenture", "Capgemini", 
];

const stats = [
  { value: "₹9 LPA", label: "Highest Package", color: "text-orange-600" },
  { value: "₹6.2 LPA", label: "Average Package", color: "text-blue-600" },
  { value: "50+", label: "Offers 2023-24", color: "text-green-600" },
  { value: "10+", label: "Recruiting Companies", color: "text-purple-600" },
];

export default function PlacementsHighlight() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Placements & Careers</h2>
          <p className="section-subtitle">
            Our students join the world's best companies — here's the proof
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((s) => (
            <div key={s.label} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className={`text-3xl font-display font-bold ${s.color} mb-1`}>{s.value}</div>
              <div className="text-sm text-gray-600 font-medium">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Recruiters */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-8">
          <h3 className="font-display font-bold text-[#0d1b4b] text-xl mb-6 text-center">
            Our Top Recruiters
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {recruiters.map((company) => (
              <div
                key={company}
                className="bg-gray-50 hover:bg-orange-50 border border-gray-200 hover:border-orange-300 rounded-xl p-3 text-center text-sm font-bold text-gray-700 hover:text-orange-700 transition-all duration-200 cursor-pointer"
              >
                {company}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/placements" className="btn-primary mr-4">
            View Placement Statistics
          </Link>
          <Link href="/placements#alumni" className="btn-outline">
            Alumni Success Stories
          </Link>
        </div>
      </div>
    </section>
  );
}
