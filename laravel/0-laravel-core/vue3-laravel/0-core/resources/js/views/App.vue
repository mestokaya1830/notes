<script setup>
  import Navbar  from '../components/Navbar.vue'
</script>

<template>
  <div>
    <Navbar />
    <router-view id="master-page"/>
  </div>
</template>

<style scoped>
  #master-page{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>