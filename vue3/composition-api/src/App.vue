<template>
  <div>
    <Navbar />
    <RouterView id="master-page" />
  </div>
</template>

<script setup>
  import Navbar from "./components/Navbar.vue";
  import { provide } from "vue";
  
  provide('message', 'From App.vue')
</script>

<style>
ul {
  display: flex;
  list-style: none;
}
ul > li {
  margin: 0 15px;
}
#master-page {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
