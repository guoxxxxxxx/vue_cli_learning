<template>
  <div class="demo">
    <h2>name: {{ name }}</h2>
    <h2>age: {{ age }}</h2>
  </div>
</template>

<script>

export default {
    name: 'School',
    data() {
        return {
            name: 'Ncepu',
            age: 66
        }
    },
}
</script>

<style scoped>
  .demo{
    background-color: skyblue;
  }
</style>