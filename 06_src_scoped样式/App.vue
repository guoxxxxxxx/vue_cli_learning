<template>
  <div>
    <!-- id默认传的是字符串，加上: 则说明是数字 -->
    <School></School>
    <Student></Student>
  </div>
</template>

<script>
// 引入school组件
import School from './components/School';
import Student from './components/Student.vue'

export default {
    name: 'App',
    components:{ School, Student }
}
</script>

<style>

</style>