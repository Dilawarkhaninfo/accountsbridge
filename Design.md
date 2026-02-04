# Accounts Bridge - Design System & Brand Guidelines

**Version:** 2.0  
**Status:** Production Ready  
**Last Updated:** October 2024

---

## 1. Brand Design Philosophy

### Visual Tone & Emotional Intent
The design language of **Accounts Bridge** is built on the pillars of **Trust, Stability, and Clarity**. As a mid-tier Chartered Accounting firm, the visual identity must project "Accounting-grade seriousness" without feeling dated. The aesthetic is elevated, calm, and reassuring—designed to make high-value SME clients feel they are in safe hands.

**Core Emotions:**
*   **Safe & Secure:** We handle complex finances with absolute precision.
*   **Professional & Authoritative:** We are experts, not experimenters.
*   **Calm & Clear:** We reduce noise and simplify complexity.
*   **Premium Advisory:** We offer high-value strategic guidance, not just tax returns.

**What We Avoid:**
*   ❌ **Flashy Trends:** No excessive animations, neon globs, or experimental layouts.
*   ❌ **Generic Corporate:** Avoid stock-photo heavy, soul-less "blue corporate" looks.
*   ❌ **Clutter:** No dense walls of text or overwhelming navigation menus.

---

## 2. Color Palette

The color system is strictly defined to ensure a recognizable and cohesive brand identity.

### Primary Color: Green (Trust & Growth)
Used for primary actions, branding elements, and active states. It signifies financial health and stability.

*   **HEX:** `#0B7E3E`
*   **Tailwind:** `bg-primary`, `text-primary`
*   **Usage:** Primary buttons, active navigation links, checkmarks, hero highlights.

### Secondary Color: Yellow (Confidence & Clarity)
Used sparingly for high-impact highlights, "sticky" elements, or attention-grabbing calls to action that need to stand out from the green.

*   **HEX:** `#FECD03`
*   **Tailwind:** `bg-secondary`, `text-secondary`
*   **Usage:** Secondary CTAs, badges, accent icons, hover states for dark elements.

### Neutrals
*   **Dark Neutral (Deep Charcoal):** `#1A202C`  
    *   Used for: Headings, main text, heavy borders.
*   **Light Neutral (Pure White):** `#FFFFFF`  
    *   Used for: Page backgrounds, card backgrounds, input fields.
*   **Subtle Gray:** `#F8F9FA` (Backgrounds), `#E2E8F0` (Borders).

### Accessibility & Contrast
*   **Text on Green:** Must use **White** text.
*   **Text on Yellow:** Must use **Dark Charcoal** text (White is not accessible on this yellow).
*   **Text on White:** Must use **Dark Charcoal** or **Deep Green**.

---

## 3. Typography System

**Font Family:** `Inter`, sans-serif.
*   **rationale:** Highly legible, modern, and professional. Works perfectly for complex financial data.

### Hierarchy & Scaling

| Role | Tag | Size (Desktop) | Weight | Line Height | Usage |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display Heading** | `H1` | `3.75rem` (60px) | Bold (700) | 1.1 | Hero Section Main Title |
| **Page Title** | `H2` | `2.5rem` (40px) | SemiBold (600)| 1.2 | Section Headers |
| **Section Heading** | `H3` | `1.75rem` (28px) | SemiBold (600)| 1.3 | Card Titles, Sub-sections |
| **Sub Heading** | `H4` | `1.25rem` (20px) | Medium (500) | 1.4 | Feature Titles |
| **Body Large** | `p` | `1.125rem` (18px)| Regular (400) | 1.6 | Intro text, Lead paragraphs |
| **Body Base** | `p` | `1rem` (16px) | Regular (400) | 1.6 | Standard content |
| **Caption/Label** | `span`| `0.875rem` (14px)| Medium (500) | 1.5 | Form labels, Meta data |

**Typography Rules:**
*   Never use purely black (`#000000`) for body text; use Dark Charcoal (`#1A202C`) to reduce eye strain.
*   Limit centralized text alignment to titles and short intros (max 3 lines).
*   Long-form content must always be left-aligned.

---

## 4. Layout & Grid System

### Container Standards
*   **Max Width:** `1280px` (`max-w-7xl` in Tailwind).
*   **Page Margins:** `24px` (Mobile), `48px` (Tablet), `80px` (Desktop).

### Spacing System (8pt Grid)
We use a consistent 8-point scaling system for padding and margins.

*   **xs (4px):** Tight spacing within components.
*   **sm (8px):** Spacing between icon and text.
*   **md (16px):** Spacing between card elements.
*   **lg (24px):** Spacing between list items.
*   **xl (32px):** Standard grouping separation.
*   **2xl (48px):** Section dividers (Internal).
*   **3xl (80px - 120px):** Major Section Padding (Top/Bottom).

---

## 5. Buttons & CTAs

### Primary Button
*   **Background:** Primary Green (`#0B7E3E`).
*   **Text:** White (`#FFFFFF`).
*   **Border Radius:** `6px` (Slightly rounded, efficient).
*   **Hover:** Darken Green by 10% or Shift Y -2px.
*   **Usage:** "Book a Consultation", "Submit", "Get Started".

### Secondary Button
*   **Background:** Secondary Yellow (`#FECD03`).
*   **Text:** Charcoal (`#1A202C`).
*   **Hover:** Lighten Yellow slightly.
*   **Usage:** "View Services", "Learn More" (When next to Primary).

### Tertiary / Outline Button
*   **Background:** Transparent.
*   **Border:** 2px Solid Green (`#0B7E3E`).
*   **Text:** Green (`#0B7E3E`).
*   **Usage:** Secondary actions in low-emphasis areas.

### Text Link
*   **Style:** Underlined on hover only.
*   **Color:** Green (`#0B7E3E`).
*   **Usage:** Inline text links, Footer links.

---

## 6. Cards & Content Blocks

Cards are used to compartmentalize information clearly.

**General Card Style:**
*   **Background:** White.
*   **Border:** 1px Solid `#E2E8F0` (Subtle Light Gray).
*   **Shadow:** `shadow-sm` (Default), `shadow-md` (Hover).
*   **Radius:** `8px` or `12px`.
*   **Padding:** `24px` to `32px`.

**Service Cards:**
*   Include a 48px icon (Green stroke).
*   Title (H3).
*   Short Description.
*   "Learn more" arrow link at bottom.

**Feature/Info Cards:**
*   More minimal, used for stats or grid items.
*   Often utilize a light gray background (`#F8F9FA`) instead of white to separate from main content.

---

## 7. Navigation & Header

**Behavior:**
*   **State 1 (Top):** Transparent background (if over Hero image) OR Solid White.
*   **State 2 (Scrolled):** Sticky, Solid White background, `shadow-sm`.

**Structure:**
*   **Left:** Accounts Bridge Logo (Full color).
*   **Center:** Navigation Links (Home, Services, About, Resources).
*   **Right:** Primary CTA ("Book Consultation") + Mobile Menu Toggle.

**Mobile Nav:**
*   Slide-out drawer from right.
*   Links become large (20px+) blocks for easy tapping.

---

## 8. Forms & Inputs

Forms are the primary conversion tool. They must feel easy and frictionless.

**Input Fields:**
*   **Height:** `48px` (Touch friendly).
*   **Background:** White or `#F8F9FA`.
*   **Border:** 1px solid `#E2E8F0`.
*   **Focus State:** Border changes to Green (`#0B7E3E`), Ring with 20% Opacity Green.
*   **Placeholder:** `#A0AEC0` (Readable gray).

**Validation:**
*   **Error State:** Border becomes Red-500. Error message in small text below input.
*   **Success State:** Checkmark icon appears in right side of input.

---

## 9. Website Sections Design Guidelines

### Hero Section
*   **Layout:** Split screen (Text Left, Image Right) OR Center aligned with subtle background.
*   **Background:** Clean, professional imagery (office, handshake, abstract finance) or solid light gray.
*   **Key Idea:** Instant clarity on "Who we are" and "What we do".

### Services Section
*   **Layout:** Grid of 3 columns.
*   **Tone:** Informative. Use consistent icons for each service to aid scanning.

### Trust / About Section
*   **Content:** Testimonials, Logos of partners (Xero, MYOB, etc.), CPA certification badges.
*   **Style:** Gray background band (`#F8F9FA`) to visually break up the page.

### Contact / Lead Capture
*   **Placement:** Bottom of every page (Pre-footer).
*   **Design:** High contrast (maybe Dark Green background) to signal the end of the journey and prompt action.

---

## 10. Responsive Design Rules

**Desktop First Framework:**
1.  **Desktop (>1024px):** Multi-column layouts, ample whitespace, hover effects enabled.
2.  **Tablet (768px - 1024px):** Reduce margins, switch 3-column grids to 2-column.
3.  **Mobile (<768px):** Single column stack.
    *   H1 sizes reduce to `2.5rem`.
    *   Padding reduces to `24px` edge-to-edge.
    *   Buttons span full width.

---

## 11. Accessibility & Compliance

*   **WCAG 2.1 AA Standard:** All text must meet 4.5:1 contrast ratio.
*   **Keyboard Navigation:** All interactive elements (Links, Buttons, Inputs) must have a visible Focus ring.
*   **Alt Tags:** All non-decorative images must have descriptive Alt text.
*   **Forms:** Labels must be visible (avoid placeholder-only layouts).

---

## 12. Design Consistency Rules

### Do's
*   ✅ **Do** use the Spacing variables (p-4, p-8) strictly.
*   ✅ **Do** use the Primary Green for all main actions.
*   ✅ **Do** keep text left-aligned for readability in long sections.

### Don'ts
*   ❌ **Don't** mix font weights arbitrarily (stick to Regular and Bold).
*   ❌ **Don't** use buttons that are not Green or Yellow.
*   ❌ **Don't** clutter the navigation with too many items (max 5-6).

### Reusable Components
*   Build strictly using the existing **Shadcn UI** library in the project.
*   Modify the base Shadcn themes to match these colors rather than overriding manually in every file.
