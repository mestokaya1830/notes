<script setup>
const route = useRoute()
  const { data } = await useFetch('/api/users/'+ route.params.id)
</script>

<template>
  <div>
    <h1>Server Side Router And Fetch</h1>
    <ul>
      <li>{{ data }}</li>
    </ul>
  </div>
</template>