<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" @change="selectAll" :checked="achieveCount === todos.length && todos.length>0"/>
    </label>
    <span> <span>已完成{{ achieveCount }}</span> / 全部{{ todos.length }} </span>
    <button class="btn btn-danger" @click="delTodos">清除已完成任务</button>
  </div>
</template>

<script>
export default {
    props:['todos', 'delAchieveTodo', 'seletAllTodos'],
    computed:{
        /**
         * 计算有多少个项目是已完成的
         */
        achieveCount(){
            let count = 0;
            this.todos.forEach(element => {
                if(element.done === true){
                    count++;
                }
            });
            return count;
        }
    },
    methods:{
        /**
         * 清除已完成项目
         */
        delTodos(){
            this.delAchieveTodo()
        },
        /**
         * 选择所有项目
         */
        selectAll(e){
            this.seletAllTodos(e.target.checked);
        }
    }
};
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>