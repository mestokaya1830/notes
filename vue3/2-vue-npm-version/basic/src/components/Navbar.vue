<script setup>
  import { RouterLink } from 'vue-router';
</script>

<template>
  <div>
    <nav>
      <RouterLink to="/" class="links" exact-active-class="active">Home</RouterLink>
      <RouterLink to="/components" class="links" exact-active-class="active">Components</RouterLink>
      <RouterLink to="/componentevent" class="links" exact-active-class="active">Component Event</RouterLink>
      <RouterLink to="/componentdynamic" class="links" exact-active-class="active">Component Dynamic</RouterLink>
      <RouterLink to="/componentglobal" class="links" exact-active-class="active">Component Global</RouterLink>
      <RouterLink to="/computed" class="links" exact-active-class="active">Computed</RouterLink>
      <RouterLink to="/classes" class="links" exact-active-class="active">Classes</RouterLink>
    </nav>
  </div>
</template>