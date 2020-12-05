<template>
  <div class="myMain">
    <main-nav></main-nav>
    <el-row class="upBanner" >
      <el-col :span="14">
        <main-banner></main-banner>
      </el-col>
      <el-col :span="10">
        <user-area></user-area>
      </el-col>
    </el-row>
    <img-list></img-list>
    
  </div>
</template>
<script>
import MainBanner from './mainBanner'
import MainNav from './mainNav'
import UserArea from './userArea'
import imgList from './imgList'
export default {
  components:{
    MainBanner,
    MainNav,
    UserArea,
    imgList
  }
}
</script>
<style scoped>

</style>