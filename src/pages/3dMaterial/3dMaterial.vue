<template>
  <div>
    <img src="./img/bg4.jpg" alt="" width="100%">
    <div class="mainContent">
      <left-menu :MenuList="MenuList"></left-menu>
      <div class="rightContent">
        <div class="bread">
          3D打印材料 &nbsp;&nbsp;/&nbsp;&nbsp; <span class="subBread">{{subMenu}}</span>
        </div>
        <div v-if="tabVal == 1">
          <div class="profileTitle">金属粉末材料</div>
          <div class="contentBox">
            <Row :gutter="27">
              <Col span="7">
                <img src="./img/app_3.jpg" alt="" width="100%" height="178px">
              </Col>
              <Col span="17">
                <div class="Mtitle">铝合金Aluminium AlSi10Mg</div>
                <div class="MsubTitle">性能</div>
                <div class="Mcontent">轻量化、较高的热传导率</div>
                <div class="MsubTitle">典型应用领域</div>
                <div class="Mcontent">工程应用，例如功能原型，小系列产品，个性化的产品或备件<br>
                  工程，赛车，汽车，航空航天，气动</div>
              </Col>
            </Row>
          </div>
          <div class="contentBox">
            <Row :gutter="27">
              <Col span="7">
              <img src="./img/app_3.jpg" alt="" width="100%" height="178px">
              </Col>
              <Col span="17">
              <div class="Mtitle">钛合金Titanium Ti64</div>
              <div class="MsubTitle">性能</div>
              <div class="Mcontent">重量轻、高比强度（每单位重量的强度）、生物相容性、耐腐蚀性 </div>
              <div class="MsubTitle">典型应用领域</div>
              <div class="Mcontent">航天航空与工程应用、生物医学植入体</div>
              </Col>
            </Row>
          </div>
          <div class="contentBox">
            <Row :gutter="27">
              <Col span="7">
              <img src="./img/app_3.jpg" alt="" width="100%" height="178px">
              </Col>
              <Col span="17">
              <div class="Mtitle">钴铬合金Cobalt Chrome SP2</div>
              <div class="MsubTitle">性能</div>
              <div class="Mcontent">高强度、耐高温、耐腐蚀性、生物相容性、热声学特点适合与烤瓷贴面</div>
              <div class="MsubTitle">典型应用领域</div>
              <div class="Mcontent">牙齿修复（冠，桥梁等）</div>
              </Col>
            </Row>
          </div>
          <div class="contentBox">
            <Row :gutter="27">
              <Col span="7">
              <img src="./img/app_3.jpg" alt="" width="100%" height="178px">
              </Col>
              <Col span="17">
              <div class="Mtitle">钴铬合金Cobalt Chrome MP1</div>
              <div class="MsubTitle">性能</div>
              <div class="Mcontent">高强度、耐高温、耐腐蚀性、生物相容性<br>
                符合ISO5832-4和ASTM F75（铸造钴铬钼合金植入合金）和大部分的ISO5832-12和
                ASTMF1537（锻造钴铬钼合金植入）</div>
              <div class="MsubTitle">典型应用领域</div>
              <div class="Mcontent">耐高温工程应用，如涡轮;医用植入体</div>
              </Col>
            </Row>
          </div>
          <div class="contentBox">
            <Row :gutter="27">
              <Col span="7">
              <img src="./img/app_3.jpg" alt="" width="100%" height="178px">
              </Col>
              <Col span="17">
              <div class="Mtitle">镍合金Nickel Alloy IN718</div>
              <div class="MsubTitle">性能</div>
              <div class="Mcontent">镍基耐热合金、优异的耐腐蚀性、耐高温700 °C，高性能拉伸强度，耐疲劳，抗蠕变和破裂</div>
              <div class="MsubTitle">典型应用领域</div>
              <div class="Mcontent">航空与陆上涡轮发动机部件、火箭与空间应用部件、化工与工业应用部件、油井，石油和天然气工业零部件 </div>
              </Col>
            </Row>
          </div>
          <div class="contentBox">
            <Row :gutter="27">
              <Col span="7">
              <img src="./img/app_3.jpg" alt="" width="100%" height="178px">
              </Col>
              <Col span="17">
              <div class="Mtitle">不锈钢Stainless Steel PH1</div>
              <div class="MsubTitle">性能</div>
              <div class="Mcontent">具有很强的强度、符合ASTME8规格、硬度可轻易达到43 HRC</div>
              <div class="MsubTitle">典型应用领域</div>
              <div class="Mcontent">工程应用，包括功能原型，小批量产品，个性化的产品或备件<br>
                要求具备特殊强度与硬度的部件</div>
              </Col>
            </Row>
          </div>
          <div class="contentBox">
            <Row :gutter="27">
              <Col span="7">
              <img src="./img/app_3.jpg" alt="" width="100%" height="178px">
              </Col>
              <Col span="17">
              <div class="Mtitle">不锈钢Stainless Steel GP1</div>
              <div class="MsubTitle">性能</div>
              <div class="Mcontent">原料对应于17-4材质、优异的韧性</div>
              <div class="MsubTitle">典型应用领域</div>
              <div class="Mcontent">工程应用，包括功能原型，小批量产品，个性化的产品或备件<br>
                需要高耐腐蚀性及可消毒的部件<br>需要特别高的硬度与韧性的部件</div>
              </Col>
            </Row>
          </div>
          <div class="contentBox">
            <Row :gutter="27">
              <Col span="7">
              <img src="./img/app_3.jpg" alt="" width="100%" height="178px">
              </Col>
              <Col span="17">
              <div class="Mtitle">模具钢Maraging Steel MS1</div>
              <div class="MsubTitle">性能</div>
              <div class="Mcontent">高性能的模具钢、致密度高，高强度，可抛光、易于后期机械加工、硬度可达55HRC、良好的热传导性</div>
              <div class="MsubTitle">典型应用领域</div>
              <div class="Mcontent">注塑模具，可用于大批量制造、其它模具应用，如压铸、高性能部件，如航空航天应用</div>
              </Col>
            </Row>
          </div>
        </div>
        <div v-if="tabVal == 2">
          <div class="profileTitle">非金属粉末材料</div>
          <div class="contentBox">
            <Row :gutter="27">
              <Col span="7">
              <img src="./img/app_3.jpg" alt="" width="100%" height="178px">
              </Col>
              <Col span="17">
              <div class="Mtitle">尼龙11Nylon 11</div>
              <div class="MsubTitle">性能</div>
              <div class="Mcontent">轻量化、较高的热传导率</div>
              <div class="MsubTitle">典型应用领域</div>
              <div class="Mcontent">最终产品，小批量生产；耐冲击部件，保证无裂痕（尤其是内饰件头部撞击区）；机械应力部件（例如铰链）</div>
              </Col>
            </Row>
          </div>
          <div class="contentBox">
            <Row :gutter="27">
              <Col span="7">
              <img src="./img/app_3.jpg" alt="" width="100%" height="178px">
              </Col>
              <Col span="17">
              <div class="Mtitle">尼龙12Nylon 12</div>
              <div class="MsubTitle">性能</div>
              <div class="Mcontent">非常好的机械性能、生物兼容性ISO 10993-1、可用于食品用途（高酒精含量除外）、
                低更新率，细节分辨率高、非常好的长期稳定性、可进行高温染色与金属喷涂</div>
              <div class="MsubTitle">典型应用领域</div>
              <div class="Mcontent"> 具备耐用灵活特征的承重功能部件、设计部件、最终产品、备品备件</div>
              </Col>
            </Row>
          </div>
          <div class="contentBox">
            <Row :gutter="27">
              <Col span="7">
              <img src="./img/app_3.jpg" alt="" width="100%" height="178px">
              </Col>
              <Col span="17">
              <div class="Mtitle">尼龙+玻璃纤维PA 3200 GF</div>
              <div class="MsubTitle">性能</div>
              <div class="Mcontent">强耐磨损性、高刚性、良好的热性能、可长期不断使用、可进行高温染色与金属喷涂</div>
              <div class="MsubTitle">典型应用领域</div>
              <div class="Mcontent">要求具备较高细节分辨率与出色表面质量的设计模型<br>
                具有高刚度的承载功能部件<br>热应力零部件、最终产品、备品备件</div>
              </Col>
            </Row>
          </div>
          <div class="contentBox">
            <Row :gutter="27">
              <Col span="7">
              <img src="./img/app_3.jpg" alt="" width="100%" height="178px">
              </Col>
              <Col span="17">
              <div class="Mtitle">聚苯乙烯树脂Polystyrene Resin</div>
              <div class="MsubTitle">性能</div>
              <div class="Mcontent">优异的尺寸精度、非常高的表面质量、出色的长期稳定性、良好的强度、优秀的精加工性能</div>
              <div class="MsubTitle">典型应用领域</div>
              <div class="Mcontent">消失模铸造、石膏浇注、陶瓷壳型铸造、真空铸造</div>
              </Col>
            </Row>
          </div>
          <div class="contentBox">
            <Row :gutter="27">
              <Col span="7">
              <img src="./img/app_3.jpg" alt="" width="100%" height="178px">
              </Col>
              <Col span="17">
              <div class="Mtitle">防火尼龙PA 2210 FR</div>
              <div class="MsubTitle">性能</div>
              <div class="Mcontent">阻燃，非卤素、良好的机械性能、良好的长期稳定性 、出众的细节表现力、
                可进行高温染色与金属喷涂、壁厚从2mm即可符合UL94-V0<br></div>
              <div class="MsubTitle">典型应用领域</div>
              <div class="Mcontent">设计验证样件、真空铸造、功能部件、最终产品、备品备件</div>
              </Col>
            </Row>
          </div>
          <div class="contentBox">
            <Row :gutter="27">
              <Col span="7">
              <img src="./img/app_3.jpg" alt="" width="100%" height="178px">
              </Col>
              <Col span="17">
              <div class="Mtitle">黑色尼龙PA 2202 black</div>
              <div class="MsubTitle">性能</div>
              <div class="Mcontent">可承受高机械负荷、高刚性、出色的长期稳定性、出众的细节表现力、磨损、刮擦、钻孔后不变色</div>
              <div class="MsubTitle">典型应用领域</div>
              <div class="Mcontent">设计验证样件、高污渍部件、光学效果要求的技术部件、功能部件、最终产品、备品备件</div>
              </Col>
            </Row>
          </div>
          <div class="contentBox">
            <Row :gutter="27">
              <Col span="7">
              <img src="./img/app_3.jpg" alt="" width="100%" height="178px">
              </Col>
              <Col span="17">
              <div class="Mtitle">尼龙+碳纤维CarbonMide</div>
              <div class="MsubTitle">性能</div>
              <div class="Mcontent">优异的机械性能、极端抗压与强度、高刚性、无烟煤色部件、导电性</div>
              <div class="MsubTitle">典型应用领域</div>
              <div class="Mcontent">表面精细的全功能性部件（比如可用于风洞测试）</div>
              </Col>
            </Row>
          </div>
          <div class="contentBox">
            <Row :gutter="27">
              <Col span="7">
              <img src="./img/app_3.jpg" alt="" width="100%" height="178px">
              </Col>
              <Col span="17">
              <div class="Mtitle">尼龙+铝粉ALUMIDE</div>
              <div class="MsubTitle">性能</div>
              <div class="Mcontent">优异的尺寸精度、高刚性、金属外观、出色的精加工性能、后处理不易磨损</div>
              <div class="MsubTitle">典型应用领域</div>
              <div class="Mcontent">演示模型、热应力外壳、夹具制造、注塑模具、最终产品、备品备件</div>
              </Col>
            </Row>
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
        subMenu: '金属粉末材料',
        tabVal: parseInt(this.$route.query.page),
        MenuList: {
          title: '3D打印材料',
          list: [{
            val: 1,
            label: '金属粉末材料'
          }, {
            val: 2,
            label: '非金属粉末材料'
          }]
        }
      };
    },
    components: {
      leftMenu
    }
  };
</script>

<style scoped>
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
  .contentBox {
    width: 100%;
    border: 1px solid #D8DDE6;
    border-radius: 3px;
    height: 242px;
    padding: 27px;
    margin-bottom: 22px;
  }
</style>
