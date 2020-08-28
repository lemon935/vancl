<template id="login">
    <div>
        <div class="header_empty"></div>
        <div class="header">
            <span class="backbtn_box" @click="back()"><img src="src/assets/images/back_btn.png" alt=""></span>
            <span class="header_txt">登录</span>
        </div>
        <div class="back_size">
            <div class="login_options">
                <ul>
                    <li @click="a=1" :class="{login_btn_line:a==1}">普通登录</li>
                    <li @click="a=2" :class="{login_btn_line:a==2}">快速登录</li>
                </ul>
            </div>
            <div class="general" v-show="a==1">
                <input type="text" placeholder="点击输入手机号/Email" v-model="x" >
                <input type="password" placeholder="请输入密码" v-model="y">
            </div>
            <div class="quick" v-show="a==2" >
                <div class="quick_one">
                    <input class="input_1" type="text" placeholder="请输入图片验证码">
                    <img src="src/assets/images/validation.jpg" alt="">
                </div>
                <div class="quick_two">
                    <input class="input_2" type="text" placeholder="请输入您的手机号">
                    <button>获取动态密码</button>
                </div>
                <div class="quick_three">
                    <input class="input_3" type="text" placeholder="请输入您的手机登录密码">
                </div>
            </div>
            
            <button class="login_btn" @click="login()">登录</button>
            <div class="over">
                <router-link to="/registered">
                    <span class="registered">免费注册 ></span>
                </router-link>
                <span class="find">手机账号取回密码 ></span>
            </div>
            <div class="other">
                <p>使用其他账号登录</p>
                <div class="ico">
                    <img src="src/assets/images/login/1.png" alt="">
                    <img src="src/assets/images/login/2.png" alt="">
                    <img src="src/assets/images/login/3.png" alt="">
                    <img src="src/assets/images/login/4.png" alt="">
                </div>
            </div>
            
        </div>

    </div>
</template>


<script>
    export default{
        data(){
            return{
                a:'1',
                x:'',
                y:''
            }
        },
        methods:{
            back(){
                this.$router.go(-1)
            },
            login(){
                
                for(let item in this.$store.state.user){
                    if(this.$store.state.user[item]==this.x){
                        if(this.$store.state.passwd[item]==this.y){
                            alert('登录成功')                          
                            // this.$store.state.login_state=true
                            this.$store.commit('login_succeed',true)
                            this.$store.state.user_now=this.x
                            this.$router.push('/index')
                            // this.$store.state.r=1
                            this.$store.commit('go',1)
                            return
                        }
                    }
                }
             
                // console.log(this.$store.state.user)
                // console.log(this.$store.state.pass)
                alert('请输入正确的账号或者密码')
                // this.$store.state.login_state=true
                // this.$router.go(-1)
            }
        },
        
    }


</script>
<style scoped>

    .back_size{
        margin: 0 5%;
        width: 90%;
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
   .login_options ul{
       width: 100%;
       overflow: hidden;
   }
   .login_options li{
       width: 50%;
       margin-top:10px;
       padding-bottom: 10px;
       font-size: 17px;
       text-align: center;
       float: left;
   }
   .login_btn_line{
       border-bottom: 3px solid rgb(184,28,34);
   }
   input{
       padding: 10px;
       height: 3rem;
       font-size: 1rem;
       width: 100%;
       margin-top: 2rem;
       background-color: rgb(245,245,245);
       display: inline-block;
   }
   .quick>div{

       overflow: hidden;
   }
   .input_1{
       float: left;
       width: 60%;
   }
   .quick img{
       margin-top:35px;
       float: right;
   }
   .input_2{
       float: left;
       width: 60%;
   }
   .input_3{
       float: left;
       width: 100%;
   }
   .quick button{
       width: 30%;
       height: 2.5rem;
       border-radius: 4px;
       color: rgb(184,28,34);
       border: 2px solid rgb(178,178,178);
       background-color: white;
       margin-top:35px;
       float: right;
   }
    .login_btn{
        background-color: rgb(184,28,34);
        width: 100%;
        font-size: 20px;
        color: white;
        border: none;
        padding: 10px;
        margin-top: 30px;
    }
    .over{
        overflow: hidden;
    }
    .registered{
        margin-top: 10px;
        font-size: 12px;
        float: left;
    }
    .find{
        margin-top: 10px;
        font-size: 12px;
        float: right;
    }
    .other>P{
        margin-top: 40px;
        font-size: 12px;
    }
    .ico{
        margin-top: 5px;
    }
    .ico img{
        margin-right: 10px;
        height: 25px;   
    }
</style>
