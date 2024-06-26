import { createMemoryHistory, createRouter } from 'vue-router'
import App  from './App.vue'
import QrReader from './components/QrReader.vue'
import FaceLiveness from './components/FaceLiveness.vue'
import SignUpForm from './components/SignUpForm.vue'

const routes = [
  { path: '/qrreader', component: QrReader },
  { path: '/faceliveness', component: FaceLiveness },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router
