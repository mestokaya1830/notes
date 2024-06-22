<template>
  <div>
    <h2>{{ title }}</h2>
  </div>
</template>

<script>
export default {
  name:'Admin',
  data () {
    return {
      title:'Admin Page'
    }
  },
  beforeRouteEnter (to, from, next) {
    // Note that beforeRouteEnter is
    // the only guard that supports passing a callback to next in local
    // there is no next() for beforeRouteUpdate and beforeRouteLeave
    alert('You have no permission for this page')
    if(to.name == '/Home'){
      next()
    }
  }
};
</script>