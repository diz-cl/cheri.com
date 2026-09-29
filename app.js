const sites = [
  {name:'San-X Character Plaza',url:'https://www.san-x.co.jp/en/characters/',category:'moe',activity:'unwind',time:'quick',quiet:true,colour:'pink',glyph:'♡',desc:'meet the characters from San-X, including familiar favourites and new little faces ♡',difference:'i always end up clicking through more characters than i planned ♡',tags:['san-x','characters','cute']},
  {name:'Sanrio',url:'https://www.sanrio.com/',category:'moe',activity:'unwind',time:'quick',quiet:true,colour:'peach',glyph:'✿',desc:'visit the official home of Hello Kitty, My Melody, Cinnamoroll and friends ♡',difference:'the official character world; some sections are a shop ♡',tags:['sanrio','characters','sugar bunnies']},
  {name:'Piskel',url:'https://www.piskelapp.com/',category:'pixel',activity:'make',time:'long',quiet:true,colour:'mint',glyph:'▦',desc:'draw tiny sprites and frame-by-frame animations in your browser ♡',difference:'you can make your little drawings blink and move ♡',tags:['sprite editor','animate']},
  {name:'Lospec Palette List',url:'https://lospec.com/palette-list/',category:'pixel',activity:'make',time:'quick',quiet:true,colour:'lavender',glyph:'◫',desc:'browse ready-made colour palettes for your next pixel piece ♡',difference:'for when you want to draw but cannot pick colours ♡',tags:['colour palettes','inspiration']},
  {name:'Make 8-bit Art!',url:'https://make8bitart.com/',category:'pixel',activity:'make',time:'quick',quiet:true,colour:'peach',glyph:'▣',desc:'make a quick pixel doodle on a delightfully simple canvas ♡',difference:'the instant doodle option when a full editor feels like too much ♡',tags:['pixel doodles','quick start']},
  {name:'Picrew',url:'https://picrew.me/en',category:'moe',activity:'make',time:'long',quiet:true,colour:'pink',glyph:'☺',desc:'mix and match parts in character makers drawn by different artists ♡',difference:'there are so many styles, just check what each artist allows ♡',tags:['characters','artist made']},
  {name:'Meiker.io: Kawaii Cuties',url:'https://meiker.io/play/16466/online.html',category:'moe',activity:'play',time:'quick',quiet:true,colour:'peach',glyph:'✿',desc:'dress up an extra cute character in this one specific maker ♡',difference:'a direct little dress-up game rather than a whole platform to search ♡',tags:['dress up','cute']},
  {name:'IconGenerators: Chibi Dot Icon Generator',url:'https://www.icongenerators.net/chibidot.html',category:'moe',activity:'make',time:'quick',quiet:true,colour:'yellow',glyph:'◕',desc:'build a tiny chibi pixel icon with a Japanese-style generator ♡',difference:'focused on mini profile icons rather than full-body avatars ♡',tags:['chibi','pixel icon']},
  {name:'WindowSwap',url:'https://www.window-swap.com/',category:'cosy',activity:'unwind',time:'long',quiet:true,colour:'blue',glyph:'▤',desc:'peek through real windows filmed by people around the world ♡',difference:'a quiet change of scenery with actual places, not a stock wallpaper ♡',tags:['real views','slow browsing']},
  {name:'Slow Roads',url:'https://slowroads.io/',category:'cosy',activity:'unwind',time:'long',quiet:true,colour:'mint',glyph:'⌁',desc:'drive along an endless scenic road with no finish line to chase ♡',difference:'you can just drive around for ages ♡',tags:['gentle drive','desktop best']},
  {name:'Rainy Mood',url:'https://www.rainymood.com/',category:'cosy',activity:'unwind',time:'long',quiet:false,colour:'blue',glyph:'☂',desc:'turn on a steady rain sound and give a tab a softer atmosphere ♡',difference:'just rain sounds, which is sometimes all you need ♡',tags:['rain audio','background']},
  {name:'NookCraft',url:'https://nookcraftapp.com/',category:'cosy',activity:'focus',time:'long',quiet:true,colour:'yellow',glyph:'⌂',desc:'put together a personalised cosy scene for study or reading ♡',difference:'choose a nook and use its timer, instead of just watching a loop ♡',tags:['custom ambience','timer']},
  {name:'FocusTown',url:'https://www.focustown.app/',category:'focus',activity:'focus',time:'long',quiet:true,colour:'lavender',glyph:'♧',desc:'join a shared study room when focusing alone feels hard ♡',difference:'the company of other students is the point here; sign-in may be needed ♡',tags:['study rooms','social']},
  {name:'LifeAt',url:'https://www.lifeat.com/',category:'focus',activity:'focus',time:'long',quiet:true,colour:'mint',glyph:'◴',desc:'pick an atmospheric workspace with a timer and task tools ♡',difference:'a fuller study desk with scenes and planning in one place ♡',tags:['workspace','tasks']},
  {name:'Cozyspace',url:'https://cozyspace.app/',category:'focus',activity:'focus',time:'long',quiet:true,colour:'pink',glyph:'✎',desc:'study with a Pomodoro timer, simple notes and ambient scenes ♡',difference:'a lightweight little desk for one task at a time ♡',tags:['pomodoro','notes']},
  {name:'Taiko Web: CJDG Revival',url:'https://cjdgrevival.com/',category:'games',activity:'play',time:'quick',quiet:false,colour:'peach',glyph:'◎',desc:'tap along to beats in a fan-made browser taiko rhythm game ♡',difference:'this pick is for rhythm and reflexes, not passive listening ♡',tags:['rhythm game','sound on']},
  {name:'Little Alchemy 2',url:'https://littlealchemy2.com/',category:'games',activity:'play',time:'long',quiet:true,colour:'yellow',glyph:'✧',desc:'combine simple elements and see how many new things you can discover ♡',difference:'i keep trying random combinations to see what happens ♡',tags:['puzzle','discover']},
  {name:'Sandspiel',url:'https://sandspiel.club/',category:'games',activity:'play',time:'quick',quiet:true,colour:'lavender',glyph:'≈',desc:'paint with falling sand, water, fire and plants in a playful simulation ♡',difference:'i like seeing what happens when everything mixes ♡',tags:['sandbox','experiment']},
  {name:'Cat Bounce!',url:'https://cat-bounce.com/',category:'games',activity:'play',time:'quick',quiet:true,colour:'pink',glyph:'=^.^=',desc:'bounce cats around your screen for a very silly minute ♡',difference:'honestly i just like bouncing the cats around ♡',tags:['cats','one-minute break']},
  {name:'Doodle Champion Island Games',url:'https://www.google.com/doodles/doodle-champion-island-games-begin',category:'games',activity:'play',time:'long',quiet:true,colour:'blue',glyph:'✦',desc:'explore a colourful island as a cat and try its sporty mini-games ♡',difference:'an actual little adventure with characters and places to visit ♡',tags:['adventure','mini-games']},
  {name:'Chrome Music Lab',url:'https://musiclab.chromeexperiments.com/',category:'tools',activity:'make',time:'quick',quiet:false,colour:'yellow',glyph:'♫',desc:'make patterns, melodies and little music experiments by clicking around ♡',difference:'you can mess around with music without knowing how to make it ♡',tags:['make music','experiments']},
  {name:'Silk: Interactive Generative Art',url:'https://weavesilk.com/',category:'tools',activity:'make',time:'quick',quiet:true,colour:'lavender',glyph:'✺',desc:'move your cursor to draw glowing, symmetrical wisps of colour ♡',difference:'the drawing reacts to your movement and mirrors itself ♡',tags:['generative art','draw']},
  {name:'Kleki: Paint Tool',url:'https://kleki.com/',category:'tools',activity:'make',time:'long',quiet:true,colour:'pink',glyph:'✎',desc:'paint or sketch in your browser with brushes, layers and useful tools ♡',difference:'for when you feel like drawing with actual brushes ♡',tags:['paint','layers']},
  {name:'Blob Opera: Google Arts & Culture',url:'https://artsandculture.google.com/experiment/blob-opera/AAHWrq360NcGbw?hl=en',category:'tools',activity:'make',time:'quick',quiet:false,colour:'mint',glyph:'♪',desc:'drag colourful singing blobs to play with harmony ♡',difference:'compose by moving characters; it feels like a toy orchestra ♡',tags:['music toy','sound on']}
];

const categories=[['all','all corners','✳'],['pixel','pixel','▦'],['moe','moe','✿'],['cosy','cosy','⌂'],['focus','focus','◴'],['games','games','♧'],['tools','creative tools','✎']];
const state={category:'all',time:'all',savedOnly:false,spotlight:null};
const el=id=>document.getElementById(id);
let favourites=new Set();
try{favourites=new Set(JSON.parse(localStorage.getItem('cheri-favourites')||localStorage.getItem('tinyweb-favourites')||'[]'))}catch{}
const save=()=>{try{localStorage.setItem('cheri-favourites',JSON.stringify([...favourites]))}catch{}};
function filtered(){
  const q=el('search').value.trim().toLocaleLowerCase();
  return sites.filter(s=>
    (state.category==='all'||s.category===state.category)&&
    (el('activity').value==='all'||s.activity===el('activity').value)&&
    (state.time==='all'||s.time===state.time)&&
    (!el('quietFilter').checked||s.quiet)&&
    (!state.savedOnly||favourites.has(s.url))&&
    (!q||[s.name,s.url,s.category,s.activity,s.desc,s.difference,...s.tags].join(' ').toLocaleLowerCase().includes(q))
  );
}
function categoryButtons(){
  el('categories').replaceChildren(...categories.map(([key,label,icon])=>{
    const button=document.createElement('button');button.type='button';button.dataset.category=key;button.setAttribute('aria-pressed',String(state.category===key));
    button.innerHTML=`<span><span class="cat-icon" aria-hidden="true">${icon}</span>${label}</span><span class="count">${key==='all'?sites.length:sites.filter(s=>s.category===key).length}</span>`;
    button.addEventListener('click',()=>{state.category=key;state.spotlight=null;render()});return button;
  }));
}
function card(site){
  const article=document.createElement('article');article.className='card'+(state.spotlight===site.url?' spotlight':'');
  const idx=sites.indexOf(site);article.id=`site-${idx}`;
  const art=document.createElement('div');art.className=`card-art ${site.colour}`;
  const glyph=document.createElement('span');glyph.className='glyph';glyph.setAttribute('aria-hidden','true');glyph.textContent=site.glyph;art.append(glyph);
  const heart=document.createElement('button');heart.className='heart';heart.type='button';heart.setAttribute('aria-label',`${favourites.has(site.url)?'remove':'save'} ${site.name} ${favourites.has(site.url)?'from':'to'} favourites`);heart.setAttribute('aria-pressed',String(favourites.has(site.url)));heart.textContent=favourites.has(site.url)?'♥':'♡';
  heart.addEventListener('click',()=>{favourites.has(site.url)?favourites.delete(site.url):favourites.add(site.url);save();render()});art.append(heart);
  const body=document.createElement('div');body.className='card-body';
  const type=document.createElement('span');type.className='card-type';type.textContent=categories.find(c=>c[0]===site.category)[1]+'  ·  '+(site.time==='quick'?'quick one':'stay here a bit');
  const h=document.createElement('h3');h.textContent=site.name;
  const desc=document.createElement('p');desc.className='card-desc';desc.textContent=site.desc;
  const difference=document.createElement('p');difference.className='difference';const strong=document.createElement('strong');strong.textContent='why i kept it ♡ ';difference.append(strong,document.createTextNode(site.difference));
  const tags=document.createElement('div');tags.className='card-tags';site.tags.forEach(t=>{const tag=document.createElement('span');tag.textContent=t;tags.append(tag)});
  const link=document.createElement('a');link.className='card-link';link.href=site.url;link.target='_blank';link.rel='noopener noreferrer';link.setAttribute('aria-label',`visit ${site.name}, opens in a new tab`);
  const linkText=document.createElement('span');linkText.textContent=site.url;const arrow=document.createElement('span');arrow.setAttribute('aria-hidden','true');arrow.textContent='↗';link.append(linkText,arrow);
  body.append(type,h,desc,difference,tags,link);article.append(art,body);return article;
}
function render(){
  categoryButtons();const results=filtered();el('cards').replaceChildren(...results.map(card));
  el('empty').hidden=results.length!==0;
  el('resultCount').textContent=`found ${results.length} of ${sites.length} sites${state.savedOnly?' · your saved ones ♡':''}`;
  el('savedCount').textContent=favourites.size;
  el('savedLink').setAttribute('aria-pressed',String(state.savedOnly));
  el('totalCount').textContent=sites.length;
  [...el('timeFilter').querySelectorAll('button')].forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.time===state.time)));
}
function reset(){state.category='all';state.time='all';state.savedOnly=false;state.spotlight=null;el('activity').value='all';el('quietFilter').checked=false;el('search').value='';render()}
el('search').addEventListener('input',()=>{state.spotlight=null;render()});
el('activity').addEventListener('change',()=>{state.spotlight=null;render()});
el('quietFilter').addEventListener('change',()=>{state.spotlight=null;render()});
el('timeFilter').addEventListener('click',e=>{const b=e.target.closest('button[data-time]');if(b){state.time=b.dataset.time;state.spotlight=null;render()}});
el('resetFilters').addEventListener('click',reset);el('emptyReset').addEventListener('click',reset);
el('savedLink').addEventListener('click',()=>{state.savedOnly=!state.savedOnly;state.spotlight=null;render();el('explore').scrollIntoView({behavior:'smooth'})});
el('surprise').addEventListener('click',()=>{
  let choices=filtered();if(!choices.length){reset();choices=filtered()}
  const site=choices[Math.floor(Math.random()*choices.length)];state.spotlight=site.url;render();
  el(`site-${sites.indexOf(site)}`).scrollIntoView({behavior:'smooth',block:'center'});
  setTimeout(()=>{const c=el(`site-${sites.indexOf(site)}`);if(c)c.classList.remove('spotlight')},4000);
});
document.addEventListener('keydown',e=>{if(e.key==='/'&&!['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName)){e.preventDefault();el('search').focus()}});
render();
