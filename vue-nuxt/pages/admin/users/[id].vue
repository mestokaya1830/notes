<script setup>
  definePageMeta({
    layout:'admin-layout'
  })

  const { params } = useRoute()
  const { data } = await useFetch('https://jsonplaceholder.typicode.com/users/' + params.id)

</script>

<template>
  <div>
    <h1>User Details</h1>
    <ul>
      <li>
        <span>{{ data.id }}</span>
        <span>{{ data.name }}</span>
        <span>{{ data.email }}</span>
      </li>
      <button><NuxtLink to="/admin/users/">Back</NuxtLink></button>
    </ul>
  </div>
</template>