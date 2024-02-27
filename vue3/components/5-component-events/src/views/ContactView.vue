<template>
  <div>
    <h1>{{ title }}</h1>
    <input type="button" value="Open Message Component" @click="handle=true">
    <msg-component v-if="handle" @close="handle=false"/>
  </div>
</template>

<script>
import MsgComponent from '../components/MsgComponent.vue'

export default {
  name:'ContactPage',
  components:{
    'msg-component' : MsgComponent
  },
  data(){
    return {
      title:'Contact Page',
      handle:false
    }
  }
}
</script>