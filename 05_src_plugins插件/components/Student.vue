<template>
  <div>
    <h2>name: {{ name }}</h2>
    <h2>age: {{ age }}</h2>
  </div>
</template>

<script>

export default {
    name: 'Student',
    data() {
        return {
            name: '张三',
            age: 123
        }
    },
}
</script>

<style>

</style>