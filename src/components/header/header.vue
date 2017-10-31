<template>
  <div class="headerContainer">
    <div class="headerBody">
      <div class="logo">
        <img src="./img/logo.png" style="width: 156px;height: 21px">
      </div>
      <div class="menu">
        <div class="item" :class="{activeItem:showMenu1}"
             @mouseover="toggleMenu('showMenu1')" @mouseout="toggleMenu('showMenu1')">悦瑞三维
          <div :class="{subItems:showMenu1}">
            <div v-if="showMenu1" class="subContent">
              <div class="subMenu">公司简介</div>
              <div class="subMenu">发展轨迹</div>
              <div class="subMenu">企业理念</div>
              <div class="subMenu">领导关怀</div>
            </div>
          </div>
        </div>
        <div class="item" :class="{activeItem:showMenu2}"
             @mouseover="toggleMenu('showMenu2')" @mouseout="toggleMenu('showMenu2')">3D打印设备
          <div :class="{subItems:showMenu2,marginL_92:showMenu2}" >
            <div v-if="showMenu2" class="subContent">
              <div class="subMenu">EOS设备</div>
              <div class="subMenu">DMT设备</div>
              <div class="subMenu">微打印设备</div>
              <div class="subMenu">Envision TEC设备</div>
              <div class="subMenu">HP设备</div>
            </div>
          </div>
        </div>
        <div class="item" :class="{activeItem:showMenu3}"
             @mouseover="toggleMenu('showMenu3')" @mouseout="toggleMenu('showMenu3')">3D打印服务
          <div :class="{subItems:showMenu3,marginL_92:showMenu3}" >
            <div v-if="showMenu3" class="subContent">
              <div class="subMenu">模具制造</div>
              <div class="subMenu">快速样件</div>
              <div class="subMenu">小批量生产</div>
              <div class="subMenu">模型制作</div>
              <div class="subMenu">服务流程</div>
            </div>
          </div>
        </div>
        <div class="item" :class="{activeItem:showMenu4}"
             @mouseover="toggleMenu('showMenu4')" @mouseout="toggleMenu('showMenu4')">3D打印材料
          <div :class="{subItems:showMenu4,marginL_92:showMenu4}" >
            <div v-if="showMenu4" class="subContent">
              <div class="subMenu">金属粉末材料</div>
              <div class="subMenu">非金属粉末材料</div>
            </div>
          </div>
        </div>
        <div class="item" :class="{activeItem:showMenu5}"
             @mouseover="toggleMenu('showMenu5')" @mouseout="toggleMenu('showMenu5')">应用与案例
          <div :class="{subItems:showMenu5,marginL_92:showMenu5}" >
            <div v-if="showMenu5" class="subContent">
              <div class="subMenu">汽车</div>
              <div class="subMenu">模具</div>
              <div class="subMenu">航天航空</div>
              <div class="subMenu">医疗</div>
              <div class="subMenu">个性化定制</div>
              <div class="subMenu">创意产品</div>
              <div class="subMenu">其他</div>
            </div>
          </div>
        </div>
        <div class="item" :class="{activeItem:showMenu6}"
             @mouseover="toggleMenu('showMenu6')" @mouseout="toggleMenu('showMenu6')">服务客户
          <div :class="{subItems:showMenu6}" >
              <div v-if="showMenu6" class="subContent">
              <div class="subMenu">合作伙伴</div>
              <div class="subMenu">知名客户</div>
            </div>
          </div>
        </div>
        <div class="item" :class="{activeItem:showMenu7}"
             @mouseover="toggleMenu('showMenu7')" @mouseout="toggleMenu('showMenu7')">悦瑞新闻
          <div :class="{subItems:showMenu7}" >
            <div v-if="showMenu7" class="subContent">
              <div class="subMenu">合作伙伴</div>
              <div class="subMenu">知名客户</div>
            </div>
          </div>
        </div><div class="item" :class="{activeItem:showMenu8}"
                   @mouseover="toggleMenu('showMenu8')" @mouseout="toggleMenu('showMenu8')">联系我们
        <div :class="{subItems:showMenu8}" >
          <div v-if="showMenu8" class="subContent">
            <div class="subMenu">联系我们</div>
            <div class="subMenu">加入我们</div>
          </div>
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
        showMenu1: false,
        showMenu2: false,
        showMenu3: false,
        showMenu4: false,
        showMenu5: false,
        showMenu6: false,
        showMenu7: false,
        showMenu8: false
      };
    },
    methods: {
      toggleMenu(name) {
        this[name] = !this[name];
      }
    }
  };
</script>

<style scoped>
  .headerContainer {
    position: fixed;
    z-index: 99;
    top: 0;
    background: #FFFFFF;
    height: 72px;
    color: #39475A;
    font-size: 16px;
    width: 100%;
  }
  .headerBody {
    width: 1150px;
    margin: 0 auto;
    height: 10px;
  }
  .logo {
    float: left;
    padding-top: 25px;
  }
  .menu {
    display: flex;
    float: right;
    height: 72px;
  }
  .item {
    display: flex;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 72px;
  }
  .subItems {
    position: fixed;
    margin-top: 72px;
    margin-left: -83px;
    z-index: 100;
    width: 164px;
    background: #F1F1F1;
    box-shadow: 0 3px 7px 0 rgba(0,0,0,0.05), 0 5px 5px 0 rgba(0,0,0,0.10);
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
  }
  .marginL_92 {
    margin-left: -92px !important;
  }
  .subContent {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .activeItem {
    background: #F1F1F1;
    box-shadow: inset 0 3px 0 0 #E84E4A
  }
  .subMenu {
    padding: 10px;
  }
  .subMenu:hover {
    background: #E84E4A;
    color: #fff;
  }
  .activeSub {
    background: #E84E4A;
  }
</style>
