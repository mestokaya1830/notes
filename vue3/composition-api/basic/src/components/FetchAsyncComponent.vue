<template>
  <div>
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
 async setup () {
    const result = ref(null)
    await axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
      result.value = res.data
      console.log(res.data)
    })
    return {
      result
    }
  }
}
</script>

