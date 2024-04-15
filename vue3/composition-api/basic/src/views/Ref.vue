<template>
  <div>
    <h1>Ref FOr Primitive Types</h1>
    <input type="text" v-model="fullName" class="input-text">
    <br/>
    <p>{{ result }}</p>
    <br/>
    <input type="button" @click="changeRefValue()" class="input-btn" value="Change Ref Value">
  </div>
</template>

<script>
  import { ref } from 'vue'
export default {
  setup() {
    let fullName = ref(null)
    let result = ref(null)
    const changeRefValue = () => {
      result.value = fullName.value
    }
    return {
      fullName,
      result,
      changeRefValue
    }
  }
}
</script>
