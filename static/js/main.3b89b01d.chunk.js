(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s=n(4),o=n.n(s),c=n(2),r=n(5),a=n(6),i=n(8),l=n(7),u=n(1),b=n.n(u),d=(n(13),n(0)),p=function(t){var e=t.goods;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("ul",{className:"listOfGoods",children:e.map((function(t){return Object(d.jsx)("li",{className:"listOfGoods__item",children:t},t)}))})})},j=(n(15),["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"]),h=function(t){Object(i.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(r.a)(this,n);for(var s=arguments.length,o=new Array(s),a=0;a<s;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))).state={goods:[].concat(j),render:!1},t.start=function(){return t.setState({render:!0})},t.reverse=function(){t.setState((function(t){return{goods:Object(c.a)(t.goods).reverse()}}))},t.sortByLetters=function(){t.setState((function(t){return{goods:Object(c.a)(t.goods).sort((function(t,e){return t.localeCompare(e)}))}}))},t.reset=function(){t.setState({goods:[].concat(j)})},t.sortByLength=function(){t.setState((function(t){return{goods:Object(c.a)(t.goods).sort((function(t,e){return t.length-e.length}))}}))},t}return Object(a.a)(n,[{key:"render",value:function(){var t=this.state,e=t.goods,n=t.render;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{className:"App__title",children:Object(d.jsx)("i",{children:"Goods"})}),Object(d.jsxs)("div",{className:"App__content",children:[Object(d.jsx)("div",{className:"App__list-wrapper",children:n&&Object(d.jsx)(p,{goods:e})}),Object(d.jsxs)("div",{className:"App__buttons",children:[Object(d.jsx)("button",{className:"App__button",type:"button",onClick:this.start,disabled:n,children:"Start"}),Object(d.jsx)("button",{className:"App__button",type:"button",onClick:this.reverse,children:"Reverse"}),Object(d.jsx)("button",{className:"App__button",type:"button",onClick:this.sortByLetters,children:"Sort alphabetically"}),Object(d.jsx)("button",{className:"App__button",type:"button",onClick:this.reset,children:"Reset"}),Object(d.jsx)("button",{className:"App__button",type:"button",onClick:this.sortByLength,children:"Sort by length"})]})]})]})}}]),n}(b.a.Component),O=h;o.a.render(Object(d.jsx)(O,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.3b89b01d.chunk.js.map