<template>
  <div>
    <h1>{{ title }}</h1>
    <msg-component />
  </div>
</template>

<script>
export default {
  name:'ContactPage',
  data(){
    return {
      title:'Contact Page'
    }
  }
}
</script>