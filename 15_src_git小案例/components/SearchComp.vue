<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="keyWord"
      />&nbsp;<button @click="searchUsers">Search</button>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            keyWord: '',
        }
    },
    methods:{
        searchUsers(){
            axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
                resp => {
                    this.$bus.$emit('getUsers', resp.data.items);
                    this.$bus.$emit('hiddenFirst');
                },
                err => {
                    console.log('error', err.msg);
                    this.$bus.$emit('showError', err.msg);
                }
            )
        }
    }
};
</script>

<style>
</style>