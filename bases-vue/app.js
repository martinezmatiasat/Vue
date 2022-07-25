// import heroes from 'src/data/heroes'
// console.log(heroes)

const heroes = [
   {
      id: 1,
      name: 'Batman',
      owner: 'DC'
   },
   {
      id: 2,
      name: 'Spiderman',
      owner: 'Marvel'
   },
   {
      id: 3,
      name: 'Superman',
      owner: 'DC'
   },
   {
      id: 4,
      name: 'Flash',
      owner: 'DC'
   },
   {
      id: 5,
      name: 'Wolverine',
      owner: 'Marvel'
   },
];

const app = Vue.createApp({
   data() {
      return {
         heroes,
         newQuote: ''
         
      }
   },
   methods: {
      addQuote(event) {
         // if (event.key == 'Enter') {
            this.heroes.push({
               id: 'n',
               name: this.newQuote,
               owner: 'owner'
            })
         // }
      }
   }
})

app.mount('#myApp')