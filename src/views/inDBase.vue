<template>
  <div>

    <router-link to="/">Назад</router-link>
    <form class="textPoleRu">

    <p>Введите данные для входа</p>

    <dannieEmail :startData="dannieEmail" @rezault="rezultAnket"/>
    <danniePassword :startData="danniePassword" @rezault="rezultAnket"/>

    <div v-if="!isNeAktiv">
      <button disabled>Ввод</button>
    </div>

    <div v-else>

      <button @click.prevent="checkDannie">Ввод</button>

      <div v-if="isDataBase">
        <router-link to="/dataBase">Перейти к архиву</router-link>
      </div>

    </div>


    </form>

    <router-link to="/">Назад</router-link>
    
  </div>
</template>

<script>
import {mapMutations, mapGetters} from 'vuex'/////////////////////////


import dannieEmail from '@/components/dannieEmail'
import danniePassword from '@/components/danniePassword'

export default {
  name: 'app',

  computed: mapGetters(["allModRezault"]),///////////

  data() {
    return {
      isNeAktiv: true,
      isDataBase: false,
      sborkaUser: {},

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
      ...mapMutations(['checkData']),
      rezultAnket(todo) {
        this.sborkaUser[todo.idName] = todo.message

        this.isNeAktiv = true
        for (let key in this.sborkaUser) {
          if(this.sborkaUser[key] == '') {
            this.isNeAktiv = false
            return
          }
        }
      },
      checkDannie() {
          this.checkData({
          myData: this.sborkaUser
        });

        if(this.allModRezault) {
          this.isDataBase = true
          alert('Данные верные можете пройти в баду данных.')
        } else {
          this.isDataBase = false
          alert('Ошибка.')
        }
      }
     
    },

  components: {
    dannieEmail, danniePassword
  },
  mounted() {
    this.$store.dispatch("fetchStartInDBase")
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