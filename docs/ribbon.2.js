/*
Usage:

<script src="https://jacquev6.net/ribbon.2.js"></script>

<script src="https://jacquev6.net/ribbon.2.js" data-project="name of GitHub project"></script>

<script src="https://jacquev6.net/ribbon.2.js" data-container="id of dom element"></script>
The dom element *must* have style position: relative
*/


/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-csstransforms-setclasses !*/
!function(e,n,t){function r(e){var n=_.className,t=Modernizr._config.classPrefix||"";if(x&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),x?_.className.baseVal=n:_.className=n)}function o(e,n){return typeof e===n}function s(){var e,n,t,r,s,i,l;for(var a in S)if(S.hasOwnProperty(a)){if(e=[],n=S[a],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(r=o(n.fn,"function")?n.fn():n.fn,s=0;s<e.length;s++)i=e[s],l=i.split("."),1===l.length?Modernizr[l[0]]=r:(!Modernizr[l[0]]||Modernizr[l[0]]instanceof Boolean||(Modernizr[l[0]]=new Boolean(Modernizr[l[0]])),Modernizr[l[0]][l[1]]=r),C.push((r?"":"no-")+l.join("-"))}}function i(e,n){return!!~(""+e).indexOf(n)}function l(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function a(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):x?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function f(e,n){return function(){return e.apply(n,arguments)}}function u(e,n,t){var r;for(var s in e)if(e[s]in n)return t===!1?e[s]:(r=n[e[s]],o(r,"function")?f(r,t||n):r);return!1}function c(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function d(n,t,r){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,n,t);var s=e.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(s){var i=s.error?"error":"log";s[i].call(s,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!t&&n.currentStyle&&n.currentStyle[r];return o}function p(){var e=n.body;return e||(e=a(x?"svg":"body"),e.fake=!0),e}function m(e,t,r,o){var s,i,l,f,u="modernizr",c=a("div"),d=p();if(parseInt(r,10))for(;r--;)l=a("div"),l.id=o?o[r]:u+(r+1),c.appendChild(l);return s=a("style"),s.type="text/css",s.id="s"+u,(d.fake?d:c).appendChild(s),d.appendChild(c),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(n.createTextNode(e)),c.id=u,d.fake&&(d.style.background="",d.style.overflow="hidden",f=_.style.overflow,_.style.overflow="hidden",_.appendChild(d)),i=t(c,e),d.fake?(d.parentNode.removeChild(d),_.style.overflow=f,_.offsetHeight):c.parentNode.removeChild(c),!!i}function y(n,r){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(c(n[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];o--;)s.push("("+c(n[o])+":"+r+")");return s=s.join(" or "),m("@supports ("+s+") { #modernizr { position: absolute; } }",function(e){return"absolute"==d(e,null,"position")})}return t}function g(e,n,r,s){function f(){c&&(delete N.style,delete N.modElem)}if(s=o(s,"undefined")?!1:s,!o(r,"undefined")){var u=y(e,r);if(!o(u,"undefined"))return u}for(var c,d,p,m,g,v=["modernizr","tspan","samp"];!N.style&&v.length;)c=!0,N.modElem=a(v.shift()),N.style=N.modElem.style;for(p=e.length,d=0;p>d;d++)if(m=e[d],g=N.style[m],i(m,"-")&&(m=l(m)),N.style[m]!==t){if(s||o(r,"undefined"))return f(),"pfx"==n?m:!0;try{N.style[m]=r}catch(h){}if(N.style[m]!=g)return f(),"pfx"==n?m:!0}return f(),!1}function v(e,n,t,r,s){var i=e.charAt(0).toUpperCase()+e.slice(1),l=(e+" "+P.join(i+" ")+i).split(" ");return o(n,"string")||o(n,"undefined")?g(l,n,r,s):(l=(e+" "+z.join(i+" ")+i).split(" "),u(l,n,t))}function h(e,n,r){return v(e,t,t,n,r)}var C=[],S=[],w={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){S.push({name:e,fn:n,options:t})},addAsyncTest:function(e){S.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=w,Modernizr=new Modernizr;var _=n.documentElement,x="svg"===_.nodeName.toLowerCase(),b="Moz O ms Webkit",P=w._config.usePrefixes?b.split(" "):[];w._cssomPrefixes=P;var z=w._config.usePrefixes?b.toLowerCase().split(" "):[];w._domPrefixes=z;var E={elem:a("modernizr")};Modernizr._q.push(function(){delete E.elem});var N={style:E.elem.style};Modernizr._q.unshift(function(){delete N.style}),w.testAllProps=v,w.testAllProps=h,Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&h("transform","scale(1)",!0)}),s(),r(C),delete w.addTest,delete w.addAsyncTest;for(var A=0;A<Modernizr._q.length;A++)Modernizr._q[A]();e.Modernizr=Modernizr}(window,document);


// I love jQuery...
const css = document.createElement('link')
css.setAttribute('rel', 'stylesheet');
css.setAttribute('type', 'text/css');
css.setAttribute('href', document.currentScript.getAttribute('src').replace('.js', '.css'));
document.getElementsByTagName('head')[0].append(css)


const project = (function(){
  const project_name = document.currentScript.dataset.project
  if (project_name) {
    return '<p><a href="https://github.com/jacquev6/' + project_name + '">Fork me on GitHub</a></p>'
  } else {
    return '<p class="jacquev6_ribbon_hidden">Hidden</p>'
  }
})()


const container = (function() {
  const container_id = document.currentScript.dataset.container
  if (container_id) {
    return document.getElementById(container_id)
  } else {
    return document.getElementsByTagName('body')[0]
  }
})()


const ribbon = document.createElement('div')
ribbon.setAttribute('id', 'jacquev6_ribbon')
ribbon.innerHTML = '<div>' + project + '<p><a href="https://vincent-jacques.net/">More projects by jacquev6</a></p></div>'
container.prepend(ribbon)
