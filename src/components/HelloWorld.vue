<template>
  <div class="wrap">
    <div class="wrap-1">
      <img src="../assets/1.jpg" alt=""> 
    <router-link to="/">Lmoxiaobei</router-link>
    <span v-if="showNav">
      >
      <router-link :to="path">{{pathName}}</router-link>
    </span>
    </div>
    <Top />
    <Foot />
    <Footer />
  </div>
</template>

<script>
import Top from './Top'
import Foot from './Foot'
import Footer from './Footer'

import { getPathName } from '../constants/RouteConstants'

export default {
  name: 'HelloWorld',
    computed: {
    path() {
      return this.$route.path
    },
    showNav() {
      return this.path !== '/'
    },
    pathName() {
      return getPathName(this.path)
    }
  },
  components: {
    Top,
    Foot,
    Footer,
  }
}
</script>

<style scoped>
.wrap-1 {
  width: 90%;
  margin: 0 auto;
  margin-top: 2%;
  margin-bottom: 2%;
  display: flex;
  align-items: center;
}
.wrap-1 img {
  width: 60px;
  height: 60px;
  border: 2px solid #0000ff;
  border-radius: 50%;
}
.wrap-2 {
  margin-left: 2%;
}
.wrap a {
  margin-left: 2%;
  color: #000;
}
</style>
