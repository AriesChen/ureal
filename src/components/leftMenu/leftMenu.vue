<template>
  <div>
    <div class="leftMenu">
      <div class="_active">{{MenuList.title}}</div>
      <div class="subMenu" @click="switchTab(menu)" v-for="menu in MenuList.list"
           :class="{isSelected:tabVal==menu.val}">{{menu.label}}
        <span class="rightIcon" :class="{activeIcon:tabVal==menu.val}">
          <img src="static/img/right.png" alt="">
        </span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      MenuList: {
        type: Object
      }
    },
    data() {
      return {
        label: this.$parent.subMenu,
        tabVal: parseInt(this.$parent.$route.query.page)
      };
    },
    mounted() {
      this.$parent.subMenu = this.MenuList.list[this.tabVal - 1].label;
    },
    methods: {
      switchTab(menu) {
        this.tabVal = menu.val;
        this.$parent.tabVal = menu.val;
        this.$parent.subMenu = menu.label;
      }
    }
  };
</script>

<style scoped>
  .leftMenu {
    position: absolute;
    border-radius: 3px;
    z-index: 12;
    width: 272px;
    background: #FFFFFF;
    margin-top: -75px;
    box-shadow: 0 3px 7px 0 rgba(0,0,0,0.05), 0 1px 1px 0 rgba(0,0,0,0.10);
  }
  .subMenu {
    padding: 10px 15px;
    font-size: 20px;
  }
  .rightIcon {
    display: none;
    float: right;
    margin-right: 10px;
  }
  .activeIcon {
    display: initial;
    float: right;
    margin-right: 10px;
  }
  .subMenu:hover {
    background: #F1F1F1;
    cursor: pointer;
  }
  .subMenu:hover  span.rightIcon {
    display: initial;
  }
  .isSelected {
    background: #F1F1F1;
    cursor: pointer;
  }
  ._active {
    padding: 10px 15px;
    font-size: 20px;
    color: #FFFFFF;
    background: #DB352F;
  }
</style>
