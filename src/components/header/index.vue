<template>
  <div class="layout clearfix">
    <div class="w">
      <top-bar></top-bar>
    </div>
    <div class="searchPlace clearfix">
      <searchPlace></searchPlace>
    </div>
  </div>
</template>
<script>
import topBar from './topBar'
import searchPlace from '@/components/header/search'

export default {
  components: {
    topBar,
    searchPlace
  }
}
</script>
<style scoped lang="less">
 .layout {
   background: rgba(180, 180, 180, .1)
 }
 .searchPlace {
     box-shadow: 3px 2px 5px rgba(180, 180, 180, .3);
   background-color: #fff;
 }
</style>
