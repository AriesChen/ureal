<template>
  <div>
    <img src="./bg5.png" alt="" width="100%">
    <div class="mainContent">
      <left-menu :MenuList="MenuList"></left-menu>
      <div class="rightContent">
        <div class="bread">
          服务客户 &nbsp;&nbsp;/&nbsp;&nbsp; <span class="subBread">{{subMenu}}</span>
        </div>
        <div v-if="tabVal == 1">
          <div class="profileTitle">合作伙伴</div>
          <img src="./hezuohuoban.jpg" alt="" width="100%" style="margin-bottom: 60px">
        </div>
        <div v-if="tabVal == 2">
          <div class="profileTitle">知名客户</div>
          <div class="contentBox"></div>
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
        subMenu: '合作伙伴',
        tabVal: parseInt(this.$route.query.page),
        MenuList: {
          title: '服务客户',
          list: [{
            val: 1,
            label: '合作伙伴'
          }, {
            val: 2,
            label: '知名客户'
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
  .contentBox {
    width: 100%;
    border: 1px solid #D8DDE6;
    border-radius: 3px;
    height: 242px;
    padding: 27px;
    margin-bottom: 22px;
  }
</style>
