<template>
  <div id="app">

    <router-link to="/">Назад</router-link>
    
    <h1>все данные</h1>


    <h1>ONE Квитанция о штрафе</h1>
    <div class="post" v-for="post in allModDatas[0]">
      <p>{{post.id}}</p>
      <p>{{post.myData.WhoNameOrganization}}</p>
      <p>{{post.myData.FormName}}</p>
      <p>{{post.myData.DateTime}}</p>
      <p>{{post.myData.numberRegistr}}</p>
    </div>

    <h1>TWO Квитанция Квитанция о приеме отчета</h1>
    <div class="post" v-for="post in allModDatas[1]">
      <p>{{post.id}}</p>
      <p>{{post.myData.WhoNameOrganization}}</p>
      <p>{{post.myData.FormName}}</p>
      <p>{{post.myData.DateTime}}</p>
      <p>{{post.myData.numberRegistr}}</p>
    </div>


    <h1>TREE Квитанция л. к.</h1>
    <div class="post" v-for="post in allModDatas[2]">
      <p>{{post.id}}</p>
      <p>{{post.myData.dannieToWhom}}</p>
      <p>{{post.myData.dannieFromWhom}}</p>
      <p>{{post.myData.dateOfApplication}}</p>
      <p>{{post.myData.DateOfChangeOfPersonalAccountData}}</p>
      <p>{{post.myData.DateOfDeletionOfPersonalAccount}}</p>
      <p>{{post.myData.numberApplicationRegistration}}</p>
      <p>{{post.myData.emailSupport}}</p>
      <p>{{post.myData.phoneSupport}}</p>
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
  /* width: 400px; */
}
.post {
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 1rem
}
</style>