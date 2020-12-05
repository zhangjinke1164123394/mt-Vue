<template>
	<div class="detailComment">
		<h3>评论区</h3>
		<el-card class="box-card">
			<div v-for="o in 4" :key="o" class="comItem">
				<el-row >
					<el-col :span="2">
						<img
							class="userImg"
							src="//s3plus.meituan.net/v1/mss_65766da973d14523b3d781fe3ac2bbac/www-assets/shared/images/avatar-default-ved645e79.png"
							alt=""
						/>
					</el-col>
					<el-col :span="22">
						<div class="comMain">
							<div class="name">alibba</div>
							<div class="gradeWrap">
								<el-rate :value="4" class="grade"> </el-rate>
								<span class="comTime">2020-12-2</span>
							</div>
							<div class="comText">
								什么时候快乐呢,我觉得离开互联网会超级快乐,出来玩就像逃,
								逃吧.那么民宿,大概就是,逃跑路上的小小驿站
							</div>
						</div>
					</el-col>
				</el-row>
			</div>
		</el-card>
	</div>
</template>
<style scoped lang="less">
.detailComment {
  .comItem {
    margin-top: 15px;
  }
	.userImg {
		width: 60px;
		height: 60px;
		border-radius: 50%;
  }
  .grade {
    display: inline-block;
    margin-right: 10px;
  }
  .comTime {
    font-size: 14px;
    color: #666;
  }
  .gradeWrap {
    margin: 5px 0;
  }
}
</style>