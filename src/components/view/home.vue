<template>
	<div class="home">
        <!-- 头部轮播 -->
		<div class="swiperBox">
			<swiper :options="swiperOption1"  ref="mySwiper1">   
            	<swiper-slide v-for="i in 5" key="key">
            		<img src="../../assets/img/banner1.png" alt="">
            	</swiper-slide>
            	<!-- dot -->  
            	<div class="swiper-pagination" slot="pagination"></div>  
        	</swiper>
		</div>

        <!-- 加入我们 -->
        <div class="join">
            <p class="title">加入我们</p>
            <div class="box">
                <div>
                    <img src="../../assets/img/join1.png">
                    <p class="boxTitle">5500万+用户</p>
                    <p class="boxContent">全面覆盖全国一、二、三、四、五线县市</p>
                </div>
                <div>
                    <img src="../../assets/img/join2.png">
                    <p class="boxTitle">平台销量大</p>
                    <p class="boxContent">每年发出的包裹连起来可以绕地球2.6圈</p>
                </div>
                <div>
                    <img src="../../assets/img/join3.png">
                    <p class="boxTitle">F2C模式</p>
                    <p class="boxContent">下一个千亿级的特卖平台，FAC模式的体现</p>
                </div>
                <div>
                    <img src="../../assets/img/join4.png">
                    <p class="boxTitle">移动端下载破亿</p>
                    <p class="boxContent">APP下载量超1亿，拥有千万级活跃用户</p>
                </div>
            </div>
        </div>

        <!-- 入驻流程 -->
        <div class="in">
            <p class="title">入驻流程</p>
            <div class="box">
                <div class="list">
                   <div class="img">
                       <img src="../../assets/img/in1.png" alt="">
                   </div>
                   <div class="p">
                       <p>第一步：注册会员</p>
                       <span>注册会员<i></i>填写基本资料</span>
                   </div>
                </div>
                <div class="list">
                   <div class="img">
                       <img src="../../assets/img/in2.png" alt="">
                   </div>
                   <div class="p">
                       <p>第二步：签署协议</p>
                       <span>签署协议<i></i>填写详细信息</span>
                   </div>
                </div>
                <div class="list">
                   <div class="img">
                       <img src="../../assets/img/in3.png" alt="">
                   </div>
                   <div class="p">
                       <p>第三步：审核</p>
                       <span>信息审核<i></i>财务审核</span>
                   </div>
                </div>
                <div class="list">
                   <div class="img">
                       <img src="../../assets/img/in4.png" alt="">
                   </div>
                   <div class="p">
                       <p>第四步：缴纳</p>
                       <span>缴纳费用<i></i>开通店铺</span>
                   </div>
                </div>
            </div>
        </div>

        <!-- 入驻大牌 -->
        <div class="bigBrand">
            <img src="../../assets/img/dp_bg.png" alt="">
            <div class="bg_mask">
                <p class="title">入驻大牌</p>
                <div class="roll">
                    <img class="left" src="../../assets/img/left.png" alt="">
                    <div class="ul">
                        <ul>
                            <li v-for="i in 8">
                                <img src="../../assets/img/dapai.png" alt="">
                            </li>
                        </ul>
                    </div>
                    <img class="right" src="../../assets/img/right.png" alt="">
                </div>
            </div>    
        </div>



        <!-- 成功案例 -->
        <div class="success">
            <p class="title">成功案例</p>
            <swiper :options="swiperOption1"  ref="mySwiper1">   
                <swiper-slide v-for="i in 2" key="key">
                    <div class="success_box">
                        <div class="su_box">
                            <img src="../../assets/img/good.png" alt="">
                            <p>遇雨开花伞<span>单日售出6850件</span></p>
                            <div class="mask">
                                <img src="../../assets/img/ewm.png" alt="">
                                <div>微信扫一扫</div>
                            </div>
                        </div>
                        <div class="su_box">
                            <img src="../../assets/img/good.png" alt="">
                            <p>遇雨开花伞<span>单日售出6850件</span></p>
                            <div class="mask">
                                <img src="../../assets/img/ewm.png" alt="">
                                <div>微信扫一扫</div>
                            </div>
                        </div>
                        <div class="su_box">
                            <img src="../../assets/img/good.png" alt="">
                            <p>遇雨开花伞<span>单日售出6850件</span></p>
                            <div class="mask">
                                <img src="../../assets/img/ewm.png" alt="">
                                <div>微信扫一扫</div>
                            </div>
                        </div>
                        <div class="su_box">
                            <img src="../../assets/img/good.png" alt="">
                            <p>遇雨开花伞<span>单日售出6850件</span></p>
                            <div class="mask">
                                <img src="../../assets/img/ewm.png" alt="">
                                <div>微信扫一扫</div>
                            </div>
                        </div>
                    </div>    
                </swiper-slide>
                <!-- dot -->  
                <div class="swiper-pagination" slot="pagination"></div>  
            </swiper>
        </div>
	</div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default{
	components: {  
        swiper,  
        swiperSlide  
    },
    data(){
    	return{
    		swiperOption1:{
    			pagination: '.swiper-pagination', 
                slidesPerView: 'auto',  
                centeredSlides: true,  
                paginationClickable: true,
                autoplay: 3000,
                loop : true,
                autoplayDisableOnInteraction : false,
    		}
    	}
    },
    methods:{
        soll(){
            let ul = document.querySelector(".roll .ul ul");
            ul.innerHTML= ul.innerHTML+ ul.innerHTML;
            let li = document.querySelectorAll(".roll .ul ul li");
            ul.style.width=172*li.length+"px";
            var speed=-2;
            var timer=null;
            function stat(){
                timer=setInterval(function () {
                    if (ul.offsetLeft==-ul.offsetWidth/2){
                        ul.style.left="0";
                    }
                    else if(ul.offsetLeft>0){
                        ul.style.left=-ul.offsetWidth/2+"px";
                    }
                    ul.style.left=ul.offsetLeft+speed+"px";
                },20)
            }
            stat();
            let leftBtn = document.querySelector(".roll .left");
            leftBtn.onclick=() => {
                speed=2;
            };
            let rightBtn = document.querySelector(".roll .right");
            rightBtn.onclick=() => {
                speed=-2;
            };

            document.querySelector(".roll .ul ul").onmouseover=() => {
                clearInterval(timer)
            }
            document.querySelector(".roll .ul ul").onmouseout=() => {
                stat()
            }

        }
    },
    created(){
        this.$store.dispatch("changeIndex","1")
    },
    mounted(){
        this.soll();
    }
}
</script>
<style>

/* 首页轮播 */
.home .swiperBox{
	height: 620px;
	width: 100vw;
    overflow: hidden;
}
.home .swiperBox .swiper-slide{
    width: 100%;
    height: 620px;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden!important;
}
.home .swiperBox .swiper-slide img{
	height: 620px;
}
.home .swiper-pagination-bullet-active{
	background: #ff8202!important;
}
/* 加入我们 */
.home .join{
    height: 431px;
    border-top: 1px solid transparent;
    background: #fff;
}
.home p.title{
    text-align: center;
    font-size: 34px;
    margin: 50px 0;
}
.home .box{
    width: 1200px;
    overflow: hidden;
    margin: 0 auto;
}
.home .join .box div{
    width: 25%;
    text-align: center;
    float: left;
}
.home .join .box div img{
    width: 200px;
    height: 130px;
    margin-bottom: 40px;
}
.home .join .box div .boxTitle{
    font-size: 22px;
    margin-bottom: 10px;
}
.home .join .box div .boxContent{
    font-size: 14px;
    color: #666666;
}
/* 入驻流程 */
.home .in{
    height: 431px;
    border-top: 1px solid transparent;
    background: #f5f5f5;
}
.home .in .box{
    box-sizing: border-box;
    padding: 0 25px;
    display: flex;
    justify-content: space-between;
}
.home .in .box .list{
    width: 242px;
    height: 220px;
    border: 1px solid #d7d7d7;
    text-align: center;
}
.home .in .box .list .img{
    height: 126px;
    border-bottom: 1px dashed #d7d7d7;
}
.home .in .box .list .img img{
    height: 126px;
}
.home .in .box .list .p{
    font-size: 18px;
    padding-top: 25px;
}
.home .in .box .list .p span{
    font-size: 12px;
    color: #858585;
}
.home .in .box .list .p span i{
    display: inline-block;
    width: 1px;
    height: 10px;
    background: #666666;
    margin: 0 15px;
}
/* 入驻大牌 */
.home .bigBrand{
    height: 431px;
    border-top: 1px solid transparent;
    position: relative;
    overflow: hidden;
}
.home .bigBrand img{
    width: 100%;
    height: auto;
}
.home .bigBrand .title{
    color: #fff;
}
.home .bigBrand .bg_mask{
    position: absolute;
    left: 0;
    top: 0;
    border-top: 1px solid transparent;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.4);
}
.home .bigBrand .bg_mask .roll{
    width: 1200px;
    margin: 90px auto 0;
    position: relative;
    height: 100px;
}
.home .roll .left,.home .roll .right{
    position: absolute;
    width: 30px;
    height: 34px;
    top: 50%;
    margin-top: -17px;
    cursor: pointer;
}
.home .roll .left{
    left: 0;
}
.home .roll .right{
    right: 0;
}
.home .roll .ul{
    width: 1030px;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    height: 100px;
}
.home .roll .ul ul{
    overflow: hidden;
    position: absolute;
    left: 0;
    top: 0;
    height: 100px;
}
.home .roll .ul ul li{
    float: left;
    width: 166px;
    height: 100px;
    margin-right: 6px;
}
.home .roll .ul ul li img{
    width: 100%;
    height: 100%;
}
/* 成功案例 */
.home .success{
    border-top: 1px solid transparent;
    margin-bottom: 60px;
}
.success_box{
    width: 1200px;
    margin: 0 auto 60px;
    display: flex;
    justify-content: space-between;
}
.success_box .su_box{
    width: 282px;
    height: 390px;
    text-align: center;
    border: 1px solid #8a8a8a;
    position: relative;
}
.success_box .su_box:hover{
    border-color: transparent;
}
.success_box .su_box:hover .mask{
    display: block;
}
.success_box .su_box .mask{
    width: 100%;
    height: 100%;
    padding-top: 88px;
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0;
    display: none;
    background: rgba(255,130,2,.9);
}
.success_box .su_box .mask img{
    width: 157px;
    height: 157px;
}
.success_box .su_box .mask div{
    width: 157px;
    height: 28px;
    background: #fff;
    border-radius: 20px;
    text-align: center;
    line-height: 28px;
    margin: 45px auto 0;
}
.success_box .su_box p{
    font-size: 20px;
    position: absolute;
    text-align: center;
    width: 100%;
    bottom: 37px;
}
.success_box .su_box p span{
    color: #858585;
    font-size: 16px;
    margin-left: 10px;
}
.success .swiper-pagination-bullet-active{
    transition: 0.2s;
    width: 23px;
    height: 8px;
    border-radius: 5px;
}
</style>