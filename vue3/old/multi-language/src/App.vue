<template>
  <div>
    <Navbar />
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
     
    },
    provide:{
      message:'Inject Provide mean that You can share some data declared in App.vue(Look at the App.vue provide Hook)'
    }
  };
  </script>
<style scoped>
  #master-page{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
