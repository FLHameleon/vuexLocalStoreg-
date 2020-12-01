<template>
    <form @submit.prevent="submit">
        <input type="text" :placeholder="postfromx.pole[0]" v-model="title">
        <input type="text" :placeholder="postfromx.pole[1]" v-model="body">
        <button type="submit">Create Post</button>
        <hr>
        <button v-on:click.prevent="mySave">save</button>
        <button v-on:click.prevent="myDeleteLS">DeleteLocalServer</button>
    </form>
</template>

<script>
import {mapMutations, mapGetters} from "vuex";
export default {
    data() {
        return {
            title: '',
            body: ''
        }
    },
    computed: mapGetters(["postfromx"]),
    methods: {
        ...mapMutations(['createPost', 'updatePostFromx']),
        submit() {
            this.createPost({
                title: this.title,
                body: this.body,
                id: Date.now()
            });
            this.title = this.body = "";
        },
        myDeleteLS() {
            window.localStorage.clear()
        },
        mySave() {
            this.updatePostFromx({
                poleOne: this.title,
                poleTwo: this.body
            })
        }
    },
  mounted() {
    this.$store.dispatch("fetchStartPostfrmx")
  }
}
</script>

<style scoped>
input {
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 2px;
    padding: 10px;
    margin-bottom: 10px;
}
</style> 