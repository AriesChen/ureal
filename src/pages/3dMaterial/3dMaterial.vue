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
          </div>
          <div class="contentBox"></div>
        </div>
        <div v-if="tabVal == 2">
          <div class="profileTitle">非金属粉末材料</div>
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
  .contentBox {
    width: 100%;
    border: 1px solid #D8DDE6;
    border-radius: 3px;
    height: 242px;
    padding: 27px;
    margin-bottom: 22px;
  }
</style>
