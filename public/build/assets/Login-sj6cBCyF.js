import{W as e,j as r,a as t,Y as a,b as i}from"./app-scNJUhv0.js";import{h as n,i as l,w as o,r as s,G as d,T as c,e as m,a as h,B as p,F as u,b as f,I as g,c as y,x as b,y as x,d as v}from"./vendor-D0r8BaZA.js";import{d as w,a as C}from"./VisibilityOff-4k8QJx5s.js";import{r as j,l as k,G as A,A as D}from"./App-B9iBEXNo.js";import{L}from"./LoadingButton-PAdePyYH.js";var F={},W=l;Object.defineProperty(F,"__esModule",{value:!0});var B=F.default=void 0,I=W(j()),M=n();B=F.default=(0,I.default)((0,M.jsx)("path",{d:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3m-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05"}),"FavoriteBorder");const T=()=>{o();const[n,l]=s.useState(!1),{data:j,setData:F,post:W,processing:I,errors:M}=e({email:"",password:"",remember:!1});return r(D,{children:[t(a,{title:"Login"}),t(p,{sx:{display:"flex",justifyContent:"center",p:2},children:r(d,{container:!0,spacing:2,justifyContent:"center",children:[r(d,{item:!0,xs:12,textAlign:"center",children:[t(i,{style:{alignItems:"center",display:"inline-flex"},href:route("dashboard"),className:"mt-3 d-inline-block auth-logo",children:t("img",{src:k,alt:"Logo",height:"100"})}),t(c,{variant:"h6",className:"mt-3",color:"text.secondary",children:"Daily Task Management"})]}),t(d,{item:!0,xs:12,md:8,lg:6,xl:5,children:t(m,{in:!0,children:t(A,{children:r(h,{children:[r(p,{textAlign:"center",children:[t(c,{variant:"h5",color:"primary",children:"Welcome Back!"}),t(c,{variant:"body2",color:"text.secondary",children:"Sign in to continue"})]}),t(p,{mt:4,children:r("form",{onSubmit:e=>{e.preventDefault(),W("/login",{})},children:[t(p,{mb:3,children:t(u,{fullWidth:!0,children:t(f,{label:"Email",variant:"outlined",type:"email",id:"email",name:"email",value:j.email,onChange:e=>F("email",e.target.value),required:!0,autoFocus:!0,fullWidth:!0,error:!!M.email,helperText:M.email})})}),r(p,{mb:3,children:[t(f,{fullWidth:!0,id:"password",label:"Password",type:n?"text":"password",value:j.password,onChange:e=>F("password",e.target.value),required:!0,error:!!M.password,helperText:M.password,InputProps:{endAdornment:t(g,{position:"end",children:t(y,{"aria-label":"toggle password visibility",onClick:()=>l(!n),onMouseDown:e=>e.preventDefault(),edge:"end",children:t(n?w:C,{})})})}}),t(p,{display:"flex",justifyContent:"space-between",alignItems:"center",children:t(i,{href:route("password.request"),variant:"body2",color:"text.secondary",children:"Forgot your password?"})})]}),t(b,{control:t(x,{name:"remember",checked:j.remember,onChange:e=>F("remember",e.target.checked),color:"primary"}),label:"Remember me"}),t(p,{mt:4,children:t(L,{fullWidth:!0,variant:"outlined",color:"primary",type:"submit",loading:I,children:"Log in"})})]})})]})})})})]})}),t(p,{sx:{left:0,right:0,bottom:10,position:"fixed"},children:t(v,{children:t(d,{container:!0,justifyContent:"center",children:t(d,{item:!0,xs:12,textAlign:"center",children:r(c,{sx:{bottom:0,display:"flex",justifyContent:"center"},color:"text.secondary",children:["© ",(new Date).getFullYear()," Emam Hosen. Crafted with",t(B,{})]})})})})})]})};export{T as default};
