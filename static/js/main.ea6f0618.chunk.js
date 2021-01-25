(this["webpackJsonpcheck-the-temp-app"]=this["webpackJsonpcheck-the-temp-app"]||[]).push([[0],{57:function(e,t,a){},58:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var s=a(2),n=a(0),r=a.n(n),c=a(24),i=a.n(c),l=(a(57),a(51)),h=a(18),d=a(19),o=a(22),u=a(20),j=a(6),m=a(88),b=a(39),p=(a(58),function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(h.a)(this,a),(s=t.call(this,e)).handleClose=function(){return s.setState({show:!1})},s.state={show:!0},s.timeoutId=null,s}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.timeoutId=setTimeout(this.handleClose,5e3)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeoutId)}},{key:"render",value:function(){var e=this.props,t=e.variant,a=e.heading,n=e.message,r=e.deleteAlert,c=e.id;return this.state.show||setTimeout((function(){r(c)}),300),Object(s.jsx)(b.a,{dismissible:!0,show:this.state.show,variant:t,onClose:this.handleClose,children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)(b.a.Heading,{children:a}),Object(s.jsx)("p",{className:"alert-body",children:n})]})})}}]),a}(r.a.Component)),O=a(32),x=a(27),f=Object(s.jsx)(n.Fragment,{children:Object(s.jsx)(O.a.Link,{href:"#weather",children:"Check The Weather"})}),g=Object(s.jsx)(n.Fragment,{children:Object(s.jsx)(O.a.Link,{href:"#/",children:"Home"})}),v=function(){return Object(s.jsxs)(x.a,{bg:"primary",variant:"dark",expand:"md",children:[Object(s.jsx)(x.a.Brand,{href:"#",children:"Check The Temp! \ud83c\udf24"}),Object(s.jsx)(x.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(s.jsx)(x.a.Collapse,{id:"basic-navbar-nav",children:Object(s.jsxs)(O.a,{className:"ml-auto",children:[g,f]})})]})},k=function(){return Object(s.jsxs)("div",{className:"home-div",children:[Object(s.jsx)("h1",{children:"Welcome to Check The Temp! \ud83c\udf24"}),Object(s.jsx)("h6",{children:"Lets Check The Weather!"})]})},y=a(49),C=a.n(y),T=function(e){var t=e.zipCode,a=e.handleSubmit,n=e.handleChange;return Object(s.jsxs)("form",{onSubmit:a,children:[Object(s.jsx)("h5",{children:"Where Are We Looking?:"}),Object(s.jsx)("input",{required:!0,placeholder:"Enter Zipcode Here",name:"zipCode",value:t,onChange:n}),Object(s.jsx)("button",{type:"submit",children:"Let's Take A Look!"})]})},A=a(13),w={apiUrl:"https://api.openweathermap.org/data/2.5/forecast?units=imperial&us&appid=".concat("1c4b5fde466659fdfea9e7a47c6a5be6","&zip=")},N=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(h.a)(this,a),(s=t.call(this,e)).handleChange=function(e){e.persist(),s.setState({zipCode:e.target.value})},s.handleSubmit=function(e){e.preventDefault();var t=s.props.msgAlert;C.a.get("".concat(w.apiUrl).concat(s.state.zipCode)).then((function(e){return s.setState({weather:e.data.list[0].main.temp,city:e.data.city.name,description:e.data.list[0].weather[0].description,feelsLike:e.data.list[0].main.feels_like,humidity:e.data.list[0].main.humidity})})).then(console.log("Wee!")).catch((function(e){t({message:"That did't work...because: "+e.message,variant:"danger"})})),e.target.reset()},s.state={weather:"",zipCode:"",city:"",description:"",feelsLike:"",humidity:""},s}return Object(d.a)(a,[{key:"render",value:function(){var e,t=this.state,a=t.weather,n=t.city,r=t.description,c=t.feelsLike,i=t.humidity;return e=a||n||r||c||i?Object(s.jsx)("div",{className:"forecast-div",children:Object(s.jsxs)(A.a,{className:"display-card",children:[Object(s.jsx)(A.a.Img,{className:"img",src:"https://imgur.com/8QcpYfB.png",alt:"Card image"}),Object(s.jsxs)(A.a.ImgOverlay,{children:[Object(s.jsx)(A.a.Text,{className:"city key",children:"Your Forecast for: "}),Object(s.jsx)(A.a.Text,{className:"value",children:n}),Object(s.jsx)(A.a.Text,{className:"key",children:"Current Temp: "}),Object(s.jsxs)(A.a.Text,{classname:"value",children:[a,"\xb0F \xa0\xa0 (feels like: ",c,")"]}),Object(s.jsx)(A.a.Text,{className:"key",children:"What To Expect: "}),Object(s.jsxs)(A.a.Text,{className:"value",children:["humidity: ",i,"%",Object(s.jsx)("br",{}),r]})]})]})}):"",Object(s.jsxs)("div",{className:"zip-code-form-display",children:[Object(s.jsx)("br",{}),Object(s.jsx)("h4",{className:"check-forecast",children:"Lets Check The Forecast!"}),Object(s.jsx)(T,{weather:a,handleChange:this.handleChange,handleSubmit:this.handleSubmit}),e]})}}]),a}(n.Component),S=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(h.a)(this,a),(s=t.call(this,e)).setUser=function(e){return s.setState({user:e})},s.clearUser=function(){return s.setState({user:null})},s.deleteAlert=function(e){s.setState((function(t){return{msgAlerts:t.msgAlerts.filter((function(t){return t.id!==e}))}}))},s.msgAlert=function(e){var t=e.heading,a=e.message,n=e.variant,r=Object(m.a)();s.setState((function(e){return{msgAlerts:[].concat(Object(l.a)(e.msgAlerts),[{heading:t,message:a,variant:n,id:r}])}}))},s.state={user:null,msgAlerts:[]},s}return Object(d.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.msgAlerts,r=t.user;return Object(s.jsxs)(n.Fragment,{children:[Object(s.jsx)(v,{user:r}),a.map((function(t){return Object(s.jsx)(p,{heading:t.heading,variant:t.variant,message:t.message,id:t.id,deleteAlert:e.deleteAlert},t.id)})),Object(s.jsxs)("main",{className:"display-body",children:[Object(s.jsx)(j.a,{exact:!0,path:"/",render:function(){return Object(s.jsx)(k,{msgAlert:e.msgAlert,setUser:e.setUser})}}),Object(s.jsx)(j.a,{exact:!0,path:"/weather",render:function(){return Object(s.jsx)(N,{msgAlert:e.msgAlert,setUser:e.setUser})}})]})]})}}]),a}(n.Component),L=a(36),U=Object(s.jsx)(L.a,{children:Object(s.jsx)(S,{})});i.a.render(U,document.getElementById("root"))}},[[85,1,2]]]);
//# sourceMappingURL=main.ea6f0618.chunk.js.map