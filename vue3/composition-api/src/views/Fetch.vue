<template>
  <div>
    <h2>{{ title }}</h2>

    <!-- <template v-for="item in users" :key="item.id">
      <div>
        <span>{{ item.id }}</span>
        <span>{{ item.name }}</span>
        <span>{{ item.age }}</span>
      </div>
    </template> -->

    <template v-for="item in photos" :key="item.id">
      <div>
        <span>{{ item.id }}</span>
        <a :href="item.url" target="_blank" >{{ item.url }}</a>
      </div>
    </template>
  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue'
import axios from 'axios'
 const title = ref('Fetch')
  // const users = ref([
  //   {id:1, name:'Mesto', age: 50},
  //   {id:2, name:'Ali', age: 40},
  //   {id:3, name:'Deniz', age: 30}
  // ])
  let photos = ref(null)
  fetch('https://jsonplaceholder.typicode.com/photos')
  .then(data => data.json())
  .then(data => photos.value = data)

  // axios.get('https://jsonplaceholder.typicode.com/photos').then(result => {
  //   photos.value = result.data
  // })

 onMounted(() => {
  console.log(title)
})
</script>