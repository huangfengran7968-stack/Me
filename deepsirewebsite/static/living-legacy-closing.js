(() => {
  const copy = {
    en: {
      kicker: 'Start from a story',
      title: 'Record one person, and organize the time a family walked through together.',
      cta: 'Contact DeepSire',
      tagline: 'Recording voices, stories and time walked through together',
      memory: 'Memory',
      organize: 'Organize',
      trust: 'Trust',
      dialogue: 'Dialogue',
      home: 'Back to home'
    },
    zh: {
      kicker: '从一段故事开始',
      title: '记录一个人，也整理一家人共同走过的时间。',
      cta: '联系 DeepSire',
      tagline: '记录声音、故事与共同走过的时间',
      memory: '记忆',
      organize: '整理',
      trust: '守护',
      dialogue: '对话',
      home: '返回首页'
    },
    ja: {
      kicker: 'ひとつの物語から始める',
      title: '一人を記録し、家族がともに歩んだ時間を整理する。',
      cta: 'DeepSireに連絡',
      tagline: '声と物語、ともに歩んだ時間を記録する',
      memory: '記憶',
      organize: '整理',
      trust: '守り',
      dialogue: '対話',
      home: 'ホームへ戻る'
    },
    ko: {
      kicker: '한 이야기에서 시작',
      title: '한 사람을 기록하고, 가족이 함께 걸어온 시간을 정리합니다.',
      cta: 'DeepSire에 문의',
      tagline: '목소리와 이야기, 함께 걸어온 시간을 기록합니다',
      memory: '기억',
      organize: '정리',
      trust: '수호',
      dialogue: '대화',
      home: '홈으로'
    },
    fr: {
      kicker: 'Commencer par une histoire',
      title: 'Enregistrer une personne, et ordonner le temps qu’une famille a traversé ensemble.',
      cta: 'Contacter DeepSire',
      tagline: 'Enregistrer des voix, des histoires et le temps parcouru ensemble',
      memory: 'Mémoire',
      organize: 'Organiser',
      trust: 'Confiance',
      dialogue: 'Dialogue',
      home: 'Retour à l’accueil'
    },
    de: {
      kicker: 'Mit einer Geschichte beginnen',
      title: 'Einen Menschen aufzeichnen und die Zeit ordnen, die eine Familie gemeinsam durchlaufen hat.',
      cta: 'DeepSire kontaktieren',
      tagline: 'Stimmen, Geschichten und gemeinsam gegangene Zeit festhalten',
      memory: 'Erinnerung',
      organize: 'Ordnen',
      trust: 'Vertrauen',
      dialogue: 'Dialog',
      home: 'Zur Startseite'
    },
    es: {
      kicker: 'Empezar por una historia',
      title: 'Registrar a una persona y ordenar el tiempo que una familia recorrió junta.',
      cta: 'Contactar con DeepSire',
      tagline: 'Registrar voces, historias y el tiempo caminado juntos',
      memory: 'Memoria',
      organize: 'Ordenar',
      trust: 'Confianza',
      dialogue: 'Diálogo',
      home: 'Volver al inicio'
    },
    pt: {
      kicker: 'Começar por uma história',
      title: 'Registrar uma pessoa e organizar o tempo que uma família atravessou junta.',
      cta: 'Contatar a DeepSire',
      tagline: 'Registrar vozes, histórias e o tempo caminhado juntos',
      memory: 'Memória',
      organize: 'Organizar',
      trust: 'Confiança',
      dialogue: 'Diálogo',
      home: 'Voltar ao início'
    },
    ru: {
      kicker: 'Начать с одной истории',
      title: 'Записать одного человека и упорядочить время, которое семья прошла вместе.',
      cta: 'Связаться с DeepSire',
      tagline: 'Записываем голоса, истории и время, пройденное вместе',
      memory: 'Память',
      organize: 'Порядок',
      trust: 'Доверие',
      dialogue: 'Диалог',
      home: 'На главную'
    },
    ar: {
      kicker: 'ابدأ من قصة واحدة',
      title: 'دوّن شخصًا واحدًا، ورتّب الزمن الذي عاشته عائلة معًا.',
      cta: 'تواصل مع DeepSire',
      tagline: 'نسجّل الأصوات والقصص والزمن الذي قطعناه معًا',
      memory: 'الذاكرة',
      organize: 'الترتيب',
      trust: 'الثقة',
      dialogue: 'الحوار',
      home: 'العودة للرئيسية'
    }
  };

  const apply = (language) => {
    const selected = copy[language] || copy.en;
    document.querySelectorAll('[data-closing]').forEach((node) => {
      const value = selected[node.dataset.closing];
      if (value) node.textContent = value;
    });
  };

  const savedLanguage = window.localStorage.getItem('preferredLegacyLanguage') || window.localStorage.getItem('preferredLanguage');
  const normalized = savedLanguage === 'zh-CN' ? 'zh' : savedLanguage;
  apply(copy[normalized] ? normalized : 'en');

  document.querySelectorAll('[data-lang]').forEach((button) => {
    button.addEventListener('click', () => {
      window.setTimeout(() => apply(button.dataset.lang), 0);
    });
  });
})();
