<template>
  <div>
    <h2>{{ title }}</h2>
    <form @click.prevent="setGameLogs()">
      <h2 ref="title"></h2>
      <input type="submit" value="Send">
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name:'GameLogs',
  data () {
    return {
      title:'GameLogs Page',
      gameLogs: {
        name:''
      }
    }
  },
  methods:{
    async setGameLogs(){
      await axios.get('/api/gamelogs').then(result => {
        if(result.data){
          this.$refs.title.innerText = result.data
          console.log(result.data)
        }
      })
    }
  }
};
</script>