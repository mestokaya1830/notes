<script setup>
  import { RouterLink } from 'vue-router';
</script>

<template>
  <div>
    <nav>
      <RouterLink to="/" class="links" exact-active-class="active">Home</RouterLink>
      <RouterLink to="/components" class="links" exact-active-class="active">Components</RouterLink>
      <RouterLink to="/computed" class="links" exact-active-class="active">Computed</RouterLink>
    </nav>
  </div>
</template>