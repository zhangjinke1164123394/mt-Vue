<template>
	<div class="bannerArea">
		<el-carousel
			trigger="click"
			height="250px"
			style="width: 518px; padding-top: 30px; margin-left: -55px"
		>
			<el-carousel-item v-for="item in imgList" :key="item">
				<router-link :to="{ name: 'detail' }">
					<img :src="item" alt="" class="bannerImg" />
				</router-link>
			</el-carousel-item>
		</el-carousel>
		<router-link :to="{ name: 'searchRes' }" class="lift">
			<img
				src="http://p0.meituan.net/codeman/e473bb428f070321269b23370ff02ba956209.jpg"
				alt=""
			/>
		</router-link>
	</div>
</template>

<script>
export default {
	data() {
		return {
			imgList: [
				"https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png",
				"http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg",
				"http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg",
				"http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg",
			],
		};
	},
};
</script>
<style scoped>
.bannerArea {
	position: relative;
}
.bannerImg {
	width: 518px;
	height: 250px;
}
.lift img {
	width: 150px;
	height: 250px;
	/* position: absolute; */
}
.lift {
	position: absolute;
	top: 30px;
	right: -107px;
}
</style>