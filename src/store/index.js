import { createStore } from 'vuex';
import juegos from '../juegos.json';

// Creamos el store de Vuex
const store = createStore({
  state() {
    return {
      juegos: juegos // Alojar el JSON en el estado global
    };
  },
  mutations: {
    // Mutación para modificar el stock de un juego
    modificarStock(state, { codigo, cantidad }) {
      const juego = state.juegos.find(j => j.codigo === codigo);
      if (juego) {
        juego.stock = parseInt(juego.stock) + cantidad;
        console.log(`Stock modificado para ${juego.nombre}: Nuevo stock es ${juego.stock}`);
      }
    }
  },
  actions: {
    // Acción para llamar a la mutación modificarStock
    updateStock({ commit }, payload) {
      commit('modificarStock', payload);
    }
  },
  getters: {
    // Getter para obtener los juegos
    juegos: state => state.juegos
  }
});

export default store;
