<template>
  <div>
    <h2>Async Fetch</h2>
  <template v-for="item in photos" :key="item.id">
    <div>
      <span>{{ item.id }}</span>
      <span :href="item.url">{{ item.url }}</span>
    </div>
  </template>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  async setup() {
    let result = ref(null)
    let photos = ref(null)
    result = await fetch('https://jsonplaceholder.typicode.com/photos')
    photos.value = await result.json()

    return {
      photos
    }
  }

}
</script>