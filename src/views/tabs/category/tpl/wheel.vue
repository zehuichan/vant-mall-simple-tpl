<template>
  <div id="container">
    <div class="header">
      <p class="rules">规则</p>
      <a id="personal" class="personal" href="#">我的奖品</a>
      <div class="title"></div>
    </div>

    <div class="content">

      <div class="turntable-box">
        <div class="turntable">
          <ul class="prizes running">
            <li>
              <span></span>
              <p>超级豪华大礼</p>
            </li>
            <li>
              <span></span>
              <p>50元现金红包</p>
            </li>
            <li>
              <span></span>
              <p>20元现金红包</p>
            </li>
            <li>
              <span></span>
              <p>超级豪华大礼</p>
            </li>
            <li>
              <span></span>
              <p>100元现金红包</p>
            </li>
            <li>
              <span></span>
              <p>谢谢参与</p>
            </li>
          </ul>
        </div>
        <div id="lottery"></div>
      </div>

      <div class="tips">
        您今日还有 <span id="count">5</span> 次抽奖机会
      </div>

      <div class="scroll-info">
        <div class="list">
          <ul>
            <li>
              恭喜<span class="start-num">134</span>****<span class="end-num">0481</span>
              获得<span class="info">000</span>一份
            </li>
            <li>
              恭喜<span class="start-num">132</span>****<span class="end-num">3145</span>
              获得<span class="info">000</span>一份
            </li>
            <li>
              恭喜<span class="start-num">150</span>****<span class="end-num">0150</span>
              获得<span class="info">lalalala</span>一份
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

  @keyframes running {
    100% {
      transform: rotate(360deg);
    }
  }

  body {
    background-color: #ff7040;
  }

  #container {
    height: 667px;
    background: url(../img/wheel/wheel-bg.png) no-repeat center;
    background-size: 100% 100%;

    &:before {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 512px;
      background: url(../img/wheel/caidai.png) no-repeat center;
      background-size: 100% 100%;
    }
  }

  .header {
    padding: 18px;

    .rules, .personal {
      position: relative;
      z-index: 1;
      width: 45px;
      height: 25px;
      border: 1px solid #d89720;
      font-size: 12px;
      line-height: 25px;
      text-align: center;
      color: #d89720;
      border-radius: 2px;
    }

    .rules {
      margin: 0;
      float: left;
    }

    .personal {
      width: 60px;
      float: right;
    }

    .title {
      width: 320px;
      height: 158px;
      margin: auto;
      background: url(../img/wheel/title.png) no-repeat center;
      background-size: 100% 100%;
    }
  }

  .content {

    .turntable-box {
      position: relative;
      width: 100%;
      height: 335px;

      .turntable {
        width: 333px;
        height: 333px;
        margin: 0 auto;
        background: url(../img/wheel/circle-bg.png) no-repeat center;
        background-size: 100% 100%;

        &:before {
          content: '';
          display: block;
          position: absolute;
          left: 50%;
          top: 13px;
          width: 308px;
          height: 308px;
          margin-left: -153px;
          background: url(../img/wheel/dark.png) no-repeat center;
          background-size: 100% 100%;
        }

        &.light:before {
          background: url(../img/wheel/light.png) no-repeat center;
          background-size: 100% 100%;
        }

        .prizes {
          overflow: hidden;
          position: absolute;
          left: 50%;
          top: 50%;
          margin: -145px 0 0 -145px;
          width: 260px;
          height: 260px;
          border-radius: 50%;

          &.running {
            animation: running 90s linear infinite;
          }

          li {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 145px;
            background: no-repeat center 35%;
            font-size: 12px;
            font-weight: bold;
            line-height: 30px;
            text-align: center;
            color: #f44747;
            transform-origin: center bottom;

            &:nth-child(1) {
              background-image: url(../img/wheel/prize-gift.png);
              background-size: 35px 37px;
              transform: rotate(0deg);
            }

            &:nth-child(2) {
              background-image: url(../img/wheel/prize-50.png);
              background-size: 27px 33px;
              transform: rotate(60deg);
            }

            &:nth-child(3) {
              background-image: url(../img/wheel/prize-20.png);
              background-size: 27px 33px;
              transform: rotate(120deg);
            }

            &:nth-child(4) {
              background-image: url(../img/wheel/prize-gift.png);
              background-size: 35px 37px;
              transform: rotate(180deg);
            }

            &:nth-child(5) {
              background-image: url(../img/wheel/prize-100.png);
              background-size: 27px 33px;
              transform: rotate(240deg);
            }

            &:nth-child(6) {
              background-image: url(../img/wheel/prize-face.png);
              background-size: 38px 38px;
              transform: rotate(300deg);
            }

            span {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              margin-left: -50%;
              border-right: 1px solid #f44747;
              transform-origin: right bottom;
              transform: rotate(30deg) skewY(30deg);
            }

            p {
              overflow: hidden;
              position: relative;
              margin: 0 auto;
              width: 50%;
              height: 60%;
              padding-top: 12px;
              text-align: center;
              line-height: 25px;
            }
          }
        }
      }

      #lottery {
        position: absolute;
        left: 50%;
        top: 50%;
        width: 80px;
        height: 99px;
        margin: -50px 0 0 -40px;
        background: url(../img/wheel/lottery-btn.png) no-repeat center;
        background-size: 100% 100%;
      }
    }

    .tips {
      width: 190px;
      height: 32px;
      margin: 5px auto 12px;
      background: url(../img/wheel/tips-border.png) no-repeat center;
      background-size: 100% 100%;
      font-size: 12px;
      line-height: 30px;
      text-align: center;
      color: #fff;
    }

    .scroll-info {
      width: 225px;
      height: 88px;
      margin: auto;

      &:before {
        content: '';
        display: block;
        width: 178px;
        height: 22px;
        margin: auto;
        background: url(../img/wheel/list.png) no-repeat center;
        background-size: 100% 100%;
      }

      .list {
        width: 100%;
        height: 40px;
        margin-top: 10px;
        padding: 10px 0;
        background-color: rgba(255, 255, 255, .2);
        border-radius: 5px;

        ul {
          overflow: hidden;
          width: 100%;
          height: 100%;

          li {
            position: relative;
            top: 0;
            text-align: center;
            font-size: 12px;
            line-height: 20px;
            color: #fff;
            transition: all .5s ease-in-out;
          }
        }
      }
    }
  }
</style>