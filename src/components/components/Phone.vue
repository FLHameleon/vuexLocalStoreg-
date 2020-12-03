<template>
  <div>

    <label v-bind:class="{done: (onSubmit() && (/^[0-9]{7,10}$/.test(rezult.message)))}">{{ startData.zagolovok }}:</label>

    <select v-model="valueCity">
        <option v-for="kodCity in kodCities">{{ kodCity }}</option>
    </select>

    <input type="text" v-model="rezult.message">

  </div>
</template>

<script>
// При старте страницы select выбрано пустое поле
// Если проверка истина то отправить message на главн форму
export default {
  props: [
    'startData'
  ],
  data() {
    return {
      valueCity: '',
      rezult: {
        idName: ('' + this.startData.idName),
        message: ''
      },
      kodCities: [
          '+38(071)',
          '+38(066)',
          '+7(044)',
          '+7(165)'
      ]
    }
  },
  methods: {
    onSubmit() {
      var otpr = Object.assign({}, this.rezult);
      
      if((/^[0-9]{7,10}$/.test(otpr.message))) {
        otpr.message = this.valueCity + otpr.message
        this.$emit('rezault', otpr)
      } else { 
        otpr.message = ''
        this.$emit('rezault', otpr)
      }

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