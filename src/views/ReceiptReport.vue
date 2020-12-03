<template>
  <div>

    <router-link to="/">Назад</router-link>
    <form class="textPoleRu">

    <h1>Квитанция о приеме отчета</h1>


    <p>От: Главное управление статистики ДНР</p>

    <dannieText :startData="WhoNameOrganization" @rezault="rezultAnket"/>

    <hr>

    <dannieText :startData="FormName" @rezault="rezultAnket"/>

    <dannieDate :startData="DateTime" @rezault="rezultAnket"/>


    <dannieNumber :startData="numberRegistr" @rezault="rezultAnket"/>

    <button v-if="!isNeAktiv" @click.prevent="messAnket" disabled>Отправить</button>
    <button v-else @click.prevent="messAnket">Отправить</button>

    </form>

    <router-link to="/">Назад</router-link>
    
    <!-- <p>{{ allModReceiptReport }}</p> -->

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

  computed: mapGetters(["allModReceiptReport"]),//////////////////////////////////

  data() {
    return {
      isNeAktiv: true,
      sborkaUser: {},
      WhoNameOrganization: {
        idName: 'WhoNameOrganization',
        zagolovok: 'Кому наименование организации: '
      },

      FormName: {
        idName: 'FormName',
        zagolovok: 'Главным управлением статистики ДНР принят в электронном виде отчет по форме:'
      },

      DateTime: {
        idName: 'DateTime',
        zagolovok: 'Дата приема отчета:'
      },

      numberRegistr: {
        idName: 'numberRegistr',
        zagolovok: 'Регистрационный №:'
      }




    }
  },

  methods: {
      ...mapMutations(['upDateModReceiptReport']),///////////////////////////////////////
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
            this.upDateModReceiptReport({//////////////////////
                myData: this.sborkaUser,//////////////////////
                id: Date.now()//////////////////////
            });//////////////////////


        alert('Объект отправлен содержимое можно посмотреть в консоле.')
        console.log(this.sborkaUser)
      }
     
    },

  components: {
    dannieText, dannieDate, dannieNumber, dannieEmail, danniePhone
  },
  mounted() {
    this.$store.dispatch("fetchModReceiptReport")//////////////////////////
  }
}
</script>

<style scoped>

.textPoleRu {
    text-align:left;
    /* width: 900px; */
}

</style>