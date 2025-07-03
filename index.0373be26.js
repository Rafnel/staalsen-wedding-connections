!function(){let e,t;function n(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var r,o,i,a,l,s,u,c,d,f,p,h,m,g,v,y,b,w,x="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function k(e){return e&&e.__esModule?e.default:e}var S={},E={},_=x.parcelRequire94c2;null==_&&((_=function(e){if(e in S)return S[e].exports;if(e in E){var t=E[e];delete E[e];var n={id:e,exports:{}};return S[e]=n,t.call(n.exports,n,n.exports),n.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){E[e]=t},x.parcelRequire94c2=_),_.register("6ObR8",function(e,t){n(e.exports,"Fragment",function(){return r},function(e){return r=e}),n(e.exports,"jsx",function(){return o},function(e){return o=e}),n(e.exports,"jsxs",function(){return i},function(e){return i=e});var r,o,i,a=_("exYeM"),l=Symbol.for("react.element"),s=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,c=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function f(e,t,n){var r,o={},i=null,a=null;for(r in void 0!==n&&(i=""+n),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(a=t.ref),t)u.call(t,r)&&!d.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:l,type:e,key:i,ref:a,props:o,_owner:c.current}}r=s,o=f,i=f}),_.register("exYeM",function(e,t){e.exports=_("bzfnW")}),_.register("bzfnW",function(e,t){n(e.exports,"Children",function(){return r},function(e){return r=e}),n(e.exports,"Component",function(){return o},function(e){return o=e}),n(e.exports,"Fragment",function(){return i},function(e){return i=e}),n(e.exports,"Profiler",function(){return a},function(e){return a=e}),n(e.exports,"PureComponent",function(){return l},function(e){return l=e}),n(e.exports,"StrictMode",function(){return s},function(e){return s=e}),n(e.exports,"Suspense",function(){return u},function(e){return u=e}),n(e.exports,"__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",function(){return c},function(e){return c=e}),n(e.exports,"cloneElement",function(){return d},function(e){return d=e}),n(e.exports,"createContext",function(){return f},function(e){return f=e}),n(e.exports,"createElement",function(){return p},function(e){return p=e}),n(e.exports,"createFactory",function(){return h},function(e){return h=e}),n(e.exports,"createRef",function(){return m},function(e){return m=e}),n(e.exports,"forwardRef",function(){return g},function(e){return g=e}),n(e.exports,"isValidElement",function(){return v},function(e){return v=e}),n(e.exports,"lazy",function(){return y},function(e){return y=e}),n(e.exports,"memo",function(){return b},function(e){return b=e}),n(e.exports,"startTransition",function(){return w},function(e){return w=e}),n(e.exports,"unstable_act",function(){return x},function(e){return x=e}),n(e.exports,"useCallback",function(){return k},function(e){return k=e}),n(e.exports,"useContext",function(){return S},function(e){return S=e}),n(e.exports,"useDebugValue",function(){return E},function(e){return E=e}),n(e.exports,"useDeferredValue",function(){return _},function(e){return _=e}),n(e.exports,"useEffect",function(){return C},function(e){return C=e}),n(e.exports,"useId",function(){return P},function(e){return P=e}),n(e.exports,"useImperativeHandle",function(){return R},function(e){return R=e}),n(e.exports,"useInsertionEffect",function(){return N},function(e){return N=e}),n(e.exports,"useLayoutEffect",function(){return O},function(e){return O=e}),n(e.exports,"useMemo",function(){return T},function(e){return T=e}),n(e.exports,"useReducer",function(){return j},function(e){return j=e}),n(e.exports,"useRef",function(){return M},function(e){return M=e}),n(e.exports,"useState",function(){return A},function(e){return A=e}),n(e.exports,"useSyncExternalStore",function(){return z},function(e){return z=e}),n(e.exports,"useTransition",function(){return D},function(e){return D=e}),n(e.exports,"version",function(){return I},function(e){return I=e});var r,o,i,a,l,s,u,c,d,f,p,h,m,g,v,y,b,w,x,k,S,E,_,C,P,R,N,O,T,j,M,A,z,D,I,L=Symbol.for("react.element"),F=Symbol.for("react.portal"),$=Symbol.for("react.fragment"),V=Symbol.for("react.strict_mode"),U=Symbol.for("react.profiler"),W=Symbol.for("react.provider"),B=Symbol.for("react.context"),H=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),q=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),Q=Symbol.iterator,K={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},X=Object.assign,Z={};function J(e,t,n){this.props=e,this.context=t,this.refs=Z,this.updater=n||K}function ee(){}function et(e,t,n){this.props=e,this.context=t,this.refs=Z,this.updater=n||K}J.prototype.isReactComponent={},J.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},J.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},ee.prototype=J.prototype;var en=et.prototype=new ee;en.constructor=et,X(en,J.prototype),en.isPureReactComponent=!0;var er=Array.isArray,eo=Object.prototype.hasOwnProperty,ei={current:null},ea={key:!0,ref:!0,__self:!0,__source:!0};function el(e,t,n){var r,o={},i=null,a=null;if(null!=t)for(r in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(i=""+t.key),t)eo.call(t,r)&&!ea.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===o[r]&&(o[r]=l[r]);return{$$typeof:L,type:e,key:i,ref:a,props:o,_owner:ei.current}}function es(e){return"object"==typeof e&&null!==e&&e.$$typeof===L}var eu=/\/+/g;function ec(e,t){var n,r;return"object"==typeof e&&null!==e&&null!=e.key?(n=""+e.key,r={"=":"=0",":":"=2"},"$"+n.replace(/[=:]/g,function(e){return r[e]})):t.toString(36)}function ed(e,t,n){if(null==e)return e;var r=[],o=0;return function e(t,n,r,o,i){var a,l,s,u=typeof t;("undefined"===u||"boolean"===u)&&(t=null);var c=!1;if(null===t)c=!0;else switch(u){case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case L:case F:c=!0}}if(c)return i=i(c=t),t=""===o?"."+ec(c,0):o,er(i)?(r="",null!=t&&(r=t.replace(eu,"$&/")+"/"),e(i,n,r,"",function(e){return e})):null!=i&&(es(i)&&(a=i,l=r+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(eu,"$&/")+"/")+t,i={$$typeof:L,type:a.type,key:l,ref:a.ref,props:a.props,_owner:a._owner}),n.push(i)),1;if(c=0,o=""===o?".":o+":",er(t))for(var d=0;d<t.length;d++){var f=o+ec(u=t[d],d);c+=e(u,n,r,f,i)}else if("function"==typeof(f=null===(s=t)||"object"!=typeof s?null:"function"==typeof(s=Q&&s[Q]||s["@@iterator"])?s:null))for(t=f.call(t),d=0;!(u=t.next()).done;)f=o+ec(u=u.value,d++),c+=e(u,n,r,f,i);else if("object"===u)throw Error("Objects are not valid as a React child (found: "+("[object Object]"===(n=String(t))?"object with keys {"+Object.keys(t).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return c}(e,r,"","",function(e){return t.call(n,e,o++)}),r}function ef(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){(0===e._status||-1===e._status)&&(e._status=1,e._result=t)},function(t){(0===e._status||-1===e._status)&&(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var ep={current:null},eh={transition:null};r={map:ed,forEach:function(e,t,n){ed(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ed(e,function(){t++}),t},toArray:function(e){return ed(e,function(e){return e})||[]},only:function(e){if(!es(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},o=J,i=$,a=U,l=et,s=V,u=Y,c={ReactCurrentDispatcher:ep,ReactCurrentBatchConfig:eh,ReactCurrentOwner:ei},d=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=X({},e.props),o=e.key,i=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,a=ei.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)eo.call(t,s)&&!ea.hasOwnProperty(s)&&(r[s]=void 0===t[s]&&void 0!==l?l[s]:t[s])}var s=arguments.length-2;if(1===s)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:L,type:e.type,key:o,ref:i,props:r,_owner:a}},f=function(e){return(e={$$typeof:B,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:W,_context:e},e.Consumer=e},p=el,h=function(e){var t=el.bind(null,e);return t.type=e,t},m=function(){return{current:null}},g=function(e){return{$$typeof:H,render:e}},v=es,y=function(e){return{$$typeof:G,_payload:{_status:-1,_result:e},_init:ef}},b=function(e,t){return{$$typeof:q,type:e,compare:void 0===t?null:t}},w=function(e){var t=eh.transition;eh.transition={};try{e()}finally{eh.transition=t}},x=function(){throw Error("act(...) is not supported in production builds of React.")},k=function(e,t){return ep.current.useCallback(e,t)},S=function(e){return ep.current.useContext(e)},E=function(){},_=function(e){return ep.current.useDeferredValue(e)},C=function(e,t){return ep.current.useEffect(e,t)},P=function(){return ep.current.useId()},R=function(e,t,n){return ep.current.useImperativeHandle(e,t,n)},N=function(e,t){return ep.current.useInsertionEffect(e,t)},O=function(e,t){return ep.current.useLayoutEffect(e,t)},T=function(e,t){return ep.current.useMemo(e,t)},j=function(e,t,n){return ep.current.useReducer(e,t,n)},M=function(e){return ep.current.useRef(e)},A=function(e){return ep.current.useState(e)},z=function(e,t,n){return ep.current.useSyncExternalStore(e,t,n)},D=function(){return ep.current.useTransition()},I="18.2.0"}),_.register("h8vP0",function(e,t){n(e.exports,"__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",function(){return W},function(e){return W=e}),n(e.exports,"createPortal",function(){return B},function(e){return B=e}),n(e.exports,"createRoot",function(){return H},function(e){return H=e}),n(e.exports,"findDOMNode",function(){return Y},function(e){return Y=e}),n(e.exports,"flushSync",function(){return q},function(e){return q=e}),n(e.exports,"hydrate",function(){return G},function(e){return G=e}),n(e.exports,"hydrateRoot",function(){return Q},function(e){return Q=e}),n(e.exports,"render",function(){return K},function(e){return K=e}),n(e.exports,"unmountComponentAtNode",function(){return X},function(e){return X=e}),n(e.exports,"unstable_batchedUpdates",function(){return Z},function(e){return Z=e}),n(e.exports,"unstable_renderSubtreeIntoContainer",function(){return J},function(e){return J=e}),n(e.exports,"version",function(){return ee},function(e){return ee=e});var r,o,i,a,l,s,u=_("exYeM"),c=_("ibqfJ");function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f=new Set,p={};function h(e,t){m(e,t),m(e+"Capture",t)}function m(e,t){for(p[e]=t,e=0;e<t.length;e++)f.add(t[e])}var g=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement),v=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,b={},w={};function x(e,t,n,r,o,i,a){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var k={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){k[e]=new x(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];k[t]=new x(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){k[e]=new x(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){k[e]=new x(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){k[e]=new x(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){k[e]=new x(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){k[e]=new x(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){k[e]=new x(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){k[e]=new x(e,5,!1,e.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function E(e){return e[1].toUpperCase()}function C(e,t,n,r){var o,i=k.hasOwnProperty(t)?k[t]:null;(null!==i?0!==i.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null==t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":if(r)return!1;if(null!==n)return!n.acceptsBooleans;return"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e;default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,i,r)&&(n=null),r||null===i?(o=t,(!!v.call(w,o)||!v.call(b,o)&&(y.test(o)?w[o]=!0:(b[o]=!0,!1)))&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n))):i.mustUseProperty?e[i.propertyName]=null===n?3!==i.type&&"":n:(t=i.attributeName,r=i.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(i=i.type)||4===i&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(S,E);k[t]=new x(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(S,E);k[t]=new x(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(S,E);k[t]=new x(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){k[e]=new x(e,1,!1,e.toLowerCase(),null,!1,!1)}),k.xlinkHref=new x("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){k[e]=new x(e,1,!1,e.toLowerCase(),null,!0,!0)});var P=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,R=Symbol.for("react.element"),N=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),j=Symbol.for("react.profiler"),M=Symbol.for("react.provider"),A=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),D=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),L=Symbol.for("react.memo"),F=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var $=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var V=Symbol.iterator;function U(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=V&&e[V]||e["@@iterator"])?e:null}var W,B,H,Y,q,G,Q,K,X,Z,J,ee,et,en=Object.assign;function er(e){if(void 0===et)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);et=t&&t[1]||""}return"\n"+et+e}var eo=!1;function ei(e,t){if(!e||eo)return"";eo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t){if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(e){var r=e}Reflect.construct(e,[],t)}else{try{t.call()}catch(e){r=e}e.call(t.prototype)}}else{try{throw Error()}catch(e){r=e}e()}}catch(t){if(t&&r&&"string"==typeof t.stack){for(var o=t.stack.split("\n"),i=r.stack.split("\n"),a=o.length-1,l=i.length-1;1<=a&&0<=l&&o[a]!==i[l];)l--;for(;1<=a&&0<=l;a--,l--)if(o[a]!==i[l]){if(1!==a||1!==l)do if(a--,0>--l||o[a]!==i[l]){var s="\n"+o[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l)break}}}finally{eo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?er(e):""}function ea(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function el(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function es(e){e._valueTracker||(e._valueTracker=function(e){var t=el(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&void 0!==n&&"function"==typeof n.get&&"function"==typeof n.set){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(e){r=""+e,i.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function eu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=el(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function ec(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function ed(e,t){var n=t.checked;return en({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function ef(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=ea(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function ep(e,t){null!=(t=t.checked)&&C(e,"checked",t,!1)}function eh(e,t){ep(e,t);var n=ea(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r){e.removeAttribute("value");return}t.hasOwnProperty("value")?eg(e,t.type,n):t.hasOwnProperty("defaultValue")&&eg(e,t.type,ea(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function em(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function eg(e,t,n){("number"!==t||ec(e.ownerDocument)!==e)&&(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ev=Array.isArray;function ey(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(o=0,n=""+ea(n),t=null;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}null!==t||e[o].disabled||(t=e[o])}null!==t&&(t.selected=!0)}}function eb(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(d(91));return en({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ew(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(d(92));if(ev(n)){if(1<n.length)throw Error(d(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:ea(n)}}function ex(e,t){var n=ea(t.value),r=ea(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function ek(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function eS(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function eE(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?eS(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var e_,eC,eP=(e_=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((eC=eC||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=eC.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction(function(){return e_(e,t,n,r)})}:e_);function eR(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType){n.nodeValue=t;return}}e.textContent=t}var eN={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},eO=["Webkit","ms","Moz","O"];function eT(e,t,n){return null==t||"boolean"==typeof t||""===t?"":n||"number"!=typeof t||0===t||eN.hasOwnProperty(e)&&eN[e]?(""+t).trim():t+"px"}function ej(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),o=eT(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}Object.keys(eN).forEach(function(e){eO.forEach(function(t){eN[t=t+e.charAt(0).toUpperCase()+e.substring(1)]=eN[e]})});var eM=en({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function eA(e,t){if(t){if(eM[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(d(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(d(60));if("object"!=typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(d(61))}if(null!=t.style&&"object"!=typeof t.style)throw Error(d(62))}}function ez(e,t){if(-1===e.indexOf("-"))return"string"==typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var eD=null;function eI(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var eL=null,eF=null,e$=null;function eV(e){if(e=rQ(e)){if("function"!=typeof eL)throw Error(d(280));var t=e.stateNode;t&&(t=rX(t),eL(e.stateNode,e.type,t))}}function eU(e){eF?e$?e$.push(e):e$=[e]:eF=e}function eW(){if(eF){var e=eF,t=e$;if(e$=eF=null,eV(e),t)for(e=0;e<t.length;e++)eV(t[e])}}function eB(e,t){return e(t)}function eH(){}var eY=!1;function eq(e,t,n){if(eY)return e(t,n);eY=!0;try{return eB(e,t,n)}finally{eY=!1,(null!==eF||null!==e$)&&(eH(),eW())}}function eG(e,t){var n=e.stateNode;if(null===n)return null;var r=rX(n);if(null===r)return null;switch(n=r[t],t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break;default:e=!1}if(e)return null;if(n&&"function"!=typeof n)throw Error(d(231,t,typeof n));return n}var eQ=!1;if(g)try{var eK={};Object.defineProperty(eK,"passive",{get:function(){eQ=!0}}),window.addEventListener("test",eK,eK),window.removeEventListener("test",eK,eK)}catch(e){eQ=!1}function eX(e,t,n,r,o,i,a,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(e){this.onError(e)}}var eZ=!1,eJ=null,e0=!1,e1=null,e2={onError:function(e){eZ=!0,eJ=e}};function e3(e,t,n,r,o,i,a,l,s){eZ=!1,eJ=null,eX.apply(e2,arguments)}function e4(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do 0!=(4098&(t=e).flags)&&(n=t.return),e=t.return;while(e)}return 3===t.tag?n:null}function e5(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&null!==(e=e.alternate)&&(t=e.memoizedState),null!==t)return t.dehydrated}return null}function e8(e){if(e4(e)!==e)throw Error(d(188))}function e6(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=e4(e)))throw Error(d(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(null===o)break;var i=o.alternate;if(null===i){if(null!==(r=o.return)){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return e8(o),e;if(i===r)return e8(o),t;i=i.sibling}throw Error(d(188))}if(n.return!==r.return)n=o,r=i;else{for(var a=!1,l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a){for(l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a)throw Error(d(189))}}if(n.alternate!==r)throw Error(d(190))}if(3!==n.tag)throw Error(d(188));return n.stateNode.current===n?e:t}(e))?function e(t){if(5===t.tag||6===t.tag)return t;for(t=t.child;null!==t;){var n=e(t);if(null!==n)return n;t=t.sibling}return null}(e):null}var e9=c.unstable_scheduleCallback,e7=c.unstable_cancelCallback,te=c.unstable_shouldYield,tt=c.unstable_requestPaint,tn=c.unstable_now,tr=c.unstable_getCurrentPriorityLevel,to=c.unstable_ImmediatePriority,ti=c.unstable_UserBlockingPriority,ta=c.unstable_NormalPriority,tl=c.unstable_LowPriority,ts=c.unstable_IdlePriority,tu=null,tc=null,td=Math.clz32?Math.clz32:function(e){return 0==(e>>>=0)?32:31-(tf(e)/tp|0)|0},tf=Math.log,tp=Math.LN2,th=64,tm=4194304;function tg(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function tv(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=268435455&n;if(0!==a){var l=a&~o;0!==l?r=tg(l):0!=(i&=a)&&(r=tg(i))}else 0!=(a=n&~o)?r=tg(a):0!==i&&(r=tg(i));if(0===r)return 0;if(0!==t&&t!==r&&0==(t&o)&&((o=r&-r)>=(i=t&-t)||16===o&&0!=(4194240&i)))return t;if(0!=(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)o=1<<(n=31-td(t)),r|=e[n],t&=~o;return r}function ty(e){return 0!=(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function tb(){var e=th;return 0==(4194240&(th<<=1))&&(th=64),e}function tw(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function tx(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-td(t)]=n}function tk(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-td(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var tS=0;function tE(e){return 1<(e&=-e)?4<e?0!=(268435455&e)?16:536870912:4:1}var t_,tC,tP,tR,tN,tO=!1,tT=[],tj=null,tM=null,tA=null,tz=new Map,tD=new Map,tI=[],tL="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function tF(e,t){switch(e){case"focusin":case"focusout":tj=null;break;case"dragenter":case"dragleave":tM=null;break;case"mouseover":case"mouseout":tA=null;break;case"pointerover":case"pointerout":tz.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":tD.delete(t.pointerId)}}function t$(e,t,n,r,o,i){return null===e||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},null!==t&&null!==(t=rQ(t))&&tC(t)):(e.eventSystemFlags|=r,t=e.targetContainers,null!==o&&-1===t.indexOf(o)&&t.push(o)),e}function tV(e){var t=rG(e.target);if(null!==t){var n=e4(t);if(null!==n){if(13===(t=n.tag)){if(null!==(t=e5(n))){e.blockedOn=t,tN(e.priority,function(){tP(n)});return}}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=3===n.tag?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function tU(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=tJ(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=rQ(n))&&tC(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);eD=r,n.target.dispatchEvent(r),eD=null,t.shift()}return!0}function tW(e,t,n){tU(e)&&n.delete(t)}function tB(){tO=!1,null!==tj&&tU(tj)&&(tj=null),null!==tM&&tU(tM)&&(tM=null),null!==tA&&tU(tA)&&(tA=null),tz.forEach(tW),tD.forEach(tW)}function tH(e,t){e.blockedOn===t&&(e.blockedOn=null,tO||(tO=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,tB)))}function tY(e){function t(t){return tH(t,e)}if(0<tT.length){tH(tT[0],e);for(var n=1;n<tT.length;n++){var r=tT[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==tj&&tH(tj,e),null!==tM&&tH(tM,e),null!==tA&&tH(tA,e),tz.forEach(t),tD.forEach(t),n=0;n<tI.length;n++)(r=tI[n]).blockedOn===e&&(r.blockedOn=null);for(;0<tI.length&&null===(n=tI[0]).blockedOn;)tV(n),null===n.blockedOn&&tI.shift()}var tq=P.ReactCurrentBatchConfig,tG=!0;function tQ(e,t,n,r){var o=tS,i=tq.transition;tq.transition=null;try{tS=1,tX(e,t,n,r)}finally{tS=o,tq.transition=i}}function tK(e,t,n,r){var o=tS,i=tq.transition;tq.transition=null;try{tS=4,tX(e,t,n,r)}finally{tS=o,tq.transition=i}}function tX(e,t,n,r){if(tG){var o=tJ(e,t,n,r);if(null===o)rw(e,t,r,tZ,n),tF(e,r);else if(function(e,t,n,r,o){switch(t){case"focusin":return tj=t$(tj,e,t,n,r,o),!0;case"dragenter":return tM=t$(tM,e,t,n,r,o),!0;case"mouseover":return tA=t$(tA,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return tz.set(i,t$(tz.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,tD.set(i,t$(tD.get(i)||null,e,t,n,r,o)),!0}return!1}(o,e,t,n,r))r.stopPropagation();else if(tF(e,r),4&t&&-1<tL.indexOf(e)){for(;null!==o;){var i=rQ(o);if(null!==i&&t_(i),null===(i=tJ(e,t,n,r))&&rw(e,t,r,tZ,n),i===o)break;o=i}null!==o&&r.stopPropagation()}else rw(e,t,r,null,n)}}var tZ=null;function tJ(e,t,n,r){if(tZ=null,null!==(e=rG(e=eI(r)))){if(null===(t=e4(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=e5(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}return tZ=e,null}function t0(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(tr()){case to:return 1;case ti:return 4;case ta:case tl:return 16;case ts:return 536870912;default:return 16}default:return 16}}var t1=null,t2=null,t3=null;function t4(){if(t3)return t3;var e,t,n=t2,r=n.length,o="value"in t1?t1.value:t1.textContent,i=o.length;for(e=0;e<r&&n[e]===o[e];e++);var a=r-e;for(t=1;t<=a&&n[r-t]===o[i-t];t++);return t3=o.slice(e,1<t?1-t:void 0)}function t5(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function t8(){return!0}function t6(){return!1}function t9(e){function t(t,n,r,o,i){for(var a in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=o,this.target=i,this.currentTarget=null,e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(o):o[a]);return this.isDefaultPrevented=(null!=o.defaultPrevented?o.defaultPrevented:!1===o.returnValue)?t8:t6,this.isPropagationStopped=t6,this}return en(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=t8)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=t8)},persist:function(){},isPersistent:t8}),t}var t7,ne,nt,nn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nr=t9(nn),no=en({},nn,{view:0,detail:0}),ni=t9(no),na=en({},no,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nv,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==nt&&(nt&&"mousemove"===e.type?(t7=e.screenX-nt.screenX,ne=e.screenY-nt.screenY):ne=t7=0,nt=e),t7)},movementY:function(e){return"movementY"in e?e.movementY:ne}}),nl=t9(na),ns=t9(en({},na,{dataTransfer:0})),nu=t9(en({},no,{relatedTarget:0})),nc=t9(en({},nn,{animationName:0,elapsedTime:0,pseudoElement:0})),nd=t9(en({},nn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}})),nf=t9(en({},nn,{data:0})),np={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ng(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=nm[e])&&!!t[e]}function nv(){return ng}var ny=t9(en({},no,{key:function(e){if(e.key){var t=np[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=t5(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?nh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nv,charCode:function(e){return"keypress"===e.type?t5(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?t5(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}})),nb=t9(en({},na,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),nw=t9(en({},no,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nv})),nx=t9(en({},nn,{propertyName:0,elapsedTime:0,pseudoElement:0})),nk=t9(en({},na,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),nS=[9,13,27,32],nE=g&&"CompositionEvent"in window,n_=null;g&&"documentMode"in document&&(n_=document.documentMode);var nC=g&&"TextEvent"in window&&!n_,nP=g&&(!nE||n_&&8<n_&&11>=n_),nR=!1;function nN(e,t){switch(e){case"keyup":return -1!==nS.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nO(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}var nT=!1,nj={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nM(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!nj[e.type]:"textarea"===t}function nA(e,t,n,r){eU(r),0<(t=rk(t,"onChange")).length&&(n=new nr("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var nz=null,nD=null;function nI(e){rh(e,0)}function nL(e){if(eu(rK(e)))return e}function nF(e,t){if("change"===e)return t}var n$=!1;if(g){if(g){var nV="oninput"in document;if(!nV){var nU=document.createElement("div");nU.setAttribute("oninput","return;"),nV="function"==typeof nU.oninput}r=nV}else r=!1;n$=r&&(!document.documentMode||9<document.documentMode)}function nW(){nz&&(nz.detachEvent("onpropertychange",nB),nD=nz=null)}function nB(e){if("value"===e.propertyName&&nL(nD)){var t=[];nA(t,nD,e,eI(e)),eq(nI,t)}}function nH(e,t,n){"focusin"===e?(nW(),nz=t,nD=n,nz.attachEvent("onpropertychange",nB)):"focusout"===e&&nW()}function nY(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return nL(nD)}function nq(e,t){if("click"===e)return nL(t)}function nG(e,t){if("input"===e||"change"===e)return nL(t)}var nQ="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t};function nK(e,t){if(nQ(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!v.call(t,o)||!nQ(e[o],t[o]))return!1}return!0}function nX(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function nZ(e,t){var n,r=nX(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=nX(r)}}function nJ(){for(var e=window,t=ec();t instanceof e.HTMLIFrameElement;){try{var n="string"==typeof t.contentWindow.location.href}catch(e){n=!1}if(n)e=t.contentWindow;else break;t=ec(e.document)}return t}function n0(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}var n1=g&&"documentMode"in document&&11>=document.documentMode,n2=null,n3=null,n4=null,n5=!1;function n8(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;n5||null==n2||n2!==ec(r)||(r="selectionStart"in(r=n2)&&n0(r)?{start:r.selectionStart,end:r.selectionEnd}:{anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},n4&&nK(n4,r)||(n4=r,0<(r=rk(n3,"onSelect")).length&&(t=new nr("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=n2)))}function n6(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var n9={animationend:n6("Animation","AnimationEnd"),animationiteration:n6("Animation","AnimationIteration"),animationstart:n6("Animation","AnimationStart"),transitionend:n6("Transition","TransitionEnd")},n7={},re={};function rt(e){if(n7[e])return n7[e];if(!n9[e])return e;var t,n=n9[e];for(t in n)if(n.hasOwnProperty(t)&&t in re)return n7[e]=n[t];return e}g&&(re=document.createElement("div").style,"AnimationEvent"in window||(delete n9.animationend.animation,delete n9.animationiteration.animation,delete n9.animationstart.animation),"TransitionEvent"in window||delete n9.transitionend.transition);var rn=rt("animationend"),rr=rt("animationiteration"),ro=rt("animationstart"),ri=rt("transitionend"),ra=new Map,rl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rs(e,t){ra.set(e,t),h(t,[e])}for(var ru=0;ru<rl.length;ru++){var rc=rl[ru];rs(rc.toLowerCase(),"on"+(rc[0].toUpperCase()+rc.slice(1)))}rs(rn,"onAnimationEnd"),rs(rr,"onAnimationIteration"),rs(ro,"onAnimationStart"),rs("dblclick","onDoubleClick"),rs("focusin","onFocus"),rs("focusout","onBlur"),rs(ri,"onTransitionEnd"),m("onMouseEnter",["mouseout","mouseover"]),m("onMouseLeave",["mouseout","mouseover"]),m("onPointerEnter",["pointerout","pointerover"]),m("onPointerLeave",["pointerout","pointerover"]),h("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),h("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),h("onBeforeInput",["compositionend","keypress","textInput","paste"]),h("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var rd="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rf=new Set("cancel close invalid load scroll toggle".split(" ").concat(rd));function rp(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,o,i,a,l,s){if(e3.apply(this,arguments),eZ){if(eZ){var u=eJ;eZ=!1,eJ=null}else throw Error(d(198));e0||(e0=!0,e1=u)}}(r,t,void 0,e),e.currentTarget=null}function rh(e,t){t=0!=(4&t);for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==i&&o.isPropagationStopped())break e;rp(o,l,u),i=s}else for(a=0;a<r.length;a++){if(s=(l=r[a]).instance,u=l.currentTarget,l=l.listener,s!==i&&o.isPropagationStopped())break e;rp(o,l,u),i=s}}}if(e0)throw e=e1,e0=!1,e1=null,e}function rm(e,t){var n=t[rH];void 0===n&&(n=t[rH]=new Set);var r=e+"__bubble";n.has(r)||(rb(t,e,2,!1),n.add(r))}function rg(e,t,n){var r=0;t&&(r|=4),rb(n,e,r,t)}var rv="_reactListening"+Math.random().toString(36).slice(2);function ry(e){if(!e[rv]){e[rv]=!0,f.forEach(function(t){"selectionchange"!==t&&(rf.has(t)||rg(t,!1,e),rg(t,!0,e))});var t=9===e.nodeType?e:e.ownerDocument;null===t||t[rv]||(t[rv]=!0,rg("selectionchange",!1,t))}}function rb(e,t,n,r){switch(t0(t)){case 1:var o=tQ;break;case 4:o=tK;break;default:o=tX}n=o.bind(null,t,n,e),o=void 0,eQ&&("touchstart"===t||"touchmove"===t||"wheel"===t)&&(o=!0),r?void 0!==o?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):void 0!==o?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function rw(e,t,n,r,o){var i=r;if(0==(1&t)&&0==(2&t)&&null!==r)e:for(;;){if(null===r)return;var a=r.tag;if(3===a||4===a){var l=r.stateNode.containerInfo;if(l===o||8===l.nodeType&&l.parentNode===o)break;if(4===a)for(a=r.return;null!==a;){var s=a.tag;if((3===s||4===s)&&((s=a.stateNode.containerInfo)===o||8===s.nodeType&&s.parentNode===o))return;a=a.return}for(;null!==l;){if(null===(a=rG(l)))return;if(5===(s=a.tag)||6===s){r=i=a;continue e}l=l.parentNode}}r=r.return}eq(function(){var r=i,o=eI(n),a=[];e:{var l=ra.get(e);if(void 0!==l){var s=nr,u=e;switch(e){case"keypress":if(0===t5(n))break e;case"keydown":case"keyup":s=ny;break;case"focusin":u="focus",s=nu;break;case"focusout":u="blur",s=nu;break;case"beforeblur":case"afterblur":s=nu;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":s=nl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":s=ns;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":s=nw;break;case rn:case rr:case ro:s=nc;break;case ri:s=nx;break;case"scroll":s=ni;break;case"wheel":s=nk;break;case"copy":case"cut":case"paste":s=nd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":s=nb}var c=0!=(4&t),d=!c&&"scroll"===e,f=c?null!==l?l+"Capture":null:l;c=[];for(var p,h=r;null!==h;){var m=(p=h).stateNode;if(5===p.tag&&null!==m&&(p=m,null!==f&&null!=(m=eG(h,f))&&c.push(rx(h,m,p))),d)break;h=h.return}0<c.length&&(l=new s(l,u,null,n,o),a.push({event:l,listeners:c}))}}if(0==(7&t)){if(l="mouseover"===e||"pointerover"===e,s="mouseout"===e||"pointerout"===e,!(l&&n!==eD&&(u=n.relatedTarget||n.fromElement)&&(rG(u)||u[rB]))&&(s||l)&&(l=o.window===o?o:(l=o.ownerDocument)?l.defaultView||l.parentWindow:window,s?(u=n.relatedTarget||n.toElement,s=r,null!==(u=u?rG(u):null)&&(d=e4(u),u!==d||5!==u.tag&&6!==u.tag)&&(u=null)):(s=null,u=r),s!==u)){if(c=nl,m="onMouseLeave",f="onMouseEnter",h="mouse",("pointerout"===e||"pointerover"===e)&&(c=nb,m="onPointerLeave",f="onPointerEnter",h="pointer"),d=null==s?l:rK(s),p=null==u?l:rK(u),(l=new c(m,h+"leave",s,n,o)).target=d,l.relatedTarget=p,m=null,rG(o)===r&&((c=new c(f,h+"enter",u,n,o)).target=p,c.relatedTarget=d,m=c),d=m,s&&u)t:{for(c=s,f=u,h=0,p=c;p;p=rS(p))h++;for(p=0,m=f;m;m=rS(m))p++;for(;0<h-p;)c=rS(c),h--;for(;0<p-h;)f=rS(f),p--;for(;h--;){if(c===f||null!==f&&c===f.alternate)break t;c=rS(c),f=rS(f)}c=null}else c=null;null!==s&&rE(a,l,s,c,!1),null!==u&&null!==d&&rE(a,d,u,c,!0)}e:{if("select"===(s=(l=r?rK(r):window).nodeName&&l.nodeName.toLowerCase())||"input"===s&&"file"===l.type)var g,v=nF;else if(nM(l)){if(n$)v=nG;else{v=nY;var y=nH}}else(s=l.nodeName)&&"input"===s.toLowerCase()&&("checkbox"===l.type||"radio"===l.type)&&(v=nq);if(v&&(v=v(e,r))){nA(a,v,n,o);break e}y&&y(e,l,r),"focusout"===e&&(y=l._wrapperState)&&y.controlled&&"number"===l.type&&eg(l,"number",l.value)}switch(y=r?rK(r):window,e){case"focusin":(nM(y)||"true"===y.contentEditable)&&(n2=y,n3=r,n4=null);break;case"focusout":n4=n3=n2=null;break;case"mousedown":n5=!0;break;case"contextmenu":case"mouseup":case"dragend":n5=!1,n8(a,n,o);break;case"selectionchange":if(n1)break;case"keydown":case"keyup":n8(a,n,o)}if(nE)t:{switch(e){case"compositionstart":var b="onCompositionStart";break t;case"compositionend":b="onCompositionEnd";break t;case"compositionupdate":b="onCompositionUpdate";break t}b=void 0}else nT?nN(e,n)&&(b="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(b="onCompositionStart");b&&(nP&&"ko"!==n.locale&&(nT||"onCompositionStart"!==b?"onCompositionEnd"===b&&nT&&(g=t4()):(t2="value"in(t1=o)?t1.value:t1.textContent,nT=!0)),0<(y=rk(r,b)).length&&(b=new nf(b,e,null,n,o),a.push({event:b,listeners:y}),g?b.data=g:null!==(g=nO(n))&&(b.data=g))),(g=nC?function(e,t){switch(e){case"compositionend":return nO(t);case"keypress":if(32!==t.which)return null;return nR=!0," ";case"textInput":return" "===(e=t.data)&&nR?null:e;default:return null}}(e,n):function(e,t){if(nT)return"compositionend"===e||!nE&&nN(e,t)?(e=t4(),t3=t2=t1=null,nT=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return nP&&"ko"!==t.locale?null:t.data}}(e,n))&&0<(r=rk(r,"onBeforeInput")).length&&(o=new nf("onBeforeInput","beforeinput",null,n,o),a.push({event:o,listeners:r}),o.data=g)}rh(a,t)})}function rx(e,t,n){return{instance:e,listener:t,currentTarget:n}}function rk(e,t){for(var n=t+"Capture",r=[];null!==e;){var o=e,i=o.stateNode;5===o.tag&&null!==i&&(o=i,null!=(i=eG(e,n))&&r.unshift(rx(e,i,o)),null!=(i=eG(e,t))&&r.push(rx(e,i,o))),e=e.return}return r}function rS(e){if(null===e)return null;do e=e.return;while(e&&5!==e.tag)return e||null}function rE(e,t,n,r,o){for(var i=t._reactName,a=[];null!==n&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(null!==s&&s===r)break;5===l.tag&&null!==u&&(l=u,o?null!=(s=eG(n,i))&&a.unshift(rx(n,s,l)):o||null!=(s=eG(n,i))&&a.push(rx(n,s,l))),n=n.return}0!==a.length&&e.push({event:t,listeners:a})}var r_=/\r\n?/g,rC=/\u0000|\uFFFD/g;function rP(e){return("string"==typeof e?e:""+e).replace(r_,"\n").replace(rC,"")}function rR(e,t,n){if(t=rP(t),rP(e)!==t&&n)throw Error(d(425))}function rN(){}var rO=null,rT=null;function rj(e,t){return"textarea"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var rM="function"==typeof setTimeout?setTimeout:void 0,rA="function"==typeof clearTimeout?clearTimeout:void 0,rz="function"==typeof Promise?Promise:void 0,rD="function"==typeof queueMicrotask?queueMicrotask:void 0!==rz?function(e){return rz.resolve(null).then(e).catch(rI)}:rM;function rI(e){setTimeout(function(){throw e})}function rL(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&8===o.nodeType){if("/$"===(n=o.data)){if(0===r){e.removeChild(o),tY(t);return}r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++}n=o}while(n)tY(t)}function rF(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function r$(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var rV=Math.random().toString(36).slice(2),rU="__reactFiber$"+rV,rW="__reactProps$"+rV,rB="__reactContainer$"+rV,rH="__reactEvents$"+rV,rY="__reactListeners$"+rV,rq="__reactHandles$"+rV;function rG(e){var t=e[rU];if(t)return t;for(var n=e.parentNode;n;){if(t=n[rB]||n[rU]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=r$(e);null!==e;){if(n=e[rU])return n;e=r$(e)}return t}n=(e=n).parentNode}return null}function rQ(e){return(e=e[rU]||e[rB])&&(5===e.tag||6===e.tag||13===e.tag||3===e.tag)?e:null}function rK(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(d(33))}function rX(e){return e[rW]||null}var rZ=[],rJ=-1;function r0(e){return{current:e}}function r1(e){0>rJ||(e.current=rZ[rJ],rZ[rJ]=null,rJ--)}function r2(e,t){rZ[++rJ]=e.current,e.current=t}var r3={},r4=r0(r3),r5=r0(!1),r8=r3;function r6(e,t){var n=e.type.contextTypes;if(!n)return r3;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o,i={};for(o in n)i[o]=t[o];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function r9(e){return null!=(e=e.childContextTypes)}function r7(){r1(r5),r1(r4)}function oe(e,t,n){if(r4.current!==r3)throw Error(d(168));r2(r4,t),r2(r5,n)}function ot(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!=typeof r.getChildContext)return n;for(var o in r=r.getChildContext())if(!(o in t))throw Error(d(108,function(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return function e(t){if(null==t)return null;if("function"==typeof t)return t.displayName||t.name||null;if("string"==typeof t)return t;switch(t){case O:return"Fragment";case N:return"Portal";case j:return"Profiler";case T:return"StrictMode";case D:return"Suspense";case I:return"SuspenseList"}if("object"==typeof t)switch(t.$$typeof){case A:return(t.displayName||"Context")+".Consumer";case M:return(t._context.displayName||"Context")+".Provider";case z:var n=t.render;return(t=t.displayName)||(t=""!==(t=n.displayName||n.name||"")?"ForwardRef("+t+")":"ForwardRef"),t;case L:return null!==(n=t.displayName||null)?n:e(t.type)||"Memo";case F:n=t._payload,t=t._init;try{return e(t(n))}catch(e){}}return null}(t);case 8:return t===T?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"==typeof t)return t.displayName||t.name||null;if("string"==typeof t)return t}return null}(e)||"Unknown",o));return en({},n,r)}function on(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||r3,r8=r4.current,r2(r4,e),r2(r5,r5.current),!0}function or(e,t,n){var r=e.stateNode;if(!r)throw Error(d(169));n?(e=ot(e,t,r8),r.__reactInternalMemoizedMergedChildContext=e,r1(r5),r1(r4),r2(r4,e)):r1(r5),r2(r5,n)}var oo=null,oi=!1,oa=!1;function ol(e){null===oo?oo=[e]:oo.push(e)}function os(){if(!oa&&null!==oo){oa=!0;var e=0,t=tS;try{var n=oo;for(tS=1;e<n.length;e++){var r=n[e];do r=r(!0);while(null!==r)}oo=null,oi=!1}catch(t){throw null!==oo&&(oo=oo.slice(e+1)),e9(to,os),t}finally{tS=t,oa=!1}}return null}var ou=[],oc=0,od=null,of=0,op=[],oh=0,om=null,og=1,ov="";function oy(e,t){ou[oc++]=of,ou[oc++]=od,od=e,of=t}function ob(e,t,n){op[oh++]=og,op[oh++]=ov,op[oh++]=om,om=e;var r=og;e=ov;var o=32-td(r)-1;r&=~(1<<o),n+=1;var i=32-td(t)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,og=1<<32-td(t)+o|n<<o|r,ov=i+e}else og=1<<i|n<<o|r,ov=e}function ow(e){null!==e.return&&(oy(e,1),ob(e,1,0))}function ox(e){for(;e===od;)od=ou[--oc],ou[oc]=null,of=ou[--oc],ou[oc]=null;for(;e===om;)om=op[--oh],op[oh]=null,ov=op[--oh],op[oh]=null,og=op[--oh],op[oh]=null}var ok=null,oS=null,oE=!1,o_=null;function oC(e,t){var n=l9(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function oP(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,ok=e,oS=rF(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,ok=e,oS=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==om?{id:og,overflow:ov}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=l9(18,null,null,0)).stateNode=t,n.return=e,e.child=n,ok=e,oS=null,!0);default:return!1}}function oR(e){return 0!=(1&e.mode)&&0==(128&e.flags)}function oN(e){if(oE){var t=oS;if(t){var n=t;if(!oP(e,t)){if(oR(e))throw Error(d(418));t=rF(n.nextSibling);var r=ok;t&&oP(e,t)?oC(r,n):(e.flags=-4097&e.flags|2,oE=!1,ok=e)}}else{if(oR(e))throw Error(d(418));e.flags=-4097&e.flags|2,oE=!1,ok=e}}}function oO(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;ok=e}function oT(e){if(e!==ok)return!1;if(!oE)return oO(e),oE=!0,!1;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!rj(e.type,e.memoizedProps)),t&&(t=oS)){if(oR(e))throw oj(),Error(d(418));for(;t;)oC(e,t),t=rF(t.nextSibling)}if(oO(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(d(317));e:{for(t=0,e=e.nextSibling;e;){if(8===e.nodeType){var t,n=e.data;if("/$"===n){if(0===t){oS=rF(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}oS=null}}else oS=ok?rF(e.stateNode.nextSibling):null;return!0}function oj(){for(var e=oS;e;)e=rF(e.nextSibling)}function oM(){oS=ok=null,oE=!1}function oA(e){null===o_?o_=[e]:o_.push(e)}var oz=P.ReactCurrentBatchConfig;function oD(e,t){if(e&&e.defaultProps)for(var n in t=en({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}var oI=r0(null),oL=null,oF=null,o$=null;function oV(){o$=oF=oL=null}function oU(e){var t=oI.current;r1(oI),e._currentValue=t}function oW(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function oB(e,t){oL=e,o$=oF=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!=(e.lanes&t)&&(ax=!0),e.firstContext=null)}function oH(e){var t=e._currentValue;if(o$!==e){if(e={context:e,memoizedValue:t,next:null},null===oF){if(null===oL)throw Error(d(308));oF=e,oL.dependencies={lanes:0,firstContext:e}}else oF=oF.next=e}return t}var oY=null;function oq(e){null===oY?oY=[e]:oY.push(e)}function oG(e,t,n,r){var o=t.interleaved;return null===o?(n.next=n,oq(t)):(n.next=o.next,o.next=n),t.interleaved=n,oQ(e,r)}function oQ(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var oK=!1;function oX(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function oZ(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function oJ(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function o0(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!=(2&ls)){var o=r.pending;return null===o?t.next=t:(t.next=o.next,o.next=t),r.pending=t,oQ(e,n)}return null===(o=r.interleaved)?(t.next=t,oq(r)):(t.next=o.next,o.next=t),r.interleaved=t,oQ(e,n)}function o1(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!=(4194240&n))){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,tk(e,n)}}function o2(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var o=null,i=null;if(null!==(n=n.firstBaseUpdate)){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===i?o=i=a:i=i.next=a,n=n.next}while(null!==n)null===i?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function o3(e,t,n,r){var o=e.updateQueue;oK=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,l=o.shared.pending;if(null!==l){o.shared.pending=null;var s=l,u=s.next;s.next=null,null===a?i=u:a.next=u,a=s;var c=e.alternate;null!==c&&(l=(c=c.updateQueue).lastBaseUpdate)!==a&&(null===l?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=s)}if(null!==i){var d=o.baseState;for(a=0,c=u=s=null,l=i;;){var f=l.lane,p=l.eventTime;if((r&f)===f){null!==c&&(c=c.next={eventTime:p,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var h=e,m=l;switch(f=t,p=n,m.tag){case 1:if("function"==typeof(h=m.payload)){d=h.call(p,d,f);break e}d=h;break e;case 3:h.flags=-65537&h.flags|128;case 0:if(null==(f="function"==typeof(h=m.payload)?h.call(p,d,f):h))break e;d=en({},d,f);break e;case 2:oK=!0}}null!==l.callback&&0!==l.lane&&(e.flags|=64,null===(f=o.effects)?o.effects=[l]:f.push(l))}else p={eventTime:p,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},null===c?(u=c=p,s=d):c=c.next=p,a|=f;if(null===(l=l.next)){if(null===(l=o.shared.pending))break;l=(f=l).next,f.next=null,o.lastBaseUpdate=f,o.shared.pending=null}}if(null===c&&(s=d),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=c,null!==(t=o.shared.interleaved)){o=t;do a|=o.lane,o=o.next;while(o!==t)}else null===i&&(o.shared.lanes=0);lg|=a,e.lanes=a,e.memoizedState=d}}function o4(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(null!==o){if(r.callback=null,r=n,"function"!=typeof o)throw Error(d(191,o));o.call(r)}}}var o5=(new u.Component).refs;function o8(e,t,n,r){n=null==(n=n(r,t=e.memoizedState))?t:en({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var o6={isMounted:function(e){return!!(e=e._reactInternals)&&e4(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=lA(),o=lz(e),i=oJ(r,o);i.payload=t,null!=n&&(i.callback=n),null!==(t=o0(e,i,o))&&(lD(t,e,o,r),o1(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=lA(),o=lz(e),i=oJ(r,o);i.tag=1,i.payload=t,null!=n&&(i.callback=n),null!==(t=o0(e,i,o))&&(lD(t,e,o,r),o1(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=lA(),r=lz(e),o=oJ(n,r);o.tag=2,null!=t&&(o.callback=t),null!==(t=o0(e,o,r))&&(lD(t,e,r,n),o1(t,e,r))}};function o9(e,t,n,r,o,i,a){return"function"==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,i,a):!t.prototype||!t.prototype.isPureReactComponent||!nK(n,r)||!nK(o,i)}function o7(e,t,n){var r=!1,o=r3,i=t.contextType;return"object"==typeof i&&null!==i?i=oH(i):(o=r9(t)?r8:r4.current,i=(r=null!=(r=t.contextTypes))?r6(e,o):r3),t=new t(n,i),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=o6,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function ie(e,t,n,r){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&o6.enqueueReplaceState(t,t.state,null)}function it(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=o5,oX(e);var i=t.contextType;"object"==typeof i&&null!==i?o.context=oH(i):(i=r9(t)?r8:r4.current,o.context=r6(e,i)),o.state=e.memoizedState,"function"==typeof(i=t.getDerivedStateFromProps)&&(o8(e,t,i,n),o.state=e.memoizedState),"function"==typeof t.getDerivedStateFromProps||"function"==typeof o.getSnapshotBeforeUpdate||"function"!=typeof o.UNSAFE_componentWillMount&&"function"!=typeof o.componentWillMount||(t=o.state,"function"==typeof o.componentWillMount&&o.componentWillMount(),"function"==typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount(),t!==o.state&&o6.enqueueReplaceState(o,o.state,null),o3(e,n,o,r),o.state=e.memoizedState),"function"==typeof o.componentDidMount&&(e.flags|=4194308)}function ir(e,t,n){if(null!==(e=n.ref)&&"function"!=typeof e&&"object"!=typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(d(309));var r=n.stateNode}if(!r)throw Error(d(147,e));var o=r,i=""+e;return null!==t&&null!==t.ref&&"function"==typeof t.ref&&t.ref._stringRef===i?t.ref:((t=function(e){var t=o.refs;t===o5&&(t=o.refs={}),null===e?delete t[i]:t[i]=e})._stringRef=i,t)}if("string"!=typeof e)throw Error(d(284));if(!n._owner)throw Error(d(290,e))}return e}function io(e,t){throw Error(d(31,"[object Object]"===(e=Object.prototype.toString.call(t))?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ii(e){return(0,e._init)(e._payload)}function ia(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function o(e,t){return(e=se(e,t)).index=0,e.sibling=null,e}function i(t,n,r){return(t.index=r,e)?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function a(t){return e&&null===t.alternate&&(t.flags|=2),t}function l(e,t,n,r){return null===t||6!==t.tag?(t=so(n,e.mode,r)).return=e:(t=o(t,n)).return=e,t}function s(e,t,n,r){var i=n.type;return i===O?c(e,t,n.props.children,r,n.key):(null!==t&&(t.elementType===i||"object"==typeof i&&null!==i&&i.$$typeof===F&&ii(i)===t.type)?(r=o(t,n.props)).ref=ir(e,t,n):(r=st(n.type,n.key,n.props,null,e.mode,r)).ref=ir(e,t,n),r.return=e,r)}function u(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=si(n,e.mode,r)).return=e:(t=o(t,n.children||[])).return=e,t}function c(e,t,n,r,i){return null===t||7!==t.tag?(t=sn(n,e.mode,r,i)).return=e:(t=o(t,n)).return=e,t}function f(e,t,n){if("string"==typeof t&&""!==t||"number"==typeof t)return(t=so(""+t,e.mode,n)).return=e,t;if("object"==typeof t&&null!==t){switch(t.$$typeof){case R:return(n=st(t.type,t.key,t.props,null,e.mode,n)).ref=ir(e,null,t),n.return=e,n;case N:return(t=si(t,e.mode,n)).return=e,t;case F:return f(e,(0,t._init)(t._payload),n)}if(ev(t)||U(t))return(t=sn(t,e.mode,n,null)).return=e,t;io(e,t)}return null}function p(e,t,n,r){var o=null!==t?t.key:null;if("string"==typeof n&&""!==n||"number"==typeof n)return null!==o?null:l(e,t,""+n,r);if("object"==typeof n&&null!==n){switch(n.$$typeof){case R:return n.key===o?s(e,t,n,r):null;case N:return n.key===o?u(e,t,n,r):null;case F:return p(e,t,(o=n._init)(n._payload),r)}if(ev(n)||U(n))return null!==o?null:c(e,t,n,r,null);io(e,n)}return null}function h(e,t,n,r,o){if("string"==typeof r&&""!==r||"number"==typeof r)return l(t,e=e.get(n)||null,""+r,o);if("object"==typeof r&&null!==r){switch(r.$$typeof){case R:return s(t,e=e.get(null===r.key?n:r.key)||null,r,o);case N:return u(t,e=e.get(null===r.key?n:r.key)||null,r,o);case F:return h(e,t,n,(0,r._init)(r._payload),o)}if(ev(r)||U(r))return c(t,e=e.get(n)||null,r,o,null);io(t,r)}return null}return function l(s,u,c,m){if("object"==typeof c&&null!==c&&c.type===O&&null===c.key&&(c=c.props.children),"object"==typeof c&&null!==c){switch(c.$$typeof){case R:e:{for(var g=c.key,v=u;null!==v;){if(v.key===g){if((g=c.type)===O){if(7===v.tag){n(s,v.sibling),(u=o(v,c.props.children)).return=s,s=u;break e}}else if(v.elementType===g||"object"==typeof g&&null!==g&&g.$$typeof===F&&ii(g)===v.type){n(s,v.sibling),(u=o(v,c.props)).ref=ir(s,v,c),u.return=s,s=u;break e}n(s,v);break}t(s,v),v=v.sibling}c.type===O?((u=sn(c.props.children,s.mode,m,c.key)).return=s,s=u):((m=st(c.type,c.key,c.props,null,s.mode,m)).ref=ir(s,u,c),m.return=s,s=m)}return a(s);case N:e:{for(v=c.key;null!==u;){if(u.key===v){if(4===u.tag&&u.stateNode.containerInfo===c.containerInfo&&u.stateNode.implementation===c.implementation){n(s,u.sibling),(u=o(u,c.children||[])).return=s,s=u;break e}n(s,u);break}t(s,u),u=u.sibling}(u=si(c,s.mode,m)).return=s,s=u}return a(s);case F:return l(s,u,(v=c._init)(c._payload),m)}if(ev(c))return function(o,a,l,s){for(var u=null,c=null,d=a,m=a=0,g=null;null!==d&&m<l.length;m++){d.index>m?(g=d,d=null):g=d.sibling;var v=p(o,d,l[m],s);if(null===v){null===d&&(d=g);break}e&&d&&null===v.alternate&&t(o,d),a=i(v,a,m),null===c?u=v:c.sibling=v,c=v,d=g}if(m===l.length)return n(o,d),oE&&oy(o,m),u;if(null===d){for(;m<l.length;m++)null!==(d=f(o,l[m],s))&&(a=i(d,a,m),null===c?u=d:c.sibling=d,c=d);return oE&&oy(o,m),u}for(d=r(o,d);m<l.length;m++)null!==(g=h(d,o,m,l[m],s))&&(e&&null!==g.alternate&&d.delete(null===g.key?m:g.key),a=i(g,a,m),null===c?u=g:c.sibling=g,c=g);return e&&d.forEach(function(e){return t(o,e)}),oE&&oy(o,m),u}(s,u,c,m);if(U(c))return function(o,a,l,s){var u=U(l);if("function"!=typeof u)throw Error(d(150));if(null==(l=u.call(l)))throw Error(d(151));for(var c=u=null,m=a,g=a=0,v=null,y=l.next();null!==m&&!y.done;g++,y=l.next()){m.index>g?(v=m,m=null):v=m.sibling;var b=p(o,m,y.value,s);if(null===b){null===m&&(m=v);break}e&&m&&null===b.alternate&&t(o,m),a=i(b,a,g),null===c?u=b:c.sibling=b,c=b,m=v}if(y.done)return n(o,m),oE&&oy(o,g),u;if(null===m){for(;!y.done;g++,y=l.next())null!==(y=f(o,y.value,s))&&(a=i(y,a,g),null===c?u=y:c.sibling=y,c=y);return oE&&oy(o,g),u}for(m=r(o,m);!y.done;g++,y=l.next())null!==(y=h(m,o,g,y.value,s))&&(e&&null!==y.alternate&&m.delete(null===y.key?g:y.key),a=i(y,a,g),null===c?u=y:c.sibling=y,c=y);return e&&m.forEach(function(e){return t(o,e)}),oE&&oy(o,g),u}(s,u,c,m);io(s,c)}return"string"==typeof c&&""!==c||"number"==typeof c?(c=""+c,null!==u&&6===u.tag?(n(s,u.sibling),(u=o(u,c)).return=s):(n(s,u),(u=so(c,s.mode,m)).return=s),a(s=u)):n(s,u)}}var il=ia(!0),is=ia(!1),iu={},ic=r0(iu),id=r0(iu),ip=r0(iu);function ih(e){if(e===iu)throw Error(d(174));return e}function im(e,t){switch(r2(ip,t),r2(id,e),r2(ic,iu),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:eE(null,"");break;default:t=eE(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}r1(ic),r2(ic,t)}function ig(){r1(ic),r1(id),r1(ip)}function iv(e){ih(ip.current);var t=ih(ic.current),n=eE(t,e.type);t!==n&&(r2(id,e),r2(ic,n))}function iy(e){id.current===e&&(r1(ic),r1(id))}var ib=r0(0);function iw(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!=(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ix=[];function ik(){for(var e=0;e<ix.length;e++)ix[e]._workInProgressVersionPrimary=null;ix.length=0}var iS=P.ReactCurrentDispatcher,iE=P.ReactCurrentBatchConfig,i_=0,iC=null,iP=null,iR=null,iN=!1,iO=!1,iT=0,ij=0;function iM(){throw Error(d(321))}function iA(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!nQ(e[n],t[n]))return!1;return!0}function iz(e,t,n,r,o,i){if(i_=i,iC=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,iS.current=null===e||null===e.memoizedState?as:au,e=n(r,o),iO){i=0;do{if(iO=!1,iT=0,25<=i)throw Error(d(301));i+=1,iR=iP=null,t.updateQueue=null,iS.current=ac,e=n(r,o)}while(iO)}if(iS.current=al,t=null!==iP&&null!==iP.next,i_=0,iR=iP=iC=null,iN=!1,t)throw Error(d(300));return e}function iD(){var e=0!==iT;return iT=0,e}function iI(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===iR?iC.memoizedState=iR=e:iR=iR.next=e,iR}function iL(){if(null===iP){var e=iC.alternate;e=null!==e?e.memoizedState:null}else e=iP.next;var t=null===iR?iC.memoizedState:iR.next;if(null!==t)iR=t,iP=e;else{if(null===e)throw Error(d(310));e={memoizedState:(iP=e).memoizedState,baseState:iP.baseState,baseQueue:iP.baseQueue,queue:iP.queue,next:null},null===iR?iC.memoizedState=iR=e:iR=iR.next=e}return iR}function iF(e,t){return"function"==typeof t?t(e):t}function i$(e){var t=iL(),n=t.queue;if(null===n)throw Error(d(311));n.lastRenderedReducer=e;var r=iP,o=r.baseQueue,i=n.pending;if(null!==i){if(null!==o){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,n.pending=null}if(null!==o){i=o.next,r=r.baseState;var l=a=null,s=null,u=i;do{var c=u.lane;if((i_&c)===c)null!==s&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};null===s?(l=s=f,a=r):s=s.next=f,iC.lanes|=c,lg|=c}u=u.next}while(null!==u&&u!==i)null===s?a=r:s.next=l,nQ(r,t.memoizedState)||(ax=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(null!==(e=n.interleaved)){o=e;do i=o.lane,iC.lanes|=i,lg|=i,o=o.next;while(o!==e)}else null===o&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function iV(e){var t=iL(),n=t.queue;if(null===n)throw Error(d(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(null!==o){n.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o)nQ(i,t.memoizedState)||(ax=!0),t.memoizedState=i,null===t.baseQueue&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function iU(){}function iW(e,t){var n=iC,r=iL(),o=t(),i=!nQ(r.memoizedState,o);if(i&&(r.memoizedState=o,ax=!0),r=r.queue,i1(iY.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||null!==iR&&1&iR.memoizedState.tag){if(n.flags|=2048,iK(9,iH.bind(null,n,r,o,t),void 0,null),null===lu)throw Error(d(349));0!=(30&i_)||iB(n,t,o)}return o}function iB(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=iC.updateQueue)?(t={lastEffect:null,stores:null},iC.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function iH(e,t,n,r){t.value=n,t.getSnapshot=r,iq(t)&&iG(e)}function iY(e,t,n){return n(function(){iq(t)&&iG(e)})}function iq(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!nQ(e,n)}catch(e){return!0}}function iG(e){var t=oQ(e,1);null!==t&&lD(t,e,1,-1)}function iQ(e){var t=iI();return"function"==typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:iF,lastRenderedState:e},t.queue=e,e=e.dispatch=ar.bind(null,iC,e),[t.memoizedState,e]}function iK(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=iC.updateQueue)?(t={lastEffect:null,stores:null},iC.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function iX(){return iL().memoizedState}function iZ(e,t,n,r){var o=iI();iC.flags|=e,o.memoizedState=iK(1|t,n,void 0,void 0===r?null:r)}function iJ(e,t,n,r){var o=iL();r=void 0===r?null:r;var i=void 0;if(null!==iP){var a=iP.memoizedState;if(i=a.destroy,null!==r&&iA(r,a.deps)){o.memoizedState=iK(t,n,i,r);return}}iC.flags|=e,o.memoizedState=iK(1|t,n,i,r)}function i0(e,t){return iZ(8390656,8,e,t)}function i1(e,t){return iJ(2048,8,e,t)}function i2(e,t){return iJ(4,2,e,t)}function i3(e,t){return iJ(4,4,e,t)}function i4(e,t){return"function"==typeof t?(t(e=e()),function(){t(null)}):null!=t?(e=e(),t.current=e,function(){t.current=null}):void 0}function i5(e,t,n){return n=null!=n?n.concat([e]):null,iJ(4,4,i4.bind(null,t,e),n)}function i8(){}function i6(e,t){var n=iL();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&iA(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function i9(e,t){var n=iL();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&iA(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function i7(e,t,n){return 0==(21&i_)?(e.baseState&&(e.baseState=!1,ax=!0),e.memoizedState=n):(nQ(n,t)||(n=tb(),iC.lanes|=n,lg|=n,e.baseState=!0),t)}function ae(e,t){var n=tS;tS=0!==n&&4>n?n:4,e(!0);var r=iE.transition;iE.transition={};try{e(!1),t()}finally{tS=n,iE.transition=r}}function at(){return iL().memoizedState}function an(e,t,n){var r=lz(e);n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ao(e)?ai(t,n):null!==(n=oG(e,t,n,r))&&(lD(n,e,r,lA()),aa(n,t,r))}function ar(e,t,n){var r=lz(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ao(e))ai(t,o);else{var i=e.alternate;if(0===e.lanes&&(null===i||0===i.lanes)&&null!==(i=t.lastRenderedReducer))try{var a=t.lastRenderedState,l=i(a,n);if(o.hasEagerState=!0,o.eagerState=l,nQ(l,a)){var s=t.interleaved;null===s?(o.next=o,oq(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch(e){}finally{}null!==(n=oG(e,t,o,r))&&(lD(n,e,r,o=lA()),aa(n,t,r))}}function ao(e){var t=e.alternate;return e===iC||null!==t&&t===iC}function ai(e,t){iO=iN=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function aa(e,t,n){if(0!=(4194240&n)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,tk(e,n)}}var al={readContext:oH,useCallback:iM,useContext:iM,useEffect:iM,useImperativeHandle:iM,useInsertionEffect:iM,useLayoutEffect:iM,useMemo:iM,useReducer:iM,useRef:iM,useState:iM,useDebugValue:iM,useDeferredValue:iM,useTransition:iM,useMutableSource:iM,useSyncExternalStore:iM,useId:iM,unstable_isNewReconciler:!1},as={readContext:oH,useCallback:function(e,t){return iI().memoizedState=[e,void 0===t?null:t],e},useContext:oH,useEffect:i0,useImperativeHandle:function(e,t,n){return n=null!=n?n.concat([e]):null,iZ(4194308,4,i4.bind(null,t,e),n)},useLayoutEffect:function(e,t){return iZ(4194308,4,e,t)},useInsertionEffect:function(e,t){return iZ(4,2,e,t)},useMemo:function(e,t){var n=iI();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=iI();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=an.bind(null,iC,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},iI().memoizedState=e},useState:iQ,useDebugValue:i8,useDeferredValue:function(e){return iI().memoizedState=e},useTransition:function(){var e=iQ(!1),t=e[0];return e=ae.bind(null,e[1]),iI().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=iC,o=iI();if(oE){if(void 0===n)throw Error(d(407));n=n()}else{if(n=t(),null===lu)throw Error(d(349));0!=(30&i_)||iB(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,i0(iY.bind(null,r,i,e),[e]),r.flags|=2048,iK(9,iH.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=iI(),t=lu.identifierPrefix;if(oE){var n=ov,r=og;t=":"+t+"R"+(n=(r&~(1<<32-td(r)-1)).toString(32)+n),0<(n=iT++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=ij++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},au={readContext:oH,useCallback:i6,useContext:oH,useEffect:i1,useImperativeHandle:i5,useInsertionEffect:i2,useLayoutEffect:i3,useMemo:i9,useReducer:i$,useRef:iX,useState:function(){return i$(iF)},useDebugValue:i8,useDeferredValue:function(e){return i7(iL(),iP.memoizedState,e)},useTransition:function(){return[i$(iF)[0],iL().memoizedState]},useMutableSource:iU,useSyncExternalStore:iW,useId:at,unstable_isNewReconciler:!1},ac={readContext:oH,useCallback:i6,useContext:oH,useEffect:i1,useImperativeHandle:i5,useInsertionEffect:i2,useLayoutEffect:i3,useMemo:i9,useReducer:iV,useRef:iX,useState:function(){return iV(iF)},useDebugValue:i8,useDeferredValue:function(e){var t=iL();return null===iP?t.memoizedState=e:i7(t,iP.memoizedState,e)},useTransition:function(){return[iV(iF)[0],iL().memoizedState]},useMutableSource:iU,useSyncExternalStore:iW,useId:at,unstable_isNewReconciler:!1};function ad(e,t){try{var n="",r=t;do n+=function(e){switch(e.tag){case 5:return er(e.type);case 16:return er("Lazy");case 13:return er("Suspense");case 19:return er("SuspenseList");case 0:case 2:case 15:return e=ei(e.type,!1);case 11:return e=ei(e.type.render,!1);case 1:return e=ei(e.type,!0);default:return""}}(r),r=r.return;while(r)var o=n}catch(e){o="\nError generating stack: "+e.message+"\n"+e.stack}return{value:e,source:t,stack:o,digest:null}}function af(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function ap(e,t){try{console.error(t.value)}catch(e){setTimeout(function(){throw e})}}var ah="function"==typeof WeakMap?WeakMap:Map;function am(e,t,n){(n=oJ(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){lE||(lE=!0,l_=r),ap(e,t)},n}function ag(e,t,n){(n=oJ(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"==typeof r){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){ap(e,t)}}var i=e.stateNode;return null!==i&&"function"==typeof i.componentDidCatch&&(n.callback=function(){ap(e,t),"function"!=typeof r&&(null===lC?lC=new Set([this]):lC.add(this));var n=t.stack;this.componentDidCatch(t.value,{componentStack:null!==n?n:""})}),n}function av(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new ah;var o=new Set;r.set(t,o)}else void 0===(o=r.get(t))&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=l3.bind(null,e,t,n),t.then(e,e))}function ay(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e)return null}function ab(e,t,n,r,o){return 0==(1&e.mode)?e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=oJ(-1,1)).tag=2,o0(n,t,1))),n.lanes|=1):(e.flags|=65536,e.lanes=o),e}var aw=P.ReactCurrentOwner,ax=!1;function ak(e,t,n,r){t.child=null===e?is(t,null,n,r):il(t,e.child,n,r)}function aS(e,t,n,r,o){n=n.render;var i=t.ref;return(oB(t,o),r=iz(e,t,n,r,i,o),n=iD(),null===e||ax)?(oE&&n&&ow(t),t.flags|=1,ak(e,t,r,o),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,aU(e,t,o))}function aE(e,t,n,r,o){if(null===e){var i=n.type;return"function"!=typeof i||l7(i)||void 0!==i.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=st(n.type,null,r,t,t.mode,o)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=i,a_(e,t,i,r,o))}if(i=e.child,0==(e.lanes&o)){var a=i.memoizedProps;if((n=null!==(n=n.compare)?n:nK)(a,r)&&e.ref===t.ref)return aU(e,t,o)}return t.flags|=1,(e=se(i,r)).ref=t.ref,e.return=t,t.child=e}function a_(e,t,n,r,o){if(null!==e){var i=e.memoizedProps;if(nK(i,r)&&e.ref===t.ref){if(ax=!1,t.pendingProps=r=i,0==(e.lanes&o))return t.lanes=e.lanes,aU(e,t,o);0!=(131072&e.flags)&&(ax=!0)}}return aR(e,t,n,r,o)}function aC(e,t,n){var r=t.pendingProps,o=r.children,i=null!==e?e.memoizedState:null;if("hidden"===r.mode){if(0==(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r2(lp,lf),lf|=n;else{if(0==(1073741824&n))return e=null!==i?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,r2(lp,lf),lf|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==i?i.baseLanes:n,r2(lp,lf),lf|=r}}else null!==i?(r=i.baseLanes|n,t.memoizedState=null):r=n,r2(lp,lf),lf|=r;return ak(e,t,o,n),t.child}function aP(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function aR(e,t,n,r,o){var i=r9(n)?r8:r4.current;return(i=r6(t,i),oB(t,o),n=iz(e,t,n,r,i,o),r=iD(),null===e||ax)?(oE&&r&&ow(t),t.flags|=1,ak(e,t,n,o),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,aU(e,t,o))}function aN(e,t,n,r,o){if(r9(n)){var i=!0;on(t)}else i=!1;if(oB(t,o),null===t.stateNode)aV(e,t),o7(t,n,r),it(t,n,r,o),r=!0;else if(null===e){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,u=n.contextType;u="object"==typeof u&&null!==u?oH(u):r6(t,u=r9(n)?r8:r4.current);var c=n.getDerivedStateFromProps,d="function"==typeof c||"function"==typeof a.getSnapshotBeforeUpdate;d||"function"!=typeof a.UNSAFE_componentWillReceiveProps&&"function"!=typeof a.componentWillReceiveProps||(l!==r||s!==u)&&ie(t,a,r,u),oK=!1;var f=t.memoizedState;a.state=f,o3(t,r,a,o),s=t.memoizedState,l!==r||f!==s||r5.current||oK?("function"==typeof c&&(o8(t,n,c,r),s=t.memoizedState),(l=oK||o9(t,n,l,r,f,s,u))?(d||"function"!=typeof a.UNSAFE_componentWillMount&&"function"!=typeof a.componentWillMount||("function"==typeof a.componentWillMount&&a.componentWillMount(),"function"==typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount()),"function"==typeof a.componentDidMount&&(t.flags|=4194308)):("function"==typeof a.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=u,r=l):("function"==typeof a.componentDidMount&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,oZ(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:oD(t.type,l),a.props=u,d=t.pendingProps,f=a.context,s="object"==typeof(s=n.contextType)&&null!==s?oH(s):r6(t,s=r9(n)?r8:r4.current);var p=n.getDerivedStateFromProps;(c="function"==typeof p||"function"==typeof a.getSnapshotBeforeUpdate)||"function"!=typeof a.UNSAFE_componentWillReceiveProps&&"function"!=typeof a.componentWillReceiveProps||(l!==d||f!==s)&&ie(t,a,r,s),oK=!1,f=t.memoizedState,a.state=f,o3(t,r,a,o);var h=t.memoizedState;l!==d||f!==h||r5.current||oK?("function"==typeof p&&(o8(t,n,p,r),h=t.memoizedState),(u=oK||o9(t,n,u,r,f,h,s)||!1)?(c||"function"!=typeof a.UNSAFE_componentWillUpdate&&"function"!=typeof a.componentWillUpdate||("function"==typeof a.componentWillUpdate&&a.componentWillUpdate(r,h,s),"function"==typeof a.UNSAFE_componentWillUpdate&&a.UNSAFE_componentWillUpdate(r,h,s)),"function"==typeof a.componentDidUpdate&&(t.flags|=4),"function"==typeof a.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!=typeof a.componentDidUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!=typeof a.getSnapshotBeforeUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),a.props=r,a.state=h,a.context=s,r=u):("function"!=typeof a.componentDidUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!=typeof a.getSnapshotBeforeUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return aO(e,t,n,r,i,o)}function aO(e,t,n,r,o,i){aP(e,t);var a=0!=(128&t.flags);if(!r&&!a)return o&&or(t,n,!1),aU(e,t,i);r=t.stateNode,aw.current=t;var l=a&&"function"!=typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&a?(t.child=il(t,e.child,null,i),t.child=il(t,null,l,i)):ak(e,t,l,i),t.memoizedState=r.state,o&&or(t,n,!0),t.child}function aT(e){var t=e.stateNode;t.pendingContext?oe(e,t.pendingContext,t.pendingContext!==t.context):t.context&&oe(e,t.context,!1),im(e,t.containerInfo)}function aj(e,t,n,r,o){return oM(),oA(o),t.flags|=256,ak(e,t,n,r),t.child}var aM={dehydrated:null,treeContext:null,retryLane:0};function aA(e){return{baseLanes:e,cachePool:null,transitions:null}}function az(e,t,n){var r,o=t.pendingProps,i=ib.current,a=!1,l=0!=(128&t.flags);if((r=l)||(r=(null===e||null!==e.memoizedState)&&0!=(2&i)),r?(a=!0,t.flags&=-129):(null===e||null!==e.memoizedState)&&(i|=1),r2(ib,1&i),null===e)return(oN(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated))?(0==(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(l=o.children,e=o.fallback,a?(o=t.mode,a=t.child,l={mode:"hidden",children:l},0==(1&o)&&null!==a?(a.childLanes=0,a.pendingProps=l):a=sr(l,o,0,null),e=sn(e,o,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=aA(n),t.memoizedState=aM,e):aD(t,l));if(null!==(i=e.memoizedState)&&null!==(r=i.dehydrated))return function(e,t,n,r,o,i,a){if(n)return 256&t.flags?(t.flags&=-257,aI(e,t,a,r=af(Error(d(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=sr({mode:"visible",children:r.children},o,0,null),i=sn(i,o,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,0!=(1&t.mode)&&il(t,e.child,null,a),t.child.memoizedState=aA(a),t.memoizedState=aM,i);if(0==(1&t.mode))return aI(e,t,a,null);if("$!"===o.data){if(r=o.nextSibling&&o.nextSibling.dataset)var l=r.dgst;return r=l,aI(e,t,a,r=af(i=Error(d(419)),r,void 0))}if(l=0!=(a&e.childLanes),ax||l){if(null!==(r=lu)){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}0!==(o=0!=(o&(r.suspendedLanes|a))?0:o)&&o!==i.retryLane&&(i.retryLane=o,oQ(e,o),lD(r,e,o,-1))}return lQ(),aI(e,t,a,r=af(Error(d(421))))}return"$?"===o.data?(t.flags|=128,t.child=e.child,t=l5.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,oS=rF(o.nextSibling),ok=t,oE=!0,o_=null,null!==e&&(op[oh++]=og,op[oh++]=ov,op[oh++]=om,og=e.id,ov=e.overflow,om=t),t=aD(t,r.children),t.flags|=4096,t)}(e,t,l,o,r,i,n);if(a){a=o.fallback,l=t.mode,r=(i=e.child).sibling;var s={mode:"hidden",children:o.children};return 0==(1&l)&&t.child!==i?((o=t.child).childLanes=0,o.pendingProps=s,t.deletions=null):(o=se(i,s)).subtreeFlags=14680064&i.subtreeFlags,null!==r?a=se(r,a):(a=sn(a,l,n,null),a.flags|=2),a.return=t,o.return=t,o.sibling=a,t.child=o,o=a,a=t.child,l=null===(l=e.child.memoizedState)?aA(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},a.memoizedState=l,a.childLanes=e.childLanes&~n,t.memoizedState=aM,o}return e=(a=e.child).sibling,o=se(a,{mode:"visible",children:o.children}),0==(1&t.mode)&&(o.lanes=n),o.return=t,o.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=o,t.memoizedState=null,o}function aD(e,t){return(t=sr({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function aI(e,t,n,r){return null!==r&&oA(r),il(t,e.child,null,n),e=aD(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function aL(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),oW(e.return,t,n)}function aF(e,t,n,r,o){var i=e.memoizedState;null===i?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function a$(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(ak(e,t,r.children,n),0!=(2&(r=ib.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!=(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&aL(e,n,t);else if(19===e.tag)aL(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(r2(ib,r),0==(1&t.mode))t.memoizedState=null;else switch(o){case"forwards":for(o=null,n=t.child;null!==n;)null!==(e=n.alternate)&&null===iw(e)&&(o=n),n=n.sibling;null===(n=o)?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),aF(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;null!==o;){if(null!==(e=o.alternate)&&null===iw(e)){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}aF(t,!0,n,null,i);break;case"together":aF(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function aV(e,t){0==(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function aU(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),lg|=t.lanes,0==(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(d(153));if(null!==t.child){for(n=se(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=se(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function aW(e,t){if(!oE)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function aB(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;null!==o;)n|=o.lanes|o.childLanes,r|=14680064&o.subtreeFlags,r|=14680064&o.flags,o.return=e,o=o.sibling;else for(o=e.child;null!==o;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}o=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},i=function(){},a=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,ih(ic.current);var i,a=null;switch(n){case"input":o=ed(e,o),r=ed(e,r),a=[];break;case"select":o=en({},o,{value:void 0}),r=en({},r,{value:void 0}),a=[];break;case"textarea":o=eb(e,o),r=eb(e,r),a=[];break;default:"function"!=typeof o.onClick&&"function"==typeof r.onClick&&(e.onclick=rN)}for(u in eA(n,r),n=null,o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&null!=o[u]){if("style"===u){var l=o[u];for(i in l)l.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else"dangerouslySetInnerHTML"!==u&&"children"!==u&&"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(p.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null))}for(u in r){var s=r[u];if(l=null!=o?o[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(null!=s||null!=l)){if("style"===u){if(l){for(i in l)!l.hasOwnProperty(i)||s&&s.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in s)s.hasOwnProperty(i)&&l[i]!==s[i]&&(n||(n={}),n[i]=s[i])}else n||(a||(a=[]),a.push(u,n)),n=s}else"dangerouslySetInnerHTML"===u?(s=s?s.__html:void 0,l=l?l.__html:void 0,null!=s&&l!==s&&(a=a||[]).push(u,s)):"children"===u?"string"!=typeof s&&"number"!=typeof s||(a=a||[]).push(u,""+s):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&(p.hasOwnProperty(u)?(null!=s&&"onScroll"===u&&rm("scroll",e),a||l===s||(a=[])):(a=a||[]).push(u,s))}}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}},l=function(e,t,n,r){n!==r&&(t.flags|=4)};var aH=!1,aY=!1,aq="function"==typeof WeakSet?WeakSet:Set,aG=null;function aQ(e,t){var n=e.ref;if(null!==n){if("function"==typeof n)try{n(null)}catch(n){l2(e,t,n)}else n.current=null}}function aK(e,t,n){try{n()}catch(n){l2(e,t,n)}}var aX=!1;function aZ(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,void 0!==i&&aK(t,n,i)}o=o.next}while(o!==r)}}function aJ(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function a0(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"==typeof t?t(e):t.current=e}}function a1(e){return 5===e.tag||3===e.tag||4===e.tag}function a2(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||a1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags||null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}var a3=null,a4=!1;function a5(e,t,n){for(n=n.child;null!==n;)a8(e,t,n),n=n.sibling}function a8(e,t,n){if(tc&&"function"==typeof tc.onCommitFiberUnmount)try{tc.onCommitFiberUnmount(tu,n)}catch(e){}switch(n.tag){case 5:aY||aQ(n,t);case 6:var r=a3,o=a4;a3=null,a5(e,t,n),a3=r,a4=o,null!==a3&&(a4?(e=a3,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):a3.removeChild(n.stateNode));break;case 18:null!==a3&&(a4?(e=a3,n=n.stateNode,8===e.nodeType?rL(e.parentNode,n):1===e.nodeType&&rL(e,n),tY(e)):rL(a3,n.stateNode));break;case 4:r=a3,o=a4,a3=n.stateNode.containerInfo,a4=!0,a5(e,t,n),a3=r,a4=o;break;case 0:case 11:case 14:case 15:if(!aY&&null!==(r=n.updateQueue)&&null!==(r=r.lastEffect)){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,void 0!==a&&(0!=(2&i)?aK(n,t,a):0!=(4&i)&&aK(n,t,a)),o=o.next}while(o!==r)}a5(e,t,n);break;case 1:if(!aY&&(aQ(n,t),"function"==typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(e){l2(n,t,e)}a5(e,t,n);break;case 21:default:a5(e,t,n);break;case 22:1&n.mode?(aY=(r=aY)||null!==n.memoizedState,a5(e,t,n),aY=r):a5(e,t,n)}}function a6(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new aq),t.forEach(function(t){var r=l8.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))})}}function a9(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var o=n[r];try{var i=t,a=i;e:for(;null!==a;){switch(a.tag){case 5:a3=a.stateNode,a4=!1;break e;case 3:case 4:a3=a.stateNode.containerInfo,a4=!0;break e}a=a.return}if(null===a3)throw Error(d(160));a8(e,i,o),a3=null,a4=!1;var l=o.alternate;null!==l&&(l.return=null),o.return=null}catch(e){l2(o,t,e)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)a7(t,e),t=t.sibling}function a7(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(a9(t,e),le(e),4&r){try{aZ(3,e,e.return),aJ(3,e)}catch(t){l2(e,e.return,t)}try{aZ(5,e,e.return)}catch(t){l2(e,e.return,t)}}break;case 1:a9(t,e),le(e),512&r&&null!==n&&aQ(n,n.return);break;case 5:if(a9(t,e),le(e),512&r&&null!==n&&aQ(n,n.return),32&e.flags){var o=e.stateNode;try{eR(o,"")}catch(t){l2(e,e.return,t)}}if(4&r&&null!=(o=e.stateNode)){var i=e.memoizedProps,a=null!==n?n.memoizedProps:i,l=e.type,s=e.updateQueue;if(e.updateQueue=null,null!==s)try{"input"===l&&"radio"===i.type&&null!=i.name&&ep(o,i),ez(l,a);var u=ez(l,i);for(a=0;a<s.length;a+=2){var c=s[a],f=s[a+1];"style"===c?ej(o,f):"dangerouslySetInnerHTML"===c?eP(o,f):"children"===c?eR(o,f):C(o,c,f,u)}switch(l){case"input":eh(o,i);break;case"textarea":ex(o,i);break;case"select":var p=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var h=i.value;null!=h?ey(o,!!i.multiple,h,!1):!!i.multiple!==p&&(null!=i.defaultValue?ey(o,!!i.multiple,i.defaultValue,!0):ey(o,!!i.multiple,i.multiple?[]:"",!1))}o[rW]=i}catch(t){l2(e,e.return,t)}}break;case 6:if(a9(t,e),le(e),4&r){if(null===e.stateNode)throw Error(d(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(t){l2(e,e.return,t)}}break;case 3:if(a9(t,e),le(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{tY(t.containerInfo)}catch(t){l2(e,e.return,t)}break;case 4:default:a9(t,e),le(e);break;case 13:a9(t,e),le(e),8192&(o=e.child).flags&&(i=null!==o.memoizedState,o.stateNode.isHidden=i,i&&(null===o.alternate||null===o.alternate.memoizedState)&&(lx=tn())),4&r&&a6(e);break;case 22:if(c=null!==n&&null!==n.memoizedState,1&e.mode?(aY=(u=aY)||c,a9(t,e),aY=u):a9(t,e),le(e),8192&r){if(u=null!==e.memoizedState,(e.stateNode.isHidden=u)&&!c&&0!=(1&e.mode))for(aG=e,c=e.child;null!==c;){for(f=aG=c;null!==aG;){switch(h=(p=aG).child,p.tag){case 0:case 11:case 14:case 15:aZ(4,p,p.return);break;case 1:aQ(p,p.return);var m=p.stateNode;if("function"==typeof m.componentWillUnmount){r=p,n=p.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(e){l2(r,n,e)}}break;case 5:aQ(p,p.return);break;case 22:if(null!==p.memoizedState){ln(f);continue}}null!==h?(h.return=p,aG=h):ln(f)}c=c.sibling}e:for(c=null,f=e;;){if(5===f.tag){if(null===c){c=f;try{o=f.stateNode,u?(i=o.style,"function"==typeof i.setProperty?i.setProperty("display","none","important"):i.display="none"):(l=f.stateNode,a=null!=(s=f.memoizedProps.style)&&s.hasOwnProperty("display")?s.display:null,l.style.display=eT("display",a))}catch(t){l2(e,e.return,t)}}}else if(6===f.tag){if(null===c)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(t){l2(e,e.return,t)}}else if((22!==f.tag&&23!==f.tag||null===f.memoizedState||f===e)&&null!==f.child){f.child.return=f,f=f.child;continue}if(f===e)break;for(;null===f.sibling;){if(null===f.return||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:a9(t,e),le(e),4&r&&a6(e);case 21:}}function le(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(a1(n)){var r=n;break e}n=n.return}throw Error(d(160))}switch(r.tag){case 5:var o=r.stateNode;32&r.flags&&(eR(o,""),r.flags&=-33);var i=a2(e);!function e(t,n,r){var o=t.tag;if(5===o||6===o)t=t.stateNode,n?r.insertBefore(t,n):r.appendChild(t);else if(4!==o&&null!==(t=t.child))for(e(t,n,r),t=t.sibling;null!==t;)e(t,n,r),t=t.sibling}(e,i,o);break;case 3:case 4:var a=r.stateNode.containerInfo,l=a2(e);!function e(t,n,r){var o=t.tag;if(5===o||6===o)t=t.stateNode,n?8===r.nodeType?r.parentNode.insertBefore(t,n):r.insertBefore(t,n):(8===r.nodeType?(n=r.parentNode).insertBefore(t,r):(n=r).appendChild(t),null!=(r=r._reactRootContainer)||null!==n.onclick||(n.onclick=rN));else if(4!==o&&null!==(t=t.child))for(e(t,n,r),t=t.sibling;null!==t;)e(t,n,r),t=t.sibling}(e,l,a);break;default:throw Error(d(161))}}catch(t){l2(e,e.return,t)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function lt(e){for(;null!==aG;){var t=aG;if(0!=(8772&t.flags)){var n=t.alternate;try{if(0!=(8772&t.flags))switch(t.tag){case 0:case 11:case 15:aY||aJ(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!aY){if(null===n)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:oD(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}}var i=t.updateQueue;null!==i&&o4(t,i,r);break;case 3:var a=t.updateQueue;if(null!==a){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}o4(t,a,n)}break;case 5:var l=t.stateNode;if(null===n&&4&t.flags){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var u=t.alternate;if(null!==u){var c=u.memoizedState;if(null!==c){var f=c.dehydrated;null!==f&&tY(f)}}}break;default:throw Error(d(163))}aY||512&t.flags&&a0(t)}catch(e){l2(t,t.return,e)}}if(t===e){aG=null;break}if(null!==(n=t.sibling)){n.return=t.return,aG=n;break}aG=t.return}}function ln(e){for(;null!==aG;){var t=aG;if(t===e){aG=null;break}var n=t.sibling;if(null!==n){n.return=t.return,aG=n;break}aG=t.return}}function lr(e){for(;null!==aG;){var t=aG;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{aJ(4,t)}catch(e){l2(t,n,e)}break;case 1:var r=t.stateNode;if("function"==typeof r.componentDidMount){var o=t.return;try{r.componentDidMount()}catch(e){l2(t,o,e)}}var i=t.return;try{a0(t)}catch(e){l2(t,i,e)}break;case 5:var a=t.return;try{a0(t)}catch(e){l2(t,a,e)}}}catch(e){l2(t,t.return,e)}if(t===e){aG=null;break}var l=t.sibling;if(null!==l){l.return=t.return,aG=l;break}aG=t.return}}var lo=Math.ceil,li=P.ReactCurrentDispatcher,la=P.ReactCurrentOwner,ll=P.ReactCurrentBatchConfig,ls=0,lu=null,lc=null,ld=0,lf=0,lp=r0(0),lh=0,lm=null,lg=0,lv=0,ly=0,lb=null,lw=null,lx=0,lk=1/0,lS=null,lE=!1,l_=null,lC=null,lP=!1,lR=null,lN=0,lO=0,lT=null,lj=-1,lM=0;function lA(){return 0!=(6&ls)?tn():-1!==lj?lj:lj=tn()}function lz(e){return 0==(1&e.mode)?1:0!=(2&ls)&&0!==ld?ld&-ld:null!==oz.transition?(0===lM&&(lM=tb()),lM):0!==(e=tS)?e:e=void 0===(e=window.event)?16:t0(e.type)}function lD(e,t,n,r){if(50<lO)throw lO=0,lT=null,Error(d(185));tx(e,n,r),(0==(2&ls)||e!==lu)&&(e===lu&&(0==(2&ls)&&(lv|=n),4===lh&&lV(e,ld)),lI(e,r),1===n&&0===ls&&0==(1&t.mode)&&(lk=tn()+500,oi&&os()))}function lI(e,t){var n,r,o,i=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-td(i),l=1<<a,s=o[a];-1===s?(0==(l&n)||0!=(l&r))&&(o[a]=function(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return -1}}(l,t)):s<=t&&(e.expiredLanes|=l),i&=~l}}(e,t);var a=tv(e,e===lu?ld:0);if(0===a)null!==i&&e7(i),e.callbackNode=null,e.callbackPriority=0;else if(t=a&-a,e.callbackPriority!==t){if(null!=i&&e7(i),1===t)0===e.tag?(o=lU.bind(null,e),oi=!0,ol(o)):ol(lU.bind(null,e)),rD(function(){0==(6&ls)&&os()}),i=null;else{switch(tE(a)){case 1:i=to;break;case 4:i=ti;break;case 16:default:i=ta;break;case 536870912:i=ts}i=e9(i,lL.bind(null,e))}e.callbackPriority=t,e.callbackNode=i}}function lL(e,t){if(lj=-1,lM=0,0!=(6&ls))throw Error(d(327));var n=e.callbackNode;if(l0()&&e.callbackNode!==n)return null;var r=tv(e,e===lu?ld:0);if(0===r)return null;if(0!=(30&r)||0!=(r&e.expiredLanes)||t)t=lK(e,r);else{t=r;var o=ls;ls|=2;var i=lG();for((lu!==e||ld!==t)&&(lS=null,lk=tn()+500,lY(e,t));;)try{(function(){for(;null!==lc&&!te();)lX(lc)})();break}catch(t){lq(e,t)}oV(),li.current=i,ls=o,null!==lc?t=0:(lu=null,ld=0,t=lh)}if(0!==t){if(2===t&&0!==(o=ty(e))&&(r=o,t=lF(e,o)),1===t)throw n=lm,lY(e,0),lV(e,r),lI(e,tn()),n;if(6===t)lV(e,r);else{if(o=e.current.alternate,0==(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!nQ(i(),o))return!1}catch(e){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(o)&&(2===(t=lK(e,r))&&0!==(i=ty(e))&&(r=i,t=lF(e,i)),1===t))throw n=lm,lY(e,0),lV(e,r),lI(e,tn()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(d(345));case 2:case 5:lJ(e,lw,lS);break;case 3:if(lV(e,r),(130023424&r)===r&&10<(t=lx+500-tn())){if(0!==tv(e,0))break;if(((o=e.suspendedLanes)&r)!==r){lA(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=rM(lJ.bind(null,e,lw,lS),t);break}lJ(e,lw,lS);break;case 4:if(lV(e,r),(4194240&r)===r)break;for(o=-1,t=e.eventTimes;0<r;){var a=31-td(r);i=1<<a,(a=t[a])>o&&(o=a),r&=~i}if(r=o,10<(r=(120>(r=tn()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*lo(r/1960))-r)){e.timeoutHandle=rM(lJ.bind(null,e,lw,lS),r);break}lJ(e,lw,lS);break;default:throw Error(d(329))}}}return lI(e,tn()),e.callbackNode===n?lL.bind(null,e):null}function lF(e,t){var n=lb;return e.current.memoizedState.isDehydrated&&(lY(e,t).flags|=256),2!==(e=lK(e,t))&&(t=lw,lw=n,null!==t&&l$(t)),e}function l$(e){null===lw?lw=e:lw.push.apply(lw,e)}function lV(e,t){for(t&=~ly,t&=~lv,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-td(t),r=1<<n;e[n]=-1,t&=~r}}function lU(e){if(0!=(6&ls))throw Error(d(327));l0();var t=tv(e,0);if(0==(1&t))return lI(e,tn()),null;var n=lK(e,t);if(0!==e.tag&&2===n){var r=ty(e);0!==r&&(t=r,n=lF(e,r))}if(1===n)throw n=lm,lY(e,0),lV(e,t),lI(e,tn()),n;if(6===n)throw Error(d(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,lJ(e,lw,lS),lI(e,tn()),null}function lW(e,t){var n=ls;ls|=1;try{return e(t)}finally{0===(ls=n)&&(lk=tn()+500,oi&&os())}}function lB(e){null!==lR&&0===lR.tag&&0==(6&ls)&&l0();var t=ls;ls|=1;var n=ll.transition,r=tS;try{if(ll.transition=null,tS=1,e)return e()}finally{tS=r,ll.transition=n,0==(6&(ls=t))&&os()}}function lH(){lf=lp.current,r1(lp)}function lY(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,rA(n)),null!==lc)for(n=lc.return;null!==n;){var r=n;switch(ox(r),r.tag){case 1:null!=(r=r.type.childContextTypes)&&r7();break;case 3:ig(),r1(r5),r1(r4),ik();break;case 5:iy(r);break;case 4:ig();break;case 13:case 19:r1(ib);break;case 10:oU(r.type._context);break;case 22:case 23:lH()}n=n.return}if(lu=e,lc=e=se(e.current,null),ld=lf=t,lh=0,lm=null,ly=lv=lg=0,lw=lb=null,null!==oY){for(t=0;t<oY.length;t++)if(null!==(r=(n=oY[t]).interleaved)){n.interleaved=null;var o=r.next,i=n.pending;if(null!==i){var a=i.next;i.next=o,r.next=a}n.pending=r}oY=null}return e}function lq(e,t){for(;;){var n=lc;try{if(oV(),iS.current=al,iN){for(var r=iC.memoizedState;null!==r;){var o=r.queue;null!==o&&(o.pending=null),r=r.next}iN=!1}if(i_=0,iR=iP=iC=null,iO=!1,iT=0,la.current=null,null===n||null===n.return){lh=1,lm=t,lc=null;break}e:{var i=e,a=n.return,l=n,s=t;if(t=ld,l.flags|=32768,null!==s&&"object"==typeof s&&"function"==typeof s.then){var u=s,c=l,f=c.tag;if(0==(1&c.mode)&&(0===f||11===f||15===f)){var p=c.alternate;p?(c.updateQueue=p.updateQueue,c.memoizedState=p.memoizedState,c.lanes=p.lanes):(c.updateQueue=null,c.memoizedState=null)}var h=ay(a);if(null!==h){h.flags&=-257,ab(h,a,l,i,t),1&h.mode&&av(i,u,t),t=h,s=u;var m=t.updateQueue;if(null===m){var g=new Set;g.add(s),t.updateQueue=g}else m.add(s);break e}if(0==(1&t)){av(i,u,t),lQ();break e}s=Error(d(426))}else if(oE&&1&l.mode){var v=ay(a);if(null!==v){0==(65536&v.flags)&&(v.flags|=256),ab(v,a,l,i,t),oA(ad(s,l));break e}}i=s=ad(s,l),4!==lh&&(lh=2),null===lb?lb=[i]:lb.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var y=am(i,s,t);o2(i,y);break e;case 1:l=s;var b=i.type,w=i.stateNode;if(0==(128&i.flags)&&("function"==typeof b.getDerivedStateFromError||null!==w&&"function"==typeof w.componentDidCatch&&(null===lC||!lC.has(w)))){i.flags|=65536,t&=-t,i.lanes|=t;var x=ag(i,l,t);o2(i,x);break e}}i=i.return}while(null!==i)}lZ(n)}catch(e){t=e,lc===n&&null!==n&&(lc=n=n.return);continue}break}}function lG(){var e=li.current;return li.current=al,null===e?al:e}function lQ(){(0===lh||3===lh||2===lh)&&(lh=4),null===lu||0==(268435455&lg)&&0==(268435455&lv)||lV(lu,ld)}function lK(e,t){var n=ls;ls|=2;var r=lG();for((lu!==e||ld!==t)&&(lS=null,lY(e,t));;)try{(function(){for(;null!==lc;)lX(lc)})();break}catch(t){lq(e,t)}if(oV(),ls=n,li.current=r,null!==lc)throw Error(d(261));return lu=null,ld=0,lh}function lX(e){var t=s(e.alternate,e,lf);e.memoizedProps=e.pendingProps,null===t?lZ(e):lc=t,la.current=null}function lZ(e){var t=e;do{var n=t.alternate;if(e=t.return,0==(32768&t.flags)){if(null!==(n=function(e,t,n){var r=t.pendingProps;switch(ox(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return aB(t),null;case 1:case 17:return r9(t.type)&&r7(),aB(t),null;case 3:return r=t.stateNode,ig(),r1(r5),r1(r4),ik(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(null===e||null===e.child)&&(oT(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0==(256&t.flags)||(t.flags|=1024,null!==o_&&(l$(o_),o_=null))),i(e,t),aB(t),null;case 5:iy(t);var s=ih(ip.current);if(n=t.type,null!==e&&null!=t.stateNode)a(e,t,n,r,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(d(166));return aB(t),null}if(e=ih(ic.current),oT(t)){r=t.stateNode,n=t.type;var u=t.memoizedProps;switch(r[rU]=t,r[rW]=u,e=0!=(1&t.mode),n){case"dialog":rm("cancel",r),rm("close",r);break;case"iframe":case"object":case"embed":rm("load",r);break;case"video":case"audio":for(s=0;s<rd.length;s++)rm(rd[s],r);break;case"source":rm("error",r);break;case"img":case"image":case"link":rm("error",r),rm("load",r);break;case"details":rm("toggle",r);break;case"input":ef(r,u),rm("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!u.multiple},rm("invalid",r);break;case"textarea":ew(r,u),rm("invalid",r)}for(var c in eA(n,u),s=null,u)if(u.hasOwnProperty(c)){var f=u[c];"children"===c?"string"==typeof f?r.textContent!==f&&(!0!==u.suppressHydrationWarning&&rR(r.textContent,f,e),s=["children",f]):"number"==typeof f&&r.textContent!==""+f&&(!0!==u.suppressHydrationWarning&&rR(r.textContent,f,e),s=["children",""+f]):p.hasOwnProperty(c)&&null!=f&&"onScroll"===c&&rm("scroll",r)}switch(n){case"input":es(r),em(r,u,!0);break;case"textarea":es(r),ek(r);break;case"select":case"option":break;default:"function"==typeof u.onClick&&(r.onclick=rN)}r=s,t.updateQueue=r,null!==r&&(t.flags|=4)}else{c=9===s.nodeType?s:s.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=eS(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=c.createElement("div")).innerHTML="<script></script>",e=e.removeChild(e.firstChild)):"string"==typeof r.is?e=c.createElement(n,{is:r.is}):(e=c.createElement(n),"select"===n&&(c=e,r.multiple?c.multiple=!0:r.size&&(c.size=r.size))):e=c.createElementNS(e,n),e[rU]=t,e[rW]=r,o(e,t,!1,!1),t.stateNode=e;e:{switch(c=ez(n,r),n){case"dialog":rm("cancel",e),rm("close",e),s=r;break;case"iframe":case"object":case"embed":rm("load",e),s=r;break;case"video":case"audio":for(s=0;s<rd.length;s++)rm(rd[s],e);s=r;break;case"source":rm("error",e),s=r;break;case"img":case"image":case"link":rm("error",e),rm("load",e),s=r;break;case"details":rm("toggle",e),s=r;break;case"input":ef(e,r),s=ed(e,r),rm("invalid",e);break;case"option":default:s=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},s=en({},r,{value:void 0}),rm("invalid",e);break;case"textarea":ew(e,r),s=eb(e,r),rm("invalid",e)}for(u in eA(n,s),f=s)if(f.hasOwnProperty(u)){var h=f[u];"style"===u?ej(e,h):"dangerouslySetInnerHTML"===u?null!=(h=h?h.__html:void 0)&&eP(e,h):"children"===u?"string"==typeof h?("textarea"!==n||""!==h)&&eR(e,h):"number"==typeof h&&eR(e,""+h):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(p.hasOwnProperty(u)?null!=h&&"onScroll"===u&&rm("scroll",e):null!=h&&C(e,u,h,c))}switch(n){case"input":es(e),em(e,r,!1);break;case"textarea":es(e),ek(e);break;case"option":null!=r.value&&e.setAttribute("value",""+ea(r.value));break;case"select":e.multiple=!!r.multiple,null!=(u=r.value)?ey(e,!!r.multiple,u,!1):null!=r.defaultValue&&ey(e,!!r.multiple,r.defaultValue,!0);break;default:"function"==typeof s.onClick&&(e.onclick=rN)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return aB(t),null;case 6:if(e&&null!=t.stateNode)l(e,t,e.memoizedProps,r);else{if("string"!=typeof r&&null===t.stateNode)throw Error(d(166));if(n=ih(ip.current),ih(ic.current),oT(t)){if(r=t.stateNode,n=t.memoizedProps,r[rU]=t,(u=r.nodeValue!==n)&&null!==(e=ok))switch(e.tag){case 3:rR(r.nodeValue,n,0!=(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&rR(r.nodeValue,n,0!=(1&e.mode))}u&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[rU]=t,t.stateNode=r}return aB(t),null;case 13:if(r1(ib),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(oE&&null!==oS&&0!=(1&t.mode)&&0==(128&t.flags))oj(),oM(),t.flags|=98560,u=!1;else if(u=oT(t),null!==r&&null!==r.dehydrated){if(null===e){if(!u)throw Error(d(318));if(!(u=null!==(u=t.memoizedState)?u.dehydrated:null))throw Error(d(317));u[rU]=t}else oM(),0==(128&t.flags)&&(t.memoizedState=null),t.flags|=4;aB(t),u=!1}else null!==o_&&(l$(o_),o_=null),u=!0;if(!u)return 65536&t.flags?t:null}if(0!=(128&t.flags))return t.lanes=n,t;return(r=null!==r)!=(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!=(1&t.mode)&&(null===e||0!=(1&ib.current)?0===lh&&(lh=3):lQ())),null!==t.updateQueue&&(t.flags|=4),aB(t),null;case 4:return ig(),i(e,t),null===e&&ry(t.stateNode.containerInfo),aB(t),null;case 10:return oU(t.type._context),aB(t),null;case 19:if(r1(ib),null===(u=t.memoizedState))return aB(t),null;if(r=0!=(128&t.flags),null===(c=u.rendering)){if(r)aW(u,!1);else{if(0!==lh||null!==e&&0!=(128&e.flags))for(e=t.child;null!==e;){if(null!==(c=iw(e))){for(t.flags|=128,aW(u,!1),null!==(r=c.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)u=n,e=r,u.flags&=14680066,null===(c=u.alternate)?(u.childLanes=0,u.lanes=e,u.child=null,u.subtreeFlags=0,u.memoizedProps=null,u.memoizedState=null,u.updateQueue=null,u.dependencies=null,u.stateNode=null):(u.childLanes=c.childLanes,u.lanes=c.lanes,u.child=c.child,u.subtreeFlags=0,u.deletions=null,u.memoizedProps=c.memoizedProps,u.memoizedState=c.memoizedState,u.updateQueue=c.updateQueue,u.type=c.type,e=c.dependencies,u.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return r2(ib,1&ib.current|2),t.child}e=e.sibling}null!==u.tail&&tn()>lk&&(t.flags|=128,r=!0,aW(u,!1),t.lanes=4194304)}}else{if(!r){if(null!==(e=iw(c))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),aW(u,!0),null===u.tail&&"hidden"===u.tailMode&&!c.alternate&&!oE)return aB(t),null}else 2*tn()-u.renderingStartTime>lk&&1073741824!==n&&(t.flags|=128,r=!0,aW(u,!1),t.lanes=4194304)}u.isBackwards?(c.sibling=t.child,t.child=c):(null!==(n=u.last)?n.sibling=c:t.child=c,u.last=c)}if(null!==u.tail)return t=u.tail,u.rendering=t,u.tail=t.sibling,u.renderingStartTime=tn(),t.sibling=null,n=ib.current,r2(ib,r?1&n|2:1&n),t;return aB(t),null;case 22:case 23:return lH(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!=(1&t.mode)?0!=(1073741824&lf)&&(aB(t),6&t.subtreeFlags&&(t.flags|=8192)):aB(t),null;case 24:case 25:return null}throw Error(d(156,t.tag))}(n,t,lf))){lc=n;return}}else{if(null!==(n=function(e,t){switch(ox(t),t.tag){case 1:return r9(t.type)&&r7(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return ig(),r1(r5),r1(r4),ik(),0!=(65536&(e=t.flags))&&0==(128&e)?(t.flags=-65537&e|128,t):null;case 5:return iy(t),null;case 13:if(r1(ib),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(d(340));oM()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return r1(ib),null;case 4:return ig(),null;case 10:return oU(t.type._context),null;case 22:case 23:return lH(),null;default:return null}}(n,t))){n.flags&=32767,lc=n;return}if(null!==e)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{lh=6,lc=null;return}}if(null!==(t=t.sibling)){lc=t;return}lc=t=e}while(null!==t)0===lh&&(lh=5)}function lJ(e,t,n){var r=tS,o=ll.transition;try{ll.transition=null,tS=1,function(e,t,n,r){do l0();while(null!==lR)if(0!=(6&ls))throw Error(d(327));n=e.finishedWork;var o=e.finishedLanes;if(null!==n){if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(d(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-td(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}(e,i),e===lu&&(lc=lu=null,ld=0),0==(2064&n.subtreeFlags)&&0==(2064&n.flags)||lP||(lP=!0,a=ta,l=function(){return l0(),null},e9(a,l)),i=0!=(15990&n.flags),0!=(15990&n.subtreeFlags)||i){i=ll.transition,ll.transition=null;var a,l,s,u,c,f=tS;tS=1;var p=ls;ls|=4,la.current=null,function(e,t){if(rO=tG,n0(e=nJ())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var o,i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch(e){n=null;break e}var l=0,s=-1,u=-1,c=0,f=0,p=e,h=null;t:for(;;){for(;p!==n||0!==i&&3!==p.nodeType||(s=l+i),p!==a||0!==r&&3!==p.nodeType||(u=l+r),3===p.nodeType&&(l+=p.nodeValue.length),null!==(o=p.firstChild);)h=p,p=o;for(;;){if(p===e)break t;if(h===n&&++c===i&&(s=l),h===a&&++f===r&&(u=l),null!==(o=p.nextSibling))break;h=(p=h).parentNode}p=o}n=-1===s||-1===u?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(rT={focusedElem:e,selectionRange:n},tG=!1,aG=t;null!==aG;)if(e=(t=aG).child,0!=(1028&t.subtreeFlags)&&null!==e)e.return=t,aG=e;else for(;null!==aG;){t=aG;try{var m=t.alternate;if(0!=(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==m){var g=m.memoizedProps,v=m.memoizedState,y=t.stateNode,b=y.getSnapshotBeforeUpdate(t.elementType===t.type?g:oD(t.type,g),v);y.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var w=t.stateNode.containerInfo;1===w.nodeType?w.textContent="":9===w.nodeType&&w.documentElement&&w.removeChild(w.documentElement);break;default:throw Error(d(163))}}catch(e){l2(t,t.return,e)}if(null!==(e=t.sibling)){e.return=t.return,aG=e;break}aG=t.return}m=aX,aX=!1}(e,n),a7(n,e),function(e){var t=nJ(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&function e(t,n){return!!t&&!!n&&(t===n||(!t||3!==t.nodeType)&&(n&&3===n.nodeType?e(t,n.parentNode):"contains"in t?t.contains(n):!!t.compareDocumentPosition&&!!(16&t.compareDocumentPosition(n))))}(n.ownerDocument.documentElement,n)){if(null!==r&&n0(n)){if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=void 0===r.end?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=nZ(n,i);var a=nZ(n,r);o&&a&&(1!==e.rangeCount||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&((t=t.createRange()).setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"==typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}(rT),tG=!!rO,rT=rO=null,e.current=n,s=n,u=e,c=o,aG=s,function e(t,n,r){for(var o=0!=(1&t.mode);null!==aG;){var i=aG,a=i.child;if(22===i.tag&&o){var l=null!==i.memoizedState||aH;if(!l){var s=i.alternate,u=null!==s&&null!==s.memoizedState||aY;s=aH;var c=aY;if(aH=l,(aY=u)&&!c)for(aG=i;null!==aG;)u=(l=aG).child,22===l.tag&&null!==l.memoizedState?lr(i):null!==u?(u.return=l,aG=u):lr(i);for(;null!==a;)aG=a,e(a,n,r),a=a.sibling;aG=i,aH=s,aY=c}lt(t,n,r)}else 0!=(8772&i.subtreeFlags)&&null!==a?(a.return=i,aG=a):lt(t,n,r)}}(s,u,c),tt(),ls=p,tS=f,ll.transition=i}else e.current=n;if(lP&&(lP=!1,lR=e,lN=o),0===(i=e.pendingLanes)&&(lC=null),function(e){if(tc&&"function"==typeof tc.onCommitFiberRoot)try{tc.onCommitFiberRoot(tu,e,void 0,128==(128&e.current.flags))}catch(e){}}(n.stateNode,r),lI(e,tn()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)r((o=t[n]).value,{componentStack:o.stack,digest:o.digest});if(lE)throw lE=!1,e=l_,l_=null,e;0!=(1&lN)&&0!==e.tag&&l0(),0!=(1&(i=e.pendingLanes))?e===lT?lO++:(lO=0,lT=e):lO=0,os()}}(e,t,n,r)}finally{ll.transition=o,tS=r}return null}function l0(){if(null!==lR){var e=tE(lN),t=ll.transition,n=tS;try{if(ll.transition=null,tS=16>e?16:e,null===lR)var r=!1;else{if(e=lR,lR=null,lN=0,0!=(6&ls))throw Error(d(331));var o=ls;for(ls|=4,aG=e.current;null!==aG;){var i=aG,a=i.child;if(0!=(16&aG.flags)){var l=i.deletions;if(null!==l){for(var s=0;s<l.length;s++){var u=l[s];for(aG=u;null!==aG;){var c=aG;switch(c.tag){case 0:case 11:case 15:aZ(8,c,i)}var f=c.child;if(null!==f)f.return=c,aG=f;else for(;null!==aG;){var p=(c=aG).sibling,h=c.return;if(function e(t){var n=t.alternate;null!==n&&(t.alternate=null,e(n)),t.child=null,t.deletions=null,t.sibling=null,5===t.tag&&null!==(n=t.stateNode)&&(delete n[rU],delete n[rW],delete n[rH],delete n[rY],delete n[rq]),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}(c),c===u){aG=null;break}if(null!==p){p.return=h,aG=p;break}aG=h}}}var m=i.alternate;if(null!==m){var g=m.child;if(null!==g){m.child=null;do{var v=g.sibling;g.sibling=null,g=v}while(null!==g)}}aG=i}}if(0!=(2064&i.subtreeFlags)&&null!==a)a.return=i,aG=a;else for(;null!==aG;){if(i=aG,0!=(2048&i.flags))switch(i.tag){case 0:case 11:case 15:aZ(9,i,i.return)}var y=i.sibling;if(null!==y){y.return=i.return,aG=y;break}aG=i.return}}var b=e.current;for(aG=b;null!==aG;){var w=(a=aG).child;if(0!=(2064&a.subtreeFlags)&&null!==w)w.return=a,aG=w;else for(a=b;null!==aG;){if(l=aG,0!=(2048&l.flags))try{switch(l.tag){case 0:case 11:case 15:aJ(9,l)}}catch(e){l2(l,l.return,e)}if(l===a){aG=null;break}var x=l.sibling;if(null!==x){x.return=l.return,aG=x;break}aG=l.return}}if(ls=o,os(),tc&&"function"==typeof tc.onPostCommitFiberRoot)try{tc.onPostCommitFiberRoot(tu,e)}catch(e){}r=!0}return r}finally{tS=n,ll.transition=t}}return!1}function l1(e,t,n){t=am(e,t=ad(n,t),1),e=o0(e,t,1),t=lA(),null!==e&&(tx(e,1,t),lI(e,t))}function l2(e,t,n){if(3===e.tag)l1(e,e,n);else for(;null!==t;){if(3===t.tag){l1(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"==typeof t.type.getDerivedStateFromError||"function"==typeof r.componentDidCatch&&(null===lC||!lC.has(r))){e=ag(t,e=ad(n,e),1),t=o0(t,e,1),e=lA(),null!==t&&(tx(t,1,e),lI(t,e));break}}t=t.return}}function l3(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=lA(),e.pingedLanes|=e.suspendedLanes&n,lu===e&&(ld&n)===n&&(4===lh||3===lh&&(130023424&ld)===ld&&500>tn()-lx?lY(e,0):ly|=n),lI(e,t)}function l4(e,t){0===t&&(0==(1&e.mode)?t=1:(t=tm,0==(130023424&(tm<<=1))&&(tm=4194304)));var n=lA();null!==(e=oQ(e,t))&&(tx(e,t,n),lI(e,n))}function l5(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),l4(e,n)}function l8(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;null!==o&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(d(314))}null!==r&&r.delete(t),l4(e,n)}function l6(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function l9(e,t,n,r){return new l6(e,t,n,r)}function l7(e){return!(!(e=e.prototype)||!e.isReactComponent)}function se(e,t){var n=e.alternate;return null===n?((n=l9(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function st(e,t,n,r,o,i){var a=2;if(r=e,"function"==typeof e)l7(e)&&(a=1);else if("string"==typeof e)a=5;else e:switch(e){case O:return sn(n.children,o,i,t);case T:a=8,o|=8;break;case j:return(e=l9(12,n,t,2|o)).elementType=j,e.lanes=i,e;case D:return(e=l9(13,n,t,o)).elementType=D,e.lanes=i,e;case I:return(e=l9(19,n,t,o)).elementType=I,e.lanes=i,e;case $:return sr(n,o,i,t);default:if("object"==typeof e&&null!==e)switch(e.$$typeof){case M:a=10;break e;case A:a=9;break e;case z:a=11;break e;case L:a=14;break e;case F:a=16,r=null;break e}throw Error(d(130,null==e?e:typeof e,""))}return(t=l9(a,n,t,o)).elementType=e,t.type=r,t.lanes=i,t}function sn(e,t,n,r){return(e=l9(7,e,r,t)).lanes=n,e}function sr(e,t,n,r){return(e=l9(22,e,r,t)).elementType=$,e.lanes=n,e.stateNode={isHidden:!1},e}function so(e,t,n){return(e=l9(6,e,null,t)).lanes=n,e}function si(e,t,n){return(t=l9(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function sa(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=tw(0),this.expirationTimes=tw(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=tw(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function sl(e,t,n,r,o,i,a,l,s){return e=new sa(e,t,n,l,s),1===t?(t=1,!0===i&&(t|=8)):t=0,i=l9(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},oX(i),e}function ss(e){if(!e)return r3;e=e._reactInternals;e:{if(e4(e)!==e||1!==e.tag)throw Error(d(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(r9(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t)throw Error(d(171))}if(1===e.tag){var n=e.type;if(r9(n))return ot(e,n,t)}return t}function su(e,t,n,r,o,i,a,l,s){return(e=sl(n,r,!0,e,o,i,a,l,s)).context=ss(null),n=e.current,(i=oJ(r=lA(),o=lz(n))).callback=null!=t?t:null,o0(n,i,o),e.current.lanes=o,tx(e,o,r),lI(e,r),e}function sc(e,t,n,r){var o=t.current,i=lA(),a=lz(o);return n=ss(n),null===t.context?t.context=n:t.pendingContext=n,(t=oJ(i,a)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=o0(o,t,a))&&(lD(e,o,a,i),o1(e,o,a)),a}function sd(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function sf(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function sp(e,t){sf(e,t),(e=e.alternate)&&sf(e,t)}s=function(e,t,n){if(null!==e){if(e.memoizedProps!==t.pendingProps||r5.current)ax=!0;else{if(0==(e.lanes&n)&&0==(128&t.flags))return ax=!1,function(e,t,n){switch(t.tag){case 3:aT(t),oM();break;case 5:iv(t);break;case 1:r9(t.type)&&on(t);break;case 4:im(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;r2(oI,r._currentValue),r._currentValue=o;break;case 13:if(null!==(r=t.memoizedState)){if(null!==r.dehydrated)return r2(ib,1&ib.current),t.flags|=128,null;if(0!=(n&t.child.childLanes))return az(e,t,n);return r2(ib,1&ib.current),null!==(e=aU(e,t,n))?e.sibling:null}r2(ib,1&ib.current);break;case 19:if(r=0!=(n&t.childLanes),0!=(128&e.flags)){if(r)return a$(e,t,n);t.flags|=128}if(null!==(o=t.memoizedState)&&(o.rendering=null,o.tail=null,o.lastEffect=null),r2(ib,ib.current),!r)return null;break;case 22:case 23:return t.lanes=0,aC(e,t,n)}return aU(e,t,n)}(e,t,n);ax=0!=(131072&e.flags)}}else ax=!1,oE&&0!=(1048576&t.flags)&&ob(t,of,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;aV(e,t),e=t.pendingProps;var o=r6(t,r4.current);oB(t,n),o=iz(null,t,r,e,o,n);var i=iD();return t.flags|=1,"object"==typeof o&&null!==o&&"function"==typeof o.render&&void 0===o.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,r9(r)?(i=!0,on(t)):i=!1,t.memoizedState=null!==o.state&&void 0!==o.state?o.state:null,oX(t),o.updater=o6,t.stateNode=o,o._reactInternals=t,it(t,r,e,n),t=aO(null,t,r,!0,i,n)):(t.tag=0,oE&&i&&ow(t),ak(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(aV(e,t),e=t.pendingProps,r=(o=r._init)(r._payload),t.type=r,o=t.tag=function(e){if("function"==typeof e)return l7(e)?1:0;if(null!=e){if((e=e.$$typeof)===z)return 11;if(e===L)return 14}return 2}(r),e=oD(r,e),o){case 0:t=aR(null,t,r,e,n);break e;case 1:t=aN(null,t,r,e,n);break e;case 11:t=aS(null,t,r,e,n);break e;case 14:t=aE(null,t,r,oD(r.type,e),n);break e}throw Error(d(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:oD(r,o),aR(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:oD(r,o),aN(e,t,r,o,n);case 3:e:{if(aT(t),null===e)throw Error(d(387));r=t.pendingProps,o=(i=t.memoizedState).element,oZ(e,t),o3(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated){if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,256&t.flags){o=ad(Error(d(423)),t),t=aj(e,t,r,n,o);break e}if(r!==o){o=ad(Error(d(424)),t),t=aj(e,t,r,n,o);break e}for(oS=rF(t.stateNode.containerInfo.firstChild),ok=t,oE=!0,o_=null,n=is(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(oM(),r===o){t=aU(e,t,n);break e}ak(e,t,r,n)}t=t.child}return t;case 5:return iv(t),null===e&&oN(t),r=t.type,o=t.pendingProps,i=null!==e?e.memoizedProps:null,a=o.children,rj(r,o)?a=null:null!==i&&rj(r,i)&&(t.flags|=32),aP(e,t),ak(e,t,a,n),t.child;case 6:return null===e&&oN(t),null;case 13:return az(e,t,n);case 4:return im(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=il(t,null,r,n):ak(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:oD(r,o),aS(e,t,r,o,n);case 7:return ak(e,t,t.pendingProps,n),t.child;case 8:case 12:return ak(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,a=o.value,r2(oI,r._currentValue),r._currentValue=a,null!==i){if(nQ(i.value,a)){if(i.children===o.children&&!r5.current){t=aU(e,t,n);break e}}else for(null!==(i=t.child)&&(i.return=t);null!==i;){var l=i.dependencies;if(null!==l){a=i.child;for(var s=l.firstContext;null!==s;){if(s.context===r){if(1===i.tag){(s=oJ(-1,n&-n)).tag=2;var u=i.updateQueue;if(null!==u){var c=(u=u.shared).pending;null===c?s.next=s:(s.next=c.next,c.next=s),u.pending=s}}i.lanes|=n,null!==(s=i.alternate)&&(s.lanes|=n),oW(i.return,n,t),l.lanes|=n;break}s=s.next}}else if(10===i.tag)a=i.type===t.type?null:i.child;else if(18===i.tag){if(null===(a=i.return))throw Error(d(341));a.lanes|=n,null!==(l=a.alternate)&&(l.lanes|=n),oW(a,n,t),a=i.sibling}else a=i.child;if(null!==a)a.return=i;else for(a=i;null!==a;){if(a===t){a=null;break}if(null!==(i=a.sibling)){i.return=a.return,a=i;break}a=a.return}i=a}}ak(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,oB(t,n),r=r(o=oH(o)),t.flags|=1,ak(e,t,r,n),t.child;case 14:return o=oD(r=t.type,t.pendingProps),o=oD(r.type,o),aE(e,t,r,o,n);case 15:return a_(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:oD(r,o),aV(e,t),t.tag=1,r9(r)?(e=!0,on(t)):e=!1,oB(t,n),o7(t,r,o),it(t,r,o,n),aO(null,t,r,!0,e,n);case 19:return a$(e,t,n);case 22:return aC(e,t,n)}throw Error(d(156,t.tag))};var sh="function"==typeof reportError?reportError:function(e){console.error(e)};function sm(e){this._internalRoot=e}function sg(e){this._internalRoot=e}function sv(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function sy(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function sb(){}function sw(e,t,n,r,o){var i=n._reactRootContainer;if(i){var a=i;if("function"==typeof o){var l=o;o=function(){var e=sd(a);l.call(e)}}sc(t,a,e,o)}else a=function(e,t,n,r,o){if(o){if("function"==typeof r){var i=r;r=function(){var e=sd(a);i.call(e)}}var a=su(t,r,e,0,null,!1,!1,"",sb);return e._reactRootContainer=a,e[rB]=a.current,ry(8===e.nodeType?e.parentNode:e),lB(),a}for(;o=e.lastChild;)e.removeChild(o);if("function"==typeof r){var l=r;r=function(){var e=sd(s);l.call(e)}}var s=sl(e,0,!1,null,null,!1,!1,"",sb);return e._reactRootContainer=s,e[rB]=s.current,ry(8===e.nodeType?e.parentNode:e),lB(function(){sc(t,s,n,r)}),s}(n,t,e,o,r);return sd(a)}sg.prototype.render=sm.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(d(409));sc(e,t,null,null)},sg.prototype.unmount=sm.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;lB(function(){sc(null,e,null,null)}),t[rB]=null}},sg.prototype.unstable_scheduleHydration=function(e){if(e){var t=tR();e={blockedOn:null,target:e,priority:t};for(var n=0;n<tI.length&&0!==t&&t<tI[n].priority;n++);tI.splice(n,0,e),0===n&&tV(e)}},t_=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=tg(t.pendingLanes);0!==n&&(tk(t,1|n),lI(t,tn()),0==(6&ls)&&(lk=tn()+500,os()))}break;case 13:lB(function(){var t=oQ(e,1);null!==t&&lD(t,e,1,lA())}),sp(e,1)}},tC=function(e){if(13===e.tag){var t=oQ(e,134217728);null!==t&&lD(t,e,134217728,lA()),sp(e,134217728)}},tP=function(e){if(13===e.tag){var t=lz(e),n=oQ(e,t);null!==n&&lD(n,e,t,lA()),sp(e,t)}},tR=function(){return tS},tN=function(e,t){var n=tS;try{return tS=e,t()}finally{tS=n}},eL=function(e,t,n){switch(t){case"input":if(eh(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=rX(r);if(!o)throw Error(d(90));eu(r),eh(r,o)}}}break;case"textarea":ex(e,n);break;case"select":null!=(t=n.value)&&ey(e,!!n.multiple,t,!1)}},eB=lW,eH=lB;var sx={findFiberByHostInstance:rG,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},sk={bundleType:sx.bundleType,version:sx.version,rendererPackageName:sx.rendererPackageName,rendererConfig:sx.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=e6(e))?null:e.stateNode},findFiberByHostInstance:sx.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var sS=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sS.isDisabled&&sS.supportsFiber)try{tu=sS.inject(sk),tc=sS}catch(e){}}W={usingClientEntryPoint:!1,Events:[rQ,rK,rX,eU,eW,lW]},B=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!sv(t))throw Error(d(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:N,key:null==r?null:""+r,children:e,containerInfo:t,implementation:null}}(e,t,null,n)},H=function(e,t){if(!sv(e))throw Error(d(299));var n=!1,r="",o=sh;return null!=t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(o=t.onRecoverableError)),t=sl(e,1,!1,null,null,n,!1,r,o),e[rB]=t.current,ry(8===e.nodeType?e.parentNode:e),new sm(t)},Y=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"==typeof e.render)throw Error(d(188));throw Error(d(268,e=Object.keys(e).join(",")))}return e=null===(e=e6(t))?null:e.stateNode},q=function(e){return lB(e)},G=function(e,t,n){if(!sy(t))throw Error(d(200));return sw(null,e,t,!0,n)},Q=function(e,t,n){if(!sv(e))throw Error(d(405));var r=null!=n&&n.hydratedSources||null,o=!1,i="",a=sh;if(null!=n&&(!0===n.unstable_strictMode&&(o=!0),void 0!==n.identifierPrefix&&(i=n.identifierPrefix),void 0!==n.onRecoverableError&&(a=n.onRecoverableError)),t=su(t,null,e,1,null!=n?n:null,o,!1,i,a),e[rB]=t.current,ry(e),r)for(e=0;e<r.length;e++)o=(o=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new sg(t)},K=function(e,t,n){if(!sy(t))throw Error(d(200));return sw(null,e,t,!1,n)},X=function(e){if(!sy(e))throw Error(d(40));return!!e._reactRootContainer&&(lB(function(){sw(null,null,e,!1,function(){e._reactRootContainer=null,e[rB]=null})}),!0)},Z=lW,J=function(e,t,n,r){if(!sy(n))throw Error(d(200));if(null==e||void 0===e._reactInternals)throw Error(d(38));return sw(e,t,n,!1,r)},ee="18.2.0-next-9e3b772b8-20220608"}),_.register("ibqfJ",function(e,t){e.exports=_("dnqd8")}),_.register("dnqd8",function(e,t){function r(e,t){var n=e.length;for(e.push(t);0<n;){var r=n-1>>>1,o=e[r];if(0<a(o,t))e[r]=t,e[n]=o,n=r;else break}}function o(e){return 0===e.length?null:e[0]}function i(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;for(var r=0,o=e.length,i=o>>>1;r<i;){var l=2*(r+1)-1,s=e[l],u=l+1,c=e[u];if(0>a(s,n))u<o&&0>a(c,s)?(e[r]=c,e[u]=n,r=u):(e[r]=s,e[l]=n,r=l);else if(u<o&&0>a(c,n))e[r]=c,e[u]=n,r=u;else break}}return t}function a(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if(n(e.exports,"unstable_now",function(){return l},function(e){return l=e}),n(e.exports,"unstable_IdlePriority",function(){return s},function(e){return s=e}),n(e.exports,"unstable_ImmediatePriority",function(){return u},function(e){return u=e}),n(e.exports,"unstable_LowPriority",function(){return c},function(e){return c=e}),n(e.exports,"unstable_NormalPriority",function(){return d},function(e){return d=e}),n(e.exports,"unstable_Profiling",function(){return f},function(e){return f=e}),n(e.exports,"unstable_UserBlockingPriority",function(){return p},function(e){return p=e}),n(e.exports,"unstable_cancelCallback",function(){return h},function(e){return h=e}),n(e.exports,"unstable_continueExecution",function(){return m},function(e){return m=e}),n(e.exports,"unstable_forceFrameRate",function(){return g},function(e){return g=e}),n(e.exports,"unstable_getCurrentPriorityLevel",function(){return v},function(e){return v=e}),n(e.exports,"unstable_getFirstCallbackNode",function(){return y},function(e){return y=e}),n(e.exports,"unstable_next",function(){return b},function(e){return b=e}),n(e.exports,"unstable_pauseExecution",function(){return w},function(e){return w=e}),n(e.exports,"unstable_requestPaint",function(){return x},function(e){return x=e}),n(e.exports,"unstable_runWithPriority",function(){return k},function(e){return k=e}),n(e.exports,"unstable_scheduleCallback",function(){return S},function(e){return S=e}),n(e.exports,"unstable_shouldYield",function(){return E},function(e){return E=e}),n(e.exports,"unstable_wrapCallback",function(){return _},function(e){return _=e}),"object"==typeof performance&&"function"==typeof performance.now){var l,s,u,c,d,f,p,h,m,g,v,y,b,w,x,k,S,E,_,C,P=performance;l=function(){return P.now()}}else{var R=Date,N=R.now();l=function(){return R.now()-N}}var O=[],T=[],j=1,M=null,A=3,z=!1,D=!1,I=!1,L="function"==typeof setTimeout?setTimeout:null,F="function"==typeof clearTimeout?clearTimeout:null,$="undefined"!=typeof setImmediate?setImmediate:null;function V(e){for(var t=o(T);null!==t;){if(null===t.callback)i(T);else if(t.startTime<=e)i(T),t.sortIndex=t.expirationTime,r(O,t);else break;t=o(T)}}function U(e){if(I=!1,V(e),!D){if(null!==o(O))D=!0,J(W);else{var t=o(T);null!==t&&ee(U,t.startTime-e)}}}function W(e,t){D=!1,I&&(I=!1,F(Y),Y=-1),z=!0;var n=A;try{for(V(t),M=o(O);null!==M&&(!(M.expirationTime>t)||e&&!Q());){var r=M.callback;if("function"==typeof r){M.callback=null,A=M.priorityLevel;var a=r(M.expirationTime<=t);t=l(),"function"==typeof a?M.callback=a:M===o(O)&&i(O),V(t)}else i(O);M=o(O)}if(null!==M)var s=!0;else{var u=o(T);null!==u&&ee(U,u.startTime-t),s=!1}return s}finally{M=null,A=n,z=!1}}"undefined"!=typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var B=!1,H=null,Y=-1,q=5,G=-1;function Q(){return!(l()-G<q)}function K(){if(null!==H){var e=l();G=e;var t=!0;try{t=H(!0,e)}finally{t?C():(B=!1,H=null)}}else B=!1}if("function"==typeof $)C=function(){$(K)};else if("undefined"!=typeof MessageChannel){var X=new MessageChannel,Z=X.port2;X.port1.onmessage=K,C=function(){Z.postMessage(null)}}else C=function(){L(K,0)};function J(e){H=e,B||(B=!0,C())}function ee(e,t){Y=L(function(){e(l())},t)}s=5,u=1,c=4,d=3,f=null,p=2,h=function(e){e.callback=null},m=function(){D||z||(D=!0,J(W))},g=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<e?Math.floor(1e3/e):5},v=function(){return A},y=function(){return o(O)},b=function(e){switch(A){case 1:case 2:case 3:var t=3;break;default:t=A}var n=A;A=t;try{return e()}finally{A=n}},w=function(){},x=function(){},k=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=A;A=e;try{return t()}finally{A=n}},S=function(e,t,n){var i=l();switch(n="object"==typeof n&&null!==n&&"number"==typeof(n=n.delay)&&0<n?i+n:i,e){case 1:var a=-1;break;case 2:a=250;break;case 5:a=1073741823;break;case 4:a=1e4;break;default:a=5e3}return a=n+a,e={id:j++,callback:t,priorityLevel:e,startTime:n,expirationTime:a,sortIndex:-1},n>i?(e.sortIndex=n,r(T,e),null===o(O)&&e===o(T)&&(I?(F(Y),Y=-1):I=!0,ee(U,n-i))):(e.sortIndex=a,r(O,e),D||z||(D=!0,J(W))),e},E=Q,_=function(e){var t=A;return function(){var n=A;A=t;try{return e.apply(this,arguments)}finally{A=n}}}}),_.register("beWdq",function(e,t){n(e.exports,"AsyncMode",function(){return r},function(e){return r=e}),n(e.exports,"ConcurrentMode",function(){return o},function(e){return o=e}),n(e.exports,"ContextConsumer",function(){return i},function(e){return i=e}),n(e.exports,"ContextProvider",function(){return a},function(e){return a=e}),n(e.exports,"Element",function(){return l},function(e){return l=e}),n(e.exports,"ForwardRef",function(){return s},function(e){return s=e}),n(e.exports,"Fragment",function(){return u},function(e){return u=e}),n(e.exports,"Lazy",function(){return c},function(e){return c=e}),n(e.exports,"Memo",function(){return d},function(e){return d=e}),n(e.exports,"Portal",function(){return f},function(e){return f=e}),n(e.exports,"Profiler",function(){return p},function(e){return p=e}),n(e.exports,"StrictMode",function(){return h},function(e){return h=e}),n(e.exports,"Suspense",function(){return m},function(e){return m=e}),n(e.exports,"isAsyncMode",function(){return g},function(e){return g=e}),n(e.exports,"isConcurrentMode",function(){return v},function(e){return v=e}),n(e.exports,"isContextConsumer",function(){return y},function(e){return y=e}),n(e.exports,"isContextProvider",function(){return b},function(e){return b=e}),n(e.exports,"isElement",function(){return w},function(e){return w=e}),n(e.exports,"isForwardRef",function(){return x},function(e){return x=e}),n(e.exports,"isFragment",function(){return k},function(e){return k=e}),n(e.exports,"isLazy",function(){return S},function(e){return S=e}),n(e.exports,"isMemo",function(){return E},function(e){return E=e}),n(e.exports,"isPortal",function(){return _},function(e){return _=e}),n(e.exports,"isProfiler",function(){return C},function(e){return C=e}),n(e.exports,"isStrictMode",function(){return P},function(e){return P=e}),n(e.exports,"isSuspense",function(){return R},function(e){return R=e}),n(e.exports,"isValidElementType",function(){return N},function(e){return N=e}),n(e.exports,"typeOf",function(){return O},function(e){return O=e});var r,o,i,a,l,s,u,c,d,f,p,h,m,g,v,y,b,w,x,k,S,E,_,C,P,R,N,O,T="function"==typeof Symbol&&Symbol.for,j=T?Symbol.for("react.element"):60103,M=T?Symbol.for("react.portal"):60106,A=T?Symbol.for("react.fragment"):60107,z=T?Symbol.for("react.strict_mode"):60108,D=T?Symbol.for("react.profiler"):60114,I=T?Symbol.for("react.provider"):60109,L=T?Symbol.for("react.context"):60110,F=T?Symbol.for("react.async_mode"):60111,$=T?Symbol.for("react.concurrent_mode"):60111,V=T?Symbol.for("react.forward_ref"):60112,U=T?Symbol.for("react.suspense"):60113,W=T?Symbol.for("react.suspense_list"):60120,B=T?Symbol.for("react.memo"):60115,H=T?Symbol.for("react.lazy"):60116,Y=T?Symbol.for("react.block"):60121,q=T?Symbol.for("react.fundamental"):60117,G=T?Symbol.for("react.responder"):60118,Q=T?Symbol.for("react.scope"):60119;function K(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case j:switch(e=e.type){case F:case $:case A:case D:case z:case U:return e;default:switch(e=e&&e.$$typeof){case L:case V:case H:case B:case I:return e;default:return t}}case M:return t}}}function X(e){return K(e)===$}r=F,o=$,i=L,a=I,l=j,s=V,u=A,c=H,d=B,f=M,p=D,h=z,m=U,g=function(e){return X(e)||K(e)===F},v=X,y=function(e){return K(e)===L},b=function(e){return K(e)===I},w=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===j},x=function(e){return K(e)===V},k=function(e){return K(e)===A},S=function(e){return K(e)===H},E=function(e){return K(e)===B},_=function(e){return K(e)===M},C=function(e){return K(e)===D},P=function(e){return K(e)===z},R=function(e){return K(e)===U},N=function(e){return"string"==typeof e||"function"==typeof e||e===A||e===$||e===D||e===z||e===U||e===W||"object"==typeof e&&null!==e&&(e.$$typeof===H||e.$$typeof===B||e.$$typeof===I||e.$$typeof===L||e.$$typeof===V||e.$$typeof===q||e.$$typeof===G||e.$$typeof===Q||e.$$typeof===Y)},O=K}),_.register("flL8Q",function(e,t){n(e.exports,"default",function(){return i});/* global window */var r,o=_("cctDJ");r="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==x?x:e;var i=(0,o.default)(r)}),_.register("cctDJ",function(e,t){n(e.exports,"default",function(){return r});function r(e){var t,n=e.Symbol;return"function"==typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}}),_.register("7HKs8",function(e,t){var n=_("8ThvE"),r=_("jjS2x"),o=t&&!t.nodeType&&t,i=o&&e&&!e.nodeType&&e,a=i&&i.exports===o?n.Buffer:void 0,l=a?a.isBuffer:void 0;e.exports=l||r}),_.register("8ThvE",function(e,t){var n=_("lyxRX"),r="object"==typeof self&&self&&self.Object===Object&&self,o=n||r||Function("return this")();e.exports=o}),_.register("lyxRX",function(e,t){/** Detect free variable `global` from Node.js. */var n="object"==typeof x&&x&&x.Object===Object&&x;e.exports=n}),_.register("jjS2x",function(e,t){e.exports=/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */function(){return!1}}),_.register("7vc1R",function(e,t){var n=_("lyxRX"),r=t&&!t.nodeType&&t,o=r&&e&&!e.nodeType&&e,i=o&&o.exports===r&&n.process,a=function(){try{// Use `util.types` for Node.js 10+.
var e=o&&o.require&&o.require("util").types;if(e)return e;// Legacy `process.binding('util')` for Node.js < 10.
return i&&i.binding&&i.binding("util")}catch(e){}}();e.exports=a});var C={};C=_("6ObR8"),_("exYeM");var P={};!// DCE check should happen before ReactDOM bundle executes so that
// DevTools can report bad minification during injection.
function e(){/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{// Verify that the code above has been dead code eliminated (DCE'd).
__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){// DevTools shouldn't crash React, no matter what.
// We should still report in case we break this code.
console.error(e)}}(),h=(P=_("h8vP0")).createRoot,P.hydrateRoot,_("exYeM"),_("exYeM"),_("exYeM");/**
 * lucide-react v0.288.0 - ISC
 *//**
 * lucide-react v0.288.0 - ISC
 */var R=_("exYeM"),N={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let O=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),T=(e,t)=>{let n=(0,R.forwardRef)(({color:n="currentColor",size:r=24,strokeWidth:o=2,absoluteStrokeWidth:i,children:a,...l},s)=>(0,R.createElement)("svg",{ref:s,...N,width:r,height:r,stroke:n,strokeWidth:i?24*Number(o)/Number(r):o,className:`lucide lucide-${O(e)}`,...l},[...t.map(([e,t])=>(0,R.createElement)(e,t)),...(Array.isArray(a)?a:[a])||[]]));return n.displayName=`${e}`,n},j=T("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);function M(){return(M=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}/* -------------------------------------------------------------------------------------------------
 * createContextScope
 * -----------------------------------------------------------------------------------------------*/function A(e,t=[]){let n=[],r=()=>{let t=n.map(e=>/*#__PURE__*/(0,R.createContext)(e));return function(n){let r=(null==n?void 0:n[e])||t;return(0,R.useMemo)(()=>({[`__scope${e}`]:{...n,[e]:r}}),[n,r])}};return r.scopeName=e,[/* -----------------------------------------------------------------------------------------------
   * createContext
   * ---------------------------------------------------------------------------------------------*/function(t,r){let o=/*#__PURE__*/(0,R.createContext)(r),i=n.length;function a(t){let{scope:n,children:r,...a}=t,l=(null==n?void 0:n[e][i])||o,s=(0,R.useMemo)(()=>a,Object.values(a));return/*#__PURE__*/(0,R.createElement)(l.Provider,{value:s},r)}return n=[...n,r],a.displayName=t+"Provider",[a,function(n,a){let l=(null==a?void 0:a[e][i])||o,s=(0,R.useContext)(l);if(s)return s;if(void 0!==r)return r;// if a defaultContext wasn't specified, it's a required context.
throw Error(`\`${n}\` must be used within \`${t}\``)}]},/* -------------------------------------------------------------------------------------------------
 * composeContextScopes
 * -----------------------------------------------------------------------------------------------*/function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let r=n.reduce((t,{useScope:n,scopeName:r})=>{// We are calling a hook inside a callback which React warns against to avoid inconsistent
// renders, however, scoping doesn't have render side effects so we ignore the rule.
// eslint-disable-next-line react-hooks/rules-of-hooks
let o=n(e),i=o[`__scope${r}`];return{...t,...i}},{});return(0,R.useMemo)(()=>({[`__scope${t.scopeName}`]:r}),[r])}};return n.scopeName=t.scopeName,n}(r,...t)]}/**
 * A utility to compose multiple refs together
 * Accepts callback refs and RefObject(s)
 */function z(...e){return t=>e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}/**
 * A custom hook that composes multiple refs
 * Accepts callback refs and RefObject(s)
 */function D(...e){// eslint-disable-next-line react-hooks/exhaustive-deps
return(0,R.useCallback)(z(...e),e)}var R=(_("exYeM"),_("exYeM"),_("exYeM"),_("exYeM"),_("exYeM"),_("exYeM"));/* -------------------------------------------------------------------------------------------------
 * Slot
 * -----------------------------------------------------------------------------------------------*/let I=/*#__PURE__*/(0,R.forwardRef)((e,t)=>{let{children:n,...r}=e,o=(0,R.Children).toArray(n),i=o.find($);if(i){// the new element to render is the one passed as a child of `Slottable`
let e=i.props.children,n=o.map(t=>t!==i?t:// because the new element will be the one rendered, we are only interested
    // in grabbing its children (`newElement.props.children`)
    (0,R.Children).count(e)>1?(0,R.Children).only(null):/*#__PURE__*/(0,R.isValidElement)(e)?e.props.children:null);return/*#__PURE__*/(0,R.createElement)(L,M({},r,{ref:t}),/*#__PURE__*/(0,R.isValidElement)(e)?/*#__PURE__*/(0,R.cloneElement)(e,void 0,n):null)}return/*#__PURE__*/(0,R.createElement)(L,M({},r,{ref:t}),n)});I.displayName="Slot";/* -------------------------------------------------------------------------------------------------
 * SlotClone
 * -----------------------------------------------------------------------------------------------*/let L=/*#__PURE__*/(0,R.forwardRef)((e,t)=>{let{children:n,...r}=e;return/*#__PURE__*/(0,R.isValidElement)(n)?/*#__PURE__*/(0,R.cloneElement)(n,{...function(e,t){// all child props should override
let n={...t};for(let r in t){let o=e[r],i=t[r],a=/^on[A-Z]/.test(r);a?o&&i?n[r]=(...e)=>{i(...e),o(...e)}:o&&(n[r]=o):"style"===r?n[r]={...o,...i}:"className"===r&&(n[r]=[o,i].filter(Boolean).join(" "))}return{...e,...n}}(r,n.props),ref:t?z(t,n.ref):n.ref}):(0,R.Children).count(n)>1?(0,R.Children).only(null):null});L.displayName="SlotClone";/* -------------------------------------------------------------------------------------------------
 * Slottable
 * -----------------------------------------------------------------------------------------------*/let F=({children:e})=>/*#__PURE__*/(0,R.createElement)(R.Fragment,null,e);/* ---------------------------------------------------------------------------------------------- */function $(e){return/*#__PURE__*/(0,R.isValidElement)(e)&&e.type===F}// We have resorted to returning slots directly rather than exposing primitives that can then
// be slotted like `<CollectionItem as={Slot}>…</CollectionItem>`.
// This is because we encountered issues with generic types that cannot be statically analysed
// due to creating them dynamically via createCollection.
function V(e){/* -----------------------------------------------------------------------------------------------
   * CollectionProvider
   * ---------------------------------------------------------------------------------------------*/let t=e+"CollectionProvider",[n,r]=A(t),[o,i]=n(t,{collectionRef:{current:null},itemMap:new Map}),a=e+"CollectionSlot",l=/*@__PURE__*/k(R).forwardRef((e,t)=>{let{scope:n,children:r}=e,o=i(a,n),l=D(t,o.collectionRef);return /*@__PURE__*/k(R).createElement(I,{ref:l},r)}),s=e+"CollectionItemSlot",u="data-radix-collection-item",c=/*@__PURE__*/k(R).forwardRef((e,t)=>{let{scope:n,children:r,...o}=e,a=/*@__PURE__*/k(R).useRef(null),l=D(t,a),c=i(s,n);return /*@__PURE__*/k(R).useEffect(()=>(c.itemMap.set(a,{ref:a,...o}),()=>void c.itemMap.delete(a))),/*@__PURE__*/k(R).createElement(I,{[u]:"",ref:l},r)});return[{Provider:e=>{let{scope:t,children:n}=e,r=/*@__PURE__*/k(R).useRef(null),i=/*@__PURE__*/k(R).useRef(new Map).current;return /*@__PURE__*/k(R).createElement(o,{scope:t,itemMap:i,collectionRef:r},n)},Slot:l,ItemSlot:c},/* -----------------------------------------------------------------------------------------------
   * useCollection
   * ---------------------------------------------------------------------------------------------*/function(t){let n=i(e+"CollectionConsumer",t),r=/*@__PURE__*/k(R).useCallback(()=>{let e=n.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll(`[${u}]`)),r=Array.from(n.itemMap.values()),o=r.sort((e,n)=>t.indexOf(e.ref.current)-t.indexOf(n.ref.current));return o},[n.collectionRef,n.itemMap]);return r},r]}function U(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(null==e||e(r),!1===n||!r.defaultPrevented)return null==t?void 0:t(r)}}/**
 * A custom hook that converts a callback to a ref to avoid triggering re-renders when passed as a
 * prop or avoid re-executing effects when passed as a dependency
 */function W(e){let t=(0,R.useRef)(e);return(0,R.useEffect)(()=>{t.current=e}),(0,R.useMemo)(()=>(...e)=>{var n;return null===(n=t.current)||void 0===n?void 0:n.call(t,...e)},[])}function B({prop:e,defaultProp:t,onChange:n=()=>{}}){let[r,o]=function({defaultProp:e,onChange:t}){let n=(0,R.useState)(e),[r]=n,o=(0,R.useRef)(r),i=W(t);return(0,R.useEffect)(()=>{o.current!==r&&(i(r),o.current=r)},[r,o,i]),n}({defaultProp:t,onChange:n}),i=void 0!==e,a=i?e:r,l=W(n),s=(0,R.useCallback)(t=>{if(i){let n="function"==typeof t?t(e):t;n!==e&&l(n)}else o(t)},[i,e,o,l]);return[a,s]}var R=(_("exYeM"),_("exYeM"),_("exYeM"));// https://github.com/DefinitelyTyped/DefinitelyTyped/pull/55396
// prettier-ignore
/* -------------------------------------------------------------------------------------------------
 * Primitive
 * -----------------------------------------------------------------------------------------------*/let H=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let n=/*#__PURE__*/(0,R.forwardRef)((e,n)=>{let{asChild:r,...o}=e,i=r?I:t;return(0,R.useEffect)(()=>{window[Symbol.for("radix-ui")]=!0},[]),/*#__PURE__*/(0,R.createElement)(i,M({},o,{ref:n}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});/* -------------------------------------------------------------------------------------------------
 * Utils
 * -----------------------------------------------------------------------------------------------*//**
 * Flush custom event dispatch
 * https://github.com/radix-ui/primitives/pull/1378
 *
 * React batches *all* event handlers since version 18, this introduces certain considerations when using custom event types.
 *
 * Internally, React prioritises events in the following order:
 *  - discrete
 *  - continuous
 *  - default
 *
 * https://github.com/facebook/react/blob/a8a4742f1c54493df00da648a3f9d26e3db9c8b5/packages/react-dom/src/events/ReactDOMEventListener.js#L294-L350
 *
 * `discrete` is an  important distinction as updates within these events are applied immediately.
 * React however, is not able to infer the priority of custom event types due to how they are detected internally.
 * Because of this, it's possible for updates from custom events to be unexpectedly batched when
 * dispatched by another `discrete` event.
 *
 * In order to ensure that updates from custom events are applied predictably, we need to manually flush the batch.
 * This utility should be used when dispatching a custom event from within another `discrete` event, this utility
 * is not nessesary when dispatching known event types, or if dispatching a custom type inside a non-discrete event.
 * For example:
 *
 * dispatching a known click 👎
 * target.dispatchEvent(new Event(‘click’))
 *
 * dispatching a custom type within a non-discrete event 👎
 * onScroll={(event) => event.target.dispatchEvent(new CustomEvent(‘customType’))}
 *
 * dispatching a custom type within a `discrete` event 👍
 * onPointerDown={(event) => dispatchDiscreteCustomEvent(event.target, new CustomEvent(‘customType’))}
 *
 * Note: though React classifies `focus`, `focusin` and `focusout` events as `discrete`, it's  not recommended to use
 * this utility with them. This is because it's possible for those handlers to be called implicitly during render
 * e.g. when focus is within a component as it is unmounted, or when managing focus on mount.
 */function Y(e,t){e&&(0,P.flushSync)(()=>e.dispatchEvent(t))}var R=(_("exYeM"),_("exYeM"));/**
 * On the server, React emits a warning when calling `useLayoutEffect`.
 * This is because neither `useLayoutEffect` nor `useEffect` run on the server.
 * We use this safe version which suppresses the warning by replacing it with a noop on the server.
 *
 * See: https://reactjs.org/docs/hooks-reference.html#uselayouteffect
 */let q=(null==globalThis?void 0:globalThis.document)?R.useLayoutEffect:()=>{};var R=_("exYeM");let G=e=>{let{present:t,children:n}=e,r=/* -------------------------------------------------------------------------------------------------
 * usePresence
 * -----------------------------------------------------------------------------------------------*/function(e){var t;let[n,r]=(0,R.useState)(),o=(0,R.useRef)({}),i=(0,R.useRef)(e),a=(0,R.useRef)("none"),l=e?"mounted":"unmounted",[s,u]=(t={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},(0,R.useReducer)((e,n)=>{let r=t[e][n];return null!=r?r:e},l));return(0,R.useEffect)(()=>{let e=Q(o.current);a.current="mounted"===s?e:"none"},[s]),q(()=>{let t=o.current,n=i.current,r=n!==e;if(r){let r=a.current,o=Q(t);e?u("MOUNT"):"none"===o||(null==t?void 0:t.display)==="none"?u("UNMOUNT"):n&&r!==o?u("ANIMATION_OUT"):u("UNMOUNT"),i.current=e}},[e,u]),q(()=>{if(n){/**
       * Triggering an ANIMATION_OUT during an ANIMATION_IN will fire an `animationcancel`
       * event for ANIMATION_IN after we have entered `unmountSuspended` state. So, we
       * make sure we only trigger ANIMATION_END for the currently active animation.
       */let e=e=>{let t=Q(o.current),r=t.includes(e.animationName);e.target===n&&r&&// By manually flushing we ensure they sync within a frame, removing the flash.
(0,P.flushSync)(()=>u("ANIMATION_END"))},t=e=>{e.target===n&&(a.current=Q(o.current))};return n.addEventListener("animationstart",t),n.addEventListener("animationcancel",e),n.addEventListener("animationend",e),()=>{n.removeEventListener("animationstart",t),n.removeEventListener("animationcancel",e),n.removeEventListener("animationend",e)}}u("ANIMATION_END")},[n,u]),{isPresent:["mounted","unmountSuspended"].includes(s),ref:(0,R.useCallback)(e=>{e&&(o.current=getComputedStyle(e)),r(e)},[])}}(t),o="function"==typeof n?n({present:r.isPresent}):(0,R.Children).only(n),i=D(r.ref,o.ref),a="function"==typeof n;return a||r.isPresent?/*#__PURE__*/(0,R.cloneElement)(o,{ref:i}):null};/* -----------------------------------------------------------------------------------------------*/function Q(e){return(null==e?void 0:e.animationName)||"none"}G.displayName="Presence";var R=_("exYeM");let K=R["useId".toString()]||(()=>void 0),X=0;function Z(e){let[t,n]=R.useState(K());// React versions older than 18 will have client-side ids only.
return q(()=>{e||n(e=>null!=e?e:String(X++))},[e]),e||(t?`radix-${t}`:"")}/* -------------------------------------------------------------------------------------------------
 * Collapsible
 * -----------------------------------------------------------------------------------------------*/let J="Collapsible",[ee,et]=A(J),[en,er]=ee(J),eo=/*#__PURE__*/(0,R.forwardRef)((e,t)=>{let{__scopeCollapsible:n,open:r,defaultOpen:o,disabled:i,onOpenChange:a,...l}=e,[s=!1,u]=B({prop:r,defaultProp:o,onChange:a});return/*#__PURE__*/(0,R.createElement)(en,{scope:n,disabled:i,contentId:Z(),open:s,onOpenToggle:(0,R.useCallback)(()=>u(e=>!e),[u])},/*#__PURE__*/(0,R.createElement)(H.div,M({"data-state":eu(s),"data-disabled":i?"":void 0},l,{ref:t})))}),ei=/*#__PURE__*/(0,R.forwardRef)((e,t)=>{let{__scopeCollapsible:n,...r}=e,o=er("CollapsibleTrigger",n);return/*#__PURE__*/(0,R.createElement)(H.button,M({type:"button","aria-controls":o.contentId,"aria-expanded":o.open||!1,"data-state":eu(o.open),"data-disabled":o.disabled?"":void 0,disabled:o.disabled},r,{ref:t,onClick:U(e.onClick,o.onOpenToggle)}))}),ea="CollapsibleContent",el=/*#__PURE__*/(0,R.forwardRef)((e,t)=>{let{forceMount:n,...r}=e,o=er(ea,e.__scopeCollapsible);return/*#__PURE__*/(0,R.createElement)(G,{present:n||o.open},({present:e})=>/*#__PURE__*/(0,R.createElement)(es,M({},r,{ref:t,present:e})))}),es=/*#__PURE__*/(0,R.forwardRef)((e,t)=>{let{__scopeCollapsible:n,present:r,children:o,...i}=e,a=er(ea,n),[l,s]=(0,R.useState)(r),u=(0,R.useRef)(null),c=D(t,u),d=(0,R.useRef)(0),f=d.current,p=(0,R.useRef)(0),h=p.current,m=a.open||l,g=(0,R.useRef)(m),v=(0,R.useRef)();return(0,R.useEffect)(()=>{let e=requestAnimationFrame(()=>g.current=!1);return()=>cancelAnimationFrame(e)},[]),q(()=>{let e=u.current;if(e){v.current=v.current||{transitionDuration:e.style.transitionDuration,animationName:e.style.animationName},e.style.transitionDuration="0s",e.style.animationName="none";let t=e.getBoundingClientRect();d.current=t.height,p.current=t.width,g.current||(e.style.transitionDuration=v.current.transitionDuration,e.style.animationName=v.current.animationName),s(r)}/**
     * depends on `context.open` because it will change to `false`
     * when a close is triggered but `present` will be `false` on
     * animation end (so when close finishes). This allows us to
     * retrieve the dimensions *before* closing.
     */},[a.open,r]),/*#__PURE__*/(0,R.createElement)(H.div,M({"data-state":eu(a.open),"data-disabled":a.disabled?"":void 0,id:a.contentId,hidden:!m},i,{ref:c,style:{"--radix-collapsible-content-height":f?`${f}px`:void 0,"--radix-collapsible-content-width":h?`${h}px`:void 0,...e.style}}),m&&o)});/* -----------------------------------------------------------------------------------------------*/function eu(e){return e?"open":"closed"}var R=_("exYeM");let ec=/*#__PURE__*/(0,R.createContext)(void 0),ed="Accordion",ef=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[ep,eh,em]=V(ed),[eg,ev]=A(ed,[em,et]),ey=et(),eb=/*@__PURE__*/k(R).forwardRef((e,t)=>{let{type:n,...r}=e;return /*@__PURE__*/k(R).createElement(ep.Provider,{scope:e.__scopeAccordion},"multiple"===n?/*@__PURE__*/k(R).createElement(e_,M({},r,{ref:t})):/*@__PURE__*/k(R).createElement(eE,M({},r,{ref:t})))});eb.propTypes={type(e){let t=e.value||e.defaultValue;return e.type&&!["single","multiple"].includes(e.type)?Error("Invalid prop `type` supplied to `Accordion`. Expected one of `single | multiple`."):"multiple"===e.type&&"string"==typeof t?Error("Invalid prop `type` supplied to `Accordion`. Expected `single` when `defaultValue` or `value` is type `string`."):"single"===e.type&&Array.isArray(t)?Error("Invalid prop `type` supplied to `Accordion`. Expected `multiple` when `defaultValue` or `value` is type `string[]`."):null}};/* -----------------------------------------------------------------------------------------------*/let[ew,ex]=eg(ed),[ek,eS]=eg(ed,{collapsible:!1}),eE=/*@__PURE__*/k(R).forwardRef((e,t)=>{let{value:n,defaultValue:r,onValueChange:o=()=>{},collapsible:i=!1,...a}=e,[l,s]=B({prop:n,defaultProp:r,onChange:o});return /*@__PURE__*/k(R).createElement(ew,{scope:e.__scopeAccordion,value:l?[l]:[],onItemOpen:s,onItemClose:/*@__PURE__*/k(R).useCallback(()=>i&&s(""),[i,s])},/*@__PURE__*/k(R).createElement(ek,{scope:e.__scopeAccordion,collapsible:i},/*@__PURE__*/k(R).createElement(eR,M({},a,{ref:t}))))}),e_=/*@__PURE__*/k(R).forwardRef((e,t)=>{let{value:n,defaultValue:r,onValueChange:o=()=>{},...i}=e,[a=[],l]=B({prop:n,defaultProp:r,onChange:o}),s=/*@__PURE__*/k(R).useCallback(e=>l((t=[])=>[...t,e]),[l]),u=/*@__PURE__*/k(R).useCallback(e=>l((t=[])=>t.filter(t=>t!==e)),[l]);return /*@__PURE__*/k(R).createElement(ew,{scope:e.__scopeAccordion,value:a,onItemOpen:s,onItemClose:u},/*@__PURE__*/k(R).createElement(ek,{scope:e.__scopeAccordion,collapsible:!0},/*@__PURE__*/k(R).createElement(eR,M({},i,{ref:t}))))}),[eC,eP]=eg(ed),eR=/*@__PURE__*/k(R).forwardRef((e,t)=>{let{__scopeAccordion:n,disabled:r,dir:o,orientation:i="vertical",...a}=e,l=/*@__PURE__*/k(R).useRef(null),s=D(l,t),u=eh(n),c=/* -----------------------------------------------------------------------------------------------*/function(e){let t=(0,R.useContext)(ec);return e||t||"ltr"}(o),d="ltr"===c,f=U(e.onKeyDown,e=>{var t;if(!ef.includes(e.key))return;let n=e.target,r=u().filter(e=>{var t;return!(null!==(t=e.ref.current)&&void 0!==t&&t.disabled)}),o=r.findIndex(e=>e.ref.current===n),a=r.length;if(-1===o)return;// Prevents page scroll while user is navigating
e.preventDefault();let l=o,s=a-1,c=()=>{(l=o+1)>s&&(l=0)},f=()=>{(l=o-1)<0&&(l=s)};switch(e.key){case"Home":l=0;break;case"End":l=s;break;case"ArrowRight":"horizontal"===i&&(d?c():f());break;case"ArrowDown":"vertical"===i&&c();break;case"ArrowLeft":"horizontal"===i&&(d?f():c());break;case"ArrowUp":"vertical"===i&&f()}let p=l%a;null===(t=r[p].ref.current)||void 0===t||t.focus()});return /*@__PURE__*/k(R).createElement(eC,{scope:n,disabled:r,direction:o,orientation:i},/*@__PURE__*/k(R).createElement(ep.Slot,{scope:n},/*@__PURE__*/k(R).createElement(H.div,M({},a,{"data-orientation":i,ref:s,onKeyDown:r?void 0:f}))))}),eN="AccordionItem",[eO,eT]=eg(eN),ej=/*@__PURE__*/k(R).forwardRef((e,t)=>{let{__scopeAccordion:n,value:r,...o}=e,i=eP(eN,n),a=ex(eN,n),l=ey(n),s=Z(),u=r&&a.value.includes(r)||!1,c=i.disabled||e.disabled;return /*@__PURE__*/k(R).createElement(eO,{scope:n,open:u,disabled:c,triggerId:s},/*@__PURE__*/k(R).createElement(eo,M({"data-orientation":i.orientation,"data-state":eI(u)},l,o,{ref:t,disabled:c,open:u,onOpenChange:e=>{e?a.onItemOpen(r):a.onItemClose(r)}})))}),eM=/*@__PURE__*/k(R).forwardRef((e,t)=>{let{__scopeAccordion:n,...r}=e,o=eP(ed,n),i=eT("AccordionHeader",n);return /*@__PURE__*/k(R).createElement(H.h3,M({"data-orientation":o.orientation,"data-state":eI(i.open),"data-disabled":i.disabled?"":void 0},r,{ref:t}))}),eA="AccordionTrigger",ez=/*@__PURE__*/k(R).forwardRef((e,t)=>{let{__scopeAccordion:n,...r}=e,o=eP(ed,n),i=eT(eA,n),a=eS(eA,n),l=ey(n);return /*@__PURE__*/k(R).createElement(ep.ItemSlot,{scope:n},/*@__PURE__*/k(R).createElement(ei,M({"aria-disabled":i.open&&!a.collapsible||void 0,"data-orientation":o.orientation,id:i.triggerId},l,r,{ref:t})))}),eD=/*@__PURE__*/k(R).forwardRef((e,t)=>{let{__scopeAccordion:n,...r}=e,o=eP(ed,n),i=eT("AccordionContent",n),a=ey(n);return /*@__PURE__*/k(R).createElement(el,M({role:"region","aria-labelledby":i.triggerId,"data-orientation":o.orientation},a,r,{ref:t,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...e.style}}))});/* -----------------------------------------------------------------------------------------------*/function eI(e){return e?"open":"closed"}/**
 * lucide-react v0.288.0 - ISC
 */let eL=T("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);function eF(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=function e(t){var n,r,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t){if(Array.isArray(t))for(n=0;n<t.length;n++)t[n]&&(r=e(t[n]))&&(o&&(o+=" "),o+=r);else for(n in t)t[n]&&(o&&(o+=" "),o+=n)}return o}(e))&&(r&&(r+=" "),r+=t);return r}var e$=/^\[(.+)\]$/;function eV(e,t){var n=e;return t.split("-").forEach(function(e){n.nextPart.has(e)||n.nextPart.set(e,{nextPart:new Map,validators:[]}),n=n.nextPart.get(e)}),n}var eU=/\s+/;/**
 * The code in this file is copied from https://github.com/lukeed/clsx and modified to suit the needs of tailwind-merge better.
 *
 * Specifically:
 * - Runtime code from https://github.com/lukeed/clsx/blob/v1.2.1/src/index.js
 * - TypeScript types from https://github.com/lukeed/clsx/blob/v1.2.1/clsx.d.ts
 *
 * Original code has MIT license: Copyright (c) Luke Edwards <luke.edwards05@gmail.com> (lukeed.com)
 */function eW(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=function e(t){if("string"==typeof t)return t;for(var n,r="",o=0;o<t.length;o++)t[o]&&(n=e(t[o]))&&(r&&(r+=" "),r+=n);return r}(e))&&(r&&(r+=" "),r+=t);return r}function eB(e){var t=function(t){return t[e]||[]};return t.isThemeGetter=!0,t}var eH=/^\[(?:([a-z-]+):)?(.+)\]$/i,eY=/^\d+\/\d+$/,eq=/*#__PURE__*/new Set(["px","full","screen"]),eG=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,eQ=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,eK=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;function eX(e){return e3(e)||eq.has(e)||eY.test(e)||eZ(e)}function eZ(e){return te(e,"length",tt)}function eJ(e){return te(e,"size",tn)}function e0(e){return te(e,"position",tn)}function e1(e){return te(e,"url",tr)}function e2(e){return te(e,"number",e3)}function e3(e){return!Number.isNaN(Number(e))}function e4(e){return e.endsWith("%")&&e3(e.slice(0,-1))}function e5(e){return to(e)||te(e,"number",to)}function e8(e){return eH.test(e)}function e6(){return!0}function e9(e){return eG.test(e)}function e7(e){return te(e,"",ti)}function te(e,t,n){var r=eH.exec(e);return!!r&&(r[1]?r[1]===t:n(r[2]))}function tt(e){return eQ.test(e)}function tn(){return!1}function tr(e){return e.startsWith("url(")}function to(e){return Number.isInteger(Number(e))}function ti(e){return eK.test(e)}var ta=function(){for(var e,t,n,r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];var a=function(r){var i=o[0];return t=(e=function(e){var t,n,r,o,i,a,l,s,u,c,d;return{cache:// LRU cache inspired from hashlru (https://github.com/dominictarr/hashlru/blob/v1.0.4/index.js) but object replaced with Map to improve performance
function(e){if(e<1)return{get:function(){},set:function(){}};var t=0,n=new Map,r=new Map;function o(o,i){n.set(o,i),++t>e&&(t=0,r=n,n=new Map)}return{get:function(e){var t=n.get(e);return void 0!==t?t:void 0!==(t=r.get(e))?(o(e,t),t):void 0},set:function(e,t){n.has(e)?n.set(e,t):o(e,t)}}}(e.cacheSize),splitModifiers:(n=1===(t=e.separator||":").length,r=t[0],o=t.length,function(e){for(var i,a=[],l=0,s=0,u=0;u<e.length;u++){var c=e[u];if(0===l){if(c===r&&(n||e.slice(u,u+o)===t)){a.push(e.slice(s,u)),s=u+o;continue}if("/"===c){i=u;continue}}"["===c?l++:"]"===c&&l--}var d=0===a.length?e:e.substring(s),f=d.startsWith("!"),p=f?d.substring(1):d;return{modifiers:a,hasImportantModifier:f,baseClassName:p,maybePostfixModifierPosition:i&&i>s?i-s:void 0}}),...(s=e.theme,u=e.prefix,c={nextPart:new Map,validators:[]},(d=Object.entries(e.classGroups),u?d.map(function(e){return[e[0],e[1].map(function(e){return"string"==typeof e?u+e:"object"==typeof e?Object.fromEntries(Object.entries(e).map(function(e){return[u+e[0],e[1]]})):e})]}):d).forEach(function(e){var t=e[0];(function e(t,n,r,o){t.forEach(function(t){if("string"==typeof t){(""===t?n:eV(n,t)).classGroupId=r;return}if("function"==typeof t){if(t.isThemeGetter){e(t(o),n,r,o);return}n.validators.push({validator:t,classGroupId:r});return}Object.entries(t).forEach(function(t){var i=t[0];e(t[1],eV(n,i),r,o)})})})(e[1],c,t,s)}),i=e.conflictingClassGroups,l=void 0===(a=e.conflictingClassGroupModifiers)?{}:a,{getClassGroupId:function(e){var t=e.split("-");return""===t[0]&&1!==t.length&&t.shift(),function e(t,n){if(0===t.length)return n.classGroupId;var r=t[0],o=n.nextPart.get(r),i=o?e(t.slice(1),o):void 0;if(i)return i;if(0!==n.validators.length){var a=t.join("-");return n.validators.find(function(e){return(0,e.validator)(a)})?.classGroupId}}(t,c)||function(e){if(e$.test(e)){var t=e$.exec(e)[1],n=t?.substring(0,t.indexOf(":"));if(n)return"arbitrary.."+n}}(e)},getConflictingClassGroupIds:function(e,t){var n=i[e]||[];return t&&l[e]?[].concat(n,l[e]):n}})}}(o.slice(1).reduce(function(e,t){return t(e)},i()))).cache.get,n=e.cache.set,a=l,l(r)};function l(r){var o,i,a,l,s,u=t(r);if(u)return u;var c=(i=(o=e).splitModifiers,a=o.getClassGroupId,l=o.getConflictingClassGroupIds,s=new Set,r.trim().split(eU).map(function(e){var t=i(e),n=t.modifiers,r=t.hasImportantModifier,o=t.baseClassName,l=t.maybePostfixModifierPosition,s=a(l?o.substring(0,l):o),u=!!l;if(!s){if(!l||!(s=a(o)))return{isTailwindClass:!1,originalClassName:e};u=!1}var c=/**
 * Sorts modifiers according to following schema:
 * - Predefined modifiers are sorted alphabetically
 * - When an arbitrary variant appears, it must be preserved which modifiers are before and after it
 */(function(e){if(e.length<=1)return e;var t=[],n=[];return e.forEach(function(e){"["===e[0]?(t.push.apply(t,n.sort().concat([e])),n=[]):n.push(e)}),t.push.apply(t,n.sort()),t})(n).join(":");return{isTailwindClass:!0,modifierId:r?c+"!":c,classGroupId:s,originalClassName:e,hasPostfixModifier:u}}).reverse()// Last class in conflict wins, so we need to filter conflicting classes in reverse order.
.filter(function(e){if(!e.isTailwindClass)return!0;var t=e.modifierId,n=e.classGroupId,r=e.hasPostfixModifier,o=t+n;return!s.has(o)&&(s.add(o),l(n,r).forEach(function(e){return s.add(t+e)}),!0)}).reverse().map(function(e){return e.originalClassName}).join(" "));return n(r,c),c}return function(){return a(eW.apply(null,arguments))}}(function(){var e=eB("colors"),t=eB("spacing"),n=eB("blur"),r=eB("brightness"),o=eB("borderColor"),i=eB("borderRadius"),a=eB("borderSpacing"),l=eB("borderWidth"),s=eB("contrast"),u=eB("grayscale"),c=eB("hueRotate"),d=eB("invert"),f=eB("gap"),p=eB("gradientColorStops"),h=eB("gradientColorStopPositions"),m=eB("inset"),g=eB("margin"),v=eB("opacity"),y=eB("padding"),b=eB("saturate"),w=eB("scale"),x=eB("sepia"),k=eB("skew"),S=eB("space"),E=eB("translate"),_=function(){return["auto","contain","none"]},C=function(){return["auto","hidden","clip","visible","scroll"]},P=function(){return["auto",e8,t]},R=function(){return[e8,t]},N=function(){return["",eX]},O=function(){return["auto",e3,e8]},T=function(){return["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"]},j=function(){return["solid","dashed","dotted","double","none"]},M=function(){return["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"]},A=function(){return["start","end","center","between","around","evenly","stretch"]},z=function(){return["","0",e8]},D=function(){return["auto","avoid","all","avoid-page","page","left","right","column"]},I=function(){return[e3,e2]},L=function(){return[e3,e8]};return{cacheSize:500,theme:{colors:[e6],spacing:[eX],blur:["none","",e9,e8],brightness:I(),borderColor:[e],borderRadius:["none","","full",e9,e8],borderSpacing:R(),borderWidth:N(),contrast:I(),grayscale:z(),hueRotate:L(),invert:z(),gap:R(),gradientColorStops:[e],gradientColorStopPositions:[e4,eZ],inset:P(),margin:P(),opacity:I(),padding:R(),saturate:I(),scale:I(),sepia:z(),skew:L(),space:R(),translate:R()},classGroups:{// Layout
/**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */aspect:[{aspect:["auto","square","video",e8]}],/**
       * Container
       * @see https://tailwindcss.com/docs/container
       */container:["container"],/**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */columns:[{columns:[e9]}],/**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */"break-after":[{"break-after":D()}],/**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */"break-before":[{"break-before":D()}],/**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],/**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */"box-decoration":[{"box-decoration":["slice","clone"]}],/**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */box:[{box:["border","content"]}],/**
       * Display
       * @see https://tailwindcss.com/docs/display
       */display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],/**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */float:[{float:["right","left","none"]}],/**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */clear:[{clear:["left","right","both","none"]}],/**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */isolation:["isolate","isolation-auto"],/**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],/**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */"object-position":[{object:[].concat(T(),[e8])}],/**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */overflow:[{overflow:C()}],/**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */"overflow-x":[{"overflow-x":C()}],/**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */"overflow-y":[{"overflow-y":C()}],/**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */overscroll:[{overscroll:_()}],/**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */"overscroll-x":[{"overscroll-x":_()}],/**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */"overscroll-y":[{"overscroll-y":_()}],/**
       * Position
       * @see https://tailwindcss.com/docs/position
       */position:["static","fixed","absolute","relative","sticky"],/**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */inset:[{inset:[m]}],/**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */"inset-x":[{"inset-x":[m]}],/**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */"inset-y":[{"inset-y":[m]}],/**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */start:[{start:[m]}],/**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */end:[{end:[m]}],/**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */top:[{top:[m]}],/**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */right:[{right:[m]}],/**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */bottom:[{bottom:[m]}],/**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */left:[{left:[m]}],/**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */visibility:["visible","invisible","collapse"],/**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */z:[{z:["auto",e5]}],// Flexbox and Grid
/**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */basis:[{basis:P()}],/**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],/**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],/**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */flex:[{flex:["1","auto","initial","none",e8]}],/**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */grow:[{grow:z()}],/**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */shrink:[{shrink:z()}],/**
       * Order
       * @see https://tailwindcss.com/docs/order
       */order:[{order:["first","last","none",e5]}],/**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */"grid-cols":[{"grid-cols":[e6]}],/**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */"col-start-end":[{col:["auto",{span:["full",e5]},e8]}],/**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */"col-start":[{"col-start":O()}],/**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */"col-end":[{"col-end":O()}],/**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */"grid-rows":[{"grid-rows":[e6]}],/**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */"row-start-end":[{row:["auto",{span:[e5]},e8]}],/**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */"row-start":[{"row-start":O()}],/**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */"row-end":[{"row-end":O()}],/**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],/**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */"auto-cols":[{"auto-cols":["auto","min","max","fr",e8]}],/**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */"auto-rows":[{"auto-rows":["auto","min","max","fr",e8]}],/**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */gap:[{gap:[f]}],/**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */"gap-x":[{"gap-x":[f]}],/**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */"gap-y":[{"gap-y":[f]}],/**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */"justify-content":[{justify:["normal"].concat(A())}],/**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */"justify-items":[{"justify-items":["start","end","center","stretch"]}],/**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],/**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */"align-content":[{content:["normal"].concat(A(),["baseline"])}],/**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */"align-items":[{items:["start","end","center","baseline","stretch"]}],/**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],/**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */"place-content":[{"place-content":[].concat(A(),["baseline"])}],/**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],/**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */"place-self":[{"place-self":["auto","start","end","center","stretch"]}],// Spacing
/**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */p:[{p:[y]}],/**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */px:[{px:[y]}],/**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */py:[{py:[y]}],/**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */ps:[{ps:[y]}],/**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */pe:[{pe:[y]}],/**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */pt:[{pt:[y]}],/**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */pr:[{pr:[y]}],/**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */pb:[{pb:[y]}],/**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */pl:[{pl:[y]}],/**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */m:[{m:[g]}],/**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */mx:[{mx:[g]}],/**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */my:[{my:[g]}],/**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */ms:[{ms:[g]}],/**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */me:[{me:[g]}],/**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */mt:[{mt:[g]}],/**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */mr:[{mr:[g]}],/**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */mb:[{mb:[g]}],/**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */ml:[{ml:[g]}],/**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */"space-x":[{"space-x":[S]}],/**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */"space-x-reverse":["space-x-reverse"],/**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */"space-y":[{"space-y":[S]}],/**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */"space-y-reverse":["space-y-reverse"],// Sizing
/**
       * Width
       * @see https://tailwindcss.com/docs/width
       */w:[{w:["auto","min","max","fit",e8,t]}],/**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */"min-w":[{"min-w":["min","max","fit",e8,eX]}],/**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */"max-w":[{"max-w":["0","none","full","min","max","fit","prose",{screen:[e9]},e9,e8]}],/**
       * Height
       * @see https://tailwindcss.com/docs/height
       */h:[{h:[e8,t,"auto","min","max","fit"]}],/**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */"min-h":[{"min-h":["min","max","fit",e8,eX]}],/**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */"max-h":[{"max-h":[e8,t,"min","max","fit"]}],// Typography
/**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */"font-size":[{text:["base",e9,eZ]}],/**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */"font-smoothing":["antialiased","subpixel-antialiased"],/**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */"font-style":["italic","not-italic"],/**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",e2]}],/**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */"font-family":[{font:[e6]}],/**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */"fvn-normal":["normal-nums"],/**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */"fvn-ordinal":["ordinal"],/**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */"fvn-slashed-zero":["slashed-zero"],/**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */"fvn-figure":["lining-nums","oldstyle-nums"],/**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */"fvn-spacing":["proportional-nums","tabular-nums"],/**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */"fvn-fraction":["diagonal-fractions","stacked-fractons"],/**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",e8]}],/**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */"line-clamp":[{"line-clamp":["none",e3,e2]}],/**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */leading:[{leading:["none","tight","snug","normal","relaxed","loose",e8,eX]}],/**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */"list-image":[{"list-image":["none",e8]}],/**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */"list-style-type":[{list:["none","disc","decimal",e8]}],/**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */"list-style-position":[{list:["inside","outside"]}],/**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */"placeholder-color":[{placeholder:[e]}],/**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */"placeholder-opacity":[{"placeholder-opacity":[v]}],/**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */"text-alignment":[{text:["left","center","right","justify","start","end"]}],/**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */"text-color":[{text:[e]}],/**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */"text-opacity":[{"text-opacity":[v]}],/**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */"text-decoration":["underline","overline","line-through","no-underline"],/**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */"text-decoration-style":[{decoration:[].concat(j(),["wavy"])}],/**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */"text-decoration-thickness":[{decoration:["auto","from-font",eX]}],/**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */"underline-offset":[{"underline-offset":["auto",e8,eX]}],/**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */"text-decoration-color":[{decoration:[e]}],/**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */"text-transform":["uppercase","lowercase","capitalize","normal-case"],/**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */"text-overflow":["truncate","text-ellipsis","text-clip"],/**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */indent:[{indent:R()}],/**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",e8]}],/**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],/**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */break:[{break:["normal","words","all","keep"]}],/**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */hyphens:[{hyphens:["none","manual","auto"]}],/**
       * Content
       * @see https://tailwindcss.com/docs/content
       */content:[{content:["none",e8]}],// Backgrounds
/**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */"bg-attachment":[{bg:["fixed","local","scroll"]}],/**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */"bg-clip":[{"bg-clip":["border","padding","content","text"]}],/**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */"bg-opacity":[{"bg-opacity":[v]}],/**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */"bg-origin":[{"bg-origin":["border","padding","content"]}],/**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */"bg-position":[{bg:[].concat(T(),[e0])}],/**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],/**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */"bg-size":[{bg:["auto","cover","contain",eJ]}],/**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},e1]}],/**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */"bg-color":[{bg:[e]}],/**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */"gradient-from-pos":[{from:[h]}],/**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */"gradient-via-pos":[{via:[h]}],/**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */"gradient-to-pos":[{to:[h]}],/**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */"gradient-from":[{from:[p]}],/**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */"gradient-via":[{via:[p]}],/**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */"gradient-to":[{to:[p]}],// Borders
/**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */rounded:[{rounded:[i]}],/**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */"rounded-s":[{"rounded-s":[i]}],/**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */"rounded-e":[{"rounded-e":[i]}],/**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */"rounded-t":[{"rounded-t":[i]}],/**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */"rounded-r":[{"rounded-r":[i]}],/**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */"rounded-b":[{"rounded-b":[i]}],/**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */"rounded-l":[{"rounded-l":[i]}],/**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */"rounded-ss":[{"rounded-ss":[i]}],/**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */"rounded-se":[{"rounded-se":[i]}],/**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */"rounded-ee":[{"rounded-ee":[i]}],/**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */"rounded-es":[{"rounded-es":[i]}],/**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */"rounded-tl":[{"rounded-tl":[i]}],/**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */"rounded-tr":[{"rounded-tr":[i]}],/**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */"rounded-br":[{"rounded-br":[i]}],/**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */"rounded-bl":[{"rounded-bl":[i]}],/**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */"border-w":[{border:[l]}],/**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */"border-w-x":[{"border-x":[l]}],/**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */"border-w-y":[{"border-y":[l]}],/**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */"border-w-s":[{"border-s":[l]}],/**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */"border-w-e":[{"border-e":[l]}],/**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */"border-w-t":[{"border-t":[l]}],/**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */"border-w-r":[{"border-r":[l]}],/**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */"border-w-b":[{"border-b":[l]}],/**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */"border-w-l":[{"border-l":[l]}],/**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */"border-opacity":[{"border-opacity":[v]}],/**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */"border-style":[{border:[].concat(j(),["hidden"])}],/**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */"divide-x":[{"divide-x":[l]}],/**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */"divide-x-reverse":["divide-x-reverse"],/**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */"divide-y":[{"divide-y":[l]}],/**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */"divide-y-reverse":["divide-y-reverse"],/**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */"divide-opacity":[{"divide-opacity":[v]}],/**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */"divide-style":[{divide:j()}],/**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */"border-color":[{border:[o]}],/**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */"border-color-x":[{"border-x":[o]}],/**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */"border-color-y":[{"border-y":[o]}],/**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */"border-color-t":[{"border-t":[o]}],/**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */"border-color-r":[{"border-r":[o]}],/**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */"border-color-b":[{"border-b":[o]}],/**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */"border-color-l":[{"border-l":[o]}],/**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */"divide-color":[{divide:[o]}],/**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */"outline-style":[{outline:[""].concat(j())}],/**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */"outline-offset":[{"outline-offset":[e8,eX]}],/**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */"outline-w":[{outline:[eX]}],/**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */"outline-color":[{outline:[e]}],/**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */"ring-w":[{ring:N()}],/**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */"ring-w-inset":["ring-inset"],/**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */"ring-color":[{ring:[e]}],/**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */"ring-opacity":[{"ring-opacity":[v]}],/**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */"ring-offset-w":[{"ring-offset":[eX]}],/**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */"ring-offset-color":[{"ring-offset":[e]}],// Effects
/**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */shadow:[{shadow:["","inner","none",e9,e7]}],/**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */"shadow-color":[{shadow:[e6]}],/**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */opacity:[{opacity:[v]}],/**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */"mix-blend":[{"mix-blend":M()}],/**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */"bg-blend":[{"bg-blend":M()}],// Filters
/**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */filter:[{filter:["","none"]}],/**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */blur:[{blur:[n]}],/**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */brightness:[{brightness:[r]}],/**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */contrast:[{contrast:[s]}],/**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */"drop-shadow":[{"drop-shadow":["","none",e9,e8]}],/**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */grayscale:[{grayscale:[u]}],/**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */"hue-rotate":[{"hue-rotate":[c]}],/**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */invert:[{invert:[d]}],/**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */saturate:[{saturate:[b]}],/**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */sepia:[{sepia:[x]}],/**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */"backdrop-filter":[{"backdrop-filter":["","none"]}],/**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */"backdrop-blur":[{"backdrop-blur":[n]}],/**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */"backdrop-brightness":[{"backdrop-brightness":[r]}],/**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */"backdrop-contrast":[{"backdrop-contrast":[s]}],/**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */"backdrop-grayscale":[{"backdrop-grayscale":[u]}],/**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */"backdrop-hue-rotate":[{"backdrop-hue-rotate":[c]}],/**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */"backdrop-invert":[{"backdrop-invert":[d]}],/**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */"backdrop-opacity":[{"backdrop-opacity":[v]}],/**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */"backdrop-saturate":[{"backdrop-saturate":[b]}],/**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */"backdrop-sepia":[{"backdrop-sepia":[x]}],// Tables
/**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */"border-collapse":[{border:["collapse","separate"]}],/**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */"border-spacing":[{"border-spacing":[a]}],/**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */"border-spacing-x":[{"border-spacing-x":[a]}],/**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */"border-spacing-y":[{"border-spacing-y":[a]}],/**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */"table-layout":[{table:["auto","fixed"]}],/**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */caption:[{caption:["top","bottom"]}],// Transitions and Animation
/**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */transition:[{transition:["none","all","","colors","opacity","shadow","transform",e8]}],/**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */duration:[{duration:L()}],/**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */ease:[{ease:["linear","in","out","in-out",e8]}],/**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */delay:[{delay:L()}],/**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */animate:[{animate:["none","spin","ping","pulse","bounce",e8]}],// Transforms
/**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */transform:[{transform:["","gpu","none"]}],/**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */scale:[{scale:[w]}],/**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */"scale-x":[{"scale-x":[w]}],/**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */"scale-y":[{"scale-y":[w]}],/**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */rotate:[{rotate:[e5,e8]}],/**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */"translate-x":[{"translate-x":[E]}],/**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */"translate-y":[{"translate-y":[E]}],/**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */"skew-x":[{"skew-x":[k]}],/**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */"skew-y":[{"skew-y":[k]}],/**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",e8]}],// Interactivity
/**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */accent:[{accent:["auto",e]}],/**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */appearance:["appearance-none"],/**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",e8]}],/**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */"caret-color":[{caret:[e]}],/**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */"pointer-events":[{"pointer-events":["none","auto"]}],/**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */resize:[{resize:["none","y","x",""]}],/**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */"scroll-behavior":[{scroll:["auto","smooth"]}],/**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */"scroll-m":[{"scroll-m":R()}],/**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */"scroll-mx":[{"scroll-mx":R()}],/**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */"scroll-my":[{"scroll-my":R()}],/**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */"scroll-ms":[{"scroll-ms":R()}],/**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */"scroll-me":[{"scroll-me":R()}],/**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */"scroll-mt":[{"scroll-mt":R()}],/**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */"scroll-mr":[{"scroll-mr":R()}],/**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */"scroll-mb":[{"scroll-mb":R()}],/**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */"scroll-ml":[{"scroll-ml":R()}],/**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */"scroll-p":[{"scroll-p":R()}],/**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */"scroll-px":[{"scroll-px":R()}],/**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */"scroll-py":[{"scroll-py":R()}],/**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */"scroll-ps":[{"scroll-ps":R()}],/**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */"scroll-pe":[{"scroll-pe":R()}],/**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */"scroll-pt":[{"scroll-pt":R()}],/**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */"scroll-pr":[{"scroll-pr":R()}],/**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */"scroll-pb":[{"scroll-pb":R()}],/**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */"scroll-pl":[{"scroll-pl":R()}],/**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */"snap-align":[{snap:["start","end","center","align-none"]}],/**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */"snap-stop":[{snap:["normal","always"]}],/**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */"snap-type":[{snap:["none","x","y","both"]}],/**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */"snap-strictness":[{snap:["mandatory","proximity"]}],/**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */touch:[{touch:["auto","none","pinch-zoom","manipulation",{pan:["x","left","right","y","up","down"]}]}],/**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */select:[{select:["none","text","all","auto"]}],/**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */"will-change":[{"will-change":["auto","scroll","contents","transform",e8]}],// SVG
/**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */fill:[{fill:[e,"none"]}],/**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */"stroke-w":[{stroke:[eX,e2]}],/**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */stroke:[{stroke:[e,"none"]}],// Accessibility
/**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */sr:["sr-only","not-sr-only"]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}});function tl(...e){return ta(eF(e))}let ts=e=>{let t=e.length,n;// While there remain elements to shuffle.
for(;t>0;)// Pick a remaining element.
n=Math.floor(Math.random()*t),t--,// And swap it with the current element.
[e[t],e[n]]=[e[n],e[t]];return e},tu=(e,t)=>{let n=[];for(let r=0;r<t.length;r+=e){let o=t.slice(r,r+e);n.push(o)}return n},tc=(e,t)=>[...e].filter(e=>!t.includes(e)),td=(e,t)=>{// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
let n=tc(e,t);return 0===n.length&&e.length===t.length},tf=/*#__PURE__*/R.forwardRef(({className:e,...t},n)=>/*#__PURE__*/(0,C.jsx)(ej,{ref:n,className:tl("border-b",e),...t}));tf.displayName="AccordionItem";let tp=/*#__PURE__*/R.forwardRef(({className:e,children:t,...n},r)=>/*#__PURE__*/(0,C.jsx)(eM,{className:"flex",children:/*#__PURE__*/(0,C.jsxs)(ez,{ref:r,className:tl("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",e),...n,children:[t,/*#__PURE__*/(0,C.jsx)(eL,{className:"h-4 w-4 shrink-0 transition-transform duration-200"})]})}));tp.displayName=ez.displayName;let th=/*#__PURE__*/R.forwardRef(({className:e,children:t,...n},r)=>/*#__PURE__*/(0,C.jsx)(eD,{ref:r,className:tl("overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",e),...n,children:/*#__PURE__*/(0,C.jsx)("div",{className:"pb-4 pt-0",children:t})}));th.displayName=eD.displayName;var R=(_("exYeM"),_("exYeM"),_("exYeM"),_("exYeM"),_("exYeM"),_("exYeM"));let tm="dismissableLayer.update",tg=/*#__PURE__*/(0,R.createContext)({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),tv=/*#__PURE__*/(0,R.forwardRef)((t,n)=>{var r;let{disableOutsidePointerEvents:o=!1,onEscapeKeyDown:i,onPointerDownOutside:a,onFocusOutside:l,onInteractOutside:s,onDismiss:u,...c}=t,d=(0,R.useContext)(tg),[f,p]=(0,R.useState)(null),h=null!==(r=null==f?void 0:f.ownerDocument)&&void 0!==r?r:null==globalThis?void 0:globalThis.document,[,m]=(0,R.useState)({}),g=D(n,e=>p(e)),v=Array.from(d.layers),[y]=[...d.layersWithOutsidePointerEventsDisabled].slice(-1),b=v.indexOf(y),w=f?v.indexOf(f):-1,x=d.layersWithOutsidePointerEventsDisabled.size>0,k=w>=b,S=/* -----------------------------------------------------------------------------------------------*//**
 * Listens for `pointerdown` outside a react subtree. We use `pointerdown` rather than `pointerup`
 * to mimic layer dismissing behaviour present in OS.
 * Returns props to pass to the node we want to check for outside events.
 */function(e,t=null==globalThis?void 0:globalThis.document){let n=W(e),r=(0,R.useRef)(!1),o=(0,R.useRef)(()=>{});return(0,R.useEffect)(()=>{let e=e=>{if(e.target&&!r.current){let r={originalEvent:e};function i(){tw("dismissableLayer.pointerDownOutside",n,r,{discrete:!0})}/**
         * On touch devices, we need to wait for a click event because browsers implement
         * a ~350ms delay between the time the user stops touching the display and when the
         * browser executres events. We need to ensure we don't reactivate pointer-events within
         * this timeframe otherwise the browser may execute events that should have been prevented.
         *
         * Additionally, this also lets us deal automatically with cancellations when a click event
         * isn't raised because the page was considered scrolled/drag-scrolled, long-pressed, etc.
         *
         * This is why we also continuously remove the previous listener, because we cannot be
         * certain that it was raised, and therefore cleaned-up.
         */"touch"===e.pointerType?(t.removeEventListener("click",o.current),o.current=i,t.addEventListener("click",o.current,{once:!0})):i()}else t.removeEventListener("click",o.current);r.current=!1},i=window.setTimeout(()=>{t.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(i),t.removeEventListener("pointerdown",e),t.removeEventListener("click",o.current)}},[t,n]),{// ensures we check React component tree (not just DOM tree)
onPointerDownCapture:()=>r.current=!0}}(e=>{let t=e.target,n=[...d.branches].some(e=>e.contains(t));!k||n||(null==a||a(e),null==s||s(e),e.defaultPrevented||null==u||u())},h),E=/**
 * Listens for when focus happens outside a react subtree.
 * Returns props to pass to the root (node) of the subtree we want to check.
 */function(e,t=null==globalThis?void 0:globalThis.document){let n=W(e),r=(0,R.useRef)(!1);return(0,R.useEffect)(()=>{let e=e=>{e.target&&!r.current&&tw("dismissableLayer.focusOutside",n,{originalEvent:e},{discrete:!1})};return t.addEventListener("focusin",e),()=>t.removeEventListener("focusin",e)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}(e=>{let t=e.target,n=[...d.branches].some(e=>e.contains(t));n||(null==l||l(e),null==s||s(e),e.defaultPrevented||null==u||u())},h);return!/**
 * Listens for when the escape key is down
 */function(e,t=null==globalThis?void 0:globalThis.document){let n=W(e);(0,R.useEffect)(()=>{let e=e=>{"Escape"===e.key&&n(e)};return t.addEventListener("keydown",e),()=>t.removeEventListener("keydown",e)},[n,t])}(e=>{let t=w===d.layers.size-1;t&&(null==i||i(e),!e.defaultPrevented&&u&&(e.preventDefault(),u()))},h),(0,R.useEffect)(()=>{if(f)return o&&(0===d.layersWithOutsidePointerEventsDisabled.size&&(e=h.body.style.pointerEvents,h.body.style.pointerEvents="none"),d.layersWithOutsidePointerEventsDisabled.add(f)),d.layers.add(f),tb(),()=>{o&&1===d.layersWithOutsidePointerEventsDisabled.size&&(h.body.style.pointerEvents=e)}},[f,h,o,d]),/**
   * We purposefully prevent combining this effect with the `disableOutsidePointerEvents` effect
   * because a change to `disableOutsidePointerEvents` would remove this layer from the stack
   * and add it to the end again so the layering order wouldn't be _creation order_.
   * We only want them to be removed from context stacks when unmounted.
   */(0,R.useEffect)(()=>()=>{f&&(d.layers.delete(f),d.layersWithOutsidePointerEventsDisabled.delete(f),tb())},[f,d]),(0,R.useEffect)(()=>{let e=()=>m({});return document.addEventListener(tm,e),()=>document.removeEventListener(tm,e)},[]),/*#__PURE__*/(0,R.createElement)(H.div,M({},c,{ref:g,style:{pointerEvents:x?k?"auto":"none":void 0,...t.style},onFocusCapture:U(t.onFocusCapture,E.onFocusCapture),onBlurCapture:U(t.onBlurCapture,E.onBlurCapture),onPointerDownCapture:U(t.onPointerDownCapture,S.onPointerDownCapture)}))}),ty=/*#__PURE__*/(0,R.forwardRef)((e,t)=>{let n=(0,R.useContext)(tg),r=(0,R.useRef)(null),o=D(t,r);return(0,R.useEffect)(()=>{let e=r.current;if(e)return n.branches.add(e),()=>{n.branches.delete(e)}},[n.branches]),/*#__PURE__*/(0,R.createElement)(H.div,M({},e,{ref:o}))});function tb(){let e=new CustomEvent(tm);document.dispatchEvent(e)}function tw(e,t,n,{discrete:r}){let o=n.originalEvent.target,i=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),r?Y(o,i):o.dispatchEvent(i)}var R=_("exYeM");let tx="focusScope.autoFocusOnMount",tk="focusScope.autoFocusOnUnmount",tS={bubbles:!1,cancelable:!0},tE=/*#__PURE__*/(0,R.forwardRef)((e,t)=>{let{loop:n=!1,trapped:r=!1,onMountAutoFocus:o,onUnmountAutoFocus:i,...a}=e,[l,s]=(0,R.useState)(null),u=W(o),c=W(i),d=(0,R.useRef)(null),f=D(t,e=>s(e)),p=(0,R.useRef)({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;(0,R.useEffect)(()=>{if(r){function e(e){if(p.paused||!l)return;let t=e.target;l.contains(t)?d.current=t:tP(d.current,{select:!0})}function t(e){if(p.paused||!l)return;let t=e.relatedTarget;// A `focusout` event with a `null` `relatedTarget` will happen in at least two cases:
//
// 1. When the user switches app/tabs/windows/the browser itself loses focus.
// 2. In Google Chrome, when the focused element is removed from the DOM.
//
// We let the browser do its thing here because:
//
// 1. The browser already keeps a memory of what's focused for when the page gets refocused.
// 2. In Google Chrome, if we try to focus the deleted focused element (as per below), it
//    throws the CPU to 100%, so we avoid doing anything for this reason here too.
null===t||l.contains(t)||tP(d.current,{select:!0});// If the focus has moved to an actual legitimate element (`relatedTarget !== null`)
}// When the focused element gets removed from the DOM, browsers move focus
document.addEventListener("focusin",e),document.addEventListener("focusout",t);let n=new MutationObserver(// back to the document.body. In this case, we move focus to the container
// to keep focus trapped correctly.
function(e){let t=document.activeElement;if(t===document.body)for(let t of e)t.removedNodes.length>0&&tP(l)});return l&&n.observe(l,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t),n.disconnect()}}},[r,l,p.paused]),(0,R.useEffect)(()=>{if(l){tR.add(p);let e=document.activeElement,t=l.contains(e);if(!t){let t=new CustomEvent(tx,tS);l.addEventListener(tx,u),l.dispatchEvent(t),t.defaultPrevented||(/* -------------------------------------------------------------------------------------------------
 * Utils
 * -----------------------------------------------------------------------------------------------*//**
 * Attempts focusing the first element in a list of candidates.
 * Stops when focus has actually moved.
 */function(e,{select:t=!1}={}){let n=document.activeElement;for(let r of e)if(tP(r,{select:t}),document.activeElement!==n)return}(t_(l).filter(e=>"A"!==e.tagName),{select:!0}),document.activeElement===e&&tP(l))}return()=>{l.removeEventListener(tx,u),// We need to delay the focus a little to get around it for now.
// See: https://github.com/facebook/react/issues/17894
setTimeout(()=>{let t=new CustomEvent(tk,tS);l.addEventListener(tk,c),l.dispatchEvent(t),t.defaultPrevented||tP(null!=e?e:document.body,{select:!0}),// we need to remove the listener after we `dispatchEvent`
l.removeEventListener(tk,c),tR.remove(p)},0)}}},[l,u,c,p]);let h=(0,R.useCallback)(e=>{if(!n&&!r||p.paused)return;let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,o=document.activeElement;if(t&&o){let t=e.currentTarget,[r,i]=/**
 * Returns the first and last tabbable elements inside a container.
 */function(e){let t=t_(e),n=tC(t,e),r=tC(t.reverse(),e);return[n,r]}(t),a=r&&i;a?e.shiftKey||o!==i?e.shiftKey&&o===r&&(e.preventDefault(),n&&tP(i,{select:!0})):(e.preventDefault(),n&&tP(r,{select:!0})):o===t&&e.preventDefault()}},[n,r,p.paused]);return/*#__PURE__*/(0,R.createElement)(H.div,M({tabIndex:-1},a,{ref:f,onKeyDown:h}))});/**
 * Returns a list of potential tabbable candidates.
 *
 * NOTE: This is only a close approximation. For example it doesn't take into account cases like when
 * elements are not visible. This cannot be worked out easily by just reading a property, but rather
 * necessitate runtime knowledge (computed styles, etc). We deal with these cases separately.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker
 * Credit: https://github.com/discord/focus-layers/blob/master/src/util/wrapFocus.tsx#L1
 */function t_(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP// `.tabIndex` is not the same as the `tabindex` attribute. It works on the
}});for(;n.nextNode();)t.push(n.currentNode);// we do not take into account the order of nodes with positive `tabIndex` as it
// hinders accessibility to have tab order different from visual order.
return t}/**
 * Returns the first visible element in a list.
 * NOTE: Only checks visibility up to the `container`.
 */function tC(e,t){for(let n of e)// we stop checking if it's hidden at the `container` level (excluding)
if(!function(e,{upTo:t}){if("hidden"===getComputedStyle(e).visibility)return!0;for(;// we stop at `upTo` (excluding it)
e&&(void 0===t||e!==t);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(n,{upTo:t}))return n}function tP(e,{select:t=!1}={}){// only focus if that element is focusable
if(e&&e.focus){var n;let r=document.activeElement;// NOTE: we prevent scrolling on focus, to minimize jarring transitions for users
e.focus({preventScroll:!0}),e!==r&&(n=e)instanceof HTMLInputElement&&"select"in n&&t&&e.select()}}/* -------------------------------------------------------------------------------------------------
 * FocusScope stack
 * -----------------------------------------------------------------------------------------------*/let tR=(t=[],{add(e){// pause the currently active focus scope (at the top of the stack)
let n=t[0];e!==n&&(null==n||n.pause()),// remove in case it already exists (because we'll re-add it at the top of the stack)
(t=tN(t,e)).unshift(e)},remove(e){var n;null===(n=(t=tN(t,e))[0])||void 0===n||n.resume()}});function tN(e,t){let n=[...e],r=n.indexOf(t);return -1!==r&&n.splice(r,1),n}var R=_("exYeM");let tO=/*#__PURE__*/(0,R.forwardRef)((e,t)=>{var n;let{container:r=null==globalThis?void 0:null===(n=globalThis.document)||void 0===n?void 0:n.body,...o}=e;return r?/*@__PURE__*/k(P).createPortal(/*#__PURE__*/(0,R.createElement)(H.div,M({},o,{ref:t})),r):null});var R=_("exYeM");/** Number of components which have requested interest to have focus guards */let tT=0;/**
 * Injects a pair of focus guards at the edges of the whole DOM tree
 * to ensure `focusin` & `focusout` events can be caught consistently.
 */function tj(){(0,R.useEffect)(()=>{var e,t;let n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",null!==(e=n[0])&&void 0!==e?e:tM()),document.body.insertAdjacentElement("beforeend",null!==(t=n[1])&&void 0!==t?t:tM()),tT++,()=>{1===tT&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),tT--}},[])}function tM(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** *//* global Reflect, Promise, SuppressedError, Symbol */var tA=function(){return(tA=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function tz(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}"function"==typeof SuppressedError&&SuppressedError;var R=(_("exYeM"),_("exYeM")),tD="right-scroll-bar-position",tI="width-before-scroll-bar",R=_("exYeM"),tL=(void 0===l&&(l={}),(void 0===s&&(s=function(e){return e}),u=[],c=!1,d={read:function(){if(c)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return u.length?u[u.length-1]:null},useMedium:function(e){var t=s(e,c);return u.push(t),function(){u=u.filter(function(e){return e!==t})}},assignSyncMedium:function(e){for(c=!0;u.length;){var t=u;u=[],t.forEach(e)}u={push:function(t){return e(t)},filter:function(){return u}}},assignMedium:function(e){c=!0;var t=[];if(u.length){var n=u;u=[],n.forEach(e),t=u}var r=function(){var n=t;t=[],n.forEach(e)},o=function(){return Promise.resolve().then(r)};o(),u={push:function(e){t.push(e),o()},filter:function(e){return t=t.filter(e),u}}}}).options=tA({async:!0,ssr:!1},l),d),tF=function(){},t$=R.forwardRef(function(e,t){var n,r,o,i=R.useRef(null),a=R.useState({onScrollCapture:tF,onWheelCapture:tF,onTouchMoveCapture:tF}),l=a[0],s=a[1],u=e.forwardProps,c=e.children,d=e.className,f=e.removeScrollBar,p=e.enabled,h=e.shards,m=e.sideCar,g=e.noIsolation,v=e.inert,y=e.allowPinchZoom,b=e.as,w=void 0===b?"div":b,x=tz(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as"]),k=(n=[i,t],r=function(e){return n.forEach(function(t){return"function"==typeof t?t(e):t&&(t.current=e),t})},// update callback
(o=(0,R.useState)(function(){return{// value
value:null,// last callback
callback:r,// "memoized" public interface
facade:{get current(){return o.value},set current(value){var e=o.value;e!==value&&(o.value=value,o.callback(value,e))}}}})[0]).callback=r,o.facade),S=tA(tA({},x),l);return R.createElement(R.Fragment,null,p&&R.createElement(m,{sideCar:tL,removeScrollBar:f,shards:h,noIsolation:g,inert:v,setCallbacks:s,allowPinchZoom:!!y,lockRef:i}),u?R.cloneElement(R.Children.only(c),tA(tA({},S),{ref:k})):R.createElement(w,tA({},S,{className:d,ref:k}),c))});t$.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},t$.classNames={fullWidth:tI,zeroRight:tD};var R=_("exYeM"),tV=function(e){var t=e.sideCar,n=tz(e,["sideCar"]);if(!t)throw Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw Error("Sidecar medium not found");return R.createElement(r,tA({},n))};tV.isSideCarExport=!0;var R=(_("exYeM"),_("exYeM"),_("exYeM")),tU=function(){var e=0,t=null;return{add:function(n){if(0==e&&(t=function(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=m||("undefined"!=typeof __webpack_nonce__?__webpack_nonce__:void 0);return t&&e.setAttribute("nonce",t),e}())){var r,o;(r=t).styleSheet?r.styleSheet.cssText=n:r.appendChild(document.createTextNode(n)),o=t,(document.head||document.getElementsByTagName("head")[0]).appendChild(o)}e++},remove:function(){--e||!t||(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},tW=function(){var e=tU();return function(t,n){R.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},tB=function(){var e=tW();return function(t){return e(t.styles,t.dynamic),null}},tH={left:0,top:0,right:0,gap:0},tY=function(e){return parseInt(e||"",10)||0},tq=function(e){var t=window.getComputedStyle(document.body),n=t["padding"===e?"paddingLeft":"marginLeft"],r=t["padding"===e?"paddingTop":"marginTop"],o=t["padding"===e?"paddingRight":"marginRight"];return[tY(n),tY(r),tY(o)]},tG=function(e){if(void 0===e&&(e="margin"),"undefined"==typeof window)return tH;var t=tq(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},tQ=tB(),tK=function(e,t,n,r){var o=e.left,i=e.top,a=e.right,l=e.gap;return void 0===n&&(n="margin"),"\n  .".concat("with-scroll-bars-hidden"," {\n   overflow: hidden ").concat(r,";\n   padding-right: ").concat(l,"px ").concat(r,";\n  }\n  body {\n    overflow: hidden ").concat(r,";\n    overscroll-behavior: contain;\n    ").concat([t&&"position: relative ".concat(r,";"),"margin"===n&&"\n    padding-left: ".concat(o,"px;\n    padding-top: ").concat(i,"px;\n    padding-right: ").concat(a,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(l,"px ").concat(r,";\n    "),"padding"===n&&"padding-right: ".concat(l,"px ").concat(r,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(tD," {\n    right: ").concat(l,"px ").concat(r,";\n  }\n  \n  .").concat(tI," {\n    margin-right: ").concat(l,"px ").concat(r,";\n  }\n  \n  .").concat(tD," .").concat(tD," {\n    right: 0 ").concat(r,";\n  }\n  \n  .").concat(tI," .").concat(tI," {\n    margin-right: 0 ").concat(r,";\n  }\n  \n  body {\n    ").concat("--removed-body-scroll-bar-size",": ").concat(l,"px;\n  }\n")},tX=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=void 0===r?"margin":r,i=R.useMemo(function(){return tG(o)},[o]);return R.createElement(tQ,{styles:tK(i,!t,o,n?"":"!important")})},tZ=!1;if("undefined"!=typeof window)try{var tJ=Object.defineProperty({},"passive",{get:function(){return tZ=!0,!0}});// @ts-ignore
window.addEventListener("test",tJ,tJ),// @ts-ignore
window.removeEventListener("test",tJ,tJ)}catch(e){tZ=!1}var t0=!!tZ&&{passive:!1},t1=function(e,t){var n=window.getComputedStyle(e);return"hidden"!==n[t]&&// contains scroll inside self
!(n.overflowY===n.overflowX&&"TEXTAREA"!==e.tagName&&"visible"===n[t])},t2=function(e,t){var n=t;do{if("undefined"!=typeof ShadowRoot&&n instanceof ShadowRoot&&(n=n.host),t3(e,n)){var r=t4(e,n);if(r[1]>r[2])return!0}n=n.parentNode}while(n&&n!==document.body)return!1},t3=function(e,t){return"v"===e?t1(t,"overflowY"):t1(t,"overflowX")},t4=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},t5=function(e,t,n,r,o){var i,a=(i=window.getComputedStyle(t).direction,"h"===e&&"rtl"===i?-1:1),l=a*r,s=n.target,u=t.contains(s),c=!1,d=l>0,f=0,p=0;do{var h=t4(e,s),m=h[0],g=h[1]-h[2]-a*m;(m||g)&&t3(e,s)&&(f+=g,p+=m),s=s.parentNode}while(!u&&s!==document.body||// self content
u&&(t.contains(s)||t===s))return d&&(o&&0===f||!o&&l>f)?c=!0:!d&&(o&&0===p||!o&&-l>p)&&(c=!0),c},t8=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},t6=function(e){return[e.deltaX,e.deltaY]},t9=function(e){return e&&"current"in e?e.current:e},t7=0,ne=[],nt=(tL.useMedium(function(e){var t=R.useRef([]),n=R.useRef([0,0]),r=R.useRef(),o=R.useState(t7++)[0],i=R.useState(function(){return tB()})[0],a=R.useRef(e);R.useEffect(function(){a.current=e},[e]),R.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var t=(function(e,t,n){if(n||2==arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))})([e.lockRef.current],(e.shards||[]).map(t9),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var l=R.useCallback(function(e,t){if("touches"in e&&2===e.touches.length)return!a.current.allowPinchZoom;var o,i=t8(e),l=n.current,s="deltaX"in e?e.deltaX:l[0]-i[0],u="deltaY"in e?e.deltaY:l[1]-i[1],c=e.target,d=Math.abs(s)>Math.abs(u)?"h":"v";// allow horizontal touch move on Range inputs. They will not cause any scroll
if("touches"in e&&"h"===d&&"range"===c.type)return!1;var f=t2(d,c);if(!f)return!0;if(f?o=d:(o="v"===d?"h":"v",f=t2(d,c)),!f)return!1;if(!r.current&&"changedTouches"in e&&(s||u)&&(r.current=o),!o)return!0;var p=r.current||o;return t5(p,t,e,"h"===p?s:u,!0)},[]),s=R.useCallback(function(e){if(ne.length&&ne[ne.length-1]===i){var n="deltaY"in e?t6(e):t8(e),r=t.current.filter(function(t){var r;return t.name===e.type&&t.target===e.target&&(r=t.delta)[0]===n[0]&&r[1]===n[1]})[0];// self event, and should be canceled
if(r&&r.should){e.cancelable&&e.preventDefault();return}// outside or shard event
if(!r){var o=(a.current.shards||[]).map(t9).filter(Boolean).filter(function(t){return t.contains(e.target)});(o.length>0?l(e,o[0]):!a.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),u=R.useCallback(function(e,n,r,o){var i={name:e,delta:n,target:r,should:o};t.current.push(i),setTimeout(function(){t.current=t.current.filter(function(e){return e!==i})},1)},[]),c=R.useCallback(function(e){n.current=t8(e),r.current=void 0},[]),d=R.useCallback(function(t){u(t.type,t6(t),t.target,l(t,e.lockRef.current))},[]),f=R.useCallback(function(t){u(t.type,t8(t),t.target,l(t,e.lockRef.current))},[]);R.useEffect(function(){return ne.push(i),e.setCallbacks({onScrollCapture:d,onWheelCapture:d,onTouchMoveCapture:f}),document.addEventListener("wheel",s,t0),document.addEventListener("touchmove",s,t0),document.addEventListener("touchstart",c,t0),function(){ne=ne.filter(function(e){return e!==i}),document.removeEventListener("wheel",s,t0),document.removeEventListener("touchmove",s,t0),document.removeEventListener("touchstart",c,t0)}},[]);var p=e.removeScrollBar,h=e.inert;return R.createElement(R.Fragment,null,h?R.createElement(i,{styles:"\n  .block-interactivity-".concat(o," {pointer-events: none;}\n  .allow-interactivity-").concat(o," {pointer-events: all;}\n")}):null,p?R.createElement(tX,{gapMode:"margin"}):null)}),tV),nn=R.forwardRef(function(e,t){return R.createElement(t$,tA({},e,{ref:t,sideCar:nt}))});nn.classNames=t$.classNames;var nr=new WeakMap,no=new WeakMap,ni={},na=0,nl=function(e){return e&&(e.host||nl(e.parentNode))},ns=function(e,t,n,r){var o=(Array.isArray(e)?e:[e]).map(function(e){if(t.contains(e))return e;var n=nl(e);return n&&t.contains(n)?n:(console.error("aria-hidden",e,"in not contained inside",t,". Doing nothing"),null)}).filter(function(e){return!!e});ni[n]||(ni[n]=new WeakMap);var i=ni[n],a=[],l=new Set,s=new Set(o),u=function(e){!e||l.has(e)||(l.add(e),u(e.parentNode))};o.forEach(u);var c=function(e){!e||s.has(e)||Array.prototype.forEach.call(e.children,function(e){if(l.has(e))c(e);else{var t=e.getAttribute(r),o=null!==t&&"false"!==t,s=(nr.get(e)||0)+1,u=(i.get(e)||0)+1;nr.set(e,s),i.set(e,u),a.push(e),1===s&&o&&no.set(e,!0),1===u&&e.setAttribute(n,"true"),o||e.setAttribute(r,"true")}})};return c(t),l.clear(),na++,function(){a.forEach(function(e){var t=nr.get(e)-1,o=i.get(e)-1;nr.set(e,t),i.set(e,o),t||(no.has(e)||e.removeAttribute(r),no.delete(e)),o||e.removeAttribute(n)}),--na||(// clear
nr=new WeakMap,nr=new WeakMap,no=new WeakMap,ni={})}},nu=function(e,t,n){void 0===n&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),o=t||("undefined"==typeof document?null:(Array.isArray(e)?e[0]:e).ownerDocument.body);return o?(// we should not hide ariaLive elements - https://github.com/theKashey/aria-hidden/issues/10
r.push.apply(r,Array.from(o.querySelectorAll("[aria-live]"))),ns(r,o,n,"aria-hidden")):function(){return null}};/* -------------------------------------------------------------------------------------------------
 * Dialog
 * -----------------------------------------------------------------------------------------------*/let nc="Dialog",[nd,nf]=A(nc),[np,nh]=nd(nc),nm=/*#__PURE__*/(0,R.forwardRef)((e,t)=>{let{__scopeDialog:n,...r}=e,o=nh("DialogTrigger",n),i=D(t,o.triggerRef);return/*#__PURE__*/(0,R.createElement)(H.button,M({type:"button","aria-haspopup":"dialog","aria-expanded":o.open,"aria-controls":o.contentId,"data-state":nT(o.open)},r,{ref:i,onClick:U(e.onClick,o.onOpenToggle)}))}),ng="DialogPortal",[nv,ny]=nd(ng,{forceMount:void 0}),nb="DialogOverlay",nw=/*#__PURE__*/(0,R.forwardRef)((e,t)=>{let n=ny(nb,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,i=nh(nb,e.__scopeDialog);return i.modal?/*#__PURE__*/(0,R.createElement)(G,{present:r||i.open},/*#__PURE__*/(0,R.createElement)(nx,M({},o,{ref:t}))):null}),nx=/*#__PURE__*/(0,R.forwardRef)((e,t)=>{let{__scopeDialog:n,...r}=e,o=nh(nb,n);return/*#__PURE__*/(0,R.createElement)(nn,{as:I,allowPinchZoom:!0,shards:[o.contentRef]},/*#__PURE__*/(0,R.createElement)(H.div,M({"data-state":nT(o.open)},r,{ref:t// We re-enable pointer-events prevented by `Dialog.Content` to allow scrolling the overlay.
,style:{pointerEvents:"auto",...r.style}})))}),nk="DialogContent",nS=/*#__PURE__*/(0,R.forwardRef)((e,t)=>{let n=ny(nk,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,i=nh(nk,e.__scopeDialog);return/*#__PURE__*/(0,R.createElement)(G,{present:r||i.open},i.modal?/*#__PURE__*/(0,R.createElement)(nE,M({},o,{ref:t})):/*#__PURE__*/(0,R.createElement)(n_,M({},o,{ref:t})))}),nE=/*#__PURE__*/(0,R.forwardRef)((e,t)=>{let n=nh(nk,e.__scopeDialog),r=(0,R.useRef)(null),o=D(t,n.contentRef,r);return(0,R.useEffect)(()=>{let e=r.current;if(e)return nu(e)},[]),/*#__PURE__*/(0,R.createElement)(nC,M({},e,{ref:o// we make sure focus isn't trapped once `DialogContent` has been closed
,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:U(e.onCloseAutoFocus,e=>{var t;e.preventDefault(),null===(t=n.triggerRef.current)||void 0===t||t.focus()}),onPointerDownOutside:U(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey,r=2===t.button||n;// it is effectively as if we right-clicked the `Overlay`.
r&&e.preventDefault()})// When focus is trapped, a `focusout` event may still happen.
,onFocusOutside:U(e.onFocusOutside,e=>e.preventDefault())}))}),n_=/*#__PURE__*/(0,R.forwardRef)((e,t)=>{let n=nh(nk,e.__scopeDialog),r=(0,R.useRef)(!1),o=(0,R.useRef)(!1);return/*#__PURE__*/(0,R.createElement)(nC,M({},e,{ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var i,a;null===(i=e.onCloseAutoFocus)||void 0===i||i.call(e,t),t.defaultPrevented||(r.current||null===(a=n.triggerRef.current)||void 0===a||a.focus(),t.preventDefault()),r.current=!1,o.current=!1},onInteractOutside:t=>{var i,a;null===(i=e.onInteractOutside)||void 0===i||i.call(e,t),t.defaultPrevented||(r.current=!0,"pointerdown"!==t.detail.originalEvent.type||(o.current=!0));// As the trigger is already setup to close, without doing so would
// cause it to close and immediately open.
let l=t.target,s=null===(a=n.triggerRef.current)||void 0===a?void 0:a.contains(l);s&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&o.current&&t.preventDefault()}}))}),nC=/*#__PURE__*/(0,R.forwardRef)((e,t)=>{let{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:o,onCloseAutoFocus:i,...a}=e,l=nh(nk,n),s=(0,R.useRef)(null),u=D(t,s);return tj(),/*#__PURE__*/(0,R.createElement)(R.Fragment,null,/*#__PURE__*/(0,R.createElement)(tE,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:o,onUnmountAutoFocus:i},/*#__PURE__*/(0,R.createElement)(tv,M({role:"dialog",id:l.contentId,"aria-describedby":l.descriptionId,"aria-labelledby":l.titleId,"data-state":nT(l.open)},a,{ref:u,onDismiss:()=>l.onOpenChange(!1)}))),!1)}),nP="DialogTitle",nR=/*#__PURE__*/(0,R.forwardRef)((e,t)=>{let{__scopeDialog:n,...r}=e,o=nh(nP,n);return/*#__PURE__*/(0,R.createElement)(H.h2,M({id:o.titleId},r,{ref:t}))}),nN=/*#__PURE__*/(0,R.forwardRef)((e,t)=>{let{__scopeDialog:n,...r}=e,o=nh("DialogDescription",n);return/*#__PURE__*/(0,R.createElement)(H.p,M({id:o.descriptionId},r,{ref:t}))}),nO=/*#__PURE__*/(0,R.forwardRef)((e,t)=>{let{__scopeDialog:n,...r}=e,o=nh("DialogClose",n);return/*#__PURE__*/(0,R.createElement)(H.button,M({type:"button"},r,{ref:t,onClick:U(e.onClick,()=>o.onOpenChange(!1))}))});/* -----------------------------------------------------------------------------------------------*/function nT(e){return e?"open":"closed"}let[nj,nM]=function(e,t){let n=/*#__PURE__*/(0,R.createContext)(t);function r(e){let{children:t,...r}=e,o=(0,R.useMemo)(()=>r,Object.values(r));// Only re-memoize when prop values change
return/*#__PURE__*/(0,R.createElement)(n.Provider,{value:o},t)}return r.displayName=e+"Provider",[r,function(r){let o=(0,R.useContext)(n);if(o)return o;if(void 0!==t)return t;// if a defaultContext wasn't specified, it's a required context.
throw Error(`\`${r}\` must be used within \`${e}\``)}]}("DialogTitleWarning",{contentName:nk,titleName:nP,docsSlug:"dialog"}),nA=e=>{let{__scopeDialog:t,children:n,open:r,defaultOpen:o,onOpenChange:i,modal:a=!0}=e,l=(0,R.useRef)(null),s=(0,R.useRef)(null),[u=!1,c]=B({prop:r,defaultProp:o,onChange:i});return/*#__PURE__*/(0,R.createElement)(np,{scope:t,triggerRef:l,contentRef:s,contentId:Z(),titleId:Z(),descriptionId:Z(),open:u,onOpenChange:c,onOpenToggle:(0,R.useCallback)(()=>c(e=>!e),[c]),modal:a},n)},nz=e=>{let{__scopeDialog:t,forceMount:n,children:r,container:o}=e,i=nh(ng,t);return/*#__PURE__*/(0,R.createElement)(nv,{scope:t,forceMount:n},(0,R.Children).map(r,e=>/*#__PURE__*/(0,R.createElement)(G,{present:n||i.open},/*#__PURE__*/(0,R.createElement)(tO,{asChild:!0,container:o},e))))},[nD,nI]=A("AlertDialog",[nf]),nL=nf(),nF=/*#__PURE__*/(0,R.forwardRef)((e,t)=>{let{__scopeAlertDialog:n,...r}=e,o=nL(n);return/*#__PURE__*/(0,R.createElement)(nm,M({},o,r,{ref:t}))}),n$=/*#__PURE__*/(0,R.forwardRef)((e,t)=>{let{__scopeAlertDialog:n,...r}=e,o=nL(n);return/*#__PURE__*/(0,R.createElement)(nw,M({},o,r,{ref:t}))}),nV="AlertDialogContent",[nU,nW]=nD(nV),nB=/*#__PURE__*/(0,R.forwardRef)((e,t)=>{let{__scopeAlertDialog:n,children:r,...o}=e,i=nL(n),a=(0,R.useRef)(null),l=D(t,a),s=(0,R.useRef)(null);return/*#__PURE__*/(0,R.createElement)(nj,{contentName:nV,titleName:nH,docsSlug:"alert-dialog"},/*#__PURE__*/(0,R.createElement)(nU,{scope:n,cancelRef:s},/*#__PURE__*/(0,R.createElement)(nS,M({role:"alertdialog"},i,o,{ref:l,onOpenAutoFocus:U(o.onOpenAutoFocus,e=>{var t;e.preventDefault(),null===(t=s.current)||void 0===t||t.focus({preventScroll:!0})}),onPointerDownOutside:e=>e.preventDefault(),onInteractOutside:e=>e.preventDefault()}),/*#__PURE__*/(0,R.createElement)(F,null,r),!1)))}),nH="AlertDialogTitle",nY=/*#__PURE__*/(0,R.forwardRef)((e,t)=>{let{__scopeAlertDialog:n,...r}=e,o=nL(n);return/*#__PURE__*/(0,R.createElement)(nR,M({},o,r,{ref:t}))}),nq=/*#__PURE__*/(0,R.forwardRef)((e,t)=>{let{__scopeAlertDialog:n,...r}=e,o=nL(n);return/*#__PURE__*/(0,R.createElement)(nN,M({},o,r,{ref:t}))}),nG=/*#__PURE__*/(0,R.forwardRef)((e,t)=>{let{__scopeAlertDialog:n,...r}=e,o=nL(n);return/*#__PURE__*/(0,R.createElement)(nO,M({},o,r,{ref:t}))}),nQ=/*#__PURE__*/(0,R.forwardRef)((e,t)=>{let{__scopeAlertDialog:n,...r}=e,{cancelRef:o}=nW("AlertDialogCancel",n),i=nL(n),a=D(t,o);return/*#__PURE__*/(0,R.createElement)(nO,M({},i,r,{ref:a}))});var R=_("exYeM");let nK=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,nX=(e,t)=>n=>{var r;if((null==t?void 0:t.variants)==null)return eF(e,null==n?void 0:n.class,null==n?void 0:n.className);let{variants:o,defaultVariants:i}=t,a=Object.keys(o).map(e=>{let t=null==n?void 0:n[e],r=null==i?void 0:i[e];if(null===t)return null;let a=nK(t)||nK(r);return o[e][a]}),l=n&&Object.entries(n).reduce((e,t)=>{let[n,r]=t;return void 0===r||(e[n]=r),e},{}),s=null==t?void 0:null===(r=t.compoundVariants)||void 0===r?void 0:r.reduce((e,t)=>{let{class:n,className:r,...o}=t;return Object.entries(o).every(e=>{let[t,n]=e;return Array.isArray(n)?n.includes({...i,...l}[t]):({...i,...l})[t]===n})?[...e,n,r]:e},[]);return eF(e,a,s,null==n?void 0:n.class,null==n?void 0:n.className)},nZ=nX("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-30",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",submit:"bg-slate-500 text-destructive-foreground hover:bg-slate-500/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline",share:"border-solid bg-fuchsia-400	basis-1/2 hover:bg-fuchsia-400/80"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",deselectallsize:"h-10 py-2",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),nJ=/*#__PURE__*/R.forwardRef(({className:e,variant:t,size:n,asChild:r=!1,...o},i)=>{let a=r?I:"button";return/*#__PURE__*/(0,C.jsx)(a,{className:tl(nZ({variant:t,size:n,className:e})),ref:i,...o})});nJ.displayName="Button";let n0=e=>{let{__scopeAlertDialog:t,...n}=e,r=nL(t);return/*#__PURE__*/(0,R.createElement)(nA,M({},r,n,{modal:!0}))},n1=e=>{let{__scopeAlertDialog:t,...n}=e,r=nL(t);return/*#__PURE__*/(0,R.createElement)(nz,M({},r,n))},n2=/*#__PURE__*/R.forwardRef(({className:e,children:t,...n},r)=>/*#__PURE__*/(0,C.jsx)(n$,{className:tl("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...n,ref:r}));n2.displayName=n$.displayName;let n3=/*#__PURE__*/R.forwardRef(({className:e,handleMouseDownOnOverlay:t,...n},r)=>/*#__PURE__*/(0,C.jsxs)(n1,{children:[/*#__PURE__*/(0,C.jsx)(n2,{onMouseDown:t}),/*#__PURE__*/(0,C.jsx)(nB,{ref:r,className:tl("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full",e),...n})]}));n3.displayName=nB.displayName;let n4=({className:e,...t})=>/*#__PURE__*/(0,C.jsx)("div",{className:tl("flex flex-col space-y-2 text-center sm:text-left",e),...t});n4.displayName="AlertDialogHeader";let n5=({className:e,...t})=>/*#__PURE__*/(0,C.jsx)("div",{className:tl("flex flex-row gap-x-4 justify-center",e),...t});n5.displayName="AlertDialogFooter";let n8=/*#__PURE__*/R.forwardRef(({className:e,...t},n)=>/*#__PURE__*/(0,C.jsx)(nY,{ref:n,className:tl("text-lg font-semibold",e),...t}));n8.displayName=nY.displayName;let n6=/*#__PURE__*/R.forwardRef(({className:e,...t},n)=>/*#__PURE__*/(0,C.jsx)(nq,{ref:n,className:tl("text-sm text-muted-foreground",e),...t}));n6.displayName=nq.displayName;let n9=/*#__PURE__*/R.forwardRef(({className:e,...t},n)=>/*#__PURE__*/(0,C.jsx)(nG,{ref:n,className:tl(nZ(),e),...t}));n9.displayName=nG.displayName;let n7=/*#__PURE__*/R.forwardRef(({className:e,...t},n)=>/*#__PURE__*/(0,C.jsx)(nQ,{ref:n,className:tl(nZ({variant:"outline"}),"mt-2 sm:mt-0",e),...t}));n7.displayName=nQ.displayName;var re=function({title:e="title",trigger:t,initiallyOpen:n=!0,footerElements:r,children:o,actionButtonText:i="Continue",showActionButton:a=!0}){let[l,s]=/*@__PURE__*/k(R).useState(n);function u(){s(!1)}return /*@__PURE__*/k(R).useEffect(()=>{s(n)},[n]),/*#__PURE__*/(0,C.jsxs)(n0,{open:l,onOpenChange:s,children:[!!t&&/*#__PURE__*/(0,C.jsx)(nF,{children:t}),/*#__PURE__*/(0,C.jsxs)(n3,{handleMouseDownOnOverlay:u,onEscapeKeyDown:u,onCloseAutoFocus:e=>{e.preventDefault()},children:[/*#__PURE__*/(0,C.jsxs)(n4,{children:[/*#__PURE__*/(0,C.jsx)(n8,{children:e}),/*#__PURE__*/(0,C.jsx)(n6,{children:o})]}),/*#__PURE__*/(0,C.jsxs)(n5,{children:[r,a&&/*#__PURE__*/(0,C.jsx)(n9,{onClick:()=>s(!1),children:i})]})]})]})},rt=function(){return/*#__PURE__*/(0,C.jsxs)(re,{title:"",trigger:/*#__PURE__*/(0,C.jsx)(j,{className:"mr-4"}),initiallyOpen:!1,actionButtonText:"Got It!",children:[/*#__PURE__*/(0,C.jsx)("h2",{className:"text-lg font-semibold mb-4",children:"How To Play"}),/*#__PURE__*/(0,C.jsxs)(eb,{type:"single",collapsible:!0,className:"w-full",children:[/*#__PURE__*/(0,C.jsxs)(tf,{value:"item-1",children:[/*#__PURE__*/(0,C.jsx)(tp,{children:"What's The Goal?"}),/*#__PURE__*/(0,C.jsx)(th,{children:"Find groups of items or names that share something in common."})]}),/*#__PURE__*/(0,C.jsxs)(tf,{value:"item-2",children:[/*#__PURE__*/(0,C.jsx)(tp,{children:"How Do I Play?"}),/*#__PURE__*/(0,C.jsx)(th,{children:"Select the items and tap 'Submit' to check if your guess matches one of the answer categories."})]}),/*#__PURE__*/(0,C.jsxs)(tf,{value:"item-3",children:[/*#__PURE__*/(0,C.jsx)(tp,{children:"How Many Tries Do I Get?"}),/*#__PURE__*/(0,C.jsx)(th,{children:"You have infinite tries but you will be ranked on the leaderboard by the number of mistakes you make. The fewer mistakes, the better your score!"})]})]})]})},rn=function(){return/*#__PURE__*/(0,C.jsxs)("header",{children:[/*#__PURE__*/(0,C.jsx)("h1",{className:"font-space-mono",children:"Staalsen Connections"}),/*#__PURE__*/(0,C.jsx)(rt,{})]})},R=_("exYeM");function rr({gameData:e}){let t=e.length,n=[];for(let r=0;r<t;r++)e[r]?.words?n.push(e[r].words):n.push(e[r]);return n.flat()}function ro({gameData:e}){let t;t=e[0]?.words?e[0].words.length:e[0].length;let n=rr({gameData:e});return tu(t,ts(n))}let ri=(e,t)=>{let n;let r={},o=((n=[]).push("\uD83D\uDFE9"),n.push("\uD83D\uDFE8"),n.push("\uD83D\uDFEA"),n.push("\uD83D\uDFE6"),n),i=e.length,a=[];for(let t=0;t<i;t++){a.push(e[t].words);let n=e[t].difficulty;e[t].words.map(e=>r[e]=n)}let l=[];for(let e=0;e<t.length;e++){let n=t[e],i=n.map(e=>r[e]),a=i.map(e=>{switch(e){case 1:return o[0];case 2:return o[1];case 3:return o[2];case 4:return o[3]}}).join("");l.push(a)}return`${l.join("\n")}`};var R=(_("exYeM"),_("exYeM"),_("exYeM"),_("exYeM"));let ra=/*#__PURE__*/(0,R.forwardRef)((e,t)=>{let{pressed:n,defaultPressed:r=!1,onPressedChange:o,...i}=e,[a=!1,l]=B({prop:n,onChange:o,defaultProp:r});return/*#__PURE__*/(0,R.createElement)(H.button,M({type:"button","aria-pressed":a,"data-state":a?"on":"off","data-disabled":e.disabled?"":void 0},i,{ref:t,onClick:U(e.onClick,()=>{e.disabled||l(!a)})}))}),rl=nX("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors lg:hover:bg-muted lg:hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-slate-300/70 data-[state=on]:text-accent-foreground",{variants:{variant:{default:"bg-transparent",outline:"border-solid border border-input bg-transparent lg:hover:bg-accent lg:hover:text-accent-foreground"},size:{default:"h-10 px-3",sm:"h-9 px-2.5",lg:"h-11 px-5"}},defaultVariants:{variant:"default",size:"default"}}),rs=/*#__PURE__*/R.forwardRef(({className:e,variant:t,size:n,...r},o)=>/*#__PURE__*/(0,C.jsx)(ra,{ref:o,className:tl(rl({variant:t,size:n,className:e})),...r}));rs.displayName=ra.displayName;var R=(_("exYeM"),_("exYeM"));let ru=[[{category:"Shared Hobbies",words:["Board","Disc","Pickle","Ultimate"],difficulty:1},{category:"Places to Visit in Costa Rica (Our Honeymoon!)",words:["Ocean","Rainforest","Springs","Volcano"],difficulty:2},{category:"Parts of Titles to Our Favorite Movies",words:["Monty","Pearl","Pride","Princess"],difficulty:3},{category:"Unity Symbolism During Wedding Ceremony",words:["Candle","Knot","Ring","Sand"],difficulty:4}]],rc=/*@__PURE__*/k(R).createContext();var rd=function({children:e}){game=ru[0];let[t,n]=/*@__PURE__*/k(R).useState(game),r=t[0].words.length,o=t.length;return/*#__PURE__*/(0,C.jsx)(rc.Provider,{value:{gameData:t,numCategories:o,categorySize:r},children:e})};let rf="gameState",rp=e=>{localStorage.setItem(rf,JSON.stringify(e))},rh=()=>{let e=localStorage.getItem(rf);return e?JSON.parse(e):null},rm=/*@__PURE__*/k(R).createContext();var rg=function({children:e}){let{gameData:t}=/*@__PURE__*/k(R).useContext(rc),[n,r]=/*@__PURE__*/k(R).useState([]),[o,i]=/*@__PURE__*/k(R).useState(()=>{let e=rh();return(console.log("checking game state!",{loadedState:e,gd1:t,gd2:e?.gameData}),!function({gd1:e,gd2:t}){if(null==e||null==t||e.length!==t.length)return!1;for(let n=0;n<e.lengthl;n++)if(!td(e.words[n],t.words[n]))return!1;return!0}({gd1:t,gd2:e?.gameData})||!function({gameData:e,submittedGuesses:t}){let n=rr({gameData:e}),r=rr({gameData:t});if(0===t.length)return!1;let o=r.every(e=>n.includes(e));return o}({gameData:t,submittedGuesses:e?.submittedGuesses}))?[]:(Array.isArray(e?.submittedGuesses)&&r(e.submittedGuesses),Array.isArray(e?.solvedGameData))?e.solvedGameData:[]}),[a,l]=/*@__PURE__*/k(R).useState(!1),[s,u]=/*@__PURE__*/k(R).useState([]),c=n.length-o.length;return /*@__PURE__*/k(R).useEffect(()=>{o.length===t.length&&l(!0),rp({submittedGuesses:n,solvedGameData:o,gameData:t})},[o]),/*#__PURE__*/(0,C.jsx)(rm.Provider,{value:{isGameWon:a,numMistakesUsed:c,solvedGameData:o,setSolvedGameData:i,submittedGuesses:n,setSubmittedGuesses:r,guessCandidate:s,setGuessCandidate:u},children:e})},rv=function({word:e,fullCandidateSize:t}){let{guessCandidate:n,setGuessCandidate:r}=/*@__PURE__*/k(R).useContext(rm),[o,i]=/*@__PURE__*/k(R).useState(!!n.includes(e)),a=n.length==t;return /*@__PURE__*/k(R).useEffect(()=>{i(!!n.includes(e))},[n]),/*#__PURE__*/(0,C.jsx)(rs,{className:"_9XSUmq_growShrink select-none",variant:"outline",pressed:o,onClick:function(){if(o){// remove from candidateGuess
let t=n.filter(t=>t!==e);r(t),// set state to *not* selected
i(!1)}else a||(// add to candidateGuess array
r([...n,e]),// set state to *selected*
i(!0))},children:/*#__PURE__*/(0,C.jsx)("p",{style:{fontSize://const fontSizeByWordLength = 9characters works with 0.6rem
function(e){let t=e.length,n=1;return t>7?(n-=.1*(t-7),n=Math.max(.5,n),`${n}em`):null}(e)},className:"font-space-mono uppercase sm:text-xs md:text-xs",children:e})})},R=_("exYeM"),ry=Object.defineProperty,rb={};((e,t)=>{for(var n in t)ry(e,n,{get:t[n],enumerable:!0})})(rb,{assign:()=>rX,colors:()=>rG,createStringInterpolator:()=>g,skipAnimation:()=>rQ,to:()=>v,willAdvance:()=>rK});// ../rafz/dist/react-spring_rafz.modern.mjs
var rw=rD(),rx=e=>rj(e,rw),rk=rD();rx.write=e=>rj(e,rk);var rS=rD();rx.onStart=e=>rj(e,rS);var rE=rD();rx.onFrame=e=>rj(e,rE);var r_=rD();rx.onFinish=e=>rj(e,r_);var rC=[];rx.setTimeout=(e,t)=>{let n=rx.now()+t,r=()=>{let e=rC.findIndex(e=>e.cancel==r);~e&&rC.splice(e,1),rO-=~e?1:0},o={time:n,handler:e,cancel:r};return rC.splice(rP(n),0,o),rO+=1,rM(),o};var rP=e=>~(~rC.findIndex(t=>t.time>e)||~rC.length);rx.cancel=e=>{rS.delete(e),rE.delete(e),r_.delete(e),rw.delete(e),rk.delete(e)},rx.sync=e=>{rT=!0,rx.batchedUpdates(e),rT=!1},rx.throttle=e=>{let t;function n(){try{e(...t)}finally{t=null}}function r(...e){t=e,rx.onStart(n)}return r.handler=e,r.cancel=()=>{rS.delete(n),t=null},r};var rR="undefined"!=typeof window?window.requestAnimationFrame:()=>{};rx.use=e=>rR=e,rx.now="undefined"!=typeof performance?()=>performance.now():Date.now,rx.batchedUpdates=e=>e(),rx.catch=console.error,rx.frameLoop="always",rx.advance=()=>{"demand"!==rx.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):rz()};var rN=-1,rO=0,rT=!1;function rj(e,t){rT?(t.delete(e),e(0)):(t.add(e),rM())}function rM(){rN<0&&(rN=0,"demand"!==rx.frameLoop&&rR(rA))}function rA(){~rN&&(rR(rA),rx.batchedUpdates(rz))}function rz(){let e=rN;rN=rx.now();let t=rP(rN);if(t&&(rI(rC.splice(0,t),e=>e.handler()),rO-=t),!rO){rN=-1;return}rS.flush(),rw.flush(e?Math.min(64,rN-e):16.667),rE.flush(),rk.flush(),r_.flush()}function rD(){let e=/* @__PURE__ */new Set,t=e;return{add(n){rO+=t!=e||e.has(n)?0:1,e.add(n)},delete:n=>(rO-=t==e&&e.has(n)?1:0,e.delete(n)),flush(n){t.size&&(e=/* @__PURE__ */new Set,rO-=t.size,rI(t,t=>t(n)&&e.add(t)),rO+=e.size,t=e)}}}function rI(e,t){e.forEach(e=>{try{t(e)}catch(e){rx.catch(e)}})}// src/helpers.ts
function rL(){}var rF=(e,t,n)=>Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0}),r$={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function rV(e,t){if(r$.arr(e)){if(!r$.arr(t)||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}return e===t}var rU=(e,t)=>e.forEach(t);function rW(e,t,n){if(r$.arr(e)){for(let r=0;r<e.length;r++)t.call(n,e[r],`${r}`);return}for(let r in e)e.hasOwnProperty(r)&&t.call(n,e[r],r)}var rB=e=>r$.und(e)?[]:r$.arr(e)?e:[e];function rH(e,t){if(e.size){let n=Array.from(e);e.clear(),rU(n,t)}}var rY=(e,...t)=>rH(e,e=>e(...t)),rq=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),rG=null,rQ=!1,rK=rL,rX=e=>{e.to&&(v=e.to),e.now&&(rx.now=e.now),void 0!==e.colors&&(rG=e.colors),null!=e.skipAnimation&&(rQ=e.skipAnimation),e.createStringInterpolator&&(g=e.createStringInterpolator),e.requestAnimationFrame&&rx.use(e.requestAnimationFrame),e.batchedUpdates&&(rx.batchedUpdates=e.batchedUpdates),e.willAdvance&&(rK=e.willAdvance),e.frameLoop&&(rx.frameLoop=e.frameLoop)},rZ=/* @__PURE__ */new Set,rJ=[],r0=[],r1=0,r2={get idle(){return!rZ.size&&!rJ.length},/** Advance the given animation on every frame until idle. */start(e){r1>e.priority?(rZ.add(e),rx.onStart(r3)):(r4(e),rx(r8))},advance:/** Advance all animations by the given time. */r8,/** Call this when an animation's priority changes. */sort(e){if(r1)rx.onFrame(()=>r2.sort(e));else{let t=rJ.indexOf(e);~t&&(rJ.splice(t,1),r5(e))}},/**
   * Clear all animations. For testing purposes.
   *
   * ☠️ Never call this from within the frameloop.
   */clear(){rJ=[],rZ.clear()}};function r3(){rZ.forEach(r4),rZ.clear(),rx(r8)}function r4(e){rJ.includes(e)||r5(e)}function r5(e){rJ.splice(function(e,t){let n=e.findIndex(t);return n<0?e.length:n}(rJ,t=>t.priority>e.priority),0,e)}function r8(e){let t=r0;for(let n=0;n<rJ.length;n++){let r=rJ[n];r1=r.priority,r.idle||(rK(r),r.advance(e),r.idle||t.push(r))}return r1=0,(r0=rJ).length=0,(rJ=t).length>0}// src/clamp.ts
var r6="[-+]?\\d*\\.?\\d+",r9=r6+"%";function r7(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var oe=RegExp("rgb"+r7(r6,r6,r6)),ot=RegExp("rgba"+r7(r6,r6,r6,r6)),on=RegExp("hsl"+r7(r6,r9,r9)),or=RegExp("hsla"+r7(r6,r9,r9,r6)),oo=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,oi=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,oa=/^#([0-9a-fA-F]{6})$/,ol=/^#([0-9a-fA-F]{8})$/;function os(e,t,n){return(n<0&&(n+=1),n>1&&(n-=1),n<1/6)?e+(t-e)*6*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function ou(e,t,n){let r=n<.5?n*(1+t):n+t-n*t,o=2*n-r,i=os(o,r,e+1/3),a=os(o,r,e),l=os(o,r,e-1/3);return Math.round(255*i)<<24|Math.round(255*a)<<16|Math.round(255*l)<<8}function oc(e){let t=parseInt(e,10);return t<0?0:t>255?255:t}function od(e){let t=parseFloat(e);return(t%360+360)%360/360}function of(e){let t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function op(e){let t=parseFloat(e);return t<0?0:t>100?1:t/100}// src/colorToRgba.ts
function oh(e){let t;let n="number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=oa.exec(e))?parseInt(t[1]+"ff",16)>>>0:rG&&void 0!==rG[e]?rG[e]:(t=oe.exec(e))?(oc(t[1])<<24|// r
oc(t[2])<<16|// g
oc(t[3])<<8|// b
255)>>>// a
0:(t=ot.exec(e))?(oc(t[1])<<24|// r
oc(t[2])<<16|// g
oc(t[3])<<8|// b
of(t[4]))>>>// a
0:(t=oo.exec(e))?parseInt(t[1]+t[1]+// r
t[2]+t[2]+// g
t[3]+t[3]+// b
"ff",16)>>>0:(t=ol.exec(e))?parseInt(t[1],16)>>>0:(t=oi.exec(e))?parseInt(t[1]+t[1]+// r
t[2]+t[2]+// g
t[3]+t[3]+// b
t[4]+t[4],16)>>>0:(t=on.exec(e))?(255|ou(od(t[1]),op(t[2]),op(t[3])))>>>// a
0:(t=or.exec(e))?(ou(od(t[1]),op(t[2]),op(t[3]))|of(t[4]))>>>// a
0:null;if(null===n)return e;n=n||0;let r=(4278190080&n)>>>24,o=(16711680&n)>>>16,i=(65280&n)>>>8,a=(255&n)/255;return`rgba(${r}, ${o}, ${i}, ${a})`}// src/createInterpolator.ts
var om=(e,t,n)=>{if(r$.fun(e))return e;if(r$.arr(e))return om({range:e,output:t,extrapolate:n});if(r$.str(e.output[0]))return g(e);let r=e.output,o=e.range||[0,1],i=e.extrapolateLeft||e.extrapolate||"extend",a=e.extrapolateRight||e.extrapolate||"extend",l=e.easing||(e=>e);return t=>{let n=function(e,t){for(var n=1;n<t.length-1&&!(t[n]>=e);++n);return n-1}(t,o);return function(e,t,n,r,o,i,a,l,s){let u=s?s(e):e;if(u<t){if("identity"===a)return u;"clamp"===a&&(u=t)}if(u>n){if("identity"===l)return u;"clamp"===l&&(u=n)}return r===o?r:t===n?e<=t?r:o:(t===-1/0?u=-u:n===1/0?u-=t:u=(u-t)/(n-t),u=i(u),r===-1/0?u=-u:o===1/0?u+=r:u=u*(o-r)+r,u)}(t,o[n],o[n+1],r[n],r[n+1],l,i,a,e.map)}},og=Symbol.for("FluidValue.get"),ov=Symbol.for("FluidValue.observers"),oy=e=>!!(e&&e[og]),ob=e=>e&&e[og]?e[og]():e,ow=e=>e[ov]||null;function ox(e,t){let n=e[ov];n&&n.forEach(e=>{e.eventObserved?e.eventObserved(t):e(t)})}var ok=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");oS(this,e)}},oS=(e,t)=>oC(e,og,t);function oE(e,t){if(e[og]){let n=e[ov];n||oC(e,ov,n=/* @__PURE__ */new Set),!n.has(t)&&(n.add(t),e.observerAdded&&e.observerAdded(n.size,t))}return t}function o_(e,t){let n=e[ov];if(n&&n.has(t)){let r=n.size-1;r?n.delete(t):e[ov]=null,e.observerRemoved&&e.observerRemoved(r,t)}}var oC=(e,t,n)=>Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0}),oP=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,oR=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,oN=RegExp(`(${oP.source})(%|[a-z]+)`,"i"),oO=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,oT=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,oj=e=>{let[t,n]=oM(e);if(!t||rq())return e;let r=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(r)return r.trim();if(n&&n.startsWith("--")){let e=window.getComputedStyle(document.documentElement).getPropertyValue(n);if(e)return e}else if(n&&oT.test(n))return oj(n);else if(n)return n;return e},oM=e=>{let t=oT.exec(e);if(!t)return[,];let[,n,r]=t;return[n,r]},oA=(e,t,n,r,o)=>`rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${o})`,oz=e=>{y||(y=rG?RegExp(`(${Object.keys(rG).join("|")})(?!\\w)`,"g"):/^\b$/);let t=e.output.map(e=>ob(e).replace(oT,oj).replace(oR,oh).replace(y,oh)),n=t.map(e=>e.match(oP).map(Number)),r=n[0].map((e,t)=>n.map(e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})),o=r.map(t=>om({...e,output:t}));return e=>{let n=!oN.test(t[0])&&t.find(e=>oN.test(e))?.replace(oP,""),r=0;return t[0].replace(oP,()=>`${o[r++](e)}${n||""}`).replace(oO,oA)}},oD="react-spring: ",oI=e=>{let t=!1;if("function"!=typeof e)throw TypeError(`${oD}once requires a function parameter`);return(...n)=>{t||(e(...n),t=!0)}},oL=oI(console.warn),oF=oI(console.warn);// src/isAnimatedString.ts
function o$(e){return r$.str(e)&&("#"==e[0]||/\d/.test(e)||// Do not identify a CSS variable as an AnimatedString if its SSR
!rq()&&oT.test(e)||e in(rG||{}))}var oV=rq()?R.useEffect:R.useLayoutEffect,oU=()=>{let e=(0,R.useRef)(!1);return oV(()=>(e.current=!0,()=>{e.current=!1}),[]),e};// src/hooks/useForceUpdate.ts
function oW(){let e=(0,R.useState)()[1],t=oU();return()=>{t.current&&e(Math.random())}}var oB=e=>(0,R.useEffect)(e,oH),oH=[];function oY(e){let t=(0,R.useRef)();return(0,R.useEffect)(()=>{t.current=e}),t.current}// src/Animated.ts
var R=(_("exYeM"),_("exYeM")),oq=Symbol.for("Animated:node"),oG=e=>!!e&&e[oq]===e,oQ=e=>e&&e[oq],oK=(e,t)=>rF(e,oq,t),oX=e=>e&&e[oq]&&e[oq].getPayload(),oZ=class{constructor(){oK(this,this)}/** Get every `AnimatedValue` used by this node. */getPayload(){return this.payload||[]}},oJ=class extends oZ{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,r$.num(this._value)&&(this.lastPosition=this._value)}/** @internal */static create(e){return new oJ(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return r$.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){let{done:e}=this;this.done=!1,r$.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},o0=class extends oJ{constructor(e){super(0),this._string=null,this._toString=om({output:[e,e]})}/** @internal */static create(e){return new o0(e)}getValue(){let e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(r$.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=om({output:[this.getValue(),e]})),this._value=0,super.reset()}},o1={dependencies:null},o2=class extends oZ{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){let t={};return rW(this.source,(n,r)=>{oG(n)?t[r]=n.getValue(e):oy(n)?t[r]=ob(n):e||(t[r]=n)}),t}/** Replace the raw object data */setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&rU(this.payload,e=>e.reset())}/** Create a payload set. */_makePayload(e){if(e){let t=/* @__PURE__ */new Set;return rW(e,this._addToPayload,t),Array.from(t)}}/** Add to a payload set. */_addToPayload(e){o1.dependencies&&oy(e)&&o1.dependencies.add(e);let t=oX(e);t&&rU(t,e=>this.add(e))}},o3=class extends o2{constructor(e){super(e)}/** @internal */static create(e){return new o3(e)}getValue(){return this.source.map(e=>e.getValue())}setValue(e){let t=this.getPayload();return e.length==t.length?t.map((t,n)=>t.setValue(e[n])).some(Boolean):(super.setValue(e.map(o4)),!0)}};function o4(e){let t=o$(e)?o0:oJ;return t.create(e)}function o5(e){let t=oQ(e);return t?t.constructor:r$.arr(e)?o3:o$(e)?o0:oJ}var o8=(e,t)=>{let n=// re-rendered on every animation frame.
!r$.fun(e)||e.prototype&&e.prototype.isReactComponent;return(0,R.forwardRef)((r,o)=>{let i=(0,R.useRef)(null),a=n&&// eslint-disable-next-line react-hooks/rules-of-hooks
(0,R.useCallback)(e=>{i.current=(o&&(r$.fun(o)?o(e):o.current=e),e)},[o]),[l,s]=function(e,t){let n=/* @__PURE__ */new Set;return o1.dependencies=n,e.style&&(e={...e,style:t.createAnimatedStyle(e.style)}),e=new o2(e),o1.dependencies=null,[e,n]}(r,t),u=oW(),c=()=>{let e=i.current;if(n&&!e)return;let r=!!e&&t.applyAnimatedValues(e,l.getValue(!0));!1===r&&u()},d=new o6(c,s),f=(0,R.useRef)();oV(()=>(f.current=d,rU(s,e=>oE(e,d)),()=>{f.current&&(rU(f.current.deps,e=>o_(e,f.current)),rx.cancel(f.current.update))})),(0,R.useEffect)(c,[]),oB(()=>()=>{let e=f.current;rU(e.deps,t=>o_(t,e))});let p=t.getComponentProps(l.getValue());return /* @__PURE__ */R.createElement(e,{...p,ref:a})})},o6=class{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&rx.write(this.update)}},o9=Symbol.for("AnimatedComponent"),o7=e=>r$.str(e)?e:e&&r$.str(e.displayName)?e.displayName:r$.fun(e)&&e.name||null;function ie(e,...t){return r$.fun(e)?e(...t):e}var it=(e,t)=>!0===e||!!(t&&e&&(r$.fun(e)?e(t):rB(e).includes(t))),ir=(e,t)=>r$.obj(e)?t&&e[t]:e,io=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,ii=e=>e,ia=(e,t=ii)=>{let n=il;e.default&&!0!==e.default&&(n=Object.keys(e=e.default));let r={};for(let o of n){let n=t(e[o],o);r$.und(n)||(r[o]=n)}return r},il=["config","onProps","onStart","onChange","onPause","onResume","onRest"],is={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,// Transition props
items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,// Internal props
keys:1,callId:1,parentId:1};function iu(e){let t=function(e){let t={},n=0;if(rW(e,(e,r)=>{!is[r]&&(t[r]=e,n++)}),n)return t}(e);if(t){let n={to:t};return rW(e,(e,r)=>r in t||(n[r]=e)),n}return{...e}}function ic(e){return e=ob(e),r$.arr(e)?e.map(ic):o$(e)?rb.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function id(e){return r$.fun(e)||r$.arr(e)&&r$.obj(e[0])}// src/AnimationConfig.ts
var ip={tension:170,friction:26,mass:1,damping:1,easing:e=>e,clamp:!1},ih=class{constructor(){/**
     * The initial velocity of one or more values.
     *
     * @default 0
     */this.velocity=0,Object.assign(this,ip)}};function im(e,t){if(r$.und(t.decay)){let n=!r$.und(t.tension)||!r$.und(t.friction);!n&&r$.und(t.frequency)&&r$.und(t.damping)&&r$.und(t.mass)||(e.duration=void 0,e.decay=void 0),n&&(e.frequency=void 0)}else e.duration=void 0}// src/Animation.ts
var ig=[],iv=class{constructor(){this.changed=!1,this.values=ig,this.toValues=null,this.fromValues=ig,this.config=new ih,this.immediate=!1}};function iy(e,{key:t,props:n,defaultProps:r,state:o,actions:i}){return new Promise((a,l)=>{let s,u;let c=it(n.cancel??r?.cancel,t);if(c)p();else{r$.und(n.pause)||(o.paused=it(n.pause,t));let e=r?.pause;!0!==e&&(e=o.paused||it(e,t)),s=ie(n.delay||0,t),e?(o.resumeQueue.add(f),i.pause()):(i.resume(),f())}function d(){o.resumeQueue.add(f),o.timeouts.delete(u),u.cancel(),s=u.time-rx.now()}function f(){s>0&&!rb.skipAnimation?(o.delayed=!0,u=rx.setTimeout(p,s),o.pauseQueue.add(d),o.timeouts.add(u)):p()}function p(){o.delayed&&(o.delayed=!1),o.pauseQueue.delete(d),o.timeouts.delete(u),e<=(o.cancelId||0)&&(c=!0);try{i.start({...n,callId:e,cancel:c},a)}catch(e){l(e)}}})}// src/AnimationResult.ts
var ib=(e,t)=>1==t.length?t[0]:t.some(e=>e.cancelled)?ik(e.get()):t.every(e=>e.noop)?iw(e.get()):ix(e.get(),t.every(e=>e.finished)),iw=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),ix=(e,t,n=!1)=>({value:e,finished:t,cancelled:n}),ik=e=>({value:e,cancelled:!0,finished:!1});// src/runAsync.ts
function iS(e,t,n,r){let{callId:o,parentId:i,onRest:a}=t,{asyncTo:l,promise:s}=n;return i||e!==l||t.reset?n.promise=(async()=>{let u,c,d;n.asyncId=o,n.asyncTo=e;let f=ia(t,(e,t)=>"onRest"===t?void 0:e),p=new Promise((e,t)=>(u=e,c=t)),h=e=>{let t=o<=(n.cancelId||0)&&ik(r)||// The async `to` prop was replaced.
o!==n.asyncId&&ix(r,!1);if(t)throw e.result=t,c(e),e},m=(e,t)=>{let i=new i_,a=new iC;return(async()=>{if(rb.skipAnimation)throw iE(n),a.result=ix(r,!1),c(a),a;h(i);let l=r$.obj(e)?{...e}:{...t,to:e};l.parentId=o,rW(f,(e,t)=>{r$.und(l[t])&&(l[t]=e)});let s=await r.start(l);return h(i),n.paused&&await new Promise(e=>{n.resumeQueue.add(e)}),s})()};if(rb.skipAnimation)return iE(n),ix(r,!1);try{let t;t=r$.arr(e)?(async e=>{for(let t of e)await m(t)})(e):Promise.resolve(e(m,r.stop.bind(r))),await Promise.all([t.then(u),p]),d=ix(r.get(),!0,!1)}catch(e){if(e instanceof i_)d=e.result;else if(e instanceof iC)d=e.result;else throw e}finally{o==n.asyncId&&(n.asyncId=i,n.asyncTo=i?l:void 0,n.promise=i?s:void 0)}return r$.fun(a)&&rx.batchedUpdates(()=>{a(d,r,r.item)}),d})():s}function iE(e,t){rH(e.timeouts,e=>e.cancel()),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}var i_=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},iC=class extends Error{constructor(){super("SkipAnimationSignal")}},iP=e=>e instanceof iN,iR=1,iN=class extends ok{constructor(){super(...arguments),this.id=iR++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}/** Get the current value */get(){let e=oQ(this);return e&&e.getValue()}/** Create a spring that maps our value to another value */to(...e){return rb.to(this,e)}/** @deprecated Use the `to` method instead. */interpolate(...e){return oL(`${oD}The "interpolate" function is deprecated in v9 (use "to" instead)`),rb.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}/** Called when the first child is added. */_attach(){}/** Called when the last child is removed. */_detach(){}/** Tell our children about our new value */_onChange(e,t=!1){ox(this,{type:"change",parent:this,value:e,idle:t})}/** Tell our children about our new priority */_onPriorityChange(e){this.idle||r2.sort(this),ox(this,{type:"priority",parent:this,priority:e})}},iO=Symbol.for("SpringPhase"),iT=e=>(1&e[iO])>0,ij=e=>(2&e[iO])>0,iM=e=>(4&e[iO])>0,iA=(e,t)=>t?e[iO]|=3:e[iO]&=-3,iz=(e,t)=>t?e[iO]|=4:e[iO]&=-5,iD=class extends iN{constructor(e,t){if(super(),/** The animation state */this.animation=new iv,/** Some props have customizable default values */this.defaultProps={},/** The state for `runAsync` calls */this._state={paused:!1,delayed:!1,pauseQueue:/* @__PURE__ */new Set,resumeQueue:/* @__PURE__ */new Set,timeouts:/* @__PURE__ */new Set},/** The promise resolvers of pending `start` calls */this._pendingCalls=/* @__PURE__ */new Set,/** The counter for tracking `scheduleProps` calls */this._lastCallId=0,/** The last `scheduleProps` call that changed the `to` prop */this._lastToId=0,this._memoizedDuration=0,!r$.und(e)||!r$.und(t)){let n=r$.obj(e)?{...e}:{...t,from:e};r$.und(n.default)&&(n.default=!0),this.start(n)}}/** Equals true when not advancing on each frame. */get idle(){return!(ij(this)||this._state.asyncTo)||iM(this)}get goal(){return ob(this.animation.to)}get velocity(){let e=oQ(this);return e instanceof oJ?e.lastVelocity||0:e.getPayload().map(e=>e.lastVelocity||0)}/**
   * When true, this value has been animated at least once.
   */get hasAnimated(){return iT(this)}/**
   * When true, this value has an unfinished animation,
   * which is either active or paused.
   */get isAnimating(){return ij(this)}/**
   * When true, all current and future animations are paused.
   */get isPaused(){return iM(this)}/**
   *
   *
   */get isDelayed(){return this._state.delayed}/** Advance the current animation by a number of milliseconds */advance(e){let t=!0,n=!1,r=this.animation,{toValues:o}=r,{config:i}=r,a=oX(r.to);!a&&oy(r.to)&&(o=rB(ob(r.to))),r.values.forEach((l,s)=>{if(l.done)return;let u=l.constructor==o0?1:a?a[s].lastPosition:o[s],c=r.immediate,d=u;if(!c){let t;if(d=l.lastPosition,i.tension<=0){l.done=!0;return}let n=l.elapsedTime+=e,o=r.fromValues[s],a=null!=l.v0?l.v0:l.v0=r$.arr(i.velocity)?i.velocity[s]:i.velocity,f=i.precision||(o==u?.005:Math.min(1,.001*Math.abs(u-o)));if(r$.und(i.duration)){if(i.decay){let e=!0===i.decay?.998:i.decay,r=Math.exp(-(1-e)*n);d=o+a/(1-e)*(1-r),c=Math.abs(l.lastPosition-d)<=f,t=a*r}else{t=null==l.lastVelocity?a:l.lastVelocity;let n=i.restVelocity||f/10,r=i.clamp?0:i.bounce,s=!r$.und(r),p=o==u?l.v0>0:o<u,h=Math.ceil(e/1);for(let e=0;e<h&&!(!(Math.abs(t)>n)&&(c=Math.abs(u-d)<=f));++e){s&&(d==u||d>u==p)&&(t=-t*r,d=u);let e=-(1e-6*i.tension)*(d-u),n=-(.001*i.friction)*t,o=(e+n)/i.mass;t+=1*o,d+=1*t}}}else{let r=1;i.duration>0&&(this._memoizedDuration!==i.duration&&(this._memoizedDuration=i.duration,l.durationProgress>0&&(l.elapsedTime=i.duration*l.durationProgress,n=l.elapsedTime+=e)),r=(r=(i.progress||0)+n/this._memoizedDuration)>1?1:r<0?0:r,l.durationProgress=r),t=((d=o+i.easing(r)*(u-o))-l.lastPosition)/e,c=1==r}l.lastVelocity=t,Number.isNaN(d)&&(console.warn("Got NaN while animating:",this),c=!0)}a&&!a[s].done&&(c=!1),c?l.done=!0:t=!1,l.setValue(d,i.round)&&(n=!0)});let l=oQ(this),s=l.getValue();if(t){let e=ob(r.to);(s!==e||n)&&!i.decay?(l.setValue(e),this._onChange(e)):n&&i.decay&&this._onChange(s),this._stop()}else n&&this._onChange(s)}/** Set the current value, while stopping the current animation */set(e){return rx.batchedUpdates(()=>{this._stop(),this._focus(e),this._set(e)}),this}/**
   * Freeze the active animation in time, as well as any updates merged
   * before `resume` is called.
   */pause(){this._update({pause:!0})}/** Resume the animation if paused. */resume(){this._update({pause:!1})}/** Skip to the end of the current animation. */finish(){if(ij(this)){let{to:e,config:t}=this.animation;rx.batchedUpdates(()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()})}return this}/** Push props into the pending queue. */update(e){let t=this.queue||(this.queue=[]);return t.push(e),this}start(e,t){let n;return r$.und(e)?(n=this.queue||[],this.queue=[]):n=[r$.obj(e)?e:{...t,to:e}],Promise.all(n.map(e=>{let t=this._update(e);return t})).then(e=>ib(this,e))}/**
   * Stop the current animation, and cancel any delayed updates.
   *
   * Pass `true` to call `onRest` with `cancelled: true`.
   */stop(e){let{to:t}=this.animation;return this._focus(this.get()),iE(this._state,e&&this._lastCallId),rx.batchedUpdates(()=>this._stop(t,e)),this}/** Restart the animation. */reset(){this._update({reset:!0})}/** @internal */eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}/**
   * Parse the `to` and `from` range from the given `props` object.
   *
   * This also ensures the initial value is available to animated components
   * during the render phase.
   */_prepareNode(e){let t=this.key||"",{to:n,from:r}=e;(null==(n=r$.obj(n)?n[t]:n)||id(n))&&(n=void 0),null==(r=r$.obj(r)?r[t]:r)&&(r=void 0);let o={to:n,from:r};return iT(this)||(e.reverse&&([n,r]=[r,n]),r=ob(r),r$.und(r)?oQ(this)||this._set(n):this._set(r)),o}/** Every update is processed by this method before merging. */_update({...e},t){let{key:n,defaultProps:r}=this;e.default&&Object.assign(r,ia(e,(e,t)=>/^on/.test(t)?ir(e,n):e)),iU(this,e,"onProps"),iW(this,"onProps",e,this);let o=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");let i=this._state;return iy(++this._lastCallId,{key:n,props:e,defaultProps:r,state:i,actions:{pause:()=>{iM(this)||(iz(this,!0),rY(i.pauseQueue),iW(this,"onPause",ix(this,iI(this,this.animation.to)),this))},resume:()=>{iM(this)&&(iz(this,!1),ij(this)&&this._resume(),rY(i.resumeQueue),iW(this,"onResume",ix(this,iI(this,this.animation.to)),this))},start:this._merge.bind(this,o)}}).then(n=>{if(e.loop&&n.finished&&!(t&&n.noop)){let t=iL(e);if(t)return this._update(t,!0)}return n})}/** Merge props into the current animation */_merge(e,t,n){if(t.cancel)return this.stop(!0),n(ik(this));let r=!r$.und(e.to),o=!r$.und(e.from);if(r||o){if(!(t.callId>this._lastToId))return n(ik(this));this._lastToId=t.callId}let{key:i,defaultProps:a,animation:l}=this,{to:s,from:u}=l,{to:c=s,from:d=u}=e;o&&!r&&(!t.default||r$.und(c))&&(c=d),t.reverse&&([c,d]=[d,c]);let f=!rV(d,u);f&&(l.from=d),d=ob(d);let p=!rV(c,s);p&&this._focus(c);let h=id(t.to),{config:m}=l,{decay:g,velocity:v}=m;(r||o)&&(m.velocity=0),t.config&&!h&&function(e,t,n){for(let r in n&&(im(n={...n},t),t={...n,...t}),im(e,t),Object.assign(e,t),ip)null==e[r]&&(e[r]=ip[r]);let{frequency:r,damping:o}=e,{mass:i}=e;r$.und(r)||(r<.01&&(r=.01),o<0&&(o=0),e.tension=Math.pow(2*Math.PI/r,2)*i,e.friction=4*Math.PI*o*i/r)}(m,ie(t.config,i),t.config!==a.config?ie(a.config,i):void 0);let y=oQ(this);if(!y||r$.und(c))return n(ix(this,!0));let b=r$.und(t.reset)?o&&!t.default:!r$.und(d)&&it(t.reset,i),w=b?d:this.get(),x=ic(c),k=r$.num(x)||r$.arr(x)||o$(x),S=!h&&(!k||it(a.immediate||t.immediate,i));if(p){let e=o5(c);if(e!==y.constructor){if(S)y=this._set(x);else throw Error(`Cannot animate between ${y.constructor.name} and ${e.name}, as the "to" prop suggests`)}}let E=y.constructor,_=oy(c),C=!1;if(!_){let e=b||!iT(this)&&f;(p||e)&&(_=!(C=rV(ic(w),x))),(rV(l.immediate,S)||S)&&rV(m.decay,g)&&rV(m.velocity,v)||(_=!0)}if(C&&ij(this)&&(l.changed&&!b?_=!0:_||this._stop(s)),!h&&((_||oy(s))&&(l.values=y.getPayload(),l.toValues=oy(c)?null:E==o0?[1]:rB(x)),l.immediate==S||(l.immediate=S,S||b||this._set(s)),_)){let{onRest:e}=l;rU(iV,e=>iU(this,t,e));let r=ix(this,iI(this,s));rY(this._pendingCalls,r),this._pendingCalls.add(n),l.changed&&rx.batchedUpdates(()=>{l.changed=!b,e?.(r,this),b?ie(a.onRest,r):l.onStart?.(r,this)})}b&&this._set(w),h?n(iS(t.to,t,this._state,this)):_?this._start():ij(this)&&!p?this._pendingCalls.add(n):n(iw(w))}/** Update the `animation.to` value, which might be a `FluidValue` */_focus(e){let t=this.animation;e!==t.to&&(ow(this)&&this._detach(),t.to=e,ow(this)&&this._attach())}_attach(){let e=0,{to:t}=this.animation;oy(t)&&(oE(t,this),iP(t)&&(e=t.priority+1)),this.priority=e}_detach(){let{to:e}=this.animation;oy(e)&&o_(e,this)}/**
   * Update the current value from outside the frameloop,
   * and return the `Animated` node.
   */_set(e,t=!0){let n=ob(e);if(!r$.und(n)){let e=oQ(this);if(!e||!rV(n,e.getValue())){let r=o5(n);e&&e.constructor==r?e.setValue(n):oK(this,r.create(n)),e&&rx.batchedUpdates(()=>{this._onChange(n,t)})}}return oQ(this)}_onStart(){let e=this.animation;e.changed||(e.changed=!0,iW(this,"onStart",ix(this,iI(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),ie(this.animation.onChange,e,this)),ie(this.defaultProps.onChange,e,this),super._onChange(e,t)}// This method resets the animation state (even if already animating) to
// ensure the latest from/to range is used, and it also ensures this spring
// is added to the frameloop.
_start(){let e=this.animation;oQ(this).reset(ob(e.to)),e.immediate||(e.fromValues=e.values.map(e=>e.lastPosition)),ij(this)||(iA(this,!0),iM(this)||this._resume())}_resume(){rb.skipAnimation?this.finish():r2.start(this)}/**
   * Exit the frameloop and notify `onRest` listeners.
   *
   * Always wrap `_stop` calls with `batchedUpdates`.
   */_stop(e,t){if(ij(this)){iA(this,!1);let n=this.animation;rU(n.values,e=>{e.done=!0}),n.toValues&&(n.onChange=n.onPause=n.onResume=void 0),ox(this,{type:"idle",parent:this});let r=t?ik(this.get()):ix(this.get(),iI(this,e??n.to));rY(this._pendingCalls,r),n.changed&&(n.changed=!1,iW(this,"onRest",r,this))}}};function iI(e,t){let n=ic(t),r=ic(e.get());return rV(r,n)}function iL(e,t=e.loop,n=e.to){let r=ie(t);if(r){let o=!0!==r&&iu(r),i=(o||e).reverse,a=!o||o.reset;return iF({...e,loop:t,// Avoid updating default props when looping.
default:!1,// Never loop the `pause` prop.
pause:void 0,// For the "reverse" prop to loop as expected, the "to" prop
// must be undefined. The "reverse" prop is ignored when the
// "to" prop is an array or function.
to:!i||id(n)?n:void 0,// Ignore the "from" prop except on reset.
from:a?e.from:void 0,reset:a,// The "loop" prop can return a "useSpring" props object to
// override any of the original props.
...o})}}function iF(e){let{to:t,from:n}=e=iu(e),r=/* @__PURE__ */new Set;return r$.obj(t)&&i$(t,r),r$.obj(n)&&i$(n,r),e.keys=r.size?Array.from(r):null,e}function i$(e,t){rW(e,(e,n)=>null!=e&&t.add(n))}var iV=["onStart","onRest","onChange","onPause","onResume"];function iU(e,t,n){e.animation[n]=t[n]!==io(t,n)?ir(t[n],e.key):void 0}function iW(e,t,...n){e.animation[t]?.(...n),e.defaultProps[t]?.(...n)}var iB=["onStart","onChange","onRest"],iH=1,iY=class{constructor(e,t){this.id=iH++,/** The animated values */this.springs={},/** The queue of props passed to the `update` method. */this.queue=[],/** The counter for tracking `scheduleProps` calls */this._lastAsyncId=0,/** The values currently being animated */this._active=/* @__PURE__ */new Set,/** The values that changed recently */this._changed=/* @__PURE__ */new Set,/** Equals false when `onStart` listeners can be called */this._started=!1,/** State used by the `runAsync` function */this._state={paused:!1,pauseQueue:/* @__PURE__ */new Set,resumeQueue:/* @__PURE__ */new Set,timeouts:/* @__PURE__ */new Set},/** The event queues that are flushed once per frame maximum */this._events={onStart:/* @__PURE__ */new Map,onChange:/* @__PURE__ */new Map,onRest:/* @__PURE__ */new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start({default:!0,...e})}/**
   * Equals `true` when no spring values are in the frameloop, and
   * no async animation is currently active.
   */get idle(){return!this._state.asyncTo&&Object.values(this.springs).every(e=>e.idle&&!e.isDelayed&&!e.isPaused)}get item(){return this._item}set item(e){this._item=e}/** Get the current values of our springs */get(){let e={};return this.each((t,n)=>e[n]=t.get()),e}/** Set the current values without animating. */set(e){for(let t in e){let n=e[t];r$.und(n)||this.springs[t].set(n)}}/** Push an update onto the queue of each value. */update(e){return e&&this.queue.push(iF(e)),this}/**
   * Start the queued animations for every spring, and resolve the returned
   * promise once all queued animations have finished or been cancelled.
   *
   * When you pass a queue (instead of nothing), that queue is used instead of
   * the queued animations added with the `update` method, which are left alone.
   */start(e){let{queue:t}=this;return(e?t=rB(e).map(iF):this.queue=[],this._flush)?this._flush(this,t):(iJ(this,t),iq(this,t))}/** @internal */stop(e,t){if(!!e!==e&&(t=e),t){let n=this.springs;rU(rB(t),t=>n[t].stop(!!e))}else iE(this._state,this._lastAsyncId),this.each(t=>t.stop(!!e));return this}/** Freeze the active animation in time */pause(e){if(r$.und(e))this.start({pause:!0});else{let t=this.springs;rU(rB(e),e=>t[e].pause())}return this}/** Resume the animation if paused. */resume(e){if(r$.und(e))this.start({pause:!1});else{let t=this.springs;rU(rB(e),e=>t[e].resume())}return this}/** Call a function once per spring value */each(e){rW(this.springs,e)}/** @internal Called at the end of every animation frame */_onFrame(){let{onStart:e,onChange:t,onRest:n}=this._events,r=this._active.size>0,o=this._changed.size>0;(r&&!this._started||o&&!this._started)&&(this._started=!0,rH(e,([e,t])=>{t.value=this.get(),e(t,this,this._item)}));let i=!r&&this._started,a=o||i&&n.size?this.get():null;o&&t.size&&rH(t,([e,t])=>{t.value=a,e(t,this,this._item)}),i&&(this._started=!1,rH(n,([e,t])=>{t.value=a,e(t,this,this._item)}))}/** @internal */eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}rx.onFrame(this._onFrame)}};function iq(e,t){return Promise.all(t.map(t=>iG(e,t))).then(t=>ib(e,t))}async function iG(e,t,n){let{keys:r,to:o,from:i,loop:a,onRest:l,onResolve:s}=t,u=r$.obj(t.default)&&t.default;a&&(t.loop=!1),!1===o&&(t.to=null),!1===i&&(t.from=null);let c=r$.arr(o)||r$.fun(o)?o:void 0;c?(t.to=void 0,t.onRest=void 0,u&&(u.onRest=void 0)):rU(iB,n=>{let r=t[n];if(r$.fun(r)){let o=e._events[n];t[n]=({finished:e,cancelled:t})=>{let n=o.get(r);n?(e||(n.finished=!1),t&&(n.cancelled=!0)):o.set(r,{value:null,finished:e||!1,cancelled:t||!1})},u&&(u[n]=t[n])}});let d=e._state;!d.paused===t.pause?(d.paused=t.pause,rY(t.pause?d.pauseQueue:d.resumeQueue)):d.paused&&(t.pause=!0);let f=(r||Object.keys(e.springs)).map(n=>e.springs[n].start(t)),p=!0===t.cancel||!0===io(t,"cancel");(c||p&&d.asyncId)&&f.push(iy(++e._lastAsyncId,{props:t,state:d,actions:{pause:rL,resume:rL,start(t,n){p?(iE(d,e._lastAsyncId),n(ik(e))):(t.onRest=l,n(iS(c,t,d,e)))}}})),d.paused&&await new Promise(e=>{d.resumeQueue.add(e)});let h=ib(e,await Promise.all(f));if(a&&h.finished&&!(n&&h.noop)){let n=iL(t,a,o);if(n)return iJ(e,[n]),iG(e,n,!0)}return s&&rx.batchedUpdates(()=>s(h,e,e.item)),h}function iQ(e,t){let n={...e.springs};return t&&rU(rB(t),e=>{r$.und(e.keys)&&(e=iF(e)),r$.obj(e.to)||(e={...e,to:void 0}),iZ(n,e,e=>iX(e))}),iK(e,n),n}function iK(e,t){rW(t,(t,n)=>{e.springs[n]||(e.springs[n]=t,oE(t,e))})}function iX(e,t){let n=new iD;return n.key=e,t&&oE(n,t),n}function iZ(e,t,n){t.keys&&rU(t.keys,r=>{let o=e[r]||(e[r]=n(r));o._prepareNode(t)})}function iJ(e,t){rU(t,t=>{iZ(e.springs,t,t=>iX(t,e))})}var i0=({children:e,...t})=>{let n=(0,R.useContext)(i1),r=t.pause||!!n.pause,o=t.immediate||!!n.immediate;t=function(e,t){let[n]=(0,R.useState)(()=>({inputs:t,result:e()})),r=(0,R.useRef)(),o=r.current,i=o;if(i){let n=!!(t&&i.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}(t,i.inputs));n||(i={inputs:t,result:e()})}else i=n;return(0,R.useEffect)(()=>{r.current=i,o==n&&(n.inputs=n.result=void 0)},[i]),i.result}(()=>({pause:r,immediate:o}),[r,o]);let{Provider:i}=i1;return /* @__PURE__ */R.createElement(i,{value:t},e)},i1=(Object.assign(i0,R.createContext({})),i0.Provider._context=i0,i0.Consumer._context=i0,i0);i0.Provider=i1.Provider,i0.Consumer=i1.Consumer;var i2=()=>{let e=[],t=function(t){oF(`${oD}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);let r=[];return rU(e,(e,o)=>{if(r$.und(t))r.push(e.start());else{let i=n(t,e,o);i&&r.push(e.start(i))}}),r};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){let n=e.indexOf(t);~n&&e.splice(n,1)},t.pause=function(){return rU(e,e=>e.pause(...arguments)),this},t.resume=function(){return rU(e,e=>e.resume(...arguments)),this},t.set=function(t){rU(e,(e,n)=>{let r=r$.fun(t)?t(n,e):t;r&&e.set(r)})},t.start=function(t){let n=[];return rU(e,(e,r)=>{if(r$.und(t))n.push(e.start());else{let o=this._getProps(t,e,r);o&&n.push(e.start(o))}}),n},t.stop=function(){return rU(e,e=>e.stop(...arguments)),this},t.update=function(t){return rU(e,(e,n)=>e.update(this._getProps(t,e,n))),this};let n=function(e,t,n){return r$.fun(e)?e(n,t):e};return t._getProps=n,t},i3=class extends iN{constructor(e,t){super(),this.source=e,/** Equals false when in the frameloop */this.idle=!0,/** The inputs which are currently animating */this._active=/* @__PURE__ */new Set,this.calc=om(...t);let n=this._get(),r=o5(n);oK(this,r.create(n))}advance(e){let t=this._get(),n=this.get();rV(t,n)||(oQ(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&i5(this._active)&&i8(this)}_get(){let e=r$.arr(this.source)?this.source.map(ob):rB(ob(this.source));return this.calc(...e)}_start(){this.idle&&!i5(this._active)&&(this.idle=!1,rU(oX(this),e=>{e.done=!1}),rb.skipAnimation?(rx.batchedUpdates(()=>this.advance()),i8(this)):r2.start(this))}// Observe our sources only when we're observed.
_attach(){let e=1;rU(rB(this.source),t=>{oy(t)&&oE(t,this),iP(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))}),this.priority=e,this._start()}// Stop observing our sources once we have no observers.
_detach(){rU(rB(this.source),e=>{oy(e)&&o_(e,this)}),this._active.clear(),i8(this)}/** @internal */eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=rB(this.source).reduce((e,t)=>Math.max(e,(iP(t)?t.priority:0)+1),0))}};function i4(e){return!1!==e.idle}function i5(e){return!e.size||Array.from(e).every(i4)}function i8(e){e.idle||(e.idle=!0,rU(oX(e),e=>{e.done=!0}),ox(e,{type:"idle",parent:e}))}rb.assign({createStringInterpolator:oz,to:(e,t)=>new i3(e,t)}),r2.advance;// src/applyAnimatedValues.ts
var i6=/^--/,i9={},i7={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,// SVG-related properties
fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ae=(e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1),at=["Webkit","Ms","Moz","O"];i7=Object.keys(i7).reduce((e,t)=>(at.forEach(n=>e[ae(n,t)]=e[t]),e),i7);var an=/^(matrix|translate|scale|rotate|skew)/,ar=/^(translate)/,ao=/^(rotate|skew)/,ai=(e,t)=>r$.num(e)&&0!==e?e+t:e,aa=(e,t)=>r$.arr(e)?e.every(e=>aa(e,t)):r$.num(e)?e===t:parseFloat(e)===t,al=class extends o2{constructor({x:e,y:t,z:n,...r}){let o=[],i=[];(e||t||n)&&(o.push([e||0,t||0,n||0]),i.push(e=>[`translate3d(${e.map(e=>ai(e,"px")).join(",")})`,// prettier-ignore
    aa(e,0)])),rW(r,(e,t)=>{if("transform"===t)o.push([e||""]),i.push(e=>[e,""===e]);else if(an.test(t)){if(delete r[t],r$.und(e))return;let n=ar.test(t)?"px":ao.test(t)?"deg":"";o.push(rB(e)),i.push("rotate3d"===t?([e,t,r,o])=>[`rotate3d(${e},${t},${r},${ai(o,n)})`,aa(o,0)]:e=>[`${t}(${e.map(e=>ai(e,n)).join(",")})`,aa(e,t.startsWith("scale")?1:0)])}}),o.length&&(r.transform=new as(o,i)),super(r)}},as=class extends ok{constructor(e,t){super(),this.inputs=e,this.transforms=t,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return rU(this.inputs,(n,r)=>{let o=ob(n[0]),[i,a]=this.transforms[r](r$.arr(o)?o:n.map(ob));e+=" "+i,t=t&&a}),t?"none":e}// Start observing our inputs once we have an observer.
observerAdded(e){1==e&&rU(this.inputs,e=>rU(e,e=>oy(e)&&oE(e,this)))}// Stop observing our inputs once we have no observers.
observerRemoved(e){0==e&&rU(this.inputs,e=>rU(e,e=>oy(e)&&o_(e,this)))}eventObserved(e){"change"==e.type&&(this._value=null),ox(this,e)}};rb.assign({batchedUpdates:P.unstable_batchedUpdates,createStringInterpolator:oz,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});var au=((e,{applyAnimatedValues:t=()=>!1,createAnimatedStyle:n=e=>new o2(e),getComponentProps:r=e=>e}={})=>{let o={applyAnimatedValues:t,createAnimatedStyle:n,getComponentProps:r},i=e=>{let t=o7(e)||"Anonymous";return(e=r$.str(e)?i[e]||(i[e]=o8(e,o)):e[o9]||(e[o9]=o8(e,o))).displayName=`Animated(${t})`,e};return rW(e,(t,n)=>{r$.arr(e)&&(n=o7(t)),i[n]=i(t)}),{animated:i}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr",// SVG
"circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;let n="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,{style:r,children:o,scrollTop:i,scrollLeft:a,viewBox:l,...s}=t,u=Object.values(s),c=Object.keys(s).map(t=>n||e.hasAttribute(t)?t:i9[t]||(i9[t]=t.replace(/([A-Z])/g,e=>"-"+e.toLowerCase())));for(let t in void 0!==o&&(e.textContent=o),r)if(r.hasOwnProperty(t)){var d;let n=null==(d=r[t])||"boolean"==typeof d||""===d?"":"number"!=typeof d||0===d||i6.test(t)||i7.hasOwnProperty(t)&&i7[t]?(""+d).trim():d+"px";i6.test(t)?e.style.setProperty(t,n):e.style[t]=n}c.forEach((t,n)=>{e.setAttribute(t,u[n])}),void 0!==i&&(e.scrollTop=i),void 0!==a&&(e.scrollLeft=a),void 0!==l&&e.setAttribute("viewBox",l)},createAnimatedStyle:e=>new al(e),// eslint-disable-next-line @typescript-eslint/no-unused-vars
getComponentProps:({scrollTop:e,scrollLeft:t,...n})=>n}).animated,R=(_("exYeM"),_("exYeM"),_("exYeM"));let ac=["top","right","bottom","left"],ad=Math.min,af=Math.max,ap=Math.round,ah=Math.floor,am=e=>({x:e,y:e}),ag={left:"right",right:"left",bottom:"top",top:"bottom"},av={start:"end",end:"start"};function ay(e,t){return"function"==typeof e?e(t):e}function ab(e){return e.split("-")[0]}function aw(e){return e.split("-")[1]}function ax(e){return"x"===e?"y":"x"}function ak(e){return"y"===e?"height":"width"}function aS(e){return["top","bottom"].includes(ab(e))?"y":"x"}function aE(e){return e.replace(/start|end/g,e=>av[e])}function a_(e){return e.replace(/left|right|bottom|top/g,e=>ag[e])}function aC(e){return"number"!=typeof e?{top:0,right:0,bottom:0,left:0,...e}:{top:e,right:e,bottom:e,left:e}}function aP(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function aR(e,t,n){let r,{reference:o,floating:i}=e,a=aS(t),l=ax(aS(t)),s=ak(l),u=ab(t),c="y"===a,d=o.x+o.width/2-i.width/2,f=o.y+o.height/2-i.height/2,p=o[s]/2-i[s]/2;switch(u){case"top":r={x:d,y:o.y-i.height};break;case"bottom":r={x:d,y:o.y+o.height};break;case"right":r={x:o.x+o.width,y:f};break;case"left":r={x:o.x-i.width,y:f};break;default:r={x:o.x,y:o.y}}switch(aw(t)){case"start":r[l]-=p*(n&&c?-1:1);break;case"end":r[l]+=p*(n&&c?-1:1)}return r}/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a reference element when it is given a certain positioning strategy.
 *
 * This export does not have any `platform` interface logic. You will need to
 * write one for the platform you are using Floating UI with.
 */let aN=async(e,t,n)=>{let{placement:r="bottom",strategy:o="absolute",middleware:i=[],platform:a}=n,l=i.filter(Boolean),s=await (null==a.isRTL?void 0:a.isRTL(t)),u=await a.getElementRects({reference:e,floating:t,strategy:o}),{x:c,y:d}=aR(u,r,s),f=r,p={},h=0;for(let n=0;n<l.length;n++){let{name:i,fn:m}=l[n],{x:g,y:v,data:y,reset:b}=await m({x:c,y:d,initialPlacement:r,placement:f,strategy:o,middlewareData:p,rects:u,platform:a,elements:{reference:e,floating:t}});if(c=null!=g?g:c,d=null!=v?v:d,p={...p,[i]:{...p[i],...y}},b&&h<=50){h++,"object"==typeof b&&(b.placement&&(f=b.placement),b.rects&&(u=!0===b.rects?await a.getElementRects({reference:e,floating:t,strategy:o}):b.rects),{x:c,y:d}=aR(u,f,s)),n=-1;continue}}return{x:c,y:d,placement:f,strategy:o,middlewareData:p}};/**
 * Resolves with an object of overflow side offsets that determine how much the
 * element is overflowing a given clipping boundary on each side.
 * - positive = overflowing the boundary by that number of pixels
 * - negative = how many pixels left before it will overflow
 * - 0 = lies flush with the boundary
 * @see https://floating-ui.com/docs/detectOverflow
 */async function aO(e,t){var n;void 0===t&&(t={});let{x:r,y:o,platform:i,rects:a,elements:l,strategy:s}=e,{boundary:u="clippingAncestors",rootBoundary:c="viewport",elementContext:d="floating",altBoundary:f=!1,padding:p=0}=ay(t,e),h=aC(p),m=l[f?"floating"===d?"reference":"floating":d],g=aP(await i.getClippingRect({element:null==(n=await (null==i.isElement?void 0:i.isElement(m)))||n?m:m.contextElement||await (null==i.getDocumentElement?void 0:i.getDocumentElement(l.floating)),boundary:u,rootBoundary:c,strategy:s})),v="floating"===d?{...a.floating,x:r,y:o}:a.reference,y=await (null==i.getOffsetParent?void 0:i.getOffsetParent(l.floating)),b=await (null==i.isElement?void 0:i.isElement(y))&&await (null==i.getScale?void 0:i.getScale(y))||{x:1,y:1},w=aP(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({rect:v,offsetParent:y,strategy:s}):v);return{top:(g.top-w.top+h.top)/b.y,bottom:(w.bottom-g.bottom+h.bottom)/b.y,left:(g.left-w.left+h.left)/b.x,right:(w.right-g.right+h.right)/b.x}}/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * @see https://floating-ui.com/docs/arrow
 */let aT=e=>({name:"arrow",options:e,async fn(t){let{x:n,y:r,placement:o,rects:i,platform:a,elements:l,middlewareData:s}=t,{element:u,padding:c=0}=ay(e,t)||{};if(null==u)return{};let d=aC(c),f={x:n,y:r},p=ax(aS(o)),h=ak(p),m=await a.getDimensions(u),g="y"===p,v=g?"clientHeight":"clientWidth",y=i.reference[h]+i.reference[p]-f[p]-i.floating[h],b=f[p]-i.reference[p],w=await (null==a.getOffsetParent?void 0:a.getOffsetParent(u)),x=w?w[v]:0;// DOM platform can return `window` as the `offsetParent`.
    x&&await (null==a.isElement?void 0:a.isElement(w))||(x=l.floating[v]||i.floating[h]);// If the padding is large enough that it causes the arrow to no longer be
    // centered, modify the padding so that it is centered.
    let k=x/2-m[h]/2-1,S=ad(d[g?"top":"left"],k),E=ad(d[g?"bottom":"right"],k),_=x-m[h]-E,C=x/2-m[h]/2+(y/2-b/2),P=af(S,ad(C,_)),R=!s.arrow&&null!=aw(o)&&C!=P&&i.reference[h]/2-(C<S?S:E)-m[h]/2<0,N=R?C<S?C-S:C-_:0;return{[p]:f[p]+N,data:{[p]:P,centerOffset:C-P-N,...R&&{alignmentOffset:N}},reset:R}}});function aj(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function aM(e){return ac.some(t=>e[t]>=0)}// For type backwards-compatibility, the `OffsetOptions` type was also
// Derivable.
async function aA(e,t){let{placement:n,platform:r,elements:o}=e,i=await (null==r.isRTL?void 0:r.isRTL(o.floating)),a=ab(n),l=aw(n),s="y"===aS(n),u=["left","top"].includes(a)?-1:1,c=i&&s?-1:1,d=ay(t,e),{mainAxis:f,crossAxis:p,alignmentAxis:h}="number"==typeof d?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return l&&"number"==typeof h&&(p="end"===l?-1*h:h),s?{x:p*c,y:f*u}:{x:f*u,y:p*c}}function az(e){return aL(e)?(e.nodeName||"").toLowerCase():"#document"}function aD(e){var t;return(null==e?void 0:null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function aI(e){var t;return null==(t=(aL(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function aL(e){return e instanceof Node||e instanceof aD(e).Node}function aF(e){return e instanceof Element||e instanceof aD(e).Element}function a$(e){return e instanceof HTMLElement||e instanceof aD(e).HTMLElement}function aV(e){return(// Browsers without `ShadowRoot` support.
"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof aD(e).ShadowRoot))}function aU(e){let{overflow:t,overflowX:n,overflowY:r,display:o}=aY(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(o)}function aW(e){let t=aB(),n=aY(e);// https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!t&&!!n.backdropFilter&&"none"!==n.backdropFilter||!t&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some(e=>(n.willChange||"").includes(e))||["paint","layout","strict","content"].some(e=>(n.contain||"").includes(e))}function aB(){return"undefined"!=typeof CSS&&!!CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")}function aH(e){return["html","body","#document"].includes(az(e))}function aY(e){return aD(e).getComputedStyle(e)}function aq(e){return aF(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function aG(e){if("html"===az(e))return e;let t=e.assignedSlot||// DOM Element detected.
e.parentNode||// ShadowRoot detected.
aV(e)&&e.host||// Fallback.
aI(e);return aV(t)?t.host:t}function aQ(e,t,n){var r;void 0===t&&(t=[]),void 0===n&&(n=!0);let o=function e(t){let n=aG(t);return aH(n)?t.ownerDocument?t.ownerDocument.body:t.body:a$(n)&&aU(n)?n:e(n)}(e),i=o===(null==(r=e.ownerDocument)?void 0:r.body),a=aD(o);return i?t.concat(a,a.visualViewport||[],aU(o)?o:[],a.frameElement&&n?aQ(a.frameElement):[]):t.concat(o,aQ(o,[],n))}function aK(e){let t=aY(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,o=a$(e),i=o?e.offsetWidth:n,a=o?e.offsetHeight:r,l=ap(n)!==i||ap(r)!==a;return l&&(n=i,r=a),{width:n,height:r,$:l}}function aX(e){return aF(e)?e:e.contextElement}function aZ(e){let t=aX(e);if(!a$(t))return am(1);let n=t.getBoundingClientRect(),{width:r,height:o,$:i}=aK(t),a=(i?ap(n.width):n.width)/r,l=(i?ap(n.height):n.height)/o;return a&&Number.isFinite(a)||(a=1),l&&Number.isFinite(l)||(l=1),{x:a,y:l}}let aJ=am(0);function a0(e){let t=aD(e);return aB()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:aJ}function a1(e,t,n,r){var o;void 0===t&&(t=!1),void 0===n&&(n=!1);let i=e.getBoundingClientRect(),a=aX(e),l=am(1);t&&(r?aF(r)&&(l=aZ(r)):l=aZ(e));let s=(void 0===(o=n)&&(o=!1),r&&(!o||r===aD(a))&&o)?a0(a):am(0),u=(i.left+s.x)/l.x,c=(i.top+s.y)/l.y,d=i.width/l.x,f=i.height/l.y;if(a){let e=aD(a),t=r&&aF(r)?aD(r):r,n=e.frameElement;for(;n&&r&&t!==e;){let e=aZ(n),t=n.getBoundingClientRect(),r=aY(n),o=t.left+(n.clientLeft+parseFloat(r.paddingLeft))*e.x,i=t.top+(n.clientTop+parseFloat(r.paddingTop))*e.y;u*=e.x,c*=e.y,d*=e.x,f*=e.y,u+=o,c+=i,n=aD(n).frameElement}}return aP({width:d,height:f,x:u,y:c})}function a2(e){// If <html> has a CSS width greater than the viewport, then this will be
// incorrect for RTL.
return a1(aI(e)).left+aq(e).scrollLeft}function a3(e,t,n){let r;if("viewport"===t)r=function(e,t){let n=aD(e),r=aI(e),o=n.visualViewport,i=r.clientWidth,a=r.clientHeight,l=0,s=0;if(o){i=o.width,a=o.height;let e=aB();(!e||e&&"fixed"===t)&&(l=o.offsetLeft,s=o.offsetTop)}return{width:i,height:a,x:l,y:s}}(e,n);else if("document"===t)r=// Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable.
function(e){let t=aI(e),n=aq(e),r=e.ownerDocument.body,o=af(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),i=af(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight),a=-n.scrollLeft+a2(e),l=-n.scrollTop;return"rtl"===aY(r).direction&&(a+=af(t.clientWidth,r.clientWidth)-o),{width:o,height:i,x:a,y:l}}(aI(e));else if(aF(t))r=// Returns the inner client rect, subtracting scrollbars if present.
function(e,t){let n=a1(e,!0,"fixed"===t),r=n.top+e.clientTop,o=n.left+e.clientLeft,i=a$(e)?aZ(e):am(1),a=e.clientWidth*i.x,l=e.clientHeight*i.y,s=o*i.x,u=r*i.y;return{width:a,height:l,x:s,y:u}}(t,n);else{let n=a0(e);r={...t,x:t.x-n.x,y:t.y-n.y}}return aP(r)}function a4(e,t){return a$(e)&&"fixed"!==aY(e).position?t?t(e):e.offsetParent:null}// Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.
function a5(e,t){let n=aD(e);if(!a$(e))return n;let r=a4(e,t);for(;r&&["table","td","th"].includes(az(r))&&"static"===aY(r).position;)r=a4(r,t);return r&&("html"===az(r)||"body"===az(r)&&"static"===aY(r).position&&!aW(r))?n:r||function(e){let t=aG(e);for(;a$(t)&&!aH(t);){if(aW(t))return t;t=aG(t)}return null}(e)||n}let a8=async function(e){let{reference:t,floating:n,strategy:r}=e,o=this.getOffsetParent||a5,i=this.getDimensions;return{reference:function(e,t,n){let r=a$(t),o=aI(t),i="fixed"===n,a=a1(e,!0,i,t),l={scrollLeft:0,scrollTop:0},s=am(0);if(r||!r&&!i){if(("body"!==az(t)||aU(o))&&(l=aq(t)),r){let e=a1(t,!0,i,t);s.x=e.x+t.clientLeft,s.y=e.y+t.clientTop}else o&&(s.x=a2(o))}return{x:a.left+l.scrollLeft-s.x,y:a.top+l.scrollTop-s.y,width:a.width,height:a.height}}(t,await o(n),r),floating:{x:0,y:0,...await i(n)}}},a6={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{rect:t,offsetParent:n,strategy:r}=e,o=a$(n),i=aI(n);if(n===i)return t;let a={scrollLeft:0,scrollTop:0},l=am(1),s=am(0);if((o||!o&&"fixed"!==r)&&(("body"!==az(n)||aU(i))&&(a=aq(n)),a$(n))){let e=a1(n);l=aZ(n),s.x=e.x+n.clientLeft,s.y=e.y+n.clientTop}return{width:t.width*l.x,height:t.height*l.y,x:t.x*l.x-a.scrollLeft*l.x+s.x,y:t.y*l.y-a.scrollTop*l.y+s.y}},getDocumentElement:aI,getClippingRect:// Gets the maximum area that the element is visible in due to any number of
// clipping ancestors.
function(e){let{element:t,boundary:n,rootBoundary:r,strategy:o}=e,i="clippingAncestors"===n?// A "clipping ancestor" is an `overflow` element with the characteristic of
// clipping (or hiding) child elements. This returns all clipping ancestors
// of the given element up the tree.
function(e,t){let n=t.get(e);if(n)return n;let r=aQ(e,[],!1).filter(e=>aF(e)&&"body"!==az(e)),o=null,i="fixed"===aY(e).position,a=i?aG(e):e;// https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
for(;aF(a)&&!aH(a);){let t=aY(a),n=aW(a);n||"fixed"!==t.position||(o=null);let l=i?!n&&!o:!n&&"static"===t.position&&!!o&&["absolute","fixed"].includes(o.position)||aU(a)&&!n&&function e(t,n){let r=aG(t);return!(r===n||!aF(r)||aH(r))&&("fixed"===aY(r).position||e(r,n))}(e,a);l?r=r.filter(e=>e!==a):o=t,a=aG(a)}return t.set(e,r),r}(t,this._c):[].concat(n),a=[...i,r],l=a[0],s=a.reduce((e,n)=>{let r=a3(t,n,o);return e.top=af(r.top,e.top),e.right=ad(r.right,e.right),e.bottom=ad(r.bottom,e.bottom),e.left=af(r.left,e.left),e},a3(t,l,o));return{width:s.right-s.left,height:s.bottom-s.top,x:s.left,y:s.top}},getOffsetParent:a5,getElementRects:a8,getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){return aK(e)},getScale:aZ,isElement:aF,isRTL:function(e){return"rtl"===aY(e).direction}},a9=(e,t,n)=>{// This caches the expensive `getClippingElementAncestors` function so that
// multiple lifecycle resets re-use the same result. It only lives for a
// single call. If other functions become expensive, we can add them as well.
let r=new Map,o={platform:a6,...n},i={...o.platform,_c:r};return aN(e,t,{...o,platform:i})};var R=_("exYeM");/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * This wraps the core `arrow` middleware to allow React refs as the element.
 * @see https://floating-ui.com/docs/arrow
 */let a7=e=>({name:"arrow",options:e,fn(t){let{element:n,padding:r}="function"==typeof e?e(t):e;if(n&&({}).hasOwnProperty.call(n,"current")){if(null!=n.current)return aT({element:n.current,padding:r}).fn(t)}else if(n)return aT({element:n,padding:r}).fn(t);return{}}});var le="undefined"!=typeof document?R.useLayoutEffect:R.useEffect;// Fork of `fast-deep-equal` that only does the comparisons we need and compares
// functions
function lt(e,t){let n,r,o;if(e===t)return!0;if(typeof e!=typeof t)return!1;if("function"==typeof e&&e.toString()===t.toString())return!0;if(e&&t&&"object"==typeof e){if(Array.isArray(e)){if((n=e.length)!=t.length)return!1;for(r=n;0!=r--;)if(!lt(e[r],t[r]))return!1;return!0}if((n=(o=Object.keys(e)).length)!==Object.keys(t).length)return!1;for(r=n;0!=r--;)if(!({}).hasOwnProperty.call(t,o[r]))return!1;for(r=n;0!=r--;){let n=o[r];if(("_owner"!==n||!e.$$typeof)&&!lt(e[n],t[n]))return!1}return!0}return e!=e&&t!=t}function ln(e){if("undefined"==typeof window)return 1;let t=e.ownerDocument.defaultView||window;return t.devicePixelRatio||1}function lr(e,t){let n=ln(e);return Math.round(t*n)/n}function lo(e){let t=R.useRef(e);return le(()=>{t.current=e}),t}var R=_("exYeM");let li=/*#__PURE__*/(0,R.forwardRef)((e,t)=>{let{children:n,width:r=10,height:o=5,...i}=e;return/*#__PURE__*/(0,R.createElement)(H.svg,M({},i,{ref:t,width:r,height:o,viewBox:"0 0 30 10",preserveAspectRatio:"none"}),e.asChild?n:/*#__PURE__*/(0,R.createElement)("polygon",{points:"0,0 30,0 15,10"}))});var R=_("exYeM");/* -------------------------------------------------------------------------------------------------
 * Popper
 * -----------------------------------------------------------------------------------------------*/let la="Popper",[ll,ls]=A(la),[lu,lc]=ll(la),ld=/*#__PURE__*/(0,R.forwardRef)((e,t)=>{let{__scopePopper:n,virtualRef:r,...o}=e,i=lc("PopperAnchor",n),a=(0,R.useRef)(null),l=D(t,a);return(0,R.useEffect)(()=>{// Consumer can anchor the popper to something that isn't
// a DOM node e.g. pointer position, so we override the
// `anchorRef` with their virtual ref in this case.
i.onAnchorChange((null==r?void 0:r.current)||a.current)}),r?null:/*#__PURE__*/(0,R.createElement)(H.div,M({},o,{ref:l}))}),lf="PopperContent",[lp,lh]=ll(lf),lm=/*#__PURE__*/(0,R.forwardRef)((e,t)=>{var n,r,o,i,a,l,s,u,c,d,f,p,h,m;let{__scopePopper:g,side:v="bottom",sideOffset:y=0,align:b="center",alignOffset:w=0,arrowPadding:x=0,avoidCollisions:k=!0,collisionBoundary:S=[],collisionPadding:E=0,sticky:_="partial",hideWhenDetached:C=!1,updatePositionStrategy:N="optimized",onPlaced:O,...T}=e,j=lc(lf,g),[A,z]=(0,R.useState)(null),I=D(t,e=>z(e)),[L,F]=(0,R.useState)(null),$=function(e){let[t,n]=(0,R.useState)(void 0);return q(()=>{if(e){// provide size as early as possible
n({width:e.offsetWidth,height:e.offsetHeight});let t=new ResizeObserver(t=>{let r,o;if(!Array.isArray(t)||!t.length)return;let i=t[0];if("borderBoxSize"in i){let e=i.borderBoxSize,t=Array.isArray(e)?e[0]:e;// iron out differences between browsers
r=t.inlineSize,o=t.blockSize}else // for browsers that don't support `borderBoxSize`
// we calculate it ourselves to get the correct border box.
r=e.offsetWidth,o=e.offsetHeight;n({width:r,height:o})});return t.observe(e,{box:"border-box"}),()=>t.unobserve(e)}n(void 0)},[e]),t}(L),V=null!==(n=null==$?void 0:$.width)&&void 0!==n?n:0,U=null!==(r=null==$?void 0:$.height)&&void 0!==r?r:0,B="number"==typeof E?E:{top:0,right:0,bottom:0,left:0,...E},Y=Array.isArray(S)?S:[S],G=Y.length>0,Q={padding:B,boundary:Y.filter(lv),// with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
altBoundary:G},{refs:K,floatingStyles:X,placement:Z,isPositioned:J,middlewareData:ee}=/**
 * Provides data to position a floating element.
 * @see https://floating-ui.com/docs/react
 */function(e){void 0===e&&(e={});let{placement:t="bottom",strategy:n="absolute",middleware:r=[],platform:o,elements:{reference:i,floating:a}={},transform:l=!0,whileElementsMounted:s,open:u}=e,[c,d]=R.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[f,p]=R.useState(r);lt(f,r)||p(r);let[h,m]=R.useState(null),[g,v]=R.useState(null),y=R.useCallback(e=>{e!=k.current&&(k.current=e,m(e))},[m]),b=R.useCallback(e=>{e!==S.current&&(S.current=e,v(e))},[v]),w=i||h,x=a||g,k=R.useRef(null),S=R.useRef(null),E=R.useRef(c),_=lo(s),C=lo(o),N=R.useCallback(()=>{if(!k.current||!S.current)return;let e={placement:t,strategy:n,middleware:f};C.current&&(e.platform=C.current),a9(k.current,S.current,e).then(e=>{let t={...e,isPositioned:!0};O.current&&!lt(E.current,t)&&(E.current=t,P.flushSync(()=>{d(t)}))})},[f,t,n,C]);le(()=>{!1===u&&E.current.isPositioned&&(E.current.isPositioned=!1,d(e=>({...e,isPositioned:!1})))},[u]);let O=R.useRef(!1);le(()=>(O.current=!0,()=>{O.current=!1}),[]),le(()=>{if(w&&(k.current=w),x&&(S.current=x),w&&x){if(_.current)return _.current(w,x,N);N()}},[w,x,N,_]);let T=R.useMemo(()=>({reference:k,floating:S,setReference:y,setFloating:b}),[y,b]),j=R.useMemo(()=>({reference:w,floating:x}),[w,x]),M=R.useMemo(()=>{let e={position:n,left:0,top:0};if(!j.floating)return e;let t=lr(j.floating,c.x),r=lr(j.floating,c.y);return l?{...e,transform:"translate("+t+"px, "+r+"px)",...ln(j.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:t,top:r}},[n,l,j.floating,c.x,c.y]);return R.useMemo(()=>({...c,update:N,refs:T,elements:j,floatingStyles:M}),[c,N,T,j,M])}({// default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
strategy:"fixed",placement:v+("center"!==b?"-"+b:""),whileElementsMounted:(...e)=>{let t=/**
 * Automatically updates the position of the floating element when necessary.
 * Should only be called when the floating element is mounted on the DOM or
 * visible on the screen.
 * @returns cleanup function that should be invoked when the floating element is
 * removed from the DOM or hidden from the screen.
 * @see https://floating-ui.com/docs/autoUpdate
 */function(e,t,n,r){let o;void 0===r&&(r={});let{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:l="function"==typeof ResizeObserver,layoutShift:s="function"==typeof IntersectionObserver,animationFrame:u=!1}=r,c=aX(e),d=i||a?[...c?aQ(c):[],...aQ(t)]:[];d.forEach(e=>{i&&e.addEventListener("scroll",n,{passive:!0}),a&&e.addEventListener("resize",n)});let f=c&&s?// https://samthor.au/2021/observing-dom/
function(e,t){let n,r=null,o=aI(e);function i(){clearTimeout(n),r&&r.disconnect(),r=null}return!function a(l,s){void 0===l&&(l=!1),void 0===s&&(s=1),i();let{left:u,top:c,width:d,height:f}=e.getBoundingClientRect();if(l||t(),!d||!f)return;let p=ah(c),h=ah(o.clientWidth-(u+d)),m=ah(o.clientHeight-(c+f)),g=ah(u),v={rootMargin:-p+"px "+-h+"px "+-m+"px "+-g+"px",threshold:af(0,ad(1,s))||1},y=!0;function b(e){let t=e[0].intersectionRatio;if(t!==s){if(!y)return a();t?a(!1,t):n=setTimeout(()=>{a(!1,1e-7)},100)}y=!1}// Older browsers don't support a `document` as the root and will throw an
// error.
try{r=new IntersectionObserver(b,{...v,// Handle <iframe>s
root:o.ownerDocument})}catch(e){r=new IntersectionObserver(b,v)}r.observe(e)}(!0),i}(c,n):null,p=-1,h=null;l&&(h=new ResizeObserver(e=>{let[r]=e;r&&r.target===c&&h&&(// Prevent update loops when using the `size` middleware.
// https://github.com/floating-ui/floating-ui/issues/1740
h.unobserve(t),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{h&&h.observe(t)})),n()}),c&&!u&&h.observe(c),h.observe(t));let m=u?a1(e):null;return u&&function t(){let r=a1(e);m&&(r.x!==m.x||r.y!==m.y||r.width!==m.width||r.height!==m.height)&&n(),m=r,o=requestAnimationFrame(t)}(),n(),()=>{d.forEach(e=>{i&&e.removeEventListener("scroll",n),a&&e.removeEventListener("resize",n)}),f&&f(),h&&h.disconnect(),h=null,u&&cancelAnimationFrame(o)}}(...e,{animationFrame:"always"===N});return t},elements:{reference:j.anchor},middleware:[{name:"offset",options:c={mainAxis:y+U,alignmentAxis:w},async fn(e){let{x:t,y:n}=e,r=await aA(e,c);return{x:t+r.x,y:n+r.y,data:r}}},k&&{name:"shift",options:f={mainAxis:!0,crossAxis:!1,limiter:"partial"===_?(void 0===d&&(d={}),{options:d,fn(e){let{x:t,y:n,placement:r,rects:o,middlewareData:i}=e,{offset:a=0,mainAxis:l=!0,crossAxis:s=!0}=ay(d,e),u={x:t,y:n},c=aS(r),f=ax(c),p=u[f],h=u[c],m=ay(a,e),g="number"==typeof m?{mainAxis:m,crossAxis:0}:{mainAxis:0,crossAxis:0,...m};if(l){let e="y"===f?"height":"width",t=o.reference[f]-o.floating[e]+g.mainAxis,n=o.reference[f]+o.reference[e]-g.mainAxis;p<t?p=t:p>n&&(p=n)}if(s){var v,y;let e="y"===f?"width":"height",t=["top","left"].includes(ab(r)),n=o.reference[c]-o.floating[e]+(t&&(null==(v=i.offset)?void 0:v[c])||0)+(t?0:g.crossAxis),a=o.reference[c]+o.reference[e]+(t?0:(null==(y=i.offset)?void 0:y[c])||0)-(t?g.crossAxis:0);h<n?h=n:h>a&&(h=a)}return{[f]:p,[c]:h}}}):void 0,...Q},async fn(e){let{x:t,y:n,placement:r}=e,{mainAxis:o=!0,crossAxis:i=!1,limiter:a={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...l}=ay(f,e),s={x:t,y:n},u=await aO(e,l),c=aS(ab(r)),d=ax(c),p=s[d],h=s[c];if(o){let e=p+u["y"===d?"top":"left"],t=p-u["y"===d?"bottom":"right"];p=af(e,ad(p,t))}if(i){let e="y"===c?"top":"left",t="y"===c?"bottom":"right",n=h+u[e],r=h-u[t];h=af(n,ad(h,r))}let m=a.fn({...e,[d]:p,[c]:h});return{...m,data:{x:m.x-t,y:m.y-n}}}},k&&{name:"flip",options:p={...Q},async fn(e){var t,n,r,o,i;let{placement:a,middlewareData:l,rects:s,initialPlacement:u,platform:c,elements:d}=e,{mainAxis:f=!0,crossAxis:h=!0,fallbackPlacements:m,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:v="none",flipAlignment:y=!0,...b}=ay(p,e);// If a reset by the arrow was caused due to an alignment offset being
// added, we should skip any logic now since `flip()` has already done its
// work.
// https://github.com/floating-ui/floating-ui/issues/2549#issuecomment-1719601643
if(null!=(t=l.arrow)&&t.alignmentOffset)return{};let w=ab(a),x=ab(u)===u,k=await (null==c.isRTL?void 0:c.isRTL(d.floating)),S=m||(x||!y?[a_(u)]:function(e){let t=a_(e);return[aE(e),t,aE(t)]}(u));m||"none"===v||S.push(...function(e,t,n,r){let o=aw(e),i=function(e,t,n){let r=["left","right"],o=["right","left"];switch(e){case"top":case"bottom":if(n)return t?o:r;return t?r:o;case"left":case"right":return t?["top","bottom"]:["bottom","top"];default:return[]}}(ab(e),"start"===n,r);return o&&(i=i.map(e=>e+"-"+o),t&&(i=i.concat(i.map(aE)))),i}(u,y,v,k));let E=[u,...S],_=await aO(e,b),C=[],P=(null==(n=l.flip)?void 0:n.overflows)||[];if(f&&C.push(_[w]),h){let e=function(e,t,n){void 0===n&&(n=!1);let r=aw(e),o=ax(aS(e)),i=ak(o),a="x"===o?r===(n?"end":"start")?"right":"left":"start"===r?"bottom":"top";return t.reference[i]>t.floating[i]&&(a=a_(a)),[a,a_(a)]}(a,s,k);C.push(_[e[0]],_[e[1]])}// One or more sides is overflowing.
if(P=[...P,{placement:a,overflows:C}],!C.every(e=>e<=0)){let e=((null==(r=l.flip)?void 0:r.index)||0)+1,t=E[e];if(t)return{data:{index:e,overflows:P},reset:{placement:t}};// First, find the candidates that fit on the mainAxis side of overflow,
// then find the placement that fits the best on the main crossAxis side.
let n=null==(o=P.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0])?void 0:o.placement;// Otherwise fallback.
if(!n)switch(g){case"bestFit":{let e=null==(i=P.map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0])?void 0:i[0];e&&(n=e);break}case"initialPlacement":n=u}if(a!==n)return{reset:{placement:n}}}return{}}},{name:"size",options:h={...Q,apply:({elements:e,rects:t,availableWidth:n,availableHeight:r})=>{let{width:o,height:i}=t.reference,a=e.floating.style;a.setProperty("--radix-popper-available-width",`${n}px`),a.setProperty("--radix-popper-available-height",`${r}px`),a.setProperty("--radix-popper-anchor-width",`${o}px`),a.setProperty("--radix-popper-anchor-height",`${i}px`)}},async fn(e){let t,n;let{placement:r,rects:o,platform:i,elements:a}=e,{apply:l=()=>{},...s}=ay(h,e),u=await aO(e,s),c=ab(r),d=aw(r),f="y"===aS(r),{width:p,height:m}=o.floating;"top"===c||"bottom"===c?(t=c,n=d===(await (null==i.isRTL?void 0:i.isRTL(a.floating))?"start":"end")?"left":"right"):(n=c,t="end"===d?"top":"bottom");let g=m-u[t],v=p-u[n],y=!e.middlewareData.shift,b=g,w=v;if(f){let e=p-u.left-u.right;w=d||y?ad(v,e):e}else{let e=m-u.top-u.bottom;b=d||y?ad(g,e):e}if(y&&!d){let e=af(u.left,0),t=af(u.right,0),n=af(u.top,0),r=af(u.bottom,0);f?w=p-2*(0!==e||0!==t?e+t:af(u.left,u.right)):b=m-2*(0!==n||0!==r?n+r:af(u.top,u.bottom))}await l({...e,availableWidth:w,availableHeight:b});let x=await i.getDimensions(a.floating);return p!==x.width||m!==x.height?{reset:{rects:!0}}:{}}},L&&a7({element:L,padding:x}),ly({arrowWidth:V,arrowHeight:U}),C&&{name:"hide",options:m={strategy:"referenceHidden",...Q},async fn(e){let{rects:t}=e,{strategy:n="referenceHidden",...r}=ay(m,e);switch(n){case"referenceHidden":{let n=await aO(e,{...r,elementContext:"reference"}),o=aj(n,t.reference);return{data:{referenceHiddenOffsets:o,referenceHidden:aM(o)}}}case"escaped":{let n=await aO(e,{...r,altBoundary:!0}),o=aj(n,t.floating);return{data:{escapedOffsets:o,escaped:aM(o)}}}default:return{}}}}]}),[et,en]=lb(Z),er=W(O);q(()=>{J&&(null==er||er())},[J,er]);let eo=null===(o=ee.arrow)||void 0===o?void 0:o.x,ei=null===(i=ee.arrow)||void 0===i?void 0:i.y,ea=(null===(a=ee.arrow)||void 0===a?void 0:a.centerOffset)!==0,[el,es]=(0,R.useState)();return q(()=>{A&&es(window.getComputedStyle(A).zIndex)},[A]),/*#__PURE__*/(0,R.createElement)("div",{ref:K.setFloating,"data-radix-popper-content-wrapper":"",style:{...X,transform:J?X.transform:"translate(0, -200%)",// keep off the page when measuring
minWidth:"max-content",zIndex:el,"--radix-popper-transform-origin":[null===(l=ee.transformOrigin)||void 0===l?void 0:l.x,null===(s=ee.transformOrigin)||void 0===s?void 0:s.y].join(" ")}// Floating UI interally calculates logical alignment based the `dir` attribute on
,dir:e.dir},/*#__PURE__*/(0,R.createElement)(lp,{scope:g,placedSide:et,onArrowChange:F,arrowX:eo,arrowY:ei,shouldHideArrow:ea},/*#__PURE__*/(0,R.createElement)(H.div,M({"data-side":et,"data-align":en},T,{ref:I,style:{...T.style,// if the PopperContent hasn't been placed yet (not all measurements done)
// we prevent animations so that users's animation don't kick in too early referring wrong sides
animation:J?void 0:"none",// hide the content if using the hide middleware and should be hidden
opacity:null!==(u=ee.hide)&&void 0!==u&&u.referenceHidden?0:void 0}}))))}),lg={top:"bottom",right:"left",bottom:"top",left:"right"};/* -----------------------------------------------------------------------------------------------*/function lv(e){return null!==e}let ly=e=>({name:"transformOrigin",options:e,fn(t){var n,r,o,i,a;let{placement:l,rects:s,middlewareData:u}=t,c=(null===(n=u.arrow)||void 0===n?void 0:n.centerOffset)!==0,d=c?0:e.arrowWidth,f=c?0:e.arrowHeight,[p,h]=lb(l),m={start:"0%",center:"50%",end:"100%"}[h],g=(null!==(r=null===(o=u.arrow)||void 0===o?void 0:o.x)&&void 0!==r?r:0)+d/2,v=(null!==(i=null===(a=u.arrow)||void 0===a?void 0:a.y)&&void 0!==i?i:0)+f/2,y="",b="";return"bottom"===p?(y=c?m:`${g}px`,b=`${-f}px`):"top"===p?(y=c?m:`${g}px`,b=`${s.floating.height+f}px`):"right"===p?(y=`${-f}px`,b=c?m:`${v}px`):"left"===p&&(y=`${s.floating.width+f}px`,b=c?m:`${v}px`),{data:{x:y,y:b}}}});function lb(e){let[t,n="center"]=e.split("-");return[t,n]}let lw=e=>{let{__scopePopper:t,children:n}=e,[r,o]=(0,R.useState)(null);return/*#__PURE__*/(0,R.createElement)(lu,{scope:t,anchor:r,onAnchorChange:o},n)},lx="Popover",[lk,lS]=A(lx,[ls]),lE=ls(),[l_,lC]=lk(lx),lP=/*#__PURE__*/(0,R.forwardRef)((e,t)=>{let{__scopePopover:n,...r}=e,o=lC("PopoverTrigger",n),i=lE(n),a=D(t,o.triggerRef),l=/*#__PURE__*/(0,R.createElement)(H.button,M({type:"button","aria-haspopup":"dialog","aria-expanded":o.open,"aria-controls":o.contentId,"data-state":lD(o.open)},r,{ref:a,onClick:U(e.onClick,o.onOpenToggle)}));return o.hasCustomAnchor?l:/*#__PURE__*/(0,R.createElement)(ld,M({asChild:!0},i),l)}),lR="PopoverPortal",[lN,lO]=lk(lR,{forceMount:void 0}),lT="PopoverContent",lj=/*#__PURE__*/(0,R.forwardRef)((e,t)=>{let n=lO(lT,e.__scopePopover),{forceMount:r=n.forceMount,...o}=e,i=lC(lT,e.__scopePopover);return/*#__PURE__*/(0,R.createElement)(G,{present:r||i.open},i.modal?/*#__PURE__*/(0,R.createElement)(lM,M({},o,{ref:t})):/*#__PURE__*/(0,R.createElement)(lA,M({},o,{ref:t})))}),lM=/*#__PURE__*/(0,R.forwardRef)((e,t)=>{let n=lC(lT,e.__scopePopover),r=(0,R.useRef)(null),o=D(t,r),i=(0,R.useRef)(!1);return(0,R.useEffect)(()=>{let e=r.current;if(e)return nu(e)},[]),/*#__PURE__*/(0,R.createElement)(nn,{as:I,allowPinchZoom:!0},/*#__PURE__*/(0,R.createElement)(lz,M({},e,{ref:o// we make sure we're not trapping once it's been closed
,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:U(e.onCloseAutoFocus,e=>{var t;e.preventDefault(),i.current||null===(t=n.triggerRef.current)||void 0===t||t.focus()}),onPointerDownOutside:U(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey,r=2===t.button||n;i.current=r},{checkForDefaultPrevented:!1})// When focus is trapped, a `focusout` event may still happen.
,onFocusOutside:U(e.onFocusOutside,e=>e.preventDefault(),{checkForDefaultPrevented:!1})})))}),lA=/*#__PURE__*/(0,R.forwardRef)((e,t)=>{let n=lC(lT,e.__scopePopover),r=(0,R.useRef)(!1),o=(0,R.useRef)(!1);return/*#__PURE__*/(0,R.createElement)(lz,M({},e,{ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var i,a;null===(i=e.onCloseAutoFocus)||void 0===i||i.call(e,t),t.defaultPrevented||(r.current||null===(a=n.triggerRef.current)||void 0===a||a.focus(),t.preventDefault()),r.current=!1,o.current=!1},onInteractOutside:t=>{var i,a;null===(i=e.onInteractOutside)||void 0===i||i.call(e,t),t.defaultPrevented||(r.current=!0,"pointerdown"!==t.detail.originalEvent.type||(o.current=!0));// As the trigger is already setup to close, without doing so would
// cause it to close and immediately open.
let l=t.target,s=null===(a=n.triggerRef.current)||void 0===a?void 0:a.contains(l);s&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&o.current&&t.preventDefault()}}))}),lz=/*#__PURE__*/(0,R.forwardRef)((e,t)=>{let{__scopePopover:n,trapFocus:r,onOpenAutoFocus:o,onCloseAutoFocus:i,disableOutsidePointerEvents:a,onEscapeKeyDown:l,onPointerDownOutside:s,onFocusOutside:u,onInteractOutside:c,...d}=e,f=lC(lT,n),p=lE(n);return tj(),/*#__PURE__*/(0,R.createElement)(tE,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:o,onUnmountAutoFocus:i},/*#__PURE__*/(0,R.createElement)(tv,{asChild:!0,disableOutsidePointerEvents:a,onInteractOutside:c,onEscapeKeyDown:l,onPointerDownOutside:s,onFocusOutside:u,onDismiss:()=>f.onOpenChange(!1)},/*#__PURE__*/(0,R.createElement)(lm,M({"data-state":lD(f.open),role:"dialog",id:f.contentId},p,d,{ref:t,style:{...d.style,"--radix-popover-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-popover-content-available-width":"var(--radix-popper-available-width)","--radix-popover-content-available-height":"var(--radix-popper-available-height)","--radix-popover-trigger-width":"var(--radix-popper-anchor-width)","--radix-popover-trigger-height":"var(--radix-popper-anchor-height)"}}))))});/* -----------------------------------------------------------------------------------------------*/function lD(e){return e?"open":"closed"}let lI=e=>{let{__scopePopover:t,forceMount:n,children:r,container:o}=e,i=lC(lR,t);return/*#__PURE__*/(0,R.createElement)(lN,{scope:t,forceMount:n},/*#__PURE__*/(0,R.createElement)(G,{present:n||i.open},/*#__PURE__*/(0,R.createElement)(tO,{asChild:!0,container:o},r)))},lL=e=>{let{__scopePopover:t,children:n,open:r,defaultOpen:o,onOpenChange:i,modal:a=!1}=e,l=lE(t),s=(0,R.useRef)(null),[u,c]=(0,R.useState)(!1),[d=!1,f]=B({prop:r,defaultProp:o,onChange:i});return/*#__PURE__*/(0,R.createElement)(lw,l,/*#__PURE__*/(0,R.createElement)(l_,{scope:t,contentId:Z(),triggerRef:s,open:d,onOpenChange:f,onOpenToggle:(0,R.useCallback)(()=>f(e=>!e),[f]),hasCustomAnchor:u,onCustomAnchorAdd:(0,R.useCallback)(()=>c(!0),[]),onCustomAnchorRemove:(0,R.useCallback)(()=>c(!1),[]),modal:a},n))},lF=/*#__PURE__*/R.forwardRef(({className:e,align:t="center",sideOffset:n=4,...r},o)=>/*#__PURE__*/(0,C.jsx)(lI,{children:/*#__PURE__*/(0,C.jsx)(lj,{ref:o,align:t,sideOffset:n,className:tl("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...r})}));function l$({words:e}){return/*#__PURE__*/(0,C.jsx)("div",{className:"grid grid-cols-4 gap-4",children:e.map(t=>/*#__PURE__*/(0,C.jsx)(rv,{word:t,fullCandidateSize:e.length},t))})}function lV({...e}){let t=`${{1:"rgb(74 222 128)",2:"rgb(251 191 36)",3:"rgb(129 140 248)",4:"rgb(34 211 238)"}[e.difficulty]}`,n=// src/hooks/useSpring.ts
function(e,t){let n=r$.fun(e),[[r],o]=// src/hooks/useSprings.ts
function(e,t,n){let r=r$.fun(t)&&t;r&&!n&&(n=[]);let o=(0,R.useMemo)(()=>r||3==arguments.length?i2():void 0,[]),i=(0,R.useRef)(0),a=oW(),l=(0,R.useMemo)(()=>({ctrls:[],queue:[],flush(e,t){let n=iQ(e,t),r=i.current>0&&!l.queue.length&&!Object.keys(n).some(t=>!e.springs[t]);return r?iq(e,t):new Promise(r=>{iK(e,n),l.queue.push(()=>{r(iq(e,t))}),a()})}}),[]),s=(0,R.useRef)([...l.ctrls]),u=[],c=oY(e)||0;function d(e,n){for(let o=e;o<n;o++){let e=s.current[o]||(s.current[o]=new iY(null,l.flush)),n=r?r(o,e):t[o];n&&(u[o]=function(e){let t=iF(e);return r$.und(t.default)&&(t.default=ia(t)),t}(n))}}(0,R.useMemo)(()=>{rU(s.current.slice(e,c),e=>{e.ref?.delete(e),o?.delete(e),e.stop(!0)}),s.current.length=e,d(c,e)},[e]),(0,R.useMemo)(()=>{d(0,Math.min(c,e))},n);let f=s.current.map((e,t)=>iQ(e,u[t])),p=(0,R.useContext)(i0),h=oY(p),m=p!==h&&function(e){for(let t in e)return!0;return!1}(p);oV(()=>{i.current++,l.ctrls=s.current;let{queue:e}=l;e.length&&(l.queue=[],rU(e,e=>e())),rU(s.current,(e,t)=>{o?.add(e),m&&e.start({default:p});let n=u[t];if(n){var r;(r=n.ref)&&e.ref!==r&&(e.ref?.delete(e),r.add(e),e.ref=r),e.ref?e.queue.push(n):e.start(n)}})}),oB(()=>()=>{rU(l.ctrls,e=>e.stop(!0))});let g=f.map(e=>({...e}));return o?[g,o]:g}(1,n?e:[e],n?t||[]:t);return n||2==arguments.length?[r,o]:r}({from:{opacity:0,transform:"translateY(100%)"},to:{opacity:1,transform:"translateY(0%)"},delay:250});return/*#__PURE__*/(0,C.jsx)(au.div,{style:n,children:/*#__PURE__*/(0,C.jsx)(lL,{children:/*#__PURE__*/(0,C.jsx)(lP,{asChild:!0,children:/*#__PURE__*/(0,C.jsxs)("div",{className:"cursor-pointer hover:animate-pulse shadow-md",style:{backgroundColor:t,borderRadius:8},children:[/*#__PURE__*/(0,C.jsx)("p",{className:"font-bold pt-2 pl-4",children:e.category}),/*#__PURE__*/(0,C.jsx)("p",{className:"font-thin pb-2 pl-4",children:e.words.join(", ")})]})})})})}lF.displayName=lj.displayName;var lU=function({gameRows:e,shouldGridShake:t,setShouldGridShake:n}){let{submittedGuesses:r,isGameWon:o,solvedGameData:i}=/*@__PURE__*/k(R).useContext(rm);/*@__PURE__*/k(R).useEffect(()=>{let e=window.setTimeout(()=>{n(!1);// this timeout should probably be calculated since it depends on animation values for the grid shake
},2e3);// cleanup timeout
return()=>window.clearTimeout(e)},[r]);let a=!o,l=a&&i.length>0;return/*#__PURE__*/(0,C.jsxs)("div",{children:[(o||l)&&/*#__PURE__*/(0,C.jsx)("div",{className:"grid gap-y-2 pb-2",children:i.map(e=>/*#__PURE__*/(0,C.jsx)(lV,{...e},e.category))}),a&&/*#__PURE__*/(0,C.jsx)("div",{className:`grid gap-y-2 ${t?"Lj2Yua_shake":""}`,children:e.map((e,t)=>/*#__PURE__*/(0,C.jsx)(l$,{words:e},t))})]})},R=_("exYeM"),lW=function(){let{numMistakesUsed:e}=/*@__PURE__*/k(R).useContext(rm);return/*#__PURE__*/(0,C.jsx)("div",{className:"flex flex-row gap-x-4 justify-center",children:/*#__PURE__*/(0,C.jsxs)("p",{className:"text-base",children:["Mistakes Made: ",/*#__PURE__*/(0,C.jsx)("span",{className:"font-bold",children:e})]})})},R=_("exYeM"),lB=function({open:e,submittedGuesses:t}){let{gameData:n}=/*@__PURE__*/k(R).useContext(rc);return/*#__PURE__*/(0,C.jsxs)(re,{title:"You won the game!",initiallyOpen:e,showActionButton:!1,children:[/*#__PURE__*/(0,C.jsx)("p",{children:"Great job!"}),/*#__PURE__*/(0,C.jsx)("div",{className:"justify-center",children:/*#__PURE__*/(0,C.jsxs)("span",{className:"text-center whitespace-pre",children:["\n",ri(n,t)]})})]})},R=(_("exYeM"),_("exYeM"));let lH="horizontal",lY=["horizontal","vertical"],lq=/*#__PURE__*/(0,R.forwardRef)((e,t)=>{let{decorative:n,orientation:r=lH,...o}=e,i=lG(r)?r:lH;return/*#__PURE__*/(0,R.createElement)(H.div,M({"data-orientation":i},n?{role:"none"}:{"aria-orientation":"vertical"===i?i:void 0,role:"separator"},o,{ref:t}))});function lG(e){return lY.includes(e)}lq.propTypes={orientation(e,t,n){let r=e[t],o=String(r);return r&&!lG(r)?Error(`Invalid prop \`orientation\` of value \`${o}\` supplied to \`${n}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${lH}\`.`):null}};let lQ=/*#__PURE__*/R.forwardRef(({className:e,orientation:t="horizontal",decorative:n=!0,...r},o)=>/*#__PURE__*/(0,C.jsx)(lq,{ref:o,decorative:n,orientation:t,className:tl("shrink-0 bg-border","horizontal"===t?"h-[1px] w-full":"h-full w-[1px]",e),...r}));lQ.displayName=lq.displayName;var R=_("exYeM"),lK={},lX={},lZ=Math.ceil,lJ=Math.max;lX=/**
 * The base implementation of `_.range` and `_.rangeRight` which doesn't
 * coerce arguments.
 *
 * @private
 * @param {number} start The start of the range.
 * @param {number} end The end of the range.
 * @param {number} step The value to increment or decrement by.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Array} Returns the range of numbers.
 */function(e,t,n,r){for(var o=-1,i=lJ(lZ((t-e)/(n||1)),0),a=Array(i);i--;)a[r?i:++o]=e,e+=n;return a};var l0={},l1={};l1=/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */function(e,t){return e===t||e!=e&&t!=t};var l2={},l3={},l4={},l5={},l8=_("8ThvE");l5=l8.Symbol;var l6={},l9=Object.prototype,l7=l9.hasOwnProperty,se=l9.toString,st=l5?l5.toStringTag:void 0;l6=/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */function(e){var t=l7.call(e,st),n=e[st];try{e[st]=void 0;var r=!0}catch(e){}var o=se.call(e);return r&&(t?e[st]=n:delete e[st]),o};var sn={},sr=Object.prototype.toString;sn=/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */function(e){return sr.call(e)};/** Built-in value references. */var so=l5?l5.toStringTag:void 0;l4=/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":so&&so in Object(e)?l6(e):sn(e)};var si={};si=/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},l3=/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */function(e){if(!si(e))return!1;// The use of `Object#toString` avoids issues with the `typeof` operator
// in Safari 9 which returns 'object' for typed arrays and other constructors.
var t=l4(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t};var sa={};sa=/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},l2=/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */function(e){return null!=e&&sa(e.length)&&!l3(e)};var sl={},ss=/^(?:0|[1-9]\d*)$/;sl=/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */function(e,t){var n=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==n||"symbol"!=n&&ss.test(e))&&e>-1&&e%1==0&&e<t},l0=/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */function(e,t,n){if(!si(n))return!1;var r=typeof t;return("number"==r?!!(l2(n)&&sl(t,n.length)):"string"==r&&t in n)&&l1(n[t],e)};var su={},sc={},sd={},sf={},sp=/\s/;sf=/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */function(e){for(var t=e.length;t--&&sp.test(e.charAt(t)););return t};/** Used to match leading whitespace. */var sh=/^\s+/;sd=/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */function(e){return e?e.slice(0,sf(e)+1).replace(sh,""):e};var sm={},sg={};sg=/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */function(e){return null!=e&&"object"==typeof e},sm=/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */function(e){return"symbol"==typeof e||sg(e)&&"[object Symbol]"==l4(e)};/** Used as references for various `Number` constants. */var sv=0/0,sy=/^[-+]0x[0-9a-f]+$/i,sb=/^0b[01]+$/i,sw=/^0o[0-7]+$/i,sx=parseInt;sc=/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */function(e){if("number"==typeof e)return e;if(sm(e))return sv;if(si(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=si(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=sd(e);var n=sb.test(e);return n||sw.test(e)?sx(e.slice(2),n?2:8):sy.test(e)?sv:+e};/** Used as references for various `Number` constants. */var sk=1/0;function sS(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}su=/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */function(e){return e?(e=sc(e))===sk||e===-sk?(e<0?-1:1)*17976931348623157e292:e==e?e:0:0===e?e:0},lK=function(e,t,n){return n&&"number"!=typeof n&&l0(e,t,n)&&(t=n=void 0),// Ensure the sign of `-0` is preserved.
e=su(e),void 0===t?(t=e,e=0):t=su(t),n=void 0===n?e<t?1:-1:su(n),lX(e,t,n,void 0)};var R=_("exYeM"),sE={},s_={};s_=_("beWdq");/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */var sC={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},sP={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},sR={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},sN={};function sO(e){return(// React v16.11 and below
s_.isMemo(e)?sR:sN[e.$$typeof]||sC)}sN[s_.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},sN[s_.Memo]=sR;var sT=Object.defineProperty,sj=Object.getOwnPropertyNames,sM=Object.getOwnPropertySymbols,sA=Object.getOwnPropertyDescriptor,sz=Object.getPrototypeOf,sD=Object.prototype;sE=function e(t,n,r){if("string"!=typeof n){// don't hoist over string (html) components
if(sD){var o=sz(n);o&&o!==sD&&e(t,o,r)}var i=sj(n);sM&&(i=i.concat(sM(n)));for(var a=sO(t),l=sO(n),s=0;s<i.length;++s){var u=i[s];if(!sP[u]&&!(r&&r[u])&&!(l&&l[u])&&!(a&&a[u])){var c=sA(n,u);try{// Avoid failures from read-only properties
sT(t,u,c)}catch(e){}}}}return t};var R=_("exYeM"),sI={};function sL(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function sF(){return(sF=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s$(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}Object.defineProperty(sI,"__esModule",{value:!0}),sI.default=function(e){return e.displayName||e.name||("string"==typeof e&&e.length>0?e:"Unknown")};var sV=(0,R.createContext)(),sU={context:sV,withTheme:function(e){var t=/*@__PURE__*/k(R).forwardRef(function(t,n){return /*@__PURE__*/k(R).createElement(sV.Consumer,null,function(r){return /*@__PURE__*/k(R).createElement(e,sF({theme:r,ref:n},t))})});return /*@__PURE__*/k(sE)(t,e),t},useTheme:function(){return /*@__PURE__*/k(R).useContext(sV)},ThemeProvider:/*#__PURE__*/function(e){function t(){for(var t,n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];return sL(s$(s$(t=e.call.apply(e,[this].concat(r))||this)),"cachedTheme",void 0),sL(s$(s$(t)),"lastOuterTheme",void 0),sL(s$(s$(t)),"lastTheme",void 0),sL(s$(s$(t)),"renderProvider",function(e){var n=t.props.children;return /*@__PURE__*/k(R).createElement(sV.Provider,{value:t.getTheme(e)},n)}),t}t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e;var n=t.prototype;return(// Get the theme from the props, supporting both (outerTheme) => {} as well as object notation
n.getTheme=function(e){if(this.props.theme!==this.lastTheme||e!==this.lastOuterTheme||!this.cachedTheme){if(this.lastOuterTheme=e,this.lastTheme=this.props.theme,"function"==typeof this.lastTheme){var t=this.props.theme;this.cachedTheme=t(e)}else{var n=this.props.theme;this.cachedTheme=e?sF({},e,n):n}}return this.cachedTheme},n.render=function(){return this.props.children?/*@__PURE__*/k(R).createElement(sV.Consumer,null,this.renderProvider):null},t)}(/*@__PURE__*/k(R).Component)};sU.withTheme,sU.ThemeProvider,sU.useTheme;var sW="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},sB=("undefined"==typeof window?"undefined":sW(window))==="object"&&("undefined"==typeof document?"undefined":sW(document))==="object"&&9===document.nodeType,sH=function(e,t){};function sY(e){return(sY="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function sq(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,function(e){var t=function(e,t){if("object"!==sY(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==sY(r))return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===sY(t)?t:String(t)}(r.key),r)}}function sG(e,t,n){return t&&sq(e.prototype,t),n&&sq(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function sQ(e,t){return(sQ=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function sK(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,sQ(e,t)}function sX(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var sZ={}.constructor;/**
 * Create a rule instance.
 */function sJ(e,t,n){void 0===e&&(e="unnamed");var r=n.jss,o=function e(t){if(null==t||"object"!=typeof t)return t;if(Array.isArray(t))return t.map(e);if(t.constructor!==sZ)return t;var n={};for(var r in t)n[r]=e(t[r]);return n}(t);return r.plugins.onCreateRule(e,o,n)||(e[0],null)// It is an at-rule and it has no instance.
}var s0=function(e,t){for(var n="",r=0;// Remove !important from the value, it will be readded later.
r<e.length&&"!important"!==e[r];r++)n&&(n+=t),n+=e[r];return n},s1=function(e){if(!Array.isArray(e))return e;var t="";// Support space separated values via `[['5px', '10px']]`.
if(Array.isArray(e[0]))for(var n=0;n<e.length&&"!important"!==e[n];n++)t&&(t+=", "),t+=s0(e[n]," ");else t=s0(e,", ");// Add !important, because it was ignored.
return"!important"===e[e.length-1]&&(t+=" !important"),t};function s2(e){return e&&!1===e.format?{linebreak:"",space:""}:{linebreak:"\n",space:" "}}/**
 * Indent a string.
 * http://jsperf.com/array-join-vs-for
 */function s3(e,t){for(var n="",r=0;r<t;r++)n+="  ";return n+e}/**
 * Converts a Rule to CSS string.
 */function s4(e,t,n){void 0===n&&(n={});var r="";if(!t)return r;var o=n.indent,i=void 0===o?0:o,a=t.fallbacks;!1===n.format&&(i=-1/0);var l=s2(n),s=l.linebreak,u=l.space;if(e&&i++,a){// Array syntax {fallbacks: [{prop: value}]}
if(Array.isArray(a))for(var c=0;c<a.length;c++){var d=a[c];for(var f in d){var p=d[f];null!=p&&(r&&(r+=s),r+=s3(f+":"+u+s1(p)+";",i))}}else for(var h in a){var m=a[h];null!=m&&(r&&(r+=s),r+=s3(h+":"+u+s1(m)+";",i))}}for(var g in t){var v=t[g];null!=v&&"fallbacks"!==g&&(r&&(r+=s),r+=s3(g+":"+u+s1(v)+";",i))}// Allow empty style in this case, because properties will be added dynamically.
return(r||n.allowEmpty)&&e?(i--,r&&(r=""+s+r+s),s3(""+e+u+"{"+r,i)+s3("}",i)):r// When rule is being stringified before selector was defined.
}var s5=/([[\].#*$><+~=|^:(),"'`\s])/g,s8="undefined"!=typeof CSS&&CSS.escape,s6=function(e){return s8?s8(e):e.replace(s5,"\\$1")},s9=/*#__PURE__*/function(){function e(e,t,n){this.type="style",this.isProcessed=!1;var r=n.sheet,o=n.Renderer;this.key=e,this.options=n,this.style=t,r?this.renderer=r.renderer:o&&(this.renderer=new o)}return e.prototype.prop=function(e,t,n){// It's a getter.
if(void 0===t)return this.style[e];// Don't do anything if the value has not changed.
var r=!!n&&n.force;if(!r&&this.style[e]===t)return this;var o=t;n&&!1===n.process||(o=this.options.jss.plugins.onChangeValue(t,e,this));var i=null==o||!1===o,a=e in this.style;if(i&&!a&&!r)return this;// We are going to remove this value.
var l=i&&a;if(l?delete this.style[e]:this.style[e]=o,this.renderable&&this.renderer)return l?this.renderer.removeProperty(this.renderable,e):this.renderer.setProperty(this.renderable,e,o),this;var s=this.options.sheet;return s&&s.attached,this},e}(),s7=/*#__PURE__*/function(e){function t(t,n,r){o=e.call(this,t,n,r)||this;var o,i=r.selector,a=r.scoped,l=r.sheet,s=r.generateId;return i?o.selectorText=i:!1!==a&&(o.id=s(sX(sX(o)),l),o.selectorText="."+s6(o.id)),o}sK(t,e);/**
   * Set selector string.
   * Attention: use this with caution. Most browsers didn't implement
   * selectorText setter, so this may result in rerendering of entire Style Sheet.
   */var n=t.prototype;return(/**
   * Apply rule to an element inline.
   */n.applyTo=function(e){var t=this.renderer;if(t){var n=this.toJSON();for(var r in n)t.setProperty(e,r,n[r])}return this}/**
   * Returns JSON representation of the rule.
   * Fallbacks are not supported.
   * Useful for inline styles.
   */,n.toJSON=function(){var e={};for(var t in this.style){var n=this.style[t];"object"!=typeof n?e[t]=n:Array.isArray(n)&&(e[t]=s1(n))}return e}/**
   * Generates a CSS string.
   */,n.toString=function(e){var t=this.options.sheet,n=t&&t.options.link?M({},e,{allowEmpty:!0}):e;return s4(this.selectorText,this.style,n)},sG(t,[{key:"selector",set:function(e){if(e!==this.selectorText){this.selectorText=e;var t=this.renderer,n=this.renderable;n&&t&&!t.setSelector(n,e)&&t.replaceRule(n,this)}},get:function(){return this.selectorText}}]),t)}(s9),ue={indent:1,children:!0},ut=/@([\w-]+)/,un=/*#__PURE__*/function(){function e(e,t,n){this.type="conditional",this.isProcessed=!1,this.key=e;var r=e.match(ut);for(var o in this.at=r?r[1]:"unknown",this.query=n.name||"@"+this.at,this.options=n,this.rules=new uw(M({},n,{parent:this})),t)this.rules.add(o,t[o]);this.rules.process()}/**
   * Get a rule.
   */var t=e.prototype;return t.getRule=function(e){return this.rules.get(e)}/**
   * Get index of a rule.
   */,t.indexOf=function(e){return this.rules.indexOf(e)}/**
   * Create and register rule, run plugins.
   */,t.addRule=function(e,t,n){var r=this.rules.add(e,t,n);return r?(this.options.jss.plugins.onProcessRule(r),r):null}/**
   * Replace rule, run plugins.
   */,t.replaceRule=function(e,t,n){var r=this.rules.replace(e,t,n);return r&&this.options.jss.plugins.onProcessRule(r),r}/**
   * Generates a CSS string.
   */,t.toString=function(e){void 0===e&&(e=ue);var t=s2(e).linebreak;if(null==e.indent&&(e.indent=ue.indent),null==e.children&&(e.children=ue.children),!1===e.children)return this.query+" {}";var n=this.rules.toString(e);return n?this.query+" {"+t+n+t+"}":""},e}(),ur=/@container|@media|@supports\s+/,uo={indent:1,children:!0},ui=/@keyframes\s+([\w-]+)/,ua=/*#__PURE__*/function(){function e(e,t,n){this.type="keyframes",this.at="@keyframes",this.isProcessed=!1;var r=e.match(ui);r&&r[1]?this.name=r[1]:this.name="noname",this.key=this.type+"-"+this.name,this.options=n;var o=n.scoped,i=n.sheet,a=n.generateId;for(var l in this.id=!1===o?this.name:s6(a(this,i)),this.rules=new uw(M({},n,{parent:this})),t)this.rules.add(l,t[l],M({},n,{parent:this}));this.rules.process()}return e.prototype.toString=function(e){void 0===e&&(e=uo);var t=s2(e).linebreak;if(null==e.indent&&(e.indent=uo.indent),null==e.children&&(e.children=uo.children),!1===e.children)return this.at+" "+this.id+" {}";var n=this.rules.toString(e);return n&&(n=""+t+n+t),this.at+" "+this.id+" {"+n+"}"},e}(),ul=/@keyframes\s+/,us=/\$([\w-]+)/g,uu=function(e,t){return"string"==typeof e?e.replace(us,function(e,n){return n in t?t[n]:e}):e},uc=function(e,t,n){var r=e[t],o=uu(r,n);o!==r&&(e[t]=o)},ud=/*#__PURE__*/function(e){function t(){return e.apply(this,arguments)||this}return sK(t,e),/**
   * Generates a CSS string.
   */t.prototype.toString=function(e){var t=this.options.sheet,n=t&&t.options.link?M({},e,{allowEmpty:!0}):e;return s4(this.key,this.style,n)},t}(s9),uf=/*#__PURE__*/function(){function e(e,t,n){this.type="font-face",this.at="@font-face",this.isProcessed=!1,this.key=e,this.style=t,this.options=n}return e.prototype.toString=function(e){var t=s2(e).linebreak;if(Array.isArray(this.style)){for(var n="",r=0;r<this.style.length;r++)n+=s4(this.at,this.style[r]),this.style[r+1]&&(n+=t);return n}return s4(this.at,this.style,e)},e}(),up=/@font-face/,uh=/*#__PURE__*/function(){function e(e,t,n){this.type="viewport",this.at="@viewport",this.isProcessed=!1,this.key=e,this.style=t,this.options=n}return e.prototype.toString=function(e){return s4(this.key,this.style,e)},e}(),um=/*#__PURE__*/function(){function e(e,t,n){this.type="simple",this.isProcessed=!1,this.key=e,this.value=t,this.options=n}return e.prototype.toString=function(e){if(Array.isArray(this.value)){for(var t="",n=0;n<this.value.length;n++)t+=this.key+" "+this.value[n]+";",this.value[n+1]&&(t+="\n");return t}return this.key+" "+this.value+";"},e}(),ug={"@charset":!0,"@import":!0,"@namespace":!0},uv=[{onCreateRule:function(e,t,n){return"@"===e[0]||n.parent&&"keyframes"===n.parent.type?null:new s7(e,t,n)}},{onCreateRule:function(e,t,n){return ur.test(e)?new un(e,t,n):null}},{onCreateRule:function(e,t,n){return"string"==typeof e&&ul.test(e)?new ua(e,t,n):null},// Animation name ref replacer.
onProcessStyle:function(e,t,n){return"style"===t.type&&n&&("animation-name"in e&&uc(e,"animation-name",n.keyframes),"animation"in e&&uc(e,"animation",n.keyframes)),e},onChangeValue:function(e,t,n){var r=n.options.sheet;if(!r)return e;switch(t){case"animation":case"animation-name":return uu(e,r.keyframes);default:return e}}},{onCreateRule:function(e,t,n){return n.parent&&"keyframes"===n.parent.type?new ud(e,t,n):null}},{onCreateRule:function(e,t,n){return up.test(e)?new uf(e,t,n):null}},{onCreateRule:function(e,t,n){return"@viewport"===e||"@-ms-viewport"===e?new uh(e,t,n):null}},{onCreateRule:function(e,t,n){return e in ug?new um(e,t,n):null}}],uy={process:!0},ub={force:!0,process:!0},uw=/*#__PURE__*/function(){// Rules registry for access by .get() method.
// It contains the same rule registered by name and by selector.
// Original styles object.
// Used to ensure correct rules order.
function e(e){this.map={},this.raw={},this.index=[],this.counter=0,this.options=e,this.classes=e.classes,this.keyframes=e.keyframes}/**
   * Create and register rule.
   *
   * Will not render after Style Sheet was rendered the first time.
   */var t=e.prototype;return t.add=function(e,t,n){var r=this.options,o=r.parent,i=r.sheet,a=r.jss,l=r.Renderer,s=r.generateId,u=r.scoped,c=M({classes:this.classes,parent:o,sheet:i,jss:a,Renderer:l,generateId:s,scoped:u,name:e,keyframes:this.keyframes,selector:void 0},n),d=e;e in this.raw&&(d=e+"-d"+this.counter++),// We need to save the original decl before creating the rule
// because cache plugin needs to use it as a key to return a cached rule.
this.raw[d]=t,d in this.classes&&(c.selector="."+s6(this.classes[d]));var f=sJ(d,t,c);if(!f)return null;this.register(f);var p=void 0===c.index?this.index.length:c.index;return this.index.splice(p,0,f),f}/**
   * Replace rule.
   * Create a new rule and remove old one instead of overwriting
   * because we want to invoke onCreateRule hook to make plugins work.
   */,t.replace=function(e,t,n){var r=this.get(e),o=this.index.indexOf(r);r&&this.remove(r);var i=n;return -1!==o&&(i=M({},n,{index:o})),this.add(e,t,i)}/**
   * Get a rule by name or selector.
   */,t.get=function(e){return this.map[e]}/**
   * Delete a rule.
   */,t.remove=function(e){this.unregister(e),delete this.raw[e.key],this.index.splice(this.index.indexOf(e),1)}/**
   * Get index of a rule.
   */,t.indexOf=function(e){return this.index.indexOf(e)}/**
   * Run `onProcessRule()` plugins on every rule.
   */,t.process=function(){var e=this.options.jss.plugins;// We need to clone array because if we modify the index somewhere else during a loop
// we end up with very hard-to-track-down side effects.
this.index.slice(0).forEach(e.onProcessRule,e)}/**
   * Register a rule in `.map`, `.classes` and `.keyframes` maps.
   */,t.register=function(e){this.map[e.key]=e,e instanceof s7?(this.map[e.selector]=e,e.id&&(this.classes[e.key]=e.id)):e instanceof ua&&this.keyframes&&(this.keyframes[e.name]=e.id)}/**
   * Unregister a rule.
   */,t.unregister=function(e){delete this.map[e.key],e instanceof s7?(delete this.map[e.selector],delete this.classes[e.key]):e instanceof ua&&delete this.keyframes[e.name]}/**
   * Update the function values with a new data.
   */,t.update=function(){if("string"==typeof(arguments.length<=0?void 0:arguments[0])?(e=arguments.length<=0?void 0:arguments[0],t=arguments.length<=1?void 0:arguments[1],n=arguments.length<=2?void 0:arguments[2]):(t=arguments.length<=0?void 0:arguments[0],n=arguments.length<=1?void 0:arguments[1],e=null),e)this.updateOne(this.get(e),t,n);else for(var e,t,n,r=0;r<this.index.length;r++)this.updateOne(this.index[r],t,n)}/**
   * Execute plugins, update rule props.
   */,t.updateOne=function(t,n,r){void 0===r&&(r=uy);var o=this.options,i=o.jss.plugins,a=o.sheet;// It is a rules container like for e.g. ConditionalRule.
if(t.rules instanceof e){t.rules.update(n,r);return}var l=t.style;if(i.onUpdate(n,t,a,r),r.process&&l&&l!==t.style){for(var s in // We need to run the plugins in case new `style` relies on syntax plugins.
i.onProcessStyle(t.style,t,a),t.style){var u=t.style[s];// We do this comparison to avoid unneeded `rule.prop()` calls, since we have the old `style` object here.
u!==l[s]&&t.prop(s,u,ub)}// Remove props.
for(var c in l){var d=t.style[c],f=l[c];// We do this comparison to avoid unneeded `rule.prop()` calls, since we have the old `style` object here.
null==d&&d!==f&&t.prop(c,null,ub)}}}/**
   * Convert rules to a CSS string.
   */,t.toString=function(e){for(var t="",n=this.options.sheet,r=!!n&&n.options.link,o=s2(e).linebreak,i=0;i<this.index.length;i++){var a=this.index[i].toString(e);// No need to render an empty rule.
(a||r)&&(t&&(t+=o),t+=a)}return t},e}(),ux=/*#__PURE__*/function(){function e(e,t){for(var n in this.attached=!1,this.deployed=!1,this.classes={},this.keyframes={},this.options=M({},t,{sheet:this,parent:this,classes:this.classes,keyframes:this.keyframes}),t.Renderer&&(this.renderer=new t.Renderer(this)),this.rules=new uw(this.options),e)this.rules.add(n,e[n]);this.rules.process()}/**
   * Attach renderable to the render tree.
   */var t=e.prototype;return t.attach=function(){return this.attached||(this.renderer&&this.renderer.attach(),this.attached=!0,this.deployed||this.deploy()),this}/**
   * Remove renderable from render tree.
   */,t.detach=function(){return this.attached&&(this.renderer&&this.renderer.detach(),this.attached=!1),this}/**
   * Add a rule to the current stylesheet.
   * Will insert a rule also after the stylesheet has been rendered first time.
   */,t.addRule=function(e,t,n){var r=this.queue;// Plugins can create rules.
this.attached&&!r&&(this.queue=[]);var o=this.rules.add(e,t,n);return o?((this.options.jss.plugins.onProcessRule(o),this.attached)?this.deployed&&(r?r.push(o):(this.insertRule(o),this.queue&&(this.queue.forEach(this.insertRule,this),this.queue=void 0))):// We will redeploy the sheet once user will attach it.
this.deployed=!1,o):null}/**
   * Replace a rule in the current stylesheet.
   */,t.replaceRule=function(e,t,n){var r=this.rules.get(e);if(!r)return this.addRule(e,t,n);var o=this.rules.replace(e,t,n);return(o&&this.options.jss.plugins.onProcessRule(o),this.attached)?this.deployed&&this.renderer&&(o?r.renderable&&this.renderer.replaceRule(r.renderable,o):this.renderer.deleteRule(r)):// We will redeploy the sheet once user will attach it.
this.deployed=!1,o}/**
   * Insert rule into the StyleSheet
   */,t.insertRule=function(e){this.renderer&&this.renderer.insertRule(e)}/**
   * Create and add rules.
   * Will render also after Style Sheet was rendered the first time.
   */,t.addRules=function(e,t){var n=[];for(var r in e){var o=this.addRule(r,e[r],t);o&&n.push(o)}return n}/**
   * Get a rule by name or selector.
   */,t.getRule=function(e){return this.rules.get(e)}/**
   * Delete a rule by name.
   * Returns `true`: if rule has been deleted from the DOM.
   */,t.deleteRule=function(e){var t="object"==typeof e?e:this.rules.get(e);return!!t&&// Style sheet was created without link: true and attached, in this case we
// won't be able to remove the CSS rule from the DOM.
(!this.attached||!!t.renderable)&&(this.rules.remove(t),!this.attached||!t.renderable||!this.renderer||this.renderer.deleteRule(t.renderable))}/**
   * Get index of a rule.
   */,t.indexOf=function(e){return this.rules.indexOf(e)}/**
   * Deploy pure CSS string to a renderable.
   */,t.deploy=function(){return this.renderer&&this.renderer.deploy(),this.deployed=!0,this}/**
   * Update the function values with a new data.
   */,t.update=function(){var e;return(e=this.rules).update.apply(e,arguments),this}/**
   * Updates a single rule.
   */,t.updateOne=function(e,t,n){return this.rules.updateOne(e,t,n),this}/**
   * Convert rules to a CSS string.
   */,t.toString=function(e){return this.rules.toString(e)},e}(),uk=/*#__PURE__*/function(){function e(){this.plugins={internal:[],external:[]},this.registry={}}var t=e.prototype;return(/**
   * Call `onCreateRule` hooks and return an object if returned by a hook.
   */t.onCreateRule=function(e,t,n){for(var r=0;r<this.registry.onCreateRule.length;r++){var o=this.registry.onCreateRule[r](e,t,n);if(o)return o}return null}/**
   * Call `onProcessRule` hooks.
   */,t.onProcessRule=function(e){if(!e.isProcessed){for(var t=e.options.sheet,n=0;n<this.registry.onProcessRule.length;n++)this.registry.onProcessRule[n](e,t);e.style&&this.onProcessStyle(e.style,e,t),e.isProcessed=!0}}/**
   * Call `onProcessStyle` hooks.
   */,t.onProcessStyle=function(e,t,n){for(var r=0;r<this.registry.onProcessStyle.length;r++)t.style=this.registry.onProcessStyle[r](t.style,t,n)}/**
   * Call `onProcessSheet` hooks.
   */,t.onProcessSheet=function(e){for(var t=0;t<this.registry.onProcessSheet.length;t++)this.registry.onProcessSheet[t](e)}/**
   * Call `onUpdate` hooks.
   */,t.onUpdate=function(e,t,n,r){for(var o=0;o<this.registry.onUpdate.length;o++)this.registry.onUpdate[o](e,t,n,r)}/**
   * Call `onChangeValue` hooks.
   */,t.onChangeValue=function(e,t,n){for(var r=e,o=0;o<this.registry.onChangeValue.length;o++)r=this.registry.onChangeValue[o](r,t,n);return r}/**
   * Register a plugin.
   */,t.use=function(e,t){void 0===t&&(t={queue:"external"});var n=this.plugins[t.queue];// Avoids applying same plugin twice, at least based on ref.
-1===n.indexOf(e)&&(n.push(e),this.registry=[].concat(this.plugins.external,this.plugins.internal).reduce(function(e,t){for(var n in t)n in e&&e[n].push(t[n]);return e},{onCreateRule:[],onProcessRule:[],onProcessStyle:[],onProcessSheet:[],onChangeValue:[],onUpdate:[]}))},e)}(),uS=new/*#__PURE__*/(function(){function e(){this.registry=[]}var t=e.prototype;return(/**
   * Register a Style Sheet.
   */t.add=function(e){var t=this.registry,n=e.options.index;if(-1===t.indexOf(e)){if(0===t.length||n>=this.index){t.push(e);return}// Find a position.
for(var r=0;r<t.length;r++)if(t[r].options.index>n){t.splice(r,0,e);return}}}/**
   * Reset the registry.
   */,t.reset=function(){this.registry=[]}/**
   * Remove a Style Sheet.
   */,t.remove=function(e){var t=this.registry.indexOf(e);this.registry.splice(t,1)}/**
   * Convert all attached sheets to a CSS string.
   */,t.toString=function(e){for(var t=void 0===e?{}:e,n=t.attached,r=sS(t,["attached"]),o=s2(r).linebreak,i="",a=0;a<this.registry.length;a++){var l=this.registry[a];(null==n||l.attached===n)&&(i&&(i+=o),i+=l.toString(r))}return i},sG(e,[{key:"index",/**
     * Current highest index number.
     */get:function(){return 0===this.registry.length?0:this.registry[this.registry.length-1].options.index}}]),e)}()),uE="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window&&window.Math===Math?window:"undefined"!=typeof self&&self.Math===Math?self:Function("return this")(),u_="2f1acc6c3a606b082e5eef5e54414ffb";null==uE[u_]&&(uE[u_]=0);// the current version with just one short number and use it for classes generation
// we use a counter. Also it is more accurate, because user can manually reevaluate
// the module.
var uC=uE[u_]++,uP=function(e){void 0===e&&(e={});var t=0;return function(n,r){t+=1;var o="",i="";return(r&&(r.options.classNamePrefix&&(i=r.options.classNamePrefix),null!=r.options.jss.id&&(o=String(r.options.jss.id))),e.minify)?""+(i||"c")+uC+o+t:i+n.key+"-"+uC+(o?"-"+o:"")+"-"+t}},uR=function(e){var t;return function(){return t||(t=e()),t}},uN=function(e,t){try{// Support CSSTOM.
if(e.attributeStyleMap)return e.attributeStyleMap.get(t);return e.style.getPropertyValue(t)}catch(e){// IE may throw if property is unknown.
return""}},uO=function(e,t,n){try{var r=n;// Support CSSTOM.
if(Array.isArray(n)&&(r=s1(n)),e.attributeStyleMap)e.attributeStyleMap.set(t,r);else{var o=r?r.indexOf("!important"):-1,i=o>-1?r.substr(0,o-1):r;e.style.setProperty(t,i,o>-1?"important":"")}}catch(e){// IE may throw if property is unknown.
return!1}return!0},uT=function(e,t){try{// Support CSSTOM.
e.attributeStyleMap?e.attributeStyleMap.delete(t):e.style.removeProperty(t)}catch(e){}},uj=function(e,t){// Currently works in chrome only.
return e.selectorText=t,e.selectorText===t},uM=uR(function(){return document.querySelector("head")}),uA=uR(function(){var e=document.querySelector('meta[property="csp-nonce"]');return e?e.getAttribute("content"):null}),uz=function(e,t,n){try{"insertRule"in e?e.insertRule(t,n):"appendRule"in e&&e.appendRule(t)}catch(e){return!1}return e.cssRules[n]},uD=function(e,t){var n=e.cssRules.length;// In case previous insertion fails, passed index might be wrong
return void 0===t||t>n?n:t},uI=function(){var e=document.createElement("style");// Without it, IE will have a broken source order specificity if we
return(// insert rules after we insert the style tag.
// It seems to kick-off the source order specificity algorithm.
e.textContent="\n",e)},uL=/*#__PURE__*/function(){// Will be empty if link: true option is not set, because
// it is only for use together with insertRule API.
function e(e){this.getPropertyValue=uN,this.setProperty=uO,this.removeProperty=uT,this.setSelector=uj,this.hasInsertedRules=!1,this.cssRules=[],e&&uS.add(e),this.sheet=e;var t=this.sheet?this.sheet.options:{},n=t.media,r=t.meta,o=t.element;this.element=o||uI(),this.element.setAttribute("data-jss",""),n&&this.element.setAttribute("media",n),r&&this.element.setAttribute("data-meta",r);var i=uA();i&&this.element.setAttribute("nonce",i)}/**
   * Insert style element into render tree.
   */var t=e.prototype;return t.attach=function(){// In the case the element node is external and it is already in the DOM.
if(!this.element.parentNode&&this.sheet){!/**
 * Insert style element into the DOM.
 */function(e,t){var n=t.insertionPoint,r=/**
 * Find a node before which we can insert the sheet.
 */function(e){var t=uS.registry;if(t.length>0){// Try to insert before the next higher sheet.
var n=/**
 * Find attached sheet with an index higher than the passed one.
 */function(e,t){for(var n=0;n<e.length;n++){var r=e[n];if(r.attached&&r.options.index>t.index&&r.options.insertionPoint===t.insertionPoint)return r}return null}(t,e);if(n&&n.renderer)return{parent:n.renderer.element.parentNode,node:n.renderer.element};if(// Otherwise insert after the last attached.
(n=/**
 * Find attached sheet with the highest index.
 */function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.attached&&r.options.insertionPoint===t.insertionPoint)return r}return null}(t,e))&&n.renderer)return{parent:n.renderer.element.parentNode,node:n.renderer.element.nextSibling}}// Try to find a comment placeholder if registry is empty.
var r=e.insertionPoint;if(r&&"string"==typeof r){var o=/**
 * Find a comment with "jss" inside.
 */function(e){for(var t=uM(),n=0;n<t.childNodes.length;n++){var r=t.childNodes[n];if(8===r.nodeType&&r.nodeValue.trim()===e)return r}return null}(r);if(o)return{parent:o.parentNode,node:o.nextSibling};// If user specifies an insertion point and it can't be found in the document -
}return!1}(t);if(!1!==r&&r.parent){r.parent.insertBefore(e,r.node);return}// Works with iframes and any node types.
if(n&&"number"==typeof n.nodeType){var o=n.parentNode;o&&o.insertBefore(e,n.nextSibling);return}uM().appendChild(e)}(this.element,this.sheet.options);// When rules are inserted using `insertRule` API, after `sheet.detach().attach()`
// most browsers create a new CSSStyleSheet, except of all IEs.
var e=!!(this.sheet&&this.sheet.deployed);this.hasInsertedRules&&e&&(this.hasInsertedRules=!1,this.deploy())}}/**
   * Remove style element from render tree.
   */,t.detach=function(){if(this.sheet){var e=this.element.parentNode;e&&e.removeChild(this.element),this.sheet.options.link&&(this.cssRules=[],this.element.textContent="\n")}}/**
   * Inject CSS string into element.
   */,t.deploy=function(){var e=this.sheet;if(e){if(e.options.link){this.insertRules(e.rules);return}this.element.textContent="\n"+e.toString()+"\n"}}/**
   * Insert RuleList into an element.
   */,t.insertRules=function(e,t){for(var n=0;n<e.index.length;n++)this.insertRule(e.index[n],n,t)}/**
   * Insert a rule into element.
   */,t.insertRule=function(e,t,n){if(void 0===n&&(n=this.element.sheet),e.rules){var r=n;if("conditional"===e.type||"keyframes"===e.type){var o=uD(n,t);// We need to render the container without children first.
if(!1===(r=uz(n,e.toString({children:!1}),o)))return!1;this.refCssRule(e,o,r)}return this.insertRules(e.rules,r),r}var i=e.toString();if(!i)return!1;var a=uD(n,t),l=uz(n,i,a);return!1!==l&&(this.hasInsertedRules=!0,this.refCssRule(e,a,l),l)},t.refCssRule=function(e,t,n){e.renderable=n,e.options.parent instanceof ux&&this.cssRules.splice(t,0,n)}/**
   * Delete a rule.
   */,t.deleteRule=function(e){var t=this.element.sheet,n=this.indexOf(e);return -1!==n&&(t.deleteRule(n),this.cssRules.splice(n,1),!0)}/**
   * Get index of a CSS Rule.
   */,t.indexOf=function(e){return this.cssRules.indexOf(e)}/**
   * Generate a new CSS rule and replace the existing one.
   */,t.replaceRule=function(e,t){var n=this.indexOf(e);return -1!==n&&(this.element.sheet.deleteRule(n),this.cssRules.splice(n,1),this.insertRule(t,n))}/**
   * Get all rules elements.
   */,t.getRules=function(){return this.element.sheet.cssRules},e}(),uF=0,u$=/*#__PURE__*/function(){function e(e){this.id=uF++,this.version="10.10.0",this.plugins=new uk,this.options={id:{minify:!1},createGenerateId:uP,Renderer:sB?uL:null,plugins:[]},this.generateId=uP({minify:!1});for(var t=0;t<uv.length;t++)this.plugins.use(uv[t],{queue:"internal"});this.setup(e)}/**
   * Prepares various options, applies plugins.
   * Should not be used twice on the same instance, because there is no plugins
   * deduplication logic.
   */var t=e.prototype;return t.setup=function(e){return void 0===e&&(e={}),e.createGenerateId&&(this.options.createGenerateId=e.createGenerateId),e.id&&(this.options.id=M({},this.options.id,e.id)),(e.createGenerateId||e.id)&&(this.generateId=this.options.createGenerateId(this.options.id)),null!=e.insertionPoint&&(this.options.insertionPoint=e.insertionPoint),"Renderer"in e&&(this.options.Renderer=e.Renderer),e.plugins&&this.use.apply(this,e.plugins),this}/**
   * Create a Style Sheet.
   */,t.createStyleSheet=function(e,t){void 0===t&&(t={});var n=t.index;"number"!=typeof n&&(n=0===uS.index?0:uS.index+1);var r=new ux(e,M({},t,{jss:this,generateId:t.generateId||this.generateId,insertionPoint:this.options.insertionPoint,Renderer:this.options.Renderer,index:n}));return this.plugins.onProcessSheet(r),r}/**
   * Detach the Style Sheet and remove it from the registry.
   */,t.removeStyleSheet=function(e){return e.detach(),uS.remove(e),this}/**
   * Create a rule without a Style Sheet.
   * [Deprecated] will be removed in the next major version.
   */,t.createRule=function(e,t,n){// Enable rule without name for inline styles.
if(void 0===t&&(t={}),void 0===n&&(n={}),"object"==typeof e)return this.createRule(void 0,e,t);var r=M({},n,{name:e,jss:this,Renderer:this.options.Renderer});r.generateId||(r.generateId=this.generateId),r.classes||(r.classes={}),r.keyframes||(r.keyframes={});var o=sJ(e,t,r);return o&&this.plugins.onProcessRule(o),o}/**
   * Register plugin. Passed function will be invoked with a rule instance.
   */,t.use=function(){for(var e=this,t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return n.forEach(function(t){e.plugins.use(t)}),this},e}(),uV=function(e){return new u$(e)},uU=/*#__PURE__*/function(){function e(){this.length=0,this.sheets=new WeakMap}var t=e.prototype;return t.get=function(e){var t=this.sheets.get(e);return t&&t.sheet},t.add=function(e,t){this.sheets.has(e)||(this.length++,this.sheets.set(e,{sheet:t,refs:0}))},t.manage=function(e){var t=this.sheets.get(e);if(t)return 0===t.refs&&t.sheet.attach(),t.refs++,t.sheet;sH(!1,"[JSS] SheetsManager: can't find sheet to manage")},t.unmanage=function(e){var t=this.sheets.get(e);t?t.refs>0&&(t.refs--,0===t.refs&&t.sheet.detach()):sH(!1,"SheetsManager: can't find sheet to unmanage")},sG(e,[{key:"size",get:function(){return this.length}}]),e}(),uW="object"==typeof CSS&&null!=CSS&&"number"in CSS;uV();var uB=Date.now(),uH="fnValues"+uB,uY="fnStyle"+ ++uB,uq=_("flL8Q"),uG=function(e){return e&&e[uq.default]&&e===e[0,uq.default]()},uQ=/;\n/,uK=function(e){for(var t={},n=e.split(uQ),r=0;r<n.length;r++){var o=(n[r]||"").trim();if(o){var i=o.indexOf(":");if(-1!==i){var a=o.substr(0,i).trim(),l=o.substr(i+1).trim();t[a]=l}}}return t},uX=function(e){"string"==typeof e.style&&(e.style=uK(e.style))},uZ="@global",uJ="@global ",u0=/*#__PURE__*/function(){function e(e,t,n){for(var r in this.type="global",this.at=uZ,this.isProcessed=!1,this.key=e,this.options=n,this.rules=new uw(M({},n,{parent:this})),t)this.rules.add(r,t[r]);this.rules.process()}/**
   * Get a rule.
   */var t=e.prototype;return t.getRule=function(e){return this.rules.get(e)}/**
   * Create and register rule, run plugins.
   */,t.addRule=function(e,t,n){var r=this.rules.add(e,t,n);return r&&this.options.jss.plugins.onProcessRule(r),r}/**
   * Replace rule, run plugins.
   */,t.replaceRule=function(e,t,n){var r=this.rules.replace(e,t,n);return r&&this.options.jss.plugins.onProcessRule(r),r}/**
   * Get index of a rule.
   */,t.indexOf=function(e){return this.rules.indexOf(e)}/**
   * Generates a CSS string.
   */,t.toString=function(e){return this.rules.toString(e)},e}(),u1=/*#__PURE__*/function(){function e(e,t,n){this.type="global",this.at=uZ,this.isProcessed=!1,this.key=e,this.options=n;var r=e.substr(uJ.length);this.rule=n.jss.createRule(r,t,M({},n,{parent:this}))}return e.prototype.toString=function(e){return this.rule?this.rule.toString(e):""},e}(),u2=/\s*,\s*/g;function u3(e,t){for(var n=e.split(u2),r="",o=0;o<n.length;o++)r+=t+" "+n[o].trim(),n[o+1]&&(r+=", ");return r}var u4=function(e){return e&&"object"==typeof e&&!Array.isArray(e)},u5="extendCurrValue"+Date.now(),u8=/\s*,\s*/g,u6=/&/g,u9=/\$([\w-]+)/g,u7=/[A-Z]/g,ce=/^ms-/,ct={};function cn(e){return"-"+e.toLowerCase()}var cr=function(e){if(ct.hasOwnProperty(e))return ct[e];var t=e.replace(u7,cn);return ct[e]=ce.test(t)?"-"+t:t};/**
 * Convert camel cased property names to dash separated.
 */function co(e){var t={};for(var n in e)t[0===n.indexOf("--")?n:cr(n)]=e[n];return e.fallbacks&&(Array.isArray(e.fallbacks)?t.fallbacks=e.fallbacks.map(co):t.fallbacks=co(e.fallbacks)),t}var ci=uW&&CSS?CSS.px:"px",ca=uW&&CSS?CSS.ms:"ms",cl=uW&&CSS?CSS.percent:"%";/**
 * Clones the object and adds a camel cased property version.
 */function cs(e){var t=/(-[a-z])/g,n=function(e){return e[1].toUpperCase()},r={};for(var o in e)r[o]=e[o],r[o.replace(t,n)]=e[o];return r}var cu=cs({// Animation properties
"animation-delay":ca,"animation-duration":ca,// Background properties
"background-position":ci,"background-position-x":ci,"background-position-y":ci,"background-size":ci,// Border Properties
border:ci,"border-bottom":ci,"border-bottom-left-radius":ci,"border-bottom-right-radius":ci,"border-bottom-width":ci,"border-left":ci,"border-left-width":ci,"border-radius":ci,"border-right":ci,"border-right-width":ci,"border-top":ci,"border-top-left-radius":ci,"border-top-right-radius":ci,"border-top-width":ci,"border-width":ci,"border-block":ci,"border-block-end":ci,"border-block-end-width":ci,"border-block-start":ci,"border-block-start-width":ci,"border-block-width":ci,"border-inline":ci,"border-inline-end":ci,"border-inline-end-width":ci,"border-inline-start":ci,"border-inline-start-width":ci,"border-inline-width":ci,"border-start-start-radius":ci,"border-start-end-radius":ci,"border-end-start-radius":ci,"border-end-end-radius":ci,// Margin properties
margin:ci,"margin-bottom":ci,"margin-left":ci,"margin-right":ci,"margin-top":ci,"margin-block":ci,"margin-block-end":ci,"margin-block-start":ci,"margin-inline":ci,"margin-inline-end":ci,"margin-inline-start":ci,// Padding properties
padding:ci,"padding-bottom":ci,"padding-left":ci,"padding-right":ci,"padding-top":ci,"padding-block":ci,"padding-block-end":ci,"padding-block-start":ci,"padding-inline":ci,"padding-inline-end":ci,"padding-inline-start":ci,// Mask properties
"mask-position-x":ci,"mask-position-y":ci,"mask-size":ci,// Width and height properties
height:ci,width:ci,"min-height":ci,"max-height":ci,"min-width":ci,"max-width":ci,// Position properties
bottom:ci,left:ci,top:ci,right:ci,inset:ci,"inset-block":ci,"inset-block-end":ci,"inset-block-start":ci,"inset-inline":ci,"inset-inline-end":ci,"inset-inline-start":ci,// Shadow properties
"box-shadow":ci,"text-shadow":ci,// Column properties
"column-gap":ci,"column-rule":ci,"column-rule-width":ci,"column-width":ci,// Font and text properties
"font-size":ci,"font-size-delta":ci,"letter-spacing":ci,"text-decoration-thickness":ci,"text-indent":ci,"text-stroke":ci,"text-stroke-width":ci,"word-spacing":ci,// Motion properties
motion:ci,"motion-offset":ci,// Outline properties
outline:ci,"outline-offset":ci,"outline-width":ci,// Perspective properties
perspective:ci,"perspective-origin-x":cl,"perspective-origin-y":cl,// Transform properties
"transform-origin":cl,"transform-origin-x":cl,"transform-origin-y":cl,"transform-origin-z":cl,// Transition properties
"transition-delay":ca,"transition-duration":ca,// Alignment properties
"vertical-align":ci,"flex-basis":ci,// Some random properties
"shape-margin":ci,size:ci,gap:ci,// Grid properties
grid:ci,"grid-gap":ci,"row-gap":ci,"grid-row-gap":ci,"grid-column-gap":ci,"grid-template-rows":ci,"grid-template-columns":ci,"grid-auto-rows":ci,"grid-auto-columns":ci,// Not existing properties.
// Used to avoid issues with jss-plugin-expand integration.
"box-shadow-x":ci,"box-shadow-y":ci,"box-shadow-blur":ci,"box-shadow-spread":ci,"font-line-height":ci,"text-shadow-x":ci,"text-shadow-y":ci,"text-shadow-blur":ci});/**
 * Recursive deep style passing function
 */function cc(e,t,n){if(null==t)return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]=cc(e,t[r],n);else if("object"==typeof t){if("fallbacks"===e)for(var o in t)t[o]=cc(o,t[o],n);else for(var i in t)t[i]=cc(e+"-"+i,t[i],n)}else if("number"==typeof t&&!1===isNaN(t)){var a=n[e]||cu[e];// Add the unit if available, except for the special case of 0px.
return a&&!(0===t&&a===ci)?"function"==typeof a?a(t).toString():""+t+a:t.toString()}return t}var cd=/**
 * Add unit to numeric values.
 */function(e){void 0===e&&(e={});var t=cs(e);return{onProcessStyle:function(e,n){if("style"!==n.type)return e;for(var r in e)e[r]=cc(r,e[r],t);return e},onChangeValue:function(e,n){return cc(n,e,t)}}},cf={"background-size":!0,"background-position":!0,border:!0,"border-bottom":!0,"border-left":!0,"border-top":!0,"border-right":!0,"border-radius":!0,"border-image":!0,"border-width":!0,"border-style":!0,"border-color":!0,"box-shadow":!0,flex:!0,margin:!0,padding:!0,outline:!0,"transform-origin":!0,transform:!0,transition:!0},cp={position:!0,// background-position
size:!0// background-size
},ch={padding:{top:0,right:0,bottom:0,left:0},margin:{top:0,right:0,bottom:0,left:0},background:{attachment:null,color:null,image:null,position:null,repeat:null},border:{width:null,style:null,color:null},"border-top":{width:null,style:null,color:null},"border-right":{width:null,style:null,color:null},"border-bottom":{width:null,style:null,color:null},"border-left":{width:null,style:null,color:null},outline:{width:null,style:null,color:null},"list-style":{type:null,position:null,image:null},transition:{property:null,duration:null,"timing-function":null,timingFunction:null,// Needed for avoiding comilation issues with jss-plugin-camel-case
delay:null},animation:{name:null,duration:null,"timing-function":null,timingFunction:null,// Needed to avoid compilation issues with jss-plugin-camel-case
delay:null,"iteration-count":null,iterationCount:null,// Needed to avoid compilation issues with jss-plugin-camel-case
direction:null,"fill-mode":null,fillMode:null,// Needed to avoid compilation issues with jss-plugin-camel-case
"play-state":null,playState:null// Needed to avoid compilation issues with jss-plugin-camel-case
},"box-shadow":{x:0,y:0,blur:0,spread:0,color:null,inset:null},"text-shadow":{x:0,y:0,blur:null,color:null}},cm={border:{radius:"border-radius",image:"border-image",width:"border-width",style:"border-style",color:"border-color"},"border-bottom":{width:"border-bottom-width",style:"border-bottom-style",color:"border-bottom-color"},"border-top":{width:"border-top-width",style:"border-top-style",color:"border-top-color"},"border-left":{width:"border-left-width",style:"border-left-style",color:"border-left-color"},"border-right":{width:"border-right-width",style:"border-right-style",color:"border-right-color"},background:{size:"background-size",image:"background-image"},font:{style:"font-style",variant:"font-variant",weight:"font-weight",stretch:"font-stretch",size:"font-size",family:"font-family",lineHeight:"line-height",// Needed to avoid compilation issues with jss-plugin-camel-case
"line-height":"line-height"},flex:{grow:"flex-grow",basis:"flex-basis",direction:"flex-direction",wrap:"flex-wrap",flow:"flex-flow",shrink:"flex-shrink"},align:{self:"align-self",items:"align-items",content:"align-content"},grid:{"template-columns":"grid-template-columns",templateColumns:"grid-template-columns","template-rows":"grid-template-rows",templateRows:"grid-template-rows","template-areas":"grid-template-areas",templateAreas:"grid-template-areas",template:"grid-template","auto-columns":"grid-auto-columns",autoColumns:"grid-auto-columns","auto-rows":"grid-auto-rows",autoRows:"grid-auto-rows","auto-flow":"grid-auto-flow",autoFlow:"grid-auto-flow",row:"grid-row",column:"grid-column","row-start":"grid-row-start",rowStart:"grid-row-start","row-end":"grid-row-end",rowEnd:"grid-row-end","column-start":"grid-column-start",columnStart:"grid-column-start","column-end":"grid-column-end",columnEnd:"grid-column-end",area:"grid-area",gap:"grid-gap","row-gap":"grid-row-gap",rowGap:"grid-row-gap","column-gap":"grid-column-gap",columnGap:"grid-column-gap"}};/**
 * Convert object to array.
 */function cg(e,t,n,r,o){if(!(ch[t]||cm[t]))return[];var i=[];// Check if exists any non-standard property
// Pass throught all standart props
if(cm[t]&&(e=/**
 * Convert custom properties values to styles adding them to rule directly
 */function(e,t,n,r){for(var o in n){var i=n[o];// If current property doesn't exist already in rule - add new one
if(void 0!==e[o]&&(r||!t.prop(i))){var a,l=cv(((a={})[i]=e[o],a),t)[i];// Add style directly in rule
r?t.style.fallbacks[i]=l:t.style[i]=l}// Delete converted property to avoid double converting
delete e[o]}return e}(e,n,cm[t],r)),Object.keys(e).length)for(var a in ch[t]){if(e[a]){Array.isArray(e[a])?i.push(null===cp[a]?e[a]:e[a].join(" ")):i.push(e[a]);continue}// Add default value from props config.
null!=ch[t][a]&&i.push(ch[t][a])}return!i.length||o?i:[i]}/**
 * Detect if a style needs to be converted.
 */function cv(e,t,n){for(var r in e){var o=e[r];if(Array.isArray(o)){if(!Array.isArray(o[0])){if("fallbacks"===r){for(var i=0;i<e.fallbacks.length;i++)e.fallbacks[i]=cv(e.fallbacks[i],t,!0);continue}e[r]=/**
 * Convert array to nested array, if needed
 */function e(t,n,r,o){return null==r[n]?t:0===t.length?[]:Array.isArray(t[0])?e(t[0],n,r,o):"object"==typeof t[0]?t.map(function(e){return cg(e,n,o,!1,!0)}):[t]}(o,r,cf,t),e[r].length||delete e[r]}}else if("object"==typeof o){if("fallbacks"===r){e.fallbacks=cv(e.fallbacks,t,!0);continue}e[r]=cg(o,r,t,n),e[r].length||delete e[r]}else""===e[r]&&delete e[r]}return e}function cy(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}// Export javascript style and css style vendor prefixes.
var cb="",cw="",cx="",ck="",cS=sB&&"ontouchstart"in document.documentElement;if(sB){// Order matters. We need to check Webkit the last one because
// other vendors use to add Webkit prefixes to some properties
var cE={Moz:"-moz-",ms:"-ms-",O:"-o-",Webkit:"-webkit-"},c_=document.createElement("p").style;for(var cC in cE)if(cC+"Transform" in c_){cb=cC,cw=cE[cC];break}"Webkit"===cb&&"msHyphens"in c_&&(cb="ms",cw=cE.ms,ck="edge"),"Webkit"===cb&&"-apple-trailing-word"in c_&&(cx="apple")}/**
 * Vendor prefix string for the current browser.
 *
 * @type {{js: String, css: String, vendor: String, browser: String}}
 * @api public
 */var cP={js:cb,css:cw,vendor:cx,browser:ck,isTouch:cS},cR=/[-\s]+(.)?/g;/**
 * Replaces the letter with the capital letter
 *
 * @param {String} match
 * @param {String} c
 * @return {String}
 * @api private
 */function cN(e,t){return t?t.toUpperCase():""}/**
 * Convert dash separated strings to camel-cased.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */function cO(e){return e.replace(cR,cN)}/**
 * Convert dash separated strings to pascal cased.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */function cT(e){return cO("-"+e)}var cj={"flex-grow":"flex-positive","flex-shrink":"flex-negative","flex-basis":"flex-preferred-size","justify-content":"flex-pack",order:"flex-order","align-items":"flex-align","align-content":"flex-line-pack"// 'align-self' is handled by 'align-self' plugin.
},cM={flex:"box-flex","flex-grow":"box-flex","flex-direction":["box-orient","box-direction"],order:"box-ordinal-group","align-items":"box-align","flex-flow":["box-orient","box-direction"],"justify-content":"box-pack"},cA=Object.keys(cM),cz=function(e){return cP.css+e},cD=[{noPrefill:["appearance"],supportedProperty:function(e){return"appearance"===e&&("ms"===cP.js?"-webkit-"+e:cP.css+e)}},{noPrefill:["color-adjust"],supportedProperty:function(e){return"color-adjust"===e&&("Webkit"===cP.js?cP.css+"print-"+e:e)}},{noPrefill:["mask"],supportedProperty:function(e,t){if(!/^mask/.test(e))return!1;if("Webkit"===cP.js){var n="mask-image";if(cO(n) in t)return e;if(cP.js+cT(n) in t)return cP.css+e}return e}},{noPrefill:["text-orientation"],supportedProperty:function(e){return"text-orientation"===e&&("apple"!==cP.vendor||cP.isTouch?e:cP.css+e)}},{noPrefill:["transform"],supportedProperty:function(e,t,n){return"transform"===e&&(n.transform?e:cP.css+e)}},{noPrefill:["transition"],supportedProperty:function(e,t,n){return"transition"===e&&(n.transition?e:cP.css+e)}},{noPrefill:["writing-mode"],supportedProperty:function(e){return"writing-mode"===e&&("Webkit"===cP.js||"ms"===cP.js&&"edge"!==cP.browser?cP.css+e:e)}},{noPrefill:["user-select"],supportedProperty:function(e){return"user-select"===e&&("Moz"===cP.js||"ms"===cP.js||"apple"===cP.vendor?cP.css+e:e)}},{supportedProperty:function(e,t){return!!/^break-/.test(e)&&("Webkit"===cP.js?"WebkitColumn"+cT(e) in t&&cP.css+"column-"+e:"Moz"===cP.js&&"page"+cT(e) in t&&"page-"+e)}},{supportedProperty:function(e,t){if(!/^(border|margin|padding)-inline/.test(e))return!1;if("Moz"===cP.js)return e;var n=e.replace("-inline","");return cP.js+cT(n) in t&&cP.css+n}},{supportedProperty:function(e,t){return cO(e) in t&&e}},{supportedProperty:function(e,t){var n=cT(e);// Return custom CSS variable without prefixing.
return"-"===e[0]||"-"===e[0]&&"-"===e[1]?e:cP.js+n in t?cP.css+e:"Webkit"!==cP.js&&"Webkit"+n in t&&"-webkit-"+e// Return already prefixed value without prefixing.
}},{supportedProperty:function(e){return"scroll-snap"===e.substring(0,11)&&("ms"===cP.js?""+cP.css+e:e)}},{supportedProperty:function(e){return"overscroll-behavior"===e&&("ms"===cP.js?cP.css+"scroll-chaining":e)}},{supportedProperty:function(e,t){var n=cj[e];return!!n&&cP.js+cT(n) in t&&cP.css+n}},{supportedProperty:function(e,t,n){var r=n.multiple;if(cA.indexOf(e)>-1){var o=cM[e];if(!Array.isArray(o))return cP.js+cT(o) in t&&cP.css+o;if(!r)return!1;for(var i=0;i<o.length;i++)if(!(cP.js+cT(o[0]) in t))return!1;return o.map(cz)}return!1}}],cI=cD.filter(function(e){return e.supportedProperty}).map(function(e){return e.supportedProperty}),cL=cD.filter(function(e){return e.noPrefill}).reduce(function(e,t){var n;return e.push.apply(e,function(e){if(Array.isArray(e))return cy(e)}(n=t.noPrefill)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(n)||function(e,t){if(e){if("string"==typeof e)return cy(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return cy(e,t)}}(n)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),e},[]),cF={};// Support old flex spec from 2012.
if(sB){b=document.createElement("p");// We test every property on vendor prefix requirement.
// Once tested, result is cached. It gives us up to 70% perf boost.
// http://jsperf.com/element-style-object-access-vs-plain-object
//
// Prefill cache with known css properties to reduce amount of
// properties we need to feature test at runtime.
// http://davidwalsh.name/vendor-prefix
var c$=window.getComputedStyle(document.documentElement,"");for(var cV in c$)isNaN(cV)||(cF[c$[cV]]=c$[cV]);// Properties that cannot be correctly detected using the
// cache prefill method.
cL.forEach(function(e){return delete cF[e]})}/**
 * Test if a property is supported, returns supported property with vendor
 * prefix if required. Returns `false` if not supported.
 *
 * @param {String} prop dash separated
 * @param {Object} [options]
 * @return {String|Boolean}
 * @api public
 */function cU(e,t){// For server-side rendering.
if(void 0===t&&(t={}),!b)return e;// Remove cache for benchmark tests or return property from the cache.
if(null!=cF[e])return cF[e];("transition"===e||"transform"===e)&&(t[e]=e in b.style);// Find a plugin for current prefix property.
for(var n=0;n<cI.length&&(cF[e]=cI[n](e,b.style,t),!cF[e]);n++);// Reset styles for current property.
// Firefox can even throw an error for invalid properties, e.g., "0".
try{b.style[e]=""}catch(e){return!1}return cF[e]}var cW={},cB={transition:1,"transition-property":1,"-webkit-transition":1,"-webkit-transition-property":1},cH=/(^\s*[\w-]+)|, (\s*[\w-]+)(?![^()]*\))/g;/**
 * Returns prefixed value transition/transform if needed.
 *
 * @param {String} match
 * @param {String} p1
 * @param {String} p2
 * @return {String}
 * @api private
 */function cY(e,t,n){return"var"===t?"var":"all"===t?"all":"all"===n?", all":(t?cU(t):", "+cU(n))||t||n}/**
 * Returns prefixed value if needed. Returns `false` if value is not supported.
 *
 * @param {String} property
 * @param {String} value
 * @return {String|Boolean}
 * @api public
 */function cq(e,t){// For server-side rendering.
var n=t;if(!w||"content"===e)return t;// It is a string or a number as a string like '1'.
// We want only prefixable values here.
// eslint-disable-next-line no-restricted-globals
if("string"!=typeof n||!isNaN(parseInt(n,10)))return n;// Create cache key for current value.
var r=e+n;// Remove cache for benchmark tests or return value from cache.
if(null!=cW[r])return cW[r];// IE can even throw an error in some cases, for e.g. style.content = 'bar'.
try{// Test value as it is.
w.style[e]=n}catch(e){return(// Return false if value not supported.
cW[r]=!1,!1)}// If 'transition' or 'transition-property' property.
if(cB[e])n=n.replace(cH,cY);else if(""===w.style[e]&&("-ms-flex"===// Value with a vendor prefix.
(n=cP.css+n)&&(w.style[e]="-ms-flexbox"),w.style[e]=n,""===w.style[e]))return cW[r]=!1,!1;// Reset styles for current property.
return w.style[e]="",cW[r]=n,cW[r]}sB&&(w=document.createElement("p"));var cG=/**
 * Sort props by length.
 */function(){var e=function(e,t){return e.length===t.length?e>t?1:-1:e.length-t.length};return{onProcessStyle:function(t,n){if("style"!==n.type)return t;for(var r={},o=Object.keys(t).sort(e),i=0;i<o.length;i++)r[o[i]]=t[o[i]];return r}}},cQ=function(e){var t;return void 0===e&&(e={}),{plugins:[{onCreateRule:function(e,t,n){if("function"!=typeof t)return null;var r=sJ(e,{},n);return r[uY]=t,r},onProcessStyle:function(e,t){// We need to extract function values from the declaration, so that we can keep core unaware of them.
// We need to do that only once.
// We don't need to extract functions on each style update, since this can happen only once.
// We don't support function values inside of function rules.
if(uH in t||uY in t)return e;var n={};for(var r in e){var o=e[r];"function"==typeof o&&(delete e[r],n[r]=o)}return t[uH]=n,e},onUpdate:function(e,t,n,r){var o=t[uY];// If we have a style function, the entire rule is dynamic and style object
// will be returned from that function.
o&&// Empty object will remove all currently defined props
// in case function rule returns a falsy value.
(t.style=o(e)||{});var i=t[uH];// If we have a fn values map, it is a rule with function values.
if(i)for(var a in i)t.prop(a,i[a](e),r)}},(t=e.observable,{onCreateRule:function(e,n,r){if(!uG(n))return null;var o=sJ(e,{},r);// TODO
return(// Call `stream.subscribe()` returns a subscription, which should be explicitly
// unsubscribed from when we know this sheet is no longer needed.
n.subscribe(function(e){for(var n in e)o.prop(n,e[n],t)}),o)},onProcessRule:function(e){if(!e||"style"===e.type){var n=e.style,r=function(r){var o=n[r];if(!uG(o))return"continue";delete n[r],o.subscribe({next:function(n){e.prop(r,n,t)}})};for(var o in n)if("continue"===r(o))continue}}}),{onProcessRule:uX},{onCreateRule:function(e,t,n){if(!e)return null;if(e===uZ)return new u0(e,t,n);if("@"===e[0]&&e.substr(0,uJ.length)===uJ)return new u1(e,t,n);var r=n.parent;return r&&("global"===r.type||r.options.parent&&"global"===r.options.parent.type)&&(n.scoped=!1),n.selector||!1!==n.scoped||(n.selector=e),null},onProcessRule:function(e,t){"style"===e.type&&t&&(function(e,t){var n=e.options,r=e.style,o=r?r[uZ]:null;if(o){for(var i in o)t.addRule(i,o[i],M({},n,{selector:u3(i,e.selector)}));delete r[uZ]}}(e,t),function(e,t){var n=e.options,r=e.style;for(var o in r)if("@"===o[0]&&o.substr(0,uZ.length)===uZ){var i=u3(o.substr(uZ.length),e.selector);t.addRule(i,r[o],M({},n,{selector:i})),delete r[o]}}(e,t))}},{onProcessStyle:function(e,t,n){return"extend"in e?/**
 * Recursively extend styles.
 */function e(t,n,r,o){return void 0===o&&(o={}),function(t,n,r,o){if("string"==typeof t.extend){if(!r)return;var i=r.getRule(t.extend);if(!i||i===n)return;var a=i.options.parent;a&&e(a.rules.raw[t.extend],n,r,o);return}// Extend using an array.
if(Array.isArray(t.extend)){for(var l=0;l<t.extend.length;l++){var s=t.extend[l];e("string"==typeof s?M({},t,{extend:s}):t.extend[l],n,r,o)}return}// Extend is a style object.
for(var u in t.extend){if("extend"===u){e(t.extend.extend,n,r,o);continue}if(u4(t.extend[u])){u in o||(o[u]={}),e(t.extend[u],n,r,o[u]);continue}o[u]=t.extend[u]}}(t,n,r,o),function(t,n,r,o){// Copy base style.
for(var i in t)if("extend"!==i){if(u4(o[i])&&u4(t[i])){e(t[i],n,r,o[i]);continue}if(u4(t[i])){o[i]=e(t[i],n,r);continue}o[i]=t[i]}}(t,n,r,o),o}(e,t,n):e},onChangeValue:function(e,t,n){if("extend"!==t)return e;// Value is empty, remove properties set previously.
if(null==e||!1===e){for(var r in n[u5])n.prop(r,null);return n[u5]=null,null}if("object"==typeof e){for(var o in e)n.prop(o,e[o]);n[u5]=e}// Make sure we don't set the value in the core.
return null}},{onProcessStyle:function(e,t,n){if("style"!==t.type)return e;var r,o,i=t.options.parent;for(var a in e){var l=-1!==a.indexOf("&"),s="@"===a[0];if(l||s){if(r=function(e,t,n){// Options has been already created, now we only increase index.
if(n)return M({},n,{index:n.index+1});var r=e.options.nestingLevel;r=void 0===r?1:r+1;var o=M({},e.options,{nestingLevel:r,index:t.indexOf(e)+1// We don't need the parent name to be set options for chlid.
});return delete o.name,o}(t,i,r),l){var u=function(e,t){for(var n=t.split(u8),r=e.split(u8),o="",i=0;i<n.length;i++)for(var a=n[i],l=0;l<r.length;l++){var s=r[l];o&&(o+=", "),o+=-1!==s.indexOf("&")?s.replace(u6,a):a+" "+s}return o}(a,t.selector);// Lazily create the ref replacer function just once for
o||(o=// Get a function to be used for $ref replacement.
function(e,t){return function(n,r){var o=e.getRule(r)||t&&t.getRule(r);return o?o.selector:r}}(i,n)),u=u.replace(u9,o);var c=t.key+"-"+a;"replaceRule"in i?i.replaceRule(c,e[a],M({},r,{selector:u})):i.addRule(c,e[a],M({},r,{selector:u}))}else s&&i.addRule(a,{},r).addRule(t.key,e[a],{selector:t.selector});delete e[a]}}return e}},{onProcessStyle:function(e,t){return"composes"in e&&(/**
 * Set selector.
 *
 * @param original rule
 * @param className class string
 * @return flag indicating function was successfull or not
 */function e(t,n){// Skip falsy values
if(!n)return!0;// Support array of class names `{composes: ['foo', 'bar']}`
if(Array.isArray(n)){for(var r=0;r<n.length;r++)if(!e(t,n[r]))return!1;return!0}// Support space separated class names `{composes: 'foo bar'}`
if(n.indexOf(" ")>-1)return e(t,n.split(" "));var o=t.options.parent;// It is a ref to a local rule.
if("$"===n[0]){var i=o.getRule(n.substr(1));return!!i&&i!==t&&(o.classes[t.key]+=" "+o.classes[i.key],!0)}return o.classes[t.key]+=" "+n,!0}(t,e.composes),delete e.composes),e}},{onProcessStyle:function(e){if(Array.isArray(e)){// Handle rules like @font-face, which can have multiple styles in an array
for(var t=0;t<e.length;t++)e[t]=co(e[t]);return e}return co(e)},onChangeValue:function(e,t,n){if(0===t.indexOf("--"))return e;var r=cr(t);// There was no camel case in place
return t===r?e:(n.prop(r,e),null)}},cd(e.defaultUnit),{onProcessStyle:function(e,t){if(!e||"style"!==t.type)return e;if(Array.isArray(e)){// Pass rules one by one and reformat them
for(var n=0;n<e.length;n++)e[n]=cv(e[n],t);return e}return cv(e,t)}},{onProcessRule:function(e){if("keyframes"===e.type){var t;e.at=// Keyframes is already prefixed. e.g. key = '@-webkit-keyframes a'
"-"===(t=e.at)[1]||"ms"===cP.js?t:"@"+cP.css+"keyframes"+t.substr(10)// No need to prefix IE/Edge. Older browsers will ignore unsupported rules.
}},onProcessStyle:function(e,t){return"style"!==t.type?e:function e(t){for(var n in t){var r=t[n];if("fallbacks"===n&&Array.isArray(r)){t[n]=r.map(e);continue}var o=!1,i=cU(n);i&&i!==n&&(o=!0);var a=!1,l=cq(i,s1(r));l&&l!==r&&(a=!0),(o||a)&&(o&&delete t[n],t[i||n]=l||r)}return t}(e)},onChangeValue:function(e,t){return cq(t,s1(e))||e}},cG()]}},cK=uV(cQ()),cX=function(e){void 0===e&&(e=cK);var t,n=new Map,r=0,o=function(){return(!t||t.rules.index.length>1e4)&&(t=e.createStyleSheet().attach()),t};function i(){// eslint-disable-next-line prefer-rest-params
var e=arguments,t=JSON.stringify(e),i=n.get(t);// We can avoid the need for stringification with a babel plugin,
if(i)return i.className;var a=[];// Flatten arguments which can be
// - style objects
// - array of style objects
// - arrays of style objects
for(var l in e){var s=e[l];if(!Array.isArray(s)){a.push(s);continue}for(var u=0;u<s.length;u++)a.push(s[u])}for(var c={},d=[],f=0;f<a.length;f++){var p=a[f];if(p){var h=p;// It can be a class name that css() has previously generated.
if("string"==typeof p){// eslint-disable-next-line no-shadow
var m=n.get(p);m&&(m.labels.length&&d.push.apply(d,m.labels),h=m.style)}h.label&&-1===d.indexOf(h.label)&&d.push(h.label),Object.assign(c,h)}}delete c.label;var g=(0===d.length?"css":d.join("-"))+"-"+r++;o().addRule(g,c);var v=o().classes[g],y={style:c,labels:d,className:v};return n.set(t,y),n.set(v,y),v}// For testing only.
return i.getSheet=o,i}(),cZ=Number.MIN_SAFE_INTEGER||-1e9,cJ=(0,R.createContext)({classNamePrefix:"",disableStylesGeneration:!1,isSSR:!sB}),c0=new Map,c1=function(e,t){// If `managers` map is present in the context, we use it in order to
// let JssProvider reset them when new response has to render server-side.
var n=e.managers;if(n)return n[t]||(n[t]=new uU),n[t];var r=c0.get(t);return r||(r=new uU,c0.set(t,r)),r},c2=function(e){var t=e.sheet,n=e.context,r=e.index,o=e.theme;t&&(c1(n,r).manage(o),n.registry&&n.registry.add(t))},c3=function(e){e.sheet&&c1(e.context,e.index).unmanage(e.theme)},c4=uV(cQ()),c5=new WeakMap,c8=function(e){return c5.get(e)},c6=function(e,t){c5.set(e,t)},c9=function(e){var t=e.styles;return"function"!=typeof t?t:t(e.theme)},c7=function(e){if(!e.context.disableStylesGeneration){var t,n,r,o,i=c1(e.context,e.index),a=i.get(e.theme);if(a)return a;var l=e.context.jss||c4,s=c9(e),u=/**
 * Extracts a styles object with only props that contain function values.
 */function e(t){var n=null;for(var r in t){var o=t[r],i=typeof o;if("function"===i)n||(n={}),n[r]=o;else if("object"===i&&null!==o&&!Array.isArray(o)){var a=e(o);a&&(n||(n={}),n[r]=a)}}return n}(s),c=l.createStyleSheet(s,(t=null!==u,e.context.id&&null!=e.context.id.minify&&(n=e.context.id.minify),r=e.context.classNamePrefix||"",e.name&&!n&&(r+=e.name.replace(/\s/g,"-")+"-"),o="",e.name&&(o=e.name+", "),o+="function"==typeof e.styles?"Themed":"Unthemed",M({},e.sheetOptions,{index:e.index,meta:o,classNamePrefix:r,link:t,generateId:e.sheetOptions&&e.sheetOptions.generateId?e.sheetOptions.generateId:e.context.generateId})));return c6(c,{dynamicStyles:u,styles:s}),i.add(e.theme,c),c}},de=function(e,t){// Loop over each dynamic rule and remove the dynamic rule
// We can't just remove the whole sheet as this has all of the rules for every component instance
for(var n in t)e.deleteRule(t[n])},dt=function(e,t,n){// Loop over each dynamic rule and update it
// We can't just update the whole sheet as this has all of the rules for every component instance
for(var r in n)t.updateOne(n[r],e)},dn=function(e,t){var n=c8(e);if(n){var r={};// Loop over each dynamic rule and add it to the stylesheet
for(var o in n.dynamicStyles)for(var i=e.rules.index.length,a=e.addRule(o,n.dynamicStyles[o]),l=i;l<e.rules.index.length;l++){var s=e.rules.index[l];e.updateOne(s,t),// can correctly concat the dynamic class with the static one
r[a===s?o:s.key]=s}return r}},dr=function(e,t){if(!t)return e.classes;var n=c8(e);if(!n)return e.classes;var r={};for(var o in n.styles)r[o]=e.classes[o],o in t&&(r[o]+=" "+e.classes[t[o].key]);return r};function di(e){return e?R.useEffect:/*@__PURE__*/k(R).useInsertionEffect||R.useLayoutEffect}var da={},dl=function(e,t){void 0===t&&(t={});var n=t,r=n.index,o=void 0===r?cZ++:r,i=n.theming,a=n.name,l=sS(n,["index","theming","name"]),s=i&&i.context||sV,u={};return function(t){var n,r=(0,R.useRef)(!0),i=(0,R.useContext)(cJ),c=(n=t&&t.theme,"function"==typeof e&&(n||(0,R.useContext)(s))||da),d=(0,R.useMemo)(function(){var n=c7({context:i,styles:e,name:a,theme:c,index:o,sheetOptions:l});return n&&i.isSSR&&c2({index:o,context:i,sheet:n,theme:c}),[n,n?dn(n,t):null]},[i,c]),f=d[0],p=d[1];di(i.isSSR)(function(){// We only need to update the rules on a subsequent update and not in the first mount
f&&p&&!r.current&&dt(t,f,p)},[t]),di(i.isSSR)(function(){return f&&c2({index:o,context:i,sheet:f,theme:c}),function(){f&&(c3({index:o,context:i,sheet:f,theme:c}),p&&de(f,p))}},[f]);var h=(0,R.useMemo)(function(){return f&&p?dr(f,p):u},[f,p]);return(0,R.useDebugValue)(h),(0,R.useDebugValue)(c===da?"No theme":c),(0,R.useEffect)(function(){r.current=!1}),h}};Symbol("react-jss-styled"),void 0===f&&(f=cX);var ds={},l8=_("8ThvE"),du={};du=/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */function(e){var t=su(e),n=t%1;return t==t?n?t-n:t:0};var dc={},dd={},df={};df=/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o};var dp={};dp=Array.isArray;/** Used as references for various `Number` constants. */var dh=1/0,dm=l5?l5.prototype:void 0,dg=dm?dm.toString:void 0;dd=/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */function e(t){// Exit early for strings to avoid a performance hit in some environments.
if("string"==typeof t)return t;if(dp(t))return df(t,e)+"";if(sm(t))return dg?dg.call(t):"";var n=t+"";return"0"==n&&1/t==-dh?"-0":n},dc=/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */function(e){return null==e?"":dd(e)};/* Built-in method references for those with the same name as other `lodash` methods. */var dv=l8.isFinite,dy=Math.min;o=Math.round,ds=function(e,t){if(e=sc(e),(t=null==t?0:dy(du(t),292))&&dv(e)){// Shift with exponential notation to avoid floating-point issues.
// See [MDN](https://mdn.io/round#Examples) for more details.
var n=(dc(e)+"e").split("e"),r=o(n[0]+"e"+(+n[1]+t));return+((n=(dc(r)+"e").split("e"))[0]+"e"+(+n[1]-t))}return o(e)};var db={},dw={},dx={},dk={},dS={},dE={};dE=/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */function(){this.__data__=[],this.size=0};var d_={},dC={};dC=/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */function(e,t){for(var n=e.length;n--;)if(l1(e[n][0],t))return n;return -1};/** Built-in value references. */var dP=Array.prototype.splice;d_=/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function(e){var t=this.__data__,n=dC(t,e);return!(n<0)&&(n==t.length-1?t.pop():dP.call(t,n,1),--this.size,!0)};var dR={};dR=/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function(e){var t=this.__data__,n=dC(t,e);return n<0?void 0:t[n][1]};var dN={};dN=/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function(e){return dC(this.__data__,e)>-1};var dO={};/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function dT(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}dO=/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */function(e,t){var n=this.__data__,r=dC(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this},// Add methods to `ListCache`.
dT.prototype.clear=dE,dT.prototype.delete=d_,dT.prototype.get=dR,dT.prototype.has=dN,dT.prototype.set=dO,dS=dT;var dj={};dj=/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */function(){this.__data__=new dS,this.size=0};var dM={};dM=/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n};var dA={};dA=/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function(e){return this.__data__.get(e)};var dz={};dz=/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function(e){return this.__data__.has(e)};var dD={},dI={},dL={},dF={},d$={},dV={},l8=_("8ThvE");dV=l8["__core-js_shared__"];/** Used to detect methods masquerading as native. */var dU=(p=/[^.]+$/.exec(dV&&dV.keys&&dV.keys.IE_PROTO||""))?"Symbol(src)_1."+p:"";d$=/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */function(e){return!!dU&&dU in e};var dW={},dB=Function.prototype.toString;dW=/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */function(e){if(null!=e){try{return dB.call(e)}catch(e){}try{return e+""}catch(e){}}return""};/** Used to detect host constructors (Safari). */var dH=/^\[object .+?Constructor\]$/,dY=Object.prototype,dq=Function.prototype.toString,dG=dY.hasOwnProperty,dQ=RegExp("^"+dq.call(dG).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");dF=/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */function(e){return!(!si(e)||d$(e))&&(l3(e)?dQ:dH).test(dW(e))};var dK={};dK=/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */function(e,t){return null==e?void 0:e[t]},dL=/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */function(e,t){var n=dK(e,t);return dF(n)?n:void 0};var l8=_("8ThvE");dI=dL(l8,"Map");var dX={},dZ={},dJ={},d0={},d1={};d1=dL(Object,"create"),d0=/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */function(){this.__data__=d1?d1(null):{},this.size=0};var d2={};d2=/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t};var d3={},d4=Object.prototype.hasOwnProperty;d3=/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function(e){var t=this.__data__;if(d1){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return d4.call(t,e)?t[e]:void 0};var d5={},d8=Object.prototype.hasOwnProperty;d5=/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function(e){var t=this.__data__;return d1?void 0!==t[e]:d8.call(t,e)};var d6={};/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function d9(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}d6=/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=d1&&void 0===t?"__lodash_hash_undefined__":t,this},// Add methods to `Hash`.
d9.prototype.clear=d0,d9.prototype.delete=d2,d9.prototype.get=d3,d9.prototype.has=d5,d9.prototype.set=d6,dJ=d9,dZ=/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */function(){this.size=0,this.__data__={hash:new dJ,map:new(dI||dS),string:new dJ}};var d7={},fe={},ft={};ft=/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e},fe=/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */function(e,t){var n=e.__data__;return ft(t)?n["string"==typeof t?"string":"hash"]:n.map},d7=/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function(e){var t=fe(this,e).delete(e);return this.size-=t?1:0,t};var fn={};fn=/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function(e){return fe(this,e).get(e)};var fr={};fr=/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function(e){return fe(this,e).has(e)};var fo={};/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function fi(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function fa(e){var t=this.__data__=new dS(e);this.size=t.size}fo=/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */function(e,t){var n=fe(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this},// Add methods to `MapCache`.
fi.prototype.clear=dZ,fi.prototype.delete=d7,fi.prototype.get=fn,fi.prototype.has=fr,fi.prototype.set=fo,dX=fi,dD=/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */function(e,t){var n=this.__data__;if(n instanceof dS){var r=n.__data__;if(!dI||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new dX(r)}return n.set(e,t),this.size=n.size,this},// Add methods to `Stack`.
fa.prototype.clear=dj,fa.prototype.delete=dM,fa.prototype.get=dA,fa.prototype.has=dz,fa.prototype.set=dD,dk=fa;var fl={},fs={},fu={};fu=/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this};var fc={};/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */function fd(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new dX;++t<n;)this.add(e[t])}fc=/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */function(e){return this.__data__.has(e)},// Add methods to `SetCache`.
fd.prototype.add=fd.prototype.push=fu,fd.prototype.has=fc,fs=fd;var ff={};ff=/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1};var fp={};fp=/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function(e,t){return e.has(t)},fl=/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */function(e,t,n,r,o,i){var a=1&n,l=e.length,s=t.length;if(l!=s&&!(a&&s>l))return!1;// Check that cyclic values are equal.
var u=i.get(e),c=i.get(t);if(u&&c)return u==t&&c==e;var d=-1,f=!0,p=2&n?new fs:void 0;// Ignore non-index properties.
for(i.set(e,t),i.set(t,e);++d<l;){var h=e[d],m=t[d];if(r)var g=a?r(m,h,d,t,e,i):r(h,m,d,e,t,i);if(void 0!==g){if(g)continue;f=!1;break}// Recursively compare arrays (susceptible to call stack limits).
if(p){if(!ff(t,function(e,t){if(!fp(p,t)&&(h===e||o(h,e,n,r,i)))return p.push(t)})){f=!1;break}}else if(!(h===m||o(h,m,n,r,i))){f=!1;break}}return i.delete(e),i.delete(t),f};var fh={},fm={},l8=_("8ThvE");fm=l8.Uint8Array;var fg={};fg=/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */function(e){var t=-1,n=Array(e.size);return e.forEach(function(e,r){n[++t]=[r,e]}),n};var fv={};fv=/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */function(e){var t=-1,n=Array(e.size);return e.forEach(function(e){n[++t]=e}),n};/** Used to convert symbols to primitives and strings. */var fy=l5?l5.prototype:void 0,fb=fy?fy.valueOf:void 0;fh=/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */function(e,t,n,r,o,i,a){switch(n){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)break;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":if(e.byteLength!=t.byteLength||!i(new fm(e),new fm(t)))break;return!0;case"[object Boolean]":case"[object Date]":case"[object Number]":// Coerce booleans to `1` or `0` and dates to milliseconds.
// Invalid dates are coerced to `NaN`.
return l1(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":// Coerce regexes to strings and treat strings, primitives and objects,
// as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
// for more details.
return e==t+"";case"[object Map]":var l=fg;case"[object Set]":var s=1&r;if(l||(l=fv),e.size!=t.size&&!s)break;// Assume cyclic values are equal.
var u=a.get(e);if(u)return u==t;r|=2,// Recursively compare objects (susceptible to call stack limits).
a.set(e,t);var c=fl(l(e),l(t),r,o,i,a);return a.delete(e),c;case"[object Symbol]":if(fb)return fb.call(e)==fb.call(t)}return!1};var fw={},fx={},fk={},fS={};fS=/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */function(e,t){for(var n=-1,r=t.length,o=e.length;++n<r;)e[o+n]=t[n];return e},fk=/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */function(e,t,n){var r=t(e);return dp(e)?r:fS(r,n(e))};var fE={},f_={};f_=/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */function(e,t){for(var n=-1,r=null==e?0:e.length,o=0,i=[];++n<r;){var a=e[n];t(a,n,e)&&(i[o++]=a)}return i};var fC={};fC=/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */function(){return[]};/** Built-in value references. */var fP=Object.prototype.propertyIsEnumerable,fR=Object.getOwnPropertySymbols;fE=fR?function(e){return null==e?[]:(e=Object(e),f_(fR(e),function(t){return fP.call(e,t)}))}:fC;var fN={},fO={},fT={};fT=/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r};var fj={},fM={};fM=/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */function(e){return sg(e)&&"[object Arguments]"==l4(e)};/** Used for built-in method references. */var fA=Object.prototype,fz=fA.hasOwnProperty,fD=fA.propertyIsEnumerable;fj=fM(function(){return arguments}())?fM:function(e){return sg(e)&&fz.call(e,"callee")&&!fD.call(e,"callee")};var fI=_("7HKs8"),fL={},fF={},f$={};f$["[object Float32Array]"]=f$["[object Float64Array]"]=f$["[object Int8Array]"]=f$["[object Int16Array]"]=f$["[object Int32Array]"]=f$["[object Uint8Array]"]=f$["[object Uint8ClampedArray]"]=f$["[object Uint16Array]"]=f$["[object Uint32Array]"]=!0,f$["[object Arguments]"]=f$["[object Array]"]=f$["[object ArrayBuffer]"]=f$["[object Boolean]"]=f$["[object DataView]"]=f$["[object Date]"]=f$["[object Error]"]=f$["[object Function]"]=f$["[object Map]"]=f$["[object Number]"]=f$["[object Object]"]=f$["[object RegExp]"]=f$["[object Set]"]=f$["[object String]"]=f$["[object WeakMap]"]=!1,fF=/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */function(e){return sg(e)&&sa(e.length)&&!!f$[l4(e)]};var fV={};fV=/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */function(e){return function(t){return e(t)}};var fU=_("7vc1R"),fW=fU&&fU.isTypedArray;fL=fW?fV(fW):fF;/** Used to check objects for own properties. */var fB=Object.prototype.hasOwnProperty;fO=/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */function(e,t){var n=dp(e),r=!n&&fj(e),o=!n&&!r&&fI(e),i=!n&&!r&&!o&&fL(e),a=n||r||o||i,l=a?fT(e.length,String):[],s=l.length;for(var u in e)(t||fB.call(e,u))&&!(a&&// Safari 9 has enumerable `arguments.length` in strict mode.
("length"==u||// Node.js 0.10 has enumerable non-index properties on buffers.
o&&("offset"==u||"parent"==u)||// PhantomJS 2 has enumerable non-index properties on typed arrays.
i&&("buffer"==u||"byteLength"==u||"byteOffset"==u)||// Skip index properties.
sl(u,s)))&&l.push(u);return l};var fH={},fY={},fq=Object.prototype;fY=/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||fq)};var fG={};i=Object.keys,a=Object,fG=function(e){return i(a(e))};/** Used to check objects for own properties. */var fQ=Object.prototype.hasOwnProperty;fH=/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */function(e){if(!fY(e))return fG(e);var t=[];for(var n in Object(e))fQ.call(e,n)&&"constructor"!=n&&t.push(n);return t},fN=/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */function(e){return l2(e)?fO(e):fH(e)},fx=/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */function(e){return fk(e,fN,fE)};/** Used to check objects for own properties. */var fK=Object.prototype.hasOwnProperty;fw=/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */function(e,t,n,r,o,i){var a=1&n,l=fx(e),s=l.length;if(s!=fx(t).length&&!a)return!1;for(var u=s;u--;){var c=l[u];if(!(a?c in t:fK.call(t,c)))return!1}// Check that cyclic values are equal.
var d=i.get(e),f=i.get(t);if(d&&f)return d==t&&f==e;var p=!0;i.set(e,t),i.set(t,e);for(var h=a;++u<s;){var m=e[c=l[u]],g=t[c];if(r)var v=a?r(g,m,c,t,e,i):r(m,g,c,e,t,i);// Recursively compare objects (susceptible to call stack limits).
if(!(void 0===v?m===g||o(m,g,n,r,i):v)){p=!1;break}h||(h="constructor"==c)}if(p&&!h){var y=e.constructor,b=t.constructor;// Non `Object` object instances with different constructors are not equal.
y!=b&&"constructor"in e&&"constructor"in t&&!("function"==typeof y&&y instanceof y&&"function"==typeof b&&b instanceof b)&&(p=!1)}return i.delete(e),i.delete(t),p};var fX={},fZ={},l8=_("8ThvE");fZ=dL(l8,"DataView");var fJ={},l8=_("8ThvE");fJ=dL(l8,"Promise");var f0={},l8=_("8ThvE");f0=dL(l8,"Set");var f1={},l8=_("8ThvE");f1=dL(l8,"WeakMap");/** `Object#toString` result references. */var f2="[object Map]",f3="[object Promise]",f4="[object Set]",f5="[object WeakMap]",f8="[object DataView]",f6=dW(fZ),f9=dW(dI),f7=dW(fJ),pe=dW(f0),pt=dW(f1),pn=l4;(fZ&&pn(new fZ(new ArrayBuffer(1)))!=f8||dI&&pn(new dI)!=f2||fJ&&pn(fJ.resolve())!=f3||f0&&pn(new f0)!=f4||f1&&pn(new f1)!=f5)&&(pn=function(e){var t=l4(e),n="[object Object]"==t?e.constructor:void 0,r=n?dW(n):"";if(r)switch(r){case f6:return f8;case f9:return f2;case f7:return f3;case pe:return f4;case pt:return f5}return t}),fX=pn;var fI=_("7HKs8"),pr="[object Arguments]",po="[object Array]",pi="[object Object]",pa=Object.prototype.hasOwnProperty;dx=/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */function(e,t,n,r,o,i){var a=dp(e),l=dp(t),s=a?po:fX(e),u=l?po:fX(t);s=s==pr?pi:s,u=u==pr?pi:u;var c=s==pi,d=u==pi,f=s==u;if(f&&fI(e)){if(!fI(t))return!1;a=!0,c=!1}if(f&&!c)return i||(i=new dk),a||fL(e)?fl(e,t,n,r,o,i):fh(e,t,s,n,r,o,i);if(!(1&n)){var p=c&&pa.call(e,"__wrapped__"),h=d&&pa.call(t,"__wrapped__");if(p||h){var m=p?e.value():e,g=h?t.value():t;return i||(i=new dk),o(m,g,n,r,i)}}return!!f&&(i||(i=new dk),fw(e,t,n,r,o,i))},dw=/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */function e(t,n,r,o,i){return t===n||(null!=t&&null!=n&&(sg(t)||sg(n))?dx(t,n,r,o,e,i):t!=t&&n!=n)},db=/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */function(e,t){return dw(e,t)};/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var pl=function(){return(pl=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},ps=function(e,t,n,r,o){return(e-t)*(o-r)/(n-t)+r},pu=function(e,t){var n=e+t;return n>360?n-360:n},pc=function(){return Math.random()>.5},pd=[0,0,1],pf=[// dual axis rotations (a bit more realistic)
[1,1,0],[1,0,1],[0,1,1],// single axis rotations (a bit dumber)
[1,0,0],[0,1,0],pd],pp=pf.reduce(function(e,t,n){var r;return pl(pl({},e),((r={})["@keyframes rotation-".concat(n)]={"50%":{transform:"rotate3d(".concat(t.map(function(e){return e/2}).join(),", 180deg)")},"100%":{transform:"rotate3d(".concat(t.join(),", 360deg)")}},r))},{}),ph=function(e,t,n){var r=e.reduce(function(e,t,r){var o,i=ps(Math.abs(pu(t,90)-180),0,180,-n/2,n/2);return pl(pl({},e),((o={})["@keyframes x-axis-".concat(r)]={to:{transform:"translateX(".concat(i,"px)")}},o))},{});return pl({"@keyframes y-axis":{to:{transform:"translateY(".concat("string"==typeof t?t:"".concat(t,"px"),")")}}},r)},pm=function(e,t,n,r,o){var i,a=Math.round(Math.random()*(pf.length-1)),l=t-Math.round(1e3*Math.random()),s=!/*@__PURE__*/k(db)(pf[a],pd)&&pc(),u=.1>Math.random()?/*@__PURE__*/k(ds)(.25*Math.random(),2):0,c=-1*u,d=/*@__PURE__*/k(ds)(Math.abs(ps(Math.abs(pu(e.degree,90)-180),0,180,-1,1)),4),f=/*@__PURE__*/k(ds)(.5*Math.random(),4),p=/*@__PURE__*/k(ds)(Math.random()*n*(pc()?1:-1),4),h=/*@__PURE__*/k(ds)(Math.max(ps(Math.abs(e.degree-180),0,180,n,-n),0),4);return(i={})["&#confetti-particle-".concat(o)]={animation:"$x-axis-".concat(o," ").concat(l,"ms forwards cubic-bezier(").concat(u,", ").concat(c,", ").concat(u,", ").concat(d,")"),"& > div":{width:s?r:Math.round(4*Math.random())+r/2,height:s?r:Math.round(2*Math.random())+r,animation:"$y-axis ".concat(l,"ms forwards cubic-bezier(").concat(f,", ").concat(p,", ").concat(.5,", ").concat(h,")"),"&:after":pl({backgroundColor:e.color,animation:"$rotation-".concat(a," ").concat(Math.round(600*Math.random()+200),"ms infinite linear")},s?{borderRadius:"50%"}:{})}},i},pg=function(e){var t=e.particles,n=e.duration,r=e.height,o=e.width,i=e.force,a=e.particleSize,l=t.reduce(function(e,t,r){return pl(pl({},e),pm(t,n,i,a,r))},{});return dl(pl(pl(pl({},pp),ph(t.map(function(e){return e.degree}),r,o)),{container:{width:0,height:0,position:"relative"},screen:{position:"fixed",top:0,left:0,right:0,bottom:0,overflow:"hidden",pointerEvents:"none"},particle:pl(pl({},l),{"& > div":{position:"absolute",left:0,top:0,"&:after":{content:"''",display:"block",width:"100%",height:"100%"}}})}),{name:"confetti-explosion"})},pv=["#FFC700","#FF0000","#2E3191","#41BBC7"],py=function(e,t){var n=360/e;return /*@__PURE__*/k(lK)(e).map(function(e){return{color:t[e%t.length],degree:n*e}})};function pb(e){var t=e.particleCount,n=e.duration,r=void 0===n?2200:n,o=e.colors,i=e.particleSize,a=e.force,l=e.height,s=e.width,u=e.zIndex,c=e.onComplete,d=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}(e,["particleCount","duration","colors","particleSize","force","height","width","zIndex","onComplete"]),f=R.useState(),p=f[0],h=f[1],m=py(void 0===t?100:t,void 0===o?pv:o),g=pg({particles:m,duration:r,particleSize:void 0===i?12:i,force:void 0===a?.5:a,width:void 0===s?1e3:s,height:void 0===l?"120vh":l})(),v=R.useCallback(function(e){if(e){var t=e.getBoundingClientRect();h({top:t.top,left:t.left})}},[]);return R.useEffect(function(){if("function"==typeof c){var e=setTimeout(c,r);return function(){return clearTimeout(e)}}},[r,c]),(0,C.jsx)("div",pl({ref:v,className:g.container},d,{children:p&&(0,P.createPortal)((0,C.jsx)("div",pl({className:g.screen},u?{style:{zIndex:u}}:null,{children:(0,C.jsx)("div",pl({style:{position:"absolute",top:p.top,left:p.left}},{children:m.map(function(e,t){return(0,C.jsx)("div",pl({id:"confetti-particle-".concat(t),className:g.particle},{children:(0,C.jsx)("div",{})}),e.degree)})}))})),document.body)}))}// Inspired by react-hot-toast library
var R=(_("exYeM"),_("exYeM"));let pw=0,px=new Map,pk=e=>{if(px.has(e))return;let t=setTimeout(()=>{px.delete(e),pC({type:"REMOVE_TOAST",toastId:e})},1e6);px.set(e,t)},pS=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:n}=t;return n?pk(n):e.toasts.forEach(e=>{pk(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===n||void 0===n?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},pE=[],p_={toasts:[]};function pC(e){p_=pS(p_,e),pE.forEach(e=>{e(p_)})}function pP({...e}){let t=(pw=(pw+1)%Number.MAX_VALUE).toString(),n=()=>pC({type:"DISMISS_TOAST",toastId:t});return pC({type:"ADD_TOAST",toast:{...e,id:t,open:!0,onOpenChange:e=>{e||n()}}}),{id:t,dismiss:n,update:e=>pC({type:"UPDATE_TOAST",toast:{...e,id:t}})}}function pR(){let[e,t]=R.useState(p_);return R.useEffect(()=>(pE.push(t),()=>{let e=pE.indexOf(t);e>-1&&pE.splice(e,1)}),[e]),{...e,toast:pP,dismiss:e=>pC({type:"DISMISS_TOAST",toastId:e})}}/**
 * lucide-react v0.288.0 - ISC
 */let pN=T("Shuffle",[["path",{d:"M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22",key:"1wmou1"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 6h1.9c1.5 0 2.9.9 3.6 2.2",key:"10bdb2"}],["path",{d:"M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8",key:"vgxac0"}],["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}]]),pO=T("Undo",[["path",{d:"M3 7v6h6",key:"1v2h90"}],["path",{d:"M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13",key:"1r6uu6"}]]),pT=T("SendHorizontal",[["path",{d:"m3 3 3 9-3 9 19-9Z",key:"1aobqy"}],["path",{d:"M6 12h16",key:"s4cdu5"}]]);var pj=function({shuffledRows:e,setShuffledRows:t,setGridShake:n}){let{isGameWon:r,guessCandidate:o,setGuessCandidate:i,submittedGuesses:a,setSubmittedGuesses:l,solvedGameData:s,setSolvedGameData:u}=/*@__PURE__*/k(R).useContext(rm),{gameData:c,categorySize:d}=/*@__PURE__*/k(R).useContext(rc),{toast:f}=pR();return/*#__PURE__*/(0,C.jsxs)("div",{className:"grid grid-cols-3 gap-4",children:[/*#__PURE__*/(0,C.jsxs)(nJ,{disabled:r,variant:"secondary",onClick:()=>t(ro({gameData:e})),children:[/*#__PURE__*/(0,C.jsx)(pN,{className:"h-4 w-4 mr-2",strokeWidth:1}),/*#__PURE__*/(0,C.jsx)("p",{className:"select-none",children:"Shuffle"})]}),/*#__PURE__*/(0,C.jsxs)(nJ,{size:"deselectallsize",disabled:r,variant:"secondary",onClick:function(){i([])},children:[/*#__PURE__*/(0,C.jsx)(pO,{className:"h-4 w-4 mr-2",strokeWidth:1}),/*#__PURE__*/(0,C.jsx)("p",{className:"select-none",children:"Deselect All"})]}),/*#__PURE__*/(0,C.jsxs)(nJ,{variant:"submit",onClick:function(){// check that its a valid guess by size
if(o.length!==d)return;// check that the guess hasnt already been submitted previously
if(function({submittedGuesses:e,guessCandidate:t}){for(let n=0;n<e.length;n++){let r=e[n];if(td(t,r))return!0}return!1}({submittedGuesses:a,guessCandidate:o})){f({label:"Notification",title:"Repeated Guess",description:"You previously made this guess!"});return}// add guess to state
l([...a,o]);// check if the guess is correct
let{isCorrect:e,correctWords:t,correctCategory:r,isGuessOneAway:p,correctDifficulty:h,correctImageSrc:m}=function({gameData:e,guessCandidate:t}){let n=!1,r="",o="",i=null,a=!1,l=null,s=[];for(let u=0;u<e.length;u++){if(r=e[u].words,o=e[u].category,l=e[u].difficulty,i=e[u].imageSrc,td(t,r))return{isCorrect:n=!0,correctWords:r,correctCategory:o,isGuessOneAway:a,correctDifficulty:l,correctImageSrc:i};{// check size of difference, were doing this twice, but no need to optimize for tiny arrays
let e=tc(t,r).length;// store how far off their guess was from category
s.push(e)}}return{isCorrect:n,correctWords:r,correctCategory:o,isGuessOneAway:a=1===Math.min(...s),correctImageSrc:i}}({guessCandidate:o,gameData:c});// if the guess is correct:
// set it as solved in game data
e?(u([...s,{category:r,words:t,difficulty:h,imageSrc:m}]),i([])):(// Shake the grid to give feedback that they were wrong
n(!0),p&&f({label:"Notification",title:"Close Guess",description:"You were one word away from correctly guessing a category!"}))},disabled:r||o.length!==d,children:[/*#__PURE__*/(0,C.jsx)(pT,{className:"h-4 w-4 mr-2",strokeWidth:1}),/*#__PURE__*/(0,C.jsx)("p",{className:"select-none",children:"Submit"})]})]})},R=_("exYeM"),pM=function(){let{submittedGuesses:e}=/*@__PURE__*/k(R).useContext(rm),{gameData:t}=/*@__PURE__*/k(R).useContext(rc);return/*#__PURE__*/(0,C.jsx)(re,{title:"",trigger:/*#__PURE__*/(0,C.jsx)(nJ,{variant:"submit",className:"w-full",children:"View Results"}),initiallyOpen:!1,showActionButton:!1,children:/*#__PURE__*/(0,C.jsxs)("div",{className:"flex flex-col place-content-center",children:[/*#__PURE__*/(0,C.jsx)("p",{className:"text-center font-[600]",children:"Your Guesses Are Represented Below"}),/*#__PURE__*/(0,C.jsxs)("span",{className:"text-center whitespace-pre mb-2",children:["\n",ri(t,e)]})]})})},pA=function(){let{gameData:e,categorySize:t,numCategories:n}=/*@__PURE__*/k(R).useContext(rc),{submittedGuesses:r,solvedGameData:o,isGameWon:i}=/*@__PURE__*/k(R).useContext(rm),[a,l]=/*@__PURE__*/k(R).useState(ro({gameData:e})),[s,u]=/*@__PURE__*/k(R).useState(!1),[c,d]=/*@__PURE__*/k(R).useState(!1),[f,p]=/*@__PURE__*/k(R).useState(!1);return /*@__PURE__*/k(R).useEffect(()=>{let t=o.map(e=>e.category),n=e.filter(e=>!t.includes(e.category));n.length>0&&l(ro({gameData:n}))},[o]),/*@__PURE__*/k(R).useEffect(()=>{if(!i)return;// extra delay for game won to allow confetti to show
let e=i?2e3:250,t=window.setTimeout(()=>{u(!0),//unmount confetti after modal opens
p(!1)},e);return i&&p(!0),()=>window.clearTimeout(t)},[i]),/*#__PURE__*/(0,C.jsxs)(C.Fragment,{children:[/*#__PURE__*/(0,C.jsxs)("h3",{className:"text-xl text-center mt-4",children:["Create ",n," groups of ",t]}),/*#__PURE__*/(0,C.jsxs)("div",{className:"game-wrapper",children:[i&&/*#__PURE__*/(0,C.jsx)(lB,{open:s,submittedGuesses:r}),/*#__PURE__*/(0,C.jsx)(lU,{gameRows:a,shouldGridShake:c,setShouldGridShake:d}),f&&i&&/*#__PURE__*/(0,C.jsx)("div",{className:"grid place-content-center",children:/*#__PURE__*/(0,C.jsx)(pb,{particleCount:100,force:.8,duration:2500})}),/*#__PURE__*/(0,C.jsx)(lQ,{}),i?/*#__PURE__*/(0,C.jsx)(pM,{}):/*#__PURE__*/(0,C.jsxs)(C.Fragment,{children:[/*#__PURE__*/(0,C.jsx)(lW,{}),/*#__PURE__*/(0,C.jsx)(pj,{shuffledRows:a,setShuffledRows:l,setGridShake:d})]})]})]})},R=(_("exYeM"),_("exYeM"),_("exYeM"));let pz=/*#__PURE__*/(0,R.forwardRef)((e,t)=>/*#__PURE__*/(0,R.createElement)(H.span,M({},e,{ref:t,style:{// See: https://github.com/twbs/bootstrap/blob/master/scss/mixins/_screen-reader.scss
    position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}))),pD="ToastProvider",[pI,pL,pF]=V("Toast"),[p$,pV]=A("Toast",[pF]),[pU,pW]=p$(pD),pB=e=>{let{__scopeToast:t,label:n="Notification",duration:r=5e3,swipeDirection:o="right",swipeThreshold:i=50,children:a}=e,[l,s]=(0,R.useState)(null),[u,c]=(0,R.useState)(0),d=(0,R.useRef)(!1),f=(0,R.useRef)(!1);return/*#__PURE__*/(0,R.createElement)(pI.Provider,{scope:t},/*#__PURE__*/(0,R.createElement)(pU,{scope:t,label:n,duration:r,swipeDirection:o,swipeThreshold:i,toastCount:u,viewport:l,onViewportChange:s,onToastAdd:(0,R.useCallback)(()=>c(e=>e+1),[]),onToastRemove:(0,R.useCallback)(()=>c(e=>e-1),[]),isFocusedToastEscapeKeyDownRef:d,isClosePausedRef:f},a))};pB.propTypes={label(e){if(e.label&&"string"==typeof e.label&&!e.label.trim()){let e=`Invalid prop \`label\` supplied to \`${pD}\`. Expected non-empty \`string\`.`;return Error(e)}return null}};let pH=["F8"],pY="toast.viewportPause",pq="toast.viewportResume",pG=/*#__PURE__*/(0,R.forwardRef)((e,t)=>{let{__scopeToast:n,hotkey:r=pH,label:o="Notifications ({hotkey})",...i}=e,a=pW("ToastViewport",n),l=pL(n),s=(0,R.useRef)(null),u=(0,R.useRef)(null),c=(0,R.useRef)(null),d=(0,R.useRef)(null),f=D(t,d,a.onViewportChange),p=r.join("+").replace(/Key/g,"").replace(/Digit/g,""),h=a.toastCount>0;(0,R.useEffect)(()=>{let e=e=>{var t;// we use `event.code` as it is consistent regardless of meta keys that were pressed.
// for example, `event.key` for `Control+Alt+t` is `†` and `t !== †`
let n=r.every(t=>e[t]||e.code===t);n&&(null===(t=d.current)||void 0===t||t.focus())};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[r]),(0,R.useEffect)(()=>{let e=s.current,t=d.current;if(h&&e&&t){let n=()=>{if(!a.isClosePausedRef.current){let e=new CustomEvent(pY);t.dispatchEvent(e),a.isClosePausedRef.current=!0}},r=()=>{if(a.isClosePausedRef.current){let e=new CustomEvent(pq);t.dispatchEvent(e),a.isClosePausedRef.current=!1}},o=t=>{let n=!e.contains(t.relatedTarget);n&&r()},i=()=>{let t=e.contains(document.activeElement);t||r()};return e.addEventListener("focusin",n),e.addEventListener("focusout",o),e.addEventListener("pointermove",n),e.addEventListener("pointerleave",i),window.addEventListener("blur",n),window.addEventListener("focus",r),()=>{e.removeEventListener("focusin",n),e.removeEventListener("focusout",o),e.removeEventListener("pointermove",n),e.removeEventListener("pointerleave",i),window.removeEventListener("blur",n),window.removeEventListener("focus",r)}}},[h,a.isClosePausedRef]);let m=(0,R.useCallback)(({tabbingDirection:e})=>{let t=l(),n=t.map(t=>{let n=t.ref.current,r=[n,.../**
 * Returns a list of potential tabbable candidates.
 *
 * NOTE: This is only a close approximation. For example it doesn't take into account cases like when
 * elements are not visible. This cannot be worked out easily by just reading a property, but rather
 * necessitate runtime knowledge (computed styles, etc). We deal with these cases separately.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker
 * Credit: https://github.com/discord/focus-layers/blob/master/src/util/wrapFocus.tsx#L1
 */function(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP// `.tabIndex` is not the same as the `tabindex` attribute. It works on the
}});for(;n.nextNode();)t.push(n.currentNode);// we do not take into account the order of nodes with positive `tabIndex` as it
// hinders accessibility to have tab order different from visual order.
return t}(n)];return"forwards"===e?r:r.reverse()});return("forwards"===e?n.reverse():n).flat()},[l]);return(0,R.useEffect)(()=>{let e=d.current;// We programmatically manage tabbing as we are unable to influence
// the source order with portals, this allows us to reverse the
// tab order so that it runs from most recent toast to least
if(e){let t=t=>{let n=t.altKey||t.ctrlKey||t.metaKey,r="Tab"===t.key&&!n;if(r){var o,i,a;let n=document.activeElement,r=t.shiftKey,l=t.target===e;// proxy focus out to the preceding document
if(l&&r){null===(o=u.current)||void 0===o||o.focus();return}let s=m({tabbingDirection:r?"backwards":"forwards"}),d=s.findIndex(e=>e===n);p7(s.slice(d+1))?t.preventDefault():// If we can't focus that means we're at the edges so we
// proxy to the corresponding exit point and let the browser handle
// tab/shift+tab keypress and implicitly pass focus to the next valid element in the document
r?null===(i=u.current)||void 0===i||i.focus():null===(a=c.current)||void 0===a||a.focus()}};// Toasts are not in the viewport React tree so we need to bind DOM events
return e.addEventListener("keydown",t),()=>e.removeEventListener("keydown",t)}},[l,m]),/*#__PURE__*/(0,R.createElement)(ty,{ref:s,role:"region","aria-label":o.replace("{hotkey}",p)// Ensure virtual cursor from landmarks menus triggers focus/blur for pause/resume
,tabIndex:-1// incase list has size when empty (e.g. padding), we remove pointer events so
,style:{pointerEvents:h?void 0:"none"}},h&&/*#__PURE__*/(0,R.createElement)(pQ,{ref:u,onFocusFromOutsideViewport:()=>{let e=m({tabbingDirection:"forwards"});p7(e)}}),/*#__PURE__*/(0,R.createElement)(pI.Slot,{scope:n},/*#__PURE__*/(0,R.createElement)(H.ol,M({tabIndex:-1},i,{ref:f}))),h&&/*#__PURE__*/(0,R.createElement)(pQ,{ref:c,onFocusFromOutsideViewport:()=>{let e=m({tabbingDirection:"backwards"});p7(e)}}))}),pQ=/*#__PURE__*/(0,R.forwardRef)((e,t)=>{let{__scopeToast:n,onFocusFromOutsideViewport:r,...o}=e,i=pW("ToastFocusProxy",n);return/*#__PURE__*/(0,R.createElement)(pz,M({"aria-hidden":!0,tabIndex:0},o,{ref:t// Avoid page scrolling when focus is on the focus proxy
,style:{position:"fixed"},onFocus:e=>{var t;let n=e.relatedTarget,o=!(null!==(t=i.viewport)&&void 0!==t&&t.contains(n));o&&r()}}))}),pK="Toast",pX=/*#__PURE__*/(0,R.forwardRef)((e,t)=>{let{forceMount:n,open:r,defaultOpen:o,onOpenChange:i,...a}=e,[l=!0,s]=B({prop:r,defaultProp:o,onChange:i});return/*#__PURE__*/(0,R.createElement)(G,{present:n||l},/*#__PURE__*/(0,R.createElement)(p0,M({open:l},a,{ref:t,onClose:()=>s(!1),onPause:W(e.onPause),onResume:W(e.onResume),onSwipeStart:U(e.onSwipeStart,e=>{e.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:U(e.onSwipeMove,e=>{let{x:t,y:n}=e.detail.delta;e.currentTarget.setAttribute("data-swipe","move"),e.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${t}px`),e.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${n}px`)}),onSwipeCancel:U(e.onSwipeCancel,e=>{e.currentTarget.setAttribute("data-swipe","cancel"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),e.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:U(e.onSwipeEnd,e=>{let{x:t,y:n}=e.detail.delta;e.currentTarget.setAttribute("data-swipe","end"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),e.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${t}px`),e.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${n}px`),s(!1)})})))}),[pZ,pJ]=p$(pK,{onClose(){}}),p0=/*#__PURE__*/(0,R.forwardRef)((e,t)=>{let{__scopeToast:n,type:r="foreground",duration:o,open:i,onClose:a,onEscapeKeyDown:l,onPause:s,onResume:u,onSwipeStart:c,onSwipeMove:d,onSwipeCancel:f,onSwipeEnd:p,...h}=e,m=pW(pK,n),[g,v]=(0,R.useState)(null),y=D(t,e=>v(e)),b=(0,R.useRef)(null),w=(0,R.useRef)(null),x=o||m.duration,k=(0,R.useRef)(0),S=(0,R.useRef)(x),E=(0,R.useRef)(0),{onToastAdd:_,onToastRemove:C}=m,N=W(()=>{var e;// focus viewport if focus is within toast to read the remaining toast
// count to SR users and ensure focus isn't lost
let t=null==g?void 0:g.contains(document.activeElement);t&&(null===(e=m.viewport)||void 0===e||e.focus()),a()}),O=(0,R.useCallback)(e=>{e&&e!==1/0&&(window.clearTimeout(E.current),k.current=new Date().getTime(),E.current=window.setTimeout(N,e))},[N]);(0,R.useEffect)(()=>{let e=m.viewport;if(e){let t=()=>{O(S.current),null==u||u()},n=()=>{let e=new Date().getTime()-k.current;S.current=S.current-e,window.clearTimeout(E.current),null==s||s()};return e.addEventListener(pY,n),e.addEventListener(pq,t),()=>{e.removeEventListener(pY,n),e.removeEventListener(pq,t)}}},[m.viewport,x,s,u,O]),// we include `open` in deps because closed !== unmounted when animating
// so it could reopen before being completely unmounted
(0,R.useEffect)(()=>{i&&!m.isClosePausedRef.current&&O(x)},[i,x,m.isClosePausedRef,O]),(0,R.useEffect)(()=>(_(),()=>C()),[_,C]);let T=(0,R.useMemo)(()=>g?function e(t){let n=[],r=Array.from(t.childNodes);// This allows SR VO to naturally pause break between nodes while announcing.
    return r.forEach(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent&&n.push(t.textContent),t.nodeType===t.ELEMENT_NODE){let r=t.ariaHidden||t.hidden||"none"===t.style.display,o=""===t.dataset.radixToastAnnounceExclude;if(!r){if(o){let e=t.dataset.radixToastAnnounceAlt;e&&n.push(e)}else n.push(...e(t))}}}),n}(g):null,[g]);return m.viewport?/*#__PURE__*/(0,R.createElement)(R.Fragment,null,T&&/*#__PURE__*/(0,R.createElement)(p1,{__scopeToast:n// Toasts are always role=status to avoid stuttering issues with role=alert in SRs.
,role:"status","aria-live":"foreground"===r?"assertive":"polite","aria-atomic":!0},T),/*#__PURE__*/(0,R.createElement)(pZ,{scope:n,onClose:N},/*#__PURE__*/(0,P.createPortal)(/*#__PURE__*/(0,R.createElement)(pI.ItemSlot,{scope:n},/*#__PURE__*/(0,R.createElement)(tv,{asChild:!0,onEscapeKeyDown:U(l,()=>{m.isFocusedToastEscapeKeyDownRef.current||N(),m.isFocusedToastEscapeKeyDownRef.current=!1})},/*#__PURE__*/(0,R.createElement)(H.li,M({// Ensure toasts are announced as status list or status when focused
role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":i?"open":"closed","data-swipe-direction":m.swipeDirection},h,{ref:y,style:{userSelect:"none",touchAction:"none",...e.style},onKeyDown:U(e.onKeyDown,e=>{"Escape"!==e.key||(null==l||l(e.nativeEvent),e.nativeEvent.defaultPrevented||(m.isFocusedToastEscapeKeyDownRef.current=!0,N()))}),onPointerDown:U(e.onPointerDown,e=>{0===e.button&&(b.current={x:e.clientX,y:e.clientY})}),onPointerMove:U(e.onPointerMove,e=>{if(!b.current)return;let t=e.clientX-b.current.x,n=e.clientY-b.current.y,r=!!w.current,o=["left","right"].includes(m.swipeDirection),i=["left","up"].includes(m.swipeDirection)?Math.min:Math.max,a=o?i(0,t):0,l=o?0:i(0,n),s="touch"===e.pointerType?10:2,u={x:a,y:l},f={originalEvent:e,delta:u};r?(w.current=u,p6("toast.swipeMove",d,f,{discrete:!1})):p9(u,m.swipeDirection,s)?(w.current=u,p6("toast.swipeStart",c,f,{discrete:!1}),e.target.setPointerCapture(e.pointerId)):(Math.abs(t)>s||Math.abs(n)>s)&&(b.current=null)}),onPointerUp:U(e.onPointerUp,e=>{let t=w.current,n=e.target;if(n.hasPointerCapture(e.pointerId)&&n.releasePointerCapture(e.pointerId),w.current=null,b.current=null,t){let n=e.currentTarget,r={originalEvent:e,delta:t};p9(t,m.swipeDirection,m.swipeThreshold)?p6("toast.swipeEnd",p,r,{discrete:!0}):p6("toast.swipeCancel",f,r,{discrete:!0}),// Prevent click event from triggering on items within the toast when
// pointer up is part of a swipe gesture
n.addEventListener("click",e=>e.preventDefault(),{once:!0})}})})))),m.viewport))):null});p0.propTypes={type(e){if(e.type&&!["foreground","background"].includes(e.type)){let e=`Invalid prop \`type\` supplied to \`${pK}\`. Expected \`foreground | background\`.`;return Error(e)}return null}};/* -----------------------------------------------------------------------------------------------*/let p1=e=>{let{__scopeToast:t,children:n,...r}=e,o=pW(pK,t),[i,a]=(0,R.useState)(!1),[l,s]=(0,R.useState)(!1);return function(e=()=>{}){let t=W(e);q(()=>{let e=0,n=0;return e=window.requestAnimationFrame(()=>n=window.requestAnimationFrame(t)),()=>{window.cancelAnimationFrame(e),window.cancelAnimationFrame(n)}},[t])}(()=>a(!0)),(0,R.useEffect)(()=>{let e=window.setTimeout(()=>s(!0),1e3);return()=>window.clearTimeout(e)},[]),l?null:/*#__PURE__*/(0,R.createElement)(tO,{asChild:!0},/*#__PURE__*/(0,R.createElement)(pz,r,i&&/*#__PURE__*/(0,R.createElement)(R.Fragment,null,o.label," ",n)))},p2=/*#__PURE__*/(0,R.forwardRef)((e,t)=>{let{__scopeToast:n,...r}=e;return/*#__PURE__*/(0,R.createElement)(H.div,M({},r,{ref:t}))}),p3=/*#__PURE__*/(0,R.forwardRef)((e,t)=>{let{__scopeToast:n,...r}=e;return/*#__PURE__*/(0,R.createElement)(H.div,M({},r,{ref:t}))}),p4=/*#__PURE__*/(0,R.forwardRef)((e,t)=>{let{altText:n,...r}=e;return n?/*#__PURE__*/(0,R.createElement)(p8,{altText:n,asChild:!0},/*#__PURE__*/(0,R.createElement)(p5,M({},r,{ref:t}))):null});p4.propTypes={altText:e=>e.altText?null:Error("Missing prop `altText` expected on `ToastAction`")};let p5=/*#__PURE__*/(0,R.forwardRef)((e,t)=>{let{__scopeToast:n,...r}=e,o=pJ("ToastClose",n);return/*#__PURE__*/(0,R.createElement)(p8,{asChild:!0},/*#__PURE__*/(0,R.createElement)(H.button,M({type:"button"},r,{ref:t,onClick:U(e.onClick,o.onClose)})))}),p8=/*#__PURE__*/(0,R.forwardRef)((e,t)=>{let{__scopeToast:n,altText:r,...o}=e;return/*#__PURE__*/(0,R.createElement)(H.div,M({"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":r||void 0},o,{ref:t}))});/* ---------------------------------------------------------------------------------------------- */function p6(e,t,n,{discrete:r}){let o=n.originalEvent.currentTarget,i=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),r?Y(o,i):o.dispatchEvent(i)}let p9=(e,t,n=0)=>{let r=Math.abs(e.x),o=Math.abs(e.y),i=r>o;return"left"===t||"right"===t?i&&r>n:!i&&o>n};function p7(e){let t=document.activeElement;return e.some(e=>// if focus is already where we want to go, we don't want to keep going through the candidates
    e===t||(e.focus(),document.activeElement!==t))}/**
 * lucide-react v0.288.0 - ISC
 */let he=T("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),ht=/*#__PURE__*/R.forwardRef(({className:e,...t},n)=>/*#__PURE__*/(0,C.jsx)(tO,{className:"fixed z-[200]",children:/*#__PURE__*/(0,C.jsx)(pG,{ref:n,className:tl("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",e),...t})}));ht.displayName=pG.displayName;let hn=nX("group pointer-events-auto z-160 relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),hr=/*#__PURE__*/R.forwardRef(({className:e,variant:t,...n},r)=>/*#__PURE__*/(0,C.jsx)(pX,{ref:r,className:tl(hn({variant:t}),e),...n}));hr.displayName=pX.displayName;let ho=/*#__PURE__*/R.forwardRef(({className:e,...t},n)=>/*#__PURE__*/(0,C.jsx)(p4,{ref:n,className:tl("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",e),...t}));ho.displayName=p4.displayName;let hi=/*#__PURE__*/R.forwardRef(({className:e,...t},n)=>/*#__PURE__*/(0,C.jsx)(p5,{ref:n,className:tl("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",e),"toast-close":"",...t,children:/*#__PURE__*/(0,C.jsx)(he,{className:"h-4 w-4"})}));hi.displayName=p5.displayName;let ha=/*#__PURE__*/R.forwardRef(({className:e,...t},n)=>/*#__PURE__*/(0,C.jsx)(p2,{ref:n,className:tl("text-sm font-semibold",e),...t}));ha.displayName=p2.displayName;let hl=/*#__PURE__*/R.forwardRef(({className:e,...t},n)=>/*#__PURE__*/(0,C.jsx)(p3,{ref:n,className:tl("text-sm opacity-90",e),...t}));function hs(){let{toasts:e}=pR();return/*#__PURE__*/(0,C.jsxs)(pB,{children:[e.map(function({id:e,title:t,description:n,action:r,...o}){return/*#__PURE__*/(0,C.jsxs)(hr,{...o,children:[/*#__PURE__*/(0,C.jsxs)("div",{className:"grid gap-1",children:[t&&/*#__PURE__*/(0,C.jsx)(ha,{children:t}),n&&/*#__PURE__*/(0,C.jsx)(hl,{children:n})]}),r,/*#__PURE__*/(0,C.jsx)(hi,{})]},e)}),/*#__PURE__*/(0,C.jsx)(ht,{})]})}hl.displayName=p3.displayName;let hu=h(document.querySelector("#root"));hu.render(/*#__PURE__*/(0,C.jsx)(function(){return/*#__PURE__*/(0,C.jsx)(rd,{children:/*#__PURE__*/(0,C.jsx)(rg,{children:/*#__PURE__*/(0,C.jsxs)("div",{className:"wrapper",children:[/*#__PURE__*/(0,C.jsx)(hs,{}),/*#__PURE__*/(0,C.jsx)(rn,{}),/*#__PURE__*/(0,C.jsx)(pA,{})]})})})},{}))}();//# sourceMappingURL=index.0373be26.js.map

//# sourceMappingURL=index.0373be26.js.map
