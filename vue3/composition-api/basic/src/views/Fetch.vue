<template>
  <div>
    <h1>{{ title }}</h1>
    <ul class="list">
      <li v-for = "item in result" :key="item.id">
        <span class="list-item">{{item.id}}</span>
        <span class="list-item">{{item.name}}</span>
        <span class="list-item">{{item.username}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from 'vue'
import axios from 'axios'
export default {
  setup () {
    const title = ref('Fetch Data')
    const result = ref(null)
    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then(data => data.json())
    // .then(data => {
    //   result.value = data
    //   console.log(result)
    // })

    //with axios
    axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
      result.value = res.data
    })
    return {
      title,
      result
    }
  }
}
</script>
