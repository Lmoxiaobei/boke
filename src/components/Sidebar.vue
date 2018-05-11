<template>
  <div class="wrap">
    <!-- <div v-if="showNav"> -->
      <router-link to="/Exhibition" >
      {{ pathName }}
    <p>前端页面组成由那几部分</p>
      </router-link>

    <!-- </div> -->
      <router-link to="/Exhibitionq">
    <p>选择器</p>
      </router-link>
  </div>
</template>

<script>
import { getPathName } from '../constants/RouteConstants'
export default {
  name: 'Sidebar',
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
  }
}
</script>

<style scoped>
.wrap {
  width: 400px;
  background: rgba(83, 166, 174, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 4px;
}
.wrap p {
  margin-top: 2%;
  margin-bottom: 2%;
  font-size: 18px;
  /* text-align: center; */
}
a {
  color: #000;
}
a:hover {
  color: #fff;
}
</style>
