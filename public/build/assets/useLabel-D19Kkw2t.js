import{$ as t}from"./app-gltBIC6M.js";function f(b,a){let{id:i,"aria-label":e,"aria-labelledby":l}=b;return i=t(i),l&&e?l=[...new Set([i,...l.trim().split(/\s+/)])].join(" "):l&&(l=l.trim().split(/\s+/).join(" ")),!e&&!l&&a&&(e=a),{id:i,"aria-label":e,"aria-labelledby":l}}function p(b){let{id:a,label:i,"aria-labelledby":e,"aria-label":l,labelElementType:d="label"}=b;a=t(a);let r=t(),o={};i?(e=e?`${r} ${e}`:r,o={id:r,htmlFor:d==="label"?a:void 0}):!e&&!l&&console.warn("If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility");let s=f({id:a,"aria-label":l,"aria-labelledby":e});return{labelProps:o,fieldProps:s}}export{p as $};
