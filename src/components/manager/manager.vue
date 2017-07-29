<template>
	<div class="manager">
		<div class="managerCon">
			<div class='conBox'>
				<div class='num'>1<span><img src="../../assets/img/managerRight.png" alt=""></span></div>
				<div class="con">
					<p>在线签署<i  v-show='!signShow'><img src="../../assets/img/yes.png" alt=""></i></p>
					<p>在线签署商家入驻协议</p>	
				</div>
				<div class="finish" v-show='signShow'>	
					<el-button  class='write' @click='sign'>去签署</el-button>

				</div>
				<div class="finish" v-show='!signShow'>	
					<p>已完成</p>
					<p @click='signCheck'>查看</p>
				</div>
			</div>
			<div class='conBox'>
				<div class='num'>2<span><img src="../../assets/img/managerRight.png" alt=""></span></div>
				<div class="con">
					<p>提交资质<i  v-show='!aptitudeShow'><img src="../../assets/img/yes.png" alt=""></i></p>
					<p>提交企业信息和银行账户</p>	
				</div>
				<div class="finish" v-show='aptitudeShow'>	
					<el-button  class='write' @click="goto('/manager_home/submit')" :disabled='write'>去填写</el-button>
				</div>
				<div class="finish" v-show='!aptitudeShow'>	
					<p class="finished" v-show='check'>待审核</p>
					<p class="finished" v-show='!check'>已完成</p>
				</div>
			</div>
			<div class='conBox'>
				<div class='num'>3<span><img src="../../assets/img/managerRight.png" alt=""></span></div>
				<div class="con">
					<p>支付<i  v-show='!payShow'><img src="../../assets/img/yes.png" alt=""></i></p>
					<p>质量保证金、平台使用费、技术运营服务费</p>	
				</div>
				<div class="finish" v-show='payShow'>	
					<el-button  class='write' :disabled='pay'>去支付</el-button>
				</div>
				<div class="finish" v-show='!payShow'>	
					<p class="finished">已完成</p>
				</div>
			</div>
		</div> 

	</div>
</template>
<script>
import {mapGetters,mapActions} from 'vuex'
import {protocol,sellerEnter} from '../../http/api'
export default {
    data() {
	    return {
	    	signShow:true,//签署
			aptitudeShow:true,//提交资质

			payShow:true,//支付前
			write:true,//填写按钮禁止
			pay:true,//支付按钮禁止
			check:true,//提交资质审核是否通过
	    }
    },
/*    computed:mapGetters([
        "beforeSignX",
        "afterSignX"
    ]),*/
    created(){
    	var _this=this
       	sellerEnter().then(function(response){
       		console.log(response)
       		console.log(response.data.data.step)
       		if(response.data.success){
         		if(response.data.data.step==0){
	       			_this.write=true
	       			_this.pay=true
	       		}else if(response.data.data.step==1){
	       			_this.signShow=false
	       			_this.write=false
	       			_this.pay=true
	       		}else if(response.data.data.step==2){
	       			_this.signShow=false
	       			_this.aptitudeShow=false
	 
	       			_this.pay=false
	       		}else if(response.data.data.step==3){
	       			_this.signShow=false
	       			_this.aptitudeShow=false
	       			_this.check=false
	       			_this.pay=false
	       		}else if(response.data.data.step==4){
	       			_this.signShow=false
	       			_this.aptitudeShow=false
	       			_this.check=true
	       			_this.pay=false
	       			_this.$message.error('审核失败');
	       			//alert('审核失败')
	       		}else if(response.data.data.step==5){
	       			_this.signShow=false
	       			_this.aptitudeShow=false
	       			_this.payShow=false
	       		}     			
       		}
       	})
    },
    methods: {
    	sign(){
			this.$router.push({path:'/manager_home/sign'})
    	},
    	signCheck(){
    		this.$store.dispatch('signCheck',{
    			signChecked:true
		    })
    		this.$router.push({path:'/manager_home/sign'})
    	},
    	cancel(){

    	},
    	signAct(){

    	},
    	goto(path){
            if(path.indexOf("/")!==-1){
                this.$router.push({path:path})
            }else{
                this.$router.push({name:path})
            }
        },
    }
}
</script>
<style>
	.manager{
		width:100%;
		box-sizing: border-box;
		padding:25px;
		background:#f7f7f7;
	}
	.managerBox{
		width:100%;
		background:#f7f7f7;
		height:100vh;
	}
	.leftNav{
		float: left;
		width:200px; 
		background:black;
		height:100%;
	}
   	.rightCon{ 
   		overflow: hidden;
   		height:100%
   	}
   	.rightBottom{
   		box-sizing: border-box;
   		padding:23px;
   	}
   	.rightTop{
   		height:50px;
   		background:blue;
   	}
   	.managerCon{
   		height:100%;
   		background:white;
   		padding:30px;
   		border:1px solid #e4e4e3;
   	}
   	.conBox{
   		overflow: hidden;
   		height:110px;
   	}
   	.managerCon .num{
   		float:left;
   		width:100px;
   		text-align: center;
   		line-height:110px;
   		background:#dddddd;
   		position:relative;
   		margin-right:28px;
   		color:white;
   		font-size:54px;
   	}
	.managerCon .con{
		float:left;
		height:100%;
	}
	.managerCon .num span{
		display:inline-block;
		width:12px;
		height:12px;
		/* background:url(../../assets/img/managerRight.png) no-repeat center; */
		position:absolute;
		right:-11px;
		top:50px;
		background-size: 100% auto
	}
	.managerCon .con p{
		font-size:14px;
		color:#727272;
	}
	.managerCon .con p:first-child{
		padding-top:30px;
		margin-bottom:15px;
	}
	.managerCon .conBox{
		position:relative;
		margin-bottom:22px;
	}
	.managerCon .conBox .finish{
		position:absolute;
		width:100px;
		right:0;
		margin-top:25px;
		color:#887f7f;
	}
	.managerCon .finish p:first-child,.managerCon .finish .finished{
		width:98px;
		height:30px;
		color:#00bd3a;
		border:1px solid #00bd3a;
		line-height:30px;
		text-align: center;
		border-radius: 5%
	}
	.managerCon .finish p:last-child{
		cursor: pointer;
	}
	.managerCon .finish .finished{
		margin-top:10px;
	}
	.managerCon .finish p.write{
		background:#ff5b41;
		color:white;
		border:none;
		margin-top:10px;
	}
	.finish p{
		font-size:14px;
		text-align: center
	}
	.finish p:last-child{
		margin-top:5px;
	}
	.con p i{
		display:inline-block;
		width:23px;
		height:17px;
		/* background:url(../../assets/img/yes.png) no-repeat center; */
		margin-left:15px;
	}
	.manager .el-button{
		width:100px!important;
	}
</style>

