<template>
  <div>
    <h3>{{title}}</h3>
    <input type="text" ref="name"><br><br>
    <input type="text" ref="password"><br><br>
    <button @click="login">Giriş</button>
    <br>
    <p v-if="isLogin">Giriş Başarılı</p>
    <p v-else>Giriş Başarısız</p>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      title:"Login",
      name:"Varol",
      password:"1234",
      isLogin:false
    }
  },
  methods: {
    login(){
      return this.$refs.name.value === this.name && this.$refs.password.value === this.password ? this.isLogin = true : this.isLogin = false
    }
  }
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
