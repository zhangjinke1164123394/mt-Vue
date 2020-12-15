<template>
	<div class="goodsList">
		<h3>列表</h3>
		<div class="itemWrap">
			<ul>
				<li v-for="(item,index) in goodsData" :key="index" class="listItem">
					<router-link :to="{ name: 'detail' }">
						<el-row :gutter="10">
							<el-col :span="6">
								<img
                class="lazyImg"
									style="border-radius: 4px"
									:data-src="item.img"
									alt=""
								/>
							</el-col>
							<el-col :span="18">
								<div class="name">{{item.name}}</div>
								<el-rate
									v-model="value"
									disabled
									show-score
									text-color="#ff9900"
									score-template="{value}"
								>
								</el-rate>
								<div class="address">{{item.des}}</div>
								<div class="price">￥{{item.price}}</div>
							</el-col>
						</el-row>
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>

export default {
  props:{
    goodsData:Array
  },
	data() {
		return {
      value: 5,
		};
	},
};
</script>
<style scoped lang='less'>
.itemWrap {
  .listItem {
    img {
      width: 275px;
      height: 156px;
    }
    margin-bottom: 12px;
  }
	.name,
	.address,
	.price {
		line-height: 45px;
	}
	.price {
		color: red;
		font-size: 18px;
	}
}
</style>
