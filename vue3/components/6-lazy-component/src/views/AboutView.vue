<template>
  <div>
    <h1>{{ title }}</h1>
    <msg-component />
  </div>
</template>

<script>

import { defineAsyncComponent } from 'vue'; 
const MsgComponent = defineAsyncComponent(
  () => import('../components/MsgComponent.vue')
)

export default {
  name:'AboutPage',
  components:{
    'msg-component' : MsgComponent
  },
  data(){
    return {
      title:'About Page'
    }
  }
}
</script>
