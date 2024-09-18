import{g as Ze,P as et,M as tt,r as c,q as L,j as $,a as t,b as y,D as ye,S as at,E as rt,G as nt,H as ot,I as lt,J as pe,Q as it,K as ct,N as ut}from"./app-DA9r234x.js";import{p as Me,q as b,r as i,a8 as _,v as u,w as s,u as Se,aj as z,ak as st,g as dt,c as vt,Y as $e,Z as H,al as R,$ as C,am as ft,B as j,X as mt,an as ht,ao as pt}from"./vendor-Bn9RdaZk.js";const $t=Me(b.jsx("path",{d:"m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"}),"ExpandLess"),_t=Me(b.jsx("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore"),xt=new Set(["Arab","Syrc","Samr","Mand","Thaa","Mend","Nkoo","Adlm","Rohg","Hebr"]),bt=new Set(["ae","ar","arc","bcc","bqi","ckb","dv","fa","glk","he","ku","mzn","nqo","pnb","ps","sd","ug","ur","yi"]);function je(e){if(Intl.Locale){let r=new Intl.Locale(e).maximize(),n=typeof r.getTextInfo=="function"?r.getTextInfo():r.textInfo;if(n)return n.direction==="rtl";if(r.script)return xt.has(r.script)}let a=e.split("-")[0];return bt.has(a)}const gt=Symbol.for("react-aria.i18n.locale");function ze(){let e=typeof window<"u"&&window[gt]||typeof navigator<"u"&&(navigator.language||navigator.userLanguage)||"en-US";try{Intl.DateTimeFormat.supportedLocalesOf([e])}catch{e="en-US"}return{locale:e,direction:je(e)?"rtl":"ltr"}}let w=ze(),g=new Set;function _e(){w=ze();for(let e of g)e(w)}function yt(){let e=Ze(),[a,r]=i.useState(w);return i.useEffect(()=>(g.size===0&&window.addEventListener("languagechange",_e),g.add(r),()=>{g.delete(r),g.size===0&&window.removeEventListener("languagechange",_e)}),[]),e?{locale:"en-US",direction:"ltr"}:a}const Mt=_.createContext(null);function St(e){let{locale:a,children:r}=e,n=yt(),l=_.useMemo(()=>a?{locale:a,direction:je(a)?"rtl":"ltr"}:n,[n,a]);return _.createElement(Mt.Provider,{value:l},r)}function jt(e){if(zt())e.focus({preventScroll:!0});else{let a=Ht(e);e.focus(),Rt(a)}}let S=null;function zt(){if(S==null){S=!1;try{document.createElement("div").focus({get preventScroll(){return S=!0,!0}})}catch{}}return S}function Ht(e){let a=e.parentNode,r=[],n=document.scrollingElement||document.documentElement;for(;a instanceof HTMLElement&&a!==n;)(a.offsetHeight<a.scrollHeight||a.offsetWidth<a.scrollWidth)&&r.push({element:a,scrollTop:a.scrollTop,scrollLeft:a.scrollLeft}),a=a.parentNode;return n instanceof HTMLElement&&r.push({element:n,scrollTop:n.scrollTop,scrollLeft:n.scrollLeft}),r}function Rt(e){for(let{element:a,scrollTop:r,scrollLeft:n}of e)a.scrollTop=r,a.scrollLeft=n}function O(e){var a;return typeof window>"u"||window.navigator==null?!1:((a=window.navigator.userAgentData)===null||a===void 0?void 0:a.brands.some(r=>e.test(r.brand)))||e.test(window.navigator.userAgent)}function He(e){var a;return typeof window<"u"&&window.navigator!=null?e.test(((a=window.navigator.userAgentData)===null||a===void 0?void 0:a.platform)||window.navigator.platform):!1}function P(){return He(/^Mac/i)}function Ct(){return He(/^iPad/i)||P()&&navigator.maxTouchPoints>1}function Lt(){return O(/AppleWebKit/i)&&!wt()}function wt(){return O(/Chrome/i)}function Pt(){return O(/Firefox/i)}const It=i.createContext({isNative:!0,open:Dt,useHref:e=>e});function kt(e){let{children:a,navigate:r,useHref:n}=e,l=i.useMemo(()=>({isNative:!1,open:(f,d,v,m)=>{Re(f,p=>{Et(p,d)?r(v,m):M(p,d)})},useHref:n||(f=>f)}),[r,n]);return _.createElement(It.Provider,{value:l},a)}function Et(e,a){let r=e.getAttribute("target");return(!r||r==="_self")&&e.origin===location.origin&&!e.hasAttribute("download")&&!a.metaKey&&!a.ctrlKey&&!a.altKey&&!a.shiftKey}function M(e,a,r=!0){var n,l;let{metaKey:f,ctrlKey:d,altKey:v,shiftKey:m}=a;Pt()&&(!((l=window.event)===null||l===void 0||(n=l.type)===null||n===void 0)&&n.startsWith("key"))&&e.target==="_blank"&&(P()?f=!0:d=!0);let p=Lt()&&P()&&!Ct()?new KeyboardEvent("keydown",{keyIdentifier:"Enter",metaKey:f,ctrlKey:d,altKey:v,shiftKey:m}):new MouseEvent("click",{metaKey:f,ctrlKey:d,altKey:v,shiftKey:m,bubbles:!0,cancelable:!0});M.isOpening=r,jt(e),e.dispatchEvent(p),M.isOpening=!1}M.isOpening=!1;function Re(e,a){if(e instanceof HTMLAnchorElement)a(e);else if(e.hasAttribute("data-href")){let r=document.createElement("a");r.href=e.getAttribute("data-href"),e.hasAttribute("data-target")&&(r.target=e.getAttribute("data-target")),e.hasAttribute("data-rel")&&(r.rel=e.getAttribute("data-rel")),e.hasAttribute("data-download")&&(r.download=e.getAttribute("data-download")),e.hasAttribute("data-ping")&&(r.ping=e.getAttribute("data-ping")),e.hasAttribute("data-referrer-policy")&&(r.referrerPolicy=e.getAttribute("data-referrer-policy")),e.appendChild(r),a(r),e.removeChild(r)}}function Dt(e,a){Re(e,r=>M(r,a))}const I=_.createContext(null);function Vt(e){let{children:a}=e,r=i.useContext(I),[n,l]=i.useState(0),f=i.useMemo(()=>({parent:r,modalCount:n,addModal(){l(d=>d+1),r&&r.addModal()},removeModal(){l(d=>d-1),r&&r.removeModal()}}),[r,n]);return _.createElement(I.Provider,{value:f},a)}function At(){let e=i.useContext(I);return{modalProviderProps:{"aria-hidden":e&&e.modalCount>0?!0:null}}}function Ot(e){let{modalProviderProps:a}=At();return _.createElement("div",{"data-overlay-container":!0,...e,...a})}function Tt(e){return _.createElement(Vt,null,_.createElement(Ot,e))}var qt=({children:e,navigate:a,useHref:r,disableAnimation:n=!1,disableRipple:l=!1,skipFramerMotionAnimations:f=n,validationBehavior:d="aria",locale:v="en-US",defaultDates:m,createCalendar:p,...o})=>{let h=e;a&&(h=b.jsx(kt,{navigate:a,useHref:r,children:h}));const x=i.useMemo(()=>(n&&f&&(tt.skipAnimations=!0),{createCalendar:p,defaultDates:m,disableAnimation:n,disableRipple:l,validationBehavior:d}),[p,m==null?void 0:m.maxDate,m==null?void 0:m.minDate,n,l,d]);return b.jsx(et,{value:x,children:b.jsx(St,{locale:v,children:b.jsx(Tt,{...o,children:h})})})},T={},Kt=s;Object.defineProperty(T,"__esModule",{value:!0});var Ce=T.default=void 0,Bt=Kt(c()),Nt=u();Ce=T.default=(0,Bt.default)((0,Nt.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4z"}),"AddBox");var q={},Wt=s;Object.defineProperty(q,"__esModule",{value:!0});var Le=q.default=void 0,Ut=Wt(c()),Ft=u();Le=q.default=(0,Ut.default)((0,Ft.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6m0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20"}),"AccountCircle");const Gt=({auth:e,contentRef:a,setBottomNavHeight:r})=>{const n=Se(),{url:l}=L(),[f,d]=i.useState(0),v=i.useRef(null),m=()=>{if(v.current){const o=v.current.clientHeight;r(o)}};i.useEffect(()=>(m(),window.addEventListener("resize",m),()=>window.removeEventListener("resize",m)),[]),i.useEffect(()=>{l.includes("/daily-works")?d(1):l.includes("/dashboard")?d(0):l.includes(`/profile/${e.user.id}`)&&d(2)},[l,e.user.id]);const p=(o,h)=>{d(h)};return $(st,{ref:v,sx:{position:"fixed",bottom:0,left:0,right:0,zIndex:1200,display:{xs:"flex",md:"none"},backdropFilter:"blur(16px) saturate(200%)",backgroundColor:n.glassCard.backgroundColor},elevation:3,showLabels:!0,value:f,onChange:p,children:[t(z,{component:y,href:"/dashboard",label:"Home",icon:t(ye,{})}),t(z,{component:y,href:"/daily-works",label:"Tasks",icon:t(Ce,{})}),t(z,{component:y,href:route("profile",{user:e.user.id}),label:"Profile",icon:t(Le,{})})]})};var K={},Jt=s;Object.defineProperty(K,"__esModule",{value:!0});var B=K.default=void 0,Qt=Jt(c()),Xt=u();B=K.default=(0,Qt.default)((0,Xt.jsx)("path",{d:"M3 13h8V3H3zm0 8h8v-6H3zm10 0h8V11h-8zm0-18v6h8V3z"}),"Dashboard");var N={},Yt=s;Object.defineProperty(N,"__esModule",{value:!0});var k=N.default=void 0,Zt=Yt(c()),ea=u();k=N.default=(0,Zt.default)((0,ea.jsx)("path",{d:"M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3m-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3m0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5m8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5"}),"People");var W={},ta=s;Object.defineProperty(W,"__esModule",{value:!0});var E=W.default=void 0,aa=ta(c()),ra=u();E=W.default=(0,aa.default)((0,ra.jsx)("path",{d:"M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 18H4V8h16z"}),"CalendarToday");var U={},na=s;Object.defineProperty(U,"__esModule",{value:!0});var D=U.default=void 0,oa=na(c()),la=u();D=U.default=(0,oa.default)((0,la.jsx)("path",{d:"M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2m-6 0h-4V4h4z"}),"Work");var F={},ia=s;Object.defineProperty(F,"__esModule",{value:!0});var we=F.default=void 0,ca=ia(c()),ua=u();we=F.default=(0,ca.default)((0,ua.jsx)("path",{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6"}),"Settings");var G={},sa=s;Object.defineProperty(G,"__esModule",{value:!0});var V=G.default=void 0,da=sa(c()),va=u();V=G.default=(0,da.default)((0,va.jsx)("path",{d:"M19 5v14H5V5zm1.1-2H3.9c-.5 0-.9.4-.9.9v16.2c0 .4.4.9.9.9h16.2c.4 0 .9-.5.9-.9V3.9c0-.5-.5-.9-.9-.9M11 7h6v2h-6zm0 4h6v2h-6zm0 4h6v2h-6zM7 7h2v2H7zm0 4h2v2H7zm0 4h2v2H7z"}),"ListAlt");var J={},fa=s;Object.defineProperty(J,"__esModule",{value:!0});var Pe=J.default=void 0,ma=fa(c()),ha=u();Pe=J.default=(0,ma.default)((0,ha.jsx)("path",{d:"M3 13h2v-2H3zm0 4h2v-2H3zm0-8h2V7H3zm4 4h14v-2H7zm0 4h14v-2H7zM7 7v2h14V7z"}),"List");var Q={},pa=s;Object.defineProperty(Q,"__esModule",{value:!0});var Ie=Q.default=void 0,$a=pa(c()),_a=u();Ie=Q.default=(0,$a.default)((0,_a.jsx)("path",{d:"M17 10H7v2h10zm2-7h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V8h14zm-5-5H7v2h7z"}),"EventNote");var X={},xa=s;Object.defineProperty(X,"__esModule",{value:!0});var A=X.default=void 0,ba=xa(c()),ga=u();A=X.default=(0,ba.default)((0,ga.jsx)("path",{d:"m17 7-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4z"}),"Logout");const xe=e=>[{name:"Dashboard",icon:t(B,{sx:{ml:2}}),route:"dashboard"},{name:"Leaves",icon:t(A,{sx:{ml:2}}),route:"leaves-employee"},{name:"Attendances",icon:t(E,{sx:{ml:2}}),route:"attendance-employee"},...e?[{name:"Employees",icon:t(k,{sx:{ml:2}}),subMenu:[{name:"All Employees",icon:t(k,{}),route:"employees"},{name:"Holidays",icon:t(Ie,{}),route:"holidays"},{name:"Leaves (Admin)",icon:t(A,{}),route:"leaves",badge:{content:"1",className:"badge rounded-pill bg-primary float-end"}},{name:"Leave Settings",icon:t(we,{}),route:"leave-settings"},{name:"Attendances (Admin)",icon:t(E,{}),route:"attendances"},{name:"Departments",icon:t(ye,{}),route:"departments"},{name:"Designations",icon:t(D,{}),route:"designations"},{name:"Timesheet",icon:t(V,{}),route:"timesheet"}]}]:[],{name:"Projects",icon:t(D,{sx:{ml:2}}),subMenu:[{name:"Daily Works",icon:t(V,{}),route:"dailyWorks"},{name:"Daily Work Summary",icon:t(Pe,{}),route:"dailyWorkSummary"}]},...e?[{name:"Settings",icon:t(at,{sx:{ml:2}}),route:"company-settings"}]:[]];var Y={},ya=s;Object.defineProperty(Y,"__esModule",{value:!0});var ke=Y.default=void 0,Ma=ya(c()),Sa=u();ke=Y.default=(0,Ma.default)((0,Sa.jsx)("path",{d:"M12 7V3H2v18h20V7zM6 19H4v-2h2zm0-4H4v-2h2zm0-4H4V9h2zm0-4H4V5h2zm4 12H8v-2h2zm0-4H8v-2h2zm0-4H8V9h2zm0-4H8V5h2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8zm-2-8h-2v2h2zm0 4h-2v2h2z"}),"Business");var Z={},ja=s;Object.defineProperty(Z,"__esModule",{value:!0});var Ee=Z.default=void 0,za=ja(c()),be=u();Ee=Z.default=(0,za.default)([(0,be.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"},"0"),(0,be.jsx)("path",{d:"M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"},"1")],"AccessTime");var ee={},Ha=s;Object.defineProperty(ee,"__esModule",{value:!0});var De=ee.default=void 0,Ra=Ha(c()),Ca=u();De=ee.default=(0,Ra.default)((0,Ca.jsx)("path",{d:"M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2M8.5 13.5l2.5 3.01L14.5 12l4.5 6H5z"}),"Photo");var te={},La=s;Object.defineProperty(te,"__esModule",{value:!0});var Ve=te.default=void 0,wa=La(c()),Pa=u();Ve=te.default=(0,wa.default)((0,Pa.jsx)("path",{d:"M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2"}),"VpnKey");var ae={},Ia=s;Object.defineProperty(ae,"__esModule",{value:!0});var Ae=ae.default=void 0,ka=Ia(c()),Ea=u();Ae=ae.default=(0,ka.default)((0,Ea.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10m0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3"}),"AlternateEmail");var re={},Da=s;Object.defineProperty(re,"__esModule",{value:!0});var Oe=re.default=void 0,Va=Da(c()),Aa=u();Oe=re.default=(0,Va.default)((0,Aa.jsx)("path",{d:"M4 9h4v11H4zm12 4h4v7h-4zm-6-9h4v16h-4z"}),"BarChart");var ne={},Oa=s;Object.defineProperty(ne,"__esModule",{value:!0});var Te=ne.default=void 0,Ta=Oa(c()),qa=u();Te=ne.default=(0,Ta.default)((0,qa.jsx)("path",{d:"M2 20h2c.55 0 1-.45 1-1v-9c0-.55-.45-1-1-1H2zm19.83-7.12c.11-.25.17-.52.17-.8V11c0-1.1-.9-2-2-2h-5.5l.92-4.65c.05-.22.02-.46-.08-.66-.23-.45-.52-.86-.88-1.22L14 2 7.59 8.41C7.21 8.79 7 9.3 7 9.83v7.84C7 18.95 8.05 20 9.34 20h8.11c.7 0 1.36-.37 1.72-.97z"}),"ThumbUpAlt");var oe={},Ka=s;Object.defineProperty(oe,"__esModule",{value:!0});var qe=oe.default=void 0,Ba=Ka(c()),Na=u();qe=oe.default=(0,Ba.default)((0,Na.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"}),"Edit");var le={},Wa=s;Object.defineProperty(le,"__esModule",{value:!0});var Ke=le.default=void 0,Ua=Wa(c()),Fa=u();Ke=le.default=(0,Ua.default)((0,Fa.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16"}),"MonetizationOn");var ie={},Ga=s;Object.defineProperty(ie,"__esModule",{value:!0});var Be=ie.default=void 0,Ja=Ga(c()),Qa=u();Be=ie.default=(0,Ja.default)((0,Qa.jsx)("path",{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2m6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1z"}),"Notifications");var ce={},Xa=s;Object.defineProperty(ce,"__esModule",{value:!0});var Ne=ce.default=void 0,Ya=Xa(c()),Za=u();Ne=ce.default=(0,Ya.default)((0,Za.jsx)("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2m-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1z"}),"Lock");var ue={},er=s;Object.defineProperty(ue,"__esModule",{value:!0});var We=ue.default=void 0,tr=er(c()),ar=u();We=ue.default=(0,tr.default)((0,ar.jsx)("path",{d:"m22.7 19-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4"}),"Build");var se={},rr=s;Object.defineProperty(se,"__esModule",{value:!0});var Ue=se.default=void 0,nr=rr(c()),or=u();Ue=se.default=(0,nr.default)((0,or.jsx)("path",{d:"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M6 9h12v2H6zm8 5H6v-2h8zm4-6H6V6h12z"}),"Chat");var de={},lr=s;Object.defineProperty(de,"__esModule",{value:!0});var Fe=de.default=void 0,ir=lr(c()),cr=u();Fe=de.default=(0,ir.default)((0,cr.jsx)("path",{d:"M9.19 6.35c-2.04 2.29-3.44 5.58-3.57 5.89L2 10.69l4.05-4.05c.47-.47 1.15-.68 1.81-.55zM11.17 17s3.74-1.55 5.89-3.7c5.4-5.4 4.5-9.62 4.21-10.57-.95-.3-5.17-1.19-10.57 4.21C8.55 9.09 7 12.83 7 12.83zm6.48-2.19c-2.29 2.04-5.58 3.44-5.89 3.57L13.31 22l4.05-4.05c.47-.47.68-1.15.55-1.81zM9 18c0 .83-.34 1.58-.88 2.12C6.94 21.3 2 22 2 22s.7-4.94 1.88-6.12C4.42 15.34 5.17 15 6 15c1.66 0 3 1.34 3 3m4-9c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2"}),"RocketLaunch");const ge=()=>[{name:"Back to Dashboard",icon:t(B,{}),route:"dashboard"},{name:"Company Settings",icon:t(ke,{}),route:"company-settings",active:!0},{name:"Localization",icon:t(Ee,{}),route:"employees"},{name:"Theme Settings",icon:t(De,{}),route:"employees"},{name:"Roles & Permissions",icon:t(Ve,{}),route:"roles-settings"},{name:"Email Settings",icon:t(Ae,{}),route:"employees"},{name:"Performance Settings",icon:t(Oe,{}),route:"employees"},{name:"Approval Settings",icon:t(Te,{}),route:"employees"},{name:"Invoice Settings",icon:t(qe,{}),route:"employees"},{name:"Salary Settings",icon:t(Ke,{}),route:"employees"},{name:"Notifications",icon:t(Be,{}),route:"employees"},{name:"Change Password",icon:t(Ne,{}),route:"employees"},{name:"Leave Type",icon:t(We,{}),route:"employees"},{name:"ToxBox Settings",icon:t(Ue,{}),route:"employees"},{name:"Cron Settings",icon:t(Fe,{}),route:"employees"}],ur=({toggleSideBar:e,pages:a,url:r})=>{const n=Se(),[l,f]=i.useState(null),[d,v]=i.useState(r),m=o=>{f(h=>h===o?null:o)},p=o=>{v(o),m(o)};return t(j,{sx:{p:2,height:"100%"},children:$(nt,{children:[t(dt,{}),t(vt,{sx:{position:"absolute",zIndex:1,top:8,right:8,color:n.palette.text.primary},size:"large",onClick:e,children:t(rt,{})}),t($e,{children:a.map(o=>o.subMenu?$("div",{children:[$(H,{button:!0,onClick:()=>p(o.name),sx:{backgroundColor:d===o.name?n.palette.action.selected:"transparent"},children:[t(R,{children:o.icon}),t(C,{primary:o.name}),o.subMenu?l===o.name?t($t,{}):t(_t,{}):null]}),o.subMenu&&t(ft,{in:l===o.name,timeout:"auto",unmountOnExit:!0,children:t($e,{component:"div",disablePadding:!0,children:o.subMenu.map(h=>t(y,{as:"a",href:route(h.route),method:h.method||void 0,style:{alignItems:"center",color:n.palette.text.primary,textDecoration:"none"},children:$(H,{onClick:()=>v(h.name),sx:{pl:3,backgroundColor:d===h.name?n.palette.action.selected:"transparent"},button:!0,children:[t(R,{children:h.icon}),t(C,{primary:h.name})]})},h.name))})})]},o.name):t(y,{as:"a",href:route(o.route),method:o.method||void 0,style:{alignItems:"center",color:n.palette.text.primary,textDecoration:"none"},children:$(H,{button:!0,onClick:()=>v(o.name),sx:{backgroundColor:d===o.name?n.palette.action.selected:"transparent"},children:[t(R,{children:o.icon}),t(C,{primary:o.name})]})},o.name))})]})})},sr=()=>t("div",{className:"spinner-container",children:t(ot.Dots,{animation:"fade",background:"rgba(0, 0, 0, 0.5)",color:"#3498db",size:60})});function fr({children:e}){const[a,r]=i.useState(),{auth:n}=L().props,l=n.roles.includes("admin"),[f,d]=i.useState(!1),[v,m]=i.useState(()=>localStorage.getItem("darkMode")==="true"),p=i.useRef(null),[o,h]=i.useState(0),{url:x}=L(),[ve,Ge]=i.useState(x),[fe,Je]=i.useState(()=>/setting/i.test(x)?ge():xe(l));i.useEffect(()=>{Ge(x)},[x]),i.useEffect(()=>{Je(/setting/i.test(ve)?ge():xe(l))},[ve,l]),i.useEffect(()=>{localStorage.setItem("darkMode",v)},[v]);const Qe=()=>{m(!v),console.log(v)},me=()=>{d(!f)},he=lt(v),Xe=mt(he.breakpoints.down("md"));return pe.Inertia.on("start",()=>{r(!0)}),pe.Inertia.on("finish",Ye=>{r(!1)}),t(pt,{theme:he,children:t(qt,{children:$("body",{className:v?"dark":"light",children:[t(it,{position:"top-center",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"colored"}),t(ht,{}),a&&t(sr,{}),$(j,{sx:{display:"flex",flexDirection:"row",height:"100vh"},children:[t(j,{sx:{display:{xs:"none",md:"block"},height:"100vh",width:f?280:0,transition:"width 0.3s ease-in-out",flexDirection:"column",overflow:"hidden"},children:t(ur,{url:x,pages:fe,toggleSideBar:me})}),$(j,{ref:p,sx:{pb:`${o}px`,display:"flex",flex:1,flexDirection:"column",height:"100vh",overflow:"auto"},children:[n.user&&t(ct,{url:x,pages:fe,darkMode:v,toggleDarkMode:Qe,sideBarOpen:f,toggleSideBar:me}),n.user&&t(ut,{}),e,n.user&&Xe&&t(Gt,{setBottomNavHeight:h,contentRef:p,auth:n})]})]})]})})})}export{fr as A,qe as d};
