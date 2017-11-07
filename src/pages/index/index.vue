<template>
  <div style="margin-top: 72px;">
    <swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper">
      <!-- slides -->
      <swiper-slide><img src="./img/bg.jpg" alt="" width="100%" height="473px"></swiper-slide>
      <swiper-slide><img src="./img/bg.jpg" alt="" width="100%" height="473px"></swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
    <div class="mainContent">
      <div class="swiperBanerZh">工业级3D打印专家</div>
      <div class="swiperBanerEn">Industrial 3D Printing Expert</div>
      <div class="bigTab">
        <Row>
          <Col span="8">
            <div class="tabItem" :class="{activeTab: activeTab1}" @click="switchTab('tab1')">
              <Row>
                <Col span="8">
                <img src="./img/brain.png" alt="" style="margin-top: 10px">
                </Col>
                <Col span="16">
                  <div class="tabTitle">系统集成</div>
                  <div class="tabText">高品质一站式3D打印解决方案</div>
                </Col>
              </Row>
            </div>
            <div class="Triangle" v-if="activeTab1"></div>
          </Col>
          <Col span="8">
            <div class="tabItem" :class="{activeTab: activeTab2}" @click="switchTab('tab2')">
              <Row>
                <Col span="8">
                <img src="./img/nuclear.png" alt="" style="margin-top: 10px">
                </Col>
                <Col span="16">
                <div class="tabTitle">行业应用</div>
                <div class="tabText">高品质一站式3D打印解决方案</div>
                </Col>
              </Row>
            </div>
            <div class="Triangle" v-if="activeTab2"></div>
          </Col>
          <Col span="8">
            <div class="tabItem" :class="{activeTab: activeTab3}" @click="switchTab('tab3')">
              <Row>
                <Col span="8">
                <img src="./img/newspaper.png" alt="" style="margin-top: 10px">
                </Col>
                <Col span="16">
                <div class="tabTitle">悦瑞新闻</div>
                <div class="tabText">高品质一站式3D打印解决方案</div>
                </Col>
              </Row>
            </div>
            <div class="Triangle" v-if="activeTab3"></div>
          </Col>
        </Row>
      </div>
      <div class="tabContent">
        <!--悦瑞新闻-->
        <div style="padding: 65px 90px 0 50px;" v-if="activeTab3">
          <Row gutter="30">
            <Col span="14">
            <Row>
              <Col span="10">
              <img src="./img/device1.jpg" alt="" width="219px" height="123px">
              </Col>
              <Col span="14">
              <div class="deviceText" style="margin-top: -5px">
                惠普3D打印系统强势入驻 悦瑞三维设备集成服务水平持续领跑
              </div>
              <div class="detailBtn" style="margin-top: 39px">查看详情</div>
              </Col>
            </Row>
            <Row style="margin-top: 42px">
              <Col span="10">
              <img src="./img/news1.jpg" alt="" width="219px" height="123px">
              </Col>
              <Col span="14">
              <div class="deviceText" style="margin-top: -5px">
                未来可期：悦瑞三维1.66亿工业级3D打印项目入驻长兴国家大学科技园
              </div>
              <div class="detailBtn" style="margin-top: 39px">查看详情</div>
              </Col>
            </Row>
            </Col>
            <Col span="10">
            <ul class="introduction">
              <li>打造系统化3D打印应用服务产业链 悦瑞三维亮相中国国际光电博览会</li>
              <li>探索核电工业领域应用 悦瑞三维亮相中国国际核电工业与装备展览会</li>
              <li>打造系统化3D打印应用服务产业链 悦瑞三维亮相中国国际光电博览会</li>
              <li>探索核电工业领域应用 悦瑞三维亮相中国国际核电工业与装备展览会</li>
            </ul>
            </Col>
          </Row>
        </div>
        <!--悦瑞新闻-->

        <!--系统集成-->
        <div class="swiperBox" v-if="activeTab1">
          <swiper :options="swiperOption1" :not-next-tick="notNextTick" ref="mySwiper1">
            <swiper-slide>
              <Row>
                <Col span="8">
                <img src="./img/EOS.jpg" alt="" width="314px" height="117px" style="margin-left: 35px">
                <div class="sTitle2">EOS 设备</div>
                <div class="sContent2">选择性激光烧结技术：预先在工作台上铺一层粉末材料（金属粉末或非金属粉末），
                  激光在计算机控制下，按照界面轮廓信息，对实心部分粉末进行烧结，然后不断循环，层层堆积成型。
                </div>
                <div class="detailBtn" style="margin: 30px auto 48px auto">查看详情</div>
                </Col>
                <Col span="8">
                <img src="./img/EOS.jpg" alt="" width="314px" height="117px" style="margin-left: 35px">
                <div class="sTitle2">DMT设备</div>
                <div class="sContent2">直接能量沉积技术：由激光在沉积区域产生熔池并高速移动，
                  材料以粉末或丝状直接送入高温熔池，熔化后逐层沉积，进而成形。
                </div>
                <div class="detailBtn" style="margin: 50px auto 48px auto">查看详情</div>
                </Col>
                <Col span="8">
                <img src="./img/weiPrint.jpg" alt="" width="314px" height="117px" style="margin-left: 35px">
                <div class="sTitle2">微打印设备</div>
                <div class="sContent2">微型激光烧结技术：微型激光烧结技术是一种基于粉末床的增材制造技术，
                  通常称为选择性激光烧结或选择性激光熔化。
                </div>
                <div class="swiperBtn"></div>
                <div class="detailBtn" @click='showDetail' style="margin: 50px auto 48px auto">查看详情</div>
                </Col>
              </Row>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
          </swiper>
        </div>
        <!--系统集成-->

        <!--行业应用-->
        <div class="swiperBox" v-if="activeTab2">
          <swiper :options="swiperOption1" :not-next-tick="notNextTick" ref="mySwiper1">
            <swiper-slide>
              <Row>
                <Col span="8" style="text-align: center">
                <img src="./img/factory.png" alt="" width="59px" height="61px">
                <div class="sTitle">工业</div>
                <div class="sContent">优化产品结构与性能，降低传统制造业生产成本</div>
                <div class="detailBtn" style="margin: 39px auto 100px auto">查看详情</div>
                </Col>
                <Col span="8" style="text-align: center">
                <img src="./img/kalashnikov.png" alt="" width="59px" height="61px">
                <div class="sTitle">军工</div>
                <div class="sContent">复杂结构设计，轻量化零件，大幅节省能耗</div>
                <div class="detailBtn" style="margin: 39px auto 100px auto">查看详情</div>
                </Col>
                <Col span="8" style="text-align: center">
                <img src="./img/tomography.png" alt="" width="59px" height="61px">
                <div class="sTitle">医疗</div>
                <div class="sContent">个性化结构设计，规模定制化医疗服务</div>
                <div class="swiperBtn"></div>
                <div class="detailBtn" @click='showDetail' style="margin: 39px auto 100px auto">查看详情</div>
                </Col>
              </Row>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
          </swiper>
        </div>
        <!--行业应用-->
      </div>
      <div class="companyProfile">
        <Row>
          <Col span="7">
            <img src="./img/building.jpg" alt="" height="160px" width="285px">
          </Col>
          <Col span="17">
            <div class="intrTitle">公司介绍 | Company Profile</div>
            <div class="intrContent">
              上海悦瑞三维科技股份有限公司是一家专业提供工业级3D打印应用解决方案的高科技企业，
              是国内具有绝对领先优势的激光烧结3D打印产品制造能力的企业，
              是全球首家获得AMQ(增材制造质量体系）认证、符合德国制造标准的3D打印企业。
            </div>
            <div class="detailBtn" style="margin-top: 16px">查看详情</div>
          </Col>
        </Row>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6" >
  export default {
    data() {
      return {
        activeTab1: true,
        activeTab2: false,
        activeTab3: false,
        notNextTick: true,
        swiperOption1: {
          autoplay: 3000,
          grabCursor: true,
          width: 1150,
          height: 430,
          pagination: '.swiper-pagination'
        },
        swiperOption: {
          autoplay: 3000
        }
      };
    },
    methods: {
      switchTab(tab) {
        switch (tab) {
          case 'tab1':
            this.activeTab1 = true;
            this.activeTab2 = false;
            this.activeTab3 = false;
            break;
          case 'tab2':
            this.activeTab1 = false;
            this.activeTab2 = true;
            this.activeTab3 = false;
            break;
          case 'tab3':
            this.activeTab1 = false;
            this.activeTab2 = false;
            this.activeTab3 = true;
            break;
        }
      },
      showDetail() {
        console.log('123');
      }
    }
  };
</script>

<style scoped>
  .swiperBox {
    padding-top: 50px;
  }
  .sTitle {
    font-size: 48px;
    color: #39475A;
  }
  .sTitle2 {
    margin: 10px 35px;
    font-size: 18px;
    color: #1C222B;
  }
  .sContent {
    margin: auto;
    width: 249px;
    font-size: 18px;
    color: #3B485A;
  }
  .sContent2 {
    margin: auto;
    width: 314px;
    font-size: 14px;
    color: #3B485A;
  }
  .intrContent {
    margin-top: 8px;
    font-size: 16px;
    color: #3B485A;
    width: 756px;
  }
  .intrTitle {
    margin-top: -7px;
    font-size: 24px;
    color: #1C222B;
  }
  .companyProfile {
    padding: 50px 0;
  }
  .introduction {
    width: 405px;
    margin: -10px 0 0 40px;
    font-size: 18px;
    color: #3B485A;
    line-height: 38px;
  }
  li {
    list-style: initial !important;
    line-height: 38px;
  }
  .deviceText {
    font-size: 18px;
    color: #3B485A;
  }
  .tabContent {
    background: #FFFFFF;
    height: 439px;
    border: 1px solid #D8DDE6;
    border-top: none;
    margin-bottom: 30px;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    margin-top:-4px;
  }
  .tabTitle {
    font-size: 30px;
    margin-top: 38px;
  }
  .tabText {
    font-size: 18px;
  }
  .swiperBanerZh {
    position: absolute;
    font-size: 48px;
    z-index: 11;
    top: -390px;
    color: #FFFFFF;
    text-shadow: 0 2px 5px rgba(0,0,0,0.50);
  }
  .swiperBanerEn {
    position: absolute;
    z-index: 11;
    top: -330px;
    font-size: 36px;
    color: #FFFFFF;
    text-shadow: 0 2px 5px rgba(0,0,0,0.50);
  }
  .bigTab {
    position: absolute;
    z-index: 11;
    color: #FFFFFF;
    top: -153px;
  }
  .tabItem {
    cursor: pointer;
    opacity: 0.95;
    background: #DB352F;
    width: 383.33px;
    height: 152px;
  }
  .activeTab {
    opacity: 0.95;
    background: #F1504B;
    border-radius: 3px 0 0 0;
  }
  .Triangle {
    position: absolute;
    top: 137px;
    left: 191px;
    text-align: center;
    margin-left: -20px;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 15px solid #FFFFFF;
  }
</style>
