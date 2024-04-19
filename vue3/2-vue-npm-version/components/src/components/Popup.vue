<template>
  <div>
    <div class="popup">
'      <input type="button" value="Close Me!"  class="input-btn" />
'      <p>{{ message }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    message:{type: String}
  },
  data () {
    return {
     
    }
  }
}
</script>