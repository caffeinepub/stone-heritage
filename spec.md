# Stone Heritage

## Current State
The site uses a navy (#1a2332) + warm amber (#d4760a) + sand (#f8f5f0) color palette throughout index.css and App.tsx (hardcoded hex values). Fonts are Roboto + Oswald via Google Fonts.

## Requested Changes (Diff)

### Add
- New premium color palette: deep forest green (#1b3a2d) as the primary dark color, polished gold (#c9a84c) as the accent, and warm ivory (#f7f4ef) for light backgrounds
- Updated font pairing: Playfair Display (headings) + General Sans (body) from pre-bundled woff2 files

### Modify
- index.css: Update OKLCH tokens, @font-face declarations, body font, btn-cta color, and all hardcoded color references
- App.tsx: Replace all instances of #1a2332 → #1b3a2d (deep green), #d4760a → #c9a84c (polished gold), #b85f05 → #a8882e (gold hover), #b07d3a → #c9a84c, #f8f5f0 → #f7f4ef, #f0ece5 → #f0ece2
- Tailwind config: Update primary/accent color references if present

### Remove
- Google Fonts import for Roboto/Oswald (replace with pre-bundled fonts)

## Implementation Plan
1. Update index.css: new OKLCH tokens, @font-face for Playfair Display + General Sans, update btn-cta, product-card, nav-dropdown colors
2. Update App.tsx: global search-replace all hardcoded hex colors to new palette
3. Validate and build
