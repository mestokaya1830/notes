<template>
  <div>
    <h1>{{ title }}</h1>
    <h1>{{ allData.counter }}</h1>
    <div>
      <input type="button" value="Increase" @click="increase()">
      <input type="button" value="Decrease" @click="decrease()">
    </div>
  </div>
</template>

<script setup>
//composition api
  import {ref, reactive} from 'vue'
  const title = 'Reactive'

  const allData = reactive({
    counter: 0,
  })
  
  const increase = () => allData.counter++
  const decrease = () => allData.counter--
</script>