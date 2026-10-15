(() => {
  const copy = {
    en: { name:'Living Legacy', lead:'Preserve a life in their own words.', create:'Create Living Legacy', demo:'Fictional demonstration archive', transcript:'Verified transcript', title:'We move through life together, and that’s what lasts.', school:'School Portrait', letter:'Letter to Harold', summer:'Summer in Maine', voice:'Voice Recording', source:'Harris Family Archive', trust:'Trust protocol', consent:'Explicit consent', review:'Family review', access:'Access control', ai:'AI clearly identified', map:'Relationship Map', mapDesc:'Connections shape our stories. Explore the relationships that shaped this life.', partner:'Partner', sister:'Sister', son:'Son', granddaughter:'Granddaughter', role:'Archive subject', note:'Fictional archive note: a family-confirmed source connection.', edward:'Edward Harris', harold:'Harold Harris', margaret:'Margaret Harris', david:'David Harris', emily:'Emily Harris', edwardBio:'A lifelong maker, sailor and careful listener whose records are organized here as a fictional demonstration.', haroldBio:'Edward’s partner. His notes and shared photographs add context to the everyday years.', margaretBio:'Edward’s sister. She preserved letters and remembered the stories behind the family photographs.', davidBio:'Edward’s son. He contributed a travel photograph and a short recollection from the coast.', emilyBio:'Edward’s granddaughter. Her family memories connect earlier records to a younger generation.', close:'Close profile', selected:'Selected archive item' },
    zh: { name:'人生传记', lead:'以本人认可的声音，留下一生的故事。', create:'创建人生传记', demo:'虚构演示档案', transcript:'已确认的原话', title:'我们共同走过人生，而这正是留下来的东西。', school:'学校肖像', letter:'写给 Harold 的信', summer:'缅因州的夏天', voice:'声音记录', source:'Harris 家庭档案', trust:'信任协议', consent:'明确授权', review:'家人复核', access:'访问控制', ai:'明确标识 AI', map:'关系图谱', mapDesc:'关系塑造故事。探索共同塑造这段人生的连接。', partner:'伴侣', sister:'姐妹', son:'儿子', granddaughter:'孙女', role:'档案主体', note:'虚构档案说明：这是一条由家人确认的来源连接。', edward:'Edward Harris', harold:'Harold Harris', margaret:'Margaret Harris', david:'David Harris', emily:'Emily Harris', edwardBio:'一位长期从事手作、热爱航海并善于倾听的人；此处以虚构档案整理其记录。', haroldBio:'Edward 的伴侣。他的笔记与共同照片为日常岁月补充了上下文。', margaretBio:'Edward 的姐妹。她保存了书信，也记得家庭照片背后的故事。', davidBio:'Edward 的儿子。他提供了旅行照片与一段海岸回忆。', emilyBio:'Edward 的孙女。她的家庭记忆让早年记录连接到年轻一代。', close:'关闭人物资料', selected:'已选择的档案项目' },
    ja: { name:'ライビング・レガシー', lead:'本人の言葉で人生を残す。', create:'ライビング・レガシーを作成', demo:'架空のデモアーカイブ', transcript:'確認済みの記録', title:'私たちは人生をともに歩み、その時間が残ります。', school:'学生時代の肖像', letter:'Harold 宛の手紙', summer:'メイン州の夏', voice:'音声記録', source:'Harris 家族アーカイブ', trust:'信頼のプロトコル', consent:'明確な同意', review:'家族による確認', access:'アクセス管理', ai:'AI を明確に表示', map:'関係マップ', mapDesc:'つながりが物語を形づくります。この人生を形づくった関係をたどります。', partner:'パートナー', sister:'姉妹', son:'息子', granddaughter:'孫娘', role:'関係', note:'架空のアーカイブ注記：家族確認済みの情報接続です。', edward:'Edward Harris', harold:'Harold Harris', margaret:'Margaret Harris', david:'David Harris', emily:'Emily Harris', edwardBio:'生涯にわたりものづくりと航海を愛し、人の話に耳を傾けた人物という架空の記録です。', haroldBio:'Edward のパートナー。日々の年月に、メモと共有写真が文脈を添えます。', margaretBio:'Edward の姉妹。手紙を守り、家族写真の背景にある物語を覚えていました。', davidBio:'Edward の息子。海辺の写真と短い思い出を提供しました。', emilyBio:'Edward の孫娘。家族の記憶が、早い記録を若い世代へつなぎます。', close:'プロフィールを閉じる', selected:'選択中のアーカイブ項目' },
    ko: { name:'리빙 레거시', lead:'본인이 인정한 목소리로 한 생의 이야기를 남깁니다.', create:'리빙 레거시 만들기', demo:'가상 데모 아카이브', transcript:'검증된 기록', title:'우리는 함께 삶을 지나가고, 그것이 남습니다.', school:'학창 시절 초상', letter:'Harold에게 보낸 편지', summer:'메인주의 여름', voice:'음성 기록', source:'Harris 가족 아카이브', trust:'신뢰 프로토콜', consent:'명시적 동의', review:'가족 검토', access:'접근 제어', ai:'AI 명확히 표시', map:'관계 지도', mapDesc:'관계가 우리의 이야기를 만듭니다. 이 삶을 만든 연결을 살펴보세요.', partner:'파트너', sister:'자매', son:'아들', granddaughter:'손녀', role:'관계', note:'가상 아카이브 안내: 가족이 확인한 출처 연결입니다.', edward:'Edward Harris', harold:'Harold Harris', margaret:'Margaret Harris', david:'David Harris', emily:'Emily Harris', edwardBio:'평생 만들기를 즐기고 항해를 사랑하며 귀 기울였던 인물의 가상 기록입니다.', haroldBio:'Edward의 파트너. 메모와 함께 찍은 사진이 일상의 시간을 보완합니다.', margaretBio:'Edward의 자매. 편지를 보관하고 가족사진 속 이야기를 기억했습니다.', davidBio:'Edward의 아들. 해안 여행 사진과 짧은 회상을 제공했습니다.', emilyBio:'Edward의 손녀. 가족의 기억으로 이전 기록을 젊은 세대와 연결합니다.', close:'프로필 닫기', selected:'선택한 아카이브 항목' },
    fr: { name:'Living Legacy', lead:'Préserver une vie dans ses propres mots.', create:'Créer Living Legacy', demo:'Archive de démonstration fictive', transcript:'Transcription vérifiée', title:'Nous traversons la vie ensemble, et c’est ce qui demeure.', school:'Portrait d’école', letter:'Lettre à Harold', summer:'Un été dans le Maine', voice:'Enregistrement vocal', source:'Archives de la famille Harris', trust:'Protocole de confiance', consent:'Consentement explicite', review:'Validation familiale', access:'Contrôle d’accès', ai:'IA clairement identifiée', map:'Carte des relations', mapDesc:'Les liens façonnent nos histoires. Explorez ceux qui ont façonné cette vie.', partner:'Partenaire', sister:'Sœur', son:'Fils', granddaughter:'Petite-fille', role:'Relation', note:'Note d’archive fictive : un lien de source confirmé par la famille.', edward:'Edward Harris', harold:'Harold Harris', margaret:'Margaret Harris', david:'David Harris', emily:'Emily Harris', edwardBio:'Une archive fictive d’un artisan, marin et auditeur attentif tout au long de sa vie.', haroldBio:'Le partenaire d’Edward. Ses notes et photos partagées éclairent les années quotidiennes.', margaretBio:'La sœur d’Edward. Elle a conservé les lettres et les histoires derrière les photos.', davidBio:'Le fils d’Edward. Il a apporté une photo de voyage et un souvenir de la côte.', emilyBio:'La petite-fille d’Edward. Ses souvenirs relient les archives anciennes à une génération plus jeune.', close:'Fermer le profil', selected:'Élément d’archive sélectionné' },
    de: { name:'Living Legacy', lead:'Ein Leben in den eigenen Worten bewahren.', create:'Living Legacy erstellen', demo:'Fiktives Demoarchiv', transcript:'Verifiziertes Transkript', title:'Wir gehen gemeinsam durchs Leben – und das bleibt.', school:'Schulporträt', letter:'Brief an Harold', summer:'Sommer in Maine', voice:'Sprachaufnahme', source:'Harris-Familienarchiv', trust:'Vertrauensprotokoll', consent:'Ausdrückliche Einwilligung', review:'Familienprüfung', access:'Zugriffskontrolle', ai:'KI klar gekennzeichnet', map:'Beziehungsnetz', mapDesc:'Verbindungen prägen unsere Geschichten. Entdecken Sie die Beziehungen, die dieses Leben prägten.', partner:'Partner', sister:'Schwester', son:'Sohn', granddaughter:'Enkelin', role:'Beziehung', note:'Fiktiver Archivhinweis: eine von der Familie bestätigte Quellenverbindung.', edward:'Edward Harris', harold:'Harold Harris', margaret:'Margaret Harris', david:'David Harris', emily:'Emily Harris', edwardBio:'Fiktives Archiv eines lebenslangen Machers, Seglers und aufmerksamen Zuhörers.', haroldBio:'Edwards Partner. Seine Notizen und gemeinsamen Fotos geben den Alltagsjahren Kontext.', margaretBio:'Edwards Schwester. Sie bewahrte Briefe und die Geschichten hinter Familienfotos.', davidBio:'Edwards Sohn. Er steuerte ein Reisefoto und eine Küstenerinnerung bei.', emilyBio:'Edwards Enkelin. Ihre Erinnerungen verbinden frühe Aufzeichnungen mit einer jüngeren Generation.', close:'Profil schließen', selected:'Ausgewählter Archiveintrag' },
    es: { name:'Living Legacy', lead:'Preservar una vida con sus propias palabras.', create:'Crear Living Legacy', demo:'Archivo de demostración ficticio', transcript:'Transcripción verificada', title:'Recorremos la vida juntos, y eso es lo que perdura.', school:'Retrato escolar', letter:'Carta a Harold', summer:'Verano en Maine', voice:'Grabación de voz', source:'Archivo de la familia Harris', trust:'Protocolo de confianza', consent:'Consentimiento explícito', review:'Revisión familiar', access:'Control de acceso', ai:'IA claramente identificada', map:'Mapa de relaciones', mapDesc:'Los vínculos dan forma a nuestras historias. Explore las relaciones que formaron esta vida.', partner:'Pareja', sister:'Hermana', son:'Hijo', granddaughter:'Nieta', role:'Relación', note:'Nota de archivo ficticio: una conexión de fuente confirmada por la familia.', edward:'Edward Harris', harold:'Harold Harris', margaret:'Margaret Harris', david:'David Harris', emily:'Emily Harris', edwardBio:'Archivo ficticio de un creador, navegante y oyente atento durante toda su vida.', haroldBio:'La pareja de Edward. Sus notas y fotografías compartidas dan contexto a los años cotidianos.', margaretBio:'La hermana de Edward. Conservó cartas y las historias tras las fotos familiares.', davidBio:'El hijo de Edward. Aportó una foto de viaje y un recuerdo de la costa.', emilyBio:'La nieta de Edward. Sus memorias conectan los primeros registros con una generación más joven.', close:'Cerrar perfil', selected:'Elemento de archivo seleccionado' },
    pt: { name:'Living Legacy', lead:'Preservar uma vida nas próprias palavras.', create:'Criar Living Legacy', demo:'Arquivo de demonstração fictício', transcript:'Transcrição verificada', title:'Caminhamos juntos pela vida, e é isso que permanece.', school:'Retrato escolar', letter:'Carta para Harold', summer:'Verão no Maine', voice:'Gravação de voz', source:'Arquivo da família Harris', trust:'Protocolo de confiança', consent:'Consentimento explícito', review:'Revisão familiar', access:'Controle de acesso', ai:'IA claramente identificada', map:'Mapa de relações', mapDesc:'As conexões moldam nossas histórias. Explore as relações que moldaram esta vida.', partner:'Parceiro', sister:'Irmã', son:'Filho', granddaughter:'Neta', role:'Relação', note:'Nota de arquivo fictício: uma conexão de fonte confirmada pela família.', edward:'Edward Harris', harold:'Harold Harris', margaret:'Margaret Harris', david:'David Harris', emily:'Emily Harris', edwardBio:'Arquivo fictício de um criador, velejador e ouvinte atento por toda a vida.', haroldBio:'Parceiro de Edward. Suas anotações e fotos compartilhadas dão contexto aos anos cotidianos.', margaretBio:'Irmã de Edward. Ela guardou cartas e as histórias por trás das fotos de família.', davidBio:'Filho de Edward. Contribuiu com uma foto de viagem e uma lembrança da costa.', emilyBio:'Neta de Edward. Suas memórias conectam os registros iniciais a uma geração mais jovem.', close:'Fechar perfil', selected:'Item de arquivo selecionado' },
    ru: { name:'Living Legacy', lead:'Сохранить жизнь в собственных словах человека.', create:'Создать Living Legacy', demo:'Вымышленный демонстрационный архив', transcript:'Подтверждённая расшифровка', title:'Мы проходим жизнь вместе — и это остаётся.', school:'Школьный портрет', letter:'Письмо Гарольду', summer:'Лето в Мэне', voice:'Голосовая запись', source:'Семейный архив Харрисов', trust:'Протокол доверия', consent:'Явное согласие', review:'Проверка семьёй', access:'Контроль доступа', ai:'ИИ ясно обозначен', map:'Карта отношений', mapDesc:'Связи формируют наши истории. Изучите отношения, которые сформировали эту жизнь.', partner:'Партнёр', sister:'Сестра', son:'Сын', granddaughter:'Внучка', role:'Связь', note:'Примечание к вымышленному архиву: связь с источником подтверждена семьёй.', edward:'Edward Harris', harold:'Harold Harris', margaret:'Margaret Harris', david:'David Harris', emily:'Emily Harris', edwardBio:'Вымышленный архив человека, который всю жизнь создавал, ходил под парусом и умел слушать.', haroldBio:'Партнёр Эдварда. Его заметки и общие фотографии дают контекст повседневным годам.', margaretBio:'Сестра Эдварда. Она сохранила письма и истории за семейными фотографиями.', davidBio:'Сын Эдварда. Он добавил дорожную фотографию и воспоминание о побережье.', emilyBio:'Внучка Эдварда. Её воспоминания соединяют ранние записи с молодым поколением.', close:'Закрыть профиль', selected:'Выбранный архивный объект' },
    ar: { name:'إرث حي', lead:'حفظ حياة بكلمات صاحبها.', create:'إنشاء إرث حي', demo:'أرشيف تجريبي خيالي', transcript:'نص موثّق', title:'نحن نعبر الحياة معًا، وهذا ما يبقى.', school:'صورة مدرسية', letter:'رسالة إلى هارولد', summer:'صيف في مين', voice:'تسجيل صوتي', source:'أرشيف عائلة هاريس', trust:'بروتوكول الثقة', consent:'موافقة صريحة', review:'مراجعة العائلة', access:'التحكم في الوصول', ai:'تمييز واضح للذكاء الاصطناعي', map:'خريطة العلاقات', mapDesc:'العلاقات تشكّل قصصنا. استكشف الروابط التي شكّلت هذه الحياة.', partner:'شريك', sister:'أخت', son:'ابن', granddaughter:'حفيدة', role:'العلاقة', note:'ملاحظة أرشيف خيالي: صلة مصدر أكّدتها العائلة.', edward:'Edward Harris', harold:'Harold Harris', margaret:'Margaret Harris', david:'David Harris', emily:'Emily Harris', edwardBio:'أرشيف خيالي لشخص أحبّ الصنع والإبحار والإصغاء طوال حياته.', haroldBio:'شريك إدوارد. تضيف ملاحظاته وصورهما المشتركة سياقًا للسنوات اليومية.', margaretBio:'أخت إدوارد. حفظت الرسائل وتذكرت القصص خلف صور العائلة.', davidBio:'ابن إدوارد. ساهم بصورة سفر وذكرى قصيرة من الساحل.', emilyBio:'حفيدة إدوارد. تصل ذكرياتها السجلات المبكرة بجيل أصغر.', close:'إغلاق الملف الشخصي', selected:'عنصر الأرشيف المحدد' }
  };

  Object.assign(copy.en, { letter:'Letter to Helen', harold:'Helen Harris', haroldBio:'Helen is Edward’s partner. Her notes and shared photographs add context to the everyday years.' });
  Object.assign(copy.zh, { letter:'写给 Helen 的信', harold:'Helen Harris', haroldBio:'Edward 的伴侣。她的笔记与共同照片为日常岁月补充了上下文。' });
  Object.assign(copy.ja, { letter:'Helen 宛の手紙', harold:'Helen Harris', haroldBio:'Edward のパートナー。彼女のメモと共有写真が、日々の年月に文脈を添えます。' });
  Object.assign(copy.ko, { letter:'Helen에게 보낸 편지', harold:'Helen Harris', haroldBio:'Edward의 파트너. 그녀의 메모와 함께 찍은 사진이 일상의 시간을 보완합니다.' });
  Object.assign(copy.fr, { letter:'Lettre à Helen', harold:'Helen Harris', haroldBio:'Helen est la partenaire d’Edward. Ses notes et photos partagées éclairent les années quotidiennes.' });
  Object.assign(copy.de, { letter:'Brief an Helen', harold:'Helen Harris', haroldBio:'Helen ist Edwards Partnerin. Ihre Notizen und gemeinsamen Fotos geben den Alltagsjahren Kontext.' });
  Object.assign(copy.es, { letter:'Carta a Helen', harold:'Helen Harris', haroldBio:'Helen es la pareja de Edward. Sus notas y fotografías compartidas dan contexto a los años cotidianos.' });
  Object.assign(copy.pt, { letter:'Carta para Helen', harold:'Helen Harris', haroldBio:'Helen é a parceira de Edward. Suas anotações e fotos compartilhadas dão contexto aos anos cotidianos.' });
  Object.assign(copy.ru, { letter:'Письмо Хелен', harold:'Helen Harris', haroldBio:'Хелен — партнёр Эдварда. Её заметки и общие фотографии дают контекст повседневным годам.' });
  Object.assign(copy.ar, { letter:'رسالة إلى هيلين', harold:'Helen Harris', haroldBio:'هيلين هي شريكة إدوارد. تضيف ملاحظاتها وصورهما المشتركة سياقًا للسنوات اليومية.' });

  const $ = (selector, context = document) => context.querySelector(selector);
  const $$ = (selector, context = document) => [...context.querySelectorAll(selector)];
  const dashboard = $('#legacy-dashboard');
  if (!dashboard) return;

  let currentLanguage = 'en';
  let opener = null;
  const dialog = $('#legacy-person-dialog');
  const eventNames = ['school', 'letter', 'summer', 'voice'];
  const personNames = ['edward', 'harold', 'margaret', 'david', 'emily'];

  const apply = (language) => {
    currentLanguage = copy[language] ? language : 'en';
    const text = copy[currentLanguage];
    dashboard.querySelectorAll('[data-dash]').forEach((node) => {
      const value = text[node.dataset.dash];
      if (value) node.textContent = value;
    });
    dashboard.querySelectorAll('[data-dash-event]').forEach((node) => {
      const key = eventNames[Number(node.dataset.dashEvent)];
      const title = node.querySelector('[data-dash-event-title]');
      const source = node.querySelector('[data-dash-event-source]');
      if (title) title.textContent = text[key];
      if (source) source.textContent = text.source;
    });
    dashboard.querySelectorAll('[data-dash-person]').forEach((node) => {
      const key = node.dataset.dashPerson;
      const name = node.querySelector('[data-dash-person-name]');
      const relation = node.querySelector('[data-dash-person-role]');
      if (name) name.textContent = text[key];
      if (relation) relation.textContent = text[node.dataset.dashRelation];
      node.setAttribute('aria-label', `${text[key]} — ${text[node.dataset.dashRelation]}`);
    });
    document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
    if (dialog?.open) populateDialog(dialog.dataset.person || 'edward');
  };

  const populateDialog = (person) => {
    const text = copy[currentLanguage];
    const trigger = $(`[data-dash-person="${person}"]`);
    if (!trigger || !dialog) return;
    dialog.dataset.person = person;
    $('[data-person-image]', dialog).src = trigger.dataset.personImage;
    $('[data-person-image]', dialog).alt = `${text[person]} — ${text[trigger.dataset.dashRelation]}`;
    $('[data-person-name]', dialog).textContent = text[person];
    $('[data-person-role]', dialog).textContent = text[trigger.dataset.dashRelation];
    $('[data-person-bio]', dialog).textContent = text[`${person}Bio`];
    $('[data-person-note]', dialog).textContent = text.note;
    $('[data-person-close]', dialog).setAttribute('aria-label', text.close);
  };

  const closeDialog = () => { if (dialog?.open) dialog.close(); opener?.focus(); };
  $$('[data-dash-event]', dashboard).forEach((button) => button.addEventListener('click', () => {
    $$('[data-dash-event]', dashboard).forEach((item) => { item.classList.remove('is-selected'); item.setAttribute('aria-pressed', 'false'); });
    button.classList.add('is-selected'); button.setAttribute('aria-pressed', 'true');
    $('[data-selected-label]', dashboard).textContent = `${copy[currentLanguage].selected}: ${button.querySelector('[data-dash-event-title]').textContent}`;
  }));

  $('[data-dashboard-play]', dashboard).addEventListener('click', (event) => {
    const button = event.currentTarget;
    const playing = button.classList.toggle('is-playing');
    button.setAttribute('aria-pressed', String(playing));
    button.innerHTML = playing ? '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 2h3v12H3zm7 0h3v12h-3z"/></svg>' : '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="m4 2 9 6-9 6z"/></svg>';
  });

  $$('[data-dash-person]', dashboard).forEach((button) => button.addEventListener('click', () => { opener = button; populateDialog(button.dataset.dashPerson); dialog.showModal(); }));
  $('[data-person-close]', dialog).addEventListener('click', closeDialog);
  dialog.addEventListener('click', (event) => { if (event.target === dialog) closeDialog(); });

  $$('[data-lang]').forEach((button) => button.addEventListener('click', () => window.setTimeout(() => apply(button.dataset.lang), 0)));
  let saved = 'en';
  try { saved = localStorage.getItem('preferredLegacyLanguage') || localStorage.getItem('preferredLanguage') || 'en'; } catch {}
  apply(saved === 'zh-CN' ? 'zh' : saved);
})();
