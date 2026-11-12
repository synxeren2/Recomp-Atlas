'use strict';

const PATHS = {
  compass:'<circle cx="12" cy="12" r="9"/><path d="m16 8-2.5 5.5L8 16l2.5-5.5L16 8Z"/>',
  bookmark:'<path d="M6 4h12v17l-6-4-6 4V4Z"/>',
  github:'<path d="M9 19c-4 1-4-2-6-2m12 4v-3.4c0-1 .2-1.7-.5-2.3 3-.4 6-1.5 6-6.5 0-1.5-.5-2.7-1.4-3.7.2-.7.6-2.2-.1-3.1 0 0-1.1-.4-3.6 1.4a12 12 0 0 0-6.8 0C6.1 1.6 5 2 5 2c-.7.9-.3 2.4-.1 3.1A5.6 5.6 0 0 0 3.5 9c0 5 3 6.1 6 6.5-.6.6-.6 1.3-.5 2.3V21"/>',
  sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/>',
  moon:'<path d="M21 13a9 9 0 0 1-10-10A9 9 0 1 0 21 13Z"/>',
  shuffle:'<path d="m18 3 3 3-3 3m0 6 3 3-3 3M3 6h3c6 0 6 12 12 12h3M3 18h3c2 0 3.5-1.7 5-4m2-4c1.5-2.3 3-4 5-4h3"/>',
  sliders:'<path d="M4 7h9m4 0h3M4 17h3m4 0h9"/><circle cx="15" cy="7" r="2"/><circle cx="9" cy="17" r="2"/>',
  x:'<path d="m6 6 12 12M6 18 18 6"/>',
  grid:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
  repeat:'<path d="m17 2 4 4-4 4M3 11V8a2 2 0 0 1 2-2h16M7 22l-4-4 4-4m14-1v3a2 2 0 0 1-2 2H3"/>',
  code:'<path d="m8 5-7 7 7 7m8-14 7 7-7 7m-3-17-2 20"/>',
  monitor:'<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8m-4-4v4"/>',
  wrench:'<path d="M14.5 6.5a5 5 0 0 0-6-3l3 3-3 3-3-3a5 5 0 0 0 6 6l7 7a2 2 0 0 0 3-3l-7-7a5 5 0 0 0 0-3Z"/>',
  layers:'<path d="m12 2 10 5-10 5L2 7l10-5Zm-10 10 10 5 10-5M2 17l10 5 10-5"/>',
  'chevron-up':'<path d="m6 15 6-6 6 6"/>',
  'chevron-down':'<path d="m6 9 6 6 6-6"/>',
  'chevron-right':'<path d="m9 6 6 6-6 6"/>',
  'chevron-left':'<path d="m15 6-6 6 6 6"/>',
  'arrow-up-right':'<path d="M7 17 17 7M7 7h10v10"/>',
  'arrow-left':'<path d="m12 5-7 7 7 7M5 12h15"/>',
  book:'<path d="M12 5v16M12 5C9 3 5 3 2 4v15c3-1 7-1 10 2 3-3 7-3 10-2V4c-3-1-7-1-10 1Z"/>',
  sparkles:'<path d="m12 3 2.7 6.3L21 12l-6.3 2.7L12 21l-2.7-6.3L3 12l6.3-2.7L12 3Zm8-2v4m-2-2h4M3 18v4m-2-2h4"/>',
  flame:'<path d="M12 3c0 6 6 5 6 11a6 6 0 1 1-12 0c0-3 2-5 3-6 0 4 3 4 3-5Z"/>',
  list:'<path d="M9 6h12M9 12h12M9 18h12M3 6h1M3 12h1M3 18h1"/>',
  search:'<circle cx="10.5" cy="10.5" r="7.5"/><path d="m16 16 5 5"/>',
  star:'<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z"/>',
  download:'<path d="M12 3v12m-5-5 5 5 5-5M3 15v5a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-5"/>',
  globe:'<circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="4" ry="9"/><path d="M3 12h18M5 7h14M5 17h14"/>',
  link:'<path d="m10 13 4-4m-6 7-2 2a4 4 0 0 1-6-6l4-4a4 4 0 0 1 6 0m4-1 2-2a4 4 0 0 1 6 6l-4 4a4 4 0 0 1-6 0" transform="translate(1 1) scale(.9)"/>',
  info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v6m0-10v.1"/>',
  clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  check:'<path d="m5 12 4 4L19 6"/>',
  copy:'<rect x="8" y="8" width="13" height="13" rx="2"/><path d="M16 8V3H3v13h5"/>',
  refresh:'<path d="M20 7a9 9 0 0 0-16 1m0-5v5h5m-5 9a9 9 0 0 0 16-1m0 5v-5h-5"/>',
  gamepad:'<path d="M6 8h12c3 0 5 11 2 12-2 1-4-4-5-4H9c-1 0-3 5-5 4C1 19 3 8 6 8Z"/><path d="M7 10v4m-2-2h4m6-1h.1m3 2h.1M9 8V4h6"/>',
  folder:'<path d="M3 7h6l2-3h10v16H3V7Z"/>',
  message:'<path d="M21 3H3v14h5l4 4v-4h9V3Z"/><path d="M7 8h10M7 12h7"/>',
  play:'<path d="m9 5 12 7-12 7V5Z"/>'
};
const $ = s => document.querySelector(s);
const icon = name => `<svg viewBox="0 0 24 24" aria-hidden="true">${PATHS[name] || PATHS.code}</svg>`;
const esc = v => String(v ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const safe = value => { try { const u=new URL(value);return ['https:','http:'].includes(u.protocol)?u.href:''; } catch {return '';} };
const ext = (url, label, cls='') => `<a class="${cls}" href="${esc(safe(url))}" target="_blank" rel="noopener noreferrer">${label}</a>`;
const fmt = n => Number(n || 0).toLocaleString('tr-TR');
const compact = n => n >= 1000 ? (n/1000).toLocaleString('tr-TR',{maximumFractionDigits:1})+' bin' : fmt(n);
const date = value => {if(!value)return 'Belirtilmemiş';const d=new Date(value);return Number.isNaN(d.getTime())?'Belirtilmemiş':d.toLocaleDateString('tr-TR',{day:'numeric',month:'short',year:'numeric',timeZone:'Europe/Istanbul'});};
const normalize = value => String(value||'').toLocaleLowerCase('tr').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/ı/g,'i');
const TYPE = {
  all:{label:'Tüm projeler',short:'Tümü',icon:'grid'},
  recomp:{label:'Recomp projeleri',short:'Recomp',icon:'repeat'},
  decomp:{label:'Decomp projeleri',short:'Decomp',icon:'code'},
  port:{label:'Yerel portlar',short:'Yerel port',icon:'monitor'},
  tool:{label:'Araçlar',short:'Araç',icon:'wrench'},
  other:{label:'Diğer projeler',short:'Diğer',icon:'layers'},
  engine:{label:'Motor uyarlaması',short:'Motor uyarlaması',icon:'wrench'},
  browser:{label:'Tarayıcı portu',short:'Tarayıcı portu',icon:'globe'},
  disasm:{label:'Disassembly',short:'Disassembly',icon:'code'}
};
const STATUS = {release:'Yayın mevcut',development:'Yayın kaydı yok',archived:'Arşivlenmiş'};
const FEATURED = ['zelda64recomp-zelda64recomp','hedge-dev-unleashedrecomp','banjorecomp-banjorecomp'];
const PRIORITY = [...FEATURED,'harbourmasters-shipwright','n64decomp-sm64','open-goal-jak-project','rainchus-donkey-kong-64-recompiled','harbourmasters-2ship2harkinian','harbourmasters-starship','zeldaret-oot','doldecomp-melee','n64decomp-mk64'];
const DEFAULT_PLATFORMS = ['N64','GameCube','Wii','PS1','PS2','Xbox 360','Switch','PC'];
const PLATFORM_LABEL = {'N64':'Nintendo 64','PS1':'PlayStation','PS2':'PlayStation 2','PS3':'PlayStation 3','DS':'Nintendo DS','GBA':'Game Boy Advance','NES':'NES / Famicom','SNES':'Super Nintendo'};
const KEYS = {saved:'recomp-atlas:saved:v1',theme:'recomp-atlas:theme',catalog:'recomp-atlas:catalog:v1'};
const readLocal = (key,fallback) => {try{return JSON.parse(localStorage.getItem(key))??fallback;}catch{return fallback;}};
const writeLocal = (key,value) => {try{localStorage.setItem(key,JSON.stringify(value));return true;}catch{return false;}};
let saved = new Set(readLocal(KEYS.saved,[]));
let catalog={projects:[],generated_at:''};
let curated={};
let toolSeeds=[];
let projects=[];
let projectMap=new Map();
let showMore=false;
let detailCurrent=null;
let updating=false;
let toastTimer;
let routeScroll=0;
let savedRoute='#';
let state={query:'',type:'all',platforms:new Set(),statuses:new Set(),sort:'recommended',view:readLocal('recomp-atlas:view','list'),page:1,library:false};
const releaseCache = new Map();

function mountIcons(root=document){root.querySelectorAll('[data-icon]').forEach(el=>{el.innerHTML=icon(el.dataset.icon);el.removeAttribute('data-icon');});}
function status(p){return p.archived?'archived':p.release?'release':'development';}
function githubRepo(p){try{const u=new URL(p.url);if(u.hostname==='github.com'){const s=u.pathname.split('/').filter(Boolean);if(s.length>=2&&/^[\w.-]+$/.test(s[0])&&/^[\w.-]+$/.test(s[1]))return s.slice(0,2).join('/');}}catch{}return null;}
function sourceName(p){try{return new URL(p.url).hostname==='github.com'?'GitHub':new URL(p.url).hostname==='gitlab.com'?'GitLab':new URL(p.url).hostname.replace('www.','');}catch{return 'Kaynak';}}
function sourceReleases(p){const repo=githubRepo(p);if(repo)return `https://github.com/${repo}/releases`;if(p.url.includes('gitlab.com/'))return p.url.replace(/\/-\/.*$/,'')+'/-/releases';return p.release_url||p.url;}
function primaryImage(p){return p.image||p.screenshot||'';}
function imageTag(p,cls='project-image',lazy=true){const img=primaryImage(p);const title=p.name||p.title;const initials=title.replace(/^(The Legend of Zelda: |The |Super )/,'').split(/[\s:-]+/).slice(0,2).map(w=>w[0]||'').join('').toUpperCase();const colors=['#3461a0','#705694','#346779','#437265','#8d6345','#795366'];const color=colors[[...p.id].reduce((s,c)=>s+c.charCodeAt(0),0)%colors.length];return img?`<img src="${esc(safe(img)||img.startsWith('assets/')&&img||'')}" alt="${esc(title)}" class="${cls}" ${lazy?'loading="lazy"':''} data-fallback="${esc(initials)}" style="--tile:${color}">`:`<span class="${cls} project-initials" style="--tile:${color}" aria-hidden="true">${esc(initials)}</span>`;}
function tags(p){return `<span class="tag ${p.type==='recomp'?'blue':p.type}">${icon(TYPE[p.type]?.icon||'code')}${esc(TYPE[p.type]?.short||p.type)}</span><span class="tag">${icon('gamepad')}${esc(PLATFORM_LABEL[p.platform]||p.platform||'Belirtilmemiş')}</span><span class="tag status ${status(p)}"><span class="status-dot"></span>${STATUS[status(p)]}</span>`;}
function card(p){const s=saved.has(p.id);return `<article class="project-card">${imageTag(p)}<div class="project-info"><div class="project-title-row"><a class="project-title" href="#project/${encodeURIComponent(p.id)}">${esc(p.name)}</a><span class="project-owner">${esc(p.repo?.split('/')[0]||sourceName(p))}</span></div><p class="project-description">${esc(p.summary||p.description||`${p.title} için ${TYPE[p.type]?.label.toLocaleLowerCase('tr')||'açık kaynak projesi'}. Kaynak kodunu ve proje bağlantılarını incele.`)}</p><div class="project-tags">${tags(p)}</div></div><div class="project-side"><div class="project-metrics" title="${p.stars==null?'Proje kaynağı':'Katalog tarihindeki GitHub yıldızları'}">${icon(p.stars==null?'code':'star')} ${p.stars==null?esc(sourceName(p)):compact(p.stars)}<button class="bookmark-btn ${s?'saved':''}" data-action="save" data-id="${esc(p.id)}" aria-label="${s?'Kütüphaneden çıkar':'Kütüphaneme kaydet'}: ${esc(p.name)}" aria-pressed="${s}">${icon('bookmark')}</button></div><span class="project-updated" title="Son kaynak kodu güncellemesi">${date(p.last_commit)}</span></div></article>`;}

function populate(){
  projects=catalog.projects.map(p=>({...p,...curated[p.repo],name:curated[p.repo]?.name||p.name||p.title}));
  projectMap=new Map(projects.map(p=>[p.id,p]));
  $('#total-stat').textContent=fmt(projects.length);
  $('#snapshot-date').textContent=`Katalog · ${date(catalog.generated_at)}`;
  $('#featured-grid').innerHTML=FEATURED.map(id=>projectMap.get(id)).filter(Boolean).map(p=>`<a class="feature-card" href="#project/${encodeURIComponent(p.id)}"><img class="feature-image" src="${esc(p.image)}" alt="${esc(p.title)}"><span class="feature-type">${icon('repeat')} RECOMP</span><span class="feature-arrow">${icon('arrow-up-right')}</span><div class="feature-bottom"><h3>${esc(p.name)}</h3><p>${esc(p.id===FEATURED[0]?"The Legend of Zelda: Majora’s Mask":p.id===FEATURED[1]?'Sonic Unleashed':'Banjo-Kazooie')}</p><div class="feature-meta"><span class="feature-platform">${esc(PLATFORM_LABEL[p.platform]||p.platform)}</span><span>·</span><span>${icon('star')} ${compact(p.stars)}</span></div></div></a>`).join('');
  renderSidebar();updateSavedCount();
}

function typeMatches(p,type){return type==='all'||(type==='other'?['engine','browser','disasm'].includes(p.type):p.type===type);}
function renderSidebar(){
  const nav=['all','recomp','decomp','port','tool','other'];
  $('#type-nav').innerHTML=nav.map(t=>`<button class="${state.type===t?'active':''}" data-action="type" data-type="${t}" ${state.type===t?'aria-current="true"':''}>${icon(TYPE[t].icon)}${TYPE[t].label}<span class="nav-count">${fmt(projects.filter(p=>typeMatches(p,t)).length)}</span></button>`).join('');
  const allPlatforms=[...new Set(projects.map(p=>p.platform))].filter(Boolean).sort((a,b)=>a.localeCompare(b,'tr'));
  const list=showMore?[...DEFAULT_PLATFORMS,...allPlatforms.filter(p=>!DEFAULT_PLATFORMS.includes(p))]:[...new Set([...DEFAULT_PLATFORMS,...state.platforms])];
  $('#platform-filters').innerHTML=list.map(p=>`<label class="filter-label"><input type="checkbox" data-filter="platform" value="${esc(p)}" ${state.platforms.has(p)?'checked':''}><span>${esc(PLATFORM_LABEL[p]||p)}</span><span class="filter-count">${fmt(projects.filter(x=>x.platform===p).length)}</span></label>`).join('');
  $('#status-filters').innerHTML=Object.keys(STATUS).map(s=>`<label class="filter-label"><input type="checkbox" data-filter="status" value="${s}" ${state.statuses.has(s)?'checked':''}><span>${STATUS[s]}</span><span class="filter-count">${fmt(projects.filter(p=>status(p)===s).length)}</span></label>`).join('');
  $('#more-platforms').innerHTML=`${showMore?'Daha az göster':'Diğer platformlar'} ${icon(showMore?'chevron-up':'chevron-down')}`;
}

function filteredProjects(){
  const words=normalize(state.query).trim().split(/\s+/).filter(Boolean);
  const list=projects.filter(p=>(!state.library||saved.has(p.id))&&typeMatches(p,state.type)&&(!state.platforms.size||state.platforms.has(p.platform))&&(!state.statuses.size||state.statuses.has(status(p)))&&words.every(w=>normalize([p.name,p.title,p.repo,p.description,p.platform,p.summary].join(' ')).includes(w)));
  return list.sort((a,b)=>{
    if(state.sort==='name')return a.name.localeCompare(b.name,'tr');
    if(state.sort==='updated')return (Date.parse(b.last_commit)||0)-(Date.parse(a.last_commit)||0);
    if(state.sort==='release')return (Date.parse(b.release_date)||0)-(Date.parse(a.release_date)||0);
    if(state.sort==='recommended'){
      const ai=PRIORITY.indexOf(a.id),bi=PRIORITY.indexOf(b.id);
      if(ai!==-1||bi!==-1)return (ai===-1?999:ai)-(bi===-1?999:bi);
    }
    return (b.stars||0)-(a.stars||0)||a.name.localeCompare(b.name,'tr');
  });
}

function renderCatalog(){
  const list=filteredProjects();const pageSize=16;const pages=Math.max(1,Math.ceil(list.length/pageSize));state.page=Math.min(Math.max(1,state.page),pages);
  $('#featured-section').hidden=state.library||Boolean(state.query)||state.type!=='all'||state.platforms.size>0||state.statuses.size>0;
  $('#page-title').innerHTML=state.library?'Biriktirdiğin <span>maceralar.</span>':'Klasikler yeniden <span>doğuyor.</span>';
  $('.intro-kicker').innerHTML=icon(state.library?'bookmark':'sparkles')+(state.library?' SENİN KÜTÜPHANEN':' ESKİ OYUNLAR, YENİ OLASILIKLAR');
  $('.intro-copy p').innerHTML=state.library?'İlgini çeken projeler, yeniden bulman için burada.<br class="desktop-break"> Kaydettiklerin bu tarayıcıda saklanır.':'Recomp, decomp ve yerel port projelerini keşfet.<br class="desktop-break"> Bir sonraki maceran burada başlıyor.';
  $('#catalog-title').innerHTML=`${state.library?'Kütüphanem':TYPE[state.type]?.label||'Tüm projeler'} <span id="result-count" class="count-pill">${fmt(list.length)}</span>`;
  $('#quick-tabs').innerHTML=['all','recomp','decomp','port','tool','other'].map(t=>`<button data-action="type" data-type="${t}" class="${state.type===t?'active':''}" aria-pressed="${state.type===t}">${TYPE[t].short}</button>`).join('');
  const chips=[];
  state.platforms.forEach(p=>chips.push(`<button class="filter-chip" data-action="remove-platform" data-platform="${esc(p)}">${esc(PLATFORM_LABEL[p]||p)} ${icon('x')}</button>`));
  state.statuses.forEach(s=>chips.push(`<button class="filter-chip" data-action="remove-status" data-status="${s}">${STATUS[s]} ${icon('x')}</button>`));
  $('#active-filters').innerHTML=chips.join('');
  $('#results-status').textContent=state.query?`“${state.query}” için ${fmt(list.length)} proje bulundu.`:'';
  $('#project-list').className=`project-list ${state.view==='grid'?'grid-view':''}`;
  $('#project-list').innerHTML=list.length?list.slice((state.page-1)*pageSize,state.page*pageSize).map(card).join(''):`<div class="empty-state">${icon(state.library&&!saved.size?'bookmark':'search')}<h3>${state.library&&!saved.size?'Kütüphanen seni bekliyor.':'Aradığını henüz bulamadık.'}</h3><p>${state.library&&!saved.size?'Proje kartlarındaki yer imi simgesine dokun; favori projelerin burada biriksin.':'Aramanı kısaltmayı veya birkaç filtreyi kaldırmayı dene.'}</p><button class="secondary-btn" data-action="${state.library&&!saved.size?'discover':'reset'}">${state.library&&!saved.size?'Projeleri keşfet':'Filtreleri temizle'} ${icon('arrow-up-right')}</button></div>`;
  const indices=new Set([1,pages,state.page-1,state.page,state.page+1].filter(n=>n>=1&&n<=pages));let last=0;let buttons='';
  [...indices].sort((a,b)=>a-b).forEach(n=>{if(last&&n-last>1)buttons+='<span>…</span>';buttons+=`<button data-action="page" data-page="${n}" class="${n===state.page?'active':''}" ${n===state.page?'aria-current="page"':''} aria-label="Sayfa ${n}">${n}</button>`;last=n;});
  $('#pagination').innerHTML=list.length?`<span>${fmt((state.page-1)*pageSize+1)}–${fmt(Math.min(state.page*pageSize,list.length))} / ${fmt(list.length)} proje</span><div class="page-buttons"><button data-action="page" data-page="${state.page-1}" ${state.page===1?'disabled':''} aria-label="Önceki sayfa">${icon('chevron-left')}</button>${buttons}<button data-action="page" data-page="${state.page+1}" ${state.page===pages?'disabled':''} aria-label="Sonraki sayfa">${icon('chevron-right')}</button></div>`:'';
  document.querySelectorAll('[data-action="view"]').forEach(b=>{b.classList.toggle('active',b.dataset.view===state.view);b.setAttribute('aria-pressed',String(b.dataset.view===state.view));});
  $('#search').value=state.query;$('#sort').value=state.sort;
  document.querySelectorAll('[data-nav]').forEach(a=>{const active=(a.dataset.nav==='library')===state.library;a.classList.toggle('active',active);if(active)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});
}

function updateSavedCount(){const count=projects.length?[...saved].filter(id=>projectMap.has(id)).length:saved.size;$('#library-count').textContent=count;$('#library-count').hidden=!count;}
function toggleSaved(id){if(!projectMap.has(id))return;const isSaved=saved.has(id);if(isSaved)saved.delete(id);else saved.add(id);const persisted=writeLocal(KEYS.saved,[...saved]);updateSavedCount();document.querySelectorAll(`[data-action="save"][data-id="${CSS.escape(id)}"]`).forEach(b=>{b.classList.toggle('saved',!isSaved);b.setAttribute('aria-pressed',String(!isSaved));b.setAttribute('aria-label',`${!isSaved?'Kütüphaneden çıkar':'Kütüphaneme kaydet'}: ${projectMap.get(id).name}`);if(b.classList.contains('detail-save'))b.innerHTML=icon('bookmark')+(!isSaved?'Kaydedildi':'Kaydet');});if(state.library&&!detailCurrent)renderCatalog();toast(persisted?isSaved?'Proje kütüphanenden çıkarıldı.':'Proje kütüphanene kaydedildi.':'Kaydedildi; tarayıcı depolaması kapalı olduğu için bu oturumda saklanacak.');}
function toast(message){clearTimeout(toastTimer);$('#toast').textContent=message;$('#toast').hidden=false;toastTimer=setTimeout(()=>{$('#toast').hidden=true;},3300);}

function syncHash(){const params=new URLSearchParams();if(state.query)params.set('q',state.query);if(state.type!=='all')params.set('type',state.type);if(state.platforms.size)params.set('platform',[...state.platforms].join(','));if(state.statuses.size)params.set('status',[...state.statuses].join(','));if(state.sort!=='recommended')params.set('sort',state.sort);if(state.page>1)params.set('page',state.page);const next=`#${state.library?'library':'explore'}${params.size?'?'+params:''}`;history.replaceState(null,'',next);savedRoute=next;}
function changeFilter(){state.page=1;syncHash();if(detailCurrent)route();else{renderSidebar();renderCatalog();}}
function resetFilters(){state.query='';state.type='all';state.platforms.clear();state.statuses.clear();state.sort='recommended';state.page=1;syncHash();if(detailCurrent)route();else{renderSidebar();renderCatalog();}}
function readRoute(){const hash=location.hash.slice(1);if(hash.startsWith('project/')){const parts=hash.split('/');let id;try{id=decodeURIComponent(parts[1]);}catch{id='';}const tab=['overview','versions','links','related'].includes(parts[2])?parts[2]:'overview';return {id,tab};}const [page,query='']=hash.split('?');const p=new URLSearchParams(query);state.library=page==='library';state.query=p.get('q')||'';state.type=TYPE[p.get('type')]?p.get('type'):'all';state.platforms=new Set((p.get('platform')||'').split(',').filter(Boolean));state.statuses=new Set((p.get('status')||'').split(',').filter(s=>STATUS[s]));state.sort=['recommended','stars','updated','name','release'].includes(p.get('sort'))?p.get('sort'):'recommended';state.page=Math.max(1,parseInt(p.get('page'),10)||1);return null;}
function route(){const previous=detailCurrent;const detail=readRoute();if(detail){if(!previous){routeScroll=window.scrollY;savedRoute=location.hash.startsWith('#project/')?savedRoute:location.hash;}$('#discover-page').hidden=true;$('#detail-page').hidden=false;const p=projectMap.get(detail.id);if(p){renderDetail(p,detail.tab);if(!previous||previous.id!==p.id)window.scrollTo(0,0);}else{detailCurrent={id:detail.id};$('#detail-page').innerHTML=`<a class="back-link" href="#">${icon('arrow-left')} Keşfe dön</a><div class="empty-state">${icon('search')}<h3>Bu proje katalogda bulunamadı.</h3><p>Bağlantı değişmiş olabilir. Aramayı kullanarak projeyi bulabilirsin.</p><a href="#" class="primary-btn">Projeleri keşfet</a></div>`;}}else{detailCurrent=null;$('#detail-page').hidden=true;$('#discover-page').hidden=false;renderSidebar();renderCatalog();savedRoute=location.hash||'#';if(previous)window.scrollTo(0,routeScroll);else window.scrollTo(0,0);}closeFilters();}

function getLinks(p){const links=[{label:`${sourceName(p)} deposu`,url:p.url,icon:sourceName(p)==='GitHub'?'github':'code',desc:'Kaynak kodu ve geliştirici dokümantasyonu'}];if(p.release||p.release_url)links.push({label:'Yayınlar ve indirmeler',url:sourceReleases(p),icon:'download',desc:'Geliştiricinin yayınladığı sürümler'});if(p.homepage)links.push({label:p.homepage.includes('discord')?'Topluluk / Discord':'Proje web sitesi',url:p.homepage,icon:p.homepage.includes('discord')?'message':'globe',desc:'Katalogda belirtilen resmi bağlantı'});if(p.discord&&p.discord!==p.homepage)links.push({label:'Topluluk / Discord',url:p.discord,icon:'message',desc:'Projenin topluluk sunucusu'});if(p.mods)links.push({label:'Modları keşfet',url:p.mods,icon:'layers',desc:'Bu projeye ait mod topluluğu'});if(p.play_url)links.push({label:'Tarayıcıda oyna',url:p.play_url,icon:'play',desc:'Projenin tarayıcı sürümü'});if(p.video)links.push({label:'Tanıtım videosu',url:p.video,icon:'play',desc:'Katalogdaki proje videosu'});if(p.decompdev_url)links.push({label:'Decomp ilerlemesi',url:p.decompdev_url,icon:'code',desc:'Projenin ilerleme sayfası'});return links.filter(l=>safe(l.url));}
function renderDetail(p,tab='overview'){
  detailCurrent={id:p.id,tab};document.title=`${p.name} — Recomp Atlas`;
  const links=getLinks(p);const cover=primaryImage(p);const st=status(p);const isSaved=saved.has(p.id);
  $('#detail-page').innerHTML=`<a class="back-link" href="${esc(savedRoute||'#')}">${icon('arrow-left')} Keşfe dön</a>${cover?`<img class="detail-cover" src="${esc(safe(cover)||cover)}" alt="${esc(p.title)}">`:`<div class="detail-cover-placeholder">${icon(TYPE[p.type]?.icon||'code')}</div>`}<div class="detail-heading">${imageTag(p)}<div class="detail-title-copy"><h1>${esc(p.name)}</h1><p>${esc(p.title)} · ${esc(p.repo||sourceName(p))}</p></div></div><div class="detail-actions">${ext(p.release?sourceReleases(p):p.url,icon(p.release?'download':'code')+(p.release?'Sürümleri görüntüle':'Projeye git'),'primary-btn')}<button class="secondary-btn detail-save ${isSaved?'saved':''}" data-action="save" data-id="${esc(p.id)}" aria-pressed="${isSaved}" aria-label="${isSaved?'Kütüphaneden çıkar':'Kütüphaneme kaydet'}: ${esc(p.name)}">${icon('bookmark')}${isSaved?'Kaydedildi':'Kaydet'}</button><button class="secondary-btn" data-action="share" data-id="${esc(p.id)}">${icon('copy')}Bağlantıyı kopyala</button><span class="tag status ${st}"><span class="status-dot"></span>${STATUS[st]}</span></div><nav class="detail-tabs" aria-label="Proje menüsü">${[['overview','Genel bakış','book'],['versions','Sürümler','download'],['links','Bağlantılar','link'],['related','Benzer projeler','layers']].map(([key,title,ic])=>`<a href="#project/${encodeURIComponent(p.id)}/${key}" class="${tab===key?'active':''}" ${tab===key?'aria-current="page"':''}>${icon(ic)}${title}</a>`).join('')}</nav><div class="detail-columns"><section id="detail-tab" class="content-panel">${detailTab(p,tab)}</section><aside class="detail-sidebar"><section class="content-panel"><h3>Proje bilgileri</h3><div class="metadata-row"><span>Proje türü</span><span>${esc(TYPE[p.type]?.short||p.type)}</span></div><div class="metadata-row"><span>Orijinal platform</span><span>${esc(PLATFORM_LABEL[p.platform]||p.platform)}</span></div>${p.stars==null?'':`<div class="metadata-row"><span>${icon('star')} GitHub yıldızı</span><span>${fmt(p.stars)}</span></div>`}<div class="metadata-row"><span>Son güncelleme</span><span>${date(p.last_commit)}</span></div>${p.license?`<div class="metadata-row"><span>Lisans</span><span>${esc(p.license)}</span></div>`:''}${p.release?`<div class="metadata-row"><span>Katalogdaki sürüm</span><span>${esc(p.release)}</span></div>`:''}<div class="metadata-row"><span>Katalog tarihi</span><span>${date(catalog.generated_at)}</span></div></section><section class="content-panel"><h3>Hızlı bağlantılar</h3>${links.slice(0,5).map(l=>ext(l.url,icon(l.icon)+esc(l.label)+icon('arrow-up-right'),'side-link')).join('')}</section></aside></div><footer class="main-footer"><span class="mini-brand">recomp<span>atlas.</span></span><p>Proje bilgileri topluluk kaynaklarından derlenmiştir.</p><button data-action="sources">Veri kaynakları ${icon('arrow-up-right')}</button></footer>`;
  if(tab==='versions'&&githubRepo(p))loadReleases(p);
}

function detailTab(p,tab){
  if(tab==='links')return `<h2>Projenin tüm bağlantıları</h2><p>Kaynak kodundan topluluğa, projeyi kendi kanallarından takip et.</p><div class="links-grid">${getLinks(p).map(l=>ext(l.url,icon(l.icon)+`<div><strong>${esc(l.label)}</strong><small>${esc(l.desc)}</small></div>`+icon('arrow-up-right'),'link-card')).join('')}</div>`;
  if(tab==='versions')return `<h2>Sürümler ve indirmeler</h2><p>İndirme bağlantıları doğrudan proje geliştiricilerinin yayınlarına gider.</p><div id="releases-live">${githubRepo(p)?'<p class="loading-state" style="min-height:80px;padding:15px"><span class="loader"></span>Güncel GitHub yayınları alınıyor…</p>':''}</div><div id="snapshot-release">${snapshotRelease(p)}</div>`;
  if(tab==='related'){const same=projects.filter(x=>x.id!==p.id&&(x.platform===p.platform||normalize(x.title).includes(normalize(p.name)))).sort((a,b)=>(a.platform===p.platform&&a.type===p.type?-1:0)-(b.platform===p.platform&&b.type===p.type?-1:0)||(b.stars||0)-(a.stars||0)).slice(0,6);return `<h2>Keşfe devam et</h2><p>${esc(PLATFORM_LABEL[p.platform]||p.platform)} platformundan ve benzer projelerden seçmeler.</p><div class="similar-grid">${same.map(card).join('')||'<p>Bu kategoride başka proje bulunamadı.</p>'}</div>`;}
  let progress='';const n=Number(p.progress);if(p.progress!=null&&Number.isFinite(n)&&n>=0&&n<=100)progress=`<h3>Kaynakta bildirilen ilerleme</h3><div class="progress-track"><span style="width:${n}%"></span></div><p>%${n.toLocaleString('tr-TR')} · ${date(catalog.generated_at)} tarihli katalog kaydı. Bu oran oynanabilirliği göstermez.</p>`;
  return `<h2>${esc(p.name)} hakkında</h2><p class="detail-description">${esc(p.summary||`${p.title}, ${PLATFORM_LABEL[p.platform]||p.platform} platformu için bir ${TYPE[p.type]?.short.toLocaleLowerCase('tr')||'tersine mühendislik'} projesidir. Projenin kaynak koduna, geliştirici notlarına ve varsa yayınlarına bu sayfadaki bağlantılardan ulaşabilirsin.`)}</p>${p.description?`<h3>Geliştiricinin açıklaması</h3><p class="original-description">${esc(p.description)}</p>`:''}${p.features?.length?`<h3>Öne çıkan özellikler</h3><div class="feature-list">${p.features.map(f=>`<div>${icon('check')}${esc(f)}</div>`).join('')}</div>`:''}<h3>${TYPE[p.type]?.short||'Bu proje'} ne anlama geliyor?</h3><p>${explainType(p.type)}</p>${progress}<div class="notice">${icon('info')}<span>${p.type==='decomp'||p.type==='disasm'?'Decomp ve disassembly projeleri kaynak koduna odaklanır. Tamamlanmış bir decomp, tek başına oynanabilir bir PC portu anlamına gelmez.':'Kurulum ve gerekli oyun dosyaları projeye göre değişir. Doğru sürüm ve kurulum adımları için geliştiricinin kendi dokümantasyonunu incele.'}</span></div><p style="font-size:10px;margin-bottom:0">Yıldızlar, sürüm ve güncelleme bilgileri ${date(catalog.generated_at)} tarihli topluluk kataloğundan alınmıştır. Güncel yayınları Sürümler sekmesinden kontrol edebilirsin.</p>`;
}
function explainType(type){return {recomp:'Statik recompilation, orijinal oyunun makine kodunu farklı bir sistemde yerel olarak çalışacak koda dönüştürür. Projeler modern kontroller, görüntü seçenekleri ve mod desteği gibi farklı özellikler sunabilir.',decomp:'Decompilation, bir oyunun derlenmiş kodundan okunabilir kaynak kodunu yeniden oluşturmayı amaçlar. Çalışma, oyunun anlaşılmasına, korunmasına ve yeni portların geliştirilmesine temel olabilir.',port:'Yerel port, bir decomp çalışması veya yayımlanmış kaynak kodu üzerine kurularak oyunu başka bir sistemde çalıştırır. Desteklenen sistemler ve özellikler projeye göre değişir.',engine:'Motor uyarlaması, bir oyunun motorunu yeniden uygulayan veya modern sistemler için yeniden kuran bir projedir. Statik recompilation ve decompilation çalışmalarından farklı bir yöntem izler.',browser:'Tarayıcı portu, bir oyunun web tarayıcısında çalışabilmesi için hazırlanmış uyarlamasıdır. Oyun dosyası gereksinimleri proje dokümantasyonunda belirtilir.',disasm:'Disassembly, orijinal makine kodunu assembly düzeyinde inceleyip açıklamayı ve yeniden derlenebilir hale getirmeyi amaçlar.',tool:'Bu araç, oyunların tersine mühendisliği, yeniden derlenmesi veya bu projelerin yönetimi için geliştirilmiştir.'}[type]||'Projenin kapsamı ve kullanılan yöntem için kaynak deposundaki açıklamalara bakabilirsin.';}
function cleanNotes(body){return String(body||'').replace(/<[^>]*>/g,'').replace(/```[^\n]*\n/g,'').replace(/```/g,'').replace(/\*\*/g,'').replace(/^#{1,6}\s+/gm,'').replace(/^>\s?/gm,'').replace(/\[!\w+\]/g,'').replace(/\[([^\]]+)\]\([^)]+\)/g,'$1').replace(/\n{3,}/g,'\n\n').trim();}
function snapshotRelease(p){return p.release?`<div class="release-card"><h3>${icon('download')}${esc(p.release)} <span class="tag">Katalog kaydı</span></h3><span class="release-date">${date(p.release_date)} · Kataloğa alınma: ${date(catalog.generated_at)}</span><p>Bu sürüm katalog anlık görüntüsünden alınmıştır. Tüm güncel yayınları geliştiricinin sayfasında inceleyebilirsin.</p>${ext(p.release_url||sourceReleases(p),'Yayın sayfasını aç '+icon('arrow-up-right'),'secondary-btn')}</div>`:`<div class="notice">${icon('info')}<span>Bu projenin katalog kaydında bir yayın bulunmuyor. Derleme talimatları ve güncel durum için kaynak deposunu incele.</span></div><p>${ext(p.url,icon('code')+' Kaynak deposuna git '+icon('arrow-up-right'),'secondary-btn')}</p>`;}
async function loadReleases(p){
  const repo=githubRepo(p);if(!repo)return;
  if(!releaseCache.has(repo))releaseCache.set(repo,fetch(`https://api.github.com/repos/${repo}/releases?per_page=5`,{headers:{Accept:'application/vnd.github+json'},signal:AbortSignal.timeout(15000)}).then(async r=>{if(!r.ok)throw Error(r.status===403||r.status===429?'GitHub istek sınırına ulaşıldı.':'GitHub yayınlarına şu anda ulaşılamıyor.');const data=await r.json();if(!Array.isArray(data))throw Error('Yayın listesi alınamadı.');return data.filter(x=>!x.draft); }));
  try{const releases=await releaseCache.get(repo);if(detailCurrent?.id!==p.id||detailCurrent.tab!=='versions')return;$('#snapshot-release').hidden=releases.length>0;$('#releases-live').innerHTML=releases.length?`<div class="notice">${icon('refresh')}<span>GitHub’dan şimdi alındı. En son ${releases.length} yayın gösteriliyor.</span></div>`+releases.map(r=>`<article class="release-card"><h3>${esc(r.name||r.tag_name)}${r.prerelease?'<span class="tag decomp">Ön sürüm</span>':'<span class="tag blue">Yayın</span>'}</h3><span class="release-date">${date(r.published_at)}</span>${r.body?`<p style="white-space:pre-wrap;overflow-wrap:anywhere">${esc(cleanNotes(r.body).slice(0,550))}${cleanNotes(r.body).length>550?'…':''}</p>`:''}<div class="release-assets">${(r.assets||[]).slice(0,8).filter(a=>safe(a.browser_download_url)).map(a=>ext(a.browser_download_url,icon('download')+esc(a.name),'secondary-btn')).join('')}</div><p>${ext(r.html_url,'Tüm dosyalar ve sürüm notları '+icon('arrow-up-right'),'secondary-btn')}</p></article>`).join(''):'<p>GitHub’da yayımlanmış bir sürüm bulunamadı.</p>';
  }catch(error){releaseCache.delete(repo);if(detailCurrent?.id===p.id&&detailCurrent.tab==='versions')$('#releases-live').innerHTML=`<div class="notice">${icon('info')}<span>${esc(error.message==='The operation was aborted due to timeout'?'GitHub isteği zaman aşımına uğradı.':error.message)} Aşağıdaki katalog kaydını veya projenin yayın sayfasını kullanabilirsin.</span></div><p><button class="secondary-btn" data-action="retry-releases" data-id="${esc(p.id)}">${icon('refresh')}Tekrar dene</button></p>`;}
}

function showGuide(){showDialog(`<h2>Eski oyunlar, farklı yollar.</h2><p>Hepsi oyunları anlamamıza ve yeniden keşfetmemize yardımcı olur; kullandıkları yöntemler farklıdır.</p>${[['recomp','01'],['decomp','02'],['port','03'],['disasm','04']].map(([t,n])=>`<h3><span style="color:var(--blue);margin-right:8px">${n}</span>${TYPE[t].short}</h3><p>${explainType(t)}</p>`).join('')}<div class="notice">${icon('info')}<span>“Yayın mevcut”, geliştiricinin bir sürüm yayımladığını belirtir. Her projenin oynanabilirlik ve uyumluluk durumu kendi dokümantasyonunda açıklanır.</span></div>`);}
function showSources(){showDialog(`<h2>Topluluğun emeği, tek bir atlas.</h2><p>Recomp Atlas, oyunları yaşatan açık kaynak projelerini keşfetmeni sağlayan bağımsız bir katalogdur. Modrinth’in keşif deneyiminden ilham alır.</p><div class="notice">${icon('layers')}<span><strong>${fmt(projects.length)} proje</strong> · Katalog tarihi: ${date(catalog.generated_at)}<br>Yeni ve yayımlanmamış projeler sürekli eklendiğinden internetteki her projeyi kapsama garantisi vermez. Tür, sürüm ve yıldız bilgileri kaynakların anlık görüntüsüdür.</span></div><h3>Veri kaynakları</h3>${ext(catalog.source||'https://github.com/SubmitGame/awesome-decomp-games',icon('github')+'<div><strong>Awesome Decomp Games</strong><span>Topluluk kataloğu · CC0 1.0 veri lisansı</span></div>'+icon('arrow-up-right'),'source-item')}${ext('https://github.com/BlueInterlude/awesome-recompilations',icon('github')+'<div><strong>Awesome Recompilations</strong><span>Recomp projeleri ve topluluk bağlantıları</span></div>'+icon('arrow-up-right'),'source-item')}${ext('https://github.com/CharlotteCross1998/awesome-game-decompilations',icon('github')+'<div><strong>Awesome Game Decompilations</strong><span>Platformlara göre decomp keşfi</span></div>'+icon('arrow-up-right'),'source-item')}<h3>Katalog kapsamı</h3><p>Recomp, decomp, yerel port, motor uyarlaması, tarayıcı portu, disassembly ve araçlar. Öne çıkan projelerin türleri ve bağlantıları ayrıca düzenlendi. Oyun görselleri ilgili hak sahiplerine aittir.</p><h3>Güncel kal</h3><p>Kataloğu kaynaktan yeniden alabilirsin. Yer imlerin korunur. Sürümler sekmesi, GitHub yayınlarını ayrıca canlı olarak sorgular.</p><button class="primary-btn" id="refresh-catalog" data-action="refresh-catalog" ${updating?'disabled':''}>${icon('refresh')}${updating?'Katalog yenileniyor…':'Kataloğu şimdi yenile'}</button><p id="refresh-message" role="status" style="font-size:11px"></p><h3>Görsel kaynakları</h3><p>${ext('https://wallpapersden.com/legend-of-zelda-art-moon-wallpaper/','Majora’s Mask görseli')} · ${ext('https://img.neoseeker.com/v_concept_art.php?caid=46421','Sonic Unleashed konsept görseli')} · ${ext('https://en.as.com/meristation/news/banjo-kazooie-creators-explain-why-there-will-be-no-new-game-in-the-series-n/','Banjo-Kazooie görseli')} · ${ext('https://www.pinterest.com/pin/super-mario-64-pc-wallpaper-in-2024--860469072593166165/','Super Mario 64 görseli')}. Diğer ekran görüntüleri topluluk kataloğundaki proje görselleridir.</p>`);}
function showDialog(html){$('#dialog-content').innerHTML=html;if(!$('#info-dialog').open)$('#info-dialog').showModal();}
function closeFilters(){const wasOpen=$('#sidebar').classList.contains('open');$('#sidebar').classList.remove('open');$('#sidebar').inert=matchMedia('(max-width:640px)').matches;$('.sidebar-backdrop').hidden=true;document.body.classList.remove('backdrop-open');$('.topbar').inert=false;$('#main').inert=false;if(wasOpen&&matchMedia('(max-width:640px)').matches)document.querySelector('.topbar .mobile-filter').focus();}
function toggleFilters(){if($('#sidebar').classList.contains('open')){closeFilters();return;}$('#sidebar').inert=false;$('#sidebar').classList.add('open');$('.sidebar-backdrop').hidden=false;document.body.classList.add('backdrop-open');$('.topbar').inert=true;$('#main').inert=true;$('#sidebar button').focus();}

function normalizeUpstream(data){
  if(!Array.isArray(data.games)||!data.generated_at||data.games.length<100)throw Error('Kaynak kataloğun biçimi değişmiş; mevcut katalog korunuyor.');
  const types={'static-recomp':'recomp','decompilation':'decomp','source-port':'port','engine-remake':'engine','browser-port':'browser','disassembly':'disasm','tool':'tool'};
  const platforms={'og xbox':'Xbox','switch2':'Switch 2','':'Belirtilmemiş'};
  const items=data.games.filter(g=>g.id&&safe(g.url)&&(!(g.sources?.length===1&&g.sources[0]==='quiver')||curated[g.repo]||g.repo==='tgeorgiadis/quiver-launcher')).map(g=>{const p={};['id','title','repo','stars','last_commit','archived','license','release','release_date','releases','progress','decompdev_url'].forEach(k=>{if(g[k]!=null)p[k]=g[k];});Object.assign(p,{name:g.title,type:types[g.type]||'decomp',platform:platforms[g.platform]||g.platform||'Belirtilmemiş',url:safe(g.url),description:String(g.description||'').slice(0,700),homepage:safe(g.homepage),release_url:safe(g.release_url),video:safe(g.video),play_url:safe(g.play_url),screenshot:g.screenshot?'https://raw.githubusercontent.com/SubmitGame/awesome-decomp-games/main/'+g.screenshot:null});return p;});
  items.push(...toolSeeds.filter(t=>!items.some(p=>p.id===t.id)));
  const idCounts=new Map();items.forEach(p=>idCounts.set(p.id,(idCounts.get(p.id)||0)+1));items.forEach(p=>{if(idCounts.get(p.id)>1)p.id+='--'+normalize(p.title).replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');});
  return {projects:items,generated_at:data.generated_at,source:'https://github.com/SubmitGame/awesome-decomp-games',license:'CC0-1.0'};
}
async function refreshCatalog(){if(updating)return;updating=true;const btn=$('#refresh-catalog');if(btn){btn.disabled=true;btn.innerHTML=icon('refresh')+'Katalog yenileniyor…';}try{const response=await fetch('https://raw.githubusercontent.com/SubmitGame/awesome-decomp-games/main/data/games.json',{cache:'no-store',signal:AbortSignal.timeout(25000)});if(!response.ok)throw Error('Katalog kaynağına şu anda ulaşılamıyor.');const next=normalizeUpstream(await response.json());catalog=next;const persisted=writeLocal(KEYS.catalog,next);populate();if(detailCurrent){const p=projectMap.get(detailCurrent.id);if(p)renderDetail(p,detailCurrent.tab);}else renderCatalog();if($('#refresh-message'))$('#refresh-message').textContent=`${fmt(projects.length)} proje alındı. Kaynak tarihi: ${date(catalog.generated_at)}.${persisted?'':' Tarayıcı depolaması dolu; yenilenen katalog bu oturumda kullanılacak.'}`;toast('Katalog kaynaktan yenilendi.');}catch(error){if($('#refresh-message'))$('#refresh-message').textContent='Katalog yenilenemedi. Mevcut katalog kullanılmaya devam ediyor. '+error.message;toast('Katalog yenilenemedi; mevcut projeler korunuyor.');}finally{updating=false;if($('#refresh-catalog')){$('#refresh-catalog').disabled=false;$('#refresh-catalog').innerHTML=icon('refresh')+'Kataloğu şimdi yenile';}}}

document.addEventListener('click',async e=>{
  if(e.target.closest('.skip-link')){e.preventDefault();document.querySelector('#main').focus();document.querySelector('#main').scrollIntoView();return;}
  const b=e.target.closest('[data-action]');if(!b)return;const a=b.dataset.action;
  if(a==='type'){state.type=b.dataset.type;changeFilter();}
  else if(a==='save'){e.preventDefault();e.stopPropagation();toggleSaved(b.dataset.id);}
  else if(a==='view'){state.view=b.dataset.view;writeLocal('recomp-atlas:view',state.view);renderCatalog();}
  else if(a==='reset')resetFilters();
  else if(a==='more-platforms'){showMore=!showMore;renderSidebar();}
  else if(a==='remove-platform'){state.platforms.delete(b.dataset.platform);changeFilter();}
  else if(a==='remove-status'){state.statuses.delete(b.dataset.status);changeFilter();}
  else if(a==='page'){state.page=Number(b.dataset.page);syncHash();renderCatalog();$('.catalog-heading').scrollIntoView({block:'start'});}
  else if(a==='guide')showGuide();
  else if(a==='sources')showSources();
  else if(a==='close-dialog')$('#info-dialog').close();
  else if(a==='filters')toggleFilters();
  else if(a==='discover')location.hash='';
  else if(a==='random'){const list=filteredProjects();if(list.length)location.hash=`project/${encodeURIComponent(list[Math.floor(Math.random()*list.length)].id)}`;else toast('Bu filtrelerde keşfedilecek proje bulunamadı.');}
  else if(a==='theme'){const theme=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=theme;writeLocal(KEYS.theme,theme);b.innerHTML=icon(theme==='dark'?'sun':'moon');b.setAttribute('aria-label',theme==='dark'?'Açık temaya geç':'Koyu temaya geç');}
  else if(a==='refresh-catalog')await refreshCatalog();
  else if(a==='retry-releases'){const p=projectMap.get(b.dataset.id);if(p){$('#releases-live').innerHTML='<p>GitHub yayınları yeniden alınıyor…</p>';loadReleases(p);}}
  else if(a==='share'){const url=new URL(`#project/${encodeURIComponent(b.dataset.id)}`,location.href).href;try{await navigator.clipboard.writeText(url);toast('Proje bağlantısı kopyalandı.');}catch{showDialog(`<h2>Proje bağlantısı</h2><p>Bu bağlantıyı kopyalayıp paylaşabilirsin.</p><input style="width:100%;padding:12px;background:var(--panel);border:1px solid var(--border);border-radius:7px;color:var(--text)" aria-label="Proje bağlantısı" value="${esc(url)}" readonly onclick="this.select()">`);}}
});
document.addEventListener('change',e=>{if(e.target.dataset.filter){const set=e.target.dataset.filter==='platform'?state.platforms:state.statuses;if(e.target.checked)set.add(e.target.value);else set.delete(e.target.value);changeFilter();}if(e.target.id==='sort'){state.sort=e.target.value;state.page=1;syncHash();renderCatalog();}});
let searchTimer;$('#search').addEventListener('input',e=>{const value=e.target.value;clearTimeout(searchTimer);searchTimer=setTimeout(()=>{state.query=value;state.page=1;syncHash();renderCatalog();},120);});
document.addEventListener('keydown',e=>{if(e.key==='/'&&!['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName)&&!$('#info-dialog').open){e.preventDefault();if(detailCurrent)location.hash='';setTimeout(()=>$('#search').focus(),0);}if(e.key==='Escape'){closeFilters();if(document.activeElement.id==='search')document.activeElement.blur();}});
document.addEventListener('error',e=>{if(e.target.tagName==='IMG'&&e.target.dataset.fallback){const span=document.createElement('span');span.className=e.target.className+' project-initials';span.style.cssText=e.target.style.cssText;span.textContent=e.target.dataset.fallback;span.setAttribute('aria-hidden','true');e.target.replaceWith(span);}},true);
$('#info-dialog').addEventListener('click',e=>{if(e.target===$('#info-dialog')){const r=e.target.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)e.target.close();}});
matchMedia('(max-width:640px)').addEventListener('change',closeFilters);
window.addEventListener('hashchange',()=>{if(!location.hash.startsWith('#project/'))document.title='Recomp Atlas — Klasikler yeniden doğuyor.';if(projects.length)route();});
window.addEventListener('storage',e=>{if(e.key===KEYS.saved){saved=new Set(readLocal(KEYS.saved,[]));updateSavedCount();if(detailCurrent){const p=projectMap.get(detailCurrent.id);if(p)renderDetail(p,detailCurrent.tab);}else renderCatalog();}});
async function init(){mountIcons();const theme=readLocal(KEYS.theme,'dark');document.documentElement.dataset.theme=theme==='light'?'light':'dark';$('.theme-toggle').innerHTML=icon(theme==='light'?'moon':'sun');$('.theme-toggle').setAttribute('aria-label',theme==='light'?'Koyu temaya geç':'Açık temaya geç');try{const [r,c,t]=await Promise.all([fetch('catalog.json'),fetch('curated.json'),fetch('tool-seeds.json')]);if(!r.ok||!c.ok||!t.ok)throw Error('Katalog dosyasına ulaşılamadı.');catalog=await r.json();curated=await c.json();toolSeeds=await t.json();const cached=readLocal(KEYS.catalog,null);if(cached?.projects?.length&&Date.parse(cached.generated_at)>Date.parse(catalog.generated_at))catalog=cached;populate();route();}catch(error){$('#project-list').innerHTML=`<div class="empty-state">${icon('info')}<h3>Katalog yüklenemedi.</h3><p>${esc(error.message)} Bağlantını kontrol edip sayfayı yenileyebilirsin.</p><button class="primary-btn" onclick="location.reload()">Yeniden yükle</button></div>`;}}
init();
