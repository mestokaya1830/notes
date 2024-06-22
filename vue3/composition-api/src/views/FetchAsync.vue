<template>
 <div>
  <suspense>
    <template #default>
      <async-component />
    </template>
    <template #fallback>
      <p>Loading...</p>
    </template>
  </suspense>
 </div>
</template>

<script>
// import component as 'AsyncComponent' lazy load
const AsyncComponent = defineAsyncComponent(() =>import('@/components/AsyncComponent.vue'))
//normal loading
// import AsyncComponent from '@/components/AsyncComponent.vue'

import { onErrorCaptured } from 'vue'
import { defineAsyncComponent } from 'vue'


export default {
  components: { AsyncComponent },
  stup(){
    onErrorCaptured(err => {
      console.log('Error:',err)
      return true
    })
  }
}
</script>

<!-- with custom loading -->
<!-- <template>
  <suspense>
    <template #default>
      <async-component />
    </template>
    <template #fallback>
      <p>Loading...</p>
    </template>
  </suspense>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import Loading from '@/components/Loading'

const AsyncComponent = defineAsyncComponent({
  loader: () => import('./components/AsyncComponent.vue'),
  // use 'Loading' as loading message
  loadingComponent: Loading,
  // don't use suspense
  suspensible: false
})

export default {
  components: { AsyncComponent }
}
</script> -->