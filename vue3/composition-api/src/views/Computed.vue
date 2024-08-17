<template>
  <div>
    <h1>{{ title }}</h1>
    <h1>{{ counter }}</h1>
    <h1 style="color:green">{{ computedResult }}</h1>
    <div>
      <input type="button" value="Increase" @click="increase()">
      <input type="button" value="Decrease" @click="decrease()">
    </div>
  </div>
</template>

<!-- composition api -->
<script setup>
  import {ref, onMounted, computed} from 'vue'

  const title = ref('Computed')

  const counter = ref(0)
  const increase = () => counter.value++
  const decrease = () => counter.value--

  const computedResult = computed(() => {
    if(counter.value % 2 == 0) return 'Even'
    return 'Odd'
  })

  onMounted(() => {
    console.log(title)
  })
</script>

<!-- <script>
export default {
  name: 'Computed',
  data() {
    return {
      counter: 0,
      title:'Computed'
    }
  },
  computed: {
    computedResult() {
      if (this.counter % 2 == 0){
        return 'Even'
      }
      return 'Odd'
    }
  },
  methods:{
    increase(){
      this.counter++
    },
    decrease(){
      this.counter--
    }
  }
}
</script> -->
