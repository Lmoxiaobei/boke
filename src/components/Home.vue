<template>
<div>
    <div class="wrap-1">
      <img src="../assets/1.jpg" alt=""> 
      <router-link to="/">
      <span class="wrap-2">Lmoxiaobei</span>
      </router-link>
      <span>></span>
      <span>我的笔记</span>
    </div>
    <div class="wrap-3">
      <div class="wrap-4">
      <img src="../assets/2.png" alt="">
      <span>Lmoxiaobei的博客</span>
      </div>
    </div>
    <HomeFoot />
    <Footer />
</div>
</template>

<script>
import HomeFoot from './HomeFoot'
import Footer from './Footer'
export default {
  name: 'Home',
  components: {
    Footer,
    HomeFoot
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
.wrap-1 span {
  margin-left: 20px;
}
.wrap-3 {
  height: 384px;
  background: linear-gradient(
    -90deg,
    rgba(96, 190, 198, 1),
    rgba(70, 156, 166, 1)
  );
  display: flex;
  align-items: center;
}
.wrap-4 {
  width: 50%;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
}
.wrap-3 img {
  width: 100px;
  height: 100px;
  border: 2px solid #fff;
  border-radius: 50%;
}
.wrap-3 span {
  font-size: 30px;
  color: #fff;
  display: flex;
  align-items: center;
}
.wrap-1 a {
  color: #000;
}
</style>
