import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App';
import Home from './pages/Home';
import Detail from './pages/Detail';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        { path: '/', component: Home },
        { path: '/detail', component: Detail },
    ]
});

new Vue({
    el: '#app',
    router,
    render: h => h(App),
});