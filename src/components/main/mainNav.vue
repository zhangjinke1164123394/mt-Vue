<template>
	<div class="mainNav">
		<ul class="navList">
			<li>
				<router-link :to="{name:'searchRes'}"> 美食天地 </router-link>
			</li>
			<li><router-link :to="{name:'searchRes'}"> 电影赏析 </router-link></li>
			<li><router-link :to="{name:'searchRes'}"> 酒店住宿 </router-link></li>
			<li><router-link :to="{name:'searchRes'}"> 出行无忧 </router-link></li>
			<li><router-link :to="{name:'searchRes'}"> 商家入驻 </router-link></li>
			<li><router-link :to="{name:'searchRes'}"> 公益资助 </router-link></li>
		</ul>
	</div>
</template>
<style scoped lang="less">
.mainNav {
  margin-top: -15px;
  position: relative;
  z-index: 100;
	.navList {
		li {
      cursor: pointer;
			float: left;
			margin-left: 30px;
			line-height: 40px;
			font-size: 17px;
			font-weight: 550;
			a:hover {
				color: #e26601;
			}
		}
	}
}
</style>