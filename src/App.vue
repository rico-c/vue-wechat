<template>
  <div id="app">
    <v-header></v-header>
    <div class="middle">
      <v-search></v-search>
    </div>
    <v-footer></v-footer>
  </div>
</template>
<script>
import VHeader from './components/common/vheader.vue'
import VFooter from './components/common/vfooter.vue'
import VSearch from './components/common/vsearch.vue'
export default {
  components: {
    VHeader,
    VSearch,
    VFooter,
   }
  }
</script>
<style>
  @import "assets/css/iconfont.css";
	@import "assets/css/base.css";
</style>
