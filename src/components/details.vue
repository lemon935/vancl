<template id="details">
    <div>
        <div class="header_empty"></div>
        <div class="header">
            <span class="backbtn_box" @click="back()"><img src="src/assets/images/back_btn.png" alt=""></span>
            <span class="header_txt">商品详情</span>
        </div>


        <div class="detail_img_box">
            <img :src="list_details[msg-1].src" alt="" >
            <div class="red_backgd">
                <div class="price">
                    <span class="p_txt">充值后相当于￥</span>
                    <span class="p_now">{{list_details[msg-1].price}}</span>
                    <span class="b_price">原价{{list_details[msg-1].before}}元</span>
                </div>
            </div>
        </div>

        <div class="size">
            <div class="describe">
                <p class="one">{{list_details[msg-1].sketch}}</p>
                <p class="two">
                    <span class="d_price">{{list_details[msg-1].before}}元</span>
                    <span class="d_p">98元</span>
                    <span class="d_txt">充值后相当于￥</span>
                    <span class="d_now">{{list_details[msg-1].price}}</span>
                </p>
                <p class="three">充值100返100，点击充值</p>
            </div>
            <div class="preferential">
                <p>
                    <span class="Package1">免邮</span>
                    <span class="Package2">全场购物满199元免运费</span>
                </p>
                <p class="vouchers">
                    <span class="vouchers1">优惠券</span>
                    <span class="vouchers2"><img src="src/assets/images/preferential1.png" alt=""></span>
                    <span class="vouchers3"><img src="src/assets/images/preferential2.png" alt=""></span>
                </p>
            </div>
            
            <div class="choose" @click="a=!a">
                <div class="choose_switch">
                    <span><img src="src/assets/images/size_icon.jpg" alt=""></span>
                    <span class="choose_switch_txt">选择 颜色/尺码</span>
                    <span>></span>
                </div>
            </div>
            <div class="choose_content" v-show="a==1">
                <div class="choose_color">
                    <p>选择颜色</p>
                    <div class="colors">
                        <span @click="c=1" :class="{choose_border:c==1}">白色</span>
                        <span @click="c=2" :class="{choose_border:c==2}">黑色</span>
                        <span @click="c=3" :class="{choose_border:c==3}">黄色</span>
                    </div>
                </div>
                <div class="choose_size">
                    <p>尺码选择</p>
                    <div class="sizes">
                        <span @click="s=1" :class="{choose_border:s==1}">S</span>
                        <span @click="s=2" :class="{choose_border:s==2}">M</span>
                        <span @click="s=3" :class="{choose_border:s==3}">L</span>
                        <span @click="s=4" :class="{choose_border:s==4}">XL</span>            
                    </div>
                </div>
                <div class="choose_num">
                    <p>购买数量</p>
                    <div class="nums">
                        <span class="sub" @click="sub(num)">-</span>
                        <span class="num">{{num}}</span>
                        <span class="add" @click="num++">+</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="btn_buy">
            <span class="buy_c"><img src="src/assets/images/buy.png" alt=""></span>
            <span class="buy_c2">加入购物车</span>
        </div>
    </div>
</template>


<script>
    export default{
        data(){
            return{
                a:-1,
                c:'',
                s:'',
                num:'1',
                msg:1,
                list_details:[
                    {
                        src:'src/assets/images/product_list/1/1.jpg',
                        sketch:'T恤 TRANSFORMERS-组装',
                        price:'58',
                        before:'198',
                        id:'1'

                    },
                    {
                        src:'src/assets/images/product_list/1/2.jpg',
                        sketch:'T恤 TRANSFORMERS-组装',
                        price:'58',
                        before:'198',
                        id:'2'
                    },
                    {
                        src:'src/assets/images/product_list/1/3.jpg',
                        sketch:'T恤 TRANSFORMERS-组装',
                        price:'58',
                        before:'198',
                        id:'3'
                    },
                    {
                        src:'src/assets/images/product_list/1/4.jpg',
                        sketch:'T恤 TRANSFORMERS-组装',
                        price:'58',
                        before:'198',
                        id:'4'
                    },
                    {
                        src:'src/assets/images/product_list/1/5.jpg',
                        sketch:'T恤 TRANSFORMERS-组装',
                        price:'58',
                        before:'198',
                        id:'5'
                    },
                    {
                        src:'src/assets/images/product_list/1/6.jpg',
                        sketch:'T恤 TRANSFORMERS-组装',
                        price:'58',
                        before:'198',
                        id:'6'
                    },
                    {
                        src:'src/assets/images/product_list/1/7.jpg',
                        sketch:'T恤 TRANSFORMERS-组装',
                        price:'58',
                        before:'198',
                        id:'7'
                    },
                    {
                        src:'src/assets/images/product_list/1/8.jpg',
                        sketch:'T恤 TRANSFORMERS-组装',
                        price:'58',
                        before:'198',
                        id:'8'
                    },
                    {
                        src:'src/assets/images/product_list/1/9.jpg',
                        sketch:'T恤 TRANSFORMERS-组装',
                        price:'58',
                        before:'198',
                        id:'9'
                    },
                    {
                        src:'src/assets/images/product_list/1/10.jpg',
                        sketch:'T恤 TRANSFORMERS-组装',
                        price:'58',
                        before:'198',
                        id:'10'
                    },
                    {
                        src:'src/assets/images/product_list/1/11.jpg',
                        sketch:'T恤 TRANSFORMERS-组装',
                        price:'58',
                        before:'198',
                        id:'11'
                    },
                    //2
                    {
                        src:'src/assets/images/product_list/2/1.jpg',
                        sketch:'T恤 TRANSFORMERS-组装',
                        price:'58',
                        before:'198',
                        id:'12'

                    },
                    {
                        src:'src/assets/images/product_list/2/2.jpg',
                        sketch:'T恤 TRANSFORMERS-组装',
                        price:'58',
                        before:'198',
                        id:'13'
                    },
                    {
                        src:'src/assets/images/product_list/2/3.jpg',
                        sketch:'T恤 TRANSFORMERS-组装',
                        price:'58',
                        before:'198',
                        id:'14'
                    },
                    {
                        src:'src/assets/images/product_list/2/4.jpg',
                        sketch:'T恤 TRANSFORMERS-组装',
                        price:'58',
                        before:'198',
                        id:'15'
                    },
                    {
                        src:'src/assets/images/product_list/2/5.jpg',
                        sketch:'T恤 TRANSFORMERS-组装',
                        price:'58',
                        before:'198',
                        id:'16'
                    },
                    //3
                    {
                        src:'src/assets/images/product_list/3/1.jpg',
                        sketch:'T恤 TRANSFORMERS-组装',
                        price:'58',
                        before:'198',
                        id:'17'

                    },
                    {
                        src:'src/assets/images/product_list/3/2.jpg',
                        sketch:'T恤 TRANSFORMERS-组装',
                        price:'58',
                        before:'198',
                        id:'18'
                    },
                    {
                        src:'src/assets/images/product_list/3/3.jpg',
                        sketch:'T恤 TRANSFORMERS-组装',
                        price:'58',
                        before:'198',
                        id:'19'
                    },
                    {
                        src:'src/assets/images/product_list/3/4.jpg',
                        sketch:'T恤 TRANSFORMERS-组装',
                        price:'58',
                        before:'198',
                        id:'20'
                    },
                    {
                        src:'src/assets/images/product_list/3/5.jpg',
                        sketch:'T恤 TRANSFORMERS-组装',
                        price:'58',
                        before:'198',
                        id:'21'
                    },
                    {
                        src:'src/assets/images/product_list/3/6.jpg',
                        sketch:'T恤 TRANSFORMERS-组装',
                        price:'58',
                        before:'198',
                        id:'22'
                    },
                    {
                        src:'src/assets/images/product_list/3/7.jpg',
                        sketch:'T恤 TRANSFORMERS-组装',
                        price:'58',
                        before:'198',
                        id:'23'
                    },
                    {
                        src:'src/assets/images/product_list/3/8.jpg',
                        sketch:'T恤 TRANSFORMERS-组装',
                        price:'58',
                        before:'198',
                        id:'24'
                    },
                    {
                        src:'src/assets/images/product_list/3/9.jpg',
                        sketch:'T恤 TRANSFORMERS-组装',
                        price:'58',
                        before:'198',
                        id:'25'
                    },
                    {
                        src:'src/assets/images/product_list/3/10.jpg',
                        sketch:'T恤 TRANSFORMERS-组装',
                        price:'58',
                        before:'198',
                        id:'26'
                    },
                    //4
                    {
                        src:'src/assets/images/product_list/4/1.jpg',
                        sketch:'T恤 TRANSFORMERS-组装',
                        price:'58',
                        before:'198',
                        id:'27'

                    },
                    {
                        src:'src/assets/images/product_list/4/2.jpg',
                        sketch:'T恤 TRANSFORMERS-组装',
                        price:'58',
                        before:'198',
                        id:'28'
                    },
                    {
                        src:'src/assets/images/product_list/4/3.jpg',
                        sketch:'T恤 TRANSFORMERS-组装',
                        price:'58',
                        before:'198',
                        id:'29'
                    },
                    //5
                    {
                        src:'src/assets/images/product_list/5/1.jpg',
                        sketch:'T恤 TRANSFORMERS-组装',
                        price:'58',
                        before:'198',
                        id:'30'

                    },
                    {
                        src:'src/assets/images/product_list/5/2.jpg',
                        sketch:'T恤 TRANSFORMERS-组装',
                        price:'58',
                        before:'198',
                        id:'31'
                    },
                    {
                        src:'src/assets/images/product_list/5/3.jpg',
                        sketch:'T恤 TRANSFORMERS-组装',
                        price:'58',
                        before:'198',
                        id:'32'
                    },
                    {
                        src:'src/assets/images/product_list/5/4.jpg',
                        sketch:'T恤 TRANSFORMERS-组装',
                        price:'58',
                        before:'198',
                        id:'33'
                    },
                    //6
                     {
                        src:'src/assets/images/product_list/6/1.jpg',
                        sketch:'T恤 TRANSFORMERS-组装',
                        price:'58',
                        before:'198',
                        id:'34'

                    },
                    {
                        src:'src/assets/images/product_list/6/2.jpg',
                        sketch:'T恤 TRANSFORMERS-组装',
                        price:'58',
                        before:'198',
                        id:'35'
                    },
                    {
                        src:'src/assets/images/product_list/6/3.jpg',
                        sketch:'T恤 TRANSFORMERS-组装',
                        price:'58',
                        before:'198',
                        id:'36'
                    },
                    {
                        src:'src/assets/images/product_list/6/4.jpg',
                        sketch:'T恤 TRANSFORMERS-组装',
                        price:'58',
                        before:'198',
                        id:'37'
                    },
                    {
                        src:'src/assets/images/product_list/6/5.jpg',
                        sketch:'T恤 TRANSFORMERS-组装',
                        price:'58',
                        before:'198',
                        id:'38'
                    },
                    {
                        src:'src/assets/images/product_list/6/6.jpg',
                        sketch:'T恤 TRANSFORMERS-组装',
                        price:'58',
                        before:'198',
                        id:'39'
                    },

                ]
            }
        },
        methods:{
            back(){
                this.$router.go(-1)
            },
            sub(a){
                if(a>0){this.num--}
                
            }
        },
        mounted(){
            this.msg=parseInt(this.$route.params.b)
            
        }
}


</script>
<style scoped>
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
   .detail_img_box{
       width: 100%;
      
   }
   .detail_img_box img{
       width: 100%;
   }
   .red_backgd{
       background-color: rgb(198,47,44);
       position: relative;
       padding: 0px 4%;
       bottom: 45px;
       width: 100%;
       height: 45px;
       color: white;
   }
   .price{
       overflow: hidden;
   }
   .p_txt{
       float: left;
       margin-top: 20px;
   }
   .p_now{
       float: left;
       font-size: 35px;
   }
   .b_price{
       text-decoration: line-through;
       float: right;
       position: relative;
       top: 10px;
       font-size: 12px;
   }
   .size{
       margin-top:-45px;
       width: 90%;
       height: 450px;
       margin-left: 5%;
       padding-top:10px;
   }

    .one{
        font-size:13px
    }
    .two{
       overflow: hidden;
       color: rgb(198,47,44);
       margin-top: 5px;
   }

   .d_txt{
       float: left;
   }
   .d_now{
       float: left;
       font-size: 13px;
   }
   .d_price{
       text-decoration: line-through;
       float: left;
       margin-right: 5px;

   }
   .d_p{
       float: left;
       font-size: 18px;
       margin-top: -4px;
       margin-right: 5px;
   }
   .three{
       color: rgb(198,47,44);
       margin-top: 4px;
       font-size: 12px;    
   }
   .preferential{
        padding: 10px 0px ;
        margin-top:10px;
        border-top: 1px solid #9e9c9c;
        border-bottom: 1px solid #9e9c9c;
        width: 100%;
   }
    .Package1{
        color: white;
        background-color: rgb(198,47,44);
        border-radius: 3px;
        font-size:12px;
    }
    .Package2{
        color:#717070 ;
    }
    .vouchers{
        margin-top: 3px;
        overflow: hidden;
    }
    .vouchers1{
        background-color: rgb(198,47,44);
        color: white;
        border-radius: 3px;
        font-size:12px;
        margin-top: 5px;
        float: left;
    }
    .vouchers2{
        float: left;
    }
    .vouchers3{
        float: left;
    }
    .choose{
        padding: 5px 10px;
        width: 100%;
        margin: 10px 0;
        background-color:#f5f5f5 ;
    }
    .choose_switch{
        overflow: hidden;
    }
    .choose_switch span{
        float: left;
    }
    .choose_switch_txt{
        margin-left: 10px;
    }
    .choose_switch span:nth-last-of-type(1){
        float: right;
    }
    .choose_content{
        color: #4d4d4d;
    }

    .colors{
        padding: 10px 0;
        border-bottom: 1px solid #9e9c9c;
        overflow: hidden;
    }
    .sizes{
        padding: 10px 0;
        border-bottom: 1px solid #9e9c9c;
        overflow: hidden;
    }
    .nums{
        overflow: hidden;
        padding: 10px 0;
        border-bottom: 1px solid #9e9c9c;
    }

    .choose_content span{
        background:  #e9e8e8;
        display: inline-block;
        margin-right: 20px;
        width: 30px;
        height: 20px;
        float: left;
        color: #4d4d4d;
        text-align: center;
    }
    .choose_border{
        border:1px solid rgb(198,47,44);
    }

    .btn_buy{
        position: fixed;
        bottom: 0px;
        width: 100%;
        height: 50px;
        border-top:  1px solid #9e9c9c;
        text-align: center;
    }
    .buy_c{
        background: rgb(255, 255, 255);
        display: inline-block;
        width: 50%;
        float: left;
        height: 50px;
    }
    .buy_c img{
        height: 80%;
    }
    .buy_c2{
        background: rgb(198,47,44);
        color: white;
        line-height: 50px;
        display: inline-block;
        width: 50%;
        float: left;
        height: 50px;
    }

    
</style>