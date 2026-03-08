# Aditattva Technocrats

## Current State
- Full TCE/AECOM-grade website with sticky two-tier header, single static hero section (one background image + text + stats), industries section with photo grid, and all service/about/innovation/advantage/contact sections.
- Logo in Header.tsx uses an image file (`/assets/generated/aditattva-logo-transparent.dim_400x120.png`).
- HeroSection.tsx: single full-screen slide with one background image, headline, subheadline, CTAs, stats, and a service tag strip at bottom.
- IndustriesSection.tsx: photo card grid of 6 industries + ticker strip + client segments. No dedicated detail pages per sector.

## Requested Changes (Diff)

### Add
- **Hero slideshow**: Replace the static single-slide hero with a multi-slide carousel (4–5 slides). Each slide should have a distinct full-screen background image, unique headline/subheadline tied to a specific practice pillar (e.g. Engineering Design, Digital Transformation, PMC/PMO, ESG, Smart Systems), and smooth auto-advance with dot/arrow navigation — similar to TCE's rotating hero.
- **Industry Sector detail pages**: Each of the 10 industry sectors (from the company profile) gets a dedicated detail page/route. Each page includes:
  - Full-bleed hero banner with sector name and tagline
  - Overview paragraph (2–3 sentences on Aditattva's role in that sector)
  - Key services delivered in that sector (as a styled card/list)
  - Representative client segments served
  - A "Related Capabilities" section linking to relevant service practice areas
  - A CTA to contact
- **Navigation update**: Industries dropdown in the Header should link to each sector's detail page.
- **IndustriesSection grid**: Each industry card should be clickable and route to its detail page.

### Modify
- **Logo**: Remove the `<img>` logo element. Replace with bold stylized text that reads only "ADITATTVA" (no "Technocrats Private Limited" or sub-text). Use the existing gold/white brand colors and a strong display font.
- **Footer logo**: Apply the same text-only "ADITATTVA" treatment if a logo appears there.

### Remove
- Logo image reference in Header (replaced by text logo).

## Implementation Plan
1. Update `Header.tsx`: Replace `<img>` logo with a styled `<span>` or `<div>` showing only "ADITATTVA" in bold display text with gold accent.
2. Update `Footer.tsx`: Replace logo image (if present) with matching text logo.
3. Rewrite `HeroSection.tsx`: Build a full-screen slideshow with 4–5 slides, auto-advance every 5s, manual dot + arrow navigation, smooth crossfade transitions. Each slide tied to a Aditattva practice area with a distinct headline and matching background image.
4. Create `src/frontend/src/pages/` directory with individual sector pages (one TSX file per sector or a single `SectorPage.tsx` with route params).
5. Update `App.tsx`: Add React Router (or hash-based routing) to support sector detail pages while keeping the single-page homepage scroll behavior.
6. Update `IndustriesSection.tsx`: Make each industry card a link/button that navigates to its detail page.
7. Update `Header.tsx` NAV: Industries dropdown children `href` values point to sector routes.
8. Generate hero slide images for the new slides if needed.
