(this.webpackJsonpblogilista=this.webpackJsonpblogilista||[]).push([[0],{14:function(e,t,n){e.exports=n(37)},36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var l=n(0),a=n.n(l),r=n(13),c=n.n(r),u=n(2),o=function(e){return a.a.createElement("h1",null,e.text)},i=function(e){return a.a.createElement("input",{type:e.type,placeholder:e.placeholder,onChange:e.handleOnChange,id:e.id})},d=function(e){return a.a.createElement("div",null,"Filter by Name: ",a.a.createElement(i,{placeholder:"Name..",handleOnChange:e.handleFilterOnChange}))},h=function(e){return a.a.createElement("button",{onClick:e.handleClick,type:e.type},e.text)},m=function(e){return a.a.createElement("h2",null,e.text)},s=function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(m,{text:"Add New Blog"}),a.a.createElement("form",null,a.a.createElement("div",null,"Title: ",a.a.createElement(i,{placeholder:"Title..",handleOnChange:e.handleAddTitleOnChange,id:"titleInput0"}),a.a.createElement("br",null),"Author: ",a.a.createElement(i,{placeholder:"Author..",handleOnChange:e.handleAddAuthorOnChange,id:"authorInput0"}),a.a.createElement("br",null),"Url: ",a.a.createElement(i,{placeholder:"Url..",handleOnChange:e.handleAddUrlOnChange,id:"urlInput0"})),a.a.createElement("div",null,a.a.createElement(h,{type:"submit",handleClick:e.handleAddClick,text:"Add"}))))},f=function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(m,{text:"Blogs"}),a.a.createElement("table",null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"Title"),a.a.createElement("th",null,"Author"),a.a.createElement("th",null,"URL"),a.a.createElement("th",null,"Likes"),a.a.createElement("th",null,"Like"),a.a.createElement("th",null,"Delete"))),a.a.createElement("tbody",null,e.blogs.map((function(t,n){return a.a.createElement("tr",{id:t.id,key:t.id},a.a.createElement("td",null,t.title),a.a.createElement("td",null,t.author),a.a.createElement("td",null,t.url),a.a.createElement("td",null,t.likes),a.a.createElement("td",null,a.a.createElement(h,{text:"like",handleClick:function(){return e.handleLikeClick(t)}})),a.a.createElement("td",null,a.a.createElement(h,{text:"delete",handleClick:function(){return e.handleDeleteClick(t.id,t.title)}})))})))))},E=n(3),g=n.n(E),p=function(){return g.a.get("/api/blogs").then((function(e){return e.data}))},b=function(e){return g.a.post("/api/blogs",e).then((function(e){return e.data}))},O=function(e){return g.a.delete("".concat("/api/blogs","/").concat(e)).then((function(e){return e}))},C=function(e){var t=e.message,n=e.notClassName;return null===t?null:a.a.createElement("div",{className:n},t)},k=(n(36),function(){var e=Object(l.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1],c=Object(l.useState)(""),i=Object(u.a)(c,2),h=i[0],m=i[1],E=Object(l.useState)(""),g=Object(u.a)(E,2),k=g[0],v=g[1],j=Object(l.useState)(""),A=Object(u.a)(j,2),y=A[0],I=A[1],x=Object(l.useState)(""),S=Object(u.a)(x,2),w=(S[0],S[1]),B=Object(l.useState)(n),L=Object(u.a)(B,2),T=L[0],N=L[1],U=Object(l.useState)(null),D=Object(u.a)(U,2),F=D[0],J=D[1],M=Object(l.useState)(null),R=Object(u.a)(M,2),q=R[0],z=R[1];Object(l.useEffect)((function(){p().then((function(e){r(e),console.log(e),N(e)})).catch((function(e){H("Error caught: ".concat(e),"error")}))}),[]);var G=function(){m(""),v(""),I(""),w(""),document.getElementById("titleInput0").value="",document.getElementById("authorInput0").value="",document.getElementById("urlInput0").value=""},H=function(e,t){J(e),z(t),setTimeout((function(){J(null),z(null)}),5e3)};return a.a.createElement("div",null,a.a.createElement(o,{text:"Bloglist"}),a.a.createElement(C,{message:F,notClassName:q}),a.a.createElement(d,{handleFilterOnChange:function(e){var t=n.filter((function(t){return t.title.toLowerCase().includes(e.target.value.toLowerCase())}));N(t)}}),a.a.createElement(s,{handleAddTitleOnChange:function(e){m(e.target.value)},handleAddAuthorOnChange:function(e){v(e.target.value)},handleAddUrlOnChange:function(e){I(e.target.value)},handleAddClick:function(e){if(e.preventDefault(),""===h)alert("Input Title");else if(""===k)alert("Input Author");else if(""===y)alert("Input Url");else{var t={title:h,author:k,url:y,likes:0};console.log("step0"),b(t).then((function(e){r(n.concat(e)),N(n.concat(e)),G(),H("Added ".concat(h),"success")})).catch((function(e){console.log(e.response.data),H("".concat(e.response.data.error),"error")}))}}}),a.a.createElement(f,{blogs:T,handleDeleteClick:function(e,t){var l="Do you really want to delete ".concat(t,"?");window.confirm(l)&&O(e).then((function(t){r(n.filter((function(t){return t.id!==e}))),N(n.filter((function(t){return t.id!==e})))})).catch((function(e){H("".concat(t," has already been removed from the server"),"error")}))},handleLikeClick:function(e){console.log("id",e.id),console.log("title",e.title),console.log("likes",e.likes)}}))});c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(k,null)),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.9e354463.chunk.js.map