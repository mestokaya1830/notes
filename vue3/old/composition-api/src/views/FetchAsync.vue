
<template>
  <div>
    <h1>{{ title }}</h1>
    <Suspense>
      <template #default>
        <Child />
      </template>
      <template #fallback>
        <div>Loading...</div>
      </template>
    </Suspense>
  </div>
</template>

<script>
import { ref } from 'vue'
import Child from '@/components/FetchAsyncComponent.vue'

export default {
  components:{Child},
  setup () {
    const title = ref('Fetch Async Data')
   
    return {
      title
    }
  }
}
</script>
