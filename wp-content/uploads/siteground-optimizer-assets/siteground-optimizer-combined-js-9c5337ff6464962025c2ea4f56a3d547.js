/*! jQuery Migrate v3.3.2 | (c) OpenJS Foundation and other contributors | jquery.org/license */
"undefined"==typeof jQuery.migrateMute&&(jQuery.migrateMute=!0),function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],function(e){return t(e,window)}):"object"==typeof module&&module.exports?module.exports=t(require("jquery"),window):t(jQuery,window)}(function(s,n){"use strict";function e(e){return 0<=function(e,t){for(var r=/^(\d+)\.(\d+)\.(\d+)/,n=r.exec(e)||[],o=r.exec(t)||[],i=1;i<=3;i++){if(+o[i]<+n[i])return 1;if(+n[i]<+o[i])return-1}return 0}(s.fn.jquery,e)}s.migrateVersion="3.3.2",n.console&&n.console.log&&(s&&e("3.0.0")||n.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED"),s.migrateWarnings&&n.console.log("JQMIGRATE: Migrate plugin loaded multiple times"),n.console.log("JQMIGRATE: Migrate is installed"+(s.migrateMute?"":" with logging active")+", version "+s.migrateVersion));var r={};function u(e){var t=n.console;s.migrateDeduplicateWarnings&&r[e]||(r[e]=!0,s.migrateWarnings.push(e),t&&t.warn&&!s.migrateMute&&(t.warn("JQMIGRATE: "+e),s.migrateTrace&&t.trace&&t.trace()))}function t(e,t,r,n){Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get:function(){return u(n),r},set:function(e){u(n),r=e}})}function o(e,t,r,n){e[t]=function(){return u(n),r.apply(this,arguments)}}s.migrateDeduplicateWarnings=!0,s.migrateWarnings=[],void 0===s.migrateTrace&&(s.migrateTrace=!0),s.migrateReset=function(){r={},s.migrateWarnings.length=0},"BackCompat"===n.document.compatMode&&u("jQuery is not compatible with Quirks Mode");var i,a,c,d={},l=s.fn.init,p=s.find,f=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,y=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,m=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;for(i in s.fn.init=function(e){var t=Array.prototype.slice.call(arguments);return"string"==typeof e&&"#"===e&&(u("jQuery( '#' ) is not a valid selector"),t[0]=[]),l.apply(this,t)},s.fn.init.prototype=s.fn,s.find=function(t){var r=Array.prototype.slice.call(arguments);if("string"==typeof t&&f.test(t))try{n.document.querySelector(t)}catch(e){t=t.replace(y,function(e,t,r,n){return"["+t+r+'"'+n+'"]'});try{n.document.querySelector(t),u("Attribute selector with '#' must be quoted: "+r[0]),r[0]=t}catch(e){u("Attribute selector with '#' was not fixed: "+r[0])}}return p.apply(this,r)},p)Object.prototype.hasOwnProperty.call(p,i)&&(s.find[i]=p[i]);o(s.fn,"size",function(){return this.length},"jQuery.fn.size() is deprecated and removed; use the .length property"),o(s,"parseJSON",function(){return JSON.parse.apply(null,arguments)},"jQuery.parseJSON is deprecated; use JSON.parse"),o(s,"holdReady",s.holdReady,"jQuery.holdReady is deprecated"),o(s,"unique",s.uniqueSort,"jQuery.unique is deprecated; use jQuery.uniqueSort"),t(s.expr,"filters",s.expr.pseudos,"jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"),t(s.expr,":",s.expr.pseudos,"jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"),e("3.1.1")&&o(s,"trim",function(e){return null==e?"":(e+"").replace(m,"")},"jQuery.trim is deprecated; use String.prototype.trim"),e("3.2.0")&&(o(s,"nodeName",function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},"jQuery.nodeName is deprecated"),o(s,"isArray",Array.isArray,"jQuery.isArray is deprecated; use Array.isArray")),e("3.3.0")&&(o(s,"isNumeric",function(e){var t=typeof e;return("number"==t||"string"==t)&&!isNaN(e-parseFloat(e))},"jQuery.isNumeric() is deprecated"),s.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){d["[object "+t+"]"]=t.toLowerCase()}),o(s,"type",function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?d[Object.prototype.toString.call(e)]||"object":typeof e},"jQuery.type is deprecated"),o(s,"isFunction",function(e){return"function"==typeof e},"jQuery.isFunction() is deprecated"),o(s,"isWindow",function(e){return null!=e&&e===e.window},"jQuery.isWindow() is deprecated")),s.ajax&&(a=s.ajax,c=/(=)\?(?=&|$)|\?\?/,s.ajax=function(){var e=a.apply(this,arguments);return e.promise&&(o(e,"success",e.done,"jQXHR.success is deprecated and removed"),o(e,"error",e.fail,"jQXHR.error is deprecated and removed"),o(e,"complete",e.always,"jQXHR.complete is deprecated and removed")),e},e("4.0.0")||s.ajaxPrefilter("+json",function(e){!1!==e.jsonp&&(c.test(e.url)||"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&c.test(e.data))&&u("JSON-to-JSONP auto-promotion is deprecated")}));var g=s.fn.removeAttr,h=s.fn.toggleClass,v=/\S+/g;function j(e){return e.replace(/-([a-z])/g,function(e,t){return t.toUpperCase()})}s.fn.removeAttr=function(e){var r=this;return s.each(e.match(v),function(e,t){s.expr.match.bool.test(t)&&(u("jQuery.fn.removeAttr no longer sets boolean properties: "+t),r.prop(t,!1))}),g.apply(this,arguments)};var Q,b=!(s.fn.toggleClass=function(t){return void 0!==t&&"boolean"!=typeof t?h.apply(this,arguments):(u("jQuery.fn.toggleClass( boolean ) is deprecated"),this.each(function(){var e=this.getAttribute&&this.getAttribute("class")||"";e&&s.data(this,"__className__",e),this.setAttribute&&this.setAttribute("class",!e&&!1!==t&&s.data(this,"__className__")||"")}))}),w=/^[a-z]/,x=/^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;s.swap&&s.each(["height","width","reliableMarginRight"],function(e,t){var r=s.cssHooks[t]&&s.cssHooks[t].get;r&&(s.cssHooks[t].get=function(){var e;return b=!0,e=r.apply(this,arguments),b=!1,e})}),s.swap=function(e,t,r,n){var o,i,a={};for(i in b||u("jQuery.swap() is undocumented and deprecated"),t)a[i]=e.style[i],e.style[i]=t[i];for(i in o=r.apply(e,n||[]),t)e.style[i]=a[i];return o},e("3.4.0")&&"undefined"!=typeof Proxy&&(s.cssProps=new Proxy(s.cssProps||{},{set:function(){return u("JQMIGRATE: jQuery.cssProps is deprecated"),Reflect.set.apply(this,arguments)}})),s.cssNumber||(s.cssNumber={}),Q=s.fn.css,s.fn.css=function(e,t){var r,n,o=this;return e&&"object"==typeof e&&!Array.isArray(e)?(s.each(e,function(e,t){s.fn.css.call(o,e,t)}),this):("number"==typeof t&&(r=j(e),n=r,w.test(n)&&x.test(n[0].toUpperCase()+n.slice(1))||s.cssNumber[r]||u('Number-typed values are deprecated for jQuery.fn.css( "'+e+'", value )')),Q.apply(this,arguments))};var A,k,S,M,N=s.data;s.data=function(e,t,r){var n,o,i;if(t&&"object"==typeof t&&2===arguments.length){for(i in n=s.hasData(e)&&N.call(this,e),o={},t)i!==j(i)?(u("jQuery.data() always sets/gets camelCased names: "+i),n[i]=t[i]):o[i]=t[i];return N.call(this,e,o),t}return t&&"string"==typeof t&&t!==j(t)&&(n=s.hasData(e)&&N.call(this,e))&&t in n?(u("jQuery.data() always sets/gets camelCased names: "+t),2<arguments.length&&(n[t]=r),n[t]):N.apply(this,arguments)},s.fx&&(S=s.Tween.prototype.run,M=function(e){return e},s.Tween.prototype.run=function(){1<s.easing[this.easing].length&&(u("'jQuery.easing."+this.easing.toString()+"' should use only one argument"),s.easing[this.easing]=M),S.apply(this,arguments)},A=s.fx.interval||13,k="jQuery.fx.interval is deprecated",n.requestAnimationFrame&&Object.defineProperty(s.fx,"interval",{configurable:!0,enumerable:!0,get:function(){return n.document.hidden||u(k),A},set:function(e){u(k),A=e}}));var R=s.fn.load,H=s.event.add,C=s.event.fix;s.event.props=[],s.event.fixHooks={},t(s.event.props,"concat",s.event.props.concat,"jQuery.event.props.concat() is deprecated and removed"),s.event.fix=function(e){var t,r=e.type,n=this.fixHooks[r],o=s.event.props;if(o.length){u("jQuery.event.props are deprecated and removed: "+o.join());while(o.length)s.event.addProp(o.pop())}if(n&&!n._migrated_&&(n._migrated_=!0,u("jQuery.event.fixHooks are deprecated and removed: "+r),(o=n.props)&&o.length))while(o.length)s.event.addProp(o.pop());return t=C.call(this,e),n&&n.filter?n.filter(t,e):t},s.event.add=function(e,t){return e===n&&"load"===t&&"complete"===n.document.readyState&&u("jQuery(window).on('load'...) called after load event occurred"),H.apply(this,arguments)},s.each(["load","unload","error"],function(e,t){s.fn[t]=function(){var e=Array.prototype.slice.call(arguments,0);return"load"===t&&"string"==typeof e[0]?R.apply(this,e):(u("jQuery.fn."+t+"() is deprecated"),e.splice(0,0,t),arguments.length?this.on.apply(this,e):(this.triggerHandler.apply(this,e),this))}}),s.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,r){s.fn[r]=function(e,t){return u("jQuery.fn."+r+"() event shorthand is deprecated"),0<arguments.length?this.on(r,null,e,t):this.trigger(r)}}),s(function(){s(n.document).triggerHandler("ready")}),s.event.special.ready={setup:function(){this===n.document&&u("'ready' event is deprecated")}},s.fn.extend({bind:function(e,t,r){return u("jQuery.fn.bind() is deprecated"),this.on(e,null,t,r)},unbind:function(e,t){return u("jQuery.fn.unbind() is deprecated"),this.off(e,null,t)},delegate:function(e,t,r,n){return u("jQuery.fn.delegate() is deprecated"),this.on(t,e,r,n)},undelegate:function(e,t,r){return u("jQuery.fn.undelegate() is deprecated"),1===arguments.length?this.off(e,"**"):this.off(t,e||"**",r)},hover:function(e,t){return u("jQuery.fn.hover() is deprecated"),this.on("mouseenter",e).on("mouseleave",t||e)}});function T(e){var t=n.document.implementation.createHTMLDocument("");return t.body.innerHTML=e,t.body&&t.body.innerHTML}function P(e){var t=e.replace(O,"<$1></$2>");t!==e&&T(e)!==T(t)&&u("HTML tags must be properly nested and closed: "+e)}var O=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,q=s.htmlPrefilter;s.UNSAFE_restoreLegacyHtmlPrefilter=function(){s.htmlPrefilter=function(e){return P(e),e.replace(O,"<$1></$2>")}},s.htmlPrefilter=function(e){return P(e),q(e)};var D,_=s.fn.offset;s.fn.offset=function(){var e=this[0];return!e||e.nodeType&&e.getBoundingClientRect?_.apply(this,arguments):(u("jQuery.fn.offset() requires a valid DOM element"),arguments.length?this:void 0)},s.ajax&&(D=s.param,s.param=function(e,t){var r=s.ajaxSettings&&s.ajaxSettings.traditional;return void 0===t&&r&&(u("jQuery.param() no longer uses jQuery.ajaxSettings.traditional"),t=r),D.call(this,e,t)});var E,F,J=s.fn.andSelf||s.fn.addBack;return s.fn.andSelf=function(){return u("jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"),J.apply(this,arguments)},s.Deferred&&(E=s.Deferred,F=[["resolve","done",s.Callbacks("once memory"),s.Callbacks("once memory"),"resolved"],["reject","fail",s.Callbacks("once memory"),s.Callbacks("once memory"),"rejected"],["notify","progress",s.Callbacks("memory"),s.Callbacks("memory")]],s.Deferred=function(e){var i=E(),a=i.promise();return i.pipe=a.pipe=function(){var o=arguments;return u("deferred.pipe() is deprecated"),s.Deferred(function(n){s.each(F,function(e,t){var r="function"==typeof o[e]&&o[e];i[t[1]](function(){var e=r&&r.apply(this,arguments);e&&"function"==typeof e.promise?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[t[0]+"With"](this===a?n.promise():this,r?[e]:arguments)})}),o=null}).promise()},e&&e.call(i,i),i},s.Deferred.exceptionHook=E.exceptionHook),s});
;
/* <![CDATA[ */
(function() {
	var dropdown = document.getElementById( "archives-dropdown--1" );
	function onSelectChange() {
		if ( dropdown.options[ dropdown.selectedIndex ].value !== '' ) {
			document.location.href = this.options[ this.selectedIndex ].value;
		}
	}
	dropdown.onchange = onSelectChange;
})();
/* ]]> */;
/*! lazysizes - v5.2.0 */
!function(a,b){var c=b(a,a.document,Date);a.lazySizes=c,"object"==typeof module&&module.exports&&(module.exports=c)}("undefined"!=typeof window?window:{},function(a,b,c){"use strict";var d,e;if(function(){var b,c={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};e=a.lazySizesConfig||a.lazysizesConfig||{};for(b in c)b in e||(e[b]=c[b])}(),!b||!b.getElementsByClassName)return{init:function(){},cfg:e,noSupport:!0};var f=b.documentElement,g=a.HTMLPictureElement,h="addEventListener",i="getAttribute",j=a[h].bind(a),k=a.setTimeout,l=a.requestAnimationFrame||k,m=a.requestIdleCallback,n=/^picture$/i,o=["load","error","lazyincluded","_lazyloaded"],p={},q=Array.prototype.forEach,r=function(a,b){return p[b]||(p[b]=new RegExp("(\\s|^)"+b+"(\\s|$)")),p[b].test(a[i]("class")||"")&&p[b]},s=function(a,b){r(a,b)||a.setAttribute("class",(a[i]("class")||"").trim()+" "+b)},t=function(a,b){var c;(c=r(a,b))&&a.setAttribute("class",(a[i]("class")||"").replace(c," "))},u=function(a,b,c){var d=c?h:"removeEventListener";c&&u(a,b),o.forEach(function(c){a[d](c,b)})},v=function(a,c,e,f,g){var h=b.createEvent("Event");return e||(e={}),e.instance=d,h.initEvent(c,!f,!g),h.detail=e,a.dispatchEvent(h),h},w=function(b,c){var d;!g&&(d=a.picturefill||e.pf)?(c&&c.src&&!b[i]("srcset")&&b.setAttribute("srcset",c.src),d({reevaluate:!0,elements:[b]})):c&&c.src&&(b.src=c.src)},x=function(a,b){return(getComputedStyle(a,null)||{})[b]},y=function(a,b,c){for(c=c||a.offsetWidth;c<e.minSize&&b&&!a._lazysizesWidth;)c=b.offsetWidth,b=b.parentNode;return c},z=function(){var a,c,d=[],e=[],f=d,g=function(){var b=f;for(f=d.length?e:d,a=!0,c=!1;b.length;)b.shift()();a=!1},h=function(d,e){a&&!e?d.apply(this,arguments):(f.push(d),c||(c=!0,(b.hidden?k:l)(g)))};return h._lsFlush=g,h}(),A=function(a,b){return b?function(){z(a)}:function(){var b=this,c=arguments;z(function(){a.apply(b,c)})}},B=function(a){var b,d=0,f=e.throttleDelay,g=e.ricTimeout,h=function(){b=!1,d=c.now(),a()},i=m&&g>49?function(){m(h,{timeout:g}),g!==e.ricTimeout&&(g=e.ricTimeout)}:A(function(){k(h)},!0);return function(a){var e;(a=!0===a)&&(g=33),b||(b=!0,e=f-(c.now()-d),e<0&&(e=0),a||e<9?i():k(i,e))}},C=function(a){var b,d,e=99,f=function(){b=null,a()},g=function(){var a=c.now()-d;a<e?k(g,e-a):(m||f)(f)};return function(){d=c.now(),b||(b=k(g,e))}},D=function(){var g,m,o,p,y,D,F,G,H,I,J,K,L=/^img$/i,M=/^iframe$/i,N="onscroll"in a&&!/(gle|ing)bot/.test(navigator.userAgent),O=0,P=0,Q=0,R=-1,S=function(a){Q--,(!a||Q<0||!a.target)&&(Q=0)},T=function(a){return null==K&&(K="hidden"==x(b.body,"visibility")),K||!("hidden"==x(a.parentNode,"visibility")&&"hidden"==x(a,"visibility"))},U=function(a,c){var d,e=a,g=T(a);for(G-=c,J+=c,H-=c,I+=c;g&&(e=e.offsetParent)&&e!=b.body&&e!=f;)(g=(x(e,"opacity")||1)>0)&&"visible"!=x(e,"overflow")&&(d=e.getBoundingClientRect(),g=I>d.left&&H<d.right&&J>d.top-1&&G<d.bottom+1);return g},V=function(){var a,c,h,j,k,l,n,o,q,r,s,t,u=d.elements;if((p=e.loadMode)&&Q<8&&(a=u.length)){for(c=0,R++;c<a;c++)if(u[c]&&!u[c]._lazyRace)if(!N||d.prematureUnveil&&d.prematureUnveil(u[c]))ba(u[c]);else if((o=u[c][i]("data-expand"))&&(l=1*o)||(l=P),r||(r=!e.expand||e.expand<1?f.clientHeight>500&&f.clientWidth>500?500:370:e.expand,d._defEx=r,s=r*e.expFactor,t=e.hFac,K=null,P<s&&Q<1&&R>2&&p>2&&!b.hidden?(P=s,R=0):P=p>1&&R>1&&Q<6?r:O),q!==l&&(D=innerWidth+l*t,F=innerHeight+l,n=-1*l,q=l),h=u[c].getBoundingClientRect(),(J=h.bottom)>=n&&(G=h.top)<=F&&(I=h.right)>=n*t&&(H=h.left)<=D&&(J||I||H||G)&&(e.loadHidden||T(u[c]))&&(m&&Q<3&&!o&&(p<3||R<4)||U(u[c],l))){if(ba(u[c]),k=!0,Q>9)break}else!k&&m&&!j&&Q<4&&R<4&&p>2&&(g[0]||e.preloadAfterLoad)&&(g[0]||!o&&(J||I||H||G||"auto"!=u[c][i](e.sizesAttr)))&&(j=g[0]||u[c]);j&&!k&&ba(j)}},W=B(V),X=function(a){var b=a.target;if(b._lazyCache)return void delete b._lazyCache;S(a),s(b,e.loadedClass),t(b,e.loadingClass),u(b,Z),v(b,"lazyloaded")},Y=A(X),Z=function(a){Y({target:a.target})},$=function(a,b){try{a.contentWindow.location.replace(b)}catch(c){a.src=b}},_=function(a){var b,c=a[i](e.srcsetAttr);(b=e.customMedia[a[i]("data-media")||a[i]("media")])&&a.setAttribute("media",b),c&&a.setAttribute("srcset",c)},aa=A(function(a,b,c,d,f){var g,h,j,l,m,p;(m=v(a,"lazybeforeunveil",b)).defaultPrevented||(d&&(c?s(a,e.autosizesClass):a.setAttribute("sizes",d)),h=a[i](e.srcsetAttr),g=a[i](e.srcAttr),f&&(j=a.parentNode,l=j&&n.test(j.nodeName||"")),p=b.firesLoad||"src"in a&&(h||g||l),m={target:a},s(a,e.loadingClass),p&&(clearTimeout(o),o=k(S,2500),u(a,Z,!0)),l&&q.call(j.getElementsByTagName("source"),_),h?a.setAttribute("srcset",h):g&&!l&&(M.test(a.nodeName)?$(a,g):a.src=g),f&&(h||l)&&w(a,{src:g})),a._lazyRace&&delete a._lazyRace,t(a,e.lazyClass),z(function(){var b=a.complete&&a.naturalWidth>1;p&&!b||(b&&s(a,"ls-is-cached"),X(m),a._lazyCache=!0,k(function(){"_lazyCache"in a&&delete a._lazyCache},9)),"lazy"==a.loading&&Q--},!0)}),ba=function(a){if(!a._lazyRace){var b,c=L.test(a.nodeName),d=c&&(a[i](e.sizesAttr)||a[i]("sizes")),f="auto"==d;(!f&&m||!c||!a[i]("src")&&!a.srcset||a.complete||r(a,e.errorClass)||!r(a,e.lazyClass))&&(b=v(a,"lazyunveilread").detail,f&&E.updateElem(a,!0,a.offsetWidth),a._lazyRace=!0,Q++,aa(a,b,f,d,c))}},ca=C(function(){e.loadMode=3,W()}),da=function(){3==e.loadMode&&(e.loadMode=2),ca()},ea=function(){if(!m){if(c.now()-y<999)return void k(ea,999);m=!0,e.loadMode=3,W(),j("scroll",da,!0)}};return{_:function(){y=c.now(),d.elements=b.getElementsByClassName(e.lazyClass),g=b.getElementsByClassName(e.lazyClass+" "+e.preloadClass),j("scroll",W,!0),j("resize",W,!0),j("pageshow",function(a){if(a.persisted){var c=b.querySelectorAll("."+e.loadingClass);c.length&&c.forEach&&l(function(){c.forEach(function(a){a.complete&&ba(a)})})}}),a.MutationObserver?new MutationObserver(W).observe(f,{childList:!0,subtree:!0,attributes:!0}):(f[h]("DOMNodeInserted",W,!0),f[h]("DOMAttrModified",W,!0),setInterval(W,999)),j("hashchange",W,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach(function(a){b[h](a,W,!0)}),/d$|^c/.test(b.readyState)?ea():(j("load",ea),b[h]("DOMContentLoaded",W),k(ea,2e4)),d.elements.length?(V(),z._lsFlush()):W()},checkElems:W,unveil:ba,_aLSL:da}}(),E=function(){var a,c=A(function(a,b,c,d){var e,f,g;if(a._lazysizesWidth=d,d+="px",a.setAttribute("sizes",d),n.test(b.nodeName||""))for(e=b.getElementsByTagName("source"),f=0,g=e.length;f<g;f++)e[f].setAttribute("sizes",d);c.detail.dataAttr||w(a,c.detail)}),d=function(a,b,d){var e,f=a.parentNode;f&&(d=y(a,f,d),e=v(a,"lazybeforesizes",{width:d,dataAttr:!!b}),e.defaultPrevented||(d=e.detail.width)&&d!==a._lazysizesWidth&&c(a,f,e,d))},f=function(){var b,c=a.length;if(c)for(b=0;b<c;b++)d(a[b])},g=C(f);return{_:function(){a=b.getElementsByClassName(e.autosizesClass),j("resize",g)},checkElems:g,updateElem:d}}(),F=function(){!F.i&&b.getElementsByClassName&&(F.i=!0,E._(),D._())};return k(function(){e.init&&F()}),d={cfg:e,autoSizer:E,loader:D,init:F,uP:w,aC:s,rC:t,hC:r,fire:v,gW:y,rAF:z}});
;
!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};(e=function(){var e=0;return function(t,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(t),appendDots:i(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(t),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(t).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=e++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):!0===o?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),!0===s.options.rtl&&!1===s.options.vertical&&(e=-e),!1===s.transformsEnabled?!1===s.options.vertical?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):!1===s.cssTransitions?(!0===s.options.rtl&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),!1===s.options.vertical?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),!1===s.options.vertical?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this.getNavTarget();null!==t&&"object"==typeof t&&t.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};!1===e.options.fade?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(!1===i.options.infinite&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1==0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(!0===o.options.dots){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>1){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(!1===r.originalSettings.mobileFirst?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||!1===l||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!=0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t;if(e=this.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var o in e){if(i<e[o]){i=t;break}t=e[o]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>1&&((i=e.$slides.children().children()).removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){!1===this.shouldClick&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;!1===t.cssTransitions?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;!1===e.cssTransitions?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(t){t.stopImmediatePropagation();var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&(e.focussed=o.is(":focus"),e.autoPlay())},0)})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){return this.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(!0===i.options.infinite)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(!0===i.options.centerMode)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),!0===n.options.infinite?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,!0===n.options.vertical&&!0===n.options.centerMode&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!=0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),!0===n.options.centerMode&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:!0===n.options.centerMode&&!0===n.options.infinite?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:!0===n.options.centerMode&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=!1===n.options.vertical?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,!0===n.options.variableWidth&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===n.options.centerMode&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){return this.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(!1===e.options.infinite?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o=this;return t=!0===o.options.centerMode?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each(function(s,n){if(n.offsetLeft-t+i(n).outerWidth()/2>-1*o.swipeLeft)return e=n,!1}),Math.abs(i(e).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){this.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),-1!==s&&i(this).attr({"aria-describedby":"slick-slide-control"+e.instanceUid+s})}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.$slides.eq(s).attr("tabindex",0);e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),!0===i.options.accessibility&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===i.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||n.$slider.attr("data-sizes"),r=document.createElement("img");r.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),n.$slider.trigger("lazyLoaded",[n,e,t])})},r.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,e,t])},r.src=t})}var t,o,s,n=this;if(!0===n.options.centerMode?!0===n.options.infinite?s=(o=n.currentSlide+(n.options.slidesToShow/2+1))+n.options.slidesToShow+2:(o=Math.max(0,n.currentSlide-(n.options.slidesToShow/2+1)),s=n.options.slidesToShow/2+1+2+n.currentSlide):(o=n.options.infinite?n.options.slidesToShow+n.currentSlide:n.currentSlide,s=Math.ceil(o+n.options.slidesToShow),!0===n.options.fade&&(o>0&&o--,s<=n.slideCount&&s++)),t=n.$slider.find(".slick-slide").slice(o,s),"anticipated"===n.options.lazyLoad)for(var r=o-1,l=s,d=n.$slider.find(".slick-slide"),a=0;a<n.options.slidesToScroll;a++)r<0&&(r=n.slideCount-1),t=(t=t.add(d.eq(r))).add(d.eq(l)),r--,l++;e(t),n.slideCount<=n.options.slidesToShow?e(n.$slider.find(".slick-slide")):n.currentSlide>=n.slideCount-n.options.slidesToShow?e(n.$slider.find(".slick-cloned").slice(0,n.options.slidesToShow)):0===n.currentSlide&&e(n.$slider.find(".slick-cloned").slice(-1*n.options.slidesToShow))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),!0===t.options.accessibility&&(t.initADA(),t.options.focusOnChange&&i(t.$slides.get(t.currentSlide)).attr("tabindex",0).focus()))},e.prototype.prev=e.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===l.options.adaptiveHeight&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;if(i="boolean"==typeof i?!0===(e=i)?0:o.slideCount-1:!0===e?--i:i,o.slideCount<1||i<0||i>o.slideCount-1)return!1;o.unload(),!0===t?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},e.prototype.setCSS=function(i){var e,t,o=this,s={};!0===o.options.rtl&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,!1===o.transformsEnabled?o.$slideTrack.css(s):(s={},!1===o.cssTransitions?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;!1===i.options.vertical?!0===i.options.centerMode&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),!0===i.options.centerMode&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),!1===i.options.vertical&&!1===i.options.variableWidth?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):!0===i.options.variableWidth?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();!1===i.options.variableWidth&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,!0===t.options.rtl?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":void 0!==arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),!1===i.options.fade?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=!0===i.options.vertical?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===i.options.useCSS&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&!1!==i.animType&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&!1!==i.animType},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),!0===n.options.centerMode){var r=n.options.slidesToShow%2==0?1:0;e=Math.floor(n.options.slidesToShow/2),!0===n.options.infinite&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=!0===n.options.infinite?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(!0===s.options.fade&&(s.options.centerMode=!1),!0===s.options.infinite&&!1===s.options.fade&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=!0===s.options.centerMode?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));s||(s=0),t.slideCount<=t.options.slidesToShow?t.slideHandler(s,!1,!0):t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(!0===a.animating&&!0===a.options.waitForAnimate||!0===a.options.fade&&a.currentSlide===i))if(!1===e&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,!1===a.options.infinite&&!1===a.options.centerMode&&(i<0||i>a.getDotCount()*a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else if(!1===a.options.infinite&&!0===a.options.centerMode&&(i<0||i>a.slideCount-a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else{if(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!=0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!=0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=(l=a.getNavTarget()).slick("getSlick")).slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide),a.updateDots(),a.updateArrows(),!0===a.options.fade)return!0!==t?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight();!0!==t?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)}},e.prototype.startLoad=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),(o=Math.round(180*t/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0?!1===s.options.rtl?"left":"right":o<=360&&o>=315?!1===s.options.rtl?"left":"right":o>=135&&o<=225?!1===s.options.rtl?"right":"left":!0===s.options.verticalSwiping?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(!0===o.touchObject.edgeHit&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(!0===l.options.verticalSwiping&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(!1===l.options.rtl?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),!0===l.options.verticalSwiping&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,!1===l.options.infinite&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),!1===l.options.vertical?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,!0===l.options.verticalSwiping&&(l.swipeLeft=e+o*s),!0!==l.options.fade&&!1!==l.options.touchMove&&(!0===l.animating?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;if(t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow)return t.touchObject={},!1;void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,t.dragging=!0},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i=this;Math.floor(i.options.slidesToShow/2),!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&!i.options.infinite&&(i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===i.currentSlide?(i.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-i.options.slidesToShow&&!1===i.options.centerMode?(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-1&&!0===i.options.centerMode&&(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||void 0===s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),void 0!==t)return t;return o}});
;
"use strict";
function _typeof(t) {
  return (_typeof =
    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
      ? function (t) {
          return typeof t;
        }
      : function (t) {
          return t &&
            "function" == typeof Symbol &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? "symbol"
            : typeof t;
        })(t);
}
!(function (t, e) {
  "object" ===
    ("undefined" == typeof exports ? "undefined" : _typeof(exports)) &&
  "undefined" != typeof module
    ? e(exports, require("jquery"))
    : "function" == typeof define && define.amd
    ? define(["exports", "jquery"], e)
    : e(
        ((t =
          "undefined" != typeof globalThis
            ? globalThis
            : t || self).bootstrap = {}),
        t.jQuery
      );
})(void 0, function (t, e) {
  function n(t) {
    return t && "object" === _typeof(t) && "default" in t ? t : { default: t };
  }
  var p = n(e);
  function i(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(t, i.key, i);
    }
  }
  function a(t, e, n) {
    return e && i(t.prototype, e), n && i(t, n), t;
  }
  function l() {
    return (l =
      Object.assign ||
      function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var i in n)
            Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
        }
        return t;
      }).apply(this, arguments);
  }
  var o = "transitionend";
  function r(t) {
    var e = this,
      n = !1;
    return (
      p.default(this).one(m.TRANSITION_END, function () {
        n = !0;
      }),
      setTimeout(function () {
        n || m.triggerTransitionEnd(e);
      }, t),
      this
    );
  }
  var m = {
    TRANSITION_END: "bsTransitionEnd",
    getUID: function (t) {
      for (; (t += ~~(1e6 * Math.random())), document.getElementById(t); );
      return t;
    },
    getSelectorFromElement: function (t) {
      var e,
        n = t.getAttribute("data-target");
      (n && "#" !== n) ||
        (n = (e = t.getAttribute("href")) && "#" !== e ? e.trim() : "");
      try {
        return document.querySelector(n) ? n : null;
      } catch (t) {
        return null;
      }
    },
    getTransitionDurationFromElement: function (t) {
      if (!t) return 0;
      var e = p.default(t).css("transition-duration"),
        n = p.default(t).css("transition-delay"),
        i = parseFloat(e),
        o = parseFloat(n);
      return i || o
        ? ((e = e.split(",")[0]),
          (n = n.split(",")[0]),
          1e3 * (parseFloat(e) + parseFloat(n)))
        : 0;
    },
    reflow: function (t) {
      return t.offsetHeight;
    },
    triggerTransitionEnd: function (t) {
      p.default(t).trigger(o);
    },
    supportsTransitionEnd: function () {
      return Boolean(o);
    },
    isElement: function (t) {
      return (t[0] || t).nodeType;
    },
    typeCheckConfig: function (t, e, n) {
      for (var i in n)
        if (Object.prototype.hasOwnProperty.call(n, i)) {
          var o = n[i],
            r = e[i],
            a =
              r && m.isElement(r)
                ? "element"
                : null == (s = r)
                ? "" + s
                : {}.toString
                    .call(s)
                    .match(/\s([a-z]+)/i)[1]
                    .toLowerCase();
          if (!new RegExp(o).test(a))
            throw new Error(
              t.toUpperCase() +
                ': Option "' +
                i +
                '" provided type "' +
                a +
                '" but expected type "' +
                o +
                '".'
            );
        }
      var s;
    },
    findShadowRoot: function (t) {
      if (!document.documentElement.attachShadow) return null;
      if ("function" != typeof t.getRootNode)
        return t instanceof ShadowRoot
          ? t
          : t.parentNode
          ? m.findShadowRoot(t.parentNode)
          : null;
      var e = t.getRootNode();
      return e instanceof ShadowRoot ? e : null;
    },
    jQueryDetection: function () {
      if (void 0 === p.default)
        throw new TypeError(
          "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
        );
      var t = p.default.fn.jquery.split(" ")[0].split(".");
      if (
        (t[0] < 2 && t[1] < 9) ||
        (1 === t[0] && 9 === t[1] && t[2] < 1) ||
        4 <= t[0]
      )
        throw new Error(
          "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
        );
    },
  };
  m.jQueryDetection(),
    (p.default.fn.emulateTransitionEnd = r),
    (p.default.event.special[m.TRANSITION_END] = {
      bindType: o,
      delegateType: o,
      handle: function (t) {
        if (p.default(t.target).is(this))
          return t.handleObj.handler.apply(this, arguments);
      },
    });
  var s = "alert",
    u = "bs.alert",
    f = p.default.fn[s],
    d = (function () {
      function i(t) {
        this._element = t;
      }
      var t = i.prototype;
      return (
        (t.close = function (t) {
          var e = this._element;
          t && (e = this._getRootElement(t)),
            this._triggerCloseEvent(e).isDefaultPrevented() ||
              this._removeElement(e);
        }),
        (t.dispose = function () {
          p.default.removeData(this._element, u), (this._element = null);
        }),
        (t._getRootElement = function (t) {
          var e = m.getSelectorFromElement(t),
            n = !1;
          return (
            e && (n = document.querySelector(e)),
            (n = n || p.default(t).closest(".alert")[0])
          );
        }),
        (t._triggerCloseEvent = function (t) {
          var e = p.default.Event("close.bs.alert");
          return p.default(t).trigger(e), e;
        }),
        (t._removeElement = function (e) {
          var t,
            n = this;
          p.default(e).removeClass("show"),
            p.default(e).hasClass("fade")
              ? ((t = m.getTransitionDurationFromElement(e)),
                p
                  .default(e)
                  .one(m.TRANSITION_END, function (t) {
                    return n._destroyElement(e, t);
                  })
                  .emulateTransitionEnd(t))
              : this._destroyElement(e);
        }),
        (t._destroyElement = function (t) {
          p.default(t).detach().trigger("closed.bs.alert").remove();
        }),
        (i._jQueryInterface = function (n) {
          return this.each(function () {
            var t = p.default(this),
              e = t.data(u);
            e || ((e = new i(this)), t.data(u, e)), "close" === n && e[n](this);
          });
        }),
        (i._handleDismiss = function (e) {
          return function (t) {
            t && t.preventDefault(), e.close(this);
          };
        }),
        a(i, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.3";
            },
          },
        ]),
        i
      );
    })();
  p
    .default(document)
    .on(
      "click.bs.alert.data-api",
      '[data-dismiss="alert"]',
      d._handleDismiss(new d())
    ),
    (p.default.fn[s] = d._jQueryInterface),
    (p.default.fn[s].Constructor = d),
    (p.default.fn[s].noConflict = function () {
      return (p.default.fn[s] = f), d._jQueryInterface;
    });
  var c = "button",
    h = "bs.button",
    g = p.default.fn[c],
    _ = "active",
    v = '[data-toggle^="button"]',
    y = 'input:not([type="hidden"])',
    b = ".btn",
    E = (function () {
      function o(t) {
        (this._element = t), (this.shouldAvoidTriggerChange = !1);
      }
      var t = o.prototype;
      return (
        (t.toggle = function () {
          var t,
            e,
            n = !0,
            i = !0,
            o = p.default(this._element).closest('[data-toggle="buttons"]')[0];
          !o ||
            ((t = this._element.querySelector(y)) &&
              ("radio" === t.type &&
                (t.checked && this._element.classList.contains(_)
                  ? (n = !1)
                  : (e = o.querySelector(".active")) &&
                    p.default(e).removeClass(_)),
              n &&
                (("checkbox" !== t.type && "radio" !== t.type) ||
                  (t.checked = !this._element.classList.contains(_)),
                this.shouldAvoidTriggerChange ||
                  p.default(t).trigger("change")),
              t.focus(),
              (i = !1))),
            this._element.hasAttribute("disabled") ||
              this._element.classList.contains("disabled") ||
              (i &&
                this._element.setAttribute(
                  "aria-pressed",
                  !this._element.classList.contains(_)
                ),
              n && p.default(this._element).toggleClass(_));
        }),
        (t.dispose = function () {
          p.default.removeData(this._element, h), (this._element = null);
        }),
        (o._jQueryInterface = function (n, i) {
          return this.each(function () {
            var t = p.default(this),
              e = t.data(h);
            e || ((e = new o(this)), t.data(h, e)),
              (e.shouldAvoidTriggerChange = i),
              "toggle" === n && e[n]();
          });
        }),
        a(o, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.3";
            },
          },
        ]),
        o
      );
    })();
  p
    .default(document)
    .on("click.bs.button.data-api", v, function (t) {
      var e = t.target,
        n = e;
      if (
        (p.default(e).hasClass("btn") || (e = p.default(e).closest(b)[0]),
        !e || e.hasAttribute("disabled") || e.classList.contains("disabled"))
      )
        t.preventDefault();
      else {
        var i = e.querySelector(y);
        if (
          i &&
          (i.hasAttribute("disabled") || i.classList.contains("disabled"))
        )
          return void t.preventDefault();
        ("INPUT" !== n.tagName && "LABEL" === e.tagName) ||
          E._jQueryInterface.call(
            p.default(e),
            "toggle",
            "INPUT" === n.tagName
          );
      }
    })
    .on("focus.bs.button.data-api blur.bs.button.data-api", v, function (t) {
      var e = p.default(t.target).closest(b)[0];
      p.default(e).toggleClass("focus", /^focus(in)?$/.test(t.type));
    }),
    p.default(window).on("load.bs.button.data-api", function () {
      for (
        var t = [].slice.call(
            document.querySelectorAll('[data-toggle="buttons"] .btn')
          ),
          e = 0,
          n = t.length;
        e < n;
        e++
      ) {
        var i = t[e],
          o = i.querySelector(y);
        o.checked || o.hasAttribute("checked")
          ? i.classList.add(_)
          : i.classList.remove(_);
      }
      for (
        var r = 0,
          a = (t = [].slice.call(
            document.querySelectorAll('[data-toggle="button"]')
          )).length;
        r < a;
        r++
      ) {
        var s = t[r];
        "true" === s.getAttribute("aria-pressed")
          ? s.classList.add(_)
          : s.classList.remove(_);
      }
    }),
    (p.default.fn[c] = E._jQueryInterface),
    (p.default.fn[c].Constructor = E),
    (p.default.fn[c].noConflict = function () {
      return (p.default.fn[c] = g), E._jQueryInterface;
    });
  var w = "carousel",
    T = "bs.carousel",
    C = "." + T,
    S = p.default.fn[w],
    N = {
      interval: 5e3,
      keyboard: !0,
      slide: !1,
      pause: "hover",
      wrap: !0,
      touch: !0,
    },
    D = {
      interval: "(number|boolean)",
      keyboard: "boolean",
      slide: "(boolean|string)",
      pause: "(string|boolean)",
      wrap: "boolean",
      touch: "boolean",
    },
    A = "next",
    k = "prev",
    I = "slid" + C,
    O = "active",
    x = ".active.carousel-item",
    j = { TOUCH: "touch", PEN: "pen" },
    L = (function () {
      function r(t, e) {
        (this._items = null),
          (this._interval = null),
          (this._activeElement = null),
          (this._isPaused = !1),
          (this._isSliding = !1),
          (this.touchTimeout = null),
          (this.touchStartX = 0),
          (this.touchDeltaX = 0),
          (this._config = this._getConfig(e)),
          (this._element = t),
          (this._indicatorsElement = this._element.querySelector(
            ".carousel-indicators"
          )),
          (this._touchSupported =
            "ontouchstart" in document.documentElement ||
            0 < navigator.maxTouchPoints),
          (this._pointerEvent = Boolean(
            window.PointerEvent || window.MSPointerEvent
          )),
          this._addEventListeners();
      }
      var t = r.prototype;
      return (
        (t.next = function () {
          this._isSliding || this._slide(A);
        }),
        (t.nextWhenVisible = function () {
          var t = p.default(this._element);
          !document.hidden &&
            t.is(":visible") &&
            "hidden" !== t.css("visibility") &&
            this.next();
        }),
        (t.prev = function () {
          this._isSliding || this._slide(k);
        }),
        (t.pause = function (t) {
          t || (this._isPaused = !0),
            this._element.querySelector(
              ".carousel-item-next, .carousel-item-prev"
            ) && (m.triggerTransitionEnd(this._element), this.cycle(!0)),
            clearInterval(this._interval),
            (this._interval = null);
        }),
        (t.cycle = function (t) {
          t || (this._isPaused = !1),
            this._interval &&
              (clearInterval(this._interval), (this._interval = null)),
            this._config.interval &&
              !this._isPaused &&
              (this._interval = setInterval(
                (document.visibilityState
                  ? this.nextWhenVisible
                  : this.next
                ).bind(this),
                this._config.interval
              ));
        }),
        (t.to = function (t) {
          var e = this;
          this._activeElement = this._element.querySelector(x);
          var n = this._getItemIndex(this._activeElement);
          if (!(t > this._items.length - 1 || t < 0))
            if (this._isSliding)
              p.default(this._element).one(I, function () {
                return e.to(t);
              });
            else {
              if (n === t) return this.pause(), void this.cycle();
              var i = n < t ? A : k;
              this._slide(i, this._items[t]);
            }
        }),
        (t.dispose = function () {
          p.default(this._element).off(C),
            p.default.removeData(this._element, T),
            (this._items = null),
            (this._config = null),
            (this._element = null),
            (this._interval = null),
            (this._isPaused = null),
            (this._isSliding = null),
            (this._activeElement = null),
            (this._indicatorsElement = null);
        }),
        (t._getConfig = function (t) {
          return (t = l({}, N, t)), m.typeCheckConfig(w, t, D), t;
        }),
        (t._handleSwipe = function () {
          var t,
            e = Math.abs(this.touchDeltaX);
          e <= 40 ||
            ((t = e / this.touchDeltaX),
            (this.touchDeltaX = 0) < t && this.prev(),
            t < 0 && this.next());
        }),
        (t._addEventListeners = function () {
          var e = this;
          this._config.keyboard &&
            p.default(this._element).on("keydown.bs.carousel", function (t) {
              return e._keydown(t);
            }),
            "hover" === this._config.pause &&
              p
                .default(this._element)
                .on("mouseenter.bs.carousel", function (t) {
                  return e.pause(t);
                })
                .on("mouseleave.bs.carousel", function (t) {
                  return e.cycle(t);
                }),
            this._config.touch && this._addTouchEventListeners();
        }),
        (t._addTouchEventListeners = function () {
          var t,
            e,
            n = this;
          this._touchSupported &&
            ((t = function (t) {
              n._pointerEvent && j[t.originalEvent.pointerType.toUpperCase()]
                ? (n.touchStartX = t.originalEvent.clientX)
                : n._pointerEvent ||
                  (n.touchStartX = t.originalEvent.touches[0].clientX);
            }),
            (e = function (t) {
              n._pointerEvent &&
                j[t.originalEvent.pointerType.toUpperCase()] &&
                (n.touchDeltaX = t.originalEvent.clientX - n.touchStartX),
                n._handleSwipe(),
                "hover" === n._config.pause &&
                  (n.pause(),
                  n.touchTimeout && clearTimeout(n.touchTimeout),
                  (n.touchTimeout = setTimeout(function (t) {
                    return n.cycle(t);
                  }, 500 + n._config.interval)));
            }),
            p
              .default(this._element.querySelectorAll(".carousel-item img"))
              .on("dragstart.bs.carousel", function (t) {
                return t.preventDefault();
              }),
            this._pointerEvent
              ? (p.default(this._element).on("pointerdown.bs.carousel", t),
                p.default(this._element).on("pointerup.bs.carousel", e),
                this._element.classList.add("pointer-event"))
              : (p.default(this._element).on("touchstart.bs.carousel", t),
                p
                  .default(this._element)
                  .on("touchmove.bs.carousel", function (t) {
                    var e;
                    (e = t).originalEvent.touches &&
                    1 < e.originalEvent.touches.length
                      ? (n.touchDeltaX = 0)
                      : (n.touchDeltaX =
                          e.originalEvent.touches[0].clientX - n.touchStartX);
                  }),
                p.default(this._element).on("touchend.bs.carousel", e)));
        }),
        (t._keydown = function (t) {
          if (!/input|textarea/i.test(t.target.tagName))
            switch (t.which) {
              case 37:
                t.preventDefault(), this.prev();
                break;
              case 39:
                t.preventDefault(), this.next();
            }
        }),
        (t._getItemIndex = function (t) {
          return (
            (this._items =
              t && t.parentNode
                ? [].slice.call(t.parentNode.querySelectorAll(".carousel-item"))
                : []),
            this._items.indexOf(t)
          );
        }),
        (t._getItemByDirection = function (t, e) {
          var n = t === A,
            i = t === k,
            o = this._getItemIndex(e),
            r = this._items.length - 1;
          if (((i && 0 === o) || (n && o === r)) && !this._config.wrap)
            return e;
          var a = (o + (t === k ? -1 : 1)) % this._items.length;
          return -1 == a ? this._items[this._items.length - 1] : this._items[a];
        }),
        (t._triggerSlideEvent = function (t, e) {
          var n = this._getItemIndex(t),
            i = this._getItemIndex(this._element.querySelector(x)),
            o = p.default.Event("slide.bs.carousel", {
              relatedTarget: t,
              direction: e,
              from: i,
              to: n,
            });
          return p.default(this._element).trigger(o), o;
        }),
        (t._setActiveIndicatorElement = function (t) {
          var e, n;
          this._indicatorsElement &&
            ((e = [].slice.call(
              this._indicatorsElement.querySelectorAll(".active")
            )),
            p.default(e).removeClass(O),
            (n = this._indicatorsElement.children[this._getItemIndex(t)]) &&
              p.default(n).addClass(O));
        }),
        (t._slide = function (t, e) {
          var n,
            i,
            o,
            r,
            a,
            s = this,
            l = this._element.querySelector(x),
            u = this._getItemIndex(l),
            f = e || (l && this._getItemByDirection(t, l)),
            d = this._getItemIndex(f),
            c = Boolean(this._interval),
            h =
              t === A
                ? ((n = "carousel-item-left"),
                  (i = "carousel-item-next"),
                  "left")
                : ((n = "carousel-item-right"),
                  (i = "carousel-item-prev"),
                  "right");
          f && p.default(f).hasClass(O)
            ? (this._isSliding = !1)
            : this._triggerSlideEvent(f, h).isDefaultPrevented() ||
              (l &&
                f &&
                ((this._isSliding = !0),
                c && this.pause(),
                this._setActiveIndicatorElement(f),
                (o = p.default.Event(I, {
                  relatedTarget: f,
                  direction: h,
                  from: u,
                  to: d,
                })),
                p.default(this._element).hasClass("slide")
                  ? (p.default(f).addClass(i),
                    m.reflow(f),
                    p.default(l).addClass(n),
                    p.default(f).addClass(n),
                    (r = parseInt(f.getAttribute("data-interval"), 10))
                      ? ((this._config.defaultInterval =
                          this._config.defaultInterval ||
                          this._config.interval),
                        (this._config.interval = r))
                      : (this._config.interval =
                          this._config.defaultInterval ||
                          this._config.interval),
                    (a = m.getTransitionDurationFromElement(l)),
                    p
                      .default(l)
                      .one(m.TRANSITION_END, function () {
                        p
                          .default(f)
                          .removeClass(n + " " + i)
                          .addClass(O),
                          p.default(l).removeClass(O + " " + i + " " + n),
                          (s._isSliding = !1),
                          setTimeout(function () {
                            return p.default(s._element).trigger(o);
                          }, 0);
                      })
                      .emulateTransitionEnd(a))
                  : (p.default(l).removeClass(O),
                    p.default(f).addClass(O),
                    (this._isSliding = !1),
                    p.default(this._element).trigger(o)),
                c && this.cycle()));
        }),
        (r._jQueryInterface = function (i) {
          return this.each(function () {
            var t = p.default(this).data(T),
              e = l({}, N, p.default(this).data());
            "object" === _typeof(i) && (e = l({}, e, i));
            var n = "string" == typeof i ? i : e.slide;
            if (
              (t || ((t = new r(this, e)), p.default(this).data(T, t)),
              "number" == typeof i)
            )
              t.to(i);
            else if ("string" == typeof n) {
              if (void 0 === t[n])
                throw new TypeError('No method named "' + n + '"');
              t[n]();
            } else e.interval && e.ride && (t.pause(), t.cycle());
          });
        }),
        (r._dataApiClickHandler = function (t) {
          var e,
            n,
            i,
            o = m.getSelectorFromElement(this);
          !o ||
            ((e = p.default(o)[0]) &&
              p.default(e).hasClass("carousel") &&
              ((n = l({}, p.default(e).data(), p.default(this).data())),
              (i = this.getAttribute("data-slide-to")) && (n.interval = !1),
              r._jQueryInterface.call(p.default(e), n),
              i && p.default(e).data(T).to(i),
              t.preventDefault()));
        }),
        a(r, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.3";
            },
          },
          {
            key: "Default",
            get: function () {
              return N;
            },
          },
        ]),
        r
      );
    })();
  p
    .default(document)
    .on(
      "click.bs.carousel.data-api",
      "[data-slide], [data-slide-to]",
      L._dataApiClickHandler
    ),
    p.default(window).on("load.bs.carousel.data-api", function () {
      for (
        var t = [].slice.call(
            document.querySelectorAll('[data-ride="carousel"]')
          ),
          e = 0,
          n = t.length;
        e < n;
        e++
      ) {
        var i = p.default(t[e]);
        L._jQueryInterface.call(i, i.data());
      }
    }),
    (p.default.fn[w] = L._jQueryInterface),
    (p.default.fn[w].Constructor = L),
    (p.default.fn[w].noConflict = function () {
      return (p.default.fn[w] = S), L._jQueryInterface;
    });
  var P = "collapse",
    F = "bs.collapse",
    R = p.default.fn[P],
    B = { toggle: !0, parent: "" },
    H = { toggle: "boolean", parent: "(string|element)" },
    M = "show",
    q = "collapse",
    Q = "collapsing",
    W = "collapsed",
    U = '[data-toggle="collapse"]',
    V = (function () {
      function s(e, t) {
        (this._isTransitioning = !1),
          (this._element = e),
          (this._config = this._getConfig(t)),
          (this._triggerArray = [].slice.call(
            document.querySelectorAll(
              '[data-toggle="collapse"][href="#' +
                e.id +
                '"],[data-toggle="collapse"][data-target="#' +
                e.id +
                '"]'
            )
          ));
        for (
          var n = [].slice.call(document.querySelectorAll(U)),
            i = 0,
            o = n.length;
          i < o;
          i++
        ) {
          var r = n[i],
            a = m.getSelectorFromElement(r),
            s = [].slice
              .call(document.querySelectorAll(a))
              .filter(function (t) {
                return t === e;
              });
          null !== a &&
            0 < s.length &&
            ((this._selector = a), this._triggerArray.push(r));
        }
        (this._parent = this._config.parent ? this._getParent() : null),
          this._config.parent ||
            this._addAriaAndCollapsedClass(this._element, this._triggerArray),
          this._config.toggle && this.toggle();
      }
      var t = s.prototype;
      return (
        (t.toggle = function () {
          p.default(this._element).hasClass(M) ? this.hide() : this.show();
        }),
        (t.show = function () {
          var t,
            e,
            n,
            i,
            o,
            r,
            a = this;
          this._isTransitioning ||
            p.default(this._element).hasClass(M) ||
            (this._parent &&
              0 ===
                (t = [].slice
                  .call(this._parent.querySelectorAll(".show, .collapsing"))
                  .filter(function (t) {
                    return "string" == typeof a._config.parent
                      ? t.getAttribute("data-parent") === a._config.parent
                      : t.classList.contains(q);
                  })).length &&
              (t = null),
            (t &&
              (e = p.default(t).not(this._selector).data(F)) &&
              e._isTransitioning) ||
              ((n = p.default.Event("show.bs.collapse")),
              p.default(this._element).trigger(n),
              n.isDefaultPrevented() ||
                (t &&
                  (s._jQueryInterface.call(
                    p.default(t).not(this._selector),
                    "hide"
                  ),
                  e || p.default(t).data(F, null)),
                (i = this._getDimension()),
                p.default(this._element).removeClass(q).addClass(Q),
                (this._element.style[i] = 0),
                this._triggerArray.length &&
                  p
                    .default(this._triggerArray)
                    .removeClass(W)
                    .attr("aria-expanded", !0),
                this.setTransitioning(!0),
                (o = "scroll" + (i[0].toUpperCase() + i.slice(1))),
                (r = m.getTransitionDurationFromElement(this._element)),
                p
                  .default(this._element)
                  .one(m.TRANSITION_END, function () {
                    p
                      .default(a._element)
                      .removeClass(Q)
                      .addClass(q + " " + M),
                      (a._element.style[i] = ""),
                      a.setTransitioning(!1),
                      p.default(a._element).trigger("shown.bs.collapse");
                  })
                  .emulateTransitionEnd(r),
                (this._element.style[i] = this._element[o] + "px"))));
        }),
        (t.hide = function () {
          var t = this;
          if (!this._isTransitioning && p.default(this._element).hasClass(M)) {
            var e = p.default.Event("hide.bs.collapse");
            if (
              (p.default(this._element).trigger(e), !e.isDefaultPrevented())
            ) {
              var n = this._getDimension();
              (this._element.style[n] =
                this._element.getBoundingClientRect()[n] + "px"),
                m.reflow(this._element),
                p
                  .default(this._element)
                  .addClass(Q)
                  .removeClass(q + " " + M);
              var i = this._triggerArray.length;
              if (0 < i)
                for (var o = 0; o < i; o++) {
                  var r = this._triggerArray[o],
                    a = m.getSelectorFromElement(r);
                  null !== a &&
                    (p
                      .default([].slice.call(document.querySelectorAll(a)))
                      .hasClass(M) ||
                      p.default(r).addClass(W).attr("aria-expanded", !1));
                }
              this.setTransitioning(!0);
              this._element.style[n] = "";
              var s = m.getTransitionDurationFromElement(this._element);
              p.default(this._element)
                .one(m.TRANSITION_END, function () {
                  t.setTransitioning(!1),
                    p
                      .default(t._element)
                      .removeClass(Q)
                      .addClass(q)
                      .trigger("hidden.bs.collapse");
                })
                .emulateTransitionEnd(s);
            }
          }
        }),
        (t.setTransitioning = function (t) {
          this._isTransitioning = t;
        }),
        (t.dispose = function () {
          p.default.removeData(this._element, F),
            (this._config = null),
            (this._parent = null),
            (this._element = null),
            (this._triggerArray = null),
            (this._isTransitioning = null);
        }),
        (t._getConfig = function (t) {
          return (
            ((t = l({}, B, t)).toggle = Boolean(t.toggle)),
            m.typeCheckConfig(P, t, H),
            t
          );
        }),
        (t._getDimension = function () {
          return p.default(this._element).hasClass("width")
            ? "width"
            : "height";
        }),
        (t._getParent = function () {
          var t,
            n = this;
          m.isElement(this._config.parent)
            ? ((t = this._config.parent),
              void 0 !== this._config.parent.jquery &&
                (t = this._config.parent[0]))
            : (t = document.querySelector(this._config.parent));
          var e =
              '[data-toggle="collapse"][data-parent="' +
              this._config.parent +
              '"]',
            i = [].slice.call(t.querySelectorAll(e));
          return (
            p.default(i).each(function (t, e) {
              n._addAriaAndCollapsedClass(s._getTargetFromElement(e), [e]);
            }),
            t
          );
        }),
        (t._addAriaAndCollapsedClass = function (t, e) {
          var n = p.default(t).hasClass(M);
          e.length && p.default(e).toggleClass(W, !n).attr("aria-expanded", n);
        }),
        (s._getTargetFromElement = function (t) {
          var e = m.getSelectorFromElement(t);
          return e ? document.querySelector(e) : null;
        }),
        (s._jQueryInterface = function (i) {
          return this.each(function () {
            var t = p.default(this),
              e = t.data(F),
              n = l({}, B, t.data(), "object" === _typeof(i) && i ? i : {});
            if (
              (!e &&
                n.toggle &&
                "string" == typeof i &&
                /show|hide/.test(i) &&
                (n.toggle = !1),
              e || ((e = new s(this, n)), t.data(F, e)),
              "string" == typeof i)
            ) {
              if (void 0 === e[i])
                throw new TypeError('No method named "' + i + '"');
              e[i]();
            }
          });
        }),
        a(s, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.3";
            },
          },
          {
            key: "Default",
            get: function () {
              return B;
            },
          },
        ]),
        s
      );
    })();
  p.default(document).on("click.bs.collapse.data-api", U, function (t) {
    "A" === t.currentTarget.tagName && t.preventDefault();
    var n = p.default(this),
      e = m.getSelectorFromElement(this),
      i = [].slice.call(document.querySelectorAll(e));
    p.default(i).each(function () {
      var t = p.default(this),
        e = t.data(F) ? "toggle" : n.data();
      V._jQueryInterface.call(t, e);
    });
  }),
    (p.default.fn[P] = V._jQueryInterface),
    (p.default.fn[P].Constructor = V),
    (p.default.fn[P].noConflict = function () {
      return (p.default.fn[P] = R), V._jQueryInterface;
    });
  var Y =
      "undefined" != typeof window &&
      "undefined" != typeof document &&
      "undefined" != typeof navigator,
    z = (function () {
      for (var t = ["Edge", "Trident", "Firefox"], e = 0; e < t.length; e += 1)
        if (Y && 0 <= navigator.userAgent.indexOf(t[e])) return 1;
      return 0;
    })();
  var X =
    Y && window.Promise
      ? function (t) {
          var e = !1;
          return function () {
            e ||
              ((e = !0),
              window.Promise.resolve().then(function () {
                (e = !1), t();
              }));
          };
        }
      : function (t) {
          var e = !1;
          return function () {
            e ||
              ((e = !0),
              setTimeout(function () {
                (e = !1), t();
              }, z));
          };
        };
  function K(t) {
    return t && "[object Function]" === {}.toString.call(t);
  }
  function $(t, e) {
    if (1 !== t.nodeType) return [];
    var n = t.ownerDocument.defaultView.getComputedStyle(t, null);
    return e ? n[e] : n;
  }
  function G(t) {
    return "HTML" === t.nodeName ? t : t.parentNode || t.host;
  }
  function J(t) {
    if (!t) return document.body;
    switch (t.nodeName) {
      case "HTML":
      case "BODY":
        return t.ownerDocument.body;
      case "#document":
        return t.body;
    }
    var e = $(t),
      n = e.overflow,
      i = e.overflowX,
      o = e.overflowY;
    return /(auto|scroll|overlay)/.test(n + o + i) ? t : J(G(t));
  }
  function Z(t) {
    return t && t.referenceNode ? t.referenceNode : t;
  }
  var tt = Y && !(!window.MSInputMethodContext || !document.documentMode),
    et = Y && /MSIE 10/.test(navigator.userAgent);
  function nt(t) {
    return 11 === t ? tt : (10 !== t && tt) || et;
  }
  function it(t) {
    if (!t) return document.documentElement;
    for (
      var e = nt(10) ? document.body : null, n = t.offsetParent || null;
      n === e && t.nextElementSibling;

    )
      n = (t = t.nextElementSibling).offsetParent;
    var i = n && n.nodeName;
    return i && "BODY" !== i && "HTML" !== i
      ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) &&
        "static" === $(n, "position")
        ? it(n)
        : n
      : t
      ? t.ownerDocument.documentElement
      : document.documentElement;
  }
  function ot(t) {
    return null !== t.parentNode ? ot(t.parentNode) : t;
  }
  function rt(t, e) {
    if (!(t && t.nodeType && e && e.nodeType)) return document.documentElement;
    var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
      i = n ? t : e,
      o = n ? e : t,
      r = document.createRange();
    r.setStart(i, 0), r.setEnd(o, 0);
    var a,
      s,
      l = r.commonAncestorContainer;
    if ((t !== l && e !== l) || i.contains(o))
      return "BODY" === (s = (a = l).nodeName) ||
        ("HTML" !== s && it(a.firstElementChild) !== a)
        ? it(l)
        : l;
    var u = ot(t);
    return u.host ? rt(u.host, e) : rt(t, ot(e).host);
  }
  function at(t, e) {
    var n =
        "top" === (1 < arguments.length && void 0 !== e ? e : "top")
          ? "scrollTop"
          : "scrollLeft",
      i = t.nodeName;
    if ("BODY" !== i && "HTML" !== i) return t[n];
    var o = t.ownerDocument.documentElement;
    return (t.ownerDocument.scrollingElement || o)[n];
  }
  function st(t, e) {
    var n = "x" === e ? "Left" : "Top",
      i = "Left" == n ? "Right" : "Bottom";
    return (
      parseFloat(t["border" + n + "Width"]) +
      parseFloat(t["border" + i + "Width"])
    );
  }
  function lt(t, e, n, i) {
    return Math.max(
      e["offset" + t],
      e["scroll" + t],
      n["client" + t],
      n["offset" + t],
      n["scroll" + t],
      nt(10)
        ? parseInt(n["offset" + t]) +
            parseInt(i["margin" + ("Height" === t ? "Top" : "Left")]) +
            parseInt(i["margin" + ("Height" === t ? "Bottom" : "Right")])
        : 0
    );
  }
  function ut(t) {
    var e = t.body,
      n = t.documentElement,
      i = nt(10) && getComputedStyle(n);
    return { height: lt("Height", e, n, i), width: lt("Width", e, n, i) };
  }
  var ft = function (t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    },
    dt = function (t, e, n) {
      return e && ct(t.prototype, e), n && ct(t, n), t;
    };
  function ct(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(t, i.key, i);
    }
  }
  function ht(t, e, n) {
    return (
      e in t
        ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (t[e] = n),
      t
    );
  }
  var pt =
    Object.assign ||
    function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];
        for (var i in n)
          Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
      }
      return t;
    };
  function mt(t) {
    return pt({}, t, { right: t.left + t.width, bottom: t.top + t.height });
  }
  function gt(t) {
    var e,
      n,
      i = {};
    try {
      nt(10)
        ? ((i = t.getBoundingClientRect()),
          (e = at(t, "top")),
          (n = at(t, "left")),
          (i.top += e),
          (i.left += n),
          (i.bottom += e),
          (i.right += n))
        : (i = t.getBoundingClientRect());
    } catch (t) {}
    var o,
      r = {
        left: i.left,
        top: i.top,
        width: i.right - i.left,
        height: i.bottom - i.top,
      },
      a = "HTML" === t.nodeName ? ut(t.ownerDocument) : {},
      s = a.width || t.clientWidth || r.width,
      l = a.height || t.clientHeight || r.height,
      u = t.offsetWidth - s,
      f = t.offsetHeight - l;
    return (
      (u || f) &&
        ((u -= st((o = $(t)), "x")),
        (f -= st(o, "y")),
        (r.width -= u),
        (r.height -= f)),
      mt(r)
    );
  }
  function _t(t, e, n) {
    var i = 2 < arguments.length && void 0 !== n && n,
      o = nt(10),
      r = "HTML" === e.nodeName,
      a = gt(t),
      s = gt(e),
      l = J(t),
      u = $(e),
      f = parseFloat(u.borderTopWidth),
      d = parseFloat(u.borderLeftWidth);
    i && r && ((s.top = Math.max(s.top, 0)), (s.left = Math.max(s.left, 0)));
    var c,
      h,
      p = mt({
        top: a.top - s.top - f,
        left: a.left - s.left - d,
        width: a.width,
        height: a.height,
      });
    return (
      (p.marginTop = 0),
      (p.marginLeft = 0),
      !o &&
        r &&
        ((c = parseFloat(u.marginTop)),
        (h = parseFloat(u.marginLeft)),
        (p.top -= f - c),
        (p.bottom -= f - c),
        (p.left -= d - h),
        (p.right -= d - h),
        (p.marginTop = c),
        (p.marginLeft = h)),
      (o && !i ? e.contains(l) : e === l && "BODY" !== l.nodeName) &&
        (p = (function (t, e, n) {
          var i = 2 < arguments.length && void 0 !== n && n,
            o = at(e, "top"),
            r = at(e, "left"),
            a = i ? -1 : 1;
          return (
            (t.top += o * a),
            (t.bottom += o * a),
            (t.left += r * a),
            (t.right += r * a),
            t
          );
        })(p, e)),
      p
    );
  }
  function vt(t) {
    if (!t || !t.parentElement || nt()) return document.documentElement;
    for (var e = t.parentElement; e && "none" === $(e, "transform"); )
      e = e.parentElement;
    return e || document.documentElement;
  }
  function yt(t, e, n, i, o) {
    var r,
      a,
      s,
      l,
      u,
      f = 4 < arguments.length && void 0 !== o && o,
      d = { top: 0, left: 0 },
      c = f ? vt(t) : rt(t, Z(e));
    "viewport" === i
      ? (d = (function (t, e) {
          var n = 1 < arguments.length && void 0 !== e && e,
            i = t.ownerDocument.documentElement,
            o = _t(t, i),
            r = Math.max(i.clientWidth, window.innerWidth || 0),
            a = Math.max(i.clientHeight, window.innerHeight || 0),
            s = n ? 0 : at(i),
            l = n ? 0 : at(i, "left");
          return mt({
            top: s - o.top + o.marginTop,
            left: l - o.left + o.marginLeft,
            width: r,
            height: a,
          });
        })(c, f))
      : ((r = void 0),
        "scrollParent" === i
          ? "BODY" === (r = J(G(e))).nodeName &&
            (r = t.ownerDocument.documentElement)
          : (r = "window" === i ? t.ownerDocument.documentElement : i),
        (a = _t(r, c, f)),
        "HTML" !== r.nodeName ||
        (function t(e) {
          var n = e.nodeName;
          if ("BODY" === n || "HTML" === n) return !1;
          if ("fixed" === $(e, "position")) return !0;
          var i = G(e);
          return !!i && t(i);
        })(c)
          ? (d = a)
          : ((l = (s = ut(t.ownerDocument)).height),
            (u = s.width),
            (d.top += a.top - a.marginTop),
            (d.bottom = l + a.top),
            (d.left += a.left - a.marginLeft),
            (d.right = u + a.left)));
    var h = "number" == typeof (n = n || 0);
    return (
      (d.left += h ? n : n.left || 0),
      (d.top += h ? n : n.top || 0),
      (d.right -= h ? n : n.right || 0),
      (d.bottom -= h ? n : n.bottom || 0),
      d
    );
  }
  function bt(t, e, i, n, o, r) {
    var a = 5 < arguments.length && void 0 !== r ? r : 0;
    if (-1 === t.indexOf("auto")) return t;
    var s = yt(i, n, a, o),
      l = {
        top: { width: s.width, height: e.top - s.top },
        right: { width: s.right - e.right, height: s.height },
        bottom: { width: s.width, height: s.bottom - e.bottom },
        left: { width: e.left - s.left, height: s.height },
      },
      u = Object.keys(l)
        .map(function (t) {
          return pt({ key: t }, l[t], { area: (e = l[t]).width * e.height });
          var e;
        })
        .sort(function (t, e) {
          return e.area - t.area;
        }),
      f = u.filter(function (t) {
        var e = t.width,
          n = t.height;
        return e >= i.clientWidth && n >= i.clientHeight;
      }),
      d = 0 < f.length ? f[0].key : u[0].key,
      c = t.split("-")[1];
    return d + (c ? "-" + c : "");
  }
  function Et(t, e, n, i) {
    var o = 3 < arguments.length && void 0 !== i ? i : null;
    return _t(n, o ? vt(e) : rt(e, Z(n)), o);
  }
  function wt(t) {
    var e = t.ownerDocument.defaultView.getComputedStyle(t),
      n = parseFloat(e.marginTop || 0) + parseFloat(e.marginBottom || 0),
      i = parseFloat(e.marginLeft || 0) + parseFloat(e.marginRight || 0);
    return { width: t.offsetWidth + i, height: t.offsetHeight + n };
  }
  function Tt(t) {
    var e = { left: "right", right: "left", bottom: "top", top: "bottom" };
    return t.replace(/left|right|bottom|top/g, function (t) {
      return e[t];
    });
  }
  function Ct(t, e, n) {
    n = n.split("-")[0];
    var i = wt(t),
      o = { width: i.width, height: i.height },
      r = -1 !== ["right", "left"].indexOf(n),
      a = r ? "top" : "left",
      s = r ? "left" : "top",
      l = r ? "height" : "width",
      u = r ? "width" : "height";
    return (
      (o[a] = e[a] + e[l] / 2 - i[l] / 2),
      (o[s] = n === s ? e[s] - i[u] : e[Tt(s)]),
      o
    );
  }
  function St(t, e) {
    return Array.prototype.find ? t.find(e) : t.filter(e)[0];
  }
  function Nt(t, n, e) {
    return (
      (void 0 === e
        ? t
        : t.slice(
            0,
            (function (t, e, n) {
              if (Array.prototype.findIndex)
                return t.findIndex(function (t) {
                  return t[e] === n;
                });
              var i = St(t, function (t) {
                return t[e] === n;
              });
              return t.indexOf(i);
            })(t, "name", e)
          )
      ).forEach(function (t) {
        t.function &&
          console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
        var e = t.function || t.fn;
        t.enabled &&
          K(e) &&
          ((n.offsets.popper = mt(n.offsets.popper)),
          (n.offsets.reference = mt(n.offsets.reference)),
          (n = e(n, t)));
      }),
      n
    );
  }
  function Dt(t, n) {
    return t.some(function (t) {
      var e = t.name;
      return t.enabled && e === n;
    });
  }
  function At(t) {
    for (
      var e = [!1, "ms", "Webkit", "Moz", "O"],
        n = t.charAt(0).toUpperCase() + t.slice(1),
        i = 0;
      i < e.length;
      i++
    ) {
      var o = e[i],
        r = o ? "" + o + n : t;
      if (void 0 !== document.body.style[r]) return r;
    }
    return null;
  }
  function kt(t) {
    var e = t.ownerDocument;
    return e ? e.defaultView : window;
  }
  function It(t, e, n, i) {
    (n.updateBound = i),
      kt(t).addEventListener("resize", n.updateBound, { passive: !0 });
    var o = J(t);
    return (
      (function t(e, n, i, o) {
        var r = "BODY" === e.nodeName,
          a = r ? e.ownerDocument.defaultView : e;
        a.addEventListener(n, i, { passive: !0 }),
          r || t(J(a.parentNode), n, i, o),
          o.push(a);
      })(o, "scroll", n.updateBound, n.scrollParents),
      (n.scrollElement = o),
      (n.eventsEnabled = !0),
      n
    );
  }
  function Ot() {
    var t, e;
    this.state.eventsEnabled &&
      (cancelAnimationFrame(this.scheduleUpdate),
      (this.state =
        ((t = this.reference),
        (e = this.state),
        kt(t).removeEventListener("resize", e.updateBound),
        e.scrollParents.forEach(function (t) {
          t.removeEventListener("scroll", e.updateBound);
        }),
        (e.updateBound = null),
        (e.scrollParents = []),
        (e.scrollElement = null),
        (e.eventsEnabled = !1),
        e)));
  }
  function xt(t) {
    return "" !== t && !isNaN(parseFloat(t)) && isFinite(t);
  }
  function jt(n, i) {
    Object.keys(i).forEach(function (t) {
      var e = "";
      -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(t) &&
        xt(i[t]) &&
        (e = "px"),
        (n.style[t] = i[t] + e);
    });
  }
  function Lt(t, e) {
    function n(t) {
      return t;
    }
    var i = t.offsets,
      o = i.popper,
      r = i.reference,
      a = Math.round,
      s = Math.floor,
      l = a(r.width),
      u = a(o.width),
      f = -1 !== ["left", "right"].indexOf(t.placement),
      d = -1 !== t.placement.indexOf("-"),
      c = e ? (f || d || l % 2 == u % 2 ? a : s) : n,
      h = e ? a : n;
    return {
      left: c(l % 2 == 1 && u % 2 == 1 && !d && e ? o.left - 1 : o.left),
      top: h(o.top),
      bottom: h(o.bottom),
      right: c(o.right),
    };
  }
  var Pt = Y && /Firefox/i.test(navigator.userAgent);
  function Ft(t, e, n) {
    var i,
      o,
      r = St(t, function (t) {
        return t.name === e;
      }),
      a =
        !!r &&
        t.some(function (t) {
          return t.name === n && t.enabled && t.order < r.order;
        });
    return (
      a ||
        ((i = "`" + e + "`"),
        (o = "`" + n + "`"),
        console.warn(
          o +
            " modifier is required by " +
            i +
            " modifier in order to work, be sure to include it before " +
            i +
            "!"
        )),
      a
    );
  }
  var Rt = [
      "auto-start",
      "auto",
      "auto-end",
      "top-start",
      "top",
      "top-end",
      "right-start",
      "right",
      "right-end",
      "bottom-end",
      "bottom",
      "bottom-start",
      "left-end",
      "left",
      "left-start",
    ],
    Bt = Rt.slice(3);
  function Ht(t, e) {
    var n = 1 < arguments.length && void 0 !== e && e,
      i = Bt.indexOf(t),
      o = Bt.slice(i + 1).concat(Bt.slice(0, i));
    return n ? o.reverse() : o;
  }
  var Mt = "flip",
    qt = "clockwise",
    Qt = "counterclockwise";
  function Wt(t, o, r, e) {
    var a = [0, 0],
      s = -1 !== ["right", "left"].indexOf(e),
      n = t.split(/(\+|\-)/).map(function (t) {
        return t.trim();
      }),
      i = n.indexOf(
        St(n, function (t) {
          return -1 !== t.search(/,|\s/);
        })
      );
    n[i] &&
      -1 === n[i].indexOf(",") &&
      console.warn(
        "Offsets separated by white space(s) are deprecated, use a comma (,) instead."
      );
    var l = /\s*,\s*|\s+/;
    return (
      (-1 !== i
        ? [
            n.slice(0, i).concat([n[i].split(l)[0]]),
            [n[i].split(l)[1]].concat(n.slice(i + 1)),
          ]
        : [n]
      )
        .map(function (t, e) {
          var n = (1 === e ? !s : s) ? "height" : "width",
            i = !1;
          return t
            .reduce(function (t, e) {
              return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e)
                ? ((t[t.length - 1] = e), (i = !0), t)
                : i
                ? ((t[t.length - 1] += e), (i = !1), t)
                : t.concat(e);
            }, [])
            .map(function (t) {
              return (function (t, e, n, i) {
                var o = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                  r = +o[1],
                  a = o[2];
                if (!r) return t;
                if (0 !== a.indexOf("%"))
                  return "vh" !== a && "vw" !== a
                    ? r
                    : (("vh" === a
                        ? Math.max(
                            document.documentElement.clientHeight,
                            window.innerHeight || 0
                          )
                        : Math.max(
                            document.documentElement.clientWidth,
                            window.innerWidth || 0
                          )) /
                        100) *
                        r;
                var s = void 0;
                switch (a) {
                  case "%p":
                    s = n;
                    break;
                  case "%":
                  case "%r":
                  default:
                    s = i;
                }
                return (mt(s)[e] / 100) * r;
              })(t, n, o, r);
            });
        })
        .forEach(function (n, i) {
          n.forEach(function (t, e) {
            xt(t) && (a[i] += t * ("-" === n[e - 1] ? -1 : 1));
          });
        }),
      a
    );
  }
  var Ut = {
      placement: "bottom",
      positionFixed: !1,
      eventsEnabled: !0,
      removeOnDestroy: !1,
      onCreate: function () {},
      onUpdate: function () {},
      modifiers: {
        shift: {
          order: 100,
          enabled: !0,
          fn: function (t) {
            var e,
              n,
              i,
              o,
              r,
              a,
              s,
              l = t.placement,
              u = l.split("-")[0],
              f = l.split("-")[1];
            return (
              f &&
                ((n = (e = t.offsets).reference),
                (i = e.popper),
                (a = (o = -1 !== ["bottom", "top"].indexOf(u))
                  ? "width"
                  : "height"),
                (s = {
                  start: ht({}, (r = o ? "left" : "top"), n[r]),
                  end: ht({}, r, n[r] + n[a] - i[a]),
                }),
                (t.offsets.popper = pt({}, i, s[f]))),
              t
            );
          },
        },
        offset: {
          order: 200,
          enabled: !0,
          fn: function (t, e) {
            var n = e.offset,
              i = t.placement,
              o = t.offsets,
              r = o.popper,
              a = o.reference,
              s = i.split("-")[0],
              l = void 0,
              l = xt(+n) ? [+n, 0] : Wt(n, r, a, s);
            return (
              "left" === s
                ? ((r.top += l[0]), (r.left -= l[1]))
                : "right" === s
                ? ((r.top += l[0]), (r.left += l[1]))
                : "top" === s
                ? ((r.left += l[0]), (r.top -= l[1]))
                : "bottom" === s && ((r.left += l[0]), (r.top += l[1])),
              (t.popper = r),
              t
            );
          },
          offset: 0,
        },
        preventOverflow: {
          order: 300,
          enabled: !0,
          fn: function (t, i) {
            var e = i.boundariesElement || it(t.instance.popper);
            t.instance.reference === e && (e = it(e));
            var n = At("transform"),
              o = t.instance.popper.style,
              r = o.top,
              a = o.left,
              s = o[n];
            (o.top = ""), (o.left = ""), (o[n] = "");
            var l = yt(
              t.instance.popper,
              t.instance.reference,
              i.padding,
              e,
              t.positionFixed
            );
            (o.top = r), (o.left = a), (o[n] = s), (i.boundaries = l);
            var u = i.priority,
              f = t.offsets.popper,
              d = {
                primary: function (t) {
                  var e = f[t];
                  return (
                    f[t] < l[t] &&
                      !i.escapeWithReference &&
                      (e = Math.max(f[t], l[t])),
                    ht({}, t, e)
                  );
                },
                secondary: function (t) {
                  var e = "right" === t ? "left" : "top",
                    n = f[e];
                  return (
                    f[t] > l[t] &&
                      !i.escapeWithReference &&
                      (n = Math.min(
                        f[e],
                        l[t] - ("right" === t ? f.width : f.height)
                      )),
                    ht({}, e, n)
                  );
                },
              };
            return (
              u.forEach(function (t) {
                var e =
                  -1 !== ["left", "top"].indexOf(t) ? "primary" : "secondary";
                f = pt({}, f, d[e](t));
              }),
              (t.offsets.popper = f),
              t
            );
          },
          priority: ["left", "right", "top", "bottom"],
          padding: 5,
          boundariesElement: "scrollParent",
        },
        keepTogether: {
          order: 400,
          enabled: !0,
          fn: function (t) {
            var e = t.offsets,
              n = e.popper,
              i = e.reference,
              o = t.placement.split("-")[0],
              r = Math.floor,
              a = -1 !== ["top", "bottom"].indexOf(o),
              s = a ? "right" : "bottom",
              l = a ? "left" : "top",
              u = a ? "width" : "height";
            return (
              n[s] < r(i[l]) && (t.offsets.popper[l] = r(i[l]) - n[u]),
              n[l] > r(i[s]) && (t.offsets.popper[l] = r(i[s])),
              t
            );
          },
        },
        arrow: {
          order: 500,
          enabled: !0,
          fn: function (t, e) {
            var n;
            if (!Ft(t.instance.modifiers, "arrow", "keepTogether")) return t;
            var i = e.element;
            if ("string" == typeof i) {
              if (!(i = t.instance.popper.querySelector(i))) return t;
            } else if (!t.instance.popper.contains(i))
              return (
                console.warn(
                  "WARNING: `arrow.element` must be child of its popper element!"
                ),
                t
              );
            var o = t.placement.split("-")[0],
              r = t.offsets,
              a = r.popper,
              s = r.reference,
              l = -1 !== ["left", "right"].indexOf(o),
              u = l ? "height" : "width",
              f = l ? "Top" : "Left",
              d = f.toLowerCase(),
              c = l ? "left" : "top",
              h = l ? "bottom" : "right",
              p = wt(i)[u];
            s[h] - p < a[d] && (t.offsets.popper[d] -= a[d] - (s[h] - p)),
              s[d] + p > a[h] && (t.offsets.popper[d] += s[d] + p - a[h]),
              (t.offsets.popper = mt(t.offsets.popper));
            var m = s[d] + s[u] / 2 - p / 2,
              g = $(t.instance.popper),
              _ = parseFloat(g["margin" + f]),
              v = parseFloat(g["border" + f + "Width"]),
              y = m - t.offsets.popper[d] - _ - v,
              y = Math.max(Math.min(a[u] - p, y), 0);
            return (
              (t.arrowElement = i),
              (t.offsets.arrow =
                (ht((n = {}), d, Math.round(y)), ht(n, c, ""), n)),
              t
            );
          },
          element: "[x-arrow]",
        },
        flip: {
          order: 600,
          enabled: !0,
          fn: function (g, _) {
            if (Dt(g.instance.modifiers, "inner")) return g;
            if (g.flipped && g.placement === g.originalPlacement) return g;
            var v = yt(
                g.instance.popper,
                g.instance.reference,
                _.padding,
                _.boundariesElement,
                g.positionFixed
              ),
              y = g.placement.split("-")[0],
              b = Tt(y),
              E = g.placement.split("-")[1] || "",
              w = [];
            switch (_.behavior) {
              case Mt:
                w = [y, b];
                break;
              case qt:
                w = Ht(y);
                break;
              case Qt:
                w = Ht(y, !0);
                break;
              default:
                w = _.behavior;
            }
            return (
              w.forEach(function (t, e) {
                if (y !== t || w.length === e + 1) return g;
                (y = g.placement.split("-")[0]), (b = Tt(y));
                var n,
                  i = g.offsets.popper,
                  o = g.offsets.reference,
                  r = Math.floor,
                  a =
                    ("left" === y && r(i.right) > r(o.left)) ||
                    ("right" === y && r(i.left) < r(o.right)) ||
                    ("top" === y && r(i.bottom) > r(o.top)) ||
                    ("bottom" === y && r(i.top) < r(o.bottom)),
                  s = r(i.left) < r(v.left),
                  l = r(i.right) > r(v.right),
                  u = r(i.top) < r(v.top),
                  f = r(i.bottom) > r(v.bottom),
                  d =
                    ("left" === y && s) ||
                    ("right" === y && l) ||
                    ("top" === y && u) ||
                    ("bottom" === y && f),
                  c = -1 !== ["top", "bottom"].indexOf(y),
                  h =
                    !!_.flipVariations &&
                    ((c && "start" === E && s) ||
                      (c && "end" === E && l) ||
                      (!c && "start" === E && u) ||
                      (!c && "end" === E && f)),
                  p =
                    !!_.flipVariationsByContent &&
                    ((c && "start" === E && l) ||
                      (c && "end" === E && s) ||
                      (!c && "start" === E && f) ||
                      (!c && "end" === E && u)),
                  m = h || p;
                (a || d || m) &&
                  ((g.flipped = !0),
                  (a || d) && (y = w[e + 1]),
                  m &&
                    (E =
                      "end" === (n = E) ? "start" : "start" === n ? "end" : n),
                  (g.placement = y + (E ? "-" + E : "")),
                  (g.offsets.popper = pt(
                    {},
                    g.offsets.popper,
                    Ct(g.instance.popper, g.offsets.reference, g.placement)
                  )),
                  (g = Nt(g.instance.modifiers, g, "flip")));
              }),
              g
            );
          },
          behavior: "flip",
          padding: 5,
          boundariesElement: "viewport",
          flipVariations: !1,
          flipVariationsByContent: !1,
        },
        inner: {
          order: 700,
          enabled: !1,
          fn: function (t) {
            var e = t.placement,
              n = e.split("-")[0],
              i = t.offsets,
              o = i.popper,
              r = i.reference,
              a = -1 !== ["left", "right"].indexOf(n),
              s = -1 === ["top", "left"].indexOf(n);
            return (
              (o[a ? "left" : "top"] =
                r[n] - (s ? o[a ? "width" : "height"] : 0)),
              (t.placement = Tt(e)),
              (t.offsets.popper = mt(o)),
              t
            );
          },
        },
        hide: {
          order: 800,
          enabled: !0,
          fn: function (t) {
            if (!Ft(t.instance.modifiers, "hide", "preventOverflow")) return t;
            var e = t.offsets.reference,
              n = St(t.instance.modifiers, function (t) {
                return "preventOverflow" === t.name;
              }).boundaries;
            if (
              e.bottom < n.top ||
              e.left > n.right ||
              e.top > n.bottom ||
              e.right < n.left
            ) {
              if (!0 === t.hide) return t;
              (t.hide = !0), (t.attributes["x-out-of-boundaries"] = "");
            } else {
              if (!1 === t.hide) return t;
              (t.hide = !1), (t.attributes["x-out-of-boundaries"] = !1);
            }
            return t;
          },
        },
        computeStyle: {
          order: 850,
          enabled: !0,
          fn: function (t, e) {
            var n = e.x,
              i = e.y,
              o = t.offsets.popper,
              r = St(t.instance.modifiers, function (t) {
                return "applyStyle" === t.name;
              }).gpuAcceleration;
            void 0 !== r &&
              console.warn(
                "WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!"
              );
            var a,
              s,
              l = void 0 !== r ? r : e.gpuAcceleration,
              u = it(t.instance.popper),
              f = gt(u),
              d = { position: o.position },
              c = Lt(t, window.devicePixelRatio < 2 || !Pt),
              h = "bottom" === n ? "top" : "bottom",
              p = "right" === i ? "left" : "right",
              m = At("transform"),
              g = void 0,
              _ = void 0,
              _ =
                "bottom" == h
                  ? "HTML" === u.nodeName
                    ? -u.clientHeight + c.bottom
                    : -f.height + c.bottom
                  : c.top,
              g =
                "right" == p
                  ? "HTML" === u.nodeName
                    ? -u.clientWidth + c.right
                    : -f.width + c.right
                  : c.left;
            l && m
              ? ((d[m] = "translate3d(" + g + "px, " + _ + "px, 0)"),
                (d[h] = 0),
                (d[p] = 0),
                (d.willChange = "transform"))
              : ((a = "bottom" == h ? -1 : 1),
                (s = "right" == p ? -1 : 1),
                (d[h] = _ * a),
                (d[p] = g * s),
                (d.willChange = h + ", " + p));
            var v = { "x-placement": t.placement };
            return (
              (t.attributes = pt({}, v, t.attributes)),
              (t.styles = pt({}, d, t.styles)),
              (t.arrowStyles = pt({}, t.offsets.arrow, t.arrowStyles)),
              t
            );
          },
          gpuAcceleration: !0,
          x: "bottom",
          y: "right",
        },
        applyStyle: {
          order: 900,
          enabled: !0,
          fn: function (t) {
            var e, n;
            return (
              jt(t.instance.popper, t.styles),
              (e = t.instance.popper),
              (n = t.attributes),
              Object.keys(n).forEach(function (t) {
                !1 !== n[t] ? e.setAttribute(t, n[t]) : e.removeAttribute(t);
              }),
              t.arrowElement &&
                Object.keys(t.arrowStyles).length &&
                jt(t.arrowElement, t.arrowStyles),
              t
            );
          },
          onLoad: function (t, e, n, i, o) {
            var r = Et(o, e, t, n.positionFixed),
              a = bt(
                n.placement,
                r,
                e,
                t,
                n.modifiers.flip.boundariesElement,
                n.modifiers.flip.padding
              );
            return (
              e.setAttribute("x-placement", a),
              jt(e, { position: n.positionFixed ? "fixed" : "absolute" }),
              n
            );
          },
          gpuAcceleration: void 0,
        },
      },
    },
    Vt =
      (dt(Yt, [
        {
          key: "update",
          value: function () {
            return function () {
              var t;
              this.state.isDestroyed ||
                (((t = {
                  instance: this,
                  styles: {},
                  arrowStyles: {},
                  attributes: {},
                  flipped: !1,
                  offsets: {},
                }).offsets.reference = Et(
                  this.state,
                  this.popper,
                  this.reference,
                  this.options.positionFixed
                )),
                (t.placement = bt(
                  this.options.placement,
                  t.offsets.reference,
                  this.popper,
                  this.reference,
                  this.options.modifiers.flip.boundariesElement,
                  this.options.modifiers.flip.padding
                )),
                (t.originalPlacement = t.placement),
                (t.positionFixed = this.options.positionFixed),
                (t.offsets.popper = Ct(
                  this.popper,
                  t.offsets.reference,
                  t.placement
                )),
                (t.offsets.popper.position = this.options.positionFixed
                  ? "fixed"
                  : "absolute"),
                (t = Nt(this.modifiers, t)),
                this.state.isCreated
                  ? this.options.onUpdate(t)
                  : ((this.state.isCreated = !0), this.options.onCreate(t)));
            }.call(this);
          },
        },
        {
          key: "destroy",
          value: function () {
            return function () {
              return (
                (this.state.isDestroyed = !0),
                Dt(this.modifiers, "applyStyle") &&
                  (this.popper.removeAttribute("x-placement"),
                  (this.popper.style.position = ""),
                  (this.popper.style.top = ""),
                  (this.popper.style.left = ""),
                  (this.popper.style.right = ""),
                  (this.popper.style.bottom = ""),
                  (this.popper.style.willChange = ""),
                  (this.popper.style[At("transform")] = "")),
                this.disableEventListeners(),
                this.options.removeOnDestroy &&
                  this.popper.parentNode.removeChild(this.popper),
                this
              );
            }.call(this);
          },
        },
        {
          key: "enableEventListeners",
          value: function () {
            return function () {
              this.state.eventsEnabled ||
                (this.state = It(
                  this.reference,
                  this.options,
                  this.state,
                  this.scheduleUpdate
                ));
            }.call(this);
          },
        },
        {
          key: "disableEventListeners",
          value: function () {
            return Ot.call(this);
          },
        },
      ]),
      Yt);
  function Yt(t, e) {
    var n = this,
      i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
    ft(this, Yt),
      (this.scheduleUpdate = function () {
        return requestAnimationFrame(n.update);
      }),
      (this.update = X(this.update.bind(this))),
      (this.options = pt({}, Yt.Defaults, i)),
      (this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }),
      (this.reference = t && t.jquery ? t[0] : t),
      (this.popper = e && e.jquery ? e[0] : e),
      (this.options.modifiers = {}),
      Object.keys(pt({}, Yt.Defaults.modifiers, i.modifiers)).forEach(function (
        t
      ) {
        n.options.modifiers[t] = pt(
          {},
          Yt.Defaults.modifiers[t] || {},
          i.modifiers ? i.modifiers[t] : {}
        );
      }),
      (this.modifiers = Object.keys(this.options.modifiers)
        .map(function (t) {
          return pt({ name: t }, n.options.modifiers[t]);
        })
        .sort(function (t, e) {
          return t.order - e.order;
        })),
      this.modifiers.forEach(function (t) {
        t.enabled &&
          K(t.onLoad) &&
          t.onLoad(n.reference, n.popper, n.options, t, n.state);
      }),
      this.update();
    var o = this.options.eventsEnabled;
    o && this.enableEventListeners(), (this.state.eventsEnabled = o);
  }
  (Vt.Utils = ("undefined" != typeof window ? window : global).PopperUtils),
    (Vt.placements = Rt),
    (Vt.Defaults = Ut);
  var zt = "dropdown",
    Xt = "bs.dropdown",
    Kt = "." + Xt,
    $t = ".data-api",
    Gt = p.default.fn[zt],
    Jt = new RegExp("38|40|27"),
    Zt = "hide" + Kt,
    te = "hidden" + Kt,
    ee = "click" + Kt + $t,
    ne = "keydown" + Kt + $t,
    ie = "disabled",
    oe = "show",
    re = "dropdown-menu-right",
    ae = '[data-toggle="dropdown"]',
    se = ".dropdown-menu",
    le = {
      offset: 0,
      flip: !0,
      boundary: "scrollParent",
      reference: "toggle",
      display: "dynamic",
      popperConfig: null,
    },
    ue = {
      offset: "(number|string|function)",
      flip: "boolean",
      boundary: "(string|element)",
      reference: "(string|element)",
      display: "string",
      popperConfig: "(null|object)",
    },
    fe = (function () {
      function u(t, e) {
        (this._element = t),
          (this._popper = null),
          (this._config = this._getConfig(e)),
          (this._menu = this._getMenuElement()),
          (this._inNavbar = this._detectNavbar()),
          this._addEventListeners();
      }
      var t = u.prototype;
      return (
        (t.toggle = function () {
          var t;
          this._element.disabled ||
            p.default(this._element).hasClass(ie) ||
            ((t = p.default(this._menu).hasClass(oe)),
            u._clearMenus(),
            t || this.show(!0));
        }),
        (t.show = function (t) {
          if (
            (void 0 === t && (t = !1),
            !(
              this._element.disabled ||
              p.default(this._element).hasClass(ie) ||
              p.default(this._menu).hasClass(oe)
            ))
          ) {
            var e = { relatedTarget: this._element },
              n = p.default.Event("show.bs.dropdown", e),
              i = u._getParentFromElement(this._element);
            if ((p.default(i).trigger(n), !n.isDefaultPrevented())) {
              if (!this._inNavbar && t) {
                if (void 0 === Vt)
                  throw new TypeError(
                    "Bootstrap's dropdowns require Popper.js (https://popper.js.org/)"
                  );
                var o = this._element;
                "parent" === this._config.reference
                  ? (o = i)
                  : m.isElement(this._config.reference) &&
                    ((o = this._config.reference),
                    void 0 !== this._config.reference.jquery &&
                      (o = this._config.reference[0])),
                  "scrollParent" !== this._config.boundary &&
                    p.default(i).addClass("position-static"),
                  (this._popper = new Vt(
                    o,
                    this._menu,
                    this._getPopperConfig()
                  ));
              }
              "ontouchstart" in document.documentElement &&
                0 === p.default(i).closest(".navbar-nav").length &&
                p
                  .default(document.body)
                  .children()
                  .on("mouseover", null, p.default.noop),
                this._element.focus(),
                this._element.setAttribute("aria-expanded", !0),
                p.default(this._menu).toggleClass(oe),
                p
                  .default(i)
                  .toggleClass(oe)
                  .trigger(p.default.Event("shown.bs.dropdown", e));
            }
          }
        }),
        (t.hide = function () {
          var t, e, n;
          this._element.disabled ||
            p.default(this._element).hasClass(ie) ||
            !p.default(this._menu).hasClass(oe) ||
            ((t = { relatedTarget: this._element }),
            (e = p.default.Event(Zt, t)),
            (n = u._getParentFromElement(this._element)),
            p.default(n).trigger(e),
            e.isDefaultPrevented() ||
              (this._popper && this._popper.destroy(),
              p.default(this._menu).toggleClass(oe),
              p.default(n).toggleClass(oe).trigger(p.default.Event(te, t))));
        }),
        (t.dispose = function () {
          p.default.removeData(this._element, Xt),
            p.default(this._element).off(Kt),
            (this._element = null),
            (this._menu = null) !== this._popper &&
              (this._popper.destroy(), (this._popper = null));
        }),
        (t.update = function () {
          (this._inNavbar = this._detectNavbar()),
            null !== this._popper && this._popper.scheduleUpdate();
        }),
        (t._addEventListeners = function () {
          var e = this;
          p.default(this._element).on("click.bs.dropdown", function (t) {
            t.preventDefault(), t.stopPropagation(), e.toggle();
          });
        }),
        (t._getConfig = function (t) {
          return (
            (t = l(
              {},
              this.constructor.Default,
              p.default(this._element).data(),
              t
            )),
            m.typeCheckConfig(zt, t, this.constructor.DefaultType),
            t
          );
        }),
        (t._getMenuElement = function () {
          var t;
          return (
            this._menu ||
              ((t = u._getParentFromElement(this._element)) &&
                (this._menu = t.querySelector(se))),
            this._menu
          );
        }),
        (t._getPlacement = function () {
          var t = p.default(this._element.parentNode),
            e = "bottom-start";
          return (
            t.hasClass("dropup")
              ? (e = p.default(this._menu).hasClass(re)
                  ? "top-end"
                  : "top-start")
              : t.hasClass("dropright")
              ? (e = "right-start")
              : t.hasClass("dropleft")
              ? (e = "left-start")
              : p.default(this._menu).hasClass(re) && (e = "bottom-end"),
            e
          );
        }),
        (t._detectNavbar = function () {
          return 0 < p.default(this._element).closest(".navbar").length;
        }),
        (t._getOffset = function () {
          var e = this,
            t = {};
          return (
            "function" == typeof this._config.offset
              ? (t.fn = function (t) {
                  return (
                    (t.offsets = l(
                      {},
                      t.offsets,
                      e._config.offset(t.offsets, e._element) || {}
                    )),
                    t
                  );
                })
              : (t.offset = this._config.offset),
            t
          );
        }),
        (t._getPopperConfig = function () {
          var t = {
            placement: this._getPlacement(),
            modifiers: {
              offset: this._getOffset(),
              flip: { enabled: this._config.flip },
              preventOverflow: { boundariesElement: this._config.boundary },
            },
          };
          return (
            "static" === this._config.display &&
              (t.modifiers.applyStyle = { enabled: !1 }),
            l({}, t, this._config.popperConfig)
          );
        }),
        (u._jQueryInterface = function (n) {
          return this.each(function () {
            var t = p.default(this).data(Xt),
              e = "object" === _typeof(n) ? n : null;
            if (
              (t || ((t = new u(this, e)), p.default(this).data(Xt, t)),
              "string" == typeof n)
            ) {
              if (void 0 === t[n])
                throw new TypeError('No method named "' + n + '"');
              t[n]();
            }
          });
        }),
        (u._clearMenus = function (t) {
          if (!t || (3 !== t.which && ("keyup" !== t.type || 9 === t.which)))
            for (
              var e = [].slice.call(document.querySelectorAll(ae)),
                n = 0,
                i = e.length;
              n < i;
              n++
            ) {
              var o,
                r,
                a = u._getParentFromElement(e[n]),
                s = p.default(e[n]).data(Xt),
                l = { relatedTarget: e[n] };
              t && "click" === t.type && (l.clickEvent = t),
                s &&
                  ((o = s._menu),
                  p.default(a).hasClass(oe) &&
                    ((t &&
                      (("click" === t.type &&
                        /input|textarea/i.test(t.target.tagName)) ||
                        ("keyup" === t.type && 9 === t.which)) &&
                      p.default.contains(a, t.target)) ||
                      ((r = p.default.Event(Zt, l)),
                      p.default(a).trigger(r),
                      r.isDefaultPrevented() ||
                        ("ontouchstart" in document.documentElement &&
                          p
                            .default(document.body)
                            .children()
                            .off("mouseover", null, p.default.noop),
                        e[n].setAttribute("aria-expanded", "false"),
                        s._popper && s._popper.destroy(),
                        p.default(o).removeClass(oe),
                        p
                          .default(a)
                          .removeClass(oe)
                          .trigger(p.default.Event(te, l))))));
            }
        }),
        (u._getParentFromElement = function (t) {
          var e,
            n = m.getSelectorFromElement(t);
          return n && (e = document.querySelector(n)), e || t.parentNode;
        }),
        (u._dataApiKeydownHandler = function (t) {
          if (
            (/input|textarea/i.test(t.target.tagName)
              ? !(
                  32 === t.which ||
                  (27 !== t.which &&
                    ((40 !== t.which && 38 !== t.which) ||
                      p.default(t.target).closest(se).length))
                )
              : Jt.test(t.which)) &&
            !this.disabled &&
            !p.default(this).hasClass(ie)
          ) {
            var e = u._getParentFromElement(this),
              n = p.default(e).hasClass(oe);
            if (n || 27 !== t.which) {
              if (
                (t.preventDefault(),
                t.stopPropagation(),
                !n || 27 === t.which || 32 === t.which)
              )
                return (
                  27 === t.which &&
                    p.default(e.querySelector(ae)).trigger("focus"),
                  void p.default(this).trigger("click")
                );
              var i,
                o = [].slice
                  .call(
                    e.querySelectorAll(
                      ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"
                    )
                  )
                  .filter(function (t) {
                    return p.default(t).is(":visible");
                  });
              0 !== o.length &&
                ((i = o.indexOf(t.target)),
                38 === t.which && 0 < i && i--,
                40 === t.which && i < o.length - 1 && i++,
                i < 0 && (i = 0),
                o[i].focus());
            }
          }
        }),
        a(u, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.3";
            },
          },
          {
            key: "Default",
            get: function () {
              return le;
            },
          },
          {
            key: "DefaultType",
            get: function () {
              return ue;
            },
          },
        ]),
        u
      );
    })();
  p
    .default(document)
    .on(ne, ae, fe._dataApiKeydownHandler)
    .on(ne, se, fe._dataApiKeydownHandler)
    .on(ee + " keyup.bs.dropdown.data-api", fe._clearMenus)
    .on(ee, ae, function (t) {
      t.preventDefault(),
        t.stopPropagation(),
        fe._jQueryInterface.call(p.default(this), "toggle");
    })
    .on(ee, ".dropdown form", function (t) {
      t.stopPropagation();
    }),
    (p.default.fn[zt] = fe._jQueryInterface),
    (p.default.fn[zt].Constructor = fe),
    (p.default.fn[zt].noConflict = function () {
      return (p.default.fn[zt] = Gt), fe._jQueryInterface;
    });
  var de = "modal",
    ce = "bs.modal",
    he = "." + ce,
    pe = p.default.fn[de],
    me = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
    ge = {
      backdrop: "(boolean|string)",
      keyboard: "boolean",
      focus: "boolean",
      show: "boolean",
    },
    _e = "hidden" + he,
    ve = "show" + he,
    ye = "focusin" + he,
    be = "resize" + he,
    Ee = "click.dismiss" + he,
    we = "keydown.dismiss" + he,
    Te = "mousedown.dismiss" + he,
    Ce = "modal-open",
    Se = "fade",
    Ne = "show",
    De = "modal-static",
    Ae = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
    ke = ".sticky-top",
    Ie = (function () {
      function o(t, e) {
        (this._config = this._getConfig(e)),
          (this._element = t),
          (this._dialog = t.querySelector(".modal-dialog")),
          (this._backdrop = null),
          (this._isShown = !1),
          (this._isBodyOverflowing = !1),
          (this._ignoreBackdropClick = !1),
          (this._isTransitioning = !1),
          (this._scrollbarWidth = 0);
      }
      var t = o.prototype;
      return (
        (t.toggle = function (t) {
          return this._isShown ? this.hide() : this.show(t);
        }),
        (t.show = function (t) {
          var e,
            n = this;
          this._isShown ||
            this._isTransitioning ||
            (p.default(this._element).hasClass(Se) &&
              (this._isTransitioning = !0),
            (e = p.default.Event(ve, { relatedTarget: t })),
            p.default(this._element).trigger(e),
            this._isShown ||
              e.isDefaultPrevented() ||
              ((this._isShown = !0),
              this._checkScrollbar(),
              this._setScrollbar(),
              this._adjustDialog(),
              this._setEscapeEvent(),
              this._setResizeEvent(),
              p
                .default(this._element)
                .on(Ee, '[data-dismiss="modal"]', function (t) {
                  return n.hide(t);
                }),
              p.default(this._dialog).on(Te, function () {
                p.default(n._element).one(
                  "mouseup.dismiss.bs.modal",
                  function (t) {
                    p.default(t.target).is(n._element) &&
                      (n._ignoreBackdropClick = !0);
                  }
                );
              }),
              this._showBackdrop(function () {
                return n._showElement(t);
              })));
        }),
        (t.hide = function (t) {
          var e,
            n,
            i,
            o = this;
          t && t.preventDefault(),
            this._isShown &&
              !this._isTransitioning &&
              ((e = p.default.Event("hide.bs.modal")),
              p.default(this._element).trigger(e),
              this._isShown &&
                !e.isDefaultPrevented() &&
                ((this._isShown = !1),
                (n = p.default(this._element).hasClass(Se)) &&
                  (this._isTransitioning = !0),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                p.default(document).off(ye),
                p.default(this._element).removeClass(Ne),
                p.default(this._element).off(Ee),
                p.default(this._dialog).off(Te),
                n
                  ? ((i = m.getTransitionDurationFromElement(this._element)),
                    p
                      .default(this._element)
                      .one(m.TRANSITION_END, function (t) {
                        return o._hideModal(t);
                      })
                      .emulateTransitionEnd(i))
                  : this._hideModal()));
        }),
        (t.dispose = function () {
          [window, this._element, this._dialog].forEach(function (t) {
            return p.default(t).off(he);
          }),
            p.default(document).off(ye),
            p.default.removeData(this._element, ce),
            (this._config = null),
            (this._element = null),
            (this._dialog = null),
            (this._backdrop = null),
            (this._isShown = null),
            (this._isBodyOverflowing = null),
            (this._ignoreBackdropClick = null),
            (this._isTransitioning = null),
            (this._scrollbarWidth = null);
        }),
        (t.handleUpdate = function () {
          this._adjustDialog();
        }),
        (t._getConfig = function (t) {
          return (t = l({}, me, t)), m.typeCheckConfig(de, t, ge), t;
        }),
        (t._triggerBackdropTransition = function () {
          var t = this;
          if ("static" === this._config.backdrop) {
            var e = p.default.Event("hidePrevented.bs.modal");
            if ((p.default(this._element).trigger(e), e.isDefaultPrevented()))
              return;
            var n =
              this._element.scrollHeight >
              document.documentElement.clientHeight;
            n || (this._element.style.overflowY = "hidden"),
              this._element.classList.add(De);
            var i = m.getTransitionDurationFromElement(this._dialog);
            p.default(this._element).off(m.TRANSITION_END),
              p
                .default(this._element)
                .one(m.TRANSITION_END, function () {
                  t._element.classList.remove(De),
                    n ||
                      p
                        .default(t._element)
                        .one(m.TRANSITION_END, function () {
                          t._element.style.overflowY = "";
                        })
                        .emulateTransitionEnd(t._element, i);
                })
                .emulateTransitionEnd(i),
              this._element.focus();
          } else this.hide();
        }),
        (t._showElement = function (t) {
          var e = this,
            n = p.default(this._element).hasClass(Se),
            i = this._dialog ? this._dialog.querySelector(".modal-body") : null;
          (this._element.parentNode &&
            this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
            document.body.appendChild(this._element),
            (this._element.style.display = "block"),
            this._element.removeAttribute("aria-hidden"),
            this._element.setAttribute("aria-modal", !0),
            this._element.setAttribute("role", "dialog"),
            p.default(this._dialog).hasClass("modal-dialog-scrollable") && i
              ? (i.scrollTop = 0)
              : (this._element.scrollTop = 0),
            n && m.reflow(this._element),
            p.default(this._element).addClass(Ne),
            this._config.focus && this._enforceFocus();
          function o() {
            e._config.focus && e._element.focus(),
              (e._isTransitioning = !1),
              p.default(e._element).trigger(a);
          }
          var r,
            a = p.default.Event("shown.bs.modal", { relatedTarget: t });
          n
            ? ((r = m.getTransitionDurationFromElement(this._dialog)),
              p
                .default(this._dialog)
                .one(m.TRANSITION_END, o)
                .emulateTransitionEnd(r))
            : o();
        }),
        (t._enforceFocus = function () {
          var e = this;
          p.default(document)
            .off(ye)
            .on(ye, function (t) {
              document !== t.target &&
                e._element !== t.target &&
                0 === p.default(e._element).has(t.target).length &&
                e._element.focus();
            });
        }),
        (t._setEscapeEvent = function () {
          var e = this;
          this._isShown
            ? p.default(this._element).on(we, function (t) {
                e._config.keyboard && 27 === t.which
                  ? (t.preventDefault(), e.hide())
                  : e._config.keyboard ||
                    27 !== t.which ||
                    e._triggerBackdropTransition();
              })
            : this._isShown || p.default(this._element).off(we);
        }),
        (t._setResizeEvent = function () {
          var e = this;
          this._isShown
            ? p.default(window).on(be, function (t) {
                return e.handleUpdate(t);
              })
            : p.default(window).off(be);
        }),
        (t._hideModal = function () {
          var t = this;
          (this._element.style.display = "none"),
            this._element.setAttribute("aria-hidden", !0),
            this._element.removeAttribute("aria-modal"),
            this._element.removeAttribute("role"),
            (this._isTransitioning = !1),
            this._showBackdrop(function () {
              p.default(document.body).removeClass(Ce),
                t._resetAdjustments(),
                t._resetScrollbar(),
                p.default(t._element).trigger(_e);
            });
        }),
        (t._removeBackdrop = function () {
          this._backdrop &&
            (p.default(this._backdrop).remove(), (this._backdrop = null));
        }),
        (t._showBackdrop = function (t) {
          var e,
            n,
            i = this,
            o = p.default(this._element).hasClass(Se) ? Se : "";
          if (this._isShown && this._config.backdrop) {
            if (
              ((this._backdrop = document.createElement("div")),
              (this._backdrop.className = "modal-backdrop"),
              o && this._backdrop.classList.add(o),
              p.default(this._backdrop).appendTo(document.body),
              p.default(this._element).on(Ee, function (t) {
                i._ignoreBackdropClick
                  ? (i._ignoreBackdropClick = !1)
                  : t.target === t.currentTarget &&
                    i._triggerBackdropTransition();
              }),
              o && m.reflow(this._backdrop),
              p.default(this._backdrop).addClass(Ne),
              !t)
            )
              return;
            if (!o) return void t();
            var r = m.getTransitionDurationFromElement(this._backdrop);
            p.default(this._backdrop)
              .one(m.TRANSITION_END, t)
              .emulateTransitionEnd(r);
          } else {
            !this._isShown && this._backdrop
              ? (p.default(this._backdrop).removeClass(Ne),
                (e = function () {
                  i._removeBackdrop(), t && t();
                }),
                p.default(this._element).hasClass(Se)
                  ? ((n = m.getTransitionDurationFromElement(this._backdrop)),
                    p
                      .default(this._backdrop)
                      .one(m.TRANSITION_END, e)
                      .emulateTransitionEnd(n))
                  : e())
              : t && t();
          }
        }),
        (t._adjustDialog = function () {
          var t =
            this._element.scrollHeight > document.documentElement.clientHeight;
          !this._isBodyOverflowing &&
            t &&
            (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
            this._isBodyOverflowing &&
              !t &&
              (this._element.style.paddingRight = this._scrollbarWidth + "px");
        }),
        (t._resetAdjustments = function () {
          (this._element.style.paddingLeft = ""),
            (this._element.style.paddingRight = "");
        }),
        (t._checkScrollbar = function () {
          var t = document.body.getBoundingClientRect();
          (this._isBodyOverflowing =
            Math.round(t.left + t.right) < window.innerWidth),
            (this._scrollbarWidth = this._getScrollbarWidth());
        }),
        (t._setScrollbar = function () {
          var t,
            e,
            n,
            i,
            o = this;
          this._isBodyOverflowing &&
            ((t = [].slice.call(document.querySelectorAll(Ae))),
            (e = [].slice.call(document.querySelectorAll(ke))),
            p.default(t).each(function (t, e) {
              var n = e.style.paddingRight,
                i = p.default(e).css("padding-right");
              p.default(e)
                .data("padding-right", n)
                .css("padding-right", parseFloat(i) + o._scrollbarWidth + "px");
            }),
            p.default(e).each(function (t, e) {
              var n = e.style.marginRight,
                i = p.default(e).css("margin-right");
              p.default(e)
                .data("margin-right", n)
                .css("margin-right", parseFloat(i) - o._scrollbarWidth + "px");
            }),
            (n = document.body.style.paddingRight),
            (i = p.default(document.body).css("padding-right")),
            p
              .default(document.body)
              .data("padding-right", n)
              .css(
                "padding-right",
                parseFloat(i) + this._scrollbarWidth + "px"
              )),
            p.default(document.body).addClass(Ce);
        }),
        (t._resetScrollbar = function () {
          var t = [].slice.call(document.querySelectorAll(Ae));
          p.default(t).each(function (t, e) {
            var n = p.default(e).data("padding-right");
            p.default(e).removeData("padding-right"),
              (e.style.paddingRight = n || "");
          });
          var e = [].slice.call(document.querySelectorAll(ke));
          p.default(e).each(function (t, e) {
            var n = p.default(e).data("margin-right");
            void 0 !== n &&
              p.default(e).css("margin-right", n).removeData("margin-right");
          });
          var n = p.default(document.body).data("padding-right");
          p.default(document.body).removeData("padding-right"),
            (document.body.style.paddingRight = n || "");
        }),
        (t._getScrollbarWidth = function () {
          var t = document.createElement("div");
          (t.className = "modal-scrollbar-measure"),
            document.body.appendChild(t);
          var e = t.getBoundingClientRect().width - t.clientWidth;
          return document.body.removeChild(t), e;
        }),
        (o._jQueryInterface = function (n, i) {
          return this.each(function () {
            var t = p.default(this).data(ce),
              e = l(
                {},
                me,
                p.default(this).data(),
                "object" === _typeof(n) && n ? n : {}
              );
            if (
              (t || ((t = new o(this, e)), p.default(this).data(ce, t)),
              "string" == typeof n)
            ) {
              if (void 0 === t[n])
                throw new TypeError('No method named "' + n + '"');
              t[n](i);
            } else e.show && t.show(i);
          });
        }),
        a(o, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.3";
            },
          },
          {
            key: "Default",
            get: function () {
              return me;
            },
          },
        ]),
        o
      );
    })();
  p
    .default(document)
    .on("click.bs.modal.data-api", '[data-toggle="modal"]', function (t) {
      var e,
        n = this,
        i = m.getSelectorFromElement(this);
      i && (e = document.querySelector(i));
      var o = p.default(e).data(ce)
        ? "toggle"
        : l({}, p.default(e).data(), p.default(this).data());
      ("A" !== this.tagName && "AREA" !== this.tagName) || t.preventDefault();
      var r = p.default(e).one(ve, function (t) {
        t.isDefaultPrevented() ||
          r.one(_e, function () {
            p.default(n).is(":visible") && n.focus();
          });
      });
      Ie._jQueryInterface.call(p.default(e), o, this);
    }),
    (p.default.fn[de] = Ie._jQueryInterface),
    (p.default.fn[de].Constructor = Ie),
    (p.default.fn[de].noConflict = function () {
      return (p.default.fn[de] = pe), Ie._jQueryInterface;
    });
  var Oe = [
      "background",
      "cite",
      "href",
      "itemtype",
      "longdesc",
      "poster",
      "src",
      "xlink:href",
    ],
    xe = {
      "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
      a: ["target", "href", "title", "rel"],
      area: [],
      b: [],
      br: [],
      col: [],
      code: [],
      div: [],
      em: [],
      hr: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: [],
      i: [],
      img: ["src", "srcset", "alt", "title", "width", "height"],
      li: [],
      ol: [],
      p: [],
      pre: [],
      s: [],
      small: [],
      span: [],
      sub: [],
      sup: [],
      strong: [],
      u: [],
      ul: [],
    },
    je = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
    Le = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
  function Pe(t, r, e) {
    if (0 === t.length) return t;
    if (e && "function" == typeof e) return e(t);
    for (
      var n = new window.DOMParser().parseFromString(t, "text/html"),
        a = Object.keys(r),
        s = [].slice.call(n.body.querySelectorAll("*")),
        i = function (t) {
          var e = s[t],
            n = e.nodeName.toLowerCase();
          if (-1 === a.indexOf(e.nodeName.toLowerCase()))
            return e.parentNode.removeChild(e), "continue";
          var i = [].slice.call(e.attributes),
            o = [].concat(r["*"] || [], r[n] || []);
          i.forEach(function (t) {
            !(function (t, e) {
              var n = t.nodeName.toLowerCase();
              if (-1 !== e.indexOf(n))
                return (
                  -1 === Oe.indexOf(n) ||
                  Boolean(t.nodeValue.match(je) || t.nodeValue.match(Le))
                );
              for (
                var i = e.filter(function (t) {
                    return t instanceof RegExp;
                  }),
                  o = 0,
                  r = i.length;
                o < r;
                o++
              )
                if (n.match(i[o])) return 1;
            })(t, o) && e.removeAttribute(t.nodeName);
          });
        },
        o = 0,
        l = s.length;
      o < l;
      o++
    )
      i(o);
    return n.body.innerHTML;
  }
  var Fe = "tooltip",
    Re = "bs.tooltip",
    Be = "." + Re,
    He = p.default.fn[Fe],
    Me = "bs-tooltip",
    qe = new RegExp("(^|\\s)" + Me + "\\S+", "g"),
    Qe = ["sanitize", "whiteList", "sanitizeFn"],
    We = {
      animation: "boolean",
      template: "string",
      title: "(string|element|function)",
      trigger: "string",
      delay: "(number|object)",
      html: "boolean",
      selector: "(string|boolean)",
      placement: "(string|function)",
      offset: "(number|string|function)",
      container: "(string|element|boolean)",
      fallbackPlacement: "(string|array)",
      boundary: "(string|element)",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      whiteList: "object",
      popperConfig: "(null|object)",
    },
    Ue = {
      AUTO: "auto",
      TOP: "top",
      RIGHT: "right",
      BOTTOM: "bottom",
      LEFT: "left",
    },
    Ve = {
      animation: !0,
      template:
        '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: "hover focus",
      title: "",
      delay: 0,
      html: !1,
      selector: !1,
      placement: "top",
      offset: 0,
      container: !1,
      fallbackPlacement: "flip",
      boundary: "scrollParent",
      sanitize: !0,
      sanitizeFn: null,
      whiteList: xe,
      popperConfig: null,
    },
    Ye = "show",
    ze = {
      HIDE: "hide" + Be,
      HIDDEN: "hidden" + Be,
      SHOW: "show" + Be,
      SHOWN: "shown" + Be,
      INSERTED: "inserted" + Be,
      CLICK: "click" + Be,
      FOCUSIN: "focusin" + Be,
      FOCUSOUT: "focusout" + Be,
      MOUSEENTER: "mouseenter" + Be,
      MOUSELEAVE: "mouseleave" + Be,
    },
    Xe = "fade",
    Ke = "show",
    $e = "hover",
    Ge = "focus",
    Je = (function () {
      function o(t, e) {
        if (void 0 === Vt)
          throw new TypeError(
            "Bootstrap's tooltips require Popper.js (https://popper.js.org/)"
          );
        (this._isEnabled = !0),
          (this._timeout = 0),
          (this._hoverState = ""),
          (this._activeTrigger = {}),
          (this._popper = null),
          (this.element = t),
          (this.config = this._getConfig(e)),
          (this.tip = null),
          this._setListeners();
      }
      var t = o.prototype;
      return (
        (t.enable = function () {
          this._isEnabled = !0;
        }),
        (t.disable = function () {
          this._isEnabled = !1;
        }),
        (t.toggleEnabled = function () {
          this._isEnabled = !this._isEnabled;
        }),
        (t.toggle = function (t) {
          if (this._isEnabled)
            if (t) {
              var e = this.constructor.DATA_KEY,
                n = p.default(t.currentTarget).data(e);
              n ||
                ((n = new this.constructor(
                  t.currentTarget,
                  this._getDelegateConfig()
                )),
                p.default(t.currentTarget).data(e, n)),
                (n._activeTrigger.click = !n._activeTrigger.click),
                n._isWithActiveTrigger()
                  ? n._enter(null, n)
                  : n._leave(null, n);
            } else {
              if (p.default(this.getTipElement()).hasClass(Ke))
                return void this._leave(null, this);
              this._enter(null, this);
            }
        }),
        (t.dispose = function () {
          clearTimeout(this._timeout),
            p.default.removeData(this.element, this.constructor.DATA_KEY),
            p.default(this.element).off(this.constructor.EVENT_KEY),
            p
              .default(this.element)
              .closest(".modal")
              .off("hide.bs.modal", this._hideModalHandler),
            this.tip && p.default(this.tip).remove(),
            (this._isEnabled = null),
            (this._timeout = null),
            (this._hoverState = null),
            (this._activeTrigger = null),
            this._popper && this._popper.destroy(),
            (this._popper = null),
            (this.element = null),
            (this.config = null),
            (this.tip = null);
        }),
        (t.show = function () {
          var e = this;
          if ("none" === p.default(this.element).css("display"))
            throw new Error("Please use show on visible elements");
          var t = p.default.Event(this.constructor.Event.SHOW);
          if (this.isWithContent() && this._isEnabled) {
            p.default(this.element).trigger(t);
            var n = m.findShadowRoot(this.element),
              i = p.default.contains(
                null !== n ? n : this.element.ownerDocument.documentElement,
                this.element
              );
            if (t.isDefaultPrevented() || !i) return;
            var o = this.getTipElement(),
              r = m.getUID(this.constructor.NAME);
            o.setAttribute("id", r),
              this.element.setAttribute("aria-describedby", r),
              this.setContent(),
              this.config.animation && p.default(o).addClass(Xe);
            var a =
                "function" == typeof this.config.placement
                  ? this.config.placement.call(this, o, this.element)
                  : this.config.placement,
              s = this._getAttachment(a);
            this.addAttachmentClass(s);
            var l = this._getContainer();
            p.default(o).data(this.constructor.DATA_KEY, this),
              p.default.contains(
                this.element.ownerDocument.documentElement,
                this.tip
              ) || p.default(o).appendTo(l),
              p.default(this.element).trigger(this.constructor.Event.INSERTED),
              (this._popper = new Vt(
                this.element,
                o,
                this._getPopperConfig(s)
              )),
              p.default(o).addClass(Ke),
              "ontouchstart" in document.documentElement &&
                p
                  .default(document.body)
                  .children()
                  .on("mouseover", null, p.default.noop);
            var u,
              f = function () {
                e.config.animation && e._fixTransition();
                var t = e._hoverState;
                (e._hoverState = null),
                  p.default(e.element).trigger(e.constructor.Event.SHOWN),
                  "out" === t && e._leave(null, e);
              };
            p.default(this.tip).hasClass(Xe)
              ? ((u = m.getTransitionDurationFromElement(this.tip)),
                p
                  .default(this.tip)
                  .one(m.TRANSITION_END, f)
                  .emulateTransitionEnd(u))
              : f();
          }
        }),
        (t.hide = function (t) {
          function e() {
            i._hoverState !== Ye && o.parentNode && o.parentNode.removeChild(o),
              i._cleanTipClass(),
              i.element.removeAttribute("aria-describedby"),
              p.default(i.element).trigger(i.constructor.Event.HIDDEN),
              null !== i._popper && i._popper.destroy(),
              t && t();
          }
          var n,
            i = this,
            o = this.getTipElement(),
            r = p.default.Event(this.constructor.Event.HIDE);
          p.default(this.element).trigger(r),
            r.isDefaultPrevented() ||
              (p.default(o).removeClass(Ke),
              "ontouchstart" in document.documentElement &&
                p
                  .default(document.body)
                  .children()
                  .off("mouseover", null, p.default.noop),
              (this._activeTrigger.click = !1),
              (this._activeTrigger[Ge] = !1),
              (this._activeTrigger[$e] = !1),
              p.default(this.tip).hasClass(Xe)
                ? ((n = m.getTransitionDurationFromElement(o)),
                  p.default(o).one(m.TRANSITION_END, e).emulateTransitionEnd(n))
                : e(),
              (this._hoverState = ""));
        }),
        (t.update = function () {
          null !== this._popper && this._popper.scheduleUpdate();
        }),
        (t.isWithContent = function () {
          return Boolean(this.getTitle());
        }),
        (t.addAttachmentClass = function (t) {
          p.default(this.getTipElement()).addClass(Me + "-" + t);
        }),
        (t.getTipElement = function () {
          return (
            (this.tip = this.tip || p.default(this.config.template)[0]),
            this.tip
          );
        }),
        (t.setContent = function () {
          var t = this.getTipElement();
          this.setElementContent(
            p.default(t.querySelectorAll(".tooltip-inner")),
            this.getTitle()
          ),
            p.default(t).removeClass(Xe + " " + Ke);
        }),
        (t.setElementContent = function (t, e) {
          "object" !== _typeof(e) || (!e.nodeType && !e.jquery)
            ? this.config.html
              ? (this.config.sanitize &&
                  (e = Pe(e, this.config.whiteList, this.config.sanitizeFn)),
                t.html(e))
              : t.text(e)
            : this.config.html
            ? p.default(e).parent().is(t) || t.empty().append(e)
            : t.text(p.default(e).text());
        }),
        (t.getTitle = function () {
          return (
            this.element.getAttribute("data-original-title") ||
            ("function" == typeof this.config.title
              ? this.config.title.call(this.element)
              : this.config.title)
          );
        }),
        (t._getPopperConfig = function (t) {
          var e = this;
          return l(
            {},
            {
              placement: t,
              modifiers: {
                offset: this._getOffset(),
                flip: { behavior: this.config.fallbackPlacement },
                arrow: { element: ".arrow" },
                preventOverflow: { boundariesElement: this.config.boundary },
              },
              onCreate: function (t) {
                t.originalPlacement !== t.placement &&
                  e._handlePopperPlacementChange(t);
              },
              onUpdate: function (t) {
                return e._handlePopperPlacementChange(t);
              },
            },
            this.config.popperConfig
          );
        }),
        (t._getOffset = function () {
          var e = this,
            t = {};
          return (
            "function" == typeof this.config.offset
              ? (t.fn = function (t) {
                  return (
                    (t.offsets = l(
                      {},
                      t.offsets,
                      e.config.offset(t.offsets, e.element) || {}
                    )),
                    t
                  );
                })
              : (t.offset = this.config.offset),
            t
          );
        }),
        (t._getContainer = function () {
          return !1 === this.config.container
            ? document.body
            : m.isElement(this.config.container)
            ? p.default(this.config.container)
            : p.default(document).find(this.config.container);
        }),
        (t._getAttachment = function (t) {
          return Ue[t.toUpperCase()];
        }),
        (t._setListeners = function () {
          var i = this;
          this.config.trigger.split(" ").forEach(function (t) {
            var e, n;
            "click" === t
              ? p
                  .default(i.element)
                  .on(
                    i.constructor.Event.CLICK,
                    i.config.selector,
                    function (t) {
                      return i.toggle(t);
                    }
                  )
              : "manual" !== t &&
                ((e =
                  t === $e
                    ? i.constructor.Event.MOUSEENTER
                    : i.constructor.Event.FOCUSIN),
                (n =
                  t === $e
                    ? i.constructor.Event.MOUSELEAVE
                    : i.constructor.Event.FOCUSOUT),
                p
                  .default(i.element)
                  .on(e, i.config.selector, function (t) {
                    return i._enter(t);
                  })
                  .on(n, i.config.selector, function (t) {
                    return i._leave(t);
                  }));
          }),
            (this._hideModalHandler = function () {
              i.element && i.hide();
            }),
            p
              .default(this.element)
              .closest(".modal")
              .on("hide.bs.modal", this._hideModalHandler),
            this.config.selector
              ? (this.config = l({}, this.config, {
                  trigger: "manual",
                  selector: "",
                }))
              : this._fixTitle();
        }),
        (t._fixTitle = function () {
          var t = _typeof(this.element.getAttribute("data-original-title"));
          (!this.element.getAttribute("title") && "string" === t) ||
            (this.element.setAttribute(
              "data-original-title",
              this.element.getAttribute("title") || ""
            ),
            this.element.setAttribute("title", ""));
        }),
        (t._enter = function (t, e) {
          var n = this.constructor.DATA_KEY;
          (e = e || p.default(t.currentTarget).data(n)) ||
            ((e = new this.constructor(
              t.currentTarget,
              this._getDelegateConfig()
            )),
            p.default(t.currentTarget).data(n, e)),
            t && (e._activeTrigger["focusin" === t.type ? Ge : $e] = !0),
            p.default(e.getTipElement()).hasClass(Ke) || e._hoverState === Ye
              ? (e._hoverState = Ye)
              : (clearTimeout(e._timeout),
                (e._hoverState = Ye),
                e.config.delay && e.config.delay.show
                  ? (e._timeout = setTimeout(function () {
                      e._hoverState === Ye && e.show();
                    }, e.config.delay.show))
                  : e.show());
        }),
        (t._leave = function (t, e) {
          var n = this.constructor.DATA_KEY;
          (e = e || p.default(t.currentTarget).data(n)) ||
            ((e = new this.constructor(
              t.currentTarget,
              this._getDelegateConfig()
            )),
            p.default(t.currentTarget).data(n, e)),
            t && (e._activeTrigger["focusout" === t.type ? Ge : $e] = !1),
            e._isWithActiveTrigger() ||
              (clearTimeout(e._timeout),
              (e._hoverState = "out"),
              e.config.delay && e.config.delay.hide
                ? (e._timeout = setTimeout(function () {
                    "out" === e._hoverState && e.hide();
                  }, e.config.delay.hide))
                : e.hide());
        }),
        (t._isWithActiveTrigger = function () {
          for (var t in this._activeTrigger)
            if (this._activeTrigger[t]) return !0;
          return !1;
        }),
        (t._getConfig = function (t) {
          var e = p.default(this.element).data();
          return (
            Object.keys(e).forEach(function (t) {
              -1 !== Qe.indexOf(t) && delete e[t];
            }),
            "number" ==
              typeof (t = l(
                {},
                this.constructor.Default,
                e,
                "object" === _typeof(t) && t ? t : {}
              )).delay && (t.delay = { show: t.delay, hide: t.delay }),
            "number" == typeof t.title && (t.title = t.title.toString()),
            "number" == typeof t.content && (t.content = t.content.toString()),
            m.typeCheckConfig(Fe, t, this.constructor.DefaultType),
            t.sanitize &&
              (t.template = Pe(t.template, t.whiteList, t.sanitizeFn)),
            t
          );
        }),
        (t._getDelegateConfig = function () {
          var t = {};
          if (this.config)
            for (var e in this.config)
              this.constructor.Default[e] !== this.config[e] &&
                (t[e] = this.config[e]);
          return t;
        }),
        (t._cleanTipClass = function () {
          var t = p.default(this.getTipElement()),
            e = t.attr("class").match(qe);
          null !== e && e.length && t.removeClass(e.join(""));
        }),
        (t._handlePopperPlacementChange = function (t) {
          (this.tip = t.instance.popper),
            this._cleanTipClass(),
            this.addAttachmentClass(this._getAttachment(t.placement));
        }),
        (t._fixTransition = function () {
          var t = this.getTipElement(),
            e = this.config.animation;
          null === t.getAttribute("x-placement") &&
            (p.default(t).removeClass(Xe),
            (this.config.animation = !1),
            this.hide(),
            this.show(),
            (this.config.animation = e));
        }),
        (o._jQueryInterface = function (i) {
          return this.each(function () {
            var t = p.default(this),
              e = t.data(Re),
              n = "object" === _typeof(i) && i;
            if (
              (e || !/dispose|hide/.test(i)) &&
              (e || ((e = new o(this, n)), t.data(Re, e)), "string" == typeof i)
            ) {
              if (void 0 === e[i])
                throw new TypeError('No method named "' + i + '"');
              e[i]();
            }
          });
        }),
        a(o, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.3";
            },
          },
          {
            key: "Default",
            get: function () {
              return Ve;
            },
          },
          {
            key: "NAME",
            get: function () {
              return Fe;
            },
          },
          {
            key: "DATA_KEY",
            get: function () {
              return Re;
            },
          },
          {
            key: "Event",
            get: function () {
              return ze;
            },
          },
          {
            key: "EVENT_KEY",
            get: function () {
              return Be;
            },
          },
          {
            key: "DefaultType",
            get: function () {
              return We;
            },
          },
        ]),
        o
      );
    })();
  (p.default.fn[Fe] = Je._jQueryInterface),
    (p.default.fn[Fe].Constructor = Je),
    (p.default.fn[Fe].noConflict = function () {
      return (p.default.fn[Fe] = He), Je._jQueryInterface;
    });
  var Ze = "popover",
    tn = "bs.popover",
    en = "." + tn,
    nn = p.default.fn[Ze],
    on = "bs-popover",
    rn = new RegExp("(^|\\s)" + on + "\\S+", "g"),
    an = l({}, Je.Default, {
      placement: "right",
      trigger: "click",
      content: "",
      template:
        '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    }),
    sn = l({}, Je.DefaultType, { content: "(string|element|function)" }),
    ln = {
      HIDE: "hide" + en,
      HIDDEN: "hidden" + en,
      SHOW: "show" + en,
      SHOWN: "shown" + en,
      INSERTED: "inserted" + en,
      CLICK: "click" + en,
      FOCUSIN: "focusin" + en,
      FOCUSOUT: "focusout" + en,
      MOUSEENTER: "mouseenter" + en,
      MOUSELEAVE: "mouseleave" + en,
    },
    un = (function (t) {
      var e, n;
      function i() {
        return t.apply(this, arguments) || this;
      }
      (n = t),
        ((e = i).prototype = Object.create(n.prototype)),
        ((e.prototype.constructor = e).__proto__ = n);
      var o = i.prototype;
      return (
        (o.isWithContent = function () {
          return this.getTitle() || this._getContent();
        }),
        (o.addAttachmentClass = function (t) {
          p.default(this.getTipElement()).addClass(on + "-" + t);
        }),
        (o.getTipElement = function () {
          return (
            (this.tip = this.tip || p.default(this.config.template)[0]),
            this.tip
          );
        }),
        (o.setContent = function () {
          var t = p.default(this.getTipElement());
          this.setElementContent(t.find(".popover-header"), this.getTitle());
          var e = this._getContent();
          "function" == typeof e && (e = e.call(this.element)),
            this.setElementContent(t.find(".popover-body"), e),
            t.removeClass("fade show");
        }),
        (o._getContent = function () {
          return (
            this.element.getAttribute("data-content") || this.config.content
          );
        }),
        (o._cleanTipClass = function () {
          var t = p.default(this.getTipElement()),
            e = t.attr("class").match(rn);
          null !== e && 0 < e.length && t.removeClass(e.join(""));
        }),
        (i._jQueryInterface = function (n) {
          return this.each(function () {
            var t = p.default(this).data(tn),
              e = "object" === _typeof(n) ? n : null;
            if (
              (t || !/dispose|hide/.test(n)) &&
              (t || ((t = new i(this, e)), p.default(this).data(tn, t)),
              "string" == typeof n)
            ) {
              if (void 0 === t[n])
                throw new TypeError('No method named "' + n + '"');
              t[n]();
            }
          });
        }),
        a(i, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.3";
            },
          },
          {
            key: "Default",
            get: function () {
              return an;
            },
          },
          {
            key: "NAME",
            get: function () {
              return Ze;
            },
          },
          {
            key: "DATA_KEY",
            get: function () {
              return tn;
            },
          },
          {
            key: "Event",
            get: function () {
              return ln;
            },
          },
          {
            key: "EVENT_KEY",
            get: function () {
              return en;
            },
          },
          {
            key: "DefaultType",
            get: function () {
              return sn;
            },
          },
        ]),
        i
      );
    })(Je);
  (p.default.fn[Ze] = un._jQueryInterface),
    (p.default.fn[Ze].Constructor = un),
    (p.default.fn[Ze].noConflict = function () {
      return (p.default.fn[Ze] = nn), un._jQueryInterface;
    });
  var fn = "scrollspy",
    dn = "bs.scrollspy",
    cn = "." + dn,
    hn = p.default.fn[fn],
    pn = { offset: 10, method: "auto", target: "" },
    mn = { offset: "number", method: "string", target: "(string|element)" },
    gn = "active",
    _n = ".nav, .list-group",
    vn = ".nav-link",
    yn = ".list-group-item",
    bn = "position",
    En = (function () {
      function i(t, e) {
        var n = this;
        (this._element = t),
          (this._scrollElement = "BODY" === t.tagName ? window : t),
          (this._config = this._getConfig(e)),
          (this._selector =
            this._config.target +
            " " +
            vn +
            "," +
            this._config.target +
            " " +
            yn +
            "," +
            this._config.target +
            " .dropdown-item"),
          (this._offsets = []),
          (this._targets = []),
          (this._activeTarget = null),
          (this._scrollHeight = 0),
          p
            .default(this._scrollElement)
            .on("scroll.bs.scrollspy", function (t) {
              return n._process(t);
            }),
          this.refresh(),
          this._process();
      }
      var t = i.prototype;
      return (
        (t.refresh = function () {
          var e = this,
            t =
              this._scrollElement === this._scrollElement.window
                ? "offset"
                : bn,
            o = "auto" === this._config.method ? t : this._config.method,
            r = o === bn ? this._getScrollTop() : 0;
          (this._offsets = []),
            (this._targets = []),
            (this._scrollHeight = this._getScrollHeight()),
            [].slice
              .call(document.querySelectorAll(this._selector))
              .map(function (t) {
                var e,
                  n = m.getSelectorFromElement(t);
                if ((n && (e = document.querySelector(n)), e)) {
                  var i = e.getBoundingClientRect();
                  if (i.width || i.height)
                    return [p.default(e)[o]().top + r, n];
                }
                return null;
              })
              .filter(function (t) {
                return t;
              })
              .sort(function (t, e) {
                return t[0] - e[0];
              })
              .forEach(function (t) {
                e._offsets.push(t[0]), e._targets.push(t[1]);
              });
        }),
        (t.dispose = function () {
          p.default.removeData(this._element, dn),
            p.default(this._scrollElement).off(cn),
            (this._element = null),
            (this._scrollElement = null),
            (this._config = null),
            (this._selector = null),
            (this._offsets = null),
            (this._targets = null),
            (this._activeTarget = null),
            (this._scrollHeight = null);
        }),
        (t._getConfig = function (t) {
          var e;
          return (
            "string" !=
              typeof (t = l({}, pn, "object" === _typeof(t) && t ? t : {}))
                .target &&
              m.isElement(t.target) &&
              ((e = p.default(t.target).attr("id")) ||
                ((e = m.getUID(fn)), p.default(t.target).attr("id", e)),
              (t.target = "#" + e)),
            m.typeCheckConfig(fn, t, mn),
            t
          );
        }),
        (t._getScrollTop = function () {
          return this._scrollElement === window
            ? this._scrollElement.pageYOffset
            : this._scrollElement.scrollTop;
        }),
        (t._getScrollHeight = function () {
          return (
            this._scrollElement.scrollHeight ||
            Math.max(
              document.body.scrollHeight,
              document.documentElement.scrollHeight
            )
          );
        }),
        (t._getOffsetHeight = function () {
          return this._scrollElement === window
            ? window.innerHeight
            : this._scrollElement.getBoundingClientRect().height;
        }),
        (t._process = function () {
          var t = this._getScrollTop() + this._config.offset,
            e = this._getScrollHeight(),
            n = this._config.offset + e - this._getOffsetHeight();
          if ((this._scrollHeight !== e && this.refresh(), n <= t)) {
            var i = this._targets[this._targets.length - 1];
            this._activeTarget !== i && this._activate(i);
          } else {
            if (
              this._activeTarget &&
              t < this._offsets[0] &&
              0 < this._offsets[0]
            )
              return (this._activeTarget = null), void this._clear();
            for (var o = this._offsets.length; o--; ) {
              this._activeTarget !== this._targets[o] &&
                t >= this._offsets[o] &&
                (void 0 === this._offsets[o + 1] || t < this._offsets[o + 1]) &&
                this._activate(this._targets[o]);
            }
          }
        }),
        (t._activate = function (e) {
          (this._activeTarget = e), this._clear();
          var t = this._selector.split(",").map(function (t) {
              return (
                t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
              );
            }),
            n = p.default(
              [].slice.call(document.querySelectorAll(t.join(",")))
            );
          n.hasClass("dropdown-item")
            ? (n.closest(".dropdown").find(".dropdown-toggle").addClass(gn),
              n.addClass(gn))
            : (n.addClass(gn),
              n
                .parents(_n)
                .prev(vn + ", " + yn)
                .addClass(gn),
              n.parents(_n).prev(".nav-item").children(vn).addClass(gn)),
            p
              .default(this._scrollElement)
              .trigger("activate.bs.scrollspy", { relatedTarget: e });
        }),
        (t._clear = function () {
          [].slice
            .call(document.querySelectorAll(this._selector))
            .filter(function (t) {
              return t.classList.contains(gn);
            })
            .forEach(function (t) {
              return t.classList.remove(gn);
            });
        }),
        (i._jQueryInterface = function (n) {
          return this.each(function () {
            var t = p.default(this).data(dn),
              e = "object" === _typeof(n) && n;
            if (
              (t || ((t = new i(this, e)), p.default(this).data(dn, t)),
              "string" == typeof n)
            ) {
              if (void 0 === t[n])
                throw new TypeError('No method named "' + n + '"');
              t[n]();
            }
          });
        }),
        a(i, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.3";
            },
          },
          {
            key: "Default",
            get: function () {
              return pn;
            },
          },
        ]),
        i
      );
    })();
  p.default(window).on("load.bs.scrollspy.data-api", function () {
    for (
      var t = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')),
        e = t.length;
      e--;

    ) {
      var n = p.default(t[e]);
      En._jQueryInterface.call(n, n.data());
    }
  }),
    (p.default.fn[fn] = En._jQueryInterface),
    (p.default.fn[fn].Constructor = En),
    (p.default.fn[fn].noConflict = function () {
      return (p.default.fn[fn] = hn), En._jQueryInterface;
    });
  var wn = "bs.tab",
    Tn = p.default.fn.tab,
    Cn = "active",
    Sn = ".active",
    Nn = "> li > .active",
    Dn = (function () {
      function i(t) {
        this._element = t;
      }
      var t = i.prototype;
      return (
        (t.show = function () {
          var t,
            e,
            n,
            i,
            o,
            r,
            a,
            s,
            l = this;
          (this._element.parentNode &&
            this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
            p.default(this._element).hasClass(Cn)) ||
            p.default(this._element).hasClass("disabled") ||
            ((e = p.default(this._element).closest(".nav, .list-group")[0]),
            (n = m.getSelectorFromElement(this._element)),
            e &&
              ((i = "UL" === e.nodeName || "OL" === e.nodeName ? Nn : Sn),
              (o = (o = p.default.makeArray(p.default(e).find(i)))[
                o.length - 1
              ])),
            (r = p.default.Event("hide.bs.tab", {
              relatedTarget: this._element,
            })),
            (a = p.default.Event("show.bs.tab", { relatedTarget: o })),
            o && p.default(o).trigger(r),
            p.default(this._element).trigger(a),
            a.isDefaultPrevented() ||
              r.isDefaultPrevented() ||
              (n && (t = document.querySelector(n)),
              this._activate(this._element, e),
              (s = function () {
                var t = p.default.Event("hidden.bs.tab", {
                    relatedTarget: l._element,
                  }),
                  e = p.default.Event("shown.bs.tab", { relatedTarget: o });
                p.default(o).trigger(t), p.default(l._element).trigger(e);
              }),
              t ? this._activate(t, t.parentNode, s) : s()));
        }),
        (t.dispose = function () {
          p.default.removeData(this._element, wn), (this._element = null);
        }),
        (t._activate = function (t, e, n) {
          function i() {
            return r._transitionComplete(t, a, n);
          }
          var o,
            r = this,
            a = (!e || ("UL" !== e.nodeName && "OL" !== e.nodeName)
              ? p.default(e).children(Sn)
              : p.default(e).find(Nn))[0],
            s = n && a && p.default(a).hasClass("fade");
          a && s
            ? ((o = m.getTransitionDurationFromElement(a)),
              p
                .default(a)
                .removeClass("show")
                .one(m.TRANSITION_END, i)
                .emulateTransitionEnd(o))
            : i();
        }),
        (t._transitionComplete = function (t, e, n) {
          var i, o, r;
          e &&
            (p.default(e).removeClass(Cn),
            (i = p.default(e.parentNode).find("> .dropdown-menu .active")[0]) &&
              p.default(i).removeClass(Cn),
            "tab" === e.getAttribute("role") &&
              e.setAttribute("aria-selected", !1)),
            p.default(t).addClass(Cn),
            "tab" === t.getAttribute("role") &&
              t.setAttribute("aria-selected", !0),
            m.reflow(t),
            t.classList.contains("fade") && t.classList.add("show"),
            t.parentNode &&
              p.default(t.parentNode).hasClass("dropdown-menu") &&
              ((o = p.default(t).closest(".dropdown")[0]) &&
                ((r = [].slice.call(o.querySelectorAll(".dropdown-toggle"))),
                p.default(r).addClass(Cn)),
              t.setAttribute("aria-expanded", !0)),
            n && n();
        }),
        (i._jQueryInterface = function (n) {
          return this.each(function () {
            var t = p.default(this),
              e = t.data(wn);
            if (
              (e || ((e = new i(this)), t.data(wn, e)), "string" == typeof n)
            ) {
              if (void 0 === e[n])
                throw new TypeError('No method named "' + n + '"');
              e[n]();
            }
          });
        }),
        a(i, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.3";
            },
          },
        ]),
        i
      );
    })();
  p
    .default(document)
    .on(
      "click.bs.tab.data-api",
      '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
      function (t) {
        t.preventDefault(), Dn._jQueryInterface.call(p.default(this), "show");
      }
    ),
    (p.default.fn.tab = Dn._jQueryInterface),
    (p.default.fn.tab.Constructor = Dn),
    (p.default.fn.tab.noConflict = function () {
      return (p.default.fn.tab = Tn), Dn._jQueryInterface;
    });
  var An = "toast",
    kn = "bs.toast",
    In = "." + kn,
    On = p.default.fn[An],
    xn = "click.dismiss" + In,
    jn = "show",
    Ln = "showing",
    Pn = { animation: "boolean", autohide: "boolean", delay: "number" },
    Fn = { animation: !0, autohide: !0, delay: 500 },
    Rn = (function () {
      function o(t, e) {
        (this._element = t),
          (this._config = this._getConfig(e)),
          (this._timeout = null),
          this._setListeners();
      }
      var t = o.prototype;
      return (
        (t.show = function () {
          var t,
            e,
            n = this,
            i = p.default.Event("show.bs.toast");
          p.default(this._element).trigger(i),
            i.isDefaultPrevented() ||
              (this._clearTimeout(),
              this._config.animation && this._element.classList.add("fade"),
              (t = function () {
                n._element.classList.remove(Ln),
                  n._element.classList.add(jn),
                  p.default(n._element).trigger("shown.bs.toast"),
                  n._config.autohide &&
                    (n._timeout = setTimeout(function () {
                      n.hide();
                    }, n._config.delay));
              }),
              this._element.classList.remove("hide"),
              m.reflow(this._element),
              this._element.classList.add(Ln),
              this._config.animation
                ? ((e = m.getTransitionDurationFromElement(this._element)),
                  p
                    .default(this._element)
                    .one(m.TRANSITION_END, t)
                    .emulateTransitionEnd(e))
                : t());
        }),
        (t.hide = function () {
          var t;
          this._element.classList.contains(jn) &&
            ((t = p.default.Event("hide.bs.toast")),
            p.default(this._element).trigger(t),
            t.isDefaultPrevented() || this._close());
        }),
        (t.dispose = function () {
          this._clearTimeout(),
            this._element.classList.contains(jn) &&
              this._element.classList.remove(jn),
            p.default(this._element).off(xn),
            p.default.removeData(this._element, kn),
            (this._element = null),
            (this._config = null);
        }),
        (t._getConfig = function (t) {
          return (
            (t = l(
              {},
              Fn,
              p.default(this._element).data(),
              "object" === _typeof(t) && t ? t : {}
            )),
            m.typeCheckConfig(An, t, this.constructor.DefaultType),
            t
          );
        }),
        (t._setListeners = function () {
          var t = this;
          p.default(this._element).on(
            xn,
            '[data-dismiss="toast"]',
            function () {
              return t.hide();
            }
          );
        }),
        (t._close = function () {
          function t() {
            n._element.classList.add("hide"),
              p.default(n._element).trigger("hidden.bs.toast");
          }
          var e,
            n = this;
          this._element.classList.remove(jn),
            this._config.animation
              ? ((e = m.getTransitionDurationFromElement(this._element)),
                p
                  .default(this._element)
                  .one(m.TRANSITION_END, t)
                  .emulateTransitionEnd(e))
              : t();
        }),
        (t._clearTimeout = function () {
          clearTimeout(this._timeout), (this._timeout = null);
        }),
        (o._jQueryInterface = function (i) {
          return this.each(function () {
            var t = p.default(this),
              e = t.data(kn),
              n = "object" === _typeof(i) && i;
            if (
              (e || ((e = new o(this, n)), t.data(kn, e)), "string" == typeof i)
            ) {
              if (void 0 === e[i])
                throw new TypeError('No method named "' + i + '"');
              e[i](this);
            }
          });
        }),
        a(o, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.3";
            },
          },
          {
            key: "DefaultType",
            get: function () {
              return Pn;
            },
          },
          {
            key: "Default",
            get: function () {
              return Fn;
            },
          },
        ]),
        o
      );
    })();
  (p.default.fn[An] = Rn._jQueryInterface),
    (p.default.fn[An].Constructor = Rn),
    (p.default.fn[An].noConflict = function () {
      return (p.default.fn[An] = On), Rn._jQueryInterface;
    }),
    (t.Alert = d),
    (t.Button = E),
    (t.Carousel = L),
    (t.Collapse = V),
    (t.Dropdown = fe),
    (t.Modal = Ie),
    (t.Popover = un),
    (t.Scrollspy = En),
    (t.Tab = Dn),
    (t.Toast = Rn),
    (t.Tooltip = Je),
    (t.Util = m),
    Object.defineProperty(t, "__esModule", { value: !0 });
}),
  (function () {
    var t = -1 < navigator.userAgent.toLowerCase().indexOf("webkit"),
      e = -1 < navigator.userAgent.toLowerCase().indexOf("opera"),
      n = -1 < navigator.userAgent.toLowerCase().indexOf("msie");
    (t || e || n) &&
      document.getElementById &&
      window.addEventListener &&
      window.addEventListener(
        "hashchange",
        function () {
          var t,
            e = location.hash.substring(1);
          /^[A-z0-9_-]+$/.test(e) &&
            (t = document.getElementById(e)) &&
            (/^(?:a|select|input|button|textarea)$/i.test(t.tagName) ||
              (t.tabIndex = -1),
            t.focus());
        },
        !1
      );
  })();

jQuery(".testimonials-container").slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  // adaptiveHeight: true,
  autoplay: true,
  // autoplaySpeed:1500,
  infinite: true,
  arrows: true,
  dots: false,
  prevArrow: jQuery(".prev"),
  nextArrow: jQuery(".next"),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoHeight: true,
      },
    },
    {
      breakpoint: 300,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoHeight: true,
      },
    },
  ],
});
;
function heateorSssLoadEvent(e) {var t=window.onload;if (typeof window.onload!="function") {window.onload=e}else{window.onload=function() {t();e()}}};	var heateorSssSharingAjaxUrl = 'https://new-website.stoica.co/wp-admin/admin-ajax.php', heateorSssCloseIconPath = 'https://new-website.stoica.co/wp-content/plugins/sassy-social-share/public/../images/close.png', heateorSssPluginIconPath = 'https://new-website.stoica.co/wp-content/plugins/sassy-social-share/public/../images/logo.png', heateorSssHorizontalSharingCountEnable = 0, heateorSssVerticalSharingCountEnable = 0, heateorSssSharingOffset = -10; var heateorSssMobileStickySharingEnabled = 0;var heateorSssCopyLinkMessage = "Link copied.";var heateorSssUrlCountFetched = [], heateorSssSharesText = 'Shares', heateorSssShareText = 'Share';function heateorSssPopup(e) {window.open(e,"popUpWindow","height=400,width=600,left=400,top=100,resizable,scrollbars,toolbar=0,personalbar=0,menubar=no,location=no,directories=no,status")};var heateorSssWhatsappShareAPI = "web";;
function heateorSssCallAjax(e){if(typeof jQuery!="undefined"){e()}else{heateorSssGetScript("https://code.jquery.com/jquery-latest.min.js",e)}}
function heateorSssGetScript(e,t){var n=document.createElement("script");n.src=e;var r=document.getElementsByTagName("head")[0],i=false;n.onload=n.onreadystatechange=function(){if(!i&&(!this.readyState||this.readyState=="loaded"||this.readyState=="complete")){i=true;t();n.onload=n.onreadystatechange=null;r.removeChild(n)}};r.appendChild(n)}
function heateorSssDetermineWhatsappShareAPI(a){if(a)return-1!=navigator.userAgent.indexOf("Mobi")?"api.whatsapp.com":"web.whatsapp.com";var p=jQuery("i.heateorSssWhatsappBackground a").attr("href");return void 0!==p?-1!=navigator.userAgent.indexOf("Mobi")?(jQuery("i.heateorSssWhatsappBackground a").attr("href",p.replace("web.whatsapp.com","api.whatsapp.com")),"api.whatsapp.com"):(jQuery("i.heateorSssWhatsappBackground a").attr("href",p.replace("api.whatsapp.com","web.whatsapp.com")),"web.whatsapp.com"):""}
/**
 * Show more sharing services popup
 */
function heateorSssMoreSharingPopup(elem, postUrl, postTitle, twitterTitle){
	postUrl = encodeURIComponent(postUrl);
	concate = '</ul></div><div class="footer-panel"><p></p></div></div>';
	var heateorSssMoreSharingServices = {	  
	  facebook: {
		title: "Facebook",
		locale: "en-US",
		redirect_url: "https://www.facebook.com/sharer.php?u=" + postUrl + "&t=" + postTitle + "&v=3",
	  },
	  twitter: {
		title: "Twitter",
		locale: "en-US",
		redirect_url: "https://twitter.com/intent/tweet?text=" + (twitterTitle ? twitterTitle : postTitle) + " " + postUrl,
	  },
	  linkedin: {
		title: "Linkedin",
		locale: "en-US",
		redirect_url: "https://www.linkedin.com/shareArticle?mini=true&url=" + postUrl + "&title=" + postTitle,
	  },
	  parler: {
		title: "Parler",
		locale: "en-US",
		redirect_url: "https://parler.com/new-post?message=" + postTitle + "&url=" + postUrl
	  },
	  pinterest: {
		title: "Pinterest",
		locale: "en-US",
		redirect_url: "https://pinterest.com/pin/create/button/?url=" + postUrl + "&media=${media_link}&description=" + postTitle,
		bookmarklet_url: "javascript:void((function(){var e=document.createElement('script');e.setAttribute('type','text/javascript');e.setAttribute('charset','UTF-8');e.setAttribute('src','//assets.pinterest.com/js/pinmarklet.js?r='+Math.random()*99999999);document.body.appendChild(e)})());"
	  },
	  CopyLink: {
		title: "Copy Link",
		locale: "en-US",
		redirect_url: "",
		bookmarklet_url: ""
	  },
	  Diaspora: {
		title: "Diaspora",
		locale: "en-US",
		redirect_url: "https://joindiaspora.com/bookmarklet?url=" + postUrl + "&title=" + postTitle + "&v=1"
	  },
	  Douban: {
		title: "Douban",
		locale: "en-US",
		redirect_url: "https://www.douban.com/share/service?name="+postTitle+"&href="+postUrl+"&image=&updated=&bm=&url="+postUrl+"&title="+postTitle+"&sel="
	  },
	  Draugiem: {
		title: "Draugiem",
		locale: "en-US",
		redirect_url: "https://www.draugiem.lv/say/ext/add.php?link="+postUrl+"&title="+postTitle
	  },
	  Facebook_Messenger: {
		title: "Facebook Messenger",
		locale: "en-US",
		redirect_url: "https://www.facebook.com/dialog/send?app_id=1904103319867886&display=popup&link="+postUrl+"&redirect_uri="+postUrl
	  },
	  Google_Classroom: {
		title: "Google Classroom",
		locale: "en-US",
		redirect_url: "https://classroom.google.com/u/0/share?url="+postUrl
	  },
	  Kik: {
		title: "Kik",
		locale: "en-US",
		redirect_url: "https://www.kik.com/send/article/?app_name=Share&text=&title="+postTitle+"&url="+postUrl
	  },
	  Papaly: {
		title: "Papaly",
		locale: "en-US",
		redirect_url: "https://papaly.com/api/share.html?url="+postUrl+"&title="+postTitle
	  },
	  Refind: {
		title: "Refind",
		locale: "en-US",
		redirect_url: "https://refind.com/?url="+postUrl
	  },
	  Skype: {
		title: "Skype",
		locale: "en-US",
		redirect_url: "https://web.skype.com/share?url="+postUrl
	  },
	  SMS: {
		title: "SMS",
		locale: "en-US",
		bookmarklet_url: "sms:?&body="+postTitle+" "+postUrl
	  },
	  Trello: {
		title: "Trello",
		locale: "en-US",
		redirect_url: "https://trello.com/add-card?mode=popup&url="+postUrl+"&name="+postTitle+"&desc="
	  },
	  Viber: {
		title: "Viber",
		locale: "en-US",
		bookmarklet_url: "viber://forward?text="+postTitle+" "+postUrl
	  },
	  Threema: {
		title: "Threema",
		locale: "en-US",
		bookmarklet_url: "threema://compose?text="+postTitle+" "+postUrl
	  },
	  Telegram: {
		title: "Telegram",
		locale: "en-US",
		redirect_url: "https://telegram.me/share/url?url="+postUrl+"&text="+postTitle
	  },
	  email: {
		title: "Email",
		locale: "en-US",
		redirect_url: "mailto:?subject=" + postTitle + "&body=Link: " + postUrl,
	  },
	  reddit: {
		title: "Reddit",
		locale: "en-US",
		redirect_url: "http://reddit.com/submit?url=" + postUrl + "&title=" + postTitle,
	  },
	  float_it: {
		title: "Float it",
		locale: "en-US",
		redirect_url: "http://www.designfloat.com/submit.php?url=" + postUrl + "&title=" + postTitle,
	  },
	  google_mail: {
		title: "Google Gmail",
		locale: "en-US",
		redirect_url: "https://mail.google.com/mail/?ui=2&view=cm&fs=1&tf=1&su=" + postTitle + "&body=Link: " + postUrl,
	  },
	  gentlereader: {
        title: "GentleReader",
        locale: "en-US",
        redirect_url: "https://app.gentlereader.com/bookmark?url=" + postUrl,
      },
	  google_bookmarks: {
		title: "Google Bookmarks",
		locale: "en-US",
		redirect_url: "http://www.google.com/bookmarks/mark?op=edit&bkmk=" + postUrl + "&title=" + postTitle,
	  },
	  digg: {
		title: "Digg",
		locale: "en-US",
		redirect_url: "http://digg.com/submit?phase=2&url=" + postUrl + "&title=" + postTitle,
	  },
	  printfriendly: {
		title: "PrintFriendly",
		locale: "en-US",
		redirect_url: "http://www.printfriendly.com/print?url=" + postUrl,
	  },
	  print: {
		title: "Print",
		locale: "en-US",
		redirect_url: "http://www.printfriendly.com/print?url=" + postUrl,
		bookmarklet_url: "javascript:window.print()"
	  },
	  tumblr: {
		title: "Tumblr",
		locale: "en-US",
		redirect_url: "https://www.tumblr.com/widgets/share/tool?posttype=link&canonicalUrl=" + postUrl + "&title=" + postTitle + "&caption=",
		bookmarklet_url: "javascript:var d=document,w=window,e=w.getSelection,k=d.getSelection,x=d.selection,s=(e?e():(k)?k():(x?x.createRange().text:0)),f='http://www.tumblr.com/share',l=d.location,e=encodeURIComponent,p='?v=3&u='+e(l.href) +'&t='+e(d.title) +'&s='+e(s),u=f+p;try{if(!/^(.*\\.)?tumblr[^.]*$/.test(l.host))throw(0);tstbklt();}catch(z){a =function(){if(!w.open(u,'t','toolbar=0,resizable=0,status=1,width=450,height=430'))l.href=u;};if(/Firefox/.test(navigator.userAgent))setTimeout(a,0);else a();}void(0);"
	  },
	  vk: {
		title: "Vkontakte",
		locale: "ru",
		redirect_url: "https://vk.com/share.php?url=" + postUrl + "&title=" + postTitle,
	  },
	  evernote: {
		title: "Evernote",
		locale: "en-US",
		redirect_url: "https://www.evernote.com/clip.action?url=" + postUrl + "&title=" + postTitle,
		bookmarklet_url: "javascript:(function(){EN_CLIP_HOST='http://www.evernote.com';try{var x=document.createElement('SCRIPT');x.type='text/javascript';x.src=EN_CLIP_HOST+'/public/bookmarkClipper.js?'+(new Date().getTime()/100000);document.getElementsByTagName('head')[0].appendChild(x);}catch(e){location.href=EN_CLIP_HOST+'/clip.action?url='+encodeURIComponent(location.href)+'&title='+encodeURIComponent(document.title);}})();"
	  },
	  amazon_us_wish_list: {
		title: "Amazon Wish List",
		locale: "en-US",
		redirect_url: "http://www.amazon.com/wishlist/add?u=" + postUrl + "&t=" + postTitle,
		bookmarklet_url: "javascript:(function(){var w=window,l=w.location,d=w.document,s=d.createElement('script'),e=encodeURIComponent,x='undefined',u='http://www.amazon.com/gp/wishlist/add';if(typeof s!='object')l.href=u+'?u='+e(l)+'&t='+e(d.title);function g(){if(d.readyState&&d.readyState!='complete'){setTimeout(g,200);}else{if(typeof AUWLBook==x)s.setAttribute('src',u+'.js?loc='+e(l)),d.body.appendChild(s);function f(){(typeof AUWLBook==x)?setTimeout(f,200):AUWLBook.showPopover();}f();}}g();}())"
	  },
	  wordpress_blog: {
		title: "WordPress",
		locale: "en-US",
		redirect_url: "http://www.addtoany.com/ext/wordpress/press_this?linkurl=" + postUrl + "&linkname=" + postTitle,
	  },
	  whatsapp: {
		title: "Whatsapp",
		locale: "en-US",
		bookmarklet_url: "https://" + heateorSssDetermineWhatsappShareAPI(true) + "/send?text=" + postTitle + " " + postUrl,
	  },
	  diigo: {
		title: "Diigo",
		locale: "en-US",
		redirect_url: "http://www.diigo.com/post?url=" + postUrl + "&title=" + postTitle,
	  },
	  yc_hacker_news: {
		title: "Hacker News",
		locale: "en-US",
		redirect_url: "http://news.ycombinator.com/submitlink?u=" + postUrl + "&t=" + postTitle,
	  },
	  box_net: {
		title: "Box.net",
		locale: "en-US",
		redirect_url: "https://www.box.net/api/1.0/import?url=" + postUrl + "&name=" + postTitle + "&import_as=link",
	  },
	  aol_mail: {
		title: "AOL Mail",
		locale: "en-US",
		redirect_url: "http://webmail.aol.com/25045/aol/en-us/Mail/compose-message.aspx?subject=" + postTitle + "&body=" + postUrl,
	  },
	  yahoo_mail: {
		title: "Yahoo Mail",
		locale: "en-US",
		redirect_url: "http://compose.mail.yahoo.com/?Subject=" + postTitle + "&body=Link: " + postUrl,
	  },
	  instapaper: {
		title: "Instapaper",
		locale: "en-US",
		redirect_url: "http://www.instapaper.com/edit?url=" + postUrl + "&title=" + postTitle,
	  },
	  plurk: {
		title: "Plurk",
		locale: "en-US",
		redirect_url: "http://www.plurk.com/m?content=" + postUrl + "&qualifier=shares",
	  },
	  aim: {
		title: "AIM",
		locale: "en-US",
		redirect_url: "http://share.aim.com/share/?url=" + postUrl + "&title=" + postTitle,
	  },
	  viadeo: {
		title: "Viadeo",
		locale: "en-US",
		redirect_url: "http://www.viadeo.com/shareit/share/?url=" + postUrl + "&title=" + postTitle,
	  },
	  pinboard_in: {
		title: "Pinboard",
		locale: "en-US",
		redirect_url: "http://pinboard.in/add?url=" + postUrl + "&title=" + postTitle,
	  },
	  blogger_post: {
		title: "Blogger Post",
		locale: "en-US",
		redirect_url: "http://www.blogger.com/blog_this.pyra?t=&u=" + postUrl + "&l&n=" + postTitle,
	  },
	  typepad_post: {
		title: "TypePad Post",
		locale: "en-US",
		redirect_url: "http://www.typepad.com/services/quickpost/post?v=2&qp_show=ac&qp_title=" + postTitle + "&qp_href=" + postUrl + "&qp_text=" + postTitle,
	  },
	  buffer: {
		title: "Buffer",
		locale: "en-US",
		redirect_url: "http://bufferapp.com/add?url=" + postUrl + "&text=" + postTitle,
	  },
	  flipboard: {
		title: "Flipboard",
		locale: "en-US",
		redirect_url: "https://share.flipboard.com/bookmarklet/popout?v=2&url=" + postUrl + "&title=" + postTitle,
	  },
	  pocket: {
		title: "Pocket",
		locale: "en-US",
		redirect_url: "https://readitlaterlist.com/save?url=" + postUrl + "&title=" + postTitle,
	  },
	  fark: {
		title: "Fark",
		locale: "en-US",
		redirect_url: "http://cgi.fark.com/cgi/fark/submit.pl?new_url=" + postUrl,
	  },
	  fintel: {
		title: "Fintel",
		locale: "en-US",
		redirect_url: "https://fintel.io/submit?url=" + postUrl,
	  },
	  yummly: {
		title: "Yummly",
		locale: "en-US",
		redirect_url: "http://www.yummly.com/urb/verify?url=" + postUrl + "&title=" + postTitle,
	  },
	  app_net: {
		title: "App.net",
		locale: "en-US",
		redirect_url: "https://account.app.net/login/",
	  },
	  balatarin: {
		title: "Balatarin",
		locale: "en-US",
		redirect_url: "https://www.balatarin.com/login",
	  },
	  bibSonomy: {
		title: "BibSonomy",
		locale: "en-US",
		redirect_url: "http://www.bibsonomy.org/login",
	  },
	  Bitty_Browser: {
		title: "Bitty Browser",
		locale: "en-US",
		redirect_url: "http://www.bitty.com/manual/?contenttype=&contentvalue=" + postUrl,
	  },
	  Blinklist: {
		title: "Blinklist",
		locale: "en-US",
		redirect_url: "http://blinklist.com/blink?t=" + postTitle + "&d=&u=" + postUrl,
	  },
	  BlogMarks: {
		title: "BlogMarks",
		locale: "en-US",
		redirect_url: "http://blogmarks.net/my/new.php?mini=1&simple=1&title=" + postTitle + "&url=" + postUrl,
	  },
	  Bookmarks_fr: {
		title: "Bookmarks.fr",
		locale: "en-US",
		redirect_url: "http://www.bookmarks.fr/Connexion/?action=add&address=" + postUrl + "&title=" + postTitle,
	  },
	  BuddyMarks: {
		title: "BuddyMarks",
		locale: "en-US",
		redirect_url: "http://buddymarks.com/login.php?bookmark_title=" + postTitle + "&bookmark_url=" + postUrl + "&bookmark_desc=&bookmark_tags=",
	  },
	  Care2_news: {
		title: "Care2 News",
		locale: "en-US",
		redirect_url: "http://www.care2.com/passport/login.html?promoID=10&pg=http://www.care2.com/news/compose?sharehint=news&share[share_type]news&bookmarklet=Y&share[title]=" + postTitle + "&share[link_url]=" + postUrl + "&share[content]=",
	  },
	  Diary_Ru: {
		title: "Diary.Ru",
		locale: "en-US",
		redirect_url: "http://www.diary.ru/?newpost&title=" + postTitle + "&text=" + postUrl,
	  },
	  Folkd: {
		title: "Folkd",
		locale: "en-US",
		redirect_url: "http://www.folkd.com/page/social-bookmarking.html?addurl=" + postUrl,
	  },
	  Hatena: {
		title: "Hatena",
		locale: "en-US",
		redirect_url: "http://b.hatena.ne.jp/bookmarklet?url=" + postUrl + "&btitle=" + postTitle,
	  },
	  Jamespot: {
		title: "Jamespot",
		locale: "en-US",
		redirect_url: "//my.jamespot.com/",
	  },
	  Kakao: {
		title: "Kakao",
		locale: "en-US",
		redirect_url: "https://story.kakao.com/share?url=" + postUrl,
	  },
	  Kindle_It: {
		title: "Kindle_It",
		locale: "en-US",
		redirect_url: "//fivefilters.org/kindle-it/send.php?url=" + postUrl,
	  },
	  Known: {
		title: "Known",
		locale: "en-US",
		redirect_url: "https://withknown.com/share/?url=" + postUrl + "&title=" + postTitle,
	  },
	  Line: {
		title: "Line",
		locale: "en-US",
		redirect_url: "https://social-plugins.line.me/lineit/share?url=" + postUrl,
	  },
	  LiveJournal: {
		title: "LiveJournal",
		locale: "en-US",
		redirect_url: "http://www.livejournal.com/update.bml?subject=" + postTitle + "&event=" + postUrl,
	  },
	  Mail_Ru: {
		title: "Mail.Ru",
		locale: "en-US",
		redirect_url: "https://connect.mail.ru/share?share_url=" + postUrl,
	  },
	  Mendeley: {
		title: "Mendeley",
		locale: "en-US",
		redirect_url: "https://www.mendeley.com/sign-in/",
	  },
	  Meneame: {
		title: "Meneame",
		locale: "en-US",
		redirect_url: "https://www.meneame.net/submit.php?url=" + postUrl,
	  },
	  MeWe: {
		title: "MeWe",
		locale: "en-US",
		redirect_url: "https://mewe.com/share?link=" + postUrl,
	  },
	  Mix: {
		title: "Mix",
		locale: "en-US",
		redirect_url: "https://mix.com/mixit?url=" + postUrl,
	  },
	  Mixi: {
		title: "Mixi",
		locale: "en-US",
		redirect_url: "https://mixi.jp/share.pl?mode=login&u=" + postUrl,
	  },
	  MySpace: {
		title: "MySpace",
		locale: "en-US",
		redirect_url: "https://myspace.com/post?u=" + encodeURIComponent(postUrl) + "&t=" + postTitle + "&l=3&c=" + postTitle,
	  },
	  Netvouz: {
		title: "Netvouz",
		locale: "en-US",
		redirect_url: "http://www.netvouz.com/action/submitBookmark?url=" + postUrl + "&title=" + postTitle + "&popup=no&description=",
	  },
	  Odnoklassniki: {
		title: "Odnoklassniki",
		locale: "en-US",
		redirect_url: "https://connect.ok.ru/dk?cmd=WidgetSharePreview&st.cmd=WidgetSharePreview&st.shareUrl=" + postUrl + "&st.client_id=-1",
	  },
	  Outlook_com: {
		title: "Outlook.com",
		locale: "en-US",
		redirect_url: "https://mail.live.com/default.aspx?rru=compose?subject=" + postTitle + "&body=" + postUrl + "&lc=1033&id=64855&mkt=en-us&cbcxt=mai",
	  },
	  Protopage_Bookmarks: {
		title: "Protopage_Bookmarks",
		locale: "en-US",
		redirect_url: "http://www.protopage.com/add-button-site?url=" + postUrl + "&label=&type=page",
	  },
	  Pusha: {
		title: "Pusha",
		locale: "en-US",
		redirect_url: "//www.pusha.se/posta?url=" + postUrl,
	  },
	  Qzone: {
		title: "Qzone",
		locale: "en-US",
		redirect_url: "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=" + postUrl,
	  },
	  Rediff_MyPage: {
		title: "Rediff MyPage",
		locale: "en-US",
		redirect_url: "//share.rediff.com/bookmark/addbookmark?bookmarkurl=" + postUrl + "&title=" + postTitle,
	  },
	  Renren: {
		title: "Renren",
		locale: "en-US",
		redirect_url: "//www.connect.renren.com/share/sharer?url=" + postUrl + "&title=" + postTitle,
	  },
	  Sina_Weibo: {
		title: "Sina Weibo",
		locale: "en-US",
		redirect_url: "http://service.weibo.com/share/share.php?url=" + postUrl + "&title=" + postTitle,
	  },
	  SiteJot: {
		title: "SiteJot",
		locale: "en-US",
		redirect_url: "http://www.sitejot.com/loginform.php?iSiteAdd=&iSiteDes=",
	  },
	  Slashdot: {
		title: "Slashdot",
		locale: "en-US",
		redirect_url: "//slashdot.org/submission?url=" + postUrl,
	  },
	  StockTwits: {
		title: "StockTwits",
		locale: "en-US",
		redirect_url: "https://stocktwits.com/widgets/share?body=" + postTitle + " " + postUrl,
	  },
	  Svejo: {
		title: "Svejo",
		locale: "en-US",
		redirect_url: "https://svejo.net/story/submit_by_url?url=" + postUrl + "&title=" + postTitle + "&summary=",
	  },
	  Symbaloo_Feeds: {
		title: "Symbaloo_Feeds",
		locale: "en-US",
		redirect_url: "//www.symbaloo.com/",
	  },
	  Tuenti: {
		title: "Tuenti",
		locale: "en-US",
		redirect_url: "https://www.tuenti.com/share?p=b5dd6602&url=" + postUrl,
	  },
	  Twiddla: {
		title: "Twiddla",
		locale: "en-US",
		redirect_url: "//www.twiddla.com/New.aspx?url=" + postUrl + "&title=" + postTitle,
	  },
	  Webnews: {
		title: "Webnews",
		locale: "en-US",
		redirect_url: "//www.webnews.de/login",
	  },
	  Wykop: {
		title: "Wykop",
		locale: "en-US",
		redirect_url: "//www.wykop.pl/dodaj?url=" + postUrl + "&title=" + postTitle,
	  },
	  Xing: {
		title: "Xing",
		locale: "en-US",
		redirect_url: "https://www.xing.com/spi/shares/new?cb=0&url=" + postUrl,
	  },
	  Yoolink: {
		title: "Yoolink",
		locale: "en-US",
		redirect_url: "//yoolink.to/addorshare?url_value=" + postUrl + "&title=" + postTitle,
	  }
	};
	var heateorSssMoreSharingServicesHtml = '<button id="heateor_sss_sharing_popup_close" class="close-button separated"><img src="'+ heateorSssCloseIconPath +'" /></button><div id="heateor_sss_sharing_more_content" data-href="'+ decodeURIComponent(postUrl) +'"><div class="filter"><input type="text" onkeyup="heateorSssFilterSharing(this.value.trim())" placeholder="Search" class="search"></div><div class="all-services"><ul class="mini">';
	for(var i in heateorSssMoreSharingServices){
		var tempTitle = heateorSssCapitaliseFirstLetter(heateorSssMoreSharingServices[i].title.replace(/[_. ]/g, ""));
		heateorSssMoreSharingServicesHtml += '<li><a rel="nofollow" class="heateorSss'+i+'Share" title="'+ heateorSssMoreSharingServices[i].title +'" alt="'+ heateorSssMoreSharingServices[i].title +'" ';
		if(heateorSssMoreSharingServices[i].bookmarklet_url){
			heateorSssMoreSharingServicesHtml += 'href="' + heateorSssMoreSharingServices[i].bookmarklet_url + '" ';
		}else if(heateorSssMoreSharingServices[i].redirect_url){
			heateorSssMoreSharingServicesHtml += 'onclick="heateorSssPopup(\'' + heateorSssMoreSharingServices[i].redirect_url + '\')" href="javascript:void(0)" ';
		}else{
			heateorSssMoreSharingServicesHtml += 'href="javascript:void(0)" ';
		}
		heateorSssMoreSharingServicesHtml += '"><i style="width:22px;height:22px" title="'+ heateorSssMoreSharingServices[i].title +'" class="heateorSssSharing heateorSss' + tempTitle + 'Background"><ss style="display:block;width:100%;height:100%;" class="heateorSssSharingSvg heateorSss' + tempTitle + 'Svg"></ss></i>' + heateorSssMoreSharingServices[i].title + '</a></li>';
	}
	heateorSssMoreSharingServicesHtml += concate;
	
	var mainDiv = document.createElement('div');
	mainDiv.innerHTML = heateorSssMoreSharingServicesHtml;
	mainDiv.setAttribute('id', 'heateor_sss_sharing_more_providers');
	var bgDiv = document.createElement('div');
	bgDiv.setAttribute('id', 'heateor_sss_popup_bg');
	jQuery('body').append(mainDiv).append(bgDiv);
	document.getElementById('heateor_sss_popup_bg').onclick = document.getElementById('heateor_sss_sharing_popup_close').onclick = function(){
		mainDiv.parentNode.removeChild(mainDiv);
		bgDiv.parentNode.removeChild(bgDiv);
	}
}

if(heateorSssHorizontalSharingCountEnable || heateorSssVerticalSharingCountEnable){
	// get sharing counts on window load
	heateorSssLoadEvent(
		function(){
			// sharing counts
			heateorSssCallAjax(function(){
				heateorSssGetSharingCounts();
			});
		}
	);
}
	
/**
 * Search sharing services
 */
function heateorSssFilterSharing(val) {
	jQuery('ul.mini li a').each(function(){
		if (jQuery(this).text().toLowerCase().indexOf(val.toLowerCase()) != -1) {
			jQuery(this).parent().css('display', 'block');
		} else {
			jQuery(this).parent().css('display', 'none');
		}
	});
};

var heateorSssFacebookTargetUrls = [];

/**
 * Get sharing counts
 */
function heateorSssGetSharingCounts(){
	var targetUrls = [];
	jQuery('.heateor_sss_sharing_container').each(function(){
		if(typeof jQuery(this).attr('heateor-sss-no-counts') == 'undefined'){
			var currentTargetUrl = jQuery(this).attr('heateor-sss-data-href');
			if(currentTargetUrl != null && jQuery.inArray(currentTargetUrl, heateorSssUrlCountFetched) == -1){
				targetUrls.push(currentTargetUrl);
				heateorSssUrlCountFetched.push(currentTargetUrl);
			}
		}
	});
	
	if(targetUrls.length == 0){
		return;
	}
	jQuery.ajax({
		type: 'GET',
		dataType: 'json',
		url: heateorSssSharingAjaxUrl,
		data: {
			action: 'heateor_sss_sharing_count',
			urls: targetUrls,
		},
		success: function(data, textStatus, XMLHttpRequest){
			if(data.status == 1){
				if(data.facebook){
					heateorSssFacebookTargetUrls = data.facebook_urls;
				}
				for(var i in data.message){
					var sharingContainers = jQuery("div[heateor-sss-data-href='"+i+"']");

					jQuery(sharingContainers).each(function(){
						var totalCount = 0;
						for(var j in data.message[i]){
							var sharingCount = parseInt(data.message[i][j]) || 0;

							var targetElement = jQuery(this).find('.heateor_sss_'+j+'_count');
							
							if(jQuery(targetElement).attr('sss_st_count')){
								sharingCount = parseInt(sharingCount) + parseInt(jQuery(targetElement).attr('sss_st_count'));
							}
							totalCount += parseInt(sharingCount);
							if(sharingCount < 1){ continue; }
							jQuery(targetElement).html(heateorSssCalculateApproxCount(sharingCount)).css({'visibility': 'visible', 'display': 'block'});
							if ( ( typeof heateorSssReduceHorizontalSvgWidth != 'undefined' && jQuery(this).hasClass('heateor_sss_horizontal_sharing') ) || ( typeof heateorSssReduceVerticalSvgWidth != 'undefined' && jQuery(this).hasClass('heateor_sss_vertical_sharing') ) ) {
								jQuery(targetElement).parents('li').find('.heateorSssSharingSvg').css('float', 'left');
							}
							if ( ( typeof heateorSssReduceHorizontalSvgHeight != 'undefined' && jQuery(this).hasClass('heateor_sss_horizontal_sharing') ) || ( typeof heateorSssReduceVerticalSvgHeight != 'undefined' && jQuery(this).hasClass('heateor_sss_vertical_sharing') ) ) {
								jQuery(targetElement).parents('li').find('.heateorSssSharingSvg').css('marginTop', '0');
							}
						}
						var totalCountContainer = jQuery(this).find('.heateorSssTCBackground'), totalShares = heateorSssCalculateApproxCount(totalCount);
						jQuery(totalCountContainer).each(function(){
							var containerHeight = jQuery(this).css('height');
							jQuery(this).html('<div class="heateorSssTotalShareCount" style="font-size: '+ (parseInt(containerHeight) * 62/100) +'px">' + totalShares + '</div><div class="heateorSssTotalShareText" style="font-size: '+ (parseInt(containerHeight) * 38/100) +'px">' + (totalCount == 0 || totalCount > 1 ? heateorSssSharesText : heateorSssShareText) + '</div>').css('visibility', 'visible');
						});
					});
				}
				if(heateorSssFacebookTargetUrls.length != 0){
					heateorSssFetchFacebookShares(heateorSssFacebookTargetUrls);
				}
			}
		}
	});
}

function heateorSssFetchFacebookShares(targetUrls){
	var loopCounter = 0;
	for(var i in targetUrls){
		for(var j in targetUrls[i]){
			loopCounter++;
			heateorSssFBShareJSONCall(targetUrls[i][j], loopCounter, targetUrls[0].length*targetUrls.length, targetUrls[0][j]);
		}
	}
}

function heateorSssFBShareJSONCall(targetUrl, loopCounter, targetUrlsLength, dataHref) {
	jQuery.getJSON('//graph.facebook.com/?id=' + targetUrl, function(data){
	    if(data.share && data.share.share_count >= 0){
	    	var sharingContainers = jQuery("div[heateor-sss-data-href='"+dataHref+"']");

			jQuery(sharingContainers).each(function(){
				var targetElement = jQuery(this).find('.heateor_sss_facebook_count');
				var facebookBackground = jQuery(this).find('i.heateorSssFacebookBackground');
				var sharingCount = parseInt(data.share.share_count);

				if(jQuery(targetElement).attr('sss_st_count') !== undefined){
					sharingCount += parseInt(jQuery(targetElement).attr('sss_st_count'));
				}
				if(sharingCount > 0){
					if(typeof jQuery(facebookBackground).attr('heateor-sss-fb-shares') == 'undefined'){
						jQuery(targetElement).html(heateorSssCalculateApproxCount(sharingCount)).css({'visibility': 'visible', 'display': 'block'});
						jQuery(facebookBackground).attr('heateor-sss-fb-shares', sharingCount);
					}else if(typeof jQuery(facebookBackground).attr('heateor-sss-fb-shares') != 'undefined'){
						var tempShareCount = parseInt(jQuery(facebookBackground).attr('heateor-sss-fb-shares'));
						jQuery(facebookBackground).attr('heateor-sss-fb-shares', sharingCount + tempShareCount);
						jQuery(targetElement).html(heateorSssCalculateApproxCount(sharingCount + tempShareCount));
					}

					if ( ( typeof heateorSssReduceHorizontalSvgWidth != 'undefined' && jQuery(this).hasClass('heateor_sss_horizontal_sharing') ) || ( typeof heateorSssReduceVerticalSvgWidth != 'undefined' && jQuery(this).hasClass('heateor_sss_vertical_sharing') ) ) {
						jQuery(targetElement).parents('li').find('.heateorSssSharingSvg').css('float', 'left');
					}
					if ( ( typeof heateorSssReduceHorizontalSvgHeight != 'undefined' && jQuery(this).hasClass('heateor_sss_horizontal_sharing') ) || ( typeof heateorSssReduceVerticalSvgHeight != 'undefined' && jQuery(this).hasClass('heateor_sss_vertical_sharing') ) ) {
						jQuery(targetElement).parents('li').find('.heateorSssSharingSvg').css('marginTop', '0');
					}
					
					var totalCountContainer = jQuery(this).find('.heateorSssTCBackground');
					jQuery(totalCountContainer).each(function(){
						var totalShareCountElem = jQuery(this).find('.heateorSssTotalShareCount');
						var totalShareCount = jQuery(totalShareCountElem).text();
						var newTotalCount = heateorSssCalculateActualCount(totalShareCount) + sharingCount;
						jQuery(totalShareCountElem).text(heateorSssCalculateApproxCount(newTotalCount));
						jQuery(this).find('.heateorSssTotalShareText').text(newTotalCount == 0 || newTotalCount > 1 ? heateorSssSharesText : heateorSssShareText);
					});
				}
			});
		}
		
		if(loopCounter == targetUrlsLength){
			setTimeout(function(){
				var facebookShares = {};
				for(var i in heateorSssFacebookTargetUrls[0]){
					var sharingContainers = jQuery("div[heateor-sss-data-href='"+heateorSssFacebookTargetUrls[0][i]+"']");
					jQuery(sharingContainers).each(function(){
						var facebookCountElement = jQuery(this).find('.heateor_sss_facebook_count');
						var facebookCountElementBg = jQuery(this).find('i.heateorSssFacebookBackground');
						var shareCountString = typeof jQuery(facebookCountElementBg).attr('heateor-sss-fb-shares') != 'undefined' ? jQuery(facebookCountElementBg).attr('heateor-sss-fb-shares').trim() : '';
						if(shareCountString != ''){
							var shareCount = parseInt(heateorSssCalculateActualCount(shareCountString));
							if(jQuery(facebookCountElement).attr('sss_st_count') !== undefined){
								var startingCount = parseInt(jQuery(facebookCountElement).attr('sss_st_count').trim());
								shareCount = Math.abs(shareCount - startingCount);
							}
							facebookShares[heateorSssFacebookTargetUrls[0][i]] = shareCount;
							return;
						}
					});
				}
				if(!jQuery.isEmptyObject(facebookShares)){
					heateorSssSaveFacebookShares(facebookShares);
				}
			}, 1000);
		}
	});
}

function heateorSssSaveFacebookShares(facebookShares){
	jQuery.ajax({
		type: 'GET',
		dataType: 'json',
		url: heateorSssSharingAjaxUrl,
		data: {
			action: 'heateor_sss_save_facebook_shares',
			share_counts: facebookShares,
		},
		success: function(data, textStatus, XMLHttpRequest){}
	});
}

function heateorSssCalculateApproxCount(sharingCount){
	// round to one decimal
	if(sharingCount > 999 && sharingCount < 10000){
		sharingCount = (Math.round(sharingCount/100))/10 + 'K';
	}else if(sharingCount > 9999 && sharingCount < 100000){
		sharingCount = (Math.round(sharingCount/100))/10 + 'K';
	}else if(sharingCount > 99999 && sharingCount < 1000000){
		sharingCount = (Math.round(sharingCount/100))/10 + 'K';
	}else if(sharingCount > 999999){
		sharingCount = (Math.round(sharingCount/100000))/10 + 'M';
	}
	return sharingCount;
}

function heateorSssCalculateActualCount(sharingCount){
	if(sharingCount.indexOf('K') > 0){
		sharingCount = sharingCount.replace('K', '') * 1000;
	}else if(sharingCount.indexOf('M') > 0){
		sharingCount = sharingCount.replace('M', '') * 1000000;
	}
	return parseInt(sharingCount);
}

function heateorSssCapitaliseFirstLetter(e) {
    return e.charAt(0).toUpperCase() + e.slice(1)
}

jQuery(function(){
	var heateorSssWhatsappJSAPI = heateorSssDetermineWhatsappShareAPI(false);
	var classes = ['heateor_sss_vertical_sharing', 'heateor_sss_vertical_counter'];
	for(var i = 0; i < classes.length; i++){
		if(jQuery('.' + classes[i]).length){
			jQuery('.' + classes[i]).each(function(){
				var verticalSharingHtml = jQuery(this).html();
				if(jQuery(this).attr('style').indexOf('right') >= 0){
					var removeClass = 'heateorSssPushIn', margin = 'Right', alignment = 'right', addClass = 'heateorSssPullOut';
				}else{
					var removeClass = 'heateorSssPullOut', margin = 'Left', alignment = 'left', addClass = 'heateorSssPushIn';
				}
				jQuery(this).html(verticalSharingHtml + '<div title="Hide" style="float:' + alignment + '" onclick="heateorSssHideSharing(this, \''+ removeClass +'\', \''+ addClass +'\',\'' + margin +'\', \'' + alignment + '\')" class="heateorSssSharingArrow ' + removeClass + '"></div>');
			});
		}
	}
	if(heateorSssMobileStickySharingEnabled == 1){
		if(jQuery('div.heateor_sss_vertical_sharing').length){
			// insert div before </body>
			jQuery(document.body).append("<div class='heateor_sss_mobile_footer'></div>");
		}
	}

	var heateorSssClipboard = new ClipboardJS('.heateorSssCopyLinkBackground, .heateorSssCopyLinkShare, .heateorSssCopyLinkSvg', {
		text: function(trigger) {
			if(jQuery(trigger).hasClass('heateorSssCopyLinkShare')){
				var element = trigger.parentElement.parentElement.parentElement.parentElement;
				var url = jQuery(element).attr("data-href") || "";
			}else if(jQuery(trigger).hasClass('heateorSssCopyLinkSvg')){
                var element = trigger.parentElement.parentElement.parentElement.parentElement;
                var url = jQuery(element).attr("heateor-sss-data-href") || "";
                if(!url){
                    var element = trigger.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
                    var url = jQuery(element).attr("data-href") || "";
                }
            }
			return url;
		}
	});
	heateorSssClipboard.on('success', function(e) {
        alert(heateorSssCopyLinkMessage);
    });
});

function heateorSssHideSharing(elem, removeClass, addClass, margin, alignment){
	var animation = {}, counter = jQuery(elem).parent().hasClass('heateor_sss_vertical_counter'), offset = parseInt(jQuery(elem).parent().css('width')) + 10 - (counter ? 16 : 0);
	var ssOffset = jQuery(elem).parent().attr('ss-offset');
	if(ssOffset){
		var savedOffset = parseInt(ssOffset);
	}else{
		var savedOffset = (counter ? heateorSssCounterOffset : heateorSssSharingOffset);
	}
	if(jQuery(elem).attr('title') == 'Hide'){
		animation[alignment] = "-=" + (offset + savedOffset);
		jQuery(elem).parent().animate(animation, 400, function(){
			jQuery(elem).removeClass(removeClass).addClass(addClass).attr('title', 'Share');
			if(counter){
				var cssFloat = alignment == 'left' ? 'right' : 'left';
				jQuery(elem).css('float', cssFloat);
			}else{
				jQuery(elem).css('margin' + margin, offset + 'px')
			}
		});
	}else{
		animation[alignment] = "+=" + (offset + savedOffset); 
		jQuery(elem).parent().animate(animation, 400, function(){
			jQuery(elem).removeClass(addClass).addClass(removeClass).attr('title', 'Hide');
			if(counter){
				jQuery(elem).css('float', alignment);
			}else{
				jQuery(elem).css('margin' + margin, '0px');
			}
		});
	}
}

/*!
 * clipboard.js v2.0.6
 * https://clipboardjs.com/
 * 
 * Licensed MIT © Zeno Rocha
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ClipboardJS=e():t.ClipboardJS=e()}(this,function(){return o={},r.m=n=[function(t,e){t.exports=function(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var o=window.getSelection(),r=document.createRange();r.selectNodeContents(t),o.removeAllRanges(),o.addRange(r),e=o.toString()}return e}},function(t,e){function n(){}n.prototype={on:function(t,e,n){var o=this.e||(this.e={});return(o[t]||(o[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var o=this;function r(){o.off(t,r),e.apply(n,arguments)}return r._=e,this.on(t,r,n)},emit:function(t){for(var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),o=0,r=n.length;o<r;o++)n[o].fn.apply(n[o].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),o=n[t],r=[];if(o&&e)for(var i=0,a=o.length;i<a;i++)o[i].fn!==e&&o[i].fn._!==e&&r.push(o[i]);return r.length?n[t]=r:delete n[t],this}},t.exports=n,t.exports.TinyEmitter=n},function(t,e,n){var d=n(3),h=n(4);t.exports=function(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!d.string(e))throw new TypeError("Second argument must be a String");if(!d.fn(n))throw new TypeError("Third argument must be a Function");if(d.node(t))return s=e,f=n,(u=t).addEventListener(s,f),{destroy:function(){u.removeEventListener(s,f)}};if(d.nodeList(t))return a=t,c=e,l=n,Array.prototype.forEach.call(a,function(t){t.addEventListener(c,l)}),{destroy:function(){Array.prototype.forEach.call(a,function(t){t.removeEventListener(c,l)})}};if(d.string(t))return o=t,r=e,i=n,h(document.body,o,r,i);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");var o,r,i,a,c,l,u,s,f}},function(t,n){n.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},n.nodeList=function(t){var e=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===e||"[object HTMLCollection]"===e)&&"length"in t&&(0===t.length||n.node(t[0]))},n.string=function(t){return"string"==typeof t||t instanceof String},n.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},function(t,e,n){var a=n(5);function i(t,e,n,o,r){var i=function(e,n,t,o){return function(t){t.delegateTarget=a(t.target,n),t.delegateTarget&&o.call(e,t)}}.apply(this,arguments);return t.addEventListener(n,i,r),{destroy:function(){t.removeEventListener(n,i,r)}}}t.exports=function(t,e,n,o,r){return"function"==typeof t.addEventListener?i.apply(null,arguments):"function"==typeof n?i.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,function(t){return i(t,e,n,o,r)}))}},function(t,e){if("undefined"!=typeof Element&&!Element.prototype.matches){var n=Element.prototype;n.matches=n.matchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector}t.exports=function(t,e){for(;t&&9!==t.nodeType;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}},function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function a(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function c(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),this.resolveOptions(t),this.initSelection()}var l=(function(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),t}(c,[{key:"resolveOptions",value:function(t){var e=0<arguments.length&&void 0!==t?t:{};this.action=e.action,this.container=e.container,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var t=this,e="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=r()(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=r()(this.target),this.copyText()}},{key:"copyText",value:function(){var e=void 0;try{e=document.execCommand(this.action)}catch(t){e=!1}this.handleResult(e)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(t){var e=0<arguments.length&&void 0!==t?t:"copy";if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==(void 0===t?"undefined":i(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}]),c),u=n(1),s=n.n(u),f=n(2),d=n.n(f),h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p=function(t,e,n){return e&&y(t.prototype,e),n&&y(t,n),t};function y(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var m=(function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(v,s.a),p(v,[{key:"resolveOptions",value:function(t){var e=0<arguments.length&&void 0!==t?t:{};this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText,this.container="object"===h(e.container)?e.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=d()(t,"click",function(t){return e.onClick(t)})}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new l({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return b("action",t)}},{key:"defaultTarget",value:function(t){var e=b("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return b("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(t){var e=0<arguments.length&&void 0!==t?t:["copy","cut"],n="string"==typeof e?[e]:e,o=!!document.queryCommandSupported;return n.forEach(function(t){o=o&&!!document.queryCommandSupported(t)}),o}}]),v);function v(t,e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,v);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(v.__proto__||Object.getPrototypeOf(v)).call(this));return n.resolveOptions(e),n.listenClick(t),n}function b(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}e.default=m}],r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=6).default;function r(t){if(o[t])return o[t].exports;var e=o[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,r),e.l=!0,e.exports}var n,o});;
/*! This file is auto-generated */
!function(d,l){"use strict";var e=!1,o=!1;if(l.querySelector)if(d.addEventListener)e=!0;if(d.wp=d.wp||{},!d.wp.receiveEmbedMessage)if(d.wp.receiveEmbedMessage=function(e){var t=e.data;if(t)if(t.secret||t.message||t.value)if(!/[^a-zA-Z0-9]/.test(t.secret)){var r,a,i,s,n,o=l.querySelectorAll('iframe[data-secret="'+t.secret+'"]'),c=l.querySelectorAll('blockquote[data-secret="'+t.secret+'"]');for(r=0;r<c.length;r++)c[r].style.display="none";for(r=0;r<o.length;r++)if(a=o[r],e.source===a.contentWindow){if(a.removeAttribute("style"),"height"===t.message){if(1e3<(i=parseInt(t.value,10)))i=1e3;else if(~~i<200)i=200;a.height=i}if("link"===t.message)if(s=l.createElement("a"),n=l.createElement("a"),s.href=a.getAttribute("src"),n.href=t.value,n.host===s.host)if(l.activeElement===a)d.top.location.href=t.value}}},e)d.addEventListener("message",d.wp.receiveEmbedMessage,!1),l.addEventListener("DOMContentLoaded",t,!1),d.addEventListener("load",t,!1);function t(){if(!o){o=!0;var e,t,r,a,i=-1!==navigator.appVersion.indexOf("MSIE 10"),s=!!navigator.userAgent.match(/Trident.*rv:11\./),n=l.querySelectorAll("iframe.wp-embedded-content");for(t=0;t<n.length;t++){if(!(r=n[t]).getAttribute("data-secret"))a=Math.random().toString(36).substr(2,10),r.src+="#?secret="+a,r.setAttribute("data-secret",a);if(i||s)(e=r.cloneNode(!0)).removeAttribute("security"),r.parentNode.replaceChild(e,r)}}}}(window,document);