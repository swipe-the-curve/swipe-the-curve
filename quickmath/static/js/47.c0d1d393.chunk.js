(this["webpackJsonpswipe-the-curve"]=this["webpackJsonpswipe-the-curve"]||[]).push([[47],{409:function(e,t,o){"use strict";o.r(t),o.d(t,"ion_checkbox",(function(){return c}));var i=o(57),n=(o(11),o(26)),r=o(475),c=function(){function e(e){var t=this;Object(i.k)(this,e),this.inputId="ion-cb-"+a++,this.name=this.inputId,this.checked=!1,this.indeterminate=!1,this.disabled=!1,this.value="on",this.onClick=function(){t.setFocus(),t.checked=!t.checked,t.indeterminate=!1},this.onFocus=function(){t.ionFocus.emit()},this.onBlur=function(){t.ionBlur.emit()},this.ionChange=Object(i.e)(this,"ionChange",7),this.ionFocus=Object(i.e)(this,"ionFocus",7),this.ionBlur=Object(i.e)(this,"ionBlur",7),this.ionStyle=Object(i.e)(this,"ionStyle",7)}return e.prototype.componentWillLoad=function(){this.emitStyle()},e.prototype.checkedChanged=function(e){this.ionChange.emit({checked:e,value:this.value}),this.emitStyle()},e.prototype.disabledChanged=function(){this.emitStyle()},e.prototype.emitStyle=function(){this.ionStyle.emit({"checkbox-checked":this.checked,"interactive-disabled":this.disabled})},e.prototype.setFocus=function(){this.buttonEl&&this.buttonEl.focus()},e.prototype.render=function(){var e,t=this,o=this,c=o.inputId,a=o.indeterminate,s=o.disabled,h=o.checked,d=o.value,b=o.color,u=o.el,l=c+"-lbl",k=Object(i.d)(this),p=Object(n.f)(u);p&&(p.id=l),Object(n.a)(!0,u,this.name,h?d:"",s);var f=a?Object(i.i)("path",{d:"M6 12L18 12"}):Object(i.i)("path",{d:"M5.9,12.5l3.8,3.8l8.8-8.8"});return"md"===k&&(f=a?Object(i.i)("path",{d:"M2 12H22"}):Object(i.i)("path",{d:"M1.73,12.91 8.1,19.28 22.79,4.59"})),Object(i.i)(i.a,{onClick:this.onClick,role:"checkbox","aria-disabled":s?"true":null,"aria-checked":""+h,"aria-labelledby":l,class:Object.assign(Object.assign({},Object(r.a)(b)),(e={},e[k]=!0,e["in-item"]=Object(r.c)("ion-item",u),e["checkbox-checked"]=h,e["checkbox-disabled"]=s,e["checkbox-indeterminate"]=a,e.interactive=!0,e))},Object(i.i)("svg",{class:"checkbox-icon",viewBox:"0 0 24 24"},f),Object(i.i)("button",{type:"button",onFocus:this.onFocus,onBlur:this.onBlur,disabled:this.disabled,ref:function(e){return t.buttonEl=e}}))},Object.defineProperty(e.prototype,"el",{get:function(){return Object(i.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(e,"watchers",{get:function(){return{checked:["checkedChanged"],disabled:["disabledChanged"]}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host{--background-checked:var(--ion-color-primary,#3880ff);--border-color-checked:var(--ion-color-primary,#3880ff);--checkmark-color:var(--ion-color-primary-contrast,#fff);--checkmark-width:1;--transition:none;display:inline-block;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.ion-color){--background-checked:var(--ion-color-base);--border-color-checked:var(--ion-color-base);--checkmark-color:var(--ion-color-contrast)}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}:host-context([dir=rtl]) button,[dir=rtl] button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.checkbox-icon{border-radius:var(--border-radius);display:block;position:relative;width:100%;height:100%;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-sizing:border-box;box-sizing:border-box}.checkbox-icon path{fill:none;stroke:var(--checkmark-color);stroke-width:var(--checkmark-width);opacity:0}:host(.checkbox-checked) .checkbox-icon,:host(.checkbox-indeterminate) .checkbox-icon{border-color:var(--border-color-checked);background:var(--background-checked)}:host(.checkbox-checked) .checkbox-icon path,:host(.checkbox-indeterminate) .checkbox-icon path{opacity:1}:host(.checkbox-disabled){pointer-events:none}:host{--border-radius:calc(var(--size) * .125);--border-width:2px;--border-style:solid;--border-color:rgba(var(--ion-text-color-rgb,0,0,0),0.51);--checkmark-width:3;--background:var(--ion-item-background,var(--ion-background-color,#fff));--transition:background 180ms cubic-bezier(0.4,0,0.2,1);--size:18px;width:var(--size);height:var(--size)}.checkbox-icon path{stroke-dasharray:30;stroke-dashoffset:30}:host(.checkbox-checked) .checkbox-icon path,:host(.checkbox-indeterminate) .checkbox-icon path{stroke-dashoffset:0;-webkit-transition:stroke-dashoffset 90ms linear 90ms;transition:stroke-dashoffset 90ms linear 90ms}:host(.checkbox-disabled){opacity:.3}:host(.in-item){margin-left:0;margin-right:0;margin-top:18px;margin-bottom:18px;display:block;position:static}:host(.in-item[slot=start]){margin-left:4px;margin-right:36px;margin-top:18px;margin-bottom:18px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-item[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:4px;margin-inline-start:4px;-webkit-margin-end:36px;margin-inline-end:36px}}"},enumerable:!0,configurable:!0}),e}(),a=0},475:function(e,t,o){"use strict";o.d(t,"a",(function(){return r})),o.d(t,"b",(function(){return c})),o.d(t,"c",(function(){return n})),o.d(t,"d",(function(){return s}));var i=o(4),n=function(e,t){return null!==t.closest(e)},r=function(e){var t;return"string"===typeof e&&e.length>0?((t={"ion-color":!0})["ion-color-"+e]=!0,t):void 0},c=function(e){var t={};return function(e){return void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter((function(e){return null!=e})).map((function(e){return e.trim()})).filter((function(e){return""!==e})):[]}(e).forEach((function(e){return t[e]=!0})),t},a=/^[a-z][a-z0-9+\-.]*:/,s=function(e,t,o){return Object(i.a)(void 0,void 0,void 0,(function(){var n;return Object(i.c)(this,(function(i){return null!=e&&"#"!==e[0]&&!a.test(e)&&(n=document.querySelector("ion-router"))?(null!=t&&t.preventDefault(),[2,n.push(e,o)]):[2,!1]}))}))}}}]);
//# sourceMappingURL=47.c0d1d393.chunk.js.map