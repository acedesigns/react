(this["webpackJsonpanele-react"]=this["webpackJsonpanele-react"]||[]).push([[0],{53:function(e,a,t){e.exports=t(89)},83:function(e,a,t){e.exports={placeholder:"Companies_placeholder__1lsdc","bd-placeholder-img-lg":"Companies_bd-placeholder-img-lg__aTA5N"}},89:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=(t(55),t(19)),l=t.n(c),s=t(14),m=t(15),o=t(17),i=t(16),d=t(13),u=t(92);var p=function(){return n.a.createElement("div",null,n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light mb-4"},n.a.createElement("a",{className:"navbar-brand",href:"/"},"App"),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},n.a.createElement("ul",{className:"navbar-nav mr-auto"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(d.b,{className:"nav-link",to:"/"},"Home")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(d.b,{className:"nav-link",to:"/numbers"},"Numbers")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(d.b,{className:"nav-link",to:"/about"},"About"))))))},b=t(5),v=t(94);var h=function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"jumbotron"},n.a.createElement("div",{className:"container"},n.a.createElement("h1",{className:"display-6"},"ReactJs App!"),n.a.createElement("p",null,"This is just an App that displays random but interesting stuff."),n.a.createElement("p",null,n.a.createElement("a",{className:"btn btn-primary btn-sm",rel:"noopener noreferrer",target:"_blank",href:"https://twitter.com/anele_ace",role:"button"},"Learn more \xbb")))),n.a.createElement(v.a,{className:"mb-4"},n.a.createElement(v.a.Item,null,n.a.createElement("img",{className:"d-block w-100",src:"holder.js/800x400?text=First slide&bg=373940",alt:"First slide"}),n.a.createElement(v.a.Caption,null,n.a.createElement("h3",null,"First slide label"),n.a.createElement("p",null,"Nulla vitae elit libero, a pharetra augue mollis interdum."))),n.a.createElement(v.a.Item,null,n.a.createElement("img",{className:"d-block w-100",src:"holder.js/800x400?text=Second slide&bg=282c34",alt:"Third slide"}),n.a.createElement(v.a.Caption,null,n.a.createElement("h3",null,"Second slide label"),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit."))),n.a.createElement(v.a.Item,null,n.a.createElement("img",{className:"d-block w-100",src:"holder.js/800x400?text=Third slide&bg=20232a",alt:"Third slide"}),n.a.createElement(v.a.Caption,null,n.a.createElement("h3",null,"Third slide label"),n.a.createElement("p",null,"Praesent commodo cursus magna, vel scelerisque nisl consectetur.")))))},E=t(7),N=t.n(E),f=t(12),g=t(22),x=t(91),y=t(93),w=t(49),k=t(20),j=t.n(k),_="https://numbersapi.p.rapidapi.com",M={headers:{"content-type":"application/octet-stream","x-rapidapi-host":"numbersapi.p.rapidapi.com","x-rapidapi-key":"96d8d96d0dmsh92aec14a72add2ap153e6ajsnd31719630ba4",useQueryString:!0}},O={headers:{"content-type":"application/octet-stream","x-rapidapi-host":"joke3.p.rapidapi.com","x-rapidapi-key":"96d8d96d0dmsh92aec14a72add2ap153e6ajsnd31719630ba4",useQueryString:!0}},S={headers:{"content-type":"application/octet-stream","x-rapidapi-host":"love-calculator.p.rapidapi.com","x-rapidapi-key":"96d8d96d0dmsh92aec14a72add2ap153e6ajsnd31719630ba4",useQueryString:!0}};function C(e,a){return isNaN(e)&&isNaN(a)?(e=1,a=9999,Math.floor(Math.random()*(a-e+1)+e)):Math.floor(Math.random()*(a-e+1)+e)}var T=function(){var e=Object(f.a)(N.a.mark((function e(){var a,t;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=C(),e.prev=1,e.next=4,j.a.get("".concat(_,"/").concat(a,"/math"),M);case 4:return t=e.sent,e.abrupt("return",{data:t.data,number:a,lastUpdate:new Date});case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0,"Getting Number Fact");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(f.a)(N.a.mark((function e(){var a,t,r;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=C(1,27),t=C(1,12),e.prev=2,e.next=5,j.a.get("".concat(_,"/").concat(t,"/").concat(a,"/date"),M);case 5:return r=e.sent,e.abrupt("return",{data:r.data,day:a,month:t});case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}(),U=function(){var e=Object(f.a)(N.a.mark((function e(){var a,t,r,n,c,l;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.get("".concat("https://joke3.p.rapidapi.com","/v1/joke"),O);case 3:return a=e.sent,t=a.data,r=t.content,n=t.downvotes,c=t.upvotes,l=t.lastUpdate,e.abrupt("return",{content:r,downvotes:n,upvotes:c,lastUpdate:l});case 12:return e.prev=12,e.t0=e.catch(0),e.abrupt("return",e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(f.a)(N.a.mark((function e(a){var t,r,n,c,l,s;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.get("".concat("https://love-calculator.p.rapidapi.com","/getPercentage?fname=").concat(a.fname,"&sname=").concat(a.sname),S);case 3:return t=e.sent,r=t.data,n=r.fname,c=r.percentage,l=r.result,s=r.sname,e.abrupt("return",{fname:n,percentage:c,result:l,sname:s});case 12:return e.prev=12,e.t0=e.catch(0),e.abrupt("return",e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(a){return e.apply(this,arguments)}}(),A=(t(83),t(84),function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(e){var r;return Object(s.a)(this,t),(r=a.call(this,e))._isMounted=!1,r.submitFormHandler=function(){var e=Object(f.a)(N.a.mark((function e(a){var t,n,c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),a.target.checkValidity()){e.next=4;break}return Swal.fire({title:"Error!",text:"Please enter names",icon:"error",confirmButtonText:"Cool"}),e.abrupt("return");case 4:return t=new FormData(a.target),n={fname:t.get("firstName"),sname:t.get("secondName")},e.next=8,D(n);case 8:c=e.sent,r.setState({love_calc:c}),r.setState({displayErrors:!0});case 11:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),r.state={rand_number:{},rand_joke:"",date_fact:[],love_calc:{}},r}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(f.a)(N.a.mark((function e(){var a,t,r;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this._isMounted=!0,e.next=3,T();case 3:return a=e.sent,e.next=6,F();case 6:return t=e.sent,e.next=9,U();case 9:r=e.sent,this.setState({rand_number:a,date_fact:t,rand_joke:r});case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){var e=this.state.rand_number,a=this.state.date_fact,t=this.state.rand_joke,r=this.state.love_calc;if(Object.keys(e).length<=0||Object.keys(t).length<=0)return"Loading...";var c=this.state.displayErrors;return n.a.createElement("div",null,n.a.createElement(x.a,null,n.a.createElement("div",{className:"col-md-6"},n.a.createElement("div",{className:"card mb-4 shadow-sm"},n.a.createElement("div",{className:"card-header"},"Mathematical Number Meaning/Facts"),n.a.createElement("div",{className:"card-body"},n.a.createElement("h6",null," Property about  : ",e.number),n.a.createElement("p",{className:"card-text"}," ",e.data," "),n.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},n.a.createElement("small",{className:"text-muted"}," ",g(e.lastUpdate).subtract(7,"minutes").fromNow()," "))))),n.a.createElement("div",{className:"col-md-6"},n.a.createElement("div",{className:"card mb-4 shadow-sm"},n.a.createElement("div",{className:"card-header"},"Fact about a day of year"),n.a.createElement("div",{className:"card-body"},n.a.createElement("h6",null,"  Month: ",a.month,", Day: ",a.day," "),n.a.createElement("p",{className:"card-text"}," ",a.data," "),n.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},n.a.createElement("small",{className:"text-muted"}," ",g(e.lastUpdate).subtract(3,"minutes").fromNow()," ")))))),n.a.createElement(x.a,null,n.a.createElement("div",{className:"col-md-6"},n.a.createElement("div",{className:"card mb-4 shadow-sm"},n.a.createElement("div",{className:"card-header"},"Some Random Joke"),n.a.createElement("div",{className:"card-body"},n.a.createElement("p",{className:"card-text"}," ",t.content," "),n.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},n.a.createElement("small",{className:"text-muted"}," ",g(e.lastUpdate).subtract(3,"minutes").fromNow()," "))))),n.a.createElement("div",{className:"col-md-6"},n.a.createElement("div",{className:"card mb-4 shadow-sm"},n.a.createElement(y.a,{onSubmit:this.submitFormHandler,noValidate:!0},n.a.createElement("div",{className:"card-header"},"Love Calculator"),n.a.createElement("div",{className:"card-body"},n.a.createElement(x.a,null,n.a.createElement(w.a,{md:"6"},n.a.createElement("label",{htmlFor:"firstName"},"Your Name"),n.a.createElement("input",{className:"form-control form-control-sm",id:"firstName",name:"firstName",type:"text",required:!0})),n.a.createElement(w.a,{md:"6"},n.a.createElement("label",{htmlFor:"secondName"},"Your Lovers Email"),n.a.createElement("input",{className:"form-control form-control-sm",id:"secondName",name:"secondName",type:"text",required:!0}))),n.a.createElement("div",{className:"justify-content-between align-items-center"},n.a.createElement("br",null),n.a.createElement("div",{className:"alert alert-primary",role:"alert"},c?r.percentage+"%":"",n.a.createElement("hr",null),c?r.result:""))),n.a.createElement("div",{className:"card-footer"},n.a.createElement("button",{className:"btn btn-info btn-sm"},"Show Me")))))))}}]),t}(n.a.Component)),I=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-xl-4 mb-4"},n.a.createElement("div",{className:"card border-0 shadow"},n.a.createElement("img",{src:"https://source.unsplash.com/TMgQMXoglsM/500x350",alt:"",className:"card-img-top"}),n.a.createElement("div",{className:"card-body text-center"},n.a.createElement("h5",{className:"card-title mb-0"},"Anele"),n.a.createElement("div",{className:"card-text text-black-50"},"Web Developer")))),n.a.createElement("div",{className:"col-xl-4 mb-4"},n.a.createElement("div",{className:"card border-0 shadow"},n.a.createElement("img",{src:"https://source.unsplash.com/9UVmlIb0wJU/500x350",alt:"",className:"card-img-top"}),n.a.createElement("div",{className:"card-body text-center"},n.a.createElement("h5",{className:"card-title mb-0"},"Team Member"),n.a.createElement("div",{className:"card-text text-black-50"},"Web Developer")))),n.a.createElement("div",{className:"col-xl-4 mb-4"},n.a.createElement("div",{className:"card border-0 shadow"},n.a.createElement("img",{src:"https://source.unsplash.com/sNut2MqSmds/500x350",alt:"",className:"card-img-top"}),n.a.createElement("div",{className:"card-body text-center"},n.a.createElement("h5",{className:"card-title mb-0"},"Team Member"),n.a.createElement("div",{className:"card-text text-black-50"},"Brother"))))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-xl-4 mb-4"},n.a.createElement("div",{className:"card border-0 shadow"},n.a.createElement("img",{src:"https://source.unsplash.com/ZI6p3i9SbVU/500x350",alt:"",className:"card-img-top"}),n.a.createElement("div",{className:"card-body text-center"},n.a.createElement("h5",{className:"card-title mb-0"},"Team Member"),n.a.createElement("div",{className:"card-text text-black-50"},"Web Developer")))))))}}]),t}(n.a.Component);var W=function(){return n.a.createElement("div",null,n.a.createElement(b.a,{exact:!0,path:"/",component:h}),n.a.createElement(b.a,{path:"/numbers",component:A}),n.a.createElement(b.a,{path:"/about",component:I}))},J=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return n.a.createElement(u.a,null,n.a.createElement(d.a,null,n.a.createElement(p,null),n.a.createElement(W,null)))}}]),t}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[53,1,2]]]);
//# sourceMappingURL=main.d329cac1.chunk.js.map