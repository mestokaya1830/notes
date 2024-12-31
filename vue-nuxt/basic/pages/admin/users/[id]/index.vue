<script setup>
  definePageMeta({
    layout: "admin",
  })
  const {id} = useRoute().params
  const router = useRouter()
  const {data: user} = await useFetch(`https://jsonplaceholder.typicode.com/users/${id}`);
</script>

<template>
  <div>
    <h1>User Details</h1>
    <ul>
      <li>
        <span>{{ user.id }}</span>
        <span>{{ user.name }}</span>
        <span>{{ user.email }}</span>
        <button @click=$router.back()>Back</button>
      </li>
    </ul>
  </div>
</template>