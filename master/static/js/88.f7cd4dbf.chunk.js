(this["webpackJsonpswipe-the-curve"]=this["webpackJsonpswipe-the-curve"]||[]).push([[88],{480:function(t,e,o){"use strict";o.r(e),o.d(e,"iosTransitionAnimation",(function(){return d})),o.d(e,"shadow",(function(){return l}));o(58),o(11),o(26);var a=o(22),r=(o(40),o(478)),n=function(t){return document.querySelector(t+".ion-cloned-element")},l=function(t){return t.shadowRoot||t},i=function(t){var e="ION-TABS"===t.tagName?t:t.querySelector("ion-tabs"),o="ion-header:not(.header-collapse-condense-inactive) ion-title[size=large]";return null!=e?e.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)").querySelector(o):t.querySelector(o)},s=function(t,e){var o="ION-TABS"===t.tagName?t:t.querySelector("ion-tabs"),a=[];null!=o?a=o.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)").querySelectorAll("ion-buttons"):a=t.querySelectorAll("ion-buttons");for(var r=0,n=a;r<n.length;r++){var l=n[r],i=l.closest("ion-header"),s=i&&!i.classList.contains("header-collapse-condense-inactive"),c=l.querySelector("ion-back-button"),f=l.classList.contains("buttons-collapse"),d="start"===l.slot||""===l.slot;if(null!==c&&d&&(f&&s&&e||!f))return c}return null},c=function(t,e,o,r,i,s){var c=e?"calc(100% - "+(s.right+4)+"px)":s.left-4+"px",f=e?"7px":"-7px",d=e?"-4px":"4px",p=e?"-4px":"4px",y=e?"right":"left",m=e?"left":"right",u=[{offset:0,opacity:0,transform:"translate3d("+f+", "+(i.top-40)+"px, 0) scale(2.1)"},{offset:1,opacity:1,transform:"translate3d("+d+", "+(s.top-46)+"px, 0) scale(1)"}],b=[{offset:0,opacity:1,transform:"translate3d("+d+", "+(s.top-46)+"px, 0) scale(1)"},{offset:.6,opacity:0},{offset:1,opacity:0,transform:"translate3d("+f+", "+(i.top-40)+"px, 0) scale(2.1)"}],S=o?b:u,v=[{offset:0,opacity:0,transform:"translate3d("+p+", "+(s.top-41)+"px, 0) scale(0.6)"},{offset:1,opacity:1,transform:"translate3d("+p+", "+(s.top-46)+"px, 0) scale(1)"}],g=[{offset:0,opacity:1,transform:"translate3d("+p+", "+(s.top-46)+"px, 0) scale(1)"},{offset:.2,opacity:0,transform:"translate3d("+p+", "+(s.top-41)+"px, 0) scale(0.6)"},{offset:1,opacity:0,transform:"translate3d("+p+", "+(s.top-41)+"px, 0) scale(0.6)"}],T=o?g:v,h=Object(a.a)(),x=Object(a.a)(),q=n("ion-back-button"),X=l(q).querySelector(".button-text"),A=l(q).querySelector("ion-icon");q.text=r.text,q.mode=r.mode,q.icon=r.icon,q.color=r.color,q.disabled=r.disabled,q.style.setProperty("display","block"),q.style.setProperty("position","fixed"),x.addElement(A),h.addElement(X),h.beforeStyles({"transform-origin":y+" center"}).beforeAddWrite((function(){r.style.setProperty("display","none"),q.style.setProperty(y,c)})).afterAddWrite((function(){r.style.setProperty("display",""),q.style.setProperty("display","none"),q.style.removeProperty(y)})).keyframes(S),x.beforeStyles({"transform-origin":m+" center"}).keyframes(T),t.addAnimation([h,x])},f=function(t,e,o,r,l,i){var s,c=e?"calc(100% - "+l.right+"px)":l.left+"px",f=e?"-18px":"18px",d=e?"right":"left",p=[{offset:0,opacity:0,transform:"translate3d("+f+", "+(i.top-4)+"px, 0) scale(0.49)"},{offset:.1,opacity:0},{offset:1,opacity:1,transform:"translate3d(0, "+(l.top-2)+"px, 0) scale(1)"}],y=[{offset:0,opacity:.99,transform:"translate3d(0, "+(l.top-2)+"px, 0) scale(1)"},{offset:.6,opacity:0},{offset:1,opacity:0,transform:"translate3d("+f+", "+(i.top-4)+"px, 0) scale(0.5)"}],m=o?p:y,u=n("ion-title"),b=Object(a.a)();u.innerText=r.innerText,u.size=r.size,u.color=r.color,b.addElement(u),b.beforeStyles((s={"transform-origin":d+" center",height:"46px",display:"",position:"relative"},s[d]=c,s)).beforeAddWrite((function(){r.style.setProperty("display","none")})).afterAddWrite((function(){r.style.setProperty("display",""),u.style.setProperty("display","none")})).keyframes(m),t.addAnimation(b)},d=function(t,e){try{var o="rtl"===t.ownerDocument.dir,n=o?"-99.5%":"99.5%",d=o?"33%":"-33%",p=e.enteringEl,y=e.leavingEl,m="back"===e.direction,u=p.querySelector(":scope > ion-content"),b=p.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *"),S=p.querySelectorAll(":scope > ion-header > ion-toolbar"),v=Object(a.a)(),g=Object(a.a)();if(v.addElement(p).duration(e.duration||540).easing(e.easing||"cubic-bezier(0.32,0.72,0,1)").fill("both").beforeRemoveClass("ion-page-invisible"),y&&t){var T=Object(a.a)();T.addElement(t),v.addAnimation(T)}if(u||0!==S.length||0!==b.length?(g.addElement(u),g.addElement(b)):g.addElement(p.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")),v.addAnimation(g),m?g.beforeClearStyles(["opacity"]).fromTo("transform","translateX("+d+")","translateX(0%)").fromTo("opacity",.8,1):g.beforeClearStyles(["opacity"]).fromTo("transform","translateX("+n+")","translateX(0%)"),u){var h=l(u).querySelector(".transition-effect");if(h){var x=h.querySelector(".transition-cover"),q=h.querySelector(".transition-shadow"),X=Object(a.a)(),A=Object(a.a)(),E=Object(a.a)();X.addElement(h).beforeStyles({opacity:"1",display:"block"}).afterStyles({opacity:"",display:""}),A.addElement(x).beforeClearStyles(["opacity"]).fromTo("opacity",0,.1),E.addElement(q).beforeClearStyles(["opacity"]).fromTo("opacity",.03,.7),X.addAnimation([A,E]),g.addAnimation([X])}}var O=p.querySelector("ion-header.header-collapse-condense"),j=function(t,e,o,a,r){var n=s(a,o),l=i(r),d=i(a),p=s(r,o),y=null!==n&&null!==l&&!o,m=null!==d&&null!==p&&o;if(y){var u=l.getBoundingClientRect(),b=n.getBoundingClientRect();f(t,e,o,l,u,b),c(t,e,o,n,u,b)}else if(m){var S=d.getBoundingClientRect(),v=p.getBoundingClientRect();f(t,e,o,d,S,v),c(t,e,o,p,S,v)}return{forward:y,backward:m}}(v,o,m,p,y),C=j.forward,k=j.backward;if(S.forEach((function(t){var e=Object(a.a)();e.addElement(t),v.addAnimation(e);var r=Object(a.a)();r.addElement(t.querySelector("ion-title"));var i,s=Object(a.a)(),c=Array.from(t.querySelectorAll("ion-buttons,[menuToggle]")),f=t.closest("ion-header"),p=f&&f.classList.contains("header-collapse-condense-inactive");i=m?c.filter((function(t){var e=t.classList.contains("buttons-collapse");return e&&!p||!e})):c.filter((function(t){return!t.classList.contains("buttons-collapse")})),s.addElement(i);var y=Object(a.a)();y.addElement(t.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])"));var u=Object(a.a)();u.addElement(l(t).querySelector(".toolbar-background"));var b=Object(a.a)(),S=t.querySelector("ion-back-button");if(S&&b.addElement(S),e.addAnimation([r,s,y,u,b]),s.fromTo("opacity",.01,1),y.fromTo("opacity",.01,1),m)p||r.fromTo("transform","translateX("+d+")","translateX(0%)").fromTo("opacity",.01,1),y.fromTo("transform","translateX("+d+")","translateX(0%)"),b.fromTo("opacity",.01,1);else if(O||r.fromTo("transform","translateX("+n+")","translateX(0%)").fromTo("opacity",.01,1),y.fromTo("transform","translateX("+n+")","translateX(0%)"),u.beforeClearStyles(["opacity","transform"]),(null===f||void 0===f?void 0:f.translucent)?u.fromTo("transform",o?"translateX(-100%)":"translateX(100%)","translateX(0px)"):u.fromTo("opacity",.01,1),C||b.fromTo("opacity",.01,1),S&&!C){var g=Object(a.a)();g.addElement(l(S).querySelector(".button-text")).fromTo("transform",o?"translateX(-100px)":"translateX(100px)","translateX(0px)"),e.addAnimation(g)}})),y){var w=Object(a.a)(),P=y.querySelector(":scope > ion-content");if(w.addElement(P),w.addElement(y.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *")),v.addAnimation(w),m){w.beforeClearStyles(["opacity"]).fromTo("transform","translateX(0%)",o?"translateX(-100%)":"translateX(100%)");var L=Object(r.b)(y);v.afterAddWrite((function(){"normal"===v.getDirection()&&L.style.setProperty("display","none")}))}else w.fromTo("transform","translateX(0%)","translateX("+d+")").fromTo("opacity",1,.8);if(P){var B=l(P).querySelector(".transition-effect");if(B){var R=B.querySelector(".transition-cover"),W=B.querySelector(".transition-shadow"),z=Object(a.a)(),N=Object(a.a)(),D=Object(a.a)();z.addElement(B).beforeStyles({opacity:"1",display:"block"}).afterStyles({opacity:"",display:""}),N.addElement(R).beforeClearStyles(["opacity"]).fromTo("opacity",.1,0),D.addElement(W).beforeClearStyles(["opacity"]).fromTo("opacity",.7,.03),z.addAnimation([N,D]),w.addAnimation([z])}}y.querySelectorAll(":scope > ion-header > ion-toolbar").forEach((function(t){var e=Object(a.a)();e.addElement(t);var r=Object(a.a)();r.addElement(t.querySelector("ion-title"));var n=Object(a.a)(),i=t.querySelectorAll("ion-buttons,[menuToggle]"),s=t.closest("ion-header"),c=s&&s.classList.contains("header-collapse-condense-inactive"),f=Array.from(i).filter((function(t){var e=t.classList.contains("buttons-collapse");return e&&!c||!e}));n.addElement(f);var p=Object(a.a)(),y=t.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])");y.length>0&&p.addElement(y);var u=Object(a.a)();u.addElement(l(t).querySelector(".toolbar-background"));var b=Object(a.a)(),S=t.querySelector("ion-back-button");if(S&&b.addElement(S),e.addAnimation([r,n,p,b,u]),v.addAnimation(e),b.fromTo("opacity",.99,0),n.fromTo("opacity",.99,0),p.fromTo("opacity",.99,0),m){if(c||r.fromTo("transform","translateX(0%)",o?"translateX(-100%)":"translateX(100%)").fromTo("opacity",.99,0),p.fromTo("transform","translateX(0%)",o?"translateX(-100%)":"translateX(100%)"),u.beforeClearStyles(["opacity","transform"]),(null===s||void 0===s?void 0:s.translucent)?u.fromTo("transform","translateX(0px)",o?"translateX(-100%)":"translateX(100%)"):u.fromTo("opacity",.99,0),S&&!k){var g=Object(a.a)();g.addElement(l(S).querySelector(".button-text")).fromTo("transform","translateX(0%)","translateX("+(o?-124:124)+"px)"),e.addAnimation(g)}}else c||r.fromTo("transform","translateX(0%)","translateX("+d+")").fromTo("opacity",.99,0).afterClearStyles(["transform","opacity"]),p.fromTo("transform","translateX(0%)","translateX("+d+")").afterClearStyles(["transform","opacity"]),b.afterClearStyles(["opacity"]),r.afterClearStyles(["opacity"]),n.afterClearStyles(["opacity"])}))}return v}catch(I){throw I}}}}]);
//# sourceMappingURL=88.f7cd4dbf.chunk.js.map