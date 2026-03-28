# TCGG Website Migration Brief — Framer → Static HTML/CSS/JS

## OBJECTIVE
Rebuild https://thecrazygraphicguy.com as a static HTML/CSS/JS website, replicating the current Framer site as closely as possible. The site will be hosted on Cloudflare Pages.

---

## SITE MAP (14 pages total)

```
/                           → Homepage (product grid)
/about                      → Who is TCGG
/contact                    → Contact & Help (content not captured — owner will provide)
/wall-of-love               → Wall of Creators (content not captured — owner will provide)
/products/cta-001           → Product page CTA #001
/products/cta-002           → Product page CTA #002
/products/cta-003           → Product page CTA #003
/products/cta-004           → Product page CTA #004
/products/cta-005           → Product page CTA #005
/products/cta-006           → Product page CTA #006
/products/cta-007           → Product page CTA #007
/products/cta-008           → Product page CTA #008
/products/cta-009           → Product page CTA #009
/terms-of-service           → Terms of Service
/refund-policy              → Refund Policy
```

**NOTE:** The `/contact` and `/wall-of-love` pages could not be scraped. Owner will provide content/screenshots for these.

---

## IMAGE DIRECTORY — WHAT TO FIND ON YOUR COMPUTER

All images are currently hosted on `framerusercontent.com`. Below is a descriptive name for each image so the owner can locate them locally. Place all images in an `/images/` folder with the suggested filenames.

### GLOBAL (used on every page)
```
images/logo-icon.png              → Robot head icon (square, ~224x224)
images/logo-text.svg              → "THE CRAZY GRAPHIC GUY" text wordmark (SVG)
images/footer-character.png       → Robot character illustration for footer (~541x539)
images/payment-methods.png        → Payment method icons strip (Visa, MC, etc. ~462x61)
images/stripe-badge.png           → "Powered by Stripe" security badge (~256x107)
```

### EDITOR LOGOS (used on homepage + all product pages)
```
images/logo-capcut.png            → CapCut logo (~66x64)
images/logo-davinci.png           → DaVinci Resolve logo (~64x64)
images/logo-premiere.png          → Premiere Pro logo (~66x64)
images/logo-filmora.png           → Filmora logo (~64x64)
images/logo-finalcut.png          → Final Cut Pro logo (~64x64)
```

### HOMEPAGE — Product Thumbnails
```
images/thumb-cta-001.jpg          → CTA 001 thumbnail (white/red bold style)
images/thumb-cta-002.jpg          → CTA 002 thumbnail (colorful/cheerful style)
images/thumb-cta-003.jpg          → CTA 003 thumbnail (blue/silver style)
images/thumb-cta-004.jpg          → CTA 004 thumbnail (gold/premium style)
images/thumb-cta-005.jpg          → CTA 005 thumbnail (heavy/industrial style)
images/thumb-cta-006.jpg          → CTA 006 thumbnail (fresh color combo)
images/thumb-cta-007.jpg          → CTA 007 thumbnail (fun/fresh style)
images/thumb-cta-008.jpg          → CTA 008 thumbnail (layered/detailed style)
images/thumb-cta-009.jpg          → CTA 009 thumbnail (weird/abstract style)
```

### ABOUT PAGE
```
images/about-profile.png          → TCGG character full body profile (~256x510)
images/about-broadcasting.jpg     → Work experience: Broadcasting/TV work
images/about-creators.jpg         → Work experience: Creators & esports
images/about-vfx.jpg              → Work experience: VFX & films
```

### PRODUCT PAGES — Hero Images (large product renders, ~805x840 each)
```
images/hero-cta-001.png           → CTA 001 product hero image
images/hero-cta-002.png           → CTA 002 product hero image
images/hero-cta-003.png           → CTA 003 product hero image
images/hero-cta-004.png           → CTA 004 product hero image
images/hero-cta-005.png           → CTA 005 product hero image
images/hero-cta-006.png           → CTA 006 product hero image
images/hero-cta-007.png           → CTA 007 product hero image
images/hero-cta-008.png           → CTA 008 product hero image
images/hero-cta-009.png           → CTA 009 product hero image
```

### PRODUCT PAGES — QR Codes (for Stripe payment, ~792x792 each)
```
images/qr-cta-001.png             → CTA 001 Stripe QR code
images/qr-cta-002.png             → CTA 002 Stripe QR code
images/qr-cta-003.png             → CTA 003 Stripe QR code
images/qr-cta-004.png             → CTA 004 Stripe QR code
images/qr-cta-005.png             → CTA 005 Stripe QR code
images/qr-cta-006.png             → CTA 006 Stripe QR code
images/qr-cta-007.png             → CTA 007 Stripe QR code
images/qr-cta-008.png             → CTA 008 Stripe QR code
images/qr-cta-009.png             → CTA 009 Stripe QR code
```

**Total unique images: ~40 files**

---

## STRIPE PAYMENT LINKS (do not modify these)

| Product | Stripe Link |
|---------|------------|
| CTA 001 | https://buy.stripe.com/14AdR98P60Txfwf1Q3cjS01 |
| CTA 002 | https://buy.stripe.com/8x200j0iAgSv3Nx1Q3cjS02 |
| CTA 003 | https://buy.stripe.com/5kQ4gz9Ta1XB6ZJdyLcjS03 |
| CTA 004 | https://buy.stripe.com/aFa9AT6GYfOresbamzcjS04 |
| CTA 005 | https://buy.stripe.com/4gM28r9Ta45J2Jt9ivcjS05 |
| CTA 006 | https://buy.stripe.com/bJe28r7L28lZ83NcuHcjS06 |
| CTA 007 | https://buy.stripe.com/fZu3cve9q1XB3NxcuHcjS07 |
| CTA 008 | https://buy.stripe.com/dRmbJ1aXeeKn1FpfGTcjS08 |
| CTA 009 | https://buy.stripe.com/dRm4gz3uM6dR5VFbqDcjS09 |

---

## PAGE-BY-PAGE CONTENT & STRUCTURE

### 1. HOMEPAGE (/)

**Title tag:** YouTube Animations & CTA Graphics — The Crazy Graphic Guy 🤖

**Navigation (shared across all pages):**
- Logo (icon + text wordmark)
- Links: YouTube Assets (/) | Who is TCGG (/about) | Contact & Help (/contact) | Wall of Creators (/wall-of-love) | Find Your Channel Score (external: https://tools.thecrazygraphicguy.com/channel-score/)
- Nav has a dropdown mega-menu with categories: Templates, Mockups, Courses, Fonts, View All Products (all link back to /)

**Hero Section:**
- Headline: "make your YouTube channel look like the big ones"
- Sub: "drag & drop animations for" [row of 5 editor logos] "— no After Effects needed"

**Product Grid (9 cards):**
Each card has: thumbnail image, price badge "$29", CTA number label, description text, "View Product" link. (NOTE: "View Demo" buttons exist in Framer but are hidden/inactive — do NOT include them in the rebuild.)

| # | Description |
|---|-------------|
| 001 | "bold. loud. impossible to scroll past. your audience will actually hit subscribe." |
| 002 | "good vibes only. perfect for lifestyle, vlogs, and feel-good channels. works in shorts & long-form." |
| 003 | "clean. universal. fits any niche — tech, finance, education, you name it." |
| 004 | "gold hits different. made for channels that want to look premium without the premium budget." |
| 005 | "heavy-duty energy. for creators who want their CTA to hit hard and stay in the viewer's memory." |
| 006 | "fresh color combo that pops on any video background. your audience won't ignore this one." |
| 007 | "fun, fresh, and zero cringe. ideal for creators who don't take themselves too seriously." |
| 008 | "layered and detailed. when you want your CTA to feel like it belongs on a 1M sub channel." |
| 009 | "weird in the best way. the kind of animation that makes viewers stop scrolling and actually pay attention." |

**Footer (shared across all pages):**
- Robot character image
- Desktop footer text: "Your channel deserves to look fire 🔥 • making YouTube assets that should've existed by now • built for cool creators who edit their own videos • you're not small. you're early"
- Mobile footer text: "Not a huge brand. Not a corporation. Just making motion assets that should exist. • Youtube animations to level-up your edits • Built for cool editors."
- Tagline: "drop it in → look pro → grow faster"
- Copyright: "Copyright © 2026 The Crazy Graphic Guy • Made by humans for humans • All rights reserved."
- Links: Terms of Service | Refund Policy

---

### 2. ABOUT PAGE (/about)

**Title tag:** The Crazy Graphic Guy 😎

**Profile section:**
- Character image (full body)
- Headline: "Nobody knows who I am, but in a remote corner of the internet they say that:"
- Sub: "I'm a Motion Grapher, 3D Design & Photographer. With 20+ years of experience as freelancer. Giving my services only to cool people."

**Tabs section (3 tabs):**
- Tab 1: "Work Experience" (default)
- Tab 2: "My Current Services"
- Tab 3: "What creators say 🙌"

**Work Experience tab content (3 cards):**
1. "Motion graphics & visual brand developing for Broadcasting" — "5+ years working with television networks in the development of TV shows, both live and recorded formats." + image
2. "Visual graphic development for content creators & esports" — "Over 5 years working hand in hand with digital creators to develop animated resources for their content." + image
3. "VFX & Post for films and TVspots" — "8+ years providing services to agencies and studios for the creation of effects in film and television ads." + image

**NOTE:** Content for "My Current Services" and "What creators say" tabs was not visible in the scrape. Owner should provide.

---

### 3. PRODUCT PAGES (/products/cta-001 through /products/cta-009)

**TWO TEMPLATES EXIST:**

**Template A (CTA 001 only — older layout):**
- Uses spec-list format with technical details
- Specs shown: Assets count, Files count, Duration, In & Out animation, File Resolution, Total download
- Price shown as $14 (NOTE: confirmed by owner the correct price is **$29** — update this page to match all others)
- Tab system: Asset Overview | Screenshots | Changelog

**Template B (CTA 002-009 — newer layout):**
- Tags at top: "YouTube Shorts" / "Long-form videos" / "Color Tuning"
- "HOW TO USE" 3-step section (①②③)
- Editor logos row
- "what's inside:" bulleted list
- Price: $29 with tagline "— one-time payment. use it forever. on every video."
- Custom color upsell text
- Tab system: Asset Overview | Screenshots | Changelog

**Variable data per product (Template B):**

| # | Assets | Bonus PNGs | Download Size | Stripe Link | Tags |
|---|--------|-----------|---------------|-------------|------|
| 001 | 7 designs, 14 MOV + 14 PNG | 14 | ~876MB | (see table above) | (old template) |
| 002 | 7 animated, MOV+WEBM | 13 PNG | ~842MB | (see table above) | Shorts, Long-form, Color Tuning |
| 003 | 7 animated, MOV+WEBM | 14 PNG | ~1.51GB | (see table above) | Shorts, Long-form, Color Tuning |
| 004 | 7 animated, MOV+WEBM | 14 PNG | ~1.70GB | (see table above) | Shorts, Long-form, Color Tuning |
| 005 | 6 animated, MOV+WEBM | 12 PNG | ~523MB | (see table above) | Shorts, Long-form, Color Tuning |
| 006 | 6 animated, MOV+WEBM | 12 PNG | ~851MB | (see table above) | Shorts, Long-form, Color Tuning |
| 007 | 6 animated, MOV+WEBM | 12 PNG | ~1.35GB | (see table above) | Shorts, Long-form, Color Tuning |
| 008 | 6 animated, MOV+WEBM | 12 PNG | ~1.06GB | (see table above) | Shorts, Long-form, Color Tuning |
| 009 | 6 animated, MOV+WEBM | 12 PNG | ~1.48GB | (see table above) | Long-form, Color Tuning (NO Shorts tag) |

**"More styles" section at bottom:** Each product page shows 3-4 other products as recommendations (excluding itself). Uses the same card component as homepage.

**Sidebar (sticky on desktop):**
- Product hero image
- Product name
- Purchase button (links to Stripe)
- QR code image with "Scan to Pay"
- Price
- Stripe security badge

---

### 4. TERMS OF SERVICE (/terms-of-service)

Legal page with sections: Who I am, What I sell, Digital delivery, License and usage, Custom services, Payments and chargebacks, No guarantees, Support, Intellectual property, Limitation of liability, Termination, Governing law, Copyright complaints.

Key legal info:
- Business: Luis Gerardo Sarmiento Villalba
- Location: Katerini 60132, Greece
- AFM: 164332601
- Email: thecrazygraphicguy@gmail.com

(Full text captured — see source data)

---

### 5. REFUND POLICY (/refund-policy)

Sections: Digital products (all sales final), Custom services (100% refund before work starts, no refund after), How to request support.

(Full text captured — see source data)

---

## DESIGN SPECIFICATIONS

### Color Scheme
- Background: Very dark / near-black (#0a0a0a or similar)
- Primary accent: Neon cyan (#00e5ff)
- Text: White (#ffffff) and light gray
- Cards: Dark gray with subtle borders
- Price badges: Likely colored overlays on thumbnails

### Typography
- **Headlines:** TASA Orbiter (confirmed by owner) — load via @font-face from `/fonts/`
- **Body copy:** Google Sans Flex — load via @font-face from `/fonts/`
- Owner will provide both font files (.woff2 / .woff / .ttf)

### Layout Characteristics
- Dark theme throughout
- Product cards in responsive grid (3 columns desktop → 2 tablet → 1 mobile)
- Navigation with logo left, links center/right
- Mega-menu dropdown on hover
- Sticky sidebar on product pages (desktop)
- Footer with robot character illustration

### Interactions to Replicate
- Basic hover effects on product cards (subtle scale/shadow)
- Basic hover on nav links
- Tab switching on product pages (Overview/Screenshots/Changelog)
- Navigation mega-menu dropdown (show/hide on hover)
- Smooth scroll behavior
- Responsive breakpoints (desktop/tablet/mobile)
- No scroll animations, no complex transitions — keep it simple and clean

---

## TECHNICAL REQUIREMENTS

### Repository & Deployment
- **GitHub repo:** `website-main`
- **Hosting:** Cloudflare Pages connected to this repo (auto-deploy on push)
- **Domain:** thecrazygraphicguy.com
- **Workflow:** Work directly in the repo. Every push triggers a Cloudflare Pages build so changes can be reviewed live immediately.
- **Branch:** Work on `main` branch (or create a `dev` branch if you prefer — ask owner).

### File Structure
```
/
├── index.html
├── about.html (or /about/index.html)
├── contact.html
├── wall-of-love.html
├── terms-of-service.html
├── refund-policy.html
├── products/
│   ├── cta-001.html
│   ├── cta-002.html
│   ├── cta-003.html
│   ├── cta-004.html
│   ├── cta-005.html
│   ├── cta-006.html
│   ├── cta-007.html
│   ├── cta-008.html
│   └── cta-009.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── fonts/
│   └── (TASA Orbiter + Google Sans Flex font files)
└── images/
    ├── (all images listed above)
```

### SEO
- Proper meta tags (title, description, og:image)
- Semantic HTML5 (header, nav, main, section, footer)
- Alt text on all images

### External Links (do not break)
- Stripe payment links (9 products)
- tools.thecrazygraphicguy.com (Channel Score quiz — separate subdomain, not part of migration)
- Instagram @thecrazygraphicguy
- Email thecrazygraphicguy@gmail.com

---

## OWNER ACTION ITEMS BEFORE STARTING

1. ☐ Provide screenshots of the Contact page (/contact)
2. ☐ Provide screenshots of the Wall of Creators page (/wall-of-love)
3. ☐ Provide content for the "My Current Services" and "What creators say" tabs on the About page
4. ☐ Locate and organize all images per the directory list above
5. ☐ Take full-page screenshots of every page (desktop + mobile) for visual reference
6. ☐ Provide any Screenshot tabs or Changelog tab content from product pages if it exists
7. ☐ Provide TASA Orbiter + Google Sans Flex font files (.woff2 / .woff / .ttf) and place in `/fonts/` directory
8. ☐ Confirm the GitHub repo `website-main` is connected to Cloudflare Pages

---

## NOTES FOR CLAUDE CODE

- **Work directly in the `website-main` GitHub repo.** The repo is connected to Cloudflare Pages — every push auto-deploys so the owner can review live.
- Build page by page. Start with shared components (nav, footer, CSS variables) → homepage → product template → individual product pages → about → legal pages → contact/wall-of-love.
- Commit and push after completing each page so the owner can review incrementally.
- The site is a static e-commerce storefront — no cart, no backend. All purchases go through external Stripe links.
- **ALL prices are $29.** CTA 001's old page showed $14 — this is outdated. Use $29 everywhere.
- CTA 001 uses an OLDER product page template. CTA 002-009 all use the SAME newer template. Build the newer template as the reusable one and make CTA 001 match the new template style as well (update it to the new format).
- The nav mega-menu currently has placeholder categories (Templates, Mockups, Courses, Fonts) that all link back to the homepage. Keep this structure.
- Product pages have a tab component (Asset Overview / Screenshots / Changelog). Currently only "Asset Overview" has visible content.
- Each product page has a "more styles" section at the bottom showing other products — this acts as cross-sell navigation.
- The Framer site has different footer text for desktop vs mobile. Replicate this with CSS show/hide.
- Images should be optimized for web (WebP with fallbacks if desired).
- The site should score well on Lighthouse (performance, accessibility, SEO).
