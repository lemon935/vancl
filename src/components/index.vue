<template id="index">
    <!-- 头顶搜索 -->
    <div class="back_ground">
        <div class="find_top">
            <img src="src/assets/images/logo_top.png" alt="" class="logo_img">
            <div class="find_div">
                <img src="src/assets/images/search.png" alt="" class="search_img">
                <input type="text" placeholder="熊本熊">
            </div>
            <router-link :to="s">
                <img src="src/assets/images/message.png" alt="" class="message_img" @click="change()">
            </router-link>
        </div>
        <!-- 版心 -->
        <div class="back_size">
            <div class="wrap_swipe">
                <mt-swipe :auto="4000">
                    <mt-swipe-item v-for="(item,index) in list_swipe">
                        <img :src="item.src" alt="">
                    </mt-swipe-item>              
                </mt-swipe>
            </div>
        <!-- 优惠卷 -->
            <div class="discounts">
                <img src="src/assets/images/discounts/discounts1.jpg" alt="">
                <img src="src/assets/images/discounts/discounts2.jpg" alt="">
                <img src="src/assets/images/discounts/discounts3.jpg" alt="">
            </div>
            <!-- 中间导航栏 -->
            <div class="middle_nav">
                <ul>
                    <li v-for="(item,index) in list_middle_nav">
                        <img :src="item.src" alt="">
                        <p>{{item.text}}</p>
                    </li>
                </ul>
            </div>
            <!-- 新品上新 -->
            <div class="new">
                <div class="title_one">
                    <span class="title_span"><img src="src/assets/images/title_left.jpg" alt=""></span>
                    <p>新品上新</p>
                </div>
                <div class="new_product_box">
                    <ul class="new_product">
                        <li v-for="(item,index) in list_new_product">
                            <img :src="item.src" alt="">
                        </li>
                     </ul>
                </div>
            </div>
            <!-- 每日秒杀 -->
            <div class="seckill">
                <div class="title_seckill">
                    <span class="title_clock"><img src="src/assets/images/clock.png" alt=""></span>
                    <p>限时秒杀</p>
                    <b>|</b>
                    <b>0 点场</b>
                    <div class="countdown">
                        <p>距离结束</p>
                        <span class="time">{{hour}}</span>
                        <span class="colon">:</span>
                        <span class="time">{{minute}}</span>
                        <span class="colon">:</span>
                        <span class="time">{{second}}</span>
                    </div>
                </div>
                <div class="seckill_product_box">
                    <ul>
                        <li v-for="(item,index) in list_seckill_product">
                            <img :src="item.src" alt="">
                            <span class="sales">充值后¥{{item.sales}}</span>
                            <span class="price">{{item.price}}</span>
                        </li>
                        <li>查看更多></li>
                    </ul>
                </div>
                <!-- 爱在七夕 -->
                <div class="love">
                    <div class="love_title">
                        <span class="love_span"><img src="src/assets/images/title_left.jpg" alt=""></span>
                        <p>爱在七夕</p>
                        <p class="love_data">
                            8/21 15:00-8/28 15:00
                        </p>
                    </div>
                    <div class="love_img_box">
                        <ul>
                            <li v-for="(item,index) in list_love">
                                <img :src="item.src" alt="">
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- 精选推荐 -->
                <div class="recommended">
                    <div class="recommended_title">
                        <span class="recommended_span"><img src="src/assets/images/recommended_title.jpg" alt=""></span>
                        <p>精选推荐</p>
                    </div>
                    <!-- 循环的模板 -->
                    <div v-for="(item,index) in list_recommended" class="recommended_img_box">
                        <!-- 大图 -->
                        <div class="recommended_box_big">
                            <img :src="item.src" alt="">
                            <span class="triangle"><img src="src/assets/images/recommended/triangle.png" alt=""></span>
                        </div>
                        <!-- 横行可以拉的图 -->
                        <div class="recommended_box_move">
                            <ul :style="'width: '+(item.num*105 +105)+'px'">
                                <li v-for="(item1,index1) in item.list_in">
                                    <img :src="item1.src" alt="">
                                    <p class="recommended_description">{{item1.description}}</p>
                                    <p class="recommended_price">售价:{{item1.price}}</p>
                                    <p class="recommended_btn">
                                        <span class="recommended_equal">充值相当于:</span>
                                        <span class="recommended_sales">{{item1.sales}}</span>
                                    </p>
                                </li>
                                <li>查看更多<br>View More</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- 底部两个按钮 -->
                <div class="btn_btn">
                    <span class="btn_more">查看更多</span>
                    <span class="btn_gotop" @click="gotop()">返回顶部</span>
                </div>
                <!-- 底部图标 -->
                <div class="btn_ico">
                    <span><img src="src/assets/images/btn_ico/1.jpg" alt=""></span>
                    <span><img src="src/assets/images/btn_ico/2.jpg" alt=""></span>
                    <span><img src="src/assets/images/btn_ico/3.jpg" alt=""></span>
                    <span><img src="src/assets/images/btn_ico/4.jpg" alt=""></span>
                </div>
                <h3>京ICP证100557号</h3>
            </div>
            <div class="kan"></div>
        </div>
        <!-- 搜索框 -->
        <!-- <div class="find_pop">
            <p class="hot_title">
                <span>热搜</span>
                <span>X</span>
            </p>

        </div> -->
    </div>

</template>

<script>
    export default {
        data(){
            return{
                hour:'',
                minute:'',
                second:'',
                s:'',
                list_middle_nav:[
                    {
                        src:'src/assets/images/middle_nav/middle_nav1.jpg',
                        text:'新品'
                    },
                    {
                        src:'src/assets/images/middle_nav/middle_nav2.jpg',
                        text:'特惠'
                    },
                    {
                        src:'src/assets/images/middle_nav/middle_nav3.jpg',
                        text:'衬衫'
                    },
                    {
                        src:'src/assets/images/middle_nav/middle_nav4.jpg',
                        text:'T恤'
                    },
                    {
                        src:'src/assets/images/middle_nav/middle_nav5.jpg',
                        text:'Polo'
                    },
                ],
                list_swipe:[
                    {
                        src:'src/assets/images/swipe/swipe1.jpg'
                    },
                    {
                        src:'src/assets/images/swipe/swipe2.jpg'
                    },
                    {
                        src:'src/assets/images/swipe/swipe3.jpg'
                    },
                    {
                        src:'src/assets/images/swipe/swipe4.jpg'
                    },
                    {
                        src:'src/assets/images/swipe/swipe5.jpg'
                    },
                    {
                        src:'src/assets/images/swipe/swipe6.jpg'
                    },
                ],
                list_new_product:[
                    {
                        src:'src/assets/images/newproduct/new1.jpg'
                    },
                    {
                        src:'src/assets/images/newproduct/new2.jpg'
                    },
                    {
                        src:'src/assets/images/newproduct/new3.jpg'
                    },
                    {
                        src:'src/assets/images/newproduct/new4.jpg'
                    },
                    {
                        src:'src/assets/images/newproduct/new5.jpg'
                    },
                    {
                        src:'src/assets/images/newproduct/new6.jpg'
                    },
                    {
                        src:'src/assets/images/newproduct/new7.jpg'
                    },
                    {
                        src:'src/assets/images/newproduct/new8.jpg'
                    },
                    {
                        src:'src/assets/images/newproduct/new9.jpg'
                    },
                    {
                        src:'src/assets/images/newproduct/new10.jpg'
                    },
                    {
                        src:'src/assets/images/newproduct/new_more.jpg'
                    },   
                ],
                list_seckill_product:[
                    {
                        src:'src/assets/images/seckill/seckill1.jpg',
                        sales:'59',
                        price:'¥338'
                    },
                    {
                        src:'src/assets/images/seckill/seckill2.jpg',
                        sales:'29',
                        price:'¥158'
                    },
                    {
                        src:'src/assets/images/seckill/seckill3.jpg',
                        sales:'22',
                        price:'¥198'
                    },
                    {
                        src:'src/assets/images/seckill/seckill4.jpg',
                        sales:'29',
                        price:'¥158'
                    },
                    {
                        src:'src/assets/images/seckill/seckill5.jpg',
                        sales:'1',
                        price:'¥118'
                    },
                    {
                        src:'src/assets/images/seckill/seckill6.jpg',
                        sales:'19',
                        price:'¥118'
                    },
                    {
                        src:'src/assets/images/seckill/seckill7.jpg',
                        sales:'59',
                        price:'¥198'
                    },
                    {
                        src:'src/assets/images/seckill/seckill8.jpg',
                        sales:'22',
                        price:'¥68'
                    },
                ],
                list_love:[
                    {
                        src:'src/assets/images/love/love1.jpg',
                    },
                    {
                        src:'src/assets/images/love/love2.jpg',
                    },
                    {
                        src:'src/assets/images/love/love3.jpg',
                    },
                    {
                        src:'src/assets/images/love/love4.jpg',
                    },
                    {
                        src:'src/assets/images/love/love5.jpg',
                    },
                    {
                        src:'src/assets/images/love/love6.jpg',
                    },
                    {
                        src:'src/assets/images/love/love7.jpg',
                    },
                    {
                        src:'src/assets/images/love/love8.jpg',
                    },
                    {
                        src:'src/assets/images/love/love9.jpg',
                    },
                    {
                        src:'src/assets/images/love/love10.jpg',
                    },
                    {
                        src:'src/assets/images/love/love11.jpg',
                    },
                    {
                        src:'src/assets/images/love/love12.jpg',
                    },
                    {
                        src:'src/assets/images/love/love13.jpg',
                    },
                    {
                        src:'src/assets/images/love/love14.jpg',
                    },
                    {
                        src:'src/assets/images/love/love15.jpg',
                    },
                ],
                list_recommended:[
                    {
                        src:'src/assets/images/recommended/recommended_big/big1.jpg',
                        num:11,
                        list_in:[
                            {
                                src:'src/assets/images/recommended/recommended_1/1.jpg',
                                description:'凡客日式宽松免烫衬衫 温莎领 白色',
                                sales:'¥19',
                                price:'¥118'
                            },
                            {
                                src:'src/assets/images/recommended/recommended_1/2.jpg',
                                description:'凡客日式宽松免烫衬衫 温莎领 白色',
                                sales:'¥19',
                                price:'¥118'
                            },
                            {
                                src:'src/assets/images/recommended/recommended_1/3.jpg',
                                description:'凡客日式宽松免烫衬衫 温莎领 白色',
                                sales:'¥19',
                                price:'¥118'
                            },
                            {
                                src:'src/assets/images/recommended/recommended_1/4.jpg',
                                description:'凡客日式宽松免烫衬衫 温莎领 白色',
                                sales:'¥19',
                                price:'¥118'
                            },
                            {
                                src:'src/assets/images/recommended/recommended_1/5.jpg',
                                description:'凡客日式宽松免烫衬衫 温莎领 白色',
                                sales:'¥19',
                                price:'¥118'
                            },
                            {
                                src:'src/assets/images/recommended/recommended_1/6.jpg',
                                description:'凡客日式宽松免烫衬衫 温莎领 白色',
                                sales:'¥19',
                                price:'¥118'
                            },
                            {
                                src:'src/assets/images/recommended/recommended_1/7.jpg',
                                description:'凡客日式宽松免烫衬衫 温莎领 白色',
                                sales:'¥19',
                                price:'¥118'
                            },
                            {
                                src:'src/assets/images/recommended/recommended_1/8.jpg',
                                description:'凡客日式宽松免烫衬衫 温莎领 白色',
                                sales:'¥19',
                                price:'¥118'
                            },
                            {
                                src:'src/assets/images/recommended/recommended_1/9.jpg',
                                description:'凡客日式宽松免烫衬衫 温莎领 白色',
                                sales:'¥19',
                                price:'¥118'
                            },
                            {
                                src:'src/assets/images/recommended/recommended_1/10.jpg',
                                description:'凡客日式宽松免烫衬衫 温莎领 白色',
                                sales:'¥19',
                                price:'¥118'
                            },
                            {
                                src:'src/assets/images/recommended/recommended_1/11.jpg',
                                description:'凡客日式宽松免烫衬衫 温莎领 白色',
                                sales:'¥19',
                                price:'¥118'
                            },
 
                        ]
                    },
                    {
                        src:'src/assets/images/recommended/recommended_big/big2.jpg',
                        num:8,
                        list_in:[
                            {
                                src:'src/assets/images/recommended/recommended_2/1.jpg',
                                description:'凡客日式宽松免烫衬衫 温莎领 白色',
                                sales:'¥19',
                                price:'¥118'
                            },
                            {
                                src:'src/assets/images/recommended/recommended_2/2.jpg',
                                description:'凡客日式宽松免烫衬衫 温莎领 白色',
                                sales:'¥19',
                                price:'¥118'
                            },
                            {
                                src:'src/assets/images/recommended/recommended_2/3.jpg',
                                description:'凡客日式宽松免烫衬衫 温莎领 白色',
                                sales:'¥19',
                                price:'¥118'
                            },
                            {
                                src:'src/assets/images/recommended/recommended_2/4.jpg',
                                description:'凡客日式宽松免烫衬衫 温莎领 白色',
                                sales:'¥19',
                                price:'¥118'
                            },
                            {
                                src:'src/assets/images/recommended/recommended_2/5.jpg',
                                description:'凡客日式宽松免烫衬衫 温莎领 白色',
                                sales:'¥19',
                                price:'¥118'
                            },
                            {
                                src:'src/assets/images/recommended/recommended_2/6.jpg',
                                description:'凡客日式宽松免烫衬衫 温莎领 白色',
                                sales:'¥19',
                                price:'¥118'
                            },
                            {
                                src:'src/assets/images/recommended/recommended_2/7.jpg',
                                description:'凡客日式宽松免烫衬衫 温莎领 白色',
                                sales:'¥19',
                                price:'¥118'
                            },
                            {
                                src:'src/assets/images/recommended/recommended_2/8.jpg',
                                description:'凡客日式宽松免烫衬衫 温莎领 白色',
                                sales:'¥19',
                                price:'¥118'
                            },
                          
 
                        ]
                    },
                    {
                        src:'src/assets/images/recommended/recommended_big/big3.jpg',
                        num:7,
                        list_in:[
                            {
                                src:'src/assets/images/recommended/recommended_3/1.jpg',
                                description:'凡客日式宽松免烫衬衫 温莎领 白色',
                                sales:'¥19',
                                price:'¥118'
                            },
                            {
                                src:'src/assets/images/recommended/recommended_3/2.jpg',
                                description:'凡客日式宽松免烫衬衫 温莎领 白色',
                                sales:'¥19',
                                price:'¥118'
                            },
                            {
                                src:'src/assets/images/recommended/recommended_3/3.jpg',
                                description:'凡客日式宽松免烫衬衫 温莎领 白色',
                                sales:'¥19',
                                price:'¥118'
                            },
                            {
                                src:'src/assets/images/recommended/recommended_3/4.jpg',
                                description:'凡客日式宽松免烫衬衫 温莎领 白色',
                                sales:'¥19',
                                price:'¥118'
                            },
                            {
                                src:'src/assets/images/recommended/recommended_3/5.jpg',
                                description:'凡客日式宽松免烫衬衫 温莎领 白色',
                                sales:'¥19',
                                price:'¥118'
                            },
                            {
                                src:'src/assets/images/recommended/recommended_3/6.jpg',
                                description:'凡客日式宽松免烫衬衫 温莎领 白色',
                                sales:'¥19',
                                price:'¥118'
                            },
                            {
                                src:'src/assets/images/recommended/recommended_3/7.jpg',
                                description:'凡客日式宽松免烫衬衫 温莎领 白色',
                                sales:'¥19',
                                price:'¥118'
                            },
                            
                          
 
                        ]
                    },
                    {
                        src:'src/assets/images/recommended/recommended_big/big4.jpg',
                        num:10,
                        list_in:[
                            {
                                src:'src/assets/images/recommended/recommended_4/1.jpg',
                                description:'凡客日式宽松免烫衬衫 温莎领 白色',
                                sales:'¥19',
                                price:'¥118'
                            },
                            {
                                src:'src/assets/images/recommended/recommended_4/2.jpg',
                                description:'凡客日式宽松免烫衬衫 温莎领 白色',
                                sales:'¥19',
                                price:'¥118'
                            },
                            {
                                src:'src/assets/images/recommended/recommended_4/3.jpg',
                                description:'凡客日式宽松免烫衬衫 温莎领 白色',
                                sales:'¥19',
                                price:'¥118'
                            },
                            {
                                src:'src/assets/images/recommended/recommended_4/4.jpg',
                                description:'凡客日式宽松免烫衬衫 温莎领 白色',
                                sales:'¥19',
                                price:'¥118'
                            },
                            {
                                src:'src/assets/images/recommended/recommended_4/5.jpg',
                                description:'凡客日式宽松免烫衬衫 温莎领 白色',
                                sales:'¥19',
                                price:'¥118'
                            },
                            {
                                src:'src/assets/images/recommended/recommended_4/6.jpg',
                                description:'凡客日式宽松免烫衬衫 温莎领 白色',
                                sales:'¥19',
                                price:'¥118'
                            },
                            {
                                src:'src/assets/images/recommended/recommended_4/7.jpg',
                                description:'凡客日式宽松免烫衬衫 温莎领 白色',
                                sales:'¥19',
                                price:'¥118'
                            },
                            {
                                src:'src/assets/images/recommended/recommended_4/8.jpg',
                                description:'凡客日式宽松免烫衬衫 温莎领 白色',
                                sales:'¥19',
                                price:'¥118'
                            },
                            {
                                src:'src/assets/images/recommended/recommended_4/9.jpg',
                                description:'凡客日式宽松免烫衬衫 温莎领 白色',
                                sales:'¥19',
                                price:'¥118'
                            },
                            {
                                src:'src/assets/images/recommended/recommended_4/10.jpg',
                                description:'凡客日式宽松免烫衬衫 温莎领 白色',
                                sales:'¥19',
                                price:'¥118'
                            },
                          
 
                        ]
                    },
                    {
                        src:'src/assets/images/recommended/recommended_big/big5.jpg',
                        num:10,
                        list_in:[
                            {
                                src:'src/assets/images/recommended/recommended_5/1.jpg',
                                description:'凡客日式宽松免烫衬衫 温莎领 白色',
                                sales:'¥19',
                                price:'¥118'
                            },
                            {
                                src:'src/assets/images/recommended/recommended_5/2.jpg',
                                description:'凡客日式宽松免烫衬衫 温莎领 白色',
                                sales:'¥19',
                                price:'¥118'
                            },
                            {
                                src:'src/assets/images/recommended/recommended_5/3.jpg',
                                description:'凡客日式宽松免烫衬衫 温莎领 白色',
                                sales:'¥19',
                                price:'¥118'
                            },
                            {
                                src:'src/assets/images/recommended/recommended_5/4.jpg',
                                description:'凡客日式宽松免烫衬衫 温莎领 白色',
                                sales:'¥19',
                                price:'¥118'
                            },
                            {
                                src:'src/assets/images/recommended/recommended_5/5.jpg',
                                description:'凡客日式宽松免烫衬衫 温莎领 白色',
                                sales:'¥19',
                                price:'¥118'
                            },
                            {
                                src:'src/assets/images/recommended/recommended_5/6.jpg',
                                description:'凡客日式宽松免烫衬衫 温莎领 白色',
                                sales:'¥19',
                                price:'¥118'
                            },
                            {
                                src:'src/assets/images/recommended/recommended_5/7.jpg',
                                description:'凡客日式宽松免烫衬衫 温莎领 白色',
                                sales:'¥19',
                                price:'¥118'
                            },
                            {
                                src:'src/assets/images/recommended/recommended_5/8.jpg',
                                description:'凡客日式宽松免烫衬衫 温莎领 白色',
                                sales:'¥19',
                                price:'¥118'
                            },
                            {
                                src:'src/assets/images/recommended/recommended_5/9.jpg',
                                description:'凡客日式宽松免烫衬衫 温莎领 白色',
                                sales:'¥19',
                                price:'¥118'
                            },
                            {
                                src:'src/assets/images/recommended/recommended_5/10.jpg',
                                description:'凡客日式宽松免烫衬衫 温莎领 白色',
                                sales:'¥19',
                                price:'¥118'
                            },
                          
 
                        ]
                    },
                    {
                        src:'src/assets/images/recommended/recommended_big/big6.jpg',
                        num:9,
                        list_in:[
                            {
                                src:'src/assets/images/recommended/recommended_6/1.jpg',
                                description:'凡客日式宽松免烫衬衫 温莎领 白色',
                                sales:'¥19',
                                price:'¥118'
                            },
                            {
                                src:'src/assets/images/recommended/recommended_6/2.jpg',
                                description:'凡客日式宽松免烫衬衫 温莎领 白色',
                                sales:'¥19',
                                price:'¥118'
                            },
                            {
                                src:'src/assets/images/recommended/recommended_6/3.jpg',
                                description:'凡客日式宽松免烫衬衫 温莎领 白色',
                                sales:'¥19',
                                price:'¥118'
                            },
                            {
                                src:'src/assets/images/recommended/recommended_6/4.jpg',
                                description:'凡客日式宽松免烫衬衫 温莎领 白色',
                                sales:'¥19',
                                price:'¥118'
                            },
                            {
                                src:'src/assets/images/recommended/recommended_6/5.jpg',
                                description:'凡客日式宽松免烫衬衫 温莎领 白色',
                                sales:'¥19',
                                price:'¥118'
                            },
                            {
                                src:'src/assets/images/recommended/recommended_6/6.jpg',
                                description:'凡客日式宽松免烫衬衫 温莎领 白色',
                                sales:'¥19',
                                price:'¥118'
                            },
                            {
                                src:'src/assets/images/recommended/recommended_6/7.jpg',
                                description:'凡客日式宽松免烫衬衫 温莎领 白色',
                                sales:'¥19',
                                price:'¥118'
                            },
                            {
                                src:'src/assets/images/recommended/recommended_6/8.jpg',
                                description:'凡客日式宽松免烫衬衫 温莎领 白色',
                                sales:'¥19',
                                price:'¥118'
                            },
                            {
                                src:'src/assets/images/recommended/recommended_6/9.jpg',
                                description:'凡客日式宽松免烫衬衫 温莎领 白色',
                                sales:'¥19',
                                price:'¥118'
                            },
                          
 
                        ]
                    },
                    {
                        src:'src/assets/images/recommended/recommended_big/big7.jpg',
                        num:8,
                        list_in:[
                            {
                                src:'src/assets/images/recommended/recommended_7/1.jpg',
                                description:'凡客日式宽松免烫衬衫 温莎领 白色',
                                sales:'¥19',
                                price:'¥118'
                            },
                            {
                                src:'src/assets/images/recommended/recommended_7/2.jpg',
                                description:'凡客日式宽松免烫衬衫 温莎领 白色',
                                sales:'¥19',
                                price:'¥118'
                            },
                            {
                                src:'src/assets/images/recommended/recommended_7/3.jpg',
                                description:'凡客日式宽松免烫衬衫 温莎领 白色',
                                sales:'¥19',
                                price:'¥118'
                            },
                            {
                                src:'src/assets/images/recommended/recommended_7/4.jpg',
                                description:'凡客日式宽松免烫衬衫 温莎领 白色',
                                sales:'¥19',
                                price:'¥118'
                            },
                            {
                                src:'src/assets/images/recommended/recommended_7/5.jpg',
                                description:'凡客日式宽松免烫衬衫 温莎领 白色',
                                sales:'¥19',
                                price:'¥118'
                            },
                            {
                                src:'src/assets/images/recommended/recommended_7/6.jpg',
                                description:'凡客日式宽松免烫衬衫 温莎领 白色',
                                sales:'¥19',
                                price:'¥118'
                            },
                            {
                                src:'src/assets/images/recommended/recommended_7/7.jpg',
                                description:'凡客日式宽松免烫衬衫 温莎领 白色',
                                sales:'¥19',
                                price:'¥118'
                            },
                            {
                                src:'src/assets/images/recommended/recommended_7/8.jpg',
                                description:'凡客日式宽松免烫衬衫 温莎领 白色',
                                sales:'¥19',
                                price:'¥118'
                            },
                          
 
                        ]
                    },
                    {
                        src:'src/assets/images/recommended/recommended_big/big8.jpg',
                        num:8,
                        list_in:[
                            {
                                src:'src/assets/images/recommended/recommended_8/1.jpg',
                                description:'凡客日式宽松免烫衬衫 温莎领 白色',
                                sales:'¥19',
                                price:'¥118'
                            },
                            {
                                src:'src/assets/images/recommended/recommended_8/2.jpg',
                                description:'凡客日式宽松免烫衬衫 温莎领 白色',
                                sales:'¥19',
                                price:'¥118'
                            },
                            {
                                src:'src/assets/images/recommended/recommended_8/3.jpg',
                                description:'凡客日式宽松免烫衬衫 温莎领 白色',
                                sales:'¥19',
                                price:'¥118'
                            },
                            {
                                src:'src/assets/images/recommended/recommended_8/4.jpg',
                                description:'凡客日式宽松免烫衬衫 温莎领 白色',
                                sales:'¥19',
                                price:'¥118'
                            },
                            {
                                src:'src/assets/images/recommended/recommended_8/5.jpg',
                                description:'凡客日式宽松免烫衬衫 温莎领 白色',
                                sales:'¥19',
                                price:'¥118'
                            },
                            {
                                src:'src/assets/images/recommended/recommended_8/6.jpg',
                                description:'凡客日式宽松免烫衬衫 温莎领 白色',
                                sales:'¥19',
                                price:'¥118'
                            },
                            {
                                src:'src/assets/images/recommended/recommended_8/7.jpg',
                                description:'凡客日式宽松免烫衬衫 温莎领 白色',
                                sales:'¥19',
                                price:'¥118'
                            },
                            {
                                src:'src/assets/images/recommended/recommended_8/8.jpg',
                                description:'凡客日式宽松免烫衬衫 温莎领 白色',
                                sales:'¥19',
                                price:'¥118'
                            },
                          
 
                        ]
                    },
                    {
                        src:'src/assets/images/recommended/recommended_big/big9.jpg',
                        num:8,
                        list_in:[
                            {
                                src:'src/assets/images/recommended/recommended_9/1.jpg',
                                description:'凡客日式宽松免烫衬衫 温莎领 白色',
                                sales:'¥19',
                                price:'¥118'
                            },
                            {
                                src:'src/assets/images/recommended/recommended_9/2.jpg',
                                description:'凡客日式宽松免烫衬衫 温莎领 白色',
                                sales:'¥19',
                                price:'¥118'
                            },
                            {
                                src:'src/assets/images/recommended/recommended_9/3.jpg',
                                description:'凡客日式宽松免烫衬衫 温莎领 白色',
                                sales:'¥19',
                                price:'¥118'
                            },
                            {
                                src:'src/assets/images/recommended/recommended_9/4.jpg',
                                description:'凡客日式宽松免烫衬衫 温莎领 白色',
                                sales:'¥19',
                                price:'¥118'
                            },
                            {
                                src:'src/assets/images/recommended/recommended_9/5.jpg',
                                description:'凡客日式宽松免烫衬衫 温莎领 白色',
                                sales:'¥19',
                                price:'¥118'
                            },
                            {
                                src:'src/assets/images/recommended/recommended_9/6.jpg',
                                description:'凡客日式宽松免烫衬衫 温莎领 白色',
                                sales:'¥19',
                                price:'¥118'
                            },
                            {
                                src:'src/assets/images/recommended/recommended_9/7.jpg',
                                description:'凡客日式宽松免烫衬衫 温莎领 白色',
                                sales:'¥19',
                                price:'¥118'
                            },
                            {
                                src:'src/assets/images/recommended/recommended_9/8.jpg',
                                description:'凡客日式宽松免烫衬衫 温莎领 白色',
                                sales:'¥19',
                                price:'¥118'
                            },
                          
 
                        ]
                    },
                    {
                        src:'src/assets/images/recommended/recommended_big/big10.jpg',
                        num:12,
                        list_in:[
                            {
                                src:'src/assets/images/recommended/recommended_10/1.jpg',
                                description:'凡客日式宽松免烫衬衫 温莎领 白色',
                                sales:'¥19',
                                price:'¥118'
                            },
                            {
                                src:'src/assets/images/recommended/recommended_10/2.jpg',
                                description:'凡客日式宽松免烫衬衫 温莎领 白色',
                                sales:'¥19',
                                price:'¥118'
                            },
                            {
                                src:'src/assets/images/recommended/recommended_10/3.jpg',
                                description:'凡客日式宽松免烫衬衫 温莎领 白色',
                                sales:'¥19',
                                price:'¥118'
                            },
                            {
                                src:'src/assets/images/recommended/recommended_10/4.jpg',
                                description:'凡客日式宽松免烫衬衫 温莎领 白色',
                                sales:'¥19',
                                price:'¥118'
                            },
                            {
                                src:'src/assets/images/recommended/recommended_10/5.jpg',
                                description:'凡客日式宽松免烫衬衫 温莎领 白色',
                                sales:'¥19',
                                price:'¥118'
                            },
                            {
                                src:'src/assets/images/recommended/recommended_10/6.jpg',
                                description:'凡客日式宽松免烫衬衫 温莎领 白色',
                                sales:'¥19',
                                price:'¥118'
                            },
                            {
                                src:'src/assets/images/recommended/recommended_10/7.jpg',
                                description:'凡客日式宽松免烫衬衫 温莎领 白色',
                                sales:'¥19',
                                price:'¥118'
                            },
                            {
                                src:'src/assets/images/recommended/recommended_10/8.jpg',
                                description:'凡客日式宽松免烫衬衫 温莎领 白色',
                                sales:'¥19',
                                price:'¥118'
                            },
                            {
                                src:'src/assets/images/recommended/recommended_10/9.jpg',
                                description:'凡客日式宽松免烫衬衫 温莎领 白色',
                                sales:'¥19',
                                price:'¥118'
                            },
                            {
                                src:'src/assets/images/recommended/recommended_10/10.jpg',
                                description:'凡客日式宽松免烫衬衫 温莎领 白色',
                                sales:'¥19',
                                price:'¥118'
                            },
                            {
                                src:'src/assets/images/recommended/recommended_10/11.jpg',
                                description:'凡客日式宽松免烫衬衫 温莎领 白色',
                                sales:'¥19',
                                price:'¥118'
                            },
                            {
                                src:'src/assets/images/recommended/recommended_10/12.jpg',
                                description:'凡客日式宽松免烫衬衫 温莎领 白色',
                                sales:'¥19',
                                price:'¥118'
                            },
                          
 
                        ]
                    },

                ]

            }
        },
        mounted(){
             var timer = setInterval(()=>{
                 var today=new Date();
                    var oldTime = today.getTime();
                    var newDate = new Date(2020,7,29,0,0,0);
                    var newTime = newDate.getTime();
                    var second = Math.floor((newTime - oldTime) / 1000);
                    var hour = Math.floor(second / 3600);//3600代表小时；
                    second %= 3600                        
                    var minute = Math.floor(second / 60);//分钟
                    second %= 60;                        //秒
                    if(hour<10){hour='0'+hour}
                    if(minute<10){minute='0'+minute}
                    if(second<10){second='0'+second }
                    this.hour=hour 
                    this.minute=minute
                    this.second=second     
             },1000)
        },
        methods:{
            gotop(){
                scrollTo(0,0);
            },
             change(){
                if(this.$store.state.login_state){
                    this.s='/message'
                }else{
                    this.s='/login'
                }
             }
        }
    }
</script>
<style>
    .wrap_swipe{
        width: 100%;
    }

    .wrap_swipe img{
        width: 100%;
    }
    .wrap_swipe .mint-swipe-items-wrap{
        /* padding-bottom设置百分比，参照物是父级的宽度 */
        padding-bottom:50%;
    }
    .wrap_swipe .mint-swipe-indicator.is-active {
        opacity: 1;
        background: rgb(184,28,34);
    }
</style>

<style scoped>
    *{
        padding:0px;
        margin:0px;
        list-style: none;
    }
    .kan{
        width: 100%;
        height: 60px;
    }
    .back_ground{
        width: 100%;
        background: url(../assets/images/back.jpg) no-repeat top/100% auto;
        background-color: rgb(242,242,242);
    }
    .back_size{
        width: 95%;
        margin: 0% 2.5%;
        /* background-color: white; */
        background-color: rgb(250,250,250);
    }
    .back_img{
        width: 100%;
        position: absolute;
        
    }

    .find_top{
        width: 100%;
        height: 38px;
        background-color:rgb(184,28,34);
        overflow: hidden;
    }
    .logo_img{
        width: 36px;
        margin-left: 3%;
        margin-top: 10px;
        float: left;
    }
    .find_div{
        width: 70%;
        height: 25px;
        margin-top: 6px;
        margin-left: 8px;
        border-radius: 10px;
        background-color: white;
        text-align: center;
        float: left;
        
    }
    .find_div input{
        float: left;
        /* background-color: yellowgreen; */
        width: 86%;
        height: 25px;
        margin-left: 1%;
    }
    .search_img{
        float: left;
        width: 1rem;
        margin-top: 0.3rem;
        margin-left: 0.7rem;
    }
    .message_img{
        float: right;
        width: 23px;
        margin-top:2%;
        margin-right:3%;
    }



    /* .wrap .mint-swipe-indicator{
        background:red;
        opacity: 0.9;
    }
    .wraps .is-active{
        background:blue
    } */



    .discounts{
        padding: 0.8rem;
        width: 100%;

        overflow: hidden;
    }
    .discounts img{
        width: 50%;
        float: left;
    }
    .discounts img:nth-of-type(1){
        width: 100%;
        margin-bottom: 1rem;
    }
    .middle_nav{
        padding: 0px 1rem;
    }
    .middle_nav ul{
        overflow: hidden;

    }
    .middle_nav li{
        float: left;
        text-align: center;
        font-size: 11px;
        width: 20%;
    }
    .middle_nav li:nth-last-of-type(1){
        float: left;
        text-align: center;
        margin-right: 0px;
    }
    .middle_nav img{
       height: 30px;
       margin-bottom: 2px; 
    }
    .title_one{
        padding: 1rem;
        background-color: rgb(250,250,250);
        overflow: hidden;
    }
    .title_span img{
        float: left;
        width: 1rem;
        margin-top: 4px;
        margin-right: 8px;
    }
    .title_one p{
        font-size: 14px;
        font-weight: 400;
        float: left;
        margin-top: 1px;
    }
    .new_product_box{
        overflow: auto;
    }
    .new_product{
        width: 480%;
    }
    .new_product li{
        width: 9.09%;
        float: left;
        box-sizing: border-box;
    }
    .new_product img{
        width: 100%;
    }
    .title_seckill{
        padding: 2px 13px;
        background-color: rgb(250,250,250);
        overflow: hidden;
    }
    .title_clock img{
        float: left;
        width: 1rem;
        margin-top: 4px;
        margin-right: 10px;
    }
    .title_seckill p{
        font-size: 14px;
        font-weight: 400;
        float: left;
        margin-top: 1px;
    }
    .title_seckill b{
        float: left;
        font-size: 12px;
        color: #adadad;
        margin-left: 10px;
        font-weight: 500;
    }
    .title_seckill b:nth-of-type(2){
         margin-top: 5px;
         font-size: 10px;
    }
    .countdown{
        float: right;
    }
    .time{
        display: inline-block;
        margin-top: 4px;
        width: 15px;
        height: 15px;
        font-size: 11px;
        text-align: center;
        color: white;
        background-color:rgb(184,28,34) ;
        border-radius: 4px;  
        float: left;    
    }
    .countdown p{
        margin-top: 4px;
        float: left;
        font-size: 12px;
        color: #adadad;
        font-weight: 500;
        margin-right: 5px;
    }
    .colon{
        font-size: 12px;
        color: #adadad;
        font-weight: 600;
        text-align: center;
        float: left;
        margin-left: 2px;
        margin-top: 2px;
    }
    .seckill_product_box{
        background-color: rgb(250,250,250);
        overflow: auto;
    }
    .seckill_product_box ul{
        width: 270%;
    }
    .seckill_product_box li{
        width: 10.8%;
        float: left;
        overflow: hidden;
        margin-right: 1%;
    }
    .seckill_product_box li:nth-last-of-type(1){
        width: 5.5%;
        padding: 20px 15px;
        font-size: 10px;
        text-align: center;
        color: #cdba8d;
        writing-mode: vertical-lr;
        letter-spacing: 2px;
        border: 1px solid;
        border-radius: 4px;
        box-sizing: border-box;
        margin-right: 0px;
    }
    .seckill_product_box li img{
        width: 100%;
    }

    .sales{
        font-size: 12px;
        color: #b81c22;
        float: left;
        vertical-align: middle;
    }
    .price{
        font-size: 9.6px;
        vertical-align: middle;
        color: #adadad;
        float: left;
        margin-left: 10px;
        text-decoration: line-through;
    }
    /*  */
    .love_title{
        padding: 1rem;
        overflow: hidden;
    }

    .love_span img{
        float: left;
        width: 1rem;
        margin-top: 4px;
        margin-right: 8px;
    }
    .love p{
        float: left;
        font-weight: 500;
    }
    /*  */
    .love_data{
        font-size: 14px;
        float: left;
        margin-top: 1px;
        margin-left: 5px;
    }
    .love_img_box{
        overflow: hidden;
    }

    .love_img_box li{
        float: left;
        width: 100%;
    }
    .love_img_box img{
        width: 100%;
    }

    .love_img_box li:nth-of-type(4){
        width: 50%;
    }
    .love_img_box li:nth-of-type(5){
        width: 50%;
    }
    .love_img_box li:nth-of-type(8){
        width: 50%;
    }
    .love_img_box li:nth-of-type(9){
        width: 50%;
    }
    .love_img_box li:nth-last-of-type(1){
        width: 33.33%;
    }
    .love_img_box li:nth-last-of-type(2){
        width: 33.33%;
    }
    .love_img_box li:nth-last-of-type(3){
        width: 33.33%;
    }
    .love_img_box li:nth-last-of-type(4){
        width: 33.33%;
    }
    .love_img_box li:nth-last-of-type(5){
        width: 33.33%;
    }
    .love_img_box li:nth-last-of-type(6){
        width: 33.33%;
    }

    .recommended_title{
        padding: 0.7rem;
    }
    .recommended_title{
        overflow: hidden;
    }
    .recommended_span img{
        float: left;
        width: 1rem;
        margin-top: 4px;
        margin-right: 8px;
    }
    .recommended p{
        float: left;
        font-weight: 500;
        margin-top: 2px;
    }
    .recommended_box_big{
        overflow: hidden;
        margin-bottom: -20px;
    }
    .recommended_box_big img{
        width: 100%;
        
    }
    .triangle{
        display: inline-block;
        float: left;
        width: 22px;
        position: relative;
        bottom: 17px;
        left: 10px;
    }
    /* 精选内容 */

    .recommended_box_move{
        overflow: auto;
    }
    .recommended_box_move ul{
        
        overflow: hidden;
    }
    .recommended_box_move li{
        width: 100px;
        height: 150px;
        float: left;
        margin: 10px 0px;
        margin-right: 5px;
        
        
    }
    .recommended_box_move li:nth-last-of-type(1){
        border:1px solid #cdba8d;
        float: left;
        text-align: center;
        box-sizing: border-box;
        margin-right: 0px;
        border-radius: 5px;
        color: #cdba8d;
        padding: 50px 10px;
    }
    .recommended_box_move img{
        width: 100%;
    }
    .recommended_description{
        color: #565656;
        position:relative;
        line-height:13px;
        height:13px;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow:hidden;
    }
    .recommended_price{
        font-size: 11px;
        color: #cccccc;
    }
    .recommended_equal{
        font-size: 11px;
        color: black; 
    }
    .recommended_sales{
        font-size: 12px;
        color: #b81c22;
    }


/* 底部内容 */
.btn_btn{
    
    margin-top: 50px;
    width: 100%;
    height: 40px;
    line-height: 40px;
    overflow: hidden;
}
.btn_more{
    background-color: white;
    text-align: center;
    width: 49%;
    float: left;
}
.btn_gotop{
    background-color: white;
    text-align: center;
    margin-left: 2%;
    width: 49%;
    float: left;
}
.btn_ico{
    border-top:1px solid black;
    border-bottom:1px solid black;
    width: 80%;
    padding: 10px 0px;
    margin-left: 10%;
    margin-top:100px;
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
h3{
    margin-top: 10px;
    text-align: center;
}
</style>