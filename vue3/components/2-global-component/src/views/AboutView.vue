<template>
  <div>
    <h1>{{ title }}</h1>
    <msg-component />
  </div>
</template>

<script>
export default {
  name:'AboutPage',
  data(){
    return {
      title:'About Page'
    }
  }
}
</script>
