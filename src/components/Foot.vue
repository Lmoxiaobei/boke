<template>
  <div class="wrap">
      <div class="wrap-1"></div>
      <div class="zero">
        <div class="wrap-2">
          <div class="wrap-3"></div>
          <div class="wrap-4"></div>
        </div>
        <div class="wrap-5">
          <div class="wrap-6"></div>
          <div class="wrap-7"></div>
        </div>
      </div>
      <div class="zero-1">
        <div class="wrap-10"></div>
        <div class="wrap-8">
          <img src="../assets/i394.png" alt="">
          <router-link to='/Jianli'>
          <span>我的简历</span>
          </router-link>
        </div>
        <div class="wrap-11"></div>
        <div class="wrap-9">
          <img src="../assets/i478.png" alt="">
          
          <span>我的博客</span>
         
        </div>
      </div>




    <div class="wrap-1 zero-2"></div>
      <div class="zero">
        <div class="wrap-2">
          <div class="wrap-3"></div>
          <div class="wrap-4"></div>
        </div>
        <div class="wrap-5">
          <div class="wrap-6"></div>
          <div class="wrap-7"></div>
        </div>
      </div>
      <div class="zero-1">
        <div class="wrap-10"></div>
        <div class="wrap-8">
          <img src="../assets/i422.png" alt="">
          <router-link to="/Home">
          <span>我的笔记</span>
           </router-link>
        </div>
        <div class="wrap-11"></div>
        <div class="wrap-9 wrap-12">
          <img src="../assets/i476.png" alt="">
           <router-link to="/Xiangce">
          <span>相册</span>
          </router-link>
        </div>
      </div>

      <div class="wrap-13">
        <span>Stay Hungry Stay Foolish</span>
      </div>

  </div>
</template>

<script>
export default {
  name: 'Foot'
}
</script>

<style scoped>
.wrap {
  margin-top: 24px;
}
.wrap-1 {
  height: 27px;

  background-color: #90999c;
}
.zero {
  display: flex;
  justify-content: space-around;
}
.wrap-3,
.wrap-4,
.wrap-6,
.wrap-7 {
  width: 20px;
  background-color: #90999c;
  height: 60px;
}
.wrap-2,
.wrap-5 {
  width: 222px;
  display: flex;
  justify-content: space-around;
}
.zero-1 {
  display: flex;
  justify-content: space-around;
  position: relative;
}
.wrap-8,
.wrap-9 {
  width: 300px;
  height: 400px;
  background-color: #a7cbd0;
}
.wrap-8 span {
  font-size: 24px;
  position: absolute;
  left: 300px;
  top: 270px;
}
.wrap-10,
.wrap-11 {
  background-color: #d47490;
  width: 20px;
  height: 400px;
  position: absolute;
  top: 0px;
  left: 220px;
}
.wrap-11 {
  left: 900px;
}
.wrap-8 img,
.wrap-9 img {
  margin-left: 100px;
  margin-top: 60px;
  width: 120px;
  height: 120px;
  border: 2px solid #fff;
  border-radius: 50%;
}
.wrap-9 span {
  position: absolute;
  left: 970px;
  top: 270px;
  font-size: 24px;
}
.zero-2 {
  margin-top: 100px;
}
.wrap-12 span {
  margin-left: 32px;
}
.wrap-13 {
  margin-top: 40px;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.wrap-13 span {
  /* width: 757px; */
  height: 84px;
  font-size: 60px;
  font-family: PingFangSC-Semibold;
  color: rgba(96, 190, 198, 1);
  line-height: 84px;
}
</style>
