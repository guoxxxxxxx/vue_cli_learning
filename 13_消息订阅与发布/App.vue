<template>
  <div>

    <!-- 通过父组件给子组件传递函数类型的props实现子组件给父组件传递数据 -->
    <School :getSchoolName="getSchoolName"></School>

    <!-- 绑定一个自定义事件实现子组件给父组件传递数据 -->
    <Student></Student>

    <!-- 另一种写法 -->
    <!-- <Student ref="student"></Student> -->
  </div>
</template>

<script>
// 引入school组件
import School from './components/School';
import Student from './components/Student.vue';
import pubsub from 'pubsub-js';

export default {
    name: 'App',
    components:{ School, Student },
    methods: {
      getSchoolName(name){
        console.log('App收到了学校名:', name);
      },
      demo(name){
        console.log('App收到了学生名', name);
      }
    },
    mounted() {
      // 另一种写法
      // this.$refs.student.$on('sendMsg', this.demo)

      // 消息订阅
      this.pId = pubsub.subscribe('receiveName', (name, value)=>{
        console.log("pubsub收到了信息为:", value, name);
      })
    },
    beforeDestroy(){
      pubsub.unsubscribe(this.pId);
    },
}
</script>

<style>

</style>