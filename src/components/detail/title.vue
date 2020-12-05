<template>
	<div class="title">
		<h3>【九月●美宿】NO.4/浓浓北欧情/鼓楼/古文化街/100寸投影</h3>
		<el-tag class="tag" v-for="item in tagList" :key="item">{{item}}</el-tag>
	</div>
</template>
<script>
export default {
  props:{
    tagList:Array
  },
  data(){
    return {
      
    }
  }
}
</script>
<style scoped>
.tag {
  margin-right: 10px;
}
</style>