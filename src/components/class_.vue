<template id="class_">
    <div>
        <div class="header_empty"></div>
        <div class="header">
            <span class="backbtn_box" @click="back()"><img src="src/assets/images/back_btn.png" alt=""></span>
            <span class="header_txt">商品列表</span>
        </div>
        <div class="rank">
            <ul>
                <li>新品</li>
                <li>销售</li>
                <li>评价</li>
                <li>价格</li>
            </ul>
        </div>

        <div class="product_list">
            <ul>
                <li v-for="(item,index) in list">
                    <router-link :to="'/details/'+item.id">
                        <img :src="item.src" alt="">
                        <p class="sketch">{{item.sketch}}</p>
                        <p class="price">{{item.price}}元</p>
                    </router-link>
                </li>
            </ul>
        </div>

        <div class="empty"></div>
    </div>
</template>


<script>
    export default{
        data(){
            return{
                list:'',
                list1:[
                    {
                        src:'src/assets/images/product_list/1/1.jpg',
                        sketch:'T恤 TRANSFORMERS-组装',
                        price:'58',
                        id:'1'

                    },
                    {
                        src:'src/assets/images/product_list/1/2.jpg',
                        sketch:'T恤 TRANSFORMERS-组装',
                        price:'58',
                        id:'2'
                    },
                    {
                        src:'src/assets/images/product_list/1/3.jpg',
                        sketch:'T恤 TRANSFORMERS-组装',
                        price:'58',
                        id:'3'
                    },
                    {
                        src:'src/assets/images/product_list/1/4.jpg',
                        sketch:'T恤 TRANSFORMERS-组装',
                        price:'58',
                        id:'4'
                    },
                    {
                        src:'src/assets/images/product_list/1/5.jpg',
                        sketch:'T恤 TRANSFORMERS-组装',
                        price:'58',
                        id:'5'
                    },
                    {
                        src:'src/assets/images/product_list/1/6.jpg',
                        sketch:'T恤 TRANSFORMERS-组装',
                        price:'58',
                        id:'6'
                    },
                    {
                        src:'src/assets/images/product_list/1/7.jpg',
                        sketch:'T恤 TRANSFORMERS-组装',
                        price:'58',
                        id:'7'
                    },
                    {
                        src:'src/assets/images/product_list/1/8.jpg',
                        sketch:'T恤 TRANSFORMERS-组装',
                        price:'58',
                        id:'8'
                    },
                    {
                        src:'src/assets/images/product_list/1/9.jpg',
                        sketch:'T恤 TRANSFORMERS-组装',
                        price:'58',
                        id:'9'
                    },
                    {
                        src:'src/assets/images/product_list/1/10.jpg',
                        sketch:'T恤 TRANSFORMERS-组装',
                        price:'58',
                        id:'10'
                    },
                    {
                        src:'src/assets/images/product_list/1/11.jpg',
                        sketch:'T恤 TRANSFORMERS-组装',
                        price:'58',
                        id:'11'
                    },  
                ],
                list2:[
                    {
                        src:'src/assets/images/product_list/2/1.jpg',
                        sketch:'T恤 TRANSFORMERS-组装',
                        price:'58',
                        id:'12'

                    },
                    {
                        src:'src/assets/images/product_list/2/2.jpg',
                        sketch:'T恤 TRANSFORMERS-组装',
                        price:'58',
                        id:'13'
                    },
                    {
                        src:'src/assets/images/product_list/2/3.jpg',
                        sketch:'T恤 TRANSFORMERS-组装',
                        price:'58',
                        id:'14'
                    },
                    {
                        src:'src/assets/images/product_list/2/4.jpg',
                        sketch:'T恤 TRANSFORMERS-组装',
                        price:'58',
                        id:'15'
                    },
                    {
                        src:'src/assets/images/product_list/2/5.jpg',
                        sketch:'T恤 TRANSFORMERS-组装',
                        price:'58',
                        id:'16'
                    },
                   
                ],
                list3:[
                    {
                        src:'src/assets/images/product_list/3/1.jpg',
                        sketch:'T恤 TRANSFORMERS-组装',
                        price:'58',
                        id:'17'

                    },
                    {
                        src:'src/assets/images/product_list/3/2.jpg',
                        sketch:'T恤 TRANSFORMERS-组装',
                        price:'58',
                        id:'18'
                    },
                    {
                        src:'src/assets/images/product_list/3/3.jpg',
                        sketch:'T恤 TRANSFORMERS-组装',
                        price:'58',
                        id:'19'
                    },
                    {
                        src:'src/assets/images/product_list/3/4.jpg',
                        sketch:'T恤 TRANSFORMERS-组装',
                        price:'58',
                        id:'20'
                    },
                    {
                        src:'src/assets/images/product_list/3/5.jpg',
                        sketch:'T恤 TRANSFORMERS-组装',
                        price:'58',
                        id:'21'
                    },
                    {
                        src:'src/assets/images/product_list/3/6.jpg',
                        sketch:'T恤 TRANSFORMERS-组装',
                        price:'58',
                        id:'22'
                    },
                    {
                        src:'src/assets/images/product_list/3/7.jpg',
                        sketch:'T恤 TRANSFORMERS-组装',
                        price:'58',
                        id:'23'
                    },
                    {
                        src:'src/assets/images/product_list/3/8.jpg',
                        sketch:'T恤 TRANSFORMERS-组装',
                        price:'58',
                        id:'24'
                    },
                    {
                        src:'src/assets/images/product_list/3/9.jpg',
                        sketch:'T恤 TRANSFORMERS-组装',
                        price:'58',
                        id:'25'
                    },
                    {
                        src:'src/assets/images/product_list/3/10.jpg',
                        sketch:'T恤 TRANSFORMERS-组装',
                        price:'58',
                        id:'26'
                    },
                ],
                list4:[
                    {
                        src:'src/assets/images/product_list/4/1.jpg',
                        sketch:'T恤 TRANSFORMERS-组装',
                        price:'58',
                        id:'27'

                    },
                    {
                        src:'src/assets/images/product_list/4/2.jpg',
                        sketch:'T恤 TRANSFORMERS-组装',
                        price:'58',
                        id:'28'
                    },
                    {
                        src:'src/assets/images/product_list/4/3.jpg',
                        sketch:'T恤 TRANSFORMERS-组装',
                        price:'58',
                        id:'29'
                    },
                ],
                list5:[
                    {
                        src:'src/assets/images/product_list/5/1.jpg',
                        sketch:'T恤 TRANSFORMERS-组装',
                        price:'58',
                        id:'30'

                    },
                    {
                        src:'src/assets/images/product_list/5/2.jpg',
                        sketch:'T恤 TRANSFORMERS-组装',
                        price:'58',
                        id:'31'
                    },
                    {
                        src:'src/assets/images/product_list/5/3.jpg',
                        sketch:'T恤 TRANSFORMERS-组装',
                        price:'58',
                        id:'32'
                    },
                    {
                        src:'src/assets/images/product_list/5/4.jpg',
                        sketch:'T恤 TRANSFORMERS-组装',
                        price:'58',
                        id:'33'
                    },

                ],
                list6:[
                    {
                        src:'src/assets/images/product_list/6/1.jpg',
                        sketch:'T恤 TRANSFORMERS-组装',
                        price:'58',
                        id:'34'

                    },
                    {
                        src:'src/assets/images/product_list/6/2.jpg',
                        sketch:'T恤 TRANSFORMERS-组装',
                        price:'58',
                        id:'35'
                    },
                    {
                        src:'src/assets/images/product_list/6/3.jpg',
                        sketch:'T恤 TRANSFORMERS-组装',
                        price:'58',
                        id:'36'
                    },
                    {
                        src:'src/assets/images/product_list/6/4.jpg',
                        sketch:'T恤 TRANSFORMERS-组装',
                        price:'58',
                        id:'37'
                    },
                    {
                        src:'src/assets/images/product_list/6/5.jpg',
                        sketch:'T恤 TRANSFORMERS-组装',
                        price:'58',
                        id:'38'
                    },
                    {
                        src:'src/assets/images/product_list/6/6.jpg',
                        sketch:'T恤 TRANSFORMERS-组装',
                        price:'58',
                        id:'39'
                    },
                ],
                
            }
        },
        methods:{
            back(){
                this.$router.replace('/classification')
            }
        },
        mounted(){
            if(this.$route.params.a==1){this.list=this.list1}
            else if(this.$route.params.a==1){this.list=this.list1}
            else if(this.$route.params.a==2){this.list=this.list2}
            else if(this.$route.params.a==3){this.list=this.list3}
            else if(this.$route.params.a==4){this.list=this.list4}
            else if(this.$route.params.a==5){this.list=this.list5}
            else if(this.$route.params.a==6){this.list=this.list6}
            else if(this.$route.params.a==7){this.list=this.list6}
            else if(this.$route.params.a==8){this.list=this.list6}
            else if(this.$route.params.a==9){this.list=this.list6}
            else if(this.$route.params.a==10){this.list=this.list6}
            else if(this.$route.params.a==11){this.list=this.list6}
            else if(this.$route.params.a==12){this.list=this.list6}
            else if(this.$route.params.a==13){this.list=this.list6}
            else if(this.$route.params.a==14){this.list=this.list6}
            else if(this.$route.params.a==15){this.list=this.list6}
            else if(this.$route.params.a==16){this.list=this.list6}
            else if(this.$route.params.a==17){this.list=this.list6}
            else if(this.$route.params.a==18){this.list=this.list6}
            else if(this.$route.params.a==19){this.list=this.list6}
            else if(this.$route.params.a==20){this.list=this.list6}
            
        }
    }


</script>
<style scoped>
    .empty{
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
   .rank ul{
       width: 100%;
       overflow: hidden;
   }
   .rank li{
       margin-top: 10px;
       width: 25%;
       float: left;
       font-size: 15px;
       text-align: center;
   }
   .product_list ul{
       margin-top: 30px;
       overflow: hidden;
       width: 100%;
   }
   .product_list li{
       float: left;
       text-align: center;
       width: 49%;
       margin-bottom: 20px;
   }
   .product_list li:nth-of-type(2n){
       margin-left: 2%;
   }
   .product_list img{
       width: 80%;
   }
   .sketch{
       margin-top: 15px;
       font-size: 11px;
       color: #4c4c4c;
   }
   .price{
       font-size: 14px;
       color: #4c4c4c;
   }
   

</style>