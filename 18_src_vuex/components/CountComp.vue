<template>
  <div>
    <h1>当前求和为: {{$store.state.sum}}</h1>
    <select v-model.number="n">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
export default {
    name: 'CountComp',
    data() {
        return {
            n: 1,
        }
    },
    methods:{
        increment(){
            this.$store.dispatch('add', this.n)
            // 如果不向后端请求数据可以直接调用commit
            // this.$store.commit('ADD', this.n)
        },
        decrement(){

        },
        incrementOdd(){

        },
        incrementWait(){

        }
    }
}
</script>

<style>

</style>