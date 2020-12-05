<template>
	<div>
		<div style="margin: 20px"></div>
		<el-form
			:label-position="labelPosition"
			label-width="180px"
			:model="formLabelAlign"
		>
			<el-form-item label="账号:">
				<el-input v-model="formLabelAlign.mobileNum"></el-input>
			</el-form-item>
			<el-form-item label="密码:">
				<el-input type="password" v-model="formLabelAlign.password"></el-input>
			</el-form-item>
			<div class="toReg">
				还没有账号？<router-link class="regBtn" :to="{ name: 'regiest' }"
					>免费注册</router-link
				>
			</div>
			<el-form-item>
				<el-button
					class="btn"
					type="primary"
					@click="submitForm('formLabelAlign')"
					>提交</el-button
				>
				<el-button class="btn" @click="resetForm('formLabelAlign')"
					>重置</el-button
				>
			</el-form-item>
		</el-form>
	</div>
</template>
<script>
import axios from 'axios'
axios.defaults.baseURL='https://open.duyiedu.com'
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  });
export default {
	data() {
		return {
			labelPosition: "right",
			formLabelAlign: {
				mobileNum: "",
				password: "",
			},
		};
	},
	methods: {
		submitForm(formName) {
      // let self = this
			if (this[formName]["mobileNum"] && this[formName]["password"]) {
				axios.get('/api/meituan/login',{
          params:{
            userName:this[formName].mobileNum,
            password:this[formName].password,
            appkey:'zjk123123_1588247785619'
          }
        }).then(res=>{
          // console.log(res)
          if(res.status == 'success'){
            this.$router.push({
              path:'/'
            })
          this.$store.commit('login',this.formLabelAlign.mobileNum)
          }else{
            alert(res.msg)
          }
        })
			} else {
				alert("输入的信息不完整");
			}
		},
		resetForm(formName) {
			this[formName]["mobileNum"] = "";
			this[formName]["password"] = "";
		},
	},
};
</script>
<style scoped lang='less'>
.btn {
	margin-top: 15px;
	width: 120px;
	margin-right: 30px;
}
.toReg {
	font-size: 14px;
	margin-left: 350px;
}
.regBtn {
	color: red;
}
</style>