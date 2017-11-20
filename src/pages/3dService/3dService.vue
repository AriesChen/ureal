<template>
  <div>
    <img src="./img/bg3.jpg" alt="" width="100%">
    <div class="mainContent">
      <left-menu :MenuList="MenuList"></left-menu>
      <div class="rightContent">
        <div class="bread" v-if="tabVal != 3">
          3D打印服务 &nbsp;&nbsp;/&nbsp;&nbsp; <span class="subBread">{{subMenu}}</span>
        </div>
        <div class="bread" v-else>
          3D打印服务 &nbsp;&nbsp;/&nbsp;&nbsp;
          <span  @click="appAndCase=true;isDetail=false;" style="cursor: pointer"
                 :class="{subBread:appAndCase}">应用与案例&nbsp;&nbsp;</span>
          <span class="subBread" v-if="isDetail">/&nbsp;&nbsp;案例详情</span>
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
          <div class="processTitle">服务内容</div>
          <div class="subTitle">Service</div>
          <Row :gutter="30" style="margin-bottom: 10px">
            <Col span="12">
              <div class="contentBox">
                <div class="serverName">设计咨询</div>
                <div class="serContent">
                  <span class="idol"></span>
                  <p style="margin-bottom: 15px">我们拥有一支专业的设计与产品开发技术团队，精通Rhino/ Maya / 3D Max / Pro-E / UG /
                    SolidWorks等各类3D艺术设计、工业设计以以及机械设各类3D艺术设计、工业设计软件，
                    可以根据客户的创意或设计思路完成3D图纸的设计。同时，凭借多年的3D打印应用经验，
                    我们可以为客户提供为更好匹配3D打印技术而对原有设计进行设计优化的服务。
                  </p>
                  <p>
                    我们可以为客户提供的设计咨询服务包括：<br>
                    机械部件结构设计<br>
                    模具随形冷却水路设计<br>
                    大尺寸零部件拆分与拼接设计<br>
                    轻量化点阵结构设计<br>
                    工业产品外观设计<br>
                    创意产品参数化设计<br>
                    ......<br>
                  </p>
                </div>
                <span class="img">
                  <img src="./img/i_1.jpg" alt="" width="100%">
                </span>
              </div>
            </Col>
            <Col span="12">
              <div class="contentBox">
              <div class="serverName">数据工程</div>
              <div class="serContent">
                <span class="idol"></span>
                <p style="margin-bottom: 15px">我们拥有强大的3D数据处理工作站、
                  专业的3D数据处理软件以及经验丰富的数据处理工程师，无论您的3D数据多么庞杂，
                  我们都可以在最短的时间内进行高效的数据计算、破面修复、数据摆放，为后续的产品制造做好充分准备。
                </p>
                <p>
                  此外，如果您手上仅有产品的实物而没有3D数据，我们也可以通过专业的三维扫描设备，
                  帮助您完成产品的逆向工程以获取3D图形，并通过快速的3D数模重建与修复工作，
                  获得与产品实物最接近的3D数据。
                </p>
              </div>
                <span class="img">
                  <img src="./img/i_2.jpg" alt="" width="100%">
                </span>
            </div>
            </Col>
          </Row>
          <Row :gutter="30" style="margin-bottom: 10px">
            <Col span="12">
              <div class="contentBox" style="height: 487px">
                <div class="serverName">材料与工艺开发</div>
                <div style="height: 211px">
                  <span class="idol"></span>
                  <p style="margin-bottom: 15px">
                    目前，我们已引进十余种德国EOS 公司标准化的3D打印材料，
                    可以为客户提供多样化的塑料及金属产品3D打印服务。
                  </p>
                  <p style="margin-bottom: 15px">
                    为了增加材料多样性，不断满足客户特殊的材料与性能要求，
                    我们正积极组建一支集合了机械、激光、材料成型、软件等多学科背景的材料与工艺开发团队，
                    根据客户的具体需求，通过协作开发、专利共享的方式，全力开发适合3D打印设备使用的新材料、新工艺。
                  </p>
                  <p>
                    同时，我们诚挚的欢迎对新材料开发感兴趣的合作伙伴能够与我们建立合作，共同推进3D打印技术与材料的发展。
                  </p>
                </div>
                <span class="img">
                  <img src="./img/i_3.jpg" alt="" width="100%">
                </span>
              </div>
            </Col>
            <Col span="12">
              <div class="contentBox" style="height: 487px">
              <div class="serverName">快速制造</div>
              <div style="height: 211px">
                <span class="idol"></span>
                <p style="margin-bottom: 15px">
                  我们已建成工业级3D打印服务平台，拥有数台全球最顶级的德国EOS塑料与金属3D打印设备，
                  能够充分满足各类客户的快速制造需求。
                </p>
                <p>
                  无论您有任何疑问或需求，只要您联系我们，我们可以为您：<br>
                  即时回复业务咨询<br>
                  提供专业报价<br>
                  短时间完成制造<br>
                  按时发货<br>
                </p>
              </div>
                <span class="img">
                  <img src="./img/i_4.jpg" alt="" width="100%">
                </span>
            </div>
            </Col>
          </Row>
          <Row :gutter="30" style="margin-bottom: 60px">
            <Col span="12">
              <div class="contentBox" style="height: 474px">
                <div class="serverName">后期处理</div>
                <div style="height: 200px">
                  <span class="idol"></span>
                  <p style="margin-bottom: 15px">
                    3D打印的制造过程产出的通常仅仅是半成品而非最终产品，
                    我们还需要通过专业的后处理手段对部件进行进一步加工，
                    以获得最佳的外观呈现与产品质量，最终将最好的产品交付客户手中。
                  </p>
                  <p style="margin-bottom: 15px">
                    我们为客户提供的基础后处理服务包括：<br>
                    喷砂 打磨 支撑结构去除（仅针对金属产品） 热处理（仅针对金属产品）<br>
                    此外，我们还可以为客户提供高级的后处理服务，包括：<br>
                    染色 表面喷涂 电镀 抛光 丝印
                  </p>
                </div>
                <span class="img">
                  <img src="./img/i_5.jpg" alt="" width="100%">
                </span>
              </div>
            </Col>
          </Row>
        </div>
        <div v-if="tabVal == 3" style="margin-bottom: 100px">
          <div v-if="appAndCase">
            <div class="profileTitle">应用与案例</div>
              <Row>
                <Col span="6">
                <div class="tabName" :class="{activeTab:activeTabModalMade}" @click="switchTab('ModalMade')">
                  <i class="iconfont icon--led-lamp-infrare"></i>
                  <div>模具制造</div>
                </div>
                </Col>
                <Col span="6">
                <div class="tabName" :class="{activeTab:activeTabQuickSample}" @click="switchTab('QuickSample')">
                  <i class="iconfont icon--light-bulb-idea-"></i>
                  <div>快速样件</div>
                </div>
                </Col>
                <Col span="6">
                <div class="tabName" :class="{activeTab:activeTabSBProduction}" @click="switchTab('SBProduction')">
                  <i class="iconfont icon--honey-honeycomb-"></i>
                  <div>小批量生产</div>
                </div>
                </Col>
                <Col span="6">
                <div class="tabName" :class="{activeTab:activeTabMoldMaking}" @click="switchTab('MoldMaking')">
                  <i class="iconfont icon--web-internet-net"></i>
                  <div>模型制作</div>
                </div>
                </Col>
              </Row>
              <div class="tabLine"></div>
            <div v-if="activeTabModalMade" style="margin-top: 32px">
              <Row :gutter="23">
                <Col span="10">
                <img src="./img/app_3.jpg" alt="" width="100%">
                </Col>
                <Col span="14">
                  <div class="contentText">
                    模具作为现在制造技术的一种重要手段，在汽车、电子、家电等批量化生产制造领域发挥着极其重要的作用。
                    传统的模具制造工艺如数控加工、电火花、精密铸造等，长期以来一直被广泛使用。然而，
                    随着产品质量要求的不断提高，传统制造工艺越来越难以满足高端精密模具（尤其是注塑模具和压铸模具）质量要求
                  </div>
                  <div class="contentText">
                    由于3D打印技术在制造过程中不会受到产品内部结构及复杂形状的约束，
                    通过在模具内部进行复杂的随形冷却水路设计与加工，3D打印技术可以轻松实现高端模具的生产制造，
                    进而给最终产品的量产带来无可比拟的好处：
                  </div>
                </Col>
              </Row>
              <ul class="_ul">
                <li>有效缩短注塑或压铸过程中的冷却时间，生产效率大幅提高</li>
                <li>冷却更佳均匀，有效减少翘曲变形、开裂飞边、气泡砂眼等产品缺陷，显著提升最终产品的质量与成品率</li>
                <li>模具使用寿命大大延长，产品单位成本降低</li>
                <li>可采用工业级3D打印技术制造高端模具的行业包括：汽车零部件、电子产品、家用电器、日化品包装等</li>
              </ul>
              <div class="detailBtn" @click='showDetail' style="margin-top: 40px">查看详情</div>
            </div>
            <div v-if="activeTabQuickSample" style="margin-top: 32px">
              <Row :gutter="23">
                <Col span="10">
                <img src="./img/app_3.jpg" alt="" width="100%">
                </Col>
                <Col span="14">
                  <div class="contentText">
                    在新产品研发阶段，我们可以借助3D打印技术，在最短时间内为您制造一套或几套快速原型样件，
                    用于完成设计验证、装配测试、性能测试等重要工作，帮助您缩短研发周期，降低研发成本
                  </div>
                  <div class="contentText">
                    相对于CNC、模具制造等传统制造工艺，3D打印技术在快速原型样件的制造过程中具有以下突出的优势：
                  </div>
                </Col>
              </Row>
              <ul class="_ul">
                <li>仅需几个小时至几十个小时即可完成一套或几套原型样件的制造，产品研发周期可缩短40%以上</li>
                <li>无需机加工、翻模或开模具，可直接打印快速原型样件，大大降低产品研发成本</li>
                <li>尺寸精度可满足工业级装配要求，塑料样件尺寸精度可达±0.1mm，金属样件尺寸精度可达±20µm</li>
                <li>塑料样件选用性能优异的尼龙12工程塑料材料，具有高强度、高韧性、耐磨、耐腐蚀、耐温等出色性能</li>
                <li>快速样件可满足多种条件苛刻的测试要求，例如风洞试验（3000转/分钟），水压及流量测试（万次以上）</li>
                <li>适合用3D打印技术制造快速样件的领域包括：汽车零部件、电子产品、家用电器、仪器仪表、医疗器械、
                  电动工具、家具厨卫、运动用品、日化品包装等</li>
              </ul>
              <div class="detailBtn" @click='showDetail' style="margin-top: 40px">查看详情</div>
            </div>
            <div v-if="activeTabSBProduction" style="margin-top: 32px">
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
              <ul class="_ul">
                <li>产品质量达到工业级应用等级，塑料产品接近于注塑水平，金属产品接近于锻件水平</li>
                <li>无论是几件、几十件、几百件还是上千件，3D打印技术均可实现最柔性化的生产制造，且成本远低于传统制造工艺</li>
                <li>3D打印技术可以轻松实现自由化的产品组合制造，多款产品、不同批量、一次生产、同时交货</li>
                <li>可采用工业级3D打印技术进行小批量生产的领域包括：新产品小批量投放、设备及仪器零部件、
                  工装夹具、创意产品、个人消费品等</li>
              </ul>
              <div class="detailBtn" @click='showDetail' style="margin-top: 40px">查看详情</div>
            </div>
            <div v-if="activeTabMoldMaking" style="margin-top: 32px">
              <Row :gutter="23">
                <Col span="10">
                <img src="./img/app_3.jpg" alt="" width="100%">
                </Col>
                <Col span="14">
                <div class="contentText">
                  借助3D打印技术，我们可以在最短时间内帮助您完成各种复杂模型的制作,并以最快的速度将模型交付至您手中
                </div>
                <div class="contentText">相对于传统手工等简易制作手段,3D打印技术在模型制作过程中可以充分发挥其独特的技术优势：</div>
                </Col>
              </Row>
              <ul class="_ul">
                <li>真正实现自由化的参数设计，无论何种设计均可轻松完成最终制作,彻底摆脱“制造决定设计”的束缚</li>
                <li>无论结构多么复杂,均可完美展现所有细节,壁厚最薄可达0.5mm,最小孔径可达0.5mm,圆柱直径最小可达0.8mm</li>
                <li>整体结构可一次成型,无需组装即可实现功能集成</li>
                <li>整体结构可一次成型,无需组装即可实现功能集成</li>
                <li>模型坚固且有韧性,便于运输</li>
                <li>可通过喷漆、染色等多种后处理手段进行表面处理,以达到最逼真的展示效果</li>
              </ul>
              <p class="desTitle">我们可通过3D打印技术为您制作以下各类模型：</p>
              <ul class="_ul">
                <li>厂房设施模型、设备产品模型、艺术模型、玩具模型、建筑模型、医疗模型等</li>
              </ul>
              <div class="detailBtn" @click='showDetail' style="margin-top: 40px">查看详情</div>
            </div>
          </div>
          <div v-if="isDetail" style="margin-top: 32px">
            <Row>
                <Col span="3" class="span-3">
                <div class="tabName" :class="{activeTab:activeTabCar}" @click="switchTab('Car')">
                  <div style="padding: 13px 0 9px 0">
                    <i class="iconfont icon--sedan-car" style="font-size: 30px"></i>
                  </div>
                  <div>汽车</div>
                </div>
                </Col>
                <Col span="3" class="span-3">
                <div class="tabName" :class="{activeTab:activeTabMold}" @click="switchTab('Mold')">
                  <i class="iconfont icon--led-lamp-infrare"></i>
                  <div>模具</div>
                </div>
                </Col>
                <Col span="3" class="span-3">
                <div class="tabName" :class="{activeTab:activeTabAerospace}" @click="switchTab('Aerospace')">
                  <i class="iconfont icon-icon1"></i>
                  <div>航天航空</div>
                </div>
                </Col>
                <Col span="3" class="span-3">
                <div class="tabName" :class="{activeTab:activeTabMedical}" @click="switchTab('Medical')">
                  <i class="iconfont icon--hospital-bed-med"></i>
                  <div>医疗</div>
                </div>
                </Col>
                <Col span="3" class="span-3">
                <div class="tabName" :class="{activeTab:activeTabCustomized}" @click="switchTab('Customized')">
                  <i class="iconfont icon--author-creative-"></i>
                  <div>个性化定制</div>
                </div>
                </Col>
                <Col span="3" class="span-3">
                <div class="tabName" :class="{activeTab:activeTabCProducts}" @click="switchTab('CProducts')">
                  <i class="iconfont icon--nature-ecology-s"></i>
                  <div>创意产品</div>
                </div>
                </Col>
                <Col span="3" class="span-3">
                <div class="tabName" :class="{activeTab:activeTabOthers}" @click="switchTab('Others')">
                  <i class="iconfont icon--point-pointing-f"></i>
                  <div>其他 </div>
                </div>
                </Col>
          </Row>
            <div class="tabLine"></div>
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
        activeTabModalMade: true,
        activeTabQuickSample: false,
        activeTabSBProduction: false,
        activeTabMoldMaking: false,
        appAndCase: true,
        isDetail: false,
        activeTabCar: true,
        activeTabMold: false,
        activeTabAerospace: false,
        activeTabMedical: false,
        activeTabCustomized: false,
        activeTabCProducts: false,
        activeTabOthers: false,
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
    mounted() {
      console.log(1111);
    },
    watch: {
      tabVal(newVal) {
        console.log(newVal);
      }
    },
    methods: {
      resetTabStat() {
        this.activeTabModalMade = false;
        this.activeTabQuickSample = false;
        this.activeTabSBProduction = false;
        this.activeTabMoldMaking = false;
        this.activeTabCar = false;
        this.activeTabMold = false;
        this.activeTabAerospace = false;
        this.activeTabMedical = false;
        this.activeTabCustomized = false;
        this.activeTabCProducts = false;
        this.activeTabOthers = false;
      },
      switchTab(tab) {
        this.resetTabStat();
        let name = `activeTab${tab}`;
        this[name] = true;
      },
      showDetail() {
        this.appAndCase = false;
        this.isDetail = true;
      }
    },
    components: {
      leftMenu
    }
  };
</script>

<style scoped>
  ._ul {
    margin-left: 20px;
    margin-top: 20px;
  }
  li {
    line-height: 30px;
  }
  ._white {
    color: #FFFFFF;
  }
  .img {
    background: url(./img/i_7.jpg) no-repeat;
    padding-top: 32px;
    width: 100%;
    display: block;
    background-size: contain;
  }
  .idol {
    display: block;
    background: url(./img/i_6.jpg) no-repeat;
    width: 66px;
    height: 47px;
    float: left;
    margin: 0 10px 0 0;
  }
  .serContent {
    height: 278px;
  }
  .serverName {
    font-size: 19px;
    color: #39475A;
    margin-bottom: 20px;
  }
  .contentBox {
    padding: 15px;
    margin-top: 20px;
    width: 100%;
    height: 554px;
    background: #FFFFFF;
    border: 1px solid #D8DDE6;
    border-radius: 3px;
  }
  ul.process {
    background: url("./img/img2.jpg");
    width: 838px;
    height: 300px;
    background-repeat: round;
    position: relative;
    margin-bottom: 30px;
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
    font-size: 19px;
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
    margin-bottom: 20px;
    color: #7E93AE;
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
  .span-3 {
    width: 14.25% !important;
  }
</style>
