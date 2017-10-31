<template>
  <div class="footer">
    <div class="container1">
      <div class="content">
        <Row>
          <Col span="4">
            <span class="titleText">联系方式</span>
          </Col>
        </Row>
        <Row type="flex" justify="start" class="contact">
          <Col span="24">
            邮件联系：sales@ureal.cn     &nbsp;&nbsp;|&nbsp;&nbsp;
            联系电话：021-54171123       &nbsp;&nbsp;|&nbsp;&nbsp;
            销售分机：8020,8023          &nbsp;&nbsp;|&nbsp;&nbsp;
            公司传真：021-54171127-8001  &nbsp;&nbsp;|&nbsp;&nbsp;
            公司地址：上海市松江区中心路1158号6号楼1楼
          </Col>
        </Row>
        <div class="line"></div>
        <Row type="flex" justify="left" align="top" class="code-row-bg" style="margin-left: 30px">
          <Col span="3">
            <ul class="allMenu">
              <li>&nbsp;&nbsp;悦瑞三维</li>
              <li>&nbsp;&nbsp;公司简介</li>
              <li>&nbsp;&nbsp;发展轨迹</li>
              <li>&nbsp;&nbsp;企业理念</li>
              <li>&nbsp;&nbsp;领导关怀</li>
            </ul>
          </Col>
          <Col span="4">
          <ul class="allMenu">
            <li>&nbsp;&nbsp;3D打印设备</li>
            <li>&nbsp;&nbsp;EOS设备</li>
            <li>&nbsp;&nbsp;DMT设备</li>
            <li>&nbsp;&nbsp;微打印设备</li>
            <li>&nbsp;&nbsp;EnvisionTEC设备</li>
            <li>&nbsp;&nbsp;HP设备</li>
          </ul>
          </Col>
          <Col span="3">
          <ul class="allMenu">
            <li>&nbsp;&nbsp;3D打印服务</li>
            <li>&nbsp;&nbsp;模具制造</li>
            <li>&nbsp;&nbsp;快速样件</li>
            <li>&nbsp;&nbsp;小批量生产</li>
            <li>&nbsp;&nbsp;模型制作</li>
            <li>&nbsp;&nbsp;服务流程</li>
          </ul>
          </Col>
          <Col span="3">
          <ul class="allMenu">
            <li>&nbsp;&nbsp;3D打印材料</li>
            <li>&nbsp;&nbsp;金属粉末材料</li>
            <li>&nbsp;&nbsp;非金属粉末材料</li>
          </ul>
          </Col>
          <Col span="3">
          <ul class="allMenu">
            <li>&nbsp;&nbsp;应用与案例</li>
            <li>&nbsp;&nbsp;汽车</li>
            <li>&nbsp;&nbsp;模具</li>
            <li>&nbsp;&nbsp;航天航空</li>
            <li>&nbsp;&nbsp;医疗</li>
            <li>&nbsp;&nbsp;个性化定制</li>
            <li>&nbsp;&nbsp;创意产品</li>
            <li>&nbsp;&nbsp;其他</li>
          </ul>
          </Col>
          <Col span="3">
          <ul class="allMenu">
            <li>&nbsp;&nbsp;服务客户</li>
            <li>&nbsp;&nbsp;合作伙伴</li>
            <li>&nbsp;&nbsp;知名客户</li>
          </ul>
          </Col>
          <Col span="3">
          <ul class="allMenu">
            <li>&nbsp;&nbsp;悦瑞新闻</li>
            <li>&nbsp;&nbsp;公司新闻</li>
            <li>&nbsp;&nbsp;行业新闻</li>
          </ul>
          </Col>
          <Col span="2">
          <ul class="allMenu">
            <li>&nbsp;&nbsp;联系我们</li>
            <li>&nbsp;&nbsp;联系我们</li>
            <li>&nbsp;&nbsp;加入我们</li>
          </ul>
          </Col>
        </Row>
      </div>
    </div>
    <div class="container2">
      <span class="shgs">
        <img src="./img/shgs.png" style="width: 20px;height: 20px">
      </span>
      版权所有 © 2012-2017 上海悦瑞三维科技股份有限公司　备案号：沪ICP备12009310-1号
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {};
</script>

<style scoped>
  .contact {
    margin: 20px 0;
    font-size: 15px;
  }
  .allMenu {
    font-size: 14px;
  }
  .line {
    width: 100%;
    margin-bottom: 20px;
    border-bottom: 1px solid #474747;
  }
  li {
    list-style: initial !important;
    line-height: 25px;
  }
  .footer {
    /*position: absolute;*/
    /*bottom: 0;*/
    width: 100%;
  }
  .content {
    width: 1150px;
    margin: 0 auto;
    padding-top: 62px;
  }
  .container1 {
    height: 460px;
    background: #333333;
    color: #9a9a9a;
    width: 100%;
    font-size: 14px;
  }
  .container2 {
    height: 88px;
    background: #1f1f1f;
    color: #9a9a9a;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
  }
  .shgs {
    margin-right: 20px;
  }
  .titleText {
    font-size: 24px;
    line-height: 33px;
    color: #b9b9b9;
  }
  .vline {
    border-right: 1px solid #9A9A9A;
  }
</style>
