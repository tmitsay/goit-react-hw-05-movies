"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[680],{304:function(e,t,n){n.d(t,{Hg:function(){return i},M1:function(){return v},TP:function(){return f},Ui:function(){return o},tx:function(){return p}});var r=n(861),a=n(757),u=n.n(a),c=n(340);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="61e5fdd47e53f1e747e2db8e87aa2226",i=function(){var e=(0,r.Z)(u().mark((function e(){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/movie/day?api_key=".concat(s));case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("search/movie?api_key=".concat(s,"&query=").concat(t,"&language=en-US&page=1&include_adult=false"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"/reviews?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.cast);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},781:function(e,t,n){n.d(t,{O:function(){return i}});var r=n(689),a=n(87),u="moviesList_list__YY0GA",c="moviesList_items__HN-mS",s=n(184),i=function(e){var t=e.movies,n=(0,r.TH)();return(0,s.jsx)("ul",{className:u,children:t.map((function(e){var t=e.id,r=e.original_title;return(0,s.jsx)("li",{className:c,children:(0,s.jsx)(a.rU,{to:"/movies/".concat(t),state:{from:n},children:r})},t)}))})}},680:function(e,t,n){n.r(t);var r=n(861),a=n(439),u=n(757),c=n.n(u),s=n(791),i=n(49),o=n(304),f=n(781),p=n(184);t.default=function(){var e=(0,s.useState)([]),t=(0,a.Z)(e,2),n=t[0],u=t[1],v=(0,s.useState)(!1),l=(0,a.Z)(v,2),d=l[0],h=l[1];return(0,s.useEffect)((function(){var e=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,h(!0),e.next=4,(0,o.Hg)("");case 4:t=e.sent,u(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:return e.prev=11,h(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,p.jsxs)("div",{children:[(0,p.jsx)("h1",{children:"Trending movies"}),(0,p.jsx)(f.O,{movies:n}),d&&(0,p.jsx)(i.a,{})]})}}}]);
//# sourceMappingURL=680.32e545a0.chunk.js.map