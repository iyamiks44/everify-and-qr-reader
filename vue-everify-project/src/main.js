import './assets/main.css'

import { createApp } from 'vue'
import { createStore } from 'vuex'
import router from './router'
import App from './App.vue'


const store = createStore({
    state() {
        return {
            data: ''
        }
    },
    mutations: {
        load(state, payload) {
            state.data = payload
        }
    }
})
const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
