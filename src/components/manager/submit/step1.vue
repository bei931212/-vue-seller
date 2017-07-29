<template>
	<div id="step1">
		<h3>基本信息</h3>
		<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
			<div class="step1Form">
			  <el-form-item label="企业名称" prop="companyName">
			    <el-input v-model="ruleForm.companyName"></el-input>
			  </el-form-item>
			</div>
			<div class="step1Form">
			  <el-form-item label="经营模式" prop="companyModel">
			    <el-radio-group v-model="ruleForm.companyModel">
			      <el-radio label="1">厂家</el-radio>
			      <el-radio label="2">代理</el-radio>
			    </el-radio-group>
			  </el-form-item>
			</div>
			<div class="step1Form">
			  <el-form-item label="企业联系人" prop="contactsName">
			    <el-input v-model="ruleForm.contactsName"></el-input>
			  </el-form-item>
			</div> 
			<div class="step1Form step1CompanyPhone">
			  <el-form-item label="负责人手机" prop="contactsPhone">
			    <el-input v-model="ruleForm.contactsPhone"></el-input>
			  </el-form-item>
			</div>  
			<div class="step1Form">
			  <el-form-item label="负责人微信" prop="contactsWx">
			    <el-input v-model="ruleForm.contactsWx"></el-input>
			  </el-form-item>
			</div>
			<div class="step1Form">
			  <el-form-item label="负责人QQ" prop="contactsQq">
			    <el-input v-model="ruleForm.contactsQq"></el-input>
			  </el-form-item>
			</div>  
			<div class="step1Form step1CompanyPhone">
			  <el-form-item label="企业电话" prop="companyPhone">
			    <el-input v-model="ruleForm.companyPhone"></el-input>
			  </el-form-item>
			</div>
			<div class="step1Area step1Form">
				<span>企业所在地</span>
				<div class="step1AreaAddress">
				  <el-select v-model="companyCountry" placeholder="请选择" @change="Country">
				    <el-option
				      v-for="item in optionsCountry"
				      :key="item.id"
				      :label="item.lable"
				      :value="item.name">
				    </el-option>
				  </el-select>
				</div>
				<div class="step1AreaAddress">
				  <el-select v-model="companyProvince" placeholder="请选择" @change="Province">
				    <el-option
				      v-for="item in optionsProvince"
				      :key="item.id"
				      :label="item.label"
				      :value="item.name">
				    </el-option>
				  </el-select>
				</div>
				<div class="step1AreaAddress">
				  <el-select v-model="companyCity" placeholder="请选择" @change="City">
				    <el-option
				      v-for="item in optionsCity"
				      :key="item.id"
				      :label="item.label"
				      :value="item.name">
				    </el-option>
				  </el-select>
				</div>
				<div class="step1AddressDetail step1Form">
				  	<el-form-item label="负责人QQ" prop="companyAddressDetail">
					   <el-input v-model="ruleForm.companyAddressDetail"></el-input>
					</el-form-item>
				</div>
			</div> 
			<div class="form_btn">
				<!-- <el-button style="margin-top: 12px;" @click="pre">上一步</el-button> -->
				<el-button style="margin-top: 12px;" @click="next('ruleForm')">下一步</el-button>
			</div>   
		</el-form>
	</div>
</template>

<script>
	import {district} from '../../../http/api.js'
	import {stepone} from '../../../http/api.js'
	export default{
		data(){
			let reg = /^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))|$/;
			let companyPhone=(rules, value, callback)=>{
				if(!value){
					callback(new Error('请输入企业电话'));
				}else if(!reg.test(value)){
					callback(new Error('请输入正确号码格式'));
				}else{	
					callback()
				}
			};
			let regPhone= /^0?(13[0-9]|15[012356789]|17[013678]|18[0-9]|14[57])[0-9]{8}$/;
			let contactsPhone=(rules, value, callback)=>{
				if(!value){
					callback(new Error('请输入负责人手机'));
				}else if(!regPhone.test(value)){
					callback(new Error('请输入正确手机号码'));
				}else{	
					callback()
				}
			}
			return{
				ruleForm:{
					companyName:'', //企业名称
					companyModel:'', //经营模式
					contactsName:'', //企业联系人
					contactsPhone:'', //负责人手机
					contactsWx:'', //负责人微信
					contactsQq:'', //负责人QQ
					companyPhone:'',//企业电话
					companyAddressDetail:'', //企业详细地址
					companyProvinceId:'', //企业所在地省ID
					companyCityId:'', //企业所在地市ID
				},
				rules:{
					 companyName: [
			            { required: true, message: '请输入企业名称', trigger: 'blur' },
			            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
			         ],
			         companyModel: [
			            { required: true, message: '请选择经营模式', trigger: 'change' }
			         ],
			         contactsName: [
			            { required: true, message: '请输入企业联系人', trigger: 'blur' },
			            { min: 2, max: 4, message: '长度在 2 到 4 个字符', trigger: 'blur' }
			         ],
			         contactsPhone: [
			            // { required: true, message: '请输入负责人手机', trigger: 'blur' },
			            // { min: 11, max: 11, message: '长度在 11 个字符', trigger: 'blur' }
			            {  validator: contactsPhone, trigger: 'blur' }
			         ],
			         contactsWx: [
			            { required: true, message: '请输入负责人微信', trigger: 'blur' },
			            { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
			         ],
			         contactsQq: [
			            { required: true, message: '请输入负责人QQ', trigger: 'blur' },
			            { min: 6, max: 10, message: '长度在 6 到 10 个字符', trigger: 'blur' }
			         ],
			         companyPhone: [
			            // { required: true, message: '请输入企业电话', trigger: 'blur' },
			            // { min: 4, max: 15, message: '长度在 4 到 15 个字符', trigger: 'blur' }
			            {  validator: companyPhone, trigger: 'blur' }
			         ],
			         companyAddressDetail: [
			            { required: true, message: '请输入企业详细地址', trigger: 'blur' },
			            { min: 6, max: 30, message: '长度在 6 到 30 个字符', trigger: 'blur' }
			         ],
				},
				companyCountry:'', //企业所在地国家
				companyCountryId:'', //企业所在地国家ID
				optionsCountry:[], //企业所在地国家数组
				companyProvince:'', //企业所在地省
				optionsProvince:[], //企业所在地省数组
				companyCity:'', //企业所在地市
				optionsCity:[], //企业所在地市数组
			}
		},
		created(){
			district().then((response)=>{
				console.log(response)
				this.optionsCountry=response.data.data
			})
		},
		methods:{
			Country(){
				for(let i=0;i<this.optionsCountry.length;i++){
					this.companyProvince='';
					if(this.optionsCountry[i].name===this.companyCountry){
						this.companyCountryId=this.optionsCountry[i].id;
						district({parentId:this.companyCountryId}).then((response)=>{
							this.optionsProvince=response.data.data
						})
					}
				}
			},
			Province(){
				for(let i=0;i<this.optionsProvince.length;i++){
					this.companyCity='';
					if(this.optionsProvince[i].name===this.companyProvince){
						this.ruleForm.companyProvinceId=this.optionsProvince[i].id;
						district({parentId:this.ruleForm.companyProvinceId}).then((response)=>{
							this.optionsCity=response.data.data
						})
					}
				}
			},
			City(){
				for(let i=0;i<this.optionsCity.length;i++){
					if(this.optionsCity[i].name===this.companyCity){
						this.ruleForm.companyCityId=this.optionsCity[i].id;
					}
				}
			},
			next(ruleForm){
        	this.$refs[ruleForm].validate((valid) => {
          		if (valid) {
						stepone(this.ruleForm).then((response)=>{
							if(response.data.success===false){
								//alert('信息不完整')
								this.$message.error(response.data.message);
							}else{
								this.$router.push({path:'/manager_home/submit/step2'})
							}
							
						})
          		} else {
            		console.log('error submit!!');
            		return false;
          		}
        	});
			},
		}
	}
</script>

<style>
	#step1{
		width: 100%;
	}
	#step1 h3{
		height: 50px;
		border-bottom: 1px solid #ddd;
		line-height: 50px;
		color: #888;
		padding-left:15px;
		font-size: 20px;
		background: #f5f5f5;
	}
	#step1 .step1Form{
		padding: 30px 0;
		border-bottom: 1px dashed #e4e4e3;
	}
	#step1 .el-form-item{
		margin-bottom: 0px;
	}
	#step1 .el-form-item__label{
		width: 195px !important;
		margin-right: 40px;
	}
	#step1 .el-input{
		width: 520px !important;
	}
	#step1 .el-form-item__error{
		margin-left: 135px;
	}
	#step1 .step1AreaAddress{
		display: inline-block;
		margin-right: 10px;
	}
	#step1 .step1Area span{
		display: inline-block;
		width: 183px;
		margin-right: 49px;
		text-align: right;
	}
	#step1 .step1Area span::before{
		content: '*';
		color: #ff4949;
		margin-right: 4px;
	}
	#step1 .step1Area .el-input{
		width: 111px !important;
	}
	#step1 .step1Area .step1AddressDetail{
		display: block;
		border-bottom: none;
	}
	#step1 .step1AddressDetail .el-form-item__label{
		display: none;
	}
	#step1 .step1AddressDetail .el-input{
		width: 520px !important;
		margin-left: 135px;
	}
	.step1CompanyPhone .el-form-item__label::before{
		content: '*';
	    color: #ff4949;
	    margin-right: 4px;
	}
</style>