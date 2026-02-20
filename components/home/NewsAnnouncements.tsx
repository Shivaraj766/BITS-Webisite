import Link from "next/link";

const news = [
  {
    date: "Dec 15, 2026",
    category: "Admissions",
    title: "BITS Adoni Opens Applications for B.Tech 2025-26 Academic Year",
    excerpt: "Applications are now open for all B.Tech programs. Students who qualify in AP EAMCET/JEE are eligible to apply through the official portal.",
    tag: "New",
  },
  {
    date: "Dec 10, 2025",
    category: "Placements",
    title: "Record Placements: 500+ Students Placed in Top Companies",
    excerpt: "The placement cell achieved a milestone with over 500 students receiving offer letters from leading IT, Core, and Management companies.",
    tag: "Achievement",
  },
  {
    date: "Dec 5, 2025",
    category: "Research",
    title: "AI & ML Research Center Inaugurated by Governor",
    excerpt: "The new Artificial Intelligence and Machine Learning research center was inaugurated, featuring GPU clusters and collaboration with IIT Hyderabad.",
    tag: "Research",
  },
  {
    date: "Nov 28, 2025",
    category: "Events",
    title: "COGNIZANCE 2025 — National Tech Fest Announced",
    excerpt: "The annual national-level tech fest COGNIZANCE 2025 is scheduled for February 15-17, 2026 with exciting events, workshops, and competitions.",
    tag: "Event",
  },
  {
    date: "Nov 20, 2025",
    category: "Academic",
    title: "BITS Adoni Receives Best Engineering College Award",
    excerpt: "BITS Adoni was honored with the Best Engineering College in Andhra Pradesh award at the National Education Summit 2024.",
    tag: "Award",
  },
  {
    date: "Nov 15, 2025",
    category: "Faculty",
    title: "Dr. Ramesh Kumar Joins as Head of Research & Development",
    excerpt: "Eminent researcher Dr. Ramesh Kumar, with 20+ years of experience and 50+ publications, joins BITS Adoni as HoD of R&D.",
    tag: "Faculty",
  },
];

const tagColors: Record<string, string> = {
  New: "bg-green-100 text-green-700",
  Achievement: "bg-yellow-100 text-yellow-700",
  Research: "bg-blue-100 text-blue-700",
  Event: "bg-purple-100 text-purple-700",
  Award: "bg-orange-100 text-orange-700",
  Faculty: "bg-teal-100 text-teal-700",
};

export default function NewsAnnouncements() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <h2 className="section-title mb-1">News & Announcements</h2>
            <p className="text-gray-500">Stay updated with the latest happenings at BITS Adoni</p>
          </div>
          <Link href="#" className="btn-outline text-sm py-2 px-5">
            View All News
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item) => (
            <article key={item.title} className="card group cursor-pointer">
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${tagColors[item.tag]}`}>
                    {item.tag}
                  </span>
                  <span className="text-xs text-gray-400">{item.date}</span>
                </div>
                <div className="text-xs text-orange-600 font-semibold mb-1 uppercase tracking-wide">
                  {item.category}
                </div>
                <h3 className="font-display font-bold text-gray-900 text-base leading-snug mb-2 group-hover:text-orange-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {item.excerpt}
                </p>
                <div className="mt-4 text-orange-700 text-sm font-semibold group-hover:gap-2 flex items-center gap-1 transition-all">
                  Read More <span>→</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Important announcements board */}
        <div className="mt-10 bg-blue-50 border border-blue-200 rounded-2xl p-6">
          <h3 className="font-display font-bold text-[#0d1b4b] text-xl mb-4 flex items-center gap-2">
            📋 Important Notices
          </h3>
          <ul className="space-y-2">
            {[
              "Last date to submit EAMCET fee reimbursement forms: Feb 28, 2026",
              "Mid semester examinations schedule for II Semester 2025-26 released",
              "NPTEL online course enrollment portal open till December 25, 2025",
              "Anti-ragging committee meeting scheduled for January 5, 2026",
              "Sports day celebrations announced for January 12, 2026",
            ].map((notice) => (
              <li key={notice} className="flex items-start gap-3 py-2 border-b border-blue-100 last:border-0">
                <span className="text-orange-600 font-bold text-sm mt-0.5">•</span>
                <span className="text-gray-700 text-sm">{notice}</span>
                <span className="ml-auto text-xs text-orange-600 font-semibold flex-shrink-0 bg-orange-50 px-2 py-0.5 rounded">
                  New
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
