import './assets/main.css'

import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'


const store = createStore({
    state() {
        return {
            data: '',
            livenessData: '',
            scanning: false,
            faceLivenessReady: false,
        }
    },
    mutations: {
        load(state, payload) {
            state.data = payload
        },
        storeLiveness(state, payload) {
            state.livenessData = payload
        },
        changeScanning(state, payload) {
            state.scanning = payload
            // console.log('changed')
        },
        changeFaceLivenessReady(state, payload) {
            state.faceLivenessReady = payload
        },
        clearData(state, payload) {
            state.data = ''
        },
        clearLivenessData(state, payload) {
            state.livenessData = ''
        }
    }
})
const app = createApp(App)
app.use(store)
app.mount('#app')
