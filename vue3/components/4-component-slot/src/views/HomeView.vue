<template>
  <div>
    <h1>{{ title }}</h1>
    <msg-component>
        <p>Hello I am from Home Page but as Html</p>
    </msg-component>
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
      title:'Home Page'
    }
  }
}
</script>