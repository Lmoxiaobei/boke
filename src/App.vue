<template>
  <div id="app">
 <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
  color: #000;
}
</style>
