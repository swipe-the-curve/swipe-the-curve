(this["webpackJsonpswipe-the-curve"]=this["webpackJsonpswipe-the-curve"]||[]).push([[0],{488:function(e,t,r){"use strict";r.r(t),r.d(t,"createSwipeBackGesture",(function(){return i}));var n=r(23),a=r(97),i=function(e,t,r,i,c){var u=e.ownerDocument.defaultView;return Object(a.createGesture)({el:e,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:function(e){return e.startX<=50&&t()},onStart:r,onMove:function(e){var t=e.deltaX/u.innerWidth;i(t)},onEnd:function(e){var t=e.deltaX,r=u.innerWidth,a=t/r,i=e.velocityX,o=r/2,s=i>=0&&(i>.2||e.deltaX>o),h=(s?1-a:a)*r,d=0;if(h>5){var p=h/Math.abs(i);d=Math.min(p,540)}c(s,a<=0?.01:Object(n.c)(0,a,.9999),d)}})}}}]);
//# sourceMappingURL=0.6fa980ed.chunk.js.map