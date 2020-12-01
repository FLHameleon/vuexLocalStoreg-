import Vue from 'vue'
import Vuex from 'vuex'
import post from './modules/post'
import postfromx from './modules/postfromx'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        postfromx,
        post
    }
})