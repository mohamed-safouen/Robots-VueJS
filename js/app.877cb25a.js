(function(){"use strict";var t={2966:function(t,e,r){var n=r(9242),o=r(3396);const s={class:"container pt-5 mx-auto items-center gap-10 flex-col flex"};function a(t,e,r,n,a,c){const i=(0,o.up)("HeaderItem"),l=(0,o.up)("CardList");return(0,o.wg)(),(0,o.iD)("div",s,[(0,o.Wm)(i),(0,o.Wm)(l)])}const c=t=>((0,o.dD)("data-v-f1833a3c"),t=t(),(0,o.Cn)(),t),i=c((()=>(0,o._)("h1",{class:"text-7xl font-bold"}," All Robots ",-1)));function l(t,e,r,s,a,c){return(0,o.wg)(),(0,o.iD)(o.HY,null,[i,(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":e[0]||(e[0]=e=>t.message=e),class:"bg-neutral-300 px-3 py-2",type:"search",placeholder:"search robots"},null,512),[[n.nr,t.message]])],64)}var u={},f=r(89);const d=(0,f.Z)(u,[["render",l],["__scopeId","data-v-f1833a3c"]]);var p=d,h=r(7139);const v={class:"mt-6 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-4"},g={class:"sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75"},m=["src","alt"],b={class:"mt-6 text-sm text-gray-500"},w={class:"text-base font-semibold text-gray-900"};function x(t,e,r,n,s,a){return(0,o.wg)(),(0,o.iD)("div",v,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.filteredRobots,(t=>((0,o.wg)(),(0,o.iD)("div",{key:t.name,class:"group relative bg-white relative w-full overflow-hidden rounded-lg p-2"},[(0,o._)("div",g,[(0,o._)("img",{src:`https://robohash.org/${t.id}?200x200`,alt:t.name,class:"h-full w-full object-cover object-center"},null,8,m)]),(0,o._)("h3",b,(0,h.zw)(t.name),1),(0,o._)("p",w,(0,h.zw)(t.email),1)])))),128))])}var y={name:"CardList",data(){return{AllRobots:[]}},mounted(){this.fetchUserData()},methods:{fetchUserData(){fetch("https://jsonplaceholder.typicode.com/users").then((t=>{if(!t.ok)throw new Error("Network response was not ok");return t.json()})).then((t=>{this.AllRobots=t})).catch((t=>{console.error("Error fetching user data",t)}))}},computed:{filteredRobots(){return this.AllRobots.filter((t=>t.name.toLowerCase().includes("")))}}};const O=(0,f.Z)(y,[["render",x]]);var j=O,_={name:"App",components:{HeaderItem:p,CardList:j}};const k=(0,f.Z)(_,[["render",a]]);var D=k;(0,n.ri)(D).mount("#app")}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var s=e[n]={exports:{}};return t[n].call(s.exports,s,s.exports,r),s.exports}r.m=t,function(){var t=[];r.O=function(e,n,o,s){if(!n){var a=1/0;for(u=0;u<t.length;u++){n=t[u][0],o=t[u][1],s=t[u][2];for(var c=!0,i=0;i<n.length;i++)(!1&s||a>=s)&&Object.keys(r.O).every((function(t){return r.O[t](n[i])}))?n.splice(i--,1):(c=!1,s<a&&(a=s));if(c){t.splice(u--,1);var l=o();void 0!==l&&(e=l)}}return e}s=s||0;for(var u=t.length;u>0&&t[u-1][2]>s;u--)t[u]=t[u-1];t[u]=[n,o,s]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};r.O.j=function(e){return 0===t[e]};var e=function(e,n){var o,s,a=n[0],c=n[1],i=n[2],l=0;if(a.some((function(e){return 0!==t[e]}))){for(o in c)r.o(c,o)&&(r.m[o]=c[o]);if(i)var u=i(r)}for(e&&e(n);l<a.length;l++)s=a[l],r.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return r.O(u)},n=self["webpackChunkrobots"]=self["webpackChunkrobots"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(2966)}));n=r.O(n)})();
//# sourceMappingURL=app.877cb25a.js.map