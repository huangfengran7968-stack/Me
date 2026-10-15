# Design System: Cyber-Organic Digital Companionship

## 1. Overview & Creative North Star: "The Ethereal Pulse"
The Creative North Star for this design system is **"The Ethereal Pulse."** Unlike traditional static interfaces, this system treats the UI as a living, breathing entity—an extension of the user’s emotional and digital life. We reject the "boxed-in" layout of standard SaaS templates in favor of a **Cyber-Organic** aesthetic.

This is achieved through:
*   **Intentional Asymmetry:** Breaking the 12-column grid with overlapping elements and floating "glass" orbs to mimic the fluidity of biological systems.
*   **Luminous Depth:** Moving away from flat surfaces to a layered "Obsidian-and-Light" depth model where the interface feels like it's projected into deep space.
*   **High-Contrast Editorial Scale:** Using dramatic shifts between massive `display-lg` typography and hyper-refined `label-sm` metadata to create an authoritative, premium feel.

---

## 2. Colors & Surface Philosophy
The palette is rooted in the depth of `surface` (#0e0e0e), punctuated by the "biological" glow of violet and cyan.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders for sectioning or layout containment. Boundaries must be defined solely through background color shifts. For example, a `surface-container-low` section sitting on a `surface` background provides all the separation required. 

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers—like stacked sheets of frosted glass.
*   **Base:** `surface` (#0e0e0e) – The void.
*   **Layout Sections:** `surface-container-low` (#131313) or `surface-container` (#1a1919).
*   **Interactive Cards:** `surface-container-high` (#201f1f) with a `backdrop-filter: blur(20px)`.

### The "Glass & Gradient" Rule
To achieve the "Cyber-Organic" look, floating elements must use **Glassmorphism**.
*   **Background:** Use `surface-variant` (#262626) at 40% opacity.
*   **Blur:** `backdrop-filter: blur(12px)`.
*   **Signature Gradients:** Use a subtle linear gradient (45deg) from `primary` (#e08efe) to `secondary` (#9093ff) at 15% opacity as an overlay on top-tier containers to provide a "chromatic soul."

---

## 3. Typography: Human vs. Machine
We pair two typefaces to balance technical precision with human warmth.

*   **Lexend (The Voice):** Used for all `display`, `headline`, and `title` scales. Its geometric yet friendly curves represent the "Companion" aspect—approachable and intelligent.
*   **Inter (The Data):** Used for `body` and `label` scales. Inter provides the "Cyber" precision required for reading health stats and intelligence logs.

**Hierarchy as Identity:**
*   **Hero Statements:** `display-lg` (3.5rem) with a tight `-0.04em` letter-spacing.
*   **Micro-Data:** `label-sm` (0.6875rem) with an uppercase `0.1em` letter-spacing for a sophisticated "technical readout" aesthetic.

---

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows are too "heavy" for an ethereal atmosphere. We use **Ambient Glows** and **Layering**.

### The Layering Principle
Depth is achieved by "stacking" the surface-container tiers. Place a `surface-container-lowest` card on a `surface-container-low` section to create a soft, natural "recessed" look without shadows.

### Ambient Shadows
When a "floating" effect is required (e.g., a primary CTA or a floating status orb), use:
*   **Color:** A tinted version of `primary` (#e08efe) or `secondary` (#9093ff).
*   **Opacity:** 10–15%.
*   **Blur:** `30px - 60px` to mimic a soft, luminous glow rather than a hard shadow.

### The "Ghost Border"
If a border is required for accessibility, it must be a **Ghost Border**: 
*   **Token:** `outline-variant` (#494847).
*   **Opacity:** Max 20%. 
*   **Effect:** It should feel like a faint light catch on the edge of a glass pane, not a structural line.

---

## 5. Components

### Primary CTA (The Luminous Button)
*   **Style:** `primary` (#e08efe) background with an `on-primary` (#4f006c) text label. 
*   **Shape:** `full` (9999px) roundedness.
*   **Effect:** A subtle `secondary` glow on hover. No hard borders.

### Frosted Cards
*   **Background:** `surface-container-highest` (#262626) at 60% opacity.
*   **Blur:** 16px backdrop blur.
*   **Spacing:** Use `spacing-6` (2rem) for internal padding to maintain "breathing room."
*   **Constraint:** No divider lines. Use `spacing-4` (1.4rem) gaps to separate header from content.

### Thin-Line Icons
*   **Weight:** 1px or 1.5px stroke.
*   **Color:** `primary-dim` (#ce7eec) for active states; `outline` (#777575) for inactive.
*   **Context:** Icons for "Intelligence" should use fluid, circular motifs; "Health" should use soft, pulsing organic curves.

### Companion Status "Pulse"
*   **Component:** A unique circular component representing the AI companion's state. 
*   **Visual:** Multiple overlapping circles using `primary_container` and `secondary_container` with `0.5` opacity and varying `backdrop-filter` blurs. It should "breathe" using a slow CSS scale animation.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** use asymmetrical layouts where elements "leak" out of their containers.
*   **Do** use `lexend` for large, emotional headlines to emphasize the "Human" connection.
*   **Do** lean into `surface-container-lowest` (#000000) for deep, immersive backgrounds that make the `cyan-glow` accents pop.

### Don't:
*   **Don't** use 100% opaque, high-contrast borders. It kills the ethereal atmosphere.
*   **Don't** use standard "Grey" shadows. Shadows must be tinted with the brand’s violet or cyan hues.
*   **Don't** crowd the interface. If in doubt, increase the spacing to the next tier in the scale (e.g., move from `8` to `10`).
*   **Don't** use sharp corners. Everything should feel organic and safe; use `md` (0.75rem) as the absolute minimum roundedness.