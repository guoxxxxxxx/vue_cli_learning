<template>
  <div>
    <h2>我是Home的内容</h2>
    <ul class="nav nav-tabs">
      <li>
        <!-- <a class="list-group-item" href="./home-news.html">News</a> -->
        <router-link to="/home/news" active-class="active">News</router-link>
      </li>
      <li>
        <!-- <a class="list-group-item active" href="./home-message.html">Message</a> -->
        <router-link to="/home/message" active-class="active">Message</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "HomeComp",
};
</script>

<style>
</style>