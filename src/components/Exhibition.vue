<template>
  <div class="wrap">
      <div class="wrap-1">
          <span class="wrap-2">HTML基础</span>
      </div>
     <div class="wrap-3">
      <p>1.结构层 html</p>
      <p>2.表示层 css</p>
      <p>3.行为层 javascript(js)属于弱类行语言</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Exhibition'
}
</script>

<style scoped>
.wrap {
  width: 900px;
  background: linear-gradient(
    -134.8deg,
    rgba(255, 255, 255, 1),
    rgba(167, 203, 208, 1)
  );
  box-shadow: 5px 2px 4px 0px rgba(0, 0, 0, 0.5);
  border-radius: 4px;
}
.wrap-1 {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #53a6ae;
}
.wrap-2 {
  font-size: 30px;
  color: #4d4dff;
}
.wrap-3 {
  width: 90%;
  margin: 0 auto;
  margin-top: 60px;
  background-color: #fff;
  border-radius: 4px;
  height: 50vh;
}
.wrap-3 p {
  padding-top: 2px;
  margin-top: 10px;
  margin-left: 2%;
}
</style>
