import Vue from 'vue'
import Router from 'vue-router'

import Home from '/home/iai/workOcen3/30112020/0819/src/views/Home'
import Userposts from '/home/iai/workOcen3/30112020/0819/src/views/UserPosts'
import ReceiptFine from '/home/iai/workOcen3/30112020/0819/src/views/ReceiptFine'
import ReceiptReport from '/home/iai/workOcen3/30112020/0819/src/views/ReceiptReport'
import ReceiptLK from '/home/iai/workOcen3/30112020/0819/src/views/ReceiptLK'
import DataBase from '/home/iai/workOcen3/30112020/0819/src/views/DataBase'

// import Registri from '/home/iai/workOcen3/30112020/0819/src/views/Registri'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
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
    }
    // ,
    // {
    //   path: '/registri',
    //   component: Registri
    // }
  ]
})