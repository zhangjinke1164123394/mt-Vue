<template>
	<div class="login w">
		<div class="loginLogo">
			<router-link :to="{ name: 'defaultPage' }">
				<img
        class="loginImg"
					src="http://s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/logo.6a89007.png"
					alt=""
				/>
			</router-link>
		</div>
		<el-row :gutter="10">
			<el-col :span="12">
				<login-left></login-left>
			</el-col>
			<el-col :span="12">
				<login-right></login-right>
			</el-col>
		</el-row>
	</div>
</template>
<script>
import loginLeft from "./left";
import loginRight from "./right";
export default {
	components: {
		loginLeft,
		loginRight,
	},
};
</script>
<style scoped lang='less'>
.login {
  width: 992px;
  .loginLogo {
  padding: 40px 0;
  .loginImg {
    width: 140px;
  }
}
}

</style>