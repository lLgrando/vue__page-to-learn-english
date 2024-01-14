import './assets/main.css'
import { createRouter, createWebHistory } from 'vue-router'

import { createApp } from 'vue'
import App from './App.vue'

import Numbers from './components/Numbers.vue';
import IrregularVerbs from './components/IrregularVerbs.vue';

const routes = [
    { path: '/', component: IrregularVerbs },
    { path: '/numbers', component: Numbers },
];

const router = createRouter({
    history: createWebHistory(),
    routes, 
  })

const app = createApp(App)

app.use(router);

app.mount('#app');