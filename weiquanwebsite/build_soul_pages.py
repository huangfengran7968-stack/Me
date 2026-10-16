#!/usr/bin/env python3
"""Build the 4 WeiQuan Soul product pages from ONE loud template ("记忆星河").

Usage: python3 build_soul_pages.py
Reads:  /tmp/pt_<page>-soul.js (verbatim pageTranslations), /tmp/*.svg, /tmp/specic_*.txt
Writes: sight-soul.html, touch-soul.html, pleasure-soul.html, scent-soul.html
        (in this directory: ~/workspace/projects/WeiQuanWebSite-award/)
"""
import re, html as htmllib

JD = "https://mall.jd.com/index-16561986.html?from=pc&cid=0"
FONTS = ("https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;700;900"
         "&family=Inter:wght@400;500;600;700"
         "&family=Noto+Serif+SC:wght@400;700;900"
         "&family=DM+Mono:wght@400;500&display=swap")

def load(p):
    with open(p, encoding="utf-8") as f:
        return f.read()

FEATURE_SVG = {k: load(f"/tmp/fic_{k}.svg") for k in ("sight", "pleasure")}
SPEC_ICONS = {k: load(f"/tmp/specic_{k}.txt").split("\n@@@\n") for k in ("sight", "touch", "pleasure", "scent")}
AGE_SVG = load("/tmp/age.svg")
PT = {k: load(f"/tmp/pt_{k}-soul.js") for k in ("sight", "touch", "pleasure", "scent")}

NAV = [("index.html", "首页"), ("sight-soul.html", "视"), ("touch-soul.html", "触"),
       ("scent-soul.html", "嗅"), ("pleasure-soul.html", "悦")]

PAGES = {
"sight": dict(
    body_class="soul-page soul-sight", char="视", soul_no="01",
    title="视 - DeepSire | 整理家庭影像，随时回看",
    description="视智能相框用于整理和展示家庭照片、视频与故事，按人物与时间关联内容，方便家人浏览与回顾。",
    badge="视 · 智能相框", subtitle="整理家庭影像，随时回看",
    btn1=("查看影像档案", "#philosophy"), btn2=("前往京东选购", JD),
    hero_img="image/main2.jpg", hero_alt="视",
    marquee=["整理家庭影像", "随时回看", "人物影像整理", "环境感知", "无线羁绊", "记忆星河"],
    ph_h2="为什么需要一块<em>更好整理内容</em>的相框？",
    ph_accent="更好整理内容",
    ph_ps=[
        "生命中最珍贵的，是那些<strong>注视我们的目光</strong>——家人的关切、爱人的笑意、宠物的依恋。",
        "视把照片、视频和故事按人物与时间整理，让家人更容易找到、浏览和补充共同经历。",
        "这不止是相框，也是家庭影像档案的展示窗口。",
    ],
    video=dict(poster="video/optimized/sight-poster.webp",
               aria="Sight photo frame and ambient lamp interaction video",
               hls="video/hls/sight/master.m3u8", fallback="video/optimized/sight-720p.mp4"),
    features_head=("核心体验", "它是如何工作的？"),
    features=[
        ("👁️", "人物影像整理", "将人物照片、视频与相关故事集中展示，保留清晰的时间与关系线索"),
        ("🌡️", "环境感知", "内置传感器感知您的到来自动亮屏，随环境光调节亮度"),
        ("📱", "无线羁绊", "通过\"微圈\"App，一键将手机中的此刻分享给相框中的TA"),
        (FEATURE_SVG["sight"], "人物与故事关联", "按人物、时间与关系组织照片和视频，方便查找相关家庭故事。"),
    ],
    stories_head=("他们的故事", "真实用户的使用体验"),
    stories=[
        ("🐕", "\"贝利的成长相册\"",
         "主人把金毛犬贝利从幼年到成年的照片和视频按日期导入视，家人可以在相框中沿时间线回看散步、旅行和日常玩耍的片段。"),
        ("💕", "\"我们的早餐约会，隔着12个时区\"",
         "他在纽约晨跑，视在伦敦的公寓中自动播放他沿途拍摄的晨曦。她在伦敦准备早餐，相框里的他气喘吁吁却笑容灿烂地说\"早安\"。一块屏幕，共享着两个同步的清晨，将地理距离消化在日常的共享视线里。"),
    ],
    specs_head=("技术基石", "精工铸造，品质保证"),
    specs=[
        ("10.1\"-21.5\"", "视网膜屏幕", "326 PPI · DCI-P3广色域"),
        ("IPS", "高清显示", "178°广视角 · 60Hz刷新率"),
        ("RK", "低功耗处理器", "四核ARM Cortex-A35"),
        ("Wi-Fi", "双频无线互联", "2.4G/5G双频 · 802.11ac"),
    ],
    selection=dict(kind="options", h2="让温暖的目光常驻此间", p="选择适合您空间的陪伴",
                   options=[dict(size="10.1\"", desc="精巧款", slogan="精巧相伴"),
                            dict(size="15.6\"", desc="经典款", slogan="经典守候"),
                            dict(size="21.5\"", desc="沉浸款", slogan="沉浸共鸣")],
                   btn=("前往京东选购", JD)),
    cta_links=[("index.html", "返回微圈首页"), ("touch-soul.html", "探索触"), ("scent-soul.html", "探索嗅")],
    age_notice=None,
),
"touch": dict(
    body_class="soul-page soul-touch", char="触", soul_no="02",
    title="触 - DeepSire | 心跳，是最亲密的语言",
    description="触智能戒指，用轻触与自定义节奏传递牵挂，让远方的陪伴在手边得到回应。",
    badge="触 · 智能戒指", subtitle="轻轻一触，把牵挂送到远方",
    btn1=("感受连接", "#philosophy"), btn2=("前往京东选购", JD),
    hero_img="image/main3.jpg", hero_alt="触",
    marquee=["轻轻一触", "牵挂即达", "默契触碰", "关怀节奏", "轻盈佩戴", "记忆星河"],
    ph_h2="感受，<em>无需言说</em>",
    ph_accent="无需言说",
    ph_ps=[
        "有些牵挂来不及说出口，却可以用一次轻触传达。",
        "触是你与所爱之人共享的<strong>互动暗号</strong>，把轻触、长按与自定义节奏，变成只有彼此懂得的回应。",
        "即使相隔千里，也能让想念在手边得到回应。",
    ],
    video=dict(poster="video/optimized/touch-poster.webp",
               aria="Touch ring interaction video",
               hls="video/hls/touch/master.m3u8", fallback="video/optimized/touch-720p.mp4"),
    features_head=("核心体验", "它是如何工作的？"),
    features=[
        ("❤️", "默契触碰", "轻触戒指，把此刻的想念化作温柔震动送到远方"),
        ("🌈", "关怀节奏", "预设或自定义互动节奏，让问候、晚安和\"我在这里\"各有回应"),
        ("💫", "轻盈佩戴", "轻量设计与IP68防水，适合融入通勤、居家与日常相伴"),
    ],
    stories_head=("他们的故事", "真实用户的使用体验"),
    stories=[
        ("❤️", "\"妈妈，我到家了\"",
         "母亲与远方的孩子约定了一个专属节奏：两次轻触代表“平安到家”，一次长按代表“想你了”。不用打断彼此，也能让牵挂及时抵达。"),
        ("💓", "\"跑完了，给你一个击掌\"",
         "身处不同城市的跑友，用约定好的触感节奏分享出发、抵达与完成训练的时刻。远方传来的回应，就像一次隔空击掌。"),
    ],
    specs_head=("技术基石", "精工铸造，品质保证"),
    specs=[
        ("细腻触感", "触觉反馈", "多档震动 · 自定义节奏"),
        ("7-10天", "超长续航", "Type-C快充 · 80mAh电池"),
        ("钛合金", "材质", "IP68防水 · 轻量坚固"),
        ("端对端", "加密通讯", "AES-256加密 · 金融级安全"),
    ],
    selection=dict(kind="tiers", h2="让牵挂随时有回应", p="选择属于你们的连接方式",
                   options=[
                       dict(cls="standard", tag="标准版", name="Touch Soul", slogan="轻触问候 日常陪伴",
                            features=["不锈钢", "IP68防水", "基础触感", "10天续航"]),
                       dict(cls="pro", tag="Pro", name="Touch Soul", slogan="匠心材质 专业触感",
                            features=["陶瓷/钛合金", "多档触感", "自定义节奏", "精密工艺"]),
                       dict(cls="ultra", tag="Ultra", name="Touch Soul", slogan="旗舰交互 灵动回应",
                            features=["双向回应", "智能节奏", "双触感模组", "加密连接"]),
                   ],
                   btn=("前往京东选购", JD)),
    cta_links=[("index.html", "返回微圈首页"), ("sight-soul.html", "探索视"), ("scent-soul.html", "探索嗅")],
    age_notice=None,
),
"pleasure": dict(
    body_class="soul-page soul-pleasure", char="悦", soul_no="03",
    title="悦 - DeepSire | 最亲密的距离，是感官的同频",
    description="悦智能亲密产品，以精密触觉反馈与共享互动节奏，创造超越物理距离的感官共振。",
    badge="悦 · 情感连接设备", subtitle="最亲密的距离，是感官的同频",
    btn1=("探索可能", "#philosophy"), btn2=("了解更多", JD),
    hero_img="image/main4.jpg", hero_alt="悦",
    marquee=["感官同频", "亲密共振", "谐律同步", "情境感知", "无界连接", "记忆星河"],
    ph_h2="连接，<em>不止于言语</em>",
    ph_accent="不止于言语",
    ph_ps=[
        "真正的亲密，是彼此互动节奏的共鸣，是探索未知的默契。",
        "悦是一系列精密的感官接口，旨在建立超越物理距离的<strong>深度信任与同步</strong>。",
        "将亲密关系转化为彼此可共同探索的私密艺术，让陪伴拥有最温暖的形态。",
    ],
    video=dict(poster="video/optimized/pleasure-poster.webp",
               aria="Pleasure device interaction video",
               hls="video/hls/pleasure/master.m3u8", fallback="video/optimized/pleasure-720p.mp4"),
    features_head=("核心体验", "它是如何工作的？"),
    features=[
        ("🎵", "谐律同步", "触觉反馈与互动节奏的精密同步算法，实现远程同频体验"),
        ("🎭", "情境感知", "设备可融入不同的情感剧本与氛围音乐，创造沉浸体验"),
        ("🔐", "无界连接", "低延迟加密连接，让分离成为另一种形式的亲密探索"),
        (FEATURE_SVG["pleasure"], "AI看片识别", "通过视觉识读神情与姿态，智能调节互动模式。"),
    ],
    stories_head=("他们的故事", "真实用户的使用体验"),
    stories=[
        ("🎨", "\"我们的触觉画布\"",
         "一对异地艺术情侣，将彼此约定的互动节奏转化为可被对方感知的触觉回应。他们说：\"即使相隔千里，我们也能在指尖收到熟悉的回应，这是一种全新的亲密对话。\""),
        ("💜", "\"重新发现彼此的语言\"",
         "结婚十年的夫妻通过悦探索新的感官模式。他们说：\"结婚久了，习惯了一切。但这个设备让我们重新发现了彼此，仿佛又谈了一次恋爱。\""),
    ],
    specs_head=("技术基石", "安全与品质保证"),
    specs=[
        ("亲肤级", "安全材料", "材质安全测试 · 亲肤硅胶"),
        ("UV-C", "收纳清洁", "定时维护 · 便捷收纳"),
        ("端对端", "加密通讯", "AES-256加密 · 金融级安全"),
        ("匠心", "设计工艺", "人体工学 · 极简美学"),
    ],
    selection=dict(kind="cards", h2="探索感官的无限可能", p="开启你们的亲密新篇章",
                   cards=[
                       dict(key="echo", brand="Pleasure Soul", name="Echo", cn="回声",
                            slogan="智能探索，丰富回应",
                            specs=["吮吸震动", "智能加热", "拍打模式", "多功能启蒙"]),
                       dict(key="mirage", brand="Pleasure Soul", name="Mirage", cn="幻影",
                            slogan="远程连接，虚影实感",
                            specs=["APP视频互动", "实时触感同步", "异地连接", "消除距离"]),
                       dict(key="surge", brand="Pleasure Soul", name="Surge", cn="澎湃",
                            slogan="巅峰动力，双重迸发",
                            specs=["超强脉冲引擎", "双重迸发", "多档可调", "极致强度"]),
                   ],
                   btn=("了解更多详情", JD)),
    cta_links=[("index.html", "返回微圈首页"), ("sight-soul.html", "探索视"),
               ("touch-soul.html", "探索触"), ("scent-soul.html", "探索嗅")],
    age_notice="本产品仅面向成年用户",
),
"scent": dict(
    body_class="soul-page soul-scent", char="嗅", soul_no="04",
    title="嗅 - DeepSire | 有些记忆，藏在气味里",
    description="嗅智能香氛机，气味是通往记忆的时光机。用精确的气味分子，为你的数字灵魂营造家园。",
    badge="嗅 · 智能香氛机", subtitle="有些记忆，藏在气味里",
    btn1=("唤醒记忆", "#philosophy"), btn2=("前往京东选购", JD),
    hero_img="image/main1.jpg", hero_alt="嗅",
    marquee=["气味记忆", "时光机", "场景气味库", "场景响应", "声光联动", "记忆星河"],
    ph_h2="气息，是<em>空间的情绪</em>",
    ph_accent="空间的情绪",
    ph_ps=[
        "视觉会模糊，声音会消散，但一缕熟悉的气味能瞬间将你锚定在过去的某个时刻。",
        "嗅是空间的调香师与记忆守护者，用精确的气味分子，为你的数字灵魂营造家园，为每一个当下定下情感的基调。",
        "闭上眼睛，让气味带你回到那一刻。",
    ],
    video=dict(poster="video/optimized/scent-poster.webp",
               aria="Scent diffuser interaction video",
               hls="video/hls/scent/master.m3u8", fallback="video/optimized/scent-720p.mp4"),
    features_head=("核心体验", "它是如何工作的？"),
    features=[
        ("🌸", "场景气味库", "在App中选择\"雨夜读书\"、\"林中漫步\"等场景，自动释放复方精油"),
        ("💭", "场景响应", "与触联动，根据你主动选择的夜晚、阅读或放松场景释放对应香氛"),
        ("🎵", "声光联动", "播放音乐时，烟雾节奏与灯光随旋律变化，营造沉浸氛围"),
    ],
    stories_head=("他们的故事", "真实用户的使用体验"),
    stories=[
        ("🌸", "\"当我在写童年，房间就飘着槐花香\"",
         "一位作家在创作童年题材小说时，通过嗅设置槐花香气。每一段落都沉浸在熟悉的味道中，灵感如泉涌，文字仿佛都有了花香的气息。"),
        ("☕", "\"星期天早晨，是咖啡和阳光的味道\"",
         "一对年轻夫妇在每个周日上午10点设置\"周末早晨\"模式——现磨咖啡的醇厚混合着透过窗帘的暖阳气息，为平凡的日子增添仪式感，让家成为真正的港湾。"),
    ],
    specs_head=("技术基石", "精工铸造，品质保证"),
    specs=[
        ("二流体", "超细雾化", "1-5μm颗粒 · 99%雾化效率"),
        ("APP+", "蓝牙智能控制", "远程定时 · 浓度调节"),
        ("多容量", "可选", "50ml/100ml/200ml"),
        ("丰富", "精油库", "100+香型 · 定期更新"),
    ],
    selection=dict(kind="cards", h2="让气味带你回到那一刻", p="选择属于你的气味记忆",
                   cards=[
                       dict(key="voyager", brand="Scent Soul", name="Voyager", cn="旅伴",
                            slogan="旅途相伴，气味随行",
                            specs=["车载专用", "便携设计", "长效续航", "多香兼容"]),
                       dict(key="aura", brand="Scent Soul", name="Aura", cn="灵韵",
                            slogan="光影律动，香气成诗",
                            specs=["悬浮雾化", "炫彩灯效", "智能定时", "静音运行"]),
                       dict(key="sanctum", brand="Scent Soul", name="Sanctum", cn="圣所",
                            slogan="殿堂气场，沉浸如境",
                            specs=["大空间覆盖", "高级香氛", "恒久扩散", "静音风机"]),
                   ],
                   btn=("前往京东选购", JD)),
    cta_links=[("index.html", "返回微圈首页"), ("sight-soul.html", "探索视"), ("touch-soul.html", "探索触")],
    age_notice=None,
),
}

TEMPLATE = """<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title}</title>
    <meta name="description" content="{description}">
    <link rel="icon" href="image/logo.png" type="image/png">
    <link rel="apple-touch-icon" href="image/logo.png">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="{fonts}" rel="stylesheet">
    <link rel="stylesheet" href="static/shared.css">
    <link rel="stylesheet" href="static/product-common.css">
    <link rel="stylesheet" href="static/soul-impact.css">
    <link rel="stylesheet" href="static/wq-award.css">
</head>
<body class="{body_class}">
    <div class="soul-progress" aria-hidden="true"><span></span></div>
    <div class="grain" aria-hidden="true"></div>

    <header class="header">
        <nav class="navbar" aria-label="主导航">
            <a href="index.html" class="logo">
                <img src="image/logo.png" alt="微圈 Logo" class="logo-image">
                <span class="logo-text">微 圈</span>
            </a>
            <ul class="nav-links">
{nav_items}
                <li class="nav-language-switcher">
                    <div class="language-switcher">
                        <button class="lang-btn active" data-lang="zh">中</button>
                        <button class="lang-btn" data-lang="en">EN</button>
                    </div>
                </li>
            </ul>
            <div class="hamburger" role="button" tabindex="0" aria-label="打开菜单">☰</div>
        </nav>
    </header>

    <main>
    <section class="hero" id="top">
        <div class="hero-bg"><img src="{hero_img}" alt="{hero_alt}"></div>
        <div class="hero-tint" aria-hidden="true"></div>
        <div class="hero-vertical" aria-hidden="true">记忆星河 · <b>让 AI，成为有记忆的陪伴</b></div>
        <div class="hero-content">
            <span class="hero-badge"><span class="hero-badge-text">{badge}</span><span class="mono" aria-hidden="true">SOUL·{soul_no}</span></span>
            <div class="hero-char-mask">
                <div class="hero-char-wrap">
                    <h1 class="soul-char display-cjk" data-char="{char}">{char}</h1>
                </div>
            </div>
            <p class="hero-subtitle">{subtitle}</p>
            <div class="hero-buttons">
                <a href="{btn1_href}" class="btn-primary magnetic">{btn1}</a>
                <a href="{btn2_href}" target="_blank" rel="noopener" class="btn-secondary">{btn2}</a>
            </div>
{age_notice}
        </div>
        <div class="scroll-hint" aria-hidden="true"><small>SCROLL</small><span class="scroll-hint-line"></span></div>
    </section>

    <div class="marquee" aria-hidden="true">
        <div class="marquee-track">
            <div class="marquee-chunk">{marquee_chunk}</div>
            <div class="marquee-chunk">{marquee_chunk}</div>
        </div>
    </div>

    <section class="philosophy" id="philosophy">
        <div class="container">
            <div class="philosophy-grid">
                <div class="philosophy-content reveal">
                    <span class="philosophy-kicker">记忆星河 · 序章</span>
                    <h2 data-accent="{ph_accent}">{ph_h2}</h2>
{ph_ps}
                </div>
                <div class="philosophy-video reveal reveal-delay-2">
                    <div class="video-theater">
                        <span class="vt-tag vt-tl"><b>●</b>&nbsp;REC · 记忆星河剧场</span>
                        <span class="vt-tag vt-tr mono">SOUL·{soul_no}</span>
                        <video class="w-full h-auto block" muted loop controls playsinline preload="none" poster="{poster}" aria-label="{aria}" data-product-video data-autoplay="true" data-hls="{hls}" data-fallback="{fallback}">
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="features" id="features">
        <div class="container">
            <div class="section-header reveal">
                <span class="chapter-num">02</span>
                <h2>{features_h2}</h2>
                <p>{features_p}</p>
            </div>
            <div class="features-grid">
{feature_cards}
            </div>
        </div>
        <div class="hover-preview" aria-hidden="true"><img src="{poster}" alt=""></div>
    </section>

    <section class="stories" id="stories">
        <div class="container">
            <div class="section-header reveal">
                <span class="chapter-num">03</span>
                <h2>{stories_h2}</h2>
                <p>{stories_p}</p>
            </div>
            <div class="stories-grid">
{story_cards}
            </div>
        </div>
    </section>

    <section class="specs" id="specs">
        <div class="container">
            <div class="section-header reveal">
                <span class="chapter-num">04</span>
                <h2>{specs_h2}</h2>
                <p>{specs_p}</p>
            </div>
            <div class="specs-grid">
{spec_items}
            </div>
        </div>
    </section>

{selection}
    </main>

    <footer class="footer">
        <div class="container">
            <a href="index.html" class="footer-logo">
                <img src="image/logo.png" alt="微圈">
                <span class="logo-text">微 圈</span>
            </a>
            <div class="footer-contact">
                <p>联系我们：<a href="mailto:support@meeetta.com">support@meeetta.com</a></p>
            </div>
            <div class="footer-info">
                <p>© 2024 深颖数字（深圳）有限公司。All Rights Reserved.</p>
                <p>备案号：<a href="https://beian.miit.gov.cn/">粤 ICP 备 2023062123 号</a></p>
            </div>
        </div>
    </footer>

    <script src="static/wq-award.js"></script>
    <script src="static/shared.js"></script>
    <script src="static/product-video.js"></script>
    <script>
        // 本页翻译数据（沿用原站文案，由 shared.js 的 applyTranslations 驱动）
        {translations}
    </script>
</body>
</html>
"""

def esc(s):
    return htmllib.escape(s, quote=True)

def nav_items(active_file):
    out = []
    for href, label in NAV:
        cls = ' class="active"' if href == active_file else ""
        out.append(f'                <li><a href="{href}"{cls}>{label}</a></li>')
    return "\n".join(out)

def marquee_chunk(words):
    parts = []
    for i, w in enumerate(words):
        cls = ' class="hollow"' if i % 2 else ""
        parts.append(f'<span{cls}>{esc(w)}</span><i>✦</i>')
    parts.append('<span class="mono-tag">MEMORY NEBULA</span><i>✦</i>')
    return "".join(parts)

def feature_cards(feats):
    out = []
    for i, (icon, title, desc) in enumerate(feats):
        d = i + 1
        icon_html = icon if icon.strip().startswith("<svg") else esc(icon)
        out.append(
            f'                <div class="feature-card reveal reveal-delay-{d}">\n'
            f'                    <span class="scan-edge"></span>\n'
            f'                    <div class="feature-icon">{icon_html}</div>\n'
            f'                    <h3>{esc(title)}</h3>\n'
            f'                    <p>{esc(desc)}</p>\n'
            f'                </div>')
    return "\n".join(out)

def story_cards(stories):
    out = []
    for i, (icon, title, text) in enumerate(stories):
        n = f"{i+1:03d}"
        out.append(
            f'                <div class="story-card reveal reveal-delay-{i+1}">\n'
            f'                    <div class="story-content">\n'
            f'                        <span class="story-tag">MEMORY · {n}</span>\n'
            f'                        <h3><span class="story-icon">{esc(icon)}</span>{esc(title)}</h3>\n'
            f'                        <p class="story-text">{esc(text)}</p>\n'
            f'                    </div>\n'
            f'                </div>')
    return "\n".join(out)

def spec_items(specs, icons):
    out = []
    for i, (value, label, detail) in enumerate(specs):
        n = f"SP.{i+1:02d}"
        icon = icons[i].strip()
        icon_html = icon if icon.startswith("<svg") else f"<span>{esc(icon)}</span>"
        out.append(
            f'                <div class="spec-item reveal reveal-delay-{i+1}">\n'
            f'                    <span class="spec-num">{n}</span>\n'
            f'                    <div class="spec-icon">{icon_html}</div>\n'
            f'                    <div class="spec-value">{esc(value)}</div>\n'
            f'                    <div class="spec-label">{esc(label)}</div>\n'
            f'                    <div class="spec-detail">{esc(detail)}</div>\n'
            f'                </div>')
    return "\n".join(out)

def selection_section(sel, links, soul_no):
    kind = sel["kind"]
    links_html = "\n".join(
        f'                <a href="{href}">{esc(label)}</a>' for href, label in links)
    btn_label, btn_href = sel["btn"]
    if kind == "options":
        opts = "\n".join(
            f'                    <div class="product-option">\n'
            f'                        <div class="size">{esc(o["size"])}</div>\n'
            f'                        <div class="desc">{esc(o["desc"])}</div>\n'
            f'                        <div class="slogan">{esc(o["slogan"])}</div>\n'
            f'                    </div>' for o in sel["options"])
        body = (f'                <div class="product-options reveal reveal-delay-2">\n{opts}\n'
                f'                </div>')
        return (
            f'    <section class="cta" id="cta">\n'
            f'        <div class="container">\n'
            f'            <div class="cta-content">\n'
            f'                <span class="chapter-num reveal">05</span>\n'
            f'                <h2 class="reveal">{esc(sel["h2"])}</h2>\n'
            f'                <p class="reveal reveal-delay-1">{esc(sel["p"])}</p>\n'
            f'{body}\n'
            f'                <div class="cta-buttons reveal reveal-delay-3">\n'
            f'                    <a href="{btn_href}" target="_blank" rel="noopener" class="btn-primary magnetic">{esc(btn_label)}</a>\n'
            f'                </div>\n'
            f'                <div class="cta-links reveal reveal-delay-4">\n{links_html}\n'
            f'                </div>\n'
            f'            </div>\n'
            f'        </div>\n'
            f'    </section>')
    if kind == "tiers":
        opts = []
        for o in sel["options"]:
            feats = "\n".join(f'                            <div class="feature-item">{esc(x)}</div>' for x in o["features"])
            opts.append(
                f'                    <div class="product-option {o["cls"]}">\n'
                f'                        <div class="shine"></div>\n'
                f'                        <div class="tag">{esc(o["tag"])}</div>\n'
                f'                        <div class="name">{esc(o["name"])}</div>\n'
                f'                        <div class="slogan">{esc(o["slogan"])}</div>\n'
                f'                        <div class="features">\n{feats}\n'
                f'                        </div>\n'
                f'                        <div class="light-bar"></div>\n'
                f'                    </div>')
        body = '                <div class="product-options reveal reveal-delay-2">\n' + "\n".join(opts) + '\n                </div>'
        return (
            f'    <section class="cta" id="cta">\n'
            f'        <div class="container">\n'
            f'            <div class="cta-content">\n'
            f'                <span class="chapter-num reveal">05</span>\n'
            f'                <h2 class="reveal">{esc(sel["h2"])}</h2>\n'
            f'                <p class="reveal reveal-delay-1">{esc(sel["p"])}</p>\n'
            f'{body}\n'
            f'                <div class="cta-buttons reveal reveal-delay-3">\n'
            f'                    <a href="{btn_href}" target="_blank" rel="noopener" class="btn-primary magnetic">{esc(btn_label)}</a>\n'
            f'                </div>\n'
            f'                <div class="cta-links reveal reveal-delay-4">\n{links_html}\n'
            f'                </div>\n'
            f'            </div>\n'
            f'        </div>\n'
            f'    </section>')
    # kind == "cards"
    cards = []
    for c in sel["cards"]:
        specs = "\n".join(f'                            <div class="product-spec-item">{esc(x)}</div>' for x in c["specs"])
        cards.append(
            f'                <div class="product-card card-{c["key"]}" data-product="{c["key"]}">\n'
            f'                    <div class="product-brand">{esc(c["brand"])}</div>\n'
            f'                    <div class="product-name">{esc(c["name"])}</div>\n'
            f'                    <div class="product-cn">{esc(c["cn"])}</div>\n'
            f'                    <div class="product-slogan">{esc(c["slogan"])}</div>\n'
            f'                    <div class="specs-area">\n'
            f'                        <div class="specs-grid-inner">\n{specs}\n'
            f'                        </div>\n'
            f'                    </div>\n'
            f'                    <div class="mobile-tap-hint">点击查看详情</div>\n'
            f'                </div>')
    return (
        f'    <section class="product-selection" id="product-selection">\n'
        f'        <div class="container">\n'
        f'            <div class="section-header reveal">\n'
        f'                <span class="chapter-num">05</span>\n'
        f'                <h2>{esc(sel["h2"])}</h2>\n'
        f'                <p>{esc(sel["p"])}</p>\n'
        f'            </div>\n'
        f'            <div class="product-cards-grid reveal reveal-delay-1">\n' + "\n".join(cards) + '\n'
        f'            </div>\n'
        f'            <div class="cta-buttons reveal reveal-delay-2">\n'
        f'                <a href="{btn_href}" target="_blank" rel="noopener" class="btn-primary magnetic">{esc(btn_label)}</a>\n'
        f'            </div>\n'
        f'            <div class="cta-links reveal reveal-delay-3">\n{links_html}\n'
        f'            </div>\n'
        f'        </div>\n'
        f'    </section>')

def build(key):
    d = PAGES[key]
    active = f"{key}-soul.html"
    age = ""
    if d["age_notice"]:
        age = (f'            <div class="age-notice">\n'
               f'                {AGE_SVG}\n'
               f'                {esc(d["age_notice"])}\n'
               f'            </div>\n').rstrip("\n")
    ph_ps = "\n".join(f'                    <p>{p}</p>' for p in d["ph_ps"])
    return TEMPLATE.format(
        title=esc(d["title"]), description=esc(d["description"]), fonts=FONTS,
        body_class=d["body_class"],
        nav_items=nav_items(active),
        char=d["char"], soul_no=d["soul_no"],
        badge=esc(d["badge"]), subtitle=esc(d["subtitle"]),
        btn1=esc(d["btn1"][0]), btn1_href=d["btn1"][1],
        btn2=esc(d["btn2"][0]), btn2_href=d["btn2"][1],
        hero_img=d["hero_img"], hero_alt=esc(d["hero_alt"]),
        age_notice=age,
        marquee_chunk=marquee_chunk(d["marquee"]),
        ph_h2=d["ph_h2"], ph_accent=d["ph_accent"], ph_ps=ph_ps,
        poster=d["video"]["poster"], aria=esc(d["video"]["aria"]),
        hls=d["video"]["hls"], fallback=d["video"]["fallback"],
        features_h2=esc(d["features_head"][0]), features_p=esc(d["features_head"][1]),
        feature_cards=feature_cards(d["features"]),
        stories_h2=esc(d["stories_head"][0]), stories_p=esc(d["stories_head"][1]),
        story_cards=story_cards(d["stories"]),
        specs_h2=esc(d["specs_head"][0]), specs_p=esc(d["specs_head"][1]),
        spec_items=spec_items(d["specs"], SPEC_ICONS[key]),
        selection=selection_section(d["selection"], d["cta_links"], d["soul_no"]),
        translations=PT[key],
    )

if __name__ == "__main__":
    for key in ("sight", "touch", "pleasure", "scent"):
        out = build(key)
        with open(f"{key}-soul.html", "w", encoding="utf-8") as f:
            f.write(out)
        print(f"{key}-soul.html: {len(out)} chars, {out.count(chr(10))+1} lines")
