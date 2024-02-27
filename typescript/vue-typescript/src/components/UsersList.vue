<template>
  <div>
    <template v-for="item in users" :key="item.id">
      <li>
        <span>{{ item.id }}</span>
        <span>{{ item.name }}</span>
        <span>{{ item.age }}</span>
      </li>
    </template>
  </div>
</template>

<script lang="ts">
import UsersType from '../types/UsersType'
import { PropType } from 'vue';
 export default {
  props:{
    users:{
      require: true,
      type: Array as PropType<UsersType[]>
    }
  },
  data () {
    return {

    }
  }
 }
</script>

<style scoped>
  li{
    display: flex;
    width: 300px;
    justify-content: space-between;
    margin: 5px auto;
  }
</style>