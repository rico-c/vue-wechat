import Vue from 'vue';
import Router from 'vue-router';
import vcontact from '../components/vcontact.vue';
import vexplore from '../components/vexplore.vue';
import vme from '../components/vme.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
     path: '/vcontact',
     component: vcontact
    },
    {
     path: '/vexplore',
     component: vexplore
    },
    {
     path: '/vme',
     component: vme
    }
  ]
})
