(this.webpackJsonpconfusion=this.webpackJsonpconfusion||[]).push([[0],{22:function(e,t,a){},23:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var i=a(3),n=a(1),s=a.n(n),r=a(5),c=a.n(r),o=(a(21),a(22),a(6)),d=a(7),h=a(9),l=a(8),m=(a(23),a(4)),u=function(e){Object(h.a)(a,e);var t=Object(l.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"renderDish",value:function(e){return null!=e?Object(i.jsxs)(m.a,{children:[Object(i.jsx)(m.c,{top:!0,src:e.image,alt:e.name}),Object(i.jsxs)(m.b,{children:[Object(i.jsx)(m.f,{children:e.name}),Object(i.jsx)(m.e,{children:e.description})]})]}):Object(i.jsx)("div",{})}},{key:"renderComments",value:function(e){var t=e.map((function(t){var a=new Date(t.date);return Object(i.jsxs)("div",{className:"col-12 border-0 m-0",children:[Object(i.jsxs)("li",{className:"list-group-item border-0 m-1 p-1",children:['"',t.comment,'"']}),Object(i.jsxs)("li",{className:"list-group-item border-0 m-1 p-1",children:["--",t.author,", ",a.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})]})]},e.id)}));return null!=e?Object(i.jsxs)("div",{children:[Object(i.jsx)("h4",{children:"Comments"}),Object(i.jsx)("ul",{className:"list-group list-group-flush",children:t})]}):Object(i.jsx)("div",{})}},{key:"render",value:function(){return null!=this.props.selectedDish?Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("div",{className:"col-12 col-md-5 m-1",children:this.renderDish(this.props.selectedDish)}),Object(i.jsx)("div",{className:"col-12 col-md-5 m-1",children:this.renderComments(this.props.selectedDish.comments)})]}):Object(i.jsx)("div",{})}}]),a}(n.Component),j=function(e){Object(h.a)(a,e);var t=Object(l.a)(a);function a(e){var i;return Object(o.a)(this,a),(i=t.call(this,e)).state={selectedDish:null},i}return Object(d.a)(a,[{key:"onDishSelect",value:function(e){this.setState({selectedDish:e})}},{key:"render",value:function(){var e=this,t=this.props.dishes.map((function(t){return Object(i.jsx)("div",{className:"col-12 col-md-5 m-1",children:Object(i.jsxs)(m.a,{onClick:function(){return e.onDishSelect(t)},children:[Object(i.jsx)(m.c,{width:"100%",src:t.image,alt:t.name}),Object(i.jsx)(m.d,{children:Object(i.jsx)(m.f,{children:t.name})})]},t.id)})}));return Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("div",{className:"row",children:t}),Object(i.jsx)(u,{selectedDish:this.state.selectedDish})]})}}]),a}(n.Component),g=[{id:0,name:"Uthappizza",image:"assets/images/uthappizza.png",category:"mains",label:"Hot",price:"4.99",description:"A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.",comments:[{id:0,rating:5,comment:"Imagine all the eatables, living in conFusion!",author:"John Lemon",date:"2012-10-16T17:57:28.556094Z"},{id:1,rating:4,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Paul McVites",date:"2014-09-05T17:57:28.556094Z"},{id:2,rating:3,comment:"Eat it, just eat it!",author:"Michael Jaikishan",date:"2015-02-13T17:57:28.556094Z"},{id:3,rating:4,comment:"Ultimate, Reaching for the stars!",author:"Ringo Starry",date:"2013-12-02T17:57:28.556094Z"},{id:4,rating:2,comment:"It's your birthday, we're gonna party!",author:"25 Cent",date:"2011-12-02T17:57:28.556094Z"}]},{id:1,name:"Zucchipakoda",image:"assets/images/zucchipakoda.png",category:"appetizer",label:"",price:"1.99",description:"Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce",comments:[{id:0,rating:5,comment:"Imagine all the eatables, living in conFusion!",author:"John Lemon",date:"2012-10-16T17:57:28.556094Z"},{id:1,rating:4,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Paul McVites",date:"2014-09-05T17:57:28.556094Z"},{id:2,rating:3,comment:"Eat it, just eat it!",author:"Michael Jaikishan",date:"2015-02-13T17:57:28.556094Z"},{id:3,rating:4,comment:"Ultimate, Reaching for the stars!",author:"Ringo Starry",date:"2013-12-02T17:57:28.556094Z"},{id:4,rating:2,comment:"It's your birthday, we're gonna party!",author:"25 Cent",date:"2011-12-02T17:57:28.556094Z"}]},{id:2,name:"Vadonut",image:"assets/images/vadonut.png",category:"appetizer",label:"New",price:"1.99",description:"A quintessential ConFusion experience, is it a vada or is it a donut?",comments:[{id:0,rating:5,comment:"Imagine all the eatables, living in conFusion!",author:"John Lemon",date:"2012-10-16T17:57:28.556094Z"},{id:1,rating:4,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Paul McVites",date:"2014-09-05T17:57:28.556094Z"},{id:2,rating:3,comment:"Eat it, just eat it!",author:"Michael Jaikishan",date:"2015-02-13T17:57:28.556094Z"},{id:3,rating:4,comment:"Ultimate, Reaching for the stars!",author:"Ringo Starry",date:"2013-12-02T17:57:28.556094Z"},{id:4,rating:2,comment:"It's your birthday, we're gonna party!",author:"25 Cent",date:"2011-12-02T17:57:28.556094Z"}]},{id:3,name:"ElaiCheese Cake",image:"assets/images/elaicheesecake.png",category:"dessert",label:"",price:"2.99",description:"A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms",comments:[{id:0,rating:5,comment:"Imagine all the eatables, living in conFusion!",author:"John Lemon",date:"2012-10-16T17:57:28.556094Z"},{id:1,rating:4,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Paul McVites",date:"2014-09-05T17:57:28.556094Z"},{id:2,rating:3,comment:"Eat it, just eat it!",author:"Michael Jaikishan",date:"2015-02-13T17:57:28.556094Z"},{id:3,rating:4,comment:"Ultimate, Reaching for the stars!",author:"Ringo Starry",date:"2013-12-02T17:57:28.556094Z"},{id:4,rating:2,comment:"It's your birthday, we're gonna party!",author:"25 Cent",date:"2011-12-02T17:57:28.556094Z"}]}],p=function(e){Object(h.a)(a,e);var t=Object(l.a)(a);function a(e){var i;return Object(o.a)(this,a),(i=t.call(this,e)).state={dishes:g},i}return Object(d.a)(a,[{key:"render",value:function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)(m.g,{dark:!0,color:"primary",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsx)(m.h,{href:"/",children:"Ristorante Con Fusion"})})}),Object(i.jsx)(j,{dishes:this.state.dishes})]})}}]),a}(n.Component),b=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,32)).then((function(t){var a=t.getCLS,i=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),i(e),n(e),s(e),r(e)}))};c.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(p,{})}),document.getElementById("root")),b()}},[[31,1,2]]]);
//# sourceMappingURL=main.dac12d61.chunk.js.map