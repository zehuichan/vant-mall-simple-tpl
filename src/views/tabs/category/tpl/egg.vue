<template>
  <div id="container">
    <!--活动顶部-->
    <div class="header">
      <p class="rules">规则</p>
      <a id="personal" class="personal" href="../my.html">我的</a>
    </div>

    <div class="main">
      <div class="tips">今天剩余免费<span id="count">5</span>次</div>
      <div id="hammer" class="shake"></div>
      <ul class="eggs-wrap">
        <li>
          <img src="../img/egg/egg.png" class="gold-egg">
          <img src="../img/egg/base.png">
          <div class="info"></div>
        </li>
        <li>
          <img src="../img/egg/egg.png" class="gold-egg">
          <img src="../img/egg/base.png">
          <div class="info"></div>
        </li>
        <li>
          <img src="../img/egg/egg.png" class="gold-egg">
          <img src="../img/egg/base.png">
          <div class="info"></div>
        </li>
        <li>
          <img src="../img/egg/egg.png" class="gold-egg">
          <img src="../img/egg/base.png">
          <div class="info"></div>
        </li>
        <li>
          <img src="../img/egg/egg.png" class="gold-egg">
          <img src="../img/egg/base.png">
          <div class="info"></div>
        </li>
        <li>
          <img src="../img/egg/egg.png" class="gold-egg">
          <img src="../img/egg/base.png">
          <div class="info"></div>
        </li>
        <li>
          <img src="../img/egg/egg.png" class="gold-egg">
          <img src="../img/egg/base.png">
          <div class="info"></div>
        </li>
        <li>
          <img src="../img/egg/egg.png" class="gold-egg">
          <img src="../img/egg/base.png">
          <div class="info"></div>
        </li>
        <li>
          <img src="../img/egg/egg.png" class="gold-egg">
          <img src="../img/egg/base.png">
          <div class="info"></div>
        </li>
      </ul>
      <div class="awards">
        <img src="../img/egg/prize.png" class="prize">
        <div class="swiper-container">
          <ul class="swiper-wrapper">
            <li class="swiper-slide">
              <img src="../img/egg/200.png">
              <p>200元红包</p>
            </li>
            <li class="swiper-slide">
              <img src="../img/egg/100.png">
              <p>100元红包</p>
            </li>
            <li class="swiper-slide">
              <img src="../img/egg/50.png">
              <p>50元红包</p>
            </li>
            <li class="swiper-slide">
              <img src="../img/egg/20.png">
              <p>20元红包</p>
            </li>
            <li class="swiper-slide">
              <img src="../img/egg/10.png">
              <p>10元红包</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: ''
  }
</script>

<style lang="less">
  @keyframes hammer-move {
    100% {
      transform: rotate(-10deg);
    }
  }

  @keyframes hammer-hit {
    100% {
      transform: rotate(-25deg);
    }
  }

  @keyframes egg-jump {
    100% {
      top: 10px;
    }
  }

  body {
    background: #fe8227;
  }

  #container {
    width: 100%;
    height: 600px;
    background: url(../img/egg/egg-bg.png) no-repeat center;
    background-size: 100% auto;
  }

  // 活动顶部
  .header {
    .rules, .personal {
      position: relative;
      z-index: 3;
      margin-top: 26px;
      width: 41px;
      height: 28px;
      background-color: #ff9d1b;
      text-align: center;
      line-height: 28px;
      font-size: 12px;
      color: #fff;
    }

    .rules {
      background: #ff9e9d;
      float: left;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }

    .personal {
      float: right;
      background-color: #fdc434;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }
  }

  .main {
    width: 100%;
    height: 475px;
    position: absolute;
    left: 0;
    bottom: 0;

    .tips {
      width: 125px;
      margin: 22px auto 0;
      background-color: #ff6d69;
      text-align: center;
      font-size: 12px;
      line-height: 25px;
      color: #fff;
      border-radius: 10px;

      #count {
        display: inline-block;
        margin: 0 3px;
      }
    }

    #hammer {
      position: absolute;
      left: 332px;
      top: 15px;
      z-index: 5;
      width: 55px;
      height: 60px;
      background: url(../img/egg/hammer.png) no-repeat center;
      background-size: contain;
      transform-origin: right bottom;
      transition: 1s ease-in-out;

      &.shake {
        animation: hammer-move 0.5s linear infinite alternate;
      }

      &.hit {
        animation: hammer-hit 0.2s 1s alternate;
      }
    }

    .eggs-wrap {
      width: 100%;

      &:after {
        content: "";
        clear: both;
        display: block;
        visibility: hidden;
        height: 0;
      }

      li {
        position: relative;
        float: left;
        width: 80px;
        height: 85px;
        margin: 8px 22.5px;

        img {
          width: 88px;
          height: 25px;
        }

        img.gold-egg {
          width: 80px;
          height: 85px;
          position: relative;
          left: 5px;
          top: 10px;
          transform-origin: center bottom;
          transition: top .5s linear;

          &.broken {
            width: 75px;
            height: 80px;
            transform: translate3d(0, 2px, 0);
          }
        }

        .info {
          display: none;
          position: absolute;
          left: -6px;
          top: 12px;
          width: 35px;
          height: 22px;
          background: url(../img/egg/tips.png) no-repeat center;
          background-size: contain;
        }

        &.jump {
          img.gold-egg {
            animation: egg-jump .5s infinite alternate;
          }

          .info {
            display: block;
          }
        }
      }
    }

    .awards {
      position: absolute;
      left: 0;
      bottom: 0;
      padding-top: 12px;
      width: 100%;
      height: 100px;
      z-index: 1;
      background-color: #fe8227;

      .prize {
        position: absolute;
        left: 0;
        top: 0;
        width: 48px;
        height: 51px;
      }

      .swiper-container {
        margin-left: 30px;
        width: 100%;
        height: 87px;

        .swiper-slide {
          position: relative;
          margin: 0;
          width: 65px;
          height: 90px;
          background-image: none;
          padding: 8px 8px 0;
          flex-shrink: 0;

          img {
            display: block;
            width: 35px;
            height: 35px;
            padding: 8px;
            margin-bottom: 5px;
            background-color: #fff;
            border: 1px solid #c86400;
            box-sizing: content-box;
          }

          p {
            text-align: center;
            font-size: 10px;
            white-space: nowrap;
            color: #fff;
          }
        }
      }
    }
  }
</style>