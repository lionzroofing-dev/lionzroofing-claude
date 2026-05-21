---
name: build-page
description: "Build a new Lionz Roofing website page automatically from a screenshot. Use when creating a new page, route, or service subpage. Pass the page name as the argument (e.g. /build-page Roof Repairs), then attach a screenshot."
argument-hint: "[page name] — e.g. Roof Repairs"
user-invocable: true
---

You are building a new page for the Lionz Roofing website.

## Step 1 — Load the template
Read the full page build template from:
`docs/PAGE_PROMPT_TEMPLATE.md`

## Step 2 — Gather required inputs

**If a page name was passed as the skill argument** (e.g. `/build-page Roof Repairs`):
- Ask for only: "Please attach a screenshot of the page design or the live reference page."

**If no argument was provided** (just `/build-page`):
- Ask for both in one message:
  1. "What is the page name? (e.g. Roof Repairs, Gutter Works, About Us)"
  2. "Please attach a screenshot of the page design or the live reference page."

Wait for the reply before proceeding. Do NOT ask any further questions after this point.

Derive the rest automatically:
- **Route** → kebab-case of the page name (e.g. "Roof Repairs" → `/roof-repairs`)
- **File path** → `src/app/<route>/page.tsx`
- **Image folder** → `public/images/<route>/`

## Step 3 — Build the page automatically
Analyze the screenshot and build immediately — no confirmation step, no brief, no pausing.

Follow the PAGE_PROMPT_TEMPLATE rules exactly:
- Identify every visible section from the screenshot
- For each section: check the component reuse table before creating anything new
- Create the dedicated image folder `public/images/<page-slug>/` with placeholder copies (copy from an existing image folder so the page renders immediately)
- Build the page as a server component with `export const metadata`
- Reuse Header, Footer, Button, CTASection, BlogPreview, FAQSection, ServicesSlider etc. where visible in the screenshot
- Create new components in `src/components/` only when no existing component matches
- Apply all CODE QUALITY RULES: one H1 (hero only), all other headings H2, no unused imports, &apos; for apostrophes, &amp; for &
- Update `src/data/navigation.ts` to point the relevant nav dropdown item to the new route

## Step 4 — Report
1. Files created
2. Files updated
3. Components reused
4. New components created (if any)
5. Image slots created in `public/images/<page-slug>/`
6. Any notes
