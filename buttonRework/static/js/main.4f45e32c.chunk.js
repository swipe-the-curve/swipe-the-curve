(this["webpackJsonpswipe-the-curve"]=this["webpackJsonpswipe-the-curve"]||[]).push([[6],{193:function(e,t,n){e.exports=n(393)},199:function(e,t,n){var r={"./ion-action-sheet-ios.entry.js":[397,36],"./ion-action-sheet-md.entry.js":[398,37],"./ion-alert-ios.entry.js":[399,20],"./ion-alert-md.entry.js":[400,21],"./ion-app_8-ios.entry.js":[401,9],"./ion-app_8-md.entry.js":[402,10],"./ion-avatar_3-ios.entry.js":[403,38],"./ion-avatar_3-md.entry.js":[404,39],"./ion-back-button-ios.entry.js":[405,40],"./ion-back-button-md.entry.js":[406,41],"./ion-backdrop-ios.entry.js":[407,78],"./ion-backdrop-md.entry.js":[408,79],"./ion-button_2-ios.entry.js":[409,42],"./ion-button_2-md.entry.js":[410,43],"./ion-card_5-ios.entry.js":[411,44],"./ion-card_5-md.entry.js":[412,45],"./ion-checkbox-ios.entry.js":[413,46],"./ion-checkbox-md.entry.js":[414,47],"./ion-chip-ios.entry.js":[415,48],"./ion-chip-md.entry.js":[416,49],"./ion-col_3.entry.js":[417,80],"./ion-datetime_3-ios.entry.js":[418,16],"./ion-datetime_3-md.entry.js":[419,17],"./ion-fab_3-ios.entry.js":[420,50],"./ion-fab_3-md.entry.js":[421,51],"./ion-img.entry.js":[422,81],"./ion-infinite-scroll_2-ios.entry.js":[423,34],"./ion-infinite-scroll_2-md.entry.js":[424,35],"./ion-input-ios.entry.js":[425,52],"./ion-input-md.entry.js":[426,53],"./ion-item-option_3-ios.entry.js":[427,54],"./ion-item-option_3-md.entry.js":[428,55],"./ion-item_8-ios.entry.js":[429,56],"./ion-item_8-md.entry.js":[430,57],"./ion-loading-ios.entry.js":[431,22],"./ion-loading-md.entry.js":[432,23],"./ion-menu_3-ios.entry.js":[433,58],"./ion-menu_3-md.entry.js":[434,59],"./ion-modal-ios.entry.js":[435,11],"./ion-modal-md.entry.js":[436,12],"./ion-nav_2.entry.js":[437,15],"./ion-popover-ios.entry.js":[438,13],"./ion-popover-md.entry.js":[439,14],"./ion-progress-bar-ios.entry.js":[440,60],"./ion-progress-bar-md.entry.js":[441,61],"./ion-radio_2-ios.entry.js":[442,62],"./ion-radio_2-md.entry.js":[443,63],"./ion-range-ios.entry.js":[444,64],"./ion-range-md.entry.js":[445,65],"./ion-refresher_2-ios.entry.js":[446,24],"./ion-refresher_2-md.entry.js":[447,25],"./ion-reorder_2-ios.entry.js":[448,32],"./ion-reorder_2-md.entry.js":[449,33],"./ion-ripple-effect.entry.js":[450,82],"./ion-route_4.entry.js":[451,66],"./ion-searchbar-ios.entry.js":[452,67],"./ion-searchbar-md.entry.js":[453,68],"./ion-segment_2-ios.entry.js":[454,69],"./ion-segment_2-md.entry.js":[455,70],"./ion-select_3-ios.entry.js":[456,71],"./ion-select_3-md.entry.js":[457,72],"./ion-slide_2-ios.entry.js":[458,83],"./ion-slide_2-md.entry.js":[459,84],"./ion-spinner.entry.js":[460,28],"./ion-split-pane-ios.entry.js":[461,85],"./ion-split-pane-md.entry.js":[462,86],"./ion-tab-bar_2-ios.entry.js":[463,73],"./ion-tab-bar_2-md.entry.js":[464,74],"./ion-tab_2.entry.js":[465,31],"./ion-text.entry.js":[466,75],"./ion-textarea-ios.entry.js":[467,76],"./ion-textarea-md.entry.js":[468,77],"./ion-toast-ios.entry.js":[469,26],"./ion-toast-md.entry.js":[470,27],"./ion-toggle-ios.entry.js":[471,18],"./ion-toggle-md.entry.js":[472,19],"./ion-virtual-scroll.entry.js":[473,87]};function i(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],i=t[0];return n.e(t[1]).then((function(){return n(i)}))}i.keys=function(){return Object.keys(r)},i.id=199,e.exports=i},201:function(e,t,n){var r={"./ion-icon.entry.js":[477,93]};function i(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],i=t[0];return n.e(t[1]).then((function(){return n(i)}))}i.keys=function(){return Object.keys(r)},i.id=201,e.exports=i},381:function(e,t,n){},392:function(e,t,n){},393:function(e,t,n){"use strict";n.r(t);var r=n(1),i=n.n(r),a=n(36),o=n.n(a),s=n(13),c=n(32),l=n(39),u=n(6),f=n(8),h=function(){function e(t,n){Object(u.a)(this,e),this.infected=t,this.susceptibles=n,this.recovered=0,this.dead=0}return Object(f.a)(e,[{key:"step",value:function(e,t,n){var r=1-t,i=Math.floor(Math.min(Math.max(n*this.susceptibles,0),this.susceptibles)),a=Math.floor(Math.min(Math.max(e*this.susceptibles*this.infected,0),this.susceptibles)),o=Math.floor(Math.min(Math.max(r*this.infected,0),this.infected)),s=Math.floor(Math.min(Math.max(t*this.infected,0),this.infected-o));return this.susceptibles=this.susceptibles-a-i,this.infected=this.infected+a-o-s,this.recovered=this.recovered+o,this.dead=this.dead+s,new d(this.recovered,this.infected,this.dead)}}]),e}(),d=function e(t,n,r){Object(u.a)(this,e),this.recovered=t,this.infected=n,this.dead=r},m=function e(t,n,r,i){Object(u.a)(this,e),this.name=t,this.rateOfInfection=n,this.rateOfDeath=r,this.rateOfImmunity=i},y=function e(t,n){Object(u.a)(this,e),this.name=t,this.population=n},p=n(23),j=n(15),v=n(10);function b(e){return function(){var t,n=Object(j.a)(e);if(g()){var r=Object(j.a)(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return Object(p.a)(this,t)}}function g(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var O=function(e){Object(v.a)(n,e);var t=b(n);function n(e,r,i){var a;return Object(u.a)(this,n),(a=t.call(this,e)).leftChoice=r,a.rightChoice=i,a}return n}((function e(t){Object(u.a)(this,e),this.text=t})),w=function(e){Object(v.a)(n,e);var t=b(n);function n(e,r){var i;return Object(u.a)(this,n),(i=t.call(this,e,r,r)).choice=r,i}return n}(O),E=function e(t,n){Object(u.a)(this,e),this.text=t,this.effect=n},S=function e(t,n,r,i){Object(u.a)(this,e),this.populationMood=t,this.economy=n,this.rateOfQuarantining=r,this.healthSystemCapacity=i};function C(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"===typeof e)return _(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _(e,t)}(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,i,a=!0,o=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return a=e.done,e},e:function(e){o=!0,i=e},f:function(){try{a||null==r.return||r.return()}finally{if(o)throw i}}}}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function x(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function k(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var M=function(e){Object(v.a)(r,e);var t,n=(t=r,function(){var e,n=Object(j.a)(t);if(k()){var r=Object(j.a)(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return Object(p.a)(this,e)});function r(){return Object(u.a)(this,r),n.apply(this,arguments)}return Object(f.a)(r,[{key:"elementFromObject",value:function(e){var t=e.type.toLowerCase(),n=e.text;switch(t){case"selection":var r=this.choiceFromObject(e.leftChoice),i=this.choiceFromObject(e.rightChoice);return new O(n,r,i);case"event":var a=this.choiceFromObject(e.choice);return new w(n,a);default:throw new Error("Can't create cards of type ".concat(t))}}},{key:"choiceFromObject",value:function(e){var t=e.text,n=e.effect,r=new S(n.populationMood||0,n.economy||0,n.rateOfQuarantining||0,n.healthSystemCapacity||0);return new E(t,r)}}]),r}(function(e){Object(v.a)(r,e);var t,n=(t=r,function(){var e,n=Object(j.a)(t);if(x()){var r=Object(j.a)(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return Object(p.a)(this,e)});function r(){return Object(u.a)(this,r),n.apply(this,arguments)}return Object(f.a)(r,[{key:"fromObject",value:function(e){var t,n=[],r=C(e);try{for(r.s();!(t=r.n()).done;){var i=t.value;n.push(this.elementFromObject(i))}}catch(a){r.e(a)}finally{r.f()}return n}}]),r}(function(){function e(){Object(u.a)(this,e)}return Object(f.a)(e,[{key:"fromJson",value:function(e){return this.fromObject(JSON.parse(e))}}]),e}()));function A(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"===typeof e)return I(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return I(e,t)}(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,i,a=!0,o=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return a=e.done,e},e:function(e){o=!0,i=e},f:function(){try{a||null==r.return||r.return()}finally{if(o)throw i}}}}function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var D=function(){function e(){var t=this;Object(u.a)(this,e),this.epidemicStates=void 0,this.model=void 0,this.gameState=void 0,this.cards=[],this.stateListeners=void 0;var n=new m("Corona",2.3,.005,0),r=new y("SCHLAND",8e7);fetch("https://swipe-the-curve.github.io/swipe-the-curve/buttonRework/assets/cards/default.json").then((function(e){return e.json()})).then((function(e){t.cards=(new M).fromObject(e).reverse(),t.gameState.currentCard=t.nextCard(),t.notifyListeners()})),this.gameState=new L(new R(r,n,4e-4),r),this.model=new h(0,r.population),this.model.infected=1,this.epidemicStates=[new d(0,0,0)],this.stateListeners=[]}return Object(f.a)(e,[{key:"step",value:function(e){this.gameState.populationMood+=e.populationMood,this.gameState.economy+=e.economy,this.gameState.infectionState.healthcareSystemCapacity+=e.healthSystemCapacity,this.gameState.infectionState.rateOfQuarantining+=e.rateOfQuarantining;var t=this.model.step(this.gameState.infectionState.rateOfInfection,this.gameState.infectionState.rateOfDeath(this.epidemicStates[this.epidemicStates.length-1]),this.gameState.infectionState.rateOfImmunity);this.epidemicStates.push(t),this.gameState.currentCard=this.nextCard(),this.notifyListeners()}},{key:"dummy",value:function(){this.gameState.economy-=.1,this.epidemicStates.push(new d(1,2,3)),this.notifyListeners()}},{key:"nextCard",value:function(){return this.cards.pop()}},{key:"addStateListener",value:function(e){this.stateListeners.push(e)}},{key:"notifyListeners",value:function(){var e,t=A(this.stateListeners);try{for(t.s();!(e=t.n()).done;){(0,e.value)()}}catch(n){t.e(n)}finally{t.f()}}},{key:"daysPassed",get:function(){return this.epidemicStates.length}}]),e}(),L=function e(t,n){Object(u.a)(this,e),this.infectionState=t,this.country=n,this.populationMood=.8,this.economy=.8,this.currentCard=void 0},R=function(){function e(t,n,r){Object(u.a)(this,e),this.country=t,this.disease=n,this.healthcareSystemCapacity=r,this.rateOfQuarantining=0}return Object(f.a)(e,[{key:"rateOfDeath",value:function(e){var t=this.healthcareSystemCapacity*this.country.population,n=Math.max(e.infected-t,0)/t;return this.disease.rateOfDeath*(1+n)}},{key:"rateOfInfection",get:function(){var e=1-this.rateOfQuarantining;return this.disease.rateOfInfection*e}},{key:"rateOfImmunity",get:function(){return this.disease.rateOfImmunity}}]),e}(),N=new D,F=function(){var e=Object(r.useState)(),t=Object(c.a)(e,2),n=t[0],a=t[1];return Object(r.useEffect)((function(){console.log("addEventlistener"),N.addStateListener((function(){var e=N.epidemicStates.map((function(e,t){return{name:"Tag ".concat(t+1),infected:e.infected,recovered:e.recovered,dead:e.dead}}));a(e)}))}),[]),console.log("EpidState: ",n),i.a.createElement("div",{className:"full-width"},i.a.createElement(l.c,{height:"100%",width:"100%"},i.a.createElement(l.b,{data:n,margin:{left:-2}},i.a.createElement(l.d,null),i.a.createElement(l.a,{isAnimationActive:!1,type:"monotone",dataKey:"infected",stackId:"1",stroke:"#f53d3d",fill:"#f53d3d"}),i.a.createElement(l.a,{isAnimationActive:!1,type:"monotone",dataKey:"recovered",stackId:"1",stroke:"#4db374",fill:"#4db374"}),i.a.createElement(l.a,{isAnimationActive:!1,type:"monotone",dataKey:"dead",stackId:"1",stroke:"#3b1111",fill:"#3b1111"}))))},P=(n(381),n(51)),T=function(e){return i.a.createElement("div",{className:"card shadow"},e.card&&e.card.text)},H=function(){var e=Object(r.useState)(new w("test",new E("Test",new S(0,0,0,0)))),t=Object(c.a)(e,2),n=t[0],a=t[1];Object(r.useEffect)((function(){console.log("addEventlistener"),N.addStateListener((function(){N.gameState.currentCard&&a(N.gameState.currentCard)}))}),[]);var o=function(e){e!==P.b.RIGHT?e!==P.b.LEFT||n instanceof O&&N.step(n.rightChoice.effect):n instanceof O&&N.step(n.leftChoice.effect)};return i.a.createElement("div",null,i.a.createElement(P.a,{onSwipe:o},i.a.createElement("div",{className:""},i.a.createElement(T,{card:n}))),i.a.createElement("div",{className:"backgroundCard"},i.a.createElement(T,{card:void 0})),i.a.createElement("div",{className:"choices"},i.a.createElement("div",{className:"choice leftChoice",onClick:function(){o(P.b.LEFT)}},n.leftChoice.text),i.a.createElement("div",{className:"choice rigthChoice",onClick:function(){o(P.b.RIGHT)}},n.rightChoice.text)))},W=function(){var e=Object(r.useState)(1),t=Object(c.a)(e,2),n=t[0],a=t[1],o=Object(r.useState)(1),l=Object(c.a)(o,2),u=l[0],f=l[1],h=Object(r.useState)(1),d=Object(c.a)(h,2),m=d[0],y=d[1];return Object(r.useEffect)((function(){console.log("addEventlistener"),N.addStateListener((function(){a(1),f(N.gameState.populationMood),y(N.gameState.economy)}))}),[]),i.a.createElement(s.f,null,i.a.createElement(s.e,null,i.a.createElement(s.i,null,i.a.createElement(s.h,null,"Swipe to #FlattenTheCurve"))),i.a.createElement(s.c,null,i.a.createElement(s.d,null,i.a.createElement(s.g,{className:"curve-container"},i.a.createElement(F,null)),i.a.createElement(s.g,{className:"resource-container"},i.a.createElement(s.b,null,i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"5vw",height:"5vh",viewBox:"0 0 512 512"},i.a.createElement("title",null,"Heart"),i.a.createElement("defs",null,i.a.createElement("linearGradient",{id:"progressHeart",x1:"0",y1:"1",x2:"0",y2:"0"},i.a.createElement("stop",{id:"stop1Heart",offset:n,"stop-color":"red"}),i.a.createElement("stop",{id:"stop2Heart",offset:n,"stop-color":"#D5A021"}))),i.a.createElement("path",{d:"M352.92,80C288,80,256,144,256,144s-32-64-96.92-64C106.32,80,64.54,124.14,64,176.81c-1.1,109.33,86.73,187.08,183,252.42a16,16,0,0,0,18,0c96.26-65.34,184.09-143.09,183-252.42C447.46,124.14,405.68,80,352.92,80Z",fill:"url(#progressHeart)"}))),i.a.createElement(s.b,null,i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"5vw",height:"5vh",viewBox:"0 0 512 512"},i.a.createElement("title",null,"People"),i.a.createElement("defs",null,i.a.createElement("linearGradient",{id:"progressPeople",x1:"0",y1:"1",x2:"0",y2:"0"},i.a.createElement("stop",{id:"stop1People",offset:u,"stop-color":"red"}),i.a.createElement("stop",{id:"stop2People",offset:u,"stop-color":"#D5A021"}))),i.a.createElement("path",{d:"M402,168c-2.93,40.67-33.1,72-66,72s-63.12-31.32-66-72c-3-42.31,26.37-72,66-72S405,126.46,402,168Z M336,304c-65.17,0-127.84,32.37-143.54,95.41-2.08,8.34,3.15,16.59,11.72,16.59H467.83c8.57,0,13.77-8.25,11.72-16.59C463.85,335.36,401.18,304,336,304Z M200,185.94C197.66,218.42,173.28,244,147,244S96.3,218.43,94,185.94C91.61,152.15,115.34,128,147,128S202.39,152.77,200,185.94Z M206,306c-18.05-8.27-37.93-11.45-59-11.45-52,0-102.1,25.85-114.65,76.2C30.7,377.41,34.88,384,41.72,384H154",fill:"url(#progressPeople)"}))),i.a.createElement(s.b,null,i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"5vw",height:"5vh",viewBox:"0 0 512 512"},i.a.createElement("title",null,"Wealth"),i.a.createElement("defs",null,i.a.createElement("linearGradient",{id:"progressWealth",x1:"0",y1:"1",x2:"0",y2:"0"},i.a.createElement("stop",{id:"stop1Wealth",offset:m,"stop-color":"red"}),i.a.createElement("stop",{id:"stop2Wealth",offset:m,"stop-color":"#D5A021"}))),i.a.createElement("path",{d:"M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z",fill:"url(#progressWealth)"})))),i.a.createElement(s.g,{className:"cardstack-container"},i.a.createElement(s.b,null,i.a.createElement(H,null))))))},Q=(n(382),n(383),n(384),n(385),n(386),n(387),n(388),n(389),n(390),n(391),n(392),function(){return i.a.createElement(s.a,null,i.a.createElement(W,null))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[193,7,8]]]);
//# sourceMappingURL=main.4f45e32c.chunk.js.map