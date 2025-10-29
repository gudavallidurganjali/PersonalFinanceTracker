# Figma Design Spec — Personal Finance Tracker

This file documents the UI/UX system you can recreate in Figma. It contains tokens, component guidelines, screen layout, and interaction notes.

1) Color palette (use as Figma color styles)
  - Primary / Indigo: #6366F1
  - Accent: #3B82F6
  - Success: #10B981
  - Danger: #EF4444
  - Background: #0F172A
  - Card / Surface: #0B1220
  - Muted text: #9CA3AF

2) Typography
  - Headline: Inter Bold, 24-32px
  - Subhead: Inter Semibold, 16-18px
  - Body: Inter Regular, 14px
  - Caption: Inter Regular, 12px, muted color

3) Spacing & layout
  - Base spacing: 8px
  - Container max-width: 1100px
  - Border radius: 12px
  - Grid: two-column layout (content / aside) with 24px gutter

4) Components (create Figma components for each)
  - Header: brand (logo + app name) + nav buttons. Use auto-layout horizontal with 12px gap.
  - Card: surface with 12px radius, 16px padding, subtle inner shadow.
  - Button: primary (filled primary color, white text), ghost (transparent background, muted text).
  - Form: input, select and CTA. Inputs should have 8px radius and 1px subtle stroke.
  - Charts: Pie + Line placeholders, create frames sized 360x240.

5) Screens to build in Figma
  - Landing / Overview (Dashboard): hero with total balance, cards for charts, quick insights
  - Add Expense panel (right-side in desktop) as overlay or persistent panel
  - Budgets & Goals screens: list and progress card components

6) Interaction notes
  - Hover states: slightly elevate card (y -4px) and increase shadow opacity.
  - Mobile: collapse aside into bottom sheet.

7) Export assets
  - Logo: `logo.svg` (provided). Export icons used in navigation as 24px monochrome SVGs.

8) Handoff hints
  - Provide tokens (colors, typography, spacing) as Figma Styles.
  - Provide component variants for Button (default, hover, disabled) and Card (default, elevated).