/*!
 * js-notifier with demo extension for SoSIE
 * 
 * @version 1.3.0
 * 
 * @licence MIT
 * @author CodeX <https://codex.so>
 * @author SoSIE <https://sosie.sos-productions.com>
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.notifier=t():e.notifier=t()}(window,function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=0)}([function(e,t,n){"use strict";n(1),e.exports=function(){var e=n(6),t=n(7),o="cdx-notify--bounce-in",r={};return{show:function(n){if(n.message){var i=function(t){var n=void 0;return Object.prototype.hasOwnProperty.call(r,t)?n=r[t]:(n=e.getWrapper(t.split(",")),r[t]=n),document.body.appendChild(n),n}(n.layout||"bottom,left"),a=null,c=n.time||8e3;switch(n.type){case"confirm":a=e.confirm(n);break;case"prompt":a=e.prompt(n);break;case"demo":return t.demo(n);default:a=e.alert(n),window.setTimeout(function(){a.remove()},c)}i.appendChild(a),a.classList.add(o)}}}}()},function(e,t,n){var o=n(2);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(4)(o,r);o.locals&&(e.exports=o.locals)},function(e,t,n){(e.exports=n(3)(!1)).push([e.i,'.cdx-notify--error{background:#fffbfb!important}.cdx-notify--error::before{background:#fb5d5d!important}.cdx-notify__input{max-width:130px;padding:5px 10px;background:#f7f7f7;border:0;border-radius:3px;font-size:13px;color:#656b7c;outline:0}.cdx-notify__input:-ms-input-placeholder{color:#656b7c}.cdx-notify__input::placeholder{color:#656b7c}.cdx-notify__input:focus:-ms-input-placeholder{color:rgba(101,107,124,.3)}.cdx-notify__input:focus::placeholder{color:rgba(101,107,124,.3)}.cdx-notify__button{border:none;border-radius:3px;font-size:13px;padding:5px 10px;cursor:pointer}.cdx-notify__button:last-child{margin-left:10px}.cdx-notify__button--cancel{background:#f2f5f7;box-shadow:0 2px 1px 0 rgba(16,19,29,0);color:#656b7c}.cdx-notify__button--cancel:hover{background:#eee}.cdx-notify__button--confirm{background:#34c992;box-shadow:0 1px 1px 0 rgba(18,49,35,.05);color:#fff}.cdx-notify__button--confirm:hover{background:#33b082}.cdx-notify__btns-wrapper{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;margin-top:5px}.cdx-notify__cross{position:absolute;top:5px;right:5px;width:10px;height:10px;padding:5px;opacity:.54;cursor:pointer}.cdx-notify__cross::after,.cdx-notify__cross::before{content:\'\';position:absolute;left:9px;top:5px;height:12px;width:2px;background:#575d67}.cdx-notify__cross::before{transform:rotate(-45deg)}.cdx-notify__cross::after{transform:rotate(45deg)}.cdx-notify__cross:hover{opacity:1}.cdx-notifies{z-index:2;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif}.cdx-notifies-middle{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%)}.cdx-notifies-bottom{position:fixed;bottom:20px}.cdx-notifies-left{position:fixed;left:20px}.cdx-notifies-top{position:fixed;top:20px}.cdx-notifies-right{position:fixed;right:20px}.cdx-notify{position:relative;width:220px;margin-top:15px;padding:13px 16px;background:#fff;box-shadow:0 11px 17px 0 rgba(23,32,61,.13);border-radius:5px;font-size:14px;line-height:1.4em;word-wrap:break-word}.cdx-notify::before{content:\'\';position:absolute;display:block;top:0;left:0;width:3px;height:calc(100% - 6px);margin:3px;border-radius:5px;background:0 0}@keyframes bounceIn{0%{opacity:0;transform:scale(.3)}50%{opacity:1;transform:scale(1.05)}70%{transform:scale(.9)}100%{transform:scale(1)}}.cdx-notify--bounce-in{animation-name:bounceIn;animation-duration:.6s;animation-iteration-count:1}.cdx-notify--success{background:#fafffe!important}.cdx-notify--success::before{background:#41ffb1!important}.cdx-notify--sosie-panel{background:#fafffe!important;width:640px;height:480px}.cdx-notify--sosie-panel-with-btn{background:#fafffe!important;width:640px;height:540px}.cdx-notify--sosie-panel-embed-demo{background:#fafffe!important;width:450px;height:243px}.button__embed-demo{display:inline-block;background:#2da0e9;color:#fff;border-radius:5px;font-size:13px;padding:5px 10px;cursor:pointer}.button__embed-demo:hover{background:#1689d2}',""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var r=(a=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"});return[n].concat(i).concat([r]).join("\n")}var a;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<e.length;r++){var a=e[r];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){var o,r,i={},a=(o=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=o.apply(this,arguments)),r}),c=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var n=function(e){return document.querySelector(e)}.call(this,e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),d=null,s=0,l=[],u=n(5);function f(e,t){for(var n=0;n<e.length;n++){var o=e[n],r=i[o.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](o.parts[a]);for(;a<o.parts.length;a++)r.parts.push(y(o.parts[a],t))}else{var c=[];for(a=0;a<o.parts.length;a++)c.push(y(o.parts[a],t));i[o.id]={id:o.id,refs:1,parts:c}}}}function p(e,t){for(var n=[],o={},r=0;r<e.length;r++){var i=e[r],a=t.base?i[0]+t.base:i[0],c={css:i[1],media:i[2],sourceMap:i[3]};o[a]?o[a].parts.push(c):n.push(o[a]={id:a,parts:[c]})}return n}function m(e,t){var n=c(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=l[l.length-1];if("top"===e.insertAt)o?o.nextSibling?n.insertBefore(t,o.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),l.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=c(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,r)}}function b(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=l.indexOf(e);t>=0&&l.splice(t,1)}function h(e){var t=document.createElement("style");return void 0===e.attrs.type&&(e.attrs.type="text/css"),x(t,e.attrs),m(e,t),t}function x(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function y(e,t){var n,o,r,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var a=s++;n=d||(d=h(t)),o=_.bind(null,n,a,!1),r=_.bind(null,n,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",x(t,e.attrs),m(e,t),t}(t),o=function(e,t,n){var o=n.css,r=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&r;(t.convertToAbsoluteUrls||i)&&(o=u(o));r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([o],{type:"text/css"}),c=e.href;e.href=URL.createObjectURL(a),c&&URL.revokeObjectURL(c)}.bind(null,n,t),r=function(){b(n),n.href&&URL.revokeObjectURL(n.href)}):(n=h(t),o=function(e,t){var n=t.css,o=t.media;o&&e.setAttribute("media",o);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),r=function(){b(n)});return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=p(e,t);return f(n,t),function(e){for(var o=[],r=0;r<n.length;r++){var a=n[r];(c=i[a.id]).refs--,o.push(c)}e&&f(p(e,t),t);for(r=0;r<o.length;r++){var c;if(0===(c=o[r]).refs){for(var d=0;d<c.parts.length;d++)c.parts[d]();delete i[c.id]}}}};var v,g=(v=[],function(e,t){return v[e]=t,v.filter(Boolean).join("\n")});function _(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=g(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,o=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var r,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(r=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:o+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},function(e,t,n){"use strict";var o,r,i,a,c,d,s,l,u;e.exports=(o="cdx-notifies",r="cdx-notify",i="cdx-notify__cross",a="cdx-notify__button--confirm",c="cdx-notify__button--cancel",d="cdx-notify__input",s="cdx-notify__button",l="cdx-notify__btns-wrapper",{alert:u=function(e){var t=document.createElement("DIV"),n=document.createElement("DIV"),o=e.message,a=e.style;return t.classList.add(r),a&&t.classList.add(r+"--"+a),t.innerHTML=o,n.classList.add(i),n.addEventListener("click",t.remove.bind(t)),t.appendChild(n),t},confirm:function(e){var t=u(e),n=document.createElement("div"),o=document.createElement("button"),r=document.createElement("button"),d=t.querySelector("."+i),f=e.cancelHandler,p=e.okHandler;return n.classList.add(l),o.innerHTML=e.okText||"Confirm",r.innerHTML=e.cancelText||"Cancel",o.classList.add(s),r.classList.add(s),o.classList.add(a),r.classList.add(c),f&&"function"==typeof f&&(r.addEventListener("click",f),d.addEventListener("click",f)),p&&"function"==typeof p&&o.addEventListener("click",p),o.addEventListener("click",t.remove.bind(t)),r.addEventListener("click",t.remove.bind(t)),n.appendChild(o),n.appendChild(r),t.appendChild(n),t},prompt:function(e){var t=u(e),n=document.createElement("div"),o=document.createElement("button"),r=document.createElement("input"),c=t.querySelector("."+i),f=e.cancelHandler,p=e.okHandler;return n.classList.add(l),o.innerHTML=e.okText||"Ok",o.classList.add(s),o.classList.add(a),r.classList.add(d),e.placeholder&&r.setAttribute("placeholder",e.placeholder),e.default&&(r.value=e.default),e.inputType&&(r.type=e.inputType),f&&"function"==typeof f&&c.addEventListener("click",f),p&&"function"==typeof p&&o.addEventListener("click",function(){p(r.value)}),o.addEventListener("click",t.remove.bind(t)),n.appendChild(r),n.appendChild(o),t.appendChild(n),t},getWrapper:function(e){var t=document.createElement("DIV");for(var n in t.classList.add(o),e)t.classList.add("cdx-notifies-"+e[n]);return t}})},function(e,t,n){"use strict";e.exports=function(){function e(e,t,n){var o,r=document.createElement(e);Array.isArray(t)?(o=r.classList).add.apply(o,function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(t)):t&&r.classList.add(t);for(var i in n)"disabled"!=i&&"readonly"!=i||!n[i]?r.setAttribute(i,n[i]):r.setAttribute(i,i);return r}return{demo:function(t){var n=t.id,o=e("div",null,null);o.appendChild(document.createTextNode(t.title)),o.appendChild(e("hr",null,null)),o.appendChild(document.createTextNode(t.message)),o.appendChild(e("br",null,null));var r=e("input",null,{id:"demo-"+n,title:"Url "+n,type:"text",style:"width:27em",size:"300",value:t.url,placeholder:t.placeholder});o.appendChild(r),o.appendChild(e("br",null,null)),o.appendChild(document.createTextNode("Provide a text for the caption (optional)"));var i=e("input",null,{id:"demo-"+n+"__caption",title:"Caption "+n,type:"text",style:"width:27em",size:"300",value:t.caption||"",placeholder:"your caption text"});o.appendChild(i),o.appendChild(document.createTextNode("Inject mode:"));var a,c,d=e("select",null,{id:"mySelect",style:"margin : 2 5 2 5;"}),s=["inline","block"];for(a=0;a<s.length;a++)(c=document.createElement("option")).value=s[a],c.text=s[a],0==a&&(c.setAttribute("selected","selected"),r.setAttribute("data-mode",s[a])),d.appendChild(c);function l(e,t,n){var o,r='<input type="radio" id="'+e+"__"+n+'" name="'+e+'" value="'+n+'"';return t&&(r+=' checked="checked"'),r+="/>",(o=document.createElement("div")).innerHTML=r,o.firstChild}o.appendChild(d),o.appendChild(document.createTextNode(" Is it a custom type ? ")),o.appendChild(l(n+"-custom",!1,"true")),o.appendChild(document.createTextNode(" YES ")),o.appendChild(l(n+"-custom",!0,"false")),o.appendChild(document.createTextNode(" NO ")),r.setAttribute("data-custom","false"),o.appendChild(e("br",null,null)),o.appendChild(document.createTextNode(" -- OR click on one link example -- ")),o.appendChild(e("br",null,null)),t.samples.forEach(function(t){var r=e("a","sample-demo-"+n,null);for(var i in t.type&&delete t.type,t.interactive=!1,t)r.setAttribute("data-"+i,t[i]);r.innerHTML='<span class="button__'+n+'-demo">'+t.text+"</span>",o.appendChild(r)}),notifier.show({message:o.innerHTML,type:"confirm",okText:"Ok",cancelText:"Cancel",okHandler:function(){r=document.getElementById("demo-"+n),i=document.getElementById("demo-"+n+"__caption");var e={};[].forEach.call(r.attributes,function(t){if(/^data-/.test(t.name)){var n=t.name.substr(5).replace(/-(.)/g,function(e,t){return t.toUpperCase()});e[n]=t.value}}),e.url=r.value,e.title=i.value,e.url?t.okHandler(e):t.emptyHandler()},cancelHandler:function(){t.cancelHandler()},layout:t.layout||"middle",style:"sosie-panel-"+n+"-demo"}),[].forEach.call(document.querySelectorAll("a.sample-demo-"+n),function(e){e.addEventListener("click",function(e){r=document.getElementById("demo-"+n);var t=e.target.parentElement.dataset;return r.value=t.url,Object.keys(t).forEach(function(e){var n="data-"+e.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()});r.setAttribute(n,t[e])}),function(e,t){for(a=0;a<e.options.length;a++)if(e.options[a].text==t)return void(e.options[a].selected=!0)}(document.getElementById("mySelect"),t.mode),document.getElementById(n+"-custom__"+t.custom).checked=!0,document.getElementById("demo-"+n+"__caption").value=t.title,!1})}),document.getElementById("mySelect").addEventListener("change",function(e){r.setAttribute("data-mode",this.options[this.selectedIndex].value)}),["true","false"].forEach(function(e){document.getElementById(n+"-custom__"+e).addEventListener("click",function(){r.setAttribute("data-custom",this.value)})})}}}()}])});