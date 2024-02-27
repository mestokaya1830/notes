<template>
  <div>
    <h2>{{ title }}</h2>
    {{ nested }}
  </div>
</template>

<script>
import axios from 'axios'
import { resolveTransitionHooks } from 'vue';
export default {
  name:'Home',
  data () {
    return {
      title:'Home Page',
      nested: null
    }
  },
  mounted(){
    this.getNested()
  },
  methods:{
    async getNested(){
      await axios.get('/').then(result => {
        // if(result.data){
        //   this.nested = result.data.nested
        // }
      })
    }
  }
};
</script>