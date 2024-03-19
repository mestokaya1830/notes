<template>
  <div>
    <h1>{{ title }}</h1>
    <button @click="goHome()">Go Home</button>
  </div>
</template>

<script setup>
//composition api
  import {ref, onMounted} from 'vue'
  import { useRoute, useRouter } from 'vue-router'

  const title = ref('Route Param')
  const route = useRoute()
  const router = useRouter()
  
  const goHome = () => {
    router.push('/')
  }
  // const goDetail = () => {
  //   router.push({
  //     name: 'users',
  //     params: {id: '1'}
  //   })
  // }
  onMounted(() => {
    console.log(route.params)//now there is no param
    console.log(route.path)
    console.log(route.name)
  })
</script>