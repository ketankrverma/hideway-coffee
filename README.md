# Hideaway Coffee House · Soho, London

A production-quality website for **Hideaway Coffee House**, an independent specialty coffee sanctuary located at **7 Farrier's Passage, Soho, London W1D 7DP**.

Designed with London specialty coffee culture, Scandinavian minimalism, and modern editorial agency aesthetics.

---

## ☕ Key Features

- **Editorial Brand Experience**: Scandinavian timber, warm espresso tones, tactile ceramics, and British storytelling.
- **Real-Time London Barometer**: Automatically calculates London (GMT/BST) open/closed status with live timezone clocks and London W1D hallmark ribbons.
- **Specialty Coffee & Bakes Menu**: Interactive category pills, instant live search, and dietary filtering (Vegan, Gluten-Free, Oat M*lk).
- **Masonry Gallery & Lightbox**: High-resolution specialty coffee photography with keyboard-accessible full-screen Lightbox modal (`Esc`, `←`, `→`).
- **Soho Wayfinding & Transit**: Step-by-step pedestrian walking guide from **Tottenham Court Road (Elizabeth Line)**, **Leicester Square**, and **Piccadilly Circus** with interactive Google Maps.
- **Client-Validated Enquiries**: Interactive enquiry desk for general questions, private courtyard space hire, and roaster collaborations with accessible feedback toasts.
- **Production-Grade SEO**: Semantic HTML5, Schema.org `CafeOrCoffeeShop` JSON-LD structured data with exact coordinates, native `robots.txt`, and dynamic `sitemap.xml`.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Turbopack, Partial Prefetching)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict mode, 100% type safety)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with custom design tokens
- **Icons**: [Lucide React](https://lucide.dev/) + Custom SVG hallmarks
- **Motion**: [Framer Motion](https://www.framer.com/motion/)
- **Deployment Target**: [Vercel](https://vercel.com/)

---

## 📁 Project Structure

```text
├── public/                 # Static public assets
├── src/
│   ├── app/                # Next.js App Router pages
│   │   ├── layout.tsx      # Root layout, Google Fonts, JSON-LD Schema
│   │   ├── page.tsx        # Home page
│   │   ├── globals.css     # Tailwind v4 theme tokens & typography
│   │   ├── story/          # Our Story editorial page
│   │   ├── menu/           # Coffee & Menu page
│   │   ├── gallery/        # Gallery page with masonry layout
│   │   ├── visit/          # Visit Us, Google Maps & Tube directions
│   │   ├── contact/        # Enquiries & Studio hire
│   │   ├── not-found.tsx   # Custom 404 error page
│   │   ├── robots.ts       # Dynamic robots.txt
│   │   ├── sitemap.ts      # Dynamic sitemap.xml
│   │   └── icon.svg        # Custom brand SVG favicon
│   ├── components/         # Reusable React components
│   │   ├── Navbar.tsx      # Sticky navbar with mobile slide-in menu
│   │   ├── Footer.tsx      # Editorial footer with London hours
│   │   ├── LightboxModal.tsx # Accessible photo lightbox
│   │   ├── OpeningStatusBadge.tsx # Live London time & shop status
│   │   ├── home/           # Homepage hero, story, coffee & map sections
│   │   ├── menu/           # MenuClient with category filters & search
│   │   ├── gallery/        # GalleryClient with category filters
│   │   ├── contact/        # ContactForm with validation
│   │   └── icons/          # Custom SVG icons (Instagram, etc.)
│   └── data/               # Structured data layers
│       ├── coffeeData.ts   # Menu items, single-origin roasts, tasting notes
│       ├── galleryData.ts  # Curated photography collection & camera meta
│       └── hoursData.ts    # Verified London hours & transit directions
├── .env.example            # Environment variables template
├── .gitignore              # Clean GitHub & Vercel ignore rules
├── vercel.json             # Vercel deployment configuration
├── next.config.ts          # Image optimization & Turbopack config
└── tsconfig.json           # TypeScript configuration
```

---

## 🚀 Getting Started Locally

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Check code quality**:
   ```bash
   npm run lint
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Start production server**:
   ```bash
   npm run start
   ```

---

## 🌐 Deploying to Vercel

1. Push your code to a new repository on **GitHub**.
2. Go to [vercel.com](https://vercel.com) and log in.
3. Click **"Add New..."** -> **"Project"**.
4. Import your **Hideaway Coffee House** GitHub repository.
5. Vercel automatically detects **Next.js** framework settings:
   - **Build Command**: `next build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install`
6. Click **Deploy**. Your site will be live on a fast global edge network in seconds!

---

## 🛡️ Security & Privacy

- No API keys, database secrets, or private credentials are hardcoded or tracked in git.
- Environment variables template is provided in `.env.example`.
- `.gitignore` prevents `.env`, `.env*.local`, `.next`, `node_modules`, and sensitive key files from being committed.

---

© 2026 Hideaway Coffee House · 7 Farrier's Passage, Soho, London W1D 7DP. All rights reserved.
