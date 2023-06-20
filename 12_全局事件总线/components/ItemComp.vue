<template>
  <li>
    <label>
      <input type="checkbox" :checked="obj.done" @change="handleCheck(obj.id)"/>
      <span>{{ obj.title }}</span>
    </label>
    <button class="btn btn-danger" @click="del(obj.id)">删除</button>
  </li>
</template>

<script>
export default {
    props:['obj'],
    methods:{
        handleCheck(id){
            // 更新状态
            // this.checkTodo(id);
            this.$bus.$emit('checkTodo', id);
        },
        // 删除
        del(id){
            if(confirm("是否确定删除?")){
                // this.delTodo(id);
                this.$bus.$emit('delTodo', id);
            }
        }
    }
};
</script>

<style scoped>
/*item*/
li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }

  li:hover{
    background-color: aliceblue;
  }

  li:hover button{
    display: block;
  }
</style>