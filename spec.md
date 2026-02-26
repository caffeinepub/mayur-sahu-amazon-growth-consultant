# Specification

## Summary
**Goal:** Fix flag emoji and country name rendering issues in the GlobalServiceSection component of the ProSellers app.

**Planned changes:**
- Rewrite `GlobalServiceSection.tsx` to define the four countries (United States, United Kingdom, Canada, Australia) as a plain JavaScript array with explicit `emoji` and `name` string literals
- Render each flag emoji in a `<span>` with an inline `font-family` style that includes `Apple Color Emoji`, `Segoe UI Emoji`, `Noto Color Emoji`, and other emoji font fallbacks
- Render each country name as a plain `<span>` with a hard-coded string literal (no template literals, no Unicode character codes)
- Retain existing glassmorphism card styling with gold border accents and scroll-triggered entrance animations

**User-visible outcome:** All four flag emojis (🇺🇸 🇬🇧 🇨🇦 🇦🇺) and country names display correctly without squares or tofu characters on Chrome, Firefox, Safari, and Edge across desktop and mobile.
