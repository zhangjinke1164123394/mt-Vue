<template>
	<div class="formReg">
		<el-form
			:model="dynamicValidateForm"
			ref="dynamicValidateForm"
			label-width="auto"
			class="demo-dynamic"
		>
			<el-form-item
				prop="iphone"
				label="账号"
				:rules="[{ required: true, message: '请输入账号', trigger: 'blur' }]"
			>
				<el-input v-model="dynamicValidateForm.iphone"></el-input>
			</el-form-item>
			<!-- <el-form-item
				:label="'动态验证码'"
				:prop="'movePas'"
				:rules="{
					required: true,
					message: '请输入动态验证码',
					trigger: 'blur',
				}"
			>
				<el-input v-model="dynamicValidateForm.movePas"></el-input>
        <el-button type="primary" class="getMovePs">点击获取</el-button>
			</el-form-item> -->
			<el-form-item
				:label="'密码'"
				:prop="'password'"
				:rules="{
					required: true,
					message: '请输入密码',
					trigger: 'blur',
				}"
			>
				<el-input
					type="password"
					v-model="dynamicValidateForm.password"
				></el-input>
			</el-form-item>
			<el-form-item
				:label="'再次输入'"
				:prop="'rePassword'"
				:rules="{
					required: true,
					message: '请再次输入密码',
					trigger: 'blur',
				}"
			>
				<el-input
					type="password"
					v-model="dynamicValidateForm.rePassword"
				></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="submitForm('dynamicValidateForm')"
					>提交</el-button
				>
				<el-button @click="resetForm('dynamicValidateForm')">重置</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>
<script>
import axios from 'axios'
axios.defaults.baseURL='https://open.duyiedu.com'
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response.data;
  });
export default {
	data() {
		return {
			dynamicValidateForm: {
				movePas: "",
				iphone: "",
				password: "",
				rePassword: "",
			},
		};
	},
	methods: {
		submitForm(formName) {
				if (this[formName].password != this[formName].rePassword) {
					alert("两次输入的密码不一致");
				} else {
					axios.get('/api/meituan/register',{
            params:{
              userName:this.dynamicValidateForm.iphone,
              password:this.dynamicValidateForm.password,
              rePassword:this.dynamicValidateForm.password,
              appkey:'zjk123123_1588247785619'
            }
          }).then(res=>{
            
            alert(res.msg)
          })
				}
			}
		},
		resetForm(formName) {
			this.$refs[formName].resetFields();
		},
};
</script>
<style scoped>
 .demo-dynamic {
   padding-top: 50px;
   padding-right: 600px;
 }
 .getMovePs {
   position: absolute;
   margin-left: 10px;
 }
</style>