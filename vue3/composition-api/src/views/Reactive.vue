<template>
  <div>
    <h1>{{ title }}</h1>
    <h1>{{ allData.counter }}</h1>
    <h1>{{ counter }}</h1>
    <div>
      <input type="button" value="Increase" @click="increase()">
      <input type="button" value="Decrease" @click="decrease()">
    </div>
  </div>
</template>

<script setup>
const title = 'Reactive'

//with reactiv
  import {ref, reactive} from 'vue'
  const allData = reactive({
    counter: 0,
  })
  // const increase = () => allData.counter++
  // const decrease = () => allData.counter--


  //with ref
  let counter = ref(0)
  const increase = () => counter.value++
  const decrease = () => counter.value--



</script>