import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home'
import Anketa from '@/views/Anketa'
import Userposts from '@/views/UserPosts'
import ReceiptFine from '@/views/ReceiptFine'
import ReceiptReport from '@/views/ReceiptReport'
import ReceiptLK from '@/views/ReceiptLK'
import DataBase from '@/views/DataBase'
import Registri from '@/views/Registri'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/anketa',
      component: Anketa
    },
    {
      path: '/userposts',
      component: Userposts
    },
    {
      path: '/receiptLK',
      component: ReceiptLK
    },
    {
      path: '/receiptFine',
      component: ReceiptFine
    },
    {
      path: '/receiptReport',
      component: ReceiptReport
    },
    {
      path: '/dataBase',
      component: DataBase
    },
    {
      path: '/registri',
      component: Registri
    }
  ]
})