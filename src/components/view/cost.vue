<template>
	<div class="cost">
		<div class="leixing">
			<div class="cost_title">店铺类型介绍</div>
			<div class="main">
				<div class="main_box">
					<img src="../../assets/img/qijian.png" alt="">
					<p>商家以自有品牌或持他人品牌（独占性授权）（商标为R或TM状态），经营一个以上类目，入驻顺联动力开设的店铺。</p>
				</div>
				<div class="main_box">
					<img src="../../assets/img/zhiyin.png" alt="">
					<p>商家以自有品牌（商标为R或TM状态），且只经营一个类目，入驻顺联动力开设的店铺。</p>
				</div>
				<div class="main_box">
					<img src="../../assets/img/zhuanmai.png" alt="">
					<p>商家持他人品牌（商标为R或TM状态），在顺联动力开设的店铺。</p>
				</div>
				<div class="main_box">
					<img src="../../assets/img/zhuanyin.png" alt="">
					<p>经营顺联动力同类别下两个及以上他人或自有品牌（商标为R或TM状态）开设的店铺。一个招商大类下专营店只能申请一家，以上平台使用费</p>
				</div>
			</div>
		</div>


		<div class="zifei">
			<div class="cost_title">入驻需要资费</div>
			<!-- 左侧 -->
			<div class="left">
				<el-tree :data="list" :props="defaultProps" highlight-current @node-click="handleNodeClick"></el-tree>
			</div>
			<!-- 右侧 -->
			<div class="right">
				<!-- 未选择分类 -->
				<div v-show="!categoryfee.sn" class="unchoose">请根据您经营的商品选择左侧类目，查询入驻需要资费</div>

				<!-- 选中分类 -->
				<div v-show="categoryfee.sn" class="choose">
					<div class="chooseTop">
						<p class="title"><i class="el-icon-information"></i>各店铺类型需要准备的入驻费略有不同，请详阅</p>
						<div class="tab">
							<el-tabs type="border-card" v-model="categoryfee.storeType">
								<el-tab-pane label="旗舰店" name='1'></el-tab-pane>
								<el-tab-pane label="直营店" name='2'></el-tab-pane>
								<el-tab-pane label="专卖店" name='3'></el-tab-pane>
								<el-tab-pane label="专营店" name='4'></el-tab-pane>
							</el-tabs>
						</div>
						<div class="trademark">
							<span>商家权人类型：</span>
							<el-radio-group v-model="categoryfee.tradeType">
								<el-radio class="radio" size="small" v-model="categoryfee.tradeType" label="R">R标</el-radio>
  								<el-radio class="radio" size="small" v-model="categoryfee.tradeType" label="TM">TM标</el-radio>
  							</el-radio-group>	
						</div>
					</div>
					<div class="results" v-loading="loading" element-loading-text="查询中">
						<p class="p1">您所需资费</p>
						<p>查询结果仅供参考，详细内容请下载说明文档</p>
						<div class="main">
							<div class="content">
								<p class="number">{{feeResult.qualityGuaranteeDeposit}}</p>
								<p class="type">质量保证金</p>
								<p class="p">呼吸道哇嘎欧迪芬我快吃饭了还是发错的</p>
							</div>
							<div class="content">
								<p class="number">{{feeResult.terraceUseFee}}</p>
								<p class="type">平台使用费</p>
								<p class="p">呼吸道哇嘎欧迪芬我快吃饭了还是发错的</p>
							</div>
							<div class="content">
								<p class="number">{{feeResult.technicalFeelRate}}</p>
								<p class="type">技术运营费</p>
								<p class="p">呼吸道哇嘎欧迪芬我快吃饭了还是发错的</p>
							</div>
						</div>
					</div>
				</div>	
			</div>
		</div>
	</div>
</template>
<script>
import { category,categoryfee } from '@/http/api'
export default{
	data(){
		return{
			list:null,
			loading: true,
			defaultProps:{
				children: 'categoryThirdChild',
          		label: 'categoryName'
			},
			categoryfee:{ //查询的资费类别
				sn:null,
				storeType:"1",
				tradeType:"R"
			},
			feeResult:{
				qualityGuaranteeDeposit:0, //质量保障金
				technicalFeelRate:0, //技术运营费
				terraceUseFee:0, //平台使用费
			}
		}
	},
	watch:{
		"categoryfee":{
			handler:function() {
				this.loading=true;
				if(this.categoryfee.sn && this.categoryfee.storeType && this.categoryfee.tradeType){
					this.getfee(this.categoryfee)
				}
			},
			deep:true
		}
	},
	methods:{
		handleNodeClick(data){
			this.categoryfee.sn=data.sn;
		},
		getfee(params){ //资费查询结果
			categoryfee(params).then((response) => {
				this.feeResult.qualityGuaranteeDeposit = response.data.data.qualityGuaranteeDeposit; //质量保障金
				this.feeResult.technicalFeelRate = response.data.data.technicalFeelRate; //技术运营费
				this.feeResult.terraceUseFee = response.data.data.terraceUseFee; //平台使用费
				this.loading=false;
			})
		}
	},
	created(){
		this.$store.dispatch("changeIndex","4");
		category().then((response) => {
			console.log(response.data.data)
			this.list=response.data.data;
		})
	}
}
</script>
<style>
.cost_title{
	height: 50px;
	background: #f2f2f2;
	font-size: 18px;
	color: #666666;
	line-height: 50px;
	padding-left: 18px;
}
.cost .leixing{
	width: 1200px;
	margin: 40px auto 20px;
	border: 1px solid #ecebeb;
}
.leixing .main{
	display: flex;
}
.leixing .main .main_box{
	width: 25%;
	box-sizing: border-box;
	padding: 0 33px;
	text-align: center;
	padding-bottom: 30px;
	padding-top: 30px;
}
.leixing .main .main_box img{
	width: 135px;
	height: 115px;
	margin-bottom: 20px;
}
.leixing .main .main_box p{
	font-size: 12px;
	text-align: left;
	color: #7f7f7f;
}


/* 资费 */
.zifei{
	width: 1200px;
	border: 1px solid #ecebeb;
	margin: 0 auto 100px;
	overflow: hidden;
}
.zifei .el-tree{
	border: none!important;
	color: #858585!important;
}
.zifei .left{
	width: 289px;
	float: left;
	min-height: 500px;
	padding-bottom: 115px;
	border-right: 1px solid #ecebeb;
}
.zifei .right{
	width: 910px;
	float: left;
	color: #666666;
}
.zifei .right .unchoose{
	font-size: 22px;
	color: #aaaaaa;
	padding-top: 120px;
	text-align: center;
}
.zifei .right .choose .chooseTop{
	padding: 20px 0 0 35px;
	border-bottom: 1px solid #ecebeb;
	padding-bottom: 20px;
}
.el-tabs__header{
	border: none!important;
}
.el-tabs--border-card{
	box-shadow: none!important;
}
.zifei .right .choose .chooseTop .title{
	font-size: 14px;
}
.zifei .right .choose .chooseTop .title i{
	font-size: 16px;
	color: #5cbefe;
	margin-right: 10px;
}
.el-tree-node__expand-icon{
	margin-left: 20px!important;
	border-left-color: #c2c2c2!important;
}
.el-tree--highlight-current .el-tree-node.is-current>.el-tree-node__content{
	background-color: #fff!important;
}
.el-tree-node__children .is-current{
	background: #fff!important;
	color: #ff8202!important;
}
.el-tabs__content{
	display: none!important;
}
.el-tabs__nav-wrap{
	margin-bottom: 0px!important;
}
.zifei .chooseTop .tab{
	width: 298px;
	margin: 25px 0 20px 12px;
}
/* .tab .is-active{
	background: #ff8202!important;
	color: #fff;
} */
.zifei .results p{
	text-align: center;
}
.zifei .results p.p1{
	font-size: 18px;
	margin: 50px 0 10px;
}
.zifei .results .main{
	overflow: hidden;
	margin-top: 50px;
}
.zifei .results .main .content{
	width: 33.3%;
	float: left;
}
.zifei .results .main .content .number{
	font-size: 32px;
	color: #666666;
	margin-bottom: 5px;
}
.zifei .results .main .content .type{
	font-size: 16px;
	margin-bottom: 5px;
}
.zifei .results .main .content .p{
	color: #979797;
}
</style>