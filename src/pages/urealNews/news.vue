<template>
  <div>
    <img src="./bg6.png" alt="" width="100%">
    <div class="mainContent">
      <left-menu :MenuList="MenuList"></left-menu>
      <div class="rightContent">
        <div class="bread">
          悦瑞新闻 &nbsp;&nbsp;/&nbsp;&nbsp; <span class="subBread">{{subMenu}}</span>
        </div>
        <div v-if="tabVal == 1">
          <div class="profileTitle">公司新闻</div>
          <div class="newsBox">
            <Row :gutter="30">
              <Col span="8">
                <img src="./news.jpg" alt="" width="100%" height="150px">
              </Col>
              <Col span="16">
                <div class="newsTitle">
                  未来可期：悦瑞三维1.66亿工业级3D打印项目入驻长兴国家大学科技园
                </div>
              <div class="newsTime">
                <Icon type="ios-clock-outline"></Icon> 2017-10-09 19:00  公司新闻
              </div>
              <div class="detailBtn" @click='showDetail' style="margin-top: 24px">查看详情</div>
              </Col>
            </Row>
          </div>
          <div class="newsBox">
            <Row :gutter="30">
              <Col span="8">
              <img src="./news.jpg" alt="" width="100%" height="150px">
              </Col>
              <Col span="16">
              <div class="newsTitle">
                未来可期：悦瑞三维1.66亿工业级3D打印项目入驻长兴国家大学科技园
              </div>
              <div class="newsTime">
                <Icon type="ios-clock-outline"></Icon> 2017-10-09 19:00  公司新闻
              </div>
              <div class="detailBtn" @click='showDetail' style="margin-top: 24px">查看详情</div>
              </Col>
            </Row>
          </div>
          <div class="newsBox">
            <Row :gutter="30">
              <Col span="8">
              <img src="./news.jpg" alt="" width="100%" height="150px">
              </Col>
              <Col span="16">
              <div class="newsTitle">
                未来可期：悦瑞三维1.66亿工业级3D打印项目入驻长兴国家大学科技园
              </div>
              <div class="newsTime">
                <Icon type="ios-clock-outline"></Icon> 2017-10-09 19:00  公司新闻
              </div>
              <div class="detailBtn" @click='showDetail' style="margin-top: 24px">查看详情</div>
              </Col>
            </Row>
          </div>
        </div>
        <div v-if="tabVal == 2">
          <div class="profileTitle">行业新闻</div>
          <div class="newsBox"></div>
        </div>
        <div v-if="tabVal == 3">
          <div class="profileTitle">市场活动</div>
          <div class="newsBox"></div>
        </div>
        <Page :total="100" style="margin-bottom: 50px"></Page>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import leftMenu from 'components/leftMenu/leftMenu';
  export default {
    data() {
      return {
        subMenu: '公司新闻',
        tabVal: parseInt(this.$route.query.page),
        MenuList: {
          title: '悦瑞新闻',
          list: [{
            val: 1,
            label: '公司新闻'
          }, {
            val: 2,
            label: '行业新闻'
          }, {
            val: 3,
            label: '市场活动'
          }]
        }
      };
    },
    methods: {
      showDetail() {}
    },
    components: {
      leftMenu
    }
  };
</script>

<style scoped>
  .newsTime {
    padding-top: 15px;
    font-size: 14px;
    color: #7E93AE;
  }
  .newsTitle {
    font-size: 18px;
    color: #39475A;
  }
  .newsBox {
    width: 100%;
    border: 1px solid #D8DDE6;
    border-radius: 3px;
    height: 199px;
    padding: 24px;
    margin-bottom: 22px;
  }
</style>
