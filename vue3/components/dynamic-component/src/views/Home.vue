<template>
  <div>
    <h2>{{ title }}</h2>

    <!-- to keep data when switch between component use keep-alive -->
    <keep-alive>
      <component :is=active />
    </keep-alive>

    <div class="wrapper">
      <input type="button" @click="active='First'" value="First">
      <input type="button" @click="active='Second'" value="Second">
    </div>
  </div>
</template>

<script>
import First from '../components/First.vue'
import Second from '../components/Second.vue'
export default {
  name:'Home',
  components:{
    First,
    Second
  },
  data () {
    return {
      title:'Dynamic Component',
      active:'First'
    }
  },
  methods:{
    
  }
};
</script>
<style scoped>
.wrapper{
  display: flex;
}
.wrapper input{
  min-width: 120px;
  margin: 0 10px;
}
</style>