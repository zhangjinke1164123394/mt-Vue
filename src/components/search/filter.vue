<template>
	<div class="goodsFilter">
		<div>
			<h3>分类</h3>
			<el-checkbox-group class="filterCon" v-model="checkboxGroup1">
				<el-checkbox-button
					v-for="item in goodsFilterList"
					:label="item"
					:key="item"
					>{{ item }}</el-checkbox-button
				>
			</el-checkbox-group>
		</div>
		<!-- <div>
				<h4>区域</h4>
				<el-checkbox-group class="filterCon" v-model="checkboxGroup1">
					<el-checkbox-button
						v-for="item in goodsFilterList"
						:label="item"
						:key="item"
						>{{ item }}</el-checkbox-button
					>
				</el-checkbox-group>
			</div> -->
	</div>
</template>
<script>
export default {
	data() {
		return {
			checkboxGroup1: ["全部"],
			goodsFilterList: [
				"全部",
				"美食",
				"酒店",
				"住宿",
				"周边游",
				"休闲娱乐",
				"生活服务",
				"旅游",
				"母婴亲子",
				"汽车服务",
				"学习培训",
				"结婚",
			],
		};
	},
};
</script>
<style scoped>
.filterCon {
	transform: translateX(50px);
}
</style>