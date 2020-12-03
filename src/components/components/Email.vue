<template>
  <div>
<p>
    <label  v-bind:class="{done: (onSubmit() && (/^([А-Я]|[а-я]|[A-Z]|[a-z]|[0-9]){5,}$/.test(rezult.message)))}">{{ startData.zagolovok }}:</label>

    <input type="text" v-model="rezult.message">

    <select v-model="okonhan">
      <option v-for="vidMail in vidsMails">{{ vidMail }}</option>
    </select>
</p>
  </div>
</template>

<script>
// Доделать на старте селект пуст
// Если проверка истина то отправить message на главн форму
export default {
  props: [
    'startData'
  ],
  data() {


    return {
      okonhan: '',
      rezult: {
        idName: ('' + this.startData.idName),
        message: ''
      },
      vidsMails: [
          '@mail.ru',
          '@inbox.ru',
          '@list.ru',
          '@bk.ru',
          '@yandex.ru',
          '@gmail.com',
          'Other'
      ]
    }
  },
  methods: {
    onSubmit() {
      var otpr = Object.assign({}, this.rezult);
      
      // if((/^[0-9]{7,10}$/.test(otpr.message))) {
      //   otpr.message = this.valueCity + otpr.message
      //   this.$emit('rezault', otpr)
      // } else { 
      otpr.message = otpr.message + this.okonhan
      this.$emit('rezault', otpr)
      // }

      // console.log(this.valueCity)

      return true
    }
  }
}


</script>

<style scoped>
  .done {
    color: #fff;
    background: green;
  }
</style>