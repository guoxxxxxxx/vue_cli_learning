<template>
  <div>
    <h1>{{ msg }}</h1>
    <button @click="showInfo">点我</button>
    <h2 ref="sname">学校名称: {{ name }}</h2>
    <h2>学校地址: {{ address }}</h2>
    <h2>学校id: {{ id }}</h2>
  </div>
</template>

<script>
export default {
    name: 'School',
    data() {
        return {
            msg: 'welcome to beijing!'
        }
    },
    methods:{
        showInfo(){
            console.log(this.$refs.sname);
        }
    },
    // props:['name', 'address', 'id'] // 简单接收

    // 接收的同时对数据进行类型限制
    /*
    props:{
        name: String,
        id: Number,
        address: String
    }
    */
    /**
     * 不要修改传进来的数值，如果非要改的话，可以再data里面定义新的数据，存储接收来的数据，修改data中的数据
     */
    props:{
        name:{
            type: String,   // 类型
            require: true,  //是否一定需要
        },
        id:{
            type: Number,
            default: 100,   // 默认值
        },
        address:{
            type: String
        }
    }
}
</script>

<style>

</style>