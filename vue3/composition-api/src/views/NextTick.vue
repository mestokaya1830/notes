<template>
  <div>
    <h1>{{ title }}</h1>
    <h1>{{ counter }}</h1>
    <div>
      <input type="button" value="Increase" @click="increase()">
      <input type="button" value="Decrease" @click="decrease()">
    </div>
  </div>
</template>

<script setup>
//composition api
  import {ref, onMounted, nextTick} from 'vue'

  const title = ref('Counter')
  const counter = ref(0)

  //async version
  // const increase = async() => {
  //   counter.value++
  //   await nextTick()
  //   console.log('Dom has updated')
  // }
  
  const increase = () => {
    counter.value++
    nextTick(() => {//nexttick works when dom is updated
      console.log('Dom has updated')
    })
  }
  const decrease = () => counter.value--

  onMounted(() => {
    console.log(title)
  })
</script>