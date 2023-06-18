<template>
    <!-- 组件的结构 -->
    <div class="demo">
        <h2>学生名称: {{name}}</h2> <br>
        <h2>学生年龄: {{age}}</h2>
        <button @click="showInfo">点我提示信息</button>
    </div>
</template>

<script>
    // 组件交互的相关代码 
    export default {
        name: 'Student',
        data() {
            return {
                name: 'Tim',
                age: 23
            }
        },
        methods: {
            showInfo(){
                alert(this.name);
            }
        },
    }

</script>

<style>
    /* 组件的样式 */
    .demo {
        background-color: aqua;
    }
</style>