# Shaivam Philosophy Website — PRD

## Project Overview
A comprehensive, multi-page static website dedicated to Shaivam philosophy — a spiritual and philosophical framework emphasising freedom, empathy, progress, and the integration of dual realities. Built using **pure HTML, CSS, JS and Bootstrap 5**.

---

## Architecture

- **Type**: Static HTML website (no backend, no database)
- **Stack**: HTML5 + CSS3 + JavaScript (ES6) + Bootstrap 5 CDN
- **Fonts**: Cormorant Garamond (headers) + Lato (body) — Google Fonts
- **Icons**: Font Awesome 6.5 CDN
- **Location**: `/app/frontend/public/shaivam/`
- **Access URL**: `/shaivam/index.html` (root `/` redirects via React App.js)

---

## Color Palette
- Primary: `#D35400` (Deep Saffron/Orange)
- Secondary: `#FAF9F6` (Ivory/Cream)
- Accent: `#1A237E` (Deep Indigo)
- Neutral Dark: `#212121`
- Text Main: `#424242`
- Text Muted: `#757575`

---

## Pages Implemented (Date: Feb 2026)

| File | Title | Status |
|------|-------|--------|
| `index.html` | Home — Hero, Intro, 4 Concept Cards, Practice, Quote, Blog Preview, Newsletter | ✅ Done |
| `about.html` | About — What is Shaivam, Dual Monism, Two Domains, Three Paths, Key Concepts, Deity Archetypes, Navagraham, **Goal Achievement Cycle** | ✅ Done |
| `videos.html` | Videos — 5 Bootstrap tab categories, 18 placeholder video cards | ✅ Done |
| `blog.html` | Blog — Featured post, 6 blog cards, categories sidebar, newsletter | ✅ Done |
| `post1.html` | Blog: Understanding Dual Monism (~1,200 words) | ✅ Done |
| `post2.html` | Blog: Ganesha's Gift (~1,100 words) | ✅ Done |
| `post3.html` | Blog: The Navagraham (~1,300 words) | ✅ Done |
| `contact.html` | Contact — Static form, FAQ accordion (6 items), Community, Newsletter | ✅ Done |
| `style.css` | Custom CSS with CSS variables, animations, all components | ✅ Done |
| `script.js` | JS: scroll animations, contact form, newsletter, navbar scroll | ✅ Done |

---

## Core Requirements (Static)
- Multi-page website about Shaivam philosophy
- Pure HTML/CSS/JS + Bootstrap 5
- English content with Sanskrit/Tamil terms explained
- Placeholder video cards
- 3 sample blog posts with full content
- Text-based logo: "ॐ Shaivam"
- Static contact form with success message
- Responsive design (mobile-first)

---

## What's Been Implemented

### Design System
- CSS custom properties (color variables)
- Cormorant Garamond serif headers + Lato body
- Saffron/ivory/indigo brand palette
- Micro-animations: fade-up scroll reveal, card hover (translateY + shadow)
- Sticky navbar with scroll shadow effect
- Fully responsive layout

- **Goal Achievement Cycle**: 5-phase interactive pentagon infographic (Inception/Ganesha → Execution/Subramaniam → Unofficial Impact/Parvati → Official Impact/Shivam → Back to Inception), SVG arrows, hover-activated detail panel, mobile vertical flow (Feb 2026)
- **Hero**: Nataraja background with dark gradient overlay, dual CTA buttons
- **Core Concepts**: 4 cards with saffron left-border hover animation
- **Dual Monism Grid**: 6 dual pair cards (Viswesam/Eshwaram, Sathyam/Nisathyam, etc.)
- **Two Domains Table**: Comparison table Viswesam vs Eshwaram
- **Three Paths**: 3 numbered path cards
- **Deity Archetypes**: 8 deity cards with dark gradient headers
- **Navagraham**: 9-card grid (Surya, Chandra, Mangala, Budha, Guru, Sukra, Shani, Rahu, Ketu)
- **Video Gallery**: Bootstrap 5 tabs (5 categories, 18 video cards with play overlays)
- **Blog**: Featured post, 6 cards, categories sidebar, pagination
- **Contact**: Bootstrap form, static JS success message, FAQ accordion
- **Footer**: Dark footer with quick links, philosophy links, wisdom quote

---

## Prioritised Backlog

### P0 — Already Done
- All 8 pages built and tested ✅
- Navigation working ✅
- Contact form with success message ✅
- Video tabs working ✅
- Goal Achievement Cycle interactive infographic (about.html) ✅
- GAC auto-play animation via IntersectionObserver ✅
- Rotating wisdom quotes (6 quotes, 5.5s auto-advance, nav dots) ✅
- SEO meta tags: OG, Twitter Card, JSON-LD schema on all 8 pages ✅
- sitemap.xml + robots.txt ✅

### P1 — Next Phase
- Add real YouTube video embeds when videos are produced
- Add 4-6 more blog post pages
- Add email functionality to contact form (Resend/SendGrid integration)
- Add a Navagraham self-assessment quiz (interactive JS)

### P2 — Future Features
- Tamil language toggle
- Search functionality for blog
- Event calendar
- Community discussion forum
- Dark mode toggle
- Hover tooltip definitions for Sanskrit/Tamil terms

---

## Next Tasks
1. Replace placeholder video cards with real YouTube embeds
2. Add more blog post pages (topics outlined in brief)
3. Connect contact form to email service
4. Add sitemap.xml and SEO meta tags
5. Consider adding a daily wisdom rotating quote on homepage
