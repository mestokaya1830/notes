<template>
  <div>
    <p>Slot is the way to send data as Html from parent to child component.</p>
    <!-- here comes from parent page as html tag -->
    <slot />
  </div>
</template>

<script>
export default {
  name:'MsgComponent',
  data() {
    return {
      
    }
  }
}
</script>