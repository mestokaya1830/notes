<script setup>
useHead({
  title: "Posts",
  meta: [
    {
      name: "description",
      content: "Posts",
    },
  ],
});
const { data: posts } = await useFetch(
  "https://jsonplaceholder.typicode.com/posts"
);
import postsCard from "../../components/postCard.vue";
</script>
<template>
  <div>
    <h1>Posts</h1>
    <postsCard :posts="posts" />
  </div>
</template>
