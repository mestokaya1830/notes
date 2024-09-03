<script setup>
  import { useRoute } from '#app';
  const { params } = useRoute()

  const {data} = await useFetch('https://jsonplaceholder.typicode.com/users/' + params.id)
</script>
<template>
  <div>
    <h1>User Details</h1>
   <h2>User {{ data }}</h2>
   <button @click="$router.push('/users')">Back</button>
  </div>
</template>
