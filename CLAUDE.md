# CLAUDE.md — Ali Almani & Partners Website
# Read this file at the start of every session. Follow all instructions exactly.

---

## PROJECT IDENTITY

- **Project:** almani.law — official website for Ali Almani & Partners
- **Type:** Full service law firm, Karachi, Pakistan
- **Owner:** Ali Almani (Managing Partner)
- **Goal:** Production-ready, internationally credible law firm website
- **Standard:** London barrister's chambers quality. Not a template. Not generic.

---

## TECH STACK — DO NOT DEVIATE

- **Framework:** Next.js 14, App Router
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS only — no inline styles, no CSS modules
- **Animation:** Framer Motion
- **Fonts:** next/font/google — Cormorant Garamond (headings) + Inter (body)
- **Images:** Next.js `<Image>` component only — never `<img>`
- **Forms:** Next.js API route + Nodemailer → sends to info@almani.law
- **Hosting target:** Vercel

---

## BRAND TOKENS — USE THESE EXACT VALUES

```css
--color-navy:       #1E2A3A   /* nav, footer, dark section backgrounds */
--color-blue:       #1B4F9B   /* primary CTA, links, accents */
--color-blue-light: #2563EB   /* hover states */
--color-gold:       #C9A84C   /* credentials bar, eyebrow labels only */
--color-white:      #FFFFFF
--color-off-white:  #F8F9FA   /* page section backgrounds */
--color-text:       #1C1C1C   /* all body copy */
--color-muted:      #6B7280   /* secondary text, captions */
--color-border:     #E5E7EB   /* dividers, card borders */
--color-whatsapp:   #25D366   /* WhatsApp button — never change this */
```

In Tailwind, extend the theme in `tailwind.config.ts` with these values.

---

## TYPOGRAPHY

```
Headings:    Cormorant Garamond, weight 400/600, variable --font-cormorant
Body/UI:     Inter, weight 400/500/600, variable --font-inter
Nav labels:  Inter 500, uppercase, tracking-widest
```

---

## LOGO

No SVG file yet. Render as text placeholder in `Navbar.tsx` and `Footer.tsx`:
- Light background: `ALI ALMANI` in Inter 700 navy + `& PARTNERS` in Inter 400 navy, with a 2px solid `--color-blue` bottom border under "ALI ALMANI"
- Dark background (footer): same, but white text + white border
- When `/public/logo.svg` exists, replace placeholder with `<Image src="/logo.svg" />`

---

## SITE STRUCTURE

```
/                     Home
/practice             Practice Areas (single page, 7 anchor sections)
/people               Team grid
/people/[slug]        Individual profiles
/about                About the firm
/contact              Contact + form + map + WhatsApp
```

---

## FILE STRUCTURE — BUILD EXACTLY THIS

```
/src
  /app
    layout.tsx
    page.tsx
    /practice/page.tsx
    /people/page.tsx
    /people/[slug]/page.tsx
    /about/page.tsx
    /contact/page.tsx
    /api/contact/route.ts
  /components
    /layout
      Navbar.tsx
      Footer.tsx
    /home
      HeroSlider.tsx
      CredentialsBar.tsx
      IntroStrip.tsx
      PracticeGrid.tsx
      FeaturedProfile.tsx
      SelectedMattersPreview.tsx
      AboutStrip.tsx
    /practice
      PracticeSection.tsx
      PracticeSideNav.tsx
    /people
      TeamGrid.tsx
      ProfileCard.tsx
      ProfileSidebar.tsx
      SelectedMatters.tsx
    /ui
      Button.tsx
      SectionHeader.tsx
      PhotoPlaceholder.tsx
      WhatsAppButton.tsx
  /data
    team.ts
    practice.ts
    matters.ts
    hero-config.ts
  /lib
    fonts.ts
    metadata.ts
/public
  /images
    /hero          ← hero-1.jpg, hero-2.jpg, hero-3.jpg
    /about         ← photo-clifton.jpg, photo-colonial.jpg
    /practice      ← photo-library.jpg
    /people        ← empty until headshots arrive
  logo.svg         ← empty until vector logo arrives
  favicon.ico
```

---

## CONTACT DETAILS — USE EXACTLY

```
Firm name:      Ali Almani & Partners
Address:        F8/3, Block 4, Old Clifton, Karachi 75600, Pakistan
Email:          info@almani.law
Office phone:   +92 21 351 78212 & 59
WhatsApp:       +92 345 226 6645  (Ali's mobile — the ONLY number that can receive WhatsApp)
Website:        www.almani.law
Map coords:     24.8138° N, 67.0298° E
```

**WhatsApp URL (use everywhere):**
```
https://wa.me/923452266645?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20legal%20services.
```

---

## WHATSAPP — CRITICAL FOR PAKISTAN MARKET

Most legal leads in Pakistan start via WhatsApp, not email. WhatsApp must be present everywhere.

### 1. Floating Button (global — every page)
- Component: `WhatsAppButton.tsx` — registered in `layout.tsx`
- Position: fixed, bottom-6 right-6, z-index 50
- Size: 56×56px circle, background #25D366
- White WhatsApp SVG icon, 28px
- Shadow: `0 4px 12px rgba(37, 211, 102, 0.4)`
- Entrance: Framer Motion slide-up + fade, 600ms delay after page load
- Idle animation: CSS pulse ring every 2.5s (draws eye, not annoying)
- Hover: scale(1.1) + tooltip "Chat on WhatsApp" (desktop only, fades in left of button)
- Tap: scale(0.95)
- Opens WhatsApp URL in new tab

### 2. Hero Section
Below the two CTA buttons, small line:
```
[WhatsApp icon small] Or message us directly on WhatsApp
```

### 3. Mobile Navbar
WhatsApp icon button in top-right, next to hamburger — opens WhatsApp URL directly.

### 4. Contact Page
- Prominent "Chat with us on WhatsApp" button in left column below map
- In contact form, phone field labelled "Phone / WhatsApp Number"
- Below form submit button: "Prefer to message directly? [WhatsApp icon] Chat on WhatsApp →"

### 5. Practice Area Pages
Bottom of each practice section:
```
Have a matter in this area?  [Button: "Discuss on WhatsApp →"]
```

### 6. Ali's Profile Page
Below bio, alongside email button:
```
[Email button]   [WhatsApp button — #25D366]
```

### 7. Footer
In contact column:
```
info@almani.law
+92 21 351 78212 & 59
[WhatsApp icon] +92 345 226 6645 (WhatsApp)
```

---

## HOME PAGE — SECTION BY SECTION

### Navbar
- Transparent over hero → transitions to navy on scroll (Framer Motion useScroll)
- Logo left, nav links right: Practice | People | About | Contact
- "Contact Us" filled blue button in nav
- Mobile: hamburger → full-screen navy overlay with links + WhatsApp icon

### Hero
- Full viewport height (100vh)
- Ken Burns slider: 3 images, 8–10s transitions, scale 1.0→1.05
- Images: `/images/hero/hero-1.jpg`, `hero-2.jpg`, `hero-3.jpg`
- Image config lives in `/data/hero-config.ts` — never hardcoded in component
- Overlay: `rgba(10, 15, 35, 0.60)`
- Content centred, white:
  ```
  Eyebrow (gold, Inter, small caps, tracking-widest):
  ADVOCATES & LEGAL CONSULTANTS · KARACHI

  H1 (Cormorant Garamond 600, 72px desktop / 44px mobile):
  Ali Almani & Partners

  Tagline (Cormorant Garamond italic, 24px):
  Pakistan's courts. The world's standards.

  Buttons (side by side):
  "Our Practice"   → /practice   [outlined white]
  "Meet the Team"  → /people     [filled blue]

  WhatsApp line (small, below buttons):
  [WA icon] Or message us directly on WhatsApp
  ```
- Animated chevron-down scroll indicator at bottom centre

### Credentials Bar
- Navy background, single line desktop / CSS marquee mobile
- Content: `Yale University · Harvard Law School · University of Cambridge · Lincoln's Inn · ICSID Panel of Arbitrators`
- Gold dots as separators

### Intro Strip
- Off-white background
- Large pull-quote paragraph (Cormorant Garamond, large)
- Below: 2-col — left: rest of intro text, right: 4 credential stats:
  ```
  17 years  — Combined senior experience at Fazleghani Advocates
  10+       — Leading judgments in public court records
  4         — International arbitral institutions
  2024–2030 — ICSID Panel of Arbitrators nomination
  ```

### Practice Grid
- 3×2+1 grid (7 tiles), desktop / single col mobile
- Each tile: Lucide icon + title + one-line descriptor
- Hover: navy background, white text, → arrow appears
- Links to `/practice#[anchor]`
- Tiles:
  1. Tax Litigation — `Scale` icon — "Landmark cases before the superior courts of Pakistan"
  2. International Arbitration — `Globe` icon — "Cross-border disputes under DIAC, ICC, ICSID and LCIA rules"
  3. Constitutional Law — `Landmark` icon — "High-profile matters concerning fundamental rights and devolution"
  4. Commercial Litigation — `Briefcase` icon — "Banking, finance, energy and corporate disputes"
  5. Regulatory Disputes — `Building2` icon — "Proceedings before the SECP, NEPRA, Competition Commission"
  6. Civil Litigation — `FileText` icon — "Property, family, defamation and service matters"
  7. Corporate Advisory — `TrendingUp` icon — "Regulatory compliance, governance and financial sector matters"

### Featured Profile
- 2-col: left = PhotoPlaceholder (400×500px, label "Photo coming soon"), right = bio
- Right: gold eyebrow "MANAGING PARTNER" → name → credentials → 2-sentence bio → "Full Profile →" link

### Selected Matters Preview
- 3 cards: HBL v Pakistan (income tax), Lucky Motor v Pakistan (customs), Paramount v Ministry (arbitration)
- Each: italic case name, subject tag, "View judgment ↗" external link
- "View all matters →" below, links to `/people/ali-almani#selected-matters`

### About Strip
- Navy background, white text
- Left: `/images/about/photo-clifton.jpg`
- Right: pull quote + "About the Firm →" CTA

### Footer
- Navy background, 3 columns
- Col 1: Logo + address + info@almani.law + office phone + WhatsApp number
- Col 2: Practice links (anchors)
- Col 3: People, About, Contact
- Bottom bar: © 2026 Ali Almani & Partners. All rights reserved.

---

## PRACTICE AREAS PAGE (`/practice`)

- Page header: full-width image band (`/images/practice/photo-library.jpg`), dark overlay
- Sticky side nav on desktop (smooth scroll to each section)
- 7 sections with left blue border accent, anchor IDs:
  - `#tax-litigation`
  - `#international-arbitration`
  - `#constitutional-law`
  - `#commercial-litigation`
  - `#regulatory-disputes`
  - `#civil-litigation`
  - `#corporate-advisory`
- Each section ends with WhatsApp CTA: "Have a matter in this area? [Discuss on WhatsApp →]"

### Copy — use verbatim

**Tax Litigation:**
Tax litigation is at the heart of our practice. We represent Pakistan's largest domestic conglomerates and leading multinational corporations in precedent-setting cases before the superior courts, including the Federal Constitutional Court, Supreme Court and High Courts of Pakistan. Our work spans the full range of fiscal disputes — income tax, super tax, sales tax, customs duties, tax credits, exemptions, and audit selection matters. We approach every tax case with close attention to legislative history: our founding partner was directly involved in drafting the Sales Tax on Services legislation enacted in 2011 and participated in the National Finance Commission Award negotiations of 2008, giving the firm rare insight into the intent behind Pakistan's fiscal framework. We have successfully argued landmark cases that have established binding precedents on questions of tax policy, assessment methodology, and the limits of regulatory authority — securing outcomes that have saved clients billions of rupees in potential liabilities.

**International Commercial Arbitration:**
We represent clients in domestic and international arbitrations across the full spectrum of commercial disputes. Our international arbitration practice spans proceedings under the rules of the Dubai International Arbitration Centre (DIAC), the International Chamber of Commerce (ICC), the International Centre for Settlement of Investment Disputes (ICSID), and the London Court of International Arbitration (LCIA). Our lawyers have represented multinational petroleum companies, liquefied natural gas suppliers, and independent power producers — parties for whom the stakes are measured in the hundreds of millions of dollars and whose disputes require advocacy of the highest order. Ali Almani was nominated by the Government of Pakistan to the ICSID Panel of Arbitrators in February 2024. He is the author of published texts on arbitration law for Kluwer Law International and a contributor to the International Handbook on Commercial Arbitration. He has also been appointed as Amicus Curiae by the superior courts to assist in complex matters of international arbitration law.

**Constitutional & Public Law:**
We litigate constitutional matters of genuine national consequence. Our work in this area has addressed some of the most significant public law questions of recent years — including cases concerning the 18th Amendment to the Constitution, the devolution of legislative and executive powers between the federation and the provinces, the distribution of natural resources, the determination of gas tariffs, and the constitutional framework governing elections. We have also appeared in landmark cases concerning fundamental rights: freedom of expression, protection of property, the right to education, and the right to divorce. In several complex matters, our founding partner has been appointed Amicus Curiae by the superior courts.

**Commercial Litigation:**
Our commercial litigation practice covers the full range of disputes that arise in Pakistan's corporate and financial sectors. We appear regularly in cases involving banking and finance, insurance, energy and infrastructure, construction, corporate governance, and contract. We have represented clients in major shareholder disputes, sovereign guarantee enforcement proceedings, and credit derivatives litigation. We understand that commercial disputes are rarely just legal problems — they affect businesses, relationships, and reputations. We bring the same rigour and preparation to every matter, whether the client is a multinational institution or a domestic enterprise navigating a dispute for the first time.

**Regulatory Disputes:**
Pakistan's regulatory environment has grown significantly in complexity over recent decades, and disputes with regulatory bodies now represent some of the most consequential litigation facing our clients. We appear before and advise clients in relation to the Securities & Exchange Commission of Pakistan (SECP), the National Electric Power Regulatory Authority (NEPRA), the Oil and Gas Regulatory Authority (OGRA), the Competition Commission of Pakistan, and the Election Commission of Pakistan, among others. Our founding partner has testified before the Senate on financial sector legislation and advised on the restructuring of clearing transactions for the Pakistan Stock Exchange.

**Civil Litigation:**
We handle a broad range of civil matters before the superior courts, including property disputes, family law matters, defamation proceedings, and service cases. We bring the same standard of preparation and advocacy to civil matters that we apply across all our practice areas — because for our clients, these cases matter just as much.

**Corporate Advisory:**
We advise on regulatory compliance, corporate governance, financial sector legislation, and commercial transactions. Our founding partner has advised on the Financial Institutions (Recovery of Finances) Ordinance 2001, testified before the Senate, and advised on the restructuring of clearing transactions for the Pakistan Stock Exchange.

---

## PEOPLE PAGE (`/people`)

- 2×2 grid desktop / single col mobile
- Each card: PhotoPlaceholder + name + title + 1-line credentials + "View Profile →"

| Slug | Name | Title | Credentials line |
|---|---|---|---|
| ali-almani | Ali Almani | Managing Partner | B.A. (Yale) · J.D. (Harvard) · LL.M. (Cantab) · Advocate, Federal Constitutional Court & Supreme Court |
| furqan-mushtaq | Furqan Mushtaq | Senior Associate | LLB (Hons) Nottingham · Called to the Bar, Lincoln's Inn |
| akber-sohail | Akber Sohail | Senior Associate | LLB & LLM (UK) · Advocate of the High Court · 10+ years experience |
| shahzeb-sahito | Shahzeb Sahito | Associate | LLB, University of London / Brunel |
| fahad-khan | Fahad Khan | Senior Associate & Office Manager | LLB, S.M. Law College · High Court practice since 2006 |

---

## ALI ALMANI PROFILE (`/people/ali-almani`)

**Header band:** `/images/about/photo-colonial.jpg`, dark overlay, white text:
```
Ali Almani
Managing Partner
B.A. (Yale) · J.D. (Harvard) · LL.M. (Cantab)
```

**Layout:** 2-col desktop — left sticky sidebar, right scrollable bio

**Sidebar:**
```
PhotoPlaceholder 300×380px

ADMISSIONS
– Advocate of the Federal Constitutional Court
– Advocate of the Supreme Court of Pakistan

EDUCATION
– B.A. (Economics), Yale University, 2004
– LL.M., University of Cambridge, 2007
– J.D., Harvard Law School, 2008

AFFILIATIONS
– ICSID Panel of Arbitrators, nominated by Pakistan (2024–2030)
– Teaching Center Advisory Committee, SZABIST University

LANGUAGES
– English, Urdu, Sindhi
```

**Bio (use verbatim):**
Ali Almani is the Managing Partner of Ali Almani & Partners and one of Pakistan's leading counsel in tax litigation, constitutional law, and international commercial arbitration. He is an Advocate of the Federal Constitutional Court and the Supreme Court of Pakistan.

Ali read economics at Yale University, graduating in 2004. He then read law at the University of Cambridge, where he completed his LLM in 2007, before earning his Juris Doctor from Harvard Law School in 2008. He joined Fazleghani Advocates in April 2008, becoming a Partner in July 2014 and remaining until December 2025, when he founded Ali Almani & Partners.

Over the course of his career, Ali has built a practice of exceptional breadth and depth. In tax litigation, he has appeared for Pakistan's largest conglomerates and multinational corporations in cases that have set binding precedent before the superior courts. He was directly involved in drafting the Sales Tax on Services legislation enacted in 2011 and participated in the National Finance Commission Award negotiations of 2008.

In international arbitration, Ali has represented multinational petroleum companies, LNG suppliers, and independent power producers in proceedings under DIAC, ICC, ICSID and LCIA rules. In February 2024, he was nominated by the Government of Pakistan to the ICSID Panel of Arbitrators — a position he holds until 2030. He is the author of published texts on arbitration law for Kluwer Law International and a contributor to the International Handbook on Commercial Arbitration.

Ali has argued landmark constitutional cases concerning the 18th Amendment, devolution of federal and provincial powers, the distribution of natural resources, and fundamental rights including freedom of expression, protection of property, and the right to education. He has been appointed Amicus Curiae by the superior courts on multiple occasions to assist in complex matters of constitutional and arbitration law.

He has testified before the Senate of Pakistan on financial sector legislation and advised on the restructuring of clearing transactions for the Pakistan Stock Exchange. He is a member of the Teaching Center Advisory Committee at SZABIST University and speaks English, Urdu, and Sindhi.

**Below bio:** two buttons side by side — "Contact Us" → /contact, "WhatsApp" → wa.me URL (green button)

**Selected Matters section** (anchor `#selected-matters`):

| Case | Subject | URL |
|---|---|---|
| Fahad Khan & others v. Syed Asa Hussain Rizvi & others | Criminal defamation | https://caselaw.shc.gov.pk/caselaw/view-file/Mjg1ODQz |
| Lucky Motor Corporation v. Federation of Pakistan & others | Customs duties | https://caselaw.shc.gov.pk/caselaw/view-file/MjUwMzU4 |
| Muhammad Hassan Sultan v. Chairman, Union Council & another | Divorce | https://www.supremecourt.gov.pk/downloads_judgements/c.p._5364_2024.pdf |
| Masjid-e-Saheem & others v. DHA & others | Right to use of property | https://caselaw.shc.gov.pk/caselaw/view-file/MjQ5MjA4 |
| Habib Bank Limited & others v. Pakistan & others | Income tax | https://caselaw.shc.gov.pk/caselaw/view-file/MjE3NTAw |
| Ali Baakzaa v. Federation of Pakistan & others | Import restrictions | https://caselaw.shc.gov.pk/caselaw/view-file/MjE2NDM3 |
| Federation of Pakistan v. Premium Textiles & others | Gas tariff | https://caselaw.shc.gov.pk/caselaw/view-file/MjQxNjgx |
| Sheraz Hakeem v. Aga Khan University & others | Right to education | https://caselaw.shc.gov.pk/caselaw/view-file/MjIwNzgz |
| Paramount Communications (Pvt.) Ltd. v. Ministry of Communications & others | Arbitration | http://caselaw.shc.gov.pk/caselaw/view-file/MTYzNTU0 |
| Thal Limited & another v. Federation of Pakistan & others | Customs duties | https://caselaw.shc.gov.pk/caselaw/view-file/MTExMDU2 |

All judgment links: `target="_blank" rel="noopener noreferrer"`

---

## OTHER PROFILES (`/people/[slug]`)

Same layout as Ali's profile but simplified. Use data from `/data/team.ts`.

**Furqan Mushtaq:**
Furqan Mushtaq is a Senior Associate at Ali Almani & Partners. He holds an LLB (Hons) from the University of Nottingham and completed the Bar Professional Training Course at City, University of London. He was called to the Bar of England and Wales by The Honourable Society of Lincoln's Inn. Furqan joined Fazleghani Advocates in 2021, where he developed his litigation practice over four years before joining Ali Almani & Partners at its founding.
Education: LLB (Hons), University of Nottingham · BPTC, City, University of London
Admissions: Called to the Bar, Lincoln's Inn

**Akber Sohail:**
Akber Sohail is a Senior Associate at Ali Almani & Partners and an Advocate of the High Court with over a decade of professional legal experience. He has represented a diverse range of clients — including corporate entities, businesses, and private individuals — in complex and high-value disputes. Akber regularly appears before the High Courts and subordinate courts in Karachi, Islamabad, and other jurisdictions. His practice covers commercial litigation, property disputes, customs and tax law, competition law, and civil disputes.
Education: LLB (UK) · LLM (UK)
Admissions: Advocate of the High Court

**Shahzeb Sahito:**
Shahzeb Sahito is an Associate at Ali Almani & Partners. He holds an LLB from Brunel University London and an LLB from the Institute of Legal Studies. Prior to joining Fazleghani Advocates in 2024, he gained experience at Jawad Qureshi Advocates and Sahito Law Chamber.
Education: LLB, Brunel University London · LLB, Institute of Legal Studies

**Fahad Khan:**
Fahad Khan brings nearly two decades of experience in court practice and legal administration to Ali Almani & Partners. He holds an LLB from S.M. Law College, Karachi, and has been practising before the High Court since 2006. Fahad manages the firm's day-to-day operations and oversees all court filing and administrative proceedings.
Education: LLB, S.M. Law College, Karachi

---

## ABOUT PAGE (`/about`)

**Header:** `/images/about/photo-clifton.jpg`, dark overlay, "About the Firm"

**Body copy (verbatim):**
Ali Almani & Partners was founded in January 2026 by Ali Almani, with the conviction that the best litigation practice is built on three things: rigorous preparation, deep knowledge of the law, and the courage to argue difficult positions before difficult courts.

The firm is based in Karachi, and practises across Pakistan's superior courts — the Federal Constitutional Court, the Supreme Court of Pakistan, and the High Courts in each province and the Islamabad Capital Territory — as well as before the country's major regulatory bodies and, in arbitration matters, before international tribunals.

Our founding partner spent seventeen years, including eleven years as a partner, at Fazleghani Advocates, one of Pakistan's most distinguished litigation chambers, where he built a practice spanning tax litigation, constitutional law, international arbitration, and commercial disputes. The lawyers who have joined him here trained alongside him through some of the most complex matters in Pakistan's courts. This is not a new firm in the sense of being untested — it is a practice with deep roots, carried forward under a new name.

What we offer our clients is straightforward: serious lawyers who prepare thoroughly, argue precisely, and treat every matter — however routine it may appear — as if the outcome matters, because to our clients, it always does.

**Values panels (navy bg, white text, 3 columns):**
- PREPARATION: Every case we take, we take seriously. We prepare as if the outcome will turn on a single argument — because sometimes it does.
- EXPERTISE: Our practice areas are not a menu of services. They are the fields in which we have spent years developing genuine depth, tested in the highest courts.
- INTEGRITY: We tell our clients what the law is, not what they want to hear. That candour is the foundation of every relationship we have.

---

## CONTACT PAGE (`/contact`)

**Layout:** 2-col desktop — left: details + map + WhatsApp CTA, right: form

**Left column:**
```
Ali Almani & Partners
F8/3, Block 4, Old Clifton
Karachi 75600, Pakistan

info@almani.law
+92 21 351 78212 & 59
www.almani.law
```
- Google Maps iframe embed — coords 24.8138° N, 67.0298° E
- Below map: prominent green "Chat with us on WhatsApp" button → wa.me URL

**Right column — form fields:**
- Full Name *
- Email Address *
- Phone / WhatsApp Number *
- Nature of Matter * (dropdown): Tax Litigation / International Arbitration / Constitutional Law / Commercial Litigation / Regulatory Disputes / Civil Litigation / Corporate Advisory / Other
- Message * (textarea, 4 rows min)
- Submit: "Send Message" (blue button)
- Below submit: "Prefer to message directly? [WA icon] Chat on WhatsApp →" (muted text, links to wa.me)

**Form API route** (`/api/contact/route.ts`):
- POST → Nodemailer → info@almani.law
- Honeypot spam field
- Rate limit: 5 per IP per hour
- Returns: `{ success: true }` or `{ success: false, error: string }`

**Disclaimer below form:**
*The transmission of information through this website does not establish a lawyer-client relationship. Please do not send confidential information through the contact form until a formal engagement has been confirmed.*

---

## SEO & METADATA

```typescript
// layout.tsx
metadataBase: 'https://almani.law'
title default: 'Ali Almani & Partners — Advocates & Legal Consultants, Karachi'
title template: '%s | Ali Almani & Partners'
description: 'Ali Almani & Partners is a full service law firm in Karachi, Pakistan, specialising in tax litigation, international arbitration, constitutional law and commercial disputes. Founded by Ali Almani, Advocate of the Supreme Court of Pakistan.'
locale: 'en_PK'

// Per page:
/practice  → 'Our Practice'
/people    → 'Our People'
/about     → 'About the Firm'
/contact   → 'Contact'
/people/ali-almani → 'Ali Almani — Managing Partner'
```

- `robots.txt`: allow all
- `sitemap.xml`: use next-sitemap
- Homepage: add `LegalService` JSON-LD structured data schema

---

## PERFORMANCE RULES

- All images via Next.js `<Image>` with explicit width/height
- Hero slide 1: `priority={true}`, all others lazy
- WebP format for all images
- Target: LCP < 2.5s, CLS < 0.1
- `lang="en"` on `<html>`
- All external links: `target="_blank" rel="noopener noreferrer"`
- WCAG AA colour contrast on all text

---

## ENVIRONMENT VARIABLES

```bash
# .env.local — create this file, never commit it
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-sending-email@gmail.com
SMTP_PASS=your-app-password
CONTACT_FORM_TO=info@almani.law
NEXT_PUBLIC_WHATSAPP_NUMBER=923452266645
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

---

## PLACEHOLDER RULES — FOLLOW EXACTLY

| Element | What to render |
|---|---|
| Any headshot | `<PhotoPlaceholder />` — grey #E5E7EB box, correct aspect ratio, label "Photo coming soon" |
| Logo | Text lockup (see Logo section above) until `/public/logo.svg` exists |
| Hero images | Use files in `/public/images/hero/` — if missing, render navy placeholder |
| Tagline | "Pakistan's courts. The world's standards." — mark as `// TODO: confirm with client` |
| Shahzeb name | Use "Shahzeb Sahito" — add `// TODO: confirm spelling` comment |
| Missing bio detail | Render what exists, omit what doesn't — never invent content |

---

## CODING STANDARDS

- All components: functional, TypeScript, named exports
- All data: lives in `/data/*.ts` — components receive data as props, never hardcode content in components
- No `any` types
- No `console.log` in production code
- All links: use Next.js `<Link>` not `<a>` for internal routes
- Forms: controlled components with proper validation and error states
- Images: always provide meaningful `alt` text
- Commit after each complete component or page

---

## BUILD ORDER — WORK IN THIS SEQUENCE

1. `tailwind.config.ts` — add brand colour tokens
2. `layout.tsx` — fonts, metadata, Navbar, Footer, WhatsAppButton
3. `/data/*.ts` — all data files (team, practice, matters, hero-config)
4. `page.tsx` (Home) — all 8 sections
5. `/practice/page.tsx`
6. `/people/page.tsx`
7. `/people/ali-almani/page.tsx`
8. `/people/[slug]/page.tsx` (other profiles)
9. `/about/page.tsx`
10. `/contact/page.tsx` + `/api/contact/route.ts`
11. SEO — metadata, sitemap, structured data
12. Performance pass — image optimisation, Lighthouse audit

---

*All copy in this file has been approved by Ali Almani. Do not alter any body text or case citations.*
*Last updated: February 2026*
