(this["webpackJsonpwish-list"]=this["webpackJsonpwish-list"]||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),i=n.n(c),s=(n(24),n(25),n(3)),o=n(18),l=n(4),u=n.n(l),d=n(10),h=n(2),f=n(11),m=(n(35).v4,"wishList"),p="".concat(m,"/FETCH_GAME_LIST"),j="".concat(m,"/FETCH_WISH_LIST"),b="".concat(m,"/FETCH_TOTAL"),O="".concat(m,"/FETCH_GAME_ERROR"),g="".concat(m,"/ADD_TO_WISH_LIST"),v="".concat(m,"/REMOVE_GAME_FROM_GAME_LIST"),L="".concat(m,"/REMOVE_GAME_FROM_WISH_LIST"),w="".concat(m,"/REMOVE_ALL_FROM_GAME_LIST"),x="".concat(m,"/REMOVE_ALL_FROM_WISH_LIST"),S="".concat(m,"/SET_TOTAL_PRICE"),y=JSON.parse(localStorage.getItem("wishList")),I={gameList:[],wishList:[],totalPrice:0};var N=function(e){return function(t,n){var a;a=y&&y.length?JSON.parse(localStorage.getItem("wishList")):n().wishList.wishList;var r=[].concat(Object(o.a)(a),[Object(h.a)({},e)]);t({type:g,payload:r})}},T=function(e){return function(t,n){var a=(y&&y.length?JSON.parse(localStorage.getItem("wishList")):n().wishList.wishList).filter((function(t){return(null===t||void 0===t?void 0:t.id)!==(null===e||void 0===e?void 0:e.id)}));t({type:L,payload:a})}},E=function(){return function(e,t){var n=t().wishList.wishList.reduce((function(e,t){return e+(t.price||0)}),0);e({type:S,payload:n})}},_=function(e){return e.wishList},R=Object(f.a)(_,(function(e){return e.gameList})),A=Object(f.a)(_,(function(e){return e.wishList})),C=Object(f.a)(_,(function(e){return e.totalPrice})),F=n(19),W=n(1),D=function(e){var t=e.item,n=Object(a.useState)(!1),r=Object(F.a)(n,2),c=r[0],i=r[1];return console.log("OnErrorEvent Presence2",c),Object(W.jsx)("div",{className:"imgContainer",children:c?Object(W.jsx)("img",{className:"gameImg",src:"https://www.cubexled.com/assets/img/no_image.jpg",alt:"gameImg"}):Object(W.jsx)("img",{onError:function(){i(!0),console.log("OnErrorEvent Presence1",c)},className:"gameImg",src:t.cover,alt:"gameImg"})})},G=function(e){var t=e.item,n=e.handleAdd,a=e.handleRemove,r=e.itemIsInCart;return Object(W.jsxs)("li",{className:"gameItem",onDragStart:function(e){return function(e,t){e.dataTransfer.setData("id",t)}(e,t.id)},draggable:!0,children:[Object(W.jsx)(D,{item:t}),Object(W.jsx)("p",{className:"itemName",children:null===t||void 0===t?void 0:t.name}),t.price?Object(W.jsxs)("h2",{className:"price",children:[t.price," RUR"]}):Object(W.jsx)("h2",{className:"price",children:"FREE"}),r(t)?Object(W.jsx)("button",{role:"button",className:"itemButton itemDeleteButton",onClick:function(){return a(t)},children:"In wishlist"}):Object(W.jsx)("button",{className:"itemButton itemAddButton",role:"button",onClick:function(){return n(t)},children:"Add"})]},t.id)},k=function(e){var t=e.handleFetchList,n=e.gameList,r=e.handleAddNewGame,c=e.handleSetTotalPrice,i=e.handleRemoveGamefromWishList,o=e.wishList;Object(a.useEffect)((function(){t()}),[t]);var l=Object(a.useCallback)((function(e){Object(s.b)((function(){r(e),c()}))}),[r,c]),u=Object(a.useCallback)((function(e){i(e),c()}),[i,c]),d=function(e){return-1!==o.findIndex((function(t){return t.id===e.id}))};return Object(W.jsx)("div",{className:"mainGameWrap droppable",onDragOver:function(e){return function(e){e.preventDefault()}(e)},onDrop:function(e){return function(e){var t=e.dataTransfer.getData("id"),n=o.find((function(e){return e.id===t}));u(n),c()}(e)},children:Object(W.jsxs)("div",{className:"gameContainer",children:[Object(W.jsx)("h2",{children:"Wish List App"}),Object(W.jsx)("ul",{className:"gameList",children:n&&n.map((function(e){return Object(W.jsx)(G,{item:e,handleAdd:l,handleRemove:u,itemIsInCart:d},e.id)}))})]})})},M=Object(s.c)((function(e){return{gameList:R(e),wishList:A(e)}}),{handleFetchList:function(){return function(){var e=Object(d.a)(u.a.mark((function e(t){var n,a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://gist.githubusercontent.com/Greyewi/e6cfa49e478387a7b878e4430e1f4223/raw/d045a5c2c977cf05d05ae1a4625762e69cc891c8/game_list.json");case 3:return n=e.sent,e.next=6,n.json();case 6:return a=e.sent,r=Object.entries(a).map((function(e){return e[1].id=e[0],e[1]})),e.next=10,t({type:p,payload:r});case 10:e.next=16;break;case 12:return e.prev=12,e.t0=e.catch(0),e.next=16,t({type:O,payload:e.t0});case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}()},handleRemoveAllGame:function(){return{type:w}},handleAddNewGame:N,handleSetTotalPrice:E,handleRemoveGamefromWishList:T})(k),P=function(e){var t=e.handleFetchWishList,n=e.handleRemoveGamefromWishList,r=e.handleSetTotalPrice,c=e.handleRemoveAllWish,i=e.handleFetchTotal,s=e.handleAddNewGame,o=e.wishList,l=e.gameList,u=e.totalPrice;Object(a.useEffect)((function(){t(),i()}),[t,i]);var d=Object(a.useCallback)((function(e){n(e),r()}),[n,r]),h=Object(a.useCallback)((function(){c()}),[c]);return Object(W.jsx)("div",{className:"mainWishWrap droppable",onDragOver:function(e){return function(e){e.preventDefault()}(e)},onDrop:function(e){return function(e){var t=e.dataTransfer.getData("id");if(-1==o.findIndex((function(e){return e.id===t}))){var n=l.filter((function(e){return e.id===t}));s(n[0]),r()}else alert("This game is already in the list")}(e)},children:Object(W.jsxs)("div",{className:"wishContainer",children:[Object(W.jsx)("ul",{className:"wishList",children:o&&o.map((function(e){return Object(W.jsxs)("li",{className:"wishItem",onDragStart:function(t){return function(e,t,n){e.dataTransfer.setData("id",t)}(t,e.id,null===e||void 0===e||e.name)},draggable:!0,children:[Object(W.jsx)("button",{className:"closeButtonWish wishClearButton",onClick:function(){d(e)},children:"X"}),Object(W.jsx)("p",{children:null===e||void 0===e?void 0:e.name})]},e.id)}))}),Object(W.jsxs)("h1",{children:["Total: ",Object(W.jsxs)("span",{className:"total-price",children:[u," RUR"]})]}),o.length>0&&Object(W.jsx)("div",{className:"clearButtonWrap",children:Object(W.jsx)("button",{onClick:function(){return h()},className:"itemButton wishClearButton",children:"Clear"})})]})})},J=Object(s.c)((function(e){return{wishList:A(e),gameList:R(e),totalPrice:C(e)}}),{handleRemoveAllWish:function(){return{type:x}},handleRemoveGamefromWishList:T,handleFetchWishList:function(){return function(){var e=Object(d.a)(u.a.mark((function e(t){var n,a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=JSON.parse(localStorage.getItem("wishList")),a=n&&n.length?JSON.parse(localStorage.getItem("wishList")):[],e.next=5,t({type:j,payload:a});case 5:r=a.reduce((function(e,t){return e+(t.price||0)}),0),t({type:S,payload:r}),e.next=13;break;case 9:return e.prev=9,e.t0=e.catch(0),e.next=13,t({type:O,payload:e.t0});case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()},handleSetTotalPrice:E,handleFetchTotal:function(){return function(){var e=Object(d.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=JSON.parse(localStorage.getItem("priceTotal")),a=n&&n.length?JSON.parse(localStorage.getItem("priceTotal")):0,e.next=5,t({type:b,payload:a});case 5:e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(0),e.next=11,t({type:O,payload:e.t0});case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},handleAddNewGame:N})(P);var B=function(){return Object(W.jsxs)("div",{className:"App",children:[Object(W.jsx)(M,{}),Object(W.jsx)(J,{})]})},H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))},V=n(5),U=n(17),X=n(15),q=n.n(X),z=n(16),K=n(9),Q=Object(V.combineReducers)(Object(K.a)({},m,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case p:case v:return Object(h.a)(Object(h.a)({},e),{},{gameList:a});case j:case g:case L:return Object(h.a)(Object(h.a)({},e),{},{wishList:a});case w:return Object(h.a)(Object(h.a)({},e),{},{gameList:[]});case x:return Object(h.a)(Object(h.a)({},e),{},{wishList:[],totalPrice:0});case S:return Object(h.a)(Object(h.a)({},e),{},{totalPrice:a});default:return e}}))),Y=[g,x,L],Z=[S],$=Object(V.applyMiddleware)(U.a,q.a,(function(e){return function(e){return function(t){return Y.includes(t.type)?window.localStorage.setItem("wishList",JSON.stringify(t.payload||[])):Z.includes(t.type)&&window.localStorage.setItem("priceTotal",JSON.stringify(t.payload||0)),e(t)}}}));var ee=Object(V.createStore)(Q,function(){try{var e=localStorage.getItem("persistantState");if(null===e)return;return JSON.parse(e)}catch(t){return void console.warn(t)}}(),Object(z.composeWithDevTools)($));ee.subscribe((function(){return function(e){try{var t=JSON.stringify(e);localStorage.setItem("persistantState",t)}catch(n){console.warn(n)}}(ee.getState())}));var te=ee;i.a.render(Object(W.jsx)(s.a,{store:te,children:Object(W.jsx)(r.a.StrictMode,{children:Object(W.jsx)(B,{})})}),document.getElementById("root")),H()}},[[36,1,2]]]);
//# sourceMappingURL=main.9dc1f5b3.chunk.js.map