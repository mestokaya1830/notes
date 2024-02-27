import { createStore } from 'vuex'

export default createStore({
  state: {
    auth: {}
  },
  mutations: {
    auth:(state, payload)=>{
      state.auth = payload
    }
  },
  actions: {

  },
  getters: {

  },
  modules: {

  }
})