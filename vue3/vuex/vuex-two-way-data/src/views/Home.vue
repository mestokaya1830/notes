<template>
  <div>
    <h2>{{ title }}</h2>
    {{ getName }}
    <input type="text" v-model="getName">
  </div>
</template>

<script>
export default {
  name:'Home',
  data () {
    return {
      title:'Home Page'
    }
  },
  computed:{
    getName:{
      get(){
        return this.$store.state.name
      },
      set(value){
        this.$store.commit('setName', value)//mutations
      }
    }
  }
}
</script>