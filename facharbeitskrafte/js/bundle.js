(()=>{var t={3099:t=>{t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},1223:(t,e,r)=>{var n=r(5112),o=r(30),i=r(3070),c=n("unscopables"),a=Array.prototype;null==a[c]&&i.f(a,c,{configurable:!0,value:o(null)}),t.exports=function(t){a[c][t]=!0}},9670:(t,e,r)=>{var n=r(111);t.exports=function(t){if(!n(t))throw TypeError(String(t)+" is not an object");return t}},8533:(t,e,r)=>{"use strict";var n=r(2092).forEach,o=r(9341),i=r(9207),c=o("forEach"),a=i("forEach");t.exports=c&&a?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},1318:(t,e,r)=>{var n=r(5656),o=r(7466),i=r(1400),c=function(t){return function(e,r,c){var a,u=n(e),s=o(u.length),f=i(c,s);if(t&&r!=r){for(;s>f;)if((a=u[f++])!=a)return!0}else for(;s>f;f++)if((t||f in u)&&u[f]===r)return t||f||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},2092:(t,e,r)=>{var n=r(9974),o=r(8361),i=r(7908),c=r(7466),a=r(5417),u=[].push,s=function(t){var e=1==t,r=2==t,s=3==t,f=4==t,l=6==t,p=7==t,d=5==t||l;return function(v,m,y,h){for(var g,b,S=i(v),x=o(S),L=n(m,y,3),w=c(x.length),E=0,O=h||a,T=e?O(v,w):r||p?O(v,0):void 0;w>E;E++)if((d||E in x)&&(b=L(g=x[E],E,S),t))if(e)T[E]=b;else if(b)switch(t){case 3:return!0;case 5:return g;case 6:return E;case 2:u.call(T,g)}else switch(t){case 4:return!1;case 7:u.call(T,g)}return l?-1:s||f?f:T}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6),filterOut:s(7)}},9341:(t,e,r)=>{"use strict";var n=r(7293);t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){throw 1},1)}))}},9207:(t,e,r)=>{var n=r(9781),o=r(7293),i=r(6656),c=Object.defineProperty,a={},u=function(t){throw t};t.exports=function(t,e){if(i(a,t))return a[t];e||(e={});var r=[][t],s=!!i(e,"ACCESSORS")&&e.ACCESSORS,f=i(e,0)?e[0]:u,l=i(e,1)?e[1]:void 0;return a[t]=!!r&&!o((function(){if(s&&!n)return!0;var t={length:-1};s?c(t,1,{enumerable:!0,get:u}):t[1]=1,r.call(t,f,l)}))}},5417:(t,e,r)=>{var n=r(111),o=r(3157),i=r(5112)("species");t.exports=function(t,e){var r;return o(t)&&("function"!=typeof(r=t.constructor)||r!==Array&&!o(r.prototype)?n(r)&&null===(r=r[i])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},4326:t=>{var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},9920:(t,e,r)=>{var n=r(6656),o=r(3887),i=r(1236),c=r(3070);t.exports=function(t,e){for(var r=o(e),a=c.f,u=i.f,s=0;s<r.length;s++){var f=r[s];n(t,f)||a(t,f,u(e,f))}}},8880:(t,e,r)=>{var n=r(9781),o=r(3070),i=r(9114);t.exports=n?function(t,e,r){return o.f(t,e,i(1,r))}:function(t,e,r){return t[e]=r,t}},9114:t=>{t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},9781:(t,e,r)=>{var n=r(7293);t.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:(t,e,r)=>{var n=r(7854),o=r(111),i=n.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},8324:t=>{t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},8113:(t,e,r)=>{var n=r(5005);t.exports=n("navigator","userAgent")||""},748:t=>{t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:(t,e,r)=>{var n=r(7854),o=r(1236).f,i=r(8880),c=r(1320),a=r(3505),u=r(9920),s=r(4705);t.exports=function(t,e){var r,f,l,p,d,v=t.target,m=t.global,y=t.stat;if(r=m?n:y?n[v]||a(v,{}):(n[v]||{}).prototype)for(f in e){if(p=e[f],l=t.noTargetGet?(d=o(r,f))&&d.value:r[f],!s(m?f:v+(y?".":"#")+f,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;u(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),c(r,f,p,t)}}},7293:t=>{t.exports=function(t){try{return!!t()}catch(t){return!0}}},9974:(t,e,r)=>{var n=r(3099);t.exports=function(t,e,r){if(n(t),void 0===e)return t;switch(r){case 0:return function(){return t.call(e)};case 1:return function(r){return t.call(e,r)};case 2:return function(r,n){return t.call(e,r,n)};case 3:return function(r,n,o){return t.call(e,r,n,o)}}return function(){return t.apply(e,arguments)}}},5005:(t,e,r)=>{var n=r(857),o=r(7854),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(n[t])||i(o[t]):n[t]&&n[t][e]||o[t]&&o[t][e]}},7854:(t,e,r)=>{var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof r.g&&r.g)||function(){return this}()||Function("return this")()},6656:t=>{var e={}.hasOwnProperty;t.exports=function(t,r){return e.call(t,r)}},3501:t=>{t.exports={}},490:(t,e,r)=>{var n=r(5005);t.exports=n("document","documentElement")},4664:(t,e,r)=>{var n=r(9781),o=r(7293),i=r(317);t.exports=!n&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:(t,e,r)=>{var n=r(7293),o=r(4326),i="".split;t.exports=n((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},2788:(t,e,r)=>{var n=r(5465),o=Function.toString;"function"!=typeof n.inspectSource&&(n.inspectSource=function(t){return o.call(t)}),t.exports=n.inspectSource},9909:(t,e,r)=>{var n,o,i,c=r(8536),a=r(7854),u=r(111),s=r(8880),f=r(6656),l=r(5465),p=r(6200),d=r(3501),v=a.WeakMap;if(c){var m=l.state||(l.state=new v),y=m.get,h=m.has,g=m.set;n=function(t,e){return e.facade=t,g.call(m,t,e),e},o=function(t){return y.call(m,t)||{}},i=function(t){return h.call(m,t)}}else{var b=p("state");d[b]=!0,n=function(t,e){return e.facade=t,s(t,b,e),e},o=function(t){return f(t,b)?t[b]:{}},i=function(t){return f(t,b)}}t.exports={set:n,get:o,has:i,enforce:function(t){return i(t)?o(t):n(t,{})},getterFor:function(t){return function(e){var r;if(!u(e)||(r=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}}},3157:(t,e,r)=>{var n=r(4326);t.exports=Array.isArray||function(t){return"Array"==n(t)}},4705:(t,e,r)=>{var n=r(7293),o=/#|\.prototype\./,i=function(t,e){var r=a[c(t)];return r==s||r!=u&&("function"==typeof e?n(e):!!e)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},a=i.data={},u=i.NATIVE="N",s=i.POLYFILL="P";t.exports=i},111:t=>{t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},1913:t=>{t.exports=!1},133:(t,e,r)=>{var n=r(7293);t.exports=!!Object.getOwnPropertySymbols&&!n((function(){return!String(Symbol())}))},8536:(t,e,r)=>{var n=r(7854),o=r(2788),i=n.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},30:(t,e,r)=>{var n,o=r(9670),i=r(6048),c=r(748),a=r(3501),u=r(490),s=r(317),f=r(6200)("IE_PROTO"),l=function(){},p=function(t){return"<script>"+t+"<\/script>"},d=function(){try{n=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,e;d=n?function(t){t.write(p("")),t.close();var e=t.parentWindow.Object;return t=null,e}(n):((e=s("iframe")).style.display="none",u.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(p("document.F=Object")),t.close(),t.F);for(var r=c.length;r--;)delete d.prototype[c[r]];return d()};a[f]=!0,t.exports=Object.create||function(t,e){var r;return null!==t?(l.prototype=o(t),r=new l,l.prototype=null,r[f]=t):r=d(),void 0===e?r:i(r,e)}},6048:(t,e,r)=>{var n=r(9781),o=r(3070),i=r(9670),c=r(1956);t.exports=n?Object.defineProperties:function(t,e){i(t);for(var r,n=c(e),a=n.length,u=0;a>u;)o.f(t,r=n[u++],e[r]);return t}},3070:(t,e,r)=>{var n=r(9781),o=r(4664),i=r(9670),c=r(7593),a=Object.defineProperty;e.f=n?a:function(t,e,r){if(i(t),e=c(e,!0),i(r),o)try{return a(t,e,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[e]=r.value),t}},1236:(t,e,r)=>{var n=r(9781),o=r(5296),i=r(9114),c=r(5656),a=r(7593),u=r(6656),s=r(4664),f=Object.getOwnPropertyDescriptor;e.f=n?f:function(t,e){if(t=c(t),e=a(e,!0),s)try{return f(t,e)}catch(t){}if(u(t,e))return i(!o.f.call(t,e),t[e])}},8006:(t,e,r)=>{var n=r(6324),o=r(748).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,o)}},5181:(t,e)=>{e.f=Object.getOwnPropertySymbols},6324:(t,e,r)=>{var n=r(6656),o=r(5656),i=r(1318).indexOf,c=r(3501);t.exports=function(t,e){var r,a=o(t),u=0,s=[];for(r in a)!n(c,r)&&n(a,r)&&s.push(r);for(;e.length>u;)n(a,r=e[u++])&&(~i(s,r)||s.push(r));return s}},1956:(t,e,r)=>{var n=r(6324),o=r(748);t.exports=Object.keys||function(t){return n(t,o)}},5296:(t,e)=>{"use strict";var r={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,o=n&&!r.call({1:2},1);e.f=o?function(t){var e=n(this,t);return!!e&&e.enumerable}:r},3887:(t,e,r)=>{var n=r(5005),o=r(8006),i=r(5181),c=r(9670);t.exports=n("Reflect","ownKeys")||function(t){var e=o.f(c(t)),r=i.f;return r?e.concat(r(t)):e}},857:(t,e,r)=>{var n=r(7854);t.exports=n},1320:(t,e,r)=>{var n=r(7854),o=r(8880),i=r(6656),c=r(3505),a=r(2788),u=r(9909),s=u.get,f=u.enforce,l=String(String).split("String");(t.exports=function(t,e,r,a){var u,s=!!a&&!!a.unsafe,p=!!a&&!!a.enumerable,d=!!a&&!!a.noTargetGet;"function"==typeof r&&("string"!=typeof e||i(r,"name")||o(r,"name",e),(u=f(r)).source||(u.source=l.join("string"==typeof e?e:""))),t!==n?(s?!d&&t[e]&&(p=!0):delete t[e],p?t[e]=r:o(t,e,r)):p?t[e]=r:c(e,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&s(this).source||a(this)}))},4488:t=>{t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},3505:(t,e,r)=>{var n=r(7854),o=r(8880);t.exports=function(t,e){try{o(n,t,e)}catch(r){n[t]=e}return e}},6200:(t,e,r)=>{var n=r(2309),o=r(9711),i=n("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5465:(t,e,r)=>{var n=r(7854),o=r(3505),i="__core-js_shared__",c=n[i]||o(i,{});t.exports=c},2309:(t,e,r)=>{var n=r(1913),o=r(5465);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.8.1",mode:n?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},1400:(t,e,r)=>{var n=r(9958),o=Math.max,i=Math.min;t.exports=function(t,e){var r=n(t);return r<0?o(r+e,0):i(r,e)}},5656:(t,e,r)=>{var n=r(8361),o=r(4488);t.exports=function(t){return n(o(t))}},9958:t=>{var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},7466:(t,e,r)=>{var n=r(9958),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},7908:(t,e,r)=>{var n=r(4488);t.exports=function(t){return Object(n(t))}},7593:(t,e,r)=>{var n=r(111);t.exports=function(t,e){if(!n(t))return t;var r,o;if(e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!n(o=r.call(t)))return o;if(!e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},9711:t=>{var e=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+r).toString(36)}},3307:(t,e,r)=>{var n=r(133);t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5112:(t,e,r)=>{var n=r(7854),o=r(2309),i=r(6656),c=r(9711),a=r(133),u=r(3307),s=o("wks"),f=n.Symbol,l=u?f:f&&f.withoutSetter||c;t.exports=function(t){return i(s,t)||(a&&i(f,t)?s[t]=f[t]:s[t]=l("Symbol."+t)),s[t]}},9826:(t,e,r)=>{"use strict";var n=r(2109),o=r(2092).find,i=r(1223),c=r(9207),a="find",u=!0,s=c(a);a in[]&&Array(1).find((function(){u=!1})),n({target:"Array",proto:!0,forced:u||!s},{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i(a)},9554:(t,e,r)=>{"use strict";var n=r(2109),o=r(8533);n({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},4747:(t,e,r)=>{var n=r(7854),o=r(8324),i=r(8533),c=r(8880);for(var a in o){var u=n[a],s=u&&u.prototype;if(s&&s.forEach!==i)try{c(s,"forEach",i)}catch(t){s.forEach=i}}},2564:(t,e,r)=>{var n=r(2109),o=r(7854),i=r(8113),c=[].slice,a=function(t){return function(e,r){var n=arguments.length>2,o=n?c.call(arguments,2):void 0;return t(n?function(){("function"==typeof e?e:Function(e)).apply(this,o)}:e,r)}};n({global:!0,bind:!0,forced:/MSIE .\./.test(i)},{setTimeout:a(o.setTimeout),setInterval:a(o.setInterval)})}},e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={exports:{}};return t[n](o,o.exports,r),o.exports}r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{"use strict";function t(t){$(t).validate({rules:{phone:"required"},messages:{phone:{required:"Please, enter your phone"}}})}function e(t,e,r){var n=document.querySelector(t),o=n.querySelector(e);document.querySelector(r).addEventListener("click",(function(t){t.preventDefault(),i()}));var i=function(){n.classList.add("show"),document.body.style.overflow="hidden"},c=function(){n.classList.remove("show"),document.body.style.overflow=""};o.addEventListener("click",(function(){c()})),n.addEventListener("click",(function(t){t.target===n&&c()})),document.addEventListener("keydown",(function(t){"Escape"===t.code&&c()}))}function n(t){document.querySelectorAll("[href='".concat(t,"']")).forEach((function(t){var e=t.getAttribute("href"),r=document.querySelector("".concat(e));t.addEventListener("click",(function(t){t.preventDefault(),r.scrollIntoView({block:"end",inline:"nearest",behavior:"smooth"})}))}))}r(9826),r(2564),r(9554),r(4747),window.addEventListener("DOMContentLoaded",(function(){var r,o,i,c,a,u=document.querySelector(".promo-video");u.play(),u.muted=!0,localStorage.getItem("status")||(setTimeout((function(){return function(){var t=document.querySelector(".first-pop");function e(){t.classList.remove("first-pop_active")}t.classList.add("first-pop_active"),t.querySelectorAll(".first-pop__btn").forEach((function(t){t.addEventListener("click",(function(t){"true"==t.target.getAttribute("data-agree")?(localStorage.setItem("status","agree"),e()):e()}))}))}()}),2e3),console.log("yesss")),t(".main form"),t(".footer form"),t(".modal-form"),e(".modal",".modal-cross",".promo-contacts__callback"),e(".modal",".modal-cross",".footer .promo-contacts__callback"),e(".modal-policy__wrapper",".modal-cross",".footer .modal-policy"),function(){function t(t){document.querySelector(t).classList.remove("show"),document.body.style.overflow=""}$("form").submit((function(e){if(e.preventDefault(),$(this).valid())return $.ajax({type:"POST",url:"mailer/smart.php",data:$(this).serialize()}).done((function(){$(this).find("input").val(""),$(".modal-thanks").addClass("show");try{t(".modal")}catch(t){console.log("error")}setTimeout((function(){t(".modal-thanks")}),3e3),$("form").trigger("reset")})),!1}));var e=document.querySelector(".modal-thanks");e.addEventListener("click",(function(r){r.target!=e&&""!=r.target.getAttribute("data-close")||t(".modal-thanks")}))}(),function(t,e,r){var n=document.querySelector(t),o=document.querySelector(e),i=document.querySelectorAll(r);function c(){o.classList.remove("show"),document.body.style.overflow="",n.classList.remove("promo-humb_active")}n.addEventListener("click",(function(t){n.classList.contains("promo-humb_active")?c():(o.classList.add("show"),document.body.style.overflow="hidden",n.classList.add("promo-humb_active"))})),o.addEventListener("click",(function(t){t.target==o&&c()})),document.addEventListener("keydown",(function(t){"Escape"===t.code&&c()})),i.forEach((function(t){t.addEventListener("click",(function(){c(),document.documentElement.clientWidth<993&&(i.forEach((function(t){t.classList.remove("menu-item_active")})),t.classList.add("menu-item_active"))}))}))}(".promo-humb",".menu-wrapper",".menu-item"),r=document.querySelector(".promo-video__play"),o=document.querySelector(".promo-video"),i=document.querySelector(".promo .container"),c=0,r.addEventListener("click",(function(){0==c&&(o.currentTime=0),o.play(),o.muted=!1,r.classList.add("hide"),c=1,r.classList.contains("hide")&&i.addEventListener("click",(function(){o.pause(),r.classList.remove("hide"),c=1,o.muted=!0}))})),a=document.querySelector(".promo-header"),window.addEventListener("scroll",(function(){window.pageYOffset>10?a.style.background="#0e0d17":a.style.background=""})),n("#header"),n("#main"),n("#info"),n("#footer")}))})()})();
//# sourceMappingURL=bundle.js.map