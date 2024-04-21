<script setup>
  const route = useRoute()
  console.log(route)
</script>
<template>
  <div>
    <h2>Profile</h2>
    <p>{{ $route.params.id}}</p>
  </div>
</template>