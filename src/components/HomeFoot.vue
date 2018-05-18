<template>
  <div class="wrap">
      <router-link to="/Note">
        <div class="wrap-1">
            <img src="../assets/3.png" alt="" class="wrap-2">
            <button>HTML笔记</button>
        </div>
      </router-link>
      <div class="wrap-1">
          <img src="../assets/4.png" alt="" class="wrap-3 wrap-2">
          <button>学会创建仓库</button>
      </div>
      <div class="wrap-1">
          <img src="../assets/5.png" alt="" class="wrap-4 wrap-2">
          <button>学会创建仓库</button>
      </div>
  </div>
</template>

<script>
import { getPathName } from '../constants/RouteConstants'
export default {
  name: 'HomeFoot'
}
</script>

<style scoped>
.wrap {
  margin-top: 100px;
  position: relative;
}
.wrap img {
  cursor: pointer;
}
.wrap-1 {
  width: 50%;
  margin: 0 auto;
  margin-bottom: 100px;
}
.wrap-2 {
  width: 40px;
  height: 40px;
  border: 2px solid #fff;
  border-radius: 50%;
  position: absolute;
  left: 377px;
  top: 40px;
}
.wrap-3 {
  top: 232px;
}
.wrap-4 {
  top: 430px;
}
.wrap button {
  margin-top: 5%;
  width: 80%;
  height: 60px;
  background-color: #fff;
  cursor: pointer;
  outline: 0;
  border-style: none;
  border-radius: 7px;
  color: rgba(53, 49, 49, 1);
  font-size: 24px;
  box-shadow: 10px 12px 18px 0px rgba(231, 222, 222, 0.5);
}
.wrap button:hover {
  box-shadow: 10px 12px 18px 0px rgba(176, 169, 169, 0.5);
}
</style>
