import{z as E,A as y,E as B,f as m,_ as d,H as l,r as h,J as R,K as j,L as z,N as M,O as W,q as g,P as U,o as _}from"./vendor-BW3rKEgv.js";function F(n){return y("MuiLoadingButton",n)}const i=E("MuiLoadingButton",["root","loading","loadingIndicator","loadingIndicatorCenter","loadingIndicatorStart","loadingIndicatorEnd","endIconLoadingEnd","startIconLoadingStart"]),N=["children","disabled","id","loading","loadingIndicator","loadingPosition","variant"],k=n=>{const{loading:o,loadingPosition:t,classes:r}=n,c={root:["root",o&&"loading"],startIcon:[o&&`startIconLoading${l(t)}`],endIcon:[o&&`endIconLoading${l(t)}`],loadingIndicator:["loadingIndicator",o&&`loadingIndicator${l(t)}`]},a=U(c,F,r);return d({},r,a)},q=n=>n!=="ownerState"&&n!=="theme"&&n!=="sx"&&n!=="as"&&n!=="classes",A=B(m,{shouldForwardProp:n=>q(n)||n==="classes",name:"MuiLoadingButton",slot:"Root",overridesResolver:(n,o)=>[o.root,o.startIconLoadingStart&&{[`& .${i.startIconLoadingStart}`]:o.startIconLoadingStart},o.endIconLoadingEnd&&{[`& .${i.endIconLoadingEnd}`]:o.endIconLoadingEnd}]})(({ownerState:n,theme:o})=>d({[`& .${i.startIconLoadingStart}, & .${i.endIconLoadingEnd}`]:{transition:o.transitions.create(["opacity"],{duration:o.transitions.duration.short}),opacity:0}},n.loadingPosition==="center"&&{transition:o.transitions.create(["background-color","box-shadow","border-color"],{duration:o.transitions.duration.short}),[`&.${i.loading}`]:{color:"transparent"}},n.loadingPosition==="start"&&n.fullWidth&&{[`& .${i.startIconLoadingStart}, & .${i.endIconLoadingEnd}`]:{transition:o.transitions.create(["opacity"],{duration:o.transitions.duration.short}),opacity:0,marginRight:-8}},n.loadingPosition==="end"&&n.fullWidth&&{[`& .${i.startIconLoadingStart}, & .${i.endIconLoadingEnd}`]:{transition:o.transitions.create(["opacity"],{duration:o.transitions.duration.short}),opacity:0,marginLeft:-8}})),D=B("span",{name:"MuiLoadingButton",slot:"LoadingIndicator",overridesResolver:(n,o)=>{const{ownerState:t}=n;return[o.loadingIndicator,o[`loadingIndicator${l(t.loadingPosition)}`]]}})(({theme:n,ownerState:o})=>d({position:"absolute",visibility:"visible",display:"flex"},o.loadingPosition==="start"&&(o.variant==="outlined"||o.variant==="contained")&&{left:o.size==="small"?10:14},o.loadingPosition==="start"&&o.variant==="text"&&{left:6},o.loadingPosition==="center"&&{left:"50%",transform:"translate(-50%)",color:(n.vars||n).palette.action.disabled},o.loadingPosition==="end"&&(o.variant==="outlined"||o.variant==="contained")&&{right:o.size==="small"?10:14},o.loadingPosition==="end"&&o.variant==="text"&&{right:6},o.loadingPosition==="start"&&o.fullWidth&&{position:"relative",left:-10},o.loadingPosition==="end"&&o.fullWidth&&{position:"relative",right:-10})),H=h.forwardRef(function(o,t){const r=h.useContext(R),c=j(r,o),a=z({props:c,name:"MuiLoadingButton"}),{children:u,disabled:I=!1,id:b,loading:e=!1,loadingIndicator:L,loadingPosition:$="center",variant:P="text"}=a,C=M(a,N),p=W(b),f=L??g.jsx(_,{"aria-labelledby":p,color:"inherit",size:16}),s=d({},a,{disabled:I,loading:e,loadingIndicator:f,loadingPosition:$,variant:P}),v=k(s),x=e?g.jsx(D,{className:v.loadingIndicator,ownerState:s,children:f}):null;return g.jsxs(A,d({disabled:I||e,id:p,ref:t},C,{variant:P,classes:v,ownerState:s,children:[s.loadingPosition==="end"?u:x,s.loadingPosition==="end"?x:u]}))});export{H as L};
