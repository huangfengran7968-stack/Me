# DeepSire BOLD v2 — "Solar Flare" — Self-Check

Working copy: `~/workspace/projects/DeepSireWebSite-bold/` (copied from v1 `DeepSireWebSite-award/`; original at `~/workspace/projects/DeepSireWebSite/` and v1 are both untouched — verified: 4,653 and 927 lines respectively).

Design concept: **"Solar Flare"** — the Quiet Cosmos erupts. Same cosmos, but now the
star is going supernova. Palette: deep ink `#0c0b08` stays, bone brightened to `#f6efe0`,
the muted soul-gold `#e4b04a` becomes vivid saturated amber `#ffa11f`, and ONE loud
secondary commits: hot magenta `#ff3d71`. Loudness comes from SCALE and CONFIDENCE, not
from more colors — v1's restraint is preserved (two hues, each with a job: amber = energy/
wayfinding, magenta = disruption/delight).

Files changed (bold copy only):
- `index.html` — 927 → 1,087 lines (~64K): hero v2, marquee strip, ghost numerals 02–08,
  inverted download section, broken-grid vessel rows, giant footer, Playfair italic quotes
- `css/award.css` — 309 → 316 lines: v2.0 tokens (amber/flare), louder button hover,
  accent→flare progress hairline, shared reduced-motion marquee guard
- `js/award.js` — 388 → 412 lines: stronger parallax (0.18/-0.08), magnetic 0.32 + scale,
  cursor-follow hero glow (fine pointers only), ghost parallax layer, helix recolored amber
- 7 linked pages (`download.html`, `spirit-realm.html`, `support.html`,
  `pleasure/scent/sight/touch/code.html`): only `?v=1` → `?v=2` bumps on award.css/js
  links — they inherit the louder accent/type via shared tokens; no marquee on sub-pages

## 1. Scores: v1 → v2 (1–10)

| Dimension | v1 | v2 | Why |
|---|---|---|---|
| 排版 Typography | 9 | 10 | Hero display type 6.5rem → **11rem** (`clamp(3.4rem, 10.5vw, 11rem)`), leading 1.02 → 0.95, tracking −0.04em; Playfair Display italic for vessel quotes adds a second voice without a new family burden. |
| 留白 Whitespace | 9 | 9 | Kept — loudness here comes from contrast of scale against preserved air, not from filling space. Ghost numerals sit *behind* content, not in the flow. |
| 视觉层级 Hierarchy | 9 | 10 | Ghost numerals 02–08 create a third depth layer (background typography); the tilted marquee acts as a hard chapter break between hero and content. |
| 色彩 Color | 9 | 10 | Amber pushed to vivid `#ffa11f`; ONE committed loud secondary (hot magenta) replaces moonstone as the disrupter, used in large confident gestures (footer fill on hover, serif quotes, gallery frame offsets) — never confetti. Full inverted bone block breaks the all-dark rhythm once, loudly. |
| 动效 Motion | 8 | 9 | Marquee (transform-only loop), stronger parallax, cursor-follow glow, ghost parallax drift, kinetic hero settle (scale+rise). All still gated on `prefers-reduced-motion` + fine pointers. Not 10: real perf unmeasured. |
| 微交互 Micro-interactions | 8 | 9 | Magnetic buttons stronger (0.32 + scale 1.03 + bigger shadow), images break grid on hover (scale + saturate reveal), vessel links turn magenta, footer giant fills magenta on hover. |
| 响应式 Responsive | 8 | 9 | Loud scale collapses: hero caps at 3.8rem ≤480px, ghost numerals clamp via vw, marquee font clamps, vertical label hidden ≤1100px, grid offsets disabled <1025px, `overflow-x: clip` everywhere. Not 10: assets still not local. |
| 原创性 Originality | 8 | 9 | "Solar Flare" has a real point of view: supernova cosmos, supernova typography. The tilted amber marquee + magenta gallery frames give the site a signature no template has. |

## 2. Contrast audit (WCAG, computed numerically)

- Bone `#f6efe0` on ink `#0c0b08` (body): **17.19:1** ✓
- Amber `#ffa11f` on ink (accent display text): **9.72:1** ✓
- Ink `#221100` on amber (primary buttons): **9.03:1** ✓
- Ink `#1d1103` on amber (marquee band): **9.15:1** ✓
- Flare `#ff3d71` on ink (vessel quotes, tagline): **5.77:1** ✓
- Flare-ink `#2a0512` on flare (if flare buttons used): **5.45:1** ✓
- Inverted: ink `#171206` on bone `#f3ecdc` (title): **15.85:1** ✓
- Inverted: `#4d4436` on bone `#f3ecdc` (body): **8.13:1** ✓
- Inverted: `#6b5a2e` on bone `#f3ecdc` (eyebrow): **5.71:1** ✓
- Moonstone `#8fa3b8` on ink (labels): **7.59:1** ✓
- **Deliberately rejected:** bone on flare = **2.98:1** (fails) → flare is NEVER used as a
  text background with bone text; only flare-on-ink or ink-on-flare.
- Inverted `#b25c08` on bone = **4.03:1** → used ONLY for large text (section numerals,
  never body copy).

## 3. Iteration passes

### Pass 1 — critical re-read (found)
1. 480px media query capped the hero title at 3.2rem — the "loud" brief collapsed too far on mobile.
2. Rotated vertical label could collide with hero copy at ~1024px (label at 1.6rem vs grid padding 4vw).
3. `.hero-title.reveal` stronger initial transform (0,3,1 specificity) would have overridden
   award.css's reduced-motion `transform: none` (0,2,1) — a motion-safety bug.
4. `is-loaded` class was added in JS but had no CSS consumer — dead code, and the kinetic
   ghost entrance it was meant for was missing.
5. Marquee loop: needed to verify the two track spans are identical width with no `gap`
   (padding-right carries the separator) for a seamless −50% loop.

### Pass 1 → Pass 2 (fixed)
1. Mobile hero cap raised to `clamp(2.8rem, 13vw, 3.8rem)` — loud but safe on 480px.
2. Vertical label hidden ≤1100px instead of 900px.
3. Added explicit reduced-motion override `html.award .hero-title.reveal { transform: none; }`
   in the BOLD reduced-motion block (same specificity, later in cascade = wins).
4. Added `ghost-in` keyframe entrance for the hero ghost tied to `body.is-loaded`, with
   `fill-mode: backwards` so the scroll-parallax inline transform is NOT permanently
   overridden after the animation ends; reduced-motion sets `animation: none`.
5. Verified: two identical marquee spans, no flex `gap`, trailing `✦` + `padding-right: 3rem`
   as the separator — loop is seamless.

### Pass 2 — second re-read (found, not yet fixed → then fixed)
1. `.vessel-media::after` magenta frame with `z-index: -1`: on ≥1025px the rotated media
   wrapper creates a stacking context (transform), so the frame renders correctly behind
   the image; on mobile (no transform) it could sink behind the section background.
   → Accepted as decorative-only degradation; the frame is a bonus layer, not content.
2. `.section > *:not(.sec-ghost) { position: relative; z-index: 1; }` — verified it does not
   break the ecosystem full-bleed gallery (still scrolls; ghost stays behind at z 0).
3. `.award-h2` bump to 5rem in award.css: confirmed no page currently uses `.award-h2`
   (all headings use page-local classes) — the bump is opt-in future-proofing, zero risk
   to the 7 linked pages.
4. Ghost numeral on the inverted download section: amber stroke was too faint on bone —
   added `.inverted .sec-ghost { -webkit-text-stroke-color: rgba(23,18,6,0.15); }` plus a
   `@supports not` solid fallback in inverted ink.
5. Marquee sits between `</header>` and `<main>` with `aria-hidden="true"` — decorative,
   no anchor/landmark impact; nav active-section logic untouched (all section ids kept).

## 4. Validation results (final)

- HTML balance (`html.parser`): no unclosed/stray tags; zero duplicate ids; exactly one `<h1>`.
- `node --check js/award.js` passes; inline `<style>` and `css/award.css` brace counts balanced (262/262, 46/46).
- Asset audit: all 17 local `src`/`href` refs in the new `index.html` exist in the original
  repo tree (paths unchanged; `?v=2` query strings verified against base filenames).
- All anchors preserved: `#vessels #neural #living-legacy #spirit-realm-intro #ecosystem
  #download #manifesto`, plus `life-biography.html` nav link.
- i18n: all `data-translate-key`s preserved; hero `<h1>` keeps the sanitizer-safe
  `class="highlight"` span structure; new loud elements (marquee, ghost numerals,
  vertical label, hero ghost) are decorative `aria-hidden` and not translatable strings.
- APK download flow, lang selector, nav solid state, mobile scroll-lock: untouched logic.
- Overflow audit: body `overflow-x: clip` retained; sections get `overflow: clip` for ghost
  numerals; marquee wrapped in its own `overflow: clip` container; no fixed giant widths.

## 5. Honest remaining limitations

- **Binary assets still not local** (`video/hero.mp4`, `image/*`): real visual rendering
  untestable here. The loud scale (11rem hero, 20rem ghost numerals) especially needs
  eyeballing against the real hero video and feature images.
- **New i18n keys from v1** (`hero_kicker`, `vessels_intro`, etc.) still have no entries in
  `main.js` dictionaries → English fallback in other languages (unchanged from v1).
- **No live browser testing** — validation is static (HTML parse, JS syntax, path audit,
  contrast math, overflow audit). Marquee timing, parallax smoothness, and LCP/CLS need a
  real browser.
- `.vessel-media::after` magenta frame may hide behind section backgrounds on touch
  devices (no transform → no stacking context) — decorative only, graceful.
- `body:has()` scroll-lock (inherited from v1) still needs a modern browser; older
  browsers simply won't lock scroll.
