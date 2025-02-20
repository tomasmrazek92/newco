"use strict";(()=>{var h=window.innerWidth,u={};var E=(i,e,t,o,n)=>{let r=$(i).add(e);r.length<2||(u[t]=0,u[t]=u[t]||0,r.each(function(){let s=`${t}_${u[t]}`;S(this,e,s,[".swiper-arrow",".swiper-nav",".swiper-drag-wrapper"]);let l=_(o,s);z(this,e,s,t,l,n),u[t]++}))},S=(i,e,t,o)=>{o.forEach(n=>{$(i).find(n).addClass(t)}),$(i).find(e).addClass(t)},_=(i,e)=>{let t={el:`.swiper-nav.${e}`,type:"bullets",bulletActiveClass:"cc-active",bulletClass:"swiper-dot",clickable:!0},o=i.pagination?{...t,...i.pagination}:t;return{speed:1e3,navigation:{prevEl:`.swiper-arrow.prev.${e}`,nextEl:`.swiper-arrow.next.${e}`},pagination:o,...i}},z=(i,e,t,o,n,r)=>{swipers[o]=swipers[o]||{},swipers[o][t]=swipers[o][t]||{};let s=swipers[o][t],l=s.swiperInstance,c=r==="desktop"&&window.matchMedia("(min-width: 992px)").matches,p=r==="mobile"&&window.matchMedia("(min-width: 0px) and (max-width: 991px)").matches,m=r==="all",f=()=>{s.observer&&(s.observer.disconnect(),delete s.observer),l&&(l.destroy(!0,!0),delete swipers[o][t],console.log("Swiper destroyed for",e,"with uniqueKey",t))};!c&&r==="desktop"||!p&&r==="mobile"||!m&&r==="all"?f():(c||p||m)&&!l&&(()=>{s.observer&&s.observer.disconnect();let w=$(`${e}.${t}`)[0];if(!w)return;let g=new IntersectionObserver(C=>{C.forEach(T=>{if(T.isIntersecting&&(c||p||m)&&!l){let P=new Swiper(`${e}.${t}`,n);swipers[o][t]={swiperInstance:P,mode:c?"desktop":p?"mobile":"all",initialized:!0},g.disconnect(),console.log("Swiper initialized for",e,"with uniqueKey",t)}})},{});swipers[o][t].observer=g,g.observe(w)})()},b=i=>{i.forEach(e=>{E(...e)})},v=(i,e)=>{b(i),window.addEventListener("resize",function(){window.innerWidth!==h&&(h=window.innerWidth,b(i))})};var a={isMobile:null,lenis:null,$content:$(".page-main")};function y(){k(),a.isMobile=$(window).width()<=991;let e=(o=>new URLSearchParams(window.location.search).get(o))("touch"),t=e?parseFloat(e):.8;a.lenis=new Lenis({content:a.$content[0],lerp:1,duration:1,easing:o=>o===1?1:1-Math.pow(2,-10*o),touchMultiplier:t,smoothWheel:!0,orientation:a.isMobile?"vertical":"horizontal"}),a.isMobile||(a.lenis.on("scroll",ScrollTrigger.update),ScrollTrigger.scrollerProxy(a.$content[0],{scrollLeft(o){return arguments.length&&a.lenis.scrollTo(o,0,0),a.lenis.scroll},getBoundingClientRect(){return{top:0,left:0,width:window.innerWidth,height:window.innerHeight}},pinType:"transform"})),A(),requestAnimationFrame(function o(n){a.lenis.raf(n),requestAnimationFrame(o)}),a.lenis.scrollTo("start",{immediate:!0,lock:!0})}function A(){$(".section_part").each(function(){let i=$(this),t=$(".section_part").index(i),o=i.attr("id"),n=i.attr("data-section"),r={trigger:i,start:a.isMobile?"top 80%":"left center",end:a.isMobile?"bottom 0%":"right center",scrub:!0,onEnter:()=>{a.isMobile||(t===0&&$(".btn.cc-nav").addClass("start"),M(n))},onEnterBack:()=>{a.isMobile||(t===0&&$(".btn.cc-nav").addClass("start"),M(n))},onLeave:()=>{a.isMobile||t===0&&$(".btn.cc-nav").removeClass("start")}};a.isMobile||(r.scroller=a.$content[0],r.horizontal=!0);let s=gsap.timeline({scrollTrigger:r});t===0&&gsap.timeline({scrollTrigger:{...r,start:a.isMobile?"top top":"left left",end:a.isMobile?"bottom top":"right left"}}).to(".hero-bg_box",{opacity:0}),t===1&&gsap.timeline({scrollTrigger:{...r,start:a.isMobile?"top top":"left left",end:a.isMobile?"bottom top":"right left"}}).from(".bottom-wave-box",{opacity:0})}),$("[data-animation]").each(function(){let i=$(this),e={trigger:i,start:a.isMobile?"top 80%":"left 80%",scrub:!0,onEnter:function(){i.attr("animated")||(i.attr("animated","true"),R(i))}};a.isMobile||(e.scroller=a.$content[0],e.horizontal=!0);let t=gsap.timeline({scrollTrigger:e})})}function L(){let i=$(".page-load"),e=$(".page-load_item"),t=$(".page-load_bg.cc-top"),o=$(".page-load_bg.cc-bottom"),n=gsap.timeline({onStart:()=>{a.lenis.stop()},onComplete:()=>{a.lenis.start()}});e.each(function(r){r===0&&(n.fromTo($(this),{yPercent:50,opacity:0},{yPercent:0,opacity:1,delay:1,duration:.5,display:"block"}),n.to(t,{xPercent:-5,rotate:-3},"<"),n.to(o,{xPercent:5,rotate:-3},"<"),n.to($(this),{opacity:0,delay:1.5})),r===1&&(n.fromTo($(this),{opacity:0,scale:.8},{display:"block",opacity:1,scale:1}),n.to(t,{xPercent:-10,rotate:-6},"<"),n.to(o,{xPercent:10,rotate:-6},"<"),n.to($(this),{opacity:0,delay:1})),r===2&&(n.to($(this),{display:"block"}),n.fromTo($(this).find("span"),{yPercent:50,opacity:0},{yPercent:0,opacity:1,stagger:{amount:.8}}),n.to(t,{xPercent:-15,rotate:-9},"<"),n.to(o,{xPercent:15,rotate:-9},"<"),n.to($(this),{opacity:0,delay:1.5},"<"))}),n.to(i,{opacity:0,display:"none"},"<")}function B(){a.isMobile||gsap.set($("[data-animation]").not(".nav"),{visibility:"hidden"})}function R(i){let e=$(i),t=gsap.timeline();if(!a.isMobile){if(e.is('[data-animation="heading"]')){let o=e.attr("data-split-type")||"word",n=new SplitType(e,{types:"words, chars",tagName:"span"});t.from(e.find(`.${o}`),{y:"2rem",opacity:0,duration:1,ease:"power3.out",stagger:.1}),t.to([e,e.find(`.${o}`)],{visibility:"visible"},"<")}if(e.is('[data-animation="item"]')){let o=e.attr("data-stagger")||.2;t.fromTo(e,{y:"2rem",opacity:0},{y:"0rem",opacity:1,visibility:"visible",stagger:o})}if(e.is('[data-animation="stagger"]')){let o=e.find('[data-animation="stagger-item"]'),n=e.attr("data-stagger")||.1;gsap.set([e,o],{visibility:"visible",immediateRender:!0}),t.from(o,{y:"1rem",opacity:0,stagger:n,clearProps:"visibility",overwrite:"auto",force3D:!0})}if(e.is('[data-animation="counter"]')){let o=e.text(),n=parseFloat(o),r={val:0};t.to(r,{val:n,duration:1,onStart:()=>{gsap.to(e,{opacity:1})},onUpdate:function(){e.text(r.val.toFixed(0))},ease:"power2.out"}),t.to(e,{visibility:"visible"},"<")}return e.is('[data-animation="fade"]')&&t.from(e,{opacity:0}),t}}function k(){$(".nav").removeClass("active"),ScrollTrigger.getAll().forEach(i=>i.kill()),a.lenis&&a.lenis.destroy()}var d=$(".nav"),x;function M(i){if(x===i)return;x=i;let e=document.querySelectorAll(".nav_menu-link"),t=document.querySelector(".nav_menu-inner"),o=document.querySelector(".nav_menu-bg"),n=Array.from(e).find(c=>c.textContent.trim().toLowerCase()===i.toLowerCase()||c.id.toLowerCase()===i.toLowerCase());if(!n||!t||i==="none"){$(".nav_menu-bg").css("opacity","0"),e.forEach(c=>c.classList.remove("active"));return}if(!o){console.warn("Nav background element not found");return}let r=t.getBoundingClientRect(),s=n.getBoundingClientRect(),l=s.left-r.left;gsap.to(o,{x:l,opacity:1,width:s.width,height:s.height,duration:.4,ease:"power2.out",onStart:()=>{e.forEach(c=>c.classList.remove("active")),n.classList.add("active")}})}window.onscroll=()=>{d.length&&$(window).width()<992&&(window.scrollY>$(d).height()/2?d.hasClass("active")||d.addClass("active"):d.hasClass("active")&&d.removeClass("active"))};function W(i,e){$(i).each(function(){new MutationObserver(n=>{n.forEach(r=>{r.type==="attributes"&&r.attributeName==="class"&&e(r.target)})}).observe(this,{attributes:!0,attributeFilter:["class"]})})}function q(){$(".w-nav-button").hasClass("w--open")?d.addClass("open"):d.removeClass("open")}W(".w-nav-button",q);$(".nav_menu-link").on("click",function(i){i.preventDefault();let e=$(this).attr("id"),t=$(`.section_part[data-section="${e}"]`);if(t.length&&a.lenis){let o=t.parent(".pin-spacer"),n;o.length?n=o.offset().top:n=t.offset().left,a.lenis.scrollTo(n,{duration:2,easing:r=>Math.min(1,1.001-Math.pow(2,-10*r)),lock:!0,lerp:.1})}});$("[hero-scroll]").on("click",function(){a.lenis.scrollTo($("section").eq(1)[0],{duration:1,easing:i=>Math.min(1,1.001-Math.pow(2,-10*i)),lock:!0,lerp:.1})});$(".nav_brand").on("click",function(){a.lenis.scrollTo($("section").eq(0)[0],{duration:1,easing:i=>Math.min(1,1.001-Math.pow(2,-10*i)),lock:!0,lerp:.1})});function N(){let i=document.querySelector("[data-modal-group-status]"),e=document.querySelectorAll("[data-modal-name]"),t=document.querySelectorAll("[data-modal-target]");t.forEach(n=>{n.addEventListener("click",function(){let r=this.getAttribute("data-modal-target");if(t.forEach(s=>s.setAttribute("data-modal-status","not-active")),e.forEach(s=>s.setAttribute("data-modal-status","not-active")),r==="team"){let s=$(this).closest(".team-list-item"),l=s.parent().index(),c=s.find("[data-team-name]").text(),p=s.find("[data-team-role]").text();$("[data-target-name]").text(c),$("[data-target-role]").text(p),$(".team_visual .w-dyn-item").hide(),$(".team_visual .w-dyn-item").eq(l).fadeIn(),$(".team_role-rich-item").hide(),$(".team_role-rich-item").eq(l).show()}document.querySelector(`[data-modal-target="${r}"]`).setAttribute("data-modal-status","active"),document.querySelector(`[data-modal-name="${r}"]`).setAttribute("data-modal-status","active"),i&&i.setAttribute("data-modal-group-status","active"),a.lenis.stop()})}),document.querySelectorAll("[data-modal-close]").forEach(n=>{n.addEventListener("click",o)}),document.addEventListener("keydown",function(n){n.key==="Escape"&&o()});function o(){t.forEach(n=>n.setAttribute("data-modal-status","not-active")),i&&i.setAttribute("data-modal-group-status","not-active"),a.lenis.start()}}$(document).ready(function(){y(),B(),L(),N();let i;$(window).on("resize",function(){clearTimeout(i),i=setTimeout(()=>{$(window).width()<=991!==a.isMobile&&y()},250)}),$(window).on("beforeunload",k)});var O=[[".section.cc-about",".about-wrap","about-slider",{slidesPerView:"auto",spaceBetween:32},"mobile"],[".section.cc-team",".team-list-wrap","team-slider",{slidesPerView:"auto",spaceBetween:16},"mobile"],[".section.cc-exp",".experience_slider","exp-slider",{slidesPerView:"auto",spaceBetween:32},"mobile"],[".section.cc-exp-cards",".exp-cards_wrap","exp-cards-slider",{slidesPerView:"auto",spaceBetween:32},"mobile"],[".section.cc-ceo",".ceo_slider","ceo-slider",{slidesPerView:"auto",spaceBetween:16},"mobile"]];v(O);var I=()=>{if(window.innerWidth>=992)return;let i=$(".section_part");i.each((e,t)=>{if(e===i.length-1)return;let o=i[e+1],r=$(t).outerHeight()<=window.innerHeight;$(t).css({position:"relative",zIndex:1}),$(o).css({position:"relative",zIndex:2}),ScrollTrigger.create({trigger:t,start:r?"top top":"bottom bottom",endTrigger:o,end:"top top",pin:!0,pinSpacing:!1,anticipatePin:1,onEnter:()=>{$(t).css({zIndex:1}),$(o).css({zIndex:2})},onEnterBack:()=>{$(t).css({zIndex:1}),$(o).css({zIndex:2})},onLeave:()=>{$(t).css({zIndex:1}),$(o).css({zIndex:2})},onLeaveBack:()=>{$(t).css({zIndex:1}),$(o).css({zIndex:2})}})})};$(document).ready(()=>{I();let i,e=$(window).width();$(window).on("resize",()=>{let t=$(window).width();t!==e&&(clearTimeout(i),i=setTimeout(()=>{ScrollTrigger.getAll().forEach(o=>{o.vars.pin&&o.kill()}),I(),e=t},250))})});})();
