<template>
  <div>
    <h1>{{ title }}</h1>
    <msg-component :parentMessage="parentMessage"/>
  </div>
</template>

<script>
import MsgComponent from '../components/MsgComponent.vue'

export default {
  name:'HomePage',
  components:{
    'msg-component' : MsgComponent
  },
  data(){
    return {
      title:'Home Page',
      parentMessage:'Hello I am from Home Page'
    }
  }
}
</script>