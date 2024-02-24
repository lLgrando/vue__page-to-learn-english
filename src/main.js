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

const routes = [
    { 
      path: '/', 
      component: () => import('./components/Home.vue')
    },
    { 
      path: '/irregularverbs', 
      component: () => import('./components/IrregularVerbs.vue') 
    },
    { 
      path: '/numbers', 
      component: () => import('./components/Numbers.vue') 
    },
    { 
      path: '/time', 
      component: () => import('./components/Time.vue') 
    },
    { 
      path: '/atinon', 
      component: () => import('./components/AtInOn.vue') 
    },
    { 
      path: '/weekday', 
      component: () => import('./components/Weekday.vue') 
    },
    { 
      path: '/past', 
      component: () => import('./components/Past.vue') 
    },
    {
      path: '/alphabet',
      component: () => import('./components/Alphabet.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes, 
  })

const app = createApp(App)

app.use(router);
app.use(vuetify)

app.mount('#app');