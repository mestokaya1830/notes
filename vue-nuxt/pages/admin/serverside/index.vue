<script setup>
  const { data:result, status } = await useFetch('/api/users')
  console.log(result.value)
  console.log(status.value)
</script>

<template>
  <div>
    <h1>Server Side Router And Fetch</h1>
    <ul>
      <li v-for="item in result.result" :key="item.id">
        <span>{{ item.id }}</span>
        <span>{{ item.name }}</span>
        <span><NuxtLink :to="`/admin/serverside/${item.id}`">Details</NuxtLink></span>
      </li>
    </ul>
  </div>
</template>
