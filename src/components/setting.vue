<template id="setting">
    <div>
        <div class="header_empty"></div>
        <div class="header">
            <span class="backbtn_box" @click="back()"><img src="src/assets/images/back_btn.png" alt=""></span>
            <span class="header_txt">设置</span>
        </div>
        <div class="exit" @click="exit()">退出账号</div>
    </div>
</template>

<script>
    export default{
        data(){
            return{}
        },
        methods:{
            back(){
                // this.$router.go()
                //  打开一个新的页面
                // this.$router.push('/movie')
                // 替换页面 
                // this.$router.replace('/index')
                this.$router.replace('/my')
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
   .exit{
       width: 90%;
       margin-top: 20px;
       margin-left: 5%;
       line-height: 40px;
       background-color: #d9d9d9;
       height: 40px;
       text-align: center;
   }
</style>