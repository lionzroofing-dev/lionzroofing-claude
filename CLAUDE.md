# Lionz Roofing Website

## Project Overview

Complete frontend rebuild of the Lionz Roofing website using Next.js, React, Tailwind CSS, and TypeScript with the App Router.

**Goal:** Modern, responsive, SEO-optimized, conversion-focused roofing company website that maintains Lionz Roofing branding while improving frontend quality, performance, maintainability, and lead generation.

---

## Tech Stack

| Layer | Tool |
|---|---|
| Framework | Next.js (App Router) |
| UI | React + TypeScript |
| Styling | Tailwind CSS |
| Fonts | Montserrat, Poppins |
| Images | Next.js Image component |
| Deployment | Vercel |

---

## Company Info

| Field | Value |
|---|---|
| Address | 5200 NW 33rd Ave Suite 200, Fort Lauderdale, FL 33309 |
| Phone | [PHONE] |
| Email | [EMAIL] |
| License # | [LICENSE#] |
| Facebook | [FACEBOOK_URL] |
| Instagram | [INSTAGRAM_URL] |

---

## Brand Colors

```ts
// tailwind.config.ts
colors: {
  lionzGold:  "#E0B000",
  lionzNavy:  "#001B44",
  lionzDark:  "#111111",
  lionzWhite: "#FFFFFF",
  lionzLight: "#F5F5F5",
}
```

### Color Usage Rules

| Color | Use for | Avoid |
|---|---|---|
| `lionzGold` | CTA buttons, hero headings, hover states, icons, top bar background, accent borders | Full section backgrounds |
| `lionzNavy` | Navbar, footer, dark content sections, headers, dividers | — |
| `lionzDark` | Hero overlays, dark image overlays, deep contrast backgrounds | — |
| `lionzWhite` | Text on dark backgrounds, content section backgrounds, cards, forms | — |
| `lionzLight` | Alternate section backgrounds, card containers, testimonials backgrounds | — |

---

## Typography

```css
font-family: "Montserrat", "Poppins", Arial, sans-serif;
```

- Large bold headings
- Clear spacing and strong hierarchy
- Easy readability at all sizes

---

## Button Style

```
bg-lionzGold text-lionzNavy font-bold rounded-xl px-8 py-4
hover:brightness-90 transition
```

Buttons must be visually clickable, use bold text, and maintain high contrast.

---

## Design Direction

**Feel:** Professional, premium, trustworthy, high-converting, modern but contractor-focused.

**Avoid:**
- SaaS/startup aesthetics
- Overly playful or minimalist white-only layouts
- Heavy parallax or distracting animations
- Dark-only cyber themes

**Animations allowed:** Subtle hover effects, fade-ins, smooth transitions only.

---

## Folder Structure

```
/src
  /app
    page.tsx                  ← Home
    /about/page.tsx
    /services/page.tsx
    /financing/page.tsx
    /testimonials/page.tsx
    /gallery/page.tsx
    /blog/page.tsx
    /contact/page.tsx

  /components
    Header.tsx
    TopBar.tsx
    Navbar.tsx
    Hero.tsx
    ServiceCard.tsx
    CTASection.tsx
    Footer.tsx
    SectionTitle.tsx
    Button.tsx

  /data
    services.ts
    testimonials.ts
    navigation.ts

  /styles
    globals.css

  /lib

/public
```

---

## Pages

| Page | Route | Status |
|---|---|---|
| Home | `/` | — |
| About Us | `/about` | — |
| Services | `/services` | — |
| Financing | `/financing` | — |
| Testimonials | `/testimonials` | — |
| Gallery | `/gallery` | — |
| Blog | `/blog` | — |
| Contact | `/contact` | — |

---

## Homepage Sections

Build in this order:

### 1. Top Contact Bar
- Address, email, phone, license number, social icons (Facebook, Instagram)
- Style: gold background, navy text/icons, compact, responsive stacking on mobile

### 2. Navbar
- Lionz Roofing logo
- Navigation links with Services dropdown
- "Call Us" CTA button (gold)
- Style: navy background, white text, gold hover, sticky

### 3. Hero
- Full viewport height with roofing background image
- Dark overlay for readability
- Headline: **"We've Got You Under Our Roof"** (large, bold, gold)
- CTA button: **"Get Your Free Quote"**
- Centered alignment, mobile responsive

### 4. Services Section
Six service cards — each with icon, title, short description, Learn More button:
- Roof Repair
- Roof Replacement
- Residential Roofing
- Commercial Roofing
- Storm Damage
- Roof Inspection

Card style: rounded, hover animation, consistent height, clean spacing.

### 5. Why Choose Us
Trust points in icon + grid layout:
- Licensed and Insured
- Experienced Roofing Professionals
- Local Roofing Experts
- Fast Communication
- Quality Workmanship
- Free Estimates

### 6. Testimonials
Customer reviews in card or slider layout. Star icons optional. Responsive, clean typography.

### 7. Gallery
Responsive image grid, hover zoom, lazy loading, optimized images.

### 8. CTA Banner
Strong conversion section before footer.
Copy: *"Need a reliable roofing team? Get your free quote today."*
Bold typography, high-contrast background, CTA button.

### 9. Footer
- Logo, contact details, quick links, services list, social icons, license info
- Style: navy background, white text, gold accents

---

## SEO Requirements

Every page must include:
- `<title>` and `<meta name="description">`
- Proper H1 → H2 → H3 hierarchy (one H1 per page)
- Accessible `alt` text on all images
- Fast-loading assets (Next.js Image component)

### Target Keywords
- Roofing Fort Lauderdale
- Roof Repair Fort Lauderdale
- Roof Replacement Florida
- Residential Roofing Florida
- Commercial Roofing Florida
- Roofing Contractors Fort Lauderdale
- Emergency Roof Repair Florida

---

## Responsive Breakpoints

Test at: `320px`, `768px`, `1024px`, `1440px`

Mobile-first design. All sections must stack and breathe at small screens.

---

## Accessibility

- Semantic HTML throughout
- Buttons and links must be keyboard-accessible
- Color contrast must remain readable (WCAG AA minimum)

---

## Performance

- Use `next/image` for all images
- Lazy load images below the fold
- Target good Core Web Vitals (LCP, CLS, FID)
- No oversized assets

---

## Tailwind Config

```ts
// tailwind.config.ts
theme: {
  extend: {
    colors: {
      lionzGold:  "#E0B000",
      lionzNavy:  "#001B44",
      lionzDark:  "#111111",
      lionzWhite: "#FFFFFF",
      lionzLight: "#F5F5F5",
    },
    fontFamily: {
      sans: ["Montserrat", "Poppins", "Arial", "sans-serif"],
    },
  },
},
```

---

## Pre-Deployment Checklist

Run before every deploy:

```bash
npm run lint
npm run build
```

Verify:
- [ ] TypeScript errors: none
- [ ] ESLint errors: none
- [ ] All routes load
- [ ] All CTA buttons work
- [ ] Navigation and dropdowns work
- [ ] Images load and are optimized
- [ ] Metadata present on all pages
- [ ] Mobile layouts correct at 320px, 768px, 1024px, 1440px

Never deploy with build errors, TypeScript issues, broken layouts, or failing routes.

---

## Contact Form

Handler: TBD — decide when building `/contact` page.
Options: Resend (Next.js API route), Formspree (no-code).

Required fields when built:
- Full Name
- Phone Number
- Email Address
- Service Type (dropdown)
- Message

---

## Page Image Folders

Every page gets its own dedicated image folder so images can be swapped without touching code.

### Rules
- Folder path: `public/images/<page-slug>/`
- Always include `hero.png` as the hero/banner background
- Add further slots named after their section role (e.g. `intro.png`, `solutions.png`, `team.png`)
- Copy a placeholder from an existing image on first creation so the page renders immediately
- All `src=` attributes in the page must point to `/images/<page-slug>/<filename>` — never borrow paths from another page's folder

### Existing folders
| Page | Folder |
|---|---|
| Service Areas | `public/images/service-areas/` |
| Services | `public/images/services/` |
| CTA Section (shared) | `public/images/cta/` — `cta-bg.png` is the default background image |

When building a new page, create its folder and placeholder files **before** writing the component.
