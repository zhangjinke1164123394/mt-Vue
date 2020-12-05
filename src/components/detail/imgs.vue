<template>
  <div class="imgs">
    <div class="mainImg">
      <img :src="imgList.mainImg" alt="">
    </div>
    <div class="deImg">
      <img v-for="item in imgList.deImg" :src="item" :key="item" alt="">
    </div>
  </div>
</template>
<script>
export default {
  props:{
    imgList: Object,
    'imgList.deImg': Array
  }
}
</script>
<style scoped lang='less'>
  .imgs{
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    .mainImg {
      // width: 100%;
      flex: 1;
      padding-right: 8px;
      box-sizing: border-box;
      img {
        width: 100%;
      }
    }
    .deImg {
      flex: 1;
      img {
        width: 50%;
        margin:0;
        padding: 0;
        padding-right: 8px;
        padding-bottom: 5px;
        box-sizing: border-box;
      }
    }
  }
</style>