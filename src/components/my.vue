<template id="my">
   <div>
        <div class="header_empty"></div>
        <div class="header">
            <span class="backbtn_box" @click="back()"><img src="src/assets/images/back_btn.png" alt=""></span>
            <span class="header_txt">个人中心</span>
        </div>
        <!-- ^^^^^^ -->
        <div class="backgd_top">
            <div class="setting_btn" >
                <span @click="setting()"></span>
            </div>
            <div class="user">
                <div class="pu">
                    <div class="pu_img"><img src="src/assets/images/my/pu.jpg" alt=""></div>
                </div>
                <p class="my_phone">{{this.$store.state.user_now}}</p>
                <div class="vip">
                    <span>普通会员</span>
                </div>
                <div class="set_passwd">
                    <span>设置登录密码</span>
                </div>
            </div>
            <div class="balance">
                <ul>
                    <li>积分：0</li>
                    <li>余额：0.00</li>
                    <li>成长值:0</li>
                </ul>
            </div>
            <div class="fun_btn">
                <div class="order">
                    <span class="order1">全部订单</span>
                    <span class="order2">></span>
                    
                </div>
                <div class="order_btn">
                    <ul>
                        <li v-for="(item,index) in list_order">
                            <span class="order_ico" :style="'background: url(./src/assets/images/my/ico1.png) no-repeat 0px '+(-40*index-40)+'px'"></span>
                            <span class="list_txt">{{item.text}}</span>
                        </li>
                    </ul>
                </div>
                <div class="more_btn">
                    <ul>
                        <li v-for="(item,index) in list_more">
                            <span class="more_ico" :style="'background: url(./src/assets/images/my/ico2.png) no-repeat 0px '+(-60*index)+'px'"></span>
                            <span class="list_txt2">{{item.text}}</span> 
                        </li>
                    </ul>
                </div>
                <div class="btn_empty"></div>
            </div>
        </div>
        
    </div>
</template>


<script>
    export default{
        data(){
            return{
                list_order:[
                    {
                        text:'进行中'
                    },
                    {
                        text:'已完成'
                    },
                    {
                        text:'无效'
                    },
                    {
                        text:'待评价'
                    },
                ],
                list_more:[
                    {
                        text:'充值返现'
                    },
                    {
                        text:'我的私人定制'
                    },
                    {
                        text:'物流查询'
                    },
                    {
                        text:'退换货记录'
                    },
                    {
                        text:'地址管理'
                    },
                    {
                        text:'我的礼品卡'
                    },
                    {
                        text:'我的优惠卷'
                    },
                    {
                        text:'我的积分'
                    },
                    {
                        text:'我的评论'
                    },
                    {
                        text:'我的提问'
                    },
                    {
                        text:'投诉建议'
                    },
                ]
                
            }
        },
        methods:{
            back(){
                this.$router.go(-1)
            },
            setting(){
                this.$router.replace('/setting')
            }
        }
    }


</script>
<style scoped>
    .btn_empty{
        width: 100%;
        height: 50px;
        
    }
    .header_empty{
       width: 100%;
       height: 50px; 
    }
   .header{
       width: 100%;
       height: 50px;
       background-color: rgb(184,28,34);
       position: absolute;
       text-align: center;
       top: 0px;
   }
   .backbtn_box{
       display: inline-block;
       position: absolute;
       left: 0px;
       height: 50px;
       text-align: center;
   }
   .header img{
       margin-top: 15%;
       width: 70%;
   }
   .header_txt{
       line-height: 50px;
       font-size: 20px;
       color: white;
   }
   .backgd_top{
       width: 100%;
       height: 200px;
       background: url(../assets/images/my/b.png)no-repeat center top;
       background-size: cover;
       text-align: center;
   }
   .setting_btn{
       overflow: hidden;
   }
   .setting_btn span{
       width: 35px;
       height: 36px;
       background: url(../assets/images/my/ico1.png)no-repeat 0px 0px;
       float: right;
       transform: scale(0.6);
   }
   .pu_img{
       margin-left: 50%;
       position: relative;
       left: -36px;
       width: 72px;
       height: 72px;
       border-radius: 50%;
       overflow: hidden;
   }
   .my_phone{
        font-size: 12px;
        color: white;
        margin-top: 5px;
   }
   .vip span{
        display: inline-block;
        border-radius: 4px;
        padding: 1px 3px;
        font-size: 12px;
        color: black;
        background: white;
        margin-top: 5px;
   }
   .set_passwd{
        display: inline-block;
        padding: 1px 3px;
        border-radius: 4px;
        font-size: 12px;
        color: black;
        background: white;
        margin-top: 5px; 
   }
    .balance ul{
        margin-top: 5px;
        width: 100%;
        font-size: 12px;
        overflow: hidden;
    }
    .balance{
        overflow: hidden;
    }
    .balance li{
        color: white;
        width: 33.3333%;
        float: left;
    }
    .fun_btn{
        padding: 10px 0px;
        width: 100%;
        background-color: rgb(240,239,245);
    }
    .order{
        font-size: 15px;
        line-height: 30px;
        padding: 0px 6px;
        width: 100%;
        height: 30px;
        background-color: white;
    }
    .order1{
        
        float: left;
    }
    .order2{
        float: right;
    }


    .order_ico{
        display: inline-block;
        height: 40px;
        width: 40px;
        display:inline-block;
        transform: scale(0.6);
        
    }
    .list_txt{
        margin-top: -8px;
       display:block;
    }
    .order_btn{
        border-top: 1px solid rgb(240,239,245);
        background-color: white;
        overflow: hidden;
    }
    .order_btn li{
        padding: 10px 0px;
        text-align: center;
        width: 25%;
        float: left;
        font-size: 12px;
    }


    .more_btn{
        background-color: white;
        overflow: hidden;
        margin-top: 10px;
    }
    .more_ico{
        display: inline-block;
        height: 60px;
        width: 60px;
        display:inline-block;
        transform: scale(0.6);
        
    }
    .more_btn li{
        border-right: 1px solid rgb(240,239,245);
        border-bottom: 1px solid rgb(240,239,245);
        padding: 10px 0px;
        text-align: center;
        width: 25%;
        float: left;
        font-size: 12px;
    }
    .list_txt2{
        margin-top: -8px;
       display:block;
    }


</style>