<script setup>
  useHead({
    title:"Users"
  })
  const {data} = await useFetch('https://jsonplaceholder.typicode.com/users')//client side
</script>

<template>
  <div>
    <h1>Users</h1>
    <ul v-for="item in data" :key="item.id">
      <li><NuxtLink :to="`/users/${item.id}`">
        <span>{{ item.id }}</span>
        <span>{{ item.name }}</span>
      </NuxtLink></li>
    </ul>
  </div>
</template>
