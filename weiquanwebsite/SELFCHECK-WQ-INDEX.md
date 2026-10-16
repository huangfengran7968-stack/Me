# WeiQuan 首页重建 — 自检记录 (WORKER 1)

概念：**记忆星河 Memory Constellation** —— 深海军蓝宇宙底（原有 #0d0c1d / #1a192f 家族），
青色 #06b6d4 提升为唯一发光主色；暖金 #d4a574 仅配给「人生传记 / 记忆」暖意（已配额、有文档）。

## 量化
- 行数：5724 → 2066（-64%）；217KB → 128KB；内联 CSS 3680 行 → 外部 static/wq-award.css 772 行
- 颜色：35 个唯一 hex → 13 个（7 个 token + 4 个文档化派生色 + #ff5555 原 carousel 报错色 + #fff 二维码底）
- keyframes：36 → 4（marquee / scrollhint / echo / nav-linkin）
- h1：1 个（让AI，成为有记忆的陪伴）；lang="zh-CN" 保留；id 无重复

## 共享系统（供其他 worker 链接）
- `static/wq-award.css`：token 合约
  --wq-ink:#0d0c1d; --wq-ink2:#1a192f; --wq-ink3:#242a45; --wq-bone:#f0f4f8;
  --wq-mist:#a9b3d0; --wq-accent:#06b6d4; --wq-gold:#d4a574
  派生（文档化）：--wq-accent-deep:#0891b2, #22d3ee(hover), #0a0918/#141126(深色过渡)
- `static/wq-award.js`：GSAP/Lenis 规范接线（§1.1）、星座 canvas、章节导航、画廊 pin、
  磁吸 CTA、标签光标、hover 图像揭示、SplitText 行揭示。全部特性检测 + 降级。

## 字体
- Noto Serif SC（展示）+ Noto Sans SC（正文）：Google Fonts 链接原样保留
- 新增 **DM Mono**（拉丁子集，天然仅拉丁）：章节编号/时间戳/数字/标签。已文档化

## 短名单 11 模式处置
| # | 模式 | 处置 |
|---|------|------|
| 1 | 流体编辑排版 | ✅ 采用：clamp() + text-wrap:balance + text-box:trim |
| 2 | Lenis+GSAP | ✅ 采用：规范接线；reduced-motion/触屏跳过 Lenis |
| 3 | 进度条+章节导航 | ✅ 采用：顶部进度条 + 01–08 章节 rail |
| 4 | 品牌 preloader/页面过渡 | ❌ 拒绝：gate 风险；改用 per-page 入场编排 |
| 5 | 氛围 canvas | ✅ 采用：记忆星座，文本先绘、可见性门控、DPR≤2、降级静态帧 |
| 6 | 横向设备画廊 | ✅ 采用：pointer-fine pin+scrub+百分比；触屏堆叠/swipe 降级 |
| 7 | hover 图像揭示 | ✅ 采用：无 WebGL 层（CSS 艺术卡片跟随光标） |
| 8 | 磁吸+自定义光标 | ✅ 采用：pointer-fine 限定；避开原 3D-tilt 按钮防 transform 冲突 |
| 9 | 动态字体 | ✅ 采用：SplitText **按行**揭示（CJK 不做逐字 stagger） |
| 10 | marquee | ✅ 采用：纯 CSS；reduced-motion 静态 |
| 11 | 全屏覆盖导航 | ✅ 适配：复用原 hamburger JS（仅切 class），CSS 实现全屏覆盖+ stagger |
| 12 | vertical-rl 中文竖排 | ✅ 采用：章节竖排装饰列 |

## 两轮自我迭代（真实缺陷 → 修复）
Pass 1：
1. 磁吸与原 3D-tilt 同时写 `transform` 打架 → 磁吸排除 .btn-ios/.btn-android/.btn-secondary
2. 移动端桌面语言选择器/联系按钮仍可见 → ≤900px 隐藏 `.wq-langdesk` 与 nav 直接子 `.btn-nav`
3. `.wq-gallerymeta` 整体 aria-hidden 藏住了可聚焦的 timeline 按钮 → 只隐藏百分比读数
4. hover 预览卡渐变引入 4 个非 token 色 → 改为 token 派生渐变
Pass 2：
5. 无 JS/CDN/降级动效时画廊横轨被裁剪、后 3 块设备不可达 → 默认横向可 swipe（scroll-snap），仅 pin 成功时加 `.wq-devices--pinned` 取消滚动
6. modal 原脚本用 `style.display='block'` 内联，会覆盖 flex 居中 → 增加 `[style*="block"]{display:flex!important}` 规则

## 对比度（计算值）
- #06b6d4 on #0d0c1d = **7.95:1**（AAA）；on #1a192f = 7.07:1
- #f0f4f8 on #0d0c1d = 17.47:1；#a9b3d0 on #0d0c1d = 9.24:1（AAA）
- #d4a574 on #0d0c1d = 8.68:1（AAA）
- ⚠️ #06b6d4 on #f0f4f8 = 2.20:1 —— 设计中永不出现青底浅字/浅底青字

## 行为保留（原脚本逐字节保留）
- hamburger/nav toggle、三段脚本全部 byte-identical（已校验）
- android-download-link 流程（含 #android-download-link-2 / wechatGuide / localStorage 缓存）
- instructions 步骤图 carousel（9 张 image/guide/stepN.png 由 JS 数组加载）
- 完整 4 语言 i18n（translations + setLanguage + langBtn 绑定 + 计数器 + stagger observer + 传记回声 + 视频懒加载 + product timeline/smoke），所有目标 class/id 在重建 markup 中保留且顺序一致
- 资源审计：除 image/guide/*（JS 动态加载）外，零资源丢失；新增仅 static/wq-award.css/js；arrows1.png 已补回微信指引

## 诚实局限
1. 无真机/无头浏览器渲染验证——pin 画廊、Lenis 手感、星座 canvas 需人工目检
2. CDN（jsdelivr）在内网/弱网下失败时页面退化为静态（可读、无 gate），但动效全失
3. 语言切换会替换 SplitText 包裹后的 h1 文本（textContent），切换后该标题失去行揭示动画（仍可读）
4. 模态框打开时未调用 lenis.stop()，背景仍可平滑滚动（与原站行为一致，未改）
5. 横向画廊 pin 在桌面窄窗（<900px）降级为 swipe；超宽屏已用 max-content 轨道处理
