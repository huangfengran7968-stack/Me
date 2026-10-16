# 微圈 WeiQuan Award Redesign — Self-Check

Working copy: `~/workspace/projects/WeiQuanWebSite-award/` (source at `~/workspace/projects/WeiQuanWebSite/` is untouched).
`deepvibewebsite` and all DeepSire folders untouched. Per-page record for index: `SELFCHECK-WQ-INDEX.md`.

Research: `~/workspace/research_notes/award-ui-interaction-research-20261015-1713/report.md` (shortlist §7 = design law).

## Concept: 「记忆星河 Memory Constellation」

微圈 = "让 AI，成为有记忆的陪伴". The design treats memory as a constellation:
deep navy cosmos on the existing #0d0c1d/#1a192f family, ONE luminous signature cyan
#06b6d4 (the brand's own accent, elevated — not imported), warm gold #d4a574 rationed
strictly to biography/memory-warmth moments with a documented rule. Noto Serif SC
poster-scale display + Noto Sans SC body (Google Fonts links kept as-is) + DM Mono
(Latin-only subset) as the mono accent for labels/numbers/timestamps. Signature
devices: ambient memory-constellation canvas (nodes = memories, lines = connections),
vertical-rl CJK accent columns, numbered chapters + scroll progress, oversized
filled/outlined soul characters （视/触/悦/嗅） as product heroes. Bold/flamboyant
through scale + one signature move per page, never through noise — the research's
"loud but premium = discipline" rule.

## 1. Per-page change log

| Page | Lines before → after | Colors before → after | What concretely changed |
|---|---|---|---|
| index.html | 5,724 → 2,066 | 20 hex → 13 (7-token system + 4 documented derivations + #ff5555 carousel error + #fff QR bg) | Flagship rebuild: 37 keyframes → 4; ambient constellation canvas (text paints first, visibility-gated); pinned horizontal 四大智能设备 gallery with % readout (desktop, swipe fallback touch); SplitText line reveals; CSS marquee; magnetic CTAs + labeled cursor (pointer-fine only); 01–08 chapter rail + progress bar; fullscreen overlay nav reusing existing hamburger JS; vertical-rl columns （序章/壹/贰…); 3 original inline scripts (hamburger, android-download, step carousel + 4-language i18n) byte-identical |
| lingjing.html | 2,272 → 2,020 | 6 accents → 1 (cyan + rare gold) | particles.js CDN → vanilla Canvas 2D constellation (hooks #particles-js, hover-repulse, click-push kept); pinned scroll story beats 消费轨道→经营轨道→双轨交汇 (desktop, stacked fallback); counter/epoch interlude (01/04/02/24-7/1000); chapter kickers 01–04 + progress hairline; mobile menu → fullscreen overlay + focus trap; fixed 4 ORIGINAL bugs: #lingjing-android-link span TypeError, duplicate id="langBtn", ✨ wiped on language switch, core_value strong-span wiped by changeLanguage (restructured to segmented i18n keys, translations byte-identical) |
| sight/touch/pleasure/scent-soul.html | 1,038/1,077/977/930 → 458/466/530/498 | 81–85 → 8 per page | ONE loud template ×4 (generated from template + build_soul_pages.py): soul characters as oversized filled + outlined ghost graphic heroes; systematic tints 视#4bc7f0/触#4b4bf0/悦#c74bf0/嗅#f04b9e (hue=195+45·i, S85% L62%, text variant L72%); zero inline <style>; shared soul-impact.css rewritten (1455→888 lines, body.soul-* scoping), product-common.css + shared.js evolved (all hooks preserved; fixed autoApplyLang never firing); all [data-product-video]/hls hooks, specs, stories, selection variants, JD/mailto/beian, zh/en pageTranslations byte-identical |
| download.html | 758 → 922 | stray purples → navy + cyan | Native restyle: poster h1 (Serif 900, clamp, balance), CSS starfield hero, ghost numerals 01–03, cyan solid CTAs, CSS marquee, reading progress bar; :root token remap + old-purple hex purge in original style block |
| support.html | 352 → 454 | purple gradient → cyan system | Poster h1 + SUPPORT mono eyebrow, ghost-numbered cards 01–04, cyan CTA ≥44px, starfield + glow, cyan language switch |
| life-biography.html | 208 → 210 | --violet→#33406b, --cyan→#06b6d4, --gold→#d4a574, --night→#0d0c1d | Zero markup change; new static/wq-biography.css (182 lines) override layer linked after biography.css: token remap, starfield, ghost numerals 01–05, DM Mono latin accents, cyan CTAs, 9 hard-coded purple overrides; biography.js/data/i18n untouched; fixed 2 dangling vars in base (documented, body untouched) |
| guide/sight-soul-guide.html | 748 → 789 | amber→#d4a574, green→#06b6d4, slate→#a9b3d0 | In-page :root token remap + new static/wq-guide.css (173 lines): poster h1, ghost numerals, 44px step discs, progress bar + step wayfinding (01/05) via progressive-enhancement script |
| guide/touch-soul-guide.html | 932 → 973 | same + purple→cyan system | Same treatment; touch page's native `touch_guide_lang` localStorage key kept |

Shared: `static/wq-award.css` (772 lines, 7-token contract), `static/wq-award.js` (396→+14 lines,
GSAP+Lenis canonical wiring, constellation, wayfinding, magnetic, cursor, hover-reveal,
kinetic reveals). `static/shared.css`, `static/product-video.js`, `static/hls.min.js`,
`static/js/*.chunk.js` (loaded by NO page) untouched.

## 2. Research shortlist adoption (patterns §7)

| # | Pattern | Verdict | Where / why |
|---|---|---|---|
| 1 | Fluid editorial typography | ✅ adopted | All pages: Serif/Sans/DM Mono trio, clamp(), text-wrap:balance, CJK leading 1.0–1.2, spacing ≤0.15em |
| 2 | Lenis+GSAP choreography | ✅ gated | index canonical wiring; lingjing desktop-only; products + light pages vanilla IO (deliberate: no-build budget) |
| 3 | Wayfinding | ✅ adopted | index 01–08 rail, lingjing 01–04, products chapters+progress, guides steps, download progress |
| 4 | Preloader/page wipes | ❌ rejected | Gate risk (report's #1 practicality killer); per-page entry choreography instead |
| 5 | Ambient canvas | ✅ adopted | index + lingjing constellation canvases; CSS starfield/grain on light/product pages; still frame under reduced motion |
| 6 | Horizontal gallery | ✅/❌ | index pinned device gallery; rejected lingjing (no device imagery) |
| 7 | Hover image-reveal | ✅/❌ | index story rows + product features (no-WebGL tier); rejected where no imagery |
| 8 | Magnetic+cursor | ✅ gated | index both (pointer-fine); products magnetic only (cursor annoyance risk); light pages restraint |
| 9 | Kinetic type | ✅ adopted | SplitText lines (index), line-masks (lingjing), line-mask char reveals (products); never per-char on long CJK |
| 10 | Marquee | ✅ adopted | index, lingjing, products, download — pure CSS, pause-on-hover, static under reduced motion |
| 11 | Fullscreen nav | ✅/❌ | lingjing mobile overlay (Esc+focus trap); index overlay on existing hamburger; light pages keep working hamburger |
| 12 | Vertical CJK | ✅ adopted | index, lingjing, products graphic columns |
| — | Sound | ❌ | No award precedent; skipped |
| — | Three.js | ❌ | No genuine 3D moment justified; canvas 2D covers it |
| — | Scroll-jack/audio/hover-gated CTAs | ❌ | All avoided per report |

## 3. Scores (original → redesign, /10)

Homepage: 排版 5→9, 留白 4→9, 视觉层级 4→9, 色彩 4→9, 动效 3→9, 微交互 4→9, 响应式 4→9, 原创性 5→9
Subpages (avg): 排版 5→9, 留白 5→8, 视觉层级 5→8, 色彩 4→9, 动效 3→8, 微交互 4→8, 响应式 5→8, 原创性 5→8

## 4. Iteration passes

Worker passes (per worker reports): index fixed magnetic-vs-tilt conflict, mobile menu leak,
aria-hidden focusables, off-palette gradients, pin-disabled swipe fallback, modal centering
(6 fixes); lingjing fixed 4 original bugs + 5 own flaws (pin selector mismatch, letter-spacing
trailing-space compensation, CDN-deferred inits, content-visibility vs pin, focus trap);
products fixed WebKit-invisible gradient-text leak, double shine, 3 contrast failures,
language-switch accent wipes (6 fixes); light pages fixed color-mix fallback, sticky-killing
selector, CJK tracking violation, real vs computed contrast honesty, dead purple purge (5 fixes).

Coordinator passes (on top):
1. **Found:** `window.WQAward` / `window.__WQ_LENIS__` hooks probed by lingjing but not exposed by
   wq-award.js → duplicate Lenis instances possible. **Fixed:** exposed both from wq-award.js
   (lenis instance + version + flags); lingjing now reuses the shared instance when present,
   standalone when absent.
2. **Found:** index lost `data-i18n="privacy_tagline"` attribute (1→0 count) — investigated,
   **not a bug:** both original and new translate that element via `.hero-tagline-privacy`
   class (byte-identical script); verified working selector still targets the element.
3. **Found:** full-site hex sweep flagged ~30 stray colors — **all neutralized or legitimate:**
   shared.css purples on product pages killed via soul-impact.css var remaps + footer-link
   override (later load, higher specificity); biography base purples covered by
   wq-biography.css :root remap (70 var usages) + .btn-nav/.lang-option hard overrides;
   remaining hits are documented derivations (--wq-accent-deep), deeper-ink gradient stops,
   or dark-ink text on cyan. Scrollbar purple fallbacks in shared.css are dead on product
   pages (vars defined in soul-impact.css).
4. **No-JS audit:** no content CSS-hidden by default; hidden rules = menus, responsive
   toggles, JS-gated enhancements, reduced-motion fallbacks. All content readable with
   JS/CDN off.

## 5. Contrast (computed)

#06b6d4 on #0d0c1d = 7.95:1 AAA (no brightening needed); bone 17.47:1; mist 9.24:1;
gold 8.68:1; CTA dark text #032730 on cyan 6.47:1 AA; product tints: 视 9.86 (text 11.82),
触 restricted to large/graphic (text variant 5.35), 悦 5.24 (text 7.27), 嗅 5.71 (text 7.62);
buttons ≥5.0. Cyan-on-bone 2.20:1 never used.

## 6. Validation

- html.parser: all 11 pages balanced, exactly one h1 each, zero duplicate ids (lingjing's
  original dup id="langBtn" fixed).
- node --check: wq-award.js, shared.js, all new inline scripts OK.
- Asset audit vs original repo tree: **zero missing, zero removed** local refs on all pages;
  every `index.html#…` cross-link, video/hls path, image, QR, beian, mailto, JD link intact.
- i18n: index 4-language dicts byte-identical incl. privacy_tagline (class-targeted);
  lingjing 80 keys × 4 dicts (7 new segmented keys verified); products zh/en dicts intact.
- Font strategy unchanged: Google Fonts display=swap; only addition DM Mono Latin subset.

## 7. Honest limitations

- No live-browser render available to the subagents: constellation canvas, pinning, Lenis
  feel, and duotone treatments over REAL images/videos are untested against actual media.
  Layout degrades gracefully; needs human visual QA with assets in place.
- New visible microcopy (wayfinding labels, marquee phrases, kickers) is Chinese/Latin-only
  by design — intentionally not translated on language switch.
- LCP/CLS/INP unmeasured; video still lazy by design, poster-first where applicable.
- support.html keeps `lang="en"` initial (its JS sets lang dynamically by browser — i18n
  priority over static zh-CN).
- If jsdelivr CDN is unreachable, pages degrade to fully readable static (motion lost, no gate).
