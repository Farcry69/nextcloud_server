(()=>{"use strict";var e,r={84350:(e,r,t)=>{var n=t(42166),o=t(53334);const i=(0,t(35947).YK)().setApp("comments").detectUser().build(),a=new n.hY({id:"comments-unread",title(e){const r=e[0].attributes["comments-unread"];return r>=0?(0,o.zw)("comments","1 new comment","{unread} new comments",r,{unread:r}):(0,o.Tl)("comments","Comment")},displayName:()=>"",iconSvgInline:()=>'<svg xmlns="http://www.w3.org/2000/svg" id="mdi-comment-processing" viewBox="0 0 24 24"><path d="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9M17,11V9H15V11H17M13,11V9H11V11H13M9,11V9H7V11H9Z" /></svg>',enabled(e){const r=e[0].attributes["comments-unread"];return"number"==typeof r&&r>0},async exec(e){try{return window.OCA.Files.Sidebar.setActiveTab("comments"),await window.OCA.Files.Sidebar.open(e.path),null}catch(e){return i.error("Error while opening sidebar",{error:e}),!1}},inline:()=>!0,order:-140});(0,n.Gg)(a)}},t={};function n(e){var o=t[e];if(void 0!==o)return o.exports;var i=t[e]={id:e,loaded:!1,exports:{}};return r[e].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}n.m=r,e=[],n.O=(r,t,o,i)=>{if(!t){var a=1/0;for(c=0;c<e.length;c++){t=e[c][0],o=e[c][1],i=e[c][2];for(var s=!0,l=0;l<t.length;l++)(!1&i||a>=i)&&Object.keys(n.O).every((e=>n.O[e](t[l])))?t.splice(l--,1):(s=!1,i<a&&(a=i));if(s){e.splice(c--,1);var d=o();void 0!==d&&(r=d)}}return r}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[t,o,i]},n.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return n.d(r,{a:r}),r},n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.e=()=>Promise.resolve(),n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),n.j=3260,(()=>{n.b=document.baseURI||self.location.href;var e={3260:0};n.O.j=r=>0===e[r];var r=(r,t)=>{var o,i,a=t[0],s=t[1],l=t[2],d=0;if(a.some((r=>0!==e[r]))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(l)var c=l(n)}for(r&&r(t);d<a.length;d++)i=a[d],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(c)},t=self.webpackChunknextcloud=self.webpackChunknextcloud||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),n.nc=void 0;var o=n.O(void 0,[4208],(()=>n(84350)));o=n.O(o)})();
//# sourceMappingURL=comments-init.js.map?v=411343faba7e95856742