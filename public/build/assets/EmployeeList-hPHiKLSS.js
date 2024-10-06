import{a as e,j as l,b as S,A as O,B as D,F as p,Y as R,G as W}from"./app-gltBIC6M.js";import{r as w,u as z,c as y,h as F,S as A,M as g,F as P,o as N,e as G,g as H,B as I,f as J,a as U}from"./vendor-BW3rKEgv.js";import{A as V}from"./App-Dn94Qrag.js";import{t as v}from"./chunk-KQ7OR4H5-_fyObV_V.js";import{E as q,D as X}from"./Edit-C5vOLsLu.js";import{t as Y,a as $,b as K,c as Q,d as Z,e as ee}from"./chunk-YRZGWF2W-CTYehUb5.js";import{u as re}from"./chunk-TLBGAR4N-CioLpmzu.js";import{A as ae}from"./Add-DQBKZAE5.js";import"./useFormValidationState-3_9ZF2T5.js";const te=({allUsers:c,departments:b,designations:h})=>{const[m,k]=w.useState(c),a=z(),[oe,T]=w.useState({});async function _(r,i,o){const t=new Promise(async(n,s)=>{try{const d=o,x=r==="department"?"user.updateDepartment":"user.updateDesignation",E=await fetch(route(x,{id:i}),{method:"POST",headers:{"Content-Type":"application/json","X-CSRF-TOKEN":document.head.querySelector('meta[name="csrf-token"]').content},body:JSON.stringify({[r]:d})}),f=await E.json();E.ok?(k(M=>M.map(u=>{if(String(u.id)===String(i)){const C={...u};return r==="department"&&u.department!==d&&(C.designation=null),C[r]=d,C}return u})),n(f.messages)):(s([f.messages||"Failed to update profile information."]),console.error(f.errors))}catch(d){console.log(d),s(["An unexpected error occurred."])}});D.promise(t,{pending:{render(){return l("div",{style:{display:"flex",alignItems:"center"},children:[e(N,{}),l("span",{style:{marginLeft:"8px"},children:["Updating employee ",r,"..."]})]})},icon:!1,style:{backdropFilter:"blur(16px) saturate(200%)",backgroundColor:a.glassCard.backgroundColor,border:a.glassCard.border,color:a.palette.text.primary}},success:{render({data:n}){return e(p,{children:n.map((s,d)=>e("div",{children:s},d))})},icon:"🟢",style:{backdropFilter:"blur(16px) saturate(200%)",backgroundColor:a.glassCard.backgroundColor,border:a.glassCard.border,color:a.palette.text.primary}},error:{render({data:n}){return e(p,{children:n.map((s,d)=>e("div",{children:s},d))})},icon:"🔴",style:{backdropFilter:"blur(16px) saturate(200%)",backgroundColor:a.glassCard.backgroundColor,border:a.glassCard.border,color:a.palette.text.primary}}})}const j=async r=>{const i=new Promise(async(o,t)=>{try{const n=await fetch(route("profile.delete"),{method:"DELETE",headers:{"Content-Type":"application/json","X-CSRF-TOKEN":document.head.querySelector('meta[name="csrf-token"]').content},body:JSON.stringify({user_id:r})}),s=await n.json();n.ok?(k(d=>d.filter(x=>x.id!==r)),o([s.message])):t([s.message])}catch(n){console.error("Error deleting user:",n),t(["An error occurred while deleting user. Please try again."])}});D.promise(i,{pending:{render(){return l("div",{style:{display:"flex",alignItems:"center"},children:[e(N,{}),e("span",{style:{marginLeft:"8px"},children:"Deleting user..."})]})},icon:!1,style:{backdropFilter:"blur(16px) saturate(200%)",backgroundColor:a.glassCard.backgroundColor,border:a.glassCard.border,color:a.palette.text.primary}},success:{render({data:o}){return e(p,{children:o.map((t,n)=>e("div",{children:t},n))})},icon:"🟢",style:{backdropFilter:"blur(16px) saturate(200%)",backgroundColor:a.glassCard.backgroundColor,border:a.glassCard.border,color:a.palette.text.primary}},error:{render({data:o}){return e(p,{children:o.map((t,n)=>e("div",{children:t},n))})},icon:"🔴",style:{backdropFilter:"blur(16px) saturate(200%)",backgroundColor:a.glassCard.backgroundColor,border:a.glassCard.border,color:a.palette.text.primary}}})},L=r=>{T(i=>({...i,[r]:null}))},B=(r,i)=>{const o=r[i];switch(i){case"employee_id":return o;case"name":return e(re,{avatarProps:{radius:"lg",src:r==null?void 0:r.profile_image},name:r==null?void 0:r.name,children:r==null?void 0:r.email});case"phone":return o;case"email":return o;case"date_of_joining":return o;case"department":return l(P,{size:"small",fullWidth:!0,children:[e(F,{id:"department",children:"Department"}),l(A,{labelId:"department",id:`department-select-${r.id}`,value:r.department||"na",onChange:t=>_("department",r.id,t.target.value),label:"Department",variant:"outlined",MenuProps:{PaperProps:{sx:{backdropFilter:"blur(16px) saturate(200%)",backgroundColor:a.glassCard.backgroundColor,border:a.glassCard.border,borderRadius:2,boxShadow:"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px"}}},children:[e(g,{value:"na",disabled:!0,children:"Select Department"}),b.map(t=>e(g,{value:t.id,children:t.name},t.id))]})]});case"designation":return l(P,{size:"small",fullWidth:!0,sx:{zIndex:0},children:[e(F,{id:"designation",children:"Designation"}),l(A,{variant:"outlined",labelId:"designation",id:`designation-select-${r.id}`,value:r.designation||"na",onChange:t=>_("designation",r.id,t.target.value),disabled:!r.department,label:"Designation",MenuProps:{PaperProps:{sx:{backdropFilter:"blur(16px) saturate(200%)",backgroundColor:a.glassCard.backgroundColor,border:a.glassCard.border,borderRadius:2,boxShadow:"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px"}}},children:[e(g,{value:"na",disabled:!0,children:"Select Designation"}),h.filter(t=>t.department_id===r.department).map(t=>e(g,{value:t.id,children:t.title},t.id))]})]});case"actions":return l("div",{className:"relative flex items-center gap-2",children:[e(v,{content:"View Profile",children:e(y,{className:"text-lg text-default-400 cursor-pointer active:opacity-50",component:S,href:route("profile",{user:r.id}),children:e(O,{})})}),e(v,{content:"Edit Leave",children:e(y,{className:"text-lg text-default-400 cursor-pointer active:opacity-50",component:S,href:route("profile",{user:r.id}),onClick:()=>{L(r.id)},children:e(q,{})})}),e(v,{content:"Delete Leave",color:"danger",children:l(y,{className:"text-lg text-danger cursor-pointer active:opacity-50",onClick:()=>{j(r.id)},children:[e(X,{})," "]})})]});default:return"N/A"}};return e("div",{style:{maxHeight:"84vh",overflowY:"auto"},children:l(ee,{fullWidth:!0,isCompact:!0,isHeaderSticky:!0,removeWrapper:!0,isStriped:!0,"aria-label":"Employees Table",children:[e(Y,{columns:[{name:"Employee ID",uid:"employee_id"},{name:"Name",uid:"name"},{name:"Mobile",uid:"phone"},{name:"Email",uid:"email"},{name:"Join Date",uid:"date_of_joining"},{name:"Department",uid:"department"},{name:"Designation",uid:"designation"},{name:"Action",uid:"actions"}],children:r=>e($,{align:r.uid==="actions"?"center":"start",children:r.name},r.uid)}),e(K,{items:m,children:r=>e(Q,{children:i=>e(Z,{style:{whiteSpace:"nowrap"},children:B(r,i)})},r.id)})]},m)})},ne=({title:c,allUsers:b,departments:h,designations:m})=>l(p,{children:[e(R,{title:c}),e(I,{sx:{display:"flex",justifyContent:"center",p:2},children:e(G,{in:!0,children:l(W,{children:[e(H,{title:"Employees",sx:{padding:"24px"},action:e(I,{display:"flex",gap:2,children:e(J,{title:"Add Employee",variant:"outlined",color:"success",startIcon:e(ae,{}),children:"Add Employee"})})}),e(U,{children:e(te,{allUsers:b,departments:h,designations:m})})]})})})]});ne.layout=c=>e(V,{children:c});export{ne as default};
