<template>
  <div>

    <label v-bind:class="{done: (onSubmit())}">{{ startData.zagolovok }}:</label>

    <select v-model="znahEducation">
      <option v-for="vidEducation in vidsEducations">{{ vidEducation }}</option>
    </select>

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
      znahEducation: '',
      rezult: {
        idName: ('' + this.startData.idName),
        message: ''
      },
      vidsEducations: [
        'Высшее',
        'Неполное высшее',
        'Среднее',
        'Не полное среднее',
        'Образование отсутствует',
        'Другое'
      ]
    }
  },
  methods: {
    onSubmit() {
      var otpr = Object.assign({}, this.rezult);
      
      // if((/^[А-Я][а-я]+$/.test(otpr.message))) {
      //   this.$emit('rezault', otpr)
      // } else { 
      //   otpr.message = ''
      otpr.message = this.znahEducation
      this.$emit('rezault', otpr)
      // }

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