<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <header-comp :addTodo="addTodo"></header-comp>
        <list-comp :todos="todos" :checkTodo="checkTodo" :delTodo="delTodo"></list-comp>
        <footer-comp :todos="todos" :delAchieveTodo="delAchieveTodo" :seletAllTodos="seletAllTodos"></footer-comp>
      </div>
    </div>
  </div>
</template>

<script>
import FooterComp from "./components/FooterComp.vue";
import HeaderComp from "./components/HeaderComp.vue";
import ListComp from "./components/ListComp.vue";

export default {
  name: "App",
  components: {
    FooterComp,
    HeaderComp,
    ListComp,
  },
  data() {
    return {
        todos:[
            // {id: '001', title:'吃饭', done:true},
            // {id: '002', title:'抽烟', done:false},
            // {id: '003', title:'喝酒', done:false},
            // {id: '004', title:'烫头', done:true}
        ]
    }
  },
  mounted(){
    this.todos = JSON.parse(localStorage.getItem('data'));
  },
  methods:{
    // 添加一个todo
    addTodo(msg){
      this.todos.push(msg);
      localStorage.setItem('data', JSON.stringify(this.todos));
    },
    // 勾选or取消勾选todo
    checkTodo(id){
      this.todos.forEach((todo)=>{
        if(todo.id === id){
          todo.done = !todo.done;
        }
      })
    },
    // 删除元素
    delTodo(id){
      this.todos = this.todos.filter((todo)=>{
        if(todo.id === id) return false;
        else return true;
      })
      localStorage.setItem('data', JSON.stringify(this.todos));
    },
    // 删除已完成元素
    delAchieveTodo(){
      this.todos = this.todos.filter((todo)=>{
        if(todo.done === true) return false;
        else return true;
      })
      localStorage.setItem('data', JSON.stringify(this.todos));
    },
    // 勾选全部
    seletAllTodos(value){
      this.todos.forEach((todo)=>{
        todo.done = value;
      })
    }
  }
};
</script>

<style>
  /*base*/
  body {
    background: #fff;
  }

  .btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
  }

  .btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
  }

  .btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
  }

  .btn:focus {
    outline: none;
  }

  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  
</style>