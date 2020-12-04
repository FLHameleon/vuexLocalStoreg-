<template>
  <div>
    <form class="textPoleRu">
    <router-link to="/">Назад</router-link>
    <h1>РЕГИСТРАЦИЯ:</h1>
    <hr>
    <FIO :startData="dannieName" @rezault="rezultAnket"/>
    <FIO :startData="dannieSurname" @rezault="rezultAnket"/>
    <FIO :startData="dannieMiddleName" @rezault="rezultAnket"/>
    <Pol :startData="danniePol" @rezault="rezultAnket"/>
    <Phone :startData="danniePhone" @rezault="rezultAnket"/>
    <DateOfBirth :startData="dannieDateOfBirth" @rezault="rezultAnket"/>
    <Education :startData="dannieEducation" @rezault="rezultAnket"/>
    <WorkExperience :startData="dannieWorkExperience" @rezault="rezultAnket"/>
    <Salary :startData="dannieSalary" @rezault="rezultAnket"/>
    <Email :startData="dannieEmail" @rezault="rezultAnket"/>
    <Password :startData="danniePassword" @rezault="rezultAnket"/>

    <!-- <button @click.prevent="messAnket">Отправить</button> -->

    <button v-if="isAktiv" @click="messAnket">Отправить</button>
    <button v-else disabled>Отправить</button>


    <router-link to="/">Назад</router-link>
    <hr>

    </form>
   
  </div>
</template>

<script>
import {mapMutations, mapGetters} from 'vuex'/////////////////////////////////////////////////

import FIO from '@/components/components/FIO'
import Pol from '@/components/components/Pol'
import Phone from '@/components/components/Phone'
import DateOfBirth from '@/components/components/DateOfBirth'
import Education from '@/components/components/Education'
import WorkExperience from '@/components/components/WorkExperience'
import Salary from '@/components/components/Salary'
import Email from '@/components/components/Email'
import Password from '@/components/components/Password'

export default {
  name: 'app',

  computed: mapGetters(["allModRegistri"]),//////////////////

  data() {
    return {
      isAktiv: false,
      sborkaUser : {},
      dannieName: {
        idName: 'dannieName',
        zagolovok: 'Имя'
      },
      dannieSurname: {
        idName: 'dannieSurname',
        zagolovok: 'Фамилия'
      },
      dannieMiddleName: {
        idName: 'dannieMiddleName',
        zagolovok: 'Отчество'
      },

      danniePol: {
        idName: 'danniePol',
        zagolovok: 'Пол'
      },

      danniePhone: {
        idName: 'danniePhone',
        zagolovok: 'Телефон'
      },

      dannieDateOfBirth: {
        idName: 'dannieDateOfBirth',
        zagolovok: 'Дата рождения'
      },

      dannieEducation: {
        idName: 'dannieEducation',
        zagolovok: 'Образование'
      },

      dannieWorkExperience: {
        idName: 'dannieWorkExperience',
        zagolovok: 'Имеется ли опыт работы'
      },

      dannieSalary: {
        idName: 'dannieSalary',
        zagolovok: 'Заработная плата',
        startZnah: 20500,
        minMoney: 10000,
        maxMoney: 50000,
        lengthStep: 1000
      },

      dannieEmail: {
        idName: 'dannieEmail',
        zagolovok: 'e-mail '
      },

      danniePassword: {
        idName: 'danniePassword',
        zagolovok: {
          zagolovokPoly1:'Пароль', 
          zagolovokPoly2:'Введите пароль'
        }
      }
    }
  },
  methods: {
      ...mapMutations(['upDateModRegistri']),////////////////////////
    rezultAnket(todo) {
    
      let isFlag115 = false
      this.sborkaUser[todo.idName] = todo.message


      this.isAktiv = false
      for (let key in this.sborkaUser) {
        if(this.sborkaUser[key] == '' && typeof(this.sborkaUser[key]) != 'boolean') {
          // console.log(key)
          // this.isNeAktiv = false
          isFlag115 = true 
          break
        }
      }
      if(isFlag115) this.isAktiv = false
      else this.isAktiv = true


  
    },
    messAnket() {
      
      this.upDateModRegistri({
          myData: this.sborkaUser,
          id: Date.now()
      });
      alert('Сохранено')
      // console.log('button ', this.isAktiv)
      // console.log(this.sborkaUser)      
    }
  },
  components: {
    FIO, Pol, Phone, DateOfBirth, Education, WorkExperience, Salary, Email, Password
  },
  mounted() {
    this.$store.dispatch("fetchModRegistri")////////////////////////////////////
  }
}
</script>

<style scoped>

.textPoleRu {
    text-align:right;
    float:left
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