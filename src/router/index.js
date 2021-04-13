import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/home';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
];

if (process.env.NODE_ENV === 'development') {
  routes.push(
    {
      path: '/svg',
      name: 'Svg',
      component: () => import('@/views/svg-viewer')
    }
  );
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
