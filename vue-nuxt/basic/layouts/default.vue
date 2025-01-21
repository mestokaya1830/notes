<script setup>
  import Navbar from '../components/navbar.vue'
</script>

<template>
  <div>
    <Navbar />
    <main class="router">
      <slot />
    </main>
  </div>
</template>