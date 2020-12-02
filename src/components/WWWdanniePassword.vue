<template>
  <div>

    <label  v-bind:class="{done: (onSubmit() && (/^([А-Я]|[а-я]|[A-Z]|[a-z]|[0-9]){5,}$/.test(rezult.message)))}">{{ startData.zagolovok }}</label>
    <p>
    <input type="password" v-model="rezult.message">

    </p>

  </div>
</template>

<script>
//Сравнить с анкетой на vue
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
      // this.$store.dispatch('SAVE_TODO', item);

      var otpr = Object.assign({}, this.rezult);
      
      otpr.message = otpr.message
      this.$emit('rezault', otpr)

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