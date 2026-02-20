"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
const navItems = [
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Overview & Vision", href: "/about#overview" },
      { label: "Leadership", href: "/about#leadership" },
      { label: "History", href: "/about#history" },
      { label: "Affiliations", href: "/about#affiliations" },
    ],
  },
  {
    label: "Academics",
    href: "/programs",
    children: [
      { label: "UG Programs", href: "/programs#ug" },
      { label: "Curriculum & Syllabus", href: "/programs#curriculum" },
      { label: "Academic Calendar", href: "/programs#calendar" },
      { label: "Faculty", href: "/programs#faculty" },
    ],
  },
  {
    label: "Admissions",
    href: "/admissions",
    children: [
      { label: "How to Apply", href: "/admissions#apply" },
      { label: "Eligibility", href: "/admissions#eligibility" },
      { label: "Fee Structure", href: "/admissions#fees" },
      { label: "Scholarships", href: "/admissions#scholarships" },
    ],
  },
  {
    label: "Research",
    href: "/research",
    children: [
      { label: "Research Centers", href: "/research#centers" },
      { label: "Ongoing Projects", href: "/research#projects" },
      { label: "Industry Collaborations", href: "/research#industry" },
      { label: "Funded Research", href: "/research#funded" },
    ],
  },
  {
    label: "Campus Life",
    href: "/campus-life",
    children: [
      { label: "Student Activities", href: "/campus-life#activities" },
      { label: "Clubs & Sports", href: "/campus-life#clubs" },
      { label: "Accommodation", href: "/campus-life#accommodation" },
      { label: "Dining & Safety", href: "/campus-life#dining" },
    ],
  },
  {
    label: "Placements",
    href: "/placements",
    children: [
      { label: "Career Guidance", href: "/placements#career" },
      { label: "Internships", href: "/placements#internships" },
      { label: "Statistics", href: "/placements#stats" },
      { label: "Alumni Stories", href: "/placements#alumni" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="bg-[#000000] text-white text-xs py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex gap-6">
            <span>📞 +91-8562-223344</span>
            <span>✉ admissions@bitsadoni.ac.in</span>
          </div>
          <div className="flex gap-4 items-center">
            <span className="text-yellow-300 font-semibold animate-pulse">
              🎓 Admissions Open 2026
            </span>
            <span>|</span>
            <Link href="/admissions" className="hover:text-yellow-300 transition-colors">
              Apply Now →
            </Link>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-lg border-b border-gray-100"
            : "bg-white shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
      <Link href="/" className="flex items-center gap-3 group">
        <div className=" bg-white border border-gray-200 shadow-md group-hover:shadow-lg transition-shadow">
          <Image
            src="/LOGO.png"
            alt="BITS Adoni Logo"
            width={100}
            height={100}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </Link>


            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="nav-link px-3 py-2 rounded-md flex items-center gap-1"
                  >
                    {item.label}
                    {item.children && (
                      <svg className="w-3 h-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </Link>
                  {item.children && activeDropdown === item.label && (
                    <div className="absolute top-full left-0 bg-white shadow-xl rounded-lg border border-gray-100 py-2 min-w-[200px] z-50">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-700 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link href="/admissions" className="btn-primary ml-4 text-sm py-2 px-5">
                Apply Now
              </Link>
              <Link
                href="/gallery"
                className="ml-2 inline-flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200 text-[#0d1b4b] hover:bg-orange-50 hover:text-orange-700 transition-colors"
                aria-label="Open Gallery"
                title="Gallery"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 7a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7zm3 8l3-3 2 2 3-4 4 5"
                  />
                </svg>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-orange-700"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 py-4 px-4 space-y-1 max-h-[80vh] overflow-y-auto">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className="block py-2 px-3 text-gray-700 hover:text-orange-700 font-semibold"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="ml-4 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block py-1.5 px-3 text-sm text-gray-600 hover:text-orange-700"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/admissions"
              className="btn-primary block text-center mt-4"
              onClick={() => setMobileOpen(false)}
            >
              Apply Now
            </Link>
            <Link
              href="/gallery"
              className="block text-center mt-2 py-2 px-3 rounded-md border border-gray-200 text-[#0d1b4b] hover:bg-orange-50 hover:text-orange-700"
              onClick={() => setMobileOpen(false)}
            >
              🖼 Gallery
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}