<template>
  <div>
    <h1>Home Page</h1>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name:'Home',
  data () {
    return {

    }
  },
  mounted() {
    this.getUsers()
  },
  methods: {
    async getUsers() {
      await axios.get('/api/users').then(result => {
        if(result.data.code == 200){
          console.log(result.data)
        }
      })
    }
  }
}
</script>