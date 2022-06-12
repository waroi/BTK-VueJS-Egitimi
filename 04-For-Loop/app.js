const app = Vue.createApp({
  // template:`
  // <ul>
  //   <li v-for="gun in gunler">{{gun}}</li>
  // </ul>
  // `,
  template:`
  <ul>
    <li v-for="person in persons">Çalışan: {{person.isim}} - Maaş: {{person.maas}}</li>
  </ul>
  `,
  data() {
    return {
      // gunler:["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"]
      persons: [
        {isim:"Varol", maas:4250},
        {isim:"Seyit", maas:5250},
        {isim:"Elif", maas:7250}
      ]
    }
  },
  methods: {
    
  },
});
  
app.mount('#app')