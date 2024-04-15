<template>
  <div>
    <Navbar class="navbar"/>
    <router-view id="master-page" />
  </div>
</template>
<script>
  import Navbar from "./components/Navbar.vue";
  export default {
    name: "App",
    components:{Navbar},
    data() {
      return {
        name:''
      };
    },
    mounted(){
      
    },
    methods: {
     
    }
  };
  </script>
<style>
  .navbar{
    position: fixed;
    top: 0;
  }
  #master-page{
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 1600px;
    margin-top: 38px;
  }
</style>
