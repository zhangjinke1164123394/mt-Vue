<template>
	<div class="userArea">
		<div>
			<img
				class="userAgent"
				src="//s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg"
				alt=""
			/>
		</div>

		<div v-if="!isLogin">
			<div>
				<router-link :to="{ name: 'regiest' }">注册</router-link>
			</div>
			<div>
				<router-link :to="{ name: 'login' }">登录</router-link>
			</div>
		</div>
		<div v-if="isLogin">
			<div>
				<span to="#">你好！{{ userName }}</span>
			</div>
			<div>
				<span class="outBtn" @click="outLogin">退出</span>
			</div>
		</div>
	</div>
</template>
<script>
import { mapState } from "vuex";
export default {
	data() {
		return {
			// isLogin: false,
		};
	},
	computed: {
		...mapState(["isLogin", "userName"]),
	},
	created() {
		// this.isLogin = isLogin
  },
  methods:{
    outLogin(){
      this.$store.commit('loginOut')
    }
  }
};
</script>
<style scoped lang="less">
.userArea {
	width: 185px;
	height: 250px;
	background-color: #fff;
	margin-top: 30px;
	margin-left: 117px;
	margin-bottom: 10px;
	float: left;
	.userAgent {
		margin-top: 40px;
		border-radius: 50%;
		height: 80px;
		cursor: pointer;
	}
	div {
		width: 100%;
		text-align: center;
		margin-top: 12px;
		a {
			cursor: pointer;
			display: inline-block;
			width: 55%;
			height: 30px;
			line-height: 30px;
			border-radius: 20px;
			background-color: #fff;
			border: 1px solid #ccc;
			&:hover {
				background-color: #eee;
			}
		}
  }
  .outBtn {
    display: inline-block;
    transform: translateY(3px);
    padding: 5px 20px;
    border: 1px solid #666;
    border-radius: 10px;
    cursor: pointer;
  }
}
</style>