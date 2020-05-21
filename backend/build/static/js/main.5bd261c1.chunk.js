(this.webpackJsonpblogilista=this.webpackJsonpblogilista||[]).push([[0],{15:function(e,t,n){e.exports=n(38)},37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var l=n(0),a=n.n(l),r=n(14),c=n.n(r),u=n(4),o=n(2),i=function(e){return a.a.createElement("h1",null,e.text)},d=function(e){return a.a.createElement("input",{type:e.type,placeholder:e.placeholder,onChange:e.handleOnChange,id:e.id})},h=function(e){return a.a.createElement("div",null,"Filter by Name: ",a.a.createElement(d,{placeholder:"Name..",handleOnChange:e.handleFilterOnChange}))},m=function(e){return a.a.createElement("button",{onClick:e.handleClick,type:e.type},e.text)},s=function(e){return a.a.createElement("h2",null,e.text)},f=function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(s,{text:"Add New Blog"}),a.a.createElement("form",null,a.a.createElement("div",null,"Title: ",a.a.createElement(d,{placeholder:"Title..",handleOnChange:e.handleAddTitleOnChange,id:"titleInput0"}),a.a.createElement("br",null),"Author: ",a.a.createElement(d,{placeholder:"Author..",handleOnChange:e.handleAddAuthorOnChange,id:"authorInput0"}),a.a.createElement("br",null),"Url: ",a.a.createElement(d,{placeholder:"Url..",handleOnChange:e.handleAddUrlOnChange,id:"urlInput0"})),a.a.createElement("div",null,a.a.createElement(m,{type:"submit",handleClick:e.handleAddClick,text:"Add"}))))},E=function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(s,{text:"Blogs"}),a.a.createElement("table",null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"Title"),a.a.createElement("th",null,"Author"),a.a.createElement("th",null,"URL"),a.a.createElement("th",null,"Likes"),a.a.createElement("th",null,"Like"),a.a.createElement("th",null,"Delete"))),a.a.createElement("tbody",null,e.blogs.map((function(t,n){return a.a.createElement("tr",{id:t.id,key:t.id},a.a.createElement("td",null,t.title),a.a.createElement("td",null,t.author),a.a.createElement("td",null,t.url),a.a.createElement("td",null,t.likes),a.a.createElement("td",null,a.a.createElement(m,{text:"like",handleClick:function(){return e.handleLikeClick(t)}})),a.a.createElement("td",null,a.a.createElement(m,{text:"delete",handleClick:function(){return e.handleDeleteClick(t.id,t.title)}})))})))))},g=n(3),p=n.n(g),b=function(){return p.a.get("/api/blogs").then((function(e){return e.data}))},O=function(e){return p.a.post("/api/blogs",e).then((function(e){return e.data}))},C=function(e){return p.a.put("".concat("/api/blogs","/").concat(e.id),e).then((function(e){return e.data}))},k=function(e){return p.a.delete("".concat("/api/blogs","/").concat(e)).then((function(e){return e}))},v=function(e){var t=e.message,n=e.notClassName;return null===t?null:a.a.createElement("div",{className:n},t)},j=(n(37),function(){var e=Object(l.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1],c=Object(l.useState)(""),d=Object(o.a)(c,2),m=d[0],s=d[1],g=Object(l.useState)(""),p=Object(o.a)(g,2),j=p[0],A=p[1],y=Object(l.useState)(""),I=Object(o.a)(y,2),x=I[0],S=I[1],w=Object(l.useState)(""),B=Object(o.a)(w,2),L=(B[0],B[1]),T=Object(l.useState)(n),N=Object(o.a)(T,2),U=N[0],D=N[1],F=Object(l.useState)(null),J=Object(o.a)(F,2),M=J[0],R=J[1],Y=Object(l.useState)(null),q=Object(o.a)(Y,2),z=q[0],G=q[1];Object(l.useEffect)((function(){b().then((function(e){r(e),console.log(e),D(e)})).catch((function(e){K("Error caught: ".concat(e),"error")}))}),[]);var H=function(){s(""),A(""),S(""),L(""),document.getElementById("titleInput0").value="",document.getElementById("authorInput0").value="",document.getElementById("urlInput0").value=""},K=function(e,t){R(e),G(t),setTimeout((function(){R(null),G(null)}),5e3)};return a.a.createElement("div",null,a.a.createElement(i,{text:"Bloglist"}),a.a.createElement(v,{message:M,notClassName:z}),a.a.createElement(h,{handleFilterOnChange:function(e){var t=n.filter((function(t){return t.title.toLowerCase().includes(e.target.value.toLowerCase())}));D(t)}}),a.a.createElement(f,{handleAddTitleOnChange:function(e){s(e.target.value)},handleAddAuthorOnChange:function(e){A(e.target.value)},handleAddUrlOnChange:function(e){S(e.target.value)},handleAddClick:function(e){if(e.preventDefault(),""===m)alert("Input Title");else if(""===j)alert("Input Author");else if(""===x)alert("Input Url");else{var t={title:m,author:j,url:x,likes:0};console.log("step0"),O(t).then((function(e){r(n.concat(e)),D(n.concat(e)),H(),K("Added ".concat(m),"success")})).catch((function(e){console.log(e.response.data),K("".concat(e.response.data.error),"error")}))}}}),a.a.createElement(E,{blogs:U,handleDeleteClick:function(e,t){var l="Do you really want to delete ".concat(t,"?");window.confirm(l)&&k(e).then((function(t){r(n.filter((function(t){return t.id!==e}))),D(n.filter((function(t){return t.id!==e})))})).catch((function(e){K("".concat(t," has already been removed from the server"),"error")}))},handleLikeClick:function(e){var t=Object(u.a)(Object(u.a)({},e),{},{likes:e.likes+=1});C(t).then((function(){r(n),K("You liked ".concat(t.title),"success")}))}}))});c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(j,null)),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.5bd261c1.chunk.js.map