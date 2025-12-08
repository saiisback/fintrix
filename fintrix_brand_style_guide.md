# Fintrix — Brand & Design Style Guide

> Clean, confident, and precise visual language for Fintrix — an intelligent finance & trading education platform.

---

## Overview
Fintrix’s identity combines professional financial trust with a modern, technical aesthetic. The visual system emphasizes clarity, modular layouts, and a restrained color palette to support data-heavy interfaces (dashboards, charts, simulators) while remaining approachable for learners.

This document contains:
- Brand marks and usage
- Color palette (primary + accents)
- Typography
- Tone & personality
- Layout and spacing
- Imagery and visual elements
- UI components and styles
- Accessibility and export notes
- Implementation snippets (CSS / Tailwind variables)

---

## Brand Marks
### Primary mark
- Use the full wordmark `Fintrix` with the arrow/graph motif as the primary identity on dark or light backgrounds.
- Minimum clear space: 1x height of the `x` in the logotype on all sides.
- Do not distort, recolor, or add drop shadows to the primary mark.

### Secondary mark (shield/monogram)
- Use the shield mark for app icons, favicons, or compact placements where the full wordmark is impractical.
- Keep the shield isolated on solid backgrounds and center it in the safe area.

---

## Color Palette
Primary colors (use these in UI and branding):

- **Deep Charcoal** — `#222222` (Brand neutral; primary text, UI shells)
- **Subtle Blue** — `#0063b3` (Primary action color; buttons, links)
- **Clean White** — `#ffffff` (Backgrounds, cards)
- **Soft Grey** — `#f4f4f4` (Surfaces, dividers)
- **Success Green** — `#28a745` (Positive states, success badges)

### Usage guidance
- Primary CTA: Subtle Blue on Clean White or Deep Charcoal (inverted) for strong contrast.
- Secondary / ghost CTA: Deep Charcoal border on Clean White with subtle hover (background Soft Grey).
- Alerts & success: Success Green for confirmations; reserve bright reds only for critical errors.
- Charts: Prefer blue scale with accent green for positive, darker grey for neutral.

---

## Typography
Use a geometric, modern sans-serif for clean legibility across UI and marketing.

- **Headings:** `Fintrix Financial Technology` (Semi-Bold, 32px)
- **Subheadings:** `Secure and Intelligent Finance` (Medium, 18px)
- **Body:** System UI or `Inter` / `Roboto` alternative (Regular, 14px)

### Scales
- H1: 48px / 56px line-height
- H2: 32px / 40px line-height
- H3: 24px / 32px line-height
- Body: 14px / 20px line-height
- Small / Meta: 12px / 16px line-height

### Weights
- Regular 400 — body copy
- Medium 500 — subheadings, small UI emphasis
- Semi-Bold 600 — primary headings

---

## Brand Tone & Personality
- **Calm. Confident. Expert. Precise.**
- Language should be direct and instructional: short sentences, command/benefit-first headlines.
- Avoid jargon in consumer-facing places; provide definitions in the glossary.

Sample phrase: *Simplifying finance with intelligence.*

---

## Spacing & Layout Style
Design uses an airy, grid-based system with ample white space to let charts and tables breathe.

- Base grid: 8px increments
- Container max-width: 1200–1400px for desktop
- Navigation height: 64px
- Card padding: 16px–24px
- Gutter between columns: 24px

Component layout examples:
- Section spacing: 72px top / 48px bottom on desktop
- Card spacing: 16px internal padding, 12px border-radius (soft)
- Chart panels: strong visual hierarchy — title, toolbar, chart area, footer metrics

---

## Imagery & Visual Elements
- Use line-based abstract charts and grid patterns for banners and backgrounds (subtle, low-contrast strokes).
- Data visualizations: use clear axes, minimal gridlines, and single-tone fills with accent highlights.
- Avoid photographic clutter. When using photography, prefer monochrome or desaturated palettes with blue overlays.

Image examples:
- Banner subtle graph sketches: thin blue strokes on soft grey or white background.
- Card illustrations: isometric line charts in faint blue with light shadows.

---

## UI Components & Styles
Below are core UI elements with behavior guidance.

### Buttons
- **Primary:** Background `#0063b3`, text `#ffffff`, border-radius 8px, padding `8px 16px`.
- **Secondary:** Transparent background, border `1px solid #222222`, text `#222222`.
- **Ghost:** Text-only link style, underline on hover.
- Disabled: `opacity: 0.4; pointer-events: none`.

### Inputs
- Background: `#ffffff`, border: `1px solid #e6e6e6`, focus: `box-shadow: 0 0 0 3px rgba(0,99,179,0.08)`
- Height: 44px; padding: `0 12px`.

### Cards
- Background: `#ffffff`; border-radius: 12px; box-shadow: `0 6px 18px rgba(34,34,34,0.04)`; padding: 16–24px.

### Tables & Lists
- Use zebra rows only when density requires it; favor compact numeric columns with right alignment.
- Column sorting: small chevron icon; active sort color `#0063b3`.

### Badges & Tags
- Success: background `#e9f7ef`, text `#28a745`.
- Neutral: background `#f4f4f4`, text `#222222`.

### Charts
- Primary series: `#0063b3` (Subtle Blue)
- Positive fill: `#28a745` (Success Green)
- Gridlines: `rgba(34,34,34,0.06)`
- Tooltip background: `#222222`, text: `#ffffff`, border-radius: 8px.

---

## Accessibility
- Color contrast: ensure primary text on background meets WCAG AA at minimum (contrast ratio ≥ 4.5:1).
- Interactive targets: minimum 44x44px
- Keyboard navigation: support tab order and skip-to-content link.
- Captions & transcripts: all videos must include captions; charts should include accessible descriptions (aria-labels).

---

## Export & Asset Guidelines
- Logos: provide SVG (primary + secondary) and PNG at 2x/3x sizes.
- Icons: use a single icon set (line icons) and provide as SVG sprite.
- Charts: export in SVG for crisp rendering and accessibility.

---

## Implementation Snippets
### CSS variables
```css
:root {
  --color-deep-charcoal: #222222;
  --color-subtle-blue: #0063b3;
  --color-white: #ffffff;
  --color-soft-grey: #f4f4f4;
  --color-success: #28a745;

  --font-sans: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
  --radius-card: 12px;
}
```

### Tailwind sample (tailwind.config.js)
```js
module.exports = {
  theme: {
    extend: {
      colors: {
        'deep-charcoal': '#222222',
        'subtle-blue': '#0063b3',
        'soft-grey': '#f4f4f4',
        'success-green': '#28a745'
      },
      borderRadius: {
        'lg-card': '12px'
      }
    }
  }
}
```

### Button example (HTML)
```html
<button class="btn-primary">Start Learning</button>
<style>
.btn-primary{
  background: var(--color-subtle-blue);
  color: var(--color-white);
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  font-weight: 600;
}
</style>
```

---

## Sample Applications & Mockups (usage notes)
- **Landing hero:** light background with thin-line graph illustration and primary CTA on the left; quick stats on the right.
- **App icon / favicon:** use secondary shield mark on subtle blue background or white inverted.
- **Business card:** deep charcoal background with subtle-blue logo and contact lines in soft grey.
- **Banner:** repeat faint line-graph patterns with a gradient from white → soft-grey.

---

## Content & Copy Guidelines
- Headline style: concise benefit-first headlines.
- Body copy: explain features, then show benefit: "Learn the strategy → practice in simulator → earn certificate."
- Microcopy: use imperative verbs for CTAs: "Start Module" "Run Simulation" "Request Mentor Review"

---

## Final Notes
- Maintain consistent rhythm: 8px grid, modular cards, and ample breathing room for charts.
- Preserve legibility across dense dashboards; use soft-grey backgrounds to separate panels.

---

For handoff, include: SVG logos, font license info, a tokenized Tailwind config, and a sample component library (React) implementing the color tokens and button/input system.

