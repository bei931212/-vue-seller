<template>
	<div class="dianpu">
		<h1>店铺信息</h1>
		<el-form :model="dianpu_form" :rules="rules" ref="dianpuFrom">
			<!-- 经营类目 -->
			<div class="formBox leimu">
				<el-form-item label="经营类目" prop="class1Id">
    				<el-select @change="leimuChange" v-model="dianpu_form.class1Id" placeholder="请选择">
    					<el-option
					      	v-for="item in leimu_data1"
					     	:key="item.categoryId"
					      	:label="item.categoryName"
					      	:value="item.categoryId"
					    >
					    </el-option>
				  	</el-select>
  				</el-form-item>
  				<el-form-item prop="class2Id" class="class2">
  					<el-select v-model="dianpu_form.class2Id" placeholder="请选择">
				  		<el-option
					      	v-for="item in leimu_data2"
					     	:key="item.categoryId"
					      	:label="item.categoryName"
					      	:value="item.categoryId"
					    >
					    </el-option>
				  	</el-select>
  				</el-form-item>
			</div>
			<!-- 店铺类型 -->
			<div class="formBox leixing">
				<el-form-item label="店铺类型" prop="type">
					<el-radio-group v-model="dianpu_form.storeType">
					    <el-radio label="1">旗舰店</el-radio>
					    <el-radio label="2">直营店</el-radio>
					    <el-radio label="3">专营店</el-radio>
					    <el-radio label="4">直销店</el-radio>
					</el-radio-group>
					<span style="margin:0 10px;">/</span>
					<el-radio-group v-model="dianpu_form.tradeType">
					    <el-radio label="R">R</el-radio>
					    <el-radio label="TM">TM</el-radio>
					</el-radio-group>
				</el-form-item>	
			</div>
			<!-- 店铺品牌 -->
			<div class="formBox pinpai">
				<el-form-item label="店铺品牌" prop="storeBrandName1">
					<el-select 
						v-model="dianpu_form.storeBrandName1" 
						:remote-method="remoteMethod"
						filterable
						remote
						@change="pinpaiChange"
						multiple
						placeholder="请选择或者搜索">
						<el-option
							v-for="item in pinpai_data"
							:key="item.value"
							:label="item.brand_name"
							:value="item.id">
						</el-option>
				  	</el-select>
				  	<el-button type="primary" @click="dialogFormVisible = true">我要上传</el-button>
				</el-form-item>
			</div>

			<!-- 上传店铺品牌 -->
			<el-dialog title="" :visible.sync="dialogFormVisible">
				<el-form :model="up_pinpai" class="up_pinpai">
					<el-form-item label="品牌名称">
						<el-input v-model="up_pinpai.storeBrandName"></el-input>
					</el-form-item>
					<div style="margin-bottom:20px;"></div>
					<el-form-item label="品牌logo">
						<el-upload
							action="http://v20-dev.shunliandongli.com/uploads"
						  	list-type="picture-card"
						  	:show-file-list="false"
						  	:on-success="upload2"
						  	:on-error="error"
						  	:with-credentials="true"
						  	:data="obj2"
						>
							<img v-if="imageUrl2" :src="imageUrl2" class="avatar">
	  						<i v-else class="el-icon-plus avatar-uploader-icon"></i>
						</el-upload>
					</el-form-item>
				</el-form>
				<div slot="footer" class="dialog-footer">
			    	<el-button @click="dialogFormVisible = false">取 消</el-button>
			    	<el-button type="primary" @click="submit_logo">确 定</el-button>
			  	</div>
			</el-dialog>



			<!-- 店铺名称 -->
			<div class="formBox width80 mingcheng">
				<el-form-item label="店铺名称"  prop="storeName">
					<el-input v-model="dianpu_form.storeName" placeholder="请输入店铺名称"></el-input>
					<span class="ts_name">（品牌+行业+企业商号）</span>
				</el-form-item>
			</div>
			<!-- 店铺logo -->
			<div class="formBox storelogo">
				<el-form-item label="店铺LOGO" prop="logo">
					<el-upload
						action="http://v20-dev.shunliandongli.com/uploads"
					  	list-type="picture-card"
					  	:show-file-list="false"
					  	:on-success="upload"
					  	:with-credentials="true"
					  	:data="obj"
					>
						<img v-if="imageUrl" :src="imageUrl" class="avatar">
  						<i v-else class="el-icon-plus avatar-uploader-icon"></i>
					</el-upload>
				</el-form-item>
			</div>
			<!-- 店铺服务电话 -->
			<div class="formBox width80 phone">
				<el-form-item label="店铺服务电话" prop="storePhone">
					<el-input v-model="dianpu_form.storePhone" placeholder=""></el-input>
				</el-form-item>
			</div>
			<!-- 店铺服务微信 -->
			<div class="formBox width80 wx">
				<el-form-item label="店铺服务微信" prop="storeWx">
					<el-input v-model="dianpu_form.storeWx" placeholder=""></el-input>
				</el-form-item>
			</div>
			<!-- 店铺服务qq -->
			<div class="formBox width80 qq">
				<el-form-item label="店铺服务qq" prop="storeQq">
					<el-input v-model="dianpu_form.storeQq" placeholder=""></el-input>
				</el-form-item>
			</div>
			<!-- 其他平台链接 -->
			<div class="formBox width80 url">
				<el-form-item label="其他平台链接" prop="storeOtherUrl">
					<el-input v-model="dianpu_form.storeOtherUrl" placeholder=""></el-input>
					<el-button type="primary">我要添加</el-button>
				</el-form-item>
			</div>
			<div class="form_btn">
				<el-button style="margin-top: 12px;" @click="pre">上一步</el-button>
				<el-button style="margin-top: 12px;" @click="next('dianpuFrom')">下一步</el-button>			
			</div>
		</el-form>
	</div>
</template>
<script>
import { categories , brandlist , steptwo , storebrand} from '@/http/api'
export default{
	data(){
		return{
			// 上传品牌
			dialogFormVisible:false,
			// 上传品牌信息
			up_pinpai:{
				storeBrandName:'',
				storeBrandLogo:''
			},
			dianpu_form:{
				class1Id:null,//一级分类
				class2Id:null,//二级分类
				storeType:"1", //店铺类型 1旗舰店 2直营店 3 专营店 4 直销店
				tradeType:"R", // R/TM
				storeLogo:'',//店铺logo
				storeBrandName1:[], //店铺品牌id 数据绑定
				storeBrandName:[], //店铺品牌id
				storeName:'', //店铺名称
				storePhone:'', //店铺服务电话
				storeWx:"", //店铺服务微信
				storeQq:"", //店铺服务qq
				storeOtherUrl:'',//其他平台链接
			},
			obj:{
				uploadKey:"logo"
			},
			obj2:{
				uploadKey:"pinpai"
			},
			imageUrl:'',
			imageUrl2:'',//店铺品牌上传
			leimu_data1:null, //经营类目一级数据
			leimu_data2:null, //经营类目二级数据
			pinpai_data:null, //品牌列表
			rules:{
				class1Id: [
					{required: true, message: '请选择分类信息', trigger: 'change'}
				],
				class2Id: [
					{required: true, message: '请选择分类信息', trigger: 'change'}
				],
				type: [
					{required: false, message: '请选择店铺类型', trigger: 'change'}
				],
				storeBrandName1: [
					{ type: 'array',required: true, message: '请选择店铺品牌', trigger: 'change'}
				],
				storeName: [
					{required: true, message: '请输入店铺名称', trigger: 'blur'}
				],
				storePhone: [
					{required: true, message: '请输入店铺服务电话', trigger: 'blur'}
				],
				storeWx: [
					{required: true, message: '请输入店铺服务微信', trigger: 'blur'}
				],
				storeQq: [
					{required: true, message: '请输入店铺服务qq', trigger: 'blur'},
					{ min: 5, max: 15, message: '请输入正确的qq号', trigger: 'blur' }
				],
				storeOtherUrl: [
					{required: false, message: '请填写链接', trigger: 'blur'}
				],
				logo: [
					{required: false, message: '请上传店铺logo', trigger: 'change'}
				],
			}
		}
	},
	created(){
		this.getCategories();
		this.getBrandlist();
	},
	methods:{
		// 图片上传
		upload(response,file){
			this.imageUrl = URL.createObjectURL(file.raw);
			this.dianpu_form.storeLogo=response.data.imgUrl
		},
		//上传店铺品牌
		upload2(response,file){
			this.up_pinpai.storeBrandLogo=response.data.imgUrl;
			this.imageUrl2 = URL.createObjectURL(file.raw);
		},
		//上传出错
		error(){
			this.$message.error("图片上传失败，请重新上传");
		},
		submit_logo(){
			storebrand(this.up_pinpai).then((response)=>{
				if(response.data.success){
					this.$message({
						message:'上传成功',
						duration: 1000,
						type: 'success',
						onClose:()=>{
							this.dialogFormVisible = false;
						}
					});
					this.dianpu_form.storeBrandName.push(response.data.data);
					this.dianpu_form.storeBrandName1.push(response.data.data.brandName);				
				}
			})
		},
		//获取品牌列表
		getBrandlist(params){
			brandlist({page:1,pageSize:40,keyword:params}).then((response)=>{
				this.pinpai_data=response.data.data
			})
		},
		//获取经营类目数据
		getCategories(params){
			if(params){
				categories(params).then((response)=>{
					this.leimu_data2=response.data.data
				})
			}else{
				categories(params).then((response)=>{
					this.leimu_data1=response.data.data
				})
			}
		},
		//一级类目选择改变
		leimuChange(class1Id){
			this.dianpu_form.class2Id=null;
			this.getCategories({topId:class1Id})
		},
		//品牌选择改变
		pinpaiChange(value){
			//console.log(value)
			var arr = value;
			let obj={};
			this.dianpu_form.storeBrandName=[];
			obj = this.pinpai_data.map((item)=>{
				for(let i=0;i<arr.length;i++){
					if(item.id == arr[i]){
						//console.log(arr[i],item.id)
						var nameId = {
							brandId:item.id,
							brandName:item.brand_name
						}
						this.dianpu_form.storeBrandName.push(nameId)
						//console.log(this.dianpu_form.storeBrandName)
					}
				}
      		});
      		//console.log(this.dianpu_form.storeBrandName)

		},
		//搜索品牌列表
		remoteMethod(query){
			if(query){
				this.getBrandlist(query);
			}else{
				this.getBrandlist();
			}
		},
		pre(){
			this.$router.push({path:"/manager_home/submit/step1"})
		},
		next(dianpuFrom){
			this.$refs[dianpuFrom].validate((valid) => {
        		if (valid) {
            		steptwo(this.dianpu_form).then((response)=>{
            			console.log(response)
            			let success = response.data.success;
            			let data = JSON.stringify(response.data.data);
            			if(success){
            				this.$router.push({path:"/manager_home/submit/step3",query:{data:data}})
            			}else{
            				this.$message({
            					message:response.data.message,
            					type:'error'
            				})
            			}
            		})
          		}else{
            		console.log('error submit!!');
            		return false;
        		}
        	});
		},

	}
}
</script>
<style>
.dianpu .storelogo .el-form-item__label:before{
    content: '*'!important;
    color: #ff4949!important;
    margin-right: 4px!important;
}
.dianpu .el-upload--picture-card img{
	width: 100%;
	height: 100%;
}
.dianpu .class2{
	position: absolute;
	left: 450px;
	top: 30px;
}
.dianpu .el-form-item{
	margin-bottom: 0!important;
}
.dianpu .el-form-item__label{
	width: 195px!important;
	margin-right: 40px!important;
}
.dianpu h1{
	height: 48px;
	background: #f5f5f5;
	font-size: 16px;
	padding-left: 15px;
	line-height: 48px;
}
.dianpu .el-form .formBox{
	padding:30px 0;
	border-bottom: 1px dashed #e4e4e3;
}
.dianpu .width80 .el-input{
	width: 40%!important;
}
.dianpu .mingcheng .ts_name{
	font-size: 14px;
	color: #bfcbd9;
}
.dianpu .leimu{
	position: relative;
}
.dianpu .el-form-item__error{
	left: 234px!important;
}
.dianpu .class2 .el-form-item__error{
	left: 0!important;
}
.up_pinpai .el-form-item__label{
	width: 100px!important;
	margin-right: 20px!important;
}
.up_pinpai .el-form-item__content{
	display: inline-block;
	width: 70%;
}
</style>