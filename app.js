/* PART 1 */
(()=>{var Tm=Object.create;var Hi=Object.defineProperty;var Am=Object.getOwnPropertyDescriptor;var Om=Object.getOwnPropertyNames;var _m=Object.getPrototypeOf,Mm=Object.prototype.hasOwnProperty;var At=(l,t)=>()=>{try{return t||l((t={exports:{}}).exports,t),t.exports}catch(u){throw t=0,u}};var Dm=(l,t,u,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Om(t))!Mm.call(l,n)&&n!==u&&Hi(l,n,{get:()=>t[n],enumerable:!(a=Am(t,n))||a.enumerable});return l};var Ni=(l,t,u)=>(u=l!=null?Tm(_m(l)):{},Dm(t||!l||!l.__esModule?Hi(u,"default",{value:l,enumerable:!0}):u,l));var ji=At(_=>{"use strict";var Ke=Symbol.for("react.transitional.element"),Um=Symbol.for("react.portal"),Hm=Symbol.for("react.fragment"),Nm=Symbol.for("react.strict_mode"),pm=Symbol.for("react.profiler"),qm=Symbol.for("react.consumer"),Bm=Symbol.for("react.context"),Ym=Symbol.for("react.forward_ref"),Rm=Symbol.for("react.suspense"),Cm=Symbol.for("react.memo"),Ri=Symbol.for("react.lazy"),Gm=Symbol.for("react.activity"),pi=Symbol.iterator;function Xm(l){return l===null||typeof l!="object"?null:(l=pi&&l[pi]||l["@@iterator"],typeof l=="function"?l:null)}var Ci={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Gi=Object.assign,Xi={};function bu(l,t,u){this.props=l,this.context=t,this.refs=Xi,this.updater=u||Ci}bu.prototype.isReactComponent={};bu.prototype.setState=function(l,t){if(typeof l!="object"&&typeof l!="function"&&l!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,l,t,"setState")};bu.prototype.forceUpdate=function(l){this.updater.enqueueForceUpdate(this,l,"forceUpdate")};function Qi(){}Qi.prototype=bu.prototype;function Je(l,t,u){this.props=l,this.context=t,this.refs=Xi,this.updater=u||Ci}var re=Je.prototype=new Qi;re.constructor=Je;Gi(re,bu.prototype);re.isPureReactComponent=!0;var qi=Array.isArray;function Le(){}var L={H:null,A:null,T:null,S:null},Zi=Object.prototype.hasOwnProperty;function we(l,t,u){var a=u.ref;return{$$typeof:Ke,type:l,key:t,ref:a!==void 0?a:null,props:u}}function Qm(l,t){return we(l.type,t,l.props)}function We(l){return typeof l=="object"&&l!==null&&l.$$typeof===Ke}function Zm(l){var t={"=":"=0",":":"=2"};return"$"+l.replace(/[=:]/g,function(u){return t[u]})}var Bi=/\/+/g;function xe(l,t){return typeof l=="object"&&l!==null&&l.key!=null?Zm(""+l.key):t.toString(36)}function jm(l){switch(l.status){case"fulfilled":return l.value;case"rejected":throw l.reason;default:switch(typeof l.status=="string"?l.then(Le,Le):(l.status="pending",l.then(function(t){l.status==="pending"&&(l.status="fulfilled",l.value=t)},function(t){l.status==="pending"&&(l.status="rejected",l.reason=t)})),l.status){case"fulfilled":return l.value;case"rejected":throw l.reason}}throw l}function su(l,t,u,a,n){var e=typeof l;(e==="undefined"||e==="boolean")&&(l=null);var f=!1;if(l===null)f=!0;else switch(e){case"bigint":case"string":case"number":f=!0;break;case"object":switch(l.$$typeof){case Ke:case Um:f=!0;break;case Ri:return f=l._init,su(f(l._payload),t,u,a,n)}}if(f)return n=n(l),f=a===""?"."+xe(l,0):a,qi(n)?(u="",f!=null&&(u=f.replace(Bi,"$&/")+"/"),su(n,t,u,"",function(m){return m})):n!=null&&(We(n)&&(n=Qm(n,u+(n.key==null||l&&l.key===n.key?"":(""+n.key).replace(Bi,"$&/")+"/")+f)),t.push(n)),1;f=0;var c=a===""?".":a+":";if(qi(l))for(var i=0;i<l.length;i++)a=l[i],e=c+xe(a,i),f+=su(a,t,u,e,n);else if(i=Xm(l),typeof i=="function")for(l=i.call(l),i=0;!(a=l.next()).done;)a=a.value,e=c+xe(a,i++),f+=su(a,t,u,e,n);else if(e==="object"){if(typeof l.then=="function")return su(jm(l),t,u,a,n);throw t=String(l),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(l).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return f}function mn(l,t,u){if(l==null)return l;var a=[],n=0;return su(l,a,"","",function(e){return t.call(u,e,n++)}),a}function Vm(l){if(l._status===-1){var t=l._result;t=t(),t.then(function(u){(l._status===0||l._status===-1)&&(l._status=1,l._result=u)},function(u){(l._status===0||l._status===-1)&&(l._status=2,l._result=u)}),l._status===-1&&(l._status=0,l._result=t)}if(l._status===1)return l._result.default;throw l._result}var Yi=typeof reportError=="function"?reportError:function(l){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof l=="object"&&l!==null&&typeof l.message=="string"?String(l.message):String(l),error:l});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",l);return}console.error(l)},xm={map:mn,forEach:function(l,t,u){mn(l,function(){t.apply(this,arguments)},u)},count:function(l){var t=0;return mn(l,function(){t++}),t},toArray:function(l){return mn(l,function(t){return t})||[]},only:function(l){if(!We(l))throw Error("React.Children.only expected to receive a single React element child.");return l}};_.Activity=Gm;_.Children=xm;_.Component=bu;_.Fragment=Hm;_.Profiler=pm;_.PureComponent=Je;_.StrictMode=Nm;_.Suspense=Rm;_.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=L;_.__COMPILER_RUNTIME={__proto__:null,c:function(l){return L.H.useMemoCache(l)}};_.cache=function(l){return function(){return l.apply(null,arguments)}};_.cacheSignal=function(){return null};_.cloneElement=function(l,t,u){if(l==null)throw Error("The argument must be a React element, but you passed "+l+".");var a=Gi({},l.props),n=l.key;if(t!=null)for(e in t.key!==void 0&&(n=""+t.key),t)!Zi.call(t,e)||e==="key"||e==="__self"||e==="__source"||e==="ref"&&t.ref===void 0||(a[e]=t[e]);var e=arguments.length-2;if(e===1)a.children=u;else if(1<e){for(var f=Array(e),c=0;c<e;c++)f[c]=arguments[c+2];a.children=f}return we(l.type,n,a)};_.createContext=function(l){return l={$$typeof:Bm,_currentValue:l,_currentValue2:l,_threadCount:0,Provider:null,Consumer:null},l.Provider=l,l.Consumer={$$typeof:qm,_context:l},l};_.createElement=function(l,t,u){var a,n={},e=null;if(t!=null)for(a in t.key!==void 0&&(e=""+t.key),t)Zi.call(t,a)&&a!=="key"&&a!=="__self"&&a!=="__source"&&(n[a]=t[a]);var f=arguments.length-2;if(f===1)n.children=u;else if(1<f){for(var c=Array(f),i=0;i<f;i++)c[i]=arguments[i+2];n.children=c}if(l&&l.defaultProps)for(a in f=l.defaultProps,f)n[a]===void 0&&(n[a]=f[a]);return we(l,e,n)};_.createRef=function(){return{current:null}};_.forwardRef=function(l){return{$$typeof:Ym,render:l}};_.isValidElement=We;_.lazy=function(l){return{$$typeof:Ri,_payload:{_status:-1,_result:l},_init:Vm}};_.memo=function(l,t){return{$$typeof:Cm,type:l,compare:t===void 0?null:t}};_.startTransition=function(l){var t=L.T,u={};L.T=u;try{var a=l(),n=L.S;n!==null&&n(u,a),typeof a=="object"&&a!==null&&typeof a.then=="function"&&a.then(Le,Yi)}catch(e){Yi(e)}finally{t!==null&&u.types!==null&&(t.types=u.types),L.T=t}};_.unstable_useCacheRefresh=function(){return L.H.useCacheRefresh()};_.use=function(l){return L.H.use(l)};_.useActionState=function(l,t,u){return L.H.useActionState(l,t,u)};_.useCallback=function(l,t){return L.H.useCallback(l,t)};_.useContext=function(l){return L.H.useContext(l)};_.useDebugValue=function(){};_.useDeferredValue=function(l,t){return L.H.useDeferredValue(l,t)};_.useEffect=function(l,t){return L.H.useEffect(l,t)};_.useEffectEvent=function(l){return L.H.useEffectEvent(l)};_.useId=function(){return L.H.useId()};_.useImperativeHandle=function(l,t,u){return L.H.useImperativeHandle(l,t,u)};_.useInsertionEffect=function(l,t){return L.H.useInsertionEffect(l,t)};_.useLayoutEffect=function(l,t){return L.H.useLayoutEffect(l,t)};_.useMemo=function(l,t){return L.H.useMemo(l,t)};_.useOptimistic=function(l,t){return L.H.useOptimistic(l,t)};_.useReducer=function(l,t,u){return L.H.useReducer(l,t,u)};_.useRef=function(l){return L.H.useRef(l)};_.useState=function(l){return L.H.useState(l)};_.useSyncExternalStore=function(l,t,u){return L.H.useSyncExternalStore(l,t,u)};_.useTransition=function(){return L.H.useTransition()};_.version="19.2.8"});var dn=At((A2,Vi)=>{"use strict";Vi.exports=ji()});var ki=At(w=>{"use strict";function Ie(l,t){var u=l.length;l.push(t);l:for(;0<u;){var a=u-1>>>1,n=l[a];if(0<hn(n,t))l[a]=t,l[u]=n,u=a;else break l}}function Wl(l){return l.length===0?null:l[0]}function gn(l){if(l.length===0)return null;var t=l[0],u=l.pop();if(u!==t){l[0]=u;l:for(var a=0,n=l.length,e=n>>>1;a<e;){var f=2*(a+1)-1,c=l[f],i=f+1,m=l[i];if(0>hn(c,u))i<n&&0>hn(m,c)?(l[a]=m,l[i]=u,a=i):(l[a]=c,l[f]=u,a=f);else if(i<n&&0>hn(m,u))l[a]=m,l[i]=u,a=i;else break l}}return t}function hn(l,t){var u=l.sortIndex-t.sortIndex;return u!==0?u:l.id-t.id}w.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(xi=performance,w.unstable_now=function(){return xi.now()}):($e=Date,Li=$e.now(),w.unstable_now=function(){return $e.now()-Li});var xi,$e,Li,tt=[],Ot=[],Lm=1,Rl=null,hl=3,Pe=!1,ya=!1,va=!1,lf=!1,ri=typeof setTimeout=="function"?setTimeout:null,wi=typeof clearTimeout=="function"?clearTimeout:null,Ki=typeof setImmediate<"u"?setImmediate:null;function Sn(l){for(var t=Wl(Ot);t!==null;){if(t.callback===null)gn(Ot);else if(t.startTime<=l)gn(Ot),t.sortIndex=t.expirationTime,Ie(tt,t);else break;t=Wl(Ot)}}function tf(l){if(va=!1,Sn(l),!ya)if(Wl(tt)!==null)ya=!0,Eu||(Eu=!0,zu());else{var t=Wl(Ot);t!==null&&uf(tf,t.startTime-l)}}var Eu=!1,ma=-1,Wi=5,$i=-1;function Fi(){return lf?!0:!(w.unstable_now()-$i<Wi)}function Fe(){if(lf=!1,Eu){var l=w.unstable_now();$i=l;var t=!0;try{l:{ya=!1,va&&(va=!1,wi(ma),ma=-1),Pe=!0;var u=hl;try{t:{for(Sn(l),Rl=Wl(tt);Rl!==null&&!(Rl.expirationTime>l&&Fi());){var a=Rl.callback;if(typeof a=="function"){Rl.callback=null,hl=Rl.priorityLevel;var n=a(Rl.expirationTime<=l);if(l=w.unstable_now(),typeof n=="function"){Rl.callback=n,Sn(l),t=!0;break t}Rl===Wl(tt)&&gn(tt),Sn(l)}else gn(tt);Rl=Wl(tt)}if(Rl!==null)t=!0;else{var e=Wl(Ot);e!==null&&uf(tf,e.startTime-l),t=!1}}break l}finally{Rl=null,hl=u,Pe=!1}t=void 0}}finally{t?zu():Eu=!1}}}var zu;typeof Ki=="function"?zu=function(){Ki(Fe)}:typeof MessageChannel<"u"?(ke=new MessageChannel,Ji=ke.port2,ke.port1.onmessage=Fe,zu=function(){Ji.postMessage(null)}):zu=function(){ri(Fe,0)};var ke,Ji;function uf(l,t){ma=ri(function(){l(w.unstable_now())},t)}w.unstable_IdlePriority=5;w.unstable_ImmediatePriority=1;w.unstable_LowPriority=4;w.unstable_NormalPriority=3;w.unstable_Profiling=null;w.unstable_UserBlockingPriority=2;w.unstable_cancelCallback=function(l){l.callback=null};w.unstable_forceFrameRate=function(l){0>l||125<l?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Wi=0<l?Math.floor(1e3/l):5};w.unstable_getCurrentPriorityLevel=function(){return hl};w.unstable_next=function(l){switch(hl){case 1:case 2:case 3:var t=3;break;default:t=hl}var u=hl;hl=t;try{return l()}finally{hl=u}};w.unstable_requestPaint=function(){lf=!0};w.unstable_runWithPriority=function(l,t){switch(l){case 1:case 2:case 3:case 4:case 5:break;default:l=3}var u=hl;hl=l;try{return t()}finally{hl=u}};w.unstable_scheduleCallback=function(l,t,u){var a=w.unstable_now();switch(typeof u=="object"&&u!==null?(u=u.delay,u=typeof u=="number"&&0<u?a+u:a):u=a,l){case 1:var n=-1;break;case 2:n=250;break;case 5:n=1073741823;break;case 4:n=1e4;break;default:n=5e3}return n=u+n,l={id:Lm++,callback:t,priorityLevel:l,startTime:u,expirationTime:n,sortIndex:-1},u>a?(l.sortIndex=u,Ie(Ot,l),Wl(tt)===null&&l===Wl(Ot)&&(va?(wi(ma),ma=-1):va=!0,uf(tf,u-a))):(l.sortIndex=n,Ie(tt,l),ya||Pe||(ya=!0,Eu||(Eu=!0,zu()))),l};w.unstable_shouldYield=Fi;w.unstable_wrapCallback=function(l){var t=hl;return function(){var u=hl;hl=t;try{return l.apply(this,arguments)}finally{hl=u}}}});var Pi=At((_2,Ii)=>{"use strict";Ii.exports=ki()});var t0=At(gl=>{"use strict";var Km=dn();function l0(l){var t="https://react.dev/errors/"+l;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var u=2;u<arguments.length;u++)t+="&args[]="+encodeURIComponent(arguments[u])}return"Minified React error #"+l+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function _t(){}var Sl={d:{f:_t,r:function(){throw Error(l0(522))},D:_t,C:_t,L:_t,m:_t,X:_t,S:_t,M:_t},p:0,findDOMNode:null},Jm=Symbol.for("react.portal");function rm(l,t,u){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Jm,key:a==null?null:""+a,children:l,containerInfo:t,implementation:u}}var da=Km.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function on(l,t){if(l==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}gl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Sl;gl.createPortal=function(l,t){var u=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(l0(299));return rm(l,t,null,u)};gl.flushSync=function(l){var t=da.T,u=Sl.p;try{if(da.T=null,Sl.p=2,l)return l()}finally{da.T=t,Sl.p=u,Sl.d.f()}};gl.preconnect=function(l,t){typeof l=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,Sl.d.C(l,t))};gl.prefetchDNS=function(l){typeof l=="string"&&Sl.d.D(l)};gl.preinit=function(l,t){if(typeof l=="string"&&t&&typeof t.as=="string"){var u=t.as,a=on(u,t.crossOrigin),n=typeof t.integrity=="string"?t.integrity:void 0,e=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;u==="style"?Sl.d.S(l,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:a,integrity:n,fetchPriority:e}):u==="script"&&Sl.d.X(l,{crossOrigin:a,integrity:n,fetchPriority:e,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};gl.preinitModule=function(l,t){if(typeof l=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var u=on(t.as,t.crossOrigin);Sl.d.M(l,{crossOrigin:u,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&Sl.d.M(l)};gl.preload=function(l,t){if(typeof l=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var u=t.as,a=on(u,t.crossOrigin);Sl.d.L(l,u,{crossOrigin:a,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};gl.preloadModule=function(l,t){if(typeof l=="string")if(t){var u=on(t.as,t.crossOrigin);Sl.d.m(l,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:u,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else Sl.d.m(l)};gl.requestFormReset=function(l){Sl.d.r(l)};gl.unstable_batchedUpdates=function(l,t){return l(t)};gl.useFormState=function(l,t,u){return da.H.useFormState(l,t,u)};gl.useFormStatus=function(){return da.H.useHostTransitionStatus()};gl.version="19.2.8"});var n0=At((D2,a0)=>{"use strict";function u0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u0)}catch(l){console.error(l)}}u0(),a0.exports=t0()});var om=At(Ve=>{"use strict";var nl=Pi(),p1=dn(),wm=n0();function b(l){var t="https://react.dev/errors/"+l;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var u=2;u<arguments.length;u++)t+="&args[]="+encodeURIComponent(arguments[u])}return"Minified React error #"+l+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function q1(l){return!(!l||l.nodeType!==1&&l.nodeType!==9&&l.nodeType!==11)}function Ia(l){var t=l,u=l;if(l.alternate)for(;t.return;)t=t.return;else{l=t;do t=l,(t.flags&4098)!==0&&(u=t.return),l=t.return;while(l)}return t.tag===3?u:null}function B1(l){if(l.tag===13){var t=l.memoizedState;if(t===null&&(l=l.alternate,l!==null&&(t=l.memoizedState)),t!==null)return t.dehydrated}return null}function Y1(l){if(l.tag===31){var t=l.memoizedState;if(t===null&&(l=l.alternate,l!==null&&(t=l.memoizedState)),t!==null)return t.dehydrated}return null}function e0(l){if(Ia(l)!==l)throw Error(b(188))}function Wm(l){var t=l.alternate;if(!t){if(t=Ia(l),t===null)throw Error(b(188));return t!==l?null:l}for(var u=l,a=t;;){var n=u.return;if(n===null)break;var e=n.alternate;if(e===null){if(a=n.return,a!==null){u=a;continue}break}if(n.child===e.child){for(e=n.child;e;){if(e===u)return e0(n),l;if(e===a)return e0(n),t;e=e.sibling}throw Error(b(188))}if(u.return!==a.return)u=n,a=e;else{for(var f=!1,c=n.child;c;){if(c===u){f=!0,u=n,a=e;break}if(c===a){f=!0,a=n,u=e;break}c=c.sibling}if(!f){for(c=e.child;c;){if(c===u){f=!0,u=e,a=n;break}if(c===a){f=!0,a=e,u=n;break}c=c.sibling}if(!f)throw Error(b(189))}}if(u.alternate!==a)throw Error(b(190))}if(u.tag!==3)throw Error(b(188));return u.stateNode.current===u?l:t}function R1(l){var t=l.tag;if(t===5||t===26||t===27||t===6)return l;for(l=l.child;l!==null;){if(t=R1(l),t!==null)return t;l=l.sibling}return null}var r=Object.assign,$m=Symbol.for("react.element"),sn=Symbol.for("react.transitional.element"),Ea=Symbol.for("react.portal"),Du=Symbol.for("react.fragment"),C1=Symbol.for("react.strict_mode"),Xf=Symbol.for("react.profiler"),G1=Symbol.for("react.consumer"),yt=Symbol.for("react.context"),Bc=Symbol.for("react.forward_ref"),Qf=Symbol.for("react.suspense"),Zf=Symbol.for("react.suspense_list"),Yc=Symbol.for("react.memo"),Mt=Symbol.for("react.lazy"),jf=Symbol.for("react.activity"),Fm=Symbol.for("react.memo_cache_sentinel"),f0=Symbol.iterator;function ha(l){return l===null||typeof l!="object"?null:(l=f0&&l[f0]||l["@@iterator"],typeof l=="function"?l:null)}var km=Symbol.for("react.client.reference");function Vf(l){if(l==null)return null;if(typeof l=="function")return l.$$typeof===km?null:l.displayName||l.name||null;if(typeof l=="string")return l;switch(l){case Du:return"Fragment";case Xf:return"Profiler";case C1:return"StrictMode";case Qf:return"Suspense";case Zf:return"SuspenseList";case jf:return"Activity"}if(typeof l=="object")switch(l.$$typeof){case Ea:return"Portal";case yt:return l.displayName||"Context";case G1:return(l._context.displayName||"Context")+".Consumer";case Bc:var t=l.render;return l=l.displayName,l||(l=t.displayName||t.name||"",l=l!==""?"ForwardRef("+l+")":"ForwardRef"),l;case Yc:return t=l.displayName||null,t!==null?t:Vf(l.type)||"Memo";case Mt:t=l._payload,l=l._init;try{return Vf(l(t))}catch{}}return null}var Ta=Array.isArray,O=p1.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,C=wm.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,uu={pending:!1,data:null,method:null,action:null},xf=[],Uu=-1;function Pl(l){return{current:l}}function cl(l){0>Uu||(l.current=xf[Uu],xf[Uu]=null,Uu--)}function x(l,t){Uu++,xf[Uu]=l.current,l.current=t}var Il=Pl(null),Qa=Pl(null),Gt=Pl(null),Fn=Pl(null);function kn(l,t){switch(x(Gt,t),x(Qa,l),x(Il,null),t.nodeType){case 9:case 11:l=(l=t.documentElement)&&(l=l.namespaceURI)?h1(l):0;break;default:if(l=t.tagName,t=t.namespaceURI)t=h1(t),l=um(t,l);else switch(l){case"svg":l=1;break;case"math":l=2;break;default:l=0}}cl(Il),x(Il,l)}function Ju(){cl(Il),cl(Qa),cl(Gt)}function Lf(l){l.memoizedState!==null&&x(Fn,l);var t=Il.current,u=um(t,l.type);t!==u&&(x(Qa,l),x(Il,u))}function In(l){Qa.current===l&&(cl(Il),cl(Qa)),Fn.current===l&&(cl(Fn),$a._currentValue=uu)}var af,c0;function It(l){if(af===void 0)try{throw Error()}catch(u){var t=u.stack.trim().match(/\n( *(at )?)/);af=t&&t[1]||"",c0=-1<u.stack.indexOf(`
    at`)?" (<anonymous>)":-1<u.stack.indexOf("@")?"@unknown:0:0":""}return`
`+af+l+c0}var nf=!1;function ef(l,t){if(!l||nf)return"";nf=!0;var u=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var s=function(){throw Error()};if(Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(S){var h=S}Reflect.construct(l,[],s)}else{try{s.call()}catch(S){h=S}l.call(s.prototype)}}else{try{throw Error()}catch(S){h=S}(s=l())&&typeof s.catch=="function"&&s.catch(function(){})}}catch(S){if(S&&h&&typeof S.stack=="string")return[S.stack,h.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var e=a.DetermineComponentFrameRoot(),f=e[0],c=e[1];if(f&&c){var i=f.split(`
`),m=c.split(`
`);for(n=a=0;a<i.length&&!i[a].includes("DetermineComponentFrameRoot");)a++;for(;n<m.length&&!m[n].includes("DetermineComponentFrameRoot");)n++;if(a===i.length||n===m.length)for(a=i.length-1,n=m.length-1;1<=a&&0<=n&&i[a]!==m[n];)n--;for(;1<=a&&0<=n;a--,n--)if(i[a]!==m[n]){if(a!==1||n!==1)do if(a--,n--,0>n||i[a]!==m[n]){var g=`
`+i[a].replace(" at new "," at ");return l.displayName&&g.includes("<anonymous>")&&(g=g.replace("<anonymous>",l.displayName)),g}while(1<=a&&0<=n);break}}}finally{nf=!1,Error.prepareStackTrace=u}return(u=l?l.displayName||l.name:"")?It(u):""}function Im(l,t){switch(l.tag){case 26:case 27:case 5:return It(l.type);case 16:return It("Lazy");case 13:return l.child!==t&&t!==null?It("Suspense Fallback"):It("Suspense");case 19:return It("SuspenseList");case 0:case 15:return ef(l.type,!1);case 11:return ef(l.type.render,!1);case 1:return ef(l.type,!0);case 31:return It("Activity");default:return""}}function i0(l){try{var t="",u=null;do t+=Im(l,u),u=l,l=l.return;while(l);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Kf=Object.prototype.hasOwnProperty,Rc=nl.unstable_scheduleCallback,ff=nl.unstable_cancelCallback,Pm=nl.unstable_shouldYield,ld=nl.unstable_requestPaint,Hl=nl.unstable_now,td=nl.unstable_getCurrentPriorityLevel,X1=nl.unstable_ImmediatePriority,Q1=nl.unstable_UserBlockingPriority,Pn=nl.unstable_NormalPriority,ud=nl.unstable_LowPriority,Z1=nl.unstable_IdlePriority,ad=nl.log,nd=nl.unstable_setDisableYieldValue,Pa=null,Nl=null;function qt(l){if(typeof ad=="function"&&nd(l),Nl&&typeof Nl.setStrictMode=="function")try{Nl.setStrictMode(Pa,l)}catch{}}var pl=Math.clz32?Math.clz32:cd,ed=Math.log,fd=Math.LN2;function cd(l){return l>>>=0,l===0?32:31-(ed(l)/fd|0)|0}var bn=256,zn=262144,En=4194304;function Pt(l){var t=l&42;if(t!==0)return t;switch(l&-l){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return l&261888;case 262144:case 524288:case 1048576:case 2097152:return l&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return l&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return l}}function Me(l,t,u){var a=l.pendingLanes;if(a===0)return 0;var n=0,e=l.suspendedLanes,f=l.pingedLanes;l=l.warmLanes;var c=a&134217727;return c!==0?(a=c&~e,a!==0?n=Pt(a):(f&=c,f!==0?n=Pt(f):u||(u=c&~l,u!==0&&(n=Pt(u))))):(c=a&~e,c!==0?n=Pt(c):f!==0?n=Pt(f):u||(u=a&~l,u!==0&&(n=Pt(u)))),n===0?0:t!==0&&t!==n&&(t&e)===0&&(e=n&-n,u=t&-t,e>=u||e===32&&(u&4194048)!==0)?t:n}function ln(l,t){return(l.pendingLanes&~(l.suspendedLanes&~l.pingedLanes)&t)===0}function id(l,t){switch(l){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function j1(){var l=En;return En<<=1,(En&62914560)===0&&(En=4194304),l}function cf(l){for(var t=[],u=0;31>u;u++)t.push(l);return t}function tn(l,t){l.pendingLanes|=t,t!==268435456&&(l.suspendedLanes=0,l.pingedLanes=0,l.warmLanes=0)}function yd(l,t,u,a,n,e){var f=l.pendingLanes;l.pendingLanes=u,l.suspendedLanes=0,l.pingedLanes=0,l.warmLanes=0,l.expiredLanes&=u,l.entangledLanes&=u,l.errorRecoveryDisabledLanes&=u,l.shellSuspendCounter=0;var c=l.entanglements,i=l.expirationTimes,m=l.hiddenUpdates;for(u=f&~u;0<u;){var g=31-pl(u),s=1<<g;c[g]=0,i[g]=-1;var h=m[g];if(h!==null)for(m[g]=null,g=0;g<h.length;g++){var S=h[g];S!==null&&(S.lane&=-536870913)}u&=~s}a!==0&&V1(l,a,0),e!==0&&n===0&&l.tag!==0&&(l.suspendedLanes|=e&~(f&~t))}function V1(l,t,u){l.pendingLanes|=t,l.suspendedLanes&=~t;var a=31-pl(t);l.entangledLanes|=t,l.entanglements[a]=l.entanglements[a]|1073741824|u&261930}function x1(l,t){var u=l.entangledLanes|=t;for(l=l.entanglements;u;){var a=31-pl(u),n=1<<a;n&t|l[a]&t&&(l[a]|=t),u&=~n}}function L1(l,t){var u=t&-t;return u=(u&42)!==0?1:Cc(u),(u&(l.suspendedLanes|t))!==0?0:u}function Cc(l){switch(l){case 2:l=1;break;case 8:l=4;break;case 32:l=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:l=128;break;case 268435456:l=134217728;break;default:l=0}return l}function Gc(l){return l&=-l,2<l?8<l?(l&134217727)!==0?32:268435456:8:2}function K1(){var l=C.p;return l!==0?l:(l=window.event,l===void 0?32:hm(l.type))}function y0(l,t){var u=C.p;try{return C.p=l,t()}finally{C.p=u}}var $t=Math.random().toString(36).slice(2),yl="__reactFiber$"+$t,Al="__reactProps$"+$t,ua="__reactContainer$"+$t,Jf="__reactEvents$"+$t,vd="__reactListeners$"+$t,md="__reactHandles$"+$t,v0="__reactResources$"+$t,un="__reactMarker$"+$t;function Xc(l){delete l[yl],delete l[Al],delete l[Jf],delete l[vd],delete l[md]}function Hu(l){var t=l[yl];if(t)return t;for(var u=l.parentNode;u;){if(t=u[ua]||u[yl]){if(u=t.alternate,t.child!==null||u!==null&&u.child!==null)for(l=b1(l);l!==null;){if(u=l[yl])return u;l=b1(l)}return t}l=u,u=l.parentNode}return null}function aa(l){if(l=l[yl]||l[ua]){var t=l.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return l}return null}function Aa(l){var t=l.tag;if(t===5||t===26||t===27||t===6)return l.stateNode;throw Error(b(33))}function Qu(l){var t=l[v0];return t||(t=l[v0]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function fl(l){l[un]=!0}var J1=new Set,r1={};function du(l,t){ru(l,t),ru(l+"Capture",t)}function ru(l,t){for(r1[l]=t,l=0;l<t.length;l++)J1.add(t[l])}var dd=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),m0={},d0={};function hd(l){return Kf.call(d0,l)?!0:Kf.call(m0,l)?!1:dd.test(l)?d0[l]=!0:(m0[l]=!0,!1)}function Cn(l,t,u){if(hd(t))if(u===null)l.removeAttribute(t);else{switch(typeof u){case"undefined":case"function":case"symbol":l.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){l.removeAttribute(t);return}}l.setAttribute(t,""+u)}}function Tn(l,t,u){if(u===null)l.removeAttribute(t);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":l.removeAttribute(t);return}l.setAttribute(t,""+u)}}function ut(l,t,u,a){if(a===null)l.removeAttribute(u);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":l.removeAttribute(u);return}l.setAttributeNS(t,u,""+a)}}function Gl(l){switch(typeof l){case"bigint":case"boolean":case"number":case"string":case"undefined":return l;case"object":return l;default:return""}}function w1(l){var t=l.type;return(l=l.nodeName)&&l.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Sd(l,t,u){var a=Object.getOwnPropertyDescriptor(l.constructor.prototype,t);if(!l.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,e=a.set;return Object.defineProperty(l,t,{configurable:!0,get:function(){return n.call(this)},set:function(f){u=""+f,e.call(this,f)}}),Object.defineProperty(l,t,{enumerable:a.enumerable}),{getValue:function(){return u},setValue:function(f){u=""+f},stopTracking:function(){l._valueTracker=null,delete l[t]}}}}function rf(l){if(!l._valueTracker){var t=w1(l)?"checked":"value";l._valueTracker=Sd(l,t,""+l[t])}}function W1(l){if(!l)return!1;var t=l._valueTracker;if(!t)return!0;var u=t.getValue(),a="";return l&&(a=w1(l)?l.checked?"true":"false":l.value),l=a,l!==u?(t.setValue(l),!0):!1}function le(l){if(l=l||(typeof document<"u"?document:void 0),typeof l>"u")return null;try{return l.activeElement||l.body}catch{return l.body}}var gd=/[\n"\\]/g;function Zl(l){return l.replace(gd,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function wf(l,t,u,a,n,e,f,c){l.name="",f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?l.type=f:l.removeAttribute("type"),t!=null?f==="number"?(t===0&&l.value===""||l.value!=t)&&(l.value=""+Gl(t)):l.value!==""+Gl(t)&&(l.value=""+Gl(t)):f!=="submit"&&f!=="reset"||l.removeAttribute("value"),t!=null?Wf(l,f,Gl(t)):u!=null?Wf(l,f,Gl(u)):a!=null&&l.removeAttribute("value"),n==null&&e!=null&&(l.defaultChecked=!!e),n!=null&&(l.checked=n&&typeof n!="function"&&typeof n!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?l.name=""+Gl(c):l.removeAttribute("name")}function $1(l,t,u,a,n,e,f,c){if(e!=null&&typeof e!="function"&&typeof e!="symbol"&&typeof e!="boolean"&&(l.type=e),t!=null||u!=null){if(!(e!=="submit"&&e!=="reset"||t!=null)){rf(l);return}u=u!=null?""+Gl(u):"",t=t!=null?""+Gl(t):u,c||t===l.value||(l.value=t),l.defaultValue=t}a=a??n,a=typeof a!="function"&&typeof a!="symbol"&&!!a,l.checked=c?l.checked:!!a,l.defaultChecked=!!a,f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(l.name=f),rf(l)}function Wf(l,t,u){t==="number"&&le(l.ownerDocument)===l||l.defaultValue===""+u||(l.defaultValue=""+u)}function Zu(l,t,u,a){if(l=l.options,t){t={};for(var n=0;n<u.length;n++)t["$"+u[n]]=!0;for(u=0;u<l.length;u++)n=t.hasOwnProperty("$"+l[u].value),l[u].selected!==n&&(l[u].selected=n),n&&a&&(l[u].defaultSelected=!0)}else{for(u=""+Gl(u),t=null,n=0;n<l.length;n++){if(l[n].value===u){l[n].selected=!0,a&&(l[n].defaultSelected=!0);return}t!==null||l[n].disabled||(t=l[n])}t!==null&&(t.selected=!0)}}function F1(l,t,u){if(t!=null&&(t=""+Gl(t),t!==l.value&&(l.value=t),u==null)){l.defaultValue!==t&&(l.defaultValue=t);return}l.defaultValue=u!=null?""+Gl(u):""}function k1(l,t,u,a){if(t==null){if(a!=null){if(u!=null)throw Error(b(92));if(Ta(a)){if(1<a.length)throw Error(b(93));a=a[0]}u=a}u==null&&(u=""),t=u}u=Gl(t),l.defaultValue=u,a=l.textContent,a===u&&a!==""&&a!==null&&(l.value=a),rf(l)}function wu(l,t){if(t){var u=l.firstChild;if(u&&u===l.lastChild&&u.nodeType===3){u.nodeValue=t;return}}l.textContent=t}var od=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function h0(l,t,u){var a=t.indexOf("--")===0;u==null||typeof u=="boolean"||u===""?a?l.setProperty(t,""):t==="float"?l.cssFloat="":l[t]="":a?l.setProperty(t,u):typeof u!="number"||u===0||od.has(t)?t==="float"?l.cssFloat=u:l[t]=(""+u).trim():l[t]=u+"px"}function I1(l,t,u){if(t!=null&&typeof t!="object")throw Error(b(62));if(l=l.style,u!=null){for(var a in u)!u.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?l.setProperty(a,""):a==="float"?l.cssFloat="":l[a]="");for(var n in t)a=t[n],t.hasOwnProperty(n)&&u[n]!==a&&h0(l,n,a)}else for(var e in t)t.hasOwnProperty(e)&&h0(l,e,t[e])}function Qc(l){if(l.indexOf("-")===-1)return!1;switch(l){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sd=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),bd=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Gn(l){return bd.test(""+l)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":l}function vt(){}var $f=null;function Zc(l){return l=l.target||l.srcElement||window,l.correspondingUseElement&&(l=l.correspondingUseElement),l.nodeType===3?l.parentNode:l}var Nu=null,ju=null;function S0(l){var t=aa(l);if(t&&(l=t.stateNode)){var u=l[Al]||null;l:switch(l=t.stateNode,t.type){case"input":if(wf(l,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name),t=u.name,u.type==="radio"&&t!=null){for(u=l;u.parentNode;)u=u.parentNode;for(u=u.querySelectorAll('input[name="'+Zl(""+t)+'"][type="radio"]'),t=0;t<u.length;t++){var a=u[t];if(a!==l&&a.form===l.form){var n=a[Al]||null;if(!n)throw Error(b(90));wf(a,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<u.length;t++)a=u[t],a.form===l.form&&W1(a)}break l;case"textarea":F1(l,u.value,u.defaultValue);break l;case"select":t=u.value,t!=null&&Zu(l,!!u.multiple,t,!1)}}}var yf=!1;function P1(l,t,u){if(yf)return l(t,u);yf=!0;try{var a=l(t);return a}finally{if(yf=!1,(Nu!==null||ju!==null)&&(Xe(),Nu&&(t=Nu,l=ju,ju=Nu=null,S0(t),l)))for(t=0;t<l.length;t++)S0(l[t])}}function Za(l,t){var u=l.stateNode;if(u===null)return null;var a=u[Al]||null;if(a===null)return null;u=a[t];l:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(l=l.type,a=!(l==="button"||l==="input"||l==="select"||l==="textarea")),l=!a;break l;default:l=!1}if(l)return null;if(u&&typeof u!="function")throw Error(b(231,t,typeof u));return u}var gt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ff=!1;if(gt)try{Tu={},Object.defineProperty(Tu,"passive",{get:function(){Ff=!0}}),window.addEventListener("test",Tu,Tu),window.removeEventListener("test",Tu,Tu)}catch{Ff=!1}var Tu,Bt=null,jc=null,Xn=null;function ly(){if(Xn)return Xn;var l,t=jc,u=t.length,a,n="value"in Bt?Bt.value:Bt.textContent,e=n.length;for(l=0;l<u&&t[l]===n[l];l++);var f=u-l;for(a=1;a<=f&&t[u-a]===n[e-a];a++);return Xn=n.slice(l,1<a?1-a:void 0)}function Qn(l){var t=l.keyCode;return"charCode"in l?(l=l.charCode,l===0&&t===13&&(l=13)):l=t,l===10&&(l=13),32<=l||l===13?l:0}function An(){return!0}function g0(){return!1}function Ol(l){function t(u,a,n,e,f){this._reactName=u,this._targetInst=n,this.type=a,this.nativeEvent=e,this.target=f,this.currentTarget=null;for(var c in l)l.hasOwnProperty(c)&&(u=l[c],this[c]=u?u(e):e[c]);return this.isDefaultPrevented=(e.defaultPrevented!=null?e.defaultPrevented:e.returnValue===!1)?An:g0,this.isPropagationStopped=g0,this}return r(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var u=this.nativeEvent;u&&(u.preventDefault?u.preventDefault():typeof u.returnValue!="unknown"&&(u.returnValue=!1),this.isDefaultPrevented=An)},stopPropagation:function(){var u=this.nativeEvent;u&&(u.stopPropagation?u.stopPropagation():typeof u.cancelBubble!="unknown"&&(u.cancelBubble=!0),this.isPropagationStopped=An)},persist:function(){},isPersistent:An}),t}var hu={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(l){return l.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},De=Ol(hu),an=r({},hu,{view:0,detail:0}),zd=Ol(an),vf,mf,Sa,Ue=r({},an,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vc,button:0,buttons:0,relatedTarget:function(l){return l.relatedTarget===void 0?l.fromElement===l.srcElement?l.toElement:l.fromElement:l.relatedTarget},movementX:function(l){return"movementX"in l?l.movementX:(l!==Sa&&(Sa&&l.type==="mousemove"?(vf=l.screenX-Sa.screenX,mf=l.screenY-Sa.screenY):mf=vf=0,Sa=l),vf)},movementY:function(l){return"movementY"in l?l.movementY:mf}}),o0=Ol(Ue),Ed=r({},Ue,{dataTransfer:0}),Td=Ol(Ed),Ad=r({},an,{relatedTarget:0}),df=Ol(Ad),Od=r({},hu,{animationName:0,elapsedTime:0,pseudoElement:0}),_d=Ol(Od),Md=r({},hu,{clipboardData:function(l){return"clipboardData"in l?l.clipboardData:window.clipboardData}}),Dd=Ol(Md),Ud=r({},hu,{data:0}),s0=Ol(Ud),Hd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qd(l){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(l):(l=pd[l])?!!t[l]:!1}function Vc(){return qd}var Bd=r({},an,{key:function(l){if(l.key){var t=Hd[l.key]||l.key;if(t!=="Unidentified")return t}return l.type==="keypress"?(l=Qn(l),l===13?"Enter":String.fromCharCode(l)):l.type==="keydown"||l.type==="keyup"?Nd[l.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vc,charCode:function(l){return l.type==="keypress"?Qn(l):0},keyCode:function(l){return l.type==="keydown"||l.type==="keyup"?l.keyCode:0},which:function(l){return l.type==="keypress"?Qn(l):l.type==="keydown"||l.type==="keyup"?l.keyCode:0}}),Yd=Ol(Bd),Rd=r({},Ue,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),b0=Ol(Rd),Cd=r({},an,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vc}),Gd=Ol(Cd),Xd=r({},hu,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qd=Ol(Xd),Zd=r({},Ue,{deltaX:function(l){return"deltaX"in l?l.deltaX:"wheelDeltaX"in l?-l.wheelDeltaX:0},deltaY:function(l){return"deltaY"in l?l.deltaY:"wheelDeltaY"in l?-l.wheelDeltaY:"wheelDelta"in l?-l.wheelDelta:0},deltaZ:0,deltaMode:0}),jd=Ol(Zd),Vd=r({},hu,{newState:0,oldState:0}),xd=Ol(Vd),Ld=[9,13,27,32],xc=gt&&"CompositionEvent"in window,Ma=null;gt&&"documentMode"in document&&(Ma=document.documentMode);var Kd=gt&&"TextEvent"in window&&!Ma,ty=gt&&(!xc||Ma&&8<Ma&&11>=Ma),z0=" ",E0=!1;function uy(l,t){switch(l){case"keyup":return Ld.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ay(l){return l=l.detail,typeof l=="object"&&"data"in l?l.data:null}var pu=!1;function Jd(l,t){switch(l){case"compositionend":return ay(t);case"keypress":return t.which!==32?null:(E0=!0,z0);case"textInput":return l=t.data,l===z0&&E0?null:l;default:return null}}function rd(l,t){if(pu)return l==="compositionend"||!xc&&uy(l,t)?(l=ly(),Xn=jc=Bt=null,pu=!1,l):null;switch(l){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ty&&t.locale!=="ko"?null:t.data;default:return null}}var wd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function T0(l){var t=l&&l.nodeName&&l.nodeName.toLowerCase();return t==="input"?!!wd[l.type]:t==="textarea"}function ny(l,t,u,a){Nu?ju?ju.push(a):ju=[a]:Nu=a,t=be(t,"onChange"),0<t.length&&(u=new De("onChange","change",null,u,a),l.push({event:u,listeners:t}))}var Da=null,ja=null;function Wd(l){Pv(l,0)}function He(l){var t=Aa(l);if(W1(t))return l}function A0(l,t){if(l==="change")return t}var ey=!1;gt&&(gt?(_n="oninput"in document,_n||(hf=document.createElement("div"),hf.setAttribute("oninput","return;"),_n=typeof hf.oninput=="function"),On=_n):On=!1,ey=On&&(!document.documentMode||9<document.documentMode));var On,_n,hf;function O0(){Da&&(Da.detachEvent("onpropertychange",fy),ja=Da=null)}function fy(l){if(l.propertyName==="value"&&He(ja)){var t=[];ny(t,ja,l,Zc(l)),P1(Wd,t)}}function $d(l,t,u){l==="focusin"?(O0(),Da=t,ja=u,Da.attachEvent("onpropertychange",fy)):l==="focusout"&&O0()}function Fd(l){if(l==="selectionchange"||l==="keyup"||l==="keydown")return He(ja)}function kd(l,t){if(l==="click")return He(t)}function Id(l,t){if(l==="input"||l==="change")return He(t)}function Pd(l,t){return l===t&&(l!==0||1/l===1/t)||l!==l&&t!==t}var Bl=typeof Object.is=="function"?Object.is:Pd;function Va(l,t){if(Bl(l,t))return!0;if(typeof l!="object"||l===null||typeof t!="object"||t===null)return!1;var u=Object.keys(l),a=Object.keys(t);if(u.length!==a.length)return!1;for(a=0;a<u.length;a++){var n=u[a];if(!Kf.call(t,n)||!Bl(l[n],t[n]))return!1}return!0}function _0(l){for(;l&&l.firstChild;)l=l.firstChild;return l}function M0(l,t){var u=_0(l);l=0;for(var a;u;){if(u.nodeType===3){if(a=l+u.textContent.length,l<=t&&a>=t)return{node:u,offset:t-l};l=a}l:{for(;u;){if(u.nextSibling){u=u.nextSibling;break l}u=u.parentNode}u=void 0}u=_0(u)}}function cy(l,t){return l&&t?l===t?!0:l&&l.nodeType===3?!1:t&&t.nodeType===3?cy(l,t.parentNode):"contains"in l?l.contains(t):l.compareDocumentPosition?!!(l.compareDocumentPosition(t)&16):!1:!1}function iy(l){l=l!=null&&l.ownerDocument!=null&&l.ownerDocument.defaultView!=null?l.ownerDocument.defaultView:window;for(var t=le(l.document);t instanceof l.HTMLIFrameElement;){try{var u=typeof t.contentWindow.location.href=="string"}catch{u=!1}if(u)l=t.contentWindow;else break;t=le(l.document)}return t}function Lc(l){var t=l&&l.nodeName&&l.nodeName.toLowerCase();return t&&(t==="input"&&(l.type==="text"||l.type==="search"||l.type==="tel"||l.type==="url"||l.type==="password")||t==="textarea"||l.contentEditable==="true")}var lh=gt&&"documentMode"in document&&11>=document.documentMode,qu=null,kf=null,Ua=null,If=!1;function D0(l,t,u){var a=u.window===u?u.document:u.nodeType===9?u:u.ownerDocument;If||qu==null||qu!==le(a)||(a=qu,"selectionStart"in a&&Lc(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Ua&&Va(Ua,a)||(Ua=a,a=be(kf,"onSelect"),0<a.length&&(t=new De("onSelect","select",null,t,u),l.push({event:t,listeners:a}),t.target=qu)))}function kt(l,t){var u={};return u[l.toLowerCase()]=t.toLowerCase(),u["Webkit"+l]="webkit"+t,u["Moz"+l]="moz"+t,u}var Bu={animationend:kt("Animation","AnimationEnd"),animationiteration:kt("Animation","AnimationIteration"),animationstart:kt("Animation","AnimationStart"),transitionrun:kt("Transition","TransitionRun"),transitionstart:kt("Transition","TransitionStart"),transitioncancel:kt("Transition","TransitionCancel"),transitionend:kt("Transition","TransitionEnd")},Sf={},yy={};gt&&(yy=document.createElement("div").style,"AnimationEvent"in window||(delete Bu.animationend.animation,delete Bu.animationiteration.animation,delete Bu.animationstart.animation),"TransitionEvent"in window||delete Bu.transitionend.transition);function Su(l){if(Sf[l])return Sf[l];if(!Bu[l])return l;var t=Bu[l],u;for(u in t)if(t.hasOwnProperty(u)&&u in yy)return Sf[l]=t[u];return l}var vy=Su("animationend"),my=Su("animationiteration"),dy=Su("animationstart"),th=Su("transitionrun"),uh=Su("transitionstart"),ah=Su("transitioncancel"),hy=Su("transitionend"),Sy=new Map,Pf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Pf.push("scrollEnd");function wl(l,t){Sy.set(l,t),du(t,[l])}var te=typeof reportError=="function"?reportError:function(l){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof l=="object"&&l!==null&&typeof l.message=="string"?String(l.message):String(l),error:l});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",l);return}console.error(l)},Cl=[],Yu=0,Kc=0;function Ne(){for(var l=Yu,t=Kc=Yu=0;t<l;){var u=Cl[t];Cl[t++]=null;var a=Cl[t];Cl[t++]=null;var n=Cl[t];Cl[t++]=null;var e=Cl[t];if(Cl[t++]=null,a!==null&&n!==null){var f=a.pending;f===null?n.next=n:(n.next=f.next,f.next=n),a.pending=n}e!==0&&gy(u,n,e)}}function pe(l,t,u,a){Cl[Yu++]=l,Cl[Yu++]=t,Cl[Yu++]=u,Cl[Yu++]=a,Kc|=a,l.lanes|=a,l=l.alternate,l!==null&&(l.lanes|=a)}function Jc(l,t,u,a){return pe(l,t,u,a),ue(l)}function gu(l,t){return pe(l,null,null,t),ue(l)}function gy(l,t,u){l.lanes|=u;var a=l.alternate;a!==null&&(a.lanes|=u);for(var n=!1,e=l.return;e!==null;)e.childLanes|=u,a=e.alternate,a!==null&&(a.childLanes|=u),e.tag===22&&(l=e.stateNode,l===null||l._visibility&1||(n=!0)),l=e,e=e.return;return l.tag===3?(e=l.stateNode,n&&t!==null&&(n=31-pl(u),l=e.hiddenUpdates,a=l[n],a===null?l[n]=[t]:a.push(t),t.lane=u|536870912),e):null}function ue(l){if(50<Ga)throw Ga=0,Ec=null,Error(b(185));for(var t=l.return;t!==null;)l=t,t=l.return;return l.tag===3?l.stateNode:null}var Ru={};function nh(l,t,u,a){this.tag=l,this.key=u,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dl(l,t,u,a){return new nh(l,t,u,a)}function rc(l){return l=l.prototype,!(!l||!l.isReactComponent)}function dt(l,t){var u=l.alternate;return u===null?(u=Dl(l.tag,t,l.key,l.mode),u.elementType=l.elementType,u.type=l.type,u.stateNode=l.stateNode,u.alternate=l,l.alternate=u):(u.pendingProps=t,u.type=l.type,u.flags=0,u.subtreeFlags=0,u.deletions=null),u.flags=l.flags&65011712,u.childLanes=l.childLanes,u.lanes=l.lanes,u.child=l.child,u.memoizedProps=l.memoizedProps,u.memoizedState=l.memoizedState,u.updateQueue=l.updateQueue,t=l.dependencies,u.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},u.sibling=l.sibling,u.index=l.index,u.ref=l.ref,u.refCleanup=l.refCleanup,u}function oy(l,t){l.flags&=65011714;var u=l.alternate;return u===null?(l.childLanes=0,l.lanes=t,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=u.childLanes,l.lanes=u.lanes,l.child=u.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=u.memoizedProps,l.memoizedState=u.memoizedState,l.updateQueue=u.updateQueue,l.type=u.type,t=u.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),l}function Zn(l,t,u,a,n,e){var f=0;if(a=l,typeof l=="function")rc(l)&&(f=1);else if(typeof l=="string")f=c2(l,u,Il.current)?26:l==="html"||l==="head"||l==="body"?27:5;else l:switch(l){case jf:return l=Dl(31,u,t,n),l.elementType=jf,l.lanes=e,l;case Du:return au(u.children,n,e,t);case C1:f=8,n|=24;break;case Xf:return l=Dl(12,u,t,n|2),l.elementType=Xf,l.lanes=e,l;case Qf:return l=Dl(13,u,t,n),l.elementType=Qf,l.lanes=e,l;case Zf:return l=Dl(19,u,t,n),l.elementType=Zf,l.lanes=e,l;default:if(typeof l=="object"&&l!==null)switch(l.$$typeof){case yt:f=10;break l;case G1:f=9;break l;case Bc:f=11;break l;case Yc:f=14;break l;case Mt:f=16,a=null;break l}f=29,u=Error(b(130,l===null?"null":typeof l,"")),a=null}return t=Dl(f,u,t,n),t.elementType=l,t.type=a,t.lanes=e,t}function au(l,t,u,a){return l=Dl(7,l,a,t),l.lanes=u,l}function gf(l,t,u){return l=Dl(6,l,null,t),l.lanes=u,l}function sy(l){var t=Dl(18,null,null,0);return t.stateNode=l,t}function of(l,t,u){return t=Dl(4,l.children!==null?l.children:[],l.key,t),t.lanes=u,t.stateNode={containerInfo:l.containerInfo,pendingChildren:null,implementation:l.implementation},t}var U0=new WeakMap;function jl(l,t){if(typeof l=="object"&&l!==null){var u=U0.get(l);return u!==void 0?u:(t={value:l,source:t,stack:i0(t)},U0.set(l,t),t)}return{value:l,source:t,stack:i0(t)}}var Cu=[],Gu=0,ae=null,xa=0,Xl=[],Ql=0,Jt=null,$l=1,Fl="";function ct(l,t){Cu[Gu++]=xa,Cu[Gu++]=ae,ae=l,xa=t}function by(l,t,u){Xl[Ql++]=$l,Xl[Ql++]=Fl,Xl[Ql++]=Jt,Jt=l;var a=$l;l=Fl;var n=32-pl(a)-1;a&=~(1<<n),u+=1;var e=32-pl(t)+n;if(30<e){var f=n-n%5;e=(a&(1<<f)-1).toString(32),a>>=f,n-=f,$l=1<<32-pl(t)+n|u<<n|a,Fl=e+l}else $l=1<<e|u<<n|a,Fl=l}function wc(l){l.return!==null&&(ct(l,1),by(l,1,0))}function Wc(l){for(;l===ae;)ae=Cu[--Gu],Cu[Gu]=null,xa=Cu[--Gu],Cu[Gu]=null;for(;l===Jt;)Jt=Xl[--Ql],Xl[Ql]=null,Fl=Xl[--Ql],Xl[Ql]=null,$l=Xl[--Ql],Xl[Ql]=null}function zy(l,t){Xl[Ql++]=$l,Xl[Ql++]=Fl,Xl[Ql++]=Jt,$l=t.id,Fl=t.overflow,Jt=l}var vl=null,J=null,q=!1,Xt=null,Vl=!1,lc=Error(b(519));function rt(l){var t=Error(b(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw La(jl(t,l)),lc}function H0(l){var t=l.stateNode,u=l.type,a=l.memoizedProps;switch(t[yl]=l,t[Al]=a,u){case"dialog":U("cancel",t),U("close",t);break;case"iframe":case"object":case"embed":U("load",t);break;case"video":case"audio":for(u=0;u<wa.length;u++)U(wa[u],t);break;case"source":U("error",t);break;case"img":case"image":case"link":U("error",t),U("load",t);break;case"details":U("toggle",t);break;case"input":U("invalid",t),$1(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":U("invalid",t);break;case"textarea":U("invalid",t),k1(t,a.value,a.defaultValue,a.children)}u=a.children,typeof u!="string"&&typeof u!="number"&&typeof u!="bigint"||t.textContent===""+u||a.suppressHydrationWarning===!0||tm(t.textContent,u)?(a.popover!=null&&(U("beforetoggle",t),U("toggle",t)),a.onScroll!=null&&U("scroll",t),a.onScrollEnd!=null&&U("scrollend",t),a.onClick!=null&&(t.onclick=vt),t=!0):t=!1,t||rt(l,!0)}function N0(l){for(vl=l.return;vl;)switch(vl.tag){case 5:case 31:case 13:Vl=!1;return;case 27:case 3:Vl=!0;return;default:vl=vl.return}}function Au(l){if(l!==vl)return!1;if(!q)return N0(l),q=!0,!1;var t=l.tag,u;if((u=t!==3&&t!==27)&&((u=t===5)&&(u=l.type,u=!(u!=="form"&&u!=="button")||Mc(l.type,l.memoizedProps)),u=!u),u&&J&&rt(l),N0(l),t===13){if(l=l.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(b(317));J=s1(l)}else if(t===31){if(l=l.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(b(317));J=s1(l)}else t===27?(t=J,Ft(l.type)?(l=Nc,Nc=null,J=l):J=t):J=vl?Ll(l.stateNode.nextSibling):null;return!0}function cu(){J=vl=null,q=!1}function sf(){var l=Xt;return l!==null&&(El===null?El=l:El.push.apply(El,l),Xt=null),l}function La(l){Xt===null?Xt=[l]:Xt.push(l)}var tc=Pl(null),ou=null,mt=null;function Ut(l,t,u){x(tc,t._currentValue),t._currentValue=u}function ht(l){l._currentValue=tc.current,cl(tc)}function uc(l,t,u){for(;l!==null;){var a=l.alternate;if((l.childLanes&t)!==t?(l.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),l===u)break;l=l.return}}function ac(l,t,u,a){var n=l.child;for(n!==null&&(n.return=l);n!==null;){var e=n.dependencies;if(e!==null){var f=n.child;e=e.firstContext;l:for(;e!==null;){var c=e;e=n;for(var i=0;i<t.length;i++)if(c.context===t[i]){e.lanes|=u,c=e.alternate,c!==null&&(c.lanes|=u),uc(e.return,u,l),a||(f=null);break l}e=c.next}}else if(n.tag===18){if(f=n.return,f===null)throw Error(b(341));f.lanes|=u,e=f.alternate,e!==null&&(e.lanes|=u),uc(f,u,l),f=null}else f=n.child;if(f!==null)f.return=n;else for(f=n;f!==null;){if(f===l){f=null;break}if(n=f.sibling,n!==null){n.return=f.return,f=n;break}f=f.return}n=f}}function na(l,t,u,a){l=null;for(var n=t,e=!1;n!==null;){if(!e){if((n.flags&524288)!==0)e=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var f=n.alternate;if(f===null)throw Error(b(387));if(f=f.memoizedProps,f!==null){var c=n.type;Bl(n.pendingProps.value,f.value)||(l!==null?l.push(c):l=[c])}}else if(n===Fn.current){if(f=n.alternate,f===null)throw Error(b(387));f.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(l!==null?l.push($a):l=[$a])}n=n.return}l!==null&&ac(t,l,u,a),t.flags|=262144}function ne(l){for(l=l.firstContext;l!==null;){if(!Bl(l.context._currentValue,l.memoizedValue))return!0;l=l.next}return!1}function iu(l){ou=l,mt=null,l=l.dependencies,l!==null&&(l.firstContext=null)}function ml(l){return Ey(ou,l)}function Mn(l,t){return ou===null&&iu(l),Ey(l,t)}function Ey(l,t){var u=t._currentValue;if(t={context:t,memoizedValue:u,next:null},mt===null){if(l===null)throw Error(b(308));mt=t,l.dependencies={lanes:0,firstContext:t},l.flags|=524288}else mt=mt.next=t;return u}var eh=typeof AbortController<"u"?AbortController:function(){var l=[],t=this.signal={aborted:!1,addEventListener:function(u,a){l.push(a)}};this.abort=function(){t.aborted=!0,l.forEach(function(u){return u()})}},fh=nl.unstable_scheduleCallback,ch=nl.unstable_NormalPriority,tl={$$typeof:yt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function $c(){return{controller:new eh,data:new Map,refCount:0}}function nn(l){l.refCount--,l.refCount===0&&fh(ch,function(){l.controller.abort()})}var Ha=null,nc=0,Wu=0,Vu=null;function ih(l,t){if(Ha===null){var u=Ha=[];nc=0,Wu=Ei(),Vu={status:"pending",value:void 0,then:function(a){u.push(a)}}}return nc++,t.then(p0,p0),t}function p0(){if(--nc===0&&Ha!==null){Vu!==null&&(Vu.status="fulfilled");var l=Ha;Ha=null,Wu=0,Vu=null;for(var t=0;t<l.length;t++)(0,l[t])()}}function yh(l,t){var u=[],a={status:"pending",value:null,reason:null,then:function(n){u.push(n)}};return l.then(function(){a.status="fulfilled",a.value=t;for(var n=0;n<u.length;n++)(0,u[n])(t)},function(n){for(a.status="rejected",a.reason=n,n=0;n<u.length;n++)(0,u[n])(void 0)}),a}var q0=O.S;O.S=function(l,t){Rv=Hl(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&ih(l,t),q0!==null&&q0(l,t)};var nu=Pl(null);function Fc(){var l=nu.current;return l!==null?l:V.pooledCache}function jn(l,t){t===null?x(nu,nu.current):x(nu,t.pool)}function Ty(){var l=Fc();return l===null?null:{parent:tl._currentValue,pool:l}}var ea=Error(b(460)),kc=Error(b(474)),qe=Error(b(542)),ee={then:function(){}};function B0(l){return l=l.status,l==="fulfilled"||l==="rejected"}function Ay(l,t,u){switch(u=l[u],u===void 0?l.push(t):u!==t&&(t.then(vt,vt),t=u),t.status){case"fulfilled":return t.value;case"rejected":throw l=t.reason,R0(l),l;default:if(typeof t.status=="string")t.then(vt,vt);else{if(l=V,l!==null&&100<l.shellSuspendCounter)throw Error(b(482));l=t,l.status="pending",l.then(function(a){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=a}},function(a){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw l=t.reason,R0(l),l}throw eu=t,ea}}function lu(l){try{var t=l._init;return t(l._payload)}catch(u){throw u!==null&&typeof u=="object"&&typeof u.then=="function"?(eu=u,ea):u}}var eu=null;function Y0(){if(eu===null)throw Error(b(459));var l=eu;return eu=null,l}function R0(l){if(l===ea||l===qe)throw Error(b(483))}var xu=null,Ka=0;function Dn(l){var t=Ka;return Ka+=1,xu===null&&(xu=[]),Ay(xu,l,t)}function ga(l,t){t=t.props.ref,l.ref=t!==void 0?t:null}function Un(l,t){throw t.$$typeof===$m?Error(b(525)):(l=Object.prototype.toString.call(t),Error(b(31,l==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":l)))}function Oy(l){function t(v,y){if(l){var d=v.deletions;d===null?(v.deletions=[y],v.flags|=16):d.push(y)}}function u(v,y){if(!l)return null;for(;y!==null;)t(v,y),y=y.sibling;return null}function a(v){for(var y=new Map;v!==null;)v.key!==null?y.set(v.key,v):y.set(v.index,v),v=v.sibling;return y}function n(v,y){return v=dt(v,y),v.index=0,v.sibling=null,v}function e(v,y,d){return v.index=d,l?(d=v.alternate,d!==null?(d=d.index,d<y?(v.flags|=67108866,y):d):(v.flags|=67108866,y)):(v.flags|=1048576,y)}function f(v){return l&&v.alternate===null&&(v.flags|=67108866),v}function c(v,y,d,o){return y===null||y.tag!==6?(y=gf(d,v.mode,o),y.return=v,y):(y=n(y,d),y.return=v,y)}function i(v,y,d,o){var T=d.type;return T===Du?g(v,y,d.props.children,o,d.key):y!==null&&(y.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Mt&&lu(T)===y.type)?(y=n(y,d.props),ga(y,d),y.return=v,y):(y=Zn(d.type,d.key,d.props,null,v.mode,o),ga(y,d),y.return=v,y)}function m(v,y,d,o){return y===null||y.tag!==4||y.stateNode.containerInfo!==d.containerInfo||y.stateNode.implementation!==d.implementation?(y=of(d,v.mode,o),y.return=v,y):(y=n(y,d.children||[]),y.return=v,y)}function g(v,y,d,o,T){return y===null||y.tag!==7?(y=au(d,v.mode,o,T),y.return=v,y):(y=n(y,d),y.return=v,y)}function s(v,y,d){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return y=gf(""+y,v.mode,d),y.return=v,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case sn:return d=Zn(y.type,y.key,y.props,null,v.mode,d),ga(d,y),d.return=v,d;case Ea:return y=of(y,v.mode,d),y.return=v,y;case Mt:return y=lu(y),s(v,y,d)}if(Ta(y)||ha(y))return y=au(y,v.mode,d,null),y.return=v,y;if(typeof y.then=="function")return s(v,Dn(y),d);if(y.$$typeof===yt)return s(v,Mn(v,y),d);Un(v,y)}return null}function h(v,y,d,o){var T=y!==null?y.key:null;if(typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint")return T!==null?null:c(v,y,""+d,o);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case sn:return d.key===T?i(v,y,d,o):null;case Ea:return d.key===T?m(v,y,d,o):null;case Mt:return d=lu(d),h(v,y,d,o)}if(Ta(d)||ha(d))return T!==null?null:g(v,y,d,o,null);if(typeof d.then=="function")return h(v,y,Dn(d),o);if(d.$$typeof===yt)return h(v,y,Mn(v,d),o);Un(v,d)}return null}function S(v,y,d,o,T){if(typeof o=="string"&&o!==""||typeof o=="number"||typeof o=="bigint")return v=v.get(d)||null,c(y,v,""+o,T);if(typeof o=="object"&&o!==null){switch(o.$$typeof){case sn:return v=v.get(o.key===null?d:o.key)||null,i(y,v,o,T);case Ea:return v=v.get(o.key===null?d:o.key)||null,m(y,v,o,T);case Mt:return o=lu(o),S(v,y,d,o,T)}if(Ta(o)||ha(o))return v=v.get(d)||null,g(y,v,o,T,null);if(typeof o.then=="function")return S(v,y,d,Dn(o),T);if(o.$$typeof===yt)return S(v,y,d,Mn(y,o),T);Un(y,o)}return null}function z(v,y,d,o){for(var T=null,B=null,E=y,D=y=0,N=null;E!==null&&D<d.length;D++){E.index>D?(N=E,E=null):N=E.sibling;var Y=h(v,E,d[D],o);if(Y===null){E===null&&(E=N);break}l&&E&&Y.alternate===null&&t(v,E),y=e(Y,y,D),B===null?T=Y:B.sibling=Y,B=Y,E=N}if(D===d.length)return u(v,E),q&&ct(v,D),T;if(E===null){for(;D<d.length;D++)E=s(v,d[D],o),E!==null&&(y=e(E,y,D),B===null?T=E:B.sibling=E,B=E);return q&&ct(v,D),T}for(E=a(E);D<d.length;D++)N=S(E,v,D,d[D],o),N!==null&&(l&&N.alternate!==null&&E.delete(N.key===null?D:N.key),y=e(N,y,D),B===null?T=N:B.sibling=N,B=N);return l&&E.forEach(function(Tt){return t(v,Tt)}),q&&ct(v,D),T}function A(v,y,d,o){if(d==null)throw Error(b(151));for(var T=null,B=null,E=y,D=y=0,N=null,Y=d.next();E!==null&&!Y.done;D++,Y=d.next()){E.index>D?(N=E,E=null):N=E.sibling;var Tt=h(v,E,Y.value,o);if(Tt===null){E===null&&(E=N);break}l&&E&&Tt.alternate===null&&t(v,E),y=e(Tt,y,D),B===null?T=Tt:B.sibling=Tt,B=Tt,E=N}if(Y.done)return u(v,E),q&&ct(v,D),T;if(E===null){for(;!Y.done;D++,Y=d.next())Y=s(v,Y.value,o),Y!==null&&(y=e(Y,y,D),B===null?T=Y:B.sibling=Y,B=Y);return q&&ct(v,D),T}for(E=a(E);!Y.done;D++,Y=d.next())Y=S(E,v,D,Y.value,o),Y!==null&&(l&&Y.alternate!==null&&E.delete(Y.key===null?D:Y.key),y=e(Y,y,D),B===null?T=Y:B.sibling=Y,B=Y);return l&&E.forEach(function(Em){return t(v,Em)}),q&&ct(v,D),T}function Q(v,y,d,o){if(typeof d=="object"&&d!==null&&d.type===Du&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case sn:l:{for(var T=d.key;y!==null;){if(y.key===T){if(T=d.type,T===Du){if(y.tag===7){u(v,y.sibling),o=n(y,d.props.children),o.return=v,v=o;break l}}else if(y.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Mt&&lu(T)===y.type){u(v,y.sibling),o=n(y,d.props),ga(o,d),o.return=v,v=o;break l}u(v,y);break}else t(v,y);y=y.sibling}d.type===Du?(o=au(d.props.children,v.mode,o,d.key),o.return=v,v=o):(o=Zn(d.type,d.key,d.props,null,v.mode,o),ga(o,d),o.return=v,v=o)}return f(v);case Ea:l:{for(T=d.key;y!==null;){if(y.key===T)if(y.tag===4&&y.stateNode.containerInfo===d.containerInfo&&y.stateNode.implementation===d.implementation){u(v,y.sibling),o=n(y,d.children||[]),o.return=v,v=o;break l}else{u(v,y);break}else t(v,y);y=y.sibling}o=of(d,v.mode,o),o.return=v,v=o}return f(v);case Mt:return d=lu(d),Q(v,y,d,o)}if(Ta(d))return z(v,y,d,o);if(ha(d)){if(T=ha(d),typeof T!="function")throw Error(b(150));return d=T.call(d),A(v,y,d,o)}if(typeof d.then=="function")return Q(v,y,Dn(d),o);if(d.$$typeof===yt)return Q(v,y,Mn(v,d),o);Un(v,d)}return typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint"?(d=""+d,y!==null&&y.tag===6?(u(v,y.sibling),o=n(y,d),o.return=v,v=o):(u(v,y),o=gf(d,v.mode,o),o.return=v,v=o),f(v)):u(v,y)}return function(v,y,d,o){try{Ka=0;var T=Q(v,y,d,o);return xu=null,T}catch(E){if(E===ea||E===qe)throw E;var B=Dl(29,E,null,v.mode);return B.lanes=o,B.return=v,B}}}var yu=Oy(!0),_y=Oy(!1),Dt=!1;function Ic(l){l.updateQueue={baseState:l.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ec(l,t){l=l.updateQueue,t.updateQueue===l&&(t.updateQueue={baseState:l.baseState,firstBaseUpdate:l.firstBaseUpdate,lastBaseUpdate:l.lastBaseUpdate,shared:l.shared,callbacks:null})}function Qt(l){return{lane:l,tag:0,payload:null,callback:null,next:null}}function Zt(l,t,u){var a=l.updateQueue;if(a===null)return null;if(a=a.shared,(R&2)!==0){var n=a.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),a.pending=t,t=ue(l),gy(l,null,u),t}return pe(l,a,t,u),ue(l)}function Na(l,t,u){if(t=t.updateQueue,t!==null&&(t=t.shared,(u&4194048)!==0)){var a=t.lanes;a&=l.pendingLanes,u|=a,t.lanes=u,x1(l,u)}}function bf(l,t){var u=l.updateQueue,a=l.alternate;if(a!==null&&(a=a.updateQueue,u===a)){var n=null,e=null;if(u=u.firstBaseUpdate,u!==null){do{var f={lane:u.lane,tag:u.tag,payload:u.payload,callback:null,next:null};e===null?n=e=f:e=e.next=f,u=u.next}while(u!==null);e===null?n=e=t:e=e.next=t}else n=e=t;u={baseState:a.baseState,firstBaseUpdate:n,lastBaseUpdate:e,shared:a.shared,callbacks:a.callbacks},l.updateQueue=u;return}l=u.lastBaseUpdate,l===null?u.firstBaseUpdate=t:l.next=t,u.lastBaseUpdate=t}var fc=!1;function pa(){if(fc){var l=Vu;if(l!==null)throw l}}function qa(l,t,u,a){fc=!1;var n=l.updateQueue;Dt=!1;var e=n.firstBaseUpdate,f=n.lastBaseUpdate,c=n.shared.pending;if(c!==null){n.shared.pending=null;var i=c,m=i.next;i.next=null,f===null?e=m:f.next=m,f=i;var g=l.alternate;g!==null&&(g=g.updateQueue,c=g.lastBaseUpdate,c!==f&&(c===null?g.firstBaseUpdate=m:c.next=m,g.lastBaseUpdate=i))}if(e!==null){var s=n.baseState;f=0,g=m=i=null,c=e;do{var h=c.lane&-536870913,S=h!==c.lane;if(S?(p&h)===h:(a&h)===h){h!==0&&h===Wu&&(fc=!0),g!==null&&(g=g.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});l:{var z=l,A=c;h=t;var Q=u;switch(A.tag){case 1:if(z=A.payload,typeof z=="function"){s=z.call(Q,s,h);break l}s=z;break l;case 3:z.flags=z.flags&-65537|128;case 0:if(z=A.payload,h=typeof z=="function"?z.call(Q,s,h):z,h==null)break l;s=r({},s,h);break l;case 2:Dt=!0}}h=c.callback,h!==null&&(l.flags|=64,S&&(l.flags|=8192),S=n.callbacks,S===null?n.callbacks=[h]:S.push(h))}else S={lane:h,tag:c.tag,payload:c.payload,callback:c.callback,next:null},g===null?(m=g=S,i=s):g=g.next=S,f|=h;if(c=c.next,c===null){if(c=n.shared.pending,c===null)break;S=c,c=S.next,S.next=null,n.lastBaseUpdate=S,n.shared.pending=null}}while(!0);g===null&&(i=s),n.baseState=i,n.firstBaseUpdate=m,n.lastBaseUpdate=g,e===null&&(n.shared.lanes=0),Wt|=f,l.lanes=f,l.memoizedState=s}}function My(l,t){if(typeof l!="function")throw Error(b(191,l));l.call(t)}function Dy(l,t){var u=l.callbacks;if(u!==null)for(l.callbacks=null,l=0;l<u.length;l++)My(u[l],t)}var $u=Pl(null),fe=Pl(0);function C0(l,t){l=zt,x(fe,l),x($u,t),zt=l|t.baseLanes}function cc(){x(fe,zt),x($u,$u.current)}function Pc(){zt=fe.current,cl($u),cl(fe)}var Yl=Pl(null),xl=null;function Ht(l){var t=l.alternate;x(k,k.current&1),x(Yl,l),xl===null&&(t===null||$u.current!==null||t.memoizedState!==null)&&(xl=l)}function ic(l){x(k,k.current),x(Yl,l),xl===null&&(xl=l)}function Uy(l){l.tag===22?(x(k,k.current),x(Yl,l),xl===null&&(xl=l)):Nt(l)}function Nt(){x(k,k.current),x(Yl,Yl.current)}function Ml(l){cl(Yl),xl===l&&(xl=null),cl(k)}var k=Pl(0);function ce(l){for(var t=l;t!==null;){if(t.tag===13){var u=t.memoizedState;if(u!==null&&(u=u.dehydrated,u===null||Uc(u)||Hc(u)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===l)break;for(;t.sibling===null;){if(t.return===null||t.return===l)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ot=0,M=null,j=null,P=null,ie=!1,Lu=!1,vu=!1,ye=0,Ja=0,Ku=null,vh=0;function $(){throw Error(b(321))}function li(l,t){if(t===null)return!1;for(var u=0;u<t.length&&u<l.length;u++)if(!Bl(l[u],t[u]))return!1;return!0}function ti(l,t,u,a,n,e){return ot=e,M=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,O.H=l===null||l.memoizedState===null?nv:di,vu=!1,e=u(a,n),vu=!1,Lu&&(e=Ny(t,u,a,n)),Hy(l),e}function Hy(l){O.H=ra;var t=j!==null&&j.next!==null;if(ot=0,P=j=M=null,ie=!1,Ja=0,Ku=null,t)throw Error(b(300));l===null||ul||(l=l.dependencies,l!==null&&ne(l)&&(ul=!0))}function Ny(l,t,u,a){M=l;var n=0;do{if(Lu&&(Ku=null),Ja=0,Lu=!1,25<=n)throw Error(b(301));if(n+=1,P=j=null,l.updateQueue!=null){var e=l.updateQueue;e.lastEffect=null,e.events=null,e.stores=null,e.memoCache!=null&&(e.memoCache.index=0)}O.H=ev,e=t(u,a)}while(Lu);return e}function mh(){var l=O.H,t=l.useState()[0];return t=typeof t.then=="function"?en(t):t,l=l.useState()[0],(j!==null?j.memoizedState:null)!==l&&(M.flags|=1024),t}function ui(){var l=ye!==0;return ye=0,l}function ai(l,t,u){t.updateQueue=l.updateQueue,t.flags&=-2053,l.lanes&=~u}function ni(l){if(ie){for(l=l.memoizedState;l!==null;){var t=l.queue;t!==null&&(t.pending=null),l=l.next}ie=!1}ot=0,P=j=M=null,Lu=!1,Ja=ye=0,Ku=null}function ol(){var l={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return P===null?M.memoizedState=P=l:P=P.next=l,P}function I(){if(j===null){var l=M.alternate;l=l!==null?l.memoizedState:null}else l=j.next;var t=P===null?M.memoizedState:P.next;if(t!==null)P=t,j=l;else{if(l===null)throw M.alternate===null?Error(b(467)):Error(b(310));j=l,l={memoizedState:j.memoizedState,baseState:j.baseState,baseQueue:j.baseQueue,queue:j.queue,next:null},P===null?M.memoizedState=P=l:P=P.next=l}return P}function Be(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function en(l){var t=Ja;return Ja+=1,Ku===null&&(Ku=[]),l=Ay(Ku,l,t),t=M,(P===null?t.memoizedState:P.next)===null&&(t=t.alternate,O.H=t===null||t.memoizedState===null?nv:di),l}function Ye(l){if(l!==null&&typeof l=="object"){if(typeof l.then=="function")return en(l);if(l.$$typeof===yt)return ml(l)}throw Error(b(438,String(l)))}function ei(l){var t=null,u=M.updateQueue;if(u!==null&&(t=u.memoCache),t==null){var a=M.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),u===null&&(u=Be(),M.updateQueue=u),u.memoCache=t,u=t.data[t.index],u===void 0)for(u=t.data[t.index]=Array(l),a=0;a<l;a++)u[a]=Fm;return t.index++,u}function st(l,t){return typeof t=="function"?t(l):t}function Vn(l){var t=I();return fi(t,j,l)}function fi(l,t,u){var a=l.queue;if(a===null)throw Error(b(311));a.lastRenderedReducer=u;var n=l.baseQueue,e=a.pending;if(e!==null){if(n!==null){var f=n.next;n.next=e.next,e.next=f}t.baseQueue=n=e,a.pending=null}if(e=l.baseState,n===null)l.memoizedState=e;else{t=n.next;var c=f=null,i=null,m=t,g=!1;do{var s=m.lane&-536870913;if(s!==m.lane?(p&s)===s:(ot&s)===s){var h=m.revertLane;if(h===0)i!==null&&(i=i.next={lane:0,revertLane:0,gesture:null,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null}),s===Wu&&(g=!0);else if((ot&h)===h){m=m.next,h===Wu&&(g=!0);continue}else s={lane:0,revertLane:m.revertLane,gesture:null,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},i===null?(c=i=s,f=e):i=i.next=s,M.lanes|=h,Wt|=h;s=m.action,vu&&u(e,s),e=m.hasEagerState?m.eagerState:u(e,s)}else h={lane:s,revertLane:m.revertLane,gesture:m.gesture,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},i===null?(c=i=h,f=e):i=i.next=h,M.lanes|=s,Wt|=s;m=m.next}while(m!==null&&m!==t);if(i===null?f=e:i.next=c,!Bl(e,l.memoizedState)&&(ul=!0,g&&(u=Vu,u!==null)))throw u;l.memoizedState=e,l.baseState=f,l.baseQueue=i,a.lastRenderedState=e}return n===null&&(a.lanes=0),[l.memoizedState,a.dispatch]}function zf(l){var t=I(),u=t.queue;if(u===null)throw Error(b(311));u.lastRenderedReducer=l;var a=u.dispatch,n=u.pending,e=t.memoizedState;if(n!==null){u.pending=null;var f=n=n.next;do e=l(e,f.action),f=f.next;while(f!==n);Bl(e,t.memoizedState)||(ul=!0),t.memoizedState=e,t.baseQueue===null&&(t.baseState=e),u.lastRenderedState=e}return[e,a]}function py(l,t,u){var a=M,n=I(),e=q;if(e){if(u===void 0)throw Error(b(407));u=u()}else u=t();var f=!Bl((j||n).memoizedState,u);if(f&&(n.memoizedState=u,ul=!0),n=n.queue,ci(Yy.bind(null,a,n,l),[l]),n.getSnapshot!==t||f||P!==null&&P.memoizedState.tag&1){if(a.flags|=2048,Fu(9,{destroy:void 0},By.bind(null,a,n,u,t),null),V===null)throw Error(b(349));e||(ot&127)!==0||qy(a,t,u)}return u}function qy(l,t,u){l.flags|=16384,l={getSnapshot:t,value:u},t=M.updateQueue,t===null?(t=Be(),M.updateQueue=t,t.stores=[l]):(u=t.stores,u===null?t.stores=[l]:u.push(l))}function By(l,t,u,a){t.value=u,t.getSnapshot=a,Ry(t)&&Cy(l)}function Yy(l,t,u){return u(function(){Ry(t)&&Cy(l)})}function Ry(l){var t=l.getSnapshot;l=l.value;try{var u=t();return!Bl(l,u)}catch{return!0}}function Cy(l){var t=gu(l,2);t!==null&&Tl(t,l,2)}function yc(l){var t=ol();if(typeof l=="function"){var u=l;if(l=u(),vu){qt(!0);try{u()}finally{qt(!1)}}}return t.memoizedState=t.baseState=l,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:st,lastRenderedState:l},t}function Gy(l,t,u,a){return l.baseState=u,fi(l,j,typeof a=="function"?a:st)}function dh(l,t,u,a,n){if(Ce(l))throw Error(b(485));if(l=t.action,l!==null){var e={payload:n,action:l,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(f){e.listeners.push(f)}};O.T!==null?u(!0):e.isTransition=!1,a(e),u=t.pending,u===null?(e.next=t.pending=e,Xy(t,e)):(e.next=u.next,t.pending=u.next=e)}}function Xy(l,t){var u=t.action,a=t.payload,n=l.state;if(t.isTransition){var e=O.T,f={};O.T=f;try{var c=u(n,a),i=O.S;i!==null&&i(f,c),G0(l,t,c)}catch(m){vc(l,t,m)}finally{e!==null&&f.types!==null&&(e.types=f.types),O.T=e}}else try{e=u(n,a),G0(l,t,e)}catch(m){vc(l,t,m)}}function G0(l,t,u){u!==null&&typeof u=="object"&&typeof u.then=="function"?u.then(function(a){X0(l,t,a)},function(a){return vc(l,t,a)}):X0(l,t,u)}function X0(l,t,u){t.status="fulfilled",t.value=u,Qy(t),l.state=u,t=l.pending,t!==null&&(u=t.next,u===t?l.pending=null:(u=u.next,t.next=u,Xy(l,u)))}function vc(l,t,u){var a=l.pending;if(l.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=u,Qy(t),t=t.next;while(t!==a)}l.action=null}function Qy(l){l=l.listeners;for(var t=0;t<l.length;t++)(0,l[t])()}function Zy(l,t){return t}function Q0(l,t){if(q){var u=V.formState;if(u!==null){l:{var a=M;if(q){if(J){t:{for(var n=J,e=Vl;n.nodeType!==8;){if(!e){n=null;break t}if(n=Ll(n.nextSibling),n===null){n=null;break t}}e=n.data,n=e==="F!"||e==="F"?n:null}if(n){J=Ll(n.nextSibling),a=n.data==="F!";break l}}rt(a)}a=!1}a&&(t=u[0])}}return u=ol(),u.memoizedState=u.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zy,lastRenderedState:t},u.queue=a,u=tv.bind(null,M,a),a.dispatch=u,a=yc(!1),e=mi.bind(null,M,!1,a.queue),a=ol(),n={state:t,dispatch:null,action:l,pending:null},a.queue=n,u=dh.bind(null,M,n,e,u),n.dispatch=u,a.memoizedState=l,[t,u,!1]}function Z0(l){var t=I();return jy(t,j,l)}function jy(l,t,u){if(t=fi(l,t,Zy)[0],l=Vn(st)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=en(t)}catch(f){throw f===ea?qe:f}else a=t;t=I();var n=t.queue,e=n.dispatch;return u!==t.memoizedState&&(M.flags|=2048,Fu(9,{destroy:void 0},hh.bind(null,n,u),null)),[a,e,l]}function hh(l,t){l.action=t}function j0(l){var t=I(),u=j;if(u!==null)return jy(t,u,l);I(),t=t.memoizedState,u=I();var a=u.queue.dispatch;return u.memoizedState=l,[t,a,!1]}function Fu(l,t,u,a){return l={tag:l,create:u,deps:a,inst:t,next:null},t=M.updateQueue,t===null&&(t=Be(),M.updateQueue=t),u=t.lastEffect,u===null?t.lastEffect=l.next=l:(a=u.next,u.next=l,l.next=a,t.lastEffect=l),l}function Vy(){return I().memoizedState}function xn(l,t,u,a){var n=ol();M.flags|=l,n.memoizedState=Fu(1|t,{destroy:void 0},u,a===void 0?null:a)}function Re(l,t,u,a){var n=I();a=a===void 0?null:a;var e=n.memoizedState.inst;j!==null&&a!==null&&li(a,j.memoizedState.deps)?n.memoizedState=Fu(t,e,u,a):(M.flags|=l,n.memoizedState=Fu(1|t,e,u,a))}function V0(l,t){xn(8390656,8,l,t)}function ci(l,t){Re(2048,8,l,t)}function Sh(l){M.flags|=4;var t=M.updateQueue;if(t===null)t=Be(),M.updateQueue=t,t.events=[l];else{var u=t.events;u===null?t.events=[l]:u.push(l)}}function xy(l){var t=I().memoizedState;return Sh({ref:t,nextImpl:l}),function(){if((R&2)!==0)throw Error(b(440));return t.impl.apply(void 0,arguments)}}function Ly(l,t){return Re(4,2,l,t)}function Ky(l,t){return Re(4,4,l,t)}function Jy(l,t){if(typeof t=="function"){l=l();var u=t(l);return function(){typeof u=="function"?u():t(null)}}if(t!=null)return l=l(),t.current=l,function(){t.current=null}}function ry(l,t,u){u=u!=null?u.concat([l]):null,Re(4,4,Jy.bind(null,t,l),u)}function ii(){}function wy(l,t){var u=I();t=t===void 0?null:t;var a=u.memoizedState;return t!==null&&li(t,a[1])?a[0]:(u.memoizedState=[l,t],l)}function Wy(l,t){var u=I();t=t===void 0?null:t;var a=u.memoizedState;if(t!==null&&li(t,a[1]))return a[0];if(a=l(),vu){qt(!0);try{l()}finally{qt(!1)}}return u.memoizedState=[a,t],a}function yi(l,t,u){return u===void 0||(ot&1073741824)!==0&&(p&261930)===0?l.memoizedState=t:(l.memoizedState=u,l=Gv(),M.lanes|=l,Wt|=l,u)}function $y(l,t,u,a){return Bl(u,t)?u:$u.current!==null?(l=yi(l,u,a),Bl(l,t)||(ul=!0),l):(ot&42)===0||(ot&1073741824)!==0&&(p&261930)===0?(ul=!0,l.memoizedState=u):(l=Gv(),M.lanes|=l,Wt|=l,t)}function Fy(l,t,u,a,n){var e=C.p;C.p=e!==0&&8>e?e:8;var f=O.T,c={};O.T=c,mi(l,!1,t,u);try{var i=n(),m=O.S;if(m!==null&&m(c,i),i!==null&&typeof i=="object"&&typeof i.then=="function"){var g=yh(i,a);Ba(l,t,g,ql(l))}else Ba(l,t,a,ql(l))}catch(s){Ba(l,t,{then:function(){},status:"rejected",reason:s},ql())}finally{C.p=e,f!==null&&c.types!==null&&(f.types=c.types),O.T=f}}function gh(){}function mc(l,t,u,a){if(l.tag!==5)throw Error(b(476));var n=ky(l).queue;Fy(l,n,t,uu,u===null?gh:function(){return Iy(l),u(a)})}function ky(l){var t=l.memoizedState;if(t!==null)return t;t={memoizedState:uu,baseState:uu,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:st,lastRenderedState:uu},next:null};var u={};return t.next={memoizedState:u,baseState:u,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:st,lastRenderedState:u},next:null},l.memoizedState=t,l=l.alternate,l!==null&&(l.memoizedState=t),t}function Iy(l){var t=ky(l);t.next===null&&(t=l.alternate.memoizedState),Ba(l,t.next.queue,{},ql())}function vi(){return ml($a)}function Py(){return I().memoizedState}function lv(){return I().memoizedState}function oh(l){for(var t=l.return;t!==null;){switch(t.tag){case 24:case 3:var u=ql();l=Qt(u);var a=Zt(t,l,u);a!==null&&(Tl(a,t,u),Na(a,t,u)),t={cache:$c()},l.payload=t;return}t=t.return}}function sh(l,t,u){var a=ql();u={lane:a,revertLane:0,gesture:null,action:u,hasEagerState:!1,eagerState:null,next:null},Ce(l)?uv(t,u):(u=Jc(l,t,u,a),u!==null&&(Tl(u,l,a),av(u,t,a)))}function tv(l,t,u){var a=ql();Ba(l,t,u,a)}function Ba(l,t,u,a){var n={lane:a,revertLane:0,gesture:null,action:u,hasEagerState:!1,eagerState:null,next:null};if(Ce(l))uv(t,n);else{var e=l.alternate;if(l.lanes===0&&(e===null||e.lanes===0)&&(e=t.lastRenderedReducer,e!==null))try{var f=t.lastRenderedState,c=e(f,u);if(n.hasEagerState=!0,n.eagerState=c,Bl(c,f))return pe(l,t,n,0),V===null&&Ne(),!1}catch{}if(u=Jc(l,t,n,a),u!==null)return Tl(u,l,a),av(u,t,a),!0}return!1}function mi(l,t,u,a){if(a={lane:2,revertLane:Ei(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ce(l)){if(t)throw Error(b(479))}else t=Jc(l,u,a,2),t!==null&&Tl(t,l,2)}function Ce(l){var t=l.alternate;return l===M||t!==null&&t===M}function uv(l,t){Lu=ie=!0;var u=l.pending;u===null?t.next=t:(t.next=u.next,u.next=t),l.pending=t}function av(l,t,u){if((u&4194048)!==0){var a=t.lanes;a&=l.pendingLanes,u|=a,t.lanes=u,x1(l,u)}}var ra={readContext:ml,use:Ye,useCallback:$,useContext:$,useEffect:$,useImperativeHandle:$,useLayoutEffect:$,useInsertionEffect:$,useMemo:$,useReducer:$,useRef:$,useState:$,useDebugValue:$,useDeferredValue:$,useTransition:$,useSyncExternalStore:$,useId:$,useHostTransitionStatus:$,useFormState:$,useActionState:$,useOptimistic:$,useMemoCache:$,useCacheRefresh:$};ra.useEffectEvent=$;var nv={readContext:ml,use:Ye,useCallback:function(l,t){return ol().memoizedState=[l,t===void 0?null:t],l},useContext:ml,useEffect:V0,useImperativeHandle:function(l,t,u){u=u!=null?u.concat([l]):null,xn(4194308,4,Jy.bind(null,t,l),u)},useLayoutEffect:function(l,t){return xn(4194308,4,l,t)},useInsertionEffect:function(l,t){xn(4,2,l,t)},useMemo:function(l,t){var u=ol();t=t===void 0?null:t;var a=l();if(vu){qt(!0);try{l()}finally{qt(!1)}}return u.memoizedState=[a,t],a},useReducer:function(l,t,u){var a=ol();if(u!==void 0){var n=u(t);if(vu){qt(!0);try{u(t)}finally{qt(!1)}}}else n=t;return a.memoizedState=a.baseState=n,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:l,lastRenderedState:n},a.queue=l,l=l.dispatch=sh.bind(null,M,l),[a.memoizedState,l]},useRef:function(l){var t=ol();return l={current:l},t.memoizedState=l},useState:function(l){l=yc(l);var t=l.queue,u=tv.bind(null,M,t);return t.dispatch=u,[l.memoizedState,u]},useDebugValue:ii,useDeferredValue:function(l,t){var u=ol();return yi(u,l,t)},useTransition:function(){var l=yc(!1);return l=Fy.bind(null,M,l.queue,!0,!1),ol().memoizedState=l,[!1,l]},useSyncExternalStore:function(l,t,u){var a=M,n=ol();if(q){if(u===void 0)throw Error(b(407));u=u()}else{if(u=t(),V===null)throw Error(b(349));(p&127)!==0||qy(a,t,u)}n.memoizedState=u;var e={value:u,getSnapshot:t};return n.queue=e,V0(Yy.bind(null,a,e,l),[l]),a.flags|=2048,Fu(9,{destroy:void 0},By.bind(null,a,e,u,t),null),u},useId:function(){var l=ol(),t=V.identifierPrefix;if(q){var u=Fl,a=$l;u=(a&~(1<<32-pl(a)-1)).toString(32)+u,t="_"+t+"R_"+u,u=ye++,0<u&&(t+="H"+u.toString(32)),t+="_"}else u=vh++,t="_"+t+"r_"+u.toString(32)+"_";return l.memoizedState=t},useHostTransitionStatus:vi,useFormState:Q0,useActionState:Q0,useOptimistic:function(l){var t=ol();t.memoizedState=t.baseState=l;var u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=u,t=mi.bind(null,M,!0,u),u.dispatch=t,[l,t]},useMemoCache:ei,useCacheRefresh:function(){return ol().memoizedState=oh.bind(null,M)},useEffectEvent:function(l){var t=ol(),u={impl:l};return t.memoizedState=u,function(){if((R&2)!==0)throw Error(b(440));return u.impl.apply(void 0,arguments)}}},di={readContext:ml,use:Ye,useCallback:wy,useContext:ml,useEffect:ci,useImperativeHandle:ry,useInsertionEffect:Ly,useLayoutEffect:Ky,useMemo:Wy,useReducer:Vn,useRef:Vy,useState:function(){return Vn(st)},useDebugValue:ii,useDeferredValue:function(l,t){var u=I();return $y(u,j.memoizedState,l,t)},useTransition:function(){var l=Vn(st)[0],t=I().memoizedState;return[typeof l=="boolean"?l:en(l),t]},useSyncExternalStore:py,useId:Py,useHostTransitionStatus:vi,useFormState:Z0,useActionState:Z0,useOptimistic:function(l,t){var u=I();return Gy(u,j,l,t)},useMemoCache:ei,useCacheRefresh:lv};di.useEffectEvent=xy;var ev={readContext:ml,use:Ye,useCallback:wy,useContext:ml,useEffect:ci,useImperativeHandle:ry,useInsertionEffect:Ly,useLayoutEffect:Ky,useMemo:Wy,useReducer:zf,useRef:Vy,useState:function(){return zf(st)},useDebugValue:ii,useDeferredValue:function(l,t){var u=I();return j===null?yi(u,l,t):$y(u,j.memoizedState,l,t)},useTransition:function(){var l=zf(st)[0],t=I().memoizedState;return[typeof l=="boolean"?l:en(l),t]},useSyncExternalStore:py,useId:Py,useHostTransitionStatus:vi,useFormState:j0,useActionState:j0,useOptimistic:function(l,t){var u=I();return j!==null?Gy(u,j,l,t):(u.baseState=l,[l,u.queue.dispatch])},useMemoCache:ei,useCacheRefresh:lv};ev.useEffectEvent=xy;function Ef(l,t,u,a){t=l.memoizedState,u=u(a,t),u=u==null?t:r({},t,u),l.memoizedState=u,l.lanes===0&&(l.updateQueue.baseState=u)}var dc={enqueueSetState:function(l,t,u){l=l._reactInternals;var a=ql(),n=Qt(a);n.payload=t,u!=null&&(n.callback=u),t=Zt(l,n,a),t!==null&&(Tl(t,l,a),Na(t,l,a))},enqueueReplaceState:function(l,t,u){l=l._reactInternals;var a=ql(),n=Qt(a);n.tag=1,n.payload=t,u!=null&&(n.callback=u),t=Zt(l,n,a),t!==null&&(Tl(t,l,a),Na(t,l,a))},enqueueForceUpdate:function(l,t){l=l._reactInternals;var u=ql(),a=Qt(u);a.tag=2,t!=null&&(a.callback=t),t=Zt(l,a,u),t!==null&&(Tl(t,l,u),Na(t,l,u))}};function x0(l,t,u,a,n,e,f){return l=l.stateNode,typeof l.shouldComponentUpdate=="function"?l.shouldComponentUpdate(a,e,f):t.prototype&&t.prototype.isPureReactComponent?!Va(u,a)||!Va(n,e):!0}function L0(l,t,u,a){l=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(u,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(u,a),t.state!==l&&dc.enqueueReplaceState(t,t.state,null)}function mu(l,t){var u=t;if("ref"in t){u={};for(var a in t)a!=="ref"&&(u[a]=t[a])}if(l=l.defaultProps){u===t&&(u=r({},u));for(var n in l)u[n]===void 0&&(u[n]=l[n])}return u}function fv(l){te(l)}function cv(l){console.error(l)}function iv(l){te(l)}function ve(l,t){try{var u=l.onUncaughtError;u(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function K0(l,t,u){try{var a=l.onCaughtError;a(u.value,{componentStack:u.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function hc(l,t,u){return u=Qt(u),u.tag=3,u.payload={element:null},u.callback=function(){ve(l,t)},u}function yv(l){return l=Qt(l),l.tag=3,l}function vv(l,t,u,a){var n=u.type.getDerivedStateFromError;if(typeof n=="function"){var e=a.value;l.payload=function(){return n(e)},l.callback=function(){K0(t,u,a)}}var f=u.stateNode;f!==null&&typeof f.componentDidCatch=="function"&&(l.callback=function(){K0(t,u,a),typeof n!="function"&&(jt===null?jt=new Set([this]):jt.add(this));var c=a.stack;this.componentDidCatch(a.value,{componentStack:c!==null?c:""})})}function bh(l,t,u,a,n){if(u.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=u.alternate,t!==null&&na(t,u,n,!0),u=Yl.current,u!==null){switch(u.tag){case 31:case 13:return xl===null?ge():u.alternate===null&&F===0&&(F=3),u.flags&=-257,u.flags|=65536,u.lanes=n,a===ee?u.flags|=16384:(t=u.updateQueue,t===null?u.updateQueue=new Set([a]):t.add(a),qf(l,a,n)),!1;case 22:return u.flags|=65536,a===ee?u.flags|=16384:(t=u.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},u.updateQueue=t):(u=t.retryQueue,u===null?t.retryQueue=new Set([a]):u.add(a)),qf(l,a,n)),!1}throw Error(b(435,u.tag))}return qf(l,a,n),ge(),!1}if(q)return t=Yl.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,a!==lc&&(l=Error(b(422),{cause:a}),La(jl(l,u)))):(a!==lc&&(t=Error(b(423),{cause:a}),La(jl(t,u))),l=l.current.alternate,l.flags|=65536,n&=-n,l.lanes|=n,a=jl(a,u),n=hc(l.stateNode,a,n),bf(l,n),F!==4&&(F=2)),!1;var e=Error(b(520),{cause:a});if(e=jl(e,u),Ca===null?Ca=[e]:Ca.push(e),F!==4&&(F=2),t===null)return!0;a=jl(a,u),u=t;do{switch(u.tag){case 3:return u.flags|=65536,l=n&-n,u.lanes|=l,l=hc(u.stateNode,a,l),bf(u,l),!1;case 1:if(t=u.type,e=u.stateNode,(u.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||e!==null&&typeof e.componentDidCatch=="function"&&(jt===null||!jt.has(e))))return u.flags|=65536,n&=-n,u.lanes|=n,n=yv(n),vv(n,l,u,a),bf(u,n),!1}u=u.return}while(u!==null);return!1}var hi=Error(b(461)),ul=!1;function il(l,t,u,a){t.child=l===null?_y(t,null,u,a):yu(t,l.child,u,a)}function J0(l,t,u,a,n){u=u.render;var e=t.ref;if("ref"in a){var f={};for(var c in a)c!=="ref"&&(f[c]=a[c])}else f=a;return iu(t),a=ti(l,t,u,f,e,n),c=ui(),l!==null&&!ul?(ai(l,t,n),bt(l,t,n)):(q&&c&&wc(t),t.flags|=1,il(l,t,a,n),t.child)}function r0(l,t,u,a,n){if(l===null){var e=u.type;return typeof e=="function"&&!rc(e)&&e.defaultProps===void 0&&u.compare===null?(t.tag=15,t.type=e,mv(l,t,e,a,n)):(l=Zn(u.type,null,a,t,t.mode,n),l.ref=t.ref,l.return=t,t.child=l)}if(e=l.child,!Si(l,n)){var f=e.memoizedProps;if(u=u.compare,u=u!==null?u:Va,u(f,a)&&l.ref===t.ref)return bt(l,t,n)}return t.flags|=1,l=dt(e,a),l.ref=t.ref,l.return=t,t.child=l}function mv(l,t,u,a,n){if(l!==null){var e=l.memoizedProps;if(Va(e,a)&&l.ref===t.ref)if(ul=!1,t.pendingProps=a=e,Si(l,n))(l.flags&131072)!==0&&(ul=!0);else return t.lanes=l.lanes,bt(l,t,n)}return Sc(l,t,u,a,n)}function dv(l,t,u,a){var n=a.children,e=l!==null?l.memoizedState:null;if(l===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(e=e!==null?e.baseLanes|u:u,l!==null){for(a=t.child=l.child,n=0;a!==null;)n=n|a.lanes|a.childLanes,a=a.sibling;a=n&~e}else a=0,t.child=null;return w0(l,t,e,u,a)}if((u&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},l!==null&&jn(t,e!==null?e.cachePool:null),e!==null?C0(t,e):cc(),Uy(t);else return a=t.lanes=536870912,w0(l,t,e!==null?e.baseLanes|u:u,u,a)}else e!==null?(jn(t,e.cachePool),C0(t,e),Nt(t),t.memoizedState=null):(l!==null&&jn(t,null),cc(),Nt(t));return il(l,t,n,u),t.child}function Oa(l,t){return l!==null&&l.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function w0(l,t,u,a,n){var e=Fc();return e=e===null?null:{parent:tl._currentValue,pool:e},t.memoizedState={baseLanes:u,cachePool:e},l!==null&&jn(t,null),cc(),Uy(t),l!==null&&na(l,t,a,!0),t.childLanes=n,null}function Ln(l,t){return t=me({mode:t.mode,children:t.children},l.mode),t.ref=l.ref,l.child=t,t.return=l,t}function W0(l,t,u){return yu(t,l.child,null,u),l=Ln(t,t.pendingProps),l.flags|=2,Ml(t),t.memoizedState=null,l}function zh(l,t,u){var a=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,l===null){if(q){if(a.mode==="hidden")return l=Ln(t,a),t.lanes=536870912,Oa(null,l);if(ic(t),(l=J)?(l=nm(l,Vl),l=l!==null&&l.data==="&"?l:null,l!==null&&(t.memoizedState={dehydrated:l,treeContext:Jt!==null?{id:$l,overflow:Fl}:null,retryLane:536870912,hydrationErrors:null},u=sy(l),u.return=t,t.child=u,vl=t,J=null)):l=null,l===null)throw rt(t);return t.lanes=536870912,null}return Ln(t,a)}var e=l.memoizedState;if(e!==null){var f=e.dehydrated;if(ic(t),n)if(t.flags&256)t.flags&=-257,t=W0(l,t,u);else if(t.memoizedState!==null)t.child=l.child,t.flags|=128,t=null;else throw Error(b(558));else if(ul||na(l,t,u,!1),n=(u&l.childLanes)!==0,ul||n){if(a=V,a!==null&&(f=L1(a,u),f!==0&&f!==e.retryLane))throw e.retryLane=f,gu(l,f),Tl(a,l,f),hi;ge(),t=W0(l,t,u)}else l=e.treeContext,J=Ll(f.nextSibling),vl=t,q=!0,Xt=null,Vl=!1,l!==null&&zy(t,l),t=Ln(t,a),t.flags|=4096;return t}return l=dt(l.child,{mode:a.mode,children:a.children}),l.ref=t.ref,t.child=l,l.return=t,l}function Kn(l,t){var u=t.ref;if(u===null)l!==null&&l.ref!==null&&(t.flags|=4194816);else{if(typeof u!="function"&&typeof u!="object")throw Error(b(284));(l===null||l.ref!==u)&&(t.flags|=4194816)}}function Sc(l,t,u,a,n){return iu(t),u=ti(l,t,u,a,void 0,n),a=ui(),l!==null&&!ul?(ai(l,t,n),bt(l,t,n)):(q&&a&&wc(t),t.flags|=1,il(l,t,u,n),t.child)}function $0(l,t,u,a,n,e){return iu(t),t.updateQueue=null,u=Ny(t,a,u,n),Hy(l),a=ui(),l!==null&&!ul?(ai(l,t,e),bt(l,t,e)):(q&&a&&wc(t),t.flags|=1,il(l,t,u,e),t.child)}function F0(l,t,u,a,n){if(iu(t),t.stateNode===null){var e=Ru,f=u.contextType;typeof f=="object"&&f!==null&&(e=ml(f)),e=new u(a,e),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=dc,t.stateNode=e,e._reactInternals=t,e=t.stateNode,e.props=a,e.state=t.memoizedState,e.refs={},Ic(t),f=u.contextType,e.context=typeof f=="object"&&f!==null?ml(f):Ru,e.state=t.memoizedState,f=u.getDerivedStateFromProps,typeof f=="function"&&(Ef(t,u,f,a),e.state=t.memoizedState),typeof u.getDerivedStateFromProps=="function"||typeof e.getSnapshotBeforeUpdate=="function"||typeof e.UNSAFE_componentWillMount!="function"&&typeof e.componentWillMount!="function"||(f=e.state,typeof e.componentWillMount=="function"&&e.componentWillMount(),typeof e.UNSAFE_componentWillMount=="function"&&e.UNSAFE_componentWillMount(),f!==e.state&&dc.enqueueReplaceState(e,e.state,null),qa(t,a,e,n),pa(),e.state=t.memoizedState),typeof e.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(l===null){e=t.stateNode;var c=t.memoizedProps,i=mu(u,c);e.props=i;var m=e.context,g=u.contextType;f=Ru,typeof g=="object"&&g!==null&&(f=ml(g));var s=u.getDerivedStateFromProps;g=typeof s=="function"||typeof e.getSnapshotBeforeUpdate=="function",c=t.pendingProps!==c,g||typeof e.UNSAFE_componentWillReceiveProps!="function"&&typeof e.componentWillReceiveProps!="function"||(c||m!==f)&&L0(t,e,a,f),Dt=!1;var h=t.memoizedState;e.state=h,qa(t,a,e,n),pa(),m=t.memoizedState,c||h!==m||Dt?(typeof s=="function"&&(Ef(t,u,s,a),m=t.memoizedState),(i=Dt||x0(t,u,i,a,h,m,f))?(g||typeof e.UNSAFE_componentWillMount!="function"&&typeof e.componentWillMount!="function"||(typeof e.componentWillMount=="function"&&e.componentWillMount(),typeof e.UNSAFE_componentWillMount=="function"&&e.UNSAFE_componentWillMount()),typeof e.componentDidMount=="function"&&(t.flags|=4194308)):(typeof e.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=m),e.props=a,e.state=m,e.context=f,a=i):(typeof e.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{e=t.stateNode,ec(l,t),f=t.memoizedProps,g=mu(u,f),e.props=g,s=t.pendingProps,h=e.context,m=u.contextType,i=Ru,typeof m=="object"&&m!==null&&(i=ml(m)),c=u.getDerivedStateFromProps,(m=typeof c=="function"||typeof e.getSnapshotBeforeUpdate=="function")||typeof e.UNSAFE_componentWillReceiveProps!="function"&&typeof e.componentWillReceiveProps!="function"||(f!==s||h!==i)&&L0(t,e,a,i),Dt=!1,h=t.memoizedState,e.state=h,qa(t,a,e,n),pa();var S=t.memoizedState;f!==s||h!==S||Dt||l!==null&&l.dependencies!==null&&ne(l.dependencies)?(typeof c=="function"&&(Ef(t,u,c,a),S=t.memoizedState),(g=Dt||x0(t,u,g,a,h,S,i)||l!==null&&l.dependencies!==null&&ne(l.dependencies))?(m||typeof e.UNSAFE_componentWillUpdate!="function"&&typeof e.componentWillUpdate!="function"||(typeof e.componentWillUpdate=="function"&&e.componentWillUpdate(a,S,i),typeof e.UNSAFE_componentWillUpdate=="function"&&e.UNSAFE_componentWillUpdate(a,S,i)),typeof e.componentDidUpdate=="function"&&(t.flags|=4),typeof e.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof e.componentDidUpdate!="function"||f===l.memoizedProps&&h===l.memoizedState||(t.flags|=4),typeof e.getSnapshotBeforeUpdate!="function"||f===l.memoizedProps&&h===l.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=S),e.props=a,e.state=S,e.context=i,a=g):(typeof e.componentDidUpdate!="function"||f===l.memoizedProps&&h===l.memoizedState||(t.flags|=4),typeof e.getSnapshotBeforeUpdate!="function"||f===l.memoizedProps&&h===l.memoizedState||(t.flags|=1024),a=!1)}return e=a,Kn(l,t),a=(t.flags&128)!==0,e||a?(e=t.stateNode,u=a&&typeof u.getDerivedStateFromError!="function"?null:e.render(),t.flags|=1,l!==null&&a?(t.child=yu(t,l.child,null,n),t.child=yu(t,null,u,n)):il(l,t,u,n),t.memoizedState=e.state,l=t.child):l=bt(l,t,n),l}function k0(l,t,u,a){return cu(),t.flags|=256,il(l,t,u,a),t.child}var Tf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Af(l){return{baseLanes:l,cachePool:Ty()}}function Of(l,t,u){return l=l!==null?l.childLanes&~u:0,t&&(l|=Ul),l}function hv(l,t,u){var a=t.pendingProps,n=!1,e=(t.flags&128)!==0,f;if((f=e)||(f=l!==null&&l.memoizedState===null?!1:(k.current&2)!==0),f&&(n=!0,t.flags&=-129),f=(t.flags&32)!==0,t.flags&=-33,l===null){if(q){if(n?Ht(t):Nt(t),(l=J)?(l=nm(l,Vl),l=l!==null&&l.data!=="&"?l:null,l!==null&&(t.memoizedState={dehydrated:l,treeContext:Jt!==null?{id:$l,overflow:Fl}:null,retryLane:536870912,hydrationErrors:null},u=sy(l),u.return=t,t.child=u,vl=t,J=null)):l=null,l===null)throw rt(t);return Hc(l)?t.lanes=32:t.lanes=536870912,null}var c=a.children;return a=a.fallback,n?(Nt(t),n=t.mode,c=me({mode:"hidden",children:c},n),a=au(a,n,u,null),c.return=t,a.return=t,c.sibling=a,t.child=c,a=t.child,a.memoizedState=Af(u),a.childLanes=Of(l,f,u),t.memoizedState=Tf,Oa(null,a)):(Ht(t),gc(t,c))}var i=l.memoizedState;if(i!==null&&(c=i.dehydrated,c!==null)){if(e)t.flags&256?(Ht(t),t.flags&=-257,t=_f(l,t,u)):t.memoizedState!==null?(Nt(t),t.child=l.child,t.flags|=128,t=null):(Nt(t),c=a.fallback,n=t.mode,a=me({mode:"visible",children:a.children},n),c=au(c,n,u,null),c.flags|=2,a.return=t,c.return=t,a.sibling=c,t.child=a,yu(t,l.child,null,u),a=t.child,a.memoizedState=Af(u),a.childLanes=Of(l,f,u),t.memoizedState=Tf,t=Oa(null,a));else if(Ht(t),Hc(c)){if(f=c.nextSibling&&c.nextSibling.dataset,f)var m=f.dgst;f=m,a=Error(b(419)),a.stack="",a.digest=f,La({value:a,source:null,stack:null}),t=_f(l,t,u)}else if(ul||na(l,t,u,!1),f=(u&l.childLanes)!==0,ul||f){if(f=V,f!==null&&(a=L1(f,u),a!==0&&a!==i.retryLane))throw i.retryLane=a,gu(l,a),Tl(f,l,a),hi;Uc(c)||ge(),t=_f(l,t,u)}else Uc(c)?(t.flags|=192,t.child=l.child,t=null):(l=i.treeContext,J=Ll(c.nextSibling),vl=t,q=!0,Xt=null,Vl=!1,l!==null&&zy(t,l),t=gc(t,a.children),t.flags|=4096);return t}return n?(Nt(t),c=a.fallback,n=t.mode,i=l.child,m=i.sibling,a=dt(i,{mode:"hidden",children:a.children}),a.subtreeFlags=i.subtreeFlags&65011712,m!==null?c=dt(m,c):(c=au(c,n,u,null),c.flags|=2),c.return=t,a.return=t,a.sibling=c,t.child=a,Oa(null,a),a=t.child,c=l.child.memoizedState,c===null?c=Af(u):(n=c.cachePool,n!==null?(i=tl._currentValue,n=n.parent!==i?{parent:i,pool:i}:n):n=Ty(),c={baseLanes:c.baseLanes|u,cachePool:n}),a.memoizedState=c,a.childLanes=Of(l,f,u),t.memoizedState=Tf,Oa(l.child,a)):(Ht(t),u=l.child,l=u.sibling,u=dt(u,{mode:"visible",children:a.children}),u.return=t,u.sibling=null,l!==null&&(f=t.deletions,f===null?(t.deletions=[l],t.flags|=16):f.push(l)),t.child=u,t.memoizedState=null,u)}function gc(l,t){return t=me({mode:"visible",children:t},l.mode),t.return=l,l.child=t}function me(l,t){return l=Dl(22,l,null,t),l.lanes=0,l}function _f(l,t,u){return yu(t,l.child,null,u),l=gc(t,t.pendingProps.children),l.flags|=2,t.memoizedState=null,l}function I0(l,t,u){l.lanes|=t;var a=l.alternate;a!==null&&(a.lanes|=t),uc(l.return,t,u)}function Mf(l,t,u,a,n,e){var f=l.memoizedState;f===null?l.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:u,tailMode:n,treeForkCount:e}:(f.isBackwards=t,f.rendering=null,f.renderingStartTime=0,f.last=a,f.tail=u,f.tailMode=n,f.treeForkCount=e)}function Sv(l,t,u){var a=t.pendingProps,n=a.revealOrder,e=a.tail;a=a.children;var f=k.current,c=(f&2)!==0;if(c?(f=f&1|2,t.flags|=128):f&=1,x(k,f),il(l,t,a,u),a=q?xa:0,!c&&l!==null&&(l.flags&128)!==0)l:for(l=t.child;l!==null;){if(l.tag===13)l.memoizedState!==null&&I0(l,u,t);else if(l.tag===19)I0(l,u,t);else if(l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break l;for(;l.sibling===null;){if(l.return===null||l.return===t)break l;l=l.return}l.sibling.return=l.return,l=l.sibling}switch(n){case"forwards":for(u=t.child,n=null;u!==null;)l=u.alternate,l!==null&&ce(l)===null&&(n=u),u=u.sibling;u=n,u===null?(n=t.child,t.child=null):(n=u.sibling,u.sibling=null),Mf(t,!1,n,u,e,a);break;case"backwards":case"unstable_legacy-backwards":for(u=null,n=t.child,t.child=null;n!==null;){if(l=n.alternate,l!==null&&ce(l)===null){t.child=n;break}l=n.sibling,n.sibling=u,u=n,n=l}Mf(t,!0,u,null,e,a);break;case"together":Mf(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function bt(l,t,u){if(l!==null&&(t.dependencies=l.dependencies),Wt|=t.lanes,(u&t.childLanes)===0)if(l!==null){if(na(l,t,u,!1),(u&t.childLanes)===0)return null}else return null;if(l!==null&&t.child!==l.child)throw Error(b(153));if(t.child!==null){for(l=t.child,u=dt(l,l.pendingProps),t.child=u,u.return=t;l.sibling!==null;)l=l.sibling,u=u.sibling=dt(l,l.pendingProps),u.return=t;u.sibling=null}return t.child}function Si(l,t){return(l.lanes&t)!==0?!0:(l=l.dependencies,!!(l!==null&&ne(l)))}function Eh(l,t,u){switch(t.tag){case 3:kn(t,t.stateNode.containerInfo),Ut(t,tl,l.memoizedState.cache),cu();break;case 27:case 5:Lf(t);break;case 4:kn(t,t.stateNode.containerInfo);break;case 10:Ut(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,ic(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(Ht(t),t.flags|=128,null):(u&t.child.childLanes)!==0?hv(l,t,u):(Ht(t),l=bt(l,t,u),l!==null?l.sibling:null);Ht(t);break;case 19:var n=(l.flags&128)!==0;if(a=(u&t.childLanes)!==0,a||(na(l,t,u,!1),a=(u&t.childLanes)!==0),n){if(a)return Sv(l,t,u);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),x(k,k.current),a)break;return null;case 22:return t.lanes=0,dv(l,t,u,t.pendingProps);case 24:Ut(t,tl,l.memoizedState.cache)}return bt(l,t,u)}function gv(l,t,u){if(l!==null)if(l.memoizedProps!==t.pendingProps)ul=!0;else{if(!Si(l,u)&&(t.flags&128)===0)return ul=!1,Eh(l,t,u);ul=(l.flags&131072)!==0}else ul=!1,q&&(t.flags&1048576)!==0&&by(t,xa,t.index);switch(t.lanes=0,t.tag){case 16:l:{var a=t.pendingProps;if(l=lu(t.elementType),t.type=l,typeof l=="function")rc(l)?(a=mu(l,a),t.tag=1,t=F0(null,t,l,a,u)):(t.tag=0,t=Sc(null,t,l,a,u));else{if(l!=null){var n=l.$$typeof;if(n===Bc){t.tag=11,t=J0(null,t,l,a,u);break l}else if(n===Yc){t.tag=14,t=r0(null,t,l,a,u);break l}}throw t=Vf(l)||l,Error(b(306,t,""))}}return t;case 0:return Sc(l,t,t.type,t.pendingProps,u);case 1:return a=t.type,n=mu(a,t.pendingProps),F0(l,t,a,n,u);case 3:l:{if(kn(t,t.stateNode.containerInfo),l===null)throw Error(b(387));a=t.pendingProps;var e=t.memoizedState;n=e.element,ec(l,t),qa(t,a,null,u);var f=t.memoizedState;if(a=f.cache,Ut(t,tl,a),a!==e.cache&&ac(t,[tl],u,!0),pa(),a=f.element,e.isDehydrated)if(e={element:a,isDehydrated:!1,cache:f.cache},t.updateQueue.baseState=e,t.memoizedState=e,t.flags&256){t=k0(l,t,a,u);break l}else if(a!==n){n=jl(Error(b(424)),t),La(n),t=k0(l,t,a,u);break l}else for(l=t.stateNode.containerInfo,l.nodeType===9?l=l.body:l=l.nodeName==="HTML"?l.ownerDocument.body:l,J=Ll(l.firstChild),vl=t,q=!0,Xt=null,Vl=!0,u=_y(t,null,a,u),t.child=u;u;)u.flags=u.flags&-3|4096,u=u.sibling;else{if(cu(),a===n){t=bt(l,t,u);break l}il(l,t,a,u)}t=t.child}return t;case 26:return Kn(l,t),l===null?(u=E1(t.type,null,t.pendingProps,null))?t.memoizedState=u:q||(u=t.type,l=t.pendingProps,a=ze(Gt.current).createElement(u),a[yl]=t,a[Al]=l,dl(a,u,l),fl(a),t.stateNode=a):t.memoizedState=E1(t.type,l.memoizedProps,t.pendingProps,l.memoizedState),null;case 27:return Lf(t),l===null&&q&&(a=t.stateNode=em(t.type,t.pendingProps,Gt.current),vl=t,Vl=!0,n=J,Ft(t.type)?(Nc=n,J=Ll(a.firstChild)):J=n),il(l,t,t.pendingProps.children,u),Kn(l,t),l===null&&(t.flags|=4194304),t.child;case 5:return l===null&&q&&((n=a=J)&&(a=Wh(a,t.type,t.pendingProps,Vl),a!==null?(t.stateNode=a,vl=t,J=Ll(a.firstChild),Vl=!1,n=!0):n=!1),n||rt(t)),Lf(t),n=t.type,e=t.pendingProps,f=l!==null?l.memoizedProps:null,a=e.children,Mc(n,e)?a=null:f!==null&&Mc(n,f)&&(t.flags|=32),t.memoizedState!==null&&(n=ti(l,t,mh,null,null,u),$a._currentValue=n),Kn(l,t),il(l,t,a,u),t.child;case 6:return l===null&&q&&((l=u=J)&&(u=$h(u,t.pendingProps,Vl),u!==null?(t.stateNode=u,vl=t,J=null,l=!0):l=!1),l||rt(t)),null;case 13:return hv(l,t,u);case 4:return kn(t,t.stateNode.containerInfo),a=t.pendingProps,l===null?t.child=yu(t,null,a,u):il(l,t,a,u),t.child;case 11:return J0(l,t,t.type,t.pendingProps,u);case 7:return il(l,t,t.pendingProps,u),t.child;case 8:return il(l,t,t.pendingProps.children,u),t.child;case 12:return il(l,t,t.pendingProps.children,u),t.child;case 10:return a=t.pendingProps,Ut(t,t.type,a.value),il(l,t,a.children,u),t.child;case 9:return n=t.type._context,a=t.pendingProps.children,iu(t),n=ml(n),a=a(n),t.flags|=1,il(l,t,a,u),t.child;case 14:return r0(l,t,t.type,t.pendingProps,u);case 15:return mv(l,t,t.type,t.pendingProps,u);case 19:return Sv(l,t,u);case 31:return zh(l,t,u);case 22:return dv(l,t,u,t.pendingProps);case 24:return iu(t),a=ml(tl),l===null?(n=Fc(),n===null&&(n=V,e=$c(),n.pooledCache=e,e.refCount++,e!==null&&(n.pooledCacheLanes|=u),n=e),t.memoizedState={parent:a,cache:n},Ic(t),Ut(t,tl,n)):((l.lanes&u)!==0&&(ec(l,t),qa(t,null,null,u),pa()),n=l.memoizedState,e=t.memoizedState,n.parent!==a?(n={parent:a,cache:a},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),Ut(t,tl,a)):(a=e.cache,Ut(t,tl,a),a!==n.cache&&ac(t,[tl],u,!0))),il(l,t,t.pendingProps.children,u),t.child;case 29:throw t.pendingProps}throw Error(b(156,t.tag))}function at(l){l.flags|=4}function Df(l,t,u,a,n){if((t=(l.mode&32)!==0)&&(t=!1),t){if(l.flags|=16777216,(n&335544128)===n)if(l.stateNode.complete)l.flags|=8192;else if(Zv())l.flags|=8192;else throw eu=ee,kc}else l.flags&=-16777217}function P0(l,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)l.flags&=-16777217;else if(l.flags|=16777216,!im(t))if(Zv())l.flags|=8192;else throw eu=ee,kc}function Hn(l,t){t!==null&&(l.flags|=4),l.flags&16384&&(t=l.tag!==22?j1():536870912,l.lanes|=t,ku|=t)}function oa(l,t){if(!q)switch(l.tailMode){case"hidden":t=l.tail;for(var u=null;t!==null;)t.alternate!==null&&(u=t),t=t.sibling;u===null?l.tail=null:u.sibling=null;break;case"collapsed":u=l.tail;for(var a=null;u!==null;)u.alternate!==null&&(a=u),u=u.sibling;a===null?t||l.tail===null?l.tail=null:l.tail.sibling=null:a.sibling=null}}function K(l){var t=l.alternate!==null&&l.alternate.child===l.child,u=0,a=0;if(t)for(var n=l.child;n!==null;)u|=n.lanes|n.childLanes,a|=n.subtreeFlags&65011712,a|=n.flags&65011712,n.return=l,n=n.sibling;else for(n=l.child;n!==null;)u|=n.lanes|n.childLanes,a|=n.subtreeFlags,a|=n.flags,n.return=l,n=n.sibling;return l.subtreeFlags|=a,l.childLanes=u,t}function Th(l,t,u){var a=t.pendingProps;switch(Wc(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return K(t),null;case 1:return K(t),null;case 3:return u=t.stateNode,a=null,l!==null&&(a=l.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),ht(tl),Ju(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(l===null||l.child===null)&&(Au(t)?at(t):l===null||l.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,sf())),K(t),null;case 26:var n=t.type,e=t.memoizedState;return l===null?(at(t),e!==null?(K(t),P0(t,e)):(K(t),Df(t,n,null,a,u))):e?e!==l.memoizedState?(at(t),K(t),P0(t,e)):(K(t),t.flags&=-16777217):(l=l.memoizedProps,l!==a&&at(t),K(t),Df(t,n,l,a,u)),null;case 27:if(In(t),u=Gt.current,n=t.type,l!==null&&t.stateNode!=null)l.memoizedProps!==a&&at(t);else{if(!a){if(t.stateNode===null)throw Error(b(166));return K(t),null}l=Il.current,Au(t)?H0(t,l):(l=em(n,a,u),t.stateNode=l,at(t))}return K(t),null;case 5:if(In(t),n=t.type,l!==null&&t.stateNode!=null)l.memoizedProps!==a&&at(t);else{if(!a){if(t.stateNode===null)throw Error(b(166));return K(t),null}if(e=Il.current,Au(t))H0(t,e);else{var f=ze(Gt.current);switch(e){case 1:e=f.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=f.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=f.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=f.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=f.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof a.is=="string"?f.createElement("select",{is:a.is}):f.createElement("select"),a.multiple?e.multiple=!0:a.size&&(e.size=a.size);break;default:e=typeof a.is=="string"?f.createElement(n,{is:a.is}):f.createElement(n)}}e[yl]=t,e[Al]=a;l:for(f=t.child;f!==null;){if(f.tag===5||f.tag===6)e.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break l;for(;f.sibling===null;){if(f.return===null||f.return===t)break l;f=f.return}f.sibling.return=f.return,f=f.sibling}t.stateNode=e;l:switch(dl(e,n,a),n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break l;case"img":a=!0;break l;default:a=!1}a&&at(t)}}return K(t),Df(t,t.type,l===null?null:l.memoizedProps,t.pendingProps,u),null;case 6:if(l&&t.stateNode!=null)l.memoizedProps!==a&&at(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(b(166));if(l=Gt.current,Au(t)){if(l=t.stateNode,u=t.memoizedProps,a=null,n=vl,n!==null)switch(n.tag){case 27:case 5:a=n.memoizedProps}l[yl]=t,l=!!(l.nodeValue===u||a!==null&&a.suppressHydrationWarning===!0||tm(l.nodeValue,u)),l||rt(t,!0)}else l=ze(l).createTextNode(a),l[yl]=t,t.stateNode=l}return K(t),null;case 31:if(u=t.memoizedState,l===null||l.memoizedState!==null){if(a=Au(t),u!==null){if(l===null){if(!a)throw Error(b(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(b(557));l[yl]=t}else cu(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;K(t),l=!1}else u=sf(),l!==null&&l.memoizedState!==null&&(l.memoizedState.hydrationErrors=u),l=!0;if(!l)return t.flags&256?(Ml(t),t):(Ml(t),null);if((t.flags&128)!==0)throw Error(b(558))}return K(t),null;case 13:if(a=t.memoizedState,l===null||l.memoizedState!==null&&l.memoizedState.dehydrated!==null){if(n=Au(t),a!==null&&a.dehydrated!==null){if(l===null){if(!n)throw Error(b(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(b(317));n[yl]=t}else cu(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;K(t),n=!1}else n=sf(),l!==null&&l.memoizedState!==null&&(l.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(Ml(t),t):(Ml(t),null)}return Ml(t),(t.flags&128)!==0?(t.lanes=u,t):(u=a!==null,l=l!==null&&l.memoizedState!==null,u&&(a=t.child,n=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(n=a.alternate.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==n&&(a.flags|=2048)),u!==l&&u&&(t.child.flags|=8192),Hn(t,t.updateQueue),K(t),null);case 4:return Ju(),l===null&&Ti(t.stateNode.containerInfo),K(t),null;case 10:return ht(t.type),K(t),null;case 19:if(cl(k),a=t.memoizedState,a===null)return K(t),null;if(n=(t.flags&128)!==0,e=a.rendering,e===null)if(n)oa(a,!1);else{if(F!==0||l!==null&&(l.flags&128)!==0)for(l=t.child;l!==null;){if(e=ce(l),e!==null){for(t.flags|=128,oa(a,!1),l=e.updateQueue,t.updateQueue=l,Hn(t,l),t.subtreeFlags=0,l=u,u=t.child;u!==null;)oy(u,l),u=u.sibling;return x(k,k.current&1|2),q&&ct(t,a.treeForkCount),t.child}l=l.sibling}a.tail!==null&&Hl()>he&&(t.flags|=128,n=!0,oa(a,!1),t.lanes=4194304)}else{if(!n)if(l=ce(e),l!==null){if(t.flags|=128,n=!0,l=l.updateQueue,t.updateQueue=l,Hn(t,l),oa(a,!0),a.tail===null&&a.tailMode==="hidden"&&!e.alternate&&!q)return K(t),null}else 2*Hl()-a.renderingStartTime>he&&u!==536870912&&(t.flags|=128,n=!0,oa(a,!1),t.lanes=4194304);a.isBackwards?(e.sibling=t.child,t.child=e):(l=a.last,l!==null?l.sibling=e:t.child=e,a.last=e)}return a.tail!==null?(l=a.tail,a.rendering=l,a.tail=l.sibling,a.renderingStartTime=Hl(),l.sibling=null,u=k.current,x(k,n?u&1|2:u&1),q&&ct(t,a.treeForkCount),l):(K(t),null);case 22:case 23:return Ml(t),Pc(),a=t.memoizedState!==null,l!==null?l.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(u&536870912)!==0&&(t.flags&128)===0&&(K(t),t.subtreeFlags&6&&(t.flags|=8192)):K(t),u=t.updateQueue,u!==null&&Hn(t,u.retryQueue),u=null,l!==null&&l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(u=l.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==u&&(t.flags|=2048),l!==null&&cl(nu),null;case 24:return u=null,l!==null&&(u=l.memoizedState.cache),t.memoizedState.cache!==u&&(t.flags|=2048),ht(tl),K(t),null;case 25:return null;case 30:return null}throw Error(b(156,t.tag))}function Ah(l,t){switch(Wc(t),t.tag){case 1:return l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 3:return ht(tl),Ju(),l=t.flags,(l&65536)!==0&&(l&128)===0?(t.flags=l&-65537|128,t):null;case 26:case 27:case 5:return In(t),null;case 31:if(t.memoizedState!==null){if(Ml(t),t.alternate===null)throw Error(b(340));cu()}return l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 13:if(Ml(t),l=t.memoizedState,l!==null&&l.dehydrated!==null){if(t.alternate===null)throw Error(b(340));cu()}return l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 19:return cl(k),null;case 4:return Ju(),null;case 10:return ht(t.type),null;case 22:case 23:return Ml(t),Pc(),l!==null&&cl(nu),l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 24:return ht(tl),null;case 25:return null;default:return null}}function ov(l,t){switch(Wc(t),t.tag){case 3:ht(tl),Ju();break;case 26:case 27:case 5:In(t);break;case 4:Ju();break;case 31:t.memoizedState!==null&&Ml(t);break;case 13:Ml(t);break;case 19:cl(k);break;case 10:ht(t.type);break;case 22:case 23:Ml(t),Pc(),l!==null&&cl(nu);break;case 24:ht(tl)}}function fn(l,t){try{var u=t.updateQueue,a=u!==null?u.lastEffect:null;if(a!==null){var n=a.next;u=n;do{if((u.tag&l)===l){a=void 0;var e=u.create,f=u.inst;a=e(),f.destroy=a}u=u.next}while(u!==n)}}catch(c){X(t,t.return,c)}}function wt(l,t,u){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var e=n.next;a=e;do{if((a.tag&l)===l){var f=a.inst,c=f.destroy;if(c!==void 0){f.destroy=void 0,n=t;var i=u,m=c;try{m()}catch(g){X(n,i,g)}}}a=a.next}while(a!==e)}}catch(g){X(t,t.return,g)}}function sv(l){var t=l.updateQueue;if(t!==null){var u=l.stateNode;try{Dy(t,u)}catch(a){X(l,l.return,a)}}}function bv(l,t,u){u.props=mu(l.type,l.memoizedProps),u.state=l.memoizedState;try{u.componentWillUnmount()}catch(a){X(l,t,a)}}function Ya(l,t){try{var u=l.ref;if(u!==null){switch(l.tag){case 26:case 27:case 5:var a=l.stateNode;break;case 30:a=l.stateNode;break;default:a=l.stateNode}typeof u=="function"?l.refCleanup=u(a):u.current=a}}catch(n){X(l,t,n)}}function kl(l,t){var u=l.ref,a=l.refCleanup;if(u!==null)if(typeof a=="function")try{a()}catch(n){X(l,t,n)}finally{l.refCleanup=null,l=l.alternate,l!=null&&(l.refCleanup=null)}else if(typeof u=="function")try{u(null)}catch(n){X(l,t,n)}else u.current=null}function zv(l){var t=l.type,u=l.memoizedProps,a=l.stateNode;try{l:switch(t){case"button":case"input":case"select":case"textarea":u.autoFocus&&a.focus();break l;case"img":u.src?a.src=u.src:u.srcSet&&(a.srcset=u.srcSet)}}catch(n){X(l,l.return,n)}}function Uf(l,t,u){try{var a=l.stateNode;xh(a,l.type,u,t),a[Al]=t}catch(n){X(l,l.return,n)}}function Ev(l){return l.tag===5||l.tag===3||l.tag===26||l.tag===27&&Ft(l.type)||l.tag===4}function Hf(l){l:for(;;){for(;l.sibling===null;){if(l.return===null||Ev(l.return))return null;l=l.return}for(l.sibling.return=l.return,l=l.sibling;l.tag!==5&&l.tag!==6&&l.tag!==18;){if(l.tag===27&&Ft(l.type)||l.flags&2||l.child===null||l.tag===4)continue l;l.child.return=l,l=l.child}if(!(l.flags&2))return l.stateNode}}function oc(l,t,u){var a=l.tag;if(a===5||a===6)l=l.stateNode,t?(u.nodeType===9?u.body:u.nodeName==="HTML"?u.ownerDocument.body:u).insertBefore(l,t):(t=u.nodeType===9?u.body:u.nodeName==="HTML"?u.ownerDocument.body:u,t.appendChild(l),u=u._reactRootContainer,u!=null||t.onclick!==null||(t.onclick=vt));else if(a!==4&&(a===27&&Ft(l.type)&&(u=l.stateNode,t=null),l=l.child,l!==null))for(oc(l,t,u),l=l.sibling;l!==null;)oc(l,t,u),l=l.sibling}function de(l,t,u){var a=l.tag;if(a===5||a===6)l=l.stateNode,t?u.insertBefore(l,t):u.appendChild(l);else if(a!==4&&(a===27&&Ft(l.type)&&(u=l.stateNode),l=l.child,l!==null))for(de(l,t,u),l=l.sibling;l!==null;)de(l,t,u),l=l.sibling}function Tv(l){var t=l.stateNode,u=l.memoizedProps;try{for(var a=l.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);dl(t,a,u),t[yl]=l,t[Al]=u}catch(e){X(l,l.return,e)}}var it=!1,ll=!1,Nf=!1,l1=typeof WeakSet=="function"?WeakSet:Set,el=null;function Oh(l,t){if(l=l.containerInfo,Oc=Oe,l=iy(l),Lc(l)){if("selectionStart"in l)var u={start:l.selectionStart,end:l.selectionEnd};else l:{u=(u=l.ownerDocument)&&u.defaultView||window;var a=u.getSelection&&u.getSelection();if(a&&a.rangeCount!==0){u=a.anchorNode;var n=a.anchorOffset,e=a.focusNode;a=a.focusOffset;try{u.nodeType,e.nodeType}catch{u=null;break l}var f=0,c=-1,i=-1,m=0,g=0,s=l,h=null;t:for(;;){for(var S;s!==u||n!==0&&s.nodeType!==3||(c=f+n),s!==e||a!==0&&s.nodeType!==3||(i=f+a),s.nodeType===3&&(f+=s.nodeValue.length),(S=s.firstChild)!==null;)h=s,s=S;for(;;){if(s===l)break t;if(h===u&&++m===n&&(c=f),h===e&&++g===a&&(i=f),(S=s.nextSibling)!==null)break;s=h,h=s.parentNode}s=S}u=c===-1||i===-1?null:{start:c,end:i}}else u=null}u=u||{start:0,end:0}}else u=null;for(_c={focusedElem:l,selectionRange:u},Oe=!1,el=t;el!==null;)if(t=el,l=t.child,(t.subtreeFlags&1028)!==0&&l!==null)l.return=t,el=l;else for(;el!==null;){switch(t=el,e=t.alternate,l=t.flags,t.tag){case 0:if((l&4)!==0&&(l=t.updateQueue,l=l!==null?l.events:null,l!==null))for(u=0;u<l.length;u++)n=l[u],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((l&1024)!==0&&e!==null){l=void 0,u=t,n=e.memoizedProps,e=e.memoizedState,a=u.stateNode;try{var z=mu(u.type,n);l=a.getSnapshotBeforeUpdate(z,e),a.__reactInternalSnapshotBeforeUpdate=l}catch(A){X(u,u.return,A)}}break;case 3:if((l&1024)!==0){if(l=t.stateNode.containerInfo,u=l.nodeType,u===9)Dc(l);else if(u===1)switch(l.nodeName){case"HEAD":case"HTML":case"BODY":Dc(l);break;default:l.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((l&1024)!==0)throw Error(b(163))}if(l=t.sibling,l!==null){l.return=t.return,el=l;break}el=t.return}}function Av(l,t,u){var a=u.flags;switch(u.tag){case 0:case 11:case 15:et(l,u),a&4&&fn(5,u);break;case 1:if(et(l,u),a&4)if(l=u.stateNode,t===null)try{l.componentDidMount()}catch(f){X(u,u.return,f)}else{var n=mu(u.type,t.memoizedProps);t=t.memoizedState;try{l.componentDidUpdate(n,t,l.__reactInternalSnapshotBeforeUpdate)}catch(f){X(u,u.return,f)}}a&64&&sv(u),a&512&&Ya(u,u.return);break;case 3:if(et(l,u),a&64&&(l=u.updateQueue,l!==null)){if(t=null,u.child!==null)switch(u.child.tag){case 27:case 5:t=u.child.stateNode;break;case 1:t=u.child.stateNode}try{Dy(l,t)}catch(f){X(u,u.return,f)}}break;case 27:t===null&&a&4&&Tv(u);case 26:case 5:et(l,u),t===null&&a&4&&zv(u),a&512&&Ya(u,u.return);break;case 12:et(l,u);break;case 31:et(l,u),a&4&&Mv(l,u);break;case 13:et(l,u),a&4&&Dv(l,u),a&64&&(l=u.memoizedState,l!==null&&(l=l.dehydrated,l!==null&&(u=Bh.bind(null,u),Fh(l,u))));break;case 22:if(a=u.memoizedState!==null||it,!a){t=t!==null&&t.memoizedState!==null||ll,n=it;var e=ll;it=a,(ll=t)&&!e?ft(l,u,(u.subtreeFlags&8772)!==0):et(l,u),it=n,ll=e}break;case 30:break;default:et(l,u)}}function Ov(l){var t=l.alternate;t!==null&&(l.alternate=null,Ov(t)),l.child=null,l.deletions=null,l.sibling=null,l.tag===5&&(t=l.stateNode,t!==null&&Xc(t)),l.stateNode=null,l.return=null,l.dependencies=null,l.memoizedProps=null,l.memoizedState=null,l.pendingProps=null,l.stateNode=null,l.updateQueue=null}var W=null,zl=!1;function nt(l,t,u){for(u=u.child;u!==null;)_v(l,t,u),u=u.sibling}function _v(l,t,u){if(Nl&&typeof Nl.onCommitFiberUnmount=="function")try{Nl.onCommitFiberUnmount(Pa,u)}catch{}switch(u.tag){case 26:ll||kl(u,t),nt(l,t,u),u.memoizedState?u.memoizedState.count--:u.stateNode&&(u=u.stateNode,u.parentNode.removeChild(u));break;case 27:ll||kl(u,t);var a=W,n=zl;Ft(u.type)&&(W=u.stateNode,zl=!1),nt(l,t,u),Xa(u.stateNode),W=a,zl=n;break;case 5:ll||kl(u,t);case 6:if(a=W,n=zl,W=null,nt(l,t,u),W=a,zl=n,W!==null)if(zl)try{(W.nodeType===9?W.body:W.nodeName==="HTML"?W.ownerDocument.body:W).removeChild(u.stateNode)}catch(e){X(u,t,e)}else try{W.removeChild(u.stateNode)}catch(e){X(u,t,e)}break;case 18:W!==null&&(zl?(l=W,g1(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,u.stateNode),ta(l)):g1(W,u.stateNode));break;case 4:a=W,n=zl,W=u.stateNode.containerInfo,zl=!0,nt(l,t,u),W=a,zl=n;break;case 0:case 11:case 14:case 15:wt(2,u,t),ll||wt(4,u,t),nt(l,t,u);break;case 1:ll||(kl(u,t),a=u.stateNode,typeof a.componentWillUnmount=="function"&&bv(u,t,a)),nt(l,t,u);break;case 21:nt(l,t,u);break;case 22:ll=(a=ll)||u.memoizedState!==null,nt(l,t,u),ll=a;break;default:nt(l,t,u)}}function Mv(l,t){if(t.memoizedState===null&&(l=t.alternate,l!==null&&(l=l.memoizedState,l!==null))){l=l.dehydrated;try{ta(l)}catch(u){X(t,t.return,u)}}}function Dv(l,t){if(t.memoizedState===null&&(l=t.alternate,l!==null&&(l=l.memoizedState,l!==null&&(l=l.dehydrated,l!==null))))try{ta(l)}catch(u){X(t,t.return,u)}}function _h(l){switch(l.tag){case 31:case 13:case 19:var t=l.stateNode;return t===null&&(t=l.stateNode=new l1),t;case 22:return l=l.stateNode,t=l._retryCache,t===null&&(t=l._retryCache=new l1),t;default:throw Error(b(435,l.tag))}}function Nn(l,t){var u=_h(l);t.forEach(function(a){if(!u.has(a)){u.add(a);var n=Yh.bind(null,l,a);a.then(n,n)}})}function sl(l,t){var u=t.deletions;if(u!==null)for(var a=0;a<u.length;a++){var n=u[a],e=l,f=t,c=f;l:for(;c!==null;){switch(c.tag){case 27:if(Ft(c.type)){W=c.stateNode,zl=!1;break l}break;case 5:W=c.stateNode,zl=!1;break l;case 3:case 4:W=c.stateNode.containerInfo,zl=!0;break l}c=c.return}if(W===null)throw Error(b(160));_v(e,f,n),W=null,zl=!1,e=n.alternate,e!==null&&(e.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Uv(t,l),t=t.sibling}var rl=null;function Uv(l,t){var u=l.alternate,a=l.flags;switch(l.tag){case 0:case 11:case 14:case 15:sl(t,l),bl(l),a&4&&(wt(3,l,l.return),fn(3,l),wt(5,l,l.return));break;case 1:sl(t,l),bl(l),a&512&&(ll||u===null||kl(u,u.return)),a&64&&it&&(l=l.updateQueue,l!==null&&(a=l.callbacks,a!==null&&(u=l.shared.hiddenCallbacks,l.shared.hiddenCallbacks=u===null?a:u.concat(a))));break;case 26:var n=rl;if(sl(t,l),bl(l),a&512&&(ll||u===null||kl(u,u.return)),a&4){var e=u!==null?u.memoizedState:null;if(a=l.memoizedState,u===null)if(a===null)if(l.stateNode===null){l:{a=l.type,u=l.memoizedProps,n=n.ownerDocument||n;t:switch(a){case"title":e=n.getElementsByTagName("title")[0],(!e||e[un]||e[yl]||e.namespaceURI==="http://www.w3.org/2000/svg"||e.hasAttribute("itemprop"))&&(e=n.createElement(a),n.head.insertBefore(e,n.querySelector("head > title"))),dl(e,a,u),e[yl]=l,fl(e),a=e;break l;case"link":var f=A1("link","href",n).get(a+(u.href||""));if(f){for(var c=0;c<f.length;c++)if(e=f[c],e.getAttribute("href")===(u.href==null||u.href===""?null:u.href)&&e.getAttribute("rel")===(u.rel==null?null:u.rel)&&e.getAttribute("title")===(u.title==null?null:u.title)&&e.getAttribute("crossorigin")===(u.crossOrigin==null?null:u.crossOrigin)){f.splice(c,1);break t}}e=n.createElement(a),dl(e,a,u),n.head.appendChild(e);break;case"meta":if(f=A1("meta","content",n).get(a+(u.content||""))){for(c=0;c<f.length;c++)if(e=f[c],e.getAttribute("content")===(u.content==null?null:""+u.content)&&e.getAttribute("name")===(u.name==null?null:u.name)&&e.getAttribute("property")===(u.property==null?null:u.property)&&e.getAttribute("http-equiv")===(u.httpEquiv==null?null:u.httpEquiv)&&e.getAttribute("charset")===(u.charSet==null?null:u.charSet)){f.splice(c,1);break t}}e=n.createElement(a),dl(e,a,u),n.head.appendChild(e);break;default:throw Error(b(468,a))}e[yl]=l,fl(e),a=e}l.stateNode=a}else O1(n,l.type,l.stateNode);else l.stateNode=T1(n,a,l.memoizedProps);else e!==a?(e===null?u.stateNode!==null&&(u=u.stateNode,u.parentNode.removeChild(u)):e.count--,a===null?O1(n,l.type,l.stateNode):T1(n,a,l.memoizedProps)):a===null&&l.stateNode!==null&&Uf(l,l.memoizedProps,u.memoizedProps)}break;case 27:sl(t,l),bl(l),a&512&&(ll||u===null||kl(u,u.return)),u!==null&&a&4&&Uf(l,l.memoizedProps,u.memoizedProps);break;case 5:if(sl(t,l),bl(l),a&512&&(ll||u===null||kl(u,u.return)),l.flags&32){n=l.stateNode;try{wu(n,"")}catch(z){X(l,l.return,z)}}a&4&&l.stateNode!=null&&(n=l.memoizedProps,Uf(l,n,u!==null?u.memoizedProps:n)),a&1024&&(Nf=!0);break;case 6:if(sl(t,l),bl(l),a&4){if(l.stateNode===null)throw Error(b(162));a=l.memoizedProps,u=l.stateNode;try{u.nodeValue=a}catch(z){X(l,l.return,z)}}break;case 3:if(wn=null,n=rl,rl=Ee(t.containerInfo),sl(t,l),rl=n,bl(l),a&4&&u!==null&&u.memoizedState.isDehydrated)try{ta(t.containerInfo)}catch(z){X(l,l.return,z)}Nf&&(Nf=!1,Hv(l));break;case 4:a=rl,rl=Ee(l.stateNode.containerInfo),sl(t,l),bl(l),rl=a;break;case 12:sl(t,l),bl(l);break;case 31:sl(t,l),bl(l),a&4&&(a=l.updateQueue,a!==null&&(l.updateQueue=null,Nn(l,a)));break;case 13:sl(t,l),bl(l),l.child.flags&8192&&l.memoizedState!==null!=(u!==null&&u.memoizedState!==null)&&(Ge=Hl()),a&4&&(a=l.updateQueue,a!==null&&(l.updateQueue=null,Nn(l,a)));break;case 22:n=l.memoizedState!==null;var i=u!==null&&u.memoizedState!==null,m=it,g=ll;if(it=m||n,ll=g||i,sl(t,l),ll=g,it=m,bl(l),a&8192)l:for(t=l.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(u===null||i||it||ll||tu(l)),u=null,t=l;;){if(t.tag===5||t.tag===26){if(u===null){i=u=t;try{if(e=i.stateNode,n)f=e.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{c=i.stateNode;var s=i.memoizedProps.style,h=s!=null&&s.hasOwnProperty("display")?s.display:null;c.style.display=h==null||typeof h=="boolean"?"":(""+h).trim()}}catch(z){X(i,i.return,z)}}}else if(t.tag===6){if(u===null){i=t;try{i.stateNode.nodeValue=n?"":i.memoizedProps}catch(z){X(i,i.return,z)}}}else if(t.tag===18){if(u===null){i=t;try{var S=i.stateNode;n?o1(S,!0):o1(i.stateNode,!1)}catch(z){X(i,i.return,z)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===l)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===l)break l;for(;t.sibling===null;){if(t.return===null||t.return===l)break l;u===t&&(u=null),t=t.return}u===t&&(u=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=l.updateQueue,a!==null&&(u=a.retryQueue,u!==null&&(a.retryQueue=null,Nn(l,u))));break;case 19:sl(t,l),bl(l),a&4&&(a=l.updateQueue,a!==null&&(l.updateQueue=null,Nn(l,a)));break;case 30:break;case 21:break;default:sl(t,l),bl(l)}}function bl(l){var t=l.flags;if(t&2){try{for(var u,a=l.return;a!==null;){if(Ev(a)){u=a;break}a=a.return}if(u==null)throw Error(b(160));switch(u.tag){case 27:var n=u.stateNode,e=Hf(l);de(l,e,n);break;case 5:var f=u.stateNode;u.flags&32&&(wu(f,""),u.flags&=-33);var c=Hf(l);de(l,c,f);break;case 3:case 4:var i=u.stateNode.containerInfo,m=Hf(l);oc(l,m,i);break;default:throw Error(b(161))}}catch(g){X(l,l.return,g)}l.flags&=-3}t&4096&&(l.flags&=-4097)}function Hv(l){if(l.subtreeFlags&1024)for(l=l.child;l!==null;){var t=l;Hv(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),l=l.sibling}}function et(l,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Av(l,t.alternate,t),t=t.sibling}function tu(l){for(l=l.child;l!==null;){var t=l;switch(t.tag){case 0:case 11:case 14:case 15:wt(4,t,t.return),tu(t);break;case 1:kl(t,t.return);var u=t.stateNode;typeof u.componentWillUnmount=="function"&&bv(t,t.return,u),tu(t);break;case 27:Xa(t.stateNode);case 26:case 5:kl(t,t.return),tu(t);break;case 22:t.memoizedState===null&&tu(t);break;case 30:tu(t);break;default:tu(t)}l=l.sibling}}function ft(l,t,u){for(u=u&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,n=l,e=t,f=e.flags;switch(e.tag){case 0:case 11:case 15:ft(n,e,u),fn(4,e);break;case 1:if(ft(n,e,u),a=e,n=a.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(m){X(a,a.return,m)}if(a=e,n=a.updateQueue,n!==null){var c=a.stateNode;try{var i=n.shared.hiddenCallbacks;if(i!==null)for(n.shared.hiddenCallbacks=null,n=0;n<i.length;n++)My(i[n],c)}catch(m){X(a,a.return,m)}}u&&f&64&&sv(e),Ya(e,e.return);break;case 27:Tv(e);case 26:case 5:ft(n,e,u),u&&a===null&&f&4&&zv(e),Ya(e,e.return);break;case 12:ft(n,e,u);break;case 31:ft(n,e,u),u&&f&4&&Mv(n,e);break;case 13:ft(n,e,u),u&&f&4&&Dv(n,e);break;case 22:e.memoizedState===null&&ft(n,e,u),Ya(e,e.return);break;case 30:break;default:ft(n,e,u)}t=t.sibling}}function gi(l,t){var u=null;l!==null&&l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(u=l.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==u&&(l!=null&&l.refCount++,u!=null&&nn(u))}function oi(l,t){l=null,t.alternate!==null&&(l=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==l&&(t.refCount++,l!=null&&nn(l))}function Jl(l,t,u,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Nv(l,t,u,a),t=t.sibling}function Nv(l,t,u,a){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Jl(l,t,u,a),n&2048&&fn(9,t);break;case 1:Jl(l,t,u,a);break;case 3:Jl(l,t,u,a),n&2048&&(l=null,t.alternate!==null&&(l=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==l&&(t.refCount++,l!=null&&nn(l)));break;case 12:if(n&2048){Jl(l,t,u,a),l=t.stateNode;try{var e=t.memoizedProps,f=e.id,c=e.onPostCommit;typeof c=="function"&&c(f,t.alternate===null?"mount":"update",l.passiveEffectDuration,-0)}catch(i){X(t,t.return,i)}}else Jl(l,t,u,a);break;case 31:Jl(l,t,u,a);break;case 13:Jl(l,t,u,a);break;case 23:break;case 22:e=t.stateNode,f=t.alternate,t.memoizedState!==null?e._visibility&2?Jl(l,t,u,a):Ra(l,t):e._visibility&2?Jl(l,t,u,a):(e._visibility|=2,_u(l,t,u,a,(t.subtreeFlags&10256)!==0||!1)),n&2048&&gi(f,t);break;case 24:Jl(l,t,u,a),n&2048&&oi(t.alternate,t);break;default:Jl(l,t,u,a)}}function _u(l,t,u,a,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var e=l,f=t,c=u,i=a,m=f.flags;switch(f.tag){case 0:case 11:case 15:_u(e,f,c,i,n),fn(8,f);break;case 23:break;case 22:var g=f.stateNode;f.memoizedState!==null?g._visibility&2?_u(e,f,c,i,n):Ra(e,f):(g._visibility|=2,_u(e,f,c,i,n)),n&&m&2048&&gi(f.alternate,f);break;case 24:_u(e,f,c,i,n),n&&m&2048&&oi(f.alternate,f);break;default:_u(e,f,c,i,n)}t=t.sibling}}function Ra(l,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var u=l,a=t,n=a.flags;switch(a.tag){case 22:Ra(u,a),n&2048&&gi(a.alternate,a);break;case 24:Ra(u,a),n&2048&&oi(a.alternate,a);break;default:Ra(u,a)}t=t.sibling}}var _a=8192;function Ou(l,t,u){if(l.subtreeFlags&_a)for(l=l.child;l!==null;)pv(l,t,u),l=l.sibling}function pv(l,t,u){switch(l.tag){case 26:Ou(l,t,u),l.flags&_a&&l.memoizedState!==null&&i2(u,rl,l.memoizedState,l.memoizedProps);break;case 5:Ou(l,t,u);break;case 3:case 4:var a=rl;rl=Ee(l.stateNode.containerInfo),Ou(l,t,u),rl=a;break;case 22:l.memoizedState===null&&(a=l.alternate,a!==null&&a.memoizedState!==null?(a=_a,_a=16777216,Ou(l,t,u),_a=a):Ou(l,t,u));break;default:Ou(l,t,u)}}function qv(l){var t=l.alternate;if(t!==null&&(l=t.child,l!==null)){t.child=null;do t=l.sibling,l.sibling=null,l=t;while(l!==null)}}function sa(l){var t=l.deletions;if((l.flags&16)!==0){if(t!==null)for(var u=0;u<t.length;u++){var a=t[u];el=a,Yv(a,l)}qv(l)}if(l.subtreeFlags&10256)for(l=l.child;l!==null;)Bv(l),l=l.sibling}function Bv(l){switch(l.tag){case 0:case 11:case 15:sa(l),l.flags&2048&&wt(9,l,l.return);break;case 3:sa(l);break;case 12:sa(l);break;case 22:var t=l.stateNode;l.memoizedState!==null&&t._visibility&2&&(l.return===null||l.return.tag!==13)?(t._visibility&=-3,Jn(l)):sa(l);break;default:sa(l)}}function Jn(l){var t=l.deletions;if((l.flags&16)!==0){if(t!==null)for(var u=0;u<t.length;u++){var a=t[u];el=a,Yv(a,l)}qv(l)}for(l=l.child;l!==null;){switch(t=l,t.tag){case 0:case 11:case 15:wt(8,t,t.return),Jn(t);break;case 22:u=t.stateNode,u._visibility&2&&(u._visibility&=-3,Jn(t));break;default:Jn(t)}l=l.sibling}}function Yv(l,t){for(;el!==null;){var u=el;switch(u.tag){case 0:case 11:case 15:wt(8,u,t);break;case 23:case 22:if(u.memoizedState!==null&&u.memoizedState.cachePool!==null){var a=u.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:nn(u.memoizedState.cache)}if(a=u.child,a!==null)a.return=u,el=a;else l:for(u=l;el!==null;){a=el;var n=a.sibling,e=a.return;if(Ov(a),a===u){el=null;break l}if(n!==null){n.return=e,el=n;break l}el=e}}}var Mh={getCacheForType:function(l){var t=ml(tl),u=t.data.get(l);return u===void 0&&(u=l(),t.data.set(l,u)),u},cacheSignal:function(){return ml(tl).controller.signal}},Dh=typeof WeakMap=="function"?WeakMap:Map,R=0,V=null,H=null,p=0,G=0,_l=null,Yt=!1,fa=!1,si=!1,zt=0,F=0,Wt=0,fu=0,bi=0,Ul=0,ku=0,Ca=null,El=null,sc=!1,Ge=0,Rv=0,he=1/0,Se=null,jt=null,al=0,Vt=null,Iu=null,St=0,bc=0,zc=null,Cv=null,Ga=0,Ec=null;function ql(){return(R&2)!==0&&p!==0?p&-p:O.T!==null?Ei():K1()}function Gv(){if(Ul===0)if((p&536870912)===0||q){var l=zn;zn<<=1,(zn&3932160)===0&&(zn=262144),Ul=l}else Ul=536870912;return l=Yl.current,l!==null&&(l.flags|=32),Ul}function Tl(l,t,u){(l===V&&(G===2||G===9)||l.cancelPendingCommit!==null)&&(Pu(l,0),Rt(l,p,Ul,!1)),tn(l,u),((R&2)===0||l!==V)&&(l===V&&((R&2)===0&&(fu|=u),F===4&&Rt(l,p,Ul,!1)),lt(l))}function Xv(l,t,u){if((R&6)!==0)throw Error(b(327));var a=!u&&(t&127)===0&&(t&l.expiredLanes)===0||ln(l,t),n=a?Nh(l,t):pf(l,t,!0),e=a;do{if(n===0){fa&&!a&&Rt(l,t,0,!1);break}else{if(u=l.current.alternate,e&&!Uh(u)){n=pf(l,t,!1),e=!1;continue}if(n===2){if(e=t,l.errorRecoveryDisabledLanes&e)var f=0;else f=l.pendingLanes&-536870913,f=f!==0?f:f&536870912?536870912:0;if(f!==0){t=f;l:{var c=l;n=Ca;var i=c.current.memoizedState.isDehydrated;if(i&&(Pu(c,f).flags|=256),f=pf(c,f,!1),f!==2){if(si&&!i){c.errorRecoveryDisabledLanes|=e,fu|=e,n=4;break l}e=El,El=n,e!==null&&(El===null?El=e:El.push.apply(El,e))}n=f}if(e=!1,n!==2)continue}}if(n===1){Pu(l,0),Rt(l,t,0,!0);break}l:{switch(a=l,e=n,e){case 0:case 1:throw Error(b(345));case 4:if((t&4194048)!==t)break;case 6:Rt(a,t,Ul,!Yt);break l;case 2:El=null;break;case 3:case 5:break;default:throw Error(b(329))}if((t&62914560)===t&&(n=Ge+300-Hl(),10<n)){if(Rt(a,t,Ul,!Yt),Me(a,0,!0)!==0)break l;St=t,a.timeoutHandle=am(t1.bind(null,a,u,El,Se,sc,t,Ul,fu,ku,Yt,e,"Throttled",-0,0),n);break l}t1(a,u,El,Se,sc,t,Ul,fu,ku,Yt,e,null,-0,0)}}break}while(!0);lt(l)}function t1(l,t,u,a,n,e,f,c,i,m,g,s,h,S){if(l.timeoutHandle=-1,s=t.subtreeFlags,s&8192||(s&16785408)===16785408){s={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:vt},pv(t,e,s);var z=(e&62914560)===e?Ge-Hl():(e&4194048)===e?Rv-Hl():0;if(z=y2(s,z),z!==null){St=e,l.cancelPendingCommit=z(a1.bind(null,l,t,e,u,a,n,f,c,i,g,s,null,h,S)),Rt(l,e,f,!m);return}}a1(l,t,e,u,a,n,f,c,i)}function Uh(l){for(var t=l;;){var u=t.tag;if((u===0||u===11||u===15)&&t.flags&16384&&(u=t.updateQueue,u!==null&&(u=u.stores,u!==null)))for(var a=0;a<u.length;a++){var n=u[a],e=n.getSnapshot;n=n.value;try{if(!Bl(e(),n))return!1}catch{return!1}}if(u=t.child,t.subtreeFlags&16384&&u!==null)u.return=t,t=u;else{if(t===l)break;for(;t.sibling===null;){if(t.return===null||t.return===l)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Rt(l,t,u,a){t&=~bi,t&=~fu,l.suspendedLanes|=t,l.pingedLanes&=~t,a&&(l.warmLanes|=t),a=l.expirationTimes;for(var n=t;0<n;){var e=31-pl(n),f=1<<e;a[e]=-1,n&=~f}u!==0&&V1(l,u,t)}function Xe(){return(R&6)===0?(cn(0,!1),!1):!0}function zi(){if(H!==null){if(G===0)var l=H.return;else l=H,mt=ou=null,ni(l),xu=null,Ka=0,l=H;for(;l!==null;)ov(l.alternate,l),l=l.return;H=null}}function Pu(l,t){var u=l.timeoutHandle;u!==-1&&(l.timeoutHandle=-1,Jh(u)),u=l.cancelPendingCommit,u!==null&&(l.cancelPendingCommit=null,u()),St=0,zi(),V=l,H=u=dt(l.current,null),p=t,G=0,_l=null,Yt=!1,fa=ln(l,t),si=!1,ku=Ul=bi=fu=Wt=F=0,El=Ca=null,sc=!1,(t&8)!==0&&(t|=t&32);var a=l.entangledLanes;if(a!==0)for(l=l.entanglements,a&=t;0<a;){var n=31-pl(a),e=1<<n;t|=l[n],a&=~e}return zt=t,Ne(),u}function Qv(l,t){M=null,O.H=ra,t===ea||t===qe?(t=Y0(),G=3):t===kc?(t=Y0(),G=4):G=t===hi?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,_l=t,H===null&&(F=1,ve(l,jl(t,l.current)))}function Zv(){var l=Yl.current;return l===null?!0:(p&4194048)===p?xl===null:(p&62914560)===p||(p&536870912)!==0?l===xl:!1}function jv(){var l=O.H;return O.H=ra,l===null?ra:l}function Vv(){var l=O.A;return O.A=Mh,l}function ge(){F=4,Yt||(p&4194048)!==p&&Yl.current!==null||(fa=!0),(Wt&134217727)===0&&(fu&134217727)===0||V===null||Rt(V,p,Ul,!1)}function pf(l,t,u){var a=R;R|=2;var n=jv(),e=Vv();(V!==l||p!==t)&&(Se=null,Pu(l,t)),t=!1;var f=F;l:do try{if(G!==0&&H!==null){var c=H,i=_l;switch(G){case 8:zi(),f=6;break l;case 3:case 2:case 9:case 6:Yl.current===null&&(t=!0);var m=G;if(G=0,_l=null,Xu(l,c,i,m),u&&fa){f=0;break l}break;default:m=G,G=0,_l=null,Xu(l,c,i,m)}}Hh(),f=F;break}catch(g){Qv(l,g)}while(!0);return t&&l.shellSuspendCounter++,mt=ou=null,R=a,O.H=n,O.A=e,H===null&&(V=null,p=0,Ne()),f}function Hh(){for(;H!==null;)xv(H)}function Nh(l,t){var u=R;R|=2;var a=jv(),n=Vv();V!==l||p!==t?(Se=null,he=Hl()+500,Pu(l,t)):fa=ln(l,t);l:do try{if(G!==0&&H!==null){t=H;var e=_l;t:switch(G){case 1:G=0,_l=null,Xu(l,t,e,1);break;case 2:case 9:if(B0(e)){G=0,_l=null,u1(t);break}t=function(){G!==2&&G!==9||V!==l||(G=7),lt(l)},e.then(t,t);break l;case 3:G=7;break l;case 4:G=5;break l;case 7:B0(e)?(G=0,_l=null,u1(t)):(G=0,_l=null,Xu(l,t,e,7));break;case 5:var f=null;switch(H.tag){case 26:f=H.memoizedState;case 5:case 27:var c=H;if(f?im(f):c.stateNode.complete){G=0,_l=null;var i=c.sibling;if(i!==null)H=i;else{var m=c.return;m!==null?(H=m,Qe(m)):H=null}break t}}G=0,_l=null,Xu(l,t,e,5);break;case 6:G=0,_l=null,Xu(l,t,e,6);break;case 8:zi(),F=6;break l;default:throw Error(b(462))}}ph();break}catch(g){Qv(l,g)}while(!0);return mt=ou=null,O.H=a,O.A=n,R=u,H!==null?0:(V=null,p=0,Ne(),F)}function ph(){for(;H!==null&&!Pm();)xv(H)}function xv(l){var t=gv(l.alternate,l,zt);l.memoizedProps=l.pendingProps,t===null?Qe(l):H=t}function u1(l){var t=l,u=t.alternate;switch(t.tag){case 15:case 0:t=$0(u,t,t.pendingProps,t.type,void 0,p);break;case 11:t=$0(u,t,t.pendingProps,t.type.render,t.ref,p);break;case 5:ni(t);default:ov(u,t),t=H=oy(t,zt),t=gv(u,t,zt)}l.memoizedProps=l.pendingProps,t===null?Qe(l):H=t}function Xu(l,t,u,a){mt=ou=null,ni(t),xu=null,Ka=0;var n=t.return;try{if(bh(l,n,t,u,p)){F=1,ve(l,jl(u,l.current)),H=null;return}}catch(e){if(n!==null)throw H=n,e;F=1,ve(l,jl(u,l.current)),H=null;return}t.flags&32768?(q||a===1?l=!0:fa||(p&536870912)!==0?l=!1:(Yt=l=!0,(a===2||a===9||a===3||a===6)&&(a=Yl.current,a!==null&&a.tag===13&&(a.flags|=16384))),Lv(t,l)):Qe(t)}function Qe(l){var t=l;do{if((t.flags&32768)!==0){Lv(t,Yt);return}l=t.return;var u=Th(t.alternate,t,zt);if(u!==null){H=u;return}if(t=t.sibling,t!==null){H=t;return}H=t=l}while(t!==null);F===0&&(F=5)}function Lv(l,t){do{var u=Ah(l.alternate,l);if(u!==null){u.flags&=32767,H=u;return}if(u=l.return,u!==null&&(u.flags|=32768,u.subtreeFlags=0,u.deletions=null),!t&&(l=l.sibling,l!==null)){H=l;return}H=l=u}while(l!==null);F=6,H=null}function a1(l,t,u,a,n,e,f,c,i){l.cancelPendingCommit=null;do Ze();while(al!==0);if((R&6)!==0)throw Error(b(327));if(t!==null){if(t===l.current)throw Error(b(177));if(e=t.lanes|t.childLanes,e|=Kc,yd(l,u,e,f,c,i),l===V&&(H=V=null,p=0),Iu=t,Vt=l,St=u,bc=e,zc=n,Cv=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(l.callbackNode=null,l.callbackPriority=0,Rh(Pn,function(){return Wv(),null})):(l.callbackNode=null,l.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=O.T,O.T=null,n=C.p,C.p=2,f=R,R|=4;try{Oh(l,t,u)}finally{R=f,C.p=n,O.T=a}}al=1,Kv(),Jv(),rv()}}function Kv(){if(al===1){al=0;var l=Vt,t=Iu,u=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||u){u=O.T,O.T=null;var a=C.p;C.p=2;var n=R;R|=4;try{Uv(t,l);var e=_c,f=iy(l.containerInfo),c=e.focusedElem,i=e.selectionRange;if(f!==c&&c&&c.ownerDocument&&cy(c.ownerDocument.documentElement,c)){if(i!==null&&Lc(c)){var m=i.start,g=i.end;if(g===void 0&&(g=m),"selectionStart"in c)c.selectionStart=m,c.selectionEnd=Math.min(g,c.value.length);else{var s=c.ownerDocument||document,h=s&&s.defaultView||window;if(h.getSelection){var S=h.getSelection(),z=c.textContent.length,A=Math.min(i.start,z),Q=i.end===void 0?A:Math.min(i.end,z);!S.extend&&A>Q&&(f=Q,Q=A,A=f);var v=M0(c,A),y=M0(c,Q);if(v&&y&&(S.rangeCount!==1||S.anchorNode!==v.node||S.anchorOffset!==v.offset||S.focusNode!==y.node||S.focusOffset!==y.offset)){var d=s.createRange();d.setStart(v.node,v.offset),S.removeAllRanges(),A>Q?(S.addRange(d),S.extend(y.node,y.offset)):(d.setEnd(y.node,y.offset),S.addRange(d))}}}}for(s=[],S=c;S=S.parentNode;)S.nodeType===1&&s.push({element:S,left:S.scrollLeft,top:S.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<s.length;c++){var o=s[c];o.element.scrollLeft=o.left,o.element.scrollTop=o.top}}Oe=!!Oc,_c=Oc=null}finally{R=n,C.p=a,O.T=u}}l.current=t,al=2}}function Jv(){if(al===2){al=0;var l=Vt,t=Iu,u=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||u){u=O.T,O.T=null;var a=C.p;C.p=2;var n=R;R|=4;try{Av(l,t.alternate,t)}finally{R=n,C.p=a,O.T=u}}al=3}}function rv(){if(al===4||al===3){al=0,ld();var l=Vt,t=Iu,u=St,a=Cv;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?al=5:(al=0,Iu=Vt=null,wv(l,l.pendingLanes));var n=l.pendingLanes;if(n===0&&(jt=null),Gc(u),t=t.stateNode,Nl&&typeof Nl.onCommitFiberRoot=="function")try{Nl.onCommitFiberRoot(Pa,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=O.T,n=C.p,C.p=2,O.T=null;try{for(var e=l.onRecoverableError,f=0;f<a.length;f++){var c=a[f];e(c.value,{componentStack:c.stack})}}finally{O.T=t,C.p=n}}(St&3)!==0&&Ze(),lt(l),n=l.pendingLanes,(u&261930)!==0&&(n&42)!==0?l===Ec?Ga++:(Ga=0,Ec=l):Ga=0,cn(0,!1)}}function wv(l,t){(l.pooledCacheLanes&=t)===0&&(t=l.pooledCache,t!=null&&(l.pooledCache=null,nn(t)))}function Ze(){return Kv(),Jv(),rv(),Wv()}function Wv(){if(al!==5)return!1;var l=Vt,t=bc;bc=0;var u=Gc(St),a=O.T,n=C.p;try{C.p=32>u?32:u,O.T=null,u=zc,zc=null;var e=Vt,f=St;if(al=0,Iu=Vt=null,St=0,(R&6)!==0)throw Error(b(331));var c=R;if(R|=4,Bv(e.current),Nv(e,e.current,f,u),R=c,cn(0,!1),Nl&&typeof Nl.onPostCommitFiberRoot=="function")try{Nl.onPostCommitFiberRoot(Pa,e)}catch{}return!0}finally{C.p=n,O.T=a,wv(l,t)}}function n1(l,t,u){t=jl(u,t),t=hc(l.stateNode,t,2),l=Zt(l,t,2),l!==null&&(tn(l,2),lt(l))}function X(l,t,u){if(l.tag===3)n1(l,l,u);else for(;t!==null;){if(t.tag===3){n1(t,l,u);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(jt===null||!jt.has(a))){l=jl(u,l),u=yv(2),a=Zt(t,u,2),a!==null&&(vv(u,a,t,l),tn(a,2),lt(a));break}}t=t.return}}function qf(l,t,u){var a=l.pingCache;if(a===null){a=l.pingCache=new Dh;var n=new Set;a.set(t,n)}else n=a.get(t),n===void 0&&(n=new Set,a.set(t,n));n.has(u)||(si=!0,n.add(u),l=qh.bind(null,l,t,u),t.then(l,l))}function qh(l,t,u){var a=l.pingCache;a!==null&&a.delete(t),l.pingedLanes|=l.suspendedLanes&u,l.warmLanes&=~u,V===l&&(p&u)===u&&(F===4||F===3&&(p&62914560)===p&&300>Hl()-Ge?(R&2)===0&&Pu(l,0):bi|=u,ku===p&&(ku=0)),lt(l)}function $v(l,t){t===0&&(t=j1()),l=gu(l,t),l!==null&&(tn(l,t),lt(l))}function Bh(l){var t=l.memoizedState,u=0;t!==null&&(u=t.retryLane),$v(l,u)}function Yh(l,t){var u=0;switch(l.tag){case 31:case 13:var a=l.stateNode,n=l.memoizedState;n!==null&&(u=n.retryLane);break;case 19:a=l.stateNode;break;case 22:a=l.stateNode._retryCache;break;default:throw Error(b(314))}a!==null&&a.delete(t),$v(l,u)}function Rh(l,t){return Rc(l,t)}var oe=null,Mu=null,Tc=!1,se=!1,Bf=!1,Ct=0;function lt(l){l!==Mu&&l.next===null&&(Mu===null?oe=Mu=l:Mu=Mu.next=l),se=!0,Tc||(Tc=!0,Gh())}function cn(l,t){if(!Bf&&se){Bf=!0;do for(var u=!1,a=oe;a!==null;){if(!t)if(l!==0){var n=a.pendingLanes;if(n===0)var e=0;else{var f=a.suspendedLanes,c=a.pingedLanes;e=(1<<31-pl(42|l)+1)-1,e&=n&~(f&~c),e=e&201326741?e&201326741|1:e?e|2:0}e!==0&&(u=!0,e1(a,e))}else e=p,e=Me(a,a===V?e:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(e&3)===0||ln(a,e)||(u=!0,e1(a,e));a=a.next}while(u);Bf=!1}}function Ch(){Fv()}function Fv(){se=Tc=!1;var l=0;Ct!==0&&Kh()&&(l=Ct);for(var t=Hl(),u=null,a=oe;a!==null;){var n=a.next,e=kv(a,t);e===0?(a.next=null,u===null?oe=n:u.next=n,n===null&&(Mu=u)):(u=a,(l!==0||(e&3)!==0)&&(se=!0)),a=n}al!==0&&al!==5||cn(l,!1),Ct!==0&&(Ct=0)}function kv(l,t){for(var u=l.suspendedLanes,a=l.pingedLanes,n=l.expirationTimes,e=l.pendingLanes&-62914561;0<e;){var f=31-pl(e),c=1<<f,i=n[f];i===-1?((c&u)===0||(c&a)!==0)&&(n[f]=id(c,t)):i<=t&&(l.expiredLanes|=c),e&=~c}if(t=V,u=p,u=Me(l,l===t?u:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),a=l.callbackNode,u===0||l===t&&(G===2||G===9)||l.cancelPendingCommit!==null)return a!==null&&a!==null&&ff(a),l.callbackNode=null,l.callbackPriority=0;if((u&3)===0||ln(l,u)){if(t=u&-u,t===l.callbackPriority)return t;switch(a!==null&&ff(a),Gc(u)){case 2:case 8:u=Q1;break;case 32:u=Pn;break;case 268435456:u=Z1;break;default:u=Pn}return a=Iv.bind(null,l),u=Rc(u,a),l.callbackPriority=t,l.callbackNode=u,t}return a!==null&&a!==null&&ff(a),l.callbackPriority=2,l.callbackNode=null,2}function Iv(l,t){if(al!==0&&al!==5)return l.callbackNode=null,l.callbackPriority=0,null;var u=l.callbackNode;if(Ze()&&l.callbackNode!==u)return null;var a=p;return a=Me(l,l===V?a:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),a===0?null:(Xv(l,a,t),kv(l,Hl()),l.callbackNode!=null&&l.callbackNode===u?Iv.bind(null,l):null)}function e1(l,t){if(Ze())return null;Xv(l,t,!0)}function Gh(){rh(function(){(R&6)!==0?Rc(X1,Ch):Fv()})}function Ei(){if(Ct===0){var l=Wu;l===0&&(l=bn,bn<<=1,(bn&261888)===0&&(bn=256)),Ct=l}return Ct}function f1(l){return l==null||typeof l=="symbol"||typeof l=="boolean"?null:typeof l=="function"?l:Gn(""+l)}function c1(l,t){var u=t.ownerDocument.createElement("input");return u.name=t.name,u.value=t.value,l.id&&u.setAttribute("form",l.id),t.parentNode.insertBefore(u,t),l=new FormData(l),u.parentNode.removeChild(u),l}function Xh(l,t,u,a,n){if(t==="submit"&&u&&u.stateNode===n){var e=f1((n[Al]||null).action),f=a.submitter;f&&(t=(t=f[Al]||null)?f1(t.formAction):f.getAttribute("formAction"),t!==null&&(e=t,f=null));var c=new De("action","action",null,a,n);l.push({event:c,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Ct!==0){var i=f?c1(n,f):new FormData(n);mc(u,{pending:!0,data:i,method:n.method,action:e},null,i)}}else typeof e=="function"&&(c.preventDefault(),i=f?c1(n,f):new FormData(n),mc(u,{pending:!0,data:i,method:n.method,action:e},e,i))},currentTarget:n}]})}}for(pn=0;pn<Pf.length;pn++)qn=Pf[pn],i1=qn.toLowerCase(),y1=qn[0].toUpperCase()+qn.slice(1),wl(i1,"on"+y1);var qn,i1,y1,pn;wl(vy,"onAnimationEnd");wl(my,"onAnimationIteration");wl(dy,"onAnimationStart");wl("dblclick","onDoubleClick");wl("focusin","onFocus");wl("focusout","onBlur");wl(th,"onTransitionRun");wl(uh,"onTransitionStart");wl(ah,"onTransitionCancel");wl(hy,"onTransitionEnd");ru("onMouseEnter",["mouseout","mouseover"]);ru("onMouseLeave",["mouseout","mouseover"]);ru("onPointerEnter",["pointerout","pointerover"]);ru("onPointerLeave",["pointerout","pointerover"]);du("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));du("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));du("onBeforeInput",["compositionend","keypress","textInput","paste"]);du("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));du("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));du("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(wa));function Pv(l,t){t=(t&4)!==0;for(var u=0;u<l.length;u++){var a=l[u],n=a.event;a=a.listeners;l:{var e=void 0;if(t)for(var f=a.length-1;0<=f;f--){var c=a[f],i=c.instance,m=c.currentTarget;if(c=c.listener,i!==e&&n.isPropagationStopped())break l;e=c,n.currentTarget=m;try{e(n)}catch(g){te(g)}n.currentTarget=null,e=i}else for(f=0;f<a.length;f++){if(c=a[f],i=c.instance,m=c.currentTarget,c=c.listener,i!==e&&n.isPropagationStopped())break l;e=c,n.currentTarget=m;try{e(n)}catch(g){te(g)}n.currentTarget=null,e=i}}}}function U(l,t){var u=t[Jf];u===void 0&&(u=t[Jf]=new Set);var a=l+"__bubble";u.has(a)||(lm(t,l,2,!1),u.add(a))}function Yf(l,t,u){var a=0;t&&(a|=4),lm(u,l,a,t)}var Bn="_reactListening"+Math.random().toString(36).slice(2);function Ti(l){if(!l[Bn]){l[Bn]=!0,J1.forEach(function(u){u!=="selectionchange"&&(Qh.has(u)||Yf(u,!1,l),Yf(u,!0,l))});var t=l.nodeType===9?l:l.ownerDocument;t===null||t[Bn]||(t[Bn]=!0,Yf("selectionchange",!1,t))}}function lm(l,t,u,a){switch(hm(t)){case 2:var n=d2;break;case 8:n=h2;break;default:n=Mi}u=n.bind(null,t,u,l),n=void 0,!Ff||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),a?n!==void 0?l.addEventListener(t,u,{capture:!0,passive:n}):l.addEventListener(t,u,!0):n!==void 0?l.addEventListener(t,u,{passive:n}):l.addEventListener(t,u,!1)}function Rf(l,t,u,a,n){var e=a;if((t&1)===0&&(t&2)===0&&a!==null)l:for(;;){if(a===null)return;var f=a.tag;if(f===3||f===4){var c=a.stateNode.containerInfo;if(c===n)break;if(f===4)for(f=a.return;f!==null;){var i=f.tag;if((i===3||i===4)&&f.stateNode.containerInfo===n)return;f=f.return}for(;c!==null;){if(f=Hu(c),f===null)return;if(i=f.tag,i===5||i===6||i===26||i===27){a=e=f;continue l}c=c.parentNode}}a=a.return}P1(function(){var m=e,g=Zc(u),s=[];l:{var h=Sy.get(l);if(h!==void 0){var S=De,z=l;switch(l){case"keypress":if(Qn(u)===0)break l;case"keydown":case"keyup":S=Yd;break;case"focusin":z="focus",S=df;break;case"focusout":z="blur",S=df;break;case"beforeblur":case"afterblur":S=df;break;case"click":if(u.button===2)break l;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=o0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=Td;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=Gd;break;case vy:case my:case dy:S=_d;break;case hy:S=Qd;break;case"scroll":case"scrollend":S=zd;break;case"wheel":S=jd;break;case"copy":case"cut":case"paste":S=Dd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=b0;break;case"toggle":case"beforetoggle":S=xd}var A=(t&4)!==0,Q=!A&&(l==="scroll"||l==="scrollend"),v=A?h!==null?h+"Capture":null:h;A=[];for(var y=m,d;y!==null;){var o=y;if(d=o.stateNode,o=o.tag,o!==5&&o!==26&&o!==27||d===null||v===null||(o=Za(y,v),o!=null&&A.push(Wa(y,o,d))),Q)break;y=y.return}0<A.length&&(h=new S(h,z,null,u,g),s.push({event:h,listeners:A}))}}if((t&7)===0){l:{if(h=l==="mouseover"||l==="pointerover",S=l==="mouseout"||l==="pointerout",h&&u!==$f&&(z=u.relatedTarget||u.fromElement)&&(Hu(z)||z[ua]))break l;if((S||h)&&(h=g.window===g?g:(h=g.ownerDocument)?h.defaultView||h.parentWindow:window,S?(z=u.relatedTarget||u.toElement,S=m,z=z?Hu(z):null,z!==null&&(Q=Ia(z),A=z.tag,z!==Q||A!==5&&A!==27&&A!==6)&&(z=null)):(S=null,z=m),S!==z)){if(A=o0,o="onMouseLeave",v="onMouseEnter",y="mouse",(l==="pointerout"||l==="pointerover")&&(A=b0,o="onPointerLeave",v="onPointerEnter",y="pointer"),Q=S==null?h:Aa(S),d=z==null?h:Aa(z),h=new A(o,y+"leave",S,u,g),h.target=Q,h.relatedTarget=d,o=null,Hu(g)===m&&(A=new A(v,y+"enter",z,u,g),A.target=d,A.relatedTarget=Q,o=A),Q=o,S&&z)t:{for(A=Zh,v=S,y=z,d=0,o=v;o;o=A(o))d++;o=0;for(var T=y;T;T=A(T))o++;for(;0<d-o;)v=A(v),d--;for(;0<o-d;)y=A(y),o--;for(;d--;){if(v===y||y!==null&&v===y.alternate){A=v;break t}v=A(v),y=A(y)}A=null}else A=null;S!==null&&v1(s,h,S,A,!1),z!==null&&Q!==null&&v1(s,Q,z,A,!0)}}l:{if(h=m?Aa(m):window,S=h.nodeName&&h.nodeName.toLowerCase(),S==="select"||S==="input"&&h.type==="file")var B=A0;else if(T0(h))if(ey)B=Id;else{B=Fd;var E=$d}else S=h.nodeName,!S||S.toLowerCase()!=="input"||h.type!=="checkbox"&&h.type!=="radio"?m&&Qc(m.elementType)&&(B=A0):B=kd;if(B&&(B=B(l,m))){ny(s,B,u,g);break l}E&&E(l,h,m),l==="focusout"&&m&&h.type==="number"&&m.memoizedProps.value!=null&&Wf(h,"number",h.value)}switch(E=m?Aa(m):window,l){case"focusin":(T0(E)||E.contentEditable==="true")&&(qu=E,kf=m,Ua=null);break;case"focusout":Ua=kf=qu=null;break;case"mousedown":If=!0;break;case"contextmenu":case"mouseup":case"dragend":If=!1,D0(s,u,g);break;case"selectionchange":if(lh)break;case"keydown":case"keyup":D0(s,u,g)}var D;if(xc)l:{switch(l){case"compositionstart":var N="onCompositionStart";break l;case"compositionend":N="onCompositionEnd";break l;case"compositionupdate":N="onCompositionUpdate";break l}N=void 0}else pu?uy(l,u)&&(N="onCompositionEnd"):l==="keydown"&&u.keyCode===229&&(N="onCompositionStart");N&&(ty&&u.locale!=="ko"&&(pu||N!=="onCompositionStart"?N==="onCompositionEnd"&&pu&&(D=ly()):(Bt=g,jc="value"in Bt?Bt.value:Bt.textContent,pu=!0)),E=be(m,N),0<E.length&&(N=new s0(N,l,null,u,g),s.push({event:N,listeners:E}),D?N.data=D:(D=ay(u),D!==null&&(N.data=D)))),(D=Kd?Jd(l,u):rd(l,u))&&(N=be(m,"onBeforeInput"),0<N.length&&(E=new s0("onBeforeInput","beforeinput",null,u,g),s.push({event:E,listeners:N}),E.data=D)),Xh(s,l,m,u,g)}Pv(s,t)})}function Wa(l,t,u){return{instance:l,listener:t,currentTarget:u}}function be(l,t){for(var u=t+"Capture",a=[];l!==null;){var n=l,e=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||e===null||(n=Za(l,u),n!=null&&a.unshift(Wa(l,n,e)),n=Za(l,t),n!=null&&a.push(Wa(l,n,e))),l.tag===3)return a;l=l.return}return[]}function Zh(l){if(l===null)return null;do l=l.return;while(l&&l.tag!==5&&l.tag!==27);return l||null}function v1(l,t,u,a,n){for(var e=t._reactName,f=[];u!==null&&u!==a;){var c=u,i=c.alternate,m=c.stateNode;if(c=c.tag,i!==null&&i===a)break;c!==5&&c!==26&&c!==27||m===null||(i=m,n?(m=Za(u,e),m!=null&&f.unshift(Wa(u,m,i))):n||(m=Za(u,e),m!=null&&f.push(Wa(u,m,i)))),u=u.return}f.length!==0&&l.push({event:t,listeners:f})}var jh=/\r\n?/g,Vh=/\u0000|\uFFFD/g;function m1(l){return(typeof l=="string"?l:""+l).replace(jh,`
`).replace(Vh,"")}function tm(l,t){return t=m1(t),m1(l)===t}function Z(l,t,u,a,n,e){switch(u){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||wu(l,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&wu(l,""+a);break;case"className":Tn(l,"class",a);break;case"tabIndex":Tn(l,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Tn(l,u,a);break;case"style":I1(l,a,e);break;case"data":if(t!=="object"){Tn(l,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||u!=="href")){l.removeAttribute(u);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){l.removeAttribute(u);break}a=Gn(""+a),l.setAttribute(u,a);break;case"action":case"formAction":if(typeof a=="function"){l.setAttribute(u,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof e=="function"&&(u==="formAction"?(t!=="input"&&Z(l,t,"name",n.name,n,null),Z(l,t,"formEncType",n.formEncType,n,null),Z(l,t,"formMethod",n.formMethod,n,null),Z(l,t,"formTarget",n.formTarget,n,null)):(Z(l,t,"encType",n.encType,n,null),Z(l,t,"method",n.method,n,null),Z(l,t,"target",n.target,n,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){l.removeAttribute(u);break}a=Gn(""+a),l.setAttribute(u,a);break;case"onClick":a!=null&&(l.onclick=vt);break;case"onScroll":a!=null&&U("scroll",l);break;case"onScrollEnd":a!=null&&U("scrollend",l);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(b(61));if(u=a.__html,u!=null){if(n.children!=null)throw Error(b(60));l.innerHTML=u}}break;case"multiple":l.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":l.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){l.removeAttribute("xlink:href");break}u=Gn(""+a),l.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",u);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?l.setAttribute(u,""+a):l.removeAttribute(u);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?l.setAttribute(u,""):l.removeAttribute(u);break;case"capture":case"download":a===!0?l.setAttribute(u,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?l.setAttribute(u,a):l.removeAttribute(u);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?l.setAttribute(u,a):l.removeAttribute(u);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?l.removeAttribute(u):l.setAttribute(u,a);break;case"popover":U("beforetoggle",l),U("toggle",l),Cn(l,"popover",a);break;case"xlinkActuate":ut(l,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":ut(l,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":ut(l,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":ut(l,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":ut(l,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":ut(l,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":ut(l,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":ut(l,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":ut(l,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Cn(l,"is",a);break;case"innerText":case"textContent":break;default:(!(2<u.length)||u[0]!=="o"&&u[0]!=="O"||u[1]!=="n"&&u[1]!=="N")&&(u=sd.get(u)||u,Cn(l,u,a))}}function Ac(l,t,u,a,n,e){switch(u){case"style":I1(l,a,e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(b(61));if(u=a.__html,u!=null){if(n.children!=null)throw Error(b(60));l.innerHTML=u}}break;case"children":typeof a=="string"?wu(l,a):(typeof a=="number"||typeof a=="bigint")&&wu(l,""+a);break;case"onScroll":a!=null&&U("scroll",l);break;case"onScrollEnd":a!=null&&U("scrollend",l);break;case"onClick":a!=null&&(l.onclick=vt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!r1.hasOwnProperty(u))l:{if(u[0]==="o"&&u[1]==="n"&&(n=u.endsWith("Capture"),t=u.slice(2,n?u.length-7:void 0),e=l[Al]||null,e=e!=null?e[u]:null,typeof e=="function"&&l.removeEventListener(t,e,n),typeof a=="function")){typeof e!="function"&&e!==null&&(u in l?l[u]=null:l.hasAttribute(u)&&l.removeAttribute(u)),l.addEventListener(t,a,n);break l}u in l?l[u]=a:a===!0?l.setAttribute(u,""):Cn(l,u,a)}}}function dl(l,t,u){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":U("error",l),U("load",l);var a=!1,n=!1,e;for(e in u)if(u.hasOwnProperty(e)){var f=u[e];if(f!=null)switch(e){case"src":a=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(b(137,t));default:Z(l,t,e,f,u,null)}}n&&Z(l,t,"srcSet",u.srcSet,u,null),a&&Z(l,t,"src",u.src,u,null);return;case"input":U("invalid",l);var c=e=f=n=null,i=null,m=null;for(a in u)if(u.hasOwnProperty(a)){var g=u[a];if(g!=null)switch(a){case"name":n=g;break;case"type":f=g;break;case"checked":i=g;break;case"defaultChecked":m=g;break;case"value":e=g;break;case"defaultValue":c=g;break;case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(b(137,t));break;default:Z(l,t,a,g,u,null)}}$1(l,e,c,i,m,f,n,!1);return;case"select":U("invalid",l),a=f=e=null;for(n in u)if(u.hasOwnProperty(n)&&(c=u[n],c!=null))switch(n){case"value":e=c;break;case"defaultValue":f=c;break;case"multiple":a=c;default:Z(l,t,n,c,u,null)}t=e,u=f,l.multiple=!!a,t!=null?Zu(l,!!a,t,!1):u!=null&&Zu(l,!!a,u,!0);return;case"textarea":U("invalid",l),e=n=a=null;for(f in u)if(u.hasOwnProperty(f)&&(c=u[f],c!=null))switch(f){case"value":a=c;break;case"defaultValue":n=c;break;case"children":e=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(b(91));break;default:Z(l,t,f,c,u,null)}k1(l,a,n,e);return;case"option":for(i in u)u.hasOwnProperty(i)&&(a=u[i],a!=null)&&(i==="selected"?l.selected=a&&typeof a!="function"&&typeof a!="symbol":Z(l,t,i,a,u,null));return;case"dialog":U("beforetoggle",l),U("toggle",l),U("cancel",l),U("close",l);break;case"iframe":case"object":U("load",l);break;case"video":case"audio":for(a=0;a<wa.length;a++)U(wa[a],l);break;case"image":U("error",l),U("load",l);break;case"details":U("toggle",l);break;case"embed":case"source":case"link":U("error",l),U("load",l);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(m in u)if(u.hasOwnProperty(m)&&(a=u[m],a!=null))switch(m){case"children":case"dangerouslySetInnerHTML":throw Error(b(137,t));default:Z(l,t,m,a,u,null)}return;default:if(Qc(t)){for(g in u)u.hasOwnProperty(g)&&(a=u[g],a!==void 0&&Ac(l,t,g,a,u,void 0));return}}for(c in u)u.hasOwnProperty(c)&&(a=u[c],a!=null&&Z(l,t,c,a,u,null))}function xh(l,t,u,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,e=null,f=null,c=null,i=null,m=null,g=null;for(S in u){var s=u[S];if(u.hasOwnProperty(S)&&s!=null)switch(S){case"checked":break;case"value":break;case"defaultValue":i=s;default:a.hasOwnProperty(S)||Z(l,t,S,null,a,s)}}for(var h in a){var S=a[h];if(s=u[h],a.hasOwnProperty(h)&&(S!=null||s!=null))switch(h){case"type":e=S;break;case"name":n=S;break;case"checked":m=S;break;case"defaultChecked":g=S;break;case"value":f=S;break;case"defaultValue":c=S;break;case"children":case"dangerouslySetInnerHTML":if(S!=null)throw Error(b(137,t));break;default:S!==s&&Z(l,t,h,S,a,s)}}wf(l,f,c,i,m,g,e,n);return;case"select":S=f=c=h=null;for(e in u)if(i=u[e],u.hasOwnProperty(e)&&i!=null)switch(e){case"value":break;case"multiple":S=i;default:a.hasOwnProperty(e)||Z(l,t,e,null,a,i)}for(n in a)if(e=a[n],i=u[n],a.hasOwnProperty(n)&&(e!=null||i!=null))switch(n){case"value":h=e;break;case"defaultValue":c=e;break;case"multiple":f=e;default:e!==i&&Z(l,t,n,e,a,i)}t=c,u=f,a=S,h!=null?Zu(l,!!u,h,!1):!!a!=!!u&&(t!=null?Zu(l,!!u,t,!0):Zu(l,!!u,u?[]:"",!1));return;case"textarea":S=h=null;for(c in u)if(n=u[c],u.hasOwnProperty(c)&&n!=null&&!a.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:Z(l,t,c,null,a,n)}for(f in a)if(n=a[f],e=u[f],a.hasOwnProperty(f)&&(n!=null||e!=null))switch(f){case"value":h=n;break;case"defaultValue":S=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(b(91));break;default:n!==e&&Z(l,t,f,n,a,e)}F1(l,h,S);return;case"option":for(var z in u)h=u[z],u.hasOwnProperty(z)&&h!=null&&!a.hasOwnProperty(z)&&(z==="selected"?l.selected=!1:Z(l,t,z,null,a,h));for(i in a)h=a[i],S=u[i],a.hasOwnProperty(i)&&h!==S&&(h!=null||S!=null)&&(i==="selected"?l.selected=h&&typeof h!="function"&&typeof h!="symbol":Z(l,t,i,h,a,S));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var A in u)h=u[A],u.hasOwnProperty(A)&&h!=null&&!a.hasOwnProperty(A)&&Z(l,t,A,null,a,h);for(m in a)if(h=a[m],S=u[m],a.hasOwnProperty(m)&&h!==S&&(h!=null||S!=null))switch(m){case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(b(137,t));break;default:Z(l,t,m,h,a,S)}return;default:if(Qc(t)){for(var Q in u)h=u[Q],u.hasOwnProperty(Q)&&h!==void 0&&!a.hasOwnProperty(Q)&&Ac(l,t,Q,void 0,a,h);for(g in a)h=a[g],S=u[g],!a.hasOwnProperty(g)||h===S||h===void 0&&S===void 0||Ac(l,t,g,h,a,S);return}}for(var v in u)h=u[v],u.hasOwnProperty(v)&&h!=null&&!a.hasOwnProperty(v)&&Z(l,t,v,null,a,h);for(s in a)h=a[s],S=u[s],!a.hasOwnProperty(s)||h===S||h==null&&S==null||Z(l,t,s,h,a,S)}function d1(l){switch(l){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Lh(){if(typeof performance.getEntriesByType=="function"){for(var l=0,t=0,u=performance.getEntriesByType("resource"),a=0;a<u.length;a++){var n=u[a],e=n.transferSize,f=n.initiatorType,c=n.duration;if(e&&c&&d1(f)){for(f=0,c=n.responseEnd,a+=1;a<u.length;a++){var i=u[a],m=i.startTime;if(m>c)break;var g=i.transferSize,s=i.initiatorType;g&&d1(s)&&(i=i.responseEnd,f+=g*(i<c?1:(c-m)/(i-m)))}if(--a,t+=8*(e+f)/(n.duration/1e3),l++,10<l)break}}if(0<l)return t/l/1e6}return navigator.connection&&(l=navigator.connection.downlink,typeof l=="number")?l:5}var Oc=null,_c=null;function ze(l){return l.nodeType===9?l:l.ownerDocument}function h1(l){switch(l){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function um(l,t){if(l===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return l===1&&t==="foreignObject"?0:l}function Mc(l,t){return l==="textarea"||l==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Cf=null;function Kh(){var l=window.event;return l&&l.type==="popstate"?l===Cf?!1:(Cf=l,!0):(Cf=null,!1)}var am=typeof setTimeout=="function"?setTimeout:void 0,Jh=typeof clearTimeout=="function"?clearTimeout:void 0,S1=typeof Promise=="function"?Promise:void 0,rh=typeof queueMicrotask=="function"?queueMicrotask:typeof S1<"u"?function(l){return S1.resolve(null).then(l).catch(wh)}:am;function wh(l){setTimeout(function(){throw l})}function Ft(l){return l==="head"}function g1(l,t){var u=t,a=0;do{var n=u.nextSibling;if(l.removeChild(u),n&&n.nodeType===8)if(u=n.data,u==="/$"||u==="/&"){if(a===0){l.removeChild(n),ta(t);return}a--}else if(u==="$"||u==="$?"||u==="$~"||u==="$!"||u==="&")a++;else if(u==="html")Xa(l.ownerDocument.documentElement);else if(u==="head"){u=l.ownerDocument.head,Xa(u);for(var e=u.firstChild;e;){var f=e.nextSibling,c=e.nodeName;e[un]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&e.rel.toLowerCase()==="stylesheet"||u.removeChild(e),e=f}}else u==="body"&&Xa(l.ownerDocument.body);u=n}while(u);ta(t)}function o1(l,t){var u=l;l=0;do{var a=u.nextSibling;if(u.nodeType===1?t?(u._stashedDisplay=u.style.display,u.style.display="none"):(u.style.display=u._stashedDisplay||"",u.getAttribute("style")===""&&u.removeAttribute("style")):u.nodeType===3&&(t?(u._stashedText=u.nodeValue,u.nodeValue=""):u.nodeValue=u._stashedText||""),a&&a.nodeType===8)if(u=a.data,u==="/$"){if(l===0)break;l--}else u!=="$"&&u!=="$?"&&u!=="$~"&&u!=="$!"||l++;u=a}while(u)}function Dc(l){var t=l.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var u=t;switch(t=t.nextSibling,u.nodeName){case"HTML":case"HEAD":case"BODY":Dc(u),Xc(u);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(u.rel.toLowerCase()==="stylesheet")continue}l.removeChild(u)}}function Wh(l,t,u,a){for(;l.nodeType===1;){var n=u;if(l.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(l.nodeName!=="INPUT"||l.type!=="hidden"))break}else if(a){if(!l[un])switch(t){case"meta":if(!l.hasAttribute("itemprop"))break;return l;case"link":if(e=l.getAttribute("rel"),e==="stylesheet"&&l.hasAttribute("data-precedence"))break;if(e!==n.rel||l.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||l.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||l.getAttribute("title")!==(n.title==null?null:n.title))break;return l;case"style":if(l.hasAttribute("data-precedence"))break;return l;case"script":if(e=l.getAttribute("src"),(e!==(n.src==null?null:n.src)||l.getAttribute("type")!==(n.type==null?null:n.type)||l.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&e&&l.hasAttribute("async")&&!l.hasAttribute("itemprop"))break;return l;default:return l}}else if(t==="input"&&l.type==="hidden"){var e=n.name==null?null:""+n.name;if(n.type==="hidden"&&l.getAttribute("name")===e)return l}else return l;if(l=Ll(l.nextSibling),l===null)break}return null}function $h(l,t,u){if(t==="")return null;for(;l.nodeType!==3;)if((l.nodeType!==1||l.nodeName!=="INPUT"||l.type!=="hidden")&&!u||(l=Ll(l.nextSibling),l===null))return null;return l}function nm(l,t){for(;l.nodeType!==8;)if((l.nodeType!==1||l.nodeName!=="INPUT"||l.type!=="hidden")&&!t||(l=Ll(l.nextSibling),l===null))return null;return l}function Uc(l){return l.data==="$?"||l.data==="$~"}function Hc(l){return l.data==="$!"||l.data==="$?"&&l.ownerDocument.readyState!=="loading"}function Fh(l,t){var u=l.ownerDocument;if(l.data==="$~")l._reactRetry=t;else if(l.data!=="$?"||u.readyState!=="loading")t();else{var a=function(){t(),u.removeEventListener("DOMContentLoaded",a)};u.addEventListener("DOMContentLoaded",a),l._reactRetry=a}}function Ll(l){for(;l!=null;l=l.nextSibling){var t=l.nodeType;if(t===1||t===3)break;if(t===8){if(t=l.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return l}var Nc=null;function s1(l){l=l.nextSibling;for(var t=0;l;){if(l.nodeType===8){var u=l.data;if(u==="/$"||u==="/&"){if(t===0)return Ll(l.nextSibling);t--}else u!=="$"&&u!=="$!"&&u!=="$?"&&u!=="$~"&&u!=="&"||t++}l=l.nextSibling}return null}function b1(l){l=l.previousSibling;for(var t=0;l;){if(l.nodeType===8){var u=l.data;if(u==="$"||u==="$!"||u==="$?"||u==="$~"||u==="&"){if(t===0)return l;t--}else u!=="/$"&&u!=="/&"||t++}l=l.previousSibling}return null}function em(l,t,u){switch(t=ze(u),l){case"html":if(l=t.documentElement,!l)throw Error(b(452));return l;case"head":if(l=t.head,!l)throw Error(b(453));return l;case"body":if(l=t.body,!l)throw Error(b(454));return l;default:throw Error(b(451))}}function Xa(l){for(var t=l.attributes;t.length;)l.removeAttributeNode(t[0]);Xc(l)}var Kl=new Map,z1=new Set;function Ee(l){return typeof l.getRootNode=="function"?l.getRootNode():l.nodeType===9?l:l.ownerDocument}var Et=C.d;C.d={f:kh,r:Ih,D:Ph,C:l2,L:t2,m:u2,X:n2,S:a2,M:e2};function kh(){var l=Et.f(),t=Xe();return l||t}function Ih(l){var t=aa(l);t!==null&&t.tag===5&&t.type==="form"?Iy(t):Et.r(l)}var ca=typeof document>"u"?null:document;function fm(l,t,u){var a=ca;if(a&&typeof t=="string"&&t){var n=Zl(t);n='link[rel="'+l+'"][href="'+n+'"]',typeof u=="string"&&(n+='[crossorigin="'+u+'"]'),z1.has(n)||(z1.add(n),l={rel:l,crossOrigin:u,href:t},a.querySelector(n)===null&&(t=a.createElement("link"),dl(t,"link",l),fl(t),a.head.appendChild(t)))}}function Ph(l){Et.D(l),fm("dns-prefetch",l,null)}function l2(l,t){Et.C(l,t),fm("preconnect",l,t)}function t2(l,t,u){Et.L(l,t,u);var a=ca;if(a&&l&&t){var n='link[rel="preload"][as="'+Zl(t)+'"]';t==="image"&&u&&u.imageSrcSet?(n+='[imagesrcset="'+Zl(u.imageSrcSet)+'"]',typeof u.imageSizes=="string"&&(n+='[imagesizes="'+Zl(u.imageSizes)+'"]')):n+='[href="'+Zl(l)+'"]';var e=n;switch(t){case"style":e=la(l);break;case"script":e=ia(l)}Kl.has(e)||(l=r({rel:"preload",href:t==="image"&&u&&u.imageSrcSet?void 0:l,as:t},u),Kl.set(e,l),a.querySelector(n)!==null||t==="style"&&a.querySelector(yn(e))||t==="script"&&a.querySelector(vn(e))||(t=a.createElement("link"),dl(t,"link",l),fl(t),a.head.appendChild(t)))}}function u2(l,t){Et.m(l,t);var u=ca;if(u&&l){var a=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+Zl(a)+'"][href="'+Zl(l)+'"]',e=n;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":e=ia(l)}if(!Kl.has(e)&&(l=r({rel:"modulepreload",href:l},t),Kl.set(e,l),u.querySelector(n)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(u.querySelector(vn(e)))return}a=u.createElement("link"),dl(a,"link",l),fl(a),u.head.appendChild(a)}}}function a2(l,t,u){Et.S(l,t,u);var a=ca;if(a&&l){var n=Qu(a).hoistableStyles,e=la(l);t=t||"default";var f=n.get(e);if(!f){var c={loading:0,preload:null};if(f=a.querySelector(yn(e)))c.loading=5;else{l=r({rel:"stylesheet",href:l,"data-precedence":t},u),(u=Kl.get(e))&&Ai(l,u);var i=f=a.createElement("link");fl(i),dl(i,"link",l),i._p=new Promise(function(m,g){i.onload=m,i.onerror=g}),i.addEventListener("load",function(){c.loading|=1}),i.addEventListener("error",function(){c.loading|=2}),c.loading|=4,rn(f,t,a)}f={type:"stylesheet",instance:f,count:1,state:c},n.set(e,f)}}}function n2(l,t){Et.X(l,t);var u=ca;if(u&&l){var a=Qu(u).hoistableScripts,n=ia(l),e=a.get(n);e||(e=u.querySelector(vn(n)),e||(l=r({src:l,async:!0},t),(t=Kl.get(n))&&Oi(l,t),e=u.createElement("script"),fl(e),dl(e,"link",l),u.head.appendChild(e)),e={type:"script",instance:e,count:1,state:null},a.set(n,e))}}function e2(l,t){Et.M(l,t);var u=ca;if(u&&l){var a=Qu(u).hoistableScripts,n=ia(l),e=a.get(n);e||(e=u.querySelector(vn(n)),e||(l=r({src:l,async:!0,type:"module"},t),(t=Kl.get(n))&&Oi(l,t),e=u.createElement("script"),fl(e),dl(e,"link",l),u.head.appendChild(e)),e={type:"script",instance:e,count:1,state:null},a.set(n,e))}}function E1(l,t,u,a){var n=(n=Gt.current)?Ee(n):null;if(!n)throw Error(b(446));switch(l){case"meta":case"title":return null;case"style":return typeof u.precedence=="string"&&typeof u.href=="string"?(t=la(u.href),u=Qu(n).hoistableStyles,a=u.get(t),a||(a={type:"style",instance:null,count:0,state:null},u.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(u.rel==="stylesheet"&&typeof u.href=="string"&&typeof u.precedence=="string"){l=la(u.href);var e=Qu(n).hoistableStyles,f=e.get(l);if(f||(n=n.ownerDocument||n,f={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},e.set(l,f),(e=n.querySelector(yn(l)))&&!e._p&&(f.instance=e,f.state.loading=5),Kl.has(l)||(u={rel:"preload",as:"style",href:u.href,crossOrigin:u.crossOrigin,integrity:u.integrity,media:u.media,hrefLang:u.hrefLang,referrerPolicy:u.referrerPolicy},Kl.set(l,u),e||f2(n,l,u,f.state))),t&&a===null)throw Error(b(528,""));return f}if(t&&a!==null)throw Error(b(529,""));return null;case"script":return t=u.async,u=u.src,typeof u=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=ia(u),u=Qu(n).hoistableScripts,a=u.get(t),a||(a={type:"script",instance:null,count:0,state:null},u.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(b(444,l))}}function la(l){return'href="'+Zl(l)+'"'}function yn(l){return'link[rel="stylesheet"]['+l+"]"}function cm(l){return r({},l,{"data-precedence":l.precedence,precedence:null})}function f2(l,t,u,a){l.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=l.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),dl(t,"link",u),fl(t),l.head.appendChild(t))}function ia(l){return'[src="'+Zl(l)+'"]'}function vn(l){return"script[async]"+l}function T1(l,t,u){if(t.count++,t.instance===null)switch(t.type){case"style":var a=l.querySelector('style[data-href~="'+Zl(u.href)+'"]');if(a)return t.instance=a,fl(a),a;var n=r({},u,{"data-href":u.href,"data-precedence":u.precedence,href:null,precedence:null});return a=(l.ownerDocument||l).createElement("style"),fl(a),dl(a,"style",n),rn(a,u.precedence,l),t.instance=a;case"stylesheet":n=la(u.href);var e=l.querySelector(yn(n));if(e)return t.state.loading|=4,t.instance=e,fl(e),e;a=cm(u),(n=Kl.get(n))&&Ai(a,n),e=(l.ownerDocument||l).createElement("link"),fl(e);var f=e;return f._p=new Promise(function(c,i){f.onload=c,f.onerror=i}),dl(e,"link",a),t.state.loading|=4,rn(e,u.precedence,l),t.instance=e;case"script":return e=ia(u.src),(n=l.querySelector(vn(e)))?(t.instance=n,fl(n),n):(a=u,(n=Kl.get(e))&&(a=r({},u),Oi(a,n)),l=l.ownerDocument||l,n=l.createElement("script"),fl(n),dl(n,"link",a),l.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(b(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,rn(a,u.precedence,l));return t.instance}function rn(l,t,u){for(var a=u.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=a.length?a[a.length-1]:null,e=n,f=0;f<a.length;f++){var c=a[f];if(c.dataset.precedence===t)e=c;else if(e!==n)break}e?e.parentNode.insertBefore(l,e.nextSibling):(t=u.nodeType===9?u.head:u,t.insertBefore(l,t.firstChild))}function Ai(l,t){l.crossOrigin==null&&(l.crossOrigin=t.crossOrigin),l.referrerPolicy==null&&(l.referrerPolicy=t.referrerPolicy),l.title==null&&(l.title=t.title)}function Oi(l,t){l.crossOrigin==null&&(l.crossOrigin=t.crossOrigin),l.referrerPolicy==null&&(l.referrerPolicy=t.referrerPolicy),l.integrity==null&&(l.integrity=t.integrity)}var wn=null;function A1(l,t,u){if(wn===null){var a=new Map,n=wn=new Map;n.set(u,a)}else n=wn,a=n.get(u),a||(a=new Map,n.set(u,a));if(a.has(l))return a;for(a.set(l,null),u=u.getElementsByTagName(l),n=0;n<u.length;n++){var e=u[n];if(!(e[un]||e[yl]||l==="link"&&e.getAttribute("rel")==="stylesheet")&&e.namespaceURI!=="http://www.w3.org/2000/svg"){var f=e.getAttribute(t)||"";f=l+f;var c=a.get(f);c?c.push(e):a.set(f,[e])}}return a}function O1(l,t,u){l=l.ownerDocument||l,l.head.insertBefore(u,t==="title"?l.querySelector("head > title"):null)}function c2(l,t,u){if(u===1||t.itemProp!=null)return!1;switch(l){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(l=t.disabled,typeof t.precedence=="string"&&l==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function im(l){return!(l.type==="stylesheet"&&(l.state.loading&3)===0)}function i2(l,t,u,a){if(u.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(u.state.loading&4)===0){if(u.instance===null){var n=la(a.href),e=t.querySelector(yn(n));if(e){t=e._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(l.count++,l=Te.bind(l),t.then(l,l)),u.state.loading|=4,u.instance=e,fl(e);return}e=t.ownerDocument||t,a=cm(a),(n=Kl.get(n))&&Ai(a,n),e=e.createElement("link"),fl(e);var f=e;f._p=new Promise(function(c,i){f.onload=c,f.onerror=i}),dl(e,"link",a),u.instance=e}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(u,t),(t=u.state.preload)&&(u.state.loading&3)===0&&(l.count++,u=Te.bind(l),t.addEventListener("load",u),t.addEventListener("error",u))}}var Gf=0;function y2(l,t){return l.stylesheets&&l.count===0&&Wn(l,l.stylesheets),0<l.count||0<l.imgCount?function(u){var a=setTimeout(function(){if(l.stylesheets&&Wn(l,l.stylesheets),l.unsuspend){var e=l.unsuspend;l.unsuspend=null,e()}},6e4+t);0<l.imgBytes&&Gf===0&&(Gf=62500*Lh());var n=setTimeout(function(){if(l.waitingForImages=!1,l.count===0&&(l.stylesheets&&Wn(l,l.stylesheets),l.unsuspend)){var e=l.unsuspend;l.unsuspend=null,e()}},(l.imgBytes>Gf?50:800)+t);return l.unsuspend=u,function(){l.unsuspend=null,clearTimeout(a),clearTimeout(n)}}:null}function Te(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Wn(this,this.stylesheets);else if(this.unsuspend){var l=this.unsuspend;this.unsuspend=null,l()}}}var Ae=null;function Wn(l,t){l.stylesheets=null,l.unsuspend!==null&&(l.count++,Ae=new Map,t.forEach(v2,l),Ae=null,Te.call(l))}function v2(l,t){if(!(t.state.loading&4)){var u=Ae.get(l);if(u)var a=u.get(null);else{u=new Map,Ae.set(l,u);for(var n=l.querySelectorAll("link[data-precedence],style[data-precedence]"),e=0;e<n.length;e++){var f=n[e];(f.nodeName==="LINK"||f.getAttribute("media")!=="not all")&&(u.set(f.dataset.precedence,f),a=f)}a&&u.set(null,a)}n=t.instance,f=n.getAttribute("data-precedence"),e=u.get(f)||a,e===a&&u.set(null,n),u.set(f,n),this.count++,a=Te.bind(this),n.addEventListener("load",a),n.addEventListener("error",a),e?e.parentNode.insertBefore(n,e.nextSibling):(l=l.nodeType===9?l.head:l,l.insertBefore(n,l.firstChild)),t.state.loading|=4}}var $a={$$typeof:yt,Provider:null,Consumer:null,_currentValue:uu,_currentValue2:uu,_threadCount:0};function m2(l,t,u,a,n,e,f,c,i){this.tag=1,this.containerInfo=l,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=cf(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cf(0),this.hiddenUpdates=cf(null),this.identifierPrefix=a,this.onUncaughtError=n,this.onCaughtError=e,this.onRecoverableError=f,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=i,this.incompleteTransitions=new Map}function ym(l,t,u,a,n,e,f,c,i,m,g,s){return l=new m2(l,t,u,f,i,m,g,s,c),t=1,e===!0&&(t|=24),e=Dl(3,null,null,t),l.current=e,e.stateNode=l,t=$c(),t.refCount++,l.pooledCache=t,t.refCount++,e.memoizedState={element:a,isDehydrated:u,cache:t},Ic(e),l}function vm(l){return l?(l=Ru,l):Ru}function mm(l,t,u,a,n,e){n=vm(n),a.context===null?a.context=n:a.pendingContext=n,a=Qt(t),a.payload={element:u},e=e===void 0?null:e,e!==null&&(a.callback=e),u=Zt(l,a,t),u!==null&&(Tl(u,l,t),Na(u,l,t))}function _1(l,t){if(l=l.memoizedState,l!==null&&l.dehydrated!==null){var u=l.retryLane;l.retryLane=u!==0&&u<t?u:t}}function _i(l,t){_1(l,t),(l=l.alternate)&&_1(l,t)}function dm(l){if(l.tag===13||l.tag===31){var t=gu(l,67108864);t!==null&&Tl(t,l,67108864),_i(l,67108864)}}function M1(l){if(l.tag===13||l.tag===31){var t=ql();t=Cc(t);var u=gu(l,t);u!==null&&Tl(u,l,t),_i(l,t)}}var Oe=!0;function d2(l,t,u,a){var n=O.T;O.T=null;var e=C.p;try{C.p=2,Mi(l,t,u,a)}finally{C.p=e,O.T=n}}function h2(l,t,u,a){var n=O.T;O.T=null;var e=C.p;try{C.p=8,Mi(l,t,u,a)}finally{C.p=e,O.T=n}}function Mi(l,t,u,a){if(Oe){var n=pc(a);if(n===null)Rf(l,t,a,_e,u),D1(l,a);else if(g2(n,l,t,u,a))a.stopPropagation();else if(D1(l,a),t&4&&-1<S2.indexOf(l)){for(;n!==null;){var e=aa(n);if(e!==null)switch(e.tag){case 3:if(e=e.stateNode,e.current.memoizedState.isDehydrated){var f=Pt(e.pendingLanes);if(f!==0){var c=e;for(c.pendingLanes|=2,c.entangledLanes|=2;f;){var i=1<<31-pl(f);c.entanglements[1]|=i,f&=~i}lt(e),(R&6)===0&&(he=Hl()+500,cn(0,!1))}}break;case 31:case 13:c=gu(e,2),c!==null&&Tl(c,e,2),Xe(),_i(e,2)}if(e=pc(a),e===null&&Rf(l,t,a,_e,u),e===n)break;n=e}n!==null&&a.stopPropagation()}else Rf(l,t,a,null,u)}}function pc(l){return l=Zc(l),Di(l)}var _e=null;function Di(l){if(_e=null,l=Hu(l),l!==null){var t=Ia(l);if(t===null)l=null;else{var u=t.tag;if(u===13){if(l=B1(t),l!==null)return l;l=null}else if(u===31){if(l=Y1(t),l!==null)return l;l=null}else if(u===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;l=null}else t!==l&&(l=null)}}return _e=l,null}function hm(l){switch(l){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(td()){case X1:return 2;case Q1:return 8;case Pn:case ud:return 32;case Z1:return 268435456;default:return 32}default:return 32}}var qc=!1,xt=null,Lt=null,Kt=null,Fa=new Map,ka=new Map,pt=[],S2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function D1(l,t){switch(l){case"focusin":case"focusout":xt=null;break;case"dragenter":case"dragleave":Lt=null;break;case"mouseover":case"mouseout":Kt=null;break;case"pointerover":case"pointerout":Fa.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ka.delete(t.pointerId)}}function ba(l,t,u,a,n,e){return l===null||l.nativeEvent!==e?(l={blockedOn:t,domEventName:u,eventSystemFlags:a,nativeEvent:e,targetContainers:[n]},t!==null&&(t=aa(t),t!==null&&dm(t)),l):(l.eventSystemFlags|=a,t=l.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),l)}function g2(l,t,u,a,n){switch(t){case"focusin":return xt=ba(xt,l,t,u,a,n),!0;case"dragenter":return Lt=ba(Lt,l,t,u,a,n),!0;case"mouseover":return Kt=ba(Kt,l,t,u,a,n),!0;case"pointerover":var e=n.pointerId;return Fa.set(e,ba(Fa.get(e)||null,l,t,u,a,n)),!0;case"gotpointercapture":return e=n.pointerId,ka.set(e,ba(ka.get(e)||null,l,t,u,a,n)),!0}return!1}function Sm(l){var t=Hu(l.target);if(t!==null){var u=Ia(t);if(u!==null){if(t=u.tag,t===13){if(t=B1(u),t!==null){l.blockedOn=t,y0(l.priority,function(){M1(u)});return}}else if(t===31){if(t=Y1(u),t!==null){l.blockedOn=t,y0(l.priority,function(){M1(u)});return}}else if(t===3&&u.stateNode.current.memoizedState.isDehydrated){l.blockedOn=u.tag===3?u.stateNode.containerInfo:null;return}}}l.blockedOn=null}function $n(l){if(l.blockedOn!==null)return!1;for(var t=l.targetContainers;0<t.length;){var u=pc(l.nativeEvent);if(u===null){u=l.nativeEvent;var a=new u.constructor(u.type,u);$f=a,u.target.dispatchEvent(a),$f=null}else return t=aa(u),t!==null&&dm(t),l.blockedOn=u,!1;t.shift()}return!0}function U1(l,t,u){$n(l)&&u.delete(t)}function o2(){qc=!1,xt!==null&&$n(xt)&&(xt=null),Lt!==null&&$n(Lt)&&(Lt=null),Kt!==null&&$n(Kt)&&(Kt=null),Fa.forEach(U1),ka.forEach(U1)}function Yn(l,t){l.blockedOn===t&&(l.blockedOn=null,qc||(qc=!0,nl.unstable_scheduleCallback(nl.unstable_NormalPriority,o2)))}var Rn=null;function H1(l){Rn!==l&&(Rn=l,nl.unstable_scheduleCallback(nl.unstable_NormalPriority,function(){Rn===l&&(Rn=null);for(var t=0;t<l.length;t+=3){var u=l[t],a=l[t+1],n=l[t+2];if(typeof a!="function"){if(Di(a||u)===null)continue;break}var e=aa(u);e!==null&&(l.splice(t,3),t-=3,mc(e,{pending:!0,data:n,method:u.method,action:a},a,n))}}))}function ta(l){function t(i){return Yn(i,l)}xt!==null&&Yn(xt,l),Lt!==null&&Yn(Lt,l),Kt!==null&&Yn(Kt,l),Fa.forEach(t),ka.forEach(t);for(var u=0;u<pt.length;u++){var a=pt[u];a.blockedOn===l&&(a.blockedOn=null)}for(;0<pt.length&&(u=pt[0],u.blockedOn===null);)Sm(u),u.blockedOn===null&&pt.shift();if(u=(l.ownerDocument||l).$$reactFormReplay,u!=null)for(a=0;a<u.length;a+=3){var n=u[a],e=u[a+1],f=n[Al]||null;if(typeof e=="function")f||H1(u);else if(f){var c=null;if(e&&e.hasAttribute("formAction")){if(n=e,f=e[Al]||null)c=f.formAction;else if(Di(n)!==null)continue}else c=f.action;typeof c=="function"?u[a+1]=c:(u.splice(a,3),a-=3),H1(u)}}}function gm(){function l(e){e.canIntercept&&e.info==="react-transition"&&e.intercept({handler:function(){return new Promise(function(f){return n=f})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),a||setTimeout(u,20)}function u(){if(!a&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,n=null;return navigation.addEventListener("navigate",l),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(u,100),function(){a=!0,navigation.removeEventListener("navigate",l),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function Ui(l){this._internalRoot=l}je.prototype.render=Ui.prototype.render=function(l){var t=this._internalRoot;if(t===null)throw Error(b(409));var u=t.current,a=ql();mm(u,a,l,t,null,null)};je.prototype.unmount=Ui.prototype.unmount=function(){var l=this._internalRoot;if(l!==null){this._internalRoot=null;var t=l.containerInfo;mm(l.current,2,null,l,null,null),Xe(),t[ua]=null}};function je(l){this._internalRoot=l}je.prototype.unstable_scheduleHydration=function(l){if(l){var t=K1();l={blockedOn:null,target:l,priority:t};for(var u=0;u<pt.length&&t!==0&&t<pt[u].priority;u++);pt.splice(u,0,l),u===0&&Sm(l)}};var N1=p1.version;if(N1!=="19.2.8")throw Error(b(527,N1,"19.2.8"));C.findDOMNode=function(l){var t=l._reactInternals;if(t===void 0)throw typeof l.render=="function"?Error(b(188)):(l=Object.keys(l).join(","),Error(b(268,l)));return l=Wm(t),l=l!==null?R1(l):null,l=l===null?null:l.stateNode,l};var s2={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(za=__REACT_DEVTOOLS_GLOBAL_HOOK__,!za.isDisabled&&za.supportsFiber))try{Pa=za.inject(s2),Nl=za}catch{}var za;Ve.createRoot=function(l,t){if(!q1(l))throw Error(b(299));var u=!1,a="",n=fv,e=cv,f=iv;return t!=null&&(t.unstable_strictMode===!0&&(u=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(e=t.onCaughtError),t.onRecoverableError!==void 0&&(f=t.onRecoverableError)),t=ym(l,1,!1,null,null,u,a,null,n,e,f,gm),l[ua]=t.current,Ti(l),new Ui(t)};Ve.hydrateRoot=function(l,t,u){if(!q1(l))throw Error(b(299));var a=!1,n="",e=fv,f=cv,c=iv,i=null;return u!=null&&(u.unstable_strictMode===!0&&(a=!0),u.identifierPrefix!==void 0&&(n=u.identifierPrefix),u.onUncaughtError!==void 0&&(e=u.onUncaughtError),u.onCaughtError!==void 0&&(f=u.onCaughtError),u.onRecoverableError!==void 0&&(c=u.onRecoverableError),u.formState!==void 0&&(i=u.formState)),t=ym(l,1,!0,t,u??null,a,n,i,e,f,c,gm),t.context=vm(null),u=t.current,a=ql(),a=Cc(a),n=Qt(a),n.callback=null,Zt(u,n,a),u=a,t.current.lanes=u,tn(t,u),lt(t),l[ua]=t.current,Ti(l),new je(t)};Ve.version="19.2.8"});var zm=At((H2,bm)=>{"use strict";function sm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sm)}catch(l){console.error(l)}}sm(),bm.exports=om()});var b2=Ni(dn()),z2=Ni(zm());window.React=b2;window.ReactDOM=z2;})();
/*! Bundled license information:

react/cjs/react.production.js:
  (**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.js:
  (**
   * @license React
   * scheduler.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.js:
  (**
   * @license React
   * react-dom.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-client.production.js:
  (**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/

/* PART 2 */
const React = window.React;
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __commonJS = (cb, mod) => function __require() {
    try {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    } catch (e) {
      throw mod = 0, e;
    }
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

  // g:react-dom/client
  var require_client = __commonJS({
    "g:react-dom/client"(exports, module) {
      module.exports = window.ReactDOM;
    }
  });

  // g:react
  var require_react = __commonJS({
    "g:react"(exports, module) {
      module.exports = window.React;
    }
  });

  // src/main.tsx
  var import_client = __toESM(require_client(), 1);

  // src/App.tsx
  var import_react21 = __toESM(require_react(), 1);

  // src/ui/Icon.tsx
  var P = {
    droplet: ["M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"],
    "droplet-off": ["M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z", "M2 2l20 20"],
    search: ["M21 21l-4.3-4.3", "M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"],
    "map-pin": ["M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z", "M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"],
    "map-pin-off": ["M12.75 7.09a3 3 0 0 1 2.16 2.16", "M17.07 17.07c-1.63 2.17-3.53 3.91-4.47 4.73a1 1 0 0 1-1.2 0C9.54 20.19 4 14.99 4 10a8 8 0 0 1 1.43-4.57", "M2 2l20 20", "M8.48 2.82A8 8 0 0 1 20 10c0 1.18-.31 2.38-.81 3.53"],
    map: ["M14.1 5.55a2 2 0 0 0 1.8 0l3.66-1.83A1 1 0 0 1 21 4.62v12.76a1 1 0 0 1-.55.9l-4.55 2.28a2 2 0 0 1-1.79 0l-4.21-2.1a2 2 0 0 0-1.79 0l-3.66 1.83A1 1 0 0 1 3 19.38V6.62a1 1 0 0 1 .55-.9l4.55-2.28a2 2 0 0 1 1.79 0z", "M15 5.76v15", "M9 3.24v15"],
    list: ["M8 6h13", "M8 12h13", "M8 18h13", "M3 6h.01", "M3 12h.01", "M3 18h.01"],
    filter: ["M22 3H2l8 9.46V19l4 2v-8.54z"],
    alert: ["M21.73 18l-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3", "M12 9v4", "M12 17h.01"],
    "check-circle": ["M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z", "M9 12l2 2 4-4"],
    "x-circle": ["M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z", "M15 9l-6 6", "M9 9l6 6"],
    check: ["M20 6L9 17l-5-5"],
    clock: ["M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z", "M12 6v6l4 2"],
    bell: ["M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9", "M10.3 21a1.94 1.94 0 0 0 3.4 0"],
    user: ["M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", "M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"],
    home: ["M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z", "M9 22V12h6v10"],
    plus: ["M5 12h14", "M12 5v14"],
    minus: ["M5 12h14"],
    external: ["M15 3h6v6", "M10 14L21 3", "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"],
    "arrow-left": ["M12 19l-7-7 7-7", "M19 12H5"],
    "arrow-right": ["M5 12h14", "M12 5l7 7-7 7"],
    chevron: ["M9 18l6-6-6-6"],
    camera: ["M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z", "M12 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"],
    shield: ["M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z", "M9 12l2 2 4-4"],
    wrench: ["M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"],
    chart: ["M3 3v16a2 2 0 0 0 2 2h16", "M18 17V9", "M13 17V5", "M8 17v-3"],
    activity: ["M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"],
    play: ["M6 3l14 9-14 9z"],
    "play-circle": ["M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z", "M10 8l6 4-6 4z"],
    refresh: ["M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", "M21 3v5h-5", "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", "M8 16H3v5"],
    trash: ["M3 6h18", "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"],
    edit: ["M21.17 6.81a1 1 0 0 0-3.99-3.99L3.84 16.17a2 2 0 0 0-.5.83l-1.32 4.35a.5.5 0 0 0 .62.62l4.35-1.32a2 2 0 0 0 .83-.5z"],
    building: ["M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z", "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2", "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2", "M10 6h4", "M10 10h4", "M10 14h4", "M10 18h4"],
    sun: ["M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z", "M12 2v2", "M12 20v2", "M4.93 4.93l1.41 1.41", "M17.66 17.66l1.41 1.41", "M2 12h2", "M20 12h2", "M6.34 17.66l-1.41 1.41", "M19.07 4.93l-1.41 1.41"],
    moon: ["M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"],
    info: ["M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z", "M12 16v-4", "M12 8h.01"],
    navigation: ["M3 11l19-9-9 19-2-8-8-2z"],
    x: ["M18 6L6 18", "M6 6l12 12"],
    flag: ["M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z", "M4 22v-7"],
    sparkles: ["M9.94 14.06L12 22l2.06-7.94L22 12l-7.94-2.06L12 2 9.94 9.94 2 12z"],
    power: ["M12 2v10", "M18.4 6.6a9 9 0 1 1-12.77.04"],
    waves: ["M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1", "M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1", "M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"],
    locate: ["M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z", "M12 2v3", "M12 19v3", "M2 12h3", "M19 12h3"],
    layers: ["M12 2L2 7l10 5 10-5-10-5z", "M2 17l10 5 10-5", "M2 12l10 5 10-5"],
    image: ["M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z", "M9 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z", "M21 15l-5-5L5 21"],
    eye: ["M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z", "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"],
    wifi: ["M5 12.55a11 11 0 0 1 14.08 0", "M1.42 9a16 16 0 0 1 21.16 0", "M8.53 16.11a6 6 0 0 1 6.95 0", "M12 20h.01"],
    "wifi-off": ["M2 2l20 20", "M8.5 16.5a5 5 0 0 1 7 0", "M2 8.82a15 15 0 0 1 4.17-2.65", "M10.66 5c4.01-.36 8.14.9 11.34 3.76", "M16.85 11.25a10 10 0 0 1 2.22 1.68", "M5 13a10 10 0 0 1 5.24-2.76", "M12 20h.01"],
    users: ["M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", "M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z", "M22 21v-2a4 4 0 0 0-3-3.87", "M16 3.13a4 4 0 0 1 0 7.75"],
    clipboard: ["M9 2h6a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z", "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"],
    lock: ["M5 11h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2z", "M7 11V7a5 5 0 0 1 10 0v4"],
    more: ["M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z", "M19 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z", "M5 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"],
    grid: ["M3 3h7v7H3z", "M14 3h7v7h-7z", "M14 14h7v7h-7z", "M3 14h7v7H3z"]
  };
  function Icon({ name, size = 18, className, strokeWidth = 2 }) {
    const d = P[name] ?? P.info;
    return /* @__PURE__ */ React.createElement(
      "svg",
      {
        className: `icon ${className ?? ""}`,
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": "true",
        focusable: "false"
      },
      d.map((p, i) => /* @__PURE__ */ React.createElement("path", { key: i, d: p }))
    );
  }

  // src/ui/kit.tsx
  var import_react3 = __toESM(require_react(), 1);

  // src/store.tsx
  var import_react2 = __toESM(require_react(), 1);

  // src/data/repository.ts
  var KEY = "waterpoint:v1:db";
  var PHOTO = "waterpoint:v1:photo:";
  var LocalRepository = class {
    constructor() {
      __publicField(this, "kind", "localStorage (this browser only)");
    }
    async load() {
      try {
        const raw = localStorage.getItem(KEY);
        return raw ? JSON.parse(raw) : null;
      } catch {
        return null;
      }
    }
    async save(db) {
      localStorage.setItem(KEY, JSON.stringify(db));
    }
    async putPhoto(id, dataUrl) {
      localStorage.setItem(PHOTO + id, dataUrl);
    }
    async getPhoto(id) {
      try {
        return localStorage.getItem(PHOTO + id);
      } catch {
        return null;
      }
    }
    async clearAll() {
      const rm = [];
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        if (k === KEY || k.startsWith(PHOTO)) rm.push(k);
      }
      rm.forEach((k) => localStorage.removeItem(k));
    }
  };
  var repo = new LocalRepository();

  // src/campus.ts
  var HOUR = 36e5;
  var DAY = 24 * HOUR;
  var RULES = {
    reportTtl: 12 * HOUR,
    // a student issue report stops counting as "current" after 12h
    checkinTtl: 6 * HOUR,
    // a student "it's working" check-in expires after 6h
    adminCheckTtl: 24 * HOUR,
    // a staff "working" check expires after 24h
    resolvedTtl: 48 * HOUR,
    // "Resolved" banner expires after 48h
    duplicateWindow: 6 * HOUR,
    // same point + same issue group within 6h = possible duplicate
    freshWithin: 3 * HOUR,
    // ≤3h old counts as "fresh"
    checkinCooldown: 1 * HOUR,
    // one check-in per user per point per hour
    recentWindow: 24 * HOUR
    // "recent reports" count window
  };
  var CAMPUS_CENTER = { lat: 31.2548, lng: 75.7048 };
  var A = (id, name, short, zone, lat, lng, keywords) => ({ id, name, short, zone, keywords, related: [], relatedWhy: "", center: { lat, lng } });
  var blk = (n, lat, lng) => A(`b${n}`, `Block ${n}`, String(n), "academic", lat, lng, [`block ${n}`, `b${n}`, String(n), "academic block"]);
  var CAMPUS_AREAS = [
    blk(25, 31.2562, 75.7032),
    blk(26, 31.2565, 75.704),
    blk(27, 31.2568, 75.7048),
    blk(28, 31.2571, 75.7056),
    blk(32, 31.2548, 75.7068),
    blk(33, 31.2544, 75.7075),
    blk(34, 31.254, 75.706),
    blk(36, 31.2536, 75.705),
    blk(37, 31.2532, 75.7042),
    blk(38, 31.2528, 75.7034),
    A("robo", "Robo Park surroundings", "Robo Park", "open", 31.2557, 75.7044, ["robo", "park", "robo park", "unimall", "open area", "garden"]),
    A("bh5", "BH-5 playground surroundings", "BH-5 playground", "open", 31.258, 75.709, ["bh5", "bh-5", "playground", "hostel", "sports", "open area", "ground"]),
    A("main-gate", "Main Gate", "Main Gate", "hub", 31.251, 75.702, ["main gate", "gate", "entrance"]),
    A("bh4-route", "BH-4 hostel route", "BH-4 route", "hub", 31.2575, 75.701, ["bh4", "bh-4", "hostel", "route", "hostel route"]),
    A("cc-food", "CC Food Court", "CC Food Court", "hub", 31.2516, 75.703, ["cc", "food court", "food", "cc food court", "canteen"]),
    A("food34", "Block 34 Food Court", "B34 Food Court", "hub", 31.2541, 75.7064, ["food court", "food", "block 34 food court", "34", "canteen"]),
    A("other", "Other location", "Other", "other", 31.2548, 75.7048, ["other", "custom"])
  ];
  var areaById = (id) => CAMPUS_AREAS.find((a) => a.id === id);
  var ZONE_LABEL = {
    academic: "Academic blocks",
    open: "Open areas",
    hub: "Gates, routes & food courts",
    other: "Other"
  };
  var CATEGORIES = [
    { id: "not_flowing", label: "Water not flowing", hint: "Nothing comes out when you press the tap or button.", icon: "droplet-off", effect: "REPORTED_UNAVAILABLE", group: "supply" },
    { id: "empty", label: "Cooler appears empty", hint: "The cooler seems to have run out of water.", icon: "droplet", effect: "REPORTED_UNAVAILABLE", group: "supply" },
    { id: "not_functioning", label: "Cooler not functioning", hint: "Switched off, display dead, or visibly out of order.", icon: "power", effect: "REPORTED_UNAVAILABLE", group: "supply" },
    { id: "leakage", label: "Visible leakage", hint: "Water is leaking or pooling around the point.", icon: "waves", effect: "NEEDS_ATTENTION", group: "leak" },
    { id: "cleaning", label: "Area needs cleaning", hint: "The area or surfaces look dirty or untidy.", icon: "sparkles", effect: "NEEDS_ATTENTION", group: "clean" },
    { id: "location_incorrect", label: "Location information is incorrect", hint: "Floor, building or description does not match what you see.", icon: "map-pin-off", effect: null, group: "location" },
    { id: "other", label: "Other visible issue", hint: "Something else you can see. Please describe it.", icon: "flag", effect: "NEEDS_ATTENTION", group: "other" }
  ];
  var categoryById = (id) => CATEGORIES.find((c) => c.id === id);

  // src/domain/format.ts
  function ago(ts, now) {
    const s = Math.max(0, Math.round((now - ts) / 1e3));
    if (s < 60) return "just now";
    const m = Math.round(s / 60);
    if (m < 60) return `${m} min ago`;
    const h = Math.round(m / 60);
    if (h < 48) return `${h} h ago`;
    return `${Math.round(h / 24)} d ago`;
  }
  function inFuture(ts, now) {
    const s = Math.max(0, Math.round((ts - now) / 1e3));
    const m = Math.round(s / 60);
    if (m < 60) return `${m} min`;
    const h = Math.round(m / 60);
    if (h < 48) return `${h} h`;
    return `${Math.round(h / 24)} d`;
  }
  var fmtDateTime = (ts) => new Date(ts).toLocaleString("en-IN", { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" });
  var fmtTime = (ts) => new Date(ts).toLocaleString("en-IN", { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" });
  var dayKey = (ts) => {
    const d = new Date(ts);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  };
  function haversineKm(a, b) {
    const R = 6371, rad = (x) => x * Math.PI / 180;
    const dLat = rad(b.lat - a.lat), dLng = rad(b.lng - a.lng);
    const h = Math.sin(dLat / 2) ** 2 + Math.cos(rad(a.lat)) * Math.cos(rad(b.lat)) * Math.sin(dLng / 2) ** 2;
    return 2 * R * Math.asin(Math.sqrt(h));
  }
  var fmtDist = (km) => km < 1 ? `${Math.max(10, Math.round(km * 1e3 / 10) * 10)} m` : `${km.toFixed(1)} km`;
  var ordinal = (n) => {
    const v = Number(n);
    if (!Number.isFinite(v)) return n;
    const s = ["th", "st", "nd", "rd"], m = v % 100;
    return v + (s[(m - 20) % 10] || s[m] || s[0]);
  };

  // src/domain/actions.ts
  var DB_VERSION = 1;
  var STUDENT_ID = "u-demo-student";
  var ADMIN_ID = "u-demo-admin";
  var clone = (x) => structuredClone(x);
  var pad = (n, w = 4) => String(n).padStart(w, "0");
  function emptyDb(now) {
    return {
      version: DB_VERSION,
      users: [
        { id: STUDENT_ID, name: "Student", role: "student", createdAt: now, isDemo: true },
        { id: ADMIN_ID, name: "Maintenance Admin", role: "admin", createdAt: now, isDemo: true }
      ],
      points: [],
      reports: [],
      statusUpdates: [],
      activities: [],
      notifications: [],
      follows: [],
      counters: { report: 0, point: 0, status: 0, activity: 0, note: 0, notification: 0 },
      settings: { clockOffsetMs: 0, seededAt: null, mode: "empty" }
    };
  }
  var userName = (db, id) => db.users.find((u) => u.id === id)?.name ?? "Unknown user";
  var pointById = (db, id) => db.points.find((p) => p.id === id);
  var reportById = (db, id) => db.reports.find((r) => r.id === id);
  var isOpenReport = (r) => r.status !== "rejected" && r.status !== "resolved";
  function floorText(p) {
    if (p.floor) return /^\d+$/.test(p.floor) ? `${ordinal(p.floor)} floor` : p.floor;
    if (p.areaType === "outdoor") return "Outdoor";
    return "Ground level";
  }
  function logActivity(db, actorId, action, targetId, targetType, details, now) {
    db.counters.activity += 1;
    db.activities.push({ id: `A-${pad(db.counters.activity)}`, actorId, action, targetId, targetType, details, createdAt: now });
  }
  function notify(db, userId, title, body, link, now) {
    db.counters.notification += 1;
    db.notifications.push({ id: `N-${pad(db.counters.notification)}`, userId, title, body, link, createdAt: now, read: false });
  }
  function addStatus(db, p) {
    db.counters.status += 1;
    const u = {
      id: `S-${pad(db.counters.status)}`,
      waterPointId: p.pointId,
      status: p.status,
      source: p.source,
      reportId: p.reportId ?? null,
      verifiedBy: p.by ?? null,
      createdAt: p.now,
      expiresAt: p.ttl == null ? null : p.now + p.ttl,
      note: p.note
    };
    db.statusUpdates.push(u);
    return u;
  }
  function notifyFollowers(db, pointId, title, body, now, skip = []) {
    db.follows.filter((f) => f.pointId === pointId && !skip.includes(f.userId)).forEach((f) => notify(db, f.userId, title, body, `/point/${pointId}`, now));
  }
  var admins = (db) => db.users.filter((u) => u.role === "admin");
  var pName = (db, id) => pointById(db, id)?.name ?? id;
  function findDuplicate(db, pointId, category, now) {
    const group = categoryById(category).group;
    return db.reports.filter((r) => r.waterPointId === pointId && isOpenReport(r) && categoryById(r.category).group === group && now - r.createdAt <= RULES.duplicateWindow).sort((a, b) => b.createdAt - a.createdAt)[0] ?? null;
  }
  function validateReport(db, i) {
    const p = pointById(db, i.pointId);
    if (!i.pointId || !p) return { field: "pointId", error: "Choose the water point you are reporting." };
    if (!p.active) return { field: "pointId", error: "This water point is deactivated and cannot receive reports." };
    if (!i.category || !CATEGORIES.some((c) => c.id === i.category)) return { field: "category", error: "Select what is wrong." };
    const d = i.description.trim();
    if (d.length > 280) return { field: "description", error: "Keep the description under 280 characters." };
    if ((i.category === "other" || i.category === "location_incorrect") && d.length < 8)
      return { field: "description", error: "Please add a short description (at least 8 characters) so staff can understand the issue." };
    return null;
  }
  function submitReport(src, i, now) {
    const v = validateReport(src, i);
    if (v) return { ok: false, ...v };
    if (!i.allowDuplicate) {
      const dup2 = findDuplicate(src, i.pointId, i.category, now);
      if (dup2) return { ok: false, error: "A similar report was submitted recently.", duplicate: dup2 };
    }
    const db = clone(src);
    db.counters.report += 1;
    const d = new Date(now);
    const id = `WP-${String(d.getFullYear()).slice(2)}${pad(d.getMonth() + 1, 2)}${pad(d.getDate(), 2)}-${pad(db.counters.report)}`;
    const dup = findDuplicate(src, i.pointId, i.category, now);
    const report = {
      id,
      waterPointId: i.pointId,
      reporterId: i.reporterId,
      category: i.category,
      description: i.description.trim(),
      hasPhoto: i.hasPhoto,
      status: "submitted",
      verificationStatus: "pending",
      duplicateOfId: dup?.id,
      timeline: [{ at: now, status: "submitted", by: i.reporterId, note: "Report submitted. Pending staff verification." }],
      notes: [],
      createdAt: now,
      updatedAt: now
    };
    db.reports.push(report);
    const meta = categoryById(i.category);
    if (meta.effect) addStatus(db, { pointId: i.pointId, status: meta.effect, source: "student_report", reportId: id, now, ttl: RULES.reportTtl });
    const pn = pName(db, i.pointId);
    logActivity(db, i.reporterId, "report.submitted", id, "report", `${meta.label} \u2014 ${pn}${dup ? ` (possible duplicate of ${dup.id})` : ""}`, now);
    notify(db, i.reporterId, "Report submitted", `Your report ${id} for ${pn} was received and is pending verification.`, `/activity`, now);
    admins(db).forEach((a) => notify(db, a.id, "New report awaiting review", `${id}: ${meta.label} \u2014 ${pn}`, `/admin/reports/${id}`, now));
    return { ok: true, db, report };
  }
  function confirmWorking(src, pointId, userId, now) {
    const p = pointById(src, pointId);
    if (!p || !p.active) return { ok: false, error: "This water point is not active." };
    const recent = src.activities.find((a) => a.action === "checkin" && a.actorId === userId && a.targetId === pointId && now - a.createdAt < RULES.checkinCooldown);
    if (recent) return { ok: false, error: "You already confirmed this point recently. Thanks \u2014 please check again in an hour." };
    const db = clone(src);
    addStatus(db, { pointId, status: "AVAILABLE", source: "student_checkin", now, ttl: RULES.checkinTtl });
    logActivity(db, userId, "checkin", pointId, "point", `Reported "working" \u2014 ${p.name}`, now);
    return { ok: true, db };
  }
  function toggleFollow(src, userId, pointId) {
    const db = clone(src);
    const i = db.follows.findIndex((f) => f.userId === userId && f.pointId === pointId);
    if (i >= 0) db.follows.splice(i, 1);
    else db.follows.push({ userId, pointId });
    return db;
  }
  var fail = (error) => ({ ok: false, error });
  function setReportStatus(r, status, by, now, note) {
    r.status = status;
    r.updatedAt = now;
    r.verificationStatus = status === "verified" || status === "resolved" ? "verified" : status === "rejected" ? "rejected" : "pending";
    r.timeline.push({ at: now, status, by, note });
  }
  var voidFor = (db, reportId) => db.statusUpdates.forEach((u) => {
    if (u.reportId === reportId) u.voided = true;
  });
  function startReview(src, reportId, adminId, now) {
    const r0 = reportById(src, reportId);
    if (!r0) return fail("Report not found.");
    if (r0.status !== "submitted") return fail("Only newly submitted reports can be moved to review.");
    const db = clone(src);
    const r = reportById(db, reportId);
    setReportStatus(r, "under_review", adminId, now, "Staff started reviewing this report.");
    logActivity(db, adminId, "report.review", reportId, "report", `Started review \u2014 ${pName(db, r.waterPointId)}`, now);
    notify(db, r.reporterId, "Report under review", `${reportId} is now being reviewed by staff.`, "/activity", now);
    return { ok: true, db };
  }
  function verifyReport(src, reportId, adminId, now, note) {
    const r0 = reportById(src, reportId);
    if (!r0) return fail("Report not found.");
    if (r0.status !== "submitted" && r0.status !== "under_review") return fail("Only reports awaiting verification can be verified.");
    const db = clone(src);
    const r = reportById(db, reportId);
    setReportStatus(r, "verified", adminId, now, note?.trim() || "Staff confirmed the reported condition.");
    const meta = categoryById(r.category);
    voidFor(db, reportId);
    if (meta.effect) addStatus(db, { pointId: r.waterPointId, status: meta.effect, source: "admin_verified", reportId, by: adminId, now, ttl: null, note: note?.trim() });
    if (note?.trim()) {
      db.counters.note += 1;
      r.notes.push({ id: `NT-${pad(db.counters.note)}`, at: now, by: adminId, text: note.trim() });
    }
    const pn = pName(db, r.waterPointId);
    logActivity(db, adminId, "report.verified", reportId, "report", `Verified \u2014 ${meta.label} at ${pn}`, now);
    notify(db, r.reporterId, "Issue verified", `Staff verified your report ${reportId} for ${pn}.`, "/activity", now);
    notifyFollowers(db, r.waterPointId, "Water point status changed", `${pn} now shows a staff-verified condition.`, now, [r.reporterId]);
    return { ok: true, db };
  }
  function rejectReport(src, reportId, adminId, reason, now) {
    const r0 = reportById(src, reportId);
    if (!r0) return fail("Report not found.");
    if (r0.status !== "submitted" && r0.status !== "under_review") return fail("Only reports awaiting verification can be rejected.");
    if (reason.trim().length < 5) return fail("Please give a reason (at least 5 characters).");
    const db = clone(src);
    const r = reportById(db, reportId);
    setReportStatus(r, "rejected", adminId, now, reason.trim());
    r.rejectionReason = reason.trim();
    voidFor(db, reportId);
    logActivity(db, adminId, "report.rejected", reportId, "report", `Rejected \u2014 ${reason.trim()}`, now);
    notify(db, r.reporterId, "Report not verified", `${reportId} could not be verified: ${reason.trim()}`, "/activity", now);
    return { ok: true, db };
  }
  function resolveReport(src, reportId, adminId, now, note) {
    const r0 = reportById(src, reportId);
    if (!r0) return fail("Report not found.");
    if (r0.status !== "verified") return fail("Verify the report before marking it resolved.");
    const db = clone(src);
    const r = reportById(db, reportId);
    setReportStatus(r, "resolved", adminId, now, note?.trim() || "Issue resolved by staff.");
    voidFor(db, reportId);
    const stillOpen = db.reports.some((x) => x.id !== reportId && x.waterPointId === r.waterPointId && x.status === "verified" && categoryById(x.category).effect);
    if (!stillOpen && categoryById(r.category).effect)
      addStatus(db, { pointId: r.waterPointId, status: "RESOLVED", source: "admin_resolved", reportId, by: adminId, now, ttl: RULES.resolvedTtl, note: note?.trim() });
    const pn = pName(db, r.waterPointId);
    logActivity(db, adminId, "report.resolved", reportId, "report", `Resolved \u2014 ${pn}`, now);
    notify(db, r.reporterId, "Report resolved", `Your report ${reportId} for ${pn} was marked resolved.`, "/activity", now);
    notifyFollowers(db, r.waterPointId, "Water point status changed", `${pn}: a reported issue was marked resolved by staff.`, now, [r.reporterId]);
    return { ok: true, db };
  }
  function addNote(src, reportId, adminId, text, now) {
    if (!reportById(src, reportId)) return fail("Report not found.");
    if (text.trim().length < 2) return fail("Write a note first.");
    const db = clone(src);
    const r = reportById(db, reportId);
    db.counters.note += 1;
    r.notes.push({ id: `NT-${pad(db.counters.note)}`, at: now, by: adminId, text: text.trim() });
    r.updatedAt = now;
    logActivity(db, adminId, "report.note", reportId, "report", `Internal note added: \u201C${text.trim().slice(0, 80)}\u201D`, now);
    return { ok: true, db };
  }
  function validatePoint(i) {
    if (i.name.trim().length < 3) return "Give the point a name (at least 3 characters).";
    if (!i.building.trim()) return "Building / landmark is required.";
    const lat = i.latitude.trim(), lng = i.longitude.trim();
    if (lat && !lng || !lat && lng) return "Enter both latitude and longitude, or leave both empty.";
    if (lat && (Number.isNaN(Number(lat)) || Math.abs(Number(lat)) > 90)) return "Latitude must be a number between -90 and 90.";
    if (lng && (Number.isNaN(Number(lng)) || Math.abs(Number(lng)) > 180)) return "Longitude must be a number between -180 and 180.";
    if (i.locationVerified && !i.floor.trim() && i.areaType === "indoor") return "To mark an indoor point verified, enter its verified floor.";
    return null;
  }
  var num = (s) => s.trim() ? Number(s) : null;
  function addPoint(src, i, adminId, now) {
    const err = validatePoint(i);
    if (err) return fail(err);
    const db = clone(src);
    db.counters.point += 1;
    const id = `WP-PT-${pad(db.counters.point, 3)}`;
    db.points.push({
      id,
      name: i.name.trim(),
      areaId: i.areaId,
      building: i.building.trim(),
      floor: i.floor.trim() || null,
      floorReported: i.floorReported?.trim() || null,
      areaType: i.areaType,
      locationVerified: i.locationVerified,
      latitude: num(i.latitude),
      longitude: num(i.longitude),
      active: true,
      createdAt: now,
      updatedAt: now
    });
    logActivity(db, adminId, "point.added", id, "point", `Added water point \u201C${i.name.trim()}\u201D (${i.building.trim()})`, now);
    return { ok: true, db, id };
  }
  function updatePoint(src, id, i, adminId, now) {
    const err = validatePoint(i);
    if (err) return fail(err);
    if (!pointById(src, id)) return fail("Water point not found.");
    const db = clone(src);
    const p = pointById(db, id);
    const changes = [];
    const set2 = (k, v, label) => {
      if (p[k] !== v) {
        changes.push(`${label}: ${String(p[k] ?? "\u2014")} \u2192 ${String(v ?? "\u2014")}`);
        p[k] = v;
      }
    };
    set2("name", i.name.trim(), "name");
    set2("areaId", i.areaId, "area");
    set2("building", i.building.trim(), "building");
    set2("floor", i.floor.trim() || null, "floor");
    set2("floorReported", i.floorReported?.trim() || null, "reported floor");
    set2("areaType", i.areaType, "type");
    set2("locationVerified", i.locationVerified, "verified");
    set2("latitude", num(i.latitude), "latitude");
    set2("longitude", num(i.longitude), "longitude");
    if (!changes.length) return { ok: true, db: src };
    p.updatedAt = now;
    logActivity(db, adminId, "point.updated", id, "point", `Edited ${p.name} \u2014 ${changes.join("; ")}`, now);
    return { ok: true, db };
  }
  function setPointActive(src, id, active, adminId, now) {
    const p0 = pointById(src, id);
    if (!p0) return fail("Water point not found.");
    const db = clone(src);
    const p = pointById(db, id);
    p.active = active;
    p.updatedAt = now;
    logActivity(db, adminId, active ? "point.activated" : "point.deactivated", id, "point", `${active ? "Activated" : "Deactivated"} ${p.name}`, now);
    return { ok: true, db };
  }
  function deletePoint(src, id, adminId, now) {
    const p0 = pointById(src, id);
    if (!p0) return fail("Water point not found.");
    if (src.reports.some((r) => r.waterPointId === id)) return fail("This point has report history. Deactivate it instead of deleting.");
    const db = clone(src);
    db.points = db.points.filter((p) => p.id !== id);
    db.statusUpdates = db.statusUpdates.filter((u) => u.waterPointId !== id);
    db.follows = db.follows.filter((f) => f.pointId !== id);
    logActivity(db, adminId, "point.deleted", id, "point", `Deleted water point ${p0.name}`, now);
    return { ok: true, db };
  }
  function setStaffStatus(src, pointId, status, note, adminId, now) {
    const p0 = pointById(src, pointId);
    if (!p0) return fail("Water point not found.");
    const db = clone(src);
    db.statusUpdates.forEach((u) => {
      if (u.waterPointId === pointId && u.source.startsWith("admin")) u.voided = true;
    });
    addStatus(db, { pointId, status, source: "admin_check", by: adminId, now, ttl: status === "AVAILABLE" ? RULES.adminCheckTtl : null, note: note.trim() || void 0 });
    const lbl = status === "AVAILABLE" ? "working" : status === "NEEDS_ATTENTION" ? "needs attention" : "out of service";
    logActivity(db, adminId, "point.status_set", pointId, "point", `Staff check: ${p0.name} marked ${lbl}${note.trim() ? ` \u2014 ${note.trim()}` : ""}`, now);
    notifyFollowers(db, pointId, "Water point status changed", `${p0.name} was checked by staff: ${lbl}.`, now);
    return { ok: true, db };
  }
  function markNotifications(src, userId, ids) {
    const db = clone(src);
    db.notifications.forEach((n) => {
      if (n.userId === userId && (ids === "all" || ids.includes(n.id))) n.read = true;
    });
    return db;
  }
  function clearNotifications(src, userId) {
    const db = clone(src);
    db.notifications = db.notifications.filter((n) => n.userId !== userId);
    return db;
  }

  // src/domain/seed.ts
  var R1 = "u-student-1";
  var R2 = "u-student-2";
  var R3 = "u-student-3";
  var R4 = "u-student-4";
  function buildSeed(T) {
    let db = emptyDb(T - 30 * DAY);
    db.settings.mode = "demo";
    [[R1, "Student 1"], [R2, "Student 2"], [R3, "Student 3"], [R4, "Student 4"]].forEach(([id, name]) => db.users.push({ id, name, role: "student", createdAt: T - 20 * DAY, isDemo: true }));
    const ids = {};
    const slot = {};
    const add = (key, name, areaId, floor, areaType) => {
      const a = areaById(areaId);
      const n = (slot[areaId] = (slot[areaId] ?? 0) + 1) - 1;
      const ang = (n * 70 + 20) * (Math.PI / 180), r = n === 0 ? 0 : 16e-5;
      const lat = a.center.lat + r * Math.sin(ang), lng = a.center.lng + r * 1.15 * Math.cos(ang);
      const res = addPoint(db, { name, areaId, building: a.name, floor, floorReported: "", areaType, locationVerified: true, latitude: lat.toFixed(6), longitude: lng.toFixed(6) }, ADMIN_ID, T - 30 * DAY);
      if (!res.ok) throw new Error(res.error);
      db = res.db;
      ids[key] = res.id;
    };
    const blocks = [25, 26, 27, 28, 32, 33, 34, 36, 37, 38];
    for (const n of blocks) {
      if (n === 34) {
        add("b34a", "Block 34 \xB7 2nd Floor (A)", "b34", "2", "indoor");
        add("b34b", "Block 34 \xB7 2nd Floor (B)", "b34", "2", "indoor");
      } else add(`b${n}`, `Block ${n} \xB7 2nd Floor`, `b${n}`, "2", "indoor");
    }
    for (const n of blocks) add(`b${n}f4`, `Block ${n} \xB7 ${ordinal("4")} Floor`, `b${n}`, "4", "indoor");
    add("robo", "Robo Park \xB7 Walkway Cooler", "robo", "", "outdoor");
    add("bh5", "BH-5 Playground \xB7 Water Station", "bh5", "", "outdoor");
    add("bh4", "BH-4 Hostel Route \xB7 Water Station", "bh4-route", "", "outdoor");
    add("gate", "Main Gate \xB7 Water Station", "main-gate", "", "outdoor");
    add("cc", "CC Food Court \xB7 Water Point", "cc-food", "Ground", "indoor");
    add("f34", "Block 34 Food Court \xB7 Water Point", "food34", "Ground", "indoor");
    void CAMPUS_AREAS;
    const ok = (r) => {
      if (!r.ok) throw new Error(String(r.error));
      return r.db;
    };
    const report = (key, by, cat, desc, hAgo) => {
      const r = submitReport(db, { pointId: ids[key], reporterId: by, category: cat, description: desc, hasPhoto: false, allowDuplicate: true }, T - hAgo * HOUR);
      if (!r.ok) throw new Error(r.error);
      db = r.db;
      return r.report.id;
    };
    const closed = (key, by, cat, desc, daysAgo, outcome) => {
      const t = T - daysAgo * DAY;
      const id = report(key, by, cat, desc, daysAgo * 24);
      db = ok(startReview(db, id, ADMIN_ID, t + 1 * HOUR));
      if (outcome === "resolved") {
        db = ok(verifyReport(db, id, ADMIN_ID, t + 3 * HOUR));
        db = ok(resolveReport(db, id, ADMIN_ID, t + 20 * HOUR));
      } else db = ok(rejectReport(db, id, ADMIN_ID, "Could not reproduce the issue on inspection.", t + 5 * HOUR));
    };
    closed("b34a", R1, "empty", "Both coolers were empty right after the 12 o\u2019clock class break.", 13, "resolved");
    closed("b34b", R2, "not_flowing", "Tap gave no water for a long time.", 12, "resolved");
    closed("b27", R3, "leakage", "Small puddle near the cooler base.", 11, "resolved");
    closed("b38", R4, "cleaning", "Drip tray looked dirty.", 10, "resolved");
    closed("b32", R2, "not_functioning", "Display was blank, cooler was off.", 9, "resolved");
    closed("cc", R3, "location_incorrect", "Point is inside the food court, not outside as listed.", 8, "resolved");
    closed("b26", R1, "empty", "Cooler ran out around 1 pm.", 7, "resolved");
    closed("b36", R4, "other", "Tap handle is loose.", 6, "rejected");
    closed("b34a", R3, "empty", "Empty again after the lecture break.", 5, "resolved");
    closed("b25", R1, "not_flowing", "Water pressure very low.", 4, "resolved");
    closed("robo", R2, "cleaning", "Area around the walkway cooler is muddy.", 3, "resolved");
    closed("b37f4", R4, "leakage", "Slow drip under the cooler.", 2, "resolved");
    const b33 = report("b33", R2, "not_flowing", "No water from the cold tap.", 52);
    db = ok(startReview(db, b33, ADMIN_ID, T - 50 * HOUR));
    db = ok(verifyReport(db, b33, ADMIN_ID, T - 40 * HOUR));
    db = ok(resolveReport(db, b33, ADMIN_ID, T - 20 * HOUR, "Supply line reconnected."));
    const b28 = report("b28", R3, "not_functioning", "Cooler is switched off and the display is blank.", 30);
    db = ok(startReview(db, b28, ADMIN_ID, T - 26 * HOUR));
    db = ok(verifyReport(db, b28, ADMIN_ID, T - 20 * HOUR, "Confirmed on inspection. Technician requested."));
    const b32 = report("b32", R1, "cleaning", "Floor around cooler looks untidy.", 8);
    db = ok(rejectReport(db, b32, ADMIN_ID, "Area was cleaned before staff arrived; nothing to action.", T - 6 * HOUR));
    report("b34a", R2, "empty", "Cooler appears empty.", 20);
    db = ok(confirmWorking(db, ids.b34b, R3, T - 2 * HOUR));
    report("b34b", R1, "not_flowing", "No water coming out right now.", 1.5);
    const b26 = report("b26", R3, "leakage", "Water pooling on the floor beside the cooler.", 4);
    db = ok(startReview(db, b26, ADMIN_ID, T - 3 * HOUR));
    report("bh5", R4, "empty", "Station is empty after the evening football game.", 0.8);
    const fine = [
      ["b27", R1, 1],
      ["b25", R2, 3],
      ["b25", R3, 2.5],
      ["cc", R1, 5],
      ["b37", R2, 0.6],
      ["b38", R3, 2],
      ["b36f4", R4, 1.4],
      ["b25f4", R1, 0.9],
      ["b26f4", R2, 3.5],
      ["b27f4", R3, 4.2],
      ["b32f4", R4, 2.8],
      ["b33f4", R1, 1.1],
      ["b34f4", R2, 0.4],
      ["robo", R3, 1.7],
      ["gate", R4, 2.2],
      ["bh4", R1, 3.1],
      ["f34", R2, 4.6],
      ["b38f4", R3, 5.1]
    ];
    for (const [k, u, h] of fine) db = ok(confirmWorking(db, ids[k], u, T - h * HOUR));
    const d = clone(db);
    d.points.forEach((x) => x.isDemo = true);
    d.reports.forEach((x) => x.isDemo = true);
    d.statusUpdates.forEach((x) => x.isDemo = true);
    d.activities.forEach((x) => x.isDemo = true);
    d.notifications = [];
    d.follows = [];
    d.settings.seededAt = T;
    return d;
  }

  // src/router.ts
  var import_react = __toESM(require_react(), 1);
  var parse = () => {
    const raw = location.hash.replace(/^#/, "") || "/";
    const [path, qs] = raw.split("?");
    return { path, parts: path.split("/").filter(Boolean), params: new URLSearchParams(qs ?? "") };
  };
  function useRoute() {
    const [r, setR] = (0, import_react.useState)(parse);
    (0, import_react.useEffect)(() => {
      const on = () => {
        setR(parse());
        window.scrollTo({ top: 0 });
      };
      window.addEventListener("hashchange", on);
      return () => window.removeEventListener("hashchange", on);
    }, []);
    return r;
  }
  var href = (p) => `#${p}`;
  var go = (p) => {
    location.hash = p;
  };
  var depth = 0;
  if (typeof window !== "undefined") window.addEventListener("hashchange", () => {
    depth += 1;
  });
  function useBack(fallback) {
    return (0, import_react.useCallback)(() => {
      if (depth > 0) history.back();
      else go(fallback);
    }, [fallback]);
  }

  // src/store.tsx
  var ADMIN_USER = "admin";
  var ADMIN_PASS = "water@123";
  var PREF_KEY = "waterpoint:v1:prefs";
  var defaultPrefs = { theme: "dark", role: "student", areaId: "b34", demoStep: 0, demoDone: [], bannerHidden: false, onboarded: false };
  var loadPrefs = () => {
    try {
      return { ...defaultPrefs, ...JSON.parse(localStorage.getItem(PREF_KEY) || "{}") };
    } catch {
      return defaultPrefs;
    }
  };
  var C = (0, import_react2.createContext)(null);
  var useApp = () => (0, import_react2.useContext)(C);
  function Provider({ children }) {
    const [db, setDb] = (0, import_react2.useState)(null);
    const [loading, setLoading] = (0, import_react2.useState)(true);
    const [prefs, setPrefsState] = (0, import_react2.useState)(loadPrefs);
    const [toasts, setToasts] = (0, import_react2.useState)([]);
    const [tick, setTick] = (0, import_react2.useState)(Date.now());
    const [online, setOnline] = (0, import_react2.useState)(navigator.onLine);
    const [adminAuthed, setAuthed] = (0, import_react2.useState)(() => {
      try {
        return sessionStorage.getItem("waterpoint:admin") === "1";
      } catch {
        return false;
      }
    });
    const login = (0, import_react2.useCallback)((u, p) => {
      const ok = u.trim().toLowerCase() === ADMIN_USER && p === ADMIN_PASS;
      if (ok) {
        try {
          sessionStorage.setItem("waterpoint:admin", "1");
        } catch {
        }
        setAuthed(true);
      }
      return ok;
    }, []);
    const logout = (0, import_react2.useCallback)(() => {
      try {
        sessionStorage.removeItem("waterpoint:admin");
      } catch {
      }
      setAuthed(false);
      go("/");
    }, []);
    const dbRef = (0, import_react2.useRef)(null);
    dbRef.current = db;
    const tid = (0, import_react2.useRef)(1);
    (0, import_react2.useEffect)(() => {
      (async () => {
        let d = await repo.load();
        if (!d || d.version !== DB_VERSION) {
          d = buildSeed(Date.now());
          await repo.save(d).catch(() => {
          });
        }
        setDb(d);
        setLoading(false);
      })();
      const iv = setInterval(() => setTick(Date.now()), 3e4);
      const onStorage = async (e) => {
        if (e.key?.includes(":db")) {
          const d = await repo.load();
          if (d) setDb(d);
        }
      };
      const on = () => setOnline(true), off = () => setOnline(false);
      window.addEventListener("storage", onStorage);
      window.addEventListener("online", on);
      window.addEventListener("offline", off);
      return () => {
        clearInterval(iv);
        window.removeEventListener("storage", onStorage);
        window.removeEventListener("online", on);
        window.removeEventListener("offline", off);
      };
    }, []);
    (0, import_react2.useEffect)(() => {
      document.documentElement.dataset.theme = prefs.theme;
      try {
        localStorage.setItem(PREF_KEY, JSON.stringify(prefs));
      } catch {
      }
    }, [prefs]);
    const toast = (0, import_react2.useCallback)((kind, text) => {
      const id = tid.current++;
      setToasts((t) => [...t.slice(-3), { id, kind, text }]);
      setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), kind === "error" ? 6500 : 4200);
    }, []);
    const dismissToast = (0, import_react2.useCallback)((id) => setToasts((t) => t.filter((x) => x.id !== id)), []);
    const persist = (0, import_react2.useCallback)((next) => {
      setDb(next);
      dbRef.current = next;
      setTick(Date.now());
      repo.save(next).catch(() => toast("error", "Could not save to browser storage (it may be full or blocked). Changes will be lost on refresh."));
    }, [toast]);
    const offset = db?.settings.clockOffsetMs ?? 0;
    const now = tick + offset;
    const nowFresh = () => Date.now() + (dbRef.current?.settings.clockOffsetMs ?? 0);
    const setPrefs = (0, import_react2.useCallback)((p) => setPrefsState((x) => ({ ...x, ...p })), []);
    const role = prefs.role;
    const empty = (0, import_react2.useMemo)(() => emptyDb(0), []);
    const cur = db ?? empty;
    const user = cur.users.find((u) => u.id === (role === "admin" ? ADMIN_ID : STUDENT_ID)) ?? cur.users[0];
    const switchRole = (0, import_react2.useCallback)((r) => {
      setPrefsState((x) => ({ ...x, role: r }));
      go(r === "admin" ? "/admin" : "/");
    }, []);
    const submit = (0, import_react2.useCallback)(async (i) => {
      const res = submitReport(dbRef.current, { pointId: i.pointId, reporterId: STUDENT_ID, category: i.category, description: i.description, hasPhoto: !!i.photo, allowDuplicate: i.allowDuplicate }, nowFresh());
      if (res.ok) {
        if (i.photo) {
          try {
            await repo.putPhoto(res.report.id, i.photo);
          } catch {
            res.report.hasPhoto = false;
            res.db.reports.find((r) => r.id === res.report.id).hasPhoto = false;
            toast("info", "Report saved, but the photo was too large for browser storage and was skipped.");
          }
        }
        persist(res.db);
      }
      return res;
    }, [persist, toast]);
    const checkin = (0, import_react2.useCallback)((pointId) => {
      const r = confirmWorking(dbRef.current, pointId, STUDENT_ID, nowFresh());
      if (r.ok) {
        persist(r.db);
        toast("success", "Thanks \u2014 your \u201Cworking\u201D report was added. It counts for 6 hours.");
      } else toast("error", r.error);
    }, [persist, toast]);
    const follow = (0, import_react2.useCallback)((pointId) => {
      const was = dbRef.current.follows.some((f) => f.userId === STUDENT_ID && f.pointId === pointId);
      persist(toggleFollow(dbRef.current, STUDENT_ID, pointId));
      toast("success", was ? "You will no longer get alerts for this point." : "You will get an in-app alert when this point\u2019s status changes.");
    }, [persist, toast]);
    const admin = (0, import_react2.useCallback)((fn, okMsg) => {
      const r = fn(dbRef.current, ADMIN_ID, nowFresh());
      if (r.ok) {
        persist(r.db);
        if (okMsg) toast("success", okMsg);
        return true;
      }
      toast("error", r.error);
      return false;
    }, [persist, toast]);
    const markRead = (0, import_react2.useCallback)((ids) => persist(markNotifications(dbRef.current, user.id, ids)), [persist, user.id]);
    const clearNotifs = (0, import_react2.useCallback)(() => {
      persist(clearNotifications(dbRef.current, user.id));
      toast("success", "Notifications cleared.");
    }, [persist, user.id, toast]);
    const setOffset = (fn) => {
      const d = clone(dbRef.current);
      d.settings.clockOffsetMs = fn(d.settings.clockOffsetMs);
      persist(d);
    };
    const advanceClock = (0, import_react2.useCallback)((ms) => {
      setOffset((o) => o + ms);
      toast("info", `Simulated clock moved forward ${ms / 36e5} h. Statuses re-evaluated.`);
    }, [toast]);
    const resetClock = (0, import_react2.useCallback)(() => {
      setOffset(() => 0);
      toast("info", "Clock is back to real time.");
    }, [toast]);
    const resetDemo = (0, import_react2.useCallback)(async () => {
      await repo.clearAll();
      const d = buildSeed(Date.now());
      persist(d);
      setPrefsState((p) => ({ ...p, demoStep: 0, demoDone: [] }));
      toast("success", "Data reset to the original sample dataset.");
    }, [persist, toast]);
    const clearAllData = (0, import_react2.useCallback)(async () => {
      await repo.clearAll();
      const d = emptyDb(Date.now());
      persist(d);
      toast("success", "All records cleared. Add water points from the admin console.");
    }, [persist, toast]);
    const getPhoto = (0, import_react2.useCallback)((id) => repo.getPhoto(id), []);
    const value = {
      db: cur,
      now,
      loading,
      prefs,
      user,
      role,
      toasts,
      toast,
      dismissToast,
      setPrefs,
      switchRole,
      submit,
      checkin,
      follow,
      admin,
      markRead,
      clearNotifs,
      advanceClock,
      resetClock,
      resetDemo,
      clearAllData,
      getPhoto,
      online,
      adminAuthed,
      login,
      logout
    };
    return /* @__PURE__ */ React.createElement(C.Provider, { value }, children);
  }

  // src/ui/kit.tsx
  function cx(...a) {
    return a.filter(Boolean).join(" ");
  }
  function Button({ variant = "secondary", size = "md", icon, busy, children, className, disabled, ...r }) {
    return /* @__PURE__ */ React.createElement("button", { type: "button", ...r, disabled: disabled || busy, className: cx("btn", `btn-${variant}`, `btn-${size}`, className) }, busy ? /* @__PURE__ */ React.createElement("span", { className: "spinner", "aria-hidden": true }) : icon ? /* @__PURE__ */ React.createElement(Icon, { name: icon, size: size === "sm" ? 15 : 17 }) : null, children);
  }
  var Card = ({ children, className, pad: pad2 = true }) => /* @__PURE__ */ React.createElement("section", { className: cx("card", pad2 && "card-pad", className) }, children);
  var DemoTag = (_p) => null;
  var Tag = ({ children, tone = "neutral", icon }) => /* @__PURE__ */ React.createElement("span", { className: cx("tag", `tag-${tone}`) }, icon && /* @__PURE__ */ React.createElement(Icon, { name: icon, size: 12 }), children);
  var KIND_ICON = { available: "check-circle", attention: "alert", unavailable: "x-circle", unknown: "clock", resolved: "shield" };
  function StatusBadge({ s, size = "md" }) {
    return /* @__PURE__ */ React.createElement("span", { className: cx("status", `status-${s.kind}`, `status-${size}`, s.conflicting && "status-conflict") }, /* @__PURE__ */ React.createElement(Icon, { name: s.conflicting ? "alert" : KIND_ICON[s.kind], size: size === "lg" ? 18 : 14 }), /* @__PURE__ */ React.createElement("span", null, s.label), s.verified && /* @__PURE__ */ React.createElement("span", { className: "status-v", title: "Confirmed by an authorised admin" }, /* @__PURE__ */ React.createElement(Icon, { name: "shield", size: 12 }), " Verified"));
  }
  function Freshness({ s, now }) {
    const txt = s.updatedAt == null ? "No report on record" : `${s.freshness === "stale" ? "Outdated \xB7 " : ""}last report ${ago(s.updatedAt, now)}`;
    return /* @__PURE__ */ React.createElement("span", { className: cx("fresh", `fresh-${s.freshness}`) }, /* @__PURE__ */ React.createElement("span", { className: "fresh-dot" }), txt);
  }
  function Skeleton({ h = 16, w = "100%" }) {
    return /* @__PURE__ */ React.createElement("div", { className: "skeleton", style: { height: h, width: w } });
  }
  function EmptyState({ icon = "search", title, children, action }) {
    return /* @__PURE__ */ React.createElement("div", { className: "empty" }, /* @__PURE__ */ React.createElement("div", { className: "empty-ico" }, /* @__PURE__ */ React.createElement(Icon, { name: icon, size: 26 })), /* @__PURE__ */ React.createElement("h3", null, title), children && /* @__PURE__ */ React.createElement("p", null, children), action && /* @__PURE__ */ React.createElement("div", { className: "empty-act" }, action));
  }
  function Notice({ tone = "info", icon, children, title }) {
    const ic = icon ?? (tone === "warn" ? "alert" : tone === "danger" ? "x-circle" : tone === "ok" ? "check-circle" : "info");
    return /* @__PURE__ */ React.createElement("div", { className: cx("notice", `notice-${tone}`), role: tone === "danger" ? "alert" : void 0 }, /* @__PURE__ */ React.createElement(Icon, { name: ic, size: 18 }), /* @__PURE__ */ React.createElement("div", null, title && /* @__PURE__ */ React.createElement("strong", null, title), /* @__PURE__ */ React.createElement("div", null, children)));
  }
  function Segmented({ value, options, onChange, label }) {
    return /* @__PURE__ */ React.createElement("div", { className: "seg", role: "group", "aria-label": label }, options.map((o) => /* @__PURE__ */ React.createElement("button", { key: o.value, type: "button", disabled: o.disabled, "aria-pressed": value === o.value, className: cx("seg-i", value === o.value && "on"), onClick: () => onChange(o.value) }, o.icon && /* @__PURE__ */ React.createElement(Icon, { name: o.icon, size: 15 }), o.label)));
  }
  function Chips({ value, options, onChange, label }) {
    return /* @__PURE__ */ React.createElement("div", { className: "chips", role: "group", "aria-label": label }, options.map((o) => /* @__PURE__ */ React.createElement("button", { key: o.value, type: "button", "aria-pressed": value === o.value, className: cx("chip", value === o.value && "on"), onClick: () => onChange(o.value) }, o.label, o.count != null && /* @__PURE__ */ React.createElement("span", { className: "chip-n" }, o.count))));
  }
  function Field({ label, error, hint, children, htmlFor }) {
    return /* @__PURE__ */ React.createElement("div", { className: cx("field", error && "field-err") }, /* @__PURE__ */ React.createElement("label", { htmlFor }, label), children, hint && !error && /* @__PURE__ */ React.createElement("div", { className: "hint" }, hint), error && /* @__PURE__ */ React.createElement("div", { className: "err", role: "alert" }, /* @__PURE__ */ React.createElement(Icon, { name: "alert", size: 13 }), " ", error));
  }
  function useEsc(onClose, ref) {
    (0, import_react3.useEffect)(() => {
      const prev = document.activeElement;
      const el = ref.current;
      const focusable = () => Array.from(el?.querySelectorAll('button,[href],input,select,textarea,[tabindex]:not([tabindex="-1"])') ?? []).filter((x) => !x.hasAttribute("disabled"));
      (el?.querySelector("[data-autofocus]") ?? focusable()[0] ?? el)?.focus();
      const key = (e) => {
        if (e.key === "Escape") {
          e.stopPropagation();
          onClose();
        }
        if (e.key === "Tab") {
          const f = focusable();
          if (!f.length) return;
          const first = f[0], last = f[f.length - 1];
          if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
          } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      };
      document.addEventListener("keydown", key);
      document.body.classList.add("noscroll");
      return () => {
        document.removeEventListener("keydown", key);
        document.body.classList.remove("noscroll");
        prev?.focus?.();
      };
    }, []);
  }
  function Modal({ title, onClose, children, footer, wide }) {
    const ref = (0, import_react3.useRef)(null);
    useEsc(onClose, ref);
    return /* @__PURE__ */ React.createElement("div", { className: "overlay", onMouseDown: (e) => {
      if (e.target === e.currentTarget) onClose();
    } }, /* @__PURE__ */ React.createElement("div", { ref, className: cx("modal", wide && "modal-wide"), role: "dialog", "aria-modal": "true", "aria-label": title, tabIndex: -1 }, /* @__PURE__ */ React.createElement("header", { className: "modal-h" }, /* @__PURE__ */ React.createElement("h2", null, title), /* @__PURE__ */ React.createElement("button", { className: "icon-btn", "aria-label": "Close", onClick: onClose }, /* @__PURE__ */ React.createElement(Icon, { name: "x" }))), /* @__PURE__ */ React.createElement("div", { className: "modal-b" }, children), footer && /* @__PURE__ */ React.createElement("footer", { className: "modal-f" }, footer)));
  }
  function Drawer({ title, onClose, children, footer, side = "right" }) {
    const ref = (0, import_react3.useRef)(null);
    useEsc(onClose, ref);
    return /* @__PURE__ */ React.createElement("div", { className: "overlay overlay-drawer", onMouseDown: (e) => {
      if (e.target === e.currentTarget) onClose();
    } }, /* @__PURE__ */ React.createElement("div", { ref, className: cx("drawer", side === "bottom" && "drawer-bottom"), role: "dialog", "aria-modal": "true", "aria-label": title, tabIndex: -1 }, /* @__PURE__ */ React.createElement("header", { className: "modal-h" }, /* @__PURE__ */ React.createElement("h2", null, title), /* @__PURE__ */ React.createElement("button", { className: "icon-btn", "aria-label": "Close", onClick: onClose }, /* @__PURE__ */ React.createElement(Icon, { name: "x" }))), /* @__PURE__ */ React.createElement("div", { className: "modal-b" }, children), footer && /* @__PURE__ */ React.createElement("footer", { className: "modal-f" }, footer)));
  }
  function ConfirmDialog({ title, body, confirmLabel, danger, onConfirm, onClose }) {
    return /* @__PURE__ */ React.createElement(Modal, { title, onClose, footer: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Button, { variant: "ghost", onClick: onClose }, "Cancel"), /* @__PURE__ */ React.createElement(Button, { variant: danger ? "danger" : "primary", "data-autofocus": true, onClick: () => {
      onConfirm();
      onClose();
    } }, confirmLabel)) }, /* @__PURE__ */ React.createElement("div", { className: "stack" }, body));
  }
  function ToastHost() {
    const { toasts, dismissToast } = useApp();
    return /* @__PURE__ */ React.createElement("div", { className: "toasts", "aria-live": "polite" }, toasts.map((t) => /* @__PURE__ */ React.createElement("div", { key: t.id, className: cx("toast", `toast-${t.kind}`), role: t.kind === "error" ? "alert" : "status" }, /* @__PURE__ */ React.createElement(Icon, { name: t.kind === "success" ? "check-circle" : t.kind === "error" ? "alert" : "info", size: 18 }), /* @__PURE__ */ React.createElement("span", null, t.text), /* @__PURE__ */ React.createElement("button", { className: "icon-btn sm", "aria-label": "Dismiss", onClick: () => dismissToast(t.id) }, /* @__PURE__ */ React.createElement(Icon, { name: "x", size: 14 })))));
  }
  function PageHeader({ title, sub, back, actions }) {
    return /* @__PURE__ */ React.createElement("div", { className: "page-h" }, /* @__PURE__ */ React.createElement("div", { className: "page-h-l" }, back && /* @__PURE__ */ React.createElement("button", { className: "icon-btn", onClick: back, "aria-label": "Go back" }, /* @__PURE__ */ React.createElement(Icon, { name: "arrow-left" })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, title), sub && /* @__PURE__ */ React.createElement("p", { className: "sub" }, sub))), actions && /* @__PURE__ */ React.createElement("div", { className: "page-h-a" }, actions));
  }

  // src/student/Home.tsx
  var import_react7 = __toESM(require_react(), 1);

  // src/ui/shared.tsx
  var STATUS_ICON = { available: "droplet", resolved: "shield", attention: "alert", unavailable: "droplet-off", unknown: "clock" };
  function PointItem({ v, base = "" }) {
    const { now } = useApp();
    const { point: p, status: s } = v;
    return /* @__PURE__ */ React.createElement("button", { className: `pitem acc acc-${s.kind}`, onClick: () => go(`${base}/point/${p.id}`), "aria-label": `${p.name}. ${s.label}` }, /* @__PURE__ */ React.createElement("span", { className: `pi pi-${s.kind}` }, /* @__PURE__ */ React.createElement(Icon, { name: STATUS_ICON[s.kind], size: 20 })), /* @__PURE__ */ React.createElement("span", { className: "grow" }, /* @__PURE__ */ React.createElement("span", { className: "t" }, p.name, p.isDemo && /* @__PURE__ */ React.createElement(DemoTag, null)), /* @__PURE__ */ React.createElement("div", { className: "m" }, p.building, " \xB7 ", floorText(p), p.areaType !== "unverified" && p.areaType !== "outdoor" ? " \xB7 Indoor" : ""), v.distanceKm != null && /* @__PURE__ */ React.createElement("div", { className: "m", style: { marginTop: 2 } }, /* @__PURE__ */ React.createElement(Icon, { name: "navigation", size: 12 }), " ", fmtDist(v.distanceKm), " from you")), /* @__PURE__ */ React.createElement("span", { className: "side-r" }, /* @__PURE__ */ React.createElement(StatusBadge, { s, size: "sm" }), /* @__PURE__ */ React.createElement(Freshness, { s, now })));
  }
  var STATUS_STEPS = [
    { id: "submitted", label: "Submitted" },
    { id: "under_review", label: "Under review" },
    { id: "verified", label: "Verified / Rejected" },
    { id: "resolved", label: "Resolved" }
  ];
  function Stepper({ r }) {
    const idx = { submitted: 0, under_review: 1, verified: 2, rejected: 2, resolved: 3 }[r.status];
    return /* @__PURE__ */ React.createElement("div", { className: "stepper", role: "img", "aria-label": `Progress: ${r.status.replace("_", " ")}` }, STATUS_STEPS.map((s, i) => {
      const rejected = r.status === "rejected" && i === 2;
      const cls = rejected ? "bad" : i < idx ? "done" : i === idx ? r.status === "resolved" ? "ok" : r.status === "verified" ? "ok" : "now" : "";
      const lbl = rejected ? "Rejected" : i === 2 ? r.status === "verified" || r.status === "resolved" ? "Verified" : "Verification" : s.label;
      return /* @__PURE__ */ React.createElement("div", { key: s.id, className: `step ${cls}` }, lbl);
    }));
  }
  var REPORT_STATUS_LABEL = { submitted: "Submitted", under_review: "Under review", verified: "Verified", rejected: "Rejected", resolved: "Resolved" };
  var REPORT_TONE = { submitted: "amber", under_review: "blue", verified: "teal", rejected: "rose", resolved: "green" };
  var ReportStatusTag = ({ s }) => /* @__PURE__ */ React.createElement(Tag, { tone: REPORT_TONE[s] }, REPORT_STATUS_LABEL[s]);
  function ReportLine({ r, onClick }) {
    const { db, now } = useApp();
    const p = db.points.find((x) => x.id === r.waterPointId);
    return /* @__PURE__ */ React.createElement("button", { className: "pitem", onClick }, /* @__PURE__ */ React.createElement("span", { className: "pi pi-attention" }, /* @__PURE__ */ React.createElement(Icon, { name: categoryById(r.category).icon, size: 20 })), /* @__PURE__ */ React.createElement("span", { className: "grow" }, /* @__PURE__ */ React.createElement("span", { className: "t" }, categoryById(r.category).label), /* @__PURE__ */ React.createElement("div", { className: "m" }, p?.name ?? "Unknown point", " \xB7 ", ago(r.createdAt, now))), /* @__PURE__ */ React.createElement(ReportStatusTag, { s: r.status }));
  }

  // src/domain/status.ts
  var isAdmin = (u) => u.source.startsWith("admin");
  var isIssue = (u) => u.status === "NEEDS_ATTENTION" || u.status === "REPORTED_UNAVAILABLE";
  var kindOf = (u) => u.status === "REPORTED_UNAVAILABLE" ? "unavailable" : u.status === "NEEDS_ATTENTION" ? "attention" : u.status === "RESOLVED" ? "resolved" : "available";
  function updateLabel(u) {
    const k = kindOf(u);
    if (isAdmin(u)) {
      if (k === "unavailable") return "Verified out of service";
      if (k === "attention") return "Verified \u2014 needs attention";
      if (k === "resolved") return "Resolved by staff";
      return "Working (staff check)";
    }
    if (k === "unavailable") return "Reported out of service";
    if (k === "attention") return "Needs attention";
    return "Available";
  }
  function sourceLabel(u) {
    switch (u.source) {
      case "student_checkin":
        return "Student check-in";
      case "student_report":
        return "Student report (unverified)";
      case "admin_verified":
        return "Staff-verified report";
      case "admin_check":
        return "Staff status check";
      case "admin_resolved":
        return "Staff marked resolved";
    }
  }
  function freshnessOf(at, now, expiresAt) {
    if (at == null) return "none";
    if (expiresAt != null && expiresAt <= now) return "stale";
    return now - at <= RULES.freshWithin ? "fresh" : "ageing";
  }
  function deriveStatus(db, pointId, now) {
    const all = db.statusUpdates.filter((u) => u.waterPointId === pointId && !u.voided).sort((a, b) => b.createdAt - a.createdAt);
    const live = all.filter((u) => u.expiresAt == null || u.expiresAt > now);
    const expired = all.filter((u) => u.expiresAt != null && u.expiresAt <= now);
    const recentCount = all.filter((u) => now - u.createdAt <= RULES.recentWindow && !isAdmin(u)).length;
    const adminLive = live.filter(isAdmin);
    const studentLive = live.filter((u) => !isAdmin(u));
    const latestAdmin = adminLive[0];
    const unknown = () => {
      const lk = expired[0] ?? null;
      return {
        kind: "unknown",
        label: lk ? "Unknown \u2014 last report outdated" : "Unknown \u2014 no recent reports",
        verified: false,
        conflicting: false,
        freshness: lk ? "stale" : "none",
        updatedAt: lk ? lk.createdAt : null,
        expiresAt: lk?.expiresAt ?? null,
        source: lk ? "Outdated report" : "No report on record",
        explanation: lk ? `The most recent update ("${updateLabel(lk)}") is older than its validity window, so it is no longer treated as current.` : "No report has been recorded for this point recently. The status is not known.",
        lastKnown: lk ? { label: updateLabel(lk), at: lk.createdAt } : null,
        recentCount,
        pendingNewer: 0,
        basis: lk ? [lk] : []
      };
    };
    if (latestAdmin && isIssue(latestAdmin)) {
      const newer = studentLive.filter((u) => u.createdAt > latestAdmin.createdAt && u.source === "student_report").length;
      const k = kindOf(latestAdmin);
      return {
        kind: k,
        label: updateLabel(latestAdmin),
        verified: true,
        conflicting: false,
        freshness: freshnessOf(latestAdmin.createdAt, now, null),
        updatedAt: latestAdmin.createdAt,
        expiresAt: null,
        source: sourceLabel(latestAdmin),
        explanation: "An authorised admin confirmed this condition. It stays in place until staff mark it resolved.",
        lastKnown: null,
        recentCount,
        pendingNewer: newer,
        basis: [latestAdmin],
        note: latestAdmin.note
      };
    }
    const studentIssues = studentLive.filter(isIssue);
    const newerIssues = latestAdmin ? studentIssues.filter((u) => u.createdAt > latestAdmin.createdAt) : studentIssues;
    if (latestAdmin && newerIssues.length === 0) {
      const k = kindOf(latestAdmin);
      return {
        kind: k,
        label: updateLabel(latestAdmin),
        verified: true,
        conflicting: false,
        freshness: freshnessOf(latestAdmin.createdAt, now, latestAdmin.expiresAt),
        updatedAt: latestAdmin.createdAt,
        expiresAt: latestAdmin.expiresAt,
        source: sourceLabel(latestAdmin),
        explanation: k === "resolved" ? "Staff marked the earlier issue resolved. This notice expires automatically and does not guarantee current availability." : "Staff checked this point. The result expires automatically.",
        lastKnown: null,
        recentCount,
        pendingNewer: 0,
        basis: [latestAdmin],
        note: latestAdmin.note
      };
    }
    const studentOk = studentLive.filter((u) => u.status === "AVAILABLE");
    if (studentIssues.length === 0 && studentOk.length === 0) return unknown();
    const conflicting = studentIssues.length > 0 && studentOk.length > 0;
    const issueUpdates = latestAdmin ? newerIssues : studentIssues;
    let kind;
    let label;
    let basis;
    if (issueUpdates.length > 0) {
      const unavailable = issueUpdates.some((u) => u.status === "REPORTED_UNAVAILABLE");
      kind = unavailable ? "unavailable" : "attention";
      label = conflicting ? "Conflicting reports" : unavailable ? "Reported out of service" : "Needs attention";
      basis = [...issueUpdates, ...conflicting ? studentOk : []].sort((a, b) => b.createdAt - a.createdAt);
    } else {
      kind = "available";
      label = "Available";
      basis = studentOk;
    }
    const latest = basis[0];
    const exp = Math.max(...basis.map((u) => u.expiresAt ?? 0));
    const n = basis.length;
    const explanation = conflicting ? "Conflicting reports \u2014 verification needed. Some students reported a problem and others reported it working." : kind === "available" ? `${n} recent student check-in${n > 1 ? "s" : ""} said this point was working. Not verified by staff.` : `${n} recent student report${n > 1 ? "s" : ""} indicate a possible issue. Not yet verified by staff.` + (latestAdmin ? " This report is newer than the last staff record." : "");
    return {
      kind,
      label,
      verified: false,
      conflicting,
      freshness: freshnessOf(latest.createdAt, now, latest.expiresAt),
      updatedAt: latest.createdAt,
      expiresAt: exp || null,
      source: conflicting ? "Mixed student reports" : kind === "available" ? "Student check-in" : "Student report (unverified)",
      explanation,
      lastKnown: null,
      recentCount,
      pendingNewer: 0,
      basis
    };
  }
  var KIND_ORDER = ["available", "attention", "unavailable", "unknown", "resolved"];
  var KIND_NAME = {
    available: "Available",
    attention: "Needs attention",
    unavailable: "Reported out of service",
    unknown: "Unknown / stale",
    resolved: "Resolved"
  };

  // src/domain/selectors.ts
  var norm = (s) => s.toLowerCase().replace(/[-_.,]/g, " ").replace(/\s+/g, " ").trim();
  function pointViews(db, now, includeInactive = false, origin = null) {
    return db.points.filter((p) => includeInactive || p.active).map((point) => ({
      point,
      status: deriveStatus(db, point.id, now),
      distanceKm: origin && point.latitude != null && point.longitude != null ? haversineKm(origin, { lat: point.latitude, lng: point.longitude }) : null
    }));
  }
  var floorWords = (p) => {
    const f = `${p.floor ?? ""}`.toLowerCase();
    const m = f.match(/\d+/);
    return m ? `floor ${m[0]} ${m[0]}th ${m[0]}nd ${m[0]}st ${m[0]}rd ${f}` : f;
  };
  var pointHay = (p) => norm(`${p.name} ${p.building} ${p.id} ${areaById(p.areaId)?.keywords.join(" ") ?? ""} ${floorWords(p)} ${p.areaType}`);
  var areaHay = (a) => norm(`${a.name} ${a.keywords.join(" ")}`);
  var tokensOf = (q) => norm(q).split(" ").filter(Boolean).filter((t) => !["block", "blocks", "floor", "the", "near", "at"].includes(t) || norm(q).split(" ").length === 1);
  function pointMatches(p, q) {
    const t = tokensOf(q);
    if (!t.length) return true;
    const hay = pointHay(p);
    return t.every((x) => hay.includes(x));
  }
  function areaMatches(a, q) {
    const t = tokensOf(q);
    if (!t.length) return true;
    const hay = areaHay(a);
    return t.every((x) => hay.includes(x));
  }
  function discover(db, now, f) {
    let views = pointViews(db, now, false, f.origin).filter((v) => pointMatches(v.point, f.q));
    if (f.status !== "all") views = views.filter((v) => v.status.kind === f.status);
    if (f.type !== "all") views = views.filter((v) => v.point.areaType === f.type);
    const cmp = (a, b) => {
      if (f.sort === "distance" && a.distanceKm != null && b.distanceKm != null) return a.distanceKm - b.distanceKm;
      if (f.sort === "updated") return (b.status.updatedAt ?? 0) - (a.status.updatedAt ?? 0);
      return a.point.name.localeCompare(b.point.name, void 0, { numeric: true });
    };
    views.sort(cmp);
    const filtering = f.status !== "all" || f.type !== "all";
    const groups = [];
    const usedAreas = new Set(views.map((v) => v.point.areaId));
    for (const a of CAMPUS_AREAS) {
      const items = views.filter((v) => v.point.areaId === a.id);
      const showEmpty = !filtering && items.length === 0 && a.id !== "other" && areaMatches(a, f.q) && !db.points.some((p) => p.areaId === a.id && p.active);
      if (items.length || showEmpty) groups.push({ area: a, items });
    }
    void usedAreas;
    return { groups, total: views.length };
  }
  function suggestions(db, q, now) {
    const t = norm(q);
    if (!t) return [];
    const out = [];
    CAMPUS_AREAS.filter((a) => a.id !== "other" && areaMatches(a, q)).slice(0, 4).forEach((a) => {
      const n = db.points.filter((p) => p.areaId === a.id && p.active).length;
      out.push({ kind: "area", label: a.name, sub: n ? `${n} registered point${n > 1 ? "s" : ""}` : "No water point yet", q: a.short });
    });
    db.points.filter((p) => p.active && pointMatches(p, q)).slice(0, 4).forEach((p) => out.push({ kind: "point", label: p.name, sub: `${p.building} \xB7 ${floorText(p)}`, pointId: p.id }));
    void now;
    return out.slice(0, 7);
  }
  var centerOf = (db, pointId, areaId) => {
    const p = pointId ? db.points.find((x) => x.id === pointId) : void 0;
    if (p && p.latitude != null && p.longitude != null) return { lat: p.latitude, lng: p.longitude };
    const a = areaId ? areaById(areaId) : void 0;
    return a ? a.center : null;
  };
  function alternativesFor(db, now, pointId, areaId, origin = null) {
    const self = pointId ? db.points.find((p) => p.id === pointId) : void 0;
    const aId = self?.areaId ?? areaId;
    const ref = origin ?? centerOf(db, pointId, areaId);
    const penalty = { available: 0, resolved: 0, unknown: 0.12, attention: 0.25, unavailable: 99 };
    return pointViews(db, now, false, origin).filter((v) => v.point.id !== pointId && v.status.kind !== "unavailable").map((view) => {
      const p = view.point;
      const km = ref && p.latitude != null && p.longitude != null ? haversineKm(ref, { lat: p.latitude, lng: p.longitude }) : null;
      let reason = km != null ? `About ${fmtDist(km)} ${origin ? "from you" : "from here"} in a straight line.` : "Another registered water point.";
      if (aId && p.areaId === aId) reason = `Same building \u2014 ${p.floor ? ordinal(p.floor) + " floor" : "different point"}${km != null ? `, about ${fmtDist(km)} away` : ""}.`;
      const st = view.status.kind === "available" ? " Recently reported working." : view.status.kind === "unknown" ? " Status not recently reported." : view.status.kind === "attention" ? " Has a reported issue." : view.status.kind === "resolved" ? " Issue recently resolved by staff." : "";
      return { view, reason: reason + st, fromKm: km, score: (km ?? 5) + penalty[view.status.kind] + (aId && p.areaId === aId ? -0.05 : 0) };
    }).sort((a, b) => a.score - b.score).slice(0, 5).map(({ view, reason, fromKm }) => ({ view, reason, fromKm }));
  }
  function adminStats(db, now) {
    const views = pointViews(db, now, true);
    const open = db.reports.filter(isOpenReport);
    return {
      totalPoints: db.points.length,
      activePoints: db.points.filter((p) => p.active).length,
      recentAvailability: views.filter((v) => v.point.active && v.status.kind === "available").length,
      unresolved: new Set(open.map((r) => r.waterPointId)).size,
      unresolvedReports: open.length,
      awaiting: db.reports.filter((r) => r.status === "submitted" || r.status === "under_review").length,
      resolved: db.reports.filter((r) => r.status === "resolved").length,
      totalReports: db.reports.length
    };
  }
  function analytics(db, now, includeDemo) {
    const reports = db.reports.filter((r) => includeDemo || !r.isDemo);
    const byCat = /* @__PURE__ */ new Map(), byBuilding = /* @__PURE__ */ new Map(), byStatus = /* @__PURE__ */ new Map();
    reports.forEach((r) => {
      const c = categoryById(r.category).label;
      byCat.set(c, (byCat.get(c) ?? 0) + 1);
      const b = db.points.find((p) => p.id === r.waterPointId)?.building ?? "Unknown";
      byBuilding.set(b, (byBuilding.get(b) ?? 0) + 1);
      byStatus.set(r.status, (byStatus.get(r.status) ?? 0) + 1);
    });
    const days = [];
    for (let i = 13; i >= 0; i--) {
      const t = now - i * DAY;
      days.push({ key: dayKey(t), label: new Date(t).toLocaleDateString("en-IN", { day: "numeric", month: "short" }), value: 0 });
    }
    reports.forEach((r) => {
      const d = days.find((x) => x.key === dayKey(r.createdAt));
      if (d) d.value += 1;
    });
    const sorted = (m) => [...m.entries()].map(([label, value]) => ({ label, value })).sort((a, b) => b.value - a.value);
    const resolved = reports.filter((r) => r.status === "resolved");
    const medianH = resolved.length ? (() => {
      const a = resolved.map((r) => (r.timeline.find((t) => t.status === "resolved").at - r.createdAt) / HOUR).sort((x, y) => x - y);
      return a[Math.floor(a.length / 2)];
    })() : null;
    return {
      total: reports.length,
      demoCount: reports.filter((r) => r.isDemo).length,
      byCategory: sorted(byCat),
      byBuilding: sorted(byBuilding),
      byStatus: ["submitted", "under_review", "verified", "rejected", "resolved"].map((s) => ({ label: s, value: byStatus.get(s) ?? 0 })),
      overTime: days,
      medianResolutionHours: medianH
    };
  }
  var RECENT_MS = RULES.recentWindow;

  // src/student/SearchBox.tsx
  var import_react4 = __toESM(require_react(), 1);
  function SearchBox({ value, onChange, onSubmit, autoFocus }) {
    const { db, now } = useApp();
    const [open, setOpen] = (0, import_react4.useState)(false);
    const [idx, setIdx] = (0, import_react4.useState)(-1);
    const id = (0, import_react4.useId)();
    const box = (0, import_react4.useRef)(null);
    const items = (0, import_react4.useMemo)(() => suggestions(db, value, now), [db, value, now]);
    (0, import_react4.useEffect)(() => {
      setIdx(-1);
    }, [value]);
    (0, import_react4.useEffect)(() => {
      const off = (e) => {
        if (!box.current?.contains(e.target)) setOpen(false);
      };
      document.addEventListener("mousedown", off);
      return () => document.removeEventListener("mousedown", off);
    }, []);
    const pick = (i) => {
      const s = items[i];
      if (!s) return;
      setOpen(false);
      if (s.pointId) go(`/point/${s.pointId}`);
      else {
        onChange(s.q ?? s.label);
        onSubmit(s.q ?? s.label);
      }
    };
    return /* @__PURE__ */ React.createElement("div", { className: "searchbox", ref: box }, /* @__PURE__ */ React.createElement(Icon, { name: "search", size: 20 }), /* @__PURE__ */ React.createElement(
      "input",
      {
        id: `${id}-in`,
        type: "search",
        autoFocus,
        autoComplete: "off",
        placeholder: "Where do you need a refill?",
        "aria-label": "Search water points by block, landmark or floor",
        role: "combobox",
        "aria-expanded": open && items.length > 0,
        "aria-controls": `${id}-list`,
        "aria-activedescendant": idx >= 0 ? `${id}-${idx}` : void 0,
        value,
        onChange: (e) => {
          onChange(e.target.value);
          setOpen(true);
        },
        onFocus: () => setOpen(true),
        onKeyDown: (e) => {
          if (e.key === "ArrowDown") {
            e.preventDefault();
            setOpen(true);
            setIdx((i) => Math.min(items.length - 1, i + 1));
          } else if (e.key === "ArrowUp") {
            e.preventDefault();
            setIdx((i) => Math.max(-1, i - 1));
          } else if (e.key === "Enter") {
            e.preventDefault();
            if (idx >= 0) pick(idx);
            else {
              setOpen(false);
              onSubmit(value);
            }
          } else if (e.key === "Escape") setOpen(false);
        }
      }
    ), value && /* @__PURE__ */ React.createElement("button", { className: "icon-btn clear", "aria-label": "Clear search", onClick: () => {
      onChange("");
      onSubmit("");
    } }, /* @__PURE__ */ React.createElement(Icon, { name: "x", size: 16 })), open && value.trim() && items.length > 0 && /* @__PURE__ */ React.createElement("div", { className: "suggest", id: `${id}-list`, role: "listbox" }, items.map((s, i) => /* @__PURE__ */ React.createElement("button", { key: i, id: `${id}-${i}`, role: "option", "aria-selected": idx === i, onMouseDown: (e) => e.preventDefault(), onClick: () => pick(i) }, /* @__PURE__ */ React.createElement("span", { className: "ico" }, /* @__PURE__ */ React.createElement(Icon, { name: s.kind === "area" ? "building" : "droplet", size: 16 })), /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("b", null, s.label), /* @__PURE__ */ React.createElement("small", null, s.sub))))));
  }

  // src/student/location.ts
  var import_react5 = __toESM(require_react(), 1);
  var state = { status: "idle", origin: null };
  var subs = /* @__PURE__ */ new Set();
  var set = (s) => {
    state = s;
    subs.forEach((f) => f());
  };
  function requestLocation() {
    if (!("geolocation" in navigator)) return set({ status: "unsupported", origin: null });
    set({ ...state, status: "asking" });
    navigator.geolocation.getCurrentPosition(
      (p) => set({ status: "granted", origin: { lat: p.coords.latitude, lng: p.coords.longitude } }),
      () => set({ status: "denied", origin: null }),
      { enableHighAccuracy: false, timeout: 8e3, maximumAge: 6e4 }
    );
  }
  function clearLocation() {
    set({ status: "idle", origin: null });
  }
  var useLocation = () => (0, import_react5.useSyncExternalStore)((f) => {
    subs.add(f);
    return () => subs.delete(f);
  }, () => state);

  // src/ui/fx.tsx
  var import_react6 = __toESM(require_react(), 1);
  function CountUp({ value, ms = 700 }) {
    const [v, setV] = (0, import_react6.useState)(0);
    const from = (0, import_react6.useRef)(0);
    (0, import_react6.useEffect)(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setV(value);
        return;
      }
      const start = performance.now(), a = from.current;
      let raf = 0;
      const tick = (t) => {
        const k = Math.min(1, (t - start) / ms), e = 1 - Math.pow(1 - k, 3);
        setV(Math.round(a + (value - a) * e));
        if (k < 1) raf = requestAnimationFrame(tick);
        else from.current = value;
      };
      raf = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(raf);
    }, [value, ms]);
    return /* @__PURE__ */ React.createElement(React.Fragment, null, v);
  }
  function Waves() {
    return /* @__PURE__ */ React.createElement("svg", { className: "waves", viewBox: "0 0 1200 160", preserveAspectRatio: "none", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("path", { className: "w1", d: "M0 80 C150 30 300 130 450 80 S750 30 900 80 1050 130 1200 80 V160 H0Z" }), /* @__PURE__ */ React.createElement("path", { className: "w2", d: "M0 100 C150 60 300 140 450 100 S750 60 900 100 1050 140 1200 100 V160 H0Z" }), /* @__PURE__ */ React.createElement("path", { className: "w3", d: "M0 120 C200 90 350 150 600 120 S1000 90 1200 120 V160 H0Z" }));
  }
  function StatusRing({ data, size = 132, label }) {
    const total = data.reduce((a, d) => a + d.value, 0) || 1, r = size / 2 - 10, c = 2 * Math.PI * r;
    let off = 0;
    return /* @__PURE__ */ React.createElement("svg", { width: size, height: size, viewBox: `0 0 ${size} ${size}`, role: "img", "aria-label": data.map((d) => `${d.name} ${d.value}`).join(", ") }, /* @__PURE__ */ React.createElement("circle", { cx: size / 2, cy: size / 2, r, fill: "none", stroke: "var(--surface-3)", strokeWidth: "13" }), data.filter((d) => d.value).map((d) => {
      const len = d.value / total * c;
      const el = /* @__PURE__ */ React.createElement("circle", { key: d.name, className: "ring-seg", cx: size / 2, cy: size / 2, r, fill: "none", stroke: d.color, strokeWidth: "13", strokeLinecap: "round", strokeDasharray: `${Math.max(len - 5, 1)} ${c}`, strokeDashoffset: -off, transform: `rotate(-90 ${size / 2} ${size / 2})` });
      off += len;
      return el;
    }), /* @__PURE__ */ React.createElement("text", { x: "50%", y: "50%", textAnchor: "middle", fontSize: "28", fontWeight: "800", fill: "var(--text)" }, total === 1 && !data.some((d) => d.value) ? 0 : data.reduce((a, d) => a + d.value, 0)), /* @__PURE__ */ React.createElement("text", { x: "50%", y: "63%", textAnchor: "middle", fontSize: "10.5", fill: "var(--text-3)" }, label));
  }
  function Confetti() {
    const colors = ["#22d3ee", "#34d399", "#2dd4bf", "#fbbf24", "#60a5fa", "#a78bfa"];
    return /* @__PURE__ */ React.createElement("div", { className: "confetti", "aria-hidden": "true" }, Array.from({ length: 26 }).map((_, i) => /* @__PURE__ */ React.createElement("i", { key: i, style: { left: `${i * 37 % 100}%`, background: colors[i % colors.length], animationDelay: `${i % 9 * 60}ms`, animationDuration: `${1100 + i % 5 * 220}ms`, transform: `rotate(${i * 47}deg)` } })));
  }

  // src/student/Home.tsx
  var RING = { available: "var(--ok)", attention: "var(--warn)", unavailable: "var(--bad)", unknown: "var(--mute)", resolved: "var(--accent)" };
  function Home() {
    const { db, now, user, prefs, setPrefs, loading } = useApp();
    const [q, setQ] = (0, import_react7.useState)("");
    const loc = useLocation();
    const h = new Date(now).getHours();
    const greet = h < 5 ? "Hello" : h < 12 ? "Good morning" : h < 17 ? "Good afternoon" : "Good evening";
    const views = (0, import_react7.useMemo)(() => pointViews(db, now, false, loc.origin), [db, now, loc.origin]);
    const area = areaById(prefs.areaId);
    const gpsNear = (0, import_react7.useMemo)(() => loc.origin ? views.filter((v) => v.distanceKm != null && v.distanceKm < 3).sort((a, b) => a.distanceKm - b.distanceKm) : [], [views, loc.origin]);
    const nearby = (0, import_react7.useMemo)(() => gpsNear.length ? gpsNear : area ? views.filter((v) => v.point.areaId === area.id) : [], [views, area, gpsNear]);
    const alts = (0, import_react7.useMemo)(() => area && nearby.length === 0 ? alternativesFor(db, now, null, area.id) : [], [db, now, area, nearby.length]);
    const followed = views.filter((v) => db.follows.some((f) => f.userId === user.id && f.pointId === v.point.id));
    const best = (0, import_react7.useMemo)(() => {
      const ok = views.filter((v) => v.status.kind === "available" || v.status.kind === "resolved");
      const ref = loc.origin ?? area?.center ?? null;
      if (!ref || !ok.length) return null;
      return ok.map((v) => ({ v, km: v.point.latitude != null ? haversineKm(ref, { lat: v.point.latitude, lng: v.point.longitude }) : 99 })).sort((a, b) => a.km - b.km)[0];
    }, [views, loc.origin, area]);
    const counts = KIND_ORDER.map((k) => ({ k, n: views.filter((v) => v.status.kind === k).length }));
    const recent = [...views].filter((v) => v.status.updatedAt != null).sort((a, b) => b.status.updatedAt - a.status.updatedAt).slice(0, 4);
    const issues = db.reports.filter((r) => isOpenReport(r) && now - r.createdAt < 3 * 24 * 36e5).sort((a, b) => b.createdAt - a.createdAt).slice(0, 4);
    if (loading) return /* @__PURE__ */ React.createElement("div", { className: "stack-lg" }, /* @__PURE__ */ React.createElement(Skeleton, { h: 180 }), /* @__PURE__ */ React.createElement(Skeleton, { h: 90 }), /* @__PURE__ */ React.createElement(Skeleton, { h: 220 }));
    return /* @__PURE__ */ React.createElement("div", { className: "stack-lg" }, /* @__PURE__ */ React.createElement("div", { className: "hero" }, /* @__PURE__ */ React.createElement(Waves, null), /* @__PURE__ */ React.createElement("div", { className: "row spread wrap", style: { marginBottom: 14, position: "relative", zIndex: 1 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "muted", style: { fontSize: 13 } }, greet, ","), /* @__PURE__ */ React.createElement("h1", { className: "grad" }, user.name))), /* @__PURE__ */ React.createElement("div", { style: { position: "relative", zIndex: 2 } }, /* @__PURE__ */ React.createElement(SearchBox, { value: q, onChange: setQ, onSubmit: (v) => go(`/find?q=${encodeURIComponent(v)}`) })), /* @__PURE__ */ React.createElement("div", { className: "row wrap", style: { marginTop: 14, position: "relative", zIndex: 1 } }, /* @__PURE__ */ React.createElement(Icon, { name: "map-pin", size: 16 }), /* @__PURE__ */ React.createElement("label", { htmlFor: "area-sel", className: "muted", style: { fontSize: 13 } }, "I\u2019m near"), /* @__PURE__ */ React.createElement("select", { id: "area-sel", className: "select", style: { width: "auto", minHeight: 36, padding: "4px 34px 4px 12px", backgroundPosition: "calc(100% - 18px) 15px, calc(100% - 13px) 15px" }, value: prefs.areaId, onChange: (e) => setPrefs({ areaId: e.target.value }) }, CAMPUS_AREAS.filter((a) => a.id !== "other").map((a) => /* @__PURE__ */ React.createElement("option", { key: a.id, value: a.id }, a.name))), /* @__PURE__ */ React.createElement(Button, { size: "sm", variant: loc.status === "granted" ? "primary" : "secondary", icon: "locate", busy: loc.status === "asking", onClick: () => loc.status === "granted" ? clearLocation() : requestLocation() }, loc.status === "granted" ? "Using my location" : "Use my location")), /* @__PURE__ */ React.createElement("div", { className: "hero-stats" }, /* @__PURE__ */ React.createElement("span", { className: "pill" }, /* @__PURE__ */ React.createElement("i", { style: { background: "var(--ok)" } }), counts.find((c) => c.k === "available").n, " available"), /* @__PURE__ */ React.createElement("span", { className: "pill" }, /* @__PURE__ */ React.createElement("i", { style: { background: "var(--bad)" } }), counts.find((c) => c.k === "unavailable").n, " reported out of service"), /* @__PURE__ */ React.createElement("span", { className: "pill" }, /* @__PURE__ */ React.createElement("i", { style: { background: "var(--mute)" } }), counts.find((c) => c.k === "unknown").n, " unknown"), /* @__PURE__ */ React.createElement("span", { className: "pill" }, /* @__PURE__ */ React.createElement(Icon, { name: "droplet", size: 13 }), views.length, " points registered"))), best && /* @__PURE__ */ React.createElement("button", { className: "best", onClick: () => go(`/point/${best.v.point.id}`) }, /* @__PURE__ */ React.createElement("span", { className: "best-ico" }, /* @__PURE__ */ React.createElement(Icon, { name: "droplet", size: 22 })), /* @__PURE__ */ React.createElement("span", { className: "grow" }, /* @__PURE__ */ React.createElement("small", null, loc.origin ? "Closest working point to you" : `Closest working point to ${area?.name ?? "you"}`), /* @__PURE__ */ React.createElement("b", null, best.v.point.name), /* @__PURE__ */ React.createElement("span", { className: "muted" }, floorText(best.v.point), " \xB7 about ", fmtDist(best.km), " away")), /* @__PURE__ */ React.createElement(Icon, { name: "arrow-right", size: 20 })), /* @__PURE__ */ React.createElement("nav", { className: "qa", "aria-label": "Quick actions" }, /* @__PURE__ */ React.createElement("a", { className: "primary", href: href("/find") }, /* @__PURE__ */ React.createElement("span", { className: "qi" }, /* @__PURE__ */ React.createElement(Icon, { name: "droplet", size: 20 })), /* @__PURE__ */ React.createElement("span", null, "Find Water", /* @__PURE__ */ React.createElement("small", null, "Search or browse the campus map"))), /* @__PURE__ */ React.createElement("a", { href: href("/report") }, /* @__PURE__ */ React.createElement("span", { className: "qi" }, /* @__PURE__ */ React.createElement(Icon, { name: "flag", size: 20 })), /* @__PURE__ */ React.createElement("span", null, "Report a Problem", /* @__PURE__ */ React.createElement("small", null, "Empty, leaking, not working\u2026"))), /* @__PURE__ */ React.createElement("a", { href: href("/find?view=list") }, /* @__PURE__ */ React.createElement("span", { className: "qi" }, /* @__PURE__ */ React.createElement(Icon, { name: "list", size: 20 })), /* @__PURE__ */ React.createElement("span", null, "View All Points", /* @__PURE__ */ React.createElement("small", null, views.length, " registered point", views.length === 1 ? "" : "s")))), /* @__PURE__ */ React.createElement("div", { className: "two" }, /* @__PURE__ */ React.createElement("div", { className: "stack-lg" }, /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement("div", { className: "card-h" }, /* @__PURE__ */ React.createElement("h2", null, gpsNear.length ? "Closest to you" : `Water points near ${area?.name ?? "you"}`), /* @__PURE__ */ React.createElement("a", { href: href(`/find?q=${encodeURIComponent(area?.short ?? "")}`) }, "See all")), nearby.length ? /* @__PURE__ */ React.createElement("div", { className: "plist" }, nearby.slice(0, 4).map((v) => /* @__PURE__ */ React.createElement(PointItem, { key: v.point.id, v }))) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Notice, { tone: "info", icon: "map-pin", title: "No point registered here yet" }, "There is no water point listed for ", area?.name ?? "this area", ". These nearby options may help."), alts.length > 0 && /* @__PURE__ */ React.createElement("div", { className: "plist", style: { marginTop: 12 } }, alts.slice(0, 3).map((a) => /* @__PURE__ */ React.createElement(PointItem, { key: a.view.point.id, v: a.view }))))), followed.length > 0 && /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement("div", { className: "card-h" }, /* @__PURE__ */ React.createElement("h2", null, "Points you follow")), /* @__PURE__ */ React.createElement("div", { className: "plist" }, followed.map((v) => /* @__PURE__ */ React.createElement(PointItem, { key: v.point.id, v })))), /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement("div", { className: "card-h" }, /* @__PURE__ */ React.createElement("h2", null, "Recently updated")), recent.length ? /* @__PURE__ */ React.createElement("div", { className: "plist" }, recent.map((v) => /* @__PURE__ */ React.createElement(PointItem, { key: v.point.id, v }))) : /* @__PURE__ */ React.createElement(EmptyState, { icon: "clock", title: "No updates yet" }, "Status updates appear here after students or staff report on a point."))), /* @__PURE__ */ React.createElement("div", { className: "stack-lg" }, /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement("div", { className: "card-h" }, /* @__PURE__ */ React.createElement("h2", null, "Campus status overview")), /* @__PURE__ */ React.createElement("div", { className: "row wrap", style: { gap: 18 } }, /* @__PURE__ */ React.createElement(StatusRing, { label: "points", data: counts.map((c) => ({ value: c.n, name: KIND_NAME[c.k], color: RING[c.k] })) }), /* @__PURE__ */ React.createElement("div", { className: "legend grow", style: { flexDirection: "column", gap: 8, minWidth: 150 } }, counts.map((c) => /* @__PURE__ */ React.createElement("span", { key: c.k }, /* @__PURE__ */ React.createElement("i", { className: `m-${c.k}` }), KIND_NAME[c.k], " ", /* @__PURE__ */ React.createElement("b", { style: { marginLeft: "auto" } }, c.n))))), /* @__PURE__ */ React.createElement("p", { className: "muted", style: { fontSize: 12, marginTop: 12 } }, "Counts of the ", views.length, " registered points, based on student reports and staff checks. Old reports expire into \u201CUnknown\u201D. This is not a live sensor feed.")), /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement("div", { className: "card-h" }, /* @__PURE__ */ React.createElement("h2", null, "Recently reported issues"), /* @__PURE__ */ React.createElement("a", { href: href("/activity") }, "My activity")), issues.length ? /* @__PURE__ */ React.createElement("div", { className: "plist" }, issues.map((r) => /* @__PURE__ */ React.createElement(ReportLine, { key: r.id, r, onClick: () => go(`/point/${r.waterPointId}`) }))) : /* @__PURE__ */ React.createElement(EmptyState, { icon: "check-circle", title: "No open issues" }, "Nothing is currently reported as a problem. If you spot one, report it.")))));
  }

  // src/student/Find.tsx
  var import_react9 = __toESM(require_react(), 1);

  // src/ui/CampusMap.tsx
  var import_react8 = __toESM(require_react(), 1);
  var TILE = 256;
  var MIN_Z = 14;
  var MAX_Z = 19;
  var project = (lat, lng, z) => {
    const s = TILE * 2 ** z, sin = Math.sin(lat * Math.PI / 180);
    return { x: (lng + 180) / 360 * s, y: (0.5 - Math.log((1 + sin) / (1 - sin)) / (4 * Math.PI)) * s };
  };
  var unproject = (x, y, z) => {
    const s = TILE * 2 ** z, n = Math.PI - 2 * Math.PI * y / s;
    return { lat: 180 / Math.PI * Math.atan(Math.sinh(n)), lng: x / s * 360 - 180 };
  };
  var ICON = { available: "droplet", resolved: "shield", attention: "alert", unavailable: "droplet-off", unknown: "clock" };
  function CampusMap({ points, selectedId, onSelect, user, focus, height = 520, interactive = true, children }) {
    const box = (0, import_react8.useRef)(null);
    const [size, setSize] = (0, import_react8.useState)({ w: 600, h: 400 });
    const [view, setView] = (0, import_react8.useState)({ lat: CAMPUS_CENTER.lat, lng: CAMPUS_CENTER.lng, z: 17 });
    const drag = (0, import_react8.useRef)(null);
    (0, import_react8.useEffect)(() => {
      const el = box.current;
      if (!el) return;
      const ro = new ResizeObserver(() => setSize({ w: el.clientWidth, h: el.clientHeight }));
      ro.observe(el);
      setSize({ w: el.clientWidth, h: el.clientHeight });
      return () => ro.disconnect();
    }, []);
    (0, import_react8.useEffect)(() => {
      if (focus) setView((v) => ({ lat: focus.lat, lng: focus.lng, z: focus.z ?? v.z }));
    }, [focus?.key]);
    const zoom = (0, import_react8.useCallback)((d, at2) => setView((v) => {
      const z = Math.max(MIN_Z, Math.min(MAX_Z, v.z + d));
      if (z === v.z) return v;
      if (!at2) return { ...v, z };
      const c2 = project(v.lat, v.lng, v.z), px = c2.x - size.w / 2 + at2.x, py = c2.y - size.h / 2 + at2.y, k = 2 ** (z - v.z);
      const n2 = unproject(px * k - at2.x + size.w / 2, py * k - at2.y + size.h / 2, z);
      return { ...n2, z };
    }), [size]);
    (0, import_react8.useEffect)(() => {
      const el = box.current;
      if (!el || !interactive) return;
      const wheel = (e) => {
        e.preventDefault();
        const r = el.getBoundingClientRect();
        zoom(e.deltaY < 0 ? 1 : -1, { x: e.clientX - r.left, y: e.clientY - r.top });
      };
      el.addEventListener("wheel", wheel, { passive: false });
      return () => el.removeEventListener("wheel", wheel);
    }, [zoom, interactive]);
    const c = project(view.lat, view.lng, view.z);
    const tl = { x: c.x - size.w / 2, y: c.y - size.h / 2 };
    const tiles = [];
    const n = 2 ** view.z;
    for (let tx = Math.floor(tl.x / TILE); tx <= Math.floor((tl.x + size.w) / TILE); tx++)
      for (let ty = Math.floor(tl.y / TILE); ty <= Math.floor((tl.y + size.h) / TILE); ty++)
        if (ty >= 0 && ty < n) tiles.push({ x: (tx % n + n) % n, y: ty, k: `${view.z}/${tx}/${ty}`, ...{ px: tx * TILE - tl.x, py: ty * TILE - tl.y } });
    const onDown = (e) => {
      if (!interactive) return;
      drag.current = { x: e.clientX, y: e.clientY, moved: false };
      e.currentTarget.setPointerCapture(e.pointerId);
    };
    const onMove = (e) => {
      const d = drag.current;
      if (!d) return;
      const dx = e.clientX - d.x, dy = e.clientY - d.y;
      if (Math.abs(dx) + Math.abs(dy) > 3) d.moved = true;
      d.x = e.clientX;
      d.y = e.clientY;
      setView((v) => {
        const p = project(v.lat, v.lng, v.z);
        const nn = unproject(p.x - dx, p.y - dy, v.z);
        return { ...v, lat: nn.lat, lng: nn.lng };
      });
    };
    const onUp = () => {
      drag.current = null;
    };
    const key = (e) => {
      const step = 60;
      const dir = { ArrowLeft: [-step, 0], ArrowRight: [step, 0], ArrowUp: [0, -step], ArrowDown: [0, step] };
      if (dir[e.key]) {
        e.preventDefault();
        const [dx, dy] = dir[e.key];
        setView((v) => {
          const p = project(v.lat, v.lng, v.z);
          const nn = unproject(p.x + dx, p.y + dy, v.z);
          return { ...v, lat: nn.lat, lng: nn.lng };
        });
      }
      if (e.key === "+" || e.key === "=") zoom(1);
      if (e.key === "-") zoom(-1);
    };
    const at = (lat, lng) => {
      const p = project(lat, lng, view.z);
      return { x: p.x - tl.x, y: p.y - tl.y };
    };
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "map",
        style: { height },
        ref: box,
        role: "application",
        "aria-label": "Campus map. Use arrow keys to pan, plus and minus to zoom.",
        tabIndex: 0,
        onPointerDown: onDown,
        onPointerMove: onMove,
        onPointerUp: onUp,
        onPointerCancel: onUp,
        onKeyDown: key,
        onDoubleClick: (e) => {
          const r = e.currentTarget.getBoundingClientRect();
          zoom(1, { x: e.clientX - r.left, y: e.clientY - r.top });
        }
      },
      /* @__PURE__ */ React.createElement("div", { className: "map-tiles" }, tiles.map((t) => /* @__PURE__ */ React.createElement("img", { key: t.k, className: "tile-img", alt: "", draggable: false, loading: "lazy", src: `https://tile.openstreetmap.org/${view.z}/${t.x}/${t.y}.png`, style: { left: t.px, top: t.py }, onError: (e) => {
        e.target.style.visibility = "hidden";
      } }))),
      points.filter((v) => v.point.latitude != null && v.point.longitude != null).map((v) => {
        const p = at(v.point.latitude, v.point.longitude);
        if (p.x < -40 || p.y < -40 || p.x > size.w + 40 || p.y > size.h + 40) return null;
        const sel = v.point.id === selectedId;
        return /* @__PURE__ */ React.createElement(
          "button",
          {
            key: v.point.id,
            className: `mk mk-${v.status.kind} ${sel ? "sel" : ""}`,
            style: { left: p.x, top: p.y, zIndex: sel ? 5 : 2 },
            title: `${v.point.name} \u2014 ${v.status.label}`,
            "aria-label": `${v.point.name}. ${v.status.label}`,
            "aria-pressed": sel,
            onPointerDown: (e) => e.stopPropagation(),
            onClick: (e) => {
              e.stopPropagation();
              onSelect?.(v.point.id);
            }
          },
          /* @__PURE__ */ React.createElement(Icon, { name: ICON[v.status.kind], size: 15, strokeWidth: 2.4 })
        );
      }),
      view.z >= 18 && points.filter((v) => v.point.latitude != null).map((v) => {
        const p = at(v.point.latitude, v.point.longitude);
        return /* @__PURE__ */ React.createElement("span", { key: `l${v.point.id}`, className: "mk-lbl", style: { left: p.x, top: p.y + 18 } }, v.point.name.replace(" \xB7 Water Point", "").replace(" \xB7 Water Station", ""));
      }),
      user && (() => {
        const p = at(user.lat, user.lng);
        return /* @__PURE__ */ React.createElement("span", { className: "me", style: { left: p.x, top: p.y }, title: "You are here" });
      })(),
      interactive && /* @__PURE__ */ React.createElement("div", { className: "map-ctl" }, /* @__PURE__ */ React.createElement("button", { "aria-label": "Zoom in", onClick: () => zoom(1) }, /* @__PURE__ */ React.createElement(Icon, { name: "plus", size: 18 })), /* @__PURE__ */ React.createElement("button", { "aria-label": "Zoom out", onClick: () => zoom(-1) }, /* @__PURE__ */ React.createElement(Icon, { name: "minus", size: 18 })), /* @__PURE__ */ React.createElement("button", { "aria-label": "Recenter on campus", onClick: () => setView({ lat: CAMPUS_CENTER.lat, lng: CAMPUS_CENTER.lng, z: 17 }) }, /* @__PURE__ */ React.createElement(Icon, { name: "locate", size: 17 }))),
      children && /* @__PURE__ */ React.createElement("div", { className: "map-card", onPointerDown: (e) => e.stopPropagation(), onDoubleClick: (e) => e.stopPropagation() }, children),
      /* @__PURE__ */ React.createElement("div", { className: "map-attr" }, "\xA9 ", /* @__PURE__ */ React.createElement("a", { href: "https://www.openstreetmap.org/copyright", target: "_blank", rel: "noreferrer" }, "OpenStreetMap"), " contributors")
    );
  }

  // src/student/Find.tsx
  function Find({ route }) {
    const { db, now, toast } = useApp();
    const loc = useLocation();
    const [q, setQ] = (0, import_react9.useState)(route.params.get("q") ?? "");
    const [applied, setApplied] = (0, import_react9.useState)(route.params.get("q") ?? "");
    const [view, setView] = (0, import_react9.useState)(route.params.get("view") === "list" ? "list" : "map");
    const [status, setStatus] = (0, import_react9.useState)("all");
    const [type, setType] = (0, import_react9.useState)("all");
    const [sort, setSort] = (0, import_react9.useState)("name");
    const [selected, setSelected] = (0, import_react9.useState)(null);
    const [focus, setFocus] = (0, import_react9.useState)(null);
    (0, import_react9.useEffect)(() => {
      const nq = route.params.get("q") ?? "";
      setQ(nq);
      setApplied(nq);
      const v = route.params.get("view");
      if (v) setView(v === "list" ? "list" : "map");
    }, [route.path, route.params.toString()]);
    (0, import_react9.useEffect)(() => {
      if (loc.origin && sort === "name") setSort("distance");
    }, [!!loc.origin]);
    (0, import_react9.useEffect)(() => {
      if (sort === "distance" && !loc.origin) setSort("name");
    }, [loc.origin, sort]);
    const f = { q: applied, status, type, sort, origin: loc.origin };
    const res = (0, import_react9.useMemo)(() => discover(db, now, f), [db, now, applied, status, type, sort, loc.origin]);
    const all = (0, import_react9.useMemo)(() => pointViews(db, now), [db, now]);
    const shown = (0, import_react9.useMemo)(() => res.groups.flatMap((g) => g.items), [res]);
    const counts = (k) => k === "all" ? all.length : all.filter((v) => v.status.kind === k).length;
    const filtering = !!applied || status !== "all" || type !== "all";
    const reset = () => {
      setQ("");
      setApplied("");
      setStatus("all");
      setType("all");
      setSort(loc.origin ? "distance" : "name");
    };
    (0, import_react9.useEffect)(() => {
      const pts = shown.filter((v) => v.point.latitude != null);
      if (applied && pts.length) setFocus({ lat: pts.reduce((a, v) => a + v.point.latitude, 0) / pts.length, lng: pts.reduce((a, v) => a + v.point.longitude, 0) / pts.length, z: pts.length === 1 ? 18 : 17, key: Date.now() });
    }, [applied]);
    const farAway = loc.origin && all.every((v) => v.distanceKm == null || v.distanceKm > 8);
    (0, import_react9.useEffect)(() => {
      if (loc.status === "granted") toast("success", "Location found. Showing distances to each point.");
      if (loc.status === "denied") toast("info", "Location permission was not granted. You can still pick a block from the list.");
      if (loc.status === "unsupported") toast("info", "This device cannot share its location. Pick a block from the list instead.");
    }, [loc.status]);
    const sel = shown.find((v) => v.point.id === selected);
    return /* @__PURE__ */ React.createElement("div", { className: "stack-lg" }, /* @__PURE__ */ React.createElement(PageHeader, { title: "Find water", sub: "Lovely Professional University, Phagwara \u2014 tap a pin to see its status." }), /* @__PURE__ */ React.createElement("div", { className: "filters" }, /* @__PURE__ */ React.createElement(SearchBox, { value: q, onChange: setQ, onSubmit: setApplied }), /* @__PURE__ */ React.createElement("div", { className: "filter-row" }, /* @__PURE__ */ React.createElement(Segmented, { label: "View", value: view, onChange: setView, options: [{ value: "map", label: "Map", icon: "map" }, { value: "list", label: "List", icon: "list" }] }), /* @__PURE__ */ React.createElement(Button, { size: "sm", variant: loc.status === "granted" ? "primary" : "secondary", icon: "locate", busy: loc.status === "asking", onClick: () => loc.status === "granted" ? clearLocation() : requestLocation() }, loc.status === "granted" ? "Using my location" : "Use my location"), /* @__PURE__ */ React.createElement("select", { className: "select", style: { width: "auto", minHeight: 36, padding: "2px 32px 2px 12px", backgroundPosition: "calc(100% - 16px) 15px, calc(100% - 11px) 15px" }, "aria-label": "Jump to a place", value: "", onChange: (e) => {
      const a = areaById(e.target.value);
      if (a) {
        setView("map");
        setFocus({ ...a.center, z: 18, key: Date.now() });
      }
    } }, /* @__PURE__ */ React.createElement("option", { value: "" }, "Jump to\u2026"), ["academic", "open", "hub"].map((z) => /* @__PURE__ */ React.createElement("optgroup", { key: z, label: ZONE_LABEL[z] }, CAMPUS_AREAS.filter((a) => a.zone === z).map((a) => /* @__PURE__ */ React.createElement("option", { key: a.id, value: a.id }, a.name))))), /* @__PURE__ */ React.createElement("label", { className: "row", style: { gap: 6, marginLeft: "auto" } }, /* @__PURE__ */ React.createElement("span", { className: "muted", style: { fontSize: 12.5 } }, "Sort"), /* @__PURE__ */ React.createElement("select", { className: "select", style: { width: "auto", minHeight: 34, padding: "2px 30px 2px 10px", backgroundPosition: "calc(100% - 16px) 14px, calc(100% - 11px) 14px" }, value: sort, onChange: (e) => setSort(e.target.value), "aria-label": "Sort points" }, /* @__PURE__ */ React.createElement("option", { value: "name" }, "Name"), /* @__PURE__ */ React.createElement("option", { value: "updated" }, "Recently updated"), /* @__PURE__ */ React.createElement("option", { value: "distance", disabled: !loc.origin }, "Nearest", loc.origin ? "" : " (turn on location)")))), /* @__PURE__ */ React.createElement(Chips, { label: "Filter by status", value: status, onChange: setStatus, options: [
      { value: "all", label: "All", count: counts("all") },
      { value: "available", label: "Available", count: counts("available") },
      { value: "attention", label: "Needs attention", count: counts("attention") },
      { value: "unavailable", label: "Out of service", count: counts("unavailable") },
      { value: "unknown", label: "Unknown / stale", count: counts("unknown") },
      { value: "resolved", label: "Resolved", count: counts("resolved") }
    ] }), /* @__PURE__ */ React.createElement(Chips, { label: "Filter by indoor or outdoor", value: type, onChange: setType, options: [{ value: "all", label: "Indoor + outdoor" }, { value: "indoor", label: "Indoor" }, { value: "outdoor", label: "Outdoor" }] })), farAway && /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement("p", { className: "sub", style: { margin: 0 } }, "You seem to be away from the campus, so distances are large. Use the area list or search to pick a block.")), !shown.length ? /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement(EmptyState, { icon: "search", title: applied ? `No water points match \u201C${applied}\u201D` : "No water points match these filters", action: /* @__PURE__ */ React.createElement(Button, { variant: "primary", onClick: reset }, "Clear search & filters") }, "Try a block number (", /* @__PURE__ */ React.createElement("b", null, "34"), "), a landmark (", /* @__PURE__ */ React.createElement("b", null, "Robo Park"), ", ", /* @__PURE__ */ React.createElement("b", null, "Main Gate"), ") or a floor (", /* @__PURE__ */ React.createElement("b", null, "2nd floor"), ")."), /* @__PURE__ */ React.createElement("div", { className: "empty-act" }, ["Block 34", "Robo Park", "Food Court", "BH-5"].map((s) => /* @__PURE__ */ React.createElement(Button, { size: "sm", key: s, onClick: () => go(`/find?q=${encodeURIComponent(s)}`) }, s)))) : view === "map" ? /* @__PURE__ */ React.createElement("div", { className: "map-layout" }, /* @__PURE__ */ React.createElement(CampusMap, { points: shown, selectedId: selected, onSelect: setSelected, user: loc.origin, focus, height: 560 }, sel && /* @__PURE__ */ React.createElement(SelCard, { v: sel, onClose: () => setSelected(null) })), /* @__PURE__ */ React.createElement("div", { className: "mapside", "aria-label": "Water points" }, /* @__PURE__ */ React.createElement("p", { className: "muted", style: { fontSize: 13 } }, shown.length, " water point", shown.length === 1 ? "" : "s", sel ? " \xB7 selected highlighted" : ""), (sel ? [sel, ...shown.filter((v) => v !== sel)] : shown).map((v) => /* @__PURE__ */ React.createElement("div", { key: v.point.id, className: v.point.id === selected ? "sel-wrap" : "" }, /* @__PURE__ */ React.createElement(PointItem, { v }))))) : /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "muted", style: { fontSize: 13, marginBottom: 12 } }, shown.length, " water point", shown.length === 1 ? "" : "s", " found ", filtering && /* @__PURE__ */ React.createElement(Tag, null, "filtered")), res.groups.filter((g) => g.items.length).map((g) => /* @__PURE__ */ React.createElement("div", { key: g.area.id, className: "grp" }, /* @__PURE__ */ React.createElement("div", { className: "group-h" }, g.area.name), /* @__PURE__ */ React.createElement("div", { className: "plist" }, g.items.map((v) => /* @__PURE__ */ React.createElement(PointItem, { key: v.point.id, v })))))));
  }
  function SelCard({ v, onClose }) {
    const { now } = useApp();
    const p = v.point;
    return /* @__PURE__ */ React.createElement("div", { className: "selcard" }, /* @__PURE__ */ React.createElement("div", { className: "row spread", style: { alignItems: "flex-start" } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("b", null, p.name), /* @__PURE__ */ React.createElement("div", { className: "muted", style: { fontSize: 12.5 } }, p.building, " \xB7 ", floorText(p), v.distanceKm != null && ` \xB7 ${fmtDist(v.distanceKm)} away`)), /* @__PURE__ */ React.createElement("button", { className: "icon-btn sm", "aria-label": "Close", onClick: onClose }, "\u2715")), /* @__PURE__ */ React.createElement("div", { className: "row wrap", style: { gap: 8, margin: "8px 0 10px" } }, /* @__PURE__ */ React.createElement(StatusBadge, { s: v.status, size: "sm" }), /* @__PURE__ */ React.createElement(Freshness, { s: v.status, now })), /* @__PURE__ */ React.createElement("div", { className: "row wrap", style: { gap: 6 } }, /* @__PURE__ */ React.createElement(Button, { size: "sm", variant: "primary", onClick: () => go(`/point/${p.id}`) }, "Details"), /* @__PURE__ */ React.createElement(Button, { size: "sm", onClick: () => go(`/report?point=${p.id}`) }, "Report"), p.latitude != null && /* @__PURE__ */ React.createElement("a", { className: "btn btn-secondary btn-sm", target: "_blank", rel: "noreferrer", href: `https://www.google.com/maps/dir/?api=1&destination=${p.latitude},${p.longitude}&travelmode=walking` }, "Directions")));
  }

  // src/student/PointDetail.tsx
  var import_react11 = __toESM(require_react(), 1);

  // src/student/Alternatives.tsx
  var import_react10 = __toESM(require_react(), 1);
  function Alternatives({ pointId, areaId }) {
    const { db, now } = useApp();
    const loc = useLocation();
    const alts = (0, import_react10.useMemo)(() => alternativesFor(db, now, pointId, areaId, loc.origin), [db, now, pointId, areaId, loc.origin]);
    if (!alts.length) return /* @__PURE__ */ React.createElement(EmptyState, { icon: "droplet-off", title: "No alternative registered" }, "No other active point is registered yet. Ask staff or check LPU\u2019s official water map.");
    return /* @__PURE__ */ React.createElement("div", { className: "stack" }, alts.map(({ view: v, reason }) => /* @__PURE__ */ React.createElement("button", { key: v.point.id, className: "alt", onClick: () => go(`/point/${v.point.id}`) }, /* @__PURE__ */ React.createElement("span", { className: `pi pi-${v.status.kind}`, style: { width: 36, height: 36, borderRadius: 11, display: "grid", placeItems: "center", flex: "none" } }, /* @__PURE__ */ React.createElement(Icon, { name: STATUS_ICON[v.status.kind], size: 18 })), /* @__PURE__ */ React.createElement("span", { className: "grow" }, /* @__PURE__ */ React.createElement("span", { className: "row wrap", style: { gap: 8 } }, /* @__PURE__ */ React.createElement("b", null, v.point.name), v.point.isDemo && /* @__PURE__ */ React.createElement(DemoTag, null)), /* @__PURE__ */ React.createElement("div", { className: "muted", style: { fontSize: 12.5 } }, v.point.building, " \xB7 ", floorText(v.point)), /* @__PURE__ */ React.createElement("div", { className: "row wrap", style: { gap: 8, marginTop: 6 } }, /* @__PURE__ */ React.createElement(StatusBadge, { s: v.status, size: "sm" }), /* @__PURE__ */ React.createElement(Freshness, { s: v.status, now })), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, "Why suggested:"), " ", reason)), /* @__PURE__ */ React.createElement(Icon, { name: "chevron", size: 18 }))));
  }

  // src/student/PointDetail.tsx
  function PointDetail({ id }) {
    const { db, now, checkin, follow, user, toast } = useApp();
    const back = useBack("/find");
    const p = db.points.find((x) => x.id === id);
    const s = (0, import_react11.useMemo)(() => p ? deriveStatus(db, p.id, now) : null, [db, p, now]);
    if (!p || !s) return /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement(EmptyState, { icon: "map-pin-off", title: "Water point not found", action: /* @__PURE__ */ React.createElement(Button, { variant: "primary", onClick: () => go("/find") }, "Back to Find water") }, "It may have been removed. Browse the list to pick another point."));
    const reports = db.reports.filter((r) => r.waterPointId === p.id).sort((a, b) => b.createdAt - a.createdAt);
    const week = Array.from({ length: 7 }, (_, i) => {
      const t = now - (6 - i) * 864e5;
      const k = new Date(t).toDateString();
      return { k, l: new Date(t).toLocaleDateString("en-IN", { weekday: "short" }), n: reports.filter((r) => new Date(r.createdAt).toDateString() === k).length };
    });
    const weekMax = Math.max(1, ...week.map((d) => d.n));
    const pending = reports.filter((r) => r.status === "submitted" || r.status === "under_review").length;
    const following = db.follows.some((f) => f.userId === user.id && f.pointId === p.id);
    const needsAlt = s.kind === "unavailable" || s.kind === "attention" || s.kind === "unknown";
    const ttlPct = s.updatedAt != null && s.expiresAt != null ? Math.max(0, Math.min(100, (s.expiresAt - now) / (s.expiresAt - s.updatedAt) * 100)) : null;
    const upd = s.updatedAt;
    const loc = useLocation();
    const hasGeo = p.latitude != null && p.longitude != null;
    const dist = hasGeo && loc.origin ? haversineKm(loc.origin, { lat: p.latitude, lng: p.longitude }) : null;
    return /* @__PURE__ */ React.createElement("div", { className: "stack-lg" }, /* @__PURE__ */ React.createElement(PageHeader, { back, title: p.name, sub: /* @__PURE__ */ React.createElement("span", { className: "row wrap", style: { gap: 8 } }, p.building, " \xB7 ", floorText(p), p.isDemo && /* @__PURE__ */ React.createElement(DemoTag, null)) }), !p.active && /* @__PURE__ */ React.createElement(Notice, { tone: "danger", title: "This point is deactivated" }, "It is not accepting reports and is hidden from search."), /* @__PURE__ */ React.createElement("div", { className: `detail-status ds-${s.conflicting ? "conflict" : s.kind}` }, /* @__PURE__ */ React.createElement("div", { className: "row wrap spread" }, /* @__PURE__ */ React.createElement("div", { className: "row", style: { gap: 14 } }, /* @__PURE__ */ React.createElement("span", { className: `orb orb-${s.conflicting ? "attention" : s.kind}` }, /* @__PURE__ */ React.createElement(Icon, { name: s.kind === "unavailable" ? "droplet-off" : s.kind === "unknown" ? "clock" : s.kind === "resolved" ? "shield" : s.kind === "attention" ? "alert" : "droplet", size: 26 })), /* @__PURE__ */ React.createElement(StatusBadge, { s, size: "lg" })), /* @__PURE__ */ React.createElement(Freshness, { s, now })), /* @__PURE__ */ React.createElement("p", { style: { marginTop: 12, color: "var(--text-2)" } }, s.explanation), s.conflicting && /* @__PURE__ */ React.createElement("div", { style: { marginTop: 12 } }, /* @__PURE__ */ React.createElement(Notice, { tone: "warn", title: "Conflicting reports \u2014 verification needed" }, "Students have reported both a problem and normal operation recently. Staff have not yet checked this point.")), s.lastKnown && /* @__PURE__ */ React.createElement("p", { className: "muted", style: { marginTop: 10, fontSize: 13 } }, "Last known: \u201C", s.lastKnown.label, "\u201D reported ", ago(s.lastKnown.at, now), " \u2014 now outdated."), s.pendingNewer > 0 && /* @__PURE__ */ React.createElement("div", { style: { marginTop: 12 } }, /* @__PURE__ */ React.createElement(Notice, { tone: "info" }, s.pendingNewer, " newer student report", s.pendingNewer > 1 ? "s" : "", " ", s.pendingNewer > 1 ? "are" : "is", " awaiting staff verification. The staff-verified status above stays in place until staff review ", s.pendingNewer > 1 ? "them" : "it", ".")), ttlPct != null && s.freshness !== "stale" && /* @__PURE__ */ React.createElement("div", { style: { marginTop: 14 } }, /* @__PURE__ */ React.createElement("div", { className: "row spread muted", style: { fontSize: 12, marginBottom: 6 } }, /* @__PURE__ */ React.createElement("span", null, "Status valid for another ", inFuture(s.expiresAt, now)), /* @__PURE__ */ React.createElement("span", null, "then becomes \u201CUnknown\u201D")), /* @__PURE__ */ React.createElement("div", { className: "bar" }, /* @__PURE__ */ React.createElement("i", { style: { width: `${ttlPct}%` } }))), /* @__PURE__ */ React.createElement("div", { className: "row wrap", style: { marginTop: 18 } }, /* @__PURE__ */ React.createElement(Button, { variant: "primary", icon: "flag", onClick: () => go(`/report?point=${p.id}`), disabled: !p.active }, "Report a problem"), /* @__PURE__ */ React.createElement(Button, { icon: "check-circle", onClick: () => checkin(p.id), disabled: !p.active }, "It\u2019s working"), /* @__PURE__ */ React.createElement(Button, { icon: "navigation", onClick: () => document.getElementById("alternatives")?.scrollIntoView({ behavior: "smooth" }) }, "Find an alternative"), /* @__PURE__ */ React.createElement(Button, { variant: "ghost", icon: "external", onClick: () => {
      const url = location.href;
      if (navigator.share) void navigator.share({ title: p.name, url }).catch(() => {
      });
      else void navigator.clipboard?.writeText(url).then(() => toast("success", "Link copied."));
    } }, "Share"), /* @__PURE__ */ React.createElement(Button, { variant: "ghost", icon: "bell", "aria-pressed": following, onClick: () => follow(p.id) }, following ? "Following" : "Follow"))), /* @__PURE__ */ React.createElement(Notice, { icon: "info" }, "Status is based on recent reports and does not guarantee current availability or water quality."), /* @__PURE__ */ React.createElement("div", { className: "two" }, /* @__PURE__ */ React.createElement("div", { className: "stack-lg" }, /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement("div", { className: "card-h" }, /* @__PURE__ */ React.createElement("h2", null, "Details")), /* @__PURE__ */ React.createElement("dl", { className: "dl" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("dt", null, "Point"), /* @__PURE__ */ React.createElement("dd", null, p.name, " ", /* @__PURE__ */ React.createElement("span", { className: "mono muted" }, "(", p.id, ")"))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("dt", null, "Building / landmark"), /* @__PURE__ */ React.createElement("dd", null, p.building)), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("dt", null, "Floor"), /* @__PURE__ */ React.createElement("dd", null, floorText(p))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("dt", null, "Indoor / outdoor"), /* @__PURE__ */ React.createElement("dd", null, p.areaType === "outdoor" ? "Outdoor" : "Indoor")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("dt", null, "Location"), /* @__PURE__ */ React.createElement("dd", null, p.locationVerified ? /* @__PURE__ */ React.createElement(Tag, { tone: "green", icon: "shield" }, "Confirmed") : /* @__PURE__ */ React.createElement(Tag, null, "Approximate"), p.latitude != null && /* @__PURE__ */ React.createElement("span", { className: "muted mono", style: { marginLeft: 8, fontSize: 12 } }, p.latitude.toFixed(5), ", ", p.longitude.toFixed(5)))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("dt", null, "Recent reports (24 h)"), /* @__PURE__ */ React.createElement("dd", null, s.recentCount)), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("dt", null, "Last reported update"), /* @__PURE__ */ React.createElement("dd", null, upd ? `${fmtDateTime(upd)} (${ago(upd, now)})` : "No report on record")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("dt", null, "Pending verification"), /* @__PURE__ */ React.createElement("dd", null, pending, " report", pending === 1 ? "" : "s")))), hasGeo && /* @__PURE__ */ React.createElement(Card, { pad: false }, /* @__PURE__ */ React.createElement(CampusMap, { points: [{ point: p, status: s, distanceKm: dist }], selectedId: p.id, focus: { lat: p.latitude, lng: p.longitude, z: 18, key: 1 }, user: loc.origin, height: 240 }), /* @__PURE__ */ React.createElement("div", { className: "row wrap spread", style: { padding: 14 } }, /* @__PURE__ */ React.createElement("span", { className: "muted", style: { fontSize: 13 } }, dist != null ? `${fmtDist(dist)} from you (straight line)` : "Turn on \u201CUse my location\u201D in Find to see the distance."), /* @__PURE__ */ React.createElement("a", { className: "btn btn-primary btn-sm", target: "_blank", rel: "noreferrer", href: `https://www.google.com/maps/dir/?api=1&destination=${p.latitude},${p.longitude}&travelmode=walking` }, "Get directions"))), /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement("div", { className: "card-h" }, /* @__PURE__ */ React.createElement("h2", null, "Where this status comes from")), s.basis.length ? /* @__PURE__ */ React.createElement("div", { className: "prov" }, s.basis.map((u) => {
      const expired = u.expiresAt != null && u.expiresAt <= now;
      return /* @__PURE__ */ React.createElement("div", { className: "prov-i", key: u.id }, /* @__PURE__ */ React.createElement(Icon, { name: u.source.startsWith("admin") ? "shield" : "users", size: 18 }), /* @__PURE__ */ React.createElement("div", { className: "grow" }, /* @__PURE__ */ React.createElement("b", null, updateLabel(u)), /* @__PURE__ */ React.createElement("div", { className: "muted", style: { fontSize: 12.5 } }, sourceLabel(u), " \xB7 ", fmtDateTime(u.createdAt), " (", ago(u.createdAt, now), ")")), /* @__PURE__ */ React.createElement(Tag, { tone: expired ? "rose" : u.expiresAt == null ? "teal" : "neutral" }, expired ? "Expired" : u.expiresAt == null ? "Until resolved" : `Valid ${inFuture(u.expiresAt, now)}`));
    })) : /* @__PURE__ */ React.createElement("p", { className: "muted" }, "No report currently supports a status for this point, so it is shown as Unknown."), /* @__PURE__ */ React.createElement("p", { className: "muted", style: { fontSize: 12, marginTop: 10 } }, "Student reports expire after ", RULES.reportTtl / 36e5, " h and check-ins after ", RULES.checkinTtl / 36e5, " h. These are crowdsourced reports, not sensor readings.")), /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement("div", { className: "card-h" }, /* @__PURE__ */ React.createElement("h2", null, "Reports in the last 7 days")), /* @__PURE__ */ React.createElement("div", { className: "week", role: "img", "aria-label": "Reports per day, last 7 days" }, week.map((d) => /* @__PURE__ */ React.createElement("div", { key: d.k, className: "week-d" }, /* @__PURE__ */ React.createElement("div", { className: "week-b" }, /* @__PURE__ */ React.createElement("i", { style: { height: `${Math.max(d.n ? 14 : 4, d.n / weekMax * 100)}%` }, className: d.n ? "on" : "" })), /* @__PURE__ */ React.createElement("small", null, d.l), /* @__PURE__ */ React.createElement("b", null, d.n))))), /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement("div", { className: "card-h" }, /* @__PURE__ */ React.createElement("h2", null, "Report history")), reports.length ? /* @__PURE__ */ React.createElement("ul", { className: "feed" }, reports.slice(0, 6).map((r) => /* @__PURE__ */ React.createElement("li", { key: r.id }, /* @__PURE__ */ React.createElement("span", { className: "fi" }, /* @__PURE__ */ React.createElement(Icon, { name: categoryById(r.category).icon, size: 16 })), /* @__PURE__ */ React.createElement("div", { className: "grow" }, /* @__PURE__ */ React.createElement("b", null, categoryById(r.category).label), /* @__PURE__ */ React.createElement("small", null, ago(r.createdAt, now), " \xB7 ", /* @__PURE__ */ React.createElement("span", { className: "mono" }, r.id))), /* @__PURE__ */ React.createElement(ReportStatusTag, { s: r.status })))) : /* @__PURE__ */ React.createElement("p", { className: "muted" }, "No reports for this point yet."))), /* @__PURE__ */ React.createElement("div", { id: "alternatives", className: "stack" }, /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement("div", { className: "card-h" }, /* @__PURE__ */ React.createElement("h2", null, needsAlt ? "Try one of these instead" : "Other points you could use")), /* @__PURE__ */ React.createElement(Alternatives, { pointId: p.id, areaId: p.areaId })))));
  }

  // src/student/Report.tsx
  var import_react12 = __toESM(require_react(), 1);
  async function shrink(file) {
    const url = URL.createObjectURL(file);
    try {
      const img = await new Promise((res, rej) => {
        const i = new Image();
        i.onload = () => res(i);
        i.onerror = () => rej(new Error("bad image"));
        i.src = url;
      });
      const max = 640, k = Math.min(1, max / Math.max(img.width, img.height));
      const c = document.createElement("canvas");
      c.width = Math.round(img.width * k);
      c.height = Math.round(img.height * k);
      c.getContext("2d").drawImage(img, 0, 0, c.width, c.height);
      return c.toDataURL("image/jpeg", 0.6);
    } finally {
      URL.revokeObjectURL(url);
    }
  }
  function ReportForm({ route }) {
    const { db, now, submit, toast } = useApp();
    const back = useBack("/");
    const [pointId, setPointId] = (0, import_react12.useState)(route.params.get("point") ?? "");
    const [category, setCategory] = (0, import_react12.useState)(route.params.get("category") ?? "");
    const [description, setDescription] = (0, import_react12.useState)(route.params.get("desc") ?? "");
    const [photo, setPhoto] = (0, import_react12.useState)(null);
    const [errors, setErrors] = (0, import_react12.useState)({});
    const [busy, setBusy] = (0, import_react12.useState)(false);
    const [dup, setDup] = (0, import_react12.useState)(null);
    const [done, setDone] = (0, import_react12.useState)(null);
    const fileRef = (0, import_react12.useRef)(null);
    const point = db.points.find((p) => p.id === pointId);
    const points = (0, import_react12.useMemo)(() => db.points.filter((p) => p.active), [db.points]);
    const doSubmit = async (allowDuplicate = false) => {
      const v = validateReport(db, { pointId, category, description });
      if (v) {
        setErrors({ [v.field]: v.error });
        document.getElementById(`f-${v.field}`)?.focus();
        return;
      }
      setErrors({});
      setBusy(true);
      const res = await submit({ pointId, category, description, photo, allowDuplicate });
      setBusy(false);
      if (res.ok) {
        const st = deriveStatus(res.db, pointId, now);
        setDone({ report: res.report, label: st.label, kind: st.kind });
        window.scrollTo({ top: 0 });
      } else if (res.duplicate) setDup(res.duplicate);
      else {
        setErrors({ [res.field ?? "form"]: res.error });
        toast("error", res.error);
      }
    };
    const pick = async (f) => {
      if (!f) return;
      if (!f.type.startsWith("image/")) {
        setErrors((e) => ({ ...e, photo: "Please choose an image file (JPG or PNG)." }));
        return;
      }
      try {
        setPhoto(await shrink(f));
        setErrors((e) => ({ ...e, photo: "" }));
      } catch {
        setErrors((e) => ({ ...e, photo: "That image could not be read. Try another photo." }));
      }
    };
    if (done) {
      const r = done.report;
      const p = db.points.find((x) => x.id === r.waterPointId);
      const meta2 = categoryById(r.category);
      return /* @__PURE__ */ React.createElement("div", { className: "stack-lg", style: { maxWidth: 640, margin: "0 auto" } }, /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement("div", { className: "stack", style: { textAlign: "center", alignItems: "center" } }, /* @__PURE__ */ React.createElement(Confetti, null), /* @__PURE__ */ React.createElement("div", { className: "success-ring" }, /* @__PURE__ */ React.createElement(Icon, { name: "check", size: 38, strokeWidth: 2.5 })), /* @__PURE__ */ React.createElement("h1", null, "Report submitted"), /* @__PURE__ */ React.createElement("p", { className: "sub" }, "Thank you. Staff will review it. Until then it is shown as ", /* @__PURE__ */ React.createElement("b", null, "pending verification"), ", not as a confirmed fact."), /* @__PURE__ */ React.createElement("span", { className: "rid", "aria-label": `Report ID ${r.id}` }, r.id), /* @__PURE__ */ React.createElement("p", { className: "muted", style: { fontSize: 12.5 } }, "Keep this ID to follow progress in My Activity.")), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 22 } }, /* @__PURE__ */ React.createElement(Stepper, { r })), /* @__PURE__ */ React.createElement("dl", { className: "dl", style: { marginTop: 22 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("dt", null, "Water point"), /* @__PURE__ */ React.createElement("dd", null, p?.name)), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("dt", null, "Issue"), /* @__PURE__ */ React.createElement("dd", null, meta2.label)), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("dt", null, "Submitted"), /* @__PURE__ */ React.createElement("dd", null, fmtDateTime(r.createdAt))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("dt", null, "Verification"), /* @__PURE__ */ React.createElement("dd", null, "Pending staff verification"))), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 18 } }, meta2.effect ? /* @__PURE__ */ React.createElement(Notice, { tone: "info", title: "How this affects the point\u2019s status" }, p?.name, " now shows ", /* @__PURE__ */ React.createElement(StatusBadge, { s: { kind: done.kind, label: done.label, verified: false, conflicting: false }, size: "sm" }), " based on recent reports. It expires automatically and never overrides a staff-verified record.") : /* @__PURE__ */ React.createElement(Notice, { tone: "info", title: "Status unchanged" }, "This type of report doesn\u2019t change the point\u2019s availability status. Staff will review it.")), r.duplicateOfId && /* @__PURE__ */ React.createElement("div", { style: { marginTop: 12 } }, /* @__PURE__ */ React.createElement(Notice, { tone: "warn" }, "You confirmed this may duplicate ", /* @__PURE__ */ React.createElement("span", { className: "mono" }, r.duplicateOfId), ". Staff will merge them if needed."))), /* @__PURE__ */ React.createElement("div", { className: "row wrap", style: { justifyContent: "center" } }, /* @__PURE__ */ React.createElement(Button, { variant: "primary", onClick: () => go("/activity"), icon: "clipboard" }, "View my activity"), /* @__PURE__ */ React.createElement(Button, { onClick: () => go(`/point/${r.waterPointId}#alternatives`), icon: "navigation" }, "Find an alternative"), /* @__PURE__ */ React.createElement(Button, { variant: "ghost", onClick: () => go(`/point/${r.waterPointId}`) }, "Back to point")));
    }
    const meta = category ? categoryById(category) : null;
    return /* @__PURE__ */ React.createElement("div", { className: "stack-lg", style: { maxWidth: 760, margin: "0 auto" } }, /* @__PURE__ */ React.createElement(PageHeader, { back, title: "Report a problem", sub: "Tell staff about something you can see. This does not replace emergency help." }), /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement("form", { className: "stack-lg", noValidate: true, onSubmit: (e) => {
      e.preventDefault();
      void doSubmit();
    } }, /* @__PURE__ */ React.createElement(Field, { label: "Water point", htmlFor: "f-pointId", error: errors.pointId }, /* @__PURE__ */ React.createElement("select", { id: "f-pointId", className: "select", value: pointId, onChange: (e) => {
      setPointId(e.target.value);
      setErrors({});
    }, "aria-invalid": !!errors.pointId }, /* @__PURE__ */ React.createElement("option", { value: "" }, "Select the water point\u2026"), CAMPUS_AREAS.map((a) => {
      const ps = points.filter((p) => p.areaId === a.id);
      return ps.length ? /* @__PURE__ */ React.createElement("optgroup", { key: a.id, label: a.name }, ps.map((p) => /* @__PURE__ */ React.createElement("option", { key: p.id, value: p.id }, p.name))) : null;
    })), point && /* @__PURE__ */ React.createElement("div", { className: "hint" }, point.building, " \xB7 ", floorText(point), point.isDemo ? "" : ""), !points.length && /* @__PURE__ */ React.createElement(Notice, { tone: "warn" }, "No active water points are registered yet.")), /* @__PURE__ */ React.createElement(Field, { label: "What is wrong?", error: errors.category }, /* @__PURE__ */ React.createElement("div", { className: "cats", role: "radiogroup", "aria-label": "Issue category", id: "f-category" }, CATEGORIES.map((c) => /* @__PURE__ */ React.createElement("button", { type: "button", key: c.id, role: "radio", "aria-checked": category === c.id, className: "cat", onClick: () => {
      setCategory(c.id);
      setErrors({});
    } }, /* @__PURE__ */ React.createElement("span", { className: "ci" }, /* @__PURE__ */ React.createElement(Icon, { name: c.icon, size: 18 })), /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("b", null, c.label), /* @__PURE__ */ React.createElement("small", null, c.hint)))))), /* @__PURE__ */ React.createElement(Field, { label: `Short description${category === "other" || category === "location_incorrect" ? "" : " (optional)"}`, htmlFor: "f-description", error: errors.description, hint: `${description.length}/280 \xB7 Describe only what you can see. Please don\u2019t include personal details.` }, /* @__PURE__ */ React.createElement("textarea", { id: "f-description", className: "textarea", maxLength: 300, value: description, onChange: (e) => setDescription(e.target.value), placeholder: "e.g. Right cooler on 2nd floor gives no water after 1 pm.", "aria-invalid": !!errors.description })), /* @__PURE__ */ React.createElement(Field, { label: "Photo (optional)", error: errors.photo }, /* @__PURE__ */ React.createElement("input", { ref: fileRef, type: "file", accept: "image/*", hidden: true, onChange: (e) => {
      void pick(e.target.files?.[0]);
      e.target.value = "";
    } }), photo ? /* @__PURE__ */ React.createElement("div", { className: "upload" }, /* @__PURE__ */ React.createElement("img", { src: photo, alt: "Attached preview" }), /* @__PURE__ */ React.createElement("span", { className: "grow" }, "Photo attached (resized, kept only in this browser)"), /* @__PURE__ */ React.createElement(Button, { size: "sm", variant: "ghost", onClick: () => setPhoto(null) }, "Remove")) : /* @__PURE__ */ React.createElement("button", { type: "button", className: "upload", onClick: () => fileRef.current?.click() }, /* @__PURE__ */ React.createElement(Icon, { name: "camera", size: 22 }), /* @__PURE__ */ React.createElement("span", null, "Add a photo of the issue", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("small", { className: "muted" }, "Optional \xB7 avoid faces or people")))), meta && /* @__PURE__ */ React.createElement(Notice, { tone: "info", title: "What happens next" }, meta.effect ? "The point is shown as reported, marked \u201Cpending verification\u201D, until staff check it. " : "Staff will review it; the point\u2019s availability status will not change. ", "You\u2019ll get a report ID and can follow progress in My Activity."), /* @__PURE__ */ React.createElement("div", { className: "row wrap", style: { justifyContent: "flex-end" } }, /* @__PURE__ */ React.createElement(Button, { variant: "ghost", onClick: back }, "Cancel"), /* @__PURE__ */ React.createElement(Button, { variant: "primary", size: "lg", busy, type: "submit", icon: "flag", disabled: !points.length }, "Submit report")))), dup && /* @__PURE__ */ React.createElement(Modal, { title: "A similar report already exists", onClose: () => setDup(null), footer: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Button, { variant: "ghost", onClick: () => setDup(null) }, "Cancel \u2014 don\u2019t submit"), /* @__PURE__ */ React.createElement(Button, { variant: "primary", "data-autofocus": true, onClick: () => {
      setDup(null);
      void doSubmit(true);
    } }, "Submit anyway")) }, /* @__PURE__ */ React.createElement("div", { className: "stack" }, /* @__PURE__ */ React.createElement("p", null, "Someone reported a similar issue for this point ", ago(dup.createdAt, now), "."), /* @__PURE__ */ React.createElement("div", { className: "rcard" }, /* @__PURE__ */ React.createElement("div", { className: "row spread" }, /* @__PURE__ */ React.createElement("span", { className: "mono" }, dup.id), /* @__PURE__ */ React.createElement(DemoTag, { title: "" })), /* @__PURE__ */ React.createElement("b", null, categoryById(dup.category).label), /* @__PURE__ */ React.createElement("p", { className: "muted", style: { fontSize: 13 } }, dup.description || "No description")), /* @__PURE__ */ React.createElement("p", { className: "muted", style: { fontSize: 13 } }, "If it\u2019s the same problem, you don\u2019t need to submit again. If you\u2019re seeing something different, submit anyway and staff will link the two."))));
  }

  // src/student/Activity.tsx
  var import_react13 = __toESM(require_react(), 1);
  function Photo({ id }) {
    const { getPhoto } = useApp();
    const [src, setSrc] = (0, import_react13.useState)(null);
    (0, import_react13.useEffect)(() => {
      void getPhoto(id).then(setSrc);
    }, [id, getPhoto]);
    return src ? /* @__PURE__ */ React.createElement("img", { src, alt: "Attached by reporter", style: { maxWidth: 220, borderRadius: 12, border: "1px solid var(--line)" } }) : null;
  }
  function Activity() {
    const { db, now, user } = useApp();
    const [f, setF] = (0, import_react13.useState)("all");
    const [open, setOpen] = (0, import_react13.useState)(null);
    const mine = db.reports.filter((r) => r.reporterId === user.id).sort((a, b) => b.createdAt - a.createdAt);
    const list = mine.filter((r) => f === "all" || (f === "open" ? r.status !== "resolved" && r.status !== "rejected" : r.status === "resolved" || r.status === "rejected"));
    const checkins = db.activities.filter((a) => a.actorId === user.id && a.action === "checkin").length;
    const Row = (r) => {
      const p = db.points.find((x) => x.id === r.waterPointId);
      const expanded = open === r.id;
      return /* @__PURE__ */ React.createElement("div", { className: "rcard", key: r.id }, /* @__PURE__ */ React.createElement("button", { className: "row spread", style: { width: "100%", background: "none", border: 0, textAlign: "left", cursor: "pointer", padding: 0 }, onClick: () => setOpen(expanded ? null : r.id), "aria-expanded": expanded }, /* @__PURE__ */ React.createElement("span", { className: "grow" }, /* @__PURE__ */ React.createElement("span", { className: "row wrap", style: { gap: 8 } }, /* @__PURE__ */ React.createElement("span", { className: "mono", style: { fontWeight: 700 } }, r.id), /* @__PURE__ */ React.createElement(ReportStatusTag, { s: r.status }), r.isDemo && /* @__PURE__ */ React.createElement(DemoTag, null)), /* @__PURE__ */ React.createElement("div", { style: { fontWeight: 600, marginTop: 4 } }, categoryById(r.category).label, " \u2014 ", p?.name ?? "Removed point"), /* @__PURE__ */ React.createElement("div", { className: "muted", style: { fontSize: 12.5 } }, "Submitted ", fmtDateTime(r.createdAt), " \xB7 ", ago(r.createdAt, now))), /* @__PURE__ */ React.createElement(Icon, { name: "chevron", size: 18, className: expanded ? "rot" : "" })), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 14 } }, /* @__PURE__ */ React.createElement(Stepper, { r })), expanded && /* @__PURE__ */ React.createElement("div", { className: "stack", style: { marginTop: 16 } }, /* @__PURE__ */ React.createElement("dl", { className: "dl" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("dt", null, "Verification status"), /* @__PURE__ */ React.createElement("dd", null, r.verificationStatus === "pending" ? "Pending" : r.verificationStatus === "verified" ? "Verified by staff" : "Rejected")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("dt", null, "Last updated"), /* @__PURE__ */ React.createElement("dd", null, fmtDateTime(r.updatedAt))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("dt", null, "Description"), /* @__PURE__ */ React.createElement("dd", null, r.description || "\u2014"))), r.rejectionReason && /* @__PURE__ */ React.createElement(Notice, { tone: "danger", title: "Reason given by staff" }, r.rejectionReason), r.hasPhoto && /* @__PURE__ */ React.createElement(Photo, { id: r.id }), /* @__PURE__ */ React.createElement("h3", null, "Report history"), /* @__PURE__ */ React.createElement("ul", { className: "timeline" }, r.timeline.map((t, i) => /* @__PURE__ */ React.createElement("li", { key: i, className: `t-${t.status}` }, /* @__PURE__ */ React.createElement("b", null, t.status === "submitted" ? "Submitted" : t.status === "under_review" ? "Under review" : t.status === "verified" ? "Verified" : t.status === "rejected" ? "Rejected" : "Resolved"), " ", /* @__PURE__ */ React.createElement("span", { className: "muted" }, "\xB7 ", userName(db, t.by)), t.note && /* @__PURE__ */ React.createElement("div", null, t.note), /* @__PURE__ */ React.createElement("div", { className: "when" }, fmtDateTime(t.at))))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Button, { size: "sm", onClick: () => go(`/point/${r.waterPointId}`) }, "View water point"))));
    };
    return /* @__PURE__ */ React.createElement("div", { className: "stack-lg", style: { maxWidth: 820 } }, /* @__PURE__ */ React.createElement(PageHeader, { title: "My activity", sub: "Reports you have submitted and what happened to them.", actions: /* @__PURE__ */ React.createElement(Button, { variant: "primary", icon: "flag", onClick: () => go("/report") }, "New report") }), /* @__PURE__ */ React.createElement(Chips, { label: "Filter reports", value: f, onChange: setF, options: [{ value: "all", label: "All", count: mine.length }, { value: "open", label: "In progress" }, { value: "closed", label: "Closed" }] }), list.length ? /* @__PURE__ */ React.createElement("div", null, list.map(Row)) : /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement(EmptyState, { icon: "clipboard", title: mine.length ? "Nothing here with this filter" : "You haven\u2019t submitted any reports yet", action: /* @__PURE__ */ React.createElement(Button, { variant: "primary", onClick: () => go("/report") }, "Report a problem") }, "When you report an issue, you\u2019ll get a report ID and can follow it from ", /* @__PURE__ */ React.createElement("b", null, "Submitted \u2192 Under review \u2192 Verified / Rejected \u2192 Resolved"), ".")), checkins > 0 && /* @__PURE__ */ React.createElement("p", { className: "muted", style: { fontSize: 13 } }, /* @__PURE__ */ React.createElement(Tag, { icon: "check-circle" }, checkins), " \u201CIt\u2019s working\u201D check-in", checkins > 1 ? "s" : "", " sent from this browser."));
  }
  function Notifications() {
    const { db, now, user, markRead, clearNotifs } = useApp();
    const list = db.notifications.filter((n) => n.userId === user.id).sort((a, b) => b.createdAt - a.createdAt);
    const unread = list.filter((n) => !n.read).length;
    return /* @__PURE__ */ React.createElement("div", { className: "stack-lg", style: { maxWidth: 760 } }, /* @__PURE__ */ React.createElement(PageHeader, { title: "Notifications", sub: "In-app alerts created by actions in this prototype.", actions: list.length ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Button, { size: "sm", disabled: !unread, onClick: () => markRead("all") }, "Mark all read"), /* @__PURE__ */ React.createElement(Button, { size: "sm", variant: "ghost", onClick: clearNotifs }, "Clear")) : void 0 }), list.length ? /* @__PURE__ */ React.createElement("div", { className: "plist" }, list.map((n) => /* @__PURE__ */ React.createElement("button", { key: n.id, className: "pitem", onClick: () => {
      markRead([n.id]);
      go(user.role === "admin" && n.link.startsWith("/admin") ? n.link : n.link);
    } }, /* @__PURE__ */ React.createElement("span", { className: `pi ${n.read ? "pi-unknown" : "pi-resolved"}` }, /* @__PURE__ */ React.createElement(Icon, { name: "bell", size: 19 })), /* @__PURE__ */ React.createElement("span", { className: "grow" }, /* @__PURE__ */ React.createElement("span", { className: "t" }, n.title, !n.read && /* @__PURE__ */ React.createElement(Tag, { tone: "teal" }, "New")), /* @__PURE__ */ React.createElement("div", { className: "m" }, n.body)), /* @__PURE__ */ React.createElement("span", { className: "muted", style: { fontSize: 12 } }, ago(n.createdAt, now))))) : /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement(EmptyState, { icon: "bell", title: "No notifications yet", action: /* @__PURE__ */ React.createElement(Button, { variant: "primary", onClick: () => go("/report") }, "Report a problem") }, "They appear when you submit a report, or when staff verify or resolve one \u2014 or when a point you follow changes status. Nothing is pre-filled.")));
  }

  // src/student/Guide.tsx
  var H = 36e5;
  function Guide() {
    const back = useBack("/");
    return /* @__PURE__ */ React.createElement("div", { className: "stack-lg", style: { maxWidth: 820 } }, /* @__PURE__ */ React.createElement(PageHeader, { back, title: "How to read a status", sub: "WaterPoint shows what was last reported \u2014 never a live reading." }), /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement("div", { className: "stack" }, [
      { s: { kind: "available", label: "Available", verified: false, conflicting: false }, t: `A recent student check-in (within ${RULES.checkinTtl / H} h) said the point was working.` },
      { s: { kind: "attention", label: "Needs attention", verified: false, conflicting: false }, t: `A student reported a possible issue (leak, cleaning, other) within ${RULES.reportTtl / H} h.` },
      { s: { kind: "unavailable", label: "Reported out of service", verified: false, conflicting: false }, t: "A student reported no water, an empty cooler or a non-working cooler. Not yet checked by staff." },
      { s: { kind: "unknown", label: "Unknown / stale", verified: false, conflicting: false }, t: "No sufficiently recent report. Old reports expire automatically; we never show them as live." },
      { s: { kind: "unavailable", label: "Verified out of service", verified: true, conflicting: false }, t: "An authorised admin confirmed the condition. It stays until staff mark it resolved." },
      { s: { kind: "resolved", label: "Resolved by staff", verified: false, conflicting: false }, t: `Staff marked an issue resolved. This notice expires after ${RULES.resolvedTtl / H} h.` },
      { s: { kind: "attention", label: "Conflicting reports", verified: false, conflicting: true }, t: "Students reported both a problem and normal operation. Verification needed." }
    ].map((x, i) => /* @__PURE__ */ React.createElement("div", { className: "row wrap", key: i, style: { alignItems: "flex-start" } }, /* @__PURE__ */ React.createElement("div", { style: { width: 230 } }, /* @__PURE__ */ React.createElement(StatusBadge, { s: x.s })), /* @__PURE__ */ React.createElement("p", { className: "grow sub", style: { marginTop: 0 } }, x.t))))), /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement("h2", { style: { marginBottom: 10 } }, "What WaterPoint does not claim"), /* @__PURE__ */ React.createElement("ul", { className: "stack", style: { margin: 0, paddingLeft: 18, color: "var(--text-2)" } }, /* @__PURE__ */ React.createElement("li", null, "It does not say whether water is safe, clean or drinkable. It makes no water-quality claim."), /* @__PURE__ */ React.createElement("li", null, "It does not use sensors or IoT data. Every status is a student report or a staff check, with its time shown."), /* @__PURE__ */ React.createElement("li", null, "A student report never silently overwrites a staff-verified record."), /* @__PURE__ */ React.createElement("li", null, "It cannot repair infrastructure. It helps you find a point and tell staff about a visible fault."), /* @__PURE__ */ React.createElement("li", null, "Distances are never invented. They appear only when real coordinates and your location are both available."))), /* @__PURE__ */ React.createElement(Notice, null, "The report that inspired this prototype found LPU has substantial water facilities. The issues studied are occasional and location-specific, not a campus-wide shortage."));
  }

  // src/admin/Overview.tsx
  var ACT_ICON = { "report.submitted": "flag", "report.review": "eye", "report.verified": "shield", "report.rejected": "x-circle", "report.resolved": "check-circle", "report.note": "edit", "point.added": "plus", "point.updated": "edit", "point.activated": "check-circle", "point.deactivated": "x-circle", "point.deleted": "trash", "point.status_set": "wrench", checkin: "droplet" };
  var actIcon = (a) => ACT_ICON[a] ?? "activity";
  function Overview() {
    const { db, now } = useApp();
    const st = adminStats(db, now);
    const views = pointViews(db, now, true);
    const queue = db.reports.filter((r) => r.status === "submitted" || r.status === "under_review").sort((a, b) => a.createdAt - b.createdAt);
    const acts = [...db.activities].sort((a, b) => b.createdAt - a.createdAt).slice(0, 8);
    const demoN = db.reports.filter((r) => r.isDemo).length + db.points.filter((p) => p.isDemo).length;
    return /* @__PURE__ */ React.createElement("div", { className: "stack-lg" }, /* @__PURE__ */ React.createElement(PageHeader, { title: "Overview", sub: /* @__PURE__ */ React.createElement(React.Fragment, null, "Live figures calculated from all registered points and reports. ", demoN > 0 && /* @__PURE__ */ React.createElement(DemoTag, null)), actions: /* @__PURE__ */ React.createElement(Button, { variant: "primary", icon: "clipboard", onClick: () => go("/admin/reports") }, "Open report queue") }), /* @__PURE__ */ React.createElement("div", { className: "kpis k6" }, /* @__PURE__ */ React.createElement("div", { className: "kpi" }, /* @__PURE__ */ React.createElement("div", { className: "l" }, "Registered water points"), /* @__PURE__ */ React.createElement("div", { className: "v" }, /* @__PURE__ */ React.createElement(CountUp, { value: st.totalPoints })), /* @__PURE__ */ React.createElement("div", { className: "n" }, st.activePoints, " active")), /* @__PURE__ */ React.createElement("div", { className: "kpi ok" }, /* @__PURE__ */ React.createElement("div", { className: "l" }, "Recent availability reports"), /* @__PURE__ */ React.createElement("div", { className: "v" }, /* @__PURE__ */ React.createElement(CountUp, { value: st.recentAvailability })), /* @__PURE__ */ React.createElement("div", { className: "n" }, "points currently \u201CAvailable\u201D")), /* @__PURE__ */ React.createElement("div", { className: "kpi warn" }, /* @__PURE__ */ React.createElement("div", { className: "l" }, "Points with unresolved reports"), /* @__PURE__ */ React.createElement("div", { className: "v" }, /* @__PURE__ */ React.createElement(CountUp, { value: st.unresolved })), /* @__PURE__ */ React.createElement("div", { className: "n" }, st.unresolvedReports, " open report", st.unresolvedReports === 1 ? "" : "s")), /* @__PURE__ */ React.createElement("div", { className: "kpi bad" }, /* @__PURE__ */ React.createElement("div", { className: "l" }, "Awaiting verification"), /* @__PURE__ */ React.createElement("div", { className: "v" }, /* @__PURE__ */ React.createElement(CountUp, { value: st.awaiting })), /* @__PURE__ */ React.createElement("div", { className: "n" }, "submitted or under review")), /* @__PURE__ */ React.createElement("div", { className: "kpi accent" }, /* @__PURE__ */ React.createElement("div", { className: "l" }, "Resolved reports"), /* @__PURE__ */ React.createElement("div", { className: "v" }, /* @__PURE__ */ React.createElement(CountUp, { value: st.resolved })), /* @__PURE__ */ React.createElement("div", { className: "n" }, "of ", st.totalReports, " total")), /* @__PURE__ */ React.createElement("div", { className: "kpi" }, /* @__PURE__ */ React.createElement("div", { className: "l" }, "Unknown / stale points"), /* @__PURE__ */ React.createElement("div", { className: "v" }, /* @__PURE__ */ React.createElement(CountUp, { value: views.filter((v) => v.point.active && v.status.kind === "unknown").length })), /* @__PURE__ */ React.createElement("div", { className: "n" }, "no recent report"))), /* @__PURE__ */ React.createElement("div", { className: "two" }, /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement("div", { className: "card-h" }, /* @__PURE__ */ React.createElement("h2", null, "Needs your attention"), /* @__PURE__ */ React.createElement("a", { href: "#/admin/reports" }, "All reports")), queue.length ? /* @__PURE__ */ React.createElement("div", { className: "plist" }, queue.slice(0, 5).map((r) => /* @__PURE__ */ React.createElement(ReportLine, { key: r.id, r, onClick: () => go(`/admin/reports/${r.id}`) }))) : /* @__PURE__ */ React.createElement(EmptyState, { icon: "check-circle", title: "Queue is clear" }, "No reports are waiting for verification.")), /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement("div", { className: "card-h" }, /* @__PURE__ */ React.createElement("h2", null, "Point status right now")), /* @__PURE__ */ React.createElement("div", { className: "row wrap", style: { gap: 18 } }, /* @__PURE__ */ React.createElement(StatusRing, { label: "active points", data: KIND_ORDER.map((k) => ({ name: KIND_NAME[k], value: views.filter((v) => v.point.active && v.status.kind === k).length, color: `var(--${{ available: "ok", attention: "warn", unavailable: "bad", unknown: "mute", resolved: "accent" }[k]})` })) }), /* @__PURE__ */ React.createElement("div", { className: "legend grow", style: { flexDirection: "column", gap: 8, minWidth: 150 } }, KIND_ORDER.map((k) => /* @__PURE__ */ React.createElement("span", { key: k }, /* @__PURE__ */ React.createElement("i", { className: `m-${k}` }), KIND_NAME[k], " ", /* @__PURE__ */ React.createElement("b", { style: { marginLeft: "auto" } }, views.filter((v) => v.point.active && v.status.kind === k).length))))), /* @__PURE__ */ React.createElement("p", { className: "muted", style: { fontSize: 12, marginTop: 10 } }, "Status derives from reports that expire automatically \u2014 not from sensors."))), /* @__PURE__ */ React.createElement(Card, { pad: false }, /* @__PURE__ */ React.createElement("div", { className: "card-h", style: { padding: "16px 20px 0" } }, /* @__PURE__ */ React.createElement("h2", null, "Campus map \u2014 all points"), /* @__PURE__ */ React.createElement("span", { className: "muted", style: { fontSize: 12.5 } }, "Click a pin to manage it")), /* @__PURE__ */ React.createElement("div", { style: { padding: 12 } }, /* @__PURE__ */ React.createElement(CampusMap, { points: views.filter((v) => v.point.active), height: 360, onSelect: (id) => go(`/admin/points?open=${id}`) }))), /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement("div", { className: "card-h" }, /* @__PURE__ */ React.createElement("h2", null, "Recent activity"), /* @__PURE__ */ React.createElement("a", { href: "#/admin/activity" }, "Full log")), acts.length ? /* @__PURE__ */ React.createElement("ul", { className: "feed" }, acts.map((a) => /* @__PURE__ */ React.createElement("li", { key: a.id }, /* @__PURE__ */ React.createElement("span", { className: "fi" }, /* @__PURE__ */ React.createElement(Icon, { name: actIcon(a.action), size: 15 })), /* @__PURE__ */ React.createElement("div", { className: "grow" }, a.details, /* @__PURE__ */ React.createElement("small", null, userName(db, a.actorId), " \xB7 ", ago(a.createdAt, now), " \xB7 ", fmtTime(a.createdAt), " "))))) : /* @__PURE__ */ React.createElement(EmptyState, { icon: "activity", title: "No activity yet" }, "Actions by students and staff will be logged here.")));
  }

  // src/admin/Points.tsx
  var import_react14 = __toESM(require_react(), 1);
  var blank = () => ({ name: "", areaId: "b25", building: "Block 25", floor: "", floorReported: "", areaType: "indoor", locationVerified: true, latitude: "31.25620", longitude: "75.70320" });
  var toInput = (p) => ({ name: p.name, areaId: p.areaId, building: p.building, floor: p.floor ?? "", floorReported: p.floorReported ?? "", areaType: p.areaType, locationVerified: p.locationVerified, latitude: p.latitude?.toString() ?? "", longitude: p.longitude?.toString() ?? "" });
  function Points({ route }) {
    const { db, now } = useApp();
    const [q, setQ] = (0, import_react14.useState)("");
    const [sel, setSel] = (0, import_react14.useState)(route.params.get("open"));
    (0, import_react14.useEffect)(() => {
      const o = route.params.get("open");
      if (o) setSel(o);
    }, [route.params.toString()]);
    const views = (0, import_react14.useMemo)(() => pointViews(db, now, true).filter((v) => !q.trim() || `${v.point.name} ${v.point.building} ${v.point.id}`.toLowerCase().includes(q.trim().toLowerCase())), [db, now, q]);
    const close = () => {
      setSel(null);
      if (route.params.get("open")) go("/admin/points");
    };
    return /* @__PURE__ */ React.createElement("div", { className: "stack-lg" }, /* @__PURE__ */ React.createElement(PageHeader, { title: "Water points", sub: "Register points, correct their location details and set maintenance status.", actions: /* @__PURE__ */ React.createElement(Button, { variant: "primary", icon: "plus", onClick: () => setSel("new") }, "Add water point") }), /* @__PURE__ */ React.createElement("input", { className: "input", style: { maxWidth: 360 }, type: "search", placeholder: "Search points", "aria-label": "Search water points", value: q, onChange: (e) => setQ(e.target.value) }), views.length ? /* @__PURE__ */ React.createElement("div", { className: "tablewrap" }, /* @__PURE__ */ React.createElement("table", { className: "t" }, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", null, "Point"), /* @__PURE__ */ React.createElement("th", null, "Building \xB7 floor"), /* @__PURE__ */ React.createElement("th", null, "Status"), /* @__PURE__ */ React.createElement("th", null, "Location"), /* @__PURE__ */ React.createElement("th", null, "Active"), /* @__PURE__ */ React.createElement("th", null))), /* @__PURE__ */ React.createElement("tbody", null, views.map(({ point: p, status: s }) => /* @__PURE__ */ React.createElement("tr", { key: p.id, className: p.active ? "" : "inactive", tabIndex: 0, onClick: () => setSel(p.id), onKeyDown: (e) => {
      if (e.key === "Enter") setSel(p.id);
    } }, /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("b", null, p.name), " ", p.isDemo && /* @__PURE__ */ React.createElement(DemoTag, null), /* @__PURE__ */ React.createElement("div", { className: "mono muted", style: { fontSize: 11.5 } }, p.id)), /* @__PURE__ */ React.createElement("td", null, p.building, /* @__PURE__ */ React.createElement("div", { className: "muted", style: { fontSize: 12.5 } }, floorText(p))), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement(StatusBadge, { s, size: "sm" })), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement(Tag, { tone: p.locationVerified ? "green" : "amber" }, p.locationVerified ? "Confirmed" : "Unconfirmed")), /* @__PURE__ */ React.createElement("td", null, p.active ? "Yes" : /* @__PURE__ */ React.createElement(Tag, { tone: "rose" }, "Inactive")), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement(Icon, { name: "chevron", size: 16 }))))))) : /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement(EmptyState, { icon: "droplet", title: db.points.length ? "No points match your search" : "No water points yet", action: /* @__PURE__ */ React.createElement(Button, { variant: "primary", icon: "plus", onClick: () => setSel("new") }, "Add the first water point") }, "Add points with provisional names until their exact location is verified on site.")), sel && /* @__PURE__ */ React.createElement(PointDrawer, { id: sel, onClose: close }));
  }
  function PointDrawer({ id, onClose }) {
    const { db, now, admin } = useApp();
    const existing = id === "new" ? void 0 : db.points.find((p) => p.id === id);
    const [f, setF] = (0, import_react14.useState)(existing ? toInput(existing) : blank());
    const [err, setErr] = (0, import_react14.useState)("");
    const [confirm, setConfirm] = (0, import_react14.useState)(null);
    const [stNote, setStNote] = (0, import_react14.useState)("");
    (0, import_react14.useEffect)(() => {
      if (existing) setF(toInput(existing));
    }, [existing?.updatedAt]);
    if (id !== "new" && !existing) return null;
    const set2 = (k, v) => {
      setF((x) => ({ ...x, [k]: v }));
      setErr("");
    };
    const reports = existing ? db.reports.filter((r) => r.waterPointId === existing.id).sort((a, b) => b.createdAt - a.createdAt) : [];
    const save = () => {
      const e = validatePoint(f);
      if (e) {
        setErr(e);
        return;
      }
      if (existing) {
        if (admin((d, a, n) => updatePoint(d, existing.id, f, a, n), "Water point updated.")) onClose();
      } else if (admin((d, a, n) => addPoint(d, f, a, n), "Water point added.")) onClose();
    };
    const setStatus = (s) => {
      if (admin((d, a, n) => setStaffStatus(d, existing.id, s, stNote, a, n), "Staff status recorded.")) setStNote("");
    };
    const derived = existing ? pointViews(db, now, true).find((v) => v.point.id === existing.id)?.status : null;
    return /* @__PURE__ */ React.createElement(Drawer, { title: existing ? "Manage water point" : "Add water point", onClose, footer: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Button, { variant: "ghost", onClick: onClose }, "Cancel"), /* @__PURE__ */ React.createElement(Button, { variant: "primary", onClick: save }, existing ? "Save changes" : "Add point")) }, /* @__PURE__ */ React.createElement("div", { className: "stack-lg" }, err && /* @__PURE__ */ React.createElement(Notice, { tone: "danger" }, err), /* @__PURE__ */ React.createElement("div", { className: "formgrid" }, /* @__PURE__ */ React.createElement(Field, { label: "Point name", htmlFor: "pn", hint: "e.g. \u201CBlock 34 \u2014 Cooler C\u201D." }, /* @__PURE__ */ React.createElement("input", { id: "pn", "data-autofocus": true, className: "input", value: f.name, onChange: (e) => set2("name", e.target.value) })), /* @__PURE__ */ React.createElement("div", { className: "formgrid c2" }, /* @__PURE__ */ React.createElement(Field, { label: "Campus area", htmlFor: "pa" }, /* @__PURE__ */ React.createElement("select", { id: "pa", className: "select", value: f.areaId, onChange: (e) => {
      set2("areaId", e.target.value);
      const a = areaById(e.target.value);
      if (a && a.id !== "other") {
        set2("building", a.name);
        if (!f.latitude) {
          set2("latitude", a.center.lat.toFixed(5));
          set2("longitude", a.center.lng.toFixed(5));
        }
      }
    } }, CAMPUS_AREAS.map((a) => /* @__PURE__ */ React.createElement("option", { key: a.id, value: a.id }, a.name)))), /* @__PURE__ */ React.createElement(Field, { label: "Building / landmark", htmlFor: "pb" }, /* @__PURE__ */ React.createElement("input", { id: "pb", className: "input", value: f.building, onChange: (e) => set2("building", e.target.value) })), /* @__PURE__ */ React.createElement(Field, { label: "Floor", htmlFor: "pf", hint: "Number (2) or text (Ground). Empty for outdoor." }, /* @__PURE__ */ React.createElement("input", { id: "pf", className: "input", value: f.floor, onChange: (e) => set2("floor", e.target.value), placeholder: "e.g. 2" })), /* @__PURE__ */ React.createElement(Field, { label: "Indoor / outdoor", htmlFor: "pt" }, /* @__PURE__ */ React.createElement("select", { id: "pt", className: "select", value: f.areaType, onChange: (e) => set2("areaType", e.target.value) }, /* @__PURE__ */ React.createElement("option", { value: "indoor" }, "Indoor"), /* @__PURE__ */ React.createElement("option", { value: "outdoor" }, "Outdoor"), /* @__PURE__ */ React.createElement("option", { value: "unverified" }, "Not verified"))), /* @__PURE__ */ React.createElement("div", null), /* @__PURE__ */ React.createElement(Field, { label: "Latitude (optional)", htmlFor: "pla" }, /* @__PURE__ */ React.createElement("input", { id: "pla", className: "input", inputMode: "decimal", value: f.latitude, onChange: (e) => set2("latitude", e.target.value) })), /* @__PURE__ */ React.createElement(Field, { label: "Longitude (optional)", htmlFor: "plo" }, /* @__PURE__ */ React.createElement("input", { id: "plo", className: "input", inputMode: "decimal", value: f.longitude, onChange: (e) => set2("longitude", e.target.value) }))), /* @__PURE__ */ React.createElement("label", { className: "switch" }, /* @__PURE__ */ React.createElement("input", { type: "checkbox", checked: f.locationVerified, onChange: (e) => set2("locationVerified", e.target.checked) }), /* @__PURE__ */ React.createElement("span", { className: "tr" }), "Location confirmed on site")), existing && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", { style: { marginBottom: 8 } }, "Maintenance status"), derived && /* @__PURE__ */ React.createElement("div", { className: "row wrap", style: { marginBottom: 8 } }, /* @__PURE__ */ React.createElement(StatusBadge, { s: derived }), /* @__PURE__ */ React.createElement("span", { className: "muted", style: { fontSize: 12.5 } }, derived.source)), /* @__PURE__ */ React.createElement("input", { className: "input", "aria-label": "Staff status note", placeholder: "Note (optional)", value: stNote, onChange: (e) => setStNote(e.target.value) }), /* @__PURE__ */ React.createElement("div", { className: "row wrap", style: { marginTop: 8 } }, /* @__PURE__ */ React.createElement(Button, { size: "sm", variant: "success", onClick: () => setStatus("AVAILABLE") }, "Working"), /* @__PURE__ */ React.createElement(Button, { size: "sm", onClick: () => setStatus("NEEDS_ATTENTION") }, "Needs attention"), /* @__PURE__ */ React.createElement(Button, { size: "sm", variant: "danger", onClick: () => setStatus("REPORTED_UNAVAILABLE") }, "Out of service")), /* @__PURE__ */ React.createElement("p", { className: "muted", style: { fontSize: 12, marginTop: 6 } }, "A staff check replaces earlier staff records. \u201CWorking\u201D expires after 24 h.")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", { style: { marginBottom: 8 } }, "Report history (", reports.length, ")"), reports.length ? /* @__PURE__ */ React.createElement("ul", { className: "feed" }, reports.map((r) => /* @__PURE__ */ React.createElement("li", { key: r.id }, /* @__PURE__ */ React.createElement("div", { className: "grow" }, /* @__PURE__ */ React.createElement("a", { className: "mono", href: `#/admin/reports/${r.id}` }, r.id), /* @__PURE__ */ React.createElement("small", null, categoryById(r.category).label, " \xB7 ", ago(r.createdAt, now))), /* @__PURE__ */ React.createElement(ReportStatusTag, { s: r.status })))) : /* @__PURE__ */ React.createElement("p", { className: "muted" }, "No reports.")), /* @__PURE__ */ React.createElement("div", { className: "row wrap" }, existing.active ? /* @__PURE__ */ React.createElement(Button, { variant: "danger", icon: "x-circle", onClick: () => setConfirm("deactivate") }, "Deactivate") : /* @__PURE__ */ React.createElement(Button, { variant: "success", icon: "check-circle", onClick: () => admin((d, a, n) => setPointActive(d, existing.id, true, a, n), "Point activated.") }, "Activate"), /* @__PURE__ */ React.createElement(Button, { variant: "danger", icon: "trash", onClick: () => setConfirm("delete") }, "Delete")))), confirm === "deactivate" && existing && /* @__PURE__ */ React.createElement(ConfirmDialog, { danger: true, title: "Deactivate this point?", confirmLabel: "Deactivate", onClose: () => setConfirm(null), body: /* @__PURE__ */ React.createElement("p", null, existing.name, " will be hidden from students and stop accepting reports. Its history is kept and you can activate it again."), onConfirm: () => admin((d, a, n) => setPointActive(d, existing.id, false, a, n), "Point deactivated.") }), confirm === "delete" && existing && /* @__PURE__ */ React.createElement(ConfirmDialog, { danger: true, title: "Delete this point permanently?", confirmLabel: "Delete point", onClose: () => setConfirm(null), body: /* @__PURE__ */ React.createElement("p", null, "This cannot be undone. Points that have report history can\u2019t be deleted \u2014 deactivate them instead."), onConfirm: () => {
      if (admin((d, a, n) => deletePoint(d, existing.id, a, n), "Point deleted.")) onClose();
    } }));
  }

  // src/admin/Reports.tsx
  var import_react15 = __toESM(require_react(), 1);
  function Reports() {
    const { db, now } = useApp();
    const [st, setSt] = (0, import_react15.useState)("all");
    const [cat, setCat] = (0, import_react15.useState)("all");
    const [q, setQ] = (0, import_react15.useState)("");
    const rows = (0, import_react15.useMemo)(() => db.reports.filter((r) => (st === "all" || r.status === st) && (cat === "all" || r.category === cat) && (!q.trim() || (r.id + " " + (db.points.find((p) => p.id === r.waterPointId)?.name ?? "") + " " + r.description).toLowerCase().includes(q.trim().toLowerCase()))).sort((a, b) => b.createdAt - a.createdAt), [db, st, cat, q]);
    const n = (s) => db.reports.filter((r) => r.status === s).length;
    return /* @__PURE__ */ React.createElement("div", { className: "stack-lg" }, /* @__PURE__ */ React.createElement(PageHeader, { title: "Reports", sub: "Review, verify, reject and resolve student reports. Every action is logged." }), /* @__PURE__ */ React.createElement("div", { className: "filters" }, /* @__PURE__ */ React.createElement("div", { className: "filter-row" }, /* @__PURE__ */ React.createElement(Button, { icon: "external", size: "sm", onClick: () => exportCsv(rows, db) }, "Export CSV"), /* @__PURE__ */ React.createElement("input", { className: "input", style: { maxWidth: 320 }, type: "search", placeholder: "Search by report ID, point or text", "aria-label": "Search reports", value: q, onChange: (e) => setQ(e.target.value) }), /* @__PURE__ */ React.createElement("select", { className: "select", style: { maxWidth: 260 }, "aria-label": "Filter by issue type", value: cat, onChange: (e) => setCat(e.target.value) }, /* @__PURE__ */ React.createElement("option", { value: "all" }, "All issue types"), CATEGORIES.map((c) => /* @__PURE__ */ React.createElement("option", { key: c.id, value: c.id }, c.label)))), /* @__PURE__ */ React.createElement(Chips, { label: "Filter by status", value: st, onChange: setSt, options: [{ value: "all", label: "All", count: db.reports.length }, { value: "submitted", label: "Submitted", count: n("submitted") }, { value: "under_review", label: "Under review", count: n("under_review") }, { value: "verified", label: "Verified", count: n("verified") }, { value: "rejected", label: "Rejected", count: n("rejected") }, { value: "resolved", label: "Resolved", count: n("resolved") }] })), rows.length ? /* @__PURE__ */ React.createElement("div", { className: "tablewrap" }, /* @__PURE__ */ React.createElement("table", { className: "t" }, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", null, "Report ID"), /* @__PURE__ */ React.createElement("th", null, "Issue"), /* @__PURE__ */ React.createElement("th", null, "Water point"), /* @__PURE__ */ React.createElement("th", null, "Status"), /* @__PURE__ */ React.createElement("th", null, "Submitted"), /* @__PURE__ */ React.createElement("th", null))), /* @__PURE__ */ React.createElement("tbody", null, rows.map((r) => {
      const p = db.points.find((x) => x.id === r.waterPointId);
      return /* @__PURE__ */ React.createElement("tr", { key: r.id, tabIndex: 0, onClick: () => go(`/admin/reports/${r.id}`), onKeyDown: (e) => {
        if (e.key === "Enter") go(`/admin/reports/${r.id}`);
      } }, /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("span", { className: "mono", style: { fontWeight: 650 } }, r.id), " ", r.isDemo && /* @__PURE__ */ React.createElement(DemoTag, null), r.duplicateOfId && /* @__PURE__ */ React.createElement(Tag, { tone: "amber" }, "Possible duplicate")), /* @__PURE__ */ React.createElement("td", null, categoryById(r.category).label), /* @__PURE__ */ React.createElement("td", null, p?.name ?? "\u2014"), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement(ReportStatusTag, { s: r.status })), /* @__PURE__ */ React.createElement("td", { className: "muted" }, ago(r.createdAt, now)), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement(Icon, { name: "chevron", size: 16 })));
    })))) : /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement(EmptyState, { icon: "clipboard", title: "No reports match", action: /* @__PURE__ */ React.createElement(Button, { onClick: () => {
      setSt("all");
      setCat("all");
      setQ("");
    } }, "Clear filters") }, "Try another status or issue type.")));
  }
  function ReportDetail({ id }) {
    const { db, now, admin } = useApp();
    const back = useBack("/admin/reports");
    const [modal, setModal] = (0, import_react15.useState)(null);
    const [text, setText] = (0, import_react15.useState)("");
    const [err, setErr] = (0, import_react15.useState)("");
    const [note, setNote] = (0, import_react15.useState)("");
    const r = db.reports.find((x) => x.id === id);
    if (!r) return /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement(EmptyState, { icon: "clipboard", title: "Report not found", action: /* @__PURE__ */ React.createElement(Button, { variant: "primary", onClick: () => go("/admin/reports") }, "Back to reports") }));
    const p = db.points.find((x) => x.id === r.waterPointId);
    const s = p ? deriveStatus(db, p.id, now) : null;
    const meta = categoryById(r.category);
    const dups = db.reports.filter((x) => x.id !== r.id && x.waterPointId === r.waterPointId && isOpenReport(x) && categoryById(x.category).group === meta.group);
    const awaiting = r.status === "submitted" || r.status === "under_review";
    const close = () => {
      setModal(null);
      setText("");
      setErr("");
    };
    return /* @__PURE__ */ React.createElement("div", { className: "stack-lg" }, /* @__PURE__ */ React.createElement(PageHeader, { back, title: r.id, sub: /* @__PURE__ */ React.createElement("span", { className: "row wrap", style: { gap: 8 } }, meta.label, " \xB7 ", p?.name, /* @__PURE__ */ React.createElement(ReportStatusTag, { s: r.status }), r.isDemo && /* @__PURE__ */ React.createElement(DemoTag, null)) }), /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement(Stepper, { r })), /* @__PURE__ */ React.createElement("div", { className: "two" }, /* @__PURE__ */ React.createElement("div", { className: "stack-lg" }, /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement("div", { className: "card-h" }, /* @__PURE__ */ React.createElement("h2", null, "Report")), /* @__PURE__ */ React.createElement("dl", { className: "dl" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("dt", null, "Issue type"), /* @__PURE__ */ React.createElement("dd", null, meta.label)), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("dt", null, "Reporter"), /* @__PURE__ */ React.createElement("dd", null, userName(db, r.reporterId))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("dt", null, "Submitted"), /* @__PURE__ */ React.createElement("dd", null, fmtDateTime(r.createdAt))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("dt", null, "Verification"), /* @__PURE__ */ React.createElement("dd", null, r.verificationStatus))), /* @__PURE__ */ React.createElement("p", { style: { marginTop: 14 } }, r.description || /* @__PURE__ */ React.createElement("span", { className: "muted" }, "No description provided.")), r.hasPhoto && /* @__PURE__ */ React.createElement("div", { style: { marginTop: 12 } }, /* @__PURE__ */ React.createElement(Photo, { id: r.id })), r.duplicateOfId && /* @__PURE__ */ React.createElement("div", { style: { marginTop: 12 } }, /* @__PURE__ */ React.createElement(Notice, { tone: "warn", title: "Reporter confirmed a possible duplicate" }, "Similar to ", /* @__PURE__ */ React.createElement("a", { className: "mono", href: `#/admin/reports/${r.duplicateOfId}`, style: { textDecoration: "underline" } }, r.duplicateOfId), ".")), r.rejectionReason && /* @__PURE__ */ React.createElement("div", { style: { marginTop: 12 } }, /* @__PURE__ */ React.createElement(Notice, { tone: "danger", title: "Rejection reason" }, r.rejectionReason)), meta.id === "location_incorrect" && /* @__PURE__ */ React.createElement("div", { style: { marginTop: 12 } }, /* @__PURE__ */ React.createElement(Notice, null, "This report is about location data. After verifying, update the point under Water points."))), /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement("div", { className: "card-h" }, /* @__PURE__ */ React.createElement("h2", null, "Timeline (visible to student)")), /* @__PURE__ */ React.createElement("ul", { className: "timeline" }, r.timeline.map((t, i) => /* @__PURE__ */ React.createElement("li", { key: i, className: `t-${t.status}` }, /* @__PURE__ */ React.createElement("b", null, t.status.replace("_", " ")), " ", /* @__PURE__ */ React.createElement("span", { className: "muted" }, "\xB7 ", userName(db, t.by)), t.note && /* @__PURE__ */ React.createElement("div", null, t.note), /* @__PURE__ */ React.createElement("div", { className: "when" }, fmtDateTime(t.at)))))), /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement("div", { className: "card-h" }, /* @__PURE__ */ React.createElement("h2", null, "Internal maintenance notes"), /* @__PURE__ */ React.createElement(Tag, { icon: "lock" }, "Staff only")), r.notes.length ? /* @__PURE__ */ React.createElement("ul", { className: "feed" }, r.notes.map((n) => /* @__PURE__ */ React.createElement("li", { key: n.id }, /* @__PURE__ */ React.createElement("span", { className: "fi" }, /* @__PURE__ */ React.createElement(Icon, { name: "edit", size: 14 })), /* @__PURE__ */ React.createElement("div", null, n.text, /* @__PURE__ */ React.createElement("small", null, userName(db, n.by), " \xB7 ", fmtDateTime(n.at)))))) : /* @__PURE__ */ React.createElement("p", { className: "muted", style: { marginBottom: 12 } }, "No internal notes yet."), /* @__PURE__ */ React.createElement("form", { className: "row", style: { marginTop: 12, alignItems: "flex-start" }, onSubmit: (e) => {
      e.preventDefault();
      if (admin((d, a, n) => addNote(d, r.id, a, note, n), "Note added.")) setNote("");
    } }, /* @__PURE__ */ React.createElement("input", { className: "input grow", "aria-label": "Internal note", placeholder: "Add an internal note (not shown to students)", value: note, onChange: (e) => setNote(e.target.value) }), /* @__PURE__ */ React.createElement(Button, { type: "submit", variant: "primary", icon: "plus" }, "Add")))), /* @__PURE__ */ React.createElement("div", { className: "stack-lg" }, /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement("div", { className: "card-h" }, /* @__PURE__ */ React.createElement("h2", null, "Actions")), awaiting || r.status === "verified" ? /* @__PURE__ */ React.createElement("div", { className: "stack" }, r.status === "submitted" && /* @__PURE__ */ React.createElement(Button, { icon: "eye", onClick: () => admin((d, a, n) => startReview(d, r.id, a, n), "Moved to Under review.") }, "Start review"), awaiting && /* @__PURE__ */ React.createElement(Button, { variant: "success", icon: "shield", onClick: () => setModal("verify") }, "Verify report"), awaiting && /* @__PURE__ */ React.createElement(Button, { variant: "danger", icon: "x-circle", onClick: () => setModal("reject") }, "Reject with reason"), r.status === "verified" && /* @__PURE__ */ React.createElement(Button, { variant: "primary", icon: "check-circle", onClick: () => setModal("resolve") }, "Mark issue resolved")) : /* @__PURE__ */ React.createElement("p", { className: "muted" }, "This report is ", r.status, ". No further workflow actions are available.")), p && s && /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement("div", { className: "card-h" }, /* @__PURE__ */ React.createElement("h2", null, "Water point"), /* @__PURE__ */ React.createElement("a", { href: `#/admin/points?open=${p.id}` }, "Manage")), /* @__PURE__ */ React.createElement("b", null, p.name), /* @__PURE__ */ React.createElement("div", { className: "muted", style: { fontSize: 13, margin: "2px 0 10px" } }, p.building, " \xB7 ", floorText(p)), /* @__PURE__ */ React.createElement(StatusBadge, { s }), /* @__PURE__ */ React.createElement("p", { className: "muted", style: { fontSize: 12.5, marginTop: 8 } }, s.explanation)), dups.length > 0 && /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement("div", { className: "card-h" }, /* @__PURE__ */ React.createElement("h2", null, "Possibly related reports")), /* @__PURE__ */ React.createElement("ul", { className: "feed" }, dups.map((d) => /* @__PURE__ */ React.createElement("li", { key: d.id }, /* @__PURE__ */ React.createElement("div", { className: "grow" }, /* @__PURE__ */ React.createElement("a", { className: "mono", href: `#/admin/reports/${d.id}` }, d.id), /* @__PURE__ */ React.createElement("small", null, ago(d.createdAt, now), " \xB7 ", d.status.replace("_", " "))))))))), modal === "verify" && /* @__PURE__ */ React.createElement(Modal, { title: "Verify this report", onClose: close, footer: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Button, { variant: "ghost", onClick: close }, "Cancel"), /* @__PURE__ */ React.createElement(Button, { variant: "success", icon: "shield", onClick: () => {
      if (admin((d, a, n) => verifyReport(d, r.id, a, n, text), "Report verified. The point now shows a staff-verified status.")) close();
    } }, "Confirm verification")) }, /* @__PURE__ */ React.createElement("div", { className: "stack" }, /* @__PURE__ */ React.createElement("p", null, "Confirm you have checked the point and the reported condition is real. The point\u2019s status becomes ", /* @__PURE__ */ React.createElement("b", null, "staff-verified"), " and the reporter is notified."), /* @__PURE__ */ React.createElement(Field, { label: "Note (optional, internal)", htmlFor: "vn" }, /* @__PURE__ */ React.createElement("textarea", { id: "vn", "data-autofocus": true, className: "textarea", value: text, onChange: (e) => setText(e.target.value), placeholder: "e.g. Checked at 14:10 \u2014 confirmed." })))), modal === "reject" && /* @__PURE__ */ React.createElement(Modal, { title: "Reject this report", onClose: close, footer: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Button, { variant: "ghost", onClick: close }, "Cancel"), /* @__PURE__ */ React.createElement(Button, { variant: "danger", icon: "x-circle", onClick: () => {
      if (text.trim().length < 5) {
        setErr("Please give a reason (at least 5 characters).");
        return;
      }
      if (admin((d, a, n) => rejectReport(d, r.id, a, text, n), "Report rejected. The student was notified with your reason.")) close();
    } }, "Reject report")) }, /* @__PURE__ */ React.createElement(Field, { label: "Reason (shown to the student)", htmlFor: "rn", error: err }, /* @__PURE__ */ React.createElement("textarea", { id: "rn", "data-autofocus": true, className: "textarea", value: text, onChange: (e) => {
      setText(e.target.value);
      setErr("");
    }, placeholder: "e.g. Could not reproduce the issue on inspection." }))), modal === "resolve" && /* @__PURE__ */ React.createElement(
      ConfirmDialog,
      {
        title: "Mark this issue resolved?",
        confirmLabel: "Mark resolved",
        onClose: close,
        body: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("p", null, "The report moves to ", /* @__PURE__ */ React.createElement("b", null, "Resolved"), ", the student is notified, and the point shows \u201CResolved by staff\u201D for ", 48, " h before returning to Unknown."), /* @__PURE__ */ React.createElement(Field, { label: "Resolution note (optional)", htmlFor: "rsn" }, /* @__PURE__ */ React.createElement("input", { id: "rsn", className: "input", value: text, onChange: (e) => setText(e.target.value), placeholder: "e.g. Supply restored" }))),
        onConfirm: () => admin((d, a, n) => resolveReport(d, r.id, a, n, text), "Issue marked resolved.")
      }
    ));
  }
  function exportCsv(rows, db) {
    const esc = (v) => `"${v.replace(/"/g, '""')}"`;
    const lines = [["Report ID", "Water point", "Building", "Issue", "Status", "Verification", "Reporter", "Submitted", "Description"].join(",")].concat(rows.map((r) => {
      const p = db.points.find((x) => x.id === r.waterPointId);
      return [r.id, p?.name ?? "", p?.building ?? "", categoryById(r.category).label, r.status, r.verificationStatus, userName(db, r.reporterId), new Date(r.createdAt).toISOString(), r.description].map((x) => esc(String(x))).join(",");
    }));
    const url = URL.createObjectURL(new Blob(["\uFEFF" + lines.join("\n")], { type: "text/csv;charset=utf-8" }));
    const a = document.createElement("a");
    a.href = url;
    a.download = `waterpoint-reports-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  // src/admin/Analytics.tsx
  var import_react16 = __toESM(require_react(), 1);

  // src/ui/charts.tsx
  function HBars({ data, empty = "No data yet" }) {
    const max = Math.max(1, ...data.map((d) => d.value));
    if (!data.length) return /* @__PURE__ */ React.createElement("p", { className: "muted" }, empty);
    return /* @__PURE__ */ React.createElement("div", { role: "list" }, data.map((d) => /* @__PURE__ */ React.createElement("div", { className: "hbar", role: "listitem", key: d.label }, /* @__PURE__ */ React.createElement("span", { title: d.label, style: { overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, d.label), /* @__PURE__ */ React.createElement("div", { className: "tr" }, /* @__PURE__ */ React.createElement("i", { style: { width: `${d.value / max * 100}%` } })), /* @__PURE__ */ React.createElement("b", null, d.value))));
  }
  function Donut({ data, size = 170 }) {
    const total = data.reduce((a, d) => a + d.value, 0);
    const r = size / 2 - 14, c = 2 * Math.PI * r;
    let off = 0;
    return /* @__PURE__ */ React.createElement("div", { className: "row wrap", style: { gap: 24 } }, /* @__PURE__ */ React.createElement("svg", { width: size, height: size, viewBox: `0 0 ${size} ${size}`, role: "img", "aria-label": `Reports by status: ${data.map((d) => `${d.label} ${d.value}`).join(", ")}` }, /* @__PURE__ */ React.createElement("circle", { cx: size / 2, cy: size / 2, r, fill: "none", stroke: "var(--surface-3)", strokeWidth: 20 }), total > 0 && data.filter((d) => d.value > 0).map((d) => {
      const len = d.value / total * c;
      const el = /* @__PURE__ */ React.createElement("circle", { key: d.label, cx: size / 2, cy: size / 2, r, fill: "none", stroke: d.color, strokeWidth: 20, strokeDasharray: `${Math.max(len - 2, 1)} ${c}`, strokeDashoffset: -off, transform: `rotate(-90 ${size / 2} ${size / 2})` });
      off += len;
      return el;
    }), /* @__PURE__ */ React.createElement("text", { x: "50%", y: "48%", textAnchor: "middle", fontSize: "28", fontWeight: "750", fill: "var(--text)" }, total), /* @__PURE__ */ React.createElement("text", { x: "50%", y: "60%", textAnchor: "middle", fontSize: "11", fill: "var(--text-3)" }, "reports")), /* @__PURE__ */ React.createElement("ul", { className: "stack", style: { listStyle: "none", margin: 0, padding: 0, gap: 6 } }, data.map((d) => /* @__PURE__ */ React.createElement("li", { key: d.label, className: "row", style: { gap: 8, fontSize: 13 } }, /* @__PURE__ */ React.createElement("i", { style: { width: 10, height: 10, borderRadius: 3, background: d.color } }), /* @__PURE__ */ React.createElement("span", { className: "grow" }, d.label), /* @__PURE__ */ React.createElement("b", null, d.value)))));
  }
  function LineArea({ data, height = 190 }) {
    const W = 640, H2 = height, pl = 28, pr = 10, pt = 14, pb = 26;
    const max = Math.max(2, ...data.map((d) => d.value));
    const x = (i) => pl + i * (W - pl - pr) / Math.max(1, data.length - 1);
    const y = (v) => pt + (1 - v / max) * (H2 - pt - pb);
    const pts = data.map((d, i) => `${x(i)},${y(d.value)}`);
    const ticks = [0, Math.ceil(max / 2), max];
    return /* @__PURE__ */ React.createElement("svg", { viewBox: `0 0 ${W} ${H2}`, width: "100%", role: "img", "aria-label": `Reports per day over the last ${data.length} days` }, /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", { id: "la", x1: "0", x2: "0", y1: "0", y2: "1" }, /* @__PURE__ */ React.createElement("stop", { offset: "0", stopColor: "var(--cyan)", stopOpacity: ".35" }), /* @__PURE__ */ React.createElement("stop", { offset: "1", stopColor: "var(--cyan)", stopOpacity: "0" }))), ticks.map((t) => /* @__PURE__ */ React.createElement("g", { key: t }, /* @__PURE__ */ React.createElement("line", { className: "chart-grid", x1: pl, x2: W - pr, y1: y(t), y2: y(t) }), /* @__PURE__ */ React.createElement("text", { className: "chart-t", x: pl - 6, y: y(t) + 4, textAnchor: "end" }, t))), /* @__PURE__ */ React.createElement("polygon", { fill: "url(#la)", points: `${x(0)},${y(0)} ${pts.join(" ")} ${x(data.length - 1)},${y(0)}` }), /* @__PURE__ */ React.createElement("polyline", { fill: "none", stroke: "var(--cyan)", strokeWidth: "2.5", strokeLinejoin: "round", strokeLinecap: "round", points: pts.join(" ") }), data.map((d, i) => /* @__PURE__ */ React.createElement("g", { key: d.label }, /* @__PURE__ */ React.createElement("circle", { cx: x(i), cy: y(d.value), r: 3.5, fill: "var(--bg)", stroke: "var(--cyan)", strokeWidth: "2" }, /* @__PURE__ */ React.createElement("title", null, `${d.label}: ${d.value}`)), (i % 2 === 0 || data.length < 8) && /* @__PURE__ */ React.createElement("text", { className: "chart-t", x: x(i), y: H2 - 6, textAnchor: "middle" }, d.label))));
  }
  function VBars({ data, height = 200 }) {
    const W = 480, H2 = height + 14, pb = 70, pt = 18;
    const max = Math.max(1, ...data.map((d) => d.value));
    const bw = Math.min(54, (W - 30) / Math.max(1, data.length) - 12);
    const step = (W - 30) / Math.max(1, data.length);
    return /* @__PURE__ */ React.createElement("svg", { viewBox: `0 0 ${W} ${H2}`, width: "100%", role: "img", "aria-label": "Reports by issue category" }, /* @__PURE__ */ React.createElement("line", { className: "chart-axis", x1: "20", x2: W - 10, y1: H2 - pb, y2: H2 - pb }), data.map((d, i) => {
      const h = d.value / max * (H2 - pb - pt), cx2 = 20 + step * i + step / 2;
      const lines = [];
      d.label.split(" ").forEach((w) => {
        const l = lines[lines.length - 1];
        if (l && (l + " " + w).length <= 9) lines[lines.length - 1] = l + " " + w;
        else lines.push(w);
      });
      return /* @__PURE__ */ React.createElement("g", { key: d.label }, /* @__PURE__ */ React.createElement("rect", { x: cx2 - bw / 2, y: H2 - pb - h, width: bw, height: Math.max(h, 2), rx: "6", fill: "var(--teal)", opacity: d.value ? 1 : 0.25 }, /* @__PURE__ */ React.createElement("title", null, `${d.label}: ${d.value}`)), /* @__PURE__ */ React.createElement("text", { className: "chart-v", x: cx2, y: H2 - pb - h - 6, textAnchor: "middle" }, d.value), lines.slice(0, 4).map((l, k) => /* @__PURE__ */ React.createElement("text", { key: k, className: "chart-t", x: cx2, y: H2 - pb + 16 + k * 12, textAnchor: "middle", fontSize: "10" }, l)));
    }));
  }

  // src/admin/Analytics.tsx
  var COL = { submitted: "var(--warn)", under_review: "var(--info)", verified: "var(--cyan)", rejected: "var(--bad)", resolved: "var(--ok)" };
  var NAME = { submitted: "Submitted", under_review: "Under review", verified: "Verified", rejected: "Rejected", resolved: "Resolved" };
  function Analytics() {
    const { db, now } = useApp();
    const [demo] = (0, import_react16.useState)(true);
    const a = (0, import_react16.useMemo)(() => analytics(db, now, demo), [db, now, demo]);
    const hasDemo = false;
    return /* @__PURE__ */ React.createElement("div", { className: "stack-lg" }, /* @__PURE__ */ React.createElement(
      PageHeader,
      {
        title: "Analytics",
        sub: /* @__PURE__ */ React.createElement(React.Fragment, null, "Calculated live from all reports. ", hasDemo && /* @__PURE__ */ React.createElement(DemoTag, null)),
        actions: hasDemo ? /* @__PURE__ */ React.createElement("label", { className: "switch" }, /* @__PURE__ */ React.createElement("input", { type: "checkbox", checked: demo, onChange: (e) => setDemo(e.target.checked) }), /* @__PURE__ */ React.createElement("span", { className: "tr" }), "Include DEMO records (", a.demoCount, ")") : void 0
      }
    ), hasDemo && demo && /* @__PURE__ */ React.createElement(Notice, { tone: "info", title: "DEMO DATA included" }, "Seeded demo reports are mixed in so the charts have something to show. They are not real campus statistics."), a.total === 0 ? /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement(EmptyState, { icon: "chart", title: "No reports to analyse" }, "Charts appear once reports exist. Submit a report as a student, or turn demo records back on.")) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "kpis" }, /* @__PURE__ */ React.createElement("div", { className: "kpi accent" }, /* @__PURE__ */ React.createElement("div", { className: "l" }, "Reports in view"), /* @__PURE__ */ React.createElement("div", { className: "v" }, a.total)), /* @__PURE__ */ React.createElement("div", { className: "kpi ok" }, /* @__PURE__ */ React.createElement("div", { className: "l" }, "Resolved"), /* @__PURE__ */ React.createElement("div", { className: "v" }, a.byStatus.find((s) => s.label === "resolved").value)), /* @__PURE__ */ React.createElement("div", { className: "kpi" }, /* @__PURE__ */ React.createElement("div", { className: "l" }, "Median time to resolve"), /* @__PURE__ */ React.createElement("div", { className: "v" }, a.medianResolutionHours == null ? "\u2014" : `${a.medianResolutionHours.toFixed(0)} h`), /* @__PURE__ */ React.createElement("div", { className: "n" }, "from submission"))), /* @__PURE__ */ React.createElement("div", { className: "two even" }, /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement("div", { className: "card-h" }, /* @__PURE__ */ React.createElement("h2", null, "Reports by issue category")), /* @__PURE__ */ React.createElement(VBars, { data: a.byCategory })), /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement("div", { className: "card-h" }, /* @__PURE__ */ React.createElement("h2", null, "Reports by building")), /* @__PURE__ */ React.createElement(HBars, { data: a.byBuilding.slice(0, 8) })), /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement("div", { className: "card-h" }, /* @__PURE__ */ React.createElement("h2", null, "Resolution status")), /* @__PURE__ */ React.createElement(Donut, { data: a.byStatus.map((s) => ({ label: NAME[s.label], value: s.value, color: COL[s.label] })) })), /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement("div", { className: "card-h" }, /* @__PURE__ */ React.createElement("h2", null, "Reports over time (14 days)")), /* @__PURE__ */ React.createElement(LineArea, { data: a.overTime })))));
  }

  // src/admin/ActivityLog.tsx
  var import_react17 = __toESM(require_react(), 1);
  function ActivityLog() {
    const { db } = useApp();
    const [q, setQ] = (0, import_react17.useState)("");
    const rows = [...db.activities].sort((a, b) => b.createdAt - a.createdAt).filter((a) => !q.trim() || `${a.details} ${a.action} ${a.targetId} ${userName(db, a.actorId)}`.toLowerCase().includes(q.trim().toLowerCase()));
    return /* @__PURE__ */ React.createElement("div", { className: "stack-lg" }, /* @__PURE__ */ React.createElement(PageHeader, { title: "Activity log", sub: "Every admin action and student submission creates a record here." }), /* @__PURE__ */ React.createElement("input", { className: "input", style: { maxWidth: 360 }, type: "search", "aria-label": "Search activity", placeholder: "Search activity", value: q, onChange: (e) => setQ(e.target.value) }), /* @__PURE__ */ React.createElement(Card, null, rows.length ? /* @__PURE__ */ React.createElement("ul", { className: "feed" }, rows.slice(0, 150).map((a) => /* @__PURE__ */ React.createElement("li", { key: a.id }, /* @__PURE__ */ React.createElement("span", { className: "fi" }, /* @__PURE__ */ React.createElement(Icon, { name: actIcon(a.action), size: 15 })), /* @__PURE__ */ React.createElement("div", { className: "grow" }, a.details, /* @__PURE__ */ React.createElement("small", null, /* @__PURE__ */ React.createElement("span", { className: "mono" }, a.action), " \xB7 ", userName(db, a.actorId), " \xB7 ", fmtDateTime(a.createdAt), " ")), a.targetType !== "system" && /* @__PURE__ */ React.createElement("button", { className: "btn btn-sm btn-ghost", onClick: () => go(a.targetType === "report" ? `/admin/reports/${a.targetId}` : `/admin/points?open=${a.targetId}`) }, "Open")))) : /* @__PURE__ */ React.createElement(EmptyState, { icon: "activity", title: "No matching activity" })));
  }

  // src/admin/Login.tsx
  var import_react18 = __toESM(require_react(), 1);
  function AdminLogin() {
    const { login } = useApp();
    const [u, setU] = (0, import_react18.useState)("");
    const [p, setP] = (0, import_react18.useState)("");
    const [err, setErr] = (0, import_react18.useState)("");
    const [show, setShow] = (0, import_react18.useState)(false);
    const submit = (e) => {
      e.preventDefault();
      if (!u.trim() || !p) {
        setErr("Enter your username and password.");
        return;
      }
      if (!login(u, p)) setErr("Incorrect username or password.");
    };
    return /* @__PURE__ */ React.createElement("div", { className: "login-wrap" }, /* @__PURE__ */ React.createElement("form", { className: "card card-pad login", onSubmit: submit, noValidate: true }, /* @__PURE__ */ React.createElement("div", { className: "login-mark" }, /* @__PURE__ */ React.createElement(Icon, { name: "shield", size: 28 })), /* @__PURE__ */ React.createElement("h1", null, "Admin sign in"), /* @__PURE__ */ React.createElement("p", { className: "sub", style: { marginTop: 6 } }, "Maintenance & platform administrators only."), /* @__PURE__ */ React.createElement("div", { className: "stack", style: { marginTop: 22 } }, /* @__PURE__ */ React.createElement(Field, { label: "Username", htmlFor: "lu" }, /* @__PURE__ */ React.createElement("input", { id: "lu", className: "input", autoComplete: "username", autoFocus: true, value: u, onChange: (e) => {
      setU(e.target.value);
      setErr("");
    } })), /* @__PURE__ */ React.createElement(Field, { label: "Password", htmlFor: "lp", error: err }, /* @__PURE__ */ React.createElement("div", { style: { position: "relative" } }, /* @__PURE__ */ React.createElement("input", { id: "lp", className: "input", type: show ? "text" : "password", autoComplete: "current-password", value: p, onChange: (e) => {
      setP(e.target.value);
      setErr("");
    }, style: { paddingRight: 44 } }), /* @__PURE__ */ React.createElement("button", { type: "button", className: "icon-btn sm", "aria-label": show ? "Hide password" : "Show password", onClick: () => setShow(!show), style: { position: "absolute", right: 8, top: 8 } }, /* @__PURE__ */ React.createElement(Icon, { name: "eye", size: 16 })))), /* @__PURE__ */ React.createElement(Button, { type: "submit", variant: "primary", size: "lg", icon: "lock" }, "Sign in"), /* @__PURE__ */ React.createElement(Button, { variant: "ghost", onClick: () => go("/") }, "Back to student app")), /* @__PURE__ */ React.createElement("div", { className: "login-hint" }, /* @__PURE__ */ React.createElement("b", null, "Demo login"), " \xB7 username ", /* @__PURE__ */ React.createElement("span", { className: "mono" }, ADMIN_USER), " \xB7 password ", /* @__PURE__ */ React.createElement("span", { className: "mono" }, ADMIN_PASS))));
  }

  // src/admin/Settings.tsx
  var import_react19 = __toESM(require_react(), 1);
  function Settings() {
    const { db, resetDemo, clearAllData, logout } = useApp();
    const [c, setC] = (0, import_react19.useState)(null);
    return /* @__PURE__ */ React.createElement("div", { className: "stack-lg", style: { maxWidth: 760 } }, /* @__PURE__ */ React.createElement(PageHeader, { title: "Settings", sub: "Data management and session." }), /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement("div", { className: "card-h" }, /* @__PURE__ */ React.createElement("h2", null, "Data")), /* @__PURE__ */ React.createElement("p", { className: "sub", style: { marginTop: 0 } }, db.points.length, " water points \xB7 ", db.reports.length, " reports \xB7 ", db.activities.length, " activity records. Data is stored in this browser only."), /* @__PURE__ */ React.createElement("div", { className: "row wrap", style: { marginTop: 14 } }, /* @__PURE__ */ React.createElement(Button, { icon: "refresh", onClick: () => setC("reset") }, "Restore sample data"), /* @__PURE__ */ React.createElement(Button, { variant: "danger", icon: "trash", onClick: () => setC("clear") }, "Erase everything")), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 14 } }, /* @__PURE__ */ React.createElement(Notice, null, "Restoring brings back the starter points and reports and removes anything you added. Erasing leaves an empty system."))), /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement("div", { className: "card-h" }, /* @__PURE__ */ React.createElement("h2", null, "Session")), /* @__PURE__ */ React.createElement(Button, { icon: "lock", onClick: logout }, "Sign out")), c === "reset" && /* @__PURE__ */ React.createElement(ConfirmDialog, { danger: true, title: "Restore sample data?", confirmLabel: "Restore", onClose: () => setC(null), body: /* @__PURE__ */ React.createElement("p", null, "All reports, points and notifications you created will be replaced by the starter dataset."), onConfirm: () => {
      void resetDemo();
    } }), c === "clear" && /* @__PURE__ */ React.createElement(ConfirmDialog, { danger: true, title: "Erase all data?", confirmLabel: "Erase everything", onClose: () => setC(null), body: /* @__PURE__ */ React.createElement("p", null, "Every water point, report and activity record will be deleted. This cannot be undone."), onConfirm: () => {
      void clearAllData();
    } }));
  }

  // src/ui/Extras.tsx
  var import_react20 = __toESM(require_react(), 1);
  function Onboarding() {
    const { prefs, setPrefs } = useApp();
    const [i, setI] = (0, import_react20.useState)(0);
    if (prefs.onboarded) return null;
    const slides = [
      { icon: "map", t: "Find a refill point fast", d: "See every water point around LPU on a live map, with its floor and how far it is from you." },
      { icon: "clock", t: "Know how fresh the info is", d: "Every status shows who reported it and when. Old reports expire into \u201CUnknown\u201D instead of pretending to be live." },
      { icon: "flag", t: "Report a problem in seconds", d: "Empty cooler or a leak? Report it and follow the progress from Submitted to Resolved." }
    ];
    const s = slides[i], last = i === slides.length - 1, done = () => setPrefs({ onboarded: true });
    return /* @__PURE__ */ React.createElement(Modal, { title: "Welcome to WaterPoint", onClose: done, footer: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Button, { variant: "ghost", onClick: done }, "Skip"), /* @__PURE__ */ React.createElement(Button, { variant: "primary", "data-autofocus": true, onClick: () => last ? done() : setI(i + 1) }, last ? "Get started" : "Next")) }, /* @__PURE__ */ React.createElement("div", { className: "onb" }, /* @__PURE__ */ React.createElement("div", { className: "onb-ico" }, /* @__PURE__ */ React.createElement(Icon, { name: s.icon, size: 34 })), /* @__PURE__ */ React.createElement("h2", null, s.t), /* @__PURE__ */ React.createElement("p", { className: "sub" }, s.d), /* @__PURE__ */ React.createElement("div", { className: "dots", "aria-hidden": true }, slides.map((_, k) => /* @__PURE__ */ React.createElement("i", { key: k, className: k === i ? "on" : "" })))));
  }
  function Palette({ onClose }) {
    const { db, now, role } = useApp();
    const [q, setQ] = (0, import_react20.useState)("");
    const [idx, setIdx] = (0, import_react20.useState)(0);
    const input = (0, import_react20.useRef)(null);
    const pages = (0, import_react20.useMemo)(() => [
      { label: "Home", to: "/", icon: "home" },
      { label: "Find water (map)", to: "/find", icon: "map" },
      { label: "Report a problem", to: "/report", icon: "flag" },
      { label: "My activity", to: "/activity", icon: "clipboard" },
      { label: "Notifications", to: "/notifications", icon: "bell" },
      { label: "How statuses work", to: "/status-guide", icon: "info" },
      ...role === "admin" ? [{ label: "Admin \xB7 Reports", to: "/admin/reports", icon: "clipboard" }, { label: "Admin \xB7 Water points", to: "/admin/points", icon: "droplet" }, { label: "Admin \xB7 Analytics", to: "/admin/analytics", icon: "chart" }] : []
    ], [role]);
    const items = (0, import_react20.useMemo)(() => {
      const t = q.trim().toLowerCase();
      const pts = t ? suggestions(db, q, now).map((s) => ({ label: s.label, sub: s.sub, icon: s.kind === "area" ? "building" : "droplet", to: s.pointId ? `/point/${s.pointId}` : `/find?q=${encodeURIComponent(s.q ?? s.label)}` })) : [];
      return [...pts, ...pages.filter((p) => !t || p.label.toLowerCase().includes(t)).map((p) => ({ ...p, sub: "Go to page" }))].slice(0, 9);
    }, [q, db, now, pages]);
    (0, import_react20.useEffect)(() => setIdx(0), [q]);
    const open = (i) => {
      const it = items[i];
      if (it) {
        onClose();
        go(it.to);
      }
    };
    return /* @__PURE__ */ React.createElement(Modal, { title: "Quick search", onClose }, /* @__PURE__ */ React.createElement("div", { className: "palette" }, /* @__PURE__ */ React.createElement("div", { className: "searchbox" }, /* @__PURE__ */ React.createElement(Icon, { name: "search", size: 18 }), /* @__PURE__ */ React.createElement(
      "input",
      {
        ref: input,
        "data-autofocus": true,
        className: "input",
        style: { paddingLeft: 44 },
        placeholder: "Search blocks, points or pages\u2026",
        value: q,
        onChange: (e) => setQ(e.target.value),
        "aria-label": "Quick search",
        onKeyDown: (e) => {
          if (e.key === "ArrowDown") {
            e.preventDefault();
            setIdx((i) => Math.min(items.length - 1, i + 1));
          } else if (e.key === "ArrowUp") {
            e.preventDefault();
            setIdx((i) => Math.max(0, i - 1));
          } else if (e.key === "Enter") open(idx);
        }
      }
    )), /* @__PURE__ */ React.createElement("div", { className: "plist", style: { marginTop: 10 }, role: "listbox" }, items.map((it, i) => /* @__PURE__ */ React.createElement("button", { key: it.label + i, role: "option", "aria-selected": i === idx, className: `pitem ${i === idx ? "on" : ""}`, onMouseEnter: () => setIdx(i), onClick: () => open(i) }, /* @__PURE__ */ React.createElement("span", { className: "pi pi-resolved" }, /* @__PURE__ */ React.createElement(Icon, { name: it.icon, size: 18 })), /* @__PURE__ */ React.createElement("span", { className: "grow" }, /* @__PURE__ */ React.createElement("span", { className: "t" }, it.label), /* @__PURE__ */ React.createElement("div", { className: "m" }, it.sub)), /* @__PURE__ */ React.createElement(Icon, { name: "chevron", size: 16 }))), !items.length && /* @__PURE__ */ React.createElement("p", { className: "muted", style: { padding: 12 } }, "No matches.")), /* @__PURE__ */ React.createElement("p", { className: "muted", style: { fontSize: 12, marginTop: 10 } }, "Tip: press ", /* @__PURE__ */ React.createElement("kbd", null, "Ctrl"), " + ", /* @__PURE__ */ React.createElement("kbd", null, "K"), " anywhere to open this.")));
  }

  // src/App.tsx
  function Brand({ sub }) {
    return /* @__PURE__ */ React.createElement("a", { href: href("/"), className: "brand", "aria-label": "WaterPoint home" }, /* @__PURE__ */ React.createElement("span", { className: "brand-mark" }, /* @__PURE__ */ React.createElement(Icon, { name: "droplet", size: 19, strokeWidth: 2.4 })), /* @__PURE__ */ React.createElement("span", null, "WaterPoint", /* @__PURE__ */ React.createElement("small", null, sub)));
  }
  function Shell() {
    const route = useRoute();
    const { db, role, prefs, setPrefs, switchRole, loading, user, online, adminAuthed, logout } = useApp();
    const [pal, setPal] = (0, import_react21.useState)(false);
    (0, import_react21.useEffect)(() => {
      const k = (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
          e.preventDefault();
          setPal(true);
        }
      };
      window.addEventListener("keydown", k);
      return () => window.removeEventListener("keydown", k);
    }, []);
    const isAdminRoute = route.parts[0] === "admin";
    (0, import_react21.useEffect)(() => {
      if (isAdminRoute && role !== "admin") setPrefs({ role: "admin" });
      if (!isAdminRoute && role !== "student") setPrefs({ role: "student" });
    }, [isAdminRoute, role, setPrefs]);
    const unread = db.notifications.filter((n) => n.userId === user.id && !n.read).length;
    const awaiting = db.reports.filter((r) => r.status === "submitted" || r.status === "under_review").length;
    const [a, b] = [route.parts[0] ?? "", route.parts[1] ?? ""];
    const here = isAdminRoute ? `/admin${b ? "/" + b : ""}` : `/${a}`;
    const navS = [
      { to: "/", icon: "home", label: "Home" },
      { to: "/find", icon: "map", label: "Find water" },
      { to: "/report", icon: "flag", label: "Report", fab: true },
      { to: "/activity", icon: "clipboard", label: "Activity" },
      { to: "/notifications", icon: "bell", label: "Alerts", n: unread }
    ];
    const navA = [
      { to: "/admin", icon: "grid", label: "Overview" },
      { to: "/admin/reports", icon: "clipboard", label: "Reports", n: awaiting },
      { to: "/admin/points", icon: "droplet", label: "Water points" },
      { to: "/admin/analytics", icon: "chart", label: "Analytics" },
      { to: "/admin/activity", icon: "activity", label: "Activity log" },
      { to: "/admin/settings", icon: "grid", label: "Settings" }
    ];
    const nav = isAdminRoute ? navA : navS;
    const cur = (to) => to === "/" ? here === "/" : here === to || to !== "/admin" && here.startsWith(to) ? "page" : void 0;
    const curAttr = (to) => to === "/" ? here === "/" ? "page" : void 0 : to === "/admin" ? here === "/admin" ? "page" : void 0 : here === to || here.startsWith(to + "/") ? "page" : void 0;
    void cur;
    let page;
    if (loading) page = /* @__PURE__ */ React.createElement("div", { className: "stack-lg" }, /* @__PURE__ */ React.createElement(Skeleton, { h: 160 }), /* @__PURE__ */ React.createElement(Skeleton, { h: 80 }), /* @__PURE__ */ React.createElement(Skeleton, { h: 200 }));
    else if (isAdminRoute && !adminAuthed) page = /* @__PURE__ */ React.createElement(AdminLogin, null);
    else if (isAdminRoute) {
      if (!b) page = /* @__PURE__ */ React.createElement(Overview, null);
      else if (b === "reports") page = route.parts[2] ? /* @__PURE__ */ React.createElement(ReportDetail, { id: route.parts[2] }) : /* @__PURE__ */ React.createElement(Reports, null);
      else if (b === "points") page = /* @__PURE__ */ React.createElement(Points, { route });
      else if (b === "analytics") page = /* @__PURE__ */ React.createElement(Analytics, null);
      else if (b === "activity") page = /* @__PURE__ */ React.createElement(ActivityLog, null);
      else if (b === "notifications") page = /* @__PURE__ */ React.createElement(Notifications, null);
      else if (b === "settings") page = /* @__PURE__ */ React.createElement(Settings, null);
      else page = /* @__PURE__ */ React.createElement(Overview, null);
    } else if (a === "find") page = /* @__PURE__ */ React.createElement(Find, { route });
    else if (a === "point" && b) page = /* @__PURE__ */ React.createElement(PointDetail, { id: b });
    else if (a === "report") page = /* @__PURE__ */ React.createElement(ReportForm, { key: route.params.toString(), route });
    else if (a === "activity") page = /* @__PURE__ */ React.createElement(Activity, null);
    else if (a === "notifications") page = /* @__PURE__ */ React.createElement(Notifications, null);
    else if (a === "status-guide") page = /* @__PURE__ */ React.createElement(Guide, null);
    else page = /* @__PURE__ */ React.createElement(Home, null);
    return /* @__PURE__ */ React.createElement("div", { className: "shell" }, /* @__PURE__ */ React.createElement("a", { className: "skip", href: "#main" }, "Skip to content"), /* @__PURE__ */ React.createElement("aside", { className: "side", "aria-label": "Primary" }, /* @__PURE__ */ React.createElement(Brand, { sub: isAdminRoute ? "Admin console" : "Smart Campus Refill Network" }), /* @__PURE__ */ React.createElement("nav", { className: "nav", "aria-label": isAdminRoute ? "Admin" : "Student" }, (!isAdminRoute || adminAuthed) && nav.map((n) => /* @__PURE__ */ React.createElement("a", { key: n.to, href: href(n.to), "aria-current": curAttr(n.to) }, /* @__PURE__ */ React.createElement(Icon, { name: n.icon, size: 19 }), n.label, !!n.n && /* @__PURE__ */ React.createElement("span", { className: "tag tag-rose badge" }, n.n))), !isAdminRoute && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "nav-sec" }, "Learn"), /* @__PURE__ */ React.createElement("a", { href: href("/status-guide"), "aria-current": curAttr("/status-guide") }, /* @__PURE__ */ React.createElement(Icon, { name: "info", size: 19 }), "How statuses work"))), /* @__PURE__ */ React.createElement("div", { style: { marginTop: "auto" }, className: "stack" }, isAdminRoute && adminAuthed ? /* @__PURE__ */ React.createElement(Button, { icon: "lock", onClick: logout }, "Sign out") : null, /* @__PURE__ */ React.createElement("p", { className: "muted", style: { fontSize: 11.5 } }, "INT335 \xB7 P16 The Empty Bottle Problem", /* @__PURE__ */ React.createElement("br", null), "Lovely Professional University, Phagwara."))), /* @__PURE__ */ React.createElement("div", { className: "main" }, !online && /* @__PURE__ */ React.createElement("div", { className: "protobar" }, /* @__PURE__ */ React.createElement(Icon, { name: "wifi-off", size: 14 }), /* @__PURE__ */ React.createElement("span", null, "You\u2019re offline \u2014 browsing cached point information. Reports are saved locally.")), /* @__PURE__ */ React.createElement("header", { className: "topbar" }, /* @__PURE__ */ React.createElement("div", { className: "brand-sm" }, /* @__PURE__ */ React.createElement(Brand, { sub: "" })), /* @__PURE__ */ React.createElement("div", { className: "top-actions" }, /* @__PURE__ */ React.createElement(Segmented, { label: "Experience", value: role, onChange: switchRole, options: [{ value: "student", label: "Student", icon: "user" }, { value: "admin", label: "Admin", icon: "wrench" }] }), /* @__PURE__ */ React.createElement("button", { className: "icon-btn", "aria-label": "Quick search (Ctrl+K)", onClick: () => setPal(true) }, /* @__PURE__ */ React.createElement(Icon, { name: "search" })), /* @__PURE__ */ React.createElement("button", { className: "icon-btn", "aria-label": `Switch to ${prefs.theme === "dark" ? "light" : "dark"} theme`, onClick: () => setPrefs({ theme: prefs.theme === "dark" ? "light" : "dark" }) }, /* @__PURE__ */ React.createElement(Icon, { name: prefs.theme === "dark" ? "sun" : "moon" })), /* @__PURE__ */ React.createElement("a", { className: "icon-btn", "aria-label": `Notifications${unread ? `, ${unread} unread` : ""}`, href: href(isAdminRoute ? "/admin/notifications" : "/notifications") }, /* @__PURE__ */ React.createElement(Icon, { name: "bell" }), unread > 0 && /* @__PURE__ */ React.createElement("span", { className: "dot" }, unread)))), isAdminRoute && adminAuthed && /* @__PURE__ */ React.createElement("nav", { className: "admin-tabs", "aria-label": "Admin sections" }, navA.map((n) => /* @__PURE__ */ React.createElement("a", { key: n.to, href: href(n.to), "aria-current": curAttr(n.to) }, /* @__PURE__ */ React.createElement(Icon, { name: n.icon, size: 16 }), n.label, !!n.n && /* @__PURE__ */ React.createElement("span", { className: "tag tag-rose" }, n.n)))), /* @__PURE__ */ React.createElement("main", { id: "main", className: "content", tabIndex: -1, key: route.path }, /* @__PURE__ */ React.createElement("div", { className: "page-in" }, page))), !isAdminRoute && /* @__PURE__ */ React.createElement("nav", { className: "tabbar", "aria-label": "Student navigation" }, navS.map((n) => /* @__PURE__ */ React.createElement("a", { key: n.to, href: href(n.to), className: n.fab ? "fab" : "", "aria-current": curAttr(n.to) }, n.fab ? /* @__PURE__ */ React.createElement("span", { className: "fab-i" }, /* @__PURE__ */ React.createElement(Icon, { name: n.icon, size: 22 })) : /* @__PURE__ */ React.createElement(Icon, { name: n.icon, size: 21 }), n.label, !!n.n && /* @__PURE__ */ React.createElement("span", { className: "dot" }, n.n)))), pal && /* @__PURE__ */ React.createElement(Palette, { onClose: () => setPal(false) }), !loading && !isAdminRoute && /* @__PURE__ */ React.createElement(Onboarding, null), /* @__PURE__ */ React.createElement(ToastHost, null));
  }
  function App() {
    return /* @__PURE__ */ React.createElement(Provider, null, /* @__PURE__ */ React.createElement(Shell, null));
  }

  // src/main.tsx
  (0, import_client.createRoot)(document.getElementById("root")).render(/* @__PURE__ */ React.createElement(App, null));
})();
