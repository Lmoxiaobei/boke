<template>
<div class="wrap">
  <router-link to="/tiaozhuan" >
      <p>前端页面组成由那几部分</p>
  </router-link>
  <router-link to="/tiaozhuanq">
      <p>选择器</p>
  </router-link>
      <router-link to="/tiaozhuanw">
      <p>flex布局</p>
  </router-link>
</div>
</template>

<script>
export default {
  name: 'Sidebar'
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
}
a {
  margin-top: 56px;
  margin-bottom: 56px;
  color: #000;
}
a:hover {
  color: #fff;
}
</style>
