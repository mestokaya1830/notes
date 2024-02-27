<template>
  <div>
    <h2>{{ title }}</h2>
    <form @click.prevent="setCreditLogs()">
      <input type="text" v-model="creditLogs.name">
      <input type="submit" value="Send">
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name:'CreditLogs',
  data () {
    return {
      title:'Creditlogs Page',
      creditLogs: {
        name:''
      }
    }
  },
  methods:{
    async setCreditLogs(){
      await axios.post('/creditlogs', {creditlogs: this.creditLogs}).then(result => {
        if(result.data){
          console.log('Saved')
        }
      })
    }
  }
};
</script>