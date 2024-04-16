<template>
  <div>
    <h1>Components</h1>
    <Messages :parentValue="parentMessage" class="components" />
    <MessagesSlot>
      <p>This value is sent from Parent As Slot Not Props</p>
    </MessagesSlot>
  </div>
</template>

<script>
import Messages from '@/components/Messages.vue'
import MessagesSlot from '@/components/MessagesSlot.vue'

//lazy loading
// import { defineAsyncComponent } from 'vue'; 
// const Messages = defineAsyncComponent(
//   () => import('../components/Messages.vue')
// )

export default {
  components:{
    Messages,
    MessagesSlot
  },
  data () {
    return {
      parentMessage: "This value is sent from Parent"
    }
  }
}
</script>

//with composition api
<!-- <script>
import Messages from '@/components/Messages.vue'
import { ref } from 'vue'

//layz loading
import { defineAsyncComponent } from 'vue'
const Messages = defineAsyncComponent(() =>
  import('./components/Messages.vue')
)

export default {
  components:{Messages},
  setup () {
    const parentMessage = "This value is sent from Parent"
    return {
      parentMessage
    }
  }
}
</script> -->