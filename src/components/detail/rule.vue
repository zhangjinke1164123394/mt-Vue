<template>
	<div class="detailRule">
		<h3>入住须知</h3>
		<el-card class="box-card">
			<div class="ruleCon">
				<ul>
					<li v-for="(item, index) in ruleList" :key="item + index">
						<h5>{{ item.title }}</h5>
						<div>
							{{ item.content }}
						</div>
					</li>
				</ul>
			</div>
		</el-card>
	</div>
</template>
<script>
export default {
	props: {
		ruleList: Array,
	},
};
</script>
<style scoped lang="less">
.detailRule {
	margin-top: 15px;
	.ruleCon {
		transform: translateX(10px);
		div {
			transform: translateX(10px);
			font-size: 14px;
		}
	}
}
</style>