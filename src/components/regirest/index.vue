<template>
	<div class="regirest w">
		<header class="header">
			<router-link to="/">
				<img
					class="headLeft"
					src="http://s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/logo.6a89007.png"
					alt=""
			/></router-link>

			<div class="headRight">
				<span>已有账号？</span
				><router-link :to="{ name: 'login' }">登录</router-link>
			</div>
		</header>
		<form-regiest></form-regiest>
	</div>
</template>
<script>
import formRegiest from "@/components/regirest/formRegiest";
export default {
	components: {
		formRegiest,
	},
};
</script>
<style scoped lang='less'>
.regirest {
  width: 992px;
  background-color: #fff;
  padding: 10px 20px 150px;
  margin-top: 50px;
  box-shadow: 5px 2px 8px #ccc;
  border-radius: 10px;
	.header {
		padding-top: 20px;
		display: flex;
		justify-content: space-between;
		// border-bottom: 1px solid #666;
	}
	.headLeft {
		width: 160px;
	}
	.headRight {
		margin-right: 180px;
		a {
			color: rgb(255, 102, 0);
		}
	}
}
</style>