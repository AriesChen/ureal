<template>
  <div>
    <img src="./img/Mask.jpg" alt="" width="100%">
    <div class="mainContent">
      <left-menu :MenuList="MenuList"></left-menu>
      <div class="rightContent">
        <div class="bread">
          联系我们 &nbsp;&nbsp;/&nbsp;&nbsp; <span class="subBread">{{subMenu}}</span>
        </div>
        <div v-if="tabVal == 1">
          <div class="profileTitle">联系方式</div>
          <Row style="margin-bottom: 50px" :gutter="42">
            <Col span="10">
              <baidu-map class="bm-view" :center="{lng: 121.335904, lat: 31.109527}" :zoom="15">
                <bm-marker :position="{lng: 121.335904, lat: 31.109527}" :dragging="true" animation="BMAP_ANIMATION_BOUNCE">
                  <bm-label content="悦瑞三维" :labelStyle="{color: 'red', fontSize : '14px'}" :offset="{width: -20, height: 25}"/>
                </bm-marker>
              </baidu-map>
            </Col>
            <Col span="14">
              <div class="address">上海本部</div>
              <div class="contactInfo">电话： 021-54171123-8020，8023</div>
              <div class="contactInfo">传真： 021-54171123-8001</div>
              <div class="contactInfo">邮箱： sales@ureal.cn</div>
              <div class="contactInfo">地址： 上海松江区九亭镇中心路1158号6号楼1楼</div>
            </Col>
          </Row>
          <Row style="margin-bottom: 60px" :gutter="42">
            <Col span="10">
            <baidu-map class="bm-view" :center="{lng: 113.931922, lat: 22.763698}" :zoom="15">
              <bm-marker :position="{lng: 113.931922, lat: 22.763698}" :dragging="true" animation="BMAP_ANIMATION_BOUNCE">
                <bm-label content="悦瑞三维" :labelStyle="{color: 'red', fontSize : '14px'}" :offset="{width: -20, height: 25}"/>
              </bm-marker>
            </baidu-map>
            </Col>
            <Col span="14">
            <div class="address">深圳办事处</div>
            <div class="contactInfo">电话： 0755-23763071</div>
            <div class="contactInfo">传真： 0755-23732621</div>
            <div class="contactInfo">邮箱： sales@ureal.cn</div>
            <div class="contactInfo">地址： 深圳市光明新区高新西路11号研祥科技工业园研发楼9楼01单元</div>
            </Col>
          </Row>
        </div>
        <div v-if="tabVal == 2">
          <div class="profileTitle">加入我们</div>
          <div style="margin-bottom: 96px">
            <div class="CRow" @click="showDetail('accountManager')">
              <div class="rowTitle">大客户经理</div>
              <div class="upDownIcon">
                <Icon type="ios-arrow-down" v-if="accountManager"></Icon>
                <Icon type="ios-arrow-up" v-else></Icon>
              </div>
            </div>
            <div v-if="accountManager" class="recruitment">
              <div class="resumeTitle">岗位职责：</div>
              <div>1、负责公司3D打印模具的推广销售，完成计划内的销售指标；</div>
              <div>2、负责客户关系的开发与维护，发掘客户，执行销售策略；</div>
              <div>3、建立顺畅的客户沟通渠道，负责客户的业务谈判及成交，落实客户货款的回收，
                对客户进行及时全面的客情维护，创建长期、良好、稳固的客户关系
              </div>
              <div>
                4、收集、汇总相关市场、销售信息，进行分析，并提出对策建议，研究分析客情，定期汇报；
              </div>
              <div class="resumeTitle">任职要求：</div>
              <div>1、大专以上学历，机械、模具相关专业优先；</div>
              <div>2、5年以上塑料模具行业产品销售经验，3年以上大客户销售经验；</div>
              <div>3、掌握注塑、汽车、热流道等行业渠道资源；</div>
              <div>4、有模具注塑，热流道，模具设计技术经验优先；</div>
              <div>5、具备独立解决问题的能力，极强的抗压能力，敢于接受新挑战；</div>
              <div>6、有良好的敬业精神和团队合作精神，优秀的人际交往和协调能力。</div>
              <div>7、工作主动性强，思维敏捷，有较强的创新能力。</div>
              <div class="email">简历发至邮件：<span>hr@ureal.cn</span></div>
            </div>

            <div class="CRow" @click="showDetail('proEngineer')">
              <div class="rowTitle">生产工程师</div>
              <div class="upDownIcon">
                <Icon type="ios-arrow-down" v-if="proEngineer"></Icon>
                <Icon type="ios-arrow-up" v-else></Icon>
              </div>
            </div>
            <div v-if="proEngineer" class="recruitment">
              <div class="resumeTitle">岗位职责：</div>
              <div>1、按照客户要求定时定量完成产品订单（设备操作）；</div>
              <div>2、做好3D打印产品的后处理工作；</div>
              <div>3、协助做好3D打印机（设备）的日常维护与常规保养；</div>
              <div>4、完成生产运营部门交办的其他日常事务；</div>
              <div class="resumeTitle">任职要求：</div>
              <div>
                1、20-29岁，大专以上学历，机械、模具等同类相关专业（应届生亦可）；有1年以上后处理工艺
                （清洗，去毛刺、抛光、喷砂、喷漆等）工作经验者可放宽学历要求；
              </div>
              <div>2、熟悉设备操作，了解产品生产的相关工艺和流程、设备操作和工具使用技能；</div>
              <div>3、具备良好的职业操守和服务意识，工作踏实稳定、为人诚实守信；</div>
              <div>4、吃苦耐劳，能承受工作压力，服从性极强，执行力高；</div>
              <div class="email">简历发至邮件：<span>hr@ureal.cn</span></div>
            </div>

            <div class="CRow" @click="showDetail('materialEngineer')">
              <div class="rowTitle">材料工程师</div>
              <div class="upDownIcon">
                <Icon type="ios-arrow-down" v-if="materialEngineer"></Icon>
                <Icon type="ios-arrow-up" v-else></Icon>
              </div>
            </div>
            <div v-if="materialEngineer" class="recruitment">
              <div class="resumeTitle">岗位职责：</div>
              <div>
                1、适用于3D打印选择性激光熔融技术的新材料和新工艺的开发，
                包括粉末的选择、打印参数的制定、打印应力的控制、热处理和表面处理
                工艺制度的开发以及打印件性能的评价。涉及的材料包括模具钢、不锈钢、
                铝合金、镍基高温合金、钛合金等；
              </div>
              <div class="resumeTitle">任职要求：</div>
              <div>1、本科及以上学历，粉末冶金、金属材料学或焊接等相关专业；</div>
              <div>2、熟练使用UG/Solidworks/ProE/Catia等其中至少一种三维软件；</div>
              <div>3、对3D打印充满浓厚的兴趣，了解3D打印的基本成型原理；</div>
              <div>4、善于独立思考，善于发现问题并寻求解决问题的方法。逻辑清晰，对自己的职业发展有明确的规划；</div>
              <div>5、英文良好，能够独立查阅国外相关技术文献；</div>
              <div>6、为人诚恳，诚实守信，能够与同事相处融洽。</div>
              <div class="email">简历发至邮件：<span>hr@ureal.cn</span></div>
            </div>

            <div class="CRow" @click="showDetail('softwareEngineer')">
              <div class="rowTitle">3D打印设备研发机械工程师</div>
              <div class="upDownIcon">
                <Icon type="ios-arrow-down" v-if="softwareEngineer"></Icon>
                <Icon type="ios-arrow-up" v-else></Icon>
              </div>
            </div>
            <div v-if="softwareEngineer" class="recruitment">
              <div class="resumeTitle">岗位职责：</div>
              <div>1、负责项目和产品的驱动、软件设计、开发及软硬件联调工作。</div>
              <div>2、负责项目和产品的测试软件设计、开发、调试工作。</div>
              <div>3、提出解决方案和组织算法研发工作的实施策略。</div>
              <div>4、负责项目流程文档、控制协议文档的编写工作。</div>
              <div>5、同软、硬件设计人员一起完成相关方面项目的规划。</div>
              <div class="resumeTitle">任职要求：</div>
              <div>1、计算机、自动化、机电一体化相关专业，硕士及以上学历，三年以上开发经验。</div>
              <div>2、须具备有Lua程序开发经验；</div>
              <div>3、能熟练使用C/C++开发语言，进行MFC项目开发。或者能熟练使用C#开发语言下，进行Winform项目开发；</div>
              <div>4、有机械加工设备（包括机床、激光加工设备等）的控制软件设计经验为佳；</div>
              <div class="email">简历发至邮件：<span>hr@ureal.cn</span></div>
            </div>

            <div class="CRow" @click="showDetail('mechanicalEngineer')">
              <div class="rowTitle">3D打印设备研发电气工程师</div>
              <div class="upDownIcon">
                <Icon type="ios-arrow-down" v-if="mechanicalEngineer"></Icon>
                <Icon type="ios-arrow-up" v-else></Icon>
              </div>
            </div>
            <div v-if="mechanicalEngineer" class="recruitment">
              <div class="resumeTitle">岗位职责：</div>
              <div>1、设计开发（重点）：负责3D打印设备的机械结构及外观相关设计及测试验证工作；</div>
              <div>2、试制跟踪：负责产品在试制中的跟踪，质量分析，设计，验证及工艺改进与技术支持；</div>
              <div>3、协助规范执行：协助工艺人员，对产品的设计文件，装配工艺，明细表等文档进行整理。
                配合产品负责人进行日常工作；</div>
              <div class="resumeTitle">任职要求：</div>
              <div>1、机械设计及机电一体化相关专业，熟悉机械原理、机械设计、机械制图、熟悉各种传动结构和机械工艺。
                本科以上学历，三年以上机械设计经验；</div>
              <div>2、熟练运用Solidworks、ProE、UG等机械设计软件进行机械设计；</div>
              <div>3、有机械加工设备（包括机床、激光加工设备、3D打印设备等）的机械结构设计经验为佳；</div>
              <div>4、有除尘系统、手套箱、真空系统等相关气路设计经验为佳；</div>
              <div class="email">简历发至邮件：<span>hr@ureal.cn</span></div>
            </div>

            <div class="CRow" @click="showDetail('electricalEngineer')">
              <div class="rowTitle">3D打印设备研发电气工程师</div>
              <div class="upDownIcon">
                <Icon type="ios-arrow-down" v-if="electricalEngineer"></Icon>
                <Icon type="ios-arrow-up" v-else></Icon>
              </div>
            </div>
            <div v-if="electricalEngineer" class="recruitment">
              <div class="resumeTitle">岗位职责：</div>
              <div>1、电气线路设计、部件选型、设计图纸输出；</div>
              <div>2、参与产品的试制、调试工作；</div>
              <div>3、解决设备安装中出现的技术问题；</div>
              <div>4、编写相关技术文档；</div>
              <div class="resumeTitle">任职要求：</div>
              <div>1、自动化或机电一体化专业硕士及以上学历；</div>
              <div>2、熟练掌握PLC编程（最好是西门子PLC）；</div>
              <div>3、能熟练运用AUTOCAD或者EPLAN软件绘制电气部分的原理图及接线图；</div>
              <div>4、工作认真负责，吃苦耐劳，严谨细致，有良好的团队精神和沟通能力；</div>
              <div>5、有机械加工设备（包括机床、激光加工设备、3D打印设备等）的电气系统设计经验为佳；</div>
              <div>6、有除尘系统、手套箱、真空系统等相关气路电气控制经验为佳；</div>
              <div class="email">简历发至邮件：<span>hr@ureal.cn</span></div>
            </div>

            <div class="CRow" @click="showDetail('laserEngineer')">
              <div class="rowTitle">激光工艺工程师</div>
              <div class="upDownIcon">
                <Icon type="ios-arrow-down" v-if="laserEngineer"></Icon>
                <Icon type="ios-arrow-up" v-else></Icon>
              </div>
            </div>
            <div v-if="laserEngineer" class="recruitment">
              <div class="resumeTitle">岗位职责：</div>
              <div>1、负责激光器模块及子系统的光学系统方案及相关部件的设计工作，并进行验证和调试；</div>
              <div>2、负责完成光学技术开发，激光光源光学测试，数据采集等工作；</div>
              <div>3、参与产品开发、研制，完成研发任务，并参与产品升级和更新换代；</div>
              <div>4、参与采购光学镜片、光纤；</div>
              <div class="resumeTitle">任职要求：</div>
              <div>1、熟悉激光器原理及结构， 及安全注意事项；</div>
              <div>2、能独立设计光路及调整， 并编写工艺指导文件；</div>
              <div>3、了解成像光学及光学设计、镜片加工工艺；</div>
              <div>4、硕士及以上学历， 三年以上相关行业从业经验；</div>
              <div>5、有激光器及阵镜联调经验者优先；</div>
              <div class="email">简历发至邮件：<span>hr@ureal.cn</span></div>
            </div>

            <div class="CRow" @click="showDetail('Aftermarket')">
              <div class="rowTitle">售后技术支持</div>
              <div class="upDownIcon">
                <Icon type="ios-arrow-down" v-if="Aftermarket"></Icon>
                <Icon type="ios-arrow-up" v-else></Icon>
              </div>
            </div>
            <div v-if="Aftermarket" class="recruitment">
              <div class="resumeTitle">岗位职责：</div>
              <div>1、负责售前、售后技术支持，协助销售人员完成售前咨询、设备的装机、调试；</div>
              <div>2、负责客户的技能培训、应用演示等工作；</div>
              <div>3、及时反馈客户意见和产品问题，维护客户关系；</div>
              <div class="resumeTitle">任职要求：</div>
              <div>1、本科学历，机电一体化、机械、电气、自动化相关专业；</div>
              <div>2、具备良好的沟通及表达能力，1年以上客户培训经验优先考虑；</div>
              <div>3、1年以上设备或自动化行业工作经验、从事过技术支持工作或有电气技术员工作经验者更佳；</div>
              <div>4、通过培训，能够熟练掌握公司设备的配置、安装、使用和培训，具备自主学习和分析问题的能力；</div>
              <div>5、具备一定的英语能力（Cet-4），可阅读英文资料；</div>
              <div>6、具有良好的协调能力及团队合作意识，责任心强；</div>
              <div>7、能适应偶尔出差需求；</div>
              <div class="email">简历发至邮件：<span>hr@ureal.cn</span></div>
            </div>

            <div class="CRow" @click="showDetail('personnelManager')">
              <div class="rowTitle">人事主管</div>
              <div class="upDownIcon">
                <Icon type="ios-arrow-down" v-if="personnelManager"></Icon>
                <Icon type="ios-arrow-up" v-else></Icon>
              </div>
            </div>
            <div v-if="personnelManager" class="recruitment">
              <div class="resumeTitle">岗位职责：</div>
              <div>1、建立并完善公司的培训师制度，开发培训课题、组织培训教材或教案的编写并审核；</div>
              <div>2、根据公司业务发展计划，评估人员能力及相关培训需求，制定及实施培训计划；</div>
              <div>3、依公司发展需要，持续开发培训课程；</div>
              <div>4、适时对培训制度及流程提出改进建议；</div>
              <div>5、外部机构甄选及培训信息引进；</div>
              <div>6、收集培训课程的培训效果，分析培训需求的满足程度；</div>
              <div>7、记录及整理归档培训记录，建立员工培训档案；</div>
              <div>8、领导交办的其他工作；</div>
              <div class="resumeTitle">任职要求：</div>
              <div>1、大学本科毕业及以上，人力资源管理、行政管理、心理学、管理学等相关专业；</div>
              <div>2、2年以上相关经验，培训模块能独挡一面，有绩效考核模块经验优先；</div>
              <div>3、熟悉人力资源管理及相关工作流程，并能熟练应用国家相关法律法规，能够独立应对地方政府的各类管理审查；
                能够有效处理和协调劳资双方关系；</div>
              <div>4、熟练使用相关OFFICE办公软件，PPT使用熟练，能独立制作课件；</div>
              <div>5、具备人力资源管理或TTT培训师资格证书（非必须）；</div>
              <div>6、做事稳重细致，积极主动，具备较强执行能力；语言表达能力较强，有亲和力，具有较强的沟通能力；</div>
              <div class="email">简历发至邮件：<span>hr@ureal.cn</span></div>
            </div>
            <div class="CRow"></div>
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
        proEngineer: false,
        accountManager: true,
        materialEngineer: false,
        softwareEngineer: false,
        electricalEngineer: false,
        mechanicalEngineer: false,
        laserEngineer: false,
        Aftermarket: false,
        personnelManager: false,
        subMenu: '联系方式',
        tabVal: parseInt(this.$route.query.page),
        MenuList: {
          title: '联系我们',
          list: [{
            val: 1,
            label: '联系方式'
          }, {
            val: 2,
            label: '加入我们'
          }]
        }
      };
    },
    methods: {
      showDetail(name) {
        this[name] = !this[name];
      }
    },
    components: {
      leftMenu
    }
  };
</script>

<style scoped>
  .email {
    padding: 20px 0;
    font-size: 15px;
    color: #7E93AE;
  }
  .email span {
    color: #2877f4;
  }
  .resumeTitle {
    margin-top: 11px;
    font-size: 15px;
    color: #7E93AE
  }
  .recruitment {
    line-height: 22px;
    font-size: 14px;
    color: #7E93AE;
  }
  .upDownIcon {
    margin: -22px 20px 0 0;
    float: right;
  }
  .CRow {
    cursor: pointer;
    padding: 11px 0;
    background: #FFFFFF;
    box-shadow: inset 0 1px 0 0 rgba(191,191,191,0.50);
  }
  .rowTitle {
    font-size: 18px;
    color: #DB352F;
  }
  .contactInfo {
    font-size: 14px;
    color: #7E93AE;
    padding: 10px 0;
  }
  .address {
    font-size: 18px;
    color: #DB352F;
  }
  .bm-view {
    width: 100%;
    height: 186px;
  }
</style>
