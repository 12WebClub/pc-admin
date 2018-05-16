import Vue from 'vue';
import Router from 'vue-router';

const Login = r => require.ensure([], () => r(require('@/views/login/index.vue')), 'Login');
const Layout = r => require.ensure([], () => r(require('@/views/layout/index.vue')), 'Layout');

const Home = r => require.ensure([], () => r(require('@/views/home/index.vue')), 'Home');
const Page1 = r => require.ensure([], () => r(require('@/views/page1/index.vue')), 'Page1');
const Page12 = r => require.ensure([], () => r(require('@/views/page1/index2.vue')), 'Page12');
const Page2 = r => require.ensure([], () => r(require('@/views/page2/index.vue')), 'Page2');

const Error = r => require.ensure([], () => r(require('@/views/error/index.vue')), 'Search');

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          name: 'page1',
          component: Page1,
        },
        {
          path: 'page1',
          name: 'page1',
          component: Page1,
        },
        {
          path: 'page12',
          name: 'page12',
          component: Page12,
        },
        {
          path: 'page2',
          name: 'page2',
          component: Page2,
        },
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/error',
      name: 'error',
      component: Error,
    },
    {
      path: "*",
      redirect: "/error"
    }
  ],
});
