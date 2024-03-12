<template>
  <div>
    <h1>{{ title }}</h1>
    <msg-component />
  </div>
</template>

<script>

export default {
  name:'HomePage',
  data(){
    return {
      title:'Home Page'
    }
  }
}
</script>