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
          <span  @click="showAppAndCase" style="cursor: pointer"
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
                <img src="./img/gongye.jpg" alt="" width="100%">
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
                  <img src="./img/app_2.jpg" alt="" width="100%">
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
              <p class="desTitle">
                借助于选择性激光烧结（SLS）工业级3D打印技术，我们可以为您轻松实现产品的小批量生产制造：</p>
              <ul class="_ul" style="margin-top: 0">
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
                  <img src="./img/app_4.jpg" alt="" width="100%">
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
              <ul class="_ul" style="margin-top: 0">
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
            <div class="Box" v-if="activeTabCar">
              <Row :gutter="27">
                <Col span="7">
                  <img src="./img/car1.jpg" alt="" width="100%" height="178px">
                </Col>
                <Col span="17">
                  <div class="Mtitle">汽车进气歧管</div>
                  <div class="MsubTitle">客户要求</div>
                  <div class="Mcontent">制作1套全尺寸汽车发动机进气歧管，用于装配及性能测试;2天内交货 </div>
                  <div class="MsubTitle">解决方案</div>
                  <div class="Mcontent">
                    1.  精度达+/-0.1mm，0.02层厚完全满足尺寸设计验证要求<br>
                    2.  使用PA3200尼龙混玻纤材料，具有高强度、高韧性，耐高温特性，完全满足功能设计验证要求<br>
                    3.  所有部件一次制作完成打印，无拼接，并同时保证了零件强度，完全超越传统工艺方法<br>
                    4.  加工周期短，12小时即完成样件加工，大大缩短研发周期，同时大幅降低产品成本
                  </div>
                </Col>
              </Row>
            </div>
            <div v-if="activeTabMold">
              <div class="Box">
              <Row :gutter="27">
                <Col span="7">
                <img src="./img/modal1.jpg" alt="" width="100%" height="178px">
                </Col>
                <Col span="17">
                <div class="Mtitle">生产汽车鼓风机叶轮的模具部件</div>
                <div class="MsubTitle">客户要求</div>
                <div class="Mcontent"> 制作用于生产汽车鼓风机叶轮<br>
                  缩短注塑冷却时间，提高生产效率，恒温均匀，减少产品的变形率</div>
                <div class="MsubTitle">解决方案</div>
                <div class="Mcontent">
                  1.  贴合壁面的随形水路设计，具有传统水路无法比拟的冷却效果，提高生产效率<br>
                  2.  分布均衡的随形水路设计，提供出众的冷却一致性，保证产品均匀收缩，提高产品质量<br>
                  3.  一体化的打印加工方式，巧妙回避了传统水路需要考虑零件拆分，密封等问题，提高了模具寿命和可靠性，降低生产成本<br>
                  4.  少量的加工余量，减少了材料消耗和机加工时间，缩短模具制造周期
                </div>
                </Col>
              </Row>
            </div>
              <div class="Box">
                <Row :gutter="27">
                  <Col span="7">
                  <img src="./img/modal2.jpg" alt="" width="100%" height="178px">
                  </Col>
                  <Col span="17">
                  <div class="Mtitle">压铸模具</div>
                  <div class="MsubTitle">客户要求</div>
                  <div class="Mcontent"> 适用于铝合金铸造零件的小批量生产</div>
                  <div class="MsubTitle">解决方案</div>
                  <div class="Mcontent">
                    1.  使用模具钢MS1.2709材料，适用于铸造模具，有广泛适用性<br>
                    2.  该铸造模具制造出1500件以上产品，并可继续生产
                  </div>
                  </Col>
                </Row>
              </div>
              <div class="Box">
                <Row :gutter="27">
                  <Col span="7">
                  <img src="./img/modal3.jpg" alt="" width="100%" height="178px">
                  </Col>
                  <Col span="17">
                  <div class="Mtitle">高品质的棋盘游戏的批产模具
                  </div>
                  <div class="MsubTitle">客户要求</div>
                  <div class="Mcontent"> 完成难以加工的复杂细节<br>用模具生产一百万件以上</div>
                  <div class="MsubTitle">解决方案</div>
                  <div class="Mcontent">
                    1.  使用金属3D打印烧结设备，精度完全满足大尺寸整体打印研制要求<br>
                    2.  最简化的数据准备和后处理工序<br>
                    3.  快速、低成本模具制作<br>
                    4.  高质量的体现产品质量
                  </div>
                  </Col>
                </Row>
              </div>
              <div class="Box">
                <Row :gutter="27">
                  <Col span="7">
                  <img src="./img/modal4.jpg" alt="" width="100%" height="178px">
                  </Col>
                  <Col span="17">
                  <div class="Mtitle">大众Golf仪表盘模具</div>
                  <div class="MsubTitle">客户要求</div>
                  <div class="Mcontent"> 大众Golf仪表台面板实验模<br>模具产品生产产量达2X2000次以上</div>
                  <div class="MsubTitle">解决方案</div>
                  <div class="Mcontent">
                    1.  使用模具钢1.2709材料制造，样件材料和质量达到批产产品要求，从而实现全功能试验验证<br>
                    2.  90个小时完成模具加工，同时缩短产品生产周期，提高生成效率
                  </div>
                  </Col>
                </Row>
              </div>
              <div class="Box">
                <Row :gutter="27">
                  <Col span="7">
                  <img src="./img/modal5.jpg" alt="" width="100%" height="178px">
                  </Col>
                  <Col span="17">
                  <div class="Mtitle">LED灯模具生产</div>
                  <div class="MsubTitle">客户要求</div>
                  <div class="Mcontent">制造适合LED等材料的模具</div>
                  <div class="MsubTitle">解决方案</div>
                  <div class="Mcontent">
                    1. 选用模具钢1.2709材料，具备良好的可抛光技术，适应于LED等光学产品模具<br>
                    2. 模具打印时长5小时40分钟，从烧结到模具制造完成用了6天时间，成本优势明显<br>
                    3. 模具单次生成了1200件批产产品，同时计划继续生产更多批次<br>
                    4. 注塑生成后的发光壳体和发光带成功粘接在一起，并能将红外光发光管夹住，达到完美结合效果
                  </div>
                  </Col>
                </Row>
              </div>
              <div class="Box">
                <Row :gutter="27">
                  <Col span="7">
                  <img src="./img/modal6.jpg" alt="" width="100%" height="178px">
                  </Col>
                  <Col span="17">
                  <div class="Mtitle">注塑模具优化</div>
                  <div class="MsubTitle">客户要求</div>
                  <div class="Mcontent">注塑模具优化<br>不能采用传统加工工艺的带内部冷却流道的长销<br>
                    高硬度、高寿命和高热传导性</div>
                  <div class="MsubTitle">解决方案</div>
                  <div class="Mcontent">
                    1. 使用3D打印随形水路设计技术，针对性解决了模具行业中深腔狭小区域的冷却问题，较之传统工艺更加高效<br>
                    2. 超百个零件同时打印，相比传统加工方式具备成本和制造周期优势<br>
                    3. 传统加工工艺会采用昂贵的铍铜保障冷却效果，而我们所采用的模具钢1.2709具备更高硬度，更好的耐磨力，模具寿命也就得到提高<br>
                    4. 同时缩短成型周期，提高生成效率<br>
                    5. 注塑件变形率减小，质量得到提升
                  </div>
                  </Col>
                </Row>
              </div>
              <div class="Box">
                <Row :gutter="27">
                  <Col span="7">
                    <img src="./img/modal7.jpg" alt="" width="100%" height="178px">
                  </Col>
                  <Col span="17">
                    <div class="Mtitle">注塑模具模芯-汽车腔道模具</div>
                    <div class="MsubTitle">客户要求</div>
                    <div class="Mcontent">
                      降低汽车塑料制品的生产成本<br>
                      优化冷却流道和喷嘴工艺<br>
                      缩短注塑冷却时间<br>
                      提高产品质量
                    </div>
                    <div class="MsubTitle">解决方案</div>
                    <div class="Mcontent">
                      1. 贴合浇口壁面的随形水路设计，为浇口位置提供优异冷却速度，
                      冷却时间从24秒降到了7.5秒，冷却时间减少了68%，提高生产效率<br>
                      2. 少量的加工余量，减少了材料消耗和加工时间<br>
                      3. 平均注塑温度从95度下降到68度<br>
                      4. 温度梯度从12度下降到4度<br>
                      5. 模具拖花率从60%下降为0<br>
                      6. 生产率提高到每分钟3个
                    </div>
                  </Col>
                </Row>
              </div>
              <div class="Box">
                <Row :gutter="27">
                  <Col span="8">
                    <img src="./img/modal8.jpg" alt="" width="100%" height="178px">
                  </Col>
                  <Col span="17">
                    <div class="Mtitle">注塑模具模芯-生产塑料水杯</div>
                    <div class="MsubTitle">客户要求</div>
                    <div class="Mcontent">
                      制作用于生产塑料水杯的注塑模具模芯<br>
                      缩短注塑冷却时间，提高产品表面质量
                    </div>
                    <div class="MsubTitle">解决方案</div>
                    <div class="Mcontent">
                      1.  使用的模具钢MS1.2709具备良好的抛光性，确保产品表面光洁。
                      同时模具钢MS1.2709不含有害物质，可用于日用消费品和食品行业模具<br>
                      2.  模具打印部件直接嫁接在机加工底座上，结合传统工艺的优势，降低成本，缩短制造周期<br>
                      3.  注塑冷却时间从24秒缩短为13.8秒，生产效率提高70%，成本节约2.4万欧元/年<br>
                      4.  产品表面质量出色，次品率大幅降低<br>
                      5.  35小时完成该模具加工
                    </div>
                  </Col>
                </Row>
              </div>
              <div class="Box">
                <Row :gutter="27">
                  <Col span="8">
                    <img src="./img/modal9.jpg" alt="" width="100%" height="178px">
                  </Col>
                  <Col span="17">
                    <div class="Mtitle">生产波轮洗衣机模具</div>
                    <div class="MsubTitle">客户要求</div>
                    <div class="Mcontent">
                      生产波轮洗衣机的产品模具零件<br>
                      降低冷却时间，改进原先生产产品受热不均匀、易变形的缺陷
                    </div>
                    <div class="MsubTitle">解决方案</div>
                    <div class="Mcontent">
                      1. 贴合壁面的随形水路设计，提供最佳的冷却效果<br>
                      2. 分布均衡的随形水路设计，提供出众的冷却一致性，保证产品均匀收缩，提高产品质量<br>
                      3. 一体化的打印加工方式，巧妙回避了传统水路需要考虑零件拆分，密封等问题，提高了模具寿命和可靠性，降低成本<br>
                      4. 少量的加工余量，减少了材料消耗和机加工时间，缩短模具制造周期
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
            <div v-if="activeTabAerospace">
              <div class="Box">
                <Row :gutter="27">
                  <Col span="7">
                  <img src="./img/air1.jpg" alt="" width="100%" height="178px">
                  </Col>
                  <Col span="17">
                  <div class="Mtitle">加工航空航天超级合金零件</div>
                  <div class="MsubTitle">客户要求</div>
                  <div class="Mcontent">航空发动机的复杂零件，具有高强度、高耐腐蚀、耐高温特性</div>
                  <div class="MsubTitle">解决方案</div>
                  <div class="Mcontent">
                    1. 传统工艺上航空叶片制造加工是个难题，只有具备丰富的五轴加工经验才能完成，但金属3D打印技术才能巧妙地解决了这个问题<br>
                    2. 同时在保证功能的前提下，轻量化航空航天业对零件的首要要求，金属3D打印技术轻松实现零件轻量化设计<br>
                    3. 应对小批量的需求，金属3D打印技术具备成本低和制造周期短的优势<br>
                    4. 最小0.02mm打印层厚，保证叶片表面粗糙度在标准范围内。<br>
                    5. 一体打印的超级合金零件可以承受与批产零件一样的高温、高冲击力的台架试验<br>
                    6. 在极短时间内完成复杂外形的完整功能零件加工
                  </div>
                  </Col>
                </Row>
              </div>
              <div class="Box">
                <Row :gutter="27">
                  <Col span="7">
                  <img src="./img/air2.jpg" alt="" width="100%" height="178px">
                  </Col>
                  <Col span="17">
                    <div class="Mtitle">用于制造航空发动机的全功能样件</div>
                    <div class="MsubTitle">客户要求</div>
                    <div class="Mcontent">
                      研发直升机的汽轮机部件的功能样件<br>
                      能承受高强度、高温的测试台架环境
                    </div>
                    <div class="MsubTitle">解决方案</div>
                    <div class="Mcontent">
                      1. 使用金属3D打印技术并利用丰富的五轴加工经验，巧妙解决了航空叶片制造加工个难题<br>
                      2. 在保证功能的前提下，轻量化航空航天对零件的首要要求<br>
                      3. 针对小批量的需求的特点，金属3D打印技术具备成本低和制造周期短的优势<br>
                      4. 最小0.02mm打印层厚，保证叶片表面粗糙度在标准范围内<br>
                      5. 一体打印的超级合金零件可以承受与批产零件一样的高温以及高冲击力的台架试验<br>
                      6. 82小时内不间断加工，满足台架实验要求
                    </div>
                  </Col>
                </Row>
              </div>
              <div class="Box">
                <Row :gutter="27">
                  <Col span="7">
                  <img src="./img/air3.jpg" alt="" width="100%" height="178px">
                  </Col>
                  <Col span="17">
                    <div class="Mtitle">航空航天零件的设计优化</div>
                    <div class="MsubTitle">客户要求</div>
                    <div class="Mcontent"> 涡轮叶片的加工</div>
                    <div class="MsubTitle">解决方案</div>
                    <div class="Mcontent">
                      1.  相对于在传统工艺上航空叶片制造加工是个难题，
                      只有具备丰富的五轴加工经验及金属3D打印技术才能巧妙地解决了这个问题<br>
                      2.  同时在保证功能的前提下，轻量化航空航天业对零件的首要要求，金属3D打印技术轻松实现零件轻量化设计<br>
                      3.  应对小批量的需求，金属3D打印技术具备成本低和制造周期短的优势<br>
                      4.  最小0.02mm打印层厚，保证叶片表面粗糙度在标准范围内。<br>
                      5.  一体打印的超级合金零件可以承受与批产零件一样的高温、高冲击力的台架试验<br>
                      6.  82小时内不间断加工，满足台架实验要求
                    </div>
                  </Col>
                </Row>
              </div>
              <div class="Box">
                <Row :gutter="27">
                  <Col span="7">
                  <img src="./img/air4.jpg" alt="" width="100%" height="178px">
                  </Col>
                  <Col span="17">
                  <div class="Mtitle">飞机内饰</div>
                  <div class="MsubTitle">客户要求</div>
                  <div class="Mcontent">
                    波音777飞机客户定制化部件<br>
                    每架飞机上有9个该部件<br>
                    良好的外观要求<br>
                    达到美国航空安全局的需求
                  </div>
                  <div class="MsubTitle">解决方案</div>
                  <div class="Mcontent">
                    1.  在保证功能的前提下，使用3D打印金属烧结设备技满足航空航天业对零件的首要要求-轻量化的设计<br>
                    2.  为应对小批量的需求，使用3D打印金属烧结设备降低成本及制造周期优势<br>
                    3.  从设计到制造完成30天，且实现灵活的生产配置
                  </div>
                  </Col>
                </Row>
              </div>
              <div class="Box">
                <Row :gutter="27">
                  <Col span="7">
                  <img src="./img/air5.jpg" alt="" width="100%" height="178px">
                  </Col>
                  <Col span="17">
                  <div class="Mtitle">无人机零部件</div>
                  <div class="MsubTitle">客户要求</div>
                  <div class="Mcontent">
                    制作无人机主机、电机外壳、起落架等部件<br>
                    用于整架无人机的组装<br>
                    3天内交货
                  </div>
                  <div class="MsubTitle">解决方案</div>
                  <div class="Mcontent">
                    1. 使用P760塑料打印设备，具有高精度的烧结，完全满足大尺寸整体打印研制要求<br>
                    2. 使用PA2200高分子尼龙材料，具有高韧性、材质轻量、高强度的特点，
                    非常适合无人机加工制作并同时满足铆钉、螺丝等装配要求<br>
                    3. 整机无人机打印时间仅用了18小时（30个零部件同时加工打印），
                    2天内完成打磨喷漆等后处理，加工周期短，缩短研发周期<br>
                    4. 整架无人机短时间内完成组装，轻量化的材质使得整架无人机重量大大减轻
                  </div>
                  </Col>
                </Row>
              </div>
            </div>
            <div v-if="activeTabMedical">
              <div class="Box">
                <Row :gutter="27">
                  <Col span="7">
                    <img src="./img/medical1.jpg" alt="" width="100%" height="178px">
                  </Col>
                  <Col span="17">
                    <div class="Mtitle">牙科摄像头</div>
                    <div class="MsubTitle">客户要求</div>
                    <div class="Mcontent">
                      寻找用于牙科产品的灵活加工方法<br>
                      寻找小批量生产的低成本可选方案
                    </div>
                    <div class="MsubTitle">解决方案</div>
                    <div class="Mcontent">
                      1. 3D打印技术适用于个性化、复杂几何结构，能确保产品与使用者手型的良好匹配<br>
                      2. 成功实现了3D打印技术在加工单件产品的技术可行性，同时验证了烧结工艺在小批量生产方面有很好的发展潜力<br>
                      3. 在新产品概念开发中确立了应用可能性
                    </div>
                  </Col>
                </Row>
              </div>
              <div class="Box">
                <Row :gutter="27">
                  <Col span="7">
                  <img src="./img/medical2.jpg" alt="" width="100%" height="178px">
                  </Col>
                  <Col span="17">
                  <div class="Mtitle">假体手臂完全结合的肘关节</div>
                  <div class="MsubTitle">客户要求</div>
                  <div class="Mcontent">与假体手臂完全结合的肘关节</div>
                  <div class="MsubTitle">解决方案</div>
                  <div class="Mcontent">
                    1. 3D打印技术适用于个性化、复杂几何结构，可确保与患者患部关节良好匹配<br>
                    2. 打印采用的钛合金具备良好的生物相融性<br>
                    3. 15小时完成零件的加工<br>
                    4. 复杂部件结构地快速成型，大幅减少生产成本<br>
                    5. 全自动化生产高精确度的零部件，表面质量以及机械性能全部符合使用标准
                  </div>
                  </Col>
                </Row>
              </div>
              <div class="Box">
                <Row :gutter="27">
                  <Col span="7">
                  <img src="./img/medical3.jpg" alt="" width="100%" height="178px">
                  </Col>
                  <Col span="17">
                  <div class="Mtitle">定制牙科修复件</div>
                  <div class="MsubTitle">客户要求</div>
                  <div class="Mcontent">
                    经济的快速制造方式<br>
                    大批量的定制化产品<br>
                    高精度的复杂几何形状<br>
                    生物相容性材料
                  </div>
                  <div class="MsubTitle">解决方案</div>
                  <div class="Mcontent">
                    1. 个性化且复杂几何产品是金属3D打印技术最擅长的领域，确保与患者口腔良好匹配，
                    件表面粗糙度非常适合陶瓷外层与本体的粘接力<br>
                    2. 打印材料选用用钴铬合金，具备良好的生物相融性<br>
                    3. 拥有技术和商业上均可行的工艺，2006年4月开始商业量产，加工时间几乎不受几何复杂程度限制<br>
                    4. 可以将数据准备工作量最小化，材料用量等于产品体积，避免了切削带来的浪费<br>
                    5. 粗糙的表面有利于提供更好的陶瓷与金属的粘结力，与传统铸造相比，大幅削减了后处理工作量
                  </div>
                  </Col>
                </Row>
              </div>
              <div class="Box">
                <Row :gutter="27">
                  <Col span="7">
                  <img src="./img/medical4.jpg" alt="" width="100%" height="178px">
                  </Col>
                  <Col span="17">
                  <div class="Mtitle">人体骨骼模型</div>
                  <div class="MsubTitle">客户要求</div>
                  <div class="Mcontent">
                    制作1:1人骨模型，用于医疗诊断与手术规划<br>
                    该模型需有一定的强度与韧性，可以钻孔及切割
                  </div>
                  <div class="MsubTitle">解决方案</div>
                  <div class="Mcontent">
                    1. 使用P110塑料打印烧结设备，精度达+/-0.1mm，完全满足尺寸研制要求<br>
                    2. PA2200高分子尼龙材料的高韧性、材质轻量、高强度非常适合人体骨骼模型的要求，辅助进行手术规划及模拟<br>
                    3. 模型尺寸与医学影像可1:1的完全吻合，同时可作为手术规划的主要依据<br>
                    4. 多种模型同时制作，成本大大降低加，缩短生产周期，第一时间满足医用需求
                  </div>
                  </Col>
                </Row>
              </div>
            </div>
            <div class="Box" v-if="activeTabCustomized">
              <Row :gutter="27">
                <Col span="7">
                <img src="./img/personal.jpg" alt="" width="100%">
                </Col>
                <Col span="17">
                <div class="Mtitle">婚礼系列<br>Wedding Jewelry</div>
                <div class="Mcontent">
                  3D打印婚礼系列包括婚纱、头纱、捧花、领结等系列产品，独一无二贴合身形的设计、
                  无缝的一体成型技术、随心所欲的造型选取，打造完全仅属于你的美轮美奂、飞扬肆意的婚礼<br>

                  婚纱是由尼龙粉打印制成，与普通婚纱一样柔软耐用，表面纯白无杂质、成型尺寸大，
                  舒适度与美感兼具，已经成为追求生活品质的时尚新人个性化的选择
                </div>
                </Col>
              </Row>
            </div>
            <div v-if="activeTabCProducts">
              <div class="Box">
                <Row :gutter="27">
                  <Col span="7">
                  <img src="./img/pro1.jpg" alt="" width="100%">
                  </Col>
                  <Col span="17">
                  <div class="Mtitle">十二水灯</div>
                  <div class="Mcontent">
                    风姿花传，水影波动<br>
                    3D打印水灯将传统中国画中不可捕捉、无边无影、无踪迹的流水凝固成夺人心魄的明灯，使美丽具象化并得以永恒<br>
                    通过灯具结构和造型的巧妙设计，在空间内留下独特的斑纹线条，光之色、灯之形、影之魅，打造出一个个宛若梦境的奇幻空间
                  </div>
                  </Col>
                </Row>
              </div>
              <div class="Box">
                <Row :gutter="27">
                  <Col span="7">
                  <img src="./img/pro2.jpg" alt="" width="100%">
                  </Col>
                  <Col span="17">
                  <div class="Mtitle">波纹笔<br>WAVE PEN</div>
                  <div class="Mcontent">
                    3D打印特殊的设计方式使产品设计更像是一个数字化的生长体系，
                    当改变体系中的某个参数时，造型也就随之而改变，设计的过程就是一个动态的生长过程<br>

                    每一支波纹笔都是这一过程中某个时刻的产物，用手去感知，或碰触或把玩，带给你不一样的感受<br>
                    十二支笔犹如钢琴上的黑白键盘利落鲜明，黑与白衬托着弹出了灵动的变奏曲，如同在书桌上对话，一应一答，简介无累赘
                  </div>
                  </Col>
                </Row>
              </div>
            </div>
            <div v-if="activeTabOthers">
              <div class="Box">
                <Row :gutter="27">
                  <Col span="7">
                  <img src="./img/other1.jpg" alt="" width="100%">
                  </Col>
                  <Col span="17">
                  <div class="Mtitle">复杂金属装配件</div>
                  <div class="MsubTitle">客户要求</div>
                  <div class="Mcontent">
                    在展会上展示8件锁壳的装配总成<br>
                    产品尺寸：250 x 125 x 62 mm需用金属材料
                  </div>
                  <div class="MsubTitle">解决方案</div>
                  <div class="Mcontent">
                    1. 使用3D打印金属烧结设备，轻松实现传统机加工无法完成的中空结构、无倒角深筋等<br>
                    2. 加工精度达+/-0.1mm, 复杂装配件轻松装配、配合良好<br>
                    3. 相比传统工艺，小批量产品柔性制造更具成本优势，制造周期大幅缩减<br>
                    4. 一周内完成设计并交货，同比CNC机加工减少80%的备货周期
                    5. 该产品制造了超过100，000件
                  </div>
                  </Col>
                </Row>
              </div>
              <div class="Box">
                <Row :gutter="27">
                  <Col span="7">
                    <img src="./img/other2.png" alt="" width="100%">
                  </Col>
                  <Col span="17">
                    <div class="Mtitle">商业案例-建筑模型</div>
                    <div class="MsubTitle">客户要求</div>
                    <div class="Mcontent">
                      制作一个等比例缩小全功能建筑模型<br>
                      希望3天之内交货，用于展览展示
                    </div>
                    <div class="MsubTitle">解决方案</div>
                    <div class="Mcontent">
                      1. +/-0.1mm精度实现精确等比例缩放，展示效果极佳<br>
                      2. 最小0.02mm打印层厚，实现诸多细节完美呈现最小结构0.8mm<br>
                      3. 复杂结构一次完成，相比传统加工工艺免去大量拆件和拼接工作，前后处理和加工时间大大节省，
                      同时模型强度更高<br>
                      4. 数据修复3小时，模型制作12小时，后处理6小时<br>
                      5. 所有细节完美呈现，取得极佳的展示效果
                    </div>
                  </Col>
                </Row>
              </div>
              <div class="Box">
                <Row :gutter="27">
                  <Col span="7">
                  <img src="./img/other3.png" alt="" width="100%">
                  </Col>
                  <Col span="17">
                    <div class="Mtitle">模型制作：上海音乐厅模型</div>
                    <div class="MsubTitle">客户要求</div>
                    <div class="Mcontent">
                      制作一个等比例缩小全功能建筑模型<br>
                      希望7天之内交货，用于展览展示
                    </div>
                    <div class="MsubTitle">解决方案</div>
                    <div class="Mcontent">
                      1. +/-0.1mm精度实现精确等比例缩放，展示效果极佳<br>
                      2. 最小0.02mm打印层厚，诸多细节完美呈现<br>
                      3. 复杂结构一次完成，最小细节0.8mm，内部楼梯、舞台、门窗清晰可见<br>
                      4. 相比传统加工工艺，免去大量拆件和拼接工作<br>
                      5. 前后处理和加工时间大大节省，同时模型强度更高<br>
                      6. 短时间完成数据修复，模型制作86小时，后处理48小时，内部繁琐结构完美呈现，取得极佳展示效果
                    </div>
                  </Col>
                </Row>
              </div>
              <div class="Box">
                <Row :gutter="27">
                  <Col span="7">
                    <img src="./img/other4.jpg" alt="" width="100%">
                  </Col>
                  <Col span="17">
                    <div class="Mtitle">水处理设备零部件</div>
                    <div class="MsubTitle">客户要求</div>
                    <div class="Mcontent">
                      制作水处理设备零部件的快速样件，用于结构验证、装配测试及性能测试<br>
                      2天内交货
                    </div>
                    <div class="MsubTitle">解决方案</div>
                    <div class="Mcontent">
                      1. 精度达+/-0.1mm完全满足产品尺寸研制要求<br>
                      2. PA2200高分子材料具有高韧性、材质轻量、高强度，完全满足功能设计验证要求<br>
                      3. 部分精度可达±0.1mm，具有出色的强度与韧性，装配更加方便，
                      同时流量及水压测试均可达到设计要求，性能测试完美通过<br>
                      4. 8小时即完成加工，缩短加工周期及研发周期
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
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
      showAppAndCase() {
        this.resetTabStat();
        this.appAndCase = true;
        this.activeTabModalMade = true;
        this.isDetail = false;
      },
      switchTab(tab) {
        this.resetTabStat();
        let name = `activeTab${tab}`;
        this[name] = true;
      },
      showDetail() {
        this.appAndCase = false;
        this.isDetail = true;
        this.activeTabCar = true;
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
  .Mcontent {
    font-size: 14px;
    color: #7E93AE;
  }
  .MsubTitle {
    margin-top: 14px;
    font-size: 16px;
    font-weight: 700;
    color: #DB352F;
  }
  .Mtitle {
    font-size: 20px;
    color: #39475A;
    font-weight: 700;
  }
  .Box {
    margin-top: 30px;
    width: 100%;
    border: 1px solid #D8DDE6;
    border-radius: 3px;
    padding: 27px;
  }
</style>
