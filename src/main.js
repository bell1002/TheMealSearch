
import 'jquery'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import store from './store'



createApp(App)
.use(router)
.use(store)
.mount('#app')
