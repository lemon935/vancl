<template id="channels">
    <div>
        <div class="header_empty"></div>
        <div class="header">
            <span class="backbtn_box" @click="back()"><img src="src/assets/images/back_btn.png" alt=""></span>
            <span class="header_txt">频道s</span>
        </div>
        <div>
            {{msg}}
        </div>
    </div>
</template>


<script>
    export default{
        data(){
            return{
                msg:'',
            }
        },
        methods:{
            back(){
                this.$router.go(-1)
            }
        },
         mounted(){
            if(this.$route.params.sh==1){

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
</style>