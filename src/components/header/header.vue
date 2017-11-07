<template>
  <div class="headerContainer">
    <div class="headerBody">
      <div class="logo">
        <img src="./img/logo.png" style="width: 156px;height: 21px">
      </div>
      <div class="menu">
        <ul id="nav">
          <li><a class="item" :class="{isActive:active.ureal3D}"
               @click.stop.prevent="selectRouter('ureal3D', 1)">悦瑞三维 </a>
            <ul>
              <li><a @click.stop.prevent="selectRouter('ureal3D', 1)">公司简介</a></li>
              <li><a @click.stop.prevent="selectRouter('ureal3D', 2)">发展轨迹</a></li>
              <li><a @click.stop.prevent="selectRouter('ureal3D', 3)">企业理念</a></li>
              <li><a @click.stop.prevent="selectRouter('ureal3D', 4)">领导关怀</a></li>
            </ul>
          </li>
          <li><a class="item" :class="{isActive:active.device}"
                 @click.stop.prevent="selectRouter('device', 1)">3D打印设备 </a>
            <ul>
              <li><a @click.stop.prevent="selectRouter('device', 1)">设备</a></li>
              <li><a @click.stop.prevent="selectRouter('device', 2)">解决方案</a></li>
              <li><a @click.stop.prevent="selectRouter('device', 3)">技术解说</a></li>
            </ul>
          </li>
          <li><a class="item" :class="{isActive:active.service}"
                 @click.stop.prevent="selectRouter('service', 1)">3D打印服务 </a>
            <ul>
              <li><a @click.stop.prevent="selectRouter('service', 1)">解决方案</a></li>
              <li><a @click.stop.prevent="selectRouter('service', 2)">服务流程与内容</a></li>
              <li><a @click.stop.prevent="selectRouter('service', 3)">应用与案例</a></li>
            </ul>
          </li>
          <li><a class="item" :class="{isActive:active.material}"
                 @click.stop.prevent="selectRouter('material', 1)">3D打印材料 </a>
            <ul>
              <li><a @click.stop.prevent="selectRouter('material', 1)">金属粉末材料</a></li>
              <li><a @click.stop.prevent="selectRouter('material', 2)">非金属粉末材料</a></li>
            </ul>
          </li>
          <li><a class="item" :class="{isActive:active.SC}"
                 @click.stop.prevent="selectRouter('SC', 1)">服务客户 </a>
            <ul>
              <li><a @click.stop.prevent="selectRouter('SC', 1)">合作伙伴</a></li>
              <li><a @click.stop.prevent="selectRouter('SC', 2)">知名客户</a></li>
            </ul>
          </li>
          <li><a class="item" :class="{isActive:active.urealNews}"
                 @click.stop.prevent="selectRouter('urealNews', 1)">悦瑞新闻 </a>
            <ul>
              <li><a @click.stop.prevent="selectRouter('urealNews', 1)">公司新闻</a></li>
              <li><a @click.stop.prevent="selectRouter('urealNews', 2)">行业新闻</a></li>
              <li><a @click.stop.prevent="selectRouter('urealNews', 2)">市场活动</a></li>
            </ul>
          </li>
          <li><a class="item" :class="{isActive:active.contactUs}"
                 @click.stop.prevent="selectRouter('contactUs', 1)">联系我们 </a>
            <ul>
              <li><a @click.stop.prevent="selectRouter('contactUs', 1)">联系我们</a></li>
              <li><a @click.stop.prevent="selectRouter('contactUs', 2)">加入我们</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
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
  #nav{
    line-height: 24px;
    background: #FFFFFF;
    font-size: 16px;
    color: #39475A;
  }
  #nav a{
    text-align:center;
    padding: 10px;
    display: block;
    color: #39475A;
    cursor: pointer;
  }
  #nav .item{
    text-align:center;
    padding: 10px;
    display: flex;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    width: 110px;
    height: 72px;
  }
  #nav .item:hover {
    background: #F1F1F1;
    box-shadow: inset 0 3px 0 0 #E84E4A;
  }
  #nav li{
    float: left;
    width: 100px;
    background: #FFFFFF;
  }
  #nav li ul{
    line-height: 27px;
    text-align:left;
    margin-top: 0px;
    left: -999em;
    width: 184px;
    position: absolute
  }
  #nav li ul li{
    float: left;
    width: 180px;
    background: #efefef;
  }
  #nav li ul a{
    display: block;
    text-align:left;
    padding-left:24px;
    overflow:hidden
  }
  #nav li ul a:hover {
    color:#FFFFFF;
    font-weight:normal;
    background: #E84E4A;
  }
  #nav li ul:hover +.item {
    background: red;
    box-shadow: inset 0 3px 0 0 #E84E4A;
  }
  #nav li:hover ul{
    left: auto
  }
  #nav li.sfhover ul{
    left: auto
  }
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
  .isActive {
    background: #F1F1F1;
    box-shadow: inset 0 3px 0 0 #E84E4A;
  }
</style>
