<script setup>
  import { RouterLink } from 'vue-router';
</script>

<template>
  <div>
    <nav>
      <RouterLink to="/" class="links" exact-active-class="active">Home</RouterLink>
    </nav>
  </div>
</template>