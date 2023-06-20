<template>
  <div>
    <h2>name: {{ name }}</h2>
    <h2>age: {{ age }}</h2>
    <button @click="sendStudentMsg">点我发送信息</button>
    <button @click="unbind">解绑事件</button>
  </div>
</template>

<script>
export default {
    name: 'Student',
    data() {
        return {
            name: '张三',
            age: 123
        }
    },
    methods:{
      sendStudentMsg(){
        // 触发Student组件实例身上的sendMsg事件
        this.$emit('sendMsg', this.name);
      },
      unbind(){
        // 解绑一个自定义事件
        this.$off('sendMsg');

        // // 解绑多个事件
        // this.$off(['params1', 'params2']);

        // // 解绑全部自定义事件
        // this.$off();
      }
    }
}
</script>

<style>

</style>