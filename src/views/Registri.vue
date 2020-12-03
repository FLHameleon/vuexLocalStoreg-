<template>
  <div>

    <router-link to="/">Назад</router-link>
    <form class="textPoleRu">

    <p>Введите данные для входа</p>

    <dannieEmail :startData="dannieEmail" @rezault="rezultAnket"/>
    <danniePassword :startData="danniePassword" @rezault="rezultAnket"/>

    <div v-if="!isNeAktiv">
      <button @click.prevent="errorInform" disabled>Ввод</button>
    </div>

    <div v-else>
      <div v-if="isVernDannie">
      <button @click.prevent><router-link to="/dataBase">Ввод</router-link></button>
      </div>

      <div v-else>
      <button @click.prevent="errorInform">Ввод</button>
      </div>
    </div>


    </form>

    <router-link to="/">Назад</router-link>
    
  </div>
</template>

<script>

import dannieEmail from '@/components/dannieEmail'
import danniePassword from '@/components/danniePassword'

export default {
  name: 'app',
  data() {
    return {
      isNeAktiv: true,
      isVernDannie: false,
      sborkaUser: {},

      dannieEmail: {
        idName: 'dannieEmail',
        zagolovok: 'Электронная почта: '
      },

      danniePassword: {
        idName: 'danniePassword',
        zagolovok: 'Пароль: '
      },

      avtorizUser: {
        dannieEmail: 'admin@gmail.com',
        danniePassword: 'admin'
      }

    }
  },

  methods: {
      rezultAnket(todo) {
        this.sborkaUser[todo.idName] = todo.message

        this.isNeAktiv = true
        for (let key in this.sborkaUser) {
          if(this.sborkaUser[key] == '') {
            this.isNeAktiv = false
            return
            // break
          }
        }

        this.isVernDannie = false
        for (let key in this.sborkaUser) {
          if(this.sborkaUser[key] != this.avtorizUser[key]) {
            this.isVernDannie = false
            return
            // break

          }
        }


        this.isVernDannie = true
      },
      errorInform() {
        console.log(this.sborkaUser)
        alert('Ошибка.')
      },
      messAnket() {


        // alert('Ошибка.')
        // alert('Объект отправлен содержимое можно посмотреть в консоле.')
        console.log(this.sborkaUser)
      }
     
    },

  components: {
    dannieEmail, danniePassword
  }
}
</script>

<style scoped>

.textPoleRu {
    text-align:left;
    width: 900px;
}

.elemData {
    float: right;
}

label {
    float:left;
}

.anketList {
    float:left
}
</style>