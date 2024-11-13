<template>
  <div>
    <div class="background">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
    <NuxtPage />
  </div>
</template>
<style>
@keyframes move {
  100% {
    transform: translate3d(0, 0, 1px) rotate(360deg);
  }
}

.background {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: #ffffff;
  overflow: hidden;
}

.background span {
  width: 50vmin;
  height: 50vmin;
  border-radius: 50vmin;
  backface-visibility: hidden;
  position: absolute;
  animation: move;
  animation-duration: 1;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}


.background span:nth-child(0) {
  color: #effffb;
  top: 62%;
  left: 7%;
  animation-duration: 118s;
  animation-delay: -456s;
  transform-origin: 25vw 17vh;
  box-shadow: -100vmin 0 13.30734458888416vmin currentColor;
}

.background span:nth-child(1) {
  color: #fff8f4;
  top: 96%;
  left: 53%;
  animation-duration: 158s;
  animation-delay: -409s;
  transform-origin: 17vw 15vh;
  box-shadow: 100vmin 0 12.6079351654812vmin currentColor;
}

.background span:nth-child(2) {
  color: #effffb;
  top: 77%;
  left: 88%;
  animation-duration: 321s;
  animation-delay: -216s;
  transform-origin: 16vw 22vh;
  box-shadow: 100vmin 0 12.563785197317799vmin currentColor;
}

.background span:nth-child(3) {
  color: #f6f1ff;
  top: 43%;
  left: 9%;
  animation-duration: 442s;
  animation-delay: -217s;
  transform-origin: 15vw 7vh;
  box-shadow: 100vmin 0 12.785435687227505vmin currentColor;
}

.background span:nth-child(4) {
  color: #effffb;
  top: 1%;
  left: 46%;
  animation-duration: 250s;
  animation-delay: -457s;
  transform-origin: 0vw 21vh;
  box-shadow: 100vmin 0 12.838537800591732vmin currentColor;
}

.background span:nth-child(5) {
  color: #fff8f4;
  top: 23%;
  left: 74%;
  animation-duration: 470s;
  animation-delay: -147s;
  transform-origin: 5vw -13vh;
  box-shadow: 100vmin 0 13.211088318337492vmin currentColor;
}

.background span:nth-child(6) {
  color: #effffb;
  top: 61%;
  left: 41%;
  animation-duration: 449s;
  animation-delay: -366s;
  transform-origin: -18vw 5vh;
  box-shadow: 100vmin 0 12.689411053543123vmin currentColor;
}

.background span:nth-child(7) {
  color: #effffb;
  top: 98%;
  left: 59%;
  animation-duration: 306s;
  animation-delay: -405s;
  transform-origin: 3vw 7vh;
  box-shadow: -100vmin 0 12.943127490408193vmin currentColor;
}

.background span:nth-child(8) {
  color: #f6f1ff;
  top: 26%;
  left: 24%;
  animation-duration: 372s;
  animation-delay: -156s;
  transform-origin: 21vw -12vh;
  box-shadow: -100vmin 0 13.442251212467768vmin currentColor;
}

.background span:nth-child(9) {
  color: #effffb;
  top: 44%;
  left: 39%;
  animation-duration: 90s;
  animation-delay: -247s;
  transform-origin: -19vw 2vh;
  box-shadow: 100vmin 0 12.852356148670797vmin currentColor;
}

.background span:nth-child(10) {
  color: #fff8f4;
  top: 21%;
  left: 39%;
  animation-duration: 55s;
  animation-delay: -468s;
  transform-origin: -9vw -10vh;
  box-shadow: -100vmin 0 12.642214924418862vmin currentColor;
}

.background span:nth-child(11) {
  color: #fff8f4;
  top: 69%;
  left: 58%;
  animation-duration: 266s;
  animation-delay: -14s;
  transform-origin: -21vw 22vh;
  box-shadow: 100vmin 0 12.574811022332678vmin currentColor;
}

.background span:nth-child(12) {
  color: #f6f1ff;
  top: 73%;
  left: 80%;
  animation-duration: 435s;
  animation-delay: -54s;
  transform-origin: 8vw 17vh;
  box-shadow: -100vmin 0 12.744487683416763vmin currentColor;
}

.background span:nth-child(13) {
  color: #effffb;
  top: 42%;
  left: 24%;
  animation-duration: 243s;
  animation-delay: -264s;
  transform-origin: -17vw -23vh;
  box-shadow: 100vmin 0 13.129350038793044vmin currentColor;
}

.background span:nth-child(14) {
  color: #f6f1ff;
  top: 63%;
  left: 93%;
  animation-duration: 36s;
  animation-delay: -182s;
  transform-origin: -18vw -22vh;
  box-shadow: -100vmin 0 13.405694912153875vmin currentColor;
}

.background span:nth-child(15) {
  color: #f6f1ff;
  top: 71%;
  left: 37%;
  animation-duration: 137s;
  animation-delay: -113s;
  transform-origin: -10vw -22vh;
  box-shadow: -100vmin 0 12.88366820176603vmin currentColor;
}

.background span:nth-child(16) {
  color: #f6f1ff;
  top: 49%;
  left: 7%;
  animation-duration: 294s;
  animation-delay: -379s;
  transform-origin: -1vw 7vh;
  box-shadow: 100vmin 0 12.577068717118573vmin currentColor;
}

.background span:nth-child(17) {
  color: #f6f1ff;
  top: 43%;
  left: 17%;
  animation-duration: 291s;
  animation-delay: -390s;
  transform-origin: -7vw 0vh;
  box-shadow: 100vmin 0 12.780004564174751vmin currentColor;
}

.background span:nth-child(18) {
  color: #fff8f4;
  top: 91%;
  left: 90%;
  animation-duration: 370s;
  animation-delay: -472s;
  transform-origin: -3vw -7vh;
  box-shadow: -100vmin 0 13.117712871365166vmin currentColor;
}

.background span:nth-child(19) {
  color: #effffb;
  top: 5%;
  left: 1%;
  animation-duration: 184s;
  animation-delay: -311s;
  transform-origin: -20vw -24vh;
  box-shadow: -100vmin 0 12.744865657981636vmin currentColor;
}

.background span:nth-child(20) {
  color: #fff8f4;
  top: 86%;
  left: 24%;
  animation-duration: 11s;
  animation-delay: -347s;
  transform-origin: 4vw 20vh;
  box-shadow: -100vmin 0 13.222393971723626vmin currentColor;
}

.background span:nth-child(21) {
  color: #f6f1ff;
  top: 44%;
  left: 100%;
  animation-duration: 304s;
  animation-delay: -280s;
  transform-origin: -6vw -18vh;
  box-shadow: -100vmin 0 12.74150573638541vmin currentColor;
}

.background span:nth-child(22) {
  color: #f6f1ff;
  top: 63%;
  left: 99%;
  animation-duration: 115s;
  animation-delay: -357s;
  transform-origin: 24vw 3vh;
  box-shadow: 100vmin 0 13.103456352958819vmin currentColor;
}

.background span:nth-child(23) {
  color: #fff8f4;
  top: 52%;
  left: 20%;
  animation-duration: 116s;
  animation-delay: -374s;
  transform-origin: 4vw -11vh;
  box-shadow: -100vmin 0 13.120899480005146vmin currentColor;
}

.background span:nth-child(24) {
  color: #effffb;
  top: 95%;
  left: 47%;
  animation-duration: 170s;
  animation-delay: -67s;
  transform-origin: 22vw -12vh;
  box-shadow: -100vmin 0 12.527780637643133vmin currentColor;
}

.background span:nth-child(25) {
  color: #f6f1ff;
  top: 38%;
  left: 55%;
  animation-duration: 123s;
  animation-delay: -254s;
  transform-origin: -9vw -16vh;
  box-shadow: 100vmin 0 13.28508353087266vmin currentColor;
}

.background span:nth-child(26) {
  color: #f6f1ff;
  top: 37%;
  left: 35%;
  animation-duration: 220s;
  animation-delay: -419s;
  transform-origin: -5vw 15vh;
  box-shadow: -100vmin 0 13.00455188827394vmin currentColor;
}

.background span:nth-child(27) {
  color: #f6f1ff;
  top: 94%;
  left: 60%;
  animation-duration: 383s;
  animation-delay: -11s;
  transform-origin: -10vw -2vh;
  box-shadow: -100vmin 0 12.511388815249472vmin currentColor;
}

.background span:nth-child(28) {
  color: #effffb;
  top: 35%;
  left: 85%;
  animation-duration: 181s;
  animation-delay: -278s;
  transform-origin: 22vw 9vh;
  box-shadow: 100vmin 0 12.894976766818305vmin currentColor;
}

.background span:nth-child(29) {
  color: #effffb;
  top: 58%;
  left: 44%;
  animation-duration: 336s;
  animation-delay: -1s;
  transform-origin: 17vw -6vh;
  box-shadow: 100vmin 0 13.411172668541546vmin currentColor;
}

.background span:nth-child(30) {
  color: #f6f1ff;
  top: 17%;
  left: 100%;
  animation-duration: 491s;
  animation-delay: -440s;
  transform-origin: 18vw 22vh;
  box-shadow: -100vmin 0 13.393055400971084vmin currentColor;
}

.background span:nth-child(31) {
  color: #fff8f4;
  top: 85%;
  left: 92%;
  animation-duration: 54s;
  animation-delay: -250s;
  transform-origin: -10vw -18vh;
  box-shadow: -100vmin 0 13.424532872651023vmin currentColor;
}

.background span:nth-child(32) {
  color: #fff8f4;
  top: 46%;
  left: 13%;
  animation-duration: 111s;
  animation-delay: -83s;
  transform-origin: 10vw 6vh;
  box-shadow: 100vmin 0 12.676006981879798vmin currentColor;
}

.background span:nth-child(33) {
  color: #f6f1ff;
  top: 98%;
  left: 48%;
  animation-duration: 95s;
  animation-delay: -455s;
  transform-origin: -16vw -14vh;
  box-shadow: -100vmin 0 12.770259277321383vmin currentColor;
}

.background span:nth-child(34) {
  color: #fff8f4;
  top: 33%;
  left: 4%;
  animation-duration: 364s;
  animation-delay: -305s;
  transform-origin: -14vw 7vh;
  box-shadow: 100vmin 0 12.570357444656233vmin currentColor;
}

.background span:nth-child(35) {
  color: #effffb;
  top: 90%;
  left: 54%;
  animation-duration: 149s;
  animation-delay: -311s;
  transform-origin: -20vw -6vh;
  box-shadow: -100vmin 0 13.304980103086907vmin currentColor;
}

.background span:nth-child(36) {
  color: #f6f1ff;
  top: 53%;
  left: 65%;
  animation-duration: 29s;
  animation-delay: -442s;
  transform-origin: -10vw 5vh;
  box-shadow: -100vmin 0 12.998770359807867vmin currentColor;
}

.background span:nth-child(37) {
  color: #fff8f4;
  top: 47%;
  left: 80%;
  animation-duration: 327s;
  animation-delay: -442s;
  transform-origin: 19vw 9vh;
  box-shadow: 100vmin 0 13.081813519992266vmin currentColor;
}

.background span:nth-child(38) {
  color: #effffb;
  top: 27%;
  left: 26%;
  animation-duration: 306s;
  animation-delay: -352s;
  transform-origin: 22vw 18vh;
  box-shadow: 100vmin 0 12.668585081353209vmin currentColor;
}

.background span:nth-child(39) {
  color: #f6f1ff;
  top: 1%;
  left: 62%;
  animation-duration: 134s;
  animation-delay: -334s;
  transform-origin: -1vw -16vh;
  box-shadow: -100vmin 0 13.26926921911698vmin currentColor;
}

.background span:nth-child(40) {
  color: #fff8f4;
  top: 22%;
  left: 33%;
  animation-duration: 299s;
  animation-delay: -144s;
  transform-origin: 2vw -15vh;
  box-shadow: 100vmin 0 13.22468074438969vmin currentColor;
}

.background span:nth-child(41) {
  color: #effffb;
  top: 6%;
  left: 67%;
  animation-duration: 338s;
  animation-delay: -397s;
  transform-origin: 0vw 19vh;
  box-shadow: 100vmin 0 13.413713711083673vmin currentColor;
}

.background span:nth-child(42) {
  color: #effffb;
  top: 89%;
  left: 12%;
  animation-duration: 53s;
  animation-delay: -448s;
  transform-origin: 1vw -16vh;
  box-shadow: 100vmin 0 13.324162241275177vmin currentColor;
}

.background span:nth-child(43) {
  color: #fff8f4;
  top: 65%;
  left: 27%;
  animation-duration: 279s;
  animation-delay: -370s;
  transform-origin: -24vw 24vh;
  box-shadow: 100vmin 0 12.686244624598956vmin currentColor;
}

.background span:nth-child(44) {
  color: #f6f1ff;
  top: 86%;
  left: 31%;
  animation-duration: 321s;
  animation-delay: -315s;
  transform-origin: 19vw 8vh;
  box-shadow: -100vmin 0 12.762783236694629vmin currentColor;
}

.background span:nth-child(45) {
  color: #effffb;
  top: 14%;
  left: 82%;
  animation-duration: 43s;
  animation-delay: -163s;
  transform-origin: 3vw 5vh;
  box-shadow: 100vmin 0 12.76039542904336vmin currentColor;
}

.background span:nth-child(46) {
  color: #f6f1ff;
  top: 66%;
  left: 75%;
  animation-duration: 403s;
  animation-delay: -24s;
  transform-origin: -22vw 24vh;
  box-shadow: 100vmin 0 12.770028658083717vmin currentColor;
}

.background span:nth-child(47) {
  color: #fff8f4;
  top: 39%;
  left: 79%;
  animation-duration: 448s;
  animation-delay: -106s;
  transform-origin: 21vw -22vh;
  box-shadow: 100vmin 0 12.835201883104096vmin currentColor;
}

.background span:nth-child(48) {
  color: #f6f1ff;
  top: 40%;
  left: 53%;
  animation-duration: 472s;
  animation-delay: -182s;
  transform-origin: -22vw 16vh;
  box-shadow: -100vmin 0 13.242498598066838vmin currentColor;
}

.background span:nth-child(49) {
  color: #f6f1ff;
  top: 29%;
  left: 100%;
  animation-duration: 49s;
  animation-delay: -103s;
  transform-origin: 19vw 3vh;
  box-shadow: 100vmin 0 13.242512115531355vmin currentColor;
}
</style>
