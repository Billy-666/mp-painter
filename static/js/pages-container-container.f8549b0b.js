(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-container-container"],{"0871":function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"page"},[n("v-uni-view",{staticClass:"page-title h2"},[t._v("竖直排列")]),n("v-uni-canvas",{staticClass:"canvas",staticStyle:{height:"300upx"},attrs:{id:"canvas-container-vertical","canvas-id":"canvas-container-vertical"}}),n("v-uni-view",{staticClass:"page-title h2"},[t._v("水平排列")]),n("v-uni-canvas",{staticClass:"canvas",staticStyle:{height:"230upx"},attrs:{id:"canvas-container-horizontal","canvas-id":"canvas-container-horizontal"}}),n("v-uni-view",{staticClass:"page-title h2"},[t._v("绝对定位")]),n("v-uni-canvas",{staticClass:"canvas",staticStyle:{height:"120upx"},attrs:{id:"canvas-container-absolute","canvas-id":"canvas-container-absolute"}}),n("v-uni-view",{staticClass:"page-title h2"},[t._v("混排")]),n("v-uni-canvas",{staticClass:"canvas",staticStyle:{height:"430upx"},attrs:{id:"canvas-container-multiple-layout","canvas-id":"canvas-container-multiple-layout"}}),n("page-source-link")],1)},c=[]},"666b":function(t,e,n){t.exports=n.p+"static/img/demo.876992a7.png"},"70e9":function(t,e,n){"use strict";var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("8e6e"),n("ac6a"),n("456d");var i=a(n("bd86")),c=a(n("d109"));function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){(0,i.default)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var s={data:function(){return{}},onReady:function(){var t={left:10,top:10};new c.default(uni.createCanvasContext("canvas-container-vertical")).draw({type:"container",direction:"vertical",top:5,left:15,children:[o(o({type:"text"},t),{},{content:"文本文本文本"}),o(o({type:"image"},t),{},{width:100,height:100,src:n("666b")}),o(o({type:"rect"},t),{},{width:200,height:40,background:"#3f3"})]}),new c.default(uni.createCanvasContext("canvas-container-horizontal")).draw({type:"container",direction:"horizontal",top:5,left:15,children:[o(o({type:"text"},t),{},{content:"文本文本文本"}),o(o({type:"image"},t),{},{width:100,height:100,src:n("666b")}),o(o({type:"rect"},t),{},{width:200,height:40,background:"#3f3"})]}),new c.default(uni.createCanvasContext("canvas-container-absolute")).draw({type:"container",direction:"vertical",top:5,left:15,children:[{type:"rect",left:200,top:40,position:"absolute",width:200,height:40,background:"#3f3"},{type:"text",left:140,top:30,position:"absolute",content:"文本文本文本"},{type:"image",width:100,height:100,src:n("666b")}]});var e=o({type:"rect",width:30,height:30},t);new c.default(uni.createCanvasContext("canvas-container-multiple-layout")).draw({type:"container",children:[o(o({},e),{},{position:"absolute",left:600,background:"#eee"}),{type:"text",position:"absolute",content:"A",align:"center",left:615,top:12,fontSize:30},o(o({},e),{},{width:210,background:"#eee"}),o(o({},e),{},{width:240,background:"#eee"}),o(o({},e),{},{width:200,background:"#eee"}),o(o({},e),{},{width:170,background:"#eee"}),o(o({},e),{},{width:240,background:"#eee"}),{type:"container",direction:"horizontal",children:[o(o({},e),{},{background:"#e66"}),o(o({},e),{},{width:60,background:"#eee"}),o(o({},e),{},{background:"#6e6"}),o(o({},e),{},{width:60,background:"#eee"}),o(o({},e),{},{background:"#66e"}),o(o({},e),{},{width:60,background:"#eee"})]},o(o({},e),{},{width:200,background:"#eee"}),{type:"container",direction:"horizontal",children:[o(o({},e),{},{width:100,background:"#ee6"}),o(o({},e),{},{position:"absolute",left:600,background:"#ee6"}),{type:"text",position:"absolute",content:"A",align:"center",left:615,top:12,fontSize:30}]}]})}};e.default=s},"7a7a":function(t,e,n){"use strict";n.r(e);var a=n("0871"),i=n("fe2e");for(var c in i)"default"!==c&&function(t){n.d(e,t,(function(){return i[t]}))}(c);var r,o=n("f0c5"),s=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"b717a174",null,!1,a["a"],r);e["default"]=s.exports},fe2e:function(t,e,n){"use strict";n.r(e);var a=n("70e9"),i=n.n(a);for(var c in a)"default"!==c&&function(t){n.d(e,t,(function(){return a[t]}))}(c);e["default"]=i.a}}]);