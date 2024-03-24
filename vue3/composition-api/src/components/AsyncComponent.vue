<template>
  <div>
    <h2>Async Fetch</h2>
  <template v-for="item in users" :key="item.id">
    <div>
      <span>{{ item.id }}</span>
      <span :href="item.name">{{ item.name }}</span>
    </div>
  </template>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  async setup() {
    let result = ref(null)
    let users = ref(null)
    result = await fetch('https://jsonplaceholder.typicode.com/users')
    users.value = await result.json()

    return {
      users
    }
  }

}
</script>