<script setup>
  const route = useRoute()

</script>

<template>
  <div>
    <h1>Details</h1>
    <h2>{{ route.params }}</h2>
    <p>{{ route }}</p>
  </div>
</template>

