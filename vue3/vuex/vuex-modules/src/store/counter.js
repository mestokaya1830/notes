export default {
  state: {
    counter: 0,
  },
  mutations: {
    Increase(state) {
      state.counter++;
    },

    Decrease(state) {
      state.counter--;
    },
  },

  actions: {},
  
  getters: {
    doubble(state) {
      return state.counter * 2;
    },
    multiple(state) {
      return state.counter * 5;
    },
  },
};
