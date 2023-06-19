<template>
  <ul class="todo-main">
    <item-comp v-for="obj in todos" :key="obj.id" :obj="obj" :checkTodo="checkTodo" :delTodo="delTodo"></item-comp>
  </ul>
</template>

<script>
import ItemComp from "../components/ItemComp.vue";
export default {
  components: { ItemComp },
  props: ['todos', 'checkTodo', 'delTodo']
};
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>