(this["webpackJsonpreact-epic-teach"]=this["webpackJsonpreact-epic-teach"]||[]).push([[2],{107:function(e,t,n){"use strict";n.r(t);var r,i,o,c,a,s,u=n(0),l=n(26),p=n.n(l),b=(n(99),n(31)),f=n.p+"static/media/logo.6ce24c58.svg",j=n(45),O=n(12),h=n(32),y=n(108),g=n(75),d=n(78),m=n(6),v=h.a.header(r||(r=Object(b.a)(["\n    display:flex;\n    align-items:center;\n    padding:10px 100px;\n    background-color:#02101f;\n    color:#fff\n"]))),w=h.a.img(i||(i=Object(b.a)(["\n    height:30px\n"]))),x=Object(h.a)(j.b)(o||(o=Object(b.a)(["\n    color:#fff;\n    margin-left:30px;\n\n    &.active {\n        border-bottom:1px solid #fff\n    }\n"]))),U=h.a.div(c||(c=Object(b.a)(["\n    margin-left:auto\n"]))),P=Object(h.a)(y.a)(a||(a=Object(b.a)(["\n    margin-left:10px\n"]))),k=Object(d.a)((function(){var e=Object(O.f)(),t=Object(g.a)(),n=t.UserStore,r=t.AuthStore;return Object(m.jsxs)(v,{children:[Object(m.jsx)(w,{src:f}),Object(m.jsxs)("nav",{children:[Object(m.jsx)(x,{to:"/",activeClassName:"active",exact:!0,children:"\u9996\u9875"}),Object(m.jsx)(x,{to:"/history",activeClassName:"active",children:"\u4e0a\u4f20\u5386\u53f2"}),Object(m.jsx)(x,{to:"/about",activeClassName:"active",children:"\u5173\u4e8e\u6211"})]}),Object(m.jsx)(U,{children:n.currentUser?Object(m.jsxs)(m.Fragment,{children:[n.currentUser.attributes.username,Object(m.jsx)(P,{type:"primary",onClick:function(){r.logout()},children:"\u6ce8\u9500"})]}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(P,{type:"primary",onClick:function(){console.log("\u8df3\u8f6c\u5230\u767b\u5f55\u9875\u9762"),e.push("/login")},children:"\u767b\u5f55"}),Object(m.jsx)(P,{type:"primary",onClick:function(){console.log("\u8df3\u8f6c\u5230\u6ce8\u518c\u9875\u9762"),e.push("/register")},children:"\u6ce8\u518c"})]})})]})})),F=h.a.footer(s||(s=Object(b.a)(["\n  padding:10px 100px;\n  text-align:center;\n    font-size:12px;\n    color:#aaa\n"])));var z=function(){return Object(m.jsx)(F,{children:Object(m.jsx)("h1",{children:"Footer"})})};function D(){return Object(m.jsx)("div",{children:"Loading..."})}var L=Object(u.lazy)((function(){return Promise.all([n.e(0),n.e(6),n.e(9)]).then(n.bind(null,250))})),C=Object(u.lazy)((function(){return Promise.all([n.e(0),n.e(5),n.e(8)]).then(n.bind(null,252))})),S=Object(u.lazy)((function(){return n.e(7).then(n.bind(null,242))})),I=Object(u.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(10)]).then(n.bind(null,243))})),A=Object(u.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(11)]).then(n.bind(null,244))}));var H=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(k,{}),Object(m.jsx)("main",{children:Object(m.jsx)(u.Suspense,{fallback:Object(m.jsx)(D,{}),children:Object(m.jsxs)(O.c,{children:[Object(m.jsx)(O.a,{path:"/",component:L,exact:!0}),Object(m.jsx)(O.a,{path:"/history",component:C}),Object(m.jsx)(O.a,{path:"/about",component:S}),Object(m.jsx)(O.a,{path:"/login",component:I}),Object(m.jsx)(O.a,{path:"/register",component:A})]})})}),Object(m.jsx)(z,{})]})},M=(n(106),function(e){e&&e instanceof Function&&n.e(12).then(n.bind(null,245)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),r(e),i(e),o(e),c(e)}))});p.a.render(Object(m.jsx)(j.a,{children:Object(m.jsx)(H,{})}),document.getElementById("root")),M()},75:function(e,t,n){"use strict";n.d(t,"a",(function(){return I}));var r=n(0),i=n(21),o=n(33),c=n(34),a=n(8),s=(n(57),n(3)),u=n(27),l=n.n(u);l.a.init({appId:"Cb2kHDHQRxl9C9Y4Ofleb1CA-gzGzoHsz",appKey:"HQ09DSXRA2ltOOCwch8QXiiy",serverURL:"https://cb2khdhq.lc-cn-n1-shared.com"});var p,b,f={register:function(e,t){var n=new u.User;return n.setUsername(e),n.setPassword(t),new Promise((function(e,t){n.signUp().then((function(t){return e(t)}),(function(e){return t(e)}))}))},login:function(e,t){return new Promise((function(n,r){l.a.User.logIn(e,t).then((function(e){return n(e)}),(function(e){return r(e)}))}))},logout:function(){u.User.logOut()},getCurrentUser:function(){return u.User.current()}},j={add:function(e,t){var n=new l.a.Object("Image"),r=new l.a.File(t,e);return n.set("filename",t),n.set("owner",l.a.User.current()),n.set("url",r),new Promise((function(e,t){n.save().then((function(t){return e(t)}),(function(e){return t(e)}))}))},find:function(e){var t=e.page,n=void 0===t?0:t,r=e.limit,i=void 0===r?10:r,o=new l.a.Query("Image");return o.include("owner"),o.limit(i),o.skip(n*i),o.descending("createdAt"),o.equalTo("owner",l.a.User.current()),new Promise((function(e,t){o.find().then((function(t){return e(t)})).catch((function(e){return t(e)}))}))}};window.Auth=f,window.Uploader=j;var O,h,y,g,d,m,v,w,x,U,P,k,F=new(p=function(){function e(){Object(o.a)(this,e),Object(i.a)(this,"currentUser",b,this),Object(s.m)(this)}return Object(c.a)(e,[{key:"pullUser",value:function(){this.currentUser=f.getCurrentUser()}},{key:"resetUser",value:function(){this.currentUser=null}}]),e}(),b=Object(a.a)(p.prototype,"currentUser",[s.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Object(a.a)(p.prototype,"pullUser",[s.f],Object.getOwnPropertyDescriptor(p.prototype,"pullUser"),p.prototype),Object(a.a)(p.prototype,"resetUser",[s.f],Object.getOwnPropertyDescriptor(p.prototype,"resetUser"),p.prototype),p),z=n(94),D=new(O=function(){function e(){Object(o.a)(this,e),Object(i.a)(this,"list",h,this),Object(i.a)(this,"isLoading",y,this),Object(i.a)(this,"hasMore",g,this),Object(i.a)(this,"page",d,this),this.limit=10,Object(s.m)(this)}return Object(c.a)(e,[{key:"append",value:function(e){this.list=this.list.concat(e)}},{key:"find",value:function(){var e=this;this.isLoading=!0,j.find({page:this.page,limit:this.limit}).then((function(t){e.append(t),t.length<e.limit&&(e.hasMore=!1)})).catch((function(e){z.b.error("\u52a0\u8f7d\u6570\u636e\u5931\u8d25")})).finally((function(){e.isLoading=!1}))}},{key:"reset",value:function(){this.list=[],this.isLoading=!1,this.hasMore=!0,this.page=0}}]),e}(),h=Object(a.a)(O.prototype,"list",[s.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),y=Object(a.a)(O.prototype,"isLoading",[s.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),g=Object(a.a)(O.prototype,"hasMore",[s.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!0}}),d=Object(a.a)(O.prototype,"page",[s.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),Object(a.a)(O.prototype,"append",[s.f],Object.getOwnPropertyDescriptor(O.prototype,"append"),O.prototype),Object(a.a)(O.prototype,"find",[s.f],Object.getOwnPropertyDescriptor(O.prototype,"find"),O.prototype),Object(a.a)(O.prototype,"reset",[s.f],Object.getOwnPropertyDescriptor(O.prototype,"reset"),O.prototype),O),L=new(m=function(){function e(){Object(o.a)(this,e),Object(i.a)(this,"filename",v,this),Object(i.a)(this,"file",w,this),Object(i.a)(this,"isUpLoading",x,this),Object(i.a)(this,"serverFile",U,this),Object(s.m)(this)}return Object(c.a)(e,[{key:"setFilename",value:function(e){this.filename=e}},{key:"setFile",value:function(e){this.file=e}},{key:"upload",value:function(){var e=this;return this.isUpLoading=!0,this.serverFile=null,new Promise((function(t,n){j.add(e.file,e.filename).then((function(n){e.serverFile=n,t(n)})).catch((function(e){z.b.error("\u4e0a\u4f20\u5931\u8d25"),n(e)})).finally((function(){e.isUpLoading=!1}))}))}},{key:"reset",value:function(){this.isUpLoading=!1,this.serverFile=null}}]),e}(),v=Object(a.a)(m.prototype,"filename",[s.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),w=Object(a.a)(m.prototype,"file",[s.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),x=Object(a.a)(m.prototype,"isUpLoading",[s.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),U=Object(a.a)(m.prototype,"serverFile",[s.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Object(a.a)(m.prototype,"setFilename",[s.f],Object.getOwnPropertyDescriptor(m.prototype,"setFilename"),m.prototype),Object(a.a)(m.prototype,"setFile",[s.f],Object.getOwnPropertyDescriptor(m.prototype,"setFile"),m.prototype),Object(a.a)(m.prototype,"upload",[s.f],Object.getOwnPropertyDescriptor(m.prototype,"upload"),m.prototype),Object(a.a)(m.prototype,"reset",[s.f],Object.getOwnPropertyDescriptor(m.prototype,"reset"),m.prototype),m),C=new(P=function(){function e(){Object(o.a)(this,e),Object(i.a)(this,"values",k,this),Object(s.m)(this)}return Object(c.a)(e,[{key:"setIsLogin",value:function(e){this.isLogin=e}},{key:"setUsername",value:function(e){this.values.username=e}},{key:"setPassword",value:function(e){this.values.password=e}},{key:"login",value:function(){var e=this;return new Promise((function(t,n){f.login(e.values.username,e.values.password).then((function(e){F.pullUser(),t(e)})).catch((function(e){F.resetUser(),z.b.error("\u767b\u5f55\u5931\u8d25"),n(e)}))}))}},{key:"register",value:function(){var e=this;return new Promise((function(t,n){f.register(e.values.username,e.values.password).then((function(e){F.pullUser(),t(e)})).catch((function(e){F.resetUser(),z.b.error("\u6ce8\u518c\u5931\u8d25"),n(e)}))}))}},{key:"logout",value:function(){f.logout(),F.resetUser(),D.reset(),L.reset()}}]),e}(),k=Object(a.a)(P.prototype,"values",[s.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{username:"",password:""}}}),Object(a.a)(P.prototype,"setIsLogin",[s.f],Object.getOwnPropertyDescriptor(P.prototype,"setIsLogin"),P.prototype),Object(a.a)(P.prototype,"setUsername",[s.f],Object.getOwnPropertyDescriptor(P.prototype,"setUsername"),P.prototype),Object(a.a)(P.prototype,"setPassword",[s.f],Object.getOwnPropertyDescriptor(P.prototype,"setPassword"),P.prototype),Object(a.a)(P.prototype,"login",[s.f],Object.getOwnPropertyDescriptor(P.prototype,"login"),P.prototype),Object(a.a)(P.prototype,"register",[s.f],Object.getOwnPropertyDescriptor(P.prototype,"register"),P.prototype),Object(a.a)(P.prototype,"logout",[s.f],Object.getOwnPropertyDescriptor(P.prototype,"logout"),P.prototype),P),S=Object(r.createContext)({AuthStore:C,UserStore:F,ImageStore:L,HistoryStore:D});window.stores={AuthStore:C,UserStore:F,ImageStore:L,HistoryStore:D};var I=function(){return Object(r.useContext)(S)}},99:function(e,t,n){}},[[107,3,4]]]);
//# sourceMappingURL=main.f874a1aa.chunk.js.map