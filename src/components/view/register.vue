<template>
	<div class="register">
<!-- 		<div class="setUserName" v-show='formShow'>
	<div class="setName">
		<div class="setUserNamecon"><span>1</span><i>设置登录名</i></div>
	</div>
</div> -->
		<el-form ref="form" :model="form" label-width="80px" v-show='formShow'>
			<div class="header"><img src="../../assets/img/sellerRog.png" alt=""><span>商家注册</span></div>
		  	<el-form-item label="用户名">
		    	<el-input v-model="form.userName" class="userName" v-on:blur='getName' placeholder='6-16个字符,由字母、数字、下划线和中文组成'></el-input>
		    	<p v-show='error1' class='error1'><img src="../../assets/img/cha.png" alt=""><span>6-16个字符,由字母、数字、下划线和中文组成</span><i class="tip1"><img src="../../assets/img/tip.png" alt=""></i></p>
		    	<b v-show='true1'><img src="../../assets/img/rightGreen.png" alt=""></b>
		  	</el-form-item>
		  	<el-form-item label="密码">
		    	<el-input v-model="form.passWord" type="password" v-on:blur='getPass' placeholder='密码中不能含有空格且6-16个字符'></el-input>
		    	<p v-show='error2' class='error2'><img src="../../assets/img/cha.png" alt=""><span>密码中不能含有空格且6-16个字符</span><i class="tip2"><img src="../../assets/img/tip.png" alt=""></i></p>
		    	<b v-show='true2'><img src="../../assets/img/rightGreen.png" alt=""></b>
		  	</el-form-item>
		  	<el-form-item label="确认密码">
		    	<el-input v-model="form.againPass" type="password" v-on:blur='getAgainPass'></el-input>
		    	<p v-show='error3' class='error3'><img src="../../assets/img/cha.png" alt=""><span>密码不一致</span><i class="tip3"><img src="../../assets/img/tip.png" alt=""></i></p>
		    	<b v-show='true3'><img src="../../assets/img/rightGreen.png" alt=""></b>
		  	</el-form-item>
		  	<el-form-item label="手机号">
		    	<el-input v-model="form.phone" v-on:blur='getPhone'></el-input>
		    	<p v-show='error4' class='error4'><img src="../../assets/img/cha.png" alt=""><span>格式不正确</span><i class="tip3"><img src="../../assets/img/tip.png" alt=""></i></p>
		    	<b v-show='true4'><img src="../../assets/img/rightGreen.png" alt=""></b>
		  	</el-form-item>
		  	<el-form-item label="验证码">
		    	<el-input v-model="form.code" class="code" v-on:blur='getCode'></el-input>
		    	<span class="codeImg" @click="refresh"><img :src="'http://v20-test.shunliandongli.com/usermanager/getvcode?time='+info" alt=""></span>
		    	<p v-show='error5' class='error5'><img src="../../assets/img/cha.png" alt=""><span>验证码错误</span><i class="tip3"><img src="../../assets/img/tip.png" alt=""></i></p>
		    	<b v-show='true5'><img src="../../assets/img/rightGreen.png" alt=""></b>
		  	</el-form-item>
		    <el-button @click="onSubmit">提交</el-button>
		    <div  id='agree'><el-checkbox v-model="checked"></el-checkbox><span>我已阅读并同意</span><i @click='popBox=true'>《顺联动力注册协议》</i></div>

		  </el-form-item>
		</el-form>
		<div class="regSuccess" v-show='regSuccess'>
			<img src="../../assets/img/sure.png" alt="">
			<p>恭喜,注册成功！</p>
			<el-button @click='goLogin'>立即登录</el-button>
		</div>
		<el-dialog :visible.sync="popBox">
			<p class='title'>顺联动力注册协议</p>
			<p>欢迎您与浙江顺联网络科技有限公司共同签署本《顺乱动力注册协议》(下称"本协议")并使用顺联动力供货商平台服务！各服务条款前所列索引关键词仅为帮助您理解该条款表达的主旨之用，不影响或限制本协议条款的含义或解释，为维护您自身权益，建议您仔细阅读各条款具体表述</p>
			<p class="headTitle">一、协议范围</p>
			<p>欢迎您与浙江顺联网络科技有限公司共同签署本《顺联动力注册协议》(下称"本协议")并使用顺联动力供货商平台服务！</p>
			<p class="headTitle">二、账户注册与使用</p>
			<p>欢迎您与浙江顺联网络科技有限公司共同签署本《顺联动力注册协议》(下称"本协议")并使用顺联动力供货商平台服务!各服务条款前所列索引关键词仅为帮助您理解该条例表达的主旨之用，不影响或限制本协议条款的含义或解释，为维护您自身权益，建议您仔细阅读各条款具体表述!</p>
			<p class="headTitle">三、账户注册与使用</p>
			<p>欢迎您与浙江顺联网络科技有限公司共同签署本《顺联动力供货商注册协议》(下称"本协议")并使用顺联动力供货商平台服务!</p>
		</el-dialog>
	</div>
</template>
<script>
import {register} from '../../http/api'
import {mapGetters,mapActions} from 'vuex'
  export default {
    data() {
      return {
      	form: {
          userName: '',
          passWord:'',
          againPass:'',
          phone:'',
          code:''
        }, 
        formShow:true,
        regSuccess:false,
        error1:false,
        error2:false,
        error3:false,
        error4:false,
        error5:false,
        true1:false,
        true2:false,
        true3:false,
        true4:false,
        true5:false,
        disable:true,
        checked:true,
        popBox:false,
        info:1
      }
    },
    methods: {
    	refresh(){
			var randomNum = parseInt(Math.random()*100);
			this.info=randomNum
    	},
    	getName(){
    		var strRegex = "^[\u4e00-\u9fa5_a-zA-Z0-9]{6,16}$";
			var re=new RegExp(strRegex);
			console.log(re.test(this.form.userName))
			if(re.test(this.form.userName)==false){
				this.error1=true
				this.true1=false
			}else{
				this.error1=false
				this.true1=true
			}
    	},
    	getPass(){
    		var strRegex = "^[^ ]{6,16}$";
			var re=new RegExp(strRegex);
			if(re.test(this.form.passWord)==false){
				this.error2=true
				this.true2=false
			}else{
				this.error2=false
				this.true2=true
			}
    	},
    	getAgainPass(){
    		if(this.form.passWord!=this.form.againPass||this.form.againPass==null){
    			this.error3=true
    			this.true3=false
    		}else{
    			this.error3=false
    			this.true3=true
    		}
    	},
    	getPhone(){
    		if(!(/^1[34578]\d{9}$/.test(this.form.phone))){
		        this.error4=true
		        this.true4=false
		    } else{
		    	this.error4=false
    			this.true4=true
		    }
    	},
    	getCode(){

    		if(this.form.code==''){
    			this.error5=true
    		}else{
    			this.error5=false
    		}
    	},
    	goLogin(){
			this.$router.push({path:'/'});
/*			this.$store.dispatch('show',{
	            coverShow:true
	        })*/
    	},
      	onSubmit() {
        	/*this.formShow=false,
        	this.regSuccess=true*/
        	console.log(this.form.userName)
        	console.log(this.form.passWord)
        	console.log(this.form.phone)
        	var _this=this
        	if(this.checked){
	        	if(this.form.passWord==this.form.againPass){
					register({username:this.form.userName,password:this.form.passWord,mobile:this.form.phone,vcode:this.form.code}).then(function(response){
						console.log(response)
		        		if(response.data.success){
		        			/*alert(response.data.message)*/
		        			_this.regSuccess=true
		        			_this.formShow=false
		        			_this.error5=false
		        			_this.true5=true
		        		}else{
		        			if(response.data.message=='验证码错误'){
								_this.refresh()
								_this.error5=true
							}else{
								_this.$message.error(response.data.message);
							}
          					
		        		}
		        	})
	        	}else{
	        		this.error3=true
	        	}
        	}else{
        		_this.$message.error('请先勾选顺联动力注册协议');
        	}	
      	}
    }
  }
</script>
<style>
.register{
	margin-top:10px;
	background:#f7f7f7;
	box-sizing: border-box;
	padding-top:90px;
	padding-bottom:90px;
}
.register .el-form{
	width:668px!important;
	margin:0 auto!important;
	height:624px!important;
	-webkit-box-shadow: 0 0 40px #e1e1e1!important;
	background:white!important;
}
 .register .el-form .header{
	height:80px;
	line-height: 80px;
	font-size: 23px;
	text-align: center;
	border-bottom:1px dashed #dddddd;
	margin-bottom:60px;
}
.register .el-form .header img{
	margin-right:20px;
}
.register.el-form .el-input{
	position:relative!important;
	outline:none;
	width:313px!important;
	height:40px!important;
}
.register .el-form .code{
	width:182px;
	margin-left:-150px;
}
.register .el-form .codeImg{
	display:inline-block;
	width:118px;
	height:34px;
	/* border:1px solid #bfcbd9; */
	position: absolute;
	right:0px;
	top:0;
}
.el-form .codeImg img{
	width:100%;
	height:100%;
	border:none;
}
.register .el-form-item{
	text-align: center!important;
	box-sizing: border-box!important;
	padding:0 137px 0 120px!important;
}
.register .el-form p{
	color:#ff5b40;
	width:350px;
	position:absolute;
	left:350px;
	top:0;
	z-index:1000;
	border:1px solid #f8a294;
	width:170px;
	background:#fbefeb;
	height:32px;
}
.register .el-form p i{
	position: absolute;
	width:9px;
	height:12px;
	/* background:url(../../assets/img/tip.png) no-repeat center; */
	z-index:100;
}
.register .el-form p i img{
	width:100%;
	height:100%;
	padding:0;
	margin:0;
}
.register .el-form p .tip1{
	left:-9px;
	top:34px;
}
.register .el-form p .tip2{
	left:-9px;
	top:25px;
}
.register .el-form p .tip3{
	left:-9px;
	top:10px;
}
.register .el-form b{
	display:inline-block;
	width:12px;
	height:12px;
	/* background:url(../../assets/img/rightGreen.png) no-repeat center; */
	position:absolute;
	left:345px;
	top:11px;
}
.register p.error1{
	padding:14px 0 14px 0;
	top:-26px;
}
.register p.error2{
	padding:14px 0 14px 0;
	top:-14px;
}
.register p.error3,.register p.error4,.register p.error5{
	height:25px;
	padding-top:9px;
}
.register .el-form p img{
	float:left;
	margin:3px 5px 0 10px;
	width:12px;
}
.register .el-form p span{
	float:left;
	width:140px;
	font-size:12px;
	line-height:16px;
	text-align: left;
}
.register .el-button{
	width:180px;
	height:50px;
	background:#ff8202;
	color:white;
	border:none;
	font-size: 18px;
	display:block;
	margin:0 auto;
	margin-top:43px;
}
.register .el-button:hover{
	border:none;
	color:white;
}
.register .regSuccess{
	width:900px;
	height:400px;
	border:2px solid #d8d8d8;
	border-top:2px solid #ff8202;
	margin:0 auto;
	margin-bottom:60px;
	margin-top:50px;
}
.register .regSuccess img{
	display:block;
	margin:0 auto;
	width:63px;
	height:63px;
	margin-top:40px;
	margin-bottom:27px;
}
.register .regSuccess p{
	text-align: center;
	height:16px;
	line-height:16px;
	font-size:16px;
}
.register .regSuccess .el-button{
	margin-top:40px!important;
	margin-bottom:160px!important;
}
#agree{
	text-align: center;
	margin-top:20px;
}
#agree span{
	padding-left:10px;
	font-size:14px;
}
#agree i{
	color:#ff5b41;
	font-size:14px;
	cursor:pointer;
}
#agree .el-checkbox .el-checkbox__input.is-checked .el-checkbox__inner{
    background-color: white!important;
    border-color: #aaa!important;
}
#agree .el-checkbox__inner::after{
	border: 2px solid green!important;
	border-left:0!important;
	border-top:0!important;
}
.el-dialog  p{
	font-size:14px;
	line-height: 24px;
	color:#1c1b20;
}
.el-dialog .title{
	font-size:28px;
	text-align: center;
	font-weight:600;
	padding-bottom:20px;
}
.el-dialog .headTitle{
	font-size:16px;
	padding-top:15px;
	padding-bottom:5px;
}
.el-dialog__body {
    padding: 30px 50px 100px 50px;
}
</style>