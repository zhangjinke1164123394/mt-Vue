<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import imgLazy from './imgLizy'
// import myIndex from './components/index.vue'
export default {
  name: 'App',
  // components:{
  //   myIndex
  // }
  mounted(){
    imgLazy.start()
  }
}
</script>

<style >


</style>
