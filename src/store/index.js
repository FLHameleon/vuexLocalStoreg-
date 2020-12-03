import Vue from 'vue'
import Vuex from 'vuex'

import post from './modules/post'
import postfromx from './modules/postfromx'

import modReceiptLK from './modules/modView/modReceiptLK'
import modReceiptFine from './modules/modView/modReceiptFine'
import modReceiptReport from './modules/modView/modReceiptReport'
import modDataBase from './modules/modView/modDataBase'
import modRegistri from './modules/modView/modRegistri'
import modInDBase from './modules/modView/modInDBase'



Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        postfromx,
        post,
        modReceiptLK,
        modReceiptFine,
        modReceiptReport,
        modDataBase,
        modRegistri,
        modInDBase
    }
})