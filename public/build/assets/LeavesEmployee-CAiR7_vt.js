import{q as C,j as n,a as e,Y as U,G as L,F as b}from"./app-CSzaDCvV.js";import{r as s,e as k,g as E,B as r,f as F,a as v,G as g,T as m,D as M}from"./vendor-BOJ9iqiL.js";import{A as O}from"./App-CCY2TYPw.js";import{L as _,D as q,a as w}from"./DeleteLeaveForm-DYYWZTki.js";import{A as H}from"./Add-BBhBxG8d.js";import"./Delete-wkmUajzw.js";import"./chunk-YRZGWF2W-CDc_AuLz.js";import"./chunk-KQ7OR4H5-Deut1aO4.js";import"./GlassDialog-CHoOtPF4.js";import"./LoadingButton-ceUHBhin.js";const R=({title:p,allUsers:D})=>{const{auth:i}=C().props,[l,o]=s.useState(null),[a,d]=s.useState(C().props.leavesData),[A,B]=s.useState(a.allLeaves),[I,h]=s.useState(null),[j,G]=s.useState();s.useEffect(()=>{B(a.allLeaves)},[a]);const y=t=>{o(t)},S=s.useCallback((t,c)=>{h(t),o(c)},[]),T=s.useCallback(()=>{o(null),h(null)},[]),f=()=>{o(null)};return n(b,{children:[e(U,{title:p}),l==="add_leave"&&e(_,{open:l==="add_leave",setLeavesData:d,closeModal:f,leavesData:a}),l==="edit_leave"&&e(_,{open:l==="edit_leave",setLeavesData:d,closeModal:f,leavesData:a,currentLeave:j}),l==="delete_leave"&&e(q,{open:l==="delete_leave",handleClose:T,leaveIdToDelete:I,setLeavesData:d}),e(r,{sx:{display:"flex",justifyContent:"center",p:2},children:e(k,{in:!0,children:n(L,{children:[e(E,{title:"Leaves",sx:{padding:"24px"},action:e(r,{display:"flex",gap:2,children:e(F,{title:"Add Leave",variant:"outlined",color:"success",startIcon:e(H,{}),onClick:()=>y("add_leave"),children:"Add Leave"})})}),e(v,{children:e(g,{container:!0,spacing:2,children:a.leaveTypes.map(t=>{var c,x;return e(g,{item:!0,xs:6,sm:6,md:3,children:e(L,{children:e(v,{children:n(r,{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"100%",textAlign:"center",children:[e(m,{variant:"h6",sx:{mb:2},children:t.type})," ",n(r,{display:"flex",alignItems:"center",children:[n(r,{children:["Used:",e(m,{variant:"h4",children:a.leaveCountsByUser[i.user.id]?(c=a.leaveCountsByUser[i.user.id].find(u=>u.leave_type===t.type))==null?void 0:c.days_used:0})]}),e(M,{orientation:"vertical",flexItem:!0,sx:{mx:2}})," ",n(r,{children:["Remaining:",e(m,{variant:"h4",children:a.leaveCountsByUser[i.user.id]?(x=a.leaveCountsByUser[i.user.id].find(u=>u.leave_type===t.type))==null?void 0:x.remaining_days:0})]})]})]})})})},t.type)})})}),e(v,{children:e(w,{setLeavesData:d,handleClickOpen:S,setCurrentLeave:G,openModal:y,allLeaves:A,allUsers:D})})]})})})]})};R.layout=p=>e(O,{children:p});export{R as default};
