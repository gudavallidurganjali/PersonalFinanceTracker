# Figma Design Flow — Adapted from Durga Portfolio (linked)

This document translates the visual structure and interaction flow of the provided Figma portfolio link into a Figma-ready design flow for the PersonalFinanceTracker app. Use this as a blueprint to build the Figma file, components, pages, and prototype interactions.

## Quick goals

- Recreate the portfolio file's clear hierarchical layout and polished component styling for a finance app.
- Keep interactions minimal and focused: overview (dashboard), budgets, goals, add/edit expense flows, settings/profile.
- Use existing tokens (see `designs/figma-tokens-complete.json`) as the single source of truth.

## Top-level Figma file structure (recommended)

- Pages
  - 01 — Cover & Notes
  - 02 — Design System
    - Colors
    - Typography
    - Spacing / Grid
    - Tokens (imported from JSON)
    - Icons
    - Elevation & Shadows
  - 03 — Components
    - Navigation (Top nav, side nav)
    - Cards (Dashboard card, Budget card, Goal card)
    - Forms (Expense form, Budget form)
    - Charts (Line, Pie, Sparkline)
    - Controls (Buttons, Selects, Date pickers, Toggles)
    - Modals / Sheets
  - 04 — Screens
    - Dashboard (Desktop / Tablet / Mobile)
    - Budgets
    - Goals
    - Transactions (List / Details)
    - Add Expense (Modal / Full screen)
    - Settings / Profile
  - 05 — Prototypes
    - Flow maps and interactive links
  - 06 — Assets / Exports
    - SVGs and optimized PNG frames

## Frame sizes and grid

- Desktop (main): 1440 × auto (use 1100px centered container width matching tokens.container)
- Desktop (app canvas, content): 1100px content width inside 1440 frame
- Tablet: 1024 wide
- Mobile: 375 × 812 (iPhone 12 size) — use vertical stacks and sheet modals
- Columns: 12-column grid for desktop with 24px gutter (token: gutter)

## Navigation & Layout (mapping from portfolio flow)

- Global header (top) or left rail depending on viewport.
  - Left rail (desktop): compact icon column + logo + nav labels when expanded.
  - Top bar (mobile): hamburger + page title + quick add (+) CTA.
- Primary pages (visible in nav): Overview (Dashboard), Budgets, Goals, Transactions, Settings.
- Secondary actions: Quick Add Expense (prominent CTA), Date Range selector on Dashboard.

## Screen-by-screen design flow

1. Dashboard (Overview) — main landing
   - Hero area: Current balance (large typographic H1), quick summary chips (today spent, monthly budget used)
   - Date range selector: Day / Week / Month / Custom
   - Trend chart: Line chart (expenses over time) — interactive hover with tooltip
   - Category breakdown: Pie chart and list of top categories with color swatches
   - Recent Transactions: compact list with avatars/icons, amount (color-coded), and quick edit action
   - Quick actions: Add Expense, Add Budget, Set Goal

   Prototype links:
   - Clicking a category -> filter transactions (open transactions page with category filter)
   - Click transaction -> open transaction detail modal
   - Click Add Expense -> open Add Expense modal (overlay)

2. Budgets
   - Grid/list of Budget cards. Each card shows name, allocated amount, spent, progress bar.
   - Card actions: Edit, Increase Allocation, View Transactions
   - Empty state: illustration and CTA to create a new budget

   Prototype links:
   - Create/Edit -> open Budget form modal
   - Click 'View' -> replace main content with Budget detail / list of related transactions

3. Goals
   - Similar to Budgets: Goal cards with progress ring, target date, monthly contribution
   - CTA: Add Goal
   - Detail: Timeline or projected completion chart

4. Transactions
   - Table/list view (sortable by date/amount/category)
   - Filters: date range, category, amount range
   - Bulk actions: export CSV, delete multiple

5. Add / Edit Expense (Modal)
   - Fields: Amount, Category (select with icons), Date (date picker), Account, Notes, Attach receipt (optional)
   - Primary action: Save
   - Secondary: Save & Add another

6. Settings / Profile
   - Theme toggle (Light/Dark), currency, notification settings, import/export data

## Component library mapping (names recommended)

- App / Shell
  - app/shell/left-rail
  - app/shell/topbar
- Navigation
  - nav/item/default
  - nav/item/active
  - nav/divider
- Cards
  - card/dashboard/summary
  - card/budget/simple
  - card/goal/simple
- Forms
  - form/field/label
  - form/field/input
  - form/select/with-icon
  - form/datepicker
  - form/field/textarea
- Buttons
  - btn/primary
  - btn/secondary
  - btn/ghost
  - fab/quick-add
- Charts
  - chart/line
  - chart/pie
  - chart/sparkline
- Data display
  - list/transaction-item
  - badge/status (success/danger/muted)
- Overlays
  - modal/simple
  - sheet/bottom
- Tokens (use existing tokens file)
  - color/*
  - text/*
  - spacing/*
  - radius/*

## Interaction & Prototyping guidelines (to replicate portfolio flow behavior)

- Use simple transitions: 150–250ms ease-in-out for modal entry, 80–120ms for hover states.
- For charts, simulate hover tooltips using overlay frames and set them as interactive components in Prototype.
- Connect Dashboard quick actions to overlays and relevant pages with "On Click -> Open Overlay" or "Navigate to".
- For stateful flows (filters, date range), create alternate frames showing the filtered state and link via "On Click -> Swap with" to simulate dynamic UI.

## Tokens mapping & styling notes

Use `designs/figma-tokens-complete.json` as the base tokens import. Suggested component token usage:

- Primary brand color -> used for primary buttons and chart accents (`global.color.brand.primary`)
- Accent -> CTA highlights and active nav (`global.color.brand.accent`)
- Success/Danger -> progress bars and expense color coding
- Background / Card -> page background and card surfaces
- Typography: h1,h2,h3 and body/regular/small map to headlines and body copy
- Spacing: base/grid/gutter -> layout spacing and card padding

If you need additional tokens (e.g., chart color palette for categories), create:
- color.chart.category.1..8 with distinct hues and accessible contrast.

## Accessibility recommendations

- Ensure text contrast >= 4.5:1 for body copy and 3:1 for large headlines.
- Provide keyboard navigation mapping in prototyping notes (Tab flow order for forms).
- Include aria-like labels in component metadata (use Figma component descriptions to store accessibility notes).

## Naming conventions & versioning

- Use `component/name/state` (e.g., `btn/primary/hover`).
- Prefix global tokens with `global.` or `alias.` when exporting to Figma Tokens plugin.
- Maintain a CHANGELOG page in the Figma file with version tags and component updates.

## Export & Handoff

- Tokens: Import `designs/figma-tokens-complete.json` into Figma via the Tokens Studio plugin.
- Assets: Keep icons as optimized SVGs in `Assets/Icons` and export 1x, 2x PNGs for raster needs.
- Screens: Export PNGs at 1x and 2x for mobile screenshots and 1x for desktop thumbnails.
- Use naming pattern for export: `page-screen_variant@1x.png` (e.g., `dashboard-desktop@1x.png`).

Automation notes:
- For scripted exports, prefer the following approach:
  1. Build app pages locally and open them in a headless browser script (puppeteer/playwright) to capture clean screenshots of the running app.
  2. Or export frames from Figma via the REST API using file and node IDs (requires Figma API token).

## Prototype flow map (textual)

- Start: `Cover` -> `Dashboard` (Landing)
- Dashboard quick add (+) -> `Add Expense` (Modal)
- Dashboard category chip -> `Transactions` (filtered)
- Dashboard -> `Budgets` (nav) -> budget card -> `Budget edit` (modal)
- Dashboard -> `Goals` (nav) -> goal card -> `Goal detail`
- Header profile -> `Settings` -> theme/currency controls

When building the prototype, create small hotspots on chart points and category chips that link to the relevant state frames. Use "Smart Animate" for smooth transitions between similar frames.

## Handoff checklist for developers

- [ ] Import tokens JSON into Figma Tokens plugin and verify token names match project variable names.
- [ ] Export component library as a shared library (publish) so devs can inspect layout and CSS properties.
- [ ] Provide example CSS/SCSS variables or Tailwind token mappings (optional — ask if needed).
- [ ] Export SVG icons and include React-friendly names and kebab-case filenames (e.g., `icon-category-food.svg`).

## Practical next steps (what I can do next for you)

1. Create a ready-to-import Figma file structure (blank frames and placeholder components) inside `designs/figma-frames/` to match this plan.
2. Generate a small set of category color tokens (8 colors) for chart/legend usage and add them to `figma-tokens-complete.json`.
3. Build a short puppeteer or Playwright script to screenshot the running routes (`/`, `/budgets`, `/goals`) and save them into `designs/screenshots/` for quick upload to Figma.

Tell me which of the three actions above you'd like me to do next and I will proceed—I'll start by creating the files and/or scripts immediately.

---

_File created: `designs/FIGMA_FLOW_FROM_LINK.md` — contains the full adapted flow and instructions for building the Figma file._