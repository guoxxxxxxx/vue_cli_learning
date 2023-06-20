<template>
  <div>
    <h2>name: {{ name }}</h2>
    <h2>age: {{ age }}</h2>
    <button @click="sendSchoolName">把学校的名称给APP</button>
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
    props:['getSchoolName'],
    methods:{
      sendSchoolName(){
        this.getSchoolName(this.name);
      }
    }
}
</script>

<style>

</style>