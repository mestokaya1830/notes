<template>
  <div>
    <h1>{{ title }}</h1>
    <msg-component :parentMessage="parentMessage"/>
  </div>
</template>

<script>
import MsgComponent from '../components/MsgComponent.vue'

export default {
  name:'AboutPage',
  components:{
    'msg-component' : MsgComponent
  },
  data(){
    return {
      title:'About Page',
      parentMessage:'Hello I am from About Page'
    }
  }
}
</script>
