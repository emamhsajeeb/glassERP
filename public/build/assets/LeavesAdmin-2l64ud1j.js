import{q as v,j as m,a as e,Y as T,G as g,F as j}from"./app-Dl05hPVL.js";import{r as a,e as k,g as F,B as u,f as M,a as L}from"./vendor-CLmvDlKR.js";import{A as b}from"./App-DbKLIXm4.js";import{L as f,D as B,a as E}from"./DeleteLeaveForm-D8NvnKWU.js";import{A as G}from"./Add-Db0pbpWO.js";import"./Delete-BP5ACM8K.js";import"./chunk-QEQ4EHOG-1VVf72ng.js";import"./chunk-YRZGWF2W-CEyd-Xa4.js";import"./useFormValidationState-BkMPC0CQ.js";import"./useLabel-DJOw9D8i.js";import"./chunk-KQ7OR4H5-j3JpDeBv.js";import"./chunk-TLBGAR4N-Cm-qSlgO.js";import"./GlassDialog-DhrtSjAV.js";import"./LoadingButton-CiSAWvL2.js";const I=({title:n,allUsers:r})=>{v().props;const[t,s]=a.useState(null),[l,o]=a.useState(v().props.leavesData),[C,h]=a.useState(l.allLeaves),[x,p]=a.useState(null),[A,y]=a.useState();a.useEffect(()=>{h(l.allLeaves)},[l]);const i=d=>{s(d)},D=a.useCallback((d,S)=>{p(d),s(S)},[]),_=a.useCallback(()=>{s(null),p(null)},[]),c=()=>{s(null)};return m(j,{children:[e(T,{title:n}),t==="add_leave"&&e(f,{allUsers:r,open:t==="add_leave",setLeavesData:o,closeModal:c,leavesData:l}),t==="edit_leave"&&e(f,{allUsers:r,open:t==="edit_leave",setLeavesData:o,closeModal:c,leavesData:l,currentLeave:A}),t==="delete_leave"&&e(B,{open:t==="delete_leave",handleClose:_,leaveIdToDelete:x,setLeavesData:o}),e(u,{sx:{display:"flex",justifyContent:"center",p:2},children:e(k,{in:!0,children:m(g,{children:[e(F,{title:"Leaves",sx:{padding:"24px"},action:e(u,{display:"flex",gap:2,children:e(M,{title:"Add Leave",variant:"outlined",color:"success",startIcon:e(G,{}),onClick:()=>i("add_leave"),children:"Add Leave"})})}),e(L,{}),e(L,{children:e(E,{handleClickOpen:D,setCurrentLeave:y,openModal:i,allLeaves:C,allUsers:r,setLeavesData:o})})]})})})]})};I.layout=n=>e(b,{children:n});export{I as default};
