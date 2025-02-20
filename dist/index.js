"use strict";(()=>{var h=window.innerWidth,u={};var T=(t,e,i,o,n)=>{let a=$(t).add(e);console.log("Swipers - "+a.length),!(a.length<2)&&(u[i]=0,u[i]=u[i]||0,a.each(function(){let r=`${i}_${u[i]}`;A(this,e,r,[".swiper-arrow",".swiper-nav",".swiper-drag-wrapper"]);let l=P(o,r);z(this,e,r,i,l,n),u[i]++}))},A=(t,e,i,o)=>{o.forEach(n=>{$(t).find(n).addClass(i)}),$(t).find(e).addClass(i)},P=(t,e)=>{let i={el:`.swiper-nav.${e}`,type:"bullets",bulletActiveClass:"cc-active",bulletClass:"swiper-dot",clickable:!0},o=t.pagination?{...i,...t.pagination}:i;return{speed:1e3,navigation:{prevEl:`.swiper-arrow.prev.${e}`,nextEl:`.swiper-arrow.next.${e}`},pagination:o,...t}},z=(t,e,i,o,n,a)=>{swipers[o]=swipers[o]||{},swipers[o][i]=swipers[o][i]||{};let r=swipers[o][i],l=r.swiperInstance,c=a==="desktop"&&window.matchMedia("(min-width: 992px)").matches,p=a==="mobile"&&window.matchMedia("(min-width: 0px) and (max-width: 991px)").matches,g=a==="all",m=()=>{r.observer&&(r.observer.disconnect(),delete r.observer),l&&(l.destroy(!0,!0),delete swipers[o][i],console.log("Swiper destroyed for",e,"with uniqueKey",i))};!c&&a==="desktop"||!p&&a==="mobile"||!g&&a==="all"?m():(c||p||g)&&!l&&(()=>{r.observer&&r.observer.disconnect();let w=$(`${e}.${i}`)[0];if(!w)return;let f=new IntersectionObserver(E=>{E.forEach(k=>{if(k.isIntersecting&&(c||p||g)&&!l){let S=new Swiper(`${e}.${i}`,n);swipers[o][i]={swiperInstance:S,mode:c?"desktop":p?"mobile":"all",initialized:!0},f.disconnect(),console.log("Swiper initialized for",e,"with uniqueKey",i)}})},{});swipers[o][i].observer=f,f.observe(w)})()},b=t=>{t.forEach(e=>{T(...e)})},v=(t,e)=>{b(t),window.addEventListener("resize",function(){window.innerWidth!==h&&(h=window.innerWidth,b(t))})};var s={isMobile:null,lenis:null,$content:$(".page-main")};function y(){C(),s.isMobile=$(window).width()<=991,s.lenis=new Lenis({content:s.$content[0],lerp:1,duration:1,easing:t=>t===1?1:1-Math.pow(2,-10*t),touchMultiplier:1,smoothWheel:!0,syncTouch:!0,orientation:s.isMobile?"vertical":"horizontal"}),s.isMobile||(s.lenis.on("scroll",ScrollTrigger.update),ScrollTrigger.scrollerProxy(s.$content[0],{scrollLeft(t){return arguments.length&&s.lenis.scrollTo(t,0,0),s.lenis.scroll},getBoundingClientRect(){return{top:0,left:0,width:window.innerWidth,height:window.innerHeight}},pinType:"transform"})),_(),requestAnimationFrame(function t(e){s.lenis.raf(e),requestAnimationFrame(t)})}function _(){$("section").each(function(){let t=$(this),i=$("section").index(t),o=t.attr("id"),n=t.attr("data-section"),a={trigger:t,start:s.isMobile?"top 80%":"left center",end:s.isMobile?"bottom 0%":"right center",scrub:!0,onEnter:()=>{i===0&&$(".btn.cc-nav").addClass("start"),M(n)},onEnterBack:()=>{i===0&&$(".btn.cc-nav").addClass("start"),M(n)},onLeave:()=>{i===0&&$(".btn.cc-nav").removeClass("start")}};s.isMobile||(a.scroller=s.$content[0],a.horizontal=!0);let r=gsap.timeline({scrollTrigger:a});i===0&&gsap.timeline({scrollTrigger:{...a,start:s.isMobile?"top top":"left left",end:s.isMobile?"bottom top":"right left"}}).to(".hero-bg_box",{opacity:0}),i===1&&gsap.timeline({scrollTrigger:{...a,start:s.isMobile?"top top":"left left",end:s.isMobile?"bottom top":"right left"}}).from(".bottom-wave-box",{opacity:0})}),$("[data-animation]").each(function(){let t=$(this),e={trigger:t,start:s.isMobile?"top 80%":"left 80%",scrub:!0,onEnter:function(){t.attr("animated")||(t.attr("animated","true"),q(t))}};s.isMobile||(e.scroller=s.$content[0],e.horizontal=!0);let i=gsap.timeline({scrollTrigger:e})})}function B(){let t=$(".page-load"),e=$(".page-load_item"),i=$(".page-load_bg.cc-top"),o=$(".page-load_bg.cc-bottom"),n=gsap.timeline({onStart:()=>{s.lenis.stop()},onComplete:()=>{s.lenis.start(),gsapSection($("section").eq(0))}});e.each(function(a){a===0&&(n.fromTo($(this),{yPercent:50,opacity:0},{yPercent:0,opacity:1,delay:1,duration:.5,display:"block"}),n.to(i,{xPercent:-5,rotate:-3},"<"),n.to(o,{xPercent:5,rotate:-3},"<"),n.to($(this),{opacity:0,delay:1.5})),a===1&&(n.fromTo($(this),{opacity:0,scale:.8},{display:"block",opacity:1,scale:1}),n.to(i,{xPercent:-10,rotate:-6},"<"),n.to(o,{xPercent:10,rotate:-6},"<"),n.to($(this),{opacity:0,delay:1})),a===2&&(n.to($(this),{display:"block"}),n.fromTo($(this).find("span"),{yPercent:50,opacity:0},{opacity:1,stagger:{amount:.8}}),n.to(i,{xPercent:-15,rotate:-9},"<"),n.to(o,{xPercent:15,rotate:-9},"<"),n.to($(this),{opacity:0,delay:1.5},"<"))}),n.to(t,{opacity:0,display:"none"},"<")}function L(){gsap.set($("[data-animation]").not(".nav"),{visibility:"hidden"})}function q(t){let e=$(t),i=gsap.timeline();if(e.is('[data-animation="heading"]')){let o=e.attr("data-split-type")||"line",n=new SplitType(e,{types:"lines, words, chars",tagName:"span"});i.from(e.find(`.${o}`),{y:"2rem",opacity:0,duration:1,ease:"power3.out",stagger:.1}),i.to([e,e.find(`.${o}`)],{visibility:"visible"},"<")}if(e.is('[data-animation="item"]')){let o=e.attr("data-stagger")||.2;i.fromTo(e,{y:"2rem",opacity:0},{y:"0rem",opacity:1,visibility:"visible",stagger:o})}if(e.is('[data-animation="stagger"]')){let o=e.find('[data-animation="stagger-item"]'),n=e.attr("data-stagger")||.1;gsap.set([e,o],{visibility:"visible",immediateRender:!0}),i.from(o,{y:"1rem",opacity:0,stagger:n,clearProps:"visibility",overwrite:"auto",force3D:!0})}if(e.is('[data-animation="counter"]')){let o=e.text(),n=parseFloat(o),a={val:0};i.to(a,{val:n,duration:1,onStart:()=>{gsap.to(e,{opacity:1})},onUpdate:function(){e.text(a.val.toFixed(0))},ease:"power2.out"}),i.to(e,{visibility:"visible"},"<")}return e.is('[data-animation="fade"]')&&i.from(e,{opacity:0}),i}function C(){ScrollTrigger.getAll().forEach(t=>t.kill()),s.lenis&&s.lenis.destroy()}var d=$(".nav"),x;function M(t){if(x===t)return;x=t;let e=document.querySelectorAll(".nav_menu-link"),i=document.querySelector(".nav_menu-inner"),o=document.querySelector(".nav_menu-bg"),n=Array.from(e).find(c=>c.textContent.trim().toLowerCase()===t.toLowerCase()||c.id.toLowerCase()===t.toLowerCase());if(console.log("targat-text: "+t),!n||!i||t==="none"){console.log("target-"+n),console.log("navcontainer-"+i),console.log("target-link-text"+t),gsap.set(o,{opacity:0}),e.forEach(c=>c.classList.remove("active"));return}if(!o){console.warn("Nav background element not found");return}console.log(t);let a=i.getBoundingClientRect(),r=n.getBoundingClientRect(),l=r.left-a.left;gsap.to(o,{x:l,opacity:1,width:r.width,height:r.height,duration:.4,ease:"power2.out",onStart:()=>{e.forEach(c=>c.classList.remove("active")),n.classList.add("active")}})}window.onscroll=()=>{d.length&&$(window).width()<992&&(window.scrollY>$(d).height()/2?d.hasClass("active")||d.addClass("active"):d.hasClass("active")&&d.removeClass("active"))};function R(t,e){$(t).each(function(){new MutationObserver(n=>{n.forEach(a=>{a.type==="attributes"&&a.attributeName==="class"&&e(a.target)})}).observe(this,{attributes:!0,attributeFilter:["class"]})})}function W(){$(".w-nav-button").hasClass("w--open")?d.addClass("open"):d.removeClass("open")}R(".w-nav-button",W);$(".nav_menu-link").on("click",function(t){t.preventDefault();let e=$(this).attr("id"),i=$(`section[data-section="${e}"]`).first();i.length&&s.lenis&&s.lenis.scrollTo(i[0],{duration:4,easing:o=>Math.min(1,1.001-Math.pow(2,-10*o)),lock:!0,lerp:.1})});$("[hero-scroll]").on("click",function(){s.lenis.scrollTo($("section").eq(1)[0],{duration:1,easing:t=>Math.min(1,1.001-Math.pow(2,-10*t)),lock:!0,lerp:.1})});$(".nav_brand").on("click",function(){s.lenis.scrollTo($("section").eq(0)[0],{duration:1,easing:t=>Math.min(1,1.001-Math.pow(2,-10*t)),lock:!0,lerp:.1})});function N(){let t=document.querySelector("[data-modal-group-status]"),e=document.querySelectorAll("[data-modal-name]"),i=document.querySelectorAll("[data-modal-target]");i.forEach(n=>{n.addEventListener("click",function(){let a=this.getAttribute("data-modal-target");if(console.log(a),i.forEach(r=>r.setAttribute("data-modal-status","not-active")),e.forEach(r=>r.setAttribute("data-modal-status","not-active")),a==="team"){let r=$(this).closest(".team-list-item"),l=r.parent().index(),c=r.find("[data-team-name]").text(),p=r.find("[data-team-role]").text();$("[data-target-name]").text(c),$("[data-target-role]").text(p),$(".team_visual .w-dyn-item").hide(),$(".team_visual .w-dyn-item").eq(l).fadeIn(),$(".team_role-rich-item").hide(),$(".team_role-rich-item").eq(l).show(),console.log(c+"-"+p)}document.querySelector(`[data-modal-target="${a}"]`).setAttribute("data-modal-status","active"),document.querySelector(`[data-modal-name="${a}"]`).setAttribute("data-modal-status","active"),t&&t.setAttribute("data-modal-group-status","active"),s.lenis.stop()})}),document.querySelectorAll("[data-modal-close]").forEach(n=>{n.addEventListener("click",o)}),document.addEventListener("keydown",function(n){n.key==="Escape"&&o()});function o(){i.forEach(n=>n.setAttribute("data-modal-status","not-active")),t&&t.setAttribute("data-modal-group-status","not-active"),s.lenis.start()}}$(document).ready(function(){y(),L(),B(),N();let t;$(window).on("resize",function(){clearTimeout(t),t=setTimeout(()=>{$(window).width()<=991!==s.isMobile&&y()},250)}),$(window).on("beforeunload",C)});var O=[[".section.cc-about",".about-wrap","about-slider",{slidesPerView:"auto",spaceBetween:32},"mobile"],[".section.cc-team",".team-list-wrap","team-slider",{slidesPerView:"auto",spaceBetween:16},"mobile"],[".section.cc-exp",".experience_slider","exp-slider",{slidesPerView:"auto",spaceBetween:32},"mobile"],[".section.cc-exp-cards",".exp-cards_wrap","exp-cards-slider",{slidesPerView:"auto",spaceBetween:32},"mobile"],[".section.cc-ceo",".ceo_slider","ceo-slider",{slidesPerView:"auto",spaceBetween:16},"mobile"]];v(O);var I=()=>{if(window.innerWidth>=992)return;let t=$(".section");t.each((e,i)=>{if(e===t.length-1)return;let o=t[e+1],n=$(i).outerHeight(),a=n<=window.innerHeight,r=$(i);r.parent(".pin-wrapper").length||r.wrap('<div class="pin-wrapper"></div>');let l=r.parent();l.height(n),l.css({zIndex:1,position:"relative"}),$(o).css({zIndex:2}),ScrollTrigger.create({trigger:l[0],endTrigger:o,start:a?"top top":"bottom bottom",end:"bottom top",pin:!0,pinSpacing:!1,onEnter:()=>{gsap.set(l[0],{zIndex:1}),gsap.set(o,{zIndex:2})},onLeave:()=>{gsap.set(l[0],{zIndex:1}),gsap.set(o,{zIndex:2})},onEnterBack:()=>{gsap.set(l[0],{zIndex:1}),gsap.set(o,{zIndex:2})},onRefresh:()=>{l.height(r.outerHeight())}})})};$(document).ready(()=>{I();let t,e=$(window).width();$(window).on("resize",()=>{let i=$(window).width();i!==e&&(clearTimeout(t),t=setTimeout(()=>{ScrollTrigger.getAll().forEach(o=>{o.vars.pin&&o.kill()}),I(),e=i},250))})});})();
