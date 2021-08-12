import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    loginToken: '111',
    userId: '222'
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {}
});

export default () => store;
