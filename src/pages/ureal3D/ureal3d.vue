<template>
  <div>
    <img src="./img/bg.jpg" alt="" width="100%">
    <div class="mainContent">
      <left-menu :MenuList="MenuList"></left-menu>
      <div class="rightContent">
        <div class="bread">悦瑞三维 &nbsp;&nbsp;/&nbsp;&nbsp; <span class="subBread">{{subMenu}}</span></div>
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
              <swiper-slide><img src="./img/intr.jpg" alt="" width="100%" height="440px"></swiper-slide>
              <swiper-slide><img src="./img/intr2.jpg" alt="" width="100%" height="440px"></swiper-slide>
              <swiper-slide><img src="./img/intr3.jpg" alt="" width="100%" height="440px"></swiper-slide>
              <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
          </div>
        </div>
        <div v-if="tabVal == 2">
        <div class="profileTitle">发展轨迹</div>
        <Row style="margin:30px 0 80px 0">
          <Col span="3">
          <div class="Circle greenC">
            <div class="whiteCircle"></div>
          </div>
          <div class="VerticalLine"></div>
          <div class="Circle yellowC">
            <div class="whiteCircle"></div>
          </div>
          <div class="VerticalLine"></div>
          <div class="Circle pinkC">
            <div class="whiteCircle"></div>
          </div>
          <div class="VerticalLine"></div>
          <div class="Circle purpleC">
            <div class="whiteCircle"></div>
          </div>
          <div class="VerticalLine"></div>
          <div class="Circle blueC">
            <div class="whiteCircle"></div>
          </div>
          </Col>
          <Col span="20">
          <div class="years" style="margin-top: 0">2005 - 2008</div>
          <div class="yearContent">提供美国Stratasys、3D Systems、Solidscape与以色列Objet公司的3D打印设备集成业务</div>
          <div class="years">2009</div>
          <div class="yearContent">成为德国EOS公司中国大陆地区重要战略合作伙伴</div>
          <div class="years">2011</div>
          <div class="yearContent">正式组建3D打印技术研发与打印服务团队并开始涉足3D打印服务领域</div>
          <div class="years" style="margin-top: 32px">2013</div>
          <div class="yearContent">建立了全国规模最大的高端3D打印服务平台，提供系统化的3D打印制造服务</div>
          <div class="years" style="margin-top: 30px">2015</div>
          <div class="yearContent">入驻漕河泾松江新兴产业园，占地4000平米的3D打印技术与服务中心投入使用</div>
          </Col>
        </Row>
      </div>
        <div v-if="tabVal == 3">
          <div class="profileTitle">企业理念</div>
          <img src="./img/corporatePhilosophy.jpg" alt="" width="100%" height="472px" style="margin: -20px 0 100px 0">
        </div>
        <div v-if="tabVal == 4">
          <div class="profileTitle">领导关怀</div>
          <img src="./img/imgcare.jpg" alt="" width="100%" style="margin: -20px 0 100px 0">
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import leftMenu from 'components/leftMenu/leftMenu';
  export default {
    data() {
      return {
        notNextTick: true,
        swiperOption: {
          autoplay: 3000,
          pagination: '.swiper-pagination'
        },
        tabVal: parseInt(this.$route.query.page),
        subMenu: '公司简介',
        MenuList: {
          title: '悦瑞三维',
          list: [{
            val: 1,
            label: '公司简介'
          }, {
            val: 2,
            label: '发展轨迹'
          }, {
            val: 3,
            label: '企业理念'
          }, {
            val: 4,
            label: '领导关怀'
          }]
        }
      };
    },
    components: {
      leftMenu
    }
  };
</script>

<style scoped>
  .subBread {
    font-size: 14px;
    color: #ADBACB;
  }
  .Circle {
    width: 53px;
    height: 53px;
    border-radius: 50%;
    padding: 11px;
  }
  .VerticalLine {
    margin-left: 21px;
    width: 10px;
    height: 50px;
    background: #E5E5E5;
  }
  .years {
    margin-top: 25px;
    font-size: 36px;
    color: #39475A;
  }
  .yearContent {
    font-size: 14px;
    color: #7E93AE;
  }
  .greenC {
    background-image: linear-gradient(-170deg, #B7F23C 0%, #67C55F 100%);
  }
  .yellowC {
    background-image: linear-gradient(-170deg, #F8BB35 0%, #F68D40 100%);
  }
  .pinkC {
    background-image: linear-gradient(-170deg, #FFA49E 0%, #F80686 100%);
  }
  .purpleC {
    background-image: linear-gradient(-170deg, #D86599 0%, #9E35A0 100%);
  }
  .blueC {
    background-image: linear-gradient(-170deg, #28E8CC 0%, #29B4D2 100%);
  }
  .whiteCircle {
    width: 31px;
    height: 31px;
    border-radius: 50%;
    background: #FFFFFF;
  }
  .swiperBox {
    margin-top: 51px;
    margin-bottom: 30px;
    padding: 37px;
    border: 1px solid #D8DDE6;
    border-radius: 3px;
  }
  .profile {
    font-size: 14px;
    color: #7E93AE;
    line-height: 22px;
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
