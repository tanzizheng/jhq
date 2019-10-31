import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)
// 引入自定义组件
import Index from '@/pages/Index'
import About from '@/pages/About'
import Contact from '@/pages/Contact'
import News from '@/pages/News'
import NewsDetail from '@/pages/NewsDetail'
import Register from '@/pages/Register'

import Product from '@/pages/Product'


export const router=new VueRouter({
    routes:[
        {
            path:"/",
            component:Index,
            name:"index"
        },
        {
            path:"/index",
            component:Index
        },
        {
            path:"/about",
            component:About
        },
        {
            path:"/Contact",
            component:Contact
        },
        {
            path:"/news",
            component:News
        },
        {
            path:"/NewsDetail",
            component:NewsDetail,
            // 按名字调转
            name:"NewsDetail"
        },
        {
            path:"/Register",
            component:Register
        },
        //产品中心
        {
            path:"/Product",
            component:Product
        },   
    ]
})