import Vue from 'vue';
import Router from 'vue-router';
import Main from './views/main/main.vue';
import DataCountry from './views/country-view/country-view.vue'

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: '/',
    routes: [
        {
            path: '/',
            name: 'main',
            component: Main,
            props: true
        },
        {
            path: '/:path',
            name: 'data-country',
            component: DataCountry,
            props: true
        }
    ]
})