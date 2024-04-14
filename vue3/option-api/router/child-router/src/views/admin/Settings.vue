<template>
  <div>
    <h2>{{ title }}</h2>
    <br/>
    <input type="button" @click="goBack()" value="Go Back"/>
  </div>
</template>

<script>
export default {
  name:'Settings',
  data () {
    return {
      title:'Settings'
    }
  },
  methods:{
    goBack(){
      this.$router.back()
      // this.$router.push('/admin')
    }
  }
};
</script>

<style scoped>
input{
  border: 1px solid #ddd;
  padding: 10px 40px;
  border-radius: 5px;
  cursor: pointer;
}
input:hover{
  transform: scale(1.1);
}
</style>