<template>
  <div class="container">
    <category :title="'美食'" :listData="foods">
      <img src="https://www.google.com/favicon.ico" alt="" />
    </category>
    <category :title="'游戏'">
      <ul>
        <li v-for="(item, index) in games" :key="index">{{ item }}</li>
      </ul>
    </category>
    <category :title="'电影'">
      <ul>
        <li v-for="(item, index) in films" :key="index">{{ item }}</li>
      </ul>
    </category>
  </div>
</template>

<script>
import Category from "./components/Category.vue";
export default {
  components: { Category },
  data() {
    return {
      foods: ["火锅", "小龙虾", "烧烤", "牛排"],
      games: ["红警", "CF", "劲舞团", "超级玛丽"],
      films: [
        "《教父》",
        "《拆弹专家》",
        "《你好，李焕英》",
        "《我的兄弟叫顺溜》",
      ],
    };
  },
};
</script>

<style>
.container {
  display: flex;
  justify-content: space-around;
}
</style>