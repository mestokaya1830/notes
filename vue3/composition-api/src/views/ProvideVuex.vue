<template>
  <div>
    <h1>{{ title }}</h1>
    <p>Check Home page to see result of Counter</p>
    <h1>{{ store.state.counter }}</h1>

    <p>Squared From Getters</p>
    <h2>{{ store.getters.squared() }}</h2>

    <div>
      <input type="button" value="Increase" @click="store.methods.increase()">
      <input type="button" value="Decrease" @click="store.methods.decrease()">
    </div>
  </div>
</template>

<script setup>
//composition api
  import {ref, onMounted, inject} from 'vue'
  const title = ref('Provide-Vuex')

  const store = inject('store')

  onMounted(() => {
    console.log(title)
  })
</script>