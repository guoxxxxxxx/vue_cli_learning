// 该文件用于创建Vuex中的Store
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'

// 准备actions 用于响应组件中的动作 (方法一般都小写)
const actions = {
    add(context, value){
        context.commit('ADD', value)
    }
}
// 准备mutations 用于操作数据 (方法一般都全部大写)
const mutations = {
    ADD(state, value){
        state.sum += value;
    }
}
// 准备state用于存储数据
const state = {
    sum:0,  // 当前的和
}

Vue.use(Vuex)
// 创建store 并暴露
export default new Vuex.Store({
    actions,
    mutations,
    state,
})