<template>
  <div>
    <h1>Reactive For Reference Types</h1>
    <br/>
    <ul>
      <li v-for = "item in list" :key = "item.id">
        <span class="list-item">{{ item.id }}</span>
        <span class="list-item">{{ item.type }}</span>
      </li>
    </ul>
  </div>
</template>
<script>
import { reactive } from 'vue';

export default {
  setup() {
    const list = reactive([
      {id:1, type:'Html'},
      {id:2, type:'Css'},
      {id:3, type:'Javascript'}
    ])
    console.log(list)
    return {
      list
    }
  }
}
</script>
