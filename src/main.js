import Vue from 'vue'
import VueRouter from 'vue-router'
import VueI18n from 'vue-i18n'
import vuetify from './plugins/vuetify'
import VTooltip from 'v-tooltip'

import App from './App.vue'


import Presentation from './components/Presentation.vue'
import Play from './components/Play.vue'
import HowTo from './components/HowTo.vue'

Vue.config.productionTip = false
Vue.use(VTooltip)
Vue.use(VueI18n)
Vue.use(VueRouter)

const i18n = new VueI18n({
    locale: 'en',
})

const colorsList = {
    sable: {
        codes: ['000000'],
        es: 'Sable',
        en: 'Sable',
        es_tip: 'Negro heráldico',
        en_tip: 'Heraldic black'
    },
    cordoban: {
        codes: ['42352d'],
        es: 'Cordobán',
        en: 'Cordovan',
        es_tip: 'Negro pardo cuero',
        en_tip: 'Leather dark brown'
    },
    grisPayne: {
        codes: ['536878'],
        es: 'Gris Payne',
        en: "Payne's grey",
        es_tip: 'Gris azulado',
        en_tip: 'Bluish grey'
    },
    grisPayneOscuro: {
        codes: ['36454F'],
        es: 'Payne oscuro',
        en: "Dark Payne's",
        es_tip: 'Gris oscuro azulado',
        en_tip: 'Dark bluish grey'
    },
    grisFeldgrau: {
        codes: ['59646A'],
        es: 'Feldgrau',
        en: 'Feldgrau',
        es_tip: 'Gris campaña',
        en_tip: 'Field Grey'
    },
    umbra: {
        codes: ['635147'],
        es: 'Umbra',
        en: 'Umber',
        es_tip: 'Marrón rojizo',
        en_tip: 'Reddish-brown '
    },
    bistre: {
        codes: ['967117'],
        es: 'Bistre',
        en: 'Bistre',
        es_tip: 'Marrón amarillento',
        en_tip: 'Yellowish brown'
    },
    borgoña: {
        codes: ['673147'],
        es: 'Borgoña',
        en: 'Burgundy',
        es_tip: 'Color del vino',
        en_tip: 'Wine color'
    },
    sinople: {
        codes: ['008f4c'],
        es: 'Sinople',
        en: 'Sinople',
        es_tip: 'Verde heráldico',
        en_tip: 'Heraldic green'
    },
    verdeMalaquito: {
        codes: ['1f533f', '12774f'],
        es: 'Malaquito',
        en: 'Malachite',
        es_tip: 'Verde malaquito',
        en_tip: 'Malachite green',
    },
    jade: {
        codes: ['08a86b'],
        es: 'Jade',
        en: 'Jade',
        es_tip: 'Verde jade',
        en_tip: 'Jade green'
    },
    esmeralda: {
        codes: ['009975'],
        es: 'Esmeralda',
        en: 'Emerald',
        es_tip: 'Verde esmeralda',
        en_tip: 'Emerald green'
    },
    viridian: {
        codes: ['007F66'],
        es: 'Viridián',
        en: 'Viridian',
        es_tip: 'Verde viridián',
        en_tip: 'Viridián green'
    },
}


const routes = [
    { name: 'Index', path: '/', component: Presentation },
    { name: 'Play', path: '/play', component: Play },
    { name: 'HowTo', path: '/howto', component: HowTo, props: { propColorList: colorsList } }
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