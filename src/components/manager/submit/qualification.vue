<template>
	<div class="qualification">
		<div class="box">
			<div class='errorInfo'><b class='qStep qStep1' v-show='error1'>此页有误</b><b class='qStep qStep2' v-show='error2'>此页有误</b><b class='qStep qStep3' v-show='error3'>此页有误</b><b class='qStep qStep4' v-show='error4'>此页有误</b></div>
			<el-steps :space="100" space="24%" :active="active" finish-status="success">
				<el-step title="1基本信息"></el-step>
		  		<el-step title="2店铺信息"></el-step>
		  		<el-step title="3资质信息"></el-step>
		  		<el-step title="4账户信息"></el-step>
		  		<el-step title="5完成"></el-step>
			</el-steps>
			<div class="form">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>
<script>
export default{
	watch: {
        $route() {
          this.active=this.$route.meta.stepNum;
        }
     },
	data(){
		return{
			active:this.$route.meta.stepNum,
			error1:true,
			error2:false,
			error3:true,
			error4:true,
		}
	},
	methods:{
		
	}
}
</script>
<style>
.qualification .box{
	width: 960px;
	margin: 0 auto;
	padding-top: 20px;
}
.qualification .form{
	border: 1px solid #e4e4e3;
}
.errorInfo{
	color:#fb5238;
	padding-left:14px;
	font-size:13px;
	position: relative;
}
.errorInfo .qStep{
	position:absolute;
	top:-10px;
}
.errorInfo .qStep1{
	left:91px;
}
.errorInfo .qStep2{
	left:335px;
}
.errorInfo .qStep3{
	left:570px;
}
.errorInfo .qStep4{
	left:800px;
}
</style>