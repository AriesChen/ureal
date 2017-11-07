<template>
  <div>
    <img src="./img/bg3.jpg" alt="" width="100%">
    <div class="mainContent">
      <left-menu :MenuList="MenuList"></left-menu>
      <div class="rightContent">
        <div class="bread">
          3D打印服务 &nbsp;&nbsp;/&nbsp;&nbsp; <span class="subBread">{{subMenu}}</span>
        </div>
        <div v-if="tabVal == 1">
          <div class="profileTitle">解决方案</div>
        </div>
        <div v-if="tabVal == 2">
          <div class="profileTitle">服务流程与内容</div>
          <div class="processTitle">流程示意图</div>
          <div class="subTitle">Process</div>
          <div class="proContent">
            作为专业的3D打印技术应用解决方案提供商，
            我们长期致力于工业级3D打印技术在每个行业的创新应用开发客户只需提出一个想法或创意，
            我们即可提供基于3D打印技术的从设计、数据、制造、后处理直至最终产品交付的一站式解决方案，
            帮助客户最大程度的节约时间与成本
          </div>
          <ul class="process">
            <li style="margin-left: 20px">设计咨询</li>
            <li style="margin-left: 240px">数据优化</li>
            <li style="margin-left: 460px">快速制造</li>
            <li style="margin-left: 683px">后期处理</li>
          </ul>
          <!--<img src="./img/img2.jpg" alt="" width="100%">-->
          <div class="proName">设计咨询</div>
        </div>
        <div v-if="tabVal == 3" style="margin-bottom: 100px">
          <div class="profileTitle">应用与案例</div>
          <div class="topTab">
            <div class="tabs">
              <Row>
                <Col span="4">
                  <div class="tabName" :class="{activeTab:activeTab1}" @click="switchTab(1)">模具制造</div>
                </Col>
                <Col span="4">
                  <div class="tabName" :class="{activeTab:activeTab2}" @click="switchTab(2)">快速样件</div>
                </Col>
                <Col span="4">
                  <div class="tabName" :class="{activeTab:activeTab3}" @click="switchTab(3)">小批量生产</div>
                </Col>
                <Col span="4">
                  <div class="tabName" :class="{activeTab:activeTab4}" @click="switchTab(4)">模型制作</div>
                </Col>
              </Row>
            </div>
            <div class="tabLine"></div>
          </div>
          <div v-if="activeTab1" style="margin-top: 32px">
            <Row :gutter="23">
              <Col span="10">
                <img src="./img/app_3.jpg" alt="" width="100%">
              </Col>
              <Col span="14">
                <div class="contentText">
                  随着规模化制造技术的发展，大规模制造的成本与效率优势愈发明显。然而，针对几十件、
                  几百件乃至上千件的小批量制造需求，传统的制造手段如CNC、注塑、铸造等难以克服成本高、
                  效率低的缺陷。相反，3D打印技术却可以有效的解决小批量生产的成本与效率难题
                </div>
              </Col>
            </Row>
            <p class="desTitle">借助于选择性激光烧结（SLS）工业级3D打印技术，我们可以为您轻松实现产品的小批量生产制造：</p>
            <ul style="margin-left: 20px">
              <li>产品质量达到工业级应用等级，塑料产品接近于注塑水平，金属产品接近于锻件水平</li>
              <li>无论是几件、几十件、几百件还是上千件，3D打印技术均可实现最柔性化的生产制造，且成本远低于传统制造工艺</li>
              <li>3D打印技术可以轻松实现自由化的产品组合制造，多款产品、不同批量、一次生产、同时交货</li>
              <li>可采用工业级3D打印技术进行小批量生产的领域包括：新产品小批量投放、设备及仪器零部件、
                工装夹具、创意产品、个人消费品等</li>
            </ul>
            <div class="detailBtn" @click='showDetail' style="margin-top: 40px">查看详情</div>
          </div>
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
        activeTab1: true,
        activeTab2: false,
        activeTab3: false,
        activeTab4: false,
        tabVal: parseInt(this.$route.query.page),
        subMenu: '解决方案',
        MenuList: {
          title: '3D打印服务',
          list: [{
            val: 1,
            label: '解决方案'
          }, {
            val: 2,
            label: '服务流程与内容'
          }, {
            val: 3,
            label: '应用与案例'
          }]
        }
      };
    },
    methods: {
      resetTabStat() {
        this.activeTab1 = false;
        this.activeTab2 = false;
        this.activeTab3 = false;
        this.activeTab4 = false;
      },
      switchTab(tab) {
        this.resetTabStat();
        let name = `activeTab${tab}`;
        this[name] = true;
      },
      showDetail() {}
    },
    components: {
      leftMenu
    }
  };
</script>

<style scoped>
  ul.process {
    background: url("./img/img2.jpg");
    width: 838px;
    height: 300px;
    background-repeat: round;
    position: relative;
  }
  ul.process li {
    position: absolute;
    top: 50px;
    width: 130px;
    font: 22px;
    color: #FFFFFF;
    text-align: center;
  }
  .proName {
    /*margin-top: -200px;*/
    color: #FFFFFF;
    font-size: 20px;
  }
  .proContent {
    margin: 20px 0;
    font-size: 14px;
    color: #7E93AE;
  }
  .subTitle {
    font-size: 12px;
    color: #cccccc;
  }
  .processTitle {
    color: #DB352F;
    font-size: 18px;
    font-weight: 700;
  }
  li {
    font-size: 14px;
    color: #7E93AE;
    list-style: initial !important;
    line-height: 22px;
  }
  .desTitle {
    padding: 10px 0;
    font-size: 15px;
    color: #7E93AE;
  }
  .contentText {
    font-size: 14px;
    color: #7E93AE;
  }
  .activeTab {
    background: #FFFFFF;
    border-top: 4px solid #2978F5;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    border-bottom: 1px solid #FFFFFF;
    border-left: 1px solid #D7DDE6;
    border-right: 1px solid #D7DDE6;
  }
  .tabName {
    cursor: pointer;
    text-align: center;
    padding: 7px 0;
    font-size: 16px;
    color: #7E93AE;
    margin-bottom: -1px;
  }
  .tabLine {
    width: 100%;
    border-bottom: 1px solid #D7DDE6;
  }
</style>
