<template>
	<div class="sign">
		<div class="signBox">
			<div class="signCon">
				<p class="signTitle">在线签署商家入驻文件(非全球购入驻协议)</p>
				<div class="signConText">
					<div class="signText">
						<p>顺联网络交易平台服务协议</p>
						<p>重要通知：</p>
						<p>&nbsp;&nbsp;&nbsp;&nbsp;本网转载文字、图片等稿件均出于为公众传播有益资讯信息并且不以盈利为目的，转载稿件不意味着赞同其观点或证实其内容的真实性</p>
						<p>本'重要须知'为本协议正文的组成部分</p>
					</div>

					<div  class='agree'><el-checkbox v-model="checked"></el-checkbox><span>我已阅读并同意</span><i>《顺联动力注册协议》</i></div>
					<p class="bottomSign"><span @click='cancel' v-show='!signChecked'>取消</span><i @click='signAct'  v-show='!signChecked'>签署协议</i><span v-show='signChecked' @click='sure'>确定</span></p>

				</div>
			</div>
		</div>
	</div>
</template>
<script>
import {mapGetters,mapActions} from 'vuex'
import {protocol} from '../../../http/api'
export default {
    data() {
	    return {
		    checked:false//勾选
	    }
    },
    computed:mapGetters([
    	'signChecked'
    ]),
    created(){
        this.checked=this.signChecked

    },
    methods: {
    	cancel(){
			this.$router.push({path:'/manager_home/manager'});
    	},
    	signAct(){
    		var _this=this
    		if(this.checked){

				protocol().then(function(response){
	                console.log(response)
	                if(response.data.success){
/*		    			_this.$store.dispatch('sign',{
				            beforeSign:false,
				            afterSign:true
				        })*/
				        _this.$router.push({path:'/manager_home/manager'});
	                }
	            })
		        
    		}else{
    		}
    	},
    	sure(){
    		this.$router.push({path:'/manager_home/manager'});
    	}
    }
}
</script>
<style>
.signBox{box-sizing: border-box;padding:25px;background-color: #f7f7f7}
.agree{
	text-align: left;
	margin:27px 0 27px 0;
	font-size: 12px;
	color:#aaaaaa;
}
.agree span{
	padding-left:10px;
}
.agree i{
	cursor:pointer;
}
.agree .el-checkbox .el-checkbox__input.is-checked .el-checkbox__inner{
    background-color: white!important;
    border-color: #aaa!important;
}
.agree .el-checkbox__inner::after{
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
	cursor: pointer;
}
.bottomSign i{
	text-align: center;	
	display:inline-block;
	width:150px;
	background:#ff8202;
	color:white;
	border-radius: 5%;
	margin-left:15px;
	cursor: pointer;
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
	box-sizing: border-box;
	padding:25px;
	background:white;
}
.signText{
	border:1px solid #e4e4e3;
	color:#a0a0a0;
	font-size: 12px;
	box-sizing: border-box;
	padding:20px;
}
.signText p:first-child{
	text-align: center;
}
.signText p:last-child{
	text-align: center;
	padding-top:20px;
}
.signText p:nth-child(2){
	padding-top:10px;
	padding-bottom:10px;
}
</style>