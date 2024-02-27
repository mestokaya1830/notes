<script setup>
  import axios from '../models/axios.js'
</script>

<template>
  <div>
  <h2>Home Page</h2>
  {{ $store.state.test }}
  <input type="button" class="btn btn-primary" value="Send"/>
  </div>
</template>

<script>
 export default {
  data () {
    return {

    }
  },
  mounted(){

  },
  methods: {
   
  }
 }
</script>