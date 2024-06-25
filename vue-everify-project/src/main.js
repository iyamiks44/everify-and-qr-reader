import './assets/main.css'

import { createApp } from 'vue'
import { createStore } from 'vuex'
import router from './router'
import App from './App.vue'


const store = createStore({
    state() {
        return {
            data: '',
            scanning: false,
            faceLivenessReady: false,
        }
    },
    mutations: {
        load(state, payload) {
            state.data = payload
        },
        changeScanning(state, payload) {
            state.scanning = payload
            // console.log('changed')
        },
        changeFaceLivenessReady(state, payload) {
            state.faceLivenessReady = payload
        }
    }
})
const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
