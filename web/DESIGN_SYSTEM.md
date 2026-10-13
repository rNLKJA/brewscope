# brewscope Design System

Adapted from Project Cradle's design system with brewscope's warm amber aesthetic.

## Color Palette

### Brand Colors (Dark Mode)
- **Primary**: `#d48f4f` — warm amber, brewscope's signature
- **Brew**: `#d48f4f` — main brand accent
- **Brew Deep**: `#b47a3d` — deeper amber
- **Copper**: `#c17a4a` — copper accent
- **Amber**: `#e6a85d` — lighter amber

### Semantic Colors
- **Success**: `#6bc98b` (green)
- **Warning**: `#f5b86c` (orange)
- **Info**: `#7aa3e5` (blue)
- **Destructive**: `#ff6e6e` (red)

### Base Colors (Dark Mode)
- **Background**: `#0f0f0f` — near-black
- **Foreground**: `#f8f8f2` — off-white
- **Card**: `#1a1a1a`
- **Muted**: `#262626`
- **Border**: `rgba(255, 255, 255, 0.1)`

## Typography

### Font Families
- **Display** (Fraunces): Headlines, section titles, large numbers
  - `font-display` utility class
  - Optical sizing: auto
  - Letter spacing: -0.015em
  - Weights: 100-900
  
- **Body** (Geist): UI text, body content
  - `font-sans` utility class
  - Weights: 100-900

- **Mono** (Geist Mono): Code, kickers, technical labels
  - `font-mono` utility class
  - Weights: 100-800

### Utility Classes
- `.kicker`: Mono uppercase label (0.72rem, 0.14em tracking)
- `.font-display`: Apply display font with optical sizing

### Text Sizes
- **Hero**: `text-5xl sm:text-6xl lg:text-7xl` (3rem → 4.5rem)
- **H2**: `text-4xl` (2.25rem)
- **H3**: `text-2xl`
- **Body Large**: `text-lg leading-relaxed`
- **Body**: `text-base` (1rem)
- **Small**: `text-sm`
- **XS**: `text-xs`

## Spacing & Layout

### Border Radius
- Base: `--radius` = 0.75rem
- `rounded-sm`: 0.45rem (radius * 0.6)
- `rounded-md`: 0.6rem (radius * 0.8)
- `rounded-lg`: 0.75rem (base)
- `rounded-xl`: 1.05rem (radius * 1.4)
- `rounded-2xl`: 1.35rem (radius * 1.8) — standard cards
- `rounded-3xl`: 1.65rem (radius * 2.2) — large cards
- `rounded-4xl`: 1.95rem (radius * 2.6)
- `rounded-full`: pill buttons

### Section Spacing
- Section padding: `py-20` (5rem vertical)
- Container max width: `max-w-6xl` (72rem)
- Horizontal padding: `px-4 sm:px-6`

### Component Spacing
- Grid gaps: `gap-4` (cards), `gap-10` (two-column), `gap-14` (hero)
- Card padding: `p-5` (small), `p-6` (medium)
- Button gaps: `gap-1.5` (default), `gap-3` (button groups)

## Components

### Buttons
- Heights: `h-6` (xs), `h-7` (sm), `h-8` (default), `h-9` (lg), `h-12` (hero CTA)
- Padding: `px-2.5` (default), `px-6` (large CTAs)
- Border radius: `rounded-lg` (default), `rounded-full` (pill CTAs)
- Icon spacing: `gap-1.5`, `[&_svg]:size-4`
- Focus ring: `.focus-ring-primary` or `.focus-ring-brew`

### Cards
- Base: `border border-white/10 bg-card rounded-2xl`
- Large cards: `rounded-3xl p-6`
- Hover: `hover:border-brew/50 transition-colors`

### Focus Rings
- `.focus-ring-primary`: Primary color ring (3px, 50% opacity)
- `.focus-ring-brew`: Brew amber ring (3px, 50% opacity)

## Patterns

### Arch Frame (Cradle Signature)
`.arch` — rounded-full top corners (999px) with small bottom radius (1.25rem)

### Grain Texture
`.grain` — subtle dot pattern with radial fade

### Kicker + Headline + Body
Standard content introduction pattern:
```tsx
<p className="kicker text-brew">Label</p>
<h2 className="font-display text-4xl font-semibold tracking-tight mt-4">
  Title with <em className="text-brew not-italic">accent</em>
</h2>
<p className="mt-6 text-lg leading-relaxed text-muted-foreground">
  Body paragraph
</p>
```

### Stat Tiles
```tsx
<div className="text-center">
  <p className="kicker text-muted-foreground">Label</p>
  <p className="font-display text-4xl sm:text-5xl font-semibold text-brew">
    42
  </p>
</div>
```

## Usage Examples

### Hero Button Group
```tsx
<div className="mt-8 flex flex-wrap gap-3">
  <Button size="lg" className="h-12 rounded-full px-6">
    Primary CTA
  </Button>
  <Button variant="secondary" size="lg" className="h-12 rounded-full px-6">
    Secondary
  </Button>
</div>
```

### Color Mixing (Hover States)
Use `color-mix(in oklab, ...)` for subtle overlays:
```css
hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)]
```

### Responsive Text Scaling
```tsx
<h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.02] font-semibold tracking-tight">
  Headline
</h1>
```
