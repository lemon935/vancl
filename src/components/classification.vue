<template id="classification">
    <div>
        <!-- 头部 -->
        <div class="header_empty"></div>
        <div class="header">
            <span class="backbtn_box" @click="back()"><img src="src/assets/images/back_btn.png" alt=""></span>
            <span class="header_txt">分类</span>
        </div>
        <!-- ^^^^^^^^ -->
        <div class="class_left">
            <ul>
                <li v-for="(item,index) in list_class_left" @click="change(index)" :class="{choose:num==index}">
                    {{item.con}}
                </li>
            </ul>
        </div>
        <div class="class_right">
            <ul>
                <li v-for="(item,index) in list_class_right">
                    <router-link :to="'/class_/'+item.id">
                        <div class="class_right_box"><img :src="item.src" alt=""></div>
                        <span>{{item.con}}</span>
                    </router-link>
                </li>
                
            </ul>
        </div>
    </div>
</template>



<script>
    export default {
        data(){
            return{


                list_class_right:[
                        {
                            src:'src/assets/images/classification/classification_1/1.jpg',
                            con:'短袖T恤',
                            id:'1'
                        },
                        {
                            src:'src/assets/images/classification/classification_1/2.jpg',
                            con:'短袖T恤',
                            id:'2'
                        },
                        {
                            src:'src/assets/images/classification/classification_1/3.jpg',
                            con:'短袖T恤',
                            id:'3'
                        },
                        {
                            src:'src/assets/images/classification/classification_1/4.jpg',
                            con:'短袖T恤',
                            id:'4'
                        },
                        {
                            src:'src/assets/images/classification/classification_1/5.jpg',
                            con:'短袖T恤',
                            id:'5'
                        },
                        {
                            src:'src/assets/images/classification/classification_1/6.jpg',
                            con:'短袖T恤',
                            id:'6'
                        },
                        {
                            src:'src/assets/images/classification/classification_1/7.jpg',
                            con:'短袖T恤',
                            id:'7'
                        },
                        {
                            src:'src/assets/images/classification/classification_1/8.jpg',
                            con:'短袖T恤',
                            id:'8'
                        },
                        {
                            src:'src/assets/images/classification/classification_1/9.jpg',
                            con:'短袖T恤',
                            id:'9'
                        },
                        {
                            src:'src/assets/images/classification/classification_1/10.jpg',
                            con:'短袖T恤',
                            id:'10'
                        },
                        {
                            src:'src/assets/images/classification/classification_1/11.jpg',
                            con:'短袖T恤',
                            id:'11'
                        },
                        {
                            src:'src/assets/images/classification/classification_1/12.jpg',
                            con:'短袖T恤',
                            id:'13'
                        },
                        {
                            src:'src/assets/images/classification/classification_1/13.jpg',
                            con:'短袖T恤',
                            id:'13'
                        },
                        {
                            src:'src/assets/images/classification/classification_1/14.jpg',
                            con:'短袖T恤',
                            id:'14'
                        },
                        {
                            src:'src/assets/images/classification/classification_1/15.jpg',
                            con:'短袖T恤',
                            id:'15'
                        },
                        {
                            src:'src/assets/images/classification/classification_1/16.jpg',
                            con:'短袖T恤',
                            id:'16'
                        },
                        {
                            src:'src/assets/images/classification/classification_1/17.jpg',
                            con:'短袖T恤',
                            id:'17'
                        },
                        {
                            src:'src/assets/images/classification/classification_1/18.jpg',
                            con:'短袖T恤',
                            id:'18'
                        },
                        {
                            src:'src/assets/images/classification/classification_1/19.jpg',
                            con:'短袖T恤',
                            id:'19'
                        },
                        {
                            src:'src/assets/images/classification/classification_1/20.jpg',
                            con:'短袖T恤',
                            id:'20'
                        },
                    ],
                num:'0',
                list_class_left:[
                    {
                        con:'推荐',
                        id:'recommend'
                    },
                    {
                        con:'男装',
                        id:'manclothing'
                    },
                    {
                        con:'男鞋',
                        id:'manshoes'
                    },
                    {
                        con:'女鞋',
                        id:'womanshoes'
                    },
                    {
                        con:'袜品',
                        id:'socks'
                    },
                    {
                        con:'居家',
                        id:'liveome'
                    },
                    {
                        con:'女装',
                        id:'womanclothing'
                    },
                    {
                        con:'童装',
                        id:'chilclothing'
                    },
                    {
                        con:'内衣',
                        id:'underwear'
                    },
                    {
                        con:'反季直降',
                        id:'season'
                    },
                ],
                
            }
        },
        methods:{
            back(){
                this.$router.go(-1)
            },

            change(a){
                this.num=a
                if(a=='0'){
                    this.list_class_right=[
                        {
                            src:'src/assets/images/classification/classification_1/1.jpg',
                            con:'短袖T恤',
                            id:'1'
                        },
                        {
                            src:'src/assets/images/classification/classification_1/2.jpg',
                            con:'短袖T恤',
                            id:'2'
                        },
                        {
                            src:'src/assets/images/classification/classification_1/3.jpg',
                            con:'短袖T恤',
                            id:'3'
                        },
                        {
                            src:'src/assets/images/classification/classification_1/4.jpg',
                            con:'短袖T恤',
                            id:'4'
                        },
                        {
                            src:'src/assets/images/classification/classification_1/5.jpg',
                            con:'短袖T恤',
                            id:'5'
                        },
                        {
                            src:'src/assets/images/classification/classification_1/6.jpg',
                            con:'短袖T恤',
                            id:'6'
                        },
                        {
                            src:'src/assets/images/classification/classification_1/7.jpg',
                            con:'短袖T恤',
                            id:'7'
                        },
                        {
                            src:'src/assets/images/classification/classification_1/8.jpg',
                            con:'短袖T恤',
                            id:'8'
                        },
                        {
                            src:'src/assets/images/classification/classification_1/9.jpg',
                            con:'短袖T恤',
                            id:'9'
                        },
                        {
                            src:'src/assets/images/classification/classification_1/10.jpg',
                            con:'短袖T恤',
                            id:'10'
                        },
                        {
                            src:'src/assets/images/classification/classification_1/11.jpg',
                            con:'短袖T恤',
                            id:'11'
                        },
                        {
                            src:'src/assets/images/classification/classification_1/12.jpg',
                            con:'短袖T恤',
                            id:'12'
                        },
                        {
                            src:'src/assets/images/classification/classification_1/13.jpg',
                            con:'短袖T恤',
                            id:'13'
                        },
                        {
                            src:'src/assets/images/classification/classification_1/14.jpg',
                            con:'短袖T恤',
                            id:'14'
                        },
                        {
                            src:'src/assets/images/classification/classification_1/15.jpg',
                            con:'短袖T恤',
                            id:'15'
                        },
                        {
                            src:'src/assets/images/classification/classification_1/16.jpg',
                            con:'短袖T恤',
                            id:'16'
                        },
                        {
                            src:'src/assets/images/classification/classification_1/17.jpg',
                            con:'短袖T恤',
                            id:'17'
                        },
                        {
                            src:'src/assets/images/classification/classification_1/18.jpg',
                            con:'短袖T恤',
                            id:'18'
                        },
                        {
                            src:'src/assets/images/classification/classification_1/19.jpg',
                            con:'短袖T恤',
                            id:'19'
                        },
                        {
                            src:'src/assets/images/classification/classification_1/20.jpg',
                            con:'短袖T恤',
                            id:'20'
                        },
                    ]
                }
                else if(a=='1'){
                    this.list_class_right=[
                        {
                            src:'src/assets/images/classification/classification_2/1.jpg',
                            con:'T恤'
                        },
                        {
                            src:'src/assets/images/classification/classification_2/1.jpg',
                            con:'T恤'
                        },
                        {
                            src:'src/assets/images/classification/classification_2/1.jpg',
                            con:'T恤'
                        },
                        {
                            src:'src/assets/images/classification/classification_2/1.jpg',
                            con:'T恤'
                        },
                        {
                            src:'src/assets/images/classification/classification_2/1.jpg',
                            con:'T恤'
                        },
                        {
                            src:'src/assets/images/classification/classification_2/1.jpg',
                            con:'T恤'
                        },
                        {
                            src:'src/assets/images/classification/classification_2/1.jpg',
                            con:'T恤'
                        },
                        {
                            src:'src/assets/images/classification/classification_2/1.jpg',
                            con:'T恤'
                        },
                        {
                            src:'src/assets/images/classification/classification_2/1.jpg',
                            con:'T恤'
                        },
                        {
                            src:'src/assets/images/classification/classification_2/1.jpg',
                            con:'T恤'
                        },
                    ]
                }
                else if(a=='2'){
                    this.list_class_right=[
                        {
                            src:'src/assets/images/classification/classification_3/1.jpg',
                            con:'帆布鞋'
                        },
                        {
                            src:'src/assets/images/classification/classification_3/1.jpg',
                            con:'帆布鞋'
                        },
                        {
                            src:'src/assets/images/classification/classification_3/1.jpg',
                            con:'帆布鞋'
                        },
                        {
                            src:'src/assets/images/classification/classification_3/1.jpg',
                            con:'帆布鞋'
                        },
                        {
                            src:'src/assets/images/classification/classification_3/1.jpg',
                            con:'帆布鞋'
                        },
                    ]
                }
                else if(a=='3'){
                    this.list_class_right=[
                        {
                            src:'src/assets/images/classification/classification_4/1.jpg',
                            con:'帆布鞋'
                        },
                        {
                            src:'src/assets/images/classification/classification_4/1.jpg',
                            con:'帆布鞋'
                        },
                        {
                            src:'src/assets/images/classification/classification_4/1.jpg',
                            con:'帆布鞋'
                        },
                        {
                            src:'src/assets/images/classification/classification_4/1.jpg',
                            con:'帆布鞋'
                        },
                        {
                            src:'src/assets/images/classification/classification_4/1.jpg',
                            con:'帆布鞋'
                        },
                    ]
                }
                else if(a=='4'){
                    this.list_class_right=[
                        {
                            src:'src/assets/images/classification/classification_5/1.jpg',
                            con:'连裤袜'
                        },
                        {
                            src:'src/assets/images/classification/classification_5/1.jpg',
                            con:'连裤袜'
                        },
                        {
                            src:'src/assets/images/classification/classification_5/1.jpg',
                            con:'连裤袜'
                        },
                        {
                            src:'src/assets/images/classification/classification_5/1.jpg',
                            con:'连裤袜'
                        },
                    ]
                }
                else if(a=='5'){
                    this.list_class_right=[
                        {
                            src:'src/assets/images/classification/classification_6/1.jpg',
                            con:'床品'
                        },
                        {
                            src:'src/assets/images/classification/classification_6/1.jpg',
                            con:'床品'
                        },
                        {
                            src:'src/assets/images/classification/classification_6/1.jpg',
                            con:'床品'
                        },
                        {
                            src:'src/assets/images/classification/classification_6/1.jpg',
                            con:'床品'
                        },
                        {
                            src:'src/assets/images/classification/classification_6/1.jpg',
                            con:'床品'
                        },
                    ]
                }
                else if(a=='6'){
                    this.list_class_right=[
                        {
                            src:'src/assets/images/classification/classification_7/1.jpg',
                            con:'卫衣'
                        },
                        {
                            src:'src/assets/images/classification/classification_7/1.jpg',
                            con:'卫衣'
                        },
                        {
                            src:'src/assets/images/classification/classification_7/1.jpg',
                            con:'卫衣'
                        },
                        {
                            src:'src/assets/images/classification/classification_7/1.jpg',
                            con:'卫衣'
                        },
                        {
                            src:'src/assets/images/classification/classification_7/1.jpg',
                            con:'卫衣'
                        },
                        {
                            src:'src/assets/images/classification/classification_7/1.jpg',
                            con:'卫衣'
                        },
                        {
                            src:'src/assets/images/classification/classification_7/1.jpg',
                            con:'卫衣'
                        },
                    ]
                }
                else if(a=='7'){
                    this.list_class_right=[
                        {
                            src:'src/assets/images/classification/classification_8/1.jpg',
                            con:'卫衣'
                        },
                        {
                            src:'src/assets/images/classification/classification_8/1.jpg',
                            con:'卫衣'
                        },
                        {
                            src:'src/assets/images/classification/classification_8/1.jpg',
                            con:'卫衣'
                        },
                    ]
                }
                else if(a=='8'){
                    this.list_class_right=[
                        {
                            src:'src/assets/images/classification/classification_9/1.jpg',
                            con:'秋衣'
                        },
                        {
                            src:'src/assets/images/classification/classification_9/1.jpg',
                            con:'秋衣'
                        },
                        {
                            src:'src/assets/images/classification/classification_9/1.jpg',
                            con:'秋衣'
                        },
                        {
                            src:'src/assets/images/classification/classification_9/1.jpg',
                            con:'秋衣'
                        },
                        {
                            src:'src/assets/images/classification/classification_9/1.jpg',
                            con:'秋衣'
                        },
                    ]
                }
                else if(a=='9'){
                    this.list_class_right=[
                        {
                            src:'src/assets/images/classification/classification_10/1.jpg',
                            con:'卫衣'
                        },
                        {
                            src:'src/assets/images/classification/classification_10/1.jpg',
                            con:'卫衣'
                        },
                        {
                            src:'src/assets/images/classification/classification_10/1.jpg',
                            con:'卫衣'
                        },
                    ]
                }
                

            }
        }

    }
</script>
<style>

</style>

<style scoped>
    *{
        margin: 0px;
        padding: 0px;
        list-style: none;
    }
    /* 顶部栏 */
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
        /* ^^^^^^^^^ */
    /* 左 */
    .class_left{
        background-color: white;
        height: calc(100vh - 50px);
        width: 25%;
        float: left;
        display: inline-block;
       
    }
    .class_left ul{
        background: rgb(229,229,229); 
        height: 100%;
    }
    .class_left li{
        width: 100%;
        display: inline-block;
        margin: 0px;
        padding: 8px;
        text-align: center;
        border-bottom: 1px solid white;
        font-size: 13px;
    }
    .choose{
        color: red;
        background: white;
    }
    /* .class_left ul{
        float: left;
        background-color: rgb(229,229,229);
    } */
    .class_right{
        background-color: white;
        height: calc(100vh - 50px);
        width: 75%;
        overflow: auto;
        float: right;
        display: inline-block;
    }
    .class_right li{
        width: 30%;
        margin: 0px 1.6%;
        float: left;
        text-align: center;
        font-size: 11px;
        color: #999999;
    }
    .class_right li:nth-last-of-type(1){
        margin-bottom: 50px;
    }
    .class_right_box img{
        width: 100%;
    }
    
</style>