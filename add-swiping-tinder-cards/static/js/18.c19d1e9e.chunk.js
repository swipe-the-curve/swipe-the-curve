(this["webpackJsonpswipe-the-curve"]=this["webpackJsonpswipe-the-curve"]||[]).push([[18],{469:function(t,e,n){"use strict";n.r(e),n.d(e,"ion_toggle",(function(){return c}));var i=n(4),o=n(54),r=(n(8),n(19)),s=n(478),a=n(482),c=function(){function t(t){var e=this;Object(o.k)(this,t),this.inputId="ion-tg-"+u++,this.lastDrag=0,this.activated=!1,this.name=this.inputId,this.checked=!1,this.disabled=!1,this.value="on",this.onClick=function(){e.lastDrag+300<Date.now()&&(e.checked=!e.checked)},this.onFocus=function(){e.ionFocus.emit()},this.onBlur=function(){e.ionBlur.emit()},this.ionChange=Object(o.e)(this,"ionChange",7),this.ionFocus=Object(o.e)(this,"ionFocus",7),this.ionBlur=Object(o.e)(this,"ionBlur",7),this.ionStyle=Object(o.e)(this,"ionStyle",7)}return t.prototype.checkedChanged=function(t){this.ionChange.emit({checked:t,value:this.value})},t.prototype.disabledChanged=function(){this.emitStyle(),this.gesture&&this.gesture.enable(!this.disabled)},t.prototype.connectedCallback=function(){return Object(i.a)(this,void 0,void 0,(function(){var t,e=this;return Object(i.c)(this,(function(i){switch(i.label){case 0:return t=this,[4,Promise.resolve().then(n.bind(null,96))];case 1:return t.gesture=i.sent().createGesture({el:this.el,gestureName:"toggle",gesturePriority:100,threshold:5,passive:!1,onStart:function(){return e.onStart()},onMove:function(t){return e.onMove(t)},onEnd:function(t){return e.onEnd(t)}}),this.disabledChanged(),[2]}}))}))},t.prototype.disconnectedCallback=function(){this.gesture&&(this.gesture.destroy(),this.gesture=void 0)},t.prototype.componentWillLoad=function(){this.emitStyle()},t.prototype.emitStyle=function(){this.ionStyle.emit({"interactive-disabled":this.disabled})},t.prototype.onStart=function(){this.activated=!0,this.setFocus()},t.prototype.onMove=function(t){d(document,this.checked,t.deltaX,-10)&&(this.checked=!this.checked,Object(a.d)())},t.prototype.onEnd=function(t){this.activated=!1,this.lastDrag=Date.now(),t.event.preventDefault(),t.event.stopImmediatePropagation()},t.prototype.getValue=function(){return this.value||""},t.prototype.setFocus=function(){this.buttonEl&&this.buttonEl.focus()},t.prototype.render=function(){var t,e=this,n=this,i=n.inputId,a=n.disabled,c=n.checked,d=n.activated,u=n.color,l=n.el,g=Object(o.d)(this),h=i+"-lbl",p=Object(r.f)(l),b=this.getValue();return p&&(p.id=h),Object(r.a)(!0,l,this.name,c?b:"",a),Object(o.i)(o.a,{onClick:this.onClick,role:"checkbox","aria-disabled":a?"true":null,"aria-checked":""+c,"aria-labelledby":h,class:Object.assign(Object.assign({},Object(s.a)(u)),(t={},t[g]=!0,t["in-item"]=Object(s.c)("ion-item",l),t["toggle-activated"]=d,t["toggle-checked"]=c,t["toggle-disabled"]=a,t.interactive=!0,t))},Object(o.i)("div",{class:"toggle-icon"},Object(o.i)("div",{class:"toggle-inner"})),Object(o.i)("button",{type:"button",onFocus:this.onFocus,onBlur:this.onBlur,disabled:a,ref:function(t){return e.buttonEl=t}}))},Object.defineProperty(t.prototype,"el",{get:function(){return Object(o.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{checked:["checkedChanged"],disabled:["disabledChanged"]}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{-webkit-box-sizing:content-box!important;box-sizing:content-box!important;display:inline-block;outline:none;contain:content;cursor:pointer;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.ion-focused) input{border:2px solid #5e9ed6}:host(.toggle-disabled){pointer-events:none}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}:host-context([dir=rtl]) button,[dir=rtl] button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}:host{--background:rgba(var(--ion-text-color-rgb,0,0,0),0.088);--background-checked:var(--ion-color-primary,#3880ff);--handle-background:#fff;--handle-background-checked:#fff;--border-radius:16px;--handle-border-radius:14px;-webkit-box-sizing:content-box;box-sizing:content-box;position:relative;width:51px;height:32px;contain:strict}:host(.ion-color.toggle-checked) .toggle-icon{background:var(--ion-color-base)}.toggle-icon{border-radius:var(--border-radius);display:block;position:relative;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-transition:background-color .3s;transition:background-color .3s;background:var(--background);overflow:hidden;pointer-events:none}.toggle-inner{left:2px;top:2px;border-radius:var(--handle-border-radius);position:absolute;width:28px;height:28px;-webkit-transition:width .12s ease-in-out 80ms,left .11s ease-in-out 80ms,right .11s ease-in-out 80ms,-webkit-transform .3s;transition:width .12s ease-in-out 80ms,left .11s ease-in-out 80ms,right .11s ease-in-out 80ms,-webkit-transform .3s;transition:transform .3s,width .12s ease-in-out 80ms,left .11s ease-in-out 80ms,right .11s ease-in-out 80ms;transition:transform .3s,width .12s ease-in-out 80ms,left .11s ease-in-out 80ms,right .11s ease-in-out 80ms,-webkit-transform .3s;background:var(--handle-background);-webkit-box-shadow:0 3px 12px rgba(0,0,0,.16),0 3px 1px rgba(0,0,0,.1);box-shadow:0 3px 12px rgba(0,0,0,.16),0 3px 1px rgba(0,0,0,.1);will-change:transform;contain:strict}:host-context([dir=rtl]) .toggle-inner,[dir=rtl] .toggle-inner{left:unset;right:unset;right:2px}:host(.toggle-checked) .toggle-icon{background:var(--background-checked)}:host(.toggle-activated) .toggle-icon:before,:host(.toggle-checked) .toggle-icon:before{-webkit-transform:scale3d(0,0,0);transform:scale3d(0,0,0)}:host(.toggle-checked) .toggle-inner{-webkit-transform:translate3d(19px,0,0);transform:translate3d(19px,0,0);background:var(--handle-background-checked)}:host-context([dir=rtl]).toggle-checked .toggle-inner,:host-context([dir=rtl]):host(.toggle-checked) .toggle-inner{-webkit-transform:translate3d(calc(-1 * 19px),0,0);transform:translate3d(calc(-1 * 19px),0,0)}:host(.toggle-activated.toggle-checked) .toggle-inner:before{-webkit-transform:scale3d(0,0,0);transform:scale3d(0,0,0)}:host(.toggle-activated) .toggle-inner{width:34px}:host(.toggle-activated.toggle-checked) .toggle-inner{left:-4px}:host-context([dir=rtl]).toggle-activated.toggle-checked .toggle-inner,:host-context([dir=rtl]):host(.toggle-activated.toggle-checked) .toggle-inner{left:unset;right:unset;right:-4px}:host(.toggle-disabled){opacity:.3}:host(.in-item[slot]){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:20px;padding-right:10px;padding-top:6px;padding-bottom:5px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-item[slot]){padding-left:unset;padding-right:unset;-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:10px;padding-inline-end:10px}}:host(.in-item[slot=start]){padding-left:0;padding-right:16px;padding-top:6px;padding-bottom:5px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-item[slot=start]){padding-left:unset;padding-right:unset;-webkit-padding-start:0;padding-inline-start:0;-webkit-padding-end:16px;padding-inline-end:16px}}"},enumerable:!0,configurable:!0}),t}(),d=function(t,e,n,i){var o="rtl"===t.dir;return e?!o&&i>n||o&&-i<n:!o&&-i<n||o&&i>n},u=0},478:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return o})),n.d(e,"d",(function(){return c}));var i=n(4),o=function(t,e){return null!==e.closest(t)},r=function(t){var e;return"string"===typeof t&&t.length>0?((e={"ion-color":!0})["ion-color-"+t]=!0,e):void 0},s=function(t){var e={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter((function(t){return null!=t})).map((function(t){return t.trim()})).filter((function(t){return""!==t})):[]}(t).forEach((function(t){return e[t]=!0})),e},a=/^[a-z][a-z0-9+\-.]*:/,c=function(t,e,n){return Object(i.a)(void 0,void 0,void 0,(function(){var o;return Object(i.c)(this,(function(i){return null!=t&&"#"!==t[0]&&!a.test(t)&&(o=document.querySelector("ion-router"))?(null!=e&&e.preventDefault(),[2,o.push(t,n)]):[2,!1]}))}))}},482:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return s})),n.d(e,"d",(function(){return i}));var i=function(){var t=window.TapticEngine;t&&t.selection()},o=function(){var t=window.TapticEngine;t&&t.gestureSelectionStart()},r=function(){var t=window.TapticEngine;t&&t.gestureSelectionChanged()},s=function(){var t=window.TapticEngine;t&&t.gestureSelectionEnd()}}}]);
//# sourceMappingURL=18.c19d1e9e.chunk.js.map