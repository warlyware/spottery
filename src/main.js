import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App';
import store from './store';
import AlbumList from './components/AlbumList';
import AuthHandler from './components/AuthHandler';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: AlbumList
    },
    {
      path: '/callback',
      component: AuthHandler
    }
  ]
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');