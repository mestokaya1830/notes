<script setup>
  definePageMeta({
    layout: "admin",
  });
  const { data: users } = await useFetch("https://jsonplaceholder.typicode.com/users")
</script>

<template>
  <div>
    <h1>Users</h1>
    <ul>
      <li v-for="item in users" :key="item.id">
        <span>{{ item.id }}</span>
        <span>{{ item.name }}</span>
        <span>{{ item.email }}</span>
        <NuxtLink :to="`/admin/users/${item.id}`">Details</NuxtLink>
      </li>
    </ul>
  </div>
</template>
