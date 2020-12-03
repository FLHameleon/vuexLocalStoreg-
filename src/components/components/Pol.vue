<template>
    <div>
        <label>{{ startData.zagolovok }}:</label>
            <label>Мужской:<input v-bind:class="{done: onSubmit()}" name="polUser" type="radio" value="Men" checked/></label>
            <label>Женский:<input v-bind:class="{done: onSubmit()}" name="polUser" type="radio" value="Women"/></label>
    </div>
</template>

<script>
//Доделать чтобы реагировало на изменения
  // $pol: document.querySelector("input[name=polUser]:checked").value,

export default {
  props: [
    'startData'
  ],
  data() {
    return {
      rezult: {
        idName: ('' + this.startData.idName),
        message: 'Men'
      }
    }
  },
  methods: {
    onSubmit() {
      var otpr = Object.assign({}, this.rezult);
      otpr.message = 'Men'
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