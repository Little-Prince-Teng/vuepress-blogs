(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{609:function(v,_,t){"use strict";t.r(_);var e=t(17),o=Object(e.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"http-https"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http-https"}},[v._v("#")]),v._v(" HTTP && HTTPS")]),v._v(" "),t("h2",{attrs:{id:"http请求方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http请求方法"}},[v._v("#")]),v._v(" HTTP请求方法")]),v._v(" "),t("ul",[t("li",[t("strong",[t("code",[v._v("GET")])]),v._v(" 通常用来获取资源")]),v._v(" "),t("li",[t("strong",[t("code",[v._v("POST")])]),v._v(" 提交数据")]),v._v(" "),t("li",[t("strong",[t("code",[v._v("OPTIONS")])]),v._v(" 用来请求跨域")]),v._v(" "),t("li",[t("strong",[t("code",[v._v("DELETE")])])]),v._v(" "),t("li",[t("strong",[t("code",[v._v("PUT")])])]),v._v(" "),t("li",[t("strong",[t("code",[v._v("HEAD")])])]),v._v(" "),t("li",[t("strong",[t("code",[v._v("CONNECT")])])]),v._v(" "),t("li",[t("strong",[t("code",[v._v("TRACE")])])])]),v._v(" "),t("h2",{attrs:{id:"get和post区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#get和post区别"}},[v._v("#")]),v._v(" GET和POST区别")]),v._v(" "),t("ul",[t("li",[v._v("从"),t("strong",[v._v("缓存")]),v._v("角度: "),t("code",[v._v("GET")]),v._v("请求会被浏览器主动缓存，留下历史记录，而"),t("code",[v._v("POST")]),v._v("请求不会。")]),v._v(" "),t("li",[v._v("从"),t("strong",[v._v("编码")]),v._v("角度: "),t("code",[v._v("GET")]),v._v("请求只能进行"),t("code",[v._v("URL")]),v._v("编码，只能接收"),t("code",[v._v("ASCII")]),v._v("码，而"),t("code",[v._v("POST")]),v._v("请求没有限制。")]),v._v(" "),t("li",[v._v("从"),t("strong",[v._v("参数")]),v._v("角度: "),t("code",[v._v("GET")]),v._v("请求一般放在"),t("code",[v._v("URL")]),v._v("中，一般不安全，"),t("code",[v._v("POST")]),v._v("请求放在请求体中，更适合传输敏感信息。")]),v._v(" "),t("li",[v._v("从"),t("strong",[v._v("幂等性")]),v._v("(执行相同操作，结果一样)角度: "),t("code",[v._v("GET")]),v._v("请求是幂等的，而"),t("code",[v._v("POST")]),v._v("请求不是。")]),v._v(" "),t("li",[v._v("从"),t("strong",[v._v("TCP")]),v._v("角度: "),t("code",[v._v("GET")]),v._v("请求把请求报文一次性发出去，而"),t("code",[v._v("POST")]),v._v("请求会分成两个"),t("code",[v._v("TCP")]),v._v("数据包，先发"),t("code",[v._v("header")]),v._v("部分，如果服务器响应100，然后再发"),t("code",[v._v("body")]),v._v("部分。(火狐浏览器除外，它的"),t("code",[v._v("POST")]),v._v("只发一个"),t("code",[v._v("TCP")]),v._v("包)")])]),v._v(" "),t("h2",{attrs:{id:"http状态码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http状态码"}},[v._v("#")]),v._v(" HTTP状态码")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("1xx")]),v._v(" 表示目前是协议处理的中间状态，还需要后续操作")]),v._v(" "),t("li",[t("strong",[v._v("2xx")]),v._v(" 表示成功状态\n"),t("ul",[t("li",[t("strong",[v._v("200: OK")]),v._v(" 成功状态码，通常响应体中有数据\n"),t("ul",[t("li",[t("strong",[v._v("201: Created")]),v._v(" 已创建，成功请求并创建了新的资源")]),v._v(" "),t("li",[t("strong",[v._v("202: Accepted")]),v._v(" 已接受，已经接受请求，但未处理完成")]),v._v(" "),t("li",[t("strong",[v._v("203: Not-Authoritative Information")]),v._v(" 非授权信息，请求成功，但返回的 meta 信息不再原始的服务器，而是一个副本")]),v._v(" "),t("li",[t("strong",[v._v("204: No Content")]),v._v(" 无内容。服务器成功处理，但未返回内容。在未更新网页的情况下，可确保浏览器继续显示当前文档。")]),v._v(" "),t("li",[t("strong",[v._v("205：Reset Content")]),v._v(" 重置内容。服务器处理成功，用户终端（例如：浏览器）应重置文档视图。可通过此返回码清除浏览器的表单域")])])]),v._v(" "),t("li",[t("strong",[v._v("206 Partial Content")]),v._v(" 使用场景为"),t("code",[v._v("HTTP")]),v._v("分块上传和断点续传，当然也会添加上Content-Range")])])]),v._v(" "),t("li",[t("strong",[v._v("3xx")]),v._v(" 表示重定向状态，资源位置发生变动，需要重新请求\n"),t("ul",[t("li",[t("strong",[v._v("301: Moved Permanently")]),v._v(" 即永久重定向；当网站从"),t("code",[v._v("HTTP")]),v._v("升级到"),t("code",[v._v("HTTPS")]),v._v("，之前的站点不再使用，应当返回301")]),v._v(" "),t("li",[t("strong",[v._v("304: Not Modified")]),v._v(" 当协商缓存命中时返回")])])]),v._v(" "),t("li",[t("strong",[v._v("4xx")]),v._v(" 表示请求报文错误\n"),t("ul",[t("li",[t("strong",[v._v("400: Bad Request")]),v._v(" 笼统的提示错误，具体并不清楚哪里出错\n"),t("ul",[t("li",[t("strong",[v._v("401: Unauthorized")]),v._v(" 请求要求用户的身份认证")])])]),v._v(" "),t("li",[t("strong",[v._v("403: Forbidden")]),v._v(" 服务器禁止访问，原因有很多，比如法律禁止，信息敏感等")]),v._v(" "),t("li",[t("strong",[v._v("404: Not Found")]),v._v(" 资源未找到，服务器未找到相应的资源")]),v._v(" "),t("li",[t("strong",[v._v("405: Method Not Allowed")]),v._v(" 请求方法不被服务器端允许")])])]),v._v(" "),t("li",[t("strong",[v._v("5xx")]),v._v(" 表示服务端发生错误\n"),t("ul",[t("li",[t("strong",[v._v("500: Internal Server Error")]),v._v(" 仅仅告诉服务器出错了，具体原因不清楚")]),v._v(" "),t("li",[t("strong",[v._v("501: Not Implemented")]),v._v(" 客户端请求的功能还不支持")]),v._v(" "),t("li",[t("strong",[v._v("502: Bad Gateway")]),v._v(" 服务器自身是正常的，但访问的时候出错了，具体什么错误不清楚")]),v._v(" "),t("li",[t("strong",[v._v("503: Service Unavailable")]),v._v(" 当前服务器很忙，暂时无法响应服务\n"),t("ul",[t("li",[t("strong",[v._v("504: Gateway Time-out")]),v._v(" 充当网关或代理的服务器，未及时从远端服务器获取请求")])])])])])]),v._v(" "),t("h2",{attrs:{id:"http1-1的缺陷"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http1-1的缺陷"}},[v._v("#")]),v._v(" HTTP1.1的缺陷")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("高延迟-对头阻塞")]),v._v(" 网络延迟问题主要是由于对头阻塞导致宽带无法被充分利用，可以通过以下方式尝试解决\n"),t("ul",[t("li",[v._v("将统一页面的资源分散到不同域名下，提升连接上限(chrome机制，对于同一域名，默认允许同时建立6个"),t("code",[v._v("TCP")]),v._v("持久连接)")]),v._v(" "),t("li",[v._v("合并小文件减少资源数")]),v._v(" "),t("li",[v._v("内联资源")]),v._v(" "),t("li",[v._v("减少请求数")])])]),v._v(" "),t("li",[t("strong",[v._v("无状态特性-阻碍交互")]),v._v(" "),t("code",[v._v("Header")]),v._v("头部携带信息内容过大，在一定程度上增加了成本")]),v._v(" "),t("li",[t("strong",[v._v("明文传输-不安全性")]),v._v(" 传输数据时，传输的都是明文，无法保证数据的安全性")]),v._v(" "),t("li",[t("strong",[v._v("不支持服务端推送")])])]),v._v(" "),t("h2",{attrs:{id:"http-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http-2"}},[v._v("#")]),v._v(" HTTP/2")]),v._v(" "),t("p",[v._v("HTTP/2基于SPDY协议，专注于性能，最大的一个目标是在用户和网站间只用一个连接")]),v._v(" "),t("h3",{attrs:{id:"http-2新特性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http-2新特性"}},[v._v("#")]),v._v(" HTTP/2新特性")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("二进制传输")]),v._v(" HTTP/2将请求和响应数据分割成更小的帧，并且采用二进制编码")]),v._v(" "),t("li",[t("strong",[v._v("Header压缩")])]),v._v(" "),t("li",[t("strong",[v._v("多路复用")])]),v._v(" "),t("li",[t("strong",[v._v("Server push服务器推送")])]),v._v(" "),t("li",[t("strong",[v._v("提高安全性")])])]),v._v(" "),t("h2",{attrs:{id:"http如何处理大文件传输"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http如何处理大文件传输"}},[v._v("#")]),v._v(" HTTP如何处理大文件传输")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("数据压缩")]),v._v(" "),t("code",[v._v("HTTP")]),v._v("请求头"),t("code",[v._v("accept-encoding")]),v._v("将客户端能够理解的内容编码方式(通常是某种压缩算法)告诉给服务端，服务端会选择一个客户端支持的方式并通过"),t("code",[v._v("content-encoding")]),v._v("来通知客户端选择\n"),t("code",[v._v("cache-control: max-age=2592000 content-encoding: gzip content-type: application/x-javascript")])]),v._v(" "),t("li",[t("strong",[v._v("分块传输编码")]),v._v(" 主要应用场景需要传输大量的数据，在请求没有处理完成之前无法获取响应长度；使用分块传输编码，需要在响应头设置"),t("code",[v._v("Transfer-encoding")]),v._v(" 字段，并设置它的值为"),t("code",[v._v("chunked")]),v._v("或"),t("code",[v._v("gzip")]),v._v(" "),t("ul",[t("li",[v._v("数据分块")]),v._v(" "),t("li",[v._v("分块传输")]),v._v(" "),t("li",[v._v("流式传输")])])]),v._v(" "),t("li",[t("strong",[v._v("范围请求")]),v._v(" "),t("code",[v._v("HTTP")]),v._v("协议范围请求允许服务器只发送"),t("code",[v._v("HTTP")]),v._v("消息的一部分到客户端，使用场景传送大的媒体文件或者文件下载的断点续传功能，在响应中存在"),t("code",[v._v("Accept-Ranges")]),v._v("首部(并且值不为none)，表示服务器支持范围请求；在一个"),t("code",[v._v("Range")]),v._v("首部中，可以一次性请求多个部分，服务器会以"),t("code",[v._v("multipart")]),v._v("文件的形式将其返回。如果服务器返回的是范围响应，需要使用"),t("code",[v._v("206 Partial Content")]),v._v("状态码。假如所请求的范围不合法，那么服务器会返回"),t("code",[v._v("416 Range Not Satisfiable")]),v._v(" 状态码，表示客户端错误。服务器允许忽略"),t("code",[v._v("Range")]),v._v("首部，从而返回整个文件，状态码用200\n"),t("ul",[t("li",[t("code",[v._v("Range")]),v._v("请求头字段确定，格式为"),t("code",[v._v("bytes=x-y")]),v._v("；单段数据"),t("code",[v._v("Range: bytes=0-9")]),v._v("；多段数据: "),t("code",[v._v("bytes:0-9, 30-39")])])])])]),v._v(" "),t("h2",{attrs:{id:"http如何处理表单数据提交"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http如何处理表单数据提交"}},[v._v("#")]),v._v(" HTTP如何处理表单数据提交")]),v._v(" "),t("p",[v._v("两种主要的表单提交方式，体现在两种不同的"),t("code",[v._v("Content-Type")]),v._v("取值:")]),v._v(" "),t("ul",[t("li",[t("strong",[t("code",[v._v("application/x-www-form-urlencoded")])]),v._v(" "),t("ul",[t("li",[v._v("表单内容的数据会呗编码成以"),t("code",[v._v("&")]),v._v("分隔的键值对")]),v._v(" "),t("li",[v._v("字符以"),t("code",[v._v("URL")]),v._v("编码方式编码")])])]),v._v(" "),t("li",[t("strong",[t("code",[v._v("multipart/form-data")])]),v._v(" "),t("ul",[t("li",[v._v("请求头中的"),t("code",[v._v("Content-Type")]),v._v("字段会包含"),t("code",[v._v("boundary")]),v._v("，且"),t("code",[v._v("boundary")]),v._v("的值由浏览器默认指定")]),v._v(" "),t("li",[v._v("数据分为多个部分，每个部分之间通过分隔符来分隔")])])])]),v._v(" "),t("h2",{attrs:{id:"cookie"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cookie"}},[v._v("#")]),v._v(" Cookie")]),v._v(" "),t("p",[t("code",[v._v("HTTP")]),v._v("是一个无状态协议，每次"),t("code",[v._v("http")]),v._v("请求都是独立、无关的，默认不需要保留任何状态信息，但有时需要保存一些状态，"),t("code",[v._v("HTTP")]),v._v("为此引入了"),t("code",[v._v("Cookie")]),v._v("；"),t("code",[v._v("Cookie")]),v._v("本质上就是浏览器里面存储的一个很小的文本文件，内部以键值对的方式来存储(在chrome开发者面板的"),t("code",[v._v("Application")]),v._v("这一栏可以看到)。向同一个域名下发送请求，都会携带相同的"),t("code",[v._v("Cookie")]),v._v("，服务器拿到"),t("code",[v._v("Cookie")]),v._v("进行解析，便能拿到客户端的状态。而服务端可以通过响应头中的"),t("code",[v._v("Set-Cookie")]),v._v("字段来对客户端写入"),t("code",[v._v("Cookie")])]),v._v(" "),t("h3",{attrs:{id:"cookie属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cookie属性"}},[v._v("#")]),v._v(" Cookie属性")]),v._v(" "),t("p",[t("code",[v._v("Cookie")]),v._v("的有效期有可以通过"),t("code",[v._v("Expires")]),v._v("和"),t("code",[v._v("Max-Age")]),v._v("两个属性来设置")]),v._v(" "),t("ul",[t("li",[t("strong",[t("code",[v._v("Expires")])]),v._v(" 即过期时间")]),v._v(" "),t("li",[t("strong",[t("code",[v._v("Max_Age")])]),v._v(" 一段时间间隔，单位是秒，从浏览器收到报文开始计算")])]),v._v(" "),t("h2",{attrs:{id:"参考文章"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[v._v("#")]),v._v(" 参考文章")]),v._v(" "),t("p",[t("a",{attrs:{href:"https://juejin.cn/post/6844904100035821575#heading-90",target:"_blank",rel:"noopener noreferrer"}},[v._v("HTTP灵魂之问，巩固你的 HTTP 知识体系"),t("OutboundLink")],1)])])}),[],!1,null,null,null);_.default=o.exports}}]);