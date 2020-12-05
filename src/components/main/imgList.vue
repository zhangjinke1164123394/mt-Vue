<template>
	<div class="imgList">
		<router-link class="linkImg" :to="{name:'searchRes'}">
			<img
				class="img"
				src="http://p1.meituan.net/codeman/8cce56c467a17e04f3094d1e455462a0132772.png"
				alt=""
		/></router-link>
		<router-link class="linkImg" :to="{name:'searchRes'}">
			<img
				class="img"
				src="http://p1.meituan.net/codeman/16442c19da1f1c4544f794e29d99c92051716.jpg"
				alt=""
		/></router-link>
		<router-link class="seller" :to="{name:'searchRes'}">
			<img
				class="img"
				src="http://p1.meituan.net/codeman/5b21cddb4bb1cbc3a9c3bce0f726c75940469.jpg"
				alt=""
		/></router-link>
		<router-link
			class="maWrap"
			:to="{name:'searchRes'}"
			style="background-color: #fff; text-align: center"
		>
			<img
				class="ma"
				src="//s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png"
				alt=""
			/>
			<div>美团APP手机版</div>
			<span style="color: red"> 1元起 </span>
			<span> 吃喝玩乐 </span>
		</router-link>
	</div>
</template>
<style scoped lang="less">
.imgList {
	width: 100%;
	display: flex;
	justify-content: left;
	margin-top: 0px;
	margin-left: -65px;
	.seller {
    margin-left: 10px;
		img {
			width: 150px;
			height: 160px;
		}
	}
	.linkImg {
    width: 274px;
		margin-left: 10px;
		display: inline-block;
		.img {
      width: 100%;
      height: 160px;
		}

  }
  .maWrap {
    width: 200px;
    margin-left: 10px;
		display: inline-block;
  }
	.ma {
		width: 100px;
		margin-top: 10px;
	}
}
</style>