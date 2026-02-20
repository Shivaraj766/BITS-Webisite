import Link from "next/link";

const events = [
  {
    date: { day: "15", month: "MAR" },
    title: "ICETETAS 2026 — National Tech Fest",
    time: "9:00 AM onwards",
    location: "BITS Adoni Campus",
    type: "Technical",
  },
  {
    date: { day: "20", month: "Jan" },
    title: "Industry Expert Lecture Series",
    time: "2:00 PM — 5:00 PM",
    location: "Main Auditorium",
    type: "Academic",
  },
  {
    date: { day: "12", month: "Jan" },
    title: "Annual Sports Day 2026",
    time: "7:00 AM — 6:00 PM",
    location: "Sports Ground",
    type: "Sports",
  },
  {
    date: { day: "5", month: "Jan" },
    title: "Campus Recruitment Drive — TCS & Infosys",
    time: "8:00 AM — 5:00 PM",
    location: "Placement Cell",
    type: "Placement",
  },
];

const typeColors: Record<string, string> = {
  Technical: "bg-blue-100 text-blue-700",
  Academic: "bg-green-100 text-green-700",
  Sports: "bg-orange-100 text-orange-700",
  Placement: "bg-purple-100 text-purple-700",
};

export default function Events() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="section-title mb-1">Upcoming Events</h2>
            <p className="text-gray-500">Don't miss these exciting opportunities</p>
          </div>
          <Link href="#" className="btn-outline text-sm py-2 px-5">
            All Events
          </Link>
        </div>

        <div className="space-y-4">
          {events.map((event) => (
            <div
              key={event.title}
              className="flex items-center gap-6 bg-gray-50 hover:bg-orange-50 border border-gray-200 hover:border-orange-300 rounded-xl p-5 transition-all duration-200 cursor-pointer group"
            >
              <div className="flex-shrink-0 w-16 h-16 bg-[#0d1b4b] rounded-xl flex flex-col items-center justify-center text-white">
                <div className="font-display font-bold text-2xl leading-none">{event.date.day}</div>
                <div className="text-xs text-[#c9962a] font-semibold">{event.date.month}</div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${typeColors[event.type]}`}>
                    {event.type}
                  </span>
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-orange-700 transition-colors">
                  {event.title}
                </h3>
                <div className="flex gap-4 mt-1 text-sm text-gray-500">
                  <span>🕐 {event.time}</span>
                  <span>📍 {event.location}</span>
                </div>
              </div>
              <div className="text-orange-600 font-bold group-hover:translate-x-1 transition-transform">
                →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
