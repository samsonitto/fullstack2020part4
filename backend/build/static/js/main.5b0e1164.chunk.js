(this.webpackJsonpblogilista=this.webpackJsonpblogilista||[]).push([[0],{17:function(e,t,n){e.exports=n(41)},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(16),c=n.n(r),u=n(6),o=n(3),i=n.n(o),s=n(4),d=n(1),m=function(e){return l.a.createElement("h1",null,e.text)},f=function(e){return l.a.createElement("input",{type:e.type,placeholder:e.placeholder,onChange:e.handleOnChange,id:e.id,value:e.value,name:e.name})},h=function(e){return l.a.createElement("h2",null,e.text)},p=function(e){return l.a.createElement("div",null,l.a.createElement(h,{text:"Search"}),"Filter by Name: ",l.a.createElement(f,{placeholder:"Name..",handleOnChange:e.handleFilterOnChange}))},g=function(e){return l.a.createElement("button",{onClick:e.handleClick,type:e.type},e.text)},E=function(e){var t=e.createBlog,n=e.showMessage,r=Object(a.useState)(""),c=Object(d.a)(r,2),u=c[0],o=c[1],i=Object(a.useState)(""),s=Object(d.a)(i,2),m=s[0],p=s[1],E=Object(a.useState)(""),b=Object(d.a)(E,2),v=b[0],O=b[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(h,{text:"Add New Blog"}),l.a.createElement("form",null,l.a.createElement("div",null,"Title: ",l.a.createElement(f,{placeholder:"Title..",handleOnChange:function(e){o(e.target.value)},id:"titleInput0"}),l.a.createElement("br",null),"Author: ",l.a.createElement(f,{placeholder:"Author..",handleOnChange:function(e){p(e.target.value)},id:"authorInput0"}),l.a.createElement("br",null),"Url: ",l.a.createElement(f,{placeholder:"Url..",handleOnChange:function(e){O(e.target.value)},id:"urlInput0"})),l.a.createElement("div",null,l.a.createElement(g,{type:"submit",handleClick:function(e){e.preventDefault(),""===u?n("Input title","error"):""===m?n("Input author","error"):""===v?n("Input url","error"):(t({title:u,author:m,url:v}),o(""),p(""),O(""))},text:"Add"}))))},b=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(h,{text:"Blogs"}),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Title"),l.a.createElement("th",null,"Author"),l.a.createElement("th",null,"URL"),l.a.createElement("th",null,"Likes"),l.a.createElement("th",null,"Like"),l.a.createElement("th",null,"Delete"))),l.a.createElement("tbody",null,e.blogs.map((function(t,n){return l.a.createElement("tr",{id:t.id,key:t.id},l.a.createElement("td",null,t.title),l.a.createElement("td",null,t.author),l.a.createElement("td",null,t.url),l.a.createElement("td",null,t.likes),l.a.createElement("td",null,l.a.createElement(g,{text:"like",handleClick:function(){return e.handleLikeClick(t)}})),l.a.createElement("td",null,l.a.createElement(g,{text:"delete",handleClick:function(){return e.handleDeleteClick(t.id,t.title)}})))})))))},v=n(5),O=n.n(v),j=null,k={getAll:function(){return O.a.get("/api/blogs").then((function(e){return e.data}))},create:function(){var e=Object(s.a)(i.a.mark((function e(t){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:j}},e.next=3,O.a.post("/api/blogs",t,n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),update:function(e){return O.a.put("".concat("/api/blogs","/").concat(e.id),e).then((function(e){return e.data}))},deleteBlog:function(e){return O.a.delete("".concat("/api/blogs","/").concat(e)).then((function(e){return e}))},setToken:function(e){j="bearer ".concat(e)}},w=function(e){var t=e.message,n=e.notClassName;return null===t?null:l.a.createElement("div",{className:n},t)},y=function(e){return l.a.createElement("form",{onSubmit:e.handleLogin},l.a.createElement("div",null,"username",l.a.createElement(f,{type:"text",value:e.username,name:"Username",handleOnChange:function(t){var n=t.target;return e.setUsername(n.value)}})),l.a.createElement("div",null,"password",l.a.createElement(f,{type:"password",value:e.password,name:"Password",handleOnChange:function(t){var n=t.target;return e.setPassword(n.value)}})),l.a.createElement(g,{type:"submit",text:"Login"}))},C={login:function(){var e=Object(s.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},x=(n(40),l.a.forwardRef((function(e,t){var n=Object(a.useState)(!1),r=Object(d.a)(n,2),c=r[0],u=r[1],o={display:c?"none":""},i={display:c?"":"none"},s=function(){u(!c)};return Object(a.useImperativeHandle)(t,(function(){return{toggleVisibility:s}})),l.a.createElement("div",null,l.a.createElement("div",{style:o},l.a.createElement(g,{handleClick:s,text:e.buttonLabel})),l.a.createElement("div",{style:i},e.children,l.a.createElement(g,{handleClick:s,text:"Cancel"})))}))),S=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),o=Object(d.a)(c,2),f=(o[0],o[1]),h=Object(a.useState)(""),v=Object(d.a)(h,2),O=(v[0],v[1]),j=Object(a.useState)(""),S=Object(d.a)(j,2),B=(S[0],S[1]),I=Object(a.useState)(""),L=Object(d.a)(I,2),N=(L[0],L[1]),A=Object(a.useState)(n),U=Object(d.a)(A,2),T=U[0],D=U[1],F=Object(a.useState)(null),J=Object(d.a)(F,2),M=J[0],P=J[1],R=Object(a.useState)(null),V=Object(d.a)(R,2),z=V[0],H=V[1],Y=Object(a.useState)(""),q=Object(d.a)(Y,2),G=q[0],K=q[1],Q=Object(a.useState)(""),W=Object(d.a)(Q,2),X=W[0],Z=W[1],$=Object(a.useState)(null),_=Object(d.a)($,2),ee=_[0],te=_[1];Object(a.useEffect)((function(){k.getAll().then((function(e){r(e),console.log(e),D(e)})).catch((function(e){re("Error caught: ".concat(e),"error")}))}),[]),Object(a.useEffect)((function(){var e=window.localStorage.getItem("loggedBlogappUser");if(e){var t=JSON.parse(e);te(t),k.setToken(t.token)}}),[]);var ne=function(){var e=Object(s.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,C.login({username:G,password:X});case 4:n=e.sent,window.localStorage.setItem("loggedBlogappUser",JSON.stringify(n)),k.setToken(n.token),te(n),K(""),Z(""),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),re("wrong credentials","error");case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}(),ae=function(){var e=Object(s.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,ce.current.toggleVisibility(),e.next=4,k.create(t);case 4:a=e.sent,r(n.concat(a.savedBlog)),D(n.concat(a.savedBlog)),re("Added ".concat(a.savedBlog.title),"success"),le(),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),re(e.t0,"error");case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),le=function(){f(""),O(""),B(""),N(""),document.getElementById("titleInput0").value="",document.getElementById("authorInput0").value="",document.getElementById("urlInput0").value=""},re=function(e,t){P(e),H(t),setTimeout((function(){P(null),H(null)}),5e3)},ce=l.a.createRef();return null===ee?l.a.createElement("div",null,l.a.createElement(m,{text:"Bloglist"}),l.a.createElement(w,{message:M,notClassName:z}),l.a.createElement(x,{buttonLabel:"Login"},l.a.createElement(y,{handleLogin:ne,username:G,setUsername:K,password:X,setPassword:Z}))):l.a.createElement("div",null,l.a.createElement(m,{text:"Bloglist"}),l.a.createElement(w,{message:M,notClassName:z}),l.a.createElement("p",null,ee.name," logged in"),l.a.createElement(g,{text:"logout",handleClick:function(){console.log("logging out"),te(null),window.localStorage.clear()}}),l.a.createElement(x,{buttonLabel:"New Blog",ref:ce},l.a.createElement(E,{createBlog:ae,showMessage:re})),l.a.createElement(p,{handleFilterOnChange:function(e){var t=n.filter((function(t){return t.title.toLowerCase().includes(e.target.value.toLowerCase())}));D(t)}}),l.a.createElement(b,{blogs:T,handleDeleteClick:function(e,t){var a="Do you really want to delete ".concat(t,"?");window.confirm(a)&&k.deleteBlog(e).then((function(t){r(n.filter((function(t){return t.id!==e}))),D(n.filter((function(t){return t.id!==e})))})).catch((function(e){re("".concat(t," has already been removed from the server"),"error")}))},handleLikeClick:function(e){var t=Object(u.a)(Object(u.a)({},e),{},{likes:e.likes+=1});k.update(t).then((function(){r(n),re("You liked ".concat(t.title),"success")}))}}))};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(S,null)),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.5b0e1164.chunk.js.map