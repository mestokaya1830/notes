import{_ as i,a as l,o as a,c as r,b as s,t as e,F as _,r as u,d as h}from"./index-20d891a6.js";const p={data(){return{posts:{},owner:""}},mounted(){this.getPosts()},methods:{async getPosts(){await l.get(`/api/client/${this.$route.params.user}/posts`).then(o=>{o.status==200&&(this.posts=o.data.posts,this.owner=o.data.posts[0].owner)})},getBack(){window.history.back()}}},g={class:"container"},w={class:"row"},f={class:"card"},k={class:"card-body"},m=["src"],b={class:"card-title"},x={class:"card-subtitle mb-2 text-muted"},$={class:"card-text"},v=["href"];function y(o,n,B,P,c,d){return a(),r("div",g,[s("h2",null,e(c.owner)+" Posts",1),s("a",{href:"#",onClick:n[0]||(n[0]=t=>d.getBack())},"Return"),s("div",w,[(a(!0),r(_,null,u(c.posts,t=>(a(),r("div",{key:t._id,class:"col-sm-6"},[s("div",f,[s("div",k,[s("img",{src:`/uploads/${t.imageName}`,alt:""},null,8,m),s("h5",b,e(t.title),1),s("p",x,[h(e(new Date(t.created_at).toLocaleDateString())+" ",1),s("strong",null,e(t.owner),1)]),s("p",$,e(String(t.body).substring(0,200)),1),s("a",{href:`/${t.owner}/post/${t._id}`,class:"card-link"},"Read more...",8,v)])])]))),128))])])}const N=i(p,[["render",y]]);export{N as default};