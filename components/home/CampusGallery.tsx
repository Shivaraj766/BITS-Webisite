const galleryItems = [
  { label: "Main Building", emoji: "🏛️", desc: "Grand main campus building", color: "from-blue-400 to-blue-600" },
  { label: "Library", emoji: "📚", desc: "80,000+ books & digital resources", color: "from-green-400 to-green-600" },
  { label: "Computer Labs", emoji: "💻", desc: "24/7 high-speed computing centers", color: "from-purple-400 to-purple-600" },
  { label: "Sports Complex", emoji: "⚽", desc: "Cricket, Football, Basketball & more", color: "from-red-400 to-red-600" },
  { label: "Research Labs", emoji: "🔬", desc: "Cutting-edge research facilities", color: "from-orange-400 to-orange-600" },
  { label: "Student Hostel", emoji: "🏠", desc: "Modern, safe accommodation", color: "from-teal-400 to-teal-600" },
  { label: "Auditorium", emoji: "🎭", desc: "1000-seat air-conditioned hall", color: "from-indigo-400 to-indigo-600" },
  { label: "Cafeteria", emoji: "🍽️", desc: "Multi-cuisine dining experience", color: "from-yellow-400 to-yellow-600" },
];

export default function CampusGallery() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="section-title">Our Campus</h2>
          <p className="section-subtitle">
            A 20-acre green campus designed for learning, living, and thriving
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryItems.map((item) => (
            <div
              key={item.label}
              className={`bg-gradient-to-br ${item.color} rounded-2xl p-6 text-white text-center cursor-pointer hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-xl aspect-square flex flex-col items-center justify-center`}
            >
              <div className="text-4xl mb-3">{item.emoji}</div>
              <div className="font-bold text-base mb-1">{item.label}</div>
              <div className="text-white/80 text-xs leading-tight">{item.desc}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-[#0d1b4b] rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            {[
              { icon: "📐", val: "20 Acres", label: "Campus Area" },
              { icon: "🏗️", val: "5+ Buildings", label: "Academic & Admin" },
              { icon: "🌳", val: "Eco-Friendly", label: "Green Campus" },
            ].map((item) => (
              <div key={item.label}>
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="font-display font-bold text-2xl text-[#c9962a]">{item.val}</div>
                <div className="text-gray-300 text-sm">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
