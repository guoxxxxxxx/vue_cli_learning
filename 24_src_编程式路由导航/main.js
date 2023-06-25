// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App.vue'
// 关闭Vue的生产提示
Vue.config.productionTip = false
// 引入路由
import VueRouter from 'vue-router'
import router from './router/index'

Vue.use(VueRouter)



new Vue({
    el: '#app',
    render: h => h(App),
    beforeCreate(){
        Vue.prototype.$bus = this;
    },
    router,
})