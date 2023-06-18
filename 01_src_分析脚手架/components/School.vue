<template>
    <!-- 组件的结构 -->
    <div class="demo">
        <h2>学校名称: {{schoolName}}</h2> <br>
        <h2>学校地址: {{address}}</h2>
        <button @click="showInfo">点我提示信息</button>
    </div>
</template>

<script>
    // 组件交互的相关代码 
    export default {
        name: 'School',
        data() {
            return {
                schoolName: 'NCEPU',
                address: 'BeiJing'
            }
        },
        methods: {
            showInfo(){
                alert(this.schoolName);
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