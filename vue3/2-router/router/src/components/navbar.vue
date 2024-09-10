<script setup>
  import { RouterLink } from 'vue-router';
</script>

<template>
  <div>
    <nav class="navbar">
      <RouterLink to="/" class="links" exact-active-class="active">Home</RouterLink>
      <RouterLink to="/admin" class="links" exact-active-class="active">Admin</RouterLink>
    </nav>
  </div>
</template>
