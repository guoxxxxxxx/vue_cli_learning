<template>
  <div>
    <banner-comp></banner-comp>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- <a class="list-group-item active" href="./about.html">About</a>
          <a class="list-group-item" href="./home.html">Home</a> -->
          <!-- 使用路由 -->
          <router-link to="/home" class="list-group-item" active-class="active">Home</router-link>
          <router-link to="/about" class="list-group-item" active-class="active">About</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!-- 指定组件的呈现位置 -->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BannerComp from './components/BannerComp.vue';
export default {
  components: { BannerComp },
  name: "app",
};
</script>

<style>
</style>