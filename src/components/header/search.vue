<template>
	<el-row class="wrap clearfix w">
		<el-col :span="8">
			<router-link :to="'/index'">
				<img
					class="logo"
					src="https://s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png"
					alt=""
				/>
			</router-link>
		</el-col>
		<el-col class="inputWrap" :span="12">
			<el-autocomplete
				@input="changeInput"
				class="searchInput"
				popper-class="my-autocomplete"
				v-model="state"
				:fetch-suggestions="querySearch"
				placeholder="请输入内容"
				@select="handleSelect"
			>
				<template slot-scope="{ item }">
					<div class="name">{{ item.value }}</div>
				</template>
			</el-autocomplete>
			<router-link :to="{name:'searchRes'}">
				<div class="searchBtn">搜索</div>
			</router-link>
		</el-col>
	</el-row>
</template>

<script>
export default {
	data() {
		return {
			restaurants: [],
			isHot: true,
			state: "",
		};
	},
	methods: {
		querySearch(queryString, cb) {
			var restaurants = this.restaurants;
			var results = queryString
				? restaurants.filter(this.createFilter(queryString))
				: restaurants;
			// 调用 callback 返回建议列表的数据
			cb(results);
		},
		changeInput(e) {
			console.log(e);
		},
		createFilter(queryString) {
			return (restaurant) => {
				return (
					restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
					0
				);
			};
		},
		loadAll() {
			return [
				{ value: "如家酒店" },
				{ value: "炉匠烤鱼" },
				{ value: "海底大世界" },
				{ value: "七天连锁酒店" },
				{ value: "火锅" },
				{ value: "北京烤鸭" },
			];
		},
		handleSelect(item) {
			console.log(item);
		},
	},
	mounted() {
		this.restaurants = this.loadAll();
	},
};
</script>
<style scoped lang="less">
.wrap {
	padding-top: 40px;
	padding-bottom: 64px;
	.logo {
		width: 150px;
	}
	.inputWrap {
		margin-top: 10px;
	}
	.searchInput {
		width: 450px;
		float: left;
		outline: none;
		box-sizing: border-box;
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
		input {
			outline: none;
			border-color: #666 !important;
		}
		input:focus {
			outline: none;
			border-color: #666 !important;
		}
	}
	.searchBtn {
		float: left;
		cursor: pointer;
		position: relative;
		height: 42px;
		margin-top: -1px;
		line-height: 40px;
		text-align: center;
		box-sizing: border-box;
		background-color: #ffc300;
		padding: 0 30px;
		margin-left: -5px;
		z-index: 10;
		border-radius: 0 10px 10px 0;
	}
}
</style>