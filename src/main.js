import './assets/main.css'
import { createRouter, createWebHistory } from 'vue-router'

import { createApp } from 'vue'
import App from './App.vue'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

import Numbers from './components/Numbers.vue';
import IrregularVerbs from './components/IrregularVerbs.vue';
import Time from './components/Time.vue';

const routes = [
    { path: '/', component: IrregularVerbs },
    { path: '/numbers', component: Numbers },
    { path: '/time', component: Time },
];

const router = createRouter({
    history: createWebHistory(),
    routes, 
  })

const app = createApp(App)

app.use(router);
app.use(vuetify)

app.mount('#app');