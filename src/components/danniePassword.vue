<template>
  <div>
    
    
    <label  v-bind:class="{done: (onSubmit() && (/^(.){5,}$/.test(rezult.message)))}">{{ startData.zagolovok }}</label>
    <p>
    <input type="password" v-model="rezult.message">
    </p>

    <!-- 
    <p>
    <label  v-bind:class="{done: (onSubmit() && (/^([А-Я]|[а-я]|[A-Z]|[a-z]|[0-9]){5,}$/.test(rezult.message[1])))}">{{ startData.zagolovok }}</label>
    <input type="password" v-model="rezult.message[1]">
    </p> -->


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
      var otpr = Object.assign({}, this.rezult);
      if(/^(.){5,}$/.test(otpr.message)) {
        this.$emit('rezault', otpr)
      } else { 
        otpr.message = ''
        this.$emit('rezault', otpr)
      }
      // this.$store.dispatch('SAVE_TODO', item);

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