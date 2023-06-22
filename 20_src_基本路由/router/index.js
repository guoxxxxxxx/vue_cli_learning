// 该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";

// 引入组件
import AboutComp from '../pages/AboutComp'
import HomeComp from '../pages/HomeComp'

// 创建一个路由器并暴露
export default new VueRouter({
    routes: [
        {
            path: '/about',
            component: AboutComp
        },
        {
            path:'/home',
            component: HomeComp
        }
    ]
})
