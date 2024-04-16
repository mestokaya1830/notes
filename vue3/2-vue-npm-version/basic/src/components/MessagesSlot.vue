<template>
  <div>
    <slot />
  </div>
</template>

<script>
export default {
  props:{
    parentValue:{
      type: String,
      require: true,
      default:''
    }
  },
  data () {
    return {
     
    }
  },
  mounted(){
    console.log(this.parentValue)
  }
}
</script>

<!-- <script>
export default {
  props:['parentValue'],
  setup (props) {
    console.log(props)
    return {
      
    }
  }
}
</script> -->