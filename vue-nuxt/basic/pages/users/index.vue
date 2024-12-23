<script setup>
  definePageMeta({
    layout: "admin",
  });
  const users = [
    { id: 1, name: "Mesto", salery: 3000 },
    { id: 2, name: "Ali", salery: 200 },
    { id: 3, name: "Hasan", salery: 400 },
  ];
</script>

<template>
  <div>
    <h1>Users</h1>
    <ul>
      <li v-for="item in users" :key="item.id">
        <span>{{ item.id }}</span>
        <span>{{ item.name }}</span>
        <span>{{ item.salery }}</span>
        <NuxtLink :to="`/users/${item.id}`">Details</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style>
ul {
  list-style: none;
}
ul li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  width: 400px;
  height: 32px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
ul li span {
  width: 120px;
}
</style>
