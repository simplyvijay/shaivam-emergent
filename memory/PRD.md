# Shaivam Philosophy Website — PRD

## Project Overview
A comprehensive, multi-page static website dedicated to Shaivam philosophy — a spiritual and philosophical framework emphasising freedom, empathy, progress, and the integration of dual realities. Built using **pure HTML, CSS, JS and Bootstrap 5**.

---

## Architecture

- **Type**: Static HTML website (no backend, no database)
- **Stack**: HTML5 + CSS3 + JavaScript (ES6) + Bootstrap 5 CDN
- **Fonts**: Cormorant Garamond (headers) + Lato (body) — Google Fonts + Samarkan (logo) — local TTF
- **Icons**: Font Awesome 6.5 CDN
- **Location**: `/app/frontend/public/shaivam/`
- **Access URL**: `/shaivam/` (root `/` redirects via React App.js)
- **Domain**: `https://shaivam.info`

### Folder Structure (Feb 2026 Reorganization)
```
/shaivam/
├── index.html              # Home page (root, unchanged)
├── style.css               # Shared CSS
├── script.js               # Shared JS (updated active nav logic)
├── sitemap.xml             # Updated with clean URLs
├── robots.txt
├── images/                 # Shared images (logo, backgrounds, shared content)
├── fonts/                  # Samarkan font
├── about/index.html        # About page
├── temples/
│   ├── index.html          # Temples page
│   └── images/             # Temple-specific images (5 images)
├── videos/index.html
├── blog/
│   ├── index.html          # Blog listing
│   ├── dual-monism/index.html     # was post1.html
│   ├── ganesha-gift/index.html    # was post2.html
│   └── navagraham/index.html      # was post3.html
│   └── ruparupam/index.html       # NEW — Ruparupam (Apr 2026)
├── contact/index.html
└── privacy/index.html
```

**URL Strategy:** Relative paths throughout (`../about/`, `../../images/logo.png`). Canonical/OG URLs use clean absolute format (`https://shaivam.info/about`).

---

## Color Palette
- Primary: `#D35400` (Deep Saffron/Orange)
- Secondary: `#FAF9F6` (Ivory/Cream)
- Accent: `#1A237E` (Deep Indigo)
- Neutral Dark: `#212121`
- Text Main: `#424242`
- Text Muted: `#757575`

---

## Pages Implemented (as of Feb 2026)

| File | Title | Status |
|------|-------|--------|
| `index.html` | Home — Hero, Intro, 4 Concept Cards, Practice, Rotating Wisdom Quotes, Blog Preview, Newsletter | ✅ Done |
| `about.html` | About — What is Shaivam, Dual Monism, Two Domains, Three Paths, Key Concepts, Deity Archetypes, Navagraham, **Goal Achievement Cycle** | ✅ Done |
| `temples.html` | Temples — 7 sacred shrines with philosophical content (Visweswaram, Jambukeshwaram, Brihadeshwaram, Arunachaleshwaram, Sudareshwaram, Kapaleeshwaram, Viswesa) | ✅ Done (Feb 2026) |
| `videos.html` | Videos — 3 Bootstrap tab categories, 9 real YouTube embeds | ✅ Done |
| `blog.html` | Blog — Featured post, 6 blog cards, categories sidebar, newsletter | ✅ Done |
| `post1.html` | Blog: Understanding Dual Monism (~1,200 words) | ✅ Done |
| `post2.html` | Blog: Ganesha's Gift (~1,100 words) | ✅ Done |
| `post3.html` | Blog: The Navagraham (~1,300 words) | ✅ Done |
| `contact.html` | Contact — Formspree AJAX form, FAQ accordion (6 items), Community, Newsletter | ✅ Done |
| `privacy.html` | Privacy Policy — Full policy page linked in all footers | ✅ Done |
| `style.css` | Custom CSS with CSS variables, animations, all components | ✅ Done |
| `script.js` | JS: scroll animations, contact form, newsletter, navbar scroll, daily wisdom quotes | ✅ Done |
| `sitemap.xml` | SEO sitemap including all 10 pages | ✅ Done |
| `robots.txt` | Standard robots file | ✅ Done |

---

## Core Requirements (Static)
- Multi-page website about Shaivam philosophy ✅
- Pure HTML/CSS/JS + Bootstrap 5 ✅
- English content with Sanskrit/Tamil terms explained ✅
- Real YouTube video embeds (9 videos, 3 categories) ✅
- 3 sample blog posts with full content ✅
- Text-based logo: "Shaivam" in Samarkan font ✅
- Formspree-powered contact form with AJAX ✅
- Responsive design (mobile-first) ✅
- All images localized (20+ images in `/images/`) ✅
- SEO: OG tags, Twitter cards, JSON-LD schema on all pages ✅
- sitemap.xml + robots.txt ✅
- Privacy policy page ✅
- Temples page with 7 shrine sections ✅

---

## What's Been Implemented

### Design System
- CSS custom properties (color variables)
- Cormorant Garamond serif headers + Lato body + Samarkan logo
- Saffron/ivory/indigo brand palette
- Micro-animations: fade-up scroll reveal, card hover (translateY + shadow)
- Sticky navbar with scroll shadow effect + Temples nav link
- Fully responsive layout

### Temples Page (Feb 2026) — NEW
- 7 temple sections with alternating left/right image/text layout
- Quick-navigation card grid at top (links to each temple anchor)
- Each temple has: numbered badge, element badge, location line, h2, 3 paragraphs, styled blockquote
- 4 new temple images downloaded locally (temple-varanasi.jpg, temple-thanjavur.jpg, temple-arunachala.jpg, temple-kanchipuram.jpg)
- "The Temple Within" closing philosophical section
- Full SEO meta, OG, Twitter Card, JSON-LD
- "Temples" nav link added to all 10 HTML files (navbar + footer)
- sitemap.xml updated to include temples.html

### 7 Temples Content
1. **Visweswaram** (Varanasi) — Akasha / Space element / Liberation
2. **Jambukeshwaram** (Thiruvanaikaval) — Apah / Water element / Shakti's supremacy
3. **Brihadeshwaram** (Thanjavur) — Human Achievement as Divine Offering / Goal Achievement Cycle
4. **Arunachaleshwaram** (Tiruvannamalai) — Agni / Fire element / Self-inquiry
5. **Sudareshwaram** (Madurai) — Bhakti / Devotion / Divine Love
6. **Kapaleeshwaram** (Mylapore) — Transformation / Return / Parvati's penance
7. **Viswesa / Ekambareshwaram** (Kanchipuram) — Prithvi / Earth element / Foundation

### Previously Completed
- **Goal Achievement Cycle**: 5-phase interactive pentagon infographic (Inception/Ganesha → Execution/Subramaniam → Unofficial Impact/Parvati → Official Impact/Shivam → Back to Inception), SVG arrows, hover-activated detail panel, mobile vertical flow
- **Hero**: Nataraja background with dark gradient overlay, dual CTA buttons
- **Rotating Wisdom Quotes**: 6 quotes, 5.5s auto-advance, nav dots on homepage
- **Video Gallery**: Bootstrap 5 tabs (3 categories, 9 real YouTube embeds)
- **Contact Form**: Formspree AJAX (endpoint: xpqorylp), button spinner, success state
- **Image Optimization**: 20+ images downloaded locally, compressed with Pillow (36% bundle reduction)
- **Samarkan Font**: Local TTF loaded for logo text across all pages
- **Nandi Footer**: Nandi image in footer brand across all pages
- **SEO**: Complete OG, Twitter Card, JSON-LD schema on all pages

---

## 3rd Party Integrations
- **Formspree**: Contact form endpoint `https://formspree.io/f/xpqorylp` (POST)

---

## Prioritised Backlog

### P0 — Completed
- All 10 pages built and tested ✅
- Navigation working with Temples link ✅
- Temples page with 7 detailed sections ✅
- Contact form with Formspree AJAX ✅
- Goal Achievement Cycle interactive infographic ✅
- Rotating wisdom quotes ✅
- SEO meta tags + sitemap + robots.txt ✅
- Privacy policy page ✅
- All images localized ✅
- Samarkan font integrated ✅
- YouTube embeds (9 real videos) ✅

### P1 — Next Phase
- Add 4–6 more blog posts (topics outlined in brief)
- Google Search Console verification code

### P2 — Future Features
- Tamil language toggle
- Search functionality for blog
- Event calendar
- Community discussion forum
- Dark mode toggle
- Hover tooltip definitions for Sanskrit/Tamil terms
- GitHub Actions CI/CD for auto-deploy
- Navagraham self-assessment quiz
