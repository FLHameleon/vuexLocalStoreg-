<template>
  <div>

    <label v-bind:class="{done: (onSubmit())}">{{ startData.zagolovok }}:</label>

    <input type="date" value="1988-07-05" min="1950-01-01" max="2020-09-01" v-model="rezult.message" />

  </div>
</template>

<script>
// Если проверка истина то отправить message на главн форму
export default {
  props: [
    'startData'
  ],
  data() {
    return {
      rezult: {
        idName: ('' + this.startData.idName),
        message: '2020-08-12'
      }
    }
  },
  methods: {
    onSubmit() {
      var otpr = Object.assign({}, this.rezult);
      
      this.$emit('rezault', otpr)
      
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