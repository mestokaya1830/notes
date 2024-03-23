<template>
  <div>
    <h2>{{ title }}</h2>
    <input type="button" @click="state=true" value="Accept">
  </div>
</template>

<script>
export default {
  name:'Login',
  data () {
    return {
      title:'Login Page',
      state: false
    }
  },
  methods: {
   
  },
  beforeRouteLeave (to, from, next) {
    if(this.state){
      next()
    } else {
      alert('Please click accept button!')
    }
  }
};
</script>