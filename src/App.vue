<template>
  <div id="app">
    <v-header></v-header>
    <div class="middle">
      <v-search v-show="$route.path.indexOf('vexplore')===-1&&$route.path.indexOf('vme')===-1&&$route.path.indexOf('profile')===-1&&$route.path.indexOf('personalheader')===-1&&$route.path.indexOf('myqr')===-1&&$route.path.indexOf('settings')===-1&&$route.path.indexOf('details')===-1&&$route.path.indexOf('moments')===-1&&$route.path.indexOf('albums')===-1&&$route.path.indexOf('photo')===-1"></v-search>
      <keep-alive>
          <router-view name="default"></router-view>
      </keep-alive>
    </div>
    <v-footer v-show="$route.path.indexOf('profile')===-1&&$route.path.indexOf('personalheader')===-1&&$route.path.indexOf('myqr')===-1&&$route.path.indexOf('settings')===-1&&$route.path.indexOf('details')===-1&&$route.path.indexOf('moments')===-1&&$route.path.indexOf('albums')===-1&&$route.path.indexOf('photo')===-1"></v-footer>
  </div>
</template>
<script>
import VHeader from './components/common/vheader.vue'
import VFooter from './components/common/vfooter.vue'
import VSearch from './components/common/vsearch.vue'
// import axios from 'axios'
export default {
  components: {
    VHeader,
    VSearch,
    VFooter,
   },
  // created() {
  //   axios.get('data/data.json').then((res) => {
  //     this.contacts = res.data.contacts
  //   })
  // }
  }
</script>
<style>
  @import "assets/css/iconfont.css";
	@import "assets/css/base.css";
  @import "assets/css/weui.min.css";
</style>
