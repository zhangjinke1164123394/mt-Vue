<template>
  <div>
    <el-container>
      <el-header style="padding:0;height:140px">
        <my-header></my-header>
      </el-header>
      <el-main class="w" style="overflow:unset">
        <router-view ></router-view>
      </el-main >
      <el-footer>
        <my-footer></my-footer>
      </el-footer>
    </el-container>
  </div>
</template>
<script>
 import myHeader from './header/index'
 import myFooter from './footer/index'
export default {
  components :{
    myHeader,
    myFooter
  }
}
</script>
<style>
 .clearfix:after {
    content: " ";
    visibility: hidden;
    display: block;
    height: 0;
    clear: both;
}
body {
  margin: 0;
  padding: 0;
  background-color: rgba(180, 180, 180, .1);
}
 .w {
   width: 1220px;
   margin: 0 auto;
 }
 a {
   color: #222;
   text-decoration: none;
 }
 * {
   font-family: "-apple-system","BlinkMacSystemFont","Roboto","Helvetica Neue","MIcrosoft YaHei",sans-serif !important;
 }
 ul {
   padding: 0;
   margin: 0;
   list-style: none;
 }
 .el-input.is-active .el-input__inner, .el-input__inner:focus {
    border-color: #666 !important;
    outline: 0;
 }
</style>