<template>
  <div>
    <div class="wrap-1">
      <img src="../assets/1.jpg" alt=""> 
      <span class="wrap-2">Lmoxiaobei</span>
      <span>></span>
      <span>我的博客</span>
    </div>
    <div class="wrap-4">
        <div class="wrap-2">
          <Sidebar />
        </div>
        <div class="wrap-3">
          <Exhibition />
        </div>
    </div>
  </div>
</template>

<script>
import Sidebar from './Sidebar'
import Exhibition from './Exhibition'
export default {
  name: 'Note',
  components: {
    Sidebar,
    Exhibition
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
.wrap-4 {
  /* width: 100vw; */
  height: 80vh;
  display: flex;
  justify-content: space-between;
}
</style>
