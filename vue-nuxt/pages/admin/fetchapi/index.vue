<script setup>
    const users = await useFetch('https://jsonplaceholder.typicode.com/users')
</script>

<template>
  <div>
    <h1>Fetch Api</h1>
    <ul>
      <li v-for="item in users.data.value" :key="item.id">
        <span>{{ item.id }}</span>
        <span>{{ item.name }}</span>
        <span><NuxtLink :to="`/admin/fetchapi/${item.id}`">Details</NuxtLink></span>
      </li>
    </ul>
  </div>
</template>
