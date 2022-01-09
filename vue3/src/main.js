import { createApp } from 'vue'
import App from './App.vue'

import Particles from "particles.vue3";

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import "./assets/css/style.css"

const app = createApp(App)
    app.mount('#app');
    app.use(Particles);

