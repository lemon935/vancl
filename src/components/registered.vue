<template id="registered">
    <div>
        
        <div class="header_empty"></div>
        <div class="header">
            <span class="backbtn_box" @click="back()"><img src="src/assets/images/back_btn.png" alt=""></span>
            <span class="header_txt">注册</span>
        </div>
        <div class="back_size">
            <div class="general" >
                <input type="text" placeholder="点击输入手机号/Email" v-model="x">
                <input type="password" placeholder="请输入密码" v-model="y">
            </div>
            <button class="registered" @click="registered()">注册</button>
        </div>
    </div>
    
</template>

<script>
    export default{
        data(){
            return{
                x:'',
                y:'',
            }
        },
        methods:{
            back(){
                this.$router.go(-1)
            },
            // registered(){
            //     for(let item in this.$store.state.user){
            //         if(this.$store.state.user[item]==this.x){
            //             alert('账号已注册')
            //             return
            //         }
            //     }
            //     this.$store.state.user.push(this.x)
            //     this.$store.state.passwd.push(this.y)
            //     this.$router.push('/login')
            //     alert('注册成功,请登录')
            // }
            registered(){
                for(let item in this.$store.state.user){
                    if(this.$store.state.user[item]==this.x){
                        alert('账号已注册')
                        return
                    }
                }
                this.$store.commit('adduser',this.x)
                this.$store.commit('addpasswd',this.y)
                this.$router.push('/login')
                alert('注册成功,请登录')
            }





                // console.log(this.$store.state.user)
                // console.log(this.$store.state.passwd)
                

                
                // this.$store.state.passwd.push(this.y)
                // console.log(typeof(this.$store.state.user))
            
        },
        
    }


</script>

<style  scoped>
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
      .header_txt{
       line-height: 50px;
       font-size: 20px;
       color: white;
   }
      .header img{
       margin-top: 15%;
       width: 70%;
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
       .registered{
        background-color: rgb(184,28,34);
        width: 100%;
        font-size: 20px;
        color: white;
        border: none;
        padding: 10px;
        margin-top: 30px;
    }
    
</style>