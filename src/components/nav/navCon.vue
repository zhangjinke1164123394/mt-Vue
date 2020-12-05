<template>
	<div class="navCon">
		<el-card class="box-card">
			<router-link :to="{name:'detail'}">
				<div v-for="item in detail" :key="item.id" class="wrap">
					<img class="conImg" :src="item.img" alt="" />
					<div class="text">
						<div class="conTitle">
							{{ item.title }}
						</div>
						<div class="conDes">{{ item.des }}</div>
						<div class="price">￥{{ item.price }}</div>
					</div>
				</div>
			</router-link>
		</el-card>
	</div>
</template>
<script>
export default {
	props: {
		detail: Array,
	},
};
</script>
<style scoped lang="less">
.navCon {
	.box-card {
		padding: 0;
		margin: 0;
	}
	.wrap {
		width: 32%;
		float: left;
		margin-left: 12px;
		margin-bottom: 10px;
		.conImg {
			width: 100%;
			height: 250px;
			border-radius: 5px;
		}
		.text {
			padding-left: 10px;
			.conTitle {
				width: 85%;
				white-space: nowrap;
				text-overflow: ellipsis;
				overflow: hidden;
				margin-bottom: 5px;
			}
			.conDes {
				color: #666;
				font-size: 12px;
				margin-bottom: 5px;
			}
			.price {
				font-size: 20px;
				color: rgb(223, 0, 0);
			}
		}
	}
}
</style>