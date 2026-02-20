import Link from "next/link";

const quickLinks = [
  { icon: "🎓", label: "Admissions 2024-25", href: "/admissions", color: "bg-blue-50 border-blue-200 hover:border-blue-400", textColor: "text-blue-900" },
  { icon: "📚", label: "Academic Programs", href: "/programs", color: "bg-orange-50 border-orange-200 hover:border-orange-400", textColor: "text-orange-900" },
  { icon: "📋", label: "Apply Online", href: "/admissions#apply", color: "bg-green-50 border-green-200 hover:border-green-400", textColor: "text-green-900" },
  { icon: "📅", label: "Academic Calendar", href: "/programs#calendar", color: "bg-purple-50 border-purple-200 hover:border-purple-400", textColor: "text-purple-900" },
  { icon: "💼", label: "Placement Statistics", href: "/placements#stats", color: "bg-yellow-50 border-yellow-200 hover:border-yellow-400", textColor: "text-yellow-900" },
  { icon: "🔬", label: "Research Centers", href: "/research", color: "bg-red-50 border-red-200 hover:border-red-400", textColor: "text-red-900" },
  { icon: "🏠", label: "Hostel & Campus", href: "/campus-life#accommodation", color: "bg-teal-50 border-teal-200 hover:border-teal-400", textColor: "text-teal-900" },
  { icon: "📞", label: "Contact Us", href: "/contact", color: "bg-indigo-50 border-indigo-200 hover:border-indigo-400", textColor: "text-indigo-900" },
];

export default function QuickLinks() {
  return (
    <section className="py-10 bg-gray-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {quickLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`${link.color} ${link.textColor} border rounded-xl p-4 text-center transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 group`}
            >
              <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-200">{link.icon}</div>
              <div className="text-xs font-semibold leading-tight">{link.label}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
