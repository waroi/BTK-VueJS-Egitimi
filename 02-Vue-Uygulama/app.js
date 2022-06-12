const app = Vue.createApp({
  template:`
  <h2>Başlık: {{baslik}}</h2>
  <h3>İçerik: {{icerik}}</h3>
  <p>Yorum Sayısı: {{yorumSayisi}}</p>
  <button v-on:click="ekle()">Ekle</button>
  <p>{{yazi}}</p>
  `,
  data() {
    return {
      baslik:'Vue Dersi',
      icerik:'Vue 3 Konuları',
      yorumSayisi: 0,
      yazi:'Yorum eklemek için tıklayın.'
    }
  },
  methods: {
    ekle(){
      console.log('ekle metodu çalıştı');
      this.yorumSayisi++;
      this.yazi=`${this.yorumSayisi} tane yorum girildi.`
    }
  },
});
  
app.mount('#app')