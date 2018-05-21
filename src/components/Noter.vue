<template>
    <div>
        <div class="wrap-1">HTML基础</div>
        <p>display: flex;  justify-content: center;  align-items: center;    (水平垂直居中)</p>
        <p>display: flex;  justify-content:center;	  (水平居中)</p>
        <p>display: flex;  justify-content: space-between;	    	(两端对齐居中)</p>
        <p>display: flex;  justify-content:space-around;    (两端有一定的距离水平居中，用的不多)</p>
        <p>display: flex;  flex-direction: column;  		(垂直排序,相当于display:block)</p>
        <p>display: flex;  align-items: center;			(垂直居中)</p>
        <p>display: flex;  align-items:flex-end;			(以底部平行排序)</p>
    </div>
</template>

<script>
export default {
  name: 'Noter'
}
</script>

 <style scoped>
.wrap-1 {
  text-align: center;
  font-size: 30px;
  color: #fff;
  background-color: #53a6ae;
}
p {
  padding-top: 20px;
  padding-left: 20px;
  padding-bottom: 20px;
}
</style>
