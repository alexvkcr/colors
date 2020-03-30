import Vue from 'vue'
import VueRouter from 'vue-router'
import VueI18n from 'vue-i18n'
import vuetify from './plugins/vuetify'

import App from './App.vue'


Vue.config.productionTip = false
Vue.use(VueI18n)
Vue.use(VueRouter)

const i18n = new VueI18n({
    locale: 'en',
})

import colorsList from './assets/colors.js';


const routes = [
    { name: 'Index', path: '/colors', component: ()=> import(/* webpackChunkName: "presentation" */'./components/Presentation.vue'), props: { propColourList: colorsList } },
    { name: 'About', path: '/about', component: ()=> import(/* webpackChunkName: "about" */'./components/About.vue'), props: { propColourList: colorsList } }
]


const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes
})

import "@/assets/typos.css"

new Vue({
    i18n,
    router,
    vuetify,
    render: h => h(App)
}).$mount('#app')