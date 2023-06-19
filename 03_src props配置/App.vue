<template>
  <div>
    <!-- id默认传的是字符串，加上: 则说明是数字 -->
    <School name="张三" address="BeiJing" :id="1"></School>
  </div>
</template>

<script>
// 引入school组件
import School from './components/School';

export default {
    name: 'App',
    components:{ School }
}
</script>

<style>

</style>