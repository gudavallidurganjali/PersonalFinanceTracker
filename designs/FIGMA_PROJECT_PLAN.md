# Figma Project Structure — Personal Finance Tracker

## 1. File Organization
```
PersonalFinanceTracker.figma/
├── 🎨 Design System
│   ├── Colors
│   ├── Typography
│   ├── Grid & Spacing
│   └── Component Library
├── 🧩 Components
│   ├── Core Components
│   └── Feature Components
├── 📱 Screens
│   ├── Overview (Dashboard)
│   ├── Budgets
│   └── Goals
└── 📋 Documentation
```

## 2. Design System Page

### Colors
Create color styles matching our tokens:
```
Brand/
├── primary (#6366F1)
└── accent (#3B82F6)

Semantic/
├── success (#10B981)
└── danger (#EF4444)

Surface/
├── background (#0F172A)
├── card (#0B1220)
└── muted (#9CA3AF)
```

### Typography
Create text styles:
```
Heading/
├── h1 (Inter Bold, 32px)
├── h2 (Inter Bold, 24px)
└── h3 (Inter Semibold, 18px)

Body/
├── regular (Inter Regular, 14px)
├── small (Inter Regular, 12px)
└── muted (Inter Regular, 12px, #9CA3AF)
```

### Grid & Spacing
Create layout grid:
- Desktop: 1100px max-width, 24px gutters
- Base spacing: 8px multiplier
- Auto-layout presets for common gaps (8px, 12px, 24px)

## 3. Component Library

### Core Components
```
Buttons/
├── Primary (filled, white text)
├── Ghost (transparent, muted text)
└── States (hover, active, disabled)

Cards/
├── Default
└── Elevated (hover state)

Forms/
├── Input
├── Select
└── Label
```

### Feature Components
```
Charts/
├── Pie Chart Frame (400x300)
└── Line Chart Frame (720x300)

Progress/
├── Standard
└── Small

Navigation/
├── Header
└── Nav Button
```

## 4. Screen Templates (Pages)

### Overview (1100x800)
- Header with nav
- Two-column layout
  - Left: Charts + Insights
  - Right: Add Expense Form

### Budgets (1100x800)
- Header with nav
- Budget cards with progress
- Edit states for cards

### Goals (1100x800)
- Header with nav
- Goals list with progress bars
- Edit states for items

## 5. Import Instructions

1. Import Design Tokens:
   - Use our existing `designs/figma-tokens-plugin.json`
   - Install "Figma Tokens" plugin
   - Create new Figma file
   - Open plugin and import JSON
   - Apply tokens to create color & text styles

2. Import Components:
   - Import `designs/frames/*.svg` as starting frames
   - Use imported tokens to style components
   - Create component variants (e.g., button states)

3. Import Assets:
   - Import `designs/logo.svg` for branding
   - Set up icon grid (24x24) for navigation icons

## 6. Responsive Considerations

Desktop (default):
- Container: 1100px max-width
- Two-column layout
- Persistent right sidebar

Tablet:
- Single column
- Stacked sections
- Full-width charts

Mobile:
- Single column
- Bottom sheet for forms
- Condensed header

## 7. Component States to Create

### Interactive States
```
Button/
├── Default
├── Hover
├── Active
├── Disabled
└── Loading

Input/
├── Default
├── Focus
├── Error
└── Disabled

Card/
├── Default
└── Hover (elevated)
```

### Data States
```
Charts/
├── Loading
├── Empty
└── Error

Progress Bars/
├── < 50%
├── 50-80%
└── > 80% (warning)
```

## 8. Design Token Structure

Match our React implementation:
```
colors/
├── primary
├── accent
├── success
├── danger
├── background
├── surface
└── muted

typography/
├── headline
├── subhead
├── body
└── caption

spacing/
├── base
├── gutter
└── radius
```

## Next Steps
1. Create new Figma file with this structure
2. Import tokens using Figma Tokens plugin
3. Create core component library
4. Build screen templates
5. Add responsive variants
6. Document component usage

Would you like me to:
1. Add specific component measurements and spacing
2. Generate a Figma-ready tokens export in a different format
3. Create more detailed screen layouts
4. Something else?