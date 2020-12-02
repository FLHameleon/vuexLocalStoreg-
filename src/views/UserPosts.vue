<template>
  <div id="app">

    <router-link to="/">Назад</router-link>
    
     <PostForm/>
    <h1>{{postsCount}}</h1>
    <div class="post" v-for="post in validPosts">
      <h2>{{post.title}}</h2>
      <p>{{post.body}}</p>
    </div>

  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
// /home/iai/workOcen3/30112020/0819/src
import PostForm from '/home/iai/workOcen3/30112020/0819/src/components/PostFrom'
export default {
  
  name: 'App',
  computed: mapGetters(["validPosts", "postsCount"]),
  methods: mapActions(['fetchPosts']),
  components: { PostForm },
  async mounted() {
    // this.$store.dispatch("fetchPosts")
    this.fetchPosts();
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
  width: 400px;
}
.post {
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 1rem
}
</style>