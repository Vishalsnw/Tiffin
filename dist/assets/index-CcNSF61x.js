(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function j_(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Td={exports:{}},za={},Id={exports:{}},Ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lg;function oT(){if(Lg)return Ae;Lg=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),T=Symbol.iterator;function I(V){return V===null||typeof V!="object"?null:(V=T&&V[T]||V["@@iterator"],typeof V=="function"?V:null)}var F={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$=Object.assign,H={};function U(V,G,Ie){this.props=V,this.context=G,this.refs=H,this.updater=Ie||F}U.prototype.isReactComponent={},U.prototype.setState=function(V,G){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,G,"setState")},U.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function de(){}de.prototype=U.prototype;function ae(V,G,Ie){this.props=V,this.context=G,this.refs=H,this.updater=Ie||F}var he=ae.prototype=new de;he.constructor=ae,$(he,U.prototype),he.isPureReactComponent=!0;var _e=Array.isArray,be=Object.prototype.hasOwnProperty,Re={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function A(V,G,Ie){var Se,Ce={},Pe=null,Ue=null;if(G!=null)for(Se in G.ref!==void 0&&(Ue=G.ref),G.key!==void 0&&(Pe=""+G.key),G)be.call(G,Se)&&!k.hasOwnProperty(Se)&&(Ce[Se]=G[Se]);var Oe=arguments.length-2;if(Oe===1)Ce.children=Ie;else if(1<Oe){for(var Be=Array(Oe),$t=0;$t<Oe;$t++)Be[$t]=arguments[$t+2];Ce.children=Be}if(V&&V.defaultProps)for(Se in Oe=V.defaultProps,Oe)Ce[Se]===void 0&&(Ce[Se]=Oe[Se]);return{$$typeof:n,type:V,key:Pe,ref:Ue,props:Ce,_owner:Re.current}}function C(V,G){return{$$typeof:n,type:V.type,key:G,ref:V.ref,props:V.props,_owner:V._owner}}function D(V){return typeof V=="object"&&V!==null&&V.$$typeof===n}function x(V){var G={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(Ie){return G[Ie]})}var b=/\/+/g;function R(V,G){return typeof V=="object"&&V!==null&&V.key!=null?x(""+V.key):G.toString(36)}function qe(V,G,Ie,Se,Ce){var Pe=typeof V;(Pe==="undefined"||Pe==="boolean")&&(V=null);var Ue=!1;if(V===null)Ue=!0;else switch(Pe){case"string":case"number":Ue=!0;break;case"object":switch(V.$$typeof){case n:case e:Ue=!0}}if(Ue)return Ue=V,Ce=Ce(Ue),V=Se===""?"."+R(Ue,0):Se,_e(Ce)?(Ie="",V!=null&&(Ie=V.replace(b,"$&/")+"/"),qe(Ce,G,Ie,"",function($t){return $t})):Ce!=null&&(D(Ce)&&(Ce=C(Ce,Ie+(!Ce.key||Ue&&Ue.key===Ce.key?"":(""+Ce.key).replace(b,"$&/")+"/")+V)),G.push(Ce)),1;if(Ue=0,Se=Se===""?".":Se+":",_e(V))for(var Oe=0;Oe<V.length;Oe++){Pe=V[Oe];var Be=Se+R(Pe,Oe);Ue+=qe(Pe,G,Ie,Be,Ce)}else if(Be=I(V),typeof Be=="function")for(V=Be.call(V),Oe=0;!(Pe=V.next()).done;)Pe=Pe.value,Be=Se+R(Pe,Oe++),Ue+=qe(Pe,G,Ie,Be,Ce);else if(Pe==="object")throw G=String(V),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.");return Ue}function Et(V,G,Ie){if(V==null)return V;var Se=[],Ce=0;return qe(V,Se,"","",function(Pe){return G.call(Ie,Pe,Ce++)}),Se}function Vt(V){if(V._status===-1){var G=V._result;G=G(),G.then(function(Ie){(V._status===0||V._status===-1)&&(V._status=1,V._result=Ie)},function(Ie){(V._status===0||V._status===-1)&&(V._status=2,V._result=Ie)}),V._status===-1&&(V._status=0,V._result=G)}if(V._status===1)return V._result.default;throw V._result}var Je={current:null},ee={transition:null},pe={ReactCurrentDispatcher:Je,ReactCurrentBatchConfig:ee,ReactCurrentOwner:Re};function ie(){throw Error("act(...) is not supported in production builds of React.")}return Ae.Children={map:Et,forEach:function(V,G,Ie){Et(V,function(){G.apply(this,arguments)},Ie)},count:function(V){var G=0;return Et(V,function(){G++}),G},toArray:function(V){return Et(V,function(G){return G})||[]},only:function(V){if(!D(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},Ae.Component=U,Ae.Fragment=t,Ae.Profiler=o,Ae.PureComponent=ae,Ae.StrictMode=i,Ae.Suspense=g,Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pe,Ae.act=ie,Ae.cloneElement=function(V,G,Ie){if(V==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+V+".");var Se=$({},V.props),Ce=V.key,Pe=V.ref,Ue=V._owner;if(G!=null){if(G.ref!==void 0&&(Pe=G.ref,Ue=Re.current),G.key!==void 0&&(Ce=""+G.key),V.type&&V.type.defaultProps)var Oe=V.type.defaultProps;for(Be in G)be.call(G,Be)&&!k.hasOwnProperty(Be)&&(Se[Be]=G[Be]===void 0&&Oe!==void 0?Oe[Be]:G[Be])}var Be=arguments.length-2;if(Be===1)Se.children=Ie;else if(1<Be){Oe=Array(Be);for(var $t=0;$t<Be;$t++)Oe[$t]=arguments[$t+2];Se.children=Oe}return{$$typeof:n,type:V.type,key:Ce,ref:Pe,props:Se,_owner:Ue}},Ae.createContext=function(V){return V={$$typeof:c,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},V.Provider={$$typeof:l,_context:V},V.Consumer=V},Ae.createElement=A,Ae.createFactory=function(V){var G=A.bind(null,V);return G.type=V,G},Ae.createRef=function(){return{current:null}},Ae.forwardRef=function(V){return{$$typeof:f,render:V}},Ae.isValidElement=D,Ae.lazy=function(V){return{$$typeof:w,_payload:{_status:-1,_result:V},_init:Vt}},Ae.memo=function(V,G){return{$$typeof:y,type:V,compare:G===void 0?null:G}},Ae.startTransition=function(V){var G=ee.transition;ee.transition={};try{V()}finally{ee.transition=G}},Ae.unstable_act=ie,Ae.useCallback=function(V,G){return Je.current.useCallback(V,G)},Ae.useContext=function(V){return Je.current.useContext(V)},Ae.useDebugValue=function(){},Ae.useDeferredValue=function(V){return Je.current.useDeferredValue(V)},Ae.useEffect=function(V,G){return Je.current.useEffect(V,G)},Ae.useId=function(){return Je.current.useId()},Ae.useImperativeHandle=function(V,G,Ie){return Je.current.useImperativeHandle(V,G,Ie)},Ae.useInsertionEffect=function(V,G){return Je.current.useInsertionEffect(V,G)},Ae.useLayoutEffect=function(V,G){return Je.current.useLayoutEffect(V,G)},Ae.useMemo=function(V,G){return Je.current.useMemo(V,G)},Ae.useReducer=function(V,G,Ie){return Je.current.useReducer(V,G,Ie)},Ae.useRef=function(V){return Je.current.useRef(V)},Ae.useState=function(V){return Je.current.useState(V)},Ae.useSyncExternalStore=function(V,G,Ie){return Je.current.useSyncExternalStore(V,G,Ie)},Ae.useTransition=function(){return Je.current.useTransition()},Ae.version="18.3.1",Ae}var Mg;function Rf(){return Mg||(Mg=1,Id.exports=oT()),Id.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fg;function aT(){if(Fg)return za;Fg=1;var n=Rf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(f,g,y){var w,T={},I=null,F=null;y!==void 0&&(I=""+y),g.key!==void 0&&(I=""+g.key),g.ref!==void 0&&(F=g.ref);for(w in g)i.call(g,w)&&!l.hasOwnProperty(w)&&(T[w]=g[w]);if(f&&f.defaultProps)for(w in g=f.defaultProps,g)T[w]===void 0&&(T[w]=g[w]);return{$$typeof:e,type:f,key:I,ref:F,props:T,_owner:o.current}}return za.Fragment=t,za.jsx=c,za.jsxs=c,za}var Ug;function lT(){return Ug||(Ug=1,Td.exports=aT()),Td.exports}var B=lT(),X=Rf();const uT=j_(X);var ju={},Sd={exports:{}},Zt={},Ad={exports:{}},Rd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jg;function cT(){return jg||(jg=1,(function(n){function e(ee,pe){var ie=ee.length;ee.push(pe);e:for(;0<ie;){var V=ie-1>>>1,G=ee[V];if(0<o(G,pe))ee[V]=pe,ee[ie]=G,ie=V;else break e}}function t(ee){return ee.length===0?null:ee[0]}function i(ee){if(ee.length===0)return null;var pe=ee[0],ie=ee.pop();if(ie!==pe){ee[0]=ie;e:for(var V=0,G=ee.length,Ie=G>>>1;V<Ie;){var Se=2*(V+1)-1,Ce=ee[Se],Pe=Se+1,Ue=ee[Pe];if(0>o(Ce,ie))Pe<G&&0>o(Ue,Ce)?(ee[V]=Ue,ee[Pe]=ie,V=Pe):(ee[V]=Ce,ee[Se]=ie,V=Se);else if(Pe<G&&0>o(Ue,ie))ee[V]=Ue,ee[Pe]=ie,V=Pe;else break e}}return pe}function o(ee,pe){var ie=ee.sortIndex-pe.sortIndex;return ie!==0?ie:ee.id-pe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();n.unstable_now=function(){return c.now()-f}}var g=[],y=[],w=1,T=null,I=3,F=!1,$=!1,H=!1,U=typeof setTimeout=="function"?setTimeout:null,de=typeof clearTimeout=="function"?clearTimeout:null,ae=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function he(ee){for(var pe=t(y);pe!==null;){if(pe.callback===null)i(y);else if(pe.startTime<=ee)i(y),pe.sortIndex=pe.expirationTime,e(g,pe);else break;pe=t(y)}}function _e(ee){if(H=!1,he(ee),!$)if(t(g)!==null)$=!0,Vt(be);else{var pe=t(y);pe!==null&&Je(_e,pe.startTime-ee)}}function be(ee,pe){$=!1,H&&(H=!1,de(A),A=-1),F=!0;var ie=I;try{for(he(pe),T=t(g);T!==null&&(!(T.expirationTime>pe)||ee&&!x());){var V=T.callback;if(typeof V=="function"){T.callback=null,I=T.priorityLevel;var G=V(T.expirationTime<=pe);pe=n.unstable_now(),typeof G=="function"?T.callback=G:T===t(g)&&i(g),he(pe)}else i(g);T=t(g)}if(T!==null)var Ie=!0;else{var Se=t(y);Se!==null&&Je(_e,Se.startTime-pe),Ie=!1}return Ie}finally{T=null,I=ie,F=!1}}var Re=!1,k=null,A=-1,C=5,D=-1;function x(){return!(n.unstable_now()-D<C)}function b(){if(k!==null){var ee=n.unstable_now();D=ee;var pe=!0;try{pe=k(!0,ee)}finally{pe?R():(Re=!1,k=null)}}else Re=!1}var R;if(typeof ae=="function")R=function(){ae(b)};else if(typeof MessageChannel<"u"){var qe=new MessageChannel,Et=qe.port2;qe.port1.onmessage=b,R=function(){Et.postMessage(null)}}else R=function(){U(b,0)};function Vt(ee){k=ee,Re||(Re=!0,R())}function Je(ee,pe){A=U(function(){ee(n.unstable_now())},pe)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(ee){ee.callback=null},n.unstable_continueExecution=function(){$||F||($=!0,Vt(be))},n.unstable_forceFrameRate=function(ee){0>ee||125<ee?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<ee?Math.floor(1e3/ee):5},n.unstable_getCurrentPriorityLevel=function(){return I},n.unstable_getFirstCallbackNode=function(){return t(g)},n.unstable_next=function(ee){switch(I){case 1:case 2:case 3:var pe=3;break;default:pe=I}var ie=I;I=pe;try{return ee()}finally{I=ie}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(ee,pe){switch(ee){case 1:case 2:case 3:case 4:case 5:break;default:ee=3}var ie=I;I=ee;try{return pe()}finally{I=ie}},n.unstable_scheduleCallback=function(ee,pe,ie){var V=n.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?V+ie:V):ie=V,ee){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=ie+G,ee={id:w++,callback:pe,priorityLevel:ee,startTime:ie,expirationTime:G,sortIndex:-1},ie>V?(ee.sortIndex=ie,e(y,ee),t(g)===null&&ee===t(y)&&(H?(de(A),A=-1):H=!0,Je(_e,ie-V))):(ee.sortIndex=G,e(g,ee),$||F||($=!0,Vt(be))),ee},n.unstable_shouldYield=x,n.unstable_wrapCallback=function(ee){var pe=I;return function(){var ie=I;I=pe;try{return ee.apply(this,arguments)}finally{I=ie}}}})(Rd)),Rd}var zg;function hT(){return zg||(zg=1,Ad.exports=cT()),Ad.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bg;function dT(){if(Bg)return Zt;Bg=1;var n=Rf(),e=hT();function t(r){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+r,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function l(r,s){c(r,s),c(r+"Capture",s)}function c(r,s){for(o[r]=s,r=0;r<s.length;r++)i.add(s[r])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},T={};function I(r){return g.call(T,r)?!0:g.call(w,r)?!1:y.test(r)?T[r]=!0:(w[r]=!0,!1)}function F(r,s,a,h){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return h?!1:a!==null?!a.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function $(r,s,a,h){if(s===null||typeof s>"u"||F(r,s,a,h))return!0;if(h)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function H(r,s,a,h,d,p,v){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=h,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=r,this.type=s,this.sanitizeURL=p,this.removeEmptyString=v}var U={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){U[r]=new H(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var s=r[0];U[s]=new H(s,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){U[r]=new H(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){U[r]=new H(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){U[r]=new H(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){U[r]=new H(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){U[r]=new H(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){U[r]=new H(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){U[r]=new H(r,5,!1,r.toLowerCase(),null,!1,!1)});var de=/[\-:]([a-z])/g;function ae(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var s=r.replace(de,ae);U[s]=new H(s,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var s=r.replace(de,ae);U[s]=new H(s,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var s=r.replace(de,ae);U[s]=new H(s,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){U[r]=new H(r,1,!1,r.toLowerCase(),null,!1,!1)}),U.xlinkHref=new H("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){U[r]=new H(r,1,!1,r.toLowerCase(),null,!0,!0)});function he(r,s,a,h){var d=U.hasOwnProperty(s)?U[s]:null;(d!==null?d.type!==0:h||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&($(s,a,d,h)&&(a=null),h||d===null?I(s)&&(a===null?r.removeAttribute(s):r.setAttribute(s,""+a)):d.mustUseProperty?r[d.propertyName]=a===null?d.type===3?!1:"":a:(s=d.attributeName,h=d.attributeNamespace,a===null?r.removeAttribute(s):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,h?r.setAttributeNS(h,s,a):r.setAttribute(s,a))))}var _e=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,be=Symbol.for("react.element"),Re=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),D=Symbol.for("react.provider"),x=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),qe=Symbol.for("react.suspense_list"),Et=Symbol.for("react.memo"),Vt=Symbol.for("react.lazy"),Je=Symbol.for("react.offscreen"),ee=Symbol.iterator;function pe(r){return r===null||typeof r!="object"?null:(r=ee&&r[ee]||r["@@iterator"],typeof r=="function"?r:null)}var ie=Object.assign,V;function G(r){if(V===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);V=s&&s[1]||""}return`
`+V+r}var Ie=!1;function Se(r,s){if(!r||Ie)return"";Ie=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(j){var h=j}Reflect.construct(r,[],s)}else{try{s.call()}catch(j){h=j}r.call(s.prototype)}else{try{throw Error()}catch(j){h=j}r()}}catch(j){if(j&&h&&typeof j.stack=="string"){for(var d=j.stack.split(`
`),p=h.stack.split(`
`),v=d.length-1,S=p.length-1;1<=v&&0<=S&&d[v]!==p[S];)S--;for(;1<=v&&0<=S;v--,S--)if(d[v]!==p[S]){if(v!==1||S!==1)do if(v--,S--,0>S||d[v]!==p[S]){var P=`
`+d[v].replace(" at new "," at ");return r.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",r.displayName)),P}while(1<=v&&0<=S);break}}}finally{Ie=!1,Error.prepareStackTrace=a}return(r=r?r.displayName||r.name:"")?G(r):""}function Ce(r){switch(r.tag){case 5:return G(r.type);case 16:return G("Lazy");case 13:return G("Suspense");case 19:return G("SuspenseList");case 0:case 2:case 15:return r=Se(r.type,!1),r;case 11:return r=Se(r.type.render,!1),r;case 1:return r=Se(r.type,!0),r;default:return""}}function Pe(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case k:return"Fragment";case Re:return"Portal";case C:return"Profiler";case A:return"StrictMode";case R:return"Suspense";case qe:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case x:return(r.displayName||"Context")+".Consumer";case D:return(r._context.displayName||"Context")+".Provider";case b:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case Et:return s=r.displayName||null,s!==null?s:Pe(r.type)||"Memo";case Vt:s=r._payload,r=r._init;try{return Pe(r(s))}catch{}}return null}function Ue(r){var s=r.type;switch(r.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=s.render,r=r.displayName||r.name||"",s.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Pe(s);case 8:return s===A?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Oe(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function Be(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function $t(r){var s=Be(r)?"checked":"value",a=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),h=""+r[s];if(!r.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,p=a.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return d.call(this)},set:function(v){h=""+v,p.call(this,v)}}),Object.defineProperty(r,s,{enumerable:a.enumerable}),{getValue:function(){return h},setValue:function(v){h=""+v},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function Ns(r){r._valueTracker||(r._valueTracker=$t(r))}function Go(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var a=s.getValue(),h="";return r&&(h=Be(r)?r.checked?"true":"false":r.value),r=h,r!==a?(s.setValue(r),!0):!1}function jr(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function Ds(r,s){var a=s.checked;return ie({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??r._wrapperState.initialChecked})}function Al(r,s){var a=s.defaultValue==null?"":s.defaultValue,h=s.checked!=null?s.checked:s.defaultChecked;a=Oe(s.value!=null?s.value:a),r._wrapperState={initialChecked:h,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function Vs(r,s){s=s.checked,s!=null&&he(r,"checked",s,!1)}function Ui(r,s){Vs(r,s);var a=Oe(s.value),h=s.type;if(a!=null)h==="number"?(a===0&&r.value===""||r.value!=a)&&(r.value=""+a):r.value!==""+a&&(r.value=""+a);else if(h==="submit"||h==="reset"){r.removeAttribute("value");return}s.hasOwnProperty("value")?ct(r,s.type,a):s.hasOwnProperty("defaultValue")&&ct(r,s.type,Oe(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(r.defaultChecked=!!s.defaultChecked)}function Ko(r,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var h=s.type;if(!(h!=="submit"&&h!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+r._wrapperState.initialValue,a||s===r.value||(r.value=s),r.defaultValue=s}a=r.name,a!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,a!==""&&(r.name=a)}function ct(r,s,a){(s!=="number"||jr(r.ownerDocument)!==r)&&(a==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+a&&(r.defaultValue=""+a))}var st=Array.isArray;function An(r,s,a,h){if(r=r.options,s){s={};for(var d=0;d<a.length;d++)s["$"+a[d]]=!0;for(a=0;a<r.length;a++)d=s.hasOwnProperty("$"+r[a].value),r[a].selected!==d&&(r[a].selected=d),d&&h&&(r[a].defaultSelected=!0)}else{for(a=""+Oe(a),s=null,d=0;d<r.length;d++){if(r[d].value===a){r[d].selected=!0,h&&(r[d].defaultSelected=!0);return}s!==null||r[d].disabled||(s=r[d])}s!==null&&(s.selected=!0)}}function Qo(r,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return ie({},s,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function Yo(r,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(st(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}r._wrapperState={initialValue:Oe(a)}}function Rl(r,s){var a=Oe(s.value),h=Oe(s.defaultValue);a!=null&&(a=""+a,a!==r.value&&(r.value=a),s.defaultValue==null&&r.defaultValue!==a&&(r.defaultValue=a)),h!=null&&(r.defaultValue=""+h)}function zr(r){var s=r.textContent;s===r._wrapperState.initialValue&&s!==""&&s!==null&&(r.value=s)}function Jo(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function bs(r,s){return r==null||r==="http://www.w3.org/1999/xhtml"?Jo(s):r==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var Br,Cl=(function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,h,d){MSApp.execUnsafeLocalFunction(function(){return r(s,a,h,d)})}:r})(function(r,s){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=s;else{for(Br=Br||document.createElement("div"),Br.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=Br.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;s.firstChild;)r.appendChild(s.firstChild)}});function ji(r,s){if(s){var a=r.firstChild;if(a&&a===r.lastChild&&a.nodeType===3){a.nodeValue=s;return}}r.textContent=s}var $r={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Pl=["Webkit","ms","Moz","O"];Object.keys($r).forEach(function(r){Pl.forEach(function(s){s=s+r.charAt(0).toUpperCase()+r.substring(1),$r[s]=$r[r]})});function qr(r,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||$r.hasOwnProperty(r)&&$r[r]?(""+s).trim():s+"px"}function Os(r,s){r=r.style;for(var a in s)if(s.hasOwnProperty(a)){var h=a.indexOf("--")===0,d=qr(a,s[a],h);a==="float"&&(a="cssFloat"),h?r.setProperty(a,d):r[a]=d}}var Xo=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Rn(r,s){if(s){if(Xo[r]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function Ls(r,s){if(r.indexOf("-")===-1)return typeof s.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wr=null;function Ms(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var mr=null,gr=null,nt=null;function Zo(r){if(r=Ra(r)){if(typeof mr!="function")throw Error(t(280));var s=r.stateNode;s&&(s=tu(s),mr(r.stateNode,r.type,s))}}function Hr(r){gr?nt?nt.push(r):nt=[r]:gr=r}function Gr(){if(gr){var r=gr,s=nt;if(nt=gr=null,Zo(r),s)for(r=0;r<s.length;r++)Zo(s[r])}}function kl(r,s){return r(s)}function xl(){}var $n=!1;function Nl(r,s,a){if($n)return r(s,a);$n=!0;try{return kl(r,s,a)}finally{$n=!1,(gr!==null||nt!==null)&&(xl(),Gr())}}function zi(r,s){var a=r.stateNode;if(a===null)return null;var h=tu(a);if(h===null)return null;a=h[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(r=r.type,h=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!h;break e;default:r=!1}if(r)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var Kr=!1;if(f)try{var Qr={};Object.defineProperty(Qr,"passive",{get:function(){Kr=!0}}),window.addEventListener("test",Qr,Qr),window.removeEventListener("test",Qr,Qr)}catch{Kr=!1}function Dl(r,s,a,h,d,p,v,S,P){var j=Array.prototype.slice.call(arguments,3);try{s.apply(a,j)}catch(Q){this.onError(Q)}}var yr=!1,qn=null,Fs=!1,pn=null,Vl={onError:function(r){yr=!0,qn=r}};function bl(r,s,a,h,d,p,v,S,P){yr=!1,qn=null,Dl.apply(Vl,arguments)}function ea(r,s,a,h,d,p,v,S,P){if(bl.apply(this,arguments),yr){if(yr){var j=qn;yr=!1,qn=null}else throw Error(t(198));Fs||(Fs=!0,pn=j)}}function Cn(r){var s=r,a=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,(s.flags&4098)!==0&&(a=s.return),r=s.return;while(r)}return s.tag===3?a:null}function ta(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function Ol(r){if(Cn(r)!==r)throw Error(t(188))}function Ll(r){var s=r.alternate;if(!s){if(s=Cn(r),s===null)throw Error(t(188));return s!==r?null:r}for(var a=r,h=s;;){var d=a.return;if(d===null)break;var p=d.alternate;if(p===null){if(h=d.return,h!==null){a=h;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===a)return Ol(d),r;if(p===h)return Ol(d),s;p=p.sibling}throw Error(t(188))}if(a.return!==h.return)a=d,h=p;else{for(var v=!1,S=d.child;S;){if(S===a){v=!0,a=d,h=p;break}if(S===h){v=!0,h=d,a=p;break}S=S.sibling}if(!v){for(S=p.child;S;){if(S===a){v=!0,a=p,h=d;break}if(S===h){v=!0,h=p,a=d;break}S=S.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==h)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?r:s}function Ml(r){return r=Ll(r),r!==null?Bi(r):null}function Bi(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var s=Bi(r);if(s!==null)return s;r=r.sibling}return null}var na=e.unstable_scheduleCallback,Us=e.unstable_cancelCallback,$i=e.unstable_shouldYield,_r=e.unstable_requestPaint,Ge=e.unstable_now,Zc=e.unstable_getCurrentPriorityLevel,js=e.unstable_ImmediatePriority,ra=e.unstable_UserBlockingPriority,qi=e.unstable_NormalPriority,ia=e.unstable_LowPriority,zs=e.unstable_IdlePriority,Wi=null,tn=null;function Fl(r){if(tn&&typeof tn.onCommitFiberRoot=="function")try{tn.onCommitFiberRoot(Wi,r,void 0,(r.current.flags&128)===128)}catch{}}var nn=Math.clz32?Math.clz32:Hi,Wn=Math.log,mn=Math.LN2;function Hi(r){return r>>>=0,r===0?32:31-(Wn(r)/mn|0)|0}var Hn=64,Yr=4194304;function Fe(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function vr(r,s){var a=r.pendingLanes;if(a===0)return 0;var h=0,d=r.suspendedLanes,p=r.pingedLanes,v=a&268435455;if(v!==0){var S=v&~d;S!==0?h=Fe(S):(p&=v,p!==0&&(h=Fe(p)))}else v=a&~d,v!==0?h=Fe(v):p!==0&&(h=Fe(p));if(h===0)return 0;if(s!==0&&s!==h&&(s&d)===0&&(d=h&-h,p=s&-s,d>=p||d===16&&(p&4194240)!==0))return s;if((h&4)!==0&&(h|=a&16),s=r.entangledLanes,s!==0)for(r=r.entanglements,s&=h;0<s;)a=31-nn(s),d=1<<a,h|=r[a],s&=~d;return h}function Gi(r,s){switch(r){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ki(r,s){for(var a=r.suspendedLanes,h=r.pingedLanes,d=r.expirationTimes,p=r.pendingLanes;0<p;){var v=31-nn(p),S=1<<v,P=d[v];P===-1?((S&a)===0||(S&h)!==0)&&(d[v]=Gi(S,s)):P<=s&&(r.expiredLanes|=S),p&=~S}}function sa(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function oa(){var r=Hn;return Hn<<=1,(Hn&4194240)===0&&(Hn=64),r}function aa(r){for(var s=[],a=0;31>a;a++)s.push(r);return s}function Qi(r,s,a){r.pendingLanes|=s,s!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,s=31-nn(s),r[s]=a}function eh(r,s){var a=r.pendingLanes&~s;r.pendingLanes=s,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=s,r.mutableReadLanes&=s,r.entangledLanes&=s,s=r.entanglements;var h=r.eventTimes;for(r=r.expirationTimes;0<a;){var d=31-nn(a),p=1<<d;s[d]=0,h[d]=-1,r[d]=-1,a&=~p}}function la(r,s){var a=r.entangledLanes|=s;for(r=r.entanglements;a;){var h=31-nn(a),d=1<<h;d&s|r[h]&s&&(r[h]|=s),a&=~d}}var De=0;function Gn(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var ua,Bs,ca,ha,da,Kn=!1,$s=[],Qn=null,Yn=null,Rt=null,Yi=new Map,wr=new Map,rn=[],Ul="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Jr(r,s){switch(r){case"focusin":case"focusout":Qn=null;break;case"dragenter":case"dragleave":Yn=null;break;case"mouseover":case"mouseout":Rt=null;break;case"pointerover":case"pointerout":Yi.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":wr.delete(s.pointerId)}}function Pn(r,s,a,h,d,p){return r===null||r.nativeEvent!==p?(r={blockedOn:s,domEventName:a,eventSystemFlags:h,nativeEvent:p,targetContainers:[d]},s!==null&&(s=Ra(s),s!==null&&Bs(s)),r):(r.eventSystemFlags|=h,s=r.targetContainers,d!==null&&s.indexOf(d)===-1&&s.push(d),r)}function jl(r,s,a,h,d){switch(s){case"focusin":return Qn=Pn(Qn,r,s,a,h,d),!0;case"dragenter":return Yn=Pn(Yn,r,s,a,h,d),!0;case"mouseover":return Rt=Pn(Rt,r,s,a,h,d),!0;case"pointerover":var p=d.pointerId;return Yi.set(p,Pn(Yi.get(p)||null,r,s,a,h,d)),!0;case"gotpointercapture":return p=d.pointerId,wr.set(p,Pn(wr.get(p)||null,r,s,a,h,d)),!0}return!1}function qs(r){var s=es(r.target);if(s!==null){var a=Cn(s);if(a!==null){if(s=a.tag,s===13){if(s=ta(a),s!==null){r.blockedOn=s,da(r.priority,function(){ca(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){r.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}r.blockedOn=null}function $e(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var a=Ws(r.domEventName,r.eventSystemFlags,s[0],r.nativeEvent);if(a===null){a=r.nativeEvent;var h=new a.constructor(a.type,a);Wr=h,a.target.dispatchEvent(h),Wr=null}else return s=Ra(a),s!==null&&Bs(s),r.blockedOn=a,!1;s.shift()}return!0}function zl(r,s,a){$e(r)&&a.delete(s)}function th(){Kn=!1,Qn!==null&&$e(Qn)&&(Qn=null),Yn!==null&&$e(Yn)&&(Yn=null),Rt!==null&&$e(Rt)&&(Rt=null),Yi.forEach(zl),wr.forEach(zl)}function Xr(r,s){r.blockedOn===s&&(r.blockedOn=null,Kn||(Kn=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,th)))}function Zr(r){function s(d){return Xr(d,r)}if(0<$s.length){Xr($s[0],r);for(var a=1;a<$s.length;a++){var h=$s[a];h.blockedOn===r&&(h.blockedOn=null)}}for(Qn!==null&&Xr(Qn,r),Yn!==null&&Xr(Yn,r),Rt!==null&&Xr(Rt,r),Yi.forEach(s),wr.forEach(s),a=0;a<rn.length;a++)h=rn[a],h.blockedOn===r&&(h.blockedOn=null);for(;0<rn.length&&(a=rn[0],a.blockedOn===null);)qs(a),a.blockedOn===null&&rn.shift()}var Er=_e.ReactCurrentBatchConfig,Tr=!0;function Jn(r,s,a,h){var d=De,p=Er.transition;Er.transition=null;try{De=1,fa(r,s,a,h)}finally{De=d,Er.transition=p}}function Bl(r,s,a,h){var d=De,p=Er.transition;Er.transition=null;try{De=4,fa(r,s,a,h)}finally{De=d,Er.transition=p}}function fa(r,s,a,h){if(Tr){var d=Ws(r,s,a,h);if(d===null)dh(r,s,h,Xn,a),Jr(r,h);else if(jl(d,r,s,a,h))h.stopPropagation();else if(Jr(r,h),s&4&&-1<Ul.indexOf(r)){for(;d!==null;){var p=Ra(d);if(p!==null&&ua(p),p=Ws(r,s,a,h),p===null&&dh(r,s,h,Xn,a),p===d)break;d=p}d!==null&&h.stopPropagation()}else dh(r,s,h,null,a)}}var Xn=null;function Ws(r,s,a,h){if(Xn=null,r=Ms(h),r=es(r),r!==null)if(s=Cn(r),s===null)r=null;else if(a=s.tag,a===13){if(r=ta(s),r!==null)return r;r=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null);return Xn=r,null}function Hs(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Zc()){case js:return 1;case ra:return 4;case qi:case ia:return 16;case zs:return 536870912;default:return 16}default:return 16}}var sn=null,Gs=null,Ir=null;function $l(){if(Ir)return Ir;var r,s=Gs,a=s.length,h,d="value"in sn?sn.value:sn.textContent,p=d.length;for(r=0;r<a&&s[r]===d[r];r++);var v=a-r;for(h=1;h<=v&&s[a-h]===d[p-h];h++);return Ir=d.slice(r,1<h?1-h:void 0)}function Ji(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function Zn(){return!0}function pa(){return!1}function bt(r){function s(a,h,d,p,v){this._reactName=a,this._targetInst=d,this.type=h,this.nativeEvent=p,this.target=v,this.currentTarget=null;for(var S in r)r.hasOwnProperty(S)&&(a=r[S],this[S]=a?a(p):p[S]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Zn:pa,this.isPropagationStopped=pa,this}return ie(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Zn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Zn)},persist:function(){},isPersistent:Zn}),s}var er={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xi=bt(er),ei=ie({},er,{view:0,detail:0}),Ks=bt(ei),Qs,Ys,on,Zi=ie({},ei,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ee,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==on&&(on&&r.type==="mousemove"?(Qs=r.screenX-on.screenX,Ys=r.screenY-on.screenY):Ys=Qs=0,on=r),Qs)},movementY:function(r){return"movementY"in r?r.movementY:Ys}}),ma=bt(Zi),ql=ie({},Zi,{dataTransfer:0}),Wl=bt(ql),Js=ie({},ei,{relatedTarget:0}),Ct=bt(Js),Hl=ie({},er,{animationName:0,elapsedTime:0,pseudoElement:0}),Gl=bt(Hl),ti=ie({},er,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),u=bt(ti),m=ie({},er,{data:0}),_=bt(m),E={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},L={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},z={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Z(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=z[r])?!!s[r]:!1}function Ee(){return Z}var ot=ie({},ei,{key:function(r){if(r.key){var s=E[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=Ji(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?L[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ee,charCode:function(r){return r.type==="keypress"?Ji(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Ji(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),ze=bt(ot),ht=ie({},Zi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),an=bt(ht),Sr=ie({},ei,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ee}),tr=bt(Sr),nr=ie({},er,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xs=bt(nr),ga=ie({},Zi,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),e0=bt(ga),t0=[9,13,27,32],nh=f&&"CompositionEvent"in window,ya=null;f&&"documentMode"in document&&(ya=document.documentMode);var n0=f&&"TextEvent"in window&&!ya,Pp=f&&(!nh||ya&&8<ya&&11>=ya),kp=" ",xp=!1;function Np(r,s){switch(r){case"keyup":return t0.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dp(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var Zs=!1;function r0(r,s){switch(r){case"compositionend":return Dp(s);case"keypress":return s.which!==32?null:(xp=!0,kp);case"textInput":return r=s.data,r===kp&&xp?null:r;default:return null}}function i0(r,s){if(Zs)return r==="compositionend"||!nh&&Np(r,s)?(r=$l(),Ir=Gs=sn=null,Zs=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Pp&&s.locale!=="ko"?null:s.data;default:return null}}var s0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vp(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!s0[r.type]:s==="textarea"}function bp(r,s,a,h){Hr(h),s=Xl(s,"onChange"),0<s.length&&(a=new Xi("onChange","change",null,a,h),r.push({event:a,listeners:s}))}var _a=null,va=null;function o0(r){Xp(r,0)}function Kl(r){var s=io(r);if(Go(s))return r}function a0(r,s){if(r==="change")return s}var Op=!1;if(f){var rh;if(f){var ih="oninput"in document;if(!ih){var Lp=document.createElement("div");Lp.setAttribute("oninput","return;"),ih=typeof Lp.oninput=="function"}rh=ih}else rh=!1;Op=rh&&(!document.documentMode||9<document.documentMode)}function Mp(){_a&&(_a.detachEvent("onpropertychange",Fp),va=_a=null)}function Fp(r){if(r.propertyName==="value"&&Kl(va)){var s=[];bp(s,va,r,Ms(r)),Nl(o0,s)}}function l0(r,s,a){r==="focusin"?(Mp(),_a=s,va=a,_a.attachEvent("onpropertychange",Fp)):r==="focusout"&&Mp()}function u0(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return Kl(va)}function c0(r,s){if(r==="click")return Kl(s)}function h0(r,s){if(r==="input"||r==="change")return Kl(s)}function d0(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var kn=typeof Object.is=="function"?Object.is:d0;function wa(r,s){if(kn(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var a=Object.keys(r),h=Object.keys(s);if(a.length!==h.length)return!1;for(h=0;h<a.length;h++){var d=a[h];if(!g.call(s,d)||!kn(r[d],s[d]))return!1}return!0}function Up(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function jp(r,s){var a=Up(r);r=0;for(var h;a;){if(a.nodeType===3){if(h=r+a.textContent.length,r<=s&&h>=s)return{node:a,offset:s-r};r=h}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Up(a)}}function zp(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?zp(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function Bp(){for(var r=window,s=jr();s instanceof r.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)r=s.contentWindow;else break;s=jr(r.document)}return s}function sh(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}function f0(r){var s=Bp(),a=r.focusedElem,h=r.selectionRange;if(s!==a&&a&&a.ownerDocument&&zp(a.ownerDocument.documentElement,a)){if(h!==null&&sh(a)){if(s=h.start,r=h.end,r===void 0&&(r=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(r,a.value.length);else if(r=(s=a.ownerDocument||document)&&s.defaultView||window,r.getSelection){r=r.getSelection();var d=a.textContent.length,p=Math.min(h.start,d);h=h.end===void 0?p:Math.min(h.end,d),!r.extend&&p>h&&(d=h,h=p,p=d),d=jp(a,p);var v=jp(a,h);d&&v&&(r.rangeCount!==1||r.anchorNode!==d.node||r.anchorOffset!==d.offset||r.focusNode!==v.node||r.focusOffset!==v.offset)&&(s=s.createRange(),s.setStart(d.node,d.offset),r.removeAllRanges(),p>h?(r.addRange(s),r.extend(v.node,v.offset)):(s.setEnd(v.node,v.offset),r.addRange(s)))}}for(s=[],r=a;r=r.parentNode;)r.nodeType===1&&s.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)r=s[a],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var p0=f&&"documentMode"in document&&11>=document.documentMode,eo=null,oh=null,Ea=null,ah=!1;function $p(r,s,a){var h=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ah||eo==null||eo!==jr(h)||(h=eo,"selectionStart"in h&&sh(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),Ea&&wa(Ea,h)||(Ea=h,h=Xl(oh,"onSelect"),0<h.length&&(s=new Xi("onSelect","select",null,s,a),r.push({event:s,listeners:h}),s.target=eo)))}function Ql(r,s){var a={};return a[r.toLowerCase()]=s.toLowerCase(),a["Webkit"+r]="webkit"+s,a["Moz"+r]="moz"+s,a}var to={animationend:Ql("Animation","AnimationEnd"),animationiteration:Ql("Animation","AnimationIteration"),animationstart:Ql("Animation","AnimationStart"),transitionend:Ql("Transition","TransitionEnd")},lh={},qp={};f&&(qp=document.createElement("div").style,"AnimationEvent"in window||(delete to.animationend.animation,delete to.animationiteration.animation,delete to.animationstart.animation),"TransitionEvent"in window||delete to.transitionend.transition);function Yl(r){if(lh[r])return lh[r];if(!to[r])return r;var s=to[r],a;for(a in s)if(s.hasOwnProperty(a)&&a in qp)return lh[r]=s[a];return r}var Wp=Yl("animationend"),Hp=Yl("animationiteration"),Gp=Yl("animationstart"),Kp=Yl("transitionend"),Qp=new Map,Yp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ni(r,s){Qp.set(r,s),l(s,[r])}for(var uh=0;uh<Yp.length;uh++){var ch=Yp[uh],m0=ch.toLowerCase(),g0=ch[0].toUpperCase()+ch.slice(1);ni(m0,"on"+g0)}ni(Wp,"onAnimationEnd"),ni(Hp,"onAnimationIteration"),ni(Gp,"onAnimationStart"),ni("dblclick","onDoubleClick"),ni("focusin","onFocus"),ni("focusout","onBlur"),ni(Kp,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ta="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),y0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ta));function Jp(r,s,a){var h=r.type||"unknown-event";r.currentTarget=a,ea(h,s,void 0,r),r.currentTarget=null}function Xp(r,s){s=(s&4)!==0;for(var a=0;a<r.length;a++){var h=r[a],d=h.event;h=h.listeners;e:{var p=void 0;if(s)for(var v=h.length-1;0<=v;v--){var S=h[v],P=S.instance,j=S.currentTarget;if(S=S.listener,P!==p&&d.isPropagationStopped())break e;Jp(d,S,j),p=P}else for(v=0;v<h.length;v++){if(S=h[v],P=S.instance,j=S.currentTarget,S=S.listener,P!==p&&d.isPropagationStopped())break e;Jp(d,S,j),p=P}}}if(Fs)throw r=pn,Fs=!1,pn=null,r}function Ke(r,s){var a=s[_h];a===void 0&&(a=s[_h]=new Set);var h=r+"__bubble";a.has(h)||(Zp(s,r,2,!1),a.add(h))}function hh(r,s,a){var h=0;s&&(h|=4),Zp(a,r,h,s)}var Jl="_reactListening"+Math.random().toString(36).slice(2);function Ia(r){if(!r[Jl]){r[Jl]=!0,i.forEach(function(a){a!=="selectionchange"&&(y0.has(a)||hh(a,!1,r),hh(a,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[Jl]||(s[Jl]=!0,hh("selectionchange",!1,s))}}function Zp(r,s,a,h){switch(Hs(s)){case 1:var d=Jn;break;case 4:d=Bl;break;default:d=fa}a=d.bind(null,s,a,r),d=void 0,!Kr||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(d=!0),h?d!==void 0?r.addEventListener(s,a,{capture:!0,passive:d}):r.addEventListener(s,a,!0):d!==void 0?r.addEventListener(s,a,{passive:d}):r.addEventListener(s,a,!1)}function dh(r,s,a,h,d){var p=h;if((s&1)===0&&(s&2)===0&&h!==null)e:for(;;){if(h===null)return;var v=h.tag;if(v===3||v===4){var S=h.stateNode.containerInfo;if(S===d||S.nodeType===8&&S.parentNode===d)break;if(v===4)for(v=h.return;v!==null;){var P=v.tag;if((P===3||P===4)&&(P=v.stateNode.containerInfo,P===d||P.nodeType===8&&P.parentNode===d))return;v=v.return}for(;S!==null;){if(v=es(S),v===null)return;if(P=v.tag,P===5||P===6){h=p=v;continue e}S=S.parentNode}}h=h.return}Nl(function(){var j=p,Q=Ms(a),Y=[];e:{var K=Qp.get(r);if(K!==void 0){var te=Xi,le=r;switch(r){case"keypress":if(Ji(a)===0)break e;case"keydown":case"keyup":te=ze;break;case"focusin":le="focus",te=Ct;break;case"focusout":le="blur",te=Ct;break;case"beforeblur":case"afterblur":te=Ct;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":te=ma;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":te=Wl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":te=tr;break;case Wp:case Hp:case Gp:te=Gl;break;case Kp:te=Xs;break;case"scroll":te=Ks;break;case"wheel":te=e0;break;case"copy":case"cut":case"paste":te=u;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":te=an}var ue=(s&4)!==0,at=!ue&&r==="scroll",O=ue?K!==null?K+"Capture":null:K;ue=[];for(var N=j,M;N!==null;){M=N;var J=M.stateNode;if(M.tag===5&&J!==null&&(M=J,O!==null&&(J=zi(N,O),J!=null&&ue.push(Sa(N,J,M)))),at)break;N=N.return}0<ue.length&&(K=new te(K,le,null,a,Q),Y.push({event:K,listeners:ue}))}}if((s&7)===0){e:{if(K=r==="mouseover"||r==="pointerover",te=r==="mouseout"||r==="pointerout",K&&a!==Wr&&(le=a.relatedTarget||a.fromElement)&&(es(le)||le[Ar]))break e;if((te||K)&&(K=Q.window===Q?Q:(K=Q.ownerDocument)?K.defaultView||K.parentWindow:window,te?(le=a.relatedTarget||a.toElement,te=j,le=le?es(le):null,le!==null&&(at=Cn(le),le!==at||le.tag!==5&&le.tag!==6)&&(le=null)):(te=null,le=j),te!==le)){if(ue=ma,J="onMouseLeave",O="onMouseEnter",N="mouse",(r==="pointerout"||r==="pointerover")&&(ue=an,J="onPointerLeave",O="onPointerEnter",N="pointer"),at=te==null?K:io(te),M=le==null?K:io(le),K=new ue(J,N+"leave",te,a,Q),K.target=at,K.relatedTarget=M,J=null,es(Q)===j&&(ue=new ue(O,N+"enter",le,a,Q),ue.target=M,ue.relatedTarget=at,J=ue),at=J,te&&le)t:{for(ue=te,O=le,N=0,M=ue;M;M=no(M))N++;for(M=0,J=O;J;J=no(J))M++;for(;0<N-M;)ue=no(ue),N--;for(;0<M-N;)O=no(O),M--;for(;N--;){if(ue===O||O!==null&&ue===O.alternate)break t;ue=no(ue),O=no(O)}ue=null}else ue=null;te!==null&&em(Y,K,te,ue,!1),le!==null&&at!==null&&em(Y,at,le,ue,!0)}}e:{if(K=j?io(j):window,te=K.nodeName&&K.nodeName.toLowerCase(),te==="select"||te==="input"&&K.type==="file")var ce=a0;else if(Vp(K))if(Op)ce=h0;else{ce=u0;var me=l0}else(te=K.nodeName)&&te.toLowerCase()==="input"&&(K.type==="checkbox"||K.type==="radio")&&(ce=c0);if(ce&&(ce=ce(r,j))){bp(Y,ce,a,Q);break e}me&&me(r,K,j),r==="focusout"&&(me=K._wrapperState)&&me.controlled&&K.type==="number"&&ct(K,"number",K.value)}switch(me=j?io(j):window,r){case"focusin":(Vp(me)||me.contentEditable==="true")&&(eo=me,oh=j,Ea=null);break;case"focusout":Ea=oh=eo=null;break;case"mousedown":ah=!0;break;case"contextmenu":case"mouseup":case"dragend":ah=!1,$p(Y,a,Q);break;case"selectionchange":if(p0)break;case"keydown":case"keyup":$p(Y,a,Q)}var ge;if(nh)e:{switch(r){case"compositionstart":var ve="onCompositionStart";break e;case"compositionend":ve="onCompositionEnd";break e;case"compositionupdate":ve="onCompositionUpdate";break e}ve=void 0}else Zs?Np(r,a)&&(ve="onCompositionEnd"):r==="keydown"&&a.keyCode===229&&(ve="onCompositionStart");ve&&(Pp&&a.locale!=="ko"&&(Zs||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&Zs&&(ge=$l()):(sn=Q,Gs="value"in sn?sn.value:sn.textContent,Zs=!0)),me=Xl(j,ve),0<me.length&&(ve=new _(ve,r,null,a,Q),Y.push({event:ve,listeners:me}),ge?ve.data=ge:(ge=Dp(a),ge!==null&&(ve.data=ge)))),(ge=n0?r0(r,a):i0(r,a))&&(j=Xl(j,"onBeforeInput"),0<j.length&&(Q=new _("onBeforeInput","beforeinput",null,a,Q),Y.push({event:Q,listeners:j}),Q.data=ge))}Xp(Y,s)})}function Sa(r,s,a){return{instance:r,listener:s,currentTarget:a}}function Xl(r,s){for(var a=s+"Capture",h=[];r!==null;){var d=r,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=zi(r,a),p!=null&&h.unshift(Sa(r,p,d)),p=zi(r,s),p!=null&&h.push(Sa(r,p,d))),r=r.return}return h}function no(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function em(r,s,a,h,d){for(var p=s._reactName,v=[];a!==null&&a!==h;){var S=a,P=S.alternate,j=S.stateNode;if(P!==null&&P===h)break;S.tag===5&&j!==null&&(S=j,d?(P=zi(a,p),P!=null&&v.unshift(Sa(a,P,S))):d||(P=zi(a,p),P!=null&&v.push(Sa(a,P,S)))),a=a.return}v.length!==0&&r.push({event:s,listeners:v})}var _0=/\r\n?/g,v0=/\u0000|\uFFFD/g;function tm(r){return(typeof r=="string"?r:""+r).replace(_0,`
`).replace(v0,"")}function Zl(r,s,a){if(s=tm(s),tm(r)!==s&&a)throw Error(t(425))}function eu(){}var fh=null,ph=null;function mh(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var gh=typeof setTimeout=="function"?setTimeout:void 0,w0=typeof clearTimeout=="function"?clearTimeout:void 0,nm=typeof Promise=="function"?Promise:void 0,E0=typeof queueMicrotask=="function"?queueMicrotask:typeof nm<"u"?function(r){return nm.resolve(null).then(r).catch(T0)}:gh;function T0(r){setTimeout(function(){throw r})}function yh(r,s){var a=s,h=0;do{var d=a.nextSibling;if(r.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(h===0){r.removeChild(d),Zr(s);return}h--}else a!=="$"&&a!=="$?"&&a!=="$!"||h++;a=d}while(a);Zr(s)}function ri(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return r}function rm(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return r;s--}else a==="/$"&&s++}r=r.previousSibling}return null}var ro=Math.random().toString(36).slice(2),rr="__reactFiber$"+ro,Aa="__reactProps$"+ro,Ar="__reactContainer$"+ro,_h="__reactEvents$"+ro,I0="__reactListeners$"+ro,S0="__reactHandles$"+ro;function es(r){var s=r[rr];if(s)return s;for(var a=r.parentNode;a;){if(s=a[Ar]||a[rr]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(r=rm(r);r!==null;){if(a=r[rr])return a;r=rm(r)}return s}r=a,a=r.parentNode}return null}function Ra(r){return r=r[rr]||r[Ar],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function io(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function tu(r){return r[Aa]||null}var vh=[],so=-1;function ii(r){return{current:r}}function Qe(r){0>so||(r.current=vh[so],vh[so]=null,so--)}function We(r,s){so++,vh[so]=r.current,r.current=s}var si={},Ot=ii(si),Kt=ii(!1),ts=si;function oo(r,s){var a=r.type.contextTypes;if(!a)return si;var h=r.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===s)return h.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in a)d[p]=s[p];return h&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=s,r.__reactInternalMemoizedMaskedChildContext=d),d}function Qt(r){return r=r.childContextTypes,r!=null}function nu(){Qe(Kt),Qe(Ot)}function im(r,s,a){if(Ot.current!==si)throw Error(t(168));We(Ot,s),We(Kt,a)}function sm(r,s,a){var h=r.stateNode;if(s=s.childContextTypes,typeof h.getChildContext!="function")return a;h=h.getChildContext();for(var d in h)if(!(d in s))throw Error(t(108,Ue(r)||"Unknown",d));return ie({},a,h)}function ru(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||si,ts=Ot.current,We(Ot,r),We(Kt,Kt.current),!0}function om(r,s,a){var h=r.stateNode;if(!h)throw Error(t(169));a?(r=sm(r,s,ts),h.__reactInternalMemoizedMergedChildContext=r,Qe(Kt),Qe(Ot),We(Ot,r)):Qe(Kt),We(Kt,a)}var Rr=null,iu=!1,wh=!1;function am(r){Rr===null?Rr=[r]:Rr.push(r)}function A0(r){iu=!0,am(r)}function oi(){if(!wh&&Rr!==null){wh=!0;var r=0,s=De;try{var a=Rr;for(De=1;r<a.length;r++){var h=a[r];do h=h(!0);while(h!==null)}Rr=null,iu=!1}catch(d){throw Rr!==null&&(Rr=Rr.slice(r+1)),na(js,oi),d}finally{De=s,wh=!1}}return null}var ao=[],lo=0,su=null,ou=0,gn=[],yn=0,ns=null,Cr=1,Pr="";function rs(r,s){ao[lo++]=ou,ao[lo++]=su,su=r,ou=s}function lm(r,s,a){gn[yn++]=Cr,gn[yn++]=Pr,gn[yn++]=ns,ns=r;var h=Cr;r=Pr;var d=32-nn(h)-1;h&=~(1<<d),a+=1;var p=32-nn(s)+d;if(30<p){var v=d-d%5;p=(h&(1<<v)-1).toString(32),h>>=v,d-=v,Cr=1<<32-nn(s)+d|a<<d|h,Pr=p+r}else Cr=1<<p|a<<d|h,Pr=r}function Eh(r){r.return!==null&&(rs(r,1),lm(r,1,0))}function Th(r){for(;r===su;)su=ao[--lo],ao[lo]=null,ou=ao[--lo],ao[lo]=null;for(;r===ns;)ns=gn[--yn],gn[yn]=null,Pr=gn[--yn],gn[yn]=null,Cr=gn[--yn],gn[yn]=null}var ln=null,un=null,Xe=!1,xn=null;function um(r,s){var a=En(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=r,s=r.deletions,s===null?(r.deletions=[a],r.flags|=16):s.push(a)}function cm(r,s){switch(r.tag){case 5:var a=r.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(r.stateNode=s,ln=r,un=ri(s.firstChild),!0):!1;case 6:return s=r.pendingProps===""||s.nodeType!==3?null:s,s!==null?(r.stateNode=s,ln=r,un=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=ns!==null?{id:Cr,overflow:Pr}:null,r.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=En(18,null,null,0),a.stateNode=s,a.return=r,r.child=a,ln=r,un=null,!0):!1;default:return!1}}function Ih(r){return(r.mode&1)!==0&&(r.flags&128)===0}function Sh(r){if(Xe){var s=un;if(s){var a=s;if(!cm(r,s)){if(Ih(r))throw Error(t(418));s=ri(a.nextSibling);var h=ln;s&&cm(r,s)?um(h,a):(r.flags=r.flags&-4097|2,Xe=!1,ln=r)}}else{if(Ih(r))throw Error(t(418));r.flags=r.flags&-4097|2,Xe=!1,ln=r}}}function hm(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;ln=r}function au(r){if(r!==ln)return!1;if(!Xe)return hm(r),Xe=!0,!1;var s;if((s=r.tag!==3)&&!(s=r.tag!==5)&&(s=r.type,s=s!=="head"&&s!=="body"&&!mh(r.type,r.memoizedProps)),s&&(s=un)){if(Ih(r))throw dm(),Error(t(418));for(;s;)um(r,s),s=ri(s.nextSibling)}if(hm(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="/$"){if(s===0){un=ri(r.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}r=r.nextSibling}un=null}}else un=ln?ri(r.stateNode.nextSibling):null;return!0}function dm(){for(var r=un;r;)r=ri(r.nextSibling)}function uo(){un=ln=null,Xe=!1}function Ah(r){xn===null?xn=[r]:xn.push(r)}var R0=_e.ReactCurrentBatchConfig;function Ca(r,s,a){if(r=a.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var h=a.stateNode}if(!h)throw Error(t(147,r));var d=h,p=""+r;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===p?s.ref:(s=function(v){var S=d.refs;v===null?delete S[p]:S[p]=v},s._stringRef=p,s)}if(typeof r!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,r))}return r}function lu(r,s){throw r=Object.prototype.toString.call(s),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r))}function fm(r){var s=r._init;return s(r._payload)}function pm(r){function s(O,N){if(r){var M=O.deletions;M===null?(O.deletions=[N],O.flags|=16):M.push(N)}}function a(O,N){if(!r)return null;for(;N!==null;)s(O,N),N=N.sibling;return null}function h(O,N){for(O=new Map;N!==null;)N.key!==null?O.set(N.key,N):O.set(N.index,N),N=N.sibling;return O}function d(O,N){return O=pi(O,N),O.index=0,O.sibling=null,O}function p(O,N,M){return O.index=M,r?(M=O.alternate,M!==null?(M=M.index,M<N?(O.flags|=2,N):M):(O.flags|=2,N)):(O.flags|=1048576,N)}function v(O){return r&&O.alternate===null&&(O.flags|=2),O}function S(O,N,M,J){return N===null||N.tag!==6?(N=gd(M,O.mode,J),N.return=O,N):(N=d(N,M),N.return=O,N)}function P(O,N,M,J){var ce=M.type;return ce===k?Q(O,N,M.props.children,J,M.key):N!==null&&(N.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===Vt&&fm(ce)===N.type)?(J=d(N,M.props),J.ref=Ca(O,N,M),J.return=O,J):(J=Du(M.type,M.key,M.props,null,O.mode,J),J.ref=Ca(O,N,M),J.return=O,J)}function j(O,N,M,J){return N===null||N.tag!==4||N.stateNode.containerInfo!==M.containerInfo||N.stateNode.implementation!==M.implementation?(N=yd(M,O.mode,J),N.return=O,N):(N=d(N,M.children||[]),N.return=O,N)}function Q(O,N,M,J,ce){return N===null||N.tag!==7?(N=hs(M,O.mode,J,ce),N.return=O,N):(N=d(N,M),N.return=O,N)}function Y(O,N,M){if(typeof N=="string"&&N!==""||typeof N=="number")return N=gd(""+N,O.mode,M),N.return=O,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case be:return M=Du(N.type,N.key,N.props,null,O.mode,M),M.ref=Ca(O,null,N),M.return=O,M;case Re:return N=yd(N,O.mode,M),N.return=O,N;case Vt:var J=N._init;return Y(O,J(N._payload),M)}if(st(N)||pe(N))return N=hs(N,O.mode,M,null),N.return=O,N;lu(O,N)}return null}function K(O,N,M,J){var ce=N!==null?N.key:null;if(typeof M=="string"&&M!==""||typeof M=="number")return ce!==null?null:S(O,N,""+M,J);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case be:return M.key===ce?P(O,N,M,J):null;case Re:return M.key===ce?j(O,N,M,J):null;case Vt:return ce=M._init,K(O,N,ce(M._payload),J)}if(st(M)||pe(M))return ce!==null?null:Q(O,N,M,J,null);lu(O,M)}return null}function te(O,N,M,J,ce){if(typeof J=="string"&&J!==""||typeof J=="number")return O=O.get(M)||null,S(N,O,""+J,ce);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case be:return O=O.get(J.key===null?M:J.key)||null,P(N,O,J,ce);case Re:return O=O.get(J.key===null?M:J.key)||null,j(N,O,J,ce);case Vt:var me=J._init;return te(O,N,M,me(J._payload),ce)}if(st(J)||pe(J))return O=O.get(M)||null,Q(N,O,J,ce,null);lu(N,J)}return null}function le(O,N,M,J){for(var ce=null,me=null,ge=N,ve=N=0,St=null;ge!==null&&ve<M.length;ve++){ge.index>ve?(St=ge,ge=null):St=ge.sibling;var Me=K(O,ge,M[ve],J);if(Me===null){ge===null&&(ge=St);break}r&&ge&&Me.alternate===null&&s(O,ge),N=p(Me,N,ve),me===null?ce=Me:me.sibling=Me,me=Me,ge=St}if(ve===M.length)return a(O,ge),Xe&&rs(O,ve),ce;if(ge===null){for(;ve<M.length;ve++)ge=Y(O,M[ve],J),ge!==null&&(N=p(ge,N,ve),me===null?ce=ge:me.sibling=ge,me=ge);return Xe&&rs(O,ve),ce}for(ge=h(O,ge);ve<M.length;ve++)St=te(ge,O,ve,M[ve],J),St!==null&&(r&&St.alternate!==null&&ge.delete(St.key===null?ve:St.key),N=p(St,N,ve),me===null?ce=St:me.sibling=St,me=St);return r&&ge.forEach(function(mi){return s(O,mi)}),Xe&&rs(O,ve),ce}function ue(O,N,M,J){var ce=pe(M);if(typeof ce!="function")throw Error(t(150));if(M=ce.call(M),M==null)throw Error(t(151));for(var me=ce=null,ge=N,ve=N=0,St=null,Me=M.next();ge!==null&&!Me.done;ve++,Me=M.next()){ge.index>ve?(St=ge,ge=null):St=ge.sibling;var mi=K(O,ge,Me.value,J);if(mi===null){ge===null&&(ge=St);break}r&&ge&&mi.alternate===null&&s(O,ge),N=p(mi,N,ve),me===null?ce=mi:me.sibling=mi,me=mi,ge=St}if(Me.done)return a(O,ge),Xe&&rs(O,ve),ce;if(ge===null){for(;!Me.done;ve++,Me=M.next())Me=Y(O,Me.value,J),Me!==null&&(N=p(Me,N,ve),me===null?ce=Me:me.sibling=Me,me=Me);return Xe&&rs(O,ve),ce}for(ge=h(O,ge);!Me.done;ve++,Me=M.next())Me=te(ge,O,ve,Me.value,J),Me!==null&&(r&&Me.alternate!==null&&ge.delete(Me.key===null?ve:Me.key),N=p(Me,N,ve),me===null?ce=Me:me.sibling=Me,me=Me);return r&&ge.forEach(function(sT){return s(O,sT)}),Xe&&rs(O,ve),ce}function at(O,N,M,J){if(typeof M=="object"&&M!==null&&M.type===k&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case be:e:{for(var ce=M.key,me=N;me!==null;){if(me.key===ce){if(ce=M.type,ce===k){if(me.tag===7){a(O,me.sibling),N=d(me,M.props.children),N.return=O,O=N;break e}}else if(me.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===Vt&&fm(ce)===me.type){a(O,me.sibling),N=d(me,M.props),N.ref=Ca(O,me,M),N.return=O,O=N;break e}a(O,me);break}else s(O,me);me=me.sibling}M.type===k?(N=hs(M.props.children,O.mode,J,M.key),N.return=O,O=N):(J=Du(M.type,M.key,M.props,null,O.mode,J),J.ref=Ca(O,N,M),J.return=O,O=J)}return v(O);case Re:e:{for(me=M.key;N!==null;){if(N.key===me)if(N.tag===4&&N.stateNode.containerInfo===M.containerInfo&&N.stateNode.implementation===M.implementation){a(O,N.sibling),N=d(N,M.children||[]),N.return=O,O=N;break e}else{a(O,N);break}else s(O,N);N=N.sibling}N=yd(M,O.mode,J),N.return=O,O=N}return v(O);case Vt:return me=M._init,at(O,N,me(M._payload),J)}if(st(M))return le(O,N,M,J);if(pe(M))return ue(O,N,M,J);lu(O,M)}return typeof M=="string"&&M!==""||typeof M=="number"?(M=""+M,N!==null&&N.tag===6?(a(O,N.sibling),N=d(N,M),N.return=O,O=N):(a(O,N),N=gd(M,O.mode,J),N.return=O,O=N),v(O)):a(O,N)}return at}var co=pm(!0),mm=pm(!1),uu=ii(null),cu=null,ho=null,Rh=null;function Ch(){Rh=ho=cu=null}function Ph(r){var s=uu.current;Qe(uu),r._currentValue=s}function kh(r,s,a){for(;r!==null;){var h=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,h!==null&&(h.childLanes|=s)):h!==null&&(h.childLanes&s)!==s&&(h.childLanes|=s),r===a)break;r=r.return}}function fo(r,s){cu=r,Rh=ho=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&s)!==0&&(Yt=!0),r.firstContext=null)}function _n(r){var s=r._currentValue;if(Rh!==r)if(r={context:r,memoizedValue:s,next:null},ho===null){if(cu===null)throw Error(t(308));ho=r,cu.dependencies={lanes:0,firstContext:r}}else ho=ho.next=r;return s}var is=null;function xh(r){is===null?is=[r]:is.push(r)}function gm(r,s,a,h){var d=s.interleaved;return d===null?(a.next=a,xh(s)):(a.next=d.next,d.next=a),s.interleaved=a,kr(r,h)}function kr(r,s){r.lanes|=s;var a=r.alternate;for(a!==null&&(a.lanes|=s),a=r,r=r.return;r!==null;)r.childLanes|=s,a=r.alternate,a!==null&&(a.childLanes|=s),a=r,r=r.return;return a.tag===3?a.stateNode:null}var ai=!1;function Nh(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ym(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function xr(r,s){return{eventTime:r,lane:s,tag:0,payload:null,callback:null,next:null}}function li(r,s,a){var h=r.updateQueue;if(h===null)return null;if(h=h.shared,(Le&2)!==0){var d=h.pending;return d===null?s.next=s:(s.next=d.next,d.next=s),h.pending=s,kr(r,a)}return d=h.interleaved,d===null?(s.next=s,xh(h)):(s.next=d.next,d.next=s),h.interleaved=s,kr(r,a)}function hu(r,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var h=s.lanes;h&=r.pendingLanes,a|=h,s.lanes=a,la(r,a)}}function _m(r,s){var a=r.updateQueue,h=r.alternate;if(h!==null&&(h=h.updateQueue,a===h)){var d=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?d=p=v:p=p.next=v,a=a.next}while(a!==null);p===null?d=p=s:p=p.next=s}else d=p=s;a={baseState:h.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:h.shared,effects:h.effects},r.updateQueue=a;return}r=a.lastBaseUpdate,r===null?a.firstBaseUpdate=s:r.next=s,a.lastBaseUpdate=s}function du(r,s,a,h){var d=r.updateQueue;ai=!1;var p=d.firstBaseUpdate,v=d.lastBaseUpdate,S=d.shared.pending;if(S!==null){d.shared.pending=null;var P=S,j=P.next;P.next=null,v===null?p=j:v.next=j,v=P;var Q=r.alternate;Q!==null&&(Q=Q.updateQueue,S=Q.lastBaseUpdate,S!==v&&(S===null?Q.firstBaseUpdate=j:S.next=j,Q.lastBaseUpdate=P))}if(p!==null){var Y=d.baseState;v=0,Q=j=P=null,S=p;do{var K=S.lane,te=S.eventTime;if((h&K)===K){Q!==null&&(Q=Q.next={eventTime:te,lane:0,tag:S.tag,payload:S.payload,callback:S.callback,next:null});e:{var le=r,ue=S;switch(K=s,te=a,ue.tag){case 1:if(le=ue.payload,typeof le=="function"){Y=le.call(te,Y,K);break e}Y=le;break e;case 3:le.flags=le.flags&-65537|128;case 0:if(le=ue.payload,K=typeof le=="function"?le.call(te,Y,K):le,K==null)break e;Y=ie({},Y,K);break e;case 2:ai=!0}}S.callback!==null&&S.lane!==0&&(r.flags|=64,K=d.effects,K===null?d.effects=[S]:K.push(S))}else te={eventTime:te,lane:K,tag:S.tag,payload:S.payload,callback:S.callback,next:null},Q===null?(j=Q=te,P=Y):Q=Q.next=te,v|=K;if(S=S.next,S===null){if(S=d.shared.pending,S===null)break;K=S,S=K.next,K.next=null,d.lastBaseUpdate=K,d.shared.pending=null}}while(!0);if(Q===null&&(P=Y),d.baseState=P,d.firstBaseUpdate=j,d.lastBaseUpdate=Q,s=d.shared.interleaved,s!==null){d=s;do v|=d.lane,d=d.next;while(d!==s)}else p===null&&(d.shared.lanes=0);as|=v,r.lanes=v,r.memoizedState=Y}}function vm(r,s,a){if(r=s.effects,s.effects=null,r!==null)for(s=0;s<r.length;s++){var h=r[s],d=h.callback;if(d!==null){if(h.callback=null,h=a,typeof d!="function")throw Error(t(191,d));d.call(h)}}}var Pa={},ir=ii(Pa),ka=ii(Pa),xa=ii(Pa);function ss(r){if(r===Pa)throw Error(t(174));return r}function Dh(r,s){switch(We(xa,s),We(ka,r),We(ir,Pa),r=s.nodeType,r){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:bs(null,"");break;default:r=r===8?s.parentNode:s,s=r.namespaceURI||null,r=r.tagName,s=bs(s,r)}Qe(ir),We(ir,s)}function po(){Qe(ir),Qe(ka),Qe(xa)}function wm(r){ss(xa.current);var s=ss(ir.current),a=bs(s,r.type);s!==a&&(We(ka,r),We(ir,a))}function Vh(r){ka.current===r&&(Qe(ir),Qe(ka))}var Ze=ii(0);function fu(r){for(var s=r;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var bh=[];function Oh(){for(var r=0;r<bh.length;r++)bh[r]._workInProgressVersionPrimary=null;bh.length=0}var pu=_e.ReactCurrentDispatcher,Lh=_e.ReactCurrentBatchConfig,os=0,et=null,_t=null,Tt=null,mu=!1,Na=!1,Da=0,C0=0;function Lt(){throw Error(t(321))}function Mh(r,s){if(s===null)return!1;for(var a=0;a<s.length&&a<r.length;a++)if(!kn(r[a],s[a]))return!1;return!0}function Fh(r,s,a,h,d,p){if(os=p,et=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,pu.current=r===null||r.memoizedState===null?N0:D0,r=a(h,d),Na){p=0;do{if(Na=!1,Da=0,25<=p)throw Error(t(301));p+=1,Tt=_t=null,s.updateQueue=null,pu.current=V0,r=a(h,d)}while(Na)}if(pu.current=_u,s=_t!==null&&_t.next!==null,os=0,Tt=_t=et=null,mu=!1,s)throw Error(t(300));return r}function Uh(){var r=Da!==0;return Da=0,r}function sr(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tt===null?et.memoizedState=Tt=r:Tt=Tt.next=r,Tt}function vn(){if(_t===null){var r=et.alternate;r=r!==null?r.memoizedState:null}else r=_t.next;var s=Tt===null?et.memoizedState:Tt.next;if(s!==null)Tt=s,_t=r;else{if(r===null)throw Error(t(310));_t=r,r={memoizedState:_t.memoizedState,baseState:_t.baseState,baseQueue:_t.baseQueue,queue:_t.queue,next:null},Tt===null?et.memoizedState=Tt=r:Tt=Tt.next=r}return Tt}function Va(r,s){return typeof s=="function"?s(r):s}function jh(r){var s=vn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var h=_t,d=h.baseQueue,p=a.pending;if(p!==null){if(d!==null){var v=d.next;d.next=p.next,p.next=v}h.baseQueue=d=p,a.pending=null}if(d!==null){p=d.next,h=h.baseState;var S=v=null,P=null,j=p;do{var Q=j.lane;if((os&Q)===Q)P!==null&&(P=P.next={lane:0,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),h=j.hasEagerState?j.eagerState:r(h,j.action);else{var Y={lane:Q,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null};P===null?(S=P=Y,v=h):P=P.next=Y,et.lanes|=Q,as|=Q}j=j.next}while(j!==null&&j!==p);P===null?v=h:P.next=S,kn(h,s.memoizedState)||(Yt=!0),s.memoizedState=h,s.baseState=v,s.baseQueue=P,a.lastRenderedState=h}if(r=a.interleaved,r!==null){d=r;do p=d.lane,et.lanes|=p,as|=p,d=d.next;while(d!==r)}else d===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function zh(r){var s=vn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var h=a.dispatch,d=a.pending,p=s.memoizedState;if(d!==null){a.pending=null;var v=d=d.next;do p=r(p,v.action),v=v.next;while(v!==d);kn(p,s.memoizedState)||(Yt=!0),s.memoizedState=p,s.baseQueue===null&&(s.baseState=p),a.lastRenderedState=p}return[p,h]}function Em(){}function Tm(r,s){var a=et,h=vn(),d=s(),p=!kn(h.memoizedState,d);if(p&&(h.memoizedState=d,Yt=!0),h=h.queue,Bh(Am.bind(null,a,h,r),[r]),h.getSnapshot!==s||p||Tt!==null&&Tt.memoizedState.tag&1){if(a.flags|=2048,ba(9,Sm.bind(null,a,h,d,s),void 0,null),It===null)throw Error(t(349));(os&30)!==0||Im(a,s,d)}return d}function Im(r,s,a){r.flags|=16384,r={getSnapshot:s,value:a},s=et.updateQueue,s===null?(s={lastEffect:null,stores:null},et.updateQueue=s,s.stores=[r]):(a=s.stores,a===null?s.stores=[r]:a.push(r))}function Sm(r,s,a,h){s.value=a,s.getSnapshot=h,Rm(s)&&Cm(r)}function Am(r,s,a){return a(function(){Rm(s)&&Cm(r)})}function Rm(r){var s=r.getSnapshot;r=r.value;try{var a=s();return!kn(r,a)}catch{return!0}}function Cm(r){var s=kr(r,1);s!==null&&bn(s,r,1,-1)}function Pm(r){var s=sr();return typeof r=="function"&&(r=r()),s.memoizedState=s.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Va,lastRenderedState:r},s.queue=r,r=r.dispatch=x0.bind(null,et,r),[s.memoizedState,r]}function ba(r,s,a,h){return r={tag:r,create:s,destroy:a,deps:h,next:null},s=et.updateQueue,s===null?(s={lastEffect:null,stores:null},et.updateQueue=s,s.lastEffect=r.next=r):(a=s.lastEffect,a===null?s.lastEffect=r.next=r:(h=a.next,a.next=r,r.next=h,s.lastEffect=r)),r}function km(){return vn().memoizedState}function gu(r,s,a,h){var d=sr();et.flags|=r,d.memoizedState=ba(1|s,a,void 0,h===void 0?null:h)}function yu(r,s,a,h){var d=vn();h=h===void 0?null:h;var p=void 0;if(_t!==null){var v=_t.memoizedState;if(p=v.destroy,h!==null&&Mh(h,v.deps)){d.memoizedState=ba(s,a,p,h);return}}et.flags|=r,d.memoizedState=ba(1|s,a,p,h)}function xm(r,s){return gu(8390656,8,r,s)}function Bh(r,s){return yu(2048,8,r,s)}function Nm(r,s){return yu(4,2,r,s)}function Dm(r,s){return yu(4,4,r,s)}function Vm(r,s){if(typeof s=="function")return r=r(),s(r),function(){s(null)};if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function bm(r,s,a){return a=a!=null?a.concat([r]):null,yu(4,4,Vm.bind(null,s,r),a)}function $h(){}function Om(r,s){var a=vn();s=s===void 0?null:s;var h=a.memoizedState;return h!==null&&s!==null&&Mh(s,h[1])?h[0]:(a.memoizedState=[r,s],r)}function Lm(r,s){var a=vn();s=s===void 0?null:s;var h=a.memoizedState;return h!==null&&s!==null&&Mh(s,h[1])?h[0]:(r=r(),a.memoizedState=[r,s],r)}function Mm(r,s,a){return(os&21)===0?(r.baseState&&(r.baseState=!1,Yt=!0),r.memoizedState=a):(kn(a,s)||(a=oa(),et.lanes|=a,as|=a,r.baseState=!0),s)}function P0(r,s){var a=De;De=a!==0&&4>a?a:4,r(!0);var h=Lh.transition;Lh.transition={};try{r(!1),s()}finally{De=a,Lh.transition=h}}function Fm(){return vn().memoizedState}function k0(r,s,a){var h=di(r);if(a={lane:h,action:a,hasEagerState:!1,eagerState:null,next:null},Um(r))jm(s,a);else if(a=gm(r,s,a,h),a!==null){var d=Wt();bn(a,r,h,d),zm(a,s,h)}}function x0(r,s,a){var h=di(r),d={lane:h,action:a,hasEagerState:!1,eagerState:null,next:null};if(Um(r))jm(s,d);else{var p=r.alternate;if(r.lanes===0&&(p===null||p.lanes===0)&&(p=s.lastRenderedReducer,p!==null))try{var v=s.lastRenderedState,S=p(v,a);if(d.hasEagerState=!0,d.eagerState=S,kn(S,v)){var P=s.interleaved;P===null?(d.next=d,xh(s)):(d.next=P.next,P.next=d),s.interleaved=d;return}}catch{}finally{}a=gm(r,s,d,h),a!==null&&(d=Wt(),bn(a,r,h,d),zm(a,s,h))}}function Um(r){var s=r.alternate;return r===et||s!==null&&s===et}function jm(r,s){Na=mu=!0;var a=r.pending;a===null?s.next=s:(s.next=a.next,a.next=s),r.pending=s}function zm(r,s,a){if((a&4194240)!==0){var h=s.lanes;h&=r.pendingLanes,a|=h,s.lanes=a,la(r,a)}}var _u={readContext:_n,useCallback:Lt,useContext:Lt,useEffect:Lt,useImperativeHandle:Lt,useInsertionEffect:Lt,useLayoutEffect:Lt,useMemo:Lt,useReducer:Lt,useRef:Lt,useState:Lt,useDebugValue:Lt,useDeferredValue:Lt,useTransition:Lt,useMutableSource:Lt,useSyncExternalStore:Lt,useId:Lt,unstable_isNewReconciler:!1},N0={readContext:_n,useCallback:function(r,s){return sr().memoizedState=[r,s===void 0?null:s],r},useContext:_n,useEffect:xm,useImperativeHandle:function(r,s,a){return a=a!=null?a.concat([r]):null,gu(4194308,4,Vm.bind(null,s,r),a)},useLayoutEffect:function(r,s){return gu(4194308,4,r,s)},useInsertionEffect:function(r,s){return gu(4,2,r,s)},useMemo:function(r,s){var a=sr();return s=s===void 0?null:s,r=r(),a.memoizedState=[r,s],r},useReducer:function(r,s,a){var h=sr();return s=a!==void 0?a(s):s,h.memoizedState=h.baseState=s,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:s},h.queue=r,r=r.dispatch=k0.bind(null,et,r),[h.memoizedState,r]},useRef:function(r){var s=sr();return r={current:r},s.memoizedState=r},useState:Pm,useDebugValue:$h,useDeferredValue:function(r){return sr().memoizedState=r},useTransition:function(){var r=Pm(!1),s=r[0];return r=P0.bind(null,r[1]),sr().memoizedState=r,[s,r]},useMutableSource:function(){},useSyncExternalStore:function(r,s,a){var h=et,d=sr();if(Xe){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),It===null)throw Error(t(349));(os&30)!==0||Im(h,s,a)}d.memoizedState=a;var p={value:a,getSnapshot:s};return d.queue=p,xm(Am.bind(null,h,p,r),[r]),h.flags|=2048,ba(9,Sm.bind(null,h,p,a,s),void 0,null),a},useId:function(){var r=sr(),s=It.identifierPrefix;if(Xe){var a=Pr,h=Cr;a=(h&~(1<<32-nn(h)-1)).toString(32)+a,s=":"+s+"R"+a,a=Da++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=C0++,s=":"+s+"r"+a.toString(32)+":";return r.memoizedState=s},unstable_isNewReconciler:!1},D0={readContext:_n,useCallback:Om,useContext:_n,useEffect:Bh,useImperativeHandle:bm,useInsertionEffect:Nm,useLayoutEffect:Dm,useMemo:Lm,useReducer:jh,useRef:km,useState:function(){return jh(Va)},useDebugValue:$h,useDeferredValue:function(r){var s=vn();return Mm(s,_t.memoizedState,r)},useTransition:function(){var r=jh(Va)[0],s=vn().memoizedState;return[r,s]},useMutableSource:Em,useSyncExternalStore:Tm,useId:Fm,unstable_isNewReconciler:!1},V0={readContext:_n,useCallback:Om,useContext:_n,useEffect:Bh,useImperativeHandle:bm,useInsertionEffect:Nm,useLayoutEffect:Dm,useMemo:Lm,useReducer:zh,useRef:km,useState:function(){return zh(Va)},useDebugValue:$h,useDeferredValue:function(r){var s=vn();return _t===null?s.memoizedState=r:Mm(s,_t.memoizedState,r)},useTransition:function(){var r=zh(Va)[0],s=vn().memoizedState;return[r,s]},useMutableSource:Em,useSyncExternalStore:Tm,useId:Fm,unstable_isNewReconciler:!1};function Nn(r,s){if(r&&r.defaultProps){s=ie({},s),r=r.defaultProps;for(var a in r)s[a]===void 0&&(s[a]=r[a]);return s}return s}function qh(r,s,a,h){s=r.memoizedState,a=a(h,s),a=a==null?s:ie({},s,a),r.memoizedState=a,r.lanes===0&&(r.updateQueue.baseState=a)}var vu={isMounted:function(r){return(r=r._reactInternals)?Cn(r)===r:!1},enqueueSetState:function(r,s,a){r=r._reactInternals;var h=Wt(),d=di(r),p=xr(h,d);p.payload=s,a!=null&&(p.callback=a),s=li(r,p,d),s!==null&&(bn(s,r,d,h),hu(s,r,d))},enqueueReplaceState:function(r,s,a){r=r._reactInternals;var h=Wt(),d=di(r),p=xr(h,d);p.tag=1,p.payload=s,a!=null&&(p.callback=a),s=li(r,p,d),s!==null&&(bn(s,r,d,h),hu(s,r,d))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var a=Wt(),h=di(r),d=xr(a,h);d.tag=2,s!=null&&(d.callback=s),s=li(r,d,h),s!==null&&(bn(s,r,h,a),hu(s,r,h))}};function Bm(r,s,a,h,d,p,v){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(h,p,v):s.prototype&&s.prototype.isPureReactComponent?!wa(a,h)||!wa(d,p):!0}function $m(r,s,a){var h=!1,d=si,p=s.contextType;return typeof p=="object"&&p!==null?p=_n(p):(d=Qt(s)?ts:Ot.current,h=s.contextTypes,p=(h=h!=null)?oo(r,d):si),s=new s(a,p),r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=vu,r.stateNode=s,s._reactInternals=r,h&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=d,r.__reactInternalMemoizedMaskedChildContext=p),s}function qm(r,s,a,h){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,h),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,h),s.state!==r&&vu.enqueueReplaceState(s,s.state,null)}function Wh(r,s,a,h){var d=r.stateNode;d.props=a,d.state=r.memoizedState,d.refs={},Nh(r);var p=s.contextType;typeof p=="object"&&p!==null?d.context=_n(p):(p=Qt(s)?ts:Ot.current,d.context=oo(r,p)),d.state=r.memoizedState,p=s.getDerivedStateFromProps,typeof p=="function"&&(qh(r,s,p,a),d.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(s=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),s!==d.state&&vu.enqueueReplaceState(d,d.state,null),du(r,a,d,h),d.state=r.memoizedState),typeof d.componentDidMount=="function"&&(r.flags|=4194308)}function mo(r,s){try{var a="",h=s;do a+=Ce(h),h=h.return;while(h);var d=a}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:r,source:s,stack:d,digest:null}}function Hh(r,s,a){return{value:r,source:null,stack:a??null,digest:s??null}}function Gh(r,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var b0=typeof WeakMap=="function"?WeakMap:Map;function Wm(r,s,a){a=xr(-1,a),a.tag=3,a.payload={element:null};var h=s.value;return a.callback=function(){Ru||(Ru=!0,ld=h),Gh(r,s)},a}function Hm(r,s,a){a=xr(-1,a),a.tag=3;var h=r.type.getDerivedStateFromError;if(typeof h=="function"){var d=s.value;a.payload=function(){return h(d)},a.callback=function(){Gh(r,s)}}var p=r.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){Gh(r,s),typeof h!="function"&&(ci===null?ci=new Set([this]):ci.add(this));var v=s.stack;this.componentDidCatch(s.value,{componentStack:v!==null?v:""})}),a}function Gm(r,s,a){var h=r.pingCache;if(h===null){h=r.pingCache=new b0;var d=new Set;h.set(s,d)}else d=h.get(s),d===void 0&&(d=new Set,h.set(s,d));d.has(a)||(d.add(a),r=K0.bind(null,r,s,a),s.then(r,r))}function Km(r){do{var s;if((s=r.tag===13)&&(s=r.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return r;r=r.return}while(r!==null);return null}function Qm(r,s,a,h,d){return(r.mode&1)===0?(r===s?r.flags|=65536:(r.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=xr(-1,1),s.tag=2,li(a,s,1))),a.lanes|=1),r):(r.flags|=65536,r.lanes=d,r)}var O0=_e.ReactCurrentOwner,Yt=!1;function qt(r,s,a,h){s.child=r===null?mm(s,null,a,h):co(s,r.child,a,h)}function Ym(r,s,a,h,d){a=a.render;var p=s.ref;return fo(s,d),h=Fh(r,s,a,h,p,d),a=Uh(),r!==null&&!Yt?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~d,Nr(r,s,d)):(Xe&&a&&Eh(s),s.flags|=1,qt(r,s,h,d),s.child)}function Jm(r,s,a,h,d){if(r===null){var p=a.type;return typeof p=="function"&&!md(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=p,Xm(r,s,p,h,d)):(r=Du(a.type,null,h,s,s.mode,d),r.ref=s.ref,r.return=s,s.child=r)}if(p=r.child,(r.lanes&d)===0){var v=p.memoizedProps;if(a=a.compare,a=a!==null?a:wa,a(v,h)&&r.ref===s.ref)return Nr(r,s,d)}return s.flags|=1,r=pi(p,h),r.ref=s.ref,r.return=s,s.child=r}function Xm(r,s,a,h,d){if(r!==null){var p=r.memoizedProps;if(wa(p,h)&&r.ref===s.ref)if(Yt=!1,s.pendingProps=h=p,(r.lanes&d)!==0)(r.flags&131072)!==0&&(Yt=!0);else return s.lanes=r.lanes,Nr(r,s,d)}return Kh(r,s,a,h,d)}function Zm(r,s,a){var h=s.pendingProps,d=h.children,p=r!==null?r.memoizedState:null;if(h.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},We(yo,cn),cn|=a;else{if((a&1073741824)===0)return r=p!==null?p.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:r,cachePool:null,transitions:null},s.updateQueue=null,We(yo,cn),cn|=r,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=p!==null?p.baseLanes:a,We(yo,cn),cn|=h}else p!==null?(h=p.baseLanes|a,s.memoizedState=null):h=a,We(yo,cn),cn|=h;return qt(r,s,d,a),s.child}function eg(r,s){var a=s.ref;(r===null&&a!==null||r!==null&&r.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function Kh(r,s,a,h,d){var p=Qt(a)?ts:Ot.current;return p=oo(s,p),fo(s,d),a=Fh(r,s,a,h,p,d),h=Uh(),r!==null&&!Yt?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~d,Nr(r,s,d)):(Xe&&h&&Eh(s),s.flags|=1,qt(r,s,a,d),s.child)}function tg(r,s,a,h,d){if(Qt(a)){var p=!0;ru(s)}else p=!1;if(fo(s,d),s.stateNode===null)Eu(r,s),$m(s,a,h),Wh(s,a,h,d),h=!0;else if(r===null){var v=s.stateNode,S=s.memoizedProps;v.props=S;var P=v.context,j=a.contextType;typeof j=="object"&&j!==null?j=_n(j):(j=Qt(a)?ts:Ot.current,j=oo(s,j));var Q=a.getDerivedStateFromProps,Y=typeof Q=="function"||typeof v.getSnapshotBeforeUpdate=="function";Y||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(S!==h||P!==j)&&qm(s,v,h,j),ai=!1;var K=s.memoizedState;v.state=K,du(s,h,v,d),P=s.memoizedState,S!==h||K!==P||Kt.current||ai?(typeof Q=="function"&&(qh(s,a,Q,h),P=s.memoizedState),(S=ai||Bm(s,a,S,h,K,P,j))?(Y||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(s.flags|=4194308)):(typeof v.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=h,s.memoizedState=P),v.props=h,v.state=P,v.context=j,h=S):(typeof v.componentDidMount=="function"&&(s.flags|=4194308),h=!1)}else{v=s.stateNode,ym(r,s),S=s.memoizedProps,j=s.type===s.elementType?S:Nn(s.type,S),v.props=j,Y=s.pendingProps,K=v.context,P=a.contextType,typeof P=="object"&&P!==null?P=_n(P):(P=Qt(a)?ts:Ot.current,P=oo(s,P));var te=a.getDerivedStateFromProps;(Q=typeof te=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(S!==Y||K!==P)&&qm(s,v,h,P),ai=!1,K=s.memoizedState,v.state=K,du(s,h,v,d);var le=s.memoizedState;S!==Y||K!==le||Kt.current||ai?(typeof te=="function"&&(qh(s,a,te,h),le=s.memoizedState),(j=ai||Bm(s,a,j,h,K,le,P)||!1)?(Q||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(h,le,P),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(h,le,P)),typeof v.componentDidUpdate=="function"&&(s.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof v.componentDidUpdate!="function"||S===r.memoizedProps&&K===r.memoizedState||(s.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||S===r.memoizedProps&&K===r.memoizedState||(s.flags|=1024),s.memoizedProps=h,s.memoizedState=le),v.props=h,v.state=le,v.context=P,h=j):(typeof v.componentDidUpdate!="function"||S===r.memoizedProps&&K===r.memoizedState||(s.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||S===r.memoizedProps&&K===r.memoizedState||(s.flags|=1024),h=!1)}return Qh(r,s,a,h,p,d)}function Qh(r,s,a,h,d,p){eg(r,s);var v=(s.flags&128)!==0;if(!h&&!v)return d&&om(s,a,!1),Nr(r,s,p);h=s.stateNode,O0.current=s;var S=v&&typeof a.getDerivedStateFromError!="function"?null:h.render();return s.flags|=1,r!==null&&v?(s.child=co(s,r.child,null,p),s.child=co(s,null,S,p)):qt(r,s,S,p),s.memoizedState=h.state,d&&om(s,a,!0),s.child}function ng(r){var s=r.stateNode;s.pendingContext?im(r,s.pendingContext,s.pendingContext!==s.context):s.context&&im(r,s.context,!1),Dh(r,s.containerInfo)}function rg(r,s,a,h,d){return uo(),Ah(d),s.flags|=256,qt(r,s,a,h),s.child}var Yh={dehydrated:null,treeContext:null,retryLane:0};function Jh(r){return{baseLanes:r,cachePool:null,transitions:null}}function ig(r,s,a){var h=s.pendingProps,d=Ze.current,p=!1,v=(s.flags&128)!==0,S;if((S=v)||(S=r!==null&&r.memoizedState===null?!1:(d&2)!==0),S?(p=!0,s.flags&=-129):(r===null||r.memoizedState!==null)&&(d|=1),We(Ze,d&1),r===null)return Sh(s),r=s.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((s.mode&1)===0?s.lanes=1:r.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(v=h.children,r=h.fallback,p?(h=s.mode,p=s.child,v={mode:"hidden",children:v},(h&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=v):p=Vu(v,h,0,null),r=hs(r,h,a,null),p.return=s,r.return=s,p.sibling=r,s.child=p,s.child.memoizedState=Jh(a),s.memoizedState=Yh,r):Xh(s,v));if(d=r.memoizedState,d!==null&&(S=d.dehydrated,S!==null))return L0(r,s,v,h,S,d,a);if(p){p=h.fallback,v=s.mode,d=r.child,S=d.sibling;var P={mode:"hidden",children:h.children};return(v&1)===0&&s.child!==d?(h=s.child,h.childLanes=0,h.pendingProps=P,s.deletions=null):(h=pi(d,P),h.subtreeFlags=d.subtreeFlags&14680064),S!==null?p=pi(S,p):(p=hs(p,v,a,null),p.flags|=2),p.return=s,h.return=s,h.sibling=p,s.child=h,h=p,p=s.child,v=r.child.memoizedState,v=v===null?Jh(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},p.memoizedState=v,p.childLanes=r.childLanes&~a,s.memoizedState=Yh,h}return p=r.child,r=p.sibling,h=pi(p,{mode:"visible",children:h.children}),(s.mode&1)===0&&(h.lanes=a),h.return=s,h.sibling=null,r!==null&&(a=s.deletions,a===null?(s.deletions=[r],s.flags|=16):a.push(r)),s.child=h,s.memoizedState=null,h}function Xh(r,s){return s=Vu({mode:"visible",children:s},r.mode,0,null),s.return=r,r.child=s}function wu(r,s,a,h){return h!==null&&Ah(h),co(s,r.child,null,a),r=Xh(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function L0(r,s,a,h,d,p,v){if(a)return s.flags&256?(s.flags&=-257,h=Hh(Error(t(422))),wu(r,s,v,h)):s.memoizedState!==null?(s.child=r.child,s.flags|=128,null):(p=h.fallback,d=s.mode,h=Vu({mode:"visible",children:h.children},d,0,null),p=hs(p,d,v,null),p.flags|=2,h.return=s,p.return=s,h.sibling=p,s.child=h,(s.mode&1)!==0&&co(s,r.child,null,v),s.child.memoizedState=Jh(v),s.memoizedState=Yh,p);if((s.mode&1)===0)return wu(r,s,v,null);if(d.data==="$!"){if(h=d.nextSibling&&d.nextSibling.dataset,h)var S=h.dgst;return h=S,p=Error(t(419)),h=Hh(p,h,void 0),wu(r,s,v,h)}if(S=(v&r.childLanes)!==0,Yt||S){if(h=It,h!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(h.suspendedLanes|v))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,kr(r,d),bn(h,r,d,-1))}return pd(),h=Hh(Error(t(421))),wu(r,s,v,h)}return d.data==="$?"?(s.flags|=128,s.child=r.child,s=Q0.bind(null,r),d._reactRetry=s,null):(r=p.treeContext,un=ri(d.nextSibling),ln=s,Xe=!0,xn=null,r!==null&&(gn[yn++]=Cr,gn[yn++]=Pr,gn[yn++]=ns,Cr=r.id,Pr=r.overflow,ns=s),s=Xh(s,h.children),s.flags|=4096,s)}function sg(r,s,a){r.lanes|=s;var h=r.alternate;h!==null&&(h.lanes|=s),kh(r.return,s,a)}function Zh(r,s,a,h,d){var p=r.memoizedState;p===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:h,tail:a,tailMode:d}:(p.isBackwards=s,p.rendering=null,p.renderingStartTime=0,p.last=h,p.tail=a,p.tailMode=d)}function og(r,s,a){var h=s.pendingProps,d=h.revealOrder,p=h.tail;if(qt(r,s,h.children,a),h=Ze.current,(h&2)!==0)h=h&1|2,s.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&sg(r,a,s);else if(r.tag===19)sg(r,a,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}h&=1}if(We(Ze,h),(s.mode&1)===0)s.memoizedState=null;else switch(d){case"forwards":for(a=s.child,d=null;a!==null;)r=a.alternate,r!==null&&fu(r)===null&&(d=a),a=a.sibling;a=d,a===null?(d=s.child,s.child=null):(d=a.sibling,a.sibling=null),Zh(s,!1,d,a,p);break;case"backwards":for(a=null,d=s.child,s.child=null;d!==null;){if(r=d.alternate,r!==null&&fu(r)===null){s.child=d;break}r=d.sibling,d.sibling=a,a=d,d=r}Zh(s,!0,a,null,p);break;case"together":Zh(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Eu(r,s){(s.mode&1)===0&&r!==null&&(r.alternate=null,s.alternate=null,s.flags|=2)}function Nr(r,s,a){if(r!==null&&(s.dependencies=r.dependencies),as|=s.lanes,(a&s.childLanes)===0)return null;if(r!==null&&s.child!==r.child)throw Error(t(153));if(s.child!==null){for(r=s.child,a=pi(r,r.pendingProps),s.child=a,a.return=s;r.sibling!==null;)r=r.sibling,a=a.sibling=pi(r,r.pendingProps),a.return=s;a.sibling=null}return s.child}function M0(r,s,a){switch(s.tag){case 3:ng(s),uo();break;case 5:wm(s);break;case 1:Qt(s.type)&&ru(s);break;case 4:Dh(s,s.stateNode.containerInfo);break;case 10:var h=s.type._context,d=s.memoizedProps.value;We(uu,h._currentValue),h._currentValue=d;break;case 13:if(h=s.memoizedState,h!==null)return h.dehydrated!==null?(We(Ze,Ze.current&1),s.flags|=128,null):(a&s.child.childLanes)!==0?ig(r,s,a):(We(Ze,Ze.current&1),r=Nr(r,s,a),r!==null?r.sibling:null);We(Ze,Ze.current&1);break;case 19:if(h=(a&s.childLanes)!==0,(r.flags&128)!==0){if(h)return og(r,s,a);s.flags|=128}if(d=s.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),We(Ze,Ze.current),h)break;return null;case 22:case 23:return s.lanes=0,Zm(r,s,a)}return Nr(r,s,a)}var ag,ed,lg,ug;ag=function(r,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)r.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},ed=function(){},lg=function(r,s,a,h){var d=r.memoizedProps;if(d!==h){r=s.stateNode,ss(ir.current);var p=null;switch(a){case"input":d=Ds(r,d),h=Ds(r,h),p=[];break;case"select":d=ie({},d,{value:void 0}),h=ie({},h,{value:void 0}),p=[];break;case"textarea":d=Qo(r,d),h=Qo(r,h),p=[];break;default:typeof d.onClick!="function"&&typeof h.onClick=="function"&&(r.onclick=eu)}Rn(a,h);var v;a=null;for(j in d)if(!h.hasOwnProperty(j)&&d.hasOwnProperty(j)&&d[j]!=null)if(j==="style"){var S=d[j];for(v in S)S.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else j!=="dangerouslySetInnerHTML"&&j!=="children"&&j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&j!=="autoFocus"&&(o.hasOwnProperty(j)?p||(p=[]):(p=p||[]).push(j,null));for(j in h){var P=h[j];if(S=d!=null?d[j]:void 0,h.hasOwnProperty(j)&&P!==S&&(P!=null||S!=null))if(j==="style")if(S){for(v in S)!S.hasOwnProperty(v)||P&&P.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in P)P.hasOwnProperty(v)&&S[v]!==P[v]&&(a||(a={}),a[v]=P[v])}else a||(p||(p=[]),p.push(j,a)),a=P;else j==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,S=S?S.__html:void 0,P!=null&&S!==P&&(p=p||[]).push(j,P)):j==="children"?typeof P!="string"&&typeof P!="number"||(p=p||[]).push(j,""+P):j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&(o.hasOwnProperty(j)?(P!=null&&j==="onScroll"&&Ke("scroll",r),p||S===P||(p=[])):(p=p||[]).push(j,P))}a&&(p=p||[]).push("style",a);var j=p;(s.updateQueue=j)&&(s.flags|=4)}},ug=function(r,s,a,h){a!==h&&(s.flags|=4)};function Oa(r,s){if(!Xe)switch(r.tailMode){case"hidden":s=r.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?r.tail=null:a.sibling=null;break;case"collapsed":a=r.tail;for(var h=null;a!==null;)a.alternate!==null&&(h=a),a=a.sibling;h===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:h.sibling=null}}function Mt(r){var s=r.alternate!==null&&r.alternate.child===r.child,a=0,h=0;if(s)for(var d=r.child;d!==null;)a|=d.lanes|d.childLanes,h|=d.subtreeFlags&14680064,h|=d.flags&14680064,d.return=r,d=d.sibling;else for(d=r.child;d!==null;)a|=d.lanes|d.childLanes,h|=d.subtreeFlags,h|=d.flags,d.return=r,d=d.sibling;return r.subtreeFlags|=h,r.childLanes=a,s}function F0(r,s,a){var h=s.pendingProps;switch(Th(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mt(s),null;case 1:return Qt(s.type)&&nu(),Mt(s),null;case 3:return h=s.stateNode,po(),Qe(Kt),Qe(Ot),Oh(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(r===null||r.child===null)&&(au(s)?s.flags|=4:r===null||r.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,xn!==null&&(hd(xn),xn=null))),ed(r,s),Mt(s),null;case 5:Vh(s);var d=ss(xa.current);if(a=s.type,r!==null&&s.stateNode!=null)lg(r,s,a,h,d),r.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!h){if(s.stateNode===null)throw Error(t(166));return Mt(s),null}if(r=ss(ir.current),au(s)){h=s.stateNode,a=s.type;var p=s.memoizedProps;switch(h[rr]=s,h[Aa]=p,r=(s.mode&1)!==0,a){case"dialog":Ke("cancel",h),Ke("close",h);break;case"iframe":case"object":case"embed":Ke("load",h);break;case"video":case"audio":for(d=0;d<Ta.length;d++)Ke(Ta[d],h);break;case"source":Ke("error",h);break;case"img":case"image":case"link":Ke("error",h),Ke("load",h);break;case"details":Ke("toggle",h);break;case"input":Al(h,p),Ke("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!p.multiple},Ke("invalid",h);break;case"textarea":Yo(h,p),Ke("invalid",h)}Rn(a,p),d=null;for(var v in p)if(p.hasOwnProperty(v)){var S=p[v];v==="children"?typeof S=="string"?h.textContent!==S&&(p.suppressHydrationWarning!==!0&&Zl(h.textContent,S,r),d=["children",S]):typeof S=="number"&&h.textContent!==""+S&&(p.suppressHydrationWarning!==!0&&Zl(h.textContent,S,r),d=["children",""+S]):o.hasOwnProperty(v)&&S!=null&&v==="onScroll"&&Ke("scroll",h)}switch(a){case"input":Ns(h),Ko(h,p,!0);break;case"textarea":Ns(h),zr(h);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(h.onclick=eu)}h=d,s.updateQueue=h,h!==null&&(s.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=Jo(a)),r==="http://www.w3.org/1999/xhtml"?a==="script"?(r=v.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof h.is=="string"?r=v.createElement(a,{is:h.is}):(r=v.createElement(a),a==="select"&&(v=r,h.multiple?v.multiple=!0:h.size&&(v.size=h.size))):r=v.createElementNS(r,a),r[rr]=s,r[Aa]=h,ag(r,s,!1,!1),s.stateNode=r;e:{switch(v=Ls(a,h),a){case"dialog":Ke("cancel",r),Ke("close",r),d=h;break;case"iframe":case"object":case"embed":Ke("load",r),d=h;break;case"video":case"audio":for(d=0;d<Ta.length;d++)Ke(Ta[d],r);d=h;break;case"source":Ke("error",r),d=h;break;case"img":case"image":case"link":Ke("error",r),Ke("load",r),d=h;break;case"details":Ke("toggle",r),d=h;break;case"input":Al(r,h),d=Ds(r,h),Ke("invalid",r);break;case"option":d=h;break;case"select":r._wrapperState={wasMultiple:!!h.multiple},d=ie({},h,{value:void 0}),Ke("invalid",r);break;case"textarea":Yo(r,h),d=Qo(r,h),Ke("invalid",r);break;default:d=h}Rn(a,d),S=d;for(p in S)if(S.hasOwnProperty(p)){var P=S[p];p==="style"?Os(r,P):p==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,P!=null&&Cl(r,P)):p==="children"?typeof P=="string"?(a!=="textarea"||P!=="")&&ji(r,P):typeof P=="number"&&ji(r,""+P):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?P!=null&&p==="onScroll"&&Ke("scroll",r):P!=null&&he(r,p,P,v))}switch(a){case"input":Ns(r),Ko(r,h,!1);break;case"textarea":Ns(r),zr(r);break;case"option":h.value!=null&&r.setAttribute("value",""+Oe(h.value));break;case"select":r.multiple=!!h.multiple,p=h.value,p!=null?An(r,!!h.multiple,p,!1):h.defaultValue!=null&&An(r,!!h.multiple,h.defaultValue,!0);break;default:typeof d.onClick=="function"&&(r.onclick=eu)}switch(a){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Mt(s),null;case 6:if(r&&s.stateNode!=null)ug(r,s,r.memoizedProps,h);else{if(typeof h!="string"&&s.stateNode===null)throw Error(t(166));if(a=ss(xa.current),ss(ir.current),au(s)){if(h=s.stateNode,a=s.memoizedProps,h[rr]=s,(p=h.nodeValue!==a)&&(r=ln,r!==null))switch(r.tag){case 3:Zl(h.nodeValue,a,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&Zl(h.nodeValue,a,(r.mode&1)!==0)}p&&(s.flags|=4)}else h=(a.nodeType===9?a:a.ownerDocument).createTextNode(h),h[rr]=s,s.stateNode=h}return Mt(s),null;case 13:if(Qe(Ze),h=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(Xe&&un!==null&&(s.mode&1)!==0&&(s.flags&128)===0)dm(),uo(),s.flags|=98560,p=!1;else if(p=au(s),h!==null&&h.dehydrated!==null){if(r===null){if(!p)throw Error(t(318));if(p=s.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(t(317));p[rr]=s}else uo(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Mt(s),p=!1}else xn!==null&&(hd(xn),xn=null),p=!0;if(!p)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=a,s):(h=h!==null,h!==(r!==null&&r.memoizedState!==null)&&h&&(s.child.flags|=8192,(s.mode&1)!==0&&(r===null||(Ze.current&1)!==0?vt===0&&(vt=3):pd())),s.updateQueue!==null&&(s.flags|=4),Mt(s),null);case 4:return po(),ed(r,s),r===null&&Ia(s.stateNode.containerInfo),Mt(s),null;case 10:return Ph(s.type._context),Mt(s),null;case 17:return Qt(s.type)&&nu(),Mt(s),null;case 19:if(Qe(Ze),p=s.memoizedState,p===null)return Mt(s),null;if(h=(s.flags&128)!==0,v=p.rendering,v===null)if(h)Oa(p,!1);else{if(vt!==0||r!==null&&(r.flags&128)!==0)for(r=s.child;r!==null;){if(v=fu(r),v!==null){for(s.flags|=128,Oa(p,!1),h=v.updateQueue,h!==null&&(s.updateQueue=h,s.flags|=4),s.subtreeFlags=0,h=a,a=s.child;a!==null;)p=a,r=h,p.flags&=14680066,v=p.alternate,v===null?(p.childLanes=0,p.lanes=r,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=v.childLanes,p.lanes=v.lanes,p.child=v.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=v.memoizedProps,p.memoizedState=v.memoizedState,p.updateQueue=v.updateQueue,p.type=v.type,r=v.dependencies,p.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),a=a.sibling;return We(Ze,Ze.current&1|2),s.child}r=r.sibling}p.tail!==null&&Ge()>_o&&(s.flags|=128,h=!0,Oa(p,!1),s.lanes=4194304)}else{if(!h)if(r=fu(v),r!==null){if(s.flags|=128,h=!0,a=r.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),Oa(p,!0),p.tail===null&&p.tailMode==="hidden"&&!v.alternate&&!Xe)return Mt(s),null}else 2*Ge()-p.renderingStartTime>_o&&a!==1073741824&&(s.flags|=128,h=!0,Oa(p,!1),s.lanes=4194304);p.isBackwards?(v.sibling=s.child,s.child=v):(a=p.last,a!==null?a.sibling=v:s.child=v,p.last=v)}return p.tail!==null?(s=p.tail,p.rendering=s,p.tail=s.sibling,p.renderingStartTime=Ge(),s.sibling=null,a=Ze.current,We(Ze,h?a&1|2:a&1),s):(Mt(s),null);case 22:case 23:return fd(),h=s.memoizedState!==null,r!==null&&r.memoizedState!==null!==h&&(s.flags|=8192),h&&(s.mode&1)!==0?(cn&1073741824)!==0&&(Mt(s),s.subtreeFlags&6&&(s.flags|=8192)):Mt(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function U0(r,s){switch(Th(s),s.tag){case 1:return Qt(s.type)&&nu(),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return po(),Qe(Kt),Qe(Ot),Oh(),r=s.flags,(r&65536)!==0&&(r&128)===0?(s.flags=r&-65537|128,s):null;case 5:return Vh(s),null;case 13:if(Qe(Ze),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(t(340));uo()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return Qe(Ze),null;case 4:return po(),null;case 10:return Ph(s.type._context),null;case 22:case 23:return fd(),null;case 24:return null;default:return null}}var Tu=!1,Ft=!1,j0=typeof WeakSet=="function"?WeakSet:Set,se=null;function go(r,s){var a=r.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(h){rt(r,s,h)}else a.current=null}function td(r,s,a){try{a()}catch(h){rt(r,s,h)}}var cg=!1;function z0(r,s){if(fh=Tr,r=Bp(),sh(r)){if("selectionStart"in r)var a={start:r.selectionStart,end:r.selectionEnd};else e:{a=(a=r.ownerDocument)&&a.defaultView||window;var h=a.getSelection&&a.getSelection();if(h&&h.rangeCount!==0){a=h.anchorNode;var d=h.anchorOffset,p=h.focusNode;h=h.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var v=0,S=-1,P=-1,j=0,Q=0,Y=r,K=null;t:for(;;){for(var te;Y!==a||d!==0&&Y.nodeType!==3||(S=v+d),Y!==p||h!==0&&Y.nodeType!==3||(P=v+h),Y.nodeType===3&&(v+=Y.nodeValue.length),(te=Y.firstChild)!==null;)K=Y,Y=te;for(;;){if(Y===r)break t;if(K===a&&++j===d&&(S=v),K===p&&++Q===h&&(P=v),(te=Y.nextSibling)!==null)break;Y=K,K=Y.parentNode}Y=te}a=S===-1||P===-1?null:{start:S,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(ph={focusedElem:r,selectionRange:a},Tr=!1,se=s;se!==null;)if(s=se,r=s.child,(s.subtreeFlags&1028)!==0&&r!==null)r.return=s,se=r;else for(;se!==null;){s=se;try{var le=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(le!==null){var ue=le.memoizedProps,at=le.memoizedState,O=s.stateNode,N=O.getSnapshotBeforeUpdate(s.elementType===s.type?ue:Nn(s.type,ue),at);O.__reactInternalSnapshotBeforeUpdate=N}break;case 3:var M=s.stateNode.containerInfo;M.nodeType===1?M.textContent="":M.nodeType===9&&M.documentElement&&M.removeChild(M.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(J){rt(s,s.return,J)}if(r=s.sibling,r!==null){r.return=s.return,se=r;break}se=s.return}return le=cg,cg=!1,le}function La(r,s,a){var h=s.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var d=h=h.next;do{if((d.tag&r)===r){var p=d.destroy;d.destroy=void 0,p!==void 0&&td(s,a,p)}d=d.next}while(d!==h)}}function Iu(r,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&r)===r){var h=a.create;a.destroy=h()}a=a.next}while(a!==s)}}function nd(r){var s=r.ref;if(s!==null){var a=r.stateNode;switch(r.tag){case 5:r=a;break;default:r=a}typeof s=="function"?s(r):s.current=r}}function hg(r){var s=r.alternate;s!==null&&(r.alternate=null,hg(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&(delete s[rr],delete s[Aa],delete s[_h],delete s[I0],delete s[S0])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function dg(r){return r.tag===5||r.tag===3||r.tag===4}function fg(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||dg(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function rd(r,s,a){var h=r.tag;if(h===5||h===6)r=r.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(r,s):a.insertBefore(r,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(r,a)):(s=a,s.appendChild(r)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=eu));else if(h!==4&&(r=r.child,r!==null))for(rd(r,s,a),r=r.sibling;r!==null;)rd(r,s,a),r=r.sibling}function id(r,s,a){var h=r.tag;if(h===5||h===6)r=r.stateNode,s?a.insertBefore(r,s):a.appendChild(r);else if(h!==4&&(r=r.child,r!==null))for(id(r,s,a),r=r.sibling;r!==null;)id(r,s,a),r=r.sibling}var Pt=null,Dn=!1;function ui(r,s,a){for(a=a.child;a!==null;)pg(r,s,a),a=a.sibling}function pg(r,s,a){if(tn&&typeof tn.onCommitFiberUnmount=="function")try{tn.onCommitFiberUnmount(Wi,a)}catch{}switch(a.tag){case 5:Ft||go(a,s);case 6:var h=Pt,d=Dn;Pt=null,ui(r,s,a),Pt=h,Dn=d,Pt!==null&&(Dn?(r=Pt,a=a.stateNode,r.nodeType===8?r.parentNode.removeChild(a):r.removeChild(a)):Pt.removeChild(a.stateNode));break;case 18:Pt!==null&&(Dn?(r=Pt,a=a.stateNode,r.nodeType===8?yh(r.parentNode,a):r.nodeType===1&&yh(r,a),Zr(r)):yh(Pt,a.stateNode));break;case 4:h=Pt,d=Dn,Pt=a.stateNode.containerInfo,Dn=!0,ui(r,s,a),Pt=h,Dn=d;break;case 0:case 11:case 14:case 15:if(!Ft&&(h=a.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){d=h=h.next;do{var p=d,v=p.destroy;p=p.tag,v!==void 0&&((p&2)!==0||(p&4)!==0)&&td(a,s,v),d=d.next}while(d!==h)}ui(r,s,a);break;case 1:if(!Ft&&(go(a,s),h=a.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=a.memoizedProps,h.state=a.memoizedState,h.componentWillUnmount()}catch(S){rt(a,s,S)}ui(r,s,a);break;case 21:ui(r,s,a);break;case 22:a.mode&1?(Ft=(h=Ft)||a.memoizedState!==null,ui(r,s,a),Ft=h):ui(r,s,a);break;default:ui(r,s,a)}}function mg(r){var s=r.updateQueue;if(s!==null){r.updateQueue=null;var a=r.stateNode;a===null&&(a=r.stateNode=new j0),s.forEach(function(h){var d=Y0.bind(null,r,h);a.has(h)||(a.add(h),h.then(d,d))})}}function Vn(r,s){var a=s.deletions;if(a!==null)for(var h=0;h<a.length;h++){var d=a[h];try{var p=r,v=s,S=v;e:for(;S!==null;){switch(S.tag){case 5:Pt=S.stateNode,Dn=!1;break e;case 3:Pt=S.stateNode.containerInfo,Dn=!0;break e;case 4:Pt=S.stateNode.containerInfo,Dn=!0;break e}S=S.return}if(Pt===null)throw Error(t(160));pg(p,v,d),Pt=null,Dn=!1;var P=d.alternate;P!==null&&(P.return=null),d.return=null}catch(j){rt(d,s,j)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)gg(s,r),s=s.sibling}function gg(r,s){var a=r.alternate,h=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(Vn(s,r),or(r),h&4){try{La(3,r,r.return),Iu(3,r)}catch(ue){rt(r,r.return,ue)}try{La(5,r,r.return)}catch(ue){rt(r,r.return,ue)}}break;case 1:Vn(s,r),or(r),h&512&&a!==null&&go(a,a.return);break;case 5:if(Vn(s,r),or(r),h&512&&a!==null&&go(a,a.return),r.flags&32){var d=r.stateNode;try{ji(d,"")}catch(ue){rt(r,r.return,ue)}}if(h&4&&(d=r.stateNode,d!=null)){var p=r.memoizedProps,v=a!==null?a.memoizedProps:p,S=r.type,P=r.updateQueue;if(r.updateQueue=null,P!==null)try{S==="input"&&p.type==="radio"&&p.name!=null&&Vs(d,p),Ls(S,v);var j=Ls(S,p);for(v=0;v<P.length;v+=2){var Q=P[v],Y=P[v+1];Q==="style"?Os(d,Y):Q==="dangerouslySetInnerHTML"?Cl(d,Y):Q==="children"?ji(d,Y):he(d,Q,Y,j)}switch(S){case"input":Ui(d,p);break;case"textarea":Rl(d,p);break;case"select":var K=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var te=p.value;te!=null?An(d,!!p.multiple,te,!1):K!==!!p.multiple&&(p.defaultValue!=null?An(d,!!p.multiple,p.defaultValue,!0):An(d,!!p.multiple,p.multiple?[]:"",!1))}d[Aa]=p}catch(ue){rt(r,r.return,ue)}}break;case 6:if(Vn(s,r),or(r),h&4){if(r.stateNode===null)throw Error(t(162));d=r.stateNode,p=r.memoizedProps;try{d.nodeValue=p}catch(ue){rt(r,r.return,ue)}}break;case 3:if(Vn(s,r),or(r),h&4&&a!==null&&a.memoizedState.isDehydrated)try{Zr(s.containerInfo)}catch(ue){rt(r,r.return,ue)}break;case 4:Vn(s,r),or(r);break;case 13:Vn(s,r),or(r),d=r.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(ad=Ge())),h&4&&mg(r);break;case 22:if(Q=a!==null&&a.memoizedState!==null,r.mode&1?(Ft=(j=Ft)||Q,Vn(s,r),Ft=j):Vn(s,r),or(r),h&8192){if(j=r.memoizedState!==null,(r.stateNode.isHidden=j)&&!Q&&(r.mode&1)!==0)for(se=r,Q=r.child;Q!==null;){for(Y=se=Q;se!==null;){switch(K=se,te=K.child,K.tag){case 0:case 11:case 14:case 15:La(4,K,K.return);break;case 1:go(K,K.return);var le=K.stateNode;if(typeof le.componentWillUnmount=="function"){h=K,a=K.return;try{s=h,le.props=s.memoizedProps,le.state=s.memoizedState,le.componentWillUnmount()}catch(ue){rt(h,a,ue)}}break;case 5:go(K,K.return);break;case 22:if(K.memoizedState!==null){vg(Y);continue}}te!==null?(te.return=K,se=te):vg(Y)}Q=Q.sibling}e:for(Q=null,Y=r;;){if(Y.tag===5){if(Q===null){Q=Y;try{d=Y.stateNode,j?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(S=Y.stateNode,P=Y.memoizedProps.style,v=P!=null&&P.hasOwnProperty("display")?P.display:null,S.style.display=qr("display",v))}catch(ue){rt(r,r.return,ue)}}}else if(Y.tag===6){if(Q===null)try{Y.stateNode.nodeValue=j?"":Y.memoizedProps}catch(ue){rt(r,r.return,ue)}}else if((Y.tag!==22&&Y.tag!==23||Y.memoizedState===null||Y===r)&&Y.child!==null){Y.child.return=Y,Y=Y.child;continue}if(Y===r)break e;for(;Y.sibling===null;){if(Y.return===null||Y.return===r)break e;Q===Y&&(Q=null),Y=Y.return}Q===Y&&(Q=null),Y.sibling.return=Y.return,Y=Y.sibling}}break;case 19:Vn(s,r),or(r),h&4&&mg(r);break;case 21:break;default:Vn(s,r),or(r)}}function or(r){var s=r.flags;if(s&2){try{e:{for(var a=r.return;a!==null;){if(dg(a)){var h=a;break e}a=a.return}throw Error(t(160))}switch(h.tag){case 5:var d=h.stateNode;h.flags&32&&(ji(d,""),h.flags&=-33);var p=fg(r);id(r,p,d);break;case 3:case 4:var v=h.stateNode.containerInfo,S=fg(r);rd(r,S,v);break;default:throw Error(t(161))}}catch(P){rt(r,r.return,P)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function B0(r,s,a){se=r,yg(r)}function yg(r,s,a){for(var h=(r.mode&1)!==0;se!==null;){var d=se,p=d.child;if(d.tag===22&&h){var v=d.memoizedState!==null||Tu;if(!v){var S=d.alternate,P=S!==null&&S.memoizedState!==null||Ft;S=Tu;var j=Ft;if(Tu=v,(Ft=P)&&!j)for(se=d;se!==null;)v=se,P=v.child,v.tag===22&&v.memoizedState!==null?wg(d):P!==null?(P.return=v,se=P):wg(d);for(;p!==null;)se=p,yg(p),p=p.sibling;se=d,Tu=S,Ft=j}_g(r)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,se=p):_g(r)}}function _g(r){for(;se!==null;){var s=se;if((s.flags&8772)!==0){var a=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Ft||Iu(5,s);break;case 1:var h=s.stateNode;if(s.flags&4&&!Ft)if(a===null)h.componentDidMount();else{var d=s.elementType===s.type?a.memoizedProps:Nn(s.type,a.memoizedProps);h.componentDidUpdate(d,a.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var p=s.updateQueue;p!==null&&vm(s,p,h);break;case 3:var v=s.updateQueue;if(v!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}vm(s,v,a)}break;case 5:var S=s.stateNode;if(a===null&&s.flags&4){a=S;var P=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":P.autoFocus&&a.focus();break;case"img":P.src&&(a.src=P.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var j=s.alternate;if(j!==null){var Q=j.memoizedState;if(Q!==null){var Y=Q.dehydrated;Y!==null&&Zr(Y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Ft||s.flags&512&&nd(s)}catch(K){rt(s,s.return,K)}}if(s===r){se=null;break}if(a=s.sibling,a!==null){a.return=s.return,se=a;break}se=s.return}}function vg(r){for(;se!==null;){var s=se;if(s===r){se=null;break}var a=s.sibling;if(a!==null){a.return=s.return,se=a;break}se=s.return}}function wg(r){for(;se!==null;){var s=se;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{Iu(4,s)}catch(P){rt(s,a,P)}break;case 1:var h=s.stateNode;if(typeof h.componentDidMount=="function"){var d=s.return;try{h.componentDidMount()}catch(P){rt(s,d,P)}}var p=s.return;try{nd(s)}catch(P){rt(s,p,P)}break;case 5:var v=s.return;try{nd(s)}catch(P){rt(s,v,P)}}}catch(P){rt(s,s.return,P)}if(s===r){se=null;break}var S=s.sibling;if(S!==null){S.return=s.return,se=S;break}se=s.return}}var $0=Math.ceil,Su=_e.ReactCurrentDispatcher,sd=_e.ReactCurrentOwner,wn=_e.ReactCurrentBatchConfig,Le=0,It=null,dt=null,kt=0,cn=0,yo=ii(0),vt=0,Ma=null,as=0,Au=0,od=0,Fa=null,Jt=null,ad=0,_o=1/0,Dr=null,Ru=!1,ld=null,ci=null,Cu=!1,hi=null,Pu=0,Ua=0,ud=null,ku=-1,xu=0;function Wt(){return(Le&6)!==0?Ge():ku!==-1?ku:ku=Ge()}function di(r){return(r.mode&1)===0?1:(Le&2)!==0&&kt!==0?kt&-kt:R0.transition!==null?(xu===0&&(xu=oa()),xu):(r=De,r!==0||(r=window.event,r=r===void 0?16:Hs(r.type)),r)}function bn(r,s,a,h){if(50<Ua)throw Ua=0,ud=null,Error(t(185));Qi(r,a,h),((Le&2)===0||r!==It)&&(r===It&&((Le&2)===0&&(Au|=a),vt===4&&fi(r,kt)),Xt(r,h),a===1&&Le===0&&(s.mode&1)===0&&(_o=Ge()+500,iu&&oi()))}function Xt(r,s){var a=r.callbackNode;Ki(r,s);var h=vr(r,r===It?kt:0);if(h===0)a!==null&&Us(a),r.callbackNode=null,r.callbackPriority=0;else if(s=h&-h,r.callbackPriority!==s){if(a!=null&&Us(a),s===1)r.tag===0?A0(Tg.bind(null,r)):am(Tg.bind(null,r)),E0(function(){(Le&6)===0&&oi()}),a=null;else{switch(Gn(h)){case 1:a=js;break;case 4:a=ra;break;case 16:a=qi;break;case 536870912:a=zs;break;default:a=qi}a=xg(a,Eg.bind(null,r))}r.callbackPriority=s,r.callbackNode=a}}function Eg(r,s){if(ku=-1,xu=0,(Le&6)!==0)throw Error(t(327));var a=r.callbackNode;if(vo()&&r.callbackNode!==a)return null;var h=vr(r,r===It?kt:0);if(h===0)return null;if((h&30)!==0||(h&r.expiredLanes)!==0||s)s=Nu(r,h);else{s=h;var d=Le;Le|=2;var p=Sg();(It!==r||kt!==s)&&(Dr=null,_o=Ge()+500,us(r,s));do try{H0();break}catch(S){Ig(r,S)}while(!0);Ch(),Su.current=p,Le=d,dt!==null?s=0:(It=null,kt=0,s=vt)}if(s!==0){if(s===2&&(d=sa(r),d!==0&&(h=d,s=cd(r,d))),s===1)throw a=Ma,us(r,0),fi(r,h),Xt(r,Ge()),a;if(s===6)fi(r,h);else{if(d=r.current.alternate,(h&30)===0&&!q0(d)&&(s=Nu(r,h),s===2&&(p=sa(r),p!==0&&(h=p,s=cd(r,p))),s===1))throw a=Ma,us(r,0),fi(r,h),Xt(r,Ge()),a;switch(r.finishedWork=d,r.finishedLanes=h,s){case 0:case 1:throw Error(t(345));case 2:cs(r,Jt,Dr);break;case 3:if(fi(r,h),(h&130023424)===h&&(s=ad+500-Ge(),10<s)){if(vr(r,0)!==0)break;if(d=r.suspendedLanes,(d&h)!==h){Wt(),r.pingedLanes|=r.suspendedLanes&d;break}r.timeoutHandle=gh(cs.bind(null,r,Jt,Dr),s);break}cs(r,Jt,Dr);break;case 4:if(fi(r,h),(h&4194240)===h)break;for(s=r.eventTimes,d=-1;0<h;){var v=31-nn(h);p=1<<v,v=s[v],v>d&&(d=v),h&=~p}if(h=d,h=Ge()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*$0(h/1960))-h,10<h){r.timeoutHandle=gh(cs.bind(null,r,Jt,Dr),h);break}cs(r,Jt,Dr);break;case 5:cs(r,Jt,Dr);break;default:throw Error(t(329))}}}return Xt(r,Ge()),r.callbackNode===a?Eg.bind(null,r):null}function cd(r,s){var a=Fa;return r.current.memoizedState.isDehydrated&&(us(r,s).flags|=256),r=Nu(r,s),r!==2&&(s=Jt,Jt=a,s!==null&&hd(s)),r}function hd(r){Jt===null?Jt=r:Jt.push.apply(Jt,r)}function q0(r){for(var s=r;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var h=0;h<a.length;h++){var d=a[h],p=d.getSnapshot;d=d.value;try{if(!kn(p(),d))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function fi(r,s){for(s&=~od,s&=~Au,r.suspendedLanes|=s,r.pingedLanes&=~s,r=r.expirationTimes;0<s;){var a=31-nn(s),h=1<<a;r[a]=-1,s&=~h}}function Tg(r){if((Le&6)!==0)throw Error(t(327));vo();var s=vr(r,0);if((s&1)===0)return Xt(r,Ge()),null;var a=Nu(r,s);if(r.tag!==0&&a===2){var h=sa(r);h!==0&&(s=h,a=cd(r,h))}if(a===1)throw a=Ma,us(r,0),fi(r,s),Xt(r,Ge()),a;if(a===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=s,cs(r,Jt,Dr),Xt(r,Ge()),null}function dd(r,s){var a=Le;Le|=1;try{return r(s)}finally{Le=a,Le===0&&(_o=Ge()+500,iu&&oi())}}function ls(r){hi!==null&&hi.tag===0&&(Le&6)===0&&vo();var s=Le;Le|=1;var a=wn.transition,h=De;try{if(wn.transition=null,De=1,r)return r()}finally{De=h,wn.transition=a,Le=s,(Le&6)===0&&oi()}}function fd(){cn=yo.current,Qe(yo)}function us(r,s){r.finishedWork=null,r.finishedLanes=0;var a=r.timeoutHandle;if(a!==-1&&(r.timeoutHandle=-1,w0(a)),dt!==null)for(a=dt.return;a!==null;){var h=a;switch(Th(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&nu();break;case 3:po(),Qe(Kt),Qe(Ot),Oh();break;case 5:Vh(h);break;case 4:po();break;case 13:Qe(Ze);break;case 19:Qe(Ze);break;case 10:Ph(h.type._context);break;case 22:case 23:fd()}a=a.return}if(It=r,dt=r=pi(r.current,null),kt=cn=s,vt=0,Ma=null,od=Au=as=0,Jt=Fa=null,is!==null){for(s=0;s<is.length;s++)if(a=is[s],h=a.interleaved,h!==null){a.interleaved=null;var d=h.next,p=a.pending;if(p!==null){var v=p.next;p.next=d,h.next=v}a.pending=h}is=null}return r}function Ig(r,s){do{var a=dt;try{if(Ch(),pu.current=_u,mu){for(var h=et.memoizedState;h!==null;){var d=h.queue;d!==null&&(d.pending=null),h=h.next}mu=!1}if(os=0,Tt=_t=et=null,Na=!1,Da=0,sd.current=null,a===null||a.return===null){vt=1,Ma=s,dt=null;break}e:{var p=r,v=a.return,S=a,P=s;if(s=kt,S.flags|=32768,P!==null&&typeof P=="object"&&typeof P.then=="function"){var j=P,Q=S,Y=Q.tag;if((Q.mode&1)===0&&(Y===0||Y===11||Y===15)){var K=Q.alternate;K?(Q.updateQueue=K.updateQueue,Q.memoizedState=K.memoizedState,Q.lanes=K.lanes):(Q.updateQueue=null,Q.memoizedState=null)}var te=Km(v);if(te!==null){te.flags&=-257,Qm(te,v,S,p,s),te.mode&1&&Gm(p,j,s),s=te,P=j;var le=s.updateQueue;if(le===null){var ue=new Set;ue.add(P),s.updateQueue=ue}else le.add(P);break e}else{if((s&1)===0){Gm(p,j,s),pd();break e}P=Error(t(426))}}else if(Xe&&S.mode&1){var at=Km(v);if(at!==null){(at.flags&65536)===0&&(at.flags|=256),Qm(at,v,S,p,s),Ah(mo(P,S));break e}}p=P=mo(P,S),vt!==4&&(vt=2),Fa===null?Fa=[p]:Fa.push(p),p=v;do{switch(p.tag){case 3:p.flags|=65536,s&=-s,p.lanes|=s;var O=Wm(p,P,s);_m(p,O);break e;case 1:S=P;var N=p.type,M=p.stateNode;if((p.flags&128)===0&&(typeof N.getDerivedStateFromError=="function"||M!==null&&typeof M.componentDidCatch=="function"&&(ci===null||!ci.has(M)))){p.flags|=65536,s&=-s,p.lanes|=s;var J=Hm(p,S,s);_m(p,J);break e}}p=p.return}while(p!==null)}Rg(a)}catch(ce){s=ce,dt===a&&a!==null&&(dt=a=a.return);continue}break}while(!0)}function Sg(){var r=Su.current;return Su.current=_u,r===null?_u:r}function pd(){(vt===0||vt===3||vt===2)&&(vt=4),It===null||(as&268435455)===0&&(Au&268435455)===0||fi(It,kt)}function Nu(r,s){var a=Le;Le|=2;var h=Sg();(It!==r||kt!==s)&&(Dr=null,us(r,s));do try{W0();break}catch(d){Ig(r,d)}while(!0);if(Ch(),Le=a,Su.current=h,dt!==null)throw Error(t(261));return It=null,kt=0,vt}function W0(){for(;dt!==null;)Ag(dt)}function H0(){for(;dt!==null&&!$i();)Ag(dt)}function Ag(r){var s=kg(r.alternate,r,cn);r.memoizedProps=r.pendingProps,s===null?Rg(r):dt=s,sd.current=null}function Rg(r){var s=r;do{var a=s.alternate;if(r=s.return,(s.flags&32768)===0){if(a=F0(a,s,cn),a!==null){dt=a;return}}else{if(a=U0(a,s),a!==null){a.flags&=32767,dt=a;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{vt=6,dt=null;return}}if(s=s.sibling,s!==null){dt=s;return}dt=s=r}while(s!==null);vt===0&&(vt=5)}function cs(r,s,a){var h=De,d=wn.transition;try{wn.transition=null,De=1,G0(r,s,a,h)}finally{wn.transition=d,De=h}return null}function G0(r,s,a,h){do vo();while(hi!==null);if((Le&6)!==0)throw Error(t(327));a=r.finishedWork;var d=r.finishedLanes;if(a===null)return null;if(r.finishedWork=null,r.finishedLanes=0,a===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var p=a.lanes|a.childLanes;if(eh(r,p),r===It&&(dt=It=null,kt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Cu||(Cu=!0,xg(qi,function(){return vo(),null})),p=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||p){p=wn.transition,wn.transition=null;var v=De;De=1;var S=Le;Le|=4,sd.current=null,z0(r,a),gg(a,r),f0(ph),Tr=!!fh,ph=fh=null,r.current=a,B0(a),_r(),Le=S,De=v,wn.transition=p}else r.current=a;if(Cu&&(Cu=!1,hi=r,Pu=d),p=r.pendingLanes,p===0&&(ci=null),Fl(a.stateNode),Xt(r,Ge()),s!==null)for(h=r.onRecoverableError,a=0;a<s.length;a++)d=s[a],h(d.value,{componentStack:d.stack,digest:d.digest});if(Ru)throw Ru=!1,r=ld,ld=null,r;return(Pu&1)!==0&&r.tag!==0&&vo(),p=r.pendingLanes,(p&1)!==0?r===ud?Ua++:(Ua=0,ud=r):Ua=0,oi(),null}function vo(){if(hi!==null){var r=Gn(Pu),s=wn.transition,a=De;try{if(wn.transition=null,De=16>r?16:r,hi===null)var h=!1;else{if(r=hi,hi=null,Pu=0,(Le&6)!==0)throw Error(t(331));var d=Le;for(Le|=4,se=r.current;se!==null;){var p=se,v=p.child;if((se.flags&16)!==0){var S=p.deletions;if(S!==null){for(var P=0;P<S.length;P++){var j=S[P];for(se=j;se!==null;){var Q=se;switch(Q.tag){case 0:case 11:case 15:La(8,Q,p)}var Y=Q.child;if(Y!==null)Y.return=Q,se=Y;else for(;se!==null;){Q=se;var K=Q.sibling,te=Q.return;if(hg(Q),Q===j){se=null;break}if(K!==null){K.return=te,se=K;break}se=te}}}var le=p.alternate;if(le!==null){var ue=le.child;if(ue!==null){le.child=null;do{var at=ue.sibling;ue.sibling=null,ue=at}while(ue!==null)}}se=p}}if((p.subtreeFlags&2064)!==0&&v!==null)v.return=p,se=v;else e:for(;se!==null;){if(p=se,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:La(9,p,p.return)}var O=p.sibling;if(O!==null){O.return=p.return,se=O;break e}se=p.return}}var N=r.current;for(se=N;se!==null;){v=se;var M=v.child;if((v.subtreeFlags&2064)!==0&&M!==null)M.return=v,se=M;else e:for(v=N;se!==null;){if(S=se,(S.flags&2048)!==0)try{switch(S.tag){case 0:case 11:case 15:Iu(9,S)}}catch(ce){rt(S,S.return,ce)}if(S===v){se=null;break e}var J=S.sibling;if(J!==null){J.return=S.return,se=J;break e}se=S.return}}if(Le=d,oi(),tn&&typeof tn.onPostCommitFiberRoot=="function")try{tn.onPostCommitFiberRoot(Wi,r)}catch{}h=!0}return h}finally{De=a,wn.transition=s}}return!1}function Cg(r,s,a){s=mo(a,s),s=Wm(r,s,1),r=li(r,s,1),s=Wt(),r!==null&&(Qi(r,1,s),Xt(r,s))}function rt(r,s,a){if(r.tag===3)Cg(r,r,a);else for(;s!==null;){if(s.tag===3){Cg(s,r,a);break}else if(s.tag===1){var h=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(ci===null||!ci.has(h))){r=mo(a,r),r=Hm(s,r,1),s=li(s,r,1),r=Wt(),s!==null&&(Qi(s,1,r),Xt(s,r));break}}s=s.return}}function K0(r,s,a){var h=r.pingCache;h!==null&&h.delete(s),s=Wt(),r.pingedLanes|=r.suspendedLanes&a,It===r&&(kt&a)===a&&(vt===4||vt===3&&(kt&130023424)===kt&&500>Ge()-ad?us(r,0):od|=a),Xt(r,s)}function Pg(r,s){s===0&&((r.mode&1)===0?s=1:(s=Yr,Yr<<=1,(Yr&130023424)===0&&(Yr=4194304)));var a=Wt();r=kr(r,s),r!==null&&(Qi(r,s,a),Xt(r,a))}function Q0(r){var s=r.memoizedState,a=0;s!==null&&(a=s.retryLane),Pg(r,a)}function Y0(r,s){var a=0;switch(r.tag){case 13:var h=r.stateNode,d=r.memoizedState;d!==null&&(a=d.retryLane);break;case 19:h=r.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(s),Pg(r,a)}var kg;kg=function(r,s,a){if(r!==null)if(r.memoizedProps!==s.pendingProps||Kt.current)Yt=!0;else{if((r.lanes&a)===0&&(s.flags&128)===0)return Yt=!1,M0(r,s,a);Yt=(r.flags&131072)!==0}else Yt=!1,Xe&&(s.flags&1048576)!==0&&lm(s,ou,s.index);switch(s.lanes=0,s.tag){case 2:var h=s.type;Eu(r,s),r=s.pendingProps;var d=oo(s,Ot.current);fo(s,a),d=Fh(null,s,h,r,d,a);var p=Uh();return s.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Qt(h)?(p=!0,ru(s)):p=!1,s.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Nh(s),d.updater=vu,s.stateNode=d,d._reactInternals=s,Wh(s,h,r,a),s=Qh(null,s,h,!0,p,a)):(s.tag=0,Xe&&p&&Eh(s),qt(null,s,d,a),s=s.child),s;case 16:h=s.elementType;e:{switch(Eu(r,s),r=s.pendingProps,d=h._init,h=d(h._payload),s.type=h,d=s.tag=X0(h),r=Nn(h,r),d){case 0:s=Kh(null,s,h,r,a);break e;case 1:s=tg(null,s,h,r,a);break e;case 11:s=Ym(null,s,h,r,a);break e;case 14:s=Jm(null,s,h,Nn(h.type,r),a);break e}throw Error(t(306,h,""))}return s;case 0:return h=s.type,d=s.pendingProps,d=s.elementType===h?d:Nn(h,d),Kh(r,s,h,d,a);case 1:return h=s.type,d=s.pendingProps,d=s.elementType===h?d:Nn(h,d),tg(r,s,h,d,a);case 3:e:{if(ng(s),r===null)throw Error(t(387));h=s.pendingProps,p=s.memoizedState,d=p.element,ym(r,s),du(s,h,null,a);var v=s.memoizedState;if(h=v.element,p.isDehydrated)if(p={element:h,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},s.updateQueue.baseState=p,s.memoizedState=p,s.flags&256){d=mo(Error(t(423)),s),s=rg(r,s,h,a,d);break e}else if(h!==d){d=mo(Error(t(424)),s),s=rg(r,s,h,a,d);break e}else for(un=ri(s.stateNode.containerInfo.firstChild),ln=s,Xe=!0,xn=null,a=mm(s,null,h,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(uo(),h===d){s=Nr(r,s,a);break e}qt(r,s,h,a)}s=s.child}return s;case 5:return wm(s),r===null&&Sh(s),h=s.type,d=s.pendingProps,p=r!==null?r.memoizedProps:null,v=d.children,mh(h,d)?v=null:p!==null&&mh(h,p)&&(s.flags|=32),eg(r,s),qt(r,s,v,a),s.child;case 6:return r===null&&Sh(s),null;case 13:return ig(r,s,a);case 4:return Dh(s,s.stateNode.containerInfo),h=s.pendingProps,r===null?s.child=co(s,null,h,a):qt(r,s,h,a),s.child;case 11:return h=s.type,d=s.pendingProps,d=s.elementType===h?d:Nn(h,d),Ym(r,s,h,d,a);case 7:return qt(r,s,s.pendingProps,a),s.child;case 8:return qt(r,s,s.pendingProps.children,a),s.child;case 12:return qt(r,s,s.pendingProps.children,a),s.child;case 10:e:{if(h=s.type._context,d=s.pendingProps,p=s.memoizedProps,v=d.value,We(uu,h._currentValue),h._currentValue=v,p!==null)if(kn(p.value,v)){if(p.children===d.children&&!Kt.current){s=Nr(r,s,a);break e}}else for(p=s.child,p!==null&&(p.return=s);p!==null;){var S=p.dependencies;if(S!==null){v=p.child;for(var P=S.firstContext;P!==null;){if(P.context===h){if(p.tag===1){P=xr(-1,a&-a),P.tag=2;var j=p.updateQueue;if(j!==null){j=j.shared;var Q=j.pending;Q===null?P.next=P:(P.next=Q.next,Q.next=P),j.pending=P}}p.lanes|=a,P=p.alternate,P!==null&&(P.lanes|=a),kh(p.return,a,s),S.lanes|=a;break}P=P.next}}else if(p.tag===10)v=p.type===s.type?null:p.child;else if(p.tag===18){if(v=p.return,v===null)throw Error(t(341));v.lanes|=a,S=v.alternate,S!==null&&(S.lanes|=a),kh(v,a,s),v=p.sibling}else v=p.child;if(v!==null)v.return=p;else for(v=p;v!==null;){if(v===s){v=null;break}if(p=v.sibling,p!==null){p.return=v.return,v=p;break}v=v.return}p=v}qt(r,s,d.children,a),s=s.child}return s;case 9:return d=s.type,h=s.pendingProps.children,fo(s,a),d=_n(d),h=h(d),s.flags|=1,qt(r,s,h,a),s.child;case 14:return h=s.type,d=Nn(h,s.pendingProps),d=Nn(h.type,d),Jm(r,s,h,d,a);case 15:return Xm(r,s,s.type,s.pendingProps,a);case 17:return h=s.type,d=s.pendingProps,d=s.elementType===h?d:Nn(h,d),Eu(r,s),s.tag=1,Qt(h)?(r=!0,ru(s)):r=!1,fo(s,a),$m(s,h,d),Wh(s,h,d,a),Qh(null,s,h,!0,r,a);case 19:return og(r,s,a);case 22:return Zm(r,s,a)}throw Error(t(156,s.tag))};function xg(r,s){return na(r,s)}function J0(r,s,a,h){this.tag=r,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function En(r,s,a,h){return new J0(r,s,a,h)}function md(r){return r=r.prototype,!(!r||!r.isReactComponent)}function X0(r){if(typeof r=="function")return md(r)?1:0;if(r!=null){if(r=r.$$typeof,r===b)return 11;if(r===Et)return 14}return 2}function pi(r,s){var a=r.alternate;return a===null?(a=En(r.tag,s,r.key,r.mode),a.elementType=r.elementType,a.type=r.type,a.stateNode=r.stateNode,a.alternate=r,r.alternate=a):(a.pendingProps=s,a.type=r.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=r.flags&14680064,a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,s=r.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=r.sibling,a.index=r.index,a.ref=r.ref,a}function Du(r,s,a,h,d,p){var v=2;if(h=r,typeof r=="function")md(r)&&(v=1);else if(typeof r=="string")v=5;else e:switch(r){case k:return hs(a.children,d,p,s);case A:v=8,d|=8;break;case C:return r=En(12,a,s,d|2),r.elementType=C,r.lanes=p,r;case R:return r=En(13,a,s,d),r.elementType=R,r.lanes=p,r;case qe:return r=En(19,a,s,d),r.elementType=qe,r.lanes=p,r;case Je:return Vu(a,d,p,s);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case D:v=10;break e;case x:v=9;break e;case b:v=11;break e;case Et:v=14;break e;case Vt:v=16,h=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return s=En(v,a,s,d),s.elementType=r,s.type=h,s.lanes=p,s}function hs(r,s,a,h){return r=En(7,r,h,s),r.lanes=a,r}function Vu(r,s,a,h){return r=En(22,r,h,s),r.elementType=Je,r.lanes=a,r.stateNode={isHidden:!1},r}function gd(r,s,a){return r=En(6,r,null,s),r.lanes=a,r}function yd(r,s,a){return s=En(4,r.children!==null?r.children:[],r.key,s),s.lanes=a,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}function Z0(r,s,a,h,d){this.tag=s,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=aa(0),this.expirationTimes=aa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=aa(0),this.identifierPrefix=h,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function _d(r,s,a,h,d,p,v,S,P){return r=new Z0(r,s,a,S,P),s===1?(s=1,p===!0&&(s|=8)):s=0,p=En(3,null,null,s),r.current=p,p.stateNode=r,p.memoizedState={element:h,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Nh(p),r}function eT(r,s,a){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Re,key:h==null?null:""+h,children:r,containerInfo:s,implementation:a}}function Ng(r){if(!r)return si;r=r._reactInternals;e:{if(Cn(r)!==r||r.tag!==1)throw Error(t(170));var s=r;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Qt(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(r.tag===1){var a=r.type;if(Qt(a))return sm(r,a,s)}return s}function Dg(r,s,a,h,d,p,v,S,P){return r=_d(a,h,!0,r,d,p,v,S,P),r.context=Ng(null),a=r.current,h=Wt(),d=di(a),p=xr(h,d),p.callback=s??null,li(a,p,d),r.current.lanes=d,Qi(r,d,h),Xt(r,h),r}function bu(r,s,a,h){var d=s.current,p=Wt(),v=di(d);return a=Ng(a),s.context===null?s.context=a:s.pendingContext=a,s=xr(p,v),s.payload={element:r},h=h===void 0?null:h,h!==null&&(s.callback=h),r=li(d,s,v),r!==null&&(bn(r,d,v,p),hu(r,d,v)),v}function Ou(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function Vg(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var a=r.retryLane;r.retryLane=a!==0&&a<s?a:s}}function vd(r,s){Vg(r,s),(r=r.alternate)&&Vg(r,s)}function tT(){return null}var bg=typeof reportError=="function"?reportError:function(r){console.error(r)};function wd(r){this._internalRoot=r}Lu.prototype.render=wd.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(t(409));bu(r,s,null,null)},Lu.prototype.unmount=wd.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;ls(function(){bu(null,r,null,null)}),s[Ar]=null}};function Lu(r){this._internalRoot=r}Lu.prototype.unstable_scheduleHydration=function(r){if(r){var s=ha();r={blockedOn:null,target:r,priority:s};for(var a=0;a<rn.length&&s!==0&&s<rn[a].priority;a++);rn.splice(a,0,r),a===0&&qs(r)}};function Ed(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function Mu(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function Og(){}function nT(r,s,a,h,d){if(d){if(typeof h=="function"){var p=h;h=function(){var j=Ou(v);p.call(j)}}var v=Dg(s,h,r,0,null,!1,!1,"",Og);return r._reactRootContainer=v,r[Ar]=v.current,Ia(r.nodeType===8?r.parentNode:r),ls(),v}for(;d=r.lastChild;)r.removeChild(d);if(typeof h=="function"){var S=h;h=function(){var j=Ou(P);S.call(j)}}var P=_d(r,0,!1,null,null,!1,!1,"",Og);return r._reactRootContainer=P,r[Ar]=P.current,Ia(r.nodeType===8?r.parentNode:r),ls(function(){bu(s,P,a,h)}),P}function Fu(r,s,a,h,d){var p=a._reactRootContainer;if(p){var v=p;if(typeof d=="function"){var S=d;d=function(){var P=Ou(v);S.call(P)}}bu(s,v,r,d)}else v=nT(a,s,r,d,h);return Ou(v)}ua=function(r){switch(r.tag){case 3:var s=r.stateNode;if(s.current.memoizedState.isDehydrated){var a=Fe(s.pendingLanes);a!==0&&(la(s,a|1),Xt(s,Ge()),(Le&6)===0&&(_o=Ge()+500,oi()))}break;case 13:ls(function(){var h=kr(r,1);if(h!==null){var d=Wt();bn(h,r,1,d)}}),vd(r,1)}},Bs=function(r){if(r.tag===13){var s=kr(r,134217728);if(s!==null){var a=Wt();bn(s,r,134217728,a)}vd(r,134217728)}},ca=function(r){if(r.tag===13){var s=di(r),a=kr(r,s);if(a!==null){var h=Wt();bn(a,r,s,h)}vd(r,s)}},ha=function(){return De},da=function(r,s){var a=De;try{return De=r,s()}finally{De=a}},mr=function(r,s,a){switch(s){case"input":if(Ui(r,a),s=a.name,a.type==="radio"&&s!=null){for(a=r;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var h=a[s];if(h!==r&&h.form===r.form){var d=tu(h);if(!d)throw Error(t(90));Go(h),Ui(h,d)}}}break;case"textarea":Rl(r,a);break;case"select":s=a.value,s!=null&&An(r,!!a.multiple,s,!1)}},kl=dd,xl=ls;var rT={usingClientEntryPoint:!1,Events:[Ra,io,tu,Hr,Gr,dd]},ja={findFiberByHostInstance:es,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},iT={bundleType:ja.bundleType,version:ja.version,rendererPackageName:ja.rendererPackageName,rendererConfig:ja.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:_e.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=Ml(r),r===null?null:r.stateNode},findFiberByHostInstance:ja.findFiberByHostInstance||tT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Uu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Uu.isDisabled&&Uu.supportsFiber)try{Wi=Uu.inject(iT),tn=Uu}catch{}}return Zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rT,Zt.createPortal=function(r,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ed(s))throw Error(t(200));return eT(r,s,null,a)},Zt.createRoot=function(r,s){if(!Ed(r))throw Error(t(299));var a=!1,h="",d=bg;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onRecoverableError!==void 0&&(d=s.onRecoverableError)),s=_d(r,1,!1,null,null,a,!1,h,d),r[Ar]=s.current,Ia(r.nodeType===8?r.parentNode:r),new wd(s)},Zt.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=Ml(s),r=r===null?null:r.stateNode,r},Zt.flushSync=function(r){return ls(r)},Zt.hydrate=function(r,s,a){if(!Mu(s))throw Error(t(200));return Fu(null,r,s,!0,a)},Zt.hydrateRoot=function(r,s,a){if(!Ed(r))throw Error(t(405));var h=a!=null&&a.hydratedSources||null,d=!1,p="",v=bg;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),s=Dg(s,null,r,1,a??null,d,!1,p,v),r[Ar]=s.current,Ia(r),h)for(r=0;r<h.length;r++)a=h[r],d=a._getVersion,d=d(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,d]:s.mutableSourceEagerHydrationData.push(a,d);return new Lu(s)},Zt.render=function(r,s,a){if(!Mu(s))throw Error(t(200));return Fu(null,r,s,!1,a)},Zt.unmountComponentAtNode=function(r){if(!Mu(r))throw Error(t(40));return r._reactRootContainer?(ls(function(){Fu(null,null,r,!1,function(){r._reactRootContainer=null,r[Ar]=null})}),!0):!1},Zt.unstable_batchedUpdates=dd,Zt.unstable_renderSubtreeIntoContainer=function(r,s,a,h){if(!Mu(a))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return Fu(r,s,a,!1,h)},Zt.version="18.3.1-next-f1338f8080-20240426",Zt}var $g;function z_(){if($g)return Sd.exports;$g=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Sd.exports=dT(),Sd.exports}var qg;function fT(){if(qg)return ju;qg=1;var n=z_();return ju.createRoot=n.createRoot,ju.hydrateRoot=n.hydrateRoot,ju}var pT=fT();const mT=j_(pT);z_();/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Gd(){return Gd=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},Gd.apply(this,arguments)}var Kd;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(Kd||(Kd={}));function ut(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function Cf(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Wg(n){let{pathname:e="/",search:t="",hash:i=""}=n;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Pc(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substr(t),n=n.substr(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substr(i),n=n.substr(0,i)),n&&(e.pathname=n)}return e}var Hg;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(Hg||(Hg={}));function gT(n,e,t){return t===void 0&&(t="/"),yT(n,e,t)}function yT(n,e,t,i){let o=typeof e=="string"?Pc(e):e,l=rl(o.pathname||"/",t);if(l==null)return null;let c=B_(n);_T(c);let f=null;for(let g=0;f==null&&g<c.length;++g){let y=kT(l);f=CT(c[g],y)}return f}function B_(n,e,t,i){e===void 0&&(e=[]),t===void 0&&(t=[]),i===void 0&&(i="");let o=(l,c,f)=>{let g={relativePath:f===void 0?l.path||"":f,caseSensitive:l.caseSensitive===!0,childrenIndex:c,route:l};g.relativePath.startsWith("/")&&(ut(g.relativePath.startsWith(i),'Absolute route path "'+g.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),g.relativePath=g.relativePath.slice(i.length));let y=Ti([i,g.relativePath]),w=t.concat(g);l.children&&l.children.length>0&&(ut(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+y+'".')),B_(l.children,e,w,y)),!(l.path==null&&!l.index)&&e.push({path:y,score:AT(y,l.index),routesMeta:w})};return n.forEach((l,c)=>{var f;if(l.path===""||!((f=l.path)!=null&&f.includes("?")))o(l,c);else for(let g of $_(l.path))o(l,c,g)}),e}function $_(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(i.length===0)return o?[l,""]:[l];let c=$_(i.join("/")),f=[];return f.push(...c.map(g=>g===""?l:[l,g].join("/"))),o&&f.push(...c),f.map(g=>n.startsWith("/")&&g===""?"/":g)}function _T(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:RT(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}const vT=/^:[\w-]+$/,wT=3,ET=2,TT=1,IT=10,ST=-2,Gg=n=>n==="*";function AT(n,e){let t=n.split("/"),i=t.length;return t.some(Gg)&&(i+=ST),e&&(i+=ET),t.filter(o=>!Gg(o)).reduce((o,l)=>o+(vT.test(l)?wT:l===""?TT:IT),i)}function RT(n,e){return n.length===e.length&&n.slice(0,-1).every((i,o)=>i===e[o])?n[n.length-1]-e[e.length-1]:0}function CT(n,e,t){let{routesMeta:i}=n,o={},l="/",c=[];for(let f=0;f<i.length;++f){let g=i[f],y=f===i.length-1,w=l==="/"?e:e.slice(l.length)||"/",T=Qd({path:g.relativePath,caseSensitive:g.caseSensitive,end:y},w),I=g.route;if(!T)return null;Object.assign(o,T.params),c.push({params:o,pathname:Ti([l,T.pathname]),pathnameBase:bT(Ti([l,T.pathnameBase])),route:I}),T.pathnameBase!=="/"&&(l=Ti([l,T.pathnameBase]))}return c}function Qd(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=PT(n.path,n.caseSensitive,n.end),o=e.match(t);if(!o)return null;let l=o[0],c=l.replace(/(.)\/+$/,"$1"),f=o.slice(1);return{params:i.reduce((y,w,T)=>{let{paramName:I,isOptional:F}=w;if(I==="*"){let H=f[T]||"";c=l.slice(0,l.length-H.length).replace(/(.)\/+$/,"$1")}const $=f[T];return F&&!$?y[I]=void 0:y[I]=($||"").replace(/%2F/g,"/"),y},{}),pathname:l,pathnameBase:c,pattern:n}}function PT(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),Cf(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let i=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,f,g)=>(i.push({paramName:f,isOptional:g!=null}),g?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(i.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),i]}function kT(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Cf(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),n}}function rl(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}const xT=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,NT=n=>xT.test(n);function DT(n,e){e===void 0&&(e="/");let{pathname:t,search:i="",hash:o=""}=typeof n=="string"?Pc(n):n,l;if(t)if(NT(t))l=t;else{if(t.includes("//")){let c=t;t=t.replace(/\/\/+/g,"/"),Cf(!1,"Pathnames cannot have embedded double slashes - normalizing "+(c+" -> "+t))}t.startsWith("/")?l=Kg(t.substring(1),"/"):l=Kg(t,e)}else l=e;return{pathname:l,search:OT(i),hash:LT(o)}}function Kg(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function Cd(n,e,t,i){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function VT(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Pf(n,e){let t=VT(n);return e?t.map((i,o)=>o===t.length-1?i.pathname:i.pathnameBase):t.map(i=>i.pathnameBase)}function kf(n,e,t,i){i===void 0&&(i=!1);let o;typeof n=="string"?o=Pc(n):(o=Gd({},n),ut(!o.pathname||!o.pathname.includes("?"),Cd("?","pathname","search",o)),ut(!o.pathname||!o.pathname.includes("#"),Cd("#","pathname","hash",o)),ut(!o.search||!o.search.includes("#"),Cd("#","search","hash",o)));let l=n===""||o.pathname==="",c=l?"/":o.pathname,f;if(c==null)f=t;else{let T=e.length-1;if(!i&&c.startsWith("..")){let I=c.split("/");for(;I[0]==="..";)I.shift(),T-=1;o.pathname=I.join("/")}f=T>=0?e[T]:"/"}let g=DT(o,f),y=c&&c!=="/"&&c.endsWith("/"),w=(l||c===".")&&t.endsWith("/");return!g.pathname.endsWith("/")&&(y||w)&&(g.pathname+="/"),g}const Ti=n=>n.join("/").replace(/\/\/+/g,"/"),bT=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),OT=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,LT=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function MT(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const q_=["post","put","patch","delete"];new Set(q_);const FT=["get",...q_];new Set(FT);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function rc(){return rc=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},rc.apply(this,arguments)}const kc=X.createContext(null),W_=X.createContext(null),Oi=X.createContext(null),xf=X.createContext(null),Li=X.createContext({outlet:null,matches:[],isDataRoute:!1}),H_=X.createContext(null);function UT(n,e){let{relative:t}=e===void 0?{}:e;ml()||ut(!1);let{basename:i,navigator:o}=X.useContext(Oi),{hash:l,pathname:c,search:f}=xc(n,{relative:t}),g=c;return i!=="/"&&(g=c==="/"?i:Ti([i,c])),o.createHref({pathname:g,search:f,hash:l})}function ml(){return X.useContext(xf)!=null}function Fo(){return ml()||ut(!1),X.useContext(xf).location}function G_(n){X.useContext(Oi).static||X.useLayoutEffect(n)}function K_(){let{isDataRoute:n}=X.useContext(Li);return n?XT():jT()}function jT(){ml()||ut(!1);let n=X.useContext(kc),{basename:e,future:t,navigator:i}=X.useContext(Oi),{matches:o}=X.useContext(Li),{pathname:l}=Fo(),c=JSON.stringify(Pf(o,t.v7_relativeSplatPath)),f=X.useRef(!1);return G_(()=>{f.current=!0}),X.useCallback(function(y,w){if(w===void 0&&(w={}),!f.current)return;if(typeof y=="number"){i.go(y);return}let T=kf(y,JSON.parse(c),l,w.relative==="path");n==null&&e!=="/"&&(T.pathname=T.pathname==="/"?e:Ti([e,T.pathname])),(w.replace?i.replace:i.push)(T,w.state,w)},[e,i,c,l,n])}function xc(n,e){let{relative:t}=e===void 0?{}:e,{future:i}=X.useContext(Oi),{matches:o}=X.useContext(Li),{pathname:l}=Fo(),c=JSON.stringify(Pf(o,i.v7_relativeSplatPath));return X.useMemo(()=>kf(n,JSON.parse(c),l,t==="path"),[n,c,l,t])}function zT(n,e){return BT(n,e)}function BT(n,e,t,i){ml()||ut(!1);let{navigator:o}=X.useContext(Oi),{matches:l}=X.useContext(Li),c=l[l.length-1],f=c?c.params:{};c&&c.pathname;let g=c?c.pathnameBase:"/";c&&c.route;let y=Fo(),w;if(e){var T;let U=typeof e=="string"?Pc(e):e;g==="/"||(T=U.pathname)!=null&&T.startsWith(g)||ut(!1),w=U}else w=y;let I=w.pathname||"/",F=I;if(g!=="/"){let U=g.replace(/^\//,"").split("/");F="/"+I.replace(/^\//,"").split("/").slice(U.length).join("/")}let $=gT(n,{pathname:F}),H=GT($&&$.map(U=>Object.assign({},U,{params:Object.assign({},f,U.params),pathname:Ti([g,o.encodeLocation?o.encodeLocation(U.pathname).pathname:U.pathname]),pathnameBase:U.pathnameBase==="/"?g:Ti([g,o.encodeLocation?o.encodeLocation(U.pathnameBase).pathname:U.pathnameBase])})),l,t,i);return e&&H?X.createElement(xf.Provider,{value:{location:rc({pathname:"/",search:"",hash:"",state:null,key:"default"},w),navigationType:Kd.Pop}},H):H}function $T(){let n=JT(),e=MT(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return X.createElement(X.Fragment,null,X.createElement("h2",null,"Unexpected Application Error!"),X.createElement("h3",{style:{fontStyle:"italic"}},e),t?X.createElement("pre",{style:o},t):null,null)}const qT=X.createElement($T,null);class WT extends X.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?X.createElement(Li.Provider,{value:this.props.routeContext},X.createElement(H_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function HT(n){let{routeContext:e,match:t,children:i}=n,o=X.useContext(kc);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),X.createElement(Li.Provider,{value:e},i)}function GT(n,e,t,i){var o;if(e===void 0&&(e=[]),t===void 0&&(t=null),i===void 0&&(i=null),n==null){var l;if(!t)return null;if(t.errors)n=t.matches;else if((l=i)!=null&&l.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let c=n,f=(o=t)==null?void 0:o.errors;if(f!=null){let w=c.findIndex(T=>T.route.id&&(f==null?void 0:f[T.route.id])!==void 0);w>=0||ut(!1),c=c.slice(0,Math.min(c.length,w+1))}let g=!1,y=-1;if(t&&i&&i.v7_partialHydration)for(let w=0;w<c.length;w++){let T=c[w];if((T.route.HydrateFallback||T.route.hydrateFallbackElement)&&(y=w),T.route.id){let{loaderData:I,errors:F}=t,$=T.route.loader&&I[T.route.id]===void 0&&(!F||F[T.route.id]===void 0);if(T.route.lazy||$){g=!0,y>=0?c=c.slice(0,y+1):c=[c[0]];break}}}return c.reduceRight((w,T,I)=>{let F,$=!1,H=null,U=null;t&&(F=f&&T.route.id?f[T.route.id]:void 0,H=T.route.errorElement||qT,g&&(y<0&&I===0?(ZT("route-fallback"),$=!0,U=null):y===I&&($=!0,U=T.route.hydrateFallbackElement||null)));let de=e.concat(c.slice(0,I+1)),ae=()=>{let he;return F?he=H:$?he=U:T.route.Component?he=X.createElement(T.route.Component,null):T.route.element?he=T.route.element:he=w,X.createElement(HT,{match:T,routeContext:{outlet:w,matches:de,isDataRoute:t!=null},children:he})};return t&&(T.route.ErrorBoundary||T.route.errorElement||I===0)?X.createElement(WT,{location:t.location,revalidation:t.revalidation,component:H,error:F,children:ae(),routeContext:{outlet:null,matches:de,isDataRoute:!0}}):ae()},null)}var Q_=(function(n){return n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n})(Q_||{}),Y_=(function(n){return n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n})(Y_||{});function KT(n){let e=X.useContext(kc);return e||ut(!1),e}function QT(n){let e=X.useContext(W_);return e||ut(!1),e}function YT(n){let e=X.useContext(Li);return e||ut(!1),e}function J_(n){let e=YT(),t=e.matches[e.matches.length-1];return t.route.id||ut(!1),t.route.id}function JT(){var n;let e=X.useContext(H_),t=QT(),i=J_();return e!==void 0?e:(n=t.errors)==null?void 0:n[i]}function XT(){let{router:n}=KT(Q_.UseNavigateStable),e=J_(Y_.UseNavigateStable),t=X.useRef(!1);return G_(()=>{t.current=!0}),X.useCallback(function(o,l){l===void 0&&(l={}),t.current&&(typeof o=="number"?n.navigate(o):n.navigate(o,rc({fromRouteId:e},l)))},[n,e])}const Qg={};function ZT(n,e,t){Qg[n]||(Qg[n]=!0)}function eI(n){let{to:e,replace:t,state:i,relative:o}=n;ml()||ut(!1);let{future:l,static:c}=X.useContext(Oi),{matches:f}=X.useContext(Li),{pathname:g}=Fo(),y=K_(),w=kf(e,Pf(f,l.v7_relativeSplatPath),g,o==="path"),T=JSON.stringify(w);return X.useEffect(()=>y(JSON.parse(T),{replace:t,state:i,relative:o}),[y,T,o,t,i]),null}function ds(n){ut(!1)}function tI(n){let{children:e,location:t}=n;return zT(Yd(e),t)}new Promise(()=>{});function Yd(n,e){e===void 0&&(e=[]);let t=[];return X.Children.forEach(n,(i,o)=>{if(!X.isValidElement(i))return;let l=[...e,o];if(i.type===X.Fragment){t.push.apply(t,Yd(i.props.children,l));return}i.type!==ds&&ut(!1),!i.props.index||!i.props.children||ut(!1);let c={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(c.children=Yd(i.props.children,l)),t.push(c)}),t}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ic(){return ic=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},ic.apply(this,arguments)}function X_(n,e){if(n==null)return{};var t={},i=Object.keys(n),o,l;for(l=0;l<i.length;l++)o=i[l],!(e.indexOf(o)>=0)&&(t[o]=n[o]);return t}function nI(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function rI(n,e){return n.button===0&&(!e||e==="_self")&&!nI(n)}const iI=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],sI=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],oI="6";try{window.__reactRouterVersion=oI}catch{}const aI=X.createContext({isTransitioning:!1}),lI=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",uI=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,cI=X.forwardRef(function(e,t){let{onClick:i,relative:o,reloadDocument:l,replace:c,state:f,target:g,to:y,preventScrollReset:w,viewTransition:T}=e,I=X_(e,iI),{basename:F}=X.useContext(Oi),$,H=!1;if(typeof y=="string"&&uI.test(y)&&($=y,lI))try{let he=new URL(window.location.href),_e=y.startsWith("//")?new URL(he.protocol+y):new URL(y),be=rl(_e.pathname,F);_e.origin===he.origin&&be!=null?y=be+_e.search+_e.hash:H=!0}catch{}let U=UT(y,{relative:o}),de=fI(y,{replace:c,state:f,target:g,preventScrollReset:w,relative:o,viewTransition:T});function ae(he){i&&i(he),he.defaultPrevented||de(he)}return X.createElement("a",ic({},I,{href:$||U,onClick:H||l?i:ae,ref:t,target:g}))}),hI=X.forwardRef(function(e,t){let{"aria-current":i="page",caseSensitive:o=!1,className:l="",end:c=!1,style:f,to:g,viewTransition:y,children:w}=e,T=X_(e,sI),I=xc(g,{relative:T.relative}),F=Fo(),$=X.useContext(W_),{navigator:H,basename:U}=X.useContext(Oi),de=$!=null&&pI(I)&&y===!0,ae=H.encodeLocation?H.encodeLocation(I).pathname:I.pathname,he=F.pathname,_e=$&&$.navigation&&$.navigation.location?$.navigation.location.pathname:null;o||(he=he.toLowerCase(),_e=_e?_e.toLowerCase():null,ae=ae.toLowerCase()),_e&&U&&(_e=rl(_e,U)||_e);const be=ae!=="/"&&ae.endsWith("/")?ae.length-1:ae.length;let Re=he===ae||!c&&he.startsWith(ae)&&he.charAt(be)==="/",k=_e!=null&&(_e===ae||!c&&_e.startsWith(ae)&&_e.charAt(ae.length)==="/"),A={isActive:Re,isPending:k,isTransitioning:de},C=Re?i:void 0,D;typeof l=="function"?D=l(A):D=[l,Re?"active":null,k?"pending":null,de?"transitioning":null].filter(Boolean).join(" ");let x=typeof f=="function"?f(A):f;return X.createElement(cI,ic({},T,{"aria-current":C,className:D,ref:t,style:x,to:g,viewTransition:y}),typeof w=="function"?w(A):w)});var Jd;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})(Jd||(Jd={}));var Yg;(function(n){n.UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(Yg||(Yg={}));function dI(n){let e=X.useContext(kc);return e||ut(!1),e}function fI(n,e){let{target:t,replace:i,state:o,preventScrollReset:l,relative:c,viewTransition:f}=e===void 0?{}:e,g=K_(),y=Fo(),w=xc(n,{relative:c});return X.useCallback(T=>{if(rI(T,t)){T.preventDefault();let I=i!==void 0?i:Wg(y)===Wg(w);g(n,{replace:I,state:o,preventScrollReset:l,relative:c,viewTransition:f})}},[y,g,w,i,o,t,n,l,c,f])}function pI(n,e){e===void 0&&(e={});let t=X.useContext(aI);t==null&&ut(!1);let{basename:i}=dI(Jd.useViewTransitionState),o=xc(n,{relative:e.relative});if(!t.isTransitioning)return!1;let l=rl(t.currentLocation.pathname,i)||t.currentLocation.pathname,c=rl(t.nextLocation.pathname,i)||t.nextLocation.pathname;return Qd(o.pathname,c)!=null||Qd(o.pathname,l)!=null}const mI=()=>{};var Jg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z_=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let o=n.charCodeAt(i);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},gI=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const o=n[t++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const l=n[t++];e[i++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=n[t++],c=n[t++],f=n[t++],g=((o&7)<<18|(l&63)<<12|(c&63)<<6|f&63)-65536;e[i++]=String.fromCharCode(55296+(g>>10)),e[i++]=String.fromCharCode(56320+(g&1023))}else{const l=n[t++],c=n[t++];e[i++]=String.fromCharCode((o&15)<<12|(l&63)<<6|c&63)}}return e.join("")},ev={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<n.length;o+=3){const l=n[o],c=o+1<n.length,f=c?n[o+1]:0,g=o+2<n.length,y=g?n[o+2]:0,w=l>>2,T=(l&3)<<4|f>>4;let I=(f&15)<<2|y>>6,F=y&63;g||(F=64,c||(I=64)),i.push(t[w],t[T],t[I],t[F])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Z_(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):gI(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<n.length;){const l=t[n.charAt(o++)],f=o<n.length?t[n.charAt(o)]:0;++o;const y=o<n.length?t[n.charAt(o)]:64;++o;const T=o<n.length?t[n.charAt(o)]:64;if(++o,l==null||f==null||y==null||T==null)throw new yI;const I=l<<2|f>>4;if(i.push(I),y!==64){const F=f<<4&240|y>>2;if(i.push(F),T!==64){const $=y<<6&192|T;i.push($)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class yI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _I=function(n){const e=Z_(n);return ev.encodeByteArray(e,!0)},sc=function(n){return _I(n).replace(/\./g,"")},tv=function(n){try{return ev.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wI=()=>vI().__FIREBASE_DEFAULTS__,EI=()=>{if(typeof process>"u"||typeof Jg>"u")return;const n=Jg.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},TI=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&tv(n[1]);return e&&JSON.parse(e)},Nc=()=>{try{return mI()||wI()||EI()||TI()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},nv=n=>{var e,t;return(t=(e=Nc())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},II=n=>{const e=nv(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},rv=()=>{var n;return(n=Nc())==null?void 0:n.config},iv=n=>{var e;return(e=Nc())==null?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uo(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function sv(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AI(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",o=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c={iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}},...n};return[sc(JSON.stringify(t)),sc(JSON.stringify(c)),""].join(".")}const Ka={};function RI(){const n={prod:[],emulator:[]};for(const e of Object.keys(Ka))Ka[e]?n.emulator.push(e):n.prod.push(e);return n}function CI(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Xg=!1;function ov(n,e){if(typeof window>"u"||typeof document>"u"||!Uo(window.location.host)||Ka[n]===e||Ka[n]||Xg)return;Ka[n]=e;function t(I){return`__firebase__banner__${I}`}const i="__firebase__banner",l=RI().prod.length>0;function c(){const I=document.getElementById(i);I&&I.remove()}function f(I){I.style.display="flex",I.style.background="#7faaf0",I.style.position="fixed",I.style.bottom="5px",I.style.left="5px",I.style.padding=".5em",I.style.borderRadius="5px",I.style.alignItems="center"}function g(I,F){I.setAttribute("width","24"),I.setAttribute("id",F),I.setAttribute("height","24"),I.setAttribute("viewBox","0 0 24 24"),I.setAttribute("fill","none"),I.style.marginLeft="-6px"}function y(){const I=document.createElement("span");return I.style.cursor="pointer",I.style.marginLeft="16px",I.style.fontSize="24px",I.innerHTML=" &times;",I.onclick=()=>{Xg=!0,c()},I}function w(I,F){I.setAttribute("id",F),I.innerText="Learn more",I.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",I.setAttribute("target","__blank"),I.style.paddingLeft="5px",I.style.textDecoration="underline"}function T(){const I=CI(i),F=t("text"),$=document.getElementById(F)||document.createElement("span"),H=t("learnmore"),U=document.getElementById(H)||document.createElement("a"),de=t("preprendIcon"),ae=document.getElementById(de)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(I.created){const he=I.element;f(he),w(U,H);const _e=y();g(ae,de),he.append(ae,$,U,_e),document.body.appendChild(he)}l?($.innerText="Preview backend disconnected.",ae.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(ae.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,$.innerText="Preview backend running in this workspace."),$.setAttribute("id",F)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function PI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Bt())}function kI(){var e;const n=(e=Nc())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function xI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function av(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function NI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function DI(){const n=Bt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function VI(){return!kI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function lv(){try{return typeof indexedDB=="object"}catch{return!1}}function uv(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)==null?void 0:l.message)||"")}}catch(t){e(t)}})}function bI(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OI="FirebaseError";class zn extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=OI,Object.setPrototypeOf(this,zn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,As.prototype.create)}}class As{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],c=l?LI(l,i):"Error",f=`${this.serviceName}: ${c} (${o}).`;return new zn(o,f,i)}}function LI(n,e){return n.replace(MI,(t,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const MI=/\{\$([^}]+)}/g;function FI(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Pi(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const o of t){if(!i.includes(o))return!1;const l=n[o],c=e[o];if(Zg(l)&&Zg(c)){if(!Pi(l,c))return!1}else if(l!==c)return!1}for(const o of i)if(!t.includes(o))return!1;return!0}function Zg(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jo(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function UI(n,e){const t=new jI(n,e);return t.subscribe.bind(t)}class jI{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");zI(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=Pd),o.error===void 0&&(o.error=Pd),o.complete===void 0&&(o.complete=Pd);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function zI(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Pd(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BI=1e3,$I=2,qI=14400*1e3,WI=.5;function ey(n,e=BI,t=$I){const i=e*Math.pow(t,n),o=Math.round(WI*i*(Math.random()-.5)*2);return Math.min(qI,i+o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(n){return n&&n._delegate?n._delegate:n}class Un{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HI{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new SI;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(KI(e))try{this.getOrInitializeService({instanceIdentifier:fs})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});i.resolve(l)}catch{}}}}clearInstance(e=fs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=fs){return this.instances.has(e)}getOptions(e=fs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[l,c]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);i===f&&c.resolve(o)}return o}onInit(e,t){const i=this.normalizeInstanceIdentifier(t),o=this.onInitCallbacks.get(i)??new Set;o.add(e),this.onInitCallbacks.set(i,o);const l=this.instances.get(i);return l&&e(l,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const o of i)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:GI(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=fs){return this.component?this.component.multipleInstances?e:fs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function GI(n){return n===fs?void 0:n}function KI(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new HI(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ke;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ke||(ke={}));const YI={debug:ke.DEBUG,verbose:ke.VERBOSE,info:ke.INFO,warn:ke.WARN,error:ke.ERROR,silent:ke.SILENT},JI=ke.INFO,XI={[ke.DEBUG]:"log",[ke.VERBOSE]:"log",[ke.INFO]:"info",[ke.WARN]:"warn",[ke.ERROR]:"error"},ZI=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),o=XI[e];if(o)console[o](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Dc{constructor(e){this.name=e,this._logLevel=JI,this._logHandler=ZI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ke))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?YI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ke.DEBUG,...e),this._logHandler(this,ke.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ke.VERBOSE,...e),this._logHandler(this,ke.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ke.INFO,...e),this._logHandler(this,ke.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ke.WARN,...e),this._logHandler(this,ke.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ke.ERROR,...e),this._logHandler(this,ke.ERROR,...e)}}const e1=(n,e)=>e.some(t=>n instanceof t);let ty,ny;function t1(){return ty||(ty=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function n1(){return ny||(ny=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const cv=new WeakMap,Xd=new WeakMap,hv=new WeakMap,kd=new WeakMap,Nf=new WeakMap;function r1(n){const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("success",l),n.removeEventListener("error",c)},l=()=>{t(Ii(n.result)),o()},c=()=>{i(n.error),o()};n.addEventListener("success",l),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&cv.set(t,n)}).catch(()=>{}),Nf.set(e,n),e}function i1(n){if(Xd.has(n))return;const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",c),n.removeEventListener("abort",c)},l=()=>{t(),o()},c=()=>{i(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",l),n.addEventListener("error",c),n.addEventListener("abort",c)});Xd.set(n,e)}let Zd={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Xd.get(n);if(e==="objectStoreNames")return n.objectStoreNames||hv.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ii(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function s1(n){Zd=n(Zd)}function o1(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(xd(this),e,...t);return hv.set(i,e.sort?e.sort():[e]),Ii(i)}:n1().includes(n)?function(...e){return n.apply(xd(this),e),Ii(cv.get(this))}:function(...e){return Ii(n.apply(xd(this),e))}}function a1(n){return typeof n=="function"?o1(n):(n instanceof IDBTransaction&&i1(n),e1(n,t1())?new Proxy(n,Zd):n)}function Ii(n){if(n instanceof IDBRequest)return r1(n);if(kd.has(n))return kd.get(n);const e=a1(n);return e!==n&&(kd.set(n,e),Nf.set(e,n)),e}const xd=n=>Nf.get(n);function dv(n,e,{blocked:t,upgrade:i,blocking:o,terminated:l}={}){const c=indexedDB.open(n,e),f=Ii(c);return i&&c.addEventListener("upgradeneeded",g=>{i(Ii(c.result),g.oldVersion,g.newVersion,Ii(c.transaction),g)}),t&&c.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),f.then(g=>{l&&g.addEventListener("close",()=>l()),o&&g.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),f}const l1=["get","getKey","getAll","getAllKeys","count"],u1=["put","add","delete","clear"],Nd=new Map;function ry(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Nd.get(e))return Nd.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,o=u1.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(o||l1.includes(t)))return;const l=async function(c,...f){const g=this.transaction(c,o?"readwrite":"readonly");let y=g.store;return i&&(y=y.index(f.shift())),(await Promise.all([y[t](...f),o&&g.done]))[0]};return Nd.set(e,l),l}s1(n=>({...n,get:(e,t,i)=>ry(e,t)||n.get(e,t,i),has:(e,t)=>!!ry(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(h1(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function h1(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ef="@firebase/app",iy="0.14.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or=new Dc("@firebase/app"),d1="@firebase/app-compat",f1="@firebase/analytics-compat",p1="@firebase/analytics",m1="@firebase/app-check-compat",g1="@firebase/app-check",y1="@firebase/auth",_1="@firebase/auth-compat",v1="@firebase/database",w1="@firebase/data-connect",E1="@firebase/database-compat",T1="@firebase/functions",I1="@firebase/functions-compat",S1="@firebase/installations",A1="@firebase/installations-compat",R1="@firebase/messaging",C1="@firebase/messaging-compat",P1="@firebase/performance",k1="@firebase/performance-compat",x1="@firebase/remote-config",N1="@firebase/remote-config-compat",D1="@firebase/storage",V1="@firebase/storage-compat",b1="@firebase/firestore",O1="@firebase/ai",L1="@firebase/firestore-compat",M1="firebase",F1="12.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tf="[DEFAULT]",U1={[ef]:"fire-core",[d1]:"fire-core-compat",[p1]:"fire-analytics",[f1]:"fire-analytics-compat",[g1]:"fire-app-check",[m1]:"fire-app-check-compat",[y1]:"fire-auth",[_1]:"fire-auth-compat",[v1]:"fire-rtdb",[w1]:"fire-data-connect",[E1]:"fire-rtdb-compat",[T1]:"fire-fn",[I1]:"fire-fn-compat",[S1]:"fire-iid",[A1]:"fire-iid-compat",[R1]:"fire-fcm",[C1]:"fire-fcm-compat",[P1]:"fire-perf",[k1]:"fire-perf-compat",[x1]:"fire-rc",[N1]:"fire-rc-compat",[D1]:"fire-gcs",[V1]:"fire-gcs-compat",[b1]:"fire-fst",[L1]:"fire-fst-compat",[O1]:"fire-vertex","fire-js":"fire-js",[M1]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oc=new Map,j1=new Map,nf=new Map;function sy(n,e){try{n.container.addComponent(e)}catch(t){Or.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function dr(n){const e=n.name;if(nf.has(e))return Or.debug(`There were multiple attempts to register component ${e}.`),!1;nf.set(e,n);for(const t of oc.values())sy(t,n);for(const t of j1.values())sy(t,n);return!0}function Rs(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function On(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Si=new As("app","Firebase",z1);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B1{constructor(e,t,i){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Un("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Si.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zo=F1;function fv(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i={name:tf,automaticDataCollectionEnabled:!0,...e},o=i.name;if(typeof o!="string"||!o)throw Si.create("bad-app-name",{appName:String(o)});if(t||(t=rv()),!t)throw Si.create("no-options");const l=oc.get(o);if(l){if(Pi(t,l.options)&&Pi(i,l.config))return l;throw Si.create("duplicate-app",{appName:o})}const c=new QI(o);for(const g of nf.values())c.addComponent(g);const f=new B1(t,i,c);return oc.set(o,f),f}function Df(n=tf){const e=oc.get(n);if(!e&&n===tf&&rv())return fv();if(!e)throw Si.create("no-app",{appName:n});return e}function Sn(n,e,t){let i=U1[n]??n;t&&(i+=`-${t}`);const o=i.match(/\s|\//),l=e.match(/\s|\//);if(o||l){const c=[`Unable to register library "${i}" with version "${e}":`];o&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&l&&c.push("and"),l&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Or.warn(c.join(" "));return}dr(new Un(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $1="firebase-heartbeat-database",q1=1,il="firebase-heartbeat-store";let Dd=null;function pv(){return Dd||(Dd=dv($1,q1,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(il)}catch(t){console.warn(t)}}}}).catch(n=>{throw Si.create("idb-open",{originalErrorMessage:n.message})})),Dd}async function W1(n){try{const t=(await pv()).transaction(il),i=await t.objectStore(il).get(mv(n));return await t.done,i}catch(e){if(e instanceof zn)Or.warn(e.message);else{const t=Si.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Or.warn(t.message)}}}async function oy(n,e){try{const i=(await pv()).transaction(il,"readwrite");await i.objectStore(il).put(e,mv(n)),await i.done}catch(t){if(t instanceof zn)Or.warn(t.message);else{const i=Si.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Or.warn(i.message)}}}function mv(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H1=1024,G1=30;class K1{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Y1(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=ay();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(c=>c.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats.length>G1){const c=J1(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){Or.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ay(),{heartbeatsToSend:i,unsentEntries:o}=Q1(this._heartbeatsCache.heartbeats),l=sc(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Or.warn(t),""}}}function ay(){return new Date().toISOString().substring(0,10)}function Q1(n,e=H1){const t=[];let i=n.slice();for(const o of n){const l=t.find(c=>c.agent===o.agent);if(l){if(l.dates.push(o.date),ly(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),ly(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class Y1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return lv()?uv().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await W1(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return oy(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return oy(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ly(n){return sc(JSON.stringify({version:2,heartbeats:n})).length}function J1(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X1(n){dr(new Un("platform-logger",e=>new c1(e),"PRIVATE")),dr(new Un("heartbeat",e=>new K1(e),"PRIVATE")),Sn(ef,iy,n),Sn(ef,iy,"esm2020"),Sn("fire-js","")}X1("");var Z1="firebase",eS="12.9.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Sn(Z1,eS,"app");function gv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const tS=gv,yv=new As("auth","Firebase",gv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ac=new Dc("@firebase/auth");function nS(n,...e){ac.logLevel<=ke.WARN&&ac.warn(`Auth (${zo}): ${n}`,...e)}function Gu(n,...e){ac.logLevel<=ke.ERROR&&ac.error(`Auth (${zo}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lr(n,...e){throw Vf(n,...e)}function dn(n,...e){return Vf(n,...e)}function _v(n,e,t){const i={...tS(),[e]:t};return new As("auth","Firebase",i).create(e,{appName:n.name})}function Ai(n){return _v(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Vf(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return yv.create(n,...e)}function oe(n,e,...t){if(!n)throw Vf(e,...t)}function Vr(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Gu(e),new Error(e)}function Mr(n,e){n||Vr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rf(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function vv(){return uy()==="http:"||uy()==="https:"}function uy(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(vv()||av()||"connection"in navigator)?navigator.onLine:!0}function iS(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(e,t){this.shortDelay=e,this.longDelay=t,Mr(t>e,"Short delay should be less than long delay!"),this.isMobile=PI()||NI()}get(){return rS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bf(n,e){Mr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Vr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Vr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Vr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oS=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],aS=new gl(3e4,6e4);function pr(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Bn(n,e,t,i,o={}){return Ev(n,o,async()=>{let l={},c={};i&&(e==="GET"?c=i:l={body:JSON.stringify(i)});const f=jo({key:n.config.apiKey,...c}).slice(1),g=await n._getAdditionalHeaders();g["Content-Type"]="application/json",n.languageCode&&(g["X-Firebase-Locale"]=n.languageCode);const y={method:e,headers:g,...l};return xI()||(y.referrerPolicy="no-referrer"),n.emulatorConfig&&Uo(n.emulatorConfig.host)&&(y.credentials="include"),wv.fetch()(await Tv(n,n.config.apiHost,t,f),y)})}async function Ev(n,e,t){n._canInitEmulator=!1;const i={...sS,...e};try{const o=new uS(n),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw $a(n,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const f=l.ok?c.errorMessage:c.error.message,[g,y]=f.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw $a(n,"credential-already-in-use",c);if(g==="EMAIL_EXISTS")throw $a(n,"email-already-in-use",c);if(g==="USER_DISABLED")throw $a(n,"user-disabled",c);const w=i[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw _v(n,w,y);Lr(n,w)}}catch(o){if(o instanceof zn)throw o;Lr(n,"network-request-failed",{message:String(o)})}}async function Vc(n,e,t,i,o={}){const l=await Bn(n,e,t,i,o);return"mfaPendingCredential"in l&&Lr(n,"multi-factor-auth-required",{_serverResponse:l}),l}async function Tv(n,e,t,i){const o=`${e}${t}?${i}`,l=n,c=l.config.emulator?bf(n.config,o):`${n.config.apiScheme}://${o}`;return oS.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(c).toString():c}function lS(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class uS{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(dn(this.auth,"network-request-failed")),aS.get())})}}function $a(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const o=dn(n,e,i);return o.customData._tokenResponse=t,o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cy(n){return n!==void 0&&n.getResponse!==void 0}function hy(n){return n!==void 0&&n.enterprise!==void 0}class Iv{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return lS(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cS(n){return(await Bn(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function Sv(n,e){return Bn(n,"GET","/v2/recaptchaConfig",pr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hS(n,e){return Bn(n,"POST","/v1/accounts:delete",e)}async function lc(n,e){return Bn(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qa(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function dS(n,e=!1){const t=it(n),i=await t.getIdToken(e),o=Of(i);oe(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,c=l==null?void 0:l.sign_in_provider;return{claims:o,token:i,authTime:Qa(Vd(o.auth_time)),issuedAtTime:Qa(Vd(o.iat)),expirationTime:Qa(Vd(o.exp)),signInProvider:c||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function Vd(n){return Number(n)*1e3}function Of(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Gu("JWT malformed, contained fewer than 3 sections"),null;try{const o=tv(t);return o?JSON.parse(o):(Gu("Failed to decode base64 JWT payload"),null)}catch(o){return Gu("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function dy(n){const e=Of(n);return oe(e,"internal-error"),oe(typeof e.exp<"u","internal-error"),oe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sl(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof zn&&fS(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function fS({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qa(this.lastLoginAt),this.creationTime=Qa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uc(n){var T;const e=n.auth,t=await n.getIdToken(),i=await sl(n,lc(e,{idToken:t}));oe(i==null?void 0:i.users.length,e,"internal-error");const o=i.users[0];n._notifyReloadListener(o);const l=(T=o.providerUserInfo)!=null&&T.length?Av(o.providerUserInfo):[],c=gS(n.providerData,l),f=n.isAnonymous,g=!(n.email&&o.passwordHash)&&!(c!=null&&c.length),y=f?g:!1,w={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new sf(o.createdAt,o.lastLoginAt),isAnonymous:y};Object.assign(n,w)}async function mS(n){const e=it(n);await uc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function gS(n,e){return[...n.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function Av(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yS(n,e){const t=await Ev(n,{},async()=>{const i=jo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=n.config,c=await Tv(n,o,"/v1/token",`key=${l}`),f=await n._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:f,body:i};return n.emulatorConfig&&Uo(n.emulatorConfig.host)&&(g.credentials="include"),wv.fetch()(c,g)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function _S(n,e){return Bn(n,"POST","/v2/accounts:revokeToken",pr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){oe(e.idToken,"internal-error"),oe(typeof e.idToken<"u","internal-error"),oe(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):dy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){oe(e.length!==0,"internal-error");const t=dy(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(oe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:o,expiresIn:l}=await yS(e,t);this.updateTokensAndExpiration(i,o,Number(l))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:o,expirationTime:l}=t,c=new Ao;return i&&(oe(typeof i=="string","internal-error",{appName:e}),c.refreshToken=i),o&&(oe(typeof o=="string","internal-error",{appName:e}),c.accessToken=o),l&&(oe(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ao,this.toJSON())}_performRefresh(){return Vr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gi(n,e){oe(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ln{constructor({uid:e,auth:t,stsTokenManager:i,...o}){this.providerId="firebase",this.proactiveRefresh=new pS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new sf(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await sl(this,this.stsTokenManager.getToken(this.auth,e));return oe(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return dS(this,e)}reload(){return mS(this)}_assign(e){this!==e&&(oe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ln({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){oe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await uc(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(On(this.auth.app))return Promise.reject(Ai(this.auth));const e=await this.getIdToken();return await sl(this,hS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const i=t.displayName??void 0,o=t.email??void 0,l=t.phoneNumber??void 0,c=t.photoURL??void 0,f=t.tenantId??void 0,g=t._redirectEventId??void 0,y=t.createdAt??void 0,w=t.lastLoginAt??void 0,{uid:T,emailVerified:I,isAnonymous:F,providerData:$,stsTokenManager:H}=t;oe(T&&H,e,"internal-error");const U=Ao.fromJSON(this.name,H);oe(typeof T=="string",e,"internal-error"),gi(i,e.name),gi(o,e.name),oe(typeof I=="boolean",e,"internal-error"),oe(typeof F=="boolean",e,"internal-error"),gi(l,e.name),gi(c,e.name),gi(f,e.name),gi(g,e.name),gi(y,e.name),gi(w,e.name);const de=new Ln({uid:T,auth:e,email:o,emailVerified:I,displayName:i,isAnonymous:F,photoURL:c,phoneNumber:l,tenantId:f,stsTokenManager:U,createdAt:y,lastLoginAt:w});return $&&Array.isArray($)&&(de.providerData=$.map(ae=>({...ae}))),g&&(de._redirectEventId=g),de}static async _fromIdTokenResponse(e,t,i=!1){const o=new Ao;o.updateFromServerResponse(t);const l=new Ln({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await uc(l),l}static async _fromGetAccountInfoResponse(e,t,i){const o=t.users[0];oe(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?Av(o.providerUserInfo):[],c=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),f=new Ao;f.updateFromIdToken(i);const g=new Ln({uid:o.localId,auth:e,stsTokenManager:f,isAnonymous:c}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new sf(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(g,y),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fy=new Map;function br(n){Mr(n instanceof Function,"Expected a class definition");let e=fy.get(n);return e?(Mr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,fy.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Rv.type="NONE";const py=Rv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ku(n,e,t){return`firebase:${n}:${e}:${t}`}class Ro{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:o,name:l}=this.auth;this.fullUserKey=Ku(this.userKey,o.apiKey,l),this.fullPersistenceKey=Ku("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await lc(this.auth,{idToken:e}).catch(()=>{});return t?Ln._fromGetAccountInfoResponse(this.auth,t,e):null}return Ln._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Ro(br(py),e,i);const o=(await Promise.all(t.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let l=o[0]||br(py);const c=Ku(i,e.config.apiKey,e.name);let f=null;for(const y of t)try{const w=await y._get(c);if(w){let T;if(typeof w=="string"){const I=await lc(e,{idToken:w}).catch(()=>{});if(!I)break;T=await Ln._fromGetAccountInfoResponse(e,I,w)}else T=Ln._fromJSON(e,w);y!==l&&(f=T),l=y;break}}catch{}const g=o.filter(y=>y._shouldAllowMigration);return!l._shouldAllowMigration||!g.length?new Ro(l,e,i):(l=g[0],f&&await l._set(c,f.toJSON()),await Promise.all(t.map(async y=>{if(y!==l)try{await y._remove(c)}catch{}})),new Ro(l,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function my(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(xv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Cv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Dv(e))return"Blackberry";if(Vv(e))return"Webos";if(Pv(e))return"Safari";if((e.includes("chrome/")||kv(e))&&!e.includes("edge/"))return"Chrome";if(Nv(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Cv(n=Bt()){return/firefox\//i.test(n)}function Pv(n=Bt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function kv(n=Bt()){return/crios\//i.test(n)}function xv(n=Bt()){return/iemobile/i.test(n)}function Nv(n=Bt()){return/android/i.test(n)}function Dv(n=Bt()){return/blackberry/i.test(n)}function Vv(n=Bt()){return/webos/i.test(n)}function Lf(n=Bt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function vS(n=Bt()){var e;return Lf(n)&&!!((e=window.navigator)!=null&&e.standalone)}function wS(){return DI()&&document.documentMode===10}function bv(n=Bt()){return Lf(n)||Nv(n)||Vv(n)||Dv(n)||/windows phone/i.test(n)||xv(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ov(n,e=[]){let t;switch(n){case"Browser":t=my(Bt());break;case"Worker":t=`${my(Bt())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${zo}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ES{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=l=>new Promise((c,f)=>{try{const g=e(l);c(g)}catch(g){f(g)}});i.onAbort=t,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TS(n,e={}){return Bn(n,"GET","/v2/passwordPolicy",pr(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IS=6;class SS{constructor(e){var i;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??IS,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((i=e.allowedNonAlphanumericCharacters)==null?void 0:i.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AS{constructor(e,t,i,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new gy(this),this.idTokenSubscription=new gy(this),this.beforeStateQueue=new ES(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=yv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=br(t)),this._initializationPromise=this.queue(async()=>{var i,o,l;if(!this._deleted&&(this.persistenceManager=await Ro.create(this,e),(i=this._resolvePersistenceManagerAvailable)==null||i.call(this),!this._deleted)){if((o=this._popupRedirectResolver)!=null&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)==null?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await lc(this,{idToken:e}),i=await Ln._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var l;if(On(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(f,f))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let i=t,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(l=this.redirectUser)==null?void 0:l._redirectEventId,f=i==null?void 0:i._redirectEventId,g=await this.tryRedirectSignIn(e);(!c||c===f)&&(g!=null&&g.user)&&(i=g.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(c){i=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return oe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await uc(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=iS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(On(this.app))return Promise.reject(Ai(this));const t=e?it(e):null;return t&&oe(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&oe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return On(this.app)?Promise.reject(Ai(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return On(this.app)?Promise.reject(Ai(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(br(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await TS(this),t=new SS(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new As("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await _S(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&br(e)||this._popupRedirectResolver;oe(t,this,"argument-error"),this.redirectPersistenceManager=await Ro.create(this,[br(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)==null?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let c=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(oe(f,this,"internal-error"),f.then(()=>{c||l(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,i,o);return()=>{c=!0,g()}}else{const g=e.addObserver(t);return()=>{c=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return oe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ov(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var o;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((o=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:o.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var t;if(On(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&nS(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Mi(n){return it(n)}class gy{constructor(e){this.auth=e,this.observer=null,this.addObserver=UI(t=>this.observer=t)}get next(){return oe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function RS(n){yl=n}function Mf(n){return yl.loadJS(n)}function CS(){return yl.recaptchaV2Script}function PS(){return yl.recaptchaEnterpriseScript}function kS(){return yl.gapiScript}function Lv(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xS=500,NS=6e4,zu=1e12;class DS{constructor(e){this.auth=e,this.counter=zu,this._widgets=new Map}render(e,t){const i=this.counter;return this._widgets.set(i,new OS(e,this.auth.name,t||{})),this.counter++,i}reset(e){var i;const t=e||zu;(i=this._widgets.get(t))==null||i.delete(),this._widgets.delete(t)}getResponse(e){var i;const t=e||zu;return((i=this._widgets.get(t))==null?void 0:i.getResponse())||""}async execute(e){var i;const t=e||zu;return(i=this._widgets.get(t))==null||i.execute(),""}}class VS{constructor(){this.enterprise=new bS}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class bS{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class OS{constructor(e,t,i){this.params=i,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const o=typeof e=="string"?document.getElementById(e):e;oe(o,"argument-error",{appName:t}),this.container=o,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=LS(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},NS)},xS))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function LS(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let i=0;i<n;i++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}const MS="recaptcha-enterprise",Ya="NO_RECAPTCHA";class Mv{constructor(e){this.type=MS,this.auth=Mi(e)}async verify(e="verify",t=!1){async function i(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(c,f)=>{Sv(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const y=new Iv(g);return l.tenantId==null?l._agentRecaptchaConfig=y:l._tenantRecaptchaConfigs[l.tenantId]=y,c(y.siteKey)}}).catch(g=>{f(g)})})}function o(l,c,f){const g=window.grecaptcha;hy(g)?g.enterprise.ready(()=>{g.enterprise.execute(l,{action:e}).then(y=>{c(y)}).catch(()=>{c(Ya)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new VS().execute("siteKey",{action:"verify"}):new Promise((l,c)=>{i(this.auth).then(f=>{if(!t&&hy(window.grecaptcha))o(f,l,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let g=PS();g.length!==0&&(g+=f),Mf(g).then(()=>{o(f,l,c)}).catch(y=>{c(y)})}}).catch(f=>{c(f)})})}}async function bd(n,e,t,i=!1,o=!1){const l=new Mv(n);let c;if(o)c=Ya;else try{c=await l.verify(t)}catch{c=await l.verify(t,!0)}const f={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in f){const g=f.phoneEnrollmentInfo.phoneNumber,y=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:g,recaptchaToken:y,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){const g=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:g,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return i?Object.assign(f,{captchaResp:c}):Object.assign(f,{captchaResponse:c}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function Od(n,e,t,i,o){var l;if((l=n._getRecaptchaConfig())!=null&&l.isProviderEnabled("PHONE_PROVIDER")){const c=await bd(n,e,t);return i(n,c).catch(async f=>{var g;if(((g=n._getRecaptchaConfig())==null?void 0:g.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(f.code==="auth/missing-recaptcha-token"||f.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${t} flow.`);const y=await bd(n,e,t,!1,!0);return i(n,y)}return Promise.reject(f)})}else{const c=await bd(n,e,t,!1,!0);return i(n,c)}}async function FS(n){const e=Mi(n),t=await Sv(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),i=new Iv(t);e.tenantId==null?e._agentRecaptchaConfig=i:e._tenantRecaptchaConfigs[e.tenantId]=i,i.isAnyProviderEnabled()&&new Mv(e).verify()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function US(n,e){const t=Rs(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(Pi(l,e??{}))return o;Lr(o,"already-initialized")}return t.initialize({options:e})}function jS(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(br);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function zS(n,e,t){const i=Mi(n);oe(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,l=Fv(e),{host:c,port:f}=BS(e),g=f===null?"":`:${f}`,y={url:`${l}//${c}${g}/`},w=Object.freeze({host:c,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!i._canInitEmulator){oe(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),oe(Pi(y,i.config.emulator)&&Pi(w,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=y,i.emulatorConfig=w,i.settings.appVerificationDisabledForTesting=!0,Uo(c)?(sv(`${l}//${c}${g}`),ov("Auth",!0)):$S()}function Fv(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function BS(n){const e=Fv(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const l=o[1];return{host:l,port:yy(i.substr(l.length+1))}}else{const[l,c]=i.split(":");return{host:l,port:yy(c)}}}function yy(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function $S(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Vr("not implemented")}_getIdTokenResponse(e){return Vr("not implemented")}_linkToIdToken(e,t){return Vr("not implemented")}_getReauthenticationResolver(e){return Vr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Co(n,e){return Vc(n,"POST","/v1/accounts:signInWithIdp",pr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qS="http://localhost";class vs extends Ff{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new vs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Lr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o,...l}=t;if(!i||!o)return null;const c=new vs(i,o);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return Co(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Co(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Co(e,t)}buildRequest(){const e={requestUri:qS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=jo(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _y(n,e){return Bn(n,"POST","/v1/accounts:sendVerificationCode",pr(n,e))}async function WS(n,e){return Vc(n,"POST","/v1/accounts:signInWithPhoneNumber",pr(n,e))}async function HS(n,e){const t=await Vc(n,"POST","/v1/accounts:signInWithPhoneNumber",pr(n,e));if(t.temporaryProof)throw $a(n,"account-exists-with-different-credential",t);return t}const GS={USER_NOT_FOUND:"user-not-found"};async function KS(n,e){const t={...e,operation:"REAUTH"};return Vc(n,"POST","/v1/accounts:signInWithPhoneNumber",pr(n,t),GS)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja extends Ff{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Ja({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Ja({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return WS(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return HS(e,{idToken:t,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return KS(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:i,verificationCode:o}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:i,code:o}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:i,phoneNumber:o,temporaryProof:l}=e;return!i&&!t&&!o&&!l?null:new Ja({verificationId:t,verificationCode:i,phoneNumber:o,temporaryProof:l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l extends Uv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi extends _l{constructor(){super("facebook.com")}static credential(e){return vs._fromParams({providerId:yi.PROVIDER_ID,signInMethod:yi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yi.credentialFromTaggedObject(e)}static credentialFromError(e){return yi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yi.credential(e.oauthAccessToken)}catch{return null}}}yi.FACEBOOK_SIGN_IN_METHOD="facebook.com";yi.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i extends _l{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return vs._fromParams({providerId:_i.PROVIDER_ID,signInMethod:_i.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return _i.credentialFromTaggedObject(e)}static credentialFromError(e){return _i.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return _i.credential(t,i)}catch{return null}}}_i.GOOGLE_SIGN_IN_METHOD="google.com";_i.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi extends _l{constructor(){super("github.com")}static credential(e){return vs._fromParams({providerId:vi.PROVIDER_ID,signInMethod:vi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vi.credentialFromTaggedObject(e)}static credentialFromError(e){return vi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vi.credential(e.oauthAccessToken)}catch{return null}}}vi.GITHUB_SIGN_IN_METHOD="github.com";vi.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi extends _l{constructor(){super("twitter.com")}static credential(e,t){return vs._fromParams({providerId:wi.PROVIDER_ID,signInMethod:wi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return wi.credentialFromTaggedObject(e)}static credentialFromError(e){return wi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return wi.credential(t,i)}catch{return null}}}wi.TWITTER_SIGN_IN_METHOD="twitter.com";wi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,o=!1){const l=await Ln._fromIdTokenResponse(e,i,o),c=vy(i);return new Do({user:l,providerId:c,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const o=vy(i);return new Do({user:e,providerId:o,_tokenResponse:i,operationType:t})}}function vy(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc extends zn{constructor(e,t,i,o){super(t.code,t.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,cc.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,o){return new cc(e,t,i,o)}}function jv(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?cc._fromErrorAndOperation(n,l,e,i):l})}async function QS(n,e,t=!1){const i=await sl(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Do._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YS(n,e,t=!1){const{auth:i}=n;if(On(i.app))return Promise.reject(Ai(i));const o="reauthenticate";try{const l=await sl(n,jv(i,o,e,n),t);oe(l.idToken,i,"internal-error");const c=Of(l.idToken);oe(c,i,"internal-error");const{sub:f}=c;return oe(n.uid===f,i,"user-mismatch"),Do._forOperation(n,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&Lr(i,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zv(n,e,t=!1){if(On(n.app))return Promise.reject(Ai(n));const i="signIn",o=await jv(n,i,e),l=await Do._fromIdTokenResponse(n,i,o);return t||await n._updateCurrentUser(l.user),l}async function JS(n,e){return zv(Mi(n),e)}function XS(n,e,t,i){return it(n).onIdTokenChanged(e,t,i)}function ZS(n,e,t){return it(n).beforeAuthStateChanged(e,t)}function eA(n,e,t,i){return it(n).onAuthStateChanged(e,t,i)}function tA(n){return it(n).signOut()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wy(n,e){return Bn(n,"POST","/v2/accounts/mfaEnrollment:start",pr(n,e))}const hc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bv{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(hc,"1"),this.storage.removeItem(hc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nA=1e3,rA=10;class $v extends Bv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=bv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),o=this.localCache[t];i!==o&&e(t,o,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,f,g)=>{this.notifyListeners(c,g)});return}const i=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const c=this.storage.getItem(i);!t&&this.localCache[i]===c||this.notifyListeners(i,c)},l=this.storage.getItem(i);wS()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,rA):o()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},nA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}$v.type="LOCAL";const iA=$v;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qv extends Bv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}qv.type="SESSION";const Wv=qv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sA(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const i=new bc(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:o,data:l}=t.data,c=this.handlersMap[o];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const f=Array.from(c).map(async y=>y(t.origin,l)),g=await sA(f);t.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}bc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uf(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,c;return new Promise((f,g)=>{const y=Uf("",20);o.port1.start();const w=setTimeout(()=>{g(new Error("unsupported_event"))},i);c={messageChannel:o,onMessage(T){const I=T;if(I.data.eventId===y)switch(I.data.status){case"ack":clearTimeout(w),l=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(I.data.response);break;default:clearTimeout(w),clearTimeout(l),g(new Error("invalid_response"));break}}},this.handlers.add(c),o.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:y,data:t},[o.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(){return window}function aA(n){pt().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jf(){return typeof pt().WorkerGlobalScope<"u"&&typeof pt().importScripts=="function"}async function lA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function uA(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function cA(){return jf()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hv="firebaseLocalStorageDb",hA=1,dc="firebaseLocalStorage",Gv="fbase_key";class vl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Oc(n,e){return n.transaction([dc],e?"readwrite":"readonly").objectStore(dc)}function dA(){const n=indexedDB.deleteDatabase(Hv);return new vl(n).toPromise()}function of(){const n=indexedDB.open(Hv,hA);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(dc,{keyPath:Gv})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(dc)?e(i):(i.close(),await dA(),e(await of()))})})}async function Ey(n,e,t){const i=Oc(n,!0).put({[Gv]:e,value:t});return new vl(i).toPromise()}async function fA(n,e){const t=Oc(n,!1).get(e),i=await new vl(t).toPromise();return i===void 0?null:i.value}function Ty(n,e){const t=Oc(n,!0).delete(e);return new vl(t).toPromise()}const pA=800,mA=3;class Kv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await of(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>mA)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return jf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=bc._getInstance(cA()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,i;if(this.activeServiceWorker=await lA(),!this.activeServiceWorker)return;this.sender=new oA(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(i=e[0])!=null&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||uA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await of();return await Ey(e,hc,"1"),await Ty(e,hc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Ey(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>fA(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ty(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=Oc(o,!1).getAll();return new vl(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),pA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Kv.type="LOCAL";const gA=Kv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iy(n,e){return Bn(n,"POST","/v2/accounts/mfaSignIn:start",pr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ld=Lv("rcb"),yA=new gl(3e4,6e4);class _A{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!((e=pt().grecaptcha)!=null&&e.render)}load(e,t=""){return oe(vA(t),e,"argument-error"),this.shouldResolveImmediately(t)&&cy(pt().grecaptcha)?Promise.resolve(pt().grecaptcha):new Promise((i,o)=>{const l=pt().setTimeout(()=>{o(dn(e,"network-request-failed"))},yA.get());pt()[Ld]=()=>{pt().clearTimeout(l),delete pt()[Ld];const f=pt().grecaptcha;if(!f||!cy(f)){o(dn(e,"internal-error"));return}const g=f.render;f.render=(y,w)=>{const T=g(y,w);return this.counter++,T},this.hostLanguage=t,i(f)};const c=`${CS()}?${jo({onload:Ld,render:"explicit",hl:t})}`;Mf(c).catch(()=>{clearTimeout(l),o(dn(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!((t=pt().grecaptcha)!=null&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function vA(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class wA{async load(e){return new DS(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xa="recaptcha",EA={theme:"light",type:"image"};class TA{constructor(e,t,i={...EA}){this.parameters=i,this.type=Xa,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Mi(e),this.isInvisible=this.parameters.size==="invisible",oe(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const o=typeof t=="string"?document.getElementById(t):t;oe(o,this.auth,"argument-error"),this.container=o,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new wA:new _A,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),i=t.getResponse(e);return i||new Promise(o=>{const l=c=>{c&&(this.tokenChangeListeners.delete(l),o(c))};this.tokenChangeListeners.add(l),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){oe(!this.parameters.sitekey,this.auth,"argument-error"),oe(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),oe(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(i=>i(t)),typeof e=="function")e(t);else if(typeof e=="string"){const i=pt()[e];typeof i=="function"&&i(t)}}}assertNotDestroyed(){oe(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){oe(vv()&&!jf(),this.auth,"internal-error"),await IA(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await cS(this.auth);oe(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return oe(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function IA(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SA{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=Ja._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function AA(n,e,t){if(On(n.app))return Promise.reject(Ai(n));const i=Mi(n),o=await RA(i,e,it(t));return new SA(o,l=>JS(i,l))}async function RA(n,e,t){var i;if(!n._getRecaptchaConfig())try{await FS(n)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let o;if(typeof e=="string"?o={phoneNumber:e}:o=e,"session"in o){const l=o.session;if("phoneNumber"in o){oe(l.type==="enroll",n,"internal-error");const c={idToken:l.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await Od(n,c,"mfaSmsEnrollment",async(w,T)=>{if(T.phoneEnrollmentInfo.captchaResponse===Ya){oe((t==null?void 0:t.type)===Xa,w,"argument-error");const I=await Md(w,T,t);return wy(w,I)}return wy(w,T)},"PHONE_PROVIDER").catch(w=>Promise.reject(w))).phoneSessionInfo.sessionInfo}else{oe(l.type==="signin",n,"internal-error");const c=((i=o.multiFactorHint)==null?void 0:i.uid)||o.multiFactorUid;oe(c,n,"missing-multi-factor-info");const f={mfaPendingCredential:l.credential,mfaEnrollmentId:c,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await Od(n,f,"mfaSmsSignIn",async(T,I)=>{if(I.phoneSignInInfo.captchaResponse===Ya){oe((t==null?void 0:t.type)===Xa,T,"argument-error");const F=await Md(T,I,t);return Iy(T,F)}return Iy(T,I)},"PHONE_PROVIDER").catch(T=>Promise.reject(T))).phoneResponseInfo.sessionInfo}}else{const l={phoneNumber:o.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await Od(n,l,"sendVerificationCode",async(y,w)=>{if(w.captchaResponse===Ya){oe((t==null?void 0:t.type)===Xa,y,"argument-error");const T=await Md(y,w,t);return _y(y,T)}return _y(y,w)},"PHONE_PROVIDER").catch(y=>Promise.reject(y))).sessionInfo}}finally{t==null||t._reset()}}async function Md(n,e,t){oe(t.type===Xa,n,"argument-error");const i=await t.verify();oe(typeof i=="string",n,"argument-error");const o={...e};if("phoneEnrollmentInfo"in o){const l=o.phoneEnrollmentInfo.phoneNumber,c=o.phoneEnrollmentInfo.captchaResponse,f=o.phoneEnrollmentInfo.clientType,g=o.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(o,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:i,captchaResponse:c,clientType:f,recaptchaVersion:g}}),o}else if("phoneSignInInfo"in o){const l=o.phoneSignInInfo.captchaResponse,c=o.phoneSignInInfo.clientType,f=o.phoneSignInInfo.recaptchaVersion;return Object.assign(o,{phoneSignInInfo:{recaptchaToken:i,captchaResponse:l,clientType:c,recaptchaVersion:f}}),o}else return Object.assign(o,{recaptchaToken:i}),o}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CA(n,e){return e?br(e):(oe(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf extends Ff{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Co(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Co(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Co(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function PA(n){return zv(n.auth,new zf(n),n.bypassAuthState)}function kA(n){const{auth:e,user:t}=n;return oe(t,e,"internal-error"),YS(t,new zf(n),n.bypassAuthState)}async function xA(n){const{auth:e,user:t}=n;return oe(t,e,"internal-error"),QS(t,new zf(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qv{constructor(e,t,i,o,l=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:o,tenantId:l,error:c,type:f}=e;if(c){this.reject(c);return}const g={auth:this.auth,requestUri:t,sessionId:i,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(g))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return PA;case"linkViaPopup":case"linkViaRedirect":return xA;case"reauthViaPopup":case"reauthViaRedirect":return kA;default:Lr(this.auth,"internal-error")}}resolve(e){Mr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Mr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NA=new gl(2e3,1e4);class So extends Qv{constructor(e,t,i,o,l){super(e,t,o,l),this.provider=i,this.authWindow=null,this.pollId=null,So.currentPopupAction&&So.currentPopupAction.cancel(),So.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return oe(e,this.auth,"internal-error"),e}async onExecution(){Mr(this.filter.length===1,"Popup operations only handle one event");const e=Uf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(dn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(dn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,So.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if((i=(t=this.authWindow)==null?void 0:t.window)!=null&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(dn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,NA.get())};e()}}So.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DA="pendingRedirect",Qu=new Map;class VA extends Qv{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Qu.get(this.auth._key());if(!e){try{const i=await bA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Qu.set(this.auth._key(),e)}return this.bypassAuthState||Qu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function bA(n,e){const t=MA(e),i=LA(n);if(!await i._isAvailable())return!1;const o=await i._get(t)==="true";return await i._remove(t),o}function OA(n,e){Qu.set(n._key(),e)}function LA(n){return br(n._redirectPersistence)}function MA(n){return Ku(DA,n.config.apiKey,n.name)}async function FA(n,e,t=!1){if(On(n.app))return Promise.reject(Ai(n));const i=Mi(n),o=CA(i,e),c=await new VA(i,o,t).execute();return c&&!t&&(delete c.user._redirectEventId,await i._persistUserIfCurrent(c.user),await i._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UA=600*1e3;class jA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!zA(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!Yv(e)){const o=((i=e.error.code)==null?void 0:i.split("auth/")[1])||"internal-error";t.onError(dn(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=UA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Sy(e))}saveEventToCache(e){this.cachedEventUids.add(Sy(e)),this.lastProcessedEventTime=Date.now()}}function Sy(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Yv({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function zA(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Yv(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BA(n,e={}){return Bn(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $A=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,qA=/^https?/;async function WA(n){if(n.config.emulator)return;const{authorizedDomains:e}=await BA(n);for(const t of e)try{if(HA(t))return}catch{}Lr(n,"unauthorized-domain")}function HA(n){const e=rf(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===i}if(!qA.test(t))return!1;if($A.test(n))return i===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GA=new gl(3e4,6e4);function Ay(){const n=pt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function KA(n){return new Promise((e,t)=>{var o,l,c;function i(){Ay(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ay(),t(dn(n,"network-request-failed"))},timeout:GA.get()})}if((l=(o=pt().gapi)==null?void 0:o.iframes)!=null&&l.Iframe)e(gapi.iframes.getContext());else if((c=pt().gapi)!=null&&c.load)i();else{const f=Lv("iframefcb");return pt()[f]=()=>{gapi.load?i():t(dn(n,"network-request-failed"))},Mf(`${kS()}?onload=${f}`).catch(g=>t(g))}}).catch(e=>{throw Yu=null,e})}let Yu=null;function QA(n){return Yu=Yu||KA(n),Yu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YA=new gl(5e3,15e3),JA="__/auth/iframe",XA="emulator/auth/iframe",ZA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},eR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function tR(n){const e=n.config;oe(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?bf(e,XA):`https://${n.config.authDomain}/${JA}`,i={apiKey:e.apiKey,appName:n.name,v:zo},o=eR.get(n.config.apiHost);o&&(i.eid=o);const l=n._getFrameworks();return l.length&&(i.fw=l.join(",")),`${t}?${jo(i).slice(1)}`}async function nR(n){const e=await QA(n),t=pt().gapi;return oe(t,n,"internal-error"),e.open({where:document.body,url:tR(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ZA,dontclear:!0},i=>new Promise(async(o,l)=>{await i.restyle({setHideOnLeave:!1});const c=dn(n,"network-request-failed"),f=pt().setTimeout(()=>{l(c)},YA.get());function g(){pt().clearTimeout(f),o(i)}i.ping(g).then(g,()=>{l(c)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},iR=500,sR=600,oR="_blank",aR="http://localhost";class Ry{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function lR(n,e,t,i=iR,o=sR){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),c=Math.max((window.screen.availWidth-i)/2,0).toString();let f="";const g={...rR,width:i.toString(),height:o.toString(),top:l,left:c},y=Bt().toLowerCase();t&&(f=kv(y)?oR:t),Cv(y)&&(e=e||aR,g.scrollbars="yes");const w=Object.entries(g).reduce((I,[F,$])=>`${I}${F}=${$},`,"");if(vS(y)&&f!=="_self")return uR(e||"",f),new Ry(null);const T=window.open(e||"",f,w);oe(T,n,"popup-blocked");try{T.focus()}catch{}return new Ry(T)}function uR(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cR="__/auth/handler",hR="emulator/auth/handler",dR=encodeURIComponent("fac");async function Cy(n,e,t,i,o,l){oe(n.config.authDomain,n,"auth-domain-config-required"),oe(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:zo,eventId:o};if(e instanceof Uv){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",FI(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,T]of Object.entries({}))c[w]=T}if(e instanceof _l){const w=e.getScopes().filter(T=>T!=="");w.length>0&&(c.scopes=w.join(","))}n.tenantId&&(c.tid=n.tenantId);const f=c;for(const w of Object.keys(f))f[w]===void 0&&delete f[w];const g=await n._getAppCheckToken(),y=g?`#${dR}=${encodeURIComponent(g)}`:"";return`${fR(n)}?${jo(f).slice(1)}${y}`}function fR({config:n}){return n.emulator?bf(n,hR):`https://${n.authDomain}/${cR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fd="webStorageSupport";class pR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Wv,this._completeRedirectFn=FA,this._overrideRedirectResult=OA}async _openPopup(e,t,i,o){var c;Mr((c=this.eventManagers[e._key()])==null?void 0:c.manager,"_initialize() not called before _openPopup()");const l=await Cy(e,t,i,rf(),o);return lR(e,l,Uf())}async _openRedirect(e,t,i,o){await this._originValidation(e);const l=await Cy(e,t,i,rf(),o);return aA(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(Mr(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await nR(e),i=new jA(e);return t.register("authEvent",o=>(oe(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Fd,{type:Fd},o=>{var c;const l=(c=o==null?void 0:o[0])==null?void 0:c[Fd];l!==void 0&&t(!!l),Lr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=WA(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return bv()||Pv()||Lf()}}const mR=pR;var Py="@firebase/auth",ky="1.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){oe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yR(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function _R(n){dr(new Un("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:f}=i.options;oe(c&&!c.includes(":"),"invalid-api-key",{appName:i.name});const g={apiKey:c,authDomain:f,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ov(n)},y=new AS(i,o,l,g);return jS(y,t),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),dr(new Un("auth-internal",e=>{const t=Mi(e.getProvider("auth").getImmediate());return(i=>new gR(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Sn(Py,ky,yR(n)),Sn(Py,ky,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vR=300,wR=iv("authIdTokenMaxAge")||vR;let xy=null;const ER=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>wR)return;const o=t==null?void 0:t.token;xy!==o&&(xy=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function TR(n=Df()){const e=Rs(n,"auth");if(e.isInitialized())return e.getImmediate();const t=US(n,{popupRedirectResolver:mR,persistence:[gA,iA,Wv]}),i=iv("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const c=ER(l.toString());ZS(t,c,()=>c(t.currentUser)),XS(t,f=>c(f))}}const o=nv("auth");return o&&zS(t,`http://${o}`),t}function IR(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}RS({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=o=>{const l=dn("internal-error");l.customData=o,t(l)},i.type="text/javascript",i.charset="UTF-8",IR().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});_R("Browser");var Ny=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ri,Jv;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(k,A){function C(){}C.prototype=A.prototype,k.F=A.prototype,k.prototype=new C,k.prototype.constructor=k,k.D=function(D,x,b){for(var R=Array(arguments.length-2),qe=2;qe<arguments.length;qe++)R[qe-2]=arguments[qe];return A.prototype[x].apply(D,R)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(i,t),i.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(k,A,C){C||(C=0);const D=Array(16);if(typeof A=="string")for(var x=0;x<16;++x)D[x]=A.charCodeAt(C++)|A.charCodeAt(C++)<<8|A.charCodeAt(C++)<<16|A.charCodeAt(C++)<<24;else for(x=0;x<16;++x)D[x]=A[C++]|A[C++]<<8|A[C++]<<16|A[C++]<<24;A=k.g[0],C=k.g[1],x=k.g[2];let b=k.g[3],R;R=A+(b^C&(x^b))+D[0]+3614090360&4294967295,A=C+(R<<7&4294967295|R>>>25),R=b+(x^A&(C^x))+D[1]+3905402710&4294967295,b=A+(R<<12&4294967295|R>>>20),R=x+(C^b&(A^C))+D[2]+606105819&4294967295,x=b+(R<<17&4294967295|R>>>15),R=C+(A^x&(b^A))+D[3]+3250441966&4294967295,C=x+(R<<22&4294967295|R>>>10),R=A+(b^C&(x^b))+D[4]+4118548399&4294967295,A=C+(R<<7&4294967295|R>>>25),R=b+(x^A&(C^x))+D[5]+1200080426&4294967295,b=A+(R<<12&4294967295|R>>>20),R=x+(C^b&(A^C))+D[6]+2821735955&4294967295,x=b+(R<<17&4294967295|R>>>15),R=C+(A^x&(b^A))+D[7]+4249261313&4294967295,C=x+(R<<22&4294967295|R>>>10),R=A+(b^C&(x^b))+D[8]+1770035416&4294967295,A=C+(R<<7&4294967295|R>>>25),R=b+(x^A&(C^x))+D[9]+2336552879&4294967295,b=A+(R<<12&4294967295|R>>>20),R=x+(C^b&(A^C))+D[10]+4294925233&4294967295,x=b+(R<<17&4294967295|R>>>15),R=C+(A^x&(b^A))+D[11]+2304563134&4294967295,C=x+(R<<22&4294967295|R>>>10),R=A+(b^C&(x^b))+D[12]+1804603682&4294967295,A=C+(R<<7&4294967295|R>>>25),R=b+(x^A&(C^x))+D[13]+4254626195&4294967295,b=A+(R<<12&4294967295|R>>>20),R=x+(C^b&(A^C))+D[14]+2792965006&4294967295,x=b+(R<<17&4294967295|R>>>15),R=C+(A^x&(b^A))+D[15]+1236535329&4294967295,C=x+(R<<22&4294967295|R>>>10),R=A+(x^b&(C^x))+D[1]+4129170786&4294967295,A=C+(R<<5&4294967295|R>>>27),R=b+(C^x&(A^C))+D[6]+3225465664&4294967295,b=A+(R<<9&4294967295|R>>>23),R=x+(A^C&(b^A))+D[11]+643717713&4294967295,x=b+(R<<14&4294967295|R>>>18),R=C+(b^A&(x^b))+D[0]+3921069994&4294967295,C=x+(R<<20&4294967295|R>>>12),R=A+(x^b&(C^x))+D[5]+3593408605&4294967295,A=C+(R<<5&4294967295|R>>>27),R=b+(C^x&(A^C))+D[10]+38016083&4294967295,b=A+(R<<9&4294967295|R>>>23),R=x+(A^C&(b^A))+D[15]+3634488961&4294967295,x=b+(R<<14&4294967295|R>>>18),R=C+(b^A&(x^b))+D[4]+3889429448&4294967295,C=x+(R<<20&4294967295|R>>>12),R=A+(x^b&(C^x))+D[9]+568446438&4294967295,A=C+(R<<5&4294967295|R>>>27),R=b+(C^x&(A^C))+D[14]+3275163606&4294967295,b=A+(R<<9&4294967295|R>>>23),R=x+(A^C&(b^A))+D[3]+4107603335&4294967295,x=b+(R<<14&4294967295|R>>>18),R=C+(b^A&(x^b))+D[8]+1163531501&4294967295,C=x+(R<<20&4294967295|R>>>12),R=A+(x^b&(C^x))+D[13]+2850285829&4294967295,A=C+(R<<5&4294967295|R>>>27),R=b+(C^x&(A^C))+D[2]+4243563512&4294967295,b=A+(R<<9&4294967295|R>>>23),R=x+(A^C&(b^A))+D[7]+1735328473&4294967295,x=b+(R<<14&4294967295|R>>>18),R=C+(b^A&(x^b))+D[12]+2368359562&4294967295,C=x+(R<<20&4294967295|R>>>12),R=A+(C^x^b)+D[5]+4294588738&4294967295,A=C+(R<<4&4294967295|R>>>28),R=b+(A^C^x)+D[8]+2272392833&4294967295,b=A+(R<<11&4294967295|R>>>21),R=x+(b^A^C)+D[11]+1839030562&4294967295,x=b+(R<<16&4294967295|R>>>16),R=C+(x^b^A)+D[14]+4259657740&4294967295,C=x+(R<<23&4294967295|R>>>9),R=A+(C^x^b)+D[1]+2763975236&4294967295,A=C+(R<<4&4294967295|R>>>28),R=b+(A^C^x)+D[4]+1272893353&4294967295,b=A+(R<<11&4294967295|R>>>21),R=x+(b^A^C)+D[7]+4139469664&4294967295,x=b+(R<<16&4294967295|R>>>16),R=C+(x^b^A)+D[10]+3200236656&4294967295,C=x+(R<<23&4294967295|R>>>9),R=A+(C^x^b)+D[13]+681279174&4294967295,A=C+(R<<4&4294967295|R>>>28),R=b+(A^C^x)+D[0]+3936430074&4294967295,b=A+(R<<11&4294967295|R>>>21),R=x+(b^A^C)+D[3]+3572445317&4294967295,x=b+(R<<16&4294967295|R>>>16),R=C+(x^b^A)+D[6]+76029189&4294967295,C=x+(R<<23&4294967295|R>>>9),R=A+(C^x^b)+D[9]+3654602809&4294967295,A=C+(R<<4&4294967295|R>>>28),R=b+(A^C^x)+D[12]+3873151461&4294967295,b=A+(R<<11&4294967295|R>>>21),R=x+(b^A^C)+D[15]+530742520&4294967295,x=b+(R<<16&4294967295|R>>>16),R=C+(x^b^A)+D[2]+3299628645&4294967295,C=x+(R<<23&4294967295|R>>>9),R=A+(x^(C|~b))+D[0]+4096336452&4294967295,A=C+(R<<6&4294967295|R>>>26),R=b+(C^(A|~x))+D[7]+1126891415&4294967295,b=A+(R<<10&4294967295|R>>>22),R=x+(A^(b|~C))+D[14]+2878612391&4294967295,x=b+(R<<15&4294967295|R>>>17),R=C+(b^(x|~A))+D[5]+4237533241&4294967295,C=x+(R<<21&4294967295|R>>>11),R=A+(x^(C|~b))+D[12]+1700485571&4294967295,A=C+(R<<6&4294967295|R>>>26),R=b+(C^(A|~x))+D[3]+2399980690&4294967295,b=A+(R<<10&4294967295|R>>>22),R=x+(A^(b|~C))+D[10]+4293915773&4294967295,x=b+(R<<15&4294967295|R>>>17),R=C+(b^(x|~A))+D[1]+2240044497&4294967295,C=x+(R<<21&4294967295|R>>>11),R=A+(x^(C|~b))+D[8]+1873313359&4294967295,A=C+(R<<6&4294967295|R>>>26),R=b+(C^(A|~x))+D[15]+4264355552&4294967295,b=A+(R<<10&4294967295|R>>>22),R=x+(A^(b|~C))+D[6]+2734768916&4294967295,x=b+(R<<15&4294967295|R>>>17),R=C+(b^(x|~A))+D[13]+1309151649&4294967295,C=x+(R<<21&4294967295|R>>>11),R=A+(x^(C|~b))+D[4]+4149444226&4294967295,A=C+(R<<6&4294967295|R>>>26),R=b+(C^(A|~x))+D[11]+3174756917&4294967295,b=A+(R<<10&4294967295|R>>>22),R=x+(A^(b|~C))+D[2]+718787259&4294967295,x=b+(R<<15&4294967295|R>>>17),R=C+(b^(x|~A))+D[9]+3951481745&4294967295,k.g[0]=k.g[0]+A&4294967295,k.g[1]=k.g[1]+(x+(R<<21&4294967295|R>>>11))&4294967295,k.g[2]=k.g[2]+x&4294967295,k.g[3]=k.g[3]+b&4294967295}i.prototype.v=function(k,A){A===void 0&&(A=k.length);const C=A-this.blockSize,D=this.C;let x=this.h,b=0;for(;b<A;){if(x==0)for(;b<=C;)o(this,k,b),b+=this.blockSize;if(typeof k=="string"){for(;b<A;)if(D[x++]=k.charCodeAt(b++),x==this.blockSize){o(this,D),x=0;break}}else for(;b<A;)if(D[x++]=k[b++],x==this.blockSize){o(this,D),x=0;break}}this.h=x,this.o+=A},i.prototype.A=function(){var k=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);k[0]=128;for(var A=1;A<k.length-8;++A)k[A]=0;A=this.o*8;for(var C=k.length-8;C<k.length;++C)k[C]=A&255,A/=256;for(this.v(k),k=Array(16),A=0,C=0;C<4;++C)for(let D=0;D<32;D+=8)k[A++]=this.g[C]>>>D&255;return k};function l(k,A){var C=f;return Object.prototype.hasOwnProperty.call(C,k)?C[k]:C[k]=A(k)}function c(k,A){this.h=A;const C=[];let D=!0;for(let x=k.length-1;x>=0;x--){const b=k[x]|0;D&&b==A||(C[x]=b,D=!1)}this.g=C}var f={};function g(k){return-128<=k&&k<128?l(k,function(A){return new c([A|0],A<0?-1:0)}):new c([k|0],k<0?-1:0)}function y(k){if(isNaN(k)||!isFinite(k))return T;if(k<0)return U(y(-k));const A=[];let C=1;for(let D=0;k>=C;D++)A[D]=k/C|0,C*=4294967296;return new c(A,0)}function w(k,A){if(k.length==0)throw Error("number format error: empty string");if(A=A||10,A<2||36<A)throw Error("radix out of range: "+A);if(k.charAt(0)=="-")return U(w(k.substring(1),A));if(k.indexOf("-")>=0)throw Error('number format error: interior "-" character');const C=y(Math.pow(A,8));let D=T;for(let b=0;b<k.length;b+=8){var x=Math.min(8,k.length-b);const R=parseInt(k.substring(b,b+x),A);x<8?(x=y(Math.pow(A,x)),D=D.j(x).add(y(R))):(D=D.j(C),D=D.add(y(R)))}return D}var T=g(0),I=g(1),F=g(16777216);n=c.prototype,n.m=function(){if(H(this))return-U(this).m();let k=0,A=1;for(let C=0;C<this.g.length;C++){const D=this.i(C);k+=(D>=0?D:4294967296+D)*A,A*=4294967296}return k},n.toString=function(k){if(k=k||10,k<2||36<k)throw Error("radix out of range: "+k);if($(this))return"0";if(H(this))return"-"+U(this).toString(k);const A=y(Math.pow(k,6));var C=this;let D="";for(;;){const x=_e(C,A).g;C=de(C,x.j(A));let b=((C.g.length>0?C.g[0]:C.h)>>>0).toString(k);if(C=x,$(C))return b+D;for(;b.length<6;)b="0"+b;D=b+D}},n.i=function(k){return k<0?0:k<this.g.length?this.g[k]:this.h};function $(k){if(k.h!=0)return!1;for(let A=0;A<k.g.length;A++)if(k.g[A]!=0)return!1;return!0}function H(k){return k.h==-1}n.l=function(k){return k=de(this,k),H(k)?-1:$(k)?0:1};function U(k){const A=k.g.length,C=[];for(let D=0;D<A;D++)C[D]=~k.g[D];return new c(C,~k.h).add(I)}n.abs=function(){return H(this)?U(this):this},n.add=function(k){const A=Math.max(this.g.length,k.g.length),C=[];let D=0;for(let x=0;x<=A;x++){let b=D+(this.i(x)&65535)+(k.i(x)&65535),R=(b>>>16)+(this.i(x)>>>16)+(k.i(x)>>>16);D=R>>>16,b&=65535,R&=65535,C[x]=R<<16|b}return new c(C,C[C.length-1]&-2147483648?-1:0)};function de(k,A){return k.add(U(A))}n.j=function(k){if($(this)||$(k))return T;if(H(this))return H(k)?U(this).j(U(k)):U(U(this).j(k));if(H(k))return U(this.j(U(k)));if(this.l(F)<0&&k.l(F)<0)return y(this.m()*k.m());const A=this.g.length+k.g.length,C=[];for(var D=0;D<2*A;D++)C[D]=0;for(D=0;D<this.g.length;D++)for(let x=0;x<k.g.length;x++){const b=this.i(D)>>>16,R=this.i(D)&65535,qe=k.i(x)>>>16,Et=k.i(x)&65535;C[2*D+2*x]+=R*Et,ae(C,2*D+2*x),C[2*D+2*x+1]+=b*Et,ae(C,2*D+2*x+1),C[2*D+2*x+1]+=R*qe,ae(C,2*D+2*x+1),C[2*D+2*x+2]+=b*qe,ae(C,2*D+2*x+2)}for(k=0;k<A;k++)C[k]=C[2*k+1]<<16|C[2*k];for(k=A;k<2*A;k++)C[k]=0;return new c(C,0)};function ae(k,A){for(;(k[A]&65535)!=k[A];)k[A+1]+=k[A]>>>16,k[A]&=65535,A++}function he(k,A){this.g=k,this.h=A}function _e(k,A){if($(A))throw Error("division by zero");if($(k))return new he(T,T);if(H(k))return A=_e(U(k),A),new he(U(A.g),U(A.h));if(H(A))return A=_e(k,U(A)),new he(U(A.g),A.h);if(k.g.length>30){if(H(k)||H(A))throw Error("slowDivide_ only works with positive integers.");for(var C=I,D=A;D.l(k)<=0;)C=be(C),D=be(D);var x=Re(C,1),b=Re(D,1);for(D=Re(D,2),C=Re(C,2);!$(D);){var R=b.add(D);R.l(k)<=0&&(x=x.add(C),b=R),D=Re(D,1),C=Re(C,1)}return A=de(k,x.j(A)),new he(x,A)}for(x=T;k.l(A)>=0;){for(C=Math.max(1,Math.floor(k.m()/A.m())),D=Math.ceil(Math.log(C)/Math.LN2),D=D<=48?1:Math.pow(2,D-48),b=y(C),R=b.j(A);H(R)||R.l(k)>0;)C-=D,b=y(C),R=b.j(A);$(b)&&(b=I),x=x.add(b),k=de(k,R)}return new he(x,k)}n.B=function(k){return _e(this,k).h},n.and=function(k){const A=Math.max(this.g.length,k.g.length),C=[];for(let D=0;D<A;D++)C[D]=this.i(D)&k.i(D);return new c(C,this.h&k.h)},n.or=function(k){const A=Math.max(this.g.length,k.g.length),C=[];for(let D=0;D<A;D++)C[D]=this.i(D)|k.i(D);return new c(C,this.h|k.h)},n.xor=function(k){const A=Math.max(this.g.length,k.g.length),C=[];for(let D=0;D<A;D++)C[D]=this.i(D)^k.i(D);return new c(C,this.h^k.h)};function be(k){const A=k.g.length+1,C=[];for(let D=0;D<A;D++)C[D]=k.i(D)<<1|k.i(D-1)>>>31;return new c(C,k.h)}function Re(k,A){const C=A>>5;A%=32;const D=k.g.length-C,x=[];for(let b=0;b<D;b++)x[b]=A>0?k.i(b+C)>>>A|k.i(b+C+1)<<32-A:k.i(b+C);return new c(x,k.h)}i.prototype.digest=i.prototype.A,i.prototype.reset=i.prototype.u,i.prototype.update=i.prototype.v,Jv=i,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.B,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=y,c.fromString=w,Ri=c}).apply(typeof Ny<"u"?Ny:typeof self<"u"?self:typeof window<"u"?window:{});var Bu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Xv,qa,Zv,Ju,af,ew,tw,nw;(function(){var n,e=Object.defineProperty;function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Bu=="object"&&Bu];for(var m=0;m<u.length;++m){var _=u[m];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var i=t(this);function o(u,m){if(m)e:{var _=i;u=u.split(".");for(var E=0;E<u.length-1;E++){var L=u[E];if(!(L in _))break e;_=_[L]}u=u[u.length-1],E=_[u],m=m(E),m!=E&&m!=null&&e(_,u,{configurable:!0,writable:!0,value:m})}}o("Symbol.dispose",function(u){return u||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(u){return u||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(u){return u||function(m){var _=[],E;for(E in m)Object.prototype.hasOwnProperty.call(m,E)&&_.push([E,m[E]]);return _}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},c=this||self;function f(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function g(u,m,_){return u.call.apply(u.bind,arguments)}function y(u,m,_){return y=g,y.apply(null,arguments)}function w(u,m){var _=Array.prototype.slice.call(arguments,1);return function(){var E=_.slice();return E.push.apply(E,arguments),u.apply(this,E)}}function T(u,m){function _(){}_.prototype=m.prototype,u.Z=m.prototype,u.prototype=new _,u.prototype.constructor=u,u.Ob=function(E,L,z){for(var Z=Array(arguments.length-2),Ee=2;Ee<arguments.length;Ee++)Z[Ee-2]=arguments[Ee];return m.prototype[L].apply(E,Z)}}var I=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?u=>u&&AsyncContext.Snapshot.wrap(u):u=>u;function F(u){const m=u.length;if(m>0){const _=Array(m);for(let E=0;E<m;E++)_[E]=u[E];return _}return[]}function $(u,m){for(let E=1;E<arguments.length;E++){const L=arguments[E];var _=typeof L;if(_=_!="object"?_:L?Array.isArray(L)?"array":_:"null",_=="array"||_=="object"&&typeof L.length=="number"){_=u.length||0;const z=L.length||0;u.length=_+z;for(let Z=0;Z<z;Z++)u[_+Z]=L[Z]}else u.push(L)}}class H{constructor(m,_){this.i=m,this.j=_,this.h=0,this.g=null}get(){let m;return this.h>0?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function U(u){c.setTimeout(()=>{throw u},0)}function de(){var u=k;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class ae{constructor(){this.h=this.g=null}add(m,_){const E=he.get();E.set(m,_),this.h?this.h.next=E:this.g=E,this.h=E}}var he=new H(()=>new _e,u=>u.reset());class _e{constructor(){this.next=this.g=this.h=null}set(m,_){this.h=m,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let be,Re=!1,k=new ae,A=()=>{const u=Promise.resolve(void 0);be=()=>{u.then(C)}};function C(){for(var u;u=de();){try{u.h.call(u.g)}catch(_){U(_)}var m=he;m.j(u),m.h<100&&(m.h++,u.next=m.g,m.g=u)}Re=!1}function D(){this.u=this.u,this.C=this.C}D.prototype.u=!1,D.prototype.dispose=function(){this.u||(this.u=!0,this.N())},D.prototype[Symbol.dispose]=function(){this.dispose()},D.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function x(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}x.prototype.h=function(){this.defaultPrevented=!0};var b=(function(){if(!c.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const _=()=>{};c.addEventListener("test",_,m),c.removeEventListener("test",_,m)}catch{}return u})();function R(u){return/^[\s\xa0]*$/.test(u)}function qe(u,m){x.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u&&this.init(u,m)}T(qe,x),qe.prototype.init=function(u,m){const _=this.type=u.type,E=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget,m||(_=="mouseover"?m=u.fromElement:_=="mouseout"&&(m=u.toElement)),this.relatedTarget=m,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=u.pointerType,this.state=u.state,this.i=u,u.defaultPrevented&&qe.Z.h.call(this)},qe.prototype.h=function(){qe.Z.h.call(this);const u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Et="closure_listenable_"+(Math.random()*1e6|0),Vt=0;function Je(u,m,_,E,L){this.listener=u,this.proxy=null,this.src=m,this.type=_,this.capture=!!E,this.ha=L,this.key=++Vt,this.da=this.fa=!1}function ee(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function pe(u,m,_){for(const E in u)m.call(_,u[E],E,u)}function ie(u,m){for(const _ in u)m.call(void 0,u[_],_,u)}function V(u){const m={};for(const _ in u)m[_]=u[_];return m}const G="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ie(u,m){let _,E;for(let L=1;L<arguments.length;L++){E=arguments[L];for(_ in E)u[_]=E[_];for(let z=0;z<G.length;z++)_=G[z],Object.prototype.hasOwnProperty.call(E,_)&&(u[_]=E[_])}}function Se(u){this.src=u,this.g={},this.h=0}Se.prototype.add=function(u,m,_,E,L){const z=u.toString();u=this.g[z],u||(u=this.g[z]=[],this.h++);const Z=Pe(u,m,E,L);return Z>-1?(m=u[Z],_||(m.fa=!1)):(m=new Je(m,this.src,z,!!E,L),m.fa=_,u.push(m)),m};function Ce(u,m){const _=m.type;if(_ in u.g){var E=u.g[_],L=Array.prototype.indexOf.call(E,m,void 0),z;(z=L>=0)&&Array.prototype.splice.call(E,L,1),z&&(ee(m),u.g[_].length==0&&(delete u.g[_],u.h--))}}function Pe(u,m,_,E){for(let L=0;L<u.length;++L){const z=u[L];if(!z.da&&z.listener==m&&z.capture==!!_&&z.ha==E)return L}return-1}var Ue="closure_lm_"+(Math.random()*1e6|0),Oe={};function Be(u,m,_,E,L){if(Array.isArray(m)){for(let z=0;z<m.length;z++)Be(u,m[z],_,E,L);return null}return _=Ko(_),u&&u[Et]?u.J(m,_,f(E)?!!E.capture:!1,L):$t(u,m,_,!1,E,L)}function $t(u,m,_,E,L,z){if(!m)throw Error("Invalid event type");const Z=f(L)?!!L.capture:!!L;let Ee=Vs(u);if(Ee||(u[Ue]=Ee=new Se(u)),_=Ee.add(m,_,E,Z,z),_.proxy)return _;if(E=Ns(),_.proxy=E,E.src=u,E.listener=_,u.addEventListener)b||(L=Z),L===void 0&&(L=!1),u.addEventListener(m.toString(),E,L);else if(u.attachEvent)u.attachEvent(Ds(m.toString()),E);else if(u.addListener&&u.removeListener)u.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return _}function Ns(){function u(_){return m.call(u.src,u.listener,_)}const m=Al;return u}function Go(u,m,_,E,L){if(Array.isArray(m))for(var z=0;z<m.length;z++)Go(u,m[z],_,E,L);else E=f(E)?!!E.capture:!!E,_=Ko(_),u&&u[Et]?(u=u.i,z=String(m).toString(),z in u.g&&(m=u.g[z],_=Pe(m,_,E,L),_>-1&&(ee(m[_]),Array.prototype.splice.call(m,_,1),m.length==0&&(delete u.g[z],u.h--)))):u&&(u=Vs(u))&&(m=u.g[m.toString()],u=-1,m&&(u=Pe(m,_,E,L)),(_=u>-1?m[u]:null)&&jr(_))}function jr(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[Et])Ce(m.i,u);else{var _=u.type,E=u.proxy;m.removeEventListener?m.removeEventListener(_,E,u.capture):m.detachEvent?m.detachEvent(Ds(_),E):m.addListener&&m.removeListener&&m.removeListener(E),(_=Vs(m))?(Ce(_,u),_.h==0&&(_.src=null,m[Ue]=null)):ee(u)}}}function Ds(u){return u in Oe?Oe[u]:Oe[u]="on"+u}function Al(u,m){if(u.da)u=!0;else{m=new qe(m,this);const _=u.listener,E=u.ha||u.src;u.fa&&jr(u),u=_.call(E,m)}return u}function Vs(u){return u=u[Ue],u instanceof Se?u:null}var Ui="__closure_events_fn_"+(Math.random()*1e9>>>0);function Ko(u){return typeof u=="function"?u:(u[Ui]||(u[Ui]=function(m){return u.handleEvent(m)}),u[Ui])}function ct(){D.call(this),this.i=new Se(this),this.M=this,this.G=null}T(ct,D),ct.prototype[Et]=!0,ct.prototype.removeEventListener=function(u,m,_,E){Go(this,u,m,_,E)};function st(u,m){var _,E=u.G;if(E)for(_=[];E;E=E.G)_.push(E);if(u=u.M,E=m.type||m,typeof m=="string")m=new x(m,u);else if(m instanceof x)m.target=m.target||u;else{var L=m;m=new x(E,u),Ie(m,L)}L=!0;let z,Z;if(_)for(Z=_.length-1;Z>=0;Z--)z=m.g=_[Z],L=An(z,E,!0,m)&&L;if(z=m.g=u,L=An(z,E,!0,m)&&L,L=An(z,E,!1,m)&&L,_)for(Z=0;Z<_.length;Z++)z=m.g=_[Z],L=An(z,E,!1,m)&&L}ct.prototype.N=function(){if(ct.Z.N.call(this),this.i){var u=this.i;for(const m in u.g){const _=u.g[m];for(let E=0;E<_.length;E++)ee(_[E]);delete u.g[m],u.h--}}this.G=null},ct.prototype.J=function(u,m,_,E){return this.i.add(String(u),m,!1,_,E)},ct.prototype.K=function(u,m,_,E){return this.i.add(String(u),m,!0,_,E)};function An(u,m,_,E){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();let L=!0;for(let z=0;z<m.length;++z){const Z=m[z];if(Z&&!Z.da&&Z.capture==_){const Ee=Z.listener,ot=Z.ha||Z.src;Z.fa&&Ce(u.i,Z),L=Ee.call(ot,E)!==!1&&L}}return L&&!E.defaultPrevented}function Qo(u,m){if(typeof u!="function")if(u&&typeof u.handleEvent=="function")u=y(u.handleEvent,u);else throw Error("Invalid listener argument");return Number(m)>2147483647?-1:c.setTimeout(u,m||0)}function Yo(u){u.g=Qo(()=>{u.g=null,u.i&&(u.i=!1,Yo(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class Rl extends D{constructor(m,_){super(),this.m=m,this.l=_,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:Yo(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function zr(u){D.call(this),this.h=u,this.g={}}T(zr,D);var Jo=[];function bs(u){pe(u.g,function(m,_){this.g.hasOwnProperty(_)&&jr(m)},u),u.g={}}zr.prototype.N=function(){zr.Z.N.call(this),bs(this)},zr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Br=c.JSON.stringify,Cl=c.JSON.parse,ji=class{stringify(u){return c.JSON.stringify(u,void 0)}parse(u){return c.JSON.parse(u,void 0)}};function $r(){}function Pl(){}var qr={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Os(){x.call(this,"d")}T(Os,x);function Xo(){x.call(this,"c")}T(Xo,x);var Rn={},Ls=null;function Wr(){return Ls=Ls||new ct}Rn.Ia="serverreachability";function Ms(u){x.call(this,Rn.Ia,u)}T(Ms,x);function mr(u){const m=Wr();st(m,new Ms(m))}Rn.STAT_EVENT="statevent";function gr(u,m){x.call(this,Rn.STAT_EVENT,u),this.stat=m}T(gr,x);function nt(u){const m=Wr();st(m,new gr(m,u))}Rn.Ja="timingevent";function Zo(u,m){x.call(this,Rn.Ja,u),this.size=m}T(Zo,x);function Hr(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){u()},m)}function Gr(){this.g=!0}Gr.prototype.ua=function(){this.g=!1};function kl(u,m,_,E,L,z){u.info(function(){if(u.g)if(z){var Z="",Ee=z.split("&");for(let ze=0;ze<Ee.length;ze++){var ot=Ee[ze].split("=");if(ot.length>1){const ht=ot[0];ot=ot[1];const an=ht.split("_");Z=an.length>=2&&an[1]=="type"?Z+(ht+"="+ot+"&"):Z+(ht+"=redacted&")}}}else Z=null;else Z=z;return"XMLHTTP REQ ("+E+") [attempt "+L+"]: "+m+`
`+_+`
`+Z})}function xl(u,m,_,E,L,z,Z){u.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+L+"]: "+m+`
`+_+`
`+z+" "+Z})}function $n(u,m,_,E){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+zi(u,_)+(E?" "+E:"")})}function Nl(u,m){u.info(function(){return"TIMEOUT: "+m})}Gr.prototype.info=function(){};function zi(u,m){if(!u.g)return m;if(!m)return null;try{const z=JSON.parse(m);if(z){for(u=0;u<z.length;u++)if(Array.isArray(z[u])){var _=z[u];if(!(_.length<2)){var E=_[1];if(Array.isArray(E)&&!(E.length<1)){var L=E[0];if(L!="noop"&&L!="stop"&&L!="close")for(let Z=1;Z<E.length;Z++)E[Z]=""}}}}return Br(z)}catch{return m}}var Kr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Qr={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Dl;function yr(){}T(yr,$r),yr.prototype.g=function(){return new XMLHttpRequest},Dl=new yr;function qn(u){return encodeURIComponent(String(u))}function Fs(u){var m=1;u=u.split(":");const _=[];for(;m>0&&u.length;)_.push(u.shift()),m--;return u.length&&_.push(u.join(":")),_}function pn(u,m,_,E){this.j=u,this.i=m,this.l=_,this.S=E||1,this.V=new zr(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Vl}function Vl(){this.i=null,this.g="",this.h=!1}var bl={},ea={};function Cn(u,m,_){u.M=1,u.A=vr(mn(m)),u.u=_,u.R=!0,ta(u,null)}function ta(u,m){u.F=Date.now(),Bi(u),u.B=mn(u.A);var _=u.B,E=u.S;Array.isArray(E)||(E=[String(E)]),ha(_.i,"t",E),u.C=0,_=u.j.L,u.h=new Vl,u.g=ql(u.j,_?m:null,!u.u),u.P>0&&(u.O=new Rl(y(u.Y,u,u.g),u.P)),m=u.V,_=u.g,E=u.ba;var L="readystatechange";Array.isArray(L)||(L&&(Jo[0]=L.toString()),L=Jo);for(let z=0;z<L.length;z++){const Z=Be(_,L[z],E||m.handleEvent,!1,m.h||m);if(!Z)break;m.g[Z.key]=Z}m=u.J?V(u.J):{},u.u?(u.v||(u.v="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.B,u.v,u.u,m)):(u.v="GET",u.g.ea(u.B,u.v,null,m)),mr(),kl(u.i,u.v,u.B,u.l,u.S,u.u)}pn.prototype.ba=function(u){u=u.target;const m=this.O;m&&Jn(u)==3?m.j():this.Y(u)},pn.prototype.Y=function(u){try{if(u==this.g)e:{const Ee=Jn(this.g),ot=this.g.ya(),ze=this.g.ca();if(!(Ee<3)&&(Ee!=3||this.g&&(this.h.h||this.g.la()||Bl(this.g)))){this.K||Ee!=4||ot==7||(ot==8||ze<=0?mr(3):mr(2)),Us(this);var m=this.g.ca();this.X=m;var _=Ol(this);if(this.o=m==200,xl(this.i,this.v,this.B,this.l,this.S,Ee,m),this.o){if(this.U&&!this.L){t:{if(this.g){var E,L=this.g;if((E=L.g?L.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!R(E)){var z=E;break t}}z=null}if(u=z)$n(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ge(this,u);else{this.o=!1,this.m=3,nt(12),_r(this),$i(this);break e}}if(this.R){u=!0;let ht;for(;!this.K&&this.C<_.length;)if(ht=Ml(this,_),ht==ea){Ee==4&&(this.m=4,nt(14),u=!1),$n(this.i,this.l,null,"[Incomplete Response]");break}else if(ht==bl){this.m=4,nt(15),$n(this.i,this.l,_,"[Invalid Chunk]"),u=!1;break}else $n(this.i,this.l,ht,null),Ge(this,ht);if(Ll(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ee!=4||_.length!=0||this.h.h||(this.m=1,nt(16),u=!1),this.o=this.o&&u,!u)$n(this.i,this.l,_,"[Invalid Chunked Response]"),_r(this),$i(this);else if(_.length>0&&!this.W){this.W=!0;var Z=this.j;Z.g==this&&Z.aa&&!Z.P&&(Z.j.info("Great, no buffering proxy detected. Bytes received: "+_.length),Xi(Z),Z.P=!0,nt(11))}}else $n(this.i,this.l,_,null),Ge(this,_);Ee==4&&_r(this),this.o&&!this.K&&(Ee==4?Qs(this.j,this):(this.o=!1,Bi(this)))}else fa(this.g),m==400&&_.indexOf("Unknown SID")>0?(this.m=3,nt(12)):(this.m=0,nt(13)),_r(this),$i(this)}}}catch{}finally{}};function Ol(u){if(!Ll(u))return u.g.la();const m=Bl(u.g);if(m==="")return"";let _="";const E=m.length,L=Jn(u.g)==4;if(!u.h.i){if(typeof TextDecoder>"u")return _r(u),$i(u),"";u.h.i=new c.TextDecoder}for(let z=0;z<E;z++)u.h.h=!0,_+=u.h.i.decode(m[z],{stream:!(L&&z==E-1)});return m.length=0,u.h.g+=_,u.C=0,u.h.g}function Ll(u){return u.g?u.v=="GET"&&u.M!=2&&u.j.Aa:!1}function Ml(u,m){var _=u.C,E=m.indexOf(`
`,_);return E==-1?ea:(_=Number(m.substring(_,E)),isNaN(_)?bl:(E+=1,E+_>m.length?ea:(m=m.slice(E,E+_),u.C=E+_,m)))}pn.prototype.cancel=function(){this.K=!0,_r(this)};function Bi(u){u.T=Date.now()+u.H,na(u,u.H)}function na(u,m){if(u.D!=null)throw Error("WatchDog timer not null");u.D=Hr(y(u.aa,u),m)}function Us(u){u.D&&(c.clearTimeout(u.D),u.D=null)}pn.prototype.aa=function(){this.D=null;const u=Date.now();u-this.T>=0?(Nl(this.i,this.B),this.M!=2&&(mr(),nt(17)),_r(this),this.m=2,$i(this)):na(this,this.T-u)};function $i(u){u.j.I==0||u.K||Qs(u.j,u)}function _r(u){Us(u);var m=u.O;m&&typeof m.dispose=="function"&&m.dispose(),u.O=null,bs(u.V),u.g&&(m=u.g,u.g=null,m.abort(),m.dispose())}function Ge(u,m){try{var _=u.j;if(_.I!=0&&(_.g==u||ia(_.h,u))){if(!u.L&&ia(_.h,u)&&_.I==3){try{var E=_.Ba.g.parse(m)}catch{E=null}if(Array.isArray(E)&&E.length==3){var L=E;if(L[0]==0){e:if(!_.v){if(_.g)if(_.g.F+3e3<u.F)Ks(_),sn(_);else break e;er(_),nt(18)}}else _.xa=L[1],0<_.xa-_.K&&L[2]<37500&&_.F&&_.A==0&&!_.C&&(_.C=Hr(y(_.Va,_),6e3));qi(_.h)<=1&&_.ta&&(_.ta=void 0)}else on(_,11)}else if((u.L||_.g==u)&&Ks(_),!R(m))for(L=_.Ba.g.parse(m),m=0;m<L.length;m++){let ze=L[m];const ht=ze[0];if(!(ht<=_.K))if(_.K=ht,ze=ze[1],_.I==2)if(ze[0]=="c"){_.M=ze[1],_.ba=ze[2];const an=ze[3];an!=null&&(_.ka=an,_.j.info("VER="+_.ka));const Sr=ze[4];Sr!=null&&(_.za=Sr,_.j.info("SVER="+_.za));const tr=ze[5];tr!=null&&typeof tr=="number"&&tr>0&&(E=1.5*tr,_.O=E,_.j.info("backChannelRequestTimeoutMs_="+E)),E=_;const nr=u.g;if(nr){const Xs=nr.g?nr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Xs){var z=E.h;z.g||Xs.indexOf("spdy")==-1&&Xs.indexOf("quic")==-1&&Xs.indexOf("h2")==-1||(z.j=z.l,z.g=new Set,z.h&&(zs(z,z.h),z.h=null))}if(E.G){const ga=nr.g?nr.g.getResponseHeader("X-HTTP-Session-Id"):null;ga&&(E.wa=ga,Fe(E.J,E.G,ga))}}_.I=3,_.l&&_.l.ra(),_.aa&&(_.T=Date.now()-u.F,_.j.info("Handshake RTT: "+_.T+"ms")),E=_;var Z=u;if(E.na=ma(E,E.L?E.ba:null,E.W),Z.L){Wi(E.h,Z);var Ee=Z,ot=E.O;ot&&(Ee.H=ot),Ee.D&&(Us(Ee),Bi(Ee)),E.g=Z}else bt(E);_.i.length>0&&Ir(_)}else ze[0]!="stop"&&ze[0]!="close"||on(_,7);else _.I==3&&(ze[0]=="stop"||ze[0]=="close"?ze[0]=="stop"?on(_,7):Hs(_):ze[0]!="noop"&&_.l&&_.l.qa(ze),_.A=0)}}mr(4)}catch{}}var Zc=class{constructor(u,m){this.g=u,this.map=m}};function js(u){this.l=u||10,c.PerformanceNavigationTiming?(u=c.performance.getEntriesByType("navigation"),u=u.length>0&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function ra(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function qi(u){return u.h?1:u.g?u.g.size:0}function ia(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function zs(u,m){u.g?u.g.add(m):u.h=m}function Wi(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}js.prototype.cancel=function(){if(this.i=tn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function tn(u){if(u.h!=null)return u.i.concat(u.h.G);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const _ of u.g.values())m=m.concat(_.G);return m}return F(u.i)}var Fl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function nn(u,m){if(u){u=u.split("&");for(let _=0;_<u.length;_++){const E=u[_].indexOf("=");let L,z=null;E>=0?(L=u[_].substring(0,E),z=u[_].substring(E+1)):L=u[_],m(L,z?decodeURIComponent(z.replace(/\+/g," ")):"")}}}function Wn(u){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let m;u instanceof Wn?(this.l=u.l,Hi(this,u.j),this.o=u.o,this.g=u.g,Hn(this,u.u),this.h=u.h,Yr(this,da(u.i)),this.m=u.m):u&&(m=String(u).match(Fl))?(this.l=!1,Hi(this,m[1]||"",!0),this.o=Gi(m[2]||""),this.g=Gi(m[3]||"",!0),Hn(this,m[4]),this.h=Gi(m[5]||"",!0),Yr(this,m[6]||"",!0),this.m=Gi(m[7]||"")):(this.l=!1,this.i=new De(null,this.l))}Wn.prototype.toString=function(){const u=[];var m=this.j;m&&u.push(Ki(m,oa,!0),":");var _=this.g;return(_||m=="file")&&(u.push("//"),(m=this.o)&&u.push(Ki(m,oa,!0),"@"),u.push(qn(_).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.u,_!=null&&u.push(":",String(_))),(_=this.h)&&(this.g&&_.charAt(0)!="/"&&u.push("/"),u.push(Ki(_,_.charAt(0)=="/"?Qi:aa,!0))),(_=this.i.toString())&&u.push("?",_),(_=this.m)&&u.push("#",Ki(_,la)),u.join("")},Wn.prototype.resolve=function(u){const m=mn(this);let _=!!u.j;_?Hi(m,u.j):_=!!u.o,_?m.o=u.o:_=!!u.g,_?m.g=u.g:_=u.u!=null;var E=u.h;if(_)Hn(m,u.u);else if(_=!!u.h){if(E.charAt(0)!="/")if(this.g&&!this.h)E="/"+E;else{var L=m.h.lastIndexOf("/");L!=-1&&(E=m.h.slice(0,L+1)+E)}if(L=E,L==".."||L==".")E="";else if(L.indexOf("./")!=-1||L.indexOf("/.")!=-1){E=L.lastIndexOf("/",0)==0,L=L.split("/");const z=[];for(let Z=0;Z<L.length;){const Ee=L[Z++];Ee=="."?E&&Z==L.length&&z.push(""):Ee==".."?((z.length>1||z.length==1&&z[0]!="")&&z.pop(),E&&Z==L.length&&z.push("")):(z.push(Ee),E=!0)}E=z.join("/")}else E=L}return _?m.h=E:_=u.i.toString()!=="",_?Yr(m,da(u.i)):_=!!u.m,_&&(m.m=u.m),m};function mn(u){return new Wn(u)}function Hi(u,m,_){u.j=_?Gi(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function Hn(u,m){if(m){if(m=Number(m),isNaN(m)||m<0)throw Error("Bad port number "+m);u.u=m}else u.u=null}function Yr(u,m,_){m instanceof De?(u.i=m,$s(u.i,u.l)):(_||(m=Ki(m,eh)),u.i=new De(m,u.l))}function Fe(u,m,_){u.i.set(m,_)}function vr(u){return Fe(u,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),u}function Gi(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Ki(u,m,_){return typeof u=="string"?(u=encodeURI(u).replace(m,sa),_&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function sa(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var oa=/[#\/\?@]/g,aa=/[#\?:]/g,Qi=/[#\?]/g,eh=/[#\?@]/g,la=/#/g;function De(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function Gn(u){u.g||(u.g=new Map,u.h=0,u.i&&nn(u.i,function(m,_){u.add(decodeURIComponent(m.replace(/\+/g," ")),_)}))}n=De.prototype,n.add=function(u,m){Gn(this),this.i=null,u=Kn(this,u);let _=this.g.get(u);return _||this.g.set(u,_=[]),_.push(m),this.h+=1,this};function ua(u,m){Gn(u),m=Kn(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function Bs(u,m){return Gn(u),m=Kn(u,m),u.g.has(m)}n.forEach=function(u,m){Gn(this),this.g.forEach(function(_,E){_.forEach(function(L){u.call(m,L,E,this)},this)},this)};function ca(u,m){Gn(u);let _=[];if(typeof m=="string")Bs(u,m)&&(_=_.concat(u.g.get(Kn(u,m))));else for(u=Array.from(u.g.values()),m=0;m<u.length;m++)_=_.concat(u[m]);return _}n.set=function(u,m){return Gn(this),this.i=null,u=Kn(this,u),Bs(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},n.get=function(u,m){return u?(u=ca(this,u),u.length>0?String(u[0]):m):m};function ha(u,m,_){ua(u,m),_.length>0&&(u.i=null,u.g.set(Kn(u,m),F(_)),u.h+=_.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(let E=0;E<m.length;E++){var _=m[E];const L=qn(_);_=ca(this,_);for(let z=0;z<_.length;z++){let Z=L;_[z]!==""&&(Z+="="+qn(_[z])),u.push(Z)}}return this.i=u.join("&")};function da(u){const m=new De;return m.i=u.i,u.g&&(m.g=new Map(u.g),m.h=u.h),m}function Kn(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function $s(u,m){m&&!u.j&&(Gn(u),u.i=null,u.g.forEach(function(_,E){const L=E.toLowerCase();E!=L&&(ua(this,E),ha(this,L,_))},u)),u.j=m}function Qn(u,m){const _=new Gr;if(c.Image){const E=new Image;E.onload=w(Rt,_,"TestLoadImage: loaded",!0,m,E),E.onerror=w(Rt,_,"TestLoadImage: error",!1,m,E),E.onabort=w(Rt,_,"TestLoadImage: abort",!1,m,E),E.ontimeout=w(Rt,_,"TestLoadImage: timeout",!1,m,E),c.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=u}else m(!1)}function Yn(u,m){const _=new Gr,E=new AbortController,L=setTimeout(()=>{E.abort(),Rt(_,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:E.signal}).then(z=>{clearTimeout(L),z.ok?Rt(_,"TestPingServer: ok",!0,m):Rt(_,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(L),Rt(_,"TestPingServer: error",!1,m)})}function Rt(u,m,_,E,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),E(_)}catch{}}function Yi(){this.g=new ji}function wr(u){this.i=u.Sb||null,this.h=u.ab||!1}T(wr,$r),wr.prototype.g=function(){return new rn(this.i,this.h)};function rn(u,m){ct.call(this),this.H=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}T(rn,ct),n=rn.prototype,n.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=u,this.D=m,this.readyState=1,Pn(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const m={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};u&&(m.body=u),(this.H||c).fetch(new Request(this.D,m)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Jr(this)),this.readyState=0},n.Pa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Pn(this)),this.g&&(this.readyState=3,Pn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Ul(this)}else u.text().then(this.Oa.bind(this),this.ga.bind(this))};function Ul(u){u.j.read().then(u.Ma.bind(u)).catch(u.ga.bind(u))}n.Ma=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.B.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?Jr(this):Pn(this),this.readyState==3&&Ul(this)}},n.Oa=function(u){this.g&&(this.response=this.responseText=u,Jr(this))},n.Na=function(u){this.g&&(this.response=u,Jr(this))},n.ga=function(){this.g&&Jr(this)};function Jr(u){u.readyState=4,u.l=null,u.j=null,u.B=null,Pn(u)}n.setRequestHeader=function(u,m){this.A.append(u,m)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var _=m.next();!_.done;)_=_.value,u.push(_[0]+": "+_[1]),_=m.next();return u.join(`\r
`)};function Pn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(rn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function jl(u){let m="";return pe(u,function(_,E){m+=E,m+=":",m+=_,m+=`\r
`}),m}function qs(u,m,_){e:{for(E in _){var E=!1;break e}E=!0}E||(_=jl(_),typeof u=="string"?_!=null&&qn(_):Fe(u,m,_))}function $e(u){ct.call(this),this.headers=new Map,this.L=u||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}T($e,ct);var zl=/^https?$/i,th=["POST","PUT"];n=$e.prototype,n.Fa=function(u){this.H=u},n.ea=function(u,m,_,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Dl.g(),this.g.onreadystatechange=I(y(this.Ca,this));try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch(z){Xr(this,z);return}if(u=_||"",_=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var L in E)_.set(L,E[L]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const z of E.keys())_.set(z,E.get(z));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(_.keys()).find(z=>z.toLowerCase()=="content-type"),L=c.FormData&&u instanceof c.FormData,!(Array.prototype.indexOf.call(th,m,void 0)>=0)||E||L||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[z,Z]of _)this.g.setRequestHeader(z,Z);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(u),this.v=!1}catch(z){Xr(this,z)}};function Xr(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.o=5,Zr(u),Tr(u)}function Zr(u){u.A||(u.A=!0,st(u,"complete"),st(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=u||7,st(this,"complete"),st(this,"abort"),Tr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Tr(this,!0)),$e.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Er(this):this.Xa())},n.Xa=function(){Er(this)};function Er(u){if(u.h&&typeof l<"u"){if(u.v&&Jn(u)==4)setTimeout(u.Ca.bind(u),0);else if(st(u,"readystatechange"),Jn(u)==4){u.h=!1;try{const z=u.ca();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var _;if(!(_=m)){var E;if(E=z===0){let Z=String(u.D).match(Fl)[1]||null;!Z&&c.self&&c.self.location&&(Z=c.self.location.protocol.slice(0,-1)),E=!zl.test(Z?Z.toLowerCase():"")}_=E}if(_)st(u,"complete"),st(u,"success");else{u.o=6;try{var L=Jn(u)>2?u.g.statusText:""}catch{L=""}u.l=L+" ["+u.ca()+"]",Zr(u)}}finally{Tr(u)}}}}function Tr(u,m){if(u.g){u.m&&(clearTimeout(u.m),u.m=null);const _=u.g;u.g=null,m||st(u,"ready");try{_.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Jn(u){return u.g?u.g.readyState:0}n.ca=function(){try{return Jn(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),Cl(m)}};function Bl(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.F){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function fa(u){const m={};u=(u.g&&Jn(u)>=2&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<u.length;E++){if(R(u[E]))continue;var _=Fs(u[E]);const L=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const z=m[L]||[];m[L]=z,z.push(_)}ie(m,function(E){return E.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Xn(u,m,_){return _&&_.internalChannelParams&&_.internalChannelParams[u]||m}function Ws(u){this.za=0,this.i=[],this.j=new Gr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Xn("failFast",!1,u),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Xn("baseRetryDelayMs",5e3,u),this.Za=Xn("retryDelaySeedMs",1e4,u),this.Ta=Xn("forwardChannelMaxRetries",2,u),this.va=Xn("forwardChannelRequestTimeoutMs",2e4,u),this.ma=u&&u.xmlHttpFactory||void 0,this.Ua=u&&u.Rb||void 0,this.Aa=u&&u.useFetchStreams||!1,this.O=void 0,this.L=u&&u.supportsCrossDomainXhr||!1,this.M="",this.h=new js(u&&u.concurrentRequestLimit),this.Ba=new Yi,this.S=u&&u.fastHandshake||!1,this.R=u&&u.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=u&&u.Pb||!1,u&&u.ua&&this.j.ua(),u&&u.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&u&&u.detectBufferingProxy||!1,this.ia=void 0,u&&u.longPollingTimeout&&u.longPollingTimeout>0&&(this.ia=u.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Ws.prototype,n.ka=8,n.I=1,n.connect=function(u,m,_,E){nt(0),this.W=u,this.H=m||{},_&&E!==void 0&&(this.H.OSID=_,this.H.OAID=E),this.F=this.X,this.J=ma(this,null,this.W),Ir(this)};function Hs(u){if(Gs(u),u.I==3){var m=u.V++,_=mn(u.J);if(Fe(_,"SID",u.M),Fe(_,"RID",m),Fe(_,"TYPE","terminate"),Zn(u,_),m=new pn(u,u.j,m),m.M=2,m.A=vr(mn(_)),_=!1,c.navigator&&c.navigator.sendBeacon)try{_=c.navigator.sendBeacon(m.A.toString(),"")}catch{}!_&&c.Image&&(new Image().src=m.A,_=!0),_||(m.g=ql(m.j,null),m.g.ea(m.A)),m.F=Date.now(),Bi(m)}Zi(u)}function sn(u){u.g&&(Xi(u),u.g.cancel(),u.g=null)}function Gs(u){sn(u),u.v&&(c.clearTimeout(u.v),u.v=null),Ks(u),u.h.cancel(),u.m&&(typeof u.m=="number"&&c.clearTimeout(u.m),u.m=null)}function Ir(u){if(!ra(u.h)&&!u.m){u.m=!0;var m=u.Ea;be||A(),Re||(be(),Re=!0),k.add(m,u),u.D=0}}function $l(u,m){return qi(u.h)>=u.h.j-(u.m?1:0)?!1:u.m?(u.i=m.G.concat(u.i),!0):u.I==1||u.I==2||u.D>=(u.Sa?0:u.Ta)?!1:(u.m=Hr(y(u.Ea,u,m),Ys(u,u.D)),u.D++,!0)}n.Ea=function(u){if(this.m)if(this.m=null,this.I==1){if(!u){this.V=Math.floor(Math.random()*1e5),u=this.V++;const L=new pn(this,this.j,u);let z=this.o;if(this.U&&(z?(z=V(z),Ie(z,this.U)):z=this.U),this.u!==null||this.R||(L.J=z,z=null),this.S)e:{for(var m=0,_=0;_<this.i.length;_++){t:{var E=this.i[_];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(m+=E,m>4096){m=_;break e}if(m===4096||_===this.i.length-1){m=_+1;break e}}m=1e3}else m=1e3;m=pa(this,L,m),_=mn(this.J),Fe(_,"RID",u),Fe(_,"CVER",22),this.G&&Fe(_,"X-HTTP-Session-Id",this.G),Zn(this,_),z&&(this.R?m="headers="+qn(jl(z))+"&"+m:this.u&&qs(_,this.u,z)),zs(this.h,L),this.Ra&&Fe(_,"TYPE","init"),this.S?(Fe(_,"$req",m),Fe(_,"SID","null"),L.U=!0,Cn(L,_,null)):Cn(L,_,m),this.I=2}}else this.I==3&&(u?Ji(this,u):this.i.length==0||ra(this.h)||Ji(this))};function Ji(u,m){var _;m?_=m.l:_=u.V++;const E=mn(u.J);Fe(E,"SID",u.M),Fe(E,"RID",_),Fe(E,"AID",u.K),Zn(u,E),u.u&&u.o&&qs(E,u.u,u.o),_=new pn(u,u.j,_,u.D+1),u.u===null&&(_.J=u.o),m&&(u.i=m.G.concat(u.i)),m=pa(u,_,1e3),_.H=Math.round(u.va*.5)+Math.round(u.va*.5*Math.random()),zs(u.h,_),Cn(_,E,m)}function Zn(u,m){u.H&&pe(u.H,function(_,E){Fe(m,E,_)}),u.l&&pe({},function(_,E){Fe(m,E,_)})}function pa(u,m,_){_=Math.min(u.i.length,_);const E=u.l?y(u.l.Ka,u.l,u):null;e:{var L=u.i;let Ee=-1;for(;;){const ot=["count="+_];Ee==-1?_>0?(Ee=L[0].g,ot.push("ofs="+Ee)):Ee=0:ot.push("ofs="+Ee);let ze=!0;for(let ht=0;ht<_;ht++){var z=L[ht].g;const an=L[ht].map;if(z-=Ee,z<0)Ee=Math.max(0,L[ht].g-100),ze=!1;else try{z="req"+z+"_"||"";try{var Z=an instanceof Map?an:Object.entries(an);for(const[Sr,tr]of Z){let nr=tr;f(tr)&&(nr=Br(tr)),ot.push(z+Sr+"="+encodeURIComponent(nr))}}catch(Sr){throw ot.push(z+"type="+encodeURIComponent("_badmap")),Sr}}catch{E&&E(an)}}if(ze){Z=ot.join("&");break e}}Z=void 0}return u=u.i.splice(0,_),m.G=u,Z}function bt(u){if(!u.g&&!u.v){u.Y=1;var m=u.Da;be||A(),Re||(be(),Re=!0),k.add(m,u),u.A=0}}function er(u){return u.g||u.v||u.A>=3?!1:(u.Y++,u.v=Hr(y(u.Da,u),Ys(u,u.A)),u.A++,!0)}n.Da=function(){if(this.v=null,ei(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var u=4*this.T;this.j.info("BP detection timer enabled: "+u),this.B=Hr(y(this.Wa,this),u)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,nt(10),sn(this),ei(this))};function Xi(u){u.B!=null&&(c.clearTimeout(u.B),u.B=null)}function ei(u){u.g=new pn(u,u.j,"rpc",u.Y),u.u===null&&(u.g.J=u.o),u.g.P=0;var m=mn(u.na);Fe(m,"RID","rpc"),Fe(m,"SID",u.M),Fe(m,"AID",u.K),Fe(m,"CI",u.F?"0":"1"),!u.F&&u.ia&&Fe(m,"TO",u.ia),Fe(m,"TYPE","xmlhttp"),Zn(u,m),u.u&&u.o&&qs(m,u.u,u.o),u.O&&(u.g.H=u.O);var _=u.g;u=u.ba,_.M=1,_.A=vr(mn(m)),_.u=null,_.R=!0,ta(_,u)}n.Va=function(){this.C!=null&&(this.C=null,sn(this),er(this),nt(19))};function Ks(u){u.C!=null&&(c.clearTimeout(u.C),u.C=null)}function Qs(u,m){var _=null;if(u.g==m){Ks(u),Xi(u),u.g=null;var E=2}else if(ia(u.h,m))_=m.G,Wi(u.h,m),E=1;else return;if(u.I!=0){if(m.o)if(E==1){_=m.u?m.u.length:0,m=Date.now()-m.F;var L=u.D;E=Wr(),st(E,new Zo(E,_)),Ir(u)}else bt(u);else if(L=m.m,L==3||L==0&&m.X>0||!(E==1&&$l(u,m)||E==2&&er(u)))switch(_&&_.length>0&&(m=u.h,m.i=m.i.concat(_)),L){case 1:on(u,5);break;case 4:on(u,10);break;case 3:on(u,6);break;default:on(u,2)}}}function Ys(u,m){let _=u.Qa+Math.floor(Math.random()*u.Za);return u.isActive()||(_*=2),_*m}function on(u,m){if(u.j.info("Error code "+m),m==2){var _=y(u.bb,u),E=u.Ua;const L=!E;E=new Wn(E||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Hi(E,"https"),vr(E),L?Qn(E.toString(),_):Yn(E.toString(),_)}else nt(2);u.I=0,u.l&&u.l.pa(m),Zi(u),Gs(u)}n.bb=function(u){u?(this.j.info("Successfully pinged google.com"),nt(2)):(this.j.info("Failed to ping google.com"),nt(1))};function Zi(u){if(u.I=0,u.ja=[],u.l){const m=tn(u.h);(m.length!=0||u.i.length!=0)&&($(u.ja,m),$(u.ja,u.i),u.h.i.length=0,F(u.i),u.i.length=0),u.l.oa()}}function ma(u,m,_){var E=_ instanceof Wn?mn(_):new Wn(_);if(E.g!="")m&&(E.g=m+"."+E.g),Hn(E,E.u);else{var L=c.location;E=L.protocol,m=m?m+"."+L.hostname:L.hostname,L=+L.port;const z=new Wn(null);E&&Hi(z,E),m&&(z.g=m),L&&Hn(z,L),_&&(z.h=_),E=z}return _=u.G,m=u.wa,_&&m&&Fe(E,_,m),Fe(E,"VER",u.ka),Zn(u,E),E}function ql(u,m,_){if(m&&!u.L)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Aa&&!u.ma?new $e(new wr({ab:_})):new $e(u.ma),m.Fa(u.L),m}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Wl(){}n=Wl.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Js(){}Js.prototype.g=function(u,m){return new Ct(u,m)};function Ct(u,m){ct.call(this),this.g=new Ws(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.sa&&(u?u["X-WebChannel-Client-Profile"]=m.sa:u={"X-WebChannel-Client-Profile":m.sa}),this.g.U=u,(u=m&&m.Qb)&&!R(u)&&(this.g.u=u),this.A=m&&m.supportsCrossDomainXhr||!1,this.v=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!R(m)&&(this.g.G=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new ti(this)}T(Ct,ct),Ct.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Ct.prototype.close=function(){Hs(this.g)},Ct.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var _={};_.__data__=u,u=_}else this.v&&(_={},_.__data__=Br(u),u=_);m.i.push(new Zc(m.Ya++,u)),m.I==3&&Ir(m)},Ct.prototype.N=function(){this.g.l=null,delete this.j,Hs(this.g),delete this.g,Ct.Z.N.call(this)};function Hl(u){Os.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){e:{for(const _ in m){u=_;break e}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}T(Hl,Os);function Gl(){Xo.call(this),this.status=1}T(Gl,Xo);function ti(u){this.g=u}T(ti,Wl),ti.prototype.ra=function(){st(this.g,"a")},ti.prototype.qa=function(u){st(this.g,new Hl(u))},ti.prototype.pa=function(u){st(this.g,new Gl)},ti.prototype.oa=function(){st(this.g,"b")},Js.prototype.createWebChannel=Js.prototype.g,Ct.prototype.send=Ct.prototype.o,Ct.prototype.open=Ct.prototype.m,Ct.prototype.close=Ct.prototype.close,nw=function(){return new Js},tw=function(){return Wr()},ew=Rn,af={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Kr.NO_ERROR=0,Kr.TIMEOUT=8,Kr.HTTP_ERROR=6,Ju=Kr,Qr.COMPLETE="complete",Zv=Qr,Pl.EventType=qr,qr.OPEN="a",qr.CLOSE="b",qr.ERROR="c",qr.MESSAGE="d",ct.prototype.listen=ct.prototype.J,qa=Pl,$e.prototype.listenOnce=$e.prototype.K,$e.prototype.getLastError=$e.prototype.Ha,$e.prototype.getLastErrorCode=$e.prototype.ya,$e.prototype.getStatus=$e.prototype.ca,$e.prototype.getResponseJson=$e.prototype.La,$e.prototype.getResponseText=$e.prototype.la,$e.prototype.send=$e.prototype.ea,$e.prototype.setWithCredentials=$e.prototype.Fa,Xv=$e}).apply(typeof Bu<"u"?Bu:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}jt.UNAUTHENTICATED=new jt(null),jt.GOOGLE_CREDENTIALS=new jt("google-credentials-uid"),jt.FIRST_PARTY=new jt("first-party-uid"),jt.MOCK_USER=new jt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bo="12.9.0";function SR(n){Bo=n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ws=new Dc("@firebase/firestore");function wo(){return ws.logLevel}function re(n,...e){if(ws.logLevel<=ke.DEBUG){const t=e.map(Bf);ws.debug(`Firestore (${Bo}): ${n}`,...t)}}function Fr(n,...e){if(ws.logLevel<=ke.ERROR){const t=e.map(Bf);ws.error(`Firestore (${Bo}): ${n}`,...t)}}function Es(n,...e){if(ws.logLevel<=ke.WARN){const t=e.map(Bf);ws.warn(`Firestore (${Bo}): ${n}`,...t)}}function Bf(n){if(typeof n=="string")return n;try{return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(n,e,t){let i="Unexpected state";typeof e=="string"?i=e:t=e,rw(n,i,t)}function rw(n,e,t){let i=`FIRESTORE (${Bo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{i+=" CONTEXT: "+JSON.stringify(t)}catch{i+=" CONTEXT: "+t}throw Fr(i),new Error(i)}function je(n,e,t,i){let o="Unexpected state";typeof t=="string"?o=t:i=t,n||rw(e,o,i)}function Te(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ne extends zn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iw{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class AR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(jt.UNAUTHENTICATED)))}shutdown(){}}class RR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class CR{constructor(e){this.t=e,this.currentUser=jt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){je(this.o===void 0,42304);let i=this.i;const o=g=>this.i!==i?(i=this.i,t(g)):Promise.resolve();let l=new gs;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new gs,e.enqueueRetryable((()=>o(this.currentUser)))};const c=()=>{const g=l;e.enqueueRetryable((async()=>{await g.promise,await o(this.currentUser)}))},f=g=>{re("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit((g=>f(g))),setTimeout((()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?f(g):(re("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new gs)}}),0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((i=>this.i!==e?(re("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(je(typeof i.accessToken=="string",31837,{l:i}),new iw(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return je(e===null||typeof e=="string",2055,{h:e}),new jt(e)}}class PR{constructor(e,t,i){this.P=e,this.T=t,this.I=i,this.type="FirstParty",this.user=jt.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class kR{constructor(e,t,i){this.P=e,this.T=t,this.I=i}getToken(){return Promise.resolve(new PR(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(jt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Dy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class xR{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,On(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){je(this.o===void 0,3512);const i=l=>{l.error!=null&&re("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.m;return this.m=l.token,re("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>i(l)))};const o=l=>{re("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((l=>o(l))),setTimeout((()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?o(l):re("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Dy(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(je(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Dy(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NR(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const o=NR(40);for(let l=0;l<o.length;++l)i.length<20&&o[l]<t&&(i+=e.charAt(o[l]%62))}return i}}function xe(n,e){return n<e?-1:n>e?1:0}function lf(n,e){const t=Math.min(n.length,e.length);for(let i=0;i<t;i++){const o=n.charAt(i),l=e.charAt(i);if(o!==l)return Ud(o)===Ud(l)?xe(o,l):Ud(o)?1:-1}return xe(n.length,e.length)}const DR=55296,VR=57343;function Ud(n){const e=n.charCodeAt(0);return e>=DR&&e<=VR}function Vo(n,e,t){return n.length===e.length&&n.every(((i,o)=>t(i,e[o])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vy="__name__";class ar{constructor(e,t,i){t===void 0?t=0:t>e.length&&ye(637,{offset:t,range:e.length}),i===void 0?i=e.length-t:i>e.length-t&&ye(1746,{length:i,range:e.length-t}),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return ar.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ar?e.forEach((i=>{t.push(i)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let o=0;o<i;o++){const l=ar.compareSegments(e.get(o),t.get(o));if(l!==0)return l}return xe(e.length,t.length)}static compareSegments(e,t){const i=ar.isNumericId(e),o=ar.isNumericId(t);return i&&!o?-1:!i&&o?1:i&&o?ar.extractNumericId(e).compare(ar.extractNumericId(t)):lf(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ri.fromString(e.substring(4,e.length-2))}}class He extends ar{construct(e,t,i){return new He(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new ne(q.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter((o=>o.length>0)))}return new He(t)}static emptyPath(){return new He([])}}const bR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Nt extends ar{construct(e,t,i){return new Nt(e,t,i)}static isValidIdentifier(e){return bR.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Nt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Vy}static keyField(){return new Nt([Vy])}static fromServerFormat(e){const t=[];let i="",o=0;const l=()=>{if(i.length===0)throw new ne(q.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let c=!1;for(;o<e.length;){const f=e[o];if(f==="\\"){if(o+1===e.length)throw new ne(q.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new ne(q.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=g,o+=2}else f==="`"?(c=!c,o++):f!=="."||c?(i+=f,o++):(l(),o++)}if(l(),c)throw new ne(q.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Nt(t)}static emptyPath(){return new Nt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e){this.path=e}static fromPath(e){return new fe(He.fromString(e))}static fromName(e){return new fe(He.fromString(e).popFirst(5))}static empty(){return new fe(He.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&He.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return He.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new fe(new He(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sw(n,e,t){if(!t)throw new ne(q.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function OR(n,e,t,i){if(e===!0&&i===!0)throw new ne(q.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function by(n){if(!fe.isDocumentKey(n))throw new ne(q.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Oy(n){if(fe.isDocumentKey(n))throw new ne(q.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function ow(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Lc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(i){return i.constructor?i.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ye(12329,{type:typeof n})}function ys(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ne(q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Lc(n);throw new ne(q.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(n,e){const t={typeString:n};return e&&(t.value=e),t}function wl(n,e){if(!ow(n))throw new ne(q.INVALID_ARGUMENT,"JSON must be an object");let t;for(const i in e)if(e[i]){const o=e[i].typeString,l="value"in e[i]?{value:e[i].value}:void 0;if(!(i in n)){t=`JSON missing required field: '${i}'`;break}const c=n[i];if(o&&typeof c!==o){t=`JSON field '${i}' must be a ${o}.`;break}if(l!==void 0&&c!==l.value){t=`Expected '${i}' field to equal '${l.value}'`;break}}if(t)throw new ne(q.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ly=-62135596800,My=1e6;class Ye{static now(){return Ye.fromMillis(Date.now())}static fromDate(e){return Ye.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*My);return new Ye(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ne(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ne(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Ly)throw new ne(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ne(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/My}_compareTo(e){return this.seconds===e.seconds?xe(this.nanoseconds,e.nanoseconds):xe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ye._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(wl(e,Ye._jsonSchema))return new Ye(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Ly;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ye._jsonSchemaVersion="firestore/timestamp/1.0",Ye._jsonSchema={type:gt("string",Ye._jsonSchemaVersion),seconds:gt("number"),nanoseconds:gt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{static fromTimestamp(e){return new we(e)}static min(){return new we(new Ye(0,0))}static max(){return new we(new Ye(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ol=-1;function LR(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,o=we.fromTimestamp(i===1e9?new Ye(t+1,0):new Ye(t,i));return new ki(o,fe.empty(),e)}function MR(n){return new ki(n.readTime,n.key,ol)}class ki{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new ki(we.min(),fe.empty(),ol)}static max(){return new ki(we.max(),fe.empty(),ol)}}function FR(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=fe.comparator(n.documentKey,e.documentKey),t!==0?t:xe(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class jR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $o(n){if(n.code!==q.FAILED_PRECONDITION||n.message!==UR)throw n;re("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ye(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new W(((i,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(i,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof W?t:W.resolve(t)}catch(t){return W.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):W.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):W.reject(t)}static resolve(e){return new W(((t,i)=>{t(e)}))}static reject(e){return new W(((t,i)=>{i(e)}))}static waitFor(e){return new W(((t,i)=>{let o=0,l=0,c=!1;e.forEach((f=>{++o,f.next((()=>{++l,c&&l===o&&t()}),(g=>i(g)))})),c=!0,l===o&&t()}))}static or(e){let t=W.resolve(!1);for(const i of e)t=t.next((o=>o?W.resolve(o):i()));return t}static forEach(e,t){const i=[];return e.forEach(((o,l)=>{i.push(t.call(this,o,l))})),this.waitFor(i)}static mapArray(e,t){return new W(((i,o)=>{const l=e.length,c=new Array(l);let f=0;for(let g=0;g<l;g++){const y=g;t(e[y]).next((w=>{c[y]=w,++f,f===l&&i(c)}),(w=>o(w)))}}))}static doWhile(e,t){return new W(((i,o)=>{const l=()=>{e()===!0?t().next((()=>{l()}),o):i()};l()}))}}function zR(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function qo(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ae(i),this.ue=i=>t.writeSequenceNumber(i))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Mc.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qf=-1;function Fc(n){return n==null}function fc(n){return n===0&&1/n==-1/0}function BR(n){return typeof n=="number"&&Number.isInteger(n)&&!fc(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aw="";function $R(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Fy(e)),e=qR(n.get(t),e);return Fy(e)}function qR(n,e){let t=e;const i=n.length;for(let o=0;o<i;o++){const l=n.charAt(o);switch(l){case"\0":t+="";break;case aw:t+="";break;default:t+=l}}return t}function Fy(n){return n+aw+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uy(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Fi(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function lw(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,t){this.comparator=e,this.root=t||xt.EMPTY}insert(e,t){return new tt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,xt.BLACK,null,null))}remove(e){return new tt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,xt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(e,i.key);if(o===0)return t+i.left.size;o<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,i)=>(e(t,i),!1)))}toString(){const e=[];return this.inorderTraversal(((t,i)=>(e.push(`${t}:${i}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new $u(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new $u(this.root,e,this.comparator,!1)}getReverseIterator(){return new $u(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new $u(this.root,e,this.comparator,!0)}}class $u{constructor(e,t,i,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?i(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class xt{constructor(e,t,i,o,l){this.key=e,this.value=t,this.color=i??xt.RED,this.left=o??xt.EMPTY,this.right=l??xt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,o,l){return new xt(e??this.key,t??this.value,i??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let o=this;const l=i(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,i),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return xt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return xt.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,xt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,xt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ye(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ye(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ye(27949);return e+(this.isRed()?0:1)}}xt.EMPTY=null,xt.RED=!0,xt.BLACK=!1;xt.EMPTY=new class{constructor(){this.size=0}get key(){throw ye(57766)}get value(){throw ye(16141)}get color(){throw ye(16727)}get left(){throw ye(29726)}get right(){throw ye(36894)}copy(e,t,i,o,l){return this}insert(e,t,i){return new xt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.comparator=e,this.data=new tt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,i)=>(e(t),!1)))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new jy(this.data.getIterator())}getIteratorFrom(e){return new jy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((i=>{t=t.add(i)})),t}isEqual(e){if(!(e instanceof wt)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new wt(this.comparator);return t.data=e,t}}class jy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e){this.fields=e,e.sort(Nt.comparator)}static empty(){return new Mn([])}unionWith(e){let t=new wt(Nt.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new Mn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Vo(this.fields,e.fields,((t,i)=>t.isEqual(i)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new uw("Invalid base64 string: "+l):l}})(e);return new Dt(t)}static fromUint8Array(e){const t=(function(o){let l="";for(let c=0;c<o.length;++c)l+=String.fromCharCode(o[c]);return l})(e);return new Dt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return xe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Dt.EMPTY_BYTE_STRING=new Dt("");const WR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function xi(n){if(je(!!n,39018),typeof n=="string"){let e=0;const t=WR.exec(n);if(je(!!t,46558,{timestamp:n}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:lt(n.seconds),nanos:lt(n.nanos)}}function lt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ni(n){return typeof n=="string"?Dt.fromBase64String(n):Dt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cw="server_timestamp",hw="__type__",dw="__previous_value__",fw="__local_write_time__";function Wf(n){var t,i;return((i=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[hw])==null?void 0:i.stringValue)===cw}function Uc(n){const e=n.mapValue.fields[dw];return Wf(e)?Uc(e):e}function al(n){const e=xi(n.mapValue.fields[fw].timestampValue);return new Ye(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HR{constructor(e,t,i,o,l,c,f,g,y,w,T){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=o,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=f,this.longPollingOptions=g,this.useFetchStreams=y,this.isUsingEmulator=w,this.apiKey=T}}const pc="(default)";class ll{constructor(e,t){this.projectId=e,this.database=t||pc}static empty(){return new ll("","")}get isDefaultDatabase(){return this.database===pc}isEqual(e){return e instanceof ll&&e.projectId===this.projectId&&e.database===this.database}}function GR(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new ne(q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ll(n.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pw="__type__",KR="__max__",qu={mapValue:{}},mw="__vector__",mc="value";function Di(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Wf(n)?4:YR(n)?9007199254740991:QR(n)?10:11:ye(28295,{value:n})}function fr(n,e){if(n===e)return!0;const t=Di(n);if(t!==Di(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return al(n).isEqual(al(e));case 3:return(function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const c=xi(o.timestampValue),f=xi(l.timestampValue);return c.seconds===f.seconds&&c.nanos===f.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(o,l){return Ni(o.bytesValue).isEqual(Ni(l.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(o,l){return lt(o.geoPointValue.latitude)===lt(l.geoPointValue.latitude)&&lt(o.geoPointValue.longitude)===lt(l.geoPointValue.longitude)})(n,e);case 2:return(function(o,l){if("integerValue"in o&&"integerValue"in l)return lt(o.integerValue)===lt(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const c=lt(o.doubleValue),f=lt(l.doubleValue);return c===f?fc(c)===fc(f):isNaN(c)&&isNaN(f)}return!1})(n,e);case 9:return Vo(n.arrayValue.values||[],e.arrayValue.values||[],fr);case 10:case 11:return(function(o,l){const c=o.mapValue.fields||{},f=l.mapValue.fields||{};if(Uy(c)!==Uy(f))return!1;for(const g in c)if(c.hasOwnProperty(g)&&(f[g]===void 0||!fr(c[g],f[g])))return!1;return!0})(n,e);default:return ye(52216,{left:n})}}function ul(n,e){return(n.values||[]).find((t=>fr(t,e)))!==void 0}function bo(n,e){if(n===e)return 0;const t=Di(n),i=Di(e);if(t!==i)return xe(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return xe(n.booleanValue,e.booleanValue);case 2:return(function(l,c){const f=lt(l.integerValue||l.doubleValue),g=lt(c.integerValue||c.doubleValue);return f<g?-1:f>g?1:f===g?0:isNaN(f)?isNaN(g)?0:-1:1})(n,e);case 3:return zy(n.timestampValue,e.timestampValue);case 4:return zy(al(n),al(e));case 5:return lf(n.stringValue,e.stringValue);case 6:return(function(l,c){const f=Ni(l),g=Ni(c);return f.compareTo(g)})(n.bytesValue,e.bytesValue);case 7:return(function(l,c){const f=l.split("/"),g=c.split("/");for(let y=0;y<f.length&&y<g.length;y++){const w=xe(f[y],g[y]);if(w!==0)return w}return xe(f.length,g.length)})(n.referenceValue,e.referenceValue);case 8:return(function(l,c){const f=xe(lt(l.latitude),lt(c.latitude));return f!==0?f:xe(lt(l.longitude),lt(c.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return By(n.arrayValue,e.arrayValue);case 10:return(function(l,c){var I,F,$,H;const f=l.fields||{},g=c.fields||{},y=(I=f[mc])==null?void 0:I.arrayValue,w=(F=g[mc])==null?void 0:F.arrayValue,T=xe((($=y==null?void 0:y.values)==null?void 0:$.length)||0,((H=w==null?void 0:w.values)==null?void 0:H.length)||0);return T!==0?T:By(y,w)})(n.mapValue,e.mapValue);case 11:return(function(l,c){if(l===qu.mapValue&&c===qu.mapValue)return 0;if(l===qu.mapValue)return 1;if(c===qu.mapValue)return-1;const f=l.fields||{},g=Object.keys(f),y=c.fields||{},w=Object.keys(y);g.sort(),w.sort();for(let T=0;T<g.length&&T<w.length;++T){const I=lf(g[T],w[T]);if(I!==0)return I;const F=bo(f[g[T]],y[w[T]]);if(F!==0)return F}return xe(g.length,w.length)})(n.mapValue,e.mapValue);default:throw ye(23264,{he:t})}}function zy(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return xe(n,e);const t=xi(n),i=xi(e),o=xe(t.seconds,i.seconds);return o!==0?o:xe(t.nanos,i.nanos)}function By(n,e){const t=n.values||[],i=e.values||[];for(let o=0;o<t.length&&o<i.length;++o){const l=bo(t[o],i[o]);if(l)return l}return xe(t.length,i.length)}function Oo(n){return uf(n)}function uf(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const i=xi(t);return`time(${i.seconds},${i.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Ni(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return fe.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let i="[",o=!0;for(const l of t.values||[])o?o=!1:i+=",",i+=uf(l);return i+"]"})(n.arrayValue):"mapValue"in n?(function(t){const i=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const c of i)l?l=!1:o+=",",o+=`${c}:${uf(t.fields[c])}`;return o+"}"})(n.mapValue):ye(61005,{value:n})}function Xu(n){switch(Di(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Uc(n);return e?16+Xu(e):16;case 5:return 2*n.stringValue.length;case 6:return Ni(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(i){return(i.values||[]).reduce(((o,l)=>o+Xu(l)),0)})(n.arrayValue);case 10:case 11:return(function(i){let o=0;return Fi(i.fields,((l,c)=>{o+=l.length+Xu(c)})),o})(n.mapValue);default:throw ye(13486,{value:n})}}function $y(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function cf(n){return!!n&&"integerValue"in n}function Hf(n){return!!n&&"arrayValue"in n}function qy(n){return!!n&&"nullValue"in n}function Wy(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Zu(n){return!!n&&"mapValue"in n}function QR(n){var t,i;return((i=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[pw])==null?void 0:i.stringValue)===mw}function Za(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Fi(n.mapValue.fields,((t,i)=>e.mapValue.fields[t]=Za(i))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Za(n.arrayValue.values[t]);return e}return{...n}}function YR(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===KR}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e){this.value=e}static empty(){return new hn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!Zu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Za(t)}setAll(e){let t=Nt.emptyPath(),i={},o=[];e.forEach(((c,f)=>{if(!t.isImmediateParentOf(f)){const g=this.getFieldsMap(t);this.applyChanges(g,i,o),i={},o=[],t=f.popLast()}c?i[f.lastSegment()]=Za(c):o.push(f.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,i,o)}delete(e){const t=this.field(e.popLast());Zu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return fr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let o=t.mapValue.fields[e.get(i)];Zu(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,i){Fi(t,((o,l)=>e[o]=l));for(const o of i)delete e[o]}clone(){return new hn(Za(this.value))}}function gw(n){const e=[];return Fi(n.fields,((t,i)=>{const o=new Nt([t]);if(Zu(i)){const l=gw(i.mapValue).fields;if(l.length===0)e.push(o);else for(const c of l)e.push(o.child(c))}else e.push(o)})),new Mn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e,t,i,o,l,c,f){this.key=e,this.documentType=t,this.version=i,this.readTime=o,this.createTime=l,this.data=c,this.documentState=f}static newInvalidDocument(e){return new zt(e,0,we.min(),we.min(),we.min(),hn.empty(),0)}static newFoundDocument(e,t,i,o){return new zt(e,1,t,we.min(),i,o,0)}static newNoDocument(e,t){return new zt(e,2,t,we.min(),we.min(),hn.empty(),0)}static newUnknownDocument(e,t){return new zt(e,3,t,we.min(),we.min(),hn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(we.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=hn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=hn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=we.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof zt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new zt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(e,t){this.position=e,this.inclusive=t}}function Hy(n,e,t){let i=0;for(let o=0;o<n.position.length;o++){const l=e[o],c=n.position[o];if(l.field.isKeyField()?i=fe.comparator(fe.fromName(c.referenceValue),t.key):i=bo(c,t.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function Gy(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!fr(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e,t="asc"){this.field=e,this.dir=t}}function JR(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{}class mt extends yw{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new ZR(e,t,i):t==="array-contains"?new nC(e,i):t==="in"?new rC(e,i):t==="not-in"?new iC(e,i):t==="array-contains-any"?new sC(e,i):new mt(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new eC(e,i):new tC(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(bo(t,this.value)):t!==null&&Di(this.value)===Di(t)&&this.matchesComparison(bo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ye(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class jn extends yw{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new jn(e,t)}matches(e){return _w(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function _w(n){return n.op==="and"}function vw(n){return XR(n)&&_w(n)}function XR(n){for(const e of n.filters)if(e instanceof jn)return!1;return!0}function hf(n){if(n instanceof mt)return n.field.canonicalString()+n.op.toString()+Oo(n.value);if(vw(n))return n.filters.map((e=>hf(e))).join(",");{const e=n.filters.map((t=>hf(t))).join(",");return`${n.op}(${e})`}}function ww(n,e){return n instanceof mt?(function(i,o){return o instanceof mt&&i.op===o.op&&i.field.isEqual(o.field)&&fr(i.value,o.value)})(n,e):n instanceof jn?(function(i,o){return o instanceof jn&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce(((l,c,f)=>l&&ww(c,o.filters[f])),!0):!1})(n,e):void ye(19439)}function Ew(n){return n instanceof mt?(function(t){return`${t.field.canonicalString()} ${t.op} ${Oo(t.value)}`})(n):n instanceof jn?(function(t){return t.op.toString()+" {"+t.getFilters().map(Ew).join(" ,")+"}"})(n):"Filter"}class ZR extends mt{constructor(e,t,i){super(e,t,i),this.key=fe.fromName(i.referenceValue)}matches(e){const t=fe.comparator(e.key,this.key);return this.matchesComparison(t)}}class eC extends mt{constructor(e,t){super(e,"in",t),this.keys=Tw("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class tC extends mt{constructor(e,t){super(e,"not-in",t),this.keys=Tw("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Tw(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((i=>fe.fromName(i.referenceValue)))}class nC extends mt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Hf(t)&&ul(t.arrayValue,this.value)}}class rC extends mt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ul(this.value.arrayValue,t)}}class iC extends mt{constructor(e,t){super(e,"not-in",t)}matches(e){if(ul(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!ul(this.value.arrayValue,t)}}class sC extends mt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Hf(t)||!t.arrayValue.values)&&t.arrayValue.values.some((i=>ul(this.value.arrayValue,i)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oC{constructor(e,t=null,i=[],o=[],l=null,c=null,f=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=o,this.limit=l,this.startAt=c,this.endAt=f,this.Te=null}}function Ky(n,e=null,t=[],i=[],o=null,l=null,c=null){return new oC(n,e,t,i,o,l,c)}function Gf(n){const e=Te(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((i=>hf(i))).join(","),t+="|ob:",t+=e.orderBy.map((i=>(function(l){return l.field.canonicalString()+l.dir})(i))).join(","),Fc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((i=>Oo(i))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((i=>Oo(i))).join(",")),e.Te=t}return e.Te}function Kf(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!JR(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!ww(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Gy(n.startAt,e.startAt)&&Gy(n.endAt,e.endAt)}function df(n){return fe.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(e,t=null,i=[],o=[],l=null,c="F",f=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=o,this.limit=l,this.limitType=c,this.startAt=f,this.endAt=g,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function aC(n,e,t,i,o,l,c,f){return new Wo(n,e,t,i,o,l,c,f)}function Qf(n){return new Wo(n)}function Qy(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function lC(n){return fe.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Iw(n){return n.collectionGroup!==null}function el(n){const e=Te(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const l of e.explicitOrderBy)e.Ie.push(l),t.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let f=new wt(Nt.comparator);return c.filters.forEach((g=>{g.getFlattenedFilters().forEach((y=>{y.isInequality()&&(f=f.add(y.field))}))})),f})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.Ie.push(new cl(l,i))})),t.has(Nt.keyField().canonicalString())||e.Ie.push(new cl(Nt.keyField(),i))}return e.Ie}function lr(n){const e=Te(n);return e.Ee||(e.Ee=uC(e,el(n))),e.Ee}function uC(n,e){if(n.limitType==="F")return Ky(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((o=>{const l=o.dir==="desc"?"asc":"desc";return new cl(o.field,l)}));const t=n.endAt?new gc(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new gc(n.startAt.position,n.startAt.inclusive):null;return Ky(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function ff(n,e){const t=n.filters.concat([e]);return new Wo(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function cC(n,e){const t=n.explicitOrderBy.concat([e]);return new Wo(n.path,n.collectionGroup,t,n.filters.slice(),n.limit,n.limitType,n.startAt,n.endAt)}function pf(n,e,t){return new Wo(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function jc(n,e){return Kf(lr(n),lr(e))&&n.limitType===e.limitType}function Sw(n){return`${Gf(lr(n))}|lt:${n.limitType}`}function Eo(n){return`Query(target=${(function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map((o=>Ew(o))).join(", ")}]`),Fc(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map((o=>(function(c){return`${c.field.canonicalString()} (${c.dir})`})(o))).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map((o=>Oo(o))).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map((o=>Oo(o))).join(",")),`Target(${i})`})(lr(n))}; limitType=${n.limitType})`}function zc(n,e){return e.isFoundDocument()&&(function(i,o){const l=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):fe.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)})(n,e)&&(function(i,o){for(const l of el(i))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0})(n,e)&&(function(i,o){for(const l of i.filters)if(!l.matches(o))return!1;return!0})(n,e)&&(function(i,o){return!(i.startAt&&!(function(c,f,g){const y=Hy(c,f,g);return c.inclusive?y<=0:y<0})(i.startAt,el(i),o)||i.endAt&&!(function(c,f,g){const y=Hy(c,f,g);return c.inclusive?y>=0:y>0})(i.endAt,el(i),o))})(n,e)}function hC(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Aw(n){return(e,t)=>{let i=!1;for(const o of el(n)){const l=dC(o,e,t);if(l!==0)return l;i=i||o.field.isKeyField()}return 0}}function dC(n,e,t){const i=n.field.isKeyField()?fe.comparator(e.key,t.key):(function(l,c,f){const g=c.data.field(l),y=f.data.field(l);return g!==null&&y!==null?bo(g,y):ye(42886)})(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return ye(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[o,l]of i)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),o=this.inner[i];if(o===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return i.length===1?delete this.inner[t]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Fi(this.inner,((t,i)=>{for(const[o,l]of i)e(o,l)}))}isEmpty(){return lw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fC=new tt(fe.comparator);function Ur(){return fC}const Rw=new tt(fe.comparator);function Wa(...n){let e=Rw;for(const t of n)e=e.insert(t.key,t);return e}function Cw(n){let e=Rw;return n.forEach(((t,i)=>e=e.insert(t,i.overlayedDocument))),e}function ps(){return tl()}function Pw(){return tl()}function tl(){return new Cs((n=>n.toString()),((n,e)=>n.isEqual(e)))}const pC=new tt(fe.comparator),mC=new wt(fe.comparator);function Ne(...n){let e=mC;for(const t of n)e=e.add(t);return e}const gC=new wt(xe);function yC(){return gC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yf(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:fc(e)?"-0":e}}function kw(n){return{integerValue:""+n}}function _C(n,e){return BR(e)?kw(e):Yf(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(){this._=void 0}}function vC(n,e,t){return n instanceof yc?(function(o,l){const c={fields:{[hw]:{stringValue:cw},[fw]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&Wf(l)&&(l=Uc(l)),l&&(c.fields[dw]=l),{mapValue:c}})(t,e):n instanceof hl?Nw(n,e):n instanceof dl?Dw(n,e):(function(o,l){const c=xw(o,l),f=Yy(c)+Yy(o.Ae);return cf(c)&&cf(o.Ae)?kw(f):Yf(o.serializer,f)})(n,e)}function wC(n,e,t){return n instanceof hl?Nw(n,e):n instanceof dl?Dw(n,e):t}function xw(n,e){return n instanceof _c?(function(i){return cf(i)||(function(l){return!!l&&"doubleValue"in l})(i)})(e)?e:{integerValue:0}:null}class yc extends Bc{}class hl extends Bc{constructor(e){super(),this.elements=e}}function Nw(n,e){const t=Vw(e);for(const i of n.elements)t.some((o=>fr(o,i)))||t.push(i);return{arrayValue:{values:t}}}class dl extends Bc{constructor(e){super(),this.elements=e}}function Dw(n,e){let t=Vw(e);for(const i of n.elements)t=t.filter((o=>!fr(o,i)));return{arrayValue:{values:t}}}class _c extends Bc{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Yy(n){return lt(n.integerValue||n.doubleValue)}function Vw(n){return Hf(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function EC(n,e){return n.field.isEqual(e.field)&&(function(i,o){return i instanceof hl&&o instanceof hl||i instanceof dl&&o instanceof dl?Vo(i.elements,o.elements,fr):i instanceof _c&&o instanceof _c?fr(i.Ae,o.Ae):i instanceof yc&&o instanceof yc})(n.transform,e.transform)}class TC{constructor(e,t){this.version=e,this.transformResults=t}}class ur{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ur}static exists(e){return new ur(void 0,e)}static updateTime(e){return new ur(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ec(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class $c{}function bw(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Jf(n.key,ur.none()):new qc(n.key,n.data,ur.none());{const t=n.data,i=hn.empty();let o=new wt(Nt.comparator);for(let l of e.fields)if(!o.has(l)){let c=t.field(l);c===null&&l.length>1&&(l=l.popLast(),c=t.field(l)),c===null?i.delete(l):i.set(l,c),o=o.add(l)}return new Ps(n.key,i,new Mn(o.toArray()),ur.none())}}function IC(n,e,t){n instanceof qc?(function(o,l,c){const f=o.value.clone(),g=Xy(o.fieldTransforms,l,c.transformResults);f.setAll(g),l.convertToFoundDocument(c.version,f).setHasCommittedMutations()})(n,e,t):n instanceof Ps?(function(o,l,c){if(!ec(o.precondition,l))return void l.convertToUnknownDocument(c.version);const f=Xy(o.fieldTransforms,l,c.transformResults),g=l.data;g.setAll(Ow(o)),g.setAll(f),l.convertToFoundDocument(c.version,g).setHasCommittedMutations()})(n,e,t):(function(o,l,c){l.convertToNoDocument(c.version).setHasCommittedMutations()})(0,e,t)}function nl(n,e,t,i){return n instanceof qc?(function(l,c,f,g){if(!ec(l.precondition,c))return f;const y=l.value.clone(),w=Zy(l.fieldTransforms,g,c);return y.setAll(w),c.convertToFoundDocument(c.version,y).setHasLocalMutations(),null})(n,e,t,i):n instanceof Ps?(function(l,c,f,g){if(!ec(l.precondition,c))return f;const y=Zy(l.fieldTransforms,g,c),w=c.data;return w.setAll(Ow(l)),w.setAll(y),c.convertToFoundDocument(c.version,w).setHasLocalMutations(),f===null?null:f.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((T=>T.field)))})(n,e,t,i):(function(l,c,f){return ec(l.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):f})(n,e,t)}function SC(n,e){let t=null;for(const i of n.fieldTransforms){const o=e.data.field(i.field),l=xw(i.transform,o||null);l!=null&&(t===null&&(t=hn.empty()),t.set(i.field,l))}return t||null}function Jy(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&Vo(i,o,((l,c)=>EC(l,c)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class qc extends $c{constructor(e,t,i,o=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Ps extends $c{constructor(e,t,i,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function Ow(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}})),e}function Xy(n,e,t){const i=new Map;je(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let o=0;o<t.length;o++){const l=n[o],c=l.transform,f=e.data.field(l.field);i.set(l.field,wC(c,f,t[o]))}return i}function Zy(n,e,t){const i=new Map;for(const o of n){const l=o.transform,c=t.data.field(o.field);i.set(o.field,vC(l,c,e))}return i}class Jf extends $c{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class AC extends $c{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC{constructor(e,t,i,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&IC(l,e,i[o])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=nl(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=nl(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=Pw();return this.mutations.forEach((o=>{const l=e.get(o.key),c=l.overlayedDocument;let f=this.applyToLocalView(c,l.mutatedFields);f=t.has(o.key)?null:f;const g=bw(c,f);g!==null&&i.set(o.key,g),c.isValidDocument()||c.convertToNoDocument(we.min())})),i}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Ne())}isEqual(e){return this.batchId===e.batchId&&Vo(this.mutations,e.mutations,((t,i)=>Jy(t,i)))&&Vo(this.baseMutations,e.baseMutations,((t,i)=>Jy(t,i)))}}class Xf{constructor(e,t,i,o){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=o}static from(e,t,i){je(e.mutations.length===i.length,58842,{me:e.mutations.length,fe:i.length});let o=(function(){return pC})();const l=e.mutations;for(let c=0;c<l.length;c++)o=o.insert(l[c].key,i[c].version);return new Xf(e,t,i,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CC{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PC{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ft,Ve;function kC(n){switch(n){case q.OK:return ye(64938);case q.CANCELLED:case q.UNKNOWN:case q.DEADLINE_EXCEEDED:case q.RESOURCE_EXHAUSTED:case q.INTERNAL:case q.UNAVAILABLE:case q.UNAUTHENTICATED:return!1;case q.INVALID_ARGUMENT:case q.NOT_FOUND:case q.ALREADY_EXISTS:case q.PERMISSION_DENIED:case q.FAILED_PRECONDITION:case q.ABORTED:case q.OUT_OF_RANGE:case q.UNIMPLEMENTED:case q.DATA_LOSS:return!0;default:return ye(15467,{code:n})}}function Lw(n){if(n===void 0)return Fr("GRPC error has no .code"),q.UNKNOWN;switch(n){case ft.OK:return q.OK;case ft.CANCELLED:return q.CANCELLED;case ft.UNKNOWN:return q.UNKNOWN;case ft.DEADLINE_EXCEEDED:return q.DEADLINE_EXCEEDED;case ft.RESOURCE_EXHAUSTED:return q.RESOURCE_EXHAUSTED;case ft.INTERNAL:return q.INTERNAL;case ft.UNAVAILABLE:return q.UNAVAILABLE;case ft.UNAUTHENTICATED:return q.UNAUTHENTICATED;case ft.INVALID_ARGUMENT:return q.INVALID_ARGUMENT;case ft.NOT_FOUND:return q.NOT_FOUND;case ft.ALREADY_EXISTS:return q.ALREADY_EXISTS;case ft.PERMISSION_DENIED:return q.PERMISSION_DENIED;case ft.FAILED_PRECONDITION:return q.FAILED_PRECONDITION;case ft.ABORTED:return q.ABORTED;case ft.OUT_OF_RANGE:return q.OUT_OF_RANGE;case ft.UNIMPLEMENTED:return q.UNIMPLEMENTED;case ft.DATA_LOSS:return q.DATA_LOSS;default:return ye(39323,{code:n})}}(Ve=ft||(ft={}))[Ve.OK=0]="OK",Ve[Ve.CANCELLED=1]="CANCELLED",Ve[Ve.UNKNOWN=2]="UNKNOWN",Ve[Ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ve[Ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ve[Ve.NOT_FOUND=5]="NOT_FOUND",Ve[Ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ve[Ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ve[Ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ve[Ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ve[Ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ve[Ve.ABORTED=10]="ABORTED",Ve[Ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ve[Ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ve[Ve.INTERNAL=13]="INTERNAL",Ve[Ve.UNAVAILABLE=14]="UNAVAILABLE",Ve[Ve.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xC(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NC=new Ri([4294967295,4294967295],0);function e_(n){const e=xC().encode(n),t=new Jv;return t.update(e),new Uint8Array(t.digest())}function t_(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new Ri([t,i],0),new Ri([o,l],0)]}class Zf{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new Ha(`Invalid padding: ${t}`);if(i<0)throw new Ha(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new Ha(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new Ha(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Ri.fromNumber(this.ge)}ye(e,t,i){let o=e.add(t.multiply(Ri.fromNumber(i)));return o.compare(NC)===1&&(o=new Ri([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=e_(e),[i,o]=t_(t);for(let l=0;l<this.hashCount;l++){const c=this.ye(i,o,l);if(!this.we(c))return!1}return!0}static create(e,t,i){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),c=new Zf(l,o,t);return i.forEach((f=>c.insert(f))),c}insert(e){if(this.ge===0)return;const t=e_(e),[i,o]=t_(t);for(let l=0;l<this.hashCount;l++){const c=this.ye(i,o,l);this.be(c)}}be(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class Ha extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(e,t,i,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const o=new Map;return o.set(e,El.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new Wc(we.min(),o,new tt(xe),Ur(),Ne())}}class El{constructor(e,t,i,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new El(i,t,Ne(),Ne(),Ne())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(e,t,i,o){this.Se=e,this.removedTargetIds=t,this.key=i,this.De=o}}class Mw{constructor(e,t){this.targetId=e,this.Ce=t}}class Fw{constructor(e,t,i=Dt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=o}}class n_{constructor(){this.ve=0,this.Fe=r_(),this.Me=Dt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Ne(),t=Ne(),i=Ne();return this.Fe.forEach(((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:i=i.add(o);break;default:ye(38017,{changeType:l})}})),new El(this.Me,this.xe,e,t,i)}Ke(){this.Oe=!1,this.Fe=r_()}qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,je(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class DC{constructor(e){this.Ge=e,this.ze=new Map,this.je=Ur(),this.He=Wu(),this.Je=Wu(),this.Ze=new tt(xe)}Xe(e){for(const t of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const i=this.nt(t);switch(e.state){case 0:this.rt(t)&&i.Le(e.resumeToken);break;case 1:i.We(),i.Ne||i.Ke(),i.Le(e.resumeToken);break;case 2:i.We(),i.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(i.Qe(),i.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),i.Le(e.resumeToken));break;default:ye(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((i,o)=>{this.rt(o)&&t(o)}))}st(e){const t=e.targetId,i=e.Ce.count,o=this.ot(t);if(o){const l=o.target;if(df(l))if(i===0){const c=new fe(l.path);this.et(t,c,zt.newNoDocument(c,we.min()))}else je(i===1,20013,{expectedCount:i});else{const c=this._t(t);if(c!==i){const f=this.ut(e),g=f?this.ct(f,e,c):1;if(g!==0){this.it(t);const y=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,y)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:l=0}=t;let c,f;try{c=Ni(i).toUint8Array()}catch(g){if(g instanceof uw)return Es("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{f=new Zf(c,o,l)}catch(g){return Es(g instanceof Ha?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return f.ge===0?null:f}ct(e,t,i){return t.Ce.count===i-this.Pt(e,t.targetId)?0:2}Pt(e,t){const i=this.Ge.getRemoteKeysForTarget(t);let o=0;return i.forEach((l=>{const c=this.Ge.ht(),f=`projects/${c.projectId}/databases/${c.database}/documents/${l.path.canonicalString()}`;e.mightContain(f)||(this.et(t,l,null),o++)})),o}Tt(e){const t=new Map;this.ze.forEach(((l,c)=>{const f=this.ot(c);if(f){if(l.current&&df(f.target)){const g=new fe(f.target.path);this.It(g).has(c)||this.Et(c,g)||this.et(c,g,zt.newNoDocument(g,e))}l.Be&&(t.set(c,l.ke()),l.Ke())}}));let i=Ne();this.Je.forEach(((l,c)=>{let f=!0;c.forEachWhile((g=>{const y=this.ot(g);return!y||y.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)})),f&&(i=i.add(l))})),this.je.forEach(((l,c)=>c.setReadTime(e)));const o=new Wc(e,t,this.Ze,this.je,i);return this.je=Ur(),this.He=Wu(),this.Je=Wu(),this.Ze=new tt(xe),o}Ye(e,t){if(!this.rt(e))return;const i=this.Et(e,t.key)?2:0;this.nt(e).qe(t.key,i),this.je=this.je.insert(t.key,t),this.He=this.He.insert(t.key,this.It(t.key).add(e)),this.Je=this.Je.insert(t.key,this.Rt(t.key).add(e))}et(e,t,i){if(!this.rt(e))return;const o=this.nt(e);this.Et(e,t)?o.qe(t,1):o.Ue(t),this.Je=this.Je.insert(t,this.Rt(t).delete(e)),this.Je=this.Je.insert(t,this.Rt(t).add(e)),i&&(this.je=this.je.insert(t,i))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new n_,this.ze.set(e,t)),t}Rt(e){let t=this.Je.get(e);return t||(t=new wt(xe),this.Je=this.Je.insert(e,t)),t}It(e){let t=this.He.get(e);return t||(t=new wt(xe),this.He=this.He.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||re("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new n_),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Wu(){return new tt(fe.comparator)}function r_(){return new tt(fe.comparator)}const VC={asc:"ASCENDING",desc:"DESCENDING"},bC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},OC={and:"AND",or:"OR"};class LC{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function mf(n,e){return n.useProto3Json||Fc(e)?e:{value:e}}function vc(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Uw(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function MC(n,e){return vc(n,e.toTimestamp())}function cr(n){return je(!!n,49232),we.fromTimestamp((function(t){const i=xi(t);return new Ye(i.seconds,i.nanos)})(n))}function ep(n,e){return gf(n,e).canonicalString()}function gf(n,e){const t=(function(o){return new He(["projects",o.projectId,"databases",o.database])})(n).child("documents");return e===void 0?t:t.child(e)}function jw(n){const e=He.fromString(n);return je(Ww(e),10190,{key:e.toString()}),e}function yf(n,e){return ep(n.databaseId,e.path)}function jd(n,e){const t=jw(e);if(t.get(1)!==n.databaseId.projectId)throw new ne(q.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new ne(q.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new fe(Bw(t))}function zw(n,e){return ep(n.databaseId,e)}function FC(n){const e=jw(n);return e.length===4?He.emptyPath():Bw(e)}function _f(n){return new He(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Bw(n){return je(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function i_(n,e,t){return{name:yf(n,e),fields:t.value.mapValue.fields}}function UC(n,e){let t;if("targetChange"in e){e.targetChange;const i=(function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:ye(39313,{state:y})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=(function(y,w){return y.useProto3Json?(je(w===void 0||typeof w=="string",58123),Dt.fromBase64String(w||"")):(je(w===void 0||w instanceof Buffer||w instanceof Uint8Array,16193),Dt.fromUint8Array(w||new Uint8Array))})(n,e.targetChange.resumeToken),c=e.targetChange.cause,f=c&&(function(y){const w=y.code===void 0?q.UNKNOWN:Lw(y.code);return new ne(w,y.message||"")})(c);t=new Fw(i,o,l,f||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const o=jd(n,i.document.name),l=cr(i.document.updateTime),c=i.document.createTime?cr(i.document.createTime):we.min(),f=new hn({mapValue:{fields:i.document.fields}}),g=zt.newFoundDocument(o,l,c,f),y=i.targetIds||[],w=i.removedTargetIds||[];t=new tc(y,w,g.key,g)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const o=jd(n,i.document),l=i.readTime?cr(i.readTime):we.min(),c=zt.newNoDocument(o,l),f=i.removedTargetIds||[];t=new tc([],f,c.key,c)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const o=jd(n,i.document),l=i.removedTargetIds||[];t=new tc([],l,o,null)}else{if(!("filter"in e))return ye(11601,{Vt:e});{e.filter;const i=e.filter;i.targetId;const{count:o=0,unchangedNames:l}=i,c=new PC(o,l),f=i.targetId;t=new Mw(f,c)}}return t}function jC(n,e){let t;if(e instanceof qc)t={update:i_(n,e.key,e.value)};else if(e instanceof Jf)t={delete:yf(n,e.key)};else if(e instanceof Ps)t={update:i_(n,e.key,e.data),updateMask:QC(e.fieldMask)};else{if(!(e instanceof AC))return ye(16599,{dt:e.type});t={verify:yf(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((i=>(function(l,c){const f=c.transform;if(f instanceof yc)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(f instanceof hl)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:f.elements}};if(f instanceof dl)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:f.elements}};if(f instanceof _c)return{fieldPath:c.field.canonicalString(),increment:f.Ae};throw ye(20930,{transform:c.transform})})(0,i)))),e.precondition.isNone||(t.currentDocument=(function(o,l){return l.updateTime!==void 0?{updateTime:MC(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:ye(27497)})(n,e.precondition)),t}function zC(n,e){return n&&n.length>0?(je(e!==void 0,14353),n.map((t=>(function(o,l){let c=o.updateTime?cr(o.updateTime):cr(l);return c.isEqual(we.min())&&(c=cr(l)),new TC(c,o.transformResults||[])})(t,e)))):[]}function BC(n,e){return{documents:[zw(n,e.path)]}}function $C(n,e){const t={structuredQuery:{}},i=e.path;let o;e.collectionGroup!==null?(o=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=zw(n,o);const l=(function(y){if(y.length!==0)return qw(jn.create(y,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const c=(function(y){if(y.length!==0)return y.map((w=>(function(I){return{field:To(I.field),direction:HC(I.dir)}})(w)))})(e.orderBy);c&&(t.structuredQuery.orderBy=c);const f=mf(n,e.limit);return f!==null&&(t.structuredQuery.limit=f),e.startAt&&(t.structuredQuery.startAt=(function(y){return{before:y.inclusive,values:y.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(y){return{before:!y.inclusive,values:y.position}})(e.endAt)),{ft:t,parent:o}}function qC(n){let e=FC(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let o=null;if(i>0){je(i===1,65062);const w=t.from[0];w.allDescendants?o=w.collectionId:e=e.child(w.collectionId)}let l=[];t.where&&(l=(function(T){const I=$w(T);return I instanceof jn&&vw(I)?I.getFilters():[I]})(t.where));let c=[];t.orderBy&&(c=(function(T){return T.map((I=>(function($){return new cl(Io($.field),(function(U){switch(U){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})($.direction))})(I)))})(t.orderBy));let f=null;t.limit&&(f=(function(T){let I;return I=typeof T=="object"?T.value:T,Fc(I)?null:I})(t.limit));let g=null;t.startAt&&(g=(function(T){const I=!!T.before,F=T.values||[];return new gc(F,I)})(t.startAt));let y=null;return t.endAt&&(y=(function(T){const I=!T.before,F=T.values||[];return new gc(F,I)})(t.endAt)),aC(e,o,c,l,f,"F",g,y)}function WC(n,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ye(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function $w(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=Io(t.unaryFilter.field);return mt.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=Io(t.unaryFilter.field);return mt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=Io(t.unaryFilter.field);return mt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=Io(t.unaryFilter.field);return mt.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ye(61313);default:return ye(60726)}})(n):n.fieldFilter!==void 0?(function(t){return mt.create(Io(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ye(58110);default:return ye(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return jn.create(t.compositeFilter.filters.map((i=>$w(i))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return ye(1026)}})(t.compositeFilter.op))})(n):ye(30097,{filter:n})}function HC(n){return VC[n]}function GC(n){return bC[n]}function KC(n){return OC[n]}function To(n){return{fieldPath:n.canonicalString()}}function Io(n){return Nt.fromServerFormat(n.fieldPath)}function qw(n){return n instanceof mt?(function(t){if(t.op==="=="){if(Wy(t.value))return{unaryFilter:{field:To(t.field),op:"IS_NAN"}};if(qy(t.value))return{unaryFilter:{field:To(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Wy(t.value))return{unaryFilter:{field:To(t.field),op:"IS_NOT_NAN"}};if(qy(t.value))return{unaryFilter:{field:To(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:To(t.field),op:GC(t.op),value:t.value}}})(n):n instanceof jn?(function(t){const i=t.getFilters().map((o=>qw(o)));return i.length===1?i[0]:{compositeFilter:{op:KC(t.op),filters:i}}})(n):ye(54877,{filter:n})}function QC(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Ww(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function Hw(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e,t,i,o,l=we.min(),c=we.min(),f=Dt.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=f,this.expectedCount=g}withSequenceNumber(e){return new Ei(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ei(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ei(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ei(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YC{constructor(e){this.yt=e}}function JC(n){const e=qC({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?pf(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XC{constructor(){this.Sn=new ZC}addToCollectionParentIndex(e,t){return this.Sn.add(t),W.resolve()}getCollectionParents(e,t){return W.resolve(this.Sn.getEntries(t))}addFieldIndex(e,t){return W.resolve()}deleteFieldIndex(e,t){return W.resolve()}deleteAllFieldIndexes(e){return W.resolve()}createTargetIndexes(e,t){return W.resolve()}getDocumentsMatchingTarget(e,t){return W.resolve(null)}getIndexType(e,t){return W.resolve(0)}getFieldIndexes(e,t){return W.resolve([])}getNextCollectionGroupToUpdate(e){return W.resolve(null)}getMinOffset(e,t){return W.resolve(ki.min())}getMinOffsetFromCollectionGroup(e,t){return W.resolve(ki.min())}updateCollectionGroup(e,t,i){return W.resolve()}updateIndexEntries(e,t){return W.resolve()}}class ZC{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t]||new wt(He.comparator),l=!o.has(i);return this.index[t]=o.add(i),l}has(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t];return o&&o.has(i)}getEntries(e){return(this.index[e]||new wt(He.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Gw=41943040;class en{static withCacheSize(e){return new en(e,en.DEFAULT_COLLECTION_PERCENTILE,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */en.DEFAULT_COLLECTION_PERCENTILE=10,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,en.DEFAULT=new en(Gw,en.DEFAULT_COLLECTION_PERCENTILE,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),en.DISABLED=new en(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Lo(0)}static ar(){return new Lo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o_="LruGarbageCollector",eP=1048576;function a_([n,e],[t,i]){const o=xe(n,t);return o===0?xe(e,i):o}class tP{constructor(e){this.Pr=e,this.buffer=new wt(a_),this.Tr=0}Ir(){return++this.Tr}Er(e){const t=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();a_(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class nP{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){re(o_,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){qo(t)?re(o_,"Ignoring IndexedDB error during garbage collection: ",t):await $o(t)}await this.Ar(3e5)}))}}class rP{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((i=>Math.floor(t/100*i)))}nthSequenceNumber(e,t){if(t===0)return W.resolve(Mc.ce);const i=new tP(t);return this.Vr.forEachTarget(e,(o=>i.Er(o.sequenceNumber))).next((()=>this.Vr.mr(e,(o=>i.Er(o))))).next((()=>i.maxValue))}removeTargets(e,t,i){return this.Vr.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(re("LruGarbageCollector","Garbage collection skipped; disabled"),W.resolve(s_)):this.getCacheSize(e).next((i=>i<this.params.cacheSizeCollectionThreshold?(re("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),s_):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let i,o,l,c,f,g,y;const w=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((T=>(T>this.params.maximumSequenceNumbersToCollect?(re("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),o=this.params.maximumSequenceNumbersToCollect):o=T,c=Date.now(),this.nthSequenceNumber(e,o)))).next((T=>(i=T,f=Date.now(),this.removeTargets(e,i,t)))).next((T=>(l=T,g=Date.now(),this.removeOrphanedDocuments(e,i)))).next((T=>(y=Date.now(),wo()<=ke.DEBUG&&re("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-w}ms
	Determined least recently used ${o} in `+(f-c)+`ms
	Removed ${l} targets in `+(g-f)+`ms
	Removed ${T} documents in `+(y-g)+`ms
Total Duration: ${y-w}ms`),W.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:T}))))}}function iP(n,e){return new rP(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sP{constructor(){this.changes=new Cs((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,zt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?W.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oP{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aP{constructor(e,t,i,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=o}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(i=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(i!==null&&nl(i.mutation,o,Mn.empty(),Ye.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.getLocalViewOfDocuments(e,i,Ne()).next((()=>i))))}getLocalViewOfDocuments(e,t,i=Ne()){const o=ps();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,i).next((l=>{let c=Wa();return l.forEach(((f,g)=>{c=c.insert(f,g.overlayedDocument)})),c}))))}getOverlayedDocuments(e,t){const i=ps();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,Ne())))}populateOverlays(e,t,i){const o=[];return i.forEach((l=>{t.has(l)||o.push(l)})),this.documentOverlayCache.getOverlays(e,o).next((l=>{l.forEach(((c,f)=>{t.set(c,f)}))}))}computeViews(e,t,i,o){let l=Ur();const c=tl(),f=(function(){return tl()})();return t.forEach(((g,y)=>{const w=i.get(y.key);o.has(y.key)&&(w===void 0||w.mutation instanceof Ps)?l=l.insert(y.key,y):w!==void 0?(c.set(y.key,w.mutation.getFieldMask()),nl(w.mutation,y,w.mutation.getFieldMask(),Ye.now())):c.set(y.key,Mn.empty())})),this.recalculateAndSaveOverlays(e,l).next((g=>(g.forEach(((y,w)=>c.set(y,w))),t.forEach(((y,w)=>f.set(y,new oP(w,c.get(y)??null)))),f)))}recalculateAndSaveOverlays(e,t){const i=tl();let o=new tt(((c,f)=>c-f)),l=Ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((c=>{for(const f of c)f.keys().forEach((g=>{const y=t.get(g);if(y===null)return;let w=i.get(g)||Mn.empty();w=f.applyToLocalView(y,w),i.set(g,w);const T=(o.get(f.batchId)||Ne()).add(g);o=o.insert(f.batchId,T)}))})).next((()=>{const c=[],f=o.getReverseIterator();for(;f.hasNext();){const g=f.getNext(),y=g.key,w=g.value,T=Pw();w.forEach((I=>{if(!l.has(I)){const F=bw(t.get(I),i.get(I));F!==null&&T.set(I,F),l=l.add(I)}})),c.push(this.documentOverlayCache.saveOverlays(e,y,T))}return W.waitFor(c)})).next((()=>i))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.recalculateAndSaveOverlays(e,i)))}getDocumentsMatchingQuery(e,t,i,o){return lC(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Iw(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,o):this.getDocumentsMatchingCollectionQuery(e,t,i,o)}getNextDocuments(e,t,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,o).next((l=>{const c=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,o-l.size):W.resolve(ps());let f=ol,g=l;return c.next((y=>W.forEach(y,((w,T)=>(f<T.largestBatchId&&(f=T.largestBatchId),l.get(w)?W.resolve():this.remoteDocumentCache.getEntry(e,w).next((I=>{g=g.insert(w,I)}))))).next((()=>this.populateOverlays(e,y,l))).next((()=>this.computeViews(e,g,y,Ne()))).next((w=>({batchId:f,changes:Cw(w)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new fe(t)).next((i=>{let o=Wa();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,i,o){const l=t.collectionGroup;let c=Wa();return this.indexManager.getCollectionParents(e,l).next((f=>W.forEach(f,(g=>{const y=(function(T,I){return new Wo(I,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)})(t,g.child(l));return this.getDocumentsMatchingCollectionQuery(e,y,i,o).next((w=>{w.forEach(((T,I)=>{c=c.insert(T,I)}))}))})).next((()=>c))))}getDocumentsMatchingCollectionQuery(e,t,i,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next((c=>(l=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,l,o)))).next((c=>{l.forEach(((g,y)=>{const w=y.getKey();c.get(w)===null&&(c=c.insert(w,zt.newInvalidDocument(w)))}));let f=Wa();return c.forEach(((g,y)=>{const w=l.get(g);w!==void 0&&nl(w.mutation,y,Mn.empty(),Ye.now()),zc(t,y)&&(f=f.insert(g,y))})),f}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lP{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return W.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:cr(o.createTime)}})(t)),W.resolve()}getNamedQuery(e,t){return W.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(o){return{name:o.name,query:JC(o.bundledQuery),readTime:cr(o.readTime)}})(t)),W.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uP{constructor(){this.overlays=new tt(fe.comparator),this.Lr=new Map}getOverlay(e,t){return W.resolve(this.overlays.get(t))}getOverlays(e,t){const i=ps();return W.forEach(t,(o=>this.getOverlay(e,o).next((l=>{l!==null&&i.set(o,l)})))).next((()=>i))}saveOverlays(e,t,i){return i.forEach(((o,l)=>{this.bt(e,t,l)})),W.resolve()}removeOverlaysForBatchId(e,t,i){const o=this.Lr.get(i);return o!==void 0&&(o.forEach((l=>this.overlays=this.overlays.remove(l))),this.Lr.delete(i)),W.resolve()}getOverlaysForCollection(e,t,i){const o=ps(),l=t.length+1,c=new fe(t.child("")),f=this.overlays.getIteratorFrom(c);for(;f.hasNext();){const g=f.getNext().value,y=g.getKey();if(!t.isPrefixOf(y.path))break;y.path.length===l&&g.largestBatchId>i&&o.set(g.getKey(),g)}return W.resolve(o)}getOverlaysForCollectionGroup(e,t,i,o){let l=new tt(((y,w)=>y-w));const c=this.overlays.getIterator();for(;c.hasNext();){const y=c.getNext().value;if(y.getKey().getCollectionGroup()===t&&y.largestBatchId>i){let w=l.get(y.largestBatchId);w===null&&(w=ps(),l=l.insert(y.largestBatchId,w)),w.set(y.getKey(),y)}}const f=ps(),g=l.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach(((y,w)=>f.set(y,w))),!(f.size()>=o)););return W.resolve(f)}bt(e,t,i){const o=this.overlays.get(i.key);if(o!==null){const c=this.Lr.get(o.largestBatchId).delete(i.key);this.Lr.set(o.largestBatchId,c)}this.overlays=this.overlays.insert(i.key,new CC(t,i));let l=this.Lr.get(t);l===void 0&&(l=Ne(),this.Lr.set(t,l)),this.Lr.set(t,l.add(i.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cP{constructor(){this.sessionToken=Dt.EMPTY_BYTE_STRING}getSessionToken(e){return W.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,W.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{constructor(){this.kr=new wt(At.Kr),this.qr=new wt(At.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const i=new At(e,t);this.kr=this.kr.add(i),this.qr=this.qr.add(i)}$r(e,t){e.forEach((i=>this.addReference(i,t)))}removeReference(e,t){this.Wr(new At(e,t))}Qr(e,t){e.forEach((i=>this.removeReference(i,t)))}Gr(e){const t=new fe(new He([])),i=new At(t,e),o=new At(t,e+1),l=[];return this.qr.forEachInRange([i,o],(c=>{this.Wr(c),l.push(c.key)})),l}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const t=new fe(new He([])),i=new At(t,e),o=new At(t,e+1);let l=Ne();return this.qr.forEachInRange([i,o],(c=>{l=l.add(c.key)})),l}containsKey(e){const t=new At(e,0),i=this.kr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class At{constructor(e,t){this.key=e,this.Hr=t}static Kr(e,t){return fe.comparator(e.key,t.key)||xe(e.Hr,t.Hr)}static Ur(e,t){return xe(e.Hr,t.Hr)||fe.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hP{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Jr=new wt(At.Kr)}checkEmpty(e){return W.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,o){const l=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new RC(l,t,i,o);this.mutationQueue.push(c);for(const f of o)this.Jr=this.Jr.add(new At(f.key,l)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast());return W.resolve(c)}lookupMutationBatch(e,t){return W.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,o=this.Xr(i),l=o<0?0:o;return W.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return W.resolve(this.mutationQueue.length===0?qf:this.Yn-1)}getAllMutationBatches(e){return W.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new At(t,0),o=new At(t,Number.POSITIVE_INFINITY),l=[];return this.Jr.forEachInRange([i,o],(c=>{const f=this.Zr(c.Hr);l.push(f)})),W.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new wt(xe);return t.forEach((o=>{const l=new At(o,0),c=new At(o,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([l,c],(f=>{i=i.add(f.Hr)}))})),W.resolve(this.Yr(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,o=i.length+1;let l=i;fe.isDocumentKey(l)||(l=l.child(""));const c=new At(new fe(l),0);let f=new wt(xe);return this.Jr.forEachWhile((g=>{const y=g.key.path;return!!i.isPrefixOf(y)&&(y.length===o&&(f=f.add(g.Hr)),!0)}),c),W.resolve(this.Yr(f))}Yr(e){const t=[];return e.forEach((i=>{const o=this.Zr(i);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){je(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Jr;return W.forEach(t.mutations,(o=>{const l=new At(o.key,t.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Jr=i}))}nr(e){}containsKey(e,t){const i=new At(t,0),o=this.Jr.firstAfterOrEqual(i);return W.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,W.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dP{constructor(e){this.ti=e,this.docs=(function(){return new tt(fe.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,o=this.docs.get(i),l=o?o.size:0,c=this.ti(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:c}),this.size+=c-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return W.resolve(i?i.document.mutableCopy():zt.newInvalidDocument(t))}getEntries(e,t){let i=Ur();return t.forEach((o=>{const l=this.docs.get(o);i=i.insert(o,l?l.document.mutableCopy():zt.newInvalidDocument(o))})),W.resolve(i)}getDocumentsMatchingQuery(e,t,i,o){let l=Ur();const c=t.path,f=new fe(c.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(f);for(;g.hasNext();){const{key:y,value:{document:w}}=g.getNext();if(!c.isPrefixOf(y.path))break;y.path.length>c.length+1||FR(MR(w),i)<=0||(o.has(w.key)||zc(t,w))&&(l=l.insert(w.key,w.mutableCopy()))}return W.resolve(l)}getAllFromCollectionGroup(e,t,i,o){ye(9500)}ni(e,t){return W.forEach(this.docs,(i=>t(i)))}newChangeBuffer(e){return new fP(this)}getSize(e){return W.resolve(this.size)}}class fP extends sP{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((i,o)=>{o.isValidDocument()?t.push(this.Mr.addEntry(e,o)):this.Mr.removeEntry(i)})),W.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pP{constructor(e){this.persistence=e,this.ri=new Cs((t=>Gf(t)),Kf),this.lastRemoteSnapshotVersion=we.min(),this.highestTargetId=0,this.ii=0,this.si=new tp,this.targetCount=0,this.oi=Lo._r()}forEachTarget(e,t){return this.ri.forEach(((i,o)=>t(o))),W.resolve()}getLastRemoteSnapshotVersion(e){return W.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return W.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),W.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.ii&&(this.ii=t),W.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new Lo(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,W.resolve()}updateTargetData(e,t){return this.lr(t),W.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,W.resolve()}removeTargets(e,t,i){let o=0;const l=[];return this.ri.forEach(((c,f)=>{f.sequenceNumber<=t&&i.get(f.targetId)===null&&(this.ri.delete(c),l.push(this.removeMatchingKeysForTargetId(e,f.targetId)),o++)})),W.waitFor(l).next((()=>o))}getTargetCount(e){return W.resolve(this.targetCount)}getTargetData(e,t){const i=this.ri.get(t)||null;return W.resolve(i)}addMatchingKeys(e,t,i){return this.si.$r(t,i),W.resolve()}removeMatchingKeys(e,t,i){this.si.Qr(t,i);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach((c=>{l.push(o.markPotentiallyOrphaned(e,c))})),W.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),W.resolve()}getMatchingKeysForTargetId(e,t){const i=this.si.jr(t);return W.resolve(i)}containsKey(e,t){return W.resolve(this.si.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kw{constructor(e,t){this._i={},this.overlays={},this.ai=new Mc(0),this.ui=!1,this.ui=!0,this.ci=new cP,this.referenceDelegate=e(this),this.li=new pP(this),this.indexManager=new XC,this.remoteDocumentCache=(function(o){return new dP(o)})((i=>this.referenceDelegate.hi(i))),this.serializer=new YC(t),this.Pi=new lP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new uP,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this._i[e.toKey()];return i||(i=new hP(t,this.referenceDelegate),this._i[e.toKey()]=i),i}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,i){re("MemoryPersistence","Starting transaction:",e);const o=new mP(this.ai.next());return this.referenceDelegate.Ti(),i(o).next((l=>this.referenceDelegate.Ii(o).next((()=>l)))).toPromise().then((l=>(o.raiseOnCommittedEvent(),l)))}Ei(e,t){return W.or(Object.values(this._i).map((i=>()=>i.containsKey(e,t))))}}class mP extends jR{constructor(e){super(),this.currentSequenceNumber=e}}class np{constructor(e){this.persistence=e,this.Ri=new tp,this.Ai=null}static Vi(e){return new np(e)}get di(){if(this.Ai)return this.Ai;throw ye(60996)}addReference(e,t,i){return this.Ri.addReference(i,t),this.di.delete(i.toString()),W.resolve()}removeReference(e,t,i){return this.Ri.removeReference(i,t),this.di.add(i.toString()),W.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),W.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((o=>this.di.add(o.toString())));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((l=>this.di.add(l.toString())))})).next((()=>i.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ii(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return W.forEach(this.di,(i=>{const o=fe.fromPath(i);return this.mi(e,o).next((l=>{l||t.removeEntry(o,we.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((i=>{i?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return W.or([()=>W.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class wc{constructor(e,t){this.persistence=e,this.fi=new Cs((i=>$R(i.path)),((i,o)=>i.isEqual(o))),this.garbageCollector=iP(this,t)}static Vi(e,t){return new wc(e,t)}Ti(){}Ii(e){return W.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((i=>t.next((o=>i+o))))}pr(e){let t=0;return this.mr(e,(i=>{t++})).next((()=>t))}mr(e,t){return W.forEach(this.fi,((i,o)=>this.wr(e,i,o).next((l=>l?W.resolve():t(o)))))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.ni(e,(c=>this.wr(e,c,t).next((f=>{f||(i++,l.removeEntry(c,we.min()))})))).next((()=>l.apply(e))).next((()=>i))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),W.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.fi.set(i,e.currentSequenceNumber),W.resolve()}removeReference(e,t,i){return this.fi.set(i,e.currentSequenceNumber),W.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),W.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Xu(e.data.value)),t}wr(e,t,i){return W.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.fi.get(t);return W.resolve(o!==void 0&&o>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(e,t,i,o){this.targetId=e,this.fromCache=t,this.Ts=i,this.Is=o}static Es(e,t){let i=Ne(),o=Ne();for(const l of t.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new rp(e,t.fromCache,i,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yP{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return VI()?8:zR(Bt())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,i,o){const l={result:null};return this.gs(e,t).next((c=>{l.result=c})).next((()=>{if(!l.result)return this.ps(e,t,o,i).next((c=>{l.result=c}))})).next((()=>{if(l.result)return;const c=new gP;return this.ys(e,t,c).next((f=>{if(l.result=f,this.As)return this.ws(e,t,c,f.size)}))})).next((()=>l.result))}ws(e,t,i,o){return i.documentReadCount<this.Vs?(wo()<=ke.DEBUG&&re("QueryEngine","SDK will not create cache indexes for query:",Eo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),W.resolve()):(wo()<=ke.DEBUG&&re("QueryEngine","Query:",Eo(t),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.ds*o?(wo()<=ke.DEBUG&&re("QueryEngine","The SDK decides to create cache indexes for query:",Eo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,lr(t))):W.resolve())}gs(e,t){if(Qy(t))return W.resolve(null);let i=lr(t);return this.indexManager.getIndexType(e,i).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=pf(t,null,"F"),i=lr(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next((l=>{const c=Ne(...l);return this.fs.getDocuments(e,c).next((f=>this.indexManager.getMinOffset(e,i).next((g=>{const y=this.bs(t,f);return this.Ss(t,y,c,g.readTime)?this.gs(e,pf(t,null,"F")):this.Ds(e,y,t,g)}))))})))))}ps(e,t,i,o){return Qy(t)||o.isEqual(we.min())?W.resolve(null):this.fs.getDocuments(e,i).next((l=>{const c=this.bs(t,l);return this.Ss(t,c,i,o)?W.resolve(null):(wo()<=ke.DEBUG&&re("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Eo(t)),this.Ds(e,c,t,LR(o,ol)).next((f=>f)))}))}bs(e,t){let i=new wt(Aw(e));return t.forEach(((o,l)=>{zc(e,l)&&(i=i.add(l))})),i}Ss(e,t,i,o){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}ys(e,t,i){return wo()<=ke.DEBUG&&re("QueryEngine","Using full collection scan to execute query:",Eo(t)),this.fs.getDocumentsMatchingQuery(e,t,ki.min(),i)}Ds(e,t,i,o){return this.fs.getDocumentsMatchingQuery(e,i,o).next((l=>(t.forEach((c=>{l=l.insert(c.key,c)})),l)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ip="LocalStore",_P=3e8;class vP{constructor(e,t,i,o){this.persistence=e,this.Cs=t,this.serializer=o,this.vs=new tt(xe),this.Fs=new Cs((l=>Gf(l)),Kf),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(i)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new aP(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function wP(n,e,t,i){return new vP(n,e,t,i)}async function Qw(n,e){const t=Te(n);return await t.persistence.runTransaction("Handle user change","readonly",(i=>{let o;return t.mutationQueue.getAllMutationBatches(i).next((l=>(o=l,t.Os(e),t.mutationQueue.getAllMutationBatches(i)))).next((l=>{const c=[],f=[];let g=Ne();for(const y of o){c.push(y.batchId);for(const w of y.mutations)g=g.add(w.key)}for(const y of l){f.push(y.batchId);for(const w of y.mutations)g=g.add(w.key)}return t.localDocuments.getDocuments(i,g).next((y=>({Ns:y,removedBatchIds:c,addedBatchIds:f})))}))}))}function EP(n,e){const t=Te(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(i=>{const o=e.batch.keys(),l=t.xs.newChangeBuffer({trackRemovals:!0});return(function(f,g,y,w){const T=y.batch,I=T.keys();let F=W.resolve();return I.forEach(($=>{F=F.next((()=>w.getEntry(g,$))).next((H=>{const U=y.docVersions.get($);je(U!==null,48541),H.version.compareTo(U)<0&&(T.applyToRemoteDocument(H,y),H.isValidDocument()&&(H.setReadTime(y.commitVersion),w.addEntry(H)))}))})),F.next((()=>f.mutationQueue.removeMutationBatch(g,T)))})(t,i,e,l).next((()=>l.apply(i))).next((()=>t.mutationQueue.performConsistencyCheck(i))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(i,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,(function(f){let g=Ne();for(let y=0;y<f.mutationResults.length;++y)f.mutationResults[y].transformResults.length>0&&(g=g.add(f.batch.mutations[y].key));return g})(e)))).next((()=>t.localDocuments.getDocuments(i,o)))}))}function Yw(n){const e=Te(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function TP(n,e){const t=Te(n),i=e.snapshotVersion;let o=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const c=t.xs.newChangeBuffer({trackRemovals:!0});o=t.vs;const f=[];e.targetChanges.forEach(((w,T)=>{const I=o.get(T);if(!I)return;f.push(t.li.removeMatchingKeys(l,w.removedDocuments,T).next((()=>t.li.addMatchingKeys(l,w.addedDocuments,T))));let F=I.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?F=F.withResumeToken(Dt.EMPTY_BYTE_STRING,we.min()).withLastLimboFreeSnapshotVersion(we.min()):w.resumeToken.approximateByteSize()>0&&(F=F.withResumeToken(w.resumeToken,i)),o=o.insert(T,F),(function(H,U,de){return H.resumeToken.approximateByteSize()===0||U.snapshotVersion.toMicroseconds()-H.snapshotVersion.toMicroseconds()>=_P?!0:de.addedDocuments.size+de.modifiedDocuments.size+de.removedDocuments.size>0})(I,F,w)&&f.push(t.li.updateTargetData(l,F))}));let g=Ur(),y=Ne();if(e.documentUpdates.forEach((w=>{e.resolvedLimboDocuments.has(w)&&f.push(t.persistence.referenceDelegate.updateLimboDocument(l,w))})),f.push(IP(l,c,e.documentUpdates).next((w=>{g=w.Bs,y=w.Ls}))),!i.isEqual(we.min())){const w=t.li.getLastRemoteSnapshotVersion(l).next((T=>t.li.setTargetsMetadata(l,l.currentSequenceNumber,i)));f.push(w)}return W.waitFor(f).next((()=>c.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,g,y))).next((()=>g))})).then((l=>(t.vs=o,l)))}function IP(n,e,t){let i=Ne(),o=Ne();return t.forEach((l=>i=i.add(l))),e.getEntries(n,i).next((l=>{let c=Ur();return t.forEach(((f,g)=>{const y=l.get(f);g.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(f)),g.isNoDocument()&&g.version.isEqual(we.min())?(e.removeEntry(f,g.readTime),c=c.insert(f,g)):!y.isValidDocument()||g.version.compareTo(y.version)>0||g.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(g),c=c.insert(f,g)):re(ip,"Ignoring outdated watch update for ",f,". Current version:",y.version," Watch version:",g.version)})),{Bs:c,Ls:o}}))}function SP(n,e){const t=Te(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(i=>(e===void 0&&(e=qf),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e))))}function AP(n,e){const t=Te(n);return t.persistence.runTransaction("Allocate target","readwrite",(i=>{let o;return t.li.getTargetData(i,e).next((l=>l?(o=l,W.resolve(o)):t.li.allocateTargetId(i).next((c=>(o=new Ei(e,c,"TargetPurposeListen",i.currentSequenceNumber),t.li.addTargetData(i,o).next((()=>o)))))))})).then((i=>{const o=t.vs.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.vs=t.vs.insert(i.targetId,i),t.Fs.set(e,i.targetId)),i}))}async function vf(n,e,t){const i=Te(n),o=i.vs.get(e),l=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",l,(c=>i.persistence.referenceDelegate.removeTarget(c,o)))}catch(c){if(!qo(c))throw c;re(ip,`Failed to update sequence numbers for target ${e}: ${c}`)}i.vs=i.vs.remove(e),i.Fs.delete(o.target)}function l_(n,e,t){const i=Te(n);let o=we.min(),l=Ne();return i.persistence.runTransaction("Execute query","readwrite",(c=>(function(g,y,w){const T=Te(g),I=T.Fs.get(w);return I!==void 0?W.resolve(T.vs.get(I)):T.li.getTargetData(y,w)})(i,c,lr(e)).next((f=>{if(f)return o=f.lastLimboFreeSnapshotVersion,i.li.getMatchingKeysForTargetId(c,f.targetId).next((g=>{l=g}))})).next((()=>i.Cs.getDocumentsMatchingQuery(c,e,t?o:we.min(),t?l:Ne()))).next((f=>(RP(i,hC(e),f),{documents:f,ks:l})))))}function RP(n,e,t){let i=n.Ms.get(e)||we.min();t.forEach(((o,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)})),n.Ms.set(e,i)}class u_{constructor(){this.activeTargetIds=yC()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class CP{constructor(){this.vo=new u_,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,i){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new u_,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PP{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c_="ConnectivityMonitor";class h_{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){re(c_,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){re(c_,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hu=null;function wf(){return Hu===null?Hu=(function(){return 268435456+Math.round(2147483648*Math.random())})():Hu++,"0x"+Hu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zd="RestConnection",kP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class xP{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Uo=`projects/${i}/databases/${o}`,this.$o=this.databaseId.database===pc?`project_id=${i}`:`project_id=${i}&database_id=${o}`}Wo(e,t,i,o,l){const c=wf(),f=this.Qo(e,t.toUriEncodedString());re(zd,`Sending RPC '${e}' ${c}:`,f,i);const g={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(g,o,l);const{host:y}=new URL(f),w=Uo(y);return this.zo(e,f,g,i,w).then((T=>(re(zd,`Received RPC '${e}' ${c}: `,T),T)),(T=>{throw Es(zd,`RPC '${e}' ${c} failed with error: `,T,"url: ",f,"request:",i),T}))}jo(e,t,i,o,l,c){return this.Wo(e,t,i,o,l)}Go(e,t,i){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Bo})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,l)=>e[l]=o)),i&&i.headers.forEach(((o,l)=>e[l]=o))}Qo(e,t){const i=kP[e];let o=`${this.qo}/v1/${t}:${i}`;return this.databaseInfo.apiKey&&(o=`${o}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),o}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NP{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ut="WebChannelConnection",Ba=(n,e,t)=>{n.listen(e,(i=>{try{t(i)}catch(o){setTimeout((()=>{throw o}),0)}}))};class Po extends xP{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Po.c_){const e=tw();Ba(e,ew.STAT_EVENT,(t=>{t.stat===af.PROXY?re(Ut,"STAT_EVENT: detected buffering proxy"):t.stat===af.NOPROXY&&re(Ut,"STAT_EVENT: detected no buffering proxy")})),Po.c_=!0}}zo(e,t,i,o,l){const c=wf();return new Promise(((f,g)=>{const y=new Xv;y.setWithCredentials(!0),y.listenOnce(Zv.COMPLETE,(()=>{try{switch(y.getLastErrorCode()){case Ju.NO_ERROR:const T=y.getResponseJson();re(Ut,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(T)),f(T);break;case Ju.TIMEOUT:re(Ut,`RPC '${e}' ${c} timed out`),g(new ne(q.DEADLINE_EXCEEDED,"Request time out"));break;case Ju.HTTP_ERROR:const I=y.getStatus();if(re(Ut,`RPC '${e}' ${c} failed with status:`,I,"response text:",y.getResponseText()),I>0){let F=y.getResponseJson();Array.isArray(F)&&(F=F[0]);const $=F==null?void 0:F.error;if($&&$.status&&$.message){const H=(function(de){const ae=de.toLowerCase().replace(/_/g,"-");return Object.values(q).indexOf(ae)>=0?ae:q.UNKNOWN})($.status);g(new ne(H,$.message))}else g(new ne(q.UNKNOWN,"Server responded with status "+y.getStatus()))}else g(new ne(q.UNAVAILABLE,"Connection failed."));break;default:ye(9055,{l_:e,streamId:c,h_:y.getLastErrorCode(),P_:y.getLastError()})}}finally{re(Ut,`RPC '${e}' ${c} completed.`)}}));const w=JSON.stringify(o);re(Ut,`RPC '${e}' ${c} sending request:`,o),y.send(t,"POST",w,i,15)}))}T_(e,t,i){const o=wf(),l=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=this.createWebChannelTransport(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(f.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(f.useFetchStreams=!0),this.Go(f.initMessageHeaders,t,i),f.encodeInitMessageHeaders=!0;const y=l.join("");re(Ut,`Creating RPC '${e}' stream ${o}: ${y}`,f);const w=c.createWebChannel(y,f);this.I_(w);let T=!1,I=!1;const F=new NP({Ho:$=>{I?re(Ut,`Not sending because RPC '${e}' stream ${o} is closed:`,$):(T||(re(Ut,`Opening RPC '${e}' stream ${o} transport.`),w.open(),T=!0),re(Ut,`RPC '${e}' stream ${o} sending:`,$),w.send($))},Jo:()=>w.close()});return Ba(w,qa.EventType.OPEN,(()=>{I||(re(Ut,`RPC '${e}' stream ${o} transport opened.`),F.i_())})),Ba(w,qa.EventType.CLOSE,(()=>{I||(I=!0,re(Ut,`RPC '${e}' stream ${o} transport closed`),F.o_(),this.E_(w))})),Ba(w,qa.EventType.ERROR,($=>{I||(I=!0,Es(Ut,`RPC '${e}' stream ${o} transport errored. Name:`,$.name,"Message:",$.message),F.o_(new ne(q.UNAVAILABLE,"The operation could not be completed")))})),Ba(w,qa.EventType.MESSAGE,($=>{var H;if(!I){const U=$.data[0];je(!!U,16349);const de=U,ae=(de==null?void 0:de.error)||((H=de[0])==null?void 0:H.error);if(ae){re(Ut,`RPC '${e}' stream ${o} received error:`,ae);const he=ae.status;let _e=(function(k){const A=ft[k];if(A!==void 0)return Lw(A)})(he),be=ae.message;he==="NOT_FOUND"&&be.includes("database")&&be.includes("does not exist")&&be.includes(this.databaseId.database)&&Es(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),_e===void 0&&(_e=q.INTERNAL,be="Unknown error status: "+he+" with message "+ae.message),I=!0,F.o_(new ne(_e,be)),w.close()}else re(Ut,`RPC '${e}' stream ${o} received:`,U),F.__(U)}})),Po.u_(),setTimeout((()=>{F.s_()}),0),F}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,i){super.Go(e,t,i),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return nw()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DP(n){return new Po(n)}function Bd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hc(n){return new LC(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Po.c_=!1;class Jw{constructor(e,t,i=1e3,o=1.5,l=6e4){this.Ci=e,this.timerId=t,this.R_=i,this.A_=o,this.V_=l,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),i=Math.max(0,Date.now()-this.f_),o=Math.max(0,t-i);o>0&&re("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d_="PersistentStream";class Xw{constructor(e,t,i,o,l,c,f,g){this.Ci=e,this.b_=i,this.S_=o,this.connection=l,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=f,this.listener=g,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Jw(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,(()=>this.k_())))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===q.RESOURCE_EXHAUSTED?(Fr(t.toString()),Fr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===q.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([i,o])=>{this.D_===t&&this.G_(i,o)}),(i=>{e((()=>{const o=new ne(q.UNKNOWN,"Fetching auth token failed: "+i.message);return this.z_(o)}))}))}G_(e,t){const i=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{i((()=>this.listener.Zo()))})),this.stream.Yo((()=>{i((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((o=>{i((()=>this.z_(o)))})),this.stream.onMessage((o=>{i((()=>++this.F_==1?this.H_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return re(d_,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():(re(d_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class VP extends Xw{constructor(e,t,i,o,l,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,o,c),this.serializer=l}j_(e,t){return this.connection.T_("Listen",e,t)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=UC(this.serializer,e),i=(function(l){if(!("targetChange"in l))return we.min();const c=l.targetChange;return c.targetIds&&c.targetIds.length?we.min():c.readTime?cr(c.readTime):we.min()})(e);return this.listener.J_(t,i)}Z_(e){const t={};t.database=_f(this.serializer),t.addTarget=(function(l,c){let f;const g=c.target;if(f=df(g)?{documents:BC(l,g)}:{query:$C(l,g).ft},f.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){f.resumeToken=Uw(l,c.resumeToken);const y=mf(l,c.expectedCount);y!==null&&(f.expectedCount=y)}else if(c.snapshotVersion.compareTo(we.min())>0){f.readTime=vc(l,c.snapshotVersion.toTimestamp());const y=mf(l,c.expectedCount);y!==null&&(f.expectedCount=y)}return f})(this.serializer,e);const i=WC(this.serializer,e);i&&(t.labels=i),this.K_(t)}X_(e){const t={};t.database=_f(this.serializer),t.removeTarget=e,this.K_(t)}}class bP extends Xw{constructor(e,t,i,o,l,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,o,c),this.serializer=l}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}H_(e){return je(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,je(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){je(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=zC(e.writeResults,e.commitTime),i=cr(e.commitTime);return this.listener.na(i,t)}ra(){const e={};e.database=_f(this.serializer),this.K_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((i=>jC(this.serializer,i)))};this.K_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OP{}class LP extends OP{constructor(e,t,i,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new ne(q.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,i,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,c])=>this.connection.Wo(e,gf(t,i),o,l,c))).catch((l=>{throw l.name==="FirebaseError"?(l.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new ne(q.UNKNOWN,l.toString())}))}jo(e,t,i,o,l){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([c,f])=>this.connection.jo(e,gf(t,i),o,c,f,l))).catch((c=>{throw c.name==="FirebaseError"?(c.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new ne(q.UNKNOWN,c.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function MP(n,e,t,i){return new LP(n,e,t,i)}class FP{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Fr(t),this.aa=!1):re("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ts="RemoteStore";class UP{constructor(e,t,i,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=l,this.Aa.Mo((c=>{i.enqueueAndForget((async()=>{ks(this)&&(re(Ts,"Restarting streams for network reachability change."),await(async function(g){const y=Te(g);y.Ea.add(4),await Tl(y),y.Va.set("Unknown"),y.Ea.delete(4),await Gc(y)})(this))}))})),this.Va=new FP(i,o)}}async function Gc(n){if(ks(n))for(const e of n.Ra)await e(!0)}async function Tl(n){for(const e of n.Ra)await e(!1)}function Zw(n,e){const t=Te(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),lp(t)?ap(t):Ho(t).O_()&&op(t,e))}function sp(n,e){const t=Te(n),i=Ho(t);t.Ia.delete(e),i.O_()&&eE(t,e),t.Ia.size===0&&(i.O_()?i.L_():ks(t)&&t.Va.set("Unknown"))}function op(n,e){if(n.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(we.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Ho(n).Z_(e)}function eE(n,e){n.da.$e(e),Ho(n).X_(e)}function ap(n){n.da=new DC({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),Ho(n).start(),n.Va.ua()}function lp(n){return ks(n)&&!Ho(n).x_()&&n.Ia.size>0}function ks(n){return Te(n).Ea.size===0}function tE(n){n.da=void 0}async function jP(n){n.Va.set("Online")}async function zP(n){n.Ia.forEach(((e,t)=>{op(n,e)}))}async function BP(n,e){tE(n),lp(n)?(n.Va.ha(e),ap(n)):n.Va.set("Unknown")}async function $P(n,e,t){if(n.Va.set("Online"),e instanceof Fw&&e.state===2&&e.cause)try{await(async function(o,l){const c=l.cause;for(const f of l.targetIds)o.Ia.has(f)&&(await o.remoteSyncer.rejectListen(f,c),o.Ia.delete(f),o.da.removeTarget(f))})(n,e)}catch(i){re(Ts,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Ec(n,i)}else if(e instanceof tc?n.da.Xe(e):e instanceof Mw?n.da.st(e):n.da.tt(e),!t.isEqual(we.min()))try{const i=await Yw(n.localStore);t.compareTo(i)>=0&&await(function(l,c){const f=l.da.Tt(c);return f.targetChanges.forEach(((g,y)=>{if(g.resumeToken.approximateByteSize()>0){const w=l.Ia.get(y);w&&l.Ia.set(y,w.withResumeToken(g.resumeToken,c))}})),f.targetMismatches.forEach(((g,y)=>{const w=l.Ia.get(g);if(!w)return;l.Ia.set(g,w.withResumeToken(Dt.EMPTY_BYTE_STRING,w.snapshotVersion)),eE(l,g);const T=new Ei(w.target,g,y,w.sequenceNumber);op(l,T)})),l.remoteSyncer.applyRemoteEvent(f)})(n,t)}catch(i){re(Ts,"Failed to raise snapshot:",i),await Ec(n,i)}}async function Ec(n,e,t){if(!qo(e))throw e;n.Ea.add(1),await Tl(n),n.Va.set("Offline"),t||(t=()=>Yw(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{re(Ts,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await Gc(n)}))}function nE(n,e){return e().catch((t=>Ec(n,t,e)))}async function Kc(n){const e=Te(n),t=Vi(e);let i=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:qf;for(;qP(e);)try{const o=await SP(e.localStore,i);if(o===null){e.Ta.length===0&&t.L_();break}i=o.batchId,WP(e,o)}catch(o){await Ec(e,o)}rE(e)&&iE(e)}function qP(n){return ks(n)&&n.Ta.length<10}function WP(n,e){n.Ta.push(e);const t=Vi(n);t.O_()&&t.Y_&&t.ea(e.mutations)}function rE(n){return ks(n)&&!Vi(n).x_()&&n.Ta.length>0}function iE(n){Vi(n).start()}async function HP(n){Vi(n).ra()}async function GP(n){const e=Vi(n);for(const t of n.Ta)e.ea(t.mutations)}async function KP(n,e,t){const i=n.Ta.shift(),o=Xf.from(i,e,t);await nE(n,(()=>n.remoteSyncer.applySuccessfulWrite(o))),await Kc(n)}async function QP(n,e){e&&Vi(n).Y_&&await(async function(i,o){if((function(c){return kC(c)&&c!==q.ABORTED})(o.code)){const l=i.Ta.shift();Vi(i).B_(),await nE(i,(()=>i.remoteSyncer.rejectFailedWrite(l.batchId,o))),await Kc(i)}})(n,e),rE(n)&&iE(n)}async function f_(n,e){const t=Te(n);t.asyncQueue.verifyOperationInProgress(),re(Ts,"RemoteStore received new credentials");const i=ks(t);t.Ea.add(3),await Tl(t),i&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Gc(t)}async function YP(n,e){const t=Te(n);e?(t.Ea.delete(2),await Gc(t)):e||(t.Ea.add(2),await Tl(t),t.Va.set("Unknown"))}function Ho(n){return n.ma||(n.ma=(function(t,i,o){const l=Te(t);return l.sa(),new VP(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(n.datastore,n.asyncQueue,{Zo:jP.bind(null,n),Yo:zP.bind(null,n),t_:BP.bind(null,n),J_:$P.bind(null,n)}),n.Ra.push((async e=>{e?(n.ma.B_(),lp(n)?ap(n):n.Va.set("Unknown")):(await n.ma.stop(),tE(n))}))),n.ma}function Vi(n){return n.fa||(n.fa=(function(t,i,o){const l=Te(t);return l.sa(),new bP(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:HP.bind(null,n),t_:QP.bind(null,n),ta:GP.bind(null,n),na:KP.bind(null,n)}),n.Ra.push((async e=>{e?(n.fa.B_(),await Kc(n)):(await n.fa.stop(),n.Ta.length>0&&(re(Ts,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(e,t,i,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=o,this.removalCallback=l,this.deferred=new gs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((c=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,o,l){const c=Date.now()+i,f=new up(e,t,c,o,l);return f.start(i),f}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ne(q.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function cp(n,e){if(Fr("AsyncQueue",`${e}: ${n}`),qo(n))return new ne(q.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{static emptySet(e){return new ko(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||fe.comparator(t.key,i.key):(t,i)=>fe.comparator(t.key,i.key),this.keyedMap=Wa(),this.sortedSet=new tt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,i)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof ko)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new ko;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_{constructor(){this.ga=new tt(fe.comparator)}track(e){const t=e.doc.key,i=this.ga.get(t);i?e.type!==0&&i.type===3?this.ga=this.ga.insert(t,e):e.type===3&&i.type!==1?this.ga=this.ga.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.ga=this.ga.remove(t):e.type===1&&i.type===2?this.ga=this.ga.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):ye(63341,{Vt:e,pa:i}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,i)=>{e.push(i)})),e}}class Mo{constructor(e,t,i,o,l,c,f,g,y){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=l,this.fromCache=c,this.syncStateChanged=f,this.excludesMetadataChanges=g,this.hasCachedResults=y}static fromInitialDocuments(e,t,i,o,l){const c=[];return t.forEach((f=>{c.push({type:0,doc:f})})),new Mo(e,t,ko.emptySet(t),c,i,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&jc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==i[o].type||!t[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JP{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some((e=>e.Da()))}}class XP{constructor(){this.queries=m_(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,i){const o=Te(t),l=o.queries;o.queries=m_(),l.forEach(((c,f)=>{for(const g of f.ba)g.onError(i)}))})(this,new ne(q.ABORTED,"Firestore shutting down"))}}function m_(){return new Cs((n=>Sw(n)),jc)}async function ZP(n,e){const t=Te(n);let i=3;const o=e.query;let l=t.queries.get(o);l?!l.Sa()&&e.Da()&&(i=2):(l=new JP,i=e.Da()?0:1);try{switch(i){case 0:l.wa=await t.onListen(o,!0);break;case 1:l.wa=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(c){const f=cp(c,`Initialization of query '${Eo(e.query)}' failed`);return void e.onError(f)}t.queries.set(o,l),l.ba.push(e),e.va(t.onlineState),l.wa&&e.Fa(l.wa)&&hp(t)}async function ek(n,e){const t=Te(n),i=e.query;let o=3;const l=t.queries.get(i);if(l){const c=l.ba.indexOf(e);c>=0&&(l.ba.splice(c,1),l.ba.length===0?o=e.Da()?0:1:!l.Sa()&&e.Da()&&(o=2))}switch(o){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function tk(n,e){const t=Te(n);let i=!1;for(const o of e){const l=o.query,c=t.queries.get(l);if(c){for(const f of c.ba)f.Fa(o)&&(i=!0);c.wa=o}}i&&hp(t)}function nk(n,e,t){const i=Te(n),o=i.queries.get(e);if(o)for(const l of o.ba)l.onError(t);i.queries.delete(e)}function hp(n){n.Ca.forEach((e=>{e.next()}))}var Ef,g_;(g_=Ef||(Ef={})).Ma="default",g_.Cache="cache";class rk{constructor(e,t,i){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=i||{}}Fa(e){if(!this.options.includeMetadataChanges){const i=[];for(const o of e.docChanges)o.type!==3&&i.push(o);e=new Mo(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const i=t!=="Offline";return(!this.options.Ka||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Mo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Ef.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(e){this.key=e}}class oE{constructor(e){this.key=e}}class ik{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=Ne(),this.mutatedKeys=Ne(),this.eu=Aw(e),this.tu=new ko(this.eu)}get nu(){return this.Za}ru(e,t){const i=t?t.iu:new p_,o=t?t.tu:this.tu;let l=t?t.mutatedKeys:this.mutatedKeys,c=o,f=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((w,T)=>{const I=o.get(w),F=zc(this.query,T)?T:null,$=!!I&&this.mutatedKeys.has(I.key),H=!!F&&(F.hasLocalMutations||this.mutatedKeys.has(F.key)&&F.hasCommittedMutations);let U=!1;I&&F?I.data.isEqual(F.data)?$!==H&&(i.track({type:3,doc:F}),U=!0):this.su(I,F)||(i.track({type:2,doc:F}),U=!0,(g&&this.eu(F,g)>0||y&&this.eu(F,y)<0)&&(f=!0)):!I&&F?(i.track({type:0,doc:F}),U=!0):I&&!F&&(i.track({type:1,doc:I}),U=!0,(g||y)&&(f=!0)),U&&(F?(c=c.add(F),l=H?l.add(w):l.delete(w)):(c=c.delete(w),l=l.delete(w)))})),this.query.limit!==null)for(;c.size>this.query.limit;){const w=this.query.limitType==="F"?c.last():c.first();c=c.delete(w.key),l=l.delete(w.key),i.track({type:1,doc:w})}return{tu:c,iu:i,Ss:f,mutatedKeys:l}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,o){const l=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const c=e.iu.ya();c.sort(((w,T)=>(function(F,$){const H=U=>{switch(U){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ye(20277,{Vt:U})}};return H(F)-H($)})(w.type,T.type)||this.eu(w.doc,T.doc))),this.ou(i),o=o??!1;const f=t&&!o?this._u():[],g=this.Ya.size===0&&this.current&&!o?1:0,y=g!==this.Xa;return this.Xa=g,c.length!==0||y?{snapshot:new Mo(this.query,e.tu,l,c,e.mutatedKeys,g===0,y,!1,!!i&&i.resumeToken.approximateByteSize()>0),au:f}:{au:f}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new p_,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Za=this.Za.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Za=this.Za.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=Ne(),this.tu.forEach((i=>{this.uu(i.key)&&(this.Ya=this.Ya.add(i.key))}));const t=[];return e.forEach((i=>{this.Ya.has(i)||t.push(new oE(i))})),this.Ya.forEach((i=>{e.has(i)||t.push(new sE(i))})),t}cu(e){this.Za=e.ks,this.Ya=Ne();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Mo.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const dp="SyncEngine";class sk{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class ok{constructor(e){this.key=e,this.hu=!1}}class ak{constructor(e,t,i,o,l,c){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=c,this.Pu={},this.Tu=new Cs((f=>Sw(f)),jc),this.Iu=new Map,this.Eu=new Set,this.Ru=new tt(fe.comparator),this.Au=new Map,this.Vu=new tp,this.du={},this.mu=new Map,this.fu=Lo.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function lk(n,e,t=!0){const i=dE(n);let o;const l=i.Tu.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.lu()):o=await aE(i,e,t,!0),o}async function uk(n,e){const t=dE(n);await aE(t,e,!0,!1)}async function aE(n,e,t,i){const o=await AP(n.localStore,lr(e)),l=o.targetId,c=n.sharedClientState.addLocalQueryTarget(l,t);let f;return i&&(f=await ck(n,e,l,c==="current",o.resumeToken)),n.isPrimaryClient&&t&&Zw(n.remoteStore,o),f}async function ck(n,e,t,i,o){n.pu=(T,I,F)=>(async function(H,U,de,ae){let he=U.view.ru(de);he.Ss&&(he=await l_(H.localStore,U.query,!1).then((({documents:k})=>U.view.ru(k,he))));const _e=ae&&ae.targetChanges.get(U.targetId),be=ae&&ae.targetMismatches.get(U.targetId)!=null,Re=U.view.applyChanges(he,H.isPrimaryClient,_e,be);return __(H,U.targetId,Re.au),Re.snapshot})(n,T,I,F);const l=await l_(n.localStore,e,!0),c=new ik(e,l.ks),f=c.ru(l.documents),g=El.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",o),y=c.applyChanges(f,n.isPrimaryClient,g);__(n,t,y.au);const w=new sk(e,t,c);return n.Tu.set(e,w),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),y.snapshot}async function hk(n,e,t){const i=Te(n),o=i.Tu.get(e),l=i.Iu.get(o.targetId);if(l.length>1)return i.Iu.set(o.targetId,l.filter((c=>!jc(c,e)))),void i.Tu.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await vf(i.localStore,o.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(o.targetId),t&&sp(i.remoteStore,o.targetId),Tf(i,o.targetId)})).catch($o)):(Tf(i,o.targetId),await vf(i.localStore,o.targetId,!0))}async function dk(n,e){const t=Te(n),i=t.Tu.get(e),o=t.Iu.get(i.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),sp(t.remoteStore,i.targetId))}async function fk(n,e,t){const i=wk(n);try{const o=await(function(c,f){const g=Te(c),y=Ye.now(),w=f.reduce(((F,$)=>F.add($.key)),Ne());let T,I;return g.persistence.runTransaction("Locally write mutations","readwrite",(F=>{let $=Ur(),H=Ne();return g.xs.getEntries(F,w).next((U=>{$=U,$.forEach(((de,ae)=>{ae.isValidDocument()||(H=H.add(de))}))})).next((()=>g.localDocuments.getOverlayedDocuments(F,$))).next((U=>{T=U;const de=[];for(const ae of f){const he=SC(ae,T.get(ae.key).overlayedDocument);he!=null&&de.push(new Ps(ae.key,he,gw(he.value.mapValue),ur.exists(!0)))}return g.mutationQueue.addMutationBatch(F,y,de,f)})).next((U=>{I=U;const de=U.applyToLocalDocumentSet(T,H);return g.documentOverlayCache.saveOverlays(F,U.batchId,de)}))})).then((()=>({batchId:I.batchId,changes:Cw(T)})))})(i.localStore,e);i.sharedClientState.addPendingMutation(o.batchId),(function(c,f,g){let y=c.du[c.currentUser.toKey()];y||(y=new tt(xe)),y=y.insert(f,g),c.du[c.currentUser.toKey()]=y})(i,o.batchId,t),await Il(i,o.changes),await Kc(i.remoteStore)}catch(o){const l=cp(o,"Failed to persist write");t.reject(l)}}async function lE(n,e){const t=Te(n);try{const i=await TP(t.localStore,e);e.targetChanges.forEach(((o,l)=>{const c=t.Au.get(l);c&&(je(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?c.hu=!0:o.modifiedDocuments.size>0?je(c.hu,14607):o.removedDocuments.size>0&&(je(c.hu,42227),c.hu=!1))})),await Il(t,i,e)}catch(i){await $o(i)}}function y_(n,e,t){const i=Te(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const o=[];i.Tu.forEach(((l,c)=>{const f=c.view.va(e);f.snapshot&&o.push(f.snapshot)})),(function(c,f){const g=Te(c);g.onlineState=f;let y=!1;g.queries.forEach(((w,T)=>{for(const I of T.ba)I.va(f)&&(y=!0)})),y&&hp(g)})(i.eventManager,e),o.length&&i.Pu.J_(o),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function pk(n,e,t){const i=Te(n);i.sharedClientState.updateQueryState(e,"rejected",t);const o=i.Au.get(e),l=o&&o.key;if(l){let c=new tt(fe.comparator);c=c.insert(l,zt.newNoDocument(l,we.min()));const f=Ne().add(l),g=new Wc(we.min(),new Map,new tt(xe),c,f);await lE(i,g),i.Ru=i.Ru.remove(l),i.Au.delete(e),fp(i)}else await vf(i.localStore,e,!1).then((()=>Tf(i,e,t))).catch($o)}async function mk(n,e){const t=Te(n),i=e.batch.batchId;try{const o=await EP(t.localStore,e);cE(t,i,null),uE(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await Il(t,o)}catch(o){await $o(o)}}async function gk(n,e,t){const i=Te(n);try{const o=await(function(c,f){const g=Te(c);return g.persistence.runTransaction("Reject batch","readwrite-primary",(y=>{let w;return g.mutationQueue.lookupMutationBatch(y,f).next((T=>(je(T!==null,37113),w=T.keys(),g.mutationQueue.removeMutationBatch(y,T)))).next((()=>g.mutationQueue.performConsistencyCheck(y))).next((()=>g.documentOverlayCache.removeOverlaysForBatchId(y,w,f))).next((()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,w))).next((()=>g.localDocuments.getDocuments(y,w)))}))})(i.localStore,e);cE(i,e,t),uE(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await Il(i,o)}catch(o){await $o(o)}}function uE(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function cE(n,e,t){const i=Te(n);let o=i.du[i.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),i.du[i.currentUser.toKey()]=o}}function Tf(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Iu.get(e))n.Tu.delete(i),t&&n.Pu.yu(i,t);n.Iu.delete(e),n.isPrimaryClient&&n.Vu.Gr(e).forEach((i=>{n.Vu.containsKey(i)||hE(n,i)}))}function hE(n,e){n.Eu.delete(e.path.canonicalString());const t=n.Ru.get(e);t!==null&&(sp(n.remoteStore,t),n.Ru=n.Ru.remove(e),n.Au.delete(t),fp(n))}function __(n,e,t){for(const i of t)i instanceof sE?(n.Vu.addReference(i.key,e),yk(n,i)):i instanceof oE?(re(dp,"Document no longer in limbo: "+i.key),n.Vu.removeReference(i.key,e),n.Vu.containsKey(i.key)||hE(n,i.key)):ye(19791,{wu:i})}function yk(n,e){const t=e.key,i=t.path.canonicalString();n.Ru.get(t)||n.Eu.has(i)||(re(dp,"New document in limbo: "+t),n.Eu.add(i),fp(n))}function fp(n){for(;n.Eu.size>0&&n.Ru.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new fe(He.fromString(e)),i=n.fu.next();n.Au.set(i,new ok(t)),n.Ru=n.Ru.insert(t,i),Zw(n.remoteStore,new Ei(lr(Qf(t.path)),i,"TargetPurposeLimboResolution",Mc.ce))}}async function Il(n,e,t){const i=Te(n),o=[],l=[],c=[];i.Tu.isEmpty()||(i.Tu.forEach(((f,g)=>{c.push(i.pu(g,e,t).then((y=>{var w;if((y||t)&&i.isPrimaryClient){const T=y?!y.fromCache:(w=t==null?void 0:t.targetChanges.get(g.targetId))==null?void 0:w.current;i.sharedClientState.updateQueryState(g.targetId,T?"current":"not-current")}if(y){o.push(y);const T=rp.Es(g.targetId,y);l.push(T)}})))})),await Promise.all(c),i.Pu.J_(o),await(async function(g,y){const w=Te(g);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",(T=>W.forEach(y,(I=>W.forEach(I.Ts,(F=>w.persistence.referenceDelegate.addReference(T,I.targetId,F))).next((()=>W.forEach(I.Is,(F=>w.persistence.referenceDelegate.removeReference(T,I.targetId,F)))))))))}catch(T){if(!qo(T))throw T;re(ip,"Failed to update sequence numbers: "+T)}for(const T of y){const I=T.targetId;if(!T.fromCache){const F=w.vs.get(I),$=F.snapshotVersion,H=F.withLastLimboFreeSnapshotVersion($);w.vs=w.vs.insert(I,H)}}})(i.localStore,l))}async function _k(n,e){const t=Te(n);if(!t.currentUser.isEqual(e)){re(dp,"User change. New user:",e.toKey());const i=await Qw(t.localStore,e);t.currentUser=e,(function(l,c){l.mu.forEach((f=>{f.forEach((g=>{g.reject(new ne(q.CANCELLED,c))}))})),l.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Il(t,i.Ns)}}function vk(n,e){const t=Te(n),i=t.Au.get(e);if(i&&i.hu)return Ne().add(i.key);{let o=Ne();const l=t.Iu.get(e);if(!l)return o;for(const c of l){const f=t.Tu.get(c);o=o.unionWith(f.view.nu)}return o}}function dE(n){const e=Te(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=lE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=vk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=pk.bind(null,e),e.Pu.J_=tk.bind(null,e.eventManager),e.Pu.yu=nk.bind(null,e.eventManager),e}function wk(n){const e=Te(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=mk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=gk.bind(null,e),e}class Tc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Hc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return wP(this.persistence,new yP,e.initialUser,this.serializer)}Cu(e){return new Kw(np.Vi,this.serializer)}Du(e){return new CP}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Tc.provider={build:()=>new Tc};class Ek extends Tc{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){je(this.persistence.referenceDelegate instanceof wc,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new nP(i,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?en.withCacheSize(this.cacheSizeBytes):en.DEFAULT;return new Kw((i=>wc.Vi(i,t)),this.serializer)}}class If{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>y_(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=_k.bind(null,this.syncEngine),await YP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new XP})()}createDatastore(e){const t=Hc(e.databaseInfo.databaseId),i=DP(e.databaseInfo);return MP(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return(function(i,o,l,c,f){return new UP(i,o,l,c,f)})(this.localStore,this.datastore,e.asyncQueue,(t=>y_(this.syncEngine,t,0)),(function(){return h_.v()?new h_:new PP})())}createSyncEngine(e,t){return(function(o,l,c,f,g,y,w){const T=new ak(o,l,c,f,g,y);return w&&(T.gu=!0),T})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const l=Te(o);re(Ts,"RemoteStore shutting down."),l.Ea.add(5),await Tl(l),l.Aa.shutdown(),l.Va.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}If.provider={build:()=>new If};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tk{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Fr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bi="FirestoreClient";class Ik{constructor(e,t,i,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this._databaseInfo=o,this.user=jt.UNAUTHENTICATED,this.clientId=$f.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,(async c=>{re(bi,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c})),this.appCheckCredentials.start(i,(c=>(re(bi,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new gs;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=cp(t,"Failed to shutdown persistence");e.reject(i)}})),e.promise}}async function $d(n,e){n.asyncQueue.verifyOperationInProgress(),re(bi,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener((async o=>{i.isEqual(o)||(await Qw(e.localStore,o),i=o)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function v_(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Sk(n);re(bi,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((i=>f_(e.remoteStore,i))),n.setAppCheckTokenChangeListener(((i,o)=>f_(e.remoteStore,o))),n._onlineComponents=e}async function Sk(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){re(bi,"Using user provided OfflineComponentProvider");try{await $d(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===q.FAILED_PRECONDITION||o.code===q.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;Es("Error using user provided cache. Falling back to memory cache: "+t),await $d(n,new Tc)}}else re(bi,"Using default OfflineComponentProvider"),await $d(n,new Ek(void 0));return n._offlineComponents}async function fE(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(re(bi,"Using user provided OnlineComponentProvider"),await v_(n,n._uninitializedComponentsProvider._online)):(re(bi,"Using default OnlineComponentProvider"),await v_(n,new If))),n._onlineComponents}function Ak(n){return fE(n).then((e=>e.syncEngine))}async function w_(n){const e=await fE(n),t=e.eventManager;return t.onListen=lk.bind(null,e.syncEngine),t.onUnlisten=hk.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=uk.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=dk.bind(null,e.syncEngine),t}function Rk(n,e,t,i){const o=new Tk(i),l=new rk(e,o,t);return n.asyncQueue.enqueueAndForget((async()=>ZP(await w_(n),l))),()=>{o.Nu(),n.asyncQueue.enqueueAndForget((async()=>ek(await w_(n),l)))}}function Ck(n,e){const t=new gs;return n.asyncQueue.enqueueAndForget((async()=>fk(await Ak(n),e,t))),t.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pE(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pk="ComponentProvider",E_=new Map;function kk(n,e,t,i,o){return new HR(n,e,t,o.host,o.ssl,o.experimentalForceLongPolling,o.experimentalAutoDetectLongPolling,pE(o.experimentalLongPollingOptions),o.useFetchStreams,o.isUsingEmulator,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mE="firestore.googleapis.com",T_=!0;class I_{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ne(q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=mE,this.ssl=T_}else this.host=e.host,this.ssl=e.ssl??T_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Gw;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<eP)throw new ne(q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}OR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=pE(e.experimentalLongPollingOptions??{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ne(q.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ne(q.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ne(q.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(i,o){return i.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Qc{constructor(e,t,i,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new I_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ne(q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ne(q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new I_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new AR;switch(i.type){case"firstParty":return new kR(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new ne(q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const i=E_.get(t);i&&(re(Pk,"Removing Datastore"),E_.delete(t),i.terminate())})(this),Promise.resolve()}}function xk(n,e,t,i={}){var y;n=ys(n,Qc);const o=Uo(e),l=n._getSettings(),c={...l,emulatorOptions:n._getEmulatorOptions()},f=`${e}:${t}`;o&&(sv(`https://${f}`),ov("Firestore",!0)),l.host!==mE&&l.host!==f&&Es("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g={...l,host:f,ssl:o,emulatorOptions:i};if(!Pi(g,c)&&(n._setSettings(g),i.mockUserToken)){let w,T;if(typeof i.mockUserToken=="string")w=i.mockUserToken,T=jt.MOCK_USER;else{w=AI(i.mockUserToken,(y=n._app)==null?void 0:y.options.projectId);const I=i.mockUserToken.sub||i.mockUserToken.user_id;if(!I)throw new ne(q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new jt(I)}n._authCredentials=new RR(new iw(w,T))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new xs(this.firestore,e,this._query)}}class yt{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ci(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new yt(this.firestore,e,this._key)}toJSON(){return{type:yt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,i){if(wl(t,yt._jsonSchema))return new yt(e,i||null,new fe(He.fromString(t.referencePath)))}}yt._jsonSchemaVersion="firestore/documentReference/1.0",yt._jsonSchema={type:gt("string",yt._jsonSchemaVersion),referencePath:gt("string")};class Ci extends xs{constructor(e,t,i){super(e,t,Qf(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new yt(this.firestore,null,new fe(e))}withConverter(e){return new Ci(this.firestore,e,this._path)}}function Nk(n,e,...t){if(n=it(n),sw("collection","path",e),n instanceof Qc){const i=He.fromString(e,...t);return Oy(i),new Ci(n,null,i)}{if(!(n instanceof yt||n instanceof Ci))throw new ne(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(He.fromString(e,...t));return Oy(i),new Ci(n.firestore,null,i)}}function Sf(n,e,...t){if(n=it(n),arguments.length===1&&(e=$f.newId()),sw("doc","path",e),n instanceof Qc){const i=He.fromString(e,...t);return by(i),new yt(n,null,new fe(i))}{if(!(n instanceof yt||n instanceof Ci))throw new ne(q.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(He.fromString(e,...t));return by(i),new yt(n.firestore,n instanceof Ci?n.converter:null,new fe(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S_="AsyncQueue";class A_{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Jw(this,"async_queue_retry"),this._c=()=>{const i=Bd();i&&re(S_,"Visibility state changed to "+i.visibilityState),this.M_.w_()},this.ac=e;const t=Bd();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Bd();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new gs;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!qo(e))throw e;re(S_,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((i=>{throw this.nc=i,this.rc=!1,Fr("INTERNAL UNHANDLED ERROR: ",R_(i)),i})).then((i=>(this.rc=!1,i))))));return this.ac=t,t}enqueueAfterDelay(e,t,i){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const o=up.createAndSchedule(this,e,t,i,(l=>this.hc(l)));return this.tc.push(o),o}uc(){this.nc&&ye(47125,{Pc:R_(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,i)=>t.targetTimeMs-i.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function R_(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class fl extends Qc{constructor(e,t,i,o){super(e,t,i,o),this.type="firestore",this._queue=new A_,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new A_(e),this._firestoreClient=void 0,await e}}}function Dk(n,e){const t=typeof n=="object"?n:Df(),i=typeof n=="string"?n:pc,o=Rs(t,"firestore").getImmediate({identifier:i});if(!o._initialized){const l=II("firestore");l&&xk(o,...l)}return o}function gE(n){if(n._terminated)throw new ne(q.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Vk(n),n._firestoreClient}function Vk(n){var i,o,l,c;const e=n._freezeSettings(),t=kk(n._databaseId,((i=n._app)==null?void 0:i.options.appId)||"",n._persistenceKey,(o=n._app)==null?void 0:o.options.apiKey,e);n._componentsProvider||(l=e.localCache)!=null&&l._offlineComponentProvider&&((c=e.localCache)!=null&&c._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new Ik(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(g){const y=g==null?void 0:g._online.build();return{_offline:g==null?void 0:g._offline.build(y),_online:y}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Tn(Dt.fromBase64String(e))}catch(t){throw new ne(q.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Tn(Dt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Tn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(wl(e,Tn._jsonSchema))return Tn.fromBase64String(e.bytes)}}Tn._jsonSchemaVersion="firestore/bytes/1.0",Tn._jsonSchema={type:gt("string",Tn._jsonSchemaVersion),bytes:gt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ne(q.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Nt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ne(q.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ne(q.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return xe(this._lat,e._lat)||xe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:hr._jsonSchemaVersion}}static fromJSON(e){if(wl(e,hr._jsonSchema))return new hr(e.latitude,e.longitude)}}hr._jsonSchemaVersion="firestore/geoPoint/1.0",hr._jsonSchema={type:gt("string",hr._jsonSchemaVersion),latitude:gt("number"),longitude:gt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(i,o){if(i.length!==o.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==o[l])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Fn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(wl(e,Fn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Fn(e.vectorValues);throw new ne(q.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Fn._jsonSchemaVersion="firestore/vectorValue/1.0",Fn._jsonSchema={type:gt("string",Fn._jsonSchemaVersion),vectorValues:gt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bk=/^__.*__$/;class yE{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return new Ps(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function _E(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ye(40011,{dataSource:n})}}class gp{constructor(e,t,i,o,l,c){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=o,l===void 0&&this.validatePath(),this.fieldTransforms=l||[],this.fieldMask=c||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new gp({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var o;const t=(o=this.path)==null?void 0:o.child(e),i=this.contextWith({path:t,arrayElement:!1});return i.validatePathSegment(e),i}childContextForFieldPath(e){var o;const t=(o=this.path)==null?void 0:o.child(e),i=this.contextWith({path:t,arrayElement:!1});return i.validatePath(),i}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return Ic(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(_E(this.dataSource)&&bk.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class Ok{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||Hc(e)}createContext(e,t,i,o=!1){return new gp({dataSource:e,methodName:t,targetDoc:i,path:Nt.emptyPath(),arrayElement:!1,hasConverter:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function vE(n){const e=n._freezeSettings(),t=Hc(n._databaseId);return new Ok(n._databaseId,!!e.ignoreUndefinedProperties,t)}class Yc extends mp{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.createError(`${this._methodName}() can only appear at the top level of your update data`):e.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Yc}}function Lk(n,e,t,i){const o=n.createContext(1,e,t);EE("Data must be an object, but it was:",o,i);const l=[],c=hn.empty();Fi(i,((g,y)=>{const w=TE(e,g,t);y=it(y);const T=o.childContextForFieldPath(w);if(y instanceof Yc)l.push(w);else{const I=Sl(y,T);I!=null&&(l.push(w),c.set(w,I))}}));const f=new Mn(l);return new yE(c,f,o.fieldTransforms)}function Mk(n,e,t,i,o,l){const c=n.createContext(1,e,t),f=[pl(e,i,t)],g=[o];if(l.length%2!=0)throw new ne(q.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let I=0;I<l.length;I+=2)f.push(pl(e,l[I])),g.push(l[I+1]);const y=[],w=hn.empty();for(let I=f.length-1;I>=0;--I)if(!zk(y,f[I])){const F=f[I];let $=g[I];$=it($);const H=c.childContextForFieldPath(F);if($ instanceof Yc)y.push(F);else{const U=Sl($,H);U!=null&&(y.push(F),w.set(F,U))}}const T=new Mn(y);return new yE(w,T,c.fieldTransforms)}function Fk(n,e,t,i=!1){return Sl(t,n.createContext(i?4:3,e))}function Sl(n,e){if(wE(n=it(n)))return EE("Unsupported field value:",e,n),Uk(n,e);if(n instanceof mp)return(function(i,o){if(!_E(o.dataSource))throw o.createError(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.createError(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(o);l&&o.fieldTransforms.push(l)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return(function(i,o){const l=[];let c=0;for(const f of i){let g=Sl(f,o.childContextForArray(c));g==null&&(g={nullValue:"NULL_VALUE"}),l.push(g),c++}return{arrayValue:{values:l}}})(n,e)}return(function(i,o){if((i=it(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return _C(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=Ye.fromDate(i);return{timestampValue:vc(o.serializer,l)}}if(i instanceof Ye){const l=new Ye(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:vc(o.serializer,l)}}if(i instanceof hr)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Tn)return{bytesValue:Uw(o.serializer,i._byteString)};if(i instanceof yt){const l=o.databaseId,c=i.firestore._databaseId;if(!c.isEqual(l))throw o.createError(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:ep(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof Fn)return(function(c,f){const g=c instanceof Fn?c.toArray():c;return{mapValue:{fields:{[pw]:{stringValue:mw},[mc]:{arrayValue:{values:g.map((w=>{if(typeof w!="number")throw f.createError("VectorValues must only contain numeric values.");return Yf(f.serializer,w)}))}}}}}})(i,o);if(Hw(i))return i._toProto(o.serializer);throw o.createError(`Unsupported field value: ${Lc(i)}`)})(n,e)}function Uk(n,e){const t={};return lw(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Fi(n,((i,o)=>{const l=Sl(o,e.childContextForField(i));l!=null&&(t[i]=l)})),{mapValue:{fields:t}}}function wE(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ye||n instanceof hr||n instanceof Tn||n instanceof yt||n instanceof mp||n instanceof Fn||Hw(n))}function EE(n,e,t){if(!wE(t)||!ow(t)){const i=Lc(t);throw i==="an object"?e.createError(n+" a custom object"):e.createError(n+" "+i)}}function pl(n,e,t){if((e=it(e))instanceof pp)return e._internalPath;if(typeof e=="string")return TE(n,e);throw Ic("Field path arguments must be of type string or ",n,!1,void 0,t)}const jk=new RegExp("[~\\*/\\[\\]]");function TE(n,e,t){if(e.search(jk)>=0)throw Ic(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new pp(...e.split("."))._internalPath}catch{throw Ic(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ic(n,e,t,i,o){const l=i&&!i.isEmpty(),c=o!==void 0;let f=`Function ${e}() called with invalid data`;t&&(f+=" (via `toFirestore()`)"),f+=". ";let g="";return(l||c)&&(g+=" (found",l&&(g+=` in field ${i}`),c&&(g+=` in document ${o}`),g+=")"),new ne(q.INVALID_ARGUMENT,f+n+g)}function zk(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bk{convertValue(e,t="none"){switch(Di(e)){case 0:return null;case 1:return e.booleanValue;case 2:return lt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ni(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ye(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return Fi(e,((o,l)=>{i[o]=this.convertValue(l,t)})),i}convertVectorValue(e){var i,o,l;const t=(l=(o=(i=e.fields)==null?void 0:i[mc].arrayValue)==null?void 0:o.values)==null?void 0:l.map((c=>lt(c.doubleValue)));return new Fn(t)}convertGeoPoint(e){return new hr(lt(e.latitude),lt(e.longitude))}convertArray(e,t){return(e.values||[]).map((i=>this.convertValue(i,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const i=Uc(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(al(e));default:return null}}convertTimestamp(e){const t=xi(e);return new Ye(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=He.fromString(e);je(Ww(i),9688,{name:e});const o=new ll(i.get(1),i.get(3)),l=new fe(i.popFirst(5));return o.isEqual(t)||Fr(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IE extends Bk{constructor(e){super(),this.firestore=e}convertBytes(e){return new Tn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new yt(this.firestore,null,t)}}const C_="@firebase/firestore",P_="4.11.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k_(n){return(function(t,i){if(typeof t!="object"||t===null)return!1;const o=t;for(const l of i)if(l in o&&typeof o[l]=="function")return!0;return!1})(n,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SE{constructor(e,t,i,o,l){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new yt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new $k(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(pl("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class $k extends SE{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qk(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new ne(q.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class yp{}class AE extends yp{}function Wk(n,e,...t){let i=[];e instanceof yp&&i.push(e),i=i.concat(t),(function(l){const c=l.filter((g=>g instanceof vp)).length,f=l.filter((g=>g instanceof _p)).length;if(c>1||c>0&&f>0)throw new ne(q.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(i);for(const o of i)n=o._apply(n);return n}class _p extends AE{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new _p(e,t,i)}_apply(e){const t=this._parse(e);return RE(e._query,t),new xs(e.firestore,e.converter,ff(e._query,t))}_parse(e){const t=vE(e.firestore);return(function(l,c,f,g,y,w,T){let I;if(y.isKeyField()){if(w==="array-contains"||w==="array-contains-any")throw new ne(q.INVALID_ARGUMENT,`Invalid Query. You can't perform '${w}' queries on documentId().`);if(w==="in"||w==="not-in"){N_(T,w);const $=[];for(const H of T)$.push(x_(g,l,H));I={arrayValue:{values:$}}}else I=x_(g,l,T)}else w!=="in"&&w!=="not-in"&&w!=="array-contains-any"||N_(T,w),I=Fk(f,c,T,w==="in"||w==="not-in");return mt.create(y,w,I)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class vp extends yp{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new vp(e,t)}_parse(e){const t=this._queryConstraints.map((i=>i._parse(e))).filter((i=>i.getFilters().length>0));return t.length===1?t[0]:jn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,l){let c=o;const f=l.getFlattenedFilters();for(const g of f)RE(c,g),c=ff(c,g)})(e._query,t),new xs(e.firestore,e.converter,ff(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class wp extends AE{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new wp(e,t)}_apply(e){const t=(function(o,l,c){if(o.startAt!==null)throw new ne(q.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new ne(q.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new cl(l,c)})(e._query,this._field,this._direction);return new xs(e.firestore,e.converter,cC(e._query,t))}}function Hk(n,e="asc"){const t=e,i=pl("orderBy",n);return wp._create(i,t)}function x_(n,e,t){if(typeof(t=it(t))=="string"){if(t==="")throw new ne(q.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Iw(e)&&t.indexOf("/")!==-1)throw new ne(q.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(He.fromString(t));if(!fe.isDocumentKey(i))throw new ne(q.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return $y(n,new fe(i))}if(t instanceof yt)return $y(n,t._key);throw new ne(q.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Lc(t)}.`)}function N_(n,e){if(!Array.isArray(n)||n.length===0)throw new ne(q.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function RE(n,e){const t=(function(o,l){for(const c of o)for(const f of c.getFlattenedFilters())if(l.indexOf(f.op)>=0)return f.op;return null})(n.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new ne(q.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ne(q.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Ga{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class _s extends SE{constructor(e,t,i,o,l,c){super(e,t,i,o,c),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new nc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(pl("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ne(q.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=_s._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}_s._jsonSchemaVersion="firestore/documentSnapshot/1.0",_s._jsonSchema={type:gt("string",_s._jsonSchemaVersion),bundleSource:gt("string","DocumentSnapshot"),bundleName:gt("string"),bundle:gt("string")};class nc extends _s{data(e={}){return super.data(e)}}class xo{constructor(e,t,i,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Ga(o.hasPendingWrites,o.fromCache),this.query=i}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((i=>{e.call(t,new nc(this._firestore,this._userDataWriter,i.key,i,new Ga(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ne(q.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,l){if(o._snapshot.oldDocs.isEmpty()){let c=0;return o._snapshot.docChanges.map((f=>{const g=new nc(o._firestore,o._userDataWriter,f.doc.key,f.doc,new Ga(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);return f.doc,{type:"added",doc:g,oldIndex:-1,newIndex:c++}}))}{let c=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((f=>l||f.type!==3)).map((f=>{const g=new nc(o._firestore,o._userDataWriter,f.doc.key,f.doc,new Ga(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,w=-1;return f.type!==0&&(y=c.indexOf(f.doc.key),c=c.delete(f.doc.key)),f.type!==1&&(c=c.add(f.doc),w=c.indexOf(f.doc.key)),{type:Gk(f.type),doc:g,oldIndex:y,newIndex:w}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ne(q.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=xo._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=$f.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],i=[],o=[];return this.docs.forEach((l=>{l._document!==null&&(t.push(l._document),i.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),o.push(l.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Gk(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ye(61501,{type:n})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xo._jsonSchemaVersion="firestore/querySnapshot/1.0",xo._jsonSchema={type:gt("string",xo._jsonSchemaVersion),bundleSource:gt("string","QuerySnapshot"),bundleName:gt("string"),bundle:gt("string")};function CE(n,e,t,...i){n=ys(n,yt);const o=ys(n.firestore,fl),l=vE(o);let c;return c=typeof(e=it(e))=="string"||e instanceof pp?Mk(l,"updateDoc",n._key,e,t,i):Lk(l,"updateDoc",n._key,e),PE(o,[c.toMutation(n._key,ur.exists(!0))])}function Kk(n){return PE(ys(n.firestore,fl),[new Jf(n._key,ur.none())])}function Qk(n,...e){var y,w,T;n=it(n);let t={includeMetadataChanges:!1,source:"default"},i=0;typeof e[i]!="object"||k_(e[i])||(t=e[i++]);const o={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(k_(e[i])){const I=e[i];e[i]=(y=I.next)==null?void 0:y.bind(I),e[i+1]=(w=I.error)==null?void 0:w.bind(I),e[i+2]=(T=I.complete)==null?void 0:T.bind(I)}let l,c,f;if(n instanceof yt)c=ys(n.firestore,fl),f=Qf(n._key.path),l={next:I=>{e[i]&&e[i](Yk(c,n,I))},error:e[i+1],complete:e[i+2]};else{const I=ys(n,xs);c=ys(I.firestore,fl),f=I._query;const F=new IE(c);l={next:$=>{e[i]&&e[i](new xo(c,F,I,$))},error:e[i+1],complete:e[i+2]},qk(n._query)}const g=gE(c);return Rk(g,f,o,l)}function PE(n,e){const t=gE(n);return Ck(t,e)}function Yk(n,e,t){const i=t.docs.get(e._key),o=new IE(n);return new _s(n,o,e._key,i,new Ga(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){SR(zo),dr(new Un("firestore",((i,{instanceIdentifier:o,options:l})=>{const c=i.getProvider("app").getImmediate(),f=new fl(new CR(i.getProvider("auth-internal")),new xR(c,i.getProvider("app-check-internal")),GR(c,o),c);return l={useFetchStreams:t,...l},f._setSettings(l),f}),"PUBLIC").setMultipleInstances(!0)),Sn(C_,P_,e),Sn(C_,P_,"esm2020")})();const kE="@firebase/installations",Ep="0.6.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xE=1e4,NE=`w:${Ep}`,DE="FIS_v2",Jk="https://firebaseinstallations.googleapis.com/v1",Xk=3600*1e3,Zk="installations",e2="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t2={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Is=new As(Zk,e2,t2);function VE(n){return n instanceof zn&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bE({projectId:n}){return`${Jk}/projects/${n}/installations`}function OE(n){return{token:n.token,requestStatus:2,expiresIn:r2(n.expiresIn),creationTime:Date.now()}}async function LE(n,e){const i=(await e.json()).error;return Is.create("request-failed",{requestName:n,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function ME({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function n2(n,{refreshToken:e}){const t=ME(n);return t.append("Authorization",i2(e)),t}async function FE(n){const e=await n();return e.status>=500&&e.status<600?n():e}function r2(n){return Number(n.replace("s","000"))}function i2(n){return`${DE} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function s2({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const i=bE(n),o=ME(n),l=e.getImmediate({optional:!0});if(l){const y=await l.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const c={fid:t,authVersion:DE,appId:n.appId,sdkVersion:NE},f={method:"POST",headers:o,body:JSON.stringify(c)},g=await FE(()=>fetch(i,f));if(g.ok){const y=await g.json();return{fid:y.fid||t,registrationStatus:2,refreshToken:y.refreshToken,authToken:OE(y.authToken)}}else throw await LE("Create Installation",g)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UE(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o2(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a2=/^[cdef][\w-]{21}$/,Af="";function l2(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=u2(n);return a2.test(t)?t:Af}catch{return Af}}function u2(n){return o2(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jc(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jE=new Map;function zE(n,e){const t=Jc(n);BE(t,e),c2(t,e)}function BE(n,e){const t=jE.get(n);if(t)for(const i of t)i(e)}function c2(n,e){const t=h2();t&&t.postMessage({key:n,fid:e}),d2()}let ms=null;function h2(){return!ms&&"BroadcastChannel"in self&&(ms=new BroadcastChannel("[Firebase] FID Change"),ms.onmessage=n=>{BE(n.data.key,n.data.fid)}),ms}function d2(){jE.size===0&&ms&&(ms.close(),ms=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f2="firebase-installations-database",p2=1,Ss="firebase-installations-store";let qd=null;function Tp(){return qd||(qd=dv(f2,p2,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Ss)}}})),qd}async function Sc(n,e){const t=Jc(n),o=(await Tp()).transaction(Ss,"readwrite"),l=o.objectStore(Ss),c=await l.get(t);return await l.put(e,t),await o.done,(!c||c.fid!==e.fid)&&zE(n,e.fid),e}async function $E(n){const e=Jc(n),i=(await Tp()).transaction(Ss,"readwrite");await i.objectStore(Ss).delete(e),await i.done}async function Xc(n,e){const t=Jc(n),o=(await Tp()).transaction(Ss,"readwrite"),l=o.objectStore(Ss),c=await l.get(t),f=e(c);return f===void 0?await l.delete(t):await l.put(f,t),await o.done,f&&(!c||c.fid!==f.fid)&&zE(n,f.fid),f}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ip(n){let e;const t=await Xc(n.appConfig,i=>{const o=m2(i),l=g2(n,o);return e=l.registrationPromise,l.installationEntry});return t.fid===Af?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function m2(n){const e=n||{fid:l2(),registrationStatus:0};return qE(e)}function g2(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(Is.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=y2(n,t);return{installationEntry:t,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:_2(n)}:{installationEntry:e}}async function y2(n,e){try{const t=await s2(n,e);return Sc(n.appConfig,t)}catch(t){throw VE(t)&&t.customData.serverCode===409?await $E(n.appConfig):await Sc(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function _2(n){let e=await D_(n.appConfig);for(;e.registrationStatus===1;)await UE(100),e=await D_(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:i}=await Ip(n);return i||t}return e}function D_(n){return Xc(n,e=>{if(!e)throw Is.create("installation-not-found");return qE(e)})}function qE(n){return v2(n)?{fid:n.fid,registrationStatus:0}:n}function v2(n){return n.registrationStatus===1&&n.registrationTime+xE<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w2({appConfig:n,heartbeatServiceProvider:e},t){const i=E2(n,t),o=n2(n,t),l=e.getImmediate({optional:!0});if(l){const y=await l.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const c={installation:{sdkVersion:NE,appId:n.appId}},f={method:"POST",headers:o,body:JSON.stringify(c)},g=await FE(()=>fetch(i,f));if(g.ok){const y=await g.json();return OE(y)}else throw await LE("Generate Auth Token",g)}function E2(n,{fid:e}){return`${bE(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sp(n,e=!1){let t;const i=await Xc(n.appConfig,l=>{if(!WE(l))throw Is.create("not-registered");const c=l.authToken;if(!e&&S2(c))return l;if(c.requestStatus===1)return t=T2(n,e),l;{if(!navigator.onLine)throw Is.create("app-offline");const f=R2(l);return t=I2(n,f),f}});return t?await t:i.authToken}async function T2(n,e){let t=await V_(n.appConfig);for(;t.authToken.requestStatus===1;)await UE(100),t=await V_(n.appConfig);const i=t.authToken;return i.requestStatus===0?Sp(n,e):i}function V_(n){return Xc(n,e=>{if(!WE(e))throw Is.create("not-registered");const t=e.authToken;return C2(t)?{...e,authToken:{requestStatus:0}}:e})}async function I2(n,e){try{const t=await w2(n,e),i={...e,authToken:t};return await Sc(n.appConfig,i),t}catch(t){if(VE(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await $E(n.appConfig);else{const i={...e,authToken:{requestStatus:0}};await Sc(n.appConfig,i)}throw t}}function WE(n){return n!==void 0&&n.registrationStatus===2}function S2(n){return n.requestStatus===2&&!A2(n)}function A2(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+Xk}function R2(n){const e={requestStatus:1,requestTime:Date.now()};return{...n,authToken:e}}function C2(n){return n.requestStatus===1&&n.requestTime+xE<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function P2(n){const e=n,{installationEntry:t,registrationPromise:i}=await Ip(e);return i?i.catch(console.error):Sp(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function k2(n,e=!1){const t=n;return await x2(t),(await Sp(t,e)).token}async function x2(n){const{registrationPromise:e}=await Ip(n);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N2(n){if(!n||!n.options)throw Wd("App Configuration");if(!n.name)throw Wd("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw Wd(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Wd(n){return Is.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HE="installations",D2="installations-internal",V2=n=>{const e=n.getProvider("app").getImmediate(),t=N2(e),i=Rs(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},b2=n=>{const e=n.getProvider("app").getImmediate(),t=Rs(e,HE).getImmediate();return{getId:()=>P2(t),getToken:o=>k2(t,o)}};function O2(){dr(new Un(HE,V2,"PUBLIC")),dr(new Un(D2,b2,"PRIVATE"))}O2();Sn(kE,Ep);Sn(kE,Ep,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ac="analytics",L2="firebase_id",M2="origin",F2=60*1e3,U2="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ap="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ht=new Dc("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j2={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},fn=new As("analytics","Analytics",j2);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z2(n){if(!n.startsWith(Ap)){const e=fn.create("invalid-gtag-resource",{gtagURL:n});return Ht.warn(e.message),""}return n}function GE(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function B2(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function $2(n,e){const t=B2("firebase-js-sdk-policy",{createScriptURL:z2}),i=document.createElement("script"),o=`${Ap}?l=${n}&id=${e}`;i.src=t?t==null?void 0:t.createScriptURL(o):o,i.async=!0,document.head.appendChild(i)}function q2(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function W2(n,e,t,i,o,l){const c=i[o];try{if(c)await e[c];else{const g=(await GE(t)).find(y=>y.measurementId===o);g&&await e[g.appId]}}catch(f){Ht.error(f)}n("config",o,l)}async function H2(n,e,t,i,o){try{let l=[];if(o&&o.send_to){let c=o.send_to;Array.isArray(c)||(c=[c]);const f=await GE(t);for(const g of c){const y=f.find(T=>T.measurementId===g),w=y&&e[y.appId];if(w)l.push(w);else{l=[];break}}}l.length===0&&(l=Object.values(e)),await Promise.all(l),n("event",i,o||{})}catch(l){Ht.error(l)}}function G2(n,e,t,i){async function o(l,...c){try{if(l==="event"){const[f,g]=c;await H2(n,e,t,f,g)}else if(l==="config"){const[f,g]=c;await W2(n,e,t,i,f,g)}else if(l==="consent"){const[f,g]=c;n("consent",f,g)}else if(l==="get"){const[f,g,y]=c;n("get",f,g,y)}else if(l==="set"){const[f]=c;n("set",f)}else n(l,...c)}catch(f){Ht.error(f)}}return o}function K2(n,e,t,i,o){let l=function(...c){window[i].push(arguments)};return window[o]&&typeof window[o]=="function"&&(l=window[o]),window[o]=G2(l,n,e,t),{gtagCore:l,wrappedGtag:window[o]}}function Q2(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Ap)&&t.src.includes(n))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y2=30,J2=1e3;class X2{constructor(e={},t=J2){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const KE=new X2;function Z2(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function ex(n){var c;const{appId:e,apiKey:t}=n,i={method:"GET",headers:Z2(t)},o=U2.replace("{app-id}",e),l=await fetch(o,i);if(l.status!==200&&l.status!==304){let f="";try{const g=await l.json();(c=g.error)!=null&&c.message&&(f=g.error.message)}catch{}throw fn.create("config-fetch-failed",{httpStatus:l.status,responseMessage:f})}return l.json()}async function tx(n,e=KE,t){const{appId:i,apiKey:o,measurementId:l}=n.options;if(!i)throw fn.create("no-app-id");if(!o){if(l)return{measurementId:l,appId:i};throw fn.create("no-api-key")}const c=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},f=new ix;return setTimeout(async()=>{f.abort()},F2),QE({appId:i,apiKey:o,measurementId:l},c,f,e)}async function QE(n,{throttleEndTimeMillis:e,backoffCount:t},i,o=KE){var f;const{appId:l,measurementId:c}=n;try{await nx(i,e)}catch(g){if(c)return Ht.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${g==null?void 0:g.message}]`),{appId:l,measurementId:c};throw g}try{const g=await ex(n);return o.deleteThrottleMetadata(l),g}catch(g){const y=g;if(!rx(y)){if(o.deleteThrottleMetadata(l),c)return Ht.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${y==null?void 0:y.message}]`),{appId:l,measurementId:c};throw g}const w=Number((f=y==null?void 0:y.customData)==null?void 0:f.httpStatus)===503?ey(t,o.intervalMillis,Y2):ey(t,o.intervalMillis),T={throttleEndTimeMillis:Date.now()+w,backoffCount:t+1};return o.setThrottleMetadata(l,T),Ht.debug(`Calling attemptFetch again in ${w} millis`),QE(n,T,i,o)}}function nx(n,e){return new Promise((t,i)=>{const o=Math.max(e-Date.now(),0),l=setTimeout(t,o);n.addEventListener(()=>{clearTimeout(l),i(fn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function rx(n){if(!(n instanceof zn)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class ix{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function sx(n,e,t,i,o){if(o&&o.global){n("event",t,i);return}else{const l=await e,c={...i,send_to:l};n("event",t,c)}}async function ox(n,e,t,i){if(i&&i.global){const o={};for(const l of Object.keys(t))o[`user_properties.${l}`]=t[l];return n("set",o),Promise.resolve()}else{const o=await e;n("config",o,{update:!0,user_properties:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ax(){if(lv())try{await uv()}catch(n){return Ht.warn(fn.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return Ht.warn(fn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function lx(n,e,t,i,o,l,c){const f=tx(n);f.then(I=>{t[I.measurementId]=I.appId,n.options.measurementId&&I.measurementId!==n.options.measurementId&&Ht.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${I.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(I=>Ht.error(I)),e.push(f);const g=ax().then(I=>{if(I)return i.getId()}),[y,w]=await Promise.all([f,g]);Q2(l)||$2(l,y.measurementId),o("js",new Date);const T=(c==null?void 0:c.config)??{};return T[M2]="firebase",T.update=!0,w!=null&&(T[L2]=w),o("config",y.measurementId,T),y.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ux{constructor(e){this.app=e}_delete(){return delete No[this.app.options.appId],Promise.resolve()}}let No={},b_=[];const O_={};let Hd="dataLayer",cx="gtag",L_,Rp,M_=!1;function hx(){const n=[];if(av()&&n.push("This is a browser extension environment."),bI()||n.push("Cookies are not available."),n.length>0){const e=n.map((i,o)=>`(${o+1}) ${i}`).join(" "),t=fn.create("invalid-analytics-context",{errorInfo:e});Ht.warn(t.message)}}function dx(n,e,t){hx();const i=n.options.appId;if(!i)throw fn.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)Ht.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw fn.create("no-api-key");if(No[i]!=null)throw fn.create("already-exists",{id:i});if(!M_){q2(Hd);const{wrappedGtag:l,gtagCore:c}=K2(No,b_,O_,Hd,cx);Rp=l,L_=c,M_=!0}return No[i]=lx(n,b_,O_,e,L_,Hd,t),new ux(n)}function fx(n=Df()){n=it(n);const e=Rs(n,Ac);return e.isInitialized()?e.getImmediate():px(n)}function px(n,e={}){const t=Rs(n,Ac);if(t.isInitialized()){const o=t.getImmediate();if(Pi(e,t.getOptions()))return o;throw fn.create("already-initialized")}return t.initialize({options:e})}function mx(n,e,t){n=it(n),ox(Rp,No[n.app.options.appId],e,t).catch(i=>Ht.error(i))}function gx(n,e,t,i){n=it(n),sx(Rp,No[n.app.options.appId],e,t,i).catch(o=>Ht.error(o))}const F_="@firebase/analytics",U_="0.10.19";function yx(){dr(new Un(Ac,(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("installations-internal").getImmediate();return dx(i,o,t)},"PUBLIC")),dr(new Un("analytics-internal",n,"PRIVATE")),Sn(F_,U_),Sn(F_,U_,"esm2020");function n(e){try{const t=e.getProvider(Ac).getImmediate();return{logEvent:(i,o,l)=>gx(t,i,o,l),setUserProperties:(i,o)=>mx(t,i,o)}}catch(t){throw fn.create("interop-component-reg-failed",{reason:t})}}}yx();const _x={apiKey:"AIzaSyAbHTfU_LEZRskt9tAXMRT9XRc8nQlDo9E",authDomain:"tiffin-ff3cc.firebaseapp.com",projectId:"tiffin-ff3cc",storageBucket:"tiffin-ff3cc.firebasestorage.app",messagingSenderId:"708196896667",appId:"1:708196896667:web:8368ff437548aa19481b3e",measurementId:"G-M8RGHCE7ZP"},Cp=fv(_x);fx(Cp);const Rc=TR(Cp),Cc=Dk(Cp),vx=()=>tA(Rc),wx=()=>{const[n,e]=X.useState(null),[t,i]=X.useState(!0);return X.useEffect(()=>eA(Rc,l=>{e(l),i(!1)}),[]),{user:n,loading:t}},Ex=n=>{const[e,t]=X.useState([]),[i,o]=X.useState(!0);return X.useEffect(()=>{if(!n)return;const l=Wk(Nk(Cc,`users/${n}/customers`),Hk("createdAt","desc"));return Qk(l,f=>{t(f.docs.map(g=>({id:g.id,...g.data()}))),o(!1)})},[n]),{customers:e,loading:i}};/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tx=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),YE=(...n)=>n.filter((e,t,i)=>!!e&&i.indexOf(e)===t).join(" ");/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ix={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sx=X.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:i,className:o="",children:l,iconNode:c,...f},g)=>X.createElement("svg",{ref:g,...Ix,width:e,height:e,stroke:n,strokeWidth:i?Number(t)*24/Number(e):t,className:YE("lucide",o),...f},[...c.map(([y,w])=>X.createElement(y,w)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gt=(n,e)=>{const t=X.forwardRef(({className:i,...o},l)=>X.createElement(Sx,{ref:l,iconNode:e,className:YE(`lucide-${Tx(n)}`,i),...o}));return t.displayName=`${n}`,t};/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ax=Gt("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rx=Gt("CalendarDays",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cx=Gt("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Px=Gt("IndianRupee",[["path",{d:"M6 3h12",key:"ggurg9"}],["path",{d:"M6 8h12",key:"6g4wlu"}],["path",{d:"m6 13 8.5 8",key:"u1kupk"}],["path",{d:"M6 13h3",key:"wdp6ag"}],["path",{d:"M9 13c6.667 0 6.667-10 0-10",key:"1nkvk2"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kx=Gt("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xx=Gt("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nx=Gt("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JE=Gt("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dx=Gt("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vx=Gt("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bx=Gt("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XE=Gt("Truck",[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZE=Gt("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ox=Gt("Wallet",[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lx=Gt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),In=({children:n,onClick:e,className:t="",type:i="button",disabled:o=!1})=>{const[l,c]=X.useState([]),f=g=>{if(o)return;const w=g.currentTarget.getBoundingClientRect(),T=Math.max(w.width,w.height),I=g.clientX-w.left-T/2,F=g.clientY-w.top-T/2,$={x:I,y:F,size:T,id:Date.now()};c(H=>[...H,$]),setTimeout(()=>{c(H=>H.filter(U=>U.id!==$.id))},600)};return B.jsxs("button",{type:i,disabled:o,onClick:g=>{f(g),e&&e(g)},className:`relative overflow-hidden outline-none ${t} ${o?"opacity-50 grayscale":""}`,children:[n,l.map(g=>B.jsx("span",{className:"absolute bg-white/30 rounded-full animate-ripple pointer-events-none",style:{top:g.y,left:g.x,width:g.size,height:g.size}},g.id))]})},Mx=({isOpen:n,onClose:e,title:t,children:i})=>n?B.jsx("div",{className:"fixed inset-0 z-[100] flex items-end justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-200",children:B.jsxs("div",{className:"bg-white w-full max-w-md rounded-t-[2.5rem] p-8 shadow-2xl animate-in slide-in-from-bottom-full duration-300 max-h-[90vh] overflow-y-auto",children:[B.jsx("div",{className:"w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-6",onClick:e}),B.jsxs("div",{className:"flex justify-between items-center mb-6",children:[B.jsx("h2",{className:"text-2xl font-black text-gray-900",children:t}),B.jsx(In,{onClick:e,className:"p-2 bg-gray-100 rounded-full text-gray-500",children:B.jsx(Lx,{size:20})})]}),i]})}):null,Fx=()=>{const[n,e]=X.useState(""),[t,i]=X.useState(""),[o,l]=X.useState(!1),[c,f]=X.useState(!1),[g,y]=X.useState(null),w=()=>{window.recaptchaVerifier||(window.recaptchaVerifier=new TA(Rc,"recaptcha-container",{size:"invisible"}))},T=async F=>{F.preventDefault(),f(!0),w();const $=n.startsWith("+")?n:`+91${n.replace(/\D/g,"")}`,H=window.recaptchaVerifier;try{const U=await AA(Rc,$,H);y(U),l(!0)}catch(U){console.error("Error during signInWithPhoneNumber",U),alert("Invalid phone number or reCAPTCHA failed.")}finally{f(!1)}},I=async F=>{F.preventDefault(),f(!0);try{await g.confirm(t)}catch($){console.error("Error during OTP confirmation",$),alert("Invalid OTP. Please try again.")}finally{f(!1)}};return B.jsxs("div",{className:"flex flex-col items-center justify-center min-h-screen p-6 bg-white",children:[B.jsx("div",{id:"recaptcha-container"}),B.jsx("div",{className:"w-24 h-24 bg-orange-600 rounded-[2rem] flex items-center justify-center text-white mb-8 shadow-2xl",children:B.jsx(XE,{size:48})}),B.jsx("h1",{className:"text-4xl font-black text-gray-900 mb-2",children:"TiffinFlow Pro"}),B.jsx("p",{className:"text-gray-500 mb-12 text-center max-w-xs font-medium",children:"Manage your home kitchen business with ease."}),o?B.jsxs("form",{onSubmit:I,className:"w-full max-w-xs space-y-4",children:[B.jsx("input",{type:"number",placeholder:"Enter OTP",className:"w-full bg-gray-100 border-none rounded-2xl py-5 px-6 font-bold text-gray-900 focus:ring-2 focus:ring-orange-600 transition-all tracking-[1em] text-center",value:t,onChange:F=>i(F.target.value),required:!0}),B.jsx(In,{type:"submit",disabled:c,className:"w-full bg-orange-600 text-white font-bold py-5 px-6 rounded-2xl shadow-xl active:scale-95 transition-transform",children:c?"Verifying...":"Verify OTP"}),B.jsx("button",{type:"button",onClick:()=>l(!1),className:"w-full text-gray-400 text-sm font-bold uppercase tracking-widest mt-4",children:"Change Number"})]}):B.jsxs("form",{onSubmit:T,className:"w-full max-w-xs space-y-4",children:[B.jsx("input",{type:"tel",placeholder:"Mobile Number",className:"w-full bg-gray-100 border-none rounded-2xl py-5 px-6 font-bold text-gray-900 focus:ring-2 focus:ring-orange-600 transition-all",value:n,onChange:F=>e(F.target.value),required:!0}),B.jsx(In,{type:"submit",disabled:c,className:"w-full bg-gray-900 text-white font-bold py-5 px-6 rounded-2xl shadow-xl active:scale-95 transition-transform",children:c?"Sending OTP...":"Get Started"})]})]})},Ux=n=>n?new Date(n).toLocaleDateString("en-IN",{day:"numeric",month:"long",year:"numeric"}):"",jx=n=>{const e=n.filter(t=>t.status!=="Paused");return{totalMeals:e.length,vegCount:e.filter(t=>t.type==="Veg").length,nonVegCount:e.filter(t=>t.type==="Non-Veg").length,pausedCount:n.filter(t=>t.status==="Paused").length,pendingPayments:n.reduce((t,i)=>t+(i.balance||0),0)}},zx=({user:n,customers:e})=>{const t=jx(e),i=e.filter(l=>{if(!l.expiryDate)return!1;const g=new Date(l.expiryDate)-new Date,y=Math.ceil(g/(1e3*60*60*24));return y>=0&&y<=3}).length,o=[{label:"Total Meals Today",value:t.totalMeals,color:"bg-orange-600",icon:XE,full:!0},{label:"Veg Count",value:t.vegCount,color:"bg-green-100 text-green-700"},{label:"Non-Veg Count",value:t.nonVegCount,color:"bg-rose-100 text-rose-700"},{label:"Paused Today",value:t.pausedCount,color:"bg-amber-100 text-amber-700"},{label:"Expiring Soon (3 days)",value:i,color:"bg-orange-100 text-orange-700"},{label:"Pending Payments",value:`₹${t.pendingPayments}`,color:"bg-red-100 text-red-700"}];return B.jsxs("div",{className:"p-4 pt-6 pb-24 max-w-full overflow-x-hidden min-h-screen",children:[B.jsxs("div",{className:"flex justify-between items-center mb-8 px-2",children:[B.jsxs("div",{children:[B.jsx("h2",{className:"text-sm font-bold text-orange-600 uppercase tracking-widest mb-1",children:"TiffinFlow Pro"}),B.jsx("h2",{className:"text-3xl font-black tracking-tight text-gray-900",children:Ux(new Date)}),B.jsx("p",{className:"text-gray-500 text-sm font-medium",children:"Namaste!"})]}),B.jsx("div",{className:"flex gap-3",children:B.jsx(In,{className:"p-3 bg-gray-100 rounded-2xl text-gray-700 active:scale-95 transition-transform",children:B.jsx(Ax,{size:24})})})]}),B.jsx("div",{className:"grid grid-cols-2 gap-4",children:o.map((l,c)=>B.jsxs("div",{className:`${l.color} ${l.full?"col-span-2 p-8":"p-6 aspect-square"} rounded-[2.5rem] shadow-sm flex flex-col justify-between relative overflow-hidden active:scale-[0.98] transition-all cursor-pointer border border-black/5`,children:[B.jsxs("div",{className:"relative z-10",children:[B.jsx("p",{className:`text-xs font-bold uppercase tracking-wider mb-2 ${l.full?"opacity-80 text-white":"opacity-60"}`,children:l.label}),B.jsx("p",{className:`font-black ${l.full?"text-5xl text-white":"text-3xl"}`,children:l.value})]}),l.icon&&B.jsx(l.icon,{size:80,className:"opacity-10 absolute -right-4 -bottom-4 text-white"})]},c))})]})},Bx=({customers:n,user:e})=>{const[t,i]=X.useState(""),[o,l]=X.useState("All"),[c,f]=X.useState("All"),[g,y]=X.useState(null),[w,T]=X.useState(!1);[...new Set(n.map(U=>U.area).filter(Boolean))];const I=["All","Active","Paused","Expired"],F=n.filter(U=>U.name.toLowerCase().includes(t.toLowerCase())&&(o==="All"||U.area===o)&&(c==="All"||U.status===c||c==="Active"&&!U.status)),$=async(U,de)=>{try{await CE(Sf(Cc,`users/${e.uid}/customers`,U),{status:de}),T(!1)}catch(ae){console.error(ae)}},H=async U=>{if(window.confirm("Are you sure?"))try{await Kk(Sf(Cc,`users/${e.uid}/customers`,U)),T(!1)}catch(de){console.error(de)}};return B.jsxs("div",{className:"p-4 pt-6 pb-24 min-h-screen",children:[B.jsxs("div",{className:"px-2 mb-6",children:[B.jsx("h2",{className:"text-3xl font-black mb-4 tracking-tight",children:"Customers"}),B.jsxs("div",{className:"space-y-4",children:[B.jsxs("div",{className:"relative",children:[B.jsx(Vx,{className:"absolute left-4 top-1/2 -translate-y-1/2 text-gray-400",size:20}),B.jsx("input",{type:"text",placeholder:"Search...",className:"w-full bg-gray-100 border-none rounded-2xl py-4 pl-12 pr-4 font-bold text-gray-900 focus:ring-2 focus:ring-orange-600 transition-all",value:t,onChange:U=>i(U.target.value)})]}),B.jsx("div",{className:"flex gap-2 overflow-x-auto pb-1 no-scrollbar",children:I.map(U=>B.jsx("button",{onClick:()=>f(U),className:`px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-wider transition-all whitespace-nowrap border ${c===U?"bg-orange-600 text-white border-orange-600 shadow-md":"bg-white text-gray-500 border-gray-100"}`,children:U},U))})]})]}),B.jsx("div",{className:"space-y-4",children:F.map(U=>B.jsxs(In,{onClick:()=>{y(U),T(!0)},className:"w-full bg-white p-5 rounded-[2rem] border border-gray-100 shadow-sm flex items-center justify-between text-left active:scale-[0.98] transition-all",children:[B.jsxs("div",{className:"flex items-center gap-4",children:[B.jsx("div",{className:`w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-black ${U.type==="Veg"?"bg-green-100 text-green-600":"bg-red-100 text-red-600"}`,children:U.name[0]}),B.jsxs("div",{children:[B.jsx("p",{className:"font-bold text-gray-900 text-lg leading-tight mb-1",children:U.name}),B.jsx("span",{className:`text-[10px] font-black uppercase px-2 py-0.5 rounded-full border ${U.type==="Veg"?"bg-green-50 text-green-600 border-green-100":"bg-red-50 text-red-600 border-red-100"}`,children:U.type})]})]}),B.jsxs("div",{className:"text-right",children:[B.jsxs("p",{className:"text-lg font-black text-gray-900",children:["₹",U.balance||0]}),B.jsx("p",{className:"text-[10px] font-bold text-gray-400 uppercase tracking-tighter",children:"Balance"})]})]},U.id))}),B.jsx(Mx,{isOpen:w,onClose:()=>T(!1),title:g==null?void 0:g.name,children:B.jsxs("div",{className:"space-y-6",children:[B.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[B.jsx(In,{onClick:()=>$(g.id,g.status==="Paused"?"Active":"Paused"),className:`py-5 rounded-2xl font-black ${(g==null?void 0:g.status)==="Paused"?"bg-green-600 text-white":"bg-amber-100 text-amber-600"}`,children:(g==null?void 0:g.status)==="Paused"?"Resume":"Pause"}),B.jsxs(In,{onClick:()=>window.open(`tel:${g==null?void 0:g.phone}`),className:"bg-blue-600 text-white py-5 rounded-2xl font-black flex items-center justify-center gap-2",children:[B.jsx(Dx,{size:18})," Call"]})]}),B.jsx(In,{onClick:()=>H(g.id),className:"w-full bg-red-50 text-red-600 py-5 rounded-2xl font-black",children:"Delete Customer"})]})})]})},$x=({customers:n})=>{const[e,t]=X.useState("All"),i=n.filter(c=>c.status!=="Paused"),o=["All",...new Set(i.map(c=>c.area).filter(Boolean))],l=i.filter(c=>e==="All"||c.area===e);return B.jsxs("div",{className:"p-4 pt-6 pb-24 min-h-screen",children:[B.jsxs("div",{className:"mb-8 px-2",children:[B.jsx("p",{className:"text-orange-600 font-bold uppercase tracking-widest text-[10px] mb-2",children:"Production"}),B.jsxs("h2",{className:"text-4xl font-black text-gray-900 leading-tight",children:["Aaj ",i.length," tiffin banana hai"]}),B.jsx("div",{className:"flex gap-2 overflow-x-auto pb-2 no-scrollbar mt-8",children:o.map(c=>B.jsx("button",{onClick:()=>t(c),className:`px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-wider transition-all border ${e===c?"bg-orange-600 text-white border-orange-600":"bg-white text-gray-500 border-gray-100"}`,children:c},c))})]}),B.jsx("div",{className:"space-y-4",children:l.map(c=>B.jsxs("div",{className:"bg-white p-6 rounded-[2rem] flex items-center justify-between border border-gray-100 shadow-sm",children:[B.jsxs("div",{className:"flex-1",children:[B.jsx("p",{className:"font-bold text-gray-900 text-lg leading-none mb-3",children:c.name}),B.jsxs("div",{className:"flex items-center gap-3",children:[B.jsx("span",{className:`text-[10px] font-black uppercase px-2.5 py-1 rounded-full ${c.type==="Veg"?"bg-green-100 text-green-600":"bg-red-100 text-red-600"}`,children:c.type}),c.area&&B.jsxs("span",{className:"text-[10px] font-bold text-gray-400 flex items-center gap-1.5 uppercase tracking-wider",children:[B.jsx(Nx,{size:12})," ",c.area]})]})]}),B.jsx(In,{onClick:()=>window.open(`https://wa.me/91${c.phone}`),className:"ml-4 w-14 h-14 bg-green-500 text-white rounded-2xl flex items-center justify-center shadow-lg",children:B.jsx(JE,{size:24})})]},c.id))})]})},qx=({customers:n,user:e})=>{const t=n.filter(c=>(c.balance||0)>0),i=t.reduce((c,f)=>c+(f.balance||0),0),o=async c=>{try{await CE(Sf(Cc,`users/${e.uid}/customers`,c),{balance:0})}catch(f){console.error(f)}},l=c=>{const f=`Namaste ${c.name}, TiffinFlow ki taraf se reminder. Aapka ₹${c.balance} pending hai. Dhanyavad!`;window.open(`https://wa.me/91${c.phone}?text=${encodeURIComponent(f)}`)};return B.jsxs("div",{className:"p-4 pt-6 pb-24 min-h-screen",children:[B.jsx("h2",{className:"text-3xl font-black mb-8 px-2 text-gray-900 tracking-tight",children:"Payments"}),B.jsxs("div",{className:"bg-red-600 p-10 rounded-[2.5rem] shadow-2xl text-white mb-10 relative overflow-hidden",children:[B.jsxs("div",{className:"relative z-10",children:[B.jsx("p",{className:"text-[10px] font-bold opacity-70 uppercase tracking-widest mb-2",children:"Total Pending"}),B.jsxs("p",{className:"text-6xl font-black",children:["₹",i]})]}),B.jsx(Px,{size:120,className:"absolute -right-8 -bottom-8 opacity-10"})]}),B.jsx("div",{className:"space-y-4",children:t.map(c=>B.jsxs("div",{className:"bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm flex flex-col gap-6",children:[B.jsxs("div",{className:"flex justify-between items-start",children:[B.jsxs("div",{children:[B.jsx("p",{className:"font-bold text-gray-900 text-xl leading-tight mb-1",children:c.name}),B.jsxs("p",{className:"text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-red-100 text-red-600",children:["Pending: ₹",c.balance]})]}),B.jsx(In,{onClick:()=>l(c),className:"p-4 bg-green-500 text-white rounded-2xl shadow-lg",children:B.jsx(JE,{size:22})})]}),B.jsx(In,{onClick:()=>o(c.id),className:"w-full bg-gray-900 text-white py-5 rounded-2xl font-black shadow-xl",children:"Mark as Paid"})]},c.id))})]})},Wx=({user:n})=>B.jsxs("div",{className:"p-4 pt-6 pb-24",children:[B.jsx("h2",{className:"text-3xl font-black tracking-tight text-gray-900 mb-8 px-2",children:"Settings"}),B.jsxs("div",{className:"space-y-4",children:[B.jsxs("div",{className:"bg-gray-50 p-6 rounded-[2rem] flex items-center gap-4",children:[B.jsx("div",{className:"w-16 h-16 bg-white rounded-2xl flex items-center justify-center overflow-hidden",children:B.jsx(ZE,{className:"text-gray-300"})}),B.jsxs("div",{children:[B.jsx("p",{className:"font-black text-lg",children:(n==null?void 0:n.phoneNumber)||"User"}),B.jsx("p",{className:"text-xs font-bold text-gray-400 uppercase tracking-widest",children:"Admin"})]})]}),B.jsxs(In,{onClick:vx,className:"w-full bg-red-50 p-6 rounded-[2rem] flex items-center justify-between text-left mt-8",children:[B.jsxs("div",{className:"flex items-center gap-4",children:[B.jsx("div",{className:"p-3 bg-white rounded-xl text-red-600 shadow-sm",children:B.jsx(xx,{size:20})}),B.jsx("span",{className:"font-black text-red-600",children:"Logout"})]}),B.jsx(Cx,{size:20,className:"text-red-200"})]})]})]}),Hx=()=>{const n=[{icon:kx,label:"Home",path:"/dashboard"},{icon:ZE,label:"Clients",path:"/customers"},{icon:Rx,label:"Today",path:"/today"},{icon:Ox,label:"Pay",path:"/payments"},{icon:bx,label:"Set",path:"/settings"}];return B.jsx("nav",{className:"fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-t border-gray-100 px-6 py-4 flex justify-between items-center z-50 pb-safe",children:n.map(e=>B.jsxs(hI,{to:e.path,className:({isActive:t})=>`flex flex-col items-center gap-1 transition-all ${t?"text-orange-600 scale-110":"text-gray-400"}`,children:[B.jsx(e.icon,{size:24,strokeWidth:isActive?2.5:2}),B.jsx("span",{className:"text-[10px] font-black uppercase tracking-tighter",children:e.label})]},e.path))})};function Gx(){const{user:n,loading:e}=wx(),{customers:t}=Ex(n==null?void 0:n.uid);return e?null:n?B.jsxs("div",{className:"min-h-screen bg-white text-gray-900 font-sans selection:bg-orange-100 selection:text-orange-900",children:[B.jsxs(tI,{children:[B.jsx(ds,{path:"/dashboard",element:B.jsx(zx,{user:n,customers:t})}),B.jsx(ds,{path:"/customers",element:B.jsx(Bx,{user:n,customers:t})}),B.jsx(ds,{path:"/today",element:B.jsx($x,{customers:t})}),B.jsx(ds,{path:"/payments",element:B.jsx(qx,{user:n,customers:t})}),B.jsx(ds,{path:"/settings",element:B.jsx(Wx,{user:n})}),B.jsx(ds,{path:"*",element:B.jsx(eI,{to:"/dashboard",replace:!0})})]}),B.jsx(Hx,{})]}):B.jsx(Fx,{})}mT.createRoot(document.getElementById("root")).render(B.jsx(uT.StrictMode,{children:B.jsx(Gx,{})}));
