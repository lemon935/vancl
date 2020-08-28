<template id="nav">
    <div >
        <router-view></router-view>
        <ul class="nav_btn"> 
            <!-- <li v-for="(item,index) in list_nav">
                <router-link :to="item.path">
                    <span class="src" :style="'background: url(./src/assets/images/nav.png) no-repeat 0px '+(-80*index)+'px'"></span>
                    <span class="pic" :style="'background: url(./src/assets/images/nav.png) no-repeat 0px '+(-(80*index+400))+'px'"></span>
                </router-link>
            </li> -->


            <li @click="cli1()">
                <router-link to="/index">
                    <div>
                        <span class="iconfont" ><span :class="{red:this.$store.state.r==1}">&#xe808;</span></span>
                        <p><span :class="{red:this.$store.state.r==1}">凡客</span></p>
                    </div>
                </router-link>
            </li>
            <li @click="cli2()">
                <router-link to="/classification">
                    <div>
                        <span class="iconfont"><span :class="{red:this.$store.state.r==2}">&#xe7f9;</span></span>
                        <p><span :class="{red:this.$store.state.r==2}">分类</span></p>
                    </div>
                </router-link>
            </li>
            <li @click="cli3()">
                <router-link to="/channel">
                    <div>
                        <span class="iconfont"><span :class="{red:this.$store.state.r==3}">&#xe64f;</span></span>
                        <p><span :class="{red:this.$store.state.r==3}">频道</span></p>
                    </div>
                </router-link>
            </li>
            <li @click="cli4()">
                <router-link :to="c">
                    <div @click="change()">
                        <span class="iconfont"><span :class="{red:this.$store.state.r===4}">&#xe602;</span></span>
                        <p><span :class="{red:this.$store.state.r==4}">购物车</span></p>
                   </div>
                </router-link>
            </li>
            <li @click="cli5()">
                <router-link :to="m">
                    <div @click="change2()">
                        <span class="iconfont"> <span :class="{red:this.$store.state.r==5}">&#xe603;</span></span>
                        <p><span :class="{red:this.$store.state.r==5}">我的</span></p>
                    </div>    
                </router-link>
            </li>



            <!-- <li>
                <router-link to="/index">
                    <span class="src" style="background: url(./src/assets/images/nav.png) no-repeat 0px -0px"></span>
                    <span class="pic" style="background: url(./src/assets/images/nav.png) no-repeat 0px -400px"></span>
                </router-link>
            </li>
            <li>
                <router-link to="/classification">
                    <span class="src" style="background: url(./src/assets/images/nav.png) no-repeat 0px -80px"></span>
                    <span class="pic" style="background: url(./src/assets/images/nav.png) no-repeat 0px -480px"></span>
                </router-link>
            </li>
            <li>
                <router-link to="/channel">
                    <span class="src" style="background: url(./src/assets/images/nav.png) no-repeat 0px -160px"></span>
                    <span class="pic" style="background: url(./src/assets/images/nav.png) no-repeat 0px -560px"></span>
                </router-link>
            </li>
            <li>
                <router-link :to="c">
                    <div @click="change()">
                        <span class="src" style="background: url(./src/assets/images/nav.png) no-repeat 0px -240px"></span>
                      
                        <span class="pic" style="background: url(./src/assets/images/nav.png) no-repeat 0px -640px"></span>
                   </div>   
                </router-link>
            </li>
            <li>
                <router-link :to="m">
                    <div @click="change2()">
                        <span class="src" style="background: url(./src/assets/images/nav.png) no-repeat 0px -320px"></span>
                        <span class="pic" style="background: url(./src/assets/images/nav.png) no-repeat 0px -720px"></span>
                    </div>
                </router-link>
            </li> -->


        </ul>
    </div>
</template>


<script>
    export default{
        data(){
            return{
                r:'1',
                c:'',
                m:'',
                list_nav:[
                    {
                        con:'index',
                        path:'/index'
                    },
                    {
                        con:'classification',
                        path:'/classification'
                    },
                    {
                        con:'channel',
                        path:'/channel'
                    },
                    {
                        con:'cart',
                        path:'/cart'
                    },
                    {
                        con:'my',
                        path:'/my'
                    },
                ]
            }
        },

        methods:{
            change(){
                
                if(this.$store.state.login_state){
                    this.c='/cart'
                }else{
                    this.r=0,
                    this.c='/login'
                }
             },
             change2(){
                if(this.$store.state.login_state){
                    this.m='/my'
                }else{
                    this.r=0,
                    console.log(this.$store.state.login_state)
                    this.m='/login'
                }
             },
            cli1(){
                this.$store.commit('go',1)
            },
            cli2(){
                this.$store.commit('go',2)
            },
            cli3(){
                this.$store.commit('go',3)
            },
            cli4(){
                if(this.r==1){
                    this.$store.commit('go',4)
                }
            },
            cli5(){
                if(this.r==1){
                    this.$store.commit('go',5)
                }
            },
             
            
        }
            
    }
</script>
<style scoped>
    @font-face {
    font-family: 'iconfont';
    src: url('../assets/ico/iconfont.eot');
    src: url('../assets/ico/iconfont.eot?#iefix') format('embedded-opentype'),
        url('../assets/ico/iconfont.woff2') format('woff2'),
        url('../assets/ico/iconfont.woff') format('woff'),
        url('../assets/ico/iconfont.ttf') format('truetype'),
        url('../assets/ico/iconfont.svg#iconfont') format('svg');
    }
    .iconfont {
        font-family: "iconfont" !important;
        font-size: 25px;
        color: #999;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
       
        
    }





    .nav{
        overflow: hidden;
    }
    .nav_btn{
        position: fixed;
        bottom: 0px;
        left: 0px;
        width: 100%;
        height: 45px;
        
        background-color: white;
        border-top: 1px solid rgb(172, 172, 172);
    }
    .nav_btn li{
        width: 20%;
        
        margin: 0px;
        float: left;
        text-align: center;
        position: relative;
        /* bottom: 15px; */
    }
    .src{
        height: 80px;
        width: 60px;
        display:inline-block;
        transform: scale(0.5625);
        
    }
    .pic{ 
        height: 80px;
        width: 60px;
        display:none;
        transform:scale(0.5625)
    }
     .router-link-active .src{
        display: none;
    }
    .router-link-active .pic{
        display: inline-block;
    }
    .red{
        color: rgb(184,28,34);
    }
    .nav_btn p{
        font-size: 12px;
        margin-top: -2px;
        color: #999;
    }


</style>