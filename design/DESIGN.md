---
name: Lumina Flow
colors:
  surface: '#f9f9f8'
  surface-dim: '#d9dad9'
  surface-bright: '#f9f9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f2'
  surface-container: '#edeeed'
  surface-container-high: '#e8e8e7'
  surface-container-highest: '#e2e3e1'
  on-surface: '#1a1c1c'
  on-surface-variant: '#404847'
  inverse-surface: '#2f3130'
  inverse-on-surface: '#f0f1f0'
  outline: '#717977'
  outline-variant: '#c0c8c7'
  surface-tint: '#3b6663'
  primary: '#3b6663'
  on-primary: '#ffffff'
  primary-container: '#b2dfdb'
  on-primary-container: '#396461'
  inverse-primary: '#a2cfcb'
  secondary: '#516161'
  on-secondary: '#ffffff'
  secondary-container: '#d4e6e5'
  on-secondary-container: '#576867'
  tertiary: '#7c563e'
  on-tertiary: '#ffffff'
  tertiary-container: '#ffccae'
  on-tertiary-container: '#7a543d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#beebe7'
  primary-fixed-dim: '#a2cfcb'
  on-primary-fixed: '#00201e'
  on-primary-fixed-variant: '#224e4b'
  secondary-fixed: '#d4e6e5'
  secondary-fixed-dim: '#b8cac9'
  on-secondary-fixed: '#0e1e1e'
  on-secondary-fixed-variant: '#3a4a49'
  tertiary-fixed: '#ffdbc8'
  tertiary-fixed-dim: '#eebc9f'
  on-tertiary-fixed: '#2f1503'
  on-tertiary-fixed-variant: '#613f29'
  background: '#f9f9f8'
  on-background: '#1a1c1c'
  surface-variant: '#e2e3e1'
typography:
  display-xl:
    fontFamily: Manrope
    fontSize: 64px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-pill:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  unit: 8px
  container-padding: 40px
  gutter: 24px
  section-gap: 80px
  card-internal: 32px
---

## Brand & Style

The brand personality for this design system is defined by "Effortless Intelligence." It aims to evoke a sense of calm, precision, and high-end sophistication. The target audience consists of modern enterprise teams and digital creators who value clarity over clutter. 

The aesthetic sits at the intersection of **Minimalism** and **Modern Corporate**, utilizing expansive whitespace to reduce cognitive load while employing premium tactile details—like hyper-smooth corner smoothing and layered translucency—to signify quality. The visual narrative avoids the "busy" nature of traditional automation tools, opting instead for a breathable, gallery-like experience that makes complex workflows feel manageable.

## Colors

The palette is anchored by a high-contrast foundation of **Deep Black (#1A1A1A)** on a **Pure White (#FFFFFF)** or **Soft Gray (#F8F9FA)** base. This ensures maximum readability and a professional "ink-on-paper" feel.

The accent strategy utilizes a soft mint-to-teal gradient. This is not used for primary actions—which remain high-contrast black for authority—but rather as a "success" indicator, an "active state" highlight, or a subtle decorative element to represent the fluid nature of automation. Use the gradient sparingly to maintain the system's premium, minimal atmosphere.

## Typography

This design system uses a dual-font approach to balance personality with utility. **Manrope** is reserved for headlines and display text, providing a refined, modern geometric character that feels premium. **Inter** is utilized for all body copy, inputs, and UI labels due to its exceptional legibility and neutral, systematic nature.

Tracking is slightly tightened on larger headlines to maintain a cohesive visual block, while body text maintains standard spacing to ensure breathability. All labels should be rendered with a medium or semi-bold weight to stand out against the minimal UI.

## Layout & Spacing

The layout philosophy follows a **Fixed-Fluid Hybrid** model. Content is housed within a 12-column centered grid with a maximum width of 1440px. However, the internal spacing is intentionally "oversized" to create a sense of luxury and calm.

A strict 8px soft-grid governs all dimensions. Use large margins (40px+) at the edges of the screen to prevent the UI from feeling cramped. Elements within a group (like a card's header and description) should use a 12px or 16px gap, while distinct functional blocks should be separated by at least 48px to 80px.

## Elevation & Depth

Hierarchy is established through **Ambient Shadows** and tonal layering. This system avoids harsh borders in favor of soft, diffused shadows that simulate a light source directly above the interface.

- **Level 1 (Cards/Inputs):** A subtle 4px blur with 2% opacity (#000000) to lift the element off the background.
- **Level 2 (Dropdowns/Modals):** A 24px blur with 8% opacity to create distinct separation.
- **Surface Layering:** Elements often sit on the #F8F9FA background, with primary content areas using #FFFFFF to create a natural, "stacked paper" depth without requiring heavy lines.

## Shapes

The shape language is the most distinctive aspect of this design system. It utilizes an ultra-rounded approach to soften the technical nature of "automation." 

Main containers and cards must use a **24px to 32px corner radius**. Small interactive elements like buttons and status labels should be **fully rounded (pill-shaped)**. This consistency in curvature creates a friendly, approachable aesthetic that differentiates the product from more rigid, traditional SaaS competitors.

## Components

### Buttons
Primary buttons are high-contrast: #1A1A1A background with White text. They are pill-shaped and utilize a subtle scale-down effect (0.98) on click. Secondary buttons use the mint gradient as a background with a deep green text for a softer interaction.

### Cards
Cards are the primary container. They feature a white background, 24px radius, and a 1px border in #EDF0F2 (or a very soft shadow). Padding inside cards must be generous (minimum 32px).

### Pill Labels
Used for status and tagging. These are fully rounded, using a light tint of the accent color (#E0F2F1) with dark text. They should never have a border.

### Input Fields
Inputs use the #F8F9FA background to distinguish them from the white cards they sit on. They feature a 16px radius and a subtle focus transition where the border glows in the primary mint color.

### Icons
Use 2px stroke, line-based icons. Icons should never be filled; they must remain airy and minimal to match the typography.