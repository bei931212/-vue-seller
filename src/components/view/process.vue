<template>
	<div class="process">
		<div class="banner"><img src="../../assets/img/flowBanner.png" alt=""></div>
		<div class="flow">
			<div class='top1 top'>
				<div class="top1Left floatDiv">
					<img src="../../assets/img/02.png" alt="">
					<img class="lastImg" src="../../assets/img/01.png" alt="">
					<div class="circle1 circle"><span>1</span></div>
				</div>
				<div class="top1Right topCircle floatDiv">
					<p>厂商提交申请表和企业资质</p>
					<p class="commentText">由商家提供该公司企业、产品、行业等相关资质证件; (五证+质检报告)</p>
				</div>
			</div>
			<div class="top2 top">
				<div class="top2Left topCircle floatDiv">
					<p>厂商资质审核</p>
					<p class="lastText commentText">由对接专员负责整理并初步审核商家提交的公司资质材料</p>
					<div class="circle2 circle"><span>2</span></div>
				</div>
				<div class="top2Right floatDiv">
					<img src="../../assets/img/03.png" alt="">
				</div>
			</div>
			<div class="top3 top">
				<div class="top3Left floatDiv">
					<img src="../../assets/img/04.png" alt="">
				</div>
				<div class="top3Right topCircle floatDiv">
					<p class="">厂商申请评估</p>
					<p class="commentText lastText">按申请表所示，完成s多级资质材料的审批，新上架入住申请表或现有商家申请新增经营类别</p>
					<div class="circle3 circle"><span>3</span></div>
				</div>
			</div>
			<div class="top4 top ">
				<div class="top4Left topCircle floatDiv">
					<p>交费签合同</p>
					<p class="commentText lastText">商家须签署合作协议和商家合作条例，缴纳保证金及相应平台使用费，并经顺联动力公司总部财务确认后获得后台账号和上传商品权限</p>
					<div class="circle4 circle"><span>4</span></div>
				</div>
				<div class="top4Right floatDiv">
					<img src="../../assets/img/05.png" alt="">
				</div>
			</div>	
			<div class="top5 top">
				<div class="top5Left floatDiv">
					<img src="../../assets/img/06.png" alt="">
				</div>
				<div class="top5Right topCircle floatDiv">
					<p>样品质检审核</p>
					<p class="commentText lastText">商家均需邮寄样品并由平台招商专员送往质检部，样品需经质检小组检测确认质量，3个工作日内出检测结果</p>
					<div class="circle5 circle"><span>5</span></div>
				</div>
			</div>
			<div class="top6 top">
				<div class="top6Left topCircle floatDiv">
					<p>开通商家店铺账号</p>
					<p class="commentText lastText">收到商家打款凭证、商家开通后台资料开通店铺账户即使交由运营主管处</p>
					<div class="circle6 circle"><span>6</span></div>
				</div>
				<div class="top6Right floatDiv">
					<img src="../../assets/img/07.png" alt="">
				</div>
				<div class="endCircle"><span>入驻完成</span></div>
			</div>		
		</div>
	</div>
</template>
<script>
export default{
	data(){
		return{

		}
	},
	created(){
		this.$store.dispatch("changeIndex","2");
	}
}
</script>
<style scoped>
	.banner{
		width:100%;
	}
	.banner img{
		width:100%;
	}
	.flow{
		width:950px;
		margin:0 auto;
	}
	.top .topCircle .circle{
		border:3px solid #e5e5e5;
	}
	.top .circle span{
		display:inline-block;
		width:61px;
		height:61px;
		background:#b5b5b5;
		color:white;
		font-size:24px;
		border:5px solid #e5e5e5;
		border-radius: 50%;
		text-align: center;
		line-height:61px;
	}
	.top1,.top{
		width:100%;
		height:356px;
	}
	.top1Left,.top1Right{
		width:50%;
	}
	.top1Right{
		box-sizing: border-box;
		padding-left:53px;
	}
	.top1Left{
		padding-left:45px;
		box-sizing: border-box;
		padding-top:115px;
		position:relative;
	}
	.circle1{
		position:absolute;
		width:200px;
		height:276px;
		right:0;bottom:0;
		border-right:3px solid #ff8202;
		border-bottom:3px solid #ff8202;
		border-radius:0 0 40px 0
	}
	.top .circle1 span{
		background:#fba72f;
		font-size:24px;
		border:5px solid #ff8202;
		position:absolute;
		right:-36px;
		top:-50px;
	}
	.lastImg{
		margin-left:35px;
	}
	.top1Right p:first-child{
		font-size:34px;
		font-weight:600;
		width:255px;
		margin-top:130px;
		color:#434343;
	}
	.top1Right p:last-child{
		width:360px;
		margin-top:35px;
	}
	.commentText{
		font-size:20px;
		color:#434343;
		line-height:30px;
	}
	.top2  .top2Left,.top2  .top2Right{
		width:50%;
	}
	.top2  .top2Left{
		box-sizing: border-box;
		padding-left:100px;
		position:relative;
	}
	.top2  .top2Left .circle2{
		position: absolute;
		width:272px;
		height:100%;
		top:-3px;
		left:0;
		border-right:none;
		border-radius:40px 0 0 40px;
	}
	.top2Left .circle2 span{
		position:absolute;
		left:-37px;
		top:150px;
	}
	.top2  .top2Right{
		padding-top:94px;
		box-sizing: border-box;
		padding-left: 65px;
	} 
	.top2  .top2Left p:first-child{
		font-size:33px;
		color:#434343;
		padding-top:114px;
		padding-bottom:30px;
	}
	.top2  .top2Left .lastText{
		width:340px;
	}
	.top3 .top3Left{
		width:43%;
	}
	.top3 .top3Right{
		width:57%;
	}
	.top3 .top3Left img{
		margin:110px 65px 0 160px;
	}
	.top3 .top3Right .lastText{
		width:384px;
	}
	.top3 .top3Right{
		position: relative;
	}
	.top3  .top3Right p:first-child{
		font-size:33px;
		color:#434343;
		margin:100px 0 37px 0;
	}
	.top3  .top3Right .circle3{
		position: absolute;
		width:674px;
		height:100%;
		top:0px;
		right:0;
		border-left:none;
		border-radius:0 40px 40px 0;
	}
	.top3Right .circle3 span{
		position:absolute;
		right:-37px;top:150px;
	}
	.top4Left p:first-child{
		font-size:33px;
		color:#434343;
		margin:100px 0 30px 0;
	}
	.top4Left  .lastText{
		width:417px;
	}
	.top4Left{
		width:62%;
		padding-left:100px;
		position: relative;
	}
	.top4Right{
		width:38%;
		padding-top:105px;
	}
	.top4  .top4Left .circle4{
		position: absolute;
		width:272px;
		height:100%;
		top:3px;
		left:0;
		border-right:none;
		border-radius:40px 0 0 40px;
	}
	.top4Left .circle4 span{
		position:absolute;
		left:-37px;
		top:150px;
	}
	.top5Left{
		width:43%;
		position: relative;
		padding:93px 0 0 188px;
	}
	.top5Right{
		width:57%;
		position:relative;
	}
	.top5Right .lastText{
		width:388px;
	}
	.top5Right p:first-child{
		font-size:33px;
		color:#434343;
		margin:108px 0 26px 0;
	}
	.top5  .top5Right .circle5{
		position: absolute;
		width:674px;
		height:100%;
		top:6px;
		right:0;
		border-left:none;
		border-radius:0 40px 40px 0;
	}
	.top5Right .circle5 span{
		position:absolute;
		right:-37px;
		top:150px;
	}
	.top6Left p:first-child{
		font-size:33px;
		color:#434343;
		margin:100px 0 30px 0;
	}
	.top6Left  .lastText{
		width:417px;
	}
	.top6Left{
		width:62%;
		padding-left:100px;
		position: relative;
	}
	.top6Right{
		width:38%;
		padding-top:105px;
	}
	.top6  .top6Left .circle6{
		position: absolute;
		width:272px;
		height:100%;
		top:9px;
		left:0;
		border-right:none;
		border-radius:40px 0 0 40px;
	}
	.top6Left .circle6 span{
		position:absolute;
		left:-37px;
		top:150px;
	}
	.top .floatDiv{
		float:left;
		height:100%;
		box-sizing: border-box;
	}
	.top6{
		position:relative;
		margin-bottom: 100px
	}
	.top6 .endCircle{
		position: absolute;
		right:3px;
		bottom:-15px;
		width:674px;
		height:100%;
		border-bottom:3px solid #e5e5e5;
	}
	.top6 .endCircle span{
		display:inline-block;
		width:104px;
		height: 104px;
		background:#fba72f;
		color:white;
		font-size:26px;
		box-sizing: border-box;
		padding:10px;
		text-align: center;
		border-radius:50%;
		border:5px solid #ff8202;
		position:absolute;
		bottom:-52px;right:-20px;
	}
</style>