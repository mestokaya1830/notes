<script setup>
  import { RouterView } from 'vue-router';
  import Navbar from '@/components/navbar.vue';

</script>
<template>
  <div>
    <Navbar />
    <RouterView class="router"/>
  </div>
</template>
