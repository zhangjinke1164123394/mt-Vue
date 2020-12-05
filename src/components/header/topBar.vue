<template>
	<div class="topBar">
		<el-row>
			<el-col :span="14">
				<div class="left">
					<i class="el-icon-caret-bottom"></i>
					<span to="#" style="cursor: default"> {{nowCity}} </span>
					<router-link :to="{name: 'changeCity'}" class="changeCity"> 切换城市 </router-link>
					[
					<router-link to="#"> {{nowProvice == nowCity? '' :nowProvice}} </router-link>
					<router-link to="#"> {{nowCity}} </router-link>
					<!-- <router-link to="#"> {{nowDownCity}} </router-link> -->
					]
					<router-link class="login" to="/login"> 立即登录 </router-link>
					<router-link to="regiest"> 注册 </router-link>
				</div>
			</el-col>
			<el-col :span="10">
				<ul class="topRight">
					<li>
						<router-link to="#">我的美团</router-link>
						<dd>
							<dl>
								<router-link to="#">我的订单</router-link>
							</dl>
							<dl>
								<router-link to="#">我的收藏</router-link>
							</dl>
							<dl>
								<router-link to="#">抵用券</router-link>
							</dl>
							<dl>
								<router-link to="#">账户设置</router-link>
							</dl>
						</dd>
					</li>
					<li>
						<router-link to="#">手机APP</router-link>
					</li>
					<li>
						<router-link to="#">商家中心</router-link>
						<dd>
							<dl>
								<router-link to="#">登录商家中心</router-link>
							</dl>
							<dl>
								<router-link to="#">美团智能收银</router-link>
							</dl>
							<dl>
								<router-link to="#">我想合作</router-link>
							</dl>
							<dl>
								<router-link to="#">手机免费开店</router-link>
							</dl>
							<dl>
								<router-link to="#">商家申请开发票</router-link>
							</dl>
						</dd>
					</li>
					<li>
						<router-link to="#">美团规则</router-link>
						<dd>
							<dl>
								<router-link to="#">规则中心</router-link>
							</dl>
							<dl>
								<router-link to="#">规则目录</router-link>
							</dl>
							<dl>
								<router-link to="#">规则细则</router-link>
							</dl>
							<dl>
								<router-link to="#">提出意见</router-link>
							</dl>
						</dd>
					</li>
					<li>
						<router-link to="#">网站导航</router-link>
						<dd>
							<dl>
								<router-link to="#">我的订单</router-link>
							</dl>
							<dl>
								<router-link to="#">我的收藏</router-link>
							</dl>
							<dl>
								<router-link to="#">抵用券</router-link>
							</dl>
							<dl>
								<router-link to="#">账户设置</router-link>
							</dl>
						</dd>
					</li>
				</ul>
			</el-col>
		</el-row>
	</div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed:{
    ...mapState(['nowCity','nowProvice','nowDownCity'])
  }
};
</script>


<style scoped lang="less">
.topBar {
	height: 40px;
	color: #666;
	font-size: 13px;
	.left {
		line-height: 40px;
		padding-left: 20px;
		.changeCity {
			margin: 0 5px;
			line-height: 20px;
			display: inline-block;
			padding: 1px 3px;
			border: 1px solid #666;
			border-radius: 3px;
			cursor: pointer;
			&:hover {
				color: #fe8c00;
			}
		}
		.login {
			color: #fe8c00;
			margin: 0px 10px;
		}
	}
	a {
		&:hover {
			color: #fe8c00;
		}
	}
	.topRight {
		// overflow: hidden;
		margin: 0;
		padding: 0;
		padding-left: 60px;
		li {
			float: left;
			padding: 0 10px;
			position: relative;
      line-height: 40px;  
			a {
				display: block;
			}
			dd {
				margin: 0 auto;
				// width: 100%;
				z-index: 999;
				text-align: center;
				display: none;
				background-color: #fff;
				width: auto;
				padding: 0 10px;
				white-space: nowrap;
				margin-top: 10px;
				margin-left: -10px;
				box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
				position: absolute;
				top: 28px;
				dl {
					margin: 0;
					a {
						white-space: nowrap;
					}
					line-height: 40px;
				}
			}
			&:hover {
				background-color: #fff;
				box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
				dd {
					display: block;
				}
			}
		}
	}
}
</style>
