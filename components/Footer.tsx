import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0d1b4b] text-white">
      {/* Accreditation Bar */}
      <div className="bg-[#c9962a] py-3 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-6 md:gap-12 items-center text-sm font-semibold text-white">
          <span>✓ Affiliated to JNTU Anantapur</span>
          <span>✓ Approved by AICTE, New Delhi</span>
          <span>✓ Recognized by UGC</span>
          <span>✓ ISO 9001:2015 Certified</span>
          <span>✓ NAAC Accredited</span>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* College Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Link href="/" className="flex items-center gap-3 group">
                <div className=" bg-white border border-gray-200 shadow-md group-hover:shadow-lg transition-shadow">
                        <Image
                          src="/LOGO.png"
                          alt="BITS Adoni Logo"
                          width={40}
                          height={100}
                          className="w-full h-full object-cover"
                          priority
                        />
                      </div>
                </Link>

              <div>
                <div className="font-display font-bold text-lg">BITS</div>
                <div className="text-xs text-gray-400">Est. 2008</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Bharat Institute of Technology & Science, Adoni — a premier engineering institution 
              committed to excellence in education, research, and innovation.
            </p>
            <div className="flex gap-3 mt-4">
              {["Facebook", "Twitter", "LinkedIn", "YouTube", "Instagram"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-8 h-8 bg-white/10 hover:bg-[#c9962a] rounded-full flex items-center justify-center transition-colors text-xs"
                  title={social}
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-[#c9962a] mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              {[
                { label: "About BITS Adoni", href: "/about" },
                { label: "Academic Programs", href: "/programs" },
                { label: "Admissions 2025-26", href: "/admissions" },
                { label: "Research & Innovation", href: "/research" },
                { label: "Campus Life", href: "/campus-life" },
                { label: "Placements", href: "/placements" },
                { label: "Contact Us", href: "/contact" },
                { label: "NIRF Ranking", href: "#" },
                { label: "NAAC Report", href: "#" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-[#c9962a] transition-colors flex items-center gap-1">
                    <span className="text-[#c9962a]">›</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-display font-bold text-[#c9962a] mb-4 text-lg">Programs</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              {[
                "B.Tech CSE",
                "B.Tech ECE",
                "B.Tech EEE",
                "B.Tech Mech.",
                "B.Tech Civil",
                "B.Tech IT",
              ].map((prog) => (
                <li key={prog}>
                  <Link href="/programs" className="hover:text-[#c9962a] transition-colors flex items-center gap-1">
                    <span className="text-[#c9962a]">›</span> {prog}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-[#c9962a] mb-4 text-lg">Contact Us</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex gap-3">
                <span className="text-[#c9962a] mt-0.5">📍</span>
                <span>
                  BITS Adoni, NH-44,<br />
                  Adoni - 518301,<br />
                  Kurnool District,<br />
                  Andhra Pradesh, India
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#c9962a]">📞</span>
                <div>
                  <div>+91-8562-223344</div>
                  <div>+91-8562-223345</div>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-[#c9962a]">✉</span>
                <div>
                  <div>principal@bitsadoni.ac.in</div>
                  <div>admissions@bitsadoni.ac.in</div>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-[#c9962a]">🌐</span>
                <a href="https://bitsadoni.ac.in" className="hover:text-[#c9962a] transition-colors">
                  www.bitsadoni.ac.in
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-gray-500">
          <span>© {currentYear} BITS Adoni. All rights reserved.</span>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-[#c9962a] transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-[#c9962a] transition-colors">Terms of Use</Link>
            <Link href="#" className="hover:text-[#c9962a] transition-colors">Grievance</Link>
            <Link href="#" className="hover:text-[#c9962a] transition-colors">RTI</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
