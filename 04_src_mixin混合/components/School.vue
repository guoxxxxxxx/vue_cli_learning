<template>
  <div>
    <h2 @click="showName">name: {{ name }}</h2>
    <h2>age: {{ age }}</h2>
  </div>
</template>

<script>

// 引入一个mixin
import {mixin} from '../mixin'

export default {
    name: 'School',
    data() {
        return {
            name: 'Ncepu',
            age: 66
        }
    },
    mixins:[mixin]
}
</script>

<style>

</style>