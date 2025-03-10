"use strict";(()=>{var E2=Object.defineProperty;var A2=(i,t,e)=>t in i?E2(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var ht=(i,t,e)=>(A2(i,typeof t!="symbol"?t+"":t,e),e);function Cs(i,t){let e=$(i),n=gsap.timeline();if(!t){if(e.is('[data-animation="heading"]')){let s=e.attr("data-split-type")||"word",o=new SplitType(e,{types:"words, chars",tagName:"span"});n.from(e.find(`.${s}`),{y:"2rem",opacity:0,duration:1,ease:"power3.out",stagger:.1}),n.to([e,e.find(`.${s}`)],{visibility:"visible"},"<")}if(e.is('[data-animation="item"]')){let s=e.attr("data-stagger")||.2;n.fromTo(e,{y:"2rem",opacity:0},{y:"0rem",opacity:1,visibility:"visible",stagger:s})}if(e.is('[data-animation="stagger"]')){let s=e.find('[data-animation="stagger-item"]'),o=e.attr("data-stagger")||.1;gsap.set([e,s],{visibility:"visible",immediateRender:!0}),n.from(s,{y:"1rem",opacity:0,stagger:o,clearProps:"visibility",overwrite:"auto",force3D:!0})}if(e.is('[data-animation="writer"]')){let s=e.text();e.text(""),n.to($elt,{duration:2,text:s,ease:"none"})}return n}}var Di=class{constructor(){ht(this,"currentLink");ht(this,"isMobile");ht(this,"$content");ht(this,"intObs");this.$content=$(".page-main"),this.intObs=new IntersectionObserver(this.onIntersection.bind(this),{threshold:.2})}init(){$("[data-animation]").each((t,e)=>{$(e).closest(".section.cc-hero").length||this.intObs.observe(e)})}onIntersection(t,e){t.forEach(n=>{let s=n.target;n.isIntersecting&&!s.hasAttribute("animated")&&(s.setAttribute("animated",""),e.unobserve(s),Cs(s,this.isMobile))})}};var Ra=window.innerWidth,Ii={};var T2=(i,t,e,n,s)=>{let o=$(i).add(t);o.length<2||(Ii[e]=0,Ii[e]=Ii[e]||0,o.each(function(){let r=`${e}_${Ii[e]}`;R2(this,t,r,[".swiper-arrow",".swiper-nav",".swiper-drag-wrapper"]);let a=D2(n,r);I2(this,t,r,e,a,s),Ii[e]++}))},R2=(i,t,e,n)=>{n.forEach(s=>{$(i).find(s).addClass(e)}),$(i).find(t).addClass(e)},D2=(i,t)=>{let e={el:`.swiper-nav.${t}`,type:"bullets",bulletActiveClass:"cc-active",bulletClass:"swiper-dot",clickable:!0},n=i.pagination?{...e,...i.pagination}:e;return{speed:1e3,navigation:{prevEl:`.swiper-arrow.prev.${t}`,nextEl:`.swiper-arrow.next.${t}`},pagination:n,...i}},I2=(i,t,e,n,s,o)=>{swipers[n]=swipers[n]||{},swipers[n][e]=swipers[n][e]||{};let r=swipers[n][e],a=r.swiperInstance,l=o==="desktop"&&window.matchMedia("(min-width: 992px)").matches,c=o==="mobile"&&window.matchMedia("(min-width: 0px) and (max-width: 991px)").matches,h=o==="all",u=()=>{r.observer&&(r.observer.disconnect(),delete r.observer),a&&(a.destroy(!0,!0),delete swipers[n][e],console.log("Swiper destroyed for",t,"with uniqueKey",e))};!l&&o==="desktop"||!c&&o==="mobile"||!h&&o==="all"?u():(l||c||h)&&!a&&(()=>{r.observer&&r.observer.disconnect();let m=$(`${t}.${e}`)[0];if(!m)return;let y=new IntersectionObserver(x=>{x.forEach(f=>{if(f.isIntersecting&&(l||c||h)&&!a){let p=new Swiper(`${t}.${e}`,s);swipers[n][e]={swiperInstance:p,mode:l?"desktop":c?"mobile":"all",initialized:!0},y.disconnect(),console.log("Swiper initialized for",t,"with uniqueKey",e)}})},{});swipers[n][e].observer=y,y.observe(m)})()},Da=i=>{i.forEach(t=>{T2(...t)})},Ia=(i,t)=>{Da(i),window.addEventListener("resize",function(){window.innerWidth!==Ra&&(Ra=window.innerWidth,Da(i))})};var Pi=class{constructor(){Ia([[".section.cc-about",".about-wrap","about-slider",{slidesPerView:"auto",spaceBetween:32},"mobile"],[".section.cc-team",".team-list-wrap","team-slider",{slidesPerView:"auto",spaceBetween:16},"mobile"],[".section.cc-exp",".experience_slider","exp-slider",{slidesPerView:"auto",spaceBetween:32},"mobile"],[".section.cc-exp-cards",".exp-cards_wrap","exp-cards-slider",{slidesPerView:"auto",spaceBetween:32},"mobile"],[".section.cc-ceo",".ceo_slider","ceo-slider",{slidesPerView:"auto",spaceBetween:16},"mobile"]])}};var Li=class{constructor(){ht(this,"sections");this.sections=$(".section_part")}start(){this.sections.each((t,e)=>{if(t===this.sections.length-1)return;let n=this.sections[t+1],o=$(e).outerHeight()<=window.innerHeight;$(e).css({position:"relative",zIndex:1}),$(n).css({position:"relative",zIndex:2}),ScrollTrigger.create({trigger:e,start:o?"top top":"bottom bottom",endTrigger:n,end:"top top",pin:!0,pinSpacing:!1,anticipatePin:1,onEnter:()=>{$(e).css({zIndex:1}),$(n).css({zIndex:2})},onEnterBack:()=>{$(e).css({zIndex:1}),$(n).css({zIndex:2})},onLeave:()=>{$(e).css({zIndex:1}),$(n).css({zIndex:2})},onLeaveBack:()=>{$(e).css({zIndex:1}),$(n).css({zIndex:2})}})})}kill(){ScrollTrigger.getAll().forEach(t=>{t.vars.pin&&t.kill()}),this.sections.each((t,e)=>{$(e).css({position:"",zIndex:""})})}};var Bi=class{constructor(){ht(this,"modalGroup");ht(this,"modals");ht(this,"modalTargets");this.modalGroup=document.querySelector("[data-modal-group-status]"),this.modals=document.querySelectorAll("[data-modal-name]"),this.modalTargets=document.querySelectorAll("[data-modal-target]"),this.modalTargets.forEach(t=>{t.addEventListener("click",this.openModal.bind(this))}),document.querySelectorAll("[data-modal-close]").forEach(t=>{t.addEventListener("click",this.closeAllModals.bind(this))}),document.addEventListener("keydown",t=>{t.key==="Escape"&&this.closeAllModals()})}openModal(t){let e=t.currentTarget,n=e.getAttribute("data-modal-target");if(this.modalTargets.forEach(s=>s.setAttribute("data-modal-status","not-active")),this.modals.forEach(s=>s.setAttribute("data-modal-status","not-active")),n==="team"){let s=$(e).closest(".team-list-item"),o=s.parent().index(),r=s.find("[data-team-name]").text(),a=s.find("[data-team-role]").text(),l=$(e).css("background-color");document.querySelector(`[data-modal-name="${n}"]`).style.backgroundColor=l,$("[data-target-name]").text(r),$("[data-target-role]").text(a),$(".team_visual .w-dyn-item").hide(),$(".team_visual .w-dyn-item").eq(o).fadeIn(),$(".team_role-rich-item").hide(),$(".team_role-rich-item").eq(o).show()}document.querySelector(`[data-modal-target="${n}"]`).setAttribute("data-modal-status","active"),document.querySelector(`[data-modal-name="${n}"]`).setAttribute("data-modal-status","active"),this.modalGroup&&this.modalGroup.setAttribute("data-modal-group-status","active"),window.dispatchEvent(new CustomEvent("modal_open"))}closeAllModals(){this.modalTargets.forEach(t=>t.setAttribute("data-modal-status","not-active")),this.modalGroup&&this.modalGroup.setAttribute("data-modal-group-status","not-active"),window.dispatchEvent(new CustomEvent("modal_closed"))}};var Ui=class{constructor(){ht(this,"_isMobile");ht(this,"navbar");ht(this,"wNavBtn");ht(this,"navLinks");ht(this,"onScrollBound");ht(this,"_currentSection");ht(this,"navContainer");ht(this,"navBg");this.navbar=$(".nav"),this.wNavBtn=$(".w-nav-button"),this.navLinks=$(".nav_menu-link"),this.navContainer=document.querySelector(".nav_menu-inner"),this.navBg=document.querySelector(".nav_menu-bg"),this.contactBtns=document.querySelectorAll(".btn.cc-nav"),this.onScrollBound=this.onScroll.bind(this),this.navLinks.on("click",t=>{t.preventDefault();let e=$(t.currentTarget).attr("id");this.mobileScrollToSection(e),window.history.pushState({},"",`${document.location.origin}#${e}`),window.dispatchEvent(new CustomEvent("clicked_nav",{detail:e}))}),$(".nav_brand").on("click",()=>{window.dispatchEvent(new CustomEvent("clicked_nav",{detail:"none"}))}),this.createObserver(this.wNavBtn,this.menuCallback.bind(this)),window.addEventListener("hashchange",this.deepLink.bind(this))}get isMobile(){return this._isMobile}set isMobile(t){t!==this._isMobile&&(t?window.addEventListener("scroll",this.onScrollBound):window.removeEventListener("scroll",this.onScrollBound)),this._isMobile=t}get currentSection(){return this._currentSection}set currentSection(t){this._currentSection=t;let e=this.navLinks.filter(`#${t}`);this.navLinks.removeClass("active"),e.addClass("active"),this.animateNavBackground(e[0]),this.updateContactBtn(t)}deepLink(){let t=document.location.hash.substring(1);t==="top"&&(t="none"),t.trim()!==""&&window.dispatchEvent(new CustomEvent("clicked_nav",{detail:t}))}mobileScrollToSection(t){if(this.isMobile){t==="top"&&(t="none");let e=$(`.section_part[data-section="${t}"]`);if(e.length){let n=e.parent(".pin-spacer"),s;n.length?s=n.offset().top:s=e.offset().top,gsap.to(window,{scrollTo:{y:s},duration:0,ease:"power2.out"})}}}createObserver(t,e){t.each((n,s)=>{new MutationObserver(r=>{r.forEach(a=>{a.type==="attributes"&&a.attributeName==="class"&&e(a.target)})}).observe(s,{attributes:!0,attributeFilter:["class"]})})}updateContactBtn(t){!this.isMobile&&t==="none"?this.contactBtns.forEach(e=>e.classList.add("start")):this.contactBtns.forEach(e=>e.classList.remove("start"))}animateNavBackground(t){if(!t){this.navBg.style.opacity="0";return}let e=this.navContainer.getBoundingClientRect(),n=t.getBoundingClientRect(),s=n.left-e.left;gsap.to(this.navBg,{x:s,opacity:1,width:n.width,height:n.height,duration:.4,ease:"power2.out"})}menuCallback(){this.wNavBtn.hasClass("w--open")?this.navbar.addClass("open"):this.navbar.removeClass("open")}onScroll(){this.navbar.length&&this.isMobile&&(window.scrollY>this.navbar.height()/2?this.navbar.hasClass("active")||this.navbar.addClass("active"):this.navbar.hasClass("active")&&this.navbar.removeClass("active"))}};var Fi=class{constructor(){ht(this,"SEEN_PRELOADED_KEY","seen_preloader");ht(this,"isMobile",!1);ht(this,"skip");this.skip=window.sessionStorage.getItem(this.SEEN_PRELOADED_KEY)==="true"||document.location.hash!=="",this.skip||window.sessionStorage.setItem(this.SEEN_PRELOADED_KEY,"true")}start(){let t=$(".page-load"),e=$(".page-load_item"),n=$(".page-load_bg.cc-top"),s=$(".page-load_bg.cc-bottom"),o=$(".page-main"),r=$(".section"),a=$(".nav_wrapper");window.dispatchEvent(new CustomEvent("preloader_begin"));let l=gsap.timeline({onComplete:()=>{$(".section.cc-hero").find("[data-animation]").each((h,u)=>{Cs($(u),this.isMobile)}),window.dispatchEvent(new CustomEvent("preloader_complete"))}});o[0].style.display="flex",gsap.set(r,{autoAlpha:0}),gsap.set(a,{autoAlpha:0}),e.each(function(c){c===0&&(l.fromTo($(this),{yPercent:50,opacity:0},{yPercent:0,opacity:1,delay:1,duration:.5,display:"block"}),l.to(n,{xPercent:-5,rotate:-3},"<"),l.to(s,{xPercent:5,rotate:-3},"<"),l.to($(this),{opacity:0,delay:1.5})),c===1&&(l.fromTo($(this),{opacity:0,scale:.8},{display:"block",opacity:1,scale:1}),l.to(n,{xPercent:-10,rotate:-6},"<"),l.to(s,{xPercent:10,rotate:-6},"<"),l.to($(this),{opacity:0,delay:.7})),c===2&&(l.to($(this),{display:"block"}),l.fromTo($(this).find("span"),{yPercent:50,opacity:0},{yPercent:0,opacity:1}),l.to(n,{xPercent:-15,rotate:-9},"<"),l.to(s,{xPercent:15,rotate:-9},"<"),l.to($(this).find("span"),{yPercent:0,opacity:0,stagger:{each:.1},delay:3},"<"),l.to(n,{yPercent:-100},"<"),l.to(s,{xPercent:100},"<"),l.to($(this),{opacity:0}))}),l.to(t,{autoAlpha:0,duration:1,ease:"linear"},"<"),l.to(r,{autoAlpha:1,duration:1,ease:"linear"},"<"),l.to(a,{autoAlpha:1,display:"block",duration:1,ease:"linear"},"<"),this.skip&&l.progress(1)}};var xn=class{constructor(t){this.sections=t;ht(this,"paused",!1);ht(this,"isAnimating",!1);ht(this,"isScrollingWithinSection",!1);ht(this,"currentSectionIdx",0);ht(this,"prevDir",null);ht(this,"prevScrollStrength",0);ht(this,"targetX",0);ht(this,"lastScrollTime",0);ht(this,"intObs");ht(this,"onIntersectionBound",this.onIntersection.bind(this));ht(this,"onMouseWheelBound",this.onMouseWheel.bind(this));ht(this,"onKeyDownBound",this.onKeyDown.bind(this));ht(this,"onResizeBound",this.onResize.bind(this));gsap.registerPlugin(ScrollToPlugin),this.intObs=new IntersectionObserver(this.onIntersectionBound,{threshold:.2})}start(){this.currentSectionIdx=0,window.scrollTo({left:0,top:0}),this.paused=!1,this.sections.forEach(t=>this.intObs.observe(t)),window.addEventListener("wheel",this.onMouseWheelBound,{passive:!1}),window.addEventListener("keydown",this.onKeyDownBound,{passive:!1}),window.addEventListener("resize",this.onResizeBound)}kill(){this.isAnimating=!1,this.isScrollingWithinSection=!1,this.prevScrollStrength=0,this.targetX=0,this.prevDir=null,this.intObs.disconnect(),gsap.killTweensOf(window),window.removeEventListener("wheel",this.onMouseWheelBound),window.removeEventListener("keydown",this.onKeyDownBound),window.removeEventListener("resize",this.onResizeBound),gsap.killTweensOf(window)}gotoIdx(t,e=!1,n=!1){if(this.isAnimating)return;let s=this.currentSectionIdx<t?1:0;this.currentSectionIdx=t,this.isAnimating=!e,this.isScrollingWithinSection=!1;let o=this.sections[this.currentSectionIdx];this.targetX=o.offsetLeft,n&&s===0&&o.offsetWidth>window.innerWidth&&(this.targetX=o.offsetLeft+o.offsetWidth-window.innerWidth),e||window.dispatchEvent(new CustomEvent("scrolling",{detail:s})),gsap.to(window,{scrollTo:{x:this.targetX,y:0},duration:e?0:xn.SCROLL_DUR,ease:xn.SCROLL_EASE_BETWEEN_SECTIONS,onComplete:()=>{this.isAnimating=!1}})}scrollWithinSection(t){if(this.isAnimating)return;let e=t.deltaY,n=e>0?1:0;if(!this.isScrollingWithinSection&&Math.abs(e)<this.prevScrollStrength&&n===this.prevDir)return!0;this.targetX+=e*xn.SCROLL_STRENGTH_MULTIPLIER;let s=this.sections[this.currentSectionIdx],o=s.offsetLeft,r=s.offsetLeft+s.offsetWidth-window.innerWidth;this.targetX=this.clamp(o,this.targetX,r),this.isScrollingWithinSection||(this.isScrollingWithinSection=!0,this.smoothScrollWithinSection());let a=window.scrollX,l=30;return n===0&&a>o+l||n===1&&a<r-l}smoothScrollWithinSection(){let t=window.scrollX,e=this.targetX-t,n=xn.SCROLL_EASE_WITHIN_SECTION;gsap.set(window,{scrollTo:{x:t+e*n,y:0}}),this.isScrollingWithinSection&&requestAnimationFrame(this.smoothScrollWithinSection.bind(this))}go(t){this.prevDir=t;let e=this.currentSectionIdx+(t===1?1:-1);e=this.clamp(0,e,this.sections.length-1),e!==this.currentSectionIdx&&this.gotoIdx(e,!1,!0)}clamp(t,e,n){return Math.min(Math.max(e,t),n)}onIntersection(t){let e=t.filter(n=>n.isIntersecting);if(e.length){let n=e[0].target,s=[...this.sections].findIndex(o=>o===n);this.currentSectionIdx=s,window.dispatchEvent(new CustomEvent("go_to_section",{detail:s}))}}onMouseWheel(t){if(this.paused)return;t.preventDefault(),t.stopImmediatePropagation();let e=t.deltaY;if(Math.abs(e)<xn.MIN_SCROLL_STRENGTH){this.prevScrollStrength=0;return}let n=performance.now(),s=n-this.lastScrollTime;if(this.sections[this.currentSectionIdx].offsetWidth>window.innerWidth&&this.scrollWithinSection(t))return;let r=e>0?1:0;s>xn.MOMENTUM_TIMEOUT&&(Math.abs(e)-this.prevScrollStrength>20||r!==this.prevDir)&&(this.lastScrollTime=n,this.go(r)),this.prevScrollStrength=Math.abs(e)}onKeyDown(t){if(this.paused)return;let e=t.target.tagName.toLowerCase();if(e==="input"||e==="textarea"||e==="select"||t.target.isContentEditable)return;let n;if(t.key==="ArrowDown"||t.key==="ArrowRight")n=1;else if(t.key==="ArrowUp"||t.key==="ArrowLeft")n=0;else return;if(this.sections[this.currentSectionIdx].offsetWidth>window.innerWidth){let r=n===1?300:-300;if(this.scrollWithinSection(new WheelEvent("wheel",{deltaY:r})))return}this.go(n)}onResize(){if(this.paused)return;let t=this.sections[this.currentSectionIdx];this.targetX=t.offsetLeft,gsap.set(window,{scrollTo:{x:this.targetX,y:0}}),this.isAnimating=!1}},be=xn;ht(be,"SCROLL_DUR",.6),ht(be,"SCROLL_EASE_BETWEEN_SECTIONS","power2.out"),ht(be,"SCROLL_EASE_WITHIN_SECTION",.1),ht(be,"SCROLL_STRENGTH_MULTIPLIER",.6),ht(be,"MIN_SCROLL_STRENGTH",10),ht(be,"MOMENTUM_TIMEOUT",250);var lo="173";var $a=0,Ur=1,Ja=2;var Fr=1,Ka=2,tn=3,dn=0,Me=1,He=2,Cn=0,Gn=1,Nr=2,Or=3,zr=4,Qa=5,Tn=100,ja=101,t3=102,e3=103,n3=104,i3=200,s3=201,o3=202,r3=203,Ns=204,Os=205,a3=206,l3=207,c3=208,h3=209,p3=210,u3=211,d3=212,f3=213,m3=214,co=0,ho=1,po=2,Wn=3,uo=4,fo=5,mo=6,go=7,kr=0,g3=1,C3=2,yn=0,y3=1,_3=2,x3=3,v3=4,M3=5,S3=6,b3=7;var Vr=300,$n=301,Jn=302,Co=303,yo=304,ss=306,zs=1e3,An=1001,ks=1002,ze=1003,w3=1004;var os=1005;var Le=1006,_o=1007;var en=1008;var nn=1009,Hr=1010,Gr=1011,Mi=1012,xo=1013,Ln=1014,sn=1015,Si=1016,vo=1017,Mo=1018,Kn=1020,Wr=35902,Xr=1021,qr=1022,Ge=1023,Zr=1024,Yr=1025,Hn=1026,Xn=1027,$r=1028,So=1029,Jr=1030,bo=1031;var wo=1033,rs=33776,as=33777,ls=33778,cs=33779,Eo=35840,Ao=35841,To=35842,Ro=35843,Do=36196,Io=37492,Po=37496,Lo=37808,Bo=37809,Uo=37810,Fo=37811,No=37812,Oo=37813,zo=37814,ko=37815,Vo=37816,Ho=37817,Go=37818,Wo=37819,Xo=37820,qo=37821,hs=36492,Zo=36494,Yo=36495,Kr=36283,$o=36284,Jo=36285,Ko=36286;var Hi=2300,Vs=2301,Fs=2302,Tr=2400,Rr=2401,Dr=2402;var E3=3200,A3=3201;var T3=0,R3=1,_n="",Ie="srgb",qn="srgb-linear",Gi="linear",Kt="srgb";var kn=7680;var Ir=519,D3=512,I3=513,P3=514,Qr=515,L3=516,B3=517,U3=518,F3=519,Pr=35044;var jr="300 es",Je=2e3,Wi=2001;var fn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,t);t.target=null}}},ge=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var rr=Math.PI/180,Hs=180/Math.PI;function ps(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ge[i&255]+ge[i>>8&255]+ge[i>>16&255]+ge[i>>24&255]+"-"+ge[t&255]+ge[t>>8&255]+"-"+ge[t>>16&15|64]+ge[t>>24&255]+"-"+ge[e&63|128]+ge[e>>8&255]+"-"+ge[e>>16&255]+ge[e>>24&255]+ge[n&255]+ge[n>>8&255]+ge[n>>16&255]+ge[n>>24&255]).toLowerCase()}function Ut(i,t,e){return Math.max(t,Math.min(e,i))}function P2(i,t){return(i%t+t)%t}function ar(i,t,e){return(1-e)*i+e*t}function Ni(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function we(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Wt=class{constructor(t=0,e=0){Wt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ut(this.x,t.x,e.x),this.y=Ut(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ut(this.x,t,e),this.y=Ut(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ut(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ut(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*n-r*s+t.x,this.y=o*s+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Dt=class{constructor(t,e,n,s,o,r,a,l,c){Dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,l,c)}set(t,e,n,s,o,r,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=o,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],m=n[5],y=n[8],x=s[0],f=s[3],p=s[6],E=s[1],b=s[4],S=s[7],L=s[2],A=s[5],D=s[8];return o[0]=r*x+a*E+l*L,o[3]=r*f+a*b+l*A,o[6]=r*p+a*S+l*D,o[1]=c*x+h*E+u*L,o[4]=c*f+h*b+u*A,o[7]=c*p+h*S+u*D,o[2]=d*x+m*E+y*L,o[5]=d*f+m*b+y*A,o[8]=d*p+m*S+y*D,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*r*h-e*a*c-n*o*h+n*a*l+s*o*c-s*r*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*r-a*c,d=a*l-h*o,m=c*o-r*l,y=e*u+n*d+s*m;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/y;return t[0]=u*x,t[1]=(s*c-h*n)*x,t[2]=(a*n-s*r)*x,t[3]=d*x,t[4]=(h*e-s*l)*x,t[5]=(s*o-a*e)*x,t[6]=m*x,t[7]=(n*l-c*e)*x,t[8]=(r*e-n*o)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,o,r,a){let l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*r+c*a)+r+t,-s*c,s*l,-s*(-c*r+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(lr.makeScale(t,e)),this}rotate(t){return this.premultiply(lr.makeRotation(-t)),this}translate(t,e){return this.premultiply(lr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},lr=new Dt;function ta(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function yi(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function N3(){let i=yi("canvas");return i.style.display="block",i}var Pa={};function Qn(i){i in Pa||(Pa[i]=!0,console.warn(i))}function O3(i,t,e){return new Promise(function(n,s){function o(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}function z3(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function k3(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var La=new Dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ba=new Dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function L2(){let i={enabled:!0,workingColorSpace:qn,spaces:{},convert:function(s,o,r){return this.enabled===!1||o===r||!o||!r||(this.spaces[o].transfer===Kt&&(s.r=un(s.r),s.g=un(s.g),s.b=un(s.b)),this.spaces[o].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[o].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===Kt&&(s.r=Ci(s.r),s.g=Ci(s.g),s.b=Ci(s.b))),s},fromWorkingColorSpace:function(s,o){return this.convert(s,this.workingColorSpace,o)},toWorkingColorSpace:function(s,o){return this.convert(s,o,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===_n?Gi:this.spaces[s].transfer},getLuminanceCoefficients:function(s,o=this.workingColorSpace){return s.fromArray(this.spaces[o].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,o,r){return s.copy(this.spaces[o].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[qn]:{primaries:t,whitePoint:n,transfer:Gi,toXYZ:La,fromXYZ:Ba,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ie},outputColorSpaceConfig:{drawingBufferColorSpace:Ie}},[Ie]:{primaries:t,whitePoint:n,transfer:Kt,toXYZ:La,fromXYZ:Ba,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ie}}}),i}var Ht=L2();function un(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ci(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var oi,Gs=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{oi===void 0&&(oi=yi("canvas")),oi.width=t.width,oi.height=t.height;let n=oi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=oi}return e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=yi("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=un(o[r]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(un(e[n]/255)*255):e[n]=un(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},B2=0,Xi=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:B2++}),this.uuid=ps(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(cr(s[r].image)):o.push(cr(s[r]))}else o=cr(s);n.url=o}return e||(t.images[this.uuid]=n),n}};function cr(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Gs.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var U2=0,de=class extends fn{constructor(t=de.DEFAULT_IMAGE,e=de.DEFAULT_MAPPING,n=An,s=An,o=Le,r=en,a=Ge,l=nn,c=de.DEFAULT_ANISOTROPY,h=_n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:U2++}),this.uuid=ps(),this.name="",this.source=new Xi(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Wt(0,0),this.repeat=new Wt(1,1),this.center=new Wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Vr)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case zs:t.x=t.x-Math.floor(t.x);break;case An:t.x=t.x<0?0:1;break;case ks:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case zs:t.y=t.y-Math.floor(t.y);break;case An:t.y=t.y<0?0:1;break;case ks:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};de.DEFAULT_IMAGE=null;de.DEFAULT_MAPPING=Vr;de.DEFAULT_ANISOTROPY=1;var ne=class{constructor(t=0,e=0,n=0,s=1){ne.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s+r[12]*o,this.y=r[1]*e+r[5]*n+r[9]*s+r[13]*o,this.z=r[2]*e+r[6]*n+r[10]*s+r[14]*o,this.w=r[3]*e+r[7]*n+r[11]*s+r[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,o,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],m=l[5],y=l[9],x=l[2],f=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(y-f)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(y+f)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let b=(c+1)/2,S=(m+1)/2,L=(p+1)/2,A=(h+d)/4,D=(u+x)/4,B=(y+f)/4;return b>S&&b>L?b<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(b),s=A/n,o=D/n):S>L?S<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(S),n=A/s,o=B/s):L<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(L),n=D/o,s=B/o),this.set(n,s,o,e),this}let E=Math.sqrt((f-y)*(f-y)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(E)<.001&&(E=1),this.x=(f-y)/E,this.y=(u-x)/E,this.z=(d-h)/E,this.w=Math.acos((c+m+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ut(this.x,t.x,e.x),this.y=Ut(this.y,t.y,e.y),this.z=Ut(this.z,t.z,e.z),this.w=Ut(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ut(this.x,t,e),this.y=Ut(this.y,t,e),this.z=Ut(this.z,t,e),this.w=Ut(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ut(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ws=class extends fn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ne(0,0,t,e),this.scissorTest=!1,this.viewport=new ne(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Le,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let o=new de(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];let r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let e=Object.assign({},t.texture.image);return this.texture.source=new Xi(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qe=class extends Ws{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},qi=class extends de{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ze,this.minFilter=ze,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Xs=class extends de{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ze,this.minFilter=ze,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var mn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,o,r,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=o[r+0],m=o[r+1],y=o[r+2],x=o[r+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=m,t[e+2]=y,t[e+3]=x;return}if(u!==x||l!==d||c!==m||h!==y){let f=1-a,p=l*d+c*m+h*y+u*x,E=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){let L=Math.sqrt(b),A=Math.atan2(L,p*E);f=Math.sin(f*A)/L,a=Math.sin(a*A)/L}let S=a*E;if(l=l*f+d*S,c=c*f+m*S,h=h*f+y*S,u=u*f+x*S,f===1-a){let L=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=L,c*=L,h*=L,u*=L}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,o,r){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=o[r],d=o[r+1],m=o[r+2],y=o[r+3];return t[e]=a*y+h*u+l*m-c*d,t[e+1]=l*y+h*d+c*u-a*m,t[e+2]=c*y+h*m+a*d-l*u,t[e+3]=h*y-a*u-l*d-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,o=t._z,r=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(o/2),d=l(n/2),m=l(s/2),y=l(o/2);switch(r){case"XYZ":this._x=d*h*u+c*m*y,this._y=c*m*u-d*h*y,this._z=c*h*y+d*m*u,this._w=c*h*u-d*m*y;break;case"YXZ":this._x=d*h*u+c*m*y,this._y=c*m*u-d*h*y,this._z=c*h*y-d*m*u,this._w=c*h*u+d*m*y;break;case"ZXY":this._x=d*h*u-c*m*y,this._y=c*m*u+d*h*y,this._z=c*h*y+d*m*u,this._w=c*h*u-d*m*y;break;case"ZYX":this._x=d*h*u-c*m*y,this._y=c*m*u+d*h*y,this._z=c*h*y-d*m*u,this._w=c*h*u+d*m*y;break;case"YZX":this._x=d*h*u+c*m*y,this._y=c*m*u+d*h*y,this._z=c*h*y-d*m*u,this._w=c*h*u-d*m*y;break;case"XZY":this._x=d*h*u-c*m*y,this._y=c*m*u-d*h*y,this._z=c*h*y+d*m*u,this._w=c*h*u+d*m*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],o=e[8],r=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(o-c)*m,this._z=(r-s)*m}else if(n>a&&n>u){let m=2*Math.sqrt(1+n-a-u);this._w=(h-l)/m,this._x=.25*m,this._y=(s+r)/m,this._z=(o+c)/m}else if(a>u){let m=2*Math.sqrt(1+a-n-u);this._w=(o-c)/m,this._x=(s+r)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+u-n-a);this._w=(r-s)/m,this._x=(o+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ut(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,o=t._z,r=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+r*a+s*c-o*l,this._y=s*h+r*l+o*a-n*c,this._z=o*h+r*c+n*l-s*a,this._w=r*h-n*a-s*l-o*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,o=this._z,r=this._w,a=r*t._w+n*t._x+s*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=n,this._y=s,this._z=o,this;let l=1-a*a;if(l<=Number.EPSILON){let m=1-e;return this._w=m*r+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*o+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=r*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=o*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class{constructor(t=0,e=0,n=0){O.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ua.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ua.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*s,this.y=o[1]*e+o[4]*n+o[7]*s,this.z=o[2]*e+o[5]*n+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,o=t.elements,r=1/(o[3]*e+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*s+o[12])*r,this.y=(o[1]*e+o[5]*n+o[9]*s+o[13])*r,this.z=(o[2]*e+o[6]*n+o[10]*s+o[14])*r,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,o=t.x,r=t.y,a=t.z,l=t.w,c=2*(r*s-a*n),h=2*(a*e-o*s),u=2*(o*n-r*e);return this.x=e+l*c+r*u-a*h,this.y=n+l*h+a*c-o*u,this.z=s+l*u+o*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s,this.y=o[1]*e+o[5]*n+o[9]*s,this.z=o[2]*e+o[6]*n+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ut(this.x,t.x,e.x),this.y=Ut(this.y,t.y,e.y),this.z=Ut(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ut(this.x,t,e),this.y=Ut(this.y,t,e),this.z=Ut(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ut(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,o=t.z,r=e.x,a=e.y,l=e.z;return this.x=s*l-o*a,this.y=o*r-n*l,this.z=n*a-s*r,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return hr.copy(this).projectOnVector(t),this.sub(hr)}reflect(t){return this.sub(hr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ut(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},hr=new O,Ua=new mn,Rn=class{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(qe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(qe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=qe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,qe):qe.fromBufferAttribute(o,r),qe.applyMatrix4(t.matrixWorld),this.expandByPoint(qe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ys.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ys.copy(n.boundingBox)),ys.applyMatrix4(t.matrixWorld),this.union(ys)}let s=t.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,qe),qe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Oi),_s.subVectors(this.max,Oi),ri.subVectors(t.a,Oi),ai.subVectors(t.b,Oi),li.subVectors(t.c,Oi),vn.subVectors(ai,ri),Mn.subVectors(li,ai),Fn.subVectors(ri,li);let e=[0,-vn.z,vn.y,0,-Mn.z,Mn.y,0,-Fn.z,Fn.y,vn.z,0,-vn.x,Mn.z,0,-Mn.x,Fn.z,0,-Fn.x,-vn.y,vn.x,0,-Mn.y,Mn.x,0,-Fn.y,Fn.x,0];return!pr(e,ri,ai,li,_s)||(e=[1,0,0,0,1,0,0,0,1],!pr(e,ri,ai,li,_s))?!1:(xs.crossVectors(vn,Mn),e=[xs.x,xs.y,xs.z],pr(e,ri,ai,li,_s))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,qe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(qe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(an[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),an[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),an[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),an[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),an[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),an[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),an[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),an[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(an),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},an=[new O,new O,new O,new O,new O,new O,new O,new O],qe=new O,ys=new Rn,ri=new O,ai=new O,li=new O,vn=new O,Mn=new O,Fn=new O,Oi=new O,_s=new O,xs=new O,Nn=new O;function pr(i,t,e,n,s){for(let o=0,r=i.length-3;o<=r;o+=3){Nn.fromArray(i,o);let a=s.x*Math.abs(Nn.x)+s.y*Math.abs(Nn.y)+s.z*Math.abs(Nn.z),l=t.dot(Nn),c=e.dot(Nn),h=n.dot(Nn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var F2=new Rn,zi=new O,ur=new O,_i=class{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):F2.setFromPoints(t).getCenter(n);let s=0;for(let o=0,r=t.length;o<r;o++)s=Math.max(s,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;zi.subVectors(t,this.center);let e=zi.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(zi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ur.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(zi.copy(t.center).add(ur)),this.expandByPoint(zi.copy(t.center).sub(ur))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},ln=new O,dr=new O,vs=new O,Sn=new O,fr=new O,Ms=new O,mr=new O,qs=class{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ln)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ln.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ln.copy(this.origin).addScaledVector(this.direction,e),ln.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){dr.copy(t).add(e).multiplyScalar(.5),vs.copy(e).sub(t).normalize(),Sn.copy(this.origin).sub(dr);let o=t.distanceTo(e)*.5,r=-this.direction.dot(vs),a=Sn.dot(this.direction),l=-Sn.dot(vs),c=Sn.lengthSq(),h=Math.abs(1-r*r),u,d,m,y;if(h>0)if(u=r*l-a,d=r*a-l,y=o*h,u>=0)if(d>=-y)if(d<=y){let x=1/h;u*=x,d*=x,m=u*(u+r*d+2*a)+d*(r*u+d+2*l)+c}else d=o,u=Math.max(0,-(r*d+a)),m=-u*u+d*(d+2*l)+c;else d=-o,u=Math.max(0,-(r*d+a)),m=-u*u+d*(d+2*l)+c;else d<=-y?(u=Math.max(0,-(-r*o+a)),d=u>0?-o:Math.min(Math.max(-o,-l),o),m=-u*u+d*(d+2*l)+c):d<=y?(u=0,d=Math.min(Math.max(-o,-l),o),m=d*(d+2*l)+c):(u=Math.max(0,-(r*o+a)),d=u>0?o:Math.min(Math.max(-o,-l),o),m=-u*u+d*(d+2*l)+c);else d=r>0?-o:o,u=Math.max(0,-(r*d+a)),m=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(dr).addScaledVector(vs,d),m}intersectSphere(t,e){ln.subVectors(t.center,this.origin);let n=ln.dot(this.direction),s=ln.dot(ln)-n*n,o=t.radius*t.radius;if(s>o)return null;let r=Math.sqrt(o-s),a=n-r,l=n+r;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,o,r,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(o=(t.min.y-d.y)*h,r=(t.max.y-d.y)*h):(o=(t.max.y-d.y)*h,r=(t.min.y-d.y)*h),n>r||o>s||((o>n||isNaN(n))&&(n=o),(r<s||isNaN(s))&&(s=r),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ln)!==null}intersectTriangle(t,e,n,s,o){fr.subVectors(e,t),Ms.subVectors(n,t),mr.crossVectors(fr,Ms);let r=this.direction.dot(mr),a;if(r>0){if(s)return null;a=1}else if(r<0)a=-1,r=-r;else return null;Sn.subVectors(this.origin,t);let l=a*this.direction.dot(Ms.crossVectors(Sn,Ms));if(l<0)return null;let c=a*this.direction.dot(fr.cross(Sn));if(c<0||l+c>r)return null;let h=-a*Sn.dot(mr);return h<0?null:this.at(h/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},se=class{constructor(t,e,n,s,o,r,a,l,c,h,u,d,m,y,x,f){se.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,l,c,h,u,d,m,y,x,f)}set(t,e,n,s,o,r,a,l,c,h,u,d,m,y,x,f){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=o,p[5]=r,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=m,p[7]=y,p[11]=x,p[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new se().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/ci.setFromMatrixColumn(t,0).length(),o=1/ci.setFromMatrixColumn(t,1).length(),r=1/ci.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,o=t.z,r=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(o),u=Math.sin(o);if(t.order==="XYZ"){let d=r*h,m=r*u,y=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=m+y*c,e[5]=d-x*c,e[9]=-a*l,e[2]=x-d*c,e[6]=y+m*c,e[10]=r*l}else if(t.order==="YXZ"){let d=l*h,m=l*u,y=c*h,x=c*u;e[0]=d+x*a,e[4]=y*a-m,e[8]=r*c,e[1]=r*u,e[5]=r*h,e[9]=-a,e[2]=m*a-y,e[6]=x+d*a,e[10]=r*l}else if(t.order==="ZXY"){let d=l*h,m=l*u,y=c*h,x=c*u;e[0]=d-x*a,e[4]=-r*u,e[8]=y+m*a,e[1]=m+y*a,e[5]=r*h,e[9]=x-d*a,e[2]=-r*c,e[6]=a,e[10]=r*l}else if(t.order==="ZYX"){let d=r*h,m=r*u,y=a*h,x=a*u;e[0]=l*h,e[4]=y*c-m,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=m*c-y,e[2]=-c,e[6]=a*l,e[10]=r*l}else if(t.order==="YZX"){let d=r*l,m=r*c,y=a*l,x=a*c;e[0]=l*h,e[4]=x-d*u,e[8]=y*u+m,e[1]=u,e[5]=r*h,e[9]=-a*h,e[2]=-c*h,e[6]=m*u+y,e[10]=d-x*u}else if(t.order==="XZY"){let d=r*l,m=r*c,y=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=r*h,e[9]=m*u-y,e[2]=y*u-m,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(N2,t,O2)}lookAt(t,e,n){let s=this.elements;return Re.subVectors(t,e),Re.lengthSq()===0&&(Re.z=1),Re.normalize(),bn.crossVectors(n,Re),bn.lengthSq()===0&&(Math.abs(n.z)===1?Re.x+=1e-4:Re.z+=1e-4,Re.normalize(),bn.crossVectors(n,Re)),bn.normalize(),Ss.crossVectors(Re,bn),s[0]=bn.x,s[4]=Ss.x,s[8]=Re.x,s[1]=bn.y,s[5]=Ss.y,s[9]=Re.y,s[2]=bn.z,s[6]=Ss.z,s[10]=Re.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],m=n[13],y=n[2],x=n[6],f=n[10],p=n[14],E=n[3],b=n[7],S=n[11],L=n[15],A=s[0],D=s[4],B=s[8],v=s[12],_=s[1],T=s[5],q=s[9],z=s[13],W=s[2],K=s[6],H=s[10],tt=s[14],V=s[3],ot=s[7],ut=s[11],xt=s[15];return o[0]=r*A+a*_+l*W+c*V,o[4]=r*D+a*T+l*K+c*ot,o[8]=r*B+a*q+l*H+c*ut,o[12]=r*v+a*z+l*tt+c*xt,o[1]=h*A+u*_+d*W+m*V,o[5]=h*D+u*T+d*K+m*ot,o[9]=h*B+u*q+d*H+m*ut,o[13]=h*v+u*z+d*tt+m*xt,o[2]=y*A+x*_+f*W+p*V,o[6]=y*D+x*T+f*K+p*ot,o[10]=y*B+x*q+f*H+p*ut,o[14]=y*v+x*z+f*tt+p*xt,o[3]=E*A+b*_+S*W+L*V,o[7]=E*D+b*T+S*K+L*ot,o[11]=E*B+b*q+S*H+L*ut,o[15]=E*v+b*z+S*tt+L*xt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],o=t[12],r=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],m=t[14],y=t[3],x=t[7],f=t[11],p=t[15];return y*(+o*l*u-s*c*u-o*a*d+n*c*d+s*a*m-n*l*m)+x*(+e*l*m-e*c*d+o*r*d-s*r*m+s*c*h-o*l*h)+f*(+e*c*u-e*a*m-o*r*u+n*r*m+o*a*h-n*c*h)+p*(-s*a*h-e*l*u+e*a*d+s*r*u-n*r*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],m=t[11],y=t[12],x=t[13],f=t[14],p=t[15],E=u*f*c-x*d*c+x*l*m-a*f*m-u*l*p+a*d*p,b=y*d*c-h*f*c-y*l*m+r*f*m+h*l*p-r*d*p,S=h*x*c-y*u*c+y*a*m-r*x*m-h*a*p+r*u*p,L=y*u*l-h*x*l-y*a*d+r*x*d+h*a*f-r*u*f,A=e*E+n*b+s*S+o*L;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/A;return t[0]=E*D,t[1]=(x*d*o-u*f*o-x*s*m+n*f*m+u*s*p-n*d*p)*D,t[2]=(a*f*o-x*l*o+x*s*c-n*f*c-a*s*p+n*l*p)*D,t[3]=(u*l*o-a*d*o-u*s*c+n*d*c+a*s*m-n*l*m)*D,t[4]=b*D,t[5]=(h*f*o-y*d*o+y*s*m-e*f*m-h*s*p+e*d*p)*D,t[6]=(y*l*o-r*f*o-y*s*c+e*f*c+r*s*p-e*l*p)*D,t[7]=(r*d*o-h*l*o+h*s*c-e*d*c-r*s*m+e*l*m)*D,t[8]=S*D,t[9]=(y*u*o-h*x*o-y*n*m+e*x*m+h*n*p-e*u*p)*D,t[10]=(r*x*o-y*a*o+y*n*c-e*x*c-r*n*p+e*a*p)*D,t[11]=(h*a*o-r*u*o-h*n*c+e*u*c+r*n*m-e*a*m)*D,t[12]=L*D,t[13]=(h*x*s-y*u*s+y*n*d-e*x*d-h*n*f+e*u*f)*D,t[14]=(y*a*s-r*x*s-y*n*l+e*x*l+r*n*f-e*a*f)*D,t[15]=(r*u*s-h*a*s+h*n*l-e*u*l-r*n*d+e*a*d)*D,this}scale(t){let e=this.elements,n=t.x,s=t.y,o=t.z;return e[0]*=n,e[4]*=s,e[8]*=o,e[1]*=n,e[5]*=s,e[9]*=o,e[2]*=n,e[6]*=s,e[10]*=o,e[3]*=n,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),o=1-n,r=t.x,a=t.y,l=t.z,c=o*r,h=o*a;return this.set(c*r+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*r,0,c*l-s*a,h*l+s*r,o*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,o,r){return this.set(1,n,o,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,o=e._x,r=e._y,a=e._z,l=e._w,c=o+o,h=r+r,u=a+a,d=o*c,m=o*h,y=o*u,x=r*h,f=r*u,p=a*u,E=l*c,b=l*h,S=l*u,L=n.x,A=n.y,D=n.z;return s[0]=(1-(x+p))*L,s[1]=(m+S)*L,s[2]=(y-b)*L,s[3]=0,s[4]=(m-S)*A,s[5]=(1-(d+p))*A,s[6]=(f+E)*A,s[7]=0,s[8]=(y+b)*D,s[9]=(f-E)*D,s[10]=(1-(d+x))*D,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,o=ci.set(s[0],s[1],s[2]).length(),r=ci.set(s[4],s[5],s[6]).length(),a=ci.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),t.x=s[12],t.y=s[13],t.z=s[14],Ze.copy(this);let c=1/o,h=1/r,u=1/a;return Ze.elements[0]*=c,Ze.elements[1]*=c,Ze.elements[2]*=c,Ze.elements[4]*=h,Ze.elements[5]*=h,Ze.elements[6]*=h,Ze.elements[8]*=u,Ze.elements[9]*=u,Ze.elements[10]*=u,e.setFromRotationMatrix(Ze),n.x=o,n.y=r,n.z=a,this}makePerspective(t,e,n,s,o,r,a=Je){let l=this.elements,c=2*o/(e-t),h=2*o/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),m,y;if(a===Je)m=-(r+o)/(r-o),y=-2*r*o/(r-o);else if(a===Wi)m=-r/(r-o),y=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,o,r,a=Je){let l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(r-o),d=(e+t)*c,m=(n+s)*h,y,x;if(a===Je)y=(r+o)*u,x=-2*u;else if(a===Wi)y=o*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ci=new O,Ze=new se,N2=new O(0,0,0),O2=new O(1,1,1),bn=new O,Ss=new O,Re=new O,Fa=new se,Na=new mn,ke=class{constructor(t=0,e=0,n=0,s=ke.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,o=s[0],r=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ut(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(Ut(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Ut(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Ut(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Fa.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Fa,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Na.setFromEuler(this),this.setFromQuaternion(Na,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ke.DEFAULT_ORDER="XYZ";var Zi=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},z2=0,Oa=new O,hi=new mn,cn=new se,bs=new O,ki=new O,k2=new O,V2=new mn,za=new O(1,0,0),ka=new O(0,1,0),Va=new O(0,0,1),Ha={type:"added"},H2={type:"removed"},pi={type:"childadded",child:null},gr={type:"childremoved",child:null},_e=class extends fn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:z2++}),this.uuid=ps(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_e.DEFAULT_UP.clone();let t=new O,e=new ke,n=new mn,s=new O(1,1,1);function o(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new se},normalMatrix:{value:new Dt}}),this.matrix=new se,this.matrixWorld=new se,this.matrixAutoUpdate=_e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zi,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return hi.setFromAxisAngle(t,e),this.quaternion.multiply(hi),this}rotateOnWorldAxis(t,e){return hi.setFromAxisAngle(t,e),this.quaternion.premultiply(hi),this}rotateX(t){return this.rotateOnAxis(za,t)}rotateY(t){return this.rotateOnAxis(ka,t)}rotateZ(t){return this.rotateOnAxis(Va,t)}translateOnAxis(t,e){return Oa.copy(t).applyQuaternion(this.quaternion),this.position.add(Oa.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(za,t)}translateY(t){return this.translateOnAxis(ka,t)}translateZ(t){return this.translateOnAxis(Va,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(cn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?bs.copy(t):bs.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ki.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cn.lookAt(ki,bs,this.up):cn.lookAt(bs,ki,this.up),this.quaternion.setFromRotationMatrix(cn),s&&(cn.extractRotation(s.matrixWorld),hi.setFromRotationMatrix(cn),this.quaternion.premultiply(hi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ha),pi.child=t,this.dispatchEvent(pi),pi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(H2),gr.child=t,this.dispatchEvent(gr),gr.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),cn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),cn.multiply(t.parent.matrixWorld)),t.applyMatrix4(cn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ha),pi.child=t,this.dispatchEvent(pi),pi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ki,t,k2),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ki,V2,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];o(t.shapes,u)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(t.materials,this.material[l]));s.material=a}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(o(t.animations,l))}}if(e){let a=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),u=r(t.shapes),d=r(t.skeletons),m=r(t.animations),y=r(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),y.length>0&&(n.nodes=y)}return n.object=s,n;function r(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};_e.DEFAULT_UP=new O(0,1,0);_e.DEFAULT_MATRIX_AUTO_UPDATE=!0;_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ye=new O,hn=new O,Cr=new O,pn=new O,ui=new O,di=new O,Ga=new O,yr=new O,_r=new O,xr=new O,vr=new ne,Mr=new ne,Sr=new ne,Ee=class{constructor(t=new O,e=new O,n=new O){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ye.subVectors(t,e),s.cross(Ye);let o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,n,s,o){Ye.subVectors(s,e),hn.subVectors(n,e),Cr.subVectors(t,e);let r=Ye.dot(Ye),a=Ye.dot(hn),l=Ye.dot(Cr),c=hn.dot(hn),h=hn.dot(Cr),u=r*c-a*a;if(u===0)return o.set(0,0,0),null;let d=1/u,m=(c*l-a*h)*d,y=(r*h-a*l)*d;return o.set(1-m-y,y,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,pn)===null?!1:pn.x>=0&&pn.y>=0&&pn.x+pn.y<=1}static getInterpolation(t,e,n,s,o,r,a,l){return this.getBarycoord(t,e,n,s,pn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,pn.x),l.addScaledVector(r,pn.y),l.addScaledVector(a,pn.z),l)}static getInterpolatedAttribute(t,e,n,s,o,r){return vr.setScalar(0),Mr.setScalar(0),Sr.setScalar(0),vr.fromBufferAttribute(t,e),Mr.fromBufferAttribute(t,n),Sr.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(vr,o.x),r.addScaledVector(Mr,o.y),r.addScaledVector(Sr,o.z),r}static isFrontFacing(t,e,n,s){return Ye.subVectors(n,e),hn.subVectors(t,e),Ye.cross(hn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ye.subVectors(this.c,this.b),hn.subVectors(this.a,this.b),Ye.cross(hn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ee.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ee.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,o){return Ee.getInterpolation(t,this.a,this.b,this.c,e,n,s,o)}containsPoint(t){return Ee.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ee.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,o=this.c,r,a;ui.subVectors(s,n),di.subVectors(o,n),yr.subVectors(t,n);let l=ui.dot(yr),c=di.dot(yr);if(l<=0&&c<=0)return e.copy(n);_r.subVectors(t,s);let h=ui.dot(_r),u=di.dot(_r);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return r=l/(l-h),e.copy(n).addScaledVector(ui,r);xr.subVectors(t,o);let m=ui.dot(xr),y=di.dot(xr);if(y>=0&&m<=y)return e.copy(o);let x=m*c-l*y;if(x<=0&&c>=0&&y<=0)return a=c/(c-y),e.copy(n).addScaledVector(di,a);let f=h*y-m*u;if(f<=0&&u-h>=0&&m-y>=0)return Ga.subVectors(o,s),a=(u-h)/(u-h+(m-y)),e.copy(s).addScaledVector(Ga,a);let p=1/(f+x+d);return r=x*p,a=d*p,e.copy(n).addScaledVector(ui,r).addScaledVector(di,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},V3={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wn={h:0,s:0,l:0},ws={h:0,s:0,l:0};function br(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Zt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ie){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ht.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Ht.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ht.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Ht.workingColorSpace){if(t=P2(t,1),e=Ut(e,0,1),n=Ut(n,0,1),e===0)this.r=this.g=this.b=n;else{let o=n<=.5?n*(1+e):n+e-n*e,r=2*n-o;this.r=br(r,o,t+1/3),this.g=br(r,o,t),this.b=br(r,o,t-1/3)}return Ht.toWorkingColorSpace(this,s),this}setStyle(t,e=Ie){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o,r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ie){let n=V3[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=un(t.r),this.g=un(t.g),this.b=un(t.b),this}copyLinearToSRGB(t){return this.r=Ci(t.r),this.g=Ci(t.g),this.b=Ci(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ie){return Ht.fromWorkingColorSpace(Ce.copy(this),t),Math.round(Ut(Ce.r*255,0,255))*65536+Math.round(Ut(Ce.g*255,0,255))*256+Math.round(Ut(Ce.b*255,0,255))}getHexString(t=Ie){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ht.workingColorSpace){Ht.fromWorkingColorSpace(Ce.copy(this),e);let n=Ce.r,s=Ce.g,o=Ce.b,r=Math.max(n,s,o),a=Math.min(n,s,o),l,c,h=(a+r)/2;if(a===r)l=0,c=0;else{let u=r-a;switch(c=h<=.5?u/(r+a):u/(2-r-a),r){case n:l=(s-o)/u+(s<o?6:0);break;case s:l=(o-n)/u+2;break;case o:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Ht.workingColorSpace){return Ht.fromWorkingColorSpace(Ce.copy(this),e),t.r=Ce.r,t.g=Ce.g,t.b=Ce.b,t}getStyle(t=Ie){Ht.fromWorkingColorSpace(Ce.copy(this),t);let e=Ce.r,n=Ce.g,s=Ce.b;return t!==Ie?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(wn),this.setHSL(wn.h+t,wn.s+e,wn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(wn),t.getHSL(ws);let n=ar(wn.h,ws.h,e),s=ar(wn.s,ws.s,e),o=ar(wn.l,ws.l,e);return this.setHSL(n,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*s,this.g=o[1]*e+o[4]*n+o[7]*s,this.b=o[2]*e+o[5]*n+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ce=new Zt;Zt.NAMES=V3;var G2=0,Zn=class extends fn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:G2++}),this.uuid=ps(),this.name="",this.type="Material",this.blending=Gn,this.side=dn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ns,this.blendDst=Os,this.blendEquation=Tn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Zt(0,0,0),this.blendAlpha=0,this.depthFunc=Wn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ir,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=kn,this.stencilZFail=kn,this.stencilZPass=kn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Gn&&(n.blending=this.blending),this.side!==dn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ns&&(n.blendSrc=this.blendSrc),this.blendDst!==Os&&(n.blendDst=this.blendDst),this.blendEquation!==Tn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Wn&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ir&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==kn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==kn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==kn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){let r=[];for(let a in o){let l=o[a];delete l.metadata,r.push(l)}return r}if(e){let o=s(t.textures),r=s(t.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Yi=class extends Zn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ke,this.combine=kr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ce=new O,Es=new Wt,W2=0,Pe=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:W2++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Pr,this.updateRanges=[],this.gpuType=sn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Es.fromBufferAttribute(this,e),Es.applyMatrix3(t),this.setXY(e,Es.x,Es.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.applyMatrix3(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.applyMatrix4(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.applyNormalMatrix(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.transformDirection(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ni(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=we(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ni(e,this.array)),e}setX(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ni(e,this.array)),e}setY(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ni(e,this.array)),e}setZ(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ni(e,this.array)),e}setW(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array),s=we(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array),s=we(s,this.array),o=we(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Pr&&(t.usage=this.usage),t}};var $i=class extends Pe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ji=class extends Pe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Ke=class extends Pe{constructor(t,e,n){super(new Float32Array(t),e,n)}},X2=0,Oe=new se,wr=new _e,fi=new O,De=new Rn,Vi=new Rn,ue=new O,je=class extends fn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:X2++}),this.uuid=ps(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ta(t)?Ji:$i)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let o=new Dt().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Oe.makeRotationFromQuaternion(t),this.applyMatrix4(Oe),this}rotateX(t){return Oe.makeRotationX(t),this.applyMatrix4(Oe),this}rotateY(t){return Oe.makeRotationY(t),this.applyMatrix4(Oe),this}rotateZ(t){return Oe.makeRotationZ(t),this.applyMatrix4(Oe),this}translate(t,e,n){return Oe.makeTranslation(t,e,n),this.applyMatrix4(Oe),this}scale(t,e,n){return Oe.makeScale(t,e,n),this.applyMatrix4(Oe),this}lookAt(t){return wr.lookAt(t),wr.updateMatrix(),this.applyMatrix4(wr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fi).negate(),this.translate(fi.x,fi.y,fi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,o=t.length;s<o;s++){let r=t[s];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Ke(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let o=t[s];e.setXYZ(s,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let o=e[n];De.setFromBufferAttribute(o),this.morphTargetsRelative?(ue.addVectors(this.boundingBox.min,De.min),this.boundingBox.expandByPoint(ue),ue.addVectors(this.boundingBox.max,De.max),this.boundingBox.expandByPoint(ue)):(this.boundingBox.expandByPoint(De.min),this.boundingBox.expandByPoint(De.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _i);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){let n=this.boundingSphere.center;if(De.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){let a=e[o];Vi.setFromBufferAttribute(a),this.morphTargetsRelative?(ue.addVectors(De.min,Vi.min),De.expandByPoint(ue),ue.addVectors(De.max,Vi.max),De.expandByPoint(ue)):(De.expandByPoint(Vi.min),De.expandByPoint(Vi.max))}De.getCenter(n);let s=0;for(let o=0,r=t.count;o<r;o++)ue.fromBufferAttribute(t,o),s=Math.max(s,n.distanceToSquared(ue));if(e)for(let o=0,r=e.length;o<r;o++){let a=e[o],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ue.fromBufferAttribute(a,c),l&&(fi.fromBufferAttribute(t,c),ue.add(fi)),s=Math.max(s,n.distanceToSquared(ue))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pe(new Float32Array(4*n.count),4));let r=this.getAttribute("tangent"),a=[],l=[];for(let B=0;B<n.count;B++)a[B]=new O,l[B]=new O;let c=new O,h=new O,u=new O,d=new Wt,m=new Wt,y=new Wt,x=new O,f=new O;function p(B,v,_){c.fromBufferAttribute(n,B),h.fromBufferAttribute(n,v),u.fromBufferAttribute(n,_),d.fromBufferAttribute(o,B),m.fromBufferAttribute(o,v),y.fromBufferAttribute(o,_),h.sub(c),u.sub(c),m.sub(d),y.sub(d);let T=1/(m.x*y.y-y.x*m.y);isFinite(T)&&(x.copy(h).multiplyScalar(y.y).addScaledVector(u,-m.y).multiplyScalar(T),f.copy(u).multiplyScalar(m.x).addScaledVector(h,-y.x).multiplyScalar(T),a[B].add(x),a[v].add(x),a[_].add(x),l[B].add(f),l[v].add(f),l[_].add(f))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let B=0,v=E.length;B<v;++B){let _=E[B],T=_.start,q=_.count;for(let z=T,W=T+q;z<W;z+=3)p(t.getX(z+0),t.getX(z+1),t.getX(z+2))}let b=new O,S=new O,L=new O,A=new O;function D(B){L.fromBufferAttribute(s,B),A.copy(L);let v=a[B];b.copy(v),b.sub(L.multiplyScalar(L.dot(v))).normalize(),S.crossVectors(A,v);let T=S.dot(l[B])<0?-1:1;r.setXYZW(B,b.x,b.y,b.z,T)}for(let B=0,v=E.length;B<v;++B){let _=E[B],T=_.start,q=_.count;for(let z=T,W=T+q;z<W;z+=3)D(t.getX(z+0)),D(t.getX(z+1)),D(t.getX(z+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Pe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);let s=new O,o=new O,r=new O,a=new O,l=new O,c=new O,h=new O,u=new O;if(t)for(let d=0,m=t.count;d<m;d+=3){let y=t.getX(d+0),x=t.getX(d+1),f=t.getX(d+2);s.fromBufferAttribute(e,y),o.fromBufferAttribute(e,x),r.fromBufferAttribute(e,f),h.subVectors(r,o),u.subVectors(s,o),h.cross(u),a.fromBufferAttribute(n,y),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,f),a.add(h),l.add(h),c.add(h),n.setXYZ(y,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,m=e.count;d<m;d+=3)s.fromBufferAttribute(e,d+0),o.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),h.subVectors(r,o),u.subVectors(s,o),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ue.fromBufferAttribute(t,e),ue.normalize(),t.setXYZ(e,ue.x,ue.y,ue.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),m=0,y=0;for(let x=0,f=l.length;x<f;x++){a.isInterleavedBufferAttribute?m=l[x]*a.data.stride+a.offset:m=l[x]*h;for(let p=0;p<h;p++)d[y++]=c[m++]}return new Pe(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new je,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let o=this.morphAttributes;for(let a in o){let l=[],c=o[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],m=t(d,n);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let a=0,l=r.length;a<l;a++){let c=r[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},o=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let m=c[u];h.push(m.toJSON(t.data))}h.length>0&&(s[l]=h,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let o=t.morphAttributes;for(let c in o){let h=[],u=o[c];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let c=0,h=r.length;c<h;c++){let u=r[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Wa=new se,On=new qs,As=new _i,Xa=new O,Ts=new O,Rs=new O,Ds=new O,Er=new O,Is=new O,qa=new O,Ps=new O,Ae=class extends _e{constructor(t=new je,e=new Yi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){let a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(o&&a){Is.set(0,0,0);for(let l=0,c=o.length;l<c;l++){let h=a[l],u=o[l];h!==0&&(Er.fromBufferAttribute(u,t),r?Is.addScaledVector(Er,h):Is.addScaledVector(Er.sub(e),h))}e.add(Is)}return e}raycast(t,e){let n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),As.copy(n.boundingSphere),As.applyMatrix4(o),On.copy(t.ray).recast(t.near),!(As.containsPoint(On.origin)===!1&&(On.intersectSphere(As,Xa)===null||On.origin.distanceToSquared(Xa)>(t.far-t.near)**2))&&(Wa.copy(o).invert(),On.copy(t.ray).applyMatrix4(Wa),!(n.boundingBox!==null&&On.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,On)))}_computeIntersections(t,e,n){let s,o=this.geometry,r=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,h=o.attributes.uv1,u=o.attributes.normal,d=o.groups,m=o.drawRange;if(a!==null)if(Array.isArray(r))for(let y=0,x=d.length;y<x;y++){let f=d[y],p=r[f.materialIndex],E=Math.max(f.start,m.start),b=Math.min(a.count,Math.min(f.start+f.count,m.start+m.count));for(let S=E,L=b;S<L;S+=3){let A=a.getX(S),D=a.getX(S+1),B=a.getX(S+2);s=Ls(this,p,t,n,c,h,u,A,D,B),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{let y=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let f=y,p=x;f<p;f+=3){let E=a.getX(f),b=a.getX(f+1),S=a.getX(f+2);s=Ls(this,r,t,n,c,h,u,E,b,S),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let y=0,x=d.length;y<x;y++){let f=d[y],p=r[f.materialIndex],E=Math.max(f.start,m.start),b=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let S=E,L=b;S<L;S+=3){let A=S,D=S+1,B=S+2;s=Ls(this,p,t,n,c,h,u,A,D,B),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{let y=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let f=y,p=x;f<p;f+=3){let E=f,b=f+1,S=f+2;s=Ls(this,r,t,n,c,h,u,E,b,S),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}}};function q2(i,t,e,n,s,o,r,a){let l;if(t.side===Me?l=n.intersectTriangle(r,o,s,!0,a):l=n.intersectTriangle(s,o,r,t.side===dn,a),l===null)return null;Ps.copy(a),Ps.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Ps);return c<e.near||c>e.far?null:{distance:c,point:Ps.clone(),object:i}}function Ls(i,t,e,n,s,o,r,a,l,c){i.getVertexPosition(a,Ts),i.getVertexPosition(l,Rs),i.getVertexPosition(c,Ds);let h=q2(i,t,e,n,Ts,Rs,Ds,qa);if(h){let u=new O;Ee.getBarycoord(qa,Ts,Rs,Ds,u),s&&(h.uv=Ee.getInterpolatedAttribute(s,a,l,c,u,new Wt)),o&&(h.uv1=Ee.getInterpolatedAttribute(o,a,l,c,u,new Wt)),r&&(h.normal=Ee.getInterpolatedAttribute(r,a,l,c,u,new O),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new O,materialIndex:0};Ee.getNormal(Ts,Rs,Ds,d.normal),h.face=d,h.barycoord=u}return h}var Dn=class extends je{constructor(t=1,e=1,n=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:o,depthSegments:r};let a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);let l=[],c=[],h=[],u=[],d=0,m=0;y("z","y","x",-1,-1,n,e,t,r,o,0),y("z","y","x",1,-1,n,e,-t,r,o,1),y("x","z","y",1,1,t,n,e,s,r,2),y("x","z","y",1,-1,t,n,-e,s,r,3),y("x","y","z",1,-1,t,e,n,s,o,4),y("x","y","z",-1,-1,t,e,-n,s,o,5),this.setIndex(l),this.setAttribute("position",new Ke(c,3)),this.setAttribute("normal",new Ke(h,3)),this.setAttribute("uv",new Ke(u,2));function y(x,f,p,E,b,S,L,A,D,B,v){let _=S/D,T=L/B,q=S/2,z=L/2,W=A/2,K=D+1,H=B+1,tt=0,V=0,ot=new O;for(let ut=0;ut<H;ut++){let xt=ut*T-z;for(let Bt=0;Bt<K;Bt++){let Qt=Bt*_-q;ot[x]=Qt*E,ot[f]=xt*b,ot[p]=W,c.push(ot.x,ot.y,ot.z),ot[x]=0,ot[f]=0,ot[p]=A>0?1:-1,h.push(ot.x,ot.y,ot.z),u.push(Bt/D),u.push(1-ut/B),tt+=1}}for(let ut=0;ut<B;ut++)for(let xt=0;xt<D;xt++){let Bt=d+xt+K*ut,Qt=d+xt+K*(ut+1),X=d+(xt+1)+K*(ut+1),et=d+(xt+1)+K*ut;l.push(Bt,Qt,et),l.push(Qt,X,et),V+=6}a.addGroup(m,V,v),m+=V,d+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function jn(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function xe(i){let t={};for(let e=0;e<i.length;e++){let n=jn(i[e]);for(let s in n)t[s]=n[s]}return t}function Z2(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ea(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ht.workingColorSpace}var H3={clone:jn,merge:xe},Y2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Be=class extends Zn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Y2,this.fragmentShader=$2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=jn(t.uniforms),this.uniformsGroups=Z2(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Ki=class extends _e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new se,this.projectionMatrix=new se,this.projectionMatrixInverse=new se,this.coordinateSystem=Je}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},En=new O,Za=new Wt,Ya=new Wt,ye=class extends Ki{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Hs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(rr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Hs*2*Math.atan(Math.tan(rr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){En.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(En.x,En.y).multiplyScalar(-t/En.z),En.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(En.x,En.y).multiplyScalar(-t/En.z)}getViewSize(t,e){return this.getViewBounds(t,Za,Ya),e.subVectors(Ya,Za)}setViewOffset(t,e,n,s,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(rr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,o=-.5*s,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,c=r.fullHeight;o+=r.offsetX*s/l,e-=r.offsetY*n/c,s*=r.width/l,n*=r.height/c}let a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},mi=-90,gi=1,Zs=class extends _e{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ye(mi,gi,t,e);s.layers=this.layers,this.add(s);let o=new ye(mi,gi,t,e);o.layers=this.layers,this.add(o);let r=new ye(mi,gi,t,e);r.layers=this.layers,this.add(r);let a=new ye(mi,gi,t,e);a.layers=this.layers,this.add(a);let l=new ye(mi,gi,t,e);l.layers=this.layers,this.add(l);let c=new ye(mi,gi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,o,r,a,l]=e;for(let c of e)this.remove(c);if(t===Je)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Wi)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[o,r,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),y=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,o),t.setRenderTarget(n,1,s),t.render(e,r),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,m),t.xr.enabled=y,n.texture.needsPMREMUpdate=!0}},Qi=class extends de{constructor(t,e,n,s,o,r,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:$n,super(t,e,n,s,o,r,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ys=class extends Qe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Qi(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Le}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Dn(5,5,5),o=new Be({name:"CubemapFromEquirect",uniforms:jn(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Me,blending:Cn});o.uniforms.tEquirect.value=e;let r=new Ae(s,o),a=e.minFilter;return e.minFilter===en&&(e.minFilter=Le),new Zs(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,s){let o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,s);t.setRenderTarget(o)}},Vn=class extends _e{constructor(){super(),this.isGroup=!0,this.type="Group"}},J2={type:"move"},xi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,o=null,r=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(let x of t.hand.values()){let f=e.getJointPose(x,n),p=this._getHandJoint(c,x);f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=f.radius),p.visible=f!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,y=.005;c.inputState.pinching&&d>m+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=m-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(J2)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Vn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}};var ji=class extends _e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ke,this.environmentIntensity=1,this.environmentRotation=new ke,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Ar=new O,K2=new O,Q2=new Dt,$e=class{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Ar.subVectors(n,e).cross(K2.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Ar),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Q2.getNormalMatrix(t),s=this.coplanarPoint(Ar).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},zn=new _i,Bs=new O,ts=class{constructor(t=new $e,e=new $e,n=new $e,s=new $e,o=new $e,r=new $e){this.planes=[t,e,n,s,o,r]}set(t,e,n,s,o,r){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Je){let n=this.planes,s=t.elements,o=s[0],r=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],m=s[8],y=s[9],x=s[10],f=s[11],p=s[12],E=s[13],b=s[14],S=s[15];if(n[0].setComponents(l-o,d-c,f-m,S-p).normalize(),n[1].setComponents(l+o,d+c,f+m,S+p).normalize(),n[2].setComponents(l+r,d+h,f+y,S+E).normalize(),n[3].setComponents(l-r,d-h,f-y,S-E).normalize(),n[4].setComponents(l-a,d-u,f-x,S-b).normalize(),e===Je)n[5].setComponents(l+a,d+u,f+x,S+b).normalize();else if(e===Wi)n[5].setComponents(a,u,x,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),zn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),zn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(zn)}intersectsSprite(t){return zn.center.set(0,0,0),zn.radius=.7071067811865476,zn.applyMatrix4(t.matrixWorld),this.intersectsSphere(zn)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Bs.x=s.normal.x>0?t.max.x:t.min.x,Bs.y=s.normal.y>0?t.max.y:t.min.y,Bs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Bs)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var es=class extends de{constructor(t,e,n,s,o,r,a,l,c,h=Hn){if(h!==Hn&&h!==Xn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Hn&&(n=Ln),n===void 0&&h===Xn&&(n=Kn),super(null,s,o,r,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:ze,this.minFilter=l!==void 0?l:ze,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}};var gn=class extends je{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let o=t/2,r=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,m=[],y=[],x=[],f=[];for(let p=0;p<h;p++){let E=p*d-r;for(let b=0;b<c;b++){let S=b*u-o;y.push(S,-E,0),x.push(0,0,1),f.push(b/a),f.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<a;E++){let b=E+c*p,S=E+c*(p+1),L=E+1+c*(p+1),A=E+1+c*p;m.push(b,S,A),m.push(S,L,A)}this.setIndex(m),this.setAttribute("position",new Ke(y,3)),this.setAttribute("normal",new Ke(x,3)),this.setAttribute("uv",new Ke(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gn(t.width,t.height,t.widthSegments,t.heightSegments)}};var $s=class extends Zn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=E3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Js=class extends Zn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Us(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function j2(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Yn=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],o=e[n-1];n:{t:{let r;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<o)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(o=s,s=e[++n],t<s)break t}r=e.length;break e}if(!(t>=o)){let a=e[1];t<a&&(n=2,o=a);for(let l=n-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=o,o=e[--n-1],t>=o)break t}r=n,n=0;break e}break n}for(;n<r;){let a=n+r>>>1;t<e[a]?r=a:n=a+1}if(s=e[n],o=e[n-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,o,s)}return this.interpolate_(n,o,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=t*s;for(let r=0;r!==s;++r)e[r]=n[o+r];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ks=class extends Yn{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Tr,endingEnd:Tr}}intervalChanged_(t,e,n){let s=this.parameterPositions,o=t-2,r=t+1,a=s[o],l=s[r];if(a===void 0)switch(this.getSettings_().endingStart){case Rr:o=t,a=2*e-n;break;case Dr:o=s.length-2,a=e+s[o]-s[o+1];break;default:o=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Rr:r=t,l=2*n-e;break;case Dr:r=1,l=n+s[1]-s[0];break;default:r=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=o*h,this._offsetNext=r*h}interpolate_(t,e,n,s){let o=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,m=this._weightNext,y=(n-e)/(s-e),x=y*y,f=x*y,p=-d*f+2*d*x-d*y,E=(1+d)*f+(-1.5-2*d)*x+(-.5+d)*y+1,b=(-1-m)*f+(1.5+m)*x+.5*y,S=m*f-m*x;for(let L=0;L!==a;++L)o[L]=p*r[h+L]+E*r[c+L]+b*r[l+L]+S*r[u+L];return o}},Qs=class extends Yn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let o=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)o[d]=r[c+d]*u+r[l+d]*h;return o}},js=class extends Yn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ve=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Us(e,this.TimeBufferType),this.values=Us(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Us(t.times,Array),values:Us(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new js(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Qs(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ks(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Hi:e=this.InterpolantFactoryMethodDiscrete;break;case Vs:e=this.InterpolantFactoryMethodLinear;break;case Fs:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Hi;case this.InterpolantFactoryMethodLinear:return Vs;case this.InterpolantFactoryMethodSmooth:return Fs}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,o=0,r=s-1;for(;o!==s&&n[o]<t;)++o;for(;r!==-1&&n[r]>e;)--r;if(++r,o!==0||r!==s){o>=r&&(r=Math.max(r,1),o=r-1);let a=this.getValueSize();this.times=n.slice(o,r),this.values=this.values.slice(o*a,r*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,o=n.length;o===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let a=0;a!==o;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(r!==null&&r>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,r),t=!1;break}r=l}if(s!==void 0&&j2(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Fs,o=t.length-1,r=1;for(let a=1;a<o;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*n,d=u-n,m=u+n;for(let y=0;y!==n;++y){let x=e[u+y];if(x!==e[d+y]||x!==e[m+y]){l=!0;break}}}if(l){if(a!==r){t[r]=t[a];let u=a*n,d=r*n;for(let m=0;m!==n;++m)e[d+m]=e[u+m]}++r}}if(o>0){t[r]=t[o];for(let a=o*n,l=r*n,c=0;c!==n;++c)e[l+c]=e[a+c];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=e.slice(0,r*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Ve.prototype.TimeBufferType=Float32Array;Ve.prototype.ValueBufferType=Float32Array;Ve.prototype.DefaultInterpolation=Vs;var In=class extends Ve{constructor(t,e,n){super(t,e,n)}};In.prototype.ValueTypeName="bool";In.prototype.ValueBufferType=Array;In.prototype.DefaultInterpolation=Hi;In.prototype.InterpolantFactoryMethodLinear=void 0;In.prototype.InterpolantFactoryMethodSmooth=void 0;var to=class extends Ve{};to.prototype.ValueTypeName="color";var eo=class extends Ve{};eo.prototype.ValueTypeName="number";var no=class extends Yn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let o=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)mn.slerpFlat(o,0,r,c-a,r,c,l);return o}},ns=class extends Ve{InterpolantFactoryMethodLinear(t){return new no(this.times,this.values,this.getValueSize(),t)}};ns.prototype.ValueTypeName="quaternion";ns.prototype.InterpolantFactoryMethodSmooth=void 0;var Pn=class extends Ve{constructor(t,e,n){super(t,e,n)}};Pn.prototype.ValueTypeName="string";Pn.prototype.ValueBufferType=Array;Pn.prototype.DefaultInterpolation=Hi;Pn.prototype.InterpolantFactoryMethodLinear=void 0;Pn.prototype.InterpolantFactoryMethodSmooth=void 0;var io=class extends Ve{};io.prototype.ValueTypeName="vector";var Lr={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},so=class{constructor(t,e,n){let s=this,o=!1,r=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,o===!1&&s.onStart!==void 0&&s.onStart(h,r,a),o=!0},this.itemEnd=function(h){r++,s.onProgress!==void 0&&s.onProgress(h,r,a),r===a&&(o=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let m=c[u],y=c[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return y}return null}}},G3=new so,vi=class{constructor(t){this.manager=t!==void 0?t:G3,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,o){n.load(t,s,e,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};vi.DEFAULT_MATERIAL_NAME="__DEFAULT";var oo=class extends vi{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let o=this,r=Lr.get(t);if(r!==void 0)return o.manager.itemStart(t),setTimeout(function(){e&&e(r),o.manager.itemEnd(t)},0),r;let a=yi("img");function l(){h(),Lr.add(t,this),e&&e(this),o.manager.itemEnd(t)}function c(u){h(),s&&s(u),o.manager.itemError(t),o.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),o.manager.itemStart(t),a.src=t,a}};var is=class extends vi{constructor(t){super(t)}load(t,e,n,s){let o=new de,r=new oo(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(t,function(a){o.image=a,o.needsUpdate=!0,e!==void 0&&e(o)},n,s),o}};var ro=class extends Ki{constructor(t=-1,e=1,n=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,o=n-t,r=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,r=o+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var ao=class extends ye{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}};var na="\\[\\]\\.:\\/",t1=new RegExp("["+na+"]","g"),ia="[^"+na+"]",e1="[^"+na.replace("\\.","")+"]",n1=/((?:WC+[\/:])*)/.source.replace("WC",ia),i1=/(WCOD+)?/.source.replace("WCOD",e1),s1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ia),o1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ia),r1=new RegExp("^"+n1+i1+s1+o1+"$"),a1=["material","materials","bones","map"],Br=class{constructor(t,e,n){let s=n||qt.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,o=n.length;s!==o;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},qt=class{constructor(t,e,n){this.path=e,this.parsedPath=n||qt.parseTrackName(e),this.node=qt.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new qt.Composite(t,e,n):new qt(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(t1,"")}static parseTrackName(t){let e=r1.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=n.nodeName.substring(s+1);a1.indexOf(o)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=o)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(o){for(let r=0;r<o.length;r++){let a=o[r];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,o=e.propertyIndex;if(t||(t=qt.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let r=t[s];if(r===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=o}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};qt.Composite=Br;qt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};qt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};qt.prototype.GetterByBindingType=[qt.prototype._getValue_direct,qt.prototype._getValue_array,qt.prototype._getValue_arrayElement,qt.prototype._getValue_toArray];qt.prototype.SetterByBindingTypeAndVersioning=[[qt.prototype._setValue_direct,qt.prototype._setValue_direct_setNeedsUpdate,qt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[qt.prototype._setValue_array,qt.prototype._setValue_array_setNeedsUpdate,qt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[qt.prototype._setValue_arrayElement,qt.prototype._setValue_arrayElement_setNeedsUpdate,qt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[qt.prototype._setValue_fromArray,qt.prototype._setValue_fromArray_setNeedsUpdate,qt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var rh=new Float32Array(1);function sa(i,t,e,n){let s=l1(n);switch(e){case Xr:return i*t;case Zr:return i*t;case Yr:return i*t*2;case $r:return i*t/s.components*s.byteLength;case So:return i*t/s.components*s.byteLength;case Jr:return i*t*2/s.components*s.byteLength;case bo:return i*t*2/s.components*s.byteLength;case qr:return i*t*3/s.components*s.byteLength;case Ge:return i*t*4/s.components*s.byteLength;case wo:return i*t*4/s.components*s.byteLength;case rs:case as:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ls:case cs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ao:case Ro:return Math.max(i,16)*Math.max(t,8)/4;case Eo:case To:return Math.max(i,8)*Math.max(t,8)/2;case Do:case Io:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Po:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Lo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Bo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Uo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Fo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case No:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Oo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case zo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ko:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Vo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ho:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Go:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Wo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Xo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case qo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case hs:case Zo:case Yo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Kr:case $o:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Jo:case Ko:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function l1(i){switch(i){case nn:case Hr:return{byteLength:1,components:1};case Mi:case Gr:case Si:return{byteLength:2,components:1};case vo:case Mo:return{byteLength:2,components:4};case Ln:case xo:case sn:return{byteLength:4,components:1};case Wr:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lo}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lo);function d2(){let i=null,t=!1,e=null,n=null;function s(o,r){e(o,r),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){i=o}}}function c1(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((m,y)=>m.start-y.start);let d=0;for(let m=1;m<u.length;m++){let y=u[d],x=u[m];x.start<=y.start+y.count+1?y.count=Math.max(y.count,x.start+x.count-y.start):(++d,u[d]=x)}u.length=d+1;for(let m=0,y=u.length;m<y;m++){let x=u[m];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function r(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:o,update:r}}var h1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,p1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,u1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,d1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,f1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,m1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,g1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,C1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,y1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,_1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,x1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,v1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,M1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,S1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,b1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,w1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,E1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,A1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,T1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,R1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,D1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,I1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,P1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,L1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,B1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,U1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,F1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,N1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,O1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,z1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,k1="gl_FragColor = linearToOutputTexel( gl_FragColor );",V1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,H1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,G1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,W1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,X1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,q1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Z1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Y1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,J1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,K1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Q1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,j1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tl=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,el=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,nl=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,il=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sl=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ol=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rl=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,al=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ll=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,cl=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,hl=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,pl=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ul=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dl=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fl=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ml=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gl=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cl=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yl=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,_l=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xl=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vl=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ml=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sl=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bl=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wl=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,El=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Al=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Tl=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Rl=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dl=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Il=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Pl=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ll=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bl=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ul=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fl=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Nl=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ol=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,zl=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kl=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vl=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hl=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gl=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wl=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xl=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,ql=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Zl=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Yl=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,$l=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jl=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Kl=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ql=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,jl=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tc=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ec=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nc=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ic=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,sc=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,oc=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rc=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ac=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,lc=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,cc=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hc=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pc=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uc=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dc=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fc=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mc=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,gc=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Cc=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,yc=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,_c=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xc=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vc=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Mc=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sc=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,bc=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wc=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ec=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ac=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Tc=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rc=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Dc=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ic=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pc=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lc=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Bc=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uc=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fc=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nc=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Oc=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zc=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kc=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Vc=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Hc=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Lt={alphahash_fragment:h1,alphahash_pars_fragment:p1,alphamap_fragment:u1,alphamap_pars_fragment:d1,alphatest_fragment:f1,alphatest_pars_fragment:m1,aomap_fragment:g1,aomap_pars_fragment:C1,batching_pars_vertex:y1,batching_vertex:_1,begin_vertex:x1,beginnormal_vertex:v1,bsdfs:M1,iridescence_fragment:S1,bumpmap_pars_fragment:b1,clipping_planes_fragment:w1,clipping_planes_pars_fragment:E1,clipping_planes_pars_vertex:A1,clipping_planes_vertex:T1,color_fragment:R1,color_pars_fragment:D1,color_pars_vertex:I1,color_vertex:P1,common:L1,cube_uv_reflection_fragment:B1,defaultnormal_vertex:U1,displacementmap_pars_vertex:F1,displacementmap_vertex:N1,emissivemap_fragment:O1,emissivemap_pars_fragment:z1,colorspace_fragment:k1,colorspace_pars_fragment:V1,envmap_fragment:H1,envmap_common_pars_fragment:G1,envmap_pars_fragment:W1,envmap_pars_vertex:X1,envmap_physical_pars_fragment:nl,envmap_vertex:q1,fog_vertex:Z1,fog_pars_vertex:Y1,fog_fragment:$1,fog_pars_fragment:J1,gradientmap_pars_fragment:K1,lightmap_pars_fragment:Q1,lights_lambert_fragment:j1,lights_lambert_pars_fragment:tl,lights_pars_begin:el,lights_toon_fragment:il,lights_toon_pars_fragment:sl,lights_phong_fragment:ol,lights_phong_pars_fragment:rl,lights_physical_fragment:al,lights_physical_pars_fragment:ll,lights_fragment_begin:cl,lights_fragment_maps:hl,lights_fragment_end:pl,logdepthbuf_fragment:ul,logdepthbuf_pars_fragment:dl,logdepthbuf_pars_vertex:fl,logdepthbuf_vertex:ml,map_fragment:gl,map_pars_fragment:Cl,map_particle_fragment:yl,map_particle_pars_fragment:_l,metalnessmap_fragment:xl,metalnessmap_pars_fragment:vl,morphinstance_vertex:Ml,morphcolor_vertex:Sl,morphnormal_vertex:bl,morphtarget_pars_vertex:wl,morphtarget_vertex:El,normal_fragment_begin:Al,normal_fragment_maps:Tl,normal_pars_fragment:Rl,normal_pars_vertex:Dl,normal_vertex:Il,normalmap_pars_fragment:Pl,clearcoat_normal_fragment_begin:Ll,clearcoat_normal_fragment_maps:Bl,clearcoat_pars_fragment:Ul,iridescence_pars_fragment:Fl,opaque_fragment:Nl,packing:Ol,premultiplied_alpha_fragment:zl,project_vertex:kl,dithering_fragment:Vl,dithering_pars_fragment:Hl,roughnessmap_fragment:Gl,roughnessmap_pars_fragment:Wl,shadowmap_pars_fragment:Xl,shadowmap_pars_vertex:ql,shadowmap_vertex:Zl,shadowmask_pars_fragment:Yl,skinbase_vertex:$l,skinning_pars_vertex:Jl,skinning_vertex:Kl,skinnormal_vertex:Ql,specularmap_fragment:jl,specularmap_pars_fragment:tc,tonemapping_fragment:ec,tonemapping_pars_fragment:nc,transmission_fragment:ic,transmission_pars_fragment:sc,uv_pars_fragment:oc,uv_pars_vertex:rc,uv_vertex:ac,worldpos_vertex:lc,background_vert:cc,background_frag:hc,backgroundCube_vert:pc,backgroundCube_frag:uc,cube_vert:dc,cube_frag:fc,depth_vert:mc,depth_frag:gc,distanceRGBA_vert:Cc,distanceRGBA_frag:yc,equirect_vert:_c,equirect_frag:xc,linedashed_vert:vc,linedashed_frag:Mc,meshbasic_vert:Sc,meshbasic_frag:bc,meshlambert_vert:wc,meshlambert_frag:Ec,meshmatcap_vert:Ac,meshmatcap_frag:Tc,meshnormal_vert:Rc,meshnormal_frag:Dc,meshphong_vert:Ic,meshphong_frag:Pc,meshphysical_vert:Lc,meshphysical_frag:Bc,meshtoon_vert:Uc,meshtoon_frag:Fc,points_vert:Nc,points_frag:Oc,shadow_vert:zc,shadow_frag:kc,sprite_vert:Vc,sprite_frag:Hc},nt={common:{diffuse:{value:new Zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Dt}},envmap:{envMap:{value:null},envMapRotation:{value:new Dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Dt},normalScale:{value:new Wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0},uvTransform:{value:new Dt}},sprite:{diffuse:{value:new Zt(16777215)},opacity:{value:1},center:{value:new Wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}}},on={basic:{uniforms:xe([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:Lt.meshbasic_vert,fragmentShader:Lt.meshbasic_frag},lambert:{uniforms:xe([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Zt(0)}}]),vertexShader:Lt.meshlambert_vert,fragmentShader:Lt.meshlambert_frag},phong:{uniforms:xe([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Zt(0)},specular:{value:new Zt(1118481)},shininess:{value:30}}]),vertexShader:Lt.meshphong_vert,fragmentShader:Lt.meshphong_frag},standard:{uniforms:xe([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new Zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Lt.meshphysical_vert,fragmentShader:Lt.meshphysical_frag},toon:{uniforms:xe([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new Zt(0)}}]),vertexShader:Lt.meshtoon_vert,fragmentShader:Lt.meshtoon_frag},matcap:{uniforms:xe([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:Lt.meshmatcap_vert,fragmentShader:Lt.meshmatcap_frag},points:{uniforms:xe([nt.points,nt.fog]),vertexShader:Lt.points_vert,fragmentShader:Lt.points_frag},dashed:{uniforms:xe([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Lt.linedashed_vert,fragmentShader:Lt.linedashed_frag},depth:{uniforms:xe([nt.common,nt.displacementmap]),vertexShader:Lt.depth_vert,fragmentShader:Lt.depth_frag},normal:{uniforms:xe([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:Lt.meshnormal_vert,fragmentShader:Lt.meshnormal_frag},sprite:{uniforms:xe([nt.sprite,nt.fog]),vertexShader:Lt.sprite_vert,fragmentShader:Lt.sprite_frag},background:{uniforms:{uvTransform:{value:new Dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Lt.background_vert,fragmentShader:Lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Dt}},vertexShader:Lt.backgroundCube_vert,fragmentShader:Lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Lt.cube_vert,fragmentShader:Lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Lt.equirect_vert,fragmentShader:Lt.equirect_frag},distanceRGBA:{uniforms:xe([nt.common,nt.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Lt.distanceRGBA_vert,fragmentShader:Lt.distanceRGBA_frag},shadow:{uniforms:xe([nt.lights,nt.fog,{color:{value:new Zt(0)},opacity:{value:1}}]),vertexShader:Lt.shadow_vert,fragmentShader:Lt.shadow_frag}};on.physical={uniforms:xe([on.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Dt},clearcoatNormalScale:{value:new Wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Dt},sheen:{value:0},sheenColor:{value:new Zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Dt},transmissionSamplerSize:{value:new Wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Dt},attenuationDistance:{value:0},attenuationColor:{value:new Zt(0)},specularColor:{value:new Zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Dt},anisotropyVector:{value:new Wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Dt}}]),vertexShader:Lt.meshphysical_vert,fragmentShader:Lt.meshphysical_frag};var Qo={r:0,b:0,g:0},ti=new ke,Gc=new se;function Wc(i,t,e,n,s,o,r){let a=new Zt(0),l=o===!0?0:1,c,h,u=null,d=0,m=null;function y(b){let S=b.isScene===!0?b.background:null;return S&&S.isTexture&&(S=(b.backgroundBlurriness>0?e:t).get(S)),S}function x(b){let S=!1,L=y(b);L===null?p(a,l):L&&L.isColor&&(p(L,1),S=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function f(b,S){let L=y(S);L&&(L.isCubeTexture||L.mapping===ss)?(h===void 0&&(h=new Ae(new Dn(1,1,1),new Be({name:"BackgroundCubeMaterial",uniforms:jn(on.backgroundCube.uniforms),vertexShader:on.backgroundCube.vertexShader,fragmentShader:on.backgroundCube.fragmentShader,side:Me,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,D,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ti.copy(S.backgroundRotation),ti.x*=-1,ti.y*=-1,ti.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(ti.y*=-1,ti.z*=-1),h.material.uniforms.envMap.value=L,h.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Gc.makeRotationFromEuler(ti)),h.material.toneMapped=Ht.getTransfer(L.colorSpace)!==Kt,(u!==L||d!==L.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=L,d=L.version,m=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):L&&L.isTexture&&(c===void 0&&(c=new Ae(new gn(2,2),new Be({name:"BackgroundMaterial",uniforms:jn(on.background.uniforms),vertexShader:on.background.vertexShader,fragmentShader:on.background.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=L,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Ht.getTransfer(L.colorSpace)!==Kt,L.matrixAutoUpdate===!0&&L.updateMatrix(),c.material.uniforms.uvTransform.value.copy(L.matrix),(u!==L||d!==L.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,u=L,d=L.version,m=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,S){b.getRGB(Qo,ea(i)),n.buffers.color.setClear(Qo.r,Qo.g,Qo.b,S,r)}function E(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,S=1){a.set(b),l=S,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(a,l)},render:x,addToRenderList:f,dispose:E}}function Xc(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),o=s,r=!1;function a(_,T,q,z,W){let K=!1,H=u(z,q,T);o!==H&&(o=H,c(o.object)),K=m(_,z,q,W),K&&y(_,z,q,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(K||r)&&(r=!1,S(_,T,q,z),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return i.createVertexArray()}function c(_){return i.bindVertexArray(_)}function h(_){return i.deleteVertexArray(_)}function u(_,T,q){let z=q.wireframe===!0,W=n[_.id];W===void 0&&(W={},n[_.id]=W);let K=W[T.id];K===void 0&&(K={},W[T.id]=K);let H=K[z];return H===void 0&&(H=d(l()),K[z]=H),H}function d(_){let T=[],q=[],z=[];for(let W=0;W<e;W++)T[W]=0,q[W]=0,z[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:q,attributeDivisors:z,object:_,attributes:{},index:null}}function m(_,T,q,z){let W=o.attributes,K=T.attributes,H=0,tt=q.getAttributes();for(let V in tt)if(tt[V].location>=0){let ut=W[V],xt=K[V];if(xt===void 0&&(V==="instanceMatrix"&&_.instanceMatrix&&(xt=_.instanceMatrix),V==="instanceColor"&&_.instanceColor&&(xt=_.instanceColor)),ut===void 0||ut.attribute!==xt||xt&&ut.data!==xt.data)return!0;H++}return o.attributesNum!==H||o.index!==z}function y(_,T,q,z){let W={},K=T.attributes,H=0,tt=q.getAttributes();for(let V in tt)if(tt[V].location>=0){let ut=K[V];ut===void 0&&(V==="instanceMatrix"&&_.instanceMatrix&&(ut=_.instanceMatrix),V==="instanceColor"&&_.instanceColor&&(ut=_.instanceColor));let xt={};xt.attribute=ut,ut&&ut.data&&(xt.data=ut.data),W[V]=xt,H++}o.attributes=W,o.attributesNum=H,o.index=z}function x(){let _=o.newAttributes;for(let T=0,q=_.length;T<q;T++)_[T]=0}function f(_){p(_,0)}function p(_,T){let q=o.newAttributes,z=o.enabledAttributes,W=o.attributeDivisors;q[_]=1,z[_]===0&&(i.enableVertexAttribArray(_),z[_]=1),W[_]!==T&&(i.vertexAttribDivisor(_,T),W[_]=T)}function E(){let _=o.newAttributes,T=o.enabledAttributes;for(let q=0,z=T.length;q<z;q++)T[q]!==_[q]&&(i.disableVertexAttribArray(q),T[q]=0)}function b(_,T,q,z,W,K,H){H===!0?i.vertexAttribIPointer(_,T,q,W,K):i.vertexAttribPointer(_,T,q,z,W,K)}function S(_,T,q,z){x();let W=z.attributes,K=q.getAttributes(),H=T.defaultAttributeValues;for(let tt in K){let V=K[tt];if(V.location>=0){let ot=W[tt];if(ot===void 0&&(tt==="instanceMatrix"&&_.instanceMatrix&&(ot=_.instanceMatrix),tt==="instanceColor"&&_.instanceColor&&(ot=_.instanceColor)),ot!==void 0){let ut=ot.normalized,xt=ot.itemSize,Bt=t.get(ot);if(Bt===void 0)continue;let Qt=Bt.buffer,X=Bt.type,et=Bt.bytesPerElement,Ct=X===i.INT||X===i.UNSIGNED_INT||ot.gpuType===xo;if(ot.isInterleavedBufferAttribute){let rt=ot.data,wt=rt.stride,Xt=ot.offset;if(rt.isInstancedInterleavedBuffer){for(let Et=0;Et<V.locationSize;Et++)p(V.location+Et,rt.meshPerAttribute);_.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Et=0;Et<V.locationSize;Et++)f(V.location+Et);i.bindBuffer(i.ARRAY_BUFFER,Qt);for(let Et=0;Et<V.locationSize;Et++)b(V.location+Et,xt/V.locationSize,X,ut,wt*et,(Xt+xt/V.locationSize*Et)*et,Ct)}else{if(ot.isInstancedBufferAttribute){for(let rt=0;rt<V.locationSize;rt++)p(V.location+rt,ot.meshPerAttribute);_.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let rt=0;rt<V.locationSize;rt++)f(V.location+rt);i.bindBuffer(i.ARRAY_BUFFER,Qt);for(let rt=0;rt<V.locationSize;rt++)b(V.location+rt,xt/V.locationSize,X,ut,xt*et,xt/V.locationSize*rt*et,Ct)}}else if(H!==void 0){let ut=H[tt];if(ut!==void 0)switch(ut.length){case 2:i.vertexAttrib2fv(V.location,ut);break;case 3:i.vertexAttrib3fv(V.location,ut);break;case 4:i.vertexAttrib4fv(V.location,ut);break;default:i.vertexAttrib1fv(V.location,ut)}}}}E()}function L(){B();for(let _ in n){let T=n[_];for(let q in T){let z=T[q];for(let W in z)h(z[W].object),delete z[W];delete T[q]}delete n[_]}}function A(_){if(n[_.id]===void 0)return;let T=n[_.id];for(let q in T){let z=T[q];for(let W in z)h(z[W].object),delete z[W];delete T[q]}delete n[_.id]}function D(_){for(let T in n){let q=n[T];if(q[_.id]===void 0)continue;let z=q[_.id];for(let W in z)h(z[W].object),delete z[W];delete q[_.id]}}function B(){v(),r=!0,o!==s&&(o=s,c(o.object))}function v(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:B,resetDefaultState:v,dispose:L,releaseStatesOfGeometry:A,releaseStatesOfProgram:D,initAttributes:x,enableAttribute:f,disableUnusedAttributes:E}}function qc(i,t,e){let n;function s(c){n=c}function o(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function r(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let m=0;for(let y=0;y<u;y++)m+=h[y];e.update(m,n,1)}function l(c,h,u,d){if(u===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let y=0;y<c.length;y++)r(c[y],h[y],d[y]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let y=0;for(let x=0;x<u;x++)y+=h[x]*d[x];e.update(y,n,1)}}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Zc(i,t,e,n){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let D=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(D){return!(D!==Ge&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){let B=D===Si&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(D!==nn&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==sn&&!B)}function l(D){if(D==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=y>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:y,maxTextureSize:x,maxCubemapSize:f,maxAttributes:p,maxVertexUniforms:E,maxVaryings:b,maxFragmentUniforms:S,vertexTextures:L,maxSamples:A}}function Yc(i){let t=this,e=null,n=0,s=!1,o=!1,r=new $e,a=new Dt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let m=u.length!==0||d||n!==0||s;return s=d,n=u.length,m},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,m){let y=u.clippingPlanes,x=u.clipIntersection,f=u.clipShadows,p=i.get(u);if(!s||y===null||y.length===0||o&&!f)o?h(null):c();else{let E=o?0:n,b=E*4,S=p.clippingState||null;l.value=S,S=h(y,d,b,m);for(let L=0;L!==b;++L)S[L]=e[L];p.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,m,y){let x=u!==null?u.length:0,f=null;if(x!==0){if(f=l.value,y!==!0||f===null){let p=m+x*4,E=d.matrixWorldInverse;a.getNormalMatrix(E),(f===null||f.length<p)&&(f=new Float32Array(p));for(let b=0,S=m;b!==x;++b,S+=4)r.copy(u[b]).applyMatrix4(E,a),r.normal.toArray(f,S),f[S+3]=r.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,f}}function $c(i){let t=new WeakMap;function e(r,a){return a===Co?r.mapping=$n:a===yo&&(r.mapping=Jn),r}function n(r){if(r&&r.isTexture){let a=r.mapping;if(a===Co||a===yo)if(t.has(r)){let l=t.get(r).texture;return e(l,r.mapping)}else{let l=r.image;if(l&&l.height>0){let c=new Ys(l.height);return c.fromEquirectangularTexture(i,r),t.set(r,c),r.addEventListener("dispose",s),e(c.texture,r.mapping)}else return null}}return r}function s(r){let a=r.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}var wi=4,W3=[.125,.215,.35,.446,.526,.582],ii=20,oa=new ro,X3=new Zt,ra=null,aa=0,la=0,ca=!1,ni=(1+Math.sqrt(5))/2,bi=1/ni,q3=[new O(-ni,bi,0),new O(ni,bi,0),new O(-bi,0,ni),new O(bi,0,ni),new O(0,ni,-bi),new O(0,ni,bi),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)],er=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ra=this._renderer.getRenderTarget(),aa=this._renderer.getActiveCubeFace(),la=this._renderer.getActiveMipmapLevel(),ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,s,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$3(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Y3(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ra,aa,la),this._renderer.xr.enabled=ca,t.scissorTest=!1,jo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===$n||t.mapping===Jn?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ra=this._renderer.getRenderTarget(),aa=this._renderer.getActiveCubeFace(),la=this._renderer.getActiveMipmapLevel(),ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Le,minFilter:Le,generateMipmaps:!1,type:Si,format:Ge,colorSpace:qn,depthBuffer:!1},s=Z3(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Z3(t,e,n);let{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Jc(o)),this._blurMaterial=Kc(o,t,e)}return s}_compileMaterial(t){let e=new Ae(this._lodPlanes[0],t);this._renderer.compile(e,oa)}_sceneToCubeUV(t,e,n,s){let a=new ye(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(X3),h.toneMapping=yn,h.autoClear=!1;let m=new Yi({name:"PMREM.Background",side:Me,depthWrite:!1,depthTest:!1}),y=new Ae(new Dn,m),x=!1,f=t.background;f?f.isColor&&(m.color.copy(f),t.background=null,x=!0):(m.color.copy(X3),x=!0);for(let p=0;p<6;p++){let E=p%3;E===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):E===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let b=this._cubeSize;jo(s,E*b,p>2?b:0,b,b),h.setRenderTarget(s),x&&h.render(y,a),h.render(t,a)}y.geometry.dispose(),y.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=f}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===$n||t.mapping===Jn;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=$3()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Y3());let o=s?this._cubemapMaterial:this._equirectMaterial,r=new Ae(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;let l=this._cubeSize;jo(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(r,oa)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let o=1;o<s;o++){let r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=q3[(s-o-1)%q3.length];this._blur(t,o-1,o,r,a)}e.autoClear=n}_blur(t,e,n,s,o){let r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,s,"latitudinal",o),this._halfBlur(r,t,n,n,s,"longitudinal",o)}_halfBlur(t,e,n,s,o,r,a){let l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Ae(this._lodPlanes[s],c),d=c.uniforms,m=this._sizeLods[n]-1,y=isFinite(o)?Math.PI/(2*m):2*Math.PI/(2*ii-1),x=o/y,f=isFinite(o)?1+Math.floor(h*x):ii;f>ii&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${ii}`);let p=[],E=0;for(let D=0;D<ii;++D){let B=D/x,v=Math.exp(-B*B/2);p.push(v),D===0?E+=v:D<f&&(E+=2*v)}for(let D=0;D<p.length;D++)p[D]=p[D]/E;d.envMap.value=t.texture,d.samples.value=f,d.weights.value=p,d.latitudinal.value=r==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:b}=this;d.dTheta.value=y,d.mipInt.value=b-n;let S=this._sizeLods[s],L=3*S*(s>b-wi?s-b+wi:0),A=4*(this._cubeSize-S);jo(e,L,A,3*S,2*S),l.setRenderTarget(e),l.render(u,oa)}};function Jc(i){let t=[],e=[],n=[],s=i,o=i-wi+1+W3.length;for(let r=0;r<o;r++){let a=Math.pow(2,s);e.push(a);let l=1/a;r>i-wi?l=W3[r-i+wi-1]:r===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,y=6,x=3,f=2,p=1,E=new Float32Array(x*y*m),b=new Float32Array(f*y*m),S=new Float32Array(p*y*m);for(let A=0;A<m;A++){let D=A%3*2/3-1,B=A>2?0:-1,v=[D,B,0,D+2/3,B,0,D+2/3,B+1,0,D,B,0,D+2/3,B+1,0,D,B+1,0];E.set(v,x*y*A),b.set(d,f*y*A);let _=[A,A,A,A,A,A];S.set(_,p*y*A)}let L=new je;L.setAttribute("position",new Pe(E,x)),L.setAttribute("uv",new Pe(b,f)),L.setAttribute("faceIndex",new Pe(S,p)),t.push(L),s>wi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Z3(i,t,e){let n=new Qe(i,t,e);return n.texture.mapping=ss,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function jo(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Kc(i,t,e){let n=new Float32Array(ii),s=new O(0,1,0);return new Be({name:"SphericalGaussianBlur",defines:{n:ii,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:_a(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function Y3(){return new Be({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_a(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function $3(){return new Be({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_a(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function _a(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Qc(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Co||l===yo,h=l===$n||l===Jn;if(c||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new er(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let m=a.image;return c&&m&&m.height>0||h&&m&&s(m)?(e===null&&(e=new er(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",o),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function o(a){let l=a.target;l.removeEventListener("dispose",o);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function jc(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Qn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function t4(i,t,e,n){let s={},o=new WeakMap;function r(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let y in d.attributes)t.remove(d.attributes[y]);d.removeEventListener("dispose",r),delete s[d.id];let m=o.get(d);m&&(t.remove(m),o.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",r),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let m in d)t.update(d[m],i.ARRAY_BUFFER)}function c(u){let d=[],m=u.index,y=u.attributes.position,x=0;if(m!==null){let E=m.array;x=m.version;for(let b=0,S=E.length;b<S;b+=3){let L=E[b+0],A=E[b+1],D=E[b+2];d.push(L,A,A,D,D,L)}}else if(y!==void 0){let E=y.array;x=y.version;for(let b=0,S=E.length/3-1;b<S;b+=3){let L=b+0,A=b+1,D=b+2;d.push(L,A,A,D,D,L)}}else return;let f=new(ta(d)?Ji:$i)(d,1);f.version=x;let p=o.get(u);p&&t.remove(p),o.set(u,f)}function h(u){let d=o.get(u);if(d){let m=u.index;m!==null&&d.version<m.version&&c(u)}else c(u);return o.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function e4(i,t,e){let n;function s(d){n=d}let o,r;function a(d){o=d.type,r=d.bytesPerElement}function l(d,m){i.drawElements(n,m,o,d*r),e.update(m,n,1)}function c(d,m,y){y!==0&&(i.drawElementsInstanced(n,m,o,d*r,y),e.update(m,n,y))}function h(d,m,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,o,d,0,y);let f=0;for(let p=0;p<y;p++)f+=m[p];e.update(f,n,1)}function u(d,m,y,x){if(y===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<d.length;p++)c(d[p]/r,m[p],x[p]);else{f.multiDrawElementsInstancedWEBGL(n,m,0,o,d,0,x,0,y);let p=0;for(let E=0;E<y;E++)p+=m[E]*x[E];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function n4(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(e.calls++,r){case i.TRIANGLES:e.triangles+=a*(o/3);break;case i.LINES:e.lines+=a*(o/2);break;case i.LINE_STRIP:e.lines+=a*(o-1);break;case i.LINE_LOOP:e.lines+=a*o;break;case i.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function i4(i,t,e){let n=new WeakMap,s=new ne;function o(r,a,l){let c=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let v=function(){D.dispose(),n.delete(a),a.removeEventListener("dispose",v)};d!==void 0&&d.texture.dispose();let m=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],E=a.morphAttributes.color||[],b=0;m===!0&&(b=1),y===!0&&(b=2),x===!0&&(b=3);let S=a.attributes.position.count*b,L=1;S>t.maxTextureSize&&(L=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let A=new Float32Array(S*L*4*u),D=new qi(A,S,L,u);D.type=sn,D.needsUpdate=!0;let B=b*4;for(let _=0;_<u;_++){let T=f[_],q=p[_],z=E[_],W=S*L*4*_;for(let K=0;K<T.count;K++){let H=K*B;m===!0&&(s.fromBufferAttribute(T,K),A[W+H+0]=s.x,A[W+H+1]=s.y,A[W+H+2]=s.z,A[W+H+3]=0),y===!0&&(s.fromBufferAttribute(q,K),A[W+H+4]=s.x,A[W+H+5]=s.y,A[W+H+6]=s.z,A[W+H+7]=0),x===!0&&(s.fromBufferAttribute(z,K),A[W+H+8]=s.x,A[W+H+9]=s.y,A[W+H+10]=s.z,A[W+H+11]=z.itemSize===4?s.w:1)}}d={count:u,texture:D,size:new Wt(S,L)},n.set(a,d),a.addEventListener("dispose",v)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",r.morphTexture,e);else{let m=0;for(let x=0;x<c.length;x++)m+=c[x];let y=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",y),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:o}}function s4(i,t,e,n){let s=new WeakMap;function o(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function r(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:o,dispose:r}}var f2=new de,J3=new es(1,1),m2=new qi,g2=new Xs,C2=new Qi,K3=[],Q3=[],j3=new Float32Array(16),t2=new Float32Array(9),e2=new Float32Array(4);function Ai(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,o=K3[s];if(o===void 0&&(o=new Float32Array(s),K3[s]=o),t!==0){n.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,i[r].toArray(o,a)}return o}function he(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function pe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ir(i,t){let e=Q3[t];e===void 0&&(e=new Int32Array(t),Q3[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function o4(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function r4(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(he(e,t))return;i.uniform2fv(this.addr,t),pe(e,t)}}function a4(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(he(e,t))return;i.uniform3fv(this.addr,t),pe(e,t)}}function l4(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(he(e,t))return;i.uniform4fv(this.addr,t),pe(e,t)}}function c4(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(he(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),pe(e,t)}else{if(he(e,n))return;e2.set(n),i.uniformMatrix2fv(this.addr,!1,e2),pe(e,n)}}function h4(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(he(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),pe(e,t)}else{if(he(e,n))return;t2.set(n),i.uniformMatrix3fv(this.addr,!1,t2),pe(e,n)}}function p4(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(he(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),pe(e,t)}else{if(he(e,n))return;j3.set(n),i.uniformMatrix4fv(this.addr,!1,j3),pe(e,n)}}function u4(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function d4(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(he(e,t))return;i.uniform2iv(this.addr,t),pe(e,t)}}function f4(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(he(e,t))return;i.uniform3iv(this.addr,t),pe(e,t)}}function m4(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(he(e,t))return;i.uniform4iv(this.addr,t),pe(e,t)}}function g4(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function C4(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(he(e,t))return;i.uniform2uiv(this.addr,t),pe(e,t)}}function y4(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(he(e,t))return;i.uniform3uiv(this.addr,t),pe(e,t)}}function _4(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(he(e,t))return;i.uniform4uiv(this.addr,t),pe(e,t)}}function x4(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let o;this.type===i.SAMPLER_2D_SHADOW?(J3.compareFunction=Qr,o=J3):o=f2,e.setTexture2D(t||o,s)}function v4(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||g2,s)}function M4(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||C2,s)}function S4(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||m2,s)}function b4(i){switch(i){case 5126:return o4;case 35664:return r4;case 35665:return a4;case 35666:return l4;case 35674:return c4;case 35675:return h4;case 35676:return p4;case 5124:case 35670:return u4;case 35667:case 35671:return d4;case 35668:case 35672:return f4;case 35669:case 35673:return m4;case 5125:return g4;case 36294:return C4;case 36295:return y4;case 36296:return _4;case 35678:case 36198:case 36298:case 36306:case 35682:return x4;case 35679:case 36299:case 36307:return v4;case 35680:case 36300:case 36308:case 36293:return M4;case 36289:case 36303:case 36311:case 36292:return S4}}function w4(i,t){i.uniform1fv(this.addr,t)}function E4(i,t){let e=Ai(t,this.size,2);i.uniform2fv(this.addr,e)}function A4(i,t){let e=Ai(t,this.size,3);i.uniform3fv(this.addr,e)}function T4(i,t){let e=Ai(t,this.size,4);i.uniform4fv(this.addr,e)}function R4(i,t){let e=Ai(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function D4(i,t){let e=Ai(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function I4(i,t){let e=Ai(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function P4(i,t){i.uniform1iv(this.addr,t)}function L4(i,t){i.uniform2iv(this.addr,t)}function B4(i,t){i.uniform3iv(this.addr,t)}function U4(i,t){i.uniform4iv(this.addr,t)}function F4(i,t){i.uniform1uiv(this.addr,t)}function N4(i,t){i.uniform2uiv(this.addr,t)}function O4(i,t){i.uniform3uiv(this.addr,t)}function z4(i,t){i.uniform4uiv(this.addr,t)}function k4(i,t,e){let n=this.cache,s=t.length,o=ir(e,s);he(n,o)||(i.uniform1iv(this.addr,o),pe(n,o));for(let r=0;r!==s;++r)e.setTexture2D(t[r]||f2,o[r])}function V4(i,t,e){let n=this.cache,s=t.length,o=ir(e,s);he(n,o)||(i.uniform1iv(this.addr,o),pe(n,o));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||g2,o[r])}function H4(i,t,e){let n=this.cache,s=t.length,o=ir(e,s);he(n,o)||(i.uniform1iv(this.addr,o),pe(n,o));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||C2,o[r])}function G4(i,t,e){let n=this.cache,s=t.length,o=ir(e,s);he(n,o)||(i.uniform1iv(this.addr,o),pe(n,o));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||m2,o[r])}function W4(i){switch(i){case 5126:return w4;case 35664:return E4;case 35665:return A4;case 35666:return T4;case 35674:return R4;case 35675:return D4;case 35676:return I4;case 5124:case 35670:return P4;case 35667:case 35671:return L4;case 35668:case 35672:return B4;case 35669:case 35673:return U4;case 5125:return F4;case 36294:return N4;case 36295:return O4;case 36296:return z4;case 35678:case 36198:case 36298:case 36306:case 35682:return k4;case 35679:case 36299:case 36307:return V4;case 35680:case 36300:case 36308:case 36293:return H4;case 36289:case 36303:case 36311:case 36292:return G4}}var pa=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=b4(e.type)}},ua=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=W4(e.type)}},da=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let o=0,r=s.length;o!==r;++o){let a=s[o];a.setValue(t,e[a.id],n)}}},ha=/(\w+)(\])?(\[|\.)?/g;function n2(i,t){i.seq.push(t),i.map[t.id]=t}function X4(i,t,e){let n=i.name,s=n.length;for(ha.lastIndex=0;;){let o=ha.exec(n),r=ha.lastIndex,a=o[1],l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===s){n2(e,c===void 0?new pa(a,i,t):new ua(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new da(a),n2(e,u)),e=u}}}var Ei=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let o=t.getActiveUniform(e,s),r=t.getUniformLocation(e,o.name);X4(o,r,this)}}setValue(t,e,n,s){let o=this.map[e];o!==void 0&&o.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let o=0,r=e.length;o!==r;++o){let a=e[o],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,o=t.length;s!==o;++s){let r=t[s];r.id in e&&n.push(r)}return n}};function i2(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var q4=37297,Z4=0;function Y4(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=s;r<o;r++){let a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}var s2=new Dt;function $4(i){Ht._getMatrix(s2,Ht.workingColorSpace,i);let t=`mat3( ${s2.elements.map(e=>e.toFixed(4))} )`;switch(Ht.getTransfer(i)){case Gi:return[t,"LinearTransferOETF"];case Kt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function o2(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let r=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+Y4(i.getShaderSource(t),r)}else return s}function J4(i,t){let e=$4(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function K4(i,t){let e;switch(t){case y3:e="Linear";break;case _3:e="Reinhard";break;case x3:e="Cineon";break;case v3:e="ACESFilmic";break;case S3:e="AgX";break;case b3:e="Neutral";break;case M3:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var tr=new O;function Q4(){Ht.getLuminanceCoefficients(tr);let i=tr.x.toFixed(4),t=tr.y.toFixed(4),e=tr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function j4(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(us).join(`
`)}function t0(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function e0(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let o=i.getActiveAttrib(t,s),r=o.name,a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:i.getAttribLocation(t,r),locationSize:a}}return e}function us(i){return i!==""}function r2(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function a2(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var n0=/^[ \t]*#include +<([\w\d./]+)>/gm;function fa(i){return i.replace(n0,s0)}var i0=new Map;function s0(i,t){let e=Lt[t];if(e===void 0){let n=i0.get(t);if(n!==void 0)e=Lt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return fa(e)}var o0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function l2(i){return i.replace(o0,r0)}function r0(i,t,e,n){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function c2(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function a0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Fr?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ka?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===tn&&(t="SHADOWMAP_TYPE_VSM"),t}function l0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case $n:case Jn:t="ENVMAP_TYPE_CUBE";break;case ss:t="ENVMAP_TYPE_CUBE_UV";break}return t}function c0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Jn:t="ENVMAP_MODE_REFRACTION";break}return t}function h0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case kr:t="ENVMAP_BLENDING_MULTIPLY";break;case g3:t="ENVMAP_BLENDING_MIX";break;case C3:t="ENVMAP_BLENDING_ADD";break}return t}function p0(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function u0(i,t,e,n){let s=i.getContext(),o=e.defines,r=e.vertexShader,a=e.fragmentShader,l=a0(e),c=l0(e),h=c0(e),u=h0(e),d=p0(e),m=j4(e),y=t0(o),x=s.createProgram(),f,p,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(us).join(`
`),f.length>0&&(f+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(us).join(`
`),p.length>0&&(p+=`
`)):(f=[c2(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(us).join(`
`),p=[c2(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==yn?"#define TONE_MAPPING":"",e.toneMapping!==yn?Lt.tonemapping_pars_fragment:"",e.toneMapping!==yn?K4("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Lt.colorspace_pars_fragment,J4("linearToOutputTexel",e.outputColorSpace),Q4(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(us).join(`
`)),r=fa(r),r=r2(r,e),r=a2(r,e),a=fa(a),a=r2(a,e),a=a2(a,e),r=l2(r),a=l2(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,p=["#define varying in",e.glslVersion===jr?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===jr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let b=E+f+r,S=E+p+a,L=i2(s,s.VERTEX_SHADER,b),A=i2(s,s.FRAGMENT_SHADER,S);s.attachShader(x,L),s.attachShader(x,A),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function D(T){if(i.debug.checkShaderErrors){let q=s.getProgramInfoLog(x).trim(),z=s.getShaderInfoLog(L).trim(),W=s.getShaderInfoLog(A).trim(),K=!0,H=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,L,A);else{let tt=o2(s,L,"vertex"),V=o2(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+q+`
`+tt+`
`+V)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(z===""||W==="")&&(H=!1);H&&(T.diagnostics={runnable:K,programLog:q,vertexShader:{log:z,prefix:f},fragmentShader:{log:W,prefix:p}})}s.deleteShader(L),s.deleteShader(A),B=new Ei(s,x),v=e0(s,x)}let B;this.getUniforms=function(){return B===void 0&&D(this),B};let v;this.getAttributes=function(){return v===void 0&&D(this),v};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(x,q4)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Z4++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=L,this.fragmentShader=A,this}var d0=0,ma=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new ga(t),e.set(t,n)),n}},ga=class{constructor(t){this.id=d0++,this.code=t,this.usedTimes=0}};function f0(i,t,e,n,s,o,r){let a=new Zi,l=new ma,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,m=s.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(v){return c.add(v),v===0?"uv":`uv${v}`}function f(v,_,T,q,z){let W=q.fog,K=z.geometry,H=v.isMeshStandardMaterial?q.environment:null,tt=(v.isMeshStandardMaterial?e:t).get(v.envMap||H),V=tt&&tt.mapping===ss?tt.image.height:null,ot=y[v.type];v.precision!==null&&(m=s.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));let ut=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,xt=ut!==void 0?ut.length:0,Bt=0;K.morphAttributes.position!==void 0&&(Bt=1),K.morphAttributes.normal!==void 0&&(Bt=2),K.morphAttributes.color!==void 0&&(Bt=3);let Qt,X,et,Ct;if(ot){let Jt=on[ot];Qt=Jt.vertexShader,X=Jt.fragmentShader}else Qt=v.vertexShader,X=v.fragmentShader,l.update(v),et=l.getVertexShaderID(v),Ct=l.getFragmentShaderID(v);let rt=i.getRenderTarget(),wt=i.state.buffers.depth.getReversed(),Xt=z.isInstancedMesh===!0,Et=z.isBatchedMesh===!0,ae=!!v.map,ie=!!v.matcap,Ft=!!tt,w=!!v.aoMap,Ue=!!v.lightMap,Nt=!!v.bumpMap,Ot=!!v.normalMap,vt=!!v.displacementMap,te=!!v.emissiveMap,_t=!!v.metalnessMap,M=!!v.roughnessMap,g=v.anisotropy>0,U=v.clearcoat>0,Z=v.dispersion>0,J=v.iridescence>0,G=v.sheen>0,yt=v.transmission>0,at=g&&!!v.anisotropyMap,dt=U&&!!v.clearcoatMap,kt=U&&!!v.clearcoatNormalMap,j=U&&!!v.clearcoatRoughnessMap,ft=J&&!!v.iridescenceMap,bt=J&&!!v.iridescenceThicknessMap,At=G&&!!v.sheenColorMap,mt=G&&!!v.sheenRoughnessMap,zt=!!v.specularMap,Pt=!!v.specularColorMap,jt=!!v.specularIntensityMap,R=yt&&!!v.transmissionMap,it=yt&&!!v.thicknessMap,k=!!v.gradientMap,Y=!!v.alphaMap,ct=v.alphaTest>0,lt=!!v.alphaHash,It=!!v.extensions,oe=yn;v.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(oe=i.toneMapping);let me={shaderID:ot,shaderType:v.type,shaderName:v.name,vertexShader:Qt,fragmentShader:X,defines:v.defines,customVertexShaderID:et,customFragmentShaderID:Ct,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,batching:Et,batchingColor:Et&&z._colorsTexture!==null,instancing:Xt,instancingColor:Xt&&z.instanceColor!==null,instancingMorph:Xt&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:rt===null?i.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:qn,alphaToCoverage:!!v.alphaToCoverage,map:ae,matcap:ie,envMap:Ft,envMapMode:Ft&&tt.mapping,envMapCubeUVHeight:V,aoMap:w,lightMap:Ue,bumpMap:Nt,normalMap:Ot,displacementMap:d&&vt,emissiveMap:te,normalMapObjectSpace:Ot&&v.normalMapType===R3,normalMapTangentSpace:Ot&&v.normalMapType===T3,metalnessMap:_t,roughnessMap:M,anisotropy:g,anisotropyMap:at,clearcoat:U,clearcoatMap:dt,clearcoatNormalMap:kt,clearcoatRoughnessMap:j,dispersion:Z,iridescence:J,iridescenceMap:ft,iridescenceThicknessMap:bt,sheen:G,sheenColorMap:At,sheenRoughnessMap:mt,specularMap:zt,specularColorMap:Pt,specularIntensityMap:jt,transmission:yt,transmissionMap:R,thicknessMap:it,gradientMap:k,opaque:v.transparent===!1&&v.blending===Gn&&v.alphaToCoverage===!1,alphaMap:Y,alphaTest:ct,alphaHash:lt,combine:v.combine,mapUv:ae&&x(v.map.channel),aoMapUv:w&&x(v.aoMap.channel),lightMapUv:Ue&&x(v.lightMap.channel),bumpMapUv:Nt&&x(v.bumpMap.channel),normalMapUv:Ot&&x(v.normalMap.channel),displacementMapUv:vt&&x(v.displacementMap.channel),emissiveMapUv:te&&x(v.emissiveMap.channel),metalnessMapUv:_t&&x(v.metalnessMap.channel),roughnessMapUv:M&&x(v.roughnessMap.channel),anisotropyMapUv:at&&x(v.anisotropyMap.channel),clearcoatMapUv:dt&&x(v.clearcoatMap.channel),clearcoatNormalMapUv:kt&&x(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&x(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&x(v.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&x(v.iridescenceThicknessMap.channel),sheenColorMapUv:At&&x(v.sheenColorMap.channel),sheenRoughnessMapUv:mt&&x(v.sheenRoughnessMap.channel),specularMapUv:zt&&x(v.specularMap.channel),specularColorMapUv:Pt&&x(v.specularColorMap.channel),specularIntensityMapUv:jt&&x(v.specularIntensityMap.channel),transmissionMapUv:R&&x(v.transmissionMap.channel),thicknessMapUv:it&&x(v.thicknessMap.channel),alphaMapUv:Y&&x(v.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Ot||g),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!K.attributes.uv&&(ae||Y),fog:!!W,useFog:v.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:wt,skinning:z.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:xt,morphTextureStride:Bt,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:oe,decodeVideoTexture:ae&&v.map.isVideoTexture===!0&&Ht.getTransfer(v.map.colorSpace)===Kt,decodeVideoTextureEmissive:te&&v.emissiveMap.isVideoTexture===!0&&Ht.getTransfer(v.emissiveMap.colorSpace)===Kt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===He,flipSided:v.side===Me,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:It&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(It&&v.extensions.multiDraw===!0||Et)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return me.vertexUv1s=c.has(1),me.vertexUv2s=c.has(2),me.vertexUv3s=c.has(3),c.clear(),me}function p(v){let _=[];if(v.shaderID?_.push(v.shaderID):(_.push(v.customVertexShaderID),_.push(v.customFragmentShaderID)),v.defines!==void 0)for(let T in v.defines)_.push(T),_.push(v.defines[T]);return v.isRawShaderMaterial===!1&&(E(_,v),b(_,v),_.push(i.outputColorSpace)),_.push(v.customProgramCacheKey),_.join()}function E(v,_){v.push(_.precision),v.push(_.outputColorSpace),v.push(_.envMapMode),v.push(_.envMapCubeUVHeight),v.push(_.mapUv),v.push(_.alphaMapUv),v.push(_.lightMapUv),v.push(_.aoMapUv),v.push(_.bumpMapUv),v.push(_.normalMapUv),v.push(_.displacementMapUv),v.push(_.emissiveMapUv),v.push(_.metalnessMapUv),v.push(_.roughnessMapUv),v.push(_.anisotropyMapUv),v.push(_.clearcoatMapUv),v.push(_.clearcoatNormalMapUv),v.push(_.clearcoatRoughnessMapUv),v.push(_.iridescenceMapUv),v.push(_.iridescenceThicknessMapUv),v.push(_.sheenColorMapUv),v.push(_.sheenRoughnessMapUv),v.push(_.specularMapUv),v.push(_.specularColorMapUv),v.push(_.specularIntensityMapUv),v.push(_.transmissionMapUv),v.push(_.thicknessMapUv),v.push(_.combine),v.push(_.fogExp2),v.push(_.sizeAttenuation),v.push(_.morphTargetsCount),v.push(_.morphAttributeCount),v.push(_.numDirLights),v.push(_.numPointLights),v.push(_.numSpotLights),v.push(_.numSpotLightMaps),v.push(_.numHemiLights),v.push(_.numRectAreaLights),v.push(_.numDirLightShadows),v.push(_.numPointLightShadows),v.push(_.numSpotLightShadows),v.push(_.numSpotLightShadowsWithMaps),v.push(_.numLightProbes),v.push(_.shadowMapType),v.push(_.toneMapping),v.push(_.numClippingPlanes),v.push(_.numClipIntersection),v.push(_.depthPacking)}function b(v,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),_.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reverseDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),v.push(a.mask)}function S(v){let _=y[v.type],T;if(_){let q=on[_];T=H3.clone(q.uniforms)}else T=v.uniforms;return T}function L(v,_){let T;for(let q=0,z=h.length;q<z;q++){let W=h[q];if(W.cacheKey===_){T=W,++T.usedTimes;break}}return T===void 0&&(T=new u0(i,_,v,o),h.push(T)),T}function A(v){if(--v.usedTimes===0){let _=h.indexOf(v);h[_]=h[h.length-1],h.pop(),v.destroy()}}function D(v){l.remove(v)}function B(){l.dispose()}return{getParameters:f,getProgramCacheKey:p,getUniforms:S,acquireProgram:L,releaseProgram:A,releaseShaderCache:D,programs:h,dispose:B}}function m0(){let i=new WeakMap;function t(r){return i.has(r)}function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function n(r){i.delete(r)}function s(r,a,l){i.get(r)[a]=l}function o(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:o}}function g0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function h2(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function p2(){let i=[],t=0,e=[],n=[],s=[];function o(){t=0,e.length=0,n.length=0,s.length=0}function r(u,d,m,y,x,f){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:m,groupOrder:y,renderOrder:u.renderOrder,z:x,group:f},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=m,p.groupOrder=y,p.renderOrder=u.renderOrder,p.z=x,p.group=f),t++,p}function a(u,d,m,y,x,f){let p=r(u,d,m,y,x,f);m.transmission>0?n.push(p):m.transparent===!0?s.push(p):e.push(p)}function l(u,d,m,y,x,f){let p=r(u,d,m,y,x,f);m.transmission>0?n.unshift(p):m.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||g0),n.length>1&&n.sort(d||h2),s.length>1&&s.sort(d||h2)}function h(){for(let u=t,d=i.length;u<d;u++){let m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:o,push:a,unshift:l,finish:h,sort:c}}function C0(){let i=new WeakMap;function t(n,s){let o=i.get(n),r;return o===void 0?(r=new p2,i.set(n,[r])):s>=o.length?(r=new p2,o.push(r)):r=o[s],r}function e(){i=new WeakMap}return{get:t,dispose:e}}function y0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new O,color:new Zt};break;case"SpotLight":e={position:new O,direction:new O,color:new Zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new Zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new Zt,groundColor:new Zt};break;case"RectAreaLight":e={color:new Zt,position:new O,halfWidth:new O,halfHeight:new O};break}return i[t.id]=e,e}}}function _0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var x0=0;function v0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function M0(i){let t=new y0,e=_0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);let s=new O,o=new se,r=new se;function a(c){let h=0,u=0,d=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let m=0,y=0,x=0,f=0,p=0,E=0,b=0,S=0,L=0,A=0,D=0;c.sort(v0);for(let v=0,_=c.length;v<_;v++){let T=c[v],q=T.color,z=T.intensity,W=T.distance,K=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)h+=q.r*z,u+=q.g*z,d+=q.b*z;else if(T.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(T.sh.coefficients[H],z);D++}else if(T.isDirectionalLight){let H=t.get(T);if(H.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let tt=T.shadow,V=e.get(T);V.shadowIntensity=tt.intensity,V.shadowBias=tt.bias,V.shadowNormalBias=tt.normalBias,V.shadowRadius=tt.radius,V.shadowMapSize=tt.mapSize,n.directionalShadow[m]=V,n.directionalShadowMap[m]=K,n.directionalShadowMatrix[m]=T.shadow.matrix,E++}n.directional[m]=H,m++}else if(T.isSpotLight){let H=t.get(T);H.position.setFromMatrixPosition(T.matrixWorld),H.color.copy(q).multiplyScalar(z),H.distance=W,H.coneCos=Math.cos(T.angle),H.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),H.decay=T.decay,n.spot[x]=H;let tt=T.shadow;if(T.map&&(n.spotLightMap[L]=T.map,L++,tt.updateMatrices(T),T.castShadow&&A++),n.spotLightMatrix[x]=tt.matrix,T.castShadow){let V=e.get(T);V.shadowIntensity=tt.intensity,V.shadowBias=tt.bias,V.shadowNormalBias=tt.normalBias,V.shadowRadius=tt.radius,V.shadowMapSize=tt.mapSize,n.spotShadow[x]=V,n.spotShadowMap[x]=K,S++}x++}else if(T.isRectAreaLight){let H=t.get(T);H.color.copy(q).multiplyScalar(z),H.halfWidth.set(T.width*.5,0,0),H.halfHeight.set(0,T.height*.5,0),n.rectArea[f]=H,f++}else if(T.isPointLight){let H=t.get(T);if(H.color.copy(T.color).multiplyScalar(T.intensity),H.distance=T.distance,H.decay=T.decay,T.castShadow){let tt=T.shadow,V=e.get(T);V.shadowIntensity=tt.intensity,V.shadowBias=tt.bias,V.shadowNormalBias=tt.normalBias,V.shadowRadius=tt.radius,V.shadowMapSize=tt.mapSize,V.shadowCameraNear=tt.camera.near,V.shadowCameraFar=tt.camera.far,n.pointShadow[y]=V,n.pointShadowMap[y]=K,n.pointShadowMatrix[y]=T.shadow.matrix,b++}n.point[y]=H,y++}else if(T.isHemisphereLight){let H=t.get(T);H.skyColor.copy(T.color).multiplyScalar(z),H.groundColor.copy(T.groundColor).multiplyScalar(z),n.hemi[p]=H,p++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=nt.LTC_FLOAT_1,n.rectAreaLTC2=nt.LTC_FLOAT_2):(n.rectAreaLTC1=nt.LTC_HALF_1,n.rectAreaLTC2=nt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let B=n.hash;(B.directionalLength!==m||B.pointLength!==y||B.spotLength!==x||B.rectAreaLength!==f||B.hemiLength!==p||B.numDirectionalShadows!==E||B.numPointShadows!==b||B.numSpotShadows!==S||B.numSpotMaps!==L||B.numLightProbes!==D)&&(n.directional.length=m,n.spot.length=x,n.rectArea.length=f,n.point.length=y,n.hemi.length=p,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=S+L-A,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=D,B.directionalLength=m,B.pointLength=y,B.spotLength=x,B.rectAreaLength=f,B.hemiLength=p,B.numDirectionalShadows=E,B.numPointShadows=b,B.numSpotShadows=S,B.numSpotMaps=L,B.numLightProbes=D,n.version=x0++)}function l(c,h){let u=0,d=0,m=0,y=0,x=0,f=h.matrixWorldInverse;for(let p=0,E=c.length;p<E;p++){let b=c[p];if(b.isDirectionalLight){let S=n.directional[u];S.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(f),u++}else if(b.isSpotLight){let S=n.spot[m];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(f),S.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(f),m++}else if(b.isRectAreaLight){let S=n.rectArea[y];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(f),r.identity(),o.copy(b.matrixWorld),o.premultiply(f),r.extractRotation(o),S.halfWidth.set(b.width*.5,0,0),S.halfHeight.set(0,b.height*.5,0),S.halfWidth.applyMatrix4(r),S.halfHeight.applyMatrix4(r),y++}else if(b.isPointLight){let S=n.point[d];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(f),d++}else if(b.isHemisphereLight){let S=n.hemi[x];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(f),x++}}}return{setup:a,setupView:l,state:n}}function u2(i){let t=new M0(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function o(h){e.push(h)}function r(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:r}}function S0(i){let t=new WeakMap;function e(s,o=0){let r=t.get(s),a;return r===void 0?(a=new u2(i),t.set(s,[a])):o>=r.length?(a=new u2(i),r.push(a)):a=r[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var b0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,w0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function E0(i,t,e){let n=new ts,s=new Wt,o=new Wt,r=new ne,a=new $s({depthPacking:A3}),l=new Js,c={},h=e.maxTextureSize,u={[dn]:Me,[Me]:dn,[He]:He},d=new Be({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Wt},radius:{value:4}},vertexShader:b0,fragmentShader:w0}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let y=new je;y.setAttribute("position",new Pe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Ae(y,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fr;let p=this.type;this.render=function(A,D,B){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||A.length===0)return;let v=i.getRenderTarget(),_=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),q=i.state;q.setBlending(Cn),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);let z=p!==tn&&this.type===tn,W=p===tn&&this.type!==tn;for(let K=0,H=A.length;K<H;K++){let tt=A[K],V=tt.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let ot=V.getFrameExtents();if(s.multiply(ot),o.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(o.x=Math.floor(h/ot.x),s.x=o.x*ot.x,V.mapSize.x=o.x),s.y>h&&(o.y=Math.floor(h/ot.y),s.y=o.y*ot.y,V.mapSize.y=o.y)),V.map===null||z===!0||W===!0){let xt=this.type!==tn?{minFilter:ze,magFilter:ze}:{};V.map!==null&&V.map.dispose(),V.map=new Qe(s.x,s.y,xt),V.map.texture.name=tt.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();let ut=V.getViewportCount();for(let xt=0;xt<ut;xt++){let Bt=V.getViewport(xt);r.set(o.x*Bt.x,o.y*Bt.y,o.x*Bt.z,o.y*Bt.w),q.viewport(r),V.updateMatrices(tt,xt),n=V.getFrustum(),S(D,B,V.camera,tt,this.type)}V.isPointLightShadow!==!0&&this.type===tn&&E(V,B),V.needsUpdate=!1}p=this.type,f.needsUpdate=!1,i.setRenderTarget(v,_,T)};function E(A,D){let B=t.update(x);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Qe(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(D,null,B,d,x,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(D,null,B,m,x,null)}function b(A,D,B,v){let _=null,T=B.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(T!==void 0)_=T;else if(_=B.isPointLight===!0?l:a,i.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){let q=_.uuid,z=D.uuid,W=c[q];W===void 0&&(W={},c[q]=W);let K=W[z];K===void 0&&(K=_.clone(),W[z]=K,D.addEventListener("dispose",L)),_=K}if(_.visible=D.visible,_.wireframe=D.wireframe,v===tn?_.side=D.shadowSide!==null?D.shadowSide:D.side:_.side=D.shadowSide!==null?D.shadowSide:u[D.side],_.alphaMap=D.alphaMap,_.alphaTest=D.alphaTest,_.map=D.map,_.clipShadows=D.clipShadows,_.clippingPlanes=D.clippingPlanes,_.clipIntersection=D.clipIntersection,_.displacementMap=D.displacementMap,_.displacementScale=D.displacementScale,_.displacementBias=D.displacementBias,_.wireframeLinewidth=D.wireframeLinewidth,_.linewidth=D.linewidth,B.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let q=i.properties.get(_);q.light=B}return _}function S(A,D,B,v,_){if(A.visible===!1)return;if(A.layers.test(D.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&_===tn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,A.matrixWorld);let z=t.update(A),W=A.material;if(Array.isArray(W)){let K=z.groups;for(let H=0,tt=K.length;H<tt;H++){let V=K[H],ot=W[V.materialIndex];if(ot&&ot.visible){let ut=b(A,ot,v,_);A.onBeforeShadow(i,A,D,B,z,ut,V),i.renderBufferDirect(B,null,z,ut,A,V),A.onAfterShadow(i,A,D,B,z,ut,V)}}}else if(W.visible){let K=b(A,W,v,_);A.onBeforeShadow(i,A,D,B,z,K,null),i.renderBufferDirect(B,null,z,K,A,null),A.onAfterShadow(i,A,D,B,z,K,null)}}let q=A.children;for(let z=0,W=q.length;z<W;z++)S(q[z],D,B,v,_)}function L(A){A.target.removeEventListener("dispose",L);for(let B in c){let v=c[B],_=A.target.uuid;_ in v&&(v[_].dispose(),delete v[_])}}}var A0={[co]:ho,[po]:mo,[uo]:go,[Wn]:fo,[ho]:co,[mo]:po,[go]:uo,[fo]:Wn};function T0(i,t){function e(){let R=!1,it=new ne,k=null,Y=new ne(0,0,0,0);return{setMask:function(ct){k!==ct&&!R&&(i.colorMask(ct,ct,ct,ct),k=ct)},setLocked:function(ct){R=ct},setClear:function(ct,lt,It,oe,me){me===!0&&(ct*=oe,lt*=oe,It*=oe),it.set(ct,lt,It,oe),Y.equals(it)===!1&&(i.clearColor(ct,lt,It,oe),Y.copy(it))},reset:function(){R=!1,k=null,Y.set(-1,0,0,0)}}}function n(){let R=!1,it=!1,k=null,Y=null,ct=null;return{setReversed:function(lt){if(it!==lt){let It=t.get("EXT_clip_control");it?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT);let oe=ct;ct=null,this.setClear(oe)}it=lt},getReversed:function(){return it},setTest:function(lt){lt?rt(i.DEPTH_TEST):wt(i.DEPTH_TEST)},setMask:function(lt){k!==lt&&!R&&(i.depthMask(lt),k=lt)},setFunc:function(lt){if(it&&(lt=A0[lt]),Y!==lt){switch(lt){case co:i.depthFunc(i.NEVER);break;case ho:i.depthFunc(i.ALWAYS);break;case po:i.depthFunc(i.LESS);break;case Wn:i.depthFunc(i.LEQUAL);break;case uo:i.depthFunc(i.EQUAL);break;case fo:i.depthFunc(i.GEQUAL);break;case mo:i.depthFunc(i.GREATER);break;case go:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Y=lt}},setLocked:function(lt){R=lt},setClear:function(lt){ct!==lt&&(it&&(lt=1-lt),i.clearDepth(lt),ct=lt)},reset:function(){R=!1,k=null,Y=null,ct=null,it=!1}}}function s(){let R=!1,it=null,k=null,Y=null,ct=null,lt=null,It=null,oe=null,me=null;return{setTest:function(Jt){R||(Jt?rt(i.STENCIL_TEST):wt(i.STENCIL_TEST))},setMask:function(Jt){it!==Jt&&!R&&(i.stencilMask(Jt),it=Jt)},setFunc:function(Jt,We,rn){(k!==Jt||Y!==We||ct!==rn)&&(i.stencilFunc(Jt,We,rn),k=Jt,Y=We,ct=rn)},setOp:function(Jt,We,rn){(lt!==Jt||It!==We||oe!==rn)&&(i.stencilOp(Jt,We,rn),lt=Jt,It=We,oe=rn)},setLocked:function(Jt){R=Jt},setClear:function(Jt){me!==Jt&&(i.clearStencil(Jt),me=Jt)},reset:function(){R=!1,it=null,k=null,Y=null,ct=null,lt=null,It=null,oe=null,me=null}}}let o=new e,r=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,m=[],y=null,x=!1,f=null,p=null,E=null,b=null,S=null,L=null,A=null,D=new Zt(0,0,0),B=0,v=!1,_=null,T=null,q=null,z=null,W=null,K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,tt=0,V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(V)[1]),H=tt>=1):V.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),H=tt>=2);let ot=null,ut={},xt=i.getParameter(i.SCISSOR_BOX),Bt=i.getParameter(i.VIEWPORT),Qt=new ne().fromArray(xt),X=new ne().fromArray(Bt);function et(R,it,k,Y){let ct=new Uint8Array(4),lt=i.createTexture();i.bindTexture(R,lt),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let It=0;It<k;It++)R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?i.texImage3D(it,0,i.RGBA,1,1,Y,0,i.RGBA,i.UNSIGNED_BYTE,ct):i.texImage2D(it+It,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ct);return lt}let Ct={};Ct[i.TEXTURE_2D]=et(i.TEXTURE_2D,i.TEXTURE_2D,1),Ct[i.TEXTURE_CUBE_MAP]=et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ct[i.TEXTURE_2D_ARRAY]=et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ct[i.TEXTURE_3D]=et(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),rt(i.DEPTH_TEST),r.setFunc(Wn),Nt(!1),Ot(Ur),rt(i.CULL_FACE),w(Cn);function rt(R){h[R]!==!0&&(i.enable(R),h[R]=!0)}function wt(R){h[R]!==!1&&(i.disable(R),h[R]=!1)}function Xt(R,it){return u[R]!==it?(i.bindFramebuffer(R,it),u[R]=it,R===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=it),R===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=it),!0):!1}function Et(R,it){let k=m,Y=!1;if(R){k=d.get(it),k===void 0&&(k=[],d.set(it,k));let ct=R.textures;if(k.length!==ct.length||k[0]!==i.COLOR_ATTACHMENT0){for(let lt=0,It=ct.length;lt<It;lt++)k[lt]=i.COLOR_ATTACHMENT0+lt;k.length=ct.length,Y=!0}}else k[0]!==i.BACK&&(k[0]=i.BACK,Y=!0);Y&&i.drawBuffers(k)}function ae(R){return y!==R?(i.useProgram(R),y=R,!0):!1}let ie={[Tn]:i.FUNC_ADD,[ja]:i.FUNC_SUBTRACT,[t3]:i.FUNC_REVERSE_SUBTRACT};ie[e3]=i.MIN,ie[n3]=i.MAX;let Ft={[i3]:i.ZERO,[s3]:i.ONE,[o3]:i.SRC_COLOR,[Ns]:i.SRC_ALPHA,[p3]:i.SRC_ALPHA_SATURATE,[c3]:i.DST_COLOR,[a3]:i.DST_ALPHA,[r3]:i.ONE_MINUS_SRC_COLOR,[Os]:i.ONE_MINUS_SRC_ALPHA,[h3]:i.ONE_MINUS_DST_COLOR,[l3]:i.ONE_MINUS_DST_ALPHA,[u3]:i.CONSTANT_COLOR,[d3]:i.ONE_MINUS_CONSTANT_COLOR,[f3]:i.CONSTANT_ALPHA,[m3]:i.ONE_MINUS_CONSTANT_ALPHA};function w(R,it,k,Y,ct,lt,It,oe,me,Jt){if(R===Cn){x===!0&&(wt(i.BLEND),x=!1);return}if(x===!1&&(rt(i.BLEND),x=!0),R!==Qa){if(R!==f||Jt!==v){if((p!==Tn||S!==Tn)&&(i.blendEquation(i.FUNC_ADD),p=Tn,S=Tn),Jt)switch(R){case Gn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Nr:i.blendFunc(i.ONE,i.ONE);break;case Or:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case zr:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case Gn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Nr:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Or:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case zr:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}E=null,b=null,L=null,A=null,D.set(0,0,0),B=0,f=R,v=Jt}return}ct=ct||it,lt=lt||k,It=It||Y,(it!==p||ct!==S)&&(i.blendEquationSeparate(ie[it],ie[ct]),p=it,S=ct),(k!==E||Y!==b||lt!==L||It!==A)&&(i.blendFuncSeparate(Ft[k],Ft[Y],Ft[lt],Ft[It]),E=k,b=Y,L=lt,A=It),(oe.equals(D)===!1||me!==B)&&(i.blendColor(oe.r,oe.g,oe.b,me),D.copy(oe),B=me),f=R,v=!1}function Ue(R,it){R.side===He?wt(i.CULL_FACE):rt(i.CULL_FACE);let k=R.side===Me;it&&(k=!k),Nt(k),R.blending===Gn&&R.transparent===!1?w(Cn):w(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),r.setFunc(R.depthFunc),r.setTest(R.depthTest),r.setMask(R.depthWrite),o.setMask(R.colorWrite);let Y=R.stencilWrite;a.setTest(Y),Y&&(a.setMask(R.stencilWriteMask),a.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),a.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),te(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?rt(i.SAMPLE_ALPHA_TO_COVERAGE):wt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Nt(R){_!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),_=R)}function Ot(R){R!==$a?(rt(i.CULL_FACE),R!==T&&(R===Ur?i.cullFace(i.BACK):R===Ja?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):wt(i.CULL_FACE),T=R}function vt(R){R!==q&&(H&&i.lineWidth(R),q=R)}function te(R,it,k){R?(rt(i.POLYGON_OFFSET_FILL),(z!==it||W!==k)&&(i.polygonOffset(it,k),z=it,W=k)):wt(i.POLYGON_OFFSET_FILL)}function _t(R){R?rt(i.SCISSOR_TEST):wt(i.SCISSOR_TEST)}function M(R){R===void 0&&(R=i.TEXTURE0+K-1),ot!==R&&(i.activeTexture(R),ot=R)}function g(R,it,k){k===void 0&&(ot===null?k=i.TEXTURE0+K-1:k=ot);let Y=ut[k];Y===void 0&&(Y={type:void 0,texture:void 0},ut[k]=Y),(Y.type!==R||Y.texture!==it)&&(ot!==k&&(i.activeTexture(k),ot=k),i.bindTexture(R,it||Ct[R]),Y.type=R,Y.texture=it)}function U(){let R=ut[ot];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function Z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function J(){try{i.compressedTexImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function G(){try{i.texSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function yt(){try{i.texSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function at(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function dt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function kt(){try{i.texStorage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function j(){try{i.texStorage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ft(){try{i.texImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function bt(){try{i.texImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function At(R){Qt.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),Qt.copy(R))}function mt(R){X.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),X.copy(R))}function zt(R,it){let k=c.get(it);k===void 0&&(k=new WeakMap,c.set(it,k));let Y=k.get(R);Y===void 0&&(Y=i.getUniformBlockIndex(it,R.name),k.set(R,Y))}function Pt(R,it){let Y=c.get(it).get(R);l.get(it)!==Y&&(i.uniformBlockBinding(it,Y,R.__bindingPointIndex),l.set(it,Y))}function jt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ot=null,ut={},u={},d=new WeakMap,m=[],y=null,x=!1,f=null,p=null,E=null,b=null,S=null,L=null,A=null,D=new Zt(0,0,0),B=0,v=!1,_=null,T=null,q=null,z=null,W=null,Qt.set(0,0,i.canvas.width,i.canvas.height),X.set(0,0,i.canvas.width,i.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:rt,disable:wt,bindFramebuffer:Xt,drawBuffers:Et,useProgram:ae,setBlending:w,setMaterial:Ue,setFlipSided:Nt,setCullFace:Ot,setLineWidth:vt,setPolygonOffset:te,setScissorTest:_t,activeTexture:M,bindTexture:g,unbindTexture:U,compressedTexImage2D:Z,compressedTexImage3D:J,texImage2D:ft,texImage3D:bt,updateUBOMapping:zt,uniformBlockBinding:Pt,texStorage2D:kt,texStorage3D:j,texSubImage2D:G,texSubImage3D:yt,compressedTexSubImage2D:at,compressedTexSubImage3D:dt,scissor:At,viewport:mt,reset:jt}}function R0(i,t,e,n,s,o,r){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Wt,h=new WeakMap,u,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(M,g){return m?new OffscreenCanvas(M,g):yi("canvas")}function x(M,g,U){let Z=1,J=_t(M);if((J.width>U||J.height>U)&&(Z=U/Math.max(J.width,J.height)),Z<1)if(typeof HTMLImageElement!="undefined"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&M instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&M instanceof ImageBitmap||typeof VideoFrame!="undefined"&&M instanceof VideoFrame){let G=Math.floor(Z*J.width),yt=Math.floor(Z*J.height);u===void 0&&(u=y(G,yt));let at=g?y(G,yt):u;return at.width=G,at.height=yt,at.getContext("2d").drawImage(M,0,0,G,yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+G+"x"+yt+")."),at}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),M;return M}function f(M){return M.generateMipmaps}function p(M){i.generateMipmap(M)}function E(M){return M.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?i.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(M,g,U,Z,J=!1){if(M!==null){if(i[M]!==void 0)return i[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let G=g;if(g===i.RED&&(U===i.FLOAT&&(G=i.R32F),U===i.HALF_FLOAT&&(G=i.R16F),U===i.UNSIGNED_BYTE&&(G=i.R8)),g===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(G=i.R8UI),U===i.UNSIGNED_SHORT&&(G=i.R16UI),U===i.UNSIGNED_INT&&(G=i.R32UI),U===i.BYTE&&(G=i.R8I),U===i.SHORT&&(G=i.R16I),U===i.INT&&(G=i.R32I)),g===i.RG&&(U===i.FLOAT&&(G=i.RG32F),U===i.HALF_FLOAT&&(G=i.RG16F),U===i.UNSIGNED_BYTE&&(G=i.RG8)),g===i.RG_INTEGER&&(U===i.UNSIGNED_BYTE&&(G=i.RG8UI),U===i.UNSIGNED_SHORT&&(G=i.RG16UI),U===i.UNSIGNED_INT&&(G=i.RG32UI),U===i.BYTE&&(G=i.RG8I),U===i.SHORT&&(G=i.RG16I),U===i.INT&&(G=i.RG32I)),g===i.RGB_INTEGER&&(U===i.UNSIGNED_BYTE&&(G=i.RGB8UI),U===i.UNSIGNED_SHORT&&(G=i.RGB16UI),U===i.UNSIGNED_INT&&(G=i.RGB32UI),U===i.BYTE&&(G=i.RGB8I),U===i.SHORT&&(G=i.RGB16I),U===i.INT&&(G=i.RGB32I)),g===i.RGBA_INTEGER&&(U===i.UNSIGNED_BYTE&&(G=i.RGBA8UI),U===i.UNSIGNED_SHORT&&(G=i.RGBA16UI),U===i.UNSIGNED_INT&&(G=i.RGBA32UI),U===i.BYTE&&(G=i.RGBA8I),U===i.SHORT&&(G=i.RGBA16I),U===i.INT&&(G=i.RGBA32I)),g===i.RGB&&U===i.UNSIGNED_INT_5_9_9_9_REV&&(G=i.RGB9_E5),g===i.RGBA){let yt=J?Gi:Ht.getTransfer(Z);U===i.FLOAT&&(G=i.RGBA32F),U===i.HALF_FLOAT&&(G=i.RGBA16F),U===i.UNSIGNED_BYTE&&(G=yt===Kt?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT_4_4_4_4&&(G=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(G=i.RGB5_A1)}return(G===i.R16F||G===i.R32F||G===i.RG16F||G===i.RG32F||G===i.RGBA16F||G===i.RGBA32F)&&t.get("EXT_color_buffer_float"),G}function S(M,g){let U;return M?g===null||g===Ln||g===Kn?U=i.DEPTH24_STENCIL8:g===sn?U=i.DEPTH32F_STENCIL8:g===Mi&&(U=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Ln||g===Kn?U=i.DEPTH_COMPONENT24:g===sn?U=i.DEPTH_COMPONENT32F:g===Mi&&(U=i.DEPTH_COMPONENT16),U}function L(M,g){return f(M)===!0||M.isFramebufferTexture&&M.minFilter!==ze&&M.minFilter!==Le?Math.log2(Math.max(g.width,g.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?g.mipmaps.length:1}function A(M){let g=M.target;g.removeEventListener("dispose",A),B(g),g.isVideoTexture&&h.delete(g)}function D(M){let g=M.target;g.removeEventListener("dispose",D),_(g)}function B(M){let g=n.get(M);if(g.__webglInit===void 0)return;let U=M.source,Z=d.get(U);if(Z){let J=Z[g.__cacheKey];J.usedTimes--,J.usedTimes===0&&v(M),Object.keys(Z).length===0&&d.delete(U)}n.remove(M)}function v(M){let g=n.get(M);i.deleteTexture(g.__webglTexture);let U=M.source,Z=d.get(U);delete Z[g.__cacheKey],r.memory.textures--}function _(M){let g=n.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),n.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(g.__webglFramebuffer[Z]))for(let J=0;J<g.__webglFramebuffer[Z].length;J++)i.deleteFramebuffer(g.__webglFramebuffer[Z][J]);else i.deleteFramebuffer(g.__webglFramebuffer[Z]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[Z])}else{if(Array.isArray(g.__webglFramebuffer))for(let Z=0;Z<g.__webglFramebuffer.length;Z++)i.deleteFramebuffer(g.__webglFramebuffer[Z]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let Z=0;Z<g.__webglColorRenderbuffer.length;Z++)g.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[Z]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let U=M.textures;for(let Z=0,J=U.length;Z<J;Z++){let G=n.get(U[Z]);G.__webglTexture&&(i.deleteTexture(G.__webglTexture),r.memory.textures--),n.remove(U[Z])}n.remove(M)}let T=0;function q(){T=0}function z(){let M=T;return M>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+s.maxTextures),T+=1,M}function W(M){let g=[];return g.push(M.wrapS),g.push(M.wrapT),g.push(M.wrapR||0),g.push(M.magFilter),g.push(M.minFilter),g.push(M.anisotropy),g.push(M.internalFormat),g.push(M.format),g.push(M.type),g.push(M.generateMipmaps),g.push(M.premultiplyAlpha),g.push(M.flipY),g.push(M.unpackAlignment),g.push(M.colorSpace),g.join()}function K(M,g){let U=n.get(M);if(M.isVideoTexture&&vt(M),M.isRenderTargetTexture===!1&&M.version>0&&U.__version!==M.version){let Z=M.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(U,M,g);return}}e.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+g)}function H(M,g){let U=n.get(M);if(M.version>0&&U.__version!==M.version){X(U,M,g);return}e.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+g)}function tt(M,g){let U=n.get(M);if(M.version>0&&U.__version!==M.version){X(U,M,g);return}e.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+g)}function V(M,g){let U=n.get(M);if(M.version>0&&U.__version!==M.version){et(U,M,g);return}e.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+g)}let ot={[zs]:i.REPEAT,[An]:i.CLAMP_TO_EDGE,[ks]:i.MIRRORED_REPEAT},ut={[ze]:i.NEAREST,[w3]:i.NEAREST_MIPMAP_NEAREST,[os]:i.NEAREST_MIPMAP_LINEAR,[Le]:i.LINEAR,[_o]:i.LINEAR_MIPMAP_NEAREST,[en]:i.LINEAR_MIPMAP_LINEAR},xt={[D3]:i.NEVER,[F3]:i.ALWAYS,[I3]:i.LESS,[Qr]:i.LEQUAL,[P3]:i.EQUAL,[U3]:i.GEQUAL,[L3]:i.GREATER,[B3]:i.NOTEQUAL};function Bt(M,g){if(g.type===sn&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===Le||g.magFilter===_o||g.magFilter===os||g.magFilter===en||g.minFilter===Le||g.minFilter===_o||g.minFilter===os||g.minFilter===en)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(M,i.TEXTURE_WRAP_S,ot[g.wrapS]),i.texParameteri(M,i.TEXTURE_WRAP_T,ot[g.wrapT]),(M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY)&&i.texParameteri(M,i.TEXTURE_WRAP_R,ot[g.wrapR]),i.texParameteri(M,i.TEXTURE_MAG_FILTER,ut[g.magFilter]),i.texParameteri(M,i.TEXTURE_MIN_FILTER,ut[g.minFilter]),g.compareFunction&&(i.texParameteri(M,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(M,i.TEXTURE_COMPARE_FUNC,xt[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===ze||g.minFilter!==os&&g.minFilter!==en||g.type===sn&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){let U=t.get("EXT_texture_filter_anisotropic");i.texParameterf(M,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function Qt(M,g){let U=!1;M.__webglInit===void 0&&(M.__webglInit=!0,g.addEventListener("dispose",A));let Z=g.source,J=d.get(Z);J===void 0&&(J={},d.set(Z,J));let G=W(g);if(G!==M.__cacheKey){J[G]===void 0&&(J[G]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,U=!0),J[G].usedTimes++;let yt=J[M.__cacheKey];yt!==void 0&&(J[M.__cacheKey].usedTimes--,yt.usedTimes===0&&v(g)),M.__cacheKey=G,M.__webglTexture=J[G].texture}return U}function X(M,g,U){let Z=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(Z=i.TEXTURE_3D);let J=Qt(M,g),G=g.source;e.bindTexture(Z,M.__webglTexture,i.TEXTURE0+U);let yt=n.get(G);if(G.version!==yt.__version||J===!0){e.activeTexture(i.TEXTURE0+U);let at=Ht.getPrimaries(Ht.workingColorSpace),dt=g.colorSpace===_n?null:Ht.getPrimaries(g.colorSpace),kt=g.colorSpace===_n||at===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);let j=x(g.image,!1,s.maxTextureSize);j=te(g,j);let ft=o.convert(g.format,g.colorSpace),bt=o.convert(g.type),At=b(g.internalFormat,ft,bt,g.colorSpace,g.isVideoTexture);Bt(Z,g);let mt,zt=g.mipmaps,Pt=g.isVideoTexture!==!0,jt=yt.__version===void 0||J===!0,R=G.dataReady,it=L(g,j);if(g.isDepthTexture)At=S(g.format===Xn,g.type),jt&&(Pt?e.texStorage2D(i.TEXTURE_2D,1,At,j.width,j.height):e.texImage2D(i.TEXTURE_2D,0,At,j.width,j.height,0,ft,bt,null));else if(g.isDataTexture)if(zt.length>0){Pt&&jt&&e.texStorage2D(i.TEXTURE_2D,it,At,zt[0].width,zt[0].height);for(let k=0,Y=zt.length;k<Y;k++)mt=zt[k],Pt?R&&e.texSubImage2D(i.TEXTURE_2D,k,0,0,mt.width,mt.height,ft,bt,mt.data):e.texImage2D(i.TEXTURE_2D,k,At,mt.width,mt.height,0,ft,bt,mt.data);g.generateMipmaps=!1}else Pt?(jt&&e.texStorage2D(i.TEXTURE_2D,it,At,j.width,j.height),R&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,j.width,j.height,ft,bt,j.data)):e.texImage2D(i.TEXTURE_2D,0,At,j.width,j.height,0,ft,bt,j.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Pt&&jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,it,At,zt[0].width,zt[0].height,j.depth);for(let k=0,Y=zt.length;k<Y;k++)if(mt=zt[k],g.format!==Ge)if(ft!==null)if(Pt){if(R)if(g.layerUpdates.size>0){let ct=sa(mt.width,mt.height,g.format,g.type);for(let lt of g.layerUpdates){let It=mt.data.subarray(lt*ct/mt.data.BYTES_PER_ELEMENT,(lt+1)*ct/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,lt,mt.width,mt.height,1,ft,It)}g.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,0,mt.width,mt.height,j.depth,ft,mt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,k,At,mt.width,mt.height,j.depth,0,mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pt?R&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,0,mt.width,mt.height,j.depth,ft,bt,mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,k,At,mt.width,mt.height,j.depth,0,ft,bt,mt.data)}else{Pt&&jt&&e.texStorage2D(i.TEXTURE_2D,it,At,zt[0].width,zt[0].height);for(let k=0,Y=zt.length;k<Y;k++)mt=zt[k],g.format!==Ge?ft!==null?Pt?R&&e.compressedTexSubImage2D(i.TEXTURE_2D,k,0,0,mt.width,mt.height,ft,mt.data):e.compressedTexImage2D(i.TEXTURE_2D,k,At,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pt?R&&e.texSubImage2D(i.TEXTURE_2D,k,0,0,mt.width,mt.height,ft,bt,mt.data):e.texImage2D(i.TEXTURE_2D,k,At,mt.width,mt.height,0,ft,bt,mt.data)}else if(g.isDataArrayTexture)if(Pt){if(jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,it,At,j.width,j.height,j.depth),R)if(g.layerUpdates.size>0){let k=sa(j.width,j.height,g.format,g.type);for(let Y of g.layerUpdates){let ct=j.data.subarray(Y*k/j.data.BYTES_PER_ELEMENT,(Y+1)*k/j.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Y,j.width,j.height,1,ft,bt,ct)}g.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,ft,bt,j.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,At,j.width,j.height,j.depth,0,ft,bt,j.data);else if(g.isData3DTexture)Pt?(jt&&e.texStorage3D(i.TEXTURE_3D,it,At,j.width,j.height,j.depth),R&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,ft,bt,j.data)):e.texImage3D(i.TEXTURE_3D,0,At,j.width,j.height,j.depth,0,ft,bt,j.data);else if(g.isFramebufferTexture){if(jt)if(Pt)e.texStorage2D(i.TEXTURE_2D,it,At,j.width,j.height);else{let k=j.width,Y=j.height;for(let ct=0;ct<it;ct++)e.texImage2D(i.TEXTURE_2D,ct,At,k,Y,0,ft,bt,null),k>>=1,Y>>=1}}else if(zt.length>0){if(Pt&&jt){let k=_t(zt[0]);e.texStorage2D(i.TEXTURE_2D,it,At,k.width,k.height)}for(let k=0,Y=zt.length;k<Y;k++)mt=zt[k],Pt?R&&e.texSubImage2D(i.TEXTURE_2D,k,0,0,ft,bt,mt):e.texImage2D(i.TEXTURE_2D,k,At,ft,bt,mt);g.generateMipmaps=!1}else if(Pt){if(jt){let k=_t(j);e.texStorage2D(i.TEXTURE_2D,it,At,k.width,k.height)}R&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ft,bt,j)}else e.texImage2D(i.TEXTURE_2D,0,At,ft,bt,j);f(g)&&p(Z),yt.__version=G.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function et(M,g,U){if(g.image.length!==6)return;let Z=Qt(M,g),J=g.source;e.bindTexture(i.TEXTURE_CUBE_MAP,M.__webglTexture,i.TEXTURE0+U);let G=n.get(J);if(J.version!==G.__version||Z===!0){e.activeTexture(i.TEXTURE0+U);let yt=Ht.getPrimaries(Ht.workingColorSpace),at=g.colorSpace===_n?null:Ht.getPrimaries(g.colorSpace),dt=g.colorSpace===_n||yt===at?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);let kt=g.isCompressedTexture||g.image[0].isCompressedTexture,j=g.image[0]&&g.image[0].isDataTexture,ft=[];for(let Y=0;Y<6;Y++)!kt&&!j?ft[Y]=x(g.image[Y],!0,s.maxCubemapSize):ft[Y]=j?g.image[Y].image:g.image[Y],ft[Y]=te(g,ft[Y]);let bt=ft[0],At=o.convert(g.format,g.colorSpace),mt=o.convert(g.type),zt=b(g.internalFormat,At,mt,g.colorSpace),Pt=g.isVideoTexture!==!0,jt=G.__version===void 0||Z===!0,R=J.dataReady,it=L(g,bt);Bt(i.TEXTURE_CUBE_MAP,g);let k;if(kt){Pt&&jt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,it,zt,bt.width,bt.height);for(let Y=0;Y<6;Y++){k=ft[Y].mipmaps;for(let ct=0;ct<k.length;ct++){let lt=k[ct];g.format!==Ge?At!==null?Pt?R&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ct,0,0,lt.width,lt.height,At,lt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ct,zt,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pt?R&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ct,0,0,lt.width,lt.height,At,mt,lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ct,zt,lt.width,lt.height,0,At,mt,lt.data)}}}else{if(k=g.mipmaps,Pt&&jt){k.length>0&&it++;let Y=_t(ft[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,it,zt,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(j){Pt?R&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,ft[Y].width,ft[Y].height,At,mt,ft[Y].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,zt,ft[Y].width,ft[Y].height,0,At,mt,ft[Y].data);for(let ct=0;ct<k.length;ct++){let It=k[ct].image[Y].image;Pt?R&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ct+1,0,0,It.width,It.height,At,mt,It.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ct+1,zt,It.width,It.height,0,At,mt,It.data)}}else{Pt?R&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,At,mt,ft[Y]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,zt,At,mt,ft[Y]);for(let ct=0;ct<k.length;ct++){let lt=k[ct];Pt?R&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ct+1,0,0,At,mt,lt.image[Y]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ct+1,zt,At,mt,lt.image[Y])}}}f(g)&&p(i.TEXTURE_CUBE_MAP),G.__version=J.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function Ct(M,g,U,Z,J,G){let yt=o.convert(U.format,U.colorSpace),at=o.convert(U.type),dt=b(U.internalFormat,yt,at,U.colorSpace),kt=n.get(g),j=n.get(U);if(j.__renderTarget=g,!kt.__hasExternalTextures){let ft=Math.max(1,g.width>>G),bt=Math.max(1,g.height>>G);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,G,dt,ft,bt,g.depth,0,yt,at,null):e.texImage2D(J,G,dt,ft,bt,0,yt,at,null)}e.bindFramebuffer(i.FRAMEBUFFER,M),Ot(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,J,j.__webglTexture,0,Nt(g)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,J,j.__webglTexture,G),e.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(M,g,U){if(i.bindRenderbuffer(i.RENDERBUFFER,M),g.depthBuffer){let Z=g.depthTexture,J=Z&&Z.isDepthTexture?Z.type:null,G=S(g.stencilBuffer,J),yt=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=Nt(g);Ot(g)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at,G,g.width,g.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,at,G,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,G,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,yt,i.RENDERBUFFER,M)}else{let Z=g.textures;for(let J=0;J<Z.length;J++){let G=Z[J],yt=o.convert(G.format,G.colorSpace),at=o.convert(G.type),dt=b(G.internalFormat,yt,at,G.colorSpace),kt=Nt(g);U&&Ot(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,kt,dt,g.width,g.height):Ot(g)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,kt,dt,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,dt,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function wt(M,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,M),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Z=n.get(g.depthTexture);Z.__renderTarget=g,(!Z.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),K(g.depthTexture,0);let J=Z.__webglTexture,G=Nt(g);if(g.depthTexture.format===Hn)Ot(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,G):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(g.depthTexture.format===Xn)Ot(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,G):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Xt(M){let g=n.get(M),U=M.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==M.depthTexture){let Z=M.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),Z){let J=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,Z.removeEventListener("dispose",J)};Z.addEventListener("dispose",J),g.__depthDisposeCallback=J}g.__boundDepthTexture=Z}if(M.depthTexture&&!g.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");wt(g.__webglFramebuffer,M)}else if(U){g.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[Z]),g.__webglDepthbuffer[Z]===void 0)g.__webglDepthbuffer[Z]=i.createRenderbuffer(),rt(g.__webglDepthbuffer[Z],M,!1);else{let J=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,G=g.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,G),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,G)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),rt(g.__webglDepthbuffer,M,!1);else{let Z=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,J)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Et(M,g,U){let Z=n.get(M);g!==void 0&&Ct(Z.__webglFramebuffer,M,M.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&Xt(M)}function ae(M){let g=M.texture,U=n.get(M),Z=n.get(g);M.addEventListener("dispose",D);let J=M.textures,G=M.isWebGLCubeRenderTarget===!0,yt=J.length>1;if(yt||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=g.version,r.memory.textures++),G){U.__webglFramebuffer=[];for(let at=0;at<6;at++)if(g.mipmaps&&g.mipmaps.length>0){U.__webglFramebuffer[at]=[];for(let dt=0;dt<g.mipmaps.length;dt++)U.__webglFramebuffer[at][dt]=i.createFramebuffer()}else U.__webglFramebuffer[at]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){U.__webglFramebuffer=[];for(let at=0;at<g.mipmaps.length;at++)U.__webglFramebuffer[at]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(yt)for(let at=0,dt=J.length;at<dt;at++){let kt=n.get(J[at]);kt.__webglTexture===void 0&&(kt.__webglTexture=i.createTexture(),r.memory.textures++)}if(M.samples>0&&Ot(M)===!1){U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let at=0;at<J.length;at++){let dt=J[at];U.__webglColorRenderbuffer[at]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[at]);let kt=o.convert(dt.format,dt.colorSpace),j=o.convert(dt.type),ft=b(dt.internalFormat,kt,j,dt.colorSpace,M.isXRRenderTarget===!0),bt=Nt(M);i.renderbufferStorageMultisample(i.RENDERBUFFER,bt,ft,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,U.__webglColorRenderbuffer[at])}i.bindRenderbuffer(i.RENDERBUFFER,null),M.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),rt(U.__webglDepthRenderbuffer,M,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(G){e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Bt(i.TEXTURE_CUBE_MAP,g);for(let at=0;at<6;at++)if(g.mipmaps&&g.mipmaps.length>0)for(let dt=0;dt<g.mipmaps.length;dt++)Ct(U.__webglFramebuffer[at][dt],M,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,dt);else Ct(U.__webglFramebuffer[at],M,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);f(g)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(yt){for(let at=0,dt=J.length;at<dt;at++){let kt=J[at],j=n.get(kt);e.bindTexture(i.TEXTURE_2D,j.__webglTexture),Bt(i.TEXTURE_2D,kt),Ct(U.__webglFramebuffer,M,kt,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,0),f(kt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let at=i.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(at=M.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(at,Z.__webglTexture),Bt(at,g),g.mipmaps&&g.mipmaps.length>0)for(let dt=0;dt<g.mipmaps.length;dt++)Ct(U.__webglFramebuffer[dt],M,g,i.COLOR_ATTACHMENT0,at,dt);else Ct(U.__webglFramebuffer,M,g,i.COLOR_ATTACHMENT0,at,0);f(g)&&p(at),e.unbindTexture()}M.depthBuffer&&Xt(M)}function ie(M){let g=M.textures;for(let U=0,Z=g.length;U<Z;U++){let J=g[U];if(f(J)){let G=E(M),yt=n.get(J).__webglTexture;e.bindTexture(G,yt),p(G),e.unbindTexture()}}}let Ft=[],w=[];function Ue(M){if(M.samples>0){if(Ot(M)===!1){let g=M.textures,U=M.width,Z=M.height,J=i.COLOR_BUFFER_BIT,G=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=n.get(M),at=g.length>1;if(at)for(let dt=0;dt<g.length;dt++)e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let dt=0;dt<g.length;dt++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),at){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,yt.__webglColorRenderbuffer[dt]);let kt=n.get(g[dt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,kt,0)}i.blitFramebuffer(0,0,U,Z,0,0,U,Z,J,i.NEAREST),l===!0&&(Ft.length=0,w.length=0,Ft.push(i.COLOR_ATTACHMENT0+dt),M.depthBuffer&&M.resolveDepthBuffer===!1&&(Ft.push(G),w.push(G),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,w)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ft))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),at)for(let dt=0;dt<g.length;dt++){e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,yt.__webglColorRenderbuffer[dt]);let kt=n.get(g[dt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,kt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&l){let g=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function Nt(M){return Math.min(s.maxSamples,M.samples)}function Ot(M){let g=n.get(M);return M.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function vt(M){let g=r.render.frame;h.get(M)!==g&&(h.set(M,g),M.update())}function te(M,g){let U=M.colorSpace,Z=M.format,J=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||U!==qn&&U!==_n&&(Ht.getTransfer(U)===Kt?(Z!==Ge||J!==nn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),g}function _t(M){return typeof HTMLImageElement!="undefined"&&M instanceof HTMLImageElement?(c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height):typeof VideoFrame!="undefined"&&M instanceof VideoFrame?(c.width=M.displayWidth,c.height=M.displayHeight):(c.width=M.width,c.height=M.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=q,this.setTexture2D=K,this.setTexture2DArray=H,this.setTexture3D=tt,this.setTextureCube=V,this.rebindTextures=Et,this.setupRenderTarget=ae,this.updateRenderTargetMipmap=ie,this.updateMultisampleRenderTarget=Ue,this.setupDepthRenderbuffer=Xt,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=Ot}function D0(i,t){function e(n,s=_n){let o,r=Ht.getTransfer(s);if(n===nn)return i.UNSIGNED_BYTE;if(n===vo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Mo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Wr)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Hr)return i.BYTE;if(n===Gr)return i.SHORT;if(n===Mi)return i.UNSIGNED_SHORT;if(n===xo)return i.INT;if(n===Ln)return i.UNSIGNED_INT;if(n===sn)return i.FLOAT;if(n===Si)return i.HALF_FLOAT;if(n===Xr)return i.ALPHA;if(n===qr)return i.RGB;if(n===Ge)return i.RGBA;if(n===Zr)return i.LUMINANCE;if(n===Yr)return i.LUMINANCE_ALPHA;if(n===Hn)return i.DEPTH_COMPONENT;if(n===Xn)return i.DEPTH_STENCIL;if(n===$r)return i.RED;if(n===So)return i.RED_INTEGER;if(n===Jr)return i.RG;if(n===bo)return i.RG_INTEGER;if(n===wo)return i.RGBA_INTEGER;if(n===rs||n===as||n===ls||n===cs)if(r===Kt)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===rs)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===as)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ls)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===cs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===rs)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===as)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ls)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===cs)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Eo||n===Ao||n===To||n===Ro)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===Eo)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ao)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===To)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ro)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Do||n===Io||n===Po)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Do||n===Io)return r===Kt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Po)return r===Kt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Lo||n===Bo||n===Uo||n===Fo||n===No||n===Oo||n===zo||n===ko||n===Vo||n===Ho||n===Go||n===Wo||n===Xo||n===qo)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===Lo)return r===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Bo)return r===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Uo)return r===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Fo)return r===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===No)return r===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Oo)return r===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===zo)return r===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ko)return r===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Vo)return r===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ho)return r===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Go)return r===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Wo)return r===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Xo)return r===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===qo)return r===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===hs||n===Zo||n===Yo)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===hs)return r===Kt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Zo)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Yo)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Kr||n===$o||n===Jo||n===Ko)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===hs)return o.COMPRESSED_RED_RGTC1_EXT;if(n===$o)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Jo)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ko)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Kn?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var I0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,P0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Ca=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new de,o=t.properties.get(s);o.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Be({vertexShader:I0,fragmentShader:P0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ae(new gn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ya=class extends fn{constructor(t,e){super();let n=this,s=null,o=1,r=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,m=null,y=null,x=new Ca,f=e.getContextAttributes(),p=null,E=null,b=[],S=[],L=new Wt,A=null,D=new ye;D.viewport=new ne;let B=new ye;B.viewport=new ne;let v=[D,B],_=new ao,T=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let et=b[X];return et===void 0&&(et=new xi,b[X]=et),et.getTargetRaySpace()},this.getControllerGrip=function(X){let et=b[X];return et===void 0&&(et=new xi,b[X]=et),et.getGripSpace()},this.getHand=function(X){let et=b[X];return et===void 0&&(et=new xi,b[X]=et),et.getHandSpace()};function z(X){let et=S.indexOf(X.inputSource);if(et===-1)return;let Ct=b[et];Ct!==void 0&&(Ct.update(X.inputSource,X.frame,c||r),Ct.dispatchEvent({type:X.type,data:X.inputSource}))}function W(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",K);for(let X=0;X<b.length;X++){let et=S[X];et!==null&&(S[X]=null,b[X].disconnect(et))}T=null,q=null,x.reset(),t.setRenderTarget(p),m=null,d=null,u=null,s=null,E=null,Qt.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u},this.getFrame=function(){return y},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",W),s.addEventListener("inputsourceschange",K),f.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(L),typeof XRWebGLBinding!="undefined"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ct=null,rt=null,wt=null;f.depth&&(wt=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Ct=f.stencil?Xn:Hn,rt=f.stencil?Kn:Ln);let Xt={colorFormat:e.RGBA8,depthFormat:wt,scaleFactor:o};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Xt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),E=new Qe(d.textureWidth,d.textureHeight,{format:Ge,type:nn,depthTexture:new es(d.textureWidth,d.textureHeight,rt,void 0,void 0,void 0,void 0,void 0,void 0,Ct),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}else{let Ct={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:o};m=new XRWebGLLayer(s,e,Ct),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new Qe(m.framebufferWidth,m.framebufferHeight,{format:Ge,type:nn,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(a),Qt.setContext(s),Qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function K(X){for(let et=0;et<X.removed.length;et++){let Ct=X.removed[et],rt=S.indexOf(Ct);rt>=0&&(S[rt]=null,b[rt].disconnect(Ct))}for(let et=0;et<X.added.length;et++){let Ct=X.added[et],rt=S.indexOf(Ct);if(rt===-1){for(let Xt=0;Xt<b.length;Xt++)if(Xt>=S.length){S.push(Ct),rt=Xt;break}else if(S[Xt]===null){S[Xt]=Ct,rt=Xt;break}if(rt===-1)break}let wt=b[rt];wt&&wt.connect(Ct)}}let H=new O,tt=new O;function V(X,et,Ct){H.setFromMatrixPosition(et.matrixWorld),tt.setFromMatrixPosition(Ct.matrixWorld);let rt=H.distanceTo(tt),wt=et.projectionMatrix.elements,Xt=Ct.projectionMatrix.elements,Et=wt[14]/(wt[10]-1),ae=wt[14]/(wt[10]+1),ie=(wt[9]+1)/wt[5],Ft=(wt[9]-1)/wt[5],w=(wt[8]-1)/wt[0],Ue=(Xt[8]+1)/Xt[0],Nt=Et*w,Ot=Et*Ue,vt=rt/(-w+Ue),te=vt*-w;if(et.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(te),X.translateZ(vt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),wt[10]===-1)X.projectionMatrix.copy(et.projectionMatrix),X.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{let _t=Et+vt,M=ae+vt,g=Nt-te,U=Ot+(rt-te),Z=ie*ae/M*_t,J=Ft*ae/M*_t;X.projectionMatrix.makePerspective(g,U,Z,J,_t,M),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function ot(X,et){et===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(et.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let et=X.near,Ct=X.far;x.texture!==null&&(x.depthNear>0&&(et=x.depthNear),x.depthFar>0&&(Ct=x.depthFar)),_.near=B.near=D.near=et,_.far=B.far=D.far=Ct,(T!==_.near||q!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),T=_.near,q=_.far),D.layers.mask=X.layers.mask|2,B.layers.mask=X.layers.mask|4,_.layers.mask=D.layers.mask|B.layers.mask;let rt=X.parent,wt=_.cameras;ot(_,rt);for(let Xt=0;Xt<wt.length;Xt++)ot(wt[Xt],rt);wt.length===2?V(_,D,B):_.projectionMatrix.copy(D.projectionMatrix),ut(X,_,rt)};function ut(X,et,Ct){Ct===null?X.matrix.copy(et.matrixWorld):(X.matrix.copy(Ct.matrixWorld),X.matrix.invert(),X.matrix.multiply(et.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(et.projectionMatrix),X.projectionMatrixInverse.copy(et.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Hs*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=X)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(_)};let xt=null;function Bt(X,et){if(h=et.getViewerPose(c||r),y=et,h!==null){let Ct=h.views;m!==null&&(t.setRenderTargetFramebuffer(E,m.framebuffer),t.setRenderTarget(E));let rt=!1;Ct.length!==_.cameras.length&&(_.cameras.length=0,rt=!0);for(let Et=0;Et<Ct.length;Et++){let ae=Ct[Et],ie=null;if(m!==null)ie=m.getViewport(ae);else{let w=u.getViewSubImage(d,ae);ie=w.viewport,Et===0&&(t.setRenderTargetTextures(E,w.colorTexture,d.ignoreDepthValues?void 0:w.depthStencilTexture),t.setRenderTarget(E))}let Ft=v[Et];Ft===void 0&&(Ft=new ye,Ft.layers.enable(Et),Ft.viewport=new ne,v[Et]=Ft),Ft.matrix.fromArray(ae.transform.matrix),Ft.matrix.decompose(Ft.position,Ft.quaternion,Ft.scale),Ft.projectionMatrix.fromArray(ae.projectionMatrix),Ft.projectionMatrixInverse.copy(Ft.projectionMatrix).invert(),Ft.viewport.set(ie.x,ie.y,ie.width,ie.height),Et===0&&(_.matrix.copy(Ft.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),rt===!0&&_.cameras.push(Ft)}let wt=s.enabledFeatures;if(wt&&wt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&u){let Et=u.getDepthInformation(Ct[0]);Et&&Et.isValid&&Et.texture&&x.init(t,Et,s.renderState)}}for(let Ct=0;Ct<b.length;Ct++){let rt=S[Ct],wt=b[Ct];rt!==null&&wt!==void 0&&wt.update(rt,et,c||r)}xt&&xt(X,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),y=null}let Qt=new d2;Qt.setAnimationLoop(Bt),this.setAnimationLoop=function(X){xt=X},this.dispose=function(){}}},ei=new ke,L0=new se;function B0(i,t){function e(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function n(f,p){p.color.getRGB(f.fogColor.value,ea(i)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function s(f,p,E,b,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(f,p):p.isMeshToonMaterial?(o(f,p),u(f,p)):p.isMeshPhongMaterial?(o(f,p),h(f,p)):p.isMeshStandardMaterial?(o(f,p),d(f,p),p.isMeshPhysicalMaterial&&m(f,p,S)):p.isMeshMatcapMaterial?(o(f,p),y(f,p)):p.isMeshDepthMaterial?o(f,p):p.isMeshDistanceMaterial?(o(f,p),x(f,p)):p.isMeshNormalMaterial?o(f,p):p.isLineBasicMaterial?(r(f,p),p.isLineDashedMaterial&&a(f,p)):p.isPointsMaterial?l(f,p,E,b):p.isSpriteMaterial?c(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,e(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,e(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===Me&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,e(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===Me&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,e(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,e(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);let E=t.get(p),b=E.envMap,S=E.envMapRotation;b&&(f.envMap.value=b,ei.copy(S),ei.x*=-1,ei.y*=-1,ei.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ei.y*=-1,ei.z*=-1),f.envMapRotation.value.setFromMatrix4(L0.makeRotationFromEuler(ei)),f.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap&&(f.lightMap.value=p.lightMap,f.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,f.lightMapTransform)),p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,f.aoMapTransform))}function r(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,e(p.map,f.mapTransform))}function a(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function l(f,p,E,b){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*E,f.scale.value=b*.5,p.map&&(f.map.value=p.map,e(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function c(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,e(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function h(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function u(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function d(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,f.roughnessMapTransform)),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function m(f,p,E){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Me&&f.clearcoatNormalScale.value.negate())),p.dispersion>0&&(f.dispersion.value=p.dispersion),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=E.texture,f.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(f.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(f.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,f.specularIntensityMapTransform))}function y(f,p){p.matcap&&(f.matcap.value=p.matcap)}function x(f,p){let E=t.get(p).light;f.referencePosition.value.setFromMatrixPosition(E.matrixWorld),f.nearDistance.value=E.shadow.camera.near,f.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function U0(i,t,e,n){let s={},o={},r=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,b){let S=b.program;n.uniformBlockBinding(E,S)}function c(E,b){let S=s[E.id];S===void 0&&(y(E),S=h(E),s[E.id]=S,E.addEventListener("dispose",f));let L=b.program;n.updateUBOMapping(E,L);let A=t.render.frame;o[E.id]!==A&&(d(E),o[E.id]=A)}function h(E){let b=u();E.__bindingPointIndex=b;let S=i.createBuffer(),L=E.__size,A=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,L,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,S),S}function u(){for(let E=0;E<a;E++)if(r.indexOf(E)===-1)return r.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){let b=s[E.id],S=E.uniforms,L=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let A=0,D=S.length;A<D;A++){let B=Array.isArray(S[A])?S[A]:[S[A]];for(let v=0,_=B.length;v<_;v++){let T=B[v];if(m(T,A,v,L)===!0){let q=T.__offset,z=Array.isArray(T.value)?T.value:[T.value],W=0;for(let K=0;K<z.length;K++){let H=z[K],tt=x(H);typeof H=="number"||typeof H=="boolean"?(T.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,q+W,T.__data)):H.isMatrix3?(T.__data[0]=H.elements[0],T.__data[1]=H.elements[1],T.__data[2]=H.elements[2],T.__data[3]=0,T.__data[4]=H.elements[3],T.__data[5]=H.elements[4],T.__data[6]=H.elements[5],T.__data[7]=0,T.__data[8]=H.elements[6],T.__data[9]=H.elements[7],T.__data[10]=H.elements[8],T.__data[11]=0):(H.toArray(T.__data,W),W+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,q,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(E,b,S,L){let A=E.value,D=b+"_"+S;if(L[D]===void 0)return typeof A=="number"||typeof A=="boolean"?L[D]=A:L[D]=A.clone(),!0;{let B=L[D];if(typeof A=="number"||typeof A=="boolean"){if(B!==A)return L[D]=A,!0}else if(B.equals(A)===!1)return B.copy(A),!0}return!1}function y(E){let b=E.uniforms,S=0,L=16;for(let D=0,B=b.length;D<B;D++){let v=Array.isArray(b[D])?b[D]:[b[D]];for(let _=0,T=v.length;_<T;_++){let q=v[_],z=Array.isArray(q.value)?q.value:[q.value];for(let W=0,K=z.length;W<K;W++){let H=z[W],tt=x(H),V=S%L,ot=V%tt.boundary,ut=V+ot;S+=ot,ut!==0&&L-ut<tt.storage&&(S+=L-ut),q.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=S,S+=tt.storage}}}let A=S%L;return A>0&&(S+=L-A),E.__size=S,E.__cache={},this}function x(E){let b={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(b.boundary=4,b.storage=4):E.isVector2?(b.boundary=8,b.storage=8):E.isVector3||E.isColor?(b.boundary=16,b.storage=12):E.isVector4?(b.boundary=16,b.storage=16):E.isMatrix3?(b.boundary=48,b.storage=48):E.isMatrix4?(b.boundary=64,b.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),b}function f(E){let b=E.target;b.removeEventListener("dispose",f);let S=r.indexOf(b.__bindingPointIndex);r.splice(S,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete o[b.id]}function p(){for(let E in s)i.deleteBuffer(s[E]);r=[],s={},o={}}return{bind:l,update:c,dispose:p}}var nr=class{constructor(t={}){let{canvas:e=N3(),context:n=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=r;let y=new Uint32Array(4),x=new Int32Array(4),f=null,p=null,E=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ie,this.toneMapping=yn,this.toneMappingExposure=1;let S=this,L=!1,A=0,D=0,B=null,v=-1,_=null,T=new ne,q=new ne,z=null,W=new Zt(0),K=0,H=e.width,tt=e.height,V=1,ot=null,ut=null,xt=new ne(0,0,H,tt),Bt=new ne(0,0,H,tt),Qt=!1,X=new ts,et=!1,Ct=!1;this.transmissionResolutionScale=1;let rt=new se,wt=new se,Xt=new O,Et=new ne,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ie=!1;function Ft(){return B===null?V:1}let w=n;function Ue(C,I){return e.getContext(C,I)}try{let C={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${lo}`),e.addEventListener("webglcontextlost",Y,!1),e.addEventListener("webglcontextrestored",ct,!1),e.addEventListener("webglcontextcreationerror",lt,!1),w===null){let I="webgl2";if(w=Ue(I,C),w===null)throw Ue(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Nt,Ot,vt,te,_t,M,g,U,Z,J,G,yt,at,dt,kt,j,ft,bt,At,mt,zt,Pt,jt,R;function it(){Nt=new jc(w),Nt.init(),Pt=new D0(w,Nt),Ot=new Zc(w,Nt,t,Pt),vt=new T0(w,Nt),Ot.reverseDepthBuffer&&d&&vt.buffers.depth.setReversed(!0),te=new n4(w),_t=new m0,M=new R0(w,Nt,vt,_t,Ot,Pt,te),g=new $c(S),U=new Qc(S),Z=new c1(w),jt=new Xc(w,Z),J=new t4(w,Z,te,jt),G=new s4(w,J,Z,te),At=new i4(w,Ot,M),j=new Yc(_t),yt=new f0(S,g,U,Nt,Ot,jt,j),at=new B0(S,_t),dt=new C0,kt=new S0(Nt),bt=new Wc(S,g,U,vt,G,m,l),ft=new E0(S,G,Ot),R=new U0(w,te,Ot,vt),mt=new qc(w,Nt,te),zt=new e4(w,Nt,te),te.programs=yt.programs,S.capabilities=Ot,S.extensions=Nt,S.properties=_t,S.renderLists=dt,S.shadowMap=ft,S.state=vt,S.info=te}it();let k=new ya(S,w);this.xr=k,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){let C=Nt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=Nt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(C){C!==void 0&&(V=C,this.setSize(H,tt,!1))},this.getSize=function(C){return C.set(H,tt)},this.setSize=function(C,I,F=!0){if(k.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=C,tt=I,e.width=Math.floor(C*V),e.height=Math.floor(I*V),F===!0&&(e.style.width=C+"px",e.style.height=I+"px"),this.setViewport(0,0,C,I)},this.getDrawingBufferSize=function(C){return C.set(H*V,tt*V).floor()},this.setDrawingBufferSize=function(C,I,F){H=C,tt=I,V=F,e.width=Math.floor(C*F),e.height=Math.floor(I*F),this.setViewport(0,0,C,I)},this.getCurrentViewport=function(C){return C.copy(T)},this.getViewport=function(C){return C.copy(xt)},this.setViewport=function(C,I,F,N){C.isVector4?xt.set(C.x,C.y,C.z,C.w):xt.set(C,I,F,N),vt.viewport(T.copy(xt).multiplyScalar(V).round())},this.getScissor=function(C){return C.copy(Bt)},this.setScissor=function(C,I,F,N){C.isVector4?Bt.set(C.x,C.y,C.z,C.w):Bt.set(C,I,F,N),vt.scissor(q.copy(Bt).multiplyScalar(V).round())},this.getScissorTest=function(){return Qt},this.setScissorTest=function(C){vt.setScissorTest(Qt=C)},this.setOpaqueSort=function(C){ot=C},this.setTransparentSort=function(C){ut=C},this.getClearColor=function(C){return C.copy(bt.getClearColor())},this.setClearColor=function(){bt.setClearColor.apply(bt,arguments)},this.getClearAlpha=function(){return bt.getClearAlpha()},this.setClearAlpha=function(){bt.setClearAlpha.apply(bt,arguments)},this.clear=function(C=!0,I=!0,F=!0){let N=0;if(C){let P=!1;if(B!==null){let Q=B.texture.format;P=Q===wo||Q===bo||Q===So}if(P){let Q=B.texture.type,st=Q===nn||Q===Ln||Q===Mi||Q===Kn||Q===vo||Q===Mo,pt=bt.getClearColor(),gt=bt.getClearAlpha(),Tt=pt.r,Rt=pt.g,Mt=pt.b;st?(y[0]=Tt,y[1]=Rt,y[2]=Mt,y[3]=gt,w.clearBufferuiv(w.COLOR,0,y)):(x[0]=Tt,x[1]=Rt,x[2]=Mt,x[3]=gt,w.clearBufferiv(w.COLOR,0,x))}else N|=w.COLOR_BUFFER_BIT}I&&(N|=w.DEPTH_BUFFER_BIT),F&&(N|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Y,!1),e.removeEventListener("webglcontextrestored",ct,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),bt.dispose(),dt.dispose(),kt.dispose(),_t.dispose(),g.dispose(),U.dispose(),G.dispose(),jt.dispose(),R.dispose(),yt.dispose(),k.dispose(),k.removeEventListener("sessionstart",Ma),k.removeEventListener("sessionend",Sa),Bn.stop()};function Y(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function ct(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;let C=te.autoReset,I=ft.enabled,F=ft.autoUpdate,N=ft.needsUpdate,P=ft.type;it(),te.autoReset=C,ft.enabled=I,ft.autoUpdate=F,ft.needsUpdate=N,ft.type=P}function lt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function It(C){let I=C.target;I.removeEventListener("dispose",It),oe(I)}function oe(C){me(C),_t.remove(C)}function me(C){let I=_t.get(C).programs;I!==void 0&&(I.forEach(function(F){yt.releaseProgram(F)}),C.isShaderMaterial&&yt.releaseShaderCache(C))}this.renderBufferDirect=function(C,I,F,N,P,Q){I===null&&(I=ae);let st=P.isMesh&&P.matrixWorld.determinant()<0,pt=x2(C,I,F,N,P);vt.setMaterial(N,st);let gt=F.index,Tt=1;if(N.wireframe===!0){if(gt=J.getWireframeAttribute(F),gt===void 0)return;Tt=2}let Rt=F.drawRange,Mt=F.attributes.position,Vt=Rt.start*Tt,Yt=(Rt.start+Rt.count)*Tt;Q!==null&&(Vt=Math.max(Vt,Q.start*Tt),Yt=Math.min(Yt,(Q.start+Q.count)*Tt)),gt!==null?(Vt=Math.max(Vt,0),Yt=Math.min(Yt,gt.count)):Mt!=null&&(Vt=Math.max(Vt,0),Yt=Math.min(Yt,Mt.count));let le=Yt-Vt;if(le<0||le===1/0)return;jt.setup(P,N,pt,F,gt);let re,Gt=mt;if(gt!==null&&(re=Z.get(gt),Gt=zt,Gt.setIndex(re)),P.isMesh)N.wireframe===!0?(vt.setLineWidth(N.wireframeLinewidth*Ft()),Gt.setMode(w.LINES)):Gt.setMode(w.TRIANGLES);else if(P.isLine){let St=N.linewidth;St===void 0&&(St=1),vt.setLineWidth(St*Ft()),P.isLineSegments?Gt.setMode(w.LINES):P.isLineLoop?Gt.setMode(w.LINE_LOOP):Gt.setMode(w.LINE_STRIP)}else P.isPoints?Gt.setMode(w.POINTS):P.isSprite&&Gt.setMode(w.TRIANGLES);if(P.isBatchedMesh)if(P._multiDrawInstances!==null)Gt.renderMultiDrawInstances(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount,P._multiDrawInstances);else if(Nt.get("WEBGL_multi_draw"))Gt.renderMultiDraw(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount);else{let St=P._multiDrawStarts,fe=P._multiDrawCounts,$t=P._multiDrawCount,Xe=gt?Z.get(gt).bytesPerElement:1,si=_t.get(N).currentProgram.getUniforms();for(let Te=0;Te<$t;Te++)si.setValue(w,"_gl_DrawID",Te),Gt.render(St[Te]/Xe,fe[Te])}else if(P.isInstancedMesh)Gt.renderInstances(Vt,le,P.count);else if(F.isInstancedBufferGeometry){let St=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,fe=Math.min(F.instanceCount,St);Gt.renderInstances(Vt,le,fe)}else Gt.render(Vt,le)};function Jt(C,I,F){C.transparent===!0&&C.side===He&&C.forceSinglePass===!1?(C.side=Me,C.needsUpdate=!0,gs(C,I,F),C.side=dn,C.needsUpdate=!0,gs(C,I,F),C.side=He):gs(C,I,F)}this.compile=function(C,I,F=null){F===null&&(F=C),p=kt.get(F),p.init(I),b.push(p),F.traverseVisible(function(P){P.isLight&&P.layers.test(I.layers)&&(p.pushLight(P),P.castShadow&&p.pushShadow(P))}),C!==F&&C.traverseVisible(function(P){P.isLight&&P.layers.test(I.layers)&&(p.pushLight(P),P.castShadow&&p.pushShadow(P))}),p.setupLights();let N=new Set;return C.traverse(function(P){if(!(P.isMesh||P.isPoints||P.isLine||P.isSprite))return;let Q=P.material;if(Q)if(Array.isArray(Q))for(let st=0;st<Q.length;st++){let pt=Q[st];Jt(pt,F,P),N.add(pt)}else Jt(Q,F,P),N.add(Q)}),b.pop(),p=null,N},this.compileAsync=function(C,I,F=null){let N=this.compile(C,I,F);return new Promise(P=>{function Q(){if(N.forEach(function(st){_t.get(st).currentProgram.isReady()&&N.delete(st)}),N.size===0){P(C);return}setTimeout(Q,10)}Nt.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let We=null;function rn(C){We&&We(C)}function Ma(){Bn.stop()}function Sa(){Bn.start()}let Bn=new d2;Bn.setAnimationLoop(rn),typeof self!="undefined"&&Bn.setContext(self),this.setAnimationLoop=function(C){We=C,k.setAnimationLoop(C),C===null?Bn.stop():Bn.start()},k.addEventListener("sessionstart",Ma),k.addEventListener("sessionend",Sa),this.render=function(C,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),k.enabled===!0&&k.isPresenting===!0&&(k.cameraAutoUpdate===!0&&k.updateCamera(I),I=k.getCamera()),C.isScene===!0&&C.onBeforeRender(S,C,I,B),p=kt.get(C,b.length),p.init(I),b.push(p),wt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),X.setFromProjectionMatrix(wt),Ct=this.localClippingEnabled,et=j.init(this.clippingPlanes,Ct),f=dt.get(C,E.length),f.init(),E.push(f),k.enabled===!0&&k.isPresenting===!0){let Q=S.xr.getDepthSensingMesh();Q!==null&&sr(Q,I,-1/0,S.sortObjects)}sr(C,I,0,S.sortObjects),f.finish(),S.sortObjects===!0&&f.sort(ot,ut),ie=k.enabled===!1||k.isPresenting===!1||k.hasDepthSensing()===!1,ie&&bt.addToRenderList(f,C),this.info.render.frame++,et===!0&&j.beginShadows();let F=p.state.shadowsArray;ft.render(F,C,I),et===!0&&j.endShadows(),this.info.autoReset===!0&&this.info.reset();let N=f.opaque,P=f.transmissive;if(p.setupLights(),I.isArrayCamera){let Q=I.cameras;if(P.length>0)for(let st=0,pt=Q.length;st<pt;st++){let gt=Q[st];wa(N,P,C,gt)}ie&&bt.render(C);for(let st=0,pt=Q.length;st<pt;st++){let gt=Q[st];ba(f,C,gt,gt.viewport)}}else P.length>0&&wa(N,P,C,I),ie&&bt.render(C),ba(f,C,I);B!==null&&D===0&&(M.updateMultisampleRenderTarget(B),M.updateRenderTargetMipmap(B)),C.isScene===!0&&C.onAfterRender(S,C,I),jt.resetDefaultState(),v=-1,_=null,b.pop(),b.length>0?(p=b[b.length-1],et===!0&&j.setGlobalState(S.clippingPlanes,p.state.camera)):p=null,E.pop(),E.length>0?f=E[E.length-1]:f=null};function sr(C,I,F,N){if(C.visible===!1)return;if(C.layers.test(I.layers)){if(C.isGroup)F=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(I);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||X.intersectsSprite(C)){N&&Et.setFromMatrixPosition(C.matrixWorld).applyMatrix4(wt);let st=G.update(C),pt=C.material;pt.visible&&f.push(C,st,pt,F,Et.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||X.intersectsObject(C))){let st=G.update(C),pt=C.material;if(N&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Et.copy(C.boundingSphere.center)):(st.boundingSphere===null&&st.computeBoundingSphere(),Et.copy(st.boundingSphere.center)),Et.applyMatrix4(C.matrixWorld).applyMatrix4(wt)),Array.isArray(pt)){let gt=st.groups;for(let Tt=0,Rt=gt.length;Tt<Rt;Tt++){let Mt=gt[Tt],Vt=pt[Mt.materialIndex];Vt&&Vt.visible&&f.push(C,st,Vt,F,Et.z,Mt)}}else pt.visible&&f.push(C,st,pt,F,Et.z,null)}}let Q=C.children;for(let st=0,pt=Q.length;st<pt;st++)sr(Q[st],I,F,N)}function ba(C,I,F,N){let P=C.opaque,Q=C.transmissive,st=C.transparent;p.setupLightsView(F),et===!0&&j.setGlobalState(S.clippingPlanes,F),N&&vt.viewport(T.copy(N)),P.length>0&&ms(P,I,F),Q.length>0&&ms(Q,I,F),st.length>0&&ms(st,I,F),vt.buffers.depth.setTest(!0),vt.buffers.depth.setMask(!0),vt.buffers.color.setMask(!0),vt.setPolygonOffset(!1)}function wa(C,I,F,N){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[N.id]===void 0&&(p.state.transmissionRenderTarget[N.id]=new Qe(1,1,{generateMipmaps:!0,type:Nt.has("EXT_color_buffer_half_float")||Nt.has("EXT_color_buffer_float")?Si:nn,minFilter:en,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ht.workingColorSpace}));let Q=p.state.transmissionRenderTarget[N.id],st=N.viewport||T;Q.setSize(st.z*S.transmissionResolutionScale,st.w*S.transmissionResolutionScale);let pt=S.getRenderTarget();S.setRenderTarget(Q),S.getClearColor(W),K=S.getClearAlpha(),K<1&&S.setClearColor(16777215,.5),S.clear(),ie&&bt.render(F);let gt=S.toneMapping;S.toneMapping=yn;let Tt=N.viewport;if(N.viewport!==void 0&&(N.viewport=void 0),p.setupLightsView(N),et===!0&&j.setGlobalState(S.clippingPlanes,N),ms(C,F,N),M.updateMultisampleRenderTarget(Q),M.updateRenderTargetMipmap(Q),Nt.has("WEBGL_multisampled_render_to_texture")===!1){let Rt=!1;for(let Mt=0,Vt=I.length;Mt<Vt;Mt++){let Yt=I[Mt],le=Yt.object,re=Yt.geometry,Gt=Yt.material,St=Yt.group;if(Gt.side===He&&le.layers.test(N.layers)){let fe=Gt.side;Gt.side=Me,Gt.needsUpdate=!0,Ea(le,F,N,re,Gt,St),Gt.side=fe,Gt.needsUpdate=!0,Rt=!0}}Rt===!0&&(M.updateMultisampleRenderTarget(Q),M.updateRenderTargetMipmap(Q))}S.setRenderTarget(pt),S.setClearColor(W,K),Tt!==void 0&&(N.viewport=Tt),S.toneMapping=gt}function ms(C,I,F){let N=I.isScene===!0?I.overrideMaterial:null;for(let P=0,Q=C.length;P<Q;P++){let st=C[P],pt=st.object,gt=st.geometry,Tt=N===null?st.material:N,Rt=st.group;pt.layers.test(F.layers)&&Ea(pt,I,F,gt,Tt,Rt)}}function Ea(C,I,F,N,P,Q){C.onBeforeRender(S,I,F,N,P,Q),C.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),P.onBeforeRender(S,I,F,N,C,Q),P.transparent===!0&&P.side===He&&P.forceSinglePass===!1?(P.side=Me,P.needsUpdate=!0,S.renderBufferDirect(F,I,N,P,C,Q),P.side=dn,P.needsUpdate=!0,S.renderBufferDirect(F,I,N,P,C,Q),P.side=He):S.renderBufferDirect(F,I,N,P,C,Q),C.onAfterRender(S,I,F,N,P,Q)}function gs(C,I,F){I.isScene!==!0&&(I=ae);let N=_t.get(C),P=p.state.lights,Q=p.state.shadowsArray,st=P.state.version,pt=yt.getParameters(C,P.state,Q,I,F),gt=yt.getProgramCacheKey(pt),Tt=N.programs;N.environment=C.isMeshStandardMaterial?I.environment:null,N.fog=I.fog,N.envMap=(C.isMeshStandardMaterial?U:g).get(C.envMap||N.environment),N.envMapRotation=N.environment!==null&&C.envMap===null?I.environmentRotation:C.envMapRotation,Tt===void 0&&(C.addEventListener("dispose",It),Tt=new Map,N.programs=Tt);let Rt=Tt.get(gt);if(Rt!==void 0){if(N.currentProgram===Rt&&N.lightsStateVersion===st)return Ta(C,pt),Rt}else pt.uniforms=yt.getUniforms(C),C.onBeforeCompile(pt,S),Rt=yt.acquireProgram(pt,gt),Tt.set(gt,Rt),N.uniforms=pt.uniforms;let Mt=N.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Mt.clippingPlanes=j.uniform),Ta(C,pt),N.needsLights=M2(C),N.lightsStateVersion=st,N.needsLights&&(Mt.ambientLightColor.value=P.state.ambient,Mt.lightProbe.value=P.state.probe,Mt.directionalLights.value=P.state.directional,Mt.directionalLightShadows.value=P.state.directionalShadow,Mt.spotLights.value=P.state.spot,Mt.spotLightShadows.value=P.state.spotShadow,Mt.rectAreaLights.value=P.state.rectArea,Mt.ltc_1.value=P.state.rectAreaLTC1,Mt.ltc_2.value=P.state.rectAreaLTC2,Mt.pointLights.value=P.state.point,Mt.pointLightShadows.value=P.state.pointShadow,Mt.hemisphereLights.value=P.state.hemi,Mt.directionalShadowMap.value=P.state.directionalShadowMap,Mt.directionalShadowMatrix.value=P.state.directionalShadowMatrix,Mt.spotShadowMap.value=P.state.spotShadowMap,Mt.spotLightMatrix.value=P.state.spotLightMatrix,Mt.spotLightMap.value=P.state.spotLightMap,Mt.pointShadowMap.value=P.state.pointShadowMap,Mt.pointShadowMatrix.value=P.state.pointShadowMatrix),N.currentProgram=Rt,N.uniformsList=null,Rt}function Aa(C){if(C.uniformsList===null){let I=C.currentProgram.getUniforms();C.uniformsList=Ei.seqWithValue(I.seq,C.uniforms)}return C.uniformsList}function Ta(C,I){let F=_t.get(C);F.outputColorSpace=I.outputColorSpace,F.batching=I.batching,F.batchingColor=I.batchingColor,F.instancing=I.instancing,F.instancingColor=I.instancingColor,F.instancingMorph=I.instancingMorph,F.skinning=I.skinning,F.morphTargets=I.morphTargets,F.morphNormals=I.morphNormals,F.morphColors=I.morphColors,F.morphTargetsCount=I.morphTargetsCount,F.numClippingPlanes=I.numClippingPlanes,F.numIntersection=I.numClipIntersection,F.vertexAlphas=I.vertexAlphas,F.vertexTangents=I.vertexTangents,F.toneMapping=I.toneMapping}function x2(C,I,F,N,P){I.isScene!==!0&&(I=ae),M.resetTextureUnits();let Q=I.fog,st=N.isMeshStandardMaterial?I.environment:null,pt=B===null?S.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:qn,gt=(N.isMeshStandardMaterial?U:g).get(N.envMap||st),Tt=N.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Rt=!!F.attributes.tangent&&(!!N.normalMap||N.anisotropy>0),Mt=!!F.morphAttributes.position,Vt=!!F.morphAttributes.normal,Yt=!!F.morphAttributes.color,le=yn;N.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(le=S.toneMapping);let re=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Gt=re!==void 0?re.length:0,St=_t.get(N),fe=p.state.lights;if(et===!0&&(Ct===!0||C!==_)){let ve=C===_&&N.id===v;j.setState(N,C,ve)}let $t=!1;N.version===St.__version?(St.needsLights&&St.lightsStateVersion!==fe.state.version||St.outputColorSpace!==pt||P.isBatchedMesh&&St.batching===!1||!P.isBatchedMesh&&St.batching===!0||P.isBatchedMesh&&St.batchingColor===!0&&P.colorTexture===null||P.isBatchedMesh&&St.batchingColor===!1&&P.colorTexture!==null||P.isInstancedMesh&&St.instancing===!1||!P.isInstancedMesh&&St.instancing===!0||P.isSkinnedMesh&&St.skinning===!1||!P.isSkinnedMesh&&St.skinning===!0||P.isInstancedMesh&&St.instancingColor===!0&&P.instanceColor===null||P.isInstancedMesh&&St.instancingColor===!1&&P.instanceColor!==null||P.isInstancedMesh&&St.instancingMorph===!0&&P.morphTexture===null||P.isInstancedMesh&&St.instancingMorph===!1&&P.morphTexture!==null||St.envMap!==gt||N.fog===!0&&St.fog!==Q||St.numClippingPlanes!==void 0&&(St.numClippingPlanes!==j.numPlanes||St.numIntersection!==j.numIntersection)||St.vertexAlphas!==Tt||St.vertexTangents!==Rt||St.morphTargets!==Mt||St.morphNormals!==Vt||St.morphColors!==Yt||St.toneMapping!==le||St.morphTargetsCount!==Gt)&&($t=!0):($t=!0,St.__version=N.version);let Xe=St.currentProgram;$t===!0&&(Xe=gs(N,I,P));let si=!1,Te=!1,Ri=!1,ee=Xe.getUniforms(),Fe=St.uniforms;if(vt.useProgram(Xe.program)&&(si=!0,Te=!0,Ri=!0),N.id!==v&&(v=N.id,Te=!0),si||_!==C){vt.buffers.depth.getReversed()?(rt.copy(C.projectionMatrix),z3(rt),k3(rt),ee.setValue(w,"projectionMatrix",rt)):ee.setValue(w,"projectionMatrix",C.projectionMatrix),ee.setValue(w,"viewMatrix",C.matrixWorldInverse);let Se=ee.map.cameraPosition;Se!==void 0&&Se.setValue(w,Xt.setFromMatrixPosition(C.matrixWorld)),Ot.logarithmicDepthBuffer&&ee.setValue(w,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&ee.setValue(w,"isOrthographic",C.isOrthographicCamera===!0),_!==C&&(_=C,Te=!0,Ri=!0)}if(P.isSkinnedMesh){ee.setOptional(w,P,"bindMatrix"),ee.setOptional(w,P,"bindMatrixInverse");let ve=P.skeleton;ve&&(ve.boneTexture===null&&ve.computeBoneTexture(),ee.setValue(w,"boneTexture",ve.boneTexture,M))}P.isBatchedMesh&&(ee.setOptional(w,P,"batchingTexture"),ee.setValue(w,"batchingTexture",P._matricesTexture,M),ee.setOptional(w,P,"batchingIdTexture"),ee.setValue(w,"batchingIdTexture",P._indirectTexture,M),ee.setOptional(w,P,"batchingColorTexture"),P._colorsTexture!==null&&ee.setValue(w,"batchingColorTexture",P._colorsTexture,M));let Ne=F.morphAttributes;if((Ne.position!==void 0||Ne.normal!==void 0||Ne.color!==void 0)&&At.update(P,F,Xe),(Te||St.receiveShadow!==P.receiveShadow)&&(St.receiveShadow=P.receiveShadow,ee.setValue(w,"receiveShadow",P.receiveShadow)),N.isMeshGouraudMaterial&&N.envMap!==null&&(Fe.envMap.value=gt,Fe.flipEnvMap.value=gt.isCubeTexture&&gt.isRenderTargetTexture===!1?-1:1),N.isMeshStandardMaterial&&N.envMap===null&&I.environment!==null&&(Fe.envMapIntensity.value=I.environmentIntensity),Te&&(ee.setValue(w,"toneMappingExposure",S.toneMappingExposure),St.needsLights&&v2(Fe,Ri),Q&&N.fog===!0&&at.refreshFogUniforms(Fe,Q),at.refreshMaterialUniforms(Fe,N,V,tt,p.state.transmissionRenderTarget[C.id]),Ei.upload(w,Aa(St),Fe,M)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(Ei.upload(w,Aa(St),Fe,M),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&ee.setValue(w,"center",P.center),ee.setValue(w,"modelViewMatrix",P.modelViewMatrix),ee.setValue(w,"normalMatrix",P.normalMatrix),ee.setValue(w,"modelMatrix",P.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){let ve=N.uniformsGroups;for(let Se=0,or=ve.length;Se<or;Se++){let Un=ve[Se];R.update(Un,Xe),R.bind(Un,Xe)}}return Xe}function v2(C,I){C.ambientLightColor.needsUpdate=I,C.lightProbe.needsUpdate=I,C.directionalLights.needsUpdate=I,C.directionalLightShadows.needsUpdate=I,C.pointLights.needsUpdate=I,C.pointLightShadows.needsUpdate=I,C.spotLights.needsUpdate=I,C.spotLightShadows.needsUpdate=I,C.rectAreaLights.needsUpdate=I,C.hemisphereLights.needsUpdate=I}function M2(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(C,I,F){_t.get(C.texture).__webglTexture=I,_t.get(C.depthTexture).__webglTexture=F;let N=_t.get(C);N.__hasExternalTextures=!0,N.__autoAllocateDepthBuffer=F===void 0,N.__autoAllocateDepthBuffer||Nt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),N.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,I){let F=_t.get(C);F.__webglFramebuffer=I,F.__useDefaultFramebuffer=I===void 0};let S2=w.createFramebuffer();this.setRenderTarget=function(C,I=0,F=0){B=C,A=I,D=F;let N=!0,P=null,Q=!1,st=!1;if(C){let gt=_t.get(C);if(gt.__useDefaultFramebuffer!==void 0)vt.bindFramebuffer(w.FRAMEBUFFER,null),N=!1;else if(gt.__webglFramebuffer===void 0)M.setupRenderTarget(C);else if(gt.__hasExternalTextures)M.rebindTextures(C,_t.get(C.texture).__webglTexture,_t.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let Mt=C.depthTexture;if(gt.__boundDepthTexture!==Mt){if(Mt!==null&&_t.has(Mt)&&(C.width!==Mt.image.width||C.height!==Mt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(C)}}let Tt=C.texture;(Tt.isData3DTexture||Tt.isDataArrayTexture||Tt.isCompressedArrayTexture)&&(st=!0);let Rt=_t.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Rt[I])?P=Rt[I][F]:P=Rt[I],Q=!0):C.samples>0&&M.useMultisampledRTT(C)===!1?P=_t.get(C).__webglMultisampledFramebuffer:Array.isArray(Rt)?P=Rt[F]:P=Rt,T.copy(C.viewport),q.copy(C.scissor),z=C.scissorTest}else T.copy(xt).multiplyScalar(V).floor(),q.copy(Bt).multiplyScalar(V).floor(),z=Qt;if(F!==0&&(P=S2),vt.bindFramebuffer(w.FRAMEBUFFER,P)&&N&&vt.drawBuffers(C,P),vt.viewport(T),vt.scissor(q),vt.setScissorTest(z),Q){let gt=_t.get(C.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+I,gt.__webglTexture,F)}else if(st){let gt=_t.get(C.texture),Tt=I;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,gt.__webglTexture,F,Tt)}else if(C!==null&&F!==0){let gt=_t.get(C.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,gt.__webglTexture,F)}v=-1},this.readRenderTargetPixels=function(C,I,F,N,P,Q,st){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pt=_t.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&st!==void 0&&(pt=pt[st]),pt){vt.bindFramebuffer(w.FRAMEBUFFER,pt);try{let gt=C.texture,Tt=gt.format,Rt=gt.type;if(!Ot.textureFormatReadable(Tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ot.textureTypeReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=C.width-N&&F>=0&&F<=C.height-P&&w.readPixels(I,F,N,P,Pt.convert(Tt),Pt.convert(Rt),Q)}finally{let gt=B!==null?_t.get(B).__webglFramebuffer:null;vt.bindFramebuffer(w.FRAMEBUFFER,gt)}}},this.readRenderTargetPixelsAsync=async function(C,I,F,N,P,Q,st){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pt=_t.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&st!==void 0&&(pt=pt[st]),pt){let gt=C.texture,Tt=gt.format,Rt=gt.type;if(!Ot.textureFormatReadable(Tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ot.textureTypeReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=C.width-N&&F>=0&&F<=C.height-P){vt.bindFramebuffer(w.FRAMEBUFFER,pt);let Mt=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,Mt),w.bufferData(w.PIXEL_PACK_BUFFER,Q.byteLength,w.STREAM_READ),w.readPixels(I,F,N,P,Pt.convert(Tt),Pt.convert(Rt),0);let Vt=B!==null?_t.get(B).__webglFramebuffer:null;vt.bindFramebuffer(w.FRAMEBUFFER,Vt);let Yt=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await O3(w,Yt,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,Mt),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,Q),w.deleteBuffer(Mt),w.deleteSync(Yt),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,I=null,F=0){C.isTexture!==!0&&(Qn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,C=arguments[1]);let N=Math.pow(2,-F),P=Math.floor(C.image.width*N),Q=Math.floor(C.image.height*N),st=I!==null?I.x:0,pt=I!==null?I.y:0;M.setTexture2D(C,0),w.copyTexSubImage2D(w.TEXTURE_2D,F,0,0,st,pt,P,Q),vt.unbindTexture()};let b2=w.createFramebuffer(),w2=w.createFramebuffer();this.copyTextureToTexture=function(C,I,F=null,N=null,P=0,Q=null){C.isTexture!==!0&&(Qn("WebGLRenderer: copyTextureToTexture function signature has changed."),N=arguments[0]||null,C=arguments[1],I=arguments[2],Q=arguments[3]||0,F=null),Q===null&&(P!==0?(Qn("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=P,P=0):Q=0);let st,pt,gt,Tt,Rt,Mt,Vt,Yt,le,re=C.isCompressedTexture?C.mipmaps[Q]:C.image;if(F!==null)st=F.max.x-F.min.x,pt=F.max.y-F.min.y,gt=F.isBox3?F.max.z-F.min.z:1,Tt=F.min.x,Rt=F.min.y,Mt=F.isBox3?F.min.z:0;else{let Ne=Math.pow(2,-P);st=Math.floor(re.width*Ne),pt=Math.floor(re.height*Ne),C.isDataArrayTexture?gt=re.depth:C.isData3DTexture?gt=Math.floor(re.depth*Ne):gt=1,Tt=0,Rt=0,Mt=0}N!==null?(Vt=N.x,Yt=N.y,le=N.z):(Vt=0,Yt=0,le=0);let Gt=Pt.convert(I.format),St=Pt.convert(I.type),fe;I.isData3DTexture?(M.setTexture3D(I,0),fe=w.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(M.setTexture2DArray(I,0),fe=w.TEXTURE_2D_ARRAY):(M.setTexture2D(I,0),fe=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,I.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,I.unpackAlignment);let $t=w.getParameter(w.UNPACK_ROW_LENGTH),Xe=w.getParameter(w.UNPACK_IMAGE_HEIGHT),si=w.getParameter(w.UNPACK_SKIP_PIXELS),Te=w.getParameter(w.UNPACK_SKIP_ROWS),Ri=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,re.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,re.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Tt),w.pixelStorei(w.UNPACK_SKIP_ROWS,Rt),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Mt);let ee=C.isDataArrayTexture||C.isData3DTexture,Fe=I.isDataArrayTexture||I.isData3DTexture;if(C.isDepthTexture){let Ne=_t.get(C),ve=_t.get(I),Se=_t.get(Ne.__renderTarget),or=_t.get(ve.__renderTarget);vt.bindFramebuffer(w.READ_FRAMEBUFFER,Se.__webglFramebuffer),vt.bindFramebuffer(w.DRAW_FRAMEBUFFER,or.__webglFramebuffer);for(let Un=0;Un<gt;Un++)ee&&(w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,_t.get(C).__webglTexture,P,Mt+Un),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,_t.get(I).__webglTexture,Q,le+Un)),w.blitFramebuffer(Tt,Rt,st,pt,Vt,Yt,st,pt,w.DEPTH_BUFFER_BIT,w.NEAREST);vt.bindFramebuffer(w.READ_FRAMEBUFFER,null),vt.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(P!==0||C.isRenderTargetTexture||_t.has(C)){let Ne=_t.get(C),ve=_t.get(I);vt.bindFramebuffer(w.READ_FRAMEBUFFER,b2),vt.bindFramebuffer(w.DRAW_FRAMEBUFFER,w2);for(let Se=0;Se<gt;Se++)ee?w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Ne.__webglTexture,P,Mt+Se):w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Ne.__webglTexture,P),Fe?w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,ve.__webglTexture,Q,le+Se):w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,ve.__webglTexture,Q),P!==0?w.blitFramebuffer(Tt,Rt,st,pt,Vt,Yt,st,pt,w.COLOR_BUFFER_BIT,w.NEAREST):Fe?w.copyTexSubImage3D(fe,Q,Vt,Yt,le+Se,Tt,Rt,st,pt):w.copyTexSubImage2D(fe,Q,Vt,Yt,Tt,Rt,st,pt);vt.bindFramebuffer(w.READ_FRAMEBUFFER,null),vt.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else Fe?C.isDataTexture||C.isData3DTexture?w.texSubImage3D(fe,Q,Vt,Yt,le,st,pt,gt,Gt,St,re.data):I.isCompressedArrayTexture?w.compressedTexSubImage3D(fe,Q,Vt,Yt,le,st,pt,gt,Gt,re.data):w.texSubImage3D(fe,Q,Vt,Yt,le,st,pt,gt,Gt,St,re):C.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,Q,Vt,Yt,st,pt,Gt,St,re.data):C.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,Q,Vt,Yt,re.width,re.height,Gt,re.data):w.texSubImage2D(w.TEXTURE_2D,Q,Vt,Yt,st,pt,Gt,St,re);w.pixelStorei(w.UNPACK_ROW_LENGTH,$t),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Xe),w.pixelStorei(w.UNPACK_SKIP_PIXELS,si),w.pixelStorei(w.UNPACK_SKIP_ROWS,Te),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Ri),Q===0&&I.generateMipmaps&&w.generateMipmap(fe),vt.unbindTexture()},this.copyTextureToTexture3D=function(C,I,F=null,N=null,P=0){return C.isTexture!==!0&&(Qn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,N=arguments[1]||null,C=arguments[2],I=arguments[3],P=arguments[4]||0),Qn('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,I,F,N,P)},this.initRenderTarget=function(C){_t.get(C).__webglFramebuffer===void 0&&M.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?M.setTextureCube(C,0):C.isData3DTexture?M.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?M.setTexture2DArray(C,0):M.setTexture2D(C,0),vt.unbindTexture()},this.resetState=function(){A=0,D=0,B=null,vt.reset(),jt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Je}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Ht._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ht._getUnpackColorSpace()}};var xa="uniform sampler2D uTexture;uniform float uOpacity;varying vec2 vUv;void main(){vec4 texture=texture2D(uTexture,vUv);gl_FragColor=texture;gl_FragColor.a*=uOpacity;}";var y2="varying vec2 vUv;uniform float uTime;uniform float uManualTime;uniform float uSpeed;uniform float uElevation;uniform float uTwistFactor;uniform float uTwistFactor2;uniform vec2 uFrequency;uniform sampler2D uTexture;varying float twistPerlin2;vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x,289.0);}vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}vec3 fade(vec3 t){return t*t*t*(t*(t*6.0-15.0)+10.0);}float cnoise(vec3 P){vec3 Pi0=floor(P);vec3 Pi1=Pi0+vec3(1.0);Pi0=mod(Pi0,289.0);Pi1=mod(Pi1,289.0);vec3 Pf0=fract(P);vec3 Pf1=Pf0-vec3(1.0);vec4 ix=vec4(Pi0.x,Pi1.x,Pi0.x,Pi1.x);vec4 iy=vec4(Pi0.yy,Pi1.yy);vec4 iz0=Pi0.zzzz;vec4 iz1=Pi1.zzzz;vec4 ixy=permute(permute(ix)+iy);vec4 ixy0=permute(ixy+iz0);vec4 ixy1=permute(ixy+iz1);vec4 gx0=ixy0/7.0;vec4 gy0=fract(floor(gx0)/7.0)-0.5;gx0=fract(gx0);vec4 gz0=vec4(0.5)-abs(gx0)-abs(gy0);vec4 sz0=step(gz0,vec4(0.0));gx0-=sz0*(step(0.0,gx0)-0.5);gy0-=sz0*(step(0.0,gy0)-0.5);vec4 gx1=ixy1/7.0;vec4 gy1=fract(floor(gx1)/7.0)-0.5;gx1=fract(gx1);vec4 gz1=vec4(0.5)-abs(gx1)-abs(gy1);vec4 sz1=step(gz1,vec4(0.0));gx1-=sz1*(step(0.0,gx1)-0.5);gy1-=sz1*(step(0.0,gy1)-0.5);vec3 g000=vec3(gx0.x,gy0.x,gz0.x);vec3 g100=vec3(gx0.y,gy0.y,gz0.y);vec3 g010=vec3(gx0.z,gy0.z,gz0.z);vec3 g110=vec3(gx0.w,gy0.w,gz0.w);vec3 g001=vec3(gx1.x,gy1.x,gz1.x);vec3 g101=vec3(gx1.y,gy1.y,gz1.y);vec3 g011=vec3(gx1.z,gy1.z,gz1.z);vec3 g111=vec3(gx1.w,gy1.w,gz1.w);vec4 norm0=taylorInvSqrt(vec4(dot(g000,g000),dot(g010,g010),dot(g100,g100),dot(g110,g110)));g000*=norm0.x;g010*=norm0.y;g100*=norm0.z;g110*=norm0.w;vec4 norm1=taylorInvSqrt(vec4(dot(g001,g001),dot(g011,g011),dot(g101,g101),dot(g111,g111)));g001*=norm1.x;g011*=norm1.y;g101*=norm1.z;g111*=norm1.w;float n000=dot(g000,Pf0);float n100=dot(g100,vec3(Pf1.x,Pf0.yz));float n010=dot(g010,vec3(Pf0.x,Pf1.y,Pf0.z));float n110=dot(g110,vec3(Pf1.xy,Pf0.z));float n001=dot(g001,vec3(Pf0.xy,Pf1.z));float n101=dot(g101,vec3(Pf1.x,Pf0.y,Pf1.z));float n011=dot(g011,vec3(Pf0.x,Pf1.yz));float n111=dot(g111,Pf1);vec3 fade_xyz=fade(Pf0);vec4 n_z=mix(vec4(n000,n100,n010,n110),vec4(n001,n101,n011,n111),fade_xyz.z);vec2 n_yz=mix(n_z.xy,n_z.zw,fade_xyz.y);float n_xyz=mix(n_yz.x,n_yz.y,fade_xyz.x);return 2.2*n_xyz;}vec2 rotate2D(vec2 value,float angle){float s=sin(angle);float c=cos(angle);mat2 m=mat2(c,s,-s,c);return m*value;}void main(){vec3 newPosition=position;newPosition.x*=3.0;float elevation=sin(position.x*uFrequency.x+uManualTime*uSpeed)*sin(position.y*uFrequency.y+uManualTime*uSpeed)*uElevation;newPosition.xy+=elevation;float angle=newPosition.y*uTwistFactor*cnoise(vec3(newPosition.zx,uManualTime));float angle2=newPosition.y*uTwistFactor2*cnoise(vec3(newPosition.yz,uManualTime));newPosition.zy*=rotate2D(newPosition.zy,angle);gl_Position=projectionMatrix*modelViewMatrix*vec4(newPosition,1.0);vUv=uv;}";var _2="varying vec2 vUv;uniform float uTime;uniform float uManualTime;uniform float uSpeed;uniform float uElevation;uniform float uTwistFactor;uniform float uTwistFactor2;uniform vec2 uFrequency;uniform sampler2D uTexture;varying float twistPerlin2;vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x,289.0);}vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}vec3 fade(vec3 t){return t*t*t*(t*(t*6.0-15.0)+10.0);}float cnoise(vec3 P){vec3 Pi0=floor(P);vec3 Pi1=Pi0+vec3(1.0);Pi0=mod(Pi0,289.0);Pi1=mod(Pi1,289.0);vec3 Pf0=fract(P);vec3 Pf1=Pf0-vec3(1.0);vec4 ix=vec4(Pi0.x,Pi1.x,Pi0.x,Pi1.x);vec4 iy=vec4(Pi0.yy,Pi1.yy);vec4 iz0=Pi0.zzzz;vec4 iz1=Pi1.zzzz;vec4 ixy=permute(permute(ix)+iy);vec4 ixy0=permute(ixy+iz0);vec4 ixy1=permute(ixy+iz1);vec4 gx0=ixy0/7.0;vec4 gy0=fract(floor(gx0)/7.0)-0.5;gx0=fract(gx0);vec4 gz0=vec4(0.5)-abs(gx0)-abs(gy0);vec4 sz0=step(gz0,vec4(0.0));gx0-=sz0*(step(0.0,gx0)-0.5);gy0-=sz0*(step(0.0,gy0)-0.5);vec4 gx1=ixy1/7.0;vec4 gy1=fract(floor(gx1)/7.0)-0.5;gx1=fract(gx1);vec4 gz1=vec4(0.5)-abs(gx1)-abs(gy1);vec4 sz1=step(gz1,vec4(0.0));gx1-=sz1*(step(0.0,gx1)-0.5);gy1-=sz1*(step(0.0,gy1)-0.5);vec3 g000=vec3(gx0.x,gy0.x,gz0.x);vec3 g100=vec3(gx0.y,gy0.y,gz0.y);vec3 g010=vec3(gx0.z,gy0.z,gz0.z);vec3 g110=vec3(gx0.w,gy0.w,gz0.w);vec3 g001=vec3(gx1.x,gy1.x,gz1.x);vec3 g101=vec3(gx1.y,gy1.y,gz1.y);vec3 g011=vec3(gx1.z,gy1.z,gz1.z);vec3 g111=vec3(gx1.w,gy1.w,gz1.w);vec4 norm0=taylorInvSqrt(vec4(dot(g000,g000),dot(g010,g010),dot(g100,g100),dot(g110,g110)));g000*=norm0.x;g010*=norm0.y;g100*=norm0.z;g110*=norm0.w;vec4 norm1=taylorInvSqrt(vec4(dot(g001,g001),dot(g011,g011),dot(g101,g101),dot(g111,g111)));g001*=norm1.x;g011*=norm1.y;g101*=norm1.z;g111*=norm1.w;float n000=dot(g000,Pf0);float n100=dot(g100,vec3(Pf1.x,Pf0.yz));float n010=dot(g010,vec3(Pf0.x,Pf1.y,Pf0.z));float n110=dot(g110,vec3(Pf1.xy,Pf0.z));float n001=dot(g001,vec3(Pf0.xy,Pf1.z));float n101=dot(g101,vec3(Pf1.x,Pf0.y,Pf1.z));float n011=dot(g011,vec3(Pf0.x,Pf1.yz));float n111=dot(g111,Pf1);vec3 fade_xyz=fade(Pf0);vec4 n_z=mix(vec4(n000,n100,n010,n110),vec4(n001,n101,n011,n111),fade_xyz.z);vec2 n_yz=mix(n_z.xy,n_z.zw,fade_xyz.y);float n_xyz=mix(n_yz.x,n_yz.y,fade_xyz.x);return 2.2*n_xyz;}vec2 rotate2D(vec2 value,float angle){float s=sin(angle);float c=cos(angle);mat2 m=mat2(c,s,-s,c);return m*value;}void main(){vec3 newPosition=position;newPosition.x*=5.0;float elevation=sin(position.x*uFrequency.x+uManualTime*uSpeed)*sin(position.y*uFrequency.y+uManualTime*uSpeed)*uElevation;newPosition.xy+=elevation;float angle=newPosition.y*uTwistFactor*cnoise(vec3(newPosition.zx,uManualTime));float angle2=newPosition.y*uTwistFactor2*cnoise(vec3(newPosition.yz,uManualTime));newPosition.zy*=rotate2D(newPosition.zy,angle);gl_Position=projectionMatrix*modelViewMatrix*vec4(newPosition,1.0);vUv=uv;}";var ds=class{constructor(){ht(this,"scene");ht(this,"meshTop");ht(this,"meshBottom");ht(this,"_currentSection");ht(this,"_isMobile");ht(this,"preloaderComplete",!1);let t=document.createElement("canvas");t.classList.add("webgl"),t.style.zIndex="1",document.body.appendChild(t),this.scene=new ji;let e={width:window.innerWidth,height:window.innerHeight};window.addEventListener("resize",()=>{e.width=window.innerWidth,e.height=window.innerHeight,n.aspect=e.width/e.height,n.updateProjectionMatrix(),s.setSize(e.width,e.height),s.setPixelRatio(Math.min(window.devicePixelRatio,2))});let n=new ye(75,e.width/e.height,.1,100);n.position.set(.25,1,1.2),this.scene.add(n);let s=new nr({canvas:t,antialias:!0,alpha:!0,preserveDrawingBuffer:!0});s.setSize(e.width,e.height),s.setPixelRatio(Math.min(window.devicePixelRatio,2));let o=new is().load("https://cdn.prod.website-files.com/67a51f5233734befd00d7699/67bf928a8f6ad5c62f6effc8_curved.png");o.minFilter=en,o.magFilter=Le,o.anisotropy=s.capabilities.getMaxAnisotropy(),o.generateMipmaps=!0;let r=new gn(2,1,400,400),a={position:[0,0,0],rotation:[0,0,0],vertexShader:y2,fragmentShader:xa,freqX:-5,freqY:-1.3,twist:-3,elevation:.1},l={position:[0,2.1,0],rotation:[0,0,Math.PI],vertexShader:_2,fragmentShader:xa,freqX:-3,freqY:1.9,twist:-3.5,elevation:.2};this.meshBottom=this.createMesh(a,o,r),this.meshTop=this.createMesh(l,o,r);let c=()=>{this.meshTop&&(this.meshTop.material.uniforms.uManualTime.value+=.0025),this.meshBottom&&(this.meshBottom.material.uniforms.uManualTime.value+=.0022),(this.meshTop||this.meshBottom)&&(s.render(this.scene,n),window.requestAnimationFrame(c))};c(),this.initAnim()}createMesh(t,e,n){let s=new Be({vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:He,depthWrite:!1,transparent:!0,uniforms:{uTexture:{value:e},uTime:{value:0},uElevation:{value:t.elevation},uTwistFactor:{value:t.twist},uTwistFactor2:{value:-2},uFrequency:{value:new Wt(t.freqX,t.freqY)},uSpeed:{value:.5},uManualTime:{value:0},uOpacity:{value:0}}}),o=new Ae(n,s);return o.position.set(...t.position),o.rotation.set(...t.rotation),this.scene.add(o),o}get isMobile(){return this._isMobile}set isMobile(t){this.preloaderComplete&&this.showHideBottomMesh(t?0:1),this._isMobile=t}initAnim(){gsap.to(this.meshTop.material.uniforms.uOpacity,{value:1,duration:2,ease:"linear"}),gsap.to(this.meshBottom.material.uniforms.uOpacity,{value:1,duration:2,ease:"linear"})}onPreloaderComplete(){this.preloaderComplete=!0,this.meshTop&&(gsap.killTweensOf(this.meshTop.material.uniforms.uOpacity),gsap.to(this.meshTop.material.uniforms.uOpacity,{value:0,duration:1,ease:"linear",onComplete:()=>{this.meshTop.geometry.dispose(),this.meshTop.material.dispose(),this.scene.remove(this.meshTop),this.meshTop=null}})),this.meshBottom&&this.isMobile&&this.showHideBottomMesh(0)}showHideBottomMesh(t){t=0,gsap.killTweensOf(this.meshBottom.material.uniforms.uOpacity),gsap.to(this.meshBottom.material.uniforms.uOpacity,{value:t,duration:1,ease:"linear"})}};var Ti=`<svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 4320 323" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1779_1730)">
<g opacity="0.2">
<path d="M3328.63 609.338C3329.06 621.032 3319.9 633.687 3299.61 634.924C3282.14 635.665 3263.75 630.584 3247.99 626.484C3218.23 618.738 3189.62 609.182 3161.33 599.525C3063.84 566.243 2969.09 529.686 2874.01 493.764C2785.01 460.133 2695.94 426.565 2606.21 393.712C2538.65 369.039 2470.72 344.762 2402.15 321.23C2157.18 294.174 1908.98 279.554 1660.81 270.873C1601.46 268.84 1542.08 267.156 1482.67 265.796C1476.58 278.779 1471.54 291.913 1466.65 305.09C1455.26 335.45 1442.8 365.339 1421.65 393.654C1403.41 416.782 1415.46 447.643 1421.41 471.765C1427.46 496.16 1435.83 522.677 1426.56 547.165C1416.68 573.231 1382.79 586.407 1342.64 590.234C1311.52 593.202 1279.79 591.775 1248.71 589.443C1165.35 582.526 1068.23 571.741 1004.98 533.424C968.595 510.262 954.194 481.304 949.726 449.398C948.821 443.227 948.175 437.043 947.563 430.859C945.146 407.415 943.515 381.723 921.883 361.622C892.728 334.537 836.714 327.187 788.664 323.587C515.269 304.964 240.502 325.225 -30.7025 347.625C-105.624 353.817 -180.719 360.708 -256.181 363.655C-302.313 365.436 -348.679 365.752 -394.885 365.587C-447.943 365.398 -502.431 365.31 -554.796 359.29C-566.015 357.879 -593.951 355.998 -596.994 346.644C-596.994 346.522 -597.007 346.391 -596.994 346.273C-595.882 335.833 -549.237 331.127 -536.473 329.216C-504.875 324.492 -472.79 321.137 -440.759 317.858C-439.667 317.744 -439.128 317.689 -438.036 317.576C-292.972 302.741 -145.439 295.61 0.916057 288.205C253.385 275.491 506.461 267.388 759.642 263.342C999.135 259.612 1238.78 259.663 1478.21 264.942C1490.87 238.678 1510.33 213.765 1545.01 196.408C1593.3 172.244 1657.91 165.475 1717.54 162.263C1821.73 157.043 1929.73 181.746 2025.12 205.257C2156.49 237.638 2282.55 278.371 2406.43 320.779C2448.12 325.423 2489.7 330.411 2531.17 335.829C2669.83 354.141 2807.72 376.781 2939.95 409.2C3022.56 429.453 3103.94 453.562 3177.04 485.476C3203.92 497.208 3229.67 510.06 3253.08 524.478C3287.8 546.314 3328.54 576.308 3328.69 609.329H3328.63V609.338ZM2410.25 322.139C2477.58 345.297 2544.26 369.183 2610.6 393.435C2700.34 426.287 2789.4 459.864 2878.41 493.495C2967.96 527.333 3057.25 561.591 3148.67 593.391C3179.05 603.958 3209.69 614.402 3241.38 623.331C3258.16 628.058 3278.99 634.928 3298 634.23C3321.02 632.984 3324.66 613.577 3322.7 602.459C3317.29 571.854 3281.22 545.447 3248.18 524.672C3224.83 510.279 3199.13 497.452 3172.31 485.741C3099.36 453.89 3018.15 429.832 2935.71 409.617C2803.77 377.261 2666.18 354.667 2527.83 336.397C2488.72 331.299 2449.51 326.564 2410.2 322.143H2410.26L2410.25 322.139ZM1482.97 265.064C1542.61 266.428 1602.22 268.116 1661.81 270.158C1908.28 278.779 2154.76 293.265 2398.13 319.891C2303.64 287.62 2207.96 256.59 2109.67 229.172C2035.67 208.608 1960.1 189.584 1881.91 176.349C1829.33 167.449 1773.69 160.242 1718.98 162.983C1650.2 166.708 1574.53 176.033 1526.97 210.586C1505.49 226.318 1492.82 245.468 1482.98 265.072V265.064H1482.97ZM1408.11 422.911C1408.07 412.972 1409.91 402.637 1416.77 393.569C1437.91 365.268 1450.38 335.4 1461.75 305.052C1466.7 291.863 1471.73 278.699 1477.77 265.691C1238.63 260.416 999.268 260.374 760.068 264.092C507.24 268.137 254.511 276.228 2.39414 288.925C-143.568 296.313 -290.702 303.419 -435.379 318.211C-436.471 318.321 -437.01 318.376 -438.102 318.485C-469.694 321.714 -501.326 325.019 -532.492 329.653C-544.962 331.506 -591.102 336.098 -592.174 346.278C-592.187 346.383 -592.174 346.505 -592.174 346.627C-589.477 355.484 -562.486 357.366 -551.893 358.709C-500.314 364.64 -446.604 364.699 -394.353 364.872C-348.719 365.023 -302.926 364.703 -257.366 362.944C-182.277 360.001 -107.549 353.139 -32.9995 346.976C239.637 324.45 515.795 304.181 790.635 322.909C839.318 326.551 896.523 333.893 926.304 361.256C948.235 381.399 949.9 407.276 952.316 430.846C952.936 437.03 953.628 443.21 954.48 449.382C958.941 481.215 973.242 510.128 1009.55 533.247C1072.25 571.181 1168.25 581.933 1250.87 588.794C1280.37 591.03 1310.43 592.44 1339.97 589.615C1379.63 585.835 1412.39 572.562 1421.81 546.87C1430.76 522.433 1422.47 496.118 1416.45 471.794C1412.46 455.566 1408.52 439.362 1408.03 422.915H1408.09L1408.11 422.911Z" fill="url(#paint0_linear_1779_1730)" style=""/>
<path d="M3355.56 604.219C3355.66 617.062 3345.26 632.171 3322.06 632.962C3304.34 633.737 3285.69 628.66 3269.68 624.543C3240.35 616.999 3212.1 607.729 3184.17 598.333C3087.24 565.721 2993.01 529.837 2898.46 494.585C2810.56 461.809 2722.62 429.095 2634 397.097C2550.96 367.01 2467.39 337.492 2382.66 309.346C2242.98 293.816 2102.3 282.286 1960.98 274.721C1837.9 268.318 1714.51 265.413 1591.08 263.565C1569.3 263.25 1547.51 262.955 1525.73 262.706C1517.21 278.005 1510.68 293.644 1504.26 309.337C1492.28 338.801 1479.22 367.781 1457.85 395.161C1439.16 417.455 1449.93 447.622 1455.07 471.209C1460.26 494.952 1467.54 520.677 1457.78 544.327C1447.29 569.729 1413.58 582.438 1374.25 586.167C1343.29 589.106 1311.74 587.679 1280.82 585.347C1196.97 578.358 1100.86 567.417 1036.1 529.972C998.957 507.417 982.332 479.014 975.521 447.277C974.243 441.278 973.171 435.258 972.119 429.242C968.017 405.887 964.355 380.574 941.752 360.969C911.105 334.389 855.352 326.938 806.782 323.259C535.544 304.568 262.934 323.857 -6.33312 345.444C-79.7037 351.321 -153.234 357.879 -227.111 360.654C-227.583 360.367 -227.816 360.224 -228.282 359.934C-154.765 357.172 -81.5812 350.639 -8.55685 344.791C262.149 323.09 536.15 303.789 808.826 322.585C858.081 326.315 914.88 333.749 946.193 360.616C969.116 380.283 972.831 405.714 976.946 429.225C977.998 435.245 979.07 441.261 980.348 447.26C987.152 478.929 1003.74 507.286 1040.8 529.795C1104.96 566.904 1200.01 577.773 1283.11 584.698C1312.45 586.925 1342.33 588.335 1371.72 585.549C1410.55 582.025 1443.16 568.95 1453.2 544.049C1462.7 520.492 1455.42 494.863 1450.23 471.243C1445.11 447.622 1434.27 417.388 1453.1 395.081C1474.45 367.718 1487.5 338.751 1499.49 309.304C1505.87 293.606 1512.38 277.962 1520.85 262.656C1283.46 260.012 1045.98 261.364 808.706 266.824C767.121 267.792 725.535 268.794 683.963 269.926C662.471 270.511 640.979 271.096 619.487 271.686C487.027 275.281 354.554 278.817 222.181 283.502C92.3909 288.133 -37.3858 293.147 -166.976 299.659C-243.13 303.486 -319.736 307.136 -395.284 314.532C-427.728 317.723 -460.172 321.36 -492.037 326.412C-506.085 328.639 -550.88 333.034 -554.056 344.876C-553.456 351.982 -535.467 354.432 -527.45 356.002C-478.182 364.733 -423.8 364.8 -373.039 365.486C-329.35 366.076 -284.848 366.652 -241.272 364.047C-240.553 364.32 -240.193 364.455 -239.481 364.729C-282.944 367.318 -327.286 366.825 -370.869 366.311C-423.66 365.688 -479.953 365.566 -531.166 356.486C-539.608 354.827 -558.11 352.247 -558.949 344.867C-555.847 332.802 -510.286 328.256 -496.038 325.983C-463.741 320.834 -430.844 317.146 -397.947 313.905C-322.153 306.487 -245.3 302.817 -168.9 298.973C-39.0636 292.448 90.9594 287.422 220.996 282.787C353.476 278.093 486.049 274.557 618.615 270.962C640.107 270.377 661.599 269.796 683.091 269.202C724.709 268.061 766.328 267.059 807.96 266.091C1045.62 260.631 1283.48 259.271 1521.27 261.923C1535.21 237.718 1556.69 215.739 1590.43 200.689C1638.19 179.38 1699.11 173.28 1756.02 170.337C1851.17 165.601 1949.68 186.536 2037.56 207.13C2157.87 235.322 2273.47 271.286 2386.98 308.925C2453.25 316.389 2519.26 324.728 2584.97 333.964C2783.64 362.19 2989.83 397.577 3165.83 464.57C3191.74 474.433 3216.91 485.139 3240.57 497.073C3256.54 505.27 3272.01 513.824 3286.35 523.152C3318.88 544.441 3355.54 572.844 3355.6 604.223C3355.57 604.223 3355.56 604.227 3355.54 604.231L3355.56 604.219ZM2391.15 310.297C2474.5 338.106 2556.78 367.166 2638.52 396.811C2727.12 428.821 2815.08 461.527 2902.98 494.299C2992.03 527.497 3080.82 561.111 3171.71 592.267C3202.28 602.749 3233.13 613.105 3265.04 621.895C3281.58 626.454 3301.95 632.954 3320.6 632.251C3344.79 631.068 3351.63 612.747 3350.37 600.262C3347.36 570.293 3313.14 543.898 3281.66 523.308C3267.33 513.992 3251.91 505.438 3235.93 497.267C3212.6 485.492 3187.78 474.913 3162.24 465.164C2986.43 398.078 2780.32 362.704 2581.74 334.486C2518.49 325.591 2454.98 317.529 2391.22 310.285C2391.19 310.285 2391.19 310.289 2391.16 310.293L2391.15 310.297ZM1526.18 261.974C1547.98 262.231 1569.78 262.517 1591.57 262.833C1715.38 264.681 1839.15 267.598 1962.59 274.014C2101.99 281.482 2240.76 292.797 2378.58 307.969C2301.66 282.522 2223.85 258.105 2144.33 236.08C2071.13 215.903 1996.39 197.254 1919.1 184.271C1866.91 175.498 1811.75 168.426 1757.47 171.028C1689.33 174.568 1614.47 183.509 1566.59 217.187C1548.48 230.57 1536.11 245.569 1526.24 261.966C1526.21 261.966 1526.21 261.97 1526.18 261.974Z" fill="url(#paint1_linear_1779_1730)" style=""/>
<path d="M3382.07 599.281C3382.16 613.619 3370.08 630.045 3344.51 630.997C3327.04 631.771 3308.76 626.968 3292.88 622.981C3263.4 615.585 3235.03 606.412 3206.96 597.113C3110.57 565.178 3016.86 529.964 2922.82 495.385C2836.07 463.48 2749.27 431.629 2661.83 400.477C2560.87 364.173 2459.1 328.689 2355.36 295.643C2243.54 283.305 2131.02 273.845 2017.89 267.868C1894 261.591 1769.74 260.505 1645.51 260.021C1620.45 259.928 1595.39 259.865 1570.33 259.84C1559.01 276.965 1551.02 294.747 1543.1 312.587C1530.26 341.529 1516.3 369.961 1494.11 396.672C1475.7 418.348 1484.75 447.079 1489.09 470.224C1493.47 493.352 1499.77 518.48 1489.45 541.338C1478.3 566.037 1444.66 578.59 1406 582.08C1375.18 584.984 1343.78 583.566 1313 581.238C1228.72 574.178 1133.47 563.128 1067.35 526.503C1029.44 504.529 1010.58 476.665 1001.39 445.134C999.687 439.304 998.229 433.448 996.745 427.596C990.939 404.334 985.28 379.42 961.697 360.292C929.566 334.221 874.085 326.66 824.976 322.897C555.889 304.138 285.45 322.451 18.1133 343.213C-53.7259 348.791 -125.718 355.008 -198.024 357.597C-198.47 357.311 -198.689 357.168 -199.135 356.878C-127.203 354.297 -55.5835 348.1 15.8829 342.548C284.638 321.676 556.455 303.351 826.96 322.223C876.762 326.029 933.241 333.581 966.038 359.921C989.934 379.117 995.673 404.144 1001.52 427.567C1002.95 433.423 1004.45 439.274 1006.16 445.104C1015.35 476.564 1034.1 504.381 1071.93 526.314C1137.43 562.593 1231.66 573.589 1315.17 580.581C1344.39 582.8 1374.14 584.21 1403.41 581.453C1441.57 578.017 1474.11 565.376 1484.79 541.035C1494.79 518.24 1488.56 493.293 1484.21 470.249C1479.86 447.049 1470.83 418.293 1489.29 396.571C1511.5 369.886 1525.43 341.466 1538.24 312.533C1546.15 294.7 1554.14 276.931 1565.46 259.823C1329.28 259.659 1093.09 262.424 857.161 269.522C848.126 269.791 839.091 270.065 830.056 270.334C796.866 271.332 763.677 272.342 730.5 273.445C635.658 276.569 540.762 279.028 445.866 281.452C381.697 283.094 317.521 284.727 253.372 286.651C238.911 287.089 224.456 287.527 209.995 287.965C91.4505 291.539 -27.1208 294.928 -145.592 299.415C-215.527 302.063 -286.062 304.307 -355.431 310.823C-382.921 313.425 -410.332 316.683 -437.383 320.733C-455.18 323.398 -473.163 326.29 -490.148 330.647C-498.969 332.912 -514.11 336.25 -516.187 343.078C-516.253 350.003 -499.755 353.194 -491.805 354.79C-446.039 364.404 -394.067 365.049 -346.269 366.16C-306.581 367.002 -264.996 368.555 -225.488 365.12C-224.476 365.373 -223.963 365.499 -222.951 365.752C-263.072 369.254 -305.323 367.848 -345.637 366.96C-395.052 365.874 -448.296 365.049 -495.7 355.223C-503.93 353.565 -521.127 350.247 -521.007 343.057C-519.003 336.271 -504.216 332.878 -495.454 330.584C-477.977 326.004 -459.401 323.01 -441.032 320.253C-413.595 316.14 -385.791 312.831 -357.901 310.188C-288.252 303.646 -217.431 301.377 -147.21 298.716C-28.4923 294.216 90.3387 290.819 209.136 287.236C223.598 286.799 238.052 286.361 252.513 285.923C316.709 284.003 380.918 282.357 445.134 280.716C539.943 278.291 634.752 275.837 729.515 272.717C762.738 271.606 795.968 270.604 829.198 269.598C838.232 269.328 847.267 269.055 856.302 268.785C1092.72 261.667 1329.42 258.897 1566.09 259.069C1581.34 236.994 1604.34 217.953 1636.85 205.034C1683.57 186.473 1740.6 181.021 1794.59 178.348C1879.96 174.581 1967.1 191.041 2046.8 208.557C2154.39 232.203 2257.97 262.841 2359.64 295.167C2453.29 305.641 2546.33 318.077 2638.83 332.045C2769.97 352.015 2900.26 375.783 3025.35 407.933C3113.25 430.522 3202.74 456.988 3276.1 495.709C3291.39 503.931 3305.83 512.565 3319.65 521.772C3349.72 542.601 3382.03 569.543 3382.08 599.239V599.268L3382.07 599.281ZM2363.97 296.611C2466.23 329.376 2566.64 364.371 2666.29 400.195C2753.72 431.347 2840.53 463.198 2927.28 495.103C3015.84 527.665 3104.14 560.644 3194.53 591.164C3224.98 601.449 3255.7 611.598 3287.46 620.19C3304.05 624.678 3324.36 631.022 3342.98 630.298C3368.94 628.904 3378.21 611.59 3377.23 597.386C3375.24 568.432 3344.54 542.5 3314.95 521.978C3301.14 512.796 3286.71 504.175 3271.45 495.962C3198.24 457.308 3108.92 430.893 3021.19 408.35C2896.35 376.267 2766.31 352.542 2635.43 332.609C2545.5 319.028 2455.05 306.908 2364.03 296.611H2363.97H2363.97ZM1570.83 259.103C1595.77 259.137 1620.7 259.191 1645.63 259.28C1770.34 259.764 1895.07 260.867 2019.44 267.173C2130.54 273.033 2241.05 282.256 2350.9 294.246C2294.21 276.266 2236.97 259.023 2178.82 242.992C2106.42 223.203 2032.53 204.945 1956.17 192.207C1904.36 183.564 1849.67 176.626 1795.81 179.081C1742.68 181.712 1686.62 187.147 1640.73 205.488C1608.59 218.332 1585.88 237.242 1570.77 259.09C1570.8 259.09 1570.81 259.095 1570.83 259.099V259.103Z" fill="url(#paint2_linear_1779_1730)" style=""/>
<path d="M3409.75 594.84V595.909C3409.35 612.221 3394.6 627.62 3367.04 629.031C3348.88 629.856 3329.8 624.872 3313.28 620.776C3282.46 613.126 3252.76 603.642 3223.38 594.027C3122.48 561.002 3024.31 524.596 2925.81 488.835C2847.28 460.31 2768.71 431.836 2689.68 403.871C2567.28 360.595 2443.91 318.3 2317.37 280.03C2236.93 271.635 2156.08 265.199 2074.82 261.04C1950.08 254.889 1824.98 255.626 1699.97 256.493C1672.01 256.691 1644.04 256.906 1616.07 257.154C1600.56 275.845 1591.09 296.258 1581.41 316.368C1567.82 344.594 1553.15 372.302 1530.43 398.2C1511.8 419.025 1519.54 446.919 1523.01 469.483C1526.52 492.001 1531.73 516.396 1520.94 538.446C1509.15 562.517 1475.68 574.633 1437.75 578.03C1407.05 580.905 1375.78 579.491 1345.12 577.159C1260.85 570.078 1165.88 559.133 1098.68 523.464C1059.25 502.533 1038.91 474.097 1027.2 443.033C1025.18 437.363 1023.26 431.68 1021.38 425.988C1013.82 402.835 1006.17 378.343 981.605 359.66C947.989 334.095 892.802 326.433 843.114 322.585C576.19 303.764 307.901 321.095 42.4956 341.028C-27.8056 346.307 -98.26 352.196 -169.001 354.613C-169.42 354.327 -169.633 354.183 -170.053 353.893C-99.6915 351.493 -29.6099 345.617 40.3251 340.367C307.142 320.329 576.802 302.993 845.151 321.924C895.485 325.818 951.745 333.476 985.973 359.294C1010.81 378.027 1018.54 402.671 1026.14 425.959C1028.02 431.65 1029.94 437.329 1031.96 443.004C1043.62 473.912 1063.8 502.268 1103 523.123C1169.63 558.573 1263.7 569.493 1347.35 576.523C1376.42 578.737 1406.02 580.148 1435.15 577.42C1472.52 574.081 1504.95 561.857 1516.29 538.177C1526.8 516.202 1521.56 491.933 1518.06 469.525C1514.54 446.906 1506.87 418.992 1525.55 398.12C1548.26 372.235 1562.92 344.543 1576.54 316.334C1586.22 296.258 1595.64 275.879 1611.12 257.213C1375.85 259.373 1140.58 263.553 905.672 272.292C890.185 272.865 874.692 273.429 859.206 273.993C831.835 274.982 804.464 275.984 777.093 277.049C659.008 281.625 540.77 284.218 422.544 286.765C376.611 287.754 330.671 288.744 284.745 289.884C196.068 292.103 107.377 293.98 18.6735 295.803C-92.188 298.072 -205.393 297.352 -315.456 307.182C-348.852 310.2 -382.201 314.461 -414.652 320.304C-430.818 323.217 -473.568 328.487 -478.256 341.352C-478.768 348.374 -464.127 351.481 -456.105 353.64C-406.483 365.453 -348.499 366.291 -296.214 367.545C-268.171 368.084 -237.471 369.684 -209.647 366.286C-208.362 366.505 -207.717 366.615 -206.432 366.838C-235.58 370.378 -267.465 368.837 -296.893 368.273C-350.416 367.111 -409.625 366.219 -460.186 354.028C-468.136 352.154 -484.121 348.353 -483.083 341.314C-478.289 328.222 -434.952 322.842 -418.527 319.879C-385.617 313.939 -351.808 309.603 -317.939 306.538C-207.277 296.645 -93.4796 297.344 17.9877 295.062C106.625 293.244 195.256 291.362 283.873 289.144C329.839 288.003 375.819 287.013 421.792 286.024C539.837 283.486 657.889 280.893 775.788 276.325C803.173 275.26 830.563 274.262 857.961 273.265C873.454 272.705 888.94 272.136 904.427 271.564C1139.91 262.791 1375.76 258.619 1611.61 256.459C1655.5 204.297 1745.98 190.548 1832.82 186.46C1905.97 183.366 1980.2 195.52 2049.33 209.395C2142.56 228.115 2232.49 253.075 2320.77 279.571C2445.89 292.747 2569.61 310.344 2692.46 330.222C2821.41 351.199 2949.53 375.661 3072.43 408.27C3156.24 430.505 3242.46 456.323 3311.47 494.455C3326.06 502.668 3339.71 511.319 3352.8 520.488C3380.52 540.762 3409.91 566.736 3409.55 594.852C3409.62 594.844 3409.65 594.84 3409.73 594.831L3409.75 594.84ZM2325.29 280.859C2450.61 318.814 2572.83 360.696 2694.08 403.567C2773.09 431.554 2851.66 460.032 2930.2 488.54C3022.96 522.226 3115.48 556.342 3210.11 587.902C3241.68 598.43 3273.52 608.812 3306.39 617.643C3324.06 622.392 3345.59 629.111 3365.38 628.332C3391.46 627.069 3403.87 610.676 3404.42 595.888C3405.49 567.396 3376.3 541.174 3348.23 520.635C3335.16 511.483 3321.51 502.849 3306.96 494.64C3238.1 456.572 3152.03 430.808 3068.38 408.615C2945.69 376.065 2817.79 351.649 2689.07 330.714C2568.83 311.312 2447.67 293.955 2325.28 280.871V280.863L2325.29 280.859ZM1616.7 256.396C1644.4 256.148 1672.09 255.933 1699.78 255.744C1825.39 254.872 1951.09 254.157 2076.43 260.328C2155.72 264.462 2234.64 270.73 2313.18 278.733C2226.3 252.7 2137.83 228.174 2046.12 209.711C1978.55 196.109 1905.9 184.124 1834.36 187.142C1748.62 191.188 1660.05 204.987 1616.76 256.384C1616.73 256.384 1616.73 256.388 1616.7 256.392V256.396Z" fill="url(#paint3_linear_1779_1730)" style=""/>
<path d="M3437.33 589.952C3437.33 591.32 3437.27 592.676 3437.09 594.006C3435.18 611.118 3417.52 625.591 3389.45 627.061C3370.78 627.928 3351.18 622.851 3334.16 618.679C3303.24 611.097 3273.38 601.714 3243.86 592.192C3141.73 559.255 3042.32 522.9 2942.58 487.193C2867.67 460.382 2792.77 433.583 2717.46 407.242C2571.67 356.297 2424.51 306.479 2272.07 263.868C2225.43 259.823 2178.67 256.59 2131.75 254.182C2012.82 248.465 1893.63 250.494 1774.53 252.574C1767.81 252.692 1761.08 252.805 1754.36 252.923C1724.04 253.445 1693.71 253.984 1663.39 254.54C1642.84 274.553 1631.36 297.639 1619.66 320.123C1605.29 347.629 1589.85 374.592 1566.62 399.686C1547.84 419.615 1554.19 446.818 1556.85 468.704C1559.54 490.59 1563.76 514.308 1552.45 535.533C1539.99 558.931 1506.66 570.629 1469.48 573.934C1438.92 576.771 1407.8 575.361 1377.28 573.037C1292.56 565.885 1198.55 554.776 1130 519.978C1089.77 499.561 1067.21 471.68 1053.05 440.874C1050.67 435.363 1048.38 429.844 1046.12 424.313C1036.77 401.298 1027.14 377.206 1001.62 358.961C966.584 333.922 911.596 326.143 861.361 322.211C596.608 303.322 330.504 319.676 67.0553 338.763C-1.71463 343.743 -70.631 349.304 -139.794 351.552C-140.187 351.262 -140.386 351.115 -140.786 350.824C-71.9693 348.593 -3.40575 343.045 65.0113 338.09C329.851 318.902 597.314 302.539 863.465 321.537C914.345 325.515 970.352 333.299 1006.01 358.578C1031.8 376.874 1041.53 401.113 1050.95 424.262C1053.2 429.794 1055.49 435.313 1057.88 440.823C1071.99 471.474 1094.38 499.241 1134.34 519.612C1202.23 554.224 1295.55 565.279 1379.58 572.377C1408.5 574.587 1437.97 575.997 1466.95 573.294C1503.73 570.036 1535.76 558.282 1547.85 535.217C1558.92 514.085 1554.69 490.468 1552.04 468.708C1549.42 446.78 1543.03 419.531 1561.87 399.568C1585.09 374.491 1600.53 347.545 1614.89 320.051C1626.7 297.462 1638.51 274.936 1658.52 254.62C1423.6 258.964 1188.73 264.769 954.24 274.974C934.892 275.811 915.551 276.628 896.203 277.44C872.047 278.455 847.892 279.478 823.744 280.551C691.757 286.378 559.477 288.71 427.237 290.996C390.192 291.636 353.147 292.275 316.109 293.021C203.909 295.26 91.683 296.43 -20.5566 297.247C-105.139 297.862 -191.38 296.363 -275.423 303.469C-307.627 306.218 -339.785 310.634 -370.991 316.33C-389.813 319.765 -433.323 325.381 -440.2 339.55C-441.818 346.48 -427.99 350.02 -420.273 352.415C-367.662 367.2 -301.668 368.328 -245.043 368.993C-228.364 369.128 -209.949 370.096 -193.623 367.377C-192.085 367.553 -191.32 367.642 -189.788 367.823C-207.458 370.862 -227.386 369.873 -245.475 369.734C-303.333 369.048 -370.838 367.861 -424.607 352.765C-432.564 350.289 -446.772 346.644 -445.087 339.504C-438.096 325.099 -393.967 319.382 -374.826 315.884C-343.154 310.095 -310.517 305.608 -277.833 302.817C-193.084 295.652 -106.151 297.117 -20.8629 296.502C91.237 295.685 203.317 294.519 315.377 292.288C352.435 291.543 389.5 290.903 426.571 290.263C558.518 287.986 690.505 285.658 822.206 279.848C846.395 278.775 870.589 277.748 894.784 276.737C914.112 275.925 933.44 275.108 952.762 274.271C1187.95 264.037 1423.53 258.227 1659.15 253.87C1706 209.1 1791.88 198.041 1871.31 194.488C1925.14 192.287 1979.46 198.673 2031.37 207.147C2106.71 219.448 2179.61 237.28 2251.1 256.535C2259.41 258.796 2267.7 261.077 2275.99 263.372C2435.17 277.6 2591.33 301.65 2746.3 328.323C2872.93 350.256 2998.82 375.371 3119.38 408.463C3199.21 430.375 3282.3 455.566 3347.06 493.125C3360.95 501.338 3373.83 509.993 3386.17 519.141C3411.62 538.804 3437.55 563.448 3437.22 589.952H3437.34H3437.33ZM2280.62 264.63C2431.6 307.031 2577.44 356.419 2721.93 406.944C2797.23 433.296 2872.13 460.087 2947.03 486.894C3040.95 520.521 3134.62 554.582 3230.42 586.058C3262.74 596.679 3295.35 607.161 3329.02 616.006C3346.72 620.658 3368.1 627.153 3387.84 626.353C3414.58 624.951 3430.5 609.872 3432.25 593.976C3435.82 566.218 3408.01 539.697 3381.59 519.271C3369.26 510.14 3356.41 501.494 3342.54 493.293C3277.9 455.806 3194.95 430.669 3115.27 408.796C2994.92 375.762 2869.24 350.689 2742.83 328.795C2590.52 302.572 2437.06 278.872 2280.68 264.618C2280.66 264.618 2280.65 264.622 2280.62 264.626L2280.62 264.63ZM1664.26 253.786C1694.13 253.243 1723.99 252.713 1753.86 252.199C1760.58 252.081 1767.31 251.968 1774.03 251.85C1893.81 249.762 2013.67 247.741 2133.28 253.487C2178.22 255.79 2223 258.85 2267.68 262.648C2196.21 242.938 2123.47 224.588 2048.35 211.188C1991.77 201.098 1931.89 192.813 1872.74 195.221C1794.49 198.732 1710.45 209.799 1664.26 253.799V253.79V253.786Z" fill="url(#paint4_linear_1779_1730)" style=""/>
<path d="M3465.18 585.035C3465.18 587.447 3464.94 589.8 3464.51 592.099C3460.96 610.032 3440.79 623.566 3411.91 625.099C3391.51 626.059 3369.77 620.19 3351.23 615.593C3318.21 607.405 3286.27 597.445 3254.65 587.317C3154.64 555.272 3057.1 520.117 2959.22 485.577C2888.05 460.453 2816.85 435.359 2745.33 410.636C2593.64 358.242 2440.55 306.761 2281.44 263.852C2262.91 258.901 2244.31 254.077 2225.62 249.379C2213.34 248.646 2201.05 247.968 2188.74 247.345C2074.76 242.016 1960.64 245.131 1846.62 248.339C1834.03 248.697 1821.46 249.042 1808.87 249.387C1802.32 249.568 1795.76 249.749 1789.21 249.926C1763.92 250.616 1738.64 251.311 1713.35 252.014C1686.16 272.7 1672.24 298.969 1658.16 323.932C1643.03 350.731 1626.8 376.949 1603.02 401.231C1584.01 420.322 1589.02 446.666 1590.77 467.997C1592.54 489.252 1595.71 512.308 1583.88 532.7C1570.67 555.449 1537.82 566.71 1501.24 569.926C1470.84 572.73 1439.88 571.299 1409.54 568.962C1324.47 561.785 1231.16 550.574 1161.42 516.619C1120.36 496.636 1095.65 469.302 1079 438.777C1076.23 433.427 1073.54 428.064 1070.89 422.688C1059.82 400.052 1048.08 376.785 1021.99 359.071C985.499 334.293 930.771 325.962 879.571 321.891C616.988 302.943 353.067 318.313 91.5766 336.553C24.338 341.239 -43.0337 346.492 -110.632 348.559C-111.005 348.269 -111.191 348.121 -111.564 347.831C-44.312 345.777 22.7069 340.548 89.5992 335.88C352.482 317.555 617.761 302.173 881.742 321.23C933.194 325.301 988.948 333.202 1026.01 357.947C1052.78 375.825 1064.48 399.636 1075.72 422.633C1078.36 428.005 1081.06 433.364 1083.83 438.714C1100.38 469.087 1124.93 496.337 1165.75 516.249C1234.93 549.993 1327.38 561.183 1411.83 568.314C1440.62 570.537 1469.91 571.943 1498.76 569.295C1534.71 566.146 1566.73 554.793 1579.39 532.41C1590.91 512.056 1587.79 489.176 1586.02 468.01C1584.25 446.633 1579.21 420.238 1598.33 401.122C1622.11 376.861 1638.27 350.651 1653.38 323.874C1667.45 298.994 1681.33 272.827 1708.34 252.161C1473.03 258.682 1237.78 266.024 1002.95 277.731C981.052 278.826 959.147 279.87 937.236 280.909C914.998 281.966 892.76 283.031 870.529 284.142C727.81 291.189 584.617 293.063 441.545 294.936C410.252 295.349 378.967 295.757 347.681 296.241C224.562 298.102 101.477 298.005 -21.655 297.007C-92.4622 296.435 -164.728 294.115 -235.189 299.815C-267.999 302.526 -300.743 307.262 -332.355 313.4C-352.289 317.273 -393.954 323.339 -402.003 337.812C-404.034 344.35 -392.25 348.846 -384.367 351.253C-358.82 359.635 -328.593 362.906 -300.456 365.596C-270.296 368.48 -239.649 370.222 -209.129 370.294C-198.976 370.248 -187.158 370.82 -177.451 368.547C-175.72 368.677 -174.854 368.745 -173.117 368.879C-184.142 371.553 -197.678 370.984 -209.189 371.035C-240.482 370.959 -271.914 369.187 -302.847 366.232C-331.676 363.478 -362.628 360.144 -388.754 351.561C-396.597 349.035 -409.327 344.535 -406.824 337.749C-398.701 323.048 -356.33 316.881 -336.13 312.958C-304.025 306.723 -270.789 301.907 -237.472 299.154C-166.166 293.374 -93.0681 295.681 -21.402 296.262C101.484 297.26 224.323 297.352 347.195 295.496C378.501 295.02 409.813 294.604 441.125 294.191C583.832 292.322 726.651 290.449 868.998 283.435C891.269 282.324 913.547 281.259 935.824 280.202C957.709 279.167 979.593 278.114 1001.48 277.024C1237.14 265.275 1473.25 257.92 1709.4 251.378C1758.39 214.379 1838.01 205.627 1910.19 202.563C2018.55 198.184 2129.93 224.323 2229.04 248.785C2423.9 261.069 2612.93 292.116 2800.54 326.463C2924.7 349.309 3048.15 375.093 3166.24 408.619C3242.25 430.202 3322.39 454.846 3383.04 491.832C3396.21 500.045 3408.33 508.705 3419.92 517.819C3443.11 536.876 3465.77 560.122 3465.46 585.056C3465.36 585.052 3465.3 585.048 3465.2 585.043L3465.18 585.035ZM2233.1 249.833C2411.45 294.709 2581.51 352.234 2749.78 410.316C2821.3 435.039 2892.5 460.142 2963.67 485.257C3058.8 518.833 3153.68 552.843 3250.67 584.235C3283.44 594.839 3316.49 605.301 3350.59 614.107C3368.62 618.763 3390.28 625.221 3410.31 624.387C3437.68 622.775 3456.25 609.3 3459.95 592.524C3465.98 565.195 3440.01 538.556 3414.88 517.928C3403.34 508.848 3391.34 500.075 3378.06 491.98C3317.54 455.061 3237.54 430.463 3161.66 408.926C3043.77 375.455 2920.51 349.721 2796.55 326.913C2611.55 293.054 2425.17 262.323 2233.1 249.833ZM1714.28 251.223C1738.95 250.545 1763.61 249.867 1788.27 249.189C1794.83 249.008 1801.38 248.831 1807.94 248.65C1820.51 248.305 1833.06 247.956 1845.63 247.602C1960.44 244.378 2075.33 241.271 2190.11 246.638C2200.51 247.16 2210.89 247.724 2221.28 248.33C2124.57 224.554 2016.75 199.351 1911.1 203.278C1840.21 206.292 1762.43 215.027 1714.21 251.231C1714.24 251.231 1714.24 251.227 1714.27 251.223H1714.28Z" fill="url(#paint5_linear_1779_1730)" style=""/>
<path d="M3493.34 580.084C3493.34 583.562 3492.83 586.938 3491.9 590.188C3486.6 608.635 3463.83 621.546 3434.37 623.12C3415.71 624.021 3396.12 619.256 3378.97 615.244C3346.66 607.683 3315.46 598.174 3284.62 588.525C3179.9 555.773 3077.88 519.524 2975.55 483.939C2908.18 460.516 2840.8 437.102 2773.16 414.007C2582.09 348.883 2387.7 282.147 2181.25 238.4C2092.52 236.985 2003.94 240.408 1915.42 243.834C1898.04 244.504 1880.66 245.177 1863.27 245.83C1831.03 247.025 1798.8 248.208 1766.56 249.395C1730.94 270.347 1713.49 299.68 1696.39 327.721C1680.55 353.804 1663.49 379.273 1639.22 402.738C1619.96 420.983 1623.71 446.481 1624.61 467.243C1625.53 487.9 1627.62 510.212 1615.36 529.821C1601.57 551.884 1568.71 562.74 1532.92 565.856C1502.63 568.617 1471.81 567.194 1441.59 564.862C1356.12 557.617 1263.62 546.255 1192.64 513.167C1150.72 493.63 1123.89 466.818 1104.74 436.647C1101.62 431.457 1098.58 426.249 1095.58 421.029C1082.67 398.583 1069.02 375.708 1041.95 358.389C1004.08 334.154 949.442 325.705 897.696 321.545C637.284 302.534 375.547 316.923 116.013 334.297C50.2862 338.696 -15.5609 343.63 -81.621 345.528C-81.9672 345.238 -82.1403 345.09 -82.4865 344.8C-16.7793 342.914 48.7216 337.993 114.096 333.619C374.994 316.157 638.083 301.764 899.86 320.885C951.865 325.044 1007.45 333.076 1045.88 357.273C1073.63 374.752 1087.3 398.154 1100.4 420.962C1103.41 426.178 1106.44 431.381 1109.56 436.567C1128.61 466.595 1155.27 493.297 1196.92 512.792C1267.27 545.708 1359.09 557.019 1443.89 564.21C1472.54 566.437 1501.71 567.847 1530.44 565.22C1565.81 562.151 1597.38 551.24 1610.78 529.501C1622.81 509.984 1620.71 487.774 1619.8 467.248C1618.9 446.426 1615.15 420.899 1634.47 402.608C1658.73 379.126 1675.69 353.712 1691.64 327.645C1708.66 299.71 1726.06 270.549 1761.37 249.585C1759.15 249.669 1758.04 249.711 1755.81 249.795C1520.83 258.392 1285.88 267.32 1051.41 280.442C1027.63 281.764 1003.85 283.031 980.068 284.29C959.069 285.397 938.07 286.517 917.078 287.674C765.057 295.95 612.357 297.243 459.87 298.619C432.912 298.864 405.954 299.104 379.002 299.394C250.045 300.75 121.253 299.205 -7.598 295.963C-69.7499 294.397 -133.22 291.345 -195.206 296.115C-227.63 298.632 -260.054 303.726 -291.14 309.977C-312.831 314.338 -354.284 320.864 -364.004 336.027C-366.841 342.417 -356.308 347.321 -348.658 350.054C-323.651 359.664 -292.738 363.596 -264.248 366.678C-237.29 369.595 -209.593 371.658 -182.209 371.485C-175.551 371.468 -167.362 371.713 -161.297 369.679C-159.439 369.763 -158.514 369.806 -156.656 369.886C-164.1 372.47 -173.834 372.066 -182.023 372.222C-211.657 372.411 -241.558 370.201 -270.687 366.871C-298.497 363.689 -328.731 359.715 -353.179 350.319C-361.035 347.528 -371.788 342.506 -368.898 335.96C-359.45 321.28 -319.929 314.709 -298.89 310.306C-266.046 303.431 -231.798 298.161 -197.443 295.454C-134.452 290.608 -70.0229 293.648 -6.86564 295.235C121.613 298.476 250.038 300.013 378.623 298.657C405.601 298.367 432.579 298.123 459.557 297.883C611.584 296.515 763.832 295.222 915.4 286.984C936.412 285.826 957.431 284.706 978.45 283.599C1002.21 282.345 1025.97 281.078 1049.73 279.752C1284.39 266.617 1519.52 257.676 1754.68 249.075C1757.42 248.97 1760.08 248.878 1762.8 248.781C1812.79 220.033 1883.66 213.217 1948.61 210.62C2028.58 207.808 2108.97 222.083 2184.16 237.722C2205.21 238.151 2226.22 238.837 2247.22 239.801C2455.61 250.119 2655.31 285.923 2854.23 324.585C2976.13 348.353 3097.52 374.634 3213.32 408.686C3285.5 429.916 3361.99 454.164 3418.49 490.51C3430.9 498.736 3442.42 507.341 3453.13 516.476C3474.2 534.965 3493.42 556.62 3493.48 580.093C3493.43 580.084 3493.4 580.08 3493.36 580.072L3493.34 580.084ZM2187.94 238.53C2232.61 248.099 2276.54 258.897 2320.04 270.406C2476.89 312.335 2627.84 362.636 2777.61 413.704C2845.26 436.807 2912.66 460.2 2980.02 483.636C3076.4 517.158 3172.53 551.126 3270.77 582.425C3303.67 592.907 3336.84 603.234 3371.03 611.943C3389.65 616.688 3412.1 623.31 3432.76 622.421C3460.64 620.767 3481.44 608.104 3487.12 590.958C3495.97 564.269 3471.93 537.352 3448.23 516.585C3437.5 507.48 3426.04 498.871 3413.63 490.666C3357.22 454.391 3280.87 430.185 3208.81 408.994C3093.2 374.996 2972.01 348.757 2850.31 325.023C2652.16 286.538 2453.22 250.776 2245.64 240.492C2226.44 239.612 2207.23 238.964 2187.99 238.534C2187.96 238.534 2187.95 238.53 2187.93 238.526L2187.94 238.53ZM1767.98 248.57C1799.36 247.421 1830.73 246.268 1862.09 245.101C1879.46 244.453 1896.82 243.784 1914.18 243.106C2001.82 239.713 2089.51 236.333 2177.35 237.575C2104.76 222.546 2026.79 208.536 1949.57 211.314C1886.23 213.857 1816.75 220.529 1767.92 248.558C1767.95 248.558 1767.96 248.562 1767.98 248.566V248.57Z" fill="url(#paint6_linear_1779_1730)" style=""/>
<path d="M3521.67 575.075C3521.77 579.398 3520.95 584.075 3519.32 588.281C3512.13 607.384 3487.32 619.508 3456.82 621.159C3437.62 622.097 3417.45 617.239 3399.77 613.152C3367.29 605.646 3335.9 596.241 3304.85 586.685C3198.74 554.035 3095.31 517.831 2991.57 482.301C2928.12 460.558 2864.63 438.857 2800.94 417.388C2688.28 379.48 2575.11 342.055 2459.3 308.1C2357.91 278.371 2253.73 250.065 2145.24 232.376C2090.42 233.82 2035.72 236.522 1981.02 239.204C1959.88 240.239 1938.73 241.275 1917.59 242.268C1886.99 243.7 1856.38 245.097 1825.77 246.482C1778.26 266.47 1755.78 299.356 1734.69 331.502C1717.95 356.861 1700.21 381.538 1675.42 404.22C1655.95 421.661 1658.42 446.224 1658.45 466.477C1658.49 486.499 1659.54 508.124 1646.79 526.899C1632.25 548.301 1599.88 558.733 1564.64 561.772C1534.45 564.5 1503.74 563.077 1473.63 560.741C1387.83 553.441 1295.93 541.953 1223.82 509.698C1181.02 490.553 1152.12 464.28 1130.46 434.496C1126.96 429.419 1123.52 424.33 1120.12 419.223C1105.4 397 1089.88 374.546 1061.82 357.623C1022.59 333.947 968.037 325.414 915.746 321.188C657.544 302.017 397.964 315.463 140.434 332.002C76.2052 336.124 11.8562 340.767 -52.6793 342.485C-52.9988 342.194 -53.1586 342.047 -53.4848 341.756C10.6978 340.039 74.6939 335.421 138.577 331.321C397.464 314.705 658.356 301.251 917.909 320.527C970.427 324.753 1025.96 332.878 1065.7 356.507C1094.41 373.578 1110 396.588 1124.95 419.152C1128.35 424.254 1131.78 429.343 1135.28 434.42C1156.82 464.069 1185.55 490.262 1228.11 509.332C1299.66 541.393 1390.7 552.848 1475.91 560.097C1504.45 562.324 1533.5 563.734 1562.12 561.145C1596.71 558.173 1628.25 547.653 1642.23 526.596C1654.66 507.867 1653.65 486.41 1653.57 466.49C1653.59 446.191 1651.1 421.598 1670.58 404.11C1695.38 381.45 1713.12 356.793 1729.81 331.438C1750.79 299.508 1773.11 266.845 1820.01 246.748C1796.52 247.813 1773.03 248.869 1749.53 249.934C1532.74 259.705 1315.97 269.77 1099.64 283.153C1074.18 284.723 1048.7 286.209 1023.22 287.691C1003.26 288.849 983.29 290.015 963.33 291.206C802.754 300.737 641.225 301.352 480.076 302.173C456.727 302.29 433.377 302.408 410.035 302.56C277.715 303.36 145.814 300.341 13.8403 294.536C-42.2329 292.073 -99.4713 288.314 -155.578 292.419C-188.508 294.894 -221.385 300.278 -252.77 306.942C-275.727 311.813 -315.209 318.784 -326.354 334.238C-329.843 340.477 -320.668 345.739 -313.238 348.841C-290.921 358.936 -261.938 363.529 -235.54 367.065C-210.912 370.361 -185.053 373.005 -159.786 372.672C-151.25 372.55 -146.357 371.915 -145.431 370.791C-143.5 370.829 -142.535 370.85 -140.604 370.888C-145.697 373.363 -153.088 373.384 -159.293 373.401C-185.525 373.75 -212.31 371.161 -237.91 367.781C-265.101 364.19 -294.849 359.454 -317.825 349.069C-325.409 345.886 -334.663 340.523 -331.128 334.162C-319.809 318.477 -279.662 311.413 -256.366 306.479C-224.474 299.722 -191.085 294.258 -157.628 291.745C-100.39 287.573 -42.0132 291.303 15.1918 293.816C146.646 299.596 278.034 302.61 409.835 301.815C433.204 301.663 456.574 301.545 479.943 301.427C640.553 300.619 801.548 300.009 961.585 290.52C981.566 289.316 1001.55 288.154 1021.54 286.992C1046.98 285.519 1072.41 284.033 1097.83 282.467C1314.3 269.072 1531.21 258.994 1748.14 249.219C1772.78 248.112 1797.41 246.996 1822.04 245.88C1870.29 225.817 1930.44 220.774 1986.8 218.656C2040.41 216.737 2094.28 223.38 2146.01 231.597C2198.66 230.376 2251.23 230.587 2303.8 232.931C2507.16 242.837 2700.63 280.084 2893.55 319.756C2899.25 320.923 2902.09 321.508 2907.78 322.678C3026.97 347.258 3145.72 374.154 3258.76 408.644C3327.37 429.583 3401.18 453.381 3453.77 489.172C3465.49 497.397 3476.21 506.015 3486.19 515.112C3505.06 532.852 3521.55 553.151 3521.6 575.062C3521.63 575.071 3521.63 575.075 3521.66 575.083L3521.67 575.075ZM2150.17 232.266C2258.83 250.128 2363.2 278.405 2464.82 308.192C2580.24 342.022 2693.04 379.311 2805.32 417.093C2869.01 438.563 2932.48 460.281 2995.95 482.007C3092.51 515.082 3188.85 548.541 3287.23 579.424C3321.65 590.23 3356.36 600.868 3392.1 609.855C3411.12 614.638 3434.09 621.373 3455.14 620.468C3483.48 618.776 3506.7 606.858 3514.29 589.417C3525.63 563.342 3503.86 536.261 3481.5 515.247C3471.51 506.175 3460.85 497.557 3449.13 489.344C3396.65 453.612 3322.96 429.861 3254.46 408.964C3141.59 374.529 3023.01 347.679 2903.99 323.133C2898.3 321.962 2895.46 321.381 2889.77 320.211C2697.67 280.711 2505 243.519 2302.51 233.651C2251.76 231.395 2201 231.151 2150.16 232.27L2150.17 232.266ZM1827.92 245.632C1857.35 244.289 1886.79 242.942 1916.22 241.565C1937.35 240.572 1958.46 239.541 1979.58 238.505C2033.43 235.857 2087.29 233.209 2141.26 231.727C2091.29 223.868 2039.73 217.747 1988 219.38C1933.21 221.447 1875.02 226.394 1827.91 245.624V245.632H1827.92Z" fill="url(#paint7_linear_1779_1730)" style=""/>
<path d="M3550.38 569.985C3550.4 575.513 3549.28 581.053 3546.8 586.357C3537.71 605.806 3510.56 617.458 3479.34 619.176C3459.48 620.144 3438.58 615.05 3420.27 610.853C3386.74 603.171 3354.27 593.585 3322.14 583.848C3215.58 551.555 3111.6 515.802 3007.36 480.651C2947.91 460.605 2888.46 440.571 2828.83 420.756C2702.89 378.949 2576.3 337.639 2446.1 301.347C2338.54 271.37 2225.85 242.066 2108.98 230.721C2087.69 231.921 2066.4 233.18 2045.12 234.447C2020.78 235.891 1996.45 237.33 1972.1 238.703C1947.56 240.075 1923.02 241.422 1898.47 242.757C1832.07 259.916 1801.13 295.963 1773.23 335.299C1755.72 359.934 1737.15 383.841 1711.86 405.723C1692.22 422.351 1693.41 446.031 1692.55 465.728C1691.75 485.147 1691.71 506.023 1678.58 524.015C1663.46 544.715 1631.17 554.755 1596.69 557.697C1566.62 560.387 1536.04 558.969 1506.04 556.628C1419.62 549.248 1327.96 537.693 1254.52 506.166C1210.95 487.463 1180.3 461.729 1156.57 432.353C1152.37 427.121 1148.32 421.838 1144.26 416.559C1127.62 394.799 1110.16 372.946 1081.25 356.566C1040.86 333.686 986.669 325.12 934.198 320.834C678.193 301.592 420.803 314.056 165.258 329.712C102.52 333.556 39.6692 337.883 -23.3416 339.449C-23.6412 339.159 -23.7877 339.012 -24.0873 338.721C38.5707 337.172 101.075 332.853 163.46 329.03C420.331 313.286 679.018 300.825 936.355 320.173C989.079 324.459 1044.1 332.634 1084.97 355.476C1114.55 372.007 1132.11 394.361 1149.02 416.47C1153.08 421.749 1157.13 427.032 1161.33 432.265C1184.92 461.493 1215.39 487.13 1258.7 505.787C1331.5 537.15 1422.54 548.659 1508.28 555.984C1536.72 558.211 1565.65 559.625 1594.17 557.07C1628.18 554.182 1659.29 544.083 1673.98 523.704C1686.87 505.8 1686.86 485.021 1687.66 465.736C1688.52 445.984 1687.35 422.275 1707.03 405.596C1732.32 383.731 1750.84 359.824 1768.41 335.219C1795.95 296.409 1826.45 260.614 1891.48 243.14C1846.73 245.565 1801.97 247.943 1757.21 250.326C1554.13 261.119 1351.07 272.162 1148.42 285.868C1121.55 287.674 1094.67 289.383 1067.79 291.076C1048.59 292.288 1029.38 293.505 1010.18 294.755C841.492 305.57 671.435 305.431 502.057 305.637C481.923 305.662 461.796 305.688 441.663 305.73C307.392 305.97 173.927 301.52 40.3949 292.894C-11.0044 289.577 -63.6155 285.06 -115.288 288.735C-149.19 291.156 -182.986 296.974 -215.03 304.256C-238.36 309.561 -276.217 317.075 -288.108 332.474C-292.103 338.561 -284.44 344.122 -277.282 347.654C-257.888 358.061 -231.416 363.398 -207.254 367.431C-185.17 371.119 -161.587 374.268 -138.617 373.906C-132.186 373.775 -128.903 373.114 -128.903 371.931H-124.076C-124.076 373.493 -129.03 374.457 -137.998 374.634C-161.96 375.085 -186.594 371.936 -209.664 368.16C-234.645 364.076 -261.956 358.595 -281.983 347.852C-289.253 344.236 -297.03 338.578 -292.935 332.386C-280.898 316.772 -242.348 309.156 -218.706 303.797C-186.135 296.414 -151.78 290.52 -117.332 288.062C-64.3678 284.298 -10.4518 288.815 42.2458 292.212C175.132 300.804 307.964 305.233 441.596 304.993C461.73 304.947 481.857 304.917 501.99 304.896C670.743 304.694 840.187 304.85 1008.26 294.073C1027.48 292.823 1046.7 291.61 1065.93 290.398C1092.77 288.706 1119.61 287.005 1146.43 285.199C1349.21 271.488 1552.39 260.433 1755.59 249.635C1802.13 247.164 1848.66 244.689 1895.19 242.167C1936.54 231.677 1981.34 228.267 2025.51 226.722C2053.86 226.061 2081.84 227.408 2109.91 229.9C2193.51 225.299 2277.04 222.458 2360.89 226.091C2557.56 235.516 2743.45 273.256 2928.78 313.644C2939.77 316.035 2950.77 318.43 2961.77 320.809C3078.46 346.223 3194.9 373.603 3305.38 408.598C3370.45 429.209 3440.85 452.699 3489.52 487.871C3500.54 496.101 3510.44 504.739 3519.7 513.79C3536.4 530.709 3550.35 549.653 3550.4 569.998V569.977L3550.38 569.985ZM2115.04 230.401C2230.37 241.894 2341.43 270.448 2447.67 300.055C2578.85 336.608 2706.3 378.343 2833.16 420.461C2892.8 440.272 2952.25 460.306 3011.69 480.357C3109.61 513.382 3207.34 546.798 3307.08 577.597C3341.67 588.277 3376.54 598.771 3412.38 607.675C3432.12 612.575 3455.82 619.424 3477.61 618.49C3507.97 616.675 3533.54 605.061 3542.32 586.252C3554.02 561.2 3535.5 534.805 3514.85 513.895C3505.65 504.836 3495.74 496.227 3484.72 488.014C3436.15 452.905 3365.87 429.461 3300.91 408.888C3190.59 373.944 3074.3 346.602 2957.78 321.226C2946.79 318.83 2935.8 316.443 2924.81 314.052C2740.31 273.866 2555.23 236.181 2359.44 226.785C2277.8 223.253 2196.45 225.952 2115.04 230.384V230.405L2115.04 230.401ZM1902.38 241.772C1925.04 240.538 1947.71 239.288 1970.37 238.017C1994.69 236.644 2019 235.205 2043.32 233.765C2063.43 232.569 2083.54 231.378 2103.65 230.237C2078.03 228.035 2052.3 226.684 2026.43 227.438C1984.42 228.915 1941.88 232.127 1902.37 241.767L1902.38 241.772Z" fill="url(#paint8_linear_1779_1730)" style=""/>
<path d="M3579.28 564.828C3578.86 571.703 3577.34 577.874 3574.14 584.454C3563.08 604.202 3533.73 615.446 3501.68 617.227C3481.8 618.207 3460.84 613.274 3442.45 609.157C3408.13 601.478 3374.9 591.842 3342 582.038C3233.92 549.829 3128.41 514.127 3022.64 479.031C2967.32 460.68 2912.01 442.343 2856.56 424.157C2712.3 376.937 2567.27 329.877 2416.77 291C2354.77 274.982 2291.62 260.29 2226.79 249.488C2174.25 240.732 2119.37 233.954 2064.78 235.508C2003.37 237.486 1936.69 243.266 1887.35 268.579C1851.53 286.963 1831.19 313.438 1811.46 339.15C1793.14 363.053 1773.75 386.215 1747.91 407.268C1728.13 423.092 1728.02 445.888 1726.26 465.033C1724.57 483.825 1723.51 503.998 1709.92 521.17C1694.09 541.17 1662.25 550.814 1628.3 553.677C1598.3 556.325 1567.82 554.906 1537.9 552.561C1451.17 545.123 1359.9 533.449 1285.41 502.74C1240.92 484.394 1208.28 459.169 1182.12 430.261C1177.5 425.146 1173.02 419.977 1168.57 414.795C1150.08 393.329 1130.77 371.881 1100.86 355.863C1059.24 333.568 1005.08 324.892 952.124 320.531C698.316 301.208 443.11 312.688 189.563 327.469C128.316 331.034 66.9698 335.071 5.48365 336.456C5.21067 336.166 5.07754 336.018 4.80456 335.728C65.9445 334.335 126.938 330.327 187.831 326.774C442.691 311.918 699.175 300.451 954.294 319.874C1007.5 324.244 1062.44 332.537 1104.52 354.79C1135.1 370.959 1154.56 392.887 1173.33 414.702C1177.78 419.88 1182.26 425.049 1186.88 430.168C1212.91 458.946 1245.36 484.082 1289.61 502.373C1363.52 532.915 1454.09 544.546 1540.2 551.934C1568.55 554.169 1597.39 555.584 1625.83 553.058C1659.18 550.01 1690.01 540.719 1705.37 520.879C1718.63 503.75 1719.69 483.729 1721.37 465.05C1723.15 445.85 1723.27 423.025 1743.09 407.15C1768.9 386.114 1788.28 362.969 1806.57 339.092C1826.46 313.193 1846.98 286.571 1883.2 268.133C1933.47 242.542 2001.44 236.813 2063.79 234.805C2118.54 233.247 2173.53 239.839 2226.29 248.499C2292.19 259.309 2356.36 274.153 2419.36 290.368C2570.48 329.27 2716.05 376.478 2860.83 423.871C2916.3 442.052 2971.63 460.407 3026.97 478.753C3126.32 511.727 3225.48 545.098 3326.65 575.812C3362.15 586.588 3397.93 597.197 3434.74 606.1C3454.48 610.878 3478.23 617.606 3499.93 616.566C3530.77 614.84 3558.66 603.238 3569.24 584.425C3583.32 560.257 3567.16 533.63 3548.08 512.594C3539.6 503.573 3530.49 494.96 3520.17 486.738C3475.42 452.24 3408.42 429.066 3346.87 408.808C3239.22 373.375 3125.34 345.549 3011.43 319.386C2995.87 315.816 2980.33 312.234 2964.77 308.66C2786.25 267.501 2607.15 229.008 2416.29 219.999C2312.98 215.625 2210.44 222.516 2107.84 229.66C2080.69 231.55 2053.54 233.428 2026.37 235.209C1941.13 240.757 1855.85 245.943 1770.56 251.138C1579.16 262.803 1387.8 274.675 1196.78 288.647C1168.63 290.697 1140.44 292.625 1112.26 294.536C1093.72 295.795 1075.17 297.058 1056.63 298.354C880.025 310.495 701.652 309.518 524.251 309.076C507.133 309.03 490.009 308.992 472.891 308.963C337.509 308.647 203.398 302.854 69.3334 291.164C21.6758 287.009 -27.1869 281.835 -75.3904 285.106C-108.407 287.359 -141.417 293.433 -172.53 300.585C-197.957 306.433 -236.466 314.473 -250.195 330.752C-254.942 336.721 -248.377 342.514 -241.719 346.501C-224.828 357.391 -200.387 363.533 -177.843 368.075C-159.154 371.839 -138.461 375.489 -118.647 375.181C-113.88 375.059 -111.843 374.352 -112.768 373.093C-110.837 373.064 -109.872 373.047 -107.941 373.018C-106.396 375.278 -113.507 375.804 -117.841 375.91C-139.42 376.318 -161.771 372.597 -182.131 368.467C-204.801 363.866 -229.442 357.635 -246.42 346.673C-253.257 342.602 -259.469 336.663 -255.022 330.66C-241.42 314.473 -203.602 306.315 -178.349 300.413C-145.998 292.856 -111.69 286.752 -77.3146 284.424C-27.613 281.061 22.6012 286.243 71.7435 290.524C205.029 302.143 338.354 307.914 472.951 308.226C490.069 308.255 507.187 308.293 524.304 308.34C700.999 308.782 878.68 309.784 1054.58 297.685C1073.14 296.388 1091.71 295.121 1110.27 293.867C1138.41 291.96 1166.55 290.032 1194.67 287.99C1385.78 274.014 1577.25 262.13 1768.75 250.46C1853.99 245.266 1939.23 240.084 2024.42 234.539C2051.56 232.759 2078.67 230.894 2105.79 228.999C2209.53 221.776 2313.19 214.876 2417.65 219.3C2609.44 228.343 2789.4 266.878 2968.8 308.26C2984.34 311.846 2999.89 315.425 3015.45 318.99C3129.52 345.191 3243.54 373.055 3351.33 408.543C3412.99 428.842 3480.07 452.063 3524.94 486.612C3535.29 494.846 3544.38 503.48 3552.91 512.502C3567.45 528.52 3579.17 546.099 3579.21 564.879C3579.24 564.858 3579.24 564.845 3579.27 564.82L3579.28 564.828Z" fill="url(#paint9_linear_1779_1730)" style=""/>
<path d="M3608.42 559.684C3608.47 591.051 3572.5 612.546 3524.21 615.257C3503.7 616.284 3482.1 611.253 3463.09 607.06C3428.55 599.441 3395.06 589.91 3361.89 580.198C3252.19 548.082 3145.06 512.418 3037.67 477.368C2986.63 460.702 2935.57 444.056 2884.41 427.533C2742.9 381.866 2600.76 336.423 2453.5 298.54C2387.8 281.806 2320.96 266.369 2252.13 255.571C2203.66 247.968 2153.36 242.268 2103.23 243.561C2042.57 245.358 1977 250.827 1927.52 275.096C1891.74 292.65 1870.5 318.106 1849.89 342.977C1830.73 366.135 1810.55 388.53 1784.18 408.766C1764.23 423.825 1762.88 445.656 1760.24 464.292C1757.66 482.474 1755.5 501.894 1741.56 518.29C1725.04 537.718 1693.55 546.596 1660.24 549.606C1630.32 552.216 1599.94 550.798 1570.1 548.453C1483.05 540.96 1392.16 529.177 1316.66 499.271C1271.17 481.253 1236.59 456.542 1208 428.114C1202.99 423.096 1198.08 418.04 1193.21 412.972C1172.85 391.818 1151.7 370.791 1120.78 355.114C1077.95 333.392 1023.79 324.619 970.327 320.161C924.234 316.608 878.008 314.002 831.662 312.213C736.746 313.37 641.824 312.916 546.908 312.343C532.673 312.259 518.445 312.179 504.211 312.099C502.167 312.091 500.063 312.078 498.019 312.061C403.23 315.004 308.667 319.942 214.131 325.153C154.389 328.445 94.5339 332.221 34.5658 333.413C34.3194 333.118 34.1929 332.971 33.9466 332.676C93.5818 331.485 153.11 327.721 212.519 324.45C301.29 319.546 390.087 314.89 479.084 311.897C351.551 310.491 225.809 303.309 100.28 289.236C55.5383 284.231 10.1444 278.636 -35.4758 281.372C-68.3794 283.498 -101.316 289.804 -132.169 297.113C-159.127 303.494 -197.018 312.124 -212.258 328.934C-217.324 334.735 -212.178 340.797 -206.066 345.259C-183.988 363.129 -137.855 374.331 -102.921 376.293C-101.19 376.39 -98.8994 376.453 -97.5412 376.272C-96.6091 376.15 -94.5718 375.687 -96.5492 374.154C-94.645 374.095 -93.6929 374.07 -91.7821 374.011C-89.9911 375.421 -90.85 376.364 -94.3787 376.827C-96.1098 377.055 -99.2656 377.274 -104.525 376.987C-140.611 374.95 -188.023 363.878 -210.826 345.398C-218.157 340.03 -220.32 335.539 -217.078 328.837C-202.151 312.381 -164.966 303.709 -138.634 297.298C-106.33 289.43 -71.8282 282.909 -37.2668 280.695C9.98463 277.883 56.7833 283.465 103.129 288.655C233.838 303.301 364.807 310.327 497.593 311.324C609.073 308.007 720.7 307.43 832.161 311.476C921.963 310.268 1011.8 307.729 1101.08 301.2C1119.02 299.866 1136.96 298.556 1154.9 297.247C1184.31 295.109 1213.71 292.962 1243.08 290.667C1422.91 276.561 1603.04 264.045 1783.19 251.702C1881.71 244.958 1980.24 238.227 2078.66 230.944C2108.3 228.73 2137.9 226.394 2167.51 224.032C2269.6 215.895 2371.54 208.153 2474.59 212.396C2662.79 221.123 2837.98 260.669 3012.61 303.267C3031.52 307.877 3050.43 312.486 3069.36 317.058C3180.71 344 3292.22 372.34 3397.2 408.303C3455.59 428.308 3519.44 451.297 3560.59 485.244C3570.21 493.504 3578.45 502.15 3586.32 511.117C3598.83 526.205 3608.38 542.441 3608.4 559.697V559.676L3608.42 559.684ZM846.209 312.019C888.461 313.812 930.592 316.267 972.624 319.517C1026.29 323.97 1081.23 332.369 1124.48 354.045C1156.06 369.869 1177.42 391.393 1198.1 412.875C1202.98 417.939 1207.84 423.008 1212.89 428.009C1241.32 456.307 1275.71 480.929 1320.94 498.884C1395.86 528.625 1486.07 540.362 1572.5 547.805C1600.78 550.04 1629.54 551.454 1657.91 548.966C1690.67 545.999 1721.12 537.087 1737.13 517.958C1750.81 501.62 1752.92 482.352 1755.48 464.28C1758.17 445.593 1759.55 423.724 1779.55 408.623C1805.88 388.4 1826.05 366.017 1845.2 342.889C1865.96 317.824 1887.41 292.208 1923.58 274.607C1974.03 250.069 2040.9 244.66 2102.54 242.837C2220.72 239.781 2340.76 268.449 2448.58 295.782C2599.25 333.981 2744.39 380.616 2888.87 427.226C2940.03 443.749 2991.09 460.398 3042.15 477.06C3143.02 509.993 3243.7 543.325 3346.39 573.964C3382.1 584.618 3418.1 595.088 3455.07 603.899C3475.52 608.774 3500.17 615.665 3522.61 614.57C3554.66 612.777 3584.24 601.722 3596.91 582.48C3612.45 558.796 3599.45 532.746 3581.64 511.222C3573.8 502.268 3565.56 493.638 3555.97 485.387C3514.89 451.495 3451.12 428.552 3392.82 408.581C3287.97 372.668 3176.61 344.366 3065.4 317.454C3046.47 312.882 3027.57 308.272 3008.66 303.663C2834.95 261.292 2660.64 221.797 2473.44 213.112C2371.55 208.902 2270.86 216.644 2169.93 224.693C2140.28 227.063 2110.63 229.399 2080.96 231.614C1982.5 238.901 1883.94 245.628 1785.39 252.38C1605.29 264.719 1425.22 277.222 1245.45 291.324C1216.03 293.618 1186.59 295.77 1157.15 297.912C1139.22 299.213 1121.3 300.518 1103.38 301.853C1018.02 308.1 932.15 310.706 846.283 312.015H846.223L846.209 312.019ZM519.564 311.442C528.765 311.501 537.96 311.548 547.161 311.602C636.797 312.141 726.439 312.583 816.075 311.661C717.285 308.453 618.381 308.824 519.564 311.442Z" fill="url(#paint10_linear_1779_1730)" style=""/>
<path d="M3638.07 554.388C3638.11 588.117 3597.97 610.382 3546.67 613.291C3525.53 614.364 3503.27 609.245 3483.62 604.981C3448.84 597.428 3415.06 587.986 3381.6 578.367C3270.21 546.344 3161.37 510.709 3052.28 475.705C3005.62 460.744 2958.98 445.774 2912.24 430.926C2770.08 385.765 2627.33 340.569 2479.36 303.414C2374.06 276.973 2256.96 248.962 2141.7 251.635C2081.77 253.256 2017.36 258.413 1967.76 281.638C1932.02 298.367 1909.86 322.813 1888.39 346.837C1868.35 369.233 1847.34 390.863 1820.5 410.303C1800.41 424.561 1797.83 445.534 1794.2 463.598C1790.73 481.173 1787.53 499.826 1773.19 515.436C1756.01 534.14 1724.91 542.648 1692.16 545.573C1662.32 548.158 1632.02 546.731 1602.26 544.374C1514.86 536.817 1424.41 524.921 1347.87 495.836C1301.38 478.168 1264.86 453.911 1233.9 426.014C1228.48 421.113 1223.15 416.167 1217.88 411.2C1195.67 390.383 1172.7 369.764 1140.75 354.411C1096.76 333.265 1042.51 324.396 988.565 319.857C967.679 318.228 946.766 316.776 925.821 315.479C807.143 317.723 688.418 316.751 569.72 315.618C558.375 315.509 547.03 315.404 535.685 315.298C503.887 314.978 472.095 314.41 440.336 313.4C373.111 316.001 305.986 319.378 238.867 322.872C180.597 325.903 122.22 329.384 63.7564 330.424C63.5366 330.129 63.4235 329.982 63.1971 329.687C121.334 328.652 179.378 325.187 237.316 322.173C301.405 318.839 365.508 315.601 429.69 313.05C329.362 309.472 230.764 300.998 132.686 287.329C90.5945 281.478 48.0436 275.281 4.66042 277.718C-29.1886 279.777 -62.9843 286.483 -94.4431 294.397C-121.987 301.326 -157.773 310.478 -174.165 327.195C-177.994 333.728 -176.649 338.296 -170.264 344.097C-153.333 361.31 -112.14 375.632 -80.3616 377.627C-80.1152 377.636 -79.1831 377.686 -78.9368 377.636C-78.8169 377.627 -76.5865 377.278 -80.1152 375.291C-78.2576 375.211 -77.3322 375.173 -75.4746 375.093C-72.5651 376.726 -72.6317 377.741 -75.661 378.174C-76.5931 378.309 -78.6305 378.494 -81.9728 378.318C-114.91 376.343 -157.507 362.123 -175.097 344.202C-181.536 338.346 -182.787 333.678 -178.999 327.081C-162.427 310.137 -125.922 300.897 -98.0251 293.917C-65.9937 285.898 -31.5788 279.12 2.85615 277.02C48.2167 274.835 91.8263 280.648 135.889 286.773C236.277 300.758 337.032 309.291 439.764 312.646C601.865 306.551 764.512 305.233 926.36 314.705C1000.28 313.181 1074.13 310.44 1147.56 304.761C1164.87 303.398 1182.17 302.055 1199.48 300.716C1230.14 298.346 1260.8 295.959 1291.42 293.408C1459.03 279.39 1626.86 266.533 1794.72 253.79C1907.45 245.236 2020.18 236.733 2132.75 227.417C2164.6 224.756 2196.42 221.931 2228.23 219.081C2329.01 210.039 2429.42 201.46 2531.42 205.564C2716.99 214.03 2888.27 254.746 3058.97 298.75C3080.3 304.248 3101.64 309.742 3123.01 315.18C3231.23 342.746 3339.58 371.637 3441.34 407.933C3496.71 427.685 3558.32 450.506 3596 483.931C3604.88 492.194 3612.48 500.799 3619.43 509.774C3629.93 523.738 3638.06 538.737 3637.87 554.393H3638.01L3638.07 554.388ZM935.555 315.248C953.997 316.427 972.413 317.727 990.809 319.163C1045.38 323.747 1100.43 332.638 1145.02 353.977C1177.21 369.38 1200.33 390.109 1222.66 411.048C1227.93 416.016 1233.26 420.958 1238.68 425.862C1269.51 453.629 1305.83 477.801 1352.09 495.415C1428.05 524.335 1517.83 536.194 1604.61 543.7C1632.83 545.927 1661.5 547.358 1689.81 544.912C1721.93 542.062 1752.16 533.479 1768.77 515.095C1782.81 499.549 1785.95 481.005 1789.38 463.56C1792.96 445.425 1795.61 424.448 1815.74 410.13C1842.58 390.715 1863.59 369.115 1883.55 346.72C1905.2 322.51 1927.55 297.895 1963.67 281.12C2014.25 257.634 2079.98 252.532 2140.9 250.898C2260.93 248.107 2382.61 277.516 2492.11 305.111C2637.04 342.013 2777.02 386.266 2916.51 430.606C2963.24 445.479 3009.9 460.432 3056.55 475.393C3159.04 508.284 3261.32 541.574 3365.62 572.132C3402.32 582.884 3439.3 593.45 3477.29 602.278C3497.82 607.052 3522.43 613.72 3544.88 612.609C3577.88 610.735 3609.57 600.005 3624.19 580.556C3641.46 557.609 3631.06 531.677 3614.72 509.875C3607.69 500.934 3600.15 492.325 3591.26 484.07C3553.67 450.691 3492.13 427.916 3436.86 408.202C3335.22 371.957 3227 343.103 3118.91 315.572C3097.54 310.133 3076.2 304.639 3054.87 299.133C2885.11 255.365 2714.71 214.699 2530.15 206.275C2429.44 202.226 2330.23 210.792 2230.73 219.717C2198.88 222.58 2167.02 225.404 2135.13 228.065C2022.5 237.389 1909.7 245.897 1796.91 254.456C1629.1 267.186 1461.31 280.042 1293.75 294.056C1263.08 296.611 1232.38 298.99 1201.67 301.373C1184.39 302.707 1167.1 304.054 1149.82 305.418C1078.69 310.933 1007.15 313.69 935.541 315.269V315.248H935.555ZM451.122 312.962C479.392 313.737 507.662 314.238 535.958 314.524C547.303 314.629 558.648 314.734 569.993 314.844C685.389 315.951 800.804 316.894 916.187 314.882C761.469 306.201 606.059 307.334 451.122 312.962Z" fill="url(#paint11_linear_1779_1730)" style=""/>
<path d="M3668.07 549.076C3668.11 585.321 3623.57 608.214 3569.13 611.325C3546.22 612.495 3521.84 606.702 3500.59 602.072C3462.88 593.85 3426.2 583.705 3389.86 573.349C3280.59 542.21 3173.63 507.816 3066.4 474.004C3024.32 460.735 2982.25 447.475 2940.1 434.302C2806.99 392.652 2673.72 350.752 2535.84 315.702C2472.35 299.562 2407.73 284.757 2341.45 273.866C2289.05 265.258 2234.52 258.564 2180.14 259.675C2120.98 261.111 2057.64 265.973 2007.96 288.142C1972.28 304.063 1949.25 327.515 1926.89 350.672C1905.99 372.34 1884.17 393.136 1856.78 411.793C1836.63 425.256 1832.64 445.365 1828.18 462.865C1823.83 479.813 1819.58 497.743 1804.91 512.565C1787.14 530.502 1756.3 538.695 1724.18 541.507C1694.37 544.058 1664.11 542.618 1634.4 540.261C1546.7 532.645 1456.57 520.643 1379.08 492.367C1331.51 475.01 1293.07 451.221 1259.73 423.871C1253.9 419.084 1248.18 414.235 1242.47 409.381C1218.42 388.926 1193.65 368.703 1160.65 353.657C1115.53 333.084 1061.13 324.126 1006.72 319.504C1003.87 319.268 1000.97 319.041 998.058 318.822C862.875 322.03 727.599 320.552 592.396 318.792C583.94 318.683 575.485 318.573 567.029 318.46C516.755 317.769 466.521 316.325 416.426 313.556C365.406 315.622 314.44 318.06 263.467 320.539C206.674 323.309 149.782 326.496 92.8102 327.384C92.6104 327.09 92.5106 326.942 92.3175 326.648C148.957 325.768 205.523 322.585 261.982 319.832C310.831 317.449 359.681 315.117 408.57 313.101C326.218 308.159 245.797 298.859 165.954 285.329C125.84 278.552 86.4652 272.225 44.6133 274.014C11.024 275.946 -22.6186 283.086 -53.6513 291.122C-82.4269 298.573 -118.42 308.277 -136.183 325.402C-141.616 331.135 -139.346 337.323 -134.639 342.88C-121.316 359.589 -89.0116 374.613 -60.0162 378.781C-60.0162 378.545 -60.509 377.846 -63.7913 376.368C-61.9604 376.276 -61.0416 376.225 -59.2107 376.133C-53.7645 378.583 -54.8164 379.185 -56.614 379.45C-57.666 379.602 -59.0908 379.648 -60.5755 379.564C-90.2766 377.013 -126.736 359.82 -139.406 342.952C-144.206 337.336 -146.47 331.072 -140.95 325.275C-122.927 307.881 -86.688 298.017 -57.4197 290.491C-25.6546 282.324 8.68043 275.272 43.0088 273.302C86.7448 271.408 127.658 277.739 169.61 284.816C250.95 298.586 332.882 307.906 416.806 312.747C610.758 305.073 805.663 303.36 998.937 318.014C1064.19 316.342 1129.37 313.581 1194.15 308.289C1210.88 306.896 1227.6 305.523 1244.34 304.159C1276.24 301.549 1308.14 298.927 1340 296.115C1493.04 282.551 1646.26 269.749 1799.48 257.028C1928.77 246.301 2058.09 235.668 2187.15 223.859C2220.96 220.732 2254.73 217.419 2288.49 214.047C2388.15 204.124 2487.37 194.737 2588.54 198.694C2772.29 206.928 2940.35 248.983 3107.8 294.557C3130.86 300.83 3153.93 307.094 3177.04 313.282C3294.19 344.678 3413.17 377.231 3520.69 420.701C3561.85 437.338 3604.52 456.378 3631.78 482.6C3639.98 490.881 3646.76 499.494 3653 508.423C3661.63 521.3 3668.27 534.935 3668.09 549.059V549.08L3668.07 549.076ZM1006.15 318.595C1007.15 318.67 1008.07 318.746 1009.06 318.83C1064.1 323.499 1119.24 332.482 1164.94 353.249C1198.18 368.349 1223.1 388.652 1247.28 409.238C1252.98 414.096 1258.7 418.941 1264.55 423.728C1297.77 450.96 1335.99 474.64 1383.32 491.958C1460.21 520.096 1549.71 532.043 1636.79 539.612C1664.95 541.852 1693.55 543.283 1721.81 540.858C1753.37 538.097 1783.19 529.875 1800.42 512.22C1814.83 497.452 1819.02 479.666 1823.36 462.832C1827.83 445.273 1831.81 425.125 1852.05 411.625C1879.42 392.984 1901.2 372.201 1922.1 350.559C1944.65 327.199 1967.91 303.608 2004.01 287.636C2054.71 265.207 2119.3 260.395 2179.5 258.943C2292.95 256.615 2407.38 282.719 2511.48 308.352C2659.45 344.796 2802.19 389.482 2944.42 433.97C2986.55 447.163 3028.63 460.428 3070.72 473.68C3174.92 506.537 3278.92 539.793 3384.92 570.293C3421.9 580.931 3459.16 591.366 3497.38 600.114C3518.72 604.997 3544.14 611.8 3567.39 610.626C3602.4 608.786 3636.45 597.887 3652.61 577.466C3669.73 555.836 3663.47 529.787 3648.14 508.519C3641.91 499.591 3635.13 490.999 3626.92 482.731C3585.34 442.806 3508.78 416.617 3444.34 394.268C3356.63 363.845 3264.8 338.313 3172.75 313.665C3149.63 307.468 3126.57 301.2 3103.51 294.932C2937.02 249.631 2769.86 207.614 2587.15 199.418C2487.33 195.52 2389.39 204.886 2291.07 214.674C2257.25 218.046 2223.43 221.371 2189.54 224.495C2060.43 236.312 1931.04 246.945 1801.69 257.684C1648.49 270.406 1495.29 283.199 1342.26 296.763C1310.36 299.575 1278.42 302.202 1246.48 304.816C1229.77 306.184 1213.06 307.552 1196.36 308.946C1133.21 314.107 1069.69 316.877 1006.09 318.599C1006.11 318.595 1006.12 318.59 1006.15 318.586L1006.15 318.595ZM424.889 313.206C472.34 315.728 519.911 317.054 567.515 317.706C575.971 317.816 584.426 317.925 592.882 318.039C725.468 319.761 858.114 321.213 990.681 318.237C802.8 304.34 613.395 305.885 424.882 313.219V313.21L424.889 313.206Z" fill="url(#paint12_linear_1779_1730)" style=""/>
<path d="M3697.96 542.791C3698 581.448 3649.48 606.016 3591.6 609.359C3568.29 610.567 3543.43 604.804 3521.75 600.177C3483.37 591.989 3446.01 581.857 3408.99 571.505C3297.86 540.433 3189.03 506.069 3079.94 472.282C3042.62 460.735 3005.31 449.179 2967.95 437.674C2834.94 396.743 2701.85 355.396 2564.19 320.998C2456.18 294.01 2336.66 265.641 2218.63 267.733C2160.23 268.992 2097.98 273.576 2048.24 294.675C2012.61 309.788 1988.66 332.251 1965.42 354.529C1943.66 375.434 1921 395.447 1893.1 413.296C1872.86 426.026 1867.75 445.222 1862.22 462.15C1856.95 478.483 1851.66 495.638 1836.62 509.69C1818.24 526.882 1787.82 534.716 1756.22 537.444C1726.44 539.949 1696.24 538.509 1666.57 536.139C1578.58 528.465 1488.69 516.375 1410.31 488.881C1361.63 471.807 1321.31 448.51 1285.6 421.72C1279.37 417.026 1273.23 412.286 1267.1 407.541C1243.46 389.208 1219.32 370.955 1189.11 356.76C1150.26 338.506 1104.8 328.428 1057.71 322.434C910.198 326.425 762.525 324.29 614.992 321.886C608.38 321.777 605.078 321.722 598.467 321.613C534.764 320.51 471.067 318.119 407.83 312.991C367.949 314.587 328.081 316.376 288.22 318.182C232.899 320.695 177.491 323.604 122.017 324.337C121.844 324.042 121.758 323.895 121.585 323.6C176.746 322.876 231.847 319.971 286.855 317.475C325.105 315.736 363.361 314.027 401.631 312.474C332.855 306.538 266.149 296.683 200.102 283.3C161.905 275.58 125.213 268.777 84.6997 270.313C51.2502 272.132 17.6875 279.566 -13.0522 287.737C-43.1062 295.727 -78.9593 306.058 -98.0875 323.608C-104.519 328.98 -102.222 335.896 -98.8332 341.651C-90.098 357.075 -68.4597 369.262 -46.6083 377.391C-45.1236 377.299 -44.3779 377.257 -42.8931 377.164C-34.7238 380.313 -35.9622 380.519 -37.0741 380.688C-38.186 380.726 -38.7452 380.747 -39.8571 380.784C-66.7352 376.92 -94.5788 357.227 -103.654 341.697C-107.122 335.88 -109.373 328.9 -102.848 323.474C-83.3934 305.641 -47.2741 295.151 -16.6808 287.085C14.7846 278.788 49.0264 271.433 83.215 269.594C125.713 267.969 163.903 274.729 203.997 282.837C270.483 296.127 338.427 306.13 407.51 312.225C614.046 304.092 821.621 302.017 1027.32 318.464C1037.97 319.378 1048.56 320.426 1059.13 321.63C1119.84 319.849 1180.44 317.012 1240.67 311.838C1256.8 310.428 1272.93 309.034 1289.06 307.641C1322.19 304.782 1355.3 301.916 1388.37 298.843C1522.62 286.289 1656.96 274.174 1791.31 262.1C1941.41 248.608 2091.59 235.339 2241.33 220.311C2276.91 216.715 2312.44 212.88 2347.96 209.003C2446.69 198.21 2544.91 188.022 2645.46 191.836C2828.09 199.872 2993.51 243.426 3158.27 290.693C3182.46 297.634 3206.66 304.559 3230.93 311.396C3321.64 336.945 3412.29 363.222 3498.41 394.605C3558.78 416.609 3630.11 442.549 3667.47 481.283C3674.78 489.336 3680.61 497.696 3686.03 506.322C3686.23 506.629 3686.33 506.781 3686.54 507.088C3693.33 518.606 3698.15 530.41 3698.16 542.782C3698.09 542.782 3698.05 542.786 3697.98 542.791H3697.96ZM1063.94 322.261C1110.69 328.42 1155.8 338.595 1194.31 356.831C1224.3 371.031 1248.32 389.153 1271.85 407.402C1277.98 412.147 1284.13 416.887 1290.35 421.585C1325.87 448.249 1366.01 471.487 1414.44 488.49C1492.31 515.827 1581.55 527.876 1668.98 535.499C1697.12 537.743 1725.68 539.175 1753.94 536.796C1784.9 534.123 1814.44 526.251 1832.24 509.353C1846.99 495.36 1852.19 478.319 1857.38 462.116C1862.92 445.117 1868.08 425.896 1888.39 413.123C1916.26 395.287 1938.89 375.287 1960.66 354.411C1984.11 331.914 2008.25 309.337 2044.33 294.157C2095.11 272.789 2158.6 268.263 2218.07 266.988C2337.33 264.87 2457.89 293.147 2567.1 320.354C2705.3 354.785 2838.87 396.268 2972.34 437.338C3009.7 448.834 3047.01 460.39 3084.33 471.946C3190.35 504.769 3296.18 538.008 3404 568.436C3442.04 579.175 3480.39 589.704 3519.7 598.468C3541.26 603.276 3566.61 609.78 3589.99 608.651C3625.94 606.732 3661.86 596.283 3680.28 575.887C3699.32 554.801 3695.31 528.958 3681.61 507.155C3681.42 506.848 3681.32 506.697 3681.13 506.389C3675.76 497.768 3669.9 489.433 3662.63 481.388C3625.37 442.709 3554.1 416.815 3493.84 394.853C3407.81 363.504 3317.25 337.265 3226.63 311.745C3202.37 304.917 3178.18 297.988 3154 291.042C2990.25 244.049 2825.72 200.55 2644.19 192.543C2545.04 188.788 2448.12 198.955 2350.77 209.597C2315.22 213.487 2279.66 217.317 2244.04 220.921C2094.24 235.966 1943.99 249.24 1793.83 262.732C1659.5 274.805 1525.17 286.912 1390.95 299.466C1357.81 302.547 1324.64 305.418 1291.45 308.277C1275.34 309.666 1259.23 311.063 1243.13 312.474C1183.73 317.576 1123.98 320.43 1064.12 322.236C1064.04 322.244 1064 322.249 1063.93 322.257L1063.94 322.261ZM413.502 312.772C475.115 317.87 536.934 319.883 599.006 320.885C605.617 320.99 608.92 321.045 615.524 321.15C761.16 323.52 906.929 325.633 1052.56 321.828C1043.4 320.775 1034.2 319.887 1024.96 319.133C822.04 302.918 617.262 304.833 413.502 312.772Z" fill="url(#paint13_linear_1779_1730)" style=""/>
<path d="M3728.59 537.373C3728.63 578.754 3675.25 603.835 3614.05 607.38C3590.62 608.609 3565.71 603.023 3543.83 598.485C3504.39 590.301 3465.98 580.089 3427.93 569.653C3314.81 538.636 3203.97 504.28 3092.87 470.514C3060.51 460.685 3028.16 450.851 2995.78 441.05C2864.52 401.345 2733.18 361.251 2597.51 327.852C2490.85 301.596 2373.29 274.052 2257.04 275.786C2199.36 276.864 2138.28 281.17 2088.5 301.221C2052.9 315.563 2028.11 337.003 2003.97 358.401C1981.33 378.532 1957.82 397.758 1929.41 414.807C1909.15 426.754 1902.62 445.096 1896.32 461.446C1890.16 477.149 1883.85 493.554 1868.5 506.835C1849.54 523.253 1819.44 530.751 1788.41 533.39C1758.65 535.861 1728.51 534.426 1698.87 532.039C1610.59 524.306 1520.94 512.119 1441.65 485.425C1391.82 468.649 1349.59 445.786 1311.58 419.598C1304.94 415.013 1298.38 410.383 1291.85 405.731C1268.89 389.427 1245.62 373.186 1218.03 359.934C1184.52 343.84 1146.34 333.349 1105.91 326.366C949.818 330.786 793.536 327.986 637.448 324.93C634.451 324.871 632.953 324.837 629.964 324.779C555.961 323.242 481.851 319.908 408.82 311.943C376.862 313.168 344.917 314.49 312.973 315.837C259.11 318.094 205.16 320.733 151.165 321.31C151.018 321.015 150.945 320.868 150.792 320.573C204.475 320.005 258.118 317.374 311.668 315.13C342.334 313.846 373.001 312.57 403.674 311.387C345.63 304.702 289.856 294.485 234.755 281.28C198.396 272.591 164.021 265.359 124.679 266.638C90.2842 268.39 55.9492 276.346 24.6702 285.144C-5.5036 293.631 -40.2248 304.446 -60.0854 321.844C-66.5969 327.132 -65.6781 334.048 -63.3012 340.119C-63.2546 340.253 -63.228 340.325 -63.1813 340.46C-57.5021 356.785 -38.2474 369.654 -18.9992 380.267C-16.9353 381.37 -16.669 381.963 -18.1936 382.043C-19.7183 382.123 -22.4813 381.487 -26.4828 380.132C-28.3403 379.492 -29.2658 379.172 -31.1234 378.532C-29.7385 378.44 -29.0461 378.389 -27.6612 378.296C-45.4046 368.046 -62.722 355.787 -68.0683 340.485C-68.1149 340.35 -68.1415 340.279 -68.1881 340.144C-70.6383 334.019 -71.5837 327.039 -64.9723 321.701C-44.8387 304.029 -9.7913 293.029 20.8952 284.466C52.9399 275.529 88.0339 267.678 123.194 265.91C164.44 264.47 200.606 271.74 238.717 280.863C294.483 294.241 350.956 304.484 409.739 311.131C621.568 303.103 834.416 301.048 1045.33 318.127C1066.23 319.937 1086.97 322.223 1107.39 325.557C1167.45 323.705 1227.4 320.746 1286.96 315.395C1302.46 313.972 1317.98 312.562 1333.49 311.16C1367.87 308.049 1402.25 304.926 1436.57 301.575C1544.73 290.949 1652.92 280.518 1761.12 270.099C1939.32 252.94 2117.66 236.164 2295.3 216.774C2332.41 212.704 2369.45 208.359 2406.48 203.947C2504.52 192.287 2601.95 181.308 2702.13 184.995C2792.73 188.902 2881.21 200.937 2966.79 220.071C3050.28 238.736 3130.22 263.056 3210 287.177C3234.81 294.666 3259.61 302.16 3284.51 309.523C3373.41 335.846 3462.42 362.737 3546.46 394.937C3602.92 416.567 3669.76 442.318 3702.79 479.978C3709.24 487.904 3714.23 496.012 3718.82 504.423C3719.12 504.958 3719.26 505.223 3719.55 505.758C3724.81 516.072 3728.53 526.482 3728.54 537.377H3728.6L3728.59 537.373ZM1111.34 326.214C1151.58 333.307 1189.6 343.844 1222.95 359.917C1250.41 373.148 1273.61 389.343 1296.47 405.588C1303 410.24 1309.56 414.866 1316.21 419.446C1354.06 445.534 1396.07 468.291 1445.67 485.029C1524.39 511.597 1613.45 523.725 1701.13 531.408C1729.26 533.664 1757.79 535.087 1786.04 532.759C1816.48 530.17 1845.58 522.66 1863.99 506.503C1879.08 493.268 1885.31 477.001 1891.41 461.421C1897.78 445.008 1904.31 426.615 1924.7 414.639C1953.08 397.602 1976.56 378.389 1999.2 358.292C2023.56 336.709 2048.63 315.088 2084.63 300.707C2135.45 280.404 2197.88 276.156 2256.61 275.062C2372.53 273.328 2489.12 299.697 2595.67 325.776C2733.56 359.53 2866.87 400.414 3000.16 440.731C3032.54 450.531 3064.91 460.352 3097.25 470.194C3205.23 503.005 3313.02 536.232 3422.79 566.605C3461.19 577.234 3499.88 587.649 3539.52 596.325C3561.94 601.234 3588.18 607.889 3612.44 606.702C3649.54 604.69 3687.01 594.646 3707.75 574.3C3728.6 553.858 3727.13 528.103 3714.96 505.829C3714.66 505.299 3714.51 505.038 3714.21 504.508C3709.58 496.126 3704.58 488.018 3698.19 480.1C3665.19 442.507 3598.44 416.803 3542.06 395.207C3458.11 363.049 3369.2 336.183 3280.39 309.893C3255.51 302.513 3230.71 295.029 3205.91 287.535C3044.42 238.724 2882.08 193.575 2701.12 185.736C2602.33 182.078 2506.35 193.061 2409.68 204.558C2372.59 208.97 2335.48 213.322 2298.3 217.406C2120.58 236.8 1942.16 253.588 1763.89 270.76C1655.69 281.183 1547.49 291.61 1439.34 302.236C1404.97 305.591 1370.55 308.727 1336.13 311.838C1320.62 313.24 1305.11 314.65 1289.6 316.073C1230.5 321.385 1171 324.362 1111.39 326.243C1111.37 326.231 1111.36 326.227 1111.33 326.214H1111.34ZM414.986 311.716C486.166 319.331 558.344 322.564 630.437 324.063C633.433 324.122 634.931 324.151 637.927 324.214C792.484 327.237 947.242 330.02 1101.81 325.747C1082.47 322.661 1062.85 320.518 1043.1 318.809C834.676 301.941 624.325 303.856 414.986 311.728V311.72V311.716Z" fill="url(#paint14_linear_1779_1730)" style=""/>
<path d="M3759.59 531.871C3760.15 575.993 3700.56 601.562 3636.52 605.414C3612.31 606.774 3586.37 600.973 3563.75 596.363C3523.92 588.243 3485.09 578.127 3446.6 567.784C3331.35 536.817 3218.37 502.47 3105.13 468.717C3077.95 460.617 3050.77 452.514 3023.57 444.439C3021.5 443.821 3020.45 443.509 3018.37 442.89C2888.49 404.304 2758.59 365.188 2624.43 332.819C2520.85 307.83 2407.85 282.488 2295.41 283.848C2238.45 284.753 2178.49 288.786 2128.68 307.78C2093.12 321.348 2067.47 341.79 2042.46 362.295C2018.88 381.622 1994.53 400.069 1965.6 416.327C1945.26 427.546 1937.55 444.991 1930.22 460.765C1923.13 475.84 1915.82 491.458 1900.16 503.994C1880.61 519.658 1850.99 526.802 1820.45 529.353C1790.69 531.787 1760.55 530.338 1730.91 527.947C1642.37 520.155 1552.92 507.888 1472.78 481.973C1421.74 465.467 1377.63 443.063 1337.33 417.468C1330.29 412.98 1323.31 408.455 1316.35 403.913C1266.82 371.59 1216.38 344.985 1147.86 330.386C985.708 334.928 823.361 331.649 661.26 327.957C579.221 325.983 496.795 321.748 416.48 310.525C390.182 311.476 363.883 312.465 337.59 313.476C285.166 315.488 232.655 317.854 180.117 318.279C180.017 317.984 179.97 317.837 179.87 317.542C232.095 317.13 284.3 314.76 336.419 312.76C361.686 311.796 386.946 310.836 412.219 309.923C362.871 302.657 315.945 292.221 269.719 279.221C235.138 269.522 203.027 261.818 164.59 262.934C130.362 264.567 96.0868 272.877 65.134 281.793C33.8084 290.819 -1.07261 302.261 -22.2116 320.06C-28.2237 326.054 -32.8111 332.2 -27.5912 339.209C-20.8401 347.477 -13.5895 355.547 -6.05941 363.542C-4.27508 365.449 15.5456 382.7 3.65451 383.251C-3.08999 383.331 -8.91565 381.361 -14.9078 379.631C-13.1767 379.501 -12.3112 379.433 -10.5735 379.303C-2.59064 381.791 0.871505 382.372 2.1698 382.506C5.97149 377.77 -7.25784 367.52 -10.8864 363.647C-18.4232 355.644 -25.687 347.57 -32.4848 339.306C-37.7645 332.221 -33.1106 325.999 -27.0386 319.937C-5.5867 301.865 29.6139 290.238 61.4788 281.141C93.1972 272.082 128.178 263.889 163.172 262.235C203.539 260.993 237.502 268.689 273.867 278.884C320.553 292.014 367.977 302.501 417.852 309.729C632.99 302.156 849.353 300.265 1063.47 317.803C1092.67 320.363 1121.6 323.907 1149.72 329.582C1211.16 327.696 1272.5 324.669 1333.37 318.957C1348.15 317.538 1362.94 316.136 1377.73 314.73C1413.46 311.345 1449.18 307.957 1484.84 304.303C1554.14 297.184 1623.44 290.091 1692.75 283.014C1911.84 260.619 2131.21 238.892 2349.43 213.221C2387.91 208.671 2426.29 203.813 2464.66 198.879C2562.23 186.343 2658.89 174.534 2758.94 178.138C2849.37 181.96 2937.54 194.324 3022.51 214.211C3105.41 233.613 3184.42 258.897 3263.28 283.987C3288.23 291.913 3313.17 299.832 3338.21 307.637C3422.08 333.724 3506.15 360.178 3585.37 391.641C3640.9 413.692 3707.86 440.263 3738.25 478.66C3743.9 486.452 3748.12 494.371 3751.91 502.584C3752.26 503.316 3752.43 503.683 3752.78 504.419C3756.64 513.432 3759.39 522.491 3759.41 531.871H3759.59ZM1153.11 330.243C1221.32 344.951 1271.68 371.506 1321.04 403.748C1327.99 408.291 1334.98 412.808 1342.02 417.295C1382.17 442.76 1426.02 465.096 1476.82 481.556C1556.42 507.341 1645.28 519.553 1733.26 527.299C1761.39 529.568 1789.91 530.999 1818.16 528.701C1848.04 526.272 1876.86 519.006 1895.79 503.645C1911.16 491.163 1918.39 475.65 1925.4 460.714C1932.74 444.873 1940.49 427.399 1960.9 416.133C1989.83 399.901 2014.13 381.466 2037.7 362.165C2062.97 341.462 2088.89 320.868 2124.89 307.245C2175.74 288.007 2237.02 284.02 2295.05 283.111C2408.62 281.73 2522.61 306.984 2627.32 332.179C2761.99 364.581 2892.32 403.828 3022.64 442.553C3024.72 443.172 3025.76 443.484 3027.84 444.103C3055.03 452.189 3082.22 460.281 3109.39 468.38C3219.45 501.182 3329.32 534.409 3441.15 564.74C3480.35 575.374 3519.85 585.78 3560.27 594.435C3583.22 599.348 3609.98 605.966 3634.72 604.728C3672.87 602.64 3711.61 592.583 3734.42 572.402C3756.78 552.625 3758.7 527.248 3748.08 504.47C3747.73 503.737 3747.56 503.371 3747.21 502.634C3743.38 494.442 3739.19 486.524 3733.53 478.748C3703.18 440.411 3636.28 413.89 3580.83 391.873C3501.68 360.447 3417.7 334.027 3333.93 307.961C3308.9 300.156 3283.94 292.238 3259 284.311C3180.46 259.318 3101.76 234.097 3019.19 214.758C2934.92 195.019 2847.51 182.659 2757.8 178.862C2659.26 175.313 2563.94 187.109 2467.85 199.452C2429.44 204.394 2391 209.264 2352.46 213.819C2134.16 239.49 1914.7 261.233 1695.52 283.637C1626.24 290.718 1556.95 297.803 1487.68 304.926C1451.96 308.58 1416.18 311.981 1380.39 315.361C1365.6 316.763 1350.82 318.169 1336.03 319.575C1275.36 325.267 1214.23 328.323 1153 330.23C1153.05 330.23 1153.08 330.234 1153.12 330.239L1153.11 330.243ZM422.293 310.335C500.963 321.171 581.624 325.305 661.939 327.237C822.722 330.9 983.744 334.154 1144.57 329.742C1117.4 324.337 1089.47 320.927 1061.29 318.456C849.24 301.086 635.294 302.825 422.233 310.335H422.293Z" fill="url(#paint15_linear_1779_1730)" style=""/>
<path d="M3790.66 525.417C3791.23 572.275 3726.56 599.352 3658.92 603.453C3635.91 604.711 3611.62 599.71 3589.95 595.496C3551.89 588.1 3514.76 578.737 3477.96 569.169C3355.89 537.432 3236.29 501.839 3116.51 466.848C3094.79 460.499 3073.07 454.16 3051.35 447.82C3044.97 445.959 3041.78 445.029 3035.39 443.168C2909.75 406.527 2784.1 369.393 2654.42 338.725C2553.13 314.768 2443.34 290.899 2333.78 291.905C2277.57 292.638 2218.66 296.409 2168.9 314.343C2133.37 327.144 2106.84 346.623 2080.95 366.202C2056.45 384.725 2031.27 402.389 2001.81 417.843C1981.34 428.392 1972.67 444.894 1964.19 460.087C1956.19 474.522 1947.88 489.37 1931.93 501.165C1911.58 516.211 1882.76 522.534 1852.57 525.32C1822.78 527.703 1792.63 526.259 1762.97 523.847C1674.18 515.996 1584.84 503.67 1503.91 478.517C1451.61 462.263 1405.67 440.301 1363.08 415.346C1355.65 410.951 1348.25 406.531 1340.87 402.102C1294.47 374.158 1247.15 349.536 1186.85 334.554C1022.1 339.041 857.179 335.417 692.522 331.152C604.177 328.744 514.848 323.735 429.3 308.853C406.942 309.586 384.585 310.352 362.228 311.131C311.234 312.895 260.168 315.004 209.088 315.282C209.015 314.987 208.975 314.84 208.902 314.545C259.695 314.275 310.475 312.175 361.182 310.415C382.694 309.666 404.206 308.929 425.718 308.222C383.6 300.51 343.978 289.96 305.122 277.205C272.252 266.457 242.291 258.345 204.574 259.284C170.519 260.8 136.33 269.48 105.724 278.51C73.2861 288.078 38.2054 300.148 15.7881 318.317C9.40981 324.353 4.06348 330.622 8.05159 338.043C11.3673 343.524 14.8294 348.968 18.3847 354.385C20.968 358.385 42.5996 384.485 23.8309 384.51C15.868 384.763 8.59089 382.641 1.43359 380.738C3.14469 380.599 3.99688 380.528 5.70132 380.389C17.892 383.895 21.9734 383.82 22.4061 383.803C35.2227 381.256 16.5404 359.092 13.5577 354.449C10.0489 349.014 6.54024 343.579 3.22458 338.094C-0.830106 330.588 4.54283 324.265 11.021 318.165C33.7712 299.71 69.2114 287.451 102.215 277.807C133.607 268.634 168.501 260.088 203.336 258.556C242.957 257.503 274.949 265.506 309.517 276.885C348.719 289.75 388.693 300.341 431.231 308.041C648.093 301.027 866.068 299.592 1081.8 317.475C1118.38 320.712 1154.56 325.536 1189.22 333.745C1253.05 331.834 1316.8 328.698 1379.98 322.535C1394.02 321.133 1408.06 319.744 1422.11 318.359C1459.24 314.692 1496.37 311.004 1533.43 307.06C1539.79 306.374 1542.97 306.033 1549.33 305.351C1834.45 274.78 2120.15 245.489 2403.79 209.715C2443.45 204.684 2483 199.313 2522.52 193.861C2619.73 180.449 2715.95 167.828 2816 171.327C2906.49 175.086 2994.55 187.824 3079.1 208.502C3161.66 228.692 3239.94 255.053 3318.07 281.191C3342.72 289.451 3367.41 297.685 3392.19 305.797C3473.01 332.242 3554.03 359.041 3630.09 390.753C3682.76 412.715 3747.25 439.535 3773.97 477.389C3778.89 485.076 3782.36 492.851 3785.41 500.9C3785.76 501.784 3785.93 502.226 3786.28 503.11C3789.01 510.397 3790.76 517.941 3790.67 525.447V525.417H3790.66ZM1192.04 334.402C1252.12 349.456 1299.33 374.036 1345.62 401.913C1353 406.346 1360.38 410.77 1367.83 415.157C1410.23 440.011 1455.95 461.897 1507.99 478.096C1588.39 503.123 1677.14 515.402 1765.38 523.203C1793.52 525.485 1822.06 526.933 1850.34 524.668C1879.73 522.323 1908.06 515.39 1927.54 500.803C1943.23 489.062 1951.45 474.333 1959.36 460.028C1967.85 444.759 1976.6 428.232 1997.17 417.64C2026.59 402.203 2051.79 384.577 2076.24 366.063C2102.41 346.273 2129.21 326.673 2165.2 313.808C2216.05 295.635 2276.21 291.913 2333.53 291.177C2444.19 290.158 2554.98 313.96 2657.36 338.107C2787.54 368.808 2913.65 406.064 3039.72 442.84C3046.11 444.7 3049.29 445.631 3055.68 447.491C3077.4 453.823 3099.12 460.171 3120.83 466.519C3233.15 499.334 3345.28 532.578 3459.38 562.875C3499.81 573.614 3540.55 584.122 3582.23 592.798C3605.41 597.622 3632.28 604.042 3657.19 602.775C3696.54 600.594 3736.86 590.878 3761.95 570.823C3785.91 551.682 3790.32 526.364 3781.42 503.139C3781.08 502.255 3780.9 501.813 3780.56 500.925C3777.51 492.885 3774.05 485.126 3769.11 477.452C3742.41 439.649 3678.02 412.913 3625.4 390.959C3549.45 359.273 3468.5 332.512 3387.77 306.096C3363 297.975 3338.31 289.745 3313.65 281.482C3235.85 255.449 3157.89 229.159 3075.67 209.033C2991.85 188.511 2904.6 175.768 2814.86 172.034C2716.35 168.594 2621.48 181.198 2525.78 194.4C2486.21 199.856 2446.63 205.244 2406.92 210.283C2123.18 246.061 1837.37 275.374 1552.15 305.957C1545.79 306.643 1542.61 306.984 1536.25 307.666C1499.13 311.619 1461.94 315.307 1424.75 318.982C1410.73 320.367 1396.7 321.756 1382.68 323.149C1319.53 329.317 1255.82 332.478 1192.03 334.419V334.389L1192.04 334.402ZM434.919 308.672C518.996 323.128 606.674 328.045 693.44 330.415C856.88 334.655 1020.59 338.258 1184.12 333.876C1150.34 325.94 1115.1 321.272 1079.49 318.106C865.748 300.388 649.791 301.768 434.926 308.664V308.672H434.919Z" fill="url(#paint16_linear_1779_1730)" style=""/>
<path d="M3822.4 519.671C3822.98 569.59 3752.75 597.117 3681.45 601.487C3658.49 602.754 3634.32 597.993 3612.61 593.918C3573.11 586.504 3534.57 576.995 3496.37 567.27C3371.71 535.546 3249.49 499.923 3127.09 464.899C3102.5 457.864 3077.92 450.826 3053.33 443.791C2931.78 409.015 2810.21 373.788 2684.87 344.741C2585.94 321.815 2478.93 299.133 2372.26 299.967C2316.78 300.527 2258.96 304.033 2209.25 320.923C2173.74 332.983 2146.38 351.472 2119.61 370.13C2094.21 387.857 2068.14 404.708 2038.14 419.371C2017.66 429.188 2007.63 444.848 1998.28 459.434C1989.38 473.209 1980.08 487.294 1963.88 498.357C1943.06 512.578 1914.59 518.606 1884.92 521.3C1855.1 523.641 1824.94 522.188 1795.26 519.759C1706.21 511.849 1616.96 499.473 1535.25 475.069C1481.69 459.072 1433.91 437.573 1389.11 413.237C1381.25 408.947 1373.44 404.632 1365.66 400.296C1322.2 376.103 1278.1 353.83 1224.76 338.898C1057.92 343.263 890.822 339.138 724.127 334.33C630.849 331.493 535.468 325.873 446.431 306.955C426.69 307.536 406.949 308.138 387.215 308.752C337.633 310.28 287.992 312.086 238.343 312.259V311.522C287.666 311.35 336.974 309.548 386.23 308.032C405.245 307.447 424.26 306.866 443.282 306.302C407.196 298.236 373.653 287.649 340.936 275.163C309.85 263.279 281.787 254.839 244.655 255.605C210.706 257.007 176.604 265.868 146.257 275.016C112.661 285.144 77.5674 297.954 53.8917 316.549C46.9808 321.924 40.5891 329.687 43.8648 336.844C44.9168 339.424 45.9688 341.95 47.0207 344.396C50.1633 351.906 70.6032 385.238 44.1778 385.752C34.8633 386.085 26.3811 383.925 17.8789 381.829C19.5634 381.681 20.4022 381.605 22.0867 381.458C28.6115 383.209 35.6223 385.003 42.8129 385.032C64.2115 384.178 44.8103 350.643 42.1937 344.434C41.1417 341.984 40.0898 339.462 39.0378 336.882C35.7555 329.658 42.1538 321.832 49.1246 316.397C72.9201 297.563 108.394 285.098 142.063 274.7C173.588 265.447 208.396 256.245 243.543 254.868C282.625 253.988 312.593 262.323 345.39 274.868C378.353 287.439 412.156 298.064 448.541 306.13C665.81 299.832 884.018 298.998 1100.03 317.125C1143.52 321.011 1186.67 327.115 1227.19 338.064C1293.92 336.128 1360.55 332.777 1426.55 326.079C1439.78 324.707 1453.03 323.347 1466.27 321.988C1504.84 318.022 1543.42 314.048 1581.92 309.784C1874.45 277.15 2167.52 245.287 2458.1 206.17C2498.77 200.66 2539.3 194.791 2579.8 188.814C2676.8 174.526 2772.74 161.072 2872.98 164.473C2963.78 168.173 3051.91 181.358 3136.23 202.878C3218.66 223.91 3296.38 251.467 3373.92 278.741C3397.91 287.173 3421.91 295.589 3446 303.907C3524.65 330.963 3603.66 358.267 3677.24 390.648C3726.46 412.311 3787.02 439.194 3809.59 476.063C3813.82 483.64 3816.71 491.302 3818.94 499.203C3819.24 500.231 3819.39 500.744 3819.69 501.776C3821.47 507.678 3822.4 513.685 3822.41 519.696V519.675L3822.4 519.671ZM1229.72 338.742C1282.87 353.716 1326.89 375.939 1370.24 400.082C1378.02 404.418 1385.84 408.737 1393.69 413.022C1438.31 437.253 1485.9 458.681 1539.23 474.631C1620.43 498.913 1709.12 511.247 1797.63 519.111C1825.82 521.405 1854.38 522.854 1882.71 520.631C1911.58 518.374 1939.6 511.778 1959.55 497.974C1975.48 486.957 1984.66 472.985 1993.46 459.346C2002.87 444.7 2012.93 429.002 2033.49 419.135C2063.43 404.485 2089.49 387.659 2114.86 369.961C2141.92 351.106 2169.59 332.47 2205.55 320.358C2256.36 303.246 2315.48 299.786 2372.08 299.226C2479.82 298.388 2587.79 321.007 2687.78 344.114C2813.61 373.19 2935.62 408.539 3057.59 443.438C3082.18 450.472 3106.76 457.511 3131.35 464.545C3246.11 497.393 3360.69 530.675 3477.23 560.956C3518.61 571.703 3560.27 582.227 3602.89 590.87C3626.74 595.707 3654.2 602.105 3679.71 600.792C3720.29 598.515 3762.28 589.14 3789.51 569.177C3814.93 550.541 3821.93 525.565 3814.83 501.78C3814.54 500.753 3814.4 500.235 3814.11 499.208C3811.91 491.323 3808.99 483.67 3804.82 476.105C3782.31 439.291 3721.8 412.45 3672.66 390.829C3599.16 358.49 3520.23 331.219 3441.67 304.185C3417.55 295.875 3393.52 287.451 3369.51 279.011C3292.28 251.841 3214.87 224.415 3132.81 203.4C3049.24 181.998 2961.88 168.843 2871.85 165.168C2773.2 161.825 2678.63 175.267 2583.19 189.327C2542.62 195.313 2502.02 201.203 2461.29 206.713C2170.59 245.864 1877.39 277.735 1584.75 310.373C1546.22 314.646 1507.6 318.624 1468.99 322.594C1455.74 323.954 1442.5 325.313 1429.25 326.686C1363.19 333.383 1296.5 336.78 1229.7 338.738V338.73L1229.72 338.742ZM451.624 306.791C539.303 325.246 633.086 330.803 724.873 333.59C890.416 338.363 1056.36 342.464 1222.05 338.191C1182.38 327.54 1140.16 321.571 1097.62 317.765C883.405 299.79 667.022 300.585 451.564 306.782C451.591 306.782 451.604 306.786 451.624 306.791Z" fill="url(#paint17_linear_1779_1730)" style=""/>
<path d="M3854.32 513.108C3854.29 565.228 3778.85 595.273 3703.85 599.516C3677.43 601.023 3649.14 594.983 3624.27 590.205C3580.94 581.882 3538.56 571.539 3496.52 560.93C3375.16 530.313 3255.94 496.311 3136.5 462.844C3114.94 456.803 3093.39 450.762 3071.83 444.721C2954.24 411.734 2836.61 378.334 2715.45 350.845C2618.67 328.887 2514.6 307.523 2410.62 308.024C2355.86 308.411 2299.13 311.678 2249.5 327.511C2213.97 338.847 2185.78 356.334 2158.12 374.062C2131.78 390.963 2104.79 406.998 2074.27 420.882C2053.76 430.046 2042.64 444.806 2032.27 458.769C2022.41 471.891 2012.15 485.151 1995.68 495.528C1974.32 508.978 1946.39 514.661 1917.16 517.263C1887.27 519.566 1857.06 518.097 1827.32 515.655C1738.05 507.686 1648.84 495.267 1566.4 471.605C1511.52 455.852 1461.86 434.791 1414.86 411.098C1406.6 406.914 1398.38 402.692 1390.18 398.461C1349.42 377.446 1308.22 357.538 1260.61 343.066C1092.17 347.246 923.627 342.855 755.388 337.496C658.395 334.259 557.354 328.214 466.486 304.9C448.316 305.363 430.14 305.852 411.971 306.344C363.807 307.641 315.59 309.194 267.367 309.219V308.483C315.317 308.458 363.268 306.904 411.165 305.62C428.735 305.145 446.313 304.677 463.883 304.218C432.797 295.854 404.467 285.292 376.824 273.092C347.495 260.101 321.35 251.298 284.624 251.896C250.882 253.188 216.873 262.445 186.899 271.682C152.244 282.357 116.751 295.799 91.8168 314.755C85.1056 320.754 81.7367 326.378 79.999 333.661C79.7992 334.461 79.6994 334.857 79.5063 335.656C77.2759 345.276 76.4969 354.819 76.6634 364.535C76.8298 372.007 79.2999 386.644 61.9959 386.985C52.3485 387.221 42.9741 385.158 34.1523 382.902C35.8102 382.75 36.6424 382.675 38.3003 382.523C45.5108 384.232 52.8878 386.207 60.6976 386.274C74.7459 385.474 71.9029 370.408 71.7764 364.531C71.6898 354.806 72.3956 345.25 74.6194 335.614C74.8191 334.814 74.919 334.419 75.112 333.619C76.8564 326.29 80.3053 320.636 87.0564 314.6C111.711 295.849 146.745 282.425 180.933 271.736C212.492 261.869 247.999 252.502 283.579 251.163C322.302 250.448 350.391 259.09 381.404 272.839C409.208 285.123 437.704 295.719 469.023 304.084C685.612 298.59 903.001 298.506 1118.23 316.789C1168.15 321.293 1217.34 328.82 1263.26 342.245C1333.48 340.304 1403.65 336.915 1473.03 329.632C1485.34 328.315 1497.66 327.001 1509.97 325.692C1550.11 321.419 1590.25 317.121 1630.31 312.516C1877.5 283.911 2124.66 254.914 2370.56 222.15C2417.87 215.848 2465.13 209.374 2512.29 202.626C2553.85 196.648 2595.24 190.266 2636.61 183.787C2733.54 168.607 2829.33 154.311 2929.91 157.611C3021.24 161.261 3109.64 174.926 3193.93 197.389C3276.43 219.376 3353.76 248.2 3430.91 276.708C3453.85 285.182 3476.79 293.648 3499.83 302.004C3575.34 329.333 3651.24 356.911 3721.47 389.507C3768.13 411.166 3826.11 438.44 3845.18 474.728C3848.71 482.268 3850.95 489.849 3852.42 497.65C3852.64 498.749 3852.74 499.3 3852.96 500.399C3853.92 504.554 3854.34 508.924 3854.34 513.095L3854.32 513.108ZM1265.6 342.927C1313.06 357.412 1354.15 377.278 1394.8 398.246C1403.01 402.477 1411.22 406.699 1419.49 410.884C1466.3 434.483 1515.75 455.469 1570.38 471.171C1652.31 494.716 1740.98 507.092 1829.73 515.011C1857.97 517.326 1886.59 518.787 1914.99 516.61C1943.6 514.059 1970.62 508.368 1991.4 495.158C2007.61 484.848 2017.73 471.668 2027.48 458.693C2037.95 444.671 2049.11 429.857 2069.74 420.655C2100.23 406.796 2127.14 390.77 2153.47 373.91C2181.43 355.998 2209.93 338.346 2245.9 326.955C2296.63 310.895 2354.68 307.687 2410.55 307.304C2515.58 306.803 2620.6 328.113 2718.4 350.247C2840.04 377.77 2958.08 411.288 3076.09 444.393C3097.65 450.434 3119.2 456.475 3140.76 462.516C3258.21 495.423 3375.48 528.764 3494.69 559.061C3536.68 569.733 3578.97 580.16 3622.16 588.752C3646.99 593.69 3675.61 600.232 3702.11 598.847C3785.57 594.128 3860.35 557.714 3848.13 500.449C3847.9 499.347 3847.79 498.795 3847.56 497.688C3846.05 489.904 3843.84 482.331 3840.33 474.804C3821.3 438.571 3763.37 411.343 3716.78 389.722C3646.62 357.164 3570.79 329.616 3495.36 302.316C3472.3 293.955 3449.33 285.489 3426.38 277.011C3349.53 248.612 3272.49 219.881 3190.34 197.94C3106.84 175.633 3019.24 161.973 2928.69 158.352C2829.77 155.106 2735.37 169.398 2640.05 184.33C2598.65 190.817 2557.21 197.199 2515.62 203.19C2468.42 209.942 2421.13 216.417 2373.78 222.727C2127.78 255.499 1880.53 284.509 1633.25 313.13C1593.15 317.744 1552.97 322.038 1512.78 326.328C1500.49 327.637 1488.19 328.95 1475.9 330.268C1406.38 337.559 1336.07 340.994 1265.71 342.964C1265.66 342.956 1265.64 342.952 1265.59 342.943L1265.6 342.927ZM471.666 304.766C561.308 327.578 660.758 333.577 756.36 336.764C923.487 342.093 1090.91 346.454 1258.24 342.371C1213.11 329.232 1164.83 321.853 1115.8 317.424C902.255 299.289 686.578 299.36 471.673 304.766H471.666Z" fill="url(#paint18_linear_1779_1730)" style=""/>
<path d="M3886.81 506.966C3886.82 562.841 3805.95 593 3726.38 597.55C3699.3 599.108 3670.28 593.071 3644.71 588.289C3600.31 579.979 3556.85 569.615 3513.73 558.985C3389.4 528.335 3267.21 494.24 3144.8 460.685C3140.84 459.603 3138.85 459.064 3134.89 457.982C3120.3 453.983 3105.72 449.979 3091.14 445.967C2977.38 414.702 2863.58 383.062 2746.47 357.059C2651.77 336.031 2550.52 315.926 2449.13 316.09C2395.11 316.3 2339.39 319.323 2289.88 334.107C2254.32 344.728 2225.31 361.251 2196.78 378.027C2169.5 394.091 2141.67 409.318 2110.59 422.406C2089.89 430.72 2077.83 444.953 2066.35 458.129C2055.62 470.548 2044.43 483.084 2027.74 492.741C2005.97 505.337 1978.31 510.755 1949.59 513.251C1919.58 515.499 1889.28 514.03 1859.43 511.559C1769.92 503.535 1680.72 491.074 1597.58 468.144C1541.34 452.636 1489.82 432.033 1440.65 408.977C1431.97 404.893 1423.34 400.772 1414.73 396.63C1376.81 378.482 1338.62 360.944 1296.11 347.275C1126.28 351.19 956.384 346.56 786.806 340.679C687.057 337.058 580.589 330.676 489.302 302.762C471.812 303.145 454.322 303.541 436.831 303.936C390.066 305.01 343.247 306.319 296.435 306.205C296.482 305.911 296.508 305.763 296.555 305.469C343.094 305.591 389.646 304.282 436.152 303.208C453.123 302.821 470.101 302.433 487.072 302.063C460.32 293.475 436.259 282.972 413.009 271.038C385.498 256.91 361.197 247.762 324.711 248.208C291.408 249.379 257.752 258.749 228.291 267.952C192.232 279.213 156.292 293.484 129.926 312.979C122.929 318.969 118.881 324.774 116.191 332.036C115.818 333 115.632 333.484 115.259 334.448C112.11 342.914 109.819 351.392 107.895 360.001C105.598 370.732 104.38 387.31 82.2822 388.219C71.3831 388.732 60.6106 386.257 50.5371 383.992C52.1683 383.832 52.9872 383.756 54.6251 383.597C63.074 385.487 71.8625 387.663 80.9839 387.499C100.072 386.489 101.177 368.863 103.015 359.972C104.939 351.354 107.229 342.872 110.379 334.402C110.752 333.442 110.938 332.962 111.311 332.002C114.014 324.682 118.089 318.86 125.173 312.84C151.032 293.715 186.559 279.688 221.759 268.461C252.945 258.514 288.359 248.726 323.733 247.493C362.002 246.903 388.654 255.929 417.596 270.831C440.979 282.82 465.174 293.353 492.092 301.949C707.144 297.348 922.841 298.085 1136.41 316.452C1192.65 321.583 1247.74 330.546 1298.9 346.459C1372.75 344.547 1446.62 341.1 1519.55 333.194C1530.83 331.944 1542.12 330.693 1553.4 329.451C1595.2 324.838 1636.99 320.219 1678.69 315.244C1975.52 279.688 2272.65 243.628 2566.49 199.085C2608.79 192.644 2650.89 185.766 2692.97 178.799C2789.94 162.73 2885.72 147.546 2986.77 150.762C3078.86 154.37 3167.77 168.578 3252.16 192.063C3334.96 215.103 3412.08 245.337 3489.01 275.201C3510.51 283.549 3532.02 291.884 3553.62 300.131C3626.7 327.991 3700.42 355.989 3767.86 389.191C3811.66 410.758 3865.17 438.024 3880.69 473.423C3883.58 480.937 3885.14 488.456 3885.95 496.164C3886.1 497.33 3886.18 497.911 3886.33 499.077C3886.69 501.742 3886.82 504.381 3886.82 506.97L3886.81 506.966ZM1301.13 347.145C1343.48 360.814 1381.57 378.288 1419.37 396.402C1428.01 400.528 1436.64 404.649 1445.3 408.75C1494.27 431.718 1545.57 452.244 1601.57 467.706C1684.21 490.527 1772.87 502.933 1861.85 510.915C1890.19 513.255 1918.91 514.725 1947.42 512.578C1975.47 510.132 2002.27 504.71 2023.41 492.346C2039.84 482.735 2050.89 470.308 2061.52 458.024C2073.03 444.759 2085.19 430.497 2106.01 422.141C2137.04 409.082 2164.81 393.881 2192.02 377.833C2220.87 360.864 2250.2 344.211 2286.22 333.535C2336.83 318.531 2393.81 315.559 2448.98 315.353C2551.38 315.18 2653.55 335.244 2749.25 356.436C2866.84 382.473 2981.08 414.226 3095.28 445.605C3109.86 449.609 3124.44 453.621 3139.03 457.62C3142.98 458.702 3144.96 459.241 3148.92 460.323C3269.29 493.314 3389.5 526.747 3511.63 557.087C3555.49 567.982 3599.67 578.632 3644.79 587.287C3669.67 592.061 3698.07 598.266 3724.5 596.869C3808.72 592.061 3888.96 557.845 3881.35 499.098C3881.21 497.932 3881.13 497.351 3880.99 496.185C3880.19 488.486 3878.64 480.984 3875.73 473.482C3860.19 438.142 3806.74 410.918 3762.99 389.385C3695.62 356.221 3621.98 328.247 3548.96 300.417C3527.34 292.174 3505.82 283.827 3484.29 275.479C3407.68 245.729 3330.87 215.613 3248.44 192.611C3164.82 169.276 3076.75 155.073 2985.45 151.495C2886.06 148.346 2791.67 163.501 2696.31 179.304C2654.19 186.279 2612.04 193.158 2569.71 199.607C2275.72 244.171 1978.45 280.248 1681.48 315.82C1639.72 320.792 1597.86 325.423 1555.99 330.037C1544.71 331.278 1533.42 332.529 1522.14 333.779C1449.01 341.71 1374.94 345.196 1300.87 347.136H1301.11L1301.13 347.145ZM494.382 302.64C584.464 330.074 689.494 336.368 787.865 339.942C956.344 345.789 1125.15 350.403 1293.89 346.56C1243.53 330.95 1189.33 322.122 1134 317.075C921.976 298.847 707.869 298.11 494.382 302.631V302.64Z" fill="url(#paint19_linear_1779_1730)" style=""/>
<path d="M3919.68 500.424C3919.71 559.987 3832.97 590.731 3748.77 595.585C3723.55 597.033 3696.89 592.053 3672.9 587.843C3630.74 580.446 3589.47 570.991 3548.53 561.28C3418.43 530.414 3290.61 495.621 3162.69 461.354C3145.46 456.732 3128.24 452.101 3111.01 447.466C3000.93 417.855 2890.8 387.924 2777.6 363.331C2684.95 343.2 2586.36 324.282 2487.48 324.134C2434.15 324.177 2379.52 326.972 2330.14 340.704C2294.56 350.601 2264.75 366.181 2235.4 381.988C2207.19 397.207 2178.5 411.612 2146.85 423.913C2126.12 431.596 2112.84 444.94 2100.44 457.489C2088.81 469.226 2076.73 480.942 2059.79 489.934C2037.59 501.717 2010.44 506.836 1982.15 509.235C1952.01 511.433 1921.59 509.951 1891.63 507.459C1801.9 499.376 1712.66 486.903 1628.83 464.684C1571.21 449.411 1517.83 429.272 1466.54 406.851C1457.43 402.856 1448.37 398.831 1439.31 394.799C1404.43 379.269 1369.38 364.076 1331.58 351.485C1160.4 355.076 989.008 350.214 818.131 343.844C716.451 339.87 604.498 333.236 514.13 300.552C496.639 300.855 479.149 301.179 461.658 301.507C416.265 302.358 370.824 303.44 325.41 303.17C325.484 302.875 325.523 302.728 325.597 302.433C370.771 302.694 415.965 301.617 461.106 300.771C478.144 300.455 495.181 300.139 512.219 299.836C489.129 291.071 468.729 280.631 449.168 268.983C423.728 253.845 400.685 244.188 364.586 244.521C330.191 245.624 295.623 255.811 265.575 265.687C229.909 277.411 194.522 291.964 167.817 311.198C160.48 317.197 155.832 323.166 152.224 330.407C151.731 331.363 151.292 332.297 150.799 333.232C147.111 340.514 143.808 347.844 140.772 355.248C135.286 368.724 129.687 388.492 102.283 389.431C90.0453 390.008 78.041 387.512 66.6426 385.066C68.2538 384.902 69.0527 384.822 70.664 384.657C80.278 386.741 90.6777 389.145 101.044 388.724C125.505 388.354 131.318 366.543 135.945 355.215C138.974 347.806 142.244 340.464 145.972 333.181C146.465 332.255 146.964 331.308 147.397 330.356C150.952 323.065 155.679 317.079 163.05 311.055C190.147 291.526 225.974 276.75 262.266 264.955C293.172 254.91 328.466 244.912 363.713 243.801C401.863 243.363 426.837 252.696 453.809 268.802C473.476 280.509 493.989 290.975 517.232 299.752C730.047 296.115 943.327 297.723 1154.56 316.107C1217.22 321.874 1278.2 332.407 1334.68 350.761C1412.15 349.026 1489.61 345.457 1565.98 336.751C1576.04 335.602 1586.11 334.452 1596.17 333.299C1639.83 328.323 1683.48 323.339 1727.03 317.976C2026.04 280.968 2325.23 242.845 2620.66 195.553C2663.55 188.662 2706.23 181.316 2748.87 173.861C2845.99 156.879 2941.92 140.802 3043.58 143.934C3136.68 147.508 3226.32 162.322 3311.01 186.944C3394.28 211.159 3471.34 242.921 3548.18 274.271C3567.87 282.298 3587.56 290.318 3607.33 298.262C3677.19 326.319 3747.72 354.537 3811.66 387.907C3853.24 409.613 3903.84 437.182 3916.17 472.122C3918.64 479.557 3919.28 487.155 3919.43 494.733C3919.48 495.937 3919.52 496.543 3919.57 497.747V500.433C3919.62 500.433 3919.64 500.437 3919.69 500.441L3919.68 500.424ZM1336.65 351.359C1374.28 363.946 1409.2 379.046 1443.94 394.542C1452.99 398.575 1462.05 402.608 1471.16 406.594C1522.25 428.927 1575.4 449.003 1632.78 464.229C1716.14 486.343 1804.87 498.766 1894.1 506.806C1922.58 509.168 1951.43 510.645 1980.08 508.553C2007.69 506.204 2034.01 501.085 2055.56 489.521C2072.24 480.575 2084.17 468.969 2095.68 457.363C2108.17 444.742 2121.55 431.356 2142.39 423.627C2173.96 411.347 2202.62 396.975 2230.75 381.778C2260.47 365.764 2290.62 350.092 2326.7 340.115C2377.18 326.155 2433.14 323.427 2487.6 323.389C2586.2 323.537 2684.14 341.681 2776.66 361.651C2891.7 386.484 3003.49 417.022 3115.28 447.087C3132.5 451.726 3149.72 456.353 3166.95 460.975C3286.54 493.011 3405.98 525.426 3527.28 554.818C3572.04 565.666 3617.12 576.245 3663.08 584.917C3689.28 589.859 3719.24 596.351 3747.03 594.877C3831.34 590.032 3917.47 557.171 3914.78 497.73C3914.74 496.526 3914.71 495.92 3914.66 494.716C3914.51 487.143 3913.9 479.553 3911.38 472.131C3899.06 437.245 3848.5 409.718 3806.97 388.05C3743.1 354.722 3672.65 326.534 3602.87 298.502C3583.1 290.558 3563.41 282.534 3543.72 274.511C3467.98 243.616 3391.96 212.472 3309.99 188.477C3225.39 163.711 3135.78 148.228 3042.58 144.629C2942.6 141.564 2848.07 157.624 2752.57 174.32C2709.89 181.783 2667.16 189.129 2624.24 196.042C2328.67 243.359 2029.33 281.511 1730.19 318.531C1686.6 323.895 1642.9 328.891 1599.2 333.872C1589.13 335.021 1579.06 336.17 1568.99 337.323C1492.39 346.075 1414.41 349.485 1336.72 351.35C1336.69 351.35 1336.68 351.354 1336.66 351.359H1336.65ZM519.256 300.455C608.593 332.592 718.935 339.193 819.357 343.116C989.134 349.426 1159.62 354.263 1329.71 350.849C1274.01 332.819 1213.93 322.413 1152.19 316.734C942.415 298.472 730.599 296.856 519.256 300.447V300.455Z" fill="url(#paint20_linear_1779_1730)" style=""/>
<path d="M3953.39 484.562C3953.39 487.521 3953.27 490.443 3953.07 493.327C3953.02 494.556 3952.99 495.171 3952.95 496.4C3950.22 557.739 3857.6 588.601 3771.21 593.614C3745.7 595.084 3718.8 590.263 3694.43 586.138C3651.53 578.88 3609.51 569.539 3567.81 559.928C3440.6 530.608 3315.59 497.448 3190.51 464.743C3170.84 459.599 3151.19 454.425 3131.54 449.259C3025.03 421.24 2918.46 392.913 2809.02 369.7C2718.32 350.462 2622.36 332.651 2525.89 332.205C2473.31 332.078 2419.6 334.612 2370.44 347.338C2334.77 356.574 2304.2 371.127 2274.01 385.988C2244.86 400.334 2215.28 413.906 2183.1 425.437C2162.29 432.543 2147.99 445.016 2134.47 456.875C2121.93 467.892 2108.98 478.82 2091.84 487.172C2069.38 498.122 2042.49 502.95 2014.75 505.236C1984.44 507.379 1953.89 505.884 1923.78 503.363C1833.84 495.217 1744.55 482.739 1660.08 461.228C1601.05 446.195 1545.83 426.514 1492.44 404.733C1482.92 400.827 1473.41 396.895 1463.91 392.963C1432.48 379.9 1400.91 367.061 1367.76 355.796C1194.97 359.189 1022.03 353.914 849.605 347.035C746.746 342.737 629.067 335.909 540.902 298.333C522.853 298.569 504.81 298.822 486.76 299.078C442.704 299.714 398.602 300.56 354.533 300.156C354.66 299.861 354.72 299.714 354.84 299.419C398.642 299.811 442.478 298.977 486.267 298.342C503.924 298.085 521.574 297.832 539.231 297.605C519.311 288.647 502.093 278.299 485.582 266.95C462.119 250.705 440.694 240.656 404.588 240.85C370.379 241.843 335.964 252.258 306.257 262.21C269.538 274.511 233.771 289.804 205.841 309.438C198.191 315.458 192.885 321.571 188.517 328.79C187.838 329.885 187.153 330.975 186.473 332.04C182.652 338.115 179.017 344.223 175.461 350.361C166.007 366.901 155.76 389.478 122.557 390.669C108.915 391.174 95.8255 388.838 83.0156 386.16C84.6268 385.992 85.4258 385.912 87.037 385.743C97.9894 388.017 109.661 390.458 121.379 389.957C151.932 388.85 162.239 365.137 170.694 350.302C174.196 344.147 177.878 338.048 181.706 331.973C182.385 330.904 183.071 329.818 183.75 328.723C188.125 321.47 193.451 315.332 201.141 309.287C227.653 290.663 261.975 276.064 296.423 263.969C328.867 252.582 366.171 241.195 403.909 240.121C441.999 239.288 465.694 249.69 490.349 266.786C506.9 278.202 524.198 288.571 544.245 297.538C754.223 294.877 964.541 297.424 1172.85 315.774C1241.99 322.194 1308.64 334.419 1370.67 354.983C1451.66 353.165 1532.74 349.498 1612.55 340.304C1621.42 339.26 1630.29 338.216 1639.15 337.176C1684.65 331.83 1730.14 326.471 1775.52 320.712C2076.71 282.273 2377.97 242.071 2674.95 192.009C2718.32 184.667 2761.49 176.866 2804.59 168.935C2901.98 151.044 2998.14 134.024 3100.54 137.081C3195.86 140.68 3287.32 156.891 3373.2 183.093C3456.23 208.431 3532.66 241.355 3608.78 274.005C3626.23 281.486 3643.69 288.958 3661.2 296.38C3727.84 324.606 3795.15 353.017 3855.56 386.518C3894.94 408.358 3942.66 436.411 3951.84 470.805C3953.07 475.284 3953.54 480.045 3953.45 484.587C3953.43 484.579 3953.42 484.575 3953.39 484.566L3953.39 484.562ZM1372.77 355.682C1405.78 366.901 1437.2 379.698 1468.5 392.698C1477.96 396.642 1487.44 400.57 1496.96 404.468C1550.14 426.169 1605.14 445.787 1663.94 460.773C1747.94 482.188 1836.74 494.619 1926.2 502.723C1954.86 505.118 1983.85 506.604 2012.69 504.562C2039.76 502.327 2065.85 497.507 2087.68 486.764C2104.55 478.462 2117.32 467.639 2129.69 456.749C2143.27 444.793 2157.71 432.303 2178.64 425.138C2210.75 413.624 2240.3 400.107 2269.35 385.765C2299.92 370.74 2330.91 355.989 2367.07 346.724C2417.4 333.829 2472.33 331.316 2526.09 331.455C2622.27 331.91 2717.71 348.98 2808.25 368.096C2919.43 391.57 3027.6 420.427 3135.75 448.876C3155.4 454.054 3175.05 459.215 3194.71 464.36C3309.77 494.459 3424.76 524.798 3541.44 552.338C3587.31 563.166 3633.46 573.707 3680.46 582.425C3708.13 587.557 3740.1 594.599 3769.41 592.924C3855.13 587.957 3945.33 556.923 3948.07 496.391C3948.11 495.162 3948.14 494.547 3948.19 493.318C3948.66 485.804 3948.72 478.26 3946.87 470.809C3937.73 436.47 3890.05 408.459 3850.73 386.657C3790.38 353.19 3723.14 324.804 3656.56 296.611C3639.06 289.186 3621.59 281.713 3604.14 274.237C3528.31 241.717 3452.18 208.907 3369.5 183.606C3284.45 157.578 3193.91 141.362 3099.43 137.784C2998.6 134.757 2904.11 151.764 2808.23 169.386C2765.08 177.321 2721.88 185.134 2678.48 192.489C2381.33 242.576 2079.91 282.804 1778.56 321.255C1733.12 327.018 1687.55 332.386 1641.99 337.74C1633.12 338.784 1624.25 339.824 1615.39 340.868C1535.29 350.104 1453.93 353.817 1372.65 355.661C1372.69 355.661 1372.72 355.665 1372.77 355.669L1372.77 355.682ZM545.923 298.245C633.155 335.223 749.116 342.047 850.79 346.303C1022.09 353.135 1193.93 358.406 1365.6 355.084C1304.36 334.827 1238.57 322.741 1170.32 316.401C963.396 298.165 754.463 295.622 545.869 298.241H545.929L545.923 298.245Z" fill="url(#paint21_linear_1779_1730)" style=""/>
<path d="M3988.02 477.46C3987.82 482.356 3987.33 487.168 3986.67 492.047C3986.49 493.251 3986.41 493.857 3986.23 495.061C3978.02 556.687 3880.77 586.555 3793.67 591.64C3766.79 593.219 3738.27 588.024 3712.57 583.743C3668.89 576.464 3626.01 567.224 3583.46 557.685C3460.43 530.107 3339.39 498.98 3218.35 468.123C3196.47 462.537 3174.61 456.917 3152.75 451.305C3049.68 424.818 2946.56 398.078 2840.77 376.158C2751.8 357.724 2658.56 341.243 2564.31 340.266C2512.44 339.971 2459.7 342.27 2410.77 353.977C2374.99 362.535 2343.63 376.129 2312.61 390.016C2282.55 403.483 2252.09 416.201 2219.37 426.956C2198.44 433.507 2183.12 445.096 2168.56 456.277C2155.15 466.561 2141.36 476.715 2123.97 484.41C2101.14 494.51 2074.82 499.064 2047.47 501.245C2016.97 503.325 1986.25 501.813 1955.95 499.262C1865.8 491.053 1776.43 478.584 1691.33 457.763C1630.83 442.962 1573.76 423.753 1518.29 402.603C1508.35 398.794 1498.43 394.963 1488.52 391.119C1460.7 380.321 1432.8 369.654 1404 359.917C1229.59 363.074 1055.01 357.635 881.028 350.209C777.583 345.612 653.925 338.57 569.11 296.094C550.008 296.254 530.913 296.443 511.811 296.632C469.114 297.053 426.37 297.681 383.666 297.142C383.839 296.847 383.926 296.7 384.099 296.405C426.576 296.931 469.087 296.321 511.565 295.892C530.294 295.706 549.023 295.53 567.752 295.361C550.601 286.277 536.026 276.039 522.271 264.904C500.906 247.585 481.018 237.116 444.799 237.17C410.837 238.063 376.489 248.949 347.187 258.947C309.516 271.804 273.111 287.687 244.009 307.679C236.053 313.728 230.174 319.971 225.074 327.153C224.148 328.399 223.283 329.628 222.351 330.849C218.775 335.665 215.26 340.498 211.771 345.339C197.676 364.939 182.336 390.235 142.968 391.915C127.974 392.466 113.613 390.113 99.4648 387.263C101.049 387.095 101.842 387.006 103.426 386.838C115.837 389.351 128.613 391.654 141.789 391.203C178.741 389.579 193.901 363.478 206.944 345.263C210.433 340.422 213.948 335.589 217.524 330.773C218.449 329.552 219.315 328.323 220.247 327.077C225.36 319.857 231.299 313.598 239.302 307.527C267.944 287.859 303.771 272.149 340.696 259.343C371.855 248.537 407.974 237.377 444.173 236.451C482.683 236.261 504.201 246.263 527.085 264.782C540.927 275.95 555.561 286.222 572.812 295.332C779.454 293.681 986.31 297.167 1191.2 315.446C1267 322.556 1339.41 336.578 1407.27 359.193C1491.61 357.53 1576.18 353.935 1659.18 343.882C1666.5 342.994 1673.82 342.106 1681.14 341.217C1728.83 335.454 1776.52 329.67 1824.08 323.465C2127.49 283.599 2430.8 241.334 2729.31 188.498C2773.04 180.718 2816.55 172.463 2860 164.09C2957.92 145.218 3054.13 127.238 3157.57 130.257C3254.49 133.839 3347.14 150.884 3433.65 178.496C3517.63 205.299 3594.33 240.096 3670.71 274.553C3685.5 281.225 3700.3 287.893 3715.14 294.528C3778.55 322.893 3842.66 351.464 3899.49 385.083C3936.83 407.171 3981.41 435.628 3987.52 469.521C3988 472.207 3988.18 474.871 3988.18 477.511C3988.11 477.49 3988.08 477.481 3988 477.464L3988.02 477.46ZM1409.03 359.799C1437.61 369.511 1465.35 380.107 1493.01 390.833C1502.91 394.676 1512.81 398.512 1522.75 402.317C1578.02 423.387 1634.87 442.541 1695.14 457.3C1779.79 478.029 1868.69 490.451 1958.36 498.614C1987.24 501.043 2016.43 502.537 2045.5 500.563C2097.18 496.433 2131.52 480.967 2163.79 456.125C2178.46 444.865 2193.9 433.229 2214.98 426.632C2247.65 415.906 2278.02 403.205 2308.03 389.768C2339.46 375.699 2371.24 361.963 2407.53 353.35C2457.61 341.462 2511.61 339.201 2564.64 339.517C2658.6 340.489 2751.31 356.318 2840.1 374.605C2947.58 396.739 3052.26 424.022 3156.91 450.918C3178.77 456.534 3200.64 462.145 3222.51 467.736C3334.54 496.311 3446.55 525.055 3560.13 551.105C3607.32 561.928 3654.81 572.456 3703.16 581.053C3730.87 585.982 3762.65 592.638 3791.89 590.954C3878.27 585.911 3973.33 555.908 3981.42 495.044C3981.59 493.836 3981.67 493.23 3981.85 492.022C3982.84 484.432 3983.37 477.094 3982.53 469.487C3976.41 435.645 3931.89 407.23 3894.59 385.175C3837.81 351.59 3773.76 323.048 3710.4 294.721C3695.56 288.091 3680.77 281.423 3665.98 274.746C3589.89 240.412 3513.5 205.741 3429.9 178.98C3344.2 151.549 3252.47 134.496 3156.41 130.939C3054.73 127.988 2959.91 145.971 2863.68 164.507C2820.17 172.888 2776.6 181.156 2732.82 188.94C2434.13 241.805 2130.66 284.1 1827.08 323.983C1779.48 330.201 1731.75 335.985 1684.02 341.756C1676.69 342.645 1669.38 343.533 1662.05 344.421C1578.77 354.503 1493.65 358.002 1409.04 359.791V359.799H1409.03ZM574.07 296.031C658.067 337.892 779.954 344.926 882.273 349.477C1055.13 356.802 1228.75 362.27 1402.03 359.252C1334.92 336.949 1263.48 323.09 1188.56 316.052C984.958 297.895 779.401 294.406 574.063 296.022V296.031H574.07Z" fill="url(#paint22_linear_1779_1730)" style=""/>
<path d="M4023.11 471.979C4022.79 478.323 4021.8 484.545 4020.27 490.818C4020 491.98 4019.86 492.561 4019.59 493.722C4005.68 556.249 3905.19 584.256 3816.15 589.678C3792.34 591.08 3767.44 587.237 3744.47 583.776C3704.01 577.681 3664.29 569.577 3624.9 561.2C3497.16 534.03 3371.62 502.639 3246.21 471.499C3222.31 465.555 3198.42 459.582 3174.55 453.587C3073.64 428.283 2972.7 402.646 2869.21 381.791C2783.16 364.447 2693.56 349.544 2602.75 348.298C2551.61 347.835 2499.7 349.873 2451.05 360.595C2415.14 368.509 2383.01 381.126 2351.18 394.041C2320.18 406.603 2288.88 418.474 2255.58 428.451C2234.64 435.195 2218.64 444.961 2202.62 455.667C2167.8 479.039 2131.64 493.301 2080.27 497.242C2049.51 499.258 2018.56 497.726 1988.01 495.133C1897.66 486.869 1808.17 474.417 1722.48 454.269C1660.52 439.704 1601.63 420.954 1544.12 400.444C1533.73 396.727 1523.37 392.984 1513.01 389.233C1489.36 380.679 1465.69 372.171 1441.59 364.135C1265.04 367.162 1088.36 361.289 912.302 353.341C840.968 349.986 768.41 344.526 700.386 329.86C663.401 321.882 627.248 310.798 598.406 293.837C577.886 293.913 557.36 294.01 536.84 294.119C495.434 294.343 453.995 294.751 412.596 294.073C412.796 293.778 412.889 293.631 413.089 293.336C454.242 294.006 495.441 293.597 536.594 293.383C556.767 293.273 576.934 293.176 597.108 293.101C582.314 283.907 570.077 273.732 558.618 262.824C539.936 244.963 520.568 232.885 484.555 233.445C451.013 234.236 416.997 245.291 388.208 255.247C349.306 268.705 312.248 285.388 281.788 305.86C273.505 311.947 267.054 318.3 261.248 325.448C260.069 326.85 258.958 328.235 257.779 329.599C254.763 333.101 251.794 336.616 248.871 340.148C230.189 362.371 208.77 391.755 162.983 393.094C146.651 393.704 130.998 391.309 115.525 388.29C117.083 388.118 117.862 388.029 119.427 387.857C133.169 390.547 147.224 392.883 161.752 392.374C205.181 391.153 226.473 360.881 243.984 340.051C246.953 336.532 249.889 333.009 252.892 329.502C254.071 328.138 255.182 326.753 256.361 325.351C262.18 318.182 268.672 311.804 276.967 305.692C306.808 285.607 343.167 269.177 381.131 255.794C411.957 244.929 447.93 233.517 483.943 232.696C522.659 232.654 542.786 243.064 563.332 262.69C574.87 273.635 587.181 283.852 602.068 293.071C804.976 292.444 1007.98 296.885 1209.07 315.05C1291.84 322.88 1370.27 338.839 1444.44 363.335C1531.71 361.601 1619.57 358.052 1705.39 347.368C1712.29 346.509 1715.74 346.08 1722.64 345.221C1772.55 339.02 1822.46 332.807 1872.21 326.126C2134.65 290.684 2396.43 252.591 2655.31 207.774C2698.06 200.374 2740.73 192.767 2783.27 184.878C2827.28 176.681 2871.04 168.001 2914.75 159.186C3013.12 139.379 3109.75 120.393 3214.17 123.34C3313.01 126.914 3407.15 144.906 3494.52 174.105C3579.67 202.563 3656.79 239.461 3733.57 275.959C3745.22 281.507 3756.9 287.047 3768.59 292.566C3828.79 321.032 3889.71 349.742 3942.95 383.449C3978.34 405.866 4019.59 434.728 4022.71 468.115C4022.83 469.39 4022.89 470.666 4022.89 471.933C4022.99 471.954 4023.04 471.963 4023.13 471.979H4023.11ZM1446.72 364.064C1470.59 372.049 1494.07 380.473 1517.51 388.964C1527.84 392.715 1538.2 396.453 1548.56 400.166C1605.87 420.604 1664.56 439.295 1726.3 453.814C1811.55 473.869 1900.59 486.276 1990.48 494.505C2019.6 496.968 2049.03 498.492 2078.35 496.568C2128.64 492.699 2163.79 478.344 2197.83 455.515C2213.55 444.957 2229.99 434.189 2251.23 428.123C2284.45 418.167 2315.68 406.325 2346.6 393.788C2378.55 380.835 2410.84 368.299 2446.88 360.376C2497.04 349.351 2550.42 347.086 2603.13 347.566C2694.81 348.816 2785.24 363.706 2872.15 381.176C2976.07 402.069 3077.39 427.799 3178.7 453.2C3202.58 459.186 3226.46 465.164 3250.36 471.112C3366.59 499.974 3482.89 528.924 3600.91 554.763C3643.76 564.142 3686.89 573.235 3730.75 580.548C3757.16 584.951 3786.69 590.55 3814.35 588.988C3902.68 583.789 4001.04 555.39 4014.76 493.693C4015.04 492.531 4015.18 491.954 4015.45 490.792C4017.19 483.346 4018.91 475.722 4018.11 468.174C4014.99 434.829 3973.74 406.005 3938.39 383.626C3885.19 349.953 3824.32 321.272 3764.18 292.831C3752.49 287.312 3740.81 281.772 3729.15 276.224C3652.65 239.865 3575.81 203.085 3491.02 174.665C3404.52 145.668 3311.3 127.647 3213.34 124.102C3110.98 120.793 3015.13 140.267 2918.82 159.674C2875.07 168.498 2831.25 177.186 2787.21 185.395C2744.64 193.289 2701.95 200.9 2659.17 208.305C2400.13 253.146 2138.19 291.261 1875.58 326.715C1825.77 333.409 1775.81 339.626 1725.85 345.827C1718.94 346.686 1715.49 347.115 1708.58 347.974C1622.45 358.679 1534.31 362.296 1446.72 364.064V364.072L1446.72 364.064ZM603.473 293.842C632.129 310.613 667.948 321.579 704.627 329.481C771.779 343.945 843.372 349.346 913.786 352.66C1088.67 360.561 1264.17 366.408 1439.55 363.466C1366.16 339.294 1288.62 323.482 1206.77 315.728C1006.9 297.685 805.142 293.244 603.473 293.854V293.846V293.842Z" fill="url(#paint23_linear_1779_1730)" style=""/>
<path d="M4058.44 467.193C4058.51 474.754 4056.11 482.297 4053.75 489.673C4053.4 490.763 4053.23 491.306 4052.88 492.396C4033.22 555.327 3928.9 581.684 3838.54 587.717C3813.94 589.165 3788.2 585.3 3764.41 581.823C3723.97 575.913 3684.22 568.108 3644.77 560C3519.74 534.3 3396.78 504.516 3273.98 474.884C3248.24 468.658 3222.53 462.385 3196.82 456.113C3099.15 432.252 3001.47 408.072 2901.41 388.442C2817.13 371.906 2729.7 357.854 2641.04 356.368C2590.57 355.733 2539.6 357.555 2491.18 367.276C2455.07 374.525 2422.17 386.207 2389.52 398.141C2357.64 409.789 2325.5 420.798 2291.64 429.996C2270.48 436.163 2253.51 445.206 2236.5 455.132C2200.13 476.408 2163.15 489.664 2113.11 493.301C2082.04 495.242 2050.89 493.697 2020.05 491.062C1929.5 482.735 1839.87 470.316 1753.6 450.838C1690.13 436.508 1629.39 418.221 1569.85 398.347C1559.03 394.719 1548.22 391.065 1537.42 387.411C1518.3 380.94 1499.17 374.495 1479.87 368.24C1301.05 371.254 1121.9 364.981 943.656 356.545C870.745 352.933 796.109 347.149 727.199 330.845C690.627 322.194 655.367 310.045 628.708 291.682C606.451 291.652 584.2 291.652 561.942 291.661C521.835 291.682 481.688 291.88 441.594 291.063C441.84 290.768 441.966 290.621 442.213 290.326C482.08 291.13 522.001 290.937 561.883 290.912C583.787 290.903 605.692 290.899 627.597 290.933C614.913 281.6 604.633 271.522 595.172 260.795C578.667 242.058 560.837 229.324 524.445 229.77C491.129 230.469 457.32 241.742 428.89 251.749C388.976 265.796 351.358 283.22 319.693 304.101C311.111 310.234 304.107 316.683 297.669 323.794C296.244 325.355 294.819 326.896 293.401 328.407C290.924 331.013 289.686 332.314 287.209 334.92C263.374 360.005 235.657 392.757 183.199 394.331C165.528 394.992 148.577 392.61 131.779 389.389C133.337 389.212 134.116 389.124 135.674 388.947C150.768 391.81 166.121 394.171 182.02 393.607C232.155 392.138 259.825 358.578 282.442 334.798C284.919 332.192 286.157 330.891 288.634 328.285C290.059 326.774 291.477 325.233 292.902 323.671C299.36 316.528 306.424 310.07 315.053 303.915C346.125 283.427 383.07 266.268 422.066 252.3C452.513 241.393 488.292 229.715 524.065 229.012C562.901 228.557 582.183 240.429 600.046 260.677C609.58 271.442 619.887 281.558 632.657 290.92C831.483 291.32 1030.31 296.717 1227.28 314.713C1317.29 323.322 1401.78 341.348 1482.78 367.415C1572.73 365.756 1663.49 362.279 1751.87 350.938C1756.5 350.344 1758.81 350.049 1763.44 349.456C1815.86 342.767 1868.28 336.077 1920.54 328.866C2184.34 292.301 2447.31 252.637 2707.03 205.724C2750.62 197.852 2794.09 189.757 2837.42 181.354C2881.62 172.741 2925.57 163.648 2969.46 154.425C3068.35 133.641 3165.56 113.637 3271.06 116.508C3372.23 120.082 3468.16 139.185 3556.59 170.177C3643.22 200.542 3720.94 239.818 3798.3 278.628C3806.33 282.669 3814.38 286.693 3822.44 290.709C3879.44 319.255 3937.19 348.084 3986.8 381.85C4020.35 404.683 4058.12 433.932 4058.37 466.835V467.184C4058.37 467.184 4058.4 467.197 4058.43 467.205L4058.44 467.193ZM1485.07 368.139C1504.14 374.318 1523.04 380.692 1541.94 387.091C1552.74 390.745 1563.54 394.394 1574.36 398.027C1633.7 417.834 1694.23 436.058 1757.47 450.346C1843.33 469.744 1932.53 482.116 2022.65 490.409C2052.06 492.927 2081.8 494.455 2111.44 492.603C2160.46 488.995 2196.39 475.713 2231.99 454.926C2249.16 444.928 2266.28 435.826 2287.61 429.609C2321.37 420.44 2353.42 409.474 2385.19 397.838C2417.96 385.861 2451.01 374.281 2487.25 366.989C2537.1 356.958 2589.67 354.971 2641.66 355.623C2731.13 357.122 2819.38 371.161 2904.46 387.827C3004.92 407.504 3102.99 431.756 3201.03 455.709C3226.74 461.985 3252.44 468.271 3278.2 474.484C3391.5 501.83 3504.92 529.181 3619.93 553.551C3664.11 562.913 3708.59 571.968 3753.8 579.158C3780.16 583.351 3809.4 588.58 3836.88 587.022C3926.48 581.549 4028.83 554.224 4048.2 492.35C4048.54 491.26 4048.72 490.717 4049.06 489.626C4051.48 482.158 4053.88 474.505 4053.76 466.843C4053.54 433.987 4015.78 404.776 3982.28 381.984C3932.71 348.256 3875.01 319.458 3818.08 290.937C3810.03 286.908 3801.98 282.879 3793.94 278.855C3716.85 240.189 3639.42 201.03 3553.16 170.708C3465.63 139.935 3370.66 120.802 3270.4 117.249C3166.98 114.003 3070.53 134.53 2973.7 154.871C2929.78 164.115 2885.79 173.217 2841.54 181.83C2798.18 190.241 2754.67 198.34 2711.06 206.221C2451.18 253.163 2188.05 292.848 1924.09 329.439C1871.77 336.65 1819.29 343.352 1766.8 350.045C1762.18 350.639 1759.87 350.934 1755.24 351.527C1666.55 362.906 1575.47 366.455 1485.2 368.147C1485.15 368.147 1485.13 368.143 1485.08 368.139H1485.07ZM633.842 291.682C660.327 309.843 695.268 321.866 731.527 330.436C799.565 346.522 873.228 352.26 945.201 355.825C1122.26 364.207 1300.21 370.445 1477.83 367.52C1397.63 341.769 1314.01 323.89 1224.94 315.366C1029.16 297.466 831.529 292.09 633.902 291.678H633.842V291.682Z" fill="url(#paint24_linear_1779_1730)" style=""/>
<path d="M4094.17 462.381C4094.17 463.438 4094.17 464.478 4094.03 465.53C4092.95 473.411 4090.4 480.942 4087.24 488.595C4086.85 489.58 4086.65 490.068 4086.26 491.053C4060.7 554.473 3953.87 579.571 3861.08 585.742C3835.97 587.258 3809.64 583.427 3785.3 580.009C3744.56 574.283 3704.45 566.714 3664.64 558.821C3542.38 534.582 3422.04 506.406 3301.91 478.273C3274.53 471.845 3247.19 465.357 3219.85 458.853C3125.32 436.382 3030.75 413.624 2934.02 395.156C2851.47 379.395 2766.16 366.177 2679.61 364.417C2629.82 363.617 2579.68 365.196 2531.57 373.948C2495.22 380.557 2461.55 391.288 2428.1 402.25C2395.39 412.989 2362.43 423.1 2328.04 431.516C2306.61 437.123 2288.68 445.467 2270.67 454.581C2232.94 473.768 2195.26 485.989 2146.43 489.357C2115.02 491.213 2083.55 489.643 2052.38 486.957C1961.63 478.563 1871.84 466.191 1785 447.365C1720 433.271 1657.41 415.464 1595.86 396.217C1584.58 392.685 1573.33 389.12 1562.08 385.546C1548.12 381.121 1534.15 376.705 1520.12 372.348C1477.29 373.022 1434.45 373.144 1391.61 372.87C1252.6 371.877 1113.74 366.61 975.179 359.719C900.916 355.863 824.303 349.767 754.794 331.809C718.654 322.472 684.346 309.257 660.105 289.56C635.85 289.396 611.595 289.274 587.34 289.165C548.484 288.988 509.595 288.975 470.766 288.041C471.065 287.75 471.212 287.603 471.512 287.312C510.134 288.238 548.824 288.251 587.466 288.428C611.368 288.537 635.277 288.651 659.179 288.815C648.333 279.335 639.838 269.375 632.081 258.775C617.7 239.124 601.754 225.754 564.636 226.095C531.593 226.697 497.997 238.215 469.967 248.246C428.907 262.938 391.05 281.158 357.847 302.341C348.959 308.521 341.442 315.042 334.398 322.11C332.667 323.84 330.929 325.541 329.198 327.224C328.186 328.184 327.68 328.664 326.661 329.624C296.927 358.01 263.444 393.329 203.589 395.577C184.554 396.293 166.298 393.881 148.148 390.492C149.686 390.315 150.452 390.227 151.983 390.046C168.402 393.119 185.107 395.493 202.351 394.858C259.935 392.681 293.365 356.663 321.834 329.51C322.846 328.551 323.352 328.071 324.371 327.107C326.102 325.427 327.84 323.722 329.571 322.004C336.628 314.915 344.165 308.378 353.08 302.181C385.378 281.276 422.988 263.401 463.029 248.848C493.09 237.92 528.677 225.973 564.203 225.366C603.539 225.025 621.355 237.554 636.848 258.699C644.685 269.337 653.234 279.343 664.139 288.866C858.618 290.297 1052.99 296.599 1245.59 314.414C1343.34 323.857 1434.36 344.16 1522.92 371.565C1615.01 369.881 1708.11 366.404 1798.52 354.533C1800.32 354.297 1801.23 354.179 1803.03 353.948C1858.47 346.707 1913.92 339.454 1969.17 331.649C2279.37 287.573 2588.94 239.174 2891.87 177.868C2936.17 168.872 2980.2 159.379 3024.15 149.748C3123.63 127.992 3221.43 106.914 3328.09 109.713C3432.07 113.3 3530.14 133.696 3619.89 166.734C3708.28 199.271 3786.72 241.33 3864.8 282.774C3869.41 285.212 3871.72 286.432 3876.32 288.874C3928.68 316.688 3981.54 344.901 4026.61 377.551C4058.65 400.76 4094.09 430.038 4094.13 462.411C4094.15 462.398 4094.16 462.394 4094.19 462.381H4094.17ZM1525.25 372.251C1539.02 376.537 1552.74 380.873 1566.46 385.222C1577.71 388.796 1588.96 392.361 1600.24 395.893C1661.59 415.077 1723.96 432.829 1788.75 446.885C1875.17 465.635 1964.53 477.961 2054.85 486.318C2084.61 488.885 2114.69 490.439 2144.69 488.662C2192.38 485.332 2229.2 473.108 2266.02 454.358C2284.21 445.159 2302.3 436.761 2323.94 431.103C2358.23 422.717 2391.08 412.627 2423.69 401.921C2457.28 390.913 2491.11 380.267 2527.59 373.615C2577.15 364.581 2628.87 362.847 2680.17 363.672C2767.51 365.44 2853.6 378.659 2936.92 394.533C3034.04 413.039 3128.98 435.877 3223.87 458.441C3251.2 464.945 3278.54 471.428 3305.91 477.856C3420.12 504.604 3534.51 531.286 3650.51 554.776C3692.68 563.313 3735.12 571.539 3778.21 578.009C3804.04 581.89 3832.41 586.593 3859.21 585.052C3950.35 578.956 4056.3 553.184 4081.34 490.995C4081.74 490.009 4081.94 489.521 4082.33 488.536C4085.5 480.9 4088.03 473.381 4089.08 465.509C4091.66 432.838 4056.06 402.751 4024.1 379.349C3978.55 345.996 3924.79 317.311 3871.58 289.034C3866.98 286.597 3864.67 285.376 3860.07 282.938C3782.25 241.629 3704.08 199.738 3616.07 167.214C3527.23 134.382 3430.12 113.961 3327.07 110.395C3222.51 107.204 3125.41 128.83 3028.03 150.126C2984.02 159.754 2939.95 169.264 2895.61 178.268C2592.49 239.612 2282.74 288.041 1972.36 332.15C1917.07 339.971 1861.58 347.225 1806.1 354.478C1804.29 354.714 1803.38 354.832 1801.57 355.063C1710.88 366.985 1617.5 370.525 1525.12 372.247H1525.24L1525.25 372.251ZM665.105 289.594C689.213 309.076 723.222 322.181 759.048 331.434C827.698 349.165 903.366 355.206 976.716 359.016C1114.86 365.878 1253.31 371.136 1391.91 372.129C1433.9 372.395 1475.89 372.281 1517.88 371.649C1430.16 344.526 1339.97 324.396 1243.16 315.046C1051.71 297.331 858.491 291.05 665.171 289.607C665.145 289.607 665.131 289.602 665.111 289.598L665.105 289.594Z" fill="url(#paint25_linear_1779_1730)" style=""/>
<path d="M4130.16 457.346C4130.16 459.653 4129.98 461.939 4129.6 464.221C4127.81 472.27 4124.48 479.86 4120.63 487.606C4120.21 488.448 4120 488.873 4119.58 489.715C4088.29 552.944 3978.09 577.495 3883.52 583.781C3855.37 585.422 3825.85 580.994 3798.59 577.154C3755.79 571.126 3713.59 563.368 3671.67 555.256C3556.55 532.969 3443.04 507.362 3329.74 481.662C3300.89 475.103 3272.09 468.46 3243.28 461.809C3151.77 440.676 3060.23 419.316 2966.71 401.942C2885.87 386.926 2802.54 374.495 2718.02 372.487C2668.9 371.515 2619.47 372.828 2571.69 380.646C2535.06 386.64 2500.62 396.419 2466.38 406.413C2432.85 416.196 2399.14 425.428 2364.21 433.052C2342.47 438.125 2323.59 445.744 2304.64 454.075C2265.84 471.167 2227.35 482.377 2179.76 485.459C2147.94 487.223 2116.09 485.61 2084.54 482.87C1993.59 474.408 1903.63 462.103 1816.25 443.913C1749.7 430.059 1685.28 412.728 1621.76 394.104C1610.02 390.648 1598.28 387.175 1586.55 383.685C1578.39 381.26 1570.22 378.84 1562.05 376.415C1376.8 379.42 1191.2 372.491 1006.65 362.897C931.206 358.806 852.649 352.428 782.794 332.806C747.067 322.775 713.824 308.445 692.133 287.51C665.694 287.182 639.249 286.912 612.81 286.66C575.172 286.293 537.495 286.07 499.884 285.014C500.231 284.723 500.404 284.576 500.75 284.285C538.174 285.35 575.665 285.557 613.116 285.923C639.189 286.176 665.261 286.445 691.327 286.765C682.126 277.175 675.115 267.219 668.863 256.741C656.739 236.375 642.378 222.171 604.634 222.407C570.339 222.912 535.678 235.419 507.002 246.146C466.675 261.229 428.904 279.545 395.867 300.564C386.686 306.778 378.67 313.337 371.12 320.379C369.076 322.278 366.972 324.16 364.928 326.012C329.834 356.958 290.179 394.302 223.972 396.794C203.659 397.564 183.985 395.148 164.57 391.578C166.108 391.397 166.874 391.304 168.405 391.123C186.175 394.373 204.178 396.764 222.794 396.087C286.757 393.666 326.405 355.678 360.161 325.898C362.265 324.046 364.309 322.173 366.353 320.274C374.043 313.248 381.992 306.652 391.227 300.413C423.291 279.84 460.429 261.995 499.512 247.097C530.438 235.31 567.343 222.209 604.454 221.687C644.342 221.047 660.794 235.028 673.757 256.691C680.075 267.207 687.093 277.213 696.34 286.845C886.205 289.299 1075.88 296.477 1263.87 314.086C1369.86 324.421 1468.04 347.086 1564.83 375.644C1658.47 373.982 1753.22 370.458 1845.07 358.103C1902.67 350.395 1960.26 342.691 2017.65 334.385C2330.2 288.92 2641.77 238.509 2946.16 174.328C2990.46 164.945 3034.5 155.081 3078.46 145.079C3178.23 122.389 3277.39 99.6773 3385.06 102.872C3492.74 106.51 3592.17 128.653 3684.03 163.842C3773.3 198.833 3851.97 242.921 3930.11 286.996C3978.43 314.284 4027.07 341.992 4068.2 373.771C4098.42 397.118 4130.12 425.912 4130.16 457.376V457.338V457.346ZM1567.13 376.318C1575.03 378.654 1582.93 380.995 1590.82 383.331C1602.55 386.813 1614.28 390.294 1626.03 393.746C1689.35 412.311 1753.56 429.592 1819.9 443.408C1906.88 461.527 1996.46 473.794 2087.01 482.217C2117.19 484.844 2147.65 486.419 2178.09 484.743C2224.59 481.699 2262.14 470.506 2300.03 453.81C2319.19 445.403 2338.28 437.733 2360.25 432.61C2395.04 425.016 2428.62 415.801 2462.03 406.068C2496.43 396.028 2531.02 386.303 2567.82 380.292C2617.1 372.243 2668.01 370.753 2718.69 371.75C2803.97 373.78 2888.02 386.223 2969.62 401.336C3063.53 418.731 3155.43 440.188 3247.31 461.4C3276.09 468.052 3304.9 474.694 3333.74 481.253C3444.87 506.465 3556.23 531.521 3669.06 553.551C3711.37 561.81 3753.94 569.741 3797.11 576.018C3824.14 579.946 3853.72 584.724 3881.71 583.111C3975.49 576.868 4083.8 552.271 4114.76 489.681C4115.18 488.839 4115.38 488.414 4115.8 487.572C4119.62 479.839 4122.93 472.244 4124.77 464.225C4130.14 432.059 4098.38 401.593 4068.24 377.619C4026.28 344.257 3975.6 315.488 3925.46 287.182C3848.31 243.674 3770.62 199.725 3682.33 165.302C3591.45 129.874 3491.18 107.217 3384.12 103.588C3278.32 100.452 3180.46 123.201 3082.46 145.483C3038.45 155.49 2994.39 165.374 2950.04 174.757C2645.45 238.981 2333.68 289.421 2020.93 334.916C1963.49 343.221 1905.86 350.942 1848.22 358.65C1756.07 371.043 1661.06 374.638 1567.11 376.347V376.318H1567.13ZM697.086 287.573C718.705 308.302 751.661 322.493 787.108 332.444C856.118 351.817 933.676 358.149 1008.2 362.194C1191.43 371.717 1375.7 378.616 1559.64 375.703C1463.7 347.418 1366.38 324.934 1261.34 314.696C1074.47 297.188 885.899 290.04 697.153 287.577H697.093L697.086 287.573Z" fill="url(#paint26_linear_1779_1730)" style=""/>
<path d="M4166.5 452.274C4166.5 455.856 4166.06 459.401 4165.19 462.907C4162.63 471.142 4158.54 478.871 4153.94 486.738C4153.55 487.391 4153.34 487.719 4152.94 488.372C4115.91 551.336 4002.54 575.382 3906 581.806C3884.28 583.111 3861.88 580.653 3840.6 578.182C3803.95 573.93 3767.8 567.91 3731.94 561.583C3605.65 539.301 3481.43 512.182 3357.6 485.038C3327.45 478.407 3297.35 471.68 3267.26 464.949C3103.29 428.245 2932.23 385.264 2756.4 380.536C2707.48 379.391 2658.45 380.654 2610.61 387.629C2574.01 392.963 2539.15 401.648 2504.46 410.585C2470.21 419.4 2435.82 427.731 2400.44 434.559C2378.31 439.114 2358.48 446.035 2338.57 453.549C2298.93 468.595 2259.73 478.77 2213.26 481.548C2180.98 483.181 2148.72 481.548 2116.73 478.748C1953.38 463.463 1798.79 433.519 1647.65 391.961C1635.41 388.585 1623.18 385.192 1610.96 381.791C1609.48 381.374 1607.93 380.961 1606.44 380.544C1416.83 383.731 1226.83 376.293 1037.99 366.063C961.527 361.74 881.125 355.097 811.15 333.821C775.803 323.074 743.712 307.611 724.65 285.544C695.881 285.026 667.106 284.576 638.33 284.134C601.844 283.587 565.326 283.17 528.873 281.979C529.266 281.688 529.466 281.541 529.865 281.25C566.131 282.437 602.464 282.85 638.769 283.397C667.172 283.827 695.575 284.264 723.971 284.778C716.221 275.07 710.582 265.098 705.655 254.7C695.828 233.921 682.765 218.589 644.582 218.711C610.606 219.123 576.165 231.921 547.928 242.639C506.516 258.362 468.319 277.428 433.831 298.775C424.344 305.035 415.968 311.657 407.779 318.607C405.362 320.695 402.952 322.749 400.475 324.779C360.614 357.463 314.934 395.333 244.113 397.99C222.255 398.469 201.682 396.415 180.689 392.631C182.201 392.445 182.953 392.353 184.464 392.168C203.553 395.611 222.987 398.006 242.941 397.27C311.645 394.672 357.305 356.284 395.714 324.644C398.191 322.611 400.601 320.56 403.018 318.472C411.081 311.518 419.417 304.673 429.131 298.594C462.194 277.76 499.778 259.364 539.533 243.923C570.266 231.984 607.291 218.378 644.462 217.962C661.426 217.73 679.909 219.856 691.74 228.174C702.007 235.39 706.174 245.569 710.482 254.628C715.469 265.077 721.115 275.104 728.925 284.858C913.982 288.331 1098.78 296.325 1281.97 313.699C1396.92 325.01 1503.16 350.235 1609.11 379.736C1703.51 378.01 1799.02 374.318 1891.52 361.597C1949.76 353.636 2007.98 345.642 2066 337.058C2380.87 290.213 2694.56 237.789 3000.34 170.733C3044.58 160.992 3088.55 150.762 3132.46 140.406C3233.32 116.617 3332.59 93.2996 3441.89 95.9686C3549.8 99.5552 3650.1 122.359 3741.43 158.34C3830.22 194.156 3907.74 239.359 3983.86 285.064C4027.73 311.476 4071.59 338.389 4108.48 368.875C4137.15 392.572 4166.36 421.307 4166.4 452.257C4166.45 452.257 4166.48 452.261 4166.52 452.265L4166.5 452.274ZM1611.63 380.456C1612.8 380.789 1613.99 381.109 1615.16 381.441C1627.36 384.843 1639.57 388.231 1651.8 391.603C1802.39 433.014 1956.38 462.886 2119.14 478.117C2149.79 480.799 2180.72 482.419 2211.64 480.849C2257.06 478.1 2295.3 467.959 2334.05 453.276C2354.2 445.66 2374.26 438.693 2396.66 434.096C2431.92 427.297 2466.18 418.992 2500.3 410.21C2535.53 401.143 2570.93 392.344 2608.08 386.947C2657.02 379.837 2707.25 378.625 2757.26 379.799C2934.24 384.561 3106.22 427.584 3271.28 464.524C3301.37 471.259 3331.46 477.982 3361.6 484.613C3469.47 508.263 3577.59 531.66 3687.04 552.233C3730.49 560.4 3774.2 568.221 3818.5 574.363C3845.97 578.173 3875.9 582.77 3904.27 581.12C3999.99 574.747 4111.55 550.633 4148.19 488.313C4148.58 487.66 4148.78 487.332 4149.17 486.675C4153.77 478.82 4157.87 471.104 4160.44 462.882C4168.53 430.893 4139.36 399.547 4110.73 374.781C4072.71 341.887 4025.92 313.282 3979.39 285.271C3903.29 239.599 3825.83 194.408 3737.08 158.622C3646.85 123.087 3547.83 100.267 3441.19 96.7137C3334.06 93.628 3235.38 117.548 3136.68 140.831C3092.77 151.204 3048.79 161.434 3004.52 171.175C2698.54 238.269 2384.65 290.735 2069.56 337.614C2011.51 346.21 1953.24 354.204 1894.96 362.173C1802.2 374.916 1706.46 378.684 1611.81 380.456C1611.73 380.456 1611.7 380.46 1611.63 380.465V380.456ZM729.644 285.637C748.679 307.498 780.497 322.821 815.578 333.484C884.714 354.503 964.097 361.096 1039.64 365.373C1227.11 375.531 1415.72 382.927 1603.95 379.854C1498.89 350.588 1393.46 325.578 1279.48 314.355C1097.35 297.083 913.623 289.114 729.644 285.645V285.637Z" fill="url(#paint27_linear_1779_1730)" style=""/>
<path d="M4203.24 446.464C4202.96 451.676 4202.19 456.462 4200.76 461.598C4197.37 470.06 4192.44 477.97 4187.04 485.998C4186.74 486.419 4186.59 486.629 4186.29 487.046C4143.24 550.158 4028.03 573.24 3928.5 579.845C3906.53 581.162 3883.88 578.809 3862.28 576.435C3825.57 572.398 3789.32 566.664 3753.33 560.606C3629.28 539.726 3507.17 514.148 3385.48 488.427C3354.19 481.796 3322.96 475.048 3291.73 468.283C3131.53 433.608 2965.73 393.839 2794.88 388.594C2746.53 387.276 2698.09 388.257 2650.52 394.323C2613.49 399.046 2577.82 406.83 2542.29 414.82C2507.4 422.663 2472.41 430.072 2436.62 436.096C2414.02 440.141 2393.23 446.346 2372.37 453.082C2332.09 466.128 2292.35 475.246 2246.91 477.717C2214.12 479.212 2181.37 477.532 2148.89 474.665C1984.22 459.169 1827.42 429.546 1673.56 389.852C1666.67 388.067 1659.77 386.287 1652.88 384.493C1605.29 385.276 1557.69 385.369 1510.08 384.965C1362.98 383.613 1216.03 377.514 1069.52 369.254C992.203 364.708 909.97 357.816 840.075 334.895C804.988 323.389 774.308 306.778 757.79 283.688C726.564 282.93 695.338 282.269 664.106 281.617C628.752 280.888 593.365 280.278 558.051 278.96C558.524 278.674 558.757 278.531 559.223 278.24C594.377 279.554 629.598 280.147 664.785 280.88C695.625 281.52 726.457 282.168 757.29 282.913C750.852 273.075 746.391 263.056 742.69 252.683C735.026 231.433 723.714 215.061 684.772 215.032C651.156 215.335 617.147 228.149 589.357 238.85C546.819 255.234 507.83 275.172 472.037 297.016C462.31 303.292 453.528 309.918 444.939 316.822C442.09 319.108 439.307 321.369 436.404 323.592C412.555 341.971 388.201 360.001 358.932 375.055C330.529 388.682 300.455 397.341 264.696 399.236C241.499 399.758 219.628 397.674 197.311 393.725C198.822 393.54 199.574 393.447 201.086 393.262C221.545 396.895 242.238 399.307 263.584 398.516C337.314 395.758 388.347 356.852 431.763 323.44C434.606 321.221 437.456 318.961 440.299 316.671C448.908 309.754 457.723 303.12 467.463 296.83C501.525 275.702 539.462 256.649 579.909 240.631C610.516 228.511 647.547 214.594 684.839 214.287C701.87 214.11 720.139 216.341 731.384 225.076C741.198 232.7 744.241 243.304 747.643 252.629C751.418 263.064 755.899 273.138 762.43 283.031C942.521 287.502 1122.3 296.266 1300.57 313.375C1419.02 325.145 1529.43 350.719 1639.76 379.534C1645.02 380.915 1650.34 382.296 1655.66 383.685C1750.15 381.879 1845.84 378.158 1938.38 365.175C1997.27 356.953 2056.14 348.673 2114.79 339.812C2432.03 291.598 2747.86 237.154 3055.01 167.209C3099.12 157.127 3142.95 146.569 3186.69 135.872C3287.9 111.149 3388.78 86.0464 3499.21 89.1363C3606.29 92.5673 3706.7 114.997 3796.58 151.57C3886.28 188.064 3963.52 235.36 4038.09 283.195C4078.12 308.938 4118.03 335.181 4151.2 364.666C4177.87 388.379 4203.57 416.483 4203.6 446.46C4203.46 446.46 4203.38 446.464 4203.24 446.469L4203.24 446.464ZM1658.01 384.38C1664.54 386.08 1671.07 387.781 1677.62 389.465C1830.96 429.015 1987.19 458.576 2151.3 474.021C2182.46 476.77 2213.88 478.433 2245.35 477.002C2289.71 474.564 2328.56 465.526 2367.85 452.754C2388.99 445.938 2410.05 439.674 2432.95 435.586C2468.58 429.588 2503.42 422.208 2538.14 414.391C2574.24 406.283 2610.46 398.398 2648.09 393.628C2696.72 387.465 2746.24 386.501 2795.67 387.857C2967.87 393.708 3133.91 432.854 3295.53 467.845C3326.75 474.602 3357.97 481.354 3389.26 487.989C3493.42 510.031 3597.88 531.698 3703.51 550.785C3747.89 558.804 3792.51 566.466 3837.69 572.486C3866.19 576.283 3897.18 580.876 3926.53 579.154C4024.42 572.629 4139.02 548.958 4181.34 486.962C4181.64 486.541 4181.79 486.33 4182.08 485.913C4187.52 477.907 4192.43 470.005 4195.83 461.556C4206.53 430.059 4181.55 398.411 4154.77 372.896C4120.29 340.051 4076.51 311.388 4032.96 283.372C3959.12 235.983 3882.72 189.774 3794.44 153.158C3704.43 116.71 3605.18 93.3587 3497.92 89.8688C3389.4 86.8378 3289.83 111.97 3190.4 136.264C3146.62 146.948 3102.79 157.536 3058.66 167.618C2751.33 237.6 2435.32 292.082 2117.89 340.334C2059.2 349.199 2000.29 357.492 1941.36 365.722C1848.64 378.734 1752.77 382.527 1658.08 384.384H1658.02L1658.01 384.38ZM762.603 283.793C779.095 306.677 809.535 323.133 844.356 334.554C913.433 357.206 994.633 364.047 1071.06 368.543C1217.09 376.773 1363.56 382.852 1510.2 384.207C1556.82 384.603 1603.43 384.523 1650.03 383.773C1645.07 382.477 1640.14 381.193 1635.18 379.905C1525.34 351.224 1415.45 325.726 1297.52 314.002C1120.29 296.986 941.576 288.255 762.544 283.789C762.57 283.789 762.583 283.793 762.603 283.797V283.793Z" fill="url(#paint28_linear_1779_1730)" style=""/>
<path d="M4240.3 440.529C4239.97 447.319 4238.69 453.663 4236.23 460.276C4231.96 469.033 4226.14 477.153 4219.77 485.375C4219.67 485.505 4219.62 485.568 4219.53 485.695C4170.78 548.381 4052.7 571.105 3950.86 577.858C3928.93 579.192 3906.34 576.986 3884.74 574.768C3847.68 570.958 3811.05 565.464 3774.67 559.646C3652.84 540.155 3532.81 516.101 3413.22 491.79C3380.93 485.202 3348.71 478.492 3316.49 471.76C3159.69 439.013 2999.36 402.894 2833.18 396.63C2785.32 395.131 2737.44 395.838 2690.14 401.012C2652.55 405.121 2616.03 411.999 2579.61 419.055C2544.21 425.908 2508.74 432.387 2472.64 437.603C2449.51 441.156 2427.75 446.645 2405.93 452.594C2365.21 463.737 2324.97 471.769 2280.45 473.89C2247.03 475.006 2213.99 473.486 2180.9 470.544C2015.89 454.922 1857.72 426.014 1702.14 388.387C1501.54 392.269 1300.44 384.064 1100.78 372.39C1022.73 367.633 938.717 360.498 869.108 335.964C834.207 323.663 805.105 305.902 791.09 281.89C757.354 280.867 723.605 279.949 689.863 279.053C655.554 278.144 621.226 277.348 586.964 275.904C587.483 275.622 587.743 275.479 588.262 275.197C622.378 276.632 656.566 277.424 690.728 278.325C724.045 279.209 757.354 280.114 790.657 281.124C785.411 271.109 782.122 261.018 779.399 250.629C773.859 229.008 764.472 211.466 724.637 211.323C691.394 211.55 657.645 224.647 630.341 235.306C586.771 252.304 546.89 272.928 509.865 295.218C499.931 301.499 490.763 308.104 481.775 314.928C478.493 317.433 475.217 319.908 471.875 322.358C422.526 358.309 365.008 397.434 284.76 400.431C260.332 401.012 236.903 398.895 213.354 394.786C214.838 394.597 215.584 394.504 217.069 394.314C239.073 398.137 260.738 400.204 283.588 399.711C362.258 396.777 418.911 357.362 467.174 322.207C470.517 319.769 473.799 317.29 477.075 314.785C486.083 307.94 495.258 301.326 505.231 295.037C540.904 273.559 579.361 253.71 621.026 237.036C651.12 224.996 687.859 210.797 724.704 210.586C741.701 210.452 760.017 212.792 770.564 221.931C779.871 229.997 781.795 241.035 784.292 250.608C787.069 261.056 790.384 271.206 795.677 281.284C970.655 286.719 1145.26 296.186 1318.47 313.029C1438.24 325.044 1551.01 350.037 1663.69 377.602C1676.94 380.848 1690.2 384.089 1703.47 387.31C1703.89 387.415 1704.33 387.528 1704.82 387.629C1798.38 385.689 1893.09 381.774 1984.63 368.715C2044.14 360.207 2103.64 351.679 2162.9 342.523C2482.49 292.941 2800.45 236.493 3108.92 163.656C3152.82 153.25 3196.43 142.372 3239.97 131.368C3341.98 105.609 3443.87 79.2519 3555.79 82.2871C3666.58 85.7685 3770.08 110.303 3861.65 149.348C3947.83 186.103 4021.48 233.142 4091.58 281.318C4128.72 306.938 4165.46 333.24 4195.31 362.527C4218.87 385.638 4240.35 412.383 4240.38 440.533H4240.33L4240.3 440.529ZM1707.45 388.295C1862.15 425.66 2019.42 454.391 2183.47 469.921C2215.23 472.75 2247.24 474.463 2279.33 473.192C2322.8 471.087 2362.01 463.126 2401.77 452.244C2423.9 446.22 2445.96 440.676 2469.4 437.072C2505.32 431.886 2540.61 425.424 2575.83 418.6C2612.8 411.444 2649.88 404.464 2688.04 400.313C2736.39 395.055 2785.36 394.378 2834.27 395.914C3001.48 402.22 3162.68 438.382 3320.44 471.331C3352.65 478.062 3384.87 484.773 3417.16 491.352C3535.49 515.411 3654.27 539.149 3774.76 558.577C3810.44 564.332 3846.35 569.779 3882.66 573.694C3904.29 576.026 3927.1 578.506 3949.11 577.171C4050.13 570.457 4166.49 547.695 4214.79 485.602C4214.9 485.471 4214.95 485.408 4215.05 485.282C4221.38 477.069 4227.2 468.953 4231.5 460.222C4244.29 430.232 4224.74 399.177 4201.08 373.502C4169.98 339.757 4128.41 310.137 4086.85 281.465C4016.98 233.449 3943.65 186.578 3857.88 149.84C3767.27 111.027 3664.75 86.4589 3554.95 82.9985C3444.95 80.0097 3344.36 106.421 3244.14 131.738C3200.59 142.747 3156.96 153.637 3113.03 164.048C2804.37 236.939 2486.18 293.425 2166.39 343.04C2107.07 352.205 2047.5 360.738 1987.94 369.254C1896.19 382.266 1801.31 386.253 1707.58 388.282C1707.53 388.282 1707.5 388.286 1707.44 388.29L1707.45 388.295ZM796.084 282.063C810.045 305.869 838.987 323.474 873.595 335.673C942.418 359.93 1025.39 367.01 1102.56 371.713C1300.8 383.315 1500.31 391.229 1699.47 387.735C1699.47 387.735 1699.41 387.714 1699.35 387.705C1686.06 384.481 1672.78 381.235 1659.51 377.998C1547.33 350.542 1435.03 325.621 1315.78 313.652C1143.57 296.919 969.982 287.472 796.024 282.063H796.084Z" fill="url(#paint29_linear_1779_1730)" style=""/>
<path d="M4278.04 433.667C4277.63 442.415 4275.69 450.535 4271.85 458.963C4266.83 467.845 4260.22 476.147 4252.93 484.364C4198.59 546.571 4077.67 568.979 3973.38 575.908C3950.72 577.298 3927.42 575.197 3905.06 573.033C3868.86 569.531 3833.03 564.475 3797.43 559.082C3677.4 540.892 3559.03 518.185 3441.12 495.2C3407.98 488.717 3374.92 482.095 3341.87 475.444C3188.79 444.688 3033.06 411.427 2871.66 404.708C2783.7 401.589 2701.52 409.469 2616.67 423.34C2580.91 429.2 2545.1 434.74 2508.82 439.156C2485.08 442.217 2462.36 447.007 2439.58 452.164C2410.35 458.799 2380.94 464.831 2350.16 467.816C2304.62 472.232 2258.54 470.544 2213.11 466.465C2056.28 451.52 1904.23 425.706 1754.87 392.277C1699.5 393.397 1644.12 393.531 1588.73 392.988C1436.26 391.317 1284.03 384.767 1132.27 375.585C1028.55 369.052 860.435 356.848 824.928 280.274C788.656 278.935 752.376 277.723 716.091 276.54C682.754 275.453 649.391 274.473 616.095 272.898C616.661 272.616 616.947 272.473 617.52 272.191C650.69 273.753 683.926 274.729 717.143 275.811C752.976 276.973 788.802 278.169 824.622 279.486C820.474 269.286 818.19 259.074 816.393 248.625C812.851 227.139 805.593 207.349 764.727 207.648C731.91 207.774 698.66 220.879 671.849 231.483C627.127 249.168 586.334 270.646 547.971 293.45C537.857 299.714 528.397 306.281 519.075 313.017C515.3 315.766 511.525 318.481 507.69 321.154C479.128 340.927 449.673 359.993 415.245 375.724C381.569 390.223 345.942 399.619 305.102 401.652C279.343 402.267 254.595 400.141 229.734 395.868C231.219 395.678 231.965 395.586 233.45 395.396C256.712 399.404 279.869 401.509 303.99 400.936C387.588 397.636 449.74 357.879 502.923 320.994C506.758 318.317 510.533 315.606 514.308 312.857C523.663 306.121 533.144 299.541 543.264 293.261C579.849 271.505 618.771 251.05 661.036 233.828C691.037 221.603 727.829 207.012 764.84 206.898C781.838 206.806 800.181 209.273 810.021 218.804C818.809 227.32 819.608 238.783 821.213 248.596C823.011 259.124 825.321 269.396 829.569 279.659C999.313 286.02 1168.64 296.14 1336.7 312.676C1457.79 324.943 1572.87 349.292 1687.78 375.661C1701.63 378.831 1715.47 382.001 1729.32 385.163C1738.6 387.28 1747.9 389.381 1757.21 391.46C1848.82 389.347 1941.56 385.293 2031.13 372.272C2091.28 363.512 2151.42 354.689 2211.32 345.255C2533.38 294.305 2853.32 235.895 3163.17 160.108C3206.81 149.398 3250.14 138.221 3293.41 126.927C3396.24 100.094 3499.17 72.4406 3612.64 75.4295C3836.52 82.3039 4006.35 176.782 4145.32 279.423C4178.71 304.189 4211.62 329.607 4237.9 357.682C4259.27 380.494 4278.31 406.59 4278.04 433.658V433.679V433.667ZM1760.18 392.151C1908.65 425.336 2059.78 450.964 2215.64 465.816C2259.33 469.736 2303.63 471.466 2347.44 467.235C2377.79 464.301 2406.75 458.272 2435.56 451.735C2458.69 446.506 2481.75 441.669 2505.85 438.558C2541.94 434.168 2577.57 428.653 2613.14 422.831C2699.55 408.682 2783.26 400.797 2872.84 403.984C3035.17 410.72 3191.72 444.044 3345.69 474.985C3378.75 481.624 3411.81 488.258 3444.94 494.733C3535.1 512.329 3625.47 529.551 3716.63 544.971C3766.77 553.454 3817.18 561.532 3868.1 567.914C3901.33 572.078 3937.47 577.293 3971.58 575.218C4075.08 568.344 4194.25 545.893 4248.15 484.263C4255.44 476.058 4262.07 467.774 4267.09 458.9C4282.29 429.36 4266.99 398.061 4245.27 371.519C4217.79 337.909 4179.25 308.239 4140.62 279.579C4002.79 177.751 3834.16 82.9985 3611.88 76.162C3500.35 73.2278 3398.7 100.949 3297.67 127.301C3254.36 138.6 3210.98 149.785 3167.31 160.499C2857.25 236.329 2537.11 294.784 2214.83 345.764C2154.87 355.198 2094.68 364.03 2034.47 372.799C1944.78 385.84 1851.96 389.974 1760.24 392.138C1760.21 392.146 1760.2 392.151 1760.18 392.159L1760.18 392.151ZM829.808 280.455C865.309 356.212 1031.06 368.408 1134 374.899C1285.27 384.055 1437.01 390.576 1588.97 392.248C1643.24 392.774 1697.51 392.652 1751.76 391.587C1742.91 389.595 1734.06 387.6 1725.22 385.592C1711.38 382.435 1697.54 379.273 1683.71 376.091C1569.23 349.826 1454.6 325.536 1333.98 313.316C1166.9 296.872 998.561 286.799 829.815 280.446V280.455H829.808Z" fill="url(#paint30_linear_1779_1730)" style=""/>
<path d="M4316.11 426.851C4315.64 437.607 4312.93 447.483 4307.38 457.649C4301.96 466.624 4294.09 474.854 4286.22 483.03C4226.32 544.693 4102.73 566.841 3995.83 573.938C3937.87 577.483 3874.88 566.176 3818.99 558.19C3701.14 541.347 3584.81 520.159 3468.95 498.58C3435.08 492.241 3401.28 485.749 3367.49 479.241C3218.08 450.455 3066.72 419.893 2910.03 412.757C2822.23 409.267 2738.82 416.024 2653.18 427.596C2617.22 432.463 2581.23 437.072 2544.9 440.672C2520.46 443.248 2496.75 447.31 2472.99 451.693C2442.4 457.346 2411.7 462.558 2379.97 464.936C2335.05 468.308 2289.92 466.406 2245.29 462.356C2097.46 448.178 1952.98 425.306 1810.91 396.024C1595.11 401.071 1378.39 392.294 1163.69 378.764C1059.22 371.969 887.409 358.629 858.953 278.771C820.17 277.066 781.368 275.517 742.559 274.005C710.068 272.738 677.551 271.572 645.106 269.863C645.752 269.581 646.072 269.442 646.718 269.164C679.015 270.869 711.393 272.031 743.737 273.285C782.047 274.78 820.35 276.308 858.64 277.984C855.491 267.564 854.106 257.188 853.26 246.609C851.636 224.988 846.616 203.762 804.691 203.969C772.353 203.981 739.623 217.12 713.364 227.644C667.47 246.036 625.692 268.356 585.957 291.69C575.711 297.912 565.997 304.408 556.383 311.021C552.042 314.019 547.707 317.024 543.266 319.963C512.507 340.439 480.296 360.056 443.397 376.095C407.191 390.997 368.648 400.81 325.339 402.902C298.221 403.555 272.155 401.395 245.949 396.967C247.434 396.777 248.18 396.684 249.664 396.495C274.246 400.658 298.714 402.793 324.167 402.187C412.891 397.808 480.069 358.742 538.506 319.807C542.92 316.856 547.275 313.867 551.622 310.874C561.236 304.252 570.957 297.748 581.197 291.513C618.368 269.665 657.457 248.869 699.855 231.159C729.982 218.572 767.313 203.249 804.877 203.244C821.755 203.202 840.431 205.766 849.419 215.684C857.608 224.718 857.322 236.547 858.087 246.613C858.94 257.276 860.344 267.72 863.594 278.215C1028 285.523 1192.04 296.153 1354.89 312.368C1477.29 324.892 1594.58 348.542 1711.66 373.737C1726.14 376.844 1740.62 379.959 1755.11 383.049C1774.41 387.166 1793.73 391.233 1813.09 395.232C1901.67 392.908 1991.12 388.589 2077.67 375.846C2138.46 366.825 2199.25 357.753 2259.76 348.008C2584.23 295.706 2906.31 235.297 3217.44 156.597C3260.77 145.605 3303.79 134.142 3346.75 122.587C3450.46 94.6888 3554.46 65.6756 3669.55 68.6097C3893.03 73.9982 4066.5 172.45 4199.09 277.575C4250.94 319.108 4316.66 370.984 4316.12 426.876V426.855L4316.11 426.851ZM1816.23 395.885C1957.38 424.94 2100.93 447.635 2247.77 461.724C2291.1 465.652 2334.93 467.471 2378.53 464.174C2409.46 461.834 2439.4 456.74 2469.23 451.225C2493.37 446.776 2517.47 442.667 2542.3 440.053C2578.43 436.466 2614.22 431.882 2649.97 427.045C2737.11 415.27 2822.01 408.484 2911.32 412.041C3068.9 419.206 3221.06 449.84 3371.32 478.778C3405.08 485.286 3438.87 491.777 3472.72 498.109C3587.35 519.456 3702.45 540.345 3819 557.146C3855.11 562.353 3891.45 567.228 3928.13 570.596C3949.68 572.574 3972.16 574.574 3993.98 573.248C4100.05 566.201 4222.07 544.049 4281.45 482.916C4289.33 474.758 4297.19 466.54 4302.61 457.582C4340.95 393.805 4252.49 324.219 4194.39 277.693C4062.49 172.522 3891.42 76.002 3668.82 69.3212C3555.65 66.4417 3452.88 95.5055 3350.96 122.928C3307.96 134.492 3264.91 145.95 3221.56 156.959C2910.24 235.718 2587.95 296.161 2263.28 348.5C2202.7 358.246 2141.86 367.326 2081.01 376.356C1994.4 389.107 1904.92 393.502 1816.29 395.876H1816.23L1816.23 395.885ZM863.78 278.99C892.356 358.01 1061.72 371.325 1165.42 378.073C1378.46 391.498 1593.46 400.229 1807.58 395.354C1788.7 391.443 1769.85 387.474 1751.02 383.462C1736.54 380.363 1722.06 377.257 1707.59 374.15C1590.9 349.047 1474.02 325.448 1352.04 312.97C1190.18 296.851 1027.13 286.277 863.713 278.977C863.74 278.981 863.753 278.985 863.773 278.99H863.78Z" fill="url(#paint31_linear_1779_1730)" style=""/>
<path d="M4355.27 419.451C4354.75 432.299 4351.05 444.503 4342.96 456.336C4336.35 465.277 4328.25 473.499 4319.58 481.687C4253.77 543.157 4128.58 564.647 4018.31 571.964C3960.07 575.525 3897.01 564.892 3840.63 557.323C3724.97 541.797 3610.68 522.134 3496.87 501.957C3462.35 495.806 3427.91 489.492 3393.47 483.156C3247.71 456.336 3100.54 428.341 2948.47 420.793C2860.59 416.916 2775.78 422.486 2689.25 431.806C2653.24 435.675 2617.22 439.367 2580.97 442.183C2555.79 444.258 2531.08 447.601 2506.35 451.2C2429.48 462.44 2355.95 465.437 2277.48 458.235C2139.73 444.936 2004.29 424.898 1870.83 399.644C1803.12 401.526 1735.37 401.766 1667.62 401.033C1509.79 399.092 1352.14 392.096 1195.13 381.921C1089.61 374.849 914.695 360.3 893.176 277.373C851.963 275.281 810.724 273.365 769.485 271.475C737.733 270.031 705.955 268.68 674.256 266.824C674.949 266.546 675.295 266.411 675.987 266.133C707.586 267.981 739.258 269.333 770.903 270.764C811.63 272.616 852.343 274.515 893.043 276.577C890.819 265.906 890.34 255.318 890.32 244.571C890.44 222.891 887.883 200.18 844.839 200.256C813.188 199.961 780.683 213.377 755.197 223.729C708.092 242.854 665.221 265.998 624.062 289.889C613.775 296.043 603.888 302.412 594.114 308.891C589.148 312.196 584.161 315.496 579.081 318.733C514.852 359.458 440.895 400.389 345.746 404.102C317.29 404.83 289.893 402.645 262.402 398.023C263.86 397.83 264.593 397.733 266.051 397.539C291.97 401.871 317.763 404.014 344.575 403.369C438.212 398.865 510.917 358.806 574.38 318.548C579.454 315.311 584.44 312.015 589.414 308.719C599.208 302.231 609.108 295.854 619.421 289.699C653.244 269.947 688.537 251.029 726.068 234.144C759.145 219.262 802.442 199.186 845.146 199.519C862.077 199.519 880.786 202.238 889.061 212.518C896.711 222.024 895.307 234.253 895.2 244.571C895.22 255.407 895.706 266.07 897.983 276.826C1056.99 284.993 1215.62 296.11 1373.19 311.998C1496.93 324.783 1616.34 347.692 1735.55 371.729C1750.71 374.781 1765.85 377.838 1781.01 380.873C1811.59 386.977 1842.2 392.997 1872.91 398.831C1957.1 396.238 2042.12 391.768 2124.3 379.37C2185.76 370.096 2247.16 360.704 2308.34 350.706C2635.21 297.053 2959.46 234.67 3271.81 153.018C3314.78 141.758 3357.43 130.05 3400.02 118.242C3504.63 89.2415 3609.82 58.8516 3726.6 61.7311C3837.63 65.002 3940.44 90.7233 4030.72 131.069C4117.7 170.337 4189.93 221.502 4253.04 275.66C4299.71 316.292 4355.55 366.762 4355.43 419.438C4355.36 419.438 4355.33 419.442 4355.25 419.446L4355.27 419.451ZM1876.14 399.505C2008.67 424.54 2143.17 444.422 2279.93 457.628C2356.39 464.629 2428.05 461.644 2502.93 450.691C2528.08 447.033 2553.2 443.652 2578.81 441.539C2614.85 438.739 2650.67 435.064 2686.46 431.217C2774.31 421.757 2860.65 416.163 2949.87 420.099C3102.74 427.676 3250.63 455.721 3397.17 482.684C3431.59 489.007 3466.01 495.33 3500.51 501.477C3613.51 521.511 3726.96 541.056 3841.77 556.59C3897.1 564.079 3959.23 574.776 4016.43 571.278C4126 564.374 4249.73 542.365 4314.8 481.561C4323.48 473.385 4331.59 465.181 4338.2 456.248C4380.96 394.129 4303.78 323.714 4248.15 275.79C4122.92 168.321 3947.86 67.6078 3725.67 62.4678C3610.84 59.6389 3506.89 90.1087 3404.1 118.608C3361.5 130.438 3318.82 142.141 3275.83 153.397C2963.25 235.091 2638.8 297.538 2311.68 351.22C2250.45 361.218 2188.99 370.631 2127.47 379.909C2045.3 392.311 1960.31 396.853 1876.14 399.497V399.505H1876.14ZM897.996 277.638C919.675 359.706 1092.2 374.23 1196.92 381.252C1353.41 391.41 1510.55 398.377 1667.87 400.309C1734.35 401.029 1800.85 400.806 1867.29 399.004C1837.11 393.258 1807.01 387.335 1776.95 381.336C1761.79 378.296 1746.62 375.244 1731.47 372.192C1612.65 348.227 1493.62 325.368 1370.3 312.629C1213.67 296.839 1056 285.763 897.937 277.634H897.996V277.638Z" fill="url(#paint32_linear_1779_1730)" style=""/>
<path d="M4394.38 410.442C4393.83 426.157 4388.88 440.693 4378.54 455.023C4371.17 463.993 4362.36 472.211 4352.93 480.357C4281.72 541.212 4153.83 562.496 4040.77 569.998C3982.63 573.639 3920.03 563.852 3863.49 556.771C3749.57 542.504 3636.92 524.192 3524.72 505.35C3489.65 499.431 3454.65 493.322 3419.67 487.197C3277.58 462.343 3134.33 436.807 2986.9 428.855C2898.78 424.565 2812.45 428.847 2725.04 435.969C2689.08 438.895 2653.12 441.674 2617 443.711C2591.03 445.277 2565.35 447.887 2539.66 450.716C2462.28 459.266 2387.66 461.388 2309.6 454.147C2182.97 441.842 2057.92 424.469 1934.37 403.075C1858.65 405.601 1782.84 405.946 1707.05 405.079C1546.51 403.02 1386.17 395.754 1226.51 385.104C1119.63 377.732 942.318 361.9 927.464 276.14C883.941 273.626 840.398 271.286 796.842 269.004C766.309 267.4 735.749 265.881 705.262 263.94C690.601 271.867 676.167 279.941 661.885 288.142C651.619 294.17 641.692 300.388 631.811 306.668C626.086 310.314 620.34 313.943 614.547 317.551C545.018 360.035 466.095 400.692 365.8 405.348C336.012 406.114 307.303 403.913 278.494 399.126C279.952 398.932 280.685 398.836 282.143 398.646C309.38 403.172 336.518 405.34 364.688 404.632C463.552 400.002 541.436 359.206 609.907 317.374C615.699 313.774 621.445 310.146 627.171 306.504C637.031 300.207 646.978 293.993 657.245 287.956C700.541 263.094 745.223 238.551 794.618 218.585C820.631 208.069 852.928 195.444 885.073 195.865C902.164 195.92 920.733 198.765 928.256 209.445C935.327 219.481 932.864 231.976 931.978 242.593C931.133 253.66 930.806 264.576 932.225 275.63C1085.81 284.584 1239 296.144 1391.28 311.682C1516.27 324.711 1637.66 346.829 1758.84 369.742C1774.77 372.757 1790.71 375.762 1806.66 378.76C1849.68 386.821 1892.77 394.735 1936.04 402.271C2014.68 399.408 2093.87 394.66 2170.61 382.948C2232.71 373.434 2294.75 363.727 2356.55 353.455C2685.89 298.455 3012.31 234.076 3325.92 149.499C3368.43 137.99 3410.66 126.06 3452.82 114.032C3558.38 83.9246 3664.81 52.0909 3783.37 54.9156C4008.61 60.2661 4186.19 161.291 4306.7 273.807C4349.12 313.981 4394.34 360.494 4394.38 410.459V410.45V410.442ZM1939.7 402.885C2062.33 424.102 2186.46 441.307 2312.14 453.524C2388.36 460.588 2461.17 458.462 2536.74 450.122C2562.85 447.256 2588.93 444.599 2615.33 443.025C2651.21 441 2686.95 438.226 2722.68 435.321C2811.37 428.097 2898.95 423.799 2988.36 428.156C3136.53 436.138 3280.46 461.729 3423.25 486.709C3458.22 492.83 3493.19 498.93 3528.24 504.849C3639.24 523.493 3750.7 541.549 3863.36 555.769C3919.23 562.82 3981.35 572.827 4038.84 569.316C4151.16 561.861 4277.43 540.623 4348.06 480.222C4357.47 472.089 4366.28 463.884 4373.67 454.934C4420.98 393.893 4355.08 323.895 4301.83 273.913C4241.88 217.949 4170.76 165.888 4084.03 125.87C3994.91 85.1581 3893.05 58.818 3782.51 55.6354C3665.94 52.8612 3560.71 84.7876 3456.97 114.378C3414.79 126.422 3372.54 138.352 3329.99 149.865C3016.21 234.514 2689.58 298.931 2360.03 353.964C2298.16 364.245 2236.06 373.948 2173.9 383.479C2097.22 395.177 2018.1 399.989 1939.51 402.902C1939.59 402.902 1939.63 402.898 1939.71 402.894L1939.7 402.885ZM932.284 276.426C947.318 361.315 1122.3 377.114 1228.36 384.434C1387.48 395.055 1547.29 402.3 1707.29 404.35C1781.75 405.201 1856.21 404.868 1930.6 402.452C1887.88 394.996 1845.33 387.179 1802.83 379.227C1786.88 376.234 1770.93 373.224 1754.99 370.21C1634.15 347.368 1513.12 325.296 1388.5 312.301C1237.16 296.86 1084.92 285.363 932.284 276.439V276.43V276.426ZM926.159 260.463C926.179 254.493 926.612 248.528 927.091 242.567C928.895 220.904 928.875 196.614 884.647 196.589C859.46 196.37 834.16 205.547 813.194 213.39C775.124 227.627 740.316 245.24 706.567 263.224C737.113 265.182 767.733 266.706 798.327 268.31C841.304 270.566 884.267 272.865 927.211 275.344C926.572 270.36 926.212 265.464 926.099 260.467H926.159V260.463Z" fill="url(#paint33_linear_1779_1730)" style=""/>
<path d="M4434.58 401.547C4433.97 420.149 4427.61 437.148 4414.11 453.709C4405.91 462.676 4396.41 470.902 4386.26 479.014C4309.67 539.246 4179.36 560.324 4063.28 568.032C4033.48 569.918 4002.65 567.333 3973.13 564.9C3931.28 561.452 3889.72 556.674 3848.33 551.509C3749.14 539.137 3650.71 524.293 3552.67 508.734C3517.05 503.064 3481.49 497.2 3445.95 491.323C3307.51 468.422 3168.28 445.235 3025.37 436.912C2936.75 432.177 2849.12 435.073 2760.73 440.032C2724.87 442.04 2689 443.951 2653.06 445.231C2626.3 446.25 2599.71 448.135 2573.12 450.186C2495.3 456.197 2419.66 457.346 2341.83 450.047C2227.34 438.84 2113.96 423.963 2001.56 406.211C1754.19 416.163 1504.07 405.167 1258 388.269C1149.59 380.591 970.229 363.424 961.986 275.033C916.426 272.073 870.832 269.307 825.238 266.575C798.38 264.971 771.509 263.405 744.677 261.612C729.63 269.737 714.777 277.988 700.062 286.348C689.982 292.183 680.149 298.165 670.361 304.193C663.77 308.268 657.159 312.33 650.434 316.321C575.865 360.325 491.762 401.766 386.22 406.548C355.121 407.377 325.06 405.142 294.953 400.187C296.411 399.989 297.144 399.892 298.602 399.694C327.158 404.384 355.6 406.573 385.102 405.82C488.526 401.042 572.816 359.361 645.727 316.123C652.451 312.141 659.063 308.079 665.654 304.004C675.455 297.963 685.308 291.977 695.415 286.146C710.203 277.756 725.116 269.463 740.216 261.296C737.553 261.115 734.957 260.938 732.42 260.757C733.239 260.488 733.645 260.357 734.464 260.088C736.754 260.248 739.105 260.408 741.515 260.581C776.609 241.839 812.675 223.241 852.39 208.494C874.008 200.466 899.495 191.819 925.347 192.152C942.558 192.244 961.081 195.267 967.858 206.288C974.337 216.821 970.781 229.681 969.097 240.559C967.372 251.904 966.167 263.132 966.806 274.532C1114.91 284.222 1262.64 296.132 1409.59 311.32C1535.77 324.606 1658.99 345.873 1782.02 367.659C1798.87 370.643 1815.72 373.62 1832.58 376.592C1889.27 386.548 1946.05 396.28 2003.11 405.378C2074.98 402.237 2147.17 397.35 2217.27 386.48C2280.01 376.693 2342.7 366.745 2405.13 356.166C2670.58 311.093 2933.66 259.587 3189.61 196.033C3253.68 180.125 3317.29 163.467 3380.29 145.934C3422.34 134.205 3464.09 122.069 3505.78 109.844C3612.32 78.5951 3720.03 45.2796 3840.41 48.0411C3953.15 51.1858 4056.95 78.0479 4147.19 120.187C4233.61 160.937 4304.13 214.177 4360.66 271.905C4397.84 310.672 4434.78 354.983 4434.8 401.542C4434.72 401.542 4434.68 401.547 4434.6 401.551L4434.58 401.547ZM2006.75 405.996C2118.24 423.58 2230.71 438.314 2344.28 449.432C2420.56 456.584 2494.55 455.435 2570.81 449.533C2597.79 447.462 2624.75 445.563 2651.89 444.524C2687.65 443.24 2723.32 441.345 2758.99 439.341C2848.5 434.315 2937.24 431.419 3026.97 436.222C3170.52 444.574 3310.34 467.824 3449.4 490.822C3484.92 496.703 3520.45 502.559 3556.07 508.225C3665.47 525.539 3775.31 542.256 3886.25 555.235C3942.32 561.793 4003.9 570.878 4061.35 567.35C4176.54 559.701 4305.5 538.64 4381.44 478.883C4391.61 470.792 4401.09 462.575 4409.29 453.617C4460.63 394.02 4405.5 323.962 4355.71 272.018C4244.19 156.95 4062.68 53.8926 3839.53 48.7778C3721.15 46.0583 3614.62 79.4834 3509.92 110.193C3468.22 122.435 3426.44 134.572 3384.37 146.304C3321.33 163.85 3257.67 180.52 3193.56 196.437C2937.44 260.025 2674.2 311.573 2408.58 356.68C2346.12 367.267 2283.39 377.215 2220.6 387.015C2150.6 397.872 2078.53 402.81 2006.75 405.996ZM966.673 275.357C975.129 362.868 1152.33 379.985 1259.84 387.608C1504 404.371 1752.13 415.317 1997.6 405.618C1941.11 396.588 1884.88 386.952 1828.72 377.097C1811.87 374.133 1795.03 371.148 1778.18 368.164C1655.45 346.429 1532.55 325.2 1406.68 311.947C1260.64 296.864 1113.85 285.014 966.673 275.357ZM961.473 267.021C961.72 258.156 962.765 249.379 964.07 240.555C967.386 218.963 970.149 193.065 924.655 192.901C899.874 192.611 875.067 201.817 854.58 209.601C815.797 224.339 780.357 242.508 745.829 260.905C772.8 262.719 799.818 264.285 826.823 265.897C871.824 268.583 916.812 271.32 961.773 274.233C961.587 271.812 961.46 269.413 961.46 267.03V267.021H961.473Z" fill="url(#paint34_linear_1779_1730)" style=""/>
<path d="M4475.43 391.469C4474.83 413.035 4467.33 433.776 4449.63 452.392C4441.01 461.476 4430.38 469.647 4419.51 477.679C4337.67 537.255 4204.68 558.16 4085.62 566.062C4056.2 567.931 4025.88 565.746 3996.65 563.603C3954.75 560.53 3913.1 556.14 3871.61 551.362C3773.97 540.113 3677 526.478 3580.39 512.127C3544.15 506.722 3507.97 501.119 3471.81 495.499C3337.12 474.572 3201.92 453.633 3063.61 444.966C2974.51 439.754 2885.78 441.168 2796.55 444.002C2760.65 445.142 2724.75 446.203 2688.82 446.763C2661.38 447.226 2634.03 448.371 2606.66 449.634C2528.38 453.276 2451.58 453.339 2373.74 445.959C2272.44 435.97 2171.86 423.5 2071.92 409.044C1976.77 413.864 1881.14 414.353 1785.74 413.166C1619.85 410.867 1454.14 403.092 1289.25 391.473C1178.95 383.453 998.368 364.931 996.264 274.106C949.013 270.692 901.735 267.464 854.443 264.273C830.721 262.673 806.992 261.098 783.283 259.394C768.003 267.695 752.89 276.11 737.863 284.597C728.122 290.141 718.548 295.799 709.027 301.499C701.351 306.071 693.667 310.63 685.884 315.13C606.908 360.494 516.326 402.852 406.264 407.786C373.833 408.649 342.454 406.401 311.035 401.282C312.493 401.084 313.226 400.987 314.684 400.789C344.531 405.655 374.332 407.874 405.145 407.066C513.79 402.153 603.279 359.69 681.177 314.941C688.933 310.445 696.61 305.894 704.26 301.318C713.814 295.622 723.402 289.956 733.156 284.395C748.316 275.866 763.582 267.417 779.009 259.082C772.637 258.619 766.698 258.173 761.185 257.748C762.078 257.482 762.524 257.352 763.409 257.087C768.669 257.495 774.302 257.92 780.36 258.362C816.38 239.103 853.178 219.772 893.805 204.465C915.011 196.475 939.738 188.115 965.185 188.49C982.502 188.746 1000.92 191.777 1007.07 203.173C1012.96 214.11 1008.26 227.518 1005.84 238.581C1003.31 250.267 1001.26 261.823 1001.14 273.631C1143.74 283.995 1286.01 296.195 1427.65 311.009C1554.83 324.53 1679.64 344.88 1804.29 365.55C1822.28 368.534 1840.27 371.515 1858.26 374.474C1929.73 386.232 2001.31 397.691 2073.27 408.202C2137.22 404.839 2201.31 399.888 2263.66 390.05C2327.05 380.006 2390.38 369.776 2453.44 358.915C2739.52 309.561 3023.12 252.751 3296.88 180.335C3343.03 168.131 3388.86 155.464 3434.42 142.414C3475.91 130.497 3517.1 118.187 3558.24 105.803C3665.79 73.3962 3774.87 38.5441 3897.14 41.2089C4010.79 44.3282 4115.1 71.7966 4205.41 114.782C4291.7 156.273 4361.38 210.46 4414.25 270.036C4446.38 307.115 4475.41 348.387 4475.43 391.477V391.469H4475.43ZM2077.18 408.766C2176.26 423.079 2275.98 435.426 2376.42 445.332C2453 452.602 2528.26 452.505 2605.28 448.927C2632.99 447.651 2660.68 446.498 2688.45 446.022C2724.2 445.471 2759.91 444.41 2795.62 443.282C2885.76 440.423 2975.38 439.022 3065.4 444.284C3204.28 452.989 3340.03 473.97 3475.28 494.99C3511.4 500.597 3547.53 506.2 3583.73 511.597C3702.43 529.189 3821.73 546.335 3942.29 558.118C3988.08 562.593 4037.13 568.302 4083.69 565.384C4201.85 557.537 4333.51 536.649 4414.67 477.528C4425.52 469.508 4436.11 461.35 4444.74 452.291C4499.89 394.251 4456.05 323.97 4409.35 270.124C4356.49 210.607 4286.87 156.462 4200.66 115.001C4111.88 72.7606 4008.13 45.0481 3896.34 41.9413C3776.06 39.3103 3668.14 74.2887 3562.4 106.135C3521.26 118.528 3480.06 130.842 3438.58 142.764C3312.13 178.904 3183.42 211.672 3052.96 241.565C2857.09 286.251 2657.81 324.753 2456.96 359.412C2393.87 370.281 2330.5 380.519 2267.07 390.568C2204.87 400.368 2140.96 405.361 2077.18 408.775V408.766H2077.18ZM1001.14 274.443C1003.59 364.35 1181.86 382.826 1291.28 390.791C1455.64 402.359 1620.84 410.13 1786.18 412.429C1880.11 413.603 1974.26 413.128 2067.95 408.468C1996.55 398.019 1925.53 386.64 1854.6 374.975C1836.61 372.016 1818.63 369.035 1800.65 366.051C1676.28 345.427 1551.77 325.103 1424.88 311.611C1284.17 296.898 1142.83 284.757 1001.15 274.452V274.439L1001.14 274.443ZM996.258 272.275C996.417 261.027 998.521 249.77 1001.02 238.539C1005.73 217.12 1011.38 189.487 964.639 189.214C934.758 188.788 904.285 201.986 880.489 211.9C846.793 225.943 815.308 242.113 784.641 258.661C808.557 260.37 832.485 261.97 856.421 263.586C903.053 266.718 949.672 269.909 996.258 273.265C996.258 272.932 996.258 272.599 996.258 272.271V272.275Z" fill="url(#paint35_linear_1779_1730)" style=""/>
<path d="M4517.83 380.039C4517.17 405.407 4507.35 429.705 4485.23 451.078C4475.77 460.171 4464.48 468.346 4452.86 476.345C4365.85 535.222 4230.22 555.984 4108.14 564.096C4038.21 568.415 3963.74 558.447 3895.12 551.214C3799.03 541.086 3703.54 528.642 3608.37 515.508C3571.32 510.372 3534.35 505.034 3497.37 499.683C3366.66 480.757 3235.64 461.994 3102.11 453.015C3012.75 447.331 2923.32 447.142 2833.62 447.883C2797.38 448.186 2761.14 448.426 2724.9 448.262C2696.94 448.161 2669.01 448.565 2641.07 449.057C2562.09 450.459 2484.32 449.369 2406.06 441.846C2318.7 433.166 2231.78 422.932 2145.25 411.419C2038.98 417.889 1931.95 418.567 1825.29 417.186C1656.71 414.765 1488.27 406.708 1320.75 394.622C1208.53 386.266 1027.02 366.345 1030.87 273.323C982.483 269.459 934.066 265.763 885.643 262.113C864.478 260.522 843.312 258.926 822.16 257.272C806.653 265.708 791.294 274.25 775.94 282.795C766.786 287.91 757.771 293.134 748.776 298.363C739.781 303.57 730.773 308.765 721.671 313.892C637.648 360.696 541.874 403.913 426.585 408.99C392.862 409.911 360.085 407.634 327.395 402.342C328.833 402.145 329.545 402.048 330.983 401.85C362.162 406.88 393.301 409.112 425.466 408.27C538.811 403.193 634.406 359.711 716.964 313.703C726.066 308.575 735.087 303.393 744.062 298.182C753.057 292.953 762.065 287.729 771.226 282.614C786.68 273.993 802.193 265.409 817.879 256.96C808.677 256.232 799.476 255.495 790.281 254.708C791.22 254.451 791.693 254.321 792.632 254.064C801.473 254.813 810.329 255.529 819.177 256.228C854.524 237.234 890.384 218.079 929.805 202.504C952.016 193.731 978.162 184.347 1005.24 184.789C1022.72 185.092 1041.05 188.317 1046.45 200.028C1051.72 211.458 1045.93 225.219 1042.74 236.552C1039.41 248.638 1036.53 260.61 1035.56 272.881C1172.65 283.86 1309.43 296.266 1445.74 310.647C1574.33 324.497 1701.07 343.992 1827.7 363.622C1846.43 366.522 1865.15 369.427 1883.89 372.31C1971.01 385.722 2058.27 398.777 2145.99 410.556C2201.13 407.045 2256.23 402.195 2310.02 393.586C2374.07 383.289 2438.02 372.761 2501.71 361.626C2790.17 311.093 3075.95 252.645 3351.13 177.818C3397.24 165.277 3443.03 152.265 3488.53 138.853C3529.43 126.767 3570.05 114.293 3610.61 101.749C3719.18 68.1762 3829.64 31.7244 3953.84 34.3512C4178.88 39.1966 4370.88 145.205 4467.84 268.141C4494.87 302.922 4517.63 340.746 4517.65 380.035C4517.73 380.035 4517.76 380.039 4517.83 380.044V380.039ZM2150.19 411.12C2235.92 422.507 2322.03 432.644 2408.57 441.236C2485.79 448.666 2562.52 449.714 2640.42 448.333C2668.62 447.841 2696.81 447.437 2725.02 447.542C2761.09 447.706 2797.17 447.466 2833.24 447.163C2923.68 446.422 3013.85 446.616 3103.94 452.354C3237.96 461.362 3369.46 480.163 3500.64 499.166C3537.57 504.52 3574.51 509.846 3611.51 514.981C3701.41 527.396 3791.62 539.086 3882.32 548.92C3925.03 553.551 3967.88 557.815 4010.94 560.85C4042.24 563.056 4074.72 565.443 4106.2 563.435C4227.4 555.374 4361.72 534.645 4448.06 476.202C4459.67 468.224 4470.91 460.057 4480.37 450.981C4539.42 394.041 4506.87 324.513 4463.18 268.247C4414.06 206.823 4344.8 152.21 4259.22 109.57C4170.38 66.446 4066.02 38.1358 3953.3 35.1006C3831.12 32.5242 3721.82 69.0897 3615.09 102.094C3574.51 114.651 3533.87 127.112 3492.95 139.207C3410.84 163.353 3327.71 186.077 3243.67 207.412C3002.86 268.55 2755.47 318.405 2505.47 362.131C2441.73 373.283 2377.73 383.815 2313.64 394.121C2260.04 402.713 2205.11 407.583 2150.17 411.128V411.12H2150.19ZM1035.55 276.881C1035.59 366.783 1213.98 385.853 1322.78 393.965C1489.75 406.005 1657.63 414.045 1825.66 416.453C1930.78 417.813 2036.3 417.203 2141.04 410.875C2053.85 399.151 1967.13 386.169 1880.53 372.837C1861.8 369.945 1843.08 367.048 1824.35 364.148C1697.94 344.552 1571.44 325.09 1443.07 311.257C1307.67 296.978 1171.79 284.635 1035.61 273.719C1035.61 274.767 1035.55 275.828 1035.55 276.876V276.881ZM1030.79 272.503C1031.8 260.358 1034.65 248.495 1037.96 236.526C1043.92 215.352 1052.58 185.909 1004.61 185.517C975.379 185.021 945.738 197.89 922.548 207.648C887.627 222.34 855.243 239.36 823.378 256.556C844.803 258.227 866.235 259.84 887.667 261.461C935.391 265.06 983.102 268.701 1030.79 272.503Z" fill="url(#paint36_linear_1779_1730)" style=""/>
<path d="M4560.76 367.688C4560.08 397.261 4547.85 425.433 4520.74 449.777C4510.5 458.896 4498.52 467.067 4486.14 475.019C4394.04 533.214 4255.7 553.82 4130.53 562.147C4060.87 566.474 3987.21 557.626 3918.59 551.084C3824.02 542.067 3729.97 530.831 3636.22 518.917C3597.93 514.034 3559.71 508.932 3521.49 503.83C3395.23 486.953 3268.78 470.333 3140.45 461.093C3051.23 454.934 2961.71 453.099 2872.04 451.802C2834.95 451.267 2797.85 450.691 2760.78 449.79C2732.55 449.116 2704.3 448.801 2676.05 448.544C2596.2 447.82 2517.14 445.471 2438.1 437.767C2365.17 430.467 2292.5 422.288 2220.03 413.351C2148.82 418.609 2077.05 420.793 2005.4 421.543C1787.4 423.829 1568.55 413.818 1352.1 397.817C1237.87 389.107 1055.56 367.755 1065.24 272.688C1016.98 268.486 968.69 264.411 920.393 260.37C900.506 258.703 880.619 257.044 860.745 255.352C845.059 263.864 829.466 272.452 813.906 281.052C805.797 285.565 797.721 290.103 789.651 294.645C778.912 300.72 768.139 306.769 757.227 312.718C669.062 360.148 566.257 405.963 446.734 410.244C411.68 411.195 377.584 408.901 343.582 403.454C345.02 403.256 345.733 403.159 347.171 402.961C379.668 408.147 412.112 410.408 445.615 409.52C564.193 404.308 665.001 359.951 752.586 312.516C763.479 306.555 774.251 300.51 785.011 294.452C793.06 289.893 801.136 285.35 809.265 280.85C824.971 272.191 840.698 263.544 856.543 254.977C844.16 253.908 831.783 252.835 819.419 251.685C820.431 251.433 820.943 251.307 821.955 251.054C833.946 252.165 845.957 253.214 857.968 254.249C893.202 235.28 928.782 216.092 967.738 200.192C990.342 190.969 1017.56 180.537 1045.52 181.11C1063.2 181.459 1081.4 184.89 1086.06 196.909C1090.69 208.839 1083.86 222.937 1079.92 234.556C1075.73 247.076 1072.03 259.49 1070.27 272.254C1201.84 283.738 1333.16 296.321 1464.12 310.322C1592.92 324.324 1720.33 342.746 1847.68 361.197C1868.38 364.194 1889.1 367.191 1909.81 370.184C2013.19 385.07 2116.7 399.543 2220.74 412.475C2266.52 408.968 2312 404.275 2356.75 397.164C2421.43 386.606 2486.03 375.8 2550.35 364.371C2841.19 312.655 3129.17 252.57 3405.75 175.313C3451.82 162.444 3497.54 149.087 3542.96 135.317C3583.25 123.062 3623.27 110.463 3663.25 97.7998C3772.86 63.0445 3884.76 24.9509 4010.93 27.5188C4125.48 30.5372 4233.19 59.1295 4322.54 103.908C4408.08 147.331 4476.78 203.004 4521.85 266.272C4543.89 298.295 4560.75 332.453 4560.76 367.692V367.684L4560.76 367.688ZM2224.82 412.984C2296.56 421.816 2368.5 429.907 2440.69 437.136C2518.96 444.764 2597.26 447.075 2676.33 447.786C2704.74 448.043 2733.14 448.363 2761.53 449.045C2798.48 449.95 2835.44 450.514 2872.4 451.049C2962.58 452.345 3052.63 454.214 3142.36 460.407C3271.1 469.677 3397.93 486.339 3524.59 503.257C3562.78 508.364 3600.97 513.453 3639.23 518.332C3743.66 531.568 3848.45 544.108 3953.97 553.403C4010.67 558.4 4071.17 565.022 4128.61 561.448C4252.9 553.18 4389.96 532.591 4481.38 474.829C4493.71 466.885 4505.68 458.727 4515.9 449.638C4578.52 394.47 4556.81 324.349 4516.94 266.339C4471.95 203.118 4403.3 147.495 4317.84 104.11C4228.91 60.1187 4123.93 31.2149 4010.25 28.2302C3886.09 25.7128 3775.3 63.9327 3667.5 98.1071C3627.51 110.787 3587.47 123.391 3547.15 135.645C3501.71 149.428 3455.95 162.793 3409.85 175.671C3133.07 252.978 2844.9 313.097 2553.85 364.842C2489.48 376.267 2424.86 387.095 2360.13 397.653C2315.58 404.738 2270.32 409.453 2224.74 412.976C2224.77 412.976 2224.78 412.98 2224.8 412.984H2224.82ZM1069.64 281.078C1069.73 369.784 1247.16 388.972 1354.21 397.139C1568.58 412.98 1785.28 422.928 2001.18 420.836C2072.86 420.141 2144.66 418.019 2215.91 412.82C2112.37 399.93 2009.34 385.529 1906.46 370.719C1885.72 367.73 1865 364.733 1844.26 361.731C1717.1 343.305 1589.87 324.896 1461.25 310.92C1331.18 297.016 1200.75 284.509 1070.08 273.1C1069.83 275.748 1069.64 278.413 1069.64 281.086V281.078ZM1065.31 271.833C1067.11 259.2 1070.78 246.907 1074.96 234.514C1082.06 213.6 1093.93 182.381 1044.64 181.83C1016.35 181.274 987.465 193.907 965.041 203.43C928.789 218.825 895.233 236.703 862.05 254.599C882.256 256.325 902.477 258.008 922.69 259.701C970.241 263.679 1017.79 267.691 1065.31 271.82V271.829V271.833Z" fill="url(#paint37_linear_1779_1730)" style=""/>
<path d="M4605.43 354.508C4604.71 388.522 4589.47 421.341 4556.24 448.46C4545.19 457.578 4532.55 465.757 4519.43 473.68C4421.86 531.416 4281.9 551.564 4153 560.173C4083.63 564.492 4010.76 556.742 3942.19 550.911C3849.12 542.997 3756.5 532.982 3664.13 522.302C3623.53 517.591 3583 512.658 3542.46 507.715C3421.76 492.994 3300.96 478.521 3178.88 469.138C3090.56 462.541 3001.87 459.039 2913.12 455.818C2874.33 454.412 2835.55 452.972 2796.79 451.28C2768.7 450.055 2740.58 449.062 2712.46 448.102C2631.3 445.336 2550.57 441.602 2470.21 433.667C2412 427.79 2353.91 421.467 2295.91 414.778C2166.34 426.237 2034.57 427.087 1903.99 425.281C1730.04 422.625 1556.23 414.05 1383.48 400.999C1267.19 391.936 1084.34 369.136 1099.65 272.204C1053.81 267.876 1007.96 263.628 962.098 259.394C941.039 257.453 919.973 255.516 898.921 253.542C887.855 259.549 876.836 265.59 865.818 271.635C860.225 274.696 857.429 276.224 851.836 279.28C845.431 282.787 839.039 286.306 832.654 289.83C819.472 297.112 806.249 304.37 792.866 311.505C699.222 360.936 592.063 406.089 466.9 411.461C430.541 412.45 395.147 410.135 359.854 404.531C361.292 404.329 362.004 404.233 363.442 404.03C397.205 409.398 431.06 411.68 465.848 410.741C589.652 405.39 695.714 360.161 788.286 311.295C801.688 304.172 814.884 296.91 828.073 289.628C834.458 286.1 840.85 282.581 847.255 279.07C852.848 276.009 855.644 274.481 861.237 271.425C872.402 265.317 883.581 259.217 894.773 253.134C879.293 251.681 863.813 250.221 848.367 248.65C849.432 248.406 849.965 248.28 851.03 248.036C866.03 249.551 881.051 250.974 896.078 252.393C932.077 232.94 968.23 213.104 1007.86 196.618C1030.44 187.235 1057.4 176.82 1085.48 177.422C1103.49 177.831 1121.4 181.455 1125.34 193.802C1129.32 206.28 1121.5 220.584 1116.78 232.548C1111.73 245.539 1107.09 258.488 1104.59 271.787C1230.67 283.721 1356.57 296.367 1482.22 309.977C1610.07 323.991 1736.96 341.188 1863.82 358.359C1887.72 361.592 1911.61 364.826 1935.52 368.05C2055.49 384.178 2175.62 399.859 2296.26 413.885C2332.2 410.581 2367.97 406.518 2403.13 400.717C2468.47 389.903 2533.68 378.781 2598.65 367.103C2891.51 314.284 3181.32 252.65 3458.97 173.12C3505.39 159.826 3551.44 146.018 3597.15 131.785C3636.8 119.408 3676.18 106.691 3715.52 93.9143C3826.21 57.9466 3939.6 18.1607 4067.84 20.6739C4183.37 23.6165 4291.81 52.8066 4381.25 98.4818C4466.35 142.461 4535.66 199.393 4575.59 264.399C4592.89 293.172 4605.66 323.528 4605.48 354.524C4605.45 354.512 4605.45 354.508 4605.42 354.495L4605.43 354.508ZM2300.48 414.353C2357.86 420.966 2415.33 427.222 2472.93 433.031C2552.75 440.916 2632.96 444.616 2713.56 447.361C2741.79 448.329 2770.02 449.327 2798.23 450.556C2836.9 452.248 2875.6 453.68 2914.3 455.094C3003.38 458.327 3092.41 461.859 3181.06 468.468C3303.42 477.877 3424.51 492.371 3545.49 507.13C3585.99 512.068 3626.51 516.998 3667.09 521.704C3754.33 531.795 3841.81 541.195 3929.66 548.899C4001.41 555.192 4078.54 564.117 4151.2 559.478C4278.58 550.953 4418.45 530.545 4514.84 473.486C4527.95 465.589 4540.56 457.418 4551.6 448.321C4617.73 394.218 4607.21 324.909 4570.84 264.454C4491.91 136.096 4290.86 25.8392 4067.3 21.4022C3941.13 18.9311 3828.82 58.8643 3719.98 94.2258C3680.64 107.002 3641.26 119.724 3601.61 132.105C3555.87 146.355 3509.81 160.167 3463.37 173.469C3185.55 253.054 2895.55 314.722 2602.5 367.574C2537.49 379.277 2472.23 390.395 2406.85 401.21C2371.82 406.859 2336.36 411.031 2300.6 414.361C2300.56 414.361 2300.53 414.357 2300.48 414.353ZM1103.49 285.001C1103.58 372.731 1279.97 392.071 1385.7 400.318C1557.9 413.334 1731.14 421.875 1904.53 424.528C2033.57 426.321 2163.75 425.492 2291.82 414.281C2171.61 400.288 2051.92 384.67 1932.38 368.593C1908.47 365.373 1884.56 362.144 1860.66 358.907C1733.94 341.765 1607.21 324.577 1479.5 310.575C1354.74 297.062 1229.72 284.504 1104.53 272.641C1103.87 276.725 1103.51 280.892 1103.54 284.997C1103.51 284.997 1103.5 285.001 1103.48 285.005L1103.49 285.001ZM1099.84 271.332C1102.39 258.181 1106.94 245.35 1111.97 232.498C1120.08 211.916 1135.18 178.824 1084.68 178.146C1056.46 177.498 1028.04 190.148 1005.9 199.683C968.743 215.684 934.454 234.321 900.346 252.784C921.771 254.788 943.203 256.762 964.635 258.741C1009.71 262.892 1054.78 267.072 1099.83 271.324V271.332H1099.84Z" fill="url(#paint38_linear_1779_1730)" style=""/>
<path d="M4650.92 340.047C4650.93 379.025 4631.11 416.916 4591.83 447.146C4579.97 456.26 4566.66 464.469 4552.8 472.35C4450.28 529.362 4307.56 549.4 4175.46 558.211C4106.52 562.522 4034.48 555.837 3966.11 550.747C3874.43 543.923 3783.12 535.129 3692.04 525.704C3646.31 520.947 3600.64 515.945 3554.98 510.94C3442.68 498.614 3330.31 486.473 3217.25 477.199C3131.52 470.304 3045.48 465.244 2959.42 460.297C2917.2 457.868 2874.99 455.431 2832.81 452.783C2805.56 451.078 2778.29 449.483 2751.01 447.917C2667.86 443.122 2584.89 437.851 2502.39 429.579C2458.68 425.13 2415.02 420.511 2371.41 415.729C2230.44 430.606 2085.86 431.398 1943.35 429.36C1766.74 426.595 1590.26 417.792 1414.93 404.186C1333.65 397.745 1234.26 388.248 1172.55 350.412C1138.29 329.401 1127.75 301.129 1133.88 271.867C1096.51 268.061 1059.14 264.285 1021.76 260.505C993.524 257.651 965.281 254.805 937.051 251.921C932.411 254.456 927.71 257.007 923.003 259.558C911.977 265.552 900.939 271.534 889.9 277.521C888.788 278.135 888.229 278.438 887.117 279.053C867.762 289.581 848.374 300.076 828.64 310.323C729.983 361.134 617.603 407.2 487.207 412.715C449.556 413.759 412.771 411.414 376.199 405.643C377.637 405.441 378.35 405.344 379.788 405.142C414.842 410.661 449.989 412.968 486.089 411.995C614.148 407.402 727.246 359.576 823.933 310.112C843.687 299.887 863.081 289.396 882.403 278.851C883.515 278.236 884.074 277.933 885.186 277.318C896.245 271.349 907.27 265.354 918.289 259.36C923.129 256.746 927.956 254.119 932.77 251.484C914.261 249.581 895.745 247.67 877.27 245.64C878.408 245.4 878.974 245.283 880.113 245.047C898.096 247.025 916.112 248.882 934.128 250.738C970.82 230.902 1007.49 210.561 1047.63 193.507C1070.1 183.964 1097.23 173.082 1125.45 173.76C1143.72 174.214 1161.4 178.087 1164.59 190.704C1167.87 203.687 1159.03 218.303 1153.54 230.574C1147.56 244.095 1142 257.575 1138.69 271.475C1259.34 283.768 1379.89 296.452 1500.29 309.666C1629.06 323.907 1757.24 340.157 1885.42 356.364C1910.68 359.563 1935.95 362.746 1961.22 365.928C2097.7 382.99 2234.28 399.711 2371.33 414.828C2397.62 411.945 2423.8 408.636 2449.6 404.3C2515.6 393.233 2581.42 381.77 2647.05 369.865C2942.13 315.694 3234.13 252.54 3513.12 170.682C3559.58 157.051 3605.65 142.886 3651.36 128.266C3690.3 115.784 3729 103.003 3767.64 90.134C3879.4 52.9413 3994.33 11.4041 4124.66 13.8584C4350.17 18.1481 4558.73 129.52 4629.33 262.547C4642.33 287.822 4650.39 313.463 4650.91 340.089V340.051L4650.92 340.047ZM2375.61 415.254C2418.72 419.977 2461.86 424.544 2505.05 428.944C2587.24 437.182 2669.91 442.427 2752.74 447.205C2780.05 448.784 2807.36 450.375 2834.66 452.084C2876.78 454.732 2918.92 457.174 2961.07 459.59C3047.35 464.545 3133.6 469.613 3219.55 476.53C3332.79 485.812 3445.33 497.97 3557.82 510.317C3603.45 515.322 3649.07 520.328 3694.76 525.072C3796.65 535.592 3898.81 545.514 4001.49 552.469C4057.87 556.287 4116.87 561.099 4173.62 557.512C4304.81 548.756 4446.37 528.76 4548.15 472.135C4562.02 464.28 4575.29 456.088 4587.14 446.991C4656.11 394.352 4656.75 324.892 4624.57 262.555C4589.24 195.949 4520.34 137.918 4435.42 93.245C4346.65 47.7886 4239.31 17.3735 4124.19 14.5404C3995.95 12.124 3882.07 53.8253 3772.17 90.3908C3733.51 103.247 3694.79 116.045 3655.83 128.543C3610.09 143.168 3564 157.346 3517.5 170.986C3238.34 252.89 2946.16 316.086 2650.9 370.29C2585.23 382.207 2519.37 393.683 2453.33 404.755C2427.73 409.057 2401.76 412.366 2375.68 415.245C2375.65 415.245 2375.65 415.249 2375.62 415.254H2375.61ZM1136.85 288.84C1136.95 375.737 1312.49 395.199 1417.09 403.496C1591.85 417.06 1767.74 425.841 1943.78 428.594C2084.74 430.611 2227.73 429.844 2367.2 415.237C2230.52 400.153 2094.31 383.483 1958.21 366.459C1932.93 363.272 1907.67 360.085 1882.39 356.894C1754.3 340.7 1626.21 324.45 1497.52 310.226C1378.01 297.108 1258.34 284.525 1138.58 272.309C1137.61 277.857 1137 283.254 1136.78 288.832C1136.81 288.832 1136.82 288.836 1136.84 288.84H1136.85ZM1134.06 270.966C1137.41 257.217 1142.88 243.872 1148.85 230.498C1158.04 209.875 1176.2 175.717 1124.65 174.463C1096.06 173.739 1067.1 187.176 1044.92 196.955C1007.57 213.432 973.011 232.426 938.463 251.147C967.105 254.077 995.754 256.965 1024.41 259.861C1060.96 263.553 1097.51 267.249 1134.05 270.97L1134.06 270.966Z" fill="url(#paint39_linear_1779_1730)" style=""/>
<path d="M4698.19 325.848C4698.2 370.546 4673.18 411.903 4627.4 445.837C4614.53 454.879 4600.8 463.147 4586.12 471.007C4478.79 527.312 4333.19 547.215 4197.91 556.232C4141.05 559.853 4082.35 555.992 4025.7 552.772C3923.44 546.962 3821.59 538.282 3719.98 529.075C3658.09 523.43 3596.29 517.41 3534.48 511.39C3441.64 502.344 3348.79 493.365 3255.73 485.236C3178.62 478.559 3101.38 472.531 3024.12 466.528C2972.38 462.507 2920.64 458.466 2868.93 454.256C2845.22 452.328 2821.5 450.43 2797.77 448.54C2709.91 441.518 2622.08 434.336 2534.62 425.454C2505.04 422.406 2475.46 419.316 2445.89 416.18C2294.27 435.106 2136.76 435.62 1982.86 433.347C1803.55 430.459 1624.38 421.383 1446.41 407.322C1365.04 400.726 1264.58 390.959 1203.82 352.167C1169.63 330.34 1160.82 301.208 1168.33 271.652C1166.66 271.471 1164.98 271.294 1163.38 271.105C1100.5 264.235 1037.62 257.402 974.781 250.385C973.915 250.865 972.99 251.349 972.117 251.829C957.43 259.802 942.743 267.775 928.002 275.706C907.003 286.984 885.91 298.186 864.392 309.068C760.661 361.1 642.935 408.249 507.366 413.89C468.45 414.963 430.407 412.593 392.59 406.67C394.001 406.468 394.707 406.367 396.119 406.169C432.404 411.861 468.903 414.197 506.261 413.174C639.5 408.497 758.051 359.53 859.758 308.849C881.276 297.98 902.376 286.773 923.368 275.5C938.129 267.586 952.816 259.617 967.484 251.631C968.536 251.054 969.587 250.486 970.639 249.922C949.274 247.526 927.915 245.127 906.597 242.567C907.782 242.332 908.381 242.214 909.566 241.982C930.372 244.466 951.211 246.819 972.058 249.155C1009.77 228.684 1047.29 207.547 1088.39 189.794C1110.54 180.23 1137.72 169.116 1165.79 170.034C1184.25 170.548 1201.89 174.677 1204.33 187.521C1206.9 200.975 1197.06 215.975 1190.85 228.52C1183.83 242.605 1177.41 256.729 1173.34 271.286C1288.52 283.869 1403.68 296.489 1518.79 309.287C1632.35 321.962 1745.7 335.332 1859.06 348.685C1901.77 353.716 1944.48 358.747 1987.19 363.752C2139.84 381.551 2292.61 398.97 2445.69 415.254C2462.7 413.043 2479.58 410.593 2496.37 407.815C2563.02 396.495 2629.49 384.758 2695.74 372.555C2993.17 317.332 3287.23 252.515 3567.44 168.241C3613.99 154.244 3660.12 139.695 3705.87 124.691C3744.09 112.134 3782.06 99.2859 3819.97 86.3579C3932.81 47.9443 4049.33 4.57598 4181.77 6.9713C4299.35 9.76654 4408.96 40.691 4499.06 87.625C4583.61 132.871 4652.84 192.674 4683.28 260.623C4692.83 281.92 4697.85 303.717 4698.31 325.848H4698.19ZM2449.68 415.7C2478.85 418.79 2508.04 421.842 2537.23 424.847C2624.55 433.722 2712.23 440.878 2799.96 447.883C2823.7 449.777 2847.44 451.676 2871.18 453.612C2922.86 457.826 2974.57 461.855 3026.29 465.875C3103.6 471.887 3180.9 477.919 3258.08 484.6C3351.22 492.72 3444.16 501.717 3537.08 510.776C3598.85 516.796 3660.61 522.816 3722.46 528.452C3823.06 537.566 3923.89 546.108 4025.13 551.9C4081.3 555.117 4139.66 559.145 4196.06 555.563C4330.45 546.6 4474.88 526.731 4581.49 470.809C4596.16 462.97 4609.87 454.728 4622.7 445.694C4693.45 393.346 4707.49 325.726 4678.38 260.69C4648.02 192.8 4578.82 133.052 4494.37 87.8439C4405.42 41.5161 4297.32 10.4906 4181.15 7.72063C4050.79 5.3632 3935.31 48.8957 3824.32 86.6694C3786.38 99.6016 3748.39 112.445 3710.15 125.011C3664.37 140.032 3618.21 154.585 3571.64 168.594C3291.23 252.927 2996.97 317.778 2699.34 373.034C2633.04 385.255 2566.54 396.996 2499.85 408.32C2483.24 411.073 2466.55 413.511 2449.73 415.704C2449.7 415.704 2449.7 415.7 2449.67 415.696L2449.68 415.7ZM1170.26 292.322C1170.42 378.537 1344.67 398.246 1448.51 406.674C1625.92 420.688 1804.51 429.739 1983.25 432.623C2135.63 434.871 2291.49 434.374 2441.63 415.75C2288.88 399.497 2136.44 382.123 1984.12 364.346C1941.37 359.34 1898.64 354.31 1855.91 349.279C1742.58 335.926 1629.25 322.564 1515.73 309.897C1401.5 297.192 1287.21 284.673 1172.92 272.191C1171.42 278.918 1170.5 285.544 1170.26 292.334V292.326V292.322ZM1168.46 270.785C1172.61 256.384 1179.02 242.445 1185.91 228.486C1195.94 208.216 1217.42 172.19 1164.69 170.783C1135.66 169.979 1106.09 184.137 1083.82 194.173C1046.11 211.171 1011.16 230.578 976.086 249.648C1039.4 256.725 1102.76 263.607 1166.11 270.528C1166.92 270.612 1167.72 270.701 1168.52 270.793C1168.49 270.793 1168.48 270.789 1168.46 270.785Z" fill="url(#paint40_linear_1779_1730)" style=""/>
<path d="M4746.88 311.463C4745.88 361.42 4716.77 407.891 4662.98 444.511C4552.24 520.003 4375.59 543.931 4220.44 554.258C4151.87 558.665 4080.87 553.896 4012.49 550.271C3793.12 538.644 3574.68 518.968 3356.87 499.056C3093.07 474.939 2829.77 448.582 2566.74 421.341C2550.56 419.665 2534.4 417.986 2518.23 416.302C2455 425.546 2390.17 430.37 2325.54 433.536C2186.33 440.352 2046.14 439.047 1906.79 434.664C1763.4 430.156 1620.26 421.938 1477.84 410.488C1396.45 403.748 1294.91 393.687 1235.11 354.032C1201 331.417 1193.79 301.486 1202.56 271.656C1138.99 264.251 1075.45 256.779 1011.98 249.063C975.207 269.088 938.188 288.912 899.985 307.839C792.233 360.59 667.49 410.202 527.613 415.089C487.339 416.222 447.957 413.835 408.809 407.726C410.22 407.524 410.926 407.428 412.337 407.226C449.981 413.077 487.838 415.439 526.561 414.369C665.506 408.589 788.232 360.405 895.405 307.62C933.781 288.6 970.959 268.676 1007.9 248.558C983.762 245.615 959.634 242.656 935.565 239.524C936.83 239.296 937.456 239.183 938.721 238.955C962.237 242.007 985.813 244.904 1009.38 247.783C1011.37 246.705 1013.34 245.628 1015.32 244.558C1051.27 224.979 1086.92 204.764 1125.86 187.538C1148.71 177.426 1176.7 165.542 1205.9 166.334C1224.67 166.902 1242.03 171.305 1243.79 184.381C1245.67 198.332 1234.89 213.626 1227.94 226.49C1220.04 241.245 1212.58 256.005 1207.64 271.29C1532.28 309.089 1857.46 345.052 2182.92 379.938C2294.53 391.902 2406.17 403.706 2517.87 415.342C2526.25 414.075 2534.6 412.744 2542.93 411.343C2900.01 349.915 3254.31 277.049 3588.7 175.936C3646.49 158.462 3703.61 140.128 3760.17 121.109C3797.6 108.497 3834.81 95.6149 3871.97 82.6743C3985.91 43.0062 4104.08 -2.23965 4238.71 0.100945C4357.36 2.8162 4467.8 34.3974 4558.1 82.1817C4642.6 128.135 4711.67 189.281 4737.11 258.716C4743.2 276.148 4746.68 293.585 4747.01 311.442C4746.96 311.451 4746.93 311.455 4746.89 311.463H4746.88ZM2521.69 415.792C2537.57 417.447 2553.45 419.093 2569.33 420.734C2915.82 456.618 3262.74 491.457 3610.83 520.61C3775.42 534.392 3940.96 548.373 4106.91 553.631C4143.89 554.801 4181.54 555.95 4218.47 553.576C4372.75 543.304 4548.11 519.401 4658.21 444.347C4733.2 393.481 4755.52 325.907 4732.09 258.766C4706.65 189.399 4637.72 128.303 4553.27 82.3964C4464.08 35.2141 4355.24 3.54869 4237.95 0.846062C4105.42 -1.46085 3988.26 43.9703 3876.16 82.9942C3839 95.9348 3801.8 108.821 3764.35 121.437C3707.77 140.465 3650.61 158.811 3592.78 176.294C3258.17 277.47 2903.63 350.378 2546.32 411.852C2538.13 413.224 2529.93 414.529 2521.69 415.784V415.792H2521.69ZM1203.54 295.685C1203.19 380.991 1376.79 401.29 1480.01 409.848C1757.31 432.139 2041.8 446.38 2321.14 432.985C2385.85 429.882 2450.76 425.104 2514.07 415.889C2403.6 404.38 2293.16 392.702 2182.76 380.873C1857.21 345.983 1531.92 310.019 1207.18 272.212C1205.12 280.004 1203.56 287.8 1203.53 295.685H1203.54ZM1202.74 270.776C1207.71 255.668 1215.09 241.06 1222.91 226.461C1233.65 206.545 1258.58 168.649 1204.65 167.087C1176.34 166.409 1148.23 179.695 1126.47 189.55C1089.1 206.469 1054.55 225.842 1019.77 244.79C1017.6 245.952 1015.5 247.135 1013.27 248.318C1076.35 255.996 1139.5 263.422 1202.68 270.776H1202.74Z" fill="url(#paint41_linear_1779_1730)" style=""/>
</g>
</g>
<defs>
<linearGradient id="paint0_linear_1779_1730" x1="-596.991" y1="398.264" x2="3328.71" y2="398.264" gradientUnits="userSpaceOnUse">
<stop stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.02" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.06" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.11" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.15" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.3" stop-color="white" style="stop-color:white;stop-opacity:1;"/>
<stop offset="0.47" stop-color="#7FA2C3" style="stop-color:#7FA2C3;stop-color:color(display-p3 0.4977 0.6339 0.7646);stop-opacity:1;"/>
<stop offset="0.64" stop-color="#6E90BD" style="stop-color:#6E90BD;stop-color:color(display-p3 0.4300 0.5628 0.7399);stop-opacity:1;"/>
<stop offset="0.79" stop-color="#7FA2C3" style="stop-color:#7FA2C3;stop-color:color(display-p3 0.4980 0.6353 0.7647);stop-opacity:1;"/>
<stop offset="1" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
</linearGradient>
<linearGradient id="paint1_linear_1779_1730" x1="-558.94" y1="401.337" x2="3355.61" y2="401.337" gradientUnits="userSpaceOnUse">
<stop stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.02" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.06" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.11" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.15" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.3" stop-color="white" style="stop-color:white;stop-opacity:1;"/>
<stop offset="0.47" stop-color="#7FA2C3" style="stop-color:#7FA2C3;stop-color:color(display-p3 0.4977 0.6339 0.7646);stop-opacity:1;"/>
<stop offset="0.64" stop-color="#6E90BD" style="stop-color:#6E90BD;stop-color:color(display-p3 0.4300 0.5628 0.7399);stop-opacity:1;"/>
<stop offset="0.79" stop-color="#7FA2C3" style="stop-color:#7FA2C3;stop-color:color(display-p3 0.4980 0.6353 0.7647);stop-opacity:1;"/>
<stop offset="1" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
</linearGradient>
<linearGradient id="paint2_linear_1779_1730" x1="-520.999" y1="404.429" x2="3382.1" y2="404.429" gradientUnits="userSpaceOnUse">
<stop stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.02" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.06" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.11" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.15" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.3" stop-color="white" style="stop-color:white;stop-opacity:1;"/>
<stop offset="0.47" stop-color="#7FA2C3" style="stop-color:#7FA2C3;stop-color:color(display-p3 0.4977 0.6339 0.7646);stop-opacity:1;"/>
<stop offset="0.64" stop-color="#6E90BD" style="stop-color:#6E90BD;stop-color:color(display-p3 0.4300 0.5628 0.7399);stop-opacity:1;"/>
<stop offset="0.79" stop-color="#7FA2C3" style="stop-color:#7FA2C3;stop-color:color(display-p3 0.4980 0.6353 0.7647);stop-opacity:1;"/>
<stop offset="1" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
</linearGradient>
<linearGradient id="paint3_linear_1779_1730" x1="-483.122" y1="407.535" x2="3409.76" y2="407.535" gradientUnits="userSpaceOnUse">
<stop stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.02" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.06" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.11" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.15" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.3" stop-color="white" style="stop-color:white;stop-opacity:1;"/>
<stop offset="0.47" stop-color="#7FA2C3" style="stop-color:#7FA2C3;stop-color:color(display-p3 0.4977 0.6339 0.7646);stop-opacity:1;"/>
<stop offset="0.64" stop-color="#6E90BD" style="stop-color:#6E90BD;stop-color:color(display-p3 0.4300 0.5628 0.7399);stop-opacity:1;"/>
<stop offset="0.79" stop-color="#7FA2C3" style="stop-color:#7FA2C3;stop-color:color(display-p3 0.4980 0.6353 0.7647);stop-opacity:1;"/>
<stop offset="1" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
</linearGradient>
<linearGradient id="paint4_linear_1779_1730" x1="-445.216" y1="410.592" x2="3437.36" y2="410.592" gradientUnits="userSpaceOnUse">
<stop stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.02" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.06" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.11" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.15" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.3" stop-color="white" style="stop-color:white;stop-opacity:1;"/>
<stop offset="0.47" stop-color="#7FA2C3" style="stop-color:#7FA2C3;stop-color:color(display-p3 0.4977 0.6339 0.7646);stop-opacity:1;"/>
<stop offset="0.64" stop-color="#6E90BD" style="stop-color:#6E90BD;stop-color:color(display-p3 0.4300 0.5628 0.7399);stop-opacity:1;"/>
<stop offset="0.79" stop-color="#7FA2C3" style="stop-color:#7FA2C3;stop-color:color(display-p3 0.4980 0.6353 0.7647);stop-opacity:1;"/>
<stop offset="1" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
</linearGradient>
<linearGradient id="paint5_linear_1779_1730" x1="-407.136" y1="413.629" x2="3465.48" y2="413.629" gradientUnits="userSpaceOnUse">
<stop stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.02" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.06" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.11" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.15" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.3" stop-color="white" style="stop-color:white;stop-opacity:1;"/>
<stop offset="0.47" stop-color="#7FA2C3" style="stop-color:#7FA2C3;stop-color:color(display-p3 0.4977 0.6339 0.7646);stop-opacity:1;"/>
<stop offset="0.64" stop-color="#6E90BD" style="stop-color:#6E90BD;stop-color:color(display-p3 0.4300 0.5628 0.7399);stop-opacity:1;"/>
<stop offset="0.79" stop-color="#7FA2C3" style="stop-color:#7FA2C3;stop-color:color(display-p3 0.4980 0.6353 0.7647);stop-opacity:1;"/>
<stop offset="1" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
</linearGradient>
<linearGradient id="paint6_linear_1779_1730" x1="-369.37" y1="416.735" x2="3493.49" y2="416.735" gradientUnits="userSpaceOnUse">
<stop stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.02" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.06" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.11" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.15" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.3" stop-color="white" style="stop-color:white;stop-opacity:1;"/>
<stop offset="0.47" stop-color="#7FA2C3" style="stop-color:#7FA2C3;stop-color:color(display-p3 0.4977 0.6339 0.7646);stop-opacity:1;"/>
<stop offset="0.64" stop-color="#6E90BD" style="stop-color:#6E90BD;stop-color:color(display-p3 0.4300 0.5628 0.7399);stop-opacity:1;"/>
<stop offset="0.79" stop-color="#7FA2C3" style="stop-color:#7FA2C3;stop-color:color(display-p3 0.4980 0.6353 0.7647);stop-opacity:1;"/>
<stop offset="1" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
</linearGradient>
<linearGradient id="paint7_linear_1779_1730" x1="-331.896" y1="419.788" x2="3521.7" y2="419.788" gradientUnits="userSpaceOnUse">
<stop stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.02" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.06" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.11" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.15" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.3" stop-color="white" style="stop-color:white;stop-opacity:1;"/>
<stop offset="0.47" stop-color="#7FA2C3" style="stop-color:#7FA2C3;stop-color:color(display-p3 0.4977 0.6339 0.7646);stop-opacity:1;"/>
<stop offset="0.64" stop-color="#6E90BD" style="stop-color:#6E90BD;stop-color:color(display-p3 0.4300 0.5628 0.7399);stop-opacity:1;"/>
<stop offset="0.79" stop-color="#7FA2C3" style="stop-color:#7FA2C3;stop-color:color(display-p3 0.4980 0.6353 0.7647);stop-opacity:1;"/>
<stop offset="1" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
</linearGradient>
<linearGradient id="paint8_linear_1779_1730" x1="-294.06" y1="421.855" x2="3550.41" y2="421.855" gradientUnits="userSpaceOnUse">
<stop stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.02" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.06" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.11" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.15" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.3" stop-color="white" style="stop-color:white;stop-opacity:1;"/>
<stop offset="0.47" stop-color="#7FA2C3" style="stop-color:#7FA2C3;stop-color:color(display-p3 0.4977 0.6339 0.7646);stop-opacity:1;"/>
<stop offset="0.64" stop-color="#6E90BD" style="stop-color:#6E90BD;stop-color:color(display-p3 0.4300 0.5628 0.7399);stop-opacity:1;"/>
<stop offset="0.79" stop-color="#7FA2C3" style="stop-color:#7FA2C3;stop-color:color(display-p3 0.4980 0.6353 0.7647);stop-opacity:1;"/>
<stop offset="1" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
</linearGradient>
<linearGradient id="paint9_linear_1779_1730" x1="-256.513" y1="417.619" x2="3579.3" y2="417.619" gradientUnits="userSpaceOnUse">
<stop stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.02" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.06" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.11" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.15" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.3" stop-color="white" style="stop-color:white;stop-opacity:1;"/>
<stop offset="0.47" stop-color="#7FA2C3" style="stop-color:#7FA2C3;stop-color:color(display-p3 0.4977 0.6339 0.7646);stop-opacity:1;"/>
<stop offset="0.64" stop-color="#6E90BD" style="stop-color:#6E90BD;stop-color:color(display-p3 0.4300 0.5628 0.7399);stop-opacity:1;"/>
<stop offset="0.79" stop-color="#7FA2C3" style="stop-color:#7FA2C3;stop-color:color(display-p3 0.4980 0.6353 0.7647);stop-opacity:1;"/>
<stop offset="1" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
</linearGradient>
<linearGradient id="paint10_linear_1779_1730" x1="-218.534" y1="413.282" x2="3608.44" y2="413.282" gradientUnits="userSpaceOnUse">
<stop stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.02" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.06" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.11" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.15" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.3" stop-color="white" style="stop-color:white;stop-opacity:1;"/>
<stop offset="0.47" stop-color="#7FA2C3" style="stop-color:#7FA2C3;stop-color:color(display-p3 0.4977 0.6339 0.7646);stop-opacity:1;"/>
<stop offset="0.64" stop-color="#6E90BD" style="stop-color:#6E90BD;stop-color:color(display-p3 0.4300 0.5628 0.7399);stop-opacity:1;"/>
<stop offset="0.79" stop-color="#7FA2C3" style="stop-color:#7FA2C3;stop-color:color(display-p3 0.4980 0.6353 0.7647);stop-opacity:1;"/>
<stop offset="1" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
</linearGradient>
<linearGradient id="paint11_linear_1779_1730" x1="-181.118" y1="408.96" x2="3638.08" y2="408.96" gradientUnits="userSpaceOnUse">
<stop stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.02" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.06" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.11" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.15" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.3" stop-color="white" style="stop-color:white;stop-opacity:1;"/>
<stop offset="0.47" stop-color="#7FA2C3" style="stop-color:#7FA2C3;stop-color:color(display-p3 0.4977 0.6339 0.7646);stop-opacity:1;"/>
<stop offset="0.64" stop-color="#6E90BD" style="stop-color:#6E90BD;stop-color:color(display-p3 0.4300 0.5628 0.7399);stop-opacity:1;"/>
<stop offset="0.79" stop-color="#7FA2C3" style="stop-color:#7FA2C3;stop-color:color(display-p3 0.4980 0.6353 0.7647);stop-opacity:1;"/>
<stop offset="1" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
</linearGradient>
<linearGradient id="paint12_linear_1779_1730" x1="-144.167" y1="404.61" x2="3668.11" y2="404.61" gradientUnits="userSpaceOnUse">
<stop stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.02" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.06" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.11" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.15" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.3" stop-color="white" style="stop-color:white;stop-opacity:1;"/>
<stop offset="0.47" stop-color="#7FA2C3" style="stop-color:#7FA2C3;stop-color:color(display-p3 0.4977 0.6339 0.7646);stop-opacity:1;"/>
<stop offset="0.64" stop-color="#6E90BD" style="stop-color:#6E90BD;stop-color:color(display-p3 0.4300 0.5628 0.7399);stop-opacity:1;"/>
<stop offset="0.79" stop-color="#7FA2C3" style="stop-color:#7FA2C3;stop-color:color(display-p3 0.4980 0.6353 0.7647);stop-opacity:1;"/>
<stop offset="1" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
</linearGradient>
<linearGradient id="paint13_linear_1779_1730" x1="-107.009" y1="400.258" x2="3698.18" y2="400.258" gradientUnits="userSpaceOnUse">
<stop stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.02" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.06" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.11" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.15" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.3" stop-color="white" style="stop-color:white;stop-opacity:1;"/>
<stop offset="0.47" stop-color="#7FA2C3" style="stop-color:#7FA2C3;stop-color:color(display-p3 0.4977 0.6339 0.7646);stop-opacity:1;"/>
<stop offset="0.64" stop-color="#6E90BD" style="stop-color:#6E90BD;stop-color:color(display-p3 0.4300 0.5628 0.7399);stop-opacity:1;"/>
<stop offset="0.79" stop-color="#7FA2C3" style="stop-color:#7FA2C3;stop-color:color(display-p3 0.4980 0.6353 0.7647);stop-opacity:1;"/>
<stop offset="1" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
</linearGradient>
<linearGradient id="paint14_linear_1779_1730" x1="-70.0247" y1="395.899" x2="3728.62" y2="395.899" gradientUnits="userSpaceOnUse">
<stop stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.02" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.06" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.11" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.15" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.3" stop-color="white" style="stop-color:white;stop-opacity:1;"/>
<stop offset="0.47" stop-color="#7FA2C3" style="stop-color:#7FA2C3;stop-color:color(display-p3 0.4977 0.6339 0.7646);stop-opacity:1;"/>
<stop offset="0.64" stop-color="#6E90BD" style="stop-color:#6E90BD;stop-color:color(display-p3 0.4300 0.5628 0.7399);stop-opacity:1;"/>
<stop offset="0.79" stop-color="#7FA2C3" style="stop-color:#7FA2C3;stop-color:color(display-p3 0.4980 0.6353 0.7647);stop-opacity:1;"/>
<stop offset="1" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
</linearGradient>
<linearGradient id="paint15_linear_1779_1730" x1="-34.7767" y1="391.536" x2="3759.61" y2="391.536" gradientUnits="userSpaceOnUse">
<stop stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.02" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.06" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.11" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.15" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.3" stop-color="white" style="stop-color:white;stop-opacity:1;"/>
<stop offset="0.47" stop-color="#7FA2C3" style="stop-color:#7FA2C3;stop-color:color(display-p3 0.4977 0.6339 0.7646);stop-opacity:1;"/>
<stop offset="0.64" stop-color="#6E90BD" style="stop-color:#6E90BD;stop-color:color(display-p3 0.4300 0.5628 0.7399);stop-opacity:1;"/>
<stop offset="0.79" stop-color="#7FA2C3" style="stop-color:#7FA2C3;stop-color:color(display-p3 0.4980 0.6353 0.7647);stop-opacity:1;"/>
<stop offset="1" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
</linearGradient>
<linearGradient id="paint16_linear_1779_1730" x1="1.44208" y1="387.181" x2="3790.69" y2="387.181" gradientUnits="userSpaceOnUse">
<stop stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.02" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.06" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.11" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.15" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.3" stop-color="white" style="stop-color:white;stop-opacity:1;"/>
<stop offset="0.47" stop-color="#7FA2C3" style="stop-color:#7FA2C3;stop-color:color(display-p3 0.4977 0.6339 0.7646);stop-opacity:1;"/>
<stop offset="0.64" stop-color="#6E90BD" style="stop-color:#6E90BD;stop-color:color(display-p3 0.4300 0.5628 0.7399);stop-opacity:1;"/>
<stop offset="0.79" stop-color="#7FA2C3" style="stop-color:#7FA2C3;stop-color:color(display-p3 0.4980 0.6353 0.7647);stop-opacity:1;"/>
<stop offset="1" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
</linearGradient>
<linearGradient id="paint17_linear_1779_1730" x1="17.8874" y1="382.805" x2="3822.43" y2="382.805" gradientUnits="userSpaceOnUse">
<stop stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.02" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.06" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.11" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.15" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.3" stop-color="white" style="stop-color:white;stop-opacity:1;"/>
<stop offset="0.47" stop-color="#7FA2C3" style="stop-color:#7FA2C3;stop-color:color(display-p3 0.4977 0.6339 0.7646);stop-opacity:1;"/>
<stop offset="0.64" stop-color="#6E90BD" style="stop-color:#6E90BD;stop-color:color(display-p3 0.4300 0.5628 0.7399);stop-opacity:1;"/>
<stop offset="0.79" stop-color="#7FA2C3" style="stop-color:#7FA2C3;stop-color:color(display-p3 0.4980 0.6353 0.7647);stop-opacity:1;"/>
<stop offset="1" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
</linearGradient>
<linearGradient id="paint18_linear_1779_1730" x1="34.1609" y1="378.429" x2="3854.35" y2="378.429" gradientUnits="userSpaceOnUse">
<stop stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.02" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.06" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.11" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.15" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.3" stop-color="white" style="stop-color:white;stop-opacity:1;"/>
<stop offset="0.47" stop-color="#7FA2C3" style="stop-color:#7FA2C3;stop-color:color(display-p3 0.4977 0.6339 0.7646);stop-opacity:1;"/>
<stop offset="0.64" stop-color="#6E90BD" style="stop-color:#6E90BD;stop-color:color(display-p3 0.4300 0.5628 0.7399);stop-opacity:1;"/>
<stop offset="0.79" stop-color="#7FA2C3" style="stop-color:#7FA2C3;stop-color:color(display-p3 0.4980 0.6353 0.7647);stop-opacity:1;"/>
<stop offset="1" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
</linearGradient>
<linearGradient id="paint19_linear_1779_1730" x1="50.5457" y1="374.051" x2="3886.84" y2="374.051" gradientUnits="userSpaceOnUse">
<stop stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.02" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.06" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.11" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.15" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.3" stop-color="white" style="stop-color:white;stop-opacity:1;"/>
<stop offset="0.47" stop-color="#7FA2C3" style="stop-color:#7FA2C3;stop-color:color(display-p3 0.4977 0.6339 0.7646);stop-opacity:1;"/>
<stop offset="0.64" stop-color="#6E90BD" style="stop-color:#6E90BD;stop-color:color(display-p3 0.4300 0.5628 0.7399);stop-opacity:1;"/>
<stop offset="0.79" stop-color="#7FA2C3" style="stop-color:#7FA2C3;stop-color:color(display-p3 0.4980 0.6353 0.7647);stop-opacity:1;"/>
<stop offset="1" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
</linearGradient>
<linearGradient id="paint20_linear_1779_1730" x1="66.6512" y1="369.678" x2="3919.71" y2="369.678" gradientUnits="userSpaceOnUse">
<stop stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.02" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.06" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.11" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.15" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.3" stop-color="white" style="stop-color:white;stop-opacity:1;"/>
<stop offset="0.47" stop-color="#7FA2C3" style="stop-color:#7FA2C3;stop-color:color(display-p3 0.4977 0.6339 0.7646);stop-opacity:1;"/>
<stop offset="0.64" stop-color="#6E90BD" style="stop-color:#6E90BD;stop-color:color(display-p3 0.4300 0.5628 0.7399);stop-opacity:1;"/>
<stop offset="0.79" stop-color="#7FA2C3" style="stop-color:#7FA2C3;stop-color:color(display-p3 0.4980 0.6353 0.7647);stop-opacity:1;"/>
<stop offset="1" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
</linearGradient>
<linearGradient id="paint21_linear_1779_1730" x1="83.0243" y1="365.29" x2="3953.48" y2="365.29" gradientUnits="userSpaceOnUse">
<stop stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.02" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.06" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.11" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.15" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.3" stop-color="white" style="stop-color:white;stop-opacity:1;"/>
<stop offset="0.47" stop-color="#7FA2C3" style="stop-color:#7FA2C3;stop-color:color(display-p3 0.4977 0.6339 0.7646);stop-opacity:1;"/>
<stop offset="0.64" stop-color="#6E90BD" style="stop-color:#6E90BD;stop-color:color(display-p3 0.4300 0.5628 0.7399);stop-opacity:1;"/>
<stop offset="0.79" stop-color="#7FA2C3" style="stop-color:#7FA2C3;stop-color:color(display-p3 0.4980 0.6353 0.7647);stop-opacity:1;"/>
<stop offset="1" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
</linearGradient>
<linearGradient id="paint22_linear_1779_1730" x1="99.4736" y1="360.913" x2="3988.2" y2="360.913" gradientUnits="userSpaceOnUse">
<stop stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.02" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.06" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.11" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.15" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.3" stop-color="white" style="stop-color:white;stop-opacity:1;"/>
<stop offset="0.47" stop-color="#7FA2C3" style="stop-color:#7FA2C3;stop-color:color(display-p3 0.4977 0.6339 0.7646);stop-opacity:1;"/>
<stop offset="0.64" stop-color="#6E90BD" style="stop-color:#6E90BD;stop-color:color(display-p3 0.4300 0.5628 0.7399);stop-opacity:1;"/>
<stop offset="0.79" stop-color="#7FA2C3" style="stop-color:#7FA2C3;stop-color:color(display-p3 0.4980 0.6353 0.7647);stop-opacity:1;"/>
<stop offset="1" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
</linearGradient>
<linearGradient id="paint23_linear_1779_1730" x1="115.534" y1="356.492" x2="4023.15" y2="356.492" gradientUnits="userSpaceOnUse">
<stop stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.02" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.06" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.11" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.15" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.3" stop-color="white" style="stop-color:white;stop-opacity:1;"/>
<stop offset="0.47" stop-color="#7FA2C3" style="stop-color:#7FA2C3;stop-color:color(display-p3 0.4977 0.6339 0.7646);stop-opacity:1;"/>
<stop offset="0.64" stop-color="#6E90BD" style="stop-color:#6E90BD;stop-color:color(display-p3 0.4300 0.5628 0.7399);stop-opacity:1;"/>
<stop offset="0.79" stop-color="#7FA2C3" style="stop-color:#7FA2C3;stop-color:color(display-p3 0.4980 0.6353 0.7647);stop-opacity:1;"/>
<stop offset="1" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
</linearGradient>
<linearGradient id="paint24_linear_1779_1730" x1="131.788" y1="352.117" x2="4058.46" y2="352.117" gradientUnits="userSpaceOnUse">
<stop stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.02" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.06" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.11" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.15" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.3" stop-color="white" style="stop-color:white;stop-opacity:1;"/>
<stop offset="0.47" stop-color="#7FA2C3" style="stop-color:#7FA2C3;stop-color:color(display-p3 0.4977 0.6339 0.7646);stop-opacity:1;"/>
<stop offset="0.64" stop-color="#6E90BD" style="stop-color:#6E90BD;stop-color:color(display-p3 0.4300 0.5628 0.7399);stop-opacity:1;"/>
<stop offset="0.79" stop-color="#7FA2C3" style="stop-color:#7FA2C3;stop-color:color(display-p3 0.4980 0.6353 0.7647);stop-opacity:1;"/>
<stop offset="1" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
</linearGradient>
<linearGradient id="paint25_linear_1779_1730" x1="148.157" y1="347.759" x2="4094.2" y2="347.759" gradientUnits="userSpaceOnUse">
<stop stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.02" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.06" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.11" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.15" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.3" stop-color="white" style="stop-color:white;stop-opacity:1;"/>
<stop offset="0.47" stop-color="#7FA2C3" style="stop-color:#7FA2C3;stop-color:color(display-p3 0.4977 0.6339 0.7646);stop-opacity:1;"/>
<stop offset="0.64" stop-color="#6E90BD" style="stop-color:#6E90BD;stop-color:color(display-p3 0.4300 0.5628 0.7399);stop-opacity:1;"/>
<stop offset="0.79" stop-color="#7FA2C3" style="stop-color:#7FA2C3;stop-color:color(display-p3 0.4980 0.6353 0.7647);stop-opacity:1;"/>
<stop offset="1" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
</linearGradient>
<linearGradient id="paint26_linear_1779_1730" x1="164.579" y1="343.338" x2="4130.18" y2="343.338" gradientUnits="userSpaceOnUse">
<stop stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.02" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.06" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.11" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.15" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.3" stop-color="white" style="stop-color:white;stop-opacity:1;"/>
<stop offset="0.47" stop-color="#7FA2C3" style="stop-color:#7FA2C3;stop-color:color(display-p3 0.4977 0.6339 0.7646);stop-opacity:1;"/>
<stop offset="0.64" stop-color="#6E90BD" style="stop-color:#6E90BD;stop-color:color(display-p3 0.4300 0.5628 0.7399);stop-opacity:1;"/>
<stop offset="0.79" stop-color="#7FA2C3" style="stop-color:#7FA2C3;stop-color:color(display-p3 0.4980 0.6353 0.7647);stop-opacity:1;"/>
<stop offset="1" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
</linearGradient>
<linearGradient id="paint27_linear_1779_1730" x1="180.698" y1="338.95" x2="4166.54" y2="338.95" gradientUnits="userSpaceOnUse">
<stop stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.02" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.06" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.11" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.15" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.3" stop-color="white" style="stop-color:white;stop-opacity:1;"/>
<stop offset="0.47" stop-color="#7FA2C3" style="stop-color:#7FA2C3;stop-color:color(display-p3 0.4977 0.6339 0.7646);stop-opacity:1;"/>
<stop offset="0.64" stop-color="#6E90BD" style="stop-color:#6E90BD;stop-color:color(display-p3 0.4300 0.5628 0.7399);stop-opacity:1;"/>
<stop offset="0.79" stop-color="#7FA2C3" style="stop-color:#7FA2C3;stop-color:color(display-p3 0.4980 0.6353 0.7647);stop-opacity:1;"/>
<stop offset="1" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
</linearGradient>
<linearGradient id="paint28_linear_1779_1730" x1="197.32" y1="334.537" x2="4203.62" y2="334.537" gradientUnits="userSpaceOnUse">
<stop stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.02" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.06" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.11" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.15" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.3" stop-color="white" style="stop-color:white;stop-opacity:1;"/>
<stop offset="0.47" stop-color="#7FA2C3" style="stop-color:#7FA2C3;stop-color:color(display-p3 0.4977 0.6339 0.7646);stop-opacity:1;"/>
<stop offset="0.64" stop-color="#6E90BD" style="stop-color:#6E90BD;stop-color:color(display-p3 0.4300 0.5628 0.7399);stop-opacity:1;"/>
<stop offset="0.79" stop-color="#7FA2C3" style="stop-color:#7FA2C3;stop-color:color(display-p3 0.4980 0.6353 0.7647);stop-opacity:1;"/>
<stop offset="1" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
</linearGradient>
<linearGradient id="paint29_linear_1779_1730" x1="213.363" y1="330.141" x2="4240.4" y2="330.141" gradientUnits="userSpaceOnUse">
<stop stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.02" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.06" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.11" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.15" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.3" stop-color="white" style="stop-color:white;stop-opacity:1;"/>
<stop offset="0.47" stop-color="#7FA2C3" style="stop-color:#7FA2C3;stop-color:color(display-p3 0.4977 0.6339 0.7646);stop-opacity:1;"/>
<stop offset="0.64" stop-color="#6E90BD" style="stop-color:#6E90BD;stop-color:color(display-p3 0.4300 0.5628 0.7399);stop-opacity:1;"/>
<stop offset="0.79" stop-color="#7FA2C3" style="stop-color:#7FA2C3;stop-color:color(display-p3 0.4980 0.6353 0.7647);stop-opacity:1;"/>
<stop offset="1" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
</linearGradient>
<linearGradient id="paint30_linear_1779_1730" x1="229.743" y1="325.767" x2="4278.06" y2="325.767" gradientUnits="userSpaceOnUse">
<stop stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.02" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.06" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.11" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.15" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.3" stop-color="white" style="stop-color:white;stop-opacity:1;"/>
<stop offset="0.47" stop-color="#7FA2C3" style="stop-color:#7FA2C3;stop-color:color(display-p3 0.4977 0.6339 0.7646);stop-opacity:1;"/>
<stop offset="0.64" stop-color="#6E90BD" style="stop-color:#6E90BD;stop-color:color(display-p3 0.4300 0.5628 0.7399);stop-opacity:1;"/>
<stop offset="0.79" stop-color="#7FA2C3" style="stop-color:#7FA2C3;stop-color:color(display-p3 0.4980 0.6353 0.7647);stop-opacity:1;"/>
<stop offset="1" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
</linearGradient>
<linearGradient id="paint31_linear_1779_1730" x1="245.958" y1="321.491" x2="4316.14" y2="321.491" gradientUnits="userSpaceOnUse">
<stop stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.02" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.06" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.11" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.15" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.3" stop-color="white" style="stop-color:white;stop-opacity:1;"/>
<stop offset="0.47" stop-color="#7FA2C3" style="stop-color:#7FA2C3;stop-color:color(display-p3 0.4977 0.6339 0.7646);stop-opacity:1;"/>
<stop offset="0.64" stop-color="#6E90BD" style="stop-color:#6E90BD;stop-color:color(display-p3 0.4300 0.5628 0.7399);stop-opacity:1;"/>
<stop offset="0.79" stop-color="#7FA2C3" style="stop-color:#7FA2C3;stop-color:color(display-p3 0.4980 0.6353 0.7647);stop-opacity:1;"/>
<stop offset="1" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
</linearGradient>
<linearGradient id="paint32_linear_1779_1730" x1="262.412" y1="317.092" x2="4355.45" y2="317.092" gradientUnits="userSpaceOnUse">
<stop stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.02" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.06" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.11" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.15" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.3" stop-color="white" style="stop-color:white;stop-opacity:1;"/>
<stop offset="0.47" stop-color="#7FA2C3" style="stop-color:#7FA2C3;stop-color:color(display-p3 0.4977 0.6339 0.7646);stop-opacity:1;"/>
<stop offset="0.64" stop-color="#6E90BD" style="stop-color:#6E90BD;stop-color:color(display-p3 0.4300 0.5628 0.7399);stop-opacity:1;"/>
<stop offset="0.79" stop-color="#7FA2C3" style="stop-color:#7FA2C3;stop-color:color(display-p3 0.4980 0.6353 0.7647);stop-opacity:1;"/>
<stop offset="1" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
</linearGradient>
<linearGradient id="paint33_linear_1779_1730" x1="278.503" y1="312.748" x2="4394.4" y2="312.748" gradientUnits="userSpaceOnUse">
<stop stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.02" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.06" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.11" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.15" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.3" stop-color="white" style="stop-color:white;stop-opacity:1;"/>
<stop offset="0.47" stop-color="#7FA2C3" style="stop-color:#7FA2C3;stop-color:color(display-p3 0.4977 0.6339 0.7646);stop-opacity:1;"/>
<stop offset="0.64" stop-color="#6E90BD" style="stop-color:#6E90BD;stop-color:color(display-p3 0.4300 0.5628 0.7399);stop-opacity:1;"/>
<stop offset="0.79" stop-color="#7FA2C3" style="stop-color:#7FA2C3;stop-color:color(display-p3 0.4980 0.6353 0.7647);stop-opacity:1;"/>
<stop offset="1" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
</linearGradient>
<linearGradient id="paint34_linear_1779_1730" x1="294.962" y1="308.266" x2="4434.82" y2="308.266" gradientUnits="userSpaceOnUse">
<stop stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.02" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.06" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.11" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.15" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.3" stop-color="white" style="stop-color:white;stop-opacity:1;"/>
<stop offset="0.47" stop-color="#7FA2C3" style="stop-color:#7FA2C3;stop-color:color(display-p3 0.4977 0.6339 0.7646);stop-opacity:1;"/>
<stop offset="0.64" stop-color="#6E90BD" style="stop-color:#6E90BD;stop-color:color(display-p3 0.4300 0.5628 0.7399);stop-opacity:1;"/>
<stop offset="0.79" stop-color="#7FA2C3" style="stop-color:#7FA2C3;stop-color:color(display-p3 0.4980 0.6353 0.7647);stop-opacity:1;"/>
<stop offset="1" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
</linearGradient>
<linearGradient id="paint35_linear_1779_1730" x1="311.044" y1="303.902" x2="4475.45" y2="303.902" gradientUnits="userSpaceOnUse">
<stop stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.02" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.06" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.11" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.15" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.3" stop-color="white" style="stop-color:white;stop-opacity:1;"/>
<stop offset="0.47" stop-color="#7FA2C3" style="stop-color:#7FA2C3;stop-color:color(display-p3 0.4977 0.6339 0.7646);stop-opacity:1;"/>
<stop offset="0.64" stop-color="#6E90BD" style="stop-color:#6E90BD;stop-color:color(display-p3 0.4300 0.5628 0.7399);stop-opacity:1;"/>
<stop offset="0.79" stop-color="#7FA2C3" style="stop-color:#7FA2C3;stop-color:color(display-p3 0.4980 0.6353 0.7647);stop-opacity:1;"/>
<stop offset="1" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
</linearGradient>
<linearGradient id="paint36_linear_1779_1730" x1="327.404" y1="299.665" x2="4517.85" y2="299.665" gradientUnits="userSpaceOnUse">
<stop stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.02" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.06" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.11" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.15" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.3" stop-color="white" style="stop-color:white;stop-opacity:1;"/>
<stop offset="0.47" stop-color="#7FA2C3" style="stop-color:#7FA2C3;stop-color:color(display-p3 0.4977 0.6339 0.7646);stop-opacity:1;"/>
<stop offset="0.64" stop-color="#6E90BD" style="stop-color:#6E90BD;stop-color:color(display-p3 0.4300 0.5628 0.7399);stop-opacity:1;"/>
<stop offset="0.79" stop-color="#7FA2C3" style="stop-color:#7FA2C3;stop-color:color(display-p3 0.4980 0.6353 0.7647);stop-opacity:1;"/>
<stop offset="1" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
</linearGradient>
<linearGradient id="paint37_linear_1779_1730" x1="343.591" y1="295.329" x2="4560.78" y2="295.329" gradientUnits="userSpaceOnUse">
<stop stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.02" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.06" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.11" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.15" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.3" stop-color="white" style="stop-color:white;stop-opacity:1;"/>
<stop offset="0.47" stop-color="#7FA2C3" style="stop-color:#7FA2C3;stop-color:color(display-p3 0.4977 0.6339 0.7646);stop-opacity:1;"/>
<stop offset="0.64" stop-color="#6E90BD" style="stop-color:#6E90BD;stop-color:color(display-p3 0.4300 0.5628 0.7399);stop-opacity:1;"/>
<stop offset="0.79" stop-color="#7FA2C3" style="stop-color:#7FA2C3;stop-color:color(display-p3 0.4980 0.6353 0.7647);stop-opacity:1;"/>
<stop offset="1" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
</linearGradient>
<linearGradient id="paint38_linear_1779_1730" x1="359.863" y1="290.979" x2="4605.5" y2="290.979" gradientUnits="userSpaceOnUse">
<stop stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.02" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.06" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.11" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.15" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.3" stop-color="white" style="stop-color:white;stop-opacity:1;"/>
<stop offset="0.47" stop-color="#7FA2C3" style="stop-color:#7FA2C3;stop-color:color(display-p3 0.4977 0.6339 0.7646);stop-opacity:1;"/>
<stop offset="0.64" stop-color="#6E90BD" style="stop-color:#6E90BD;stop-color:color(display-p3 0.4300 0.5628 0.7399);stop-opacity:1;"/>
<stop offset="0.79" stop-color="#7FA2C3" style="stop-color:#7FA2C3;stop-color:color(display-p3 0.4980 0.6353 0.7647);stop-opacity:1;"/>
<stop offset="1" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
</linearGradient>
<linearGradient id="paint39_linear_1779_1730" x1="376.209" y1="286.659" x2="4650.94" y2="286.659" gradientUnits="userSpaceOnUse">
<stop stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.02" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.06" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.11" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.15" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.3" stop-color="white" style="stop-color:white;stop-opacity:1;"/>
<stop offset="0.47" stop-color="#7FA2C3" style="stop-color:#7FA2C3;stop-color:color(display-p3 0.4977 0.6339 0.7646);stop-opacity:1;"/>
<stop offset="0.64" stop-color="#6E90BD" style="stop-color:#6E90BD;stop-color:color(display-p3 0.4300 0.5628 0.7399);stop-opacity:1;"/>
<stop offset="0.79" stop-color="#7FA2C3" style="stop-color:#7FA2C3;stop-color:color(display-p3 0.4980 0.6353 0.7647);stop-opacity:1;"/>
<stop offset="1" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
</linearGradient>
<linearGradient id="paint40_linear_1779_1730" x1="392.599" y1="282.269" x2="4698.33" y2="282.269" gradientUnits="userSpaceOnUse">
<stop stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.02" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.06" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.11" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.15" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.3" stop-color="white" style="stop-color:white;stop-opacity:1;"/>
<stop offset="0.47" stop-color="#7FA2C3" style="stop-color:#7FA2C3;stop-color:color(display-p3 0.4977 0.6339 0.7646);stop-opacity:1;"/>
<stop offset="0.64" stop-color="#6E90BD" style="stop-color:#6E90BD;stop-color:color(display-p3 0.4300 0.5628 0.7399);stop-opacity:1;"/>
<stop offset="0.79" stop-color="#7FA2C3" style="stop-color:#7FA2C3;stop-color:color(display-p3 0.4980 0.6353 0.7647);stop-opacity:1;"/>
<stop offset="1" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
</linearGradient>
<linearGradient id="paint41_linear_1779_1730" x1="408.818" y1="278.005" x2="4747.02" y2="278.005" gradientUnits="userSpaceOnUse">
<stop stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.02" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.06" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.11" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.15" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
<stop offset="0.3" stop-color="white" style="stop-color:white;stop-opacity:1;"/>
<stop offset="0.47" stop-color="#7FA2C3" style="stop-color:#7FA2C3;stop-color:color(display-p3 0.4977 0.6339 0.7646);stop-opacity:1;"/>
<stop offset="0.64" stop-color="#6E90BD" style="stop-color:#6E90BD;stop-color:color(display-p3 0.4300 0.5628 0.7399);stop-opacity:1;"/>
<stop offset="0.79" stop-color="#7FA2C3" style="stop-color:#7FA2C3;stop-color:color(display-p3 0.4980 0.6353 0.7647);stop-opacity:1;"/>
<stop offset="1" stop-color="#2B435D" style="stop-color:#2B435D;stop-color:color(display-p3 0.1686 0.2627 0.3647);stop-opacity:1;"/>
</linearGradient>
<clipPath id="clip0_1779_1730">
<rect width="4320" height="323" fill="white" style="fill:white;fill-opacity:1;"/>
</clipPath>
</defs>
</svg>
`;var fs=class{constructor(){ht(this,"container");ht(this,"isAnimating",!1);ht(this,"waveCtn");this.container=document.querySelector(".bottom-wave-box"),this.container.innerHTML="",this.container.style.opacity="1",this.waveCtn=document.createElement("div"),this.waveCtn.style.opacity="0",this.waveCtn.style.width="100%",this.waveCtn.style.position="relative",this.waveCtn.style.top="5px",this.container.append(this.waveCtn);let t=document.createElement("div");t.style.width="100%",t.innerHTML=Ti,this.waveCtn.append(t);let e=document.createElement("div");e.style.width="100%",e.style.height="100%",e.style.scale="-1 1",e.style.position="absolute",e.style.top="0",e.style.left="-100%",e.innerHTML=Ti,this.waveCtn.append(e);let n=document.createElement("div");n.style.width="100%",n.style.height="100%",n.style.position="absolute",n.style.top="0",n.style.left="-200%",n.innerHTML=Ti,this.waveCtn.append(n);let s=document.createElement("div");s.style.width="100%",s.style.height="100%",s.style.scale="-1 1",s.style.position="absolute",s.style.top="0",s.style.left="100%",s.innerHTML=Ti,this.waveCtn.append(s);let o=document.createElement("div");o.style.width="100%",o.style.height="100%",o.style.position="absolute",o.style.top="0",o.style.left="200%",o.innerHTML=Ti,this.waveCtn.append(o)}scrolling(t){if(this.isAnimating)return;this.isAnimating=!0;let e=t===1?"-200vw":"200vw";gsap.to(this.waveCtn,{x:e,duration:be.SCROLL_DUR,ease:be.SCROLL_EASE_BETWEEN_SECTIONS,onComplete:()=>{gsap.set(this.waveCtn,{x:0}),this.isAnimating=!1}})}onPreloaderComplete(){gsap.to(this.waveCtn,{opacity:1,duration:.5,ease:"linear"})}};var va=class{constructor(){ht(this,"isMobile");ht(this,"scrollSections");ht(this,"scrollSnap");ht(this,"mobilePinning");ht(this,"preloader");ht(this,"carousels");ht(this,"animations");ht(this,"modals");ht(this,"mql");ht(this,"nav");ht(this,"waveAnim");ht(this,"waveAnimAlt");ht(this,"preloaderComplete",!1);this.scrollSections=document.querySelectorAll(".section"),this.scrollSnap=new be(this.scrollSections),this.mobilePinning=new Li,this.preloader=new Fi,this.carousels=new Pi,this.animations=new Di,this.modals=new Bi,this.nav=new Ui,this.waveAnim=new ds,this.waveAnimAlt=new fs,document.body.style.overflow="hidden",this.initBreakpointListener(),this.isMobile||gsap.set($("[data-animation]").not(".nav"),{visibility:"hidden"}),window.addEventListener("preloader_complete",this.onPreloaderComplete.bind(this)),window.addEventListener("go_to_section",this.onScrollToSection.bind(this)),window.addEventListener("scrolling",this.onScrolling.bind(this)),window.addEventListener("modal_open",this.onModalOpen.bind(this)),window.addEventListener("modal_closed",this.onModalClosed.bind(this)),window.addEventListener("clicked_nav",this.onClickedNav.bind(this)),this.preloader.start(),this.animations.init(),this.nav.deepLink()}initBreakpointListener(){this.mql=window.matchMedia("(min-width: 992px)"),this.mql.addEventListener("change",this.onChangeBreakpoint.bind(this)),this.onChangeBreakpoint(this.mql)}onModalOpen(){this.isMobile?this.mobilePinning.kill():this.scrollSnap.paused=!0}onModalClosed(){this.isMobile?this.mobilePinning.start():this.scrollSnap.paused=!1}onClickedNav(t){let e=t.detail;if(!this.isMobile){let n=document.querySelector(`[data-section=${e}]`).querySelectorAll(".section")[0],s=[...this.scrollSections].findIndex(o=>o===n);this.scrollSnap.gotoIdx(s,!0)}}onPreloaderComplete(){this.preloaderComplete=!0,document.body.style.overflow="",this.waveAnim.onPreloaderComplete(),this.waveAnimAlt.onPreloaderComplete(),this.onChangeBreakpoint(this.mql)}onScrollToSection(t){let n=this.scrollSections[t.detail].closest(".section_part").dataset.section;this.nav.currentSection=n,window.history.replaceState({},"",`${document.location.origin}#${n==="none"?"top":n}`)}onChangeBreakpoint(t){this.isMobile=!t.matches,this.preloader.isMobile=this.isMobile,this.animations.isMobile=this.isMobile,this.nav.isMobile=this.isMobile,this.waveAnim.isMobile=this.isMobile,this.isMobile&&gsap.set($("[data-animation]").not(".nav"),{visibility:"visible"}),this.preloaderComplete&&(this.isMobile?(this.scrollSnap.kill(),this.mobilePinning.start()):(this.mobilePinning.kill(),this.scrollSnap.start()))}onScrolling(t){this.waveAnimAlt.scrolling(t.detail)}};(function(){document.readyState!=="loading"?i():document.addEventListener("DOMContentLoaded",i);function i(){new va}})();})();
/*! Bundled license information:

three/build/three.core.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
