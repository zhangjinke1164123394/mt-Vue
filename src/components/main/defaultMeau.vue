<template>
	<div class="deMeau">
		<h3 style="margin-left: 10px">全部分类</h3>
		<ul class="meauList">
			<li
				style="cursor: pointer"
				v-for="(item, index) of meauList"
				:key="index + '' + item"
				@mouseenter="mouseEnter(item, index)"
				@mouseleave="mouseLeave"
			>
				<div class="itemTitle">
					<i :class="item.icon"></i>
					{{ item.title }}
					<i
						style="
							float: right;
							padding-right: 10px;
							line-height: 25px;
							color: #999;
						"
						class="el-icon-arrow-right"
					></i>
				</div>
			</li>
		</ul>
		<dl
			@mouseenter="DeMouseEnter"
			@mouseleave="mouseLeave"
			v-show="isEnter"
			class="hideDetail"
		>
			<template v-for="(v, i) in DetailList">
				<dt :key="i + v.title">{{ v.title }}</dt>

				<template v-for="t in v.childrens">
					<dd :key="t.id + t.value">
						<router-link :to="{name:'searchRes'}">
							{{ t.value }}
						</router-link>
					</dd>
				</template>
			</template>
		</dl>
	</div>
</template>
<script>
import meauList from "../../assets/meau.js";
import axios from "axios";
axios.defaults.baseURL = "https://open.duyiedu.com";
export default {
	data() {
		return {
			isEnter: false,
			DetailList: [],
			meauList: meauList,
		};
	},
	created() {
		axios
			.get("/api/meituan/index/nav.json", {
				params: { appkey: "zjk123123_1588247785619" },
			})
			.then((res) => {
        // console.log(res);
        res
			});
	},
	methods: {
		mouseEnter(e) {
			clearTimeout(this.timer);
			this.isEnter = true;
			this.DetailList = e.childrens;
			console.log(e);
		},
		mouseLeave() {
			let self = this;

			this.timer = setTimeout(() => {
				self.isEnter = false;
			}, 200);
		},
		DeMouseEnter() {
			clearTimeout(this.timer);
		},
	},
};
</script>
<style scoped lang="less">
.deMeau {
	height: 490px;
	width: 226px;
	// padding-left: 10px;
	border: 1px solid #eee;
	box-shadow: 0 5px 5px #ccc;
	background-color: #fff;
	position: relative;
	margin-top: -15px;
	li {
		height: 28px;
		position: relative;
		line-height: 28px;
		font-size: 14px;
		&:hover {
			background-color: #fdf1e4;
		}
	}
	.itemTitle {
		padding-left: 5px;
	}
	.hideDetail {
		background-color: #fff;
		width: 500px;
		height: 400px;
		margin-left: 227px;
		padding-left: 20px;
		padding-right: 20px;
		box-sizing: border-box;
		padding-top: 10px;
		// border: 1px solid #ccc;
		position: absolute;
		top: 40px;
		box-shadow: 0 0 5px #ccc;
		z-index: 99;
		dt {
			font-size: 18px;
			font-weight: 500;
			margin-top: 20px;
			margin-bottom: 10px;
			padding-bottom: 10px;
			border-bottom: 1px solid #ccc;
		}
		dd {
			margin: 0 0 0 15px;
			line-height: 28px;
			font-size: 14px;
			display: inline-block;
			a:hover {
				color: #ff8800;
			}
		}
	}
}
</style>