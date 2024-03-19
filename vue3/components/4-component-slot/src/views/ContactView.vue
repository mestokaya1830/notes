<template>
  <div>
    <h1>{{ title }}</h1>
    <msg-component>
        <p>Hello I am from Contact Page but as Html</p>
    </msg-component>
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
      title:'Contact Page'
    }
  }
}
</script>