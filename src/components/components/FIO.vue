<template>
  <div>

    <label v-bind:class="{done: (onSubmit() && (/^[А-Я][а-я]+$/.test(rezult.message)))}">{{ startData.zagolovok }}:</label>

    <input type="text" v-model="rezult.message">

  </div>
</template>

<script>
// import Anketa from '/home/iai/workOcen3/19112020/0805/src/views/Anketa'
// Если проверка истина то отправить message на главн форму
export default {
  props: [
    'startData'
  ],
  data() {
    return {
      rezult: {
        idName: ('' + this.startData.idName),
        message: ''
      }
    }
  },
  methods: {
    onSubmit() {
      var otpr = Object.assign({}, this.rezult);
      
      if((/^[А-Я][а-я]+$/.test(otpr.message))) {
        this.$emit('rezault', otpr)
      } else { 
        otpr.message = ''
        this.$emit('rezault', otpr)
      }

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