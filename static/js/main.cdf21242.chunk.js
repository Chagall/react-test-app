(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(t,e,n){t.exports=n(54)},32:function(t,e,n){},54:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),r=n(21),c=n.n(r),l=n(14),i=n(6),d=n(7),s=n(9),u=n(8),p=n(10),m=n(56),f=n(57),h=n(55);var b={background:"#333",color:"#fff",textAlign:"center",padding:"10px"},y={color:"#fff",textDecoration:"none"},v=function(){return a.a.createElement("header",{style:b},a.a.createElement("h1",null,"TodoList"),a.a.createElement(h.a,{style:y,to:"/"},"Home")," | ",a.a.createElement(h.a,{style:y,to:"/about"},"About"))},E=function(t){function e(){var t,n;Object(i.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(s.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).getStyle=function(){return{background:"#f4f4f4",padding:"8px",borderBottom:"1px #ccc dotted",textDecoration:n.props.todo.completed?"line-through":"none"}},n}return Object(p.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){var t=this.props.todo,e=t.id,n=t.title;return a.a.createElement("div",{style:this.getStyle()},a.a.createElement("p",null,a.a.createElement("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,e)})," "," ",n,a.a.createElement("button",{onClick:this.props.delTodo.bind(this,e),style:j},"x")))}}]),e}(o.Component),j={background:"#ff0000",color:"#fff",border:"none",padding:"5px 8px",borderRadius:"50%",cursor:"pointer",float:"right"},g=E,O=function(t){function e(){return Object(i.a)(this,e),Object(s.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){var t=this;return this.props.todos.map(function(e){return a.a.createElement(g,{key:e.id,todo:e,markComplete:t.props.markComplete,delTodo:t.props.delTodo})})}}]),e}(o.Component),k=function(t){function e(){var t,n;Object(i.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(s.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).state={title:""},n.onChange=function(t){return n.setState({title:t.target.value})},n.onSubmit=function(t){t.preventDefault(),n.props.addTodo(n.state.title),n.setState({title:""})},n}return Object(p.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){return a.a.createElement("form",{style:{display:"flex"},onSubmit:this.onSubmit},a.a.createElement("input",{type:"text",name:"title",style:{flex:"10",paddin:"5px"},placeholder:"Add Todo...",value:this.state.title,onChange:this.onChange}),a.a.createElement("input",{type:"submit",value:"Submit",className:"btn",style:{flex:"1"}}))}}]),e}(o.Component);var x=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"About"),a.a.createElement("p",null,"This is the TodoList app v1.0.0. It is part of a React crash course"))},C=(n(32),n(12)),T=n.n(C),S=function(t){function e(){var t,n;Object(i.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(s.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).state={todos:[]},n.markComplete=function(t){n.setState({todos:n.state.todos.map(function(e){return e.id==t&&(e.completed=!e.completed),e})})},n.delTodo=function(t){T.a.delete("https://jsonplaceholder.typicode.com/todos/${id}").then(function(e){return n.setState({todos:Object(l.a)(n.state.todos.filter(function(e){return e.id!=t}))})})},n.addTodo=function(t){T.a.post("https://jsonplaceholder.typicode.com/todos",{title:t,completed:!1}).then(function(t){return n.setState({todos:[].concat(Object(l.a)(n.state.todos),[t.data])})})},n}return Object(p.a)(e,t),Object(d.a)(e,[{key:"componentDidMount",value:function(){var t=this;T.a.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then(function(e){return t.setState({todos:e.data})})}},{key:"render",value:function(){var t=this;return a.a.createElement(m.a,null,a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"container"},a.a.createElement(v,null),a.a.createElement(f.a,{exact:!0,path:"/",render:function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(k,{addTodo:t.addTodo}),a.a.createElement(O,{todos:t.state.todos,markComplete:t.markComplete,delTodo:t.delTodo}))}}),a.a.createElement(f.a,{path:"/about",component:x}))))}}]),e}(o.Component);c.a.render(a.a.createElement(S,null),document.getElementById("root"))}},[[24,2,1]]]);
//# sourceMappingURL=main.cdf21242.chunk.js.map