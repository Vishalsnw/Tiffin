(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function yp(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Mc={exports:{}},gs={},jc={exports:{}},O={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kr=Symbol.for("react.element"),wp=Symbol.for("react.portal"),_p=Symbol.for("react.fragment"),Sp=Symbol.for("react.strict_mode"),kp=Symbol.for("react.profiler"),Ip=Symbol.for("react.provider"),Ep=Symbol.for("react.context"),xp=Symbol.for("react.forward_ref"),Tp=Symbol.for("react.suspense"),Cp=Symbol.for("react.memo"),Np=Symbol.for("react.lazy"),Bl=Symbol.iterator;function Pp(t){return t===null||typeof t!="object"?null:(t=Bl&&t[Bl]||t["@@iterator"],typeof t=="function"?t:null)}var Uc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},zc=Object.assign,Fc={};function Gn(t,e,n){this.props=t,this.context=e,this.refs=Fc,this.updater=n||Uc}Gn.prototype.isReactComponent={};Gn.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Gn.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function $c(){}$c.prototype=Gn.prototype;function Ca(t,e,n){this.props=t,this.context=e,this.refs=Fc,this.updater=n||Uc}var Na=Ca.prototype=new $c;Na.constructor=Ca;zc(Na,Gn.prototype);Na.isPureReactComponent=!0;var Hl=Array.isArray,Vc=Object.prototype.hasOwnProperty,Pa={current:null},Bc={key:!0,ref:!0,__self:!0,__source:!0};function Hc(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Vc.call(e,r)&&!Bc.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Kr,type:t,key:s,ref:o,props:i,_owner:Pa.current}}function Rp(t,e){return{$$typeof:Kr,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ra(t){return typeof t=="object"&&t!==null&&t.$$typeof===Kr}function Ap(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Wl=/\/+/g;function $s(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Ap(""+t.key):e.toString(36)}function Si(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Kr:case wp:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+$s(o,0):r,Hl(i)?(n="",t!=null&&(n=t.replace(Wl,"$&/")+"/"),Si(i,e,n,"",function(u){return u})):i!=null&&(Ra(i)&&(i=Rp(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Wl,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Hl(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+$s(s,a);o+=Si(s,e,n,l,i)}else if(l=Pp(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+$s(s,a++),o+=Si(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ri(t,e,n){if(t==null)return t;var r=[],i=0;return Si(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Op(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var he={current:null},ki={transition:null},bp={ReactCurrentDispatcher:he,ReactCurrentBatchConfig:ki,ReactCurrentOwner:Pa};function Wc(){throw Error("act(...) is not supported in production builds of React.")}O.Children={map:ri,forEach:function(t,e,n){ri(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ri(t,function(){e++}),e},toArray:function(t){return ri(t,function(e){return e})||[]},only:function(t){if(!Ra(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};O.Component=Gn;O.Fragment=_p;O.Profiler=kp;O.PureComponent=Ca;O.StrictMode=Sp;O.Suspense=Tp;O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bp;O.act=Wc;O.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=zc({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Pa.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Vc.call(e,l)&&!Bc.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Kr,type:t.type,key:i,ref:s,props:r,_owner:o}};O.createContext=function(t){return t={$$typeof:Ep,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Ip,_context:t},t.Consumer=t};O.createElement=Hc;O.createFactory=function(t){var e=Hc.bind(null,t);return e.type=t,e};O.createRef=function(){return{current:null}};O.forwardRef=function(t){return{$$typeof:xp,render:t}};O.isValidElement=Ra;O.lazy=function(t){return{$$typeof:Np,_payload:{_status:-1,_result:t},_init:Op}};O.memo=function(t,e){return{$$typeof:Cp,type:t,compare:e===void 0?null:e}};O.startTransition=function(t){var e=ki.transition;ki.transition={};try{t()}finally{ki.transition=e}};O.unstable_act=Wc;O.useCallback=function(t,e){return he.current.useCallback(t,e)};O.useContext=function(t){return he.current.useContext(t)};O.useDebugValue=function(){};O.useDeferredValue=function(t){return he.current.useDeferredValue(t)};O.useEffect=function(t,e){return he.current.useEffect(t,e)};O.useId=function(){return he.current.useId()};O.useImperativeHandle=function(t,e,n){return he.current.useImperativeHandle(t,e,n)};O.useInsertionEffect=function(t,e){return he.current.useInsertionEffect(t,e)};O.useLayoutEffect=function(t,e){return he.current.useLayoutEffect(t,e)};O.useMemo=function(t,e){return he.current.useMemo(t,e)};O.useReducer=function(t,e,n){return he.current.useReducer(t,e,n)};O.useRef=function(t){return he.current.useRef(t)};O.useState=function(t){return he.current.useState(t)};O.useSyncExternalStore=function(t,e,n){return he.current.useSyncExternalStore(t,e,n)};O.useTransition=function(){return he.current.useTransition()};O.version="18.3.1";jc.exports=O;var D=jc.exports;const Dp=yp(D);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lp=D,Mp=Symbol.for("react.element"),jp=Symbol.for("react.fragment"),Up=Object.prototype.hasOwnProperty,zp=Lp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Fp={key:!0,ref:!0,__self:!0,__source:!0};function Kc(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Up.call(e,r)&&!Fp.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Mp,type:t,key:s,ref:o,props:i,_owner:zp.current}}gs.Fragment=jp;gs.jsx=Kc;gs.jsxs=Kc;Mc.exports=gs;var d=Mc.exports,xo={},Gc={exports:{}},Ce={},qc={exports:{}},Qc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(E,P){var R=E.length;E.push(P);e:for(;0<R;){var G=R-1>>>1,ee=E[G];if(0<i(ee,P))E[G]=P,E[R]=ee,R=G;else break e}}function n(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var P=E[0],R=E.pop();if(R!==P){E[0]=R;e:for(var G=0,ee=E.length,ti=ee>>>1;G<ti;){var Kt=2*(G+1)-1,Fs=E[Kt],Gt=Kt+1,ni=E[Gt];if(0>i(Fs,R))Gt<ee&&0>i(ni,Fs)?(E[G]=ni,E[Gt]=R,G=Gt):(E[G]=Fs,E[Kt]=R,G=Kt);else if(Gt<ee&&0>i(ni,R))E[G]=ni,E[Gt]=R,G=Gt;else break e}}return P}function i(E,P){var R=E.sortIndex-P.sortIndex;return R!==0?R:E.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],p=1,g=null,m=3,v=!1,_=!1,S=!1,L=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(E){for(var P=n(u);P!==null;){if(P.callback===null)r(u);else if(P.startTime<=E)r(u),P.sortIndex=P.expirationTime,e(l,P);else break;P=n(u)}}function y(E){if(S=!1,f(E),!_)if(n(l)!==null)_=!0,Us(k);else{var P=n(u);P!==null&&zs(y,P.startTime-E)}}function k(E,P){_=!1,S&&(S=!1,h(N),N=-1),v=!0;var R=m;try{for(f(P),g=n(l);g!==null&&(!(g.expirationTime>P)||E&&!Le());){var G=g.callback;if(typeof G=="function"){g.callback=null,m=g.priorityLevel;var ee=G(g.expirationTime<=P);P=t.unstable_now(),typeof ee=="function"?g.callback=ee:g===n(l)&&r(l),f(P)}else r(l);g=n(l)}if(g!==null)var ti=!0;else{var Kt=n(u);Kt!==null&&zs(y,Kt.startTime-P),ti=!1}return ti}finally{g=null,m=R,v=!1}}var T=!1,C=null,N=-1,z=5,A=-1;function Le(){return!(t.unstable_now()-A<z)}function Xn(){if(C!==null){var E=t.unstable_now();A=E;var P=!0;try{P=C(!0,E)}finally{P?Zn():(T=!1,C=null)}}else T=!1}var Zn;if(typeof c=="function")Zn=function(){c(Xn)};else if(typeof MessageChannel<"u"){var Vl=new MessageChannel,vp=Vl.port2;Vl.port1.onmessage=Xn,Zn=function(){vp.postMessage(null)}}else Zn=function(){L(Xn,0)};function Us(E){C=E,T||(T=!0,Zn())}function zs(E,P){N=L(function(){E(t.unstable_now())},P)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(E){E.callback=null},t.unstable_continueExecution=function(){_||v||(_=!0,Us(k))},t.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<E?Math.floor(1e3/E):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(E){switch(m){case 1:case 2:case 3:var P=3;break;default:P=m}var R=m;m=P;try{return E()}finally{m=R}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(E,P){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var R=m;m=E;try{return P()}finally{m=R}},t.unstable_scheduleCallback=function(E,P,R){var G=t.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?G+R:G):R=G,E){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=R+ee,E={id:p++,callback:P,priorityLevel:E,startTime:R,expirationTime:ee,sortIndex:-1},R>G?(E.sortIndex=R,e(u,E),n(l)===null&&E===n(u)&&(S?(h(N),N=-1):S=!0,zs(y,R-G))):(E.sortIndex=ee,e(l,E),_||v||(_=!0,Us(k))),E},t.unstable_shouldYield=Le,t.unstable_wrapCallback=function(E){var P=m;return function(){var R=m;m=P;try{return E.apply(this,arguments)}finally{m=R}}}})(Qc);qc.exports=Qc;var $p=qc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vp=D,Te=$p;function w(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Yc=new Set,Tr={};function hn(t,e){zn(t,e),zn(t+"Capture",e)}function zn(t,e){for(Tr[t]=e,t=0;t<e.length;t++)Yc.add(e[t])}var ct=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),To=Object.prototype.hasOwnProperty,Bp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Kl={},Gl={};function Hp(t){return To.call(Gl,t)?!0:To.call(Kl,t)?!1:Bp.test(t)?Gl[t]=!0:(Kl[t]=!0,!1)}function Wp(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Kp(t,e,n,r){if(e===null||typeof e>"u"||Wp(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function pe(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var se={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){se[t]=new pe(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];se[e]=new pe(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){se[t]=new pe(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){se[t]=new pe(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){se[t]=new pe(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){se[t]=new pe(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){se[t]=new pe(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){se[t]=new pe(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){se[t]=new pe(t,5,!1,t.toLowerCase(),null,!1,!1)});var Aa=/[\-:]([a-z])/g;function Oa(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Aa,Oa);se[e]=new pe(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Aa,Oa);se[e]=new pe(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Aa,Oa);se[e]=new pe(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){se[t]=new pe(t,1,!1,t.toLowerCase(),null,!1,!1)});se.xlinkHref=new pe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){se[t]=new pe(t,1,!1,t.toLowerCase(),null,!0,!0)});function ba(t,e,n,r){var i=se.hasOwnProperty(e)?se[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Kp(e,n,i,r)&&(n=null),r||i===null?Hp(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var vt=Vp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ii=Symbol.for("react.element"),yn=Symbol.for("react.portal"),wn=Symbol.for("react.fragment"),Da=Symbol.for("react.strict_mode"),Co=Symbol.for("react.profiler"),Jc=Symbol.for("react.provider"),Xc=Symbol.for("react.context"),La=Symbol.for("react.forward_ref"),No=Symbol.for("react.suspense"),Po=Symbol.for("react.suspense_list"),Ma=Symbol.for("react.memo"),St=Symbol.for("react.lazy"),Zc=Symbol.for("react.offscreen"),ql=Symbol.iterator;function er(t){return t===null||typeof t!="object"?null:(t=ql&&t[ql]||t["@@iterator"],typeof t=="function"?t:null)}var W=Object.assign,Vs;function lr(t){if(Vs===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Vs=e&&e[1]||""}return`
`+Vs+t}var Bs=!1;function Hs(t,e){if(!t||Bs)return"";Bs=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Bs=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?lr(t):""}function Gp(t){switch(t.tag){case 5:return lr(t.type);case 16:return lr("Lazy");case 13:return lr("Suspense");case 19:return lr("SuspenseList");case 0:case 2:case 15:return t=Hs(t.type,!1),t;case 11:return t=Hs(t.type.render,!1),t;case 1:return t=Hs(t.type,!0),t;default:return""}}function Ro(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case wn:return"Fragment";case yn:return"Portal";case Co:return"Profiler";case Da:return"StrictMode";case No:return"Suspense";case Po:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Xc:return(t.displayName||"Context")+".Consumer";case Jc:return(t._context.displayName||"Context")+".Provider";case La:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ma:return e=t.displayName||null,e!==null?e:Ro(t.type)||"Memo";case St:e=t._payload,t=t._init;try{return Ro(t(e))}catch{}}return null}function qp(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ro(e);case 8:return e===Da?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function $t(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ed(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Qp(t){var e=ed(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function si(t){t._valueTracker||(t._valueTracker=Qp(t))}function td(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=ed(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ji(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ao(t,e){var n=e.checked;return W({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Ql(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=$t(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function nd(t,e){e=e.checked,e!=null&&ba(t,"checked",e,!1)}function Oo(t,e){nd(t,e);var n=$t(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?bo(t,e.type,n):e.hasOwnProperty("defaultValue")&&bo(t,e.type,$t(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Yl(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function bo(t,e,n){(e!=="number"||ji(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ur=Array.isArray;function Rn(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+$t(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Do(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(w(91));return W({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Jl(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(w(92));if(ur(n)){if(1<n.length)throw Error(w(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:$t(n)}}function rd(t,e){var n=$t(e.value),r=$t(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Xl(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function id(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Lo(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?id(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var oi,sd=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(oi=oi||document.createElement("div"),oi.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=oi.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Cr(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var hr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Yp=["Webkit","ms","Moz","O"];Object.keys(hr).forEach(function(t){Yp.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),hr[e]=hr[t]})});function od(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||hr.hasOwnProperty(t)&&hr[t]?(""+e).trim():e+"px"}function ad(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=od(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Jp=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Mo(t,e){if(e){if(Jp[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(w(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(w(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(w(61))}if(e.style!=null&&typeof e.style!="object")throw Error(w(62))}}function jo(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Uo=null;function ja(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var zo=null,An=null,On=null;function Zl(t){if(t=Qr(t)){if(typeof zo!="function")throw Error(w(280));var e=t.stateNode;e&&(e=Ss(e),zo(t.stateNode,t.type,e))}}function ld(t){An?On?On.push(t):On=[t]:An=t}function ud(){if(An){var t=An,e=On;if(On=An=null,Zl(t),e)for(t=0;t<e.length;t++)Zl(e[t])}}function cd(t,e){return t(e)}function dd(){}var Ws=!1;function fd(t,e,n){if(Ws)return t(e,n);Ws=!0;try{return cd(t,e,n)}finally{Ws=!1,(An!==null||On!==null)&&(dd(),ud())}}function Nr(t,e){var n=t.stateNode;if(n===null)return null;var r=Ss(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(w(231,e,typeof n));return n}var Fo=!1;if(ct)try{var tr={};Object.defineProperty(tr,"passive",{get:function(){Fo=!0}}),window.addEventListener("test",tr,tr),window.removeEventListener("test",tr,tr)}catch{Fo=!1}function Xp(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(p){this.onError(p)}}var pr=!1,Ui=null,zi=!1,$o=null,Zp={onError:function(t){pr=!0,Ui=t}};function em(t,e,n,r,i,s,o,a,l){pr=!1,Ui=null,Xp.apply(Zp,arguments)}function tm(t,e,n,r,i,s,o,a,l){if(em.apply(this,arguments),pr){if(pr){var u=Ui;pr=!1,Ui=null}else throw Error(w(198));zi||(zi=!0,$o=u)}}function pn(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function hd(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function eu(t){if(pn(t)!==t)throw Error(w(188))}function nm(t){var e=t.alternate;if(!e){if(e=pn(t),e===null)throw Error(w(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return eu(i),t;if(s===r)return eu(i),e;s=s.sibling}throw Error(w(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(w(189))}}if(n.alternate!==r)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?t:e}function pd(t){return t=nm(t),t!==null?md(t):null}function md(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=md(t);if(e!==null)return e;t=t.sibling}return null}var gd=Te.unstable_scheduleCallback,tu=Te.unstable_cancelCallback,rm=Te.unstable_shouldYield,im=Te.unstable_requestPaint,q=Te.unstable_now,sm=Te.unstable_getCurrentPriorityLevel,Ua=Te.unstable_ImmediatePriority,vd=Te.unstable_UserBlockingPriority,Fi=Te.unstable_NormalPriority,om=Te.unstable_LowPriority,yd=Te.unstable_IdlePriority,vs=null,qe=null;function am(t){if(qe&&typeof qe.onCommitFiberRoot=="function")try{qe.onCommitFiberRoot(vs,t,void 0,(t.current.flags&128)===128)}catch{}}var Fe=Math.clz32?Math.clz32:cm,lm=Math.log,um=Math.LN2;function cm(t){return t>>>=0,t===0?32:31-(lm(t)/um|0)|0}var ai=64,li=4194304;function cr(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function $i(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=cr(a):(s&=o,s!==0&&(r=cr(s)))}else o=n&~i,o!==0?r=cr(o):s!==0&&(r=cr(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Fe(e),i=1<<n,r|=t[n],e&=~i;return r}function dm(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fm(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Fe(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=dm(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Vo(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function wd(){var t=ai;return ai<<=1,!(ai&4194240)&&(ai=64),t}function Ks(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Gr(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Fe(e),t[e]=n}function hm(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Fe(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function za(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Fe(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var M=0;function _d(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Sd,Fa,kd,Id,Ed,Bo=!1,ui=[],Rt=null,At=null,Ot=null,Pr=new Map,Rr=new Map,It=[],pm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function nu(t,e){switch(t){case"focusin":case"focusout":Rt=null;break;case"dragenter":case"dragleave":At=null;break;case"mouseover":case"mouseout":Ot=null;break;case"pointerover":case"pointerout":Pr.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rr.delete(e.pointerId)}}function nr(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Qr(e),e!==null&&Fa(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function mm(t,e,n,r,i){switch(e){case"focusin":return Rt=nr(Rt,t,e,n,r,i),!0;case"dragenter":return At=nr(At,t,e,n,r,i),!0;case"mouseover":return Ot=nr(Ot,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Pr.set(s,nr(Pr.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Rr.set(s,nr(Rr.get(s)||null,t,e,n,r,i)),!0}return!1}function xd(t){var e=Jt(t.target);if(e!==null){var n=pn(e);if(n!==null){if(e=n.tag,e===13){if(e=hd(n),e!==null){t.blockedOn=e,Ed(t.priority,function(){kd(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ii(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ho(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Uo=r,n.target.dispatchEvent(r),Uo=null}else return e=Qr(n),e!==null&&Fa(e),t.blockedOn=n,!1;e.shift()}return!0}function ru(t,e,n){Ii(t)&&n.delete(e)}function gm(){Bo=!1,Rt!==null&&Ii(Rt)&&(Rt=null),At!==null&&Ii(At)&&(At=null),Ot!==null&&Ii(Ot)&&(Ot=null),Pr.forEach(ru),Rr.forEach(ru)}function rr(t,e){t.blockedOn===e&&(t.blockedOn=null,Bo||(Bo=!0,Te.unstable_scheduleCallback(Te.unstable_NormalPriority,gm)))}function Ar(t){function e(i){return rr(i,t)}if(0<ui.length){rr(ui[0],t);for(var n=1;n<ui.length;n++){var r=ui[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Rt!==null&&rr(Rt,t),At!==null&&rr(At,t),Ot!==null&&rr(Ot,t),Pr.forEach(e),Rr.forEach(e),n=0;n<It.length;n++)r=It[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<It.length&&(n=It[0],n.blockedOn===null);)xd(n),n.blockedOn===null&&It.shift()}var bn=vt.ReactCurrentBatchConfig,Vi=!0;function vm(t,e,n,r){var i=M,s=bn.transition;bn.transition=null;try{M=1,$a(t,e,n,r)}finally{M=i,bn.transition=s}}function ym(t,e,n,r){var i=M,s=bn.transition;bn.transition=null;try{M=4,$a(t,e,n,r)}finally{M=i,bn.transition=s}}function $a(t,e,n,r){if(Vi){var i=Ho(t,e,n,r);if(i===null)no(t,e,r,Bi,n),nu(t,r);else if(mm(i,t,e,n,r))r.stopPropagation();else if(nu(t,r),e&4&&-1<pm.indexOf(t)){for(;i!==null;){var s=Qr(i);if(s!==null&&Sd(s),s=Ho(t,e,n,r),s===null&&no(t,e,r,Bi,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else no(t,e,r,null,n)}}var Bi=null;function Ho(t,e,n,r){if(Bi=null,t=ja(r),t=Jt(t),t!==null)if(e=pn(t),e===null)t=null;else if(n=e.tag,n===13){if(t=hd(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Bi=t,null}function Td(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(sm()){case Ua:return 1;case vd:return 4;case Fi:case om:return 16;case yd:return 536870912;default:return 16}default:return 16}}var Nt=null,Va=null,Ei=null;function Cd(){if(Ei)return Ei;var t,e=Va,n=e.length,r,i="value"in Nt?Nt.value:Nt.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ei=i.slice(t,1<r?1-r:void 0)}function xi(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ci(){return!0}function iu(){return!1}function Ne(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ci:iu,this.isPropagationStopped=iu,this}return W(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ci)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ci)},persist:function(){},isPersistent:ci}),e}var qn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ba=Ne(qn),qr=W({},qn,{view:0,detail:0}),wm=Ne(qr),Gs,qs,ir,ys=W({},qr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ha,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ir&&(ir&&t.type==="mousemove"?(Gs=t.screenX-ir.screenX,qs=t.screenY-ir.screenY):qs=Gs=0,ir=t),Gs)},movementY:function(t){return"movementY"in t?t.movementY:qs}}),su=Ne(ys),_m=W({},ys,{dataTransfer:0}),Sm=Ne(_m),km=W({},qr,{relatedTarget:0}),Qs=Ne(km),Im=W({},qn,{animationName:0,elapsedTime:0,pseudoElement:0}),Em=Ne(Im),xm=W({},qn,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Tm=Ne(xm),Cm=W({},qn,{data:0}),ou=Ne(Cm),Nm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Pm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Rm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Am(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Rm[t])?!!e[t]:!1}function Ha(){return Am}var Om=W({},qr,{key:function(t){if(t.key){var e=Nm[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=xi(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Pm[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ha,charCode:function(t){return t.type==="keypress"?xi(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?xi(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),bm=Ne(Om),Dm=W({},ys,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),au=Ne(Dm),Lm=W({},qr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ha}),Mm=Ne(Lm),jm=W({},qn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Um=Ne(jm),zm=W({},ys,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Fm=Ne(zm),$m=[9,13,27,32],Wa=ct&&"CompositionEvent"in window,mr=null;ct&&"documentMode"in document&&(mr=document.documentMode);var Vm=ct&&"TextEvent"in window&&!mr,Nd=ct&&(!Wa||mr&&8<mr&&11>=mr),lu=" ",uu=!1;function Pd(t,e){switch(t){case"keyup":return $m.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var _n=!1;function Bm(t,e){switch(t){case"compositionend":return Rd(e);case"keypress":return e.which!==32?null:(uu=!0,lu);case"textInput":return t=e.data,t===lu&&uu?null:t;default:return null}}function Hm(t,e){if(_n)return t==="compositionend"||!Wa&&Pd(t,e)?(t=Cd(),Ei=Va=Nt=null,_n=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Nd&&e.locale!=="ko"?null:e.data;default:return null}}var Wm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Wm[t.type]:e==="textarea"}function Ad(t,e,n,r){ld(r),e=Hi(e,"onChange"),0<e.length&&(n=new Ba("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var gr=null,Or=null;function Km(t){Vd(t,0)}function ws(t){var e=In(t);if(td(e))return t}function Gm(t,e){if(t==="change")return e}var Od=!1;if(ct){var Ys;if(ct){var Js="oninput"in document;if(!Js){var du=document.createElement("div");du.setAttribute("oninput","return;"),Js=typeof du.oninput=="function"}Ys=Js}else Ys=!1;Od=Ys&&(!document.documentMode||9<document.documentMode)}function fu(){gr&&(gr.detachEvent("onpropertychange",bd),Or=gr=null)}function bd(t){if(t.propertyName==="value"&&ws(Or)){var e=[];Ad(e,Or,t,ja(t)),fd(Km,e)}}function qm(t,e,n){t==="focusin"?(fu(),gr=e,Or=n,gr.attachEvent("onpropertychange",bd)):t==="focusout"&&fu()}function Qm(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ws(Or)}function Ym(t,e){if(t==="click")return ws(e)}function Jm(t,e){if(t==="input"||t==="change")return ws(e)}function Xm(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ve=typeof Object.is=="function"?Object.is:Xm;function br(t,e){if(Ve(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!To.call(e,i)||!Ve(t[i],e[i]))return!1}return!0}function hu(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function pu(t,e){var n=hu(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=hu(n)}}function Dd(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Dd(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Ld(){for(var t=window,e=ji();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ji(t.document)}return e}function Ka(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Zm(t){var e=Ld(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Dd(n.ownerDocument.documentElement,n)){if(r!==null&&Ka(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=pu(n,s);var o=pu(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var eg=ct&&"documentMode"in document&&11>=document.documentMode,Sn=null,Wo=null,vr=null,Ko=!1;function mu(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ko||Sn==null||Sn!==ji(r)||(r=Sn,"selectionStart"in r&&Ka(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),vr&&br(vr,r)||(vr=r,r=Hi(Wo,"onSelect"),0<r.length&&(e=new Ba("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Sn)))}function di(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var kn={animationend:di("Animation","AnimationEnd"),animationiteration:di("Animation","AnimationIteration"),animationstart:di("Animation","AnimationStart"),transitionend:di("Transition","TransitionEnd")},Xs={},Md={};ct&&(Md=document.createElement("div").style,"AnimationEvent"in window||(delete kn.animationend.animation,delete kn.animationiteration.animation,delete kn.animationstart.animation),"TransitionEvent"in window||delete kn.transitionend.transition);function _s(t){if(Xs[t])return Xs[t];if(!kn[t])return t;var e=kn[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Md)return Xs[t]=e[n];return t}var jd=_s("animationend"),Ud=_s("animationiteration"),zd=_s("animationstart"),Fd=_s("transitionend"),$d=new Map,gu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Bt(t,e){$d.set(t,e),hn(e,[t])}for(var Zs=0;Zs<gu.length;Zs++){var eo=gu[Zs],tg=eo.toLowerCase(),ng=eo[0].toUpperCase()+eo.slice(1);Bt(tg,"on"+ng)}Bt(jd,"onAnimationEnd");Bt(Ud,"onAnimationIteration");Bt(zd,"onAnimationStart");Bt("dblclick","onDoubleClick");Bt("focusin","onFocus");Bt("focusout","onBlur");Bt(Fd,"onTransitionEnd");zn("onMouseEnter",["mouseout","mouseover"]);zn("onMouseLeave",["mouseout","mouseover"]);zn("onPointerEnter",["pointerout","pointerover"]);zn("onPointerLeave",["pointerout","pointerover"]);hn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));hn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));hn("onBeforeInput",["compositionend","keypress","textInput","paste"]);hn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));hn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));hn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var dr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rg=new Set("cancel close invalid load scroll toggle".split(" ").concat(dr));function vu(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,tm(r,e,void 0,t),t.currentTarget=null}function Vd(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;vu(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;vu(i,a,u),s=l}}}if(zi)throw t=$o,zi=!1,$o=null,t}function F(t,e){var n=e[Jo];n===void 0&&(n=e[Jo]=new Set);var r=t+"__bubble";n.has(r)||(Bd(e,t,2,!1),n.add(r))}function to(t,e,n){var r=0;e&&(r|=4),Bd(n,t,r,e)}var fi="_reactListening"+Math.random().toString(36).slice(2);function Dr(t){if(!t[fi]){t[fi]=!0,Yc.forEach(function(n){n!=="selectionchange"&&(rg.has(n)||to(n,!1,t),to(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[fi]||(e[fi]=!0,to("selectionchange",!1,e))}}function Bd(t,e,n,r){switch(Td(e)){case 1:var i=vm;break;case 4:i=ym;break;default:i=$a}n=i.bind(null,e,n,t),i=void 0,!Fo||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function no(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Jt(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}fd(function(){var u=s,p=ja(n),g=[];e:{var m=$d.get(t);if(m!==void 0){var v=Ba,_=t;switch(t){case"keypress":if(xi(n)===0)break e;case"keydown":case"keyup":v=bm;break;case"focusin":_="focus",v=Qs;break;case"focusout":_="blur",v=Qs;break;case"beforeblur":case"afterblur":v=Qs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=su;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Sm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Mm;break;case jd:case Ud:case zd:v=Em;break;case Fd:v=Um;break;case"scroll":v=wm;break;case"wheel":v=Fm;break;case"copy":case"cut":case"paste":v=Tm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=au}var S=(e&4)!==0,L=!S&&t==="scroll",h=S?m!==null?m+"Capture":null:m;S=[];for(var c=u,f;c!==null;){f=c;var y=f.stateNode;if(f.tag===5&&y!==null&&(f=y,h!==null&&(y=Nr(c,h),y!=null&&S.push(Lr(c,y,f)))),L)break;c=c.return}0<S.length&&(m=new v(m,_,null,n,p),g.push({event:m,listeners:S}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",m&&n!==Uo&&(_=n.relatedTarget||n.fromElement)&&(Jt(_)||_[dt]))break e;if((v||m)&&(m=p.window===p?p:(m=p.ownerDocument)?m.defaultView||m.parentWindow:window,v?(_=n.relatedTarget||n.toElement,v=u,_=_?Jt(_):null,_!==null&&(L=pn(_),_!==L||_.tag!==5&&_.tag!==6)&&(_=null)):(v=null,_=u),v!==_)){if(S=su,y="onMouseLeave",h="onMouseEnter",c="mouse",(t==="pointerout"||t==="pointerover")&&(S=au,y="onPointerLeave",h="onPointerEnter",c="pointer"),L=v==null?m:In(v),f=_==null?m:In(_),m=new S(y,c+"leave",v,n,p),m.target=L,m.relatedTarget=f,y=null,Jt(p)===u&&(S=new S(h,c+"enter",_,n,p),S.target=f,S.relatedTarget=L,y=S),L=y,v&&_)t:{for(S=v,h=_,c=0,f=S;f;f=vn(f))c++;for(f=0,y=h;y;y=vn(y))f++;for(;0<c-f;)S=vn(S),c--;for(;0<f-c;)h=vn(h),f--;for(;c--;){if(S===h||h!==null&&S===h.alternate)break t;S=vn(S),h=vn(h)}S=null}else S=null;v!==null&&yu(g,m,v,S,!1),_!==null&&L!==null&&yu(g,L,_,S,!0)}}e:{if(m=u?In(u):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var k=Gm;else if(cu(m))if(Od)k=Jm;else{k=Qm;var T=qm}else(v=m.nodeName)&&v.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(k=Ym);if(k&&(k=k(t,u))){Ad(g,k,n,p);break e}T&&T(t,m,u),t==="focusout"&&(T=m._wrapperState)&&T.controlled&&m.type==="number"&&bo(m,"number",m.value)}switch(T=u?In(u):window,t){case"focusin":(cu(T)||T.contentEditable==="true")&&(Sn=T,Wo=u,vr=null);break;case"focusout":vr=Wo=Sn=null;break;case"mousedown":Ko=!0;break;case"contextmenu":case"mouseup":case"dragend":Ko=!1,mu(g,n,p);break;case"selectionchange":if(eg)break;case"keydown":case"keyup":mu(g,n,p)}var C;if(Wa)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else _n?Pd(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(Nd&&n.locale!=="ko"&&(_n||N!=="onCompositionStart"?N==="onCompositionEnd"&&_n&&(C=Cd()):(Nt=p,Va="value"in Nt?Nt.value:Nt.textContent,_n=!0)),T=Hi(u,N),0<T.length&&(N=new ou(N,t,null,n,p),g.push({event:N,listeners:T}),C?N.data=C:(C=Rd(n),C!==null&&(N.data=C)))),(C=Vm?Bm(t,n):Hm(t,n))&&(u=Hi(u,"onBeforeInput"),0<u.length&&(p=new ou("onBeforeInput","beforeinput",null,n,p),g.push({event:p,listeners:u}),p.data=C))}Vd(g,e)})}function Lr(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Hi(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Nr(t,n),s!=null&&r.unshift(Lr(t,s,i)),s=Nr(t,e),s!=null&&r.push(Lr(t,s,i))),t=t.return}return r}function vn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function yu(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Nr(n,s),l!=null&&o.unshift(Lr(n,l,a))):i||(l=Nr(n,s),l!=null&&o.push(Lr(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var ig=/\r\n?/g,sg=/\u0000|\uFFFD/g;function wu(t){return(typeof t=="string"?t:""+t).replace(ig,`
`).replace(sg,"")}function hi(t,e,n){if(e=wu(e),wu(t)!==e&&n)throw Error(w(425))}function Wi(){}var Go=null,qo=null;function Qo(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Yo=typeof setTimeout=="function"?setTimeout:void 0,og=typeof clearTimeout=="function"?clearTimeout:void 0,_u=typeof Promise=="function"?Promise:void 0,ag=typeof queueMicrotask=="function"?queueMicrotask:typeof _u<"u"?function(t){return _u.resolve(null).then(t).catch(lg)}:Yo;function lg(t){setTimeout(function(){throw t})}function ro(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ar(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ar(e)}function bt(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Su(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Qn=Math.random().toString(36).slice(2),Ke="__reactFiber$"+Qn,Mr="__reactProps$"+Qn,dt="__reactContainer$"+Qn,Jo="__reactEvents$"+Qn,ug="__reactListeners$"+Qn,cg="__reactHandles$"+Qn;function Jt(t){var e=t[Ke];if(e)return e;for(var n=t.parentNode;n;){if(e=n[dt]||n[Ke]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Su(t);t!==null;){if(n=t[Ke])return n;t=Su(t)}return e}t=n,n=t.parentNode}return null}function Qr(t){return t=t[Ke]||t[dt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function In(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(w(33))}function Ss(t){return t[Mr]||null}var Xo=[],En=-1;function Ht(t){return{current:t}}function $(t){0>En||(t.current=Xo[En],Xo[En]=null,En--)}function U(t,e){En++,Xo[En]=t.current,t.current=e}var Vt={},ue=Ht(Vt),ve=Ht(!1),sn=Vt;function Fn(t,e){var n=t.type.contextTypes;if(!n)return Vt;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function ye(t){return t=t.childContextTypes,t!=null}function Ki(){$(ve),$(ue)}function ku(t,e,n){if(ue.current!==Vt)throw Error(w(168));U(ue,e),U(ve,n)}function Hd(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(w(108,qp(t)||"Unknown",i));return W({},n,r)}function Gi(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Vt,sn=ue.current,U(ue,t),U(ve,ve.current),!0}function Iu(t,e,n){var r=t.stateNode;if(!r)throw Error(w(169));n?(t=Hd(t,e,sn),r.__reactInternalMemoizedMergedChildContext=t,$(ve),$(ue),U(ue,t)):$(ve),U(ve,n)}var nt=null,ks=!1,io=!1;function Wd(t){nt===null?nt=[t]:nt.push(t)}function dg(t){ks=!0,Wd(t)}function Wt(){if(!io&&nt!==null){io=!0;var t=0,e=M;try{var n=nt;for(M=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}nt=null,ks=!1}catch(i){throw nt!==null&&(nt=nt.slice(t+1)),gd(Ua,Wt),i}finally{M=e,io=!1}}return null}var xn=[],Tn=0,qi=null,Qi=0,Pe=[],Re=0,on=null,it=1,st="";function qt(t,e){xn[Tn++]=Qi,xn[Tn++]=qi,qi=t,Qi=e}function Kd(t,e,n){Pe[Re++]=it,Pe[Re++]=st,Pe[Re++]=on,on=t;var r=it;t=st;var i=32-Fe(r)-1;r&=~(1<<i),n+=1;var s=32-Fe(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,it=1<<32-Fe(e)+i|n<<i|r,st=s+t}else it=1<<s|n<<i|r,st=t}function Ga(t){t.return!==null&&(qt(t,1),Kd(t,1,0))}function qa(t){for(;t===qi;)qi=xn[--Tn],xn[Tn]=null,Qi=xn[--Tn],xn[Tn]=null;for(;t===on;)on=Pe[--Re],Pe[Re]=null,st=Pe[--Re],Pe[Re]=null,it=Pe[--Re],Pe[Re]=null}var Ee=null,Ie=null,V=!1,ze=null;function Gd(t,e){var n=Ae(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Eu(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ee=t,Ie=bt(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ee=t,Ie=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=on!==null?{id:it,overflow:st}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ae(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ee=t,Ie=null,!0):!1;default:return!1}}function Zo(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ea(t){if(V){var e=Ie;if(e){var n=e;if(!Eu(t,e)){if(Zo(t))throw Error(w(418));e=bt(n.nextSibling);var r=Ee;e&&Eu(t,e)?Gd(r,n):(t.flags=t.flags&-4097|2,V=!1,Ee=t)}}else{if(Zo(t))throw Error(w(418));t.flags=t.flags&-4097|2,V=!1,Ee=t}}}function xu(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ee=t}function pi(t){if(t!==Ee)return!1;if(!V)return xu(t),V=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Qo(t.type,t.memoizedProps)),e&&(e=Ie)){if(Zo(t))throw qd(),Error(w(418));for(;e;)Gd(t,e),e=bt(e.nextSibling)}if(xu(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(w(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ie=bt(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ie=null}}else Ie=Ee?bt(t.stateNode.nextSibling):null;return!0}function qd(){for(var t=Ie;t;)t=bt(t.nextSibling)}function $n(){Ie=Ee=null,V=!1}function Qa(t){ze===null?ze=[t]:ze.push(t)}var fg=vt.ReactCurrentBatchConfig;function sr(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var r=n.stateNode}if(!r)throw Error(w(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,t))}return t}function mi(t,e){throw t=Object.prototype.toString.call(e),Error(w(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Tu(t){var e=t._init;return e(t._payload)}function Qd(t){function e(h,c){if(t){var f=h.deletions;f===null?(h.deletions=[c],h.flags|=16):f.push(c)}}function n(h,c){if(!t)return null;for(;c!==null;)e(h,c),c=c.sibling;return null}function r(h,c){for(h=new Map;c!==null;)c.key!==null?h.set(c.key,c):h.set(c.index,c),c=c.sibling;return h}function i(h,c){return h=jt(h,c),h.index=0,h.sibling=null,h}function s(h,c,f){return h.index=f,t?(f=h.alternate,f!==null?(f=f.index,f<c?(h.flags|=2,c):f):(h.flags|=2,c)):(h.flags|=1048576,c)}function o(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,c,f,y){return c===null||c.tag!==6?(c=fo(f,h.mode,y),c.return=h,c):(c=i(c,f),c.return=h,c)}function l(h,c,f,y){var k=f.type;return k===wn?p(h,c,f.props.children,y,f.key):c!==null&&(c.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===St&&Tu(k)===c.type)?(y=i(c,f.props),y.ref=sr(h,c,f),y.return=h,y):(y=Oi(f.type,f.key,f.props,null,h.mode,y),y.ref=sr(h,c,f),y.return=h,y)}function u(h,c,f,y){return c===null||c.tag!==4||c.stateNode.containerInfo!==f.containerInfo||c.stateNode.implementation!==f.implementation?(c=ho(f,h.mode,y),c.return=h,c):(c=i(c,f.children||[]),c.return=h,c)}function p(h,c,f,y,k){return c===null||c.tag!==7?(c=rn(f,h.mode,y,k),c.return=h,c):(c=i(c,f),c.return=h,c)}function g(h,c,f){if(typeof c=="string"&&c!==""||typeof c=="number")return c=fo(""+c,h.mode,f),c.return=h,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case ii:return f=Oi(c.type,c.key,c.props,null,h.mode,f),f.ref=sr(h,null,c),f.return=h,f;case yn:return c=ho(c,h.mode,f),c.return=h,c;case St:var y=c._init;return g(h,y(c._payload),f)}if(ur(c)||er(c))return c=rn(c,h.mode,f,null),c.return=h,c;mi(h,c)}return null}function m(h,c,f,y){var k=c!==null?c.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return k!==null?null:a(h,c,""+f,y);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case ii:return f.key===k?l(h,c,f,y):null;case yn:return f.key===k?u(h,c,f,y):null;case St:return k=f._init,m(h,c,k(f._payload),y)}if(ur(f)||er(f))return k!==null?null:p(h,c,f,y,null);mi(h,f)}return null}function v(h,c,f,y,k){if(typeof y=="string"&&y!==""||typeof y=="number")return h=h.get(f)||null,a(c,h,""+y,k);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ii:return h=h.get(y.key===null?f:y.key)||null,l(c,h,y,k);case yn:return h=h.get(y.key===null?f:y.key)||null,u(c,h,y,k);case St:var T=y._init;return v(h,c,f,T(y._payload),k)}if(ur(y)||er(y))return h=h.get(f)||null,p(c,h,y,k,null);mi(c,y)}return null}function _(h,c,f,y){for(var k=null,T=null,C=c,N=c=0,z=null;C!==null&&N<f.length;N++){C.index>N?(z=C,C=null):z=C.sibling;var A=m(h,C,f[N],y);if(A===null){C===null&&(C=z);break}t&&C&&A.alternate===null&&e(h,C),c=s(A,c,N),T===null?k=A:T.sibling=A,T=A,C=z}if(N===f.length)return n(h,C),V&&qt(h,N),k;if(C===null){for(;N<f.length;N++)C=g(h,f[N],y),C!==null&&(c=s(C,c,N),T===null?k=C:T.sibling=C,T=C);return V&&qt(h,N),k}for(C=r(h,C);N<f.length;N++)z=v(C,h,N,f[N],y),z!==null&&(t&&z.alternate!==null&&C.delete(z.key===null?N:z.key),c=s(z,c,N),T===null?k=z:T.sibling=z,T=z);return t&&C.forEach(function(Le){return e(h,Le)}),V&&qt(h,N),k}function S(h,c,f,y){var k=er(f);if(typeof k!="function")throw Error(w(150));if(f=k.call(f),f==null)throw Error(w(151));for(var T=k=null,C=c,N=c=0,z=null,A=f.next();C!==null&&!A.done;N++,A=f.next()){C.index>N?(z=C,C=null):z=C.sibling;var Le=m(h,C,A.value,y);if(Le===null){C===null&&(C=z);break}t&&C&&Le.alternate===null&&e(h,C),c=s(Le,c,N),T===null?k=Le:T.sibling=Le,T=Le,C=z}if(A.done)return n(h,C),V&&qt(h,N),k;if(C===null){for(;!A.done;N++,A=f.next())A=g(h,A.value,y),A!==null&&(c=s(A,c,N),T===null?k=A:T.sibling=A,T=A);return V&&qt(h,N),k}for(C=r(h,C);!A.done;N++,A=f.next())A=v(C,h,N,A.value,y),A!==null&&(t&&A.alternate!==null&&C.delete(A.key===null?N:A.key),c=s(A,c,N),T===null?k=A:T.sibling=A,T=A);return t&&C.forEach(function(Xn){return e(h,Xn)}),V&&qt(h,N),k}function L(h,c,f,y){if(typeof f=="object"&&f!==null&&f.type===wn&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case ii:e:{for(var k=f.key,T=c;T!==null;){if(T.key===k){if(k=f.type,k===wn){if(T.tag===7){n(h,T.sibling),c=i(T,f.props.children),c.return=h,h=c;break e}}else if(T.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===St&&Tu(k)===T.type){n(h,T.sibling),c=i(T,f.props),c.ref=sr(h,T,f),c.return=h,h=c;break e}n(h,T);break}else e(h,T);T=T.sibling}f.type===wn?(c=rn(f.props.children,h.mode,y,f.key),c.return=h,h=c):(y=Oi(f.type,f.key,f.props,null,h.mode,y),y.ref=sr(h,c,f),y.return=h,h=y)}return o(h);case yn:e:{for(T=f.key;c!==null;){if(c.key===T)if(c.tag===4&&c.stateNode.containerInfo===f.containerInfo&&c.stateNode.implementation===f.implementation){n(h,c.sibling),c=i(c,f.children||[]),c.return=h,h=c;break e}else{n(h,c);break}else e(h,c);c=c.sibling}c=ho(f,h.mode,y),c.return=h,h=c}return o(h);case St:return T=f._init,L(h,c,T(f._payload),y)}if(ur(f))return _(h,c,f,y);if(er(f))return S(h,c,f,y);mi(h,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,c!==null&&c.tag===6?(n(h,c.sibling),c=i(c,f),c.return=h,h=c):(n(h,c),c=fo(f,h.mode,y),c.return=h,h=c),o(h)):n(h,c)}return L}var Vn=Qd(!0),Yd=Qd(!1),Yi=Ht(null),Ji=null,Cn=null,Ya=null;function Ja(){Ya=Cn=Ji=null}function Xa(t){var e=Yi.current;$(Yi),t._currentValue=e}function ta(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Dn(t,e){Ji=t,Ya=Cn=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ge=!0),t.firstContext=null)}function be(t){var e=t._currentValue;if(Ya!==t)if(t={context:t,memoizedValue:e,next:null},Cn===null){if(Ji===null)throw Error(w(308));Cn=t,Ji.dependencies={lanes:0,firstContext:t}}else Cn=Cn.next=t;return e}var Xt=null;function Za(t){Xt===null?Xt=[t]:Xt.push(t)}function Jd(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Za(e)):(n.next=i.next,i.next=n),e.interleaved=n,ft(t,r)}function ft(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var kt=!1;function el(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Xd(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ut(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Dt(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,b&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,ft(t,n)}return i=r.interleaved,i===null?(e.next=e,Za(r)):(e.next=i.next,i.next=e),r.interleaved=e,ft(t,n)}function Ti(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,za(t,n)}}function Cu(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Xi(t,e,n,r){var i=t.updateQueue;kt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var p=t.alternate;p!==null&&(p=p.updateQueue,a=p.lastBaseUpdate,a!==o&&(a===null?p.firstBaseUpdate=u:a.next=u,p.lastBaseUpdate=l))}if(s!==null){var g=i.baseState;o=0,p=u=l=null,a=s;do{var m=a.lane,v=a.eventTime;if((r&m)===m){p!==null&&(p=p.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,S=a;switch(m=e,v=n,S.tag){case 1:if(_=S.payload,typeof _=="function"){g=_.call(v,g,m);break e}g=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=S.payload,m=typeof _=="function"?_.call(v,g,m):_,m==null)break e;g=W({},g,m);break e;case 2:kt=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else v={eventTime:v,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},p===null?(u=p=v,l=g):p=p.next=v,o|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(p===null&&(l=g),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=p,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ln|=o,t.lanes=o,t.memoizedState=g}}function Nu(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(w(191,i));i.call(r)}}}var Yr={},Qe=Ht(Yr),jr=Ht(Yr),Ur=Ht(Yr);function Zt(t){if(t===Yr)throw Error(w(174));return t}function tl(t,e){switch(U(Ur,e),U(jr,t),U(Qe,Yr),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Lo(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Lo(e,t)}$(Qe),U(Qe,e)}function Bn(){$(Qe),$(jr),$(Ur)}function Zd(t){Zt(Ur.current);var e=Zt(Qe.current),n=Lo(e,t.type);e!==n&&(U(jr,t),U(Qe,n))}function nl(t){jr.current===t&&($(Qe),$(jr))}var B=Ht(0);function Zi(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var so=[];function rl(){for(var t=0;t<so.length;t++)so[t]._workInProgressVersionPrimary=null;so.length=0}var Ci=vt.ReactCurrentDispatcher,oo=vt.ReactCurrentBatchConfig,an=0,H=null,J=null,te=null,es=!1,yr=!1,zr=0,hg=0;function oe(){throw Error(w(321))}function il(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ve(t[n],e[n]))return!1;return!0}function sl(t,e,n,r,i,s){if(an=s,H=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ci.current=t===null||t.memoizedState===null?vg:yg,t=n(r,i),yr){s=0;do{if(yr=!1,zr=0,25<=s)throw Error(w(301));s+=1,te=J=null,e.updateQueue=null,Ci.current=wg,t=n(r,i)}while(yr)}if(Ci.current=ts,e=J!==null&&J.next!==null,an=0,te=J=H=null,es=!1,e)throw Error(w(300));return t}function ol(){var t=zr!==0;return zr=0,t}function We(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return te===null?H.memoizedState=te=t:te=te.next=t,te}function De(){if(J===null){var t=H.alternate;t=t!==null?t.memoizedState:null}else t=J.next;var e=te===null?H.memoizedState:te.next;if(e!==null)te=e,J=t;else{if(t===null)throw Error(w(310));J=t,t={memoizedState:J.memoizedState,baseState:J.baseState,baseQueue:J.baseQueue,queue:J.queue,next:null},te===null?H.memoizedState=te=t:te=te.next=t}return te}function Fr(t,e){return typeof e=="function"?e(t):e}function ao(t){var e=De(),n=e.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=t;var r=J,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var p=u.lane;if((an&p)===p)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var g={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=g,o=r):l=l.next=g,H.lanes|=p,ln|=p}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Ve(r,e.memoizedState)||(ge=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,H.lanes|=s,ln|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function lo(t){var e=De(),n=e.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Ve(s,e.memoizedState)||(ge=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function ef(){}function tf(t,e){var n=H,r=De(),i=e(),s=!Ve(r.memoizedState,i);if(s&&(r.memoizedState=i,ge=!0),r=r.queue,al(sf.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||te!==null&&te.memoizedState.tag&1){if(n.flags|=2048,$r(9,rf.bind(null,n,r,i,e),void 0,null),ne===null)throw Error(w(349));an&30||nf(n,e,i)}return i}function nf(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=H.updateQueue,e===null?(e={lastEffect:null,stores:null},H.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function rf(t,e,n,r){e.value=n,e.getSnapshot=r,of(e)&&af(t)}function sf(t,e,n){return n(function(){of(e)&&af(t)})}function of(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ve(t,n)}catch{return!0}}function af(t){var e=ft(t,1);e!==null&&$e(e,t,1,-1)}function Pu(t){var e=We();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fr,lastRenderedState:t},e.queue=t,t=t.dispatch=gg.bind(null,H,t),[e.memoizedState,t]}function $r(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=H.updateQueue,e===null?(e={lastEffect:null,stores:null},H.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function lf(){return De().memoizedState}function Ni(t,e,n,r){var i=We();H.flags|=t,i.memoizedState=$r(1|e,n,void 0,r===void 0?null:r)}function Is(t,e,n,r){var i=De();r=r===void 0?null:r;var s=void 0;if(J!==null){var o=J.memoizedState;if(s=o.destroy,r!==null&&il(r,o.deps)){i.memoizedState=$r(e,n,s,r);return}}H.flags|=t,i.memoizedState=$r(1|e,n,s,r)}function Ru(t,e){return Ni(8390656,8,t,e)}function al(t,e){return Is(2048,8,t,e)}function uf(t,e){return Is(4,2,t,e)}function cf(t,e){return Is(4,4,t,e)}function df(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ff(t,e,n){return n=n!=null?n.concat([t]):null,Is(4,4,df.bind(null,e,t),n)}function ll(){}function hf(t,e){var n=De();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&il(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function pf(t,e){var n=De();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&il(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function mf(t,e,n){return an&21?(Ve(n,e)||(n=wd(),H.lanes|=n,ln|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ge=!0),t.memoizedState=n)}function pg(t,e){var n=M;M=n!==0&&4>n?n:4,t(!0);var r=oo.transition;oo.transition={};try{t(!1),e()}finally{M=n,oo.transition=r}}function gf(){return De().memoizedState}function mg(t,e,n){var r=Mt(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},vf(t))yf(e,n);else if(n=Jd(t,e,n,r),n!==null){var i=de();$e(n,t,r,i),wf(n,e,r)}}function gg(t,e,n){var r=Mt(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(vf(t))yf(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Ve(a,o)){var l=e.interleaved;l===null?(i.next=i,Za(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Jd(t,e,i,r),n!==null&&(i=de(),$e(n,t,r,i),wf(n,e,r))}}function vf(t){var e=t.alternate;return t===H||e!==null&&e===H}function yf(t,e){yr=es=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function wf(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,za(t,n)}}var ts={readContext:be,useCallback:oe,useContext:oe,useEffect:oe,useImperativeHandle:oe,useInsertionEffect:oe,useLayoutEffect:oe,useMemo:oe,useReducer:oe,useRef:oe,useState:oe,useDebugValue:oe,useDeferredValue:oe,useTransition:oe,useMutableSource:oe,useSyncExternalStore:oe,useId:oe,unstable_isNewReconciler:!1},vg={readContext:be,useCallback:function(t,e){return We().memoizedState=[t,e===void 0?null:e],t},useContext:be,useEffect:Ru,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ni(4194308,4,df.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ni(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ni(4,2,t,e)},useMemo:function(t,e){var n=We();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=We();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=mg.bind(null,H,t),[r.memoizedState,t]},useRef:function(t){var e=We();return t={current:t},e.memoizedState=t},useState:Pu,useDebugValue:ll,useDeferredValue:function(t){return We().memoizedState=t},useTransition:function(){var t=Pu(!1),e=t[0];return t=pg.bind(null,t[1]),We().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=H,i=We();if(V){if(n===void 0)throw Error(w(407));n=n()}else{if(n=e(),ne===null)throw Error(w(349));an&30||nf(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Ru(sf.bind(null,r,s,t),[t]),r.flags|=2048,$r(9,rf.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=We(),e=ne.identifierPrefix;if(V){var n=st,r=it;n=(r&~(1<<32-Fe(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=zr++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=hg++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},yg={readContext:be,useCallback:hf,useContext:be,useEffect:al,useImperativeHandle:ff,useInsertionEffect:uf,useLayoutEffect:cf,useMemo:pf,useReducer:ao,useRef:lf,useState:function(){return ao(Fr)},useDebugValue:ll,useDeferredValue:function(t){var e=De();return mf(e,J.memoizedState,t)},useTransition:function(){var t=ao(Fr)[0],e=De().memoizedState;return[t,e]},useMutableSource:ef,useSyncExternalStore:tf,useId:gf,unstable_isNewReconciler:!1},wg={readContext:be,useCallback:hf,useContext:be,useEffect:al,useImperativeHandle:ff,useInsertionEffect:uf,useLayoutEffect:cf,useMemo:pf,useReducer:lo,useRef:lf,useState:function(){return lo(Fr)},useDebugValue:ll,useDeferredValue:function(t){var e=De();return J===null?e.memoizedState=t:mf(e,J.memoizedState,t)},useTransition:function(){var t=lo(Fr)[0],e=De().memoizedState;return[t,e]},useMutableSource:ef,useSyncExternalStore:tf,useId:gf,unstable_isNewReconciler:!1};function je(t,e){if(t&&t.defaultProps){e=W({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function na(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:W({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Es={isMounted:function(t){return(t=t._reactInternals)?pn(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=de(),i=Mt(t),s=ut(r,i);s.payload=e,n!=null&&(s.callback=n),e=Dt(t,s,i),e!==null&&($e(e,t,i,r),Ti(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=de(),i=Mt(t),s=ut(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Dt(t,s,i),e!==null&&($e(e,t,i,r),Ti(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=de(),r=Mt(t),i=ut(n,r);i.tag=2,e!=null&&(i.callback=e),e=Dt(t,i,r),e!==null&&($e(e,t,r,n),Ti(e,t,r))}};function Au(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!br(n,r)||!br(i,s):!0}function _f(t,e,n){var r=!1,i=Vt,s=e.contextType;return typeof s=="object"&&s!==null?s=be(s):(i=ye(e)?sn:ue.current,r=e.contextTypes,s=(r=r!=null)?Fn(t,i):Vt),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Es,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Ou(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Es.enqueueReplaceState(e,e.state,null)}function ra(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},el(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=be(s):(s=ye(e)?sn:ue.current,i.context=Fn(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(na(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Es.enqueueReplaceState(i,i.state,null),Xi(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Hn(t,e){try{var n="",r=e;do n+=Gp(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function uo(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ia(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var _g=typeof WeakMap=="function"?WeakMap:Map;function Sf(t,e,n){n=ut(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){rs||(rs=!0,pa=r),ia(t,e)},n}function kf(t,e,n){n=ut(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){ia(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ia(t,e),typeof r!="function"&&(Lt===null?Lt=new Set([this]):Lt.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function bu(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new _g;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Dg.bind(null,t,e,n),e.then(t,t))}function Du(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Lu(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ut(-1,1),e.tag=2,Dt(n,e,1))),n.lanes|=1),t)}var Sg=vt.ReactCurrentOwner,ge=!1;function ce(t,e,n,r){e.child=t===null?Yd(e,null,n,r):Vn(e,t.child,n,r)}function Mu(t,e,n,r,i){n=n.render;var s=e.ref;return Dn(e,i),r=sl(t,e,n,r,s,i),n=ol(),t!==null&&!ge?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,ht(t,e,i)):(V&&n&&Ga(e),e.flags|=1,ce(t,e,r,i),e.child)}function ju(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!gl(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,If(t,e,s,r,i)):(t=Oi(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:br,n(o,r)&&t.ref===e.ref)return ht(t,e,i)}return e.flags|=1,t=jt(s,r),t.ref=e.ref,t.return=e,e.child=t}function If(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(br(s,r)&&t.ref===e.ref)if(ge=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(ge=!0);else return e.lanes=t.lanes,ht(t,e,i)}return sa(t,e,n,r,i)}function Ef(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},U(Pn,ke),ke|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,U(Pn,ke),ke|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,U(Pn,ke),ke|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,U(Pn,ke),ke|=r;return ce(t,e,i,n),e.child}function xf(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function sa(t,e,n,r,i){var s=ye(n)?sn:ue.current;return s=Fn(e,s),Dn(e,i),n=sl(t,e,n,r,s,i),r=ol(),t!==null&&!ge?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,ht(t,e,i)):(V&&r&&Ga(e),e.flags|=1,ce(t,e,n,i),e.child)}function Uu(t,e,n,r,i){if(ye(n)){var s=!0;Gi(e)}else s=!1;if(Dn(e,i),e.stateNode===null)Pi(t,e),_f(e,n,r),ra(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=be(u):(u=ye(n)?sn:ue.current,u=Fn(e,u));var p=n.getDerivedStateFromProps,g=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function";g||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Ou(e,o,r,u),kt=!1;var m=e.memoizedState;o.state=m,Xi(e,r,o,i),l=e.memoizedState,a!==r||m!==l||ve.current||kt?(typeof p=="function"&&(na(e,n,p,r),l=e.memoizedState),(a=kt||Au(e,n,a,r,m,l,u))?(g||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Xd(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:je(e.type,a),o.props=u,g=e.pendingProps,m=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=be(l):(l=ye(n)?sn:ue.current,l=Fn(e,l));var v=n.getDerivedStateFromProps;(p=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==g||m!==l)&&Ou(e,o,r,l),kt=!1,m=e.memoizedState,o.state=m,Xi(e,r,o,i);var _=e.memoizedState;a!==g||m!==_||ve.current||kt?(typeof v=="function"&&(na(e,n,v,r),_=e.memoizedState),(u=kt||Au(e,n,u,r,m,_,l)||!1)?(p||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return oa(t,e,n,r,s,i)}function oa(t,e,n,r,i,s){xf(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Iu(e,n,!1),ht(t,e,s);r=e.stateNode,Sg.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Vn(e,t.child,null,s),e.child=Vn(e,null,a,s)):ce(t,e,a,s),e.memoizedState=r.state,i&&Iu(e,n,!0),e.child}function Tf(t){var e=t.stateNode;e.pendingContext?ku(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ku(t,e.context,!1),tl(t,e.containerInfo)}function zu(t,e,n,r,i){return $n(),Qa(i),e.flags|=256,ce(t,e,n,r),e.child}var aa={dehydrated:null,treeContext:null,retryLane:0};function la(t){return{baseLanes:t,cachePool:null,transitions:null}}function Cf(t,e,n){var r=e.pendingProps,i=B.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),U(B,i&1),t===null)return ea(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Cs(o,r,0,null),t=rn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=la(n),e.memoizedState=aa,t):ul(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return kg(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=jt(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=jt(a,s):(s=rn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?la(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=aa,r}return s=t.child,t=s.sibling,r=jt(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function ul(t,e){return e=Cs({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function gi(t,e,n,r){return r!==null&&Qa(r),Vn(e,t.child,null,n),t=ul(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function kg(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=uo(Error(w(422))),gi(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Cs({mode:"visible",children:r.children},i,0,null),s=rn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Vn(e,t.child,null,o),e.child.memoizedState=la(o),e.memoizedState=aa,s);if(!(e.mode&1))return gi(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(w(419)),r=uo(s,r,void 0),gi(t,e,o,r)}if(a=(o&t.childLanes)!==0,ge||a){if(r=ne,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,ft(t,i),$e(r,t,i,-1))}return ml(),r=uo(Error(w(421))),gi(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Lg.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ie=bt(i.nextSibling),Ee=e,V=!0,ze=null,t!==null&&(Pe[Re++]=it,Pe[Re++]=st,Pe[Re++]=on,it=t.id,st=t.overflow,on=e),e=ul(e,r.children),e.flags|=4096,e)}function Fu(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),ta(t.return,e,n)}function co(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Nf(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ce(t,e,r.children,n),r=B.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Fu(t,n,e);else if(t.tag===19)Fu(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(U(B,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Zi(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),co(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Zi(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}co(e,!0,n,null,s);break;case"together":co(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Pi(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ht(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ln|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(w(153));if(e.child!==null){for(t=e.child,n=jt(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=jt(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Ig(t,e,n){switch(e.tag){case 3:Tf(e),$n();break;case 5:Zd(e);break;case 1:ye(e.type)&&Gi(e);break;case 4:tl(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;U(Yi,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(U(B,B.current&1),e.flags|=128,null):n&e.child.childLanes?Cf(t,e,n):(U(B,B.current&1),t=ht(t,e,n),t!==null?t.sibling:null);U(B,B.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Nf(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),U(B,B.current),r)break;return null;case 22:case 23:return e.lanes=0,Ef(t,e,n)}return ht(t,e,n)}var Pf,ua,Rf,Af;Pf=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ua=function(){};Rf=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Zt(Qe.current);var s=null;switch(n){case"input":i=Ao(t,i),r=Ao(t,r),s=[];break;case"select":i=W({},i,{value:void 0}),r=W({},r,{value:void 0}),s=[];break;case"textarea":i=Do(t,i),r=Do(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Wi)}Mo(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Tr.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Tr.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&F("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Af=function(t,e,n,r){n!==r&&(e.flags|=4)};function or(t,e){if(!V)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ae(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Eg(t,e,n){var r=e.pendingProps;switch(qa(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ae(e),null;case 1:return ye(e.type)&&Ki(),ae(e),null;case 3:return r=e.stateNode,Bn(),$(ve),$(ue),rl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(pi(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ze!==null&&(va(ze),ze=null))),ua(t,e),ae(e),null;case 5:nl(e);var i=Zt(Ur.current);if(n=e.type,t!==null&&e.stateNode!=null)Rf(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(w(166));return ae(e),null}if(t=Zt(Qe.current),pi(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Ke]=e,r[Mr]=s,t=(e.mode&1)!==0,n){case"dialog":F("cancel",r),F("close",r);break;case"iframe":case"object":case"embed":F("load",r);break;case"video":case"audio":for(i=0;i<dr.length;i++)F(dr[i],r);break;case"source":F("error",r);break;case"img":case"image":case"link":F("error",r),F("load",r);break;case"details":F("toggle",r);break;case"input":Ql(r,s),F("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},F("invalid",r);break;case"textarea":Jl(r,s),F("invalid",r)}Mo(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&hi(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&hi(r.textContent,a,t),i=["children",""+a]):Tr.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&F("scroll",r)}switch(n){case"input":si(r),Yl(r,s,!0);break;case"textarea":si(r),Xl(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Wi)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=id(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Ke]=e,t[Mr]=r,Pf(t,e,!1,!1),e.stateNode=t;e:{switch(o=jo(n,r),n){case"dialog":F("cancel",t),F("close",t),i=r;break;case"iframe":case"object":case"embed":F("load",t),i=r;break;case"video":case"audio":for(i=0;i<dr.length;i++)F(dr[i],t);i=r;break;case"source":F("error",t),i=r;break;case"img":case"image":case"link":F("error",t),F("load",t),i=r;break;case"details":F("toggle",t),i=r;break;case"input":Ql(t,r),i=Ao(t,r),F("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=W({},r,{value:void 0}),F("invalid",t);break;case"textarea":Jl(t,r),i=Do(t,r),F("invalid",t);break;default:i=r}Mo(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?ad(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&sd(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Cr(t,l):typeof l=="number"&&Cr(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Tr.hasOwnProperty(s)?l!=null&&s==="onScroll"&&F("scroll",t):l!=null&&ba(t,s,l,o))}switch(n){case"input":si(t),Yl(t,r,!1);break;case"textarea":si(t),Xl(t);break;case"option":r.value!=null&&t.setAttribute("value",""+$t(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Rn(t,!!r.multiple,s,!1):r.defaultValue!=null&&Rn(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Wi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ae(e),null;case 6:if(t&&e.stateNode!=null)Af(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(w(166));if(n=Zt(Ur.current),Zt(Qe.current),pi(e)){if(r=e.stateNode,n=e.memoizedProps,r[Ke]=e,(s=r.nodeValue!==n)&&(t=Ee,t!==null))switch(t.tag){case 3:hi(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&hi(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ke]=e,e.stateNode=r}return ae(e),null;case 13:if($(B),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(V&&Ie!==null&&e.mode&1&&!(e.flags&128))qd(),$n(),e.flags|=98560,s=!1;else if(s=pi(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(w(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(w(317));s[Ke]=e}else $n(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ae(e),s=!1}else ze!==null&&(va(ze),ze=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||B.current&1?X===0&&(X=3):ml())),e.updateQueue!==null&&(e.flags|=4),ae(e),null);case 4:return Bn(),ua(t,e),t===null&&Dr(e.stateNode.containerInfo),ae(e),null;case 10:return Xa(e.type._context),ae(e),null;case 17:return ye(e.type)&&Ki(),ae(e),null;case 19:if($(B),s=e.memoizedState,s===null)return ae(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)or(s,!1);else{if(X!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Zi(t),o!==null){for(e.flags|=128,or(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return U(B,B.current&1|2),e.child}t=t.sibling}s.tail!==null&&q()>Wn&&(e.flags|=128,r=!0,or(s,!1),e.lanes=4194304)}else{if(!r)if(t=Zi(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),or(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!V)return ae(e),null}else 2*q()-s.renderingStartTime>Wn&&n!==1073741824&&(e.flags|=128,r=!0,or(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=q(),e.sibling=null,n=B.current,U(B,r?n&1|2:n&1),e):(ae(e),null);case 22:case 23:return pl(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?ke&1073741824&&(ae(e),e.subtreeFlags&6&&(e.flags|=8192)):ae(e),null;case 24:return null;case 25:return null}throw Error(w(156,e.tag))}function xg(t,e){switch(qa(e),e.tag){case 1:return ye(e.type)&&Ki(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Bn(),$(ve),$(ue),rl(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return nl(e),null;case 13:if($(B),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(w(340));$n()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return $(B),null;case 4:return Bn(),null;case 10:return Xa(e.type._context),null;case 22:case 23:return pl(),null;case 24:return null;default:return null}}var vi=!1,le=!1,Tg=typeof WeakSet=="function"?WeakSet:Set,I=null;function Nn(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){K(t,e,r)}else n.current=null}function ca(t,e,n){try{n()}catch(r){K(t,e,r)}}var $u=!1;function Cg(t,e){if(Go=Vi,t=Ld(),Ka(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,p=0,g=t,m=null;t:for(;;){for(var v;g!==n||i!==0&&g.nodeType!==3||(a=o+i),g!==s||r!==0&&g.nodeType!==3||(l=o+r),g.nodeType===3&&(o+=g.nodeValue.length),(v=g.firstChild)!==null;)m=g,g=v;for(;;){if(g===t)break t;if(m===n&&++u===i&&(a=o),m===s&&++p===r&&(l=o),(v=g.nextSibling)!==null)break;g=m,m=g.parentNode}g=v}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(qo={focusedElem:t,selectionRange:n},Vi=!1,I=e;I!==null;)if(e=I,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,I=t;else for(;I!==null;){e=I;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var S=_.memoizedProps,L=_.memoizedState,h=e.stateNode,c=h.getSnapshotBeforeUpdate(e.elementType===e.type?S:je(e.type,S),L);h.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var f=e.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(y){K(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,I=t;break}I=e.return}return _=$u,$u=!1,_}function wr(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&ca(e,n,s)}i=i.next}while(i!==r)}}function xs(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function da(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Of(t){var e=t.alternate;e!==null&&(t.alternate=null,Of(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ke],delete e[Mr],delete e[Jo],delete e[ug],delete e[cg])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function bf(t){return t.tag===5||t.tag===3||t.tag===4}function Vu(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||bf(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function fa(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Wi));else if(r!==4&&(t=t.child,t!==null))for(fa(t,e,n),t=t.sibling;t!==null;)fa(t,e,n),t=t.sibling}function ha(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(ha(t,e,n),t=t.sibling;t!==null;)ha(t,e,n),t=t.sibling}var re=null,Ue=!1;function wt(t,e,n){for(n=n.child;n!==null;)Df(t,e,n),n=n.sibling}function Df(t,e,n){if(qe&&typeof qe.onCommitFiberUnmount=="function")try{qe.onCommitFiberUnmount(vs,n)}catch{}switch(n.tag){case 5:le||Nn(n,e);case 6:var r=re,i=Ue;re=null,wt(t,e,n),re=r,Ue=i,re!==null&&(Ue?(t=re,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):re.removeChild(n.stateNode));break;case 18:re!==null&&(Ue?(t=re,n=n.stateNode,t.nodeType===8?ro(t.parentNode,n):t.nodeType===1&&ro(t,n),Ar(t)):ro(re,n.stateNode));break;case 4:r=re,i=Ue,re=n.stateNode.containerInfo,Ue=!0,wt(t,e,n),re=r,Ue=i;break;case 0:case 11:case 14:case 15:if(!le&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&ca(n,e,o),i=i.next}while(i!==r)}wt(t,e,n);break;case 1:if(!le&&(Nn(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){K(n,e,a)}wt(t,e,n);break;case 21:wt(t,e,n);break;case 22:n.mode&1?(le=(r=le)||n.memoizedState!==null,wt(t,e,n),le=r):wt(t,e,n);break;default:wt(t,e,n)}}function Bu(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Tg),e.forEach(function(r){var i=Mg.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Me(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:re=a.stateNode,Ue=!1;break e;case 3:re=a.stateNode.containerInfo,Ue=!0;break e;case 4:re=a.stateNode.containerInfo,Ue=!0;break e}a=a.return}if(re===null)throw Error(w(160));Df(s,o,i),re=null,Ue=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){K(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Lf(e,t),e=e.sibling}function Lf(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Me(e,t),He(t),r&4){try{wr(3,t,t.return),xs(3,t)}catch(S){K(t,t.return,S)}try{wr(5,t,t.return)}catch(S){K(t,t.return,S)}}break;case 1:Me(e,t),He(t),r&512&&n!==null&&Nn(n,n.return);break;case 5:if(Me(e,t),He(t),r&512&&n!==null&&Nn(n,n.return),t.flags&32){var i=t.stateNode;try{Cr(i,"")}catch(S){K(t,t.return,S)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&nd(i,s),jo(a,o);var u=jo(a,s);for(o=0;o<l.length;o+=2){var p=l[o],g=l[o+1];p==="style"?ad(i,g):p==="dangerouslySetInnerHTML"?sd(i,g):p==="children"?Cr(i,g):ba(i,p,g,u)}switch(a){case"input":Oo(i,s);break;case"textarea":rd(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?Rn(i,!!s.multiple,v,!1):m!==!!s.multiple&&(s.defaultValue!=null?Rn(i,!!s.multiple,s.defaultValue,!0):Rn(i,!!s.multiple,s.multiple?[]:"",!1))}i[Mr]=s}catch(S){K(t,t.return,S)}}break;case 6:if(Me(e,t),He(t),r&4){if(t.stateNode===null)throw Error(w(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(S){K(t,t.return,S)}}break;case 3:if(Me(e,t),He(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ar(e.containerInfo)}catch(S){K(t,t.return,S)}break;case 4:Me(e,t),He(t);break;case 13:Me(e,t),He(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(fl=q())),r&4&&Bu(t);break;case 22:if(p=n!==null&&n.memoizedState!==null,t.mode&1?(le=(u=le)||p,Me(e,t),le=u):Me(e,t),He(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!p&&t.mode&1)for(I=t,p=t.child;p!==null;){for(g=I=p;I!==null;){switch(m=I,v=m.child,m.tag){case 0:case 11:case 14:case 15:wr(4,m,m.return);break;case 1:Nn(m,m.return);var _=m.stateNode;if(typeof _.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(S){K(r,n,S)}}break;case 5:Nn(m,m.return);break;case 22:if(m.memoizedState!==null){Wu(g);continue}}v!==null?(v.return=m,I=v):Wu(g)}p=p.sibling}e:for(p=null,g=t;;){if(g.tag===5){if(p===null){p=g;try{i=g.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=g.stateNode,l=g.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=od("display",o))}catch(S){K(t,t.return,S)}}}else if(g.tag===6){if(p===null)try{g.stateNode.nodeValue=u?"":g.memoizedProps}catch(S){K(t,t.return,S)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===t)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===t)break e;for(;g.sibling===null;){if(g.return===null||g.return===t)break e;p===g&&(p=null),g=g.return}p===g&&(p=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Me(e,t),He(t),r&4&&Bu(t);break;case 21:break;default:Me(e,t),He(t)}}function He(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(bf(n)){var r=n;break e}n=n.return}throw Error(w(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Cr(i,""),r.flags&=-33);var s=Vu(t);ha(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Vu(t);fa(t,a,o);break;default:throw Error(w(161))}}catch(l){K(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Ng(t,e,n){I=t,Mf(t)}function Mf(t,e,n){for(var r=(t.mode&1)!==0;I!==null;){var i=I,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||vi;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||le;a=vi;var u=le;if(vi=o,(le=l)&&!u)for(I=i;I!==null;)o=I,l=o.child,o.tag===22&&o.memoizedState!==null?Ku(i):l!==null?(l.return=o,I=l):Ku(i);for(;s!==null;)I=s,Mf(s),s=s.sibling;I=i,vi=a,le=u}Hu(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,I=s):Hu(t)}}function Hu(t){for(;I!==null;){var e=I;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:le||xs(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!le)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:je(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Nu(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Nu(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var g=p.dehydrated;g!==null&&Ar(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}le||e.flags&512&&da(e)}catch(m){K(e,e.return,m)}}if(e===t){I=null;break}if(n=e.sibling,n!==null){n.return=e.return,I=n;break}I=e.return}}function Wu(t){for(;I!==null;){var e=I;if(e===t){I=null;break}var n=e.sibling;if(n!==null){n.return=e.return,I=n;break}I=e.return}}function Ku(t){for(;I!==null;){var e=I;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{xs(4,e)}catch(l){K(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){K(e,i,l)}}var s=e.return;try{da(e)}catch(l){K(e,s,l)}break;case 5:var o=e.return;try{da(e)}catch(l){K(e,o,l)}}}catch(l){K(e,e.return,l)}if(e===t){I=null;break}var a=e.sibling;if(a!==null){a.return=e.return,I=a;break}I=e.return}}var Pg=Math.ceil,ns=vt.ReactCurrentDispatcher,cl=vt.ReactCurrentOwner,Oe=vt.ReactCurrentBatchConfig,b=0,ne=null,Y=null,ie=0,ke=0,Pn=Ht(0),X=0,Vr=null,ln=0,Ts=0,dl=0,_r=null,me=null,fl=0,Wn=1/0,tt=null,rs=!1,pa=null,Lt=null,yi=!1,Pt=null,is=0,Sr=0,ma=null,Ri=-1,Ai=0;function de(){return b&6?q():Ri!==-1?Ri:Ri=q()}function Mt(t){return t.mode&1?b&2&&ie!==0?ie&-ie:fg.transition!==null?(Ai===0&&(Ai=wd()),Ai):(t=M,t!==0||(t=window.event,t=t===void 0?16:Td(t.type)),t):1}function $e(t,e,n,r){if(50<Sr)throw Sr=0,ma=null,Error(w(185));Gr(t,n,r),(!(b&2)||t!==ne)&&(t===ne&&(!(b&2)&&(Ts|=n),X===4&&Et(t,ie)),we(t,r),n===1&&b===0&&!(e.mode&1)&&(Wn=q()+500,ks&&Wt()))}function we(t,e){var n=t.callbackNode;fm(t,e);var r=$i(t,t===ne?ie:0);if(r===0)n!==null&&tu(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&tu(n),e===1)t.tag===0?dg(Gu.bind(null,t)):Wd(Gu.bind(null,t)),ag(function(){!(b&6)&&Wt()}),n=null;else{switch(_d(r)){case 1:n=Ua;break;case 4:n=vd;break;case 16:n=Fi;break;case 536870912:n=yd;break;default:n=Fi}n=Hf(n,jf.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function jf(t,e){if(Ri=-1,Ai=0,b&6)throw Error(w(327));var n=t.callbackNode;if(Ln()&&t.callbackNode!==n)return null;var r=$i(t,t===ne?ie:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ss(t,r);else{e=r;var i=b;b|=2;var s=zf();(ne!==t||ie!==e)&&(tt=null,Wn=q()+500,nn(t,e));do try{Og();break}catch(a){Uf(t,a)}while(!0);Ja(),ns.current=s,b=i,Y!==null?e=0:(ne=null,ie=0,e=X)}if(e!==0){if(e===2&&(i=Vo(t),i!==0&&(r=i,e=ga(t,i))),e===1)throw n=Vr,nn(t,0),Et(t,r),we(t,q()),n;if(e===6)Et(t,r);else{if(i=t.current.alternate,!(r&30)&&!Rg(i)&&(e=ss(t,r),e===2&&(s=Vo(t),s!==0&&(r=s,e=ga(t,s))),e===1))throw n=Vr,nn(t,0),Et(t,r),we(t,q()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(w(345));case 2:Qt(t,me,tt);break;case 3:if(Et(t,r),(r&130023424)===r&&(e=fl+500-q(),10<e)){if($i(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){de(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Yo(Qt.bind(null,t,me,tt),e);break}Qt(t,me,tt);break;case 4:if(Et(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Fe(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Pg(r/1960))-r,10<r){t.timeoutHandle=Yo(Qt.bind(null,t,me,tt),r);break}Qt(t,me,tt);break;case 5:Qt(t,me,tt);break;default:throw Error(w(329))}}}return we(t,q()),t.callbackNode===n?jf.bind(null,t):null}function ga(t,e){var n=_r;return t.current.memoizedState.isDehydrated&&(nn(t,e).flags|=256),t=ss(t,e),t!==2&&(e=me,me=n,e!==null&&va(e)),t}function va(t){me===null?me=t:me.push.apply(me,t)}function Rg(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Ve(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Et(t,e){for(e&=~dl,e&=~Ts,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Fe(e),r=1<<n;t[n]=-1,e&=~r}}function Gu(t){if(b&6)throw Error(w(327));Ln();var e=$i(t,0);if(!(e&1))return we(t,q()),null;var n=ss(t,e);if(t.tag!==0&&n===2){var r=Vo(t);r!==0&&(e=r,n=ga(t,r))}if(n===1)throw n=Vr,nn(t,0),Et(t,e),we(t,q()),n;if(n===6)throw Error(w(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Qt(t,me,tt),we(t,q()),null}function hl(t,e){var n=b;b|=1;try{return t(e)}finally{b=n,b===0&&(Wn=q()+500,ks&&Wt())}}function un(t){Pt!==null&&Pt.tag===0&&!(b&6)&&Ln();var e=b;b|=1;var n=Oe.transition,r=M;try{if(Oe.transition=null,M=1,t)return t()}finally{M=r,Oe.transition=n,b=e,!(b&6)&&Wt()}}function pl(){ke=Pn.current,$(Pn)}function nn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,og(n)),Y!==null)for(n=Y.return;n!==null;){var r=n;switch(qa(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ki();break;case 3:Bn(),$(ve),$(ue),rl();break;case 5:nl(r);break;case 4:Bn();break;case 13:$(B);break;case 19:$(B);break;case 10:Xa(r.type._context);break;case 22:case 23:pl()}n=n.return}if(ne=t,Y=t=jt(t.current,null),ie=ke=e,X=0,Vr=null,dl=Ts=ln=0,me=_r=null,Xt!==null){for(e=0;e<Xt.length;e++)if(n=Xt[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Xt=null}return t}function Uf(t,e){do{var n=Y;try{if(Ja(),Ci.current=ts,es){for(var r=H.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}es=!1}if(an=0,te=J=H=null,yr=!1,zr=0,cl.current=null,n===null||n.return===null){X=1,Vr=e,Y=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=ie,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,p=a,g=p.tag;if(!(p.mode&1)&&(g===0||g===11||g===15)){var m=p.alternate;m?(p.updateQueue=m.updateQueue,p.memoizedState=m.memoizedState,p.lanes=m.lanes):(p.updateQueue=null,p.memoizedState=null)}var v=Du(o);if(v!==null){v.flags&=-257,Lu(v,o,a,s,e),v.mode&1&&bu(s,u,e),e=v,l=u;var _=e.updateQueue;if(_===null){var S=new Set;S.add(l),e.updateQueue=S}else _.add(l);break e}else{if(!(e&1)){bu(s,u,e),ml();break e}l=Error(w(426))}}else if(V&&a.mode&1){var L=Du(o);if(L!==null){!(L.flags&65536)&&(L.flags|=256),Lu(L,o,a,s,e),Qa(Hn(l,a));break e}}s=l=Hn(l,a),X!==4&&(X=2),_r===null?_r=[s]:_r.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=Sf(s,l,e);Cu(s,h);break e;case 1:a=l;var c=s.type,f=s.stateNode;if(!(s.flags&128)&&(typeof c.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Lt===null||!Lt.has(f)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=kf(s,a,e);Cu(s,y);break e}}s=s.return}while(s!==null)}$f(n)}catch(k){e=k,Y===n&&n!==null&&(Y=n=n.return);continue}break}while(!0)}function zf(){var t=ns.current;return ns.current=ts,t===null?ts:t}function ml(){(X===0||X===3||X===2)&&(X=4),ne===null||!(ln&268435455)&&!(Ts&268435455)||Et(ne,ie)}function ss(t,e){var n=b;b|=2;var r=zf();(ne!==t||ie!==e)&&(tt=null,nn(t,e));do try{Ag();break}catch(i){Uf(t,i)}while(!0);if(Ja(),b=n,ns.current=r,Y!==null)throw Error(w(261));return ne=null,ie=0,X}function Ag(){for(;Y!==null;)Ff(Y)}function Og(){for(;Y!==null&&!rm();)Ff(Y)}function Ff(t){var e=Bf(t.alternate,t,ke);t.memoizedProps=t.pendingProps,e===null?$f(t):Y=e,cl.current=null}function $f(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=xg(n,e),n!==null){n.flags&=32767,Y=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{X=6,Y=null;return}}else if(n=Eg(n,e,ke),n!==null){Y=n;return}if(e=e.sibling,e!==null){Y=e;return}Y=e=t}while(e!==null);X===0&&(X=5)}function Qt(t,e,n){var r=M,i=Oe.transition;try{Oe.transition=null,M=1,bg(t,e,n,r)}finally{Oe.transition=i,M=r}return null}function bg(t,e,n,r){do Ln();while(Pt!==null);if(b&6)throw Error(w(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(w(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(hm(t,s),t===ne&&(Y=ne=null,ie=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||yi||(yi=!0,Hf(Fi,function(){return Ln(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Oe.transition,Oe.transition=null;var o=M;M=1;var a=b;b|=4,cl.current=null,Cg(t,n),Lf(n,t),Zm(qo),Vi=!!Go,qo=Go=null,t.current=n,Ng(n),im(),b=a,M=o,Oe.transition=s}else t.current=n;if(yi&&(yi=!1,Pt=t,is=i),s=t.pendingLanes,s===0&&(Lt=null),am(n.stateNode),we(t,q()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(rs)throw rs=!1,t=pa,pa=null,t;return is&1&&t.tag!==0&&Ln(),s=t.pendingLanes,s&1?t===ma?Sr++:(Sr=0,ma=t):Sr=0,Wt(),null}function Ln(){if(Pt!==null){var t=_d(is),e=Oe.transition,n=M;try{if(Oe.transition=null,M=16>t?16:t,Pt===null)var r=!1;else{if(t=Pt,Pt=null,is=0,b&6)throw Error(w(331));var i=b;for(b|=4,I=t.current;I!==null;){var s=I,o=s.child;if(I.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(I=u;I!==null;){var p=I;switch(p.tag){case 0:case 11:case 15:wr(8,p,s)}var g=p.child;if(g!==null)g.return=p,I=g;else for(;I!==null;){p=I;var m=p.sibling,v=p.return;if(Of(p),p===u){I=null;break}if(m!==null){m.return=v,I=m;break}I=v}}}var _=s.alternate;if(_!==null){var S=_.child;if(S!==null){_.child=null;do{var L=S.sibling;S.sibling=null,S=L}while(S!==null)}}I=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,I=o;else e:for(;I!==null;){if(s=I,s.flags&2048)switch(s.tag){case 0:case 11:case 15:wr(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,I=h;break e}I=s.return}}var c=t.current;for(I=c;I!==null;){o=I;var f=o.child;if(o.subtreeFlags&2064&&f!==null)f.return=o,I=f;else e:for(o=c;I!==null;){if(a=I,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:xs(9,a)}}catch(k){K(a,a.return,k)}if(a===o){I=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,I=y;break e}I=a.return}}if(b=i,Wt(),qe&&typeof qe.onPostCommitFiberRoot=="function")try{qe.onPostCommitFiberRoot(vs,t)}catch{}r=!0}return r}finally{M=n,Oe.transition=e}}return!1}function qu(t,e,n){e=Hn(n,e),e=Sf(t,e,1),t=Dt(t,e,1),e=de(),t!==null&&(Gr(t,1,e),we(t,e))}function K(t,e,n){if(t.tag===3)qu(t,t,n);else for(;e!==null;){if(e.tag===3){qu(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Lt===null||!Lt.has(r))){t=Hn(n,t),t=kf(e,t,1),e=Dt(e,t,1),t=de(),e!==null&&(Gr(e,1,t),we(e,t));break}}e=e.return}}function Dg(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=de(),t.pingedLanes|=t.suspendedLanes&n,ne===t&&(ie&n)===n&&(X===4||X===3&&(ie&130023424)===ie&&500>q()-fl?nn(t,0):dl|=n),we(t,e)}function Vf(t,e){e===0&&(t.mode&1?(e=li,li<<=1,!(li&130023424)&&(li=4194304)):e=1);var n=de();t=ft(t,e),t!==null&&(Gr(t,e,n),we(t,n))}function Lg(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Vf(t,n)}function Mg(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(e),Vf(t,n)}var Bf;Bf=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ve.current)ge=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ge=!1,Ig(t,e,n);ge=!!(t.flags&131072)}else ge=!1,V&&e.flags&1048576&&Kd(e,Qi,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Pi(t,e),t=e.pendingProps;var i=Fn(e,ue.current);Dn(e,n),i=sl(null,e,r,t,i,n);var s=ol();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ye(r)?(s=!0,Gi(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,el(e),i.updater=Es,e.stateNode=i,i._reactInternals=e,ra(e,r,t,n),e=oa(null,e,r,!0,s,n)):(e.tag=0,V&&s&&Ga(e),ce(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Pi(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Ug(r),t=je(r,t),i){case 0:e=sa(null,e,r,t,n);break e;case 1:e=Uu(null,e,r,t,n);break e;case 11:e=Mu(null,e,r,t,n);break e;case 14:e=ju(null,e,r,je(r.type,t),n);break e}throw Error(w(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:je(r,i),sa(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:je(r,i),Uu(t,e,r,i,n);case 3:e:{if(Tf(e),t===null)throw Error(w(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Xd(t,e),Xi(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Hn(Error(w(423)),e),e=zu(t,e,r,n,i);break e}else if(r!==i){i=Hn(Error(w(424)),e),e=zu(t,e,r,n,i);break e}else for(Ie=bt(e.stateNode.containerInfo.firstChild),Ee=e,V=!0,ze=null,n=Yd(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if($n(),r===i){e=ht(t,e,n);break e}ce(t,e,r,n)}e=e.child}return e;case 5:return Zd(e),t===null&&ea(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Qo(r,i)?o=null:s!==null&&Qo(r,s)&&(e.flags|=32),xf(t,e),ce(t,e,o,n),e.child;case 6:return t===null&&ea(e),null;case 13:return Cf(t,e,n);case 4:return tl(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Vn(e,null,r,n):ce(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:je(r,i),Mu(t,e,r,i,n);case 7:return ce(t,e,e.pendingProps,n),e.child;case 8:return ce(t,e,e.pendingProps.children,n),e.child;case 12:return ce(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,U(Yi,r._currentValue),r._currentValue=o,s!==null)if(Ve(s.value,o)){if(s.children===i.children&&!ve.current){e=ht(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=ut(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?l.next=l:(l.next=p.next,p.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),ta(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(w(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ta(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ce(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Dn(e,n),i=be(i),r=r(i),e.flags|=1,ce(t,e,r,n),e.child;case 14:return r=e.type,i=je(r,e.pendingProps),i=je(r.type,i),ju(t,e,r,i,n);case 15:return If(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:je(r,i),Pi(t,e),e.tag=1,ye(r)?(t=!0,Gi(e)):t=!1,Dn(e,n),_f(e,r,i),ra(e,r,i,n),oa(null,e,r,!0,t,n);case 19:return Nf(t,e,n);case 22:return Ef(t,e,n)}throw Error(w(156,e.tag))};function Hf(t,e){return gd(t,e)}function jg(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ae(t,e,n,r){return new jg(t,e,n,r)}function gl(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ug(t){if(typeof t=="function")return gl(t)?1:0;if(t!=null){if(t=t.$$typeof,t===La)return 11;if(t===Ma)return 14}return 2}function jt(t,e){var n=t.alternate;return n===null?(n=Ae(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Oi(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")gl(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case wn:return rn(n.children,i,s,e);case Da:o=8,i|=8;break;case Co:return t=Ae(12,n,e,i|2),t.elementType=Co,t.lanes=s,t;case No:return t=Ae(13,n,e,i),t.elementType=No,t.lanes=s,t;case Po:return t=Ae(19,n,e,i),t.elementType=Po,t.lanes=s,t;case Zc:return Cs(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Jc:o=10;break e;case Xc:o=9;break e;case La:o=11;break e;case Ma:o=14;break e;case St:o=16,r=null;break e}throw Error(w(130,t==null?t:typeof t,""))}return e=Ae(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function rn(t,e,n,r){return t=Ae(7,t,r,e),t.lanes=n,t}function Cs(t,e,n,r){return t=Ae(22,t,r,e),t.elementType=Zc,t.lanes=n,t.stateNode={isHidden:!1},t}function fo(t,e,n){return t=Ae(6,t,null,e),t.lanes=n,t}function ho(t,e,n){return e=Ae(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function zg(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ks(0),this.expirationTimes=Ks(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ks(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function vl(t,e,n,r,i,s,o,a,l){return t=new zg(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ae(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},el(s),t}function Fg(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:yn,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Wf(t){if(!t)return Vt;t=t._reactInternals;e:{if(pn(t)!==t||t.tag!==1)throw Error(w(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ye(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(w(171))}if(t.tag===1){var n=t.type;if(ye(n))return Hd(t,n,e)}return e}function Kf(t,e,n,r,i,s,o,a,l){return t=vl(n,r,!0,t,i,s,o,a,l),t.context=Wf(null),n=t.current,r=de(),i=Mt(n),s=ut(r,i),s.callback=e??null,Dt(n,s,i),t.current.lanes=i,Gr(t,i,r),we(t,r),t}function Ns(t,e,n,r){var i=e.current,s=de(),o=Mt(i);return n=Wf(n),e.context===null?e.context=n:e.pendingContext=n,e=ut(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Dt(i,e,o),t!==null&&($e(t,i,o,s),Ti(t,i,o)),o}function os(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Qu(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function yl(t,e){Qu(t,e),(t=t.alternate)&&Qu(t,e)}function $g(){return null}var Gf=typeof reportError=="function"?reportError:function(t){console.error(t)};function wl(t){this._internalRoot=t}Ps.prototype.render=wl.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(w(409));Ns(t,e,null,null)};Ps.prototype.unmount=wl.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;un(function(){Ns(null,t,null,null)}),e[dt]=null}};function Ps(t){this._internalRoot=t}Ps.prototype.unstable_scheduleHydration=function(t){if(t){var e=Id();t={blockedOn:null,target:t,priority:e};for(var n=0;n<It.length&&e!==0&&e<It[n].priority;n++);It.splice(n,0,t),n===0&&xd(t)}};function _l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Rs(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Yu(){}function Vg(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=os(o);s.call(u)}}var o=Kf(e,r,t,0,null,!1,!1,"",Yu);return t._reactRootContainer=o,t[dt]=o.current,Dr(t.nodeType===8?t.parentNode:t),un(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=os(l);a.call(u)}}var l=vl(t,0,!1,null,null,!1,!1,"",Yu);return t._reactRootContainer=l,t[dt]=l.current,Dr(t.nodeType===8?t.parentNode:t),un(function(){Ns(e,l,n,r)}),l}function As(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=os(o);a.call(l)}}Ns(e,o,t,i)}else o=Vg(n,e,t,i,r);return os(o)}Sd=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=cr(e.pendingLanes);n!==0&&(za(e,n|1),we(e,q()),!(b&6)&&(Wn=q()+500,Wt()))}break;case 13:un(function(){var r=ft(t,1);if(r!==null){var i=de();$e(r,t,1,i)}}),yl(t,1)}};Fa=function(t){if(t.tag===13){var e=ft(t,134217728);if(e!==null){var n=de();$e(e,t,134217728,n)}yl(t,134217728)}};kd=function(t){if(t.tag===13){var e=Mt(t),n=ft(t,e);if(n!==null){var r=de();$e(n,t,e,r)}yl(t,e)}};Id=function(){return M};Ed=function(t,e){var n=M;try{return M=t,e()}finally{M=n}};zo=function(t,e,n){switch(e){case"input":if(Oo(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Ss(r);if(!i)throw Error(w(90));td(r),Oo(r,i)}}}break;case"textarea":rd(t,n);break;case"select":e=n.value,e!=null&&Rn(t,!!n.multiple,e,!1)}};cd=hl;dd=un;var Bg={usingClientEntryPoint:!1,Events:[Qr,In,Ss,ld,ud,hl]},ar={findFiberByHostInstance:Jt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Hg={bundleType:ar.bundleType,version:ar.version,rendererPackageName:ar.rendererPackageName,rendererConfig:ar.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:vt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=pd(t),t===null?null:t.stateNode},findFiberByHostInstance:ar.findFiberByHostInstance||$g,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wi.isDisabled&&wi.supportsFiber)try{vs=wi.inject(Hg),qe=wi}catch{}}Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bg;Ce.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_l(e))throw Error(w(200));return Fg(t,e,null,n)};Ce.createRoot=function(t,e){if(!_l(t))throw Error(w(299));var n=!1,r="",i=Gf;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=vl(t,1,!1,null,null,n,!1,r,i),t[dt]=e.current,Dr(t.nodeType===8?t.parentNode:t),new wl(e)};Ce.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(w(188)):(t=Object.keys(t).join(","),Error(w(268,t)));return t=pd(e),t=t===null?null:t.stateNode,t};Ce.flushSync=function(t){return un(t)};Ce.hydrate=function(t,e,n){if(!Rs(e))throw Error(w(200));return As(null,t,e,!0,n)};Ce.hydrateRoot=function(t,e,n){if(!_l(t))throw Error(w(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Gf;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Kf(e,null,t,1,n??null,i,!1,s,o),t[dt]=e.current,Dr(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Ps(e)};Ce.render=function(t,e,n){if(!Rs(e))throw Error(w(200));return As(null,t,e,!1,n)};Ce.unmountComponentAtNode=function(t){if(!Rs(t))throw Error(w(40));return t._reactRootContainer?(un(function(){As(null,null,t,!1,function(){t._reactRootContainer=null,t[dt]=null})}),!0):!1};Ce.unstable_batchedUpdates=hl;Ce.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Rs(n))throw Error(w(200));if(t==null||t._reactInternals===void 0)throw Error(w(38));return As(t,e,n,!1,r)};Ce.version="18.3.1-next-f1338f8080-20240426";function qf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qf)}catch(t){console.error(t)}}qf(),Gc.exports=Ce;var Wg=Gc.exports,Ju=Wg;xo.createRoot=Ju.createRoot,xo.hydrateRoot=Ju.hydrateRoot;var Xu={};/**
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
 */const Qf=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Kg=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Yf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,p=s>>2,g=(s&3)<<4|a>>4;let m=(a&15)<<2|u>>6,v=u&63;l||(v=64,o||(m=64)),r.push(n[p],n[g],n[m],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Qf(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Kg(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const g=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||g==null)throw new Gg;const m=s<<2|a>>4;if(r.push(m),u!==64){const v=a<<4&240|u>>2;if(r.push(v),g!==64){const _=u<<6&192|g;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Gg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const qg=function(t){const e=Qf(t);return Yf.encodeByteArray(e,!0)},Jf=function(t){return qg(t).replace(/\./g,"")},Xf=function(t){try{return Yf.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Qg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Yg=()=>Qg().__FIREBASE_DEFAULTS__,Jg=()=>{if(typeof process>"u"||typeof Xu>"u")return;const t=Xu.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Xg=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Xf(t[1]);return e&&JSON.parse(e)},Sl=()=>{try{return Yg()||Jg()||Xg()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Zg=t=>{var e,n;return(n=(e=Sl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Zf=()=>{var t;return(t=Sl())===null||t===void 0?void 0:t.config},eh=t=>{var e;return(e=Sl())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class ev{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function fe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function tv(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(fe())}function nv(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function th(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function rv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function iv(){const t=fe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function nh(){try{return typeof indexedDB=="object"}catch{return!1}}function rh(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function sv(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const ov="FirebaseError";class Ze extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ov,Object.setPrototypeOf(this,Ze.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,mn.prototype.create)}}class mn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?av(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Ze(i,a,r)}}function av(t,e){return t.replace(lv,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const lv=/\{\$([^}]+)}/g;function uv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Br(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Zu(s)&&Zu(o)){if(!Br(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Zu(t){return t!==null&&typeof t=="object"}/**
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
 */function Yn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function cv(t,e){const n=new dv(t,e);return n.subscribe.bind(n)}class dv{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");fv(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=po),i.error===void 0&&(i.error=po),i.complete===void 0&&(i.complete=po);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function fv(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function po(){}/**
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
 */const hv=1e3,pv=2,mv=4*60*60*1e3,gv=.5;function ec(t,e=hv,n=pv){const r=e*Math.pow(n,t),i=Math.round(gv*r*(Math.random()-.5)*2);return Math.min(mv,r+i)}/**
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
 */function Be(t){return t&&t._delegate?t._delegate:t}class Je{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Yt="[DEFAULT]";/**
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
 */class vv{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ev;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(wv(e))try{this.getOrInitializeService({instanceIdentifier:Yt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Yt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Yt){return this.instances.has(e)}getOptions(e=Yt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:yv(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Yt){return this.component?this.component.multipleInstances?e:Yt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function yv(t){return t===Yt?void 0:t}function wv(t){return t.instantiationMode==="EAGER"}/**
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
 */class _v{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new vv(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var j;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(j||(j={}));const Sv={debug:j.DEBUG,verbose:j.VERBOSE,info:j.INFO,warn:j.WARN,error:j.ERROR,silent:j.SILENT},kv=j.INFO,Iv={[j.DEBUG]:"log",[j.VERBOSE]:"log",[j.INFO]:"info",[j.WARN]:"warn",[j.ERROR]:"error"},Ev=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Iv[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class kl{constructor(e){this.name=e,this._logLevel=kv,this._logHandler=Ev,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in j))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Sv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,j.DEBUG,...e),this._logHandler(this,j.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,j.VERBOSE,...e),this._logHandler(this,j.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,j.INFO,...e),this._logHandler(this,j.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,j.WARN,...e),this._logHandler(this,j.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,j.ERROR,...e),this._logHandler(this,j.ERROR,...e)}}const xv=(t,e)=>e.some(n=>t instanceof n);let tc,nc;function Tv(){return tc||(tc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Cv(){return nc||(nc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ih=new WeakMap,ya=new WeakMap,sh=new WeakMap,mo=new WeakMap,Il=new WeakMap;function Nv(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Ut(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ih.set(n,t)}).catch(()=>{}),Il.set(e,t),e}function Pv(t){if(ya.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});ya.set(t,e)}let wa={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ya.get(t);if(e==="objectStoreNames")return t.objectStoreNames||sh.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ut(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Rv(t){wa=t(wa)}function Av(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(go(this),e,...n);return sh.set(r,e.sort?e.sort():[e]),Ut(r)}:Cv().includes(t)?function(...e){return t.apply(go(this),e),Ut(ih.get(this))}:function(...e){return Ut(t.apply(go(this),e))}}function Ov(t){return typeof t=="function"?Av(t):(t instanceof IDBTransaction&&Pv(t),xv(t,Tv())?new Proxy(t,wa):t)}function Ut(t){if(t instanceof IDBRequest)return Nv(t);if(mo.has(t))return mo.get(t);const e=Ov(t);return e!==t&&(mo.set(t,e),Il.set(e,t)),e}const go=t=>Il.get(t);function oh(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Ut(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Ut(o.result),l.oldVersion,l.newVersion,Ut(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const bv=["get","getKey","getAll","getAllKeys","count"],Dv=["put","add","delete","clear"],vo=new Map;function rc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(vo.get(e))return vo.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Dv.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||bv.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return vo.set(e,s),s}Rv(t=>({...t,get:(e,n,r)=>rc(e,n)||t.get(e,n,r),has:(e,n)=>!!rc(e,n)||t.has(e,n)}));/**
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
 */class Lv{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Mv(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Mv(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const _a="@firebase/app",ic="0.10.13";/**
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
 */const pt=new kl("@firebase/app"),jv="@firebase/app-compat",Uv="@firebase/analytics-compat",zv="@firebase/analytics",Fv="@firebase/app-check-compat",$v="@firebase/app-check",Vv="@firebase/auth",Bv="@firebase/auth-compat",Hv="@firebase/database",Wv="@firebase/data-connect",Kv="@firebase/database-compat",Gv="@firebase/functions",qv="@firebase/functions-compat",Qv="@firebase/installations",Yv="@firebase/installations-compat",Jv="@firebase/messaging",Xv="@firebase/messaging-compat",Zv="@firebase/performance",ey="@firebase/performance-compat",ty="@firebase/remote-config",ny="@firebase/remote-config-compat",ry="@firebase/storage",iy="@firebase/storage-compat",sy="@firebase/firestore",oy="@firebase/vertexai-preview",ay="@firebase/firestore-compat",ly="firebase",uy="10.14.1";/**
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
 */const Sa="[DEFAULT]",cy={[_a]:"fire-core",[jv]:"fire-core-compat",[zv]:"fire-analytics",[Uv]:"fire-analytics-compat",[$v]:"fire-app-check",[Fv]:"fire-app-check-compat",[Vv]:"fire-auth",[Bv]:"fire-auth-compat",[Hv]:"fire-rtdb",[Wv]:"fire-data-connect",[Kv]:"fire-rtdb-compat",[Gv]:"fire-fn",[qv]:"fire-fn-compat",[Qv]:"fire-iid",[Yv]:"fire-iid-compat",[Jv]:"fire-fcm",[Xv]:"fire-fcm-compat",[Zv]:"fire-perf",[ey]:"fire-perf-compat",[ty]:"fire-rc",[ny]:"fire-rc-compat",[ry]:"fire-gcs",[iy]:"fire-gcs-compat",[sy]:"fire-fst",[ay]:"fire-fst-compat",[oy]:"fire-vertex","fire-js":"fire-js",[ly]:"fire-js-all"};/**
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
 */const as=new Map,dy=new Map,ka=new Map;function sc(t,e){try{t.container.addComponent(e)}catch(n){pt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function mt(t){const e=t.name;if(ka.has(e))return pt.debug(`There were multiple attempts to register component ${e}.`),!1;ka.set(e,t);for(const n of as.values())sc(n,t);for(const n of dy.values())sc(n,t);return!0}function Jn(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ge(t){return t.settings!==void 0}/**
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
 */const fy={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},zt=new mn("app","Firebase",fy);/**
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
 */class hy{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Je("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw zt.create("app-deleted",{appName:this._name})}}/**
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
 */const Jr=uy;function ah(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Sa,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw zt.create("bad-app-name",{appName:String(i)});if(n||(n=Zf()),!n)throw zt.create("no-options");const s=as.get(i);if(s){if(Br(n,s.options)&&Br(r,s.config))return s;throw zt.create("duplicate-app",{appName:i})}const o=new _v(i);for(const l of ka.values())o.addComponent(l);const a=new hy(n,r,o);return as.set(i,a),a}function lh(t=Sa){const e=as.get(t);if(!e&&t===Sa&&Zf())return ah();if(!e)throw zt.create("no-app",{appName:t});return e}function Ye(t,e,n){var r;let i=(r=cy[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),pt.warn(a.join(" "));return}mt(new Je(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const py="firebase-heartbeat-database",my=1,Hr="firebase-heartbeat-store";let yo=null;function uh(){return yo||(yo=oh(py,my,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Hr)}catch(n){console.warn(n)}}}}).catch(t=>{throw zt.create("idb-open",{originalErrorMessage:t.message})})),yo}async function gy(t){try{const n=(await uh()).transaction(Hr),r=await n.objectStore(Hr).get(ch(t));return await n.done,r}catch(e){if(e instanceof Ze)pt.warn(e.message);else{const n=zt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});pt.warn(n.message)}}}async function oc(t,e){try{const r=(await uh()).transaction(Hr,"readwrite");await r.objectStore(Hr).put(e,ch(t)),await r.done}catch(n){if(n instanceof Ze)pt.warn(n.message);else{const r=zt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});pt.warn(r.message)}}}function ch(t){return`${t.name}!${t.options.appId}`}/**
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
 */const vy=1024,yy=30*24*60*60*1e3;class wy{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Sy(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ac();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=yy}),this._storage.overwrite(this._heartbeatsCache))}catch(r){pt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ac(),{heartbeatsToSend:r,unsentEntries:i}=_y(this._heartbeatsCache.heartbeats),s=Jf(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return pt.warn(n),""}}}function ac(){return new Date().toISOString().substring(0,10)}function _y(t,e=vy){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),lc(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),lc(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Sy{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return nh()?rh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await gy(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return oc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return oc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function lc(t){return Jf(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function ky(t){mt(new Je("platform-logger",e=>new Lv(e),"PRIVATE")),mt(new Je("heartbeat",e=>new wy(e),"PRIVATE")),Ye(_a,ic,t),Ye(_a,ic,"esm2017"),Ye("fire-js","")}ky("");var Iy="firebase",Ey="10.14.1";/**
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
 */Ye(Iy,Ey,"app");const dh="@firebase/installations",El="0.6.9";/**
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
 */const fh=1e4,hh=`w:${El}`,ph="FIS_v2",xy="https://firebaseinstallations.googleapis.com/v1",Ty=60*60*1e3,Cy="installations",Ny="Installations";/**
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
 */const Py={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},cn=new mn(Cy,Ny,Py);function mh(t){return t instanceof Ze&&t.code.includes("request-failed")}/**
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
 */function gh({projectId:t}){return`${xy}/projects/${t}/installations`}function vh(t){return{token:t.token,requestStatus:2,expiresIn:Ay(t.expiresIn),creationTime:Date.now()}}async function yh(t,e){const r=(await e.json()).error;return cn.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function wh({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Ry(t,{refreshToken:e}){const n=wh(t);return n.append("Authorization",Oy(e)),n}async function _h(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Ay(t){return Number(t.replace("s","000"))}function Oy(t){return`${ph} ${t}`}/**
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
 */async function by({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=gh(t),i=wh(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:ph,appId:t.appId,sdkVersion:hh},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await _h(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:vh(u.authToken)}}else throw await yh("Create Installation",l)}/**
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
 */function Sh(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function Dy(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Ly=/^[cdef][\w-]{21}$/,Ia="";function My(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=jy(t);return Ly.test(n)?n:Ia}catch{return Ia}}function jy(t){return Dy(t).substr(0,22)}/**
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
 */function Os(t){return`${t.appName}!${t.appId}`}/**
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
 */const kh=new Map;function Ih(t,e){const n=Os(t);Eh(n,e),Uy(n,e)}function Eh(t,e){const n=kh.get(t);if(n)for(const r of n)r(e)}function Uy(t,e){const n=zy();n&&n.postMessage({key:t,fid:e}),Fy()}let en=null;function zy(){return!en&&"BroadcastChannel"in self&&(en=new BroadcastChannel("[Firebase] FID Change"),en.onmessage=t=>{Eh(t.data.key,t.data.fid)}),en}function Fy(){kh.size===0&&en&&(en.close(),en=null)}/**
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
 */const $y="firebase-installations-database",Vy=1,dn="firebase-installations-store";let wo=null;function xl(){return wo||(wo=oh($y,Vy,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(dn)}}})),wo}async function ls(t,e){const n=Os(t),i=(await xl()).transaction(dn,"readwrite"),s=i.objectStore(dn),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&Ih(t,e.fid),e}async function xh(t){const e=Os(t),r=(await xl()).transaction(dn,"readwrite");await r.objectStore(dn).delete(e),await r.done}async function bs(t,e){const n=Os(t),i=(await xl()).transaction(dn,"readwrite"),s=i.objectStore(dn),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&Ih(t,a.fid),a}/**
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
 */async function Tl(t){let e;const n=await bs(t.appConfig,r=>{const i=By(r),s=Hy(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Ia?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function By(t){const e=t||{fid:My(),registrationStatus:0};return Th(e)}function Hy(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(cn.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=Wy(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Ky(t)}:{installationEntry:e}}async function Wy(t,e){try{const n=await by(t,e);return ls(t.appConfig,n)}catch(n){throw mh(n)&&n.customData.serverCode===409?await xh(t.appConfig):await ls(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function Ky(t){let e=await uc(t.appConfig);for(;e.registrationStatus===1;)await Sh(100),e=await uc(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Tl(t);return r||n}return e}function uc(t){return bs(t,e=>{if(!e)throw cn.create("installation-not-found");return Th(e)})}function Th(t){return Gy(t)?{fid:t.fid,registrationStatus:0}:t}function Gy(t){return t.registrationStatus===1&&t.registrationTime+fh<Date.now()}/**
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
 */async function qy({appConfig:t,heartbeatServiceProvider:e},n){const r=Qy(t,n),i=Ry(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:hh,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await _h(()=>fetch(r,a));if(l.ok){const u=await l.json();return vh(u)}else throw await yh("Generate Auth Token",l)}function Qy(t,{fid:e}){return`${gh(t)}/${e}/authTokens:generate`}/**
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
 */async function Cl(t,e=!1){let n;const r=await bs(t.appConfig,s=>{if(!Ch(s))throw cn.create("not-registered");const o=s.authToken;if(!e&&Xy(o))return s;if(o.requestStatus===1)return n=Yy(t,e),s;{if(!navigator.onLine)throw cn.create("app-offline");const a=e0(s);return n=Jy(t,a),a}});return n?await n:r.authToken}async function Yy(t,e){let n=await cc(t.appConfig);for(;n.authToken.requestStatus===1;)await Sh(100),n=await cc(t.appConfig);const r=n.authToken;return r.requestStatus===0?Cl(t,e):r}function cc(t){return bs(t,e=>{if(!Ch(e))throw cn.create("not-registered");const n=e.authToken;return t0(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Jy(t,e){try{const n=await qy(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await ls(t.appConfig,r),n}catch(n){if(mh(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await xh(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await ls(t.appConfig,r)}throw n}}function Ch(t){return t!==void 0&&t.registrationStatus===2}function Xy(t){return t.requestStatus===2&&!Zy(t)}function Zy(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Ty}function e0(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function t0(t){return t.requestStatus===1&&t.requestTime+fh<Date.now()}/**
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
 */async function n0(t){const e=t,{installationEntry:n,registrationPromise:r}=await Tl(e);return r?r.catch(console.error):Cl(e).catch(console.error),n.fid}/**
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
 */async function r0(t,e=!1){const n=t;return await i0(n),(await Cl(n,e)).token}async function i0(t){const{registrationPromise:e}=await Tl(t);e&&await e}/**
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
 */function s0(t){if(!t||!t.options)throw _o("App Configuration");if(!t.name)throw _o("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw _o(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function _o(t){return cn.create("missing-app-config-values",{valueName:t})}/**
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
 */const Nh="installations",o0="installations-internal",a0=t=>{const e=t.getProvider("app").getImmediate(),n=s0(e),r=Jn(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},l0=t=>{const e=t.getProvider("app").getImmediate(),n=Jn(e,Nh).getImmediate();return{getId:()=>n0(n),getToken:i=>r0(n,i)}};function u0(){mt(new Je(Nh,a0,"PUBLIC")),mt(new Je(o0,l0,"PRIVATE"))}u0();Ye(dh,El);Ye(dh,El,"esm2017");/**
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
 */const us="analytics",c0="firebase_id",d0="origin",f0=60*1e3,h0="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Nl="https://www.googletagmanager.com/gtag/js";/**
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
 */const _e=new kl("@firebase/analytics");/**
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
 */const p0={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},xe=new mn("analytics","Analytics",p0);/**
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
 */function m0(t){if(!t.startsWith(Nl)){const e=xe.create("invalid-gtag-resource",{gtagURL:t});return _e.warn(e.message),""}return t}function Ph(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function g0(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function v0(t,e){const n=g0("firebase-js-sdk-policy",{createScriptURL:m0}),r=document.createElement("script"),i=`${Nl}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function y0(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function w0(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const l=(await Ph(n)).find(u=>u.measurementId===i);l&&await e[l.appId]}}catch(a){_e.error(a)}t("config",i,s)}async function _0(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await Ph(n);for(const l of o){const u=a.find(g=>g.measurementId===l),p=u&&e[u.appId];if(p)s.push(p);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){_e.error(s)}}function S0(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,l]=o;await _0(t,e,n,a,l)}else if(s==="config"){const[a,l]=o;await w0(t,e,n,r,a,l)}else if(s==="consent"){const[a,l]=o;t("consent",a,l)}else if(s==="get"){const[a,l,u]=o;t("get",a,l,u)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){_e.error(a)}}return i}function k0(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=S0(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function I0(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Nl)&&n.src.includes(t))return n;return null}/**
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
 */const E0=30,x0=1e3;class T0{constructor(e={},n=x0){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Rh=new T0;function C0(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function N0(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:C0(r)},s=h0.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw xe.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function P0(t,e=Rh,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw xe.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw xe.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new O0;return setTimeout(async()=>{a.abort()},f0),Ah({appId:r,apiKey:i,measurementId:s},o,a,e)}async function Ah(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=Rh){var s;const{appId:o,measurementId:a}=t;try{await R0(r,e)}catch(l){if(a)return _e.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await N0(t);return i.deleteThrottleMetadata(o),l}catch(l){const u=l;if(!A0(u)){if(i.deleteThrottleMetadata(o),a)return _e.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw l}const p=Number((s=u==null?void 0:u.customData)===null||s===void 0?void 0:s.httpStatus)===503?ec(n,i.intervalMillis,E0):ec(n,i.intervalMillis),g={throttleEndTimeMillis:Date.now()+p,backoffCount:n+1};return i.setThrottleMetadata(o,g),_e.debug(`Calling attemptFetch again in ${p} millis`),Ah(t,g,r,i)}}function R0(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(xe.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function A0(t){if(!(t instanceof Ze)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class O0{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function b0(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
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
 */async function D0(){if(nh())try{await rh()}catch(t){return _e.warn(xe.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return _e.warn(xe.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function L0(t,e,n,r,i,s,o){var a;const l=P0(t);l.then(v=>{n[v.measurementId]=v.appId,t.options.measurementId&&v.measurementId!==t.options.measurementId&&_e.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${v.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(v=>_e.error(v)),e.push(l);const u=D0().then(v=>{if(v)return r.getId()}),[p,g]=await Promise.all([l,u]);I0(s)||v0(s,p.measurementId),i("js",new Date);const m=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return m[d0]="firebase",m.update=!0,g!=null&&(m[c0]=g),i("config",p.measurementId,m),p.measurementId}/**
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
 */class M0{constructor(e){this.app=e}_delete(){return delete kr[this.app.options.appId],Promise.resolve()}}let kr={},dc=[];const fc={};let So="dataLayer",j0="gtag",hc,Oh,pc=!1;function U0(){const t=[];if(th()&&t.push("This is a browser extension environment."),sv()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=xe.create("invalid-analytics-context",{errorInfo:e});_e.warn(n.message)}}function z0(t,e,n){U0();const r=t.options.appId;if(!r)throw xe.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)_e.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw xe.create("no-api-key");if(kr[r]!=null)throw xe.create("already-exists",{id:r});if(!pc){y0(So);const{wrappedGtag:s,gtagCore:o}=k0(kr,dc,fc,So,j0);Oh=s,hc=o,pc=!0}return kr[r]=L0(t,dc,fc,e,hc,So,n),new M0(t)}function F0(t=lh()){t=Be(t);const e=Jn(t,us);return e.isInitialized()?e.getImmediate():$0(t)}function $0(t,e={}){const n=Jn(t,us);if(n.isInitialized()){const i=n.getImmediate();if(Br(e,n.getOptions()))return i;throw xe.create("already-initialized")}return n.initialize({options:e})}function V0(t,e,n,r){t=Be(t),b0(Oh,kr[t.app.options.appId],e,n,r).catch(i=>_e.error(i))}const mc="@firebase/analytics",gc="0.10.8";function B0(){mt(new Je(us,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return z0(r,i,n)},"PUBLIC")),mt(new Je("analytics-internal",t,"PRIVATE")),Ye(mc,gc),Ye(mc,gc,"esm2017");function t(e){try{const n=e.getProvider(us).getImmediate();return{logEvent:(r,i,s)=>V0(n,r,i,s)}}catch(n){throw xe.create("interop-component-reg-failed",{reason:n})}}}B0();function Pl(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function bh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const H0=bh,Dh=new mn("auth","Firebase",bh());/**
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
 */const cs=new kl("@firebase/auth");function W0(t,...e){cs.logLevel<=j.WARN&&cs.warn(`Auth (${Jr}): ${t}`,...e)}function bi(t,...e){cs.logLevel<=j.ERROR&&cs.error(`Auth (${Jr}): ${t}`,...e)}/**
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
 */function Xe(t,...e){throw Al(t,...e)}function Se(t,...e){return Al(t,...e)}function Rl(t,e,n){const r=Object.assign(Object.assign({},H0()),{[e]:n});return new mn("auth","Firebase",r).create(e,{appName:t.name})}function Ft(t){return Rl(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function K0(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Xe(t,"argument-error"),Rl(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Al(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Dh.create(t,...e)}function x(t,e,...n){if(!t)throw Al(e,...n)}function ot(t){const e="INTERNAL ASSERTION FAILED: "+t;throw bi(e),new Error(e)}function gt(t,e){t||ot(e)}/**
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
 */function Ea(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Lh(){return vc()==="http:"||vc()==="https:"}function vc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function G0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Lh()||th()||"connection"in navigator)?navigator.onLine:!0}function q0(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Xr{constructor(e,n){this.shortDelay=e,this.longDelay=n,gt(n>e,"Short delay should be less than long delay!"),this.isMobile=tv()||rv()}get(){return G0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ol(t,e){gt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Mh{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ot("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ot("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ot("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Q0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Y0=new Xr(3e4,6e4);function yt(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function et(t,e,n,r,i={}){return jh(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Yn(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:l},s);return nv()||(u.referrerPolicy="no-referrer"),Mh.fetch()(Uh(t,t.config.apiHost,n,a),u)})}async function jh(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Q0),e);try{const i=new J0(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw fr(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw fr(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw fr(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw fr(t,"user-disabled",o);const p=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Rl(t,p,u);Xe(t,p)}}catch(i){if(i instanceof Ze)throw i;Xe(t,"network-request-failed",{message:String(i)})}}async function Ds(t,e,n,r,i={}){const s=await et(t,e,n,r,i);return"mfaPendingCredential"in s&&Xe(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Uh(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Ol(t.config,i):`${t.config.apiScheme}://${i}`}class J0{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Se(this.auth,"network-request-failed")),Y0.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function fr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Se(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */function yc(t){return t!==void 0&&t.getResponse!==void 0}/**
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
 */async function X0(t){return(await et(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}/**
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
 */async function Z0(t,e){return et(t,"POST","/v1/accounts:delete",e)}async function zh(t,e){return et(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ir(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ew(t,e=!1){const n=Be(t),r=await n.getIdToken(e),i=bl(r);x(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ir(ko(i.auth_time)),issuedAtTime:Ir(ko(i.iat)),expirationTime:Ir(ko(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ko(t){return Number(t)*1e3}function bl(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return bi("JWT malformed, contained fewer than 3 sections"),null;try{const i=Xf(n);return i?JSON.parse(i):(bi("Failed to decode base64 JWT payload"),null)}catch(i){return bi("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function wc(t){const e=bl(t);return x(e,"internal-error"),x(typeof e.exp<"u","internal-error"),x(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Wr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ze&&tw(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function tw({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class nw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class xa{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ir(this.lastLoginAt),this.creationTime=Ir(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ds(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Wr(t,zh(n,{idToken:r}));x(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Fh(s.providerUserInfo):[],a=iw(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),p=l?u:!1,g={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new xa(s.createdAt,s.lastLoginAt),isAnonymous:p};Object.assign(t,g)}async function rw(t){const e=Be(t);await ds(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function iw(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Fh(t){return t.map(e=>{var{providerId:n}=e,r=Pl(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function sw(t,e){const n=await jh(t,{},async()=>{const r=Yn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Uh(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Mh.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ow(t,e){return et(t,"POST","/v2/accounts:revokeToken",yt(t,e))}/**
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
 */class Mn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){x(e.idToken,"internal-error"),x(typeof e.idToken<"u","internal-error"),x(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):wc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){x(e.length!==0,"internal-error");const n=wc(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(x(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await sw(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Mn;return r&&(x(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(x(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(x(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Mn,this.toJSON())}_performRefresh(){return ot("not implemented")}}/**
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
 */function _t(t,e){x(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class at{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Pl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new nw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new xa(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Wr(this,this.stsTokenManager.getToken(this.auth,e));return x(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return ew(this,e)}reload(){return rw(this)}_assign(e){this!==e&&(x(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new at(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){x(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ds(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ge(this.auth.app))return Promise.reject(Ft(this.auth));const e=await this.getIdToken();return await Wr(this,Z0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,p;const g=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,v=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,S=(a=n.tenantId)!==null&&a!==void 0?a:void 0,L=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,h=(u=n.createdAt)!==null&&u!==void 0?u:void 0,c=(p=n.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:f,emailVerified:y,isAnonymous:k,providerData:T,stsTokenManager:C}=n;x(f&&C,e,"internal-error");const N=Mn.fromJSON(this.name,C);x(typeof f=="string",e,"internal-error"),_t(g,e.name),_t(m,e.name),x(typeof y=="boolean",e,"internal-error"),x(typeof k=="boolean",e,"internal-error"),_t(v,e.name),_t(_,e.name),_t(S,e.name),_t(L,e.name),_t(h,e.name),_t(c,e.name);const z=new at({uid:f,auth:e,email:m,emailVerified:y,displayName:g,isAnonymous:k,photoURL:_,phoneNumber:v,tenantId:S,stsTokenManager:N,createdAt:h,lastLoginAt:c});return T&&Array.isArray(T)&&(z.providerData=T.map(A=>Object.assign({},A))),L&&(z._redirectEventId=L),z}static async _fromIdTokenResponse(e,n,r=!1){const i=new Mn;i.updateFromServerResponse(n);const s=new at({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ds(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];x(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Fh(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Mn;a.updateFromIdToken(r);const l=new at({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new xa(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,u),l}}/**
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
 */const _c=new Map;function lt(t){gt(t instanceof Function,"Expected a class definition");let e=_c.get(t);return e?(gt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,_c.set(t,e),e)}/**
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
 */class $h{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}$h.type="NONE";const Sc=$h;/**
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
 */function Di(t,e,n){return`firebase:${t}:${e}:${n}`}class jn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Di(this.userKey,i.apiKey,s),this.fullPersistenceKey=Di("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?at._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new jn(lt(Sc),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||lt(Sc);const o=Di(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const p=await u._get(o);if(p){const g=at._fromJSON(e,p);u!==s&&(a=g),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new jn(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new jn(s,e,r))}}/**
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
 */function kc(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Wh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Vh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Gh(e))return"Blackberry";if(qh(e))return"Webos";if(Bh(e))return"Safari";if((e.includes("chrome/")||Hh(e))&&!e.includes("edge/"))return"Chrome";if(Kh(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Vh(t=fe()){return/firefox\//i.test(t)}function Bh(t=fe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Hh(t=fe()){return/crios\//i.test(t)}function Wh(t=fe()){return/iemobile/i.test(t)}function Kh(t=fe()){return/android/i.test(t)}function Gh(t=fe()){return/blackberry/i.test(t)}function qh(t=fe()){return/webos/i.test(t)}function Dl(t=fe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function aw(t=fe()){var e;return Dl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function lw(){return iv()&&document.documentMode===10}function Qh(t=fe()){return Dl(t)||Kh(t)||qh(t)||Gh(t)||/windows phone/i.test(t)||Wh(t)}/**
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
 */function Yh(t,e=[]){let n;switch(t){case"Browser":n=kc(fe());break;case"Worker":n=`${kc(fe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Jr}/${r}`}/**
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
 */class uw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function cw(t,e={}){return et(t,"GET","/v2/passwordPolicy",yt(t,e))}/**
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
 */const dw=6;class fw{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:dw,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class hw{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ic(this),this.idTokenSubscription=new Ic(this),this.beforeStateQueue=new uw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Dh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=lt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await jn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await zh(this,{idToken:e}),r=await at._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Ge(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return x(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ds(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=q0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ge(this.app))return Promise.reject(Ft(this));const n=e?Be(e):null;return n&&x(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&x(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ge(this.app)?Promise.reject(Ft(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ge(this.app)?Promise.reject(Ft(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(lt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await cw(this),n=new fw(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new mn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await ow(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&lt(e)||this._popupRedirectResolver;x(n,this,"argument-error"),this.redirectPersistenceManager=await jn.create(this,[lt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(x(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return x(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Yh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&W0(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function gn(t){return Be(t)}let Ic=class{constructor(e){this.auth=e,this.observer=null,this.addObserver=cv(n=>this.observer=n)}get next(){return x(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}};/**
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
 */let Ls={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function pw(t){Ls=t}function Jh(t){return Ls.loadJS(t)}function mw(){return Ls.recaptchaV2Script}function gw(){return Ls.gapiScript}function Xh(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function vw(t,e){const n=Jn(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Br(s,e??{}))return i;Xe(i,"already-initialized")}return n.initialize({options:e})}function yw(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(lt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function ww(t,e,n){const r=gn(t);x(r._canInitEmulator,r,"emulator-config-failed"),x(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Zh(e),{host:o,port:a}=_w(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),Sw()}function Zh(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function _w(t){const e=Zh(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Ec(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Ec(o)}}}function Ec(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Sw(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Ll{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ot("not implemented")}_getIdTokenResponse(e){return ot("not implemented")}_linkToIdToken(e,n){return ot("not implemented")}_getReauthenticationResolver(e){return ot("not implemented")}}/**
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
 */async function Un(t,e){return Ds(t,"POST","/v1/accounts:signInWithIdp",yt(t,e))}/**
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
 */const kw="http://localhost";class fn extends Ll{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new fn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Xe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Pl(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new fn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Un(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Un(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Un(e,n)}buildRequest(){const e={requestUri:kw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Yn(n)}return e}}/**
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
 */async function Iw(t,e){return et(t,"POST","/v1/accounts:sendVerificationCode",yt(t,e))}async function Ew(t,e){return Ds(t,"POST","/v1/accounts:signInWithPhoneNumber",yt(t,e))}async function xw(t,e){const n=await Ds(t,"POST","/v1/accounts:signInWithPhoneNumber",yt(t,e));if(n.temporaryProof)throw fr(t,"account-exists-with-different-credential",n);return n}const Tw={USER_NOT_FOUND:"user-not-found"};async function Cw(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Ds(t,"POST","/v1/accounts:signInWithPhoneNumber",yt(t,n),Tw)}/**
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
 */class Er extends Ll{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Er({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Er({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return Ew(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return xw(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Cw(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new Er({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
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
 */class Ml{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Zr extends Ml{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class xt extends Zr{constructor(){super("facebook.com")}static credential(e){return fn._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xt.credentialFromTaggedObject(e)}static credentialFromError(e){return xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xt.credential(e.oauthAccessToken)}catch{return null}}}xt.FACEBOOK_SIGN_IN_METHOD="facebook.com";xt.PROVIDER_ID="facebook.com";/**
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
 */class rt extends Zr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return fn._fromParams({providerId:rt.PROVIDER_ID,signInMethod:rt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return rt.credentialFromTaggedObject(e)}static credentialFromError(e){return rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return rt.credential(n,r)}catch{return null}}}rt.GOOGLE_SIGN_IN_METHOD="google.com";rt.PROVIDER_ID="google.com";/**
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
 */class Tt extends Zr{constructor(){super("github.com")}static credential(e){return fn._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tt.credentialFromTaggedObject(e)}static credentialFromError(e){return Tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tt.credential(e.oauthAccessToken)}catch{return null}}}Tt.GITHUB_SIGN_IN_METHOD="github.com";Tt.PROVIDER_ID="github.com";/**
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
 */class Ct extends Zr{constructor(){super("twitter.com")}static credential(e,n){return fn._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ct.credentialFromTaggedObject(e)}static credentialFromError(e){return Ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Ct.credential(n,r)}catch{return null}}}Ct.TWITTER_SIGN_IN_METHOD="twitter.com";Ct.PROVIDER_ID="twitter.com";/**
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
 */class Kn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await at._fromIdTokenResponse(e,r,i),o=xc(r);return new Kn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=xc(r);return new Kn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function xc(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class fs extends Ze{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,fs.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new fs(e,n,r,i)}}function ep(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?fs._fromErrorAndOperation(t,s,e,r):s})}async function Nw(t,e,n=!1){const r=await Wr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Kn._forOperation(t,"link",r)}/**
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
 */async function Pw(t,e,n=!1){const{auth:r}=t;if(Ge(r.app))return Promise.reject(Ft(r));const i="reauthenticate";try{const s=await Wr(t,ep(r,i,e,t),n);x(s.idToken,r,"internal-error");const o=bl(s.idToken);x(o,r,"internal-error");const{sub:a}=o;return x(t.uid===a,r,"user-mismatch"),Kn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Xe(r,"user-mismatch"),s}}/**
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
 */async function tp(t,e,n=!1){if(Ge(t.app))return Promise.reject(Ft(t));const r="signIn",i=await ep(t,r,e),s=await Kn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Rw(t,e){return tp(gn(t),e)}function Aw(t,e,n,r){return Be(t).onIdTokenChanged(e,n,r)}function Ow(t,e,n){return Be(t).beforeAuthStateChanged(e,n)}function bw(t,e,n,r){return Be(t).onAuthStateChanged(e,n,r)}function Dw(t){return Be(t).signOut()}/**
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
 */function Lw(t,e){return et(t,"POST","/v2/accounts/mfaEnrollment:start",yt(t,e))}const hs="__sak";/**
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
 */class np{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(hs,"1"),this.storage.removeItem(hs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Mw=1e3,jw=10;class rp extends np{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Qh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);lw()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,jw):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Mw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}rp.type="LOCAL";const Uw=rp;/**
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
 */class ip extends np{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ip.type="SESSION";const sp=ip;/**
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
 */function zw(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ms{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Ms(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await zw(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ms.receivers=[];/**
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
 */function jl(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Fw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=jl("",20);i.port1.start();const p=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(g){const m=g;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(p),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(p),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Q(){return window}function $w(t){Q().location.href=t}/**
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
 */function Ul(){return typeof Q().WorkerGlobalScope<"u"&&typeof Q().importScripts=="function"}async function Vw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Bw(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Hw(){return Ul()?self:null}/**
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
 */const op="firebaseLocalStorageDb",Ww=1,ps="firebaseLocalStorage",ap="fbase_key";class ei{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function js(t,e){return t.transaction([ps],e?"readwrite":"readonly").objectStore(ps)}function Kw(){const t=indexedDB.deleteDatabase(op);return new ei(t).toPromise()}function Ta(){const t=indexedDB.open(op,Ww);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ps,{keyPath:ap})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ps)?e(r):(r.close(),await Kw(),e(await Ta()))})})}async function Tc(t,e,n){const r=js(t,!0).put({[ap]:e,value:n});return new ei(r).toPromise()}async function Gw(t,e){const n=js(t,!1).get(e),r=await new ei(n).toPromise();return r===void 0?null:r.value}function Cc(t,e){const n=js(t,!0).delete(e);return new ei(n).toPromise()}const qw=800,Qw=3;class lp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ta(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Qw)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ul()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ms._getInstance(Hw()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Vw(),!this.activeServiceWorker)return;this.sender=new Fw(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Bw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ta();return await Tc(e,hs,"1"),await Cc(e,hs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Tc(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Gw(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Cc(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=js(i,!1).getAll();return new ei(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),qw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}lp.type="LOCAL";const Yw=lp;/**
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
 */function Jw(t,e){return et(t,"POST","/v2/accounts/mfaSignIn:start",yt(t,e))}/**
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
 */const Xw=500,Zw=6e4,_i=1e12;class e_{constructor(e){this.auth=e,this.counter=_i,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new t_(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||_i;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||_i;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||_i;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class t_{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;x(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=n_(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},Zw)},Xw))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function n_(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
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
 */const Io=Xh("rcb"),r_=new Xr(3e4,6e4);class i_{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=Q().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return x(s_(n),e,"argument-error"),this.shouldResolveImmediately(n)&&yc(Q().grecaptcha)?Promise.resolve(Q().grecaptcha):new Promise((r,i)=>{const s=Q().setTimeout(()=>{i(Se(e,"network-request-failed"))},r_.get());Q()[Io]=()=>{Q().clearTimeout(s),delete Q()[Io];const a=Q().grecaptcha;if(!a||!yc(a)){i(Se(e,"internal-error"));return}const l=a.render;a.render=(u,p)=>{const g=l(u,p);return this.counter++,g},this.hostLanguage=n,r(a)};const o=`${mw()}?${Yn({onload:Io,render:"explicit",hl:n})}`;Jh(o).catch(()=>{clearTimeout(s),i(Se(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=Q().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function s_(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class o_{async load(e){return new e_(e)}clearedOneInstance(){}}/**
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
 */const up="recaptcha",a_={theme:"light",type:"image"};class l_{constructor(e,n,r=Object.assign({},a_)){this.parameters=r,this.type=up,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=gn(e),this.isInvisible=this.parameters.size==="invisible",x(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;x(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new o_:new i_,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){x(!this.parameters.sitekey,this.auth,"argument-error"),x(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),x(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=Q()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){x(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){x(Lh()&&!Ul(),this.auth,"internal-error"),await u_(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await X0(this.auth);x(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return x(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function u_(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
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
 */class c_{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Er._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function d_(t,e,n){if(Ge(t.app))return Promise.reject(Ft(t));const r=gn(t),i=await f_(r,e,Be(n));return new c_(i,s=>Rw(r,s))}async function f_(t,e,n){var r;const i=await n.verify();try{x(typeof i=="string",t,"argument-error"),x(n.type===up,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return x(o.type==="enroll",t,"internal-error"),(await Lw(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{x(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return x(a,t,"missing-multi-factor-info"),(await Jw(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await Iw(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}/**
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
 */function cp(t,e){return e?lt(e):(x(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class zl extends Ll{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Un(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Un(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Un(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function h_(t){return tp(t.auth,new zl(t),t.bypassAuthState)}function p_(t){const{auth:e,user:n}=t;return x(n,e,"internal-error"),Pw(n,new zl(t),t.bypassAuthState)}async function m_(t){const{auth:e,user:n}=t;return x(n,e,"internal-error"),Nw(n,new zl(t),t.bypassAuthState)}/**
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
 */class dp{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return h_;case"linkViaPopup":case"linkViaRedirect":return m_;case"reauthViaPopup":case"reauthViaRedirect":return p_;default:Xe(this.auth,"internal-error")}}resolve(e){gt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){gt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const g_=new Xr(2e3,1e4);async function v_(t,e,n){if(Ge(t.app))return Promise.reject(Se(t,"operation-not-supported-in-this-environment"));const r=gn(t);K0(t,e,Ml);const i=cp(r,n);return new tn(r,"signInViaPopup",e,i).executeNotNull()}class tn extends dp{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,tn.currentPopupAction&&tn.currentPopupAction.cancel(),tn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return x(e,this.auth,"internal-error"),e}async onExecution(){gt(this.filter.length===1,"Popup operations only handle one event");const e=jl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Se(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Se(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,tn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Se(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,g_.get())};e()}}tn.currentPopupAction=null;/**
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
 */const y_="pendingRedirect",Li=new Map;class w_ extends dp{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Li.get(this.auth._key());if(!e){try{const r=await __(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Li.set(this.auth._key(),e)}return this.bypassAuthState||Li.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function __(t,e){const n=I_(e),r=k_(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function S_(t,e){Li.set(t._key(),e)}function k_(t){return lt(t._redirectPersistence)}function I_(t){return Di(y_,t.config.apiKey,t.name)}async function E_(t,e,n=!1){if(Ge(t.app))return Promise.reject(Ft(t));const r=gn(t),i=cp(r,e),o=await new w_(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const x_=10*60*1e3;class T_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!C_(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!fp(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Se(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=x_&&this.cachedEventUids.clear(),this.cachedEventUids.has(Nc(e))}saveEventToCache(e){this.cachedEventUids.add(Nc(e)),this.lastProcessedEventTime=Date.now()}}function Nc(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function fp({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function C_(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return fp(t);default:return!1}}/**
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
 */async function N_(t,e={}){return et(t,"GET","/v1/projects",e)}/**
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
 */const P_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,R_=/^https?/;async function A_(t){if(t.config.emulator)return;const{authorizedDomains:e}=await N_(t);for(const n of e)try{if(O_(n))return}catch{}Xe(t,"unauthorized-domain")}function O_(t){const e=Ea(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!R_.test(n))return!1;if(P_.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const b_=new Xr(3e4,6e4);function Pc(){const t=Q().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function D_(t){return new Promise((e,n)=>{var r,i,s;function o(){Pc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Pc(),n(Se(t,"network-request-failed"))},timeout:b_.get()})}if(!((i=(r=Q().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Q().gapi)===null||s===void 0)&&s.load)o();else{const a=Xh("iframefcb");return Q()[a]=()=>{gapi.load?o():n(Se(t,"network-request-failed"))},Jh(`${gw()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Mi=null,e})}let Mi=null;function L_(t){return Mi=Mi||D_(t),Mi}/**
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
 */const M_=new Xr(5e3,15e3),j_="__/auth/iframe",U_="emulator/auth/iframe",z_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},F_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $_(t){const e=t.config;x(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ol(e,U_):`https://${t.config.authDomain}/${j_}`,r={apiKey:e.apiKey,appName:t.name,v:Jr},i=F_.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Yn(r).slice(1)}`}async function V_(t){const e=await L_(t),n=Q().gapi;return x(n,t,"internal-error"),e.open({where:document.body,url:$_(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:z_,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Se(t,"network-request-failed"),a=Q().setTimeout(()=>{s(o)},M_.get());function l(){Q().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const B_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},H_=500,W_=600,K_="_blank",G_="http://localhost";class Rc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function q_(t,e,n,r=H_,i=W_){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},B_),{width:r.toString(),height:i.toString(),top:s,left:o}),u=fe().toLowerCase();n&&(a=Hh(u)?K_:n),Vh(u)&&(e=e||G_,l.scrollbars="yes");const p=Object.entries(l).reduce((m,[v,_])=>`${m}${v}=${_},`,"");if(aw(u)&&a!=="_self")return Q_(e||"",a),new Rc(null);const g=window.open(e||"",a,p);x(g,t,"popup-blocked");try{g.focus()}catch{}return new Rc(g)}function Q_(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Y_="__/auth/handler",J_="emulator/auth/handler",X_=encodeURIComponent("fac");async function Ac(t,e,n,r,i,s){x(t.config.authDomain,t,"auth-domain-config-required"),x(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Jr,eventId:i};if(e instanceof Ml){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",uv(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,g]of Object.entries({}))o[p]=g}if(e instanceof Zr){const p=e.getScopes().filter(g=>g!=="");p.length>0&&(o.scopes=p.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const p of Object.keys(a))a[p]===void 0&&delete a[p];const l=await t._getAppCheckToken(),u=l?`#${X_}=${encodeURIComponent(l)}`:"";return`${Z_(t)}?${Yn(a).slice(1)}${u}`}function Z_({config:t}){return t.emulator?Ol(t,J_):`https://${t.authDomain}/${Y_}`}/**
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
 */const Eo="webStorageSupport";class e1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=sp,this._completeRedirectFn=E_,this._overrideRedirectResult=S_}async _openPopup(e,n,r,i){var s;gt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Ac(e,n,r,Ea(),i);return q_(e,o,jl())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Ac(e,n,r,Ea(),i);return $w(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(gt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await V_(e),r=new T_(e);return n.register("authEvent",i=>(x(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Eo,{type:Eo},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Eo];o!==void 0&&n(!!o),Xe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=A_(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Qh()||Bh()||Dl()}}const t1=e1;var Oc="@firebase/auth",bc="1.7.9";/**
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
 */class n1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){x(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function r1(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function i1(t){mt(new Je("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;x(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Yh(t)},u=new hw(r,i,s,l);return yw(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),mt(new Je("auth-internal",e=>{const n=gn(e.getProvider("auth").getImmediate());return(r=>new n1(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ye(Oc,bc,r1(t)),Ye(Oc,bc,"esm2017")}/**
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
 */const s1=5*60,o1=eh("authIdTokenMaxAge")||s1;let Dc=null;const a1=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>o1)return;const i=n==null?void 0:n.token;Dc!==i&&(Dc=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function l1(t=lh()){const e=Jn(t,"auth");if(e.isInitialized())return e.getImmediate();const n=vw(t,{popupRedirectResolver:t1,persistence:[Yw,Uw,sp]}),r=eh("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=a1(s.toString());Ow(n,o,()=>o(n.currentUser)),Aw(n,a=>o(a))}}const i=Zg("auth");return i&&ww(n,`http://${i}`),n}function u1(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}pw({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Se("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",u1().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});i1("Browser");const c1={apiKey:"AIzaSyAbHTfU_LEZRskt9tAXMRT9XRc8nQlDo9E",authDomain:"tiffin-ff3cc.firebaseapp.com",projectId:"tiffin-ff3cc",storageBucket:"tiffin-ff3cc.firebasestorage.app",messagingSenderId:"708196896667",appId:"1:708196896667:web:8368ff437548aa19481b3e",measurementId:"G-M8RGHCE7ZP"},hp=ah(c1);typeof window<"u"&&F0(hp);const xr=l1(hp),d1=new rt;/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f1=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),pp=(...t)=>t.filter((e,n,r)=>!!e&&r.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var h1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p1=D.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...a},l)=>D.createElement("svg",{ref:l,...h1,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:pp("lucide",i),...a},[...o.map(([u,p])=>D.createElement(u,p)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=(t,e)=>{const n=D.forwardRef(({className:r,...i},s)=>D.createElement(p1,{ref:s,iconNode:e,className:pp(`lucide-${f1(t)}`,r),...i}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m1=Z("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g1=Z("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lc=Z("CalendarDays",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v1=Z("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y1=Z("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w1=Z("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _1=Z("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S1=Z("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k1=Z("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I1=Z("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E1=Z("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x1=Z("Pen",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fl=Z("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T1=Z("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C1=Z("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $l=Z("Truck",[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mp=Z("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gp=Z("Wallet",[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ms=Z("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),N1=({user:t,onSubscriptionComplete:e})=>{const[n,r]=D.useState(!1),[i,s]=D.useState(""),o=async()=>{r(!0),s("");try{const a={key:"rzp_live_2lnzUjpgnONSYY",amount:19900,currency:"INR",name:"TiffinFlow Pro",description:"Monthly Subscription (15-day free trial)",image:"https://cdn-icons-png.flaticon.com/512/706/706164.png",handler:function(u){console.log("Payment Success:",u),e()},prefill:{name:(t==null?void 0:t.displayName)||"",email:(t==null?void 0:t.email)||"",contact:(t==null?void 0:t.phoneNumber)||""},notes:{address:"TiffinFlow Pro Office"},theme:{color:"#2563eb"}},l=new window.Razorpay(a);l.on("payment.failed",function(u){s(u.error.description)}),l.open()}catch(a){s("Could not initialize payment. Please try again."),console.error(a)}finally{r(!1)}};return d.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center p-4",children:d.jsxs("div",{className:"max-w-md w-full bg-white rounded-[40px] p-8 shadow-xl border border-gray-100",children:[d.jsxs("div",{className:"text-center mb-8",children:[d.jsx("div",{className:"w-20 h-20 bg-blue-100 rounded-3xl mx-auto mb-6 flex items-center justify-center text-blue-600",children:d.jsx(S1,{size:40})}),d.jsx("h2",{className:"text-3xl font-black text-gray-900 mb-2",children:"Upgrade to Pro"}),d.jsx("p",{className:"text-gray-500 font-medium",children:"Start your 15-day free trial today"})]}),d.jsxs("div",{className:"bg-blue-50 rounded-3xl p-6 mb-8 border border-blue-100",children:[d.jsxs("div",{className:"flex justify-between items-center mb-4",children:[d.jsx("span",{className:"font-bold text-blue-900",children:"Pro Plan"}),d.jsx("span",{className:"bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase",children:"Active Trial"})]}),d.jsxs("div",{className:"flex items-baseline gap-1 mb-6",children:[d.jsx("span",{className:"text-4xl font-black text-blue-900",children:"₹199"}),d.jsx("span",{className:"text-blue-600 font-bold",children:"/month"})]}),d.jsx("ul",{className:"space-y-3",children:["15 Days Free Trial","Unlimited Customers","Daily Meal Planner","Payment Tracking","Delivery Management"].map((a,l)=>d.jsxs("li",{className:"flex items-center gap-3 text-sm font-bold text-blue-800",children:[d.jsx(_1,{size:18,className:"text-blue-600"}),a]},l))})]}),i&&d.jsxs("div",{className:"bg-red-50 text-red-600 p-4 rounded-2xl mb-6 text-sm font-bold border border-red-100 flex items-center gap-3",children:[d.jsx(w1,{size:20}),i]}),d.jsxs("button",{onClick:o,disabled:n,className:"w-full bg-blue-600 text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-blue-200 active:scale-95 transition-all flex items-center justify-center gap-3 disabled:opacity-50",children:[n?d.jsx(I1,{className:"animate-spin"}):null,n?"Processing...":"Start 15-Day Free Trial"]}),d.jsx("p",{className:"text-center text-xs text-gray-400 mt-6 font-medium",children:"You won't be charged until your trial ends. Cancel anytime."})]})})},P1=()=>{const[t,e]=D.useState(""),[n,r]=D.useState(""),[i,s]=D.useState(null),[o,a]=D.useState(""),[l,u]=D.useState(!1);D.useEffect(()=>{window.recaptchaVerifier||(window.recaptchaVerifier=new l_(xr,"recaptcha-container",{size:"invisible"}))},[]);const p=async()=>{try{await v_(xr,d1)}catch(v){a(v.message)}},g=async()=>{u(!0),a("");try{const v=t.startsWith("+")?t:`+91${t}`,_=await d_(xr,v,window.recaptchaVerifier);s(_)}catch(v){a(v.message)}u(!1)},m=async()=>{u(!0),a("");try{await i.confirm(n)}catch(v){a(v.message)}u(!1)};return d.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-50 p-4 font-sans",children:d.jsxs("div",{className:"max-w-md w-full bg-white rounded-[40px] p-8 shadow-xl shadow-blue-100",children:[d.jsxs("div",{className:"text-center mb-8",children:[d.jsx("div",{className:"w-16 h-16 bg-blue-600 rounded-2xl mx-auto mb-4 flex items-center justify-center text-white",children:d.jsx($l,{size:32})}),d.jsx("h2",{className:"text-2xl font-bold",children:"TiffinFlow Pro"}),d.jsx("p",{className:"text-gray-500",children:"Sign in to manage your tiffin service"})]}),o&&d.jsx("div",{className:"bg-red-50 text-red-600 p-4 rounded-2xl mb-6 text-sm",children:o}),d.jsxs("div",{className:"space-y-4",children:[i?d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"space-y-2",children:[d.jsx("label",{className:"text-xs font-bold text-gray-400 ml-1 uppercase",children:"Enter OTP"}),d.jsx("input",{type:"text",value:n,onChange:v=>r(v.target.value),className:"w-full px-4 py-4 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-blue-500 outline-none",placeholder:"123456"})]}),d.jsx("button",{onClick:m,disabled:l||n.length<6,className:"w-full bg-blue-600 text-white py-4 rounded-2xl font-bold shadow-lg shadow-blue-200 active:scale-95 transition-transform disabled:opacity-50",children:l?"Verifying...":"Verify OTP"}),d.jsx("button",{onClick:()=>s(null),className:"w-full text-blue-600 font-bold text-sm mt-2",children:"Change Number"})]}):d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"space-y-2",children:[d.jsx("label",{className:"text-xs font-bold text-gray-400 ml-1 uppercase",children:"Phone Number (India)"}),d.jsxs("div",{className:"relative",children:[d.jsx("span",{className:"absolute left-4 top-1/2 -translate-y-1/2 font-bold text-gray-400",children:"+91"}),d.jsx("input",{type:"tel",value:t,onChange:v=>e(v.target.value),className:"w-full pl-14 pr-4 py-4 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-blue-500 outline-none",placeholder:"9876543210"})]})]}),d.jsx("button",{onClick:g,disabled:l||t.length<10,className:"w-full bg-blue-600 text-white py-4 rounded-2xl font-bold shadow-lg shadow-blue-200 active:scale-95 transition-transform disabled:opacity-50",children:l?"Sending...":"Send OTP"})]}),d.jsxs("div",{className:"relative my-8",children:[d.jsx("div",{className:"absolute inset-0 flex items-center",children:d.jsx("div",{className:"w-full border-t border-gray-100"})}),d.jsx("div",{className:"relative flex justify-center text-xs uppercase",children:d.jsx("span",{className:"bg-white px-4 text-gray-400 font-bold",children:"Or continue with"})})]}),d.jsxs("button",{onClick:p,className:"w-full bg-white border border-gray-100 py-4 rounded-2xl font-bold flex items-center justify-center gap-3 active:scale-95 transition-transform",children:[d.jsx("img",{src:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg",className:"w-5 h-5",alt:"Google"}),"Sign in with Google"]})]}),d.jsx("div",{id:"recaptcha-container"})]})})},R1=({user:t})=>d.jsxs("div",{className:"p-4 pb-24",children:[d.jsxs("div",{className:"flex justify-between items-center mb-6",children:[d.jsxs("div",{children:[d.jsx("h2",{className:"text-2xl font-bold tracking-tight",children:"Daily Stats"}),d.jsxs("p",{className:"text-gray-500 text-sm",children:["Welcome back, ",(t==null?void 0:t.displayName)||"Chef","!"]})]}),d.jsxs("div",{className:"flex gap-2",children:[d.jsx("button",{className:"p-2 bg-white rounded-full shadow-sm border border-gray-100",children:d.jsx(g1,{size:20})}),d.jsx("button",{onClick:()=>Dw(xr),className:"p-2 bg-white rounded-full shadow-sm border border-gray-100 text-red-500",children:d.jsx(E1,{size:20})})]})]}),d.jsx("div",{className:"grid grid-cols-2 gap-4 mb-6",children:[{label:"Customers",value:"142",color:"bg-blue-500"},{label:"Meals Today",value:"156",color:"bg-orange-500"},{label:"Pending",value:"₹12.4k",color:"bg-purple-500"},{label:"Monthly",value:"₹84.2k",color:"bg-green-500"}].map((e,n)=>d.jsxs("div",{className:"bg-white p-4 rounded-3xl shadow-sm border border-gray-50 flex flex-col justify-between aspect-square",children:[d.jsxs("div",{className:`w-10 h-10 ${e.color} rounded-2xl mb-2 flex items-center justify-center text-white`,children:[n===0&&d.jsx(mp,{size:20}),n===1&&d.jsx($l,{size:20}),n===2&&d.jsx(gp,{size:20}),n===3&&d.jsx(m1,{size:20})]}),d.jsxs("div",{children:[d.jsx("p",{className:"text-2xl font-bold text-gray-900",children:e.value}),d.jsx("p",{className:"text-xs font-medium text-gray-500",children:e.label})]})]},n))}),d.jsxs("div",{className:"space-y-4",children:[d.jsxs("div",{className:"bg-white p-5 rounded-3xl shadow-sm border border-gray-50",children:[d.jsxs("div",{className:"flex justify-between items-center mb-4",children:[d.jsx("h3",{className:"font-bold text-gray-900",children:"Meal Distribution"}),d.jsx(y1,{size:20,className:"text-gray-400"})]}),d.jsx("div",{className:"space-y-4",children:[{type:"Veg",count:98,percent:63,color:"bg-green-500"},{type:"Non-Veg",count:42,percent:27,color:"bg-red-500"},{type:"Jain",count:16,percent:10,color:"bg-yellow-500"}].map((e,n)=>d.jsxs("div",{children:[d.jsxs("div",{className:"flex justify-between text-sm mb-1.5 font-medium",children:[d.jsx("span",{children:e.type}),d.jsx("span",{children:e.count})]}),d.jsx("div",{className:"w-full bg-gray-100 rounded-full h-2.5",children:d.jsx("div",{className:`h-2.5 rounded-full ${e.color}`,style:{width:`${e.percent}%`}})})]},n))})]}),d.jsxs("div",{className:"bg-white p-5 rounded-3xl shadow-sm border border-gray-50",children:[d.jsx("h3",{className:"font-bold mb-4",children:"Recent Activity"}),d.jsx("div",{className:"space-y-4",children:[{msg:'New customer "Rahul Sharma"',time:"10m ago",icon:Fl,color:"bg-blue-100 text-blue-600"},{msg:'Payment from "Anjali Gupta"',time:"45m ago",icon:v1,color:"bg-green-100 text-green-600"},{msg:"Subscription paused: Vikram",time:"2h ago",icon:ms,color:"bg-red-100 text-red-600"}].map((e,n)=>d.jsxs("div",{className:"flex items-center gap-3",children:[d.jsx("div",{className:`p-2 rounded-xl ${e.color}`,children:d.jsx(e.icon,{size:16})}),d.jsxs("div",{className:"flex-1",children:[d.jsx("p",{className:"text-sm font-semibold",children:e.msg}),d.jsx("p",{className:"text-xs text-gray-400",children:e.time})]})]},n))})]})]})]}),A1=()=>{const[t,e]=D.useState(!1),n=[{id:1,name:"Rahul Sharma",phone:"9876543210",plan:"Monthly",type:"Veg",status:"Active"},{id:2,name:"Anjali Gupta",phone:"9822334455",plan:"Weekly",type:"Non-Veg",status:"Active"},{id:3,name:"Vikram Singh",phone:"9988776655",plan:"Monthly",type:"Jain",status:"Paused"}];return d.jsxs("div",{className:"p-4 pb-24",children:[d.jsxs("div",{className:"flex justify-between items-center mb-6",children:[d.jsx("h2",{className:"text-2xl font-bold",children:"Customers"}),d.jsx("button",{onClick:()=>e(!0),className:"bg-blue-600 text-white p-3 rounded-2xl shadow-lg shadow-blue-200",children:d.jsx(Fl,{size:24})})]}),d.jsxs("div",{className:"relative mb-6",children:[d.jsx(T1,{className:"absolute left-4 top-1/2 -translate-y-1/2 text-gray-400",size:20}),d.jsx("input",{type:"text",placeholder:"Search by name or number...",className:"w-full pl-12 pr-4 py-4 bg-white border-0 rounded-3xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"})]}),d.jsx("div",{className:"space-y-4",children:n.map(r=>d.jsxs("div",{className:"bg-white p-4 rounded-3xl shadow-sm border border-gray-50 flex items-center gap-4",children:[d.jsx("div",{className:"w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center text-gray-500 font-bold text-lg",children:r.name[0]}),d.jsxs("div",{className:"flex-1",children:[d.jsx("h4",{className:"font-bold",children:r.name}),d.jsx("p",{className:"text-xs text-gray-500",children:r.phone})]}),d.jsxs("div",{className:"text-right",children:[d.jsxs("div",{className:"flex gap-1 mb-1",children:[d.jsx("span",{className:"px-2 py-0.5 bg-blue-50 text-blue-600 rounded-lg text-[10px] font-bold uppercase",children:r.plan}),d.jsx("span",{className:`px-2 py-0.5 rounded-lg text-[10px] font-bold uppercase ${r.type==="Veg"?"bg-green-50 text-green-600":r.type==="Non-Veg"?"bg-red-50 text-red-600":"bg-yellow-50 text-yellow-600"}`,children:r.type})]}),d.jsx("span",{className:`text-[10px] font-bold ${r.status==="Active"?"text-green-500":"text-orange-500"}`,children:r.status})]})]},r.id))}),t&&d.jsx("div",{className:"fixed inset-0 bg-black/60 backdrop-blur-sm flex items-end justify-center z-50",children:d.jsxs("div",{className:"bg-white rounded-t-[40px] w-full max-w-md p-8 animate-in slide-in-from-bottom duration-300",children:[d.jsx("div",{className:"w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-8"}),d.jsxs("div",{className:"flex justify-between items-center mb-8",children:[d.jsx("h3",{className:"text-2xl font-bold",children:"New Customer"}),d.jsx("button",{onClick:()=>e(!1),className:"bg-gray-100 p-2 rounded-full",children:d.jsx(ms,{size:20})})]}),d.jsxs("div",{className:"space-y-6",children:[d.jsxs("div",{className:"space-y-2",children:[d.jsx("label",{className:"text-sm font-bold text-gray-500 ml-1",children:"FULL NAME"}),d.jsx("input",{type:"text",className:"w-full px-5 py-4 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-blue-500 outline-none",placeholder:"John Doe"})]}),d.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[d.jsxs("div",{className:"space-y-2",children:[d.jsx("label",{className:"text-sm font-bold text-gray-500 ml-1",children:"PHONE"}),d.jsx("input",{type:"tel",className:"w-full px-5 py-4 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-blue-500 outline-none",placeholder:"987654..."})]}),d.jsxs("div",{className:"space-y-2",children:[d.jsx("label",{className:"text-sm font-bold text-gray-500 ml-1",children:"DIET"}),d.jsxs("select",{className:"w-full px-5 py-4 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-blue-500 outline-none appearance-none",children:[d.jsx("option",{children:"Veg"}),d.jsx("option",{children:"Non-Veg"}),d.jsx("option",{children:"Jain"})]})]})]}),d.jsx("button",{className:"w-full bg-blue-600 text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-blue-200 active:scale-95 transition-transform",children:"Save Customer"})]})]})})]})},O1=()=>{const[t,e]=D.useState(new Date),[n,r]=D.useState(()=>{const c=localStorage.getItem("dailyPlans");return c?JSON.parse(c):{}}),[i,s]=D.useState(()=>{const c=localStorage.getItem("defaultPlan");return c?JSON.parse(c):{breakfast:"Poha & Jalebi",lunch:"Dal Tadka, Mix Veg, 4 Roti, Rice, Salad",dinner:"Paneer Butter Masala, 3 Paratha, Rice"}}),[o,a]=D.useState(!1),[l,u]=D.useState(!1),[p,g]=D.useState({type:"breakfast",items:""});D.useEffect(()=>{localStorage.setItem("dailyPlans",JSON.stringify(n))},[n]),D.useEffect(()=>{localStorage.setItem("defaultPlan",JSON.stringify(i))},[i]);const m=t.toDateString(),v=n[m]||i,_=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],S=Array.from({length:7},(c,f)=>{const y=new Date;return y.setDate(y.getDate()+f),y}),L=()=>{p.items.trim()&&(r(c=>({...c,[m]:{...v,[p.type]:p.items}})),a(!1))},h=(c,f)=>{s(y=>({...y,[c]:f}))};return d.jsxs("div",{className:"p-4 pb-24",children:[d.jsxs("div",{className:"flex justify-between items-center mb-6",children:[d.jsx("h2",{className:"text-2xl font-bold",children:"Meal Planner"}),d.jsx("button",{onClick:()=>u(!0),className:"bg-blue-600 text-white p-3 rounded-2xl shadow-lg shadow-blue-200 active:scale-95 transition-transform",children:d.jsx(C1,{size:24})})]}),d.jsx("div",{className:"flex gap-3 overflow-x-auto pb-4 no-scrollbar",children:S.map((c,f)=>d.jsxs("button",{onClick:()=>e(c),className:`flex flex-col items-center min-w-[64px] p-4 rounded-3xl transition-all ${t.toDateString()===c.toDateString()?"bg-blue-600 text-white shadow-lg shadow-blue-200 scale-105":"bg-white text-gray-400 border border-gray-50"}`,children:[d.jsx("span",{className:"text-[10px] font-bold uppercase mb-1",children:_[c.getDay()]}),d.jsx("span",{className:"text-lg font-black",children:c.getDate()})]},f))}),d.jsxs("div",{className:"space-y-4 mt-4",children:[Object.entries(v).map(([c,f],y)=>d.jsxs("div",{className:"bg-white p-5 rounded-[32px] shadow-sm border border-gray-50 relative overflow-hidden",children:[d.jsx("div",{className:`absolute left-0 top-0 bottom-0 w-1.5 ${y===0?"bg-orange-400":y===1?"bg-green-500":"bg-blue-500"}`}),d.jsxs("div",{className:"flex justify-between items-start mb-3",children:[d.jsxs("div",{children:[d.jsx("h4",{className:"text-xs font-black text-gray-400 uppercase tracking-widest",children:c}),d.jsx("p",{className:"font-bold text-gray-900 mt-1",children:f})]}),d.jsx("button",{onClick:()=>{g({type:c,items:f}),a(!0)},className:"p-2 bg-gray-50 rounded-xl text-gray-400",children:d.jsx(x1,{size:16})})]}),d.jsxs("div",{className:"flex gap-2",children:[d.jsx("span",{className:"px-2 py-1 bg-gray-50 text-gray-500 rounded-lg text-[10px] font-bold",children:"142 Orders"}),d.jsx("span",{className:"px-2 py-1 bg-gray-50 text-gray-500 rounded-lg text-[10px] font-bold",children:"Preparation: 2h"})]})]},c)),d.jsxs("button",{onClick:()=>{g({type:"special",items:""}),a(!0)},className:"w-full py-5 border-2 border-dashed border-gray-200 rounded-[32px] text-gray-400 font-bold flex items-center justify-center gap-2 active:scale-95 transition-transform",children:[d.jsx(Fl,{size:20})," Add Special Item"]})]}),o&&d.jsx("div",{className:"fixed inset-0 bg-black/60 backdrop-blur-sm flex items-end justify-center z-50",children:d.jsxs("div",{className:"bg-white rounded-t-[40px] w-full max-w-md p-8 animate-in slide-in-from-bottom duration-300",children:[d.jsx("div",{className:"w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-8"}),d.jsxs("div",{className:"flex justify-between items-center mb-8",children:[d.jsxs("h3",{className:"text-2xl font-bold",children:["Update ",p.type]}),d.jsx("button",{onClick:()=>a(!1),className:"bg-gray-100 p-2 rounded-full",children:d.jsx(ms,{size:20})})]}),d.jsxs("div",{className:"space-y-6",children:[d.jsxs("div",{className:"space-y-2",children:[d.jsx("label",{className:"text-sm font-bold text-gray-500 ml-1",children:"MEAL ITEMS"}),d.jsx("textarea",{value:p.items,onChange:c=>g({...p,items:c.target.value}),className:"w-full px-5 py-4 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-blue-500 outline-none min-h-[100px]",placeholder:"e.g. Dal Tadka, Rice, 4 Roti"})]}),d.jsxs("button",{onClick:L,className:"w-full bg-blue-600 text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-blue-200 active:scale-95 transition-transform",children:["Update for ",t.toLocaleDateString("en-IN",{day:"numeric",month:"short"})]})]})]})}),l&&d.jsx("div",{className:"fixed inset-0 bg-black/60 backdrop-blur-sm flex items-end justify-center z-50",children:d.jsxs("div",{className:"bg-white rounded-t-[40px] w-full max-w-md p-8 animate-in slide-in-from-bottom duration-300 max-h-[80vh] overflow-y-auto",children:[d.jsx("div",{className:"w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-8"}),d.jsxs("div",{className:"flex justify-between items-center mb-8",children:[d.jsx("h3",{className:"text-2xl font-bold",children:"Planner Settings"}),d.jsx("button",{onClick:()=>u(!1),className:"bg-gray-100 p-2 rounded-full",children:d.jsx(ms,{size:20})})]}),d.jsxs("div",{className:"space-y-6",children:[d.jsx("p",{className:"text-sm text-gray-500 font-medium",children:"Set default meals for all days unless modified specifically."}),Object.entries(i).map(([c,f])=>d.jsxs("div",{className:"space-y-2",children:[d.jsx("label",{className:"text-sm font-bold text-gray-500 ml-1 uppercase",children:c}),d.jsx("textarea",{value:f,onChange:y=>h(c,y.target.value),className:"w-full px-5 py-4 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-blue-500 outline-none min-h-[80px]"})]},c)),d.jsx("button",{onClick:()=>u(!1),className:"w-full bg-blue-600 text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-blue-200 active:scale-95 transition-transform",children:"Save Default Menu"})]})]})})]})};function b1(){const[t,e]=D.useState(null),[n,r]=D.useState(!0),[i,s]=D.useState("Dashboard"),[o,a]=D.useState(!1),[l,u]=D.useState(()=>localStorage.getItem("isSubscribed")==="true");D.useEffect(()=>{const m=bw(xr,v=>{e(v),r(!1)});return()=>m()},[]);const p=()=>{u(!0),localStorage.setItem("isSubscribed","true"),s("Dashboard")};if(n)return d.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-50",children:d.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent"})});if(!t)return d.jsx(P1,{});if(!l)return d.jsx(N1,{user:t,onSubscriptionComplete:p});const g=[{icon:k1,label:"Dashboard"},{icon:mp,label:"Customers"},{icon:Lc,label:"Planner"},{icon:gp,label:"Payments"},{icon:$l,label:"Delivery"}];return d.jsxs("div",{className:`min-h-screen font-sans transition-colors duration-300 flex flex-col ${o?"bg-gray-900 text-white":"bg-gray-50 text-gray-900"}`,children:[d.jsxs("main",{className:"flex-1 overflow-y-auto",children:[i==="Dashboard"&&d.jsx(R1,{user:t}),i==="Customers"&&d.jsx(A1,{}),i==="Planner"&&d.jsx(O1,{}),!["Dashboard","Customers","Planner"].includes(i)&&d.jsxs("div",{className:"h-full flex flex-col items-center justify-center p-8 text-center mt-20",children:[d.jsx("div",{className:"w-20 h-20 bg-blue-50 text-blue-500 rounded-3xl flex items-center justify-center mb-6",children:d.jsx(Lc,{size:40})}),d.jsx("h3",{className:"text-2xl font-bold mb-2",children:i}),d.jsx("p",{className:"text-gray-500",children:"Feature currently under development. Stay tuned!"})]})]}),d.jsx("nav",{className:`fixed bottom-0 left-0 right-0 h-20 ${o?"bg-gray-800 border-gray-700":"bg-white border-gray-100"} border-t px-4 flex items-center justify-around z-40 pb-2 shadow-lg`,children:g.map(m=>d.jsxs("button",{onClick:()=>s(m.label),className:`flex flex-col items-center justify-center gap-1 min-w-[64px] transition-all duration-300 ${i===m.label?"text-blue-600 scale-110":"text-gray-400"}`,children:[d.jsx("div",{className:`p-1.5 rounded-xl transition-colors ${i===m.label?"bg-blue-50":""}`,children:d.jsx(m.icon,{size:24,strokeWidth:i===m.label?2.5:2})}),d.jsx("span",{className:`text-[10px] font-bold uppercase tracking-wider ${i===m.label?"opacity-100":"opacity-0 h-0 overflow-hidden"}`,children:m.label})]},m.label))})]})}xo.createRoot(document.getElementById("root")).render(d.jsx(Dp.StrictMode,{children:d.jsx(b1,{})}));
