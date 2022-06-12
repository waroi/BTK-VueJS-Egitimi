<template>
  <div>
    <Title :titleText="text" :text="text2" />
    <h3>App.vue Başlık</h3>
    <Button @clean="cleanInput"/>
    <input type="text" ref="inputText">
  </div>
</template>

<script>
import Title from './components/Title.vue'
import Button from './components/Button.vue'
export default {
  name: 'App',
  components: {
    Title,
    Button
  },
  data() {
    return {
      text:"Vue 3'e Giriş",
      text2:"Vue'ye hoş geldiniz."
    }
  },
  methods: {
    cleanInput(){
      this.$refs.inputText.value = ''
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
