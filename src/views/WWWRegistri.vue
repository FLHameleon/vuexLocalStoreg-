<template>
  <div>

    <router-link to="/">Назад</router-link>
    <form class="textPoleRu">

    <p>Введите данные для входа</p>

    <dannieEmail :startData="dannieEmail" @rezault="rezultAnket"/>
    <danniePassword :startData="danniePassword" @rezault="rezultAnket"/>

    </form>

    <router-link to="/">Назад</router-link>
    
  </div>
</template>

<script>

import dannieEmail from '/home/iai/workOcen3/30112020/0819/src/components/dannieEmail'
import danniePassword from '/home/iai/workOcen3/30112020/0819/src/components/danniePassword'

export default {
  name: 'app',
  data() {
    return {

      dannieEmail: {
        idName: 'dannieEmail',
        zagolovok: 'Электронная почта: '
      },

      danniePassword: {
        idName: 'danniePassword',
        zagolovok: 'Пароль: '
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
            break
          }
        }

      },
      messAnket() {
        alert('Объект отправлен содержимое можно посмотреть в консоле.')
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