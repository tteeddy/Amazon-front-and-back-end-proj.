(this["webpackJsonpamazon-aug"]=this["webpackJsonpamazon-aug"]||[]).push([[0],{100:function(e,t,c){},102:function(e,t,c){"use strict";c.r(t);var a=c(2),n=c(3),i=c.n(n),s=c(28),r=c.n(s),o=(c(62),c(50)),l=c(8),d=(c(63),c(64),c(51)),j=c.n(d),u=c(52),m=c.n(u),h=c(15),b=Object(n.createContext)(),O=function(e){var t=e.reducer,c=e.initialState,i=e.children;return Object(a.jsx)(b.Provider,{value:Object(n.useReducer)(t,c),children:i})},p=function(){return Object(n.useContext)(b)},x=c(36),_=x.a.initializeApp({apiKey:"AIzaSyBAPKPTGG36JWv2P5EQ8MqhrXVh1LhZim4",authDomain:"fir-eb03f.firebaseapp.com",projectId:"fir-eb03f",storageBucket:"fir-eb03f.appspot.com",messagingSenderId:"1016139805727",appId:"1:1016139805727:web:89b0045bc07e97a023512a",measurementId:"G-7LJTBVQC5Q"}).firestore(),g=x.a.auth();var v=function(){var e=p(),t=Object(l.a)(e,2),c=t[0],n=c.basket,i=c.user;return t[1],Object(a.jsxs)("div",{className:"header",children:[Object(a.jsx)(h.b,{to:"/",children:Object(a.jsx)("img",{className:"header__logo",src:"http://pngimg.com/uploads/amazon/amazon_PNG11.png"})}),Object(a.jsxs)("div",{className:"header__search",children:[Object(a.jsx)("input",{className:"header__searchInput",type:"text"}),Object(a.jsx)(j.a,{className:"header__searchIcon"})]}),Object(a.jsxs)("div",{className:"header__nav",children:[Object(a.jsx)(h.b,{to:!i&&"/login",className:"header__clearlink",children:Object(a.jsxs)("div",{onClick:function(){i&&g.signOut()},className:"header__option",children:[Object(a.jsxs)("span",{className:"header__optionLineOne",children:["Hello ",i?i.email:"Guest"]}),Object(a.jsx)("span",{className:"header__optionLineTwo",children:i?"Sign Out":"Sign In"})]})}),Object(a.jsx)(h.b,{to:"/orders",className:"header__clearlink",children:Object(a.jsxs)("div",{className:"header__option",children:[Object(a.jsx)("span",{className:"header__optionLineOne",children:"Returns"}),Object(a.jsx)("span",{className:"header__optionLineTwo",children:"& Orders"})]})}),Object(a.jsxs)("div",{className:"header__option",children:[Object(a.jsx)("span",{className:"header__optionLineOne",children:"Your"}),Object(a.jsx)("span",{className:"header__optionLineTwo",children:"Prime"})]}),Object(a.jsx)(h.b,{to:"/checkout",className:"header__clearlink",children:Object(a.jsxs)("div",{className:"header__optionBasket",children:[Object(a.jsx)(m.a,{}),Object(a.jsx)("span",{className:"header__optionLineTwo header__basketCount",children:n.length})]})})]})]})};c(73),c(74);var f=function(e){var t=e.id,c=e.title,n=e.image,i=e.price,s=e.rating,r=p(),o=Object(l.a)(r,2),d=(o[0].basket,o[1]);return Object(a.jsxs)("div",{className:"product",children:[Object(a.jsxs)("div",{className:"product__info",children:[Object(a.jsx)("p",{children:c}),Object(a.jsxs)("p",{className:"product__price",children:[Object(a.jsx)("small",{children:"$"}),Object(a.jsx)("strong",{children:i})]}),Object(a.jsx)("div",{className:"product__rating",children:Array(s).fill().map((function(e,t){return Object(a.jsx)("p",{children:"\ud83c\udf1f"},t)}))})]}),Object(a.jsx)("img",{src:n,alt:""}),Object(a.jsx)("button",{onClick:function(){d({type:"ADD_TO_BASKET",item:{id:t,title:c,image:n,price:i,rating:s}})},children:"Add to Basket"})]})};var N=function(){return Object(a.jsx)("div",{className:"home",children:Object(a.jsxs)("div",{className:"home__container",children:[Object(a.jsx)("img",{className:"home__image",src:"https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg",alt:""}),Object(a.jsxs)("div",{className:"home__row",children:[Object(a.jsx)(f,{id:"12321341",title:"New Apple iMac with Retina 5K Display (27-inch, 8GB RAM, 256GB SSD Storage)",price:1669,rating:5,image:"https://m.media-amazon.com/images/I/71KR2i6-WaL._AC_UY218_.jpg"}),Object(a.jsx)(f,{id:"49538094",title:"Epic Racing Professional Gaming Chair with Adjustable Height, Full Recline and Headrest/Lumbar Support",price:159.99,rating:4,image:"https://m.media-amazon.com/images/I/71t8UBllIgL._AC_UL320_.jpg"})]}),Object(a.jsxs)("div",{className:"home__row",children:[Object(a.jsx)(f,{id:"4903850",title:"New Apple Watch Series 6 (GPS, 40mm) - Space Gray Aluminum Case with Black Sport Band",price:499.99,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/71yOGVLGWpL._AC_SX679_.jpg"}),Object(a.jsx)(f,{id:"99903850",title:"4K 60FPS Video Camera Camcorder Ultra HD 48MP YouTube Camera Vlogging WiFi Digital Camera Recorder IPS Touch Screen",price:139.99,rating:4,image:"https://m.media-amazon.com/images/I/81eUw7H78UL._AC_UY218_.jpg"}),Object(a.jsx)(f,{id:"3254354345",title:"New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)",price:598.99,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"})]}),Object(a.jsx)("div",{className:"home__row",children:Object(a.jsx)(f,{id:"90829332",title:"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440",price:1094.98,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/81r8JazRcoL._AC_SL1500_.jpg"})}),Object(a.jsxs)("div",{className:"home__row",children:[Object(a.jsx)(f,{id:"903850",title:"2021 1080P Streaming Business Webcam with Microphone & Privacy Cover, AutoFocus, NexiGo N930P HD USB Web Camera, for Zoom Meeting YouTube Skype FaceTime",price:69.99,rating:5,image:"https://m.media-amazon.com/images/I/61KFXbnW13L._AC_UY218_.jpg"}),Object(a.jsx)(f,{id:"8903851",title:"SAMSUNG 85-inch Class QLED Q950T Series  Smart TV with Alexa Built-in (QN85Q950TSFXZA, 2020 Model",price:999.99,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/91GMSrYPaHL._AC_SL1500_.jpg"}),Object(a.jsx)(f,{id:"23445930",title:"Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric",price:98.99,rating:5,image:"https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"})]})]})})},S=c(10);c(75),c(76);var k=function(e){var t=e.id,c=e.image,n=e.title,i=e.price,s=e.rating,r=e.hideButton,o=p(),d=Object(l.a)(o,2),j=(d[0].basket,d[1]);return Object(a.jsxs)("div",{className:"checkoutProduct",children:[Object(a.jsx)("img",{className:"checkoutProduct__image",src:c}),Object(a.jsxs)("div",{className:"checkoutProduct__info",children:[Object(a.jsx)("p",{className:"checkoutProduct__title",children:n}),Object(a.jsxs)("p",{className:"checkoutProduct__price",children:[Object(a.jsx)("small",{children:"$"}),Object(a.jsx)("strong",{children:i})]}),Object(a.jsx)("div",{className:"checkoutProduct__rating",children:Array(s).fill().map((function(e,t){return Object(a.jsx)("p",{children:"\ud83c\udf1f"},t)}))}),!r&&Object(a.jsx)("button",{onClick:function(){j({type:"REMOVE_FROM_BASKET",id:t})},children:"Remove from Basket"})," "]})]})},C=(c(77),c(24)),y=c.n(C);var A=function(){var e=p(),t=Object(l.a)(e,2),c=t[0].basket,n=(t[1],Object(S.f)());return Object(a.jsxs)("div",{className:"subtotal",children:[Object(a.jsx)(y.a,{renderText:function(e){return Object(a.jsxs)("div",{children:[Object(a.jsxs)("p",{children:["Subtotal (",c.length," items): ",Object(a.jsx)("strong",{children:e})]}),Object(a.jsxs)("small",{className:"subtotal__gift",children:[Object(a.jsx)("input",{type:"checkbox"})," This order contains a gift"]})]})},decimalScale:2,value:function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return t.price+e}),0)}(c),displayType:"text",thousandSeparator:!0,prefix:"$"}),Object(a.jsx)("button",{onClick:function(e){return n.push("/payment")},children:"Proceed to Checkout"})]})};var E=function(){var e=p(),t=Object(l.a)(e,2),c=t[0].basket;return t[1],Object(a.jsxs)("div",{className:"checkout",children:[Object(a.jsxs)("div",{className:"checkout__left",children:[Object(a.jsx)("img",{className:"checkout__ad",src:"https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg",alt:""}),Object(a.jsx)("h3",{children:"Hello"}),Object(a.jsx)("h2",{className:"checkout__title",children:"Your shopping Basket"}),c.map((function(e){return Object(a.jsx)(k,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))]}),Object(a.jsx)("div",{className:"checkout__right",children:Object(a.jsx)(A,{})})]})};c(79);var T=function(){var e=Object(S.f)(),t=Object(n.useState)(""),c=Object(l.a)(t,2),i=c[0],s=c[1],r=Object(n.useState)(""),o=Object(l.a)(r,2),d=o[0],j=o[1];return Object(a.jsxs)("div",{className:"login",children:[Object(a.jsx)(h.b,{to:"/",children:Object(a.jsx)("img",{className:"login__logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"})}),Object(a.jsxs)("div",{className:"login__container",children:[Object(a.jsx)("h1",{children:"Sign-in"}),Object(a.jsxs)("form",{children:[Object(a.jsx)("h5",{children:"E-mail"}),Object(a.jsx)("input",{type:"text",value:i,onChange:function(e){return s(e.target.value)}}),Object(a.jsx)("h5",{children:"Password"}),Object(a.jsx)("input",{type:"password",value:d,onChange:function(e){return j(e.target.value)}}),Object(a.jsx)("button",{type:"submit",onClick:function(t){t.preventDefault(),g.signInWithEmailAndPassword(i,d).then((function(t){e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__signInButton",children:"Sign In"})]}),Object(a.jsx)("p",{children:"By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice."}),Object(a.jsx)("button",{onClick:function(t){t.preventDefault(),g.createUserWithEmailAndPassword(i,d).then((function(t){t&&e.push("/")})).catch((function(e){return console.log(e.message)}))},className:"login__registerButton",children:"Create your Amazon Account"})]})]})},P=c(26),B=c.n(P),w=c(35),L=(c(81),c(23)),I=c(53),M=c.n(I).a.create({baseURL:"https://us-central1-fir-eb03f.cloudfunctions.net/api"});var G=function(){var e=p(),t=Object(l.a)(e,2),c=t[0],i=c.basket,s=c.user,r=t[1],o=Object(S.f)(),d=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return t.price+e}),0)},j=Object(L.useStripe)(),u=Object(L.useElements)(),m=Object(n.useState)(null),b=Object(l.a)(m,2),O=b[0],x=b[1],g=Object(n.useState)(!0),v=Object(l.a)(g,2),f=v[0],N=v[1],C=Object(n.useState)(!1),A=Object(l.a)(C,2),E=A[0],T=A[1],P=Object(n.useState)(""),I=Object(l.a)(P,2),G=I[0],R=I[1],z=Object(n.useState)(!0),D=Object(l.a)(z,2),U=D[0],F=D[1];Object(n.useEffect)((function(){(function(){var e=Object(w.a)(B.a.mark((function e(){var t;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M({method:"post",url:"/payments/create?total=".concat(100*d(i))});case 2:t=e.sent,F(t.data.clientSecret);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[i]),console.log("THE SECRET IS >>>",U);var K=function(){var e=Object(w.a)(B.a.mark((function e(t){return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),R(!0),e.next=4,j.confirmCardPayment(U,{payment_method:{card:u.getElement(L.CardElement)}}).then((function(e){var t=e.paymentIntent;_.collection("users").doc(null===s||void 0===s?void 0:s.uid).collection("orders").doc(t.id).set({basket:i,amount:t.amount,created:t.created}),T(!0),x(null),R(!1),r({type:"EMPTY_BASKET"}),o.replace("/orders")}));case 4:e.sent;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsx)("div",{className:"payment",children:Object(a.jsxs)("div",{className:"payment__container",children:[Object(a.jsxs)("h1",{children:["Checkout (",Object(a.jsxs)(h.b,{to:"/checkout",children:[null===i||void 0===i?void 0:i.length," items"]}),")"]}),Object(a.jsxs)("div",{className:"payment__section",children:[Object(a.jsx)("div",{className:"payment__title",children:Object(a.jsx)("h3",{children:"Delivery Address"})}),Object(a.jsxs)("div",{className:"payment__address",children:[Object(a.jsx)("p",{children:null===s||void 0===s?void 0:s.email}),Object(a.jsx)("p",{children:"123 React Lane"}),Object(a.jsx)("p",{children:"West Palm Beach, FL"})]})]}),Object(a.jsxs)("div",{className:"payment__section",children:[Object(a.jsx)("div",{className:"payment__title",children:Object(a.jsx)("h3",{children:"Review items and delivery"})}),Object(a.jsx)("div",{className:"payment__items",children:i.map((function(e){return Object(a.jsx)(k,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))})]}),Object(a.jsxs)("div",{className:"payment__section",children:[Object(a.jsx)("div",{className:"payment__title",children:Object(a.jsx)("h3",{children:"Payment Method"})}),Object(a.jsx)("div",{className:"payment__details",children:Object(a.jsxs)("form",{onSubmit:K,children:[Object(a.jsx)(L.CardElement,{onChange:function(e){N(e.empty),x(e.error?e.error.message:"")}}),Object(a.jsxs)("div",{className:"payment__priceContainer",children:[Object(a.jsx)(y.a,{renderText:function(e){return Object(a.jsxs)("h3",{children:["Order Total: ",e]})},decimalScale:2,value:d(i),displayType:"text",thousandSeparator:!0,prefix:"$"}),Object(a.jsx)("button",{disabled:G||f||E,children:Object(a.jsx)("span",{children:G?Object(a.jsx)("p",{children:"Processing"}):"Buy Now"})})]}),O&&Object(a.jsx)("div",{children:O})]})})]})]})})},R=c(54),z=(c(98),c(55)),D=c.n(z);var U=function(e){var t,c=e.order;return Object(a.jsxs)("div",{className:"order",children:[Object(a.jsx)("h2",{children:"Order"}),Object(a.jsx)("p",{children:D.a.unix(c.data.created).format("MMMM Do YYYY, h:mma")}),Object(a.jsx)("p",{className:"order__id",children:Object(a.jsx)("small",{children:c.id})}),null===(t=c.data.basket)||void 0===t?void 0:t.map((function(e){return Object(a.jsx)(k,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating,hideButton:!0})})),Object(a.jsx)(y.a,{renderText:function(e){return Object(a.jsxs)("h3",{className:"order__total",children:["Order Total: ",e]})},decimalScale:2,value:c.data.amount/100,displayType:"text",thousandSeparator:!0,prefix:"$"})]})};c(100);var F=function(){var e=p(),t=Object(l.a)(e,2),c=t[0],i=(c.basket,c.user),s=(t[1],Object(n.useState)([])),r=Object(l.a)(s,2),o=r[0],d=r[1];return Object(n.useEffect)((function(){i?_.collection("users").doc(null===i||void 0===i?void 0:i.uid).collection("orders").orderBy("created","desc").onSnapshot((function(e){return d(e.docs.map((function(e){return{id:e.id,data:e.data()}})))})):d([])}),[i]),Object(a.jsxs)("div",{className:"orders",children:[Object(a.jsx)("h1",{children:"Your Orders"}),Object(a.jsx)("div",{className:"orders__order",children:null===o||void 0===o?void 0:o.map((function(e){return Object(a.jsx)(U,{order:e})}))})]})},K=Object(R.a)("pk_test_51IQz7rCKirF1K5svee9grs2IVdZN2WmcRhZMYhHi70m0ooUwMDvNhB8pceRVhu15dkuzLuBuMT7tKlCydNmDq1a100suUeAlwk");var W=function(){var e=p(),t=Object(l.a)(e,2);Object(o.a)(t[0]);var c=t[1];return Object(n.useEffect)((function(){g.onAuthStateChanged((function(e){c(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}))}),[]),Object(a.jsx)(h.a,{children:Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)(S.c,{children:[Object(a.jsxs)(S.a,{path:"/orders",children:[Object(a.jsx)(v,{}),Object(a.jsx)(F,{})]}),Object(a.jsx)(S.a,{path:"/login",children:Object(a.jsx)(T,{})}),Object(a.jsx)(S.a,{path:"/payment",children:Object(a.jsx)(L.Elements,{stripe:K,children:Object(a.jsx)(G,{})})}),Object(a.jsxs)(S.a,{path:"/checkout",children:[Object(a.jsx)(v,{}),Object(a.jsx)(E,{})]}),Object(a.jsxs)(S.a,{path:"/",children:[Object(a.jsx)(v,{}),Object(a.jsx)(N,{})]})]})})})},Y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,114)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,i=t.getLCP,s=t.getTTFB;c(e),a(e),n(e),i(e),s(e)}))},H=c(37),V=c(21),Q=function(e,t){switch(console.log(t),t.type){case"ADD_TO_BASKET":return Object(V.a)(Object(V.a)({},e),{},{basket:[].concat(Object(H.a)(e.basket),[t.item])});case"EMPTY_BASKET":return Object(V.a)(Object(V.a)({},e),{},{basket:[]});case"REMOVE_FROM_BASKET":var c=e.basket.findIndex((function(e){return e.id===t.id})),a=Object(H.a)(e.basket);return c>=0?a.splice(c,1):console.warn("Cant remove product (id: ".concat(t.id,") as its not in basket!")),Object(V.a)(Object(V.a)({},e),{},{basket:a});case"SET_USER":return Object(V.a)(Object(V.a)({},e),{},{user:t.user});default:return e}};r.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(O,{initialState:{basket:[],user:null},reducer:Q,children:Object(a.jsx)(W,{})})}),document.getElementById("root")),Y()},62:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){},76:function(e,t,c){},77:function(e,t,c){},79:function(e,t,c){},81:function(e,t,c){},98:function(e,t,c){}},[[102,1,2]]]);
//# sourceMappingURL=main.d33a2eb2.chunk.js.map