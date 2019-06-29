import Vue from 'vue'
import Router from 'vue-router'
import Counter from './components/Counter.vue'
import Home from './components/Home.vue'

const routes= [
    { path: '/', name: 'Home', component: Home },
    { path: '/counter', name: 'Counter', component: Counter },
]

Vue.use(Router)

export default new Router({ routes })