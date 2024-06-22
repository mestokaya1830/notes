<template>
  <div>
    <h2>{{ title }}</h2>
    <PropsComponent :message="message"/>
    <SlotComponent>
      <h2>Here comes from parent as slot</h2>
    </SlotComponent>
    <button @click="showModel = true">Show Model</button>
    <div>
      <EmitComponent v-if="showModel" @hideModel="showModel=false"/>
    </div>
  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue'
import PropsComponent from '../components/PropsComponent.vue'
import SlotComponent from '../components/SlotComponent.vue'
import EmitComponent from '../components/EmitComponent.vue'

 const title = ref('Component')
 const message = ref('Component Props')
 const showModel = ref(false)

 onMounted(() => {
  console.log(title)
})
</script>