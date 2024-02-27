<template>
  <div>
    <h2>{{ title }}</h2>
    <form @click.prevent="setLimitSettings()">
      <input type="text" v-model="limitSettings.name">
      <input type="submit" value="Send">
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name:'LimitSettings',
  data () {
    return {
      title:'LimitSettings Page',
      limitSettings: {
        name:''
      }
    }
  },
  methods:{
    async setLimitSettings(){
      await axios.post('/limitSettings', {limitsettings: this.limitSettings}).then(result => {
        if(result.data){
          console.log('Saved')
        }
      })
    }
  }
};
</script>