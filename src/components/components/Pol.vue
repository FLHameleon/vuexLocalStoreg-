<template>
    <div>
        <label>{{ startData.zagolovok }}:</label>
            <label>Мужской:<input v-bind:class="{done: onSubmit()}" name="polUser" type="radio" value="Men" v-model="rezult.message"/></label>
            <label>Женский:<input v-bind:class="{done: onSubmit()}" name="polUser" type="radio" value="Women" v-model="rezult.message"/></label>
    </div>
</template>

<script>
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