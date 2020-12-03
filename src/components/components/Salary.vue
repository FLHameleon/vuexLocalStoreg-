<template>
  <div>

  <label v-bind:class="{done: (onSubmit())}">{{ startData.zagolovok }}:</label>

<input type="range" :min="startData.minMoney" :max="startData.maxMoney" :step="startData.lengthStep" v-model="value"> 
<!-- <input type="number" v-model="value"/> -->
 
<span v-text="total"></span>

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
      value: this.startData.startZnah,
      rezult: {
        idName: ('' + this.startData.idName),
        message: ''
      }
    }
  },
  computed: {
      total: function () {
      return this.value
    }
  },
  methods: {
    onSubmit() {
      var otpr = Object.assign({}, this.rezult);
      
      // if((/^[А-Я][а-я]+$/.test(otpr.message))) {
      //   this.$emit('rezault', otpr)
      // } else { 
      //   otpr.message = ''

      otpr.message = this.value
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