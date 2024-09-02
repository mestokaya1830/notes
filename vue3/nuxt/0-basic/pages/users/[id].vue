<script setup>
  import { useRoute } from '#app';
  const { params } = useRoute()
</script>
<template>
  <div>
    <h1>User Details</h1>
   <h2>User {{ params }}</h2>
   <button @click="$router.push('/users')">Back</button>
  </div>
</template>
