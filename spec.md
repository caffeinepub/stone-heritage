# Stone Heritage

## Current State
Full-stack marketing website for Stone Heritage (Indian natural stone manufacturer/exporter). Has hero slider, products section, about, projects, contact form, footer with WhatsApp. Single-page React app with all sections in App.tsx.

## Requested Changes (Diff)

### Add
- Top bar with contact info (phone + email) and social icons
- Trust badges row: Certified Suppliers, Est. 1985, Quality Stones, 24/7 Support, Fast Delivery
- Mega-menu style navigation with dropdowns per stone category
- "Why Choose Us" section with 6 value pillars (Quality, Pioneers, Punctuality, Satisfaction, Integrity, Best Team)
- "Trending Products" section with horizontal cards (Kandla Grey, Rajgreen, Rippon Buff, Mint, etc.)
- "Browse Our Range" category tab section
- "Mining" image gallery section
- "Awards & Certifications" section with certification logos
- Client testimonials section
- Multi-column footer with Quick Links, Useful Links, contact details columns

### Modify
- Overall visual style to match umangstone.com: professional, earthy tones (stone greys, warm creams, dark navy/charcoal nav), clean typography
- Header layout: top utility bar + main nav bar with logo centered or left
- Hero section: full-width with overlay text
- Products section: card layout with subcategory dropdown/tabs
- Projects section: carousel cards with year/quantity/material details
- Contact section: two-column (India office) with form
- Footer: dark background, multi-column with logo + tagline

### Remove
- Nothing to remove — enhance existing content with new layout

## Implementation Plan
1. Redesign header with top utility bar + trust badges row + mega-menu nav
2. Keep hero slider (existing images), update overlay text and CTA buttons style
3. Add Why Choose Us section (6 pillars grid)
4. Restructure Products into Trending Products cards + Browse By Category section
5. Add Mining gallery section (use existing quarry/mine images)
6. Add Awards & Certifications section (generate cert placeholder images or use badges)
7. Keep Projects section, update to carousel card format with project details
8. Add testimonials section (3 client reviews)
9. Update Contact section to two-column layout
10. Redesign footer to dark multi-column format
11. Maintain all existing WhatsApp quote button functionality
12. Maintain image zoom modal functionality
