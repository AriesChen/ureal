<template>
  <div class="headerContainer">
    <div class="headerBody">
      <div class="logo"></div>
      <div class="menu">
        <div class="item">联系我们</div>
        <div class="item">联系我们</div>
        <div class="item">联系我们</div>
        <div class="item">联系我们</div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {};
</script>

<style scoped>
  .headerContainer {
    position: fixed;
    top: 0;
    background: #FFFFFF;
    height: 72px;
    color: #39475A;
    font-size: 16px;
    width: 100%;
  }
  .headerBody {
    width: 1150px;
    margin: 0 auto;
    height: 10px;
  }
  .logo {
    float: left;
  }
  .menu {
    float: right;
    display: flex;
    height: 72px;
  }
  .item {
    width: 93px;
    text-align: center;
    padding-top: 20px;
  }
</style>
