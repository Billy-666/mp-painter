(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-image-image"],{"2e60":function(t,e,n){e=t.exports=n("24fb")(!1),e.push([t.i,".code[data-v-55096793]{font-family:monospace;text-decoration:underline}.item[data-v-55096793]{height:%?80?%}",""])},"30e7":function(t,e,n){"use strict";n.r(e);var i=n("4c98"),o=n("b77d");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("4799");var c,r=n("f0c5"),s=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"55096793",null,!1,i["a"],c);e["default"]=s.exports},4799:function(t,e,n){"use strict";var i=n("bce4"),o=n.n(i);o.a},"4c98":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"page"},[n("v-uni-view",{staticClass:"page-title h2"},[t._v("图片地址")]),n("v-uni-canvas",{staticClass:"canvas",staticStyle:{height:"880rpx"},attrs:{id:"canvas-image","canvas-id":"canvas-image"}}),n("v-uni-view",{staticClass:"page-title h2"},[t._v("图片 - 自适应(objectFit)")]),n("v-uni-picker",{attrs:{mode:"multiSelector",value:[1,1],range:[["left","center","right"],["top","center","bottom"]]},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.pickerChange.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"code"},[t._v("object-position: "+t._s(t.horizontalPosition)+", "+t._s(t.verticalPosition))])],1),n("v-uni-canvas",{staticClass:"canvas",staticStyle:{height:"720rpx"},attrs:{id:"canvas-image-contain","canvas-id":"canvas-image-contain"}}),n("page-source-link")],1)},a=[]},"666b":function(t,e,n){t.exports=n.p+"static/img/demo.876992a7.png"},b77d:function(t,e,n){"use strict";n.r(e);var i=n("f0b4"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},bce4:function(t,e,n){var i=n("2e60");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("2e33a4b0",i,!0,{sourceMap:!1,shadowMode:!1})},f0b4:function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("8e6e"),n("ac6a"),n("456d");var o=i(n("bd86")),a=i(n("d109")),c=i(n("666b"));function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){(0,o.default)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var u="../../static/demo.png",p={type:"image",top:10,width:200,height:150,src:u},l={data:function(){return{horizontalPosition:"center",verticalPosition:"center"}},onReady:function(){new a.default(uni.createCanvasContext("canvas-image")).draw({type:"container",top:5,left:15,children:[{type:"text",top:20,content:"网络路径"},s(s({},p),{},{src:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/doc/uniapp4@2x.png"}),{type:"text",top:20,content:"本地相对路径"},s(s({},p),{},{src:"../../static/demo.png"}),{type:"text",top:20,content:"本地绝对路径"},s(s({},p),{},{src:"/static/demo.png"}),{type:"text",top:20,content:"base64 (谨慎使用，小程序预览中无法显示)"},s(s({},p),{},{src:c.default})]}),this.updateSecondCanvas()},methods:{pickerChange:function(t){var e=t.detail;this.horizontalPosition=["left","center","right"][e.value[0]],this.verticalPosition=["top","center","bottom"][e.value[1]],this.updateSecondCanvas()},updateSecondCanvas:function(){new a.default(uni.createCanvasContext("canvas-image-contain")).draw({type:"container",top:5,left:15,children:[{type:"rect",position:"absolute",top:0,left:0,height:720,width:720,background:"#fff"},{type:"text",top:20,content:"objectFit: fill (default)"},s(s({},p),{},{objectPosition:[this.horizontalPosition,this.verticalPosition]}),{type:"text",top:20,content:"objectFit: contain"},s(s({},p),{},{objectFit:"contain",objectPosition:[this.horizontalPosition,this.verticalPosition]}),{type:"text",top:20,content:"objectFit: cover"},s(s({},p),{},{objectFit:"cover",objectPosition:[this.horizontalPosition,this.verticalPosition]})]})}}};e.default=l}}]);