<template>
  <div>
    <Navbar />
    <RouterView id="app" />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default{
  name:'AppPage',
  components:{Navbar},
  data() {
    return{}
  }
}
</script>
<style>
.app{
  display: flex;
  min-width: 1650px;
}
.scroll-top {
  position: fixed;
  bottom: 40px;
  right: 20px;
  cursor: pointer;
  z-index: 10;
  color: var(--green);
}
.login-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url('@/assets/img/home.webp');
  background-position: center;
  background-size: cover; 
  min-height: 100vh;
}
.login-form {
  width: 50vw;
  min-height: 70vh;
  background-color: #00000060;
  border-radius: var(--radius);
}
.login-header {
  align-items: center;
  min-height: 30vh;
}
.password-reset-link {
  color: #fff;
  text-align: center;
}
.login-center {
  display: flex;
  align-items: center;
  padding: 40px;
  width: 100%;
}
.input-con{
display: flex;
justify-content: space-between;
width: 66%;
}
.login-inputs {
  height: calc(36px + 1vh);
  margin: 10px 0;
  border-radius: var(--radius);
  padding-left: 10px;
  color: #fff;
  font-size: calc(18px + 0.2vw);
  border: none;
  background-color: #0c0c0c82;
}
.login-inputs:focus {
  outline: none;
  background-color: #00000090;
}
.login-button {
  width: 66%;
  height: calc(38px + 1vh);
  margin: 15px auto;
  border: none;
  color: #fff;
  letter-spacing: 1px;
  border-radius: var(--radius);
  cursor: pointer;
  font-size: calc(20px + 0.2vw);
  background-color: var(--green);
}
</style>
