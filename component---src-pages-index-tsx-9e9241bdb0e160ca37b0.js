(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[691],{6494:function(e){"use strict";e.exports=Object.assign},2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function a(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var l,s,c,u;if(Array.isArray(e)){if((l=e.length)!=i.length)return!1;for(s=l;0!=s--;)if(!a(e[s],i[s]))return!1;return!0}if(n&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(u=e.entries();!(s=u.next()).done;)if(!i.has(s.value[0]))return!1;for(u=e.entries();!(s=u.next()).done;)if(!a(s.value[1],i.get(s.value[0])))return!1;return!0}if(r&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(u=e.entries();!(s=u.next()).done;)if(!i.has(s.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((l=e.length)!=i.length)return!1;for(s=l;0!=s--;)if(e[s]!==i[s])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if((l=(c=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(s=l;0!=s--;)if(!Object.prototype.hasOwnProperty.call(i,c[s]))return!1;if(t&&e instanceof Element)return!1;for(s=l;0!=s--;)if(("_owner"!==c[s]&&"__v"!==c[s]&&"__o"!==c[s]||!e.$$typeof)&&!a(e[c[s]],i[c[s]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return a(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,o=n(7294),a=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var s,c=[];function u(){s=e(c.map((function(e){return e.props}))),d.canUseDOM?t(s):n&&(s=n(s))}var d=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return s},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,c=[],e};var i=o.prototype;return i.UNSAFE_componentWillMount=function(){c.push(this),u()},i.componentDidUpdate=function(){u()},i.componentWillUnmount=function(){var e=c.indexOf(this);c.splice(e,1),u()},i.render=function(){return a.createElement(r,this.props)},o}(o.PureComponent);return i(d,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(d,"canUseDOM",l),d}}},215:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return yt}});var r=n(7294),o={_origin:"https://api.emailjs.com"},a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"https://api.emailjs.com";o._userID=e,o._origin=t},i=function(e,t,n){if(!e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};var l,s,c,u,d,f,p=(0,n(3144).Z)((function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.status=t.status,this.text=t.responseText})),m=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise((function(r,a){var i=new XMLHttpRequest;i.addEventListener("load",(function(e){var t=e.target,n=new p(t);200===n.status||"OK"===n.text?r(n):a(n)})),i.addEventListener("error",(function(e){var t=e.target;a(new p(t))})),i.open("POST",o._origin+e,!0),Object.keys(n).forEach((function(e){i.setRequestHeader(e,n[e])})),i.send(t)}))},h=function(e,t,n,r){var a=r||o._userID;i(a,e,t);var l={lib_version:"3.6.2",user_id:a,service_id:e,template_id:t,template_params:n};return m("/api/v1.0/email/send",JSON.stringify(l),{"Content-type":"application/json"})},y=n(3366),g=n(1597),b=n(4536),v={primary:"#253543",secondary:"#eb7748",text:"#ffffff",textDarker:"#f3f3f3",contrast:"#ffffff"},w={normal:22},E=(0,b.QM)({brandLink:{color:v.text,textDecoration:"none","&:hover":{color:v.textDarker,textShadow:"0 0 3px "+v.secondary}}}),T=["to","internal","domain","children","className","ref"],x=function(e){var t=e.to,n=e.internal,o=e.domain,a=e.children,i=e.className,l=(e.ref,(0,y.Z)(e,T)),s=(null!=i?i:"")+" "+E().brandLink;return n?r.createElement(g.rU,Object.assign({className:s,to:t},l),a):r.createElement("a",Object.assign({href:""+o+t,className:s},l),a)},k=320,C=800,S=1020,O="@media all and (max-width: "+k+"px)",A="@media all and (min-width: "+(k+1)+"px) and (max-width: "+C+"px)",j="@media all and (min-width: "+(C+1)+"px) and (max-width: "+S+"px)",N="@media all and (min-width: "+(S+1)+"px)",I=(0,b.QM)({layout:(l={backgroundColor:v.primary,color:v.text,minHeight:"100vh",display:"grid",gridTemplateRows:"80px 1fr 80px",gridTemplateAreas:'\n      ". header ."\n      ". body ."\n      ". footer ."\n    '},l[O]={gridTemplateColumns:"15px 1fr 15px"},l[A]={gridTemplateColumns:"30px 1fr 30px"},l[j]={gridTemplateColumns:"1fr "+(C-60)+"px 1fr"},l[N]={gridTemplateColumns:"1fr "+(S-60)+"px 1fr"},l["& a"]={color:v.text},l),header:(s={gridArea:"header",alignSelf:"center",alignItems:"center",position:"fixed",top:0,left:0,right:0,background:v.primary,zIndex:100,height:80,display:"flex",margin:"0 auto",padding:"0 30px"},s[j]={width:C+"px"},s[N]={width:S+"px"},s["&:after"]={content:"''",height:1,position:"absolute",right:-2e3,left:-2e3,bottom:0,background:v.contrast},s),body:{gridArea:"body",padding:"30px 0"},footer:{gridArea:"footer"},other:{marginTop:"100px"}}),M={height:"4px",width:"32px",backgroundColor:"white",position:"absolute",borderRadius:"3px",transition:"0.5s all"},L=(0,b.QM)({nav:{display:"flex",width:"100%",fontSize:"30px"},home:{flex:1},hamburger:(c={},c[O]={display:"block"},c[A]={display:"block"},c[j]={display:"none"},c[N]={display:"none"},c),hamburgerButton:{height:"26px",width:"32px",position:"relative",cursor:"pointer"},top:Object.assign({},M,{top:0,".open &":{transform:"rotate(45deg)",top:"11px"}}),middle:Object.assign({},M,{top:"11px",".open &":{opacity:0}}),bottom:Object.assign({},M,{bottom:0,".open &":{transform:"rotate(-45deg)",bottom:"11px"}}),extraLinks:(u={alignSelf:"flex-end"},u[O]={display:"none"},u[A]={display:"none"},u[j]={display:"block"},u[N]={display:"block"},u["& a"]={marginLeft:"30px"},u),link:(d={},d[O]={display:"block"},d[A]={display:"block"},d[j]={display:"inline-block"},d[N]={display:"inline-block"},d),mobileNav:(f={position:"fixed",top:"80px",left:"-100vw",height:"100vh",width:"100vw",padding:"30px",background:v.primary,transition:"left 0.4s","&.open":{left:0},"& a":{padding:{top:10,bottom:10},marginBottom:10}},f[j]={display:"none"},f[N]={display:"none"},f)});function P(){var e=(0,r.useState)(!1),t=e[0],n=e[1],o=L(),a=t?"open":"",i=o.hamburgerButton+" "+a,l=o.mobileNav+" "+a;return r.createElement("header",{className:o.nav},r.createElement("div",{className:o.home},r.createElement(x,{to:"/",internal:!0},"Michael Evans")),r.createElement("div",{className:o.hamburger},r.createElement("div",{onClick:function(){n(!t)},className:i},r.createElement("div",{className:o.top}),r.createElement("div",{className:o.middle}),r.createElement("div",{className:o.bottom}))),r.createElement("div",{className:o.extraLinks},r.createElement(q,null)),r.createElement("nav",{className:l},r.createElement(q,null)))}var _=[],q=function(){var e=L();return r.createElement(r.Fragment,null,_.map((function(t){return r.createElement(x,{key:t.destination,to:t.destination,className:e.link,internal:t.internal,domain:t.domain},t.text)})))},R=(0,b.QM)({footer:{fontSize:"18px",display:"flex",justifyContent:"space-between"},copyright:{alignSelf:"center"},link:{alignSelf:"center"}}),D=function(e){var t=e.className,n=R(),o=(new Date).getFullYear(),a=n.footer+" "+t;return r.createElement("footer",{className:a},r.createElement("div",{className:n.copyright},"Copyright © ",o))};function B(e){var t=e.children,n=I();return r.createElement("div",{className:n.layout},r.createElement("div",{className:n.header},r.createElement(P,null)),r.createElement("div",{className:n.body},t),r.createElement(D,{className:n.footer}))}var H,F,z,Q,Y=n(5697),U=n.n(Y),W=n(4839),V=n.n(W),K=n(2993),G=n.n(K),J=n(6494),X=n.n(J),Z="bodyAttributes",$="htmlAttributes",ee="titleAttributes",te={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},ne=(Object.keys(te).map((function(e){return te[e]})),"charset"),re="cssText",oe="href",ae="http-equiv",ie="innerHTML",le="itemprop",se="name",ce="property",ue="rel",de="src",fe="target",pe={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},me="defaultTitle",he="defer",ye="encodeSpecialCharacters",ge="onChangeClientState",be="titleTemplate",ve=Object.keys(pe).reduce((function(e,t){return e[pe[t]]=t,e}),{}),we=[te.NOSCRIPT,te.SCRIPT,te.STYLE],Ee="data-react-helmet",Te="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},xe=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},ke=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Ce=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Se=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},Oe=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},Ae=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},je=function(e){var t=Pe(e,te.TITLE),n=Pe(e,be);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=Pe(e,me);return t||r||void 0},Ne=function(e){return Pe(e,ge)||function(){}},Ie=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return Ce({},e,t)}),{})},Me=function(e,t){return t.filter((function(e){return void 0!==e[te.BASE]})).map((function(e){return e[te.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var a=r[o].toLowerCase();if(-1!==e.indexOf(a)&&n[a])return t.concat(n)}return t}),[])},Le=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&Be("Helmet: "+e+' should be of type "Array". Instead found type "'+Te(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,a=Object.keys(e),i=0;i<a.length;i++){var l=a[i],s=l.toLowerCase();-1===t.indexOf(s)||n===ue&&"canonical"===e[n].toLowerCase()||s===ue&&"stylesheet"===e[s].toLowerCase()||(n=s),-1===t.indexOf(l)||l!==ie&&l!==re&&l!==le||(n=l)}if(!n||!e[n])return!1;var c=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][c]&&(o[n][c]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(o),i=0;i<a.length;i++){var l=a[i],s=X()({},r[l],o[l]);r[l]=s}return e}),[]).reverse()},Pe=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},_e=(H=Date.now(),function(e){var t=Date.now();t-H>16?(H=t,e(t)):setTimeout((function(){_e(e)}),0)}),qe=function(e){return clearTimeout(e)},Re="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||_e:n.g.requestAnimationFrame||_e,De="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||qe:n.g.cancelAnimationFrame||qe,Be=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},He=null,Fe=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,l=e.noscriptTags,s=e.onChangeClientState,c=e.scriptTags,u=e.styleTags,d=e.title,f=e.titleAttributes;Ye(te.BODY,r),Ye(te.HTML,o),Qe(d,f);var p={baseTag:Ue(te.BASE,n),linkTags:Ue(te.LINK,a),metaTags:Ue(te.META,i),noscriptTags:Ue(te.NOSCRIPT,l),scriptTags:Ue(te.SCRIPT,c),styleTags:Ue(te.STYLE,u)},m={},h={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(h[e]=p[e].oldTags)})),t&&t(),s(e,m,h)},ze=function(e){return Array.isArray(e)?e.join(""):e},Qe=function(e,t){void 0!==e&&document.title!==e&&(document.title=ze(e)),Ye(te.TITLE,t)},Ye=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(Ee),o=r?r.split(","):[],a=[].concat(o),i=Object.keys(t),l=0;l<i.length;l++){var s=i[l],c=t[s]||"";n.getAttribute(s)!==c&&n.setAttribute(s,c),-1===o.indexOf(s)&&o.push(s);var u=a.indexOf(s);-1!==u&&a.splice(u,1)}for(var d=a.length-1;d>=0;d--)n.removeAttribute(a[d]);o.length===a.length?n.removeAttribute(Ee):n.getAttribute(Ee)!==i.join(",")&&n.setAttribute(Ee,i.join(","))}},Ue=function(e,t){var n=document.head||document.querySelector(te.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),a=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===ie)n.innerHTML=t.innerHTML;else if(r===re)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var l=void 0===t[r]?"":t[r];n.setAttribute(r,l)}n.setAttribute(Ee,"true"),o.some((function(e,t){return i=t,n.isEqualNode(e)}))?o.splice(i,1):a.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:a}},We=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},Ve=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[pe[n]||n]=e[n],t}),t)},Ke=function(e,t,n){switch(e){case te.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(o={key:e})[Ee]=!0,a=Ve(n,o),[r.createElement(te.TITLE,a,e)];var e,n,o,a},toString:function(){return function(e,t,n,r){var o=We(n),a=ze(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+Ae(a,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+Ae(a,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case Z:case $:return{toComponent:function(){return Ve(t)},toString:function(){return We(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var o,a=((o={key:n})[Ee]=!0,o);return Object.keys(t).forEach((function(e){var n=pe[e]||e;if(n===ie||n===re){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),r.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===ie||e===re)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+Ae(r[t],n)+'"';return e?e+" "+o:o}),""),a=r.innerHTML||r.cssText||"",i=-1===we.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(i?"/>":">"+a+"</"+e+">")}),"")}(e,t,n)}}}},Ge=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,l=e.noscriptTags,s=e.scriptTags,c=e.styleTags,u=e.title,d=void 0===u?"":u,f=e.titleAttributes;return{base:Ke(te.BASE,t,r),bodyAttributes:Ke(Z,n,r),htmlAttributes:Ke($,o,r),link:Ke(te.LINK,a,r),meta:Ke(te.META,i,r),noscript:Ke(te.NOSCRIPT,l,r),script:Ke(te.SCRIPT,s,r),style:Ke(te.STYLE,c,r),title:Ke(te.TITLE,{title:d,titleAttributes:f},r)}},Je=V()((function(e){return{baseTag:Me([oe,fe],e),bodyAttributes:Ie(Z,e),defer:Pe(e,he),encode:Pe(e,ye),htmlAttributes:Ie($,e),linkTags:Le(te.LINK,[ue,oe],e),metaTags:Le(te.META,[se,ne,ae,ce,le],e),noscriptTags:Le(te.NOSCRIPT,[ie],e),onChangeClientState:Ne(e),scriptTags:Le(te.SCRIPT,[de,ie],e),styleTags:Le(te.STYLE,[re],e),title:je(e),titleAttributes:Ie(ee,e)}}),(function(e){He&&De(He),e.defer?He=Re((function(){Fe(e,(function(){He=null}))})):(Fe(e),He=null)}),Ge)((function(){return null})),Xe=(F=Je,Q=z=function(e){function t(){return xe(this,t),Oe(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!G()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case te.SCRIPT:case te.NOSCRIPT:return{innerHTML:t};case te.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,a=e.nestedChildren;return Ce({},r,((t={})[n.type]=[].concat(r[n.type]||[],[Ce({},o,this.mapNestedChildrenToProps(n,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,a=e.newChildProps,i=e.nestedChildren;switch(r.type){case te.TITLE:return Ce({},o,((t={})[r.type]=i,t.titleAttributes=Ce({},a),t));case te.BODY:return Ce({},o,{bodyAttributes:Ce({},a)});case te.HTML:return Ce({},o,{htmlAttributes:Ce({},a)})}return Ce({},o,((n={})[r.type]=Ce({},a),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=Ce({},t);return Object.keys(e).forEach((function(t){var r;n=Ce({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,o={};return r.Children.forEach(e,(function(e){if(e&&e.props){var r=e.props,a=r.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[ve[n]||n]=e[n],t}),t)}(Se(r,["children"]));switch(n.warnOnInvalidChildren(e,a),e.type){case te.LINK:case te.META:case te.NOSCRIPT:case te.SCRIPT:case te.STYLE:o=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:o,newChildProps:i,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(o,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=Se(e,["children"]),o=Ce({},n);return t&&(o=this.mapChildrenToProps(t,o)),r.createElement(F,o)},ke(t,null,[{key:"canUseDOM",set:function(e){F.canUseDOM=e}}]),t}(r.Component),z.propTypes={base:U().object,bodyAttributes:U().object,children:U().oneOfType([U().arrayOf(U().node),U().node]),defaultTitle:U().string,defer:U().bool,encodeSpecialCharacters:U().bool,htmlAttributes:U().object,link:U().arrayOf(U().object),meta:U().arrayOf(U().object),noscript:U().arrayOf(U().object),onChangeClientState:U().func,script:U().arrayOf(U().object),style:U().arrayOf(U().object),title:U().string,titleAttributes:U().object,titleTemplate:U().string},z.defaultProps={defer:!0,encodeSpecialCharacters:!0},z.peek=F.peek,z.rewind=function(){var e=F.rewind();return e||(e=Ge({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},Q);Xe.renderStatic=Xe.rewind;var Ze,$e,et=function(e){var t,n,o,a,i=e.title,l=e.pathname,s=e.description,c=void 0===s?"":s,u=(0,g.K2)("2554738622"),d=u.site,f=u.featuredImage,p=null==f||null===(t=f.childImageSharp)||void 0===t?void 0:t.gatsbyImageData,m=i?i+" | Michael Evans | Freelance Software Engineer":null==d||null===(n=d.siteMetadata)||void 0===n?void 0:n.title,h=[{name:"description",content:null!=c?c:null==d||null===(o=d.siteMetadata)||void 0===o?void 0:o.description},{property:"og:title",content:m},{property:"og:description",content:c},{property:"og:site_name",content:d.siteMetadata.og.siteName},{property:"og:type",content:"website"},{property:"og:url",content:""+(null==d||null===(a=d.siteMetadata)||void 0===a?void 0:a.siteUrl)+l},{property:"og:image",content:p.images.fallback.src},{property:"og:image:width",content:p.width},{property:"og:image:height",content:p.height},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:description",content:c},{name:"twitter:title",content:m},{name:"twitter:image",content:p.images.fallback.src},{name:"twitter:creator",content:d.siteMetadata.og.twitterCreator},{name:"robots",content:"index,follow"}];return r.createElement(Xe,null,r.createElement("title",null,m),h.map((function(e){var t;return r.createElement("meta",Object.assign({key:null!==(t=e.name)&&void 0!==t?t:e.property},e))})))},tt=(0,b.QM)({input:{outline:"none",border:"1px solid transparent",fontSize:w.normal,padding:10,height:40,width:"100%",borderRadius:10,"&:active":{borderColor:v.contrast}},textarea:{height:"unset"}}),nt=function(e){var t=e.placeholder,n=void 0===t?"":t,o=e.value,a=e.setValue,i=e.type,l=tt(),s={value:o,onChange:function(e){a(e.target.value)},placeholder:n,className:"text"===i?l.input:l.input+" "+l.textarea};return"text"===i?r.createElement("input",Object.assign({type:"text"},s)):r.createElement("textarea",Object.assign({rows:4},s))},rt=(0,b.QM)({form:{width:"100%"}}),ot=function(e){var t=e.onSubmit,n=e.children,o=e.className,a=void 0===o?"":o,i=rt();return r.createElement("form",{onSubmit:t,className:i.form+" "+a},n)},at=(0,b.QM)({formGroup:{display:"flex",flexDirection:"column","& + &":{marginTop:30}}}),it=function(e){var t=e.children,n=at();return r.createElement("div",{className:n.formGroup},t)},lt=(0,b.QM)({label:{fontSize:w.normal,marginBottom:10}}),st=function(e){var t=e.text,n=lt();return r.createElement("div",{className:n.label},t)},ct=(0,b.QM)({button:{padding:{left:30,right:30,top:5,bottom:5},backgroundColor:v.secondary,color:v.text,border:"1px solid "+v.text,height:40,fontSize:w.normal,borderRadius:20,cursor:"pointer",margin:{left:"auto",right:"auto"},"&:hover":{filter:"brightness(80%)"}}}),ut=function(e){var t=e.text,n=ct();return r.createElement("button",{type:"submit",className:n.button},t)},dt={flexDirection:"column"},ft={marginBottom:60},pt=(0,b.QM)({container:(Ze={display:"flex"},Ze[O]=dt,Ze[A]=dt,Ze),leftColumn:($e={flexBasis:"50%",marginRight:60},$e[O]=ft,$e[A]=ft,$e),rightColumn:{flexBasis:"50%"},errorMessage:{marginTop:10},submitButton:{backgroundColor:v.secondary,color:v.text,border:"1px solid",borderColor:v.text},teaser:{marginTop:50},faqs:{marginTop:50}}),mt=(0,b.QM)({question:{fontSize:24,padding:10,border:"1px solid",cursor:"pointer"},answer:{padding:10,border:"1px solid"},buttonContainer:{marginTop:10,display:"flex"},button:{padding:{left:30,right:30,top:5,bottom:5},backgroundColor:v.secondary,color:v.text,border:"1px solid "+v.text,height:40,fontSize:w.normal,borderRadius:20,cursor:"pointer",textDecoration:"none",margin:{left:"auto",right:"auto"},"&:hover":{filter:"brightness(80%)"}}}),ht=function(e){var t=e.question,n=e.answer,o=mt(),a=(0,r.useState)(!1),i=a[0],l=a[1];return r.createElement("div",null,r.createElement("div",{className:o.question,onClick:function(){l(!i)}},t),i&&r.createElement("div",{className:o.answer},r.createElement("p",null,n),r.createElement("div",{className:o.buttonContainer},r.createElement("a",{href:"#sign-up",className:o.button},"Sign up now"))))};a("user_iuPsQoApXuEb73mveBtmL");function yt(e){var t=e.location.pathname,n=pt(),o=(0,r.useState)(""),a=o[0],i=o[1],l=(0,r.useState)(!1),s=l[0],c=l[1],u=(0,r.useState)(""),d=u[0],f=u[1],p=(0,r.useState)(!1),m=p[0],y=p[1],g=(0,r.useState)(!1),b=g[0],v=g[1];return r.createElement(B,null,r.createElement(et,{title:"Dev Essentials Course",description:"Michael Evans is a Software Engineer based in Berlin, Germany. With over 5 years of experience in the industry, he enjoys working across the full stack with technologies such as Ruby on Rails, React, Node and Typescript.",pathname:t}),r.createElement("h1",{id:"sign-up"},"Dev Essentials Course"),r.createElement("div",{className:n.container},r.createElement("div",{className:n.leftColumn},r.createElement("p",null,"Dev essentials is a digital course for career-switchers entering the development industry"),r.createElement("br",null),r.createElement("p",null,"In it you will learn about:"),r.createElement("ul",null,r.createElement("li",null,"Fundamental developer skills"),r.createElement("li",null,"Getting your first job"),r.createElement("li",null,"Running an effective job search"),r.createElement("li",null,"Interview processes"),r.createElement("li",null,"Working on a team of developers"),r.createElement("li",null,"And more..."))),r.createElement("div",{className:n.rightColumn},r.createElement("h2",null,"Sign up for early access"),r.createElement(ot,{onSubmit:function(e){(e.preventDefault(),""!==a)?(c(!1),""!==d?(y(!1),h("service_5y4bhmk","template_qmt9kor",{name:a,emailAddress:d,message:"I'm interested in the Dev Essentials course"}),i(""),f(""),v(!0)):y(!0)):c(!0)},action:""},r.createElement(it,null,r.createElement(st,{text:"Name",htmlFor:"name"}),r.createElement(nt,{type:"text",placeholder:"Name",id:"name",value:a,setValue:i}),s&&r.createElement("div",{className:n.errorMessage},"Name is a required field")),r.createElement(it,null,r.createElement(st,{text:"Email",htmlFor:"email"}),r.createElement(nt,{type:"text",placeholder:"Email",id:"email",value:d,setValue:f}),m&&r.createElement("div",{className:n.errorMessage},"Email is a required field")),r.createElement(it,null,r.createElement(ut,{text:"Sign up"})),b&&r.createElement(r.Fragment,null,r.createElement("br",null),r.createElement("p",null,"Thanks for signing up - I'll let you know once the course is ready!"))))),r.createElement("div",{className:n.teaser},r.createElement("h2",null,"Content Overview"),r.createElement("p",null,"The course puts a huge focus on project-based learning. All the skills you gain will be introduced in video or written form and solidified and internalised by practical exercises."),r.createElement("br",null),r.createElement("p",null,"Let's take a look at what you will learn:"),r.createElement("ul",null,r.createElement("li",null,r.createElement("strong",null,"software fundamentals")," - start with the skills that are universal to all professional software roles"),r.createElement("li",null,r.createElement("strong",null,"frontend fundamentals")," - learn the basic skills and technologies that every frontend developer needs"),r.createElement("li",null,r.createElement("strong",null,"modern technology stack")," - master the skills that employers are looking for right now"),r.createElement("li",null,r.createElement("strong",null,"professional mastery")," - learn the skills that professionals take for granted: soft skills that distinguish top performing developers from the rest"),r.createElement("li",null,r.createElement("strong",null,"advanced concepts")," - take your skills to the next level to guarantee success as a professional developer"),r.createElement("li",null,r.createElement("strong",null,"job search system")," - use the system I've created to find and apply for exactly the right jobs"),r.createElement("li",null,r.createElement("strong",null,"BONUS: personal finance for developers")," - make your money work for you")),r.createElement("br",null),r.createElement("p",null,"Why take the course?"),r.createElement("ul",null,r.createElement("li",null,"you want to get a job as a professional software developer - I want to help you gain the skills and experience you'll need to get your first developer job - this course is aimed at getting you proficient with the fundamentals of being a developer, as well as the latest technologies that frontend developers used. If your ultimate goal is backend or full-stack development, this will give you a great foundation and set you up for success"),r.createElement("li",null,"actionable content from an expert developer - I poured all my professional experience into the creation of this course and distilled it a concise and actionable course - each section contains a set of steps for you to follow that will lead to success"),r.createElement("li",null,"self-paced yet efficient - go at your own pace, without wasting time learning things that won't help you find a developer job and perform it excellently"),r.createElement("li",null,"money back guarantee - take the course for 30 days and if you're not satisfied, I'll give you a full time - no questions asked, no strings attached, no hard feelings")),r.createElement("br",null),r.createElement("p",null,"Why not take the course?"),r.createElement("ul",null,r.createElement("li",null,"if you want to be a mobile or desktop developer, a data scientist, a systems administrator or anything else that isn't focused on web development - this course is focused on the web, for other disciplines, you're probably better looking elsewhere"),r.createElement("li",null,"if you want a fast solution regardless of cost - this isn't a bootcamp. There are many good Bootcamps out there that can make you a developer in a couple of months of you don't mind spending a lot and quitting your job with no guarantees of future employment - this course has been designed to do alongside full time work or study, with you taking the leap into the software industry when you're ready"),r.createElement("li",null,"if you just want to learn a language or framework - the course is focused more on what to learn and the soft skills that you won't find in a typical video course. I will include links to resources that I recommend where necessary"))),r.createElement("div",{className:n.faqs},r.createElement("h2",null,"FAQs"),r.createElement(ht,{question:"What technologies are included?",answer:"As part of this course you'll be learning HTML, CSS, Sass, JavaScript, React as well as some TypeScript on top of command line skills, NPM, Jekyll"}),r.createElement("br",null),r.createElement(ht,{question:"How long should it take to complete?",answer:"There is around 8 hours of video content and each project should take between 1 and 3 hours to complete. However, there are no time limits or deadlines, and you can take as long as you need on each section. I suggest spending up to 6 weeks on the course and then using it as a long term resource for the future - there is plenty of content that will remain relevant well into your career as a developer"}),r.createElement("br",null),r.createElement(ht,{question:"How long do I have access after I sign up?",answer:"You'll get unlimited, lifetime access to the videos and all resources in the course."}),r.createElement("br",null),r.createElement(ht,{question:"What if I change my mind?",answer:"If you decide within 30 days of buying the course, email me and I'll issue you a full refund - no questions asked"}),r.createElement("br",null),r.createElement(ht,{question:"I'm still not sure if this course is right for me. What do I do?",answer:"Book a call with me for a free consultation. We can discuss your situation and I'll advise you on whether this is the right solution for you. If you sign up and you're unhappy with the course, you can request a refund any time in the first 30 days."}),r.createElement("br",null),r.createElement(ht,{question:"What are the benefits of being a developer?",answer:"Software development is a highly sought after profession. The skills involved are also in high demand in other industries."})))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-9e9241bdb0e160ca37b0.js.map