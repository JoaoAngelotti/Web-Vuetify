import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards:["Sorocaba", "Votorantim", "Piedade", "Salto de Pirapora", "Araçoiaba", "Itu", "São Paulo", "Cotia"],
    title:"Previsão do Tempo"
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    bigTitle(state){
      return state.title.toUpperCase()
    }
  }
})
