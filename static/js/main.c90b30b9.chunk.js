(this["webpackJsonpfood-order-app"]=this["webpackJsonpfood-order-app"]||[]).push([[0],[,,,,function(e,t,n){e.exports={form:"Checkout_form__HRc87",control:"Checkout_control__XuoKK",actions:"Checkout_actions__32xi5",submit:"Checkout_submit__3C85r",invalid:"Checkout_invalid__3Vv-2"}},function(e,t,n){e.exports={"cart-items":"Cart_cart-items__1VQi9",total:"Cart_total__1ssq7",actions:"Cart_actions__2-I5Q","button--alt":"Cart_button--alt__1vW0P",button:"Cart_button__84czv"}},,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__h_nv5",summary:"CartItem_summary__362Pw",price:"CartItem_price__2tiPG",amount:"CartItem_amount__3MY8o",actions:"CartItem_actions__3NiYe"}},,,function(e,t,n){e.exports={button:"HeaderCartBtn_button__oPxWz",icon:"HeaderCartBtn_icon__1eyQn",badge:"HeaderCartBtn_badge__2pe7_",bump:"HeaderCartBtn_bump__35aP8"}},,,function(e,t,n){e.exports={backdrop:"Modal_backdrop__3BgbO",modal:"Modal_modal__2kUHP","slide-down":"Modal_slide-down__6TJDP"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__3d1Y3","meals-appear":"AvailableMeals_meals-appear__2Rd2v",MealsLoading:"AvailableMeals_MealsLoading__ZEYNN",MealsError:"AvailableMeals_MealsError__bwAo7"}},function(e,t,n){e.exports={meal:"MealItem_meal__3tMor",description:"MealItem_description__1j_3o",price:"MealItem_price__1PF9c"}},,function(e,t,n){e.exports={header:"Header_header__1idYH",mainImage:"Header_mainImage__2SHMV"}},,function(e,t,n){e.exports={card:"Card_card__25TE7"}},function(e,t,n){e.exports={form:"MealItemForm_form__2kNXR"}},function(e,t,n){e.exports={input:"Input_input__3Y953"}},function(e,t,n){e.exports={summary:"MealsSummary_summary__3jtP0"}},,,,,function(e,t,n){},function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(8),i=n.n(r),s=(n(27),n(2)),o=(n(28),n(6)),l=n.n(o),d=n(12),u=n(3),j=n(5),m=n.n(j),b=n(13),O=n.n(b),x=n(0),h=function(e){return Object(x.jsx)("div",{className:O.a.backdrop,onClick:e.onClose})},f=function(e){return Object(x.jsx)("div",{className:O.a.modal,children:Object(x.jsx)("div",{className:O.a.content,children:e.children})})},p=function(e){return Object(x.jsxs)(c.a.Fragment,{children:[i.a.createPortal(Object(x.jsx)(h,{onClose:e.onClose}),document.getElementById("backdrop-root")),i.a.createPortal(Object(x.jsx)(f,{children:e.children}),document.getElementById("overlay-root"))]})},_=c.a.createContext({items:[],totalAmount:0,addItem:function(){},removeItem:function(){},clearCart:function(){}}),v=n(7),C=n.n(v),N=function(e){var t="$".concat(e.price.toFixed(2));return Object(x.jsxs)("li",{className:C.a["cart-item"],children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("h2",{children:e.name}),Object(x.jsxs)("div",{className:C.a.summary,children:[Object(x.jsx)("span",{className:C.a.price,children:t}),Object(x.jsxs)("span",{className:C.a.amount,children:["x ",e.amount]})]})]}),Object(x.jsxs)("div",{className:C.a.actions,children:[Object(x.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(x.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},g=n(4),y=n.n(g),A=function(e){return""===e.trim()},k=function(e){var t=Object(a.useState)({name:!0,adress:!0,zip:!0,city:!0}),n=Object(s.a)(t,2),c=n[0],r=n[1],i=Object(a.useRef)(),o=Object(a.useRef)(),l=Object(a.useRef)(),d=Object(a.useRef)(),u="".concat(y.a.control," ").concat(c.name?"":y.a.invalid),j="".concat(y.a.control," ").concat(c.adress?"":y.a.invalid),m="".concat(y.a.control," ").concat(c.zip?"":y.a.invalid),b="".concat(y.a.control," ").concat(c.city?"":y.a.invalid);return Object(x.jsxs)("form",{className:y.a.form,onSubmit:function(t){t.preventDefault();var n=i.current.value,a=o.current.value,c=l.current.value,s=d.current.value,u=!A(n),j=!A(a),m=6===c.trim().length,b=!A(s);r({name:u,adress:j,zip:m,city:b}),u&&j&&m&&b&&e.onSubmit({enteredName:n,enteredAdress:a,enteredZip:c,enteredCity:s})},children:[Object(x.jsxs)("div",{className:u,children:[Object(x.jsx)("label",{htmlFor:"name",children:"Name"}),Object(x.jsx)("input",{ref:i,type:"text",id:"name"}),!c.name&&Object(x.jsx)("p",{children:"Please enter a valid name!"})]}),Object(x.jsxs)("div",{className:j,children:[Object(x.jsx)("label",{htmlFor:"adress",children:"Adress"}),Object(x.jsx)("input",{ref:o,type:"text",id:"adress"}),!c.adress&&Object(x.jsx)("p",{children:"Please enter a valid adress!"})]}),Object(x.jsxs)("div",{className:m,children:[Object(x.jsx)("label",{htmlFor:"zip",children:"Zip Code"}),Object(x.jsx)("input",{ref:l,type:"text",id:"zip"}),!c.zip&&Object(x.jsx)("p",{children:"Please enter a valid zip code (6 digits)!"})]}),Object(x.jsxs)("div",{className:b,children:[Object(x.jsx)("label",{htmlFor:"city",children:"City"}),Object(x.jsx)("input",{ref:d,type:"text",id:"city"}),!c.city&&Object(x.jsx)("p",{children:"Please enter a valid city!"})]}),Object(x.jsxs)("div",{className:y.a.actions,children:[Object(x.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(x.jsx)("button",{className:y.a.submit,children:"Confirm"})]})]})},M=function(e){var t=Object(a.useState)(!1),n=Object(s.a)(t,2),c=n[0],r=n[1],i=Object(a.useState)(!1),o=Object(s.a)(i,2),j=o[0],b=o[1],O=Object(a.useState)(!1),h=Object(s.a)(O,2),f=h[0],v=h[1],C=Object(a.useContext)(_),g="$".concat(C.totalAmount.toFixed(2)),y=C.items.length>0,A=function(e){C.removeItem(e)},M=function(e){C.addItem(Object(u.a)(Object(u.a)({},e),{},{amount:1}))},I=function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),e.next=3,fetch("https://food-order-app-babae-default-rtdb.firebaseio.com/orders.json",{method:"POST",body:JSON.stringify({user:t,orderedItems:C.items,price:C.totalAmount})});case 3:b(!1),v(!0),C.clearCart();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=Object(x.jsx)("ul",{className:m.a["cart-items"],children:C.items.map((function(e){return Object(x.jsx)(N,{name:e.name,amount:e.amount,price:e.price,onRemove:A.bind(null,e.id),onAdd:M.bind(null,e)},e.id)}))}),S=Object(x.jsxs)("div",{className:m.a.actions,children:[Object(x.jsx)("button",{className:m.a["button--alt"],onClick:e.onHideCart,children:"Close"}),y&&Object(x.jsx)("button",{className:m.a.button,onClick:function(){r(!0)},children:"Order"})]}),F=Object(x.jsxs)(a.Fragment,{children:[w,Object(x.jsxs)("div",{className:m.a.total,children:[Object(x.jsx)("span",{children:"Total Amount"}),Object(x.jsx)("span",{children:g})]}),c&&Object(x.jsx)(k,{onSubmit:I,onCancel:e.onHideCart}),!c&&S]}),H=Object(x.jsx)("p",{children:"Sending order data..."}),P=Object(x.jsxs)(a.Fragment,{children:[Object(x.jsx)("p",{children:"Successfully sent the order !"}),Object(x.jsx)("div",{className:m.a.actions,children:Object(x.jsx)("button",{className:m.a.button,onClick:e.onHideCart,children:"Close"})})]});return Object(x.jsxs)(p,{onClose:e.onHideCart,children:[!j&&!f&&F,j&&H,!j&&f&&P]})},I=n(17),w=n.n(I),S=n.p+"static/media/meals.2971f633.jpg",F=n(10),H=n.n(F),P=function(){return Object(x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(x.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},E=function(e){var t=Object(a.useState)(!1),n=Object(s.a)(t,2),c=n[0],r=n[1],i=Object(a.useContext)(_).items,o=i.reduce((function(e,t){return e+t.amount}),0),l="".concat(H.a.button," ").concat(c?H.a.bump:"");return Object(a.useEffect)((function(){if(0!==i.length){r(!0);var e=setTimeout((function(){r(!1)}),300);return function(){clearTimeout(e)}}}),[i]),Object(x.jsxs)("button",{onClick:e.onClick,className:l,children:[Object(x.jsx)("span",{className:H.a.icon,children:Object(x.jsx)(P,{})}),Object(x.jsx)("span",{children:"My Cart"}),Object(x.jsx)("span",{className:H.a.badge,children:o})]})},R=function(e){return Object(x.jsxs)(a.Fragment,{children:[Object(x.jsxs)("header",{className:w.a.header,children:[Object(x.jsx)("h1",{children:"TastyMeals"}),Object(x.jsx)(E,{onClick:e.onShowCart})]}),Object(x.jsx)("div",{className:w.a.mainImage,children:Object(x.jsx)("img",{src:S,alt:"Meal background"})})]})},z=n(19),T=n.n(z),B=function(e){return Object(x.jsx)("div",{className:T.a.card,children:e.children})},D=n(14),L=n.n(D),Y=n(15),V=n.n(Y),J=n(20),Q=n.n(J),Z=n(21),$=n.n(Z),q=c.a.forwardRef((function(e,t){return Object(x.jsxs)("div",{className:$.a.input,children:[Object(x.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(x.jsx)("input",Object(u.a)({ref:t},e.input))]})})),K=function(e){var t=Object(a.useState)(!0),n=Object(s.a)(t,2),c=n[0],r=n[1],i=Object(a.useRef)();return Object(x.jsxs)("form",{className:Q.a.form,onSubmit:function(t){t.preventDefault();var n=i.current.value,a=+n;0===n.trim().length||a<1||a>10?r(!1):e.onAddToCart(a)},children:[Object(x.jsx)(q,{ref:i,label:"Amount",input:{id:"amount_"+e.id,type:"number",min:"1",max:"10",step:"1",defaultValue:"1"}}),Object(x.jsx)("button",{children:"+ Add"}),!c&&Object(x.jsx)("p",{children:"Please enter a valid amount (1-10)"})]})},W=function(e){var t=Object(a.useContext)(_),n="$".concat(e.price.toFixed(2));return Object(x.jsxs)("li",{className:V.a.meal,children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("h3",{children:e.name}),Object(x.jsx)("div",{className:V.a.description,children:e.desc}),Object(x.jsx)("div",{className:V.a.price,children:n})]}),Object(x.jsx)("div",{children:Object(x.jsx)(K,{id:e.id,onAddToCart:function(n){t.addItem({id:e.id,name:e.name,price:e.price,amount:n})}})})]})},X=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(!0),i=Object(s.a)(r,2),o=i[0],j=i[1],m=Object(a.useState)(),b=Object(s.a)(m,2),O=b[0],h=b[1];if(Object(a.useEffect)((function(){(function(){var e=Object(d.a)(l.a.mark((function e(){var t,n,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://food-order-app-babae-default-rtdb.firebaseio.com/meals.json");case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("Something went wrong !");case 5:return e.next=7,t.json();case 7:for(r in n=e.sent,a=[],n)a.push(Object(u.a)({id:r},n[r]));c(a),j(!1);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()().catch((function(e){j(!1),h(e.message)}))}),[]),o)return Object(x.jsx)("section",{className:L.a.MealsLoading,children:Object(x.jsx)("p",{children:"Loading..."})});if(O)return Object(x.jsx)("section",{className:L.a.MealsError,children:Object(x.jsx)("p",{children:O})});var f=n.map((function(e){return Object(x.jsx)(W,{id:e.id,name:e.name,desc:e.description,price:e.price},e.id)}));return Object(x.jsx)("section",{className:L.a.meals,children:Object(x.jsx)(B,{children:Object(x.jsx)("ul",{children:f})})})},G=n(22),U=n.n(G),ee=function(){return Object(x.jsxs)("section",{className:U.a.summary,children:[Object(x.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(x.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(x.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},te=function(){return Object(x.jsxs)(a.Fragment,{children:[Object(x.jsx)(ee,{}),Object(x.jsx)(X,{})]})},ne=n(18),ae={items:[],totalAmount:0},ce=function(e,t){switch(t.type){case"ADD":var n,a=e.totalAmount+t.item.price*t.item.amount,c=e.items.findIndex((function(e){return e.id===t.item.id})),r=e.items[c];if(r){var i=Object(u.a)(Object(u.a)({},r),{},{amount:r.amount+t.item.amount});(n=Object(ne.a)(e.items))[c]=i}else n=e.items.concat(t.item);return{items:n,totalAmount:a};case"REMOVE":var s,o=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[o],d=e.totalAmount-l.price;if(1===l.amount)s=e.items.filter((function(e){return e.id!==t.id}));else{var j=Object(u.a)(Object(u.a)({},l),{},{amount:l.amount-1});(s=Object(ne.a)(e.items))[o]=j}return{items:s,totalAmount:d};case"CLEAR":default:return ae}},re=function(e){var t=Object(a.useReducer)(ce,ae),n=Object(s.a)(t,2),c=n[0],r=n[1],i={items:c.items,totalAmount:c.totalAmount,addItem:function(e){r({type:"ADD",item:e})},removeItem:function(e){r({type:"REMOVE",id:e})},clearCart:function(){r({type:"CLEAR"})}};return Object(x.jsx)(_.Provider,{value:i,children:e.children})};var ie=function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(x.jsxs)(re,{children:[n&&Object(x.jsx)(M,{onHideCart:function(){c(!1)}}),Object(x.jsx)(R,{onShowCart:function(){c(!0)}}),Object(x.jsx)("main",{children:Object(x.jsx)(te,{})})]})},se=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,32)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};i.a.render(Object(x.jsx)(ie,{}),document.getElementById("root")),se()}],[[31,1,2]]]);
//# sourceMappingURL=main.c90b30b9.chunk.js.map