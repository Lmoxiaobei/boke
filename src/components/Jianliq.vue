<template>
<div class="zero">
<div class="wrap1">
  <svg id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 80 1700 800">/

  <path id="standard" class="st0" d="M251.424 335.12l24.126-53.42-30.33-50.16 58.262 6.437 38.332-44.347 11.883 57.4 54.02 22.753L356.8 302.82l-4.946 58.41-43.353-39.455z"/>
  <path id="huge" class="st0" d="M425.667 432.09l72.6-116.616-54.906-125.92 133.345 33.013 102.788-91.13 9.81 137.018 118.434 69.597-127.28 51.67-29.593 134.144-88.474-105.084z"/>
  <path id="small" class="st0" d="M257.485 436.636l15.83-15.667-3.93-21.923 19.79 10.214 19.636-10.512-3.598 21.98 16.067 15.424-22.017 3.37-9.705 20.047-10.01-19.898z"/>
  <path id="smallish" class="st0" d="M972.637 350.273l7.358-30.56-21.004-23.386 31.34-2.446 15.75-27.2 12.01 29.048 30.74 6.574-23.917 20.4 3.246 31.264-26.79-16.442z"/>
  <path id="smaller" class="st0" d="M1086.272 497.242l9.95-9.398-2.103-13.523 12.01 6.558 12.213-6.177-2.525 13.45 9.65 9.706-13.572 1.756-6.25 12.176-5.863-12.366z"/>
  <path id="tiniest" class="st0" d="M513.545 532.09l-1.3-9.455-8.528-4.29 8.592-4.16 1.443-9.435 6.61 6.886 9.42-1.542-4.505 8.415 4.377 8.48-9.395-1.683z"/>
  <path id="tiny" class="st0" d="M793.85 148.758l9.103-20.202-11.48-18.952 22.026 2.416 14.477-16.776 4.508 21.695 20.428 8.584-19.24 10.993-1.852 22.08-16.4-14.9z"/>
</svg>
</div>
<div class="wrap2">
  <section class="tagline">
    <h1>Twinkle twinkle <br>little star</h1>
  </section>
</div>
<div class="equalizer jianliq"></div>
</div>
</template>

<script>
// import jianliz from '../constants/Jianliz.js'
export default {
  name: 'Jianliq'
}
</script>

<style scoped>
$base: #a2a1a1;
$text: #9ca2b7;

body {
  font-family: 'Oswald', Arial;
  color: $text;
  background: linear-gradient(
    to right,
    #0d123e 0%,
    rgba(
        38,
        41,
        70,
        0.98$base: #a2a1a1; $text: #9ca2b7; body {font-family: 'Oswald',
        Arial; color: $text; background:
          linear-gradient(
            to right,
            #0d123e 0%,
            rgba(38, 41, 70, 0.98) 72%,
            #090821 100%
          )
          ; font-size: 32px;} #svg {width: 100%;} .st0 {stroke: $base; opacity:
          0.1;} #huge {fill: mix($base, #fff, 90%) ;} #standard {fill:
          mix($base, #fff, 40%) ;} #tiny {fill: mix($base, #fff, 20%) ;} #smallish
          {fill: mix($base, #fff, 90%) ;} #small {fill: mix($base, #fff, 60%) ;}
          #smaller {fill: mix($base, #fff, 10%) ;} #tiniest {fill:
          mix($base, #fff, 30%) ;} * {box-sizing: border-box;} .wrap1 {width:
          60%; float: left;} .wrap2 {width: 40%; float: left;}
      )
      72%,
    #090821 100%
  );
  font-size: 32px;
}

#svg {
  width: 100%;
}

.st0 {
  stroke: $base;
  opacity: 0.1;
}

#huge {
  fill: mix($base, #fff, 90%);
}

#standard {
  fill: mix($base, #fff, 40%);
}

#tiny {
  fill: mix($base, #fff, 20%);
}

#smallish {
  fill: mix($base, #fff, 90%);
}

#small {
  fill: mix($base, #fff, 60%);
}

#smaller {
  fill: mix($base, #fff, 10%);
}

#tiniest {
  fill: mix($base, #fff, 30%);
}

* {
  box-sizing: border-box;
}

.wrap1 {
  width: 60%;
  /* float: left; */
}

.wrap2 {
  width: 30%;
  /* float: left; */
}

* {
  box-sizing: border-box;
}
body {
  align-items: center;
  background-color: #111;
  display: flex;
  justify-content: center;
  min-height: 100vh;
}
.equalizer {
  -webkit-animation: equalize 2s infinite;
  animation: equalize 2s infinite;
  background: linear-gradient(0deg, #008000, #ff0, #f00) -38px 0 / 16px 100px,
    linear-gradient(0deg, #111, #111) -20px -57px / 20px 100px,
    linear-gradient(0deg, #008000, #ff0, #f00) -18px 0 / 16px 100px,
    linear-gradient(0deg, #111, #111) 0px -63px / 20px 100px,
    linear-gradient(0deg, #008000, #ff0, #f00) 2px 0 / 16px 100px,
    linear-gradient(0deg, #111, #111) 20px -81px / 20px 100px,
    linear-gradient(0deg, #008000, #ff0, #f00) 22px 0 / 16px 100px,
    linear-gradient(0deg, #111, #111) 40px -80px / 20px 100px,
    linear-gradient(0deg, #008000, #ff0, #f00) 42px 0 / 16px 100px,
    linear-gradient(0deg, #111, #111) 60px -43px / 20px 100px,
    linear-gradient(0deg, #008000, #ff0, #f00) 62px 0 / 16px 100px,
    linear-gradient(0deg, #111, #111) 80px -26px / 20px 100px,
    linear-gradient(0deg, #008000, #ff0, #f00) 82px 0 / 16px 100px;
  background-repeat: no-repeat;
  height: 100px;
  width: 100px;
}
@-webkit-keyframes equalize {
  0%,
  100% {
    background: linear-gradient(0deg, #008000, #ff0, #f00) -38px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) -20px -87px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) -18px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 0px -72px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 2px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 20px -77px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 22px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 40px -59px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 42px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 60px -36px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 62px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 80px -72px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 82px 0 / 16px 100px;
    background-repeat: no-repeat;
  }
  10% {
    background: linear-gradient(0deg, #008000, #ff0, #f00) -38px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) -20px -76px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) -18px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 0px -31px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 2px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 20px -24px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 22px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 40px -62px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 42px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 60px -63px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 62px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 80px -45px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 82px 0 / 16px 100px;
    background-repeat: no-repeat;
  }
  20% {
    background: linear-gradient(0deg, #008000, #ff0, #f00) -38px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) -20px -52px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) -18px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 0px -79px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 2px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 20px -89px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 22px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 40px -28px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 42px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 60px -56px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 62px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 80px -100px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 82px 0 / 16px 100px;
    background-repeat: no-repeat;
  }
  30% {
    background: linear-gradient(0deg, #008000, #ff0, #f00) -38px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) -20px -39px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) -18px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 0px -54px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 2px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 20px -81px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 22px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 40px -49px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 42px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 60px -46px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 62px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 80px -68px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 82px 0 / 16px 100px;
    background-repeat: no-repeat;
  }
  40% {
    background: linear-gradient(0deg, #008000, #ff0, #f00) -38px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) -20px -66px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) -18px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 0px -47px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 2px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 20px -32px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 22px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 40px -82px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 42px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 60px -23px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 62px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 80px -35px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 82px 0 / 16px 100px;
    background-repeat: no-repeat;
  }
  50% {
    background: linear-gradient(0deg, #008000, #ff0, #f00) -38px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) -20px -84px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) -18px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 0px -58px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 2px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 20px -31px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 22px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 40px -93px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 42px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 60px -26px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 62px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 80px -38px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 82px 0 / 16px 100px;
    background-repeat: no-repeat;
  }
  60% {
    background: linear-gradient(0deg, #008000, #ff0, #f00) -38px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) -20px -81px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) -18px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 0px -57px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 2px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 20px -57px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 22px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 40px -28px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 42px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 60px -60px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 62px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 80px -98px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 82px 0 / 16px 100px;
    background-repeat: no-repeat;
  }
  70% {
    background: linear-gradient(0deg, #008000, #ff0, #f00) -38px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) -20px -26px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) -18px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 0px -50px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 2px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 20px -77px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 22px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 40px -65px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 42px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 60px -35px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 62px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 80px -37px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 82px 0 / 16px 100px;
    background-repeat: no-repeat;
  }
  80% {
    background: linear-gradient(0deg, #008000, #ff0, #f00) -38px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) -20px -96px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) -18px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 0px -73px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 2px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 20px -96px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 22px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 40px -53px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 42px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 60px -26px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 62px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 80px -23px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 82px 0 / 16px 100px;
    background-repeat: no-repeat;
  }
  90% {
    background: linear-gradient(0deg, #008000, #ff0, #f00) -38px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) -20px -65px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) -18px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 0px -62px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 2px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 20px -67px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 22px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 40px -23px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 42px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 60px -86px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 62px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 80px -95px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 82px 0 / 16px 100px;
    background-repeat: no-repeat;
  }
}
@keyframes equalize {
  0%,
  100% {
    background: linear-gradient(0deg, #008000, #ff0, #f00) -38px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) -20px -87px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) -18px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 0px -72px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 2px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 20px -77px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 22px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 40px -59px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 42px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 60px -36px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 62px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 80px -72px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 82px 0 / 16px 100px;
    background-repeat: no-repeat;
  }
  10% {
    background: linear-gradient(0deg, #008000, #ff0, #f00) -38px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) -20px -76px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) -18px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 0px -31px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 2px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 20px -24px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 22px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 40px -62px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 42px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 60px -63px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 62px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 80px -45px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 82px 0 / 16px 100px;
    background-repeat: no-repeat;
  }
  20% {
    background: linear-gradient(0deg, #008000, #ff0, #f00) -38px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) -20px -52px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) -18px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 0px -79px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 2px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 20px -89px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 22px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 40px -28px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 42px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 60px -56px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 62px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 80px -100px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 82px 0 / 16px 100px;
    background-repeat: no-repeat;
  }
  30% {
    background: linear-gradient(0deg, #008000, #ff0, #f00) -38px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) -20px -39px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) -18px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 0px -54px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 2px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 20px -81px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 22px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 40px -49px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 42px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 60px -46px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 62px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 80px -68px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 82px 0 / 16px 100px;
    background-repeat: no-repeat;
  }
  40% {
    background: linear-gradient(0deg, #008000, #ff0, #f00) -38px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) -20px -66px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) -18px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 0px -47px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 2px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 20px -32px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 22px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 40px -82px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 42px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 60px -23px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 62px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 80px -35px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 82px 0 / 16px 100px;
    background-repeat: no-repeat;
  }
  50% {
    background: linear-gradient(0deg, #008000, #ff0, #f00) -38px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) -20px -84px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) -18px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 0px -58px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 2px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 20px -31px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 22px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 40px -93px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 42px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 60px -26px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 62px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 80px -38px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 82px 0 / 16px 100px;
    background-repeat: no-repeat;
  }
  60% {
    background: linear-gradient(0deg, #008000, #ff0, #f00) -38px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) -20px -81px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) -18px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 0px -57px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 2px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 20px -57px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 22px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 40px -28px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 42px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 60px -60px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 62px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 80px -98px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 82px 0 / 16px 100px;
    background-repeat: no-repeat;
  }
  70% {
    background: linear-gradient(0deg, #008000, #ff0, #f00) -38px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) -20px -26px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) -18px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 0px -50px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 2px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 20px -77px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 22px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 40px -65px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 42px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 60px -35px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 62px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 80px -37px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 82px 0 / 16px 100px;
    background-repeat: no-repeat;
  }
  80% {
    background: linear-gradient(0deg, #008000, #ff0, #f00) -38px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) -20px -96px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) -18px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 0px -73px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 2px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 20px -96px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 22px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 40px -53px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 42px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 60px -26px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 62px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 80px -23px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 82px 0 / 16px 100px;
    background-repeat: no-repeat;
  }
  90% {
    background: linear-gradient(0deg, #008000, #ff0, #f00) -38px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) -20px -65px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) -18px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 0px -62px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 2px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 20px -67px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 22px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 40px -23px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 42px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 60px -86px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 62px 0 / 16px 100px,
      linear-gradient(0deg, #111, #111) 80px -95px / 20px 100px,
      linear-gradient(0deg, #008000, #ff0, #f00) 82px 0 / 16px 100px;
    background-repeat: no-repeat;
  }
}
.jianliq {
  /* position: relative;
  left: 90%;
  top: 0px; */
}
.zero {
  display: flex;
  justify-content: center;
}
</style>