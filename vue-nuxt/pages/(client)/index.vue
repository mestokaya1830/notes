<script setup>
  //conposables
  const { message } = useUtils()

  //plugins
  const { $myProvide } = useNuxtApp()
</script>

<template>
  <div>
    <h1>Home</h1>
    <h2>{{ message('This is coming from Composables') }}</h2>
    <h2>{{ $myProvide('This is comming from Pulgins') }}</h2>
  </div>
</template>