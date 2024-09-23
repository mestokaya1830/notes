<script setup>
  definePageMeta({
    layout:'admin-layout'
  })

  const {data} = await useFetch('https://jsonplaceholder.typicode.com/users')

</script>

<template>
  <div>
    <h1>Users</h1>
    <ul>
      <li v-for="item in data" :key="item.id">
        <span>{{ item.id }}</span>
        <span>{{ item.name }}</span>
        <span>{{ item.email }}</span>
        <span><NuxtLink :to="`/admin/users/${item.id}`">Details</NuxtLink></span>
      </li>
    </ul>
  </div>
</template>