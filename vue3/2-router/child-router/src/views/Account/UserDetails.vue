<template>
  <div class="wrapper">
    <h2>{{ title }}</h2>
    <h2>{{ $route.params.id }}</h2>
    <h3 @click="goBack()">Go Back</h3>
  </div>
</template>

<script>
export default {
  name:'UserDetails',
  data () {
    return {
      title:'User Details'
    }
  },
  methods:{
    goBack(){
      this.$router.back()
    }
  }
};
</script>

<style scoped>
.wrapper{
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>