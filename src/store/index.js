import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    infos: [],
  },
  mutations: {},
  actions: {},
  modules: {},
  getters: {
    theInfos(state) {
      return state.infos;
    },
  },
});
