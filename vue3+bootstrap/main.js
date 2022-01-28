import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

import "bootstrap-icons/font/bootstrap-icons.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import "./assets/css/style.css"


const app = createApp(App)
    app.use(vuetify)
    app.mount('#app');
