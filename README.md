# BITS Adoni — Official Website

Modern, production-grade website for Bharat Institute of Technology & Science, Adoni built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **SEO**: Next.js Metadata API

## 📁 Project Structure

```
bits-adoni/
├── app/
│   ├── layout.tsx          # Root layout with Navbar & Footer
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles & Tailwind
│   ├── not-found.tsx       # 404 page
│   ├── about/page.tsx      # About, Vision, Leadership, History
│   ├── programs/page.tsx   # UG programs, Curriculum, Faculty
│   ├── admissions/page.tsx # How to Apply, Eligibility, Fees, Scholarships
│   ├── research/page.tsx   # Research Centers, Projects, Collaborations
│   ├── campus-life/page.tsx # Activities, Clubs, Hostel, Dining, Safety
│   ├── placements/page.tsx # Career, Internships, Stats, Alumni
│   └── contact/page.tsx    # Contact form, Map, Social links
├── components/
│   ├── Navbar.tsx          # Responsive nav with dropdowns
│   ├── Footer.tsx          # Full footer with accreditations
│   └── home/
│       ├── Hero.tsx        # Animated hero slider with ticker
│       ├── QuickLinks.tsx  # 8 quick-access links
│       ├── Stats.tsx       # Animated counter stats
│       ├── Programs.tsx    # Program cards
│       ├── WhyBITS.tsx     # Features + Vision/Mission
│       ├── NewsAnnouncements.tsx
│       ├── PlacementsHighlight.tsx
│       ├── Testimonials.tsx
│       ├── CampusGallery.tsx
│       ├── Events.tsx
│       └── Accreditation.tsx
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
└── package.json
```

## 🏃‍♂️ Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm start
```

## 🌟 Features

- ✅ **Fully Responsive** – Mobile-first design, works on all screen sizes
- ✅ **SEO Optimized** – Metadata, OG tags, semantic HTML throughout
- ✅ **Fast Performance** – Next.js App Router, optimized images
- ✅ **Accessible** – Semantic HTML, ARIA labels, keyboard navigation
- ✅ **No External UI Libraries** – Pure Tailwind CSS
- ✅ **Animated** – Hero slider, counter animations, hover effects
- ✅ **Cross-browser Compatible** – Tested on Chrome, Firefox, Safari, Edge

## 📄 Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Full homepage with all sections |
| About | `/about` | Overview, Vision, Leadership, History, Affiliations |
| Programs | `/programs` | UG programs, Curriculum, Calendar, Faculty |
| Admissions | `/admissions` | Apply process, Eligibility, Fees, Scholarships |
| Research | `/research` | Centers, Projects, Collaborations, Funded Research |
| Campus Life | `/campus-life` | Activities, Clubs, Sports, Hostel, Dining, Safety |
| Placements | `/placements` | Career, Internships, Statistics, Alumni Stories |
| Contact | `/contact` | Contact form, Map, Department contacts, Social |

## 🎨 Design

- **Color Palette**: Deep Navy (#0d1b4b), Burnt Orange (#c2410c), Gold (#c9962a)
- **Typography**: Georgia/Palatino for headings (academic feel), System UI for body
- **Style**: Professional, trustworthy, academic with modern UI elements
- **Animations**: CSS transitions, counter animations, slide shows

## 📞 Contact

BITS Adoni, NH-44, Adoni - 518301, Kurnool District, Andhra Pradesh
📞 +91-8562-223344 | ✉ info@bitsadoni.ac.in
