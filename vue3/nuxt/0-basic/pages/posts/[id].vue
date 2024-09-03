<script setup>
  import { useRoute } from '#app';
  const { params } = useRoute()

  const {data} = await useFetch('/api/posts/' + params.id)
</script>
<template>
  <div>
    <h1>Server-Side User Details</h1>
   <h2>User {{ data }}</h2>
   <button @click="$router.push('/posts')">Back</button>
  </div>
</template>
