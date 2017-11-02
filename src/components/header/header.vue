<template>
  <div class="headerContainer">
    <div class="headerBody">
      <div class="logo">
        <img src="./img/logo.png" style="width: 156px;height: 21px">
      </div>
      <div class="menu">
        <div class="item" :class="{activeItem:showMenu1, isActive:active.ureal3D}"
             @click.stop.prevent="selectRouter('index', '')"
             @mouseover="toggleMenu('showMenu1')" @mouseout="toggleMenu('showMenu1')">悦瑞三维
          <div :class="{subItems:showMenu1}">
            <div v-if="showMenu1" class="subContent">
              <div class="subMenu" @click.stop.prevent="selectRouter('ureal3D', 1)">公司简介</div>
              <div class="subMenu" @click.stop.prevent="selectRouter('ureal3D', 2)">发展轨迹</div>
              <div class="subMenu" @click.stop.prevent="selectRouter('ureal3D', 3)">企业理念</div>
              <div class="subMenu" @click.stop.prevent="selectRouter('ureal3D', 4)">领导关怀</div>
            </div>
          </div>
        </div>
        <div class="item" :class="{activeItem:showMenu2, isActive:active.device}"
             @click="selectRouter('device', 1)"
             @mouseover="toggleMenu('showMenu2')" @mouseout="toggleMenu('showMenu2')">3D打印设备
          <div :class="{subItems:showMenu2,marginL_92:showMenu2}" >
            <div v-if="showMenu2" class="subContent">
              <div class="subMenu" @click.stop.prevent="selectRouter('device', 1)">设备</div>
              <div class="subMenu" @click.stop.prevent="selectRouter('device', 2)">解决方案</div>
              <div class="subMenu" @click.stop.prevent="selectRouter('device', 3)">技术解说</div>
            </div>
          </div>
        </div>
        <div class="item" :class="{activeItem:showMenu3, isActive:active.service}"
             @click.stop.prevent="selectRouter('service', 1)"
             @mouseover="toggleMenu('showMenu3')" @mouseout="toggleMenu('showMenu3')">3D打印服务
          <div :class="{subItems:showMenu3,marginL_92:showMenu3}" >
            <div v-if="showMenu3" class="subContent">
              <div class="subMenu" @click.stop.prevent="selectRouter('service', 1)">解决方案</div>
              <div class="subMenu" @click.stop.prevent="selectRouter('service', 2)">服务流程与内容</div>
              <div class="subMenu" @click.stop.prevent="selectRouter('service', 3)">应用与案例</div>
            </div>
          </div>
        </div>
        <div class="item" :class="{activeItem:showMenu4, isActive:active.material}"
             @click.stop.prevent="selectRouter('material', 1)"
             @mouseover="toggleMenu('showMenu4')" @mouseout="toggleMenu('showMenu4')">3D打印材料
          <div :class="{subItems:showMenu4,marginL_92:showMenu4}" >
            <div v-if="showMenu4" class="subContent">
              <div class="subMenu" @click.stop.prevent="selectRouter('material', 1)">金属粉末材料</div>
              <div class="subMenu" @click.stop.prevent="selectRouter('material', 2)">非金属粉末材料</div>
            </div>
          </div>
        </div>
        <div class="item" :class="{activeItem:showMenu6, isActive:active.SC}"
             @click.stop.prevent="selectRouter('SC', 1)"
             @mouseover="toggleMenu('showMenu6')" @mouseout="toggleMenu('showMenu6')">服务客户
          <div :class="{subItems:showMenu6}" >
              <div v-if="showMenu6" class="subContent">
              <div class="subMenu" @click.stop.prevent="selectRouter('SC', 1)">合作伙伴</div>
              <div class="subMenu" @click.stop.prevent="selectRouter('SC', 2)">知名客户</div>
            </div>
          </div>
        </div>
        <div class="item" :class="{activeItem:showMenu7, isActive:active.urealNews}"
             @click.stop.prevent="selectRouter('urealNews', 1)"
             @mouseover="toggleMenu('showMenu7')" @mouseout="toggleMenu('showMenu7')">悦瑞新闻
          <div :class="{subItems:showMenu7}" >
            <div v-if="showMenu7" class="subContent">
              <div class="subMenu" @click.stop.prevent="selectRouter('urealNews', 1)">公司新闻</div>
              <div class="subMenu" @click.stop.prevent="selectRouter('urealNews', 2)">行业新闻</div>
              <div class="subMenu" @click.stop.prevent="selectRouter('urealNews', 3)">市场活动</div>
            </div>
          </div>
        </div>
        <div class="item" :class="{activeItem:showMenu8, isActive:active.contactUs}"
             @click.stop.prevent="selectRouter('contactUs', 1)"
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
        showMenu8: false,
        active: {
          index: false,
          device: false,
          service: false,
          material: false,
          SC: false,
          urealNews: false,
          contactUs: false
        }
      };
    },
    methods: {
      toggleMenu(name) {
        this[name] = !this[name];
      },
      resetStat() {
        for (let i in this.active) {
          this.active[i] = false;
        }
      },
      selectRouter(path, tab) {
        this.resetStat();
        this.active[path] = true;
        if (tab) {
          this.$router.push({path: `/${path}`, query: {page: tab}});
        } else if (path === 'index') {
          this.$router.push(path);
          this.active[path] = false;
        } else {
          this.$router.push({path: `/${path}`, query: {page: 1}});
        }
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
    border-bottom: 1px solid #f1f1f1;
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
    position: absolute;
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
    box-shadow: inset 0 3px 0 0 #E84E4A;
  }
  .isActive {
    background: #F1F1F1;
    box-shadow: inset 0 3px 0 0 #E84E4A;
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
