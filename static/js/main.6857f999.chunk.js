(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var s,r=n(3),i=n.n(r),o=n(4),c=n(5),a=n(8),l=n(6),u=n(7),b=n(1),h=(n(13),n(0)),d=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(s||(s={}));var p=function(t){Object(a.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(t=e.call.apply(e,[this].concat(i))).state={isStarted:!1,isReversed:!1,sortType:s.NONE},t.reverse=function(){t.setState((function(t){return{isReversed:!t.isReversed}}))},t.startWork=function(){return t.setState({isStarted:!0})},t.sortByAlpabet=function(){t.setState({sortType:s.ALPHABET})},t.sortByLength=function(){t.setState({sortType:s.LENGTH})},t.reset=function(){t.setState({sortType:s.NONE,isReversed:!1})},t.getElements=function(t){return t.map((function(t){return Object(h.jsx)("li",{className:"Goods__item",children:t},t)}))},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.isStarted,r=e.isReversed,i=e.sortType,o=function(t,e,n){var r=Object(u.a)(t);switch(e){case s.LENGTH:return r.sort((function(t,e){return t.length-e.length}));case s.ALPHABET:return r.sort((function(t,e){return t.localeCompare(e)}));case s.NONE:}return n&&r.reverse(),r}(d,i,r);return Object(h.jsx)("div",{className:"App",children:n?Object(h.jsxs)("div",{className:"box has-background-link-light contant",children:[Object(h.jsxs)("div",{className:"buttons",children:[Object(h.jsx)("button",{type:"button",className:"button is-link btn",onClick:this.sortByAlpabet,children:"Sort alphabetically"}),Object(h.jsx)("button",{type:"button",className:"button is-warning is-light btn",onClick:function(){return t.sortByLength()},children:"Sort by length"}),Object(h.jsx)("button",{type:"button",onClick:this.reverse,className:"button is-info btn",children:"Reverse"}),Object(h.jsx)("button",{type:"button",onClick:this.reset,className:"button is-danger btn",children:"Reset"})]}),Object(h.jsx)("ul",{className:"listRender",children:this.getElements(o)})]}):Object(h.jsx)("button",{type:"button",className:"button is-link is-outlined is-large start",onClick:this.startWork,children:"Start"})})}}]),n}(b.Component);i.a.render(Object(h.jsx)(p,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.6857f999.chunk.js.map