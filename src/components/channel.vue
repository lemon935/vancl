<template id="channel">
     <div>
         <!-- 头 -->
         <div>
            <div class="header_empty"></div>
            <div class="header">
                <span class="backbtn_box" @click="back()"><img src="src/assets/images/back_btn.png" alt=""></span>
                <span class="header_txt">频道</span>
            </div>
         </div>
         <!-- ^^^^^ -->
        <div class="channel_box">
            <ul>
                <li v-for="(item,index) in list_channel">
                     <router-link :to="'/channels/'+item.id"><img :src="item.src" alt=""></router-link>
                </li>
            </ul>
        </div>
    </div>
</template>


<script>
    export default{
        data(){
            return{
                list_channel:[
                    {
                        src:'src/assets/images/channel/1.jpg',
                        id:'1'
                    },
                    {
                        src:'src/assets/images/channel/2.jpg',
                        id:'2'
                    },
                    {
                        src:'src/assets/images/channel/3.jpg',
                        id:'3'
                    },
                    {
                        src:'src/assets/images/channel/4.jpg',
                        id:'4'
                    },
                    {
                        src:'src/assets/images/channel/5.jpg',
                        id:'5'
                    },
                    {
                        src:'src/assets/images/channel/6.jpg',
                        id:'6'
                    },
                    {
                        src:'src/assets/images/channel/7.jpg',
                        id:'7'
                    
                    },
                    {
                        src:'src/assets/images/channel/8.jpg',
                        id:'8'
                    },
                    {
                        src:'src/assets/images/channel/9.jpg',
                        id:'9'
                    },
                    {
                        src:'src/assets/images/channel/10.jpg',
                        id:'10'
                    },
                    {
                        src:'src/assets/images/channel/11.jpg',
                        id:'11'
                    },
                ]
            }
        },
        methods:{
            back(){
                this.$router.go(-1)

            }
        },
        
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
   .channel_box li{
       width: 100%;
       margin: 0px;
   }
   .channel_box img{
       width: 100%;
   }
</style>