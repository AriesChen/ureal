<template>
  <div>
    <page-header></page-header>
    <router-view></router-view>
    <page-footer></page-footer>
  </div>
</template>

<script type="text/ecmascript-6">
import pageHeader from 'components/header/header';
import pageFooter from 'components/footer/footer';
export default {
  components: {
    pageHeader,
    pageFooter
  }
};
</script>

<style>
</style>
