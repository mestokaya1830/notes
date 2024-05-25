<template>
  <div>
    <button class="btn" @click="$emit('childEvent')">Child Component</button>
  </div>
</template>

<script>
  export default {
    data () {
      return {

      }
    },
    methods:{
      //or send from here
      // childEmit(){
      //   this.$emit('childEvent')
      // }
    }
  }
</script>