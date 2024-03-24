<template>
  <div>
    <h2>{{ title }}</h2>
    <LazyComponent :message="message" v-if="show" />
    <button @click="show = true">Show Component</button>
  </div>
</template>

<script setup>
  import { ref, defineAsyncComponent } from 'vue'
  //normal loading
  // import LazyComponent from '../components/LazyComponent.vue'

  //lazy loading
  const LazyComponent = defineAsyncComponent(() =>import('@/components/LazyComponent.vue'))


  const title = ref('Lazy Loading Component')
  let show = ref(false)
  const message = ref('Hello This Is A Lazy Component')
</script>