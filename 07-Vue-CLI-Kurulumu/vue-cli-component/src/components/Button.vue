<template>
  <div @click="clean">
    <h3>Temizle</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {
    clean(){
      this.$emit('clean')
    }
  },
}
</script>

<style>

</style>