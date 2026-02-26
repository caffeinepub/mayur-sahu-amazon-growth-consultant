# Specification

## Summary
**Goal:** Merge the standalone LeadMagnetSection into StrategyCallSection as a third box, creating a single-row three-box layout, and remove the standalone section from the page.

**Planned changes:**
- Rewrite `StrategyCallSection.tsx` to use a three-box single-row layout (stacks vertically on mobile):
  - Box 1 — "Schedule Your Call": Calendly placeholder widget, "Schedule Call Now" gold CTA button, and "Chat on WhatsApp" green button
  - Box 2 — "Send a Message": existing contact form (Name, Email, Amazon Store URL, Send Message button) with submission success state
  - Box 3 — "7 Profit Killers in Amazon PPC": description text, email input, "Get Free PDF" gold CTA button, and success message state
- All three boxes use glassmorphism card styling with gold border accents matching the existing design system
- Section heading, supporting text, background color (#0D1526), and gold accent top border are retained
- Remove the standalone `LeadMagnetSection` component and its adjacent `SectionConnector` from `App.tsx`
- Remove the `LeadMagnetSection` import from `App.tsx`

**User-visible outcome:** The page is more compact — the "7 Profit Killers" lead magnet content now appears side-by-side with the scheduling and contact form boxes inside the Strategy Call section, eliminating the separate section and reducing vertical page length.
