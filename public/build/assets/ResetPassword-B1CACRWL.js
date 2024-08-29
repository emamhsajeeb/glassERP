import{r as c,j as a,a as e,Y as P,b as w}from"./app-Vc-au8pA.js";import{G as n,l as b,T as d,c as y,C as v,a as C,B as o,b as T,A as k}from"./App-DMOxrPAY.js";import{T as u}from"./TextField-Bhgx0t1V.js";import{L as S}from"./LoadingButton--NSp9Ded.js";import"./Select-Bh9bWENH.js";import"./CircularProgress-DUWdsz_a.js";function q({status:W}){const[s,m]=c.useState({oldPassword:"",newPassword:"",confirmPassword:""}),[t,p]=c.useState({}),[f,h]=c.useState(!1),l=(r,i)=>{m(x=>({...x,[r]:i}))},g=r=>{if(r.preventDefault(),s.newPassword!==s.confirmPassword){p({confirmPassword:"Passwords do not match"});return}p({}),h(!0),post(route("password.update"),{old_password:s.oldPassword,new_password:s.newPassword}).then(i=>{console.log("Password updated successfully")}).catch(i=>{console.error("Password update failed:",i)}).finally(()=>{h(!1)})};return a(k,{children:[e(P,{title:"Reset Password"}),e(o,{sx:{display:"flex",justifyContent:"center",p:2},children:a(n,{container:!0,spacing:2,justifyContent:"center",children:[a(n,{item:!0,xs:12,textAlign:"center",children:[e(w,{style:{alignItems:"center",display:"inline-flex"},href:route("dashboard"),className:"mt-3 d-inline-block auth-logo",children:e("img",{src:b,alt:"Logo",height:"100"})}),e(d,{variant:"h6",className:"mt-3",color:"text.secondary",children:"Daily Task Management"})]}),e(n,{item:!0,xs:12,md:8,lg:6,xl:5,children:e(y,{in:!0,children:e(v,{sx:{backdropFilter:"blur(16px) saturate(200%)",backgroundColor:"rgba(17, 25, 40, 0.5)",border:"1px solid rgba(255, 255, 255, 0.125)",p:"20px",display:"flex",flexDirection:"column",position:"relative",borderRadius:"20px",minWidth:"0px",wordWrap:"break-word",bg:mode("#ffffff","navy.800")(props),boxShadow:mode("14px 17px 40px 4px rgba(112, 144, 176, 0.08)","unset")(props),backgroundClip:"border-box"},children:a(C,{children:[a(o,{textAlign:"center",children:[e(d,{variant:"h5",color:"primary",children:"Welcome Back!"}),e(d,{variant:"body2",color:"text.secondary",children:"Sign in to continue"})]}),a(o,{mt:4,children:[a("form",{onSubmit:g,children:[e(o,{mb:3,children:e(u,{label:"Old password",variant:"outlined",type:"password",id:"oldPassword",name:"oldPassword",value:s.oldPassword,onChange:r=>l("oldPassword",r.target.value),required:!0,fullWidth:!0,error:!!t.oldPassword,helperText:t.oldPassword})}),e(o,{mb:3,children:e(u,{label:"New password",variant:"outlined",type:"password",id:"newPassword",name:"newPassword",value:s.newPassword,onChange:r=>l("newPassword",r.target.value),required:!0,fullWidth:!0,error:!!t.newPassword,helperText:t.newPassword})}),e(o,{mb:3,children:e(u,{label:"Confirm password",variant:"outlined",type:"password",id:"confirmPassword",name:"confirmPassword",value:s.confirmPassword,onChange:r=>l("confirmPassword",r.target.value),required:!0,fullWidth:!0,error:!!t.confirmPassword,helperText:t.confirmPassword})}),e(o,{mt:4,children:e(S,{fullWidth:!0,variant:"contained",color:"primary",type:"submit",loading:f,children:"Update Password"})})]}),e(o,{mt:3,textAlign:"center",children:a(d,{variant:"body2",children:["Don't have an account? ",e(w,{href:"/register",children:"Register"})]})})]})]})})})})]})}),e("footer",{children:e(T,{children:e(n,{container:!0,justifyContent:"center",children:e(n,{item:!0,xs:12,textAlign:"center",children:a(d,{variant:"body2",color:"text.secondary",children:["© ",new Date().getFullYear()," Emam Hosen. Crafted with ",e("i",{className:"mdi mdi-heart text-danger"})]})})})})})]})}export{q as default};
