<script setup>
  const {id} = useRoute().params
</script>
<template>
  <div>
    <h1>User Details</h1>
    <h2>{{ id }}</h2>
  </div>
</template>