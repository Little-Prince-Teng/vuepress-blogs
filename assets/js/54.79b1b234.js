(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{623:function(t,e,a){"use strict";a.r(e);var r=a(17),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vue-数据双向绑定原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-数据双向绑定原理"}},[t._v("#")]),t._v(" Vue 数据双向绑定原理")]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("Vue数据双向绑定原理是通过数据劫持结合发布者-订阅者模式的方式来实现的，首先是对数据进行监听，然后当监听的属性发生变化时则告诉订阅者是否要更新，若更新就会执行对应的更新函数从而更新视图")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://segmentfault.com/img/bVbBxWs",alt:"双向绑定"}})]),t._v(" "),a("h2",{attrs:{id:"实现步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现步骤"}},[t._v("#")]),t._v(" 实现步骤")]),t._v(" "),a("ol",[a("li",[t._v("实现一个监听器 Observer，用来劫持并监听所有属性，如果有变动的，就通知订阅者")]),t._v(" "),a("li",[t._v("实现一个订阅者 Watcher，每一个 Watcher 都绑定一个更新函数， Watcher 可以收到属性的变化并通知执行函数，从而更新视图")]),t._v(" "),a("li",[t._v("实现一个解析器 Compile，可以扫描和解析每个节点的相关指令(v-model, v-on等指令)，如果节点存在这些指令，则解析器 Compile 初始化这类节点的模版数据，使之可以显示在视图上，然后初始化对应的订阅者(Watcher)")])]),t._v(" "),a("h2",{attrs:{id:"vue-实现双向绑定的两大机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-实现双向绑定的两大机制"}},[t._v("#")]),t._v(" Vue 实现双向绑定的两大机制")]),t._v(" "),a("p",[t._v("数据劫持和发布订阅模式")]),t._v(" "),a("h3",{attrs:{id:"发布订阅模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#发布订阅模式"}},[t._v("#")]),t._v(" 发布订阅模式")]),t._v(" "),a("p",[t._v("所谓的发布订阅模式就是，定义了对象间的一种一对多的关系，让多个观察者对象同时监听某一个主体对象，当一个对象发生改变时，所有依赖与它的对象都将得到通知")]),t._v(" "),a("h3",{attrs:{id:"数据劫持"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据劫持"}},[t._v("#")]),t._v(" 数据劫持")]),t._v(" "),a("p",[t._v("所谓数据劫持就是，利用 Object.defineProperty() 方法，当对象的属性赋值时，Object.defineProperty 就可以通过 set 方法劫持到数据的变化，然后通知发布者(主体对象)去通知所有的观察者，观察者收到通知后，就会对视图进行更新")]),t._v(" "),a("h2",{attrs:{id:"参考文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[t._v("#")]),t._v(" 参考文章")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://segmentfault.com/a/1190000021327394",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue数据双向绑定原理和实现"),a("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=s.exports}}]);