<template>
  <div>
    <h1>{{ title }}</h1>
    <p>Look at the Console and brows page, enter some text or click the button</p>
    <form @submit.prevent="sendForm">
      <input type="text" v-model="title" />
      <input type="submit" value="Send Form">
    </form>
  </div>
</template>

<script setup>
//composition api
  import {ref, onBeforeMount, onMounted, onBeforeUnmount, onUnmounted, onBeforeUpdate, onUpdated} from 'vue'
  const title = ref('Hooks')
  
  onBeforeMount(() => {
    console.log('onBeforeMount')
  })

  onMounted(() => {
    console.log('onMounted')
  })

  onBeforeUnmount(() => {
    console.log('onBeforeUnmount')
  })

  onUnmounted(() => {
    console.log('onUnmounted')
  })

  onBeforeUpdate(() => {
    console.log('onBeforeUpdate')
  })

  onUpdated(() => {
    console.log('onUpdated')
  })
</script>