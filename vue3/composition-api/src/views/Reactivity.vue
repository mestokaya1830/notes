<template>
  <div>
    <h1>{{ title }}</h1>
    <h1>{{ allData.counter }}</h1>
    <div>
      <input type="button" value="Increase" @click="increase()">
      <input type="button" value="Decrease" @click="decrease()">
    </div>
   <select v-model="title">
    <option value="Vue3 Reactivity">Vue3 Reactivity</option>
    <option value="Reactivity">Reactivity</option>
    <option value="Non Reactivity">Non Reactivity</option>
  </select>
  </div>
</template>

<script setup>
//composition api
  import {ref, onMounted, reactive} from 'vue'
  const title = ref('Reactivity')
  const allData = reactive({
    counter: 0,
  })
  const increase = () => allData.counter++
  const decrease = () => allData.counter--

  onMounted(() => {
    console.log(title.value) //in script blog you need value
  })
</script>