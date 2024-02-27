import { createStore } from 'vuex'

export default createStore({
  state: {
   counter: 0,
   inc: false,
   dec: true
  },
  mutations: {
    Increase(state){
      state.counter++
    },
    Decrease(state){
      state.counter--
    }
  },
   
  actions: {

  },
  getters: {
    checkCounter(state){
      if(state.counter > 0 && state.counter < 5){
        state.inc = false
        state.dec = false
      } else if(state.counter > 4){
        state.inc = true
      } else {
        state.dec = true
      }
      return state.counter
    }
  },
  modules: {
    
  }
})