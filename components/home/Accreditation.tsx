const accreditations = [
  { name: "AICTE", fullName: "All India Council for Technical Education", detail: "Approved Institution", emoji: "🏛️" },
  { name: "JNTUA", fullName: "Jawaharlal Nehru Tech. University, Anantapur", detail: "Affiliated University", emoji: "🎓" },
  { name: "UGC", fullName: "University Grants Commission", detail: "Recognized", emoji: "📜" },
  { name: "NAAC", fullName: "National Assessment & Accreditation Council", detail: "Accredited", emoji: "⭐" },
  { name: "ISO", fullName: "International Organization for Standardization", detail: "ISO 9001:2015 Certified", emoji: "✅" },
  { name: "NIRF", fullName: "National Institutional Ranking Framework", detail: "Ranked 2024", emoji: "🏆" },
];

export default function Accreditation() {
  return (
    <section className="py-14 bg-gradient-to-r from-[#0d1b4b] to-[#1e3a8a]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-white mb-2">
            Accreditations & Recognitions
          </h2>
          <p className="text-gray-300">
            Officially recognized by India's most prestigious educational bodies
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {accreditations.map((acc) => (
            <div
              key={acc.name}
              className="bg-white/10 hover:bg-white/20 border border-white/20 hover:border-[#c9962a]/50 rounded-xl p-5 text-center text-white transition-all duration-200 group"
            >
              <div className="text-3xl mb-2">{acc.emoji}</div>
              <div className="font-display font-bold text-xl text-[#c9962a] mb-1">{acc.name}</div>
              <div className="text-xs text-gray-300 leading-tight mb-1">{acc.fullName}</div>
              <div className="text-xs text-green-400 font-semibold">{acc.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
