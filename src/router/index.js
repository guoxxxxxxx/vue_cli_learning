// 该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";

// 引入组件
import AboutComp from '../pages/AboutComp'
import HomeComp from '../pages/HomeComp'
import NewsComp from '../pages/NewsComp'
import MessageComp from '../pages/MessageComp'
import DetailComp from '../pages/DetailComp'

// 创建一个路由器并暴露
const router = new VueRouter({
    mode:'history',
    routes: [
        {
            path: '/about',
            component: AboutComp
        },
        {
            path:'/home',
            component: HomeComp,
            children: [
                {
                    path: 'news',
                    component: NewsComp
                },
                {
                    path: 'message',
                    component: MessageComp,
                    children: [                        
                        {
                            name: 'detail',
                            path: 'detail/:id/:title',
                            component: DetailComp,

                            // 如果值为真，就会把该路由组件收到的所有params参数，以props的形式传输给Detail组件
                            // props: true

                            // props的第三种写法，值为函数
                            props($route){
                                return {id: $route.query.id, title: $route.query.title}
                            }
                        }                        
                    ]
                }
            ]
        }
    ]
})

router.beforeEach((to, from, next)=>{
    console.log("路由前置首位");
    // 允许访问
    next();
})

export default router
