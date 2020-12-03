<template>
  <div id="app">

    <router-link to="/">Выход</router-link>
    
    <h1>все данные</h1>


    <h1>ONE Квитанция о штрафе</h1>
    <div class="stylePost" v-for="post in allModDatas[0]">
      <p>id = {{post.id}}</p>
      <p>Кому наименование организации: {{post.myData.WhoNameOrganization}}</p>
      <p>Наименование формы: {{post.myData.FormName}}</p>
      <p>Дата генерации квитанции: {{post.myData.DateTime}}</p>
      <p>Регистрационный номер: {{post.myData.numberRegistr}}</p>
    </div>

    <h1>TWO Квитанция Квитанция о приеме отчета</h1>
    <div class="stylePost" v-for="post in allModDatas[1]">
      <p>id = {{post.id}}</p>
      <p>Кому наименование организации: {{post.myData.WhoNameOrganization}}</p>
      <p>отчет по форме: {{post.myData.FormName}}</p>
      <p>Дата приема отчета: {{post.myData.DateTime}}</p>
      <p>Регистрационный номер: {{post.myData.numberRegistr}}</p>
    </div>


    <h1>TREE Квитанция л. к.</h1>
    <div class="stylePost" v-for="post in allModDatas[2]">
      <p>id = {{post.id}}</p>
      <p>Кому: {{post.myData.dannieToWhom}}</p>
      <p>Истец: {{post.myData.dannieFromWhom}}</p>
      <p>Дата заявки: {{post.myData.dateOfApplication}}</p>
      <p>Дата изменения данных личного кабинета: {{post.myData.DateOfChangeOfPersonalAccountData}}</p>
      <p>Дата удаления личного кабинета: {{post.myData.DateOfDeletionOfPersonalAccount}}</p>
      <p>Регистрационный номер заявки:  {{post.myData.numberApplicationRegistration}}</p>
      <p>e-mail службы поддержки: {{post.myData.emailSupport}}</p>
      <p>Телефон службы поддержки: {{post.myData.phoneSupport}}</p>
    </div>

  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
// /home/iai/workOcen3/30112020/0819/src
export default {
  name: 'App',
  computed: mapGetters(["allModDatas"]),
  methods: mapActions(['fetchModDatas']),
  components: {},
  mounted() {
    // this.$store.dispatch("fetchPosts")
    this.fetchModDatas();
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
  /* width: 400px; */
}
.stylePost {
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 1rem
}
</style>