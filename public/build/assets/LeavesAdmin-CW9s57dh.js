import{q as c,j as m,a as e,Y as S,G as g,F as j}from"./app-DA9r234x.js";import{r as s,e as k,g as F,B as C,f as M,a as L}from"./vendor-Bn9RdaZk.js";import{A as b}from"./App-BBivqqJh.js";import{L as y,D as E,a as G}from"./DeleteLeaveForm-CTcacw_S.js";import{A as I}from"./Add-B3ULKcZx.js";import"./Delete-D13lvorC.js";import"./chunk-YRZGWF2W-DGoqhEFZ.js";import"./chunk-KQ7OR4H5-C90_NEDA.js";import"./GlassDialog-C0MnwFY5.js";import"./LoadingButton-vc62aYV8.js";const O=({title:r,allUsers:d})=>{const{auth:l}=c().props,[t,o]=s.useState(null),[a,n]=s.useState(c().props.leavesData),[f,h]=s.useState(a.allLeaves),[x,i]=s.useState(null),[T,A]=s.useState();s.useEffect(()=>{h(a.allLeaves)},[a]);const v=p=>{o(p)},B=s.useCallback((p,_)=>{i(p),o(_)},[]),D=s.useCallback(()=>{o(null),i(null)},[]),u=()=>{o(null)};return m(j,{children:[e(S,{title:r}),t==="add_leave"&&e(y,{allUsers:d,open:t==="add_leave",setLeavesData:n,closeModal:u,leaveTypes:a.leaveTypes,leaveCounts:a.leaveCountsByUser[l.user.id]?a.leaveCountsByUser[l.user.id]:[]}),t==="edit_leave"&&e(y,{allUsers:d,open:t==="edit_leave",setLeavesData:n,closeModal:u,leaveTypes:a.leaveTypes,leaveCounts:a.leaveCountsByUser[l.user.id]?a.leaveCountsByUser[l.user.id]:[],currentLeave:T}),t==="delete_leave"&&e(E,{open:t==="delete_leave",handleClose:D,leaveIdToDelete:x,setLeavesData:n}),e(C,{sx:{display:"flex",justifyContent:"center",p:2},children:e(k,{in:!0,children:m(g,{children:[e(F,{title:"Leaves",sx:{padding:"24px"},action:e(C,{display:"flex",gap:2,children:e(M,{title:"Add Leave",variant:"outlined",color:"success",startIcon:e(I,{}),onClick:()=>v("add_leave"),children:"Add Leave"})})}),e(L,{}),e(L,{children:e(G,{handleClickOpen:B,setCurrentLeave:A,openModal:v,allLeaves:f,allUsers:d,setLeavesData:n})})]})})})]})};O.layout=r=>e(b,{children:r});export{O as default};
