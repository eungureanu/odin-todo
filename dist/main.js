(()=>{"use strict";var e={735:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([e.id,"body {\n    margin: 0;\n    padding: 0;\n    font-family: Arial, sans-serif;\n    display: flex;\n    flex-direction: column;\n}\n\n.page-body {\n    display: flex;\n}\n\n.header {\n    background-color: #333;\n    color: white;\n    padding: 20px;\n    text-align: center;\n}\n\n.sidebar {\n    background-color: #f5f5f5;\n    width: 200px;\n    padding: 20px;\n}\n\n.content {\n    flex: 1;\n    padding: 20px;\n}\n\n.item-card {\n    background-color: #fff;\n    border: 1px solid #ddd;\n    padding: 10px;\n    margin: 10px 0;\n    border-radius: 5px;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n\n.addTask-button {\n    margin: 30px 20px;\n    width: 50px;\n    height: 50px;\n    background-color: #f175e0;\n    border-radius: 50%;\n    text-align: center;\n    color: white;\n    font-size: 32px;\n    cursor: pointer;\n    box-shadow: 0 2px 4px rgba(241, 117, 224, 0.2);\n    border-color: #ab339b;\n}\n\n.modal {\n    border-style: solid;\n    border-width: 1px;\n    background-color: white;\n    z-index: 10;\n    position: fixed;\n    top: 20%;\n    left: 20%;\n    visibility: hidden;\n}\n\n.modal.active {\n    visibility: visible;\n}\n\n#overlay {\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    opacity: 0;\n    background-color: rgb(0, 0, 0, .5);\n    pointer-events: none;\n}\n\n#overlay.active {\n    pointer-events: all;\n    opacity: 1;\n}",""]);const c=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=t(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var v=o(f,r);r.byIndex=c,n.splice(c,0,{identifier:u,updater:v,references:1})}i.push(u)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=r(e,o),d=0;d<a.length;d++){var l=t(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0;var r={};(()=>{t.d(r,{fy:()=>g,JV:()=>x});var e=t(379),n=t.n(e),o=t(795),a=t.n(o),i=t(569),c=t.n(i),s=t(565),d=t.n(s),l=t(216),u=t.n(l),p=t(589),f=t.n(p),v=t(735),m={};m.styleTagTransform=f(),m.setAttributes=d(),m.insert=c().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=u(),n()(v.Z,m),v.Z&&v.Z.locals&&v.Z.locals;const h={activeModal:document.getElementById("add-task-modal"),activeOverlay:document.getElementById("overlay"),addTask:document.getElementById("add-task-button"),submitTask:document.getElementById("new-task"),cancel:document.getElementById("cancel")};h.addTask.addEventListener("click",(function(){h.activeModal.classList.add("active"),h.activeOverlay.classList.add("active")})),h.cancel.addEventListener("click",(function(){h.activeModal.classList.remove("active"),h.activeOverlay.classList.remove("active")})),h.submitTask.addEventListener("click",x),console.log(g);class y{constructor(e,n,t,r,o,a){this.id=e,this.title=n,this.description=t,this.duedate=r,this.priority=o,this.category="To Do",this.isDone=!1}}let g=[{title:"Finish Project Proposal",description:"Complete the project proposal and submit it to the supervisor.",duedate:"2023-08-15",priority:"High",category:"To Do",isDone:!1},{title:"Buy Groceries",description:"Purchase vegetables, fruits, and other essentials for the week.",duedate:"2023-08-10",priority:"Medium",category:"To Do",isDone:!1}],b=1;function x(e,n,t,r,o){return g.push(new y(b,e,n,t,r,o)),b++,console.log(g),g}document.dispatchEvent(new Event("allTodosInitialized"))})()})();