<template>
  <div>
    <img src="./img/bg2.jpg" alt="" width="100%">
    <div class="mainContent">
      <left-menu :MenuList="MenuList"></left-menu>
      <div class="rightContent">
        <div class="bread">
          3D打印设备 &nbsp;&nbsp;/&nbsp;&nbsp; <span class="subBread">{{subMenu}}</span>
        </div>
        <div v-if="tabVal == 1">
          <div class="profileTitle">设备机型</div>
          <Row :gutter="26">
            <Col span="12">
              <div class="deviceBox">
                <img src="./img/device1.jpg" alt="" width="100%">
                <div class="deviceContent">
                  <div class="deviceName">EOSINT M290</div>
                  <div class="deviceDes">
                    M290系统是M280系统的升级版本集成了EOS在激光粉末烧结领域多年的经验及该领域的最新技术
                  </div>
                  <div class="detailBtn" @click='showDetail' style="margin-top: 40px">查看详情</div>
                </div>
              </div>
            </Col>
            <Col span="12">
            <div class="deviceBox">
              <img src="./img/device1.jpg" alt="" width="100%">
              <div class="deviceContent">
                <div class="deviceName">EOSINT M290</div>
                <div class="deviceDes">
                  M290系统是M280系统的升级版本集成了EOS在激光粉末烧结领域多年的经验及该领域的最新技术
                </div>
                <div class="detailBtn" @click='showDetail' style="margin-top: 40px">查看详情</div>
              </div>
            </div>
            </Col>
          </Row>
          <Row :gutter="26">
            <Col span="12">
            <div class="deviceBox">
              <img src="./img/device1.jpg" alt="" width="100%">
              <div class="deviceContent">
                <div class="deviceName">EOSINT M290</div>
                <div class="deviceDes">
                  M290系统是M280系统的升级版本集成了EOS在激光粉末烧结领域多年的经验及该领域的最新技术
                </div>
                <div class="detailBtn" @click='showDetail' style="margin-top: 40px">查看详情</div>
              </div>
            </div>
            </Col>
            <Col span="12">
            <div class="deviceBox">
              <img src="./img/device1.jpg" alt="" width="100%">
              <div class="deviceContent">
                <div class="deviceName">EOSINT M290</div>
                <div class="deviceDes">
                  M290系统是M280系统的升级版本集成了EOS在激光粉末烧结领域多年的经验及该领域的最新技术
                </div>
                <div class="detailBtn" @click='showDetail' style="margin-top: 40px">查看详情</div>
              </div>
            </div>
            </Col>
          </Row>
          <Row :gutter="26">
            <Col span="12">
            <div class="deviceBox">
              <img src="./img/device1.jpg" alt="" width="100%">
              <div class="deviceContent">
                <div class="deviceName">EOSINT M290</div>
                <div class="deviceDes">
                  M290系统是M280系统的升级版本集成了EOS在激光粉末烧结领域多年的经验及该领域的最新技术
                </div>
                <div class="detailBtn" @click='showDetail' style="margin-top: 40px">查看详情</div>
              </div>
            </div>
            </Col>
            <Col span="12">
            <div class="deviceBox">
              <img src="./img/device1.jpg" alt="" width="100%">
              <div class="deviceContent">
                <div class="deviceName">EOSINT M290</div>
                <div class="deviceDes">
                  M290系统是M280系统的升级版本集成了EOS在激光粉末烧结领域多年的经验及该领域的最新技术
                </div>
                <div class="detailBtn" @click='showDetail' style="margin-top: 40px">查看详情</div>
              </div>
            </div>
            </Col>
          </Row>
        </div>
        <div v-if="tabVal == 2">
          <div class="profileTitle">解决方案</div>
          <div class="solutionDes">
            悦瑞三维致力于通过技术整合的方式为客户提供一站式的3D打印系统整合解决方案
          </div>
          <img src="./img/liuchen.jpg" alt="" width="100%" style="margin-top: 20px">
          <img src="./img/solution.jpg" alt="" width="100%" style="margin: 40px 0 20px 0">
          <img src="./img/liuchen2.jpg" alt="" width="100%" style="margin-bottom: 40px">
        </div>
        <div v-if="tabVal == 'details'">
          <device-detail></device-detail>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import deviceDetail from 'pages/3dDevice/deviceDetail';
  import leftMenu from 'components/leftMenu/leftMenu';
  export default {
    data() {
      return {
        tabVal: parseInt(this.$route.query.page),
        subMenu: '设备列表',
        MenuList: {
          title: '3D打印设备',
          list: [{
            val: 1,
            label: '设备'
          }, {
            val: 2,
            label: '解决方案'
          }, {
            val: 3,
            label: '技术解说'
          }]
        }
      };
    },
    methods: {
      showDetail() {
        this.tabVal = 'details';
      }
    },
    components: {
      deviceDetail,
      leftMenu
    }
  };
</script>

<style scoped>
  .solutionDes {
    font-size: 20px;
    color: #7E93AE;
  }
  .deviceContent {
    padding: 20px;
  }
  .deviceName {
    font-size: 18px;
    color: #39475A;
  }
  .deviceDes {
    margin-top: 15px;
    font-size: 14px;
    color: #7E93AE;
  }
  .deviceBox {
    width: 100%;
    height: 452px;
    background: #FFFFFF;
    border: 1px solid #D8DDE6;
    border-radius: 3px;
    margin-bottom: 26px;
  }
</style>
