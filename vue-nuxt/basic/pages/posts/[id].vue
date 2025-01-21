<script setup>
useHead({
  title: "Posts Details",
  meta: [
    {
      name: "description",
      content: "Posts Details Page",
    },
  ],
});
  const { id } = useRoute().params
  console.log(id)
  const {data: post} = await useFetch('https://jsonplaceholder.typicode.com/posts/' + id)
</script>
<template>
  <div>
    <h1>Posts Details</h1>
    <ul>
      <li>
        <span>{{ post.id }}</span>
        <span>{{ post.title }}</span>
        <span>{{ post.body }}</span>
        <NuxtLink to="/posts/" class="details-links">Back</NuxtLink>
      </li>
    </ul>
  </div>
</template>
