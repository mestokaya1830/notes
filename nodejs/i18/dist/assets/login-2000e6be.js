import{_ as p,a as _,f as h,o as i,c as a,b as e,w as l,v as d,t as n,e as c,g as w,h as f,d as b}from"./index-20d891a6.js";const g={name:"Login",data(){return{user:{email:"",password:""},error:{email:"",password:""},credential:""}},methods:{async loginUser(){this.error={},this.user.email==""?this.error={email:"Email cant be null"}:this.user.password==""?this.error={password:"Password cant be null"}:await _.post("/api/login",{user:this.user}).then(o=>{o.status==200?(this.$store.commit("setAuth",o.data),this.$router.push("/admin/")):this.credential=o.data})}}},v={class:"container border rounded p-5"},x=e("h3",{style:{"margin-bottom":"30px"}},"Login",-1),y={class:"mb-3 row"},k=e("label",{for:"email",class:"form-label"},"Email",-1),V={key:0,class:"text text-danger mt-2"},C={class:"mb-3 row"},N=e("label",{for:"inputPassword",class:"form-label"},"Password",-1),P={key:0,class:"text text-danger mt-2"},U={class:"mb-3 row"},B={class:"text text-danger m-2"},E={class:"d-grid"};function L(o,t,D,T,s,m){const u=h("router-link");return i(),a("div",v,[x,e("div",y,[k,e("div",null,[l(e("input",{type:"email","onUpdate:modelValue":t[0]||(t[0]=r=>s.user.email=r),class:"form-control",id:"email"},null,512),[[d,s.user.email]]),s.error.email?(i(),a("div",V,n(s.error.email),1)):c("",!0)])]),e("div",C,[N,e("div",null,[l(e("input",{type:"password","onUpdate:modelValue":t[1]||(t[1]=r=>s.user.password=r),class:"form-control",id:"inputPassword"},null,512),[[d,s.user.password]]),s.error.password?(i(),a("div",P,n(s.error.password),1)):c("",!0)])]),e("div",U,[w(u,{to:"email-verfication",style:{"text-decoration":"none"}},{default:f(()=>[b("Forget your password?")]),_:1})]),e("div",B,n(s.credential),1),e("div",E,[e("button",{class:"btn btn-dark btn-lg",onClick:t[2]||(t[2]=r=>m.loginUser())},"Login")])])}const F=p(g,[["render",L]]);export{F as default};