<template>
  <div>
    <img src="./img/bg5.jpg" alt="" width="100%">
    <div class="mainContent">
      <left-menu :MenuList="MenuList"></left-menu>
      <div class="rightContent">
        <div class="bread">
          服务客户 &nbsp;&nbsp;/&nbsp;&nbsp; <span class="subBread">{{subMenu}}</span>
        </div>
        <div v-if="tabVal == 1">
          <div class="profileTitle">合作伙伴</div>
          <img src="./img/hezuohuoban.jpg" alt="" width="100%" style="margin-bottom: 60px">
        </div>
        <div v-if="tabVal == 2">
          <div class="profileTitle">知名客户</div>
            <Row>
              <Col span="6">
              <div class="tabName" :class="{activeTab:activeTabCar}" @click="switchTab('Car')">
                <div style="padding: 13px 0 9px 0">
                  <i class="iconfont icon--sedan-car" style="font-size: 30px"></i>
                </div>
                <div>汽车行业</div>
              </div>
              </Col>
              <Col span="6">
              <div class="tabName" :class="{activeTab:activeTabMold}" @click="switchTab('Mold')">
                <i class="iconfont icon--led-lamp-infrare"></i>
                <div>模具行业</div>
              </div>
              </Col>
              <Col span="6">
              <div class="tabName" :class="{activeTab:activeTabAerospace}" @click="switchTab('Aerospace')">
                <i class="iconfont  icon-icon1"></i>
                <div>航天行业</div>
              </div>
              </Col>
              <Col span="6">
              <div class="tabName" :class="{activeTab:activeTabOthers}" @click="switchTab('Others')">
                <i class="iconfont icon--point-pointing-f"></i>
                <div>其他行业</div>
              </div>
              </Col>
            </Row>
            <div class="tabLine"></div>
          <div class="contentBox"></div>
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
        activeTabCar: true,
        activeTabMold: false,
        activeTabAerospace: false,
        activeTabOthers: false,
        subMenu: '合作伙伴',
        tabVal: parseInt(this.$route.query.page),
        MenuList: {
          title: '服务客户',
          list: [{
            val: 1,
            label: '合作伙伴'
          }, {
            val: 2,
            label: '知名客户'
          }]
        }
      };
    },
    methods: {
      resetTabStat() {
        this.activeTabCar = false;
        this.activeTabMold = false;
        this.activeTabAerospace = false;
        this.activeTabOthers = false;
      },
      switchTab(tab) {
        this.resetTabStat();
        let name = `activeTab${tab}`;
        this[name] = true;
      }
    },
    components: {
      leftMenu
    }
  };
</script>

<style scoped>
  .contentBox {
    width: 100%;
    border: 1px solid #D8DDE6;
    border-radius: 3px;
    height: 242px;
    padding: 27px;
    margin-bottom: 22px;
  }
  .activeTab {
    color: #FFFFFF !important;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    border-bottom: 0;
    background-image: linear-gradient(-180deg, #FFB3AF 0%, #DB352F 100%) !important;
    border-radius: 3px 3px 0 0;
  }
  .tabName {
    cursor: pointer;
    text-align: center;
    font-size: 16px;
    width: 100%;
    height: 100px;
    color: #2F3945;;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    border-right: 3px solid #FFFFFF;
    /*margin-bottom: -2px;*/
    background: #F4F4F4;
  }
  .tabLine {
    width: 100%;
    border-bottom: 2px solid #DB352F;
  }
</style>
