(this.webpackJsonptodo_app=this.webpackJsonptodo_app||[]).push([[0],{51:function(e,n,t){},52:function(e,n,t){},53:function(e,n,t){},61:function(e,n,t){"use strict";t.r(n);var o=t(11),i=t(2),a=t.n(i),c=t(19),r=t.n(c),s=(t(51),t(35)),d=(t(52),t(80)),l=t(83),u=t(82),p=t(81),f=(t(53),t(77)),h=t(78),j=t(79),b=t(84);var g=function(e){return Object(o.jsx)(f.a,{className:"todo__list",children:Object(o.jsxs)(h.a,{children:[Object(o.jsx)(j.a,{}),Object(o.jsx)(b.a,{primary:e.text,secondary:"Dummy deadline"})]})})},v=t(32),m=v.a.initializeApp({apiKey:"AIzaSyBYVo7GQbjZuQS9QgjxFN2qCZFNjJgMOHY",authDomain:"todo-app-222b1.firebaseapp.com",projectId:"todo-app-222b1",storageBucket:"todo-app-222b1.appspot.com",messagingSenderId:"107178331168",appId:"1:107178331168:web:151b3c0edd36ca135c0045",measurementId:"G-YDWWHG5EWC"}).firestore();var w=function(){var e=Object(i.useState)([]),n=Object(s.a)(e,2),t=n[0],a=n[1],c=Object(i.useState)(""),r=Object(s.a)(c,2),f=r[0],h=r[1];return Object(i.useEffect)((function(){m.collection("todos").orderBy("timestamp","desc").onSnapshot((function(e){a(e.docs.map((function(e){return e.data().todo})))}))}),[]),Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("h1",{children:"Hello Sayeed!"}),Object(o.jsxs)("form",{children:[Object(o.jsxs)(d.a,{children:[Object(o.jsx)(l.a,{children:"? Write a Todo"}),Object(o.jsx)(u.a,{value:f,onChange:function(e){return h(e.target.value)}})]}),Object(o.jsx)(p.a,{disabled:!f,type:"submit",onClick:function(e){e.preventDefault(),m.collection("todos").add({todo:f,timestamp:v.a.firestore.FieldValue.serverTimestamp()}),h("")},variant:"contained",color:"primary",children:"Add Todo"})]}),Object(o.jsx)("ul",{children:t.map((function(e){return Object(o.jsx)(g,{text:e})}))})]})},O=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function x(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var k=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,85)).then((function(n){var t=n.getCLS,o=n.getFID,i=n.getFCP,a=n.getLCP,c=n.getTTFB;t(e),o(e),i(e),a(e),c(e)}))};r.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(w,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Todo_app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/Todo_app","/service-worker.js");O?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):x(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):x(n,e)}))}}(),k()}},[[61,1,2]]]);
//# sourceMappingURL=main.f44eccd6.chunk.js.map