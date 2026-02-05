# Accounts Bridge - Brand Theme & Design Guidelines

**Status:** Final - Sync with Project Implementation  
**Last Updated:** February 2025

---

## 1. Brand Visual Identity

The **Accounts Bridge** brand is built on the intersection of **Elite Financial Growth** and **Human-Centric Advisory**. The design language is "Premium Corporate"—it’s professional enough for a chartered accounting firm while remaining dynamic enough for a growth-focused consultancy.

### Core Design Pillars:
*   **Geometric Precision:** Clean lines, consistent spacing, and mathematical grids.
*   **Depth & Texture:** Using mesh gradients, subtle noise, and glassmorphism to create a "tactile" digital experience.
*   **Action-Oriented:** Important elements (CTAs) use high-contrast primary colors for instant visibility.

---

## 2. Color Palette

The official brand colors are extracted from the primary UI implementation.

### Primary: Deep Emerald Green
Used for authority, trust, and growth.
*   **HEX:** `#0B7E3E`
*   **Usage:** Hero sections, primary buttons, branding accents.
*   **Psychology:** Represents financial stability and sustainable business scaling.

### Secondary: Golden Sun Yellow
Used for energy, success, and high-impact highlights.
*   **HEX:** `#FECD03`
*   **Usage:** Strategic highlights, secondary accents, stat numbers.
*   **Psychology:** Represents optimism, clarity, and wealth creation.

### Neutrals: Slate & White
*   **Background:** White (`#FFFFFF`) / Soft Slate (`#F8FAFC`).
*   **Headings:** Deep Slate (`#0F172A`).
*   **Body Text:** Cool Slate (`#64748B`).
*   **Borders:** Light Slate (`#E2E8F0`).

---

## 3. Typography System

**Primary Font:** `Geist Sans`  
**Mono Font:** `Geist Mono`  
*   **Rationale:** A modern, high-precision typeface that looks exceptional at both display sizes and small labels.

### Type Hierarchy (Sync with Hero Section)

| Role | Style | Desktop Size | Mobile Size | Weight |
| :--- | :--- | :--- | :--- | :--- |
| **Hero Headline** | Display | `45px` (1.05 leading) | `36px` | Bold (700) |
| **Section Header** | Heading | `32px` | `24px` | Bold (700) |
| **Sub-Heading** | Leading | `20px` (Relaxed) | `18px` | Regular (400) |
| **Body Text** | Standard | `16px` | `16px` | Regular (400) |
| **Taglines** | Label | `12px` (Widest) | `10px` | Bold / All Caps |

---

## 4. Component Design (Signature Styles)

### The "Accounts Bridge" Button
*   **Primary Button:** 
    *   Rounded: `12px` (XL) for Large, `8px` for Medium.
    *   Shadow: `shadow-xl shadow-primary/10`.
    *   Hover: Scale up slightly (`1.02`), darken green (`#075A2C`).
*   **Outline Button:** 
    *   Border: 1px Solid `#E2E8F0`.
    *   Hover: Background `slate-50`, text color shifts to Primary Green.

### The Hero Visual Language
*   **Mesh Gradients:** Primary Green (`Primary/5%`) and Secondary Yellow (`Secondary/10%`) blur blobs in the background.
*   **Noise Texture:** A 3% opacity SVG noise overlay to add a "fine-paper" texture.
*   **Glass Stats:** Stat cards use `bg-white/95 backdrop-blur-md` with subtle shadows to float over imagery.
*   **Image Treatments:** Large `16/10` aspect ratio images with `2rem` (32px) border radius.

---

## 5. UI Motion & Interaction

All components must feel "alive" through subtle micro-animations:
1.  **Staggered Entry:** Elements in the hero section slide in with a 0.3s duration.
2.  **Continuous Motion:** Background blobs use slow, infinite scale and position loops.
3.  **Active Indicators:** Small pulsing dots (`animate-pulse`) in taglines to indicate "Live" status or attention.

---

## 6. Implementation Notes for Developers

*   **Tailwind Sync:** Always use `bg-primary` and `bg-secondary` instead of hardcoded hex values.
*   **Responsive Gaps:** Desktop hero gap is `16`, reducing to `8` or `10` on mobile.
*   **Accessibility:** All white text on Green background is verified for WCAG AA compliance.
