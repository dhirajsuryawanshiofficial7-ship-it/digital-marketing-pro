# Digital Marketing Course Landing Page — Design Brief

## Aesthetic
Premium SaaS with bold gradient accents, glassmorphism depth, high-contrast CTAs. Dark luxury meets electric tech energy.

## Tone
Ambitious, premium, high-converting. Technical confidence paired with accessibility.

## Differentiation
Glassmorphism cards with vibrant gradient borders. Animated hero section with trust badges. Smooth scroll reveals and floating elements create motion choreography.

## Palette
| Token | OKLCH Value | Purpose |
|-------|------------|----------|
| Background | 0.1 0 0 | Deep navy base |
| Foreground | 0.98 0.01 0 | Near white text |
| Primary | 0.62 0.282 289.75 | Electric purple (#8b5cf6) |
| Secondary | 0.55 0.256 177.84 | Cyan/turquoise (#06b6d4) |
| Accent | 0.62 0.282 289.75 | Purple highlights |
| Card | 0.14 0 0 | Slightly elevated navy |
| Border | 0.22 0 0 | Subtle gray |
| Muted | 0.25 0 0 | Disabled/secondary state |

## Typography
| Role | Font | Usage |
|------|------|-------|
| Headline | Poppins Bold 700 | H1–H3, 28–56px, all caps accents |
| Body | Inter 400–600 | Body text, buttons, 14–16px |
| Mono | Courier New | Code examples, pricing tiers |

## Elevation & Depth
- **Level 0**: Background (0.1 0 0), no shadow, full-bleed
- **Level 1**: Cards (0.14 0 0), glass effect, subtle border
- **Level 2**: Modals/overlays (0.15 0 0), heavy glass blur, raised border
- **Glow**: Purple/cyan shadow accents (0.2 opacity, 30px blur) on hover

## Structural Zones
| Zone | Treatment | Tokens |
|------|-----------|--------|
| Navigation | Glass effect sticky bar, semi-transparent | card + glass-effect |
| Hero | Full-width gradient background + animated illustration | gradient-primary |
| Courses | Grid of glassmorphic cards, staggered animation | card + glass-effect |
| CTA Buttons | Gradient background, high contrast | gradient-accent + shadow-glow |
| Footer | Subtle top border, muted background | border + muted |

## Spacing & Rhythm
- **Padding**: 16px (sm), 24px (md), 32px (lg), 48px (xl)
- **Gap**: 16px default, 24px cards, 32px sections
- **Border radius**: 16px (base), 24px (cards), full (pills)

## Component Patterns
- **Cards**: Glass effect + gradient border on hover + shadow-glow
- **Buttons**: Gradient background, 12px padding, rounded-full
- **Input**: Dark background with subtle border, focus ring (accent color)
- **Testimonials**: Avatar + text, glassmorphic container
- **Timeline**: Vertical line + offset cards, alternating animation delay

## Motion
- **Entrance**: Fade-in (0.6s), slide-up (0.6s) with stagger (0.1s per item)
- **Hover**: Lift effect (transform: translateY(-4px)), glow shadow
- **Scroll**: Parallax on hero, reveal animations on cards (IntersectionObserver)
- **Float**: Subtle float animation (3s infinite) on hero illustrations

## Constraints
- No rainbow gradients; max 2 colors per gradient (purple → cyan, purple → orange)
- No neon/blur overdose; depth through composition, not blur alone
- No bouncy animations; cubic-bezier(0.4, 0, 0.2, 1) is standard
- Glassmorphism only on cards, nav, overlays; not on body sections
- High contrast maintained: foreground on background ≥ 0.8 OKLCH L difference

## Signature Detail
Gradient text on hero headline + animated glass-bordered cards that glow on hover with purple/cyan shadows. Trust badges float below hero with staggered entrance animation.
