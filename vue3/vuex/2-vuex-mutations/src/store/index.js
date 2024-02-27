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
    doubble(state){
      return state.counter * 2
    },
    multiple(state){
      return state.counter * 5
    }
  },
  modules: {
    
  }
})