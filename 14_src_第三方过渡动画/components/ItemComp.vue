<template>
  <transition name="animate__animated animate__bounce" 
              appear 
              enter-active-class="animate__backInLeft"
              leave-active-class="animate__backOutLeft">
    <li>
      <label>
        <input
          type="checkbox"
          :checked="obj.done"
          @change="handleCheck(obj.id)"
        />
        <span v-show="!obj.isEdit">{{ obj.title }}</span>
        <input
          v-show="obj.isEdit"
          :value="obj.title"
          @keyup.enter="change(obj.id)"
          ref="newVal"
        />
      </label>
      <button class="btn btn-danger" @click="del(obj.id)">删除</button>
      <button class="btn btn-danger" @click="changeEditStatus(obj.id)">
        编辑
      </button>
    </li>
  </transition>
</template>

<script>
import 'animate.css'
export default {
  props: ["obj", "checkTodo", "delTodo"],
  methods: {
    handleCheck(id) {
      // 更新状态
      this.checkTodo(id);
    },
    // 删除
    del(id) {
      if (confirm("是否确定删除?")) this.delTodo(id);
    },
    changeEditStatus(id) {
      this.$bus.$emit("changeIsEdit", id);
      this.$nextTick(function () {
        this.$refs.newVal.focus();
      });
    },
    // 修改内容
    change(id) {
      this.$bus.$emit("saveNewEdit", id, this.$refs.newVal.value);
    },
  },
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

li:hover {
  background-color: aliceblue;
}

li:hover button {
  display: block;
}
</style>