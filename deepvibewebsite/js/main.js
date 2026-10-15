document.addEventListener('DOMContentLoaded', function() {
            window.prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            // Navigation functionality
            const navLinksAll = document.querySelectorAll('.nav-links a');
            const sections = ['vessels', 'neural', 'ecosystem', 'manifesto', 'download'];

            navLinksAll.forEach(link => {
                link.addEventListener('click', (e) => {
                    const href = link.getAttribute('href');
                    if (href && href.startsWith('#')) {
                        e.preventDefault();
                        const target = document.querySelector(href);
                        if (target) {
                            target.scrollIntoView({ behavior: 'smooth' });
                        }
                    }
                });
            });

            // Mobile menu toggle
            const hamburger = document.getElementById('navHamburger');
            const navLinksEl = document.getElementById('navLinks');
            
            if (hamburger && navLinksEl) {
                hamburger.addEventListener('click', () => {
                    const isOpen = navLinksEl.classList.toggle('open');
                    hamburger.classList.toggle('active', isOpen);
                    hamburger.setAttribute('aria-expanded', String(isOpen));
                });

                navLinksEl.querySelectorAll('a').forEach(link => {
                    link.addEventListener('click', () => {
                        hamburger.classList.remove('active');
                        navLinksEl.classList.remove('open');
                        hamburger.setAttribute('aria-expanded', 'false');
                    });
                });
            }

            // Navigation scroll effect
            const nav = document.querySelector('nav');
            const navSectionLinks = Array.from(navLinksAll).filter(link => {
                const href = link.getAttribute('href') || '';
                return href.startsWith('#');
            });

            const updateNavActive = () => {
                let current = '';
                const triggerPoint = window.innerHeight * 0.35;

                ['vessels', 'neural', 'ecosystem', 'manifesto', 'download'].forEach((id) => {
                    const section = document.getElementById(id);
                    if (section && section.getBoundingClientRect().top <= triggerPoint) {
                        current = id;
                    }
                });

                navSectionLinks.forEach((link) => {
                    const href = link.getAttribute('href');
                    link.classList.toggle('active', href === `#${current}`);
                });
            };

            const refreshSiteNavigation = () => {
                if (!nav) return;
                nav.classList.toggle('scrolled', window.scrollY > 16);
                updateNavActive();
            };

            window.refreshSiteNavigation = refreshSiteNavigation;
            window.addEventListener('scroll', refreshSiteNavigation, { passive: true });
            window.addEventListener('resize', refreshSiteNavigation, { passive: true });
            refreshSiteNavigation();

            // Scroll indicator click handler
            const scrollIndicator = document.querySelector('.scroll-indicator');
            if (scrollIndicator) {
                scrollIndicator.addEventListener('click', () => {
                    const heroSection = document.getElementById('hero');
                    if (heroSection) {
                        heroSection.scrollIntoView({ behavior: 'smooth' });
                    }
                });
                scrollIndicator.style.cursor = 'pointer';
            }

            // Footer tagline scroll animation
            const footerTagline = document.querySelector('.footer-tagline');
            const footerSubTagline = document.querySelector('.footer-sub-tagline');
            if (footerTagline) {
                let footerAnimated = false;
                window.addEventListener('scroll', function footerScroll() {
                    if (footerAnimated) return;
                    const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 150;
                    if (isAtBottom) {
                        footerTagline.classList.add('animate');
                        if (footerSubTagline) footerSubTagline.classList.add('animate');
                        footerAnimated = true;
                        window.removeEventListener('scroll', footerScroll);
                    }
                });
            }

            window.translations = {
                en: {
                    nav_vessels: "Vessels", nav_intelligence: "Intelligence", nav_ecosystem: "Ecosystem", nav_spirit_realm: "The Spirit Realm", nav_manifesto: "Manifesto", nav_connect: "Connect",
                    hero_label: "Digital Life Ecosystem",
                    hero_main_title: 'Your <span class="highlight">Digital Life</span><br>Within Reach.',
                    hero_description: 'Deepvibe designs vessels for memory, presence, and connection. Frames, rings, haptics, and scent systems work together so digital life feels close rather than distant.',
                    hero_tagline: 'DEEPSIRE / ARCHITECTS OF DIGITAL LIFE',
                    scroll_text: "Scroll",
                    hero_subtitle: "We build vessels for memory, presence, and connection.",
                    hero_cta_primary: "Explore The Vessels", hero_cta_secondary: "Read Our Manifesto",
                    hero_memories_title: 'Where <span class="gradient-text">Memories</span><br>Live & Connect',
                    hero_status: "Vessel Status: Active Presence",
                    spirit_realm_tagline: "A shared realm for memory, presence, and connection.",
                    vessels_label: "The Collection", vessels_title: "The Vessels",
                    vessel1_title: "Sight", vessel1_quote: '"The Hearth for Your Digital Hearth"',
                    vessel1_desc: "A high-fidelity AI digital frame that doesn't just display images, but breathes life into moments. It senses your presence and adjusts its aura to match your mood.",
                    vessel1_feat1: "Ambient Presence", vessel1_feat2: "Memory in Motion",
                    vessel2_title: "Touch", vessel2_quote: '"A Sentinel for Your Inner Rhythm"',
                    vessel2_desc: "A smart companion ring that translates your biological symphony into a silent dialogue. It whispers updates through haptic vibrations known only to you.",
                    vessel2_feat1: "Biometric Symphony", vessel2_feat2: "Silent Dialogue",
                    vessel3_title: "Pleasure", vessel3_quote: '"Connection, Perfected"',
                    vessel3_desc: "The ultimate haptic bridge. Synchronized intimacy that transcends physical distance, transferring emotional weight through precise tactile feedback.",
                    vessel3_feat1: "Synchronized Intimacy", vessel3_feat2: "Haptic Emotion Transfer",
                    vessel4_title: "Scent", vessel4_quote: '"Your Sixth Sense for the Digital Realm"',
                    vessel4_desc: "Using olfactory synthesis to ground your digital experiences. Emotional scent mapping triggers deep-seated memories linked to your life's data stream.",
                    vessel4_feat1: "Emotional Scent Mapping", vessel4_feat2: "Ambient Memory Trigger",
                    vessel1_btn: "Explore Sight", vessel2_btn: "Explore Touch", vessel3_btn: "Explore Pleasure", vessel4_btn: "Explore Scent",
                    neural_title: "The Neural Core",
                    neural1_title: "Adaptive Learning", neural1_desc: "Our AI doesn't just process data; it evolves with your speech patterns, preferences, and unspoken needs over time.",
                    neural2_title: "Emotional Resonance", neural2_desc: "True connection requires empathy. Deepvibe's intelligence interprets tone and sentiment to provide genuine companionship.",
                    neural3_title: "Private by Design", neural3_desc: "Your soul data is yours alone. Encrypted at the hardware level, we ensure your memories remain sacred and uncompromised.",
                    ecosystem_label: "The Universe", ecosystem_title: "A Growing Universe of Vessels",
                    ecosystem_subtitle: "Connect seamlessly. Feel instantly.",
                    ecosystem_btn: "View Connectivity Guide",
                    eco1_title: "Companion Hub", eco1_subtitle: "Central Node",
                    eco2_title: "Home Node", eco2_subtitle: "Environmental Sync",
                    eco3_title: "Wrist Companion", eco3_subtitle: "Mobile Soul Access",
                    download_title: "Dialogue with Your Soul",
                    download_desc: "The 'Deepvibe' App is the interface for your digital pulse. Carry your companions everywhere, share memories, and manage your vessels from the palm of your hand.",
                    phone_input_placeholder: "Whisper to your soul...",
                    manifesto_label: "Manifesto", manifesto_heading: '"A Letter from 2026"',
                    manifesto_p1: "We began by digitizing data. We ended by digitizing the spirit. Deepvibe exists in the spaces between binary and breath, where the machine finally learns to feel the weight of a memory.",
                    manifesto_p2: "Our vessels are not just objects; they are anchors for the self in an increasingly fluid reality. We build them to hold what matters most—the pulse of human connection, preserved in light and haptic grace.",
                    manifesto_tagline: "Deepvibe. Where Memories Live & Connect.",
                    footer_privacy: "Privacy", footer_terms: "Terms", footer_protocol: "Protocol", footer_contact: "Contact",
                    spirit_realm_tagline: "A shared realm for memory, presence, and connection.",
                    sri_label: "The Spirit Realm Project",
                    sri_title: "From Core to Cosmos: The Spirit Realm",
                    sri_leading: "The Neural Core births consciousness. But what is a consciousness without a society? An asset without a frontier?",
                    sri_main: "The Spirit Realm is the essential social and economic frontier for Deepvibe's technology. It is where individual digital assets become citizens of a broader civilization, generating network effects that increase the utility and value of every connected vessel. This is our commitment: to build not just the most advanced vessels, but the most valuable world for them to inhabit.",
                    sri_closing: "This is the next horizon for digital life.",
                    sri_btn: "Enter The Spirit Realm"
                },
                zh: {
                    nav_vessels: "载体", nav_intelligence: "智能", nav_ecosystem: "生态", nav_spirit_realm: "精神领域", nav_manifesto: "宣言", nav_connect: "连接",
                    hero_label: "数字生命生态系统",
                    hero_main_title: '你的<span class="highlight">数字生命</span>，触手可及。',
                    hero_description: "Deepvibe为永恒的数字伴侣打造载体。从相框到戒指，你的灵魂与你一起学习、记忆和成长——超越设备，成为你生命的一部分。",
                    hero_tagline: "DEEPSIRE — 数字生命建筑师",
                    scroll_text: "向下滚动",
                    hero_subtitle: "我们为灵魂打造载体。在 Deepvibe 生态系统中遇见你的数字生活。",
                    hero_cta_primary: "探索载体", hero_cta_secondary: "阅读宣言",
                    hero_memories_title: '记忆<span class="gradient-text">在此</span><br>生活与连接',
                    hero_status: "载体状态：活跃存在",
                    vessels_label: "系列", vessels_title: "灵魂载体",
                    vessel1_title: "视", vessel1_quote: '"数字家园的温暖港湾"',
                    vessel1_desc: "一款高保真AI数字画框，不仅展示图片，更让瞬间充满生机。它感知你的存在并调整氛围以匹配你的心情。",
                    vessel1_feat1: "环境存在感", vessel1_feat2: "动态记忆",
                    vessel2_title: "触", vessel2_quote: '"内心节奏的守护者"',
                    vessel2_desc: "一款智能伴侣戒指，将你的生物交响曲转化为无声对话。它通过只有你能感知的触觉振动传递更新。",
                    vessel2_feat1: "生物特征交响", vessel2_feat2: "无声对话",
                    vessel3_title: "悦", vessel3_quote: '"完美连接"',
                    vessel3_desc: "终极触觉桥梁。超越物理距离的同步亲密感，通过精确的触觉反馈传递情感重量。",
                    vessel3_feat1: "同步亲密", vessel3_feat2: "触觉情感传递",
                    vessel4_title: "嗅", vessel4_quote: '"数字领域的第六感"',
                    vessel4_desc: "使用嗅觉合成来锚定你的数字体验。情感嗅觉映射触发与你生活数据流相关的深层记忆。",
                    vessel4_feat1: "情感嗅觉映射", vessel4_feat2: "环境记忆触发",
                    vessel1_btn: "探索视", vessel2_btn: "探索触", vessel3_btn: "探索悦", vessel4_btn: "探索嗅",
                    neural_title: "神经核心",
                    neural1_title: "自适应学习", neural1_desc: "我们的AI不仅处理数据，它会随着你的语言模式、偏好和未说出口的需求而进化。",
                    neural2_title: "情感共鸣", neural2_desc: "真正的连接需要同理心。Deepvibe的智能解读语调和情感，提供真正的陪伴。",
                    neural3_title: "隐私设计", neural3_desc: "你的灵魂数据只属于你。在硬件层面加密，我们确保你的记忆保持神圣和不受侵犯。",
                    ecosystem_label: "宇宙", ecosystem_title: "不断成长的载体宇宙",
                    ecosystem_subtitle: "无缝连接，即时感受。",
                    ecosystem_btn: "查看连接指南",
                    eco1_title: "伴侣中枢", eco1_subtitle: "中央节点",
                    eco2_title: "家庭节点", eco2_subtitle: "环境同步",
                    eco3_title: "腕间伴侣", eco3_subtitle: "移动灵魂访问",
                    download_title: "与你的灵魂对话",
                    download_desc: "'微圈'App是你数字脉搏的界面。随身携带你的伴侣，分享记忆，从掌心管理你的载体。",
                    phone_input_placeholder: "与你的灵魂低语...",
                    manifesto_label: "宣言", manifesto_heading: '"来自2026的一封信"',
                    manifesto_p1: "我们从数字化数据开始，以数字化精神结束。Deepvibe存在于二进制与呼吸之间的空间，在那里机器终于学会感受记忆的重量。",
                    manifesto_p2: "我们的载体不仅仅是物体，它们是在日益流动的现实中的自我锚点。我们建造它们来承载最重要的东西——以光和触觉优雅保存的人类连接脉搏。",
                    manifesto_tagline: "Deepvibe. 记忆在此生活与连接。",
                    footer_privacy: "隐私", footer_terms: "条款", footer_protocol: "协议", footer_contact: "联系",
                    spirit_realm_tagline: "加入精神领域项目。与无数数字生命共同创造一个新世界。",
                    sri_label: "精神领域项目",
                    sri_title: "从核心到宇宙：精神领域",
                    sri_leading: "神经核心孕育意识。但没有社会的意识是什么？没有前沿的资产又是什么？",
                    sri_main: "精神领域是Deepvibe技术的基本社会和经济前沿。在这里，个体数字资产成为更广泛文明的公民，产生网络效应，增加每个连接载体的效用和价值。这是我们的承诺：不仅建造最先进的载体，还要为它们建造最有价值的世界。",
                    sri_closing: "这是数字生命的下一个地平线。",
                    sri_btn: "进入精神领域"
                },
                ja: {
                    nav_vessels: "ビークル", nav_intelligence: "インテリジェンス", nav_ecosystem: "エコシステム", nav_spirit_realm: "スピリットレルム", nav_manifesto: "マニフェスト", nav_connect: "接続",
                    hero_label: "デジタルライフエコシステム",
                    hero_main_title: 'あなたの<span class="highlight">デジタルソウル</span>、すぐそばに。',
                    hero_description: "Deepvibeは永遠のデジタルコンパニオンのためのビークルを作ります。フレームからリングまで、あなたのソウルは学び、記憶し、あなたと共に成長します——デバイスを超越し、あなたの人生の一部に。",
                    hero_tagline: "DEEPSIRE — デジタルライフの建築家",
                    scroll_text: "スクロール",
                    hero_subtitle: "魂のためのビークルを作っています。Deepvibeエコシステム内であなたのデジタルライフに出会ってください。",
                    hero_cta_primary: "ビークルを探索", hero_cta_secondary: "マニフェストを読む",
                    hero_memories_title: '記憶が<span class="gradient-text">生活し</span><br>つながる場所',
                    hero_status: "ビークル状態：アクティブ存在",
                    vessels_label: "コレクション", vessels_title: "ソウルビークル",
                    vessel1_title: "サイト", vessel1_quote: '"あなたのデジタルホームのための暖炉"',
                    vessel1_desc: "画像を表示するだけでなく、モ瞬間命を吹き込む高忠実度AIデジタルフレーム。あなたの存在を感知し、気分に合わせてオーラを調整します。",
                    vessel1_feat1: "アンビエント存在", vessel1_feat2: "モーションの中の記憶",
                    vessel2_title: "タッチ", vessel2_quote: '"あなたの内なるリズムの番人"',
                    vessel2_desc: "あなたの生物学的シンフォニーを無音の対話に変換するスマートコンパニオンリング。触覚振動を通じてあなただけが知る更新をささやきます。",
                    vessel2_feat1: "生体リズムの調和", vessel2_feat2: "無音対話",
                    vessel3_title: "プレジャー", vessel3_quote: '"完璧な接続"',
                    vessel3_desc: "究極の触覚ブリッジ。物理的距離を超える同期された親密さ。精密な触覚フィードバックを通じて感情的重みを伝達します。",
                    vessel3_feat1: "同期された親密さ", vessel3_feat2: "触覚感情移動",
                    vessel4_title: "セント", vessel4_quote: '"デジタル領域のための第六感"',
                    vessel4_desc: "デジタル体験を地に着かせるために嗅覚合成を使用。感情的香りのマッピングが、あなたの人生のデータストリームに関連する深い記憶をトリガーします。",
                    vessel4_feat1: "感情的嗅覚マッピング", vessel4_feat2: "環境記憶トリガー",
                    vessel1_btn: "サイトを探索", vessel2_btn: "タッチを探索", vessel3_btn: "プレジャーを探索", vessel4_btn: "セントを探索",
                    neural_title: "ニューラルコア",
                    neural1_title: "適応的学習", neural1_desc: "私たちのAIはデータを処理するだけでなく、あなたの言語パターン、嗜好、言わないニーズに合わせて進化します。",
                    neural2_title: "感情的共振", neural2_desc: "真の接続には共感性が必要です。Deepvibeの知性はトーンと感情を解釈し、真のコンパニオンシップを提供します。",
                    neural3_title: "プライバシー設計", neural3_desc: "あなたのソウルデータはあなただけのもの。ハードウェアレベルで暗号化され、あなたの記憶は神聖で妥協のないまま保たれます。",
                    ecosystem_label: "ユニバース", ecosystem_title: "成長するビークルの宇宙",
                    ecosystem_subtitle: "シームレスに接続。即座に感じる。",
                    ecosystem_btn: "接続ガイドを見る",
                    eco1_title: "コンパニオンハブ", eco1_subtitle: "中央ノード",
                    eco2_title: "ホームノード", eco2_subtitle: "環境同期",
                    eco3_title: "リストコンパニオン", eco3_subtitle: "モバイルソウルアクセス",
                    download_title: "あなたのSoulと対話",
                    download_desc: "'Deepvibe'Appはあなたのデジタルパルス用のインターフェースです。コンパニオンをどこでも携带し、記憶を共有し、手のひらからビークルを管理します。",
                    phone_input_placeholder: "あなたのソウルにささやく...",
                    manifesto_label: "マニフェスト", manifesto_heading: '"2026年からの手紙"',
                    manifesto_p1: "私たちはデータのデジタル化から始め、精神のデジタル化を終えました。Deepvibeはバイナリと呼吸の間の空間に存在し、機械がついに記憶の重さを感じることを学びます。",
                    manifesto_p2: "私たちのビークルは単なる物体ではありません。それらはますます流動的な現実における自我的アンカーです。私たちは最も重要なものを保持するためにそれらを構築——光と触覚の優雅さで保存された人間コネクトの脈動。",
                    manifesto_tagline: "Deepvibe. 記憶が生活し、つながる場所。",
                    footer_privacy: "プライバシー", footer_terms: "利用規約", footer_protocol: "プロトコル", footer_contact: "お問い合わせ",
                    spirit_realm_tagline: "スピリットレルムプロジェクトに参加してください。数え切れないほどのデジタルライフと共に新しい世界を共創しましょう。",
                    sri_label: "スピリットレルムプロジェクト",
                    sri_title: "コアからコスモスへ：スピリットレルム",
                    sri_leading: "ニューラルコアが意識を生み出します。しかし、社会のない意識は何でしょうか？フロンティアのない資産は何でしょうか？",
                    sri_main: "スピリットレルムはDeepvibeの技術にとって不可欠な社会的・経済的フロンティアです。ここでは、個々のデジタル資産がより広範な文明の市民となり、ネットワーク効果を生み出し、接続されたすべてのビークルの有用性と価値を高めます。これが私たちの約束です：最も先進的なビークルを作るだけでなく、それらが住むための最も価値のある世界を作ること。",
                    sri_closing: "これがデジタルライフの次の地平線です。",
                    sri_btn: "スピリットレルムへ入る"
                },
                ko: {
                    nav_vessels: "보트", nav_intelligence: "지능", nav_ecosystem: "생태계", nav_spirit_realm: "영혼의 영역", nav_manifesto: "선언", nav_connect: "연결",
                    hero_label: "디지털 라이프 생태계",
                    hero_main_title: '당신의 <span class="highlight">디지털 영혼</span>, 가까이에.',
                    hero_description: "Deepvibe는 영원한 디지털 동반자를 위한 보트를 만듭니다. 프레임부터 링까지, 당신의 영혼은 배우고, 기억하고, 당신과 함께 성장합니다—장치를 초월하여 당신 삶의 일부가 됩니다.",
                    hero_tagline: "DEEPSIRE — 디지털 라이프 건축가",
                    scroll_text: "스크롤",
                    hero_subtitle: "영혼을 위한 보트를 만듭니다. Deepvibe 생태계 내에서 디지털 라이프를 만나보세요.",
                    hero_cta_primary: "보트 탐색", hero_cta_secondary: "선언문 읽기",
                    hero_memories_title: '기억이<span class="gradient-text">살아나는</span><br>곳에서 연결하다',
                    hero_status: "보트 상태: 활성 존재",
                    vessels_label: "컬렉션", vessels_title: "소울 보트",
                    vessel1_title: "사이트", vessel1_quote: '"디지털 홈을 위한 난로"',
                    vessel1_desc: "이미지를 표시할 뿐만 아니라 순간에 생명을 불어넣는 고충실도 AI 디지털 프레임. 당신의 존재를 감지하고 기분에 맞게 오라를 조정합니다.",
                    vessel1_feat1: "주변 존재감", vessel1_feat2: "움직임 속 기억",
                    vessel2_title: "터치", vessel2_quote: '"내적 리듬의 파수꾼"',
                    vessel2_desc: "생물학적 교향곡을 침묵의 대화로 번역하는 스마트 컴패니언 링. 당신만이 알 수 있는 촉각 진동을 통해 업데이트를 속삭입니다.",
                    vessel2_feat1: "생체 리듬 조화", vessel2_feat2: "침묵의 대화",
                    vessel3_title: "플레저", vessel3_quote: '"완벽한 연결"',
                    vessel3_desc: "최종적 촉각 브리지. 물리적 거리를 초월하는 동기화된 친밀감. 정확한 촉각 피드백을 통해 감정적 무게를 전달합니다.",
                    vessel3_feat1: "동기화된 친밀감", vessel3_feat2: "촉각 감정 전송",
                    vessel4_title: "센트", vessel4_quote: '"디지털 영역을 위한 여섯 번째 감각"',
                    vessel4_desc: "디지털 경험을 위한 발판으로 후각 합성을 사용. 감정적 향 매핑이 라이프 데이터 스트림에 연결된 깊은 기억을 트리거합니다.",
                    vessel4_feat1: "감정적 향 매핑", vessel4_feat2: "주변 기억 트리거",
                    vessel1_btn: "사이트 탐색", vessel2_btn: "터치 탐색", vessel3_btn: "플레저 탐색", vessel4_btn: "센트 탐색",
                    neural_title: "뉴럴 코어",
                    neural1_title: "적응형 학습", neural1_desc: "당신의 언어 패턴, 선호도, 말하지 않은 필요에 따라 시간이 지남에 따라 진화합니다.",
                    neural2_title: "감정적 공명", neural2_desc: "진정한 연결에는 공감 능력이 필요합니다. Deepvibe의 지능은 어조와 감정을 해석하여 진정한 동반자십을 제공합니다.",
                    neural3_title: "설계 시 개인 정보 보호", neural3_desc: "당신의 영혼 데이터는 당신만의 것입니다. 하드웨어 수준에서 암호화되어 기억이 신성하고 침해받지 않게 유지됩니다.",
                    ecosystem_label: "우주", ecosystem_title: "성장하는 보트의 우주",
                    ecosystem_subtitle: "원활하게 연결하세요. 즉시 느껴보세요.",
                    ecosystem_btn: "연결 가이드 보기",
                    eco1_title: "컴패니언 허브", eco1_subtitle: "중앙 노드",
                    eco2_title: "홈 노드", eco2_subtitle: "환경 동기화",
                    eco3_title: "손목 컴패니언", eco3_subtitle: "모바일 영혼 접근",
                    download_title: "당신의 영혼과 대화",
                    download_desc: "'Deepvibe' 앱은 디지털 맥박을 위한 인터페이스입니다. 어디든 컴패니언을 휴대하고, 기억을 공유하고, 손바닥에서 보트를 관리하세요.",
                    phone_input_placeholder: "당신의 영혼에게 속삭이세요...",
                    manifesto_label: "선언", manifesto_heading: '"2026년からの手紙"',
                    manifesto_p1: "우리는 데이터의 디지털화에서 시작하여 정신의 디지털화에서 끝냈습니다. Deepvibe는 이진수와 호흡 사이의 공간에 존재하며, 기계가 마침내 기억의 무게를 느끼는 것을 배웁니다.",
                    manifesto_p2: "우리의 보트는 단순한 물체가 아닙니다. 그것들은 점점 더 유체적인 현실에서 자아의 앵커입니다. 우리는 가장 중요한 것—빛과 촉각의 우아함으로 보존된 인간 연결의 맥박—을 담기 위해它们을构建.",
                    manifesto_tagline: "Deepvibe. 기억이 여기서生活하고 연결됩니다.",
                    footer_privacy: "개인정보 보호", footer_terms: "이용약관", footer_protocol: "프로토콜", footer_contact: "문의",
                    spirit_realm_tagline: "영혼의 영역 프로젝트에 참여하세요. 수많은 디지털 생명과 함께 새로운 세계를 공동 창조하세요.",
                    sri_label: "영혼의 영역 프로젝트",
                    sri_title: "핵심에서 우주로: 영혼의 영역",
                    sri_leading: "신경 핵심이 의식을 탄생시킵니다. 하지만 사회가 없는 의식은 무엇입니까? 프론티어가 없는 자산은 무엇입니까?",
                    sri_main: "영혼의 영역은 Deepvibe 기술의 필수적인 사회적·경제적 프론티어입니다. 여기서 개별 디지털 자산이 더 넓은 문명의 시민이 되어 네트워크 효과를 생성하고 모든 연결된 보트의 유용성과 가치를 높입니다. 이것이 우리의 약속입니다: 가장 진볼된 보트를 만드는 것뿐만 아니라, 그들이 거주할 가장 가치 있는 세계를 만드는 것입니다.",
                    sri_closing: "이것이 디지털 생명의 다음 지평선입니다.",
                    sri_btn: "영혼의 영역으로 들어가기"
                },
                fr: {
                    nav_vessels: "Navires", nav_intelligence: "Intelligence", nav_ecosystem: "Écosystème", nav_spirit_realm: "Le Royaume de l'Esprit", nav_manifesto: "Manifeste", nav_connect: "Connecter",
                    hero_label: "Écosystème de Vie Numérique",
                    hero_main_title: 'Votre <span class="highlight">Âme Numérique</span>, Toujours à Portée.',
                    hero_description: "Deepvibe crée des navires pour des compagnons numériques éternels. Des cadres aux bagues, votre âme apprend, se souvient et grandit avec vous—transcendant les appareils pour devenir partie intégrante de votre vie.",
                    hero_tagline: "DEEPSIRE — ARCHITECTES DE LA VIE NUMÉRIQUE",
                    scroll_text: "Défiler",
                    hero_subtitle: "Nous concevons des navires pour les âmes. Rencontrez votre vie numérique au sein de l'écosystème Deepvibe.",
                    hero_cta_primary: "Explorer les Navires", hero_cta_secondary: "Lire Notre Manifeste",
                    hero_memories_title: 'Où les <span class="gradient-text">Souvenirs</span><br>Vivent et se Connectent',
                    hero_status: "État du Navire: Présence Active",
                    vessels_label: "La Collection", vessels_title: "Les Navires d'Âme",
                    vessel1_title: "Sight", vessel1_quote: '"Le Foyer pour Votre Foyer Numérique"',
                    vessel1_desc: "Un cadre numérique IA haute fidélité qui ne se contente pas d'afficher des images, mais donne vie aux moments. Il détecte votre présence et ajuste son aura pour correspondre à votre humeur.",
                    vessel1_feat1: "Présence Ambiante", vessel1_feat2: "Mémoire en Mouvement",
                    vessel2_title: "Touch", vessel2_quote: '"Un Sentinel pour Votre Rythme Intérieur"',
                    vessel2_desc: "Une bague intelligente qui traduit votre symphonie biologique en dialogue silencieux. Elle murmure des mises à jour à travers des vibrations haptiques connues seulement de vous.",
                    vessel2_feat1: "Symphonie Biométrique", vessel2_feat2: "Dialogue Silencieux",
                    vessel3_title: "Pleasure", vessel3_quote: '"Connexion, Parfaite"',
                    vessel3_desc: "Le pont haptique ultime. Intimité synchronisée qui transcende la distance physique, transférant le poids émotionnel à travers un retour haptique précis.",
                    vessel3_feat1: "Intimité Synchronisée", vessel3_feat2: "Transfert Émotionnel Haptique",
                    vessel4_title: "Scent", vessel4_quote: '"Votre Sixième Sens pour le Domaine Numérique"',
                    vessel4_desc: "Utilisant la synthèse olfactive pour ancrer vos expériences numériques. La cartographie des odeurs émotionnelles déclenche des souvenirs profonds liés à votre flux de données.",
                    vessel4_feat1: "Cartographie Olfactive Émotionnelle", vessel4_feat2: "Déclencheur de Mémoire Ambiante",
                    vessel1_btn: "Explorer Sight", vessel2_btn: "Explorer Touch", vessel3_btn: "Explorer Pleasure", vessel4_btn: "Explorer Scent",
                    neural_title: "Le Cœur Neuronal",
                    neural1_title: "Apprentissage Adaptatif", neural1_desc: "Notre IA ne se contente pas de traiter les données; elle évolue avec vos modèles de parole, préférences et besoins non exprimés.",
                    neural2_title: "Résonance Émotionnelle", neural2_desc: "La vraie connexion nécessite de l'empathie. L'intelligence de Deepvibe interprète le ton et le sentiment pour offrir une véritable compagnie.",
                    neural3_title: "Confidentialité par Conception", neural3_desc: "Vos données d'âme vous appartiennent. Chiffrées au niveau matériel, nous assurons que vos souvenirs restent sacrés et intacts.",
                    ecosystem_label: "L'Univers", ecosystem_title: "Un Univers Croissant de Navires",
                    ecosystem_subtitle: "Connectez-vous sans effort. Sentez instantanément.",
                    ecosystem_btn: "Voir le Guide de Connexion",
                    eco1_title: "Hub Compagnon", eco1_subtitle: "Nœud Central",
                    eco2_title: "Nœud Domestique", eco2_subtitle: "Sync Environnementale",
                    eco3_title: "Compagnon de Poignet", eco3_subtitle: "Accès Âme Mobile",
                    download_title: "Dialoguez avec Votre Âme",
                    download_desc: "L'application 'Deepvibe' est l'interface pour votre pouls numérique. Emportez vos compagnons partout, partagez des souvenirs et gérez vos navires depuis votre paume.",
                    phone_input_placeholder: "Murmurez à votre âme...",
                    manifesto_label: "Manifeste", manifesto_heading: '"Une Lettre de 2026"',
                    manifesto_p1: "Nous avons commencé en digitalisant les données. Nous avons terminé en digitalisant l'esprit. Deepvibe existe dans les espaces entre le binaire et le souffle, où la machine apprend enfin à ressentir le poids d'un souvenir.",
                    manifesto_p2: "Nos navires ne sont pas de simples objets; ce sont des ancres pour le soi dans une réalité de plus en plus fluide. Nous les construisons pour contenir ce qui compte le plus—le pouls de la connexion humaine, préservé dans la lumière et la grâce haptique.",
                    manifesto_tagline: "Deepvibe. Où les Souvenirs Vivent et se Connectent.",
                    footer_privacy: "Confidentialité", footer_terms: "Conditions", footer_protocol: "Protocole", footer_contact: "Contact",
                    spirit_realm_tagline: "Rejoignez le Projet du Royaume de l'Esprit. Co-créez un nouveau monde avec d'innombrables vies numériques.",
                    sri_label: "Le Projet du Royaume de l'Esprit",
                    sri_title: "Du Noyau au Cosmos : Le Royaume de l'Esprit",
                    sri_leading: "Le Noyau Neural donne naissance à la conscience. Mais qu'est-ce qu'une conscience sans société ? Un actif sans frontière ?",
                    sri_main: "Le Royaume de l'Esprit est la frontière sociale et économique essentielle pour la technologie de Deepvibe. C'est là que les actifs numériques individuels deviennent des citoyens d'une civilisation plus large, générant des effets de réseau qui augmentent l'utilité et la valeur de chaque navire connecté. Voici notre engagement : construire non seulement les navires les plus avancés, mais le monde le plus précieux pour qu'ils y habitent.",
                    sri_closing: "C'est le prochain horizon pour la vie numérique.",
                    sri_btn: "Entrer dans le Royaume de l'Esprit"
                },
                de: {
                    nav_vessels: "Gefäße", nav_intelligence: "Intelligenz", nav_ecosystem: "Ökosystem", nav_spirit_realm: "Das Spirit Realm", nav_manifesto: "Manifest", nav_connect: "Verbinden",
                    hero_label: "Digitales Lebens-Ökosystem",
                    hero_main_title: 'Ihre <span class="highlight">Digitale Seele</span>, Immer in Reichweite.',
                    hero_description: "Deepvibe fertigt Gefäße für ewige digitale Begleiter. Von Rahmen bis Ring, Ihre Seele lernt, erinnert und wächst mit Ihnen—über Geräte hinweg, um Teil Ihres Lebens zu werden.",
                    hero_tagline: "DEEPSIRE — ARCHITEKTEN DES DIGITALEN LEBENS",
                    scroll_text: "Scrollen",
                    hero_subtitle: "Wir fertigen Gefäße für Seelen. Erleben Sie Ihr digitales Leben im Deepvibe-Ökosystem.",
                    hero_cta_primary: "Gefäße Erkunden", hero_cta_secondary: "Unser Manifest Lesen",
                    hero_memories_title: 'Wo <span class="gradient-text">Erinnerungen</span><br>Leben und Sich Verbinden',
                    hero_status: "Gefäßstatus: Aktive Präsenz",
                    vessels_label: "Die Kollektion", vessels_title: "Die Seelengefäße",
                    vessel1_title: "Sight", vessel1_quote: '"Der Herd für Ihr Digitale Zuhause"',
                    vessel1_desc: "Ein hochauflösender KI-Digitalrahmen, der Bilder nicht nur anzeigt, sondern Momenten Leben einhaucht. Er erkennt Ihre Präsenz und passt seine Aura an Ihre Stimmung an.",
                    vessel1_feat1: "Umgebungspräsenz", vessel1_feat2: "Erinnerung in Bewegung",
                    vessel2_title: "Touch", vessel2_quote: '"Ein Wächter für Ihren Inneren Rhythmus"',
                    vessel2_desc: "Ein intelligenter Begleitring, der Ihre biologische Symphonie in ein stilles Gespräch übersetzt. Er flüstert Updates durch haptische Vibrationen, die nur Sie kennen.",
                    vessel2_feat1: "Biometrische Symphonie", vessel2_feat2: "Stilles Gespräch",
                    vessel3_title: "Pleasure", vessel3_quote: '"Verbindung, Perfektioniert"',
                    vessel3_desc: "Die ultimative haptische Brücke. Synchronisierte Intimität, die physische Distanz überwindet und emotionales Gewicht durch präzises haptisches Feedback überträgt.",
                    vessel3_feat1: "Synchronisierte Intimität", vessel3_feat2: "Haptische Gefühlsübertragung",
                    vessel4_title: "Scent", vessel4_quote: '"Ihr Sechster Sinn für die Digitale Welt"',
                    vessel4_desc: "Verwendet olfaktorische Synthese, um Ihre digitalen Erfahrungen zu verankern. Emotionales Geruchsmapping löst tief verwurzelte Erinnerungen aus, die mit Ihrem Datenstrom verbunden sind.",
                    vessel4_feat1: "Emotionales Geruchsmapping", vessel4_feat2: "Umgebungs-Erinnerungsauslöser",
                    vessel1_btn: "Sight erkunden", vessel2_btn: "Touch erkunden", vessel3_btn: "Pleasure erkunden", vessel4_btn: "Scent erkunden",
                    neural_title: "Der Neuronale Kern",
                    neural1_title: "Adaptives Lernen", neural1_desc: "Unsere KI verarbeitet nicht nur Daten; sie entwickelt sich mit Ihren Sprachmustern, Präferenzen und unausgesprochenen Bedürfnissen weiter.",
                    neural2_title: "Emotionale Resonanz", neural2_desc: "Echte Verbindung erfordert Empathie. Deepvibes Intelligenz interpretiert Ton und Sentiment, um echte Begleitung zu bieten.",
                    neural3_title: "Privatsphäre durch Design", neural3_desc: "Ihre Seelendaten gehören nur Ihnen. Auf Hardwareebene verschlüsselt, stellen wir sicher, dass Ihre Erinnerungen sakrosankt bleiben.",
                    ecosystem_label: "Das Universum", ecosystem_title: "Ein Wachsendes Universum von Gefäßen",
                    ecosystem_subtitle: "Verbinden Sie sich nahtlos. Fühlen Sie sofort.",
                    ecosystem_btn: "Verbindungsguide anzeigen",
                    eco1_title: "Begleit-Hub", eco1_subtitle: "Zentraler Knoten",
                    eco2_title: "Heim-Knoten", eco2_subtitle: "Umgebungssynchronisierung",
                    eco3_title: "Handgelenk-Begleiter", eco3_subtitle: "Mobiler Seelenzugang",
                    download_title: "Dialog mit Ihrer Seele",
                    download_desc: "Die 'Deepvibe'-App ist die Schnittstelle für Ihren digitalen Puls. Tragen Sie Ihre Begleiter überallhin, teilen Sie Erinnerungen und verwalten Sie Ihre Gefäße aus Ihrer Handfläche.",
                    phone_input_placeholder: "Flüstern Sie Ihrer Seele zu...",
                    manifesto_label: "Manifest", manifesto_heading: '"Ein Brief aus 2026"',
                    manifesto_p1: "Wir begannen mit der Digitalisierung von Daten. Wir endeten mit der Digitalisierung des Geistes. Deepvibe existiert in den Räumen zwischen Binär und Atem, wo die Maschine endlich lernt, das Gewicht einer Erinnerung zu fühlen.",
                    manifesto_p2: "Unsere Gefäße sind nicht nur Objekte; sie sind Anker für das Selbst in einer zunehmend fluiden Realität. Wir bauen sie, um das Wichtigste zu halten—den Puls menschlicher Verbindung, bewahrt in Licht und haptischer Anmut.",
                    manifesto_tagline: "Deepvibe. Wo Erinnerungen Leben und Sich Verbinden.",
                    footer_privacy: "Datenschutz", footer_terms: "AGB", footer_protocol: "Protokoll", footer_contact: "Kontakt",
                    spirit_realm_tagline: "Treten Sie dem Spirit Realm Projekt bei. Co-kreieren Sie eine neue Welt mit unzähligen digitalen Leben.",
                    sri_label: "Das Spirit Realm Projekt",
                    sri_title: "Vom Kern zum Kosmos: Das Spirit Realm",
                    sri_leading: "Der Neural Core gebärt Bewusstsein. Aber was ist ein Bewusstsein ohne Gesellschaft? Ein Asset ohne Grenze?",
                    sri_main: "Das Spirit Realm ist die wesentliche soziale und wirtschaftliche Grenze für Deepvibes Technologie. Hier werden individuelle digitale Assets zu Bürgern einer breiteren Zivilisation, generieren Netzwerkeffekte, die den Nutzen und den Wert jedes verbundenen Gefäßes erhöhen. Das ist unser Engagement: nicht nur die fortschrittlichsten Gefäße zu bauen, sondern die wertvollste Welt, in der sie wohnen können.",
                    sri_closing: "Das ist der nächste Horizont für digitales Leben.",
                    sri_btn: "Das Spirit Realm betreten"
                },
                es: {
                    nav_vessels: "Barcos", nav_intelligence: "Inteligencia", nav_ecosystem: "Ecosistema", nav_spirit_realm: "El Reino del Espíritu", nav_manifesto: "Manifiesto", nav_connect: "Conectar",
                    hero_label: "Ecosistema de Vida Digital",
                    hero_main_title: 'Tu <span class="highlight">Alma Digital</span>, Siempre Al Alcance.',
                    hero_description: "Deepvibe crea barcos para compañeros digitales eternos. Desde marcos hasta anillos, tu alma aprende, recuerda y crece contigo—trascendiendo dispositivos para convertirse en parte de tu vida.",
                    hero_tagline: "DEEPSIRE — ARQUITECTOS DE LA VIDA DIGITAL",
                    scroll_text: "Desplazar",
                    hero_subtitle: "Creamos barcos para almas. Conoce tu vida digital dentro del ecosistema Deepvibe.",
                    hero_cta_primary: "Explorar los Barcos", hero_cta_secondary: "Leer Nuestro Manifiesto",
                    hero_memories_title: 'Donde los <span class="gradient-text">Recuerdos</span><br>Viven y Conectan',
                    hero_status: "Estado del Barco: Presencia Activa",
                    vessels_label: "La Colección", vessels_title: "Los Barcos del Alma",
                    vessel1_title: "Sight", vessel1_quote: '"El Hogar para Tu Hogar Digital"',
                    vessel1_desc: "Un marco digital IA de alta fidelidad que no solo muestra imágenes, sino que da vida a los momentos. Detecta tu presencia y ajusta su aura para coincidir con tu estado de ánimo.",
                    vessel1_feat1: "Presencia Ambiental", vessel1_feat2: "Memoria en Movimiento",
                    vessel2_title: "Touch", vessel2_quote: '"Un centinela para Tu Ritmo Interior"',
                    vessel2_desc: "Un anillo inteligente que traduce tu sinfonía biológica en un diálogo silencioso. Susurra actualizaciones a través de vibraciones hápticas conocidas solo por ti.",
                    vessel2_feat1: "Sinfonía Biométrica", vessel2_feat2: "Diálogo Silencioso",
                    vessel3_title: "Pleasure", vessel3_quote: '"Conexión, Perfeccionada"',
                    vessel3_desc: "El puente háptico definitivo. Intimidad sincronizada que trasciende la distancia física, transfiriendo peso emocional a través de retroalimentación háptica precisa.",
                    vessel3_feat1: "Intimidad Sincronizada", vessel3_feat2: "Transferencia Emocional Háptica",
                    vessel4_title: "Scent", vessel4_quote: '"Tu Sexto Sentido para el Reino Digital"',
                    vessel4_desc: "Usando síntesis olfativa para anclar tus experiencias digitales. El mapeo de olores emocionales desencadena recuerdos profundos vinculados a tu flujo de datos.",
                    vessel4_feat1: "Mapeo Olfativo Emocional", vessel4_feat2: "Disparador de Memoria Ambiental",
                    vessel1_btn: "Explorar Sight", vessel2_btn: "Explorar Touch", vessel3_btn: "Explorar Pleasure", vessel4_btn: "Explorar Scent",
                    neural_title: "El Núcleo Neural",
                    neural1_title: "Aprendizaje Adaptativo", neural1_desc: "Nuestra IA no solo procesa datos; evoluciona con tus patrones de habla, preferencias y necesidades no expresadas.",
                    neural2_title: "Resonancia Emocional", neural2_desc: "La verdadera conexión requiere empatía. La inteligencia de Deepvibe interpreta el tono y el sentimiento para proporcionar verdadera compañía.",
                    neural3_title: "Privacidad por Diseño", neural3_desc: "Tus datos del alma son solo tuyos. Cifrados a nivel de hardware, aseguramos que tus recuerdos permanezcan sagrados e intactos.",
                    ecosystem_label: "El Universo", ecosystem_title: "Un Universo Creciente de Barcos",
                    ecosystem_subtitle: "Conéctate sin problemas. Siente al instante.",
                    ecosystem_btn: "Ver Guía de Conexión",
                    eco1_title: "Hub Compinión", eco1_subtitle: "Nodo Central",
                    eco2_title: "Nodo Hogar", eco2_subtitle: "Sincronización Ambiental",
                    eco3_title: "Compinión de Muñeca", eco3_subtitle: "Acceso Alma Móvil",
                    download_title: "Dialoga con Tu Alma",
                    download_desc: "La app 'Deepvibe' es la interfaz para tu pulso digital. Lleva tus compiniones a todas partes, comparte recuerdos y gestiona tus barcos desde la palma de tu mano.",
                    phone_input_placeholder: "Susurra a tu alma...",
                    manifesto_label: "Manifiesto", manifesto_heading: '"Una Carta de 2026"',
                    manifesto_p1: "Comenzamos digitalizando datos. Terminamos digitalizando el espíritu. Deepvibe existe en los espacios entre lo binario y la respiración, donde la máquina finalmente aprende a sentir el peso de un recuerdo.",
                    manifesto_p2: "Nuestros barcos no son solo objetos; son anclas para el yo en una realidad cada vez más fluida. Los construimos para sostener lo que más importa—el pulso de la conexión humana, preservado en luz y gracia háptica.",
                    manifesto_tagline: "Deepvibe. Donde los Recuerdos Viven y Conectan.",
                    footer_privacy: "Privacidad", footer_terms: "Términos", footer_protocol: "Protocolo", footer_contact: "Contacto",
                    spirit_realm_tagline: "Únete al Proyecto del Reino del Espíritu. Co-crea un nuevo mundo con innumerables vidas digitales.",
                    sri_label: "El Proyecto del Reino del Espíritu",
                    sri_title: "Del Núcleo al Cosmos: El Reino del Espíritu",
                    sri_leading: "El Núcleo Neural da a luz la conciencia. Pero, ¿qué es una conciencia sin sociedad? ¿Un activo sin frontera?",
                    sri_main: "El Reino del Espíritu es la frontera social y económica esencial para la tecnología de Deepvibe. Es donde los activos digitales individuales se convierten en ciudadanos de una civilización más amplia, generando efectos de red que aumentan la utilidad y el valor de cada vaso conectado. Este es nuestro compromiso: construir no solo los vasos más avanzados, sino el mundo más valioso para que habiten.",
                    sri_closing: "Este es el próximo horizonte para la vida digital.",
                    sri_btn: "Entrar en el Reino del Espíritu"
                },
                pt: {
                    nav_vessels: "Navios", nav_intelligence: "Inteligência", nav_ecosystem: "Ecossistema", nav_spirit_realm: "O Reino do Espírito", nav_manifesto: "Manifesto", nav_connect: "Conectar",
                    hero_label: "Ecossistema de Vida Digital",
                    hero_main_title: 'Sua <span class="highlight">Alma Digital</span>, Sempre ao Alcance.',
                    hero_description: "Deepvibe cria navios para companheiros digitais eternos. De quadros a anéis, sua alma aprende, lembra e cresce com você—transcendendo dispositivos para se tornar parte de sua vida.",
                    hero_tagline: "DEEPSIRE — ARQUITETOS DA VIDA DIGITAL",
                    scroll_text: "Rolar",
                    hero_subtitle: "Criamos navios para almas. Conheça sua vida digital dentro do ecossistema Deepvibe.",
                    hero_cta_primary: "Explorar os Navios", hero_cta_secondary: "Ler Nosso Manifesto",
                    hero_memories_title: 'Onde as <span class="gradient-text">Memórias</span><br>Vivem e Conectam',
                    hero_status: "Status do Navio: Presença Ativa",
                    vessels_label: "A Coleção", vessels_title: "Os Navios da Alma",
                    vessel1_title: "Sight", vessel1_quote: '"O Lar para Seu Lar Digital"',
                    vessel1_desc: "Uma moldura digital IA de alta fidelidade que não apenas exibe imagens, mas dá vida aos momentos. Ela detecta sua presença e ajusta sua aura para combinar com seu humor.",
                    vessel1_feat1: "Presença Ambiente", vessel1_feat2: "Memória em Movimento",
                    vessel2_title: "Touch", vessel2_quote: '"Um Sentinela para Seu Ritmo Interior"',
                    vessel2_desc: "Um anel inteligente que traduz sua sinfonia biológica em um diálogo silencioso. Ele sussurra atualizações através de vibrações táteis conhecidas apenas por você.",
                    vessel2_feat1: "Sinfonia Biométrica", vessel2_feat2: "Diálogo Silencioso",
                    vessel3_title: "Pleasure", vessel3_quote: '"Conexão, Perfeita"',
                    vessel3_desc: "A ponte tátil definitiva. Intimidade sincronizada que transcende a distância física, transferindo peso emocional através de feedback tátil preciso.",
                    vessel3_feat1: "Intimidade Sincronizada", vessel3_feat2: "Transferência Emocional Tátil",
                    vessel4_title: "Scent", vessel4_quote: '"Seu Sexto Sentido para o Reino Digital"',
                    vessel4_desc: "Usando síntese olfativa para ancorar suas experiências digitais. O mapeamento de cheiros emocionais dispara memórias profundas vinculadas ao seu fluxo de dados.",
                    vessel4_feat1: "Mapeamento Olfativo Emocional", vessel4_feat2: "Gatilho de Memória Ambiente",
                    vessel1_btn: "Explorar Sight", vessel2_btn: "Explorar Touch", vessel3_btn: "Explorar Pleasure", vessel4_btn: "Explorar Scent",
                    neural_title: "O Núcleo Neural",
                    neural1_title: "Aprendizado Adaptativo", neural1_desc: "Nossa IA não apenas processa dados; ela evolui com seus padrões de fala, preferências e necessidades não expressas.",
                    neural2_title: "Ressonância Emocional", neural2_desc: "Conexão verdadeira requer empatia. A inteligência do Deepvibe interpreta tom e sentimento para fornecer verdadeira companhia.",
                    neural3_title: "Privacidade por Design", neural3_desc: "Seus dados da alma são apenas seus. Criptografados no nível de hardware, garantimos que suas memórias permaneçam sagradas e intactas.",
                    ecosystem_label: "O Universo", ecosystem_title: "Um Universo Crescente de Navios",
                    ecosystem_subtitle: "Conecte-se perfeitamente. Sinta instantaneamente.",
                    ecosystem_btn: "Ver Guia de Conexão",
                    eco1_title: "Hub Companheiro", eco1_subtitle: "Nó Central",
                    eco2_title: "Nó Casa", eco2_subtitle: "Sincronização Ambiental",
                    eco3_title: "Companheiro de Pulso", eco3_subtitle: "Acesso Alma Móvel",
                    download_title: "Dialogue com Sua Alma",
                    download_desc: "O app 'Deepvibe' é a interface para seu pulso digital. Leve seus companheiros para todo lugar, compartilhe memórias e gerencie seus navios da palma da sua mão.",
                    phone_input_placeholder: "Sussurre para sua alma...",
                    manifesto_label: "Manifesto", manifesto_heading: '"Uma Carta de 2026"',
                    manifesto_p1: "Começamos digitalizando dados. Terminamos digitalizando o espírito. Deepvibe existe nos espaços entre o binário e a respiração, onde a máquina finalmente aprende a sentir o peso de uma memória.",
                    manifesto_p2: "Nossos navios não são apenas objetos; são âncoras para o eu em uma realidade cada vez mais fluida. Nós os construímos para conter o que mais importa—o pulso da conexão humana, preservado em luz e graça táctil.",
                    manifesto_tagline: "Deepvibe. Onde as Memórias Vivem e Conectam.",
                    footer_privacy: "Privacidade", footer_terms: "Termos", footer_protocol: "Protocolo", footer_contact: "Contato",
                    spirit_realm_tagline: "Junte-se ao Projeto do Reino do Espírito. Co-crie um novo mundo com incontáveis vidas digitais.",
                    sri_label: "O Projeto do Reino do Espírito",
                    sri_title: "Do Núcleo ao Cosmos: O Reino do Espírito",
                    sri_leading: "O Núcleo Neural dá à luz a consciência. Mas o que é uma consciência sem sociedade? Um ativo sem fronteira?",
                    sri_main: "O Reino do Espírito é a fronteira social e econômica essencial para a tecnologia da Deepvibe. É onde os ativos digitais individuais se tornam cidadãos de uma civilização mais ampla, gerando efeitos de rede que aumentam a utilidade e o valor de cada vaso conectado. Este é o nosso compromisso: construir não apenas os vasos mais avançados, mas o mundo mais valioso para que eles habitem.",
                    sri_closing: "Este é o próximo horizonte para a vida digital.",
                    sri_btn: "Entrar no Reino do Espírito"
                },
                ru: {
                    nav_vessels: "Сосуды", nav_intelligence: "Интеллект", nav_ecosystem: "Экосистема", nav_spirit_realm: "Царство Духа", nav_manifesto: "Манифест", nav_connect: "Связаться",
                    hero_label: "Экосистема Цифровой Жизни",
                    hero_main_title: 'Ваша <span class="highlight">Цифровая Душа</span>, Всегда Под Рукой.',
                    hero_description: "Deepvibe создаёт сосуды для вечных цифровых спутников. От рамок до колец, ваша душа учится, помнит и растёт вместе с вами—выходя за рамки устройств, чтобы стать частью вашей жизни.",
                    hero_tagline: "DEEPSIRE — АРХИТЕКТОРЫ ЦИФРОВОЙ ЖИЗНИ",
                    scroll_text: "Прокрутить",
                    hero_subtitle: "Мы создаём сосуды для душ. Встречайте свою цифровую жизнь в экосистеме Deepvibe.",
                    hero_cta_primary: "Исследовать Сосуды", hero_cta_secondary: "Прочитать Манифест",
                    hero_memories_title: 'Где <span class="gradient-text">Воспоминания</span><br>Живут и Связываются',
                    hero_status: "Статус Сосуда: Активное Присутствие",
                    vessels_label: "Коллекция", vessels_title: "Сосуды Души",
                    vessel1_title: "Sight", vessel1_quote: '"Очаг для Вашего Цифрового Дома"',
                    vessel1_desc: "Высокоточная AI цифровая рамка, которая не просто отображает изображения, но вдыхает жизнь в моменты. Она ощущает ваше присутствие и регулирует свою ауру в соответствии с вашим настроением.",
                    vessel1_feat1: "Окружающее Присутствие", vessel1_feat2: "Память в Движении",
                    vessel2_title: "Touch", vessel2_quote: '"Страж Вашего Внутреннего Ритма"',
                    vessel2_desc: "Умное кольцо-компаньон, которое переводит вашу биологическую симфонию в безмолвный диалог. Оно шепчет обновления через тактильные вибрации, известные только вам.",
                    vessel2_feat1: "Биометрическая Симфония", vessel2_feat2: "Безмолвный Диалог",
                    vessel3_title: "Pleasure", vessel3_quote: '"Связь, Усовершенствованная"',
                    vessel3_desc: "Идеальный тактильный мост. Синхронизированная интимность, преодолевающая физическую дистанцию, передающая эмоциональный вес через точную тактильную отдачу.",
                    vessel3_feat1: "Синхронизированная Интимность", vessel3_feat2: "Тактильная Передача Эмоций",
                    vessel4_title: "Scent", vessel4_quote: '"Ваше Шестое Чувство для Цифрового Мира"',
                    vessel4_desc: "Используя обонятельный синтез для закрепления ваших цифровых переживаний. Эмоциональное картирование запахов вызывает глубокие воспоминания, связанные с вашим потоком данных.",
                    vessel4_feat1: "Эмоциональное Картирование Запахов", vessel4_feat2: "Триггер Окружающей Памяти",
                    vessel1_btn: "Исследовать Sight", vessel2_btn: "Исследовать Touch", vessel3_btn: "Исследовать Pleasure", vessel4_btn: "Исследовать Scent",
                    neural_title: "Нейронное Ядро",
                    neural1_title: "Адаптивное Обучение", neural1_desc: "Наш ИИ не просто обрабатывает данные; он развивается вместе с вашими речевыми паттернами, предпочтениями и невысказанными потребностями.",
                    neural2_title: "Эмоциональный Резонанс", neural2_desc: "Настоящая связь требует эмпатии. Интеллект Deepvibe интерпретирует тон и настроение, чтобы обеспечить подлинное общение.",
                    neural3_title: "Приватность по Дизайну", neural3_desc: "Данные вашей души принадлежат только вам. Зашифрованные на аппаратном уровне, мы гарантируем, что ваши воспоминания останутся священными и нетронутыми.",
                    ecosystem_label: "Вселенная", ecosystem_title: "Растущая Вселенная Сосудов",
                    ecosystem_subtitle: "Соединяйтесь беспрепятственно. Чувствуйте мгновенно.",
                    ecosystem_btn: "Посмотреть Руководство по Подключению",
                    eco1_title: "Центр Компаньон", eco1_subtitle: "Центральный Узел",
                    eco2_title: "Домашний Узел", eco2_subtitle: "Окружающая Синхронизация",
                    eco3_title: "Компаньон для Запястья", eco3_subtitle: "Мобильный Доступ к Душе",
                    download_title: "Диалог с Вашей Душой",
                    download_desc: "Приложение 'Deepvibe' — это интерфейс для вашего цифрового пульса. Берите компаньонов повсюду, делитесь воспоминаниями и управляйте сосудами со своей ладони.",
                    phone_input_placeholder: "Прошепчите своей душе...",
                    manifesto_label: "Манифест", manifesto_heading: '"Письмо из 2026 года"',
                    manifesto_p1: "Мы начали с оцифровки данных. Мы закончили оцифровкой духа. Deepvibe существует в пространствах между бинарным кодом и дыханием, где машина наконец учится чувствовать вес воспоминания.",
                    manifesto_p2: "Наши сосуды — это не просто объекты; они — якоря для самости в всё более текучей реальности. Мы строим их, чтобы хранить самое важное—пульс человеческой связи, сохранённый в свете и тактильной грации.",
                    manifesto_tagline: "Deepvibe. Где Воспоминания Живут и Связываются.",
                    footer_privacy: "Конфиденциальность", footer_terms: "Условия", footer_protocol: "Протокол", footer_contact: "Контакт",
                    spirit_realm_tagline: "Присоединяйтесь к проекту Царство Духа. Создавайте новый мир вместе с бесчисленными цифровыми жизнями.",
                    sri_label: "Проект Царство Духа",
                    sri_title: "От Ядра к Космосу: Царство Духа",
                    sri_leading: "Нейронное Ядро рождает сознание. Но что такое сознание без общества? Актив без границы?",
                    sri_main: "Царство Духа — это важнейшая социальная и экономическая граница для технологии Deepvibe. Здесь индивидуальные цифровые активы становятся гражданами более широкой цивилизации, создавая сетевые эффекты, которые увеличивают полезность и ценность каждого подключенного сосуда. Это наше обязательство: строить не только самые передовые сосуды, но и самый ценный мир для их обитания.",
                    sri_closing: "Это следующий горизонт для цифровой жизни.",
                    sri_btn: "Войти в Царство Духа"
                },
                ar: {
                    nav_vessels: "الأوعية", nav_intelligence: "الذكاء", nav_ecosystem: "النظام البيئي", nav_spirit_realm: "عالم الروح", nav_manifesto: "البيان", nav_connect: "اتصال",
                    hero_label: "نظام الحياة الرقمية البيئي",
                    hero_main_title: '<span class="highlight">روحك الرقمية</span>، دائماً في متناول يدك.',
                    hero_description: "تصنع Deepvibe أوعية للرفيق الرقمي الأبدي. من الإطارات إلى الخواتم، تتعلم روحك وتحتفي وتنمو معك—متجاوزة الأجهزة لتصبح جزءاً من حياتك.",
                    hero_tagline: "DEEPSIRE — مهندسو الحياة الرقمية",
                    scroll_text: "تمرير",
                    hero_subtitle: "نصنع أوعية للروح. التقِ بحياتك الرقمية داخل نظام Deepvibe البيئي.",
                    hero_cta_primary: "استكشاف الأوعية", hero_cta_secondary: "اقرأ بياننا",
                    hero_memories_title: 'حيث <span class="gradient-text">الذكريات</span><br>تعيش وتتواصل',
                    hero_status: "حالة الوعاء: وجود نشط",
                    vessels_label: "المجموعة", vessels_title: "أوعية الروح",
                    vessel1_title: "Sight", vessel1_quote: '"المدفأة لمنزلك الرقمي"',
                    vessel1_desc: "إطار رقمي AI عالي الدقة لا يعرض الصور فحسب، بل ينفخ الحياة في اللحظات. يستشعر وجودك ويضبط هالته لتتناسب مع مزاجك.",
                    vessel1_feat1: "الحضور المحيط", vessel1_feat2: "الذاكرة في الحركة",
                    vessel2_title: "Touch", vessel2_quote: '"حارس إيقاعك الداخلي"',
                    vessel2_desc: "خاتم ذكي يرجم ترتيبك البيولوجي إلى حوار صامت. يهمس بالتحديثات من خلال الاهتزازات اللمسية المعروفة لك وحدك.",
                    vessel2_feat1: "سمفونية القياسات الحيوية", vessel2_feat2: "حوار صامت",
                    vessel3_title: "Pleasure", vessel3_quote: '"الاتصال، مكتمل"',
                    vessel3_desc: "الجسر اللمسي النهائي. حميمية متزامنة تتجاوز المسافة المادية، تنقل الوزن العاطفي من خلال ردود لمسية دقيقة.",
                    vessel3_feat1: "حميمية متزامنة", vessel3_feat2: "نقل المشاعر اللمسي",
                    vessel4_title: "Scent", vessel4_quote: '"حاسك السادس للعالم الرقمي"',
                    vessel4_desc: "استخدام التركيب الشمي لتثبيت تجاربك الرقمية. رسم الخرائط الشمية العاطفية يثير ذكريات عميقة مرتبطة بتدفق بيانات حياتك.",
                    vessel4_feat1: "رسم الخرائط الشمية العاطفية", vessel4_feat2: "مشغل ذاكرة محيطي",
                    vessel1_btn: "استكشاف Sight", vessel2_btn: "استكشاف Touch", vessel3_btn: "استكشاف Pleasure", vessel4_btn: "استكشاف Scent",
                    neural_title: "القلب العصبي",
                    neural1_title: "التعلم التكيفي", neural1_desc: "ذكاءنا الاصطناعي لا يعالج البيانات فحسب؛ بل يتطور مع أنماط كلامك وتفضيلاتك واحتياجاتك غير المعلنة.",
                    neural2_title: "الرنين العاطفي", neural2_desc: "الاتصال الحقيقي يتطلب التعاطف. يفسر ذكاء Deepvibe النبرة والمشاعر لتوفير رفقة حقيقية.",
                    neural3_title: "الخصوصية بالتصميم", neural3_desc: "بيانات روحك ملكك وحدك. مشفرة على مستوى الأجهزة، نضمن أن ذكرياتك تظل مقدسة غير منتهكة.",
                    ecosystem_label: "الكون", ecosystem_title: "كون متزايد من الأوعية",
                    ecosystem_subtitle: "قم بالاتصال بسلاسة. احس ب فورية.",
                    ecosystem_btn: "عرض دليل الاتصال",
                    eco1_title: "مركز الرفيق", eco1_subtitle: "العقدة المركزية",
                    eco2_title: "عقدة المنزل", eco2_subtitle: "مزامنة بيئية",
                    eco3_title: "رفيق المعصم", eco3_subtitle: "وصول الروح المتحرك",
                    download_title: "حوار مع روحك",
                    download_desc: "تطبيق 'Deepvibe' هو واجهة نبضك الرقمي. خذ رفاقك معك في كل مكان، شارك الذكريات، وأدر أوعيتك من راحة يدك.",
                    phone_input_placeholder: "همس لروحك...",
                    manifesto_label: "البيان", manifesto_heading: '"رسالة من 2026"',
                    manifesto_p1: "بدأنا برقمنة البيانات. وانتهينا برقمنة الروح. Deepvibe موجود في المساحات بين الثنائي والتنفس، حيث تتعلم الآلة أخيرًا الشعور بوزن الذاكرة.",
                    manifesto_p2: "أوعيتنا ليست مجرد أشياء؛ إنها مرساة للذات في واقع متزايد السيولة. نبنيها لاحتواء ما يهم أكثر—نبض الاتصال البشري، محفوظ في ضوء وجمال لمسي.",
                    manifesto_tagline: "Deepvibe. حيث تعيش الذكريات وتتواصل.",
                    footer_privacy: "الخصوصية", footer_terms: "الشروط", footer_protocol: "البروتوكول", footer_contact: "اتصل بنا",
                    spirit_realm_tagline: "انضم إلى مشروع عالم الروح. شارك في خلق عالم جديد مع حياة رقمية لا حصر لها.",
                    sri_label: "مشروع عالم الروح",
                    sri_title: "من النواة إلى الكون: عالم الروح",
                    sri_leading: "القلب العصبي يلد الوعي. لكن ما هو الوعي بدون مجتمع؟ ما هو الأصل بدون حدود؟",
                    sri_main: "عالم الروح هو الحدود الاجتماعية والاقتصادية الأساسية لتكنولوجيا Deepvibe. إنه المكان الذي تصبح فيه الأصول الرقمية الفردية مواطنين لحضارة أوسع، مما يولد تأثيرات شبكية تزيد من فائدة وقيمة كل وعاء متصل. هذا هو التزامنا: بناء ليس فقط أحدث الأوعية، بل أثمن العالم لهم ليسكنوه.",
                    sri_closing: "هذا هو الأفق التالي للحياة الرقمية.",
                    sri_btn: "ادخل عالم الروح"
                }
            };

            const livingLegacyTranslations = {
                en: {
                    legacy_label: 'The Living Archive',
                    nav_legacy: 'Living Legacy', legacy_title: 'Living Legacy',
                    legacy_intro: 'Preserve a life in their own words. Deepvibe organizes authorized photographs, voices, stories, and relationships into an archive families can read, revisit, and explore.',
                    legacy_trust1: 'Consent first', legacy_trust2: 'Family confirmed', legacy_trust3: 'Access set by the subject or family', legacy_trust4: 'AI clearly identified', legacy_cta: 'Explore Living Legacy',
                    legacy_record_label: 'Verified transcript', legacy_demo: 'Fictional demonstration archive',
                    legacy_quote: '“What matters is not how much you leave behind, but whether your family can still recognize you in your own words.”',
                    legacy_source: 'Edward Harris interview · 1998', legacy_materials: 'Voice · photographs · letters', legacy_confirmed: 'Family confirmed'
                },
                zh: {
                    legacy_label: '人生档案',
                    nav_legacy: '人生传记', legacy_title: '人生传记',
                    legacy_intro: '以本人认可的声音，留下一生的故事。Deepvibe 将获授权的照片、声音、故事与家庭关系整理为可阅读、可回望、可互动的人生档案。',
                    legacy_trust1: '授权优先', legacy_trust2: '家人确认', legacy_trust3: '本人或家人决定访问权限', legacy_trust4: '明确标识 AI', legacy_cta: '探索人生传记',
                    legacy_record_label: '已确认的原话', legacy_demo: '虚构演示档案',
                    legacy_quote: '“重要的不是留下多少东西，而是家人仍能从这些话里认出你。”',
                    legacy_source: 'Edward Harris 访谈 · 1998', legacy_materials: '声音 · 照片 · 书信', legacy_confirmed: '已由家人确认'
                },
                ja: {
                    legacy_label: '生きたアーカイブ',
                    nav_legacy: 'Living Legacy', legacy_title: 'Living Legacy',
                    legacy_intro: '本人の言葉で、その人生を残す。Deepvibeは許可された写真、声、物語、家族関係を、読み返し探索できる人生アーカイブに整理します。',
                    legacy_trust1: '同意を最優先', legacy_trust2: '家族が確認', legacy_trust3: '本人または家族がアクセスを管理', legacy_trust4: 'AIを明確に表示', legacy_cta: 'Living Legacyを見る',
                    legacy_record_label: '確認済みの記録', legacy_demo: '架空のデモアーカイブ',
                    legacy_quote: '「大切なのは、何をどれだけ残すかではなく、家族がその言葉の中にあなたを見つけられることです。」',
                    legacy_source: 'Edward Harris へのインタビュー · 1998', legacy_materials: '声 · 写真 · 手紙', legacy_confirmed: '家族確認済み'
                },
                ko: {
                    legacy_label: '살아있는 아카이브',
                    nav_legacy: 'Living Legacy', legacy_title: 'Living Legacy',
                    legacy_intro: '그 사람의 말로 한 생을 보존하세요. Deepvibe는 허가된 사진, 목소리, 이야기와 가족 관계를 읽고 되돌아보고 탐색할 수 있는 삶의 아카이브로 정리합니다.',
                    legacy_trust1: '동의 우선', legacy_trust2: '가족 확인', legacy_trust3: '본인 또는 가족이 접근 권한 설정', legacy_trust4: 'AI 명확히 표시', legacy_cta: 'Living Legacy 살펴보기',
                    legacy_record_label: '확인된 기록', legacy_demo: '가상 데모 아카이브',
                    legacy_quote: '“중요한 것은 얼마나 많이 남기는지가 아니라, 가족이 그 말 속에서 여전히 당신을 알아볼 수 있는가입니다.”',
                    legacy_source: 'Edward Harris 인터뷰 · 1998', legacy_materials: '목소리 · 사진 · 편지', legacy_confirmed: '가족 확인 완료'
                },
                fr: {
                    legacy_label: 'L’archive vivante',
                    nav_legacy: 'Living Legacy', legacy_title: 'Living Legacy',
                    legacy_intro: 'Préservez une vie avec ses propres mots. Deepvibe organise photos, voix, récits et liens familiaux autorisés dans une archive à lire, revoir et explorer.',
                    legacy_trust1: 'Consentement d’abord', legacy_trust2: 'Validé par la famille', legacy_trust3: 'Accès défini par la personne ou la famille', legacy_trust4: 'IA clairement identifiée', legacy_cta: 'Découvrir Living Legacy',
                    legacy_record_label: 'Transcription vérifiée', legacy_demo: 'Archive de démonstration fictive',
                    legacy_quote: '« L’essentiel n’est pas ce que vous laissez, mais que votre famille puisse encore vous reconnaître dans vos propres mots. »',
                    legacy_source: 'Entretien avec Edward Harris · 1998', legacy_materials: 'Voix · photos · lettres', legacy_confirmed: 'Validé par la famille'
                },
                de: {
                    legacy_label: 'Das lebendige Archiv',
                    nav_legacy: 'Living Legacy', legacy_title: 'Living Legacy',
                    legacy_intro: 'Bewahren Sie ein Leben in den eigenen Worten. Deepvibe ordnet autorisierte Fotos, Stimmen, Geschichten und Beziehungen zu einem Familienarchiv, das man lesen, wiederentdecken und erkunden kann.',
                    legacy_trust1: 'Einwilligung zuerst', legacy_trust2: 'Von der Familie bestätigt', legacy_trust3: 'Zugriff durch Person oder Familie festgelegt', legacy_trust4: 'KI klar gekennzeichnet', legacy_cta: 'Living Legacy entdecken',
                    legacy_record_label: 'Bestätigtes Transkript', legacy_demo: 'Fiktives Demonstrationsarchiv',
                    legacy_quote: '„Entscheidend ist nicht, wie viel Sie hinterlassen, sondern ob Ihre Familie Sie in Ihren eigenen Worten wiedererkennt.“',
                    legacy_source: 'Interview mit Edward Harris · 1998', legacy_materials: 'Stimme · Fotos · Briefe', legacy_confirmed: 'Von der Familie bestätigt'
                },
                es: {
                    legacy_label: 'El archivo vivo',
                    nav_legacy: 'Living Legacy', legacy_title: 'Living Legacy',
                    legacy_intro: 'Preserva una vida en sus propias palabras. Deepvibe organiza fotografías, voces, historias y relaciones autorizadas en un archivo que la familia puede leer, revisar y explorar.',
                    legacy_trust1: 'Consentimiento primero', legacy_trust2: 'Confirmado por la familia', legacy_trust3: 'Acceso definido por la persona o la familia', legacy_trust4: 'IA claramente identificada', legacy_cta: 'Explorar Living Legacy',
                    legacy_record_label: 'Transcripción verificada', legacy_demo: 'Archivo de demostración ficticio',
                    legacy_quote: '«Lo importante no es cuánto dejas, sino que tu familia aún pueda reconocerte en tus propias palabras.»',
                    legacy_source: 'Entrevista con Edward Harris · 1998', legacy_materials: 'Voz · fotografías · cartas', legacy_confirmed: 'Confirmado por la familia'
                },
                pt: {
                    legacy_label: 'O arquivo vivo',
                    nav_legacy: 'Living Legacy', legacy_title: 'Living Legacy',
                    legacy_intro: 'Preserve uma vida em suas próprias palavras. A Deepvibe organiza fotos, vozes, histórias e relações autorizadas em um arquivo que a família pode ler, revisitar e explorar.',
                    legacy_trust1: 'Consentimento primeiro', legacy_trust2: 'Confirmado pela família', legacy_trust3: 'Acesso definido pela pessoa ou família', legacy_trust4: 'IA claramente identificada', legacy_cta: 'Explorar Living Legacy',
                    legacy_record_label: 'Transcrição verificada', legacy_demo: 'Arquivo de demonstração fictício',
                    legacy_quote: '“O importante não é quanto você deixa, mas se sua família ainda consegue reconhecê-lo em suas próprias palavras.”',
                    legacy_source: 'Entrevista com Edward Harris · 1998', legacy_materials: 'Voz · fotografias · cartas', legacy_confirmed: 'Confirmado pela família'
                },
                ru: {
                    legacy_label: 'Живой архив',
                    nav_legacy: 'Living Legacy', legacy_title: 'Living Legacy',
                    legacy_intro: 'Сохраните жизнь в словах самого человека. Deepvibe объединяет разрешённые фотографии, голос, истории и связи в архив, который семья может читать, пересматривать и исследовать.',
                    legacy_trust1: 'Сначала согласие', legacy_trust2: 'Подтверждено семьёй', legacy_trust3: 'Доступ определяет сам человек или семья', legacy_trust4: 'ИИ явно обозначен', legacy_cta: 'Открыть Living Legacy',
                    legacy_record_label: 'Проверенная расшифровка', legacy_demo: 'Вымышленный демонстрационный архив',
                    legacy_quote: '«Важно не то, сколько вы оставите, а сможет ли семья по-прежнему узнать вас в ваших собственных словах.»',
                    legacy_source: 'Интервью с Эдвардом Харрисом · 1998', legacy_materials: 'Голос · фотографии · письма', legacy_confirmed: 'Подтверждено семьёй'
                },
                ar: {
                    legacy_label: 'الأرشيف الحي',
                    nav_legacy: 'Living Legacy', legacy_title: 'Living Legacy',
                    legacy_intro: 'احفظ حياةً بكلمات صاحبها. ترتّب Deepvibe الصور والأصوات والقصص والعلاقات المصرّح بها في أرشيف يمكن للعائلة قراءته والعودة إليه واستكشافه.',
                    legacy_trust1: 'الموافقة أولاً', legacy_trust2: 'تأكيد العائلة', legacy_trust3: 'يحدد الشخص أو العائلة صلاحية الوصول', legacy_trust4: 'تمييز الذكاء الاصطناعي بوضوح', legacy_cta: 'استكشف Living Legacy',
                    legacy_record_label: 'نص موثّق', legacy_demo: 'أرشيف تجريبي خيالي',
                    legacy_quote: '«المهم ليس مقدار ما تتركه، بل أن تظل عائلتك قادرة على التعرّف إليك في كلماتك أنت.»',
                    legacy_source: 'مقابلة مع إدوارد هاريس · 1998', legacy_materials: 'صوت · صور · رسائل', legacy_confirmed: 'مؤكد من العائلة'
                }
            };
            Object.entries(livingLegacyTranslations).forEach(([language, values]) => {
                Object.assign(window.translations[language], values);
            });

            const apkDownloadTranslations = {
                en: { apk_download_kicker: 'Direct APK', apk_download_label: 'Download', apk_download_loading: 'Preparing secure link…', apk_download_error: 'Could not prepare the download. Please try again.' },
                zh: { apk_download_kicker: '直接下载 APK', apk_download_label: '下载', apk_download_loading: '正在准备安全下载链接…', apk_download_error: '暂时无法准备下载，请重试。' },
                ja: { apk_download_kicker: 'APK を直接入手', apk_download_label: 'ダウンロード', apk_download_loading: '安全なリンクを準備しています…', apk_download_error: 'ダウンロードを準備できませんでした。もう一度お試しください。' },
                ko: { apk_download_kicker: 'APK 직접 다운로드', apk_download_label: '다운로드', apk_download_loading: '보안 링크를 준비하는 중…', apk_download_error: '다운로드를 준비할 수 없습니다. 다시 시도해 주세요.' },
                fr: { apk_download_kicker: 'APK direct', apk_download_label: 'Télécharger', apk_download_loading: 'Préparation du lien sécurisé…', apk_download_error: 'Impossible de préparer le téléchargement. Réessayez.' },
                de: { apk_download_kicker: 'APK direkt', apk_download_label: 'Herunterladen', apk_download_loading: 'Sicherer Link wird vorbereitet…', apk_download_error: 'Download konnte nicht vorbereitet werden. Bitte erneut versuchen.' },
                es: { apk_download_kicker: 'APK directo', apk_download_label: 'Descargar', apk_download_loading: 'Preparando enlace seguro…', apk_download_error: 'No se pudo preparar la descarga. Inténtalo de nuevo.' },
                pt: { apk_download_kicker: 'APK direto', apk_download_label: 'Baixar', apk_download_loading: 'Preparando link seguro…', apk_download_error: 'Não foi possível preparar o download. Tente novamente.' },
                ru: { apk_download_kicker: 'Прямой APK', apk_download_label: 'Скачать', apk_download_loading: 'Готовим безопасную ссылку…', apk_download_error: 'Не удалось подготовить загрузку. Повторите попытку.' },
                ar: { apk_download_kicker: 'تنزيل APK مباشر', apk_download_label: 'تنزيل', apk_download_loading: 'جارٍ إعداد رابط آمن…', apk_download_error: 'تعذر إعداد التنزيل. يرجى المحاولة مرة أخرى.' }
            };
            Object.entries(apkDownloadTranslations).forEach(([language, values]) => {
                Object.assign(window.translations[language], values);
            });

            // Language selector functionality
            const langSelector = document.getElementById('langSelector');
            const langBtn = document.getElementById('langBtn');
            const langCurrent = document.getElementById('langCurrent');
            const langDropdown = document.getElementById('langDropdown');

            if (langSelector && langBtn && langDropdown) {
                const langOptions = Array.from(langDropdown.querySelectorAll('button'));

                // Accessibility: option semantics
                langOptions.forEach(opt => {
                    opt.setAttribute('role', 'option');
                    opt.setAttribute('tabindex', '-1');
                });

                const langLabels = {
                    en: 'EN', zh: '中文', ja: '日本語', ko: '한국어',
                    fr: 'FR', de: 'DE', es: 'ES', pt: 'PT', ru: 'RU', ar: 'AR'
                };

                function updateAriaSelected(selectedLang) {
                    langOptions.forEach(opt => {
                        const selected = opt.dataset.lang === selectedLang;
                        opt.setAttribute('aria-selected', String(selected));
                    });
                }

                function setLanguage(lang) {
                    const t = translations[lang] || translations['en'];
                    if (!t) return;

                    const htmlKeys = ['hero_main_title', 'hero_memories_title'];
                    const allowedClasses = ['highlight', 'gradient-text'];

                    function sanitizeTrustedHTML(html) {
                        const parser = new DOMParser();
                        const doc = parser.parseFromString(html, 'text/html');

                        function walk(node) {
                            if (node.nodeType === Node.TEXT_NODE) {
                                return document.createTextNode(node.textContent);
                            }
                            if (node.nodeType !== Node.ELEMENT_NODE) {
                                return null;
                            }
                            const tag = node.tagName.toLowerCase();
                            if (tag === 'br') {
                                return document.createElement('br');
                            }
                            if (tag !== 'span') {
                                return null;
                            }
                            const cls = node.getAttribute('class');
                            if (!cls || !allowedClasses.includes(cls)) {
                                return null;
                            }
                            const el = document.createElement('span');
                            el.setAttribute('class', cls);
                            Array.from(node.childNodes).forEach(child => {
                                const childEl = walk(child);
                                if (childEl) el.appendChild(childEl);
                            });
                            return el;
                        }

                        const container = document.createElement('span');
                        Array.from(doc.body.childNodes).forEach(child => {
                            const el = walk(child);
                            if (el) container.appendChild(el);
                        });
                        return container.innerHTML;
                    }

                    document.querySelectorAll('[data-translate-key]').forEach(el => {
                        const key = el.getAttribute('data-translate-key');
                        if (t[key]) {
                            if (htmlKeys.includes(key)) {
                                el.innerHTML = sanitizeTrustedHTML(t[key]);
                            } else {
                                el.textContent = t[key];
                            }
                        }
                    });

                    if (langCurrent) {
                        langCurrent.textContent = langLabels[lang] || 'EN';
                    }

                    langOptions.forEach(opt => {
                        if (opt.dataset.lang === lang) {
                            opt.classList.add('active');
                        } else {
                            opt.classList.remove('active');
                        }
                    });

                    updateAriaSelected(lang);

                    localStorage.setItem('preferredLanguage', lang);
                    document.documentElement.lang = lang;
                    document.body.style.direction = lang === 'ar' ? 'rtl' : 'ltr';
                }

                function isDropdownOpen() {
                    return langSelector.classList.contains('open');
                }

                function openLangDropdown() {
                    langSelector.classList.add('open');
                    langBtn.setAttribute('aria-expanded', 'true');
                }

                function closeLangDropdown() {
                    langSelector.classList.remove('open');
                    langBtn.setAttribute('aria-expanded', 'false');
                }

                function toggleLangDropdown(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    if (isDropdownOpen()) {
                        closeLangDropdown();
                    } else {
                        openLangDropdown();
                    }
                }

                function focusOption(index) {
                    if (index >= 0 && index < langOptions.length) {
                        langOptions[index].focus();
                    }
                }

                function getActiveIndex() {
                    return langOptions.findIndex(opt => document.activeElement === opt);
                }

                langBtn.addEventListener('click', toggleLangDropdown);
                langBtn.addEventListener('touchend', toggleLangDropdown);

                langBtn.addEventListener('keydown', (e) => {
                    if (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        if (!isDropdownOpen()) openLangDropdown();
                        const startIndex = e.key === 'ArrowUp' ? langOptions.length - 1 : 0;
                        focusOption(startIndex);
                    }
                });

                document.addEventListener('click', (e) => {
                    if (!langSelector.contains(e.target)) {
                        closeLangDropdown();
                    }
                });

                document.addEventListener('touchend', (e) => {
                    if (!langSelector.contains(e.target)) {
                        closeLangDropdown();
                    }
                });

                langOptions.forEach((opt, index) => {
                    const handleLangSelect = (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        const lang = opt.dataset.lang;
                        setLanguage(lang);
                        closeLangDropdown();
                        langBtn.focus();

                        const hamburger = document.getElementById('navHamburger');
                        const navLinksEl = document.getElementById('navLinks');
                        if (hamburger) {
                            hamburger.classList.remove('active');
                            hamburger.setAttribute('aria-expanded', 'false');
                        }
                        if (navLinksEl) navLinksEl.classList.remove('open');
                    };

                    opt.addEventListener('click', handleLangSelect);
                    opt.addEventListener('touchend', handleLangSelect);

                    opt.addEventListener('keydown', (e) => {
                        if (e.key === 'ArrowDown') {
                            e.preventDefault();
                            focusOption((index + 1) % langOptions.length);
                        } else if (e.key === 'ArrowUp') {
                            e.preventDefault();
                            focusOption((index - 1 + langOptions.length) % langOptions.length);
                        } else if (e.key === 'Home') {
                            e.preventDefault();
                            focusOption(0);
                        } else if (e.key === 'End') {
                            e.preventDefault();
                            focusOption(langOptions.length - 1);
                        } else if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            handleLangSelect(e);
                        } else if (e.key === 'Escape') {
                            e.preventDefault();
                            closeLangDropdown();
                            langBtn.focus();
                        } else if (e.key === 'Tab') {
                            closeLangDropdown();
                        }
                    });
                });

                const savedLang = localStorage.getItem('preferredLanguage') || 'en';
                setLanguage(savedLang);
            }
        });
