const app = Vue.createApp({
   /* template: `
      <h1>Hola que tal</h1>
      <p>
         {{ 1+2 }}
      </p>
   ` */

   data() {
      return {
         quote: 'Hola'
      }
   },
   methods: {
      changeQuote() {
         this.quote = this.quote + ' mundo'
      },
      capitalize() {
         this.quote = this.quote.toUpperCase()
      }
   }
})

app.mount('#myApp')