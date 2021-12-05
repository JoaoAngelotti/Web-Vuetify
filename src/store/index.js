import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cards: [
      "Sorocaba",
      "Votorantim",
      "Piedade",
      "Salto de Pirapora",
      "Araçoiaba",
      "Itu",
      "São Paulo",
      "Cotia",
    ],
    title: "Previsão do Tempo",
    events: [],
  },
  mutations: {
    SET_EVENTS(state, payload) {
      state.events = payload;
    },
  },
  actions: {
    fetchEvents({ commit }) {
      axios
        .get("https://agenda-balaguer.herokuapp.com/api/event")
        .then((res) => {
          const payload = res.data.values;
          commit("SET EVENTS", payload);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  getters: {
    bigTitle(state) {
      return state.title.toUpperCase();
    },
  },
});
