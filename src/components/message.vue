<template id='message'>
    <div>
        <div class="header_empty"></div>
        <div class="header">
            <span class="backbtn_box" @click="back()"><img src="src/assets/images/back_btn.png" alt=""></span>
            <span class="header_txt">消息</span>
        </div>
        <div class="msg">
            <p>暂无任何消息</p>
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
            },
            log(){
                
                
                
            }
        }
    }


</script>
<style scoped>
    .msg{
        width: 100%;
        margin-top: 50%;
    }
    .msg p{
        text-align: center;
        font-size: 20px;
        color: #999;
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
</style>