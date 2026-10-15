(()=>{"use strict";
// ===== 顶部导航滚动 / 汉堡菜单 =====
const header=document.querySelector('.biography-site-header');const updateHeader=()=>header?.classList.toggle('scrolled',scrollY>50);addEventListener('scroll',updateHeader,{passive:true});updateHeader();
const toggle=document.querySelector('.hamburger'),links=document.querySelector('.nav-menu');
const UI=(typeof BIO_UI_I18N!=='undefined')?BIO_UI_I18N:{},FI18N=(typeof FAMILY_I18N!=='undefined')?FAMILY_I18N:{};
const LANGS=['en','zh'];
const ZH_ARIA={'aria.nav':'主导航','aria.language':'选择语言','aria.chapters':'页面章节','aria.proof':'虚构档案来源示例','aria.sources':'档案素材类型','aria.archiveExample':'人生档案内容示例','aria.figure':'档案讲述人示意图','aria.prompts':'建议问题','aria.question':'关于虚构档案的问题','aria.footerChapters':'页脚章节','aria.top':'返回顶部','aria.closePerson':'关闭人物详情'};
let currentLang='en';

const uiLabel=key=>currentLang==='zh'?(key==='hamburger.close'?'关闭导航':'打开导航'):(UI[currentLang]?.[key]||'');
const setMenu=open=>{if(!links||!toggle)return;links.classList.toggle('active',open);toggle.classList.toggle('active',open);toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',uiLabel(open?'hamburger.close':'hamburger.open'))};
toggle?.addEventListener('click',()=>setMenu(!links.classList.contains('active')));
links?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setMenu(false)));
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&links?.classList.contains('active')){setMenu(false);toggle.focus()}document.querySelectorAll('.lang-selector.open').forEach(selector=>{selector.classList.remove('open');selector.querySelector('.lang-btn')?.setAttribute('aria-expanded','false')})});
document.addEventListener('click',event=>{if(links?.classList.contains('active')&&!event.target.closest('.navbar'))setMenu(false);if(!event.target.closest('.lang-selector'))document.querySelectorAll('.lang-selector.open').forEach(selector=>{selector.classList.remove('open');selector.querySelector('.lang-btn')?.setAttribute('aria-expanded','false')})});
addEventListener('resize',()=>{if(innerWidth>768)setMenu(false)},{passive:true});

// ===== 语言选择器 =====
document.querySelectorAll('.lang-selector').forEach(selector=>{const button=selector.querySelector('.lang-btn');button?.addEventListener('click',event=>{event.stopPropagation();const open=!selector.classList.contains('open');document.querySelectorAll('.lang-selector.open').forEach(item=>{item.classList.remove('open');item.querySelector('.lang-btn')?.setAttribute('aria-expanded','false')});selector.classList.toggle('open',open);button.setAttribute('aria-expanded',String(open))});selector.querySelectorAll('.lang-option').forEach(option=>option.addEventListener('click',()=>{selector.classList.remove('open');button?.setAttribute('aria-expanded','false');setLanguage(option.dataset.lang)}))});

// ===== i18n 应用逻辑 =====
(function captureOriginals(){document.querySelectorAll('[data-i18n]').forEach(el=>{if(el.dataset.i18nOrig===undefined)el.dataset.i18nOrig=el.textContent});document.querySelectorAll('[data-i18n-html]').forEach(el=>{if(el.dataset.i18nHtmlOrig===undefined)el.dataset.i18nHtmlOrig=el.innerHTML})})();
function applyUI(lang){document.querySelectorAll('[data-i18n]').forEach(el=>{const key=el.dataset.i18n;let val=null;if(lang!=='zh'){const d=UI[lang];if(d&&d[key]!==undefined)val=d[key]}else val=el.dataset.i18nOrig;if(val!==null&&val!==undefined)el.textContent=val});document.querySelectorAll('[data-i18n-html]').forEach(el=>{const key=el.dataset.i18nHtml;let val=null;if(lang!=='zh'){const d=UI[lang];if(d&&d[key]!==undefined)val=d[key]}else val=el.dataset.i18nHtmlOrig;if(val!==null&&val!==undefined)el.innerHTML=val});document.querySelectorAll('[data-i18n-aria-label]').forEach(el=>{const key=el.dataset.i18nAriaLabel;const val=lang==='zh'?ZH_ARIA[key]:UI[lang]?.[key];if(val)el.setAttribute('aria-label',val)})}

// ===== 章节导航联动 =====
const chapterLinks=[...document.querySelectorAll('.chapter-rail a')];
const chapterSections=chapterLinks.map(link=>document.querySelector(link.getAttribute('href'))).filter(Boolean);
if(chapterLinks.length&&chapterSections.length){
  const setActiveChapter=id=>chapterLinks.forEach(link=>{const active=link.getAttribute('href')===`#${id}`;link.classList.toggle('active',active);if(active)link.setAttribute('aria-current','true');else link.removeAttribute('aria-current')});
  const updateChapter=()=>{const marker=innerHeight*.42;let current=chapterSections[0];chapterSections.forEach(section=>{if(section.getBoundingClientRect().top<=marker)current=section});setActiveChapter(current.id)};
  addEventListener('scroll',updateChapter,{passive:true});addEventListener('resize',updateChapter,{passive:true});updateChapter();
}

// ===== 家谱数据与连线（连线依赖中文 name/children，与语言无关） =====
const familyData=typeof FAMILY_DATA!=='undefined'?FAMILY_DATA:[];const nodes=document.getElementById('nodes'),panel=document.getElementById('detailPanel');
const portrait=id=>`image/biography/portraits/${id}.webp`;
const pField=(p,field,lang)=>{if(lang==='zh')return p[field];const o=FI18N[p.id]?.[lang];if(o&&Object.prototype.hasOwnProperty.call(o,field))return o[field];return p[field]};
const idMap=new Map(),nameMap=new Map(),families=new Map(),last={trigger:null};
familyData.forEach(p=>{idMap.set(p.id,p);nameMap.set(p.name,p)});
(function buildLines(){if(!nodes||!panel||!familyData.length)return;familyData.forEach(p=>{if(!p.children||p.children==='未录入')return;p.children.split('、').forEach(n=>{const c=nameMap.get(n.trim());if(c){const list=families.get(p.id)||[];list.push(c.id);families.set(p.id,list)}})});const spousePairs=[['chen_deming','li_xiulan'],['chen_zhiyuan','wang_shufang'],['chen_zhiqiang','liu_huizhen'],['chen_lixin','lin_yaqin']];const paths=[];spousePairs.forEach(pair=>{const a=idMap.get(pair[0]),b=idMap.get(pair[1]);if(a&&b)paths.push(`M${Math.min(a.x,b.x)} ${a.y} H${Math.max(a.x,b.x)}`)});families.forEach((ids,parentId)=>{const p=idMap.get(parentId),cs=ids.map(id=>idMap.get(id)).filter(Boolean);if(!p||!cs.length)return;const xs=cs.map(c=>c.x),branch=(p.y+cs[0].y)/2;let d=`M${p.x} ${p.y} V${branch} M${Math.min(...xs)} ${branch} H${Math.max(...xs)}`;cs.forEach(c=>d+=` M${c.x} ${branch} V${c.y}`);paths.push(d)});const path=document.createElementNS('http://www.w3.org/2000/svg','path');path.setAttribute('d',paths.join(' '));document.querySelector('.tree-lines-group')?.replaceChildren(path)})();
function set(id,value){const el=document.getElementById(id);if(el)el.textContent=value||'未录入'}
function openPerson(id,trigger){const p=idMap.get(id);if(!p)return;last.trigger=trigger;document.querySelectorAll('.person-node').forEach(b=>b.classList.toggle('active',b.dataset.id===id));const lang=currentLang,name=pField(p,'name',lang);const img=document.getElementById('detailPortrait');img.src=portrait(id);img.alt=`${name}`;const rec=pField(p,'records',lang)||{};[['detailName',name],['detailRelation',pField(p,'relation',lang)],['detailYears',pField(p,'years',lang)],['detailBorn',pField(p,'born',lang)],['detailOrigin',pField(p,'origin',lang)],['detailJob',pField(p,'job',lang)],['detailSpouse',pField(p,'spouse',lang)],['detailSummary',pField(p,'summary',lang)],['detailImpact',pField(p,'impact',lang)],['rImages',rec.images],['rAudio',rec.audio],['rStories',rec.stories],['rValues',rec.values]].forEach(([a,b])=>set(a,b));document.getElementById('detailTimeline').replaceChildren(...(pField(p,'timeline',lang)||[]).map(t=>{const li=document.createElement('li');li.textContent=t;return li}));panel.showModal()}
function renderTree(lang){if(!nodes)return;const frag=document.createDocumentFragment();familyData.forEach((p,index)=>{const b=document.createElement('button');b.type='button';b.className='person-node';b.dataset.id=p.id;b.style.left=`${p.x}%`;b.style.top=`${p.y}%`;b.style.setProperty('--node-delay',`${.32+index*.055}s`);const name=pField(p,'name',lang),relation=pField(p,'relation',lang),years=pField(p,'years',lang);b.setAttribute('aria-label',`${name} · ${relation}`);const card=document.createElement('span');card.className='node-card';const img=document.createElement('img');img.className='node-avatar';img.src=portrait(p.id);img.alt=name;img.loading='lazy';card.append(img);[['node-name',name],['node-relation',relation],['node-years',years]].forEach(([c,v])=>{const s=document.createElement('span');s.className=c;s.textContent=v;card.append(s)});b.append(card);b.addEventListener('click',()=>openPerson(p.id,b));frag.append(b)});nodes.replaceChildren(frag)}
if(nodes&&panel&&familyData.length){renderTree('en');document.getElementById('closePanel')?.addEventListener('click',()=>panel.close());panel.addEventListener('click',e=>{const r=panel.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)panel.close()});panel.addEventListener('close',()=>last.trigger?.focus())}

// ===== 对话框（文案随语言切换） =====
const CHAT={
 'zh':{welcome:'你好。我可以根据这份虚构档案，为你介绍人物经历和家庭关系。你想先了解什么？',prompts:['他年轻时做什么工作？','这个家庭留下了哪些资料？','介绍一段重要经历'],replies:[['工作','陈德明早年务农，后来从事粮油贸易。档案把这段经历与家人的讲述放在同一条时间线上。'],['资料','这份示例档案整理了影像、声音、家族故事和家风记录。页面中的数量均为虚构演示数据。'],['经历','1958 年，陈德明带家人迁至绍兴城郊。示例用时间、地点与家庭关系串起这段经历。'],['关系','陈德明与李秀兰是第一代人物，家谱向下展示四代家庭关系。你也可以点击树上的人物查看详情。']],fallback:'这是前端交互演示，目前只会回应几类预设的虚构档案问题。你可以试试询问“工作”“资料”“经历”或“关系”。',placeholder:'输入一个关于示例档案的问题',send:'发送',reset:'重新开始演示',tellerLabel:'档案讲述人'},
 'en':{welcome:'Hello. Based on this fictional archive, I can introduce the person\'s experiences and family relationships. What would you like to know first?',prompts:['What work did he do when he was young?','What materials did this family leave behind?','Describe an important experience'],replies:[['work','In his early years Chen Deming farmed and later traded grain and oil. The archive places this experience on the same timeline as the family accounts.'],['material','This demo archive organizes images, voice clips, family stories and family sayings. All numbers on the page are fictional demo data.'],['experience','In 1958, Chen Deming moved his family to the outskirts of Shaoxing. The demo links this experience with time, place and family relationships.'],['relationship','Chen Deming and Li Xiulan are the first generation, and the tree shows four generations of family ties. You can also click people on the tree for details.']],fallback:'This is a front-end interaction demo that only answers a few preset fictional archive questions. Try asking about "work", "materials", "experience" or "relationships".',placeholder:'Ask a question about the demo archive',send:'Send',reset:'Restart demo',tellerLabel:'Archive narrator'},
 'ja':{welcome:'こんにちは。この架空のアーカイブをもとに、人物の経験と家族関係をご紹介できます。まず何を知りたいですか？',prompts:['彼は若い頃どんな仕事をしていましたか？','この家族はどんな資料を残しましたか？','重要な経験を紹介してください'],replies:[['仕事','陳徳明は若い頃農業をし、のちに糧油貿易に従事した。アーカイブはこの経験を家族の語りと同じ年表に並べている。'],['資料','この例のアーカイブは、影像・音声・家族の物語・家風の記録を整理している。ページ上の数値はすべて架空のデモデータ。'],['経験','1958年、陳徳明は家族を連れて紹興郊外へ移った。例は時間・場所・家族関係でこの経験をつないでいる。'],['関係','陳徳明と李秀蘭は第一世代で、家系図は四世代の関係を示す。木の上にある人物をクリックして詳細も見られる。']],fallback:'これはフロントエンドのデモで、いくつかの事前設定された質問にしか答えられません。「仕事」「資料」「経験」「関係」から尋ねてみてください。',placeholder:'この例のアーカイブについて質問を入力',send:'送信',reset:'デモをやり直す',tellerLabel:'アーカイブ語り手'},
 'ko':{welcome:'안녕하세요. 이 가상 아카이브를 바탕으로 인물의 경험과 가족 관계를 소개해 드릴 수 있습니다. 먼저 무엇을 알고 싶으신가요?',prompts:['그는 젊었을 때 어떤 일을 했나요?','이 가족은 어떤 자료를 남겼나요?','중요한 경험을 소개해 주세요'],replies:[['일','천더밍은 젊어서 농사를 짓고 이후 곡물·식용유 무역을 했다. 아카이브는 이 경험을 가족의 이야기와 같은 연표에 담았다.'],['자료','이 예시 아카이브는 영상, 음성, 가족 이야기와 가풍 기록을 정리했다. 페이지의 수치는 모두 가상 데모 데이터다.'],['경험','1958년, 천더밍은 가족을 이끌고 사오싱 근교로 이주했다. 예시는 시간, 장소, 가족 관계로 이 경험을 엮는다.'],['관계','천더밍과 리슈란은 1세대이며, 가계도는 4대에 걸친 관계를 보여준다. 나무 위 인물을 클릭해 자세히 볼 수도 있다.']],fallback:'이것은 프런트엔드 데모로, 미리 설정된 몇 가지 질문에만 답합니다. "일", "자료", "경험", "관계"를 물어보세요.',placeholder:'예시 아카이브에 관한 질문 입력',send:'보내기',reset:'데모 다시 시작',tellerLabel:'아카이브 이야기꾼'}
};
const form=document.getElementById('chat-form'),input=document.getElementById('chat-input'),messages=document.getElementById('messages');
let replyTimer=null,conversationVersion=0;
function cancelPendingReply(){conversationVersion+=1;if(replyTimer!==null){clearTimeout(replyTimer);replyTimer=null}}
function applyChat(lang){cancelPendingReply();const c=CHAT[lang]||CHAT.en;if(messages){messages.replaceChildren();const d=document.createElement('div');d.className='message assistant';d.textContent=c.welcome;messages.append(d)}document.querySelectorAll('.prompt-list button').forEach((b,i)=>{if(c.prompts[i]!=null)b.textContent=c.prompts[i]});if(input)input.placeholder=c.placeholder;const sendBtn=document.querySelector('.chat-form button[type="submit"]');if(sendBtn)sendBtn.textContent=c.send;const resetBtn=document.getElementById('reset-chat');if(resetBtn)resetBtn.textContent=c.reset;const teller=document.getElementById('humanTeller');if(teller&&familyData.length)teller.textContent=`${pField(familyData[0],'name',lang)} · ${c.tellerLabel}`}
function add(text,type){const d=document.createElement('div');d.className=`message ${type}`;d.textContent=text;messages.append(d);messages.scrollTop=messages.scrollHeight}
function ask(text){const q=text.trim();if(!q)return;cancelPendingReply();const version=conversationVersion,c=CHAT[currentLang]||CHAT.en;add(q,'user');input.value='';const found=c.replies.find(([key])=>q.toLowerCase().includes(key.toLowerCase()));replyTimer=setTimeout(()=>{if(version!==conversationVersion)return;add(found?found[1]:c.fallback,'assistant');replyTimer=null},260)}
form?.addEventListener('submit',e=>{e.preventDefault();ask(input.value)});document.querySelectorAll('.prompt-list button').forEach(b=>b.addEventListener('click',()=>ask(b.textContent)));let composing=false;input?.addEventListener('compositionstart',()=>composing=true);input?.addEventListener('compositionend',()=>composing=false);input?.addEventListener('keydown',e=>{if(e.key==='Enter'&&!e.shiftKey&&!composing){e.preventDefault();ask(input.value)}});document.getElementById('reset-chat')?.addEventListener('click',()=>{cancelPendingReply();const c=CHAT[currentLang]||CHAT.en;messages.replaceChildren();add(c.welcome,'assistant');input.focus()});

// ===== 语言切换 =====
function setLanguage(lang){if(lang==='zh-CN')lang='zh';if(!LANGS.includes(lang))lang='en';currentLang=lang;try{localStorage.setItem('preferredLegacyLanguage',lang)}catch{}document.documentElement.lang=lang==='zh'?'zh-CN':'en';applyUI(lang);renderTree(lang);applyChat(lang);document.querySelectorAll('.lang-option').forEach(o=>{const active=o.dataset.lang===lang;o.classList.toggle('active',active);o.setAttribute('aria-selected',String(active))});setMenu(links?.classList.contains('active')||false)}
// 初始化：读取已保存语言
let saved='en';try{saved=localStorage.getItem('preferredLegacyLanguage')||localStorage.getItem('preferredLanguage')||'en'}catch{}if(saved==='zh-CN')saved='zh';if(!LANGS.includes(saved))saved='en';
setLanguage(saved);

// ===== 记忆长卷动效：只强调阅读进程、关系生成与对话状态 =====
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealGroups=[
  ['.hero-mark,.hero-copy h1,.hero-lead,.hero-actions,.trust-line',70],
  ['.memory-index>*',55],['.section-heading',0],['.value-ledger article',75],
  ['.process-list li',70],['.dialogue-stage',0],['.closing-content>*',70],
  ['.footer-brand,.footer-chapters,.footer-return',75]
];
revealGroups.forEach(([selector,step])=>document.querySelectorAll(selector).forEach((el,index)=>{el.dataset.reveal=index?'item':'line';el.style.setProperty('--reveal-delay',`${index*step}ms`)}));
document.body.classList.add('motion-ready');
const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');revealObserver.unobserve(entry.target)}}),{threshold:.13,rootMargin:'0px 0px -7%'});
document.querySelectorAll('[data-reveal]').forEach(el=>revealObserver.observe(el));

const treeFrame=document.querySelector('.tree-frame');
if(treeFrame){new IntersectionObserver(([entry],observer)=>{if(entry.isIntersecting){treeFrame.classList.add('tree-visible');observer.disconnect()}},{threshold:.18}).observe(treeFrame)}

const processSteps=[...document.querySelectorAll('.process-list li')];
if(processSteps.length){const stepObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){processSteps.forEach(step=>step.classList.toggle('is-current',step===entry.target))}}),{rootMargin:'-35% 0px -45%',threshold:0});processSteps.forEach(step=>stepObserver.observe(step));processSteps[0].classList.add('is-current')}

const indexItems=[...document.querySelectorAll('.memory-index article')];
if(indexItems.length&&!reduced){let index=0;const advance=()=>{indexItems.forEach((item,i)=>item.classList.toggle('is-current',i===index));index=(index+1)%indexItems.length};advance();setInterval(advance,2200)}

let ticking=false;
const updateProgress=()=>{const total=document.documentElement.scrollHeight-innerHeight;const progress=total>0?Math.min(1,Math.max(0,scrollY/total)):0;document.documentElement.style.setProperty('--page-progress',progress.toFixed(4));ticking=false};
addEventListener('scroll',()=>{if(!ticking){ticking=true;requestAnimationFrame(updateProgress)}},{passive:true});updateProgress();
})();
