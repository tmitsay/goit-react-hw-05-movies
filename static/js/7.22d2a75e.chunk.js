"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[7],{304:function(e,t,n){n.d(t,{Hg:function(){return i},M1:function(){return l},TP:function(){return f},Ui:function(){return o},tx:function(){return p}});var r=n(861),a=n(757),u=n.n(a),c=n(340);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="61e5fdd47e53f1e747e2db8e87aa2226",i=function(){var e=(0,r.Z)(u().mark((function e(){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/movie/day?api_key=".concat(s));case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("search/movie?api_key=".concat(s,"&query=").concat(t,"&language=en-US&page=1&include_adult=false"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"/reviews?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.cast);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},781:function(e,t,n){n.d(t,{O:function(){return i}});var r=n(689),a=n(87),u="moviesList_list__YY0GA",c="moviesList_items__HN-mS",s=n(184),i=function(e){var t=e.movies,n=(0,r.TH)();return(0,s.jsx)("ul",{className:u,children:t.map((function(e){var t=e.id,r=e.original_title;return(0,s.jsx)("li",{className:c,children:(0,s.jsx)(a.rU,{to:"/movies/".concat(t),state:{from:n},children:r})},t)}))})}},7:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var r=n(861),a=n(439),u=n(757),c=n.n(u),s=n(791),i=n(87),o="form_form__v9NsD",f="form_input__cqeL6",p="form_button__8zDUO",l=n(184),v=function(e){var t=e.onSearch,n=(0,s.useState)(""),r=(0,a.Z)(n,2),u=r[0],c=r[1];return(0,l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t({query:u}),c("")},className:o,children:[(0,l.jsx)("input",{className:f,name:"name",type:"text",value:u,placeholder:"Search movies",onChange:function(e){c(e.target.value)}}),(0,l.jsx)("button",{type:"submit",className:p,children:"Search"})]})},m=n(304),h=n(49),d=n(781),_=function(){var e=(0,s.useState)([]),t=(0,a.Z)(e,2),n=t[0],u=t[1],o=(0,i.lr)(),f=(0,a.Z)(o,2),p=f[0],_=f[1],x=(0,s.useState)(!1),g=(0,a.Z)(x,2),k=g[0],w=g[1];return(0,s.useEffect)((function(){var e=p.get("query");if(e){var t=function(){var t=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,w(!0),t.next=4,(0,m.Ui)(e);case 4:n=t.sent,u(n),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:return t.prev=11,w(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})));return function(){return t.apply(this,arguments)}}();t()}}),[p]),(0,l.jsxs)("div",{children:[(0,l.jsx)(v,{onSearch:_}),k&&(0,l.jsx)(h.a,{}),n.length>0&&(0,l.jsx)(d.O,{movies:n})]})}}}]);
//# sourceMappingURL=7.22d2a75e.chunk.js.map