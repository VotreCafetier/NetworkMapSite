(this.webpackJsonpnetworkmap_react=this.webpackJsonpnetworkmap_react||[]).push([[0],{44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(20),i=n.n(a),r=(n(44),n(8)),s=n(9),o=n(11),l=n(10),j=n(16),d=(n(45),n(46),n(1));var h=function(e){var t=e.info[e.id];return Object(d.jsx)("div",{id:"detail_view",onClick:e.onClose,children:Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:t.cTitle}),Object(d.jsx)("p",{children:t.cDescription}),Object(d.jsxs)("p",{children:["Link : ",Object(d.jsx)("a",{href:"http://"+t.cAddress,children:t.cAddress})]}),Object(d.jsx)("img",{src:t.cImage,alt:t.cImage+"_icon"})]})})},u=n(35),b=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var c;return Object(r.a)(this,n),(c=t.call(this,e)).handleClick=function(e){!0===c.state.showComponent?c.setState({showComponent:!1}):c.setState({showComponent:!0}),c.id=e||0},c.state={showComponent:!1},c.handleClick=c.handleClick.bind(Object(j.a)(c)),c.id=0,c}return Object(s.a)(n,[{key:"render",value:function(){var e=this,t=this.props.card,n=t.map((function(t){return Object(d.jsx)("div",{className:"Card",onClick:function(){return e.handleClick(t.id)},children:Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{}),Object(d.jsx)("span",{}),Object(d.jsx)("img",{src:t.cImage,alt:t.cTitle+"_icon"}),Object(d.jsx)("h4",{children:t.cTitle}),Object(d.jsx)("p",{children:t.cDescription})]})},t.card_ID)}));return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(u.CSSTransitionGroup,{transitionName:"Fade",transitionEnterTimeout:200,transitionLeaveTimeout:200,children:this.state.showComponent?Object(d.jsx)(h,{id:this.id,info:t,onClose:function(){return e.handleClick()}}):null}),Object(d.jsx)("div",{id:"card_holder",children:n})]})}}]),n}(c.Component),O=n(36),p=n.n(O),f=(n(78),"http://127.0.0.1:8000/api/Card/?format=json"),m=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(r.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={cards:[]},e.getCards=function(){p.a.get(f).then((function(t){return e.setState({cards:t.data})}))},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.getCards()}},{key:"render",value:function(){return Object(d.jsxs)("section",{children:[Object(d.jsx)("h2",{children:"Home"}),Object(d.jsx)(b,{card:this.state.cards})]})}}]),n}(c.Component),x=m,v=n(37),g=n(2),C=(n(79),function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(r.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={email:null,password:null},e.handleChange=function(t){e.setState(Object(v.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),console.log(e.state),"danygauthier57@yahoo.ca"===e.state.email&&"Abc123$"===e.state.password?e.props.history.push("/"):console.log("There was an error")},e}return Object(s.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{id:"login_page",children:Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"Login"}),Object(d.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(d.jsx)("input",{type:"email",placeholder:"Email",id:"email",onChange:this.handleChange}),Object(d.jsx)("input",{type:"password",placeholder:"Password",id:"password",onChange:this.handleChange}),Object(d.jsx)("button",{type:"submit",children:"Submit"})]})]})})}}]),n}(c.Component)),w=Object(g.f)(C),y=(n(83),function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var c;return Object(r.a)(this,n),(c=t.call(this,e)).state={date:(new Date).getFullYear()},c}return Object(s.a)(n,[{key:"getDate",value:function(){var e=(new Date).getFullYear();this.setState({date:e})}},{key:"componentDidMount",value:function(){this.getDate()}},{key:"render",value:function(){return Object(d.jsx)("footer",{children:Object(d.jsxs)("span",{children:["Dany Gauthier ",this.state.date," | This site is powered by React and Django"]})})}}]),n}(c.Component)),k=n(21),D=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(d.jsx)(k.a,{children:Object(d.jsxs)(g.c,{children:[Object(d.jsxs)(g.a,{exact:!0,path:"/",children:[Object(d.jsx)(x,{}),Object(d.jsx)(y,{})]}),Object(d.jsx)(g.a,{path:"/Login",children:Object(d.jsx)(w,{})})]})})}}]),n}(c.Component),S=D;console.warn=function(){},i.a.render(Object(d.jsx)(S,{}),document.getElementById("root"))}},[[84,1,2]]]);
//# sourceMappingURL=main.3d344065.chunk.js.map