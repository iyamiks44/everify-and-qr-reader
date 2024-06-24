import { createMemoryHistory, createRouter } from 'vue-router'

import QrReader from './QrReader.vue'
import FaceLiveness from './FaceLiveness.vue'

const routes = [
  { path: '/qrreader', component: QrReader },
  { path: '/faceliveness', component: FaceLiveness },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})