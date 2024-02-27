<template>
  <div>
    <h2>{{ title }}</h2>
    {{ $store.state.form }}
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
  mounted(){
    if(!this.$store.state.form.name){
      this.$router.push('/login')
    }
  },
};
</script>
