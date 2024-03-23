import { createStore } from 'vuex'
import counter from './counter.js'
import users from './fetchApi.js'

export default createStore({
  strict: true,
  modules: {
    counter,
    users
  }
})