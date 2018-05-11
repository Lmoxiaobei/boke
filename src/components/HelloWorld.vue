<template>
  <div class="wrap">
    <div class="wrap-1">
      <img src="../assets/1.jpg" alt=""> 
      <router-link to="/">
        <span class="wrap-2">Lmoxiaobei</span>
      </router-link>
    </div>
    <Top />
    <Foot />
    <Footer />
  </div>
</template>

<script>
import Top from './Top'
import Foot from './Foot'
import Footer from './Footer'

export default {
  name: 'HelloWorld',
  components: {
    Top,
    Foot,
    Footer
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
.wrap-2 {
  margin-left: 2%;
}
.wrap a {
  margin-left: 2%;
  color: #000;
}
</style>
