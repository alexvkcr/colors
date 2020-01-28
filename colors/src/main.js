import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'


import Presentation from './components/Presentation.vue'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
    { name: 'Index', path: '/', component: Presentation },
    //{ name: 'Play', path: '/items', component: Play },
    //{ name: 'HowTo', path: '/headquarters', component: HowTo }
]


const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes
})

new Vue({
    router,
    vuetify,
    render: h => h(App)
}).$mount('#app')