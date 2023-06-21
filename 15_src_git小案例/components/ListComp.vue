<template>
  <div class="row">
    <!-- 展示用户列表 -->
    <div class="card" v-for="user in users" :key="user.id">
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style="width: 100px" />
      </a>
      <p class="card-text">xxxxxx</p>
    </div>

    <!-- 欢迎词 -->
    <h1 v-show="isFirst">欢迎使用!</h1>

    <!-- 加载中 -->
    <h1 v-show="isLoading">加载中...</h1>

    <!-- 错误信息 -->
    <h2 v-show="errorMsg">请求出错了! {{errorMsg}}</h2>
  </div>
</template>

<script>
export default {
    data() {
        return {
            users:[],
            isFirst: true,
            isLoading: false,
            errorMsg: '',
        }
    },
    mounted(){
        // 全局事件总线
        this.$bus.$on('getUsers', (users) => {
            this.users = users;
        }),
        // 点击搜索按钮时 隐藏欢迎界面
        this.$bus.$on('hiddenFirst', ()=> {
            this.isFirst = false;
        }),
        // 显示错误信息在界面
        this.$bus.$on('showError', (val)=>{
            this.errorMsg = val;
        })
    }
};
</script>

<style>
</style>