import VueRouter from 'vue-router'

import cart from '../../components/cart.vue'
import channel from '../../components/channel.vue'
import classification from '../../components/classification.vue'
import index from '../../components/index.vue'
import my from '../../components/my.vue'
import nav from '../../components/nav.vue'
import message from '../../components/message.vue'
import login from '../../components/login.vue'
import registered from '../../components/registered.vue'
import setting from '../../components/setting.vue'

import channels from '../../components/channels.vue'
import class_ from '../../components/class_.vue'
import details from '../../components/details.vue'






export default new VueRouter({
    routes:[
        {
            path:'/',
            component:nav,
            children:[
                {
                    path:'/index',
                    component:index
                },
                {
                    path:'/classification',
                    component:classification,
                },
                {
                    path:'/channel',
                    component:channel
                },
                {
                    path:'/cart',
                    component:cart
                },
                {
                    path:'/channels/:sh',
                    component:channels
                },
                {
                    path:'/my',
                    component:my
                },
                {
                    path:'/class_/:a',
                    component:class_
                },
            ],
            redirect:'/index'
        },

        {
            path:'/details/:b',
            component:details
        },
        {
            path:'/message',
            component:message
        },
        {
            path:'/setting',
            component:setting
        },
        {
            path:'/registered',
            component:registered
        },
        {
            path:'/login',
            component:login
        },
        {
            path:'/*',
            redirect:'/index'
        }
    ]


})