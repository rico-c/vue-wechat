import Vue from 'vue';
import Router from 'vue-router';
import vcontact from '../components/vcontact.vue';
import vexplore from '../components/vexplore.vue';
import vme from '../components/vme.vue';
import myprofile from'../components/pages/myprofile.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
     path: '/vcontact',
     component: vcontact,
     meta:{
        title:'联系人'
     }
    },
    {
     path: '/vexplore',
     component: vexplore,
     meta:{
        title:'发现'
     }
    },
    {
     path: '/vme',
     component: vme,
     meta:{
        title:'我'
     }
    },
    {
     path: '/myprofile',
     component: myprofile,
     meta:{
        title:'个人信息'
        }
    }
  ]
})
