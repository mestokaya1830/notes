<template>
  <div>
    <nav class="navbar">
      <router-link  to="/" class="links">Home</router-link>
      <router-link  to="/about" class="links">About</router-link>
      <router-link  to="/contact" class="links">Contact</router-link>
      <router-link  to="/admin" class="links">Admin</router-link>
    </nav>
  </div>
</template>

<script>
 export default {
  name:'',
  data () {
    return {
     
    }
  }
 }
</script>

<style scoped>
  .navbar{
    margin: 20px;
  }
  .links{
    margin: 0 15px;
    font-size: 18px;
  }
  .active{
    color: green;
  }
</style>
