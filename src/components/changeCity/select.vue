<template>
	<div class="select">
		<el-row type="flex">
			<el-col :span="2">按省份选择:</el-col>
			<el-col :span="14">
				<el-select
					style="margin-right: 10px"
					v-model="ProValue"
					placeholder="请选择省份"
				>
					<el-option
						v-for="item in Provices"
						:key="item.provinceCode"
						:label="item.provinceName"
						:value="item.provinceName"
						:data-childres="item.cityInfoList"
					>
						<span style="float: left">{{ item.provinceName }}</span>
					</el-option>
				</el-select>
				<el-select
					style="margin-right: 10px"
					v-model="cityValue"
					placeholder="请选择城市"
          @change="proviceChange"
				>
					<el-option
						v-for="item in cities"
						:key="item.id"
						:label="item.name"
						:value="item.name"
					>
						<span style="float: left">{{ item.name }}</span>
					</el-option>
				</el-select>
			</el-col>
			<el-col :span="2">直接搜索：</el-col>
			<el-col :span="3">
				<el-select
					v-model="tvalue"
					multiple
					filterable
					remote
					reserve-keyword
					placeholder="请输入关键词"
					:remote-method="remoteMethod"
					:loading="loading"
				>
					<el-option
						v-for="item in options"
						:key="item.value"
						:label="item.label"
						:value="item.label"
					>
					</el-option>
				</el-select>
			</el-col>
		</el-row>
	</div>
</template>
<script>
import axios from "axios";
axios.defaults.baseURL = "https://open.duyiedu.com";
export default {
	data() {
		return {
			options: [],
			tvalue: [],
			list: [],
			loading: false,
			states: [
				"Alabama",
				"Alaska",
				"Arizona",
				"Arkansas",
				"California",
				"Colorado",
				"Wyoming",
			],
			Provices: [],
			cities: [],
			// downCites: [],
			ProValue: "",
			cityValue: "",
			// downCityValue: "",
		};
	},
	watch: {
		ProValue(e, n) {
			console.log(e, n);
			for (let i = 0; i < this.Provices.length; i++) {
				// console.log(i)
				if (this.Provices[i].provinceName == e) {
					console.log(i);
					this.cities = this.Provices[i].cityInfoList;
				}
			}
		},
	},
	methods: {
		proviceChange() {
			this.$store.commit("changeCity", {
				provice: this.ProValue,
				city: this.cityValue,
      });
      this.$router.push({
        path:'/'
      })
		},
		remoteMethod(query) {
			if (query !== "") {
				this.loading = true;
				setTimeout(() => {
					this.loading = false;
					this.options = this.list.filter((item) => {
						return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1;
					});
				}, 200);
			} else {
				this.options = [];
			}
		},
	},
	created() {
		axios
			.get("/api/meituan/city/province.json", {
				params: {
					appkey: "zjk123123_1588247785619",
				},
			})
			.then((res) => {
				console.log(res.data);
				this.Provices = res.data.data;
			});
	},
};
</script>
<style scoped>
.select {
	line-height: 40px;
}
</style>
