<template>
  <div>
    <p>
    <label v-bind:class="{done: onSubmit()}">{{ startData.zagolovok.zagolovokPoly1 }}:</label>
    <input type="password" v-model="message[0]"></p>


    <p>
    <label v-bind:class="{done: onSubmit()}">{{ startData.zagolovok.zagolovokPoly2 }}:</label>      
    <input type="password" v-model="message[1]"></p>


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
        message: ''
      },
      message: ['', '']
    }
  },
  methods: {
    onSubmit() {
      var otpr = Object.assign({}, this.rezult);
      
      if((this.message[0] == this.message[1]) && (/^(.){5,}$/.test(this.message[0])))
      {
        otpr.message = this.message[0]
        this.$emit('rezault', otpr)
      return true
      } else {
        otpr.message = ''
        this.$emit('rezault', otpr)
      return false
      }
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