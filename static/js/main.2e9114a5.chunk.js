(this["webpackJsonpreact-tutorial"]=this["webpackJsonpreact-tutorial"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),l=a.n(c),m=a(8),o=a(1),u=a(2),i=a(4),s=a(3),h=function(){return r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Job"),r.a.createElement("th",null,"Action")))},b=function(e){var t=e.characterData.map((function(t,a){return r.a.createElement("tr",{key:a},r.a.createElement("td",null,t.name),r.a.createElement("td",null,t.job),r.a.createElement("td",null,r.a.createElement("button",{className:"btn btn-secondary",onClick:function(){return e.removeCharacter(a)}},"Delete")))}));return r.a.createElement("tbody",null,t)},v=function(e){var t=e.characterData,a=e.removeCharacter;return r.a.createElement("table",null,r.a.createElement(h,null),r.a.createElement(b,{characterData:t,removeCharacter:a}))},f=a(7),E=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).initialState={name:"",job:""},e.state=e.initialState,e.submitForm=function(){e.props.handleSubmit(e.state),e.setState(e.initialState)},e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(f.a)({},n,r))},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.job;return r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"form-control",htmlFor:"name"},"Name"),r.a.createElement("input",{className:"form-control",type:"text",name:"name",id:"name",value:t,onChange:this.handleChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"form-control",htmlFor:"job"},"Job"),r.a.createElement("input",{className:"form-control",type:"text",name:"job",id:"job",value:a,onChange:this.handleChange})),r.a.createElement("input",{className:"btn btn-primary mt-3",type:"button",value:"Submit",onClick:this.submitForm}))}}]),a}(n.Component),d=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={characters:[]},e.removeCharacter=function(t){var a=e.state.characters;e.setState({characters:a.filter((function(e,a){return a!==t}))})},e.handleSubmit=function(t){e.setState({characters:[].concat(Object(m.a)(e.state.characters),[t])})},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state.characters;return r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"card"},r.a.createElement(v,{characterData:e,removeCharacter:this.removeCharacter})),r.a.createElement("div",{className:"card"},r.a.createElement(E,{handleSubmit:this.handleSubmit})))}}]),a}(n.Component);a(14);l.a.render(r.a.createElement(d,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.2e9114a5.chunk.js.map