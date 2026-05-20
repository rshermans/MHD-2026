---
name: Lumina Research Narrative
colors:
  surface: '#111318'
  surface-dim: '#111318'
  surface-bright: '#37393e'
  surface-container-lowest: '#0c0e12'
  surface-container-low: '#1a1c20'
  surface-container: '#1e2024'
  surface-container-high: '#282a2e'
  surface-container-highest: '#333539'
  on-surface: '#e2e2e8'
  on-surface-variant: '#bac9cc'
  inverse-surface: '#e2e2e8'
  inverse-on-surface: '#2f3035'
  outline: '#849396'
  outline-variant: '#3b494c'
  surface-tint: '#00daf3'
  primary: '#c3f5ff'
  on-primary: '#00363d'
  primary-container: '#00e5ff'
  on-primary-container: '#00626e'
  inverse-primary: '#006875'
  secondary: '#bdc2ff'
  on-secondary: '#1b247f'
  secondary-container: '#343d96'
  on-secondary-container: '#a8afff'
  tertiary: '#ececec'
  on-tertiary: '#2f3131'
  tertiary-container: '#d0d0d0'
  on-tertiary-container: '#575959'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#9cf0ff'
  primary-fixed-dim: '#00daf3'
  on-primary-fixed: '#001f24'
  on-primary-fixed-variant: '#004f58'
  secondary-fixed: '#e0e0ff'
  secondary-fixed-dim: '#bdc2ff'
  on-secondary-fixed: '#000767'
  on-secondary-fixed-variant: '#343d96'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#111318'
  on-background: '#e2e2e8'
  surface-variant: '#333539'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.2'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: '1.4'
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  container-max: 1440px
---

## Brand & Style

This design system establishes a high-tech academic atmosphere, bridging the gap between traditional Digital Humanities and cutting-edge artificial intelligence. The aesthetic is defined as **Dark Academic Futurity**—a blend of sophisticated, data-rich layouts with the immersive depth of high-end software.

The UI targets a research audience, evoking an emotional response of intellectual curiosity, precision, and awe. Visually, it leans into **Glassmorphism** and **Tonal Layers**, utilizing translucent surfaces that appear to float over an ambient, neural-network-inspired backdrop. Design elements should feel fluid and interconnected, representing the "mediation ecosystems" through particle-like details and glowing nodes. It avoids common startup "friendliness" in favor of a crisp, scientific seriousness.

## Colors

The palette is rooted in a "Deep Space" charcoal and navy foundation to provide maximum contrast for technical data and luminescent highlights.

- **Primary (Cyan Glow):** Used sparingly for interactive nodes, active states, and data highlights to simulate high-tech energy.
- **Secondary (Deep Navy):** The structural core, used for surface backgrounds and deep gradients.
- **Neutral (Midnight/Charcoal):** The base canvas, ensuring the "Dark Academic" feel.
- **Accents (Pure White):** Reserved for high-legibility typography and crisp iconography.

Gradients should transition from `Deep Navy` to `Midnight` with a `15%` opacity `Cyan` radial highlight to suggest depth and ambient light from a screen.

## Typography

Typography balances authoritative sans-serifs with a technical monospaced font for a "Humanities meets Machine" look.

- **Headlines:** Montserrat provides a bold, architectural presence. For large display titles, use tight tracking to emphasize the high-tech feel.
- **Body:** Inter ensures maximum readability for dense research papers and data descriptions.
- **Technical/Labels:** JetBrains Mono is used for metadata, citations, and system labels, reinforcing the computational nature of the project. 

All labels should be set in uppercase with increased letter spacing to act as "navigational anchors" in the dark interface.

## Layout & Spacing

The layout follows a **Fixed Grid** model on desktop to mimic a scholarly publication, while transitioning to a fluid model for mobile data consumption. 

- **Grid:** 12-column system with generous 24px gutters.
- **Philosophy:** Emphasize "White Space" (or "Negative Dark Space") to let complex visualizations breathe. 
- **Responsive Behavior:** On tablet and mobile, complex sidebars reflow into bottom-sheet drawers or sequential vertical stacks. Visualizations should maintain a 16:9 aspect ratio container to prevent distortion of neural node layouts.

## Elevation & Depth

Depth is conveyed through **Backdrop Blurs** and **Luminous Outlines** rather than traditional shadows.

- **Level 1 (Base):** Midnight background with a subtle grain texture.
- **Level 2 (Containers):** Semi-transparent Navy (60% opacity) with a `24px` background blur and a `1px` inner stroke of 10% White.
- **Level 3 (Pop-overs/Active):** Higher transparency (80%) with a faint `Cyan` outer glow (blur: 15px, spread: -5px) to indicate "active processing" or focus.
- **Connections:** Floating nodes are connected by 1px paths with 30% opacity, creating a web-like structural depth.

## Shapes

The design system utilizes **Soft** geometry (`0.25rem`). This slight rounding maintains a professional, "hard-tech" edge while feeling modern and refined. 

- **Small elements (Buttons/Chips):** 4px radius.
- **Large elements (Cards/Sections):** 8px radius.
- **Data Nodes:** Circles are used exclusively for particle systems and neural network nodes to contrast against the rectangular structural grid.

## Components

- **Buttons:** Primary buttons use a solid Cyan-to-Blue gradient with White text. Secondary buttons are "Ghost" style with a 1px White border and a blur hover effect.
- **Input Fields:** Dark charcoal background with a bottom-only 1px border. On focus, the border glows Cyan.
- **Cards:** Glassmorphic panels with subtle "noise" textures to reduce banding in dark gradients.
- **Chips/Tags:** Monospaced text inside a pill-shaped container with a 10% Cyan fill and a high-contrast border.
- **Data Nodes:** Floating circles with a pulse animation (CSS `scale` and `opacity`) to indicate live data points or interactive research nodes.
- **Progress Bars:** Thin 2px lines with a glowing "particle" that travels along the track.