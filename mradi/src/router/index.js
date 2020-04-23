import Vue from 'vue';
import Router from 'vue-router';
import Income from '@/components/income';
import Expenses from '@/components/expenses';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'income',
      component: Income,
    },
    {
      path: '/expenses',
      name: 'expenses',
      component: Expenses,
    },
    {
      path: '/',
      name: 'Income',
      component: Income,
    },
  ],
});
