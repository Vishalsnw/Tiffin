function hT(n,e){for(var t=0;t<e.length;t++){const i=e[t];if(typeof i!="string"&&!Array.isArray(i)){for(const o in i)if(o!=="default"&&!(o in n)){const l=Object.getOwnPropertyDescriptor(i,o);l&&Object.defineProperty(n,o,l.get?l:{enumerable:!0,get:()=>i[o]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function q_(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Rd={exports:{}},Wa={},Cd={exports:{}},Ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fg;function dT(){if(Fg)return Ae;Fg=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),E=Symbol.iterator;function I(b){return b===null||typeof b!="object"?null:(b=E&&b[E]||b["@@iterator"],typeof b=="function"?b:null)}var U={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$=Object.assign,q={};function V(b,K,Ie){this.props=b,this.context=K,this.refs=q,this.updater=Ie||U}V.prototype.isReactComponent={},V.prototype.setState=function(b,K){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,K,"setState")},V.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function re(){}re.prototype=V.prototype;function te(b,K,Ie){this.props=b,this.context=K,this.refs=q,this.updater=Ie||U}var ce=te.prototype=new re;ce.constructor=te,$(ce,V.prototype),ce.isPureReactComponent=!0;var me=Array.isArray,Re=Object.prototype.hasOwnProperty,Ce={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function A(b,K,Ie){var Se,Pe={},ke=null,Ue=null;if(K!=null)for(Se in K.ref!==void 0&&(Ue=K.ref),K.key!==void 0&&(ke=""+K.key),K)Re.call(K,Se)&&!k.hasOwnProperty(Se)&&(Pe[Se]=K[Se]);var Oe=arguments.length-2;if(Oe===1)Pe.children=Ie;else if(1<Oe){for(var Be=Array(Oe),$t=0;$t<Oe;$t++)Be[$t]=arguments[$t+2];Pe.children=Be}if(b&&b.defaultProps)for(Se in Oe=b.defaultProps,Oe)Pe[Se]===void 0&&(Pe[Se]=Oe[Se]);return{$$typeof:n,type:b,key:ke,ref:Ue,props:Pe,_owner:Ce.current}}function C(b,K){return{$$typeof:n,type:b.type,key:K,ref:b.ref,props:b.props,_owner:b._owner}}function D(b){return typeof b=="object"&&b!==null&&b.$$typeof===n}function x(b){var K={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(Ie){return K[Ie]})}var O=/\/+/g;function R(b,K){return typeof b=="object"&&b!==null&&b.key!=null?x(""+b.key):K.toString(36)}function qe(b,K,Ie,Se,Pe){var ke=typeof b;(ke==="undefined"||ke==="boolean")&&(b=null);var Ue=!1;if(b===null)Ue=!0;else switch(ke){case"string":case"number":Ue=!0;break;case"object":switch(b.$$typeof){case n:case e:Ue=!0}}if(Ue)return Ue=b,Pe=Pe(Ue),b=Se===""?"."+R(Ue,0):Se,me(Pe)?(Ie="",b!=null&&(Ie=b.replace(O,"$&/")+"/"),qe(Pe,K,Ie,"",function($t){return $t})):Pe!=null&&(D(Pe)&&(Pe=C(Pe,Ie+(!Pe.key||Ue&&Ue.key===Pe.key?"":(""+Pe.key).replace(O,"$&/")+"/")+b)),K.push(Pe)),1;if(Ue=0,Se=Se===""?".":Se+":",me(b))for(var Oe=0;Oe<b.length;Oe++){ke=b[Oe];var Be=Se+R(ke,Oe);Ue+=qe(ke,K,Ie,Be,Pe)}else if(Be=I(b),typeof Be=="function")for(b=Be.call(b),Oe=0;!(ke=b.next()).done;)ke=ke.value,Be=Se+R(ke,Oe++),Ue+=qe(ke,K,Ie,Be,Pe);else if(ke==="object")throw K=String(b),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.");return Ue}function Et(b,K,Ie){if(b==null)return b;var Se=[],Pe=0;return qe(b,Se,"","",function(ke){return K.call(Ie,ke,Pe++)}),Se}function Vt(b){if(b._status===-1){var K=b._result;K=K(),K.then(function(Ie){(b._status===0||b._status===-1)&&(b._status=1,b._result=Ie)},function(Ie){(b._status===0||b._status===-1)&&(b._status=2,b._result=Ie)}),b._status===-1&&(b._status=0,b._result=K)}if(b._status===1)return b._result.default;throw b._result}var Je={current:null},ee={transition:null},pe={ReactCurrentDispatcher:Je,ReactCurrentBatchConfig:ee,ReactCurrentOwner:Ce};function oe(){throw Error("act(...) is not supported in production builds of React.")}return Ae.Children={map:Et,forEach:function(b,K,Ie){Et(b,function(){K.apply(this,arguments)},Ie)},count:function(b){var K=0;return Et(b,function(){K++}),K},toArray:function(b){return Et(b,function(K){return K})||[]},only:function(b){if(!D(b))throw Error("React.Children.only expected to receive a single React element child.");return b}},Ae.Component=V,Ae.Fragment=t,Ae.Profiler=o,Ae.PureComponent=te,Ae.StrictMode=i,Ae.Suspense=p,Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pe,Ae.act=oe,Ae.cloneElement=function(b,K,Ie){if(b==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+b+".");var Se=$({},b.props),Pe=b.key,ke=b.ref,Ue=b._owner;if(K!=null){if(K.ref!==void 0&&(ke=K.ref,Ue=Ce.current),K.key!==void 0&&(Pe=""+K.key),b.type&&b.type.defaultProps)var Oe=b.type.defaultProps;for(Be in K)Re.call(K,Be)&&!k.hasOwnProperty(Be)&&(Se[Be]=K[Be]===void 0&&Oe!==void 0?Oe[Be]:K[Be])}var Be=arguments.length-2;if(Be===1)Se.children=Ie;else if(1<Be){Oe=Array(Be);for(var $t=0;$t<Be;$t++)Oe[$t]=arguments[$t+2];Se.children=Oe}return{$$typeof:n,type:b.type,key:Pe,ref:ke,props:Se,_owner:Ue}},Ae.createContext=function(b){return b={$$typeof:c,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},b.Provider={$$typeof:l,_context:b},b.Consumer=b},Ae.createElement=A,Ae.createFactory=function(b){var K=A.bind(null,b);return K.type=b,K},Ae.createRef=function(){return{current:null}},Ae.forwardRef=function(b){return{$$typeof:f,render:b}},Ae.isValidElement=D,Ae.lazy=function(b){return{$$typeof:w,_payload:{_status:-1,_result:b},_init:Vt}},Ae.memo=function(b,K){return{$$typeof:y,type:b,compare:K===void 0?null:K}},Ae.startTransition=function(b){var K=ee.transition;ee.transition={};try{b()}finally{ee.transition=K}},Ae.unstable_act=oe,Ae.useCallback=function(b,K){return Je.current.useCallback(b,K)},Ae.useContext=function(b){return Je.current.useContext(b)},Ae.useDebugValue=function(){},Ae.useDeferredValue=function(b){return Je.current.useDeferredValue(b)},Ae.useEffect=function(b,K){return Je.current.useEffect(b,K)},Ae.useId=function(){return Je.current.useId()},Ae.useImperativeHandle=function(b,K,Ie){return Je.current.useImperativeHandle(b,K,Ie)},Ae.useInsertionEffect=function(b,K){return Je.current.useInsertionEffect(b,K)},Ae.useLayoutEffect=function(b,K){return Je.current.useLayoutEffect(b,K)},Ae.useMemo=function(b,K){return Je.current.useMemo(b,K)},Ae.useReducer=function(b,K,Ie){return Je.current.useReducer(b,K,Ie)},Ae.useRef=function(b){return Je.current.useRef(b)},Ae.useState=function(b){return Je.current.useState(b)},Ae.useSyncExternalStore=function(b,K,Ie){return Je.current.useSyncExternalStore(b,K,Ie)},Ae.useTransition=function(){return Je.current.useTransition()},Ae.version="18.3.1",Ae}var Ug;function kf(){return Ug||(Ug=1,Cd.exports=dT()),Cd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jg;function fT(){if(jg)return Wa;jg=1;var n=kf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(f,p,y){var w,E={},I=null,U=null;y!==void 0&&(I=""+y),p.key!==void 0&&(I=""+p.key),p.ref!==void 0&&(U=p.ref);for(w in p)i.call(p,w)&&!l.hasOwnProperty(w)&&(E[w]=p[w]);if(f&&f.defaultProps)for(w in p=f.defaultProps,p)E[w]===void 0&&(E[w]=p[w]);return{$$typeof:e,type:f,key:I,ref:U,props:E,_owner:o.current}}return Wa.Fragment=t,Wa.jsx=c,Wa.jsxs=c,Wa}var zg;function pT(){return zg||(zg=1,Rd.exports=fT()),Rd.exports}var B=pT(),J=kf();const W_=q_(J),mT=hT({__proto__:null,default:W_},[J]);var qu={},Pd={exports:{}},Zt={},kd={exports:{}},xd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bg;function gT(){return Bg||(Bg=1,(function(n){function e(ee,pe){var oe=ee.length;ee.push(pe);e:for(;0<oe;){var b=oe-1>>>1,K=ee[b];if(0<o(K,pe))ee[b]=pe,ee[oe]=K,oe=b;else break e}}function t(ee){return ee.length===0?null:ee[0]}function i(ee){if(ee.length===0)return null;var pe=ee[0],oe=ee.pop();if(oe!==pe){ee[0]=oe;e:for(var b=0,K=ee.length,Ie=K>>>1;b<Ie;){var Se=2*(b+1)-1,Pe=ee[Se],ke=Se+1,Ue=ee[ke];if(0>o(Pe,oe))ke<K&&0>o(Ue,Pe)?(ee[b]=Ue,ee[ke]=oe,b=ke):(ee[b]=Pe,ee[Se]=oe,b=Se);else if(ke<K&&0>o(Ue,oe))ee[b]=Ue,ee[ke]=oe,b=ke;else break e}}return pe}function o(ee,pe){var oe=ee.sortIndex-pe.sortIndex;return oe!==0?oe:ee.id-pe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();n.unstable_now=function(){return c.now()-f}}var p=[],y=[],w=1,E=null,I=3,U=!1,$=!1,q=!1,V=typeof setTimeout=="function"?setTimeout:null,re=typeof clearTimeout=="function"?clearTimeout:null,te=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ce(ee){for(var pe=t(y);pe!==null;){if(pe.callback===null)i(y);else if(pe.startTime<=ee)i(y),pe.sortIndex=pe.expirationTime,e(p,pe);else break;pe=t(y)}}function me(ee){if(q=!1,ce(ee),!$)if(t(p)!==null)$=!0,Vt(Re);else{var pe=t(y);pe!==null&&Je(me,pe.startTime-ee)}}function Re(ee,pe){$=!1,q&&(q=!1,re(A),A=-1),U=!0;var oe=I;try{for(ce(pe),E=t(p);E!==null&&(!(E.expirationTime>pe)||ee&&!x());){var b=E.callback;if(typeof b=="function"){E.callback=null,I=E.priorityLevel;var K=b(E.expirationTime<=pe);pe=n.unstable_now(),typeof K=="function"?E.callback=K:E===t(p)&&i(p),ce(pe)}else i(p);E=t(p)}if(E!==null)var Ie=!0;else{var Se=t(y);Se!==null&&Je(me,Se.startTime-pe),Ie=!1}return Ie}finally{E=null,I=oe,U=!1}}var Ce=!1,k=null,A=-1,C=5,D=-1;function x(){return!(n.unstable_now()-D<C)}function O(){if(k!==null){var ee=n.unstable_now();D=ee;var pe=!0;try{pe=k(!0,ee)}finally{pe?R():(Ce=!1,k=null)}}else Ce=!1}var R;if(typeof te=="function")R=function(){te(O)};else if(typeof MessageChannel<"u"){var qe=new MessageChannel,Et=qe.port2;qe.port1.onmessage=O,R=function(){Et.postMessage(null)}}else R=function(){V(O,0)};function Vt(ee){k=ee,Ce||(Ce=!0,R())}function Je(ee,pe){A=V(function(){ee(n.unstable_now())},pe)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(ee){ee.callback=null},n.unstable_continueExecution=function(){$||U||($=!0,Vt(Re))},n.unstable_forceFrameRate=function(ee){0>ee||125<ee?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<ee?Math.floor(1e3/ee):5},n.unstable_getCurrentPriorityLevel=function(){return I},n.unstable_getFirstCallbackNode=function(){return t(p)},n.unstable_next=function(ee){switch(I){case 1:case 2:case 3:var pe=3;break;default:pe=I}var oe=I;I=pe;try{return ee()}finally{I=oe}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(ee,pe){switch(ee){case 1:case 2:case 3:case 4:case 5:break;default:ee=3}var oe=I;I=ee;try{return pe()}finally{I=oe}},n.unstable_scheduleCallback=function(ee,pe,oe){var b=n.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?b+oe:b):oe=b,ee){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=oe+K,ee={id:w++,callback:pe,priorityLevel:ee,startTime:oe,expirationTime:K,sortIndex:-1},oe>b?(ee.sortIndex=oe,e(y,ee),t(p)===null&&ee===t(y)&&(q?(re(A),A=-1):q=!0,Je(me,oe-b))):(ee.sortIndex=K,e(p,ee),$||U||($=!0,Vt(Re))),ee},n.unstable_shouldYield=x,n.unstable_wrapCallback=function(ee){var pe=I;return function(){var oe=I;I=pe;try{return ee.apply(this,arguments)}finally{I=oe}}}})(xd)),xd}var $g;function yT(){return $g||($g=1,kd.exports=gT()),kd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qg;function _T(){if(qg)return Zt;qg=1;var n=kf(),e=yT();function t(r){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+r,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function l(r,s){c(r,s),c(r+"Capture",s)}function c(r,s){for(o[r]=s,r=0;r<s.length;r++)i.add(s[r])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},E={};function I(r){return p.call(E,r)?!0:p.call(w,r)?!1:y.test(r)?E[r]=!0:(w[r]=!0,!1)}function U(r,s,a,h){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return h?!1:a!==null?!a.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function $(r,s,a,h){if(s===null||typeof s>"u"||U(r,s,a,h))return!0;if(h)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function q(r,s,a,h,d,m,v){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=h,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=r,this.type=s,this.sanitizeURL=m,this.removeEmptyString=v}var V={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){V[r]=new q(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var s=r[0];V[s]=new q(s,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){V[r]=new q(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){V[r]=new q(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){V[r]=new q(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){V[r]=new q(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){V[r]=new q(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){V[r]=new q(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){V[r]=new q(r,5,!1,r.toLowerCase(),null,!1,!1)});var re=/[\-:]([a-z])/g;function te(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var s=r.replace(re,te);V[s]=new q(s,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var s=r.replace(re,te);V[s]=new q(s,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var s=r.replace(re,te);V[s]=new q(s,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){V[r]=new q(r,1,!1,r.toLowerCase(),null,!1,!1)}),V.xlinkHref=new q("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){V[r]=new q(r,1,!1,r.toLowerCase(),null,!0,!0)});function ce(r,s,a,h){var d=V.hasOwnProperty(s)?V[s]:null;(d!==null?d.type!==0:h||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&($(s,a,d,h)&&(a=null),h||d===null?I(s)&&(a===null?r.removeAttribute(s):r.setAttribute(s,""+a)):d.mustUseProperty?r[d.propertyName]=a===null?d.type===3?!1:"":a:(s=d.attributeName,h=d.attributeNamespace,a===null?r.removeAttribute(s):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,h?r.setAttributeNS(h,s,a):r.setAttribute(s,a))))}var me=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Re=Symbol.for("react.element"),Ce=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),D=Symbol.for("react.provider"),x=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),qe=Symbol.for("react.suspense_list"),Et=Symbol.for("react.memo"),Vt=Symbol.for("react.lazy"),Je=Symbol.for("react.offscreen"),ee=Symbol.iterator;function pe(r){return r===null||typeof r!="object"?null:(r=ee&&r[ee]||r["@@iterator"],typeof r=="function"?r:null)}var oe=Object.assign,b;function K(r){if(b===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);b=s&&s[1]||""}return`
`+b+r}var Ie=!1;function Se(r,s){if(!r||Ie)return"";Ie=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(j){var h=j}Reflect.construct(r,[],s)}else{try{s.call()}catch(j){h=j}r.call(s.prototype)}else{try{throw Error()}catch(j){h=j}r()}}catch(j){if(j&&h&&typeof j.stack=="string"){for(var d=j.stack.split(`
`),m=h.stack.split(`
`),v=d.length-1,S=m.length-1;1<=v&&0<=S&&d[v]!==m[S];)S--;for(;1<=v&&0<=S;v--,S--)if(d[v]!==m[S]){if(v!==1||S!==1)do if(v--,S--,0>S||d[v]!==m[S]){var P=`
`+d[v].replace(" at new "," at ");return r.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",r.displayName)),P}while(1<=v&&0<=S);break}}}finally{Ie=!1,Error.prepareStackTrace=a}return(r=r?r.displayName||r.name:"")?K(r):""}function Pe(r){switch(r.tag){case 5:return K(r.type);case 16:return K("Lazy");case 13:return K("Suspense");case 19:return K("SuspenseList");case 0:case 2:case 15:return r=Se(r.type,!1),r;case 11:return r=Se(r.type.render,!1),r;case 1:return r=Se(r.type,!0),r;default:return""}}function ke(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case k:return"Fragment";case Ce:return"Portal";case C:return"Profiler";case A:return"StrictMode";case R:return"Suspense";case qe:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case x:return(r.displayName||"Context")+".Consumer";case D:return(r._context.displayName||"Context")+".Provider";case O:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case Et:return s=r.displayName||null,s!==null?s:ke(r.type)||"Memo";case Vt:s=r._payload,r=r._init;try{return ke(r(s))}catch{}}return null}function Ue(r){var s=r.type;switch(r.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=s.render,r=r.displayName||r.name||"",s.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ke(s);case 8:return s===A?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Oe(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function Be(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function $t(r){var s=Be(r)?"checked":"value",a=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),h=""+r[s];if(!r.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,m=a.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return d.call(this)},set:function(v){h=""+v,m.call(this,v)}}),Object.defineProperty(r,s,{enumerable:a.enumerable}),{getValue:function(){return h},setValue:function(v){h=""+v},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function Ds(r){r._valueTracker||(r._valueTracker=$t(r))}function Jo(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var a=s.getValue(),h="";return r&&(h=Be(r)?r.checked?"true":"false":r.value),r=h,r!==a?(s.setValue(r),!0):!1}function zr(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function Vs(r,s){var a=s.checked;return oe({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??r._wrapperState.initialChecked})}function kl(r,s){var a=s.defaultValue==null?"":s.defaultValue,h=s.checked!=null?s.checked:s.defaultChecked;a=Oe(s.value!=null?s.value:a),r._wrapperState={initialChecked:h,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function bs(r,s){s=s.checked,s!=null&&ce(r,"checked",s,!1)}function ji(r,s){bs(r,s);var a=Oe(s.value),h=s.type;if(a!=null)h==="number"?(a===0&&r.value===""||r.value!=a)&&(r.value=""+a):r.value!==""+a&&(r.value=""+a);else if(h==="submit"||h==="reset"){r.removeAttribute("value");return}s.hasOwnProperty("value")?ct(r,s.type,a):s.hasOwnProperty("defaultValue")&&ct(r,s.type,Oe(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(r.defaultChecked=!!s.defaultChecked)}function Xo(r,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var h=s.type;if(!(h!=="submit"&&h!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+r._wrapperState.initialValue,a||s===r.value||(r.value=s),r.defaultValue=s}a=r.name,a!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,a!==""&&(r.name=a)}function ct(r,s,a){(s!=="number"||zr(r.ownerDocument)!==r)&&(a==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+a&&(r.defaultValue=""+a))}var ot=Array.isArray;function An(r,s,a,h){if(r=r.options,s){s={};for(var d=0;d<a.length;d++)s["$"+a[d]]=!0;for(a=0;a<r.length;a++)d=s.hasOwnProperty("$"+r[a].value),r[a].selected!==d&&(r[a].selected=d),d&&h&&(r[a].defaultSelected=!0)}else{for(a=""+Oe(a),s=null,d=0;d<r.length;d++){if(r[d].value===a){r[d].selected=!0,h&&(r[d].defaultSelected=!0);return}s!==null||r[d].disabled||(s=r[d])}s!==null&&(s.selected=!0)}}function Zo(r,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return oe({},s,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function ea(r,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(ot(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}r._wrapperState={initialValue:Oe(a)}}function xl(r,s){var a=Oe(s.value),h=Oe(s.defaultValue);a!=null&&(a=""+a,a!==r.value&&(r.value=a),s.defaultValue==null&&r.defaultValue!==a&&(r.defaultValue=a)),h!=null&&(r.defaultValue=""+h)}function Br(r){var s=r.textContent;s===r._wrapperState.initialValue&&s!==""&&s!==null&&(r.value=s)}function ta(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Os(r,s){return r==null||r==="http://www.w3.org/1999/xhtml"?ta(s):r==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var $r,Nl=(function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,h,d){MSApp.execUnsafeLocalFunction(function(){return r(s,a,h,d)})}:r})(function(r,s){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=s;else{for($r=$r||document.createElement("div"),$r.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=$r.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;s.firstChild;)r.appendChild(s.firstChild)}});function zi(r,s){if(s){var a=r.firstChild;if(a&&a===r.lastChild&&a.nodeType===3){a.nodeValue=s;return}}r.textContent=s}var qr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Dl=["Webkit","ms","Moz","O"];Object.keys(qr).forEach(function(r){Dl.forEach(function(s){s=s+r.charAt(0).toUpperCase()+r.substring(1),qr[s]=qr[r]})});function Wr(r,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||qr.hasOwnProperty(r)&&qr[r]?(""+s).trim():s+"px"}function Ls(r,s){r=r.style;for(var a in s)if(s.hasOwnProperty(a)){var h=a.indexOf("--")===0,d=Wr(a,s[a],h);a==="float"&&(a="cssFloat"),h?r.setProperty(a,d):r[a]=d}}var na=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Rn(r,s){if(s){if(na[r]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function Ms(r,s){if(r.indexOf("-")===-1)return typeof s.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hr=null;function Fs(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var mr=null,gr=null,rt=null;function ra(r){if(r=xa(r)){if(typeof mr!="function")throw Error(t(280));var s=r.stateNode;s&&(s=su(s),mr(r.stateNode,r.type,s))}}function Kr(r){gr?rt?rt.push(r):rt=[r]:gr=r}function Gr(){if(gr){var r=gr,s=rt;if(rt=gr=null,ra(r),s)for(r=0;r<s.length;r++)ra(s[r])}}function Vl(r,s){return r(s)}function bl(){}var $n=!1;function Ol(r,s,a){if($n)return r(s,a);$n=!0;try{return Vl(r,s,a)}finally{$n=!1,(gr!==null||rt!==null)&&(bl(),Gr())}}function Bi(r,s){var a=r.stateNode;if(a===null)return null;var h=su(a);if(h===null)return null;a=h[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(r=r.type,h=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!h;break e;default:r=!1}if(r)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var Qr=!1;if(f)try{var Yr={};Object.defineProperty(Yr,"passive",{get:function(){Qr=!0}}),window.addEventListener("test",Yr,Yr),window.removeEventListener("test",Yr,Yr)}catch{Qr=!1}function Ll(r,s,a,h,d,m,v,S,P){var j=Array.prototype.slice.call(arguments,3);try{s.apply(a,j)}catch(Q){this.onError(Q)}}var yr=!1,qn=null,Us=!1,pn=null,Ml={onError:function(r){yr=!0,qn=r}};function Fl(r,s,a,h,d,m,v,S,P){yr=!1,qn=null,Ll.apply(Ml,arguments)}function ia(r,s,a,h,d,m,v,S,P){if(Fl.apply(this,arguments),yr){if(yr){var j=qn;yr=!1,qn=null}else throw Error(t(198));Us||(Us=!0,pn=j)}}function Cn(r){var s=r,a=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,(s.flags&4098)!==0&&(a=s.return),r=s.return;while(r)}return s.tag===3?a:null}function sa(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function Ul(r){if(Cn(r)!==r)throw Error(t(188))}function jl(r){var s=r.alternate;if(!s){if(s=Cn(r),s===null)throw Error(t(188));return s!==r?null:r}for(var a=r,h=s;;){var d=a.return;if(d===null)break;var m=d.alternate;if(m===null){if(h=d.return,h!==null){a=h;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===a)return Ul(d),r;if(m===h)return Ul(d),s;m=m.sibling}throw Error(t(188))}if(a.return!==h.return)a=d,h=m;else{for(var v=!1,S=d.child;S;){if(S===a){v=!0,a=d,h=m;break}if(S===h){v=!0,h=d,a=m;break}S=S.sibling}if(!v){for(S=m.child;S;){if(S===a){v=!0,a=m,h=d;break}if(S===h){v=!0,h=m,a=d;break}S=S.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==h)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?r:s}function zl(r){return r=jl(r),r!==null?$i(r):null}function $i(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var s=$i(r);if(s!==null)return s;r=r.sibling}return null}var oa=e.unstable_scheduleCallback,js=e.unstable_cancelCallback,qi=e.unstable_shouldYield,_r=e.unstable_requestPaint,Ke=e.unstable_now,rh=e.unstable_getCurrentPriorityLevel,zs=e.unstable_ImmediatePriority,aa=e.unstable_UserBlockingPriority,Wi=e.unstable_NormalPriority,la=e.unstable_LowPriority,Bs=e.unstable_IdlePriority,Hi=null,tn=null;function Bl(r){if(tn&&typeof tn.onCommitFiberRoot=="function")try{tn.onCommitFiberRoot(Hi,r,void 0,(r.current.flags&128)===128)}catch{}}var nn=Math.clz32?Math.clz32:Ki,Wn=Math.log,mn=Math.LN2;function Ki(r){return r>>>=0,r===0?32:31-(Wn(r)/mn|0)|0}var Hn=64,Jr=4194304;function Fe(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function vr(r,s){var a=r.pendingLanes;if(a===0)return 0;var h=0,d=r.suspendedLanes,m=r.pingedLanes,v=a&268435455;if(v!==0){var S=v&~d;S!==0?h=Fe(S):(m&=v,m!==0&&(h=Fe(m)))}else v=a&~d,v!==0?h=Fe(v):m!==0&&(h=Fe(m));if(h===0)return 0;if(s!==0&&s!==h&&(s&d)===0&&(d=h&-h,m=s&-s,d>=m||d===16&&(m&4194240)!==0))return s;if((h&4)!==0&&(h|=a&16),s=r.entangledLanes,s!==0)for(r=r.entanglements,s&=h;0<s;)a=31-nn(s),d=1<<a,h|=r[a],s&=~d;return h}function Gi(r,s){switch(r){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qi(r,s){for(var a=r.suspendedLanes,h=r.pingedLanes,d=r.expirationTimes,m=r.pendingLanes;0<m;){var v=31-nn(m),S=1<<v,P=d[v];P===-1?((S&a)===0||(S&h)!==0)&&(d[v]=Gi(S,s)):P<=s&&(r.expiredLanes|=S),m&=~S}}function ua(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function ca(){var r=Hn;return Hn<<=1,(Hn&4194240)===0&&(Hn=64),r}function ha(r){for(var s=[],a=0;31>a;a++)s.push(r);return s}function Yi(r,s,a){r.pendingLanes|=s,s!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,s=31-nn(s),r[s]=a}function ih(r,s){var a=r.pendingLanes&~s;r.pendingLanes=s,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=s,r.mutableReadLanes&=s,r.entangledLanes&=s,s=r.entanglements;var h=r.eventTimes;for(r=r.expirationTimes;0<a;){var d=31-nn(a),m=1<<d;s[d]=0,h[d]=-1,r[d]=-1,a&=~m}}function da(r,s){var a=r.entangledLanes|=s;for(r=r.entanglements;a;){var h=31-nn(a),d=1<<h;d&s|r[h]&s&&(r[h]|=s),a&=~d}}var Ve=0;function Kn(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var fa,$s,pa,ma,ga,Gn=!1,qs=[],Qn=null,Yn=null,Rt=null,Ji=new Map,wr=new Map,rn=[],$l="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xr(r,s){switch(r){case"focusin":case"focusout":Qn=null;break;case"dragenter":case"dragleave":Yn=null;break;case"mouseover":case"mouseout":Rt=null;break;case"pointerover":case"pointerout":Ji.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":wr.delete(s.pointerId)}}function Pn(r,s,a,h,d,m){return r===null||r.nativeEvent!==m?(r={blockedOn:s,domEventName:a,eventSystemFlags:h,nativeEvent:m,targetContainers:[d]},s!==null&&(s=xa(s),s!==null&&$s(s)),r):(r.eventSystemFlags|=h,s=r.targetContainers,d!==null&&s.indexOf(d)===-1&&s.push(d),r)}function ql(r,s,a,h,d){switch(s){case"focusin":return Qn=Pn(Qn,r,s,a,h,d),!0;case"dragenter":return Yn=Pn(Yn,r,s,a,h,d),!0;case"mouseover":return Rt=Pn(Rt,r,s,a,h,d),!0;case"pointerover":var m=d.pointerId;return Ji.set(m,Pn(Ji.get(m)||null,r,s,a,h,d)),!0;case"gotpointercapture":return m=d.pointerId,wr.set(m,Pn(wr.get(m)||null,r,s,a,h,d)),!0}return!1}function Ws(r){var s=ts(r.target);if(s!==null){var a=Cn(s);if(a!==null){if(s=a.tag,s===13){if(s=sa(a),s!==null){r.blockedOn=s,ga(r.priority,function(){pa(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){r.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}r.blockedOn=null}function $e(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var a=Hs(r.domEventName,r.eventSystemFlags,s[0],r.nativeEvent);if(a===null){a=r.nativeEvent;var h=new a.constructor(a.type,a);Hr=h,a.target.dispatchEvent(h),Hr=null}else return s=xa(a),s!==null&&$s(s),r.blockedOn=a,!1;s.shift()}return!0}function Wl(r,s,a){$e(r)&&a.delete(s)}function sh(){Gn=!1,Qn!==null&&$e(Qn)&&(Qn=null),Yn!==null&&$e(Yn)&&(Yn=null),Rt!==null&&$e(Rt)&&(Rt=null),Ji.forEach(Wl),wr.forEach(Wl)}function Zr(r,s){r.blockedOn===s&&(r.blockedOn=null,Gn||(Gn=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,sh)))}function ei(r){function s(d){return Zr(d,r)}if(0<qs.length){Zr(qs[0],r);for(var a=1;a<qs.length;a++){var h=qs[a];h.blockedOn===r&&(h.blockedOn=null)}}for(Qn!==null&&Zr(Qn,r),Yn!==null&&Zr(Yn,r),Rt!==null&&Zr(Rt,r),Ji.forEach(s),wr.forEach(s),a=0;a<rn.length;a++)h=rn[a],h.blockedOn===r&&(h.blockedOn=null);for(;0<rn.length&&(a=rn[0],a.blockedOn===null);)Ws(a),a.blockedOn===null&&rn.shift()}var Er=me.ReactCurrentBatchConfig,Tr=!0;function Jn(r,s,a,h){var d=Ve,m=Er.transition;Er.transition=null;try{Ve=1,ya(r,s,a,h)}finally{Ve=d,Er.transition=m}}function Hl(r,s,a,h){var d=Ve,m=Er.transition;Er.transition=null;try{Ve=4,ya(r,s,a,h)}finally{Ve=d,Er.transition=m}}function ya(r,s,a,h){if(Tr){var d=Hs(r,s,a,h);if(d===null)gh(r,s,h,Xn,a),Xr(r,h);else if(ql(d,r,s,a,h))h.stopPropagation();else if(Xr(r,h),s&4&&-1<$l.indexOf(r)){for(;d!==null;){var m=xa(d);if(m!==null&&fa(m),m=Hs(r,s,a,h),m===null&&gh(r,s,h,Xn,a),m===d)break;d=m}d!==null&&h.stopPropagation()}else gh(r,s,h,null,a)}}var Xn=null;function Hs(r,s,a,h){if(Xn=null,r=Fs(h),r=ts(r),r!==null)if(s=Cn(r),s===null)r=null;else if(a=s.tag,a===13){if(r=sa(s),r!==null)return r;r=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null);return Xn=r,null}function Ks(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(rh()){case zs:return 1;case aa:return 4;case Wi:case la:return 16;case Bs:return 536870912;default:return 16}default:return 16}}var sn=null,Gs=null,Ir=null;function Kl(){if(Ir)return Ir;var r,s=Gs,a=s.length,h,d="value"in sn?sn.value:sn.textContent,m=d.length;for(r=0;r<a&&s[r]===d[r];r++);var v=a-r;for(h=1;h<=v&&s[a-h]===d[m-h];h++);return Ir=d.slice(r,1<h?1-h:void 0)}function Xi(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function Zn(){return!0}function _a(){return!1}function bt(r){function s(a,h,d,m,v){this._reactName=a,this._targetInst=d,this.type=h,this.nativeEvent=m,this.target=v,this.currentTarget=null;for(var S in r)r.hasOwnProperty(S)&&(a=r[S],this[S]=a?a(m):m[S]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Zn:_a,this.isPropagationStopped=_a,this}return oe(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Zn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Zn)},persist:function(){},isPersistent:Zn}),s}var er={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zi=bt(er),ti=oe({},er,{view:0,detail:0}),Qs=bt(ti),Ys,Js,on,es=oe({},ti,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ee,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==on&&(on&&r.type==="mousemove"?(Ys=r.screenX-on.screenX,Js=r.screenY-on.screenY):Js=Ys=0,on=r),Ys)},movementY:function(r){return"movementY"in r?r.movementY:Js}}),va=bt(es),Gl=oe({},es,{dataTransfer:0}),Ql=bt(Gl),Xs=oe({},ti,{relatedTarget:0}),Ct=bt(Xs),Yl=oe({},er,{animationName:0,elapsedTime:0,pseudoElement:0}),Jl=bt(Yl),ni=oe({},er,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),u=bt(ni),g=oe({},er,{data:0}),_=bt(g),T={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},M={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},z={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Z(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=z[r])?!!s[r]:!1}function Ee(){return Z}var at=oe({},ti,{key:function(r){if(r.key){var s=T[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=Xi(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?M[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ee,charCode:function(r){return r.type==="keypress"?Xi(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Xi(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),ze=bt(at),ht=oe({},es,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),an=bt(ht),Sr=oe({},ti,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ee}),tr=bt(Sr),nr=oe({},er,{propertyName:0,elapsedTime:0,pseudoElement:0}),Zs=bt(nr),wa=oe({},es,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),s0=bt(wa),o0=[9,13,27,32],oh=f&&"CompositionEvent"in window,Ea=null;f&&"documentMode"in document&&(Ea=document.documentMode);var a0=f&&"TextEvent"in window&&!Ea,xp=f&&(!oh||Ea&&8<Ea&&11>=Ea),Np=" ",Dp=!1;function Vp(r,s){switch(r){case"keyup":return o0.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bp(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var eo=!1;function l0(r,s){switch(r){case"compositionend":return bp(s);case"keypress":return s.which!==32?null:(Dp=!0,Np);case"textInput":return r=s.data,r===Np&&Dp?null:r;default:return null}}function u0(r,s){if(eo)return r==="compositionend"||!oh&&Vp(r,s)?(r=Kl(),Ir=Gs=sn=null,eo=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return xp&&s.locale!=="ko"?null:s.data;default:return null}}var c0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Op(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!c0[r.type]:s==="textarea"}function Lp(r,s,a,h){Kr(h),s=nu(s,"onChange"),0<s.length&&(a=new Zi("onChange","change",null,a,h),r.push({event:a,listeners:s}))}var Ta=null,Ia=null;function h0(r){em(r,0)}function Xl(r){var s=so(r);if(Jo(s))return r}function d0(r,s){if(r==="change")return s}var Mp=!1;if(f){var ah;if(f){var lh="oninput"in document;if(!lh){var Fp=document.createElement("div");Fp.setAttribute("oninput","return;"),lh=typeof Fp.oninput=="function"}ah=lh}else ah=!1;Mp=ah&&(!document.documentMode||9<document.documentMode)}function Up(){Ta&&(Ta.detachEvent("onpropertychange",jp),Ia=Ta=null)}function jp(r){if(r.propertyName==="value"&&Xl(Ia)){var s=[];Lp(s,Ia,r,Fs(r)),Ol(h0,s)}}function f0(r,s,a){r==="focusin"?(Up(),Ta=s,Ia=a,Ta.attachEvent("onpropertychange",jp)):r==="focusout"&&Up()}function p0(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return Xl(Ia)}function m0(r,s){if(r==="click")return Xl(s)}function g0(r,s){if(r==="input"||r==="change")return Xl(s)}function y0(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var kn=typeof Object.is=="function"?Object.is:y0;function Sa(r,s){if(kn(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var a=Object.keys(r),h=Object.keys(s);if(a.length!==h.length)return!1;for(h=0;h<a.length;h++){var d=a[h];if(!p.call(s,d)||!kn(r[d],s[d]))return!1}return!0}function zp(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function Bp(r,s){var a=zp(r);r=0;for(var h;a;){if(a.nodeType===3){if(h=r+a.textContent.length,r<=s&&h>=s)return{node:a,offset:s-r};r=h}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=zp(a)}}function $p(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?$p(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function qp(){for(var r=window,s=zr();s instanceof r.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)r=s.contentWindow;else break;s=zr(r.document)}return s}function uh(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}function _0(r){var s=qp(),a=r.focusedElem,h=r.selectionRange;if(s!==a&&a&&a.ownerDocument&&$p(a.ownerDocument.documentElement,a)){if(h!==null&&uh(a)){if(s=h.start,r=h.end,r===void 0&&(r=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(r,a.value.length);else if(r=(s=a.ownerDocument||document)&&s.defaultView||window,r.getSelection){r=r.getSelection();var d=a.textContent.length,m=Math.min(h.start,d);h=h.end===void 0?m:Math.min(h.end,d),!r.extend&&m>h&&(d=h,h=m,m=d),d=Bp(a,m);var v=Bp(a,h);d&&v&&(r.rangeCount!==1||r.anchorNode!==d.node||r.anchorOffset!==d.offset||r.focusNode!==v.node||r.focusOffset!==v.offset)&&(s=s.createRange(),s.setStart(d.node,d.offset),r.removeAllRanges(),m>h?(r.addRange(s),r.extend(v.node,v.offset)):(s.setEnd(v.node,v.offset),r.addRange(s)))}}for(s=[],r=a;r=r.parentNode;)r.nodeType===1&&s.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)r=s[a],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var v0=f&&"documentMode"in document&&11>=document.documentMode,to=null,ch=null,Aa=null,hh=!1;function Wp(r,s,a){var h=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;hh||to==null||to!==zr(h)||(h=to,"selectionStart"in h&&uh(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),Aa&&Sa(Aa,h)||(Aa=h,h=nu(ch,"onSelect"),0<h.length&&(s=new Zi("onSelect","select",null,s,a),r.push({event:s,listeners:h}),s.target=to)))}function Zl(r,s){var a={};return a[r.toLowerCase()]=s.toLowerCase(),a["Webkit"+r]="webkit"+s,a["Moz"+r]="moz"+s,a}var no={animationend:Zl("Animation","AnimationEnd"),animationiteration:Zl("Animation","AnimationIteration"),animationstart:Zl("Animation","AnimationStart"),transitionend:Zl("Transition","TransitionEnd")},dh={},Hp={};f&&(Hp=document.createElement("div").style,"AnimationEvent"in window||(delete no.animationend.animation,delete no.animationiteration.animation,delete no.animationstart.animation),"TransitionEvent"in window||delete no.transitionend.transition);function eu(r){if(dh[r])return dh[r];if(!no[r])return r;var s=no[r],a;for(a in s)if(s.hasOwnProperty(a)&&a in Hp)return dh[r]=s[a];return r}var Kp=eu("animationend"),Gp=eu("animationiteration"),Qp=eu("animationstart"),Yp=eu("transitionend"),Jp=new Map,Xp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ri(r,s){Jp.set(r,s),l(s,[r])}for(var fh=0;fh<Xp.length;fh++){var ph=Xp[fh],w0=ph.toLowerCase(),E0=ph[0].toUpperCase()+ph.slice(1);ri(w0,"on"+E0)}ri(Kp,"onAnimationEnd"),ri(Gp,"onAnimationIteration"),ri(Qp,"onAnimationStart"),ri("dblclick","onDoubleClick"),ri("focusin","onFocus"),ri("focusout","onBlur"),ri(Yp,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ra="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),T0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ra));function Zp(r,s,a){var h=r.type||"unknown-event";r.currentTarget=a,ia(h,s,void 0,r),r.currentTarget=null}function em(r,s){s=(s&4)!==0;for(var a=0;a<r.length;a++){var h=r[a],d=h.event;h=h.listeners;e:{var m=void 0;if(s)for(var v=h.length-1;0<=v;v--){var S=h[v],P=S.instance,j=S.currentTarget;if(S=S.listener,P!==m&&d.isPropagationStopped())break e;Zp(d,S,j),m=P}else for(v=0;v<h.length;v++){if(S=h[v],P=S.instance,j=S.currentTarget,S=S.listener,P!==m&&d.isPropagationStopped())break e;Zp(d,S,j),m=P}}}if(Us)throw r=pn,Us=!1,pn=null,r}function Ge(r,s){var a=s[Th];a===void 0&&(a=s[Th]=new Set);var h=r+"__bubble";a.has(h)||(tm(s,r,2,!1),a.add(h))}function mh(r,s,a){var h=0;s&&(h|=4),tm(a,r,h,s)}var tu="_reactListening"+Math.random().toString(36).slice(2);function Ca(r){if(!r[tu]){r[tu]=!0,i.forEach(function(a){a!=="selectionchange"&&(T0.has(a)||mh(a,!1,r),mh(a,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[tu]||(s[tu]=!0,mh("selectionchange",!1,s))}}function tm(r,s,a,h){switch(Ks(s)){case 1:var d=Jn;break;case 4:d=Hl;break;default:d=ya}a=d.bind(null,s,a,r),d=void 0,!Qr||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(d=!0),h?d!==void 0?r.addEventListener(s,a,{capture:!0,passive:d}):r.addEventListener(s,a,!0):d!==void 0?r.addEventListener(s,a,{passive:d}):r.addEventListener(s,a,!1)}function gh(r,s,a,h,d){var m=h;if((s&1)===0&&(s&2)===0&&h!==null)e:for(;;){if(h===null)return;var v=h.tag;if(v===3||v===4){var S=h.stateNode.containerInfo;if(S===d||S.nodeType===8&&S.parentNode===d)break;if(v===4)for(v=h.return;v!==null;){var P=v.tag;if((P===3||P===4)&&(P=v.stateNode.containerInfo,P===d||P.nodeType===8&&P.parentNode===d))return;v=v.return}for(;S!==null;){if(v=ts(S),v===null)return;if(P=v.tag,P===5||P===6){h=m=v;continue e}S=S.parentNode}}h=h.return}Ol(function(){var j=m,Q=Fs(a),Y=[];e:{var G=Jp.get(r);if(G!==void 0){var ne=Zi,ue=r;switch(r){case"keypress":if(Xi(a)===0)break e;case"keydown":case"keyup":ne=ze;break;case"focusin":ue="focus",ne=Ct;break;case"focusout":ue="blur",ne=Ct;break;case"beforeblur":case"afterblur":ne=Ct;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ne=va;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ne=Ql;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ne=tr;break;case Kp:case Gp:case Qp:ne=Jl;break;case Yp:ne=Zs;break;case"scroll":ne=Qs;break;case"wheel":ne=s0;break;case"copy":case"cut":case"paste":ne=u;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ne=an}var he=(s&4)!==0,lt=!he&&r==="scroll",L=he?G!==null?G+"Capture":null:G;he=[];for(var N=j,F;N!==null;){F=N;var X=F.stateNode;if(F.tag===5&&X!==null&&(F=X,L!==null&&(X=Bi(N,L),X!=null&&he.push(Pa(N,X,F)))),lt)break;N=N.return}0<he.length&&(G=new ne(G,ue,null,a,Q),Y.push({event:G,listeners:he}))}}if((s&7)===0){e:{if(G=r==="mouseover"||r==="pointerover",ne=r==="mouseout"||r==="pointerout",G&&a!==Hr&&(ue=a.relatedTarget||a.fromElement)&&(ts(ue)||ue[Ar]))break e;if((ne||G)&&(G=Q.window===Q?Q:(G=Q.ownerDocument)?G.defaultView||G.parentWindow:window,ne?(ue=a.relatedTarget||a.toElement,ne=j,ue=ue?ts(ue):null,ue!==null&&(lt=Cn(ue),ue!==lt||ue.tag!==5&&ue.tag!==6)&&(ue=null)):(ne=null,ue=j),ne!==ue)){if(he=va,X="onMouseLeave",L="onMouseEnter",N="mouse",(r==="pointerout"||r==="pointerover")&&(he=an,X="onPointerLeave",L="onPointerEnter",N="pointer"),lt=ne==null?G:so(ne),F=ue==null?G:so(ue),G=new he(X,N+"leave",ne,a,Q),G.target=lt,G.relatedTarget=F,X=null,ts(Q)===j&&(he=new he(L,N+"enter",ue,a,Q),he.target=F,he.relatedTarget=lt,X=he),lt=X,ne&&ue)t:{for(he=ne,L=ue,N=0,F=he;F;F=ro(F))N++;for(F=0,X=L;X;X=ro(X))F++;for(;0<N-F;)he=ro(he),N--;for(;0<F-N;)L=ro(L),F--;for(;N--;){if(he===L||L!==null&&he===L.alternate)break t;he=ro(he),L=ro(L)}he=null}else he=null;ne!==null&&nm(Y,G,ne,he,!1),ue!==null&&lt!==null&&nm(Y,lt,ue,he,!0)}}e:{if(G=j?so(j):window,ne=G.nodeName&&G.nodeName.toLowerCase(),ne==="select"||ne==="input"&&G.type==="file")var de=d0;else if(Op(G))if(Mp)de=g0;else{de=p0;var ge=f0}else(ne=G.nodeName)&&ne.toLowerCase()==="input"&&(G.type==="checkbox"||G.type==="radio")&&(de=m0);if(de&&(de=de(r,j))){Lp(Y,de,a,Q);break e}ge&&ge(r,G,j),r==="focusout"&&(ge=G._wrapperState)&&ge.controlled&&G.type==="number"&&ct(G,"number",G.value)}switch(ge=j?so(j):window,r){case"focusin":(Op(ge)||ge.contentEditable==="true")&&(to=ge,ch=j,Aa=null);break;case"focusout":Aa=ch=to=null;break;case"mousedown":hh=!0;break;case"contextmenu":case"mouseup":case"dragend":hh=!1,Wp(Y,a,Q);break;case"selectionchange":if(v0)break;case"keydown":case"keyup":Wp(Y,a,Q)}var ye;if(oh)e:{switch(r){case"compositionstart":var ve="onCompositionStart";break e;case"compositionend":ve="onCompositionEnd";break e;case"compositionupdate":ve="onCompositionUpdate";break e}ve=void 0}else eo?Vp(r,a)&&(ve="onCompositionEnd"):r==="keydown"&&a.keyCode===229&&(ve="onCompositionStart");ve&&(xp&&a.locale!=="ko"&&(eo||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&eo&&(ye=Kl()):(sn=Q,Gs="value"in sn?sn.value:sn.textContent,eo=!0)),ge=nu(j,ve),0<ge.length&&(ve=new _(ve,r,null,a,Q),Y.push({event:ve,listeners:ge}),ye?ve.data=ye:(ye=bp(a),ye!==null&&(ve.data=ye)))),(ye=a0?l0(r,a):u0(r,a))&&(j=nu(j,"onBeforeInput"),0<j.length&&(Q=new _("onBeforeInput","beforeinput",null,a,Q),Y.push({event:Q,listeners:j}),Q.data=ye))}em(Y,s)})}function Pa(r,s,a){return{instance:r,listener:s,currentTarget:a}}function nu(r,s){for(var a=s+"Capture",h=[];r!==null;){var d=r,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=Bi(r,a),m!=null&&h.unshift(Pa(r,m,d)),m=Bi(r,s),m!=null&&h.push(Pa(r,m,d))),r=r.return}return h}function ro(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function nm(r,s,a,h,d){for(var m=s._reactName,v=[];a!==null&&a!==h;){var S=a,P=S.alternate,j=S.stateNode;if(P!==null&&P===h)break;S.tag===5&&j!==null&&(S=j,d?(P=Bi(a,m),P!=null&&v.unshift(Pa(a,P,S))):d||(P=Bi(a,m),P!=null&&v.push(Pa(a,P,S)))),a=a.return}v.length!==0&&r.push({event:s,listeners:v})}var I0=/\r\n?/g,S0=/\u0000|\uFFFD/g;function rm(r){return(typeof r=="string"?r:""+r).replace(I0,`
`).replace(S0,"")}function ru(r,s,a){if(s=rm(s),rm(r)!==s&&a)throw Error(t(425))}function iu(){}var yh=null,_h=null;function vh(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var wh=typeof setTimeout=="function"?setTimeout:void 0,A0=typeof clearTimeout=="function"?clearTimeout:void 0,im=typeof Promise=="function"?Promise:void 0,R0=typeof queueMicrotask=="function"?queueMicrotask:typeof im<"u"?function(r){return im.resolve(null).then(r).catch(C0)}:wh;function C0(r){setTimeout(function(){throw r})}function Eh(r,s){var a=s,h=0;do{var d=a.nextSibling;if(r.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(h===0){r.removeChild(d),ei(s);return}h--}else a!=="$"&&a!=="$?"&&a!=="$!"||h++;a=d}while(a);ei(s)}function ii(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return r}function sm(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return r;s--}else a==="/$"&&s++}r=r.previousSibling}return null}var io=Math.random().toString(36).slice(2),rr="__reactFiber$"+io,ka="__reactProps$"+io,Ar="__reactContainer$"+io,Th="__reactEvents$"+io,P0="__reactListeners$"+io,k0="__reactHandles$"+io;function ts(r){var s=r[rr];if(s)return s;for(var a=r.parentNode;a;){if(s=a[Ar]||a[rr]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(r=sm(r);r!==null;){if(a=r[rr])return a;r=sm(r)}return s}r=a,a=r.parentNode}return null}function xa(r){return r=r[rr]||r[Ar],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function so(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function su(r){return r[ka]||null}var Ih=[],oo=-1;function si(r){return{current:r}}function Qe(r){0>oo||(r.current=Ih[oo],Ih[oo]=null,oo--)}function We(r,s){oo++,Ih[oo]=r.current,r.current=s}var oi={},Ot=si(oi),Gt=si(!1),ns=oi;function ao(r,s){var a=r.type.contextTypes;if(!a)return oi;var h=r.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===s)return h.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in a)d[m]=s[m];return h&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=s,r.__reactInternalMemoizedMaskedChildContext=d),d}function Qt(r){return r=r.childContextTypes,r!=null}function ou(){Qe(Gt),Qe(Ot)}function om(r,s,a){if(Ot.current!==oi)throw Error(t(168));We(Ot,s),We(Gt,a)}function am(r,s,a){var h=r.stateNode;if(s=s.childContextTypes,typeof h.getChildContext!="function")return a;h=h.getChildContext();for(var d in h)if(!(d in s))throw Error(t(108,Ue(r)||"Unknown",d));return oe({},a,h)}function au(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||oi,ns=Ot.current,We(Ot,r),We(Gt,Gt.current),!0}function lm(r,s,a){var h=r.stateNode;if(!h)throw Error(t(169));a?(r=am(r,s,ns),h.__reactInternalMemoizedMergedChildContext=r,Qe(Gt),Qe(Ot),We(Ot,r)):Qe(Gt),We(Gt,a)}var Rr=null,lu=!1,Sh=!1;function um(r){Rr===null?Rr=[r]:Rr.push(r)}function x0(r){lu=!0,um(r)}function ai(){if(!Sh&&Rr!==null){Sh=!0;var r=0,s=Ve;try{var a=Rr;for(Ve=1;r<a.length;r++){var h=a[r];do h=h(!0);while(h!==null)}Rr=null,lu=!1}catch(d){throw Rr!==null&&(Rr=Rr.slice(r+1)),oa(zs,ai),d}finally{Ve=s,Sh=!1}}return null}var lo=[],uo=0,uu=null,cu=0,gn=[],yn=0,rs=null,Cr=1,Pr="";function is(r,s){lo[uo++]=cu,lo[uo++]=uu,uu=r,cu=s}function cm(r,s,a){gn[yn++]=Cr,gn[yn++]=Pr,gn[yn++]=rs,rs=r;var h=Cr;r=Pr;var d=32-nn(h)-1;h&=~(1<<d),a+=1;var m=32-nn(s)+d;if(30<m){var v=d-d%5;m=(h&(1<<v)-1).toString(32),h>>=v,d-=v,Cr=1<<32-nn(s)+d|a<<d|h,Pr=m+r}else Cr=1<<m|a<<d|h,Pr=r}function Ah(r){r.return!==null&&(is(r,1),cm(r,1,0))}function Rh(r){for(;r===uu;)uu=lo[--uo],lo[uo]=null,cu=lo[--uo],lo[uo]=null;for(;r===rs;)rs=gn[--yn],gn[yn]=null,Pr=gn[--yn],gn[yn]=null,Cr=gn[--yn],gn[yn]=null}var ln=null,un=null,Xe=!1,xn=null;function hm(r,s){var a=En(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=r,s=r.deletions,s===null?(r.deletions=[a],r.flags|=16):s.push(a)}function dm(r,s){switch(r.tag){case 5:var a=r.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(r.stateNode=s,ln=r,un=ii(s.firstChild),!0):!1;case 6:return s=r.pendingProps===""||s.nodeType!==3?null:s,s!==null?(r.stateNode=s,ln=r,un=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=rs!==null?{id:Cr,overflow:Pr}:null,r.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=En(18,null,null,0),a.stateNode=s,a.return=r,r.child=a,ln=r,un=null,!0):!1;default:return!1}}function Ch(r){return(r.mode&1)!==0&&(r.flags&128)===0}function Ph(r){if(Xe){var s=un;if(s){var a=s;if(!dm(r,s)){if(Ch(r))throw Error(t(418));s=ii(a.nextSibling);var h=ln;s&&dm(r,s)?hm(h,a):(r.flags=r.flags&-4097|2,Xe=!1,ln=r)}}else{if(Ch(r))throw Error(t(418));r.flags=r.flags&-4097|2,Xe=!1,ln=r}}}function fm(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;ln=r}function hu(r){if(r!==ln)return!1;if(!Xe)return fm(r),Xe=!0,!1;var s;if((s=r.tag!==3)&&!(s=r.tag!==5)&&(s=r.type,s=s!=="head"&&s!=="body"&&!vh(r.type,r.memoizedProps)),s&&(s=un)){if(Ch(r))throw pm(),Error(t(418));for(;s;)hm(r,s),s=ii(s.nextSibling)}if(fm(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="/$"){if(s===0){un=ii(r.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}r=r.nextSibling}un=null}}else un=ln?ii(r.stateNode.nextSibling):null;return!0}function pm(){for(var r=un;r;)r=ii(r.nextSibling)}function co(){un=ln=null,Xe=!1}function kh(r){xn===null?xn=[r]:xn.push(r)}var N0=me.ReactCurrentBatchConfig;function Na(r,s,a){if(r=a.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var h=a.stateNode}if(!h)throw Error(t(147,r));var d=h,m=""+r;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===m?s.ref:(s=function(v){var S=d.refs;v===null?delete S[m]:S[m]=v},s._stringRef=m,s)}if(typeof r!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,r))}return r}function du(r,s){throw r=Object.prototype.toString.call(s),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r))}function mm(r){var s=r._init;return s(r._payload)}function gm(r){function s(L,N){if(r){var F=L.deletions;F===null?(L.deletions=[N],L.flags|=16):F.push(N)}}function a(L,N){if(!r)return null;for(;N!==null;)s(L,N),N=N.sibling;return null}function h(L,N){for(L=new Map;N!==null;)N.key!==null?L.set(N.key,N):L.set(N.index,N),N=N.sibling;return L}function d(L,N){return L=mi(L,N),L.index=0,L.sibling=null,L}function m(L,N,F){return L.index=F,r?(F=L.alternate,F!==null?(F=F.index,F<N?(L.flags|=2,N):F):(L.flags|=2,N)):(L.flags|=1048576,N)}function v(L){return r&&L.alternate===null&&(L.flags|=2),L}function S(L,N,F,X){return N===null||N.tag!==6?(N=wd(F,L.mode,X),N.return=L,N):(N=d(N,F),N.return=L,N)}function P(L,N,F,X){var de=F.type;return de===k?Q(L,N,F.props.children,X,F.key):N!==null&&(N.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===Vt&&mm(de)===N.type)?(X=d(N,F.props),X.ref=Na(L,N,F),X.return=L,X):(X=Lu(F.type,F.key,F.props,null,L.mode,X),X.ref=Na(L,N,F),X.return=L,X)}function j(L,N,F,X){return N===null||N.tag!==4||N.stateNode.containerInfo!==F.containerInfo||N.stateNode.implementation!==F.implementation?(N=Ed(F,L.mode,X),N.return=L,N):(N=d(N,F.children||[]),N.return=L,N)}function Q(L,N,F,X,de){return N===null||N.tag!==7?(N=ds(F,L.mode,X,de),N.return=L,N):(N=d(N,F),N.return=L,N)}function Y(L,N,F){if(typeof N=="string"&&N!==""||typeof N=="number")return N=wd(""+N,L.mode,F),N.return=L,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case Re:return F=Lu(N.type,N.key,N.props,null,L.mode,F),F.ref=Na(L,null,N),F.return=L,F;case Ce:return N=Ed(N,L.mode,F),N.return=L,N;case Vt:var X=N._init;return Y(L,X(N._payload),F)}if(ot(N)||pe(N))return N=ds(N,L.mode,F,null),N.return=L,N;du(L,N)}return null}function G(L,N,F,X){var de=N!==null?N.key:null;if(typeof F=="string"&&F!==""||typeof F=="number")return de!==null?null:S(L,N,""+F,X);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case Re:return F.key===de?P(L,N,F,X):null;case Ce:return F.key===de?j(L,N,F,X):null;case Vt:return de=F._init,G(L,N,de(F._payload),X)}if(ot(F)||pe(F))return de!==null?null:Q(L,N,F,X,null);du(L,F)}return null}function ne(L,N,F,X,de){if(typeof X=="string"&&X!==""||typeof X=="number")return L=L.get(F)||null,S(N,L,""+X,de);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case Re:return L=L.get(X.key===null?F:X.key)||null,P(N,L,X,de);case Ce:return L=L.get(X.key===null?F:X.key)||null,j(N,L,X,de);case Vt:var ge=X._init;return ne(L,N,F,ge(X._payload),de)}if(ot(X)||pe(X))return L=L.get(F)||null,Q(N,L,X,de,null);du(N,X)}return null}function ue(L,N,F,X){for(var de=null,ge=null,ye=N,ve=N=0,St=null;ye!==null&&ve<F.length;ve++){ye.index>ve?(St=ye,ye=null):St=ye.sibling;var Me=G(L,ye,F[ve],X);if(Me===null){ye===null&&(ye=St);break}r&&ye&&Me.alternate===null&&s(L,ye),N=m(Me,N,ve),ge===null?de=Me:ge.sibling=Me,ge=Me,ye=St}if(ve===F.length)return a(L,ye),Xe&&is(L,ve),de;if(ye===null){for(;ve<F.length;ve++)ye=Y(L,F[ve],X),ye!==null&&(N=m(ye,N,ve),ge===null?de=ye:ge.sibling=ye,ge=ye);return Xe&&is(L,ve),de}for(ye=h(L,ye);ve<F.length;ve++)St=ne(ye,L,ve,F[ve],X),St!==null&&(r&&St.alternate!==null&&ye.delete(St.key===null?ve:St.key),N=m(St,N,ve),ge===null?de=St:ge.sibling=St,ge=St);return r&&ye.forEach(function(gi){return s(L,gi)}),Xe&&is(L,ve),de}function he(L,N,F,X){var de=pe(F);if(typeof de!="function")throw Error(t(150));if(F=de.call(F),F==null)throw Error(t(151));for(var ge=de=null,ye=N,ve=N=0,St=null,Me=F.next();ye!==null&&!Me.done;ve++,Me=F.next()){ye.index>ve?(St=ye,ye=null):St=ye.sibling;var gi=G(L,ye,Me.value,X);if(gi===null){ye===null&&(ye=St);break}r&&ye&&gi.alternate===null&&s(L,ye),N=m(gi,N,ve),ge===null?de=gi:ge.sibling=gi,ge=gi,ye=St}if(Me.done)return a(L,ye),Xe&&is(L,ve),de;if(ye===null){for(;!Me.done;ve++,Me=F.next())Me=Y(L,Me.value,X),Me!==null&&(N=m(Me,N,ve),ge===null?de=Me:ge.sibling=Me,ge=Me);return Xe&&is(L,ve),de}for(ye=h(L,ye);!Me.done;ve++,Me=F.next())Me=ne(ye,L,ve,Me.value,X),Me!==null&&(r&&Me.alternate!==null&&ye.delete(Me.key===null?ve:Me.key),N=m(Me,N,ve),ge===null?de=Me:ge.sibling=Me,ge=Me);return r&&ye.forEach(function(cT){return s(L,cT)}),Xe&&is(L,ve),de}function lt(L,N,F,X){if(typeof F=="object"&&F!==null&&F.type===k&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case Re:e:{for(var de=F.key,ge=N;ge!==null;){if(ge.key===de){if(de=F.type,de===k){if(ge.tag===7){a(L,ge.sibling),N=d(ge,F.props.children),N.return=L,L=N;break e}}else if(ge.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===Vt&&mm(de)===ge.type){a(L,ge.sibling),N=d(ge,F.props),N.ref=Na(L,ge,F),N.return=L,L=N;break e}a(L,ge);break}else s(L,ge);ge=ge.sibling}F.type===k?(N=ds(F.props.children,L.mode,X,F.key),N.return=L,L=N):(X=Lu(F.type,F.key,F.props,null,L.mode,X),X.ref=Na(L,N,F),X.return=L,L=X)}return v(L);case Ce:e:{for(ge=F.key;N!==null;){if(N.key===ge)if(N.tag===4&&N.stateNode.containerInfo===F.containerInfo&&N.stateNode.implementation===F.implementation){a(L,N.sibling),N=d(N,F.children||[]),N.return=L,L=N;break e}else{a(L,N);break}else s(L,N);N=N.sibling}N=Ed(F,L.mode,X),N.return=L,L=N}return v(L);case Vt:return ge=F._init,lt(L,N,ge(F._payload),X)}if(ot(F))return ue(L,N,F,X);if(pe(F))return he(L,N,F,X);du(L,F)}return typeof F=="string"&&F!==""||typeof F=="number"?(F=""+F,N!==null&&N.tag===6?(a(L,N.sibling),N=d(N,F),N.return=L,L=N):(a(L,N),N=wd(F,L.mode,X),N.return=L,L=N),v(L)):a(L,N)}return lt}var ho=gm(!0),ym=gm(!1),fu=si(null),pu=null,fo=null,xh=null;function Nh(){xh=fo=pu=null}function Dh(r){var s=fu.current;Qe(fu),r._currentValue=s}function Vh(r,s,a){for(;r!==null;){var h=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,h!==null&&(h.childLanes|=s)):h!==null&&(h.childLanes&s)!==s&&(h.childLanes|=s),r===a)break;r=r.return}}function po(r,s){pu=r,xh=fo=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&s)!==0&&(Yt=!0),r.firstContext=null)}function _n(r){var s=r._currentValue;if(xh!==r)if(r={context:r,memoizedValue:s,next:null},fo===null){if(pu===null)throw Error(t(308));fo=r,pu.dependencies={lanes:0,firstContext:r}}else fo=fo.next=r;return s}var ss=null;function bh(r){ss===null?ss=[r]:ss.push(r)}function _m(r,s,a,h){var d=s.interleaved;return d===null?(a.next=a,bh(s)):(a.next=d.next,d.next=a),s.interleaved=a,kr(r,h)}function kr(r,s){r.lanes|=s;var a=r.alternate;for(a!==null&&(a.lanes|=s),a=r,r=r.return;r!==null;)r.childLanes|=s,a=r.alternate,a!==null&&(a.childLanes|=s),a=r,r=r.return;return a.tag===3?a.stateNode:null}var li=!1;function Oh(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function vm(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function xr(r,s){return{eventTime:r,lane:s,tag:0,payload:null,callback:null,next:null}}function ui(r,s,a){var h=r.updateQueue;if(h===null)return null;if(h=h.shared,(Le&2)!==0){var d=h.pending;return d===null?s.next=s:(s.next=d.next,d.next=s),h.pending=s,kr(r,a)}return d=h.interleaved,d===null?(s.next=s,bh(h)):(s.next=d.next,d.next=s),h.interleaved=s,kr(r,a)}function mu(r,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var h=s.lanes;h&=r.pendingLanes,a|=h,s.lanes=a,da(r,a)}}function wm(r,s){var a=r.updateQueue,h=r.alternate;if(h!==null&&(h=h.updateQueue,a===h)){var d=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?d=m=v:m=m.next=v,a=a.next}while(a!==null);m===null?d=m=s:m=m.next=s}else d=m=s;a={baseState:h.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:h.shared,effects:h.effects},r.updateQueue=a;return}r=a.lastBaseUpdate,r===null?a.firstBaseUpdate=s:r.next=s,a.lastBaseUpdate=s}function gu(r,s,a,h){var d=r.updateQueue;li=!1;var m=d.firstBaseUpdate,v=d.lastBaseUpdate,S=d.shared.pending;if(S!==null){d.shared.pending=null;var P=S,j=P.next;P.next=null,v===null?m=j:v.next=j,v=P;var Q=r.alternate;Q!==null&&(Q=Q.updateQueue,S=Q.lastBaseUpdate,S!==v&&(S===null?Q.firstBaseUpdate=j:S.next=j,Q.lastBaseUpdate=P))}if(m!==null){var Y=d.baseState;v=0,Q=j=P=null,S=m;do{var G=S.lane,ne=S.eventTime;if((h&G)===G){Q!==null&&(Q=Q.next={eventTime:ne,lane:0,tag:S.tag,payload:S.payload,callback:S.callback,next:null});e:{var ue=r,he=S;switch(G=s,ne=a,he.tag){case 1:if(ue=he.payload,typeof ue=="function"){Y=ue.call(ne,Y,G);break e}Y=ue;break e;case 3:ue.flags=ue.flags&-65537|128;case 0:if(ue=he.payload,G=typeof ue=="function"?ue.call(ne,Y,G):ue,G==null)break e;Y=oe({},Y,G);break e;case 2:li=!0}}S.callback!==null&&S.lane!==0&&(r.flags|=64,G=d.effects,G===null?d.effects=[S]:G.push(S))}else ne={eventTime:ne,lane:G,tag:S.tag,payload:S.payload,callback:S.callback,next:null},Q===null?(j=Q=ne,P=Y):Q=Q.next=ne,v|=G;if(S=S.next,S===null){if(S=d.shared.pending,S===null)break;G=S,S=G.next,G.next=null,d.lastBaseUpdate=G,d.shared.pending=null}}while(!0);if(Q===null&&(P=Y),d.baseState=P,d.firstBaseUpdate=j,d.lastBaseUpdate=Q,s=d.shared.interleaved,s!==null){d=s;do v|=d.lane,d=d.next;while(d!==s)}else m===null&&(d.shared.lanes=0);ls|=v,r.lanes=v,r.memoizedState=Y}}function Em(r,s,a){if(r=s.effects,s.effects=null,r!==null)for(s=0;s<r.length;s++){var h=r[s],d=h.callback;if(d!==null){if(h.callback=null,h=a,typeof d!="function")throw Error(t(191,d));d.call(h)}}}var Da={},ir=si(Da),Va=si(Da),ba=si(Da);function os(r){if(r===Da)throw Error(t(174));return r}function Lh(r,s){switch(We(ba,s),We(Va,r),We(ir,Da),r=s.nodeType,r){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:Os(null,"");break;default:r=r===8?s.parentNode:s,s=r.namespaceURI||null,r=r.tagName,s=Os(s,r)}Qe(ir),We(ir,s)}function mo(){Qe(ir),Qe(Va),Qe(ba)}function Tm(r){os(ba.current);var s=os(ir.current),a=Os(s,r.type);s!==a&&(We(Va,r),We(ir,a))}function Mh(r){Va.current===r&&(Qe(ir),Qe(Va))}var Ze=si(0);function yu(r){for(var s=r;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Fh=[];function Uh(){for(var r=0;r<Fh.length;r++)Fh[r]._workInProgressVersionPrimary=null;Fh.length=0}var _u=me.ReactCurrentDispatcher,jh=me.ReactCurrentBatchConfig,as=0,et=null,_t=null,Tt=null,vu=!1,Oa=!1,La=0,D0=0;function Lt(){throw Error(t(321))}function zh(r,s){if(s===null)return!1;for(var a=0;a<s.length&&a<r.length;a++)if(!kn(r[a],s[a]))return!1;return!0}function Bh(r,s,a,h,d,m){if(as=m,et=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,_u.current=r===null||r.memoizedState===null?L0:M0,r=a(h,d),Oa){m=0;do{if(Oa=!1,La=0,25<=m)throw Error(t(301));m+=1,Tt=_t=null,s.updateQueue=null,_u.current=F0,r=a(h,d)}while(Oa)}if(_u.current=Tu,s=_t!==null&&_t.next!==null,as=0,Tt=_t=et=null,vu=!1,s)throw Error(t(300));return r}function $h(){var r=La!==0;return La=0,r}function sr(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tt===null?et.memoizedState=Tt=r:Tt=Tt.next=r,Tt}function vn(){if(_t===null){var r=et.alternate;r=r!==null?r.memoizedState:null}else r=_t.next;var s=Tt===null?et.memoizedState:Tt.next;if(s!==null)Tt=s,_t=r;else{if(r===null)throw Error(t(310));_t=r,r={memoizedState:_t.memoizedState,baseState:_t.baseState,baseQueue:_t.baseQueue,queue:_t.queue,next:null},Tt===null?et.memoizedState=Tt=r:Tt=Tt.next=r}return Tt}function Ma(r,s){return typeof s=="function"?s(r):s}function qh(r){var s=vn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var h=_t,d=h.baseQueue,m=a.pending;if(m!==null){if(d!==null){var v=d.next;d.next=m.next,m.next=v}h.baseQueue=d=m,a.pending=null}if(d!==null){m=d.next,h=h.baseState;var S=v=null,P=null,j=m;do{var Q=j.lane;if((as&Q)===Q)P!==null&&(P=P.next={lane:0,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),h=j.hasEagerState?j.eagerState:r(h,j.action);else{var Y={lane:Q,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null};P===null?(S=P=Y,v=h):P=P.next=Y,et.lanes|=Q,ls|=Q}j=j.next}while(j!==null&&j!==m);P===null?v=h:P.next=S,kn(h,s.memoizedState)||(Yt=!0),s.memoizedState=h,s.baseState=v,s.baseQueue=P,a.lastRenderedState=h}if(r=a.interleaved,r!==null){d=r;do m=d.lane,et.lanes|=m,ls|=m,d=d.next;while(d!==r)}else d===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function Wh(r){var s=vn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var h=a.dispatch,d=a.pending,m=s.memoizedState;if(d!==null){a.pending=null;var v=d=d.next;do m=r(m,v.action),v=v.next;while(v!==d);kn(m,s.memoizedState)||(Yt=!0),s.memoizedState=m,s.baseQueue===null&&(s.baseState=m),a.lastRenderedState=m}return[m,h]}function Im(){}function Sm(r,s){var a=et,h=vn(),d=s(),m=!kn(h.memoizedState,d);if(m&&(h.memoizedState=d,Yt=!0),h=h.queue,Hh(Cm.bind(null,a,h,r),[r]),h.getSnapshot!==s||m||Tt!==null&&Tt.memoizedState.tag&1){if(a.flags|=2048,Fa(9,Rm.bind(null,a,h,d,s),void 0,null),It===null)throw Error(t(349));(as&30)!==0||Am(a,s,d)}return d}function Am(r,s,a){r.flags|=16384,r={getSnapshot:s,value:a},s=et.updateQueue,s===null?(s={lastEffect:null,stores:null},et.updateQueue=s,s.stores=[r]):(a=s.stores,a===null?s.stores=[r]:a.push(r))}function Rm(r,s,a,h){s.value=a,s.getSnapshot=h,Pm(s)&&km(r)}function Cm(r,s,a){return a(function(){Pm(s)&&km(r)})}function Pm(r){var s=r.getSnapshot;r=r.value;try{var a=s();return!kn(r,a)}catch{return!0}}function km(r){var s=kr(r,1);s!==null&&bn(s,r,1,-1)}function xm(r){var s=sr();return typeof r=="function"&&(r=r()),s.memoizedState=s.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ma,lastRenderedState:r},s.queue=r,r=r.dispatch=O0.bind(null,et,r),[s.memoizedState,r]}function Fa(r,s,a,h){return r={tag:r,create:s,destroy:a,deps:h,next:null},s=et.updateQueue,s===null?(s={lastEffect:null,stores:null},et.updateQueue=s,s.lastEffect=r.next=r):(a=s.lastEffect,a===null?s.lastEffect=r.next=r:(h=a.next,a.next=r,r.next=h,s.lastEffect=r)),r}function Nm(){return vn().memoizedState}function wu(r,s,a,h){var d=sr();et.flags|=r,d.memoizedState=Fa(1|s,a,void 0,h===void 0?null:h)}function Eu(r,s,a,h){var d=vn();h=h===void 0?null:h;var m=void 0;if(_t!==null){var v=_t.memoizedState;if(m=v.destroy,h!==null&&zh(h,v.deps)){d.memoizedState=Fa(s,a,m,h);return}}et.flags|=r,d.memoizedState=Fa(1|s,a,m,h)}function Dm(r,s){return wu(8390656,8,r,s)}function Hh(r,s){return Eu(2048,8,r,s)}function Vm(r,s){return Eu(4,2,r,s)}function bm(r,s){return Eu(4,4,r,s)}function Om(r,s){if(typeof s=="function")return r=r(),s(r),function(){s(null)};if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function Lm(r,s,a){return a=a!=null?a.concat([r]):null,Eu(4,4,Om.bind(null,s,r),a)}function Kh(){}function Mm(r,s){var a=vn();s=s===void 0?null:s;var h=a.memoizedState;return h!==null&&s!==null&&zh(s,h[1])?h[0]:(a.memoizedState=[r,s],r)}function Fm(r,s){var a=vn();s=s===void 0?null:s;var h=a.memoizedState;return h!==null&&s!==null&&zh(s,h[1])?h[0]:(r=r(),a.memoizedState=[r,s],r)}function Um(r,s,a){return(as&21)===0?(r.baseState&&(r.baseState=!1,Yt=!0),r.memoizedState=a):(kn(a,s)||(a=ca(),et.lanes|=a,ls|=a,r.baseState=!0),s)}function V0(r,s){var a=Ve;Ve=a!==0&&4>a?a:4,r(!0);var h=jh.transition;jh.transition={};try{r(!1),s()}finally{Ve=a,jh.transition=h}}function jm(){return vn().memoizedState}function b0(r,s,a){var h=fi(r);if(a={lane:h,action:a,hasEagerState:!1,eagerState:null,next:null},zm(r))Bm(s,a);else if(a=_m(r,s,a,h),a!==null){var d=Wt();bn(a,r,h,d),$m(a,s,h)}}function O0(r,s,a){var h=fi(r),d={lane:h,action:a,hasEagerState:!1,eagerState:null,next:null};if(zm(r))Bm(s,d);else{var m=r.alternate;if(r.lanes===0&&(m===null||m.lanes===0)&&(m=s.lastRenderedReducer,m!==null))try{var v=s.lastRenderedState,S=m(v,a);if(d.hasEagerState=!0,d.eagerState=S,kn(S,v)){var P=s.interleaved;P===null?(d.next=d,bh(s)):(d.next=P.next,P.next=d),s.interleaved=d;return}}catch{}finally{}a=_m(r,s,d,h),a!==null&&(d=Wt(),bn(a,r,h,d),$m(a,s,h))}}function zm(r){var s=r.alternate;return r===et||s!==null&&s===et}function Bm(r,s){Oa=vu=!0;var a=r.pending;a===null?s.next=s:(s.next=a.next,a.next=s),r.pending=s}function $m(r,s,a){if((a&4194240)!==0){var h=s.lanes;h&=r.pendingLanes,a|=h,s.lanes=a,da(r,a)}}var Tu={readContext:_n,useCallback:Lt,useContext:Lt,useEffect:Lt,useImperativeHandle:Lt,useInsertionEffect:Lt,useLayoutEffect:Lt,useMemo:Lt,useReducer:Lt,useRef:Lt,useState:Lt,useDebugValue:Lt,useDeferredValue:Lt,useTransition:Lt,useMutableSource:Lt,useSyncExternalStore:Lt,useId:Lt,unstable_isNewReconciler:!1},L0={readContext:_n,useCallback:function(r,s){return sr().memoizedState=[r,s===void 0?null:s],r},useContext:_n,useEffect:Dm,useImperativeHandle:function(r,s,a){return a=a!=null?a.concat([r]):null,wu(4194308,4,Om.bind(null,s,r),a)},useLayoutEffect:function(r,s){return wu(4194308,4,r,s)},useInsertionEffect:function(r,s){return wu(4,2,r,s)},useMemo:function(r,s){var a=sr();return s=s===void 0?null:s,r=r(),a.memoizedState=[r,s],r},useReducer:function(r,s,a){var h=sr();return s=a!==void 0?a(s):s,h.memoizedState=h.baseState=s,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:s},h.queue=r,r=r.dispatch=b0.bind(null,et,r),[h.memoizedState,r]},useRef:function(r){var s=sr();return r={current:r},s.memoizedState=r},useState:xm,useDebugValue:Kh,useDeferredValue:function(r){return sr().memoizedState=r},useTransition:function(){var r=xm(!1),s=r[0];return r=V0.bind(null,r[1]),sr().memoizedState=r,[s,r]},useMutableSource:function(){},useSyncExternalStore:function(r,s,a){var h=et,d=sr();if(Xe){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),It===null)throw Error(t(349));(as&30)!==0||Am(h,s,a)}d.memoizedState=a;var m={value:a,getSnapshot:s};return d.queue=m,Dm(Cm.bind(null,h,m,r),[r]),h.flags|=2048,Fa(9,Rm.bind(null,h,m,a,s),void 0,null),a},useId:function(){var r=sr(),s=It.identifierPrefix;if(Xe){var a=Pr,h=Cr;a=(h&~(1<<32-nn(h)-1)).toString(32)+a,s=":"+s+"R"+a,a=La++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=D0++,s=":"+s+"r"+a.toString(32)+":";return r.memoizedState=s},unstable_isNewReconciler:!1},M0={readContext:_n,useCallback:Mm,useContext:_n,useEffect:Hh,useImperativeHandle:Lm,useInsertionEffect:Vm,useLayoutEffect:bm,useMemo:Fm,useReducer:qh,useRef:Nm,useState:function(){return qh(Ma)},useDebugValue:Kh,useDeferredValue:function(r){var s=vn();return Um(s,_t.memoizedState,r)},useTransition:function(){var r=qh(Ma)[0],s=vn().memoizedState;return[r,s]},useMutableSource:Im,useSyncExternalStore:Sm,useId:jm,unstable_isNewReconciler:!1},F0={readContext:_n,useCallback:Mm,useContext:_n,useEffect:Hh,useImperativeHandle:Lm,useInsertionEffect:Vm,useLayoutEffect:bm,useMemo:Fm,useReducer:Wh,useRef:Nm,useState:function(){return Wh(Ma)},useDebugValue:Kh,useDeferredValue:function(r){var s=vn();return _t===null?s.memoizedState=r:Um(s,_t.memoizedState,r)},useTransition:function(){var r=Wh(Ma)[0],s=vn().memoizedState;return[r,s]},useMutableSource:Im,useSyncExternalStore:Sm,useId:jm,unstable_isNewReconciler:!1};function Nn(r,s){if(r&&r.defaultProps){s=oe({},s),r=r.defaultProps;for(var a in r)s[a]===void 0&&(s[a]=r[a]);return s}return s}function Gh(r,s,a,h){s=r.memoizedState,a=a(h,s),a=a==null?s:oe({},s,a),r.memoizedState=a,r.lanes===0&&(r.updateQueue.baseState=a)}var Iu={isMounted:function(r){return(r=r._reactInternals)?Cn(r)===r:!1},enqueueSetState:function(r,s,a){r=r._reactInternals;var h=Wt(),d=fi(r),m=xr(h,d);m.payload=s,a!=null&&(m.callback=a),s=ui(r,m,d),s!==null&&(bn(s,r,d,h),mu(s,r,d))},enqueueReplaceState:function(r,s,a){r=r._reactInternals;var h=Wt(),d=fi(r),m=xr(h,d);m.tag=1,m.payload=s,a!=null&&(m.callback=a),s=ui(r,m,d),s!==null&&(bn(s,r,d,h),mu(s,r,d))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var a=Wt(),h=fi(r),d=xr(a,h);d.tag=2,s!=null&&(d.callback=s),s=ui(r,d,h),s!==null&&(bn(s,r,h,a),mu(s,r,h))}};function qm(r,s,a,h,d,m,v){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(h,m,v):s.prototype&&s.prototype.isPureReactComponent?!Sa(a,h)||!Sa(d,m):!0}function Wm(r,s,a){var h=!1,d=oi,m=s.contextType;return typeof m=="object"&&m!==null?m=_n(m):(d=Qt(s)?ns:Ot.current,h=s.contextTypes,m=(h=h!=null)?ao(r,d):oi),s=new s(a,m),r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Iu,r.stateNode=s,s._reactInternals=r,h&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=d,r.__reactInternalMemoizedMaskedChildContext=m),s}function Hm(r,s,a,h){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,h),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,h),s.state!==r&&Iu.enqueueReplaceState(s,s.state,null)}function Qh(r,s,a,h){var d=r.stateNode;d.props=a,d.state=r.memoizedState,d.refs={},Oh(r);var m=s.contextType;typeof m=="object"&&m!==null?d.context=_n(m):(m=Qt(s)?ns:Ot.current,d.context=ao(r,m)),d.state=r.memoizedState,m=s.getDerivedStateFromProps,typeof m=="function"&&(Gh(r,s,m,a),d.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(s=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),s!==d.state&&Iu.enqueueReplaceState(d,d.state,null),gu(r,a,d,h),d.state=r.memoizedState),typeof d.componentDidMount=="function"&&(r.flags|=4194308)}function go(r,s){try{var a="",h=s;do a+=Pe(h),h=h.return;while(h);var d=a}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:r,source:s,stack:d,digest:null}}function Yh(r,s,a){return{value:r,source:null,stack:a??null,digest:s??null}}function Jh(r,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var U0=typeof WeakMap=="function"?WeakMap:Map;function Km(r,s,a){a=xr(-1,a),a.tag=3,a.payload={element:null};var h=s.value;return a.callback=function(){xu||(xu=!0,dd=h),Jh(r,s)},a}function Gm(r,s,a){a=xr(-1,a),a.tag=3;var h=r.type.getDerivedStateFromError;if(typeof h=="function"){var d=s.value;a.payload=function(){return h(d)},a.callback=function(){Jh(r,s)}}var m=r.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){Jh(r,s),typeof h!="function"&&(hi===null?hi=new Set([this]):hi.add(this));var v=s.stack;this.componentDidCatch(s.value,{componentStack:v!==null?v:""})}),a}function Qm(r,s,a){var h=r.pingCache;if(h===null){h=r.pingCache=new U0;var d=new Set;h.set(s,d)}else d=h.get(s),d===void 0&&(d=new Set,h.set(s,d));d.has(a)||(d.add(a),r=Z0.bind(null,r,s,a),s.then(r,r))}function Ym(r){do{var s;if((s=r.tag===13)&&(s=r.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return r;r=r.return}while(r!==null);return null}function Jm(r,s,a,h,d){return(r.mode&1)===0?(r===s?r.flags|=65536:(r.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=xr(-1,1),s.tag=2,ui(a,s,1))),a.lanes|=1),r):(r.flags|=65536,r.lanes=d,r)}var j0=me.ReactCurrentOwner,Yt=!1;function qt(r,s,a,h){s.child=r===null?ym(s,null,a,h):ho(s,r.child,a,h)}function Xm(r,s,a,h,d){a=a.render;var m=s.ref;return po(s,d),h=Bh(r,s,a,h,m,d),a=$h(),r!==null&&!Yt?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~d,Nr(r,s,d)):(Xe&&a&&Ah(s),s.flags|=1,qt(r,s,h,d),s.child)}function Zm(r,s,a,h,d){if(r===null){var m=a.type;return typeof m=="function"&&!vd(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=m,eg(r,s,m,h,d)):(r=Lu(a.type,null,h,s,s.mode,d),r.ref=s.ref,r.return=s,s.child=r)}if(m=r.child,(r.lanes&d)===0){var v=m.memoizedProps;if(a=a.compare,a=a!==null?a:Sa,a(v,h)&&r.ref===s.ref)return Nr(r,s,d)}return s.flags|=1,r=mi(m,h),r.ref=s.ref,r.return=s,s.child=r}function eg(r,s,a,h,d){if(r!==null){var m=r.memoizedProps;if(Sa(m,h)&&r.ref===s.ref)if(Yt=!1,s.pendingProps=h=m,(r.lanes&d)!==0)(r.flags&131072)!==0&&(Yt=!0);else return s.lanes=r.lanes,Nr(r,s,d)}return Xh(r,s,a,h,d)}function tg(r,s,a){var h=s.pendingProps,d=h.children,m=r!==null?r.memoizedState:null;if(h.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},We(_o,cn),cn|=a;else{if((a&1073741824)===0)return r=m!==null?m.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:r,cachePool:null,transitions:null},s.updateQueue=null,We(_o,cn),cn|=r,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=m!==null?m.baseLanes:a,We(_o,cn),cn|=h}else m!==null?(h=m.baseLanes|a,s.memoizedState=null):h=a,We(_o,cn),cn|=h;return qt(r,s,d,a),s.child}function ng(r,s){var a=s.ref;(r===null&&a!==null||r!==null&&r.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function Xh(r,s,a,h,d){var m=Qt(a)?ns:Ot.current;return m=ao(s,m),po(s,d),a=Bh(r,s,a,h,m,d),h=$h(),r!==null&&!Yt?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~d,Nr(r,s,d)):(Xe&&h&&Ah(s),s.flags|=1,qt(r,s,a,d),s.child)}function rg(r,s,a,h,d){if(Qt(a)){var m=!0;au(s)}else m=!1;if(po(s,d),s.stateNode===null)Au(r,s),Wm(s,a,h),Qh(s,a,h,d),h=!0;else if(r===null){var v=s.stateNode,S=s.memoizedProps;v.props=S;var P=v.context,j=a.contextType;typeof j=="object"&&j!==null?j=_n(j):(j=Qt(a)?ns:Ot.current,j=ao(s,j));var Q=a.getDerivedStateFromProps,Y=typeof Q=="function"||typeof v.getSnapshotBeforeUpdate=="function";Y||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(S!==h||P!==j)&&Hm(s,v,h,j),li=!1;var G=s.memoizedState;v.state=G,gu(s,h,v,d),P=s.memoizedState,S!==h||G!==P||Gt.current||li?(typeof Q=="function"&&(Gh(s,a,Q,h),P=s.memoizedState),(S=li||qm(s,a,S,h,G,P,j))?(Y||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(s.flags|=4194308)):(typeof v.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=h,s.memoizedState=P),v.props=h,v.state=P,v.context=j,h=S):(typeof v.componentDidMount=="function"&&(s.flags|=4194308),h=!1)}else{v=s.stateNode,vm(r,s),S=s.memoizedProps,j=s.type===s.elementType?S:Nn(s.type,S),v.props=j,Y=s.pendingProps,G=v.context,P=a.contextType,typeof P=="object"&&P!==null?P=_n(P):(P=Qt(a)?ns:Ot.current,P=ao(s,P));var ne=a.getDerivedStateFromProps;(Q=typeof ne=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(S!==Y||G!==P)&&Hm(s,v,h,P),li=!1,G=s.memoizedState,v.state=G,gu(s,h,v,d);var ue=s.memoizedState;S!==Y||G!==ue||Gt.current||li?(typeof ne=="function"&&(Gh(s,a,ne,h),ue=s.memoizedState),(j=li||qm(s,a,j,h,G,ue,P)||!1)?(Q||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(h,ue,P),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(h,ue,P)),typeof v.componentDidUpdate=="function"&&(s.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof v.componentDidUpdate!="function"||S===r.memoizedProps&&G===r.memoizedState||(s.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||S===r.memoizedProps&&G===r.memoizedState||(s.flags|=1024),s.memoizedProps=h,s.memoizedState=ue),v.props=h,v.state=ue,v.context=P,h=j):(typeof v.componentDidUpdate!="function"||S===r.memoizedProps&&G===r.memoizedState||(s.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||S===r.memoizedProps&&G===r.memoizedState||(s.flags|=1024),h=!1)}return Zh(r,s,a,h,m,d)}function Zh(r,s,a,h,d,m){ng(r,s);var v=(s.flags&128)!==0;if(!h&&!v)return d&&lm(s,a,!1),Nr(r,s,m);h=s.stateNode,j0.current=s;var S=v&&typeof a.getDerivedStateFromError!="function"?null:h.render();return s.flags|=1,r!==null&&v?(s.child=ho(s,r.child,null,m),s.child=ho(s,null,S,m)):qt(r,s,S,m),s.memoizedState=h.state,d&&lm(s,a,!0),s.child}function ig(r){var s=r.stateNode;s.pendingContext?om(r,s.pendingContext,s.pendingContext!==s.context):s.context&&om(r,s.context,!1),Lh(r,s.containerInfo)}function sg(r,s,a,h,d){return co(),kh(d),s.flags|=256,qt(r,s,a,h),s.child}var ed={dehydrated:null,treeContext:null,retryLane:0};function td(r){return{baseLanes:r,cachePool:null,transitions:null}}function og(r,s,a){var h=s.pendingProps,d=Ze.current,m=!1,v=(s.flags&128)!==0,S;if((S=v)||(S=r!==null&&r.memoizedState===null?!1:(d&2)!==0),S?(m=!0,s.flags&=-129):(r===null||r.memoizedState!==null)&&(d|=1),We(Ze,d&1),r===null)return Ph(s),r=s.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((s.mode&1)===0?s.lanes=1:r.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(v=h.children,r=h.fallback,m?(h=s.mode,m=s.child,v={mode:"hidden",children:v},(h&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=v):m=Mu(v,h,0,null),r=ds(r,h,a,null),m.return=s,r.return=s,m.sibling=r,s.child=m,s.child.memoizedState=td(a),s.memoizedState=ed,r):nd(s,v));if(d=r.memoizedState,d!==null&&(S=d.dehydrated,S!==null))return z0(r,s,v,h,S,d,a);if(m){m=h.fallback,v=s.mode,d=r.child,S=d.sibling;var P={mode:"hidden",children:h.children};return(v&1)===0&&s.child!==d?(h=s.child,h.childLanes=0,h.pendingProps=P,s.deletions=null):(h=mi(d,P),h.subtreeFlags=d.subtreeFlags&14680064),S!==null?m=mi(S,m):(m=ds(m,v,a,null),m.flags|=2),m.return=s,h.return=s,h.sibling=m,s.child=h,h=m,m=s.child,v=r.child.memoizedState,v=v===null?td(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},m.memoizedState=v,m.childLanes=r.childLanes&~a,s.memoizedState=ed,h}return m=r.child,r=m.sibling,h=mi(m,{mode:"visible",children:h.children}),(s.mode&1)===0&&(h.lanes=a),h.return=s,h.sibling=null,r!==null&&(a=s.deletions,a===null?(s.deletions=[r],s.flags|=16):a.push(r)),s.child=h,s.memoizedState=null,h}function nd(r,s){return s=Mu({mode:"visible",children:s},r.mode,0,null),s.return=r,r.child=s}function Su(r,s,a,h){return h!==null&&kh(h),ho(s,r.child,null,a),r=nd(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function z0(r,s,a,h,d,m,v){if(a)return s.flags&256?(s.flags&=-257,h=Yh(Error(t(422))),Su(r,s,v,h)):s.memoizedState!==null?(s.child=r.child,s.flags|=128,null):(m=h.fallback,d=s.mode,h=Mu({mode:"visible",children:h.children},d,0,null),m=ds(m,d,v,null),m.flags|=2,h.return=s,m.return=s,h.sibling=m,s.child=h,(s.mode&1)!==0&&ho(s,r.child,null,v),s.child.memoizedState=td(v),s.memoizedState=ed,m);if((s.mode&1)===0)return Su(r,s,v,null);if(d.data==="$!"){if(h=d.nextSibling&&d.nextSibling.dataset,h)var S=h.dgst;return h=S,m=Error(t(419)),h=Yh(m,h,void 0),Su(r,s,v,h)}if(S=(v&r.childLanes)!==0,Yt||S){if(h=It,h!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(h.suspendedLanes|v))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,kr(r,d),bn(h,r,d,-1))}return _d(),h=Yh(Error(t(421))),Su(r,s,v,h)}return d.data==="$?"?(s.flags|=128,s.child=r.child,s=eT.bind(null,r),d._reactRetry=s,null):(r=m.treeContext,un=ii(d.nextSibling),ln=s,Xe=!0,xn=null,r!==null&&(gn[yn++]=Cr,gn[yn++]=Pr,gn[yn++]=rs,Cr=r.id,Pr=r.overflow,rs=s),s=nd(s,h.children),s.flags|=4096,s)}function ag(r,s,a){r.lanes|=s;var h=r.alternate;h!==null&&(h.lanes|=s),Vh(r.return,s,a)}function rd(r,s,a,h,d){var m=r.memoizedState;m===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:h,tail:a,tailMode:d}:(m.isBackwards=s,m.rendering=null,m.renderingStartTime=0,m.last=h,m.tail=a,m.tailMode=d)}function lg(r,s,a){var h=s.pendingProps,d=h.revealOrder,m=h.tail;if(qt(r,s,h.children,a),h=Ze.current,(h&2)!==0)h=h&1|2,s.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&ag(r,a,s);else if(r.tag===19)ag(r,a,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}h&=1}if(We(Ze,h),(s.mode&1)===0)s.memoizedState=null;else switch(d){case"forwards":for(a=s.child,d=null;a!==null;)r=a.alternate,r!==null&&yu(r)===null&&(d=a),a=a.sibling;a=d,a===null?(d=s.child,s.child=null):(d=a.sibling,a.sibling=null),rd(s,!1,d,a,m);break;case"backwards":for(a=null,d=s.child,s.child=null;d!==null;){if(r=d.alternate,r!==null&&yu(r)===null){s.child=d;break}r=d.sibling,d.sibling=a,a=d,d=r}rd(s,!0,a,null,m);break;case"together":rd(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Au(r,s){(s.mode&1)===0&&r!==null&&(r.alternate=null,s.alternate=null,s.flags|=2)}function Nr(r,s,a){if(r!==null&&(s.dependencies=r.dependencies),ls|=s.lanes,(a&s.childLanes)===0)return null;if(r!==null&&s.child!==r.child)throw Error(t(153));if(s.child!==null){for(r=s.child,a=mi(r,r.pendingProps),s.child=a,a.return=s;r.sibling!==null;)r=r.sibling,a=a.sibling=mi(r,r.pendingProps),a.return=s;a.sibling=null}return s.child}function B0(r,s,a){switch(s.tag){case 3:ig(s),co();break;case 5:Tm(s);break;case 1:Qt(s.type)&&au(s);break;case 4:Lh(s,s.stateNode.containerInfo);break;case 10:var h=s.type._context,d=s.memoizedProps.value;We(fu,h._currentValue),h._currentValue=d;break;case 13:if(h=s.memoizedState,h!==null)return h.dehydrated!==null?(We(Ze,Ze.current&1),s.flags|=128,null):(a&s.child.childLanes)!==0?og(r,s,a):(We(Ze,Ze.current&1),r=Nr(r,s,a),r!==null?r.sibling:null);We(Ze,Ze.current&1);break;case 19:if(h=(a&s.childLanes)!==0,(r.flags&128)!==0){if(h)return lg(r,s,a);s.flags|=128}if(d=s.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),We(Ze,Ze.current),h)break;return null;case 22:case 23:return s.lanes=0,tg(r,s,a)}return Nr(r,s,a)}var ug,id,cg,hg;ug=function(r,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)r.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},id=function(){},cg=function(r,s,a,h){var d=r.memoizedProps;if(d!==h){r=s.stateNode,os(ir.current);var m=null;switch(a){case"input":d=Vs(r,d),h=Vs(r,h),m=[];break;case"select":d=oe({},d,{value:void 0}),h=oe({},h,{value:void 0}),m=[];break;case"textarea":d=Zo(r,d),h=Zo(r,h),m=[];break;default:typeof d.onClick!="function"&&typeof h.onClick=="function"&&(r.onclick=iu)}Rn(a,h);var v;a=null;for(j in d)if(!h.hasOwnProperty(j)&&d.hasOwnProperty(j)&&d[j]!=null)if(j==="style"){var S=d[j];for(v in S)S.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else j!=="dangerouslySetInnerHTML"&&j!=="children"&&j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&j!=="autoFocus"&&(o.hasOwnProperty(j)?m||(m=[]):(m=m||[]).push(j,null));for(j in h){var P=h[j];if(S=d!=null?d[j]:void 0,h.hasOwnProperty(j)&&P!==S&&(P!=null||S!=null))if(j==="style")if(S){for(v in S)!S.hasOwnProperty(v)||P&&P.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in P)P.hasOwnProperty(v)&&S[v]!==P[v]&&(a||(a={}),a[v]=P[v])}else a||(m||(m=[]),m.push(j,a)),a=P;else j==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,S=S?S.__html:void 0,P!=null&&S!==P&&(m=m||[]).push(j,P)):j==="children"?typeof P!="string"&&typeof P!="number"||(m=m||[]).push(j,""+P):j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&(o.hasOwnProperty(j)?(P!=null&&j==="onScroll"&&Ge("scroll",r),m||S===P||(m=[])):(m=m||[]).push(j,P))}a&&(m=m||[]).push("style",a);var j=m;(s.updateQueue=j)&&(s.flags|=4)}},hg=function(r,s,a,h){a!==h&&(s.flags|=4)};function Ua(r,s){if(!Xe)switch(r.tailMode){case"hidden":s=r.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?r.tail=null:a.sibling=null;break;case"collapsed":a=r.tail;for(var h=null;a!==null;)a.alternate!==null&&(h=a),a=a.sibling;h===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:h.sibling=null}}function Mt(r){var s=r.alternate!==null&&r.alternate.child===r.child,a=0,h=0;if(s)for(var d=r.child;d!==null;)a|=d.lanes|d.childLanes,h|=d.subtreeFlags&14680064,h|=d.flags&14680064,d.return=r,d=d.sibling;else for(d=r.child;d!==null;)a|=d.lanes|d.childLanes,h|=d.subtreeFlags,h|=d.flags,d.return=r,d=d.sibling;return r.subtreeFlags|=h,r.childLanes=a,s}function $0(r,s,a){var h=s.pendingProps;switch(Rh(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mt(s),null;case 1:return Qt(s.type)&&ou(),Mt(s),null;case 3:return h=s.stateNode,mo(),Qe(Gt),Qe(Ot),Uh(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(r===null||r.child===null)&&(hu(s)?s.flags|=4:r===null||r.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,xn!==null&&(md(xn),xn=null))),id(r,s),Mt(s),null;case 5:Mh(s);var d=os(ba.current);if(a=s.type,r!==null&&s.stateNode!=null)cg(r,s,a,h,d),r.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!h){if(s.stateNode===null)throw Error(t(166));return Mt(s),null}if(r=os(ir.current),hu(s)){h=s.stateNode,a=s.type;var m=s.memoizedProps;switch(h[rr]=s,h[ka]=m,r=(s.mode&1)!==0,a){case"dialog":Ge("cancel",h),Ge("close",h);break;case"iframe":case"object":case"embed":Ge("load",h);break;case"video":case"audio":for(d=0;d<Ra.length;d++)Ge(Ra[d],h);break;case"source":Ge("error",h);break;case"img":case"image":case"link":Ge("error",h),Ge("load",h);break;case"details":Ge("toggle",h);break;case"input":kl(h,m),Ge("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!m.multiple},Ge("invalid",h);break;case"textarea":ea(h,m),Ge("invalid",h)}Rn(a,m),d=null;for(var v in m)if(m.hasOwnProperty(v)){var S=m[v];v==="children"?typeof S=="string"?h.textContent!==S&&(m.suppressHydrationWarning!==!0&&ru(h.textContent,S,r),d=["children",S]):typeof S=="number"&&h.textContent!==""+S&&(m.suppressHydrationWarning!==!0&&ru(h.textContent,S,r),d=["children",""+S]):o.hasOwnProperty(v)&&S!=null&&v==="onScroll"&&Ge("scroll",h)}switch(a){case"input":Ds(h),Xo(h,m,!0);break;case"textarea":Ds(h),Br(h);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(h.onclick=iu)}h=d,s.updateQueue=h,h!==null&&(s.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=ta(a)),r==="http://www.w3.org/1999/xhtml"?a==="script"?(r=v.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof h.is=="string"?r=v.createElement(a,{is:h.is}):(r=v.createElement(a),a==="select"&&(v=r,h.multiple?v.multiple=!0:h.size&&(v.size=h.size))):r=v.createElementNS(r,a),r[rr]=s,r[ka]=h,ug(r,s,!1,!1),s.stateNode=r;e:{switch(v=Ms(a,h),a){case"dialog":Ge("cancel",r),Ge("close",r),d=h;break;case"iframe":case"object":case"embed":Ge("load",r),d=h;break;case"video":case"audio":for(d=0;d<Ra.length;d++)Ge(Ra[d],r);d=h;break;case"source":Ge("error",r),d=h;break;case"img":case"image":case"link":Ge("error",r),Ge("load",r),d=h;break;case"details":Ge("toggle",r),d=h;break;case"input":kl(r,h),d=Vs(r,h),Ge("invalid",r);break;case"option":d=h;break;case"select":r._wrapperState={wasMultiple:!!h.multiple},d=oe({},h,{value:void 0}),Ge("invalid",r);break;case"textarea":ea(r,h),d=Zo(r,h),Ge("invalid",r);break;default:d=h}Rn(a,d),S=d;for(m in S)if(S.hasOwnProperty(m)){var P=S[m];m==="style"?Ls(r,P):m==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,P!=null&&Nl(r,P)):m==="children"?typeof P=="string"?(a!=="textarea"||P!=="")&&zi(r,P):typeof P=="number"&&zi(r,""+P):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?P!=null&&m==="onScroll"&&Ge("scroll",r):P!=null&&ce(r,m,P,v))}switch(a){case"input":Ds(r),Xo(r,h,!1);break;case"textarea":Ds(r),Br(r);break;case"option":h.value!=null&&r.setAttribute("value",""+Oe(h.value));break;case"select":r.multiple=!!h.multiple,m=h.value,m!=null?An(r,!!h.multiple,m,!1):h.defaultValue!=null&&An(r,!!h.multiple,h.defaultValue,!0);break;default:typeof d.onClick=="function"&&(r.onclick=iu)}switch(a){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Mt(s),null;case 6:if(r&&s.stateNode!=null)hg(r,s,r.memoizedProps,h);else{if(typeof h!="string"&&s.stateNode===null)throw Error(t(166));if(a=os(ba.current),os(ir.current),hu(s)){if(h=s.stateNode,a=s.memoizedProps,h[rr]=s,(m=h.nodeValue!==a)&&(r=ln,r!==null))switch(r.tag){case 3:ru(h.nodeValue,a,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&ru(h.nodeValue,a,(r.mode&1)!==0)}m&&(s.flags|=4)}else h=(a.nodeType===9?a:a.ownerDocument).createTextNode(h),h[rr]=s,s.stateNode=h}return Mt(s),null;case 13:if(Qe(Ze),h=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(Xe&&un!==null&&(s.mode&1)!==0&&(s.flags&128)===0)pm(),co(),s.flags|=98560,m=!1;else if(m=hu(s),h!==null&&h.dehydrated!==null){if(r===null){if(!m)throw Error(t(318));if(m=s.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[rr]=s}else co(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Mt(s),m=!1}else xn!==null&&(md(xn),xn=null),m=!0;if(!m)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=a,s):(h=h!==null,h!==(r!==null&&r.memoizedState!==null)&&h&&(s.child.flags|=8192,(s.mode&1)!==0&&(r===null||(Ze.current&1)!==0?vt===0&&(vt=3):_d())),s.updateQueue!==null&&(s.flags|=4),Mt(s),null);case 4:return mo(),id(r,s),r===null&&Ca(s.stateNode.containerInfo),Mt(s),null;case 10:return Dh(s.type._context),Mt(s),null;case 17:return Qt(s.type)&&ou(),Mt(s),null;case 19:if(Qe(Ze),m=s.memoizedState,m===null)return Mt(s),null;if(h=(s.flags&128)!==0,v=m.rendering,v===null)if(h)Ua(m,!1);else{if(vt!==0||r!==null&&(r.flags&128)!==0)for(r=s.child;r!==null;){if(v=yu(r),v!==null){for(s.flags|=128,Ua(m,!1),h=v.updateQueue,h!==null&&(s.updateQueue=h,s.flags|=4),s.subtreeFlags=0,h=a,a=s.child;a!==null;)m=a,r=h,m.flags&=14680066,v=m.alternate,v===null?(m.childLanes=0,m.lanes=r,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=v.childLanes,m.lanes=v.lanes,m.child=v.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=v.memoizedProps,m.memoizedState=v.memoizedState,m.updateQueue=v.updateQueue,m.type=v.type,r=v.dependencies,m.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),a=a.sibling;return We(Ze,Ze.current&1|2),s.child}r=r.sibling}m.tail!==null&&Ke()>vo&&(s.flags|=128,h=!0,Ua(m,!1),s.lanes=4194304)}else{if(!h)if(r=yu(v),r!==null){if(s.flags|=128,h=!0,a=r.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),Ua(m,!0),m.tail===null&&m.tailMode==="hidden"&&!v.alternate&&!Xe)return Mt(s),null}else 2*Ke()-m.renderingStartTime>vo&&a!==1073741824&&(s.flags|=128,h=!0,Ua(m,!1),s.lanes=4194304);m.isBackwards?(v.sibling=s.child,s.child=v):(a=m.last,a!==null?a.sibling=v:s.child=v,m.last=v)}return m.tail!==null?(s=m.tail,m.rendering=s,m.tail=s.sibling,m.renderingStartTime=Ke(),s.sibling=null,a=Ze.current,We(Ze,h?a&1|2:a&1),s):(Mt(s),null);case 22:case 23:return yd(),h=s.memoizedState!==null,r!==null&&r.memoizedState!==null!==h&&(s.flags|=8192),h&&(s.mode&1)!==0?(cn&1073741824)!==0&&(Mt(s),s.subtreeFlags&6&&(s.flags|=8192)):Mt(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function q0(r,s){switch(Rh(s),s.tag){case 1:return Qt(s.type)&&ou(),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return mo(),Qe(Gt),Qe(Ot),Uh(),r=s.flags,(r&65536)!==0&&(r&128)===0?(s.flags=r&-65537|128,s):null;case 5:return Mh(s),null;case 13:if(Qe(Ze),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(t(340));co()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return Qe(Ze),null;case 4:return mo(),null;case 10:return Dh(s.type._context),null;case 22:case 23:return yd(),null;case 24:return null;default:return null}}var Ru=!1,Ft=!1,W0=typeof WeakSet=="function"?WeakSet:Set,ae=null;function yo(r,s){var a=r.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(h){it(r,s,h)}else a.current=null}function sd(r,s,a){try{a()}catch(h){it(r,s,h)}}var dg=!1;function H0(r,s){if(yh=Tr,r=qp(),uh(r)){if("selectionStart"in r)var a={start:r.selectionStart,end:r.selectionEnd};else e:{a=(a=r.ownerDocument)&&a.defaultView||window;var h=a.getSelection&&a.getSelection();if(h&&h.rangeCount!==0){a=h.anchorNode;var d=h.anchorOffset,m=h.focusNode;h=h.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var v=0,S=-1,P=-1,j=0,Q=0,Y=r,G=null;t:for(;;){for(var ne;Y!==a||d!==0&&Y.nodeType!==3||(S=v+d),Y!==m||h!==0&&Y.nodeType!==3||(P=v+h),Y.nodeType===3&&(v+=Y.nodeValue.length),(ne=Y.firstChild)!==null;)G=Y,Y=ne;for(;;){if(Y===r)break t;if(G===a&&++j===d&&(S=v),G===m&&++Q===h&&(P=v),(ne=Y.nextSibling)!==null)break;Y=G,G=Y.parentNode}Y=ne}a=S===-1||P===-1?null:{start:S,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(_h={focusedElem:r,selectionRange:a},Tr=!1,ae=s;ae!==null;)if(s=ae,r=s.child,(s.subtreeFlags&1028)!==0&&r!==null)r.return=s,ae=r;else for(;ae!==null;){s=ae;try{var ue=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(ue!==null){var he=ue.memoizedProps,lt=ue.memoizedState,L=s.stateNode,N=L.getSnapshotBeforeUpdate(s.elementType===s.type?he:Nn(s.type,he),lt);L.__reactInternalSnapshotBeforeUpdate=N}break;case 3:var F=s.stateNode.containerInfo;F.nodeType===1?F.textContent="":F.nodeType===9&&F.documentElement&&F.removeChild(F.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(X){it(s,s.return,X)}if(r=s.sibling,r!==null){r.return=s.return,ae=r;break}ae=s.return}return ue=dg,dg=!1,ue}function ja(r,s,a){var h=s.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var d=h=h.next;do{if((d.tag&r)===r){var m=d.destroy;d.destroy=void 0,m!==void 0&&sd(s,a,m)}d=d.next}while(d!==h)}}function Cu(r,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&r)===r){var h=a.create;a.destroy=h()}a=a.next}while(a!==s)}}function od(r){var s=r.ref;if(s!==null){var a=r.stateNode;switch(r.tag){case 5:r=a;break;default:r=a}typeof s=="function"?s(r):s.current=r}}function fg(r){var s=r.alternate;s!==null&&(r.alternate=null,fg(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&(delete s[rr],delete s[ka],delete s[Th],delete s[P0],delete s[k0])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function pg(r){return r.tag===5||r.tag===3||r.tag===4}function mg(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||pg(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function ad(r,s,a){var h=r.tag;if(h===5||h===6)r=r.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(r,s):a.insertBefore(r,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(r,a)):(s=a,s.appendChild(r)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=iu));else if(h!==4&&(r=r.child,r!==null))for(ad(r,s,a),r=r.sibling;r!==null;)ad(r,s,a),r=r.sibling}function ld(r,s,a){var h=r.tag;if(h===5||h===6)r=r.stateNode,s?a.insertBefore(r,s):a.appendChild(r);else if(h!==4&&(r=r.child,r!==null))for(ld(r,s,a),r=r.sibling;r!==null;)ld(r,s,a),r=r.sibling}var Pt=null,Dn=!1;function ci(r,s,a){for(a=a.child;a!==null;)gg(r,s,a),a=a.sibling}function gg(r,s,a){if(tn&&typeof tn.onCommitFiberUnmount=="function")try{tn.onCommitFiberUnmount(Hi,a)}catch{}switch(a.tag){case 5:Ft||yo(a,s);case 6:var h=Pt,d=Dn;Pt=null,ci(r,s,a),Pt=h,Dn=d,Pt!==null&&(Dn?(r=Pt,a=a.stateNode,r.nodeType===8?r.parentNode.removeChild(a):r.removeChild(a)):Pt.removeChild(a.stateNode));break;case 18:Pt!==null&&(Dn?(r=Pt,a=a.stateNode,r.nodeType===8?Eh(r.parentNode,a):r.nodeType===1&&Eh(r,a),ei(r)):Eh(Pt,a.stateNode));break;case 4:h=Pt,d=Dn,Pt=a.stateNode.containerInfo,Dn=!0,ci(r,s,a),Pt=h,Dn=d;break;case 0:case 11:case 14:case 15:if(!Ft&&(h=a.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){d=h=h.next;do{var m=d,v=m.destroy;m=m.tag,v!==void 0&&((m&2)!==0||(m&4)!==0)&&sd(a,s,v),d=d.next}while(d!==h)}ci(r,s,a);break;case 1:if(!Ft&&(yo(a,s),h=a.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=a.memoizedProps,h.state=a.memoizedState,h.componentWillUnmount()}catch(S){it(a,s,S)}ci(r,s,a);break;case 21:ci(r,s,a);break;case 22:a.mode&1?(Ft=(h=Ft)||a.memoizedState!==null,ci(r,s,a),Ft=h):ci(r,s,a);break;default:ci(r,s,a)}}function yg(r){var s=r.updateQueue;if(s!==null){r.updateQueue=null;var a=r.stateNode;a===null&&(a=r.stateNode=new W0),s.forEach(function(h){var d=tT.bind(null,r,h);a.has(h)||(a.add(h),h.then(d,d))})}}function Vn(r,s){var a=s.deletions;if(a!==null)for(var h=0;h<a.length;h++){var d=a[h];try{var m=r,v=s,S=v;e:for(;S!==null;){switch(S.tag){case 5:Pt=S.stateNode,Dn=!1;break e;case 3:Pt=S.stateNode.containerInfo,Dn=!0;break e;case 4:Pt=S.stateNode.containerInfo,Dn=!0;break e}S=S.return}if(Pt===null)throw Error(t(160));gg(m,v,d),Pt=null,Dn=!1;var P=d.alternate;P!==null&&(P.return=null),d.return=null}catch(j){it(d,s,j)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)_g(s,r),s=s.sibling}function _g(r,s){var a=r.alternate,h=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(Vn(s,r),or(r),h&4){try{ja(3,r,r.return),Cu(3,r)}catch(he){it(r,r.return,he)}try{ja(5,r,r.return)}catch(he){it(r,r.return,he)}}break;case 1:Vn(s,r),or(r),h&512&&a!==null&&yo(a,a.return);break;case 5:if(Vn(s,r),or(r),h&512&&a!==null&&yo(a,a.return),r.flags&32){var d=r.stateNode;try{zi(d,"")}catch(he){it(r,r.return,he)}}if(h&4&&(d=r.stateNode,d!=null)){var m=r.memoizedProps,v=a!==null?a.memoizedProps:m,S=r.type,P=r.updateQueue;if(r.updateQueue=null,P!==null)try{S==="input"&&m.type==="radio"&&m.name!=null&&bs(d,m),Ms(S,v);var j=Ms(S,m);for(v=0;v<P.length;v+=2){var Q=P[v],Y=P[v+1];Q==="style"?Ls(d,Y):Q==="dangerouslySetInnerHTML"?Nl(d,Y):Q==="children"?zi(d,Y):ce(d,Q,Y,j)}switch(S){case"input":ji(d,m);break;case"textarea":xl(d,m);break;case"select":var G=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var ne=m.value;ne!=null?An(d,!!m.multiple,ne,!1):G!==!!m.multiple&&(m.defaultValue!=null?An(d,!!m.multiple,m.defaultValue,!0):An(d,!!m.multiple,m.multiple?[]:"",!1))}d[ka]=m}catch(he){it(r,r.return,he)}}break;case 6:if(Vn(s,r),or(r),h&4){if(r.stateNode===null)throw Error(t(162));d=r.stateNode,m=r.memoizedProps;try{d.nodeValue=m}catch(he){it(r,r.return,he)}}break;case 3:if(Vn(s,r),or(r),h&4&&a!==null&&a.memoizedState.isDehydrated)try{ei(s.containerInfo)}catch(he){it(r,r.return,he)}break;case 4:Vn(s,r),or(r);break;case 13:Vn(s,r),or(r),d=r.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(hd=Ke())),h&4&&yg(r);break;case 22:if(Q=a!==null&&a.memoizedState!==null,r.mode&1?(Ft=(j=Ft)||Q,Vn(s,r),Ft=j):Vn(s,r),or(r),h&8192){if(j=r.memoizedState!==null,(r.stateNode.isHidden=j)&&!Q&&(r.mode&1)!==0)for(ae=r,Q=r.child;Q!==null;){for(Y=ae=Q;ae!==null;){switch(G=ae,ne=G.child,G.tag){case 0:case 11:case 14:case 15:ja(4,G,G.return);break;case 1:yo(G,G.return);var ue=G.stateNode;if(typeof ue.componentWillUnmount=="function"){h=G,a=G.return;try{s=h,ue.props=s.memoizedProps,ue.state=s.memoizedState,ue.componentWillUnmount()}catch(he){it(h,a,he)}}break;case 5:yo(G,G.return);break;case 22:if(G.memoizedState!==null){Eg(Y);continue}}ne!==null?(ne.return=G,ae=ne):Eg(Y)}Q=Q.sibling}e:for(Q=null,Y=r;;){if(Y.tag===5){if(Q===null){Q=Y;try{d=Y.stateNode,j?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(S=Y.stateNode,P=Y.memoizedProps.style,v=P!=null&&P.hasOwnProperty("display")?P.display:null,S.style.display=Wr("display",v))}catch(he){it(r,r.return,he)}}}else if(Y.tag===6){if(Q===null)try{Y.stateNode.nodeValue=j?"":Y.memoizedProps}catch(he){it(r,r.return,he)}}else if((Y.tag!==22&&Y.tag!==23||Y.memoizedState===null||Y===r)&&Y.child!==null){Y.child.return=Y,Y=Y.child;continue}if(Y===r)break e;for(;Y.sibling===null;){if(Y.return===null||Y.return===r)break e;Q===Y&&(Q=null),Y=Y.return}Q===Y&&(Q=null),Y.sibling.return=Y.return,Y=Y.sibling}}break;case 19:Vn(s,r),or(r),h&4&&yg(r);break;case 21:break;default:Vn(s,r),or(r)}}function or(r){var s=r.flags;if(s&2){try{e:{for(var a=r.return;a!==null;){if(pg(a)){var h=a;break e}a=a.return}throw Error(t(160))}switch(h.tag){case 5:var d=h.stateNode;h.flags&32&&(zi(d,""),h.flags&=-33);var m=mg(r);ld(r,m,d);break;case 3:case 4:var v=h.stateNode.containerInfo,S=mg(r);ad(r,S,v);break;default:throw Error(t(161))}}catch(P){it(r,r.return,P)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function K0(r,s,a){ae=r,vg(r)}function vg(r,s,a){for(var h=(r.mode&1)!==0;ae!==null;){var d=ae,m=d.child;if(d.tag===22&&h){var v=d.memoizedState!==null||Ru;if(!v){var S=d.alternate,P=S!==null&&S.memoizedState!==null||Ft;S=Ru;var j=Ft;if(Ru=v,(Ft=P)&&!j)for(ae=d;ae!==null;)v=ae,P=v.child,v.tag===22&&v.memoizedState!==null?Tg(d):P!==null?(P.return=v,ae=P):Tg(d);for(;m!==null;)ae=m,vg(m),m=m.sibling;ae=d,Ru=S,Ft=j}wg(r)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,ae=m):wg(r)}}function wg(r){for(;ae!==null;){var s=ae;if((s.flags&8772)!==0){var a=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Ft||Cu(5,s);break;case 1:var h=s.stateNode;if(s.flags&4&&!Ft)if(a===null)h.componentDidMount();else{var d=s.elementType===s.type?a.memoizedProps:Nn(s.type,a.memoizedProps);h.componentDidUpdate(d,a.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var m=s.updateQueue;m!==null&&Em(s,m,h);break;case 3:var v=s.updateQueue;if(v!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}Em(s,v,a)}break;case 5:var S=s.stateNode;if(a===null&&s.flags&4){a=S;var P=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":P.autoFocus&&a.focus();break;case"img":P.src&&(a.src=P.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var j=s.alternate;if(j!==null){var Q=j.memoizedState;if(Q!==null){var Y=Q.dehydrated;Y!==null&&ei(Y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Ft||s.flags&512&&od(s)}catch(G){it(s,s.return,G)}}if(s===r){ae=null;break}if(a=s.sibling,a!==null){a.return=s.return,ae=a;break}ae=s.return}}function Eg(r){for(;ae!==null;){var s=ae;if(s===r){ae=null;break}var a=s.sibling;if(a!==null){a.return=s.return,ae=a;break}ae=s.return}}function Tg(r){for(;ae!==null;){var s=ae;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{Cu(4,s)}catch(P){it(s,a,P)}break;case 1:var h=s.stateNode;if(typeof h.componentDidMount=="function"){var d=s.return;try{h.componentDidMount()}catch(P){it(s,d,P)}}var m=s.return;try{od(s)}catch(P){it(s,m,P)}break;case 5:var v=s.return;try{od(s)}catch(P){it(s,v,P)}}}catch(P){it(s,s.return,P)}if(s===r){ae=null;break}var S=s.sibling;if(S!==null){S.return=s.return,ae=S;break}ae=s.return}}var G0=Math.ceil,Pu=me.ReactCurrentDispatcher,ud=me.ReactCurrentOwner,wn=me.ReactCurrentBatchConfig,Le=0,It=null,dt=null,kt=0,cn=0,_o=si(0),vt=0,za=null,ls=0,ku=0,cd=0,Ba=null,Jt=null,hd=0,vo=1/0,Dr=null,xu=!1,dd=null,hi=null,Nu=!1,di=null,Du=0,$a=0,fd=null,Vu=-1,bu=0;function Wt(){return(Le&6)!==0?Ke():Vu!==-1?Vu:Vu=Ke()}function fi(r){return(r.mode&1)===0?1:(Le&2)!==0&&kt!==0?kt&-kt:N0.transition!==null?(bu===0&&(bu=ca()),bu):(r=Ve,r!==0||(r=window.event,r=r===void 0?16:Ks(r.type)),r)}function bn(r,s,a,h){if(50<$a)throw $a=0,fd=null,Error(t(185));Yi(r,a,h),((Le&2)===0||r!==It)&&(r===It&&((Le&2)===0&&(ku|=a),vt===4&&pi(r,kt)),Xt(r,h),a===1&&Le===0&&(s.mode&1)===0&&(vo=Ke()+500,lu&&ai()))}function Xt(r,s){var a=r.callbackNode;Qi(r,s);var h=vr(r,r===It?kt:0);if(h===0)a!==null&&js(a),r.callbackNode=null,r.callbackPriority=0;else if(s=h&-h,r.callbackPriority!==s){if(a!=null&&js(a),s===1)r.tag===0?x0(Sg.bind(null,r)):um(Sg.bind(null,r)),R0(function(){(Le&6)===0&&ai()}),a=null;else{switch(Kn(h)){case 1:a=zs;break;case 4:a=aa;break;case 16:a=Wi;break;case 536870912:a=Bs;break;default:a=Wi}a=Dg(a,Ig.bind(null,r))}r.callbackPriority=s,r.callbackNode=a}}function Ig(r,s){if(Vu=-1,bu=0,(Le&6)!==0)throw Error(t(327));var a=r.callbackNode;if(wo()&&r.callbackNode!==a)return null;var h=vr(r,r===It?kt:0);if(h===0)return null;if((h&30)!==0||(h&r.expiredLanes)!==0||s)s=Ou(r,h);else{s=h;var d=Le;Le|=2;var m=Rg();(It!==r||kt!==s)&&(Dr=null,vo=Ke()+500,cs(r,s));do try{J0();break}catch(S){Ag(r,S)}while(!0);Nh(),Pu.current=m,Le=d,dt!==null?s=0:(It=null,kt=0,s=vt)}if(s!==0){if(s===2&&(d=ua(r),d!==0&&(h=d,s=pd(r,d))),s===1)throw a=za,cs(r,0),pi(r,h),Xt(r,Ke()),a;if(s===6)pi(r,h);else{if(d=r.current.alternate,(h&30)===0&&!Q0(d)&&(s=Ou(r,h),s===2&&(m=ua(r),m!==0&&(h=m,s=pd(r,m))),s===1))throw a=za,cs(r,0),pi(r,h),Xt(r,Ke()),a;switch(r.finishedWork=d,r.finishedLanes=h,s){case 0:case 1:throw Error(t(345));case 2:hs(r,Jt,Dr);break;case 3:if(pi(r,h),(h&130023424)===h&&(s=hd+500-Ke(),10<s)){if(vr(r,0)!==0)break;if(d=r.suspendedLanes,(d&h)!==h){Wt(),r.pingedLanes|=r.suspendedLanes&d;break}r.timeoutHandle=wh(hs.bind(null,r,Jt,Dr),s);break}hs(r,Jt,Dr);break;case 4:if(pi(r,h),(h&4194240)===h)break;for(s=r.eventTimes,d=-1;0<h;){var v=31-nn(h);m=1<<v,v=s[v],v>d&&(d=v),h&=~m}if(h=d,h=Ke()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*G0(h/1960))-h,10<h){r.timeoutHandle=wh(hs.bind(null,r,Jt,Dr),h);break}hs(r,Jt,Dr);break;case 5:hs(r,Jt,Dr);break;default:throw Error(t(329))}}}return Xt(r,Ke()),r.callbackNode===a?Ig.bind(null,r):null}function pd(r,s){var a=Ba;return r.current.memoizedState.isDehydrated&&(cs(r,s).flags|=256),r=Ou(r,s),r!==2&&(s=Jt,Jt=a,s!==null&&md(s)),r}function md(r){Jt===null?Jt=r:Jt.push.apply(Jt,r)}function Q0(r){for(var s=r;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var h=0;h<a.length;h++){var d=a[h],m=d.getSnapshot;d=d.value;try{if(!kn(m(),d))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function pi(r,s){for(s&=~cd,s&=~ku,r.suspendedLanes|=s,r.pingedLanes&=~s,r=r.expirationTimes;0<s;){var a=31-nn(s),h=1<<a;r[a]=-1,s&=~h}}function Sg(r){if((Le&6)!==0)throw Error(t(327));wo();var s=vr(r,0);if((s&1)===0)return Xt(r,Ke()),null;var a=Ou(r,s);if(r.tag!==0&&a===2){var h=ua(r);h!==0&&(s=h,a=pd(r,h))}if(a===1)throw a=za,cs(r,0),pi(r,s),Xt(r,Ke()),a;if(a===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=s,hs(r,Jt,Dr),Xt(r,Ke()),null}function gd(r,s){var a=Le;Le|=1;try{return r(s)}finally{Le=a,Le===0&&(vo=Ke()+500,lu&&ai())}}function us(r){di!==null&&di.tag===0&&(Le&6)===0&&wo();var s=Le;Le|=1;var a=wn.transition,h=Ve;try{if(wn.transition=null,Ve=1,r)return r()}finally{Ve=h,wn.transition=a,Le=s,(Le&6)===0&&ai()}}function yd(){cn=_o.current,Qe(_o)}function cs(r,s){r.finishedWork=null,r.finishedLanes=0;var a=r.timeoutHandle;if(a!==-1&&(r.timeoutHandle=-1,A0(a)),dt!==null)for(a=dt.return;a!==null;){var h=a;switch(Rh(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&ou();break;case 3:mo(),Qe(Gt),Qe(Ot),Uh();break;case 5:Mh(h);break;case 4:mo();break;case 13:Qe(Ze);break;case 19:Qe(Ze);break;case 10:Dh(h.type._context);break;case 22:case 23:yd()}a=a.return}if(It=r,dt=r=mi(r.current,null),kt=cn=s,vt=0,za=null,cd=ku=ls=0,Jt=Ba=null,ss!==null){for(s=0;s<ss.length;s++)if(a=ss[s],h=a.interleaved,h!==null){a.interleaved=null;var d=h.next,m=a.pending;if(m!==null){var v=m.next;m.next=d,h.next=v}a.pending=h}ss=null}return r}function Ag(r,s){do{var a=dt;try{if(Nh(),_u.current=Tu,vu){for(var h=et.memoizedState;h!==null;){var d=h.queue;d!==null&&(d.pending=null),h=h.next}vu=!1}if(as=0,Tt=_t=et=null,Oa=!1,La=0,ud.current=null,a===null||a.return===null){vt=1,za=s,dt=null;break}e:{var m=r,v=a.return,S=a,P=s;if(s=kt,S.flags|=32768,P!==null&&typeof P=="object"&&typeof P.then=="function"){var j=P,Q=S,Y=Q.tag;if((Q.mode&1)===0&&(Y===0||Y===11||Y===15)){var G=Q.alternate;G?(Q.updateQueue=G.updateQueue,Q.memoizedState=G.memoizedState,Q.lanes=G.lanes):(Q.updateQueue=null,Q.memoizedState=null)}var ne=Ym(v);if(ne!==null){ne.flags&=-257,Jm(ne,v,S,m,s),ne.mode&1&&Qm(m,j,s),s=ne,P=j;var ue=s.updateQueue;if(ue===null){var he=new Set;he.add(P),s.updateQueue=he}else ue.add(P);break e}else{if((s&1)===0){Qm(m,j,s),_d();break e}P=Error(t(426))}}else if(Xe&&S.mode&1){var lt=Ym(v);if(lt!==null){(lt.flags&65536)===0&&(lt.flags|=256),Jm(lt,v,S,m,s),kh(go(P,S));break e}}m=P=go(P,S),vt!==4&&(vt=2),Ba===null?Ba=[m]:Ba.push(m),m=v;do{switch(m.tag){case 3:m.flags|=65536,s&=-s,m.lanes|=s;var L=Km(m,P,s);wm(m,L);break e;case 1:S=P;var N=m.type,F=m.stateNode;if((m.flags&128)===0&&(typeof N.getDerivedStateFromError=="function"||F!==null&&typeof F.componentDidCatch=="function"&&(hi===null||!hi.has(F)))){m.flags|=65536,s&=-s,m.lanes|=s;var X=Gm(m,S,s);wm(m,X);break e}}m=m.return}while(m!==null)}Pg(a)}catch(de){s=de,dt===a&&a!==null&&(dt=a=a.return);continue}break}while(!0)}function Rg(){var r=Pu.current;return Pu.current=Tu,r===null?Tu:r}function _d(){(vt===0||vt===3||vt===2)&&(vt=4),It===null||(ls&268435455)===0&&(ku&268435455)===0||pi(It,kt)}function Ou(r,s){var a=Le;Le|=2;var h=Rg();(It!==r||kt!==s)&&(Dr=null,cs(r,s));do try{Y0();break}catch(d){Ag(r,d)}while(!0);if(Nh(),Le=a,Pu.current=h,dt!==null)throw Error(t(261));return It=null,kt=0,vt}function Y0(){for(;dt!==null;)Cg(dt)}function J0(){for(;dt!==null&&!qi();)Cg(dt)}function Cg(r){var s=Ng(r.alternate,r,cn);r.memoizedProps=r.pendingProps,s===null?Pg(r):dt=s,ud.current=null}function Pg(r){var s=r;do{var a=s.alternate;if(r=s.return,(s.flags&32768)===0){if(a=$0(a,s,cn),a!==null){dt=a;return}}else{if(a=q0(a,s),a!==null){a.flags&=32767,dt=a;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{vt=6,dt=null;return}}if(s=s.sibling,s!==null){dt=s;return}dt=s=r}while(s!==null);vt===0&&(vt=5)}function hs(r,s,a){var h=Ve,d=wn.transition;try{wn.transition=null,Ve=1,X0(r,s,a,h)}finally{wn.transition=d,Ve=h}return null}function X0(r,s,a,h){do wo();while(di!==null);if((Le&6)!==0)throw Error(t(327));a=r.finishedWork;var d=r.finishedLanes;if(a===null)return null;if(r.finishedWork=null,r.finishedLanes=0,a===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var m=a.lanes|a.childLanes;if(ih(r,m),r===It&&(dt=It=null,kt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Nu||(Nu=!0,Dg(Wi,function(){return wo(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=wn.transition,wn.transition=null;var v=Ve;Ve=1;var S=Le;Le|=4,ud.current=null,H0(r,a),_g(a,r),_0(_h),Tr=!!yh,_h=yh=null,r.current=a,K0(a),_r(),Le=S,Ve=v,wn.transition=m}else r.current=a;if(Nu&&(Nu=!1,di=r,Du=d),m=r.pendingLanes,m===0&&(hi=null),Bl(a.stateNode),Xt(r,Ke()),s!==null)for(h=r.onRecoverableError,a=0;a<s.length;a++)d=s[a],h(d.value,{componentStack:d.stack,digest:d.digest});if(xu)throw xu=!1,r=dd,dd=null,r;return(Du&1)!==0&&r.tag!==0&&wo(),m=r.pendingLanes,(m&1)!==0?r===fd?$a++:($a=0,fd=r):$a=0,ai(),null}function wo(){if(di!==null){var r=Kn(Du),s=wn.transition,a=Ve;try{if(wn.transition=null,Ve=16>r?16:r,di===null)var h=!1;else{if(r=di,di=null,Du=0,(Le&6)!==0)throw Error(t(331));var d=Le;for(Le|=4,ae=r.current;ae!==null;){var m=ae,v=m.child;if((ae.flags&16)!==0){var S=m.deletions;if(S!==null){for(var P=0;P<S.length;P++){var j=S[P];for(ae=j;ae!==null;){var Q=ae;switch(Q.tag){case 0:case 11:case 15:ja(8,Q,m)}var Y=Q.child;if(Y!==null)Y.return=Q,ae=Y;else for(;ae!==null;){Q=ae;var G=Q.sibling,ne=Q.return;if(fg(Q),Q===j){ae=null;break}if(G!==null){G.return=ne,ae=G;break}ae=ne}}}var ue=m.alternate;if(ue!==null){var he=ue.child;if(he!==null){ue.child=null;do{var lt=he.sibling;he.sibling=null,he=lt}while(he!==null)}}ae=m}}if((m.subtreeFlags&2064)!==0&&v!==null)v.return=m,ae=v;else e:for(;ae!==null;){if(m=ae,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:ja(9,m,m.return)}var L=m.sibling;if(L!==null){L.return=m.return,ae=L;break e}ae=m.return}}var N=r.current;for(ae=N;ae!==null;){v=ae;var F=v.child;if((v.subtreeFlags&2064)!==0&&F!==null)F.return=v,ae=F;else e:for(v=N;ae!==null;){if(S=ae,(S.flags&2048)!==0)try{switch(S.tag){case 0:case 11:case 15:Cu(9,S)}}catch(de){it(S,S.return,de)}if(S===v){ae=null;break e}var X=S.sibling;if(X!==null){X.return=S.return,ae=X;break e}ae=S.return}}if(Le=d,ai(),tn&&typeof tn.onPostCommitFiberRoot=="function")try{tn.onPostCommitFiberRoot(Hi,r)}catch{}h=!0}return h}finally{Ve=a,wn.transition=s}}return!1}function kg(r,s,a){s=go(a,s),s=Km(r,s,1),r=ui(r,s,1),s=Wt(),r!==null&&(Yi(r,1,s),Xt(r,s))}function it(r,s,a){if(r.tag===3)kg(r,r,a);else for(;s!==null;){if(s.tag===3){kg(s,r,a);break}else if(s.tag===1){var h=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(hi===null||!hi.has(h))){r=go(a,r),r=Gm(s,r,1),s=ui(s,r,1),r=Wt(),s!==null&&(Yi(s,1,r),Xt(s,r));break}}s=s.return}}function Z0(r,s,a){var h=r.pingCache;h!==null&&h.delete(s),s=Wt(),r.pingedLanes|=r.suspendedLanes&a,It===r&&(kt&a)===a&&(vt===4||vt===3&&(kt&130023424)===kt&&500>Ke()-hd?cs(r,0):cd|=a),Xt(r,s)}function xg(r,s){s===0&&((r.mode&1)===0?s=1:(s=Jr,Jr<<=1,(Jr&130023424)===0&&(Jr=4194304)));var a=Wt();r=kr(r,s),r!==null&&(Yi(r,s,a),Xt(r,a))}function eT(r){var s=r.memoizedState,a=0;s!==null&&(a=s.retryLane),xg(r,a)}function tT(r,s){var a=0;switch(r.tag){case 13:var h=r.stateNode,d=r.memoizedState;d!==null&&(a=d.retryLane);break;case 19:h=r.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(s),xg(r,a)}var Ng;Ng=function(r,s,a){if(r!==null)if(r.memoizedProps!==s.pendingProps||Gt.current)Yt=!0;else{if((r.lanes&a)===0&&(s.flags&128)===0)return Yt=!1,B0(r,s,a);Yt=(r.flags&131072)!==0}else Yt=!1,Xe&&(s.flags&1048576)!==0&&cm(s,cu,s.index);switch(s.lanes=0,s.tag){case 2:var h=s.type;Au(r,s),r=s.pendingProps;var d=ao(s,Ot.current);po(s,a),d=Bh(null,s,h,r,d,a);var m=$h();return s.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Qt(h)?(m=!0,au(s)):m=!1,s.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Oh(s),d.updater=Iu,s.stateNode=d,d._reactInternals=s,Qh(s,h,r,a),s=Zh(null,s,h,!0,m,a)):(s.tag=0,Xe&&m&&Ah(s),qt(null,s,d,a),s=s.child),s;case 16:h=s.elementType;e:{switch(Au(r,s),r=s.pendingProps,d=h._init,h=d(h._payload),s.type=h,d=s.tag=rT(h),r=Nn(h,r),d){case 0:s=Xh(null,s,h,r,a);break e;case 1:s=rg(null,s,h,r,a);break e;case 11:s=Xm(null,s,h,r,a);break e;case 14:s=Zm(null,s,h,Nn(h.type,r),a);break e}throw Error(t(306,h,""))}return s;case 0:return h=s.type,d=s.pendingProps,d=s.elementType===h?d:Nn(h,d),Xh(r,s,h,d,a);case 1:return h=s.type,d=s.pendingProps,d=s.elementType===h?d:Nn(h,d),rg(r,s,h,d,a);case 3:e:{if(ig(s),r===null)throw Error(t(387));h=s.pendingProps,m=s.memoizedState,d=m.element,vm(r,s),gu(s,h,null,a);var v=s.memoizedState;if(h=v.element,m.isDehydrated)if(m={element:h,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},s.updateQueue.baseState=m,s.memoizedState=m,s.flags&256){d=go(Error(t(423)),s),s=sg(r,s,h,a,d);break e}else if(h!==d){d=go(Error(t(424)),s),s=sg(r,s,h,a,d);break e}else for(un=ii(s.stateNode.containerInfo.firstChild),ln=s,Xe=!0,xn=null,a=ym(s,null,h,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(co(),h===d){s=Nr(r,s,a);break e}qt(r,s,h,a)}s=s.child}return s;case 5:return Tm(s),r===null&&Ph(s),h=s.type,d=s.pendingProps,m=r!==null?r.memoizedProps:null,v=d.children,vh(h,d)?v=null:m!==null&&vh(h,m)&&(s.flags|=32),ng(r,s),qt(r,s,v,a),s.child;case 6:return r===null&&Ph(s),null;case 13:return og(r,s,a);case 4:return Lh(s,s.stateNode.containerInfo),h=s.pendingProps,r===null?s.child=ho(s,null,h,a):qt(r,s,h,a),s.child;case 11:return h=s.type,d=s.pendingProps,d=s.elementType===h?d:Nn(h,d),Xm(r,s,h,d,a);case 7:return qt(r,s,s.pendingProps,a),s.child;case 8:return qt(r,s,s.pendingProps.children,a),s.child;case 12:return qt(r,s,s.pendingProps.children,a),s.child;case 10:e:{if(h=s.type._context,d=s.pendingProps,m=s.memoizedProps,v=d.value,We(fu,h._currentValue),h._currentValue=v,m!==null)if(kn(m.value,v)){if(m.children===d.children&&!Gt.current){s=Nr(r,s,a);break e}}else for(m=s.child,m!==null&&(m.return=s);m!==null;){var S=m.dependencies;if(S!==null){v=m.child;for(var P=S.firstContext;P!==null;){if(P.context===h){if(m.tag===1){P=xr(-1,a&-a),P.tag=2;var j=m.updateQueue;if(j!==null){j=j.shared;var Q=j.pending;Q===null?P.next=P:(P.next=Q.next,Q.next=P),j.pending=P}}m.lanes|=a,P=m.alternate,P!==null&&(P.lanes|=a),Vh(m.return,a,s),S.lanes|=a;break}P=P.next}}else if(m.tag===10)v=m.type===s.type?null:m.child;else if(m.tag===18){if(v=m.return,v===null)throw Error(t(341));v.lanes|=a,S=v.alternate,S!==null&&(S.lanes|=a),Vh(v,a,s),v=m.sibling}else v=m.child;if(v!==null)v.return=m;else for(v=m;v!==null;){if(v===s){v=null;break}if(m=v.sibling,m!==null){m.return=v.return,v=m;break}v=v.return}m=v}qt(r,s,d.children,a),s=s.child}return s;case 9:return d=s.type,h=s.pendingProps.children,po(s,a),d=_n(d),h=h(d),s.flags|=1,qt(r,s,h,a),s.child;case 14:return h=s.type,d=Nn(h,s.pendingProps),d=Nn(h.type,d),Zm(r,s,h,d,a);case 15:return eg(r,s,s.type,s.pendingProps,a);case 17:return h=s.type,d=s.pendingProps,d=s.elementType===h?d:Nn(h,d),Au(r,s),s.tag=1,Qt(h)?(r=!0,au(s)):r=!1,po(s,a),Wm(s,h,d),Qh(s,h,d,a),Zh(null,s,h,!0,r,a);case 19:return lg(r,s,a);case 22:return tg(r,s,a)}throw Error(t(156,s.tag))};function Dg(r,s){return oa(r,s)}function nT(r,s,a,h){this.tag=r,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function En(r,s,a,h){return new nT(r,s,a,h)}function vd(r){return r=r.prototype,!(!r||!r.isReactComponent)}function rT(r){if(typeof r=="function")return vd(r)?1:0;if(r!=null){if(r=r.$$typeof,r===O)return 11;if(r===Et)return 14}return 2}function mi(r,s){var a=r.alternate;return a===null?(a=En(r.tag,s,r.key,r.mode),a.elementType=r.elementType,a.type=r.type,a.stateNode=r.stateNode,a.alternate=r,r.alternate=a):(a.pendingProps=s,a.type=r.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=r.flags&14680064,a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,s=r.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=r.sibling,a.index=r.index,a.ref=r.ref,a}function Lu(r,s,a,h,d,m){var v=2;if(h=r,typeof r=="function")vd(r)&&(v=1);else if(typeof r=="string")v=5;else e:switch(r){case k:return ds(a.children,d,m,s);case A:v=8,d|=8;break;case C:return r=En(12,a,s,d|2),r.elementType=C,r.lanes=m,r;case R:return r=En(13,a,s,d),r.elementType=R,r.lanes=m,r;case qe:return r=En(19,a,s,d),r.elementType=qe,r.lanes=m,r;case Je:return Mu(a,d,m,s);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case D:v=10;break e;case x:v=9;break e;case O:v=11;break e;case Et:v=14;break e;case Vt:v=16,h=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return s=En(v,a,s,d),s.elementType=r,s.type=h,s.lanes=m,s}function ds(r,s,a,h){return r=En(7,r,h,s),r.lanes=a,r}function Mu(r,s,a,h){return r=En(22,r,h,s),r.elementType=Je,r.lanes=a,r.stateNode={isHidden:!1},r}function wd(r,s,a){return r=En(6,r,null,s),r.lanes=a,r}function Ed(r,s,a){return s=En(4,r.children!==null?r.children:[],r.key,s),s.lanes=a,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}function iT(r,s,a,h,d){this.tag=s,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ha(0),this.expirationTimes=ha(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ha(0),this.identifierPrefix=h,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Td(r,s,a,h,d,m,v,S,P){return r=new iT(r,s,a,S,P),s===1?(s=1,m===!0&&(s|=8)):s=0,m=En(3,null,null,s),r.current=m,m.stateNode=r,m.memoizedState={element:h,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Oh(m),r}function sT(r,s,a){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ce,key:h==null?null:""+h,children:r,containerInfo:s,implementation:a}}function Vg(r){if(!r)return oi;r=r._reactInternals;e:{if(Cn(r)!==r||r.tag!==1)throw Error(t(170));var s=r;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Qt(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(r.tag===1){var a=r.type;if(Qt(a))return am(r,a,s)}return s}function bg(r,s,a,h,d,m,v,S,P){return r=Td(a,h,!0,r,d,m,v,S,P),r.context=Vg(null),a=r.current,h=Wt(),d=fi(a),m=xr(h,d),m.callback=s??null,ui(a,m,d),r.current.lanes=d,Yi(r,d,h),Xt(r,h),r}function Fu(r,s,a,h){var d=s.current,m=Wt(),v=fi(d);return a=Vg(a),s.context===null?s.context=a:s.pendingContext=a,s=xr(m,v),s.payload={element:r},h=h===void 0?null:h,h!==null&&(s.callback=h),r=ui(d,s,v),r!==null&&(bn(r,d,v,m),mu(r,d,v)),v}function Uu(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function Og(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var a=r.retryLane;r.retryLane=a!==0&&a<s?a:s}}function Id(r,s){Og(r,s),(r=r.alternate)&&Og(r,s)}function oT(){return null}var Lg=typeof reportError=="function"?reportError:function(r){console.error(r)};function Sd(r){this._internalRoot=r}ju.prototype.render=Sd.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(t(409));Fu(r,s,null,null)},ju.prototype.unmount=Sd.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;us(function(){Fu(null,r,null,null)}),s[Ar]=null}};function ju(r){this._internalRoot=r}ju.prototype.unstable_scheduleHydration=function(r){if(r){var s=ma();r={blockedOn:null,target:r,priority:s};for(var a=0;a<rn.length&&s!==0&&s<rn[a].priority;a++);rn.splice(a,0,r),a===0&&Ws(r)}};function Ad(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function zu(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function Mg(){}function aT(r,s,a,h,d){if(d){if(typeof h=="function"){var m=h;h=function(){var j=Uu(v);m.call(j)}}var v=bg(s,h,r,0,null,!1,!1,"",Mg);return r._reactRootContainer=v,r[Ar]=v.current,Ca(r.nodeType===8?r.parentNode:r),us(),v}for(;d=r.lastChild;)r.removeChild(d);if(typeof h=="function"){var S=h;h=function(){var j=Uu(P);S.call(j)}}var P=Td(r,0,!1,null,null,!1,!1,"",Mg);return r._reactRootContainer=P,r[Ar]=P.current,Ca(r.nodeType===8?r.parentNode:r),us(function(){Fu(s,P,a,h)}),P}function Bu(r,s,a,h,d){var m=a._reactRootContainer;if(m){var v=m;if(typeof d=="function"){var S=d;d=function(){var P=Uu(v);S.call(P)}}Fu(s,v,r,d)}else v=aT(a,s,r,d,h);return Uu(v)}fa=function(r){switch(r.tag){case 3:var s=r.stateNode;if(s.current.memoizedState.isDehydrated){var a=Fe(s.pendingLanes);a!==0&&(da(s,a|1),Xt(s,Ke()),(Le&6)===0&&(vo=Ke()+500,ai()))}break;case 13:us(function(){var h=kr(r,1);if(h!==null){var d=Wt();bn(h,r,1,d)}}),Id(r,1)}},$s=function(r){if(r.tag===13){var s=kr(r,134217728);if(s!==null){var a=Wt();bn(s,r,134217728,a)}Id(r,134217728)}},pa=function(r){if(r.tag===13){var s=fi(r),a=kr(r,s);if(a!==null){var h=Wt();bn(a,r,s,h)}Id(r,s)}},ma=function(){return Ve},ga=function(r,s){var a=Ve;try{return Ve=r,s()}finally{Ve=a}},mr=function(r,s,a){switch(s){case"input":if(ji(r,a),s=a.name,a.type==="radio"&&s!=null){for(a=r;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var h=a[s];if(h!==r&&h.form===r.form){var d=su(h);if(!d)throw Error(t(90));Jo(h),ji(h,d)}}}break;case"textarea":xl(r,a);break;case"select":s=a.value,s!=null&&An(r,!!a.multiple,s,!1)}},Vl=gd,bl=us;var lT={usingClientEntryPoint:!1,Events:[xa,so,su,Kr,Gr,gd]},qa={findFiberByHostInstance:ts,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},uT={bundleType:qa.bundleType,version:qa.version,rendererPackageName:qa.rendererPackageName,rendererConfig:qa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:me.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=zl(r),r===null?null:r.stateNode},findFiberByHostInstance:qa.findFiberByHostInstance||oT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $u=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$u.isDisabled&&$u.supportsFiber)try{Hi=$u.inject(uT),tn=$u}catch{}}return Zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lT,Zt.createPortal=function(r,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ad(s))throw Error(t(200));return sT(r,s,null,a)},Zt.createRoot=function(r,s){if(!Ad(r))throw Error(t(299));var a=!1,h="",d=Lg;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onRecoverableError!==void 0&&(d=s.onRecoverableError)),s=Td(r,1,!1,null,null,a,!1,h,d),r[Ar]=s.current,Ca(r.nodeType===8?r.parentNode:r),new Sd(s)},Zt.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=zl(s),r=r===null?null:r.stateNode,r},Zt.flushSync=function(r){return us(r)},Zt.hydrate=function(r,s,a){if(!zu(s))throw Error(t(200));return Bu(null,r,s,!0,a)},Zt.hydrateRoot=function(r,s,a){if(!Ad(r))throw Error(t(405));var h=a!=null&&a.hydratedSources||null,d=!1,m="",v=Lg;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),s=bg(s,null,r,1,a??null,d,!1,m,v),r[Ar]=s.current,Ca(r),h)for(r=0;r<h.length;r++)a=h[r],d=a._getVersion,d=d(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,d]:s.mutableSourceEagerHydrationData.push(a,d);return new ju(s)},Zt.render=function(r,s,a){if(!zu(s))throw Error(t(200));return Bu(null,r,s,!1,a)},Zt.unmountComponentAtNode=function(r){if(!zu(r))throw Error(t(40));return r._reactRootContainer?(us(function(){Bu(null,null,r,!1,function(){r._reactRootContainer=null,r[Ar]=null})}),!0):!1},Zt.unstable_batchedUpdates=gd,Zt.unstable_renderSubtreeIntoContainer=function(r,s,a,h){if(!zu(a))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return Bu(r,s,a,!1,h)},Zt.version="18.3.1-next-f1338f8080-20240426",Zt}var Wg;function H_(){if(Wg)return Pd.exports;Wg=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Pd.exports=_T(),Pd.exports}var Hg;function vT(){if(Hg)return qu;Hg=1;var n=H_();return qu.createRoot=n.createRoot,qu.hydrateRoot=n.hydrateRoot,qu}var wT=vT();const ET=q_(wT);H_();/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function al(){return al=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},al.apply(this,arguments)}var Ti;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(Ti||(Ti={}));const Kg="popstate";function TT(n){n===void 0&&(n={});function e(i,o){let{pathname:l,search:c,hash:f}=i.location;return Jd("",{pathname:l,search:c,hash:f},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(i,o){return typeof o=="string"?o:ac(o)}return ST(e,t,null,n)}function tt(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function xf(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function IT(){return Math.random().toString(36).substr(2,8)}function Gg(n,e){return{usr:n.state,key:n.key,idx:e}}function Jd(n,e,t,i){return t===void 0&&(t=null),al({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof e=="string"?jo(e):e,{state:t,key:e&&e.key||i||IT()})}function ac(n){let{pathname:e="/",search:t="",hash:i=""}=n;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function jo(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substr(t),n=n.substr(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substr(i),n=n.substr(0,i)),n&&(e.pathname=n)}return e}function ST(n,e,t,i){i===void 0&&(i={});let{window:o=document.defaultView,v5Compat:l=!1}=i,c=o.history,f=Ti.Pop,p=null,y=w();y==null&&(y=0,c.replaceState(al({},c.state,{idx:y}),""));function w(){return(c.state||{idx:null}).idx}function E(){f=Ti.Pop;let V=w(),re=V==null?null:V-y;y=V,p&&p({action:f,location:q.location,delta:re})}function I(V,re){f=Ti.Push;let te=Jd(q.location,V,re);y=w()+1;let ce=Gg(te,y),me=q.createHref(te);try{c.pushState(ce,"",me)}catch(Re){if(Re instanceof DOMException&&Re.name==="DataCloneError")throw Re;o.location.assign(me)}l&&p&&p({action:f,location:q.location,delta:1})}function U(V,re){f=Ti.Replace;let te=Jd(q.location,V,re);y=w();let ce=Gg(te,y),me=q.createHref(te);c.replaceState(ce,"",me),l&&p&&p({action:f,location:q.location,delta:0})}function $(V){let re=o.location.origin!=="null"?o.location.origin:o.location.href,te=typeof V=="string"?V:ac(V);return te=te.replace(/ $/,"%20"),tt(re,"No window.location.(origin|href) available to create URL for href: "+te),new URL(te,re)}let q={get action(){return f},get location(){return n(o,c)},listen(V){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(Kg,E),p=V,()=>{o.removeEventListener(Kg,E),p=null}},createHref(V){return e(o,V)},createURL:$,encodeLocation(V){let re=$(V);return{pathname:re.pathname,search:re.search,hash:re.hash}},push:I,replace:U,go(V){return c.go(V)}};return q}var Qg;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(Qg||(Qg={}));function AT(n,e,t){return t===void 0&&(t="/"),RT(n,e,t)}function RT(n,e,t,i){let o=typeof e=="string"?jo(e):e,l=Vo(o.pathname||"/",t);if(l==null)return null;let c=K_(n);CT(c);let f=null;for(let p=0;f==null&&p<c.length;++p){let y=FT(l);f=LT(c[p],y)}return f}function K_(n,e,t,i){e===void 0&&(e=[]),t===void 0&&(t=[]),i===void 0&&(i="");let o=(l,c,f)=>{let p={relativePath:f===void 0?l.path||"":f,caseSensitive:l.caseSensitive===!0,childrenIndex:c,route:l};p.relativePath.startsWith("/")&&(tt(p.relativePath.startsWith(i),'Absolute route path "'+p.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),p.relativePath=p.relativePath.slice(i.length));let y=Si([i,p.relativePath]),w=t.concat(p);l.children&&l.children.length>0&&(tt(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+y+'".')),K_(l.children,e,w,y)),!(l.path==null&&!l.index)&&e.push({path:y,score:bT(y,l.index),routesMeta:w})};return n.forEach((l,c)=>{var f;if(l.path===""||!((f=l.path)!=null&&f.includes("?")))o(l,c);else for(let p of G_(l.path))o(l,c,p)}),e}function G_(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(i.length===0)return o?[l,""]:[l];let c=G_(i.join("/")),f=[];return f.push(...c.map(p=>p===""?l:[l,p].join("/"))),o&&f.push(...c),f.map(p=>n.startsWith("/")&&p===""?"/":p)}function CT(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:OT(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}const PT=/^:[\w-]+$/,kT=3,xT=2,NT=1,DT=10,VT=-2,Yg=n=>n==="*";function bT(n,e){let t=n.split("/"),i=t.length;return t.some(Yg)&&(i+=VT),e&&(i+=xT),t.filter(o=>!Yg(o)).reduce((o,l)=>o+(PT.test(l)?kT:l===""?NT:DT),i)}function OT(n,e){return n.length===e.length&&n.slice(0,-1).every((i,o)=>i===e[o])?n[n.length-1]-e[e.length-1]:0}function LT(n,e,t){let{routesMeta:i}=n,o={},l="/",c=[];for(let f=0;f<i.length;++f){let p=i[f],y=f===i.length-1,w=l==="/"?e:e.slice(l.length)||"/",E=Xd({path:p.relativePath,caseSensitive:p.caseSensitive,end:y},w),I=p.route;if(!E)return null;Object.assign(o,E.params),c.push({params:o,pathname:Si([l,E.pathname]),pathnameBase:$T(Si([l,E.pathnameBase])),route:I}),E.pathnameBase!=="/"&&(l=Si([l,E.pathnameBase]))}return c}function Xd(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=MT(n.path,n.caseSensitive,n.end),o=e.match(t);if(!o)return null;let l=o[0],c=l.replace(/(.)\/+$/,"$1"),f=o.slice(1);return{params:i.reduce((y,w,E)=>{let{paramName:I,isOptional:U}=w;if(I==="*"){let q=f[E]||"";c=l.slice(0,l.length-q.length).replace(/(.)\/+$/,"$1")}const $=f[E];return U&&!$?y[I]=void 0:y[I]=($||"").replace(/%2F/g,"/"),y},{}),pathname:l,pathnameBase:c,pattern:n}}function MT(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),xf(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let i=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,f,p)=>(i.push({paramName:f,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(i.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),i]}function FT(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return xf(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),n}}function Vo(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}const UT=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,jT=n=>UT.test(n);function zT(n,e){e===void 0&&(e="/");let{pathname:t,search:i="",hash:o=""}=typeof n=="string"?jo(n):n,l;if(t)if(jT(t))l=t;else{if(t.includes("//")){let c=t;t=t.replace(/\/\/+/g,"/"),xf(!1,"Pathnames cannot have embedded double slashes - normalizing "+(c+" -> "+t))}t.startsWith("/")?l=Jg(t.substring(1),"/"):l=Jg(t,e)}else l=e;return{pathname:l,search:qT(i),hash:WT(o)}}function Jg(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function Nd(n,e,t,i){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function BT(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Nf(n,e){let t=BT(n);return e?t.map((i,o)=>o===t.length-1?i.pathname:i.pathnameBase):t.map(i=>i.pathnameBase)}function Df(n,e,t,i){i===void 0&&(i=!1);let o;typeof n=="string"?o=jo(n):(o=al({},n),tt(!o.pathname||!o.pathname.includes("?"),Nd("?","pathname","search",o)),tt(!o.pathname||!o.pathname.includes("#"),Nd("#","pathname","hash",o)),tt(!o.search||!o.search.includes("#"),Nd("#","search","hash",o)));let l=n===""||o.pathname==="",c=l?"/":o.pathname,f;if(c==null)f=t;else{let E=e.length-1;if(!i&&c.startsWith("..")){let I=c.split("/");for(;I[0]==="..";)I.shift(),E-=1;o.pathname=I.join("/")}f=E>=0?e[E]:"/"}let p=zT(o,f),y=c&&c!=="/"&&c.endsWith("/"),w=(l||c===".")&&t.endsWith("/");return!p.pathname.endsWith("/")&&(y||w)&&(p.pathname+="/"),p}const Si=n=>n.join("/").replace(/\/\/+/g,"/"),$T=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),qT=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,WT=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function HT(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const Q_=["post","put","patch","delete"];new Set(Q_);const KT=["get",...Q_];new Set(KT);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ll(){return ll=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},ll.apply(this,arguments)}const Dc=J.createContext(null),Y_=J.createContext(null),jr=J.createContext(null),Vc=J.createContext(null),Mi=J.createContext({outlet:null,matches:[],isDataRoute:!1}),J_=J.createContext(null);function GT(n,e){let{relative:t}=e===void 0?{}:e;zo()||tt(!1);let{basename:i,navigator:o}=J.useContext(jr),{hash:l,pathname:c,search:f}=bc(n,{relative:t}),p=c;return i!=="/"&&(p=c==="/"?i:Si([i,c])),o.createHref({pathname:p,search:f,hash:l})}function zo(){return J.useContext(Vc)!=null}function Bo(){return zo()||tt(!1),J.useContext(Vc).location}function X_(n){J.useContext(jr).static||J.useLayoutEffect(n)}function Z_(){let{isDataRoute:n}=J.useContext(Mi);return n?aI():QT()}function QT(){zo()||tt(!1);let n=J.useContext(Dc),{basename:e,future:t,navigator:i}=J.useContext(jr),{matches:o}=J.useContext(Mi),{pathname:l}=Bo(),c=JSON.stringify(Nf(o,t.v7_relativeSplatPath)),f=J.useRef(!1);return X_(()=>{f.current=!0}),J.useCallback(function(y,w){if(w===void 0&&(w={}),!f.current)return;if(typeof y=="number"){i.go(y);return}let E=Df(y,JSON.parse(c),l,w.relative==="path");n==null&&e!=="/"&&(E.pathname=E.pathname==="/"?e:Si([e,E.pathname])),(w.replace?i.replace:i.push)(E,w.state,w)},[e,i,c,l,n])}function bc(n,e){let{relative:t}=e===void 0?{}:e,{future:i}=J.useContext(jr),{matches:o}=J.useContext(Mi),{pathname:l}=Bo(),c=JSON.stringify(Nf(o,i.v7_relativeSplatPath));return J.useMemo(()=>Df(n,JSON.parse(c),l,t==="path"),[n,c,l,t])}function YT(n,e){return JT(n,e)}function JT(n,e,t,i){zo()||tt(!1);let{navigator:o}=J.useContext(jr),{matches:l}=J.useContext(Mi),c=l[l.length-1],f=c?c.params:{};c&&c.pathname;let p=c?c.pathnameBase:"/";c&&c.route;let y=Bo(),w;if(e){var E;let V=typeof e=="string"?jo(e):e;p==="/"||(E=V.pathname)!=null&&E.startsWith(p)||tt(!1),w=V}else w=y;let I=w.pathname||"/",U=I;if(p!=="/"){let V=p.replace(/^\//,"").split("/");U="/"+I.replace(/^\//,"").split("/").slice(V.length).join("/")}let $=AT(n,{pathname:U}),q=nI($&&$.map(V=>Object.assign({},V,{params:Object.assign({},f,V.params),pathname:Si([p,o.encodeLocation?o.encodeLocation(V.pathname).pathname:V.pathname]),pathnameBase:V.pathnameBase==="/"?p:Si([p,o.encodeLocation?o.encodeLocation(V.pathnameBase).pathname:V.pathnameBase])})),l,t,i);return e&&q?J.createElement(Vc.Provider,{value:{location:ll({pathname:"/",search:"",hash:"",state:null,key:"default"},w),navigationType:Ti.Pop}},q):q}function XT(){let n=oI(),e=HT(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return J.createElement(J.Fragment,null,J.createElement("h2",null,"Unexpected Application Error!"),J.createElement("h3",{style:{fontStyle:"italic"}},e),t?J.createElement("pre",{style:o},t):null,null)}const ZT=J.createElement(XT,null);class eI extends J.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?J.createElement(Mi.Provider,{value:this.props.routeContext},J.createElement(J_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function tI(n){let{routeContext:e,match:t,children:i}=n,o=J.useContext(Dc);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),J.createElement(Mi.Provider,{value:e},i)}function nI(n,e,t,i){var o;if(e===void 0&&(e=[]),t===void 0&&(t=null),i===void 0&&(i=null),n==null){var l;if(!t)return null;if(t.errors)n=t.matches;else if((l=i)!=null&&l.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let c=n,f=(o=t)==null?void 0:o.errors;if(f!=null){let w=c.findIndex(E=>E.route.id&&(f==null?void 0:f[E.route.id])!==void 0);w>=0||tt(!1),c=c.slice(0,Math.min(c.length,w+1))}let p=!1,y=-1;if(t&&i&&i.v7_partialHydration)for(let w=0;w<c.length;w++){let E=c[w];if((E.route.HydrateFallback||E.route.hydrateFallbackElement)&&(y=w),E.route.id){let{loaderData:I,errors:U}=t,$=E.route.loader&&I[E.route.id]===void 0&&(!U||U[E.route.id]===void 0);if(E.route.lazy||$){p=!0,y>=0?c=c.slice(0,y+1):c=[c[0]];break}}}return c.reduceRight((w,E,I)=>{let U,$=!1,q=null,V=null;t&&(U=f&&E.route.id?f[E.route.id]:void 0,q=E.route.errorElement||ZT,p&&(y<0&&I===0?(lI("route-fallback"),$=!0,V=null):y===I&&($=!0,V=E.route.hydrateFallbackElement||null)));let re=e.concat(c.slice(0,I+1)),te=()=>{let ce;return U?ce=q:$?ce=V:E.route.Component?ce=J.createElement(E.route.Component,null):E.route.element?ce=E.route.element:ce=w,J.createElement(tI,{match:E,routeContext:{outlet:w,matches:re,isDataRoute:t!=null},children:ce})};return t&&(E.route.ErrorBoundary||E.route.errorElement||I===0)?J.createElement(eI,{location:t.location,revalidation:t.revalidation,component:q,error:U,children:te(),routeContext:{outlet:null,matches:re,isDataRoute:!0}}):te()},null)}var ev=(function(n){return n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n})(ev||{}),tv=(function(n){return n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n})(tv||{});function rI(n){let e=J.useContext(Dc);return e||tt(!1),e}function iI(n){let e=J.useContext(Y_);return e||tt(!1),e}function sI(n){let e=J.useContext(Mi);return e||tt(!1),e}function nv(n){let e=sI(),t=e.matches[e.matches.length-1];return t.route.id||tt(!1),t.route.id}function oI(){var n;let e=J.useContext(J_),t=iI(),i=nv();return e!==void 0?e:(n=t.errors)==null?void 0:n[i]}function aI(){let{router:n}=rI(ev.UseNavigateStable),e=nv(tv.UseNavigateStable),t=J.useRef(!1);return X_(()=>{t.current=!0}),J.useCallback(function(o,l){l===void 0&&(l={}),t.current&&(typeof o=="number"?n.navigate(o):n.navigate(o,ll({fromRouteId:e},l)))},[n,e])}const Xg={};function lI(n,e,t){Xg[n]||(Xg[n]=!0)}function uI(n,e){n==null||n.v7_startTransition,n==null||n.v7_relativeSplatPath}function cI(n){let{to:e,replace:t,state:i,relative:o}=n;zo()||tt(!1);let{future:l,static:c}=J.useContext(jr),{matches:f}=J.useContext(Mi),{pathname:p}=Bo(),y=Z_(),w=Df(e,Nf(f,l.v7_relativeSplatPath),p,o==="path"),E=JSON.stringify(w);return J.useEffect(()=>y(JSON.parse(E),{replace:t,state:i,relative:o}),[y,E,o,t,i]),null}function fs(n){tt(!1)}function hI(n){let{basename:e="/",children:t=null,location:i,navigationType:o=Ti.Pop,navigator:l,static:c=!1,future:f}=n;zo()&&tt(!1);let p=e.replace(/^\/*/,"/"),y=J.useMemo(()=>({basename:p,navigator:l,static:c,future:ll({v7_relativeSplatPath:!1},f)}),[p,f,l,c]);typeof i=="string"&&(i=jo(i));let{pathname:w="/",search:E="",hash:I="",state:U=null,key:$="default"}=i,q=J.useMemo(()=>{let V=Vo(w,p);return V==null?null:{location:{pathname:V,search:E,hash:I,state:U,key:$},navigationType:o}},[p,w,E,I,U,$,o]);return q==null?null:J.createElement(jr.Provider,{value:y},J.createElement(Vc.Provider,{children:t,value:q}))}function dI(n){let{children:e,location:t}=n;return YT(Zd(e),t)}new Promise(()=>{});function Zd(n,e){e===void 0&&(e=[]);let t=[];return J.Children.forEach(n,(i,o)=>{if(!J.isValidElement(i))return;let l=[...e,o];if(i.type===J.Fragment){t.push.apply(t,Zd(i.props.children,l));return}i.type!==fs&&tt(!1),!i.props.index||!i.props.children||tt(!1);let c={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(c.children=Zd(i.props.children,l)),t.push(c)}),t}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function lc(){return lc=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},lc.apply(this,arguments)}function rv(n,e){if(n==null)return{};var t={},i=Object.keys(n),o,l;for(l=0;l<i.length;l++)o=i[l],!(e.indexOf(o)>=0)&&(t[o]=n[o]);return t}function fI(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function pI(n,e){return n.button===0&&(!e||e==="_self")&&!fI(n)}const mI=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],gI=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],yI="6";try{window.__reactRouterVersion=yI}catch{}const _I=J.createContext({isTransitioning:!1}),vI="startTransition",Zg=mT[vI];function wI(n){let{basename:e,children:t,future:i,window:o}=n,l=J.useRef();l.current==null&&(l.current=TT({window:o,v5Compat:!0}));let c=l.current,[f,p]=J.useState({action:c.action,location:c.location}),{v7_startTransition:y}=i||{},w=J.useCallback(E=>{y&&Zg?Zg(()=>p(E)):p(E)},[p,y]);return J.useLayoutEffect(()=>c.listen(w),[c,w]),J.useEffect(()=>uI(i),[i]),J.createElement(hI,{basename:e,children:t,location:f.location,navigationType:f.action,navigator:c,future:i})}const EI=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",TI=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,II=J.forwardRef(function(e,t){let{onClick:i,relative:o,reloadDocument:l,replace:c,state:f,target:p,to:y,preventScrollReset:w,viewTransition:E}=e,I=rv(e,mI),{basename:U}=J.useContext(jr),$,q=!1;if(typeof y=="string"&&TI.test(y)&&($=y,EI))try{let ce=new URL(window.location.href),me=y.startsWith("//")?new URL(ce.protocol+y):new URL(y),Re=Vo(me.pathname,U);me.origin===ce.origin&&Re!=null?y=Re+me.search+me.hash:q=!0}catch{}let V=GT(y,{relative:o}),re=RI(y,{replace:c,state:f,target:p,preventScrollReset:w,relative:o,viewTransition:E});function te(ce){i&&i(ce),ce.defaultPrevented||re(ce)}return J.createElement("a",lc({},I,{href:$||V,onClick:q||l?i:te,ref:t,target:p}))}),SI=J.forwardRef(function(e,t){let{"aria-current":i="page",caseSensitive:o=!1,className:l="",end:c=!1,style:f,to:p,viewTransition:y,children:w}=e,E=rv(e,gI),I=bc(p,{relative:E.relative}),U=Bo(),$=J.useContext(Y_),{navigator:q,basename:V}=J.useContext(jr),re=$!=null&&CI(I)&&y===!0,te=q.encodeLocation?q.encodeLocation(I).pathname:I.pathname,ce=U.pathname,me=$&&$.navigation&&$.navigation.location?$.navigation.location.pathname:null;o||(ce=ce.toLowerCase(),me=me?me.toLowerCase():null,te=te.toLowerCase()),me&&V&&(me=Vo(me,V)||me);const Re=te!=="/"&&te.endsWith("/")?te.length-1:te.length;let Ce=ce===te||!c&&ce.startsWith(te)&&ce.charAt(Re)==="/",k=me!=null&&(me===te||!c&&me.startsWith(te)&&me.charAt(te.length)==="/"),A={isActive:Ce,isPending:k,isTransitioning:re},C=Ce?i:void 0,D;typeof l=="function"?D=l(A):D=[l,Ce?"active":null,k?"pending":null,re?"transitioning":null].filter(Boolean).join(" ");let x=typeof f=="function"?f(A):f;return J.createElement(II,lc({},E,{"aria-current":C,className:D,ref:t,style:x,to:p,viewTransition:y}),typeof w=="function"?w(A):w)});var ef;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})(ef||(ef={}));var ey;(function(n){n.UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(ey||(ey={}));function AI(n){let e=J.useContext(Dc);return e||tt(!1),e}function RI(n,e){let{target:t,replace:i,state:o,preventScrollReset:l,relative:c,viewTransition:f}=e===void 0?{}:e,p=Z_(),y=Bo(),w=bc(n,{relative:c});return J.useCallback(E=>{if(pI(E,t)){E.preventDefault();let I=i!==void 0?i:ac(y)===ac(w);p(n,{replace:I,state:o,preventScrollReset:l,relative:c,viewTransition:f})}},[y,p,w,i,o,t,n,l,c,f])}function CI(n,e){e===void 0&&(e={});let t=J.useContext(_I);t==null&&tt(!1);let{basename:i}=AI(ef.useViewTransitionState),o=bc(n,{relative:e.relative});if(!t.isTransitioning)return!1;let l=Vo(t.currentLocation.pathname,i)||t.currentLocation.pathname,c=Vo(t.nextLocation.pathname,i)||t.nextLocation.pathname;return Xd(o.pathname,c)!=null||Xd(o.pathname,l)!=null}const PI=()=>{};var ty={};/**
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
 */const iv=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let o=n.charCodeAt(i);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},kI=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const o=n[t++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const l=n[t++];e[i++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=n[t++],c=n[t++],f=n[t++],p=((o&7)<<18|(l&63)<<12|(c&63)<<6|f&63)-65536;e[i++]=String.fromCharCode(55296+(p>>10)),e[i++]=String.fromCharCode(56320+(p&1023))}else{const l=n[t++],c=n[t++];e[i++]=String.fromCharCode((o&15)<<12|(l&63)<<6|c&63)}}return e.join("")},sv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<n.length;o+=3){const l=n[o],c=o+1<n.length,f=c?n[o+1]:0,p=o+2<n.length,y=p?n[o+2]:0,w=l>>2,E=(l&3)<<4|f>>4;let I=(f&15)<<2|y>>6,U=y&63;p||(U=64,c||(I=64)),i.push(t[w],t[E],t[I],t[U])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(iv(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):kI(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<n.length;){const l=t[n.charAt(o++)],f=o<n.length?t[n.charAt(o)]:0;++o;const y=o<n.length?t[n.charAt(o)]:64;++o;const E=o<n.length?t[n.charAt(o)]:64;if(++o,l==null||f==null||y==null||E==null)throw new xI;const I=l<<2|f>>4;if(i.push(I),y!==64){const U=f<<4&240|y>>2;if(i.push(U),E!==64){const $=y<<6&192|E;i.push($)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class xI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const NI=function(n){const e=iv(n);return sv.encodeByteArray(e,!0)},uc=function(n){return NI(n).replace(/\./g,"")},ov=function(n){try{return sv.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function DI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const VI=()=>DI().__FIREBASE_DEFAULTS__,bI=()=>{if(typeof process>"u"||typeof ty>"u")return;const n=ty.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},OI=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&ov(n[1]);return e&&JSON.parse(e)},Oc=()=>{try{return PI()||VI()||bI()||OI()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},av=n=>{var e,t;return(t=(e=Oc())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},LI=n=>{const e=av(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},lv=()=>{var n;return(n=Oc())==null?void 0:n.config},uv=n=>{var e;return(e=Oc())==null?void 0:e[`_${n}`]};/**
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
 */class MI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function $o(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function cv(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function FI(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",o=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c={iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}},...n};return[uc(JSON.stringify(t)),uc(JSON.stringify(c)),""].join(".")}const Xa={};function UI(){const n={prod:[],emulator:[]};for(const e of Object.keys(Xa))Xa[e]?n.emulator.push(e):n.prod.push(e);return n}function jI(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let ny=!1;function hv(n,e){if(typeof window>"u"||typeof document>"u"||!$o(window.location.host)||Xa[n]===e||Xa[n]||ny)return;Xa[n]=e;function t(I){return`__firebase__banner__${I}`}const i="__firebase__banner",l=UI().prod.length>0;function c(){const I=document.getElementById(i);I&&I.remove()}function f(I){I.style.display="flex",I.style.background="#7faaf0",I.style.position="fixed",I.style.bottom="5px",I.style.left="5px",I.style.padding=".5em",I.style.borderRadius="5px",I.style.alignItems="center"}function p(I,U){I.setAttribute("width","24"),I.setAttribute("id",U),I.setAttribute("height","24"),I.setAttribute("viewBox","0 0 24 24"),I.setAttribute("fill","none"),I.style.marginLeft="-6px"}function y(){const I=document.createElement("span");return I.style.cursor="pointer",I.style.marginLeft="16px",I.style.fontSize="24px",I.innerHTML=" &times;",I.onclick=()=>{ny=!0,c()},I}function w(I,U){I.setAttribute("id",U),I.innerText="Learn more",I.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",I.setAttribute("target","__blank"),I.style.paddingLeft="5px",I.style.textDecoration="underline"}function E(){const I=jI(i),U=t("text"),$=document.getElementById(U)||document.createElement("span"),q=t("learnmore"),V=document.getElementById(q)||document.createElement("a"),re=t("preprendIcon"),te=document.getElementById(re)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(I.created){const ce=I.element;f(ce),w(V,q);const me=y();p(te,re),ce.append(te,$,V,me),document.body.appendChild(ce)}l?($.innerText="Preview backend disconnected.",te.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(te.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,$.innerText="Preview backend running in this workspace."),$.setAttribute("id",U)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",E):E()}/**
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
 */function Bt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function zI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Bt())}function BI(){var e;const n=(e=Oc())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function $I(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function dv(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function qI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function WI(){const n=Bt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function HI(){return!BI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function fv(){try{return typeof indexedDB=="object"}catch{return!1}}function pv(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)==null?void 0:l.message)||"")}}catch(t){e(t)}})}function KI(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const GI="FirebaseError";class zn extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=GI,Object.setPrototypeOf(this,zn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Rs.prototype.create)}}class Rs{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],c=l?QI(l,i):"Error",f=`${this.serviceName}: ${c} (${o}).`;return new zn(o,f,i)}}function QI(n,e){return n.replace(YI,(t,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const YI=/\{\$([^}]+)}/g;function JI(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function xi(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const o of t){if(!i.includes(o))return!1;const l=n[o],c=e[o];if(ry(l)&&ry(c)){if(!xi(l,c))return!1}else if(l!==c)return!1}for(const o of i)if(!t.includes(o))return!1;return!0}function ry(n){return n!==null&&typeof n=="object"}/**
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
 */function qo(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function XI(n,e){const t=new ZI(n,e);return t.subscribe.bind(t)}class ZI{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");e1(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=Dd),o.error===void 0&&(o.error=Dd),o.complete===void 0&&(o.complete=Dd);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function e1(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Dd(){}/**
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
 */const t1=1e3,n1=2,r1=14400*1e3,i1=.5;function iy(n,e=t1,t=n1){const i=e*Math.pow(t,n),o=Math.round(i1*i*(Math.random()-.5)*2);return Math.min(r1,i+o)}/**
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
 */function st(n){return n&&n._delegate?n._delegate:n}class Un{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ps="[DEFAULT]";/**
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
 */class s1{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new MI;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(a1(e))try{this.getOrInitializeService({instanceIdentifier:ps})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});i.resolve(l)}catch{}}}}clearInstance(e=ps){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ps){return this.instances.has(e)}getOptions(e=ps){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[l,c]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);i===f&&c.resolve(o)}return o}onInit(e,t){const i=this.normalizeInstanceIdentifier(t),o=this.onInitCallbacks.get(i)??new Set;o.add(e),this.onInitCallbacks.set(i,o);const l=this.instances.get(i);return l&&e(l,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const o of i)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:o1(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=ps){return this.component?this.component.multipleInstances?e:ps:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function o1(n){return n===ps?void 0:n}function a1(n){return n.instantiationMode==="EAGER"}/**
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
 */class l1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new s1(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var xe;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(xe||(xe={}));const u1={debug:xe.DEBUG,verbose:xe.VERBOSE,info:xe.INFO,warn:xe.WARN,error:xe.ERROR,silent:xe.SILENT},c1=xe.INFO,h1={[xe.DEBUG]:"log",[xe.VERBOSE]:"log",[xe.INFO]:"info",[xe.WARN]:"warn",[xe.ERROR]:"error"},d1=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),o=h1[e];if(o)console[o](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Lc{constructor(e){this.name=e,this._logLevel=c1,this._logHandler=d1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in xe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?u1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,xe.DEBUG,...e),this._logHandler(this,xe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,xe.VERBOSE,...e),this._logHandler(this,xe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,xe.INFO,...e),this._logHandler(this,xe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,xe.WARN,...e),this._logHandler(this,xe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,xe.ERROR,...e),this._logHandler(this,xe.ERROR,...e)}}const f1=(n,e)=>e.some(t=>n instanceof t);let sy,oy;function p1(){return sy||(sy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function m1(){return oy||(oy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const mv=new WeakMap,tf=new WeakMap,gv=new WeakMap,Vd=new WeakMap,Vf=new WeakMap;function g1(n){const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("success",l),n.removeEventListener("error",c)},l=()=>{t(Ai(n.result)),o()},c=()=>{i(n.error),o()};n.addEventListener("success",l),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&mv.set(t,n)}).catch(()=>{}),Vf.set(e,n),e}function y1(n){if(tf.has(n))return;const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",c),n.removeEventListener("abort",c)},l=()=>{t(),o()},c=()=>{i(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",l),n.addEventListener("error",c),n.addEventListener("abort",c)});tf.set(n,e)}let nf={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return tf.get(n);if(e==="objectStoreNames")return n.objectStoreNames||gv.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ai(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function _1(n){nf=n(nf)}function v1(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(bd(this),e,...t);return gv.set(i,e.sort?e.sort():[e]),Ai(i)}:m1().includes(n)?function(...e){return n.apply(bd(this),e),Ai(mv.get(this))}:function(...e){return Ai(n.apply(bd(this),e))}}function w1(n){return typeof n=="function"?v1(n):(n instanceof IDBTransaction&&y1(n),f1(n,p1())?new Proxy(n,nf):n)}function Ai(n){if(n instanceof IDBRequest)return g1(n);if(Vd.has(n))return Vd.get(n);const e=w1(n);return e!==n&&(Vd.set(n,e),Vf.set(e,n)),e}const bd=n=>Vf.get(n);function yv(n,e,{blocked:t,upgrade:i,blocking:o,terminated:l}={}){const c=indexedDB.open(n,e),f=Ai(c);return i&&c.addEventListener("upgradeneeded",p=>{i(Ai(c.result),p.oldVersion,p.newVersion,Ai(c.transaction),p)}),t&&c.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),f.then(p=>{l&&p.addEventListener("close",()=>l()),o&&p.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),f}const E1=["get","getKey","getAll","getAllKeys","count"],T1=["put","add","delete","clear"],Od=new Map;function ay(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Od.get(e))return Od.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,o=T1.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(o||E1.includes(t)))return;const l=async function(c,...f){const p=this.transaction(c,o?"readwrite":"readonly");let y=p.store;return i&&(y=y.index(f.shift())),(await Promise.all([y[t](...f),o&&p.done]))[0]};return Od.set(e,l),l}_1(n=>({...n,get:(e,t,i)=>ay(e,t)||n.get(e,t,i),has:(e,t)=>!!ay(e,t)||n.has(e,t)}));/**
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
 */class I1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(S1(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function S1(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const rf="@firebase/app",ly="0.14.8";/**
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
 */const Or=new Lc("@firebase/app"),A1="@firebase/app-compat",R1="@firebase/analytics-compat",C1="@firebase/analytics",P1="@firebase/app-check-compat",k1="@firebase/app-check",x1="@firebase/auth",N1="@firebase/auth-compat",D1="@firebase/database",V1="@firebase/data-connect",b1="@firebase/database-compat",O1="@firebase/functions",L1="@firebase/functions-compat",M1="@firebase/installations",F1="@firebase/installations-compat",U1="@firebase/messaging",j1="@firebase/messaging-compat",z1="@firebase/performance",B1="@firebase/performance-compat",$1="@firebase/remote-config",q1="@firebase/remote-config-compat",W1="@firebase/storage",H1="@firebase/storage-compat",K1="@firebase/firestore",G1="@firebase/ai",Q1="@firebase/firestore-compat",Y1="firebase",J1="12.9.0";/**
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
 */const sf="[DEFAULT]",X1={[rf]:"fire-core",[A1]:"fire-core-compat",[C1]:"fire-analytics",[R1]:"fire-analytics-compat",[k1]:"fire-app-check",[P1]:"fire-app-check-compat",[x1]:"fire-auth",[N1]:"fire-auth-compat",[D1]:"fire-rtdb",[V1]:"fire-data-connect",[b1]:"fire-rtdb-compat",[O1]:"fire-fn",[L1]:"fire-fn-compat",[M1]:"fire-iid",[F1]:"fire-iid-compat",[U1]:"fire-fcm",[j1]:"fire-fcm-compat",[z1]:"fire-perf",[B1]:"fire-perf-compat",[$1]:"fire-rc",[q1]:"fire-rc-compat",[W1]:"fire-gcs",[H1]:"fire-gcs-compat",[K1]:"fire-fst",[Q1]:"fire-fst-compat",[G1]:"fire-vertex","fire-js":"fire-js",[Y1]:"fire-js-all"};/**
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
 */const cc=new Map,Z1=new Map,of=new Map;function uy(n,e){try{n.container.addComponent(e)}catch(t){Or.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function dr(n){const e=n.name;if(of.has(e))return Or.debug(`There were multiple attempts to register component ${e}.`),!1;of.set(e,n);for(const t of cc.values())uy(t,n);for(const t of Z1.values())uy(t,n);return!0}function Cs(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function On(n){return n==null?!1:n.settings!==void 0}/**
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
 */const eS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ri=new Rs("app","Firebase",eS);/**
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
 */class tS{constructor(e,t,i){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Un("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ri.create("app-deleted",{appName:this._name})}}/**
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
 */const Wo=J1;function _v(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i={name:sf,automaticDataCollectionEnabled:!0,...e},o=i.name;if(typeof o!="string"||!o)throw Ri.create("bad-app-name",{appName:String(o)});if(t||(t=lv()),!t)throw Ri.create("no-options");const l=cc.get(o);if(l){if(xi(t,l.options)&&xi(i,l.config))return l;throw Ri.create("duplicate-app",{appName:o})}const c=new l1(o);for(const p of of.values())c.addComponent(p);const f=new tS(t,i,c);return cc.set(o,f),f}function bf(n=sf){const e=cc.get(n);if(!e&&n===sf&&lv())return _v();if(!e)throw Ri.create("no-app",{appName:n});return e}function Sn(n,e,t){let i=X1[n]??n;t&&(i+=`-${t}`);const o=i.match(/\s|\//),l=e.match(/\s|\//);if(o||l){const c=[`Unable to register library "${i}" with version "${e}":`];o&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&l&&c.push("and"),l&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Or.warn(c.join(" "));return}dr(new Un(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const nS="firebase-heartbeat-database",rS=1,ul="firebase-heartbeat-store";let Ld=null;function vv(){return Ld||(Ld=yv(nS,rS,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ul)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ri.create("idb-open",{originalErrorMessage:n.message})})),Ld}async function iS(n){try{const t=(await vv()).transaction(ul),i=await t.objectStore(ul).get(wv(n));return await t.done,i}catch(e){if(e instanceof zn)Or.warn(e.message);else{const t=Ri.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Or.warn(t.message)}}}async function cy(n,e){try{const i=(await vv()).transaction(ul,"readwrite");await i.objectStore(ul).put(e,wv(n)),await i.done}catch(t){if(t instanceof zn)Or.warn(t.message);else{const i=Ri.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Or.warn(i.message)}}}function wv(n){return`${n.name}!${n.options.appId}`}/**
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
 */const sS=1024,oS=30;class aS{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new uS(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=hy();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(c=>c.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats.length>oS){const c=cS(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){Or.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=hy(),{heartbeatsToSend:i,unsentEntries:o}=lS(this._heartbeatsCache.heartbeats),l=uc(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Or.warn(t),""}}}function hy(){return new Date().toISOString().substring(0,10)}function lS(n,e=sS){const t=[];let i=n.slice();for(const o of n){const l=t.find(c=>c.agent===o.agent);if(l){if(l.dates.push(o.date),dy(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),dy(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class uS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return fv()?pv().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await iS(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return cy(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return cy(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function dy(n){return uc(JSON.stringify({version:2,heartbeats:n})).length}function cS(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
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
 */function hS(n){dr(new Un("platform-logger",e=>new I1(e),"PRIVATE")),dr(new Un("heartbeat",e=>new aS(e),"PRIVATE")),Sn(rf,ly,n),Sn(rf,ly,"esm2020"),Sn("fire-js","")}hS("");var dS="firebase",fS="12.9.0";/**
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
 */Sn(dS,fS,"app");function Ev(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const pS=Ev,Tv=new Rs("auth","Firebase",Ev());/**
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
 */const hc=new Lc("@firebase/auth");function mS(n,...e){hc.logLevel<=xe.WARN&&hc.warn(`Auth (${Wo}): ${n}`,...e)}function Ju(n,...e){hc.logLevel<=xe.ERROR&&hc.error(`Auth (${Wo}): ${n}`,...e)}/**
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
 */function Lr(n,...e){throw Of(n,...e)}function dn(n,...e){return Of(n,...e)}function Iv(n,e,t){const i={...pS(),[e]:t};return new Rs("auth","Firebase",i).create(e,{appName:n.name})}function Ci(n){return Iv(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Of(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return Tv.create(n,...e)}function le(n,e,...t){if(!n)throw Of(e,...t)}function Vr(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Ju(e),new Error(e)}function Mr(n,e){n||Vr(e)}/**
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
 */function af(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function Sv(){return fy()==="http:"||fy()==="https:"}function fy(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
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
 */function gS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Sv()||dv()||"connection"in navigator)?navigator.onLine:!0}function yS(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class wl{constructor(e,t){this.shortDelay=e,this.longDelay=t,Mr(t>e,"Short delay should be less than long delay!"),this.isMobile=zI()||qI()}get(){return gS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Lf(n,e){Mr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Av{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Vr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Vr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Vr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const _S={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const vS=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],wS=new wl(3e4,6e4);function pr(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Bn(n,e,t,i,o={}){return Rv(n,o,async()=>{let l={},c={};i&&(e==="GET"?c=i:l={body:JSON.stringify(i)});const f=qo({key:n.config.apiKey,...c}).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const y={method:e,headers:p,...l};return $I()||(y.referrerPolicy="no-referrer"),n.emulatorConfig&&$o(n.emulatorConfig.host)&&(y.credentials="include"),Av.fetch()(await Cv(n,n.config.apiHost,t,f),y)})}async function Rv(n,e,t){n._canInitEmulator=!1;const i={..._S,...e};try{const o=new TS(n),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw Ka(n,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const f=l.ok?c.errorMessage:c.error.message,[p,y]=f.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ka(n,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw Ka(n,"email-already-in-use",c);if(p==="USER_DISABLED")throw Ka(n,"user-disabled",c);const w=i[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw Iv(n,w,y);Lr(n,w)}}catch(o){if(o instanceof zn)throw o;Lr(n,"network-request-failed",{message:String(o)})}}async function Mc(n,e,t,i,o={}){const l=await Bn(n,e,t,i,o);return"mfaPendingCredential"in l&&Lr(n,"multi-factor-auth-required",{_serverResponse:l}),l}async function Cv(n,e,t,i){const o=`${e}${t}?${i}`,l=n,c=l.config.emulator?Lf(n.config,o):`${n.config.apiScheme}://${o}`;return vS.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(c).toString():c}function ES(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class TS{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(dn(this.auth,"network-request-failed")),wS.get())})}}function Ka(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const o=dn(n,e,i);return o.customData._tokenResponse=t,o}/**
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
 */function py(n){return n!==void 0&&n.getResponse!==void 0}function my(n){return n!==void 0&&n.enterprise!==void 0}class Pv{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return ES(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
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
 */async function IS(n){return(await Bn(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function kv(n,e){return Bn(n,"GET","/v2/recaptchaConfig",pr(n,e))}/**
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
 */async function SS(n,e){return Bn(n,"POST","/v1/accounts:delete",e)}async function dc(n,e){return Bn(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Za(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function AS(n,e=!1){const t=st(n),i=await t.getIdToken(e),o=Mf(i);le(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,c=l==null?void 0:l.sign_in_provider;return{claims:o,token:i,authTime:Za(Md(o.auth_time)),issuedAtTime:Za(Md(o.iat)),expirationTime:Za(Md(o.exp)),signInProvider:c||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function Md(n){return Number(n)*1e3}function Mf(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Ju("JWT malformed, contained fewer than 3 sections"),null;try{const o=ov(t);return o?JSON.parse(o):(Ju("Failed to decode base64 JWT payload"),null)}catch(o){return Ju("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function gy(n){const e=Mf(n);return le(e,"internal-error"),le(typeof e.exp<"u","internal-error"),le(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function cl(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof zn&&RS(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function RS({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class CS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class lf{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Za(this.lastLoginAt),this.creationTime=Za(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function fc(n){var E;const e=n.auth,t=await n.getIdToken(),i=await cl(n,dc(e,{idToken:t}));le(i==null?void 0:i.users.length,e,"internal-error");const o=i.users[0];n._notifyReloadListener(o);const l=(E=o.providerUserInfo)!=null&&E.length?xv(o.providerUserInfo):[],c=kS(n.providerData,l),f=n.isAnonymous,p=!(n.email&&o.passwordHash)&&!(c!=null&&c.length),y=f?p:!1,w={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new lf(o.createdAt,o.lastLoginAt),isAnonymous:y};Object.assign(n,w)}async function PS(n){const e=st(n);await fc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function kS(n,e){return[...n.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function xv(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function xS(n,e){const t=await Rv(n,{},async()=>{const i=qo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=n.config,c=await Cv(n,o,"/v1/token",`key=${l}`),f=await n._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:f,body:i};return n.emulatorConfig&&$o(n.emulatorConfig.host)&&(p.credentials="include"),Av.fetch()(c,p)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function NS(n,e){return Bn(n,"POST","/v2/accounts:revokeToken",pr(n,e))}/**
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
 */class Ro{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){le(e.idToken,"internal-error"),le(typeof e.idToken<"u","internal-error"),le(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):gy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){le(e.length!==0,"internal-error");const t=gy(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(le(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:o,expiresIn:l}=await xS(e,t);this.updateTokensAndExpiration(i,o,Number(l))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:o,expirationTime:l}=t,c=new Ro;return i&&(le(typeof i=="string","internal-error",{appName:e}),c.refreshToken=i),o&&(le(typeof o=="string","internal-error",{appName:e}),c.accessToken=o),l&&(le(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ro,this.toJSON())}_performRefresh(){return Vr("not implemented")}}/**
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
 */function yi(n,e){le(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ln{constructor({uid:e,auth:t,stsTokenManager:i,...o}){this.providerId="firebase",this.proactiveRefresh=new CS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new lf(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await cl(this,this.stsTokenManager.getToken(this.auth,e));return le(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return AS(this,e)}reload(){return PS(this)}_assign(e){this!==e&&(le(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ln({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){le(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await fc(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(On(this.auth.app))return Promise.reject(Ci(this.auth));const e=await this.getIdToken();return await cl(this,SS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const i=t.displayName??void 0,o=t.email??void 0,l=t.phoneNumber??void 0,c=t.photoURL??void 0,f=t.tenantId??void 0,p=t._redirectEventId??void 0,y=t.createdAt??void 0,w=t.lastLoginAt??void 0,{uid:E,emailVerified:I,isAnonymous:U,providerData:$,stsTokenManager:q}=t;le(E&&q,e,"internal-error");const V=Ro.fromJSON(this.name,q);le(typeof E=="string",e,"internal-error"),yi(i,e.name),yi(o,e.name),le(typeof I=="boolean",e,"internal-error"),le(typeof U=="boolean",e,"internal-error"),yi(l,e.name),yi(c,e.name),yi(f,e.name),yi(p,e.name),yi(y,e.name),yi(w,e.name);const re=new Ln({uid:E,auth:e,email:o,emailVerified:I,displayName:i,isAnonymous:U,photoURL:c,phoneNumber:l,tenantId:f,stsTokenManager:V,createdAt:y,lastLoginAt:w});return $&&Array.isArray($)&&(re.providerData=$.map(te=>({...te}))),p&&(re._redirectEventId=p),re}static async _fromIdTokenResponse(e,t,i=!1){const o=new Ro;o.updateFromServerResponse(t);const l=new Ln({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await fc(l),l}static async _fromGetAccountInfoResponse(e,t,i){const o=t.users[0];le(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?xv(o.providerUserInfo):[],c=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),f=new Ro;f.updateFromIdToken(i);const p=new Ln({uid:o.localId,auth:e,stsTokenManager:f,isAnonymous:c}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new lf(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(p,y),p}}/**
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
 */const yy=new Map;function br(n){Mr(n instanceof Function,"Expected a class definition");let e=yy.get(n);return e?(Mr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,yy.set(n,e),e)}/**
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
 */class Nv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Nv.type="NONE";const _y=Nv;/**
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
 */function Xu(n,e,t){return`firebase:${n}:${e}:${t}`}class Co{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:o,name:l}=this.auth;this.fullUserKey=Xu(this.userKey,o.apiKey,l),this.fullPersistenceKey=Xu("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await dc(this.auth,{idToken:e}).catch(()=>{});return t?Ln._fromGetAccountInfoResponse(this.auth,t,e):null}return Ln._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Co(br(_y),e,i);const o=(await Promise.all(t.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let l=o[0]||br(_y);const c=Xu(i,e.config.apiKey,e.name);let f=null;for(const y of t)try{const w=await y._get(c);if(w){let E;if(typeof w=="string"){const I=await dc(e,{idToken:w}).catch(()=>{});if(!I)break;E=await Ln._fromGetAccountInfoResponse(e,I,w)}else E=Ln._fromJSON(e,w);y!==l&&(f=E),l=y;break}}catch{}const p=o.filter(y=>y._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new Co(l,e,i):(l=p[0],f&&await l._set(c,f.toJSON()),await Promise.all(t.map(async y=>{if(y!==l)try{await y._remove(c)}catch{}})),new Co(l,e,i))}}/**
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
 */function vy(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ov(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Dv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Mv(e))return"Blackberry";if(Fv(e))return"Webos";if(Vv(e))return"Safari";if((e.includes("chrome/")||bv(e))&&!e.includes("edge/"))return"Chrome";if(Lv(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Dv(n=Bt()){return/firefox\//i.test(n)}function Vv(n=Bt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function bv(n=Bt()){return/crios\//i.test(n)}function Ov(n=Bt()){return/iemobile/i.test(n)}function Lv(n=Bt()){return/android/i.test(n)}function Mv(n=Bt()){return/blackberry/i.test(n)}function Fv(n=Bt()){return/webos/i.test(n)}function Ff(n=Bt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function DS(n=Bt()){var e;return Ff(n)&&!!((e=window.navigator)!=null&&e.standalone)}function VS(){return WI()&&document.documentMode===10}function Uv(n=Bt()){return Ff(n)||Lv(n)||Fv(n)||Mv(n)||/windows phone/i.test(n)||Ov(n)}/**
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
 */function jv(n,e=[]){let t;switch(n){case"Browser":t=vy(Bt());break;case"Worker":t=`${vy(Bt())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Wo}/${i}`}/**
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
 */class bS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=l=>new Promise((c,f)=>{try{const p=e(l);c(p)}catch(p){f(p)}});i.onAbort=t,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function OS(n,e={}){return Bn(n,"GET","/v2/passwordPolicy",pr(n,e))}/**
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
 */const LS=6;class MS{constructor(e){var i;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??LS,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((i=e.allowedNonAlphanumericCharacters)==null?void 0:i.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
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
 */class FS{constructor(e,t,i,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new wy(this),this.idTokenSubscription=new wy(this),this.beforeStateQueue=new bS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Tv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=br(t)),this._initializationPromise=this.queue(async()=>{var i,o,l;if(!this._deleted&&(this.persistenceManager=await Co.create(this,e),(i=this._resolvePersistenceManagerAvailable)==null||i.call(this),!this._deleted)){if((o=this._popupRedirectResolver)!=null&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)==null?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await dc(this,{idToken:e}),i=await Ln._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var l;if(On(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(f,f))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let i=t,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(l=this.redirectUser)==null?void 0:l._redirectEventId,f=i==null?void 0:i._redirectEventId,p=await this.tryRedirectSignIn(e);(!c||c===f)&&(p!=null&&p.user)&&(i=p.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(c){i=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return le(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await fc(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=yS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(On(this.app))return Promise.reject(Ci(this));const t=e?st(e):null;return t&&le(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&le(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return On(this.app)?Promise.reject(Ci(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return On(this.app)?Promise.reject(Ci(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(br(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await OS(this),t=new MS(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Rs("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await NS(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&br(e)||this._popupRedirectResolver;le(t,this,"argument-error"),this.redirectPersistenceManager=await Co.create(this,[br(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)==null?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let c=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(le(f,this,"internal-error"),f.then(()=>{c||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,i,o);return()=>{c=!0,p()}}else{const p=e.addObserver(t);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return le(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=jv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var o;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((o=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:o.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var t;if(On(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&mS(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Fi(n){return st(n)}class wy{constructor(e){this.auth=e,this.observer=null,this.addObserver=XI(t=>this.observer=t)}get next(){return le(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let El={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function US(n){El=n}function Uf(n){return El.loadJS(n)}function jS(){return El.recaptchaV2Script}function zS(){return El.recaptchaEnterpriseScript}function BS(){return El.gapiScript}function zv(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */const $S=500,qS=6e4,Wu=1e12;class WS{constructor(e){this.auth=e,this.counter=Wu,this._widgets=new Map}render(e,t){const i=this.counter;return this._widgets.set(i,new GS(e,this.auth.name,t||{})),this.counter++,i}reset(e){var i;const t=e||Wu;(i=this._widgets.get(t))==null||i.delete(),this._widgets.delete(t)}getResponse(e){var i;const t=e||Wu;return((i=this._widgets.get(t))==null?void 0:i.getResponse())||""}async execute(e){var i;const t=e||Wu;return(i=this._widgets.get(t))==null||i.execute(),""}}class HS{constructor(){this.enterprise=new KS}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class KS{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class GS{constructor(e,t,i){this.params=i,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const o=typeof e=="string"?document.getElementById(e):e;le(o,"argument-error",{appName:t}),this.container=o,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=QS(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},qS)},$S))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function QS(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let i=0;i<n;i++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}const YS="recaptcha-enterprise",el="NO_RECAPTCHA";class Bv{constructor(e){this.type=YS,this.auth=Fi(e)}async verify(e="verify",t=!1){async function i(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(c,f)=>{kv(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const y=new Pv(p);return l.tenantId==null?l._agentRecaptchaConfig=y:l._tenantRecaptchaConfigs[l.tenantId]=y,c(y.siteKey)}}).catch(p=>{f(p)})})}function o(l,c,f){const p=window.grecaptcha;my(p)?p.enterprise.ready(()=>{p.enterprise.execute(l,{action:e}).then(y=>{c(y)}).catch(()=>{c(el)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new HS().execute("siteKey",{action:"verify"}):new Promise((l,c)=>{i(this.auth).then(f=>{if(!t&&my(window.grecaptcha))o(f,l,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let p=zS();p.length!==0&&(p+=f),Uf(p).then(()=>{o(f,l,c)}).catch(y=>{c(y)})}}).catch(f=>{c(f)})})}}async function Fd(n,e,t,i=!1,o=!1){const l=new Bv(n);let c;if(o)c=el;else try{c=await l.verify(t)}catch{c=await l.verify(t,!0)}const f={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in f){const p=f.phoneEnrollmentInfo.phoneNumber,y=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:y,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){const p=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return i?Object.assign(f,{captchaResp:c}):Object.assign(f,{captchaResponse:c}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function Ud(n,e,t,i,o){var l;if((l=n._getRecaptchaConfig())!=null&&l.isProviderEnabled("PHONE_PROVIDER")){const c=await Fd(n,e,t);return i(n,c).catch(async f=>{var p;if(((p=n._getRecaptchaConfig())==null?void 0:p.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(f.code==="auth/missing-recaptcha-token"||f.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${t} flow.`);const y=await Fd(n,e,t,!1,!0);return i(n,y)}return Promise.reject(f)})}else{const c=await Fd(n,e,t,!1,!0);return i(n,c)}}async function JS(n){const e=Fi(n),t=await kv(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),i=new Pv(t);e.tenantId==null?e._agentRecaptchaConfig=i:e._tenantRecaptchaConfigs[e.tenantId]=i,i.isAnyProviderEnabled()&&new Bv(e).verify()}/**
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
 */function XS(n,e){const t=Cs(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(xi(l,e??{}))return o;Lr(o,"already-initialized")}return t.initialize({options:e})}function ZS(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(br);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function eA(n,e,t){const i=Fi(n);le(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,l=$v(e),{host:c,port:f}=tA(e),p=f===null?"":`:${f}`,y={url:`${l}//${c}${p}/`},w=Object.freeze({host:c,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!i._canInitEmulator){le(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),le(xi(y,i.config.emulator)&&xi(w,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=y,i.emulatorConfig=w,i.settings.appVerificationDisabledForTesting=!0,$o(c)?(cv(`${l}//${c}${p}`),hv("Auth",!0)):nA()}function $v(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function tA(n){const e=$v(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const l=o[1];return{host:l,port:Ey(i.substr(l.length+1))}}else{const[l,c]=i.split(":");return{host:l,port:Ey(c)}}}function Ey(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function nA(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class jf{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Vr("not implemented")}_getIdTokenResponse(e){return Vr("not implemented")}_linkToIdToken(e,t){return Vr("not implemented")}_getReauthenticationResolver(e){return Vr("not implemented")}}/**
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
 */async function Po(n,e){return Mc(n,"POST","/v1/accounts:signInWithIdp",pr(n,e))}/**
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
 */const rA="http://localhost";class ws extends jf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ws(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Lr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o,...l}=t;if(!i||!o)return null;const c=new ws(i,o);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return Po(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Po(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Po(e,t)}buildRequest(){const e={requestUri:rA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=qo(t)}return e}}/**
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
 */async function Ty(n,e){return Bn(n,"POST","/v1/accounts:sendVerificationCode",pr(n,e))}async function iA(n,e){return Mc(n,"POST","/v1/accounts:signInWithPhoneNumber",pr(n,e))}async function sA(n,e){const t=await Mc(n,"POST","/v1/accounts:signInWithPhoneNumber",pr(n,e));if(t.temporaryProof)throw Ka(n,"account-exists-with-different-credential",t);return t}const oA={USER_NOT_FOUND:"user-not-found"};async function aA(n,e){const t={...e,operation:"REAUTH"};return Mc(n,"POST","/v1/accounts:signInWithPhoneNumber",pr(n,t),oA)}/**
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
 */class tl extends jf{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new tl({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new tl({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return iA(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return sA(e,{idToken:t,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return aA(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:i,verificationCode:o}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:i,code:o}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:i,phoneNumber:o,temporaryProof:l}=e;return!i&&!t&&!o&&!l?null:new tl({verificationId:t,verificationCode:i,phoneNumber:o,temporaryProof:l})}}/**
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
 */class qv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Tl extends qv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class _i extends Tl{constructor(){super("facebook.com")}static credential(e){return ws._fromParams({providerId:_i.PROVIDER_ID,signInMethod:_i.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _i.credentialFromTaggedObject(e)}static credentialFromError(e){return _i.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _i.credential(e.oauthAccessToken)}catch{return null}}}_i.FACEBOOK_SIGN_IN_METHOD="facebook.com";_i.PROVIDER_ID="facebook.com";/**
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
 */class vi extends Tl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ws._fromParams({providerId:vi.PROVIDER_ID,signInMethod:vi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return vi.credentialFromTaggedObject(e)}static credentialFromError(e){return vi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return vi.credential(t,i)}catch{return null}}}vi.GOOGLE_SIGN_IN_METHOD="google.com";vi.PROVIDER_ID="google.com";/**
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
 */class wi extends Tl{constructor(){super("github.com")}static credential(e){return ws._fromParams({providerId:wi.PROVIDER_ID,signInMethod:wi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wi.credentialFromTaggedObject(e)}static credentialFromError(e){return wi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wi.credential(e.oauthAccessToken)}catch{return null}}}wi.GITHUB_SIGN_IN_METHOD="github.com";wi.PROVIDER_ID="github.com";/**
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
 */class Ei extends Tl{constructor(){super("twitter.com")}static credential(e,t){return ws._fromParams({providerId:Ei.PROVIDER_ID,signInMethod:Ei.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ei.credentialFromTaggedObject(e)}static credentialFromError(e){return Ei.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Ei.credential(t,i)}catch{return null}}}Ei.TWITTER_SIGN_IN_METHOD="twitter.com";Ei.PROVIDER_ID="twitter.com";/**
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
 */class bo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,o=!1){const l=await Ln._fromIdTokenResponse(e,i,o),c=Iy(i);return new bo({user:l,providerId:c,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const o=Iy(i);return new bo({user:e,providerId:o,_tokenResponse:i,operationType:t})}}function Iy(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class pc extends zn{constructor(e,t,i,o){super(t.code,t.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,pc.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,o){return new pc(e,t,i,o)}}function Wv(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?pc._fromErrorAndOperation(n,l,e,i):l})}async function lA(n,e,t=!1){const i=await cl(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return bo._forOperation(n,"link",i)}/**
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
 */async function uA(n,e,t=!1){const{auth:i}=n;if(On(i.app))return Promise.reject(Ci(i));const o="reauthenticate";try{const l=await cl(n,Wv(i,o,e,n),t);le(l.idToken,i,"internal-error");const c=Mf(l.idToken);le(c,i,"internal-error");const{sub:f}=c;return le(n.uid===f,i,"user-mismatch"),bo._forOperation(n,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&Lr(i,"user-mismatch"),l}}/**
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
 */async function Hv(n,e,t=!1){if(On(n.app))return Promise.reject(Ci(n));const i="signIn",o=await Wv(n,i,e),l=await bo._fromIdTokenResponse(n,i,o);return t||await n._updateCurrentUser(l.user),l}async function cA(n,e){return Hv(Fi(n),e)}function hA(n,e,t,i){return st(n).onIdTokenChanged(e,t,i)}function dA(n,e,t){return st(n).beforeAuthStateChanged(e,t)}function fA(n,e,t,i){return st(n).onAuthStateChanged(e,t,i)}function pA(n){return st(n).signOut()}/**
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
 */function Sy(n,e){return Bn(n,"POST","/v2/accounts/mfaEnrollment:start",pr(n,e))}const mc="__sak";/**
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
 */class Kv{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(mc,"1"),this.storage.removeItem(mc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const mA=1e3,gA=10;class Gv extends Kv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Uv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),o=this.localCache[t];i!==o&&e(t,o,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,f,p)=>{this.notifyListeners(c,p)});return}const i=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const c=this.storage.getItem(i);!t&&this.localCache[i]===c||this.notifyListeners(i,c)},l=this.storage.getItem(i);VS()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,gA):o()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},mA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Gv.type="LOCAL";const yA=Gv;/**
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
 */class Qv extends Kv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Qv.type="SESSION";const Yv=Qv;/**
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
 */function _A(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Fc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const i=new Fc(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:o,data:l}=t.data,c=this.handlersMap[o];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const f=Array.from(c).map(async y=>y(t.origin,l)),p=await _A(f);t.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Fc.receivers=[];/**
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
 */function zf(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class vA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,c;return new Promise((f,p)=>{const y=zf("",20);o.port1.start();const w=setTimeout(()=>{p(new Error("unsupported_event"))},i);c={messageChannel:o,onMessage(E){const I=E;if(I.data.eventId===y)switch(I.data.status){case"ack":clearTimeout(w),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(I.data.response);break;default:clearTimeout(w),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(c),o.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:y,data:t},[o.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
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
 */function pt(){return window}function wA(n){pt().location.href=n}/**
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
 */function Bf(){return typeof pt().WorkerGlobalScope<"u"&&typeof pt().importScripts=="function"}async function EA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function TA(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function IA(){return Bf()?self:null}/**
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
 */const Jv="firebaseLocalStorageDb",SA=1,gc="firebaseLocalStorage",Xv="fbase_key";class Il{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Uc(n,e){return n.transaction([gc],e?"readwrite":"readonly").objectStore(gc)}function AA(){const n=indexedDB.deleteDatabase(Jv);return new Il(n).toPromise()}function uf(){const n=indexedDB.open(Jv,SA);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(gc,{keyPath:Xv})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(gc)?e(i):(i.close(),await AA(),e(await uf()))})})}async function Ay(n,e,t){const i=Uc(n,!0).put({[Xv]:e,value:t});return new Il(i).toPromise()}async function RA(n,e){const t=Uc(n,!1).get(e),i=await new Il(t).toPromise();return i===void 0?null:i.value}function Ry(n,e){const t=Uc(n,!0).delete(e);return new Il(t).toPromise()}const CA=800,PA=3;class Zv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await uf(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>PA)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Bf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Fc._getInstance(IA()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,i;if(this.activeServiceWorker=await EA(),!this.activeServiceWorker)return;this.sender=new vA(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(i=e[0])!=null&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||TA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await uf();return await Ay(e,mc,"1"),await Ry(e,mc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Ay(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>RA(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ry(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=Uc(o,!1).getAll();return new Il(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),CA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Zv.type="LOCAL";const kA=Zv;/**
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
 */function Cy(n,e){return Bn(n,"POST","/v2/accounts/mfaSignIn:start",pr(n,e))}/**
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
 */const jd=zv("rcb"),xA=new wl(3e4,6e4);class NA{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!((e=pt().grecaptcha)!=null&&e.render)}load(e,t=""){return le(DA(t),e,"argument-error"),this.shouldResolveImmediately(t)&&py(pt().grecaptcha)?Promise.resolve(pt().grecaptcha):new Promise((i,o)=>{const l=pt().setTimeout(()=>{o(dn(e,"network-request-failed"))},xA.get());pt()[jd]=()=>{pt().clearTimeout(l),delete pt()[jd];const f=pt().grecaptcha;if(!f||!py(f)){o(dn(e,"internal-error"));return}const p=f.render;f.render=(y,w)=>{const E=p(y,w);return this.counter++,E},this.hostLanguage=t,i(f)};const c=`${jS()}?${qo({onload:jd,render:"explicit",hl:t})}`;Uf(c).catch(()=>{clearTimeout(l),o(dn(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!((t=pt().grecaptcha)!=null&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function DA(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class VA{async load(e){return new WS(e)}clearedOneInstance(){}}/**
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
 */const nl="recaptcha",bA={theme:"light",type:"image"};class OA{constructor(e,t,i={...bA}){this.parameters=i,this.type=nl,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Fi(e),this.isInvisible=this.parameters.size==="invisible",le(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const o=typeof t=="string"?document.getElementById(t):t;le(o,this.auth,"argument-error"),this.container=o,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new VA:new NA,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),i=t.getResponse(e);return i||new Promise(o=>{const l=c=>{c&&(this.tokenChangeListeners.delete(l),o(c))};this.tokenChangeListeners.add(l),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){le(!this.parameters.sitekey,this.auth,"argument-error"),le(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),le(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(i=>i(t)),typeof e=="function")e(t);else if(typeof e=="string"){const i=pt()[e];typeof i=="function"&&i(t)}}}assertNotDestroyed(){le(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){le(Sv()&&!Bf(),this.auth,"internal-error"),await LA(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await IS(this.auth);le(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return le(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function LA(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
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
 */class MA{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=tl._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function FA(n,e,t){if(On(n.app))return Promise.reject(Ci(n));const i=Fi(n),o=await UA(i,e,st(t));return new MA(o,l=>cA(i,l))}async function UA(n,e,t){var i;if(!n._getRecaptchaConfig())try{await JS(n)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let o;if(typeof e=="string"?o={phoneNumber:e}:o=e,"session"in o){const l=o.session;if("phoneNumber"in o){le(l.type==="enroll",n,"internal-error");const c={idToken:l.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await Ud(n,c,"mfaSmsEnrollment",async(w,E)=>{if(E.phoneEnrollmentInfo.captchaResponse===el){le((t==null?void 0:t.type)===nl,w,"argument-error");const I=await zd(w,E,t);return Sy(w,I)}return Sy(w,E)},"PHONE_PROVIDER").catch(w=>Promise.reject(w))).phoneSessionInfo.sessionInfo}else{le(l.type==="signin",n,"internal-error");const c=((i=o.multiFactorHint)==null?void 0:i.uid)||o.multiFactorUid;le(c,n,"missing-multi-factor-info");const f={mfaPendingCredential:l.credential,mfaEnrollmentId:c,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await Ud(n,f,"mfaSmsSignIn",async(E,I)=>{if(I.phoneSignInInfo.captchaResponse===el){le((t==null?void 0:t.type)===nl,E,"argument-error");const U=await zd(E,I,t);return Cy(E,U)}return Cy(E,I)},"PHONE_PROVIDER").catch(E=>Promise.reject(E))).phoneResponseInfo.sessionInfo}}else{const l={phoneNumber:o.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await Ud(n,l,"sendVerificationCode",async(y,w)=>{if(w.captchaResponse===el){le((t==null?void 0:t.type)===nl,y,"argument-error");const E=await zd(y,w,t);return Ty(y,E)}return Ty(y,w)},"PHONE_PROVIDER").catch(y=>Promise.reject(y))).sessionInfo}}finally{t==null||t._reset()}}async function zd(n,e,t){le(t.type===nl,n,"argument-error");const i=await t.verify();le(typeof i=="string",n,"argument-error");const o={...e};if("phoneEnrollmentInfo"in o){const l=o.phoneEnrollmentInfo.phoneNumber,c=o.phoneEnrollmentInfo.captchaResponse,f=o.phoneEnrollmentInfo.clientType,p=o.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(o,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:i,captchaResponse:c,clientType:f,recaptchaVersion:p}}),o}else if("phoneSignInInfo"in o){const l=o.phoneSignInInfo.captchaResponse,c=o.phoneSignInInfo.clientType,f=o.phoneSignInInfo.recaptchaVersion;return Object.assign(o,{phoneSignInInfo:{recaptchaToken:i,captchaResponse:l,clientType:c,recaptchaVersion:f}}),o}else return Object.assign(o,{recaptchaToken:i}),o}/**
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
 */function jA(n,e){return e?br(e):(le(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class $f extends jf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Po(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Po(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Po(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function zA(n){return Hv(n.auth,new $f(n),n.bypassAuthState)}function BA(n){const{auth:e,user:t}=n;return le(t,e,"internal-error"),uA(t,new $f(n),n.bypassAuthState)}async function $A(n){const{auth:e,user:t}=n;return le(t,e,"internal-error"),lA(t,new $f(n),n.bypassAuthState)}/**
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
 */class ew{constructor(e,t,i,o,l=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:o,tenantId:l,error:c,type:f}=e;if(c){this.reject(c);return}const p={auth:this.auth,requestUri:t,sessionId:i,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(p))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return zA;case"linkViaPopup":case"linkViaRedirect":return $A;case"reauthViaPopup":case"reauthViaRedirect":return BA;default:Lr(this.auth,"internal-error")}}resolve(e){Mr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Mr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const qA=new wl(2e3,1e4);class Ao extends ew{constructor(e,t,i,o,l){super(e,t,o,l),this.provider=i,this.authWindow=null,this.pollId=null,Ao.currentPopupAction&&Ao.currentPopupAction.cancel(),Ao.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return le(e,this.auth,"internal-error"),e}async onExecution(){Mr(this.filter.length===1,"Popup operations only handle one event");const e=zf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(dn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(dn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ao.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if((i=(t=this.authWindow)==null?void 0:t.window)!=null&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(dn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,qA.get())};e()}}Ao.currentPopupAction=null;/**
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
 */const WA="pendingRedirect",Zu=new Map;class HA extends ew{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Zu.get(this.auth._key());if(!e){try{const i=await KA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Zu.set(this.auth._key(),e)}return this.bypassAuthState||Zu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function KA(n,e){const t=YA(e),i=QA(n);if(!await i._isAvailable())return!1;const o=await i._get(t)==="true";return await i._remove(t),o}function GA(n,e){Zu.set(n._key(),e)}function QA(n){return br(n._redirectPersistence)}function YA(n){return Xu(WA,n.config.apiKey,n.name)}async function JA(n,e,t=!1){if(On(n.app))return Promise.reject(Ci(n));const i=Fi(n),o=jA(i,e),c=await new HA(i,o,t).execute();return c&&!t&&(delete c.user._redirectEventId,await i._persistUserIfCurrent(c.user),await i._setRedirectUser(null,e)),c}/**
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
 */const XA=600*1e3;class ZA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!eR(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!tw(e)){const o=((i=e.error.code)==null?void 0:i.split("auth/")[1])||"internal-error";t.onError(dn(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=XA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Py(e))}saveEventToCache(e){this.cachedEventUids.add(Py(e)),this.lastProcessedEventTime=Date.now()}}function Py(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function tw({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function eR(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return tw(n);default:return!1}}/**
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
 */async function tR(n,e={}){return Bn(n,"GET","/v1/projects",e)}/**
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
 */const nR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,rR=/^https?/;async function iR(n){if(n.config.emulator)return;const{authorizedDomains:e}=await tR(n);for(const t of e)try{if(sR(t))return}catch{}Lr(n,"unauthorized-domain")}function sR(n){const e=af(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===i}if(!rR.test(t))return!1;if(nR.test(n))return i===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
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
 */const oR=new wl(3e4,6e4);function ky(){const n=pt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function aR(n){return new Promise((e,t)=>{var o,l,c;function i(){ky(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ky(),t(dn(n,"network-request-failed"))},timeout:oR.get()})}if((l=(o=pt().gapi)==null?void 0:o.iframes)!=null&&l.Iframe)e(gapi.iframes.getContext());else if((c=pt().gapi)!=null&&c.load)i();else{const f=zv("iframefcb");return pt()[f]=()=>{gapi.load?i():t(dn(n,"network-request-failed"))},Uf(`${BS()}?onload=${f}`).catch(p=>t(p))}}).catch(e=>{throw ec=null,e})}let ec=null;function lR(n){return ec=ec||aR(n),ec}/**
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
 */const uR=new wl(5e3,15e3),cR="__/auth/iframe",hR="emulator/auth/iframe",dR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},fR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function pR(n){const e=n.config;le(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Lf(e,hR):`https://${n.config.authDomain}/${cR}`,i={apiKey:e.apiKey,appName:n.name,v:Wo},o=fR.get(n.config.apiHost);o&&(i.eid=o);const l=n._getFrameworks();return l.length&&(i.fw=l.join(",")),`${t}?${qo(i).slice(1)}`}async function mR(n){const e=await lR(n),t=pt().gapi;return le(t,n,"internal-error"),e.open({where:document.body,url:pR(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:dR,dontclear:!0},i=>new Promise(async(o,l)=>{await i.restyle({setHideOnLeave:!1});const c=dn(n,"network-request-failed"),f=pt().setTimeout(()=>{l(c)},uR.get());function p(){pt().clearTimeout(f),o(i)}i.ping(p).then(p,()=>{l(c)})}))}/**
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
 */const gR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},yR=500,_R=600,vR="_blank",wR="http://localhost";class xy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ER(n,e,t,i=yR,o=_R){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),c=Math.max((window.screen.availWidth-i)/2,0).toString();let f="";const p={...gR,width:i.toString(),height:o.toString(),top:l,left:c},y=Bt().toLowerCase();t&&(f=bv(y)?vR:t),Dv(y)&&(e=e||wR,p.scrollbars="yes");const w=Object.entries(p).reduce((I,[U,$])=>`${I}${U}=${$},`,"");if(DS(y)&&f!=="_self")return TR(e||"",f),new xy(null);const E=window.open(e||"",f,w);le(E,n,"popup-blocked");try{E.focus()}catch{}return new xy(E)}function TR(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const IR="__/auth/handler",SR="emulator/auth/handler",AR=encodeURIComponent("fac");async function Ny(n,e,t,i,o,l){le(n.config.authDomain,n,"auth-domain-config-required"),le(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Wo,eventId:o};if(e instanceof qv){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",JI(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,E]of Object.entries({}))c[w]=E}if(e instanceof Tl){const w=e.getScopes().filter(E=>E!=="");w.length>0&&(c.scopes=w.join(","))}n.tenantId&&(c.tid=n.tenantId);const f=c;for(const w of Object.keys(f))f[w]===void 0&&delete f[w];const p=await n._getAppCheckToken(),y=p?`#${AR}=${encodeURIComponent(p)}`:"";return`${RR(n)}?${qo(f).slice(1)}${y}`}function RR({config:n}){return n.emulator?Lf(n,SR):`https://${n.authDomain}/${IR}`}/**
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
 */const Bd="webStorageSupport";class CR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Yv,this._completeRedirectFn=JA,this._overrideRedirectResult=GA}async _openPopup(e,t,i,o){var c;Mr((c=this.eventManagers[e._key()])==null?void 0:c.manager,"_initialize() not called before _openPopup()");const l=await Ny(e,t,i,af(),o);return ER(e,l,zf())}async _openRedirect(e,t,i,o){await this._originValidation(e);const l=await Ny(e,t,i,af(),o);return wA(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(Mr(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await mR(e),i=new ZA(e);return t.register("authEvent",o=>(le(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Bd,{type:Bd},o=>{var c;const l=(c=o==null?void 0:o[0])==null?void 0:c[Bd];l!==void 0&&t(!!l),Lr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=iR(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Uv()||Vv()||Ff()}}const PR=CR;var Dy="@firebase/auth",Vy="1.12.0";/**
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
 */class kR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){le(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function xR(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function NR(n){dr(new Un("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:f}=i.options;le(c&&!c.includes(":"),"invalid-api-key",{appName:i.name});const p={apiKey:c,authDomain:f,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:jv(n)},y=new FS(i,o,l,p);return ZS(y,t),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),dr(new Un("auth-internal",e=>{const t=Fi(e.getProvider("auth").getImmediate());return(i=>new kR(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Sn(Dy,Vy,xR(n)),Sn(Dy,Vy,"esm2020")}/**
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
 */const DR=300,VR=uv("authIdTokenMaxAge")||DR;let by=null;const bR=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>VR)return;const o=t==null?void 0:t.token;by!==o&&(by=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function OR(n=bf()){const e=Cs(n,"auth");if(e.isInitialized())return e.getImmediate();const t=XS(n,{popupRedirectResolver:PR,persistence:[kA,yA,Yv]}),i=uv("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const c=bR(l.toString());dA(t,c,()=>c(t.currentUser)),hA(t,f=>c(f))}}const o=av("auth");return o&&eA(t,`http://${o}`),t}function LR(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}US({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=o=>{const l=dn("internal-error");l.customData=o,t(l)},i.type="text/javascript",i.charset="UTF-8",LR().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});NR("Browser");var Oy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Pi,nw;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(k,A){function C(){}C.prototype=A.prototype,k.F=A.prototype,k.prototype=new C,k.prototype.constructor=k,k.D=function(D,x,O){for(var R=Array(arguments.length-2),qe=2;qe<arguments.length;qe++)R[qe-2]=arguments[qe];return A.prototype[x].apply(D,R)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(i,t),i.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(k,A,C){C||(C=0);const D=Array(16);if(typeof A=="string")for(var x=0;x<16;++x)D[x]=A.charCodeAt(C++)|A.charCodeAt(C++)<<8|A.charCodeAt(C++)<<16|A.charCodeAt(C++)<<24;else for(x=0;x<16;++x)D[x]=A[C++]|A[C++]<<8|A[C++]<<16|A[C++]<<24;A=k.g[0],C=k.g[1],x=k.g[2];let O=k.g[3],R;R=A+(O^C&(x^O))+D[0]+3614090360&4294967295,A=C+(R<<7&4294967295|R>>>25),R=O+(x^A&(C^x))+D[1]+3905402710&4294967295,O=A+(R<<12&4294967295|R>>>20),R=x+(C^O&(A^C))+D[2]+606105819&4294967295,x=O+(R<<17&4294967295|R>>>15),R=C+(A^x&(O^A))+D[3]+3250441966&4294967295,C=x+(R<<22&4294967295|R>>>10),R=A+(O^C&(x^O))+D[4]+4118548399&4294967295,A=C+(R<<7&4294967295|R>>>25),R=O+(x^A&(C^x))+D[5]+1200080426&4294967295,O=A+(R<<12&4294967295|R>>>20),R=x+(C^O&(A^C))+D[6]+2821735955&4294967295,x=O+(R<<17&4294967295|R>>>15),R=C+(A^x&(O^A))+D[7]+4249261313&4294967295,C=x+(R<<22&4294967295|R>>>10),R=A+(O^C&(x^O))+D[8]+1770035416&4294967295,A=C+(R<<7&4294967295|R>>>25),R=O+(x^A&(C^x))+D[9]+2336552879&4294967295,O=A+(R<<12&4294967295|R>>>20),R=x+(C^O&(A^C))+D[10]+4294925233&4294967295,x=O+(R<<17&4294967295|R>>>15),R=C+(A^x&(O^A))+D[11]+2304563134&4294967295,C=x+(R<<22&4294967295|R>>>10),R=A+(O^C&(x^O))+D[12]+1804603682&4294967295,A=C+(R<<7&4294967295|R>>>25),R=O+(x^A&(C^x))+D[13]+4254626195&4294967295,O=A+(R<<12&4294967295|R>>>20),R=x+(C^O&(A^C))+D[14]+2792965006&4294967295,x=O+(R<<17&4294967295|R>>>15),R=C+(A^x&(O^A))+D[15]+1236535329&4294967295,C=x+(R<<22&4294967295|R>>>10),R=A+(x^O&(C^x))+D[1]+4129170786&4294967295,A=C+(R<<5&4294967295|R>>>27),R=O+(C^x&(A^C))+D[6]+3225465664&4294967295,O=A+(R<<9&4294967295|R>>>23),R=x+(A^C&(O^A))+D[11]+643717713&4294967295,x=O+(R<<14&4294967295|R>>>18),R=C+(O^A&(x^O))+D[0]+3921069994&4294967295,C=x+(R<<20&4294967295|R>>>12),R=A+(x^O&(C^x))+D[5]+3593408605&4294967295,A=C+(R<<5&4294967295|R>>>27),R=O+(C^x&(A^C))+D[10]+38016083&4294967295,O=A+(R<<9&4294967295|R>>>23),R=x+(A^C&(O^A))+D[15]+3634488961&4294967295,x=O+(R<<14&4294967295|R>>>18),R=C+(O^A&(x^O))+D[4]+3889429448&4294967295,C=x+(R<<20&4294967295|R>>>12),R=A+(x^O&(C^x))+D[9]+568446438&4294967295,A=C+(R<<5&4294967295|R>>>27),R=O+(C^x&(A^C))+D[14]+3275163606&4294967295,O=A+(R<<9&4294967295|R>>>23),R=x+(A^C&(O^A))+D[3]+4107603335&4294967295,x=O+(R<<14&4294967295|R>>>18),R=C+(O^A&(x^O))+D[8]+1163531501&4294967295,C=x+(R<<20&4294967295|R>>>12),R=A+(x^O&(C^x))+D[13]+2850285829&4294967295,A=C+(R<<5&4294967295|R>>>27),R=O+(C^x&(A^C))+D[2]+4243563512&4294967295,O=A+(R<<9&4294967295|R>>>23),R=x+(A^C&(O^A))+D[7]+1735328473&4294967295,x=O+(R<<14&4294967295|R>>>18),R=C+(O^A&(x^O))+D[12]+2368359562&4294967295,C=x+(R<<20&4294967295|R>>>12),R=A+(C^x^O)+D[5]+4294588738&4294967295,A=C+(R<<4&4294967295|R>>>28),R=O+(A^C^x)+D[8]+2272392833&4294967295,O=A+(R<<11&4294967295|R>>>21),R=x+(O^A^C)+D[11]+1839030562&4294967295,x=O+(R<<16&4294967295|R>>>16),R=C+(x^O^A)+D[14]+4259657740&4294967295,C=x+(R<<23&4294967295|R>>>9),R=A+(C^x^O)+D[1]+2763975236&4294967295,A=C+(R<<4&4294967295|R>>>28),R=O+(A^C^x)+D[4]+1272893353&4294967295,O=A+(R<<11&4294967295|R>>>21),R=x+(O^A^C)+D[7]+4139469664&4294967295,x=O+(R<<16&4294967295|R>>>16),R=C+(x^O^A)+D[10]+3200236656&4294967295,C=x+(R<<23&4294967295|R>>>9),R=A+(C^x^O)+D[13]+681279174&4294967295,A=C+(R<<4&4294967295|R>>>28),R=O+(A^C^x)+D[0]+3936430074&4294967295,O=A+(R<<11&4294967295|R>>>21),R=x+(O^A^C)+D[3]+3572445317&4294967295,x=O+(R<<16&4294967295|R>>>16),R=C+(x^O^A)+D[6]+76029189&4294967295,C=x+(R<<23&4294967295|R>>>9),R=A+(C^x^O)+D[9]+3654602809&4294967295,A=C+(R<<4&4294967295|R>>>28),R=O+(A^C^x)+D[12]+3873151461&4294967295,O=A+(R<<11&4294967295|R>>>21),R=x+(O^A^C)+D[15]+530742520&4294967295,x=O+(R<<16&4294967295|R>>>16),R=C+(x^O^A)+D[2]+3299628645&4294967295,C=x+(R<<23&4294967295|R>>>9),R=A+(x^(C|~O))+D[0]+4096336452&4294967295,A=C+(R<<6&4294967295|R>>>26),R=O+(C^(A|~x))+D[7]+1126891415&4294967295,O=A+(R<<10&4294967295|R>>>22),R=x+(A^(O|~C))+D[14]+2878612391&4294967295,x=O+(R<<15&4294967295|R>>>17),R=C+(O^(x|~A))+D[5]+4237533241&4294967295,C=x+(R<<21&4294967295|R>>>11),R=A+(x^(C|~O))+D[12]+1700485571&4294967295,A=C+(R<<6&4294967295|R>>>26),R=O+(C^(A|~x))+D[3]+2399980690&4294967295,O=A+(R<<10&4294967295|R>>>22),R=x+(A^(O|~C))+D[10]+4293915773&4294967295,x=O+(R<<15&4294967295|R>>>17),R=C+(O^(x|~A))+D[1]+2240044497&4294967295,C=x+(R<<21&4294967295|R>>>11),R=A+(x^(C|~O))+D[8]+1873313359&4294967295,A=C+(R<<6&4294967295|R>>>26),R=O+(C^(A|~x))+D[15]+4264355552&4294967295,O=A+(R<<10&4294967295|R>>>22),R=x+(A^(O|~C))+D[6]+2734768916&4294967295,x=O+(R<<15&4294967295|R>>>17),R=C+(O^(x|~A))+D[13]+1309151649&4294967295,C=x+(R<<21&4294967295|R>>>11),R=A+(x^(C|~O))+D[4]+4149444226&4294967295,A=C+(R<<6&4294967295|R>>>26),R=O+(C^(A|~x))+D[11]+3174756917&4294967295,O=A+(R<<10&4294967295|R>>>22),R=x+(A^(O|~C))+D[2]+718787259&4294967295,x=O+(R<<15&4294967295|R>>>17),R=C+(O^(x|~A))+D[9]+3951481745&4294967295,k.g[0]=k.g[0]+A&4294967295,k.g[1]=k.g[1]+(x+(R<<21&4294967295|R>>>11))&4294967295,k.g[2]=k.g[2]+x&4294967295,k.g[3]=k.g[3]+O&4294967295}i.prototype.v=function(k,A){A===void 0&&(A=k.length);const C=A-this.blockSize,D=this.C;let x=this.h,O=0;for(;O<A;){if(x==0)for(;O<=C;)o(this,k,O),O+=this.blockSize;if(typeof k=="string"){for(;O<A;)if(D[x++]=k.charCodeAt(O++),x==this.blockSize){o(this,D),x=0;break}}else for(;O<A;)if(D[x++]=k[O++],x==this.blockSize){o(this,D),x=0;break}}this.h=x,this.o+=A},i.prototype.A=function(){var k=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);k[0]=128;for(var A=1;A<k.length-8;++A)k[A]=0;A=this.o*8;for(var C=k.length-8;C<k.length;++C)k[C]=A&255,A/=256;for(this.v(k),k=Array(16),A=0,C=0;C<4;++C)for(let D=0;D<32;D+=8)k[A++]=this.g[C]>>>D&255;return k};function l(k,A){var C=f;return Object.prototype.hasOwnProperty.call(C,k)?C[k]:C[k]=A(k)}function c(k,A){this.h=A;const C=[];let D=!0;for(let x=k.length-1;x>=0;x--){const O=k[x]|0;D&&O==A||(C[x]=O,D=!1)}this.g=C}var f={};function p(k){return-128<=k&&k<128?l(k,function(A){return new c([A|0],A<0?-1:0)}):new c([k|0],k<0?-1:0)}function y(k){if(isNaN(k)||!isFinite(k))return E;if(k<0)return V(y(-k));const A=[];let C=1;for(let D=0;k>=C;D++)A[D]=k/C|0,C*=4294967296;return new c(A,0)}function w(k,A){if(k.length==0)throw Error("number format error: empty string");if(A=A||10,A<2||36<A)throw Error("radix out of range: "+A);if(k.charAt(0)=="-")return V(w(k.substring(1),A));if(k.indexOf("-")>=0)throw Error('number format error: interior "-" character');const C=y(Math.pow(A,8));let D=E;for(let O=0;O<k.length;O+=8){var x=Math.min(8,k.length-O);const R=parseInt(k.substring(O,O+x),A);x<8?(x=y(Math.pow(A,x)),D=D.j(x).add(y(R))):(D=D.j(C),D=D.add(y(R)))}return D}var E=p(0),I=p(1),U=p(16777216);n=c.prototype,n.m=function(){if(q(this))return-V(this).m();let k=0,A=1;for(let C=0;C<this.g.length;C++){const D=this.i(C);k+=(D>=0?D:4294967296+D)*A,A*=4294967296}return k},n.toString=function(k){if(k=k||10,k<2||36<k)throw Error("radix out of range: "+k);if($(this))return"0";if(q(this))return"-"+V(this).toString(k);const A=y(Math.pow(k,6));var C=this;let D="";for(;;){const x=me(C,A).g;C=re(C,x.j(A));let O=((C.g.length>0?C.g[0]:C.h)>>>0).toString(k);if(C=x,$(C))return O+D;for(;O.length<6;)O="0"+O;D=O+D}},n.i=function(k){return k<0?0:k<this.g.length?this.g[k]:this.h};function $(k){if(k.h!=0)return!1;for(let A=0;A<k.g.length;A++)if(k.g[A]!=0)return!1;return!0}function q(k){return k.h==-1}n.l=function(k){return k=re(this,k),q(k)?-1:$(k)?0:1};function V(k){const A=k.g.length,C=[];for(let D=0;D<A;D++)C[D]=~k.g[D];return new c(C,~k.h).add(I)}n.abs=function(){return q(this)?V(this):this},n.add=function(k){const A=Math.max(this.g.length,k.g.length),C=[];let D=0;for(let x=0;x<=A;x++){let O=D+(this.i(x)&65535)+(k.i(x)&65535),R=(O>>>16)+(this.i(x)>>>16)+(k.i(x)>>>16);D=R>>>16,O&=65535,R&=65535,C[x]=R<<16|O}return new c(C,C[C.length-1]&-2147483648?-1:0)};function re(k,A){return k.add(V(A))}n.j=function(k){if($(this)||$(k))return E;if(q(this))return q(k)?V(this).j(V(k)):V(V(this).j(k));if(q(k))return V(this.j(V(k)));if(this.l(U)<0&&k.l(U)<0)return y(this.m()*k.m());const A=this.g.length+k.g.length,C=[];for(var D=0;D<2*A;D++)C[D]=0;for(D=0;D<this.g.length;D++)for(let x=0;x<k.g.length;x++){const O=this.i(D)>>>16,R=this.i(D)&65535,qe=k.i(x)>>>16,Et=k.i(x)&65535;C[2*D+2*x]+=R*Et,te(C,2*D+2*x),C[2*D+2*x+1]+=O*Et,te(C,2*D+2*x+1),C[2*D+2*x+1]+=R*qe,te(C,2*D+2*x+1),C[2*D+2*x+2]+=O*qe,te(C,2*D+2*x+2)}for(k=0;k<A;k++)C[k]=C[2*k+1]<<16|C[2*k];for(k=A;k<2*A;k++)C[k]=0;return new c(C,0)};function te(k,A){for(;(k[A]&65535)!=k[A];)k[A+1]+=k[A]>>>16,k[A]&=65535,A++}function ce(k,A){this.g=k,this.h=A}function me(k,A){if($(A))throw Error("division by zero");if($(k))return new ce(E,E);if(q(k))return A=me(V(k),A),new ce(V(A.g),V(A.h));if(q(A))return A=me(k,V(A)),new ce(V(A.g),A.h);if(k.g.length>30){if(q(k)||q(A))throw Error("slowDivide_ only works with positive integers.");for(var C=I,D=A;D.l(k)<=0;)C=Re(C),D=Re(D);var x=Ce(C,1),O=Ce(D,1);for(D=Ce(D,2),C=Ce(C,2);!$(D);){var R=O.add(D);R.l(k)<=0&&(x=x.add(C),O=R),D=Ce(D,1),C=Ce(C,1)}return A=re(k,x.j(A)),new ce(x,A)}for(x=E;k.l(A)>=0;){for(C=Math.max(1,Math.floor(k.m()/A.m())),D=Math.ceil(Math.log(C)/Math.LN2),D=D<=48?1:Math.pow(2,D-48),O=y(C),R=O.j(A);q(R)||R.l(k)>0;)C-=D,O=y(C),R=O.j(A);$(O)&&(O=I),x=x.add(O),k=re(k,R)}return new ce(x,k)}n.B=function(k){return me(this,k).h},n.and=function(k){const A=Math.max(this.g.length,k.g.length),C=[];for(let D=0;D<A;D++)C[D]=this.i(D)&k.i(D);return new c(C,this.h&k.h)},n.or=function(k){const A=Math.max(this.g.length,k.g.length),C=[];for(let D=0;D<A;D++)C[D]=this.i(D)|k.i(D);return new c(C,this.h|k.h)},n.xor=function(k){const A=Math.max(this.g.length,k.g.length),C=[];for(let D=0;D<A;D++)C[D]=this.i(D)^k.i(D);return new c(C,this.h^k.h)};function Re(k){const A=k.g.length+1,C=[];for(let D=0;D<A;D++)C[D]=k.i(D)<<1|k.i(D-1)>>>31;return new c(C,k.h)}function Ce(k,A){const C=A>>5;A%=32;const D=k.g.length-C,x=[];for(let O=0;O<D;O++)x[O]=A>0?k.i(O+C)>>>A|k.i(O+C+1)<<32-A:k.i(O+C);return new c(x,k.h)}i.prototype.digest=i.prototype.A,i.prototype.reset=i.prototype.u,i.prototype.update=i.prototype.v,nw=i,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.B,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=y,c.fromString=w,Pi=c}).apply(typeof Oy<"u"?Oy:typeof self<"u"?self:typeof window<"u"?window:{});var Hu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var rw,Ga,iw,tc,cf,sw,ow,aw;(function(){var n,e=Object.defineProperty;function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Hu=="object"&&Hu];for(var g=0;g<u.length;++g){var _=u[g];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var i=t(this);function o(u,g){if(g)e:{var _=i;u=u.split(".");for(var T=0;T<u.length-1;T++){var M=u[T];if(!(M in _))break e;_=_[M]}u=u[u.length-1],T=_[u],g=g(T),g!=T&&g!=null&&e(_,u,{configurable:!0,writable:!0,value:g})}}o("Symbol.dispose",function(u){return u||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(u){return u||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(u){return u||function(g){var _=[],T;for(T in g)Object.prototype.hasOwnProperty.call(g,T)&&_.push([T,g[T]]);return _}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},c=this||self;function f(u){var g=typeof u;return g=="object"&&u!=null||g=="function"}function p(u,g,_){return u.call.apply(u.bind,arguments)}function y(u,g,_){return y=p,y.apply(null,arguments)}function w(u,g){var _=Array.prototype.slice.call(arguments,1);return function(){var T=_.slice();return T.push.apply(T,arguments),u.apply(this,T)}}function E(u,g){function _(){}_.prototype=g.prototype,u.Z=g.prototype,u.prototype=new _,u.prototype.constructor=u,u.Ob=function(T,M,z){for(var Z=Array(arguments.length-2),Ee=2;Ee<arguments.length;Ee++)Z[Ee-2]=arguments[Ee];return g.prototype[M].apply(T,Z)}}var I=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?u=>u&&AsyncContext.Snapshot.wrap(u):u=>u;function U(u){const g=u.length;if(g>0){const _=Array(g);for(let T=0;T<g;T++)_[T]=u[T];return _}return[]}function $(u,g){for(let T=1;T<arguments.length;T++){const M=arguments[T];var _=typeof M;if(_=_!="object"?_:M?Array.isArray(M)?"array":_:"null",_=="array"||_=="object"&&typeof M.length=="number"){_=u.length||0;const z=M.length||0;u.length=_+z;for(let Z=0;Z<z;Z++)u[_+Z]=M[Z]}else u.push(M)}}class q{constructor(g,_){this.i=g,this.j=_,this.h=0,this.g=null}get(){let g;return this.h>0?(this.h--,g=this.g,this.g=g.next,g.next=null):g=this.i(),g}}function V(u){c.setTimeout(()=>{throw u},0)}function re(){var u=k;let g=null;return u.g&&(g=u.g,u.g=u.g.next,u.g||(u.h=null),g.next=null),g}class te{constructor(){this.h=this.g=null}add(g,_){const T=ce.get();T.set(g,_),this.h?this.h.next=T:this.g=T,this.h=T}}var ce=new q(()=>new me,u=>u.reset());class me{constructor(){this.next=this.g=this.h=null}set(g,_){this.h=g,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let Re,Ce=!1,k=new te,A=()=>{const u=Promise.resolve(void 0);Re=()=>{u.then(C)}};function C(){for(var u;u=re();){try{u.h.call(u.g)}catch(_){V(_)}var g=ce;g.j(u),g.h<100&&(g.h++,u.next=g.g,g.g=u)}Ce=!1}function D(){this.u=this.u,this.C=this.C}D.prototype.u=!1,D.prototype.dispose=function(){this.u||(this.u=!0,this.N())},D.prototype[Symbol.dispose]=function(){this.dispose()},D.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function x(u,g){this.type=u,this.g=this.target=g,this.defaultPrevented=!1}x.prototype.h=function(){this.defaultPrevented=!0};var O=(function(){if(!c.addEventListener||!Object.defineProperty)return!1;var u=!1,g=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const _=()=>{};c.addEventListener("test",_,g),c.removeEventListener("test",_,g)}catch{}return u})();function R(u){return/^[\s\xa0]*$/.test(u)}function qe(u,g){x.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u&&this.init(u,g)}E(qe,x),qe.prototype.init=function(u,g){const _=this.type=u.type,T=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;this.target=u.target||u.srcElement,this.g=g,g=u.relatedTarget,g||(_=="mouseover"?g=u.fromElement:_=="mouseout"&&(g=u.toElement)),this.relatedTarget=g,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=u.pointerType,this.state=u.state,this.i=u,u.defaultPrevented&&qe.Z.h.call(this)},qe.prototype.h=function(){qe.Z.h.call(this);const u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Et="closure_listenable_"+(Math.random()*1e6|0),Vt=0;function Je(u,g,_,T,M){this.listener=u,this.proxy=null,this.src=g,this.type=_,this.capture=!!T,this.ha=M,this.key=++Vt,this.da=this.fa=!1}function ee(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function pe(u,g,_){for(const T in u)g.call(_,u[T],T,u)}function oe(u,g){for(const _ in u)g.call(void 0,u[_],_,u)}function b(u){const g={};for(const _ in u)g[_]=u[_];return g}const K="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ie(u,g){let _,T;for(let M=1;M<arguments.length;M++){T=arguments[M];for(_ in T)u[_]=T[_];for(let z=0;z<K.length;z++)_=K[z],Object.prototype.hasOwnProperty.call(T,_)&&(u[_]=T[_])}}function Se(u){this.src=u,this.g={},this.h=0}Se.prototype.add=function(u,g,_,T,M){const z=u.toString();u=this.g[z],u||(u=this.g[z]=[],this.h++);const Z=ke(u,g,T,M);return Z>-1?(g=u[Z],_||(g.fa=!1)):(g=new Je(g,this.src,z,!!T,M),g.fa=_,u.push(g)),g};function Pe(u,g){const _=g.type;if(_ in u.g){var T=u.g[_],M=Array.prototype.indexOf.call(T,g,void 0),z;(z=M>=0)&&Array.prototype.splice.call(T,M,1),z&&(ee(g),u.g[_].length==0&&(delete u.g[_],u.h--))}}function ke(u,g,_,T){for(let M=0;M<u.length;++M){const z=u[M];if(!z.da&&z.listener==g&&z.capture==!!_&&z.ha==T)return M}return-1}var Ue="closure_lm_"+(Math.random()*1e6|0),Oe={};function Be(u,g,_,T,M){if(Array.isArray(g)){for(let z=0;z<g.length;z++)Be(u,g[z],_,T,M);return null}return _=Xo(_),u&&u[Et]?u.J(g,_,f(T)?!!T.capture:!1,M):$t(u,g,_,!1,T,M)}function $t(u,g,_,T,M,z){if(!g)throw Error("Invalid event type");const Z=f(M)?!!M.capture:!!M;let Ee=bs(u);if(Ee||(u[Ue]=Ee=new Se(u)),_=Ee.add(g,_,T,Z,z),_.proxy)return _;if(T=Ds(),_.proxy=T,T.src=u,T.listener=_,u.addEventListener)O||(M=Z),M===void 0&&(M=!1),u.addEventListener(g.toString(),T,M);else if(u.attachEvent)u.attachEvent(Vs(g.toString()),T);else if(u.addListener&&u.removeListener)u.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return _}function Ds(){function u(_){return g.call(u.src,u.listener,_)}const g=kl;return u}function Jo(u,g,_,T,M){if(Array.isArray(g))for(var z=0;z<g.length;z++)Jo(u,g[z],_,T,M);else T=f(T)?!!T.capture:!!T,_=Xo(_),u&&u[Et]?(u=u.i,z=String(g).toString(),z in u.g&&(g=u.g[z],_=ke(g,_,T,M),_>-1&&(ee(g[_]),Array.prototype.splice.call(g,_,1),g.length==0&&(delete u.g[z],u.h--)))):u&&(u=bs(u))&&(g=u.g[g.toString()],u=-1,g&&(u=ke(g,_,T,M)),(_=u>-1?g[u]:null)&&zr(_))}function zr(u){if(typeof u!="number"&&u&&!u.da){var g=u.src;if(g&&g[Et])Pe(g.i,u);else{var _=u.type,T=u.proxy;g.removeEventListener?g.removeEventListener(_,T,u.capture):g.detachEvent?g.detachEvent(Vs(_),T):g.addListener&&g.removeListener&&g.removeListener(T),(_=bs(g))?(Pe(_,u),_.h==0&&(_.src=null,g[Ue]=null)):ee(u)}}}function Vs(u){return u in Oe?Oe[u]:Oe[u]="on"+u}function kl(u,g){if(u.da)u=!0;else{g=new qe(g,this);const _=u.listener,T=u.ha||u.src;u.fa&&zr(u),u=_.call(T,g)}return u}function bs(u){return u=u[Ue],u instanceof Se?u:null}var ji="__closure_events_fn_"+(Math.random()*1e9>>>0);function Xo(u){return typeof u=="function"?u:(u[ji]||(u[ji]=function(g){return u.handleEvent(g)}),u[ji])}function ct(){D.call(this),this.i=new Se(this),this.M=this,this.G=null}E(ct,D),ct.prototype[Et]=!0,ct.prototype.removeEventListener=function(u,g,_,T){Jo(this,u,g,_,T)};function ot(u,g){var _,T=u.G;if(T)for(_=[];T;T=T.G)_.push(T);if(u=u.M,T=g.type||g,typeof g=="string")g=new x(g,u);else if(g instanceof x)g.target=g.target||u;else{var M=g;g=new x(T,u),Ie(g,M)}M=!0;let z,Z;if(_)for(Z=_.length-1;Z>=0;Z--)z=g.g=_[Z],M=An(z,T,!0,g)&&M;if(z=g.g=u,M=An(z,T,!0,g)&&M,M=An(z,T,!1,g)&&M,_)for(Z=0;Z<_.length;Z++)z=g.g=_[Z],M=An(z,T,!1,g)&&M}ct.prototype.N=function(){if(ct.Z.N.call(this),this.i){var u=this.i;for(const g in u.g){const _=u.g[g];for(let T=0;T<_.length;T++)ee(_[T]);delete u.g[g],u.h--}}this.G=null},ct.prototype.J=function(u,g,_,T){return this.i.add(String(u),g,!1,_,T)},ct.prototype.K=function(u,g,_,T){return this.i.add(String(u),g,!0,_,T)};function An(u,g,_,T){if(g=u.i.g[String(g)],!g)return!0;g=g.concat();let M=!0;for(let z=0;z<g.length;++z){const Z=g[z];if(Z&&!Z.da&&Z.capture==_){const Ee=Z.listener,at=Z.ha||Z.src;Z.fa&&Pe(u.i,Z),M=Ee.call(at,T)!==!1&&M}}return M&&!T.defaultPrevented}function Zo(u,g){if(typeof u!="function")if(u&&typeof u.handleEvent=="function")u=y(u.handleEvent,u);else throw Error("Invalid listener argument");return Number(g)>2147483647?-1:c.setTimeout(u,g||0)}function ea(u){u.g=Zo(()=>{u.g=null,u.i&&(u.i=!1,ea(u))},u.l);const g=u.h;u.h=null,u.m.apply(null,g)}class xl extends D{constructor(g,_){super(),this.m=g,this.l=_,this.h=null,this.i=!1,this.g=null}j(g){this.h=arguments,this.g?this.i=!0:ea(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Br(u){D.call(this),this.h=u,this.g={}}E(Br,D);var ta=[];function Os(u){pe(u.g,function(g,_){this.g.hasOwnProperty(_)&&zr(g)},u),u.g={}}Br.prototype.N=function(){Br.Z.N.call(this),Os(this)},Br.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var $r=c.JSON.stringify,Nl=c.JSON.parse,zi=class{stringify(u){return c.JSON.stringify(u,void 0)}parse(u){return c.JSON.parse(u,void 0)}};function qr(){}function Dl(){}var Wr={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Ls(){x.call(this,"d")}E(Ls,x);function na(){x.call(this,"c")}E(na,x);var Rn={},Ms=null;function Hr(){return Ms=Ms||new ct}Rn.Ia="serverreachability";function Fs(u){x.call(this,Rn.Ia,u)}E(Fs,x);function mr(u){const g=Hr();ot(g,new Fs(g))}Rn.STAT_EVENT="statevent";function gr(u,g){x.call(this,Rn.STAT_EVENT,u),this.stat=g}E(gr,x);function rt(u){const g=Hr();ot(g,new gr(g,u))}Rn.Ja="timingevent";function ra(u,g){x.call(this,Rn.Ja,u),this.size=g}E(ra,x);function Kr(u,g){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){u()},g)}function Gr(){this.g=!0}Gr.prototype.ua=function(){this.g=!1};function Vl(u,g,_,T,M,z){u.info(function(){if(u.g)if(z){var Z="",Ee=z.split("&");for(let ze=0;ze<Ee.length;ze++){var at=Ee[ze].split("=");if(at.length>1){const ht=at[0];at=at[1];const an=ht.split("_");Z=an.length>=2&&an[1]=="type"?Z+(ht+"="+at+"&"):Z+(ht+"=redacted&")}}}else Z=null;else Z=z;return"XMLHTTP REQ ("+T+") [attempt "+M+"]: "+g+`
`+_+`
`+Z})}function bl(u,g,_,T,M,z,Z){u.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+M+"]: "+g+`
`+_+`
`+z+" "+Z})}function $n(u,g,_,T){u.info(function(){return"XMLHTTP TEXT ("+g+"): "+Bi(u,_)+(T?" "+T:"")})}function Ol(u,g){u.info(function(){return"TIMEOUT: "+g})}Gr.prototype.info=function(){};function Bi(u,g){if(!u.g)return g;if(!g)return null;try{const z=JSON.parse(g);if(z){for(u=0;u<z.length;u++)if(Array.isArray(z[u])){var _=z[u];if(!(_.length<2)){var T=_[1];if(Array.isArray(T)&&!(T.length<1)){var M=T[0];if(M!="noop"&&M!="stop"&&M!="close")for(let Z=1;Z<T.length;Z++)T[Z]=""}}}}return $r(z)}catch{return g}}var Qr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Yr={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Ll;function yr(){}E(yr,qr),yr.prototype.g=function(){return new XMLHttpRequest},Ll=new yr;function qn(u){return encodeURIComponent(String(u))}function Us(u){var g=1;u=u.split(":");const _=[];for(;g>0&&u.length;)_.push(u.shift()),g--;return u.length&&_.push(u.join(":")),_}function pn(u,g,_,T){this.j=u,this.i=g,this.l=_,this.S=T||1,this.V=new Br(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Ml}function Ml(){this.i=null,this.g="",this.h=!1}var Fl={},ia={};function Cn(u,g,_){u.M=1,u.A=vr(mn(g)),u.u=_,u.R=!0,sa(u,null)}function sa(u,g){u.F=Date.now(),$i(u),u.B=mn(u.A);var _=u.B,T=u.S;Array.isArray(T)||(T=[String(T)]),ma(_.i,"t",T),u.C=0,_=u.j.L,u.h=new Ml,u.g=Gl(u.j,_?g:null,!u.u),u.P>0&&(u.O=new xl(y(u.Y,u,u.g),u.P)),g=u.V,_=u.g,T=u.ba;var M="readystatechange";Array.isArray(M)||(M&&(ta[0]=M.toString()),M=ta);for(let z=0;z<M.length;z++){const Z=Be(_,M[z],T||g.handleEvent,!1,g.h||g);if(!Z)break;g.g[Z.key]=Z}g=u.J?b(u.J):{},u.u?(u.v||(u.v="POST"),g["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.B,u.v,u.u,g)):(u.v="GET",u.g.ea(u.B,u.v,null,g)),mr(),Vl(u.i,u.v,u.B,u.l,u.S,u.u)}pn.prototype.ba=function(u){u=u.target;const g=this.O;g&&Jn(u)==3?g.j():this.Y(u)},pn.prototype.Y=function(u){try{if(u==this.g)e:{const Ee=Jn(this.g),at=this.g.ya(),ze=this.g.ca();if(!(Ee<3)&&(Ee!=3||this.g&&(this.h.h||this.g.la()||Hl(this.g)))){this.K||Ee!=4||at==7||(at==8||ze<=0?mr(3):mr(2)),js(this);var g=this.g.ca();this.X=g;var _=Ul(this);if(this.o=g==200,bl(this.i,this.v,this.B,this.l,this.S,Ee,g),this.o){if(this.U&&!this.L){t:{if(this.g){var T,M=this.g;if((T=M.g?M.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!R(T)){var z=T;break t}}z=null}if(u=z)$n(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ke(this,u);else{this.o=!1,this.m=3,rt(12),_r(this),qi(this);break e}}if(this.R){u=!0;let ht;for(;!this.K&&this.C<_.length;)if(ht=zl(this,_),ht==ia){Ee==4&&(this.m=4,rt(14),u=!1),$n(this.i,this.l,null,"[Incomplete Response]");break}else if(ht==Fl){this.m=4,rt(15),$n(this.i,this.l,_,"[Invalid Chunk]"),u=!1;break}else $n(this.i,this.l,ht,null),Ke(this,ht);if(jl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ee!=4||_.length!=0||this.h.h||(this.m=1,rt(16),u=!1),this.o=this.o&&u,!u)$n(this.i,this.l,_,"[Invalid Chunked Response]"),_r(this),qi(this);else if(_.length>0&&!this.W){this.W=!0;var Z=this.j;Z.g==this&&Z.aa&&!Z.P&&(Z.j.info("Great, no buffering proxy detected. Bytes received: "+_.length),Zi(Z),Z.P=!0,rt(11))}}else $n(this.i,this.l,_,null),Ke(this,_);Ee==4&&_r(this),this.o&&!this.K&&(Ee==4?Ys(this.j,this):(this.o=!1,$i(this)))}else ya(this.g),g==400&&_.indexOf("Unknown SID")>0?(this.m=3,rt(12)):(this.m=0,rt(13)),_r(this),qi(this)}}}catch{}finally{}};function Ul(u){if(!jl(u))return u.g.la();const g=Hl(u.g);if(g==="")return"";let _="";const T=g.length,M=Jn(u.g)==4;if(!u.h.i){if(typeof TextDecoder>"u")return _r(u),qi(u),"";u.h.i=new c.TextDecoder}for(let z=0;z<T;z++)u.h.h=!0,_+=u.h.i.decode(g[z],{stream:!(M&&z==T-1)});return g.length=0,u.h.g+=_,u.C=0,u.h.g}function jl(u){return u.g?u.v=="GET"&&u.M!=2&&u.j.Aa:!1}function zl(u,g){var _=u.C,T=g.indexOf(`
`,_);return T==-1?ia:(_=Number(g.substring(_,T)),isNaN(_)?Fl:(T+=1,T+_>g.length?ia:(g=g.slice(T,T+_),u.C=T+_,g)))}pn.prototype.cancel=function(){this.K=!0,_r(this)};function $i(u){u.T=Date.now()+u.H,oa(u,u.H)}function oa(u,g){if(u.D!=null)throw Error("WatchDog timer not null");u.D=Kr(y(u.aa,u),g)}function js(u){u.D&&(c.clearTimeout(u.D),u.D=null)}pn.prototype.aa=function(){this.D=null;const u=Date.now();u-this.T>=0?(Ol(this.i,this.B),this.M!=2&&(mr(),rt(17)),_r(this),this.m=2,qi(this)):oa(this,this.T-u)};function qi(u){u.j.I==0||u.K||Ys(u.j,u)}function _r(u){js(u);var g=u.O;g&&typeof g.dispose=="function"&&g.dispose(),u.O=null,Os(u.V),u.g&&(g=u.g,u.g=null,g.abort(),g.dispose())}function Ke(u,g){try{var _=u.j;if(_.I!=0&&(_.g==u||la(_.h,u))){if(!u.L&&la(_.h,u)&&_.I==3){try{var T=_.Ba.g.parse(g)}catch{T=null}if(Array.isArray(T)&&T.length==3){var M=T;if(M[0]==0){e:if(!_.v){if(_.g)if(_.g.F+3e3<u.F)Qs(_),sn(_);else break e;er(_),rt(18)}}else _.xa=M[1],0<_.xa-_.K&&M[2]<37500&&_.F&&_.A==0&&!_.C&&(_.C=Kr(y(_.Va,_),6e3));Wi(_.h)<=1&&_.ta&&(_.ta=void 0)}else on(_,11)}else if((u.L||_.g==u)&&Qs(_),!R(g))for(M=_.Ba.g.parse(g),g=0;g<M.length;g++){let ze=M[g];const ht=ze[0];if(!(ht<=_.K))if(_.K=ht,ze=ze[1],_.I==2)if(ze[0]=="c"){_.M=ze[1],_.ba=ze[2];const an=ze[3];an!=null&&(_.ka=an,_.j.info("VER="+_.ka));const Sr=ze[4];Sr!=null&&(_.za=Sr,_.j.info("SVER="+_.za));const tr=ze[5];tr!=null&&typeof tr=="number"&&tr>0&&(T=1.5*tr,_.O=T,_.j.info("backChannelRequestTimeoutMs_="+T)),T=_;const nr=u.g;if(nr){const Zs=nr.g?nr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Zs){var z=T.h;z.g||Zs.indexOf("spdy")==-1&&Zs.indexOf("quic")==-1&&Zs.indexOf("h2")==-1||(z.j=z.l,z.g=new Set,z.h&&(Bs(z,z.h),z.h=null))}if(T.G){const wa=nr.g?nr.g.getResponseHeader("X-HTTP-Session-Id"):null;wa&&(T.wa=wa,Fe(T.J,T.G,wa))}}_.I=3,_.l&&_.l.ra(),_.aa&&(_.T=Date.now()-u.F,_.j.info("Handshake RTT: "+_.T+"ms")),T=_;var Z=u;if(T.na=va(T,T.L?T.ba:null,T.W),Z.L){Hi(T.h,Z);var Ee=Z,at=T.O;at&&(Ee.H=at),Ee.D&&(js(Ee),$i(Ee)),T.g=Z}else bt(T);_.i.length>0&&Ir(_)}else ze[0]!="stop"&&ze[0]!="close"||on(_,7);else _.I==3&&(ze[0]=="stop"||ze[0]=="close"?ze[0]=="stop"?on(_,7):Ks(_):ze[0]!="noop"&&_.l&&_.l.qa(ze),_.A=0)}}mr(4)}catch{}}var rh=class{constructor(u,g){this.g=u,this.map=g}};function zs(u){this.l=u||10,c.PerformanceNavigationTiming?(u=c.performance.getEntriesByType("navigation"),u=u.length>0&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function aa(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Wi(u){return u.h?1:u.g?u.g.size:0}function la(u,g){return u.h?u.h==g:u.g?u.g.has(g):!1}function Bs(u,g){u.g?u.g.add(g):u.h=g}function Hi(u,g){u.h&&u.h==g?u.h=null:u.g&&u.g.has(g)&&u.g.delete(g)}zs.prototype.cancel=function(){if(this.i=tn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function tn(u){if(u.h!=null)return u.i.concat(u.h.G);if(u.g!=null&&u.g.size!==0){let g=u.i;for(const _ of u.g.values())g=g.concat(_.G);return g}return U(u.i)}var Bl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function nn(u,g){if(u){u=u.split("&");for(let _=0;_<u.length;_++){const T=u[_].indexOf("=");let M,z=null;T>=0?(M=u[_].substring(0,T),z=u[_].substring(T+1)):M=u[_],g(M,z?decodeURIComponent(z.replace(/\+/g," ")):"")}}}function Wn(u){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let g;u instanceof Wn?(this.l=u.l,Ki(this,u.j),this.o=u.o,this.g=u.g,Hn(this,u.u),this.h=u.h,Jr(this,ga(u.i)),this.m=u.m):u&&(g=String(u).match(Bl))?(this.l=!1,Ki(this,g[1]||"",!0),this.o=Gi(g[2]||""),this.g=Gi(g[3]||"",!0),Hn(this,g[4]),this.h=Gi(g[5]||"",!0),Jr(this,g[6]||"",!0),this.m=Gi(g[7]||"")):(this.l=!1,this.i=new Ve(null,this.l))}Wn.prototype.toString=function(){const u=[];var g=this.j;g&&u.push(Qi(g,ca,!0),":");var _=this.g;return(_||g=="file")&&(u.push("//"),(g=this.o)&&u.push(Qi(g,ca,!0),"@"),u.push(qn(_).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.u,_!=null&&u.push(":",String(_))),(_=this.h)&&(this.g&&_.charAt(0)!="/"&&u.push("/"),u.push(Qi(_,_.charAt(0)=="/"?Yi:ha,!0))),(_=this.i.toString())&&u.push("?",_),(_=this.m)&&u.push("#",Qi(_,da)),u.join("")},Wn.prototype.resolve=function(u){const g=mn(this);let _=!!u.j;_?Ki(g,u.j):_=!!u.o,_?g.o=u.o:_=!!u.g,_?g.g=u.g:_=u.u!=null;var T=u.h;if(_)Hn(g,u.u);else if(_=!!u.h){if(T.charAt(0)!="/")if(this.g&&!this.h)T="/"+T;else{var M=g.h.lastIndexOf("/");M!=-1&&(T=g.h.slice(0,M+1)+T)}if(M=T,M==".."||M==".")T="";else if(M.indexOf("./")!=-1||M.indexOf("/.")!=-1){T=M.lastIndexOf("/",0)==0,M=M.split("/");const z=[];for(let Z=0;Z<M.length;){const Ee=M[Z++];Ee=="."?T&&Z==M.length&&z.push(""):Ee==".."?((z.length>1||z.length==1&&z[0]!="")&&z.pop(),T&&Z==M.length&&z.push("")):(z.push(Ee),T=!0)}T=z.join("/")}else T=M}return _?g.h=T:_=u.i.toString()!=="",_?Jr(g,ga(u.i)):_=!!u.m,_&&(g.m=u.m),g};function mn(u){return new Wn(u)}function Ki(u,g,_){u.j=_?Gi(g,!0):g,u.j&&(u.j=u.j.replace(/:$/,""))}function Hn(u,g){if(g){if(g=Number(g),isNaN(g)||g<0)throw Error("Bad port number "+g);u.u=g}else u.u=null}function Jr(u,g,_){g instanceof Ve?(u.i=g,qs(u.i,u.l)):(_||(g=Qi(g,ih)),u.i=new Ve(g,u.l))}function Fe(u,g,_){u.i.set(g,_)}function vr(u){return Fe(u,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),u}function Gi(u,g){return u?g?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Qi(u,g,_){return typeof u=="string"?(u=encodeURI(u).replace(g,ua),_&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function ua(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var ca=/[#\/\?@]/g,ha=/[#\?:]/g,Yi=/[#\?]/g,ih=/[#\?@]/g,da=/#/g;function Ve(u,g){this.h=this.g=null,this.i=u||null,this.j=!!g}function Kn(u){u.g||(u.g=new Map,u.h=0,u.i&&nn(u.i,function(g,_){u.add(decodeURIComponent(g.replace(/\+/g," ")),_)}))}n=Ve.prototype,n.add=function(u,g){Kn(this),this.i=null,u=Gn(this,u);let _=this.g.get(u);return _||this.g.set(u,_=[]),_.push(g),this.h+=1,this};function fa(u,g){Kn(u),g=Gn(u,g),u.g.has(g)&&(u.i=null,u.h-=u.g.get(g).length,u.g.delete(g))}function $s(u,g){return Kn(u),g=Gn(u,g),u.g.has(g)}n.forEach=function(u,g){Kn(this),this.g.forEach(function(_,T){_.forEach(function(M){u.call(g,M,T,this)},this)},this)};function pa(u,g){Kn(u);let _=[];if(typeof g=="string")$s(u,g)&&(_=_.concat(u.g.get(Gn(u,g))));else for(u=Array.from(u.g.values()),g=0;g<u.length;g++)_=_.concat(u[g]);return _}n.set=function(u,g){return Kn(this),this.i=null,u=Gn(this,u),$s(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[g]),this.h+=1,this},n.get=function(u,g){return u?(u=pa(this,u),u.length>0?String(u[0]):g):g};function ma(u,g,_){fa(u,g),_.length>0&&(u.i=null,u.g.set(Gn(u,g),U(_)),u.h+=_.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],g=Array.from(this.g.keys());for(let T=0;T<g.length;T++){var _=g[T];const M=qn(_);_=pa(this,_);for(let z=0;z<_.length;z++){let Z=M;_[z]!==""&&(Z+="="+qn(_[z])),u.push(Z)}}return this.i=u.join("&")};function ga(u){const g=new Ve;return g.i=u.i,u.g&&(g.g=new Map(u.g),g.h=u.h),g}function Gn(u,g){return g=String(g),u.j&&(g=g.toLowerCase()),g}function qs(u,g){g&&!u.j&&(Kn(u),u.i=null,u.g.forEach(function(_,T){const M=T.toLowerCase();T!=M&&(fa(this,T),ma(this,M,_))},u)),u.j=g}function Qn(u,g){const _=new Gr;if(c.Image){const T=new Image;T.onload=w(Rt,_,"TestLoadImage: loaded",!0,g,T),T.onerror=w(Rt,_,"TestLoadImage: error",!1,g,T),T.onabort=w(Rt,_,"TestLoadImage: abort",!1,g,T),T.ontimeout=w(Rt,_,"TestLoadImage: timeout",!1,g,T),c.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=u}else g(!1)}function Yn(u,g){const _=new Gr,T=new AbortController,M=setTimeout(()=>{T.abort(),Rt(_,"TestPingServer: timeout",!1,g)},1e4);fetch(u,{signal:T.signal}).then(z=>{clearTimeout(M),z.ok?Rt(_,"TestPingServer: ok",!0,g):Rt(_,"TestPingServer: server error",!1,g)}).catch(()=>{clearTimeout(M),Rt(_,"TestPingServer: error",!1,g)})}function Rt(u,g,_,T,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),T(_)}catch{}}function Ji(){this.g=new zi}function wr(u){this.i=u.Sb||null,this.h=u.ab||!1}E(wr,qr),wr.prototype.g=function(){return new rn(this.i,this.h)};function rn(u,g){ct.call(this),this.H=u,this.o=g,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}E(rn,ct),n=rn.prototype,n.open=function(u,g){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=u,this.D=g,this.readyState=1,Pn(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const g={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};u&&(g.body=u),(this.H||c).fetch(new Request(this.D,g)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Xr(this)),this.readyState=0},n.Pa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Pn(this)),this.g&&(this.readyState=3,Pn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;$l(this)}else u.text().then(this.Oa.bind(this),this.ga.bind(this))};function $l(u){u.j.read().then(u.Ma.bind(u)).catch(u.ga.bind(u))}n.Ma=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var g=u.value?u.value:new Uint8Array(0);(g=this.B.decode(g,{stream:!u.done}))&&(this.response=this.responseText+=g)}u.done?Xr(this):Pn(this),this.readyState==3&&$l(this)}},n.Oa=function(u){this.g&&(this.response=this.responseText=u,Xr(this))},n.Na=function(u){this.g&&(this.response=u,Xr(this))},n.ga=function(){this.g&&Xr(this)};function Xr(u){u.readyState=4,u.l=null,u.j=null,u.B=null,Pn(u)}n.setRequestHeader=function(u,g){this.A.append(u,g)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],g=this.h.entries();for(var _=g.next();!_.done;)_=_.value,u.push(_[0]+": "+_[1]),_=g.next();return u.join(`\r
`)};function Pn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(rn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function ql(u){let g="";return pe(u,function(_,T){g+=T,g+=":",g+=_,g+=`\r
`}),g}function Ws(u,g,_){e:{for(T in _){var T=!1;break e}T=!0}T||(_=ql(_),typeof u=="string"?_!=null&&qn(_):Fe(u,g,_))}function $e(u){ct.call(this),this.headers=new Map,this.L=u||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}E($e,ct);var Wl=/^https?$/i,sh=["POST","PUT"];n=$e.prototype,n.Fa=function(u){this.H=u},n.ea=function(u,g,_,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);g=g?g.toUpperCase():"GET",this.D=u,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Ll.g(),this.g.onreadystatechange=I(y(this.Ca,this));try{this.B=!0,this.g.open(g,String(u),!0),this.B=!1}catch(z){Zr(this,z);return}if(u=_||"",_=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var M in T)_.set(M,T[M]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const z of T.keys())_.set(z,T.get(z));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(_.keys()).find(z=>z.toLowerCase()=="content-type"),M=c.FormData&&u instanceof c.FormData,!(Array.prototype.indexOf.call(sh,g,void 0)>=0)||T||M||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[z,Z]of _)this.g.setRequestHeader(z,Z);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(u),this.v=!1}catch(z){Zr(this,z)}};function Zr(u,g){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=g,u.o=5,ei(u),Tr(u)}function ei(u){u.A||(u.A=!0,ot(u,"complete"),ot(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=u||7,ot(this,"complete"),ot(this,"abort"),Tr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Tr(this,!0)),$e.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Er(this):this.Xa())},n.Xa=function(){Er(this)};function Er(u){if(u.h&&typeof l<"u"){if(u.v&&Jn(u)==4)setTimeout(u.Ca.bind(u),0);else if(ot(u,"readystatechange"),Jn(u)==4){u.h=!1;try{const z=u.ca();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var g=!0;break e;default:g=!1}var _;if(!(_=g)){var T;if(T=z===0){let Z=String(u.D).match(Bl)[1]||null;!Z&&c.self&&c.self.location&&(Z=c.self.location.protocol.slice(0,-1)),T=!Wl.test(Z?Z.toLowerCase():"")}_=T}if(_)ot(u,"complete"),ot(u,"success");else{u.o=6;try{var M=Jn(u)>2?u.g.statusText:""}catch{M=""}u.l=M+" ["+u.ca()+"]",ei(u)}}finally{Tr(u)}}}}function Tr(u,g){if(u.g){u.m&&(clearTimeout(u.m),u.m=null);const _=u.g;u.g=null,g||ot(u,"ready");try{_.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Jn(u){return u.g?u.g.readyState:0}n.ca=function(){try{return Jn(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(u){if(this.g){var g=this.g.responseText;return u&&g.indexOf(u)==0&&(g=g.substring(u.length)),Nl(g)}};function Hl(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.F){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function ya(u){const g={};u=(u.g&&Jn(u)>=2&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<u.length;T++){if(R(u[T]))continue;var _=Us(u[T]);const M=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const z=g[M]||[];g[M]=z,z.push(_)}oe(g,function(T){return T.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Xn(u,g,_){return _&&_.internalChannelParams&&_.internalChannelParams[u]||g}function Hs(u){this.za=0,this.i=[],this.j=new Gr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Xn("failFast",!1,u),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Xn("baseRetryDelayMs",5e3,u),this.Za=Xn("retryDelaySeedMs",1e4,u),this.Ta=Xn("forwardChannelMaxRetries",2,u),this.va=Xn("forwardChannelRequestTimeoutMs",2e4,u),this.ma=u&&u.xmlHttpFactory||void 0,this.Ua=u&&u.Rb||void 0,this.Aa=u&&u.useFetchStreams||!1,this.O=void 0,this.L=u&&u.supportsCrossDomainXhr||!1,this.M="",this.h=new zs(u&&u.concurrentRequestLimit),this.Ba=new Ji,this.S=u&&u.fastHandshake||!1,this.R=u&&u.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=u&&u.Pb||!1,u&&u.ua&&this.j.ua(),u&&u.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&u&&u.detectBufferingProxy||!1,this.ia=void 0,u&&u.longPollingTimeout&&u.longPollingTimeout>0&&(this.ia=u.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Hs.prototype,n.ka=8,n.I=1,n.connect=function(u,g,_,T){rt(0),this.W=u,this.H=g||{},_&&T!==void 0&&(this.H.OSID=_,this.H.OAID=T),this.F=this.X,this.J=va(this,null,this.W),Ir(this)};function Ks(u){if(Gs(u),u.I==3){var g=u.V++,_=mn(u.J);if(Fe(_,"SID",u.M),Fe(_,"RID",g),Fe(_,"TYPE","terminate"),Zn(u,_),g=new pn(u,u.j,g),g.M=2,g.A=vr(mn(_)),_=!1,c.navigator&&c.navigator.sendBeacon)try{_=c.navigator.sendBeacon(g.A.toString(),"")}catch{}!_&&c.Image&&(new Image().src=g.A,_=!0),_||(g.g=Gl(g.j,null),g.g.ea(g.A)),g.F=Date.now(),$i(g)}es(u)}function sn(u){u.g&&(Zi(u),u.g.cancel(),u.g=null)}function Gs(u){sn(u),u.v&&(c.clearTimeout(u.v),u.v=null),Qs(u),u.h.cancel(),u.m&&(typeof u.m=="number"&&c.clearTimeout(u.m),u.m=null)}function Ir(u){if(!aa(u.h)&&!u.m){u.m=!0;var g=u.Ea;Re||A(),Ce||(Re(),Ce=!0),k.add(g,u),u.D=0}}function Kl(u,g){return Wi(u.h)>=u.h.j-(u.m?1:0)?!1:u.m?(u.i=g.G.concat(u.i),!0):u.I==1||u.I==2||u.D>=(u.Sa?0:u.Ta)?!1:(u.m=Kr(y(u.Ea,u,g),Js(u,u.D)),u.D++,!0)}n.Ea=function(u){if(this.m)if(this.m=null,this.I==1){if(!u){this.V=Math.floor(Math.random()*1e5),u=this.V++;const M=new pn(this,this.j,u);let z=this.o;if(this.U&&(z?(z=b(z),Ie(z,this.U)):z=this.U),this.u!==null||this.R||(M.J=z,z=null),this.S)e:{for(var g=0,_=0;_<this.i.length;_++){t:{var T=this.i[_];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break t}T=void 0}if(T===void 0)break;if(g+=T,g>4096){g=_;break e}if(g===4096||_===this.i.length-1){g=_+1;break e}}g=1e3}else g=1e3;g=_a(this,M,g),_=mn(this.J),Fe(_,"RID",u),Fe(_,"CVER",22),this.G&&Fe(_,"X-HTTP-Session-Id",this.G),Zn(this,_),z&&(this.R?g="headers="+qn(ql(z))+"&"+g:this.u&&Ws(_,this.u,z)),Bs(this.h,M),this.Ra&&Fe(_,"TYPE","init"),this.S?(Fe(_,"$req",g),Fe(_,"SID","null"),M.U=!0,Cn(M,_,null)):Cn(M,_,g),this.I=2}}else this.I==3&&(u?Xi(this,u):this.i.length==0||aa(this.h)||Xi(this))};function Xi(u,g){var _;g?_=g.l:_=u.V++;const T=mn(u.J);Fe(T,"SID",u.M),Fe(T,"RID",_),Fe(T,"AID",u.K),Zn(u,T),u.u&&u.o&&Ws(T,u.u,u.o),_=new pn(u,u.j,_,u.D+1),u.u===null&&(_.J=u.o),g&&(u.i=g.G.concat(u.i)),g=_a(u,_,1e3),_.H=Math.round(u.va*.5)+Math.round(u.va*.5*Math.random()),Bs(u.h,_),Cn(_,T,g)}function Zn(u,g){u.H&&pe(u.H,function(_,T){Fe(g,T,_)}),u.l&&pe({},function(_,T){Fe(g,T,_)})}function _a(u,g,_){_=Math.min(u.i.length,_);const T=u.l?y(u.l.Ka,u.l,u):null;e:{var M=u.i;let Ee=-1;for(;;){const at=["count="+_];Ee==-1?_>0?(Ee=M[0].g,at.push("ofs="+Ee)):Ee=0:at.push("ofs="+Ee);let ze=!0;for(let ht=0;ht<_;ht++){var z=M[ht].g;const an=M[ht].map;if(z-=Ee,z<0)Ee=Math.max(0,M[ht].g-100),ze=!1;else try{z="req"+z+"_"||"";try{var Z=an instanceof Map?an:Object.entries(an);for(const[Sr,tr]of Z){let nr=tr;f(tr)&&(nr=$r(tr)),at.push(z+Sr+"="+encodeURIComponent(nr))}}catch(Sr){throw at.push(z+"type="+encodeURIComponent("_badmap")),Sr}}catch{T&&T(an)}}if(ze){Z=at.join("&");break e}}Z=void 0}return u=u.i.splice(0,_),g.G=u,Z}function bt(u){if(!u.g&&!u.v){u.Y=1;var g=u.Da;Re||A(),Ce||(Re(),Ce=!0),k.add(g,u),u.A=0}}function er(u){return u.g||u.v||u.A>=3?!1:(u.Y++,u.v=Kr(y(u.Da,u),Js(u,u.A)),u.A++,!0)}n.Da=function(){if(this.v=null,ti(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var u=4*this.T;this.j.info("BP detection timer enabled: "+u),this.B=Kr(y(this.Wa,this),u)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,rt(10),sn(this),ti(this))};function Zi(u){u.B!=null&&(c.clearTimeout(u.B),u.B=null)}function ti(u){u.g=new pn(u,u.j,"rpc",u.Y),u.u===null&&(u.g.J=u.o),u.g.P=0;var g=mn(u.na);Fe(g,"RID","rpc"),Fe(g,"SID",u.M),Fe(g,"AID",u.K),Fe(g,"CI",u.F?"0":"1"),!u.F&&u.ia&&Fe(g,"TO",u.ia),Fe(g,"TYPE","xmlhttp"),Zn(u,g),u.u&&u.o&&Ws(g,u.u,u.o),u.O&&(u.g.H=u.O);var _=u.g;u=u.ba,_.M=1,_.A=vr(mn(g)),_.u=null,_.R=!0,sa(_,u)}n.Va=function(){this.C!=null&&(this.C=null,sn(this),er(this),rt(19))};function Qs(u){u.C!=null&&(c.clearTimeout(u.C),u.C=null)}function Ys(u,g){var _=null;if(u.g==g){Qs(u),Zi(u),u.g=null;var T=2}else if(la(u.h,g))_=g.G,Hi(u.h,g),T=1;else return;if(u.I!=0){if(g.o)if(T==1){_=g.u?g.u.length:0,g=Date.now()-g.F;var M=u.D;T=Hr(),ot(T,new ra(T,_)),Ir(u)}else bt(u);else if(M=g.m,M==3||M==0&&g.X>0||!(T==1&&Kl(u,g)||T==2&&er(u)))switch(_&&_.length>0&&(g=u.h,g.i=g.i.concat(_)),M){case 1:on(u,5);break;case 4:on(u,10);break;case 3:on(u,6);break;default:on(u,2)}}}function Js(u,g){let _=u.Qa+Math.floor(Math.random()*u.Za);return u.isActive()||(_*=2),_*g}function on(u,g){if(u.j.info("Error code "+g),g==2){var _=y(u.bb,u),T=u.Ua;const M=!T;T=new Wn(T||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Ki(T,"https"),vr(T),M?Qn(T.toString(),_):Yn(T.toString(),_)}else rt(2);u.I=0,u.l&&u.l.pa(g),es(u),Gs(u)}n.bb=function(u){u?(this.j.info("Successfully pinged google.com"),rt(2)):(this.j.info("Failed to ping google.com"),rt(1))};function es(u){if(u.I=0,u.ja=[],u.l){const g=tn(u.h);(g.length!=0||u.i.length!=0)&&($(u.ja,g),$(u.ja,u.i),u.h.i.length=0,U(u.i),u.i.length=0),u.l.oa()}}function va(u,g,_){var T=_ instanceof Wn?mn(_):new Wn(_);if(T.g!="")g&&(T.g=g+"."+T.g),Hn(T,T.u);else{var M=c.location;T=M.protocol,g=g?g+"."+M.hostname:M.hostname,M=+M.port;const z=new Wn(null);T&&Ki(z,T),g&&(z.g=g),M&&Hn(z,M),_&&(z.h=_),T=z}return _=u.G,g=u.wa,_&&g&&Fe(T,_,g),Fe(T,"VER",u.ka),Zn(u,T),T}function Gl(u,g,_){if(g&&!u.L)throw Error("Can't create secondary domain capable XhrIo object.");return g=u.Aa&&!u.ma?new $e(new wr({ab:_})):new $e(u.ma),g.Fa(u.L),g}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ql(){}n=Ql.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Xs(){}Xs.prototype.g=function(u,g){return new Ct(u,g)};function Ct(u,g){ct.call(this),this.g=new Hs(g),this.l=u,this.h=g&&g.messageUrlParams||null,u=g&&g.messageHeaders||null,g&&g.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=g&&g.initMessageHeaders||null,g&&g.messageContentType&&(u?u["X-WebChannel-Content-Type"]=g.messageContentType:u={"X-WebChannel-Content-Type":g.messageContentType}),g&&g.sa&&(u?u["X-WebChannel-Client-Profile"]=g.sa:u={"X-WebChannel-Client-Profile":g.sa}),this.g.U=u,(u=g&&g.Qb)&&!R(u)&&(this.g.u=u),this.A=g&&g.supportsCrossDomainXhr||!1,this.v=g&&g.sendRawJson||!1,(g=g&&g.httpSessionIdParam)&&!R(g)&&(this.g.G=g,u=this.h,u!==null&&g in u&&(u=this.h,g in u&&delete u[g])),this.j=new ni(this)}E(Ct,ct),Ct.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Ct.prototype.close=function(){Ks(this.g)},Ct.prototype.o=function(u){var g=this.g;if(typeof u=="string"){var _={};_.__data__=u,u=_}else this.v&&(_={},_.__data__=$r(u),u=_);g.i.push(new rh(g.Ya++,u)),g.I==3&&Ir(g)},Ct.prototype.N=function(){this.g.l=null,delete this.j,Ks(this.g),delete this.g,Ct.Z.N.call(this)};function Yl(u){Ls.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var g=u.__sm__;if(g){e:{for(const _ in g){u=_;break e}u=void 0}(this.i=u)&&(u=this.i,g=g!==null&&u in g?g[u]:void 0),this.data=g}else this.data=u}E(Yl,Ls);function Jl(){na.call(this),this.status=1}E(Jl,na);function ni(u){this.g=u}E(ni,Ql),ni.prototype.ra=function(){ot(this.g,"a")},ni.prototype.qa=function(u){ot(this.g,new Yl(u))},ni.prototype.pa=function(u){ot(this.g,new Jl)},ni.prototype.oa=function(){ot(this.g,"b")},Xs.prototype.createWebChannel=Xs.prototype.g,Ct.prototype.send=Ct.prototype.o,Ct.prototype.open=Ct.prototype.m,Ct.prototype.close=Ct.prototype.close,aw=function(){return new Xs},ow=function(){return Hr()},sw=Rn,cf={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Qr.NO_ERROR=0,Qr.TIMEOUT=8,Qr.HTTP_ERROR=6,tc=Qr,Yr.COMPLETE="complete",iw=Yr,Dl.EventType=Wr,Wr.OPEN="a",Wr.CLOSE="b",Wr.ERROR="c",Wr.MESSAGE="d",ct.prototype.listen=ct.prototype.J,Ga=Dl,$e.prototype.listenOnce=$e.prototype.K,$e.prototype.getLastError=$e.prototype.Ha,$e.prototype.getLastErrorCode=$e.prototype.ya,$e.prototype.getStatus=$e.prototype.ca,$e.prototype.getResponseJson=$e.prototype.La,$e.prototype.getResponseText=$e.prototype.la,$e.prototype.send=$e.prototype.ea,$e.prototype.setWithCredentials=$e.prototype.Fa,rw=$e}).apply(typeof Hu<"u"?Hu:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */let Ho="12.9.0";function MR(n){Ho=n}/**
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
 */const Es=new Lc("@firebase/firestore");function Eo(){return Es.logLevel}function se(n,...e){if(Es.logLevel<=xe.DEBUG){const t=e.map(qf);Es.debug(`Firestore (${Ho}): ${n}`,...t)}}function Fr(n,...e){if(Es.logLevel<=xe.ERROR){const t=e.map(qf);Es.error(`Firestore (${Ho}): ${n}`,...t)}}function Ts(n,...e){if(Es.logLevel<=xe.WARN){const t=e.map(qf);Es.warn(`Firestore (${Ho}): ${n}`,...t)}}function qf(n){if(typeof n=="string")return n;try{return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
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
 */function _e(n,e,t){let i="Unexpected state";typeof e=="string"?i=e:t=e,lw(n,i,t)}function lw(n,e,t){let i=`FIRESTORE (${Ho}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{i+=" CONTEXT: "+JSON.stringify(t)}catch{i+=" CONTEXT: "+t}throw Fr(i),new Error(i)}function je(n,e,t,i){let o="Unexpected state";typeof t=="string"?o=t:i=t,n||lw(e,o,i)}function Te(n,e){return n}/**
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
 */const W={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ie extends zn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ys{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class uw{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class FR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(jt.UNAUTHENTICATED)))}shutdown(){}}class UR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class jR{constructor(e){this.t=e,this.currentUser=jt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){je(this.o===void 0,42304);let i=this.i;const o=p=>this.i!==i?(i=this.i,t(p)):Promise.resolve();let l=new ys;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new ys,e.enqueueRetryable((()=>o(this.currentUser)))};const c=()=>{const p=l;e.enqueueRetryable((async()=>{await p.promise,await o(this.currentUser)}))},f=p=>{se("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit((p=>f(p))),setTimeout((()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?f(p):(se("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new ys)}}),0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((i=>this.i!==e?(se("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(je(typeof i.accessToken=="string",31837,{l:i}),new uw(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return je(e===null||typeof e=="string",2055,{h:e}),new jt(e)}}class zR{constructor(e,t,i){this.P=e,this.T=t,this.I=i,this.type="FirstParty",this.user=jt.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class BR{constructor(e,t,i){this.P=e,this.T=t,this.I=i}getToken(){return Promise.resolve(new zR(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(jt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Ly{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class $R{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,On(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){je(this.o===void 0,3512);const i=l=>{l.error!=null&&se("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.m;return this.m=l.token,se("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>i(l)))};const o=l=>{se("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((l=>o(l))),setTimeout((()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?o(l):se("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Ly(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(je(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Ly(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function qR(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
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
 */class Wf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const o=qR(40);for(let l=0;l<o.length;++l)i.length<20&&o[l]<t&&(i+=e.charAt(o[l]%62))}return i}}function Ne(n,e){return n<e?-1:n>e?1:0}function hf(n,e){const t=Math.min(n.length,e.length);for(let i=0;i<t;i++){const o=n.charAt(i),l=e.charAt(i);if(o!==l)return $d(o)===$d(l)?Ne(o,l):$d(o)?1:-1}return Ne(n.length,e.length)}const WR=55296,HR=57343;function $d(n){const e=n.charCodeAt(0);return e>=WR&&e<=HR}function Oo(n,e,t){return n.length===e.length&&n.every(((i,o)=>t(i,e[o])))}/**
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
 */const My="__name__";class ar{constructor(e,t,i){t===void 0?t=0:t>e.length&&_e(637,{offset:t,range:e.length}),i===void 0?i=e.length-t:i>e.length-t&&_e(1746,{length:i,range:e.length-t}),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return ar.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ar?e.forEach((i=>{t.push(i)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let o=0;o<i;o++){const l=ar.compareSegments(e.get(o),t.get(o));if(l!==0)return l}return Ne(e.length,t.length)}static compareSegments(e,t){const i=ar.isNumericId(e),o=ar.isNumericId(t);return i&&!o?-1:!i&&o?1:i&&o?ar.extractNumericId(e).compare(ar.extractNumericId(t)):hf(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Pi.fromString(e.substring(4,e.length-2))}}class He extends ar{construct(e,t,i){return new He(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new ie(W.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter((o=>o.length>0)))}return new He(t)}static emptyPath(){return new He([])}}const KR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Nt extends ar{construct(e,t,i){return new Nt(e,t,i)}static isValidIdentifier(e){return KR.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Nt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===My}static keyField(){return new Nt([My])}static fromServerFormat(e){const t=[];let i="",o=0;const l=()=>{if(i.length===0)throw new ie(W.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let c=!1;for(;o<e.length;){const f=e[o];if(f==="\\"){if(o+1===e.length)throw new ie(W.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new ie(W.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=p,o+=2}else f==="`"?(c=!c,o++):f!=="."||c?(i+=f,o++):(l(),o++)}if(l(),c)throw new ie(W.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Nt(t)}static emptyPath(){return new Nt([])}}/**
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
 */function cw(n,e,t){if(!t)throw new ie(W.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function GR(n,e,t,i){if(e===!0&&i===!0)throw new ie(W.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Fy(n){if(!fe.isDocumentKey(n))throw new ie(W.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Uy(n){if(fe.isDocumentKey(n))throw new ie(W.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function hw(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function jc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(i){return i.constructor?i.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":_e(12329,{type:typeof n})}function _s(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ie(W.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=jc(n);throw new ie(W.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function gt(n,e){const t={typeString:n};return e&&(t.value=e),t}function Sl(n,e){if(!hw(n))throw new ie(W.INVALID_ARGUMENT,"JSON must be an object");let t;for(const i in e)if(e[i]){const o=e[i].typeString,l="value"in e[i]?{value:e[i].value}:void 0;if(!(i in n)){t=`JSON missing required field: '${i}'`;break}const c=n[i];if(o&&typeof c!==o){t=`JSON field '${i}' must be a ${o}.`;break}if(l!==void 0&&c!==l.value){t=`Expected '${i}' field to equal '${l.value}'`;break}}if(t)throw new ie(W.INVALID_ARGUMENT,t);return!0}/**
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
 */const jy=-62135596800,zy=1e6;class Ye{static now(){return Ye.fromMillis(Date.now())}static fromDate(e){return Ye.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*zy);return new Ye(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ie(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ie(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<jy)throw new ie(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ie(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/zy}_compareTo(e){return this.seconds===e.seconds?Ne(this.nanoseconds,e.nanoseconds):Ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ye._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Sl(e,Ye._jsonSchema))return new Ye(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-jy;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ye._jsonSchemaVersion="firestore/timestamp/1.0",Ye._jsonSchema={type:gt("string",Ye._jsonSchemaVersion),seconds:gt("number"),nanoseconds:gt("number")};/**
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
 */const hl=-1;function QR(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,o=we.fromTimestamp(i===1e9?new Ye(t+1,0):new Ye(t,i));return new Ni(o,fe.empty(),e)}function YR(n){return new Ni(n.readTime,n.key,hl)}class Ni{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Ni(we.min(),fe.empty(),hl)}static max(){return new Ni(we.max(),fe.empty(),hl)}}function JR(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=fe.comparator(n.documentKey,e.documentKey),t!==0?t:Ne(n.largestBatchId,e.largestBatchId))}/**
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
 */const XR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ZR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function Ko(n){if(n.code!==W.FAILED_PRECONDITION||n.message!==XR)throw n;se("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class H{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&_e(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new H(((i,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(i,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof H?t:H.resolve(t)}catch(t){return H.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):H.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):H.reject(t)}static resolve(e){return new H(((t,i)=>{t(e)}))}static reject(e){return new H(((t,i)=>{i(e)}))}static waitFor(e){return new H(((t,i)=>{let o=0,l=0,c=!1;e.forEach((f=>{++o,f.next((()=>{++l,c&&l===o&&t()}),(p=>i(p)))})),c=!0,l===o&&t()}))}static or(e){let t=H.resolve(!1);for(const i of e)t=t.next((o=>o?H.resolve(o):i()));return t}static forEach(e,t){const i=[];return e.forEach(((o,l)=>{i.push(t.call(this,o,l))})),this.waitFor(i)}static mapArray(e,t){return new H(((i,o)=>{const l=e.length,c=new Array(l);let f=0;for(let p=0;p<l;p++){const y=p;t(e[y]).next((w=>{c[y]=w,++f,f===l&&i(c)}),(w=>o(w)))}}))}static doWhile(e,t){return new H(((i,o)=>{const l=()=>{e()===!0?t().next((()=>{l()}),o):i()};l()}))}}function eC(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Go(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class zc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ae(i),this.ue=i=>t.writeSequenceNumber(i))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}zc.ce=-1;/**
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
 */const Hf=-1;function Bc(n){return n==null}function yc(n){return n===0&&1/n==-1/0}function tC(n){return typeof n=="number"&&Number.isInteger(n)&&!yc(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const dw="";function nC(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=By(e)),e=rC(n.get(t),e);return By(e)}function rC(n,e){let t=e;const i=n.length;for(let o=0;o<i;o++){const l=n.charAt(o);switch(l){case"\0":t+="";break;case dw:t+="";break;default:t+=l}}return t}function By(n){return n+dw+""}/**
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
 */function $y(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Ui(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function fw(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class nt{constructor(e,t){this.comparator=e,this.root=t||xt.EMPTY}insert(e,t){return new nt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,xt.BLACK,null,null))}remove(e){return new nt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,xt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(e,i.key);if(o===0)return t+i.left.size;o<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,i)=>(e(t,i),!1)))}toString(){const e=[];return this.inorderTraversal(((t,i)=>(e.push(`${t}:${i}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ku(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ku(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ku(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ku(this.root,e,this.comparator,!0)}}class Ku{constructor(e,t,i,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?i(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class xt{constructor(e,t,i,o,l){this.key=e,this.value=t,this.color=i??xt.RED,this.left=o??xt.EMPTY,this.right=l??xt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,o,l){return new xt(e??this.key,t??this.value,i??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let o=this;const l=i(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,i),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return xt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return xt.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,xt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,xt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw _e(43730,{key:this.key,value:this.value});if(this.right.isRed())throw _e(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw _e(27949);return e+(this.isRed()?0:1)}}xt.EMPTY=null,xt.RED=!0,xt.BLACK=!1;xt.EMPTY=new class{constructor(){this.size=0}get key(){throw _e(57766)}get value(){throw _e(16141)}get color(){throw _e(16727)}get left(){throw _e(29726)}get right(){throw _e(36894)}copy(e,t,i,o,l){return this}insert(e,t,i){return new xt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class wt{constructor(e){this.comparator=e,this.data=new nt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,i)=>(e(t),!1)))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new qy(this.data.getIterator())}getIteratorFrom(e){return new qy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((i=>{t=t.add(i)})),t}isEqual(e){if(!(e instanceof wt)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new wt(this.comparator);return t.data=e,t}}class qy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Mn{constructor(e){this.fields=e,e.sort(Nt.comparator)}static empty(){return new Mn([])}unionWith(e){let t=new wt(Nt.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new Mn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Oo(this.fields,e.fields,((t,i)=>t.isEqual(i)))}}/**
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
 */class pw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Dt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new pw("Invalid base64 string: "+l):l}})(e);return new Dt(t)}static fromUint8Array(e){const t=(function(o){let l="";for(let c=0;c<o.length;++c)l+=String.fromCharCode(o[c]);return l})(e);return new Dt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Dt.EMPTY_BYTE_STRING=new Dt("");const iC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Di(n){if(je(!!n,39018),typeof n=="string"){let e=0;const t=iC.exec(n);if(je(!!t,46558,{timestamp:n}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:ut(n.seconds),nanos:ut(n.nanos)}}function ut(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Vi(n){return typeof n=="string"?Dt.fromBase64String(n):Dt.fromUint8Array(n)}/**
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
 */const mw="server_timestamp",gw="__type__",yw="__previous_value__",_w="__local_write_time__";function Kf(n){var t,i;return((i=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[gw])==null?void 0:i.stringValue)===mw}function $c(n){const e=n.mapValue.fields[yw];return Kf(e)?$c(e):e}function dl(n){const e=Di(n.mapValue.fields[_w].timestampValue);return new Ye(e.seconds,e.nanos)}/**
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
 */class sC{constructor(e,t,i,o,l,c,f,p,y,w,E){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=o,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=f,this.longPollingOptions=p,this.useFetchStreams=y,this.isUsingEmulator=w,this.apiKey=E}}const _c="(default)";class fl{constructor(e,t){this.projectId=e,this.database=t||_c}static empty(){return new fl("","")}get isDefaultDatabase(){return this.database===_c}isEqual(e){return e instanceof fl&&e.projectId===this.projectId&&e.database===this.database}}function oC(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new ie(W.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new fl(n.options.projectId,e)}/**
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
 */const vw="__type__",aC="__max__",Gu={mapValue:{}},ww="__vector__",vc="value";function bi(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Kf(n)?4:uC(n)?9007199254740991:lC(n)?10:11:_e(28295,{value:n})}function fr(n,e){if(n===e)return!0;const t=bi(n);if(t!==bi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return dl(n).isEqual(dl(e));case 3:return(function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const c=Di(o.timestampValue),f=Di(l.timestampValue);return c.seconds===f.seconds&&c.nanos===f.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(o,l){return Vi(o.bytesValue).isEqual(Vi(l.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(o,l){return ut(o.geoPointValue.latitude)===ut(l.geoPointValue.latitude)&&ut(o.geoPointValue.longitude)===ut(l.geoPointValue.longitude)})(n,e);case 2:return(function(o,l){if("integerValue"in o&&"integerValue"in l)return ut(o.integerValue)===ut(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const c=ut(o.doubleValue),f=ut(l.doubleValue);return c===f?yc(c)===yc(f):isNaN(c)&&isNaN(f)}return!1})(n,e);case 9:return Oo(n.arrayValue.values||[],e.arrayValue.values||[],fr);case 10:case 11:return(function(o,l){const c=o.mapValue.fields||{},f=l.mapValue.fields||{};if($y(c)!==$y(f))return!1;for(const p in c)if(c.hasOwnProperty(p)&&(f[p]===void 0||!fr(c[p],f[p])))return!1;return!0})(n,e);default:return _e(52216,{left:n})}}function pl(n,e){return(n.values||[]).find((t=>fr(t,e)))!==void 0}function Lo(n,e){if(n===e)return 0;const t=bi(n),i=bi(e);if(t!==i)return Ne(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ne(n.booleanValue,e.booleanValue);case 2:return(function(l,c){const f=ut(l.integerValue||l.doubleValue),p=ut(c.integerValue||c.doubleValue);return f<p?-1:f>p?1:f===p?0:isNaN(f)?isNaN(p)?0:-1:1})(n,e);case 3:return Wy(n.timestampValue,e.timestampValue);case 4:return Wy(dl(n),dl(e));case 5:return hf(n.stringValue,e.stringValue);case 6:return(function(l,c){const f=Vi(l),p=Vi(c);return f.compareTo(p)})(n.bytesValue,e.bytesValue);case 7:return(function(l,c){const f=l.split("/"),p=c.split("/");for(let y=0;y<f.length&&y<p.length;y++){const w=Ne(f[y],p[y]);if(w!==0)return w}return Ne(f.length,p.length)})(n.referenceValue,e.referenceValue);case 8:return(function(l,c){const f=Ne(ut(l.latitude),ut(c.latitude));return f!==0?f:Ne(ut(l.longitude),ut(c.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return Hy(n.arrayValue,e.arrayValue);case 10:return(function(l,c){var I,U,$,q;const f=l.fields||{},p=c.fields||{},y=(I=f[vc])==null?void 0:I.arrayValue,w=(U=p[vc])==null?void 0:U.arrayValue,E=Ne((($=y==null?void 0:y.values)==null?void 0:$.length)||0,((q=w==null?void 0:w.values)==null?void 0:q.length)||0);return E!==0?E:Hy(y,w)})(n.mapValue,e.mapValue);case 11:return(function(l,c){if(l===Gu.mapValue&&c===Gu.mapValue)return 0;if(l===Gu.mapValue)return 1;if(c===Gu.mapValue)return-1;const f=l.fields||{},p=Object.keys(f),y=c.fields||{},w=Object.keys(y);p.sort(),w.sort();for(let E=0;E<p.length&&E<w.length;++E){const I=hf(p[E],w[E]);if(I!==0)return I;const U=Lo(f[p[E]],y[w[E]]);if(U!==0)return U}return Ne(p.length,w.length)})(n.mapValue,e.mapValue);default:throw _e(23264,{he:t})}}function Wy(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Ne(n,e);const t=Di(n),i=Di(e),o=Ne(t.seconds,i.seconds);return o!==0?o:Ne(t.nanos,i.nanos)}function Hy(n,e){const t=n.values||[],i=e.values||[];for(let o=0;o<t.length&&o<i.length;++o){const l=Lo(t[o],i[o]);if(l)return l}return Ne(t.length,i.length)}function Mo(n){return df(n)}function df(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const i=Di(t);return`time(${i.seconds},${i.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Vi(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return fe.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let i="[",o=!0;for(const l of t.values||[])o?o=!1:i+=",",i+=df(l);return i+"]"})(n.arrayValue):"mapValue"in n?(function(t){const i=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const c of i)l?l=!1:o+=",",o+=`${c}:${df(t.fields[c])}`;return o+"}"})(n.mapValue):_e(61005,{value:n})}function nc(n){switch(bi(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=$c(n);return e?16+nc(e):16;case 5:return 2*n.stringValue.length;case 6:return Vi(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(i){return(i.values||[]).reduce(((o,l)=>o+nc(l)),0)})(n.arrayValue);case 10:case 11:return(function(i){let o=0;return Ui(i.fields,((l,c)=>{o+=l.length+nc(c)})),o})(n.mapValue);default:throw _e(13486,{value:n})}}function Ky(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function ff(n){return!!n&&"integerValue"in n}function Gf(n){return!!n&&"arrayValue"in n}function Gy(n){return!!n&&"nullValue"in n}function Qy(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function rc(n){return!!n&&"mapValue"in n}function lC(n){var t,i;return((i=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[vw])==null?void 0:i.stringValue)===ww}function rl(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Ui(n.mapValue.fields,((t,i)=>e.mapValue.fields[t]=rl(i))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=rl(n.arrayValue.values[t]);return e}return{...n}}function uC(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===aC}/**
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
 */class hn{constructor(e){this.value=e}static empty(){return new hn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!rc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=rl(t)}setAll(e){let t=Nt.emptyPath(),i={},o=[];e.forEach(((c,f)=>{if(!t.isImmediateParentOf(f)){const p=this.getFieldsMap(t);this.applyChanges(p,i,o),i={},o=[],t=f.popLast()}c?i[f.lastSegment()]=rl(c):o.push(f.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,i,o)}delete(e){const t=this.field(e.popLast());rc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return fr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let o=t.mapValue.fields[e.get(i)];rc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,i){Ui(t,((o,l)=>e[o]=l));for(const o of i)delete e[o]}clone(){return new hn(rl(this.value))}}function Ew(n){const e=[];return Ui(n.fields,((t,i)=>{const o=new Nt([t]);if(rc(i)){const l=Ew(i.mapValue).fields;if(l.length===0)e.push(o);else for(const c of l)e.push(o.child(c))}else e.push(o)})),new Mn(e)}/**
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
 */class wc{constructor(e,t){this.position=e,this.inclusive=t}}function Yy(n,e,t){let i=0;for(let o=0;o<n.position.length;o++){const l=e[o],c=n.position[o];if(l.field.isKeyField()?i=fe.comparator(fe.fromName(c.referenceValue),t.key):i=Lo(c,t.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function Jy(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!fr(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class ml{constructor(e,t="asc"){this.field=e,this.dir=t}}function cC(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Tw{}class mt extends Tw{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new dC(e,t,i):t==="array-contains"?new mC(e,i):t==="in"?new gC(e,i):t==="not-in"?new yC(e,i):t==="array-contains-any"?new _C(e,i):new mt(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new fC(e,i):new pC(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Lo(t,this.value)):t!==null&&bi(this.value)===bi(t)&&this.matchesComparison(Lo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return _e(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class jn extends Tw{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new jn(e,t)}matches(e){return Iw(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Iw(n){return n.op==="and"}function Sw(n){return hC(n)&&Iw(n)}function hC(n){for(const e of n.filters)if(e instanceof jn)return!1;return!0}function pf(n){if(n instanceof mt)return n.field.canonicalString()+n.op.toString()+Mo(n.value);if(Sw(n))return n.filters.map((e=>pf(e))).join(",");{const e=n.filters.map((t=>pf(t))).join(",");return`${n.op}(${e})`}}function Aw(n,e){return n instanceof mt?(function(i,o){return o instanceof mt&&i.op===o.op&&i.field.isEqual(o.field)&&fr(i.value,o.value)})(n,e):n instanceof jn?(function(i,o){return o instanceof jn&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce(((l,c,f)=>l&&Aw(c,o.filters[f])),!0):!1})(n,e):void _e(19439)}function Rw(n){return n instanceof mt?(function(t){return`${t.field.canonicalString()} ${t.op} ${Mo(t.value)}`})(n):n instanceof jn?(function(t){return t.op.toString()+" {"+t.getFilters().map(Rw).join(" ,")+"}"})(n):"Filter"}class dC extends mt{constructor(e,t,i){super(e,t,i),this.key=fe.fromName(i.referenceValue)}matches(e){const t=fe.comparator(e.key,this.key);return this.matchesComparison(t)}}class fC extends mt{constructor(e,t){super(e,"in",t),this.keys=Cw("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class pC extends mt{constructor(e,t){super(e,"not-in",t),this.keys=Cw("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Cw(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((i=>fe.fromName(i.referenceValue)))}class mC extends mt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Gf(t)&&pl(t.arrayValue,this.value)}}class gC extends mt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&pl(this.value.arrayValue,t)}}class yC extends mt{constructor(e,t){super(e,"not-in",t)}matches(e){if(pl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!pl(this.value.arrayValue,t)}}class _C extends mt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Gf(t)||!t.arrayValue.values)&&t.arrayValue.values.some((i=>pl(this.value.arrayValue,i)))}}/**
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
 */class vC{constructor(e,t=null,i=[],o=[],l=null,c=null,f=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=o,this.limit=l,this.startAt=c,this.endAt=f,this.Te=null}}function Xy(n,e=null,t=[],i=[],o=null,l=null,c=null){return new vC(n,e,t,i,o,l,c)}function Qf(n){const e=Te(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((i=>pf(i))).join(","),t+="|ob:",t+=e.orderBy.map((i=>(function(l){return l.field.canonicalString()+l.dir})(i))).join(","),Bc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((i=>Mo(i))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((i=>Mo(i))).join(",")),e.Te=t}return e.Te}function Yf(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!cC(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Aw(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Jy(n.startAt,e.startAt)&&Jy(n.endAt,e.endAt)}function mf(n){return fe.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Qo{constructor(e,t=null,i=[],o=[],l=null,c="F",f=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=o,this.limit=l,this.limitType=c,this.startAt=f,this.endAt=p,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function wC(n,e,t,i,o,l,c,f){return new Qo(n,e,t,i,o,l,c,f)}function Jf(n){return new Qo(n)}function Zy(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function EC(n){return fe.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Pw(n){return n.collectionGroup!==null}function il(n){const e=Te(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const l of e.explicitOrderBy)e.Ie.push(l),t.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let f=new wt(Nt.comparator);return c.filters.forEach((p=>{p.getFlattenedFilters().forEach((y=>{y.isInequality()&&(f=f.add(y.field))}))})),f})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.Ie.push(new ml(l,i))})),t.has(Nt.keyField().canonicalString())||e.Ie.push(new ml(Nt.keyField(),i))}return e.Ie}function lr(n){const e=Te(n);return e.Ee||(e.Ee=TC(e,il(n))),e.Ee}function TC(n,e){if(n.limitType==="F")return Xy(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((o=>{const l=o.dir==="desc"?"asc":"desc";return new ml(o.field,l)}));const t=n.endAt?new wc(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new wc(n.startAt.position,n.startAt.inclusive):null;return Xy(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function gf(n,e){const t=n.filters.concat([e]);return new Qo(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function IC(n,e){const t=n.explicitOrderBy.concat([e]);return new Qo(n.path,n.collectionGroup,t,n.filters.slice(),n.limit,n.limitType,n.startAt,n.endAt)}function yf(n,e,t){return new Qo(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function qc(n,e){return Yf(lr(n),lr(e))&&n.limitType===e.limitType}function kw(n){return`${Qf(lr(n))}|lt:${n.limitType}`}function To(n){return`Query(target=${(function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map((o=>Rw(o))).join(", ")}]`),Bc(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map((o=>(function(c){return`${c.field.canonicalString()} (${c.dir})`})(o))).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map((o=>Mo(o))).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map((o=>Mo(o))).join(",")),`Target(${i})`})(lr(n))}; limitType=${n.limitType})`}function Wc(n,e){return e.isFoundDocument()&&(function(i,o){const l=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):fe.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)})(n,e)&&(function(i,o){for(const l of il(i))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0})(n,e)&&(function(i,o){for(const l of i.filters)if(!l.matches(o))return!1;return!0})(n,e)&&(function(i,o){return!(i.startAt&&!(function(c,f,p){const y=Yy(c,f,p);return c.inclusive?y<=0:y<0})(i.startAt,il(i),o)||i.endAt&&!(function(c,f,p){const y=Yy(c,f,p);return c.inclusive?y>=0:y>0})(i.endAt,il(i),o))})(n,e)}function SC(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function xw(n){return(e,t)=>{let i=!1;for(const o of il(n)){const l=AC(o,e,t);if(l!==0)return l;i=i||o.field.isKeyField()}return 0}}function AC(n,e,t){const i=n.field.isKeyField()?fe.comparator(e.key,t.key):(function(l,c,f){const p=c.data.field(l),y=f.data.field(l);return p!==null&&y!==null?Lo(p,y):_e(42886)})(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return _e(19790,{direction:n.dir})}}/**
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
 */class Ps{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[o,l]of i)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),o=this.inner[i];if(o===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return i.length===1?delete this.inner[t]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Ui(this.inner,((t,i)=>{for(const[o,l]of i)e(o,l)}))}isEmpty(){return fw(this.inner)}size(){return this.innerSize}}/**
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
 */const RC=new nt(fe.comparator);function Ur(){return RC}const Nw=new nt(fe.comparator);function Qa(...n){let e=Nw;for(const t of n)e=e.insert(t.key,t);return e}function Dw(n){let e=Nw;return n.forEach(((t,i)=>e=e.insert(t,i.overlayedDocument))),e}function ms(){return sl()}function Vw(){return sl()}function sl(){return new Ps((n=>n.toString()),((n,e)=>n.isEqual(e)))}const CC=new nt(fe.comparator),PC=new wt(fe.comparator);function De(...n){let e=PC;for(const t of n)e=e.add(t);return e}const kC=new wt(Ne);function xC(){return kC}/**
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
 */function Xf(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:yc(e)?"-0":e}}function bw(n){return{integerValue:""+n}}function NC(n,e){return tC(e)?bw(e):Xf(n,e)}/**
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
 */class Hc{constructor(){this._=void 0}}function DC(n,e,t){return n instanceof Ec?(function(o,l){const c={fields:{[gw]:{stringValue:mw},[_w]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&Kf(l)&&(l=$c(l)),l&&(c.fields[yw]=l),{mapValue:c}})(t,e):n instanceof gl?Lw(n,e):n instanceof yl?Mw(n,e):(function(o,l){const c=Ow(o,l),f=e_(c)+e_(o.Ae);return ff(c)&&ff(o.Ae)?bw(f):Xf(o.serializer,f)})(n,e)}function VC(n,e,t){return n instanceof gl?Lw(n,e):n instanceof yl?Mw(n,e):t}function Ow(n,e){return n instanceof Tc?(function(i){return ff(i)||(function(l){return!!l&&"doubleValue"in l})(i)})(e)?e:{integerValue:0}:null}class Ec extends Hc{}class gl extends Hc{constructor(e){super(),this.elements=e}}function Lw(n,e){const t=Fw(e);for(const i of n.elements)t.some((o=>fr(o,i)))||t.push(i);return{arrayValue:{values:t}}}class yl extends Hc{constructor(e){super(),this.elements=e}}function Mw(n,e){let t=Fw(e);for(const i of n.elements)t=t.filter((o=>!fr(o,i)));return{arrayValue:{values:t}}}class Tc extends Hc{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function e_(n){return ut(n.integerValue||n.doubleValue)}function Fw(n){return Gf(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function bC(n,e){return n.field.isEqual(e.field)&&(function(i,o){return i instanceof gl&&o instanceof gl||i instanceof yl&&o instanceof yl?Oo(i.elements,o.elements,fr):i instanceof Tc&&o instanceof Tc?fr(i.Ae,o.Ae):i instanceof Ec&&o instanceof Ec})(n.transform,e.transform)}class OC{constructor(e,t){this.version=e,this.transformResults=t}}class ur{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ur}static exists(e){return new ur(void 0,e)}static updateTime(e){return new ur(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ic(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Kc{}function Uw(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Zf(n.key,ur.none()):new Gc(n.key,n.data,ur.none());{const t=n.data,i=hn.empty();let o=new wt(Nt.comparator);for(let l of e.fields)if(!o.has(l)){let c=t.field(l);c===null&&l.length>1&&(l=l.popLast(),c=t.field(l)),c===null?i.delete(l):i.set(l,c),o=o.add(l)}return new ks(n.key,i,new Mn(o.toArray()),ur.none())}}function LC(n,e,t){n instanceof Gc?(function(o,l,c){const f=o.value.clone(),p=n_(o.fieldTransforms,l,c.transformResults);f.setAll(p),l.convertToFoundDocument(c.version,f).setHasCommittedMutations()})(n,e,t):n instanceof ks?(function(o,l,c){if(!ic(o.precondition,l))return void l.convertToUnknownDocument(c.version);const f=n_(o.fieldTransforms,l,c.transformResults),p=l.data;p.setAll(jw(o)),p.setAll(f),l.convertToFoundDocument(c.version,p).setHasCommittedMutations()})(n,e,t):(function(o,l,c){l.convertToNoDocument(c.version).setHasCommittedMutations()})(0,e,t)}function ol(n,e,t,i){return n instanceof Gc?(function(l,c,f,p){if(!ic(l.precondition,c))return f;const y=l.value.clone(),w=r_(l.fieldTransforms,p,c);return y.setAll(w),c.convertToFoundDocument(c.version,y).setHasLocalMutations(),null})(n,e,t,i):n instanceof ks?(function(l,c,f,p){if(!ic(l.precondition,c))return f;const y=r_(l.fieldTransforms,p,c),w=c.data;return w.setAll(jw(l)),w.setAll(y),c.convertToFoundDocument(c.version,w).setHasLocalMutations(),f===null?null:f.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((E=>E.field)))})(n,e,t,i):(function(l,c,f){return ic(l.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):f})(n,e,t)}function MC(n,e){let t=null;for(const i of n.fieldTransforms){const o=e.data.field(i.field),l=Ow(i.transform,o||null);l!=null&&(t===null&&(t=hn.empty()),t.set(i.field,l))}return t||null}function t_(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&Oo(i,o,((l,c)=>bC(l,c)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Gc extends Kc{constructor(e,t,i,o=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class ks extends Kc{constructor(e,t,i,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function jw(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}})),e}function n_(n,e,t){const i=new Map;je(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let o=0;o<t.length;o++){const l=n[o],c=l.transform,f=e.data.field(l.field);i.set(l.field,VC(c,f,t[o]))}return i}function r_(n,e,t){const i=new Map;for(const o of n){const l=o.transform,c=t.data.field(o.field);i.set(o.field,DC(l,c,e))}return i}class Zf extends Kc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class FC extends Kc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class UC{constructor(e,t,i,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&LC(l,e,i[o])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=ol(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=ol(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=Vw();return this.mutations.forEach((o=>{const l=e.get(o.key),c=l.overlayedDocument;let f=this.applyToLocalView(c,l.mutatedFields);f=t.has(o.key)?null:f;const p=Uw(c,f);p!==null&&i.set(o.key,p),c.isValidDocument()||c.convertToNoDocument(we.min())})),i}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),De())}isEqual(e){return this.batchId===e.batchId&&Oo(this.mutations,e.mutations,((t,i)=>t_(t,i)))&&Oo(this.baseMutations,e.baseMutations,((t,i)=>t_(t,i)))}}class ep{constructor(e,t,i,o){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=o}static from(e,t,i){je(e.mutations.length===i.length,58842,{me:e.mutations.length,fe:i.length});let o=(function(){return CC})();const l=e.mutations;for(let c=0;c<l.length;c++)o=o.insert(l[c].key,i[c].version);return new ep(e,t,i,o)}}/**
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
 */class jC{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class zC{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var ft,be;function BC(n){switch(n){case W.OK:return _e(64938);case W.CANCELLED:case W.UNKNOWN:case W.DEADLINE_EXCEEDED:case W.RESOURCE_EXHAUSTED:case W.INTERNAL:case W.UNAVAILABLE:case W.UNAUTHENTICATED:return!1;case W.INVALID_ARGUMENT:case W.NOT_FOUND:case W.ALREADY_EXISTS:case W.PERMISSION_DENIED:case W.FAILED_PRECONDITION:case W.ABORTED:case W.OUT_OF_RANGE:case W.UNIMPLEMENTED:case W.DATA_LOSS:return!0;default:return _e(15467,{code:n})}}function zw(n){if(n===void 0)return Fr("GRPC error has no .code"),W.UNKNOWN;switch(n){case ft.OK:return W.OK;case ft.CANCELLED:return W.CANCELLED;case ft.UNKNOWN:return W.UNKNOWN;case ft.DEADLINE_EXCEEDED:return W.DEADLINE_EXCEEDED;case ft.RESOURCE_EXHAUSTED:return W.RESOURCE_EXHAUSTED;case ft.INTERNAL:return W.INTERNAL;case ft.UNAVAILABLE:return W.UNAVAILABLE;case ft.UNAUTHENTICATED:return W.UNAUTHENTICATED;case ft.INVALID_ARGUMENT:return W.INVALID_ARGUMENT;case ft.NOT_FOUND:return W.NOT_FOUND;case ft.ALREADY_EXISTS:return W.ALREADY_EXISTS;case ft.PERMISSION_DENIED:return W.PERMISSION_DENIED;case ft.FAILED_PRECONDITION:return W.FAILED_PRECONDITION;case ft.ABORTED:return W.ABORTED;case ft.OUT_OF_RANGE:return W.OUT_OF_RANGE;case ft.UNIMPLEMENTED:return W.UNIMPLEMENTED;case ft.DATA_LOSS:return W.DATA_LOSS;default:return _e(39323,{code:n})}}(be=ft||(ft={}))[be.OK=0]="OK",be[be.CANCELLED=1]="CANCELLED",be[be.UNKNOWN=2]="UNKNOWN",be[be.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",be[be.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",be[be.NOT_FOUND=5]="NOT_FOUND",be[be.ALREADY_EXISTS=6]="ALREADY_EXISTS",be[be.PERMISSION_DENIED=7]="PERMISSION_DENIED",be[be.UNAUTHENTICATED=16]="UNAUTHENTICATED",be[be.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",be[be.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",be[be.ABORTED=10]="ABORTED",be[be.OUT_OF_RANGE=11]="OUT_OF_RANGE",be[be.UNIMPLEMENTED=12]="UNIMPLEMENTED",be[be.INTERNAL=13]="INTERNAL",be[be.UNAVAILABLE=14]="UNAVAILABLE",be[be.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function $C(){return new TextEncoder}/**
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
 */const qC=new Pi([4294967295,4294967295],0);function i_(n){const e=$C().encode(n),t=new nw;return t.update(e),new Uint8Array(t.digest())}function s_(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new Pi([t,i],0),new Pi([o,l],0)]}class tp{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new Ya(`Invalid padding: ${t}`);if(i<0)throw new Ya(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new Ya(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new Ya(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Pi.fromNumber(this.ge)}ye(e,t,i){let o=e.add(t.multiply(Pi.fromNumber(i)));return o.compare(qC)===1&&(o=new Pi([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=i_(e),[i,o]=s_(t);for(let l=0;l<this.hashCount;l++){const c=this.ye(i,o,l);if(!this.we(c))return!1}return!0}static create(e,t,i){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),c=new tp(l,o,t);return i.forEach((f=>c.insert(f))),c}insert(e){if(this.ge===0)return;const t=i_(e),[i,o]=s_(t);for(let l=0;l<this.hashCount;l++){const c=this.ye(i,o,l);this.be(c)}}be(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class Ya extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Qc{constructor(e,t,i,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const o=new Map;return o.set(e,Al.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new Qc(we.min(),o,new nt(Ne),Ur(),De())}}class Al{constructor(e,t,i,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new Al(i,t,De(),De(),De())}}/**
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
 */class sc{constructor(e,t,i,o){this.Se=e,this.removedTargetIds=t,this.key=i,this.De=o}}class Bw{constructor(e,t){this.targetId=e,this.Ce=t}}class $w{constructor(e,t,i=Dt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=o}}class o_{constructor(){this.ve=0,this.Fe=a_(),this.Me=Dt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=De(),t=De(),i=De();return this.Fe.forEach(((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:i=i.add(o);break;default:_e(38017,{changeType:l})}})),new Al(this.Me,this.xe,e,t,i)}Ke(){this.Oe=!1,this.Fe=a_()}qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,je(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class WC{constructor(e){this.Ge=e,this.ze=new Map,this.je=Ur(),this.He=Qu(),this.Je=Qu(),this.Ze=new nt(Ne)}Xe(e){for(const t of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const i=this.nt(t);switch(e.state){case 0:this.rt(t)&&i.Le(e.resumeToken);break;case 1:i.We(),i.Ne||i.Ke(),i.Le(e.resumeToken);break;case 2:i.We(),i.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(i.Qe(),i.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),i.Le(e.resumeToken));break;default:_e(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((i,o)=>{this.rt(o)&&t(o)}))}st(e){const t=e.targetId,i=e.Ce.count,o=this.ot(t);if(o){const l=o.target;if(mf(l))if(i===0){const c=new fe(l.path);this.et(t,c,zt.newNoDocument(c,we.min()))}else je(i===1,20013,{expectedCount:i});else{const c=this._t(t);if(c!==i){const f=this.ut(e),p=f?this.ct(f,e,c):1;if(p!==0){this.it(t);const y=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,y)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:l=0}=t;let c,f;try{c=Vi(i).toUint8Array()}catch(p){if(p instanceof pw)return Ts("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{f=new tp(c,o,l)}catch(p){return Ts(p instanceof Ya?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return f.ge===0?null:f}ct(e,t,i){return t.Ce.count===i-this.Pt(e,t.targetId)?0:2}Pt(e,t){const i=this.Ge.getRemoteKeysForTarget(t);let o=0;return i.forEach((l=>{const c=this.Ge.ht(),f=`projects/${c.projectId}/databases/${c.database}/documents/${l.path.canonicalString()}`;e.mightContain(f)||(this.et(t,l,null),o++)})),o}Tt(e){const t=new Map;this.ze.forEach(((l,c)=>{const f=this.ot(c);if(f){if(l.current&&mf(f.target)){const p=new fe(f.target.path);this.It(p).has(c)||this.Et(c,p)||this.et(c,p,zt.newNoDocument(p,e))}l.Be&&(t.set(c,l.ke()),l.Ke())}}));let i=De();this.Je.forEach(((l,c)=>{let f=!0;c.forEachWhile((p=>{const y=this.ot(p);return!y||y.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)})),f&&(i=i.add(l))})),this.je.forEach(((l,c)=>c.setReadTime(e)));const o=new Qc(e,t,this.Ze,this.je,i);return this.je=Ur(),this.He=Qu(),this.Je=Qu(),this.Ze=new nt(Ne),o}Ye(e,t){if(!this.rt(e))return;const i=this.Et(e,t.key)?2:0;this.nt(e).qe(t.key,i),this.je=this.je.insert(t.key,t),this.He=this.He.insert(t.key,this.It(t.key).add(e)),this.Je=this.Je.insert(t.key,this.Rt(t.key).add(e))}et(e,t,i){if(!this.rt(e))return;const o=this.nt(e);this.Et(e,t)?o.qe(t,1):o.Ue(t),this.Je=this.Je.insert(t,this.Rt(t).delete(e)),this.Je=this.Je.insert(t,this.Rt(t).add(e)),i&&(this.je=this.je.insert(t,i))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new o_,this.ze.set(e,t)),t}Rt(e){let t=this.Je.get(e);return t||(t=new wt(Ne),this.Je=this.Je.insert(e,t)),t}It(e){let t=this.He.get(e);return t||(t=new wt(Ne),this.He=this.He.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||se("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new o_),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Qu(){return new nt(fe.comparator)}function a_(){return new nt(fe.comparator)}const HC={asc:"ASCENDING",desc:"DESCENDING"},KC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},GC={and:"AND",or:"OR"};class QC{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function _f(n,e){return n.useProto3Json||Bc(e)?e:{value:e}}function Ic(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function qw(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function YC(n,e){return Ic(n,e.toTimestamp())}function cr(n){return je(!!n,49232),we.fromTimestamp((function(t){const i=Di(t);return new Ye(i.seconds,i.nanos)})(n))}function np(n,e){return vf(n,e).canonicalString()}function vf(n,e){const t=(function(o){return new He(["projects",o.projectId,"databases",o.database])})(n).child("documents");return e===void 0?t:t.child(e)}function Ww(n){const e=He.fromString(n);return je(Yw(e),10190,{key:e.toString()}),e}function wf(n,e){return np(n.databaseId,e.path)}function qd(n,e){const t=Ww(e);if(t.get(1)!==n.databaseId.projectId)throw new ie(W.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new ie(W.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new fe(Kw(t))}function Hw(n,e){return np(n.databaseId,e)}function JC(n){const e=Ww(n);return e.length===4?He.emptyPath():Kw(e)}function Ef(n){return new He(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Kw(n){return je(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function l_(n,e,t){return{name:wf(n,e),fields:t.value.mapValue.fields}}function XC(n,e){let t;if("targetChange"in e){e.targetChange;const i=(function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:_e(39313,{state:y})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=(function(y,w){return y.useProto3Json?(je(w===void 0||typeof w=="string",58123),Dt.fromBase64String(w||"")):(je(w===void 0||w instanceof Buffer||w instanceof Uint8Array,16193),Dt.fromUint8Array(w||new Uint8Array))})(n,e.targetChange.resumeToken),c=e.targetChange.cause,f=c&&(function(y){const w=y.code===void 0?W.UNKNOWN:zw(y.code);return new ie(w,y.message||"")})(c);t=new $w(i,o,l,f||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const o=qd(n,i.document.name),l=cr(i.document.updateTime),c=i.document.createTime?cr(i.document.createTime):we.min(),f=new hn({mapValue:{fields:i.document.fields}}),p=zt.newFoundDocument(o,l,c,f),y=i.targetIds||[],w=i.removedTargetIds||[];t=new sc(y,w,p.key,p)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const o=qd(n,i.document),l=i.readTime?cr(i.readTime):we.min(),c=zt.newNoDocument(o,l),f=i.removedTargetIds||[];t=new sc([],f,c.key,c)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const o=qd(n,i.document),l=i.removedTargetIds||[];t=new sc([],l,o,null)}else{if(!("filter"in e))return _e(11601,{Vt:e});{e.filter;const i=e.filter;i.targetId;const{count:o=0,unchangedNames:l}=i,c=new zC(o,l),f=i.targetId;t=new Bw(f,c)}}return t}function ZC(n,e){let t;if(e instanceof Gc)t={update:l_(n,e.key,e.value)};else if(e instanceof Zf)t={delete:wf(n,e.key)};else if(e instanceof ks)t={update:l_(n,e.key,e.data),updateMask:lP(e.fieldMask)};else{if(!(e instanceof FC))return _e(16599,{dt:e.type});t={verify:wf(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((i=>(function(l,c){const f=c.transform;if(f instanceof Ec)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(f instanceof gl)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:f.elements}};if(f instanceof yl)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:f.elements}};if(f instanceof Tc)return{fieldPath:c.field.canonicalString(),increment:f.Ae};throw _e(20930,{transform:c.transform})})(0,i)))),e.precondition.isNone||(t.currentDocument=(function(o,l){return l.updateTime!==void 0?{updateTime:YC(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:_e(27497)})(n,e.precondition)),t}function eP(n,e){return n&&n.length>0?(je(e!==void 0,14353),n.map((t=>(function(o,l){let c=o.updateTime?cr(o.updateTime):cr(l);return c.isEqual(we.min())&&(c=cr(l)),new OC(c,o.transformResults||[])})(t,e)))):[]}function tP(n,e){return{documents:[Hw(n,e.path)]}}function nP(n,e){const t={structuredQuery:{}},i=e.path;let o;e.collectionGroup!==null?(o=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=Hw(n,o);const l=(function(y){if(y.length!==0)return Qw(jn.create(y,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const c=(function(y){if(y.length!==0)return y.map((w=>(function(I){return{field:Io(I.field),direction:sP(I.dir)}})(w)))})(e.orderBy);c&&(t.structuredQuery.orderBy=c);const f=_f(n,e.limit);return f!==null&&(t.structuredQuery.limit=f),e.startAt&&(t.structuredQuery.startAt=(function(y){return{before:y.inclusive,values:y.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(y){return{before:!y.inclusive,values:y.position}})(e.endAt)),{ft:t,parent:o}}function rP(n){let e=JC(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let o=null;if(i>0){je(i===1,65062);const w=t.from[0];w.allDescendants?o=w.collectionId:e=e.child(w.collectionId)}let l=[];t.where&&(l=(function(E){const I=Gw(E);return I instanceof jn&&Sw(I)?I.getFilters():[I]})(t.where));let c=[];t.orderBy&&(c=(function(E){return E.map((I=>(function($){return new ml(So($.field),(function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})($.direction))})(I)))})(t.orderBy));let f=null;t.limit&&(f=(function(E){let I;return I=typeof E=="object"?E.value:E,Bc(I)?null:I})(t.limit));let p=null;t.startAt&&(p=(function(E){const I=!!E.before,U=E.values||[];return new wc(U,I)})(t.startAt));let y=null;return t.endAt&&(y=(function(E){const I=!E.before,U=E.values||[];return new wc(U,I)})(t.endAt)),wC(e,o,c,l,f,"F",p,y)}function iP(n,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return _e(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Gw(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=So(t.unaryFilter.field);return mt.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=So(t.unaryFilter.field);return mt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=So(t.unaryFilter.field);return mt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=So(t.unaryFilter.field);return mt.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return _e(61313);default:return _e(60726)}})(n):n.fieldFilter!==void 0?(function(t){return mt.create(So(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return _e(58110);default:return _e(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return jn.create(t.compositeFilter.filters.map((i=>Gw(i))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return _e(1026)}})(t.compositeFilter.op))})(n):_e(30097,{filter:n})}function sP(n){return HC[n]}function oP(n){return KC[n]}function aP(n){return GC[n]}function Io(n){return{fieldPath:n.canonicalString()}}function So(n){return Nt.fromServerFormat(n.fieldPath)}function Qw(n){return n instanceof mt?(function(t){if(t.op==="=="){if(Qy(t.value))return{unaryFilter:{field:Io(t.field),op:"IS_NAN"}};if(Gy(t.value))return{unaryFilter:{field:Io(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Qy(t.value))return{unaryFilter:{field:Io(t.field),op:"IS_NOT_NAN"}};if(Gy(t.value))return{unaryFilter:{field:Io(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Io(t.field),op:oP(t.op),value:t.value}}})(n):n instanceof jn?(function(t){const i=t.getFilters().map((o=>Qw(o)));return i.length===1?i[0]:{compositeFilter:{op:aP(t.op),filters:i}}})(n):_e(54877,{filter:n})}function lP(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Yw(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function Jw(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
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
 */class Ii{constructor(e,t,i,o,l=we.min(),c=we.min(),f=Dt.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=f,this.expectedCount=p}withSequenceNumber(e){return new Ii(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ii(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ii(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ii(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class uP{constructor(e){this.yt=e}}function cP(n){const e=rP({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?yf(e,e.limit,"L"):e}/**
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
 */class hP{constructor(){this.Sn=new dP}addToCollectionParentIndex(e,t){return this.Sn.add(t),H.resolve()}getCollectionParents(e,t){return H.resolve(this.Sn.getEntries(t))}addFieldIndex(e,t){return H.resolve()}deleteFieldIndex(e,t){return H.resolve()}deleteAllFieldIndexes(e){return H.resolve()}createTargetIndexes(e,t){return H.resolve()}getDocumentsMatchingTarget(e,t){return H.resolve(null)}getIndexType(e,t){return H.resolve(0)}getFieldIndexes(e,t){return H.resolve([])}getNextCollectionGroupToUpdate(e){return H.resolve(null)}getMinOffset(e,t){return H.resolve(Ni.min())}getMinOffsetFromCollectionGroup(e,t){return H.resolve(Ni.min())}updateCollectionGroup(e,t,i){return H.resolve()}updateIndexEntries(e,t){return H.resolve()}}class dP{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t]||new wt(He.comparator),l=!o.has(i);return this.index[t]=o.add(i),l}has(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t];return o&&o.has(i)}getEntries(e){return(this.index[e]||new wt(He.comparator)).toArray()}}/**
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
 */const u_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Xw=41943040;class en{static withCacheSize(e){return new en(e,en.DEFAULT_COLLECTION_PERCENTILE,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
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
 */en.DEFAULT_COLLECTION_PERCENTILE=10,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,en.DEFAULT=new en(Xw,en.DEFAULT_COLLECTION_PERCENTILE,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),en.DISABLED=new en(-1,0,0);/**
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
 */class Fo{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Fo(0)}static ar(){return new Fo(-1)}}/**
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
 */const c_="LruGarbageCollector",fP=1048576;function h_([n,e],[t,i]){const o=Ne(n,t);return o===0?Ne(e,i):o}class pP{constructor(e){this.Pr=e,this.buffer=new wt(h_),this.Tr=0}Ir(){return++this.Tr}Er(e){const t=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();h_(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class mP{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){se(c_,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Go(t)?se(c_,"Ignoring IndexedDB error during garbage collection: ",t):await Ko(t)}await this.Ar(3e5)}))}}class gP{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((i=>Math.floor(t/100*i)))}nthSequenceNumber(e,t){if(t===0)return H.resolve(zc.ce);const i=new pP(t);return this.Vr.forEachTarget(e,(o=>i.Er(o.sequenceNumber))).next((()=>this.Vr.mr(e,(o=>i.Er(o))))).next((()=>i.maxValue))}removeTargets(e,t,i){return this.Vr.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(se("LruGarbageCollector","Garbage collection skipped; disabled"),H.resolve(u_)):this.getCacheSize(e).next((i=>i<this.params.cacheSizeCollectionThreshold?(se("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),u_):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let i,o,l,c,f,p,y;const w=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((E=>(E>this.params.maximumSequenceNumbersToCollect?(se("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${E}`),o=this.params.maximumSequenceNumbersToCollect):o=E,c=Date.now(),this.nthSequenceNumber(e,o)))).next((E=>(i=E,f=Date.now(),this.removeTargets(e,i,t)))).next((E=>(l=E,p=Date.now(),this.removeOrphanedDocuments(e,i)))).next((E=>(y=Date.now(),Eo()<=xe.DEBUG&&se("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-w}ms
	Determined least recently used ${o} in `+(f-c)+`ms
	Removed ${l} targets in `+(p-f)+`ms
	Removed ${E} documents in `+(y-p)+`ms
Total Duration: ${y-w}ms`),H.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:E}))))}}function yP(n,e){return new gP(n,e)}/**
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
 */class _P{constructor(){this.changes=new Ps((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,zt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?H.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class vP{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class wP{constructor(e,t,i,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=o}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(i=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(i!==null&&ol(i.mutation,o,Mn.empty(),Ye.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.getLocalViewOfDocuments(e,i,De()).next((()=>i))))}getLocalViewOfDocuments(e,t,i=De()){const o=ms();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,i).next((l=>{let c=Qa();return l.forEach(((f,p)=>{c=c.insert(f,p.overlayedDocument)})),c}))))}getOverlayedDocuments(e,t){const i=ms();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,De())))}populateOverlays(e,t,i){const o=[];return i.forEach((l=>{t.has(l)||o.push(l)})),this.documentOverlayCache.getOverlays(e,o).next((l=>{l.forEach(((c,f)=>{t.set(c,f)}))}))}computeViews(e,t,i,o){let l=Ur();const c=sl(),f=(function(){return sl()})();return t.forEach(((p,y)=>{const w=i.get(y.key);o.has(y.key)&&(w===void 0||w.mutation instanceof ks)?l=l.insert(y.key,y):w!==void 0?(c.set(y.key,w.mutation.getFieldMask()),ol(w.mutation,y,w.mutation.getFieldMask(),Ye.now())):c.set(y.key,Mn.empty())})),this.recalculateAndSaveOverlays(e,l).next((p=>(p.forEach(((y,w)=>c.set(y,w))),t.forEach(((y,w)=>f.set(y,new vP(w,c.get(y)??null)))),f)))}recalculateAndSaveOverlays(e,t){const i=sl();let o=new nt(((c,f)=>c-f)),l=De();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((c=>{for(const f of c)f.keys().forEach((p=>{const y=t.get(p);if(y===null)return;let w=i.get(p)||Mn.empty();w=f.applyToLocalView(y,w),i.set(p,w);const E=(o.get(f.batchId)||De()).add(p);o=o.insert(f.batchId,E)}))})).next((()=>{const c=[],f=o.getReverseIterator();for(;f.hasNext();){const p=f.getNext(),y=p.key,w=p.value,E=Vw();w.forEach((I=>{if(!l.has(I)){const U=Uw(t.get(I),i.get(I));U!==null&&E.set(I,U),l=l.add(I)}})),c.push(this.documentOverlayCache.saveOverlays(e,y,E))}return H.waitFor(c)})).next((()=>i))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.recalculateAndSaveOverlays(e,i)))}getDocumentsMatchingQuery(e,t,i,o){return EC(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Pw(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,o):this.getDocumentsMatchingCollectionQuery(e,t,i,o)}getNextDocuments(e,t,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,o).next((l=>{const c=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,o-l.size):H.resolve(ms());let f=hl,p=l;return c.next((y=>H.forEach(y,((w,E)=>(f<E.largestBatchId&&(f=E.largestBatchId),l.get(w)?H.resolve():this.remoteDocumentCache.getEntry(e,w).next((I=>{p=p.insert(w,I)}))))).next((()=>this.populateOverlays(e,y,l))).next((()=>this.computeViews(e,p,y,De()))).next((w=>({batchId:f,changes:Dw(w)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new fe(t)).next((i=>{let o=Qa();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,i,o){const l=t.collectionGroup;let c=Qa();return this.indexManager.getCollectionParents(e,l).next((f=>H.forEach(f,(p=>{const y=(function(E,I){return new Qo(I,null,E.explicitOrderBy.slice(),E.filters.slice(),E.limit,E.limitType,E.startAt,E.endAt)})(t,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,y,i,o).next((w=>{w.forEach(((E,I)=>{c=c.insert(E,I)}))}))})).next((()=>c))))}getDocumentsMatchingCollectionQuery(e,t,i,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next((c=>(l=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,l,o)))).next((c=>{l.forEach(((p,y)=>{const w=y.getKey();c.get(w)===null&&(c=c.insert(w,zt.newInvalidDocument(w)))}));let f=Qa();return c.forEach(((p,y)=>{const w=l.get(p);w!==void 0&&ol(w.mutation,y,Mn.empty(),Ye.now()),Wc(t,y)&&(f=f.insert(p,y))})),f}))}}/**
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
 */class EP{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return H.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:cr(o.createTime)}})(t)),H.resolve()}getNamedQuery(e,t){return H.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(o){return{name:o.name,query:cP(o.bundledQuery),readTime:cr(o.readTime)}})(t)),H.resolve()}}/**
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
 */class TP{constructor(){this.overlays=new nt(fe.comparator),this.Lr=new Map}getOverlay(e,t){return H.resolve(this.overlays.get(t))}getOverlays(e,t){const i=ms();return H.forEach(t,(o=>this.getOverlay(e,o).next((l=>{l!==null&&i.set(o,l)})))).next((()=>i))}saveOverlays(e,t,i){return i.forEach(((o,l)=>{this.bt(e,t,l)})),H.resolve()}removeOverlaysForBatchId(e,t,i){const o=this.Lr.get(i);return o!==void 0&&(o.forEach((l=>this.overlays=this.overlays.remove(l))),this.Lr.delete(i)),H.resolve()}getOverlaysForCollection(e,t,i){const o=ms(),l=t.length+1,c=new fe(t.child("")),f=this.overlays.getIteratorFrom(c);for(;f.hasNext();){const p=f.getNext().value,y=p.getKey();if(!t.isPrefixOf(y.path))break;y.path.length===l&&p.largestBatchId>i&&o.set(p.getKey(),p)}return H.resolve(o)}getOverlaysForCollectionGroup(e,t,i,o){let l=new nt(((y,w)=>y-w));const c=this.overlays.getIterator();for(;c.hasNext();){const y=c.getNext().value;if(y.getKey().getCollectionGroup()===t&&y.largestBatchId>i){let w=l.get(y.largestBatchId);w===null&&(w=ms(),l=l.insert(y.largestBatchId,w)),w.set(y.getKey(),y)}}const f=ms(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach(((y,w)=>f.set(y,w))),!(f.size()>=o)););return H.resolve(f)}bt(e,t,i){const o=this.overlays.get(i.key);if(o!==null){const c=this.Lr.get(o.largestBatchId).delete(i.key);this.Lr.set(o.largestBatchId,c)}this.overlays=this.overlays.insert(i.key,new jC(t,i));let l=this.Lr.get(t);l===void 0&&(l=De(),this.Lr.set(t,l)),this.Lr.set(t,l.add(i.key))}}/**
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
 */class IP{constructor(){this.sessionToken=Dt.EMPTY_BYTE_STRING}getSessionToken(e){return H.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,H.resolve()}}/**
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
 */class rp{constructor(){this.kr=new wt(At.Kr),this.qr=new wt(At.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const i=new At(e,t);this.kr=this.kr.add(i),this.qr=this.qr.add(i)}$r(e,t){e.forEach((i=>this.addReference(i,t)))}removeReference(e,t){this.Wr(new At(e,t))}Qr(e,t){e.forEach((i=>this.removeReference(i,t)))}Gr(e){const t=new fe(new He([])),i=new At(t,e),o=new At(t,e+1),l=[];return this.qr.forEachInRange([i,o],(c=>{this.Wr(c),l.push(c.key)})),l}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const t=new fe(new He([])),i=new At(t,e),o=new At(t,e+1);let l=De();return this.qr.forEachInRange([i,o],(c=>{l=l.add(c.key)})),l}containsKey(e){const t=new At(e,0),i=this.kr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class At{constructor(e,t){this.key=e,this.Hr=t}static Kr(e,t){return fe.comparator(e.key,t.key)||Ne(e.Hr,t.Hr)}static Ur(e,t){return Ne(e.Hr,t.Hr)||fe.comparator(e.key,t.key)}}/**
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
 */class SP{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Jr=new wt(At.Kr)}checkEmpty(e){return H.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,o){const l=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new UC(l,t,i,o);this.mutationQueue.push(c);for(const f of o)this.Jr=this.Jr.add(new At(f.key,l)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast());return H.resolve(c)}lookupMutationBatch(e,t){return H.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,o=this.Xr(i),l=o<0?0:o;return H.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return H.resolve(this.mutationQueue.length===0?Hf:this.Yn-1)}getAllMutationBatches(e){return H.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new At(t,0),o=new At(t,Number.POSITIVE_INFINITY),l=[];return this.Jr.forEachInRange([i,o],(c=>{const f=this.Zr(c.Hr);l.push(f)})),H.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new wt(Ne);return t.forEach((o=>{const l=new At(o,0),c=new At(o,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([l,c],(f=>{i=i.add(f.Hr)}))})),H.resolve(this.Yr(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,o=i.length+1;let l=i;fe.isDocumentKey(l)||(l=l.child(""));const c=new At(new fe(l),0);let f=new wt(Ne);return this.Jr.forEachWhile((p=>{const y=p.key.path;return!!i.isPrefixOf(y)&&(y.length===o&&(f=f.add(p.Hr)),!0)}),c),H.resolve(this.Yr(f))}Yr(e){const t=[];return e.forEach((i=>{const o=this.Zr(i);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){je(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Jr;return H.forEach(t.mutations,(o=>{const l=new At(o.key,t.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Jr=i}))}nr(e){}containsKey(e,t){const i=new At(t,0),o=this.Jr.firstAfterOrEqual(i);return H.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,H.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class AP{constructor(e){this.ti=e,this.docs=(function(){return new nt(fe.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,o=this.docs.get(i),l=o?o.size:0,c=this.ti(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:c}),this.size+=c-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return H.resolve(i?i.document.mutableCopy():zt.newInvalidDocument(t))}getEntries(e,t){let i=Ur();return t.forEach((o=>{const l=this.docs.get(o);i=i.insert(o,l?l.document.mutableCopy():zt.newInvalidDocument(o))})),H.resolve(i)}getDocumentsMatchingQuery(e,t,i,o){let l=Ur();const c=t.path,f=new fe(c.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(f);for(;p.hasNext();){const{key:y,value:{document:w}}=p.getNext();if(!c.isPrefixOf(y.path))break;y.path.length>c.length+1||JR(YR(w),i)<=0||(o.has(w.key)||Wc(t,w))&&(l=l.insert(w.key,w.mutableCopy()))}return H.resolve(l)}getAllFromCollectionGroup(e,t,i,o){_e(9500)}ni(e,t){return H.forEach(this.docs,(i=>t(i)))}newChangeBuffer(e){return new RP(this)}getSize(e){return H.resolve(this.size)}}class RP extends _P{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((i,o)=>{o.isValidDocument()?t.push(this.Mr.addEntry(e,o)):this.Mr.removeEntry(i)})),H.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
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
 */class CP{constructor(e){this.persistence=e,this.ri=new Ps((t=>Qf(t)),Yf),this.lastRemoteSnapshotVersion=we.min(),this.highestTargetId=0,this.ii=0,this.si=new rp,this.targetCount=0,this.oi=Fo._r()}forEachTarget(e,t){return this.ri.forEach(((i,o)=>t(o))),H.resolve()}getLastRemoteSnapshotVersion(e){return H.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return H.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),H.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.ii&&(this.ii=t),H.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new Fo(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,H.resolve()}updateTargetData(e,t){return this.lr(t),H.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,H.resolve()}removeTargets(e,t,i){let o=0;const l=[];return this.ri.forEach(((c,f)=>{f.sequenceNumber<=t&&i.get(f.targetId)===null&&(this.ri.delete(c),l.push(this.removeMatchingKeysForTargetId(e,f.targetId)),o++)})),H.waitFor(l).next((()=>o))}getTargetCount(e){return H.resolve(this.targetCount)}getTargetData(e,t){const i=this.ri.get(t)||null;return H.resolve(i)}addMatchingKeys(e,t,i){return this.si.$r(t,i),H.resolve()}removeMatchingKeys(e,t,i){this.si.Qr(t,i);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach((c=>{l.push(o.markPotentiallyOrphaned(e,c))})),H.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),H.resolve()}getMatchingKeysForTargetId(e,t){const i=this.si.jr(t);return H.resolve(i)}containsKey(e,t){return H.resolve(this.si.containsKey(t))}}/**
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
 */class Zw{constructor(e,t){this._i={},this.overlays={},this.ai=new zc(0),this.ui=!1,this.ui=!0,this.ci=new IP,this.referenceDelegate=e(this),this.li=new CP(this),this.indexManager=new hP,this.remoteDocumentCache=(function(o){return new AP(o)})((i=>this.referenceDelegate.hi(i))),this.serializer=new uP(t),this.Pi=new EP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new TP,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this._i[e.toKey()];return i||(i=new SP(t,this.referenceDelegate),this._i[e.toKey()]=i),i}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,i){se("MemoryPersistence","Starting transaction:",e);const o=new PP(this.ai.next());return this.referenceDelegate.Ti(),i(o).next((l=>this.referenceDelegate.Ii(o).next((()=>l)))).toPromise().then((l=>(o.raiseOnCommittedEvent(),l)))}Ei(e,t){return H.or(Object.values(this._i).map((i=>()=>i.containsKey(e,t))))}}class PP extends ZR{constructor(e){super(),this.currentSequenceNumber=e}}class ip{constructor(e){this.persistence=e,this.Ri=new rp,this.Ai=null}static Vi(e){return new ip(e)}get di(){if(this.Ai)return this.Ai;throw _e(60996)}addReference(e,t,i){return this.Ri.addReference(i,t),this.di.delete(i.toString()),H.resolve()}removeReference(e,t,i){return this.Ri.removeReference(i,t),this.di.add(i.toString()),H.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),H.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((o=>this.di.add(o.toString())));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((l=>this.di.add(l.toString())))})).next((()=>i.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ii(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return H.forEach(this.di,(i=>{const o=fe.fromPath(i);return this.mi(e,o).next((l=>{l||t.removeEntry(o,we.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((i=>{i?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return H.or([()=>H.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Sc{constructor(e,t){this.persistence=e,this.fi=new Ps((i=>nC(i.path)),((i,o)=>i.isEqual(o))),this.garbageCollector=yP(this,t)}static Vi(e,t){return new Sc(e,t)}Ti(){}Ii(e){return H.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((i=>t.next((o=>i+o))))}pr(e){let t=0;return this.mr(e,(i=>{t++})).next((()=>t))}mr(e,t){return H.forEach(this.fi,((i,o)=>this.wr(e,i,o).next((l=>l?H.resolve():t(o)))))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.ni(e,(c=>this.wr(e,c,t).next((f=>{f||(i++,l.removeEntry(c,we.min()))})))).next((()=>l.apply(e))).next((()=>i))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),H.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.fi.set(i,e.currentSequenceNumber),H.resolve()}removeReference(e,t,i){return this.fi.set(i,e.currentSequenceNumber),H.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),H.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=nc(e.data.value)),t}wr(e,t,i){return H.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.fi.get(t);return H.resolve(o!==void 0&&o>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class sp{constructor(e,t,i,o){this.targetId=e,this.fromCache=t,this.Ts=i,this.Is=o}static Es(e,t){let i=De(),o=De();for(const l of t.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new sp(e,t.fromCache,i,o)}}/**
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
 */class kP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class xP{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return HI()?8:eC(Bt())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,i,o){const l={result:null};return this.gs(e,t).next((c=>{l.result=c})).next((()=>{if(!l.result)return this.ps(e,t,o,i).next((c=>{l.result=c}))})).next((()=>{if(l.result)return;const c=new kP;return this.ys(e,t,c).next((f=>{if(l.result=f,this.As)return this.ws(e,t,c,f.size)}))})).next((()=>l.result))}ws(e,t,i,o){return i.documentReadCount<this.Vs?(Eo()<=xe.DEBUG&&se("QueryEngine","SDK will not create cache indexes for query:",To(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),H.resolve()):(Eo()<=xe.DEBUG&&se("QueryEngine","Query:",To(t),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.ds*o?(Eo()<=xe.DEBUG&&se("QueryEngine","The SDK decides to create cache indexes for query:",To(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,lr(t))):H.resolve())}gs(e,t){if(Zy(t))return H.resolve(null);let i=lr(t);return this.indexManager.getIndexType(e,i).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=yf(t,null,"F"),i=lr(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next((l=>{const c=De(...l);return this.fs.getDocuments(e,c).next((f=>this.indexManager.getMinOffset(e,i).next((p=>{const y=this.bs(t,f);return this.Ss(t,y,c,p.readTime)?this.gs(e,yf(t,null,"F")):this.Ds(e,y,t,p)}))))})))))}ps(e,t,i,o){return Zy(t)||o.isEqual(we.min())?H.resolve(null):this.fs.getDocuments(e,i).next((l=>{const c=this.bs(t,l);return this.Ss(t,c,i,o)?H.resolve(null):(Eo()<=xe.DEBUG&&se("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),To(t)),this.Ds(e,c,t,QR(o,hl)).next((f=>f)))}))}bs(e,t){let i=new wt(xw(e));return t.forEach(((o,l)=>{Wc(e,l)&&(i=i.add(l))})),i}Ss(e,t,i,o){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}ys(e,t,i){return Eo()<=xe.DEBUG&&se("QueryEngine","Using full collection scan to execute query:",To(t)),this.fs.getDocumentsMatchingQuery(e,t,Ni.min(),i)}Ds(e,t,i,o){return this.fs.getDocumentsMatchingQuery(e,i,o).next((l=>(t.forEach((c=>{l=l.insert(c.key,c)})),l)))}}/**
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
 */const op="LocalStore",NP=3e8;class DP{constructor(e,t,i,o){this.persistence=e,this.Cs=t,this.serializer=o,this.vs=new nt(Ne),this.Fs=new Ps((l=>Qf(l)),Yf),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(i)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new wP(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function VP(n,e,t,i){return new DP(n,e,t,i)}async function eE(n,e){const t=Te(n);return await t.persistence.runTransaction("Handle user change","readonly",(i=>{let o;return t.mutationQueue.getAllMutationBatches(i).next((l=>(o=l,t.Os(e),t.mutationQueue.getAllMutationBatches(i)))).next((l=>{const c=[],f=[];let p=De();for(const y of o){c.push(y.batchId);for(const w of y.mutations)p=p.add(w.key)}for(const y of l){f.push(y.batchId);for(const w of y.mutations)p=p.add(w.key)}return t.localDocuments.getDocuments(i,p).next((y=>({Ns:y,removedBatchIds:c,addedBatchIds:f})))}))}))}function bP(n,e){const t=Te(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(i=>{const o=e.batch.keys(),l=t.xs.newChangeBuffer({trackRemovals:!0});return(function(f,p,y,w){const E=y.batch,I=E.keys();let U=H.resolve();return I.forEach(($=>{U=U.next((()=>w.getEntry(p,$))).next((q=>{const V=y.docVersions.get($);je(V!==null,48541),q.version.compareTo(V)<0&&(E.applyToRemoteDocument(q,y),q.isValidDocument()&&(q.setReadTime(y.commitVersion),w.addEntry(q)))}))})),U.next((()=>f.mutationQueue.removeMutationBatch(p,E)))})(t,i,e,l).next((()=>l.apply(i))).next((()=>t.mutationQueue.performConsistencyCheck(i))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(i,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,(function(f){let p=De();for(let y=0;y<f.mutationResults.length;++y)f.mutationResults[y].transformResults.length>0&&(p=p.add(f.batch.mutations[y].key));return p})(e)))).next((()=>t.localDocuments.getDocuments(i,o)))}))}function tE(n){const e=Te(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function OP(n,e){const t=Te(n),i=e.snapshotVersion;let o=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const c=t.xs.newChangeBuffer({trackRemovals:!0});o=t.vs;const f=[];e.targetChanges.forEach(((w,E)=>{const I=o.get(E);if(!I)return;f.push(t.li.removeMatchingKeys(l,w.removedDocuments,E).next((()=>t.li.addMatchingKeys(l,w.addedDocuments,E))));let U=I.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(E)!==null?U=U.withResumeToken(Dt.EMPTY_BYTE_STRING,we.min()).withLastLimboFreeSnapshotVersion(we.min()):w.resumeToken.approximateByteSize()>0&&(U=U.withResumeToken(w.resumeToken,i)),o=o.insert(E,U),(function(q,V,re){return q.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-q.snapshotVersion.toMicroseconds()>=NP?!0:re.addedDocuments.size+re.modifiedDocuments.size+re.removedDocuments.size>0})(I,U,w)&&f.push(t.li.updateTargetData(l,U))}));let p=Ur(),y=De();if(e.documentUpdates.forEach((w=>{e.resolvedLimboDocuments.has(w)&&f.push(t.persistence.referenceDelegate.updateLimboDocument(l,w))})),f.push(LP(l,c,e.documentUpdates).next((w=>{p=w.Bs,y=w.Ls}))),!i.isEqual(we.min())){const w=t.li.getLastRemoteSnapshotVersion(l).next((E=>t.li.setTargetsMetadata(l,l.currentSequenceNumber,i)));f.push(w)}return H.waitFor(f).next((()=>c.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,p,y))).next((()=>p))})).then((l=>(t.vs=o,l)))}function LP(n,e,t){let i=De(),o=De();return t.forEach((l=>i=i.add(l))),e.getEntries(n,i).next((l=>{let c=Ur();return t.forEach(((f,p)=>{const y=l.get(f);p.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(f)),p.isNoDocument()&&p.version.isEqual(we.min())?(e.removeEntry(f,p.readTime),c=c.insert(f,p)):!y.isValidDocument()||p.version.compareTo(y.version)>0||p.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(p),c=c.insert(f,p)):se(op,"Ignoring outdated watch update for ",f,". Current version:",y.version," Watch version:",p.version)})),{Bs:c,Ls:o}}))}function MP(n,e){const t=Te(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(i=>(e===void 0&&(e=Hf),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e))))}function FP(n,e){const t=Te(n);return t.persistence.runTransaction("Allocate target","readwrite",(i=>{let o;return t.li.getTargetData(i,e).next((l=>l?(o=l,H.resolve(o)):t.li.allocateTargetId(i).next((c=>(o=new Ii(e,c,"TargetPurposeListen",i.currentSequenceNumber),t.li.addTargetData(i,o).next((()=>o)))))))})).then((i=>{const o=t.vs.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.vs=t.vs.insert(i.targetId,i),t.Fs.set(e,i.targetId)),i}))}async function Tf(n,e,t){const i=Te(n),o=i.vs.get(e),l=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",l,(c=>i.persistence.referenceDelegate.removeTarget(c,o)))}catch(c){if(!Go(c))throw c;se(op,`Failed to update sequence numbers for target ${e}: ${c}`)}i.vs=i.vs.remove(e),i.Fs.delete(o.target)}function d_(n,e,t){const i=Te(n);let o=we.min(),l=De();return i.persistence.runTransaction("Execute query","readwrite",(c=>(function(p,y,w){const E=Te(p),I=E.Fs.get(w);return I!==void 0?H.resolve(E.vs.get(I)):E.li.getTargetData(y,w)})(i,c,lr(e)).next((f=>{if(f)return o=f.lastLimboFreeSnapshotVersion,i.li.getMatchingKeysForTargetId(c,f.targetId).next((p=>{l=p}))})).next((()=>i.Cs.getDocumentsMatchingQuery(c,e,t?o:we.min(),t?l:De()))).next((f=>(UP(i,SC(e),f),{documents:f,ks:l})))))}function UP(n,e,t){let i=n.Ms.get(e)||we.min();t.forEach(((o,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)})),n.Ms.set(e,i)}class f_{constructor(){this.activeTargetIds=xC()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class jP{constructor(){this.vo=new f_,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,i){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new f_,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class zP{Mo(e){}shutdown(){}}/**
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
 */const p_="ConnectivityMonitor";class m_{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){se(p_,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){se(p_,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Yu=null;function If(){return Yu===null?Yu=(function(){return 268435456+Math.round(2147483648*Math.random())})():Yu++,"0x"+Yu.toString(16)}/**
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
 */const Wd="RestConnection",BP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class $P{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Uo=`projects/${i}/databases/${o}`,this.$o=this.databaseId.database===_c?`project_id=${i}`:`project_id=${i}&database_id=${o}`}Wo(e,t,i,o,l){const c=If(),f=this.Qo(e,t.toUriEncodedString());se(Wd,`Sending RPC '${e}' ${c}:`,f,i);const p={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(p,o,l);const{host:y}=new URL(f),w=$o(y);return this.zo(e,f,p,i,w).then((E=>(se(Wd,`Received RPC '${e}' ${c}: `,E),E)),(E=>{throw Ts(Wd,`RPC '${e}' ${c} failed with error: `,E,"url: ",f,"request:",i),E}))}jo(e,t,i,o,l,c){return this.Wo(e,t,i,o,l)}Go(e,t,i){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Ho})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,l)=>e[l]=o)),i&&i.headers.forEach(((o,l)=>e[l]=o))}Qo(e,t){const i=BP[e];let o=`${this.qo}/v1/${t}:${i}`;return this.databaseInfo.apiKey&&(o=`${o}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),o}terminate(){}}/**
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
 */class qP{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const Ut="WebChannelConnection",Ha=(n,e,t)=>{n.listen(e,(i=>{try{t(i)}catch(o){setTimeout((()=>{throw o}),0)}}))};class ko extends $P{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!ko.c_){const e=ow();Ha(e,sw.STAT_EVENT,(t=>{t.stat===cf.PROXY?se(Ut,"STAT_EVENT: detected buffering proxy"):t.stat===cf.NOPROXY&&se(Ut,"STAT_EVENT: detected no buffering proxy")})),ko.c_=!0}}zo(e,t,i,o,l){const c=If();return new Promise(((f,p)=>{const y=new rw;y.setWithCredentials(!0),y.listenOnce(iw.COMPLETE,(()=>{try{switch(y.getLastErrorCode()){case tc.NO_ERROR:const E=y.getResponseJson();se(Ut,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(E)),f(E);break;case tc.TIMEOUT:se(Ut,`RPC '${e}' ${c} timed out`),p(new ie(W.DEADLINE_EXCEEDED,"Request time out"));break;case tc.HTTP_ERROR:const I=y.getStatus();if(se(Ut,`RPC '${e}' ${c} failed with status:`,I,"response text:",y.getResponseText()),I>0){let U=y.getResponseJson();Array.isArray(U)&&(U=U[0]);const $=U==null?void 0:U.error;if($&&$.status&&$.message){const q=(function(re){const te=re.toLowerCase().replace(/_/g,"-");return Object.values(W).indexOf(te)>=0?te:W.UNKNOWN})($.status);p(new ie(q,$.message))}else p(new ie(W.UNKNOWN,"Server responded with status "+y.getStatus()))}else p(new ie(W.UNAVAILABLE,"Connection failed."));break;default:_e(9055,{l_:e,streamId:c,h_:y.getLastErrorCode(),P_:y.getLastError()})}}finally{se(Ut,`RPC '${e}' ${c} completed.`)}}));const w=JSON.stringify(o);se(Ut,`RPC '${e}' ${c} sending request:`,o),y.send(t,"POST",w,i,15)}))}T_(e,t,i){const o=If(),l=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=this.createWebChannelTransport(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},p=this.longPollingOptions.timeoutSeconds;p!==void 0&&(f.longPollingTimeout=Math.round(1e3*p)),this.useFetchStreams&&(f.useFetchStreams=!0),this.Go(f.initMessageHeaders,t,i),f.encodeInitMessageHeaders=!0;const y=l.join("");se(Ut,`Creating RPC '${e}' stream ${o}: ${y}`,f);const w=c.createWebChannel(y,f);this.I_(w);let E=!1,I=!1;const U=new qP({Ho:$=>{I?se(Ut,`Not sending because RPC '${e}' stream ${o} is closed:`,$):(E||(se(Ut,`Opening RPC '${e}' stream ${o} transport.`),w.open(),E=!0),se(Ut,`RPC '${e}' stream ${o} sending:`,$),w.send($))},Jo:()=>w.close()});return Ha(w,Ga.EventType.OPEN,(()=>{I||(se(Ut,`RPC '${e}' stream ${o} transport opened.`),U.i_())})),Ha(w,Ga.EventType.CLOSE,(()=>{I||(I=!0,se(Ut,`RPC '${e}' stream ${o} transport closed`),U.o_(),this.E_(w))})),Ha(w,Ga.EventType.ERROR,($=>{I||(I=!0,Ts(Ut,`RPC '${e}' stream ${o} transport errored. Name:`,$.name,"Message:",$.message),U.o_(new ie(W.UNAVAILABLE,"The operation could not be completed")))})),Ha(w,Ga.EventType.MESSAGE,($=>{var q;if(!I){const V=$.data[0];je(!!V,16349);const re=V,te=(re==null?void 0:re.error)||((q=re[0])==null?void 0:q.error);if(te){se(Ut,`RPC '${e}' stream ${o} received error:`,te);const ce=te.status;let me=(function(k){const A=ft[k];if(A!==void 0)return zw(A)})(ce),Re=te.message;ce==="NOT_FOUND"&&Re.includes("database")&&Re.includes("does not exist")&&Re.includes(this.databaseId.database)&&Ts(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),me===void 0&&(me=W.INTERNAL,Re="Unknown error status: "+ce+" with message "+te.message),I=!0,U.o_(new ie(me,Re)),w.close()}else se(Ut,`RPC '${e}' stream ${o} received:`,V),U.__(V)}})),ko.u_(),setTimeout((()=>{U.s_()}),0),U}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,i){super.Go(e,t,i),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return aw()}}/**
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
 */function WP(n){return new ko(n)}function Hd(){return typeof document<"u"?document:null}/**
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
 */function Yc(n){return new QC(n,!0)}/**
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
 */ko.c_=!1;class nE{constructor(e,t,i=1e3,o=1.5,l=6e4){this.Ci=e,this.timerId=t,this.R_=i,this.A_=o,this.V_=l,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),i=Math.max(0,Date.now()-this.f_),o=Math.max(0,t-i);o>0&&se("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const g_="PersistentStream";class rE{constructor(e,t,i,o,l,c,f,p){this.Ci=e,this.b_=i,this.S_=o,this.connection=l,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=f,this.listener=p,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new nE(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,(()=>this.k_())))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===W.RESOURCE_EXHAUSTED?(Fr(t.toString()),Fr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===W.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([i,o])=>{this.D_===t&&this.G_(i,o)}),(i=>{e((()=>{const o=new ie(W.UNKNOWN,"Fetching auth token failed: "+i.message);return this.z_(o)}))}))}G_(e,t){const i=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{i((()=>this.listener.Zo()))})),this.stream.Yo((()=>{i((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((o=>{i((()=>this.z_(o)))})),this.stream.onMessage((o=>{i((()=>++this.F_==1?this.H_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return se(g_,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():(se(g_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class HP extends rE{constructor(e,t,i,o,l,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,o,c),this.serializer=l}j_(e,t){return this.connection.T_("Listen",e,t)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=XC(this.serializer,e),i=(function(l){if(!("targetChange"in l))return we.min();const c=l.targetChange;return c.targetIds&&c.targetIds.length?we.min():c.readTime?cr(c.readTime):we.min()})(e);return this.listener.J_(t,i)}Z_(e){const t={};t.database=Ef(this.serializer),t.addTarget=(function(l,c){let f;const p=c.target;if(f=mf(p)?{documents:tP(l,p)}:{query:nP(l,p).ft},f.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){f.resumeToken=qw(l,c.resumeToken);const y=_f(l,c.expectedCount);y!==null&&(f.expectedCount=y)}else if(c.snapshotVersion.compareTo(we.min())>0){f.readTime=Ic(l,c.snapshotVersion.toTimestamp());const y=_f(l,c.expectedCount);y!==null&&(f.expectedCount=y)}return f})(this.serializer,e);const i=iP(this.serializer,e);i&&(t.labels=i),this.K_(t)}X_(e){const t={};t.database=Ef(this.serializer),t.removeTarget=e,this.K_(t)}}class KP extends rE{constructor(e,t,i,o,l,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,o,c),this.serializer=l}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}H_(e){return je(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,je(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){je(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=eP(e.writeResults,e.commitTime),i=cr(e.commitTime);return this.listener.na(i,t)}ra(){const e={};e.database=Ef(this.serializer),this.K_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((i=>ZC(this.serializer,i)))};this.K_(t)}}/**
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
 */class GP{}class QP extends GP{constructor(e,t,i,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new ie(W.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,i,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,c])=>this.connection.Wo(e,vf(t,i),o,l,c))).catch((l=>{throw l.name==="FirebaseError"?(l.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new ie(W.UNKNOWN,l.toString())}))}jo(e,t,i,o,l){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([c,f])=>this.connection.jo(e,vf(t,i),o,c,f,l))).catch((c=>{throw c.name==="FirebaseError"?(c.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new ie(W.UNKNOWN,c.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function YP(n,e,t,i){return new QP(n,e,t,i)}class JP{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Fr(t),this.aa=!1):se("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Is="RemoteStore";class XP{constructor(e,t,i,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=l,this.Aa.Mo((c=>{i.enqueueAndForget((async()=>{xs(this)&&(se(Is,"Restarting streams for network reachability change."),await(async function(p){const y=Te(p);y.Ea.add(4),await Rl(y),y.Va.set("Unknown"),y.Ea.delete(4),await Jc(y)})(this))}))})),this.Va=new JP(i,o)}}async function Jc(n){if(xs(n))for(const e of n.Ra)await e(!0)}async function Rl(n){for(const e of n.Ra)await e(!1)}function iE(n,e){const t=Te(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),cp(t)?up(t):Yo(t).O_()&&lp(t,e))}function ap(n,e){const t=Te(n),i=Yo(t);t.Ia.delete(e),i.O_()&&sE(t,e),t.Ia.size===0&&(i.O_()?i.L_():xs(t)&&t.Va.set("Unknown"))}function lp(n,e){if(n.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(we.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Yo(n).Z_(e)}function sE(n,e){n.da.$e(e),Yo(n).X_(e)}function up(n){n.da=new WC({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),Yo(n).start(),n.Va.ua()}function cp(n){return xs(n)&&!Yo(n).x_()&&n.Ia.size>0}function xs(n){return Te(n).Ea.size===0}function oE(n){n.da=void 0}async function ZP(n){n.Va.set("Online")}async function ek(n){n.Ia.forEach(((e,t)=>{lp(n,e)}))}async function tk(n,e){oE(n),cp(n)?(n.Va.ha(e),up(n)):n.Va.set("Unknown")}async function nk(n,e,t){if(n.Va.set("Online"),e instanceof $w&&e.state===2&&e.cause)try{await(async function(o,l){const c=l.cause;for(const f of l.targetIds)o.Ia.has(f)&&(await o.remoteSyncer.rejectListen(f,c),o.Ia.delete(f),o.da.removeTarget(f))})(n,e)}catch(i){se(Is,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Ac(n,i)}else if(e instanceof sc?n.da.Xe(e):e instanceof Bw?n.da.st(e):n.da.tt(e),!t.isEqual(we.min()))try{const i=await tE(n.localStore);t.compareTo(i)>=0&&await(function(l,c){const f=l.da.Tt(c);return f.targetChanges.forEach(((p,y)=>{if(p.resumeToken.approximateByteSize()>0){const w=l.Ia.get(y);w&&l.Ia.set(y,w.withResumeToken(p.resumeToken,c))}})),f.targetMismatches.forEach(((p,y)=>{const w=l.Ia.get(p);if(!w)return;l.Ia.set(p,w.withResumeToken(Dt.EMPTY_BYTE_STRING,w.snapshotVersion)),sE(l,p);const E=new Ii(w.target,p,y,w.sequenceNumber);lp(l,E)})),l.remoteSyncer.applyRemoteEvent(f)})(n,t)}catch(i){se(Is,"Failed to raise snapshot:",i),await Ac(n,i)}}async function Ac(n,e,t){if(!Go(e))throw e;n.Ea.add(1),await Rl(n),n.Va.set("Offline"),t||(t=()=>tE(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{se(Is,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await Jc(n)}))}function aE(n,e){return e().catch((t=>Ac(n,t,e)))}async function Xc(n){const e=Te(n),t=Oi(e);let i=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Hf;for(;rk(e);)try{const o=await MP(e.localStore,i);if(o===null){e.Ta.length===0&&t.L_();break}i=o.batchId,ik(e,o)}catch(o){await Ac(e,o)}lE(e)&&uE(e)}function rk(n){return xs(n)&&n.Ta.length<10}function ik(n,e){n.Ta.push(e);const t=Oi(n);t.O_()&&t.Y_&&t.ea(e.mutations)}function lE(n){return xs(n)&&!Oi(n).x_()&&n.Ta.length>0}function uE(n){Oi(n).start()}async function sk(n){Oi(n).ra()}async function ok(n){const e=Oi(n);for(const t of n.Ta)e.ea(t.mutations)}async function ak(n,e,t){const i=n.Ta.shift(),o=ep.from(i,e,t);await aE(n,(()=>n.remoteSyncer.applySuccessfulWrite(o))),await Xc(n)}async function lk(n,e){e&&Oi(n).Y_&&await(async function(i,o){if((function(c){return BC(c)&&c!==W.ABORTED})(o.code)){const l=i.Ta.shift();Oi(i).B_(),await aE(i,(()=>i.remoteSyncer.rejectFailedWrite(l.batchId,o))),await Xc(i)}})(n,e),lE(n)&&uE(n)}async function y_(n,e){const t=Te(n);t.asyncQueue.verifyOperationInProgress(),se(Is,"RemoteStore received new credentials");const i=xs(t);t.Ea.add(3),await Rl(t),i&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Jc(t)}async function uk(n,e){const t=Te(n);e?(t.Ea.delete(2),await Jc(t)):e||(t.Ea.add(2),await Rl(t),t.Va.set("Unknown"))}function Yo(n){return n.ma||(n.ma=(function(t,i,o){const l=Te(t);return l.sa(),new HP(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(n.datastore,n.asyncQueue,{Zo:ZP.bind(null,n),Yo:ek.bind(null,n),t_:tk.bind(null,n),J_:nk.bind(null,n)}),n.Ra.push((async e=>{e?(n.ma.B_(),cp(n)?up(n):n.Va.set("Unknown")):(await n.ma.stop(),oE(n))}))),n.ma}function Oi(n){return n.fa||(n.fa=(function(t,i,o){const l=Te(t);return l.sa(),new KP(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:sk.bind(null,n),t_:lk.bind(null,n),ta:ok.bind(null,n),na:ak.bind(null,n)}),n.Ra.push((async e=>{e?(n.fa.B_(),await Xc(n)):(await n.fa.stop(),n.Ta.length>0&&(se(Is,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
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
 */class hp{constructor(e,t,i,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=o,this.removalCallback=l,this.deferred=new ys,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((c=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,o,l){const c=Date.now()+i,f=new hp(e,t,c,o,l);return f.start(i),f}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ie(W.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function dp(n,e){if(Fr("AsyncQueue",`${e}: ${n}`),Go(n))return new ie(W.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class xo{static emptySet(e){return new xo(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||fe.comparator(t.key,i.key):(t,i)=>fe.comparator(t.key,i.key),this.keyedMap=Qa(),this.sortedSet=new nt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,i)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof xo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new xo;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
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
 */class __{constructor(){this.ga=new nt(fe.comparator)}track(e){const t=e.doc.key,i=this.ga.get(t);i?e.type!==0&&i.type===3?this.ga=this.ga.insert(t,e):e.type===3&&i.type!==1?this.ga=this.ga.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.ga=this.ga.remove(t):e.type===1&&i.type===2?this.ga=this.ga.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):_e(63341,{Vt:e,pa:i}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,i)=>{e.push(i)})),e}}class Uo{constructor(e,t,i,o,l,c,f,p,y){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=l,this.fromCache=c,this.syncStateChanged=f,this.excludesMetadataChanges=p,this.hasCachedResults=y}static fromInitialDocuments(e,t,i,o,l){const c=[];return t.forEach((f=>{c.push({type:0,doc:f})})),new Uo(e,t,xo.emptySet(t),c,i,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&qc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==i[o].type||!t[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
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
 */class ck{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some((e=>e.Da()))}}class hk{constructor(){this.queries=v_(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,i){const o=Te(t),l=o.queries;o.queries=v_(),l.forEach(((c,f)=>{for(const p of f.ba)p.onError(i)}))})(this,new ie(W.ABORTED,"Firestore shutting down"))}}function v_(){return new Ps((n=>kw(n)),qc)}async function dk(n,e){const t=Te(n);let i=3;const o=e.query;let l=t.queries.get(o);l?!l.Sa()&&e.Da()&&(i=2):(l=new ck,i=e.Da()?0:1);try{switch(i){case 0:l.wa=await t.onListen(o,!0);break;case 1:l.wa=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(c){const f=dp(c,`Initialization of query '${To(e.query)}' failed`);return void e.onError(f)}t.queries.set(o,l),l.ba.push(e),e.va(t.onlineState),l.wa&&e.Fa(l.wa)&&fp(t)}async function fk(n,e){const t=Te(n),i=e.query;let o=3;const l=t.queries.get(i);if(l){const c=l.ba.indexOf(e);c>=0&&(l.ba.splice(c,1),l.ba.length===0?o=e.Da()?0:1:!l.Sa()&&e.Da()&&(o=2))}switch(o){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function pk(n,e){const t=Te(n);let i=!1;for(const o of e){const l=o.query,c=t.queries.get(l);if(c){for(const f of c.ba)f.Fa(o)&&(i=!0);c.wa=o}}i&&fp(t)}function mk(n,e,t){const i=Te(n),o=i.queries.get(e);if(o)for(const l of o.ba)l.onError(t);i.queries.delete(e)}function fp(n){n.Ca.forEach((e=>{e.next()}))}var Sf,w_;(w_=Sf||(Sf={})).Ma="default",w_.Cache="cache";class gk{constructor(e,t,i){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=i||{}}Fa(e){if(!this.options.includeMetadataChanges){const i=[];for(const o of e.docChanges)o.type!==3&&i.push(o);e=new Uo(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const i=t!=="Offline";return(!this.options.Ka||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Uo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Sf.Cache}}/**
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
 */class cE{constructor(e){this.key=e}}class hE{constructor(e){this.key=e}}class yk{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=De(),this.mutatedKeys=De(),this.eu=xw(e),this.tu=new xo(this.eu)}get nu(){return this.Za}ru(e,t){const i=t?t.iu:new __,o=t?t.tu:this.tu;let l=t?t.mutatedKeys:this.mutatedKeys,c=o,f=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((w,E)=>{const I=o.get(w),U=Wc(this.query,E)?E:null,$=!!I&&this.mutatedKeys.has(I.key),q=!!U&&(U.hasLocalMutations||this.mutatedKeys.has(U.key)&&U.hasCommittedMutations);let V=!1;I&&U?I.data.isEqual(U.data)?$!==q&&(i.track({type:3,doc:U}),V=!0):this.su(I,U)||(i.track({type:2,doc:U}),V=!0,(p&&this.eu(U,p)>0||y&&this.eu(U,y)<0)&&(f=!0)):!I&&U?(i.track({type:0,doc:U}),V=!0):I&&!U&&(i.track({type:1,doc:I}),V=!0,(p||y)&&(f=!0)),V&&(U?(c=c.add(U),l=q?l.add(w):l.delete(w)):(c=c.delete(w),l=l.delete(w)))})),this.query.limit!==null)for(;c.size>this.query.limit;){const w=this.query.limitType==="F"?c.last():c.first();c=c.delete(w.key),l=l.delete(w.key),i.track({type:1,doc:w})}return{tu:c,iu:i,Ss:f,mutatedKeys:l}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,o){const l=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const c=e.iu.ya();c.sort(((w,E)=>(function(U,$){const q=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return _e(20277,{Vt:V})}};return q(U)-q($)})(w.type,E.type)||this.eu(w.doc,E.doc))),this.ou(i),o=o??!1;const f=t&&!o?this._u():[],p=this.Ya.size===0&&this.current&&!o?1:0,y=p!==this.Xa;return this.Xa=p,c.length!==0||y?{snapshot:new Uo(this.query,e.tu,l,c,e.mutatedKeys,p===0,y,!1,!!i&&i.resumeToken.approximateByteSize()>0),au:f}:{au:f}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new __,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Za=this.Za.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Za=this.Za.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=De(),this.tu.forEach((i=>{this.uu(i.key)&&(this.Ya=this.Ya.add(i.key))}));const t=[];return e.forEach((i=>{this.Ya.has(i)||t.push(new hE(i))})),this.Ya.forEach((i=>{e.has(i)||t.push(new cE(i))})),t}cu(e){this.Za=e.ks,this.Ya=De();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Uo.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const pp="SyncEngine";class _k{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class vk{constructor(e){this.key=e,this.hu=!1}}class wk{constructor(e,t,i,o,l,c){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=c,this.Pu={},this.Tu=new Ps((f=>kw(f)),qc),this.Iu=new Map,this.Eu=new Set,this.Ru=new nt(fe.comparator),this.Au=new Map,this.Vu=new rp,this.du={},this.mu=new Map,this.fu=Fo.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Ek(n,e,t=!0){const i=yE(n);let o;const l=i.Tu.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.lu()):o=await dE(i,e,t,!0),o}async function Tk(n,e){const t=yE(n);await dE(t,e,!0,!1)}async function dE(n,e,t,i){const o=await FP(n.localStore,lr(e)),l=o.targetId,c=n.sharedClientState.addLocalQueryTarget(l,t);let f;return i&&(f=await Ik(n,e,l,c==="current",o.resumeToken)),n.isPrimaryClient&&t&&iE(n.remoteStore,o),f}async function Ik(n,e,t,i,o){n.pu=(E,I,U)=>(async function(q,V,re,te){let ce=V.view.ru(re);ce.Ss&&(ce=await d_(q.localStore,V.query,!1).then((({documents:k})=>V.view.ru(k,ce))));const me=te&&te.targetChanges.get(V.targetId),Re=te&&te.targetMismatches.get(V.targetId)!=null,Ce=V.view.applyChanges(ce,q.isPrimaryClient,me,Re);return T_(q,V.targetId,Ce.au),Ce.snapshot})(n,E,I,U);const l=await d_(n.localStore,e,!0),c=new yk(e,l.ks),f=c.ru(l.documents),p=Al.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",o),y=c.applyChanges(f,n.isPrimaryClient,p);T_(n,t,y.au);const w=new _k(e,t,c);return n.Tu.set(e,w),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),y.snapshot}async function Sk(n,e,t){const i=Te(n),o=i.Tu.get(e),l=i.Iu.get(o.targetId);if(l.length>1)return i.Iu.set(o.targetId,l.filter((c=>!qc(c,e)))),void i.Tu.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await Tf(i.localStore,o.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(o.targetId),t&&ap(i.remoteStore,o.targetId),Af(i,o.targetId)})).catch(Ko)):(Af(i,o.targetId),await Tf(i.localStore,o.targetId,!0))}async function Ak(n,e){const t=Te(n),i=t.Tu.get(e),o=t.Iu.get(i.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),ap(t.remoteStore,i.targetId))}async function Rk(n,e,t){const i=Vk(n);try{const o=await(function(c,f){const p=Te(c),y=Ye.now(),w=f.reduce(((U,$)=>U.add($.key)),De());let E,I;return p.persistence.runTransaction("Locally write mutations","readwrite",(U=>{let $=Ur(),q=De();return p.xs.getEntries(U,w).next((V=>{$=V,$.forEach(((re,te)=>{te.isValidDocument()||(q=q.add(re))}))})).next((()=>p.localDocuments.getOverlayedDocuments(U,$))).next((V=>{E=V;const re=[];for(const te of f){const ce=MC(te,E.get(te.key).overlayedDocument);ce!=null&&re.push(new ks(te.key,ce,Ew(ce.value.mapValue),ur.exists(!0)))}return p.mutationQueue.addMutationBatch(U,y,re,f)})).next((V=>{I=V;const re=V.applyToLocalDocumentSet(E,q);return p.documentOverlayCache.saveOverlays(U,V.batchId,re)}))})).then((()=>({batchId:I.batchId,changes:Dw(E)})))})(i.localStore,e);i.sharedClientState.addPendingMutation(o.batchId),(function(c,f,p){let y=c.du[c.currentUser.toKey()];y||(y=new nt(Ne)),y=y.insert(f,p),c.du[c.currentUser.toKey()]=y})(i,o.batchId,t),await Cl(i,o.changes),await Xc(i.remoteStore)}catch(o){const l=dp(o,"Failed to persist write");t.reject(l)}}async function fE(n,e){const t=Te(n);try{const i=await OP(t.localStore,e);e.targetChanges.forEach(((o,l)=>{const c=t.Au.get(l);c&&(je(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?c.hu=!0:o.modifiedDocuments.size>0?je(c.hu,14607):o.removedDocuments.size>0&&(je(c.hu,42227),c.hu=!1))})),await Cl(t,i,e)}catch(i){await Ko(i)}}function E_(n,e,t){const i=Te(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const o=[];i.Tu.forEach(((l,c)=>{const f=c.view.va(e);f.snapshot&&o.push(f.snapshot)})),(function(c,f){const p=Te(c);p.onlineState=f;let y=!1;p.queries.forEach(((w,E)=>{for(const I of E.ba)I.va(f)&&(y=!0)})),y&&fp(p)})(i.eventManager,e),o.length&&i.Pu.J_(o),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function Ck(n,e,t){const i=Te(n);i.sharedClientState.updateQueryState(e,"rejected",t);const o=i.Au.get(e),l=o&&o.key;if(l){let c=new nt(fe.comparator);c=c.insert(l,zt.newNoDocument(l,we.min()));const f=De().add(l),p=new Qc(we.min(),new Map,new nt(Ne),c,f);await fE(i,p),i.Ru=i.Ru.remove(l),i.Au.delete(e),mp(i)}else await Tf(i.localStore,e,!1).then((()=>Af(i,e,t))).catch(Ko)}async function Pk(n,e){const t=Te(n),i=e.batch.batchId;try{const o=await bP(t.localStore,e);mE(t,i,null),pE(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await Cl(t,o)}catch(o){await Ko(o)}}async function kk(n,e,t){const i=Te(n);try{const o=await(function(c,f){const p=Te(c);return p.persistence.runTransaction("Reject batch","readwrite-primary",(y=>{let w;return p.mutationQueue.lookupMutationBatch(y,f).next((E=>(je(E!==null,37113),w=E.keys(),p.mutationQueue.removeMutationBatch(y,E)))).next((()=>p.mutationQueue.performConsistencyCheck(y))).next((()=>p.documentOverlayCache.removeOverlaysForBatchId(y,w,f))).next((()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,w))).next((()=>p.localDocuments.getDocuments(y,w)))}))})(i.localStore,e);mE(i,e,t),pE(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await Cl(i,o)}catch(o){await Ko(o)}}function pE(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function mE(n,e,t){const i=Te(n);let o=i.du[i.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),i.du[i.currentUser.toKey()]=o}}function Af(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Iu.get(e))n.Tu.delete(i),t&&n.Pu.yu(i,t);n.Iu.delete(e),n.isPrimaryClient&&n.Vu.Gr(e).forEach((i=>{n.Vu.containsKey(i)||gE(n,i)}))}function gE(n,e){n.Eu.delete(e.path.canonicalString());const t=n.Ru.get(e);t!==null&&(ap(n.remoteStore,t),n.Ru=n.Ru.remove(e),n.Au.delete(t),mp(n))}function T_(n,e,t){for(const i of t)i instanceof cE?(n.Vu.addReference(i.key,e),xk(n,i)):i instanceof hE?(se(pp,"Document no longer in limbo: "+i.key),n.Vu.removeReference(i.key,e),n.Vu.containsKey(i.key)||gE(n,i.key)):_e(19791,{wu:i})}function xk(n,e){const t=e.key,i=t.path.canonicalString();n.Ru.get(t)||n.Eu.has(i)||(se(pp,"New document in limbo: "+t),n.Eu.add(i),mp(n))}function mp(n){for(;n.Eu.size>0&&n.Ru.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new fe(He.fromString(e)),i=n.fu.next();n.Au.set(i,new vk(t)),n.Ru=n.Ru.insert(t,i),iE(n.remoteStore,new Ii(lr(Jf(t.path)),i,"TargetPurposeLimboResolution",zc.ce))}}async function Cl(n,e,t){const i=Te(n),o=[],l=[],c=[];i.Tu.isEmpty()||(i.Tu.forEach(((f,p)=>{c.push(i.pu(p,e,t).then((y=>{var w;if((y||t)&&i.isPrimaryClient){const E=y?!y.fromCache:(w=t==null?void 0:t.targetChanges.get(p.targetId))==null?void 0:w.current;i.sharedClientState.updateQueryState(p.targetId,E?"current":"not-current")}if(y){o.push(y);const E=sp.Es(p.targetId,y);l.push(E)}})))})),await Promise.all(c),i.Pu.J_(o),await(async function(p,y){const w=Te(p);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",(E=>H.forEach(y,(I=>H.forEach(I.Ts,(U=>w.persistence.referenceDelegate.addReference(E,I.targetId,U))).next((()=>H.forEach(I.Is,(U=>w.persistence.referenceDelegate.removeReference(E,I.targetId,U)))))))))}catch(E){if(!Go(E))throw E;se(op,"Failed to update sequence numbers: "+E)}for(const E of y){const I=E.targetId;if(!E.fromCache){const U=w.vs.get(I),$=U.snapshotVersion,q=U.withLastLimboFreeSnapshotVersion($);w.vs=w.vs.insert(I,q)}}})(i.localStore,l))}async function Nk(n,e){const t=Te(n);if(!t.currentUser.isEqual(e)){se(pp,"User change. New user:",e.toKey());const i=await eE(t.localStore,e);t.currentUser=e,(function(l,c){l.mu.forEach((f=>{f.forEach((p=>{p.reject(new ie(W.CANCELLED,c))}))})),l.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Cl(t,i.Ns)}}function Dk(n,e){const t=Te(n),i=t.Au.get(e);if(i&&i.hu)return De().add(i.key);{let o=De();const l=t.Iu.get(e);if(!l)return o;for(const c of l){const f=t.Tu.get(c);o=o.unionWith(f.view.nu)}return o}}function yE(n){const e=Te(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=fE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Dk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Ck.bind(null,e),e.Pu.J_=pk.bind(null,e.eventManager),e.Pu.yu=mk.bind(null,e.eventManager),e}function Vk(n){const e=Te(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Pk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=kk.bind(null,e),e}class Rc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Yc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return VP(this.persistence,new xP,e.initialUser,this.serializer)}Cu(e){return new Zw(ip.Vi,this.serializer)}Du(e){return new jP}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Rc.provider={build:()=>new Rc};class bk extends Rc{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){je(this.persistence.referenceDelegate instanceof Sc,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new mP(i,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?en.withCacheSize(this.cacheSizeBytes):en.DEFAULT;return new Zw((i=>Sc.Vi(i,t)),this.serializer)}}class Rf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>E_(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=Nk.bind(null,this.syncEngine),await uk(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new hk})()}createDatastore(e){const t=Yc(e.databaseInfo.databaseId),i=WP(e.databaseInfo);return YP(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return(function(i,o,l,c,f){return new XP(i,o,l,c,f)})(this.localStore,this.datastore,e.asyncQueue,(t=>E_(this.syncEngine,t,0)),(function(){return m_.v()?new m_:new zP})())}createSyncEngine(e,t){return(function(o,l,c,f,p,y,w){const E=new wk(o,l,c,f,p,y);return w&&(E.gu=!0),E})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const l=Te(o);se(Is,"RemoteStore shutting down."),l.Ea.add(5),await Rl(l),l.Aa.shutdown(),l.Va.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Rf.provider={build:()=>new Rf};/**
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
 */class Ok{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Fr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const Li="FirestoreClient";class Lk{constructor(e,t,i,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this._databaseInfo=o,this.user=jt.UNAUTHENTICATED,this.clientId=Wf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,(async c=>{se(Li,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c})),this.appCheckCredentials.start(i,(c=>(se(Li,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ys;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=dp(t,"Failed to shutdown persistence");e.reject(i)}})),e.promise}}async function Kd(n,e){n.asyncQueue.verifyOperationInProgress(),se(Li,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener((async o=>{i.isEqual(o)||(await eE(e.localStore,o),i=o)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function I_(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Mk(n);se(Li,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((i=>y_(e.remoteStore,i))),n.setAppCheckTokenChangeListener(((i,o)=>y_(e.remoteStore,o))),n._onlineComponents=e}async function Mk(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){se(Li,"Using user provided OfflineComponentProvider");try{await Kd(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===W.FAILED_PRECONDITION||o.code===W.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;Ts("Error using user provided cache. Falling back to memory cache: "+t),await Kd(n,new Rc)}}else se(Li,"Using default OfflineComponentProvider"),await Kd(n,new bk(void 0));return n._offlineComponents}async function _E(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(se(Li,"Using user provided OnlineComponentProvider"),await I_(n,n._uninitializedComponentsProvider._online)):(se(Li,"Using default OnlineComponentProvider"),await I_(n,new Rf))),n._onlineComponents}function Fk(n){return _E(n).then((e=>e.syncEngine))}async function S_(n){const e=await _E(n),t=e.eventManager;return t.onListen=Ek.bind(null,e.syncEngine),t.onUnlisten=Sk.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Tk.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Ak.bind(null,e.syncEngine),t}function Uk(n,e,t,i){const o=new Ok(i),l=new gk(e,o,t);return n.asyncQueue.enqueueAndForget((async()=>dk(await S_(n),l))),()=>{o.Nu(),n.asyncQueue.enqueueAndForget((async()=>fk(await S_(n),l)))}}function jk(n,e){const t=new ys;return n.asyncQueue.enqueueAndForget((async()=>Rk(await Fk(n),e,t))),t.promise}/**
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
 */function vE(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const zk="ComponentProvider",A_=new Map;function Bk(n,e,t,i,o){return new sC(n,e,t,o.host,o.ssl,o.experimentalForceLongPolling,o.experimentalAutoDetectLongPolling,vE(o.experimentalLongPollingOptions),o.useFetchStreams,o.isUsingEmulator,i)}/**
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
 */const wE="firestore.googleapis.com",R_=!0;class C_{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ie(W.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=wE,this.ssl=R_}else this.host=e.host,this.ssl=e.ssl??R_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Xw;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<fP)throw new ie(W.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}GR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=vE(e.experimentalLongPollingOptions??{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ie(W.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ie(W.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ie(W.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(i,o){return i.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Zc{constructor(e,t,i,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new C_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ie(W.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ie(W.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new C_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new FR;switch(i.type){case"firstParty":return new BR(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new ie(W.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const i=A_.get(t);i&&(se(zk,"Removing Datastore"),A_.delete(t),i.terminate())})(this),Promise.resolve()}}function $k(n,e,t,i={}){var y;n=_s(n,Zc);const o=$o(e),l=n._getSettings(),c={...l,emulatorOptions:n._getEmulatorOptions()},f=`${e}:${t}`;o&&(cv(`https://${f}`),hv("Firestore",!0)),l.host!==wE&&l.host!==f&&Ts("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p={...l,host:f,ssl:o,emulatorOptions:i};if(!xi(p,c)&&(n._setSettings(p),i.mockUserToken)){let w,E;if(typeof i.mockUserToken=="string")w=i.mockUserToken,E=jt.MOCK_USER;else{w=FI(i.mockUserToken,(y=n._app)==null?void 0:y.options.projectId);const I=i.mockUserToken.sub||i.mockUserToken.user_id;if(!I)throw new ie(W.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");E=new jt(I)}n._authCredentials=new UR(new uw(w,E))}}/**
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
 */class Ns{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Ns(this.firestore,e,this._query)}}class yt{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ki(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new yt(this.firestore,e,this._key)}toJSON(){return{type:yt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,i){if(Sl(t,yt._jsonSchema))return new yt(e,i||null,new fe(He.fromString(t.referencePath)))}}yt._jsonSchemaVersion="firestore/documentReference/1.0",yt._jsonSchema={type:gt("string",yt._jsonSchemaVersion),referencePath:gt("string")};class ki extends Ns{constructor(e,t,i){super(e,t,Jf(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new yt(this.firestore,null,new fe(e))}withConverter(e){return new ki(this.firestore,e,this._path)}}function qk(n,e,...t){if(n=st(n),cw("collection","path",e),n instanceof Zc){const i=He.fromString(e,...t);return Uy(i),new ki(n,null,i)}{if(!(n instanceof yt||n instanceof ki))throw new ie(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(He.fromString(e,...t));return Uy(i),new ki(n.firestore,null,i)}}function Cf(n,e,...t){if(n=st(n),arguments.length===1&&(e=Wf.newId()),cw("doc","path",e),n instanceof Zc){const i=He.fromString(e,...t);return Fy(i),new yt(n,null,new fe(i))}{if(!(n instanceof yt||n instanceof ki))throw new ie(W.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(He.fromString(e,...t));return Fy(i),new yt(n.firestore,n instanceof ki?n.converter:null,new fe(i))}}/**
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
 */const P_="AsyncQueue";class k_{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new nE(this,"async_queue_retry"),this._c=()=>{const i=Hd();i&&se(P_,"Visibility state changed to "+i.visibilityState),this.M_.w_()},this.ac=e;const t=Hd();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Hd();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new ys;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Go(e))throw e;se(P_,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((i=>{throw this.nc=i,this.rc=!1,Fr("INTERNAL UNHANDLED ERROR: ",x_(i)),i})).then((i=>(this.rc=!1,i))))));return this.ac=t,t}enqueueAfterDelay(e,t,i){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const o=hp.createAndSchedule(this,e,t,i,(l=>this.hc(l)));return this.tc.push(o),o}uc(){this.nc&&_e(47125,{Pc:x_(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,i)=>t.targetTimeMs-i.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function x_(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class _l extends Zc{constructor(e,t,i,o){super(e,t,i,o),this.type="firestore",this._queue=new k_,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new k_(e),this._firestoreClient=void 0,await e}}}function Wk(n,e){const t=typeof n=="object"?n:bf(),i=typeof n=="string"?n:_c,o=Cs(t,"firestore").getImmediate({identifier:i});if(!o._initialized){const l=LI("firestore");l&&$k(o,...l)}return o}function EE(n){if(n._terminated)throw new ie(W.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Hk(n),n._firestoreClient}function Hk(n){var i,o,l,c;const e=n._freezeSettings(),t=Bk(n._databaseId,((i=n._app)==null?void 0:i.options.appId)||"",n._persistenceKey,(o=n._app)==null?void 0:o.options.apiKey,e);n._componentsProvider||(l=e.localCache)!=null&&l._offlineComponentProvider&&((c=e.localCache)!=null&&c._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new Lk(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(p){const y=p==null?void 0:p._online.build();return{_offline:p==null?void 0:p._offline.build(y),_online:y}})(n._componentsProvider))}/**
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
 */class Tn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Tn(Dt.fromBase64String(e))}catch(t){throw new ie(W.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Tn(Dt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Tn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Sl(e,Tn._jsonSchema))return Tn.fromBase64String(e.bytes)}}Tn._jsonSchemaVersion="firestore/bytes/1.0",Tn._jsonSchema={type:gt("string",Tn._jsonSchemaVersion),bytes:gt("string")};/**
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
 */class gp{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ie(W.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Nt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class yp{constructor(e){this._methodName=e}}/**
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
 */class hr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ie(W.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ie(W.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ne(this._lat,e._lat)||Ne(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:hr._jsonSchemaVersion}}static fromJSON(e){if(Sl(e,hr._jsonSchema))return new hr(e.latitude,e.longitude)}}hr._jsonSchemaVersion="firestore/geoPoint/1.0",hr._jsonSchema={type:gt("string",hr._jsonSchemaVersion),latitude:gt("number"),longitude:gt("number")};/**
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
 */class Fn{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(i,o){if(i.length!==o.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==o[l])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Fn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Sl(e,Fn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Fn(e.vectorValues);throw new ie(W.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Fn._jsonSchemaVersion="firestore/vectorValue/1.0",Fn._jsonSchema={type:gt("string",Fn._jsonSchemaVersion),vectorValues:gt("object")};/**
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
 */const Kk=/^__.*__$/;class TE{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return new ks(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function IE(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw _e(40011,{dataSource:n})}}class _p{constructor(e,t,i,o,l,c){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=o,l===void 0&&this.validatePath(),this.fieldTransforms=l||[],this.fieldMask=c||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new _p({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var o;const t=(o=this.path)==null?void 0:o.child(e),i=this.contextWith({path:t,arrayElement:!1});return i.validatePathSegment(e),i}childContextForFieldPath(e){var o;const t=(o=this.path)==null?void 0:o.child(e),i=this.contextWith({path:t,arrayElement:!1});return i.validatePath(),i}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return Cc(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(IE(this.dataSource)&&Kk.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class Gk{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||Yc(e)}createContext(e,t,i,o=!1){return new _p({dataSource:e,methodName:t,targetDoc:i,path:Nt.emptyPath(),arrayElement:!1,hasConverter:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function SE(n){const e=n._freezeSettings(),t=Yc(n._databaseId);return new Gk(n._databaseId,!!e.ignoreUndefinedProperties,t)}class eh extends yp{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.createError(`${this._methodName}() can only appear at the top level of your update data`):e.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof eh}}function Qk(n,e,t,i){const o=n.createContext(1,e,t);RE("Data must be an object, but it was:",o,i);const l=[],c=hn.empty();Ui(i,((p,y)=>{const w=CE(e,p,t);y=st(y);const E=o.childContextForFieldPath(w);if(y instanceof eh)l.push(w);else{const I=Pl(y,E);I!=null&&(l.push(w),c.set(w,I))}}));const f=new Mn(l);return new TE(c,f,o.fieldTransforms)}function Yk(n,e,t,i,o,l){const c=n.createContext(1,e,t),f=[vl(e,i,t)],p=[o];if(l.length%2!=0)throw new ie(W.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let I=0;I<l.length;I+=2)f.push(vl(e,l[I])),p.push(l[I+1]);const y=[],w=hn.empty();for(let I=f.length-1;I>=0;--I)if(!ex(y,f[I])){const U=f[I];let $=p[I];$=st($);const q=c.childContextForFieldPath(U);if($ instanceof eh)y.push(U);else{const V=Pl($,q);V!=null&&(y.push(U),w.set(U,V))}}const E=new Mn(y);return new TE(w,E,c.fieldTransforms)}function Jk(n,e,t,i=!1){return Pl(t,n.createContext(i?4:3,e))}function Pl(n,e){if(AE(n=st(n)))return RE("Unsupported field value:",e,n),Xk(n,e);if(n instanceof yp)return(function(i,o){if(!IE(o.dataSource))throw o.createError(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.createError(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(o);l&&o.fieldTransforms.push(l)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return(function(i,o){const l=[];let c=0;for(const f of i){let p=Pl(f,o.childContextForArray(c));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),c++}return{arrayValue:{values:l}}})(n,e)}return(function(i,o){if((i=st(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return NC(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=Ye.fromDate(i);return{timestampValue:Ic(o.serializer,l)}}if(i instanceof Ye){const l=new Ye(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Ic(o.serializer,l)}}if(i instanceof hr)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Tn)return{bytesValue:qw(o.serializer,i._byteString)};if(i instanceof yt){const l=o.databaseId,c=i.firestore._databaseId;if(!c.isEqual(l))throw o.createError(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:np(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof Fn)return(function(c,f){const p=c instanceof Fn?c.toArray():c;return{mapValue:{fields:{[vw]:{stringValue:ww},[vc]:{arrayValue:{values:p.map((w=>{if(typeof w!="number")throw f.createError("VectorValues must only contain numeric values.");return Xf(f.serializer,w)}))}}}}}})(i,o);if(Jw(i))return i._toProto(o.serializer);throw o.createError(`Unsupported field value: ${jc(i)}`)})(n,e)}function Xk(n,e){const t={};return fw(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ui(n,((i,o)=>{const l=Pl(o,e.childContextForField(i));l!=null&&(t[i]=l)})),{mapValue:{fields:t}}}function AE(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ye||n instanceof hr||n instanceof Tn||n instanceof yt||n instanceof yp||n instanceof Fn||Jw(n))}function RE(n,e,t){if(!AE(t)||!hw(t)){const i=jc(t);throw i==="an object"?e.createError(n+" a custom object"):e.createError(n+" "+i)}}function vl(n,e,t){if((e=st(e))instanceof gp)return e._internalPath;if(typeof e=="string")return CE(n,e);throw Cc("Field path arguments must be of type string or ",n,!1,void 0,t)}const Zk=new RegExp("[~\\*/\\[\\]]");function CE(n,e,t){if(e.search(Zk)>=0)throw Cc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new gp(...e.split("."))._internalPath}catch{throw Cc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Cc(n,e,t,i,o){const l=i&&!i.isEmpty(),c=o!==void 0;let f=`Function ${e}() called with invalid data`;t&&(f+=" (via `toFirestore()`)"),f+=". ";let p="";return(l||c)&&(p+=" (found",l&&(p+=` in field ${i}`),c&&(p+=` in document ${o}`),p+=")"),new ie(W.INVALID_ARGUMENT,f+n+p)}function ex(n,e){return n.some((t=>t.isEqual(e)))}/**
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
 */class tx{convertValue(e,t="none"){switch(bi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ut(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Vi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw _e(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return Ui(e,((o,l)=>{i[o]=this.convertValue(l,t)})),i}convertVectorValue(e){var i,o,l;const t=(l=(o=(i=e.fields)==null?void 0:i[vc].arrayValue)==null?void 0:o.values)==null?void 0:l.map((c=>ut(c.doubleValue)));return new Fn(t)}convertGeoPoint(e){return new hr(ut(e.latitude),ut(e.longitude))}convertArray(e,t){return(e.values||[]).map((i=>this.convertValue(i,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const i=$c(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(dl(e));default:return null}}convertTimestamp(e){const t=Di(e);return new Ye(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=He.fromString(e);je(Yw(i),9688,{name:e});const o=new fl(i.get(1),i.get(3)),l=new fe(i.popFirst(5));return o.isEqual(t)||Fr(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
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
 */class PE extends tx{constructor(e){super(),this.firestore=e}convertBytes(e){return new Tn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new yt(this.firestore,null,t)}}const N_="@firebase/firestore",D_="4.11.0";/**
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
 */function V_(n){return(function(t,i){if(typeof t!="object"||t===null)return!1;const o=t;for(const l of i)if(l in o&&typeof o[l]=="function")return!0;return!1})(n,["next","error","complete"])}/**
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
 */class kE{constructor(e,t,i,o,l){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new yt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new nx(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(vl("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class nx extends kE{data(){return super.data()}}/**
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
 */function rx(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new ie(W.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class vp{}class xE extends vp{}function ix(n,e,...t){let i=[];e instanceof vp&&i.push(e),i=i.concat(t),(function(l){const c=l.filter((p=>p instanceof Ep)).length,f=l.filter((p=>p instanceof wp)).length;if(c>1||c>0&&f>0)throw new ie(W.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(i);for(const o of i)n=o._apply(n);return n}class wp extends xE{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new wp(e,t,i)}_apply(e){const t=this._parse(e);return NE(e._query,t),new Ns(e.firestore,e.converter,gf(e._query,t))}_parse(e){const t=SE(e.firestore);return(function(l,c,f,p,y,w,E){let I;if(y.isKeyField()){if(w==="array-contains"||w==="array-contains-any")throw new ie(W.INVALID_ARGUMENT,`Invalid Query. You can't perform '${w}' queries on documentId().`);if(w==="in"||w==="not-in"){O_(E,w);const $=[];for(const q of E)$.push(b_(p,l,q));I={arrayValue:{values:$}}}else I=b_(p,l,E)}else w!=="in"&&w!=="not-in"&&w!=="array-contains-any"||O_(E,w),I=Jk(f,c,E,w==="in"||w==="not-in");return mt.create(y,w,I)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class Ep extends vp{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Ep(e,t)}_parse(e){const t=this._queryConstraints.map((i=>i._parse(e))).filter((i=>i.getFilters().length>0));return t.length===1?t[0]:jn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,l){let c=o;const f=l.getFlattenedFilters();for(const p of f)NE(c,p),c=gf(c,p)})(e._query,t),new Ns(e.firestore,e.converter,gf(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Tp extends xE{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Tp(e,t)}_apply(e){const t=(function(o,l,c){if(o.startAt!==null)throw new ie(W.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new ie(W.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ml(l,c)})(e._query,this._field,this._direction);return new Ns(e.firestore,e.converter,IC(e._query,t))}}function sx(n,e="asc"){const t=e,i=vl("orderBy",n);return Tp._create(i,t)}function b_(n,e,t){if(typeof(t=st(t))=="string"){if(t==="")throw new ie(W.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Pw(e)&&t.indexOf("/")!==-1)throw new ie(W.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(He.fromString(t));if(!fe.isDocumentKey(i))throw new ie(W.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return Ky(n,new fe(i))}if(t instanceof yt)return Ky(n,t._key);throw new ie(W.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${jc(t)}.`)}function O_(n,e){if(!Array.isArray(n)||n.length===0)throw new ie(W.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function NE(n,e){const t=(function(o,l){for(const c of o)for(const f of c.getFlattenedFilters())if(l.indexOf(f.op)>=0)return f.op;return null})(n.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new ie(W.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ie(W.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Ja{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class vs extends kE{constructor(e,t,i,o,l,c){super(e,t,i,o,c),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new oc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(vl("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ie(W.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=vs._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}vs._jsonSchemaVersion="firestore/documentSnapshot/1.0",vs._jsonSchema={type:gt("string",vs._jsonSchemaVersion),bundleSource:gt("string","DocumentSnapshot"),bundleName:gt("string"),bundle:gt("string")};class oc extends vs{data(e={}){return super.data(e)}}class No{constructor(e,t,i,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Ja(o.hasPendingWrites,o.fromCache),this.query=i}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((i=>{e.call(t,new oc(this._firestore,this._userDataWriter,i.key,i,new Ja(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ie(W.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,l){if(o._snapshot.oldDocs.isEmpty()){let c=0;return o._snapshot.docChanges.map((f=>{const p=new oc(o._firestore,o._userDataWriter,f.doc.key,f.doc,new Ja(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);return f.doc,{type:"added",doc:p,oldIndex:-1,newIndex:c++}}))}{let c=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((f=>l||f.type!==3)).map((f=>{const p=new oc(o._firestore,o._userDataWriter,f.doc.key,f.doc,new Ja(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,w=-1;return f.type!==0&&(y=c.indexOf(f.doc.key),c=c.delete(f.doc.key)),f.type!==1&&(c=c.add(f.doc),w=c.indexOf(f.doc.key)),{type:ox(f.type),doc:p,oldIndex:y,newIndex:w}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ie(W.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=No._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Wf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],i=[],o=[];return this.docs.forEach((l=>{l._document!==null&&(t.push(l._document),i.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),o.push(l.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function ox(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return _e(61501,{type:n})}}/**
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
 */No._jsonSchemaVersion="firestore/querySnapshot/1.0",No._jsonSchema={type:gt("string",No._jsonSchemaVersion),bundleSource:gt("string","QuerySnapshot"),bundleName:gt("string"),bundle:gt("string")};function DE(n,e,t,...i){n=_s(n,yt);const o=_s(n.firestore,_l),l=SE(o);let c;return c=typeof(e=st(e))=="string"||e instanceof gp?Yk(l,"updateDoc",n._key,e,t,i):Qk(l,"updateDoc",n._key,e),VE(o,[c.toMutation(n._key,ur.exists(!0))])}function ax(n){return VE(_s(n.firestore,_l),[new Zf(n._key,ur.none())])}function lx(n,...e){var y,w,E;n=st(n);let t={includeMetadataChanges:!1,source:"default"},i=0;typeof e[i]!="object"||V_(e[i])||(t=e[i++]);const o={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(V_(e[i])){const I=e[i];e[i]=(y=I.next)==null?void 0:y.bind(I),e[i+1]=(w=I.error)==null?void 0:w.bind(I),e[i+2]=(E=I.complete)==null?void 0:E.bind(I)}let l,c,f;if(n instanceof yt)c=_s(n.firestore,_l),f=Jf(n._key.path),l={next:I=>{e[i]&&e[i](ux(c,n,I))},error:e[i+1],complete:e[i+2]};else{const I=_s(n,Ns);c=_s(I.firestore,_l),f=I._query;const U=new PE(c);l={next:$=>{e[i]&&e[i](new No(c,U,I,$))},error:e[i+1],complete:e[i+2]},rx(n._query)}const p=EE(c);return Uk(p,f,o,l)}function VE(n,e){const t=EE(n);return jk(t,e)}function ux(n,e,t){const i=t.docs.get(e._key),o=new PE(n);return new vs(n,o,e._key,i,new Ja(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){MR(Wo),dr(new Un("firestore",((i,{instanceIdentifier:o,options:l})=>{const c=i.getProvider("app").getImmediate(),f=new _l(new jR(i.getProvider("auth-internal")),new $R(c,i.getProvider("app-check-internal")),oC(c,o),c);return l={useFetchStreams:t,...l},f._setSettings(l),f}),"PUBLIC").setMultipleInstances(!0)),Sn(N_,D_,e),Sn(N_,D_,"esm2020")})();const bE="@firebase/installations",Ip="0.6.19";/**
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
 */const OE=1e4,LE=`w:${Ip}`,ME="FIS_v2",cx="https://firebaseinstallations.googleapis.com/v1",hx=3600*1e3,dx="installations",fx="Installations";/**
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
 */const px={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ss=new Rs(dx,fx,px);function FE(n){return n instanceof zn&&n.code.includes("request-failed")}/**
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
 */function UE({projectId:n}){return`${cx}/projects/${n}/installations`}function jE(n){return{token:n.token,requestStatus:2,expiresIn:gx(n.expiresIn),creationTime:Date.now()}}async function zE(n,e){const i=(await e.json()).error;return Ss.create("request-failed",{requestName:n,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function BE({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function mx(n,{refreshToken:e}){const t=BE(n);return t.append("Authorization",yx(e)),t}async function $E(n){const e=await n();return e.status>=500&&e.status<600?n():e}function gx(n){return Number(n.replace("s","000"))}function yx(n){return`${ME} ${n}`}/**
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
 */async function _x({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const i=UE(n),o=BE(n),l=e.getImmediate({optional:!0});if(l){const y=await l.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const c={fid:t,authVersion:ME,appId:n.appId,sdkVersion:LE},f={method:"POST",headers:o,body:JSON.stringify(c)},p=await $E(()=>fetch(i,f));if(p.ok){const y=await p.json();return{fid:y.fid||t,registrationStatus:2,refreshToken:y.refreshToken,authToken:jE(y.authToken)}}else throw await zE("Create Installation",p)}/**
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
 */function qE(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function vx(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const wx=/^[cdef][\w-]{21}$/,Pf="";function Ex(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=Tx(n);return wx.test(t)?t:Pf}catch{return Pf}}function Tx(n){return vx(n).substr(0,22)}/**
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
 */function th(n){return`${n.appName}!${n.appId}`}/**
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
 */const WE=new Map;function HE(n,e){const t=th(n);KE(t,e),Ix(t,e)}function KE(n,e){const t=WE.get(n);if(t)for(const i of t)i(e)}function Ix(n,e){const t=Sx();t&&t.postMessage({key:n,fid:e}),Ax()}let gs=null;function Sx(){return!gs&&"BroadcastChannel"in self&&(gs=new BroadcastChannel("[Firebase] FID Change"),gs.onmessage=n=>{KE(n.data.key,n.data.fid)}),gs}function Ax(){WE.size===0&&gs&&(gs.close(),gs=null)}/**
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
 */const Rx="firebase-installations-database",Cx=1,As="firebase-installations-store";let Gd=null;function Sp(){return Gd||(Gd=yv(Rx,Cx,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(As)}}})),Gd}async function Pc(n,e){const t=th(n),o=(await Sp()).transaction(As,"readwrite"),l=o.objectStore(As),c=await l.get(t);return await l.put(e,t),await o.done,(!c||c.fid!==e.fid)&&HE(n,e.fid),e}async function GE(n){const e=th(n),i=(await Sp()).transaction(As,"readwrite");await i.objectStore(As).delete(e),await i.done}async function nh(n,e){const t=th(n),o=(await Sp()).transaction(As,"readwrite"),l=o.objectStore(As),c=await l.get(t),f=e(c);return f===void 0?await l.delete(t):await l.put(f,t),await o.done,f&&(!c||c.fid!==f.fid)&&HE(n,f.fid),f}/**
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
 */async function Ap(n){let e;const t=await nh(n.appConfig,i=>{const o=Px(i),l=kx(n,o);return e=l.registrationPromise,l.installationEntry});return t.fid===Pf?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function Px(n){const e=n||{fid:Ex(),registrationStatus:0};return QE(e)}function kx(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(Ss.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=xx(n,t);return{installationEntry:t,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Nx(n)}:{installationEntry:e}}async function xx(n,e){try{const t=await _x(n,e);return Pc(n.appConfig,t)}catch(t){throw FE(t)&&t.customData.serverCode===409?await GE(n.appConfig):await Pc(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function Nx(n){let e=await L_(n.appConfig);for(;e.registrationStatus===1;)await qE(100),e=await L_(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:i}=await Ap(n);return i||t}return e}function L_(n){return nh(n,e=>{if(!e)throw Ss.create("installation-not-found");return QE(e)})}function QE(n){return Dx(n)?{fid:n.fid,registrationStatus:0}:n}function Dx(n){return n.registrationStatus===1&&n.registrationTime+OE<Date.now()}/**
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
 */async function Vx({appConfig:n,heartbeatServiceProvider:e},t){const i=bx(n,t),o=mx(n,t),l=e.getImmediate({optional:!0});if(l){const y=await l.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const c={installation:{sdkVersion:LE,appId:n.appId}},f={method:"POST",headers:o,body:JSON.stringify(c)},p=await $E(()=>fetch(i,f));if(p.ok){const y=await p.json();return jE(y)}else throw await zE("Generate Auth Token",p)}function bx(n,{fid:e}){return`${UE(n)}/${e}/authTokens:generate`}/**
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
 */async function Rp(n,e=!1){let t;const i=await nh(n.appConfig,l=>{if(!YE(l))throw Ss.create("not-registered");const c=l.authToken;if(!e&&Mx(c))return l;if(c.requestStatus===1)return t=Ox(n,e),l;{if(!navigator.onLine)throw Ss.create("app-offline");const f=Ux(l);return t=Lx(n,f),f}});return t?await t:i.authToken}async function Ox(n,e){let t=await M_(n.appConfig);for(;t.authToken.requestStatus===1;)await qE(100),t=await M_(n.appConfig);const i=t.authToken;return i.requestStatus===0?Rp(n,e):i}function M_(n){return nh(n,e=>{if(!YE(e))throw Ss.create("not-registered");const t=e.authToken;return jx(t)?{...e,authToken:{requestStatus:0}}:e})}async function Lx(n,e){try{const t=await Vx(n,e),i={...e,authToken:t};return await Pc(n.appConfig,i),t}catch(t){if(FE(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await GE(n.appConfig);else{const i={...e,authToken:{requestStatus:0}};await Pc(n.appConfig,i)}throw t}}function YE(n){return n!==void 0&&n.registrationStatus===2}function Mx(n){return n.requestStatus===2&&!Fx(n)}function Fx(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+hx}function Ux(n){const e={requestStatus:1,requestTime:Date.now()};return{...n,authToken:e}}function jx(n){return n.requestStatus===1&&n.requestTime+OE<Date.now()}/**
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
 */async function zx(n){const e=n,{installationEntry:t,registrationPromise:i}=await Ap(e);return i?i.catch(console.error):Rp(e).catch(console.error),t.fid}/**
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
 */async function Bx(n,e=!1){const t=n;return await $x(t),(await Rp(t,e)).token}async function $x(n){const{registrationPromise:e}=await Ap(n);e&&await e}/**
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
 */function qx(n){if(!n||!n.options)throw Qd("App Configuration");if(!n.name)throw Qd("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw Qd(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Qd(n){return Ss.create("missing-app-config-values",{valueName:n})}/**
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
 */const JE="installations",Wx="installations-internal",Hx=n=>{const e=n.getProvider("app").getImmediate(),t=qx(e),i=Cs(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},Kx=n=>{const e=n.getProvider("app").getImmediate(),t=Cs(e,JE).getImmediate();return{getId:()=>zx(t),getToken:o=>Bx(t,o)}};function Gx(){dr(new Un(JE,Hx,"PUBLIC")),dr(new Un(Wx,Kx,"PRIVATE"))}Gx();Sn(bE,Ip);Sn(bE,Ip,"esm2020");/**
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
 */const kc="analytics",Qx="firebase_id",Yx="origin",Jx=60*1e3,Xx="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Cp="https://www.googletagmanager.com/gtag/js";/**
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
 */const Ht=new Lc("@firebase/analytics");/**
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
 */const Zx={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},fn=new Rs("analytics","Analytics",Zx);/**
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
 */function e2(n){if(!n.startsWith(Cp)){const e=fn.create("invalid-gtag-resource",{gtagURL:n});return Ht.warn(e.message),""}return n}function XE(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function t2(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function n2(n,e){const t=t2("firebase-js-sdk-policy",{createScriptURL:e2}),i=document.createElement("script"),o=`${Cp}?l=${n}&id=${e}`;i.src=t?t==null?void 0:t.createScriptURL(o):o,i.async=!0,document.head.appendChild(i)}function r2(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function i2(n,e,t,i,o,l){const c=i[o];try{if(c)await e[c];else{const p=(await XE(t)).find(y=>y.measurementId===o);p&&await e[p.appId]}}catch(f){Ht.error(f)}n("config",o,l)}async function s2(n,e,t,i,o){try{let l=[];if(o&&o.send_to){let c=o.send_to;Array.isArray(c)||(c=[c]);const f=await XE(t);for(const p of c){const y=f.find(E=>E.measurementId===p),w=y&&e[y.appId];if(w)l.push(w);else{l=[];break}}}l.length===0&&(l=Object.values(e)),await Promise.all(l),n("event",i,o||{})}catch(l){Ht.error(l)}}function o2(n,e,t,i){async function o(l,...c){try{if(l==="event"){const[f,p]=c;await s2(n,e,t,f,p)}else if(l==="config"){const[f,p]=c;await i2(n,e,t,i,f,p)}else if(l==="consent"){const[f,p]=c;n("consent",f,p)}else if(l==="get"){const[f,p,y]=c;n("get",f,p,y)}else if(l==="set"){const[f]=c;n("set",f)}else n(l,...c)}catch(f){Ht.error(f)}}return o}function a2(n,e,t,i,o){let l=function(...c){window[i].push(arguments)};return window[o]&&typeof window[o]=="function"&&(l=window[o]),window[o]=o2(l,n,e,t),{gtagCore:l,wrappedGtag:window[o]}}function l2(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Cp)&&t.src.includes(n))return t;return null}/**
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
 */const u2=30,c2=1e3;class h2{constructor(e={},t=c2){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const ZE=new h2;function d2(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function f2(n){var c;const{appId:e,apiKey:t}=n,i={method:"GET",headers:d2(t)},o=Xx.replace("{app-id}",e),l=await fetch(o,i);if(l.status!==200&&l.status!==304){let f="";try{const p=await l.json();(c=p.error)!=null&&c.message&&(f=p.error.message)}catch{}throw fn.create("config-fetch-failed",{httpStatus:l.status,responseMessage:f})}return l.json()}async function p2(n,e=ZE,t){const{appId:i,apiKey:o,measurementId:l}=n.options;if(!i)throw fn.create("no-app-id");if(!o){if(l)return{measurementId:l,appId:i};throw fn.create("no-api-key")}const c=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},f=new y2;return setTimeout(async()=>{f.abort()},Jx),e0({appId:i,apiKey:o,measurementId:l},c,f,e)}async function e0(n,{throttleEndTimeMillis:e,backoffCount:t},i,o=ZE){var f;const{appId:l,measurementId:c}=n;try{await m2(i,e)}catch(p){if(c)return Ht.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${p==null?void 0:p.message}]`),{appId:l,measurementId:c};throw p}try{const p=await f2(n);return o.deleteThrottleMetadata(l),p}catch(p){const y=p;if(!g2(y)){if(o.deleteThrottleMetadata(l),c)return Ht.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${y==null?void 0:y.message}]`),{appId:l,measurementId:c};throw p}const w=Number((f=y==null?void 0:y.customData)==null?void 0:f.httpStatus)===503?iy(t,o.intervalMillis,u2):iy(t,o.intervalMillis),E={throttleEndTimeMillis:Date.now()+w,backoffCount:t+1};return o.setThrottleMetadata(l,E),Ht.debug(`Calling attemptFetch again in ${w} millis`),e0(n,E,i,o)}}function m2(n,e){return new Promise((t,i)=>{const o=Math.max(e-Date.now(),0),l=setTimeout(t,o);n.addEventListener(()=>{clearTimeout(l),i(fn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function g2(n){if(!(n instanceof zn)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class y2{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function _2(n,e,t,i,o){if(o&&o.global){n("event",t,i);return}else{const l=await e,c={...i,send_to:l};n("event",t,c)}}async function v2(n,e,t,i){if(i&&i.global){const o={};for(const l of Object.keys(t))o[`user_properties.${l}`]=t[l];return n("set",o),Promise.resolve()}else{const o=await e;n("config",o,{update:!0,user_properties:t})}}/**
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
 */async function w2(){if(fv())try{await pv()}catch(n){return Ht.warn(fn.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return Ht.warn(fn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function E2(n,e,t,i,o,l,c){const f=p2(n);f.then(I=>{t[I.measurementId]=I.appId,n.options.measurementId&&I.measurementId!==n.options.measurementId&&Ht.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${I.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(I=>Ht.error(I)),e.push(f);const p=w2().then(I=>{if(I)return i.getId()}),[y,w]=await Promise.all([f,p]);l2(l)||n2(l,y.measurementId),o("js",new Date);const E=(c==null?void 0:c.config)??{};return E[Yx]="firebase",E.update=!0,w!=null&&(E[Qx]=w),o("config",y.measurementId,E),y.measurementId}/**
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
 */class T2{constructor(e){this.app=e}_delete(){return delete Do[this.app.options.appId],Promise.resolve()}}let Do={},F_=[];const U_={};let Yd="dataLayer",I2="gtag",j_,Pp,z_=!1;function S2(){const n=[];if(dv()&&n.push("This is a browser extension environment."),KI()||n.push("Cookies are not available."),n.length>0){const e=n.map((i,o)=>`(${o+1}) ${i}`).join(" "),t=fn.create("invalid-analytics-context",{errorInfo:e});Ht.warn(t.message)}}function A2(n,e,t){S2();const i=n.options.appId;if(!i)throw fn.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)Ht.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw fn.create("no-api-key");if(Do[i]!=null)throw fn.create("already-exists",{id:i});if(!z_){r2(Yd);const{wrappedGtag:l,gtagCore:c}=a2(Do,F_,U_,Yd,I2);Pp=l,j_=c,z_=!0}return Do[i]=E2(n,F_,U_,e,j_,Yd,t),new T2(n)}function R2(n=bf()){n=st(n);const e=Cs(n,kc);return e.isInitialized()?e.getImmediate():C2(n)}function C2(n,e={}){const t=Cs(n,kc);if(t.isInitialized()){const o=t.getImmediate();if(xi(e,t.getOptions()))return o;throw fn.create("already-initialized")}return t.initialize({options:e})}function P2(n,e,t){n=st(n),v2(Pp,Do[n.app.options.appId],e,t).catch(i=>Ht.error(i))}function k2(n,e,t,i){n=st(n),_2(Pp,Do[n.app.options.appId],e,t,i).catch(o=>Ht.error(o))}const B_="@firebase/analytics",$_="0.10.19";function x2(){dr(new Un(kc,(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("installations-internal").getImmediate();return A2(i,o,t)},"PUBLIC")),dr(new Un("analytics-internal",n,"PRIVATE")),Sn(B_,$_),Sn(B_,$_,"esm2020");function n(e){try{const t=e.getProvider(kc).getImmediate();return{logEvent:(i,o,l)=>k2(t,i,o,l),setUserProperties:(i,o)=>P2(t,i,o)}}catch(t){throw fn.create("interop-component-reg-failed",{reason:t})}}}x2();const N2={apiKey:"AIzaSyAbHTfU_LEZRskt9tAXMRT9XRc8nQlDo9E",authDomain:"tiffin-ff3cc.firebaseapp.com",projectId:"tiffin-ff3cc",storageBucket:"tiffin-ff3cc.firebasestorage.app",messagingSenderId:"708196896667",appId:"1:708196896667:web:8368ff437548aa19481b3e",measurementId:"G-M8RGHCE7ZP"},kp=_v(N2);R2(kp);const xc=OR(kp),Nc=Wk(kp),D2=()=>pA(xc),V2=()=>{const[n,e]=J.useState(null),[t,i]=J.useState(!0);return J.useEffect(()=>fA(xc,l=>{e(l),i(!1)}),[]),{user:n,loading:t}},b2=n=>{const[e,t]=J.useState([]),[i,o]=J.useState(!0);return J.useEffect(()=>{if(!n)return;const l=ix(qk(Nc,`users/${n}/customers`),sx("createdAt","desc"));return lx(l,f=>{t(f.docs.map(p=>({id:p.id,...p.data()}))),o(!1)})},[n]),{customers:e,loading:i}};/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O2=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),t0=(...n)=>n.filter((e,t,i)=>!!e&&i.indexOf(e)===t).join(" ");/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var L2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M2=J.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:i,className:o="",children:l,iconNode:c,...f},p)=>J.createElement("svg",{ref:p,...L2,width:e,height:e,stroke:n,strokeWidth:i?Number(t)*24/Number(e):t,className:t0("lucide",o),...f},[...c.map(([y,w])=>J.createElement(y,w)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kt=(n,e)=>{const t=J.forwardRef(({className:i,...o},l)=>J.createElement(M2,{ref:l,iconNode:e,className:t0(`lucide-${O2(n)}`,i),...o}));return t.displayName=`${n}`,t};/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F2=Kt("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U2=Kt("CalendarDays",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j2=Kt("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z2=Kt("IndianRupee",[["path",{d:"M6 3h12",key:"ggurg9"}],["path",{d:"M6 8h12",key:"6g4wlu"}],["path",{d:"m6 13 8.5 8",key:"u1kupk"}],["path",{d:"M6 13h3",key:"wdp6ag"}],["path",{d:"M9 13c6.667 0 6.667-10 0-10",key:"1nkvk2"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B2=Kt("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $2=Kt("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q2=Kt("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n0=Kt("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W2=Kt("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H2=Kt("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K2=Kt("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r0=Kt("Truck",[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i0=Kt("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G2=Kt("Wallet",[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q2=Kt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),In=({children:n,onClick:e,className:t="",type:i="button",disabled:o=!1})=>{const[l,c]=J.useState([]),f=p=>{if(o)return;const w=p.currentTarget.getBoundingClientRect(),E=Math.max(w.width,w.height),I=p.clientX-w.left-E/2,U=p.clientY-w.top-E/2,$={x:I,y:U,size:E,id:Date.now()};c(q=>[...q,$]),setTimeout(()=>{c(q=>q.filter(V=>V.id!==$.id))},600)};return B.jsxs("button",{type:i,disabled:o,onClick:p=>{f(p),e&&e(p)},className:`relative overflow-hidden outline-none ${t} ${o?"opacity-50 grayscale":""}`,children:[n,l.map(p=>B.jsx("span",{className:"absolute bg-white/30 rounded-full animate-ripple pointer-events-none",style:{top:p.y,left:p.x,width:p.size,height:p.size}},p.id))]})},Y2=({isOpen:n,onClose:e,title:t,children:i})=>n?B.jsx("div",{className:"fixed inset-0 z-[100] flex items-end justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-200",children:B.jsxs("div",{className:"bg-white w-full max-w-md rounded-t-[2.5rem] p-8 shadow-2xl animate-in slide-in-from-bottom-full duration-300 max-h-[90vh] overflow-y-auto",children:[B.jsx("div",{className:"w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-6",onClick:e}),B.jsxs("div",{className:"flex justify-between items-center mb-6",children:[B.jsx("h2",{className:"text-2xl font-black text-gray-900",children:t}),B.jsx(In,{onClick:e,className:"p-2 bg-gray-100 rounded-full text-gray-500",children:B.jsx(Q2,{size:20})})]}),i]})}):null,J2=()=>{const[n,e]=J.useState(""),[t,i]=J.useState(""),[o,l]=J.useState(!1),[c,f]=J.useState(!1),[p,y]=J.useState(null),w=()=>{window.recaptchaVerifier||(window.recaptchaVerifier=new OA(xc,"recaptcha-container",{size:"invisible"}))},E=async U=>{U.preventDefault(),f(!0),w();const $=n.startsWith("+")?n:`+91${n.replace(/\D/g,"")}`,q=window.recaptchaVerifier;try{const V=await FA(xc,$,q);y(V),l(!0)}catch(V){console.error("Error during signInWithPhoneNumber",V),alert("Invalid phone number or reCAPTCHA failed.")}finally{f(!1)}},I=async U=>{U.preventDefault(),f(!0);try{await p.confirm(t)}catch($){console.error("Error during OTP confirmation",$),alert("Invalid OTP. Please try again.")}finally{f(!1)}};return B.jsxs("div",{className:"flex flex-col items-center justify-center min-h-screen p-6 bg-white",children:[B.jsx("div",{id:"recaptcha-container"}),B.jsx("div",{className:"w-24 h-24 bg-orange-600 rounded-[2rem] flex items-center justify-center text-white mb-8 shadow-2xl",children:B.jsx(r0,{size:48})}),B.jsx("h1",{className:"text-4xl font-black text-gray-900 mb-2",children:"TiffinFlow Pro"}),B.jsx("p",{className:"text-gray-500 mb-12 text-center max-w-xs font-medium",children:"Manage your home kitchen business with ease."}),o?B.jsxs("form",{onSubmit:I,className:"w-full max-w-xs space-y-4",children:[B.jsx("input",{type:"number",placeholder:"Enter OTP",className:"w-full bg-gray-100 border-none rounded-2xl py-5 px-6 font-bold text-gray-900 focus:ring-2 focus:ring-orange-600 transition-all tracking-[1em] text-center",value:t,onChange:U=>i(U.target.value),required:!0}),B.jsx(In,{type:"submit",disabled:c,className:"w-full bg-orange-600 text-white font-bold py-5 px-6 rounded-2xl shadow-xl active:scale-95 transition-transform",children:c?"Verifying...":"Verify OTP"}),B.jsx("button",{type:"button",onClick:()=>l(!1),className:"w-full text-gray-400 text-sm font-bold uppercase tracking-widest mt-4",children:"Change Number"})]}):B.jsxs("form",{onSubmit:E,className:"w-full max-w-xs space-y-4",children:[B.jsx("input",{type:"tel",placeholder:"Mobile Number",className:"w-full bg-gray-100 border-none rounded-2xl py-5 px-6 font-bold text-gray-900 focus:ring-2 focus:ring-orange-600 transition-all",value:n,onChange:U=>e(U.target.value),required:!0}),B.jsx(In,{type:"submit",disabled:c,className:"w-full bg-gray-900 text-white font-bold py-5 px-6 rounded-2xl shadow-xl active:scale-95 transition-transform",children:c?"Sending OTP...":"Get Started"})]})]})},X2=n=>n?new Date(n).toLocaleDateString("en-IN",{day:"numeric",month:"long",year:"numeric"}):"",Z2=n=>{const e=n.filter(t=>t.status!=="Paused");return{totalMeals:e.length,vegCount:e.filter(t=>t.type==="Veg").length,nonVegCount:e.filter(t=>t.type==="Non-Veg").length,pausedCount:n.filter(t=>t.status==="Paused").length,pendingPayments:n.reduce((t,i)=>t+(i.balance||0),0)}},eN=({user:n,customers:e})=>{const t=Z2(e),i=e.filter(l=>{if(!l.expiryDate)return!1;const p=new Date(l.expiryDate)-new Date,y=Math.ceil(p/(1e3*60*60*24));return y>=0&&y<=3}).length,o=[{label:"Total Meals Today",value:t.totalMeals,color:"bg-orange-600",icon:r0,full:!0},{label:"Veg Count",value:t.vegCount,color:"bg-green-100 text-green-700"},{label:"Non-Veg Count",value:t.nonVegCount,color:"bg-rose-100 text-rose-700"},{label:"Paused Today",value:t.pausedCount,color:"bg-amber-100 text-amber-700"},{label:"Expiring Soon (3 days)",value:i,color:"bg-orange-100 text-orange-700"},{label:"Pending Payments",value:`₹${t.pendingPayments}`,color:"bg-red-100 text-red-700"}];return B.jsxs("div",{className:"p-4 pt-6 pb-24 max-w-full overflow-x-hidden min-h-screen",children:[B.jsxs("div",{className:"flex justify-between items-center mb-8 px-2",children:[B.jsxs("div",{children:[B.jsx("h2",{className:"text-sm font-bold text-orange-600 uppercase tracking-widest mb-1",children:"TiffinFlow Pro"}),B.jsx("h2",{className:"text-3xl font-black tracking-tight text-gray-900",children:X2(new Date)}),B.jsx("p",{className:"text-gray-500 text-sm font-medium",children:"Namaste!"})]}),B.jsx("div",{className:"flex gap-3",children:B.jsx(In,{className:"p-3 bg-gray-100 rounded-2xl text-gray-700 active:scale-95 transition-transform",children:B.jsx(F2,{size:24})})})]}),B.jsx("div",{className:"grid grid-cols-2 gap-4",children:o.map((l,c)=>B.jsxs("div",{className:`${l.color} ${l.full?"col-span-2 p-8":"p-6 aspect-square"} rounded-[2.5rem] shadow-sm flex flex-col justify-between relative overflow-hidden active:scale-[0.98] transition-all cursor-pointer border border-black/5`,children:[B.jsxs("div",{className:"relative z-10",children:[B.jsx("p",{className:`text-xs font-bold uppercase tracking-wider mb-2 ${l.full?"opacity-80 text-white":"opacity-60"}`,children:l.label}),B.jsx("p",{className:`font-black ${l.full?"text-5xl text-white":"text-3xl"}`,children:l.value})]}),l.icon&&B.jsx(l.icon,{size:80,className:"opacity-10 absolute -right-4 -bottom-4 text-white"})]},c))})]})},tN=({customers:n,user:e})=>{const[t,i]=J.useState(""),[o,l]=J.useState("All"),[c,f]=J.useState("All"),[p,y]=J.useState(null),[w,E]=J.useState(!1);[...new Set(n.map(V=>V.area).filter(Boolean))];const I=["All","Active","Paused","Expired"],U=n.filter(V=>V.name.toLowerCase().includes(t.toLowerCase())&&(o==="All"||V.area===o)&&(c==="All"||V.status===c||c==="Active"&&!V.status)),$=async(V,re)=>{try{await DE(Cf(Nc,`users/${e.uid}/customers`,V),{status:re}),E(!1)}catch(te){console.error(te)}},q=async V=>{if(window.confirm("Are you sure?"))try{await ax(Cf(Nc,`users/${e.uid}/customers`,V)),E(!1)}catch(re){console.error(re)}};return B.jsxs("div",{className:"p-4 pt-6 pb-24 min-h-screen",children:[B.jsxs("div",{className:"px-2 mb-6",children:[B.jsx("h2",{className:"text-3xl font-black mb-4 tracking-tight",children:"Customers"}),B.jsxs("div",{className:"space-y-4",children:[B.jsxs("div",{className:"relative",children:[B.jsx(H2,{className:"absolute left-4 top-1/2 -translate-y-1/2 text-gray-400",size:20}),B.jsx("input",{type:"text",placeholder:"Search...",className:"w-full bg-gray-100 border-none rounded-2xl py-4 pl-12 pr-4 font-bold text-gray-900 focus:ring-2 focus:ring-orange-600 transition-all",value:t,onChange:V=>i(V.target.value)})]}),B.jsx("div",{className:"flex gap-2 overflow-x-auto pb-1 no-scrollbar",children:I.map(V=>B.jsx("button",{onClick:()=>f(V),className:`px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-wider transition-all whitespace-nowrap border ${c===V?"bg-orange-600 text-white border-orange-600 shadow-md":"bg-white text-gray-500 border-gray-100"}`,children:V},V))})]})]}),B.jsx("div",{className:"space-y-4",children:U.map(V=>B.jsxs(In,{onClick:()=>{y(V),E(!0)},className:"w-full bg-white p-5 rounded-[2rem] border border-gray-100 shadow-sm flex items-center justify-between text-left active:scale-[0.98] transition-all",children:[B.jsxs("div",{className:"flex items-center gap-4",children:[B.jsx("div",{className:`w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-black ${V.type==="Veg"?"bg-green-100 text-green-600":"bg-red-100 text-red-600"}`,children:V.name[0]}),B.jsxs("div",{children:[B.jsx("p",{className:"font-bold text-gray-900 text-lg leading-tight mb-1",children:V.name}),B.jsx("span",{className:`text-[10px] font-black uppercase px-2 py-0.5 rounded-full border ${V.type==="Veg"?"bg-green-50 text-green-600 border-green-100":"bg-red-50 text-red-600 border-red-100"}`,children:V.type})]})]}),B.jsxs("div",{className:"text-right",children:[B.jsxs("p",{className:"text-lg font-black text-gray-900",children:["₹",V.balance||0]}),B.jsx("p",{className:"text-[10px] font-bold text-gray-400 uppercase tracking-tighter",children:"Balance"})]})]},V.id))}),B.jsx(Y2,{isOpen:w,onClose:()=>E(!1),title:p==null?void 0:p.name,children:B.jsxs("div",{className:"space-y-6",children:[B.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[B.jsx(In,{onClick:()=>$(p.id,p.status==="Paused"?"Active":"Paused"),className:`py-5 rounded-2xl font-black ${(p==null?void 0:p.status)==="Paused"?"bg-green-600 text-white":"bg-amber-100 text-amber-600"}`,children:(p==null?void 0:p.status)==="Paused"?"Resume":"Pause"}),B.jsxs(In,{onClick:()=>window.open(`tel:${p==null?void 0:p.phone}`),className:"bg-blue-600 text-white py-5 rounded-2xl font-black flex items-center justify-center gap-2",children:[B.jsx(W2,{size:18})," Call"]})]}),B.jsx(In,{onClick:()=>q(p.id),className:"w-full bg-red-50 text-red-600 py-5 rounded-2xl font-black",children:"Delete Customer"})]})})]})},nN=({customers:n})=>{const[e,t]=J.useState("All"),i=n.filter(c=>c.status!=="Paused"),o=["All",...new Set(i.map(c=>c.area).filter(Boolean))],l=i.filter(c=>e==="All"||c.area===e);return B.jsxs("div",{className:"p-4 pt-6 pb-24 min-h-screen",children:[B.jsxs("div",{className:"mb-8 px-2",children:[B.jsx("p",{className:"text-orange-600 font-bold uppercase tracking-widest text-[10px] mb-2",children:"Production"}),B.jsxs("h2",{className:"text-4xl font-black text-gray-900 leading-tight",children:["Aaj ",i.length," tiffin banana hai"]}),B.jsx("div",{className:"flex gap-2 overflow-x-auto pb-2 no-scrollbar mt-8",children:o.map(c=>B.jsx("button",{onClick:()=>t(c),className:`px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-wider transition-all border ${e===c?"bg-orange-600 text-white border-orange-600":"bg-white text-gray-500 border-gray-100"}`,children:c},c))})]}),B.jsx("div",{className:"space-y-4",children:l.map(c=>B.jsxs("div",{className:"bg-white p-6 rounded-[2rem] flex items-center justify-between border border-gray-100 shadow-sm",children:[B.jsxs("div",{className:"flex-1",children:[B.jsx("p",{className:"font-bold text-gray-900 text-lg leading-none mb-3",children:c.name}),B.jsxs("div",{className:"flex items-center gap-3",children:[B.jsx("span",{className:`text-[10px] font-black uppercase px-2.5 py-1 rounded-full ${c.type==="Veg"?"bg-green-100 text-green-600":"bg-red-100 text-red-600"}`,children:c.type}),c.area&&B.jsxs("span",{className:"text-[10px] font-bold text-gray-400 flex items-center gap-1.5 uppercase tracking-wider",children:[B.jsx(q2,{size:12})," ",c.area]})]})]}),B.jsx(In,{onClick:()=>window.open(`https://wa.me/91${c.phone}`),className:"ml-4 w-14 h-14 bg-green-500 text-white rounded-2xl flex items-center justify-center shadow-lg",children:B.jsx(n0,{size:24})})]},c.id))})]})},rN=({customers:n,user:e})=>{const t=n.filter(c=>(c.balance||0)>0),i=t.reduce((c,f)=>c+(f.balance||0),0),o=async c=>{try{await DE(Cf(Nc,`users/${e.uid}/customers`,c),{balance:0})}catch(f){console.error(f)}},l=c=>{const f=`Namaste ${c.name}, TiffinFlow ki taraf se reminder. Aapka ₹${c.balance} pending hai. Dhanyavad!`;window.open(`https://wa.me/91${c.phone}?text=${encodeURIComponent(f)}`)};return B.jsxs("div",{className:"p-4 pt-6 pb-24 min-h-screen",children:[B.jsx("h2",{className:"text-3xl font-black mb-8 px-2 text-gray-900 tracking-tight",children:"Payments"}),B.jsxs("div",{className:"bg-red-600 p-10 rounded-[2.5rem] shadow-2xl text-white mb-10 relative overflow-hidden",children:[B.jsxs("div",{className:"relative z-10",children:[B.jsx("p",{className:"text-[10px] font-bold opacity-70 uppercase tracking-widest mb-2",children:"Total Pending"}),B.jsxs("p",{className:"text-6xl font-black",children:["₹",i]})]}),B.jsx(z2,{size:120,className:"absolute -right-8 -bottom-8 opacity-10"})]}),B.jsx("div",{className:"space-y-4",children:t.map(c=>B.jsxs("div",{className:"bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm flex flex-col gap-6",children:[B.jsxs("div",{className:"flex justify-between items-start",children:[B.jsxs("div",{children:[B.jsx("p",{className:"font-bold text-gray-900 text-xl leading-tight mb-1",children:c.name}),B.jsxs("p",{className:"text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-red-100 text-red-600",children:["Pending: ₹",c.balance]})]}),B.jsx(In,{onClick:()=>l(c),className:"p-4 bg-green-500 text-white rounded-2xl shadow-lg",children:B.jsx(n0,{size:22})})]}),B.jsx(In,{onClick:()=>o(c.id),className:"w-full bg-gray-900 text-white py-5 rounded-2xl font-black shadow-xl",children:"Mark as Paid"})]},c.id))})]})},iN=({user:n})=>B.jsxs("div",{className:"p-4 pt-6 pb-24",children:[B.jsx("h2",{className:"text-3xl font-black tracking-tight text-gray-900 mb-8 px-2",children:"Settings"}),B.jsxs("div",{className:"space-y-4",children:[B.jsxs("div",{className:"bg-gray-50 p-6 rounded-[2rem] flex items-center gap-4",children:[B.jsx("div",{className:"w-16 h-16 bg-white rounded-2xl flex items-center justify-center overflow-hidden",children:B.jsx(i0,{className:"text-gray-300"})}),B.jsxs("div",{children:[B.jsx("p",{className:"font-black text-lg",children:(n==null?void 0:n.phoneNumber)||"User"}),B.jsx("p",{className:"text-xs font-bold text-gray-400 uppercase tracking-widest",children:"Admin"})]})]}),B.jsxs(In,{onClick:D2,className:"w-full bg-red-50 p-6 rounded-[2rem] flex items-center justify-between text-left mt-8",children:[B.jsxs("div",{className:"flex items-center gap-4",children:[B.jsx("div",{className:"p-3 bg-white rounded-xl text-red-600 shadow-sm",children:B.jsx($2,{size:20})}),B.jsx("span",{className:"font-black text-red-600",children:"Logout"})]}),B.jsx(j2,{size:20,className:"text-red-200"})]})]})]}),sN=()=>{const n=[{icon:B2,label:"Home",path:"/dashboard"},{icon:i0,label:"Clients",path:"/customers"},{icon:U2,label:"Today",path:"/today"},{icon:G2,label:"Pay",path:"/payments"},{icon:K2,label:"Set",path:"/settings"}];return B.jsx("nav",{className:"fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-t border-gray-100 px-6 py-4 flex justify-between items-center z-50 pb-safe",children:n.map(e=>B.jsxs(SI,{to:e.path,className:({isActive:t})=>`flex flex-col items-center gap-1 transition-all ${t?"text-orange-600 scale-110":"text-gray-400"}`,children:[B.jsx(e.icon,{size:24,strokeWidth:isActive?2.5:2}),B.jsx("span",{className:"text-[10px] font-black uppercase tracking-tighter",children:e.label})]},e.path))})};function oN(){const{user:n,loading:e}=V2(),{customers:t}=b2(n==null?void 0:n.uid);return e?B.jsx("div",{className:"min-h-screen flex items-center justify-center bg-white",children:B.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"})}):n?B.jsx(wI,{children:B.jsxs("div",{className:"min-h-screen bg-white text-gray-900 font-sans selection:bg-orange-100 selection:text-orange-900",children:[B.jsxs(dI,{children:[B.jsx(fs,{path:"/dashboard",element:B.jsx(eN,{user:n,customers:t})}),B.jsx(fs,{path:"/customers",element:B.jsx(tN,{user:n,customers:t})}),B.jsx(fs,{path:"/today",element:B.jsx(nN,{customers:t})}),B.jsx(fs,{path:"/payments",element:B.jsx(rN,{user:n,customers:t})}),B.jsx(fs,{path:"/settings",element:B.jsx(iN,{user:n})}),B.jsx(fs,{path:"*",element:B.jsx(cI,{to:"/dashboard",replace:!0})})]}),B.jsx(sN,{})]})}):B.jsx(J2,{})}ET.createRoot(document.getElementById("root")).render(B.jsx(W_.StrictMode,{children:B.jsx(oN,{})}));
