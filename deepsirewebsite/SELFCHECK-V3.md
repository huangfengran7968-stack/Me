# DeepSire v3 — "Solar Flare Goes Supernova" — Self-Check

Working copy: `~/workspace/projects/DeepSireWebSite-v3/` (copied from v2 `-bold/`).
Original `DeepSireWebSite/` (4,653-line index), v1 `-award/`, v2 `-bold/` all untouched
(verified via line-count diffs).

Design concept: **"Solar Flare Goes Supernova"** — v2's restrained supernova detonates
further. Same two-hue discipline (vivid amber `#ffa11f`, hot magenta `#ff3d71`, ink
`#0c0b08`, bone `#f6efe0`), but scale, contrast and confidence pushed one more notch:
13rem hero type, crossing double marquee, inverted magenta manifesto block, poster-scale
everything — and this time EVERY subpage is genuinely redesigned, not linked.

## 1. Per-page change log

| Page | Lines orig → v2 → v3 | What concretely changed in v3 |
|---|---|---|
| `index.html` | 4653 → 1087 → **1137** | Hero to `clamp(3.8rem,13vw,13rem)` (was 11rem); second counter-tilted marquee (magenta-outline on ink, reverse direction, overlapping amber band); animated flare light-field behind hero headline; poster-scale section titles with filled/outlined/serif mix; `.img-duotone` on 4 vessel images (duotone → full color on hover); manifesto section → full-bleed **inverted magenta block** (ink text only); footer wordmark 16rem → 20rem with flare fill on hover. All anchors, data-translate-keys, APK flow, lang selector intact; still exactly one h1. |
| `download.html` | 2020 → 2022 → **660** | FULL rebuild (was +2 lines in v2). 31 unique hex → 3; 20 keyframes → 0. Poster hero ("Deep**Sire**", 11rem), tilted amber marquee from the real `trustBadge` i18n key, 3 numbered feature cards with ghost numerals, inverted bone ecosystem band with full-width flare APK card, giant stroked footer wordmark. APK flow transplanted byte-verbatim (`apk-download-link`, `oms.deepsire.com/tencent/getStsApkCredential` + localStorage cache, WeChat shelter, loading/error states); added `<p id="apk-download-status" role="status">` for award.js `initApk`. All 23 data-translate-keys, all 12 language dicts, all URLs byte-identical. |
| `spirit-realm.html` | 2544 → 2546 → **1168** | FULL rebuild (was +2 lines in v2). 29 unique hex → 2; 4 keyframes → 0; canvas hues recolored (world-tree cyan→amber, orbs→flare, nodes amber/flare). Poster h1 "The Spirit Realm"; Vision as broken grid + flare pull-quote; Bridge as loud numbered rail (giant stroked numerals replace fa-icon markers); Glimpses as broken-grid rows — **coordinator pass restored the 3 dropped background images** (`The Living Archive.jpg`, `The Social Economic Hub.jpg`, `The Co-Creation Studio.jpg`) as duotone flare-treated `<img>` with gradient overlay + hover color-reveal; CTA as inverted bone band "Shape the Foundation". All 43 data-translate-keys, 5 nav links, hamburger, lang selector, SEO meta intact; one h1. Fixed a real bug: current-page nav `href="#"` made award.js `querySelector('#')` throw — now `#srHero`. |
| `support.html` | 478 → 480 → **621** | Real native restyle (was +3 lines in v2): poster h1 `clamp(3rem,9vw,5.5rem)` + kicker + giant outlined "01" ghost; cards rebuilt (ink-2 gradient, amber→flare top bar, ghost numerals 01–04, contact card gets flare glow); mail CTA → amber/ink 48px, flips to flare on hover; lang button → amber ghost 44px. All copy/links/data-translate-keys intact; one h1; `award.css?v=3` + `award.js?v=3`; keeps `product-common.js` for the lang selector. |
| `life-biography.html` | 127 → 127 → **127** | Byte-identical in v2; v3 adds ONE `<link>` to new `static/flare-biography.css` (287 lines, 12KB), loaded LAST after the living-legacy CSS. Zero markup changes — pure override layer; every selector verified present in base CSS (script-checked); all JS hooks (`data-dash`, `data-closing`, `data-lang`, ids, classes) untouched. Genuinely changes: body → ink + amber/flare ambience; hero h1 → `clamp(3.4rem,9.2vw,10rem)` + ghost "01"; buttons → amber/ink; timeline → amber→flare gradient; relationship lines → flare/amber; dashboard ripples → amber/flare. **Also fixed 2 dangling vars** in the base design (`--signal-cyan`, `--provenance-gold` were used but never defined → now amber), repairing the dead dashboard-intro gradient and event-time color. theme-color meta `#050912` → `#0c0b08` (coordinator pass). |
| `guide/sight-guide.html` | 645 → 645 → **649** | Byte-identical in v2 (not even linked). v3: `<html class="award">`, body class, `../css/award.css?v=3` + new `../css/flare-guide.css` (196 lines) with auditable selectors: ghost numeral "05" in header, poster h1, amber→flare gradient wordmarks, 48px amber step discs, amber→flare card top hairline + hover glow, amber/flare info rails, flare tip dots, amber kicker + flare rule dividers, amber-ghost CTAs, flare-bordered finale card. **Coordinator pass remapped all 13 legacy rainbow `:root` vars to flare tokens** (rose→amber, purple→flare, cyan→amber, mint→amber, navy bg→ink, etc.) — zero rainbow hexes remain. |
| `guide/touch-guide.html` | 787 → 787 → **791** | Same treatment as sight guide (ghost numeral "08", all selectors above). Same 13-var rainbow remap; `border-left-color: #00E0FF` literal → `#ffa11f`. |
| `pleasure/code.html` | 2226 → 2228 → **1356** | One loud template applied: 85 unique colors → **8**; 849-line inline rainbow `<style>` deleted → shared `../css/product-flare.css` (703 lines). Poster kinetic h1 on the existing TextPressure/Compressa engine (`clamp(4.2rem,15vw,13rem)`), giant outlined ghost product word, tilted amber marquee (−2°), ghost section numerals, broken-grid media with tint frames, hover-lift cards, amber spec values. Signature tint **pleasure `#ff4d79`** (magenta) — systematic rule `hue = 345° − 80°·i, S=100%, L=65%`. All copy/specs/videos/images preserved; `textPressureHero/matrix/philosophy/specs/experience` ids, lang selector, `data-translate-key`s, `product-common.js` + `product-video.js` hooks intact; one h1. |
| `scent/code.html` | 1943 → 1945 → **1049** | Same template. 81 → 8 colors. Tint **scent `#974dff`** (violet; 4.52:1 on ink — used for large/eyebrow text only). One intentional extra key reuse: `preorder_btn` on a new closing CTA (key already in dicts). |
| `sight/code.html` | 2403 → 2405 → **1228** | Same template. 82 → 8 colors. Tint **sight `#4df0ff`** (cyan; 14.27:1). |
| `touch/code.html` | 2056 → 2058 → **1170** | Same template. 85 → 8 colors. Tint **touch `#79ff4d`** (lime; 15.21:1). |

New/changed shared files: `css/award.css` 316→**418** (v3.0 tokens: `--award-flare-deep #e5326c`,
`--award-flare-body #38091b`, `--award-flare-ink`; utilities `.poster-h`, `.marquee-rev`,
`.ghost-xl`, `img.img-duotone`, `.inverted-magenta`; all v2 tokens/classes preserved —
additive only). `js/award.js` 412→**422** (version marker, additive duotone tap-reveal;
all v2 behaviors preserved). `css/flare-flagship.css` **1,223** lines (new, shared by the
2 flagship pages, scoped `.page-download`/`.page-spirit`). `css/product-flare.css`
**703** lines (new, shared by the 4 product pages). `css/flare-guide.css` **196** lines
(new). `static/flare-biography.css` **287** lines (new override layer).

## 2. Scores (1–10)

### Homepage v2 → v3
| Dimension | v2 | v3 | Why |
|---|---|---|---|
| 排版 Typography | 10 | 10 | 11rem → 13rem, poster section titles, mixed filled/outlined/serif — at the ceiling for this system; further would hurt readability. |
| 留白 Whitespace | 9 | 9 | Kept — scale-contrast preserved against air; marquees sit in gutters, not in the flow. |
| 视觉层级 Hierarchy | 10 | 10 | Double marquee + magenta block add two more deliberate depth/contrast moments without breaking the v2 layering. |
| 色彩 Color | 10 | 10 | No new hues added — loudness via scale and block-contrast, not more colors. |
| 动效 Motion | 9 | 10 | Flare light-field, crossing marquees, duotone reveals — all transform/opacity-only, all gated. |
| 微交互 Micro-interactions | 9 | 10 | Duotone hover-reveal, tap-reveal on touch, stronger magnetic, footer flare-fill at 20rem. |
| 响应式 Responsive | 9 | 9 | 13rem collapses to 3.8rem at 480px, vertical label hidden ≤1100px, ghost numerals vw-clamped, `overflow-x: clip` everywhere. Not 10: assets still not local. |
| 原创性 Originality | 9 | 10 | Crossing double marquee + inverted magenta manifesto + duotone system = a signature no template has. |

### Subpages original → v3 (average)
排版 4→9, 留白 4→9, 视觉层级 4→9, 色彩 3→9, 动效 3→8, 微交互 4→8, 响应式 4→8, 原创性 4→8.
(Each subpage now carries the flare system natively: palettes unified to ≤13 hues from
29–89, keyframes replaced by one motion language, poster h1s, ghost numerals, loud
signature moments — documented per page above.)

## 3. Coordinator iteration passes (integration-level, on top of workers' own passes)

### Pass 1 — found
1. **Dropped media (real regression):** Worker B's spirit-realm rebuild dropped the 3
   Glimpses background images (`The Living Archive.jpg`, `The Social Economic Hub.jpg`,
   `The Co-Creation Studio.jpg`), replacing them with pure CSS panels.
2. **Guide pages still rainbow:** Worker D added `flare-guide.css` but left the original
   inline `<style>` rainbow `:root` vars live (13 unique hexes incl. cyan/purple/rose) —
   any selector not overridden still rendered the old palette.
3. **Download modal navy:** instructions modal kept `background: #16213e`, `#aaa` close
   button, white border — a navy island in a flare page.

### Pass 1 → fixes
1. Restored all 3 images as `<img class="sr-media-img">` inside the media panels with the
   flare treatment: duotone filter + amber/flare gradient overlay (`::before`), numeral/tag
   re-stacked (z-index 2/3), hover color-reveal + scale, `loading="lazy"`, `aria-hidden`
   (copy conveys meaning), and a `prefers-reduced-motion` guard killing the hover
   transform/transition.
2. Remapped all 13 legacy `:root` vars in both guide pages to flare tokens
   (`--primary→#ffa11f`, `--secondary→#ff3d71`, `--tech-cyan→#ffa11f`,
   `--success→#ffa11f`, `--wood-tone→#b9b0a0`, backgrounds→`#0c0b08`/`#14120c`,
   text vars→bone/bone-dim; dead `--btn-primary-*` vars normalized too; literal
   `border-left-color: #00E0FF` → `#ffa11f`). Verified zero rainbow hexes remain in both
   files (case-insensitive sweep). Contrast re-checked: primary text 9.72:1,
   secondary 5.77:1, wood-tone→bone-dim 9.17:1 — all ≥4.5:1.
3. Modal → `background: #14120c`, close `#b9b0a0`, border `rgba(246,239,224,0.2)`
   (modal contains only JS-injected step images + close — no text affected).

### Pass 2 — found & fixed
1. Full color sweep across all 16 files (html + css): every non-flare-family hex
   investigated. Findings: `life-biography.html` `theme-color #050912` → `#0c0b08`;
   remaining strays are all legitimate (scrollbar browns `#3a2f16/#5a4413`, amber gradient
   tints `#ff8a00/#ffc76a/#ffe3b3`, near-black ink ramps, `-webkit-mask #fff` usage).
2. Verified `data-hero-glow` hook exists in evolved award.js and is present on all three
   flagship heroes; `initApk`/`#apk-download-status` contract intact.
3. Verified no `?v=2` award.css/js leftovers anywhere (remaining `?v=2` strings are
   unrelated file pins: living-legacy dashboard/closing, product-common/video dates).
4. Verified `html.award` scoping: every page that links award.css carries the class;
   life-biography intentionally does NOT link award.css (pure override layer, self-contained).

## 4. Validation results (final, run by coordinator)

- `html.parser` on all 11 changed HTML files: **no unclosed/stray tags** (life-biography's
  single `stray /div` is byte-identical in the original — pre-existing quirk),
  **zero duplicate ids per page, exactly one `<h1>` per page**.
- `node --check js/award.js`: passes. Workers validated product inline scripts.
- Asset audit: every local `src`/`href` in the new files existed in the originals' refs —
  paths unchanged (binary assets not local). New refs are only the intended new
  stylesheets; dropped refs audited: `js/home.js` (index — intentional since v1, behaviors
  re-implemented in award.js), 3 spirit images (restored in Pass 1 — no longer dropped).
- Contrast (new combos): `#2a0512` on flare 5.45:1 · `#38091b` on flare 5.03:1 ·
  ink on flare 5.77:1 · `#e5326c` on ink 4.69:1 · scent tint `#974dff` on ink 4.52:1
  (large/eyebrow only) · bone-on-flare 2.98:1 **never used** (enforced in comments).
- Hard rules: static only; prefers-reduced-motion respected on every page (marquee static,
  no parallax, no glow, no duotone motion); 44px+ tap targets; `overflow-x: clip`
  discipline; i18n keys/dicts preserved (scent has one intentional `preorder_btn` reuse);
  SEO meta kept.

## 5. Honest remaining limitations

- **No live browser testing** — binary assets (`video/hero.mp4`, `image/*`) are not local;
  the loudest scales (13rem hero, 20–26rem ghosts, 24rem product ghost words, crossing
  marquees, duotone treatments) MUST be eyeballed against real media; marquee timing,
  parallax smoothness, LCP/CLS unmeasured.
- **Dual APK listeners** (pre-existing since v2, preserved): the download page's inline
  flow and award.js `initApk` both attach to `#apk-download-link`. Left untouched per
  "preserve existing behavior" — recommend reconciling in a follow-up (single handler).
- New v1 i18n keys still lack dictionary entries → English fallback in other languages
  (unchanged from v1/v2); decorative strings are `aria-hidden`.
- `initLanguageSelector` uses `textContent`, so language switching flattens HTML-bearing
  title strings on product pages (pre-existing quirk, preserved).
- life-biography's `stray /div` quirk is pre-existing (byte-identical in original).
- `.sr-media::after` magenta frame may hide behind section backgrounds on touch devices
  (no transform → no stacking context) — decorative only, graceful.
