const app = Vue.createApp({
  template:`
  <div :style="style">Deneme Yazısı</div>
  `,
  data() {
    return {
      style:"color:green"
    }
  },
  methods: {
    
  },
});
  
app.mount('#app')