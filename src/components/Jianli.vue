<template>
<div>
  <div class="wrap-1">
      <img src="../assets/1.jpg" alt=""> 
      <router-link to="/">
      <span class="wrap-2">Lmoxiaobei</span>
      </router-link>
      <span>></span>
      <span>我的简历</span>
  </div>
  <div class="clock">
    <div class="top"></div>
    <div class="right"></div>
    <div class="bottom"></div>
    <div class="left"></div>
    <div class="center"></div>
    <div class="shadow"></div>
    <div class="hour"></div>
    <div class="minute"></div>
    <div class="second"></div>
  </div>    
  <Jianliq />
  <Ga />
</div>  
</template>

<script>
import Jianliq from './Jianliq'
import Ga from './Ga'

export default {
  name: 'Jianli',
  components: {
    Jianliq,
    Ga
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  border: 0;
}
li {
  list-style: none;
}
body {
  min-height: 100%;
  background: #00a88f;
}
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
.clock {
  position: relative;
  height: 200px;
  width: 200px;
  background: white;
  box-sizing: border-box;
  border-radius: 100%;
  border: 10px solid #67d2cb;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 270px;
  margin: auto;
}
.clock .top {
  position: absolute;
  width: 3px;
  height: 8px;
  background: black;
  left: 0;
  right: 0;
  margin: 0 auto;
}
.clock .right {
  position: absolute;
  width: 8px;
  height: 3px;
  background: black;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto 0;
}
.clock .bottom {
  position: absolute;
  width: 3px;
  height: 8px;
  background: black;
  margin: 0 auto;
  bottom: 0;
  right: 0;
  left: 0;
}

.clock .left {
  position: absolute;
  width: 8px;
  height: 3px;
  background: black;
  margin: auto 0;
  right: 0;
  top: 0;
  bottom: 0;
  left: 0;
}
.clock .center {
  height: 6px;
  width: 6px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  background: black;
  border-radius: 100%;
}

.clock .shadow {
  height: 200px;
  width: 200px;
  position: absolute;
  left: 60px;
  top: 60px;
  transform: rotate(135deg);
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.1));
}
.clock .hour {
  width: 3px;
  heigth: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: 0 auto;
  animation: time 60s infinite linear;
}
.clock .hour:before {
  position: absolute;
  content: '';
  background: black;
  height: 60px;
  width: 3px;
  top: 30px;
}

.clock .minute {
  width: 1px;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  animation: time 30s infinite linear;
}

.clock .minute:before {
  position: absolute;
  content: '';
  background: black;
  height: 40px;
  width: 1px;
  top: 50px;
}

.clock .second {
  width: 2px;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  animation: time 15s infinite linear;
}

.clock .second:before {
  position: absolute;
  content: '';
  background: red;
  height: 45px;
  top: 45px;
  width: 2px;
}

@keyframes time {
  to {
    transform: rotate(360deg);
  }
}
</style>
