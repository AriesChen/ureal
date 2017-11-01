<template>
  <div>
    <img src="./bg.png" alt="" width="100%">
    <div class="mainContent">
      <div class="leftMenu">
        <div class="_active">悦瑞三维 </div>
        <div class="subMenu" @click="switchTab(1)" :class="{isSelected:tabVal==1}">公司简介
          <span class="rightIcon" :class="{activeIcon:tabVal==1}"><img src="static/img/right.png" alt=""></span>
        </div>
        <div class="subMenu" @click="switchTab(2)" :class="{isSelected:tabVal==2}">发展轨迹
          <span class="rightIcon" :class="{activeIcon:tabVal==2}"><img src="static/img/right.png" alt=""></span>
        </div>
        <div class="subMenu" @click="switchTab(3)" :class="{isSelected:tabVal==3}">企业理念
          <span class="rightIcon" :class="{activeIcon:tabVal==3}"><img src="static/img/right.png" alt=""></span>
        </div>
        <div class="subMenu" @click="switchTab(4)" :class="{isSelected:tabVal==4}">领导关怀
          <span class="rightIcon" :class="{activeIcon:tabVal==4}"><img src="static/img/right.png" alt=""></span>
        </div>
      </div>
      <div class="rightContent">
        <div class="bread">悦瑞三维 / 公司简介</div>
        <div v-if="tabVal == 1">
          <div class="profileTitle">公司简介</div>
          <div class="profile">
            上海悦瑞三维科技股份有限公司是一家专业提供工业级3D打印应用解决方案的高科技企业，
            公司团队自2005年进入3D打印行业以来，始终坚持“以满足用户需求为导向，
            以聚焦应用价值为目标”的核心理念，通过系统性整合国内外最成熟的3D打印技术资源，
            搭建“设计+研发+运营”一体化3D打印应用开发平台，为用户提供“系统集成+工艺材料+打印服务”
            系统化3D打印应用解决方案。
          </div>
          <div class="profile">
            <ul class="ulSty">
              <li>国内具有绝对领先优势的激光烧结3D打印产品制造能力的企业</li>
              <li>拥有国内领先的前瞻性应用技术储备的企业</li>
              <li>全球首家获得AMQ(增材制造质量体系）认证、符合德国制造标准的3D打印企业</li>
            </ul>
          </div>
          <div class="swiperBox">
            <swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper">
              <swiper-slide><img src="./intr.jpg" alt="" width="100%" height="440px"></swiper-slide>
              <swiper-slide><img src="./intr2.jpg" alt="" width="100%" height="440px"></swiper-slide>
              <swiper-slide><img src="./intr3.jpg" alt="" width="100%" height="440px"></swiper-slide>
              <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        notNextTick: true,
        tabVal: 1,
        swiperOption: {
          autoplay: 3000,
          pagination: '.swiper-pagination'
        },
        tabCode: parseInt(this.$route.query.page)
      };
    },
    mounted() {
      this.swiper.slideTo(3, 1000, false);
    },
    methods: {
      switchTab(tab) {
        this.tabVal = tab;
      }
    }
  };
</script>

<style scoped>
  .swiperBox {
    margin-top: 51px;
    margin-bottom: 30px;
    padding: 37px;
    border: 1px solid #D8DDE6;
    border-radius: 3px;
  }
  .rightContent {
    margin-top: 20px;
    margin-left: 312px;
  }
  .profileTitle {
    font-size: 36px;
    color: #39475A;
    margin: 10px 0;
  }
  .profile {
    font-size: 14px;
    color: #7E93AE;
    line-height: 22px;
  }
  .bread {
    font-size: 14px;
    color: #566C89;
  }
  .leftMenu {
    position: absolute;
    border-radius: 3px;
    z-index: 12;
    width: 272px;
    background: #FFFFFF;
    margin-top: -75px;
    box-shadow: 0 3px 7px 0 rgba(0,0,0,0.05), 0 1px 1px 0 rgba(0,0,0,0.10);
  }
  .subMenu {
    padding: 10px 15px;
    font-size: 20px;
  }
  .rightIcon {
    display: none;
    margin-left: 140px;
  }
  .activeIcon {
    display: initial;
    margin-left: 140px;
  }
  .subMenu:hover {
    background: #F1F1F1;
    cursor: pointer;
  }
  .subMenu:hover  span.rightIcon {
    display: initial;
  }
  .isSelected {
    background: #F1F1F1;
    cursor: pointer;
  }
  ._active {
    padding: 10px 15px;
    font-size: 20px;
    color: #FFFFFF;
    background: #DB352F;
  }
  .mainContent {
    position: relative;
    width: 1150px;
    margin: auto;
  }
  li {
    list-style: initial !important;
    line-height: 22px;
  }
  .ulSty {
    margin-top: 20px;
    margin-left: 30px;
  }
</style>
