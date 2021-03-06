<template>
  <div id="container">
    <div class="header">
      <div class="time">3.10-3.25</div>

      <div class="stars-box">
        <span class="star"></span>
        <span class="star"></span>
        <span class="star"></span>
        <span class="star"></span>
        <span class="star"></span>
        <span class="star"></span>
        <span class="star"></span>
      </div>

      <div class="operates">
        <div class="rules">活动规则</div>
        <a id="personal" class="personal" href="../my.html">我的奖品</a>
      </div>
    </div>

    <div class="content">
      <div class="box-area">
        <h2>您今日还有 <span id="count">5</span> 次抽奖机会</h2>
        <ul class="light blink">
          <li class="fl">
            <p></p>
            <p></p>
            <p></p>
            <p></p>
          </li>
          <li class="fr">
            <p></p>
            <p></p>
            <p></p>
            <p></p>
          </li>
        </ul>
        <ul class="prizes">
          <li class="prize">
            <img src="../img/common/icon/box1.png">
            <p>iPad mini</p>
          </li>
          <li class="prize">
            <img src="../img/common/icon/box2.png">
            <p>购物券</p>
          </li>
          <li class="prize">
            <img src="../img/common/icon/box3.png">
            <p>拍立得</p>
          </li>
          <li class="prize">
            <img src="../img/common/icon/box0.png">
            <p>谢谢参与</p>
          </li>

          <!--开始按钮-->
          <li id="lottery"></li>
          <!--开始按钮-->

          <li class="prize">
            <img src="../img/common/icon/box4.png">
            <p>豪华礼包</p>
          </li>
          <li class="prize">
            <img src="../img/common/icon/box5.png">
            <p>88元现金红包</p>
          </li>
          <li class="prize">
            <img src="../img/common/icon/box0.png">
            <p>谢谢参与</p>
          </li>
          <li class="prize">
            <img src="../img/common/icon/box6.png">
            <p>100元购物卡</p>
          </li>
        </ul>
      </div>
    </div>

    <div class="awards">
      <div class="swiper-container">
        <ul class="swiper-wrapper">
          <li class="swiper-slide">
            <img src="../img/common/awards/drag1.png">
          </li>
          <li class="swiper-slide">
            <img src="../img/common/awards/drag2.png">
          </li>
          <li class="swiper-slide">
            <img src="../img/common/awards/drag3.png">
          </li>
          <li class="swiper-slide">
            <img src="../img/common/awards/drag4.png">
          </li>
          <li class="swiper-slide">
            <img src="../img/common/awards/drag5.png">
          </li>
        </ul>
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

  @keyframes twinkle {
    100% {
      opacity: 0;
    }
  }

  @keyframes shining {
    100% {
      transform: scale(.5);
    }
  }

  @keyframes coin-jump {
    100% {
      transform: translate3d(0, -12px, 0);
    }
  }

  body {
    background: #ffca00;
  }

  #container {
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 605px;
    background: url(../img/grid/nineGrid-bg.png) no-repeat center;
    background-size: 100% auto;
  }

  .header {
    .time {
      position: absolute;
      left: 25px;
      top: 38px;
      width: 60px;
      line-height: 14px;
      font-size: 13px;
      color: #fff;
      transform: rotate(-30deg) scale(0.92);
    }

    .stars-box {
      position: relative;
      width: 100%;
      height: 160px;

      .star {
        opacity: 1;
        position: absolute;
        left: 28px;
        top: -4px;
        width: 15px;
        height: 15px;
        background-color: #fff;
        border-radius: 50%;
        transform: scale(1);

        &:nth-child(2) {
          left: 160px;
          top: 35px;
          width: 5px;
          height: 5px;
        }

        &:nth-child(3) {
          left: 240px;
          top: 6px;
          width: 5px;
          height: 5px;
        }

        &:nth-child(4) {
          left: 350px;
          top: 15px;
        }

        &:nth-child(5) {
          left: -4px;
          top: 100px;
        }

        &:nth-child(6) {
          left: 357px;
          top: 127px;
        }

        &:nth-child(7) {
          left: 23px;
          top: 155px;
          width: 3px;
          height: 3px;
        }

        &:nth-child(odd) {
          animation: twinkle 1s linear infinite alternate;
        }

        &:nth-child(even) {
          animation: shining 1s 1s linear infinite alternate;
        }
      }
    }

    .operates {
      display: flex;
      padding: 10px 75px;
      justify-content: space-between;

      .rules, .personal {
        display: inline-block;
        width: 75px;
        height: 25px;
        line-height: 25px;
        background-color: rgba(254, 60, 36, 0.8);
        text-align: center;
        font-size: 12px;
        color: #fff3f0;
        border-radius: 4px;
      }
    }
  }

  .content {

    h2 {
      text-align: center;
      font-size: 15px;
      color: #fff;
      padding-top: 14px;
      margin: 0;
    }

    .box-area {
      position: relative;
      width: 345px;
      height: 301px;
      margin: 0 auto;
      background: url(../img/grid/box-bg.png) no-repeat center;
      background-size: 100% 100%;

      &:before {
        content: '';
        display: block;
        position: absolute;
        left: 8px;
        top: -10px;
        width: 56px;
        height: 37px;
        background: url(../img/grid/coin.png) no-repeat center;
        background-size: contain;
        animation: coin-jump .5s linear infinite alternate;
      }

      .light {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 260px;

        &:after {
          content: "";
          clear: both;
          display: block;
          visibility: hidden;
          height: 0;
        }

        li {
          position: relative;
          width: 22px;
          height: 100%;

          p {
            margin-bottom: 100px;
            width: 21px;
            height: 21px;
            background: url(../img/grid/dark.png) no-repeat center;
            background-size: 100% 100%;
            margin-top: 0;
          }
        }

        .fl {
          float: left;

          p:nth-child(odd) {
            background: url(../img/grid/light.png) no-repeat center;
            background-size: 100% 100%;
          }

          p:nth-child(even) {
            background: url(../img/grid/dark.png) no-repeat center;
            background-size: 100% 100%;
          }
        }

        .fr {
          float: right;

          p:nth-child(odd) {
            background: url(../img/grid/dark.png) no-repeat center;
            background-size: 100% 100%;
          }

          p:nth-child(even) {
            background: url(../img/grid/light.png) no-repeat center;
            background-size: 100% 100%;
          }
        }


        &.blink {
          .fl {
            float: left;

            p:nth-child(even) {
              background: url(../img/grid/light.png) no-repeat center;
              background-size: 100% 100%;
            }

            p:nth-child(odd) {
              background: url(../img/grid/dark.png) no-repeat center;
              background-size: 100% 100%;
            }
          }

          .fr {
            float: right;

            p:nth-child(even) {
              background: url(../img/grid/dark.png) no-repeat center;
              background-size: 100% 100%;
            }

            p:nth-child(odd) {
              background: url(../img/grid/light.png) no-repeat center;
              background-size: 100% 100%;
            }
          }
        }
      }

      .prizes {
        position: absolute;
        left: 50%;
        top: 50%;
        z-index: 1;
        margin: -102px 0 0 -150px;
        width: 300px;
        height: 220px;

        li {
          position: relative;
          float: left;
          margin: 3px 0 0 4px;
          width: 95px;
          height: 70px;
          background: url(../img/grid/normal.png) no-repeat center;
          background-size: 100% 100%;

          &.selected {
            background-image: url(../img/grid/select.png);
          }

          &:nth-child(4) {
            left: 198px;
          }

          &:nth-child(6) {
            top: 73px;
          }

          &:nth-child(7) {
            left: 99px;
          }

          &:nth-child(8) {
            left: -99px;
          }

          &:nth-child(9) {
            left: -198px;
            top: -73px;
          }

          img {
            display: block;
            width: 95px;
            height: 70px;
          }

          p {
            position: absolute;
            left: 0;
            bottom: 4px;
            text-align: center;
            width: 100%;
            font-size: 11px;
            color: #c14600;
            margin: 0;
          }
        }

        #lottery {
          background-image: url(../img/grid/start.png);
        }
      }
    }
  }

  .awards {
    display: none;
    position: absolute;
    left: 50%;
    bottom: 28px;
    margin-left: -345px;
    width: 690px;
    height: 140px;
    background-color: #fd851f;
    box-shadow: 0 20px 20px rgba(248, 85, 40, .5) inset;
    border-radius: 10px;

    .swiper-container {
      height: 100%;

      .swiper-slide {
        margin: 3px 20px;
        padding: 16px;
        width: 105px;
        height: 105px;
        background-size: 100% 100%;
        box-sizing: content-box;

        img {
          width: inherit;
          height: inherit;
        }
      }

      .swiper-container {
        overflow: hidden;
        margin: 16px auto;
        padding: 22px 0;
        width: 658px;
        height: 190px;
        background-color: #f5ae4f;
        box-shadow: 0 20px 20px rgba(248, 131, 23, .7) inset;
        border-radius: 16px;
      }
    }
  }


</style>