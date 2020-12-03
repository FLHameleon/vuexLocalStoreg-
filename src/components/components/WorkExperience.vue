<template>
  <div>

    <label v-bind:class="{done: (onSubmit())}">{{ startData.zagolovok }}:</label>

    <input type="checkBox" v-model="rezult.message">

  </div>
</template>

<script>
// Доделать взятие результата с кнопки
// Если проверка истина то отправить message на главн форму
export default {
  props: [
    'startData'
  ],
  data() {
    return {
      rezult: {
        idName: ('' + this.startData.idName),
        message: false
      }
    }
  },
  methods: {
    onSubmit() {
      // var otpr = Object.assign({}, this.rezult);
      
      this.$emit('rezault', this.rezult)
      
      return false
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