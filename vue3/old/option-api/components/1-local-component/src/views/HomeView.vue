<template>
  <div>
    <h1>{{ title }}</h1>
    <msg-component />
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


//with hybrid
<script>
import MsgComponent from '../components/MsgComponent.vue'
import { ref } from 'vue'

export default {
  components:{
    'msg-component' : MsgComponent
  },
  const title = ref('Home Page')
  setup (){
    return {
      title
    }
  }
}
</script>