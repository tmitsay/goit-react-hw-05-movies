"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[741],{304:function(e,t,n){n.d(t,{Hg:function(){return i},M1:function(){return l},TP:function(){return p},Ui:function(){return o},tx:function(){return f}});var r=n(861),a=n(757),c=n.n(a),u=n(340);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="61e5fdd47e53f1e747e2db8e87aa2226",i=function(){var e=(0,r.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("trending/movie/day?api_key=".concat(s));case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("search/movie?api_key=".concat(s,"&query={query}&language=en-US&page=1&include_adult=false"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(t,"?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(t,"/reviews?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.cast);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},741:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=n(861),a=n(439),c=n(757),u=n.n(c),s=n(791),i=n(689),o=n(304),p=n(49),f="cast_list__bULim",l="cast_text__E0CXR",v=n(184),d=function(){var e=(0,i.UO)().movieId,t=(0,s.useState)(!1),n=(0,a.Z)(t,2),c=n[0],d=n[1],h=(0,s.useState)([]),m=(0,a.Z)(h,2),g=m[0],x=m[1];return(0,s.useEffect)((function(){d(!0);var t=function(){var t=(0,r.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,o.M1)(e);case 3:n=t.sent,x(n),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:return t.prev=10,d(!1),t.finish(10);case 13:case"end":return t.stop()}}),t,null,[[0,7,10,13]])})));return function(){return t.apply(this,arguments)}}();t()}),[e]),(0,v.jsxs)("div",{children:[c&&(0,v.jsx)(p.a,{}),(0,v.jsx)("ul",{className:f,children:g.map((function(e){var t=e.id,n=e.profile_path,r=e.original_name,a=e.name,c=e.character;return(0,v.jsxs)("li",{children:[(0,v.jsx)("img",{width:250,alt:r,src:n?"https://image.tmdb.org/t/p/w500/".concat(n):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700"}),(0,v.jsx)("p",{className:l,children:a}),(0,v.jsxs)("p",{className:l,children:["Character : ",c]})]},t)}))})]})}}}]);
//# sourceMappingURL=741.15bfd1e2.chunk.js.map