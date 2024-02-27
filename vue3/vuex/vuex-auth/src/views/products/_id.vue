<template>
  <div>
    <h2>{{ title }}</h2>
    <h1>{{ $route.params.id }}</h1>
  </div>
</template>

<script>
export default {
  name:'Details',
  data () {
    return {
      title:'Product Details'
    }
  }
};
</script>