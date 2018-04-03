import Vue from 'vue';
import Router from 'vue-router';
import vcontact from '../components/vcontact.vue';
import vexplore from '../components/vexplore.vue';
import vme from '../components/vme.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
     path: 'components/vcontact',
     component: vcontact
    },
    {
     path: 'components/vexplore',
     component: vexplore
    },
    {
     path: 'components/vme',
     component: vme
    }
  ]
})
