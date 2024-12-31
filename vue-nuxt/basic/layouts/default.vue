<script setup>
  import Navbar from '../compnents/navbar'
</script>

<template>
  <div>
    <Navbar />
    <main>
      <slot />
    </main>
  </div>
</template>