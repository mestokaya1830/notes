<template>
  <div>
    <h1>Components</h1>
    <Messages :parentValue="parentMessage" class="components" />
  </div>
</template>

<script>
import Messages from '@/components/Messages.vue'
export default {
  components:{Messages},
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