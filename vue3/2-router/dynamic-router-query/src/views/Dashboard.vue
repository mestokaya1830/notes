<template>
  <div>
    <h2>{{ title }}</h2>
    <h3>{{ $route.query }}</h3>
  </div>
</template>

<script>

export default {
  name: "Dashbord",
  data() {
    return {
      title: 'Dashbord'
    }
  },
  methods: {
    
  }
};
</script>
<style scoped></style>
