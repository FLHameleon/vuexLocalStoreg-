<template>
  <div>

    <router-link to="/">Назад</router-link>
    <form class="textPoleRu">

    <h1>Квитанция о штрафе за несвоевременную подачу отчета</h1>


    <p>От: Главное управление статистики ДНР</p>

    <dannieText :startData="WhoNameOrganization" @rezault="rezultAnket"/>


<dannieText :startData="FormName" @rezault="rezultAnket"/>
<p>Дата генерации квитанции:     <dannieDate :startData="DateTime" @rezault="rezultAnket"/></p>
<p>Регистрационный №: <dannieNumber :startData="numberRegistr" @rezault="rezultAnket"/></p>
<p></p>
<p></p>
<p> <label>{{ sborkaUser.WhoNameOrganization + '---' }}</label> виновно в совершении правонарушения, </p>
<p>ответственность за которое предусмотрена частью 1 ст. 1863 КУоАП, и на него налагается </p>
<p>административное взыскание в виде штрафа в размере 10 необлагаемых минимумов </p>
<p>доходов граждан, а именно 340 (трехсот сорока) российских рублей. Штраф должен быть </p>
<p>уплачен в Республиканский бюджет:</p>
<p>Номер счета – 4010181072000001101;</p>
<p>Валюта – российский рубль;</p>
<p>Получатель – Казначейство Донецкой Народной Республики (Главстат ДНР);</p>
<p>Наименование кода поступлений в бюджет – л/с 04011000290 наложение и</p>
<p> взыскание штрафов за несвоевременную сдачу статистических отчетов;</p>
<p>ИКЮЛ получателя – 51002828;</p>
<p>Банк получателя – ЦРБ ДНР;</p>
<p>БИК банка – 310101001;</p>
<p>Код классификации доходов бюджета - 12011601033010000140 </p>

    <button v-if="!isNeAktiv" disabled>Отправить</button>
    <button v-else @click="messAnket">Отправить</button>

    <!-- <p>{{ allModReceiptFine }}</p> -->

    </form>

    <router-link to="/">Назад</router-link>
    
  </div>
</template>

<script>
import {mapMutations} from 'vuex'/////////////////////////

import dannieText from '@/components/dannieText'
import dannieDate from '@/components/dannieDate'
import dannieNumber from '@/components/dannieNumber'
import dannieEmail from '@/components/dannieEmail'
import danniePhone from '@/components/danniePhone'

export default {
  name: 'app',
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
        zagolovok: 'Наименование формы:'
      },

      DateTime: {
        idName: 'DateTime',
        zagolovok: 'Дата'
      },

      numberRegistr: {
        idName: 'numberRegistr',
        zagolovok: 'Номер'
      }
    }
  },

  methods: {
      ...mapMutations(['upDateModReceiptFine']),////////////////
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
        this.upDateModReceiptFine({
          myData: this.sborkaUser,
          id: Date.now()
        });///////////////////////////////////////

        alert('Сохранено')

      }
    },
  components: {
    dannieText, dannieDate, dannieNumber, dannieEmail, danniePhone
  }
}
</script>

<style scoped>

.textPoleRu {
    text-align:left;
    /* width: 900px; */
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