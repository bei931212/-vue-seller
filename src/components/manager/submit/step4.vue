<template>
	<div class="accountInfo">   
		<div class='cover' v-show='coverShow'>
			<p>请选择您的账户信息性质</p>
			<div>
				<el-button class="company" @click='companyAccount'>公司账户</el-button>
				<el-button class="people" @click='peopleAccount'>法人法定账户</el-button>
			</div>
		</div> 
		<p class="accountTitle"><span>账户信息</span><i v-show='choseShow'>（公司账户）</i><i v-show='!choseShow'>（法人法定账户）</i><b @click='reselect'>重新选择</b></p>
		<el-form ref="form" :model="form" :rules="rules" label-width="210px">
			<div class="labelBox" prop="name">
				<el-form-item label="持卡人" prop="name">
				    <el-input v-model="form.name"></el-input>
				</el-form-item>
			</div>
			<div class="labelBox">
				<el-form-item label="银行名称"  prop="bank">
				    <el-input v-model="form.bank"></el-input>
				</el-form-item>
			</div>
			<div class="labelBox">
				<el-form-item label="银行账号" prop="number">
				    <el-input v-model="form.number"></el-input>
				</el-form-item>
			</div>
			<div class="labelBox lastBox">
				<el-form-item label="开户行地址" prop="address">
				    <el-input v-model="form.address"></el-input>
				</el-form-item>
			</div>
			<div class="form_btn">
				<el-button style="margin-top: 12px;" @click="pre">上一步</el-button>
				<el-button style="margin-top: 12px;" @click="next('form')">下一步</el-button>
			</div>
		</el-form>
	</div>
</template>
<script>
import {stepfour} from '../../../http/api'
export default {
    data() {
    	//自定义的定义持卡人的错误提示
    	var checkPeopleName= (rule, value, callback) => {
        	if (!value) {
          		return callback(new Error('持卡人姓名不能为空'));
        	}
        	setTimeout(() => {
				var reg = /^[\u4E00-\u9FA5]+$/; 
				if(reg.test(value)){
					if(value.length>=2&&value.length<=5){
						callback()
			 		}else{
			 			callback(new Error('请输入正确的持卡人姓名'));
			 		}
				}else{
					callback(new Error('请输入正确的持卡人姓名'));
				}

       		 }, 10);
      	};
      	//自定义的定义银行名称的错误提示
    	var checkBankName= (rule, value, callback) => {
        	if (!value) {
          		return callback(new Error('银行名称不能为空'));
        	}
        	setTimeout(() => {
				var reg = /^[\u4E00-\u9FA5]+$/; 
				if(reg.test(value)){
			 			callback();
				}else{
					callback(new Error('请输入正确的银行名称'));
				}
       		 }, 10);
      	};
    	//自定义的定义银行账户的错误提示
    	var checkNumber = (rule, value, callback) => {
        	if (!value) {
          		return callback(new Error('银行账户不能为空')); 
        	}
        	setTimeout(() => {
        		if(Number(value)==NaN){
        			callback(new Error('请输入数字值'));
        		}else{
        			if (value.length>21||value.length<18) {
        				if(value.length==16){
							callback();
        				}else{
        					callback(new Error('请输入正确的卡号'));
        				}
            		} else {
              			callback();
            		}
        		}
       		 }, 10);
      	};

      	var checkAddress= (rule, value, callback) => {
        	if (!value) {
          		return callback(new Error('银行地址不能为空'));
        	}
        	setTimeout(() => {
        		var re = /[\u4e00-\u9fa5]/;  
        		if(re.test(value)){
        			callback();
        		}else{
        			callback(new Error('请输入正确的银行地址'));
        		}
       		 }, 10);  
      	};
      	return {
        	form: {
          		name:'',
          		bank:'',
          		number:'',
          		address:''
        	},
        	rules: {
	          	name: [
	            	{  validator: checkPeopleName, trigger: 'blur' }
	          	],
	          	bank: [
	            	{  validator: checkBankName, trigger: 'blur' }
	          	],
	          	number: [
	          		{  validator: checkNumber, trigger: 'blur' }
	          	],
	          	address: [
	          		{  validator: checkAddress, trigger: 'blur' }
	          	]
	        },
        	coverShow:true ,//遮罩层
			choseShow:true,//头部选择账户
			typeChose:null,//选择账户，1：公司账户，2：法人账户
      	}
  	},
  	methods:{
  		companyAccount(){
  			this.coverShow=false
  			this.choseShow=true
  			this.typeChose=1
  		},
  		peopleAccount(){
  			this.coverShow=false
  			this.choseShow=false
  			this.typeChose=2
  		},
  		reselect(){
			this.coverShow=true
  		},
  		next(form) { 
  			var _this=this
        	this.$refs[form].validate((valid) => {
        		console.log(_this.typeChose)
          		if (valid) {
			        stepfour({backProperty:_this.typeChose,bankAccountName:_this.form.name,bankName:_this.form.name,bankAccountNumber:_this.form.number,bankAddress:_this.form.address}).then(function(response){
			            console.log(response)
			            if(response.data.success){
							_this.$router.push({path:'/manager_home/submit/step5'})
			            }else{
			            	_this.$message.error(response.data.message);
			            }
			        })
          		} else {
            		_this.$message.error('信息不完整');
            		return false;
          		}
        	});
      	},
  		pre(){
			this.$router.push({path:'/manager_home/submit/step3'});
		}
  	}
}
</script>
<style>
.accountInfo{
	position:relative;
	height:100%;
}
.cover{
	width:100%;
	height:100%;
	position:absolute;
	left:0;
	top:0;
	background:#666666;
	opacity: 0.7;
	z-index:100;
	box-sizing: border-box;
	padding-top:140px;
}
.cover .el-button{
	border:none;
	height:50px!important;
	width:190px!important;
	font-size:24px!important;
	border-radius: 30px!important;
	margin-top:65px!important;
}
.cover .company{
	background:#ff8202!important;
	color:white!important;
}
.cover .people{
	color:#afafaf!important;
}
.cover{
	font-size:28px;
	color:white;
	text-align: center
}
.accountTitle{
	height:50px;
	line-height:50px;
	font-size:16px;
	border-bottom:1px solid #e4e4e3;
	background:#f5f5f5;
	box-sizing: border-box;
	padding-left:18px;
}
.accountTitle span{
	color:#1c1b20;
	border-right:1px solid #b5b5b5;
	padding:0 5px;
}
.accountTitle i,.accountTitle b{
	color:#858585;
	padding:0 5px;
}
.accountTitle i{
	border-right:1px solid #b5b5b5;
}
.labelBox{
	padding:30px 0;
	border-bottom:1px dashed #e4e4e3;
}
.lastBox{                         
	border-bottom:none;
}
.accountInfo .el-form-item {
    margin-bottom:0px!important;
}
.accountInfo .el-form-item__label{
	font-size: 16px!important;
}
.accountInfo .el-input{
	width:520px!important;
}
.accountInfo b{
	cursor: pointer;
}
.form_btn{
	overflow: hidden!important;
}
</style>