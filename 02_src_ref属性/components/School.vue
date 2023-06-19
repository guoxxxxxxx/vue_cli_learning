<template>
  <div>
    <button @click="showInfo">点我</button>
    <h2 ref="sname">学校名称: {{ name }}</h2>
    <h2>学校地址: {{ address }}</h2>
  </div>
</template>

<script>
export default {
    name: 'School',
    data() {
        return {
            name: 'NCEPU',
            address: 'BeiJing'
        }
    },
    methods:{
        showInfo(){
            console.log(this.$refs.sname);
        }
    }
}
</script>

<style>

</style>