<template>
  <div id="app">
    <Header/>
    <!-- <Index/> -->
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header'
  // import Index from '@/pages/Index'
import Footer from '@/components/Footer'
// 引入路由模式
import {router} from '@/router/router.js'
export default {
  name: 'app',
  router,
  components: {
    Header,Footer
  }
}
</script>

<style>
@import "./assets/css/common.css";
@import "./assets/css/mycss.css";
</style>
