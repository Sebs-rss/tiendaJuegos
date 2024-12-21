import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// Integrando Vuex
import store from './store';

// Intengrando el store de Vuex en la aplicación
createApp(App).use(store).mount('#app')
