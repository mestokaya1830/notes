<template>
  <div>
    <h2>{{ title }}</h2>
    <div class="wrapper">
      <div>
        <input type="button" @click="active='Component1'" value="Component 1" class="input-btn" style="margin-right: 10px;">
        <input type="button" @click="active='Component2'" value="Component 2" class="input-btn">
      </div>
    </div>
    <!-- to keep data when switch between component use keep-alive -->
    <keep-alive>
      <component :is=active />
    </keep-alive>
  </div>
</template>

<script>
import Component1 from '@/components/Component1.vue'
import Component2 from '@/components/Component2.vue'

//lazy loading
// import { defineAsyncComponent } from 'vue'; 
// const Component1 = defineAsyncComponent(
//   () => import('../components/Component1.vue')
// )
export default {
  name:'Home',
  components:{
    Component1,
    Component2
  },
  data () {
    return {
      title:'Dynamic Component',
      active:'Component1'
    }
  }
};
</script>

<!-- <script>
import Component1 from '@/components/Component1.vue'
import Component2 from '@/components/Component2.vue'

//layz loading
import { defineAsyncComponent } from 'vue'
const Component1 = defineAsyncComponent(() =>
  import('./components/Component1.vue')
)
import { ref } from 'vue'

export default {
  name:'Home',
  components:{
    Component1,
    Component2
  },
  setup () {
    const title = ref('Dynamic Component')
    let active = ref('Component1')

    return {
      title,
      active
    }
  }
};
</script> -->