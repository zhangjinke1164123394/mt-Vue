<template>
	<div class="myNav w">
		<div class="wrap">
			<nav-head :theme="theme" @changeNav="handleChangeNav"></nav-head>
			<nav-con :detail="showData"></nav-con>
		</div>
		<div class="wrap">
			<nav-head :theme="themeT" @changeNav="handleFoodChangeNav"></nav-head>
			<nav-con :detail="foodData"></nav-con>
		</div>
	</div>
</template>
<script>
import navHead from "./navHead";
import navCon from "./navCon";
import data from "../../assets/navListData.js";
console.log(data)
export default {
	data() {
		return {
      showData: data.data,
      foodData: data.dataTwo,
			theme: {
				color: "red",
				title: "特价酒店",
				list: [
					{
						value: "豪华四星级",
					},
					{
						value: "浪漫主题",
					},
					{
						value: "豪华商务",
					},
					{
						value: "娱乐电竞",
					},
				],
			},
      themeT: {
      color: "rgb(216, 132, 6)",
      title: "美食天地",
      list: [
        {
          value: "纸包鱼",
        },
        {
          value: "烧烤",
        },
        {
          value: "豪华炒菜",
        },
        {
          value: "自助火锅",
        },
      ],
    },
		};
	},
	methods: {
		handleChangeNav(e) {
			console.log(e);
			this.showData.reverse();
    },
    handleFoodChangeNav(e) {
			console.log(e);
			this.foodData.reverse();
		},
	},
	components: {
		navHead,
		navCon,
	},
};
</script>
<style scoped>
  .wrap {
    margin-top: 20px;
  }
</style>

