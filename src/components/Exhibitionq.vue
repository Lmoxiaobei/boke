<template>
        <div class="wrap-8">
            <div class="wrap-5">
                <span class="wrap-6">HTML基础</span>
            </div>
            <div class="wrap-7">
            <p>标签：nth-child（这是选择器）</p>
            <p>标签：nth-child(odd)（这是基数选择器）</p>
            <p>标签：nth-child(even) （这是偶数选择器）</p>
            <p>标签：nth-child（数字） （这是选择第几个选择器）</p>
            <p>标签：first-child (这是选择第一个)</p>
            <p>标签：last-child （这是选择最后一个）</p>
            </div>
        </div>
</template>

<script>
export default {
  name: 'Exhibitionq'
}
</script>

<style scoped>
.wrap-8 {
  width: 900px;
  background: linear-gradient(
    -134.8deg,
    rgba(255, 255, 255, 1),
    rgba(167, 203, 208, 1)
  );
  box-shadow: 5px 2px 4px 0px rgba(0, 0, 0, 0.5);
  border-radius: 4px;
}
.wrap-5 {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #53a6ae;
}
.wrap-6 {
  font-size: 30px;
  color: #4d4dff;
}
.wrap-7 {
  width: 90%;
  margin: 0 auto;
  margin-top: 60px;
  background-color: #fff;
  border-radius: 4px;
  height: 50vh;
}
.wrap-7 p {
  padding-top: 2px;
  margin-top: 10px;
  margin-left: 2%;
}
</style>
