<template>
    <div class="foot">
        <div class="footTop">
            <ul>
                <li>
                    <div class="pic">
                        <img src="../../assets/img/trench.png" alt="">
                    </div>
                    <div class="introduce">
                        <p class="textTop">多渠道市场推广</p>
                        <p class='textBotttom'><span>创客</span><span>微信</span><span>APP</span></p>
                    </div>
                </li>
                <li>
                    <div class="pic">
                        <img src="../../assets/img/mail.png" alt="">
                    </div>
                    <div class="introduce">
                        <p class="textTop">精选商家</p>
                        <p class='textBotttom'>减少同质竞争</p>
                    </div>
                </li>
                <li>
                    <div class="pic">
                        <img src="../../assets/img/flow.png" alt="">
                    </div>
                    <div class="introduce">
                        <p class="textTop">免费流量</p>
                        <p class='textBotttom'>应用上新，产品顶置</p>
                    </div>
                </li>        
                <li>
                    <div class="pic">
                        <img src="../../assets/img/mine.png" alt="">
                    </div>
                    <div class="introduce">
                        <p class="textTop">特属专员</p>
                        <p class='textBotttom'>对入驻商家一对一服务</p>
                    </div>
                </li>
            </ul>
        </div>
        <div class="footBottom">
            <ul>
                <li>
                    <p>关注我们</p>
                    <div class="wx">
                        <img src="../../assets/img/wx.png" alt="">
                        <div class="ewm"></div>
                    </div>
                </li>
                <li>
                    <p>APP下载</p>
                    <div class="downBox">
                        <div class="down">
                            <img src="../../assets/img/apple.png" alt="">
                            <div class="ewm"></div>
                        </div>
                        <div class="down">
                            <img src="../../assets/img/android.png" alt="">
                            <div class="ewm"></div>
                        </div>
                    </div>
                </li>
                <li>
                    <p>联系我们</p>
                    <p class="adress">COM-300-200</p>
                    <p class="time">服务时间: 8: 30------6: 00</p>
                </li>
            </ul>
            <div class='bottomText'>
                <span>c</span>
                <i>2014~2017</i>
                <b>浙江顺联网络科技有限公司</b>
                <i>备注号</i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {

        }
    }
}
</script>
<style scoped>
    .foot{
        color:#898888;
    }
    .footTop{
        height:122px;
        background:#3c3c3c;
    }
    .footBottom{
        height:300px;
        background:#333333;
    }
    .footTop ul{
        width:1100px;
        height:100%;
        margin:0 auto;
    }
    .footTop ul li{
        height:48px;
        padding-top:40px;
        padding-bottom:34px;
        float:left;
        margin-right:103px;
    }
    .footTop ul li:last-child{
        margin-right:0;
    }
    .footTop li .pic{
        width:44px;
        height:42px;
        float:left;
    }
    .footTop li .introduce{
        height:42px;
        float:left;
        font-size:18px;
        padding-left:22px;
    }
    .textBotttom{
        font-size:14px;
        color:#a9a9a9;
        height:14px;
        padding-top:10px;
    }
    .textTop{
        height:18px;
        line-height:18px;
    }
    .textBotttom span{
        border-right:1px solid #444444;
        padding:0 12px 0 12px;
    }
    .textBotttom span:last-child{
        border:none;
    }
    .textBotttom span:first-child{
        padding-left:0;
    }
    .footBottom ul{
        padding-top:68px;
        width:1202px;
        margin:0 auto;
        overflow:hidden;
    }
    .footBottom ul li{
        float:left;
        width:400px;
    }
    .footBottom li p{ 
        text-align: center;
        height:24px;
        font-size:24px;
        line-height:24x;
    } 

    .footBottom .wx .ewm,.footBottom .down .ewm{
        width:100%;
        height:100%;
        background:white;
        position:absolute;
        left:0;
        top:0;
        display:none;
    }
    .footBottom .wx:hover .ewm{
        display:block;
    }
    .footBottom .wx:hover img{
        display:none;
    }
    .footBottom .down:hover .ewm{
        display:block;
    }
    .footBottom .down:hover img{
        display:none;
    }
    .footBottom .wx,.footBottom .down{
        width:77px;
        height:77px;
        position:relative;
        background:#2d2d2d;
        border-radius: 50%;
        text-align: center;
        margin:0 auto;
        margin-top:24px;
    }
    .footBottom .down{
        float:left;
        margin-right:50px;
    }
    .footBottom .down:last-child{
        margin-right:0px;
    }
    .footBottom .wx img{
        margin-top:20px;
        width:46px;
        height:37px;
    }
    .footBottom .down img{
        width:33px;
        height:41px;
        margin-top:18px;
    }

    .footBottom .downBox{
        width:210px;
        margin:0 auto;
    }
    .footBottom .time,.footBottom .adress{
        height:14px;
        font-size: 14px;
        line-height: 14px;
        padding-top:25px;
        color:#989595;
    }
    .bottomText{
        width:100%;
        font-size:14px;
        text-align: center;
        margin-top:64px;
    }
    .bottomText span{
        border:1px solid #a9a9a9;
        display:inline-block;
        width:12px;
        height:12px;
        font-size:14px;
        line-height:12px;
        text-align: center;
        border-radius: 50%
    }
    .bottomText b{
        margin:0 33px 0 33px;
    }
</style>
