<script setup>
  import Navbar from '../components/Navbar.vue'
</script>

<template>
  <Navbar />
  <router-view id="master-page"/>
</template>

<style>
  #master-page{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>