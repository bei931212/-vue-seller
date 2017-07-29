<template>
    <div class="header head">
        <el-menu :default-active="index" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <div class="headTitle">
                <div class="logoBox">
                    <img class="logo" src="../../assets/img/logo.png" alt="">
                    <div class="logoText">
                        <h4>顺联动力<i>R</i></h4>
                        <span>shunliandongli.com</span>
                    </div>
                </div>
                <div class='text'>
                    <p>共享社交电商平台</p>
                    <p><img class="tel" src="../../assets/img/tel.png" alt=""><span>400-200-300</span></p>
                </div>
            </div>
            <el-menu-item index="1" @click="goto('/home'),changeIndex('1')">首页</el-menu-item>
            <el-menu-item index="2" @click="goto('/process'),changeIndex('2')">入驻流程</el-menu-item>
            <el-menu-item index="3" @click="goto('/standard'),changeIndex('3')">入驻标准</el-menu-item>
            <el-menu-item index="4"  @click="goto('/cost'),changeIndex('4')">入驻费用</el-menu-item>
            <el-button type="text" class="login" @click='login' v-show="Login">登录</el-button>
            <el-button type="text" class="reg" @click='goto("/register")' v-show="Login">注册</el-button>
            <el-button type="text" class="manage" v-show="manager" @click='goto("/manager_home")'>进入入驻页面</el-button>
            <el-button type="text" class="manage" v-show="sellerBack" @click='goto("/manager_home")'>进入商家后台</el-button>
            <el-button type="text" class="exit" v-show="manager" @click='exit'>退出</el-button>
            <el-button type="text" class="exit" v-show="sellerBack" @click='exit'>退出</el-button>
        </el-menu> 
        <!-- 登录弹窗 -->
        <el-dialog :visible.sync="dialogFormVisible">
            <div class="loginTitle">
                <img src="../../assets/img/logo.png" alt="">
                <p class="title">商家后台登录</p>
            </div>

            <el-form ref="ruleForm2" class="demo-ruleForm">
                <p class="err">
                    <span  v-show="err">{{errorInfo}}</span>
                </p>
                <div class="username">
                    <div class="icon"><img src="../../assets/img/me.png" alt=""></div>
                    <div class="inputBox">
                        <el-input type="text" v-model='userName'></el-input>
                    </div>
                </div>
                <div class="password">
                    <div class="icon"><img src="../../assets/img/lock.png" alt=""></div>
                    <div class="inputBox">
                        <el-input type="password" v-model='passWord'></el-input>
                    </div>
                </div>
                <div class="forget">
                    <span>忘记密码？</span>
                    <span @click='goToNewReg'>注册新用户</span>
                </div> 
                <el-button type="primary" @click='doLogin'>登录</el-button>
            </el-form>
        </el-dialog>
    </div>
</template>
<script>
import {mapGetters,mapActions} from 'vuex'
import {login,loginout} from '../../http/api'
import Cookie from 'js-cookie'
export default {
    data() {
        return {
            dialogFormVisible:false,
            err:false,
            userName:null,
            passWord:null,
            Login:true,
            manager:false,
            sellerBack:false,
            errorInfo:null
        };
    },
    computed:mapGetters([
        "index"
    ]),
    methods: {
        changeIndex(index){
            this.activeIndex=index;
        },
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
        goto(path){
            if(path.indexOf("/")!==-1){
                this.$router.push({path:path})
            }else{
                this.$router.push({name:path})
            }
        },
        login(){
            var _this=this
            this.passWord=null
            this.userName=null
            this.$router.push({path:'/'})
            //异步请求
            setTimeout( function() {
                _this.err=false
                _this.dialogFormVisible = true
            })
        },
        doLogin(){
            var _this=this
            login({username:this.userName,password:this.passWord}).then(function(response){
                console.log(response)
                if(response.data.success){
                    if(response.data.data.sellerStatus==1){
                        _this.Login=false
                        _this.manager=false
                        _this.sellerBack=true
                        _this.dialogFormVisible=false
                        _this.err=false
                        _this.$router.push({path:'/'});
                    }else if(response.data.data.sellerStatus==0){
                        _this.Login=false
                        _this.manager=true
                        _this.sellerBack=false
                        _this.dialogFormVisible=false
                        _this.err=false
                        _this.$router.push({path:'/'});
                    }else if(response.data.data.sellerStatus==-1){
                        _this.Login=false
                        _this.manager=false
                        _this.sellerBack=false
                    }
                }else{
                    _this.errorInfo=response.data.message
                    _this.err=true
                    _this.$message.error(response.data.message);
                }
            })
        },
        exit(){
            var _this=this
            loginout().then(function(response){
                console.log(response)
                if(response.data.success){ 
                    console.log(response)
                    _this.Login=true
                    _this.manager=false
                    _this.$router.push({path:'/'});
                }else{
                    _this.$message.error('退出失败');
                }
            })
        },
        goToNewReg(){
            this.dialogFormVisible=false
            this.err=false
            this.$router.push({path:'/register'});
        }
    },
    created(){
        if(Cookie.get('hashToken')){
            if(Cookie.get('sellerStatus')==0){
                this.Login=false
                this.manager=true 
                this.sellerBack=false
            }else if(Cookie.get('sellerStatus')==1){
                this.Login=false
                this.manager=false
                this.sellerBack=true
            }else if(Cookie.get('sellerStatus')==-1){
                this.Login=false
                this.manager=false
                this.sellerBack=false
                this.$message.error(response.data.message);
            }
        }else{
            this.Login=true
            this.manager=false
            this.sellerBack=false
        }
    }
}
</script>
<style>
.head{
    -webkit-box-shadow: 0 10px 20px rgba(190,190,190,0.3)
}
.header .login{
    background:#eceaea!important;
    color:#aaaaaa!important;
    margin-left:36px!important;
}
.header .el-menu-demo .manage{
    color:#ff9120!important;
    display:inline-block;
    font-size:14px!important;
    margin-right:12px!important;
}
.el-menu-demo .manage span{
    display:inline-block;
    padding-right:12px;
    border-right:1px solid #aaa;
}
.header .el-menu-demo .exit{
    color:#aaa!important;
    font-size:14px!important;
}
.el-menu-demo .exit span{
    padding-left:25px;
}
.login:hover{
    color: #aeaeae;
}
.header .reg{
    color: #fff!important;
}
.reg:hover{
    color: #fff;
}
 .header .el-menu{
    width:1200px!important;
    margin:0 auto!important;
    border-radius: 2px!important;
    list-style: none!important;
    position: relative!important;
    background-color:white!important;
    color:#666666!important;
    height:108px!important;
  }
 .header .el-menu .headTitle{
    width: 377px;
    text-align: center;
    float: left;
    padding-top: 26px;
    box-sizing: border-box;
    margin-right:130px;
  }
  .header .el-menu-item:hover{
    background:white!important;
    border-bottom:none!important;
  }
  .header .el-menu--horizontal .el-menu-item{
    height:100%!important;
    line-height:108px!important;
    font-size:18px!important;
    margin-right:24px!important;
  }
  .header .el-menu--horizontal .el-menu-item.is-active {
    color:#ff9120!important;
    border-bottom:2px solid #ff9120!important;
  }
  .header .el-menu--horizontal .el-menu-item {
    border-bottom:none!important;
  }
  .logoBox{
    width:200px;
    height:55px;
    float:left;
  }
  .logoBox h4{
    height:30px;
    line-height:30px;
    font-size:30px;
    font-weight:bold;
    position:relative;
  }
  .logoBox i{
    position:absolute;
    right:-6px;
    top:-6px;
    border:1px solid #666;
    font-size:12px;
    width:12px;
    height:12px;
    display:inline-block;
    line-height: 12px;
    font-weight:normal;
    border-radius: 50%;
    color:#aaa;
  }
  .logoBox span{
    height:12px;
    line-height: 12px;
    font-size:12px;
    padding-top:10px;
    display:inline-block;
    color:#aaa;
  }
  .logoText{
    width:130px;
    float:left;
    padding-left:12px;
  }
  .logo{
    float:left;
  }
  .text{
    width:130px;
    float:left;
    padding-left:30px;
    color:#aaaaaa;
  }
  .text p{
    height:16px;
    margin-top:14px;
    text-align:left;
    font-size:16px;
  }
  .text p:nth-child(1){
    margin-top:10px;
  }
  .tel{
    width:16px;
    height:16px;
    float:left;
  }
  .text p span{
    float:left;
    display:inline-block;
    height:16px;
    line-height:16px;
    margin-left:12px;
    font-size:14px;
    width:102px;
  }
.header .el-menu-demo .el-button{
    width:57px!important;
    height:27px!important;
    margin-top:41px!important;
    padding:0!important;
    border-radius:20px!important;
}

.header .reg{
    background:#ff8202!important;
    color:white!important;
}
.loginTitle{
    text-align: center;
    padding-bottom: 35px;
    border-bottom: 1px solid #d9d9d9;
}
.loginTitle img{
    width: 70px;
    margin-bottom: 10px;
}
.loginTitle .title{
    font-size: 26px;
}
.demo-ruleForm .err{
    margin: 0 70px;
    height: 44px;
    line-height: 44px;
    font-size: 12px;
    color: #ff8373;
}
.header .demo-ruleForm .inputBox .el-input{
    height: 100%!important;
}
.header .inputBox .el-input__inner{
    height: 100%!important;
    /* border-color: transparent; */
}
.demo-ruleForm .username,.demo-ruleForm .password{
    margin: 0 35px 25px;
    height: 55px;
    border: 1px solid #d9d9d9;
    border-radius: 5px;
    display: flex;
}
.demo-ruleForm .username .icon,.demo-ruleForm .password .icon{
    width: 55px;
    height: 100%;
    background: #eeeeee;
    border-right: 1px solid #d9d9d9;
    text-align: center;
    display: inline-block;
}
.demo-ruleForm .username .icon img,.demo-ruleForm .password .icon img{
    width: 30px;
    height: 30px;
    margin-top: 13px;
}
.demo-ruleForm .inputBox{
    flex: 1;
    height: 100%;
}
.header .demo-ruleForm .el-button{
    display: block!important;
    margin: 0 auto!important;
    font-size: 22px!important;
    width: 202px!important;
    height: 60px!important;
}
.forget{
    display: flex;
    margin: 0 35px 40px;
    justify-content: space-between;
}
.forget span{
    font-size: 14px;
    color: #66afe9;
    cursor: pointer;
}
</style>