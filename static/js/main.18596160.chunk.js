(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{14:function(e,t,s){},16:function(e,t,s){"use strict";s.r(t);var n=s(4),c=s.n(n),o=s(7),r=s(5),i=s(6),a=s(9),l=s(8),u=s(1),b=s.n(u),h=s(2),p=s.n(h),j=(s(14),s(0)),d=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],v=function(e){Object(a.a)(s,e);var t=Object(l.a)(s);function s(){var e;Object(r.a)(this,s);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={visible:!1,goods:[],sortBy:"",isReverse:!1,selectedValue:1},e.getVisibleGoods=function(e,t,s,n){var c=Object(o.a)(e).filter((function(e){return e.length>=n}));switch(t){case"order":c.sort();break;case"length":c.sort((function(e,t){return e.length-t.length}))}return s&&c.reverse(),c},e.start=function(){e.setState({visible:!0,goods:d})},e.reverse=function(){e.setState((function(e){return{isReverse:!e.isReverse}}))},e.sort=function(){e.setState({sortBy:"order"})},e.reset=function(){e.setState({sortBy:"",isReverse:!1,selectedValue:1})},e.sortByLength=function(){e.setState({sortBy:"length"})},e.change=function(t){e.setState({selectedValue:+t.target.value})},e}return Object(i.a)(s,[{key:"render",value:function(){var e=this.state,t=e.visible,s=e.goods,n=e.sortBy,c=e.isReverse,o=e.selectedValue,r=this.getVisibleGoods(s,n,c,o);return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:"Goods"}),!t&&Object(j.jsx)("button",{type:"button",className:"App__button",onClick:this.start,children:"Start"}),t&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("ul",{className:"App__list",children:r.map((function(e){return Object(j.jsx)("li",{children:e},e)}))}),Object(j.jsx)("button",{type:"button",className:p()("App__button",{App__active:c}),onClick:this.reverse,children:"Reverse"}),Object(j.jsx)("button",{type:"button",className:p()("App__button",{App__active:"order"===n}),onClick:this.sort,children:"Sort alphabetically"}),Object(j.jsx)("button",{type:"button",className:"App__button",onClick:this.reset,children:"Reset"}),Object(j.jsx)("button",{type:"button",className:p()("App__button",{App__active:"length"===n}),onClick:this.sortByLength,children:"Sort by length"}),Object(j.jsxs)("select",{onChange:this.change,className:"App__button",value:o,children:[Object(j.jsx)("option",{value:"1",children:"1"}),Object(j.jsx)("option",{value:"2",children:"2"}),Object(j.jsx)("option",{value:"3",children:"3"}),Object(j.jsx)("option",{value:"4",children:"4"}),Object(j.jsx)("option",{value:"5",children:"5"}),Object(j.jsx)("option",{value:"6",children:"6"}),Object(j.jsx)("option",{value:"7",children:"7"}),Object(j.jsx)("option",{value:"8",children:"8"}),Object(j.jsx)("option",{value:"9",children:"9"}),Object(j.jsx)("option",{value:"10",children:"10"})]})]})]})}}]),s}(b.a.Component),O=v;c.a.render(Object(j.jsx)(O,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.18596160.chunk.js.map