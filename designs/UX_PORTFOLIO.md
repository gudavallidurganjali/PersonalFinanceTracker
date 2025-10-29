# UX Case Study — PersonalFinanceTracker

A complete UX portfolio write-up for the PersonalFinanceTracker application. Use this as a standalone case study in your portfolio or adapt sections into a Figma presentation.

---

## Title
PersonalFinanceTracker — Simple, Insightful Budgeting & Goals

Role: Product Designer / UX Lead
Timeline: 4–6 weeks (MVP design + iterative polish)
Tools: Figma, Tokens Studio, React (implementation), Chart.js, localStorage
Links:
- Figma reference used for style & flow: https://www.figma.com/design/hMNnlE0oaf1Wg62tP4X0Am/Durga_Portfolio_Web?node-id=3-2480
- Project tokens: `designs/figma-tokens-complete.json`
- Design flow doc: `designs/FIGMA_FLOW_FROM_LINK.md`

---

## 1. Project overview

Problem: Many people struggle to keep track of spending, budgets, and progress toward savings goals. Existing apps are either too complex or too shallow.

Opportunity: Provide a focused, privacy-first personal finance app that surfaces actionable insights (trends, category breakdowns) and makes budgets/goals easy to create and maintain.

Target outcome:
- Help users quickly see their balance, month-to-date spending, and budget health.
- Make adding and categorizing expenses frictionless.
- Give clear progress indicators for budgets and savings goals.

Success metrics (MVP):
- 90% of test users can add an expense and categorize it in under 30s.
- Users who set at least one budget engage with the app weekly (DAU/MAU improvement target).
- NPS or qualitative satisfaction >= 4/5 in usability testing.

Constraints:
- Offline-first (local storage) for privacy and quick onboarding.
- Small app size and fast load (Vite + React).
- Accessible color contrast and keyboard-first interactions.

Audience:
- Young professionals tracking monthly expenses
- Families managing monthly budgets
- Freelancers tracking income/expenses for tax/time

---

## 2. Research summary & personas

(If you have actual research, replace the assumptions below with real findings. These are realistic personas for a finance tracker.)

Persona 1 — Maya, 28, Marketing Coordinator
- Goals: See monthly spending, stop overspending on dining out, save for a holiday.
- Tech: Mobile-first, prefers quick entries and automatic categorization suggestions.
- Pain points: Receipts pile up, forgets to categorize; current apps feel bloated.

Persona 2 — Daniel, 36, Freelance Developer
- Goals: Track business vs personal expenses, set budgets per project, export CSV for taxes.
- Tech: Desktop-first, cares about reliable export and filtering.
- Pain points: Manual reconciliation is slow, needs clear export options.

Persona 3 — Priya, 34, Parent
- Goals: Manage household budget, monitor recurring bills, set saving goals for kids' education.
- Tech: Uses both mobile and desktop, needs clear visuals and reminders.
- Pain points: Overwhelmed by too many metrics; prefers simple progress indicators.

Key insights (assumed):
- Users value speed and clarity over feature-completeness.
- Visual progress (bars/rings) motivates maintenance of budgets and goals.
- Undo and easy edit of transactions reduces anxiety about mistakes.

---

## 3. Problem statements & design goals

Problem statement 1: Users forget to categorize expenses, making budgets inaccurate.
- Design goal: Make categorization fast with smart defaults and one-tap edits.

Problem statement 2: Users can’t quickly see the trends causing overspending.
- Design goal: Surface trends and top categories in the dashboard with tooltips and drill-downs.

Problem statement 3: Creating budgets and goals feels confusing.
- Design goal: Provide templates, progress visuals, and simple monthly contribution suggestions.

Prioritization (RICE-ish):
- Add/edit transaction speed (Reach: high, Impact: high) — priority: P0
- Dashboard trend clarity and drill-down (Reach: high, Impact: high) — priority: P0
- CSV export / tax-friendly features (Reach: moderate, Impact: medium) — priority: P1

---

## 4. Key user journeys

Below are core flows to design and prototype.

1) Quick Add Expense (Mobile-first)
- Entry: Tap "+" FAB from any screen
- Steps: Amount -> suggested category -> date (default today) -> Save
- Success: Expense appears in Recent Transactions and updates charts/budgets

2) Create a Budget
- Entry: Budgets screen -> "Create Budget"
- Steps: Name, category (optional multiple), amount, period (monthly), start date
- Success: Budget card appears with progress bar and calculated monthly spend

3) Track a Goal
- Entry: Goals -> New Goal
- Steps: Goal name, target amount, monthly contribution (optional)
- Success: Goal card shows progress ring and projected completion date

4) Investigate Overspending
- Entry: Dashboard -> Tap "Top categories"
- Steps: See pie chart -> Tap a category -> Transactions filtered by category -> Option to re-categorize or add to budget
- Success: User identifies top cost drivers and creates budgets or adjusts behavior

---

## 5. Information architecture (screen list)

- Onboarding (optional): Quick setup: currency, initial balance, connect sample data
- Dashboard / Overview
- Transactions (list & detail)
- Budgets (list & detail)
- Goals (list & detail)
- Add Expense (modal / sheet)
- Settings / Profile

Navigation
- Desktop: Left rail with icons + labels, content in center container (1100px)
- Mobile: Top bar + bottom FAB for quick add

---

## 6. Low-fidelity wireframes (descriptions)

Note: These are textual wireframes — I can generate placeholder Figma frames if you want.

Dashboard (desktop):
- Top area: Balance card (H1), quick stats chips
- Left: Small nav rail
- Main: Trend chart (line) with date selector above; below, two-column: pie chart + recent transactions list
- Right: Quick actions & budgets summary

Add Expense (mobile modal):
- Amount input (big, autofocus)
- Category selector with icons/suggestions (autocomplete)
- Date picker + receipt (optional)
- Save & Cancel buttons; Save & Add Another secondary link

Budgets screen (list):
- Grid of budget cards showing progress bars
- Each card: name, allocated, spent, remaining, quick edit

Goals (list):
- Card with progress ring, monthly suggested contribution, CTA to adjust or add contribution

---

## 7. Visual & Interaction design

Design language: Clean, modern, slightly dark/neutral surface with brand purple accents (see `designs/figma-tokens-complete.json`).

Components & states:
- Buttons: Primary (brand), secondary (ghost), disabled (muted)
- Inputs: filled/outline variants, focus ring using brand.accent
- Cards: surface.card background, radius.md, shadowMd for elevation
- Charts: accessible color palette for categories, interactive tooltip states

Animation & microinteractions:
- Modal entry: 180ms ease-out + subtle scale (0.98 -> 1)
- Hover effects: 80ms fade + translateY(-2px)
- Chart hover: tooltip fade-in (120ms) and focus ring on hovered item

Tokens mapping highlights:
- Use `global.color.brand.primary` for CTAs and chart accents
- Use `global.color.surface.card` for card backgrounds
- h1/h2/h3 and body typography tokens should map 1:1 to Figma text styles

Accessibility:
- Ensure 4.5:1 contrast for body text and 3:1 for large headings
- Keyboard focus states present for all actionable elements
- Semantic naming and component descriptions in Figma for developer handoff

---

## 8. Prototype & Handoff deliverables

Deliverables for a clean handoff:
- Figma file with pages: Design System, Components, Screens, Prototypes (see `designs/FIGMA_FLOW_FROM_LINK.md`)
- Tokens JSON for import into Tokens Studio: `designs/figma-tokens-complete.json`
- Exported assets: icons (SVG), screenshots (PNG 1x/2x)
- Component documentation: usage, props, interaction notes
- Developer notes: API contract for transactions, budgets, and goals (shape of objects)

Example component spec (for developers):
- Transaction object:
  - id: string
  - amount: number (cents)
  - date: ISO 8601
  - category: string
  - note: string
  - account: string
- Budget object:
  - id: string
  - name: string
  - amount: number
  - period: 'monthly' | 'weekly'
  - categories: string[]

---

## 9. Measurement plan & next steps

Key metrics to track after launch:
- Time-to-add-expense (goal: < 30s)
- Number of budgets created per active user
- Weekly active users of users who created at least one budget
- Retention after 7 and 30 days

Next design iterations (after MVP launch):
- Micro-copy test for on-boarding and expense entry
- Smart suggestions for categorization using pattern detection
- CSV export and import flows

---

## 10. Appendix — assets & templates

Files included in repo:
- `designs/figma-tokens-complete.json` — tokens to import into Figma Tokens Studio
- `designs/FIGMA_FLOW_FROM_LINK.md` — design flow adapted from the portfolio link
- `designs/UX_PORTFOLIO.md` (this file)

Suggested assets to add (I can generate):
- Placeholder Figma frames for key screens: `designs/figma-frames/` (dashboard, budgets, goals, add-expense)
- Sample screenshots via script: `designs/screenshots/` (dashboard-desktop, budgets-desktop, goals-desktop)

---