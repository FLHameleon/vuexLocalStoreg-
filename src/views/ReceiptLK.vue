<template>
  <div>

    <router-link to="/">Назад</router-link>
    <form class="textPoleRu">

    <p>От: Главное управление статистики ДНР</p>

    <dannieText :startData="dannieToWhom" @rezault="rezultAnket"/>
    <dannieText :startData="dannieFromWhom" @rezault="rezultAnket"/>

    <p>Главное управление статистики Донецкой Народной Республики  зарегистрировало Вашу заявку о возможности предоставления форм отчётности в электронном виде.</p>

    <dannieDate :startData="dateOfApplication" @rezault="rezultAnket"/>
    <dannieDate :startData="DateOfChangeOfPersonalAccountData" @rezault="rezultAnket"/>
    <dannieDate :startData="DateOfDeletionOfPersonalAccount" @rezault="rezultAnket"/>


    <dannieNumber :startData="numberApplicationRegistration" @rezault="rezultAnket"/>
    <p></p>
    <p>По возникающим вопросам можно обратиться</p>
    <dannieEmail :startData="emailSupport" @rezault="rezultAnket"/>
    <danniePhone :startData="phoneSupport" @rezault="rezultAnket"/>

    <button v-if="!isNeAktiv" @click.prevent="messAnket" disabled>Отправить</button>
    <button v-else @click.prevent="messAnket">Отправить</button>

    <hr>

    <!-- <p>{{ allModReceiptLK }}</p> -->

    </form>
   
    <router-link to="/">Назад</router-link>
    
  </div>
</template>

<script>
import {mapMutations, mapGetters} from 'vuex'

import dannieText from '@/components/dannieText'
import dannieDate from '@/components/dannieDate'
import dannieNumber from '@/components/dannieNumber'
import dannieEmail from '@/components/dannieEmail'
import danniePhone from '@/components/danniePhone'

export default {
  name: 'app',

  computed: mapGetters(["allModReceiptLK"]),


  data() {
    return {
      isNeAktiv: true,
      sborkaUser: {},
      dannieToWhom: {
        idName: 'dannieToWhom',
        zagolovok: 'Кому: '
      },

      dannieFromWhom: {
        idName: 'dannieFromWhom',
        zagolovok: 'Истец: '
      },

      dateOfApplication: {
        idName: 'dateOfApplication',
        zagolovok: 'Дата заявки: '
      },
      
      DateOfChangeOfPersonalAccountData: {
        idName: 'DateOfChangeOfPersonalAccountData',
        zagolovok: 'Дата изменения данных личного кабинета: '
      },
      
      DateOfDeletionOfPersonalAccount: {
        idName: 'DateOfDeletionOfPersonalAccount',
        zagolovok: 'Дата удаления личного кабинета: '
      },

      numberApplicationRegistration: {
        idName: 'numberApplicationRegistration',
        zagolovok: 'Регистрационный № заявки: '
      },

      emailSupport: {
        idName: 'emailSupport',
        zagolovok: 'e-mail службы поддержки: '
      },

      phoneSupport: {
        idName: 'phoneSupport',
        zagolovok: 'Телефон службы поддержки: '
      }
    }
  },

  methods: {
      ...mapMutations(['upDateModReceiptLK']),
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
            this.upDateModReceiptLK({
                myData: this.sborkaUser,
                id: Date.now()
            });
        alert('Объект отправлен содержимое можно посмотреть в консоле.')
        console.log(this.sborkaUser)
      }
    },
  components: {
    dannieText, dannieDate, dannieNumber, dannieEmail, danniePhone
  },
  mounted() {
    this.$store.dispatch("fetchModReceiptLK")
  }
}
</script>

<style scoped>

.textPoleRu {
    text-align:left;
    width: 600px;
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