<template>
  <div class="category">
    <h3>{{title}}</h3>
    <slot>我是一些默认值，当使用者没有传递具体结构时，我会出现！</slot>
  </div>
</template>

<script>
export default {
    name: 'Category',
    props:['title']
}
</script>

<style>
.category {
    background-color: aqua;
    width: 200px;
    height: 300px;
}
</style>