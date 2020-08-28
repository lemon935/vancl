<template id="Cart">
    <div>
        <div class="header_empty"></div>
        <div class="header">
            <span class="backbtn_box" @click="back()"><img src="src/assets/images/back_btn.png" alt=""></span>
            <span class="header_txt">购物车</span>
        </div>
        <div class="cart_box">
            <img src="src/assets/images/null-car.png" alt="">
        </div>
        <div class="go">
            <div class="go1">我的收藏</div>
            <div class="go2">去逛逛</div>
        </div>
        <div class="my">
            <span class="my_user" @click="my()">{{this.$store.state.user_now}}</span>
            <span> | </span>
            <span @click="exit()">退出</span>
        </div>
        <div class="btn">
            <div class="btn_ico">
                <span><img src="src/assets/images/btn_ico/1.jpg" alt=""></span>
                <span><img src="src/assets/images/btn_ico/2.jpg" alt=""></span>
                <span><img src="src/assets/images/btn_ico/3.jpg" alt=""></span>
                <span><img src="src/assets/images/btn_ico/4.jpg" alt=""></span>
            </div>
            <h3>京ICP证100557号</h3>
        </div>
    </div>
</template>


<script>
    export default{
        data(){
            return{}
        },
        methods:{
            back(){
                this.$router.go(-1)
                //  打开一个新的页面
                // this.$router.push('/movie')
                // 替换页面 
                // this.$router.replace('/index')
            },
            my(){
                this.$router.replace('/my')
                this.$store.commit('go',5)
            },
            exit(){
                this.$store.commit('login_succeed',false)
                this.$router.replace('/index')
                this.$store.commit('go',1)
            }
        }
    }


</script>
<style scoped>
    .btn{
        width: 80%;
        margin: 30px 10%;
        text-align: center;
    }
    .btn_ico{
        border-top:1px solid black;
        border-bottom:1px solid black;
        width: 80%;
        padding: 10px 0px;
        margin-left: 10%;
        margin-top:60px;
    }
    .btn_ico span{
        display: inline-block;
        width: 15%;
        margin-right: 10%; 
    }
    .btn_ico span:nth-last-of-type(1){
        margin-right: 0px; 
    }
    .btn_ico img{
        width: 100%;
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
   .cart_box{
       width: 90%;
       margin-top:20px;
       margin-left: 5%;
       height: 250px;
       text-align: center;
       border: 2px solid #d9d9d9;
   }
   .cart_box img{
       margin-top: 80px;
       width: 50%;
   }
   .go{
       width: 90%;
       margin: 20px 5%;
       overflow: hidden;
   }
   .go1{
       display: inline-block;
       width: 49%;
       padding: 5px 0;
       height: 30px;
       text-align: center;
       font: 1em sans-serif;
       background-color:#f5f5f5 ;
   }
   .go2{
       display: inline-block;
       width: 49%;
       height: 30px;
       padding: 5px 0;
       text-align: center;
       font: 1em sans-serif;
       background-color:#f5f5f5 ;
   }
   .my{
       width: 100%;
       margin-top: 60px;
       text-align: center;
   }
   .my span{
       margin-right: 10px;
   }
   .my_user{
       /* color: blue;
       font-size: 16px; */
       text-decoration: underline;
   }
</style>