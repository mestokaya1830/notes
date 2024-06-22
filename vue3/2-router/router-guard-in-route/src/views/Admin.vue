<template>
  <div>
    <h2>{{ title }}</h2>
    <h3>Welcome: {{ message }}</h3>
  </div>
</template>

<script>
export default {
  name:'Admin',
  data () {
    return {
      title:'Admin Page',
      message:window.user
    }
  }
};
</script>