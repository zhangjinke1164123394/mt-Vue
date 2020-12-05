<template>
	<div class="search">
		<el-card class="box-card">
			<goods-filter></goods-filter>
			<goods-order @radChange="radChange"></goods-order>
			<goods-list :goodsData="goodsData"></goods-list>
		</el-card>
	</div>
</template>
<script>
import goodsFilter from "./filter";
import goodsOrder from "./order";
import goodsList from "@/components/search/goodsList";
import goodsData from "../../assets/goodsList";
export default {
	components: {
		goodsFilter,
		goodsOrder,
		goodsList,
	},
	data() {
		return {
			goodsData,
		};
	},
	methods: {
		radChange(e) {
			if (e == "reduse") {
				this.goodsData.sort((a, b) => {
					return a.price - b.price;
				});
			} else if (e == "increase") {
				this.goodsData.sort((a, b) => {
					return b.price - a.price;
				});
			} else if (e == 'reverse') {
        this.goodsData.reverse()
      }
		},
	},
};
</script>