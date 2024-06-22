import { createApp } from 'vue'

// npm libs
import { createPinia } from 'pinia'
import VueCookies from 'vue-cookies'

// styles
import './assets/scss/app.scss';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
// eslint-disable-next-line no-unused-vars
import * as bootstrap from 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'

// plugins
import { clickOutside } from './plugins/clickOutsideDirective.js';

import App from './App.vue'
import router from './router'

const app = createApp(App)

const pinia = createPinia()
app.use(pinia)
app.use(router)
app.use(VueCookies)
app.directive('click-outside', clickOutside);

app.mount('#app')
