<template>
	<div class="detailServe">
		<h3>设施服务</h3>
		<el-row  >
			<el-col :span="4" v-for="(item,index) in serveList" :key="item + index">
				<el-card class="cardItem" shadow="hover"> {{index+1 }}.&nbsp;&nbsp;{{item}} </el-card>
			</el-col>
			<!-- <el-col :span="3">
				<el-card shadow="hover"> 营养早餐 </el-card>
			</el-col>
			<el-col :span="3">
				<el-card shadow="hover"> 24小时热水 </el-card>
			</el-col> -->
		</el-row>
	</div>
</template> 
<script>
export default {
  data(){
    return {
      serveList:[
        '1.8米大床',
        '美味早餐',
        '24小时热水',
        '高清影视',
        '全屋地暖',
        '1.8米大床',
        '美味早餐',
        '24小时热水',
        '高清影视',
        '全屋地暖',
        '1.8米大床',
        '美味早餐',
        '24小时热水',
        '高清影视',
        '全屋地暖',
      ]
    }
  }
}
</script>
<style scoped>
.cardItem {
  margin-top: 10px;
  margin-right: 10px;
  box-sizing: border-box;
}
</style>