(this["webpackJsonpswipe-the-curve"]=this["webpackJsonpswipe-the-curve"]||[]).push([[11],{430:function(e,t,n){"use strict";n.r(t),n.d(t,"ion_modal",(function(){return w}));var i=n(4),o=n(57),r=n(11),a=n(26),s=n(22),c=n(99),d=n(98),l=(n(40),n(51),n(30)),u=n(475),m=n(477),f=n(478),p=.93,h=function(e,t){return Object(a.c)(400,e/Math.abs(1.1*t),500)},b=function(e,t){var n=Object(s.a)().addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),i=Object(s.a)().addElement(e.querySelector(".modal-wrapper")).beforeStyles({opacity:1}).fromTo("transform","translateY(100vh)","translateY(0vh)"),o=Object(s.a)().addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(500).beforeAddClass("show-modal").addAnimation([n,i]);if(t){var r=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",a="ION-MODAL"===t.tagName&&void 0!==t.presentingElement?"-10px":r,c=document.body,d="translateY("+a+") scale("+p+")",l=Object(s.a)().beforeStyles({transform:"translateY(0)","transform-origin":"top center",overflow:"hidden"}).afterStyles({transform:d}).beforeAddWrite((function(){return c.style.setProperty("background-color","black")})).addElement(t).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"},{offset:1,filter:"contrast(0.85)",transform:d,borderRadius:"10px 10px 0 0"}]);o.addAnimation(l)}return o},v=function(e,t,n){void 0===n&&(n=500);var i=Object(s.a)().addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),o=Object(s.a)().addElement(e.querySelector(".modal-wrapper")).beforeStyles({opacity:1}).fromTo("transform","translateY(0vh)","translateY(100vh)"),r=Object(s.a)().addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(n).addAnimation([i,o]);if(t){var a=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",c="ION-MODAL"===t.tagName&&void 0!==t.presentingElement?"-10px":a,d=document.body,l=p,u=Object(s.a)().addElement(t).beforeClearStyles(["transform"]).afterClearStyles(["transform"]).onFinish((function(e){1===e&&(t.style.setProperty("overflow",""),Array.from(d.querySelectorAll("ion-modal")).filter((function(e){return void 0!==e.presentingElement})).length<=1&&d.style.setProperty("background-color",""))})).keyframes([{offset:0,filter:"contrast(0.85)",transform:"translateY("+c+") scale("+l+")",borderRadius:"10px 10px 0 0"},{offset:1,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"}]);r.addAnimation(u)}return r},g=function(e){var t=Object(s.a)(),n=Object(s.a)(),i=Object(s.a)();return n.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),i.addElement(e.querySelector(".modal-wrapper")).keyframes([{offset:0,opacity:.01,transform:"translateY(40px)"},{offset:1,opacity:1,transform:"translateY(0px)"}]),t.addElement(e).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(280).beforeAddClass("show-modal").addAnimation([n,i])},y=function(e){var t=Object(s.a)(),n=Object(s.a)(),i=Object(s.a)(),o=e.querySelector(".modal-wrapper");return n.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),i.addElement(o).keyframes([{offset:0,opacity:.99,transform:"translateY(0px)"},{offset:1,opacity:0,transform:"translateY(40px)"}]),t.addElement(e).easing("cubic-bezier(0.47,0,0.745,0.715)").duration(200).addAnimation([n,i])},w=function(){function e(e){var t=this;Object(o.k)(this,e),this.gestureAnimationDismissing=!1,this.presented=!1,this.mode=Object(o.d)(this),this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.animated=!0,this.swipeToClose=!1,this.onBackdropTap=function(){t.dismiss(void 0,l.a)},this.onDismiss=function(e){e.stopPropagation(),e.preventDefault(),t.dismiss()},this.onLifecycle=function(e){var n=t.usersElement,i=O[e.type];if(n&&i){var o=new CustomEvent(i,{bubbles:!1,cancelable:!1,detail:e.detail});n.dispatchEvent(o)}},Object(l.e)(this.el),this.didPresent=Object(o.e)(this,"ionModalDidPresent",7),this.willPresent=Object(o.e)(this,"ionModalWillPresent",7),this.willDismiss=Object(o.e)(this,"ionModalWillDismiss",7),this.didDismiss=Object(o.e)(this,"ionModalDidDismiss",7)}return e.prototype.present=function(){return Object(i.a)(this,void 0,void 0,(function(){var e,t,n,a,s,u,p=this;return Object(i.c)(this,(function(y){switch(y.label){case 0:if(this.presented)return[2];if(!(e=this.el.querySelector(".modal-wrapper")))throw new Error("container is undefined");return t=Object.assign(Object.assign({},this.componentProps),{modal:this.el}),n=this,[4,Object(m.a)(this.delegate,e,this.component,["ion-page"],t)];case 1:return n.usersElement=y.sent(),[4,Object(f.a)(this.usersElement)];case 2:return y.sent(),[4,Object(l.f)(this,"modalEnter",b,g,this.presentingElement)];case 3:return y.sent(),a=Object(o.d)(this),this.swipeToClose&&"ios"===a&&(s=this.leaveAnimation||r.b.get("modalLeave",v),u=this.animation=s(this.el,this.presentingElement),this.gesture=function(e,t,n){var i=e.offsetHeight,o=!1,r=Object(d.createGesture)({el:e,gestureName:"modalSwipeToClose",gesturePriority:40,direction:"y",threshold:10,canStart:function(e){var t=e.event.target;return null===t||!t.closest||null===t.closest("ion-content")},onStart:function(){t.progressStart(!0,o?1:0)},onMove:function(e){var n=e.deltaY/i;n<0||t.progressStep(n)},onEnd:function(e){var a=e.velocityY,s=e.deltaY/i;if(!(s<0)){var d=(e.deltaY+1e3*a)/i>=.5,l=d?-.001:.001;d?(t.easing("cubic-bezier(0.32, 0.72, 0, 1)"),l+=Object(c.a)([0,0],[.32,.72],[0,1],[1,1],s)[0]):(t.easing("cubic-bezier(1, 0, 0.68, 0.28)"),l+=Object(c.a)([0,0],[1,0],[.68,.28],[1,1],s)[0]);var u=h(d?s*i:(1-s)*i,a);o=d,r.enable(!1),t.onFinish((function(){d||r.enable(!0)})).progressEnd(d?1:0,l,u),d&&n()}}});return r}(this.el,u,(function(){p.gestureAnimationDismissing=!0,p.animation.onFinish((function(){return Object(i.a)(p,void 0,void 0,(function(){return Object(i.c)(this,(function(e){switch(e.label){case 0:return[4,this.dismiss(void 0,"gesture")];case 1:return e.sent(),this.gestureAnimationDismissing=!1,[2]}}))}))}))})),this.gesture.enable(!0)),[2]}}))}))},e.prototype.dismiss=function(e,t){return Object(i.a)(this,void 0,void 0,(function(){var n,o;return Object(i.c)(this,(function(i){switch(i.label){case 0:return this.gestureAnimationDismissing&&"gesture"!==t?[2,!1]:(n=l.i.get(this)||[],[4,Object(l.g)(this,e,t,"modalLeave",v,y,this.presentingElement)]);case 1:return(o=i.sent())?[4,Object(m.b)(this.delegate,this.usersElement)]:[3,3];case 2:i.sent(),this.animation&&this.animation.destroy(),n.forEach((function(e){return e.destroy()})),i.label=3;case 3:return this.animation=void 0,[2,o]}}))}))},e.prototype.onDidDismiss=function(){return Object(l.h)(this.el,"ionModalDidDismiss")},e.prototype.onWillDismiss=function(){return Object(l.h)(this.el,"ionModalWillDismiss")},e.prototype.render=function(){var e,t=Object(o.d)(this);return Object(o.i)(o.a,{"no-router":!0,"aria-modal":"true",class:Object.assign((e={},e[t]=!0,e["modal-card"]=void 0!==this.presentingElement&&"ios"===t,e),Object(u.b)(this.cssClass)),style:{zIndex:""+(2e4+this.overlayIndex)},onIonBackdropTap:this.onBackdropTap,onIonDismiss:this.onDismiss,onIonModalDidPresent:this.onLifecycle,onIonModalWillPresent:this.onLifecycle,onIonModalWillDismiss:this.onLifecycle,onIonModalDidDismiss:this.onLifecycle},Object(o.i)("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),Object(o.i)("div",{role:"dialog",class:"modal-wrapper"}))},Object.defineProperty(e.prototype,"el",{get:function(){return Object(o.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-ion-modal-ios-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color,#fff);--box-shadow:none;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;contain:strict}.overlay-hidden.sc-ion-modal-ios-h{display:none}.modal-wrapper.sc-ion-modal-ios{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}@media only screen and (min-width:768px) and (min-height:600px){.sc-ion-modal-ios-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width:768px) and (min-height:768px){.sc-ion-modal-ios-h{--width:600px;--height:600px}}.sc-ion-modal-ios-h{--backdrop-opacity:var(--ion-backdrop-opacity,0.4)}@media only screen and (min-width:768px) and (min-height:600px){.sc-ion-modal-ios-h{--border-radius:10px}}.modal-wrapper.sc-ion-modal-ios{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}.modal-card.sc-ion-modal-ios-h{--backdrop-opacity:0;--width:100%;-ms-flex-align:end;align-items:flex-end}.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios{height:calc(100% - 40px)}.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios, [dir=rtl].modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios, [dir=rtl] .modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios, [dir=rtl].sc-ion-modal-ios-h -no-combinator.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios, [dir=rtl] .sc-ion-modal-ios-h -no-combinator.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios{border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-right-radius:0;border-bottom-left-radius:0}@supports (width:max(0px,1px)){.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios{height:calc(100% - max(30px, var(--ion-safe-area-top)) - 10px)}}"},enumerable:!0,configurable:!0}),e}(),O={ionModalDidPresent:"ionViewDidEnter",ionModalWillPresent:"ionViewWillEnter",ionModalWillDismiss:"ionViewWillLeave",ionModalDidDismiss:"ionViewDidLeave"}},475:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return c}));var i=n(4),o=function(e,t){return null!==t.closest(e)},r=function(e){var t;return"string"===typeof e&&e.length>0?((t={"ion-color":!0})["ion-color-"+e]=!0,t):void 0},a=function(e){var t={};return function(e){return void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter((function(e){return null!=e})).map((function(e){return e.trim()})).filter((function(e){return""!==e})):[]}(e).forEach((function(e){return t[e]=!0})),t},s=/^[a-z][a-z0-9+\-.]*:/,c=function(e,t,n){return Object(i.a)(void 0,void 0,void 0,(function(){var o;return Object(i.c)(this,(function(i){return null!=e&&"#"!==e[0]&&!s.test(e)&&(o=document.querySelector("ion-router"))?(null!=t&&t.preventDefault(),[2,o.push(e,n)]):[2,!1]}))}))}},477:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return r}));var i=n(4),o=function(e,t,n,o,r){return Object(i.a)(void 0,void 0,void 0,(function(){var a;return Object(i.c)(this,(function(i){switch(i.label){case 0:if(e)return[2,e.attachViewToDom(t,n,r,o)];if("string"!==typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");return a="string"===typeof n?t.ownerDocument&&t.ownerDocument.createElement(n):n,o&&o.forEach((function(e){return a.classList.add(e)})),r&&Object.assign(a,r),t.appendChild(a),a.componentOnReady?[4,a.componentOnReady()]:[3,2];case 1:i.sent(),i.label=2;case 2:return[2,a]}}))}))},r=function(e,t){if(t){if(e){var n=t.parentElement;return e.removeViewFromDom(n,t)}t.remove()}return Promise.resolve()}},478:function(e,t,n){"use strict";n.d(t,"a",(function(){return w})),n.d(t,"b",(function(){return j})),n.d(t,"c",(function(){return g})),n.d(t,"d",(function(){return O})),n.d(t,"e",(function(){return a}));var i=n(4),o=n(57),r=n(40),a=function(e){return new Promise((function(t,n){Object(o.l)((function(){s(e),c(e).then((function(n){n.animation&&n.animation.destroy(),d(e),t(n)}),(function(t){d(e),n(t)}))}))}))},s=function(e){var t=e.enteringEl,n=e.leavingEl;x(t,n,e.direction),e.showGoBack?t.classList.add("can-go-back"):t.classList.remove("can-go-back"),O(t,!1),n&&O(n,!1)},c=function(e){return Object(i.a)(void 0,void 0,void 0,(function(){var t;return Object(i.c)(this,(function(n){switch(n.label){case 0:return[4,l(e)];case 1:return t=n.sent(),[2,t?u(t,e):m(e)]}}))}))},d=function(e){var t=e.enteringEl,n=e.leavingEl;t.classList.remove("ion-page-invisible"),void 0!==n&&n.classList.remove("ion-page-invisible")},l=function(e){return Object(i.a)(void 0,void 0,void 0,(function(){var t;return Object(i.c)(this,(function(i){switch(i.label){case 0:return e.leavingEl&&e.animated&&0!==e.duration?e.animationBuilder?[2,e.animationBuilder]:"ios"!==e.mode?[3,2]:[4,n.e(88).then(n.bind(null,480))]:[2,void 0];case 1:return t=i.sent().iosTransitionAnimation,[3,4];case 2:return[4,n.e(89).then(n.bind(null,481))];case 3:t=i.sent().mdTransitionAnimation,i.label=4;case 4:return[2,t]}}))}))},u=function(e,t){return Object(i.a)(void 0,void 0,void 0,(function(){var n,o;return Object(i.c)(this,(function(i){switch(i.label){case 0:return[4,f(t,!0)];case 1:return i.sent(),n=e(t.baseEl,t),b(t.enteringEl,t.leavingEl),[4,h(n,t)];case 2:return o=i.sent(),t.progressCallback&&t.progressCallback(void 0),o&&v(t.enteringEl,t.leavingEl),[2,{hasCompleted:o,animation:n}]}}))}))},m=function(e){return Object(i.a)(void 0,void 0,void 0,(function(){var t,n;return Object(i.c)(this,(function(i){switch(i.label){case 0:return t=e.enteringEl,n=e.leavingEl,[4,f(e,!1)];case 1:return i.sent(),b(t,n),v(t,n),[2,{hasCompleted:!0}]}}))}))},f=function(e,t){return Object(i.a)(void 0,void 0,void 0,(function(){var n,o;return Object(i.c)(this,(function(i){switch(i.label){case 0:return n=void 0!==e.deepWait?e.deepWait:t,o=n?[w(e.enteringEl),w(e.leavingEl)]:[y(e.enteringEl),y(e.leavingEl)],[4,Promise.all(o)];case 1:return i.sent(),[4,p(e.viewIsReady,e.enteringEl)];case 2:return i.sent(),[2]}}))}))},p=function(e,t){return Object(i.a)(void 0,void 0,void 0,(function(){return Object(i.c)(this,(function(n){switch(n.label){case 0:return e?[4,e(t)]:[3,2];case 1:n.sent(),n.label=2;case 2:return[2]}}))}))},h=function(e,t){var n=t.progressCallback,i=new Promise((function(t){e.onFinish((function(e){return t(1===e)}))}));return n?(e.progressStart(!0),n(e)):e.play(),i},b=function(e,t){g(t,r.c),g(e,r.a)},v=function(e,t){g(e,r.b),g(t,r.d)},g=function(e,t){if(e){var n=new CustomEvent(t,{bubbles:!1,cancelable:!1});e.dispatchEvent(n)}},y=function(e){return e&&e.componentOnReady?e.componentOnReady():Promise.resolve()},w=function e(t){return Object(i.a)(void 0,void 0,void 0,(function(){var n;return Object(i.c)(this,(function(i){switch(i.label){case 0:return(n=t)?null==n.componentOnReady?[3,2]:[4,n.componentOnReady()]:[3,4];case 1:if(null!=i.sent())return[2];i.label=2;case 2:return[4,Promise.all(Array.from(n.children).map(e))];case 3:i.sent(),i.label=4;case 4:return[2]}}))}))},O=function(e,t){t?(e.setAttribute("aria-hidden","true"),e.classList.add("ion-page-hidden")):(e.hidden=!1,e.removeAttribute("aria-hidden"),e.classList.remove("ion-page-hidden"))},x=function(e,t,n){void 0!==e&&(e.style.zIndex="back"===n?"99":"101"),void 0!==t&&(t.style.zIndex="100")},j=function(e){if(e.classList.contains("ion-page"))return e;var t=e.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs");return t||e}}}]);
//# sourceMappingURL=11.46fb975f.chunk.js.map