import Vue from 'vue'
import VueRouter from 'vue-router'
import VueI18n from 'vue-i18n'
import vuetify from './plugins/vuetify';
import App from './App.vue'


import Presentation from './components/Presentation.vue'
import Play from './components/Play.vue'
import HowTo from './components/HowTo.vue'

Vue.config.productionTip = false
Vue.use(VueI18n)
Vue.use(VueRouter)

const i18n = new VueI18n({
    locale: 'en',
})

const routes = [
    { name: 'Index', path: '/', component: Presentation },
    { name: 'Play', path: '/play', component: Play },
    { name: 'HowTo', path: '/howto', component: HowTo }
]


const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes
})

new Vue({
    i18n,
    router,
    vuetify,
    render: h => h(App)
}).$mount('#app')