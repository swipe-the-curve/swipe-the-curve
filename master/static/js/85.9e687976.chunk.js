(this["webpackJsonpswipe-the-curve"]=this["webpackJsonpswipe-the-curve"]||[]).push([[85],{461:function(e,i,t){"use strict";t.r(i),t.d(i,"ion_split_pane",(function(){return o}));var s=t(58),n=(t(11),{xs:"(min-width: 0px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",never:""}),o=function(){function e(e){Object(s.k)(this,e),this.visible=!1,this.disabled=!1,this.when=n.lg,this.ionSplitPaneVisible=Object(s.e)(this,"ionSplitPaneVisible",7)}return e.prototype.visibleChanged=function(e){var i={visible:e,isPane:this.isPane.bind(this)};this.ionSplitPaneVisible.emit(i)},e.prototype.connectedCallback=function(){this.styleChildren(),this.updateState()},e.prototype.disconnectedCallback=function(){this.rmL&&(this.rmL(),this.rmL=void 0)},e.prototype.updateState=function(){var e=this;if(this.rmL&&(this.rmL(),this.rmL=void 0),this.disabled)this.visible=!1;else{var i=this.when;if("boolean"!==typeof i){var t=n[i]||i;if(0!==t.length){if(window.matchMedia){var s=function(i){e.visible=i.matches},o=window.matchMedia(t);o.addListener(s),this.rmL=function(){return o.removeListener(s)},this.visible=o.matches}}else this.visible=!1}else this.visible=i}},e.prototype.isPane=function(e){return!!this.visible&&(e.parentElement===this.el&&e.classList.contains("split-pane-side"))},e.prototype.styleChildren=function(){for(var e=this.contentId,i=this.el.children,t=this.el.childElementCount,s=!1,n=0;n<t;n++){var o=i[n],a=void 0!==e&&o.id===e;if(a){if(s)return void console.warn("split pane cannot have more than one main node");s=!0}l(o,a)}s||console.warn("split pane does not have a specified main node")},e.prototype.render=function(){var e,i=Object(s.d)(this);return Object(s.i)(s.a,{class:(e={},e[i]=!0,e["split-pane-"+i]=!0,e["split-pane-visible"]=this.visible,e)},Object(s.i)("slot",null))},Object.defineProperty(e.prototype,"el",{get:function(){return Object(s.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(e,"watchers",{get:function(){return{visible:["visibleChanged"],disabled:["updateState"],when:["updateState"]}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host{--side-width:100%;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;contain:strict}::slotted(ion-menu.menu-pane-visible){-ms-flex:0 1 auto;flex:0 1 auto;width:var(--side-width);min-width:var(--side-min-width);max-width:var(--side-max-width)}:host(.split-pane-visible) ::slotted(.split-pane-main),:host(.split-pane-visible) ::slotted(.split-pane-side){left:0;right:0;top:0;bottom:0;position:relative;-webkit-box-shadow:none!important;box-shadow:none!important;z-index:0}:host(.split-pane-visible) ::slotted(.split-pane-main){-ms-flex:1;flex:1}:host(.split-pane-visible) ::slotted(.split-pane-side:not(ion-menu)),:host(.split-pane-visible) ::slotted(ion-menu.split-pane-side.menu-enabled){display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0}::slotted(.split-pane-side:not(ion-menu)){display:none}:host(.split-pane-visible) ::slotted(.split-pane-side){-ms-flex-order:-1;order:-1}:host(.split-pane-visible) ::slotted(.split-pane-side[side=end]){-ms-flex-order:1;order:1}:host{--border:0.55px solid var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-250,#c8c7cc)));--side-min-width:270px;--side-max-width:28%}:host(.split-pane-visible) ::slotted(.split-pane-side){min-width:var(--side-min-width);max-width:var(--side-max-width);border-right:var(--border);border-left:0}:host(.split-pane-visible) ::slotted(.split-pane-side[side=end]){min-width:var(--side-min-width);max-width:var(--side-max-width);border-right:0;border-left:var(--border)}"},enumerable:!0,configurable:!0}),e}(),l=function(e,i){var t,s;i?(t="split-pane-main",s="split-pane-side"):(t="split-pane-side",s="split-pane-main");var n=e.classList;n.add(t),n.remove(s)}}}]);
//# sourceMappingURL=85.9e687976.chunk.js.map