import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Campus Life | BITS Adoni",
  description: "Experience vibrant campus life at BITS Adoni — student clubs, sports, accommodation, dining, and a safe welcoming environment.",
};

export default function CampusLifePage() {
  return (
    <>
      <div className="bg-gradient-to-br from-[#4c1d95] to-[#6d28d9] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-sm text-purple-200 mb-2">
            <Link href="/" className="hover:text-white">Home</Link> / Campus Life
          </div>
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-4">Campus Life</h1>
          <p className="text-purple-100 text-xl max-w-3xl">
            Life at BITS Adoni extends beyond classrooms — a vibrant, safe, and inclusive 
            campus community where you grow holistically.
          </p>
        </div>
      </div>

      {/* Student Activities */}
      <section id="activities" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title">Student Activities</h2>
          <p className="section-subtitle">A thriving ecosystem of learning and engagement beyond academics</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🎭", title: "Cultural Events", desc: "Annual cultural fest YUVA KALA with dance, drama, music, and art competitions attracting 1000+ participants." },
              { icon: "💻", title: "Tech Fests", desc: "COGNIZANCE — national-level tech fest with hackathons, paper presentations, workshops, and project exhibitions." },
              { icon: "🎨", title: "Arts & Crafts", desc: "Fine arts club, photography club, and creative workshops promoting artistic expression and creativity." },
              { icon: "📰", title: "College Magazine", desc: "BITS BYTES — student-run quarterly magazine covering campus news, technical articles, and creative writing." },
            ].map((a) => (
              <div key={a.title} className="card p-6 text-center group hover:-translate-y-1 transition-transform duration-300">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{a.icon}</div>
                <h3 className="font-bold text-[#0d1b4b] mb-2">{a.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clubs & Sports */}
      <section id="clubs" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Clubs */}
            <div>
              <h2 className="section-title">Student Clubs</h2>
              <div className="space-y-3">
                {[
                  { name: "IEEE Student Branch", desc: "Technical programs, seminars, and international project competitions", members: 200 },
                  { name: "NSS (National Service Scheme)", desc: "Community service, village adoption, blood donation drives", members: 300 },
                  { name: "NCC (National Cadet Corps)", desc: "Leadership, discipline, and national integration through military training", members: 150 },
                  { name: "Coding Club", desc: "Competitive programming, hackathons, and open-source contributions", members: 250 },
                  { name: "Robotics Club", desc: "Drone building, autonomous systems, and national-level competitions", members: 120 },
                  { name: "Entrepreneurs Club", desc: "Startup mentoring, business plan competitions, and industry talks", members: 180 },
                  { name: "Green Club", desc: "Environmental awareness, tree plantation, and sustainability initiatives", members: 200 },
                  { name: "Literary Club", desc: "Debates, elocution, poetry, and creative writing workshops", members: 160 },
                ].map((club) => (
                  <div key={club.name} className="bg-white rounded-xl p-4 border border-gray-100 hover:border-purple-200 hover:shadow-sm transition-all flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 font-bold text-sm flex-shrink-0">
                      {club.name[0]}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-[#0d1b4b] text-sm">{club.name}</div>
                      <div className="text-xs text-gray-500">{club.desc}</div>
                    </div>
                    <div className="text-xs text-purple-600 font-bold">{club.members}+</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sports */}
            <div>
              <h2 className="section-title">Sports Facilities</h2>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { sport: "Cricket", icon: "🏏", level: "District Level" },
                  { sport: "Football", icon: "⚽", level: "Inter-college" },
                  { sport: "Basketball", icon: "🏀", level: "State Level" },
                  { sport: "Volleyball", icon: "🏐", level: "Inter-college" },
                  { sport: "Athletics", icon: "🏃", level: "State Level" },
                  { sport: "Badminton", icon: "🏸", level: "Inter-college" },
                  { sport: "Table Tennis", icon: "🏓", level: "State Level" },
                  { sport: "Chess", icon: "♟️", level: "National" },
                ].map((sport) => (
                  <div key={sport.sport} className="bg-white rounded-xl p-4 border border-gray-100 hover:border-orange-200 flex items-center gap-3">
                    <span className="text-2xl">{sport.icon}</span>
                    <div>
                      <div className="font-semibold text-[#0d1b4b] text-sm">{sport.sport}</div>
                      <div className="text-xs text-orange-600">{sport.level}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-[#0d1b4b] rounded-xl p-6 text-white">
                <h3 className="font-bold text-[#c9962a] mb-3">Sports Infrastructure</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  {[
                    "Full-size cricket ground with 22-yard pitch",
                    "Football field with LED floodlights",
                    "Indoor badminton and table tennis hall",
                    "Gymnasium with modern equipment",
                    "Basketball and volleyball courts",
                    "Indoor chess and carom facilities",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="text-[#c9962a]">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accommodation */}
      <section id="accommodation" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title">Accommodation & Hostels</h2>
          <p className="section-subtitle">Safe, comfortable, and well-equipped residential facilities</p>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                type: "Boys' Hostel",
                capacity: "1200 students",
                blocks: "3 Blocks (A, B, C)",
                rooms: "Triple/Double/Single sharing",
                icon: "🏢",
                color: "bg-blue-50 border-blue-200",
                amenities: ["24/7 hot water", "Wi-Fi connectivity", "TV lounge & reading room", "Laundry facilities", "In-campus medical aid", "CCTV surveillance", "24/7 security personnel", "Generator backup"],
              },
              {
                type: "Girls' Hostel",
                capacity: "800 students",
                blocks: "2 Blocks (D, E)",
                rooms: "Triple/Double sharing",
                icon: "🏠",
                color: "bg-pink-50 border-pink-200",
                amenities: ["24/7 hot water", "Wi-Fi connectivity", "Common room with TV", "Women wardens", "In-campus medical aid", "CCTV surveillance", "Biometric entry", "Dedicated study room"],
              },
            ].map((h) => (
              <div key={h.type} className={`${h.color} border rounded-2xl p-8`}>
                <div className="text-5xl mb-4">{h.icon}</div>
                <h3 className="font-display font-bold text-[#0d1b4b] text-2xl mb-2">{h.type}</h3>
                <div className="grid grid-cols-3 gap-3 mb-6 text-sm">
                  <div className="bg-white rounded-lg p-3 text-center">
                    <div className="font-bold text-[#0d1b4b]">{h.capacity}</div>
                    <div className="text-xs text-gray-500">Capacity</div>
                  </div>
                  <div className="bg-white rounded-lg p-3 text-center">
                    <div className="font-bold text-[#0d1b4b]">{h.blocks}</div>
                    <div className="text-xs text-gray-500">Blocks</div>
                  </div>
                  <div className="bg-white rounded-lg p-3 text-center">
                    <div className="font-bold text-[#0d1b4b] text-xs">{h.rooms}</div>
                    <div className="text-xs text-gray-500">Room Types</div>
                  </div>
                </div>
                <h4 className="font-semibold text-[#0d1b4b] mb-2">Amenities</h4>
                <div className="grid grid-cols-2 gap-1">
                  {h.amenities.map((a) => (
                    <div key={a} className="flex items-center gap-1.5 text-sm text-gray-700">
                      <span className="text-green-500">✓</span> {a}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dining & Safety */}
      <section id="dining" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Dining */}
            <div>
              <h2 className="section-title">Dining Facilities</h2>
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="text-5xl mb-4">🍽️</div>
                <h3 className="font-bold text-[#0d1b4b] text-xl mb-4">Central Cafeteria & Canteen</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  The 500-seat central cafeteria serves nutritious, hygienic, multi-cuisine meals 
                  catering to diverse dietary preferences. Our professionally trained chefs prepare 
                  South Indian, North Indian, and continental options.
                </p>
                <div className="space-y-3 text-sm">
                  {[
                    { time: "7:00 AM – 9:00 AM", meal: "Breakfast", items: "Idli, Dosa, Paratha, Fruits, Juices" },
                    { time: "12:00 PM – 2:00 PM", meal: "Lunch", items: "Full meals — Rice, Rotis, Sabzi, Dal, Salad" },
                    { time: "4:00 PM – 6:00 PM", meal: "Evening Snacks", items: "Samosa, Vada, Chai, Coffee, Snacks" },
                    { time: "7:30 PM – 9:30 PM", meal: "Dinner", items: "Full meals — Rice, Rotis, Curries, Dessert" },
                  ].map((meal) => (
                    <div key={meal.meal} className="flex gap-4 p-3 bg-orange-50 rounded-lg">
                      <div className="text-xs text-orange-600 font-semibold w-28 flex-shrink-0">{meal.time}</div>
                      <div>
                        <div className="font-semibold text-[#0d1b4b]">{meal.meal}</div>
                        <div className="text-xs text-gray-500">{meal.items}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Safety */}
            <div>
              <h2 className="section-title">Campus Safety</h2>
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="text-5xl mb-4">🛡️</div>
                <h3 className="font-bold text-[#0d1b4b] text-xl mb-4">Your Safety is Our Priority</h3>
                <div className="space-y-4">
                  {[
                    { icon: "📹", title: "CCTV Surveillance", desc: "200+ cameras across campus with 24/7 monitoring and recording" },
                    { icon: "👮", title: "Security Personnel", desc: "Trained security guards at all entry/exit points round the clock" },
                    { icon: "🏥", title: "Medical Facility", desc: "In-campus health center with doctor, nurse, and first aid available 24/7" },
                    { icon: "🚗", title: "Bus Services", desc: "College buses covering 30+ routes for safe commuting to/from campus" },
                    { icon: "🚨", title: "Emergency Helpline", desc: "Dedicated emergency number for students to report any incident" },
                    { icon: "🤝", title: "Anti-Ragging", desc: "Zero-tolerance anti-ragging policy with committee and helpline" },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <div className="font-semibold text-[#0d1b4b] text-sm">{item.title}</div>
                        <div className="text-gray-500 text-xs mt-0.5">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
