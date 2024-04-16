<template>
  <div>
    <h1>{{ title }}</h1>
    <div class="wrapper">
      <input type="button" class="input-btn" value="Open Popup Component" @click="openPopup()">
      <Popup v-if="showPopup" @close="closePopup()" />
    </div>
  </div>
</template>

<script>
import Popup from '../components/Popup.vue'

//lazy loading
// import { defineAsyncComponent } from 'vue'; 
// const Popup = defineAsyncComponent(
//   () => import('../components/Popup.vue')
// )
export default {
  name:'ComponentEvent',
  components:{
    Popup
  },
  data(){
    return {
      title:'Component Event',
      showPopup: false
    }
  },
  methods:{
    openPopup(){
      this.showPopup = true
    },
    closePopup(){
      this.showPopup = false
    }
  }
}
</script>

<!-- <script>
import Popup from '../components/Popup.vue'
import { ref } from 'vue'

//layz loading
import { defineAsyncComponent } from 'vue'
const Popup = defineAsyncComponent(() =>
  import('./components/Popup.vue')
)

export default {
  name:'ComponentEvent',
  components:{ Popup },

  setup(){
    const title = ref('Component Event')
    let showPopup = ref(false)

    const openPopup = () => {
      showPopup.value = true
    }

    const closePopup = () => {
      showPopup.value = false
    }

    return {
      title,
      showPopup,
      openPopup,
      closePopup
    }
  }
}
</script> -->
