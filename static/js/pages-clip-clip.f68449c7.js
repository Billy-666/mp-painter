(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-clip-clip"],{"14b9":function(t,e,a){var n=a("5ca1");n(n.P,"String",{repeat:a("9744")})},3147:function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("14b9");var i=n(a("d109")),c={onReady:function(){new i.default(uni.createCanvasContext("canvas-clip-base")).draw({type:"clip",path:{type:"rounded-rect",width:500,height:280,borderRadius:140},content:{type:"text-block",width:500,fontSize:40,color:{type:"liner-gradient",x1:0,x2:500,y1:0,y2:280,colorStops:[{offset:0,color:"red"},{offset:.2,color:"orange"},{offset:.6,color:"green"},{offset:.8,color:"blue"},{offset:1,color:"purple"}]},content:"示例文本示例文本示例文本示例文本".repeat(10)}}),new i.default(uni.createCanvasContext("canvas-clip-image")).draw({type:"clip",path:{type:"rounded-rect",width:200,height:200,borderRadius:100},content:{type:"image",width:200,height:200,src:"../../static/demo.png"}})}};e.default=c},8562:function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return c})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"page"},[a("v-uni-view",{staticClass:"page-title h2"},[t._v("裁剪")]),a("v-uni-canvas",{staticClass:"canvas",staticStyle:{height:"300upx"},attrs:{id:"canvas-clip-base","canvas-id":"canvas-clip-base"}}),a("v-uni-view",{staticClass:"page-title h2"},[t._v("裁剪图片")]),a("v-uni-canvas",{staticClass:"canvas",staticStyle:{height:"300upx"},attrs:{id:"canvas-clip-image","canvas-id":"canvas-clip-image"}}),a("page-source-link")],1)},c=[]},"91b5":function(t,e,a){"use strict";a.r(e);var n=a("3147"),i=a.n(n);for(var c in n)"default"!==c&&function(t){a.d(e,t,(function(){return n[t]}))}(c);e["default"]=i.a},9744:function(t,e,a){"use strict";var n=a("4588"),i=a("be13");t.exports=function(t){var e=String(i(this)),a="",c=n(t);if(c<0||c==1/0)throw RangeError("Count can't be negative");for(;c>0;(c>>>=1)&&(e+=e))1&c&&(a+=e);return a}},abf7:function(t,e,a){"use strict";a.r(e);var n=a("8562"),i=a("91b5");for(var c in i)"default"!==c&&function(t){a.d(e,t,(function(){return i[t]}))}(c);var r,s=a("f0c5"),o=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],r);e["default"]=o.exports}}]);