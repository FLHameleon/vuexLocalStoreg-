<template>
  <div>

    <label v-bind:class="{done: (onSubmit() && (/^[0-9]+$/.test(rezult.message)))}">{{ startData.zagolovok }}</label>

    <input type="text" v-model="rezult.message">

  </div>
</template>

<script>
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
      }
    }
  },
  methods: {
    onSubmit() {
      var otpr = Object.assign({}, this.rezult);
      
      if((/^[0-9]+$/.test(otpr.message))) {
        otpr.message = this.valueCity + otpr.message
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