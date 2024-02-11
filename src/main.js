import './assets/main.css'
import { createRouter, createWebHistory } from 'vue-router'

import { createApp } from 'vue'
import App from './App.vue'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'


const vuetify = createVuetify({
  components,
  directives,
  aliases, 
  mdi
})

import Home from './components/Home.vue';
import Numbers from './components/Numbers.vue';
import IrregularVerbs from './components/IrregularVerbs.vue';
import Time from './components/Time.vue';
import AtInOn from './components/AtInOn.vue';
import Weekday from './components/Weekday.vue';
import Others from './components/Others.vue';
import Past from './components/Past.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/irregularverbs', component: IrregularVerbs },
    { path: '/numbers', component: Numbers },
    { path: '/time', component: Time },
    { path: '/atinon', component: AtInOn },
    { path: '/weekday', component: Weekday },
    { path: '/others', component: Others },
    { path: '/past', component: Past },
];

const router = createRouter({
    history: createWebHistory(),
    routes, 
  })


const app = createApp(App)

app.use(router);
app.use(vuetify)

app.mount('#app');