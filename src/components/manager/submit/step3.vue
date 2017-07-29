<template>
	<div id="step3">
		<h3>资质信息</h3>
		<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
			<div class="step3Time">
				<span class="step3Before">企业成立时间</span>
				<el-date-picker
			      v-model="ruleForm.companyRegisteredTime"
			      type="date"
			      placeholder="企业成立时间"
			      :picker-options="pickerOptionsCompany">
			    </el-date-picker>
			</div>
			<div class="step3Funds step3CompanyRegisteredCapital">
				<el-form-item label="注册资金" prop="companyRegisteredCapital">
				   <el-input v-model="ruleForm.companyRegisteredCapital"></el-input>
				</el-form-item>
			</div>
			<div class="step3Funds">
				<el-form-item label="营业执照注册号" prop="businessLicenceNumber">
				   <el-input v-model="ruleForm.businessLicenceNumber"></el-input>
				</el-form-item>
			</div>
			<div class="step3Funds step3Term">
			  <el-form-item label="营业执照期限" prop="businessLicenceTerm">
			    <el-radio-group v-model="ruleForm.businessLicenceTerm">
			      <el-radio label="0">有限</el-radio>
			      <el-radio label="1">无限</el-radio>
			    </el-radio-group>
			  </el-form-item>
			  <div class="step3Deadline"  v-if="this.ruleForm.businessLicenceTerm==='0'?true:false">
				<el-date-picker
			      v-model="ruleForm.businessLicenceEnd"
			      type="date"
			      placeholder="有效期截止时间"
			      :picker-options="pickerOptions">
			    </el-date-picker>
			  </div>
			</div>
			<div class="step3Funds step3Term step3Paperwork">
			  <el-form-item label="是否三证合一" prop="threeInOne">
			    <el-radio-group v-model="ruleForm.threeInOne">
			      <el-radio label="1">是</el-radio>
			      <el-radio label="0">否</el-radio>
			    </el-radio-group>
			  </el-form-item>
			  <div class="step3Upload step3Business">
			  	<div class="step3UploadContainer">
				  	<el-upload
					  class="avatar-uploader"
					  action="http://v20-dev.shunliandongli.com/uploads"
					  :show-file-list="false"
					  :on-success="business"
					  :before-upload="beforeAvatarUpload"
					  :with-credentials="true"
					  :data="picture.businessLicenceNumberElc">
					  <img v-if="imageUrl.businessLicenceNumberElc" :src="imageUrl.businessLicenceNumberElc" class="avatar">
					  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
					</el-upload>
					<p>上传营业执照</p>
			  	</div>
				<div class="step3UploadContainer" v-if="this.ruleForm.threeInOne==='0'?true:false">
				  	<el-upload
					  class="avatar-uploader"
					  action="http://v20-dev.shunliandongli.com/uploads"
					  :show-file-list="false"
					  :on-success="organization"
					  :before-upload="beforeAvatarUpload"
					  :with-credentials="true"
					  :data="picture.organizationCodeElectronic">
					  <img v-if="imageUrl.organizationCodeElectronic" :src="imageUrl.organizationCodeElectronic" class="avatar">
					  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
					</el-upload>
					<p>组织机构代码</p>
			  	</div>
			  	<div class="step3UploadContainer" v-if="this.ruleForm.threeInOne==='0'?true:false">
				  	<el-upload
					  class="avatar-uploader"
					  action="http://v20-dev.shunliandongli.com/uploads"
					  :show-file-list="false"
					  :on-success="taxRegistration"
					  :before-upload="beforeAvatarUpload"
					  :with-credentials="true"
					  :data="picture.taxRegistrationCertifElc">
					  <img v-if="imageUrl.taxRegistrationCertifElc" :src="imageUrl.taxRegistrationCertifElc" class="avatar">
					  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
					</el-upload>
					<p>上传税务登记证</p>
			  	</div>
			  </div>
			</div>
			<div class="step3Funds">
				<el-form-item label="企业法人姓名" prop="corporation">
				   <el-input v-model="ruleForm.corporation"></el-input>
				</el-form-item>
			</div>
			<div class="step3Time step3Upload step3IdCard">
				<span class="step3Before">上传法人身份证正面</span>
				<div class="step3UploadContainer">
				  	<el-upload
					  class="avatar-uploader"
					  action="http://v20-dev.shunliandongli.com/uploads"
					  :show-file-list="false"
					  :on-success="SfzFront"
					  :before-upload="beforeAvatarUpload"
					  :with-credentials="true"
					  :data="picture.corporationSfzFront">
					  <img v-if="imageUrl.corporationSfzFront" :src="imageUrl.corporationSfzFront" class="avatar">
					  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
					</el-upload>
			  	</div>
			</div>
			<div class="step3Time step3Upload step3IdCard">
				<span class="step3Before">上传法人身份证反面</span>
				<div class="step3UploadContainer">
				  	<el-upload
					  class="avatar-uploader"
					  action="http://v20-dev.shunliandongli.com/uploads"
					  :show-file-list="false"
					  :on-success="SfzBack"
					  :before-upload="beforeAvatarUpload"
					  :with-credentials="true"
					  :data="picture.corporationSfzBack">
					  <img v-if="imageUrl.corporationSfzBack" :src="imageUrl.corporationSfzBack" class="avatar">
					  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
					</el-upload>
			  	</div>
			</div>
			<div class="step3Time">
				<span class="step3Before">纳税人类型</span>
				<el-select v-model="ruleForm.taxpayerType" placeholder="请选择">
				    <el-option
				      v-for="item in options"
				      :key="item.value"
				      :label="item.label"
				      :value="item.value">
				    </el-option>
			  	</el-select>
			</div>
			<div class="step3Time step3Upload step3IdCard">
				<span class="step3Before">纳税人证明证件</span>
				<div class="step3UploadContainer">
				  	<el-upload
					  class="avatar-uploader"
					  action="http://v20-dev.shunliandongli.com/uploads"
					  :show-file-list="false"
					  :on-success="general"
					  :before-upload="beforeAvatarUpload"
					  :with-credentials="true"
					  :data="picture.generalTaxpayer">
					  <img v-if="imageUrl.generalTaxpayer" :src="imageUrl.generalTaxpayer" class="avatar">
					  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
					</el-upload>
			  	</div>
			</div>
			<div class="step3Time step3TimeTrademark step3Trademark">
				<span class="step3Before">商标授权</span>
				<div class="step3TimeTrademarkContainer">
					<div  class="step3Bottom" v-for='(item,index) in data.brand' @click="step3Trademark(index)">
						<div>
						<h4>{{item.brandName}}</h4>
						<p>商标注册号:</p>
						<el-input v-model="trademark[index].trademarkSn" placeholder="请输入内容"></el-input>
						<p class="step3Left">品牌授权截止日期:</p>
						<el-date-picker
					      v-model="trademark[index].trademarkEndTime"
					      type="date"
					      placeholder="截止日期"
					      :picker-options="pickerOptions">
					    </el-date-picker>
						</div>
						<div class="step3Upload ">
						<div class="step3UploadContainer">
						  	<el-upload 
							  class="avatar-uploader"
							  action="http://v20-dev.shunliandongli.com/uploads"
							  :show-file-list="false"
							  :on-success="storeBrand"
							  :before-upload="beforeAvatarUpload"
							  :with-credentials="true"
							  :data="image.storeBrandReg.uploadKey[index]">
							  <img  class="avatar" ref="avatar">
							  <i class="el-icon-plus avatar-uploader-icon" ref="avatarIcon"></i>
							</el-upload>
							<p>商标注册证</p>
					  	</div>
					  	<div class="step3UploadContainer">
						  	<el-upload 
							  class="avatar-uploader"
							  action="http://v20-dev.shunliandongli.com/uploads"
							  :show-file-list="false"
							  :on-success="trademarkChange"
							  :before-upload="beforeAvatarUpload"
							  :with-credentials="true"
							  :data="image.trademarkChangeFile.uploadKey[index]">
							  <img  class="avatar" ref="ChangeFileAvatar">
							  <i class="el-icon-plus avatar-uploader-icon" ref="ChangeFileIcon"></i>
							</el-upload>
							<p>商标变更续展文件</p>
					  	</div>
					  	<div class="step3UploadContainer">
						  	<el-upload 
							  class="avatar-uploader"
							  action="http://v20-dev.shunliandongli.com/uploads"
							  :show-file-list="false"
							  :on-success="storeBrandPower"
							  :before-upload="beforeAvatarUpload"
							  :with-credentials="true"
							  :data="image.storeBrandPowerAttorney.uploadKey[index]">
							  <img  class="avatar" ref="AttorneyAvatar">
							  <i class="el-icon-plus avatar-uploader-icon" ref="AttorneyIcon"></i>
							</el-upload>
							<p>品牌授权</p>
					  	</div>
				  		</div>
					</div>
				</div>
			</div>
			<div class="step3Photo">
				<span class="step3PhotoText">质检报告</span>
				<div class="step3PhotoWall">
					<el-upload
					  action="http://v20-dev.shunliandongli.com/uploads"
					  list-type="picture-card"
					  :on-success="qualityChecking"
					  :before-upload="qualityChange"
					  :on-remove="qualityCheckingRemove"
					  :with-credentials="true"
					  :data="picture.qualityCheckingReport">
					  <i class="el-icon-plus"></i>
					</el-upload>
					<el-dialog v-model="quality" size="tiny">
					  <img width="100%" :src="quality" alt="">
					</el-dialog>
				</div>
			</div>
			<div class="step3Time step3Span" v-if="data.aptitude!=null">
				<span class="step3Before">行业资质</span>
				<div class="step3Upload step3TimeTrademark step3Qualify" >
					<div class="step3Industry" v-for="(item,index) in data.aptitude" @click="step3Qualification(index)">
						<el-upload 
						  class="avatar-uploader"
						  action="http://v20-dev.shunliandongli.com/uploads"
						  :show-file-list="false"
						  :on-success="qualify"
						  :before-upload="beforeAvatarUpload"
						  :with-credentials="true"
						  :data="image.qualification.uploadKey[index]">
						  <img  class="avatar" ref="qualificationAvatar">
						  <i class="el-icon-plus avatar-uploader-icon" ref="qualificationIcon"></i>
						</el-upload>
						<p>{{item.ap_name}}</p>
					</div>
				</div>
			</div>
			<div class="step3Photo">
				<span class="step3PhotoTextOther">其他行业资质</span>
				<div class="step3PhotoWall">
					<el-upload
					  action="http://v20-dev.shunliandongli.com/uploads"
					  list-type="picture-card"
					  :on-success="otherQuality"
					  :before-upload="otherChange"
					  :on-remove="otherQualityRemove"
					  :with-credentials="true"
					  :data="picture.otherQualification">
					  <i class="el-icon-plus"></i>
					</el-upload>
					<el-dialog v-model="quality" size="tiny">
					  <img :src="quality" alt="">
					</el-dialog>
				</div>
			</div>
			<div class="form_btn">
				<el-button style="margin-top: 12px;" @click="pre">上一步</el-button>
				<el-button style="margin-top: 12px;" @click="next('ruleForm')">下一步</el-button>
			</div>
		</el-form>
	</div>
</template>

<script>
	import {stepthree} from '../../../http/api.js'
	export default{
		data(){
			let companyMoney=(rules, value, callback)=>{
				if (!value) {
          			callback(new Error('请输入注册资金'));
	        	}else if(value<=0){
	        		callback(new Error('金额不能为负数或为零'));
	        	}else if([...value].length>9){
	        		callback(new Error('输入金额不能大于壹亿'))
	        	}else{
	        		callback()
	        	}
			}
			return{
				qualityCheckingImage:"",
        		quality: false,
				ruleForm:{
					companyRegisteredTime:'', //企业注册时间
					companyRegisteredCapital:'', //企业注册资金
					businessLicenceNumber:'', //营业执照注册号
					businessLicenceTerm:'0', //营业执照期限
					businessLicenceEnd:'' , // 营业执照期限 截止时间
					threeInOne:'1', //是否三证合一
					corporation:'', //企业法人姓名
					taxpayerType:'', //纳税人类型
					//照片path
					businessLicenceNumberElc:'', //营业执照
					organizationCodeElectronic:'', //组织机构代码
					taxRegistrationCertifElc:'', //税务登记证
					corporationSfzFront:'', //上传法人身份证正面
					corporationSfzBack:'', //上传法人身份证反面
					generalTaxpayer:'', //纳税人证明证件
					qualityCheckingReport:[], //质检报告
					otherQualification:[], //其他行业资质
				},
				rules:{
					companyRegisteredCapital: [
			           // { required: true, message: '请输入注册资金', trigger: 'blur' },
			           // { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' },
			           {  validator: companyMoney, trigger: 'blur' }
			        ],
			        businessLicenceNumber: [
			           { required: true, message: '请输入营业执照注册号', trigger: 'blur' },
			           { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
			        ],
			        businessLicenceTerm: [
			            { required: false, message: '请选择营业执照期限', trigger: 'change' }
			        ],
			        threeInOne: [
			            { required: false, message: '请选择是否三证合一', trigger: 'change' }
			        ],
			        corporation: [
			           { required: true, message: '请输入企业法人姓名', trigger: 'blur' },
			           { min: 2, max: 4, message: '长度在 2 到 4 个字符', trigger: 'blur' }
			        ],

				},
				options:[{ //纳税人种类
					value: 1,
          			label: '小规模纳税人'
				},{
					value: 2,
          			label: '一般纳税人'
				}],
				picture:{
					businessLicenceNumberElc:{uploadKey:'businessLicenceNumberElc'}, //营业执照
					organizationCodeElectronic:{uploadKey:'organizationCodeElectronic'}, ////组织机构代码
					taxRegistrationCertifElc:{uploadKey:'taxRegistrationCertifElc'}, //税务登记证
					corporationSfzFront:{uploadKey:'corporationSfzFront'}, //法人身份证正面
					corporationSfzBack:{uploadKey:'corporationSfzBack'}, //法人身份证反面
					generalTaxpayer:{uploadKey:'generalTaxpayer'}, //纳税人证明证件
					qualityCheckingReport:{uploadKey:''}, //质检报告
					otherQualification:{uploadKey:''}, //其他行业资质
				},
				imageUrl:{ //照片地址
					businessLicenceNumberElc:'', //营业执照
					organizationCodeElectronic:'', //组织机构代码
					taxRegistrationCertifElc:'', //税务登记证
					corporationSfzFront:'', //上传法人身份证正面
					corporationSfzBack:'', //上传法人身份证反面
					generalTaxpayer:'', //纳税人证明证件
				},
				pickerOptions: {
		        	disabledDate(time) {
			           return time.getTime() < Date.now() - 8.64e7;
			        }
		        },
		        pickerOptionsCompany:{
		        	disabledDate(time) {
			           return time.getTime() > Date.now() - 8.64e7;
			        }
		        },
		        markIndex:'', // 商标授权 index值
		        qIndex:'', //行业资质 index 值
        		trademark:[], //商标授权商标
        		qualification:[], //行业资质
        		data:'', //从第二部获取的数据
        		image:{
					storeBrandReg:{uploadKey: []}, //商标注册证
					trademarkChangeFile:{uploadKey: []}, //商标变更续展文件
					storeBrandPowerAttorney:{uploadKey: []}, //品牌授权
					qualification:{uploadKey:[]}, //行业资质
				},
        		reportIndex:0, //质检报告 index值
        		otherIndex:0, //其他行业资质 index值
			}
		},
		created(){
			this.data = JSON.parse(this.$route.query.data);
			console.log(this.data)
			//商标授权商标
			for(let i=0;i<this.data.brand.length;i++){
				 this.trademark.push({
					trademarkId:'', //品牌ID
				    storeBrandReg:'', //商标注册证
				    trademarkChangeFile:'', //商标变更续展文件
				    storeBrandPowerAttorney:'', //品牌授权
				    trademarkEndTime:'', //到期时间
				    trademarkSn:'', //商标证号
				 });
				 this.image.storeBrandReg.uploadKey.push({
				 	uploadKey:'storeBrandReg-'+i
				 });
				 this.image.trademarkChangeFile.uploadKey.push({
				 	uploadKey:'trademarkChangeFile-'+i
				 });
				 this.image.storeBrandPowerAttorney.uploadKey.push({
				 	uploadKey:'storeBrandPowerAttorney-'+i
				 })
			}
			for(let i=0;i<this.data.brand.length;i++){
				this.trademark[i].trademarkId=this.data.brand[i].brandId;
			}
			//行业资质
			for(let i=0;i<this.data.aptitude.length;i++){
				this.qualification.push({
					aptitudeId:'', //资质ID
					aptitudeName:'', //证件名
					aptitudeImage:'', //资质证明
				});
				this.image.qualification.uploadKey.push({
				 	uploadKey:'aptitudeImage-'+i
				});
			}
			for(let i=0;i<this.data.aptitude.length;i++){
				this.qualification[i].aptitudeId=this.data.aptitude[i].id;
			}	
		},
		methods:{
			//单张上传照片
			//营业执照
			business(res, file) {
		        this.imageUrl.businessLicenceNumberElc = URL.createObjectURL(file.raw);
		        this.ruleForm.businessLicenceNumberElc=res.data.imgUrl;
		    },
		    //组织机构代码
		    organization(res, file) {
		        this.imageUrl.organizationCodeElectronic = URL.createObjectURL(file.raw);
		        this.ruleForm.organizationCodeElectronic=res.data.imgUrl;
		    },
		     //税务登记证
		    taxRegistration(res, file) {
		        this.imageUrl.taxRegistrationCertifElc = URL.createObjectURL(file.raw);
		        this.taxRegistrationCertifElc=res.data.imgUrl;
		    },
		    //上传法人身份证正面
		    SfzFront(res, file) {
		        this.imageUrl.corporationSfzFront = URL.createObjectURL(file.raw);
		        this.ruleForm.corporationSfzFront=res.data.imgUrl;
		    },
		    // 上传法人身份证反面
		    SfzBack(res, file) {
		        this.imageUrl.corporationSfzBack = URL.createObjectURL(file.raw);
		        this.ruleForm.corporationSfzBack=res.data.imgUrl;
		    },
		    //纳税人证明证件
		    general(res, file) {
		        this.imageUrl.generalTaxpayer = URL.createObjectURL(file.raw);
		        this.ruleForm.generalTaxpayer=res.data.imgUrl;
		    },
		    //商标注册证
		    storeBrand(res, file, fileList) {
		    	this.$refs.avatar[this.markIndex].src=URL.createObjectURL(file.raw);
		    	this.$refs.avatar[this.markIndex].style.display="block";
		    	this.$refs.avatarIcon[this.markIndex].style.display="none";
		    	this.trademark[this.markIndex].storeBrandReg=res.data.imgUrl;
		    },
		    step3Trademark(index){  //获取index值
		    	this.markIndex=index;
		    },
		    //商标变更续展文件
		    trademarkChange(res, file) {
		        this.$refs.ChangeFileAvatar[this.markIndex].src=URL.createObjectURL(file.raw);
		    	this.$refs.ChangeFileAvatar[this.markIndex].style.display="block";
		    	this.$refs.ChangeFileIcon[this.markIndex].style.display="none";
		    	this.trademark[this.markIndex].trademarkChangeFile=res.data.imgUrl;
		    },
		    //品牌授权
		    storeBrandPower(res, file) {
		        this.$refs.AttorneyAvatar[this.markIndex].src=URL.createObjectURL(file.raw);
		    	this.$refs.AttorneyAvatar[this.markIndex].style.display="block";
		    	this.$refs.AttorneyIcon[this.markIndex].style.display="none";
		    	this.trademark[this.markIndex].storeBrandPowerAttorney=res.data.imgUrl;
		    },
		    //行业资质
		    qualify(res, file){
		    	this.$refs.qualificationAvatar[this.qIndex].src=URL.createObjectURL(file.raw);
		    	this.$refs.qualificationAvatar[this.qIndex].style.display="block";
		    	this.$refs.qualificationIcon[this.qIndex].style.display="none";
		    	this.qualification[this.qIndex].aptitudeImage=res.data.imgUrl;
		    },
		    step3Qualification(index){
		    	this.qIndex=index;
		    },
		    beforeAvatarUpload(file) {
		      const isLt2M = file.size / 1024 / 1024 < 2;
		      if (!isLt2M) {
		        this.$message.error('上传头像图片大小不能超过 2MB!');
		      }
		      return  isLt2M;
		    },
		    //质检报告
		    qualityChecking(res, file) {
		        this.qualityCheckingImage = file.url;
		        // this.dialogVisible = true;
		        this.ruleForm.qualityCheckingReport.push(res.data.imgUrl)
		    },
		    qualityChange(){
		    	// this.$set(this.picture.qualityCheckingReport,"uploadKey","qualityCheckingReport-"+this.j)
		    	this.picture.qualityCheckingReport.uploadKey="qualityCheckingReport-"+this.reportIndex;
		    	this.reportIndex++;
		    },
		    qualityCheckingRemove(file, fileList){
		    	for(let i=0;i<this.ruleForm.qualityCheckingReport.length;i++){
		    		if(this.ruleForm.qualityCheckingReport[i]===file.response.data.imgUrl){
		    			this.ruleForm.qualityCheckingReport.splice(i,1)
		    		}
		    	}
		    },
		    //其他行业资质
		    otherQuality(res, file){
		        this.qualityCheckingImage = file.url;
		        // this.dialogVisible = true;
		        this.ruleForm.otherQualification.push(res.data.imgUrl)
		    },
		    otherChange(){
		    	this.picture.otherQualification.uploadKey="otherQualification-"+this.otherIndex;
		    	this.otherIndex++;
		    },
		    otherQualityRemove(file, fileList){
		    	for(let i=0;i<this.ruleForm.otherQualification.length;i++){
		    		if(this.ruleForm.otherQualification[i]===file.response.data.imgUrl){
		    			this.ruleForm.otherQualification.splice(i,1)
		    		}
		    	}
		    },
		    next(ruleForm){
		    	this.ruleForm.trademark=this.trademark;
		    	this.ruleForm.qualification=this.qualification
		    	this.$refs[ruleForm].validate((valid) => {
	        		if (valid) {
	            		stepthree(this.ruleForm).then((response)=>{
	            			console.log(response)
	            			let success = response.data.success;
	            			if(success){
	            				this.$router.push({path:"/manager_home/submit/step4"})
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
		    pre(){
		    	this.$router.push({path:'/manager_home/submit/step2'})
		    },
		}
	}
</script>

<style>
	#step3{
		width: 100%;
	}
	#step3 h3{
		height: 50px;
		border-bottom: 1px solid #ddd;
		line-height: 50px;
		color: #888;
		padding-left: 15px;
		font-size: 20px;
		background: #f5f5f5;
	}
	.step3Time{
		padding: 30px 0;
		border-bottom: 1px dashed #e4e4e3;
	}
	.step3Time .el-input{
		width: 150px;
	}
	.step3Time .step3Before:first-child{
		display: inline-block;
		width: 185px;
		margin-right: 50px;
		text-align: right;
		margin-left: 0;
	}
	.step3Time .step3Before:first-child::before{
		content: '*';
		color: rgb(255, 73, 73);
		margin-right: 4px;
	}
	.step3Time .step3Before{
		font-size: 14px;
		color: #48576a;
		margin: 0 20px;
	}
	.step3Funds{
		padding: 30px 0;
		border-bottom: 1px dashed #e4e4e3;
	}
	.step3Funds .el-form-item{
		margin-bottom: 0px;
	}
	.step3Funds .el-form-item__label{
		width: 195px !important;
		margin-right: 40px;
	}
	.step3Funds .el-input{
		width: 520px !important;
	}
	.step3Funds .el-form-item__error{
		margin-left: 136px;
		margin-top: 10px;
	}
	.step3Deadline{
		margin-left: 234px;
		margin-top: 10px;
	}
	.step3Deadline span{
		font-size: 14px;
		color: #48576a;
		margin: 0 20px;
	}
	.step3Deadline .el-input{
		width: 150px !important;

	}
	.step3Term .el-form-item__label::before{
		content: '*';
		color: #ff4949;
		margin-right: 4px;
	}
	/*上传照片*/
	.step3Business{
		margin-left: 235px;
	}
	.step3Upload .avatar-uploader .el-upload {
	    border: 1px dashed #d9d9d9;
	    border-radius: 6px;
	    cursor: pointer;
	    position: relative;
	    overflow: hidden;
  	}
    /*.step3Upload .avatar-uploader .el-upload:hover {
    	border-color: #20a0ff;
    }*/
    .step3Upload .avatar-uploader-icon {
	    font-size: 28px;
	    color: #8c939d;
	    width: 178px;
	    height: 178px;
	    line-height: 178px;
	    text-align: center;
    }
    .step3Upload .avatar {
	    width: 178px;
	    height: 178px;
	    display: block;
    }
    .step3UploadContainer {
    	display: inline-block;
    	margin-right: 35px;
    	margin-top: 20px;
    }
    .step3UploadContainer p{
    	width: 178px;
    	height: 30px;
    	line-height: 30px;
    	text-align: center;
    	color: #48576a;
    	font-size: 20px;
    }
    .step3IdCard .step3UploadContainer{
		vertical-align: top;
		margin-top: 0;
    }
    .step3TimeTrademarkContainer{
    	display: inline-block;
    	vertical-align: top;
    }
    .step3TimeTrademarkContainer h4{
    	font-size: 20px;
    	margin-bottom: 10px;
    }

    .step3Bottom{
    	border-bottom: 1px solid #e4e4e3;
    	padding-bottom: 20px;
    	margin-bottom: 20px;
    }
    .step3Bottom:last-child{
    	border-bottom: none;
    }
    .step3TimeTrademarkContainer p{
    	display: inline-block; 
    	margin-right: 10px;
    }
    .step3TimeTrademarkContainer .step3Left{	
    	margin-left: 20px;
    }
    .step3TimeTrademark .avatar{
    	display: none;
    }
    .step3Industry {
    	display: inline-block;
    	vertical-align: top;
    	margin-right: 35px;
    	margin-bottom: 20px;
    }
    .step3Report{
    	display: inline-block;
    	vertical-align: top;
    }
    .step3Report .el-upload-list__item-actions{
    	left: -20px !important;
    }
    .step3Photo{
    	padding: 30px 0;
		border-bottom: 1px dashed #e4e4e3;
    }
    .step3PhotoText{
    	width: 185px;
    	display: inline-block;
    	vertical-align: top;
    	text-align: right;
    	margin-right: 50px;
    }
    .step3PhotoText::before{
    	content: '*';
		color: rgb(255, 73, 73);
		margin-right: 4px;
    }
    .step3PhotoTextOther{
    	width: 185px;
    	display: inline-block;
    	vertical-align: top;
    	text-align: right;
    	margin-right: 50px;
    }
    .step3PhotoWall{
    	display: inline-block;
    }
	.step3CompanyRegisteredCapital .el-form-item__label::before{
		content: '*';
	    color: #ff4949;
	    margin-right: 4px;
	}
	.step3Qualify{
		margin-left: 235px;
	}
	.step3Qualify p{
		width: 178px;
    	height: 30px;
    	line-height: 30px;
    	text-align: center;
    	color: #48576a;
    	font-size: 20px;
	}
</style>