<template>
	<div class="manager">
		<div class="managerBox">
				<div class="leftNav"></div>	
				<div class="rightCon">
					<div class="rightTop"></div>
					<div class="rightBottom">
						<div class="managerCon" v-show='managerCon'>
							<div class='conBox'>
								<div class='num'>1<span></span></div>
								<div class="con">
									<p>在线签署<i  v-show='afterSign'></i></p>
									<p>在线签署商家入驻协议</p>	
								</div>
								<div class="finish" v-show='beforeSign'>	
									<p class='write' @click='sign'>去签署</p>
								</div>
								<div class="finish" v-show='afterSign'>	
									<p>已完成</p>
									<p><span>查看</span><span>修改</span></p>
								</div>
							</div>
							<div class='conBox'>
								<div class='num'>2<span></span></div>
								<div class="con">
									<p>提交资质<i  v-show='afterAptitude'></i></p>
									<p>提交企业信息和银行账户</p>	
								</div>
								<div class="finish" v-show='beforeAptitude'>	
									<p class='write'>去填写</p>
								</div>
								<div class="finish" v-show='afterAptitude'>	
									<p class="finished">已完成</p>
								</div>
							</div>
							<div class='conBox'>
								<div class='num'>3<span></span></div>
								<div class="con">
									<p>支付<i  v-show='afterPay'></i></p>
									<p>质量保证金、平台使用费、技术运营服务费</p>	
								</div>
								<div class="finish" v-show='beforePay'>	
									<p class='write'>去支付</p>
								</div>
								<div class="finish" v-show='afterPay'>	
									<p class="finished">已完成</p>
								</div>
							</div>
						</div>
						<div class="signCon" v-show='signCon'>
							<p class="signTitle">在线签署商家入驻文件(非全球购入驻协议)</p>
							<div class="signConText">
								<p>顺联网络交易平台服务协议</p>
								<p>重要通知：</p>
								<p>本网转载文字、图片等稿件均出于为公众传播有益资讯信息并且不以盈利为目的，转载稿件不意味着赞同其观点或证实其内容的真实性</p>
								<p>本'重要须知'为本协议正文的组成部分</p>
							</div>
							<div  id='agree'><el-checkbox v-model="checked"></el-checkbox><span>我已阅读并同意</span><i>《顺联动力注册协议》</i></div>
							<p class="bottomSign"><span>取消</span><i>签署协议</i></p>
						</div>

					</div>
				</div>
		</div>
	</div>
</template>
<script>
export default {
    data() {
	    return {
	    	beforeSign:true,
	    	afterSign:false,
			beforeAptitude:true,
			afterAptitude:false,
			beforePay:true,
			afterPay:false,
			managerCon:false,
			signCon:true,
			checked:true
	    }
    },
    methods: {
    	sign(){
    		this.managerCon=false
    		this.signCon=true
    	}
    }
}
</script>
<style>
	.managerBox{width:64%;margin:0 auto;background:#f7f7f7;height:800px;}
	.leftNav{float: left;width:200px; background:black;height:100%;}
   	.rightCon{ overflow: hidden;height:100%}
   	.rightBottom{box-sizing: border-box;padding:23px;}
   	.rightTop{height:50px;background:blue;}
   	.managerCon{height:100%;background:white;padding:30px;border:1px solid #e4e4e3;}
   	.conBox{overflow: hidden;height:110px;}
   	.managerCon .num{float:left;width:100px;text-align: center;line-height:110px;background:#dddddd;position:relative;margin-right:28px;color:white;font-size:54px;}
	.managerCon .con{float:left;height:100%;}
	.managerCon .num span{display:inline-block;width:12px;height:12px;background:url(../../assets/img/managerRight.png) no-repeat center;position:absolute;right:-11px;top:50px;background-size: 100% auto}
	.managerCon .con p{font-size:14px;color:#727272;}
	.managerCon .con p:first-child{padding-top:30px;margin-bottom:15px;}
	.managerCon .conBox{position:relative;margin-bottom:22px;}
	.managerCon .conBox .finish{position:absolute;width:100px;right:0;margin-top:25px;color:#887f7f;}
	.managerCon .finish p:first-child{width:98px;height:30px;color:#00bd3a;border:1px solid #00bd3a;line-height:30px;text-align: center;border-radius: 5%}
	.managerCon .finish .finished{margin-top:10px;}
	.managerCon .finish p.write{background:#ff5b41;color:white;border:none;margin-top:10px;}
	.finish p span{font-size:14px;}
	.finish p:last-child{margin-top:5px;}
	.finish p span:last-child{margin-left:36px;}
	.con p i{display:inline-block;width:23px;height:17px;background:url(../../assets/img/yes.png) no-repeat center;margin-left:15px;}
	#agree{
	text-align: left;
	margin:27px 0 27px 0;
	font-size: 12px;
	color:#aaaaaa;
}
#agree span{
	padding-left:10px;
}
#agree i{
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
.bottomSign{
	height:38px;
	line-height: 38px;
	font-size: 18px;
}
.bottomSign span{
	text-align: center;	
	display:inline-block;
	width:76px;
	background:#e5e5e5;
	color:#bab9b9;
	border-radius: 5%;
}
.bottomSign i{
	text-align: center;	
	display:inline-block;
	width:150px;
	background:#ff8202;
	color:white;
	border-radius: 5%;
	margin-left:15px;
}
.signTitle{
	height:50px;
	line-height: 50px;
	font-size:15px;
	color:#1c1b20;
	border:1px solid #e4e4e3;
	box-sizing: border-box;
	padding-left:17px;

}
.signConText{
	border:1px solid #e4e4e3;
	border-top:none;
}
</style>
