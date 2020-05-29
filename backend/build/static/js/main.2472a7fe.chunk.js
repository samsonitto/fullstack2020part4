(this.webpackJsonpblogilista=this.webpackJsonpblogilista||[]).push([[0],{17:function(e,t,n){e.exports=n(41)},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(16),c=n.n(l),u=n(6),o=n(3),i=n.n(o),s=n(4),d=n(1),m=function(e){return r.a.createElement("h1",null,e.text)},f=function(e){return r.a.createElement("input",{type:e.type,placeholder:e.placeholder,onChange:e.handleOnChange,id:e.id,value:e.value,name:e.name})},p=function(e){return r.a.createElement("h2",null,e.text)},g=function(e){return r.a.createElement("div",null,r.a.createElement(p,{text:"Search"}),"Filter by Name: ",r.a.createElement(f,{placeholder:"Name..",handleOnChange:e.handleFilterOnChange}))},h=function(e){return r.a.createElement("button",{onClick:e.handleClick,type:e.type},e.text)},b=function(e){var t=e.createBlog,n=e.showMessage,l=Object(a.useState)(""),c=Object(d.a)(l,2),u=c[0],o=c[1],i=Object(a.useState)(""),s=Object(d.a)(i,2),m=s[0],g=s[1],b=Object(a.useState)(""),E=Object(d.a)(b,2),v=E[0],O=E[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,{text:"Add New Blog"}),r.a.createElement("form",null,r.a.createElement("div",null,"Title: ",r.a.createElement(f,{placeholder:"Title..",handleOnChange:function(e){o(e.target.value)},id:"titleInput0"}),r.a.createElement("br",null),"Author: ",r.a.createElement(f,{placeholder:"Author..",handleOnChange:function(e){g(e.target.value)},id:"authorInput0"}),r.a.createElement("br",null),"Url: ",r.a.createElement(f,{placeholder:"Url..",handleOnChange:function(e){O(e.target.value)},id:"urlInput0"})),r.a.createElement("div",null,r.a.createElement(h,{type:"submit",handleClick:function(e){e.preventDefault(),""===u?n("Input title","error"):""===m?n("Input author","error"):""===v?n("Input url","error"):(t({title:u,author:m,url:v}),o(""),g(""),O(""))},text:"Add"}))))},E=r.a.forwardRef((function(e,t){var n=Object(a.useState)(!1),l=Object(d.a)(n,2),c=l[0],u=l[1],o={display:c?"none":""},i={display:c?"":"none"},s=function(){u(!c)};return Object(a.useImperativeHandle)(t,(function(){return{toggleVisibility:s}})),r.a.createElement("div",null,r.a.createElement("div",{style:o},r.a.createElement(h,{handleClick:s,text:e.buttonLabel})),r.a.createElement("div",{style:i},e.children,r.a.createElement(h,{handleClick:s,text:e.buttonHideLabel})))})),v=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,{text:"Blogs"}),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Title"),r.a.createElement("th",null,"Info"))),r.a.createElement("tbody",null,e.blogs.map((function(t,n){return r.a.createElement(r.a.Fragment,null,r.a.createElement("tr",{id:t.id,key:t.id},r.a.createElement("td",null,t.title),r.a.createElement("td",null,r.a.createElement(E,{buttonLabel:"View",buttonHideLabel:"Hide Info"},r.a.createElement("div",null,r.a.createElement("p",null,"Author: ",t.author),r.a.createElement("p",null,"URL: ",t.url),r.a.createElement("p",null,"Likes: ",t.likes," ",r.a.createElement(h,{text:"like",handleClick:function(){return e.handleLikeClick(t)}})),r.a.createElement("p",null,"Added by: ",t.user?t.user.name:""),r.a.createElement(h,{text:"Delete Blog",handleClick:function(){return e.handleDeleteClick(t.id,t.title)}}))))))})))))},O=n(5),w=n.n(O),k=null,j={getAll:function(){return w.a.get("/api/blogs").then((function(e){return e.data}))},create:function(){var e=Object(s.a)(i.a.mark((function e(t){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:k}},e.next=3,w.a.post("/api/blogs",t,n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),update:function(e){return w.a.put("".concat("/api/blogs","/").concat(e.id),e).then((function(e){return e.data}))},deleteBlog:function(e){return w.a.delete("".concat("/api/blogs","/").concat(e)).then((function(e){return e}))},setToken:function(e){k="bearer ".concat(e)}},y=function(e){var t=e.message,n=e.notClassName;return null===t?null:r.a.createElement("div",{className:n},t)},C=function(e){return r.a.createElement("form",{onSubmit:e.handleLogin},r.a.createElement("div",null,"username",r.a.createElement(f,{type:"text",value:e.username,name:"Username",handleOnChange:function(t){var n=t.target;return e.setUsername(n.value)}})),r.a.createElement("div",null,"password",r.a.createElement(f,{type:"password",value:e.password,name:"Password",handleOnChange:function(t){var n=t.target;return e.setPassword(n.value)}})),r.a.createElement(h,{type:"submit",text:"Login"}))},x={login:function(){var e=Object(s.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},S=(n(40),function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)(""),o=Object(d.a)(c,2),f=(o[0],o[1]),p=Object(a.useState)(n),O=Object(d.a)(p,2),w=O[0],k=O[1],S=Object(a.useState)(null),B=Object(d.a)(S,2),I=B[0],L=B[1],A=Object(a.useState)(null),N=Object(d.a)(A,2),U=N[0],T=N[1],D=Object(a.useState)(""),F=Object(d.a)(D,2),H=F[0],J=F[1],M=Object(a.useState)(""),P=Object(d.a)(M,2),R=P[0],V=P[1],z=Object(a.useState)(null),Y=Object(d.a)(z,2),q=Y[0],G=Y[1];Object(a.useEffect)((function(){j.getAll().then((function(e){l(e),console.log(e),k(e)})).catch((function(e){X("Error caught: ".concat(e),"error")}))}),[]),Object(a.useEffect)((function(){var e=window.localStorage.getItem("loggedBlogappUser");if(e){var t=JSON.parse(e);G(t),j.setToken(t.token)}}),[]);var K=function(){var e=Object(s.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,x.login({username:H,password:R});case 4:n=e.sent,window.localStorage.setItem("loggedBlogappUser",JSON.stringify(n)),j.setToken(n.token),G(n),J(""),V(""),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),X("wrong credentials","error");case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}(),Q=function(){var e=Object(s.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,Z.current.toggleVisibility(),e.next=4,j.create(t);case 4:a=e.sent,l(n.concat(a.savedBlog)),k(n.concat(a.savedBlog)),X("Added ".concat(a.savedBlog.title),"success"),W(),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),X(e.t0,"error");case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),W=function(){f(""),document.getElementById("titleInput0").value="",document.getElementById("authorInput0").value="",document.getElementById("urlInput0").value=""},X=function(e,t){L(e),T(t),setTimeout((function(){L(null),T(null)}),5e3)},Z=r.a.createRef();return null===q?r.a.createElement("div",null,r.a.createElement(m,{text:"Bloglist"}),r.a.createElement(y,{message:I,notClassName:U}),r.a.createElement(E,{buttonLabel:"Login",buttonHideLabel:"Cancel"},r.a.createElement(C,{handleLogin:K,username:H,setUsername:J,password:R,setPassword:V}))):r.a.createElement("div",null,r.a.createElement(m,{text:"Bloglist"}),r.a.createElement(y,{message:I,notClassName:U}),r.a.createElement("p",null,q.name," logged in"),r.a.createElement(h,{text:"logout",handleClick:function(){console.log("logging out"),G(null),window.localStorage.clear()}}),r.a.createElement(E,{buttonLabel:"New Blog",ref:Z,buttonHideLabel:"Cancel"},r.a.createElement(b,{createBlog:Q,showMessage:X})),r.a.createElement(g,{handleFilterOnChange:function(e){var t=n.filter((function(t){return t.title.toLowerCase().includes(e.target.value.toLowerCase())}));k(t)}}),r.a.createElement(v,{blogs:w,handleDeleteClick:function(e,t){var a="Do you really want to delete ".concat(t,"?");window.confirm(a)&&j.deleteBlog(e).then((function(t){l(n.filter((function(t){return t.id!==e}))),k(n.filter((function(t){return t.id!==e})))})).catch((function(e){X("".concat(t," has already been removed from the server"),"error")}))},handleLikeClick:function(e){var t=Object(u.a)(Object(u.a)({},e),{},{likes:e.likes+=1});j.update(t).then((function(){l(n),X("You liked ".concat(t.title),"success")})).catch((function(e){X(e,"error")}))}}))});c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.2472a7fe.chunk.js.map