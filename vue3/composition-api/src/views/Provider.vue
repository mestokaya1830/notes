<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script setup>
//composition api
  import {ref, inject} from 'vue'
  const title = 'Provider'

  const message = inject('message')
  console.log(message)
</script>