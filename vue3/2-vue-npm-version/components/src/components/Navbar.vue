<template>
  <div>
    <nav class="navbar">
      <RouterLink to="/" class="links" exact-active-class="active">Home</RouterLink>
      <RouterLink to="/about" class="links" exact-active-class="active">About</RouterLink>
      <RouterLink to="/contact" class="links" exact-active-class="active">Contact</RouterLink>
    </nav>
  </div>
</template>
<script>
export default {
  name: 'NavbarComponent'
}
</script>