(this["webpackJsonpswipe-the-curve"]=this["webpackJsonpswipe-the-curve"]||[]).push([[45],{410:function(t,n,r){"use strict";r.r(n),r.d(n,"ion_card",(function(){return o})),r.d(n,"ion_card_content",(function(){return a})),r.d(n,"ion_card_header",(function(){return c})),r.d(n,"ion_card_subtitle",(function(){return s})),r.d(n,"ion_card_title",(function(){return d}));var i=r(53),e=(r(8),r(478)),o=function(){function t(t){Object(i.k)(this,t),this.button=!1,this.type="button",this.disabled=!1,this.routerDirection="forward"}return t.prototype.isClickable=function(){return void 0!==this.href||this.button},t.prototype.renderCard=function(t){var n=this.isClickable();if(!n)return[Object(i.i)("slot",null)];var r=this.href,o=this.routerDirection,a=n?void 0===r?"button":"a":"div",c="button"===a?{type:this.type}:{download:this.download,href:this.href,rel:this.rel,target:this.target};return Object(i.i)(a,Object.assign({},c,{class:"card-native",disabled:this.disabled,onClick:function(t){return Object(e.d)(r,t,o)}}),Object(i.i)("slot",null),n&&"md"===t&&Object(i.i)("ion-ripple-effect",null))},t.prototype.render=function(){var t,n=Object(i.d)(this);return Object(i.i)(i.a,{class:Object.assign(Object.assign((t={},t[n]=!0,t),Object(e.a)(this.color)),{"card-disabled":this.disabled,"ion-activatable":this.isClickable()})},this.renderCard(n))},Object.defineProperty(t,"style",{get:function(){return":host{--ion-safe-area-left:0px;--ion-safe-area-right:0px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;background:var(--background);color:var(--color);font-family:var(--ion-font-family,inherit);overflow:hidden}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.card-disabled){cursor:default;opacity:.3;pointer-events:none}.card-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;width:100%;min-height:var(--min-height);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:inherit}.card-native::-moz-focus-inner{border:0}a,button{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none}ion-ripple-effect{color:var(--ripple-color)}:host{--background:var(--ion-item-background,var(--ion-background-color,#fff));--color:var(--ion-color-step-550,#737373);margin-left:10px;margin-right:10px;margin-top:10px;margin-bottom:10px;border-radius:4px;font-size:14px;-webkit-box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{margin-left:unset;margin-right:unset;-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:10px;margin-inline-end:10px}}"},enumerable:!0,configurable:!0}),t}(),a=function(){function t(t){Object(i.k)(this,t)}return t.prototype.render=function(){var t,n=Object(i.d)(this);return Object(i.i)(i.a,{class:(t={},t[n]=!0,t["card-content-"+n]=!0,t)})},Object.defineProperty(t,"style",{get:function(){return"ion-card-content{display:block;position:relative}.card-content-md{padding-left:16px;padding-right:16px;padding-top:13px;padding-bottom:13px;font-size:14px;line-height:1.5}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.card-content-md{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.card-content-md h1{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:24px;font-weight:400}.card-content-md h2{margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:16px;font-weight:400}.card-content-md h3,.card-content-md h4,.card-content-md h5,.card-content-md h6{margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:14px;font-weight:400}.card-content-md p{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:14px;font-weight:400;line-height:1.5}ion-card-header+.card-content-md{padding-top:0}"},enumerable:!0,configurable:!0}),t}(),c=function(){function t(t){Object(i.k)(this,t),this.translucent=!1}return t.prototype.render=function(){var t,n=Object(i.d)(this);return Object(i.i)(i.a,{class:Object.assign(Object.assign({},Object(e.a)(this.color)),(t={"card-header-translucent":this.translucent,"ion-inherit-color":!0},t[n]=!0,t))},Object(i.i)("slot",null))},Object.defineProperty(t,"style",{get:function(){return":host{--background:transparent;--color:inherit;display:block;position:relative;background:var(--background);color:var(--color)}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host{padding-left:16px;padding-right:16px;padding-top:16px;padding-bottom:16px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}::slotted(ion-card-subtitle:not(:first-child)),::slotted(ion-card-title:not(:first-child)){margin-top:8px}"},enumerable:!0,configurable:!0}),t}(),s=function(){function t(t){Object(i.k)(this,t)}return t.prototype.render=function(){var t,n=Object(i.d)(this);return Object(i.i)(i.a,{role:"heading","aria-level":"3",class:Object.assign(Object.assign({},Object(e.a)(this.color)),(t={"ion-inherit-color":!0},t[n]=!0,t))},Object(i.i)("slot",null))},Object.defineProperty(t,"style",{get:function(){return":host{display:block;position:relative;color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-color-step-550,#737373);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-size:14px;font-weight:500}"},enumerable:!0,configurable:!0}),t}(),d=function(){function t(t){Object(i.k)(this,t)}return t.prototype.render=function(){var t,n=Object(i.d)(this);return Object(i.i)(i.a,{role:"heading","aria-level":"2",class:Object.assign(Object.assign({},Object(e.a)(this.color)),(t={"ion-inherit-color":!0},t[n]=!0,t))},Object(i.i)("slot",null))},Object.defineProperty(t,"style",{get:function(){return":host{display:block;position:relative;color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-color-step-850,#262626);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-size:20px;font-weight:500;line-height:1.2}"},enumerable:!0,configurable:!0}),t}()},478:function(t,n,r){"use strict";r.d(n,"a",(function(){return o})),r.d(n,"b",(function(){return a})),r.d(n,"c",(function(){return e})),r.d(n,"d",(function(){return s}));var i=r(4),e=function(t,n){return null!==n.closest(t)},o=function(t){var n;return"string"===typeof t&&t.length>0?((n={"ion-color":!0})["ion-color-"+t]=!0,n):void 0},a=function(t){var n={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter((function(t){return null!=t})).map((function(t){return t.trim()})).filter((function(t){return""!==t})):[]}(t).forEach((function(t){return n[t]=!0})),n},c=/^[a-z][a-z0-9+\-.]*:/,s=function(t,n,r){return Object(i.a)(void 0,void 0,void 0,(function(){var e;return Object(i.c)(this,(function(i){return null!=t&&"#"!==t[0]&&!c.test(t)&&(e=document.querySelector("ion-router"))?(null!=n&&n.preventDefault(),[2,e.push(t,r)]):[2,!1]}))}))}}}]);
//# sourceMappingURL=45.f8f1468f.chunk.js.map