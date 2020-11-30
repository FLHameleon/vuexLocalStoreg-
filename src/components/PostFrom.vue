<template>
    <form @submit.prevent="submit">
        <h1>{{ startData.pole[0] }}-----{{ startData.pole[1] }}</h1>
        <input type="text" placeholder="title" v-model="title">
        <input type="text" placeholder="body" v-model="body">
        <button type="submit">Create Post</button>
        <hr>
        <button v-on:click.prevent="mySave">save</button>
    </form>
</template>

<script>
import {mapMutations} from "vuex";
export default {
    props: [
        'startData'
    ],
    data() {
        return {
            title: '' + this.startData.pole[0],
            body: '' + this.startData.pole[1]
        }
    },
    methods: {
        ...mapMutations(['createPost']),
        submit() {
            this.createPost({
                title: this.title,
                body: this.body,
                id: Date.now()
            });
            this.title = this.body = "";
        },
        mySave() {
            window.localStorage.setItem('zagolov', this.title)
            window.localStorage.setItem('textPost', this.body)
        }
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