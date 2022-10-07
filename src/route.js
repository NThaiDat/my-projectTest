import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../src/components/HelloWorld.vue'
import AboutPage from './components/AboutPage.vue'
Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', component: HomePage },
        { path: '/about', component: AboutPage }
    ]
})