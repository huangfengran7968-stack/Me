/* ===== Living Legacy · 多语言字典 =====
 * 英文为默认界面，简体中文由 HTML 与 biography-data.js 提供；保留的日/韩人物译文供后续扩展使用。
 * 静态文案用 data-i18n 键；家谱人物用 FAMILY_I18N（按人物 id 覆盖层翻译，不影响 name/children 的连线逻辑）。
 */
const BIO_UI_I18N = {
  en: {
    // 导航 / 通用
    'skip': 'Skip to main content',
    'nav.lang': 'Language',
    'nav.home': 'Home',
    'nav.vessels': 'Vessels',
    'nav.intelligence': 'Intelligence',
    'nav.biography': 'Living Legacy',
    'nav.ecosystem': 'Ecosystem',
    'nav.spirit': 'Spirit Realm',
    'nav.manifesto': 'Manifesto',
    'nav.contact': 'Contact Us',
    'hamburger.open': 'Open menu',
    'hamburger.close': 'Close menu',
    // 章节导航
    'chapter.memory': 'Memory',
    'chapter.sorting': 'Organize',
    'chapter.relations': 'Relations',
    'chapter.dialogue': 'Dialogue',
    // 首屏
    'hero.eyebrow': 'Deepvibe · Living Legacy',
    'hero.title': 'Preserve a life<br>in their own words.',
    'hero.lead': 'Turn authorized photographs, voices, stories and relationships into a life archive made to be read, revisited and explored.',
    'hero.ctaPrimary': 'Begin Living Legacy',
    'hero.ctaText': 'View the fictional demo',
    'hero.trust1': 'Consent first',
    'hero.trust2': 'Family-confirmed',
    'hero.trust3': 'Access set by the subject or family',
    'hero.proofLabel': 'Verified transcript',
    'hero.demoLabel': 'Fictional demonstration archive',
    'hero.quote': '“What matters is not how much you leave behind, but whether your family can still recognize you in your own words.”',
    'hero.source': 'Family interview · 1998',
    'hero.archiveTitle': 'Source archive',
    'hero.archiveItems': 'Photos · Voice · Letters · Family accounts',
    'hero.confirmed': 'Family confirmed',
    'hero.photos': 'Photos and images',
    'hero.voice': 'Voice records',
    'hero.letters': 'Letters and accounts',
    // 档案索引
    'index.caption': 'An index of a life archive',
    'index.b1': "A person's beginning",
    'index.p1': 'Birthplace, family titles and the era',
    'index.f2': 'Voice',
    'index.q2': '"Eat while it is hot, and take the road slowly."',
    'index.f3': 'Story',
    'index.b3': 'Leaving home for the first time',
    'index.p3': 'Time, place and unspoken feelings',
    'index.f4': 'Relations',
    'index.b4': 'Different facets of the same person',
    'index.p4': 'Titles, shared memories and family accounts',
    'index.status': 'Fictional demo archive · Current index',
    // 记忆的组成
    'value.eyebrow': '01 · What memory is made of',
    'value.title': 'Keep the person your family recognizes',
    'value.desc': 'Organize scattered materials into content with sources, connections and warmth.',
    'value.1.label': 'Person',
    'value.1.title': 'How they looked',
    'value.1.desc': 'Appearance, expressions, habits and the details family remembers.',
    'value.2.label': 'Voice',
    'value.2.title': 'How they spoke',
    'value.2.desc': 'Catchphrases, tone, dialect and voice recordings.',
    'value.3.label': 'Life',
    'value.3.title': 'The life they lived',
    'value.3.desc': 'Important experiences, family stories and timelines to be verified.',
    'value.4.label': 'Kin',
    'value.4.title': 'Their relationships',
    'value.4.desc': 'Titles, shared memories and different family accounts.',
    // 整理过程
    'process.eyebrow': '02 · From materials to archive',
    'process.title': 'Every step is confirmed by someone',
    'process.desc': 'Technology helps organize content, but never decides for the family what is true or usable.',
    'process.1.title': 'Organize materials',
    'process.1.desc': 'With clear authorization, collect photos, voices, letters, keepsakes and relationships.',
    'process.2.title': 'Confirm together',
    'process.2.desc': 'Distinguish facts, feelings and unverified information. The subject or family can change or revoke access at any time.',
    'process.3.title': 'Create the presentation',
    'process.3.desc': 'Turn confirmed stories, time and relationships into an archive designed for reading and interaction.',
    // 人物与关系
    'family.eyebrow': '03 · People and relationships',
    'family.title': 'A family tree is only the table of contents for stories',
    'family.desc': 'All people, relationships and experiences below are fictional and do not correspond to any real individual or family. Click a person to view a structured archive.',
    'family.scrollHint': 'On small screens, swipe to view the full relationships',
    // 数字人
    'digital.eyebrow': '04 · Archive dialogue',
    'digital.title': 'Ask the confirmed life archive',
    'digital.desc': 'Answers are limited to authorized, family-confirmed sources. AI does not represent the person or invent views they never recorded.',
    'digital.tellerLabel': 'Archive narrator',
    'digital.figureNote': 'Illustrative figure, for demonstrating how to read the archive only',
    'digital.demoNoticeTitle': 'AI interface demonstration',
    'digital.demoNoticeText': 'This page only responds to preset questions about a fictional archive. Input is not sent or saved; please do not enter sensitive personal information.',
    // 结尾 / 页脚
    'closing.eyebrow': 'Start from a story',
    'closing.title': 'Record one person, and organize the time a family walked through together.',
    'closing.cta': 'Contact Deepvibe',
    'footer.brandSub': 'Living Legacy',
    'footer.tagline': 'Recording voices, stories and time walked through together',
    'footer.back': 'Back to home',
    // 无障碍标签
    'aria.nav': 'Primary navigation',
    'aria.language': 'Choose language',
    'aria.chapters': 'Page chapters',
    'aria.proof': 'Fictional archive source example',
    'aria.sources': 'Archive source types',
    'aria.archiveExample': 'Life archive content example',
    'aria.figure': 'Illustrative archive narrator',
    'aria.prompts': 'Suggested questions',
    'aria.question': 'Question about the fictional archive',
    'aria.footerChapters': 'Footer chapters',
    'aria.top': 'Back to top',
    'aria.closePerson': 'Close person details',
    // 人物弹窗
    'modal.fiction': 'Fictional demo person',
    'modal.born': 'Born',
    'modal.origin': 'Origin',
    'modal.job': 'Occupation',
    'modal.family': 'Family',
    'modal.bio': 'Biography',
    'modal.milestones': 'Milestones',
    'modal.values': 'Family influence',
    'modal.records': 'Preserved content',
    'modal.recordsImages': 'Images',
    'modal.recordsAudio': 'Voice clips',
    'modal.recordsStories': 'Family stories',
    'modal.recordsValues': 'Family sayings',
    'modal.close': 'Close archive'
  },
  ja: {
    'skip': 'メインコンテンツへスキップ',
    'nav.lang': '言語',
    'nav.home': 'ホーム',
    'nav.arch': 'アーキテクチャ',
    'nav.stories': 'ストーリー',
    'nav.soulProducts': '四つのスマートデバイス',
    'nav.tech': '技術',
    'nav.biography': '人生伝記',
    'nav.lingjing': '霊境計画',
    'nav.contact': 'お問い合わせ',
    'hamburger.open': 'メニューを開く',
    'hamburger.close': 'メニューを閉じる',
    'chapter.memory': '記憶',
    'chapter.sorting': '整理',
    'chapter.relations': '関係',
    'chapter.dialogue': '対話',
    'hero.eyebrow': 'Deepvibe · Living Legacy',
    'hero.title': 'その人の声、<br>物語と人生を残す',
    'hero.lead': '写真・言葉・共に過ごした経験から、読める・振り返れる・対話できる人生アーカイブを整理します。',
    'hero.ctaPrimary': '架空の例を見る',
    'hero.ctaText': '整理プロセスを知る',
    'hero.trust1': '同意優先',
    'hero.trust2': '家族の確認',
    'hero.trust3': '範囲管理',
    'index.caption': 'ある人生アーカイブの目次',
    'index.b1': 'ある人の出発点',
    'index.p1': '出生地、家族の呼び名と時代背景',
    'index.f2': '声',
    'index.q2': '「ご飯は熱いうちに、道はゆっくり歩け。」',
    'index.f3': '物語',
    'index.b3': '初めて故郷を離れた日',
    'index.p3': '時間、場所と言えなかった気持ち',
    'index.f4': '関係',
    'index.b4': '同じ人の異なる側面',
    'index.p4': '呼び名、共有の記憶と家族の語り',
    'index.status': '架空デモアーカイブ · 現在の目次',
    'value.eyebrow': '01 · 記憶の構成',
    'value.title': '家族がわかるその人を残す',
    'value.desc': '散らばった素材を、出所と関係と温かさのある内容に整理します。',
    'value.1.label': '人',
    'value.1.title': '人物の姿',
    'value.1.desc': '姿、表情、習慣、そして家族が覚えている細部。',
    'value.2.label': '声',
    'value.2.title': '話し方',
    'value.2.desc': '口癖、語調、方言と音声の内容。',
    'value.3.label': '事',
    'value.3.title': '歩んできた人生',
    'value.3.desc': '大切な経験、家族の物語と確認が必要な年表。',
    'value.4.label': '親',
    'value.4.title': '互いの関係',
    'value.4.desc': '呼び名、共有の記憶、そして異なる家族の語り。',
    'process.eyebrow': '02 · 資料からアーカイブへ',
    'process.title': '一歩ごとに、誰かが確認する',
    'process.desc': '技術は内容の整理を手伝いますが、何が真実で何が使えるかを家族に代わって決めることはありません。',
    'process.1.title': '資料を整理する',
    'process.1.desc': '明確な授权の後、写真・声・手紙・古い品・人間関係を収集します。',
    'process.2.title': '共に確認する',
    'process.2.desc': '事実、個人の感情、要確認の情報を区別し、家族が継続的に補足・確認します。',
    'process.3.title': '展示をつくる',
    'process.3.desc': '確認された物語・時間・関係を、読みやすく対話できるアーカイブに整えます。',
    'family.eyebrow': '03 · 人物と関係',
    'family.title': '家系図は、物語の目次にすぎない',
    'family.desc': '以下の人物・関係・経験はすべて架空のデモであり、実在の個人や家族とは一切関係ありません。人物をクリックすると構造化されたアーカイブを確認できます。',
    'family.scrollHint': '小さい画面では左右にスワイプして全関係を確認できます',
    'digital.eyebrow': '04 · デジタルヒューマンの語り体験',
    'digital.title': '人生アーカイブと対話する',
    'digital.desc': '将来、家族は自然な言葉で一段の経験、ある年、共有の記憶を尋ねられるようになります。',
    'digital.tellerLabel': 'アーカイブ語り手',
    'digital.figureNote': '読み方の紹介のみを目的としたイメージ図',
    'digital.demoNoticeTitle': '現在は画面デモです',
    'digital.demoNoticeText': '実在のデジタルヒューマンやAIサービスには接続していません。このページの入力は送信・保存されません。個人の機微情報は入力しないでください。',
    'closing.eyebrow': '一つの物語から始める',
    'closing.title': '一人を記録し、家族が共に歩んできた時間を整える。',
    'closing.cta': 'Deepvibeに問い合わせる',
    'footer.brandSub': '人生伝記',
    'footer.tagline': '声・物語・共に歩んだ時間を記録する',
    'footer.back': '公式サイトへ戻る',
    'modal.fiction': '架空デモ人物',
    'modal.born': '出生',
    'modal.origin': '出身地',
    'modal.job': '職業',
    'modal.family': '家族',
    'modal.bio': '生平紹介',
    'modal.milestones': '重要な節目',
    'modal.values': '家風の影響',
    'modal.records': '保存された内容',
    'modal.recordsImages': '影像資料',
    'modal.recordsAudio': '音声記録',
    'modal.recordsStories': '家族の物語',
    'modal.recordsValues': '家風・家訓',
    'modal.close': 'アーカイブを閉じる'
  },
  ko: {
    'skip': '메인 콘텐츠로 건너뛰기',
    'nav.lang': '언어',
    'nav.home': '홈',
    'nav.arch': '아키텍처',
    'nav.stories': '스토리',
    'nav.soulProducts': '스마트 디바이스',
    'nav.tech': '기술',
    'nav.biography': '인생 전기',
    'nav.lingjing': '영경 계획',
    'nav.contact': '문의하기',
    'hamburger.open': '메뉴 열기',
    'hamburger.close': '메뉴 닫기',
    'chapter.memory': '기억',
    'chapter.sorting': '정리',
    'chapter.relations': '관계',
    'chapter.dialogue': '대화',
    'hero.eyebrow': '위권 · 인생 전기',
    'hero.title': '한 사람의 목소리,<br>이야기와 인생을 남기다',
    'hero.lead': '사진, 말, 함께한 경험에서 읽고, 되돌아보고, 대화할 수 있는 인생 아카이브를 정리합니다.',
    'hero.ctaPrimary': '가상 예시 보기',
    'hero.ctaText': '정리 과정 알아보기',
    'hero.trust1': '동의 우선',
    'hero.trust2': '가족 확인',
    'hero.trust3': '범위 관리',
    'index.caption': '한 인생 아카이브의 색인',
    'index.b1': '한 사람의 출발점',
    'index.p1': '출생지, 가족 호칭과 시대 배경',
    'index.f2': '목소리',
    'index.q2': '"밥은 따뜻할 때, 길은 천천히 걸어라."',
    'index.f3': '이야기',
    'index.b3': '처음으로 고향을 떠나다',
    'index.p3': '시간, 장소와 말하지 못한 마음',
    'index.f4': '관계',
    'index.b4': '같은 사람의 다른 면모',
    'index.p4': '호칭, 공유 기억과 가족의 이야기',
    'index.status': '가상 데모 아카이브 · 현재 색인',
    'value.eyebrow': '01 · 기억의 구성',
    'value.title': '가족이 알아보는 그 사람을 남기다',
    'value.desc': '흩어진 자료를 출처와 관계, 온기가 있는 내용으로 정리합니다.',
    'value.1.label': '사람',
    'value.1.title': '인물의 모습',
    'value.1.desc': '모습, 표정, 습관과 가족이 기억하는 세부.',
    'value.2.label': '목소리',
    'value.2.title': '말하는 방식',
    'value.2.desc': '말버릇, 어조, 사투리와 음성 내용.',
    'value.3.label': '삶',
    'value.3.title': '살아온 인생',
    'value.3.desc': '중요한 경험, 가족 이야기와 확인이 필요한 연대표.',
    'value.4.label': '가족',
    'value.4.title': '서로의 관계',
    'value.4.desc': '호칭, 공유 기억, 그리고 서로 다른 가족의 이야기.',
    'process.eyebrow': '02 · 자료에서 아카이브로',
    'process.title': '모든 단계마다 누군가 확인한다',
    'process.desc': '기술은 내용 정리를 돕지만, 무엇이 진실이고 무엇을 사용할 수 있는지는 가족을 대신해 결정하지 않습니다.',
    'process.1.title': '자료 정리',
    'process.1.desc': '명확한 동의를 받은 후 사진, 목소리, 편지, 오래된 물건과 인물 관계를 수집합니다.',
    'process.2.title': '함께 확인',
    'process.2.desc': '사실, 개인적 감정, 확인이 필요한 정보를 구분하고, 가족이 지속적으로 보완·검토합니다.',
    'process.3.title': '전시 구성',
    'process.3.desc': '확인된 이야기·시간·관계를 읽고 상호작용하기 좋은 아카이브로 정리합니다.',
    'family.eyebrow': '03 · 인물과 관계',
    'family.title': '가계도는 이야기의 목차일 뿐',
    'family.desc': '아래 인물·관계·경험은 모두 가상 데모이며, 실제 개인이나 가족과는 무관합니다. 인물을 클릭하면 구조화된 아카이브를 볼 수 있습니다.',
    'family.scrollHint': '작은 화면에서는 좌우로 스와이프하여 전체 관계를 볼 수 있습니다',
    'digital.eyebrow': '04 · 디지털 휴먼 스토리텔링',
    'digital.title': '인생 아카이브와 대화를 나누다',
    'digital.desc': '미래에는 가족이 자연스러운 말로 어떤 경험, 어떤 해, 공유된 기억을 물어볼 수 있습니다.',
    'digital.tellerLabel': '아카이브 이야기꾼',
    'digital.figureNote': '읽는 방식을 보여주기 위한 예시 이미지',
    'digital.demoNoticeTitle': '현재는 화면 데모입니다',
    'digital.demoNoticeText': '실제 디지털 휴먼이나 AI 서비스에 연결되지 않았습니다. 이 페이지의 입력은 전송되거나 저장되지 않습니다. 민감한 개인정보는 입력하지 마세요.',
    'closing.eyebrow': '한 이야기에서 시작하다',
    'closing.title': '한 사람을 기록하고, 가족이 함께 걸어온 시간을 정리하다.',
    'closing.cta': '위권에 문의하기',
    'footer.brandSub': '인생 전기',
    'footer.tagline': '목소리, 이야기와 함께 걸어온 시간을 기록하다',
    'footer.back': '홈으로 돌아가기',
    'modal.fiction': '가상 데모 인물',
    'modal.born': '출생',
    'modal.origin': '출신지',
    'modal.job': '직업',
    'modal.family': '가족',
    'modal.bio': '생애 소개',
    'modal.milestones': '중요한 이정표',
    'modal.values': '가풍의 영향',
    'modal.records': '보존된 콘텐츠',
    'modal.recordsImages': '영상 자료',
    'modal.recordsAudio': '음성 기록',
    'modal.recordsStories': '가족 이야기',
    'modal.recordsValues': '가풍·가훈',
    'modal.close': '아카이브 닫기'
  }
};

/* ===== 家谱人物译文（按人物 id 覆盖层；未覆盖字段回退到中文数据） ===== */
const FAMILY_I18N = {
  chen_deming: {
    en: {
      name: 'Chen Deming', relation: 'Great-grandfather',
      born: 'March 12, 1908 (lunar 2nd month, 10th day)', origin: 'Shaoxing, Zhejiang',
      job: 'Farming in his early years, later a grain and oil trader', spouse: 'Li Xiulan (1912–1995)',
      summary: 'Born at the turn of the Qing and Republic eras, Chen Deming grew up poor and worked the land while running a small grain and oil business in his youth. Honest and trustworthy, he valued family reputation and the education of his descendants, often urging them to "build the home by diligence and pass it on by loyalty." In later life he still took care of old keepsakes and family stories, becoming one of the most important storytellers in the family memory.',
      impact: 'He upheld diligence, thrift, honesty and benevolence, and deeply influenced the growth of his descendants and the development of the family.',
      timeline: [
        'March 1908 — born in Shaoxing, Zhejiang.',
        'October 1931 — married Li Xiulan and began building the family together.',
        '1933 — eldest son Chen Zhiyuan was born.',
        '1940 — second son Chen Zhiqiang was born.',
        '1958 — moved the family to the outskirts of Shaoxing and gradually stabilized the household.',
        'November 1986 — passed away peacefully.'
      ],
      records: { images: '12 photos', audio: '3 clips', stories: '5 stories', values: '2 items' }
    },
    ja: {
      name: 'チェン・ドーミン', relation: '曽祖父',
      born: '1908年3月12日（旧暦2月10日）', origin: '浙江・紹興',
      job: '若い頃は農業、のちに糧油貿易に従事', spouse: '李秀蘭（1912–1995）',
      summary: '清末民初に生まれた陳徳明は、若い頃家計が貧しく、農業を営みながら小規模な糧油商売を始めた。誠実で信頼を重んじ、家の評判と子孫の教育を大切にし、「勤倹で家を立て、忠厚で世に伝える」と子孫を励ました。晩年も天倫の楽しみを享受し、家の古い品と先祖の物語を整理し続け、家族の記憶で最も重要な語り手の一人である。',
      impact: '勤勉・倹約・誠実・仁愛を尊び、子孫の成長と家族の発展に深い影響を与えた。',
      timeline: [
        '1908年3月、浙江・紹興に生まれる。',
        '1931年10月、李秀蘭と結婚し、家庭を共に築き始める。',
        '1933年、長男・陳志遠が生まれる。',
        '1940年、次男・陳志強が生まれる。',
        '1958年、家族を率いて紹興郊外へ移り、生業が安定する。',
        '1986年11月、安らかに逝去する。'
      ],
      records: { images: '12枚', audio: '3本', stories: '5編', values: '2項目' }
    },
    ko: {
      name: '천더밍', relation: '증조부',
      born: '1908년 3월 12일(음력 2월 10일)', origin: '저장성 사오싱',
      job: '젊어서 농사를 짓고, 이후 곡물·식용유 무역에 종사', spouse: '리슈란(1912–1995)',
      summary: '청말 민초에 태어난 천더밍은 어린 시절 가정형편이 어려워 젊어서 농사를 지으며 소규모 곡물·식용유 장사를 시작했다. 성실하고 신의를 중시했으며 집안의 평판과 후손 교육을 소중히 여겨 "근검으로 집안을 세우고 충후로 대를 잇는다"고 자손을 격려했다. 만년에는 가족의 천륜을 누리면서도 집안의 옛 물건과 조상의 이야기를 정리하여, 가족 기억에서 가장 중요한 이야기꾼 중 한 명이다.',
      impact: '근면, 절약, 성실, 인애를 존중하여 후손의 성장과 가문의 발전에 깊은 영향을 미쳤다.',
      timeline: [
        '1908년 3월, 저장성 사오싱에서 태어남.',
        '1931년 10월, 리슈란과 결혼하여 함께 가정을 꾸리기 시작.',
        '1933년, 장남 천즈위안 출생.',
        '1940년, 차남 천즈창 출생.',
        '1958년, 가족을 이끌고 사오싱 근교로 이주하여 가업이 안정됨.',
        '1986년 11월, 평안히 별세.'
      ],
      records: { images: '12장', audio: '3개', stories: '5편', values: '2개' }
    }
  },
  li_xiulan: {
    en: {
      name: 'Li Xiulan', relation: 'Great-grandmother',
      born: 'July 8, 1912', origin: 'Shaoxing, Zhejiang',
      job: 'Managed the household, skilled in needlework and family feasts', spouse: 'Chen Deming (1908–1986)',
      summary: 'Gentle and resilient, Li Xiulan ran the household in her youth and was skilled in cooking family feasts and needlework. She kept in mind the solar terms, family rites and the customs of weddings and funerals, and passed down kinship, the order of elders and the way of hosting. In her later years she often told the grandchildren about old family affairs, leaving many memories of affection and propriety.',
      impact: 'With gentleness, diligence and propriety she influenced her descendants and upheld the family spirit and order of life.',
      timeline: [
        'July 1912 — born in Shaoxing, Zhejiang.',
        '1931 — married Chen Deming.',
        '1933 to 1940 — gave birth to two sons.',
        '1960s — managed family affairs and maintained ties with relatives.',
        'May 1995 — passed away.'
      ],
      records: { images: '9 photos', audio: '1 clip', stories: '4 stories', values: '3 items' }
    },
    ja: {
      name: 'リー・シュウラン', relation: '曽祖母',
      born: '1912年7月8日', origin: '浙江・紹興',
      job: '家事を取り仕切り、手芸と家宴に長ける', spouse: '陳徳明（1908–1986）',
      summary: '温厚で粘り強い李秀蘭は、若い頃家の中を取り仕切り、家宴と手芸に長けていた。節気、家礼、冠婚葬祭のしきたりを心に留め、親族関係や長幼の秩序、もてなしの作法を次世代へ伝えた。晩年は孫たちに昔の家事を語り、情と礼儀にまつわる多くの記憶を残した。',
      impact: '温和・勤勉・礼儀正しさで子孫に影響を与え、家風と暮らしの秩序を守る重要な存在だった。',
      timeline: [
        '1912年7月、浙江・紹興に生まれる。',
        '1931年、陳徳明と結婚する。',
        '1933年から1940年にかけて二人の息子を産む。',
        '1960年代、家中を取り仕切り、親族の往来を保つ。',
        '1995年5月、逝去する。'
      ],
      records: { images: '9枚', audio: '1本', stories: '4編', values: '3項目' }
    },
    ko: {
      name: '리슈란', relation: '증조모',
      born: '1912년 7월 8일', origin: '저장성 사오싱',
      job: '집안일을 맡아 했고, 바느질과 가족 연회에 능함', spouse: '천더밍(1908–1986)',
      summary: '온화하고 강인한 리슈란은 젊어서 집안의 크고 작은 일을 맡아 했고, 가족 연회 음식과 바느질에 능했다. 절기, 가례, 혼례·상례의 규범을 마음에 새기고, 친족 관계와 장유의 질서, 손님 접대의 예절을 다음 세대에 전했다. 만년에는 손자손녀에게 옛 가정사를 들려주며 정과 예절에 관한 많은 기억을 남겼다.',
      impact: '온화함과 근면, 예절로 후손에게 영향을 주었고 가풍과 삶의 질서를 지키는 중요한 존재였다.',
      timeline: [
        '1912년 7월, 저장성 사오싱에서 태어남.',
        '1931년, 천더밍과 결혼.',
        '1933년부터 1940년까지 두 아들을 낳음.',
        '1960년대, 집안의 크고 작은 일을 주관하며 친족 간의 왕래를 유지.',
        '1995년 5월, 별세.'
      ],
      records: { images: '9장', audio: '1개', stories: '4편', values: '3개' }
    }
  },
  chen_zhiyuan: {
    en: {
      name: 'Chen Zhiyuan', relation: 'Grandfather',
      born: 'February 4, 1933', origin: 'Shaoxing, Zhejiang',
      job: 'Township accountant and family record keeper', spouse: 'Wang Shufang (1936–2012)',
      summary: 'Chen Zhiyuan learned bookkeeping and management from his father from childhood, and worked as an accountant for a township unit as an adult. Rigorous by nature, he kept a large number of family account books, letters, old photos and festival records. To him, family was not an abstract surname but the living evidence left by generations.',
      impact: 'He passed on the principle of "have a basis for everything, be trustworthy as a person" and became a key keeper of family materials.',
      timeline: [
        'February 1933 — born.',
        '1958 — married Wang Shufang.',
        '1965 — eldest son Chen Lixin was born.',
        'From 1978 — began organizing family account books and old photos.',
        'September 2010 — passed away.'
      ],
      records: { images: '18 photos', audio: '4 clips', stories: '6 stories', values: '4 items' }
    },
    ja: {
      name: 'チェン・ジーユエン', relation: '祖父',
      born: '1933年2月4日', origin: '浙江・紹興',
      job: '郷鎮の会計士、兼一族の記録係', spouse: '王淑芳（1936–2012）',
      summary: '陳志遠は幼い頃から父に帳簿と商売を学び、成人後は郷鎮の機関で会計を務めた。几帳面で、多くの家計簿、手紙、古い写真、節句の記録を残した。彼にとって家族とは抽象的な姓ではなく、代々が残してきた暮らしの証しだった。',
      impact: '「凡事に根拠あり、人として信を重んじる」という生き方を後輩に伝え、家族資料保存の重要人物となった。',
      timeline: [
        '1933年2月、生まれる。',
        '1958年、王淑芳と結婚する。',
        '1965年、長男・陳立新が生まれる。',
        '1978年より、家計簿や古い写真の整理を始める。',
        '2010年9月、逝去する。'
      ],
      records: { images: '18枚', audio: '4本', stories: '6編', values: '4項目' }
    },
    ko: {
      name: '천즈위안', relation: '할아버지',
      born: '1933년 2월 4일', origin: '저장성 사오싱',
      job: '향진 회계원, 겸 가문 기록 담당자', spouse: '왕수팡(1936–2012)',
      summary: '천즈위안은 어려서부터 아버지에게 장부 정리와 장사를 배웠고, 성인이 된 뒤 향진 기관에서 회계로 일했다. 성격이 치밀하여 많은 가계부, 편지, 옛 사진, 명절 기록을 남겼다. 그에게 가족은 추상적인 성씨가 아니라 여러 대가 함께 남긴 삶의 증거였다.',
      impact: '"모든 일에 근거가 있고, 사람으로서 신의를 지킨다"는 처세를 후손에게 물려주어 가문 자료 보존의 중요한 인물이 되었다.',
      timeline: [
        '1933년 2월, 태어남.',
        '1958년, 왕수팡과 결혼.',
        '1965년, 장남 천리신 출생.',
        '1978년부터, 가계부와 옛 사진 정리를 시작.',
        '2010년 9월, 별세.'
      ],
      records: { images: '18장', audio: '4개', stories: '6편', values: '4개' }
    }
  },
  wang_shufang: {
    en: {
      name: 'Wang Shufang', relation: 'Grandmother',
      born: 'June 19, 1936', origin: 'Shaoxing, Zhejiang',
      job: 'Primary school teacher, skilled in writing and organizing family letters', spouse: 'Chen Zhiyuan (1933–2010)',
      summary: 'Wang Shufang taught at primary school in her early years and was gentle yet resilient. She was used to recording family events in writing and loved writing letters to relatives far away. Many dates and names behind family letters and photos were carefully kept by her, providing clues for later generations to understand the family story.',
      impact: 'She influenced her descendants with reading, courtesy, trustworthiness and a gentle yet firm attitude to life.',
      timeline: [
        'June 1936 — born.',
        '1958 — married Chen Zhiyuan.',
        '1965 — gave birth to Chen Lixin.',
        '1980s — kept organizing family letters and photo albums.',
        'March 2012 — passed away.'
      ],
      records: { images: '16 photos', audio: '2 clips', stories: '7 stories', values: '3 items' }
    },
    ja: {
      name: 'ワン・シューファン', relation: '祖母',
      born: '1936年6月19日', origin: '浙江・紹興',
      job: '小学校教員、書写と家書の整理に長ける', spouse: '陳志遠（1933–2010）',
      summary: '王淑芳は若い頃小学校教育に携わり、温かく粘り強い性格だった。家の出来事を文字で記録する習慣があり、遠方の親族へ手紙を書くのが好きだった。多くの家書や写真の日付・人物情報は彼女が丹念に残したもので、後世が家族の物語を理解する手がかりとなった。',
      impact: '読書・礼儀・信義・穏やかで揺るがない生き方で子孫に影響を与えた。',
      timeline: [
        '1936年6月、生まれる。',
        '1958年、陳志遠と結婚する。',
        '1965年、陳立新を産む。',
        '1980年代、家書とアルバムの整理を続ける。',
        '2012年3月、逝去する。'
      ],
      records: { images: '16枚', audio: '2本', stories: '7編', values: '3項目' }
    },
    ko: {
      name: '왕수팡', relation: '할머니',
      born: '1936년 6월 19일', origin: '저장성 사오싱',
      job: '초등학교 교사, 글쓰기와 가족 편지 정리에 능함', spouse: '천즈위안(1933–2010)',
      summary: '왕수팡은 젊어서 초등 교육에 종사했고 온화하면서도 강인했다. 집안일을 글로 기록하는 습관이 있었고 멀리 있는 친척에게 편지 쓰기를 좋아했다. 많은 가족 편지와 사진 속 날짜와 인물 정보가 그녀가 정성껏 남긴 것으로, 후손들이 가족 이야기를 이해하는 실마리가 되었다.',
      impact: '독서, 예의, 신의, 그리고 온화하고도 단단한 생활 태도로 후손에게 영향을 주었다.',
      timeline: [
        '1936년 6월, 태어남.',
        '1958년, 천즈위안과 결혼.',
        '1965년, 천리신을 낳음.',
        '1980년대, 가족 편지와 앨범 정리를 꾸준히 함.',
        '2012년 3월, 별세.'
      ],
      records: { images: '16장', audio: '2개', stories: '7편', values: '3개' }
    }
  },
  chen_zhiqiang: {
    en: {
      name: 'Chen Zhiqiang', relation: 'Elder uncle',
      born: 'November 2, 1940', origin: 'Shaoxing, Zhejiang',
      job: 'Technician at a machinery factory', spouse: 'Liu Huizhen (1943–2020)',
      summary: 'Chen Zhiqiang joined a machinery factory in his youth; he was cheerful and good with his hands. Many old pieces of furniture, clocks and picture frames in the family were repaired and preserved by him. He liked telling the younger generation about his work, and often reminded them that "craft and character both need to be steady."',
      impact: 'He represented the family line of being down-to-earth, diligent and skill-focused, and left many oral memories of changing times.',
      timeline: [
        'November 1940 — born.',
        '1962 — married Liu Huizhen.',
        '1968 — son Chen Lijun was born.',
        '1970s to 1990s — worked at the machinery factory for a long time.',
        'December 2018 — passed away.'
      ],
      records: { images: '11 photos', audio: '2 clips', stories: '4 stories', values: '2 items' }
    },
    ja: {
      name: 'チェン・ジーチャン', relation: '伯父',
      born: '1940年11月2日', origin: '浙江・紹興',
      job: '機械工場の技術者', spouse: '劉慧珍（1943–2020）',
      summary: '陳志強は若い頃機械工場に入り、明るく手先の器用な人だった。家にある古い家具、時計、額縁の多くは彼が修理して保存したものだ。仕事の見聞を若い世代に語るのが好きで、「手仕事も人柄も、どちらも落ち着いていること」とよく戒めた。',
      impact: '家族の中で実直・勤勉・技術を重んじる一脈を代表し、時代の移り変わりに関する多くの口述の記憶を残した。',
      timeline: [
        '1940年11月、生まれる。',
        '1962年、劉慧珍と結婚する。',
        '1968年、子・陳立軍が生まれる。',
        '1970年代から1990年代、機械工場で長く働く。',
        '2018年12月、逝去する。'
      ],
      records: { images: '11枚', audio: '2本', stories: '4編', values: '2項目' }
    },
    ko: {
      name: '천즈창', relation: '큰아버지',
      born: '1940년 11월 2일', origin: '저장성 사오싱',
      job: '기계 공장 기술자', spouse: '류후이전(1943–2020)',
      summary: '천즈창은 젊어서 기계 공장에 들어갔고, 성격이 밝고 손재주가 뛰어났다. 집안의 낡은 가구, 시계, 액자 대부분은 그가 수리하고 보존한 것이다. 그는 후손들에게 일터에서의 이야기를 들려주기 좋아했고, "손재주도 사람됨도 모두 안정적이어야 한다"고 자주 당부했다.',
      impact: '가문에서 성실하고 부지런하며 기술을 중시하는 한 갈래를 대표했고, 시대 변화에 대한 많은 구술 기억을 남겼다.',
      timeline: [
        '1940년 11월, 태어남.',
        '1962년, 류후이전과 결혼.',
        '1968년, 아들 천리쥔 출생.',
        '1970~1990년대, 기계 공장에서 오랫동안 근무.',
        '2018년 12월, 별세.'
      ],
      records: { images: '11장', audio: '2개', stories: '4편', values: '2개' }
    }
  },
  liu_huizhen: {
    en: {
      name: 'Liu Huizhen', relation: 'Elder aunt',
      born: 'April 27, 1943', origin: 'Shaoxing, Zhejiang',
      job: 'Clerk at a supply and marketing cooperative', spouse: 'Chen Zhiqiang (1940–2018)',
      summary: 'Warm-hearted Liu Huizhen worked at a supply and marketing cooperative for a long time and knew the neighborhood well. Good at maintaining kinship, she hosted family feasts every festival to bring relatives together again. Many descendants\' memories of "going home" are tied to her cooking, laughter and advice.',
      impact: 'She kept family bonds warm and was an important link in kinship.',
      timeline: [
        'April 1943 — born.',
        '1962 — married Chen Zhiqiang.',
        '1968 — gave birth to Chen Lijun.',
        '1990s — kept hosting family holiday gatherings.',
        'August 2020 — passed away.'
      ],
      records: { images: '13 photos', audio: '1 clip', stories: '5 stories', values: '2 items' }
    },
    ja: {
      name: 'リウ・フイジェン', relation: '伯母',
      born: '1943年4月27日', origin: '浙江・紹興',
      job: '供銷社の職員', spouse: '陳志強（1940–2018）',
      summary: '人懐っこい劉慧珍は長く供銷社に勤め、近所付き合いも広かった。親族の往来を大切にし、年節にはいつも家宴を開いて親戚を一つの席に集めた。多くの子孫にとって「帰郷」の記憶は、彼女の料理や笑い声、そして気遣いに結びついている。',
      impact: '家族の絆を温かく保ち続け、親族往来の重要な結び目だった。',
      timeline: [
        '1943年4月、生まれる。',
        '1962年、陳志強と結婚する。',
        '1968年、陳立軍を産む。',
        '1990年代、家族の年節の集まりを続けて開催する。',
        '2020年8月、逝去する。'
      ],
      records: { images: '13枚', audio: '1本', stories: '5編', values: '2項目' }
    },
    ko: {
      name: '류후이전', relation: '큰어머니',
      born: '1943년 4월 27일', origin: '저장성 사오싱',
      job: '공급판매사 직원', spouse: '천즈창(1940–2018)',
      summary: '붙임성 좋은 류후이전은 오래도록 공급판매사에서 일하며 동네 사람들을 잘 알았다. 친족 간의 왕래를 잘 유지하여 명절마다 항상 가족 연회를 열어 사방의 친척을 한자리에 모았다. 많은 후손들에게 "귀향"의 기억은 그녀의 음식, 웃음소리, 당부와 연결되어 있다.',
      impact: '가족 관계를 항상 따뜻하게 유지했으며 친족 왕래의 중요한 매개였다.',
      timeline: [
        '1943년 4월, 태어남.',
        '1962년, 천즈창과 결혼.',
        '1968년, 천리쥔을 낳음.',
        '1990년대, 가족 명절 모임을 꾸준히 주최.',
        '2020년 8월, 별세.'
      ],
      records: { images: '13장', audio: '1개', stories: '5편', values: '2개' }
    }
  },
  chen_lixin: {
    en: {
      name: 'Chen Lixin', relation: 'Father',
      born: 'September 15, 1965', origin: 'Shaoxing, Zhejiang',
      job: 'Engineering management professional', spouse: 'Lin Yaqin (1966–)',
      summary: 'Chen Lixin grew up in a family that valued education and rules, and worked in engineering management as an adult, steady and responsible. After starting a family, he re-sorted his parents\' old photos, letters and objects, hoping his children would not only know "where they come from" but also understand the family\'s persistence and hardships.',
      impact: 'He linked generations, turning his parents\' family spirit into a sense of responsibility taught to his children.',
      timeline: [
        'September 1965 — born in Shaoxing.',
        '1988 — married Lin Yaqin.',
        '1990 — eldest son Chen Yihang was born.',
        '1993 — eldest daughter Chen Sihan was born.',
        '1998 — youngest son Chen Mingyuan was born.',
        'From 2018 — began organizing family images and elders\' oral accounts.'
      ],
      records: { images: '22 photos', audio: '5 clips', stories: '8 stories', values: '5 items' }
    },
    ja: {
      name: 'チェン・リーシン', relation: '父',
      born: '1965年9月15日', origin: '浙江・紹興',
      job: '工程管理の従事者', spouse: '林雅琴（1966–）',
      summary: '教育と規律を重んじる家庭で育った陳立新は、成人して工程管理に携わり、落ち着いて責任感が強い。家庭を持ってからは父祖の古い写真、手紙、品物を改めて分類・保存し、子供たちが「自分の来たところ」を知るだけでなく、家族の歩みと苦労も理解してほしいと願った。',
      impact: '上と下をつなぎ、父祖の家風を子供への責任教育へと変えた。',
      timeline: [
        '1965年9月、紹興に生まれる。',
        '1988年、林雅琴と結婚する。',
        '1990年、長男・陳一航が生まれる。',
        '1993年、長女・陳思涵が生まれる。',
        '1998年、末子・陳明遠が生まれる。',
        '2018年より、家族の影像と年長者の口述整理を始める。'
      ],
      records: { images: '22枚', audio: '5本', stories: '8編', values: '5項目' }
    },
    ko: {
      name: '천리신', relation: '아버지',
      born: '1965년 9월 15일', origin: '저장성 사오싱',
      job: '공정 관리 종사자', spouse: '린야친(1966–)',
      summary: '교육과 규율을 중시하는 가정에서 자란 천리신은 성인이 되어 공정 관리를 맡았고, 성실하고 책임감이 강했다. 가정을 이룬 뒤 아버지 세대의 옛 사진, 편지, 물건을 다시 분류·보존하며, 아이들이 "자신이 온 곳"을 알 뿐 아니라 가족의 끈기와 어려움도 이해하기를 바랐다.',
      impact: '위와 아래를 잇고, 부모 세대의 가풍을 자녀에 대한 책임 교육으로 바꾸었다.',
      timeline: [
        '1965년 9월, 사오싱에서 태어남.',
        '1988년, 린야친과 결혼.',
        '1990년, 장남 천이항 출생.',
        '1993년, 장녀 천쓰한 출생.',
        '1998년, 막내 천밍위안 출생.',
        '2018년부터, 가족 영상과 웃어른 구술 정리를 시작.'
      ],
      records: { images: '22장', audio: '5개', stories: '8편', values: '5개' }
    }
  },
  lin_yaqin: {
    en: {
      name: 'Lin Yaqin', relation: 'Mother',
      born: 'December 1, 1966', origin: 'Hangzhou, Zhejiang',
      job: 'Middle school Chinese language teacher', spouse: 'Chen Lixin (1965–)',
      summary: 'Lin Yaqin taught Chinese for a long time and was good at turning daily life into written records. She was the first in the family to realize that "voices, photos and stories need to be systematically preserved," and interviewed elders many times, organizing scattered family memories into articles.',
      impact: 'She turned family memory from scattered accounts into readable, preservable text passable to children.',
      timeline: [
        'December 1966 — born in Hangzhou.',
        '1988 — married Chen Lixin.',
        '1990 to 1998 — raised three children.',
        '2015 — began organizing family letters and photos.',
        '2022 — promoted the creation of a family digital archive.'
      ],
      records: { images: '20 photos', audio: '6 clips', stories: '12 stories', values: '5 items' }
    },
    ja: {
      name: 'リン・ヤーチン', relation: '母',
      born: '1966年12月1日', origin: '浙江・杭州',
      job: '中学の国語教師', spouse: '陳立新（1965–）',
      summary: '林雅琴は長く国語教育に携わり、日常を文字の記録に変えるのが得意だった。家の中で最初に「声・写真・物語は体系的に保存されるべきだ」と気づいた人であり、何度も年長者に取材し、親族の口に散らばる家族の記憶を文章にまとめた。',
      impact: '家族の記憶を、散らばった語りから読める・保存できる・子供に伝えられる文章へと変えた。',
      timeline: [
        '1966年12月、杭州に生まれる。',
        '1988年、陳立新と結婚する。',
        '1990年から1998年、三児を育てる。',
        '2015年、家書と家庭写真の整理を始める。',
        '2022年、家族デジタルアーカイブの構築を推進する。'
      ],
      records: { images: '20枚', audio: '6本', stories: '12編', values: '5項目' }
    },
    ko: {
      name: '린야친', relation: '어머니',
      born: '1966년 12월 1일', origin: '저장성 항저우',
      job: '중학교 국어 교사', spouse: '천리신(1965–)',
      summary: '린야친은 오랫동안 국어를 가르치며 일상을 글로 기록하는 데 능했다. 집안에서 처음으로 "목소리, 사진, 이야기는 체계적으로 보존되어야 한다"는 점을 깨달은 사람으로, 여러 차례 웃어른을 인터뷰하여 친척들의 입에 흩어져 있던 가족 이야기를 글로 정리했다.',
      impact: '가족 기억을 흩어진 이야기에서 읽고 보존하며 아이들에게 전할 수 있는 글로 바꾸었다.',
      timeline: [
        '1966년 12월, 항저우에서 태어남.',
        '1988년, 천리신과 결혼.',
        '1990년부터 1998년까지 세 자녀를 키움.',
        '2015년, 가족 편지와 가족 사진 정리를 시작.',
        '2022년, 가족 디지털 아카이브 구축을 추진.'
      ],
      records: { images: '20장', audio: '6개', stories: '12편', values: '5개' }
    }
  },
  chen_lijun: {
    en: {
      name: 'Chen Lijun', relation: 'Uncle',
      born: 'May 22, 1968', origin: 'Shaoxing, Zhejiang',
      job: 'Trade and commerce professional', spouse: 'Not recorded',
      summary: 'Chen Lijun moved around with his parents in his youth and entered the trade industry as an adult. Often away, he kept many family photos from different cities and became an important contact connecting different branches of the family. Accustomed to documenting gatherings with images, he is one of the most active recorders in the family album.',
      impact: 'He kept different branches of the family connected and left many images of the times for later generations.',
      timeline: [
        'May 1968 — born.',
        '1987 — left home to study and work in other cities.',
        'After 1998 — developed long-term in Shanghai.',
        'From 2005 — kept shooting and preserving family gathering images.'
      ],
      records: { images: '28 photos', audio: '2 clips', stories: '5 stories', values: '2 items' }
    },
    ja: {
      name: 'チェン・リージュン', relation: '叔父',
      born: '1968年5月22日', origin: '浙江・紹興',
      job: '商貿の従事者', spouse: '未記録',
      summary: '陳立軍は少年時代に両親と各地を転々とし、成人して商貿業界に入った。長く外地にいたため、様々な都市の家庭写真を多く保存し、家族の異なる分家をつなぐ重要な連絡役となった。影像で集まりを記録する習慣があり、家族アルバムで最も活発な記録者の一人である。',
      impact: '家族の異なる分家のつながりを保ち、後世に多くの時代の影像を残した。',
      timeline: [
        '1968年5月、生まれる。',
        '1987年、故郷を離れ学び、各地で働く。',
        '1998年以降、上海で長く活動する。',
        '2005年より、家族の集まりの影像を撮影・保存し続ける。'
      ],
      records: { images: '28枚', audio: '2本', stories: '5編', values: '2項目' }
    },
    ko: {
      name: '천리쥔', relation: '작은아버지',
      born: '1968년 5월 22일', origin: '저장성 사오싱',
      job: '상업·무역 종사자', spouse: '기록 없음',
      summary: '천리쥔은 어린 시절 부모를 따라 여러 곳을 돌아다녔고, 성인이 되어 상업·무역 업계에 들어갔다. 오래도록 외지에 있었기 때문에 여러 도시의 가족 사진을 많이 보관했고, 가족의 여러 갈래를 잇는 중요한 연락책이 되었다. 영상으로 모임을 기록하는 습관이 있어 가족 앨범에서 가장 활발한 기록자 중 한 명이다.',
      impact: '가족의 여러 갈래가 서로 연결되도록 했고, 후손에게 시대의 많은 영상을 남겼다.',
      timeline: [
        '1968년 5월, 태어남.',
        '1987년, 고향을 떠나 학업을 위해 외지에서 일함.',
        '1998년 이후, 상하이에서 오랫동안 활동.',
        '2005년부터, 가족 모임 영상을 꾸준히 촬영·보존.'
      ],
      records: { images: '28장', audio: '2개', stories: '5편', values: '2개' }
    }
  },
  chen_yihang: {
    en: {
      name: 'Chen Yihang', relation: 'Eldest son',
      born: 'August 11, 1990', origin: 'Hangzhou, Zhejiang',
      job: 'Digital product manager', spouse: 'Not recorded',
      summary: 'Chen Yihang grew up in the internet era and is good at digitizing family materials. He scans and restores old photos, creates file catalogs, and archives elders\' oral accounts by person, time and event. He hopes family memory will no longer live only in cardboard boxes but become a digital archive everyone can view.',
      impact: 'He turned traditional family history into searchable, presentable, long-term digital materials.',
      timeline: [
        'August 1990 — born in Hangzhou.',
        '2012 — entered the digital product industry after graduation.',
        '2021 — began systematically scanning old family photos.',
        '2024 — helped build the family digital memory library.'
      ],
      records: { images: '30 photos', audio: '4 clips', stories: '3 stories', values: '1 item' }
    },
    ja: {
      name: 'チェン・イーハン', relation: '長男',
      born: '1990年8月11日', origin: '浙江・杭州',
      job: 'デジタルプロダクトマネージャー', spouse: '未記録',
      summary: '陳一航はインターネット時代に育ち、家庭資料のデジタル化が得意だ。古い写真のスキャン修復やファイル目録の作成を担当し、年長者の口述を人・時間・出来事ごとに整理する。家族の記憶が段ボールの中だけに眠るのではなく、誰でも見られるデジタルアーカイブになることを願っている。',
      impact: '伝統的な家史を、検索・展示・長期保存が可能なデジタル資料へと変えた。',
      timeline: [
        '1990年8月、杭州に生まれる。',
        '2012年、大学卒業後デジタルプロダクト業界に入る。',
        '2021年、家族の古い写真の系統的なスキャンを始める。',
        '2024年、家族デジタル記憶庫の構築に参加する。'
      ],
      records: { images: '30枚', audio: '4本', stories: '3編', values: '1項目' }
    },
    ko: {
      name: '천이항', relation: '장남',
      born: '1990년 8월 11일', origin: '저장성 항저우',
      job: '디지털 제품 매니저', spouse: '기록 없음',
      summary: '천이항은 인터넷 시대에 자라 가족 자료의 디지털화에 능하다. 옛 사진을 스캔·복원하고 파일 목록을 만들며, 웃어른의 구술을 인물·시간·사건별로 정리한다. 가족의 기억이 골판지 상자 속에만 남아 있지 않고 누구나 볼 수 있는 디지털 아카이브가 되기를 바란다.',
      impact: '전통적인 가족사를 검색·전시·장기 보존 가능한 디지털 자료로 바꾸었다.',
      timeline: [
        '1990년 8월, 항저우에서 태어남.',
        '2012년, 대학 졸업 후 디지털 제품 업계에 입문.',
        '2021년, 가족 옛 사진 스캔을 체계적으로 시작.',
        '2024년, 가족 디지털 기억 저장소 구축에 참여.'
      ],
      records: { images: '30장', audio: '4개', stories: '3편', values: '1개' }
    }
  },
  chen_sihan: {
    en: {
      name: 'Chen Sihan', relation: 'Eldest daughter',
      born: 'October 6, 1993', origin: 'Hangzhou, Zhejiang',
      job: 'Visual content planner', spouse: 'Not recorded',
      summary: 'Chen Sihan loved browsing old photo albums as a child and now works in visual content planning as an adult. Skilled at combining photos, music and words into emotional short films, she often makes birthday videos for elders. She makes family stories not only preserved but also willing to be watched and shared by the younger generation.',
      impact: 'She uses visual expression to make family memory easier to understand and share.',
      timeline: [
        'October 1993 — born.',
        '2016 — began working in visual content.',
        '2020 — made the first family memorial short film for elders.',
        '2024 — helped organize family short drama material.'
      ],
      records: { images: '25 photos', audio: '5 clips', stories: '6 stories', values: '2 items' }
    },
    ja: {
      name: 'チェン・スーハン', relation: '長女',
      born: '1993年10月6日', origin: '浙江・杭州',
      job: '映像コンテンツ企画', spouse: '未記録',
      summary: '陳思涵は幼い頃から古いアルバムを眺めるのが好きで、成人して映像コンテンツ企画に携わる。写真・音楽・言葉を感情あふれる短編に組み合わせるのが得意で、年長者のために誕生日の記念動画を作ることも多い。家族の物語を保存するだけでなく、若い世代が観たくなる・共有したくなるものにしている。',
      impact: '影像表現によって家族の記憶をより理解・共有しやすくした。',
      timeline: [
        '1993年10月、生まれる。',
        '2016年、映像コンテンツの仕事を始める。',
        '2020年、祖父母のために初めての家族記念短編を制作する。',
        '2024年、家族のミニドラマ素材の整理に参加する。'
      ],
      records: { images: '25枚', audio: '5本', stories: '6編', values: '2項目' }
    },
    ko: {
      name: '천쓰한', relation: '장녀',
      born: '1993년 10월 6일', origin: '저장성 항저우',
      job: '영상 콘텐츠 기획자', spouse: '기록 없음',
      summary: '천쓰한은 어릴 때부터 옛 앨범을 뒤적이는 것을 좋아했고, 성인이 되어 영상 콘텐츠 기획에 종사한다. 사진, 음악, 글을 감성적인 단편 영상으로 엮는 데 능하며, 웃어른의 생일 기념 영상을 자주 만든다. 가족 이야기를 보존할 뿐 아니라 젊은 세대가 보고 싶어 하고 공유하고 싶어 하는 것으로 만든다.',
      impact: '영상 표현으로 가족 기억을 더 이해하고 공유하기 쉽게 만들었다.',
      timeline: [
        '1993년 10월, 태어남.',
        '2016년, 영상 콘텐츠 업무를 시작.',
        '2020년, 조부모를 위한 첫 가족 기념 단편 영상을 제작.',
        '2024년, 가족 숏드라마 소재 정리에 참여.'
      ],
      records: { images: '25장', audio: '5개', stories: '6편', values: '2개' }
    }
  },
  chen_mingyuan: {
    en: {
      name: 'Chen Mingyuan', relation: 'Youngest son',
      born: 'January 18, 1998', origin: 'Hangzhou, Zhejiang',
      job: 'AI application designer', spouse: 'Not recorded',
      summary: 'Chen Mingyuan is the youngest generation in the family and the one most familiar with AI tools. He is responsible for trying digital humans, voice reconstruction, interactive pages and smart frame displays, hoping that the images and voices left by elders are not just materials but a visible, audible and interactive companion for later generations.',
      impact: 'He brought AI into family memory preservation, moving inheritance from static records toward interactive companionship.',
      timeline: [
        'January 1998 — born.',
        '2020 — entered the AI application and design field.',
        '2023 — tried organizing family voices and images.',
        '2024 — helped organize the life biography demo archive.'
      ],
      records: { images: '18 photos', audio: '3 clips', stories: '4 stories', values: '2 items' }
    },
    ja: {
      name: 'チェン・ミンユエン', relation: '末っ子',
      born: '1998年1月18日', origin: '浙江・杭州',
      job: 'AIアプリケーションデザイナー', spouse: '未記録',
      summary: '陳明遠は家で最も若い世代で、AIツールに最も詳しい。デジタルヒューマン、音声復元、インタラクティブページ、スマートフォトフレーム展示を試す役割を担い、年長者が残した影像や声を単なる資料ではなく、後世がいつでも見られ・聞かれ・対話できる伴侶にしたいと願う。',
      impact: '家族記憶の保存にAIを取り入れ、伝承を静的な記録から対話的な陪伴へと発展させた。',
      timeline: [
        '1998年1月、生まれる。',
        '2020年、AI応用とデザインの分野に入る。',
        '2023年、家族の声と影像の整理を試みる。',
        '2024年、人生伝記の人物アーカイブ例の整理に参加する。'
      ],
      records: { images: '18枚', audio: '3本', stories: '4編', values: '2項目' }
    },
    ko: {
      name: '천밍위안', relation: '막내아들',
      born: '1998년 1월 18일', origin: '저장성 항저우',
      job: 'AI 애플리케이션 디자이너', spouse: '기록 없음',
      summary: '천밍위안은 집안에서 가장 어린 세대이자 AI 도구에 가장 익숙한 세대다. 디지털 휴먼, 음성 복원, 인터랙티브 페이지, 스마트 액자 전시를 시도하는 역할을 맡아, 웃어른이 남긴 영상과 목소리가 단순한 자료가 아니라 후손이 언제든 보고 듣고 대화할 수 있는 동반자가 되기를 바란다.',
      impact: '가족 기억 보존에 AI를 도입하여, 전승을 정적인 기록에서 인터랙티브한 동반으로 발전시켰다.',
      timeline: [
        '1998년 1월, 태어남.',
        '2020년, AI 응용·디자인 분야에 입문.',
        '2023년, 가족의 목소리와 영상 정리를 시도.',
        '2024년, 인생 전기 인물 아카이브 예시 정리에 참여.'
      ],
      records: { images: '18장', audio: '3개', stories: '4편', values: '2개' }
    }
  }
};
