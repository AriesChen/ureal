<template>
  <div>
    <img src="./img/bg2.jpg" alt="" width="100%">
    <div class="mainContent">
      <left-menu :MenuList="MenuList"></left-menu>
      <div class="rightContent">
        <div class="bread" v-if="tabVal != 1">
          3D打印设备 &nbsp;&nbsp;/&nbsp;&nbsp; <span class="subBread">{{subMenu}}</span>
        </div>
        <div class="bread" v-else>
          3D打印设备 &nbsp;&nbsp;/&nbsp;&nbsp;
          <span  @click="deviceList=true;deviceTypes=false;deviceDetail=false;" style="cursor: pointer"
                 :class="{subBread:deviceList}">设备列表&nbsp;&nbsp;</span>
          <span class="subBread" v-if="deviceTypes" :class="{subBread:deviceTypes}"
            @click="deviceTypes=true;deviceDetail=false">/&nbsp;&nbsp;设备机型</span>
          <span class="subBread" v-if="deviceDetail">/&nbsp;&nbsp;设备详情</span>
        </div>
        <div v-if="tabVal == 1">
          <div v-if="deviceList">
            <div class="profileTitle">设备列表</div>
            <Row :gutter="30">
              <Col span="12">
                <div class="deviceBox2">
                  <img src="./img/device.jpg" alt="" width="100%">
                  <div class="deviceName">德国EOS——选择性激光烧结技术</div>
                  <span class="rightIcon">
                    <img src="static/img/right.png" alt="">
                  </span>
                </div>
              </Col>
              <Col span="12">
                <div class="deviceBox2">
                  <img src="./img/DMT.jpg" alt="" width="100%">
                  <div class="deviceName">DMT——直接能量沉积技术</div>
                    <span class="rightIcon">
                      <img src="static/img/right.png" alt="">
                    </span>
                </div>
              </Col>
            </Row>
            <Row :gutter="30">
              <Col span="12">
                <div class="deviceBox2">
                  <img src="./img/microPrint.jpg" alt="" width="100%">
                  <div class="deviceName">3D MicroPrint——微型激光烧结技术</div>
                  <span class="rightIcon">
                    <img src="static/img/right.png" alt="">
                  </span>
                </div>
              </Col>
              <Col span="12">
                <div class="deviceBox2">
                <img src="./img/norMetalPowder.jpg" alt="" width="100%">
                <div class="deviceName">非金属粉末材料</div>
                  <span class="rightIcon">
                    <img src="static/img/right.png" alt="">
                  </span>
              </div>
              </Col>
            </Row>
            <Row :gutter="30">
              <Col span="12">
                <div class="deviceBox2">
                  <img src="./img/hp.jpg" alt="" width="100%">
                  <div class="deviceName">惠普——多射流熔融技术</div>
                  <span class="rightIcon">
                    <img src="static/img/right.png" alt="">
                  </span>
                </div>
              </Col>
              <Col span="12">
                <div class="deviceBox2">
                  <img src="./img/metalPowder.jpg" alt="" width="100%">
                  <div class="deviceName">金属粉末材料</div>
                    <span class="rightIcon">
                      <img src="static/img/right.png" alt="">
                    </span>
                </div>
              </Col>
            </Row>
            <Row :gutter="30">
              <Col span="12">
                <div class="deviceBox2">
                <img src="./img/EnvisionTEC.jpg" alt="" width="100%">
                <div class="deviceName" @click="deviceList=false;deviceTypes=true">德国EnvisionTEC—3SP/Viridis 3D砂型打印</div>
                  <span class="rightIcon">
                    <img src="static/img/right.png" alt="">
                  </span>
              </div>
              </Col>
            </Row>
          </div>
          <div v-if="deviceTypes">
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
          <div v-if="deviceDetail">
            <device-detail></device-detail>
          </div>
        </div>
        <div v-if="tabVal == 2">
          <div class="profileTitle">解决方案</div>
          <div class="solutionDes">
            悦瑞三维致力于通过技术整合的方式为客户提供一站式的3D打印系统整合解决方案
          </div>
          <Row style="margin: 30px 0">
            <Col span="4">
              <img src="./img/bg.png" alt="" width="120">
              <div class="insideContent" style="margin-left: 10px">
                <img src="./img/i_1.png" alt="">
                <div>技术咨询</div>
              </div>
            </Col>
            <Col span="4">
            <img src="./img/bg.png" alt="" width="120">
            <div class="insideContent"  style="margin-left: 7px">
              <img src="./img/i_2.png" alt="">
              <div>建设规划</div>
            </div>
            </Col>
            <Col span="4">
            <img src="./img/bg.png" alt="" width="120">
            <div class="insideContent">
              <img src="./img/i_3.png" alt="">
              <div>技术培训</div>
            </div>
            </Col>
            <Col span="4">
            <img src="./img/bg.png" alt="" width="120">
            <div class="insideContent">
              <img src="./img/i_4.png" alt="">
              <div style="margin-top: 5px">设备硬件</div>
            </div>
            </Col>
            <Col span="4">
            <img src="./img/bg.png" alt="" width="120">
            <div class="insideContent">
              <img src="./img/i_5.png" alt="">
              <div style="margin-top: 12px">安装维护</div>
            </div>
            </Col>
            <Col span="4">
            <img src="./img/bg.png" alt="" width="120">
            <div class="insideContent">
              <img src="./img/i_6.png" alt="">
              <div>现场指导</div>
            </div>
            </Col>

          </Row>
          <img src="./img/img.jpg" alt="" width="100%" style="margin: 40px 0">
          <Row class="bottomRow">
            <Col span="12">
              <Row>
                <Col span="5">
                  <div class="redC">经验</div>
                </Col>
                <Col span="16">
                  <div class="ContentC">
                    10年以上快速成型行业经验，10年以上团队合作经验，10余年国外先进设备销售与技术服务经验
                  </div>
                  </Col>
              </Row>
            </Col>
            <Col span="12">
            <Row>
              <Col span="5">
              <div class="redC">资源</div>
              </Col>
              <Col span="16">
              <div class="ContentC">
                设备、软件、设计、后处理等产业链资源国外最新的技术、材料以及应用等信息资源
              </div>
              </Col>
            </Row>
            </Col>
          </Row>
          <Row class="bottomRow">
            <Col span="12">
            <Row>
              <Col span="5">
              <div class="redC">成本</div>
              </Col>
              <Col span="16">
              <div class="ContentC">
                与设备商关系密切，设备及材料采购成本低精通制造工艺及配方，加工制造成本低
              </div>
              </Col>
            </Row>
            </Col>
            <Col span="12">
            <Row>
              <Col span="5">
              <div class="redC">技术</div>
              </Col>
              <Col span="16">
              <div class="ContentC">
                工业级快速成型设备，制造技术全球领先出色的设计优化、设备操作以及质量控制能力
              </div>
              </Col>
            </Row>
            </Col>
          </Row>
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
        deviceList: true,
        deviceTypes: false,
        deviceDetail: false,
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
        this.deviceTypes = false;
        this.deviceDetail = true;
      }
    },
    components: {
      deviceDetail,
      leftMenu
    }
  };
</script>

<style scoped>
  .rightIcon {
    float: right;
    margin-right: 20px;
    margin-top: -40px;
  }
  .deviceName {
    cursor: pointer;
    padding: 20px;
    font-size: 18px;
    color: #39475A;
  }
  .deviceBox2 {
    width: 100%;
    background: #FFFFFF;
    border: 1px solid #D8DDE6;
    border-radius: 3px;
    margin-bottom: 26px;
  }
  .bottomRow {
    margin: 20px 60px 40px 60px;
    border-bottom: 1px dashed #cccccc;
    padding-bottom: 20px;
  }
  .ContentC {
    font-size: 15px;
    color: #7E93AE;
  }
  .redC {
    background: #DB352F;
    color: #FFFFFF;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    text-align: center;
    font-size: 20px;
    padding-top:15px;
  }
  .insideContent {
    margin: -90px 0 0 -20px;
    text-align: center;
    font-size: 15px;
  }
  .solutionDes {
    font-size: 18px;
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
