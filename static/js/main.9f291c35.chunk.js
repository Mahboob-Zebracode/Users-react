(this.webpackJsonpusers=this.webpackJsonpusers||[]).push([[0],{37:function(e,t,a){},38:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(1),r=a.n(c),s=a(30),i=a.n(s),l=(a(37),a(38),a(39),a(5)),o=function(){return Object(n.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary",children:Object(n.jsxs)("div",{className:"container-fluid",children:[Object(n.jsx)("a",{className:"navbar-brand",href:"/",children:"React User"}),Object(n.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(n.jsx)("span",{className:"navbar-toggler-icon"})}),Object(n.jsx)("div",{className:"collapse navbar-collapse",children:Object(n.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(l.c,{className:"nav-link",exact:!0,to:"/",children:"Home"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(l.c,{className:"nav-link",exact:!0,to:"/about",children:"About"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(l.c,{className:"nav-link",exact:!0,to:"/contact",children:"Contact"})})]})}),Object(n.jsx)(l.b,{className:"btn btn-outline-light",to:"/users/add",children:"Add User"})]})})},u=a(4),m=a.n(u),j=a(10),b=a(12),d=a(11),p=a.n(d),h=function(){var e=Object(c.useState)([]),t=Object(b.a)(e,2),a=t[0],r=t[1];Object(c.useEffect)((function(){s()}),[]);var s=function(){var e=Object(j.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("http://localhost:3002/users");case 2:t=e.sent,r(t.data.reverse());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=Object(j.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.delete("http://localhost:3002/users/".concat(t));case 2:s();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"py-4",children:[Object(n.jsx)("h1",{children:"Home Page"}),Object(n.jsxs)("table",{class:"table border shadow",children:[Object(n.jsx)("thead",{class:"thead-dark",children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{scope:"col",children:"#"}),Object(n.jsx)("th",{scope:"col",children:"Name"}),Object(n.jsx)("th",{scope:"col",children:"User Name"}),Object(n.jsx)("th",{scope:"col",children:"Email"}),Object(n.jsx)("th",{children:"Action"})]})}),Object(n.jsx)("tbody",{children:a.map((function(e,t){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{scope:"row",children:t+1}),Object(n.jsx)("td",{children:e.name}),Object(n.jsxs)("td",{children:[" ",e.username," "]}),Object(n.jsxs)("td",{children:[" ",e.email," "]}),Object(n.jsxs)("td",{children:[Object(n.jsx)(l.b,{className:"btn btn-primary mr-2",to:"/users/".concat(e.id),children:"View"}),Object(n.jsx)(l.b,{className:"btn btn-outline-primary mr-2",to:"/users/edit/".concat(e.id),children:"Edit"}),Object(n.jsx)(l.b,{className:"btn btn-danger",onClick:function(){return i(e.id)},children:"Delete "})]})]})}))})]})]})})},x=function(){return Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"py-4",children:[Object(n.jsx)("h1",{children:"About Page"}),Object(n.jsx)("p",{className:"lead",children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum eligendi perferendis placeat vero hic libero nisi, dolore voluptatibus consequuntur, ratione aperiam tempora laborum ipsum nihil tenetur itaque distinctio. Rerum, ipsa."}),Object(n.jsx)("p",{className:"lead",children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum eligendi perferendis placeat vero hic libero nisi, dolore voluptatibus consequuntur, ratione aperiam tempora laborum ipsum nihil tenetur itaque distinctio. Rerum, ipsa."}),Object(n.jsx)("p",{className:"lead",children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum eligendi perferendis placeat vero hic libero nisi, dolore voluptatibus consequuntur, ratione aperiam tempora laborum ipsum nihil tenetur itaque distinctio. Rerum, ipsa."})]})})},O=function(){return Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"py-4",children:[Object(n.jsx)("h1",{children:"Contact Page"}),Object(n.jsxs)("form",{children:[Object(n.jsxs)("div",{className:"mb-3",children:[Object(n.jsx)("label",{htmlFor:"exampleInputEmail1",className:"form-label",children:"Email address"}),Object(n.jsx)("input",{type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp"}),Object(n.jsx)("div",{id:"emailHelp",className:"form-text",children:"We'll never share your email with anyone else."})]}),Object(n.jsxs)("div",{className:"mb-3",children:[Object(n.jsx)("label",{htmlFor:"exampleInputPassword1",className:"form-label",children:"Password"}),Object(n.jsx)("input",{type:"password",className:"form-control",id:"exampleInputPassword1"})]}),Object(n.jsxs)("div",{className:"mb-3 form-check",children:[Object(n.jsx)("input",{type:"checkbox",className:"form-check-input",id:"exampleCheck1"}),Object(n.jsx)("label",{className:"form-check-label",htmlFor:"exampleCheck1",children:"Check me out"})]}),Object(n.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})]})})},f=a(2),v=function(){return Object(n.jsx)("div",{className:"not-found",children:Object(n.jsx)("h1",{className:"display-1",children:"Page Not Found"})})},N=a(14),g=a(15),y=function(){var e=Object(f.f)(),t=Object(c.useState)({name:"",username:"",email:"",phone:"",website:""}),a=Object(b.a)(t,2),r=a[0],s=a[1],i=r.name,l=r.username,o=r.email,u=r.phone,d=r.website,h=function(e){s(Object(g.a)(Object(g.a)({},r),{},Object(N.a)({},e.target.name,e.target.value)))},x=function(){var t=Object(j.a)(m.a.mark((function t(a){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,p.a.post("http://localhost:3002/users",r);case 3:e.push("/");case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"w-75 mx-auto shadow p-5",children:[Object(n.jsx)("h2",{className:"text-center mb-4",children:"Add A User"}),Object(n.jsxs)("form",{onSubmit:function(e){return x(e)},children:[Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Name",name:"name",value:i,onChange:function(e){return h(e)}})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Username",name:"username",value:l,onChange:function(e){return h(e)}})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{type:"email",className:"form-control form-control-lg",placeholder:"Enter Your E-mail Address",name:"email",value:o,onChange:function(e){return h(e)}})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Phone Number",name:"phone",value:u,onChange:function(e){return h(e)}})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Website Name",name:"website",value:d,onChange:function(e){return h(e)}})}),Object(n.jsx)("button",{className:"btn btn-primary btn-block",children:"Add User"})]})]})})},w=function(){var e=Object(f.f)(),t=Object(f.g)().id,a=Object(c.useState)({name:"",username:"",email:"",phone:"",website:""}),r=Object(b.a)(a,2),s=r[0],i=r[1],l=s.name,o=s.username,u=s.email,d=s.phone,h=s.website,x=function(e){i(Object(g.a)(Object(g.a)({},s),{},Object(N.a)({},e.target.name,e.target.value)))};Object(c.useEffect)((function(){v()}),[]);var O=function(){var a=Object(j.a)(m.a.mark((function a(n){return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),a.next=3,p.a.put("http://localhost:3002/users/".concat(t),s);case 3:e.push("/");case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),v=function(){var e=Object(j.a)(m.a.mark((function e(){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("http://localhost:3002/users/".concat(t));case 2:a=e.sent,i(a.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"w-75 mx-auto shadow p-5",children:[Object(n.jsx)("h2",{className:"text-center mb-4",children:"Edit A User"}),Object(n.jsxs)("form",{onSubmit:function(e){return O(e)},children:[Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Name",name:"name",value:l,onChange:function(e){return x(e)}})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Username",name:"username",value:o,onChange:function(e){return x(e)}})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{type:"email",className:"form-control form-control-lg",placeholder:"Enter Your E-mail Address",name:"email",value:u,onChange:function(e){return x(e)}})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Phone Number",name:"phone",value:d,onChange:function(e){return x(e)}})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Website Name",name:"website",value:h,onChange:function(e){return x(e)}})}),Object(n.jsx)("button",{className:"btn btn-warning btn-block",children:"Update User"})]})]})})},k=function(){var e=Object(c.useState)({name:"",username:"",email:"",phone:"",website:""}),t=Object(b.a)(e,2),a=t[0],r=t[1],s=a.name,i=a.username,o=a.email,u=a.phone,d=a.website,h=Object(f.g)().id;Object(c.useEffect)((function(){x()}),[]);var x=function(){var e=Object(j.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("http://localhost:3002/users/".concat(h));case 2:t=e.sent,r(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.jsx)("div",{children:Object(n.jsxs)("div",{className:"container py-5",children:[Object(n.jsx)(l.b,{className:"btn btn-primary",to:"/",children:"Back to Home"}),Object(n.jsxs)("h1",{className:"display-4",children:["User Id: ",h," "]}),Object(n.jsx)("hr",{}),Object(n.jsxs)("ul",{className:"list-group w-50",children:[Object(n.jsxs)("li",{className:"list-group-item",children:["Name: ",s]}),Object(n.jsxs)("li",{className:"list-group-item",children:["Username: ",i]}),Object(n.jsxs)("li",{className:"list-group-item",children:["Email: ",o]}),Object(n.jsxs)("li",{className:"list-group-item",children:["Phone: ",u]}),Object(n.jsxs)("li",{className:"list-group-item",children:["Website: ",d]})]})]})})};var E=function(){return Object(n.jsx)(l.a,{children:Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(o,{}),Object(n.jsxs)(f.c,{children:[Object(n.jsx)(f.a,{exact:!0,path:"/",component:h}),Object(n.jsx)(f.a,{path:"/about",component:x}),Object(n.jsx)(f.a,{path:"/contact",component:O}),Object(n.jsx)(f.a,{path:"/users/add",component:y}),Object(n.jsx)(f.a,{path:"/users/edit/:id",component:w}),Object(n.jsx)(f.a,{path:"/users/:id",component:k}),Object(n.jsx)(f.a,{component:v})]})]})})};i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(E,{})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.9f291c35.chunk.js.map