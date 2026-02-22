"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

/* ── icon helpers (kept tiny – no extra dep) ─────────────────────── */
const ChevronDown = ({ className = "" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

const GalleryIcon = () => (
  <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
      d="M3 7a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7zm3 8l3-3 2 2 3-4 4 5" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const MailIcon = () => (
  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

/* ── data ─────────────────────────────────────────────────────────── */
const navItems = [
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Overview & Vision", href: "/about#overview", icon: "🏛️" },
      { label: "Leadership", href: "/about#leadership", icon: "👤" },
      { label: "History", href: "/about#history", icon: "📜" },
      { label: "Affiliations", href: "/about#affiliations", icon: "🤝" },
    ],
  },
  {
    label: "Academics",
    href: "/programs",
    children: [
      { label: "UG Programs", href: "/programs#ug", icon: "🎓" },
      { label: "Curriculum & Syllabus", href: "/programs#curriculum", icon: "📚" },
      { label: "Academic Calendar", href: "/programs#calendar", icon: "📅" },
      { label: "Faculty", href: "/programs#faculty", icon: "👨‍🏫" },
    ],
  },
  {
    label: "Admissions",
    href: "/admissions",
    children: [
      { label: "How to Apply", href: "/admissions#apply", icon: "📝" },
      { label: "Eligibility", href: "/admissions#eligibility", icon: "✅" },
      { label: "Fee Structure", href: "/admissions#fees", icon: "💰" },
      { label: "Scholarships", href: "/admissions#scholarships", icon: "🏅" },
    ],
  },
  {
    label: "Research",
    href: "/research",
    children: [
      { label: "Research Centers", href: "/research#centers", icon: "🔬" },
      { label: "Ongoing Projects", href: "/research#projects", icon: "🧪" },
      { label: "Industry Collaborations", href: "/research#industry", icon: "🏭" },
      { label: "Funded Research", href: "/research#funded", icon: "💡" },
    ],
  },
  {
    label: "Campus Life",
    href: "/campus-life",
    children: [
      { label: "Student Activities", href: "/campus-life#activities", icon: "🎭" },
      { label: "Clubs & Sports", href: "/campus-life#clubs", icon: "⚽" },
      { label: "Accommodation", href: "/campus-life#accommodation", icon: "🏠" },
      { label: "Dining & Safety", href: "/campus-life#dining", icon: "🍽️" },
    ],
  },
  {
    label: "Placements",
    href: "/placements",
    children: [
      { label: "Career Guidance", href: "/placements#career", icon: "🧭" },
      { label: "Internships", href: "/placements#internships", icon: "💼" },
      { label: "Statistics", href: "/placements#stats", icon: "📊" },
      { label: "Alumni Stories", href: "/placements#alumni", icon: "🌟" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

/* ── component ────────────────────────────────────────────────────── */
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* scroll listener */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  /* dropdown open/close with a small delay to prevent flickering */
  const openDropdown = useCallback((label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveDropdown(label);
  }, []);

  const closeDropdown = useCallback(() => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 120);
  }, []);

  return (
    <>
      {/* ─── Top announcement bar ─── */}
      <div className="navbar-topbar bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-900 text-white text-xs py-3 px-4 hidden md:block relative overflow-hidden border-b border-blue-800/50">
        {/* subtle animated shimmer */}
        <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_30%,rgba(255,255,255,0.05)_45%,transparent_60%)] animate-[shimmer_3s_ease-in-out_infinite]" />
        <div className="max-w-7xl mx-auto flex justify-between items-center relative z-10">
          <div className="flex gap-6 items-center">
            <span className="flex items-center gap-1.5 opacity-90 hover:opacity-100 transition-opacity">
              <PhoneIcon /> +91-8562-223344
            </span>
            <span className="flex items-center gap-1.5 opacity-90 hover:opacity-100 transition-opacity">
              <MailIcon /> admissions@bitsadoni.ac.in
            </span>
          </div>
          <div className="flex gap-4 items-center">
            <span className="relative flex items-center gap-1.5 font-semibold text-cyan-300">
              <span className="absolute -left-2 h-1.5 w-1.5 rounded-full bg-cyan-400 animate-ping" />
              <span className="relative ml-1">🎓 Admissions Open 2026</span>
            </span>
            <span className="text-blue-400/50">|</span>
            <Link href="/admissions"
              className="text-cyan-300 hover:text-cyan-200 transition-colors font-medium tracking-wide">
              Apply Now →
            </Link>
          </div>
        </div>
      </div>

      {/* ─── Main navbar ─── */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] border-b border-blue-100/50"
            : "bg-gradient-to-r  via-blue-50 shadow-md border-b border-blue-100/60"
        }`}
      >
        {/* gradient accent line at the very top */}
        <div className="h-[3px] bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600" />

        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-10 md:h-20">
            {/* ── Logo ── */}
            <Link href="/" className="flex items-center gap-2.5 group relative shrink-0">
              <div className={`relative overflow-hidden rounded-xl border-0 transition-all duration-300 shadow-lg group-hover:shadow-xl ${
                isScrolled
                  ? "border-blue-200 group-hover:border-blue-400"
                  : "border-blue-300/60 group-hover:border-blue-400"
              }`}>
                <Image
                  src="/LOGO.png"
                  alt="BITS Adoni Logo"
                  width={80}
                  height={80}
                  className="w-16 h-16 md:w-32 md:h-20 object-contain transition-transform duration-500 group-hover:scale-110"
                  priority
                />
              </div>
            </Link>

            {/* ── Desktop nav ── */}
            <div className="hidden lg:flex items-center gap-0.5">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => openDropdown(item.label)}
                  onMouseLeave={closeDropdown}
                >
                  <Link
                    href={item.href}
                    className={`relative px-4 py-2 rounded-lg flex items-center gap-1 text-sm font-semibold
                      transition-all duration-200 group/link ${
                      isScrolled
                        ? "text-gray-700 hover:text-blue-700 hover:bg-blue-50"
                        : "text-gray-700 hover:text-blue-700 hover:bg-blue-100/50"
                    }`}
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown
                        className={`w-3.5 h-3.5 mt-0.5 transition-transform duration-300
                          ${activeDropdown === item.label ? "rotate-180 text-blue-600" : "text-gray-400 group-hover/link:text-blue-600"}`}
                      />
                    )}
                    {/* animated underline */}
                    <span className="absolute bottom-0.5 left-3.5 right-3.5 h-[3px] rounded-full bg-gradient-to-r from-blue-500 to-cyan-500
                      origin-left scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300" />
                  </Link>

                  {/* ── desktop dropdown ── */}
                  {item.children && (
                      <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-200
                        ${activeDropdown === item.label
                          ? "opacity-100 translate-y-0 pointer-events-auto"
                          : "opacity-0 -translate-y-2 pointer-events-none"}`}
                      >
                        <div className="relative bg-white backdrop-blur-xl rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.2)]
                          border border-blue-200 py-2 min-w-[240px] overflow-hidden">
                          {/* top accent */}
                          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-500 to-cyan-500" />
                        {item.children.map((child, idx) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700
                              hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50
                              hover:text-blue-700 transition-all duration-200 group/item"
                            style={{ animationDelay: `${idx * 40}ms` }}
                          >
                            <span className="text-base group-hover/item:scale-125 transition-transform duration-200">
                              {child.icon}
                            </span>
                            <span className="font-semibold">{child.label}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* CTA: Apply Now */}
              <Link href="/admissions"
                className={`ml-4 relative inline-flex items-center gap-2 text-sm font-bold text-white
                  px-6 py-2.5 rounded-lg shadow-lg hover:shadow-xl
                  transition-all duration-300 group/cta overflow-hidden ${
                  isScrolled
                    ? "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-blue-600/30 hover:shadow-blue-600/40"
                    : "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 shadow-blue-500/40 hover:shadow-blue-600/50"
                }`}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0
                  translate-x-[-100%] group-hover/cta:translate-x-[100%] transition-transform duration-700" />
                <span className="relative">Apply Now</span>
                <svg className="w-4 h-4 relative transition-transform duration-300 group-hover/cta:translate-x-0.5"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>

              {/* Gallery icon button */}
              <Link
                href="/gallery"
                className={`ml-3 inline-flex items-center justify-center w-11 h-11 rounded-lg
                  border-2 transition-all duration-200 group/gallery ${
                  isScrolled
                    ? "border-blue-200 text-blue-600 hover:bg-blue-50 hover:border-blue-400 hover:text-blue-700"
                    : "border-blue-300/60 text-blue-600 hover:bg-blue-100/50 hover:border-blue-400 hover:text-blue-700"
                }`}
                aria-label="Open Gallery"
                title="Gallery"
              >
                <GalleryIcon />
              </Link>
            </div>

            {/* ── Animated hamburger ── */}
            <button
              className={`lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg
                transition-all duration-200 ${
                isScrolled
                  ? "text-gray-700 hover:bg-blue-100 hover:text-blue-700"
                  : "text-gray-700 hover:bg-blue-50"
              }`}
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <div className="w-5 h-4 relative flex flex-col justify-between">
                <span className={`block h-[2px] w-full bg-current rounded-full transition-all duration-300 origin-center
                  ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
                <span className={`block h-[2px] w-full bg-current rounded-full transition-all duration-200
                  ${mobileOpen ? "opacity-0 scale-x-0" : ""}`} />
                <span className={`block h-[2px] w-full bg-current rounded-full transition-all duration-300 origin-center
                  ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* ─── Mobile menu backdrop ─── */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* ─── Mobile menu panel ─── */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 pointer-events-none ${
          mobileOpen ? "pointer-events-auto" : ""
        }`}
      >
        <div
          className={`absolute top-[80px] left-4 right-4 transition-all duration-500 transform ${
            mobileOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-4 opacity-0 pointer-events-none"
          }`}
        >
          <div className="rounded-2xl bg-white backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.2)]
            border border-blue-200 overflow-hidden">
            {/* top accent */}
            <div className="h-[3px] bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-600" />

            {navItems.map((item, idx) => (
              <div key={idx} className="border-b border-blue-100/50 last:border-b-0">
                <button
                  className="w-full px-4 py-3 flex items-center justify-between text-sm font-semibold
                    text-gray-700 hover:text-blue-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50
                    transition-all duration-200"
                  onClick={() => {
                    if (item.children) {
                      setMobileExpanded((v: string | null) => (v === item.label ? null : item.label));
                    } else {
                      setMobileOpen(false);
                    }
                  }}
                >
                  <span>{item.label}</span>
                  {item.children && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        mobileExpanded === item.label ? "rotate-180 text-blue-600" : ""
                      }`}
                    />
                  )}
                </button>

                {/* mobile dropdown */}
                {item.children && mobileExpanded === item.label && (
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-t border-blue-100/50">
                    {item.children.map((child, cidx) => (
                      <Link
                        key={cidx}
                        href={child.href}
                        className="flex items-center gap-3 px-6 py-3 text-sm text-gray-700
                          hover:text-blue-700 hover:bg-white/70 transition-all duration-200 border-l-2 border-transparent hover:border-blue-500"
                        onClick={() => setMobileOpen(false)}
                      >
                        <span className="text-base">{child.icon}</span>
                        <span className="font-semibold">{child.label}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* mobile CTA button */}
            <Link
              href="/admissions"
              className="flex items-center justify-center gap-2 w-full mx-4 mt-4 mb-4 px-4 py-3 rounded-lg
                bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700
                text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => setMobileOpen(false)}
            >
              Apply Now
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}