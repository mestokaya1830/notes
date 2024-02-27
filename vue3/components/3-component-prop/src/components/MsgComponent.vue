<template>
  <div>
    <p>Prop is the way to send data from parent to child component.</p>
    
    <!-- here comes from parent page -->
    <p style="color: red;">{{ title }}</p>
  </div>
</template>

<script>
export default {
  name:'MsgComponent',
  props:{
    parentMessage:{
      type: String,
      require: true,
      default:''
    }
  },
  data() {
    return {
      title: this.parentMessage
    }
  }
}
</script>