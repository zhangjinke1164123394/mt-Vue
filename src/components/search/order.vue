<template>
	<div class="goodsOrder">
		<template>
			<h3>排序</h3>
			<el-radio-group class="group" v-model="radio">
        <el-radio :label="1">默认排序</el-radio>
				<el-radio @change='radChange("reverse")' :label="3">区域优先</el-radio>
				<el-radio @change='radChange("reduse")' label="reduse">价格降序</el-radio>
				<el-radio  @change='radChange("increase")' label="increase" >价格升序</el-radio>
				<el-radio @change='radChange("reverse")' :label="12">好评优先</el-radio>
			</el-radio-group>
		</template>
	</div>
</template>
<script>
export default {
	data(){
    return {
      radio: 1
    }
  },
  methods:{
    radChange(e){
      console.log(e)
      this.$emit('radChange',e)
    }
  }
};
</script>
<style scoped>
.group {
	transform: translateX(50px);
}
</style>
