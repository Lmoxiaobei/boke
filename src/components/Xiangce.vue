<template>
<div>
        <div class="wrap-1">
      <img src="../assets/1.jpg" alt=""> 
      <router-link to="/">
      <span class="wrap-2">Lmoxiaobei</span>
      </router-link>
      <span>></span>
      <span>我的博客</span>
    </div>
    <div class="wrapper">
	  <div class="box">
	    <div class="productq">
	      <span class="name">T-shirt</span>
	      <span class="description">刀剑神域,亚丝娜</span>
	    </div>
	  </div>
	  <div class="box">
	    <div class="productw">
	      <span class="name">T-shirt</span>
	      <span class="description">Fgo,阿尔托莉雅</span>
	    </div>
	  </div>
	  <div class="box">
	    <div class="producte">
	      <span class="name">T-shirt</span>
	      <span class="description">Clannad,藤林杏</span>
	    </div>
	  </div>
	</div>
</div>    
</template>

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
body {
  margin: 0;
  background: #d8f0ea;
}
h1,
p,
span {
  font-family: monospace;
  font-weight: 300;
  text-align: center;
  color: rgba(0, 0, 0, 0.5);
}
h1,
h1 + p {
  margin: 2rem 1rem;
}
.wrapper {
  max-width: 60rem;
  margin: 0 auto;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-bottom: 3rem;
}
.box {
  width: 15rem;
  height: 20rem;
  padding: 0 2rem 3rem;
  -webkit-transition: opacity 0.5s linear 0.3s, -webkit-transform 0.3s linear 0s,
    -webkit-filter 0.5s linear 0.3s;
  transition: opacity 0.5s linear 0.3s, -webkit-transform 0.3s linear 0s,
    -webkit-filter 0.5s linear 0.3s;
  transition: transform 0.3s linear 0s, filter 0.5s linear 0.3s,
    opacity 0.5s linear 0.3s;
  transition: transform 0.3s linear 0s, filter 0.5s linear 0.3s,
    opacity 0.5s linear 0.3s, -webkit-transform 0.3s linear 0s,
    -webkit-filter 0.5s linear 0.3s;
  /*transform-origin: top center;*/
}
.productq,
.productw,
.producte {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 0.2rem;
  background-image: url(../assets/4.jpg);
  background-color: #fff;
  background-position: top 3rem center;
  background-size: 80%;
  background-repeat: no-repeat;
  box-shadow: 0 0.1rem 0.2rem rgba(0, 0, 0, 0.1);
  -webkit-transition: box-shadow 0.5s linear, height 0.1s linear 0s;
  transition: box-shadow 0.5s linear, height 0.1s linear 0s;
}
.productw {
  background-image: url(../assets/2.jpg);
}
.producte {
  background-image: url(../assets/3.jpg);
}
.name {
  display: block;
  padding: 1rem 0.5rem;
}
.description {
  font-size: 20px;
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  display: block;
  padding: 0 1.5rem;
  opacity: 0;
  -webkit-transition: opacity 0.1s linear 0s;
  transition: opacity 0.1s linear 0s;
}
.wrapper:hover .box:not(:hover) {
  -webkit-filter: blur(3px);
  filter: blur(3px);
  opacity: 0.5;
}
.box:hover {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
  -webkit-transition: opacity 0.1s linear 0s, -webkit-transform 0.3s linear 0.3s,
    -webkit-filter 0.1s linear 0s;
  transition: opacity 0.1s linear 0s, -webkit-transform 0.3s linear 0.3s,
    -webkit-filter 0.1s linear 0s;
  transition: transform 0.3s linear 0.3s, filter 0.1s linear 0s,
    opacity 0.1s linear 0s;
  transition: transform 0.3s linear 0.3s, filter 0.1s linear 0s,
    opacity 0.1s linear 0s, -webkit-transform 0.3s linear 0.3s,
    -webkit-filter 0.1s linear 0s;
}
.box:hover .product {
  height: 23rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
  -webkit-transition: box-shadow 1s linear, height 0.3s linear 0.5s;
  transition: box-shadow 1s linear, height 0.3s linear 0.5s;
}
.box:hover .description {
  opacity: 1;
  -webkit-transition: opacity 0.3s linear 0.75s;
  transition: opacity 0.3s linear 0.75s;
}
</style>