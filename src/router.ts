import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Issues from './views/Issues.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/about', name: 'about', component: About },
    { path: '/:organization/:repository/', component: Issues, props: { status: 'all' }},
    { path: '/:organization/:repository/open', component: Issues, props: { status: 'open' }},
    { path: '/:organization/:repository/close', component: Issues, props: { status: 'close' }},
  ],
});
