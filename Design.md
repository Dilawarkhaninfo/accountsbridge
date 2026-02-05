# Accounts Bridge - Design System & UI Documentation

**Status:** Live Implementation  
**Last Updated:** February 2025  
**Source:** Derived directly from `HeroSection.tsx`, `Navbar.tsx`, `TopBar.tsx`, and `BusinessExpertCTA.tsx`.

---

## 1. Color Palette

The color system is derived from Tailwind classes (`bg-primary`, `text-secondary`, `text-white`, `text-slate-900`) and specific hex codes used in the components.

### Primary Colors
*   **Primary Green** (`bg-primary`): Used for backgrounds (Hero, TopBar) and primary actions.
    *   *Code Reference:* `bg-primary`
*   **Secondary Yellow** (`text-secondary`, `bg-secondary`): Used for highlights, stars, icons, and call-to-action buttons.
    *   *Code Reference:* `text-secondary`, `bg-secondary`
*   **Light/White** (`text-white`, `#F0F4E9`): Used for text on dark backgrounds.
    *   *Hero Heading:* `#F0F4E9` (Off-white/Mist)
    *   *Hero Body:* `text-white/80`
    *   *Borders:* `border-white/40`, `border-white/5`

### Neutral Colors
*   **Dark Text**: `text-slate-900` (used on Secondary buttons).
*   **Slate Text**: `text-slate-600` (Navbar links).
*   **Hover States**: `bg-slate-50`, `bg-white/10`.

---

## 2. Typography

### Font Family
*   **Primary Font:** Defaults (San-serif, likely `Inter` or `Geist` per project config).

### Text Styles (Exact Implementation)

| Component | Element | Class Name / Style | Size | Weight | Color |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero** | **H1 Title** | `text-4xl md:text-[56px] tracking-tight leading-[1]` | 36px / 56px | Semibold (600) | `#F0F4E9` |
| **Hero** | **Highlight** | `text-secondary` | Inherit | Inherit | Secondary (Yellow) |
| **Hero** | **Subtitle** | `text-lg leading-relaxed` | 18px (text-lg) | Medium (500) | `text-white/80` |
| **Hero** | **List Items** | `text-sm md:text-base` | 14px / 16px | Bold (700) | `text-white/95` |
| **Navbar** | **Links** | `text-sm` | 14px | Semibold (600) | `text-slate-600` |
| **TopBar** | **Text** | `text-xs tracking-wide` | 12px | Semibold (600) | `text-white` |
| **Yellow CTA** | **Heading** | `text-2xl md:text-3xl lg:text-4xl tracking-tight` | 24px / 36px | Bold (700) | `text-slate-900` |

---

## 3. Component Design

### Buttons

#### 1. Hero Primary CTA ("Book an appointment")
*   **Height**: `h-14` (56px)
*   **Padding**: `px-8` (32px)
*   **Background**: `bg-secondary`
*   **Text**: `text-slate-900`
*   **Font**: `font-bold`, `text-base`
*   **Border Radius**: `rounded-md` (6px)
*   **Effects**: `shadow-lg`, `hover:bg-secondary/90`, `transition-all`

#### 2. Hero Secondary CTA ("Start online now")
*   **Style**: Outline / Ghost
*   **Height**: `h-14` (56px)
*   **Padding**: `px-8` (32px)
*   **Background**: `bg-transparent`
*   **Border**: `border-2`, `border-white/40`
*   **Text**: `text-white`
*   **Font**: `font-bold`, `text-base`
*   **Border Radius**: `rounded-md` (6px)
*   **Hover**: `hover:bg-white/10`, `hover:text-white`, `hover:border-white`
*   **Effects**: `shadow-none`, `transition-all`

#### 3. Navbar CTA ("Book Consultation")
*   **Height**: `h-11` (44px)
*   **Padding**: `px-6` (24px)
*   **Background**: `bg-primary`
*   **Text**: `text-white`
*   **Font**: `font-bold`
*   **Border Radius**: `rounded-md` (6px)
*   **Hover**: `hover:bg-primary/90`

#### 4. Yellow Strip CTA ("Get a quote")
*   **Height**: `h-14` (56px)
*   **Padding**: `px-8` (32px)
*   **Background**: `bg-primary` (Green)
*   **Text**: `text-white` (White)
*   **Font**: `font-bold`, `text-base`
*   **Border Radius**: `rounded-md` (6px)
*   **Effects**: `shadow-lg`, `hover:scale-105`

---

## 4. Layout & UI Elements

### Yellow CTA Strip (High Impact)
The **Business Expert CTA** uses a reversed color logic for maximum attention:
*   **Background:** Secondary Yellow (`bg-secondary`).
*   **Text:** Dark Slate (`text-slate-900`).
*   **Button:** Primary Green (`bg-primary`) with White text.
*   **Typography:** Bold, sentence-case or title-case, size `2xl` to `4xl`.

### Top Bar
*   **Height/Spacing**: `py-2`
*   **Background**: `bg-primary`
*   **Icons**:
    *   Container: `bg-white/10`, `p-1`, `rounded-full`
    *   Icon Size: `h-3 w-3` or `h-3.5 w-3.5`
    *   Color: `text-secondary`
    *   Hover: Container turns `bg-secondary`, Icon turns `text-primary`

### Navbar
*   **Container**: `max-w-8xl mx-auto px-6 md:px-8`
*   **Scroll Effect**: Transition from `py-4` (unscrolled) to `py-2 bg-white/95 backdrop-blur-md shadow-sm` (scrolled).
*   **Dropdowns**:
    *   Container: `bg-white border border-slate-100 rounded-xl shadow-xl p-2`
    *   Items: `text-sm font-medium text-slate-600 hover:text-primary hover:bg-slate-50 rounded-lg`

### Hero Section
*   **Background**: `bg-primary`
*   **Spacing**: `py-12 lg:py-16`
*   **Container**: `max-w-8xl mx-auto px-6 md:px-12`
*   **Image Styling**:
    *   Aspect Ratio: `aspect-[4/3]`, `md:aspect-video`, `lg:aspect-[5/4]`
    *   Border Radius: `rounded-[2.5rem] md:rounded-[3.5rem]` (40px / 56px)
    *   Border: `border-8 border-white/5`
    *   Shadow: `shadow-2xl`
    *   Hover: `hover:scale-[1.02] duration-700`
*   **Rating Component**:
    *   Stars: `w-4 h-4 text-secondary fill-secondary`
    *   Score: `text-sm font-bold`

### Vision Cards (Image + Content)
Used for "Why Us", "Vision", and "Mission" sections.
*   **Structure**: Vertical Stack (Image Top, Content Bottom).
*   **Image**: Fixed height `h-64` (256px), object-cover, scale-on-hover.
*   **Content Box**:
    *   Background: `bg-primary` (Green).
    *   Text: `text-white`.
    *   Padding: `p-8`.
    *   Button: `text-secondary` uppercase link, turns white on hover.

### Service List Grid
*   **Header**: Centered lowercase Heading 1 (`text-4xl` to `5xl`, `text-primary`) with a central yellow (`bg-secondary`) underline accent.
*   **Grid Layout**: 3 Columns by 2 Rows.
*   **Item Design**:
    *   **Icon**: Hexagonal border (SVG), `w-16 h-16`, Primary Green.
    *   **Typography**:
        *   Title: `text-xl font-bold text-primary` (Green).
        *   Body: `text-sm text-slate-500` (Gray).
*   **Icons**: Plane, TrendingUp, ShoppingCart, Landmark, Lightbulb, Truck.

---

## 5. CSS / Tailwind Configuration Notes

*   **Colors**: Ensure `primary` and `secondary` are configured in `tailwind.config.ts`.
*   **Spacing**: The design heavily relies on `gap-12 lg:gap-16` for section spacing.
*   **Responsiveness**:
    *   Mobile: `flex-col`, `text-4xl`, `px-6`
    *   Desktop: `flex-row`, `text-[56px]`, `px-12`
