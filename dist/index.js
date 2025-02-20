"use strict";(()=>{var i={isMobile:null,lenis:null,$content:$(".page-main")};function g(){y(),i.isMobile=$(window).width()<=991,i.lenis=new Lenis({content:i.$content[0],lerp:1,duration:1,easing:t=>t===1?1:1-Math.pow(2,-10*t),touchMultiplier:1.5,smoothWheel:!0,orientation:i.isMobile?"vertical":"horizontal"}),i.isMobile||(i.lenis.on("scroll",ScrollTrigger.update),ScrollTrigger.scrollerProxy(i.$content[0],{scrollLeft(t){return arguments.length&&i.lenis.scrollTo(t,0,0),i.lenis.scroll},getBoundingClientRect(){return{top:0,left:0,width:window.innerWidth,height:window.innerHeight}},pinType:"transform"})),b(),requestAnimationFrame(function t(r){i.lenis.raf(r),requestAnimationFrame(t)})}function b(){$("section").each(function(){let t=$(this),o=$("section").index(t),l=t.attr("id"),e=t.attr("data-section"),n={trigger:t,start:i.isMobile?"top 80%":"left 80%",end:i.isMobile?"bottom 0%":"right 0%",scrub:!0,markers:!0,onEnter:()=>{console.log("In View "+o),console.log(o),!t.hasClass("animated")&&o!==0&&(t.addClass("animated"),h(t)),p(e)},onEnterBack:()=>{p(e)},onLeave:()=>{console.log("Out View "+o)}};i.isMobile||(n.scroller=i.$content[0],n.horizontal=!0);let s=gsap.timeline({scrollTrigger:n});o===0&&gsap.to(".hero-bg_box",{scale:1.2,opacity:0,scrollTrigger:{...n,scrub:1,start:"right right",end:"right center"}})})}function w(){gsap.set($("[data-animation]").not(".nav"),{visibility:"hidden"})}function h(t){let r=$(t),o=$(t).find('[data-animation="heading"]'),l=$(t).find('[data-animation="item"]'),e=$(t).find('[data-animation="stagger"]'),n=$(t).find('[data-animation="counter"]'),s=$(t).find('[data-animation="fade"]'),d=r.attr("data-stagger")||.2,a=gsap.timeline();if(o.length){let c=o.attr("data-split-type")||"line",u=new SplitType(o,{types:"lines, words, chars",tagName:"span"});a.from(o.find(`.${c}`),{y:"2rem",opacity:0,duration:1,ease:"power3.out",stagger:.1},"<"),a.to(o,{visibility:"visible"},"<"),a.to(o.find(`.${c}`),{visibility:"visisble"},"<")}if(l.length){let c=a.getChildren();a.fromTo(l,{y:"2rem",opacity:0},{y:"0rem",opacity:1,visibility:"visible",stagger:d},(c.length>0,"<"))}e.length&&e.each(function(){let c=$(this).find('[data-animation="stagger-item"]'),u=$(this).attr("data-stagger")||.1;gsap.set([this,c],{visibility:"visible"}),a.from(c,{y:"1rem",opacity:0,stagger:u,clearProps:"visibility"},"<")}),n.length&&$(n).each(function(){let c=$(this),u=c.text(),v=parseFloat(u),m={val:0};a.to(m,{val:v,duration:1,onStart:()=>{gsap.to(c,{opacity:1})},onUpdate:function(){c.text(m.val.toFixed(0))},ease:"power2.out"},"<"),a.to(c,{visibility:"visible"},"<")}),s.length&&s.each(function(){a.from($(this),{opacity:0},"<")})}function S(){let t=$(".page-load"),r=$(".page-load_item"),o=$(".page-load_bg.cc-top"),l=$(".page-load_bg.cc-bottom"),e=gsap.timeline({onStart:()=>{i.lenis.stop()},onComplete:()=>{i.lenis.start(),h($("section").eq(0))}});r.each(function(n){n===0&&(e.fromTo($(this),{yPercent:50,opacity:0},{yPercent:0,opacity:1,delay:1,duration:.5,display:"block"}),e.to(o,{xPercent:-5,rotate:-3},"<"),e.to(l,{xPercent:5,rotate:-3},"<"),e.to($(this),{opacity:0,delay:1.5})),n===1&&(e.fromTo($(this),{opacity:0,scale:.8},{display:"block",opacity:1,scale:1}),e.to(o,{xPercent:-10,rotate:-6},"<"),e.to(l,{xPercent:10,rotate:-6},"<"),e.to($(this),{opacity:0,delay:1})),n===2&&(e.to($(this),{display:"block"}),e.fromTo($(this).find("span"),{yPercent:50,opacity:0},{opacity:1,stagger:{amount:.8}}),e.to(o,{xPercent:-15,rotate:-9},"<"),e.to(l,{xPercent:15,rotate:-9},"<"),e.to($(this),{opacity:0,delay:1.5},"<"))}),e.to(t,{opacity:0,display:"none"},"<")}var f;function p(t){if(f===t)return;f=t;let r=document.querySelectorAll(".nav_menu-link"),o=document.querySelector(".nav_menu-inner"),l=document.querySelector(".nav_menu-bg"),e=Array.from(r).find(a=>a.textContent.trim().toLowerCase()===t.toLowerCase()||a.id.toLowerCase()===t.toLowerCase());if(!e||!o||t==="none"){gsap.to(l,{opacity:0}),r.forEach(a=>a.classList.remove("active"));return}if(!l){console.warn("Nav background element not found");return}console.log(t);let n=o.getBoundingClientRect(),s=e.getBoundingClientRect(),d=s.left-n.left;gsap.to(l,{x:d,opacity:1,width:s.width,height:s.height,duration:.4,ease:"power2.out",onStart:()=>{r.forEach(a=>a.classList.remove("active")),e.classList.add("active")}})}$(".nav_menu-link").on("click",function(t){t.preventDefault();let r=$(this).attr("id"),o=$(`section[data-section="${r}"]`).first();o.length&&i.lenis&&i.lenis.scrollTo(o[0],{duration:4,easing:l=>Math.min(1,1.001-Math.pow(2,-10*l)),lock:!0,lerp:.1})});function y(){ScrollTrigger.getAll().forEach(t=>t.kill()),i.lenis&&i.lenis.destroy()}function A(){let t=document.querySelector("[data-modal-group-status]"),r=document.querySelectorAll("[data-modal-name]"),o=document.querySelectorAll("[data-modal-target]");o.forEach(e=>{e.addEventListener("click",function(){let n=this.getAttribute("data-modal-target");if(console.log(n),o.forEach(s=>s.setAttribute("data-modal-status","not-active")),r.forEach(s=>s.setAttribute("data-modal-status","not-active")),n==="team"){let s=$(this).closest(".team-list-item"),d=s.parent().index(),a=s.find("[data-team-name]").text(),c=s.find("[data-team-role]").text();$("[data-target-name]").text(a),$("[data-target-role]").text(c),$(".team_visual .w-dyn-item").hide(),$(".team_visual .w-dyn-item").eq(d).fadeIn(),$(".team_role-rich-item").hide(),$(".team_role-rich-item").eq(d).show(),console.log(a+"-"+c)}document.querySelector(`[data-modal-target="${n}"]`).setAttribute("data-modal-status","active"),document.querySelector(`[data-modal-name="${n}"]`).setAttribute("data-modal-status","active"),t&&t.setAttribute("data-modal-group-status","active"),i.lenis.stop()})}),document.querySelectorAll("[data-modal-close]").forEach(e=>{e.addEventListener("click",l)}),document.addEventListener("keydown",function(e){e.key==="Escape"&&l()});function l(){o.forEach(e=>e.setAttribute("data-modal-status","not-active")),t&&t.setAttribute("data-modal-group-status","not-active"),i.lenis.start()}}$(document).ready(function(){g(),w(),S(),A();let t;$(window).on("resize",function(){clearTimeout(t),t=setTimeout(()=>{$(window).width()<=991!==i.isMobile&&g()},250)}),$(window).on("beforeunload",y)});})();
