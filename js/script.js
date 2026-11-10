document.querySelectorAll('.tab').forEach(function(b){
  b.addEventListener('click',function(){
    document.querySelectorAll('.tab').forEach(function(x){x.classList.remove('on')});
    document.querySelectorAll('.gal').forEach(function(x){x.classList.remove('on')});
    b.classList.add('on');
    document.getElementById(b.dataset.t).classList.add('on');
  });
});
document.querySelectorAll('#nav a').forEach(function(a){
  a.addEventListener('click',function(){document.getElementById('nav').classList.remove('open')});
});
function sendQuote(e){
  e.preventDefault();
  var f=e.target, v=function(n){return f.elements[n].value||'—'};
  var body='Nom : '+v('nom')+'\nTéléphone : '+v('tel')+'\nDomaine : '+v('domaine')+'\nNombre de personnes : '+v('nb')+'\nDate souhaitée : '+v('date');
  window.location.href='mailto:entreprisesiele@gmail.com?subject='+encodeURIComponent('Demande de devis — '+v('domaine'))+'&body='+encodeURIComponent(body);
  return false;
}

/* ===== Explorateur de domaines ===== */
function P(k){var m=/^d(\d+)$/.exec(k);if(m){var n=+m[1];return 'img/'+n+((n>=34&&n<=39)||n>=42?'.png':'.jpeg')}var n=k.slice(1);return 'img/'+n+(n=='C1'?'.jpg':'.jpeg')}
var D={
formation:{t:"Formation",q:"Formation",im:["d4","d2","d3","d5"],th:["d4","d3","d5","d42","d31","d24","d45","d43","d28"],lab:"formations",i:"Des sessions animées par des experts, pour les équipes comme pour les particuliers. Choisissez un programme pour en explorer le détail.",p:"Dirigeants, cadres, assistant(e)s, équipes comptables et commerciales, particuliers.",m:"Programme, durée et calendrier définis avec vous. Demandez un devis pour une session sur mesure.",it:[
["Management & projets","Piloter une équipe, une activité et des projets avec méthode.",["Leadership et management d'équipe","Planification et suivi de projet","Tableaux de bord et indicateurs"]],

["Comptabilité & finance","Maîtriser les fondamentaux comptables et financiers de l'entreprise.",["Écritures et états financiers","Analyse financière","Budget et trésorerie"]],

["Fiscalité","Comprendre les obligations fiscales et sécuriser vos déclarations.",["Principaux impôts et taxes","Déclarations et échéances","Prévention du risque fiscal"]],

["RH & droit du travail","Gérer le personnel dans le respect des règles du travail.",["Gestion administrative du personnel","Contrat de travail et obligations légales","Recrutement et développement des compétences"]],

["Secrétariat & assistanat","Devenir l'appui efficace d'une direction.",["Organisation du travail et gestion de l'agenda","Rédaction et communication professionnelle","Classement et suivi des dossiers"]],

["Audit & contrôle de gestion","Mesurer, contrôler et améliorer la performance.",["Méthodes d'audit interne","Mise en place du contrôle de gestion","Suivi des écarts et reporting"]],

["Assurance banque","Acquérir les bases des métiers de l'assurance et de la banque.",["Produits d'assurance et de banque","Relation avec la clientèle","Gestion des contrats et des sinistres"]],

["Commercial & marketing","Vendre mieux et développer son portefeuille clients.",["Techniques de vente et de négociation","Prospection et fidélisation","Plan marketing et communication"]],

["Logistique & transport","Organiser les flux de marchandises et de transport.",["Gestion des stocks et approvisionnements","Organisation du transport","Suivi et optimisation des coûts"]]]},


archivage:{t:"Archivage & GED",q:"Archivage et GED",im:["d7","d6","d8","d9","d11","d12","d13"],th:["d7","d11","d13","d9"],i:"De l'organisation physique des archives à la gestion électronique des documents.",p:"Administrations, entreprises, institutions et services d'archives.",m:"Intervention sur mesure après un premier échange et un devis.",it:[
["Organisation d'un service d'archives","Structurer, classer et conserver vos fonds documentaires.",["État des lieux des fonds","Plan de classement","Règles de conservation"]],

["Numérisation des documents","Transformer vos documents papier en fichiers exploitables.",["Réception et préparation des documents","Numérisation","Indexation et contrôle"]],

["Solution informatique : GED","Retrouver et partager vos documents en quelques clics.",["Analyse de vos besoins","Mise en place de la solution","Prise en main par les équipes"]],

["Audit archivistique","Évaluer la situation de vos archives et préconiser des actions.",["Diagnostic de l'existant","Analyse des risques","Recommandations"]]]},


gestion:{t:"Gestion d'entreprise",q:"Gestion d'entreprise",im:["d14","d43","d25"],th:["d43","d25","d14"],i:"Conseils et études pour décider avec des données solides.",p:"Créateurs d'entreprise, dirigeants de PME, porteurs de projets.",m:"Mission définie avec vous, sur devis.",it:[
["Conseils et suivi d'entreprises","Un regard extérieur pour piloter et faire évoluer votre activité.",["Diagnostic de l'organisation","Plan d'actions","Suivi dans la durée"]],

["Étude de faisabilité","Vérifier la viabilité d'un projet avant d'investir.",["Analyse technique et financière","Identification des risques","Conclusions et recommandations"]],

["Étude de marché","Connaître vos clients, vos concurrents et vos opportunités.",["Tendances du marché","Analyse de la concurrence","Cibles et opportunités"]]]},


agricole:{t:"Gestion agricole",q:"Gestion agricole",im:["d19","d18","d22","d21","d23"],th:["d19","d22"],i:"Accompagnement des exploitants et fourniture de produits phytosanitaires.",p:"Exploitants agricoles, coopératives, porteurs de projets agricoles.",m:"Suivi sur mesure, selon votre exploitation.",it:[
["Suivi et conseil en agriculture","Un appui technique et de gestion pour vos cultures.",["Suivi des parcelles","Conseils techniques","Gestion de l'exploitation"]],

["Achat et vente de produits phytosanitaires","Des produits pour protéger vos cultures.",["Approvisionnement","Conseils d'utilisation","Vente aux exploitants"]]]},


projet:{t:"Gestion de projet",q:"Gestion de projet",im:["d44","d43","d24","d25"],th:["d44","d24","d42"],i:"De l'idée à l'évaluation des résultats.",p:"Porteurs de projets, institutions, ONG et entreprises.",m:"Accompagnement ponctuel ou continu, sur devis.",it:[
["Identification et élaboration de projets","Transformer une idée en projet structuré.",["Définition des objectifs","Montage du projet","Plan de financement"]],

["Suivi et évaluation","Mesurer l'avancement et les résultats.",["Indicateurs de suivi","Rapports d'avancement","Évaluation finale"]],

["Prospection","Identifier de nouvelles opportunités et partenaires.",["Recherche d'opportunités","Prise de contact","Suivi des pistes"]]]},


assurance:{t:"Assurance",q:"Assurance / Commercial",im:["d45","d46","d42","d43"],th:["d45","d43"],i:"Conseil et intermédiation pour protéger vos activités et vos biens.",p:"Particuliers, entreprises et institutions.",m:"Étude de vos besoins puis proposition personnalisée.",it:[
["Conseils et vente de produits d'assurance","Trouver la couverture adaptée à votre situation.",["Analyse de vos besoins","Présentation des produits","Souscription"]],

["Intermédiation commerciale","Mettre en relation et faciliter vos transactions.",["Recherche de partenaires","Négociation","Suivi de l'affaire"]]]},


vehicules:{t:"Véhicules & fournitures",q:"Véhicules et fournitures",im:["d28","d27","d33","d29","d30","d31"],th:["d28","d29","d31"],i:"Location de véhicules et équipements de bureau.",p:"Entreprises, institutions et particuliers.",m:"Disponibilités et conditions sur demande.",it:[
["Location de véhicules","Des véhicules disponibles pour vos déplacements.",["Location ponctuelle ou régulière","Véhicules entretenus","Devis sur demande"]],

["Mobilier de bureau","Équiper vos espaces de travail.",["Bureaux et sièges","Rangements","Aménagement"]],

["Consommables informatiques","Les fournitures dont vos équipes ont besoin.",["Cartouches et toners","Accessoires","Livraison sur demande"]]]},


communication:{t:"Communication",q:"Communication et immobilier",im:["d35","d36","d37","d34","d38","d39"],th:["d35","d34"],i:"Supports imprimés et services immobiliers.",p:"Entreprises, institutions, promoteurs et particuliers.",m:"Devis après définition de votre besoin.",it:[
["Impression sur supports","Donner de la visibilité à votre marque.",["Supports imprimés","Personnalisation","Livraison"]],

["Gestion et promotion immobilière","Gérer et valoriser des biens immobiliers.",["Gestion de biens","Promotion de programmes","Conseil"]]]},


food:{t:"SIELE Food",q:"SIELE Food (pause café, déjeuner)",im:["fA","cU","fC","cX","fN","cS","fP","cW","fR","cV","fZ","cY","fH","cT","fO","fK","fQ"],i:"Pauses café et déjeuners pour vos séminaires, formations et réunions. Découvrez nos plats et nos pauses gourmandes.",p:"Organisateurs de séminaires, de formations et de réunions ; entreprises et institutions.",m:"Menus et quantités définis avec vous selon votre groupe. Demandez un devis.",it:[
["Déjeuner","Des repas complets pour vos journées de séminaire, de formation ou de réunion.",["Plats chauds pour vos équipes","Poissons braisés, brochettes, poulet et accompagnements","Quantités adaptées à la taille de votre groupe"],["fA","fP","fR","fC","fN","fZ","fH","fO","fK","fQ"]],

["Pause café","Boissons chaudes, viennoiseries et fruits pour rythmer vos journées.",["Cafés et boissons chaudes","Croissants et viennoiseries","Fruits frais et salades de fruits"],["cU","cX","cS","cW","cV","cY","cT"]]]}
};


D.food.it[0][3]=["fA", "fA1", "fA2", "fA3", "fA4", "fA5", "fA6", "fA7", "fA8", "fB", "fC", "fC2", "fC3", "fF", "fH", "fI", "fJ", "fK", "fL", "fN", "fO", "fP", "fP1", "fP2", "fQ", "fR", "fW1", "fW2", "fZ", "fZ1", "fZ2"];D.food.it[1][3]=["cC1", "cE", "cS", "cT", "cU", "cV", "cW", "cX", "cY"];D.food.im=D.food.it[0][3].concat(D.food.it[1][3]);
function foodHome(){var d=D.food;clearInterval(timer);ex.scrollTop=0;exb.innerHTML='<div class="fh"><h2>'+d.t+'</h2><p class="intro">'+d.i+'</p></div><div class="fcs">'+d.it.map(function(o,i){var L=o[3];return '<article class="fc"><div class="fs">'+L.map(function(m,k){return '<img src="'+P(m)+'" alt="'+o[0]+'"'+(k?'':' class="on"')+'>'}).join('')+'<span class="fcnt">'+L.length+' photos</span></div><div class="fb"><small>'+('0'+(i+1)).slice(-2)+'</small><h3>'+o[0]+'</h3><p>'+o[1]+'</p><ul class="liste">'+o[2].map(function(x){return '<li>'+x+'</li>'}).join('')+'</ul><button class="btn p" data-j="'+i+'">Voir tous les plats →</button></div></article>'}).join('')+'</div>';var sets=[].slice.call(exb.querySelectorAll('.fs')),ix=sets.map(function(){return 0});timer=setInterval(function(){sets.forEach(function(s,i){var im=s.querySelectorAll('img');im[ix[i]].classList.remove('on');ix[i]=(ix[i]+1)%im.length;im[ix[i]].classList.add('on')})},2500)}
var K=Object.keys(D).filter(function(k){return k!='food'}),ex=document.getElementById('ex'),exb=document.getElementById('exb'),cur,timer,slide=0,cj=0;
function chips(){var cc=document.getElementById('chips');cc.innerHTML=(cur=='food'?['food']:K).map(function(k){return '<button class="ch'+(k==cur?' on':'')+'" data-k="'+k+'">'+D[k].t+'</button>'}).join('');var a=cc.querySelector('.on');if(a)cc.scrollLeft=a.offsetLeft-cc.clientWidth/2+a.offsetWidth/2}
function openEx(k,j){cur=k;ex.classList.add('on');document.body.style.overflow='hidden';chips();j==null?home():detail(j)}
function closeEx(){clearInterval(timer);ex.classList.remove('on');document.body.style.overflow=''}
function go(n){var s=exb.querySelectorAll('.sl'),d=exb.querySelectorAll('.dots i');if(!s.length)return;slide=(n+s.length)%s.length;s.forEach(function(e,i){e.classList.toggle('on',i==slide)});d.forEach(function(e,i){e.classList.toggle('on',i==slide)});var cn=document.getElementById('cnt');if(cn)cn.textContent=(slide+1)+' / '+s.length}
function home(){var d=D[cur];if(cur=='food')return foodHome();clearInterval(timer);slide=0;ex.scrollTop=0;
exb.innerHTML='<div class="car'+(d.th?' sm':'')+'"><div id="sls">'+d.im.map(function(m,i){return '<div class="sl'+(i?'':' on')+'" style="--u:url('+P(m)+')"><img src="'+P(m)+'" alt="'+d.t+'" onload="this.classList.toggle(\'w\',this.naturalWidth/this.naturalHeight>1.3&&this.naturalWidth>=800);if(this.naturalWidth<800)this.style.maxHeight=this.naturalHeight*1.8+\'px\'"></div>'}).join('')+'</div><button class="ar l" data-go="-1" aria-label="Précédent">‹</button><button class="ar r" data-go="1" aria-label="Suivant">›</button><div class="cap2"><h2>'+d.t+'</h2>'+(d.im.length>8?'<div class="dots"><b id="cnt" style="color:#fff;font-size:13px">1 / '+d.im.length+'</b></div>':'<div class="dots">'+d.im.map(function(_,i){return '<i data-dot="'+i+'" class="'+(i?'':'on')+'"></i>'}).join('')+'</div>')+'</div></div><p class="intro">'+d.i+'</p><div class="eyebrow" style="margin-top:26px">'+d.it.length+' '+(d.lab||'offres')+' — cliquez pour voir le détail</div><div class="og">'+d.it.map(function(o,i){return '<button class="o" style="animation-delay:'+i*60+'ms" data-j="'+i+'">'+(d.th?'<img class="oi" src="'+P(d.th[i%d.th.length])+'" alt="'+o[0]+'">':'')+'<small>'+('0'+(i+1)).slice(-2)+'</small><h3>'+o[0]+'</h3><p>'+o[1]+'</p><span>Découvrir →</span></button>'}).join('')+'</div>';
var c=exb.querySelector('.car');if(d.im.length>1){timer=setInterval(function(){go(slide+1)},(D[cur].im.length>8?3000:4500));var x0;c.ontouchstart=function(e){x0=e.touches[0].clientX};c.ontouchend=function(e){var dx=e.changedTouches[0].clientX-x0;if(Math.abs(dx)>40)go(slide+(dx<0?1:-1))}}else exb.querySelectorAll('.ar,.dots').forEach(function(e){e.style.display='none'})}
function detail(j){var d=D[cur],o=d.it[j],n=d.it.length,S=o[3]||d.im,L=Math.min(3,S.length),ph=[];for(var k=0;k<L;k++)ph.push(S[(j*(o[3]?0:1)+k)%S.length]);cj=j;clearInterval(timer);ex.scrollTop=0;
var oth=d.it.map(function(x,i){return i}).filter(function(i){return i!=j&&cur!='formation'}).slice(0,3);
exb.innerHTML='<p class="crumb"><button data-back>‹ Toutes les offres : '+d.t+'</button></p><div class="fa-ent"><h1>'+o[0]+'</h1><button class="btn p" data-q>Demander un devis</button></div><div class="fa-photos'+(L<3?' two':'')+(cur=='formation'?' sm':'')+'">'+ph.map(function(m){return '<div class="p"><img src="'+P(m)+'" alt="'+o[0]+'"></div>'}).join('')+'</div><div class="infos"><div><p class="dsc">'+o[1]+'</p><h2>Ce que comprend l\'offre</h2><ul class="liste">'+o[2].map(function(x){return '<li>'+x+'</li>'}).join('')+'</ul></div><div class="boite"><h3>Infos pratiques</h3><p><b>Domaine :</b> '+d.t+'</p><p><b>Pour qui :</b> '+d.p+'</p><p><b>Modalités :</b> '+d.m+'</p></div></div>'+(o[3]?'<h2 class="mt">Tous nos plats ('+o[3].length+')</h2><div class="fg">'+o[3].map(function(m){return '<img src="'+P(m)+'" alt="'+o[0]+'" loading="lazy">'}).join('')+'</div>':'')+(oth.length?'<h2 class="mt">À découvrir aussi</h2><div class="og">'+oth.map(function(i){var x=d.it[i];return '<button class="o" data-j="'+i+'"><small>'+('0'+(i+1)).slice(-2)+'</small><h3>'+x[0]+'</h3><p>'+x[1]+'</p><span>Découvrir →</span></button>'}).join('')+'</div>':'');
if(S.length>L){var t=0,im=exb.querySelectorAll('.fa-photos .p img');timer=setInterval(function(){t++;im.forEach(function(e,k){setTimeout(function(){e.classList.add('fd');setTimeout(function(){e.src=P(S[(j*(o[3]?0:1)+k+t*L)%S.length]);e.classList.remove('fd')},450)},k*350)})},3500)}}
ex.addEventListener('click',function(e){var t=e.target.closest('[data-k],[data-j],[data-back],[data-tab],[data-go],[data-dot],[data-close],[data-q],[data-nav]');if(!t)return;var a=t.dataset;
if('close' in a)closeEx();else if(a.k){cur=a.k;chips();home()}else if(a.j!=null)detail(+a.j);else if('back' in a)home();else if(a.tab!=null)panel(cj,+a.tab);else if(a.go)go(slide+ +a.go);else if(a.dot!=null)go(+a.dot);else if(a.nav!=null)detail(+a.nav);else if('q' in a&&cur=='food'){closeEx();document.getElementById('contact').scrollIntoView({behavior:'smooth'})}else if('q' in a){var q=D[cur].q;closeEx();var f=document.getElementById('quote');f.elements.domaine.value=q;document.querySelector('.bar').scrollIntoView({behavior:'smooth'});f.elements.nom.focus({preventScroll:true})}});
document.addEventListener('keydown',function(e){if(!ex.classList.contains('on'))return;if(e.key=='Escape')closeEx();if(e.key=='ArrowRight')go(slide+1);if(e.key=='ArrowLeft')go(slide-1)});
document.addEventListener('click',function(e){var t=e.target.closest('[data-open]');if(!t||ex.contains(t))return;e.preventDefault();var p=t.dataset.open.split(':');openEx(p[0],p[1]==null?null:+p[1])});
document.addEventListener('keydown',function(e){if(e.key=='Enter'&&e.target.matches&&e.target.matches('.card[data-open]'))e.target.click()});
/* carrousel hero */
var tr=document.getElementById('track');
document.querySelectorAll('[data-sl]').forEach(function(b){b.addEventListener('click',function(){tr.scrollBy({left:+b.dataset.sl*219,behavior:'smooth'})})});
tr.addEventListener('scroll',function(){document.getElementById('cc').textContent=('0'+(Math.min(7,Math.round(tr.scrollLeft/219))+1)).slice(-2)});

/* menu 3 tirets */
var bg=document.getElementById('burger'),nv=document.getElementById('nav');
function menu(o){nv.classList.toggle('open',o);bg.setAttribute('aria-expanded',o)}
bg.addEventListener('click',function(e){e.stopPropagation();menu(!nv.classList.contains('open'))});
nv.addEventListener('click',function(){menu(false)});
document.addEventListener('click',function(e){if(!e.target.closest('.menu'))menu(false)});
document.addEventListener('keydown',function(e){if(e.key=='Escape')menu(false)});
/* carrousel du hero : défilement automatique */
var hv=false,ht=setInterval(function(){if(hv||ex.classList.contains('on'))return;if(tr.scrollLeft+tr.clientWidth>=tr.scrollWidth-6)tr.scrollTo({left:0,behavior:'smooth'});else tr.scrollBy({left:219,behavior:'smooth'})},3000);
/* images des cartes qui défilent seules */
function cyc(img,list,ms,off){if(list.length<2)return;var i=0;setTimeout(function(){setInterval(function(){if(ex.classList.contains('on'))return;i=(i+1)%list.length;img.classList.add('fd');setTimeout(function(){img.src=P(list[i]);img.classList.remove('fd')},600)},ms)},off)}
document.querySelectorAll('.card[data-open]').forEach(function(c,n){var k=c.dataset.open,im=c.querySelector('img');if(D[k]){var cur0=c.dataset.rep||'';var L=[cur0].concat(D[k].im.filter(function(x){return x!=cur0}));cyc(im,L,4000,n*500)}});
var fr=document.querySelector('#formation .round img');if(fr)cyc(fr,['d4'].concat(D.formation.im.filter(function(x){return x!='d4'})),4000,0);
/* apparition au défilement */
var io=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.15});
document.querySelectorAll('.reveal,.sec-head,.stat,.round').forEach(function(e,i){e.classList.add('reveal');e.style.transitionDelay=(i%4)*70+'ms';io.observe(e)});

/* fond du hero : défilement automatique */
(function(){var im=document.querySelectorAll('#hbg img');if(im.length<2)return;var i=0;setInterval(function(){im[i].classList.remove('on');i=(i+1)%im.length;im[i].classList.add('on')},5000)})();

/* diaporama SIELE Food + compteurs */
(function(){var im=document.querySelectorAll('#fsl img'),i=0;if(im.length>1)setInterval(function(){im[i].classList.remove('on');i=(i+1)%im.length;im[i].classList.add('on')},2600)})();
(function(){var o=new IntersectionObserver(function(en){en.forEach(function(x){if(!x.isIntersecting)return;o.unobserve(x.target);var e=x.target,n=+e.dataset.count,t0=null;function f(t){t0=t0||t;var p=Math.min(1,(t-t0)/1400);e.textContent=Math.round(n*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(f)}requestAnimationFrame(f)})},{threshold:.5});document.querySelectorAll('[data-count]').forEach(function(e){o.observe(e)})})();

/* effets : progression, en-tête, parallaxe, tilt, aimant, halo */
(function(){var hd=document.querySelector('header'),pg=document.getElementById('prog');
function sc(){var m=document.documentElement.scrollHeight-innerHeight;pg.style.width=(m>0?scrollY/m*100:0)+'%';hd.classList.toggle('sc',scrollY>40)}
addEventListener('scroll',sc,{passive:true});sc();
if(!matchMedia('(hover:hover)').matches)return;
var hero=document.querySelector('.hero');
hero.addEventListener('mousemove',function(e){var r=hero.getBoundingClientRect();hero.style.setProperty('--mx',((e.clientX-r.left)/r.width-.5).toFixed(3));hero.style.setProperty('--my',((e.clientY-r.top)/r.height-.5).toFixed(3))});
document.querySelectorAll('.tile').forEach(function(t){t.addEventListener('mousemove',function(e){var r=t.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;t.style.setProperty('--ry',(x-.5)*9+'deg');t.style.setProperty('--rx',(.5-y)*9+'deg');t.style.setProperty('--px',x*100+'%');t.style.setProperty('--py',y*100+'%')});t.addEventListener('mouseleave',function(){t.style.setProperty('--rx','0deg');t.style.setProperty('--ry','0deg')})});
document.querySelectorAll('.btn.pill,.btn.w,.nav-cta').forEach(function(b){b.addEventListener('mousemove',function(e){var r=b.getBoundingClientRect();b.style.transform='translate('+(e.clientX-r.left-r.width/2)*.2+'px,'+(e.clientY-r.top-r.height/2)*.3+'px)'});b.addEventListener('mouseleave',function(){b.style.transform=''})});
var g=document.getElementById('glow');addEventListener('mousemove',function(e){g.style.transform='translate('+(e.clientX-230)+'px,'+(e.clientY-230)+'px)'})})();
