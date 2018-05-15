<template>
  <div class="wrap">
      <span class="wrap-1">欢迎</span>
      <span class="wrap-2">来到</span>
      <span class="wrap-3">我的</span>
      <span class="wrap-4">家园</span>
  </div>
</template>

<script>
export default {
  name: 'Top'
}
</script>

<style scoped>
.wrap {
  height: 200px;
  background-color: #60bec6;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(https://i0.hdslb.com/bfs/space/cb1c3ef50e22b6096fde67febe863494caefebad.png@100Q.webp);
}
.wrap span {
  font-size: 30px;
}
.wrap-1 {
  color: rgb(68, 142, 246);
}
.wrap-2 {
  color: rgb(117, 194, 246);
}
.wrap-3 {
  color: rgb(101, 218, 247);
}
.wrap-4 {
  color: rgb(255, 233, 129);
}
</style>
