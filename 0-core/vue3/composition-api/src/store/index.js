// import { createStore } from 'vuex'

// export default createStore({
//   state: {
   
//   },
//   mutations: {
    
//   },
   
//   actions: {

//   },
//   getters: {

//   },
//   modules: {
    
//   }
// })

import { reactive } from 'vue'
const state = reactive({
  counter: 0
})

const methods = {
  increase() {
    state.counter++
  },
  decrease() {
    state.counter--
  }
}

const getters = {
  squared() {
    return state.counter * state.counter
  }
}

export default {
  state,
  methods,
  getters
}