<template>
	<div class="standard">
		<div class="zifei">
			<div class="cost_title">入驻标准</div>
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
						<div class="tab">
							<el-tabs type="border-card" v-model="categoryfee.storeType">
								<el-tab-pane label="旗舰店" name='1'></el-tab-pane>
								<el-tab-pane label="直营店" name='2'></el-tab-pane>
								<el-tab-pane label="专卖店" name='3'></el-tab-pane>
								<el-tab-pane label="专营店" name='4'></el-tab-pane>
							</el-tabs>
						</div>
						<div class="trademark">
							<el-radio-group v-model="type">
								<el-radio class="radio" size="small" v-model="type" label="domestic">国产</el-radio>
  								<el-radio class="radio" size="small" v-model="type" label="import">进口</el-radio>
  							</el-radio-group>	
						</div>
					</div>
					<div class="results">
						
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
			defaultProps:{
				children: 'categoryThirdChild',
          		label: 'categoryName'
			},
			categoryfee:{ //查询的资费类别
				sn:null,
				storeType:"1",
			},
			type:"domestic"
		}
	},
	methods:{
		handleNodeClick(data){
			this.categoryfee.sn=data.sn;
		},
	},
	created(){
		this.$store.dispatch("changeIndex","3");
		category().then((response) => {
			this.list=response.data.data;
		})
	}
}
</script>
<style>
.standard{
	margin-top: 40px;
}
.cost_title{
	height: 50px;
	background: #f2f2f2;
	font-size: 18px;
	color: #666666;
	line-height: 50px;
	padding-left: 18px;
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
	margin-left: 20px;
	border-left-color: #c2c2c2;
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
	margin: 25px 0 20px 0px;
}
/* .tab .is-active{
	background: #ff8202!important;
	color: #fff;
} */


</style>