import heroes from './data/heroes'

function getHeroById(heroId) {
   return heroes.find( h => h.id == heroId)
}

const getHeroByIdAsync = function (id) {

   return new Promise(function (resolve, reject) {

      setTimeout(() => {
         
         const hero = getHeroById(id)
         resolve(hero)

      }, 1000);
   
   }).then(function (msg) {
   
      console.log(msg)
   
   }).catch(function (params) {
      
   });

}

console.log(getHeroById(2))